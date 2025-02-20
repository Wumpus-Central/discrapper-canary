!(function (t) {
    'function' == typeof define && define.amd ? define([], t) : e.exports ? (e.exports = t()) : (window.idleCallbackShim = t());
})(function () {
    var e,
        t,
        r,
        i,
        o = 'undefined' != typeof window ? window : (n.g, n.g),
        a = (o.cancelRequestAnimationFrame && o.requestAnimationFrame) || setTimeout,
        s = o.cancelRequestAnimationFrame || clearTimeout,
        l = [],
        c = 0,
        u = !1,
        d = 7,
        f = 35,
        p = 125,
        _ = 0,
        h = 0,
        m = 0,
        g = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = d - (Date.now() - h);
                return e < 0 ? 0 : e;
            }
        },
        E = v(function () {
            (d = 22), (p = 66), (f = 0);
        });
    function v(e) {
        var t,
            n,
            r = 99,
            i = function () {
                var o = Date.now() - n;
                o < r ? (t = setTimeout(i, r - o)) : ((t = null), e());
            };
        return function () {
            (n = Date.now()), t || (t = setTimeout(i, r));
        };
    }
    function b() {
        u && (i && s(i), r && clearTimeout(r), (u = !1));
    }
    function y() {
        125 != p && ((d = 7), (p = 125), (f = 35), u && (b(), I())), E();
    }
    function O() {
        (i = null), (r = setTimeout(T, 0));
    }
    function S() {
        (r = null), a(O);
    }
    function I() {
        !u && ((t = p - (Date.now() - h)), (e = Date.now()), (u = !0), f && t < f && (t = f), t > 9 ? (r = setTimeout(S, t)) : ((t = 0), S()));
    }
    function T() {
        var n,
            i,
            o,
            a = d > 9 ? 9 : 1;
        if (((h = Date.now()), (u = !1), (r = null), c > 2 || h - t - 50 < e)) for (i = 0, o = l.length; i < o && g.timeRemaining() > a; i++) (n = l.shift()), m++, n && n(g);
        l.length ? I() : (c = 0);
    }
    function N(e) {
        return _++, l.push(e), I(), _;
    }
    function A(e) {
        var t = e - 1 - m;
        l[t] && (l[t] = null);
    }
    if (o.requestIdleCallback && o.cancelIdleCallback)
        try {
            o.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var t, n;
                if (
                    ((o.requestIdleCallback = function (t, n) {
                        return n && 'number' == typeof n.timeout ? e(t, n.timeout) : e(t);
                    }),
                    o.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype))
                ) {
                    if (!(n = Object.getOwnPropertyDescriptor(t, 'timeRemaining')) || !n.configurable || !n.get) return;
                    Object.defineProperty(t, 'timeRemaining', {
                        value: function () {
                            return n.get.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
            })(o.requestIdleCallback);
        }
    else
        (o.requestIdleCallback = N),
            (o.cancelIdleCallback = A),
            o.document &&
                document.addEventListener &&
                (o.addEventListener('scroll', y, !0),
                o.addEventListener('resize', y),
                document.addEventListener('focus', y, !0),
                document.addEventListener('mouseover', y, !0),
                ['click', 'keypress', 'touchstart', 'mousedown'].forEach(function (e) {
                    document.addEventListener(e, y, {
                        capture: !0,
                        passive: !0
                    });
                }),
                o.MutationObserver &&
                    new MutationObserver(y).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }));
    return {
        request: N,
        cancel: A
    };
});
