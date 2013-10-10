

var NotificationsView = function() {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.el.innerHTML = NotificationsView.template();
    };
    this.registerBackEvent = function() {
        document.addEventListener("backbutton", this.onBackKeyDown, false);
    };

    this.onBackKeyDown = function() { 
        if(window.confirm("Are you sure you wish to logout?")){
            location.href = "#Logout";
        }
            
    }
    this.render = function() {
        $.ajax({
            url: app.URL + "Home",
            data: "notify={\"user\":\"" + app.user + "\"}",
            success: this.loadNotifCount,
            error: app.errorAlert
        });
        return this;
    };

    this.loadNotifCount = function(data) {
        if (data.response === "SUCCESS") {
            $('#requistion-count').html(data.result.rqstns);
            $('#expense-app-count').html(data.result.xpnsap);
            $('#pay-inv-count').html(data.result.pblnvc);
            $('#purch-ord-count').html(data.result.prchrd);
        } else {
            app.showAlert(data.response, "Notification Count Request Errored");
            location.href = "#Error"
        }
    };
    this.initialize();
};

NotificationsView.template = Handlebars.compile(document.getElementById("notifications-view-tpl").innerHTML);

/*
 * {"response" : "SUCCESS", "result": {"requisition" : { "count" : 1,"url" : "http://192.168.10.50:8084/ebs/Notifications/rqstns/1"}, "expenseApproval" : { "count" : 0,"url" : ""}, "payableInvoice" : { "count" : 0,"url" : ""}, "purchaseOrder" : { "count" : 0,"url" : ""} }}
 */