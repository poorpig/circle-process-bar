'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;!function (global, $, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.circleProcessBar = factory();
}(window, jQuery, function () {
    var defaultOption = {
        width: 100,
        strokeWidth: 6,
        strokeColor: "#52c41a",
        bgColor: "#f8f8f8",
        percent: 0,
        fontColor: "#999",
        fontSize: "14px",
        format: function format(percent) {
            return percent * 100 + "%";
        },
        footer: function footer(percent) {
            return "";
        }
    };

    function main(option) {
        option = $.extend({}, defaultOption, option);
        if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' || option === undefined) {
            var $circleDom = createCircleDom(option);
            var $innerDom = createInnerDom(option);
            var $outerDom = createOuterDom(option);
            var $infoDom = createInfoDom(option);
            $circleDom.append($innerDom).append($outerDom).append($infoDom);

            var $mainDom = $("<div class=\"circle-progress\"></div>").append($circleDom);
            var htmlStr = "<div class=\"circle-progress\">" + $mainDom.html() + createFooterHtml(option) + "</div>";
            return htmlStr;
        } else {
            console.error('circleProcessBar参数不合法');
            return '';
        }
    }

    function createCircleDom(option) {
        var $circleDom = $("<div class='circle-progress-body'></div>");

        $circleDom.css({
            "width": option.width + "px",
            "height": option.width + "px"
        });

        return $circleDom;
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
            "border-width": option.strokeWidth,
            "border-color": option.bgColor
        });

        return $outerDom;
    }

    function createInfoDom(option) {
        var text = option.format(option.percent);
        var $infoDom = $("<div class=\"circle-progress-info\">" + text + "</div>");

        $infoDom.css({
            "line-height": option.width + "px",
            "font-size": option.fontSize,
            "color": option.fontColor
        });

        return $infoDom;
    }

    function createFooterHtml(option) {
        return "<div class=\"circle-progress-footer\">" + option.footer() + "</div>";
    }

    return main;
});