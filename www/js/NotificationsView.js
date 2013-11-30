

var NotificationsView = function() {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.el.innerHTML = NotificationsView.template();
    };

    this.render = function() {
        if (app.isOnline()) {
            $.ajax({
                url: app.URL + "Home",
                data: "notify={\"user\":\"" + app.user + "\"}",
                success: this.loadNotifCount,
                error: app.errorAlert
            });
        } else {
            this.loadNotifCount(JSON.parse(window.localStorage.getItem("notifications")));
        }
        return this;
    };

    this.loadNotifCount = function(data) {
        if (data.response === "SUCCESS") {
            if (app.isOnline()) {
                window.localStorage.setItem("notifications", JSON.stringify(data));
                $('#requistion-count').html(data.result.rqstns);
                $('#expense-app-count').html(data.result.xpnsap);
                $('#pay-inv-count').html(data.result.pblnvc);
                $('#purch-ord-count').html(data.result.prchrd);
            } else {
                NotificationsView.count = data;
            }

        } else {
            app.showAlert(data.response, "Notification Count Request Errored");
            location.href = "#Error";
        }
    };
    this.initialize();
};

NotificationsView.template = Handlebars.templates['notifications-view-tpl'];

/*
 * {"response" : "SUCCESS", "result": {"requisition" : { "count" : 1,"url" : "http://192.168.10.50:8084/ebs/Notifications/rqstns/1"}, "expenseApproval" : { "count" : 0,"url" : ""}, "payableInvoice" : { "count" : 0,"url" : ""}, "purchaseOrder" : { "count" : 0,"url" : ""} }}
 */