"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["0"], {
8334: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals document, MouseEvent */ /**
 * Webflow: focus
 */ 
var Webflow = __webpack_require__(3949);
/*
 * Safari has a weird bug where it doesn't support :focus for links with hrefs,
 * buttons, and input[type=button|submit], so we listen for mousedown events
 * instead and force the element to emit a focus event in those cases.

 * See these webkit bugs for reference:
 * https://bugs.webkit.org/show_bug.cgi?id=22261
 * https://bugs.webkit.org/show_bug.cgi?id=229895
 */ Webflow.define('focus', module.exports = function() {
    var capturedEvents = [];
    var capturing = false;
    function captureEvent(e) {
        if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
        }
    }
    /*
     * The only mousedown events we care about here are ones emanating from
     * (A) anchor links with href attribute,
     * (B) non-disabled buttons,
     * (C) non-disabled textarea,
     * (D) non-disabled inputs of type "button", "reset", "checkbox", "radio", "submit"
     * (E) non-interactive elements (button, a, input, textarea, select) that have a tabindex with a numeric value
     * (F) audio elements
     * (G) video elements with controls attribute
     */ function isPolyfilledFocusEvent(e) {
        var el = e.target;
        var tag = el.tagName;
        return /^a$/i.test(tag) && el.href != null || // (A)
        /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
        /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
        !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
        /^audio$/i.test(tag) || // (F)
        /^video$/i.test(tag) && el.controls === true // (G)
        ;
    }
    function handler(e) {
        if (isPolyfilledFocusEvent(e)) {
            // start capturing possible out-of-order mouse events
            capturing = true;
            /*
         * enqueue the focus event _after_ the current batch of events, which
         * includes any blur events. The correct order of events is:
         *
         * [this element] MOUSEDOWN               <-- this event
         * [previously active element] BLUR
         * [previously active element] FOCUSOUT
         * [this element] FOCUS                   <-- forced event
         * [this element] FOCUSIN                 <-- forced event
         * [this element] MOUSEUP                 <-- possibly captured event (it may have fired _before_ the FOCUS event)
         * [this element] CLICK                   <-- possibly captured event (it may have fired _before_ the FOCUS event)
         */ setTimeout(()=>{
                // stop capturing possible out-of-order mouse events
                capturing = false;
                // trigger focus event
                e.target.focus();
                // re-dispatch captured mouse events in order
                while(capturedEvents.length > 0){
                    var event = capturedEvents.pop();
                    event.target.dispatchEvent(new MouseEvent(event.type, event));
                }
            }, 0);
        }
    }
    function ready() {
        if (typeof document !== 'undefined' && document.body.hasAttribute('data-wf-focus-within') && Webflow.env.safari) {
            document.addEventListener('mousedown', handler, true);
            document.addEventListener('mouseup', captureEvent, true);
            document.addEventListener('click', captureEvent, true);
        }
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9jdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyBkb2N1bWVudCwgTW91c2VFdmVudCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IGZvY3VzXG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG5cbi8qXG4gKiBTYWZhcmkgaGFzIGEgd2VpcmQgYnVnIHdoZXJlIGl0IGRvZXNuJ3Qgc3VwcG9ydCA6Zm9jdXMgZm9yIGxpbmtzIHdpdGggaHJlZnMsXG4gKiBidXR0b25zLCBhbmQgaW5wdXRbdHlwZT1idXR0b258c3VibWl0XSwgc28gd2UgbGlzdGVuIGZvciBtb3VzZWRvd24gZXZlbnRzXG4gKiBpbnN0ZWFkIGFuZCBmb3JjZSB0aGUgZWxlbWVudCB0byBlbWl0IGEgZm9jdXMgZXZlbnQgaW4gdGhvc2UgY2FzZXMuXG5cbiAqIFNlZSB0aGVzZSB3ZWJraXQgYnVncyBmb3IgcmVmZXJlbmNlOlxuICogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIyMjYxXG4gKiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjI5ODk1XG4gKi9cbldlYmZsb3cuZGVmaW5lKFxuICAnZm9jdXMnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhcHR1cmVkRXZlbnRzID0gW107XG4gICAgdmFyIGNhcHR1cmluZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gY2FwdHVyZUV2ZW50KGUpIHtcbiAgICAgIGlmIChjYXB0dXJpbmcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYXB0dXJlZEV2ZW50cy51bnNoaWZ0KGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogVGhlIG9ubHkgbW91c2Vkb3duIGV2ZW50cyB3ZSBjYXJlIGFib3V0IGhlcmUgYXJlIG9uZXMgZW1hbmF0aW5nIGZyb21cbiAgICAgKiAoQSkgYW5jaG9yIGxpbmtzIHdpdGggaHJlZiBhdHRyaWJ1dGUsXG4gICAgICogKEIpIG5vbi1kaXNhYmxlZCBidXR0b25zLFxuICAgICAqIChDKSBub24tZGlzYWJsZWQgdGV4dGFyZWEsXG4gICAgICogKEQpIG5vbi1kaXNhYmxlZCBpbnB1dHMgb2YgdHlwZSBcImJ1dHRvblwiLCBcInJlc2V0XCIsIFwiY2hlY2tib3hcIiwgXCJyYWRpb1wiLCBcInN1Ym1pdFwiXG4gICAgICogKEUpIG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cyAoYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCkgdGhhdCBoYXZlIGEgdGFiaW5kZXggd2l0aCBhIG51bWVyaWMgdmFsdWVcbiAgICAgKiAoRikgYXVkaW8gZWxlbWVudHNcbiAgICAgKiAoRykgdmlkZW8gZWxlbWVudHMgd2l0aCBjb250cm9scyBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1BvbHlmaWxsZWRGb2N1c0V2ZW50KGUpIHtcbiAgICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgICAgdmFyIHRhZyA9IGVsLnRhZ05hbWU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoL15hJC9pLnRlc3QodGFnKSAmJiBlbC5ocmVmICE9IG51bGwpIHx8IC8vIChBKVxuICAgICAgICAoL14oYnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KHRhZykgJiYgZWwuZGlzYWJsZWQgIT09IHRydWUpIHx8IC8vIChCKSAoQylcbiAgICAgICAgKC9eaW5wdXQkL2kudGVzdCh0YWcpICYmXG4gICAgICAgICAgL14oYnV0dG9ufHJlc2V0fHN1Ym1pdHxyYWRpb3xjaGVja2JveCkkL2kudGVzdChlbC50eXBlKSAmJlxuICAgICAgICAgICFlbC5kaXNhYmxlZCkgfHwgLy8gKEQpXG4gICAgICAgICghL14oYnV0dG9ufGlucHV0fHRleHRhcmVhfHNlbGVjdHxhKSQvaS50ZXN0KHRhZykgJiZcbiAgICAgICAgICAhTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGVsLnRhYkluZGV4KSkpIHx8IC8vIChFKVxuICAgICAgICAvXmF1ZGlvJC9pLnRlc3QodGFnKSB8fCAvLyAoRilcbiAgICAgICAgKC9edmlkZW8kL2kudGVzdCh0YWcpICYmIGVsLmNvbnRyb2xzID09PSB0cnVlKSAvLyAoRylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlcihlKSB7XG4gICAgICBpZiAoaXNQb2x5ZmlsbGVkRm9jdXNFdmVudChlKSkge1xuICAgICAgICAvLyBzdGFydCBjYXB0dXJpbmcgcG9zc2libGUgb3V0LW9mLW9yZGVyIG1vdXNlIGV2ZW50c1xuICAgICAgICBjYXB0dXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIGVucXVldWUgdGhlIGZvY3VzIGV2ZW50IF9hZnRlcl8gdGhlIGN1cnJlbnQgYmF0Y2ggb2YgZXZlbnRzLCB3aGljaFxuICAgICAgICAgKiBpbmNsdWRlcyBhbnkgYmx1ciBldmVudHMuIFRoZSBjb3JyZWN0IG9yZGVyIG9mIGV2ZW50cyBpczpcbiAgICAgICAgICpcbiAgICAgICAgICogW3RoaXMgZWxlbWVudF0gTU9VU0VET1dOICAgICAgICAgICAgICAgPC0tIHRoaXMgZXZlbnRcbiAgICAgICAgICogW3ByZXZpb3VzbHkgYWN0aXZlIGVsZW1lbnRdIEJMVVJcbiAgICAgICAgICogW3ByZXZpb3VzbHkgYWN0aXZlIGVsZW1lbnRdIEZPQ1VTT1VUXG4gICAgICAgICAqIFt0aGlzIGVsZW1lbnRdIEZPQ1VTICAgICAgICAgICAgICAgICAgIDwtLSBmb3JjZWQgZXZlbnRcbiAgICAgICAgICogW3RoaXMgZWxlbWVudF0gRk9DVVNJTiAgICAgICAgICAgICAgICAgPC0tIGZvcmNlZCBldmVudFxuICAgICAgICAgKiBbdGhpcyBlbGVtZW50XSBNT1VTRVVQICAgICAgICAgICAgICAgICA8LS0gcG9zc2libHkgY2FwdHVyZWQgZXZlbnQgKGl0IG1heSBoYXZlIGZpcmVkIF9iZWZvcmVfIHRoZSBGT0NVUyBldmVudClcbiAgICAgICAgICogW3RoaXMgZWxlbWVudF0gQ0xJQ0sgICAgICAgICAgICAgICAgICAgPC0tIHBvc3NpYmx5IGNhcHR1cmVkIGV2ZW50IChpdCBtYXkgaGF2ZSBmaXJlZCBfYmVmb3JlXyB0aGUgRk9DVVMgZXZlbnQpXG4gICAgICAgICAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBzdG9wIGNhcHR1cmluZyBwb3NzaWJsZSBvdXQtb2Ytb3JkZXIgbW91c2UgZXZlbnRzXG4gICAgICAgICAgY2FwdHVyaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyB0cmlnZ2VyIGZvY3VzIGV2ZW50XG4gICAgICAgICAgZS50YXJnZXQuZm9jdXMoKTtcblxuICAgICAgICAgIC8vIHJlLWRpc3BhdGNoIGNhcHR1cmVkIG1vdXNlIGV2ZW50cyBpbiBvcmRlclxuICAgICAgICAgIHdoaWxlIChjYXB0dXJlZEV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBjYXB0dXJlZEV2ZW50cy5wb3AoKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIGV2ZW50KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS13Zi1mb2N1cy13aXRoaW4nKSAmJlxuICAgICAgICBXZWJmbG93LmVudi5zYWZhcmlcbiAgICAgICkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNhcHR1cmVFdmVudCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FwdHVyZUV2ZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIHtyZWFkeX07XG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJyZXF1aXJlIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhcHR1cmVkRXZlbnRzIiwiY2FwdHVyaW5nIiwiY2FwdHVyZUV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwidW5zaGlmdCIsImlzUG9seWZpbGxlZEZvY3VzRXZlbnQiLCJlbCIsInRhcmdldCIsInRhZyIsInRhZ05hbWUiLCJ0ZXN0IiwiaHJlZiIsImRpc2FibGVkIiwidHlwZSIsIk51bWJlciIsImlzTmFOIiwicGFyc2VGbG9hdCIsInRhYkluZGV4IiwiY29udHJvbHMiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImZvY3VzIiwibGVuZ3RoIiwiZXZlbnQiLCJwb3AiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCIsInJlYWR5IiwiZG9jdW1lbnQiLCJib2R5IiwiaGFzQXR0cmlidXRlIiwiZW52Iiwic2FmYXJpIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDLEdBRWhDOztDQUVDO0FBRUQsSUFBSUEsVUFBVUMsUUFBUTtBQUV0Qjs7Ozs7Ozs7Q0FRQyxHQUNERCxRQUFRRSxNQUFNLENBQ1osU0FDQ0MsT0FBT0MsT0FBTyxHQUFHO0lBQ2hCLElBQUlDLGlCQUFpQixFQUFFO0lBQ3ZCLElBQUlDLFlBQVk7SUFFaEIsU0FBU0MsYUFBYUMsQ0FBQztRQUNyQixJQUFJRixXQUFXO1lBQ2JFLEVBQUVDLGNBQWM7WUFDaEJELEVBQUVFLGVBQWU7WUFDakJGLEVBQUVHLHdCQUF3QjtZQUMxQk4sZUFBZU8sT0FBTyxDQUFDSjtRQUN6QjtJQUNGO0lBRUE7Ozs7Ozs7OztLQVNDLEdBQ0QsU0FBU0ssdUJBQXVCTCxDQUFDO1FBQy9CLElBQUlNLEtBQUtOLEVBQUVPLE1BQU07UUFDakIsSUFBSUMsTUFBTUYsR0FBR0csT0FBTztRQUNwQixPQUNFLEFBQUMsT0FBT0MsSUFBSSxDQUFDRixRQUFRRixHQUFHSyxJQUFJLElBQUksUUFBUyxNQUFNO1FBQzlDLHVCQUF1QkQsSUFBSSxDQUFDRixRQUFRRixHQUFHTSxRQUFRLEtBQUssUUFBUyxVQUFVO1FBQ3ZFLFdBQVdGLElBQUksQ0FBQ0YsUUFDZiwwQ0FBMENFLElBQUksQ0FBQ0osR0FBR08sSUFBSSxLQUN0RCxDQUFDUCxHQUFHTSxRQUFRLElBQUssTUFBTTtRQUN4QixDQUFDLHNDQUFzQ0YsSUFBSSxDQUFDRixRQUMzQyxDQUFDTSxPQUFPQyxLQUFLLENBQUNELE9BQU9FLFVBQVUsQ0FBQ1YsR0FBR1csUUFBUSxNQUFPLE1BQU07UUFDMUQsV0FBV1AsSUFBSSxDQUFDRixRQUFRLE1BQU07UUFDN0IsV0FBV0UsSUFBSSxDQUFDRixRQUFRRixHQUFHWSxRQUFRLEtBQUssS0FBTSxNQUFNOztJQUV6RDtJQUVBLFNBQVNDLFFBQVFuQixDQUFDO1FBQ2hCLElBQUlLLHVCQUF1QkwsSUFBSTtZQUM3QixxREFBcUQ7WUFDckRGLFlBQVk7WUFFWjs7Ozs7Ozs7Ozs7U0FXQyxHQUNEc0IsV0FBVztnQkFDVCxvREFBb0Q7Z0JBQ3BEdEIsWUFBWTtnQkFFWixzQkFBc0I7Z0JBQ3RCRSxFQUFFTyxNQUFNLENBQUNjLEtBQUs7Z0JBRWQsNkNBQTZDO2dCQUM3QyxNQUFPeEIsZUFBZXlCLE1BQU0sR0FBRyxFQUFHO29CQUNoQyxJQUFJQyxRQUFRMUIsZUFBZTJCLEdBQUc7b0JBQzlCRCxNQUFNaEIsTUFBTSxDQUFDa0IsYUFBYSxDQUFDLElBQUlDLFdBQVdILE1BQU1WLElBQUksRUFBRVU7Z0JBQ3hEO1lBQ0YsR0FBRztRQUNMO0lBQ0Y7SUFFQSxTQUFTSTtRQUNQLElBQ0UsT0FBT0MsYUFBYSxlQUNwQkEsU0FBU0MsSUFBSSxDQUFDQyxZQUFZLENBQUMsMkJBQzNCdEMsUUFBUXVDLEdBQUcsQ0FBQ0MsTUFBTSxFQUNsQjtZQUNBSixTQUFTSyxnQkFBZ0IsQ0FBQyxhQUFhZCxTQUFTO1lBQ2hEUyxTQUFTSyxnQkFBZ0IsQ0FBQyxXQUFXbEMsY0FBYztZQUNuRDZCLFNBQVNLLGdCQUFnQixDQUFDLFNBQVNsQyxjQUFjO1FBQ25EO0lBQ0Y7SUFFQSxnQkFBZ0I7SUFDaEIsT0FBTztRQUFDNEI7SUFBSztBQUNmIn0=

}),

}]);