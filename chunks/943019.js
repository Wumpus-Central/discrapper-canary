"use strict";
n.d(t, { P: () => h, m: () => p });
var r = n(254033),
    i = n(996976),
    s = n(63514),
    a = n(353563),
    o = new WeakMap(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    c = /msie|trident/i.test(a.S.navigator && a.S.navigator.userAgent),
    d = function (e) {
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
    p = function (e, t) {
        if ((void 0 === t && (t = !1), o.has(e) && !t)) return o.get(e);
        if ((0, s.dK)(e)) return o.set(e, f), f;
        var n = getComputedStyle(e),
            r = (0, s.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            a = !c && "border-box" === n.boxSizing,
            p = u.test(n.writingMode || ""),
            h = !r && l.test(n.overflowY || ""),
            E = !r && l.test(n.overflowX || ""),
            m = r ? 0 : d(n.paddingTop),
            g = r ? 0 : d(n.paddingRight),
            A = r ? 0 : d(n.paddingBottom),
            I = r ? 0 : d(n.paddingLeft),
            T = r ? 0 : d(n.borderTopWidth),
            S = r ? 0 : d(n.borderRightWidth),
            y = r ? 0 : d(n.borderBottomWidth),
            N = r ? 0 : d(n.borderLeftWidth),
            v = I + g,
            C = m + A,
            O = N + S,
            R = T + y,
            b = E ? e.offsetHeight - R - e.clientHeight : 0,
            D = h ? e.offsetWidth - O - e.clientWidth : 0,
            L = r ? r.width : d(n.width) - (a ? v + O : 0) - D,
            w = r ? r.height : d(n.height) - (a ? C + R : 0) - b,
            M = L + v + D + O,
            P = w + C + b + R,
            x = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(L * devicePixelRatio), Math.round(w * devicePixelRatio), p),
                borderBoxSize: _(M, P, p),
                contentBoxSize: _(L, w, p),
                contentRect: new i.p(I, m, L, w),
            });
        return o.set(e, x), x;
    },
    h = function (e, t, n) {
        var i = p(e, n),
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
