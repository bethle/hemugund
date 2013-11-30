var app = {
    errorAlert: function() {
        app.showAlert('Ajax Error');
        location.href = "#Error";
    },
    showAlert: function(message, title) {
        $(".loading").removeAttr("style");
        console.log('alerted: ' + message + ' : ' + title);
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    findMatch: function(ptrn) {
        switch (ptrn) {
            case "rqstns":
                return "Requisitions";
            case "xpnsap":
                return "Exp. Approval";
            case "prchrd":
                return "Purchase Order";
            case "pblnvc":
                return "Payable Invoice";
            case "others":
                return "Others";
            default:
                this.showAlert("No type match", "Find Match");
                return "";
        }
    },
    loadHome: function(data) {
        if (data.response === "SUCCESS") {
            if (app.isOnline()) {
                window.localStorage.setItem("authVars", JSON.stringify({user_name: app.user, password: app.pass}));
            }
            var auth = JSON.parse(window.localStorage.getItem("authVars"));
            app.homePage = new NotificationsView().render();
            app.currentPage = null;
            app.slidePage(app.homePage);
            new NotificationHeaderView().headerListLocal();
        } else {
            if (data.message) {
                app.showAlert(data.message, "ERROR");
            }
            location.href = "#Error";
        }

    },
    route: function() {
        /*
         * If there is no hash tag in the URL: display the Home View 
         * if there is a hash tag matching pattern for any URL call the URL action defined in the notify object
         */
        var hash = window.location.hash, self = this;
        if (!hash) {
            if (this.homePage) {
                this.slidePage(this.homePage.render());
            } else {
                this.homePage = new LoginView().render();
                this.slidePage(this.homePage);
            }
            return;
        }

        var match;
        match = hash.match(/^#Prev/);
        if (match) {
            if (this.prevPage) {
                this.slidePage(this.prevPage, true);
            }
        }
        match = hash.match(app.loginURL);
        if (match) {
            $(".loading").css("display", "block");
            this.user = $('#user-name').val();
            this.pass = $('#password').val();
            if (self.isOnline()) {
                $.ajax({
                    url: self.URL + "Login",
                    data: "login={\"user_name\": \"" + self.user + "\" , \"password\": \"" + self.pass + "\"}",
                    dataType: 'json',
                    success: self.loadHome,
                    error: self.errorAlert
                });
            }
            else {
                var auth = JSON.parse(window.localStorage.getItem("authVars"));
                if (auth.user_name == self.user && auth.password == self.pass) {
                    app.homePage = new NotificationsView().render();
                    app.currentPage = null;
                    app.slidePage(app.homePage);
                    if (!this.isOnline()) {
                        $('#requistion-count').html(NotificationsView.count.result.rqstns);
                        $('#expense-app-count').html(NotificationsView.count.result.xpnsap);
                        $('#pay-inv-count').html(NotificationsView.count.result.pblnvc);
                        $('#purch-ord-count').html(NotificationsView.count.result.prchrd);
                    }
                } else {
                    app.showAlert("Invalid Login Credentials", "ERROR");
                    location.href = "#Error";
                }
            }
            return;
        }

        match = hash.match(app.notifyURL);
        if (match) {
            this.data = null;
            this.mod = match[1];
            if (this.isMobile()) {
                this.prevPage = new NotificationHeaderView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)});
            } else {
                this.prevPage = new NotificationFullView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)});
            }
            this.slidePage(self.prevPage);
            if (this.isMobile()) {
                this.prevPage = this.prevPage.render();
            } else {
                this.prevPage = this.prevPage.render();
                $("body").append(self.popTemplate());
                $("#list-items>div").css({height: $(window).height() - 175 + "px"});
                $("#header-details-list").css({height: $(window).height() - 175 + "px"});
                $("#history-list").css({height: $(window).height() - 175 + "px"});
            }
            if (!this.isOnline()) {
                $("#" + app.mod + "-header-list").html(NotificationHeaderView.liTemplate(NotificationHeaderView.list.result));
                $("#more-notify-header").remove();
            }
            return;
        }
        match = hash.match(app.detailsURL);
        if (match) {
            if (this.isMobile()) {
                this.prevPage = new NotificationDetailView({name: $('#' + match[2] + '-name').text(), amount: $('#' + match[2] + '-amount').text(), code: $('#' + match[2] + '-code').text(), date: $('#' + match[2] + '-date').text(), hid: match[2], id: match[3], num: $('#' + match[2] + '-num').text(), desc: $('#' + match[2] + '-subject').text()}).render();
                this.slidePage(this.prevPage);
                $("body").append(self.popTemplate());
            } else {
                this.prevPage.loadDetail(match[3], match[2]);
            }
            $("#list-items>div").css({height: $(window).height() - 175 + "px"});
            $("#header-details-list").css({height: $(window).height() - 175 + "px"});
            $("#history-list").css({height: $(window).height() - 175 + "px"});
            return;
        }

        match = hash.match(/^#Filter/);
        if (match) {
            this.filter();
            return;
        }

        match = hash.match(/^#Back/);
        if (match) {
            if (self.data) {
                this.slidePage(new NotificationHeaderView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)}), true);
                setTimeout(function() {
                    self.filterResult();
                }, 100);
            }
            else {
                this.slidePage(new NotificationHeaderView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)}).render(), true);
            }
            return;
        }

//        match = hash.match(/^#Down(.{1,})-(\d{1,})~(.{1,})/);
//        if (match) {
//            this.slidePage(new FileView({file: match[1], type: match[3], id: match[2]}).render());
//            return;
//        }

        /********SANDEEP***********/
        match = hash.match(/^#Down(.{1,})-(\d{1,})~(.{1,})/);
        if (match) {
            //match[2] = id
            //match[3] = type
            /*            var downloadURL = app.URL + "Download?id="+match[2]+"&type="+match[3];
             if(this.isiOS()){
             window.location = "@@@@openAtachments;;;"+downloadURL;
             }else if(this.isAndroid()){
             Android.downloadAttachment(downloadURL,match[3]);
             }else{
             document.location = downloadURL;
             }
             //window.location = "@@@@openAtachments;;;"+match[2]+";;;"+match[3];
             /*           $.ajax({
             url: app.URL + "Download?id="+match[2]+"&type="+match[3],
             complete: function(data) {
             alert(data);
             writeToFile(data,match[1]);
             }
             });*/
            return;
        }
        /********SANDEEP*****END******/

        match = hash.match(/^#Logout/);
        if (match) {
            $.ajax({
                url: app.URL + "Logout",
                complete: function() {
                    location.href = "";
                }
            });
            return;
        }
    },
    registerEvents: function() {
        var self = this;
        // Add an Event Listener to Listen to URL hash tag Changes
        $(window).on('hashchange', $.proxy(this.route, this));
    },
    initialize: function() {
        this.registerEvents();
        this.URL = "http://182.18.157.157:7001/mob/"; //182.18.157.157:7001 192.168.10.50:8084 192.168.0.121:8084 
        this.notifyURL = /^#Not\/(.{6})/;
        this.loginURL = /^#Login/;
        this.detailsURL = /^#Detail(.{6})\/(\d{1,})-(\d{1,})/;
        this.attachURL = /^#attach\/(.{6})\/.*/;
        this.route();
    },
    filter: function() {
        var self = this;
        if ($("#filter").css("max-height") !== "0px") {
            if (this.isMobile()) {
                $("#search").css({"display": "block"});
                $("#filter-done:visible").before('<a href="#Filter" class="button header-button header-button-right filter-button" id="filter-show" >');
                $("#filter-done:visible").remove();
            }
            else {
                $("#filter-done:visible").before('<a href="#Filter" class="button filter-button" id="filter-show"  style="background-image: url(img/filter.png); margin-top: 5px;background-size:43px 40px;" ></a>');
                $("#filter-done:visible").remove();
            }
            var i = 0;
            var checked = new Array();
            $("#filter").find("input").each(function() {
                if ($(this).is(":checked")) {
                    checked[i] = $(this).val();
                }
                else {
                    checked[i] = "";
                }
                i = i + 1;
            });
            $("select:visible").each(function() {
                checked[i] = $(this).val();
                i = i + 1;
            });

            if (app.mod === "rqstns") {
                this.data = "{\"type\":{\"pr\":" + ((checked[0] !== "") ? true : false) + ",\"ir\":" + ((checked[1] !== "") ? true : false) + "},\"status\":{\"ar\":" + ((checked[2] !== "") ? true : false) + ",\"fyi\":" + ((checked[3] !== "") ? true : false) + ",\"closed\":" + ((checked[4] !== "") ? true : false) + "},\"day\":\"" + checked[5] + "\",\"org\":\"" + checked[6] + "\",\"user\":\"" + app.user + "\"}";
            } else if (app.mod === "prchrd") {
                this.data = "{\"type\":{\"blanket\":" + ((checked[0] !== "") ? true : false) + ",\"planned\":" + ((checked[1] !== "") ? true : false) + ",\"standard\":" + ((checked[2] !== "") ? true : false) + ",\"contract\":" + ((checked[3] !== "") ? true : false) + "},\"status\":{\"ar\":" + ((checked[4] !== "") ? true : false) + ",\"fyi\":" + ((checked[5] !== "") ? true : false) + ",\"closed\":" + ((checked[6] !== "") ? true : false) + "},\"day\":\"" + checked[7] + "\",\"org\":\"" + checked[8] + "\",\"user\":\"" + app.user + "\"}";
            } else {
                this.data = "{\"status\":{\"ar\":" + ((checked[0] !== "") ? true : false) + ",\"fyi\":" + ((checked[1] !== "") ? true : false) + ",\"closed\":" + ((checked[2] !== "") ? true : false) + "},\"day\":\"" + checked[3] + "\",\"org\":\"" + checked[4] + "\",\"user\":\"" + app.user + "\"}";
            }
            $("#" + app.mod + "-header-list").prepend($("<li style='text-align:center;'><img src='img/mini-loading.gif' style='padding-top: 20px;' /> </li>"));
            self.filterResult();

        } else {
//            $("#header-list").hide();
            if (this.isMobile()) {
                $("#search").css({"display": "none"});
                $("#filter-show:visible").before('<a href="#Filter" class="button filter-button-done" id="filter-done" style="position:absolute;right:0;top:0;" >Done</a>')
                $("#filter-show:visible").remove();
            }
            else {
                $("#filter-show:visible").before('<a href="#Filter" class="button filter-button-done" id="filter-done"  >Done</a>')
                $("#filter-show:visible").remove();
            }
            this.slideUp(document.getElementById("header-list"));
            setTimeout(function() {
                app.slideDown(document.getElementById("filter"));
            }, 500);
            location.href = "#selFilter";
        }
    },
    filterResult: function() {
        var self = this;
        $.ajax({
            url: app.URL + "Filter/" + app.mod,
            data: "notify=" + self.data,
            dataType: "json",
            success: app.currentPage.loadHeaderList,
            error: app.errorAlert
        });
        this.slideUp(document.getElementById("filter"));
//            $("#header-list").show();
        setTimeout(function() {
            app.slideDown(document.getElementById("header-list"));
        }, 500);
        location.href = "#Donefilter";
    },
    slidePage: function(page, isBack) {
        var currentPageDest,
                self = this;
        // If there is no current page (app just started) -> No transition: Position new page in the view port
        if (!this.currentPage) {
            $(page.el).attr('class', 'page');
            $('body').html(page.el);
            this.currentPage = page;
            return;
        }

// Cleaning up: remove old pages that were moved out of the viewport

        if (page === app.homePage || isBack) {
// Always apply a Back transition (slide from left) when we go back to the search page
            $(page.el).attr('class', 'page stage-left');
            currentPageDest = "stage-right";
            $(".popup-hide").remove();
        } else {
// Forward transition (slide from right)
            $(page.el).attr('class', 'page stage-right');
            currentPageDest = "stage-left";
        }
        $('body').append(page.el);
        // Wait until the new page has been added to the DOM...
        // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
        $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
        setTimeout(function() {
// Slide in the new page
            $(page.el).attr('class', 'page stage-center transition');
            self.currentPage = page;
            window.setTimeout(function() {
                $('.stage-right, .stage-left').remove();
            }, 300);
        });
    },
    isMobile: function() {
        if (navigator.userAgent.match(/iPad|iPhone|iPod/i) != null && screen.width <= 568) {
            return true;
        } else if (navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/mobile/i))//(navigator.userAgent.match(/mobile/i)&& (!navigator.userAgent.match(/Apple/i)))
        {
            return true;
        } else {
            return false;
        }
    },
    isAndroid: function() {
        return navigator.userAgent.match(/Android/i);
    },
    isBlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    isiOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    isOpera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    isWindows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    isany: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
    tab: function(elem) {
        var index = $(elem).index();
        index = index + 1;
        $("#ui-tab-content>div").removeClass('show');
        $("#ui-tab-content>div:nth-child(" + index + ")").addClass('show');
    },
    toggle: function(e) {
        var elem = this.next(e);
        if (elem.style.maxHeight === '100000px') {
            this.slideUp(elem);
        }
        else {
            this.slideDown(elem);
        }
    },
    approve: function() {
        $(".loading").css({"display": "block"});
        $("#approve-confirm-button").attr("disabled", true);
        var match = window.location.hash;
        match = match.match(app.detailsURL);
        if (match) {
            $.ajax({
                url: app.URL + "Approve/" + app.mod,
                dataType: "json",
                data: "notify={\"id\": \"" + match[3] + "\" , \"user\": \"" + app.user + "\" , \"msg\": \"" + $("#approve-comment").val() + "\"}",
                success: function(data) {
                    $(".loading").css({"display": "none"});
                    $("#popup-bckgrnd").attr("class", "popup-hide");
                    $("#popup-bckgrnd>div>div:nth-child(1)").attr("class", "popup-hide");
                    if (app.isMobile()) {
                        app.slidePage(new NotificationHeaderView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render(), true);
                    } else {
                        app.slidePage(new NotificationFullView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render());
                    }
                    return "success";
                },
                error: function(data) {
                    app.showAlert("Ajax Error");
                    $(".loading").css({"display": "none"});
                    return "error";
                }
            });
        } else {
            app.showAlert("Plaese Select A Notification!");
        }
    },
    forward: function() {
        $(".loading").css({"display": "block"});
//        $("#forward-send-button").attr("disabled", true);
        var match = window.location.hash;
        match = match.match(app.detailsURL);
        if (match) {
            if ($("#user-list").find(":selected").val() === "") {
                app.showAlert("Please Select A user to whome to be Forwarded", "Warning!");
                return;
            }
            $.ajax({
                url: app.URL + "Forward/" + app.mod,
                dataType: "json",
                data: "notify={\"id\": \"" + match[3] + "\" , \"user\": \"" + app.user + "\", \"to_user\": \"" + $("#user-list").find(":selected").val() + "\"}",
                success: function(data) {
                    $(".loading").css({"display": "none"});
                    $("#popup-bckgrnd").attr("class", "popup-hide");
                    $("#popup-bckgrnd>div>div:nth-child(2)").attr("class", "popup-hide");
                    $("#user-list").prop('selectedIndex', 0);
                    if (app.isMobile()) {
                        app.slidePage(new NotificationHeaderView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render(), true);
                    } else {
                        app.slidePage(new NotificationFullView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render());
                    }
                },
                error: function(data) {
//                    $(".loading").css({"display": "none"});
                    app.showAlert("Notification Forward Errored", "ERROR");
                }
            });
        } else {
            app.showAlert("Please Select A Notification!");
        }
    },
    reject: function() {
        $(".loading").css({"display": "block"});
        $("#reject-confirm-button").attr("disabled", true);
        var match = window.location.hash;
        match = match.match(app.detailsURL);
        if (match) {
            $.ajax({
                url: app.URL + "Reject/" + app.mod,
                dataType: "json",
                data: "notify={\"id\": \"" + match[3] + "\" , \"user\": \"" + app.user + "\", \"msg\": \"" + $("#reject-comment").val() + "\"}",
                success: function(data) {
                    $(".loading").css({"display": "none"});
                    $("#popup-bckgrnd").attr("class", "popup-hide");
                    $("#popup-bckgrnd>div>div:nth-child(3)").attr("class", "popup-hide");
                    if (app.isMobile()) {
                        app.slidePage(new NotificationHeaderView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render(), true);
                    } else {
                        app.slidePage(new NotificationFullView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render());
                    }
                    return "success";
                },
                error: function(data) {
                    $(".loading").css({"display": "none"});
                    app.showAlert("Ajax Error");
                    return "error";
                }
            });
        } else {
            app.showAlert("Plaese Select A Notification!");
        }
    },
    slideDown: function(elem)
    {
        if (elem !== null) {
            if (elem.className !== 'ui-list-arrow') {
                elem.style.maxHeight = '100000px';
                elem.style.borderBottom = '1px solid #c2c2c2';
            }
        }
    },
    slideUp: function(elem)
    {
        elem.style.maxHeight = '0';
        elem.style.borderBottom = '0';
    },
    isOnline: function() {
        var self = this;
        if (navigator.onLine) {
            return true;
        } else {
//            self.showAlert("Offline", "Network Error");
            return false;
        }
    },
    next: function(elem) {
        do {
            elem = elem.nextSibling;
        } while (elem && elem.nodeType !== 1);
        return elem;
    },
    popAlert: function(id) {
        var elem = document.getElementById(id);
        elem.parentNode.className = "popup-hide";
        elem.parentNode.parentNode.className = "popup-hide";
        elem.className = "popup-hide";
        elem.parentNode.className = "ui-popup-show";
        elem.parentNode.parentNode.className = "ui-popup-show";
        elem.className = "ui-popup-show";
    },
    closeAlert: function(elem) {
        $("#approve-confirm-button").attr("disabled", false);
        $("#reject-confirm-button").attr("disabled", false);
        $("#forward-send-button").attr("disabled", false);
        document.getElementById('approve-comment').value = "";
        document.getElementById('reject-comment').value = "";
        elem.parentNode.parentNode.className = "popup-hide";
        elem.parentNode.parentNode.parentNode.className = "popup-hide";
        elem.parentNode.className = "popup-hide";
    },
// Used to simulate async calls. This is done to provide a consistent
// that use async data access APIs
    callLater: function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    },
    downloadAttachment: function(file, id, type) {/********SANDEEP***********/
        var downloadURL = app.URL + "Download?id=" + id + "&type=" + type;
        if (this.isiOS()) {
            window.location = "@@@@openAtachments;;;" + downloadURL;
        } else if (this.isAndroid()) {
            Android.downloadAttachment(downloadURL, type);
        } else {
            document.location = downloadURL;
        }

    }/********SANDEEP*****END******/
};

//app.orgListTemplate = Handlebars.compile(document.getElementById("filter-orgs-list-tpl").innerHTML);
app.popTemplate = Handlebars.templates['notification-popup-view-tpl'];
app.initialize();

var fileData, fileName;
function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}
function writeToFile(data, fileNm) {
    fileData = data;
    fileName = fileNm;
    alert("about to write: " + fileNm);
    fileSystem.root.getFile(fileNm, {create: true, exclusive: false}, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {

    fileEntry.createWriter(gotFileWriter, fail);
}

function gotFileWriter(writer) {
    writer.onwriteend = function(evt) {
        console.log("contents of file now 'some sample text'");
//        writer.truncate(11);
        writer.onwriteend = function(evt) {
            console.log("contents of file now 'some sample'");
            writer.seek(4);
            writer.write(" different text");
            writer.onwriteend = function(evt) {
                alert("contents of file now 'some different text'");
            }
        };
    };
    writer.write(fileData);
}

function fail(error) {
    alert("Failed to write: -----" + error.code);
}
$(window).on('orientationchange', function() {
    setTimout(function() {
        if ($("#list-items").is(":visible")) {
            $("#list-items>div").css({height: $(window).height() - 175 + "px"});
        } else if ($("#header-details-list").is(":visible")) {
            $("#header-details-list").css({height: $(window).height() - 175 + "px"});
        } else if ($("#history-list").is(":visible")) {
            $("#history-list").css({height: $(window).height() - 175 + "px"});
        }
    }, 300);
});