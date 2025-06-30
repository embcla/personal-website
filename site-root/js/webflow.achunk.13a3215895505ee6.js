"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["456"], {
9461: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals document, window, navigator */ /**
 * Webflow: Brand pages on the subdomain
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('brand', module.exports = function($) {
    var api = {};
    var doc = document;
    var $html = $('html');
    var $body = $('body');
    var namespace = '.w-webflow-badge';
    var location = window.location;
    var isPhantom = /PhantomJS/i.test(navigator.userAgent);
    var fullScreenEvents = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
    var brandElement;
    // -----------------------------------
    // Module methods
    api.ready = function() {
        var shouldBrand = $html.attr('data-wf-status');
        var publishedDomain = $html.attr('data-wf-domain') || '';
        if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
        }
        if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
        }
    };
    function onFullScreenChange() {
        var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
        $(brandElement).attr('style', fullScreen ? 'display: none !important;' : '');
    }
    function createBadge() {
        var $brand = $('<a class="w-webflow-badge"></a>').attr('href', 'https://webflow.com?utm_campaign=brandjs');
        var $logoArt = $('<img>').attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg').attr('alt', '').css({
            marginRight: '4px',
            width: '26px'
        });
        var $logoText = $('<img>').attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg').attr('alt', 'Made in Webflow');
        $brand.append($logoArt, $logoText);
        return $brand[0];
    }
    function ensureBrand() {
        var found = $body.children(namespace);
        var match = found.length && found.get(0) === brandElement;
        var inEditor = Webflow.env('editor');
        if (match) {
            // Remove brand when Editor is active
            if (inEditor) {
                found.remove();
            }
            // Exit early, brand is in place
            return;
        }
        // Remove any invalid brand elements
        if (found.length) {
            found.remove();
        }
        // Append the brand (unless Editor is active)
        if (!inEditor) {
            $body.append(brandElement);
        }
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctYnJhbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyBkb2N1bWVudCwgd2luZG93LCBuYXZpZ2F0b3IgKi9cblxuLyoqXG4gKiBXZWJmbG93OiBCcmFuZCBwYWdlcyBvbiB0aGUgc3ViZG9tYWluXG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG5cbldlYmZsb3cuZGVmaW5lKFxuICAnYnJhbmQnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJCkge1xuICAgIHZhciBhcGkgPSB7fTtcbiAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gICAgdmFyICRodG1sID0gJCgnaHRtbCcpO1xuICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICB2YXIgbmFtZXNwYWNlID0gJy53LXdlYmZsb3ctYmFkZ2UnO1xuICAgIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgaXNQaGFudG9tID0gL1BoYW50b21KUy9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIGZ1bGxTY3JlZW5FdmVudHMgPVxuICAgICAgJ2Z1bGxzY3JlZW5jaGFuZ2Ugd2Via2l0ZnVsbHNjcmVlbmNoYW5nZSBtb3pmdWxsc2NyZWVuY2hhbmdlIG1zZnVsbHNjcmVlbmNoYW5nZSc7XG4gICAgdmFyIGJyYW5kRWxlbWVudDtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTW9kdWxlIG1ldGhvZHNcblxuICAgIGFwaS5yZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzaG91bGRCcmFuZCA9ICRodG1sLmF0dHIoJ2RhdGEtd2Ytc3RhdHVzJyk7XG4gICAgICB2YXIgcHVibGlzaGVkRG9tYWluID0gJGh0bWwuYXR0cignZGF0YS13Zi1kb21haW4nKSB8fCAnJztcbiAgICAgIGlmIChcbiAgICAgICAgL1xcLndlYmZsb3dcXC5pbyQvaS50ZXN0KHB1Ymxpc2hlZERvbWFpbikgJiZcbiAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUgIT09IHB1Ymxpc2hlZERvbWFpblxuICAgICAgKSB7XG4gICAgICAgIHNob3VsZEJyYW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRCcmFuZCAmJiAhaXNQaGFudG9tKSB7XG4gICAgICAgIGJyYW5kRWxlbWVudCA9IGJyYW5kRWxlbWVudCB8fCBjcmVhdGVCYWRnZSgpO1xuICAgICAgICBlbnN1cmVCcmFuZCgpO1xuICAgICAgICBzZXRUaW1lb3V0KGVuc3VyZUJyYW5kLCA1MDApO1xuXG4gICAgICAgICQoZG9jKVxuICAgICAgICAgIC5vZmYoZnVsbFNjcmVlbkV2ZW50cywgb25GdWxsU2NyZWVuQ2hhbmdlKVxuICAgICAgICAgIC5vbihmdWxsU2NyZWVuRXZlbnRzLCBvbkZ1bGxTY3JlZW5DaGFuZ2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvbkZ1bGxTY3JlZW5DaGFuZ2UoKSB7XG4gICAgICB2YXIgZnVsbFNjcmVlbiA9XG4gICAgICAgIGRvYy5mdWxsU2NyZWVuIHx8XG4gICAgICAgIGRvYy5tb3pGdWxsU2NyZWVuIHx8XG4gICAgICAgIGRvYy53ZWJraXRJc0Z1bGxTY3JlZW4gfHxcbiAgICAgICAgZG9jLm1zRnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgICAgQm9vbGVhbihkb2Mud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQpO1xuICAgICAgJChicmFuZEVsZW1lbnQpLmF0dHIoXG4gICAgICAgICdzdHlsZScsXG4gICAgICAgIGZ1bGxTY3JlZW4gPyAnZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OycgOiAnJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCYWRnZSgpIHtcbiAgICAgIHZhciAkYnJhbmQgPSAkKCc8YSBjbGFzcz1cInctd2ViZmxvdy1iYWRnZVwiPjwvYT4nKS5hdHRyKFxuICAgICAgICAnaHJlZicsXG4gICAgICAgICdodHRwczovL3dlYmZsb3cuY29tP3V0bV9jYW1wYWlnbj1icmFuZGpzJ1xuICAgICAgKTtcblxuICAgICAgdmFyICRsb2dvQXJ0ID0gJCgnPGltZz4nKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAnc3JjJyxcbiAgICAgICAgICAnaHR0cHM6Ly9kM2U1NHYxMDNqOHFiYi5jbG91ZGZyb250Lm5ldC9pbWcvd2ViZmxvdy1iYWRnZS1pY29uLWQyLjg5ZTEyYzMyMmUuc3ZnJ1xuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdhbHQnLCAnJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICc0cHgnLFxuICAgICAgICAgIHdpZHRoOiAnMjZweCcsXG4gICAgICAgIH0pO1xuXG4gICAgICB2YXIgJGxvZ29UZXh0ID0gJCgnPGltZz4nKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAnc3JjJyxcbiAgICAgICAgICAnaHR0cHM6Ly9kM2U1NHYxMDNqOHFiYi5jbG91ZGZyb250Lm5ldC9pbWcvd2ViZmxvdy1iYWRnZS10ZXh0LWQyLmM4MmNlYzNiNzguc3ZnJ1xuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdhbHQnLCAnTWFkZSBpbiBXZWJmbG93Jyk7XG5cbiAgICAgICRicmFuZC5hcHBlbmQoJGxvZ29BcnQsICRsb2dvVGV4dCk7XG4gICAgICByZXR1cm4gJGJyYW5kWzBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuc3VyZUJyYW5kKCkge1xuICAgICAgdmFyIGZvdW5kID0gJGJvZHkuY2hpbGRyZW4obmFtZXNwYWNlKTtcbiAgICAgIHZhciBtYXRjaCA9IGZvdW5kLmxlbmd0aCAmJiBmb3VuZC5nZXQoMCkgPT09IGJyYW5kRWxlbWVudDtcbiAgICAgIHZhciBpbkVkaXRvciA9IFdlYmZsb3cuZW52KCdlZGl0b3InKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAvLyBSZW1vdmUgYnJhbmQgd2hlbiBFZGl0b3IgaXMgYWN0aXZlXG4gICAgICAgIGlmIChpbkVkaXRvcikge1xuICAgICAgICAgIGZvdW5kLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4aXQgZWFybHksIGJyYW5kIGlzIGluIHBsYWNlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBhbnkgaW52YWxpZCBicmFuZCBlbGVtZW50c1xuICAgICAgaWYgKGZvdW5kLmxlbmd0aCkge1xuICAgICAgICBmb3VuZC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIC8vIEFwcGVuZCB0aGUgYnJhbmQgKHVubGVzcyBFZGl0b3IgaXMgYWN0aXZlKVxuICAgICAgaWYgKCFpbkVkaXRvcikge1xuICAgICAgICAkYm9keS5hcHBlbmQoYnJhbmRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsImFwaSIsImRvYyIsImRvY3VtZW50IiwiJGh0bWwiLCIkYm9keSIsIm5hbWVzcGFjZSIsImxvY2F0aW9uIiwid2luZG93IiwiaXNQaGFudG9tIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImZ1bGxTY3JlZW5FdmVudHMiLCJicmFuZEVsZW1lbnQiLCJyZWFkeSIsInNob3VsZEJyYW5kIiwiYXR0ciIsInB1Ymxpc2hlZERvbWFpbiIsImhvc3RuYW1lIiwiY3JlYXRlQmFkZ2UiLCJlbnN1cmVCcmFuZCIsInNldFRpbWVvdXQiLCJvZmYiLCJvbkZ1bGxTY3JlZW5DaGFuZ2UiLCJvbiIsImZ1bGxTY3JlZW4iLCJtb3pGdWxsU2NyZWVuIiwid2Via2l0SXNGdWxsU2NyZWVuIiwibXNGdWxsc2NyZWVuRWxlbWVudCIsIkJvb2xlYW4iLCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCIsIiRicmFuZCIsIiRsb2dvQXJ0IiwiY3NzIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsIiRsb2dvVGV4dCIsImFwcGVuZCIsImZvdW5kIiwiY2hpbGRyZW4iLCJtYXRjaCIsImxlbmd0aCIsImdldCIsImluRWRpdG9yIiwiZW52IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUMsR0FFdkM7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCRCxRQUFRRSxNQUFNLENBQ1osU0FDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUM7SUFDM0IsSUFBSUMsTUFBTSxDQUFDO0lBQ1gsSUFBSUMsTUFBTUM7SUFDVixJQUFJQyxRQUFRSixFQUFFO0lBQ2QsSUFBSUssUUFBUUwsRUFBRTtJQUNkLElBQUlNLFlBQVk7SUFDaEIsSUFBSUMsV0FBV0MsT0FBT0QsUUFBUTtJQUM5QixJQUFJRSxZQUFZLGFBQWFDLElBQUksQ0FBQ0MsVUFBVUMsU0FBUztJQUNyRCxJQUFJQyxtQkFDRjtJQUNGLElBQUlDO0lBRUosc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUVqQmIsSUFBSWMsS0FBSyxHQUFHO1FBQ1YsSUFBSUMsY0FBY1osTUFBTWEsSUFBSSxDQUFDO1FBQzdCLElBQUlDLGtCQUFrQmQsTUFBTWEsSUFBSSxDQUFDLHFCQUFxQjtRQUN0RCxJQUNFLGtCQUFrQlAsSUFBSSxDQUFDUSxvQkFDdkJYLFNBQVNZLFFBQVEsS0FBS0QsaUJBQ3RCO1lBQ0FGLGNBQWM7UUFDaEI7UUFDQSxJQUFJQSxlQUFlLENBQUNQLFdBQVc7WUFDN0JLLGVBQWVBLGdCQUFnQk07WUFDL0JDO1lBQ0FDLFdBQVdELGFBQWE7WUFFeEJyQixFQUFFRSxLQUNDcUIsR0FBRyxDQUFDVixrQkFBa0JXLG9CQUN0QkMsRUFBRSxDQUFDWixrQkFBa0JXO1FBQzFCO0lBQ0Y7SUFFQSxTQUFTQTtRQUNQLElBQUlFLGFBQ0Z4QixJQUFJd0IsVUFBVSxJQUNkeEIsSUFBSXlCLGFBQWEsSUFDakJ6QixJQUFJMEIsa0JBQWtCLElBQ3RCMUIsSUFBSTJCLG1CQUFtQixJQUN2QkMsUUFBUTVCLElBQUk2Qix1QkFBdUI7UUFDckMvQixFQUFFYyxjQUFjRyxJQUFJLENBQ2xCLFNBQ0FTLGFBQWEsOEJBQThCO0lBRS9DO0lBRUEsU0FBU047UUFDUCxJQUFJWSxTQUFTaEMsRUFBRSxtQ0FBbUNpQixJQUFJLENBQ3BELFFBQ0E7UUFHRixJQUFJZ0IsV0FBV2pDLEVBQUUsU0FDZGlCLElBQUksQ0FDSCxPQUNBLGtGQUVEQSxJQUFJLENBQUMsT0FBTyxJQUNaaUIsR0FBRyxDQUFDO1lBQ0hDLGFBQWE7WUFDYkMsT0FBTztRQUNUO1FBRUYsSUFBSUMsWUFBWXJDLEVBQUUsU0FDZmlCLElBQUksQ0FDSCxPQUNBLGtGQUVEQSxJQUFJLENBQUMsT0FBTztRQUVmZSxPQUFPTSxNQUFNLENBQUNMLFVBQVVJO1FBQ3hCLE9BQU9MLE1BQU0sQ0FBQyxFQUFFO0lBQ2xCO0lBRUEsU0FBU1g7UUFDUCxJQUFJa0IsUUFBUWxDLE1BQU1tQyxRQUFRLENBQUNsQztRQUMzQixJQUFJbUMsUUFBUUYsTUFBTUcsTUFBTSxJQUFJSCxNQUFNSSxHQUFHLENBQUMsT0FBTzdCO1FBQzdDLElBQUk4QixXQUFXakQsUUFBUWtELEdBQUcsQ0FBQztRQUMzQixJQUFJSixPQUFPO1lBQ1QscUNBQXFDO1lBQ3JDLElBQUlHLFVBQVU7Z0JBQ1pMLE1BQU1PLE1BQU07WUFDZDtZQUNBLGdDQUFnQztZQUNoQztRQUNGO1FBQ0Esb0NBQW9DO1FBQ3BDLElBQUlQLE1BQU1HLE1BQU0sRUFBRTtZQUNoQkgsTUFBTU8sTUFBTTtRQUNkO1FBQ0EsNkNBQTZDO1FBQzdDLElBQUksQ0FBQ0YsVUFBVTtZQUNidkMsTUFBTWlDLE1BQU0sQ0FBQ3hCO1FBQ2Y7SUFDRjtJQUVBLGdCQUFnQjtJQUNoQixPQUFPYjtBQUNUIn0=

}),

}]);