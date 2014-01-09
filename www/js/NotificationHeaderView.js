var NotificationHeaderView = function(headers) {
    var self = this;
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.el.innerHTML = NotificationHeaderView.template(headers);
        this.index = 1;
        this.registerEvents();
    };
    this.render = function() {
        if (app.mod === "others") {
            $.ajax({
                url: app.URL + "Detail/" + app.mod,
                dataType: "json",
                data: "notify={\"user\":\"" + app.user + "\"}",
                success: self.loadHeaderList,
                error: app.errorAlert
            });
            return this;
        }
        $.ajax({
            url: app.URL + "Notifications/" + app.mod + "/" + self.index++,
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
            $(this.el).on('touchend', '#more-notify-header', this.render);
        } else {
            $(this.el).on('mouseup', '#search-notify-header', this.search);
            $(this.el).on('mouseup', '#more-notify-header', this.render);
        }
    };
    this.loadHeaderList = function(data) {
        if (data.response === "SUCCESS") {
            data.listItemArrow = {
                "basicType": "listItemRightArrow"
            }
            if (self.index <= 2 || data.searchSet || data.filterSet) {
                $("#" + app.mod + "-header-list").html(Templates.listType3Template(data));
                if (data.filter) {
                    $('#filter').html(NotificationHeaderView.filterTemplate(data.filter));
                }
            } else {
                $("#more-notify-header").remove();
                $("#" + app.mod + "-header-list").append(Templates.listType3Template(data));
            }
            if (data.result.length < 20 || data.searchSet || data.filterSet) {
                $("#more-notify-header").remove();
            }

        } else {
            app.showAlert(data.response, "Notification Header Request Errored");
            location.href = "#Error";
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



