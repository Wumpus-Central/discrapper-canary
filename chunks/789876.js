!(function (t) {
    'function' == typeof define && define.amd ? define([], t) : e.exports ? (e.exports = t()) : (window.idleCallbackShim = t());
})(function () {
    var e,
        t,
        i,
        r,
        a = 'undefined' != typeof window ? window : (n.g, n.g),
        s = (a.cancelRequestAnimationFrame && a.requestAnimationFrame) || setTimeout,
        o = a.cancelRequestAnimationFrame || clearTimeout,
        l = [],
        u = 0,
        c = !1,
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
        E = v(function () {
            (d = 22), (_ = 66), (f = 0);
        });
    function v(e) {
        var t,
            n,
            i = 99,
            r = function () {
                var a = Date.now() - n;
                a < i ? (t = setTimeout(r, i - a)) : ((t = null), e());
            };
        return function () {
            (n = Date.now()), t || (t = setTimeout(r, i));
        };
    }
    function y() {
        c && (r && o(r), i && clearTimeout(i), (c = !1));
    }
    function I() {
        125 != _ && ((d = 7), (_ = 125), (f = 35), c && (y(), S())), E();
    }
    function b() {
        (r = null), (i = setTimeout(A, 0));
    }
    function T() {
        (i = null), s(b);
    }
    function S() {
        !c && ((t = _ - (Date.now() - h)), (e = Date.now()), (c = !0), f && t < f && (t = f), t > 9 ? (i = setTimeout(T, t)) : ((t = 0), T()));
    }
    function A() {
        var n,
            r,
            a,
            s = d > 9 ? 9 : 1;
        if (((h = Date.now()), (c = !1), (i = null), u > 2 || h - t - 50 < e)) for (r = 0, a = l.length; r < a && g.timeRemaining() > s; r++) (n = l.shift()), m++, n && n(g);
        l.length ? S() : (u = 0);
    }
    function N(e) {
        return p++, l.push(e), S(), p;
    }
    function C(e) {
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
        (a.requestIdleCallback = N),
            (a.cancelIdleCallback = C),
            a.document &&
                document.addEventListener &&
                (a.addEventListener('scroll', I, !0),
                a.addEventListener('resize', I),
                document.addEventListener('focus', I, !0),
                document.addEventListener('mouseover', I, !0),
                ['click', 'keypress', 'touchstart', 'mousedown'].forEach(function (e) {
                    document.addEventListener(e, I, {
                        capture: !0,
                        passive: !0
                    });
                }),
                a.MutationObserver &&
                    new MutationObserver(I).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }));
    return {
        request: N,
        cancel: C
    };
});
