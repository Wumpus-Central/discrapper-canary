"use strict";
r.d(t, { R: () => i, o: () => s });
var n = r(985847),
    o = r(361037);
function i(e, t) {
    let r = a(e, t, "left"),
        n = a(e, t, "top"),
        o = t.offsetWidth,
        i = t.offsetHeight,
        s = e.scrollLeft,
        l = e.scrollTop,
        {
            borderTopWidth: u,
            borderLeftWidth: c,
            scrollPaddingTop: f,
            scrollPaddingRight: p,
            scrollPaddingBottom: d,
            scrollPaddingLeft: h,
        } = getComputedStyle(e),
        { scrollMarginTop: m, scrollMarginRight: v, scrollMarginBottom: y, scrollMarginLeft: g } = getComputedStyle(t),
        b = s + parseInt(c, 10),
        w = l + parseInt(u, 10),
        _ = b + e.clientWidth,
        S = w + e.clientHeight,
        E = parseInt(f, 10) || 0,
        x = parseInt(d, 10) || 0,
        k = parseInt(p, 10) || 0,
        C = parseInt(h, 10) || 0,
        T = parseInt(m, 10) || 0,
        M = parseInt(y, 10) || 0,
        P = parseInt(v, 10) || 0,
        A = r - (parseInt(g, 10) || 0),
        O = r + o + P,
        I = n - T,
        D = n + i + M,
        L = s + parseInt(c, 10) + C,
        R = l + parseInt(u, 10) + E;
    (A > L || O < _ - k) && (A <= s + C ? (s = A - parseInt(c, 10) - C) : O > _ - k && (s += O - _ + k)),
        (I > R || D < S - x) && (I <= w + E ? (l = I - parseInt(u, 10) - E) : D > S - x && (l += D - S + x)),
        e.scrollTo({ left: s, top: l });
}
function a(e, t, r) {
    let n = "left" === r ? "offsetLeft" : "offsetTop",
        o = 0;
    for (; t.offsetParent && ((o += t[n]), t.offsetParent !== e); ) {
        if (t.offsetParent.contains(e)) {
            o -= e[n];
            break;
        }
        t = t.offsetParent;
    }
    return o;
}
function s(e, t) {
    if (e && document.contains(e)) {
        let u = document.scrollingElement || document.documentElement;
        if ("hidden" === window.getComputedStyle(u).overflow || (0, o.H8)())
            for (let t of (function (e) {
                let t = [];
                for (; e && e !== document.documentElement; ) (0, n.o)(e, void 0) && t.push(e), (e = e.parentElement);
                return t;
            })(e))
                i(t, e);
        else {
            var r, a, s, l;
            let { left: n, top: o } = e.getBoundingClientRect();
            null == e || null == (r = e.scrollIntoView) || r.call(e, { block: "nearest" });
            let { left: i, top: u } = e.getBoundingClientRect();
            (Math.abs(n - i) > 1 || Math.abs(o - u) > 1) &&
                (null == t ||
                    null == (s = t.containingElement) ||
                    null == (a = s.scrollIntoView) ||
                    a.call(s, { block: "center", inline: "center" }),
                null == (l = e.scrollIntoView) || l.call(e, { block: "nearest" }));
        }
    }
}
