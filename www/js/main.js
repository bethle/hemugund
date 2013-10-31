var app = {
    errorAlert: function() {
        app.showAlert('Ajax Error');
        location.href = "#Error";
    },
    showAlert: function(message, title) {
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
            app.slidePage(app.homePage);
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
            this.mod = match[1];
            if (this.isMobile()) {
                this.prevPage = new NotificationHeaderView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)}).render();
            } else {
                this.prevPage = new NotificationFullView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)}).render();
            }
            this.slidePage(self.prevPage);
            return;
        }

        match = hash.match(app.detailsURL);
        if (match) {
            if (this.isMobile()) {
                this.prevPage = new NotificationDetailView({name: $('#' + match[2] + '-name').text(), amount: $('#' + match[2] + '-amount').text(), code: $('#' + match[2] + '-code').text(), date: $('#' + match[2] + '-date').text(), hid: match[2], id: match[3], num: $('#' + match[2] + '-num').text()}).render();
                this.slidePage(this.prevPage);
            } else {
                this.prevPage.loadDetail(match[3], match[2]);
            }
            return;
        }

        match = hash.match(app.forwardURL);
        if (match) {
            this.notify.forward(self.URL + "Forward");
            return;
        }

        match = hash.match(app.approveURL);
        if (match) {
            this.notify.approve(self.URL + "Approve");
            return;
        }

        match = hash.match(app.rejectURL);
        if (match) {
            this.notify.reject(self.URL + "Reject");
            return;
        }

        match = hash.match(/^#Filter/);
        if (match) {
            this.filter();
            return;
        }

        match = hash.match(/^#Back/);
        if (match) {
            this.slidePage(new NotificationHeaderView({name: self.user, mod: self.mod, type: self.findMatch(self.mod)}).render(), true);
            return;
        }

        match = hash.match(/^#Down(.{1,})-(\d{1,})~(.{1,})/);
        if (match) {
            this.slidePage(new FileView({file: match[1], type: match[3], id: match[2]}).render());
            return;
        }

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
        this.URL = "http://192.168.10.50:8084/mbs/"; //182.18.157.157:7001
        this.notifyURL = /^#Not\/(.{6})/;
        this.loginURL = /^#Login/;
        this.forwardURL = /^#Forward/;
        this.approveURL = /^#Approve/;
        this.rejectURL = /^#Reject/;
        this.detailsURL = /^#Detail(.{6})\/(\d{1,})-(\d{1,})/;
        this.attachURL = /^#attach\/(.{6})\/.*/;
        this.route();
    },
    filter: function() {
        if ($("#filter").css("max-height") !== "0px") {
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

            var data;
            if (app.mod === "rqstns") {
                data = "{\"type\":{\"pr\":" + ((checked[0] !== "") ? true : false) + ",\"ir\":" + ((checked[1] !== "") ? true : false) + "},\"status\":{\"ar\":" + ((checked[2] !== "") ? true : false) + ",\"fyi\":" + ((checked[3] !== "") ? true : false) + ",\"closed\":" + ((checked[4] !== "") ? true : false) + "},\"day\":\"" + checked[5] + "\",\"org\":\"" + checked[6] + "\",\"user\":\"" + app.user + "\"}";
            } else if (app.mod === "prchrd") {
                data = "{\"type\":{\"blanket\":" + ((checked[0] !== "") ? true : false) + ",\"planned\":" + ((checked[1] !== "") ? true : false) + ",\"standard\":" + ((checked[2] !== "") ? true : false) + ",\"contract\":" + ((checked[3] !== "") ? true : false) + "},\"status\":{\"ar\":" + ((checked[4] !== "") ? true : false) + ",\"fyi\":" + ((checked[5] !== "") ? true : false) + ",\"closed\":" + ((checked[6] !== "") ? true : false) + "},\"day\":\"" + checked[7] + "\",\"org\":\"" + checked[8] + "\",\"user\":\"" + app.user + "\"}";
            } else {
                data = "{\"status\":{\"ar\":" + ((checked[0] !== "") ? true : false) + ",\"fyi\":" + ((checked[1] !== "") ? true : false) + ",\"closed\":" + ((checked[2] !== "") ? true : false) + "},\"day\":\"" + checked[3] + "\",\"org\":\"" + checked[4] + "\",\"user\":\"" + app.user + "\"}";
            }
            $("#" + app.mod + "-header-list").prepend($("<li style='text-align:center;'><img src='img/mini-loading.gif' style='padding-top: 20px;' /> </li>"));
            $.ajax({
                url: app.URL + "Filter/" + app.mod,
                data: "notify=" + data,
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
        } else {
//            $("#header-list").hide();
            this.slideUp(document.getElementById("header-list"));
            setTimeout(function() {
                app.slideDown(document.getElementById("filter"));
            }, 500);
            location.href = "#selFilter";
        }
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
            }, 500);
        });
    },
    isMobile: function() {
        if (navigator.userAgent.match(/iPad|iPhone|iPod|android/i) != null && screen.width <= 568) {
            return true;
        } else {
            return false;
        }
    },
    tab: function(elem) {
        var index = $(elem).index();
        index = index + 1;
        $("#ui-tab-content>div").removeClass('show');
        $("#ui-tab-content>div:nth-child(" + index + ")").addClass('show');
    },
    toggle: function(e) {
        var elem = this.next(e);
        if (elem.style.maxHeight === '1000px') {
            this.slideUp(elem);
        }
        else {
            this.slideDown(elem);
        }
    },
    slideDown: function(elem)
    {
        if (elem !== null) {
            if (elem.className !== 'ui-list-arrow') {
                elem.style.maxHeight = '1000px';
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
    popAlert: function(id) {
        var elem = document.getElementById(id);
        elem.parentNode.className = "popup-hide";
        elem.className = "popup-hide";
        elem.parentNode.className = "ui-popup-show";
        elem.className = "ui-popup-show";
    },
    closeAlert: function(elem) {
        document.getElementById('approve-comment').value = "";
        document.getElementById('reject-comment').value = "";
        elem.parentNode.parentNode.className = "popup-hide";
        elem.parentNode.className = "popup-hide";
        if (document.getElementById('header-list') !== null) {
            document.getElementById('header-list').removeAttribute('style');
            document.getElementById('header-list').style.height = 'auto';
        }
    },
// Used to simulate async calls. This is done to provide a consistent
// that use async data access APIs
    callLater: function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

};

//app.orgListTemplate = Handlebars.compile(document.getElementById("filter-orgs-list-tpl").innerHTML);
app.initialize();