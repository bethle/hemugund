var ActionView = function(users) {
    this.initialize = function() {
        this.el = document.createElement('div');
    };
    this.render = function() {
        this.el.innerHTML = ActionView.template(users);
        return this;
    };

    this.initialize();
};
Handlebars.registerPartial("ApproveAlert", document.getElementById('approve-alert-tpl').innerHTML);
Handlebars.registerPartial("RejectAlert", document.getElementById('reject-alert-tpl').innerHTML);
Handlebars.registerPartial("ForwardAlert", document.getElementById('forward-alert-tpl').innerHTML);
ActionView.template = Handlebars.compile(document.getElementById("action-tpl").innerHTML);
