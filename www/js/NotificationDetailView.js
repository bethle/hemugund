

var NotificationDetailView = function(detail) {
    var self = this;
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.html(NotificationDetailView.template(detail));
    };
    this.render = function() {
        $.ajax({
            url: app.URL + "LineDetail/" + app.mod,
            dataType: "json",
            data: "notify={\"hid\":\"" + detail.hid + "\"}",
            success: self.loadLineDetails,
            error: app.errorAlert
        });
        $.ajax({
            url: app.URL + "Detail/" + app.mod,
            dataType: "json",
            data: "notify={\"hid\":\"" + detail.hid + "\",\"id\":\"" + detail.id + "\"}",
            success: self.loadHeaderDetails,
            error: app.errorAlert
        });
        return this;
    };

    this.loadLineDetails = function(data) {
        if (data.result) {
            if (app.mod === "xpnsap") {
                $("#notify-lines-list").html(NotificationDetailView.xpnItemsLiTemplate(data.result));
            } else {
                $("#notify-lines-list").html(NotificationDetailView.itemsLiTemplate(data.result));
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
                    $("#" + dist.id + "-dist-list").html(NotificationDetailView.distLiTemplate(dist.result));
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

    this.loadHeaderDetails = function(data) {
        if (data.response === "SUCCESS") {
            switch (app.mod) {
                case "rqstns":
                    $("#header-details-list").html(NotificationDetailView.reqTemplate(data.result.head));
                    break;
                case "prchrd":
                    $("#header-details-list").html(NotificationDetailView.poTemplate(data.result.head));
                    break;
                case "pblnvc":
                    $("#header-details-list").html(NotificationDetailView.invTemplate(data.result.head));
                    break;
                case "xpnsap":
                    $("#header-details-list").html(NotificationDetailView.xpnTemplate(data.result.head));
                    break;
            }
            $("#history-list").html(NotificationDetailView.historyLiTemplate(data.result.hist));
            if (data.result.atch) {
                if (data.result.atch.length) {
                    $("#attachment-list").html(NotificationDetailView.attachmentLiTemplate(data.result.atch));
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
    this.initialize();
};
//
NotificationDetailView.template = Handlebars.templates['notification-detail-view-tpl'];

NotificationDetailView.historyLiTemplate = Handlebars.templates['history-list-tpl'];
NotificationDetailView.distLiTemplate = Handlebars.templates['distribution-list-tpl'];
NotificationDetailView.itemsLiTemplate = Handlebars.templates['notification-lines-tpl'];
NotificationDetailView.xpnItemsLiTemplate = Handlebars.templates['expense-lines-tpl'];
NotificationDetailView.reqTemplate = Handlebars.templates['requistion-header-details-list-tpl'];
NotificationDetailView.poTemplate = Handlebars.templates['purchase-header-details-list-tpl'];
NotificationDetailView.xpnTemplate = Handlebars.templates['expense-header-details-list-tpl'];
NotificationDetailView.invTemplate = Handlebars.templates['invoice-header-details-list-tpl'];
NotificationDetailView.attachmentLiTemplate = Handlebars.templates['attachment-alert-tpl'];

