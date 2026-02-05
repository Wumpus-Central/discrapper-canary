"use strict";
n.d(t, { P: () => h, m: () => p });
var r = n(254033),
    i = n(996976),
    a = n(63514),
    s = n(353563),
    o = new WeakMap(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    c = /msie|trident/i.test(s.S.navigator && s.S.navigator.userAgent),
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
        if ((0, a.dK)(e)) return o.set(e, f), f;
        var n = getComputedStyle(e),
            r = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            s = !c && "border-box" === n.boxSizing,
            p = u.test(n.writingMode || ""),
            h = !r && l.test(n.overflowY || ""),
            m = !r && l.test(n.overflowX || ""),
            g = r ? 0 : d(n.paddingTop),
            E = r ? 0 : d(n.paddingRight),
            A = r ? 0 : d(n.paddingBottom),
            I = r ? 0 : d(n.paddingLeft),
            T = r ? 0 : d(n.borderTopWidth),
            y = r ? 0 : d(n.borderRightWidth),
            S = r ? 0 : d(n.borderBottomWidth),
            v = r ? 0 : d(n.borderLeftWidth),
            C = I + E,
            b = g + A,
            N = v + y,
            R = T + S,
            O = m ? e.offsetHeight - R - e.clientHeight : 0,
            D = h ? e.offsetWidth - N - e.clientWidth : 0,
            L = s ? C + N : 0,
            w = s ? b + R : 0,
            x = r ? r.width : d(n.width) - L - D,
            P = r ? r.height : d(n.height) - w - O,
            M = x + C + D + N,
            k = P + b + O + R,
            U = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(x * devicePixelRatio), Math.round(P * devicePixelRatio), p),
                borderBoxSize: _(M, k, p),
                contentBoxSize: _(x, P, p),
                contentRect: new i.p(I, g, x, P),
            });
        return o.set(e, U), U;
    },
    h = function (e, t, n) {
        var i = p(e, n),
            a = i.borderBoxSize,
            s = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.U.BORDER_BOX:
                return a;
            default:
                return s;
        }
    };
