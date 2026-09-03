n.d(t, { A: () => g });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(866665),
    o = n(536637),
    u = n.n(o),
    c = n(265431),
    d = n(927813),
    h = n(379418);
let m = [
        [2 * d.A.Seconds.MINUTE, d.A.Seconds.SECOND],
        [5 * d.A.Seconds.MINUTE, d.A.Seconds.MINUTE],
        [45 * d.A.Seconds.MINUTE, 2 * d.A.Seconds.MINUTE],
        [21 * d.A.Seconds.HOUR, 5 * d.A.Seconds.MINUTE],
    ],
    f = 2 * d.A.Seconds.HOUR;
var p = n(165648);
function g(e) {
    let t,
        { node: n, showTooltip: s = !0, className: o } = e,
        d =
            ((t = (0, c.A)()),
            (i.useEffect(() => {
                if ("R" !== n.format) return;
                let e = 1e3 * f,
                    l = Math.abs(n.parsed.diff(u()()));
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
        g = (0, l.jsx)("span", { className: r()(p.vE, o), children: d });
    return !0 !== s ? g : (0, l.jsx)(a.m, { __unsupportedReactNodeAsText: n.full, ariaHidden: !0, children: g });
}
