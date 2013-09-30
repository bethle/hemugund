var NotificationHeaderView = function(headers) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.registerEvents();
    };
    this.render = function() {
        this.el.innerHTML = NotificationHeaderView.template(headers);
        return this;
    };
    this.searchRender = function() {
        this.el.innerHTML = NotificationHeaderView.searchTemplate(headers);
        return this;
    };
    this.registerEvents = function() {
        var userAgent = navigator.userAgent.toLowerCase();
        var isiPhone = (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipod') !== -1) ? true : false;
        var clickEvent = (isiPhone ? 'touchend' : 'click');
        $("body").on(clickEvent, '.search-button', this.search);
    };
    this.search = function() {
        app.loading();
        var data = $("#search-input").val();
        var username = app.username;
        app.notify.getSearchHeaders(app.URL + "Search/" + app.list, data, username, function(data) {
            $(".search-header-list").html(NotificationHeaderView.searchTemplate(data.result));
            var screen = document.getElementsByClassName('ui-screen')[0].style.display = "block";
            var loading = document.getElementById('loading-screen');
            loading.className = "loading-hide";
        });
        return;
    };
    this.renderUser = function(data) {
        document.getElementById('users-list').appendChild(NotificationHeaderView.frdTemplate(data));
    };
    this.initialize();
};
Handlebars.registerPartial("ActionFooter", document.getElementById('action-footer-tpl').innerHTML);
Handlebars.registerPartial("AttachmentAlert", document.getElementById('attachment-alert-tpl').innerHTML);
NotificationHeaderView.frdTemplate = Handlebars.compile(document.getElementById("forward-alert-tpl").innerHTML);
NotificationHeaderView.template = Handlebars.compile(document.getElementById("header-list-tpl").innerHTML);
NotificationHeaderView.searchTemplate = Handlebars.compile(document.getElementById("header-search-list-tpl").innerHTML);
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



