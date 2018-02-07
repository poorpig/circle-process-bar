"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;!function (global, $) {
    "use strict";

    var defaultOption = {
        width: 100,
        strokeWidth: 6,
        strokeColor: "#52c41a",
        bgColor: "#f8f8f8",
        percent: 0,
        fontColor: "#999",
        fontSize: 14
    };

    function main(option) {
        option = $.extend({}, defaultOption, option);
        if ((typeof option === "undefined" ? "undefined" : _typeof(option)) === 'object' || option === undefined) {
            var $mainDom = createMainDom(option);
            var $innerDom = createInnerDom(option);
            var $outerDom = createOuterDom(option);
            var $infoDom = createInfoDom(option);
            $mainDom.append($innerDom).append($outerDom).append($infoDom);

            return "<div class=\"circle-progress\" style=\"width:" + option.width + "px;height:" + option.width + "px;\">" + $mainDom.html() + "</div>";
        } else {
            console.error('circleProcessBar参数不合法');
            return '';
        }
    }

    function createMainDom(option) {
        return $("<div class='circle-progress'></div>");
    }

    function createInnerDom(option) {
        var $innerDom_parent = $("<svg class=\"circle-progress-inner\"></svg>");
        var $innerDom_child = $("<circle class=\"circle-progress-inner-path\"></circle>");

        var R = (option.width - option.strokeWidth) / 2;
        var C = Math.PI * R * 2;
        $innerDom_child.attr({
            "cx": option.width / 2,
            "cy": option.width / 2,
            "r": R
        }).css({
            "stroke": option.strokeColor,
            "stroke-width": option.strokeWidth + 'px',
            "stroke-dasharray": C,
            "stroke-dashoffset": C * (1 - option.percent)
        });
        return $innerDom_parent.append($innerDom_child);
    }

    function createOuterDom(option) {
        var $outerDom = $("<div class=\"circle-progress-outer\"></div>");

        $outerDom.css({
            "border-width": option.strokeWidth + "px",
            "border-color": option.bgColor
        });

        return $outerDom;
    }

    function createInfoDom(option) {
        var text = option.percent * 100 + "%";
        var $infoDom = $("<div class=\"circle-progress-info\">" + text + "</div>");

        $infoDom.css({
            "line-height": option.width + "px",
            "font-size": option.fontSize,
            "color": option.fontColor
        });

        return $infoDom;
    }

    global.circleProcessBar = main;
}(window, jQuery);