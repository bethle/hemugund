

var NotificationRequisitionDetailView = function(detail) {
    var self = this;
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
        this.registerEvents();

    };
    this.registerEvents = function() {
        $("body").on('click', '.download-file', function() {
//            app.notify
        });
    };
    this.render = function(action) {
        this.el.innerHTML = NotificationRequisitionDetailView.template(detail);
        return this;
    };

    this.initialize();
};

NotificationRequisitionDetailView.template = Handlebars.compile(document.getElementById("header-details-requisition-tpl").innerHTML);

var NotificationPurchaseOrderDetailView = function(detail) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
    };
    this.render = function(action) {
        this.el.innerHTML = NotificationPurchaseOrderDetailView.template(detail);
        return this;
    };

    this.initialize();
};

NotificationPurchaseOrderDetailView.template = Handlebars.compile(document.getElementById("header-details-purchaseOrder-tpl").innerHTML);

var NotificationExpenseApprovalDetailView = function(detail) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
    };
    this.render = function(action) {
        this.el.innerHTML = NotificationExpenseApprovalDetailView.template(detail);
        return this;
    };

    this.initialize();
};

NotificationExpenseApprovalDetailView.template = Handlebars.compile(document.getElementById("header-details-ExpenseApproval-tpl").innerHTML);

var NotificationPayableInvoiceDetailView = function(detail) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = document.createElement('div');
    };
    this.render = function(action) {
        this.el.innerHTML = NotificationPayableInvoiceDetailView.template(detail);
        return this;
    };

    this.initialize();
};

NotificationPayableInvoiceDetailView.template = Handlebars.compile(document.getElementById("header-details-payableInvoice-tpl").innerHTML);

