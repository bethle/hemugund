(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['mg_header-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing, self = this;

        function program1(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "    \r\n            ";
            stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.leftButtonText)), stack1 == null || stack1 === false ? stack1 : stack1.backgroundImage), {hash: {}, inverse: self.program(8, program8, data), fn: self.program(2, program2, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program2(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            ";
            stack2 = helpers['with'].call(depth0, ((stack1 = (depth0 && depth0.leftButtonText)), stack1 == null || stack1 === false ? stack1 : stack1.backgroundImage), {hash: {}, inverse: self.noop, fn: self.program(3, program3, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program3(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <a class=\"mg_left_button\" id=\"mg_left_button_id\" >            \r\n            <div id=\"mg_backbutton_arrow_part\" ></div>\r\n            <div id=\"mg_backbutton_text_part\" >                 \r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.customType), {hash: {}, inverse: self.program(6, program6, data), fn: self.program(4, program4, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </div>                        \r\n            </a>\r\n            ";
            return buffer;
        }
        function program4(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            "
                    + escapeExpression(((stack1 = (depth0 && depth0.customType)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "   \r\n            ";
            return buffer;
        }

        function program6(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.textType || (depth0 && depth0.textType)), stack1 ? stack1.call(depth0, (depth0 && depth0.basicType), options) : helperMissing.call(depth0, "textType", (depth0 && depth0.basicType), options)))
                    + "\r\n            ";
            return buffer;
        }

        function program8(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "              \r\n            ";
            stack2 = helpers['with'].call(depth0, ((stack1 = (depth0 && depth0.leftButtonText)), stack1 == null || stack1 === false ? stack1 : stack1.backgroundCss), {hash: {}, inverse: self.noop, fn: self.program(9, program9, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program9(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <a id=\"mg_back_backgroundCss\" class=\"mg_button_back\" >\r\n            <span id=\"leftButtonText\" >\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.customType), {hash: {}, inverse: self.program(6, program6, data), fn: self.program(4, program4, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </span>\r\n            </a>\r\n            ";
            return buffer;
        }

        function program11(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.leftButtonImage), {hash: {}, inverse: self.noop, fn: self.program(12, program12, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program12(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.leftButtonImage), {hash: {}, inverse: self.noop, fn: self.program(13, program13, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program13(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <a class=\"mg_left_button\" id=\"mg_left_button_id\"  ><img src=\"\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.customType), {hash: {}, inverse: self.program(16, program16, data), fn: self.program(14, program14, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            \"/></a>\r\n            ";
            return buffer;
        }
        function program14(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            "
                    + escapeExpression(((stack1 = (depth0 && depth0.customType)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\r\n            ";
            return buffer;
        }

        function program16(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.imageType || (depth0 && depth0.imageType)), stack1 ? stack1.call(depth0, (depth0 && depth0.basicType), options) : helperMissing.call(depth0, "imageType", (depth0 && depth0.basicType), options)))
                    + "\r\n            ";
            return buffer;
        }

        function program18(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.rightButton1Image), {hash: {}, inverse: self.noop, fn: self.program(19, program19, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program19(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <a class=\"mg_right_button\" id=\"mg_right_button1_id\" ><img src=\"\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.customType), {hash: {}, inverse: self.program(16, program16, data), fn: self.program(14, program14, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            \" /></a>\r\n            ";
            return buffer;
        }

        function program21(depth0, data) {

            var buffer = "", stack1;
            buffer += " \r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.rightButton1Text), {hash: {}, inverse: self.noop, fn: self.program(22, program22, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program22(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.rightButton1Text), {hash: {}, inverse: self.noop, fn: self.program(23, program23, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program23(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <a class=\"\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.backgroundCss), {hash: {}, inverse: self.program(29, program29, data), fn: self.program(24, program24, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            </a>\r\n            ";
            return buffer;
        }
        function program24(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            mg_right_button_bgCss mg_right_button\" id=\"mg_right_button1_id\"  >\r\n            ";
            stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.backgroundCss)), stack1 == null || stack1 === false ? stack1 : stack1.customType), {hash: {}, inverse: self.program(27, program27, data), fn: self.program(25, program25, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program25(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            "
                    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.backgroundCss)), stack1 == null || stack1 === false ? stack1 : stack1.customType)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\r\n            ";
            return buffer;
        }

        function program27(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.textType || (depth0 && depth0.textType)), stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.backgroundCss)), stack1 == null || stack1 === false ? stack1 : stack1.basicType), options) : helperMissing.call(depth0, "textType", ((stack1 = (depth0 && depth0.backgroundCss)), stack1 == null || stack1 === false ? stack1 : stack1.basicType), options)))
                    + "\r\n            ";
            return buffer;
        }

        function program29(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.backgroundImage), {hash: {}, inverse: self.noop, fn: self.program(30, program30, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program30(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            mg_right_button_text mg_right_button\" mg_right_button1_id >\r\n            ";
            stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.backgroundImage)), stack1 == null || stack1 === false ? stack1 : stack1.customType), {hash: {}, inverse: self.program(33, program33, data), fn: self.program(31, program31, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program31(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            "
                    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.backgroundImage)), stack1 == null || stack1 === false ? stack1 : stack1.customType)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\r\n            ";
            return buffer;
        }

        function program33(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.textType || (depth0 && depth0.textType)), stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.backgroundImage)), stack1 == null || stack1 === false ? stack1 : stack1.basicType), options) : helperMissing.call(depth0, "textType", ((stack1 = (depth0 && depth0.backgroundImage)), stack1 == null || stack1 === false ? stack1 : stack1.basicType), options)))
                    + "\r\n            ";
            return buffer;
        }

        function program35(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.rightButton2Image), {hash: {}, inverse: self.noop, fn: self.program(36, program36, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program36(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <a class=\"mg_right_button\" id=\"mg_right_button2_id\" ><img src=\"\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.customType), {hash: {}, inverse: self.program(16, program16, data), fn: self.program(14, program14, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            \" /></a>\r\n            ";
            return buffer;
        }

        function program38(depth0, data) {

            var buffer = "", stack1;
            buffer += " \r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.rightButton2Text), {hash: {}, inverse: self.noop, fn: self.program(39, program39, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program39(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.rightButton2Text), {hash: {}, inverse: self.noop, fn: self.program(40, program40, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program40(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <a class=\"\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.backgroundCss), {hash: {}, inverse: self.program(43, program43, data), fn: self.program(41, program41, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "            \r\n            </a>\r\n            ";
            return buffer;
        }
        function program41(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            mg_right_button_bgCss mg_right_button\" id=\"mg_right_button2_id\"  >\r\n            ";
            stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.backgroundCss)), stack1 == null || stack1 === false ? stack1 : stack1.customType), {hash: {}, inverse: self.program(27, program27, data), fn: self.program(25, program25, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            ";
            return buffer;
        }

        function program43(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.backgroundImage), {hash: {}, inverse: self.noop, fn: self.program(44, program44, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program44(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            mg_right_button_text mg_right_button\" id=\"mg_right_button2_id\"  >\r\n            ";
            stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.backgroundImage)), stack1 == null || stack1 === false ? stack1 : stack1.customType), {hash: {}, inverse: self.program(33, program33, data), fn: self.program(31, program31, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            ";
            return buffer;
        }

        function program46(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            <div id=\"mg_header1_text\" class=\"mg_header_text\" >";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.locale || (depth0 && depth0.locale)), stack1 ? stack1.call(depth0, (depth0 && depth0.Header1Text), options) : helperMissing.call(depth0, "locale", (depth0 && depth0.Header1Text), options)))
                    + "</div>                        \r\n            ";
            return buffer;
        }

        function program48(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.Header1Image), {hash: {}, inverse: self.program(52, program52, data), fn: self.program(49, program49, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program49(depth0, data) {

            var buffer = "", stack1;
            buffer += "  \r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.Header1Image), {hash: {}, inverse: self.noop, fn: self.program(50, program50, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program50(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <div id=\"mg_header1_image\" class=\"mg_header_text\" ><img src=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.image)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\" /><p>"
                    + escapeExpression(((stack1 = (depth0 && depth0.text)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p></div>            \r\n            ";
            return buffer;
        }

        function program52(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.Header3Text), {hash: {}, inverse: self.program(55, program55, data), fn: self.program(53, program53, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program53(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "            \r\n            <div id=\"mg_header3_text\" class=\"mg_header_text\" >";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.locale || (depth0 && depth0.locale)), stack1 ? stack1.call(depth0, (depth0 && depth0.Header3Text), options) : helperMissing.call(depth0, "locale", (depth0 && depth0.Header3Text), options)))
                    + "</div>            \r\n            ";
            return buffer;
        }

        function program55(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.Header3Image), {hash: {}, inverse: self.noop, fn: self.program(56, program56, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program56(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.Header3Image), {hash: {}, inverse: self.noop, fn: self.program(57, program57, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            ";
            return buffer;
        }
        function program57(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <div id=\"mg_header3_image\" class=\"mg_header_text\" ><img src=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.image)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\" /><p>"
                    + escapeExpression(((stack1 = (depth0 && depth0.text)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p></div>            \r\n            ";
            return buffer;
        }

        function program59(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            <div id=\"mg_header2_text\" class=\"mg_header_text\" >";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.locale || (depth0 && depth0.locale)), stack1 ? stack1.call(depth0, (depth0 && depth0.Header2Text), options) : helperMissing.call(depth0, "locale", (depth0 && depth0.Header2Text), options)))
                    + "</div>\r\n            ";
            return buffer;
        }

        buffer += "\r\n            <div id=\"mg_header_container\">\r\n            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.leftButtonText), {hash: {}, inverse: self.program(11, program11, data), fn: self.program(1, program1, data), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "   \r\n            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.rightButton1Image), {hash: {}, inverse: self.program(21, program21, data), fn: self.program(18, program18, data), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\r\n            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.rightButton2Image), {hash: {}, inverse: self.program(38, program38, data), fn: self.program(35, program35, data), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\r\n            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.Header1Text), {hash: {}, inverse: self.program(48, program48, data), fn: self.program(46, program46, data), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\r\n            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.Header2Text), {hash: {}, inverse: self.noop, fn: self.program(59, program59, data), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\r\n            </div>            \r\n";
        return buffer;
    });
    templates['mg_list-type1-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, functionType = "function", self = this;

        function program1(depth0, data, depth1) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            <li class=\"mg_list_type1_item\" >            \r\n            <a class=\"mg_list_anchor\" >\r\n            <table cellspacing=\"0\" cellpadding=\"0\">\r\n            <tbody><tr>\r\n            <td>\r\n            <table cellspacing=\"0\" cellpadding=\"0\">\r\n            <tbody><tr>\r\n            <td>\r\n            "
                    + escapeExpression(((stack1 = (depth0 && depth0.date)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n            <td>\r\n            Working\r\n            </td>\r\n            </tr>\r\n            </tbody></table>\r\n            </td>\r\n            <td>\r\n            <p>"
                    + escapeExpression(((stack1 = (depth0 && depth0.hours)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p>\r\n            ";
            stack2 = helpers['with'].call(depth0, (depth1 && depth1.listItemArrow), {hash: {}, inverse: self.noop, fn: self.program(2, program2, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "            \r\n            </td>\r\n            </tr>\r\n            </tbody></table>                          \r\n            </a>                    \r\n            </li>\r\n            ";
            return buffer;
        }
        function program2(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <img class=\"list-arrow \r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.customType), {hash: {}, inverse: self.program(5, program5, data), fn: self.program(3, program3, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            \">\r\n            ";
            return buffer;
        }
        function program3(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.arrowAspectRatio || (depth0 && depth0.arrowAspectRatio)), stack1 ? stack1.call(depth0, (depth0 && depth0.customType), options) : helperMissing.call(depth0, "arrowAspectRatio", (depth0 && depth0.customType), options)))
                    + "\" src=\"\r\n            "
                    + escapeExpression(((stack1 = (depth0 && depth0.customType)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "    \r\n            ";
            return buffer;
        }

        function program5(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.arrowAspectRatio || (depth0 && depth0.arrowAspectRatio)), stack1 ? stack1.call(depth0, (depth0 && depth0.basicType), options) : helperMissing.call(depth0, "arrowAspectRatio", (depth0 && depth0.basicType), options)))
                    + "\" src=\"\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.imageType || (depth0 && depth0.imageType)), stack1 ? stack1.call(depth0, (depth0 && depth0.basicType), options) : helperMissing.call(depth0, "imageType", (depth0 && depth0.basicType), options)))
                    + "\r\n            ";
            return buffer;
        }

        buffer += "\r\n            <ul id=\"mg_list_type1_content\">\r\n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.listItems), {hash: {}, inverse: self.noop, fn: self.programWithDepth(1, program1, data, depth0), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\r\n            </ul>\r\n";
        return buffer;
    });
    templates['mg_list-type2-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing, self = this;

        function program1(depth0, data, depth1) {

            var buffer = "", stack1, stack2, options;
            buffer += "\r\n            <li class=\"mg_list_type2_item\" >\r\n            <a>\r\n            <div class=\"mg_list_type2_item_left_icon ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.moduleColor || (depth0 && depth0.moduleColor)), stack1 ? stack1.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "moduleColor", (depth0 && depth0.module), options)))
                    + "\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.module)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</div>\r\n            <div class=\"mg_list_type2_item_right_content\" >\r\n            <table cellspacing=\"0\" cellpadding=\"0\" class=\"mg_list_type2_item_right_container\" >\r\n            <tr><td class=\"mg_list_type2_item_right_container_r1c1\" >\r\n            ";
            stack2 = helpers['with'].call(depth0, (depth1 && depth1.listItemDoubleArrow), {hash: {}, inverse: self.noop, fn: self.program(2, program2, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "<p class=\"mg_id_no\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.id)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p></td><td class=\"mg_list_type2_item_right_container_r1c2\" ><p class=\"mg_date\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.date)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p></td></tr>\r\n            <tr><td class=\"mg_list_type2_item_right_container_r2c1\" ><img src=\"";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.internalModule || (depth0 && depth0.internalModule)), stack1 ? stack1.call(depth0, (depth0 && depth0.internal), options) : helperMissing.call(depth0, "internalModule", (depth0 && depth0.internal), options)))
                    + "\" class=\"mg_inner_status_icon\" /><p class=\"mg_title\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.title)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p></td><td class=\"mg_list_type2_item_right_container_r2c2\" ><p class=\"mg_amount\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.amount)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p></td></tr>\r\n            <tr><td class=\"mg_list_type2_item_right_container_r3c1\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.description)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</td><td><div class=\"mg_stat_cur_container\" ><p class=\"mg_currency\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.currency)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p><p class=\"mg_status ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.statusColor || (depth0 && depth0.statusColor)), stack1 ? stack1.call(depth0, (depth0 && depth0.status), options) : helperMissing.call(depth0, "statusColor", (depth0 && depth0.status), options)))
                    + "\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.status)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</p></div></td></tr>\r\n            </table>\r\n            </div>\r\n            </a>\r\n            </li>       \r\n            ";
            return buffer;
        }
        function program2(depth0, data) {

            var buffer = "", stack1;
            buffer += "<img src=\"\r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.customType), {hash: {}, inverse: self.program(5, program5, data), fn: self.program(3, program3, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            \" class=\"mg_navigation_double_arrow\" />";
            return buffer;
        }
        function program3(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            "
                    + escapeExpression(((stack1 = (depth0 && depth0.customType)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\r\n            ";
            return buffer;
        }

        function program5(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.imageType || (depth0 && depth0.imageType)), stack1 ? stack1.call(depth0, (depth0 && depth0.basicType), options) : helperMissing.call(depth0, "imageType", (depth0 && depth0.basicType), options)))
                    + "\r\n            ";
            return buffer;
        }

        buffer += "\r\n            <ul id=\"mg_list_type2_content\" >\r\n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.listItemsEBS), {hash: {}, inverse: self.noop, fn: self.programWithDepth(1, program1, data, depth0), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\r\n            </ul>\r\n";
        return buffer;
    });
    templates['mg_list-type3-tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, functionType = "function", self = this;

        function program1(depth0, data, depth1) {

            var buffer = "", stack1, stack2, options;
            buffer += "\r\n            <li class=\"mg_list_type3_item\" >            \r\n            <a href=\"#Detail"
                    + escapeExpression(((stack1 = (depth0 && depth0.mod)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "/"
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-"
                    + escapeExpression(((stack1 = (depth0 && depth0.id)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\" >\r\n            <table cellpadding=\"0\" cellspacing=\"0\" >\r\n            <tr>\r\n            <td>\r\n            <table cellpadding=\"0\" cellspacing=\"0\" >\r\n            <tr>\r\n            <td><div class=\"mg_list_type3_item_r1c1\" >\r\n            <img src=\"";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.internalModule || (depth0 && depth0.internalModule)), stack1 ? stack1.call(depth0, (depth0 && depth0.action), options) : helperMissing.call(depth0, "internalModule", (depth0 && depth0.action), options)))
                    + "\" class=\"mg_inner_status_icon\" />            \r\n            <span id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-num\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.num)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></div>\r\n            <span id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-name\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.name)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></td>                                                                                                            \r\n            </tr>\r\n            <tr>\r\n            <td>\r\n            <span id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-subject\" >"
                    + escapeExpression(((stack1 = (depth0 && depth0.subject)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>\r\n            </td>                                                                                                            \r\n            </tr>\r\n            </table>\r\n            </td>\r\n            <td>           \r\n            <div>            \r\n            ";
            stack2 = helpers['with'].call(depth0, (depth1 && depth1.listItemArrow), {hash: {}, inverse: self.noop, fn: self.program(2, program2, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            </div>\r\n            <ul>\r\n            <li id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-date\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.date)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</li>\r\n            <li id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-amount\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.amount)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</li>                                        \r\n            <li><span class=";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.statusColor || (depth0 && depth0.statusColor)), stack1 ? stack1.call(depth0, (depth0 && depth0.status), options) : helperMissing.call(depth0, "statusColor", (depth0 && depth0.status), options)))
                    + " >"
                    + escapeExpression(((stack1 = (depth0 && depth0.status)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span>&nbsp;&nbsp;<span id=\""
                    + escapeExpression(((stack1 = (depth0 && depth0.hid)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "-code\">"
                    + escapeExpression(((stack1 = (depth0 && depth0.code)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "</span></li>\r\n            </ul>\r\n            </td>\r\n            </tr>                                \r\n            </table>                            \r\n            </a>                    \r\n            </li>\r\n            ";
            return buffer;
        }
        function program2(depth0, data) {

            var buffer = "", stack1;
            buffer += "\r\n            <img class=\"list-arrow \r\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.customType), {hash: {}, inverse: self.program(5, program5, data), fn: self.program(3, program3, data), data: data});
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\r\n            \">\r\n            ";
            return buffer;
        }
        function program3(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.arrowAspectRatio || (depth0 && depth0.arrowAspectRatio)), stack1 ? stack1.call(depth0, (depth0 && depth0.customType), options) : helperMissing.call(depth0, "arrowAspectRatio", (depth0 && depth0.customType), options)))
                    + "\" src=\"\r\n            "
                    + escapeExpression(((stack1 = (depth0 && depth0.customType)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "    \r\n            ";
            return buffer;
        }

        function program5(depth0, data) {

            var buffer = "", stack1, options;
            buffer += "\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.arrowAspectRatio || (depth0 && depth0.arrowAspectRatio)), stack1 ? stack1.call(depth0, (depth0 && depth0.basicType), options) : helperMissing.call(depth0, "arrowAspectRatio", (depth0 && depth0.basicType), options)))
                    + "\" src=\"\r\n            ";
            options = {hash: {}, data: data};
            buffer += escapeExpression(((stack1 = helpers.imageType || (depth0 && depth0.imageType)), stack1 ? stack1.call(depth0, (depth0 && depth0.basicType), options) : helperMissing.call(depth0, "imageType", (depth0 && depth0.basicType), options)))
                    + "\r\n            ";
            return buffer;
        }

        function program7(depth0, data) {


            return "\r\n            <li><a class=\"no-result\" >No results Found</a></li>\r\n            ";
        }

        buffer += "\r\n            <ul id=\"mg_list_type3_content scroll\" >\r\n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash: {}, inverse: self.program(7, program7, data), fn: self.programWithDepth(1, program1, data, depth0), data: data});
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "         \r\n            <li id=\"more-notify-header\" ><a>Show More Results</a></li>       \r\n            </ul>\r\n";
        return buffer;
    });
    templates['mg_tabs_tpl'] = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "", stack1, stack2, options, functionType = "function", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;

        function program1(depth0, data) {

            var buffer = "";
            buffer += "\r\n            <li id=\"tab_list_item_"
                    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
                    + "\" ><a></a></li>                  \r\n            ";
            return buffer;
        }

        function program3(depth0, data) {

            var buffer = "", stack1, stack2;
            buffer += "\r\n            <div id=\"tab_item_"
                    + escapeExpression(((stack1 = (depth0 && depth0.index)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "\" class=\"details\r\n            ";
            stack2 = helpers['if'].call(depth0, (depth0 && depth0.activeTab), {hash: {}, inverse: self.noop, fn: self.program(4, program4, data), data: data});
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += "\r\n            \">  \r\n            <div id=\"tab_item_"
                    + escapeExpression(((stack1 = (depth0 && depth0.index)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
                    + "_content\" class=\"mg_inner_content scroll\"  >            \r\n            </div>\r\n            </div>     \r\n            ";
            return buffer;
        }
        function program4(depth0, data) {


            return "\r\n            mg_show\r\n            ";
        }

        buffer += "\r\n            <div id=\"mg_ui-tabs\">\r\n            <ul id=\"mg_tabs_container\" >\r\n            ";
        options = {hash: {}, inverse: self.noop, fn: self.program(1, program1, data), data: data};
        stack2 = ((stack1 = helpers['for'] || (depth0 && depth0['for'])), stack1 ? stack1.call(depth0, 1, (depth0 && depth0.tabList), 1, false, options) : helperMissing.call(depth0, "for", 1, (depth0 && depth0.tabList), 1, false, options));
        if (stack2 || stack2 === 0) {
            buffer += stack2;
        }
        buffer += "\r\n            </ul>         \r\n            <div class=\"attach-icon\">\r\n            </div>\r\n            </div>\r\n            <div id=\"mg_ui-tab-content\">\r\n            ";
        options = {hash: {}, inverse: self.noop, fn: self.program(3, program3, data), data: data};
        stack2 = ((stack1 = helpers['for'] || (depth0 && depth0['for'])), stack1 ? stack1.call(depth0, 1, (depth0 && depth0.tabList), 1, true, options) : helperMissing.call(depth0, "for", 1, (depth0 && depth0.tabList), 1, true, options));
        if (stack2 || stack2 === 0) {
            buffer += stack2;
        }
        buffer += "                         \r\n            </div>\r\n            </div>\r\n";
        return buffer;
    });
})();
findValueInObject = function(dataObj, keyword) {
    var target = dataObj;
    var key = keyword.split(".");
    for (i in key) {
        target = target[key[i]];
    }
    target = target || keyword;
    return target;
};
Handlebars.registerHelper('getValue', findValueInObject);
localization = function(keyword) {
    var locale = window.locale[window.lang];
    return findValueInObject(locale, keyword);
};
Handlebars.registerHelper('locale', localization);
Handlebars.registerHelper('imageType', function(keyword) {
    var imageNamesObj = window.baseData.basicImages;
    return findValueInObject(imageNamesObj, keyword);
});
Handlebars.registerHelper('textType', function(keyword) {
    var textNamesObj = window.baseData.basicText;
    return localization(findValueInObject(textNamesObj, keyword));
});
Handlebars.registerHelper('arrowAspectRatio', function(arrowType) {
    if (arrowType === "listItemUpArrow" || arrowType === "listItemDownArrow") {
        return " mg_img_width";
    }
    return " mg_img_height";
});
Handlebars.registerHelper('moduleColor', function(key) {
    var moduleName = window.baseData.basicModulebackgroundColors;
    return findValueInObject(moduleName, key);
});
Handlebars.registerHelper('internalModule', function(key) {
    var internalmoduleName = window.baseData.internalModulesImages;
    return findValueInObject(internalmoduleName, key);
});
Handlebars.registerHelper('statusColor', function(key) {
    var status = window.baseData.statusTextColors;
    return findValueInObject(status, (key).replace(/\s+/g, ''));
});
Handlebars.registerHelper('for', function(from, to, incr, flag, block) {
    var listItem = '';
    for (var i = from; i <= to; i += incr) {
        var active_tab = false;
        if (flag) {
            if (this.activeTab === i) {
                active_tab = true;
            }
            listItem += block.fn({"index": i, "activeTab": active_tab});
        }
        else {
            listItem += block.fn(i);
        }
    }
    return listItem;
});
window.baseData = {
    "basicImages": {
        "back": "mobiBundle/images/header/mg_backbutton.png",
        "home": "mobiBundle/images/header/mg_home.png",
        "filter": "mobiBundle/images/header/mg_filter.png",
        "search": "mobiBundle/images/header/mg_search.png",
        "refresh": "mobiBundle/images/header/mg_refresh.png",
        "action": "mobiBundle/images/header/mg_action.png",
        "logout": "mobiBundle/images/header/mg_logout.png",
        "settings": "mobiBundle/images/header/mg_settings.png",
        "listItemRightArrow": "mobiBundle/images/list/mg_right_arrow.png",
        "listItemLeftArrow": "mobiBundle/images/list/mg_left_arrow.png",
        "listItemUpArrow": "mobiBundle/images/list/mg_up_arrow.png",
        "listItemDownArrow": "mobiBundle/images/list/mg_down_arrow.png",
        "listItemRightDoubleArrow": "mobiBundle/images/list/mg_right_double_arrow1.png"
    },
    "basicText": {
        "back": "backText",
        "home": "HomeText",
        "filter": "filterText",
        "search": "searchText",
        "refresh": "refreshText",
        "action": "actionText",
        "filterSubmit": "filterSubmitText",
        "logout": "logoutText",
        "settings": "settingsText"
    },
    "basicModulebackgroundColors": {
        "O": "mg_icon_type1_background",
        "R": "mg_icon_type2_background",
        "E": "mg_icon_type3_background",
        "I": "mg_icon_type4_background"
    },
    "internalModulesImages": {
        "I": "mobiBundle/images/list/info.png",
        "R": "mobiBundle/images/list/required.png"
    },
    "statusTextColors": {
        "OPEN": "mg_openStatusColor",
        "CLOSED": "mg_closedstatusColor",
        "APPROVED": "mg_approvedstatusColor",
        "INPROGRESS": "mg_inprogressstatusColor"
    }
};
window.lang = "en-US"; // codes{English:en-US,French:fr-CN}
window.locale = {
    "en-US": {
        "backText": "Back",
        "logoutText": "Logout",
        "HomeText": "Home",
        "Header1Text": "Header 1",
        "Header2Text": "Header 2",
        "Header3Text": "Header 3",
        "filterText": "Filter",
        "searchText": "Search",
        "refreshText": "Refresh",
        "actionText": "Action",
        "settingsText": "Settings",
        "filterSubmitText": "Done"
    },
    "fr-CN": {
        "backText": "arrière",
        "logoutText": "Déconnexion",
        "HomeText": "maison",
        "Header1Text": "Rubrique 1",
        "Header2Text": "Rubrique 2",
        "Header3Text": "Rubrique 3",
        "filterText": "filtre",
        "searchText": "recherche",
        "refreshText": "Actualiser",
        "actionText": "action",
        "filterSubmitText": "Terminé",
        "settingsText": "paramètres"
    }
};
var Templates = {
    initialization: function() {
        this.eventsRegistration();
    },
    eventsRegistration: function() {
        var self = this;
        $("a,a>img,#mg_ui-tabs > ul > li > a")
                .on("touchstart", function() {
                    if ($(this).parent().parent().attr("id") === "mg_tabs_container") {
                        $(this).addClass("tab_active");
                        return;
                    }
                    $(this).addClass("active-state");
                })
                .on("touchend", function() {
                    $(this).removeClass("active-state");
                    $(this).removeClass("tab_active");
                });
        $(document).on("click touchend", "#mg_tabs_container>li", function(e) {
            self.index = $(this).index();
            $("#mg_ui-tab-content>div").removeClass("mg_show");
            $("#mg_ui-tab-content>div:nth-child(" + (self.index + 1) + ")").addClass("mg_show");
        });
    }
};
Templates.headerTemplate = Handlebars.templates['mg_header-tpl'];
Templates.listType1Template = Handlebars.templates['mg_list-type1-tpl'];
Templates.listType2Template = Handlebars.templates['mg_list-type2-tpl'];
Templates.listType3Template = Handlebars.templates['mg_list-type3-tpl'];
Templates.tabsTemplate = Handlebars.templates['mg_tabs_tpl'];
Templates.initialization();