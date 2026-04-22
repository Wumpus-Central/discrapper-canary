"use strict";
n.d(t, { P: () => h, m: () => E });
var r = n(254033),
    i = n(996976),
    s = n(63514),
    a = n(353563),
    o = new WeakMap(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    d = /msie|trident/i.test(a.S.navigator && a.S.navigator.userAgent),
    c = function (e) {
        return parseFloat(e || "0");
    },
    _ = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            Object.freeze({ inlineSize: (n ? t : e) || 0, blockSize: (n ? e : t) || 0 })
        );
    },
    f = Object.freeze({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new i.p(0, 0, 0, 0),
    }),
    E = function (e, t) {
        if ((void 0 === t && (t = !1), o.has(e) && !t)) return o.get(e);
        if ((0, s.dK)(e)) return o.set(e, f), f;
        var n = getComputedStyle(e),
            r = (0, s.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            a = !d && "border-box" === n.boxSizing,
            E = u.test(n.writingMode || ""),
            h = !r && l.test(n.overflowY || ""),
            p = !r && l.test(n.overflowX || ""),
            m = r ? 0 : c(n.paddingTop),
            g = r ? 0 : c(n.paddingRight),
            A = r ? 0 : c(n.paddingBottom),
            I = r ? 0 : c(n.paddingLeft),
            T = r ? 0 : c(n.borderTopWidth),
            S = r ? 0 : c(n.borderRightWidth),
            y = r ? 0 : c(n.borderBottomWidth),
            N = r ? 0 : c(n.borderLeftWidth),
            O = I + g,
            R = m + A,
            v = N + S,
            C = T + y,
            b = p ? e.offsetHeight - C - e.clientHeight : 0,
            D = h ? e.offsetWidth - v - e.clientWidth : 0,
            L = r ? r.width : c(n.width) - (a ? O + v : 0) - D,
            w = r ? r.height : c(n.height) - (a ? R + C : 0) - b,
            M = L + O + D + v,
            P = w + R + b + C,
            U = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(L * devicePixelRatio), Math.round(w * devicePixelRatio), E),
                borderBoxSize: _(M, P, E),
                contentBoxSize: _(L, w, E),
                contentRect: new i.p(I, m, L, w),
            });
        return o.set(e, U), U;
    },
    h = function (e, t, n) {
        var i = E(e, n),
            s = i.borderBoxSize,
            a = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.U.BORDER_BOX:
                return s;
            default:
                return a;
        }
    };
