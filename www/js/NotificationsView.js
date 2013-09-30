

var NotificationsView = function(notifications) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
    };
    this.render = function() {
        this.el.innerHTML = NotificationsView.template(notifications);        
        return this;
    };    
    this.initialize();
};
Handlebars.registerPartial("headerdescription", document.getElementById('header-tpl').innerHTML);
Handlebars.registerPartial("ActionAlert", document.getElementById('action-tpl').innerHTML);
NotificationsView.template = Handlebars.compile(document.getElementById("notifications-tpl").innerHTML);

/*
 * {"response" : "SUCCESS", "result": {"requisition" : { "count" : 1,"url" : "http://192.168.10.50:8084/ebs/Notifications/rqstns/1"}, "expenseApproval" : { "count" : 0,"url" : ""}, "payableInvoice" : { "count" : 0,"url" : ""}, "purchaseOrder" : { "count" : 0,"url" : ""} }}
 */