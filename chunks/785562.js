s.d(r, { A: () => S });
var t = s(477900),
    a = s(582128),
    d = s(503698),
    n = s.n(d),
    o = s(866665),
    c = s(536637),
    l = s.n(c),
    p = s(927813),
    f = s(379418);
let u = [
        [2 * p.A.Seconds.MINUTE, p.A.Seconds.SECOND],
        [5 * p.A.Seconds.MINUTE, p.A.Seconds.MINUTE],
        [45 * p.A.Seconds.MINUTE, 2 * p.A.Seconds.MINUTE],
        [21 * p.A.Seconds.HOUR, 5 * p.A.Seconds.MINUTE],
    ],
    i = 2 * p.A.Seconds.HOUR;
var A = s(165648);
function S(e) {
    let { node: r, showTooltip: s = !0, className: d } = e,
        c = (function (e) {
            let [r, s] = a.useState(null);
            return (a.useEffect(() => {
                if ("R" !== e.format) return;
                let r = 1e3 * i,
                    t = Math.abs(e.parsed.diff(l()()));
                for (let [e, s] of u)
                    if (t < 1e3 * e) {
                        r = 1e3 * s;
                        break;
                    }
                let a = setInterval(() => {
                    s({ parsed: e.parsed, formatted: f.kx.R(e.parsed) });
                }, r);
                return () => clearInterval(a);
            }, [e.format, e.parsed]),
            "R" === e.format)
                ? null != r && r.parsed === e.parsed
                    ? r.formatted
                    : f.kx.R(e.parsed)
                : e.formatted;
        })(r),
        p = (0, t.jsx)("span", { className: n()(A.vE, d), children: c });
    return !0 !== s ? p : (0, t.jsx)(o.m, { __unsupportedReactNodeAsText: r.full, ariaHidden: !0, children: p });
}
