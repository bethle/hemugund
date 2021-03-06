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
            app.homePage = new NotificationsView().render();
            app.currentPage = null;
            var headerData = {
                "leftButtonText": {
                    "backgroundImage": {
                        "basicType": "logout",
                        "link": "#Logout"
                    }
                },
                "Header3Text": "Notifications"
            };
            app.slidePage(app.homePage);
            app.attachHeader(headerData);
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
            $.ajax({
                url: self.URL + "Login",
                data: "login={\"user_name\": \"" + self.user + "\" , \"password\": \"" + self.pass + "\"}",
                dataType: 'json',
                success: self.loadHome,
                error: self.errorAlert
            });
            return;
        }

        match = hash.match(app.notifyURL);
        if (match) {
            this.data = null;
            this.mod = match[1];
            var headerData;
            if (this.isMobile()) {
                headerData = {
                    "leftButtonText": {
                        "backgroundImage": {
                            "basicType": "back",
                            "link": "#"
                        }
                    },
                    "rightButton1Image": {
                        "basicType": "filter",
                        "link": "#Filter"
                    },
                    "Header1Text": self.findMatch(self.mod),
                    "Header2Text": self.user
                };
                this.prevPage = new NotificationHeaderView({mod: self.mod}).render();
            } else {
                headerData = {
                    "leftButtonText": {
                        "backgroundImage": {
                            "basicType": "back",
                            "link": "#"
                        }
                    },
                    "rightButton1Image": {
                        "basicType": "action"
                    },
                    "Header1Text": self.findMatch(self.mod),
                    "Header2Text": self.user
                }
                this.prevPage = new NotificationFullView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)}).render();
                $("body").append(self.popTemplate());
            }
            this.slidePage(self.prevPage);
            app.attachHeader(headerData);
            return;
        }
        match = hash.match(app.detailsURL);
        if (match) {
            var headerData;
            if (this.isMobile()) {
                headerData = {
                    "leftButtonText": {
                        "backgroundImage": {
                            "basicType": "back",
                            "link": "#Back"
                        }
                    },
                    "rightButton1Image": {
                        "basicType": "action"
                    },
                    "Header3Text": $('#' + match[2] + '-num').text()
                };
                this.prevPage = new NotificationDetailView({name: $('#' + match[2] + '-name').text(), amount: $('#' + match[2] + '-amount').text(), code: $('#' + match[2] + '-code').text(), date: $('#' + match[2] + '-date').text(), hid: match[2], id: match[3], desc: $('#' + match[2] + '-subject').text()}).render();
                this.slidePage(this.prevPage);
                var tabWrappers = [NotificationDetailView.linesListWrapper({code: $('#' + match[2] + '-code').text()}), NotificationDetailView.headerDetailsListWrapper, NotificationDetailView.historyDetailsListWrapper];
                var tabData = {
                    "tabList": 3,
                    "activeTab": 1
                };
                $("#header-description").after(Templates.tabsTemplate(tabData));
                for (var i = 1; i <= $("#mg_ui-tab-content>div").length; i++) {
                    $("#mg_ui-tab-content>div:nth-child(" + i + ")>div").html(tabWrappers[i - 1]);
                }
                app.attachHeader(headerData);
                $("body").append(self.popTemplate());
            } else {
                this.prevPage.loadDetail(match[3], match[2]);
            }
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
                headerData = {
                    "leftButtonText": {
                        "backgroundImage": {
                            "basicType": "back",
                            "link": "#"
                        }
                    },
                    "rightButton1Image": {
                        "basicType": "filter",
                        "link": "#Filter"
                    },
                    "Header1Text": self.findMatch(self.mod),
                    "Header2Text": self.user
                };
                this.slidePage(new NotificationHeaderView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)}).render(), true);
                app.attachHeader(headerData);
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
        $(document).on("click", "#mg_right_button1_id", function() {
            if (document.getElementById('ActionFooter')) {
                app.slideDown(document.getElementById('ActionFooter'));
            }
        });
        $(window).on('hashchange', $.proxy(this.route, this));
    },
    initialize: function() {
        this.registerEvents();
        this.URL = "http://192.168.10.7:8084/mob/"; //182.18.157.157:7001 192.168.0.108:8084
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
                $("#filter-done:visible").before('<a href="#Filter" class="button filter-button" id="filter-show"  style="background-image: url(mobiBundle/images/header/mg_filter.png); margin-top: 6px;background-size:36px 36px;float:right;width:36px;height:36px;" ></a>');
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
                $("#mg_header_container").remove();
                var headerData = {
                    "leftButtonText": {
                        "backgroundImage": {
                            "basicType": "back",
                            "link": "#"
                        }
                    },
                    "rightButton1Text": {
                        "backgroundImage": {
                            "basicType": "filterSubmit",
                            "link": "#Filter"
                        }
                    },
                    "Header1Text": self.findMatch(self.mod),
                    "Header2Text": self.user
                };
                app.attachHeader(headerData);
            }
            else {
                $("#filter-show:visible").before('<a href="#Filter" class="button filter-button-done" id="filter-done"  >Done</a>');
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
        if (app.isMobile()) {
            $("#mg_header_container").remove();
            var headerData = {
                "leftButtonText": {
                    "backgroundImage": {
                        "basicType": "back",
                        "link": "#"
                    }
                },
                "rightButton1Image": {
                    "basicType": "filter",
                    "link": "#Filter"
                },
                "Header1Text": self.findMatch(self.mod),
                "Header2Text": self.user
            };
            app.attachHeader(headerData);
        }
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
//        window.setTimeout(function() {
            $('.stage-right, .stage-left').remove();
//        }, 500);
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
                    var headerData;
                    if (app.isMobile()) {
                        app.slidePage(new NotificationHeaderView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render(), true);
                        headerData = {
                            "leftButtonText": {
                                "backgroundImage": {
                                    "basicType": "back",
                                    "link": "#"
                                }
                            },
                            "rightButton1Image": {
                                "basicType": "filter",
                                "link": "#Filter"
                            },
                            "Header1Text": app.findMatch(app.mod),
                            "Header2Text": app.user
                        };
                    } else {
                        app.slidePage(new NotificationFullView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render());
                        var headerData = {
                            "leftButtonText": {
                                "backgroundImage": {
                                    "basicType": "back",
                                    "link": "#"
                                }
                            },
                            "rightButton1Image": {
                                "basicType": "action"
                            },
                            "Header1Text": app.findMatch(app.mod),
                            "Header2Text": app.user
                        };
                    }
                    app.attachHeader(headerData);
                    return "success";
                },
                error: function(data) {
                    app.showAlert("Ajax Error");
                    $(".loading").css({"display": "none"});
                    return "error";
                }
            });
        } else {
            app.showAlert("Please Select A Notification!");
        }
    },
    forward: function() {
        $(".loading").css({"display": "block"});
//        $("#forward-send-button").attr("disabled", true);
        var match = window.location.hash;
        match = match.match(app.detailsURL);
        if (match) {
            if ($("#user-list").find(":selected").val() === "") {
                app.showAlert("Please Select A user to whom to be Forwarded", "Warning!");
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
                    var headerData;
                    if (app.isMobile()) {
                        app.slidePage(new NotificationHeaderView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render(), true);
                        headerData = {
                            "leftButtonText": {
                                "backgroundImage": {
                                    "basicType": "back",
                                    "link": "#"
                                }
                            },
                            "rightButton1Image": {
                                "basicType": "filter",
                                "link": "#Filter"
                            },
                            "Header1Text": app.findMatch(app.mod),
                            "Header2Text": app.user
                        };
                    } else {
                        app.slidePage(new NotificationFullView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render());
                        headerData = {
                            "leftButtonText": {
                                "backgroundImage": {
                                    "basicType": "back",
                                    "link": "#"
                                }
                            },
                            "rightButton1Image": {
                                "basicType": "action"
                            },
                            "Header1Text": app.findMatch(app.mod),
                            "Header2Text": app.user
                        };
                    }
                    app.attachHeader(headerData);
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
                    var headerData;
                    if (app.isMobile()) {
                        app.slidePage(new NotificationHeaderView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render(), true);
                        headerData = {
                            "leftButtonText": {
                                "backgroundImage": {
                                    "basicType": "back",
                                    "link": "#"
                                }
                            },
                            "rightButton1Image": {
                                "basicType": "filter",
                                "link": "#Filter"
                            },
                            "Header1Text": app.findMatch(app.mod),
                            "Header2Text": app.user
                        };
                    } else {
                        app.slidePage(new NotificationFullView({name: app.user, mod: app.mod, type: app.findMatch(app.mod)}).render());
                        headerData = {
                            "leftButtonText": {
                                "backgroundImage": {
                                    "basicType": "back",
                                    "link": "#"
                                }
                            },
                            "rightButton1Image": {
                                "basicType": "action"
                            },
                            "Header1Text": app.findMatch(app.mod),
                            "Header2Text": app.user
                        };
                    }
                    app.attachHeader(headerData);
                    return "success";
                },
                error: function(data) {
                    $(".loading").css({"display": "none"});
                    app.showAlert("Ajax Error");
                    return "error";
                }
            });
        } else {
            app.showAlert("Please Select A Notification!");
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
    next: function(elem) {
        do {
            elem = elem.nextSibling;
        } while (elem && elem.nodeType !== 1);
        return elem;
    },
    attachHeader: function(headerData) {
        setTimeout(function() {
            $(".page").prepend(Templates.headerTemplate(headerData));
        }, 100);
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