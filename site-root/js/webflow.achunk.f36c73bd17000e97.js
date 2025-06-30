"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["966"], {
7199: (function (module) {
/* globals window */ /**
 * Webflow: IX Event triggers for other modules
 */ 
var $ = window.jQuery;
var api = {};
var eventQueue = [];
var namespace = '.w-ix';
var eventTriggers = {
    reset: function(i, el) {
        el.__wf_intro = null;
    },
    intro: function(i, el) {
        if (el.__wf_intro) {
            return;
        }
        el.__wf_intro = true;
        $(el).triggerHandler(api.types.INTRO);
    },
    outro: function(i, el) {
        if (!el.__wf_intro) {
            return;
        }
        el.__wf_intro = null;
        $(el).triggerHandler(api.types.OUTRO);
    }
};
api.triggers = {};
api.types = {
    INTRO: 'w-ix-intro' + namespace,
    OUTRO: 'w-ix-outro' + namespace
};
// Trigger any events in queue + restore trigger methods
api.init = function() {
    var count = eventQueue.length;
    for(var i = 0; i < count; i++){
        var memo = eventQueue[i];
        memo[0](0, memo[1]);
    }
    eventQueue = [];
    $.extend(api.triggers, eventTriggers);
};
// Replace all triggers with async wrapper to queue events until init
api.async = function() {
    for(var key in eventTriggers){
        var func = eventTriggers[key];
        if (!eventTriggers.hasOwnProperty(key)) {
            continue;
        }
        // Replace trigger method with async wrapper
        api.triggers[key] = function(i, el) {
            eventQueue.push([
                func,
                el
            ]);
        };
    }
};
// Default triggers to async queue
api.async();
module.exports = api;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctaXgtZXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93ICovXG5cbi8qKlxuICogV2ViZmxvdzogSVggRXZlbnQgdHJpZ2dlcnMgZm9yIG90aGVyIG1vZHVsZXNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkID0gd2luZG93LmpRdWVyeTtcbnZhciBhcGkgPSB7fTtcbnZhciBldmVudFF1ZXVlID0gW107XG52YXIgbmFtZXNwYWNlID0gJy53LWl4JztcblxudmFyIGV2ZW50VHJpZ2dlcnMgPSB7XG4gIHJlc2V0OiBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICBlbC5fX3dmX2ludHJvID0gbnVsbDtcbiAgfSxcbiAgaW50cm86IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgIGlmIChlbC5fX3dmX2ludHJvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLl9fd2ZfaW50cm8gPSB0cnVlO1xuICAgICQoZWwpLnRyaWdnZXJIYW5kbGVyKGFwaS50eXBlcy5JTlRSTyk7XG4gIH0sXG4gIG91dHJvOiBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICBpZiAoIWVsLl9fd2ZfaW50cm8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuX193Zl9pbnRybyA9IG51bGw7XG4gICAgJChlbCkudHJpZ2dlckhhbmRsZXIoYXBpLnR5cGVzLk9VVFJPKTtcbiAgfSxcbn07XG5cbmFwaS50cmlnZ2VycyA9IHt9O1xuXG5hcGkudHlwZXMgPSB7XG4gIElOVFJPOiAndy1peC1pbnRybycgKyBuYW1lc3BhY2UsXG4gIE9VVFJPOiAndy1peC1vdXRybycgKyBuYW1lc3BhY2UsXG59O1xuXG4vLyBUcmlnZ2VyIGFueSBldmVudHMgaW4gcXVldWUgKyByZXN0b3JlIHRyaWdnZXIgbWV0aG9kc1xuYXBpLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb3VudCA9IGV2ZW50UXVldWUubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICB2YXIgbWVtbyA9IGV2ZW50UXVldWVbaV07XG4gICAgbWVtb1swXSgwLCBtZW1vWzFdKTtcbiAgfVxuICBldmVudFF1ZXVlID0gW107XG4gICQuZXh0ZW5kKGFwaS50cmlnZ2VycywgZXZlbnRUcmlnZ2Vycyk7XG59O1xuXG4vLyBSZXBsYWNlIGFsbCB0cmlnZ2VycyB3aXRoIGFzeW5jIHdyYXBwZXIgdG8gcXVldWUgZXZlbnRzIHVudGlsIGluaXRcbmFwaS5hc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIga2V5IGluIGV2ZW50VHJpZ2dlcnMpIHtcbiAgICB2YXIgZnVuYyA9IGV2ZW50VHJpZ2dlcnNba2V5XTtcbiAgICBpZiAoIWV2ZW50VHJpZ2dlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gUmVwbGFjZSB0cmlnZ2VyIG1ldGhvZCB3aXRoIGFzeW5jIHdyYXBwZXJcbiAgICBhcGkudHJpZ2dlcnNba2V5XSA9IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgZXZlbnRRdWV1ZS5wdXNoKFtmdW5jLCBlbF0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8vIERlZmF1bHQgdHJpZ2dlcnMgdG8gYXN5bmMgcXVldWVcbmFwaS5hc3luYygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaTtcbiJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwialF1ZXJ5IiwiYXBpIiwiZXZlbnRRdWV1ZSIsIm5hbWVzcGFjZSIsImV2ZW50VHJpZ2dlcnMiLCJyZXNldCIsImkiLCJlbCIsIl9fd2ZfaW50cm8iLCJpbnRybyIsInRyaWdnZXJIYW5kbGVyIiwidHlwZXMiLCJJTlRSTyIsIm91dHJvIiwiT1VUUk8iLCJ0cmlnZ2VycyIsImluaXQiLCJjb3VudCIsImxlbmd0aCIsIm1lbW8iLCJleHRlbmQiLCJhc3luYyIsImtleSIsImZ1bmMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsR0FFbEI7O0NBRUMsR0FFRDtBQUVBLElBQUlBLElBQUlDLE9BQU9DLE1BQU07QUFDckIsSUFBSUMsTUFBTSxDQUFDO0FBQ1gsSUFBSUMsYUFBYSxFQUFFO0FBQ25CLElBQUlDLFlBQVk7QUFFaEIsSUFBSUMsZ0JBQWdCO0lBQ2xCQyxPQUFPLFNBQVVDLENBQUMsRUFBRUMsRUFBRTtRQUNwQkEsR0FBR0MsVUFBVSxHQUFHO0lBQ2xCO0lBQ0FDLE9BQU8sU0FBVUgsQ0FBQyxFQUFFQyxFQUFFO1FBQ3BCLElBQUlBLEdBQUdDLFVBQVUsRUFBRTtZQUNqQjtRQUNGO1FBQ0FELEdBQUdDLFVBQVUsR0FBRztRQUNoQlYsRUFBRVMsSUFBSUcsY0FBYyxDQUFDVCxJQUFJVSxLQUFLLENBQUNDLEtBQUs7SUFDdEM7SUFDQUMsT0FBTyxTQUFVUCxDQUFDLEVBQUVDLEVBQUU7UUFDcEIsSUFBSSxDQUFDQSxHQUFHQyxVQUFVLEVBQUU7WUFDbEI7UUFDRjtRQUNBRCxHQUFHQyxVQUFVLEdBQUc7UUFDaEJWLEVBQUVTLElBQUlHLGNBQWMsQ0FBQ1QsSUFBSVUsS0FBSyxDQUFDRyxLQUFLO0lBQ3RDO0FBQ0Y7QUFFQWIsSUFBSWMsUUFBUSxHQUFHLENBQUM7QUFFaEJkLElBQUlVLEtBQUssR0FBRztJQUNWQyxPQUFPLGVBQWVUO0lBQ3RCVyxPQUFPLGVBQWVYO0FBQ3hCO0FBRUEsd0RBQXdEO0FBQ3hERixJQUFJZSxJQUFJLEdBQUc7SUFDVCxJQUFJQyxRQUFRZixXQUFXZ0IsTUFBTTtJQUM3QixJQUFLLElBQUlaLElBQUksR0FBR0EsSUFBSVcsT0FBT1gsSUFBSztRQUM5QixJQUFJYSxPQUFPakIsVUFBVSxDQUFDSSxFQUFFO1FBQ3hCYSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUdBLElBQUksQ0FBQyxFQUFFO0lBQ3BCO0lBQ0FqQixhQUFhLEVBQUU7SUFDZkosRUFBRXNCLE1BQU0sQ0FBQ25CLElBQUljLFFBQVEsRUFBRVg7QUFDekI7QUFFQSxxRUFBcUU7QUFDckVILElBQUlvQixLQUFLLEdBQUc7SUFDVixJQUFLLElBQUlDLE9BQU9sQixjQUFlO1FBQzdCLElBQUltQixPQUFPbkIsYUFBYSxDQUFDa0IsSUFBSTtRQUM3QixJQUFJLENBQUNsQixjQUFjb0IsY0FBYyxDQUFDRixNQUFNO1lBQ3RDO1FBQ0Y7UUFFQSw0Q0FBNEM7UUFDNUNyQixJQUFJYyxRQUFRLENBQUNPLElBQUksR0FBRyxTQUFVaEIsQ0FBQyxFQUFFQyxFQUFFO1lBQ2pDTCxXQUFXdUIsSUFBSSxDQUFDO2dCQUFDRjtnQkFBTWhCO2FBQUc7UUFDNUI7SUFDRjtBQUNGO0FBRUEsa0NBQWtDO0FBQ2xDTixJQUFJb0IsS0FBSztBQUVUSyxPQUFPQyxPQUFPLEdBQUcxQiJ9

}),
5134: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ 
var IXEvents = __webpack_require__(7199);
function dispatchCustomEvent(element, eventName) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, null);
    element.dispatchEvent(event);
}
/**
 * Webflow: IX Event triggers for other modules
 */ var $ = window.jQuery;
var api = {};
var namespace = '.w-ix';
var eventTriggers = {
    reset: function(i, el) {
        IXEvents.triggers.reset(i, el);
    },
    intro: function(i, el) {
        IXEvents.triggers.intro(i, el);
        dispatchCustomEvent(el, 'COMPONENT_ACTIVE');
    },
    outro: function(i, el) {
        IXEvents.triggers.outro(i, el);
        dispatchCustomEvent(el, 'COMPONENT_INACTIVE');
    }
};
api.triggers = {};
api.types = {
    INTRO: 'w-ix-intro' + namespace,
    OUTRO: 'w-ix-outro' + namespace
};
$.extend(api.triggers, eventTriggers);
module.exports = api;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctaXgyLWV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHdpbmRvdywgZG9jdW1lbnQgKi9cblxuJ3VzZSBzdHJpY3QnO1xudmFyIElYRXZlbnRzID0gcmVxdWlyZSgnLi93ZWJmbG93LWl4LWV2ZW50cycpO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEN1c3RvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgbnVsbCk7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbi8qKlxuICogV2ViZmxvdzogSVggRXZlbnQgdHJpZ2dlcnMgZm9yIG90aGVyIG1vZHVsZXNcbiAqL1xuXG52YXIgJCA9IHdpbmRvdy5qUXVlcnk7XG52YXIgYXBpID0ge307XG52YXIgbmFtZXNwYWNlID0gJy53LWl4JztcblxudmFyIGV2ZW50VHJpZ2dlcnMgPSB7XG4gIHJlc2V0OiBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICBJWEV2ZW50cy50cmlnZ2Vycy5yZXNldChpLCBlbCk7XG4gIH0sXG4gIGludHJvOiBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICBJWEV2ZW50cy50cmlnZ2Vycy5pbnRybyhpLCBlbCk7XG4gICAgZGlzcGF0Y2hDdXN0b21FdmVudChlbCwgJ0NPTVBPTkVOVF9BQ1RJVkUnKTtcbiAgfSxcbiAgb3V0cm86IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgIElYRXZlbnRzLnRyaWdnZXJzLm91dHJvKGksIGVsKTtcbiAgICBkaXNwYXRjaEN1c3RvbUV2ZW50KGVsLCAnQ09NUE9ORU5UX0lOQUNUSVZFJyk7XG4gIH0sXG59O1xuXG5hcGkudHJpZ2dlcnMgPSB7fTtcblxuYXBpLnR5cGVzID0ge1xuICBJTlRSTzogJ3ctaXgtaW50cm8nICsgbmFtZXNwYWNlLFxuICBPVVRSTzogJ3ctaXgtb3V0cm8nICsgbmFtZXNwYWNlLFxufTtcblxuJC5leHRlbmQoYXBpLnRyaWdnZXJzLCBldmVudFRyaWdnZXJzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcGk7XG4iXSwibmFtZXMiOlsiSVhFdmVudHMiLCJyZXF1aXJlIiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsImVsZW1lbnQiLCJldmVudE5hbWUiLCJldmVudCIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiJCIsIndpbmRvdyIsImpRdWVyeSIsImFwaSIsIm5hbWVzcGFjZSIsImV2ZW50VHJpZ2dlcnMiLCJyZXNldCIsImkiLCJlbCIsInRyaWdnZXJzIiwiaW50cm8iLCJvdXRybyIsInR5cGVzIiwiSU5UUk8iLCJPVVRSTyIsImV4dGVuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QixHQUU1QjtBQUNBLElBQUlBLFdBQVdDLFFBQVE7QUFFdkIsU0FBU0Msb0JBQW9CQyxPQUFPLEVBQUVDLFNBQVM7SUFDN0MsSUFBSUMsUUFBUUMsU0FBU0MsV0FBVyxDQUFDO0lBQ2pDRixNQUFNRyxlQUFlLENBQUNKLFdBQVcsTUFBTSxNQUFNO0lBQzdDRCxRQUFRTSxhQUFhLENBQUNKO0FBQ3hCO0FBRUE7O0NBRUMsR0FFRCxJQUFJSyxJQUFJQyxPQUFPQyxNQUFNO0FBQ3JCLElBQUlDLE1BQU0sQ0FBQztBQUNYLElBQUlDLFlBQVk7QUFFaEIsSUFBSUMsZ0JBQWdCO0lBQ2xCQyxPQUFPLFNBQVVDLENBQUMsRUFBRUMsRUFBRTtRQUNwQmxCLFNBQVNtQixRQUFRLENBQUNILEtBQUssQ0FBQ0MsR0FBR0M7SUFDN0I7SUFDQUUsT0FBTyxTQUFVSCxDQUFDLEVBQUVDLEVBQUU7UUFDcEJsQixTQUFTbUIsUUFBUSxDQUFDQyxLQUFLLENBQUNILEdBQUdDO1FBQzNCaEIsb0JBQW9CZ0IsSUFBSTtJQUMxQjtJQUNBRyxPQUFPLFNBQVVKLENBQUMsRUFBRUMsRUFBRTtRQUNwQmxCLFNBQVNtQixRQUFRLENBQUNFLEtBQUssQ0FBQ0osR0FBR0M7UUFDM0JoQixvQkFBb0JnQixJQUFJO0lBQzFCO0FBQ0Y7QUFFQUwsSUFBSU0sUUFBUSxHQUFHLENBQUM7QUFFaEJOLElBQUlTLEtBQUssR0FBRztJQUNWQyxPQUFPLGVBQWVUO0lBQ3RCVSxPQUFPLGVBQWVWO0FBQ3hCO0FBRUFKLEVBQUVlLE1BQU0sQ0FBQ1osSUFBSU0sUUFBUSxFQUFFSjtBQUV2QlcsT0FBT0MsT0FBTyxHQUFHZCJ9

}),
1655: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: Navbar component
 */ 
var Webflow = __webpack_require__(3949);
var IXEvents = __webpack_require__(5134);
const KEY_CODES = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ESCAPE: 27,
    SPACE: 32,
    ENTER: 13,
    HOME: 36,
    END: 35
};
Webflow.define('navbar', module.exports = function($, _) {
    var api = {};
    var tram = $.tram;
    var $win = $(window);
    var $doc = $(document);
    var debounce = _.debounce;
    var $body;
    var $navbars;
    var designer;
    var inEditor;
    var inApp = Webflow.env();
    var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
    var namespace = '.w-nav';
    var navbarOpenedButton = 'w--open';
    var navbarOpenedDropdown = 'w--nav-dropdown-open';
    var navbarOpenedDropdownToggle = 'w--nav-dropdown-toggle-open';
    var navbarOpenedDropdownList = 'w--nav-dropdown-list-open';
    var navbarOpenedLink = 'w--nav-link-open';
    var ix = IXEvents.triggers;
    var menuSibling = $();
    // -----------------------------------
    // Module methods
    api.ready = api.design = api.preview = init;
    api.destroy = function() {
        menuSibling = $();
        removeListeners();
        if ($navbars && $navbars.length) {
            $navbars.each(teardown);
        }
    };
    // -----------------------------------
    // Private methods
    function init() {
        designer = inApp && Webflow.env('design');
        inEditor = Webflow.env('editor');
        $body = $(document.body);
        // Find all instances on the page
        $navbars = $doc.find(namespace);
        if (!$navbars.length) {
            return;
        }
        $navbars.each(build);
        // Wire events
        removeListeners();
        addListeners();
    }
    function removeListeners() {
        Webflow.resize.off(resizeAll);
    }
    function addListeners() {
        Webflow.resize.on(resizeAll);
    }
    function resizeAll() {
        $navbars.each(resize);
    }
    function build(i, el) {
        var $el = $(el);
        // Store state in data
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                open: false,
                el: $el,
                config: {},
                selectedIdx: -1
            });
        }
        data.menu = $el.find('.w-nav-menu');
        data.links = data.menu.find('.w-nav-link');
        data.dropdowns = data.menu.find('.w-dropdown');
        data.dropdownToggle = data.menu.find('.w-dropdown-toggle');
        data.dropdownList = data.menu.find('.w-dropdown-list');
        data.button = $el.find('.w-nav-button');
        data.container = $el.find('.w-container');
        data.overlayContainerId = 'w-nav-overlay-' + i;
        data.outside = outside(data);
        //   If the brand links exists and is set to link to the homepage, the
        // default setting, then add an aria-label
        var navBrandLink = $el.find('.w-nav-brand');
        if (navBrandLink && navBrandLink.attr('href') === '/' && navBrandLink.attr('aria-label') == null) {
            navBrandLink.attr('aria-label', 'home');
        }
        //   VoiceOver bug, when items that disallow user selection are focused
        // VoiceOver gets confused and scrolls to the end of the page. ¯\_(ツ)_/¯
        data.button.attr('style', '-webkit-user-select: text;');
        // Add attributes to toggle element
        if (data.button.attr('aria-label') == null) {
            data.button.attr('aria-label', 'menu');
        }
        data.button.attr('role', 'button');
        data.button.attr('tabindex', '0');
        data.button.attr('aria-controls', data.overlayContainerId);
        data.button.attr('aria-haspopup', 'menu');
        data.button.attr('aria-expanded', 'false');
        // Remove old events
        data.el.off(namespace);
        data.button.off(namespace);
        data.menu.off(namespace);
        // Set config from data attributes
        configure(data);
        // Add events based on mode
        if (designer) {
            removeOverlay(data);
            data.el.on('setting' + namespace, handler(data));
        } else {
            addOverlay(data);
            data.button.on('click' + namespace, toggle(data));
            data.menu.on('click' + namespace, 'a', navigate(data));
            data.button.on('keydown' + namespace, makeToggleButtonKeyboardHandler(data));
            data.el.on('keydown' + namespace, makeLinksKeyboardHandler(data));
        }
        // Trigger initial resize
        resize(i, el);
    }
    function teardown(i, el) {
        var data = $.data(el, namespace);
        if (data) {
            removeOverlay(data);
            $.removeData(el, namespace);
        }
    }
    function removeOverlay(data) {
        if (!data.overlay) {
            return;
        }
        close(data, true);
        data.overlay.remove();
        data.overlay = null;
    }
    function addOverlay(data) {
        if (data.overlay) {
            return;
        }
        data.overlay = $(overlay).appendTo(data.el);
        data.overlay.attr('id', data.overlayContainerId);
        data.parent = data.menu.parent();
        close(data, true);
    }
    function configure(data) {
        var config = {};
        var old = data.config || {};
        // Set config options from data attributes
        var animation = config.animation = data.el.attr('data-animation') || 'default';
        config.animOver = /^over/.test(animation);
        config.animDirect = /left$/.test(animation) ? -1 : 1;
        // Re-open menu if the animation type changed
        if (old.animation !== animation) {
            data.open && _.defer(reopen, data);
        }
        config.easing = data.el.attr('data-easing') || 'ease';
        config.easing2 = data.el.attr('data-easing2') || 'ease';
        var duration = data.el.attr('data-duration');
        config.duration = duration != null ? Number(duration) : 400;
        config.docHeight = data.el.attr('data-doc-height');
        // Store config in data
        data.config = config;
    }
    function handler(data) {
        return function(evt, options) {
            options = options || {};
            var winWidth = $win.width();
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, true);
            // Reopen if media query changed after setting
            data.open && _.defer(function() {
                if (winWidth !== $win.width()) {
                    reopen(data);
                }
            });
        };
    }
    function makeToggleButtonKeyboardHandler(data) {
        return function(evt) {
            switch(evt.keyCode){
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER:
                    {
                        // Toggle returns a function
                        toggle(data)();
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ESCAPE:
                    {
                        close(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                case KEY_CODES.HOME:
                case KEY_CODES.END:
                    {
                        if (!data.open) {
                            evt.preventDefault();
                            return evt.stopPropagation();
                        }
                        if (evt.keyCode === KEY_CODES.END) {
                            data.selectedIdx = data.links.length - 1;
                        } else {
                            data.selectedIdx = 0;
                        }
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
            }
        };
    }
    function makeLinksKeyboardHandler(data) {
        return function(evt) {
            if (!data.open) {
                return;
            }
            // Realign selectedIdx with the menu item that is currently in focus.
            // We need this because we do not track the `Tab` key activity!
            data.selectedIdx = data.links.index(document.activeElement);
            switch(evt.keyCode){
                case KEY_CODES.HOME:
                case KEY_CODES.END:
                    {
                        if (evt.keyCode === KEY_CODES.END) {
                            data.selectedIdx = data.links.length - 1;
                        } else {
                            data.selectedIdx = 0;
                        }
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ESCAPE:
                    {
                        close(data);
                        // Focus toggle button
                        data.button.focus();
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_LEFT:
                case KEY_CODES.ARROW_UP:
                    {
                        data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                    {
                        data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
            }
        };
    }
    function focusSelectedLink(data) {
        if (data.links[data.selectedIdx]) {
            var selectedElement = data.links[data.selectedIdx];
            selectedElement.focus();
            navigate(selectedElement);
        }
    }
    function reopen(data) {
        if (!data.open) {
            return;
        }
        close(data, true);
        open(data, true);
    }
    function toggle(data) {
        // Debounce toggle to wait for accurate open state
        return debounce(function() {
            data.open ? close(data) : open(data);
        });
    }
    function navigate(data) {
        return function(evt) {
            var link = $(this);
            var href = link.attr('href');
            // Avoid late clicks on touch devices
            if (!Webflow.validClick(evt.currentTarget)) {
                evt.preventDefault();
                return;
            }
            // Close when navigating to an in-page anchor
            if (href && href.indexOf('#') === 0 && data.open) {
                close(data);
            }
        };
    }
    function outside(data) {
        // Unbind previous click handler if it exists
        if (data.outside) {
            $doc.off('click' + namespace, data.outside);
        }
        return function(evt) {
            var $target = $(evt.target);
            // Ignore clicks on Editor overlay UI
            if (inEditor && $target.closest('.w-editor-bem-EditorOverlay').length) {
                return;
            }
            // Close menu when clicked outside, debounced to wait for state
            outsideDebounced(data, $target);
        };
    }
    var outsideDebounced = debounce(function(data, $target) {
        if (!data.open) {
            return;
        }
        var menu = $target.closest('.w-nav-menu');
        if (!data.menu.is(menu)) {
            close(data);
        }
    });
    function resize(i, el) {
        var data = $.data(el, namespace);
        // Check for collapsed state based on button display
        var collapsed = data.collapsed = data.button.css('display') !== 'none';
        // Close menu if button is no longer visible (and not in designer)
        if (data.open && !collapsed && !designer) {
            close(data, true);
        }
        // Set max-width of links + dropdowns to match container
        if (data.container.length) {
            var updateEachMax = updateMax(data);
            data.links.each(updateEachMax);
            data.dropdowns.each(updateEachMax);
        }
        // If currently open, update height to match body
        if (data.open) {
            setOverlayHeight(data);
        }
    }
    var maxWidth = 'max-width';
    function updateMax(data) {
        // Set max-width of each element to match container
        var containMax = data.container.css(maxWidth);
        if (containMax === 'none') {
            containMax = '';
        }
        return function(i, link) {
            link = $(link);
            link.css(maxWidth, '');
            // Don't set the max-width if an upstream value exists
            if (link.css(maxWidth) === 'none') {
                link.css(maxWidth, containMax);
            }
        };
    }
    function addMenuOpen(i, el) {
        el.setAttribute('data-nav-menu-open', '');
    }
    function removeMenuOpen(i, el) {
        el.removeAttribute('data-nav-menu-open');
    }
    function open(data, immediate) {
        if (data.open) {
            return;
        }
        data.open = true;
        data.menu.each(addMenuOpen);
        data.links.addClass(navbarOpenedLink);
        data.dropdowns.addClass(navbarOpenedDropdown);
        data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
        data.dropdownList.addClass(navbarOpenedDropdownList);
        data.button.addClass(navbarOpenedButton);
        var config = data.config;
        var animation = config.animation;
        if (animation === 'none' || !tram.support.transform || config.duration <= 0) {
            immediate = true;
        }
        var bodyHeight = setOverlayHeight(data);
        var menuHeight = data.menu.outerHeight(true);
        var menuWidth = data.menu.outerWidth(true);
        var navHeight = data.el.height();
        var navbarEl = data.el[0];
        resize(0, navbarEl);
        ix.intro(0, navbarEl);
        Webflow.redraw.up();
        // Listen for click outside events
        if (!designer) {
            $doc.on('click' + namespace, data.outside);
        }
        // No transition for immediate
        if (immediate) {
            complete();
            return;
        }
        var transConfig = 'transform ' + config.duration + 'ms ' + config.easing;
        // Add menu to overlay
        if (data.overlay) {
            menuSibling = data.menu.prev();
            data.overlay.show().append(data.menu);
        }
        // Over left/right
        if (config.animOver) {
            tram(data.menu).add(transConfig).set({
                x: config.animDirect * menuWidth,
                height: bodyHeight
            }).start({
                x: 0
            }).then(complete);
            data.overlay && data.overlay.width(menuWidth);
            return;
        }
        // Drop Down
        var offsetY = navHeight + menuHeight;
        tram(data.menu).add(transConfig).set({
            y: -offsetY
        }).start({
            y: 0
        }).then(complete);
        function complete() {
            data.button.attr('aria-expanded', 'true');
        }
    }
    function setOverlayHeight(data) {
        var config = data.config;
        var bodyHeight = config.docHeight ? $doc.height() : $body.height();
        if (config.animOver) {
            data.menu.height(bodyHeight);
        } else if (data.el.css('position') !== 'fixed') {
            bodyHeight -= data.el.outerHeight(true);
        }
        data.overlay && data.overlay.height(bodyHeight);
        return bodyHeight;
    }
    function close(data, immediate) {
        if (!data.open) {
            return;
        }
        data.open = false;
        data.button.removeClass(navbarOpenedButton);
        var config = data.config;
        if (config.animation === 'none' || !tram.support.transform || config.duration <= 0) {
            immediate = true;
        }
        ix.outro(0, data.el[0]);
        // Stop listening for click outside events
        $doc.off('click' + namespace, data.outside);
        if (immediate) {
            tram(data.menu).stop();
            complete();
            return;
        }
        var transConfig = 'transform ' + config.duration + 'ms ' + config.easing2;
        var menuHeight = data.menu.outerHeight(true);
        var menuWidth = data.menu.outerWidth(true);
        var navHeight = data.el.height();
        // Over left/right
        if (config.animOver) {
            tram(data.menu).add(transConfig).start({
                x: menuWidth * config.animDirect
            }).then(complete);
            return;
        }
        // Drop Down
        var offsetY = navHeight + menuHeight;
        tram(data.menu).add(transConfig).start({
            y: -offsetY
        }).then(complete);
        function complete() {
            data.menu.height('');
            tram(data.menu).set({
                x: 0,
                y: 0
            });
            data.menu.each(removeMenuOpen);
            data.links.removeClass(navbarOpenedLink);
            data.dropdowns.removeClass(navbarOpenedDropdown);
            data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
            data.dropdownList.removeClass(navbarOpenedDropdownList);
            if (data.overlay && data.overlay.children().length) {
                // Move menu back to parent at the original location
                menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
                data.overlay.attr('style', '').hide();
            }
            // Trigger event so other components can hook in (dropdown)
            data.el.triggerHandler('w-close');
            data.button.attr('aria-expanded', 'false');
        }
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctbmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IE5hdmJhciBjb21wb25lbnRcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4uL0Jhc2VTaXRlTW9kdWxlcy93ZWJmbG93LWxpYicpO1xudmFyIElYRXZlbnRzID0gcmVxdWlyZSgnLi4vQmFzZVNpdGVNb2R1bGVzL3dlYmZsb3ctaXgyLWV2ZW50cycpO1xuXG5jb25zdCBLRVlfQ09ERVMgPSB7XG4gIEFSUk9XX0xFRlQ6IDM3LFxuICBBUlJPV19VUDogMzgsXG4gIEFSUk9XX1JJR0hUOiAzOSxcbiAgQVJST1dfRE9XTjogNDAsXG4gIEVTQ0FQRTogMjcsXG4gIFNQQUNFOiAzMixcbiAgRU5URVI6IDEzLFxuICBIT01FOiAzNixcbiAgRU5EOiAzNSxcbn07XG5cbldlYmZsb3cuZGVmaW5lKFxuICAnbmF2YmFyJyxcbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCQsIF8pIHtcbiAgICB2YXIgYXBpID0ge307XG4gICAgdmFyIHRyYW0gPSAkLnRyYW07XG4gICAgdmFyICR3aW4gPSAkKHdpbmRvdyk7XG4gICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICB2YXIgZGVib3VuY2UgPSBfLmRlYm91bmNlO1xuICAgIHZhciAkYm9keTtcbiAgICB2YXIgJG5hdmJhcnM7XG4gICAgdmFyIGRlc2lnbmVyO1xuICAgIHZhciBpbkVkaXRvcjtcbiAgICB2YXIgaW5BcHAgPSBXZWJmbG93LmVudigpO1xuICAgIHZhciBvdmVybGF5ID0gJzxkaXYgY2xhc3M9XCJ3LW5hdi1vdmVybGF5XCIgZGF0YS13Zi1pZ25vcmUgLz4nO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctbmF2JztcbiAgICB2YXIgbmF2YmFyT3BlbmVkQnV0dG9uID0gJ3ctLW9wZW4nO1xuICAgIHZhciBuYXZiYXJPcGVuZWREcm9wZG93biA9ICd3LS1uYXYtZHJvcGRvd24tb3Blbic7XG4gICAgdmFyIG5hdmJhck9wZW5lZERyb3Bkb3duVG9nZ2xlID0gJ3ctLW5hdi1kcm9wZG93bi10b2dnbGUtb3Blbic7XG4gICAgdmFyIG5hdmJhck9wZW5lZERyb3Bkb3duTGlzdCA9ICd3LS1uYXYtZHJvcGRvd24tbGlzdC1vcGVuJztcbiAgICB2YXIgbmF2YmFyT3BlbmVkTGluayA9ICd3LS1uYXYtbGluay1vcGVuJztcbiAgICB2YXIgaXggPSBJWEV2ZW50cy50cmlnZ2VycztcbiAgICB2YXIgbWVudVNpYmxpbmcgPSAkKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1vZHVsZSBtZXRob2RzXG5cbiAgICBhcGkucmVhZHkgPSBhcGkuZGVzaWduID0gYXBpLnByZXZpZXcgPSBpbml0O1xuXG4gICAgYXBpLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBtZW51U2libGluZyA9ICQoKTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgaWYgKCRuYXZiYXJzICYmICRuYXZiYXJzLmxlbmd0aCkge1xuICAgICAgICAkbmF2YmFycy5lYWNoKHRlYXJkb3duKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBkZXNpZ25lciA9IGluQXBwICYmIFdlYmZsb3cuZW52KCdkZXNpZ24nKTtcbiAgICAgIGluRWRpdG9yID0gV2ViZmxvdy5lbnYoJ2VkaXRvcicpO1xuICAgICAgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAvLyBGaW5kIGFsbCBpbnN0YW5jZXMgb24gdGhlIHBhZ2VcbiAgICAgICRuYXZiYXJzID0gJGRvYy5maW5kKG5hbWVzcGFjZSk7XG4gICAgICBpZiAoISRuYXZiYXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkbmF2YmFycy5lYWNoKGJ1aWxkKTtcblxuICAgICAgLy8gV2lyZSBldmVudHNcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgV2ViZmxvdy5yZXNpemUub2ZmKHJlc2l6ZUFsbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgV2ViZmxvdy5yZXNpemUub24ocmVzaXplQWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVBbGwoKSB7XG4gICAgICAkbmF2YmFycy5lYWNoKHJlc2l6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGQoaSwgZWwpIHtcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcblxuICAgICAgLy8gU3RvcmUgc3RhdGUgaW4gZGF0YVxuICAgICAgdmFyIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlLCB7XG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgZWw6ICRlbCxcbiAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICAgIHNlbGVjdGVkSWR4OiAtMSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkYXRhLm1lbnUgPSAkZWwuZmluZCgnLnctbmF2LW1lbnUnKTtcbiAgICAgIGRhdGEubGlua3MgPSBkYXRhLm1lbnUuZmluZCgnLnctbmF2LWxpbmsnKTtcbiAgICAgIGRhdGEuZHJvcGRvd25zID0gZGF0YS5tZW51LmZpbmQoJy53LWRyb3Bkb3duJyk7XG4gICAgICBkYXRhLmRyb3Bkb3duVG9nZ2xlID0gZGF0YS5tZW51LmZpbmQoJy53LWRyb3Bkb3duLXRvZ2dsZScpO1xuICAgICAgZGF0YS5kcm9wZG93bkxpc3QgPSBkYXRhLm1lbnUuZmluZCgnLnctZHJvcGRvd24tbGlzdCcpO1xuICAgICAgZGF0YS5idXR0b24gPSAkZWwuZmluZCgnLnctbmF2LWJ1dHRvbicpO1xuICAgICAgZGF0YS5jb250YWluZXIgPSAkZWwuZmluZCgnLnctY29udGFpbmVyJyk7XG4gICAgICBkYXRhLm92ZXJsYXlDb250YWluZXJJZCA9ICd3LW5hdi1vdmVybGF5LScgKyBpO1xuICAgICAgZGF0YS5vdXRzaWRlID0gb3V0c2lkZShkYXRhKTtcblxuICAgICAgLy8gICBJZiB0aGUgYnJhbmQgbGlua3MgZXhpc3RzIGFuZCBpcyBzZXQgdG8gbGluayB0byB0aGUgaG9tZXBhZ2UsIHRoZVxuICAgICAgLy8gZGVmYXVsdCBzZXR0aW5nLCB0aGVuIGFkZCBhbiBhcmlhLWxhYmVsXG4gICAgICB2YXIgbmF2QnJhbmRMaW5rID0gJGVsLmZpbmQoJy53LW5hdi1icmFuZCcpO1xuICAgICAgaWYgKFxuICAgICAgICBuYXZCcmFuZExpbmsgJiZcbiAgICAgICAgbmF2QnJhbmRMaW5rLmF0dHIoJ2hyZWYnKSA9PT0gJy8nICYmXG4gICAgICAgIG5hdkJyYW5kTGluay5hdHRyKCdhcmlhLWxhYmVsJykgPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIG5hdkJyYW5kTGluay5hdHRyKCdhcmlhLWxhYmVsJywgJ2hvbWUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gICBWb2ljZU92ZXIgYnVnLCB3aGVuIGl0ZW1zIHRoYXQgZGlzYWxsb3cgdXNlciBzZWxlY3Rpb24gYXJlIGZvY3VzZWRcbiAgICAgIC8vIFZvaWNlT3ZlciBnZXRzIGNvbmZ1c2VkIGFuZCBzY3JvbGxzIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2UuIMKvXFxfKOODhClfL8KvXG4gICAgICBkYXRhLmJ1dHRvbi5hdHRyKCdzdHlsZScsICctd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0OycpO1xuXG4gICAgICAvLyBBZGQgYXR0cmlidXRlcyB0byB0b2dnbGUgZWxlbWVudFxuICAgICAgaWYgKGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtbGFiZWwnKSA9PSBudWxsKSB7XG4gICAgICAgIGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtbGFiZWwnLCAnbWVudScpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmJ1dHRvbi5hdHRyKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cignYXJpYS1jb250cm9scycsIGRhdGEub3ZlcmxheUNvbnRhaW5lcklkKTtcbiAgICAgIGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCAnbWVudScpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gICAgICAvLyBSZW1vdmUgb2xkIGV2ZW50c1xuICAgICAgZGF0YS5lbC5vZmYobmFtZXNwYWNlKTtcbiAgICAgIGRhdGEuYnV0dG9uLm9mZihuYW1lc3BhY2UpO1xuICAgICAgZGF0YS5tZW51Lm9mZihuYW1lc3BhY2UpO1xuXG4gICAgICAvLyBTZXQgY29uZmlnIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gICAgICBjb25maWd1cmUoZGF0YSk7XG5cbiAgICAgIC8vIEFkZCBldmVudHMgYmFzZWQgb24gbW9kZVxuICAgICAgaWYgKGRlc2lnbmVyKSB7XG4gICAgICAgIHJlbW92ZU92ZXJsYXkoZGF0YSk7XG4gICAgICAgIGRhdGEuZWwub24oJ3NldHRpbmcnICsgbmFtZXNwYWNlLCBoYW5kbGVyKGRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE92ZXJsYXkoZGF0YSk7XG5cbiAgICAgICAgZGF0YS5idXR0b24ub24oJ2NsaWNrJyArIG5hbWVzcGFjZSwgdG9nZ2xlKGRhdGEpKTtcbiAgICAgICAgZGF0YS5tZW51Lm9uKCdjbGljaycgKyBuYW1lc3BhY2UsICdhJywgbmF2aWdhdGUoZGF0YSkpO1xuXG4gICAgICAgIGRhdGEuYnV0dG9uLm9uKFxuICAgICAgICAgICdrZXlkb3duJyArIG5hbWVzcGFjZSxcbiAgICAgICAgICBtYWtlVG9nZ2xlQnV0dG9uS2V5Ym9hcmRIYW5kbGVyKGRhdGEpXG4gICAgICAgICk7XG4gICAgICAgIGRhdGEuZWwub24oJ2tleWRvd24nICsgbmFtZXNwYWNlLCBtYWtlTGlua3NLZXlib2FyZEhhbmRsZXIoZGF0YSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmlnZ2VyIGluaXRpYWwgcmVzaXplXG4gICAgICByZXNpemUoaSwgZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlYXJkb3duKGksIGVsKSB7XG4gICAgICB2YXIgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlbW92ZU92ZXJsYXkoZGF0YSk7XG4gICAgICAgICQucmVtb3ZlRGF0YShlbCwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVPdmVybGF5KGRhdGEpIHtcbiAgICAgIGlmICghZGF0YS5vdmVybGF5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNsb3NlKGRhdGEsIHRydWUpO1xuICAgICAgZGF0YS5vdmVybGF5LnJlbW92ZSgpO1xuICAgICAgZGF0YS5vdmVybGF5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRPdmVybGF5KGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLm92ZXJsYXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGF0YS5vdmVybGF5ID0gJChvdmVybGF5KS5hcHBlbmRUbyhkYXRhLmVsKTtcbiAgICAgIGRhdGEub3ZlcmxheS5hdHRyKCdpZCcsIGRhdGEub3ZlcmxheUNvbnRhaW5lcklkKTtcbiAgICAgIGRhdGEucGFyZW50ID0gZGF0YS5tZW51LnBhcmVudCgpO1xuICAgICAgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlKGRhdGEpIHtcbiAgICAgIHZhciBjb25maWcgPSB7fTtcbiAgICAgIHZhciBvbGQgPSBkYXRhLmNvbmZpZyB8fCB7fTtcblxuICAgICAgLy8gU2V0IGNvbmZpZyBvcHRpb25zIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gICAgICB2YXIgYW5pbWF0aW9uID0gKGNvbmZpZy5hbmltYXRpb24gPVxuICAgICAgICBkYXRhLmVsLmF0dHIoJ2RhdGEtYW5pbWF0aW9uJykgfHwgJ2RlZmF1bHQnKTtcbiAgICAgIGNvbmZpZy5hbmltT3ZlciA9IC9eb3Zlci8udGVzdChhbmltYXRpb24pO1xuICAgICAgY29uZmlnLmFuaW1EaXJlY3QgPSAvbGVmdCQvLnRlc3QoYW5pbWF0aW9uKSA/IC0xIDogMTtcblxuICAgICAgLy8gUmUtb3BlbiBtZW51IGlmIHRoZSBhbmltYXRpb24gdHlwZSBjaGFuZ2VkXG4gICAgICBpZiAob2xkLmFuaW1hdGlvbiAhPT0gYW5pbWF0aW9uKSB7XG4gICAgICAgIGRhdGEub3BlbiAmJiBfLmRlZmVyKHJlb3BlbiwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy5lYXNpbmcgPSBkYXRhLmVsLmF0dHIoJ2RhdGEtZWFzaW5nJykgfHwgJ2Vhc2UnO1xuICAgICAgY29uZmlnLmVhc2luZzIgPSBkYXRhLmVsLmF0dHIoJ2RhdGEtZWFzaW5nMicpIHx8ICdlYXNlJztcblxuICAgICAgdmFyIGR1cmF0aW9uID0gZGF0YS5lbC5hdHRyKCdkYXRhLWR1cmF0aW9uJyk7XG4gICAgICBjb25maWcuZHVyYXRpb24gPSBkdXJhdGlvbiAhPSBudWxsID8gTnVtYmVyKGR1cmF0aW9uKSA6IDQwMDtcblxuICAgICAgY29uZmlnLmRvY0hlaWdodCA9IGRhdGEuZWwuYXR0cignZGF0YS1kb2MtaGVpZ2h0Jyk7XG5cbiAgICAgIC8vIFN0b3JlIGNvbmZpZyBpbiBkYXRhXG4gICAgICBkYXRhLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgd2luV2lkdGggPSAkd2luLndpZHRoKCk7XG4gICAgICAgIGNvbmZpZ3VyZShkYXRhKTtcbiAgICAgICAgb3B0aW9ucy5vcGVuID09PSB0cnVlICYmIG9wZW4oZGF0YSwgdHJ1ZSk7XG4gICAgICAgIG9wdGlvbnMub3BlbiA9PT0gZmFsc2UgJiYgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgICAgIC8vIFJlb3BlbiBpZiBtZWRpYSBxdWVyeSBjaGFuZ2VkIGFmdGVyIHNldHRpbmdcbiAgICAgICAgZGF0YS5vcGVuICYmXG4gICAgICAgICAgXy5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAod2luV2lkdGggIT09ICR3aW4ud2lkdGgoKSkge1xuICAgICAgICAgICAgICByZW9wZW4oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUb2dnbGVCdXR0b25LZXlib2FyZEhhbmRsZXIoZGF0YSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLlNQQUNFOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVOVEVSOiB7XG4gICAgICAgICAgICAvLyBUb2dnbGUgcmV0dXJucyBhIGZ1bmN0aW9uXG4gICAgICAgICAgICB0b2dnbGUoZGF0YSkoKTtcblxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVTQ0FQRToge1xuICAgICAgICAgICAgY2xvc2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19SSUdIVDpcbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19ET1dOOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkhPTUU6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5EOiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERVMuRU5EKSB7XG4gICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBkYXRhLmxpbmtzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvY3VzU2VsZWN0ZWRMaW5rKGRhdGEpO1xuXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VMaW5rc0tleWJvYXJkSGFuZGxlcihkYXRhKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWxpZ24gc2VsZWN0ZWRJZHggd2l0aCB0aGUgbWVudSBpdGVtIHRoYXQgaXMgY3VycmVudGx5IGluIGZvY3VzLlxuICAgICAgICAvLyBXZSBuZWVkIHRoaXMgYmVjYXVzZSB3ZSBkbyBub3QgdHJhY2sgdGhlIGBUYWJgIGtleSBhY3Rpdml0eSFcbiAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IGRhdGEubGlua3MuaW5kZXgoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkhPTUU6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5EOiB7XG4gICAgICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFUy5FTkQpIHtcbiAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IGRhdGEubGlua3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5FU0NBUEU6IHtcbiAgICAgICAgICAgIGNsb3NlKGRhdGEpO1xuXG4gICAgICAgICAgICAvLyBGb2N1cyB0b2dnbGUgYnV0dG9uXG4gICAgICAgICAgICBkYXRhLmJ1dHRvbi5mb2N1cygpO1xuXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfTEVGVDpcbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19VUDoge1xuICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IE1hdGgubWF4KC0xLCBkYXRhLnNlbGVjdGVkSWR4IC0gMSk7XG4gICAgICAgICAgICBmb2N1c1NlbGVjdGVkTGluayhkYXRhKTtcblxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX1JJR0hUOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX0RPV046IHtcbiAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgZGF0YS5saW5rcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ICsgMVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9jdXNTZWxlY3RlZExpbmsoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubGlua3NbZGF0YS5zZWxlY3RlZElkeF0pIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkRWxlbWVudCA9IGRhdGEubGlua3NbZGF0YS5zZWxlY3RlZElkeF07XG5cbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIG5hdmlnYXRlKHNlbGVjdGVkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVvcGVuKGRhdGEpIHtcbiAgICAgIGlmICghZGF0YS5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNsb3NlKGRhdGEsIHRydWUpO1xuICAgICAgb3BlbihkYXRhLCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoZGF0YSkge1xuICAgICAgLy8gRGVib3VuY2UgdG9nZ2xlIHRvIHdhaXQgZm9yIGFjY3VyYXRlIG9wZW4gc3RhdGVcbiAgICAgIHJldHVybiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRhdGEub3BlbiA/IGNsb3NlKGRhdGEpIDogb3BlbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdmlnYXRlKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGhyZWYgPSBsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAvLyBBdm9pZCBsYXRlIGNsaWNrcyBvbiB0b3VjaCBkZXZpY2VzXG4gICAgICAgIGlmICghV2ViZmxvdy52YWxpZENsaWNrKGV2dC5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIHdoZW4gbmF2aWdhdGluZyB0byBhbiBpbi1wYWdlIGFuY2hvclxuICAgICAgICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2YoJyMnKSA9PT0gMCAmJiBkYXRhLm9wZW4pIHtcbiAgICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdXRzaWRlKGRhdGEpIHtcbiAgICAgIC8vIFVuYmluZCBwcmV2aW91cyBjbGljayBoYW5kbGVyIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKGRhdGEub3V0c2lkZSkge1xuICAgICAgICAkZG9jLm9mZignY2xpY2snICsgbmFtZXNwYWNlLCBkYXRhLm91dHNpZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZ0LnRhcmdldCk7XG4gICAgICAgIC8vIElnbm9yZSBjbGlja3Mgb24gRWRpdG9yIG92ZXJsYXkgVUlcbiAgICAgICAgaWYgKGluRWRpdG9yICYmICR0YXJnZXQuY2xvc2VzdCgnLnctZWRpdG9yLWJlbS1FZGl0b3JPdmVybGF5JykubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsb3NlIG1lbnUgd2hlbiBjbGlja2VkIG91dHNpZGUsIGRlYm91bmNlZCB0byB3YWl0IGZvciBzdGF0ZVxuICAgICAgICBvdXRzaWRlRGVib3VuY2VkKGRhdGEsICR0YXJnZXQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG91dHNpZGVEZWJvdW5jZWQgPSBkZWJvdW5jZShmdW5jdGlvbiAoZGF0YSwgJHRhcmdldCkge1xuICAgICAgaWYgKCFkYXRhLm9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG1lbnUgPSAkdGFyZ2V0LmNsb3Nlc3QoJy53LW5hdi1tZW51Jyk7XG4gICAgICBpZiAoIWRhdGEubWVudS5pcyhtZW51KSkge1xuICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlc2l6ZShpLCBlbCkge1xuICAgICAgdmFyIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSk7XG4gICAgICAvLyBDaGVjayBmb3IgY29sbGFwc2VkIHN0YXRlIGJhc2VkIG9uIGJ1dHRvbiBkaXNwbGF5XG4gICAgICB2YXIgY29sbGFwc2VkID0gKGRhdGEuY29sbGFwc2VkID0gZGF0YS5idXR0b24uY3NzKCdkaXNwbGF5JykgIT09ICdub25lJyk7XG4gICAgICAvLyBDbG9zZSBtZW51IGlmIGJ1dHRvbiBpcyBubyBsb25nZXIgdmlzaWJsZSAoYW5kIG5vdCBpbiBkZXNpZ25lcilcbiAgICAgIGlmIChkYXRhLm9wZW4gJiYgIWNvbGxhcHNlZCAmJiAhZGVzaWduZXIpIHtcbiAgICAgICAgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBTZXQgbWF4LXdpZHRoIG9mIGxpbmtzICsgZHJvcGRvd25zIHRvIG1hdGNoIGNvbnRhaW5lclxuICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICB2YXIgdXBkYXRlRWFjaE1heCA9IHVwZGF0ZU1heChkYXRhKTtcbiAgICAgICAgZGF0YS5saW5rcy5lYWNoKHVwZGF0ZUVhY2hNYXgpO1xuICAgICAgICBkYXRhLmRyb3Bkb3ducy5lYWNoKHVwZGF0ZUVhY2hNYXgpO1xuICAgICAgfVxuICAgICAgLy8gSWYgY3VycmVudGx5IG9wZW4sIHVwZGF0ZSBoZWlnaHQgdG8gbWF0Y2ggYm9keVxuICAgICAgaWYgKGRhdGEub3Blbikge1xuICAgICAgICBzZXRPdmVybGF5SGVpZ2h0KGRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtYXhXaWR0aCA9ICdtYXgtd2lkdGgnO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1heChkYXRhKSB7XG4gICAgICAvLyBTZXQgbWF4LXdpZHRoIG9mIGVhY2ggZWxlbWVudCB0byBtYXRjaCBjb250YWluZXJcbiAgICAgIHZhciBjb250YWluTWF4ID0gZGF0YS5jb250YWluZXIuY3NzKG1heFdpZHRoKTtcbiAgICAgIGlmIChjb250YWluTWF4ID09PSAnbm9uZScpIHtcbiAgICAgICAgY29udGFpbk1heCA9ICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpLCBsaW5rKSB7XG4gICAgICAgIGxpbmsgPSAkKGxpbmspO1xuICAgICAgICBsaW5rLmNzcyhtYXhXaWR0aCwgJycpO1xuICAgICAgICAvLyBEb24ndCBzZXQgdGhlIG1heC13aWR0aCBpZiBhbiB1cHN0cmVhbSB2YWx1ZSBleGlzdHNcbiAgICAgICAgaWYgKGxpbmsuY3NzKG1heFdpZHRoKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgbGluay5jc3MobWF4V2lkdGgsIGNvbnRhaW5NYXgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1lbnVPcGVuKGksIGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2LW1lbnUtb3BlbicsICcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNZW51T3BlbihpLCBlbCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW5hdi1tZW51LW9wZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuKGRhdGEsIGltbWVkaWF0ZSkge1xuICAgICAgaWYgKGRhdGEub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkYXRhLm9wZW4gPSB0cnVlO1xuICAgICAgZGF0YS5tZW51LmVhY2goYWRkTWVudU9wZW4pO1xuICAgICAgZGF0YS5saW5rcy5hZGRDbGFzcyhuYXZiYXJPcGVuZWRMaW5rKTtcbiAgICAgIGRhdGEuZHJvcGRvd25zLmFkZENsYXNzKG5hdmJhck9wZW5lZERyb3Bkb3duKTtcbiAgICAgIGRhdGEuZHJvcGRvd25Ub2dnbGUuYWRkQ2xhc3MobmF2YmFyT3BlbmVkRHJvcGRvd25Ub2dnbGUpO1xuICAgICAgZGF0YS5kcm9wZG93bkxpc3QuYWRkQ2xhc3MobmF2YmFyT3BlbmVkRHJvcGRvd25MaXN0KTtcbiAgICAgIGRhdGEuYnV0dG9uLmFkZENsYXNzKG5hdmJhck9wZW5lZEJ1dHRvbik7XG4gICAgICB2YXIgY29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gY29uZmlnLmFuaW1hdGlvbjtcbiAgICAgIGlmIChcbiAgICAgICAgYW5pbWF0aW9uID09PSAnbm9uZScgfHxcbiAgICAgICAgIXRyYW0uc3VwcG9ydC50cmFuc2Zvcm0gfHxcbiAgICAgICAgY29uZmlnLmR1cmF0aW9uIDw9IDBcbiAgICAgICkge1xuICAgICAgICBpbW1lZGlhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIGJvZHlIZWlnaHQgPSBzZXRPdmVybGF5SGVpZ2h0KGRhdGEpO1xuICAgICAgdmFyIG1lbnVIZWlnaHQgPSBkYXRhLm1lbnUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICB2YXIgbWVudVdpZHRoID0gZGF0YS5tZW51Lm91dGVyV2lkdGgodHJ1ZSk7XG4gICAgICB2YXIgbmF2SGVpZ2h0ID0gZGF0YS5lbC5oZWlnaHQoKTtcbiAgICAgIHZhciBuYXZiYXJFbCA9IGRhdGEuZWxbMF07XG4gICAgICByZXNpemUoMCwgbmF2YmFyRWwpO1xuICAgICAgaXguaW50cm8oMCwgbmF2YmFyRWwpO1xuICAgICAgV2ViZmxvdy5yZWRyYXcudXAoKTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBjbGljayBvdXRzaWRlIGV2ZW50c1xuICAgICAgaWYgKCFkZXNpZ25lcikge1xuICAgICAgICAkZG9jLm9uKCdjbGljaycgKyBuYW1lc3BhY2UsIGRhdGEub3V0c2lkZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vIHRyYW5zaXRpb24gZm9yIGltbWVkaWF0ZVxuICAgICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc0NvbmZpZyA9ICd0cmFuc2Zvcm0gJyArIGNvbmZpZy5kdXJhdGlvbiArICdtcyAnICsgY29uZmlnLmVhc2luZztcblxuICAgICAgLy8gQWRkIG1lbnUgdG8gb3ZlcmxheVxuICAgICAgaWYgKGRhdGEub3ZlcmxheSkge1xuICAgICAgICBtZW51U2libGluZyA9IGRhdGEubWVudS5wcmV2KCk7XG4gICAgICAgIGRhdGEub3ZlcmxheS5zaG93KCkuYXBwZW5kKGRhdGEubWVudSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXIgbGVmdC9yaWdodFxuICAgICAgaWYgKGNvbmZpZy5hbmltT3Zlcikge1xuICAgICAgICB0cmFtKGRhdGEubWVudSlcbiAgICAgICAgICAuYWRkKHRyYW5zQ29uZmlnKVxuICAgICAgICAgIC5zZXQoe3g6IGNvbmZpZy5hbmltRGlyZWN0ICogbWVudVdpZHRoLCBoZWlnaHQ6IGJvZHlIZWlnaHR9KVxuICAgICAgICAgIC5zdGFydCh7eDogMH0pXG4gICAgICAgICAgLnRoZW4oY29tcGxldGUpO1xuICAgICAgICBkYXRhLm92ZXJsYXkgJiYgZGF0YS5vdmVybGF5LndpZHRoKG1lbnVXaWR0aCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRHJvcCBEb3duXG4gICAgICB2YXIgb2Zmc2V0WSA9IG5hdkhlaWdodCArIG1lbnVIZWlnaHQ7XG4gICAgICB0cmFtKGRhdGEubWVudSlcbiAgICAgICAgLmFkZCh0cmFuc0NvbmZpZylcbiAgICAgICAgLnNldCh7eTogLW9mZnNldFl9KVxuICAgICAgICAuc3RhcnQoe3k6IDB9KVxuICAgICAgICAudGhlbihjb21wbGV0ZSk7XG5cbiAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBkYXRhLmJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPdmVybGF5SGVpZ2h0KGRhdGEpIHtcbiAgICAgIHZhciBjb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgIHZhciBib2R5SGVpZ2h0ID0gY29uZmlnLmRvY0hlaWdodCA/ICRkb2MuaGVpZ2h0KCkgOiAkYm9keS5oZWlnaHQoKTtcbiAgICAgIGlmIChjb25maWcuYW5pbU92ZXIpIHtcbiAgICAgICAgZGF0YS5tZW51LmhlaWdodChib2R5SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5lbC5jc3MoJ3Bvc2l0aW9uJykgIT09ICdmaXhlZCcpIHtcbiAgICAgICAgYm9keUhlaWdodCAtPSBkYXRhLmVsLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgfVxuICAgICAgZGF0YS5vdmVybGF5ICYmIGRhdGEub3ZlcmxheS5oZWlnaHQoYm9keUhlaWdodCk7XG4gICAgICByZXR1cm4gYm9keUhlaWdodDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZShkYXRhLCBpbW1lZGlhdGUpIHtcbiAgICAgIGlmICghZGF0YS5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRhdGEub3BlbiA9IGZhbHNlO1xuICAgICAgZGF0YS5idXR0b24ucmVtb3ZlQ2xhc3MobmF2YmFyT3BlbmVkQnV0dG9uKTtcbiAgICAgIHZhciBjb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgIGlmIChcbiAgICAgICAgY29uZmlnLmFuaW1hdGlvbiA9PT0gJ25vbmUnIHx8XG4gICAgICAgICF0cmFtLnN1cHBvcnQudHJhbnNmb3JtIHx8XG4gICAgICAgIGNvbmZpZy5kdXJhdGlvbiA8PSAwXG4gICAgICApIHtcbiAgICAgICAgaW1tZWRpYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGl4Lm91dHJvKDAsIGRhdGEuZWxbMF0pO1xuXG4gICAgICAvLyBTdG9wIGxpc3RlbmluZyBmb3IgY2xpY2sgb3V0c2lkZSBldmVudHNcbiAgICAgICRkb2Mub2ZmKCdjbGljaycgKyBuYW1lc3BhY2UsIGRhdGEub3V0c2lkZSk7XG5cbiAgICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgdHJhbShkYXRhLm1lbnUpLnN0b3AoKTtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHJhbnNDb25maWcgPSAndHJhbnNmb3JtICcgKyBjb25maWcuZHVyYXRpb24gKyAnbXMgJyArIGNvbmZpZy5lYXNpbmcyO1xuICAgICAgdmFyIG1lbnVIZWlnaHQgPSBkYXRhLm1lbnUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICB2YXIgbWVudVdpZHRoID0gZGF0YS5tZW51Lm91dGVyV2lkdGgodHJ1ZSk7XG4gICAgICB2YXIgbmF2SGVpZ2h0ID0gZGF0YS5lbC5oZWlnaHQoKTtcblxuICAgICAgLy8gT3ZlciBsZWZ0L3JpZ2h0XG4gICAgICBpZiAoY29uZmlnLmFuaW1PdmVyKSB7XG4gICAgICAgIHRyYW0oZGF0YS5tZW51KVxuICAgICAgICAgIC5hZGQodHJhbnNDb25maWcpXG4gICAgICAgICAgLnN0YXJ0KHt4OiBtZW51V2lkdGggKiBjb25maWcuYW5pbURpcmVjdH0pXG4gICAgICAgICAgLnRoZW4oY29tcGxldGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERyb3AgRG93blxuICAgICAgdmFyIG9mZnNldFkgPSBuYXZIZWlnaHQgKyBtZW51SGVpZ2h0O1xuICAgICAgdHJhbShkYXRhLm1lbnUpLmFkZCh0cmFuc0NvbmZpZykuc3RhcnQoe3k6IC1vZmZzZXRZfSkudGhlbihjb21wbGV0ZSk7XG5cbiAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBkYXRhLm1lbnUuaGVpZ2h0KCcnKTtcbiAgICAgICAgdHJhbShkYXRhLm1lbnUpLnNldCh7eDogMCwgeTogMH0pO1xuICAgICAgICBkYXRhLm1lbnUuZWFjaChyZW1vdmVNZW51T3Blbik7XG4gICAgICAgIGRhdGEubGlua3MucmVtb3ZlQ2xhc3MobmF2YmFyT3BlbmVkTGluayk7XG4gICAgICAgIGRhdGEuZHJvcGRvd25zLnJlbW92ZUNsYXNzKG5hdmJhck9wZW5lZERyb3Bkb3duKTtcbiAgICAgICAgZGF0YS5kcm9wZG93blRvZ2dsZS5yZW1vdmVDbGFzcyhuYXZiYXJPcGVuZWREcm9wZG93blRvZ2dsZSk7XG4gICAgICAgIGRhdGEuZHJvcGRvd25MaXN0LnJlbW92ZUNsYXNzKG5hdmJhck9wZW5lZERyb3Bkb3duTGlzdCk7XG4gICAgICAgIGlmIChkYXRhLm92ZXJsYXkgJiYgZGF0YS5vdmVybGF5LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gTW92ZSBtZW51IGJhY2sgdG8gcGFyZW50IGF0IHRoZSBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgIG1lbnVTaWJsaW5nLmxlbmd0aFxuICAgICAgICAgICAgPyBkYXRhLm1lbnUuaW5zZXJ0QWZ0ZXIobWVudVNpYmxpbmcpXG4gICAgICAgICAgICA6IGRhdGEubWVudS5wcmVwZW5kVG8oZGF0YS5wYXJlbnQpO1xuICAgICAgICAgIGRhdGEub3ZlcmxheS5hdHRyKCdzdHlsZScsICcnKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50IHNvIG90aGVyIGNvbXBvbmVudHMgY2FuIGhvb2sgaW4gKGRyb3Bkb3duKVxuICAgICAgICBkYXRhLmVsLnRyaWdnZXJIYW5kbGVyKCd3LWNsb3NlJyk7XG4gICAgICAgIGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJJWEV2ZW50cyIsIktFWV9DT0RFUyIsIkFSUk9XX0xFRlQiLCJBUlJPV19VUCIsIkFSUk9XX1JJR0hUIiwiQVJST1dfRE9XTiIsIkVTQ0FQRSIsIlNQQUNFIiwiRU5URVIiLCJIT01FIiwiRU5EIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJfIiwiYXBpIiwidHJhbSIsIiR3aW4iLCJ3aW5kb3ciLCIkZG9jIiwiZG9jdW1lbnQiLCJkZWJvdW5jZSIsIiRib2R5IiwiJG5hdmJhcnMiLCJkZXNpZ25lciIsImluRWRpdG9yIiwiaW5BcHAiLCJlbnYiLCJvdmVybGF5IiwibmFtZXNwYWNlIiwibmF2YmFyT3BlbmVkQnV0dG9uIiwibmF2YmFyT3BlbmVkRHJvcGRvd24iLCJuYXZiYXJPcGVuZWREcm9wZG93blRvZ2dsZSIsIm5hdmJhck9wZW5lZERyb3Bkb3duTGlzdCIsIm5hdmJhck9wZW5lZExpbmsiLCJpeCIsInRyaWdnZXJzIiwibWVudVNpYmxpbmciLCJyZWFkeSIsImRlc2lnbiIsInByZXZpZXciLCJpbml0IiwiZGVzdHJveSIsInJlbW92ZUxpc3RlbmVycyIsImxlbmd0aCIsImVhY2giLCJ0ZWFyZG93biIsImJvZHkiLCJmaW5kIiwiYnVpbGQiLCJhZGRMaXN0ZW5lcnMiLCJyZXNpemUiLCJvZmYiLCJyZXNpemVBbGwiLCJvbiIsImkiLCJlbCIsIiRlbCIsImRhdGEiLCJvcGVuIiwiY29uZmlnIiwic2VsZWN0ZWRJZHgiLCJtZW51IiwibGlua3MiLCJkcm9wZG93bnMiLCJkcm9wZG93blRvZ2dsZSIsImRyb3Bkb3duTGlzdCIsImJ1dHRvbiIsImNvbnRhaW5lciIsIm92ZXJsYXlDb250YWluZXJJZCIsIm91dHNpZGUiLCJuYXZCcmFuZExpbmsiLCJhdHRyIiwiY29uZmlndXJlIiwicmVtb3ZlT3ZlcmxheSIsImhhbmRsZXIiLCJhZGRPdmVybGF5IiwidG9nZ2xlIiwibmF2aWdhdGUiLCJtYWtlVG9nZ2xlQnV0dG9uS2V5Ym9hcmRIYW5kbGVyIiwibWFrZUxpbmtzS2V5Ym9hcmRIYW5kbGVyIiwicmVtb3ZlRGF0YSIsImNsb3NlIiwicmVtb3ZlIiwiYXBwZW5kVG8iLCJwYXJlbnQiLCJvbGQiLCJhbmltYXRpb24iLCJhbmltT3ZlciIsInRlc3QiLCJhbmltRGlyZWN0IiwiZGVmZXIiLCJyZW9wZW4iLCJlYXNpbmciLCJlYXNpbmcyIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJkb2NIZWlnaHQiLCJldnQiLCJvcHRpb25zIiwid2luV2lkdGgiLCJ3aWR0aCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImZvY3VzU2VsZWN0ZWRMaW5rIiwiaW5kZXgiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJNYXRoIiwibWF4IiwibWluIiwic2VsZWN0ZWRFbGVtZW50IiwibGluayIsImhyZWYiLCJ2YWxpZENsaWNrIiwiY3VycmVudFRhcmdldCIsImluZGV4T2YiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiY2xvc2VzdCIsIm91dHNpZGVEZWJvdW5jZWQiLCJpcyIsImNvbGxhcHNlZCIsImNzcyIsInVwZGF0ZUVhY2hNYXgiLCJ1cGRhdGVNYXgiLCJzZXRPdmVybGF5SGVpZ2h0IiwibWF4V2lkdGgiLCJjb250YWluTWF4IiwiYWRkTWVudU9wZW4iLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVNZW51T3BlbiIsInJlbW92ZUF0dHJpYnV0ZSIsImltbWVkaWF0ZSIsImFkZENsYXNzIiwic3VwcG9ydCIsInRyYW5zZm9ybSIsImJvZHlIZWlnaHQiLCJtZW51SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJtZW51V2lkdGgiLCJvdXRlcldpZHRoIiwibmF2SGVpZ2h0IiwiaGVpZ2h0IiwibmF2YmFyRWwiLCJpbnRybyIsInJlZHJhdyIsInVwIiwiY29tcGxldGUiLCJ0cmFuc0NvbmZpZyIsInByZXYiLCJzaG93IiwiYXBwZW5kIiwiYWRkIiwic2V0IiwieCIsInN0YXJ0IiwidGhlbiIsIm9mZnNldFkiLCJ5IiwicmVtb3ZlQ2xhc3MiLCJvdXRybyIsInN0b3AiLCJjaGlsZHJlbiIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiaGlkZSIsInRyaWdnZXJIYW5kbGVyIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBQ3RCLElBQUlDLFdBQVdELFFBQVE7QUFFdkIsTUFBTUUsWUFBWTtJQUNoQkMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsWUFBWTtJQUNaQyxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLEtBQUs7QUFDUDtBQUVBWixRQUFRYSxNQUFNLENBQ1osVUFDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUMsRUFBRUMsQ0FBQztJQUM5QixJQUFJQyxNQUFNLENBQUM7SUFDWCxJQUFJQyxPQUFPSCxFQUFFRyxJQUFJO0lBQ2pCLElBQUlDLE9BQU9KLEVBQUVLO0lBQ2IsSUFBSUMsT0FBT04sRUFBRU87SUFDYixJQUFJQyxXQUFXUCxFQUFFTyxRQUFRO0lBQ3pCLElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJQztJQUNKLElBQUlDO0lBQ0os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

}),

}]);