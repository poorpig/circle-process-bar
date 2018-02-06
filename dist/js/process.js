"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, $) {
    var defaultOption = {
        diameter: 200,
        thickness: 20,
        inactiveColor: "#eee",
        activeColor: "blue"
    };

    function main(option) {
        option = $.extend({}, defaultOption, option);
        if ((typeof option === "undefined" ? "undefined" : _typeof(option)) === 'object' || option === undefined) {
            var $mainDom = createMainDom(option);
            var $leftDom = createLeftDom(option);
            var $rightDom = createRightDom(option);
            $mainDom.append($leftDom).append($rightDom);

            return "<div class='circle-progress-wrapper' style='width:" + option.diameter + "px;height:" + option.diameter + "px;'>" + $mainDom.html() + "</div>";
        } else {
            console.error('process参数不合法');
            return '';
        }
    }

    function createMainDom(option) {
        return $("<div class='circle-progress-wrapper'></div>");
    }

    function createLeftDom(option) {
        var $leftDom_parent = $("<div class='left'></div>");
        var $leftDom_child = $("<span class='circle-left'></span>");

        $leftDom_parent.css({
            "width": option.diameter / 2,
            "height": option.diameter
        });
        $leftDom_child.css({
            "border-width": option.thickness,
            "border": option.thickness + "px solid " + option.inactiveColor,
            "border-left-color": option.thickness + "px solid " + option.activeColor,
            "border-bottom-color": option.thickness + "px solid " + option.activeColor
        });
        return $leftDom_parent.append($leftDom_child);
    }

    function createRightDom(option) {
        var $rightDom_parent = $("<div class='right'></div>");
        var $rightDom_child = $("<span class='circle-right'></span>");

        $rightDom_parent.css({
            "width": option.diameter / 2,
            "height": option.diameter
        });
        $rightDom_child.css({
            "border-width": option.thickness,
            "border": option.thickness + "px solid " + option.inactiveColor,
            "border-top-color": option.activeColor,
            "border-right-color": option.activeColor
        });
        return $rightDom_parent.append($rightDom_child);
    }
    global.process = main;
})(window, jQuery);