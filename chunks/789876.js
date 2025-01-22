!(function (n) {
    'function' == typeof define && define.amd ? define([], n) : e.exports ? (e.exports = n()) : (window.idleCallbackShim = n());
})(function () {
    var e,
        n,
        i,
        a,
        o = 'undefined' != typeof window ? window : (r.g, r.g),
        s = (o.cancelRequestAnimationFrame && o.requestAnimationFrame) || setTimeout,
        l = o.cancelRequestAnimationFrame || clearTimeout,
        u = [],
        c = 0,
        d = !1,
        f = 7,
        p = 35,
        h = 125,
        _ = 0,
        m = 0,
        g = 0,
        E = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = f - (Date.now() - m);
                return e < 0 ? 0 : e;
            }
        },
        v = y(function () {
            (f = 22), (h = 66), (p = 0);
        });
    function y(e) {
        var n,
            r,
            i = 99,
            a = function () {
                var o = Date.now() - r;
                o < i ? (n = setTimeout(a, i - o)) : ((n = null), e());
            };
        return function () {
            (r = Date.now()), !n && (n = setTimeout(a, i));
        };
    }
    function b() {
        d && (a && l(a), i && clearTimeout(i), (d = !1));
    }
    function I() {
        125 != h && ((f = 7), (h = 125), (p = 35), d && (b(), A())), v();
    }
    function T() {
        (a = null), (i = setTimeout(C, 0));
    }
    function S() {
        (i = null), s(T);
    }
    function A() {
        if (!d) (n = h - (Date.now() - m)), (e = Date.now()), (d = !0), p && n < p && (n = p), n > 9 ? (i = setTimeout(S, n)) : ((n = 0), S());
    }
    function C() {
        var r,
            a,
            o,
            s = f > 9 ? 9 : 1;
        if (((m = Date.now()), (d = !1), (i = null), c > 2 || m - n - 50 < e)) for (a = 0, o = u.length; a < o && E.timeRemaining() > s; a++) (r = u.shift()), g++, r && r(E);
        u.length ? A() : (c = 0);
    }
    function N(e) {
        return _++, u.push(e), A(), _;
    }
    function R(e) {
        var n = e - 1 - g;
        u[n] && (u[n] = null);
    }
    if (o.requestIdleCallback && o.cancelIdleCallback)
        try {
            o.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var n, r;
                if (
                    ((o.requestIdleCallback = function (n, r) {
                        return r && 'number' == typeof r.timeout ? e(n, r.timeout) : e(n);
                    }),
                    o.IdleCallbackDeadline && (n = IdleCallbackDeadline.prototype))
                ) {
                    if (!(r = Object.getOwnPropertyDescriptor(n, 'timeRemaining')) || !r.configurable || !r.get) return;
                    Object.defineProperty(n, 'timeRemaining', {
                        value: function () {
                            return r.get.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
            })(o.requestIdleCallback);
        }
    else
        (o.requestIdleCallback = N),
            (o.cancelIdleCallback = R),
            o.document &&
                document.addEventListener &&
                (o.addEventListener('scroll', I, !0),
                o.addEventListener('resize', I),
                document.addEventListener('focus', I, !0),
                document.addEventListener('mouseover', I, !0),
                ['click', 'keypress', 'touchstart', 'mousedown'].forEach(function (e) {
                    document.addEventListener(e, I, {
                        capture: !0,
                        passive: !0
                    });
                }),
                o.MutationObserver &&
                    new MutationObserver(I).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }));
    return {
        request: N,
        cancel: R
    };
});
