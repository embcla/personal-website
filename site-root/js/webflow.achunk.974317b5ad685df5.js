"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["482"], {
5487: (function () {
/* eslint-disable eslint-comments/no-unlimited-disable */ /* eslint-disable */ /*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */ /* prettier-ignore */ 
window.tram = function(a) {
    function b(a, b) {
        var c = new M.Bare;
        return c.init(a, b);
    }
    function c(a) {
        return a.replace(/[A-Z]/g, function(a) {
            return "-" + a.toLowerCase();
        });
    }
    function d(a) {
        var b = parseInt(a.slice(1), 16), c = b >> 16 & 255, d = b >> 8 & 255, e = 255 & b;
        return [
            c,
            d,
            e
        ];
    }
    function e(a, b, c) {
        return "#" + (1 << 24 | a << 16 | b << 8 | c).toString(16).slice(1);
    }
    function f() {}
    function g(a, b) {
        j("Type warning: Expected: [" + a + "] Got: [" + typeof b + "] " + b);
    }
    function h(a, b, c) {
        j("Units do not match [" + a + "]: " + b + ", " + c);
    }
    function i(a, b, c) {
        if (void 0 !== b && (c = b), void 0 === a) return c;
        var d = c;
        return $.test(a) || !_.test(a) ? d = parseInt(a, 10) : _.test(a) && (d = 1e3 * parseFloat(a)), 0 > d && (d = 0), d === d ? d : c;
    }
    function j(a) {
        U.debug && window && window.console.warn(a);
    }
    function k(a) {
        for(var b = -1, c = a ? a.length : 0, d = []; ++b < c;){
            var e = a[b];
            e && d.push(e);
        }
        return d;
    }
    var l = function(a, b, c) {
        function d(a) {
            return "object" == typeof a;
        }
        function e(a) {
            return "function" == typeof a;
        }
        function f() {}
        function g(h, i) {
            function j() {
                var a = new k;
                return e(a.init) && a.init.apply(a, arguments), a;
            }
            function k() {}
            i === c && (i = h, h = Object), j.Bare = k;
            var l, m = f[a] = h[a], n = k[a] = j[a] = new f;
            return n.constructor = j, j.mixin = function(b) {
                return k[a] = j[a] = g(j, b)[a], j;
            }, j.open = function(a) {
                if (l = {}, e(a) ? l = a.call(j, n, m, j, h) : d(a) && (l = a), d(l)) for(var c in l)b.call(l, c) && (n[c] = l[c]);
                return e(n.init) || (n.init = h), j;
            }, j.open(i);
        }
        return g;
    }("prototype", {}.hasOwnProperty), m = {
        ease: [
            "ease",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (-2.75 * f * e + 11 * e * e + -15.5 * f + 8 * e + .25 * a);
            }
        ],
        "ease-in": [
            "ease-in",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (-1 * f * e + 3 * e * e + -3 * f + 2 * e);
            }
        ],
        "ease-out": [
            "ease-out",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (.3 * f * e + -1.6 * e * e + 2.2 * f + -1.8 * e + 1.9 * a);
            }
        ],
        "ease-in-out": [
            "ease-in-out",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (2 * f * e + -5 * e * e + 2 * f + 2 * e);
            }
        ],
        linear: [
            "linear",
            function(a, b, c, d) {
                return c * a / d + b;
            }
        ],
        "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function(a, b, c, d) {
                return c * (a /= d) * a + b;
            }
        ],
        "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function(a, b, c, d) {
                return -c * (a /= d) * (a - 2) + b;
            }
        ],
        "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b;
            }
        ],
        "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a + b;
            }
        ],
        "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a + 1) + b;
            }
        ],
        "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b;
            }
        ],
        "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a * a + b;
            }
        ],
        "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function(a, b, c, d) {
                return -c * ((a = a / d - 1) * a * a * a - 1) + b;
            }
        ],
        "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b;
            }
        ],
        "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a * a * a + b;
            }
        ],
        "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a * a * a + 1) + b;
            }
        ],
        "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b;
            }
        ],
        "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function(a, b, c, d) {
                return -c * Math.cos(a / d * (Math.PI / 2)) + c + b;
            }
        ],
        "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function(a, b, c, d) {
                return c * Math.sin(a / d * (Math.PI / 2)) + b;
            }
        ],
        "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function(a, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b;
            }
        ],
        "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function(a, b, c, d) {
                return 0 === a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b;
            }
        ],
        "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function(a, b, c, d) {
                return a === d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b;
            }
        ],
        "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function(a, b, c, d) {
                return 0 === a ? b : a === d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b;
            }
        ],
        "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function(a, b, c, d) {
                return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b;
            }
        ],
        "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function(a, b, c, d) {
                return c * Math.sqrt(1 - (a = a / d - 1) * a) + b;
            }
        ],
        "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
            }
        ],
        "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), c * (a /= d) * a * ((e + 1) * a - e) + b;
            }
        ],
        "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b;
            }
        ],
        "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b;
            }
        ]
    }, n = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
    }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = [
        "Webkit",
        "Moz",
        "O",
        "ms"
    ], E = [
        "-webkit-",
        "-moz-",
        "-o-",
        "-ms-"
    ], F = function(a) {
        if (a in C.style) return {
            dom: a,
            css: a
        };
        var b, c, d = "", e = a.split("-");
        for(b = 0; b < e.length; b++)d += e[b].charAt(0).toUpperCase() + e[b].slice(1);
        for(b = 0; b < D.length; b++)if (c = D[b] + d, c in C.style) return {
            dom: c,
            css: E[b] + a
        };
    }, G = b.support = {
        bind: Function.prototype.bind,
        transform: F("transform"),
        transition: F("transition"),
        backface: F("backface-visibility"),
        timing: F("transition-timing-function")
    };
    if (G.transition) {
        var H = G.timing.dom;
        if (C.style[H] = m["ease-in-back"][0], !C.style[H]) for(var I in n)m[I][0] = n[I];
    }
    var J = b.frame = function() {
        var a = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
        return a && G.bind ? a.bind(p) : function(a) {
            p.setTimeout(a, 16);
        };
    }(), K = b.now = function() {
        var a = p.performance, b = a && (a.now || a.webkitNow || a.msNow || a.mozNow);
        return b && G.bind ? b.bind(a) : Date.now || function() {
            return +new Date;
        };
    }(), L = l(function(b) {
        function d(a, b) {
            var c = k(("" + a).split(B)), d = c[0];
            b = b || {};
            var e = Y[d];
            if (!e) return j("Unsupported property: " + d);
            if (!b.weak || !this.props[d]) {
                var f = e[0], g = this.props[d];
                return g || (g = this.props[d] = new f.Bare), g.init(this.$el, c, e, b), g;
            }
        }
        function e(a, b, c) {
            if (a) {
                var e = typeof a;
                if (b || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == e && b) return this.timer = new S({
                    duration: a,
                    context: this,
                    complete: h
                }), void (this.active = !0);
                if ("string" == e && b) {
                    switch(a){
                        case "hide":
                            o.call(this);
                            break;
                        case "stop":
                            l.call(this);
                            break;
                        case "redraw":
                            p.call(this);
                            break;
                        default:
                            d.call(this, a, c && c[1]);
                    }
                    return h.call(this);
                }
                if ("function" == e) return void a.call(this, this);
                if ("object" == e) {
                    var f = 0;
                    u.call(this, a, function(a, b) {
                        a.span > f && (f = a.span), a.stop(), a.animate(b);
                    }, function(a) {
                        "wait" in a && (f = i(a.wait, 0));
                    }), t.call(this), f > 0 && (this.timer = new S({
                        duration: f,
                        context: this
                    }), this.active = !0, b && (this.timer.complete = h));
                    var g = this, j = !1, k = {};
                    J(function() {
                        u.call(g, a, function(a) {
                            a.active && (j = !0, k[a.name] = a.nextStyle);
                        }), j && g.$el.css(k);
                    });
                }
            }
        }
        function f(a) {
            a = i(a, 0), this.active ? this.queue.push({
                options: a
            }) : (this.timer = new S({
                duration: a,
                context: this,
                complete: h
            }), this.active = !0);
        }
        function g(a) {
            return this.active ? (this.queue.push({
                options: a,
                args: arguments
            }), void (this.timer.complete = h)) : j("No active transition timer. Use start() or wait() before then().");
        }
        function h() {
            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                var a = this.queue.shift();
                e.call(this, a.options, !0, a.args);
            }
        }
        function l(a) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
            var b;
            "string" == typeof a ? (b = {}, b[a] = 1) : b = "object" == typeof a && null != a ? a : this.props, u.call(this, b, v), t.call(this);
        }
        function m(a) {
            l.call(this, a), u.call(this, a, w, x);
        }
        function n(a) {
            "string" != typeof a && (a = "block"), this.el.style.display = a;
        }
        function o() {
            l.call(this), this.el.style.display = "none";
        }
        function p() {
            this.el.offsetHeight;
        }
        function r() {
            l.call(this), a.removeData(this.el, q), this.$el = this.el = null;
        }
        function t() {
            var a, b, c = [];
            this.upstream && c.push(this.upstream);
            for(a in this.props)b = this.props[a], b.active && c.push(b.string);
            c = c.join(","), this.style !== c && (this.style = c, this.el.style[G.transition.dom] = c);
        }
        function u(a, b, e) {
            var f, g, h, i, j = b !== v, k = {};
            for(f in a)h = a[f], f in Z ? (k.transform || (k.transform = {}), k.transform[f] = h) : (s.test(f) && (f = c(f)), f in Y ? k[f] = h : (i || (i = {}), i[f] = h));
            for(f in k){
                if (h = k[f], g = this.props[f], !g) {
                    if (!j) continue;
                    g = d.call(this, f);
                }
                b.call(this, g, h);
            }
            e && i && e.call(this, i);
        }
        function v(a) {
            a.stop();
        }
        function w(a, b) {
            a.set(b);
        }
        function x(a) {
            this.$el.css(a);
        }
        function y(a, c) {
            b[a] = function() {
                return this.children ? A.call(this, c, arguments) : (this.el && c.apply(this, arguments), this);
            };
        }
        function A(a, b) {
            var c, d = this.children.length;
            for(c = 0; d > c; c++)a.apply(this.children[c], b);
            return this;
        }
        b.init = function(b) {
            if (this.$el = a(b), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, U.keepInherited && !U.fallback) {
                var c = W(this.el, "transition");
                c && !z.test(c) && (this.upstream = c);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
        }, y("add", d), y("start", e), y("wait", f), y("then", g), y("next", h), y("stop", l), y("set", m), y("show", n), y("hide", o), y("redraw", p), y("destroy", r);
    }), M = l(L, function(b) {
        function c(b, c) {
            var d = a.data(b, q) || a.data(b, q, new L.Bare);
            return d.el || d.init(b), c ? d.start(c) : d;
        }
        b.init = function(b, d) {
            var e = a(b);
            if (!e.length) return this;
            if (1 === e.length) return c(e[0], d);
            var f = [];
            return e.each(function(a, b) {
                f.push(c(b, d));
            }), this.children = f, this;
        };
    }), N = l(function(a) {
        function b() {
            var a = this.get();
            this.update("auto");
            var b = this.get();
            return this.update(a), b;
        }
        function c(a, b, c) {
            return void 0 !== b && (c = b), a in m ? a : c;
        }
        function d(a) {
            var b = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);
            return (b ? e(b[1], b[2], b[3]) : a).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
        }
        var f = {
            duration: 500,
            ease: "ease",
            delay: 0
        };
        a.init = function(a, b, d, e) {
            this.$el = a, this.el = a[0];
            var g = b[0];
            d[2] && (g = d[2]), X[g] && (g = X[g]), this.name = g, this.type = d[1], this.duration = i(b[1], this.duration, f.duration), this.ease = c(b[2], this.ease, f.ease), this.delay = i(b[3], this.delay, f.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e.unit || this.unit || U.defaultUnit, this.angle = e.angle || this.angle || U.defaultAngle, U.fallback || e.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
        }, a.set = function(a) {
            a = this.convert(a, this.type), this.update(a), this.redraw();
        }, a.transition = function(a) {
            this.active = !0, a = this.convert(a, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a && (a = b.call(this))), this.nextStyle = a;
        }, a.fallback = function(a) {
            var c = this.el.style[this.name] || this.convert(this.get(), this.type);
            a = this.convert(a, this.type), this.auto && ("auto" == c && (c = this.convert(this.get(), this.type)), "auto" == a && (a = b.call(this))), this.tween = new R({
                from: c,
                to: a,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
            });
        }, a.get = function() {
            return W(this.el, this.name);
        }, a.update = function(a) {
            V(this.el, this.name, a);
        }, a.stop = function() {
            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a = this.tween;
            a && a.context && a.destroy();
        }, a.convert = function(a, b) {
            if ("auto" == a && this.auto) return a;
            var c, e = "number" == typeof a, f = "string" == typeof a;
            switch(b){
                case t:
                    if (e) return a;
                    if (f && "" === a.replace(r, "")) return +a;
                    c = "number(unitless)";
                    break;
                case u:
                    if (f) {
                        if ("" === a && this.original) return this.original;
                        if (b.test(a)) return "#" == a.charAt(0) && 7 == a.length ? a : d(a);
                    }
                    c = "hex or rgb string";
                    break;
                case v:
                    if (e) return a + this.unit;
                    if (f && b.test(a)) return a;
                    c = "number(px) or string(unit)";
                    break;
                case w:
                    if (e) return a + this.unit;
                    if (f && b.test(a)) return a;
                    c = "number(px) or string(unit or %)";
                    break;
                case x:
                    if (e) return a + this.angle;
                    if (f && b.test(a)) return a;
                    c = "number(deg) or string(angle)";
                    break;
                case y:
                    if (e) return a;
                    if (f && w.test(a)) return a;
                    c = "number(unitless) or string(unit or %)";
            }
            return g(c, a), a;
        }, a.redraw = function() {
            this.el.offsetHeight;
        };
    }), O = l(N, function(a, b) {
        a.init = function() {
            b.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
        };
    }), P = l(N, function(a, b) {
        a.init = function() {
            b.init.apply(this, arguments), this.animate = this.fallback;
        }, a.get = function() {
            return this.$el[this.name]();
        }, a.update = function(a) {
            this.$el[this.name](a);
        };
    }), Q = l(N, function(a, b) {
        function c(a, b) {
            var c, d, e, f, g;
            for(c in a)f = Z[c], e = f[0], d = f[1] || c, g = this.convert(a[c], e), b.call(this, d, g, e);
        }
        a.init = function() {
            b.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
        }, a.set = function(a) {
            c.call(this, a, function(a, b) {
                this.current[a] = b;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
        }, a.transition = function(a) {
            var b = this.values(a);
            this.tween = new T({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
            });
            var c, d = {};
            for(c in this.current)d[c] = c in b ? b[c] : this.current[c];
            this.active = !0, this.nextStyle = this.style(d);
        }, a.fallback = function(a) {
            var b = this.values(a);
            this.tween = new T({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
            });
        }, a.update = function() {
            V(this.el, this.name, this.style(this.current));
        }, a.style = function(a) {
            var b, c = "";
            for(b in a)c += b + "(" + a[b] + ") ";
            return c;
        }, a.values = function(a) {
            var b, d = {};
            return c.call(this, a, function(a, c, e) {
                d[a] = c, void 0 === this.current[a] && (b = 0, ~a.indexOf("scale") && (b = 1), this.current[a] = this.convert(b, e));
            }), d;
        };
    }), R = l(function(b) {
        function c(a) {
            1 === n.push(a) && J(g);
        }
        function g() {
            var a, b, c, d = n.length;
            if (d) for(J(g), b = K(), a = d; a--;)c = n[a], c && c.render(b);
        }
        function i(b) {
            var c, d = a.inArray(b, n);
            d >= 0 && (c = n.slice(d + 1), n.length = d, c.length && (n = n.concat(c)));
        }
        function j(a) {
            return Math.round(a * o) / o;
        }
        function k(a, b, c) {
            return e(a[0] + c * (b[0] - a[0]), a[1] + c * (b[1] - a[1]), a[2] + c * (b[2] - a[2]));
        }
        var l = {
            ease: m.ease[1],
            from: 0,
            to: 1
        };
        b.init = function(a) {
            this.duration = a.duration || 0, this.delay = a.delay || 0;
            var b = a.ease || l.ease;
            m[b] && (b = m[b][1]), "function" != typeof b && (b = l.ease), this.ease = b, this.update = a.update || f, this.complete = a.complete || f, this.context = a.context || this, this.name = a.name;
            var c = a.from, d = a.to;
            void 0 === c && (c = l.from), void 0 === d && (d = l.to), this.unit = a.unit || "", "number" == typeof c && "number" == typeof d ? (this.begin = c, this.change = d - c) : this.format(d, c), this.value = this.begin + this.unit, this.start = K(), a.autoplay !== !1 && this.play();
        }, b.play = function() {
            this.active || (this.start || (this.start = K()), this.active = !0, c(this));
        }, b.stop = function() {
            this.active && (this.active = !1, i(this));
        }, b.render = function(a) {
            var b, c = a - this.start;
            if (this.delay) {
                if (c <= this.delay) return;
                c -= this.delay;
            }
            if (c < this.duration) {
                var d = this.ease(c, 0, 1, this.duration);
                return b = this.startRGB ? k(this.startRGB, this.endRGB, d) : j(this.begin + d * this.change), this.value = b + this.unit, void this.update.call(this.context, this.value);
            }
            b = this.endHex || this.begin + this.change, this.value = b + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
        }, b.format = function(a, b) {
            if (b += "", a += "", "#" == a.charAt(0)) return this.startRGB = d(b), this.endRGB = d(a), this.endHex = a, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
                var c = b.replace(r, ""), e = a.replace(r, "");
                c !== e && h("tween", b, a), this.unit = c;
            }
            b = parseFloat(b), a = parseFloat(a), this.begin = this.value = b, this.change = a - b;
        }, b.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
        };
        var n = [], o = 1e3;
    }), S = l(R, function(a) {
        a.init = function(a) {
            this.duration = a.duration || 0, this.complete = a.complete || f, this.context = a.context, this.play();
        }, a.render = function(a) {
            var b = a - this.start;
            b < this.duration || (this.complete.call(this.context), this.destroy());
        };
    }), T = l(R, function(a, b) {
        a.init = function(a) {
            this.context = a.context, this.update = a.update, this.tweens = [], this.current = a.current;
            var b, c;
            for(b in a.values)c = a.values[b], this.current[b] !== c && this.tweens.push(new R({
                name: b,
                from: this.current[b],
                to: c,
                duration: a.duration,
                delay: a.delay,
                ease: a.ease,
                autoplay: !1
            }));
            this.play();
        }, a.render = function(a) {
            var b, c, d = this.tweens.length, e = !1;
            for(b = d; b--;)c = this.tweens[b], c.context && (c.render(a), this.current[c.name] = c.value, e = !0);
            return e ? void (this.update && this.update.call(this.context)) : this.destroy();
        }, a.destroy = function() {
            if (b.destroy.call(this), this.tweens) {
                var a, c = this.tweens.length;
                for(a = c; a--;)this.tweens[a].destroy();
                this.tweens = null, this.current = null;
            }
        };
    }), U = b.config = {
        debug: !1,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: !1,
        hideBackface: !1,
        perspective: "",
        fallback: !G.transition,
        agentTests: []
    };
    b.fallback = function(a) {
        if (!G.transition) return U.fallback = !0;
        U.agentTests.push("(" + a + ")");
        var b = new RegExp(U.agentTests.join("|"), "i");
        U.fallback = b.test(navigator.userAgent);
    }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a) {
        return new R(a);
    }, b.delay = function(a, b, c) {
        return new S({
            complete: b,
            duration: a,
            context: c
        });
    }, a.fn.tram = function(a) {
        return b.call(null, this, a);
    };
    var V = a.style, W = a.css, X = {
        transform: G.transform && G.transform.css
    }, Y = {
        color: [
            O,
            u
        ],
        background: [
            O,
            u,
            "background-color"
        ],
        "outline-color": [
            O,
            u
        ],
        "border-color": [
            O,
            u
        ],
        "border-top-color": [
            O,
            u
        ],
        "border-right-color": [
            O,
            u
        ],
        "border-bottom-color": [
            O,
            u
        ],
        "border-left-color": [
            O,
            u
        ],
        "border-width": [
            N,
            v
        ],
        "border-top-width": [
            N,
            v
        ],
        "border-right-width": [
            N,
            v
        ],
        "border-bottom-width": [
            N,
            v
        ],
        "border-left-width": [
            N,
            v
        ],
        "border-spacing": [
            N,
            v
        ],
        "letter-spacing": [
            N,
            v
        ],
        margin: [
            N,
            v
        ],
        "margin-top": [
            N,
            v
        ],
        "margin-right": [
            N,
            v
        ],
        "margin-bottom": [
            N,
            v
        ],
        "margin-left": [
            N,
            v
        ],
        padding: [
            N,
            v
        ],
        "padding-top": [
            N,
            v
        ],
        "padding-right": [
            N,
            v
        ],
        "padding-bottom": [
            N,
            v
        ],
        "padding-left": [
            N,
            v
        ],
        "outline-width": [
            N,
            v
        ],
        opacity: [
            N,
            t
        ],
        top: [
            N,
            w
        ],
        right: [
            N,
            w
        ],
        bottom: [
            N,
            w
        ],
        left: [
            N,
            w
        ],
        "font-size": [
            N,
            w
        ],
        "text-indent": [
            N,
            w
        ],
        "word-spacing": [
            N,
            w
        ],
        width: [
            N,
            w
        ],
        "min-width": [
            N,
            w
        ],
        "max-width": [
            N,
            w
        ],
        height: [
            N,
            w
        ],
        "min-height": [
            N,
            w
        ],
        "max-height": [
            N,
            w
        ],
        "line-height": [
            N,
            y
        ],
        "scroll-top": [
            P,
            t,
            "scrollTop"
        ],
        "scroll-left": [
            P,
            t,
            "scrollLeft"
        ]
    }, Z = {};
    G.transform && (Y.transform = [
        Q
    ], Z = {
        x: [
            w,
            "translateX"
        ],
        y: [
            w,
            "translateY"
        ],
        rotate: [
            x
        ],
        rotateX: [
            x
        ],
        rotateY: [
            x
        ],
        scale: [
            t
        ],
        scaleX: [
            t
        ],
        scaleY: [
            t
        ],
        skew: [
            x
        ],
        skewX: [
            x
        ],
        skewY: [
            x
        ]
    }), G.transform && G.backface && (Z.z = [
        w,
        "translateZ"
    ], Z.rotateZ = [
        x
    ], Z.scaleZ = [
        t
    ], Z.perspective = [
        v
    ]);
    var $ = /ms/, _ = /s|\./;
    return a.tram = b;
}(window.jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW0tbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIVxuICogdHJhbS5qcyB2MC44LjItZ2xvYmFsXG4gKiBDcm9zcy1icm93c2VyIENTUzMgdHJhbnNpdGlvbnMgaW4gSmF2YVNjcmlwdFxuICogaHR0cHM6Ly9naXRodWIuY29tL2Jrd2xkL3RyYW1cbiAqIE1JVCBMaWNlbnNlXG4gKi9cbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xud2luZG93LnRyYW09ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIpe3ZhciBjPW5ldyBNLkJhcmU7cmV0dXJuIGMuaW5pdChhLGIpfWZ1bmN0aW9uIGMoYSl7cmV0dXJuIGEucmVwbGFjZSgvW0EtWl0vZyxmdW5jdGlvbihhKXtyZXR1cm5cIi1cIithLnRvTG93ZXJDYXNlKCl9KTt9ZnVuY3Rpb24gZChhKXt2YXIgYj1wYXJzZUludChhLnNsaWNlKDEpLDE2KSxjPWI+PjE2JjI1NSxkPWI+PjgmMjU1LGU9MjU1JmI7cmV0dXJuW2MsZCxlXX1mdW5jdGlvbiBlKGEsYixjKXtyZXR1cm5cIiNcIisoMTw8MjR8YTw8MTZ8Yjw8OHxjKS50b1N0cmluZygxNikuc2xpY2UoMSl9ZnVuY3Rpb24gZigpe31mdW5jdGlvbiBnKGEsYil7aihcIlR5cGUgd2FybmluZzogRXhwZWN0ZWQ6IFtcIithK1wiXSBHb3Q6IFtcIit0eXBlb2YgYitcIl0gXCIrYil9ZnVuY3Rpb24gaChhLGIsYyl7aihcIlVuaXRzIGRvIG5vdCBtYXRjaCBbXCIrYStcIl06IFwiK2IrXCIsIFwiK2MpfWZ1bmN0aW9uIGkoYSxiLGMpe2lmKHZvaWQgMCE9PWImJihjPWIpLHZvaWQgMD09PWEpcmV0dXJuIGM7dmFyIGQ9YztyZXR1cm4gJC50ZXN0KGEpfHwhXy50ZXN0KGEpP2Q9cGFyc2VJbnQoYSwxMCk6Xy50ZXN0KGEpJiYoZD0xZTMqcGFyc2VGbG9hdChhKSksMD5kJiYoZD0wKSxkPT09ZD9kOmN9ZnVuY3Rpb24gaihhKXtVLmRlYnVnJiZ3aW5kb3cmJndpbmRvdy5jb25zb2xlLndhcm4oYSl9ZnVuY3Rpb24gayhhKXtmb3IodmFyIGI9LTEsYz1hP2EubGVuZ3RoOjAsZD1bXTsrK2I8Yzspe3ZhciBlPWFbYl07ZSYmZC5wdXNoKGUpfXJldHVybiBkfXZhciBsPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGUoYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYX1mdW5jdGlvbiBmKCl7fWZ1bmN0aW9uIGcoaCxpKXtmdW5jdGlvbiBqKCl7dmFyIGE9bmV3IGs7cmV0dXJuIGUoYS5pbml0KSYmYS5pbml0LmFwcGx5KGEsYXJndW1lbnRzKSxhfWZ1bmN0aW9uIGsoKXt9aT09PWMmJihpPWgsaD1PYmplY3QpLGouQmFyZT1rO3ZhciBsLG09ZlthXT1oW2FdLG49a1thXT1qW2FdPW5ldyBmO3JldHVybiBuLmNvbnN0cnVjdG9yPWosai5taXhpbj1mdW5jdGlvbihiKXtyZXR1cm4ga1thXT1qW2FdPWcoaixiKVthXSxqfSxqLm9wZW49ZnVuY3Rpb24oYSl7aWYobD17fSxlKGEpP2w9YS5jYWxsKGosbixtLGosaCk6ZChhKSYmKGw9YSksZChsKSlmb3IodmFyIGMgaW4gbCliLmNhbGwobCxjKSYmKG5bY109bFtjXSk7cmV0dXJuIGUobi5pbml0KXx8KG4uaW5pdD1oKSxqfSxqLm9wZW4oaSl9cmV0dXJuIGd9KFwicHJvdG90eXBlXCIse30uaGFzT3duUHJvcGVydHkpLG09e2Vhc2U6W1wiZWFzZVwiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPShhLz1kKSphLGY9ZSphO3JldHVybiBiK2MqKC0yLjc1KmYqZSsxMSplKmUrLTE1LjUqZis4KmUrLjI1KmEpfV0sXCJlYXNlLWluXCI6W1wiZWFzZS1pblwiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPShhLz1kKSphLGY9ZSphO3JldHVybiBiK2MqKC0xKmYqZSszKmUqZSstMypmKzIqZSl9XSxcImVhc2Utb3V0XCI6W1wiZWFzZS1vdXRcIixmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT0oYS89ZCkqYSxmPWUqYTtyZXR1cm4gYitjKiguMypmKmUrLTEuNiplKmUrMi4yKmYrLTEuOCplKzEuOSphKX1dLFwiZWFzZS1pbi1vdXRcIjpbXCJlYXNlLWluLW91dFwiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPShhLz1kKSphLGY9ZSphO3JldHVybiBiK2MqKDIqZiplKy01KmUqZSsyKmYrMiplKX1dLGxpbmVhcjpbXCJsaW5lYXJcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYyphL2QrYn1dLFwiZWFzZS1pbi1xdWFkXCI6W1wiY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKihhLz1kKSphK2J9XSxcImVhc2Utb3V0LXF1YWRcIjpbXCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuLWMqKGEvPWQpKihhLTIpK2J9XSxcImVhc2UtaW4tb3V0LXF1YWRcIjpbXCJjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuKGEvPWQvMik8MT9jLzIqYSphK2I6LWMvMiooLS1hKihhLTIpLTEpK2J9XSxcImVhc2UtaW4tY3ViaWNcIjpbXCJjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGMqKGEvPWQpKmEqYStifV0sXCJlYXNlLW91dC1jdWJpY1wiOltcImN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKigoYT1hL2QtMSkqYSphKzEpK2J9XSxcImVhc2UtaW4tb3V0LWN1YmljXCI6W1wiY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuKGEvPWQvMik8MT9jLzIqYSphKmErYjpjLzIqKChhLT0yKSphKmErMikrYn1dLFwiZWFzZS1pbi1xdWFydFwiOltcImN1YmljLWJlemllcigwLjg5NSwgMC4wMzAsIDAuNjg1LCAwLjIyMClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYyooYS89ZCkqYSphKmErYn1dLFwiZWFzZS1vdXQtcXVhcnRcIjpbXCJjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYyooKGE9YS9kLTEpKmEqYSphLTEpK2J9XSxcImVhc2UtaW4tb3V0LXF1YXJ0XCI6W1wiY3ViaWMtYmV6aWVyKDAuNzcwLCAwLCAwLjE3NSwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4oYS89ZC8yKTwxP2MvMiphKmEqYSphK2I6LWMvMiooKGEtPTIpKmEqYSphLTIpK2J9XSxcImVhc2UtaW4tcXVpbnRcIjpbXCJjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGMqKGEvPWQpKmEqYSphKmErYn1dLFwiZWFzZS1vdXQtcXVpbnRcIjpbXCJjdWJpYy1iZXppZXIoMC4yMzAsIDEsIDAuMzIwLCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKigoYT1hL2QtMSkqYSphKmEqYSsxKStifV0sXCJlYXNlLWluLW91dC1xdWludFwiOltcImN1YmljLWJlemllcigwLjg2MCwgMCwgMC4wNzAsIDEpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuKGEvPWQvMik8MT9jLzIqYSphKmEqYSphK2I6Yy8yKigoYS09MikqYSphKmEqYSsyKStifV0sXCJlYXNlLWluLXNpbmVcIjpbXCJjdWJpYy1iZXppZXIoMC40NzAsIDAsIDAuNzQ1LCAwLjcxNSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYypNYXRoLmNvcyhhL2QqKE1hdGguUEkvMikpK2MrYn1dLFwiZWFzZS1vdXQtc2luZVwiOltcImN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKk1hdGguc2luKGEvZCooTWF0aC5QSS8yKSkrYn1dLFwiZWFzZS1pbi1vdXQtc2luZVwiOltcImN1YmljLWJlemllcigwLjQ0NSwgMC4wNTAsIDAuNTUwLCAwLjk1MClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYy8yKihNYXRoLmNvcyhNYXRoLlBJKmEvZCktMSkrYn1dLFwiZWFzZS1pbi1leHBvXCI6W1wiY3ViaWMtYmV6aWVyKDAuOTUwLCAwLjA1MCwgMC43OTUsIDAuMDM1KVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiAwPT09YT9iOmMqTWF0aC5wb3coMiwxMCooYS9kLTEpKStifV0sXCJlYXNlLW91dC1leHBvXCI6W1wiY3ViaWMtYmV6aWVyKDAuMTkwLCAxLCAwLjIyMCwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYT09PWQ/YitjOmMqKC1NYXRoLnBvdygyLC0xMCphL2QpKzEpK2J9XSxcImVhc2UtaW4tb3V0LWV4cG9cIjpbXCJjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gMD09PWE/YjphPT09ZD9iK2M6KGEvPWQvMik8MT9jLzIqTWF0aC5wb3coMiwxMCooYS0xKSkrYjpjLzIqKC1NYXRoLnBvdygyLC0xMCotLWEpKzIpK2J9XSxcImVhc2UtaW4tY2lyY1wiOltcImN1YmljLWJlemllcigwLjYwMCwgMC4wNDAsIDAuOTgwLCAwLjMzNSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYyooTWF0aC5zcXJ0KDEtKGEvPWQpKmEpLTEpK2J9XSxcImVhc2Utb3V0LWNpcmNcIjpbXCJjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIwLCAwLjE2NSwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYypNYXRoLnNxcnQoMS0oYT1hL2QtMSkqYSkrYn1dLFwiZWFzZS1pbi1vdXQtY2lyY1wiOltcImN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUwLCAwLjg2MClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4oYS89ZC8yKTwxPy1jLzIqKE1hdGguc3FydCgxLWEqYSktMSkrYjpjLzIqKE1hdGguc3FydCgxLShhLT0yKSphKSsxKStifV0sXCJlYXNlLWluLWJhY2tcIjpbXCJjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KVwiLGZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTEuNzAxNTgpLGMqKGEvPWQpKmEqKChlKzEpKmEtZSkrYn1dLFwiZWFzZS1vdXQtYmFja1wiOltcImN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjI3NSlcIixmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT0xLjcwMTU4KSxjKigoYT1hL2QtMSkqYSooKGUrMSkqYStlKSsxKStifV0sXCJlYXNlLWluLW91dC1iYWNrXCI6W1wiY3ViaWMtYmV6aWVyKDAuNjgwLCAtMC41NTAsIDAuMjY1LCAxLjU1MClcIixmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT0xLjcwMTU4KSwoYS89ZC8yKTwxP2MvMiphKmEqKCgoZSo9MS41MjUpKzEpKmEtZSkrYjpjLzIqKChhLT0yKSphKigoKGUqPTEuNTI1KSsxKSphK2UpKzIpK2J9XX0sbj17XCJlYXNlLWluLWJhY2tcIjpcImN1YmljLWJlemllcigwLjYwMCwgMCwgMC43MzUsIDAuMDQ1KVwiLFwiZWFzZS1vdXQtYmFja1wiOlwiY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpXCIsXCJlYXNlLWluLW91dC1iYWNrXCI6XCJjdWJpYy1iZXppZXIoMC42ODAsIDAsIDAuMjY1LCAxKVwifSxvPWRvY3VtZW50LHA9d2luZG93LHE9XCJia3dsZC10cmFtXCIscj0vW1xcLVxcLjAtOV0vZyxzPS9bQS1aXS8sdD1cIm51bWJlclwiLHU9L14ocmdifCMpLyx2PS8oZW18Y218bW18aW58cHR8cGN8cHgpJC8sdz0vKGVtfGNtfG1tfGlufHB0fHBjfHB4fCUpJC8seD0vKGRlZ3xyYWR8dHVybikkLyx5PVwidW5pdGxlc3NcIix6PS8oYWxsfG5vbmUpIDBzIGVhc2UgMHMvLEE9L14od2lkdGh8aGVpZ2h0KSQvLEI9XCIgXCIsQz1vLmNyZWF0ZUVsZW1lbnQoXCJhXCIpLEQ9W1wiV2Via2l0XCIsXCJNb3pcIixcIk9cIixcIm1zXCJdLEU9W1wiLXdlYmtpdC1cIixcIi1tb3otXCIsXCItby1cIixcIi1tcy1cIl0sRj1mdW5jdGlvbihhKXtpZihhIGluIEMuc3R5bGUpcmV0dXJue2RvbTphLGNzczphfTt2YXIgYixjLGQ9XCJcIixlPWEuc3BsaXQoXCItXCIpO2ZvcihiPTA7YjxlLmxlbmd0aDtiKyspZCs9ZVtiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlW2JdLnNsaWNlKDEpO2ZvcihiPTA7YjxELmxlbmd0aDtiKyspaWYoYz1EW2JdK2QsYyBpbiBDLnN0eWxlKXJldHVybntkb206Yyxjc3M6RVtiXSthfX0sRz1iLnN1cHBvcnQ9e2JpbmQ6RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQsdHJhbnNmb3JtOkYoXCJ0cmFuc2Zvcm1cIiksdHJhbnNpdGlvbjpGKFwidHJhbnNpdGlvblwiKSxiYWNrZmFjZTpGKFwiYmFja2ZhY2UtdmlzaWJpbGl0eVwiKSx0aW1pbmc6RihcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCIpfTtpZihHLnRyYW5zaXRpb24pe3ZhciBIPUcudGltaW5nLmRvbTtpZihDLnN0eWxlW0hdPW1bXCJlYXNlLWluLWJhY2tcIl1bMF0sIUMuc3R5bGVbSF0pZm9yKHZhciBJIGluIG4pbVtJXVswXT1uW0ldfXZhciBKPWIuZnJhbWU9ZnVuY3Rpb24oKXt2YXIgYT1wLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8cC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHAubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxwLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHAubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7cmV0dXJuIGEmJkcuYmluZD9hLmJpbmQocCk6ZnVuY3Rpb24oYSl7cC5zZXRUaW1lb3V0KGEsMTYpfX0oKSxLPWIubm93PWZ1bmN0aW9uKCl7dmFyIGE9cC5wZXJmb3JtYW5jZSxiPWEmJihhLm5vd3x8YS53ZWJraXROb3d8fGEubXNOb3d8fGEubW96Tm93KTtyZXR1cm4gYiYmRy5iaW5kP2IuYmluZChhKTpEYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9fSgpLEw9bChmdW5jdGlvbihiKXtmdW5jdGlvbiBkKGEsYil7dmFyIGM9aygoXCJcIithKS5zcGxpdChCKSksZD1jWzBdO2I9Ynx8e307dmFyIGU9WVtkXTtpZighZSlyZXR1cm4gaihcIlVuc3VwcG9ydGVkIHByb3BlcnR5OiBcIitkKTtpZighYi53ZWFrfHwhdGhpcy5wcm9wc1tkXSl7dmFyIGY9ZVswXSxnPXRoaXMucHJvcHNbZF07cmV0dXJuIGd8fChnPXRoaXMucHJvcHNbZF09bmV3IGYuQmFyZSksZy5pbml0KHRoaXMuJGVsLGMsZSxiKSxnfX1mdW5jdGlvbiBlKGEsYixjKXtpZihhKXt2YXIgZT10eXBlb2YgYTtpZihifHwodGhpcy50aW1lciYmdGhpcy50aW1lci5kZXN0cm95KCksdGhpcy5xdWV1ZT1bXSx0aGlzLmFjdGl2ZT0hMSksXCJudW1iZXJcIj09ZSYmYilyZXR1cm4gdGhpcy50aW1lcj1uZXcgUyh7ZHVyYXRpb246YSxjb250ZXh0OnRoaXMsY29tcGxldGU6aH0pLHZvaWQodGhpcy5hY3RpdmU9ITApO2lmKFwic3RyaW5nXCI9PWUmJmIpe3N3aXRjaChhKXtjYXNlXCJoaWRlXCI6by5jYWxsKHRoaXMpO2JyZWFrO2Nhc2VcInN0b3BcIjpsLmNhbGwodGhpcyk7YnJlYWs7Y2FzZVwicmVkcmF3XCI6cC5jYWxsKHRoaXMpO2JyZWFrO2RlZmF1bHQ6ZC5jYWxsKHRoaXMsYSxjJiZjWzFdKX1yZXR1cm4gaC5jYWxsKHRoaXMpfWlmKFwiZnVuY3Rpb25cIj09ZSlyZXR1cm4gdm9pZCBhLmNhbGwodGhpcyx0aGlzKTtpZihcIm9iamVjdFwiPT1lKXt2YXIgZj0wO3UuY2FsbCh0aGlzLGEsZnVuY3Rpb24oYSxiKXthLnNwYW4+ZiYmKGY9YS5zcGFuKSxhLnN0b3AoKSxhLmFuaW1hdGUoYil9LGZ1bmN0aW9uKGEpe1wid2FpdFwiaW4gYSYmKGY9aShhLndhaXQsMCkpfSksdC5jYWxsKHRoaXMpLGY+MCYmKHRoaXMudGltZXI9bmV3IFMoe2R1cmF0aW9uOmYsY29udGV4dDp0aGlzfSksdGhpcy5hY3RpdmU9ITAsYiYmKHRoaXMudGltZXIuY29tcGxldGU9aCkpO3ZhciBnPXRoaXMsaj0hMSxrPXt9O0ooZnVuY3Rpb24oKXt1LmNhbGwoZyxhLGZ1bmN0aW9uKGEpe2EuYWN0aXZlJiYoaj0hMCxrW2EubmFtZV09YS5uZXh0U3R5bGUpfSksaiYmZy4kZWwuY3NzKGspfSl9fX1mdW5jdGlvbiBmKGEpe2E9aShhLDApLHRoaXMuYWN0aXZlP3RoaXMucXVldWUucHVzaCh7b3B0aW9uczphfSk6KHRoaXMudGltZXI9bmV3IFMoe2R1cmF0aW9uOmEsY29udGV4dDp0aGlzLGNvbXBsZXRlOmh9KSx0aGlzLmFjdGl2ZT0hMCl9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gdGhpcy5hY3RpdmU/KHRoaXMucXVldWUucHVzaCh7b3B0aW9uczphLGFyZ3M6YXJndW1lbnRzfSksdm9pZCh0aGlzLnRpbWVyLmNvbXBsZXRlPWgpKTpqKFwiTm8gYWN0aXZlIHRyYW5zaXRpb24gdGltZXIuIFVzZSBzdGFydCgpIG9yIHdhaXQoKSBiZWZvcmUgdGhlbigpLlwiKX1mdW5jdGlvbiBoKCl7aWYodGhpcy50aW1lciYmdGhpcy50aW1lci5kZXN0cm95KCksdGhpcy5hY3RpdmU9ITEsdGhpcy5xdWV1ZS5sZW5ndGgpe3ZhciBhPXRoaXMucXVldWUuc2hpZnQoKTtlLmNhbGwodGhpcyxhLm9wdGlvbnMsITAsYS5hcmdzKX19ZnVuY3Rpb24gbChhKXt0aGlzLnRpbWVyJiZ0aGlzLnRpbWVyLmRlc3Ryb3koKSx0aGlzLnF1ZXVlPVtdLHRoaXMuYWN0aXZlPSExO3ZhciBiO1wic3RyaW5nXCI9PXR5cGVvZiBhPyhiPXt9LGJbYV09MSk6Yj1cIm9iamVjdFwiPT10eXBlb2YgYSYmbnVsbCE9YT9hOnRoaXMucHJvcHMsdS5jYWxsKHRoaXMsYix2KSx0LmNhbGwodGhpcyl9ZnVuY3Rpb24gbShhKXtsLmNhbGwodGhpcyxhKSx1LmNhbGwodGhpcyxhLHcseCl9ZnVuY3Rpb24gbihhKXtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGE9XCJibG9ja1wiKSx0aGlzLmVsLnN0eWxlLmRpc3BsYXk9YX1mdW5jdGlvbiBvKCl7bC5jYWxsKHRoaXMpLHRoaXMuZWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn1mdW5jdGlvbiBwKCl7dGhpcy5lbC5vZmZzZXRIZWlnaHR9ZnVuY3Rpb24gcigpe2wuY2FsbCh0aGlzKSxhLnJlbW92ZURhdGEodGhpcy5lbCxxKSx0aGlzLiRlbD10aGlzLmVsPW51bGx9ZnVuY3Rpb24gdCgpe3ZhciBhLGIsYz1bXTt0aGlzLnVwc3RyZWFtJiZjLnB1c2godGhpcy51cHN0cmVhbSk7Zm9yKGEgaW4gdGhpcy5wcm9wcyliPXRoaXMucHJvcHNbYV0sYi5hY3RpdmUmJmMucHVzaChiLnN0cmluZyk7Yz1jLmpvaW4oXCIsXCIpLHRoaXMuc3R5bGUhPT1jJiYodGhpcy5zdHlsZT1jLHRoaXMuZWwuc3R5bGVbRy50cmFuc2l0aW9uLmRvbV09Yyl9ZnVuY3Rpb24gdShhLGIsZSl7dmFyIGYsZyxoLGksaj1iIT09dixrPXt9O2ZvcihmIGluIGEpaD1hW2ZdLGYgaW4gWj8oay50cmFuc2Zvcm18fChrLnRyYW5zZm9ybT17fSksay50cmFuc2Zvcm1bZl09aCk6KHMudGVzdChmKSYmKGY9YyhmKSksZiBpbiBZP2tbZl09aDooaXx8KGk9e30pLGlbZl09aCkpO2ZvcihmIGluIGspe2lmKGg9a1tmXSxnPXRoaXMucHJvcHNbZl0sIWcpe2lmKCFqKWNvbnRpbnVlO2c9ZC5jYWxsKHRoaXMsZil9Yi5jYWxsKHRoaXMsZyxoKX1lJiZpJiZlLmNhbGwodGhpcyxpKX1mdW5jdGlvbiB2KGEpe2Euc3RvcCgpfWZ1bmN0aW9uIHcoYSxiKXthLnNldChiKX1mdW5jdGlvbiB4KGEpe3RoaXMuJGVsLmNzcyhhKX1mdW5jdGlvbiB5KGEsYyl7YlthXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNoaWxkcmVuP0EuY2FsbCh0aGlzLGMsYXJndW1lbnRzKToodGhpcy5lbCYmYy5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcyl9fWZ1bmN0aW9uIEEoYSxiKXt2YXIgYyxkPXRoaXMuY2hpbGRyZW4ubGVuZ3RoO2ZvcihjPTA7ZD5jO2MrKylhLmFwcGx5KHRoaXMuY2hpbGRyZW5bY10sYik7cmV0dXJuIHRoaXN9Yi5pbml0PWZ1bmN0aW9uKGIpe2lmKHRoaXMuJGVsPWEoYiksdGhpcy5lbD10aGlzLiRlbFswXSx0aGlzLnByb3BzPXt9LHRoaXMucXVldWU9W10sdGhpcy5zdHlsZT1cIlwiLHRoaXMuYWN0aXZlPSExLFUua2VlcEluaGVyaXRlZCYmIVUuZmFsbGJhY2spe3ZhciBjPVcodGhpcy5lbCxcInRyYW5zaXRpb25cIik7YyYmIXoudGVzdChjKSYmKHRoaXMudXBzdHJlYW09Yyl9Ry5iYWNrZmFjZSYmVS5oaWRlQmFja2ZhY2UmJlYodGhpcy5lbCxHLmJhY2tmYWNlLmNzcyxcImhpZGRlblwiKX0seShcImFkZFwiLGQpLHkoXCJzdGFydFwiLGUpLHkoXCJ3YWl0XCIsZikseShcInRoZW5cIixnKSx5KFwibmV4dFwiLGgpLHkoXCJzdG9wXCIsbCkseShcInNldFwiLG0pLHkoXCJzaG93XCIsbikseShcImhpZGVcIixvKSx5KFwicmVkcmF3XCIscCkseShcImRlc3Ryb3lcIixyKX0pLE09bChMLGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYixjKXt2YXIgZD1hLmRhdGEoYixxKXx8YS5kYXRhKGIscSxuZXcgTC5CYXJlKTtyZXR1cm4gZC5lbHx8ZC5pbml0KGIpLGM/ZC5zdGFydChjKTpkfWIuaW5pdD1mdW5jdGlvbihiLGQpe3ZhciBlPWEoYik7aWYoIWUubGVuZ3RoKXJldHVybiB0aGlzO2lmKDE9PT1lLmxlbmd0aClyZXR1cm4gYyhlWzBdLGQpO3ZhciBmPVtdO3JldHVybiBlLmVhY2goZnVuY3Rpb24oYSxiKXtmLnB1c2goYyhiLGQpKX0pLHRoaXMuY2hpbGRyZW49Zix0aGlzfX0pLE49bChmdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7dmFyIGE9dGhpcy5nZXQoKTt0aGlzLnVwZGF0ZShcImF1dG9cIik7dmFyIGI9dGhpcy5nZXQoKTtyZXR1cm4gdGhpcy51cGRhdGUoYSksYn1mdW5jdGlvbiBjKGEsYixjKXtyZXR1cm4gdm9pZCAwIT09YiYmKGM9YiksYSBpbiBtP2E6Y31mdW5jdGlvbiBkKGEpe3ZhciBiPS9yZ2JhP1xcKChcXGQrKSxcXHMqKFxcZCspLFxccyooXFxkKykvLmV4ZWMoYSk7cmV0dXJuIChiP2UoYlsxXSxiWzJdLGJbM10pOmEpLnJlcGxhY2UoLyMoXFx3KShcXHcpKFxcdykkLyxcIiMkMSQxJDIkMiQzJDNcIik7fXZhciBmPXtkdXJhdGlvbjo1MDAsZWFzZTpcImVhc2VcIixkZWxheTowfTthLmluaXQ9ZnVuY3Rpb24oYSxiLGQsZSl7dGhpcy4kZWw9YSx0aGlzLmVsPWFbMF07dmFyIGc9YlswXTtkWzJdJiYoZz1kWzJdKSxYW2ddJiYoZz1YW2ddKSx0aGlzLm5hbWU9Zyx0aGlzLnR5cGU9ZFsxXSx0aGlzLmR1cmF0aW9uPWkoYlsxXSx0aGlzLmR1cmF0aW9uLGYuZHVyYXRpb24pLHRoaXMuZWFzZT1jKGJbMl0sdGhpcy5lYXNlLGYuZWFzZSksdGhpcy5kZWxheT1pKGJbM10sdGhpcy5kZWxheSxmLmRlbGF5KSx0aGlzLnNwYW49dGhpcy5kdXJhdGlvbit0aGlzLmRlbGF5LHRoaXMuYWN0aXZlPSExLHRoaXMubmV4dFN0eWxlPW51bGwsdGhpcy5hdXRvPUEudGVzdCh0aGlzLm5hbWUpLHRoaXMudW5pdD1lLnVuaXR8fHRoaXMudW5pdHx8VS5kZWZhdWx0VW5pdCx0aGlzLmFuZ2xlPWUuYW5nbGV8fHRoaXMuYW5nbGV8fFUuZGVmYXVsdEFuZ2xlLFUuZmFsbGJhY2t8fGUuZmFsbGJhY2s/dGhpcy5hbmltYXRlPXRoaXMuZmFsbGJhY2s6KHRoaXMuYW5pbWF0ZT10aGlzLnRyYW5zaXRpb24sdGhpcy5zdHJpbmc9dGhpcy5uYW1lK0IrdGhpcy5kdXJhdGlvbitcIm1zXCIrKFwiZWFzZVwiIT10aGlzLmVhc2U/QittW3RoaXMuZWFzZV1bMF06XCJcIikrKHRoaXMuZGVsYXk/Qit0aGlzLmRlbGF5K1wibXNcIjpcIlwiKSl9LGEuc2V0PWZ1bmN0aW9uKGEpe2E9dGhpcy5jb252ZXJ0KGEsdGhpcy50eXBlKSx0aGlzLnVwZGF0ZShhKSx0aGlzLnJlZHJhdygpfSxhLnRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dGhpcy5hY3RpdmU9ITAsYT10aGlzLmNvbnZlcnQoYSx0aGlzLnR5cGUpLHRoaXMuYXV0byYmKFwiYXV0b1wiPT10aGlzLmVsLnN0eWxlW3RoaXMubmFtZV0mJih0aGlzLnVwZGF0ZSh0aGlzLmdldCgpKSx0aGlzLnJlZHJhdygpKSxcImF1dG9cIj09YSYmKGE9Yi5jYWxsKHRoaXMpKSksdGhpcy5uZXh0U3R5bGU9YX0sYS5mYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYz10aGlzLmVsLnN0eWxlW3RoaXMubmFtZV18fHRoaXMuY29udmVydCh0aGlzLmdldCgpLHRoaXMudHlwZSk7YT10aGlzLmNvbnZlcnQoYSx0aGlzLnR5cGUpLHRoaXMuYXV0byYmKFwiYXV0b1wiPT1jJiYoYz10aGlzLmNvbnZlcnQodGhpcy5nZXQoKSx0aGlzLnR5cGUpKSxcImF1dG9cIj09YSYmKGE9Yi5jYWxsKHRoaXMpKSksdGhpcy50d2Vlbj1uZXcgUih7ZnJvbTpjLHRvOmEsZHVyYXRpb246dGhpcy5kdXJhdGlvbixkZWxheTp0aGlzLmRlbGF5LGVhc2U6dGhpcy5lYXNlLHVwZGF0ZTp0aGlzLnVwZGF0ZSxjb250ZXh0OnRoaXN9KX0sYS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gVyh0aGlzLmVsLHRoaXMubmFtZSl9LGEudXBkYXRlPWZ1bmN0aW9uKGEpe1YodGhpcy5lbCx0aGlzLm5hbWUsYSl9LGEuc3RvcD1mdW5jdGlvbigpeyh0aGlzLmFjdGl2ZXx8dGhpcy5uZXh0U3R5bGUpJiYodGhpcy5hY3RpdmU9ITEsdGhpcy5uZXh0U3R5bGU9bnVsbCxWKHRoaXMuZWwsdGhpcy5uYW1lLHRoaXMuZ2V0KCkpKTt2YXIgYT10aGlzLnR3ZWVuO2EmJmEuY29udGV4dCYmYS5kZXN0cm95KCl9LGEuY29udmVydD1mdW5jdGlvbihhLGIpe2lmKFwiYXV0b1wiPT1hJiZ0aGlzLmF1dG8pcmV0dXJuIGE7dmFyIGMsZT1cIm51bWJlclwiPT10eXBlb2YgYSxmPVwic3RyaW5nXCI9PXR5cGVvZiBhO3N3aXRjaChiKXtjYXNlIHQ6aWYoZSlyZXR1cm4gYTtpZihmJiZcIlwiPT09YS5yZXBsYWNlKHIsXCJcIikpcmV0dXJuK2E7Yz1cIm51bWJlcih1bml0bGVzcylcIjticmVhaztjYXNlIHU6aWYoZil7aWYoXCJcIj09PWEmJnRoaXMub3JpZ2luYWwpcmV0dXJuIHRoaXMub3JpZ2luYWw7aWYoYi50ZXN0KGEpKXJldHVyblwiI1wiPT1hLmNoYXJBdCgwKSYmNz09YS5sZW5ndGg/YTpkKGEpfWM9XCJoZXggb3IgcmdiIHN0cmluZ1wiO2JyZWFrO2Nhc2UgdjppZihlKXJldHVybiBhK3RoaXMudW5pdDtpZihmJiZiLnRlc3QoYSkpcmV0dXJuIGE7Yz1cIm51bWJlcihweCkgb3Igc3RyaW5nKHVuaXQpXCI7YnJlYWs7Y2FzZSB3OmlmKGUpcmV0dXJuIGErdGhpcy51bml0O2lmKGYmJmIudGVzdChhKSlyZXR1cm4gYTtjPVwibnVtYmVyKHB4KSBvciBzdHJpbmcodW5pdCBvciAlKVwiO2JyZWFrO2Nhc2UgeDppZihlKXJldHVybiBhK3RoaXMuYW5nbGU7aWYoZiYmYi50ZXN0KGEpKXJldHVybiBhO2M9XCJudW1iZXIoZGVnKSBvciBzdHJpbmcoYW5nbGUpXCI7YnJlYWs7Y2FzZSB5OmlmKGUpcmV0dXJuIGE7aWYoZiYmdy50ZXN0KGEpKXJldHVybiBhO2M9XCJudW1iZXIodW5pdGxlc3MpIG9yIHN0cmluZyh1bml0IG9yICUpXCJ9cmV0dXJuIGcoYyxhKSxhfSxhLnJlZHJhdz1mdW5jdGlvbigpe3RoaXMuZWwub2Zmc2V0SGVpZ2h0fX0pLE89bChOLGZ1bmN0aW9uKGEsYil7YS5pbml0PWZ1bmN0aW9uKCl7Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLm9yaWdpbmFsfHwodGhpcy5vcmlnaW5hbD10aGlzLmNvbnZlcnQodGhpcy5nZXQoKSx1KSl9fSksUD1sKE4sZnVuY3Rpb24oYSxiKXthLmluaXQ9ZnVuY3Rpb24oKXtiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuYW5pbWF0ZT10aGlzLmZhbGxiYWNrfSxhLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRlbFt0aGlzLm5hbWVdKCl9LGEudXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMuJGVsW3RoaXMubmFtZV0oYSl9fSksUT1sKE4sZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWY9WltjXSxlPWZbMF0sZD1mWzFdfHxjLGc9dGhpcy5jb252ZXJ0KGFbY10sZSksYi5jYWxsKHRoaXMsZCxnLGUpfWEuaW5pdD1mdW5jdGlvbigpe2IuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5jdXJyZW50fHwodGhpcy5jdXJyZW50PXt9LFoucGVyc3BlY3RpdmUmJlUucGVyc3BlY3RpdmUmJih0aGlzLmN1cnJlbnQucGVyc3BlY3RpdmU9VS5wZXJzcGVjdGl2ZSxWKHRoaXMuZWwsdGhpcy5uYW1lLHRoaXMuc3R5bGUodGhpcy5jdXJyZW50KSksdGhpcy5yZWRyYXcoKSkpfSxhLnNldD1mdW5jdGlvbihhKXtjLmNhbGwodGhpcyxhLGZ1bmN0aW9uKGEsYil7dGhpcy5jdXJyZW50W2FdPWJ9KSxWKHRoaXMuZWwsdGhpcy5uYW1lLHRoaXMuc3R5bGUodGhpcy5jdXJyZW50KSksdGhpcy5yZWRyYXcoKX0sYS50cmFuc2l0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMudmFsdWVzKGEpO3RoaXMudHdlZW49bmV3IFQoe2N1cnJlbnQ6dGhpcy5jdXJyZW50LHZhbHVlczpiLGR1cmF0aW9uOnRoaXMuZHVyYXRpb24sZGVsYXk6dGhpcy5kZWxheSxlYXNlOnRoaXMuZWFzZX0pO3ZhciBjLGQ9e307Zm9yKGMgaW4gdGhpcy5jdXJyZW50KWRbY109YyBpbiBiP2JbY106dGhpcy5jdXJyZW50W2NdO3RoaXMuYWN0aXZlPSEwLHRoaXMubmV4dFN0eWxlPXRoaXMuc3R5bGUoZCl9LGEuZmFsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy52YWx1ZXMoYSk7dGhpcy50d2Vlbj1uZXcgVCh7Y3VycmVudDp0aGlzLmN1cnJlbnQsdmFsdWVzOmIsZHVyYXRpb246dGhpcy5kdXJhdGlvbixkZWxheTp0aGlzLmRlbGF5LGVhc2U6dGhpcy5lYXNlLHVwZGF0ZTp0aGlzLnVwZGF0ZSxjb250ZXh0OnRoaXN9KX0sYS51cGRhdGU9ZnVuY3Rpb24oKXtWKHRoaXMuZWwsdGhpcy5uYW1lLHRoaXMuc3R5bGUodGhpcy5jdXJyZW50KSl9LGEuc3R5bGU9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiO2ZvcihiIGluIGEpYys9YitcIihcIithW2JdK1wiKSBcIjtyZXR1cm4gY30sYS52YWx1ZXM9ZnVuY3Rpb24oYSl7dmFyIGIsZD17fTtyZXR1cm4gYy5jYWxsKHRoaXMsYSxmdW5jdGlvbihhLGMsZSl7ZFthXT1jLHZvaWQgMD09PXRoaXMuY3VycmVudFthXSYmKGI9MCx+YS5pbmRleE9mKFwic2NhbGVcIikmJihiPTEpLHRoaXMuY3VycmVudFthXT10aGlzLmNvbnZlcnQoYixlKSl9KSxkfX0pLFI9bChmdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEpezE9PT1uLnB1c2goYSkmJkooZyl9ZnVuY3Rpb24gZygpe3ZhciBhLGIsYyxkPW4ubGVuZ3RoO2lmKGQpZm9yKEooZyksYj1LKCksYT1kO2EtLTspYz1uW2FdLGMmJmMucmVuZGVyKGIpfWZ1bmN0aW9uIGkoYil7dmFyIGMsZD1hLmluQXJyYXkoYixuKTtkPj0wJiYoYz1uLnNsaWNlKGQrMSksbi5sZW5ndGg9ZCxjLmxlbmd0aCYmKG49bi5jb25jYXQoYykpKX1mdW5jdGlvbiBqKGEpe3JldHVybiBNYXRoLnJvdW5kKGEqbykvb31mdW5jdGlvbiBrKGEsYixjKXtyZXR1cm4gZShhWzBdK2MqKGJbMF0tYVswXSksYVsxXStjKihiWzFdLWFbMV0pLGFbMl0rYyooYlsyXS1hWzJdKSl9dmFyIGw9e2Vhc2U6bS5lYXNlWzFdLGZyb206MCx0bzoxfTtiLmluaXQ9ZnVuY3Rpb24oYSl7dGhpcy5kdXJhdGlvbj1hLmR1cmF0aW9ufHwwLHRoaXMuZGVsYXk9YS5kZWxheXx8MDt2YXIgYj1hLmVhc2V8fGwuZWFzZTttW2JdJiYoYj1tW2JdWzFdKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBiJiYoYj1sLmVhc2UpLHRoaXMuZWFzZT1iLHRoaXMudXBkYXRlPWEudXBkYXRlfHxmLHRoaXMuY29tcGxldGU9YS5jb21wbGV0ZXx8Zix0aGlzLmNvbnRleHQ9YS5jb250ZXh0fHx0aGlzLHRoaXMubmFtZT1hLm5hbWU7dmFyIGM9YS5mcm9tLGQ9YS50bzt2b2lkIDA9PT1jJiYoYz1sLmZyb20pLHZvaWQgMD09PWQmJihkPWwudG8pLHRoaXMudW5pdD1hLnVuaXR8fFwiXCIsXCJudW1iZXJcIj09dHlwZW9mIGMmJlwibnVtYmVyXCI9PXR5cGVvZiBkPyh0aGlzLmJlZ2luPWMsdGhpcy5jaGFuZ2U9ZC1jKTp0aGlzLmZvcm1hdChkLGMpLHRoaXMudmFsdWU9dGhpcy5iZWdpbit0aGlzLnVuaXQsdGhpcy5zdGFydD1LKCksYS5hdXRvcGxheSE9PSExJiZ0aGlzLnBsYXkoKX0sYi5wbGF5PWZ1bmN0aW9uKCl7dGhpcy5hY3RpdmV8fCh0aGlzLnN0YXJ0fHwodGhpcy5zdGFydD1LKCkpLHRoaXMuYWN0aXZlPSEwLGModGhpcykpfSxiLnN0b3A9ZnVuY3Rpb24oKXt0aGlzLmFjdGl2ZSYmKHRoaXMuYWN0aXZlPSExLGkodGhpcykpfSxiLnJlbmRlcj1mdW5jdGlvbihhKXt2YXIgYixjPWEtdGhpcy5zdGFydDtpZih0aGlzLmRlbGF5KXtpZihjPD10aGlzLmRlbGF5KXJldHVybjtjLT10aGlzLmRlbGF5fWlmKGM8dGhpcy5kdXJhdGlvbil7dmFyIGQ9dGhpcy5lYXNlKGMsMCwxLHRoaXMuZHVyYXRpb24pO3JldHVybiBiPXRoaXMuc3RhcnRSR0I/ayh0aGlzLnN0YXJ0UkdCLHRoaXMuZW5kUkdCLGQpOmoodGhpcy5iZWdpbitkKnRoaXMuY2hhbmdlKSx0aGlzLnZhbHVlPWIrdGhpcy51bml0LHZvaWQgdGhpcy51cGRhdGUuY2FsbCh0aGlzLmNvbnRleHQsdGhpcy52YWx1ZSl9Yj10aGlzLmVuZEhleHx8dGhpcy5iZWdpbit0aGlzLmNoYW5nZSx0aGlzLnZhbHVlPWIrdGhpcy51bml0LHRoaXMudXBkYXRlLmNhbGwodGhpcy5jb250ZXh0LHRoaXMudmFsdWUpLHRoaXMuY29tcGxldGUuY2FsbCh0aGlzLmNvbnRleHQpLHRoaXMuZGVzdHJveSgpfSxiLmZvcm1hdD1mdW5jdGlvbihhLGIpe2lmKGIrPVwiXCIsYSs9XCJcIixcIiNcIj09YS5jaGFyQXQoMCkpcmV0dXJuIHRoaXMuc3RhcnRSR0I9ZChiKSx0aGlzLmVuZFJHQj1kKGEpLHRoaXMuZW5kSGV4PWEsdGhpcy5iZWdpbj0wLHZvaWQodGhpcy5jaGFuZ2U9MSk7aWYoIXRoaXMudW5pdCl7dmFyIGM9Yi5yZXBsYWNlKHIsXCJcIiksZT1hLnJlcGxhY2UocixcIlwiKTtjIT09ZSYmaChcInR3ZWVuXCIsYixhKSx0aGlzLnVuaXQ9Y31iPXBhcnNlRmxvYXQoYiksYT1wYXJzZUZsb2F0KGEpLHRoaXMuYmVnaW49dGhpcy52YWx1ZT1iLHRoaXMuY2hhbmdlPWEtYn0sYi5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5jb250ZXh0PW51bGwsdGhpcy5lYXNlPXRoaXMudXBkYXRlPXRoaXMuY29tcGxldGU9Zn07dmFyIG49W10sbz0xZTN9KSxTPWwoUixmdW5jdGlvbihhKXthLmluaXQ9ZnVuY3Rpb24oYSl7dGhpcy5kdXJhdGlvbj1hLmR1cmF0aW9ufHwwLHRoaXMuY29tcGxldGU9YS5jb21wbGV0ZXx8Zix0aGlzLmNvbnRleHQ9YS5jb250ZXh0LHRoaXMucGxheSgpfSxhLnJlbmRlcj1mdW5jdGlvbihhKXt2YXIgYj1hLXRoaXMuc3RhcnQ7Yjx0aGlzLmR1cmF0aW9ufHwodGhpcy5jb21wbGV0ZS5jYWxsKHRoaXMuY29udGV4dCksdGhpcy5kZXN0cm95KCkpfX0pLFQ9bChSLGZ1bmN0aW9uKGEsYil7YS5pbml0PWZ1bmN0aW9uKGEpe3RoaXMuY29udGV4dD1hLmNvbnRleHQsdGhpcy51cGRhdGU9YS51cGRhdGUsdGhpcy50d2VlbnM9W10sdGhpcy5jdXJyZW50PWEuY3VycmVudDt2YXIgYixjO2ZvcihiIGluIGEudmFsdWVzKWM9YS52YWx1ZXNbYl0sdGhpcy5jdXJyZW50W2JdIT09YyYmdGhpcy50d2VlbnMucHVzaChuZXcgUih7bmFtZTpiLGZyb206dGhpcy5jdXJyZW50W2JdLHRvOmMsZHVyYXRpb246YS5kdXJhdGlvbixkZWxheTphLmRlbGF5LGVhc2U6YS5lYXNlLGF1dG9wbGF5OiExfSkpO3RoaXMucGxheSgpfSxhLnJlbmRlcj1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy50d2VlbnMubGVuZ3RoLGU9ITE7Zm9yKGI9ZDtiLS07KWM9dGhpcy50d2VlbnNbYl0sYy5jb250ZXh0JiYoYy5yZW5kZXIoYSksdGhpcy5jdXJyZW50W2MubmFtZV09Yy52YWx1ZSxlPSEwKTtyZXR1cm4gZT92b2lkKHRoaXMudXBkYXRlJiZ0aGlzLnVwZGF0ZS5jYWxsKHRoaXMuY29udGV4dCkpOnRoaXMuZGVzdHJveSgpfSxhLmRlc3Ryb3k9ZnVuY3Rpb24oKXtpZihiLmRlc3Ryb3kuY2FsbCh0aGlzKSx0aGlzLnR3ZWVucyl7dmFyIGEsYz10aGlzLnR3ZWVucy5sZW5ndGg7Zm9yKGE9YzthLS07KXRoaXMudHdlZW5zW2FdLmRlc3Ryb3koKTt0aGlzLnR3ZWVucz1udWxsLHRoaXMuY3VycmVudD1udWxsfX19KSxVPWIuY29uZmlnPXtkZWJ1ZzohMSxkZWZhdWx0VW5pdDpcInB4XCIsZGVmYXVsdEFuZ2xlOlwiZGVnXCIsa2VlcEluaGVyaXRlZDohMSxoaWRlQmFja2ZhY2U6ITEscGVyc3BlY3RpdmU6XCJcIixmYWxsYmFjazohRy50cmFuc2l0aW9uLGFnZW50VGVzdHM6W119O2IuZmFsbGJhY2s9ZnVuY3Rpb24oYSl7aWYoIUcudHJhbnNpdGlvbilyZXR1cm4gVS5mYWxsYmFjaz0hMDtVLmFnZW50VGVzdHMucHVzaChcIihcIithK1wiKVwiKTt2YXIgYj1uZXcgUmVnRXhwKFUuYWdlbnRUZXN0cy5qb2luKFwifFwiKSxcImlcIik7VS5mYWxsYmFjaz1iLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl9LGIuZmFsbGJhY2soXCI2LjAuWzItNV0gU2FmYXJpXCIpLGIudHdlZW49ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSKGEpfSxiLmRlbGF5PWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbmV3IFMoe2NvbXBsZXRlOmIsZHVyYXRpb246YSxjb250ZXh0OmN9KX0sYS5mbi50cmFtPWZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwobnVsbCx0aGlzLGEpfTt2YXIgVj1hLnN0eWxlLFc9YS5jc3MsWD17dHJhbnNmb3JtOkcudHJhbnNmb3JtJiZHLnRyYW5zZm9ybS5jc3N9LFk9e2NvbG9yOltPLHVdLGJhY2tncm91bmQ6W08sdSxcImJhY2tncm91bmQtY29sb3JcIl0sXCJvdXRsaW5lLWNvbG9yXCI6W08sdV0sXCJib3JkZXItY29sb3JcIjpbTyx1XSxcImJvcmRlci10b3AtY29sb3JcIjpbTyx1XSxcImJvcmRlci1yaWdodC1jb2xvclwiOltPLHVdLFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiOltPLHVdLFwiYm9yZGVyLWxlZnQtY29sb3JcIjpbTyx1XSxcImJvcmRlci13aWR0aFwiOltOLHZdLFwiYm9yZGVyLXRvcC13aWR0aFwiOltOLHZdLFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCI6W04sdl0sXCJib3JkZXItYm90dG9tLXdpZHRoXCI6W04sdl0sXCJib3JkZXItbGVmdC13aWR0aFwiOltOLHZdLFwiYm9yZGVyLXNwYWNpbmdcIjpbTix2XSxcImxldHRlci1zcGFjaW5nXCI6W04sdl0sbWFyZ2luOltOLHZdLFwibWFyZ2luLXRvcFwiOltOLHZdLFwibWFyZ2luLXJpZ2h0XCI6W04sdl0sXCJtYXJnaW4tYm90dG9tXCI6W04sdl0sXCJtYXJnaW4tbGVmdFwiOltOLHZdLHBhZGRpbmc6W04sdl0sXCJwYWRkaW5nLXRvcFwiOltOLHZdLFwicGFkZGluZy1yaWdodFwiOltOLHZdLFwicGFkZGluZy1ib3R0b21cIjpbTix2XSxcInBhZGRpbmctbGVmdFwiOltOLHZdLFwib3V0bGluZS13aWR0aFwiOltOLHZdLG9wYWNpdHk6W04sdF0sdG9wOltOLHddLHJpZ2h0OltOLHddLGJvdHRvbTpbTix3XSxsZWZ0OltOLHddLFwiZm9udC1zaXplXCI6W04sd10sXCJ0ZXh0LWluZGVudFwiOltOLHddLFwid29yZC1zcGFjaW5nXCI6W04sd10sd2lkdGg6W04sd10sXCJtaW4td2lkdGhcIjpbTix3XSxcIm1heC13aWR0aFwiOltOLHddLGhlaWdodDpbTix3XSxcIm1pbi1oZWlnaHRcIjpbTix3XSxcIm1heC1oZWlnaHRcIjpbTix3XSxcImxpbmUtaGVpZ2h0XCI6W04seV0sXCJzY3JvbGwtdG9wXCI6W1AsdCxcInNjcm9sbFRvcFwiXSxcInNjcm9sbC1sZWZ0XCI6W1AsdCxcInNjcm9sbExlZnRcIl19LFo9e307Ry50cmFuc2Zvcm0mJihZLnRyYW5zZm9ybT1bUV0sWj17eDpbdyxcInRyYW5zbGF0ZVhcIl0seTpbdyxcInRyYW5zbGF0ZVlcIl0scm90YXRlOlt4XSxyb3RhdGVYOlt4XSxyb3RhdGVZOlt4XSxzY2FsZTpbdF0sc2NhbGVYOlt0XSxzY2FsZVk6W3RdLHNrZXc6W3hdLHNrZXdYOlt4XSxza2V3WTpbeF19KSxHLnRyYW5zZm9ybSYmRy5iYWNrZmFjZSYmKFouej1bdyxcInRyYW5zbGF0ZVpcIl0sWi5yb3RhdGVaPVt4XSxaLnNjYWxlWj1bdF0sWi5wZXJzcGVjdGl2ZT1bdl0pO3ZhciAkPS9tcy8sXz0vc3xcXC4vO3JldHVybiBhLnRyYW09Yn0od2luZG93LmpRdWVyeSk7XG4iXSwibmFtZXMiOlsid2luZG93IiwidHJhbSIsImEiLCJiIiwiYyIsIk0iLCJCYXJlIiwiaW5pdCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImQiLCJwYXJzZUludCIsInNsaWNlIiwiZSIsInRvU3RyaW5nIiwiZiIsImciLCJqIiwiaCIsImkiLCIkIiwidGVzdCIsIl8iLCJwYXJzZUZsb2F0IiwiVSIsImRlYnVnIiwiY29uc29sZSIsIndhcm4iLCJrIiwibGVuZ3RoIiwicHVzaCIsImwiLCJhcHBseSIsImFyZ3VtZW50cyIsIk9iamVjdCIsIm0iLCJuIiwiY29uc3RydWN0b3IiLCJtaXhpbiIsIm9wZW4iLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJlYXNlIiwibGluZWFyIiwiTWF0aCIsImNvcyIsIlBJIiwic2luIiwicG93Iiwic3FydCIsIm8iLCJkb2N1bWVudCIsInAiLCJxIiwiciIsInMiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJ6IiwiQSIsIkIiLCJDIiwiY3JlYXRlRWxlbWVudCIsIkQiLCJFIiwiRiIsInN0eWxlIiwiZG9tIiwiY3NzIiwic3BsaXQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIkciLCJzdXBwb3J0IiwiYmluZCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImJhY2tmYWNlIiwidGltaW5nIiwiSCIsIkkiLCJKIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiSyIsIm5vdyIsInBlcmZvcm1hbmNlIiwid2Via2l0Tm93IiwibXNOb3ciLCJtb3pOb3ciLCJEYXRlIiwiTCIsIlkiLCJ3ZWFrIiwicHJvcHMiLCIkZWwiLCJ0aW1lciIsImRlc3Ryb3kiLCJxdWV1ZSIsImFjdGl2ZSIsIlMiLCJkdXJhdGlvbiIsImNvbnRleHQiLCJjb21wbGV0ZSIsInNwYW4iLCJzdG9wIiwiYW5pbWF0ZSIsIndhaXQiLCJuYW1lIiwibmV4dFN0eWxlIiwib3B0aW9ucyIsImFyZ3MiLCJzaGlmdCIsImVsIiwiZGlzcGxheSIsIm9mZnNldEhlaWdodCIsInJlbW92ZURhdGEiLCJ1cHN0cmVhbSIsInN0cmluZyIsImpvaW4iLCJaIiwic2V0IiwiY2hpbGRyZW4iLCJrZWVwSW5oZXJpdGVkIiwiZmFsbGJhY2siLCJXIiwiaGlkZUJhY2tmYWNlIiwiViIsImRhdGEiLCJzdGFydCIsImVhY2giLCJOIiwiZ2V0IiwidXBkYXRlIiwiZXhlYyIsImRlbGF5IiwiWCIsInR5cGUiLCJhdXRvIiwidW5pdCIsImRlZmF1bHRVbml0IiwiYW5nbGUiLCJkZWZhdWx0QW5nbGUiLCJjb252ZXJ0IiwicmVkcmF3IiwidHdlZW4iLCJSIiwiZnJvbSIsInRvIiwib3JpZ2luYWwiLCJPIiwiUCIsIlEiLCJjdXJyZW50IiwicGVyc3BlY3RpdmUiLCJ2YWx1ZXMiLCJUIiwiaW5kZXhPZiIsInJlbmRlciIsImluQXJyYXkiLCJjb25jYXQiLCJyb3VuZCIsImJlZ2luIiwiY2hhbmdlIiwiZm9ybWF0IiwidmFsdWUiLCJhdXRvcGxheSIsInBsYXkiLCJzdGFydFJHQiIsImVuZFJHQiIsImVuZEhleCIsInR3ZWVucyIsImNvbmZpZyIsImFnZW50VGVzdHMiLCJSZWdFeHAiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJmbiIsImNvbG9yIiwiYmFja2dyb3VuZCIsIm1hcmdpbiIsInBhZGRpbmciLCJvcGFjaXR5IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJyb3RhdGUiLCJyb3RhdGVYIiwicm90YXRlWSIsInNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwic2tldyIsInNrZXdYIiwic2tld1kiLCJyb3RhdGVaIiwic2NhbGVaIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQsR0FDdkQsa0JBQWtCLEdBQ2xCOzs7OztDQUtDLEdBQ0QsbUJBQW1CO0FBQ25CQSxPQUFPQyxJQUFJLEdBQUMsU0FBU0MsQ0FBQztJQUFFLFNBQVNDLEVBQUVELENBQUMsRUFBQ0MsQ0FBQztRQUFFLElBQUlDLElBQUUsSUFBSUMsRUFBRUMsSUFBSTtRQUFDLE9BQU9GLEVBQUVHLElBQUksQ0FBQ0wsR0FBRUM7SUFBRTtJQUFDLFNBQVNDLEVBQUVGLENBQUM7UUFBRSxPQUFPQSxFQUFFTSxPQUFPLENBQUMsVUFBUyxTQUFTTixDQUFDO1lBQUUsT0FBTSxNQUFJQSxFQUFFTyxXQUFXO1FBQUU7SUFBRztJQUFDLFNBQVNDLEVBQUVSLENBQUM7UUFBRSxJQUFJQyxJQUFFUSxTQUFTVCxFQUFFVSxLQUFLLENBQUMsSUFBRyxLQUFJUixJQUFFRCxLQUFHLEtBQUcsS0FBSU8sSUFBRVAsS0FBRyxJQUFFLEtBQUlVLElBQUUsTUFBSVY7UUFBRSxPQUFNO1lBQUNDO1lBQUVNO1lBQUVHO1NBQUU7SUFBQTtJQUFDLFNBQVNBLEVBQUVYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUUsT0FBTSxNQUFJLEFBQUMsQ0FBQSxLQUFHLEtBQUdGLEtBQUcsS0FBR0MsS0FBRyxJQUFFQyxDQUFBQSxFQUFHVSxRQUFRLENBQUMsSUFBSUYsS0FBSyxDQUFDO0lBQUU7SUFBQyxTQUFTRyxLQUFJO0lBQUMsU0FBU0MsRUFBRWQsQ0FBQyxFQUFDQyxDQUFDO1FBQUVjLEVBQUUsOEJBQTRCZixJQUFFLGFBQVcsT0FBT0MsSUFBRSxPQUFLQTtJQUFFO0lBQUMsU0FBU2UsRUFBRWhCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUVhLEVBQUUs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

}),
5756: (function (module, __unused_webpack_exports, __webpack_require__) {
// Include tram for frame-throttling
/* globals window */ 
var $ = window.$;
var tram = __webpack_require__(5487) && $.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */ /**
 * Webflow custom build of Underscore.js 1.6.0
 * https://github.com/jashkenas/underscore/tree/1.6.0
 *
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 */ module.exports = function() {
    var _ = {};
    // Current version.
    _.VERSION = '1.6.0-Webflow';
    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};
    // Save bytes in the minified (but not gzipped) version:
    /* eslint-disable one-var */ var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
    /* eslint-enable one-var */ // Create quick reference variables for speed access to core prototypes.
    /* eslint-disable one-var, unused-imports/no-unused-vars */ var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
    /* eslint-enable one-var, unused-imports/no-unused-vars */ // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    /* eslint-disable one-var, unused-imports/no-unused-vars */ var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
    /* eslint-enable one-var, unused-imports/no-unused-vars */ // Collection Functions
    // --------------------
    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function(obj, iterator, context) {
        /* jshint shadow:true */ if (obj == null) return obj;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        // eslint-disable-next-line no-implicit-coercion
        } else if (obj.length === +obj.length) {
            for(var i = 0, length = obj.length; i < length; i++){
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            var keys = _.keys(obj);
            // eslint-disable-next-line no-redeclare
            for(var i = 0, length = keys.length; i < length; i++){
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
        }
        return obj;
    };
    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    };
    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, predicate, context) {
        var result;
        any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };
    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
        each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) results.push(value);
        });
        return results;
    };
    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function(obj, predicate, context) {
        predicate || (predicate = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
        each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list))) return breaker;
        });
        return !!result; // eslint-disable-line no-implicit-coercion
    };
    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) // eslint-disable-next-line eqeqeq
        return obj.indexOf(target) != -1;
        return any(obj, function(value) {
            return value === target;
        });
    };
    // Function (ahem) Functions
    // --------------------
    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args);
        }, wait);
    };
    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function(func) {
        return _.delay.apply(_, [
            func,
            1
        ].concat(slice.call(arguments, 1)));
    };
    // Returns a function, that, when invoked, will only be triggered once every
    // browser animation frame - using tram's requestAnimationFrame polyfill.
    _.throttle = function(func) {
        // eslint-disable-next-line one-var
        var wait, args, context;
        return function() {
            if (wait) return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
                wait = false;
                func.apply(context, args);
            });
        };
    };
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function(func, wait, immediate) {
        // eslint-disable-next-line one-var
        var timeout, args, context, timestamp, result;
        var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    context = args = null;
                }
            }
        };
        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
    // Object Functions
    // ----------------
    // Fill in a given object with default properties.
    _.defaults = function(obj) {
        if (!_.isObject(obj)) return obj;
        for(var i = 1, length = arguments.length; i < length; i++){
            var source = arguments[i];
            for(var prop in source){
                // eslint-disable-next-line no-void
                if (obj[prop] === void 0) obj[prop] = source[prop];
            }
        }
        return obj;
    };
    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for(var key in obj)if (_.has(obj, key)) keys.push(key);
        return keys;
    };
    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };
    // Is a given variable an object?
    _.isObject = function(obj) {
        return obj === Object(obj);
    };
    // Utility Functions
    // -----------------
    // A (possibly faster) way to get the current timestamp as an integer.
    _.now = Date.now || function() {
        return new Date().getTime();
    };
    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;
    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };
    var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
    var escapeChar = function(match) {
        return '\\' + escapes[match];
    };
    // In order to prevent third-party code injection through
    // `_.templateSettings.variable`, we test it against the following regular
    // expression. It is intentionally a bit more liberal than just matching valid
    // identifiers, but still prevents possible loopholes through defaults or
    // destructuring assignment.
    var bareIdentifier = /^\s*(\w|\$)+\s*$/;
    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    _.template = function(text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);
        // Combine delimiters into one regular expression via alternation.
        var matcher = RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');
        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            // Adobe VMs need the match returned to produce the correct offset.
            return match;
        });
        source += "';\n";
        var argument = settings.variable;
        if (argument) {
            // Insure against third-party code injection. (CVE-2021-23358)
            if (!bareIdentifier.test(argument)) throw new Error('variable is not a bare identifier: ' + argument);
        } else {
            // If a variable is not specified, place data values in local scope.
            source = 'with(obj||{}){\n' + source + '}\n';
            argument = 'obj';
        }
        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
        var render;
        try {
            // eslint-disable-next-line no-new-func
            render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }
        var template = function(data) {
            return render.call(this, data, _);
        };
        // Provide the compiled source as a convenience for precompilation.
        template.source = 'function(' + argument + '){\n' + source + '}';
        return template;
    };
    // Export underscore
    return _;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZGVyc2NvcmUtY3VzdG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdHJhbSBmb3IgZnJhbWUtdGhyb3R0bGluZ1xuLyogZ2xvYmFscyB3aW5kb3cgKi9cblxudmFyICQgPSB3aW5kb3cuJDtcbnZhciB0cmFtID0gcmVxdWlyZSgnLi90cmFtLW1pbicpICYmICQudHJhbTtcblxuLyohXG4gKiBXZWJmbG93Ll8gKGFrYSkgVW5kZXJzY29yZS5qcyAxLjYuMCAoY3VzdG9tIGJ1aWxkKVxuICpcbiAqIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4gKiAoYykgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbi8qKlxuICogV2ViZmxvdyBjdXN0b20gYnVpbGQgb2YgVW5kZXJzY29yZS5qcyAxLjYuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL3RyZWUvMS42LjBcbiAqXG4gKiBfLmVhY2hcbiAqIF8ubWFwXG4gKiBfLmZpbmRcbiAqIF8uZmlsdGVyXG4gKiBfLmFueVxuICogXy5jb250YWluc1xuICogXy5kZWxheVxuICogXy5kZWZlclxuICogXy50aHJvdHRsZSAod2ViZmxvdylcbiAqIF8uZGVib3VuY2VcbiAqIF8ua2V5c1xuICogXy5oYXNcbiAqIF8ubm93XG4gKiBfLnRlbXBsYXRlICh3ZWJmbG93OiB1cGdyYWRlZCB0byAxLjEzLjYpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIF8gPSB7fTtcblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjYuMC1XZWJmbG93JztcblxuICAvLyBFc3RhYmxpc2ggdGhlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgdG8gYnJlYWsgb3V0IG9mIGEgbG9vcCBpdGVyYXRpb24uXG4gIHZhciBicmVha2VyID0ge307XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgLyogZXNsaW50LWRpc2FibGUgb25lLXZhciAqL1xuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvKiBlc2xpbnQtZW5hYmxlIG9uZS12YXIgKi9cblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgLyogZXNsaW50LWRpc2FibGUgb25lLXZhciwgdW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIHB1c2ggPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIGNvbmNhdCA9IEFycmF5UHJvdG8uY29uY2F0LFxuICAgIHRvU3RyaW5nID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcbiAgLyogZXNsaW50LWVuYWJsZSBvbmUtdmFyLCB1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtdmFycyAqL1xuXG4gIC8vIEFsbCAqKkVDTUFTY3JpcHQgNSoqIG5hdGl2ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3ZSBob3BlIHRvIHVzZVxuICAvLyBhcmUgZGVjbGFyZWQgaGVyZS5cbiAgLyogZXNsaW50LWRpc2FibGUgb25lLXZhciwgdW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIG5hdGl2ZUZvckVhY2ggPSBBcnJheVByb3RvLmZvckVhY2gsXG4gICAgbmF0aXZlTWFwID0gQXJyYXlQcm90by5tYXAsXG4gICAgbmF0aXZlUmVkdWNlID0gQXJyYXlQcm90by5yZWR1Y2UsXG4gICAgbmF0aXZlUmVkdWNlUmlnaHQgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0LFxuICAgIG5hdGl2ZUZpbHRlciA9IEFycmF5UHJvdG8uZmlsdGVyLFxuICAgIG5hdGl2ZUV2ZXJ5ID0gQXJyYXlQcm90by5ldmVyeSxcbiAgICBuYXRpdmVTb21lID0gQXJyYXlQcm90by5zb21lLFxuICAgIG5hdGl2ZUluZGV4T2YgPSBBcnJheVByb3RvLmluZGV4T2YsXG4gICAgbmF0aXZlTGFzdEluZGV4T2YgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mLFxuICAgIG5hdGl2ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgPSBPYmplY3Qua2V5cyxcbiAgICBuYXRpdmVCaW5kID0gRnVuY1Byb3RvLmJpbmQ7XG4gIC8qIGVzbGludC1lbmFibGUgb25lLXZhciwgdW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnMgKi9cblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIG9iamVjdHMgd2l0aCB0aGUgYnVpbHQtaW4gYGZvckVhY2hgLCBhcnJheXMsIGFuZCByYXcgb2JqZWN0cy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZvckVhY2hgIGlmIGF2YWlsYWJsZS5cbiAgdmFyIGVhY2ggPVxuICAgIChfLmVhY2ggPVxuICAgIF8uZm9yRWFjaCA9XG4gICAgICBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgICAgICAvKiBqc2hpbnQgc2hhZG93OnRydWUgKi9cbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgICAgICBpZiAobmF0aXZlRm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gbmF0aXZlRm9yRWFjaCkge1xuICAgICAgICAgIG9iai5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cbiAgICAgICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleXNbaV1dLCBrZXlzW2ldLCBvYmopID09PSBicmVha2VyKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9KTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdG9yIHRvIGVhY2ggZWxlbWVudC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYG1hcGAgaWYgYXZhaWxhYmxlLlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVNYXAgJiYgb2JqLm1hcCA9PT0gbmF0aXZlTWFwKSByZXR1cm4gb2JqLm1hcChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbiAob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGFueShvYmosIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmaWx0ZXJgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uIChvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlRmlsdGVyICYmIG9iai5maWx0ZXIgPT09IG5hdGl2ZUZpbHRlcilcbiAgICAgIHJldHVybiBvYmouZmlsdGVyKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgc29tZWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICB2YXIgYW55ID1cbiAgICAoXy5zb21lID1cbiAgICBfLmFueSA9XG4gICAgICBmdW5jdGlvbiAob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgICAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBfLmlkZW50aXR5KTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGlmIChuYXRpdmVTb21lICYmIG9iai5zb21lID09PSBuYXRpdmVTb21lKVxuICAgICAgICAgIHJldHVybiBvYmouc29tZShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgICBlYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgICAgIGlmIChyZXN1bHQgfHwgKHJlc3VsdCA9IHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKVxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrZXI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gISFyZXN1bHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cbiAgICAgIH0pO1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gdmFsdWUgKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbiAob2JqLCB0YXJnZXQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBvYmouaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZilcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgIHJldHVybiBvYmouaW5kZXhPZih0YXJnZXQpICE9IC0xO1xuICAgIHJldHVybiBhbnkob2JqLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdGFyZ2V0O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uIChmdW5jLCB3YWl0KSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBmdW5jdGlvbiAoZnVuYykge1xuICAgIHJldHVybiBfLmRlbGF5LmFwcGx5KF8sIFtmdW5jLCAxXS5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZSBldmVyeVxuICAvLyBicm93c2VyIGFuaW1hdGlvbiBmcmFtZSAtIHVzaW5nIHRyYW0ncyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwuXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbiAoZnVuYykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvbmUtdmFyXG4gICAgdmFyIHdhaXQsIGFyZ3MsIGNvbnRleHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3YWl0KSByZXR1cm47XG4gICAgICB3YWl0ID0gdHJ1ZTtcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIHRyYW0uZnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uIChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb25lLXZhclxuICAgIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsYXN0ID0gXy5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICAgIGlmIChsYXN0IDwgd2FpdCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IF8ubm93KCk7XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICB9XG4gICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIGZvciAodmFyIGkgPSAxLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdm9pZFxuICAgICAgICBpZiAob2JqW3Byb3BdID09PSB2b2lkIDApIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG4gIF8ubm93ID1cbiAgICBEYXRlLm5vdyB8fFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZTogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgICBpbnRlcnBvbGF0ZTogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlOiAvPCUtKFtcXHNcXFNdKz8pJT4vZyxcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogXCInXCIsXG4gICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgJ1xccic6ICdyJyxcbiAgICAnXFxuJzogJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOScsXG4gIH07XG5cbiAgdmFyIGVzY2FwZVJlZ0V4cCA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuICB2YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTtcbiAgfTtcblxuICAvLyBJbiBvcmRlciB0byBwcmV2ZW50IHRoaXJkLXBhcnR5IGNvZGUgaW5qZWN0aW9uIHRocm91Z2hcbiAgLy8gYF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZWAsIHdlIHRlc3QgaXQgYWdhaW5zdCB0aGUgZm9sbG93aW5nIHJlZ3VsYXJcbiAgLy8gZXhwcmVzc2lvbi4gSXQgaXMgaW50ZW50aW9uYWxseSBhIGJpdCBtb3JlIGxpYmVyYWwgdGhhbiBqdXN0IG1hdGNoaW5nIHZhbGlkXG4gIC8vIGlkZW50aWZpZXJzLCBidXQgc3RpbGwgcHJldmVudHMgcG9zc2libGUgbG9vcGhvbGVzIHRocm91Z2ggZGVmYXVsdHMgb3JcbiAgLy8gZGVzdHJ1Y3R1cmluZyBhc3NpZ25tZW50LlxuICB2YXIgYmFyZUlkZW50aWZpZXIgPSAvXlxccyooXFx3fFxcJCkrXFxzKiQvO1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIC8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uICh0ZXh0LCBzZXR0aW5ncywgb2xkU2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzICYmIG9sZFNldHRpbmdzKSBzZXR0aW5ncyA9IG9sZFNldHRpbmdzO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IFJlZ0V4cChcbiAgICAgIFtcbiAgICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICBdLmpvaW4oJ3wnKSArICd8JCcsXG4gICAgICAnZydcbiAgICApO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShcbiAgICAgIG1hdGNoZXIsXG4gICAgICBmdW5jdGlvbiAobWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZShlc2NhcGVSZWdFeHAsIGVzY2FwZUNoYXIpO1xuICAgICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcblxuICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZnNldC5cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfVxuICAgICk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIHZhciBhcmd1bWVudCA9IHNldHRpbmdzLnZhcmlhYmxlO1xuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgLy8gSW5zdXJlIGFnYWluc3QgdGhpcmQtcGFydHkgY29kZSBpbmplY3Rpb24uIChDVkUtMjAyMS0yMzM1OClcbiAgICAgIGlmICghYmFyZUlkZW50aWZpZXIudGVzdChhcmd1bWVudCkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndmFyaWFibGUgaXMgbm90IGEgYmFyZSBpZGVudGlmaWVyOiAnICsgYXJndW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgICAgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcbiAgICAgIGFyZ3VtZW50ID0gJ29iaic7XG4gICAgfVxuXG4gICAgc291cmNlID1cbiAgICAgIFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgK1xuICAgICAgJ3JldHVybiBfX3A7XFxuJztcblxuICAgIHZhciByZW5kZXI7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBFeHBvcnQgdW5kZXJzY29yZVxuICByZXR1cm4gXztcbn0pKCk7XG4iXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInRyYW0iLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl8iLCJWRVJTSU9OIiwiYnJlYWtlciIsIkFycmF5UHJvdG8iLCJBcnJheSIsInByb3RvdHlwZSIsIk9ialByb3RvIiwiT2JqZWN0IiwiRnVuY1Byb3RvIiwiRnVuY3Rpb24iLCJwdXNoIiwic2xpY2UiLCJjb25jYXQiLCJ0b1N0cmluZyIsImhhc093blByb3BlcnR5IiwibmF0aXZlRm9yRWFjaCIsImZvckVhY2giLCJuYXRpdmVNYXAiLCJtYXAiLCJuYXRpdmVSZWR1Y2UiLCJyZWR1Y2UiLCJuYXRpdmVSZWR1Y2VSaWdodCIsInJlZHVjZVJpZ2h0IiwibmF0aXZlRmlsdGVyIiwiZmlsdGVyIiwibmF0aXZlRXZlcnkiLCJldmVyeSIsIm5hdGl2ZVNvbWUiLCJzb21lIiwibmF0aXZlSW5kZXhPZiIsImluZGV4T2YiLCJuYXRpdmVMYXN0SW5kZXhPZiIsImxhc3RJbmRleE9mIiwibmF0aXZlSXNBcnJheSIsImlzQXJyYXkiLCJuYXRpdmVLZXlzIiwia2V5cyIsIm5hdGl2ZUJpbmQiLCJiaW5kIiwiZWFjaCIsIm9iaiIsIml0ZXJhdG9yIiwiY29udGV4dCIsImxlbmd0aCIsImkiLCJjYWxsIiwiY29sbGVjdCIsInJlc3VsdHMiLCJ2YWx1ZSIsImluZGV4IiwibGlzdCIsImZpbmQiLCJkZXRlY3QiLCJwcmVkaWNhdGUiLCJyZXN1bHQiLCJhbnkiLCJzZWxlY3QiLCJpZGVudGl0eSIsImNvbnRhaW5zIiwiaW5jbHVkZSIsInRhcmdldCIsImRlbGF5IiwiZnVuYyIsIndhaXQiLCJhcmdzIiwiYXJndW1lbnRzIiwic2V0VGltZW91dCIsImFwcGx5IiwiZGVmZXIiLCJ0aHJvdHRsZSIsImZyYW1lIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwidGltZXN0YW1wIiwibGF0ZXIiLCJsYXN0Iiwibm93IiwiY2FsbE5vdyIsImRlZmF1bHRzIiwiaXNPYmplY3QiLCJzb3VyY2UiLCJwcm9wIiwia2V5IiwiaGFzIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZW1wbGF0ZVNldHRpbmdzIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsIm5vTWF0Y2giLCJlc2NhcGVzIiwiZXNjYXBlUmVnRXhwIiwiZXNjYXBlQ2hhciIsIm1hdGNoIiwiYmFyZUlkZW50aWZpZXIiLCJ0ZW1wbGF0ZSIsInRleHQiLCJzZXR0aW5ncyIsIm9sZFNldHRpbmdzIiwibWF0Y2hlciIsIlJlZ0V4cCIsImpvaW4iLCJyZXBsYWNlIiwib2Zmc2V0IiwiYXJndW1lbnQiLCJ2YXJpYWJsZSIsInRlc3QiLCJFcnJvciIsInJlbmRlciIsImUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBRWxCLElBQUlBLElBQUlDLE9BQU9ELENBQUM7QUFDaEIsSUFBSUUsT0FBT0MsUUFBUSxpQkFBaUJILEVBQUVFLElBQUk7QUFFMUM7Ozs7Ozs7Q0FPQyxHQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkMsR0FDREUsT0FBT0MsT0FBTyxHQUFHLEFBQUM7SUFDaEIsSUFBSUMsSUFBSSxDQUFDO0lBRVQsbUJBQW1CO0lBQ25CQSxFQUFFQyxPQUFPLEdBQUc7SUFFWiw0RUFBNEU7SUFDNUUsSUFBSUMsVUFBVSxDQUFDO0lBRWYsd0RBQXdEO0lBQ3hELDBCQUEwQixHQUMxQixJQUFJQyxhQUFhQyxNQUFNQyxTQUFTLEVBQzlCQyxXQUFXQyxPQUFPRixTQUFTLEVBQzNCRyxZQUFZQyxTQUFTSixTQUFTO0lBQ2hDLHlCQUF5QixHQUV6Qix3RUFBd0U7SUFDeEUseURBQXlELEdBQ3pELElBQUlLLE9BQU9QLFdBQVdPLElBQUksRUFDeEJDLFFBQVFSLFdBQVdRLEtBQUssRUFDeEJDLFNBQVNULFdBQVdTLE1BQU0sRUFDMUJDLFdBQVdQLFNBQVNPLFFBQVEsRUFDNUJDLGlCQUFpQlIsU0FBU1EsY0FBYztJQUMxQyx3REFBd0QsR0FFeEQsMkVBQTJFO0lBQzNFLHFCQUFxQjtJQUNyQix5REFBeUQsR0FDekQsSUFBSUMsZ0JBQWdCWixXQUFXYSxPQUFPLEVBQ3BDQyxZQUFZZCxXQUFXZSxHQUFHLEVBQzFC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

}),
3949: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document, navigator, WEBFLOW_ENV_TEST */ /**
 * Webflow: Core site library
 */ 
var Webflow = {};
var modules = {};
var primary = [];
var secondary = window.Webflow || [];
var $ = window.jQuery;
var $win = $(window);
var $doc = $(document);
var isFunction = $.isFunction;
var _ = Webflow._ = __webpack_require__(5756);
var tram = Webflow.tram = __webpack_require__(5487) && $.tram;
var domready = false;
var destroyed = false;
tram.config.hideBackface = false;
tram.config.keepInherited = true;
/**
 * Webflow.define - Define a named module
 * @param  {string} name
 * @param  {function} factory
 * @param  {object} [options]
 * @return {object}
 */ Webflow.define = function(name, factory, options) {
    if (modules[name]) {
        unbindModule(modules[name]);
    }
    var instance = modules[name] = factory($, _, options) || {};
    bindModule(instance);
    return instance;
};
/**
 * Webflow.require - Require a named module
 * @param  {string} name
 * @return {object}
 */ Webflow.require = function(name) {
    return modules[name];
};
function bindModule(module1) {
    // If running in Webflow app, subscribe to design/preview events
    if (Webflow.env()) {
        isFunction(module1.design) && $win.on('__wf_design', module1.design);
        isFunction(module1.preview) && $win.on('__wf_preview', module1.preview);
    }
    // Subscribe to front-end destroy event
    isFunction(module1.destroy) && $win.on('__wf_destroy', module1.destroy);
    // Look for ready method on module
    if (module1.ready && isFunction(module1.ready)) {
        addReady(module1);
    }
}
function addReady(module1) {
    // If domready has already happened, run ready method
    if (domready) {
        module1.ready();
        return;
    }
    // Otherwise add ready method to the primary queue (only once)
    if (_.contains(primary, module1.ready)) {
        return;
    }
    primary.push(module1.ready);
}
function unbindModule(module1) {
    // Unsubscribe module from window events
    isFunction(module1.design) && $win.off('__wf_design', module1.design);
    isFunction(module1.preview) && $win.off('__wf_preview', module1.preview);
    isFunction(module1.destroy) && $win.off('__wf_destroy', module1.destroy);
    // Remove ready method from primary queue
    if (module1.ready && isFunction(module1.ready)) {
        removeReady(module1);
    }
}
function removeReady(module1) {
    primary = _.filter(primary, function(readyFn) {
        return readyFn !== module1.ready;
    });
}
/**
 * Webflow.push - Add a ready handler into secondary queue
 * @param {function} ready  Callback to invoke on domready
 */ Webflow.push = function(ready) {
    // If domready has already happened, invoke handler
    if (domready) {
        isFunction(ready) && ready();
        return;
    }
    // Otherwise push into secondary queue
    secondary.push(ready);
};
/**
 * Webflow.env - Get the state of the Webflow app
 * @param {string} mode [optional]
 * @return {boolean}
 */ Webflow.env = function(mode) {
    var designFlag = window.__wf_design;
    var inApp = typeof designFlag !== 'undefined';
    if (!mode) {
        return inApp;
    }
    if (mode === 'design') {
        return inApp && designFlag;
    }
    if (mode === 'preview') {
        return inApp && !designFlag;
    }
    if (mode === 'slug') {
        return inApp && window.__wf_slug;
    }
    if (mode === 'editor') {
        return window.WebflowEditor;
    }
    if (mode === 'test') {
        return  false || window.__wf_test;
    }
    if (mode === 'frame') {
        return window !== window.top;
    }
};
// Feature detects + browser sniffs  ಠ_ಠ
var userAgent = navigator.userAgent.toLowerCase();
var touch = Webflow.env.touch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
// Maintain current touch target to prevent late clicks on touch devices
var touchTarget;
// Listen for both events to support touch/mouse hybrid devices
touch && $doc.on('touchstart mousedown', function(evt) {
    touchTarget = evt.target;
});
/**
 * Webflow.validClick - validate click target against current touch target
 * @param  {HTMLElement} clickTarget  Element being clicked
 * @return {Boolean}  True if click target is valid (always true on non-touch)
 */ Webflow.validClick = touch ? function(clickTarget) {
    return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
} : function() {
    return true;
};
/**
 * Webflow.resize, Webflow.scroll - throttled event proxies
 */ var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
var scrollEvents = 'scroll.webflow ' + resizeEvents;
Webflow.resize = eventProxy($win, resizeEvents);
Webflow.scroll = eventProxy($win, scrollEvents);
Webflow.redraw = eventProxy();
// Create a proxy instance for throttled events
function eventProxy(target, types) {
    // Set up throttled method (using custom frame-based _.throttle)
    var handlers = [];
    var proxy = {};
    proxy.up = _.throttle(function(evt) {
        _.each(handlers, function(h) {
            h(evt);
        });
    });
    // Bind events to target
    if (target && types) {
        target.on(types, proxy.up);
    }
    /**
   * Add an event handler
   * @param  {function} handler
   */ proxy.on = function(handler) {
        if (typeof handler !== 'function') {
            return;
        }
        if (_.contains(handlers, handler)) {
            return;
        }
        handlers.push(handler);
    };
    /**
   * Remove an event handler
   * @param  {function} handler
   */ proxy.off = function(handler) {
        // If no arguments supplied, clear all handlers
        if (!arguments.length) {
            handlers = [];
            return;
        }
        // Otherwise, remove handler from the list
        handlers = _.filter(handlers, function(h) {
            return h !== handler;
        });
    };
    return proxy;
}
// Webflow.location - Wrap window.location in api
Webflow.location = function(url) {
    window.location = url;
};
if (Webflow.env()) {
    // Ignore redirects inside a Webflow design/edit environment
    Webflow.location = function() {};
}
// Webflow.ready - Call primary and secondary handlers
Webflow.ready = function() {
    domready = true;
    // Restore modules after destroy
    if (destroyed) {
        restoreModules();
    // Otherwise run primary ready methods
    } else {
        _.each(primary, callReady);
    }
    // Run secondary ready methods
    _.each(secondary, callReady);
    // Trigger resize
    Webflow.resize.up();
};
function callReady(readyFn) {
    isFunction(readyFn) && readyFn();
}
function restoreModules() {
    destroyed = false;
    _.each(modules, bindModule);
}
/**
 * Webflow.load - Add a window load handler that will run even if load event has already happened
 * @param  {function} handler
 */ var deferLoad;
Webflow.load = function(handler) {
    deferLoad.then(handler);
};
function bindLoad() {
    // Reject any previous deferred (to support destroy)
    if (deferLoad) {
        deferLoad.reject();
        $win.off('load', deferLoad.resolve);
    }
    // Create deferred and bind window load event
    deferLoad = new $.Deferred();
    $win.on('load', deferLoad.resolve);
}
// Webflow.destroy - Trigger a destroy event for all modules
Webflow.destroy = function(options) {
    options = options || {};
    destroyed = true;
    $win.triggerHandler('__wf_destroy');
    // Allow domready reset for tests
    if (options.domready != null) {
        domready = options.domready;
    }
    // Unbind modules
    _.each(modules, unbindModule);
    // Clear any proxy event handlers
    Webflow.resize.off();
    Webflow.scroll.off();
    Webflow.redraw.off();
    // Clear any queued ready methods
    primary = [];
    secondary = [];
    // If load event has not yet fired, replace the deferred
    if (deferLoad.state() === 'pending') {
        bindLoad();
    }
};
// Listen for domready
$(Webflow.ready);
// Listen for window.onload and resolve deferred
bindLoad();
// Export commonjs module
module.exports = window.Webflow = Webflow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctbGliLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCwgbmF2aWdhdG9yLCBXRUJGTE9XX0VOVl9URVNUICovXG5cbi8qKlxuICogV2ViZmxvdzogQ29yZSBzaXRlIGxpYnJhcnlcbiAqL1xudmFyIFdlYmZsb3cgPSB7fTtcbnZhciBtb2R1bGVzID0ge307XG52YXIgcHJpbWFyeSA9IFtdO1xudmFyIHNlY29uZGFyeSA9IHdpbmRvdy5XZWJmbG93IHx8IFtdO1xudmFyICQgPSB3aW5kb3cualF1ZXJ5O1xudmFyICR3aW4gPSAkKHdpbmRvdyk7XG52YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xudmFyIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XG52YXIgXyA9IChXZWJmbG93Ll8gPSByZXF1aXJlKCcuL3VuZGVyc2NvcmUtY3VzdG9tJykpO1xudmFyIHRyYW0gPSAoV2ViZmxvdy50cmFtID0gcmVxdWlyZSgnLi90cmFtLW1pbicpICYmICQudHJhbSk7XG52YXIgZG9tcmVhZHkgPSBmYWxzZTtcbnZhciBkZXN0cm95ZWQgPSBmYWxzZTtcblxudHJhbS5jb25maWcuaGlkZUJhY2tmYWNlID0gZmFsc2U7XG50cmFtLmNvbmZpZy5rZWVwSW5oZXJpdGVkID0gdHJ1ZTtcblxuLyoqXG4gKiBXZWJmbG93LmRlZmluZSAtIERlZmluZSBhIG5hbWVkIG1vZHVsZVxuICogQHBhcmFtICB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gZmFjdG9yeVxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuV2ViZmxvdy5kZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgZmFjdG9yeSwgb3B0aW9ucykge1xuICBpZiAobW9kdWxlc1tuYW1lXSkge1xuICAgIHVuYmluZE1vZHVsZShtb2R1bGVzW25hbWVdKTtcbiAgfVxuICB2YXIgaW5zdGFuY2UgPSAobW9kdWxlc1tuYW1lXSA9IGZhY3RvcnkoJCwgXywgb3B0aW9ucykgfHwge30pO1xuICBiaW5kTW9kdWxlKGluc3RhbmNlKTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBXZWJmbG93LnJlcXVpcmUgLSBSZXF1aXJlIGEgbmFtZWQgbW9kdWxlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuV2ViZmxvdy5yZXF1aXJlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG1vZHVsZXNbbmFtZV07XG59O1xuXG5mdW5jdGlvbiBiaW5kTW9kdWxlKG1vZHVsZSkge1xuICAvLyBJZiBydW5uaW5nIGluIFdlYmZsb3cgYXBwLCBzdWJzY3JpYmUgdG8gZGVzaWduL3ByZXZpZXcgZXZlbnRzXG4gIGlmIChXZWJmbG93LmVudigpKSB7XG4gICAgaXNGdW5jdGlvbihtb2R1bGUuZGVzaWduKSAmJiAkd2luLm9uKCdfX3dmX2Rlc2lnbicsIG1vZHVsZS5kZXNpZ24pO1xuICAgIGlzRnVuY3Rpb24obW9kdWxlLnByZXZpZXcpICYmICR3aW4ub24oJ19fd2ZfcHJldmlldycsIG1vZHVsZS5wcmV2aWV3KTtcbiAgfVxuICAvLyBTdWJzY3JpYmUgdG8gZnJvbnQtZW5kIGRlc3Ryb3kgZXZlbnRcbiAgaXNGdW5jdGlvbihtb2R1bGUuZGVzdHJveSkgJiYgJHdpbi5vbignX193Zl9kZXN0cm95JywgbW9kdWxlLmRlc3Ryb3kpO1xuICAvLyBMb29rIGZvciByZWFkeSBtZXRob2Qgb24gbW9kdWxlXG4gIGlmIChtb2R1bGUucmVhZHkgJiYgaXNGdW5jdGlvbihtb2R1bGUucmVhZHkpKSB7XG4gICAgYWRkUmVhZHkobW9kdWxlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSZWFkeShtb2R1bGUpIHtcbiAgLy8gSWYgZG9tcmVhZHkgaGFzIGFscmVhZHkgaGFwcGVuZWQsIHJ1biByZWFkeSBtZXRob2RcbiAgaWYgKGRvbXJlYWR5KSB7XG4gICAgbW9kdWxlLnJlYWR5KCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIE90aGVyd2lzZSBhZGQgcmVhZHkgbWV0aG9kIHRvIHRoZSBwcmltYXJ5IHF1ZXVlIChvbmx5IG9uY2UpXG4gIGlmIChfLmNvbnRhaW5zKHByaW1hcnksIG1vZHVsZS5yZWFkeSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJpbWFyeS5wdXNoKG1vZHVsZS5yZWFkeSk7XG59XG5cbmZ1bmN0aW9uIHVuYmluZE1vZHVsZShtb2R1bGUpIHtcbiAgLy8gVW5zdWJzY3JpYmUgbW9kdWxlIGZyb20gd2luZG93IGV2ZW50c1xuICBpc0Z1bmN0aW9uKG1vZHVsZS5kZXNpZ24pICYmICR3aW4ub2ZmKCdfX3dmX2Rlc2lnbicsIG1vZHVsZS5kZXNpZ24pO1xuICBpc0Z1bmN0aW9uKG1vZHVsZS5wcmV2aWV3KSAmJiAkd2luLm9mZignX193Zl9wcmV2aWV3JywgbW9kdWxlLnByZXZpZXcpO1xuICBpc0Z1bmN0aW9uKG1vZHVsZS5kZXN0cm95KSAmJiAkd2luLm9mZignX193Zl9kZXN0cm95JywgbW9kdWxlLmRlc3Ryb3kpO1xuICAvLyBSZW1vdmUgcmVhZHkgbWV0aG9kIGZyb20gcHJpbWFyeSBxdWV1ZVxuICBpZiAobW9kdWxlLnJlYWR5ICYmIGlzRnVuY3Rpb24obW9kdWxlLnJlYWR5KSkge1xuICAgIHJlbW92ZVJlYWR5KG1vZHVsZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVhZHkobW9kdWxlKSB7XG4gIHByaW1hcnkgPSBfLmZpbHRlcihwcmltYXJ5LCBmdW5jdGlvbiAocmVhZHlGbikge1xuICAgIHJldHVybiByZWFkeUZuICE9PSBtb2R1bGUucmVhZHk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFdlYmZsb3cucHVzaCAtIEFkZCBhIHJlYWR5IGhhbmRsZXIgaW50byBzZWNvbmRhcnkgcXVldWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlYWR5ICBDYWxsYmFjayB0byBpbnZva2Ugb24gZG9tcmVhZHlcbiAqL1xuV2ViZmxvdy5wdXNoID0gZnVuY3Rpb24gKHJlYWR5KSB7XG4gIC8vIElmIGRvbXJlYWR5IGhhcyBhbHJlYWR5IGhhcHBlbmVkLCBpbnZva2UgaGFuZGxlclxuICBpZiAoZG9tcmVhZHkpIHtcbiAgICBpc0Z1bmN0aW9uKHJlYWR5KSAmJiByZWFkeSgpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBPdGhlcndpc2UgcHVzaCBpbnRvIHNlY29uZGFyeSBxdWV1ZVxuICBzZWNvbmRhcnkucHVzaChyZWFkeSk7XG59O1xuXG4vKipcbiAqIFdlYmZsb3cuZW52IC0gR2V0IHRoZSBzdGF0ZSBvZiB0aGUgV2ViZmxvdyBhcHBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIFtvcHRpb25hbF1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbldlYmZsb3cuZW52ID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgdmFyIGRlc2lnbkZsYWcgPSB3aW5kb3cuX193Zl9kZXNpZ247XG4gIHZhciBpbkFwcCA9IHR5cGVvZiBkZXNpZ25GbGFnICE9PSAndW5kZWZpbmVkJztcbiAgaWYgKCFtb2RlKSB7XG4gICAgcmV0dXJuIGluQXBwO1xuICB9XG4gIGlmIChtb2RlID09PSAnZGVzaWduJykge1xuICAgIHJldHVybiBpbkFwcCAmJiBkZXNpZ25GbGFnO1xuICB9XG4gIGlmIChtb2RlID09PSAncHJldmlldycpIHtcbiAgICByZXR1cm4gaW5BcHAgJiYgIWRlc2lnbkZsYWc7XG4gIH1cbiAgaWYgKG1vZGUgPT09ICdzbHVnJykge1xuICAgIHJldHVybiBpbkFwcCAmJiB3aW5kb3cuX193Zl9zbHVnO1xuICB9XG4gIGlmIChtb2RlID09PSAnZWRpdG9yJykge1xuICAgIHJldHVybiB3aW5kb3cuV2ViZmxvd0VkaXRvcjtcbiAgfVxuICBpZiAobW9kZSA9PT0gJ3Rlc3QnKSB7XG4gICAgcmV0dXJuIFdFQkZMT1dfRU5WX1RFU1QgfHwgd2luZG93Ll9fd2ZfdGVzdDtcbiAgfVxuICBpZiAobW9kZSA9PT0gJ2ZyYW1lJykge1xuICAgIHJldHVybiB3aW5kb3cgIT09IHdpbmRvdy50b3A7XG4gIH1cbn07XG5cbi8vIEZlYXR1cmUgZGV0ZWN0cyArIGJyb3dzZXIgc25pZmZzICDgsqBf4LKgXG5cbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgdG91Y2ggPSAoV2ViZmxvdy5lbnYudG91Y2ggPVxuICAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHxcbiAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpKTtcbnZhciBjaHJvbWUgPSAoV2ViZmxvdy5lbnYuY2hyb21lID1cbiAgL2Nocm9tZS8udGVzdCh1c2VyQWdlbnQpICYmXG4gIC9Hb29nbGUvLnRlc3QobmF2aWdhdG9yLnZlbmRvcikgJiZcbiAgcGFyc2VJbnQodXNlckFnZW50Lm1hdGNoKC9jaHJvbWVcXC8oXFxkKylcXC4vKVsxXSwgMTApKTtcbnZhciBpb3MgPSAoV2ViZmxvdy5lbnYuaW9zID0gLyhpcG9kfGlwaG9uZXxpcGFkKS8udGVzdCh1c2VyQWdlbnQpKTtcbldlYmZsb3cuZW52LnNhZmFyaSA9IC9zYWZhcmkvLnRlc3QodXNlckFnZW50KSAmJiAhY2hyb21lICYmICFpb3M7XG5cbi8vIE1haW50YWluIGN1cnJlbnQgdG91Y2ggdGFyZ2V0IHRvIHByZXZlbnQgbGF0ZSBjbGlja3Mgb24gdG91Y2ggZGV2aWNlc1xudmFyIHRvdWNoVGFyZ2V0O1xuLy8gTGlzdGVuIGZvciBib3RoIGV2ZW50cyB0byBzdXBwb3J0IHRvdWNoL21vdXNlIGh5YnJpZCBkZXZpY2VzXG50b3VjaCAmJlxuICAkZG9jLm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICB0b3VjaFRhcmdldCA9IGV2dC50YXJnZXQ7XG4gIH0pO1xuXG4vKipcbiAqIFdlYmZsb3cudmFsaWRDbGljayAtIHZhbGlkYXRlIGNsaWNrIHRhcmdldCBhZ2FpbnN0IGN1cnJlbnQgdG91Y2ggdGFyZ2V0XG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY2xpY2tUYXJnZXQgIEVsZW1lbnQgYmVpbmcgY2xpY2tlZFxuICogQHJldHVybiB7Qm9vbGVhbn0gIFRydWUgaWYgY2xpY2sgdGFyZ2V0IGlzIHZhbGlkIChhbHdheXMgdHJ1ZSBvbiBub24tdG91Y2gpXG4gKi9cbldlYmZsb3cudmFsaWRDbGljayA9IHRvdWNoXG4gID8gZnVuY3Rpb24gKGNsaWNrVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBjbGlja1RhcmdldCA9PT0gdG91Y2hUYXJnZXQgfHwgJC5jb250YWlucyhjbGlja1RhcmdldCwgdG91Y2hUYXJnZXQpXG4gICAgICApO1xuICAgIH1cbiAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4vKipcbiAqIFdlYmZsb3cucmVzaXplLCBXZWJmbG93LnNjcm9sbCAtIHRocm90dGxlZCBldmVudCBwcm94aWVzXG4gKi9cblxudmFyIHJlc2l6ZUV2ZW50cyA9ICdyZXNpemUud2ViZmxvdyBvcmllbnRhdGlvbmNoYW5nZS53ZWJmbG93IGxvYWQud2ViZmxvdyc7XG52YXIgc2Nyb2xsRXZlbnRzID0gJ3Njcm9sbC53ZWJmbG93ICcgKyByZXNpemVFdmVudHM7XG5XZWJmbG93LnJlc2l6ZSA9IGV2ZW50UHJveHkoJHdpbiwgcmVzaXplRXZlbnRzKTtcbldlYmZsb3cuc2Nyb2xsID0gZXZlbnRQcm94eSgkd2luLCBzY3JvbGxFdmVudHMpO1xuV2ViZmxvdy5yZWRyYXcgPSBldmVudFByb3h5KCk7XG5cbi8vIENyZWF0ZSBhIHByb3h5IGluc3RhbmNlIGZvciB0aHJvdHRsZWQgZXZlbnRzXG5mdW5jdGlvbiBldmVudFByb3h5KHRhcmdldCwgdHlwZXMpIHtcbiAgLy8gU2V0IHVwIHRocm90dGxlZCBtZXRob2QgKHVzaW5nIGN1c3RvbSBmcmFtZS1iYXNlZCBfLnRocm90dGxlKVxuXG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICB2YXIgcHJveHkgPSB7fTtcbiAgcHJveHkudXAgPSBfLnRocm90dGxlKGZ1bmN0aW9uIChldnQpIHtcbiAgICBfLmVhY2goaGFuZGxlcnMsIGZ1bmN0aW9uIChoKSB7XG4gICAgICBoKGV2dCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEJpbmQgZXZlbnRzIHRvIHRhcmdldFxuICBpZiAodGFyZ2V0ICYmIHR5cGVzKSB7XG4gICAgdGFyZ2V0Lm9uKHR5cGVzLCBwcm94eS51cCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHByb3h5Lm9uID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKF8uY29udGFpbnMoaGFuZGxlcnMsIGhhbmRsZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBwcm94eS5vZmYgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIC8vIElmIG5vIGFyZ3VtZW50cyBzdXBwbGllZCwgY2xlYXIgYWxsIGhhbmRsZXJzXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBoYW5kbGVycyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBoYW5kbGVyIGZyb20gdGhlIGxpc3RcbiAgICBoYW5kbGVycyA9IF8uZmlsdGVyKGhhbmRsZXJzLCBmdW5jdGlvbiAoaCkge1xuICAgICAgcmV0dXJuIGggIT09IGhhbmRsZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufVxuXG4vLyBXZWJmbG93LmxvY2F0aW9uIC0gV3JhcCB3aW5kb3cubG9jYXRpb24gaW4gYXBpXG5XZWJmbG93LmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG59O1xuXG5pZiAoV2ViZmxvdy5lbnYoKSkge1xuICAvLyBJZ25vcmUgcmVkaXJlY3RzIGluc2lkZSBhIFdlYmZsb3cgZGVzaWduL2VkaXQgZW52aXJvbm1lbnRcbiAgV2ViZmxvdy5sb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xufVxuXG4vLyBXZWJmbG93LnJlYWR5IC0gQ2FsbCBwcmltYXJ5IGFuZCBzZWNvbmRhcnkgaGFuZGxlcnNcbldlYmZsb3cucmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gIGRvbXJlYWR5ID0gdHJ1ZTtcblxuICAvLyBSZXN0b3JlIG1vZHVsZXMgYWZ0ZXIgZGVzdHJveVxuICBpZiAoZGVzdHJveWVkKSB7XG4gICAgcmVzdG9yZU1vZHVsZXMoKTtcblxuICAgIC8vIE90aGVyd2lzZSBydW4gcHJpbWFyeSByZWFkeSBtZXRob2RzXG4gIH0gZWxzZSB7XG4gICAgXy5lYWNoKHByaW1hcnksIGNhbGxSZWFkeSk7XG4gIH1cblxuICAvLyBSdW4gc2Vjb25kYXJ5IHJlYWR5IG1ldGhvZHNcbiAgXy5lYWNoKHNlY29uZGFyeSwgY2FsbFJlYWR5KTtcblxuICAvLyBUcmlnZ2VyIHJlc2l6ZVxuICBXZWJmbG93LnJlc2l6ZS51cCgpO1xufTtcblxuZnVuY3Rpb24gY2FsbFJlYWR5KHJlYWR5Rm4pIHtcbiAgaXNGdW5jdGlvbihyZWFkeUZuKSAmJiByZWFkeUZuKCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVNb2R1bGVzKCkge1xuICBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgXy5lYWNoKG1vZHVsZXMsIGJpbmRNb2R1bGUpO1xufVxuXG4vKipcbiAqIFdlYmZsb3cubG9hZCAtIEFkZCBhIHdpbmRvdyBsb2FkIGhhbmRsZXIgdGhhdCB3aWxsIHJ1biBldmVuIGlmIGxvYWQgZXZlbnQgaGFzIGFscmVhZHkgaGFwcGVuZWRcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbnZhciBkZWZlckxvYWQ7XG5XZWJmbG93LmxvYWQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICBkZWZlckxvYWQudGhlbihoYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGJpbmRMb2FkKCkge1xuICAvLyBSZWplY3QgYW55IHByZXZpb3VzIGRlZmVycmVkICh0byBzdXBwb3J0IGRlc3Ryb3kpXG4gIGlmIChkZWZlckxvYWQpIHtcbiAgICBkZWZlckxvYWQucmVqZWN0KCk7XG4gICAgJHdpbi5vZmYoJ2xvYWQnLCBkZWZlckxvYWQucmVzb2x2ZSk7XG4gIH1cbiAgLy8gQ3JlYXRlIGRlZmVycmVkIGFuZCBiaW5kIHdpbmRvdyBsb2FkIGV2ZW50XG4gIGRlZmVyTG9hZCA9IG5ldyAkLkRlZmVycmVkKCk7XG4gICR3aW4ub24oJ2xvYWQnLCBkZWZlckxvYWQucmVzb2x2ZSk7XG59XG5cbi8vIFdlYmZsb3cuZGVzdHJveSAtIFRyaWdnZXIgYSBkZXN0cm95IGV2ZW50IGZvciBhbGwgbW9kdWxlc1xuV2ViZmxvdy5kZXN0cm95ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGRlc3Ryb3llZCA9IHRydWU7XG4gICR3aW4udHJpZ2dlckhhbmRsZXIoJ19fd2ZfZGVzdHJveScpO1xuXG4gIC8vIEFsbG93IGRvbXJlYWR5IHJlc2V0IGZvciB0ZXN0c1xuICBpZiAob3B0aW9ucy5kb21yZWFkeSAhPSBudWxsKSB7XG4gICAgZG9tcmVhZHkgPSBvcHRpb25zLmRvbXJlYWR5O1xuICB9XG5cbiAgLy8gVW5iaW5kIG1vZHVsZXNcbiAgXy5lYWNoKG1vZHVsZXMsIHVuYmluZE1vZHVsZSk7XG5cbiAgLy8gQ2xlYXIgYW55IHByb3h5IGV2ZW50IGhhbmRsZXJzXG4gIFdlYmZsb3cucmVzaXplLm9mZigpO1xuICBXZWJmbG93LnNjcm9sbC5vZmYoKTtcbiAgV2ViZmxvdy5yZWRyYXcub2ZmKCk7XG5cbiAgLy8gQ2xlYXIgYW55IHF1ZXVlZCByZWFkeSBtZXRob2RzXG4gIHByaW1hcnkgPSBbXTtcbiAgc2Vjb25kYXJ5ID0gW107XG5cbiAgLy8gSWYgbG9hZCBldmVudCBoYXMgbm90IHlldCBmaXJlZCwgcmVwbGFjZSB0aGUgZGVmZXJyZWRcbiAgaWYgKGRlZmVyTG9hZC5zdGF0ZSgpID09PSAncGVuZGluZycpIHtcbiAgICBiaW5kTG9hZCgpO1xuICB9XG59O1xuXG4vLyBMaXN0ZW4gZm9yIGRvbXJlYWR5XG4kKFdlYmZsb3cucmVhZHkpO1xuXG4vLyBMaXN0ZW4gZm9yIHdpbmRvdy5vbmxvYWQgYW5kIHJlc29sdmUgZGVmZXJyZWRcbmJpbmRMb2FkKCk7XG5cbi8vIEV4cG9ydCBjb21tb25qcyBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gd2luZG93LldlYmZsb3cgPSBXZWJmbG93O1xuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJtb2R1bGVzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsIndpbmRvdyIsIiQiLCJqUXVlcnkiLCIkd2luIiwiJGRvYyIsImRvY3VtZW50IiwiaXNGdW5jdGlvbiIsIl8iLCJyZXF1aXJlIiwidHJhbSIsImRvbXJlYWR5IiwiZGVzdHJveWVkIiwiY29uZmlnIiwiaGlkZUJhY2tmYWNlIiwia2VlcEluaGVyaXRlZCIsImRlZmluZSIsIm5hbWUiLCJmYWN0b3J5Iiwib3B0aW9ucyIsInVuYmluZE1vZHVsZSIsImluc3RhbmNlIiwiYmluZE1vZHVsZSIsIm1vZHVsZSIsImVudiIsImRlc2lnbiIsIm9uIiwicHJldmlldyIsImRlc3Ryb3kiLCJyZWFkeSIsImFkZFJlYWR5IiwiY29udGFpbnMiLCJwdXNoIiwib2ZmIiwicmVtb3ZlUmVhZHkiLCJmaWx0ZXIiLCJyZWFkeUZuIiwibW9kZSIsImRlc2lnbkZsYWciLCJfX3dmX2Rlc2lnbiIsImluQXBwIiwiX193Zl9zbHVnIiwiV2ViZmxvd0VkaXRvciIsIldFQkZMT1dfRU5WX1RFU1QiLCJfX3dmX3Rlc3QiLCJ0b3AiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsInRvdWNoIiwiRG9jdW1lbnRUb3VjaCIsImNocm9tZSIsInRlc3QiLCJ2ZW5kb3IiLCJwYXJzZUludCIsIm1hdGNoIiwiaW9zIiwic2FmYXJpIiwidG91Y2hUYXJnZXQiLCJldnQiLCJ0YXJnZXQiLCJ2YWxpZENsaWNrIiwiY2xpY2tUYXJnZXQiLCJyZXNpemVFdmVudHMiLCJzY3JvbGxFdmVudHMiLCJyZXNpemUiLCJldmVudFByb3h5Iiwic2Nyb2xsIiwicmVkcmF3IiwidHlwZXMiLCJoYW5kbGVycyIsInByb3h5IiwidXAiLCJ0aHJvdHRsZSIsImVhY2giLCJoIiwiaGFuZGxlciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImxvY2F0aW9uIiwidXJsIiwicmVzdG9yZU1vZHVsZXMiLCJjYWxsUmVhZHkiLCJkZWZlckxvYWQiLCJsb2FkIiwidGhlbiIsImJpbmRMb2FkIiwicmVqZWN0IiwicmVzb2x2ZSIsIkRlZmVycmVkIiwidHJpZ2dlckhhbmRsZXIiLCJzdGF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RCxHQUV6RDs7Q0FFQztBQUNELElBQUlBLFVBQVUsQ0FBQztBQUNmLElBQUlDLFVBQVUsQ0FBQztBQUNmLElBQUlDLFVBQVUsRUFBRTtBQUNoQixJQUFJQyxZQUFZQyxPQUFPSixPQUFPLElBQUksRUFBRTtBQUNwQyxJQUFJSyxJQUFJRCxPQUFPRSxNQUFNO0FBQ3JCLElBQUlDLE9BQU9GLEVBQUVEO0FBQ2IsSUFBSUksT0FBT0gsRUFBRUk7QUFDYixJQUFJQyxhQUFhTCxFQUFFSyxVQUFVO0FBQzdCLElBQUlDLElBQUtYLFFBQVFXLENBQUMsR0FBR0MsUUFBUTtBQUM3QixJQUFJQyxPQUFRYixRQUFRYSxJQUFJLEdBQUdELFFBQVEsaUJBQWlCUCxFQUFFUSxJQUFJO0FBQzFELElBQUlDLFdBQVc7QUFDZixJQUFJQyxZQUFZO0FBRWhCRixLQUFLRyxNQUFNLENBQUNDLFlBQVksR0FBRztBQUMzQkos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

}),

}]);