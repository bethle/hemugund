var FileView = function(file) {
    this.initialize = function() {
        this.el = document.createElement('div');
    };
    this.render = function() {
        this.el.innerHTML = FileView.template();
        $.ajax({
            url: app.URL + "Download",
            data: "notify={\"id\":\"" + file.id + "\"}",
            success: function(data){
                $("#content-area").html(data.result);
            },
            error: app.errorAlert
        });
            
        return this;
    };

    this.initialize();
};
FileView.template = Handlebars.compile(document.getElementById("file-content-view-tpl").innerHTML);

