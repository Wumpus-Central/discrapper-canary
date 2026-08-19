"use strict";
var n;
if (!Object.keys) {
    var o = Object.prototype.hasOwnProperty,
        i = Object.prototype.toString,
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
        p = {
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
        d = (function () {
            if ("u" < typeof window) return !1;
            for (var e in window)
                try {
                    if (!p["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e])
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
            if ("u" < typeof window || !d) return f(e);
            try {
                return f(e);
            } catch (e) {
                return !1;
            }
        };
    n = function (e) {
        var t = null !== e && "object" == typeof e,
            r = "[object Function]" === i.call(e),
            n = a(e),
            s = t && "[object String]" === i.call(e),
            f = [];
        if (!t && !r && !n) throw TypeError("Object.keys called on a non-object");
        var p = u && r;
        if (s && e.length > 0 && !o.call(e, 0)) for (var d = 0; d < e.length; ++d) f.push(String(d));
        if (n && e.length > 0) for (var m = 0; m < e.length; ++m) f.push(String(m));
        else for (var v in e) !(p && "prototype" === v) && o.call(e, v) && f.push(String(v));
        if (l)
            for (var y = h(e), g = 0; g < c.length; ++g)
                !(y && "constructor" === c[g]) && o.call(e, c[g]) && f.push(c[g]);
        return f;
    };
}
e.exports = n;
