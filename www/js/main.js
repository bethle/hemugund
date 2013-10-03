var app = {
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
                return "Requisitions ";
            case "xpnsap":
                return "Expense Approval ";
            case "prchrd":
                return "Purchase Order ";
            case "pblnvc":
                return "Payable Invoice ";
            case "others":
                return "Others";
            default:
                this.showAlert("No type match", "Find Match");
                return "";
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
                this.slidePage(this.homePage);
            } else {
                this.homePage = new LoginView().render();
                this.slidePage(this.homePage);
            }
            return;
        }

        var match;
        var match = hash.match(/^#Home/);
        if (match) {
            this.slidePage(this.homePage);
        }

        match = hash.match(app.loginURL);
        if (match) {
            this.user = $('#user-name').val();
            $.ajax({
                url: self.URL + "Login",
                data: "login={\"user_name\": \"" + self.user + "\" , \"password\": \"" + $('#password').val() + "\"}",
                dataType: 'json',
                success: function(data) {
                    if (data.response === "SUCCESS") {
                        self.homePage = new NotificationsView().render();
                        self.currentPage = null;
                        self.slidePage(self.homePage);
                    } else {
                        if (data.message) {
                            self.showAlert(data.message, "ERROR");
                        }
                        location.href = "#Error"
                    }

                },
                error: function() {
                    self.showAlert("Ajax Error", "ERROR");
                    location.href = "#Error";
                }
            });
            return;
        }

        match = hash.match(app.notifyURL);
        if (match) {
            this.mod = match[1];
            this.showAlert("Width of the screen is: "+this.deviceInfo(), "INFO");
            this.prevPage = new NotificationHeaderView().render();
            this.slidePage(self.prevPage);
            return;
        }

        match = hash.match(app.detailsURL);
        if (match) {
            this.slidePage(new NotificationDetailView().render());
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

    },
    registerEvents: function() {
        var self = this;
        // Add an Event Listener to Listen to URL hash tag Changes
        $(window).on('hashchange', $.proxy(this.route, this));
    },
    initialize: function() {
//        var self = this;
        this.registerEvents();
        this.URL = "http://192.168.10.50:8084/EBS/"; //182.18.157.157:7001
        this.notifyURL = /^#Not\/(.{6})/;
        this.loginURL = /^#Login/;
        this.filterURL = /^#Filter\/(.{6})/;
        this.filterDoneURL = /^#Done\/(.{6})/;
        this.forwardURL = /^#Forward/;
        this.approveURL = /^#Approve/;
        this.rejectURL = /^#Reject/;
        this.detailsURL = /^#Detail(.{6})\/(\d{1,})-(.{1,})/;
        this.attachURL = /^#attach\/(.{6})\/.*/;
//        this.notify = new Notification();
        this.route();
    },
    slidePage: function(page) {
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

        if (page === app.homePage) {
            // Always apply a Back transition (slide from left) when we go back to the search page
            $(page.el).attr('class', 'page stage-left');
            currentPageDest = "stage-right";
        } else {
            // Forward transition (slide from right)
            $(page.el).attr('class', 'page stage-right');
            currentPageDest = "stage-left";
        }
        $('.stage-right, .stage-left').remove();
        $('body').append(page.el);
        // Wait until the new page has been added to the DOM...
        setTimeout(function() {
            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
            $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
            // Slide in the new page
            $(page.el).attr('class', 'page stage-center transition');
            self.currentPage = page;
        });

    },
    deviceInfo: function() {
        document.getElementById("platform").innerHTML = device.platform;
        document.getElementById("version").innerHTML = device.version;
        document.getElementById("uuid").innerHTML = device.uuid;
        document.getElementById("name").innerHTML = device.name;
        document.getElementById("width").innerHTML = screen.width;
        document.getElementById("height").innerHTML = screen.height;
        document.getElementById("colorDepth").innerHTML = screen.colorDepth;
        return screen.width;
    }


};

app.orgListTemplate = Handlebars.compile(document.getElementById("filter-orgs-list-tpl").innerHTML);
app.initialize();































//var app = {
//    showAlert: function(message, title) {
//        console.log('alerted: ' + message + ' : ' + title);
//        if (navigator.notification) {
//            navigator.notification.alert(message, null, title, 'OK');
//        } else {
//            alert(title ? (title + ": " + message) : message);
//        }
//    },
//    findMatch: function(ptrn) {
//        switch (ptrn) {
//            case "rqstns":
//                return "Requisitions ";
//            case "xpnsap":
//                return "Expense Approval ";
//            case "prchrd":
//                return "Purchase Order ";
//            case "pblnvc":
//                return "Payable Invoice ";
//            case "others":
//                return "Others";
//            default:
//                this.showAlert("No type match", "Find Match");
//                return "";
//        }
//    },
//    route: function() {
//        /*
//         * If there is no hash tag in the URL: display the Home View 
//         * if there is a hash tag matching pattern for any URL call the URL action defined in the notify object
//         */
//        var hash = window.location.hash, self = this;
//        if (!hash) {
//            if (this.prevPage) {
//                this.slidePage(this.prevPage);
//            } else if (this.homePage) {
//                this.slidePage(this.homePage);
//            } else {
//                var self = this;
//                this.homePage = new LoginView().render();
//                this.slidePage(this.homePage);
//            }
//            return;
//        }
//
//        var match;
//        match = hash.match(/^#Logout/);
//        if (match) {
//            this.loading();
//            this.notify.logOut(this.URL + "Logout", function() {
//                self.homePage = new LoginView().render();
//                self.slidePage(self.homePage);
//            });
//        }
//
//        match = hash.match(/^#Home/);
//        if (match) {
//            this.notify.getNotificationsCount(this.URL + "Home",this.username, function(data) {
//                data.result.head = "Notifications";
//                data.result.back = '#Logout';
//                data.result.backText = 'Logout';
//                data.result.username = self.username;
//                self.homePage = new NotificationsView(data.result).render();
//                self.currentPage = null;
//                self.slidePage(self.homePage);
//                document.getElementById('actionIcon').style.display = 'none';
//                document.getElementById('filterurl').style.display = 'none';
//                document.getElementById('filter-done').style.display = 'none';
//            });
//            return;
//        }
//        match = hash.match(app.attachURL);
//        if (match) {
//            var attachType = match[0].split("/");
//            attachType = attachType[attachType.length - 1];
//        }
//
//        match = hash.match(app.loginURL);
//        if (match) {
//            if (document.getElementById("user-name")) {
//                this.username = $('#user-name').val();
//                this.password = $('#password').val();
//            }
//            this.loading();
//            if (this.isOnline()) {
//                this.notify.logIn(self.URL + "Login", self.username, self.password, function(data) {
//                    if (data.message && !data.result) {
//                        self.homePage = new LoginView().render();
//                        self.slidePage(self.homePage);
//                        $("body").prepend("<p class='error' >" + data.message + "</p>");
//                        location.href = "#Error";
//                    }
//                    else {
//                        data.result.head = "Notifications";
//                        data.result.back = '#Logout';
//                        data.result.backText = 'Logout';
//                        data.result.username = self.username;
//                        self.homePage = new NotificationsView(data.result).render();
//                        self.currentPage = null;
//                        self.slidePage(self.homePage);
//                        document.getElementById('actionIcon').style.display = 'none';
//                        document.getElementById('filterurl').style.display = 'none';
//                        document.getElementById('filter-done').style.display = 'none';
//                        self.orgsList = self.orgListTemplate(data.result.orgs);
//                    }
//                });
//            }
//            return;
//        }
//
//        match = hash.match(app.notifyURL);
//        if (match) {
//            this.list = match[1];
//            this.hdrsURL = self.URL + "Notifications/" + match[1] + "/1";
//            if (this.list === "others")
//                this.hdrsURL = self.URL + "Detail/others";
//            this.loading();
//            if (this.isOnline()) {
//                this.notify.getHeaders(this.hdrsURL, this.username, function(data) {
//                    data.head = self.findMatch(self.list);
//                    data.back = '#Home';
//                    data.backText = 'Back';
//                    data.username = self.username;
//                    data.filterURL = '#Filter/' + self.list + '';
//                    data.search = '#Search/' + self.list + '';
//                    self.prevPage = new NotificationHeaderView(data).render();
//                    self.slidePage(self.prevPage);
//                    document.getElementById('actionIcon').style.display = 'none';
//                    document.getElementById('filter-done').style.display = 'none';
//                    if (self.list === "others") {
//                        document.getElementById('search').style.display = 'none';
//                        document.getElementById('filterurl').style.display = 'none';
//                        $(".list-arrow").css("display", "none");
//                    }
//                    data.type_head = (self.list === "rqstns") ? "Requisition Type" : ((self.list) === "prchrd" ? "PO Type" : null);
//                    data.head = "Filter";
//                    data.back = '#Not/' + self.list + '';
//                    data.done = '#Done/' + self.list + '';
//                    data.backText = "Default";
//                    data.username = self.username;
//                    self.homePage = new NotificationFilterView(data);
//                });
//            }
//            return;
//        }
//
//        match = hash.match(app.filterURL);
//        if (match) {
//            this.loading();
//            self.slidePage(this.homePage.render());
//            this.homePage.showType();
//            $("#filter").append(self.orgsList);
//            document.getElementById('actionIcon').style.display = 'none';
//            document.getElementById('filterurl').style.display = 'none';
//            this.homePage = null;
////            self.orgListTemplate = null;
//            return;
//        }
//
//        match = hash.match(app.filterDoneURL);
//        if (match) {
//            this.loading();
//            this.list = match[1];
//            var i = 0;
//            var checked = new Array();
//            $("#filter").find("input").each(function() {
//                if ($(this).is(":checked")) {
//                    checked[i] = $(this).val();
//                }
//                else {
//                    checked[i] = "";
//                }
//                i = i + 1;
//            });
//            $("select").each(function() {
//                checked[i] = $(this).val();
//                i = i + 1;
//            });
//            this.hdrsURL = self.URL + "Filter/" + self.list;
//            this.loading();
//            if (this.isOnline()) {
//                this.notify.getFilterHeaders(this.hdrsURL, checked, self.username, function(data) {
//                    data.head = self.findMatch(self.list);
//                    data.back = '#Login';
//                    data.backText = 'Back';
//                    data.username = self.username;
//                    data.filterURL = '#Filter/' + self.list + '';
//                    data.search = '#Search/' + self.list + '';
//                    self.prevPage = new NotificationHeaderView(data).render();
//                    self.slidePage(self.prevPage);
//                    document.getElementById('actionIcon').style.display = 'none';
//                    document.getElementById('filter-done').style.display = 'none';
//                    data.type_head = (self.list === "rqstns") ? "Requisition Type" : ((self.list) === "prchrd" ? "PO Type" : null);
//                    data.head = "Filter";
//                    data.back = '#Not/' + self.list + '';
//                    data.done = '#Done/' + self.list + '';
//                    data.backText = "Default";
//                    data.username = self.username;
//                    self.homePage = new NotificationFilterView(data);
//                });
//            }
//            return;
//        }
//
//        match = hash.match(app.detailsURL);
//        if (match) {
//            this.notifyId = match[3];
//            this.loading();
//            if (this.isOnline()) {
//                this.notify.getDetail(self.URL + "Detail/" + match[1], match[2], match[3], function(data) {
//                    data.head = data.result.num;
//                    data.back = '#Not/' + self.list + '';
//                    data.backText = 'Back';
//                    data.username = self.username;
//                    data.module = self.list;
//                    if (match[1] === "rqstns")
//                        self.slidePage(new NotificationRequisitionDetailView(data).render());
//                    else if (match[1] === "prchrd")
//                        self.slidePage(new NotificationPurchaseOrderDetailView(data).render());
//                    else if (match[1] === "xpnsap")
//                        self.slidePage(new NotificationExpenseApprovalDetailView(data).render());
//                    else if (match[1] === "pblnvc")
//                        self.slidePage(new NotificationPayableInvoiceDetailView(data).render());
//                    document.getElementById('filterurl').style.display = 'none';
//                    document.getElementById('filter-done').style.display = 'none';
//                });
//            }
//            return;
//        }
//
//        match = hash.match(app.forwardURL);
//        if (match) {
//            this.to_user = $("#user-list").find(":selected").val();
//            this.notify.forward(self.URL + "Forward/" + self.list, this.to_user);
//            return;
//        }
//
//        match = hash.match(app.approveURL);
//        if (match) {
//            this.Appr_msg = $("#approve-comment").val();
//            this.notify.approve(self.URL + "Approve/" + self.list, this.Appr_msg);
//            return;
//        }
//
//        match = hash.match(app.rejectURL);
//        if (match) {
//            this.Rjct_msg = $("#reject-comment").val();
//            this.notify.reject(self.URL + "Reject/" + self.list, this.Rjct_msg);
//            return;
//        }
//
//    },
//    pulltoRefresh: function() {
////        alert($(window).scrollTop() + " " + $(window).height() + " " + $(document).height());
//        if (($(window).scrollTop()) + $(window).height() + 44 === $(document).height()) {
////            alert("bottom!");
//        }
//    },
//    registerEvents: function() {
//        var self = this;
//        
//        if (document.documentElement.hasOwnProperty('ontouchstart')) {
////           if yes: Register the touch event listener to change the selected state of the item
//            $('body').on('touchstart', 'a', function(event) {
//                $(event.target).addClass('tappable-active');
//            });
//            $('body').on('touchend', 'a', function(event) {
//                $(event.target).removeClass('tappable-active');
//            });
//        } else {
////           if not: register mouce events instead
//            $('body').on('moucedown', 'a', function(event) {
//                $(event.target).addClass('tappable-active');
//            });
//            $('body').on('mouceup', 'a', function(event) {
//                $(event.target).removeClass('tappable-active');
//            });
//        }
//
//        // Add an Event Listener to Listen to URL hash tag Changes
//        $(window).on('hashchange', $.proxy(this.route, this));
//        $(window).on('scroll', this.pulltoRefresh);
//    },
//    initialize: function() {
////        var self = this;
//        this.registerEvents();
//        this.URL = "http://192.168.10.50:8084/EBS/"; //182.18.157.157:7001
//        this.notifyURL = /^#Not\/(.{6})/;
//        this.loginURL = /^#Login/;
//        this.filterURL = /^#Filter\/(.{6})/;
//        this.filterDoneURL = /^#Done\/(.{6})/;
//        this.forwardURL = /^#Forward/;
//        this.approveURL = /^#Approve/;
//        this.rejectURL = /^#Reject/;
//        this.detailsURL = /^#Detail(.{6})\/(\d{1,})-(.{1,})/;
//        this.attachURL = /^#attach\/(.{6})\/.*/;
//        this.notify = new Notification();
//        this.route();
//    },
//    loading: function() {
//        if (document.getElementsByClassName('error')[0])
//            document.getElementsByClassName('error')[0].style.display = "none";
//        var screen = document.getElementsByClassName('ui-screen')[0].style.display = "none";
//        var loading = document.getElementById('loading-screen');
//        loading.className = "";
//    },
//    isOnline: function() {
//        var self = this;
//        if (navigator.onLine) {
//            return true;
//        } else {
//            self.showAlert("Offline", "Network Error");
//            return false;
//        }
//    },
//    slidePage: function(page) {
//        var currentPageDest,
//                self = this;
//        // If there is no current page (app just started) -> No transition: Position new page in the view port
//        if (!this.currentPage) {
//            $(page.el).attr('class', 'page');
//            $('body').html(page.el);
//            this.currentPage = page;
////            document.getElementsByClassName('ui-screen')[0].removeAttribute("style");
////            document.getElementById('loading-screen').className = "loading-hide"
//            return;
//        }
//
//// Cleaning up: remove old pages that were moved out of the viewport
//        $('.stage-right, .stage-left').not('.homePage').remove();
//
//        if (page === app.homePage) {
//            // Always apply a Back transition (slide from left) when we go back to the search page
//            $(page.el).attr('class', 'page stage-left');
//            currentPageDest = "stage-right";
//        } else {
//            // Forward transition (slide from right)
//            $(page.el).attr('class', 'page stage-right');
//            currentPageDest = "stage-left";
//        }        
//        $('body').html(page.el);
////        document.getElementsByClassName('ui-screen')[0].removeAttribute("style");
////        document.getElementById('loading-screen').className = "loading-hide"
//        // Wait until the new page has been added to the DOM...
//        setTimeout(function() {
//            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
//            $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
//            // Slide in the new page
//            $(page.el).attr('class', 'page stage-center transition');
//            self.currentPage = page;
//        });
//
//    }
//
//};
//app.orgListTemplate = Handlebars.compile(document.getElementById("filter-orgs-list-tpl").innerHTML);
//app.initialize();