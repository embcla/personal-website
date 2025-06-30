"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["258"], {
7624: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: Auto-select links to current page or section
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('links', module.exports = function($, _) {
    var api = {};
    var $win = $(window);
    var designer;
    var inApp = Webflow.env();
    var location = window.location;
    var tempLink = document.createElement('a');
    var linkCurrent = 'w--current';
    var indexPage = /index\.(html|php)$/;
    var dirList = /\/$/;
    var anchors;
    var slug;
    // -----------------------------------
    // Module methods
    api.ready = api.design = api.preview = init;
    // -----------------------------------
    // Private methods
    function init() {
        designer = inApp && Webflow.env('design');
        slug = Webflow.env('slug') || location.pathname || '';
        // Reset scroll listener, init anchors
        Webflow.scroll.off(scroll);
        anchors = [];
        // Test all links for a selectable href
        var links = document.links;
        for(var i = 0; i < links.length; ++i){
            select(links[i]);
        }
        // Listen for scroll if any anchors exist
        if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
        }
    }
    function select(link) {
        // Ignore localized links
        if (link.getAttribute('hreflang')) {
            return;
        }
        var href = designer && link.getAttribute('href-disabled') || link.getAttribute('href');
        tempLink.href = href;
        // Ignore any hrefs with a colon to safely avoid all uri schemes
        if (href.indexOf(':') >= 0) {
            return;
        }
        var $link = $(link);
        // Check for all links with hash (eg (this-host)(/this-path)#section) to this page
        if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            // Ignore any hrefs with Google Translate type hash
            // Example: jQuery can't parse $('#googtrans(en|es)')
            // https://forum.webflow.com/t/dropdown-menus-not-working-on-site/87140
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
                return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
                link: $link,
                sec: $section,
                active: false
            });
            return;
        }
        // Ignore empty # links
        if (href === '#' || href === '') {
            return;
        }
        // Determine whether the link should be selected
        var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
        setClass($link, linkCurrent, match);
    }
    function scroll() {
        var viewTop = $win.scrollTop();
        var viewHeight = $win.height();
        // Check each anchor for a section in view
        _.each(anchors, function(anchor) {
            // Ignore localized links
            if (anchor.link.attr('hreflang')) {
                return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(':visible') && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
                return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
        });
    }
    function setClass($elem, className, add) {
        var exists = $elem.hasClass(className);
        if (add && exists) {
            return;
        }
        if (!add && !exists) {
            return;
        }
        add ? $elem.addClass(className) : $elem.removeClass(className);
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctbGlua3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyB3aW5kb3csIGRvY3VtZW50ICovXG5cbi8qKlxuICogV2ViZmxvdzogQXV0by1zZWxlY3QgbGlua3MgdG8gY3VycmVudCBwYWdlIG9yIHNlY3Rpb25cbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4vd2ViZmxvdy1saWInKTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdsaW5rcycsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkLCBfKSB7XG4gICAgdmFyIGFwaSA9IHt9O1xuICAgIHZhciAkd2luID0gJCh3aW5kb3cpO1xuICAgIHZhciBkZXNpZ25lcjtcbiAgICB2YXIgaW5BcHAgPSBXZWJmbG93LmVudigpO1xuICAgIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgdGVtcExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIGxpbmtDdXJyZW50ID0gJ3ctLWN1cnJlbnQnO1xuICAgIHZhciBpbmRleFBhZ2UgPSAvaW5kZXhcXC4oaHRtbHxwaHApJC87XG4gICAgdmFyIGRpckxpc3QgPSAvXFwvJC87XG4gICAgdmFyIGFuY2hvcnM7XG4gICAgdmFyIHNsdWc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1vZHVsZSBtZXRob2RzXG5cbiAgICBhcGkucmVhZHkgPSBhcGkuZGVzaWduID0gYXBpLnByZXZpZXcgPSBpbml0O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBkZXNpZ25lciA9IGluQXBwICYmIFdlYmZsb3cuZW52KCdkZXNpZ24nKTtcbiAgICAgIHNsdWcgPSBXZWJmbG93LmVudignc2x1ZycpIHx8IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcnO1xuXG4gICAgICAvLyBSZXNldCBzY3JvbGwgbGlzdGVuZXIsIGluaXQgYW5jaG9yc1xuICAgICAgV2ViZmxvdy5zY3JvbGwub2ZmKHNjcm9sbCk7XG4gICAgICBhbmNob3JzID0gW107XG5cbiAgICAgIC8vIFRlc3QgYWxsIGxpbmtzIGZvciBhIHNlbGVjdGFibGUgaHJlZlxuICAgICAgdmFyIGxpbmtzID0gZG9jdW1lbnQubGlua3M7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHNlbGVjdChsaW5rc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExpc3RlbiBmb3Igc2Nyb2xsIGlmIGFueSBhbmNob3JzIGV4aXN0XG4gICAgICBpZiAoYW5jaG9ycy5sZW5ndGgpIHtcbiAgICAgICAgV2ViZmxvdy5zY3JvbGwub24oc2Nyb2xsKTtcbiAgICAgICAgc2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0KGxpbmspIHtcbiAgICAgIC8vIElnbm9yZSBsb2NhbGl6ZWQgbGlua3NcbiAgICAgIGlmIChsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZmxhbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBocmVmID1cbiAgICAgICAgKGRlc2lnbmVyICYmIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmLWRpc2FibGVkJykpIHx8XG4gICAgICAgIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB0ZW1wTGluay5ocmVmID0gaHJlZjtcblxuICAgICAgLy8gSWdub3JlIGFueSBocmVmcyB3aXRoIGEgY29sb24gdG8gc2FmZWx5IGF2b2lkIGFsbCB1cmkgc2NoZW1lc1xuICAgICAgaWYgKGhyZWYuaW5kZXhPZignOicpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGxpbmsgPSAkKGxpbmspO1xuXG4gICAgICAvLyBDaGVjayBmb3IgYWxsIGxpbmtzIHdpdGggaGFzaCAoZWcgKHRoaXMtaG9zdCkoL3RoaXMtcGF0aCkjc2VjdGlvbikgdG8gdGhpcyBwYWdlXG4gICAgICBpZiAoXG4gICAgICAgIHRlbXBMaW5rLmhhc2gubGVuZ3RoID4gMSAmJlxuICAgICAgICB0ZW1wTGluay5ob3N0ICsgdGVtcExpbmsucGF0aG5hbWUgPT09IGxvY2F0aW9uLmhvc3QgKyBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgKSB7XG4gICAgICAgIC8vIElnbm9yZSBhbnkgaHJlZnMgd2l0aCBHb29nbGUgVHJhbnNsYXRlIHR5cGUgaGFzaFxuICAgICAgICAvLyBFeGFtcGxlOiBqUXVlcnkgY2FuJ3QgcGFyc2UgJCgnI2dvb2d0cmFucyhlbnxlcyknKVxuICAgICAgICAvLyBodHRwczovL2ZvcnVtLndlYmZsb3cuY29tL3QvZHJvcGRvd24tbWVudXMtbm90LXdvcmtpbmctb24tc2l0ZS84NzE0MFxuICAgICAgICBpZiAoIS9eI1thLXpBLVowLTlcXC1cXF9dKyQvLnRlc3QodGVtcExpbmsuaGFzaCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHNlY3Rpb24gPSAkKHRlbXBMaW5rLmhhc2gpO1xuICAgICAgICAkc2VjdGlvbi5sZW5ndGggJiZcbiAgICAgICAgICBhbmNob3JzLnB1c2goe1xuICAgICAgICAgICAgbGluazogJGxpbmssXG4gICAgICAgICAgICBzZWM6ICRzZWN0aW9uLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZ25vcmUgZW1wdHkgIyBsaW5rc1xuICAgICAgaWYgKGhyZWYgPT09ICcjJyB8fCBocmVmID09PSAnJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIHRoZSBsaW5rIHNob3VsZCBiZSBzZWxlY3RlZFxuICAgICAgdmFyIG1hdGNoID1cbiAgICAgICAgdGVtcExpbmsuaHJlZiA9PT0gbG9jYXRpb24uaHJlZiB8fFxuICAgICAgICBocmVmID09PSBzbHVnIHx8XG4gICAgICAgIChpbmRleFBhZ2UudGVzdChocmVmKSAmJiBkaXJMaXN0LnRlc3Qoc2x1ZykpO1xuICAgICAgc2V0Q2xhc3MoJGxpbmssIGxpbmtDdXJyZW50LCBtYXRjaCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgdmFyIHZpZXdUb3AgPSAkd2luLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIHZpZXdIZWlnaHQgPSAkd2luLmhlaWdodCgpO1xuXG4gICAgICAvLyBDaGVjayBlYWNoIGFuY2hvciBmb3IgYSBzZWN0aW9uIGluIHZpZXdcbiAgICAgIF8uZWFjaChhbmNob3JzLCBmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgICAgIC8vIElnbm9yZSBsb2NhbGl6ZWQgbGlua3NcbiAgICAgICAgaWYgKGFuY2hvci5saW5rLmF0dHIoJ2hyZWZsYW5nJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGxpbmsgPSBhbmNob3IubGluaztcbiAgICAgICAgdmFyICRzZWN0aW9uID0gYW5jaG9yLnNlYztcbiAgICAgICAgdmFyIHRvcCA9ICRzZWN0aW9uLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIGhlaWdodCA9ICRzZWN0aW9uLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIHZhciBvZmZzZXQgPSB2aWV3SGVpZ2h0ICogMC41O1xuICAgICAgICB2YXIgYWN0aXZlID1cbiAgICAgICAgICAkc2VjdGlvbi5pcygnOnZpc2libGUnKSAmJlxuICAgICAgICAgIHRvcCArIGhlaWdodCAtIG9mZnNldCA+PSB2aWV3VG9wICYmXG4gICAgICAgICAgdG9wICsgb2Zmc2V0IDw9IHZpZXdUb3AgKyB2aWV3SGVpZ2h0O1xuICAgICAgICBpZiAoYW5jaG9yLmFjdGl2ZSA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFuY2hvci5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIHNldENsYXNzKCRsaW5rLCBsaW5rQ3VycmVudCwgYWN0aXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENsYXNzKCRlbGVtLCBjbGFzc05hbWUsIGFkZCkge1xuICAgICAgdmFyIGV4aXN0cyA9ICRlbGVtLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG4gICAgICBpZiAoYWRkICYmIGV4aXN0cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWFkZCAmJiAhZXhpc3RzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFkZCA/ICRlbGVtLmFkZENsYXNzKGNsYXNzTmFtZSkgOiAkZWxlbS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4gYXBpO1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiXyIsImFwaSIsIiR3aW4iLCJ3aW5kb3ciLCJkZXNpZ25lciIsImluQXBwIiwiZW52IiwibG9jYXRpb24iLCJ0ZW1wTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImxpbmtDdXJyZW50IiwiaW5kZXhQYWdlIiwiZGlyTGlzdCIsImFuY2hvcnMiLCJzbHVnIiwicmVhZHkiLCJkZXNpZ24iLCJwcmV2aWV3IiwiaW5pdCIsInBhdGhuYW1lIiwic2Nyb2xsIiwib2ZmIiwibGlua3MiLCJpIiwibGVuZ3RoIiwic2VsZWN0Iiwib24iLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiaHJlZiIsImluZGV4T2YiLCIkbGluayIsImhhc2giLCJob3N0IiwidGVzdCIsIiRzZWN0aW9uIiwicHVzaCIsInNlYyIsImFjdGl2ZSIsIm1hdGNoIiwic2V0Q2xhc3MiLCJ2aWV3VG9wIiwic2Nyb2xsVG9wIiwidmlld0hlaWdodCIsImhlaWdodCIsImVhY2giLCJhbmNob3IiLCJhdHRyIiwidG9wIiwib2Zmc2V0Iiwib3V0ZXJIZWlnaHQiLCJpcyIsIiRlbGVtIiwiY2xhc3NOYW1lIiwiYWRkIiwiZXhpc3RzIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCRCxRQUFRRSxNQUFNLENBQ1osU0FDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUMsRUFBRUMsQ0FBQztJQUM5QixJQUFJQyxNQUFNLENBQUM7SUFDWCxJQUFJQyxPQUFPSCxFQUFFSTtJQUNiLElBQUlDO0lBQ0osSUFBSUMsUUFBUVgsUUFBUVksR0FBRztJQUN2QixJQUFJQyxXQUFXSixPQUFPSSxRQUFRO0lBQzlCLElBQUlDLFdBQVdDLFNBQVNDLGFBQWEsQ0FBQztJQUN0QyxJQUFJQyxjQUFjO0lBQ2xCLElBQUlDLFlBQVk7SUFDaEIsSUFBSUMsVUFBVTtJQUNkLElBQUlDO0lBQ0osSUFBSUM7SUFFSixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBRWpCZCxJQUFJZSxLQUFLLEdBQUdmLElBQUlnQixNQUFNLEdBQUdoQixJQUFJaUIsT0FBTyxHQUFHQztJQUV2QyxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBRWxCLFNBQVNBO1FBQ1BmLFdBQVdDLFNBQVNYLFFBQVFZLEdBQUcsQ0FBQztRQUNoQ1MsT0FBT3JCLFFBQVFZLEdBQUcsQ0FBQyxXQUFXQyxTQUFTYSxRQUFRLElBQUk7UUFFbkQsc0NBQXNDO1FBQ3RDMUIsUUFBUTJCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDRDtRQUNuQlAsVUFBVSxFQUFFO1FBRVosdUNBQXVDO1FBQ3ZDLElBQUlTLFFBQVFkLFNBQVNjLEtBQUs7UUFDMUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlELE1BQU1FLE1BQU0sRUFBRSxFQUFFRCxF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

}),

}]);