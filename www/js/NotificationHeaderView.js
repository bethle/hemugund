var NotificationHeaderView = function(headers) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.el.innerHTML = NotificationHeaderView.template();
        this.registerEvents();
    };
    this.render = function() {
        return this;
    };
    this.searchRender = function() {
        this.el.innerHTML = NotificationHeaderView.liTemplate(headers);
        return this;
    };
    this.registerEvents = function() {
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            $("body").on('touch', '.search-button', this.search);
        }else{
            $("body").on('click', '.search-button', this.search);            
        }
    };
    this.search = function() {
        var data = $("#search-input").val();
        var username = app.username;
        app.notify.getSearchHeaders(app.URL + "Search/" + app.list, data, username, function(data) {
            $(".search-header-list").html(NotificationHeaderView.liTemplate(data.result));
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



