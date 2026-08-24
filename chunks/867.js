"use strict";
r.d(t, { R: () => o, o: () => s });
var n = r(985847),
    i = r(361037);
function o(e, t) {
    let r = a(e, t, "left"),
        n = a(e, t, "top"),
        i = t.offsetWidth,
        o = t.offsetHeight,
        s = e.scrollLeft,
        l = e.scrollTop,
        {
            borderTopWidth: u,
            borderLeftWidth: c,
            scrollPaddingTop: f,
            scrollPaddingRight: d,
            scrollPaddingBottom: p,
            scrollPaddingLeft: h,
        } = getComputedStyle(e),
        { scrollMarginTop: m, scrollMarginRight: v, scrollMarginBottom: y, scrollMarginLeft: g } = getComputedStyle(t),
        b = s + parseInt(c, 10),
        w = l + parseInt(u, 10),
        _ = b + e.clientWidth,
        S = w + e.clientHeight,
        x = parseInt(f, 10) || 0,
        E = parseInt(p, 10) || 0,
        k = parseInt(d, 10) || 0,
        C = parseInt(h, 10) || 0,
        T = parseInt(m, 10) || 0,
        M = parseInt(y, 10) || 0,
        P = parseInt(v, 10) || 0,
        A = r - (parseInt(g, 10) || 0),
        I = r + i + P,
        O = n - T,
        D = n + o + M,
        R = s + parseInt(c, 10) + C,
        L = l + parseInt(u, 10) + x;
    (A > R || I < _ - k) && (A <= s + C ? (s = A - parseInt(c, 10) - C) : I > _ - k && (s += I - _ + k)),
        (O > L || D < S - E) && (O <= w + x ? (l = O - parseInt(u, 10) - x) : D > S - E && (l += D - S + E)),
        e.scrollTo({ left: s, top: l });
}
function a(e, t, r) {
    let n = "left" === r ? "offsetLeft" : "offsetTop",
        i = 0;
    for (; t.offsetParent && ((i += t[n]), t.offsetParent !== e); ) {
        if (t.offsetParent.contains(e)) {
            i -= e[n];
            break;
        }
        t = t.offsetParent;
    }
    return i;
}
function s(e, t) {
    if (e && document.contains(e)) {
        let u = document.scrollingElement || document.documentElement;
        if ("hidden" === window.getComputedStyle(u).overflow || (0, i.H8)())
            for (let t of (function (e) {
                let t = [];
                for (; e && e !== document.documentElement; ) (0, n.o)(e, void 0) && t.push(e), (e = e.parentElement);
                return t;
            })(e))
                o(t, e);
        else {
            var r, a, s, l;
            let { left: n, top: i } = e.getBoundingClientRect();
            null == e || null == (r = e.scrollIntoView) || r.call(e, { block: "nearest" });
            let { left: o, top: u } = e.getBoundingClientRect();
            (Math.abs(n - o) > 1 || Math.abs(i - u) > 1) &&
                (null == t ||
                    null == (s = t.containingElement) ||
                    null == (a = s.scrollIntoView) ||
                    a.call(s, { block: "center", inline: "center" }),
                null == (l = e.scrollIntoView) || l.call(e, { block: "nearest" }));
        }
    }
}
