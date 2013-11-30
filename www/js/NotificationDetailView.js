

var NotificationDetailView = function(detail) {
    var self = this;
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.html(NotificationDetailView.template(detail));
    };
    this.render = function() {
        var self = this;
        this.lineData;
        this.DetailsData;
        this.DistributionData;
        this.details;
        if (app.isOnline()) {
            self.details = {
                rqstns: [],
                xpnsap: [],
                prchrd: [],
                pblnvc: []
            };
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
            var modules = ["rqstns", "xpnsap", "prchrd", "pblnvc"];
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < app.listdata.result.length; j++) {
                    $.ajax({
                        url: app.URL + "LineDetail/" + modules[i],
                        dataType: "json",
                        async: false,
                        data: "notify={\"hid\":\"" + app.listdata.result[j].hid + "\"}",
                        success: function(lineDetail) {
                            self.lineData = lineDetail;
                            $.ajax({
                                url: app.URL + "Distribution/" + modules[i],
                                dataType: "json",
                                async: false,
                                data: "notify={\"id\":\"" + app.listdata.result[j].id + "\"}",
                                success: function(distData) {
                                    self.DistributionData = distData;
                                },
                                error: app.errorAlert
                            });
                        },
                        error: app.errorAlert
                    });
                    $.ajax({
                        url: app.URL + "Detail/" + modules[i],
                        dataType: "json",
                        async: false,
                        data: "notify={\"hid\":\"" + app.listdata.result[j].hid + "\",\"id\":\"" + app.listdata.result[j].id + "\"}",
                        success: function(detailData) {
                            self.DetailsData = detailData;
                        },
                        error: app.errorAlert
                    });
                    self.details.rqstns.push("{Line: {" + self.lineData + "}, Details: {" + self.DetailsData + "}, Distribution: {" + self.DistributionData + "}}");

                }
            }
            window.localStorage.setItem("Details", JSON.stringify(self.details));
        } else {
            JSON.parse(window.localStorage.getItem("authVars"));
        }
        return this;
    };
    this.localStorageDistData = function(dist) {
        $("#" + dist.id + "-dist-list").html(NotificationDetailView.distLiTemplate(dist.result));
        $("#" + dist.id + "-dist-list").removeAttr("style");
        $("#" + dist.id + "-dist-list").prev().removeAttr("style");
        if (!dist.result.length) {
            $("#" + dist.id + "-dist-list").css({display: "none"});
            $("#" + dist.id + "-dist-list").prev().css({display: "none"});
        }
    };
    this.loadLineDetails = function(data) {
        if (data.result) {
            window.localStorage.setItem("notificationDetail", JSON.stringify(data));//JSON.parse(window.localStorage.getItem("notificationDetail"))
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
                    if (dist.result && !dist.result.length) {
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

