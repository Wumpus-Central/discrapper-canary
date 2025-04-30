!(function (t) {
    'function' == typeof define && define.amd ? define([], t) : e.exports ? (e.exports = t()) : (window.idleCallbackShim = t());
})(function () {
    var e,
        t,
        r,
        i,
        a = 'undefined' != typeof window ? window : (n.g, n.g),
        o = (a.cancelRequestAnimationFrame && a.requestAnimationFrame) || setTimeout,
        s = a.cancelRequestAnimationFrame || clearTimeout,
        l = [],
        c = 0,
        u = !1,
        d = 7,
        f = 35,
        _ = 125,
        p = 0,
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
        E = b(function () {
            (d = 22), (_ = 66), (f = 0);
        });
    function b(e) {
        var t,
            n,
            r = 99,
            i = function () {
                var a = Date.now() - n;
                a < r ? (t = setTimeout(i, r - a)) : ((t = null), e());
            };
        return function () {
            (n = Date.now()), t || (t = setTimeout(i, r));
        };
    }
    function y() {
        u && (i && s(i), r && clearTimeout(r), (u = !1));
    }
    function O() {
        125 != _ && ((d = 7), (_ = 125), (f = 35), u && (y(), S())), E();
    }
    function v() {
        (i = null), (r = setTimeout(T, 0));
    }
    function I() {
        (r = null), o(v);
    }
    function S() {
        u || ((t = _ - (Date.now() - h)), (e = Date.now()), (u = !0), f && t < f && (t = f), t > 9 ? (r = setTimeout(I, t)) : ((t = 0), I()));
    }
    function T() {
        var n,
            i,
            a,
            o = d > 9 ? 9 : 1;
        if (((h = Date.now()), (u = !1), (r = null), c > 2 || h - t - 50 < e)) for (i = 0, a = l.length; i < a && g.timeRemaining() > o; i++) (n = l.shift()), m++, n && n(g);
        l.length ? S() : (c = 0);
    }
    function A(e) {
        return p++, l.push(e), S(), p;
    }
    function N(e) {
        var t = e - 1 - m;
        l[t] && (l[t] = null);
    }
    if (a.requestIdleCallback && a.cancelIdleCallback)
        try {
            a.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var t, n;
                if (
                    ((a.requestIdleCallback = function (t, n) {
                        return n && 'number' == typeof n.timeout ? e(t, n.timeout) : e(t);
                    }),
                    a.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype))
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
            })(a.requestIdleCallback);
        }
    else
        (a.requestIdleCallback = A),
            (a.cancelIdleCallback = N),
            a.document &&
                document.addEventListener &&
                (a.addEventListener('scroll', O, !0),
                a.addEventListener('resize', O),
                document.addEventListener('focus', O, !0),
                document.addEventListener('mouseover', O, !0),
                ['click', 'keypress', 'touchstart', 'mousedown'].forEach(function (e) {
                    document.addEventListener(e, O, {
                        capture: !0,
                        passive: !0
                    });
                }),
                a.MutationObserver &&
                    new MutationObserver(O).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }));
    return {
        request: A,
        cancel: N
    };
});
