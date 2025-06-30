"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["599"], {
3695: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals document, window */ /**
 * Webflow: Touch events
 * Supports legacy 'tap' event
 * Adds a 'swipe' event to desktop and mobile
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('touch', module.exports = function($) {
    var api = {};
    var getSelection = window.getSelection;
    // Delegate all legacy 'tap' events to 'click'
    $.event.special.tap = {
        bindType: 'click',
        delegateType: 'click'
    };
    api.init = function(el) {
        el = typeof el === 'string' ? $(el).get(0) : el;
        return el ? new Touch(el) : null;
    };
    function Touch(el) {
        var active = false;
        var useTouch = false;
        var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
        var startX;
        var lastX;
        el.addEventListener('touchstart', start, false);
        el.addEventListener('touchmove', move, false);
        el.addEventListener('touchend', end, false);
        el.addEventListener('touchcancel', cancel, false);
        el.addEventListener('mousedown', start, false);
        el.addEventListener('mousemove', move, false);
        el.addEventListener('mouseup', end, false);
        el.addEventListener('mouseout', cancel, false);
        function start(evt) {
            // We don’t handle multi-touch events yet.
            var touches = evt.touches;
            if (touches && touches.length > 1) {
                return;
            }
            active = true;
            if (touches) {
                useTouch = true;
                startX = touches[0].clientX;
            } else {
                startX = evt.clientX;
            }
            lastX = startX;
        }
        function move(evt) {
            if (!active) {
                return;
            }
            if (useTouch && evt.type === 'mousemove') {
                evt.preventDefault();
                evt.stopPropagation();
                return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            // Allow swipes while pointer is down, but prevent them during text selection
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === '') {
                triggerEvent('swipe', evt, {
                    direction: velocityX > 0 ? 'right' : 'left'
                });
                cancel();
            }
        }
        function end(evt) {
            if (!active) {
                return;
            }
            active = false;
            if (useTouch && evt.type === 'mouseup') {
                evt.preventDefault();
                evt.stopPropagation();
                useTouch = false;
                return;
            }
        }
        function cancel() {
            active = false;
        }
        function destroy() {
            el.removeEventListener('touchstart', start, false);
            el.removeEventListener('touchmove', move, false);
            el.removeEventListener('touchend', end, false);
            el.removeEventListener('touchcancel', cancel, false);
            el.removeEventListener('mousedown', start, false);
            el.removeEventListener('mousemove', move, false);
            el.removeEventListener('mouseup', end, false);
            el.removeEventListener('mouseout', cancel, false);
            el = null;
        }
        // Public instance methods
        this.destroy = destroy;
    }
    // Wrap native event to supoprt preventdefault + stopPropagation
    function triggerEvent(type, evt, data) {
        var newEvent = $.Event(type, {
            originalEvent: evt
        });
        $(evt.target).trigger(newEvent, data);
    }
    // Listen for touch events on all nodes by default.
    api.instance = api.init(document);
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyBkb2N1bWVudCwgd2luZG93ICovXG5cbi8qKlxuICogV2ViZmxvdzogVG91Y2ggZXZlbnRzXG4gKiBTdXBwb3J0cyBsZWdhY3kgJ3RhcCcgZXZlbnRcbiAqIEFkZHMgYSAnc3dpcGUnIGV2ZW50IHRvIGRlc2t0b3AgYW5kIG1vYmlsZVxuICovXG5cbnZhciBXZWJmbG93ID0gcmVxdWlyZSgnLi93ZWJmbG93LWxpYicpO1xuXG5XZWJmbG93LmRlZmluZShcbiAgJ3RvdWNoJyxcbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCQpIHtcbiAgICB2YXIgYXBpID0ge307XG4gICAgdmFyIGdldFNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb247XG5cbiAgICAvLyBEZWxlZ2F0ZSBhbGwgbGVnYWN5ICd0YXAnIGV2ZW50cyB0byAnY2xpY2snXG4gICAgJC5ldmVudC5zcGVjaWFsLnRhcCA9IHtiaW5kVHlwZTogJ2NsaWNrJywgZGVsZWdhdGVUeXBlOiAnY2xpY2snfTtcblxuICAgIGFwaS5pbml0ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyAkKGVsKS5nZXQoMCkgOiBlbDtcbiAgICAgIHJldHVybiBlbCA/IG5ldyBUb3VjaChlbCkgOiBudWxsO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBUb3VjaChlbCkge1xuICAgICAgdmFyIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdmFyIHVzZVRvdWNoID0gZmFsc2U7XG4gICAgICB2YXIgdGhyZXNob2xkWCA9IE1hdGgubWluKE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAwLjA0KSwgNDApO1xuICAgICAgdmFyIHN0YXJ0WDtcbiAgICAgIHZhciBsYXN0WDtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN0YXJ0LCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3ZlLCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZCwgZmFsc2UpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBjYW5jZWwsIGZhbHNlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN0YXJ0LCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlLCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kLCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbmNlbCwgZmFsc2UpO1xuXG4gICAgICBmdW5jdGlvbiBzdGFydChldnQpIHtcbiAgICAgICAgLy8gV2UgZG9u4oCZdCBoYW5kbGUgbXVsdGktdG91Y2ggZXZlbnRzIHlldC5cbiAgICAgICAgdmFyIHRvdWNoZXMgPSBldnQudG91Y2hlcztcbiAgICAgICAgaWYgKHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgIHVzZVRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICBzdGFydFggPSB0b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRYID0gZXZ0LmNsaWVudFg7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0WCA9IHN0YXJ0WDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbW92ZShldnQpIHtcbiAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlVG91Y2ggJiYgZXZ0LnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b3VjaGVzID0gZXZ0LnRvdWNoZXM7XG4gICAgICAgIHZhciB4ID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0uY2xpZW50WCA6IGV2dC5jbGllbnRYO1xuICAgICAgICB2YXIgdmVsb2NpdHlYID0geCAtIGxhc3RYO1xuXG4gICAgICAgIGxhc3RYID0geDtcblxuICAgICAgICAvLyBBbGxvdyBzd2lwZXMgd2hpbGUgcG9pbnRlciBpcyBkb3duLCBidXQgcHJldmVudCB0aGVtIGR1cmluZyB0ZXh0IHNlbGVjdGlvblxuICAgICAgICBpZiAoXG4gICAgICAgICAgTWF0aC5hYnModmVsb2NpdHlYKSA+IHRocmVzaG9sZFggJiZcbiAgICAgICAgICBnZXRTZWxlY3Rpb24gJiZcbiAgICAgICAgICBTdHJpbmcoZ2V0U2VsZWN0aW9uKCkpID09PSAnJ1xuICAgICAgICApIHtcbiAgICAgICAgICB0cmlnZ2VyRXZlbnQoJ3N3aXBlJywgZXZ0LCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IHZlbG9jaXR5WCA+IDAgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGVuZChldnQpIHtcbiAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHVzZVRvdWNoICYmIGV2dC50eXBlID09PSAnbW91c2V1cCcpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdXNlVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdmUsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmQsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBjYW5jZWwsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSwgZmFsc2UpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kLCBmYWxzZSk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2FuY2VsLCBmYWxzZSk7XG4gICAgICAgIGVsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gUHVibGljIGluc3RhbmNlIG1ldGhvZHNcbiAgICAgIHRoaXMuZGVzdHJveSA9IGRlc3Ryb3k7XG4gICAgfVxuXG4gICAgLy8gV3JhcCBuYXRpdmUgZXZlbnQgdG8gc3Vwb3BydCBwcmV2ZW50ZGVmYXVsdCArIHN0b3BQcm9wYWdhdGlvblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJFdmVudCh0eXBlLCBldnQsIGRhdGEpIHtcbiAgICAgIHZhciBuZXdFdmVudCA9ICQuRXZlbnQodHlwZSwge29yaWdpbmFsRXZlbnQ6IGV2dH0pO1xuICAgICAgJChldnQudGFyZ2V0KS50cmlnZ2VyKG5ld0V2ZW50LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHRvdWNoIGV2ZW50cyBvbiBhbGwgbm9kZXMgYnkgZGVmYXVsdC5cbiAgICBhcGkuaW5zdGFuY2UgPSBhcGkuaW5pdChkb2N1bWVudCk7XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsImFwaSIsImdldFNlbGVjdGlvbiIsIndpbmRvdyIsImV2ZW50Iiwic3BlY2lhbCIsInRhcCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaW5pdCIsImVsIiwiZ2V0IiwiVG91Y2giLCJhY3RpdmUiLCJ1c2VUb3VjaCIsInRocmVzaG9sZFgiLCJNYXRoIiwibWluIiwicm91bmQiLCJpbm5lcldpZHRoIiwic3RhcnRYIiwibGFzdFgiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwiY2FuY2VsIiwiZXZ0IiwidG91Y2hlcyIsImxlbmd0aCIsImNsaWVudFgiLCJ0eXBlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ4IiwidmVsb2NpdHlYIiwiYWJzIiwiU3RyaW5nIiwidHJpZ2dlckV2ZW50IiwiZGlyZWN0aW9uIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkYXRhIiwibmV3RXZlbnQiLCJFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXQiLCJ0cmlnZ2VyIiwiaW5zdGFuY2UiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCLEdBRTVCOzs7O0NBSUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCRCxRQUFRRSxNQUFNLENBQ1osU0FDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUM7SUFDM0Is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

}),

}]);