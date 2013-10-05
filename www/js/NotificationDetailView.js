

var NotificationDetailView = function(detail) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.html(NotificationDetailView.template(detail));
        this.registerEvents();
    };
    this.registerEvents = function() {
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
        } else {
        }
    };
    this.render = function() {
        $.ajax({
            url: app.URL + "Detail/" + app.mod,
            dataType: "json",
            data: "notify={\"hid\":\"" + detail.hid + "\",\"id\":\"" + detail.id + "\"}",
            success: this.loadDetails,
            error: app.errorAlert
        });
        $.ajax({
            url: app.URL + "LineDetail/" + app.mod,
            dataType: "json",
            data: "notify={\"hid\":\"" + detail.hid + "\"}",
            success: this.loadLineDetails,
            error: app.errorAlert
        });
        return this;
    };
    
    this.loadLineDetails = function(data){
        if(app.mod === "xpnsap"){
            $("#notify-lines-list").html(NotificationDetailView.xpnItemsLiTemplate(data.result));
        }else{
            $("#notify-lines-list").html(NotificationDetailView.itemsLiTemplate(data.result));
        }
        
    };
    this.loadDetails = function(data) {
        if (data.response === "SUCCESS") {
            $("#history-list").html(NotificationDetailView.historyLiTemplate(data.result.hist));
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
        }
    };
    this.initialize();
};

NotificationDetailView.template = Handlebars.compile($("#notification-detail-view-tpl").html());

NotificationDetailView.historyLiTemplate = Handlebars.compile($("#history-list-tpl").html());
NotificationDetailView.itemsLiTemplate = Handlebars.compile($("#notification-lines-tpl").html());
NotificationDetailView.xpnItemsLiTemplate = Handlebars.compile($("#expense-lines-tpl").html());
NotificationDetailView.reqTemplate = Handlebars.compile($("#requistion-header-details-list-tpl").html());
NotificationDetailView.poTemplate = Handlebars.compile($("#purchase-header-details-list-tpl").html());
NotificationDetailView.xpnTemplate = Handlebars.compile($("#expense-header-details-list-tpl").html());
NotificationDetailView.invTemplate = Handlebars.compile($("#invoice-header-details-list-tpl").html());
NotificationDetailView.attachmentLiTemplate = Handlebars.compile($("#history-list-tpl").html());

