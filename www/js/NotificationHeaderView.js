var NotificationHeaderView = function(headers) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.el.innerHTML = NotificationHeaderView.template();
        this.registerEvents();
    };
    
    this.render = function() {
        $.ajax({
            url: app.URL + "Notifications/" + app.mod + "/1",
            data: "notify={\"user\":\"" + app.user + "\"}",
            success: function(data) {
                if (data.response === "SUCCESS") {
                    $(".search-header-list").html(NotificationHeaderView.liTemplate(data.result));
                } else {
                    app.showAlert(data.response, "Notification Header Request Errored");
                    location.href = "#Error";
                }
            },
            error: function() {
                app.showAlert('Ajax Error');
                location.href = "#Error";
            }
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
    
    this.search = function() {
        $.ajax({
            url: app.URL + "Search/" + app.mod,
            data: "notify={\"query\":\"" + $("#search-input").val() + "\",\"user\": \"" + app.user + "\"}",
            success: function(data) {
                if (data.response === "SUCCESS") {
                    $(".search-header-list").html(NotificationHeaderView.liTemplate(data.result));
                } else {
                    app.showAlert(data.response, "Notification Header Request Errored");
                }
            },
            error: function() {
                app.showAlert('Ajax Error');
                location.href = "#Error";
            }
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



