"use strict";
n.d(t, { R: () => a, o: () => s });
var r = n(985847),
    i = n(361037);
function a(e, t) {
    let n = o(e, t, "left"),
        r = o(e, t, "top"),
        i = t.offsetWidth,
        a = t.offsetHeight,
        s = e.scrollLeft,
        l = e.scrollTop,
        {
            borderTopWidth: u,
            borderLeftWidth: c,
            scrollPaddingTop: d,
            scrollPaddingRight: f,
            scrollPaddingBottom: p,
            scrollPaddingLeft: h,
        } = getComputedStyle(e),
        { scrollMarginTop: m, scrollMarginRight: g, scrollMarginBottom: v, scrollMarginLeft: y } = getComputedStyle(t),
        b = s + parseInt(c, 10),
        _ = l + parseInt(u, 10),
        w = b + e.clientWidth,
        x = _ + e.clientHeight,
        E = parseInt(d, 10) || 0,
        S = parseInt(p, 10) || 0,
        k = parseInt(f, 10) || 0,
        T = parseInt(h, 10) || 0,
        C = parseInt(m, 10) || 0,
        P = parseInt(v, 10) || 0,
        A = parseInt(g, 10) || 0,
        M = n - (parseInt(y, 10) || 0),
        R = n + i + A,
        I = r - C,
        L = r + a + P,
        O = s + parseInt(c, 10) + T,
        D = l + parseInt(u, 10) + E;
    (M > O || R < w - k) && (M <= s + T ? (s = M - parseInt(c, 10) - T) : R > w - k && (s += R - w + k)),
        (I > D || L < x - S) && (I <= _ + E ? (l = I - parseInt(u, 10) - E) : L > x - S && (l += L - x + S)),
        e.scrollTo({ left: s, top: l });
}
function o(e, t, n) {
    let r = "left" === n ? "offsetLeft" : "offsetTop",
        i = 0;
    for (; t.offsetParent && ((i += t[r]), t.offsetParent !== e); ) {
        if (t.offsetParent.contains(e)) {
            i -= e[r];
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
                for (; e && e !== document.documentElement; ) (0, r.o)(e, void 0) && t.push(e), (e = e.parentElement);
                return t;
            })(e))
                a(t, e);
        else {
            var n, o, s, l;
            let { left: r, top: i } = e.getBoundingClientRect();
            null == e || null == (n = e.scrollIntoView) || n.call(e, { block: "nearest" });
            let { left: a, top: u } = e.getBoundingClientRect();
            (Math.abs(r - a) > 1 || Math.abs(i - u) > 1) &&
                (null == t ||
                    null == (s = t.containingElement) ||
                    null == (o = s.scrollIntoView) ||
                    o.call(s, { block: "center", inline: "center" }),
                null == (l = e.scrollIntoView) || l.call(e, { block: "nearest" }));
        }
    }
}
