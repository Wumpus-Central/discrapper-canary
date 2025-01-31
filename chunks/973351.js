var i;
if (!Object.keys) {
    var r = Object.prototype.hasOwnProperty,
        a = Object.prototype.toString,
        s = n(560640),
        o = Object.prototype.propertyIsEnumerable,
        l = !o.call({ toString: null }, 'toString'),
        u = o.call(function () {}, 'prototype'),
        c = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
        d = function (e) {
            var t = e.constructor;
            return t && t.prototype === e;
        },
        f = {
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
        _ = (function () {
            if ('undefined' == typeof window) return !1;
            for (var e in window)
                try {
                    if (!f['$' + e] && r.call(window, e) && null !== window[e] && 'object' == typeof window[e])
                        try {
                            d(window[e]);
                        } catch (e) {
                            return !0;
                        }
                } catch (e) {
                    return !0;
                }
            return !1;
        })(),
        p = function (e) {
            if ('undefined' == typeof window || !_) return d(e);
            try {
                return d(e);
            } catch (e) {
                return !1;
            }
        };
    i = function (e) {
        var t = null !== e && 'object' == typeof e,
            n = '[object Function]' === a.call(e),
            i = s(e),
            o = t && '[object String]' === a.call(e),
            d = [];
        if (!t && !n && !i) throw TypeError('Object.keys called on a non-object');
        var f = u && n;
        if (o && e.length > 0 && !r.call(e, 0)) for (var _ = 0; _ < e.length; ++_) d.push(String(_));
        if (i && e.length > 0) for (var h = 0; h < e.length; ++h) d.push(String(h));
        else for (var m in e) !(f && 'prototype' === m) && r.call(e, m) && d.push(String(m));
        if (l) for (var g = p(e), E = 0; E < c.length; ++E) !(g && 'constructor' === c[E]) && r.call(e, c[E]) && d.push(c[E]);
        return d;
    };
}
e.exports = i;
