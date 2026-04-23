"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(989349),
    d = n.n(l),
    _ = n(27867),
    u = n(927813),
    c = n(379418);
let E = [
        [2 * u.A.Seconds.MINUTE, u.A.Seconds.SECOND],
        [5 * u.A.Seconds.MINUTE, u.A.Seconds.MINUTE],
        [45 * u.A.Seconds.MINUTE, 2 * u.A.Seconds.MINUTE],
        [21 * u.A.Seconds.HOUR, 5 * u.A.Seconds.MINUTE],
    ],
    h = 2 * u.A.Seconds.HOUR;
var m = n(992595);
function f(e) {
    let t,
        { node: n, showTooltip: s = !0, className: l } = e,
        u =
            ((t = (0, _.A)()),
            (r.useEffect(() => {
                if ("R" !== n.format) return;
                let e = 1e3 * h,
                    i = Math.abs(n.parsed.diff(d()()));
                for (let [t, n] of E)
                    if (i < 1e3 * t) {
                        e = 1e3 * n;
                        break;
                    }
                let r = setInterval(() => {
                    t();
                }, e);
                return () => clearInterval(r);
            }, [t, n.format, n.parsed]),
            "R" === n.format)
                ? c.kx.R(n.parsed)
                : n.formatted),
        f = (0, i.jsx)("span", { className: a()(m.vE, l), children: u });
    return !0 !== s ? f : (0, i.jsx)(o.m, { __unsupportedReactNodeAsText: n.full, ariaHidden: !0, children: f });
}
