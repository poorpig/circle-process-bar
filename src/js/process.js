(function (global, $) {
    let defaultOption = {
        diameter: 200,
        thickness: 20,
        inactiveColor: "#eee",
        activeColor: "blue"
    }

    function main(option) {
        option = $.extend({}, defaultOption, option);
        if (typeof option === 'object' || option === undefined) {
            const $mainDom = createMainDom(option);
            const $leftDom = createLeftDom(option);
            const $rightDom = createRightDom(option);
            $mainDom.append($leftDom).append($rightDom);

            return "<div class='circle-progress-wrapper' style='width:" + option.diameter + "px;height:" + option.diameter + "px;'>" + $mainDom.html() + "</div>"
        } else {
            console.error('process参数不合法');
            return '';
        }
    }

    function createMainDom(option) {
        return $("<div class='circle-progress-wrapper'></div>");
    }


    function createLeftDom(option) {
        const $leftDom_parent = $("<div class='left'></div>");
        const $leftDom_child = $("<span class='circle-left'></span>");

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
        const $rightDom_parent = $("<div class='right'></div>");
        const $rightDom_child = $("<span class='circle-right'></span>");

        $rightDom_parent.css({
            "width": option.diameter / 2,
            "height": option.diameter
        });
        $rightDom_child.css({
            "border-width": option.thickness,
            "border": option.thickness + "px solid " + option.inactiveColor,
            "border-top-color": option.activeColor,
            "border-right-color": option.activeColor,
        });
        return $rightDom_parent.append($rightDom_child);
    }
    global.process = main;
})(window, jQuery);