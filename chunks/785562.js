"use strict";
n.d(t, { A: () => I });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(989349),
    d = n.n(o),
    c = n(265431),
    u = n(927813),
    _ = n(379418);
let E = [
        [2 * u.A.Seconds.MINUTE, u.A.Seconds.SECOND],
        [5 * u.A.Seconds.MINUTE, u.A.Seconds.MINUTE],
        [45 * u.A.Seconds.MINUTE, 2 * u.A.Seconds.MINUTE],
        [21 * u.A.Seconds.HOUR, 5 * u.A.Seconds.MINUTE],
    ],
    A = 2 * u.A.Seconds.HOUR;
var h = n(742715);
function I(e) {
    let t,
        { node: n, showTooltip: a = !0, className: o } = e,
        u =
            ((t = (0, c.A)()),
            (r.useEffect(() => {
                if ("R" !== n.format) return;
                let e = 1e3 * A,
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
                ? _.kx.R(n.parsed)
                : n.formatted),
        I = (0, i.jsx)("span", { className: s()(h.vE, o), children: u });
    return !0 !== a ? I : (0, i.jsx)(l.m, { __unsupportedReactNodeAsText: n.full, ariaHidden: !0, children: I });
}
