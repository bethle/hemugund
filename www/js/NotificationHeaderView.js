var NotificationHeaderView = function(headers) {
    var self = this;
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.el.innerHTML = NotificationHeaderView.template(headers);
        this.registerEvents();
        if (document.hasOwnProperty("backbutton")) {
            document.removeEventListener("backbutton");
        }
    };
    this.render = function() {
        $.ajax({
            url: app.URL + "Notifications/" + app.mod + "/1",
            dataType: "json",
            data: "notify={\"user\":\"" + app.user + "\"}",
            success: self.loadHeaderList,
            error: app.errorAlert
        });
        return this;
    };
    this.registerEvents = function() {
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            $(this.el).on('touchend', '#search-notify-header', this.search);
        } else {
            $(this.el).on('mouseup', '#search-notify-header', this.search);
        }
    };
    this.loadHeaderList = function(data) {
        if (data.response === "SUCCESS") {
            $("#" + app.mod + "-header-list").html(NotificationHeaderView.liTemplate(data.result));
        } else {
            app.showAlert(data.response, "Notification Header Request Errored");
            location.href = "#Error";
        }
    };

    this.search = function() {
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

NotificationHeaderView.template = Handlebars.compile(document.getElementById("notification-header-view-tpl").innerHTML);
NotificationHeaderView.liTemplate = Handlebars.compile(document.getElementById("header-list-tpl").innerHTML);

Handlebars.registerHelper('color', function() {
    if (this.status === "OPEN")
        return "open-status";
    else if (this.status === "CLOSED")
        return "close-status";
    else if (this.status === "INPROGRESS")
        return "inprogress-status";
    else if (this.status === "CANCELED")
        return "canceled-status";
});
Handlebars.registerHelper('icon', function() {
    if (this.action === "R")
        return "required";
    else
        return "info";
});



