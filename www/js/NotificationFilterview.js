var NotificationFilterView = function(filter) {
    this.initialize = function() {
        this.el = document.createElement('div');
    };
    this.render = function() {
        this.el.innerHTML = NotificationFilterView.template(filter);
        switch (app.list) {
            case "rqstns":
                this.typeTemplate = NotificationFilterView.liPRTemplate(filter.filter.type);
                break;
            case "prchrd":
                this.typeTemplate = NotificationFilterView.liPOTemplate(filter.filter.type);
                break;

        }
        return this;
    };

    this.showType = function() {
        if (this.typeTemplate) {
            $(".filter-type-list").html(this.typeTemplate);
        }
    };

    this.initialize();
};
NotificationFilterView.liPOTemplate = Handlebars.compile(document.getElementById("filter-po-type-tpl").innerHTML);
NotificationFilterView.liPRTemplate = Handlebars.compile(document.getElementById("filter-req-type-tpl").innerHTML);
NotificationFilterView.template = Handlebars.compile(document.getElementById("filter-view-tpl").innerHTML);

