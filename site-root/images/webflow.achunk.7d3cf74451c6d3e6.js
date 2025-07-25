"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["185"], {
2338: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: focus-visible
 */ 
var Webflow = __webpack_require__(3949);
/*
 * This polyfill comes from https://github.com/WICG/focus-visible
 */ Webflow.define('focus-visible', module.exports = function() {
    /**
     * Applies the :focus-visible polyfill at the given scope.
     * A scope in this case is either the top-level Document or a Shadow Root.
     *
     * @param {(Document|ShadowRoot)} scope
     * @see https://github.com/WICG/focus-visible
     */ function applyFocusVisiblePolyfill(scope) {
        var hadKeyboardEvent = true;
        var hadFocusVisibleRecently = false;
        var hadFocusVisibleRecentlyTimeout = null;
        var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            'datetime-local': true
        };
        /**
       * Helper function for legacy browsers and iframes which sometimes focus
       * elements like document, body, and non-interactive SVG.
       * @param {Element} el
       */ function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
                return true;
            }
            return false;
        }
        /**
       * Computes whether the given element should automatically trigger the
       * `focus-visible` class being added, i.e. whether it should always match
       * `:focus-visible` when focused.
       * @param {Element} el
       * @return {boolean}
       */ function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
                return true;
            }
            if (tagName === 'TEXTAREA' && !el.readOnly) {
                return true;
            }
            if (el.isContentEditable) {
                return true;
            }
            return false;
        }
        function addFocusVisibleAttribute(el) {
            if (el.getAttribute('data-wf-focus-visible')) {
                return;
            }
            el.setAttribute('data-wf-focus-visible', 'true');
        }
        function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute('data-wf-focus-visible')) {
                return;
            }
            el.removeAttribute('data-wf-focus-visible');
        }
        /**
       * If the most recent user interaction was via the keyboard;
       * and the key press did not include a meta, alt/option, or control key;
       * then the modality is keyboard. Otherwise, the modality is not keyboard.
       * Apply `focus-visible` to any current active element and keep track
       * of our keyboard modality state with `hadKeyboardEvent`.
       * @param {KeyboardEvent} e
       */ function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
                addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
        }
        /**
       * If at any point a user clicks with a pointing device, ensure that we change
       * the modality away from keyboard.
       * This avoids the situation where a user presses a key on an already focused
       * element, and then clicks on a different element, focusing it with a
       * pointing device, while we still think we're in keyboard modality.
       * @param {Event} e
       */ function onPointerDown() {
            hadKeyboardEvent = false;
        }
        /**
       * On `focus`, add the `focus-visible` class to the target if:
       * - the target received focus as a result of keyboard navigation, or
       * - the event target is an element that will likely require interaction
       *   via the keyboard (e.g. a text box)
       * @param {Event} e
       */ function onFocus(e) {
            // Prevent IE from focusing the document or HTML element.
            if (!isValidFocusTarget(e.target)) {
                return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
                addFocusVisibleAttribute(e.target);
            }
        }
        /**
       * On `blur`, remove the `focus-visible` class from the target.
       * @param {Event} e
       */ function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
                return;
            }
            if (e.target.hasAttribute('data-wf-focus-visible')) {
                // To detect a tab/window switch, we look for a blur event followed
                // rapidly by a visibility change.
                // If we don't see a visibility change within 100ms, it's probably a
                // regular focus change.
                hadFocusVisibleRecently = true;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                    hadFocusVisibleRecently = false;
                }, 100);
                removeFocusVisibleAttribute(e.target);
            }
        }
        /**
       * If the user changes tabs, keep track of whether or not the previously
       * focused element had .focus-visible.
       * @param {Event} e
       */ function onVisibilityChange() {
            if (document.visibilityState === 'hidden') {
                // If the tab becomes active again, the browser will handle calling focus
                // on the element (Safari actually calls it twice).
                // If this tab change caused a blur on an element with focus-visible,
                // re-apply the class when the user switches back to the tab.
                if (hadFocusVisibleRecently) {
                    hadKeyboardEvent = true;
                }
                addInitialPointerMoveListeners();
            }
        }
        /**
       * Add a group of listeners to detect usage of any pointing devices.
       * These listeners will be added when the polyfill first loads, and anytime
       * the window is blurred, so that they are active when the window regains
       * focus.
       */ function addInitialPointerMoveListeners() {
            document.addEventListener('mousemove', onInitialPointerMove);
            document.addEventListener('mousedown', onInitialPointerMove);
            document.addEventListener('mouseup', onInitialPointerMove);
            document.addEventListener('pointermove', onInitialPointerMove);
            document.addEventListener('pointerdown', onInitialPointerMove);
            document.addEventListener('pointerup', onInitialPointerMove);
            document.addEventListener('touchmove', onInitialPointerMove);
            document.addEventListener('touchstart', onInitialPointerMove);
            document.addEventListener('touchend', onInitialPointerMove);
        }
        function removeInitialPointerMoveListeners() {
            document.removeEventListener('mousemove', onInitialPointerMove);
            document.removeEventListener('mousedown', onInitialPointerMove);
            document.removeEventListener('mouseup', onInitialPointerMove);
            document.removeEventListener('pointermove', onInitialPointerMove);
            document.removeEventListener('pointerdown', onInitialPointerMove);
            document.removeEventListener('pointerup', onInitialPointerMove);
            document.removeEventListener('touchmove', onInitialPointerMove);
            document.removeEventListener('touchstart', onInitialPointerMove);
            document.removeEventListener('touchend', onInitialPointerMove);
        }
        /**
       * When the polfyill first loads, assume the user is in keyboard modality.
       * If any event is received from a pointing device (e.g. mouse, pointer,
       * touch), turn off keyboard modality.
       * This accounts for situations where focus enters the page from the URL bar.
       * @param {Event} e
       */ function onInitialPointerMove(e) {
            // Work around a Safari quirk that fires a mousemove on <html> whenever the
            // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
                return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
        }
        // For some kinds of state, we are interested in changes at the global scope
        // only. For example, global pointer input, global key presses and global
        // visibility change should affect the state at every scope:
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('touchstart', onPointerDown, true);
        document.addEventListener('visibilitychange', onVisibilityChange, true);
        addInitialPointerMoveListeners();
        // For focus and blur, we specifically care about state changes in the local
        // scope. This is because focus / blur events that originate from within a
        // shadow root are not re-dispatched from the host element if it was already
        // the active element in its own scope:
        scope.addEventListener('focus', onFocus, true);
        scope.addEventListener('blur', onBlur, true);
    }
    function ready() {
        if (typeof document !== 'undefined') {
            try {
                // check for native support; this will throw if the selector is not considered valid
                document.querySelector(':focus-visible');
            } catch (e) {
                // :focus-visible pseudo-selector is not supported natively
                applyFocusVisiblePolyfill(document);
            }
        }
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9jdXMtdmlzaWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHdpbmRvdywgZG9jdW1lbnQgKi9cblxuLyoqXG4gKiBXZWJmbG93OiBmb2N1cy12aXNpYmxlXG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG5cbi8qXG4gKiBUaGlzIHBvbHlmaWxsIGNvbWVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxuICovXG5XZWJmbG93LmRlZmluZShcbiAgJ2ZvY3VzLXZpc2libGUnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgOmZvY3VzLXZpc2libGUgcG9seWZpbGwgYXQgdGhlIGdpdmVuIHNjb3BlLlxuICAgICAqIEEgc2NvcGUgaW4gdGhpcyBjYXNlIGlzIGVpdGhlciB0aGUgdG9wLWxldmVsIERvY3VtZW50IG9yIGEgU2hhZG93IFJvb3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyhEb2N1bWVudHxTaGFkb3dSb290KX0gc2NvcGVcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKHNjb3BlKSB7XG4gICAgICB2YXIgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICAgIHZhciBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSBudWxsO1xuXG4gICAgICB2YXIgaW5wdXRUeXBlc0FsbG93bGlzdCA9IHtcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgc2VhcmNoOiB0cnVlLFxuICAgICAgICB1cmw6IHRydWUsXG4gICAgICAgIHRlbDogdHJ1ZSxcbiAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgICBudW1iZXI6IHRydWUsXG4gICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgIG1vbnRoOiB0cnVlLFxuICAgICAgICB3ZWVrOiB0cnVlLFxuICAgICAgICB0aW1lOiB0cnVlLFxuICAgICAgICBkYXRldGltZTogdHJ1ZSxcbiAgICAgICAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZWdhY3kgYnJvd3NlcnMgYW5kIGlmcmFtZXMgd2hpY2ggc29tZXRpbWVzIGZvY3VzXG4gICAgICAgKiBlbGVtZW50cyBsaWtlIGRvY3VtZW50LCBib2R5LCBhbmQgbm9uLWludGVyYWN0aXZlIFNWRy5cbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gaXNWYWxpZEZvY3VzVGFyZ2V0KGVsKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBlbCAmJlxuICAgICAgICAgIGVsICE9PSBkb2N1bWVudCAmJlxuICAgICAgICAgIGVsLm5vZGVOYW1lICE9PSAnSFRNTCcgJiZcbiAgICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0JPRFknICYmXG4gICAgICAgICAgJ2NsYXNzTGlzdCcgaW4gZWwgJiZcbiAgICAgICAgICAnY29udGFpbnMnIGluIGVsLmNsYXNzTGlzdFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICAgICAgICogYGZvY3VzLXZpc2libGVgIGNsYXNzIGJlaW5nIGFkZGVkLCBpLmUuIHdoZXRoZXIgaXQgc2hvdWxkIGFsd2F5cyBtYXRjaFxuICAgICAgICogYDpmb2N1cy12aXNpYmxlYCB3aGVuIGZvY3VzZWQuXG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlbCkge1xuICAgICAgICB2YXIgdHlwZSA9IGVsLnR5cGU7XG4gICAgICAgIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZTtcblxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dFR5cGVzQWxsb3dsaXN0W3R5cGVdICYmICFlbC5yZWFkT25seSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkRm9jdXNWaXNpYmxlQXR0cmlidXRlKGVsKSB7XG4gICAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2YtZm9jdXMtdmlzaWJsZScpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS13Zi1mb2N1cy12aXNpYmxlJywgJ3RydWUnKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlRm9jdXNWaXNpYmxlQXR0cmlidXRlKGVsKSB7XG4gICAgICAgIGlmICghZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXdmLWZvY3VzLXZpc2libGUnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtd2YtZm9jdXMtdmlzaWJsZScpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBtb3N0IHJlY2VudCB1c2VyIGludGVyYWN0aW9uIHdhcyB2aWEgdGhlIGtleWJvYXJkO1xuICAgICAgICogYW5kIHRoZSBrZXkgcHJlc3MgZGlkIG5vdCBpbmNsdWRlIGEgbWV0YSwgYWx0L29wdGlvbiwgb3IgY29udHJvbCBrZXk7XG4gICAgICAgKiB0aGVuIHRoZSBtb2RhbGl0eSBpcyBrZXlib2FyZC4gT3RoZXJ3aXNlLCB0aGUgbW9kYWxpdHkgaXMgbm90IGtleWJvYXJkLlxuICAgICAgICogQXBwbHkgYGZvY3VzLXZpc2libGVgIHRvIGFueSBjdXJyZW50IGFjdGl2ZSBlbGVtZW50IGFuZCBrZWVwIHRyYWNrXG4gICAgICAgKiBvZiBvdXIga2V5Ym9hcmQgbW9kYWxpdHkgc3RhdGUgd2l0aCBgaGFkS2V5Ym9hcmRFdmVudGAuXG4gICAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNWYWxpZEZvY3VzVGFyZ2V0KHNjb3BlLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgYWRkRm9jdXNWaXNpYmxlQXR0cmlidXRlKHNjb3BlLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgYXQgYW55IHBvaW50IGEgdXNlciBjbGlja3Mgd2l0aCBhIHBvaW50aW5nIGRldmljZSwgZW5zdXJlIHRoYXQgd2UgY2hhbmdlXG4gICAgICAgKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICAgICAgICogVGhpcyBhdm9pZHMgdGhlIHNpdHVhdGlvbiB3aGVyZSBhIHVzZXIgcHJlc3NlcyBhIGtleSBvbiBhbiBhbHJlYWR5IGZvY3VzZWRcbiAgICAgICAqIGVsZW1lbnQsIGFuZCB0aGVuIGNsaWNrcyBvbiBhIGRpZmZlcmVudCBlbGVtZW50LCBmb2N1c2luZyBpdCB3aXRoIGFcbiAgICAgICAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oKSB7XG4gICAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPbiBgZm9jdXNgLCBhZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgdGFyZ2V0IGlmOlxuICAgICAgICogLSB0aGUgdGFyZ2V0IHJlY2VpdmVkIGZvY3VzIGFzIGEgcmVzdWx0IG9mIGtleWJvYXJkIG5hdmlnYXRpb24sIG9yXG4gICAgICAgKiAtIHRoZSBldmVudCB0YXJnZXQgaXMgYW4gZWxlbWVudCB0aGF0IHdpbGwgbGlrZWx5IHJlcXVpcmUgaW50ZXJhY3Rpb25cbiAgICAgICAqICAgdmlhIHRoZSBrZXlib2FyZCAoZS5nLiBhIHRleHQgYm94KVxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICAgICAgLy8gUHJldmVudCBJRSBmcm9tIGZvY3VzaW5nIHRoZSBkb2N1bWVudCBvciBIVE1MIGVsZW1lbnQuXG4gICAgICAgIGlmICghaXNWYWxpZEZvY3VzVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYWRLZXlib2FyZEV2ZW50IHx8IGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGUudGFyZ2V0KSkge1xuICAgICAgICAgIGFkZEZvY3VzVmlzaWJsZUF0dHJpYnV0ZShlLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPbiBgYmx1cmAsIHJlbW92ZSB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIGZyb20gdGhlIHRhcmdldC5cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25CbHVyKGUpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13Zi1mb2N1cy12aXNpYmxlJykpIHtcbiAgICAgICAgICAvLyBUbyBkZXRlY3QgYSB0YWIvd2luZG93IHN3aXRjaCwgd2UgbG9vayBmb3IgYSBibHVyIGV2ZW50IGZvbGxvd2VkXG4gICAgICAgICAgLy8gcmFwaWRseSBieSBhIHZpc2liaWxpdHkgY2hhbmdlLlxuICAgICAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAgICAgLy8gcmVndWxhciBmb2N1cyBjaGFuZ2UuXG4gICAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSB0cnVlO1xuICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgcmVtb3ZlRm9jdXNWaXNpYmxlQXR0cmlidXRlKGUudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSB1c2VyIGNoYW5nZXMgdGFicywga2VlcCB0cmFjayBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgcHJldmlvdXNseVxuICAgICAgICogZm9jdXNlZCBlbGVtZW50IGhhZCAuZm9jdXMtdmlzaWJsZS5cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgICAgIC8vIElmIHRoZSB0YWIgYmVjb21lcyBhY3RpdmUgYWdhaW4sIHRoZSBicm93c2VyIHdpbGwgaGFuZGxlIGNhbGxpbmcgZm9jdXNcbiAgICAgICAgICAvLyBvbiB0aGUgZWxlbWVudCAoU2FmYXJpIGFjdHVhbGx5IGNhbGxzIGl0IHR3aWNlKS5cbiAgICAgICAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAgICAgICAvLyByZS1hcHBseSB0aGUgY2xhc3Mgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyBiYWNrIHRvIHRoZSB0YWIuXG4gICAgICAgICAgaWYgKGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5KSB7XG4gICAgICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBncm91cCBvZiBsaXN0ZW5lcnMgdG8gZGV0ZWN0IHVzYWdlIG9mIGFueSBwb2ludGluZyBkZXZpY2VzLlxuICAgICAgICogVGhlc2UgbGlzdGVuZXJzIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgcG9seWZpbGwgZmlyc3QgbG9hZHMsIGFuZCBhbnl0aW1lXG4gICAgICAgKiB0aGUgd2luZG93IGlzIGJsdXJyZWQsIHNvIHRoYXQgdGhleSBhcmUgYWN0aXZlIHdoZW4gdGhlIHdpbmRvdyByZWdhaW5zXG4gICAgICAgKiBmb2N1cy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdGhlIHBvbGZ5aWxsIGZpcnN0IGxvYWRzLCBhc3N1bWUgdGhlIHVzZXIgaXMgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICAgKiBJZiBhbnkgZXZlbnQgaXMgcmVjZWl2ZWQgZnJvbSBhIHBvaW50aW5nIGRldmljZSAoZS5nLiBtb3VzZSwgcG9pbnRlcixcbiAgICAgICAqIHRvdWNoKSwgdHVybiBvZmYga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICAgKiBUaGlzIGFjY291bnRzIGZvciBzaXR1YXRpb25zIHdoZXJlIGZvY3VzIGVudGVycyB0aGUgcGFnZSBmcm9tIHRoZSBVUkwgYmFyLlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbkluaXRpYWxQb2ludGVyTW92ZShlKSB7XG4gICAgICAgIC8vIFdvcmsgYXJvdW5kIGEgU2FmYXJpIHF1aXJrIHRoYXQgZmlyZXMgYSBtb3VzZW1vdmUgb24gPGh0bWw+IHdoZW5ldmVyIHRoZVxuICAgICAgICAvLyB3aW5kb3cgYmx1cnMsIGV2ZW4gaWYgeW91J3JlIHRhYmJpbmcgb3V0IG9mIHRoZSBwYWdlLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgJiYgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgICAgICByZW1vdmVJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRm9yIHNvbWUga2luZHMgb2Ygc3RhdGUsIHdlIGFyZSBpbnRlcmVzdGVkIGluIGNoYW5nZXMgYXQgdGhlIGdsb2JhbCBzY29wZVxuICAgICAgLy8gb25seS4gRm9yIGV4YW1wbGUsIGdsb2JhbCBwb2ludGVyIGlucHV0LCBnbG9iYWwga2V5IHByZXNzZXMgYW5kIGdsb2JhbFxuICAgICAgLy8gdmlzaWJpbGl0eSBjaGFuZ2Ugc2hvdWxkIGFmZmVjdCB0aGUgc3RhdGUgYXQgZXZlcnkgc2NvcGU6XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIHRydWUpO1xuXG4gICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcblxuICAgICAgLy8gRm9yIGZvY3VzIGFuZCBibHVyLCB3ZSBzcGVjaWZpY2FsbHkgY2FyZSBhYm91dCBzdGF0ZSBjaGFuZ2VzIGluIHRoZSBsb2NhbFxuICAgICAgLy8gc2NvcGUuIFRoaXMgaXMgYmVjYXVzZSBmb2N1cyAvIGJsdXIgZXZlbnRzIHRoYXQgb3JpZ2luYXRlIGZyb20gd2l0aGluIGFcbiAgICAgIC8vIHNoYWRvdyByb290IGFyZSBub3QgcmUtZGlzcGF0Y2hlZCBmcm9tIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgd2FzIGFscmVhZHlcbiAgICAgIC8vIHRoZSBhY3RpdmUgZWxlbWVudCBpbiBpdHMgb3duIHNjb3BlOlxuICAgICAgc2NvcGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzLCB0cnVlKTtcbiAgICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIsIHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBjaGVjayBmb3IgbmF0aXZlIHN1cHBvcnQ7IHRoaXMgd2lsbCB0aHJvdyBpZiB0aGUgc2VsZWN0b3IgaXMgbm90IGNvbnNpZGVyZWQgdmFsaWRcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMtdmlzaWJsZScpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gOmZvY3VzLXZpc2libGUgcHNldWRvLXNlbGVjdG9yIGlzIG5vdCBzdXBwb3J0ZWQgbmF0aXZlbHlcbiAgICAgICAgICBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKGRvY3VtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4ge3JlYWR5fTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCIsInNjb3BlIiwiaGFkS2V5Ym9hcmRFdmVudCIsImhhZEZvY3VzVmlzaWJsZVJlY2VudGx5IiwiaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0IiwiaW5wdXRUeXBlc0FsbG93bGlzdCIsInRleHQiLCJzZWFyY2giLCJ1cmwiLCJ0ZWwiLCJlbWFpbCIsInBhc3N3b3JkIiwibnVtYmVyIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsInRpbWUiLCJkYXRldGltZSIsImlzVmFsaWRGb2N1c1RhcmdldCIsImVsIiwiZG9jdW1lbnQiLCJub2RlTmFtZSIsImNsYXNzTGlzdCIsImZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5IiwidHlwZSIsInRhZ05hbWUiLCJyZWFkT25seSIsImlzQ29udGVudEVkaXRhYmxlIiwiYWRkRm9jdXNWaXNpYmxlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRm9jdXNWaXNpYmxlQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwib25LZXlEb3duIiwiZSIsIm1ldGFLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiYWN0aXZlRWxlbWVudCIsIm9uUG9pbnRlckRvd24iLCJvbkZvY3VzIiwidGFyZ2V0Iiwib25CbHVyIiwiaGFzQXR0cmlidXRlIiwid2luZG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsInZpc2liaWxpdHlTdGF0ZSIsImFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkluaXRpYWxQb2ludGVyTW92ZSIsInJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b0xvd2VyQ2FzZSIsInJlYWR5IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCLEdBRTVCOztDQUVDO0FBRUQsSUFBSUEsVUFBVUMsUUFBUTtBQUV0Qjs7Q0FFQyxHQUNERCxRQUFRRSxNQUFNLENBQ1osaUJBQ0NDLE9BQU9DLE9BQU8sR0FBRztJQUNoQjs7Ozs7O0tBTUMsR0FDRCxTQUFTQywwQkFBMEJDLEtBQUs7UUFDdEMsSUFBSUMsbUJBQW1CO1FBQ3ZCLElBQUlDLDBCQUEwQjtRQUM5QixJQUFJQyxpQ0FBaUM7UUFFckMsSUFBSUMsc0JBQXNCO1lBQ3hCQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtZQUNWLGtCQUFrQjtRQUNwQjtRQUVBOzs7O09BSUMsR0FDRCxTQUFTQyxtQkFBbUJDLEVBQUU7WUFDNUIsSUFDRUEsTUFDQUEsT0FBT0MsWUFDUEQsR0FBR0UsUUFBUSxLQUFLLFVBQ2hCRixHQUFHRSxRQUFRLEtBQUssVUFDaEIsZUFBZUYsTUFDZixjQUFjQSxHQUFHRyxTQUFTLEVBQzFCO2dCQUNBLE9BQU87WUFDVDtZQUNBLE9BQU87UUFDVDtRQUVBOzs7Ozs7T0FNQyxHQUNELFNBQVNDLDhCQUE4QkosRUFBRTtZQUN2QyxJQUFJSyxPQUFPTCxHQUFHSyxJQUFJO1lBQ2xCLElBQUlDLFVBQVVOLEdBQUdNLE9BQU87WUFFeEIsSUFBSUEsWUFBWSxXQUFXcEIsbUJBQW1CLENBQUNtQixLQUFLLElBQUksQ0FBQ0wsR0FBR08sUUFBUSxFQUFFO2dCQUNwRSxPQUFPO1lBQ1Q7WUFFQSxJQUFJRCxZQUFZLGNBQWMsQ0FBQ04sR0FBR08sUUFBUSxFQUFFO2dCQUMxQyxPQUFPO1lBQ1Q7WUFFQSxJQUFJUCxHQUFHUSxpQkFBaUIsRUFBRTtnQkFDeEIsT0FBTztZQUNUO1lBRUEsT0FBTztRQUNUO1FBRUEsU0FBU0MseUJBQXlCVCxFQUFFO1lBQ2xDLElBQUlBLEdBQUdVLFlBQVksQ0FBQywwQkFBMEI7Z0JBQzVDO1lBQ0Y7WUFDQVYsR0FBR1csWUFBWSxDQUFDLHlCQUF5QjtRQUMzQztRQUVBLFNBQVNDLDRCQUE0QlosRUFBRTtZQUNyQyxJQUFJLENBQUNBLEdBQUdVLFlBQVksQ0FBQywwQkFBMEI7Z0JBQzdDO1lBQ0Y7WUFDQVYsR0FBR2EsZUFBZSxDQUFDO1FBQ3JCO1FBRUE7Ozs7Ozs7T0FPQyxHQUNELFNBQVNDLFVBQVVDLENBQUM7WUFDbEIsSUFBSUEsRUFBRUMsT0FBTyxJQUFJRCxFQUFFRSxNQUFNLElBQUlGLEVBQUVHLE9BQU8sRUFBRTtnQkFDdEM7WUFDRjtZQUVBLElBQUluQixtQkFBbUJqQixNQUFNcUMsYUFBYSxHQUFHO2dCQUMzQ1YseUJBQXlCM0IsTUFBTXFDLGFBQWE7WUFDOUM7WUFFQXBDLG1CQUFtQjtRQUNyQjtRQUVBOzs7Ozs7O09BT0MsR0FDRCxTQUFTcUM7WUFDUHJDLG1CQUFtQjtRQUNyQjtRQUVBOzs7Ozs7T0FNQyxHQUNELFNBQVNzQyxRQUFRTixDQUFDO1lBQ2hCLHlEQUF5RDtZQUN6RCxJQUFJLENBQUNoQixtQkFBbUJnQixFQUFFTyxNQUFNLEdBQUc7Z0JBQ2pDO1lBQ0Y7WUFFQSxJQUFJdkMsb0JBQW9CcUIsOEJBQThCVyxFQUFFTyxNQUFNLEdBQUc7Z0JBQy9EYix5QkFBeUJNLEVBQUVPLE1BQU07WUFDbkM7UUFDRjtRQUVBOzs7T0FHQyxHQUNELFNBQVNDLE9BQU9SLENBQUM7WUFDZixJQUFJLENBQUNoQixtQkFBbUJnQixFQUFFTyxNQUFNLEdBQUc7Z0JBQ2pDO1lBQ0Y7WUFFQSxJQUFJUCxFQUFFTyxNQUFNLENBQUNFLFlBQVksQ0FBQywwQkFBMEI7Z0JBQ2xELG1FQUFtRTtnQkFDbkUsa0NBQWtDO2dCQUNsQyxvRUFBb0U7Z0JBQ3BFLHdCQUF3QjtnQkFDeEJ4QywwQkFBMEI7Z0JBQzFCeUMsT0FBT0MsWUFBWSxDQUFDekM7Z0JBQ3BCQSxpQ0FBaUN3QyxPQUFPRSxVQUFVLENBQUM7b0JBQ2pEM0MsMEJBQTBCO2dCQUM1QixHQUFHO2dCQUNINEIsNEJBQTRCRyxFQUFFTyxNQUFNO1lBQ3RDO1FBQ0Y7UUFFQTs7OztPQUlDLEdBQ0QsU0FBU007WUFDUCxJQUFJM0IsU0FBUzRCLGVBQWUsS0FBSyxVQUFVO2dCQUN6Qyx5RUFBeUU7Z0JBQ3pFLG1EQUFtRDtnQkFDbkQscUVBQXFFO2dCQUNyRSw2REFBNkQ7Z0JBQzdELElBQUk3Qyx5QkFBeUI7b0JBQzNCRCxtQkFBbUI7Z0JBQ3JCO2dCQUNBK0M7WUFDRjtRQUNGO1FBRUE7Ozs7O09BS0MsR0FDRCxTQUFTQTtZQUNQN0IsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFDO1lBQ3ZDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFDO1lBQ3ZDL0IsU0FBUzhCLGdCQUFnQixDQUFDLFdBQVdDO1lBQ3JDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGVBQWVDO1lBQ3pDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGVBQWVDO1lBQ3pDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFDO1lBQ3ZDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFDO1lBQ3ZDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGNBQWNDO1lBQ3hDL0IsU0FBUzhCLGdCQUFnQixDQUFDLFlBQVlDO1FBQ3hDO1FBRUEsU0FBU0M7WUFDUGhDLFNBQVNpQyxtQkFBbUIsQ0FBQyxhQUFhRjtZQUMxQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxhQUFhRjtZQUMxQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxXQUFXRjtZQUN4Qy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxlQUFlRjtZQUM1Qy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxlQUFlRjtZQUM1Qy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxhQUFhRjtZQUMxQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxhQUFhRjtZQUMxQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxjQUFjRjtZQUMzQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxZQUFZRjtRQUMzQztRQUVBOzs7Ozs7T0FNQyxHQUNELFNBQVNBLHFCQUFxQmpCLENBQUM7WUFDN0IsMkVBQTJFO1lBQzNFLGtFQUFrRTtZQUNsRSxJQUFJQSxFQUFFTyxNQUFNLENBQUNwQixRQUFRLElBQUlhLEVBQUVPLE1BQU0sQ0FBQ3BCLFFBQVEsQ0FBQ2lDLFdBQVcsT0FBTyxRQUFRO2dCQUNuRTtZQUNGO1lBRUFwRCxtQkFBbUI7WUFDbkJrRDtRQUNGO1FBRUEsNEVBQTRFO1FBQzVFLHlFQUF5RTtRQUN6RSw0REFBNEQ7UUFDNURoQyxTQUFTOEIsZ0JBQWdCLENBQUMsV0FBV2pCLFdBQVc7UUFDaERiLFNBQVM4QixnQkFBZ0IsQ0FBQyxhQUFhWCxlQUFlO1FBQ3REbkIsU0FBUzhCLGdCQUFnQixDQUFDLGVBQWVYLGVBQWU7UUFDeERuQixTQUFTOEIsZ0JBQWdCLENBQUMsY0FBY1gsZUFBZTtRQUN2RG5CLFNBQVM4QixnQkFBZ0IsQ0FBQyxvQkFBb0JILG9CQUFvQjtRQUVsRUU7UUFFQSw0RUFBNEU7UUFDNUUsMEVBQTBFO1FBQzFFLDRFQUE0RTtRQUM1RSx1Q0FBdUM7UUFDdkNoRCxNQUFNaUQsZ0JBQWdCLENBQUMsU0FBU1YsU0FBUztRQUN6Q3ZDLE1BQU1pRCxnQkFBZ0IsQ0FBQyxRQUFRUixRQUFRO0lBQ3pDO0lBRUEsU0FBU2E7UUFDUCxJQUFJLE9BQU9uQyxhQUFhLGFBQWE7WUFDbkMsSUFBSTtnQkFDRixvRkFBb0Y7Z0JBQ3BGQSxTQUFTb0MsYUFBYSxDQUFDO1lBQ3pCLEVBQUUsT0FBT3RCLEdBQUc7Z0JBQ1YsMkRBQTJEO2dCQUMzRGxDLDBCQUEwQm9CO1lBQzVCO1FBQ0Y7SUFDRjtJQUVBLGdCQUFnQjtJQUNoQixPQUFPO1FBQUNtQztJQUFLO0FBQ2YifQ==

}),

}]);