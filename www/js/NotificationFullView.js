

var NotificationFullView = function(detail) {
    var self = this;
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.html(NotificationFullView.template(detail));
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
    this.loadDetail = function(id, hid) {
        $("#header-details").html(NotificationFullView.detailTemplate({name: $('#' + hid + '-name').text(), amount: $('#' + hid + '-amount').text(), code: $('#' + hid + '-code').text(), date: $('#' + hid + '-date').text(), hid: hid, id: id, num: $('#' + hid + '-num').text(), desc: $('#' + hid + '-subject').text()}));
        $.ajax({
            url: app.URL + "LineDetail/" + app.mod,
            dataType: "json",
            data: "notify={\"hid\":\"" + hid + "\"}",
            success: self.loadLineDetails,
            error: app.errorAlert
        });
        $.ajax({
            url: app.URL + "Detail/" + app.mod,
            dataType: "json",
            data: "notify={\"hid\":\"" + hid + "\",\"id\":\"" + id + "\"}",
            success: self.loadHeaderDetails,
            error: app.errorAlert
        });

    };
    this.loadHeaderList = function(data) {
        if (data.response === "SUCCESS") {
            if (self.index <= 2 || data.searchSet || data.filterSet) {
                $("#" + app.mod + "-header-list").html(NotificationFullView.liTemplate(data.result));
                if (data.result.length > 0) {
                    location.href = "#Detail" + app.mod + "/" + data.result[0].hid + "-" + data.result[0].id;
                } else {
                    $("#header-details").html(NotificationFullView.detailTemplate({}));
                    self.loadLineDetails({result: []});
                    self.loadHeaderDetails({response: "SUCCESS", result: {head: {}}});
                }
                if (data.filter) {
                    $('#filter').html(NotificationFullView.filterTemplate(data.filter));
                }
            } else {
                $("#more-notify-header").remove();
                $("#" + app.mod + "-header-list").append(NotificationFullView.liTemplate(data.result));
            }
            if (data.result.length < 20 || data.searchSet || data.filterSet || app.mod === "others") {
                $("#more-notify-header").remove();
            }
        } else {
            app.showAlert(data.response, "Notification Header Request Errored");
            location.href = "#Error";
        }
    };

    this.loadHeaderDetails = function(data) {
        if (data.response === "SUCCESS") {
            switch (app.mod) {
                case "rqstns":
                    $("#header-details-list").html(NotificationFullView.reqTemplate(data.result.head));
                    break;
                case "prchrd":
                    $("#header-details-list").html(NotificationFullView.poTemplate(data.result.head));
                    break;
                case "pblnvc":
                    $("#header-details-list").html(NotificationFullView.invTemplate(data.result.head));
                    break;
                case "xpnsap":
                    $("#header-details-list").html(NotificationFullView.xpnTemplate(data.result.head));
                    break;
            }
            $("#history-list").html(NotificationFullView.historyLiTemplate(data.result.hist));
            if (data.result.atch) {
                if (data.result.atch.length) {
                    $("#attachment-list").html(NotificationFullView.attachmentLiTemplate(data.result.atch));
                    $(".attach-icon:visible").html('<a onclick="app.popAlert(\'AttachmentAlert\');" ><img src="img/attachment-icon.png" ></a>');
                }
                else {
                    $(".attach-icon:visible a").remove();
                }
            }
            else {
                $(".attach-icon:visible a").remove();
            }
        } else {
            app.showAlert(data.message, "Details: ");
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

    this.loadLineDetails = function(data) {
        if (data.result) {
            if (app.mod === "xpnsap") {
                $("#notify-lines-list").html(NotificationFullView.xpnItemsLiTemplate(data.result));
            } else {
                $("#notify-lines-list").html(NotificationFullView.itemsLiTemplate(data.result));
            }
            app.callLater(self.loadDistributionList, data.result);
        }
    };
    this.loadDistributionList = function(data) {
        for (var i = 0; i < data.length; i++) {
            $.ajax({
                url: app.URL + "Distribution/" + app.mod,
                dataType: "json",
                data: "notify={\"id\":\"" + data[i].id + "\"}",
                success: function(dist) {
                    $("#" + dist.id + "-dist-list").html(NotificationFullView.distLiTemplate(dist.result));
                },
                error: app.errorAlert
            });
        }
    };

    this.initialize();
};

NotificationFullView.template = Handlebars.compile($("#notification-full-view-tpl").html());
NotificationFullView.liTemplate = Handlebars.compile(document.getElementById("header-list-tpl").innerHTML);
NotificationFullView.detailTemplate = Handlebars.compile(document.getElementById("notification-detail-partial-tpl").innerHTML);
NotificationFullView.filterTemplate = Handlebars.compile(document.getElementById("filter-view-tpl").innerHTML);

NotificationFullView.historyLiTemplate = Handlebars.compile($("#history-list-tpl").html());
NotificationFullView.distLiTemplate = Handlebars.compile($("#distribution-list-tpl").html());
NotificationFullView.itemsLiTemplate = Handlebars.compile($("#notification-lines-tpl").html());
NotificationFullView.xpnItemsLiTemplate = Handlebars.compile($("#expense-lines-tpl").html());
NotificationFullView.reqTemplate = Handlebars.compile($("#requistion-header-details-list-tpl").html());
NotificationFullView.poTemplate = Handlebars.compile($("#purchase-header-details-list-tpl").html());
NotificationFullView.xpnTemplate = Handlebars.compile($("#expense-header-details-list-tpl").html());
NotificationFullView.invTemplate = Handlebars.compile($("#invoice-header-details-list-tpl").html());
NotificationFullView.attachmentLiTemplate = Handlebars.compile($("#attachment-alert-tpl").html());
