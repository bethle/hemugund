

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
        var tabWrappers = [NotificationDetailView.linesListWrapper({code: $('#' + hid + '-code').text()}), NotificationDetailView.headerDetailsListWrapper, NotificationDetailView.historyDetailsListWrapper];
        var tabData = {
            "tabList": 3,
            "activeTab": 1
        };
        $("#header-description").after(Templates.tabsTemplate(tabData));
        for (var i = 1; i <= $("#mg_ui-tab-content>div").length; i++) {
            $("#mg_ui-tab-content>div:nth-child(" + i + ")>div").html(tabWrappers[i - 1]);
        }
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
            data.listItemArrow = {
                "basicType": "listItemRightArrow"
            }
            if (self.index <= 2 || data.searchSet || data.filterSet) {
                $("#" + app.mod + "-header-list").html(Templates.listType3Template(data));
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
                $("#" + app.mod + "-header-list").append(Templates.listType3Template(data));
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
                    $("#" + dist.id + "-dist-list").removeAttr("style");
                    $("#" + dist.id + "-dist-list").prev().removeAttr("style");
                    if (!dist.result.length) {
                        $("#" + dist.id + "-dist-list").css({display: "none"});
                        $("#" + dist.id + "-dist-list").prev().css({display: "none"});
                    }
                },
                error: app.errorAlert
            });
        }
    };

    this.initialize();
};

NotificationFullView.template = Handlebars.templates['notification-full-view-tpl'];
NotificationFullView.detailTemplate = Handlebars.templates['notification-detail-partial-tpl'];
NotificationFullView.filterTemplate = Handlebars.templates['filter-view-tpl'];

NotificationFullView.historyLiTemplate = Handlebars.templates['history-list-tpl'];
NotificationFullView.distLiTemplate = Handlebars.templates['distribution-list-tpl'];
NotificationFullView.itemsLiTemplate = Handlebars.templates['notification-lines-tpl'];
NotificationFullView.xpnItemsLiTemplate = Handlebars.templates['expense-lines-tpl'];
NotificationFullView.reqTemplate = Handlebars.templates['requistion-header-details-list-tpl'];
NotificationFullView.poTemplate = Handlebars.templates['purchase-header-details-list-tpl'];
NotificationFullView.xpnTemplate = Handlebars.templates['expense-header-details-list-tpl'];
NotificationFullView.invTemplate = Handlebars.templates['invoice-header-details-list-tpl'];
NotificationFullView.attachmentLiTemplate = Handlebars.templates['attachment-alert-tpl'];
