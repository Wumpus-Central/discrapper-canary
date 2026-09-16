r.d(s, { A: () => E });
var t = r(477900),
    a = r(582128),
    d = r(503698),
    n = r.n(d),
    c = r(866665),
    o = r(536637),
    f = r.n(o),
    i = r(265431),
    l = r(927813),
    p = r(379418);
let u = [
        [2 * l.A.Seconds.MINUTE, l.A.Seconds.SECOND],
        [5 * l.A.Seconds.MINUTE, l.A.Seconds.MINUTE],
        [45 * l.A.Seconds.MINUTE, 2 * l.A.Seconds.MINUTE],
        [21 * l.A.Seconds.HOUR, 5 * l.A.Seconds.MINUTE],
    ],
    A = 2 * l.A.Seconds.HOUR;
var S = r(165648);
function E(e) {
    let s,
        { node: r, showTooltip: d = !0, className: o } = e,
        l =
            ((s = (0, i.A)()),
            (a.useEffect(() => {
                if ("R" !== r.format) return;
                let e = 1e3 * A,
                    t = Math.abs(r.parsed.diff(f()()));
                for (let [s, r] of u)
                    if (t < 1e3 * s) {
                        e = 1e3 * r;
                        break;
                    }
                let a = setInterval(() => {
                    s();
                }, e);
                return () => clearInterval(a);
            }, [s, r.format, r.parsed]),
            "R" === r.format)
                ? p.kx.R(r.parsed)
                : r.formatted),
        E = (0, t.jsx)("span", { className: n()(S.vE, o), children: l });
    return !0 !== d ? E : (0, t.jsx)(c.m, { __unsupportedReactNodeAsText: r.full, ariaHidden: !0, children: E });
}
