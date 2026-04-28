"use strict";
n.d(t, { A: () => g });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(989349),
    c = n.n(o),
    u = n(27867),
    d = n(927813),
    h = n(379418);
let m = [
        [2 * d.A.Seconds.MINUTE, d.A.Seconds.SECOND],
        [5 * d.A.Seconds.MINUTE, d.A.Seconds.MINUTE],
        [45 * d.A.Seconds.MINUTE, 2 * d.A.Seconds.MINUTE],
        [21 * d.A.Seconds.HOUR, 5 * d.A.Seconds.MINUTE],
    ],
    p = 2 * d.A.Seconds.HOUR;
var f = n(992595);
function g(e) {
    let t,
        { node: n, showTooltip: s = !0, className: o } = e,
        d =
            ((t = (0, u.A)()),
            (i.useEffect(() => {
                if ("R" !== n.format) return;
                let e = 1e3 * p,
                    l = Math.abs(n.parsed.diff(c()()));
                for (let [t, n] of m)
                    if (l < 1e3 * t) {
                        e = 1e3 * n;
                        break;
                    }
                let i = setInterval(() => {
                    t();
                }, e);
                return () => clearInterval(i);
            }, [t, n.format, n.parsed]),
            "R" === n.format)
                ? h.kx.R(n.parsed)
                : n.formatted),
        g = (0, l.jsx)("span", { className: a()(f.vE, o), children: d });
    return !0 !== s ? g : (0, l.jsx)(r.m, { __unsupportedReactNodeAsText: n.full, ariaHidden: !0, children: g });
}
