var createXHR = (function() {
    if (typeof XMLHttpRequest != 'undefined') {
        return function() {
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != "undefined") {
        return function() {
            if (typeof arguments.callee.activeXString != 'string') {
                var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'], i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {
// Skip if any exception also
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    } else {
        return function() {
            throw new Error('No XHR object available.');
        };
    }
})();

var Notification = function() {
    this.logIn = function(url, user, password, callback) {
        this.ajax({
            url: url,
            dataType: "json",
            data: "login={\"user_name\": \"" + user + "\" , \"password\": \"" + password + "\"}",
            success: function(data) {
                callback(data);
            },
            error: function(data) {
                app.showAlert("Ajax Error", JSON.stringify(data));
                location.href = "#Error";
            }
        });
    };
    this.getHeaders = function(url, user, callback) {
        this.ajax({
            url: url,
            data: "notify={\"user\":\"" + user + "\"}",
            success: function(data) {
                if (data.response === "SUCCESS") {
                    callback(data);
                } else {
                    app.showAlert(data.response, "Notification Header Request Errored");
                }
            },
            error: function() {
                app.showAlert('Ajax Error');
                location.href = "#Error";
            }
        });
    };
    this.getFilterHeaders = function(url, checked, username, callback) {
        var data = {};
        if (app.list === "rqstns") {
            data = "{\"type\":{\"pr\":" + ((checked[0] !== "") ? true : false) + ",\"ir\":" + ((checked[1] !== "") ? true : false) + "},\"status\":{\"ar\":" + ((checked[2] !== "") ? true : false) + ",\"fyi\":" + ((checked[3] !== "") ? true : false) + ",\"closed\":" + ((checked[4] !== "") ? true : false) + "},\"day\":\"" + checked[5] + "\",\"org\":\"" + checked[6] + "\",\"user\":\"" + username + "\"}";
        }
        else if (app.list === "prchrd") {
            data = "{\"type\":{\"blanket\":" + ((checked[0] !== "") ? true : false) + ",\"planned\":" + ((checked[1] !== "") ? true : false) + ",\"standard\":" + ((checked[2] !== "") ? true : false) + ",\"contract\":" + ((checked[3] !== "") ? true : false) + "},\"status\":{\"ar\":" + ((checked[4] !== "") ? true : false) + ",\"fyi\":" + ((checked[5] !== "") ? true : false) + ",\"closed\":" + ((checked[6] !== "") ? true : false) + "},\"day\":\"" + checked[7] + "\",\"org\":\"" + checked[8] + "\",\"user\":\"" + username + "\"}";
        }
        else {
            data = "{\"status\":{\"ar\":" + ((checked[0] !== "") ? true : false) + ",\"fyi\":" + ((checked[1] !== "") ? true : false) + ",\"closed\":" + ((checked[2] !== "") ? true : false) + "},\"day\":\"" + checked[3] + "\",\"org\":\"" + checked[4] + "\",\"user\":\"" + username + "\"}";
        }
        this.ajax({
            url: url,
            data: "notify=" + data,
            success: function(data) {
                if (data.response === "SUCCESS") {
                    callback(data);
                } else {
                    app.showAlert(data.response, "Notification Header Request Errored");
                }
            },
            error: function() {
                app.showAlert('Ajax Error');
            }
        });
    };
    this.getNotificationsCount = function(url, user, callback) {
        this.ajax({
            url: url,
            data: "notify={\"user\":\"" + user + "\"}",
            success: function(data) {
                if (data.response === "SUCCESS") {
                    callback(data);
                } else {
                    app.showAlert(data.response, "Notification Count Request Errored");
                }
            },
            error: function() {
                app.showAlert('Ajax Error');
                location.href = "#Error";
            }
        });
    };

    this.getSearchHeaders = function(url, data, username, callback) {
        this.ajax({
            url: url,
            data: "notify={\"query\":\"" + data + "\",\"user\": \"" + username + "\"}",
            success: function(data) {
                if (data.response === "SUCCESS") {
                    callback(data);
                } else {
                    app.showAlert(data.response, "Notification Header Request Errored");
                }
            },
            error: function() {
                app.showAlert('Ajax Error');
                location.href = "#Error";
            }
        });
    };
    this.getDetail = function(url, id, num, callback) {
        this.ajax({
            url: url,
            dataType: "json",
            data: "notify={\"hid\":\"" + id + "\",\"id\":\"" + num + "\"}",
            success: function(data) {
                if (data.response === "SUCCESS") {
                    callback(data);
                }
            },
            error: function() {
                app.showAlert('Ajax Error');
                location.href = "#Error";
            }
        });
    };
    this.forward = function(url, to_user) {
        this.ajax({
            url: url,
            dataType: "json",
            data: "notify={\"id\": \"" + app.notifyId + "\" , \"user\": \"" + app.username + "\", \"to_user\": \"" + to_user + "\"}",
            success: function(data) {
                app.showAlert("success");
                $("#popup-bckgrnd").attr("class", "popup-hide");
                $("#popup-bckgrnd>div>div:nth-child(2)").attr("class", "popup-hide");
                $("#user-list").prop('selectedIndex', 0);
                location.href = "#Not/" + app.list;
            },
            error: function(data) {
                app.showAlert("Ajax Error");
                location.href = "#Error";
            }
        });
    };
    this.approve = function(url, msg) {
        this.ajax({
            url: url,
            dataType: "json",
            data: "notify={\"id\": \"" + app.notifyId + "\" , \"user\": \"" + app.username + "\" , \"msg\": \"" + msg + "\"}",
            success: function(data) {
                app.showAlert("success");
                $("#popup-bckgrnd").attr("class", "popup-hide");
                $("#popup-bckgrnd>div>div:nth-child(1)").attr("class", "popup-hide");
                location.href = "#Not/" + app.list;
                return "success";
            },
            error: function(data) {
                app.showAlert("Ajax Error");
                location.href = "#Error";
                return "error";
            }
        });
    };
    this.reject = function(url, msg) {
        this.ajax({
            url: url,
            dataType: "json",
            data: "notify={\"id\": \"" + app.notifyId + "\" , \"user\": \"" + app.username + "\", \"msg\": \"" + msg + "\"}",
            success: function(data) {
                app.showAlert("success");
                $("#popup-bckgrnd").attr("class", "popup-hide");
                $("#popup-bckgrnd>div>div:nth-child(3)").attr("class", "popup-hide");
                location.href = "#Not/" + app.list;
                return "success";
            },
            error: function(data) {
                app.showAlert("Ajax Error");
                location.href = "#Error";
                return "error";
            }
        });
    };
    this.getUsers = function(url, callback) {
        this.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                callback(data);
            },
            error: function(data) {
                app.showAlert("Ajax Error");
                location.href = "#Error";
                return "error";
            }
        });
    };
    this.logOut = function(url, callback) {
        this.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                callback(data);
            },
            error: function(data) {
                app.showAlert("Ajax Error");
                location.href = "#Error";
                return "error";
            }
        });
    };
    this.ajax = function(param) {
        var xhr = createXHR();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    param.success(JSON.parse(xhr.responseText));
                } else {
                    param.error();
                }
            }
        };
        if (param.data) {
            xhr.open('GET', param.url + "?" + param.data, true);
        } else {
            xhr.open('GET', param.url, true);
        }
//        xhr.timeout = 10000;
//        xhr.ontimeout = function() {
//            app.showAlert("Time Out", "Time Exception");
//        }
        xhr.send(null);
    };
    return this;
};
try {
// create a static XHR member
    Notification.xhr = createXHR();
} catch (ex) {
    app.showAlert("XHR Obeject not available", "XHR Exception");
}



// Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
// that use async data access APIs
//    var callLater = function(callback, data) {
//        if (callback) {
//            setTimeout(function() {
//                callback(data);
//            });
//        }
//    };
