var LoginView = function() {
    this.initialize = function() {
        this.el = document.createElement('div');
    };
    this.render = function() {
        this.el.innerHTML = LoginView.template();
        return this;
    };

    this.initialize();
};
LoginView.template = Handlebars.templates['login-view-tpl'];
