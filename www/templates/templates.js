(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['attachment-alert-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;

        function program1(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n    <!--        <li><a href=\"#Down";
            if (stack1 = helpers.file) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.file);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "-";
            if (stack1 = helpers.id) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.id);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "~";
            if (stack1 = helpers.type) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.type);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "\">";
            if (stack1 = helpers.file) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.file);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "&nbsp;(";
            if (stack1 = helpers.entity) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.entity);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + ")&nbsp;-->\r\n            <li><a onclick=\"app.downloadAttachment('";
            if (stack1 = helpers.file) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.file);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "','";
            if (stack1 = helpers.id) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.id);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "','";
            if (stack1 = helpers.type) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.type);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "')\">";
            if (stack1 = helpers.file) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.file);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "&nbsp;(";
            if (stack1 = helpers.entity) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.entity);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + ")&nbsp;\r\n            </a><span style=\"color:red;float:right\" >&nbsp;";
            if (stack1 = helpers.user) {
                stack1 = stack1.call(depth0, {hash: {}, data: data});
            }
            else {
                stack1 = (depth0 && depth0.user);
                stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
            }
            buffer += escapeExpression(stack1)
                    + "</span>\r\n            </li>\r\n            ";
            return buffer;
        }

        stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)), blockHelperMissing.call(depth0, stack1, {hash: {}, inverse: self.noop, fn: self.program(1, program1, data), data: data}));
        if (stack2 || stack2 === 0) {
            return stack2;
        }
        else {
            return '';
        }
    });
    templates['distribution-list-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;

        function program1(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <li>\r\n            <table>\r\n            <tr>\r\n            <td>"
                    + escapeExpression(((stack1 = (depth0 && depth0.num)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td>\r\n            <td>"
                    + escapeExpression(((stack1 = (depth0 && depth0.acnt)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td>            \r\n            <td>"
                    + escapeExpression(((stack1 = (depth0 && depth0.project)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td>\r\n            <td>"
                    + escapeExpression(((stack1 = (depth0 && depth0.task)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td>      \r\n            </tr>\r\n            </table>            \r\n            </li> \r\n            ";
            return buffer;
        }

        stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)), blockHelperMissing.call(depth0, stack1, {hash: {}, inverse: self.noop, fn: self.program(1, program1, data), data: data}));
        if (stack2 || stack2 === 0) {
            return stack2;
        }
        else {
            return '';
        }
    });
    templates['expense-header-details-list-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;


        buffer += "<li>\r\n            <span>Operating Unit Name:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.org)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Expense Description:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.desc)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                  \r\n            <li>\r\n            <span>Employee:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>              \r\n            <li>\r\n            <span>Status:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.status)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Creation Date:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.crdate)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                                                                                                                                                              \r\n            <li>\r\n            <span>Invoice Number:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.num)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                                                                                                                                                              \r\n            <li>\r\n            <span>Type:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.type)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>";
        return buffer;
    });
    templates['expense-lines-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;

        function program1(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <li>                            \r\n            <table cellspacing=\"0\" cellpadding=\"0\" onclick=\"app.toggle(this)\" >\r\n            <tr>\r\n            <td><span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.num)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>\r\n            <td><span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.rec_verify)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>            \r\n            <td><span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.amount)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>\r\n            </tr>\r\n            <tr><td colspan=\"4\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.desc)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td></tr>\r\n            </table> \r\n            <div class=\"sliding-effect\" >\r\n            <ul>  \r\n            <li>\r\n            <span>Item Number:</span>\r\n            <span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.item)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Justification:</span>\r\n            <span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.just)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>\r\n            </li>                                                                                                                         </ul> \r\n            <table cellspacing=\"0\" cellpadding=\"0\" >\r\n            <tr>\r\n            <td>Distribution No.</td>\r\n            <td>Charge Account</td>\r\n            <td>Project Name</td>\r\n            <td>Task Name</td>\r\n            </tr>\r\n            </table>\r\n            <ul id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.id)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-dist-list\">\r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 5px;\" />\r\n            </li>\r\n            </ul>            \r\n            </div>\r\n            </li>   \r\n            ";
            return buffer;
        }

        stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)), blockHelperMissing.call(depth0, stack1, {hash: {}, inverse: self.noop, fn: self.program(1, program1, data), data: data}));
        if (stack2 || stack2 === 0) {
            return stack2;
        }
        else {
            return '';
        }
    });
    templates['filter-orgs-list-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;

        function program1(depth0, data) {

            var buffer = "";
            buffer += "\r\n            <option value='"
                    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
                    + "' >"
                    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
                    + "</option>            \r\n            ";
            return buffer;
        }

        stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)), blockHelperMissing.call(depth0, stack1, {hash: {}, inverse: self.noop, fn: self.program(1, program1, data), data: data}));
        if (stack2 || stack2 === 0) {
            return stack2;
        }
        else {
            return '';
        }
    });
    templates['filter-view-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, self = this, functionType = "function", escapeExpression = this.escapeExpression;

        function program1(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            <p>"
                    + escapeExpression(((stack1 = (depth0 && depth0.type_head)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p>\r\n            <ul class=\"filter-type-list\">\r\n            ";
            stack2 = helpers['if'].call(depth0, (depth0 && depth0.prchrd), {hash: {}, inverse: self.noop, fn: self.program(2, program2, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            ";
            stack2 = helpers['if'].call(depth0, (depth0 && depth0.rqstns), {hash: {}, inverse: self.noop, fn: self.program(20, program20, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n\r\n            </ul>\r\n            ";
            return buffer;
        }
        function program2(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.type), {hash: {}, inverse: self.noop, fn: self.program(3, program3, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program3(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <li>\r\n            <div>\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.blanket), {hash: {}, inverse: self.program(6, program6, data), fn: self.program(4, program4, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>\r\n            </li>\r\n            <li>\r\n            <div>\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.planned), {hash: {}, inverse: self.program(10, program10, data), fn: self.program(8, program8, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>\r\n            </li>            \r\n            <li>\r\n            <div>\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.standard), {hash: {}, inverse: self.program(14, program14, data), fn: self.program(12, program12, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>\r\n            </li>            \r\n            <li>\r\n            <div>\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.contract), {hash: {}, inverse: self.program(18, program18, data), fn: self.program(16, program16, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>\r\n            </li>\r\n            ";
            return buffer;
        }
        function program4(depth0, data) {


            return "\r\n            <input id=\"check1\" type=\"checkbox\" name=\"type\" checked=\"checked\" value=\"BLANKET\"/>\r\n            <label for=\"check1\">Blanket</label>			\r\n            ";
        }

        function program6(depth0, data) {


            return "\r\n            <input id=\"check1\" type=\"checkbox\" name=\"type\" value=\"BLANKET\"/>\r\n            <label for=\"check1\">Blanket</label>			\r\n            ";
        }

        function program8(depth0, data) {


            return "\r\n            <input id=\"check2\" type=\"checkbox\" name=\"type\" checked=\"checked\" value=\"PLANNED\"/>\r\n            <label for=\"check2\">Planned</label>			\r\n            ";
        }

        function program10(depth0, data) {


            return "\r\n            <input id=\"check2\" type=\"checkbox\" name=\"type\" value=\"PLANNED\"/>\r\n            <label for=\"check2\">Planned</label>			\r\n            ";
        }

        function program12(depth0, data) {


            return "\r\n            <input id=\"check3\" type=\"checkbox\" name=\"type\" checked=\"checked\" value=\"STANDARD\"/>\r\n            <label for=\"check3\">Standard</label>			\r\n            ";
        }

        function program14(depth0, data) {


            return "\r\n            <input id=\"check3\" type=\"checkbox\" name=\"type\" value=\"STANDARD\"/>\r\n            <label for=\"check3\">Standard</label>			\r\n            ";
        }

        function program16(depth0, data) {


            return "\r\n            <input id=\"check4\" type=\"checkbox\" name=\"type\" checked=\"checked\" value=\"CONTRACT\"/>\r\n            <label for=\"check4\">Contract</label>			\r\n            ";
        }

        function program18(depth0, data) {


            return "\r\n            <input id=\"check4\" type=\"checkbox\" name=\"type\" value=\"CONTRACT\"/>\r\n            <label for=\"check4\">Contract</label>			\r\n            ";
        }

        function program20(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.type), {hash: {}, inverse: self.noop, fn: self.program(21, program21, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program21(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <li>\r\n            <div>\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.pr), {hash: {}, inverse: self.program(24, program24, data), fn: self.program(22, program22, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>\r\n            </li>\r\n            <li>\r\n            <div>\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.ir), {hash: {}, inverse: self.program(28, program28, data), fn: self.program(26, program26, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>\r\n            </li> \r\n            ";
            return buffer;
        }
        function program22(depth0, data) {


            return "\r\n            <input id=\"check1\" type=\"checkbox\" name=\"type\" checked=\"checked\" value=\"Purchase Requisition\">\r\n            <label for=\"check1\">PR</label>			\r\n            ";
        }

        function program24(depth0, data) {


            return "\r\n            <input id=\"check1\" type=\"checkbox\" name=\"type\" value=\"Purchase Requisition\">\r\n            <label for=\"check1\">PR</label>			\r\n            ";
        }

        function program26(depth0, data) {


            return "\r\n            <input id=\"check2\" type=\"checkbox\" name=\"type\" checked=\"checked\" value=\"Internal Requisition\">\r\n            <label for=\"check2\">IR</label>			\r\n            ";
        }

        function program28(depth0, data) {


            return "\r\n            <input id=\"check2\" type=\"checkbox\" name=\"type\" value=\"Internal Requisition\">\r\n            <label for=\"check2\">IR</label>			\r\n            ";
        }

        function program30(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.ar), {hash: {}, inverse: self.program(33, program33, data), fn: self.program(31, program31, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>\r\n            </li>\r\n            <li>\r\n            <div>\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.fyi), {hash: {}, inverse: self.program(37, program37, data), fn: self.program(35, program35, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>\r\n            </li>\r\n            <li>\r\n            <div>\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.closed), {hash: {}, inverse: self.program(41, program41, data), fn: self.program(39, program39, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "            \r\n            ";
            return buffer;
        }
        function program31(depth0, data) {


            return "\r\n            <input id=\"check5\" type=\"checkbox\" name=\"status\" checked=\"checked\" value=\"ACTION REQUIRED\">\r\n            <label for=\"check5\">Action Required</label>			\r\n            ";
        }

        function program33(depth0, data) {


            return "\r\n            <input id=\"check5\" type=\"checkbox\" name=\"status\" value=\"ACTION REQUIRED\">\r\n            <label for=\"check5\">Action Required</label>			\r\n            ";
        }

        function program35(depth0, data) {


            return "            \r\n            <input id=\"check6\" type=\"checkbox\" name=\"status\" checked=\"checked\" value=\"FYI\">\r\n            <label for=\"check6\">FYI</label>			\r\n            ";
        }

        function program37(depth0, data) {


            return "\r\n            <input id=\"check6\" type=\"checkbox\" name=\"status\" value=\"FYI\">\r\n            <label for=\"check6\">FYI</label>			\r\n            ";
        }

        function program39(depth0, data) {


            return "\r\n            <input id=\"check7\" type=\"checkbox\" name=\"status\" checked=\"checked\" value=\"CLOSED\">\r\n            <label for=\"check7\">Closed</label>\r\n            ";
        }

        function program41(depth0, data) {


            return "\r\n            <input id=\"check7\" type=\"checkbox\" name=\"status\" value=\"CLOSED\">\r\n            <label for=\"check7\">Closed</label>\r\n            ";
        }

        stack1 = helpers['if'].call(depth0, (depth0 && depth0.type_head), {hash: {}, inverse: self.noop, fn: self.program(1, program1, data), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\r\n            <p>Notification Status</p>\r\n            <ul>\r\n            <li>\r\n            <div>\r\n            ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.status), {hash: {}, inverse: self.noop, fn: self.program(30, program30, data), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\r\n            </div>\r\n            </li>                \r\n            </ul>            \r\n            <p>Days Old</p>\r\n            <div>\r\n            <div id='select-day' >All</div>\r\n            <img src=\"img/arrow.png\" />\r\n            <select onchange=\"document.getElementById('select-day').innerHTML = this.options[this.selectedIndex].text\" >\r\n            <option value='0' >All</option>                                        \r\n            <option value='3' >3 days past</option>            \r\n            <option value='7' >7 days past</option>            \r\n            <option value='31' >1 month</option>                                   \r\n            </select>\r\n            </div>            \r\n            <p>Organization Codes</p>\r\n            <div>\r\n            <div id='select-org' >All</div>\r\n            <img src=\"img/arrow.png\" />\r\n            <select onchange=\"document.getElementById('select-org').innerHTML = this.options[this.selectedIndex].text\" >            \r\n            <option value='0' >All</option>          \r\n            <option value='204' >V1</option>          \r\n            <option value='208' >S1</option>          \r\n            <option value='207' >M1</option>          \r\n            <option value='209' >M2</option>          \r\n            <option value='210' >D2</option>          \r\n            <option value='606' >M3</option>          \r\n            <option value='1643' >M6</option>          \r\n            <option value='1644' >M7</option>          \r\n            <option value='1645' >H1</option>          \r\n            <option value='1884' >W1</option>          \r\n            <option value='1641' >M4</option>          \r\n            <option value='1642' >M5</option>          \r\n            <option value='3159' >EM1</option>          \r\n            <option value='3098' >W2</option>          \r\n            <option value='4064' >B1</option>          \r\n            <option value='4812' >FAC</option>          \r\n            <option value='5226' >W3</option>          \r\n            <option value='5443' >ST3</option>          \r\n            <option value='5444' >ST2</option>          \r\n            <option value='5356' >B2</option>          \r\n            <option value='5702' >FST</option>          \r\n            <option value='5703' >DWH</option>          \r\n            <option value='5441' >XX4</option>          \r\n            <option value='5442' >ST1</option>          \r\n            <option value='5764' >PO1</option>          \r\n            <option value='7227' >W4</option>          \r\n            </select>           \r\n            </div>";
        return buffer;
    });
    templates['header-list-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;

        function program1(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            <li>            \r\n            <a href=\"#Detail"
                    + escapeExpression(((stack1 = (depth0 && depth0.mod)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "/"
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-"
                    + escapeExpression(((stack1 = (depth0 && depth0.id)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\" >\r\n            <table cellpadding=\"0\" cellspacing=\"0\" >\r\n            <tr>\r\n            <td>\r\n            <table cellpadding=\"0\" cellspacing=\"0\" >\r\n            <tr>\r\n            <td><div class=";
            if (stack2 = helpers.icon) {
                stack2 = stack2.call(depth0, {hash: {}, data: data});
            }
            else {
                stack2 = (depth0 && depth0.icon);
                stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash: {}, data: data}) : stack2;
            }
            buffer += escapeExpression(stack2)
                    + " ></div></div>&nbsp;<span id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-num\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.num)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span><span id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-name\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>                                                                                                            \r\n            </tr>\r\n            <tr>\r\n            <td>\r\n            <span id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-subject\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.subject)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>\r\n            </td>                                                                                                            \r\n            </tr>\r\n            </table>\r\n            </td>\r\n            <td>           \r\n            <div><img class=\"list-arrow\" src=\"img/arrow.png\" /></div>\r\n            <ul>\r\n            <li id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-date\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.date)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</li>\r\n            <li id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-amount\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.amount)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</li>                                        \r\n            <li class=";
            if (stack2 = helpers.color) {
                stack2 = stack2.call(depth0, {hash: {}, data: data});
            }
            else {
                stack2 = (depth0 && depth0.color);
                stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash: {}, data: data}) : stack2;
            }
            buffer += escapeExpression(stack2)
                    + " ><span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.status)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>&nbsp;&nbsp;<span id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-code\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.code)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></li>\r\n            </ul>\r\n            </td>\r\n            </tr>                                \r\n            </table>                            \r\n            </a>                    \r\n            </li>\r\n            ";
            return buffer;
        }

        function program3(depth0, data) {


            return "\r\n            <li><a class=\"no-result\" >No results Found</a></li>\r\n            ";
        }

        stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)), blockHelperMissing.call(depth0, stack1, {hash: {}, inverse: self.program(3, program3, data), fn: self.program(1, program1, data), data: data}));
        if (stack2 || stack2 === 0) {
            buffer += stack2;
        }
        buffer += "         \r\n            <li id=\"more-notify-header\" ><a>Show More Results</a></li>";
        return buffer;
    });
    templates['history-list-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;

        function program1(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <li>\r\n            <table cellpadding=\"0\" cellspacing=\"0\"  >\r\n            <tr>\r\n            <td>"
                    + escapeExpression(((stack1 = (depth0 && depth0.code)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td>\r\n            <td rowspan=\"2  \" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td>\r\n            </tr>\r\n            <tr>\r\n            <td>"
                    + escapeExpression(((stack1 = (depth0 && depth0.date)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td>\r\n            </tr>\r\n            </table>\r\n            </li>      \r\n            ";
            return buffer;
        }

        stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)), blockHelperMissing.call(depth0, stack1, {hash: {}, inverse: self.noop, fn: self.program(1, program1, data), data: data}));
        if (stack2 || stack2 === 0) {
            return stack2;
        }
        else {
            return '';
        }
    });
    templates['invoice-header-details-list-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;


        buffer += "<li>\r\n            <span>Operating Unit Name:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.org)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Invoice Description:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.desc)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                  \r\n            <li>\r\n            <span>Requestor:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>              \r\n            <li>\r\n            <span>Vendor Name:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.vname)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Vendor Site:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.vsite)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>             \r\n            <li>\r\n            <span>Status:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.status)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Creation Date:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.crdate)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      \r\n            <li>\r\n            <span>Type:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.type)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>";
        return buffer;
    });
    templates['login-view-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};



        return " \r\n            <div id=\"loginScreen\" >\r\n            <div></div>\r\n            <div></div>\r\n            <img src=\"img/mini-loading.gif\" id=\"login-loading\" class=\"loading\" />\r\n            <div>\r\n            <table cellspacing=\"0\" cellpadding=\"0\">\r\n            <tr>\r\n            <td>    \r\n            <div></div>\r\n            <input type=\"text\" placeholder=\"Username\" id=\"user-name\" value=\"\" >\r\n            </td>                                   \r\n            </tr>\r\n            <tr><td></td></tr>\r\n            <tr>\r\n            <td>\r\n            <div></div>\r\n            <input type=\"password\" placeholder=\"Password\" id=\"password\" value=\"\" >\r\n            </td>\r\n            </tr>\r\n            </table>\r\n            </div>                \r\n            <div>\r\n            <div><input type=\"submit\" value=\"Sign In\" onclick=\"location.href='#Login'\"/><a>Forgot Username or Password ?</a></div>                        \r\n            </div>\r\n            <p>Anblicks &#169; 2013. All rights reserved.</p>\r\n            </div>            \r\n            </div>            \r\n            <div  id=\"loading-screen\" class=\"loading-hide\" ><div><div></div>\r\n";
    });
    templates['notification-detail-partial-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;


        buffer += "<div>            \r\n            <p>"
                + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</p>\r\n            <p>"
                + escapeExpression(((stack1 = (depth0 && depth0.amount)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "<span>"
                + escapeExpression(((stack1 = (depth0 && depth0.code)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span></p>            \r\n            </div>           \r\n            <div><span>"
                + escapeExpression(((stack1 = (depth0 && depth0.date)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span></div>\r\n            <p>"
                + escapeExpression(((stack1 = (depth0 && depth0.desc)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</p>\r\n            <div id=\"ui-tabs\">\r\n            <ul>                    \r\n            <li onclick=\"app.tab(this)\" ></li>    \r\n            <li onclick=\"app.tab(this)\" ></li>            \r\n            <li onclick=\"app.tab(this)\" ></li>                    \r\n            </ul>         \r\n            <div class=\"attach-icon\" >\r\n            </div>\r\n            </div>\r\n            <div id=\"ui-tab-content\">\r\n            <div class=\"details show\" id=\"list-items\" >\r\n            <div class=\"scrollable\" >\r\n            <table cellspacing=\"0\" cellpadding=\"0\" >\r\n            <tr>\r\n            <td><span>Line</span></td>\r\n            <td><span>Quantity</span></td>\r\n            <td><span>Price</span></td>\r\n            <td><span>Amount("
                + escapeExpression(((stack1 = (depth0 && depth0.code)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + ")</span></td>\r\n            </tr>\r\n            </table>\r\n            <ul id=\"notify-lines-list\" style=\"top:40px;bottom:0px;\">\r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 5px;\" />\r\n            </li>\r\n            </ul>\r\n            </div>            \r\n            </div>            \r\n            <div class=\"details\" id=\"information\" >\r\n            <div>\r\n            <ul id=\"header-details-list\" class=\"scrollable\">            \r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 5px;\" />\r\n            </li>\r\n            </ul>\r\n            </div>\r\n            </div>                                  \r\n            <div class=\"details\" id=\"history\" >\r\n            <div>\r\n            <ul id=\"history-list\" class=\"scrollable\">\r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 5px;\" />\r\n            </li>\r\n            </ul>\r\n            </div>\r\n            </div>             \r\n            </div>";
        return buffer;
    });
    templates['notification-detail-view-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;


        buffer += "<div class='header'><a class='button header-button header-button-left ' href=\"#Back\"><span style=\"display:block;margin-left:5px\" >Back</span></a><h1 style=\"line-height:44px;height:44px;font-size:22px;padding-top:0px;\" >";
        if (stack1 = helpers.num) {
            stack1 = stack1.call(depth0, {hash: {}, data: data});
        }
        else {
            stack1 = (depth0 && depth0.num);
            stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
        }
        buffer += escapeExpression(stack1)
                + "</h1><a class='button header-button header-button-right action-button' onclick=\"app.slideDown(document.getElementById('ActionFooter'))\" ></a></div>            \r\n            <div id=\"header-details\" >\r\n            <div>            \r\n            <p>"
                + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</p>\r\n            <p>"
                + escapeExpression(((stack1 = (depth0 && depth0.amount)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "<span>"
                + escapeExpression(((stack1 = (depth0 && depth0.code)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span></p>            \r\n            </div>           \r\n            <div><span>"
                + escapeExpression(((stack1 = (depth0 && depth0.date)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span></div>\r\n            <p>"
                + escapeExpression(((stack1 = (depth0 && depth0.desc)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</p>\r\n            <div id=\"ui-tabs\">\r\n            <ul>                    \r\n            <li onclick=\"app.tab(this)\" ></li>    \r\n            <li onclick=\"app.tab(this)\" ></li>            \r\n            <li onclick=\"app.tab(this)\" ></li>                    \r\n            </ul>         \r\n            <div class=\"attach-icon\" >\r\n            </div>\r\n            </div>\r\n            <div id=\"ui-tab-content\">\r\n            <div class=\"details show\" id=\"list-items\" >\r\n            <div class=\"scrollable\" >\r\n            <table cellspacing=\"0\" cellpadding=\"0\" >\r\n            <tr>\r\n            <td><span>Line</span></td>\r\n            <td><span>Quantity</span></td>\r\n            <td><span>Price</span></td>\r\n            <td><span>Amount("
                + escapeExpression(((stack1 = (depth0 && depth0.code)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + ")</span></td>\r\n            </tr>\r\n            </table>\r\n            <ul id=\"notify-lines-list\"  style=\"top:40px;bottom:0px;\">\r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 5px;\" />\r\n            </li>\r\n            </ul>\r\n            </div>            \r\n            </div>            \r\n            <div class=\"details\" id=\"information\" >\r\n            <div>\r\n            <ul id=\"header-details-list\" class=\"scrollable\">            \r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 5px;\" />\r\n            </li>\r\n            </ul>\r\n            </div>\r\n            </div>                                  \r\n            <div class=\"details\" id=\"history\" >\r\n            <div>\r\n            <ul id=\"history-list\" class=\"scrollable\">\r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 5px;\" />\r\n            </li>\r\n            </ul>\r\n            </div>\r\n            </div>             \r\n            </div>\r\n            </div>                \r\n            <div class=\"sliding-effect\" id=\"ActionFooter\" >   \r\n            <div onclick=\"app.slideUp(document.getElementById('ActionFooter'));\" ></div>\r\n            <table cellspacing='0' cellpadding='0' >\r\n            <tr>\r\n            <td>\r\n            <a><input type=\"button\" value=\"Forward\" onclick=\"app.popAlert('ForwardAlert');\" /></a> \r\n            </td>                 \r\n            </tr>\r\n            <tr>\r\n            <td>\r\n            <a><input type=\"button\" value=\"Approve\" onclick=\"app.popAlert('ApproveAlert');\" /></a>\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n            <td>\r\n            <a><input type=\"button\" value=\"Reject\" onclick=\"app.popAlert('RejectAlert');\" /></a>\r\n            </td>                    \r\n            </tr>            \r\n            </table>\r\n            </div>";
        return buffer;
    });
    templates['notification-full-view-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;


        buffer += "<div class='header'><a href='#' class='button header-button header-button-left'><span style=\"display:block;margin-left:5px\" >Back</span></a><h1>";
        if (stack1 = helpers.type) {
            stack1 = stack1.call(depth0, {hash: {}, data: data});
        }
        else {
            stack1 = (depth0 && depth0.type);
            stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
        }
        buffer += escapeExpression(stack1)
                + "</h1><h3>";
        if (stack1 = helpers.name) {
            stack1 = stack1.call(depth0, {hash: {}, data: data});
        }
        else {
            stack1 = (depth0 && depth0.name);
            stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
        }
        buffer += escapeExpression(stack1)
                + "</h3><a class='button header-button header-button-right action-button' onclick=\"app.slideDown(document.getElementById('ActionFooter'))\" ></a></div>                \r\n            <div style=\"float:left; width:38%;\">\r\n            <div id=\"search\">\r\n            <div style=\"width:50%;\" ><input type=\"search\" id=\"search-input\" /></div>            \r\n            <a href=\"#Filter\" class='button filter-button' id=\"filter-show\"  style=\"background-image: url('img/filter.png'); margin-top: 5px;background-size:43px 40px;\" ></a>\r\n            <div id=\"search-notify-header\" class=\"search-button\" >Search</div>                \r\n            </div>\r\n            <div id='header-list' class=\"sliding-effect scrollable\" style=\"top:92px;bottom:0px;width:38%;max-height:100000px;height: calc(100% - 92px);\">\r\n            <ul id=\"";
        if (stack1 = helpers.mod) {
            stack1 = stack1.call(depth0, {hash: {}, data: data});
        }
        else {
            stack1 = (depth0 && depth0.mod);
            stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
        }
        buffer += escapeExpression(stack1)
                + "-header-list\" style=\"padding-bottom: 92px;\">         \r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 20px;\" />\r\n            </li>\r\n            </ul>\r\n            </div>\r\n            <div id=\"filter\" class=\"sliding-effect\" >\r\n            </div>\r\n            </div>               \r\n            <div id=\"header-details\" style=\"float:right; width:62%;height: calc(100% - 50px);overflow:hidden;\">\r\n            </div>                 \r\n            <div class=\"sliding-effect\" id=\"ActionFooter\" style=\"float:right;width:62%;\" >   \r\n            <div onclick=\"app.slideUp(document.getElementById('ActionFooter'));\" ></div>\r\n            <table cellspacing='0' cellpadding='0' >\r\n            <tr>\r\n            <td>\r\n            <a><input type=\"button\" value=\"Forward\" onclick=\"app.popAlert('ForwardAlert');\" /></a> \r\n            </td>                 \r\n            </tr>\r\n            <tr>\r\n            <td>\r\n            <a><input type=\"button\" value=\"Approve\" onclick=\"app.popAlert('ApproveAlert');\" /></a>\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n            <td>\r\n            <a><input type=\"button\" value=\"Reject\" onclick=\"app.popAlert('RejectAlert');\" /></a>\r\n            </td>                    \r\n            </tr>            \r\n            </table>\r\n            </div>";
        return buffer;
    });
    templates['notification-header-view-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;


        buffer += "<div class='header'><a href='#' class='button header-button header-button-left'><span style=\"display:block;margin-left:5px\" >Back</span></a><h1>";
        if (stack1 = helpers.type) {
            stack1 = stack1.call(depth0, {hash: {}, data: data});
        }
        else {
            stack1 = (depth0 && depth0.type);
            stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
        }
        buffer += escapeExpression(stack1)
                + "</h1><h3>";
        if (stack1 = helpers.name) {
            stack1 = stack1.call(depth0, {hash: {}, data: data});
        }
        else {
            stack1 = (depth0 && depth0.name);
            stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
        }
        buffer += escapeExpression(stack1)
                + "</h3><a href=\"#Filter\" class='button header-button header-button-right filter-button' id=\"filter-show\" ></a></div>\r\n            <div id=\"search\">\r\n            <div><input type=\"search\" id=\"search-input\" /></div>\r\n            <div id=\"search-notify-header\" class=\"search-button\" >Search</div>\r\n            </div>\r\n            <div id='header-list' class=\"scrollable\" style=\"top:92px;bottom:0px;left0px;right:0px;\">                \r\n            <ul id=\"";
        if (stack1 = helpers.mod) {
            stack1 = stack1.call(depth0, {hash: {}, data: data});
        }
        else {
            stack1 = (depth0 && depth0.mod);
            stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash: {}, data: data}) : stack1;
        }
        buffer += escapeExpression(stack1)
                + "-header-list\" style=\"padding-bottom: 92px;\" >         \r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 20px;\" />\r\n            </li>\r\n            </ul>            \r\n            </div>\r\n            <div id=\"filter\" class=\"sliding-effect\" >\r\n            </div>";
        return buffer;
    });
    templates['notification-lines-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;

        function program1(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            <li>                            \r\n            <table cellspacing=\"0\" cellpadding=\"0\" onclick=\"app.toggle(this)\" >\r\n            <tr>\r\n            <td><span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.num)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>\r\n            <td><span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.qnty)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>\r\n            <td><span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.price)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>\r\n            <td><span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.amount)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>\r\n            </tr>\r\n            <tr><td colspan=\"4\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.desc)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td></tr>\r\n            </table> \r\n            <div class=\"sliding-effect\" >\r\n            <ul>  \r\n            <li>\r\n            <span>Item Number:</span>\r\n            <span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.item)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Category:</span>\r\n            <span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.categ)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>\r\n            </li> \r\n            <li>\r\n            <span>UOM:</span>\r\n            <span>"
                    + escapeExpression(((stack1 = (depth0 && depth0.uom)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>\r\n            </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        \r\n            </ul>\r\n			";
            stack2 = helpers['if'].call(depth0, depth0, {hash: {}, inverse: self.noop, fn: self.program(2, program2, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            <ul id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.id)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-dist-list\">\r\n            <li style=\"text-align:center;\">            \r\n            <img src=\"img/mini-loading.gif\" style=\"padding-top: 5px;\" />\r\n            </li>\r\n            </ul>            \r\n            </div>\r\n            </li>   \r\n            ";
            return buffer;
        }
        function program2(depth0, data) {


            return "\r\n            <table cellspacing=\"0\" cellpadding=\"0\" >\r\n            <tr>\r\n            <td>Distribution No.</td>\r\n            <td>Charge Account</td>\r\n            <td>Project Name</td>\r\n            <td>Task Name</td>\r\n            </tr>\r\n            </table>\r\n			";
        }

        stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)), blockHelperMissing.call(depth0, stack1, {hash: {}, inverse: self.noop, fn: self.program(1, program1, data), data: data}));
        if (stack2 || stack2 === 0) {
            return stack2;
        }
        else {
            return '';
        }
    });
    templates['notification-popup-view-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};



        return "<div id=\"popup-bckgrnd\" class=\"popup-hide\" >\r\n            <div>\r\n            <div id=\"ApproveAlert\" class=\"popup-hide\" >\r\n            <img src=\"img/mini-loading.gif\" id=\"login-loading\" class=\"loading\" >\r\n            <img src=\"img/Close.png\" onclick=\"app.closeAlert(this)\" />\r\n            <p>Do you want to approve?</p>\r\n            <p>Comments:</p>  \r\n            <textarea id=\"approve-comment\" ></textarea>\r\n            <div><input type=\"button\" value=\"OK\" onclick=\"app.approve()\" id=\"approve-confirm-button\" /></div>                     \r\n            </div>\r\n            <div id=\"ForwardAlert\" class=\"popup-hide\" >\r\n            <img src=\"img/mini-loading.gif\" id=\"login-loading\" class=\"loading\" >\r\n            <img src=\"img/Close.png\" onclick=\"app.closeAlert(this);\" />\r\n            <table cellspacing='0' cellpadding='0'>\r\n            <tr>\r\n            <td>\r\n            Person Name:\r\n            </td>\r\n            <td>\r\n            <div>\r\n            <div id='select-user' >Choose a person...</div>\r\n            <img src=\"img/arrow.png\" />\r\n            <select id=\"user-list\" onchange=\"document.getElementById('select-user').innerHTML = this.options[this.selectedIndex].text\" >\r\n            <option value='' >Choose a person...</option>                                        \r\n            <option value='sysadmin' >sysadmin</option>            \r\n            <option value='bpalmer' >bpalmer</option>            \r\n            <option value='tgreen' >tgreen</option>            \r\n            <option value='cbrown' >cbrown</option>            \r\n            </select>\r\n            </div>    \r\n            </td>\r\n            </tr>\r\n            </table>\r\n            <div><input type=\"button\" value=\"Send\" onclick=\"app.forward()\" id=\"forward-send-button\" /></div>\r\n            </div>\r\n            <div id=\"RejectAlert\" class=\"popup-hide\" >\r\n            <img src=\"img/mini-loading.gif\" id=\"login-loading\" class=\"loading\">\r\n            <img src=\"img/Close.png\" onclick=\"app.closeAlert(this)\" />\r\n            <p>Do you want to Reject?</p>\r\n            <p>Comments:</p>  \r\n            <textarea id=\"reject-comment\" ></textarea>\r\n            <div ><input type=\"button\" value=\"OK\" onclick=\"app.reject()\" id=\"reject-confirm-button\" /></div>                     \r\n            </div>\r\n            <div id=\"AttachmentAlert\" class=\"popup-hide\" >\r\n            <img src=\"img/Close.png\" onclick=\"app.closeAlert(this)\" />\r\n            <ul id=\"attachment-list\">\r\n            </ul>\r\n            </div>   \r\n            </div>\r\n            </div>";
    });
    templates['notifications-view-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};



        return "<div class='header'><a class='button header-button header-button-left' href=\"#Logout\"><span style=\"display:block;margin-left:5px\" >Logout</span></a><h1 style=\"line-height:44px;height:44px;font-size:22px;padding-top:0px;\">Notifications</h1></div>\r\n            <div id='content-notify' class=\"wrap\"> \r\n            <ul class=\"scrollable\">\r\n            <li>\r\n            <a href=\"#Not/rqstns\"><div>\r\n            <div id=\"requistion-count\"><img style=\"padding-top:4px;\" src=\"img/mini-loading.gif\"/></div>\r\n            <div>Requisition</div>\r\n            </div></a>\r\n            </li>   \r\n            <li>\r\n            <a href=\"#Not/xpnsap\"><div>\r\n            <div id=\"expense-app-count\"><img style=\"padding-top:4px;\" src=\"img/mini-loading.gif\"/></div>\r\n            <div>Exp. Approval</div>\r\n            </div></a>\r\n            </li>   \r\n            <li>\r\n            <a href=\"#Not/pblnvc\"><div>\r\n            <div id=\"pay-inv-count\"><img style=\"padding-top:4px;\" src=\"img/mini-loading.gif\"/></div>\r\n            <div>Payable Invoice</div>\r\n            </div></a>\r\n            </li>   \r\n            <li>\r\n            <a href=\"#Not/prchrd\"><div>\r\n            <div id=\"purch-ord-count\"><img style=\"padding-top:4px;\" src=\"img/mini-loading.gif\"/></div>\r\n            <div>Purchase Order</div>\r\n            </div></a>\r\n            </li>   \r\n            <li>\r\n            <a href=\"#Not/others\"><div>\r\n            <div style=\"display:none\"></div>\r\n            <div>Others</div>\r\n            </div></a>\r\n            </li>   \r\n            </ul>\r\n            </div>\r\n            </div>\r\n            </div>";
    });
    templates['purchase-header-details-list-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;


        buffer += "<li>\r\n            <span>Operating Unit Name:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.org)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>PurchaseOrder Description:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.desc)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                  \r\n            <li>\r\n            <span>Buyer:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>  \r\n            <li>\r\n            <span>Type:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.type)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>  \r\n            <li>\r\n            <span>PO Number:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.num)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>  \r\n            <li>\r\n            <span>Vendor:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.vname)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>              \r\n            <li>\r\n            <span>Supplier Site:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.vsite)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>             \r\n            <li>\r\n            <span>Ship To:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.shipTo)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>\r\n            <li>\r\n            <span>Bill To:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.billTo)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Status:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.status)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Creation Date:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.crdate)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>";
        return buffer;
    });
    templates['requistion-header-details-list-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;


        buffer += "<li>\r\n            <span>Operating Unit Name:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.org)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Requisition Description:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.desc)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                  \r\n            <li>\r\n            <span>Preparer:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>              \r\n            <li>\r\n            <span>Status:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.status)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li> \r\n            <li>\r\n            <span>Creation Date:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.crdate)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                                                                                                                                                              \r\n            <li>\r\n            <span>Req Number:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.num)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                                                                                                                                                              \r\n            <li>\r\n            <span>Type:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.type)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>                                                                                                                                                                                                                                                                                                                          \r\n            <li>\r\n            <span>Requestor:</span>\r\n            <span>"
                + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                + "</span>\r\n            </li>";
        return buffer;
    });
})();