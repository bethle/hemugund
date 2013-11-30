var NotificationHeaderView = function(headers) {
    var self = this;
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.el.innerHTML = NotificationHeaderView.template(headers);
        this.index = 1;
        this.registerEvents();
        return this;
    };
    this.render = function() {
        if (app.mod === "others") {
            if (app.isOnline()) {
                $.ajax({
                    url: app.URL + "Detail/" + app.mod,
                    dataType: "json",
                    data: "notify={\"user\":\"" + app.user + "\"}",
                    success: self.loadHeaderList,
                    async: false,
                    error: app.errorAlert
                });
            } else {
                self.loadHeaderList(self.ListData(app.mod, true));
            }
            return this;
        }
        if (app.isOnline()) {
            $.ajax({
                url: app.URL + "Notifications/" + app.mod + "/" + self.index++,
                dataType: "json",
                data: "notify={\"user\":\"" + app.user + "\"}",
                success: self.loadHeaderList,
                async: false,
                error: app.errorAlert
            });
        } else {
            self.loadHeaderList(self.ListData(app.mod, true));
        }
        return this;
    };
    this.registerEvents = function() {
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            $(this.el).on('touchend', '#search-notify-header', this.search);
            $(this.el).on('touchend', '#more-notify-header', this.render);
        } else {
            $(this.el).on('mouseup', '#search-notify-header', this.search);
            $(this.el).on('mouseup', '#more-notify-header', this.render);
        }
    };
    this.ListData = function(ptrn, flag, data) {
        switch (ptrn) {
            case "rqstns":
                if (flag) {
                    return JSON.parse(window.localStorage.getItem("notificationRequisitionHeaders"));
                } else {
                    window.localStorage.setItem("notificationRequisitionHeaders", JSON.stringify(data));
                }
                break;
            case "xpnsap":
                if (flag) {
                    return JSON.parse(window.localStorage.getItem("notificationExpenseHeaders"));
                } else {
                    window.localStorage.setItem("notificationExpenseHeaders", JSON.stringify(data));
                }
                break;
            case "prchrd":
                if (flag) {
                    return JSON.parse(window.localStorage.getItem("notificationPurchaseHeaders"));
                } else {
                    window.localStorage.setItem("notificationPurchaseHeaders", JSON.stringify(data));
                }
                break;
            case "pblnvc":
                if (flag) {
                    return JSON.parse(window.localStorage.getItem("notificationInvoiceHeaders"));
                } else {
                    window.localStorage.setItem("notificationInvoiceHeaders", JSON.stringify(data));
                }
                break;
            case "others":
                if (flag) {
                    return JSON.parse(window.localStorage.getItem("notificationOthersHeaders"));
                } else {
                    window.localStorage.setItem("notificationOthersHeaders", JSON.stringify(data));
                }
                break;
            default:
                if (flag) {
                    return "";
                }
        }
    };
    this.loadHeaderList = function(data) {
        if (data.response === "SUCCESS") {
            if (app.isOnline()) {
                if (self.index <= 2 || data.searchSet || data.filterSet) {
                    $("#" + app.mod + "-header-list").html(NotificationHeaderView.liTemplate(data.result));
                    if (data.filter) {
                        $('#filter').html(NotificationHeaderView.filterTemplate(data.filter));
                    }
                } else {
                    $("#more-notify-header").remove();
                    $("#" + app.mod + "-header-list").append(NotificationHeaderView.liTemplate(data.result));
                }
                if (data.result.length < 20 || data.searchSet || data.filterSet) {
                    $("#more-notify-header").remove();
                }
            } else {
                NotificationHeaderView.list = data;
            }

        } else {
            app.showAlert(data.response, "Notification Header Request Errored");
            location.href = "#Error";
        }
    };
    this.headerListLocal = function() {
        var self = this;
        this.modules = ["rqstns", "xpnsap", "prchrd", "pblnvc", "others"];
        for (var i = 0; i < 5; i++) {
            if (self.modules[i] === "others") {
                if (app.isOnline()) {
                    $.ajax({
                        url: app.URL + "Detail/" + self.modules[i],
                        dataType: "json",
                        data: "notify={\"user\":\"" + app.user + "\"}",
                        async: false,
                        success: function(data) {
                            self.ListData(self.modules[i], false, data);
                        },
                        error: app.errorAlert
                    });
                }
                return;
            }
            if (app.isOnline()) {
                $.ajax({
                    url: app.URL + "Notifications/" + self.modules[i] + "/" + self.index,
                    dataType: "json",
                    data: "notify={\"user\":\"" + app.user + "\"}",
                    async: false,
                    success: function(data) {
                        self.ListData(self.modules[i], false, data);
                    },
                    error: app.errorAlert
                });
            }
        }
    };
    this.search = function() {
        app.data = null;
        $(".no-result").parent().remove();
        $("#" + app.mod + "-header-list").prepend($("<li style='text-align:center;'><img src='img/mini-loading.gif' style='padding-top: 20px;' /> </li>"));
        $.ajax({
            url: app.URL + "Search/" + app.mod,
            data: "notify={\"query\":\"" + $("#search-input").val() + "\",\"user\": \"" + app.user + "\"}",
            success: self.loadHeaderList,
            error: app.errorAlert
        });
        return;
    };
    this.initialize();
};

NotificationHeaderView.template = Handlebars.templates['notification-header-view-tpl'];
NotificationHeaderView.filterTemplate = Handlebars.templates['filter-view-tpl'];
NotificationHeaderView.liTemplate = Handlebars.templates['header-list-tpl'];

Handlebars.registerHelper('color', function() {
    if (this.status === "OPEN")
        return "open-status";
    else if (this.status === "CLOSED")
        return "close-status";
    else if (this.status === "PROCESS")
        return "inprocess-status";
    else if (this.status === "CANCELED")
        return "canceled-status";
    else if (this.status === "INPROGRESS")
        return "inprogress-status";
});
Handlebars.registerHelper('icon', function() {
    if (this.action === "R")
        return "required";
    else
        return "info";
});



