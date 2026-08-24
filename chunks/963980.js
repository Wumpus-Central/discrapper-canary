"use strict";
var n;
if (!Object.keys) {
    var i = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        a = r(560332),
        s = Object.prototype.propertyIsEnumerable,
        l = !s.call({ toString: null }, "toString"),
        u = s.call(function () {}, "prototype"),
        c = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
        ],
        f = function (e) {
            var t = e.constructor;
            return t && t.prototype === e;
        },
        d = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
        },
        p = (function () {
            if ("u" < typeof window) return !1;
            for (var e in window)
                try {
                    if (!d["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e])
                        try {
                            f(window[e]);
                        } catch (e) {
                            return !0;
                        }
                } catch (e) {
                    return !0;
                }
            return !1;
        })(),
        h = function (e) {
            if ("u" < typeof window || !p) return f(e);
            try {
                return f(e);
            } catch (e) {
                return !1;
            }
        };
    n = function (e) {
        var t = null !== e && "object" == typeof e,
            r = "[object Function]" === o.call(e),
            n = a(e),
            s = t && "[object String]" === o.call(e),
            f = [];
        if (!t && !r && !n) throw TypeError("Object.keys called on a non-object");
        var d = u && r;
        if (s && e.length > 0 && !i.call(e, 0)) for (var p = 0; p < e.length; ++p) f.push(String(p));
        if (n && e.length > 0) for (var m = 0; m < e.length; ++m) f.push(String(m));
        else for (var v in e) !(d && "prototype" === v) && i.call(e, v) && f.push(String(v));
        if (l)
            for (var y = h(e), g = 0; g < c.length; ++g)
                !(y && "constructor" === c[g]) && i.call(e, c[g]) && f.push(c[g]);
        return f;
    };
}
e.exports = n;
