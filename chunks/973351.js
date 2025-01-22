var i;
if (!Object.keys) {
    var a = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        s = r(560640),
        l = Object.prototype.propertyIsEnumerable,
        u = !l.call({ toString: null }, 'toString'),
        c = l.call(function () {}, 'prototype'),
        d = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
        f = function (e) {
            var n = e.constructor;
            return n && n.prototype === e;
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
            $window: !0
        },
        h = (function () {
            if ('undefined' == typeof window) return !1;
            for (var e in window)
                try {
                    if (!p['$' + e] && a.call(window, e) && null !== window[e] && 'object' == typeof window[e])
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
        _ = function (e) {
            if ('undefined' == typeof window || !h) return f(e);
            try {
                return f(e);
            } catch (e) {
                return !1;
            }
        };
    i = function (e) {
        var n = null !== e && 'object' == typeof e,
            r = '[object Function]' === o.call(e),
            i = s(e),
            l = n && '[object String]' === o.call(e),
            f = [];
        if (!n && !r && !i) throw TypeError('Object.keys called on a non-object');
        var p = c && r;
        if (l && e.length > 0 && !a.call(e, 0)) for (var h = 0; h < e.length; ++h) f.push(String(h));
        if (i && e.length > 0) for (var m = 0; m < e.length; ++m) f.push(String(m));
        else for (var g in e) !(p && 'prototype' === g) && a.call(e, g) && f.push(String(g));
        if (u) {
            for (var E = _(e), v = 0; v < d.length; ++v) !(E && 'constructor' === d[v]) && a.call(e, d[v]) && f.push(d[v]);
        }
        return f;
    };
}
e.exports = i;
