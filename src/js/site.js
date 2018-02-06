// Import a logger for easier debugging.
import $ from 'jquery';
import verge from 'verge';
import "imagesloaded";

var UIkit = window.UIkit;

window.jQuery = $;

$("document").ready(function () {

    $(window).on("load", function () {
        $("html").addClass("content-loaded");
        setTimeout(function () {
            $("#preloader-wrapper").remove();
        }, 500);
    });
});


/**
 * Debounce function
 *
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 *
 * @usage
 *
 * // Create the listener function
 * var updateLayout = _.debounce(function(e) {
 *	        // Does all the layout updating here
 *   }, 500); // Maximum run of once per 500 milliseconds
 *
 *   // Add the event listener
 *   window.addEventListener("resize", updateLayout, false);
 */
function doo_debounce(func, wait, immediate) {

    "use strict";

    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}