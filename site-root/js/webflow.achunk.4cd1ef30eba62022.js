"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["696"], {
286: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: Smooth scroll
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('scroll', module.exports = function($) {
    /**
     * A collection of namespaced events found in this module.
     * Namespaced events encapsulate our code, and make it safer and easier
     * for designers to apply custom code overrides.
     * @see https://api.jquery.com/on/#event-names
     * @typedef {Object.<string>} NamespacedEventsCollection
     */ var NS_EVENTS = {
        WF_CLICK_EMPTY: 'click.wf-empty-link',
        WF_CLICK_SCROLL: 'click.wf-scroll'
    };
    var loc = window.location;
    var history = inIframe() ? null : window.history;
    var $win = $(window);
    var $doc = $(document);
    var $body = $(document.body);
    var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
        window.setTimeout(fn, 15);
    };
    var rootTag = Webflow.env('editor') ? '.w-editor-body' : 'body';
    var headerSelector = 'header, ' + rootTag + ' > .header, ' + rootTag + ' > .w-nav:not([data-no-scroll])';
    var emptyHrefSelector = 'a[href="#"]';
    /**
     * Select only links whose href:
     * - contains a #
     * - is not one of our namespaced TabLink elements
     * - is not _only_ a #
     */ var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ')';
    var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
    var focusStylesEl = document.createElement('style');
    focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
    function inIframe() {
        try {
            return Boolean(window.frameElement);
        } catch (e) {
            return true;
        }
    }
    var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
    /**
     * Determine if link navigates to current page
     * @param {HTMLAnchorElement} link
     */ function linksToCurrentPage(link) {
        return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
    }
    /**
     * Check if the designer has indicated that this page should
     * have no scroll animation, or if the end user has set
     * prefers-reduced-motion in their OS
     */ const reducedMotionMediaQuery = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)');
    function reducedMotionEnabled() {
        return document.body.getAttribute('data-wf-scroll-motion') === 'none' || reducedMotionMediaQuery.matches;
    }
    function setFocusable($el, action) {
        var initialTabindex;
        switch(action){
            case 'add':
                initialTabindex = $el.attr('tabindex');
                if (initialTabindex) {
                    $el.attr('data-wf-tabindex-swap', initialTabindex);
                } else {
                    $el.attr('tabindex', '-1');
                }
                break;
            case 'remove':
                initialTabindex = $el.attr('data-wf-tabindex-swap');
                if (initialTabindex) {
                    $el.attr('tabindex', initialTabindex);
                    $el.removeAttr('data-wf-tabindex-swap');
                } else {
                    $el.removeAttr('tabindex');
                }
                break;
        }
        $el.toggleClass('wf-force-outline-none', action === 'add');
    }
    /**
     * Determine if we should execute custom scroll
     */ function validateScroll(evt) {
        var target = evt.currentTarget;
        if (// Bail if in Designer
        Webflow.env('design') || // Ignore links being used by jQuery mobile
        window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)) {
            return;
        }
        var hash = linksToCurrentPage(target) ? target.hash : '';
        if (hash === '') return;
        var $el = $(hash);
        if (!$el.length) {
            return;
        }
        if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
        }
        updateHistory(hash, evt);
        window.setTimeout(function() {
            scroll($el, function setFocus() {
                setFocusable($el, 'add');
                $el.get(0).focus({
                    preventScroll: true
                });
                setFocusable($el, 'remove');
            });
        }, evt ? 0 : 300);
    }
    function updateHistory(hash) {
        // Push new history state
        if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
        !(Webflow.env.chrome && loc.protocol === 'file:')) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
                history.pushState({
                    hash
                }, '', hash);
            }
        }
    }
    function scroll($targetEl, cb) {
        var start = $win.scrollTop();
        var end = calculateScrollEndPosition($targetEl);
        if (start === end) return;
        var duration = calculateScrollDuration($targetEl, start, end);
        var clock = Date.now();
        var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
                animate(step);
            } else if (typeof cb === 'function') {
                cb();
            }
        };
        animate(step);
    }
    function calculateScrollEndPosition($targetEl) {
        // If a fixed header exists, offset for the height
        var $header = $(headerSelector);
        var offsetY = $header.css('position') === 'fixed' ? $header.outerHeight() : 0;
        var end = $targetEl.offset().top - offsetY;
        // If specified, scroll so that the element ends up in the middle of the viewport
        if ($targetEl.data('scroll') === 'mid') {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
                end -= Math.round((available - elHeight) / 2);
            }
        }
        return end;
    }
    function calculateScrollDuration($targetEl, start, end) {
        if (reducedMotionEnabled()) return 0;
        var mult = 1;
        // Check for custom time multiplier on the body and the scroll target
        $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute('data-scroll-time'));
            if (!isNaN(time) && time >= 0) {
                mult = time;
            }
        });
        return (472.143 * Math.log(Math.abs(start - end) + 125) - 2000) * mult;
    }
    function getY(start, end, elapsed, duration) {
        if (elapsed > duration) {
            return end;
        }
        return start + (end - start) * ease(elapsed / duration);
    }
    function ease(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    function ready() {
        var { WF_CLICK_EMPTY, WF_CLICK_SCROLL } = NS_EVENTS;
        $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
        /**
       * Prevent empty hash links from triggering scroll.
       * Legacy feature to preserve: use the default "#" link
       * to trigger an interaction, and do not want the page
       * to scroll to the top.
       */ $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
        });
        document.head.insertBefore(focusStylesEl, document.head.firstChild);
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctc2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IFNtb290aCBzY3JvbGxcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4vd2ViZmxvdy1saWInKTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdzY3JvbGwnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIEEgY29sbGVjdGlvbiBvZiBuYW1lc3BhY2VkIGV2ZW50cyBmb3VuZCBpbiB0aGlzIG1vZHVsZS5cbiAgICAgKiBOYW1lc3BhY2VkIGV2ZW50cyBlbmNhcHN1bGF0ZSBvdXIgY29kZSwgYW5kIG1ha2UgaXQgc2FmZXIgYW5kIGVhc2llclxuICAgICAqIGZvciBkZXNpZ25lcnMgdG8gYXBwbHkgY3VzdG9tIGNvZGUgb3ZlcnJpZGVzLlxuICAgICAqIEBzZWUgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9vbi8jZXZlbnQtbmFtZXNcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0LjxzdHJpbmc+fSBOYW1lc3BhY2VkRXZlbnRzQ29sbGVjdGlvblxuICAgICAqL1xuICAgIHZhciBOU19FVkVOVFMgPSB7XG4gICAgICBXRl9DTElDS19FTVBUWTogJ2NsaWNrLndmLWVtcHR5LWxpbmsnLFxuICAgICAgV0ZfQ0xJQ0tfU0NST0xMOiAnY2xpY2sud2Ytc2Nyb2xsJyxcbiAgICB9O1xuXG4gICAgdmFyIGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgaGlzdG9yeSA9IGluSWZyYW1lKCkgPyBudWxsIDogd2luZG93Lmhpc3Rvcnk7XG4gICAgdmFyICR3aW4gPSAkKHdpbmRvdyk7XG4gICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICB2YXIgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xuXG4gICAgdmFyIGFuaW1hdGUgPVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCAxNSk7XG4gICAgICB9O1xuICAgIHZhciByb290VGFnID0gV2ViZmxvdy5lbnYoJ2VkaXRvcicpID8gJy53LWVkaXRvci1ib2R5JyA6ICdib2R5JztcbiAgICB2YXIgaGVhZGVyU2VsZWN0b3IgPVxuICAgICAgJ2hlYWRlciwgJyArXG4gICAgICByb290VGFnICtcbiAgICAgICcgPiAuaGVhZGVyLCAnICtcbiAgICAgIHJvb3RUYWcgK1xuICAgICAgJyA+IC53LW5hdjpub3QoW2RhdGEtbm8tc2Nyb2xsXSknO1xuXG4gICAgdmFyIGVtcHR5SHJlZlNlbGVjdG9yID0gJ2FbaHJlZj1cIiNcIl0nO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IG9ubHkgbGlua3Mgd2hvc2UgaHJlZjpcbiAgICAgKiAtIGNvbnRhaW5zIGEgI1xuICAgICAqIC0gaXMgbm90IG9uZSBvZiBvdXIgbmFtZXNwYWNlZCBUYWJMaW5rIGVsZW1lbnRzXG4gICAgICogLSBpcyBub3QgX29ubHlfIGEgI1xuICAgICAqL1xuICAgIHZhciBsb2NhbEhyZWZTZWxlY3RvciA9XG4gICAgICAnYVtocmVmKj1cIiNcIl06bm90KC53LXRhYi1saW5rKTpub3QoJyArIGVtcHR5SHJlZlNlbGVjdG9yICsgJyknO1xuXG4gICAgdmFyIHNjcm9sbFRhcmdldE91dGxpbmVDU1MgPVxuICAgICAgJy53Zi1mb3JjZS1vdXRsaW5lLW5vbmVbdGFiaW5kZXg9XCItMVwiXTpmb2N1c3tvdXRsaW5lOm5vbmU7fSc7XG5cbiAgICB2YXIgZm9jdXNTdHlsZXNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZm9jdXNTdHlsZXNFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzY3JvbGxUYXJnZXRPdXRsaW5lQ1NTKSk7XG5cbiAgICBmdW5jdGlvbiBpbklmcmFtZSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHdpbmRvdy5mcmFtZUVsZW1lbnQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdmFsaWRIYXNoID0gL14jW2EtekEtWjAtOV1bXFx3Oi4tXSokLztcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSBpZiBsaW5rIG5hdmlnYXRlcyB0byBjdXJyZW50IHBhZ2VcbiAgICAgKiBAcGFyYW0ge0hUTUxBbmNob3JFbGVtZW50fSBsaW5rXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlua3NUb0N1cnJlbnRQYWdlKGxpbmspIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbGlkSGFzaC50ZXN0KGxpbmsuaGFzaCkgJiZcbiAgICAgICAgbGluay5ob3N0ICsgbGluay5wYXRobmFtZSA9PT0gbG9jLmhvc3QgKyBsb2MucGF0aG5hbWVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGRlc2lnbmVyIGhhcyBpbmRpY2F0ZWQgdGhhdCB0aGlzIHBhZ2Ugc2hvdWxkXG4gICAgICogaGF2ZSBubyBzY3JvbGwgYW5pbWF0aW9uLCBvciBpZiB0aGUgZW5kIHVzZXIgaGFzIHNldFxuICAgICAqIHByZWZlcnMtcmVkdWNlZC1tb3Rpb24gaW4gdGhlaXIgT1NcbiAgICAgKi9cbiAgICBjb25zdCByZWR1Y2VkTW90aW9uTWVkaWFRdWVyeSA9XG4gICAgICB0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpO1xuICAgIGZ1bmN0aW9uIHJlZHVjZWRNb3Rpb25FbmFibGVkKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2Ytc2Nyb2xsLW1vdGlvbicpID09PSAnbm9uZScgfHxcbiAgICAgICAgcmVkdWNlZE1vdGlvbk1lZGlhUXVlcnkubWF0Y2hlc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRGb2N1c2FibGUoJGVsLCBhY3Rpb24pIHtcbiAgICAgIHZhciBpbml0aWFsVGFiaW5kZXg7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgaW5pdGlhbFRhYmluZGV4ID0gJGVsLmF0dHIoJ3RhYmluZGV4Jyk7XG5cbiAgICAgICAgICBpZiAoaW5pdGlhbFRhYmluZGV4KSB7XG4gICAgICAgICAgICAkZWwuYXR0cignZGF0YS13Zi10YWJpbmRleC1zd2FwJywgaW5pdGlhbFRhYmluZGV4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGVsLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgaW5pdGlhbFRhYmluZGV4ID0gJGVsLmF0dHIoJ2RhdGEtd2YtdGFiaW5kZXgtc3dhcCcpO1xuICAgICAgICAgIGlmIChpbml0aWFsVGFiaW5kZXgpIHtcbiAgICAgICAgICAgICRlbC5hdHRyKCd0YWJpbmRleCcsIGluaXRpYWxUYWJpbmRleCk7XG4gICAgICAgICAgICAkZWwucmVtb3ZlQXR0cignZGF0YS13Zi10YWJpbmRleC1zd2FwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgJGVsLnRvZ2dsZUNsYXNzKCd3Zi1mb3JjZS1vdXRsaW5lLW5vbmUnLCBhY3Rpb24gPT09ICdhZGQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGV4ZWN1dGUgY3VzdG9tIHNjcm9sbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlU2Nyb2xsKGV2dCkge1xuICAgICAgdmFyIHRhcmdldCA9IGV2dC5jdXJyZW50VGFyZ2V0O1xuICAgICAgaWYgKFxuICAgICAgICAvLyBCYWlsIGlmIGluIERlc2lnbmVyXG4gICAgICAgIFdlYmZsb3cuZW52KCdkZXNpZ24nKSB8fFxuICAgICAgICAvLyBJZ25vcmUgbGlua3MgYmVpbmcgdXNlZCBieSBqUXVlcnkgbW9iaWxlXG4gICAgICAgICh3aW5kb3cuJC5tb2JpbGUgJiYgLyg/Ol58XFxzKXVpLWxpbmsoPzokfFxccykvLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGFzaCA9IGxpbmtzVG9DdXJyZW50UGFnZSh0YXJnZXQpID8gdGFyZ2V0Lmhhc2ggOiAnJztcbiAgICAgIGlmIChoYXNoID09PSAnJykgcmV0dXJuO1xuXG4gICAgICB2YXIgJGVsID0gJChoYXNoKTtcbiAgICAgIGlmICghJGVsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlSGlzdG9yeShoYXNoLCBldnQpO1xuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNjcm9sbCgkZWwsIGZ1bmN0aW9uIHNldEZvY3VzKCkge1xuICAgICAgICAgICAgc2V0Rm9jdXNhYmxlKCRlbCwgJ2FkZCcpO1xuICAgICAgICAgICAgJGVsLmdldCgwKS5mb2N1cyh7cHJldmVudFNjcm9sbDogdHJ1ZX0pO1xuICAgICAgICAgICAgc2V0Rm9jdXNhYmxlKCRlbCwgJ3JlbW92ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBldnQgPyAwIDogMzAwXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUhpc3RvcnkoaGFzaCkge1xuICAgICAgLy8gUHVzaCBuZXcgaGlzdG9yeSBzdGF0ZVxuICAgICAgaWYgKFxuICAgICAgICBsb2MuaGFzaCAhPT0gaGFzaCAmJlxuICAgICAgICBoaXN0b3J5ICYmXG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlICYmXG4gICAgICAgIC8vIE5hdmlnYXRpb24gYnJlYWtzIENocm9tZSB3aGVuIHRoZSBwcm90b2NvbCBpcyBgZmlsZTpgLlxuICAgICAgICAhKFdlYmZsb3cuZW52LmNocm9tZSAmJiBsb2MucHJvdG9jb2wgPT09ICdmaWxlOicpXG4gICAgICApIHtcbiAgICAgICAgdmFyIG9sZEhhc2ggPSBoaXN0b3J5LnN0YXRlICYmIGhpc3Rvcnkuc3RhdGUuaGFzaDtcbiAgICAgICAgaWYgKG9sZEhhc2ggIT09IGhhc2gpIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7aGFzaH0sICcnLCBoYXNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbCgkdGFyZ2V0RWwsIGNiKSB7XG4gICAgICB2YXIgc3RhcnQgPSAkd2luLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIGVuZCA9IGNhbGN1bGF0ZVNjcm9sbEVuZFBvc2l0aW9uKCR0YXJnZXRFbCk7XG5cbiAgICAgIGlmIChzdGFydCA9PT0gZW5kKSByZXR1cm47XG5cbiAgICAgIHZhciBkdXJhdGlvbiA9IGNhbGN1bGF0ZVNjcm9sbER1cmF0aW9uKCR0YXJnZXRFbCwgc3RhcnQsIGVuZCk7XG5cbiAgICAgIHZhciBjbG9jayA9IERhdGUubm93KCk7XG4gICAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gY2xvY2s7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgZ2V0WShzdGFydCwgZW5kLCBlbGFwc2VkLCBkdXJhdGlvbikpO1xuXG4gICAgICAgIGlmIChlbGFwc2VkIDw9IGR1cmF0aW9uKSB7XG4gICAgICAgICAgYW5pbWF0ZShzdGVwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRlKHN0ZXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVNjcm9sbEVuZFBvc2l0aW9uKCR0YXJnZXRFbCkge1xuICAgICAgLy8gSWYgYSBmaXhlZCBoZWFkZXIgZXhpc3RzLCBvZmZzZXQgZm9yIHRoZSBoZWlnaHRcbiAgICAgIHZhciAkaGVhZGVyID0gJChoZWFkZXJTZWxlY3Rvcik7XG4gICAgICB2YXIgb2Zmc2V0WSA9XG4gICAgICAgICRoZWFkZXIuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnID8gJGhlYWRlci5vdXRlckhlaWdodCgpIDogMDtcbiAgICAgIHZhciBlbmQgPSAkdGFyZ2V0RWwub2Zmc2V0KCkudG9wIC0gb2Zmc2V0WTtcblxuICAgICAgLy8gSWYgc3BlY2lmaWVkLCBzY3JvbGwgc28gdGhhdCB0aGUgZWxlbWVudCBlbmRzIHVwIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpZXdwb3J0XG4gICAgICBpZiAoJHRhcmdldEVsLmRhdGEoJ3Njcm9sbCcpID09PSAnbWlkJykge1xuICAgICAgICB2YXIgYXZhaWxhYmxlID0gJHdpbi5oZWlnaHQoKSAtIG9mZnNldFk7XG4gICAgICAgIHZhciBlbEhlaWdodCA9ICR0YXJnZXRFbC5vdXRlckhlaWdodCgpO1xuICAgICAgICBpZiAoZWxIZWlnaHQgPCBhdmFpbGFibGUpIHtcbiAgICAgICAgICBlbmQgLT0gTWF0aC5yb3VuZCgoYXZhaWxhYmxlIC0gZWxIZWlnaHQpIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlU2Nyb2xsRHVyYXRpb24oJHRhcmdldEVsLCBzdGFydCwgZW5kKSB7XG4gICAgICBpZiAocmVkdWNlZE1vdGlvbkVuYWJsZWQoKSkgcmV0dXJuIDA7XG5cbiAgICAgIHZhciBtdWx0ID0gMTtcbiAgICAgIC8vIENoZWNrIGZvciBjdXN0b20gdGltZSBtdWx0aXBsaWVyIG9uIHRoZSBib2R5IGFuZCB0aGUgc2Nyb2xsIHRhcmdldFxuICAgICAgJGJvZHkuYWRkKCR0YXJnZXRFbCkuZWFjaChmdW5jdGlvbiAoXywgZWwpIHtcbiAgICAgICAgdmFyIHRpbWUgPSBwYXJzZUZsb2F0KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtdGltZScpKTtcbiAgICAgICAgaWYgKCFpc05hTih0aW1lKSAmJiB0aW1lID49IDApIHtcbiAgICAgICAgICBtdWx0ID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoNDcyLjE0MyAqIE1hdGgubG9nKE1hdGguYWJzKHN0YXJ0IC0gZW5kKSArIDEyNSkgLSAyMDAwKSAqIG11bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0WShzdGFydCwgZW5kLCBlbGFwc2VkLCBkdXJhdGlvbikge1xuICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gZW5kO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogZWFzZShlbGFwc2VkIC8gZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVhc2UodCkge1xuICAgICAgcmV0dXJuIHQgPCAwLjUgPyA0ICogdCAqIHQgKiB0IDogKHQgLSAxKSAqICgyICogdCAtIDIpICogKDIgKiB0IC0gMikgKyAxO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgIHZhciB7V0ZfQ0xJQ0tfRU1QVFksIFdGX0NMSUNLX1NDUk9MTH0gPSBOU19FVkVOVFM7XG5cbiAgICAgICRkb2Mub24oV0ZfQ0xJQ0tfU0NST0xMLCBsb2NhbEhyZWZTZWxlY3RvciwgdmFsaWRhdGVTY3JvbGwpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFByZXZlbnQgZW1wdHkgaGFzaCBsaW5rcyBmcm9tIHRyaWdnZXJpbmcgc2Nyb2xsLlxuICAgICAgICogTGVnYWN5IGZlYXR1cmUgdG8gcHJlc2VydmU6IHVzZSB0aGUgZGVmYXVsdCBcIiNcIiBsaW5rXG4gICAgICAgKiB0byB0cmlnZ2VyIGFuIGludGVyYWN0aW9uLCBhbmQgZG8gbm90IHdhbnQgdGhlIHBhZ2VcbiAgICAgICAqIHRvIHNjcm9sbCB0byB0aGUgdG9wLlxuICAgICAgICovXG4gICAgICAkZG9jLm9uKFdGX0NMSUNLX0VNUFRZLCBlbXB0eUhyZWZTZWxlY3RvciwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGZvY3VzU3R5bGVzRWwsIGRvY3VtZW50LmhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IG1vZHVsZVxuICAgIHJldHVybiB7cmVhZHl9O1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiTlNfRVZFTlRTIiwiV0ZfQ0xJQ0tfRU1QVFkiLCJXRl9DTElDS19TQ1JPTEwiLCJsb2MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhpc3RvcnkiLCJpbklmcmFtZSIsIiR3aW4iLCIkZG9jIiwiZG9jdW1lbnQiLCIkYm9keSIsImJvZHkiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm4iLCJzZXRUaW1lb3V0Iiwicm9vdFRhZyIsImVudiIsImhlYWRlclNlbGVjdG9yIiwiZW1wdHlIcmVmU2VsZWN0b3IiLCJsb2NhbEhyZWZTZWxlY3RvciIsInNjcm9sbFRhcmdldE91dGxpbmVDU1MiLCJmb2N1c1N0eWxlc0VsIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJCb29sZWFuIiwiZnJhbWVFbGVtZW50IiwiZSIsInZhbGlkSGFzaCIsImxpbmtzVG9DdXJyZW50UGFnZSIsImxpbmsiLCJ0ZXN0IiwiaGFzaCIsImhvc3QiLCJwYXRobmFtZSIsInJlZHVjZWRNb3Rpb25NZWRpYVF1ZXJ5IiwibWF0Y2hNZWRpYSIsInJlZHVjZWRNb3Rpb25FbmFibGVkIiwiZ2V0QXR0cmlidXRlIiwibWF0Y2hlcyIsInNldEZvY3VzYWJsZSIsIiRlbCIsImFjdGlvbiIsImluaXRpYWxUYWJpbmRleCIsImF0dHIiLCJyZW1vdmVBdHRyIiwidG9nZ2xlQ2xhc3MiLCJ2YWxpZGF0ZVNjcm9sbCIsImV2dCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtb2JpbGUiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInVwZGF0ZUhpc3RvcnkiLCJzY3JvbGwiLCJzZXRGb2N1cyIsImdldCIsImZvY3VzIiwicHJldmVudFNjcm9sbCIsInB1c2hTdGF0ZSIsImNocm9tZSIsInByb3RvY29sIiwib2xkSGFzaCIsInN0YXRlIiwiJHRhcmdldEVsIiwiY2IiLCJzdGFydCIsInNjcm9sbFRvcCIsImVuZCIsImNhbGN1bGF0ZVNjcm9sbEVuZFBvc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbiIsImNsb2NrIiwiRGF0ZSIsIm5vdyIsInN0ZXAiLCJlbGFwc2VkIiwiZ2V0WSIsIiRoZWFkZXIiLCJvZmZzZXRZIiwiY3NzIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJkYXRhIiwiYXZhaWxhYmxlIiwiaGVpZ2h0IiwiZWxIZWlnaHQiLCJNYXRoIiwicm91bmQiLCJtdWx0IiwiYWRkIiwiZWFjaCIsIl8iLCJlbCIsInRpbWUiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJsb2ciLCJhYnMiLCJlYXNlIiwidCIsInJlYWR5Iiwib24iLCJoZWFkIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCLEdBRTVCOztDQUVDO0FBRUQsSUFBSUEsVUFBVUMsUUFBUTtBQUV0QkQsUUFBUUUsTUFBTSxDQUNaLFVBQ0NDLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxDQUFDO0lBQzNCOzs7Ozs7S0FNQyxHQUNELElBQUlDLFlBQVk7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxpQkFBaUI7SUFDbkI7SUFFQSxJQUFJQyxNQUFNQyxPQUFPQyxRQUFRO0lBQ3pCLElBQUlDLFVBQVVDLGFBQWEsT0FBT0gsT0FBT0UsT0FBTztJQUNoRCxJQUFJRSxPQUFPVCxFQUFFSztJQUNiLElBQUlLLE9BQU9WLEVBQUVXO0lBQ2IsSUFBSUMsUUFBUVosRUFBRVcsU0FBU0UsSUFBSTtJQUUzQixJQUFJQyxVQUNGVCxPQUFPVSxxQkFBcUIsSUFDNUJWLE9BQU9XLHdCQUF3QixJQUMvQlgsT0FBT1ksMkJBQTJCLElBQ2xDLFNBQVVDLEVBQUU7UUFDVmIsT0FBT2MsVUFBVSxDQUFDRCxJQUFJO0lBQ3hCO0lBQ0YsSUFBSUUsVUFBVXpCLFFBQVEwQixHQUFHLENBQUMsWUFBWSxtQkFBbUI7SUFDekQsSUFBSUMsaUJBQ0YsYUFDQUYsVUFDQSxpQkFDQUEsVUFDQTtJQUVGLElBQUlHLG9CQUFvQjtJQUV4Qjs7Ozs7S0FLQyxHQUNELElBQUlDLG9CQUNGLHVDQUF1Q0Qsb0JBQW9CO0lBRTdELElBQUlFLHlCQUNGO0lBRUYsSUFBSUMsZ0JBQWdCZixTQUFTZ0IsYUFBYSxDQUFDO0lBQzNDRCxjQUFjRSxXQUFXLENBQUNqQixTQUFTa0IsY0FBYyxDQUFDSjtJQUVsRCxTQUFTakI7UUFDUCxJQUFJO1lBQ0YsT0FBT3NCLFFBQVF6QixPQUFPMEIsWUFBWTtRQUNwQyxFQUFFLE9BQU9DLEdBQUc7WUFDVixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlDLFlBQVk7SUFFaEI7OztLQUdDLEdBQ0QsU0FBU0MsbUJBQW1CQyxJQUFJO1FBQzlCLE9BQ0VGLFVBQVVHLElBQUksQ0FBQ0QsS0FBS0UsSUFBSSxLQUN4QkYsS0FBS0csSUFBSSxHQUFHSCxLQUFLSSxRQUFRLEtBQUtuQyxJQUFJa0MsSUFBSSxHQUFHbEMsSUFBSW1DLFFBQVE7SUFFekQ7SUFFQTs7OztLQUlDLEdBQ0QsTUFBTUMsMEJBQ0osT0FBT25DLE9BQU9vQyxVQUFVLEtBQUssY0FDN0JwQyxPQUFPb0MsVUFBVSxDQUFDO0lBQ3BCLFNBQVNDO1FBQ1AsT0FDRS9CLFNBQVNFLElBQUksQ0FBQzhCLFlBQVksQ0FBQyw2QkFBNkIsVUFDeERILHdCQUF3QkksT0FBTztJQUVuQztJQUVBLFNBQVNDLGFBQWFDLEdBQUcsRUFBRUMsTUFBTTtRQUMvQixJQUFJQztRQUVKLE9BQVFEO1lBQ04sS0FBSztnQkFDSEMsa0JBQWtCRixJQUFJRyxJQUFJLENBQUM7Z0JBRTNCLElBQUlELGlCQUFpQjtvQkFDbkJGLElBQUlHLElBQUksQ0FBQyx5QkFBeUJEO2dCQUNwQyxPQUFPO29CQUNMRixJQUFJRyxJQUFJLENBQUMsWUFBWTtnQkFDdkI7Z0JBQ0E7WUFFRixLQUFLO2dCQUNIRCxrQkFBa0JGLElBQUlHLElBQUksQ0FBQztnQkFDM0IsSUFBSUQsaUJBQWlCO29CQUNuQkYsSUFBSUcsSUFBSSxDQUFDLFlBQVlEO29CQUNyQkYsSUFBSUksVUFBVSxDQUFDO2dCQUNqQixPQUFPO29CQUNMSixJQUFJSSxVQUFVLENBQUM7Z0JBQ2pCO2dCQUNBO1FBQ0o7UUFFQUosSUFBSUssV0FBVyxDQUFDLHlCQUF5QkosV0FBVztJQUN0RDtJQUVBOztLQUVDLEdBQ0QsU0FBU0ssZUFBZUMsR0FBRztRQUN6QixJQUFJQyxTQUFTRCxJQUFJRSxhQUFhO1FBQzlCLElBQ0Usc0JBQXNCO1FBQ3RCNUQsUUFBUTBCLEdBQUcsQ0FBQyxhQUNaLDJDQUEyQztRQUMxQ2hCLE9BQU9MLENBQUMsQ0FBQ3dELE1BQU0sSUFBSSwwQkFBMEJwQixJQUFJLENBQUNrQixPQUFPRyxTQUFTLEdBQ25FO1lBQ0E7UUFDRjtRQUVBLElBQUlwQixPQUFPSCxtQkFBbUJvQixVQUFVQSxPQUFPakIsSUFBSSxHQUFHO1FBQ3RELElBQUlBLFNBQVMsSUFBSTtRQUVqQixJQUFJUyxNQUFNOUMsRUFBRXFDO1FBQ1osSUFBSSxDQUFDUyxJQUFJWSxNQUFNLEVBQUU7WUFDZjtRQUNGO1FBRUEsSUFBSUwsS0FBSztZQUNQQSxJQUFJTSxjQUFjO1lBQ2xCTixJQUFJTyxlQUFlO1FBQ3JCO1FBRUFDLGNBQWN4QixNQUFNZ0I7UUFFcEJoRCxPQUFPYyxVQUFVLENBQ2Y7WUFDRTJDLE9BQU9oQixLQUFLLFNBQVNpQjtnQkFDbkJsQixhQUFhQyxLQUFLO2dCQUNsQkEsSUFBSWtCLEdBQUcsQ0FBQyxHQUFHQyxLQUFLLENBQUM7b0JBQUNDLGVBQWU7Z0JBQUk7Z0JBQ3JDckIsYUFBYUMsS0FBSztZQUNwQjtRQUNGLEdBQ0FPLE1BQU0sSUFBSTtJQUVkO0lBRUEsU0FBU1EsY0FBY3hCLElBQUk7UUFDekIseUJBQXlCO1FBQ3pCLElBQ0VqQyxJQUFJaUMsSUFBSSxLQUFLQSxRQUNiOUIsV0FDQUEsUUFBUTRELFNBQVMsSUFDakIseURBQXlEO1FBQ3pELENBQUV4RSxDQUFBQSxRQUFRMEIsR0FBRyxDQUFDK0MsTUFBTSxJQUFJaEUsSUFBSWlFLFFBQVEsS0FBSyxPQUFNLEdBQy9DO1lBQ0EsSUFBSUMsVUFBVS9ELFFBQVFnRSxLQUFLLElBQUloRSxRQUFRZ0UsS0FBSyxDQUFDbEMsSUFBSTtZQUNqRCxJQUFJaUMsWUFBWWpDLE1BQU07Z0JBQ3BCOUIsUUFBUTRELFNBQVMsQ0FBQztvQkFBQzlCO2dCQUFJLEdBQUcsSUFBSUE7WUFDaEM7UUFDRjtJQUNGO0lBRUEsU0FBU3lCLE9BQU9VLFNBQVMsRUFBRUMsRUFBRTtRQUMzQixJQUFJQyxRQUFRakUsS0FBS2tFLFNBQVM7UUFDMUIsSUFBSUMsTUFBTUMsMkJBQTJCTDtRQUVyQyxJQUFJRSxVQUFVRSxLQUFLO1FBRW5CLElBQUlFLFdBQVdDLHdCQUF3QlAsV0FBV0UsT0FBT0U7UUFFekQsSUFBSUksUUFBUUMsS0FBS0MsR0FBRztRQUNwQixJQUFJQyxPQUFPO1lBQ1QsSUFBSUMsVUFBVUgsS0FBS0MsR0FBRyxLQUFLRjtZQUMzQjNFLE9BQU95RCxNQUFNLENBQUMsR0FBR3VCLEtBQUtYLE9BQU9FLEtBQUtRLFNBQVNOO1lBRTNDLElBQUlNLFdBQVdOLFVBQVU7Z0JBQ3ZCaEUsUUFBUXFFO1lBQ1YsT0FBTyxJQUFJLE9BQU9WLE9BQU8sWUFBWTtnQkFDbkNBO1lBQ0Y7UUFDRjtRQUVBM0QsUUFBUXFFO0lBQ1Y7SUFFQSxTQUFTTiwyQkFBMkJMLFNBQVM7UUFDM0Msa0RBQWtEO1FBQ2xELElBQUljLFVBQVV0RixFQUFFc0I7UUFDaEIsSUFBSWlFLFVBQ0ZELFFBQVFFLEdBQUcsQ0FBQyxnQkFBZ0IsVUFBVUYsUUFBUUcsV0FBVyxLQUFLO1FBQ2hFLElBQUliLE1BQU1KLFVBQVVrQixNQUFNLEdBQUdDLEdBQUcsR0FBR0o7UUFFbkMsaUZBQWlGO1FBQ2pGLElBQUlmLFVBQVVvQixJQUFJLENBQUMsY0FBYyxPQUFPO1lBQ3RDLElBQUlDLFlBQVlwRixLQUFLcUYsTUFBTSxLQUFLUDtZQUNoQyxJQUFJUSxXQUFXdkIsVUFBVWlCLFdBQVc7WUFDcEMsSUFBSU0sV0FBV0YsV0FBVztnQkFDeEJqQixPQUFPb0IsS0FBS0MsS0FBSyxDQUFDLEFBQUNKLENBQUFBLFlBQVlFLFFBQU8sSUFBSztZQUM3QztRQUNGO1FBQ0EsT0FBT25CO0lBQ1Q7SUFFQSxTQUFTRyx3QkFBd0JQLFNBQVMsRUFBRUUsS0FBSyxFQUFFRSxHQUFHO1FBQ3BELElBQUlsQyx3QkFBd0IsT0FBTztRQUVuQyxJQUFJd0QsT0FBTztRQUNYLHFFQUFxRTtRQUNyRXRGLE1BQU11RixHQUFHLENBQUMzQixXQUFXNEIsSUFBSSxDQUFDLFNBQVVDLENBQUMsRUFBRUMsRUFBRTtZQUN2QyxJQUFJQyxPQUFPQyxXQUFXRixHQUFHM0QsWUFBWSxDQUFDO1lBQ3RDLElBQUksQ0FBQzhELE1BQU1GLFNBQVNBLFFBQVEsR0FBRztnQkFDN0JMLE9BQU9LO1lBQ1Q7UUFDRjtRQUVBLE9BQU8sQUFBQyxDQUFBLFVBQVVQLEtBQUtVLEdBQUcsQ0FBQ1YsS0FBS1csR0FBRyxDQUFDakMsUUFBUUUsT0FBTyxPQUFPLElBQUcsSUFBS3NCO0lBQ3BFO0lBRUEsU0FBU2IsS0FBS1gsS0FBSyxFQUFFRSxHQUFHLEVBQUVRLE9BQU8sRUFBRU4sUUFBUTtRQUN6QyxJQUFJTSxVQUFVTixVQUFVO1lBQ3RCLE9BQU9GO1FBQ1Q7UUFFQSxPQUFPRixRQUFRLEFBQUNFLENBQUFBLE1BQU1GLEtBQUksSUFBS2tDLEtBQUt4QixVQUFVTjtJQUNoRDtJQUVBLFNBQVM4QixLQUFLQyxDQUFDO1FBQ2IsT0FBT0EsSUFBSSxNQUFNLElBQUlBLElBQUlBLElBQUlBLElBQUksQUFBQ0EsQ0FBQUEsSUFBSSxDQUFBLElBQU0sQ0FBQSxJQUFJQSxJQUFJLENBQUEsSUFBTSxDQUFBLElBQUlBLElBQUksQ0FBQSxJQUFLO0lBQ3pFO0lBQ0EsU0FBU0M7UUFDUCxJQUFJLEVBQUM1RyxjQUFjLEVBQUVDLGVBQWUsRUFBQyxHQUFHRjtRQUV4Q1MsS0FBS3FHLEVBQUUsQ0FBQzVHLGlCQUFpQnFCLG1CQUFtQjRCO1FBRTVDOzs7OztPQUtDLEdBQ0QxQyxLQUFLcUcsRUFBRSxDQUFDN0csZ0JBQWdCcUIsbUJBQW1CLFNBQVVTLENBQUM7WUFDcERBLEVBQUUyQixjQUFjO1FBQ2xCO1FBRUFoRCxTQUFTcUcsSUFBSSxDQUFDQyxZQUFZLENBQUN2RixlQUFlZixTQUFTcUcsSUFBSSxDQUFDRSxVQUFVO0lBQ3BFO0lBRUEsZ0JBQWdCO0lBQ2hCLE9BQU87UUFBQ0o7SUFBSztBQUNmIn0=

}),

}]);