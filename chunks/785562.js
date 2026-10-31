t.d(r, { A: () => S });
var n = t(477900),
    s = t(582128),
    d = t(503698),
    a = t.n(d),
    o = t(866665),
    c = t(536637),
    u = t.n(c),
    l = t(927813),
    f = t(379418);
let p = [
        [2 * l.A.Seconds.MINUTE, l.A.Seconds.SECOND],
        [5 * l.A.Seconds.MINUTE, l.A.Seconds.MINUTE],
        [45 * l.A.Seconds.MINUTE, 2 * l.A.Seconds.MINUTE],
        [21 * l.A.Seconds.HOUR, 5 * l.A.Seconds.MINUTE],
    ],
    i = 2 * l.A.Seconds.HOUR;
var A = t(165648);
function S(e) {
    let { node: r, showTooltip: t = !0, className: d } = e,
        c = (function (e) {
            let [r, t] = s.useState(null);
            return (s.useEffect(() => {
                if ("R" !== e.format) return;
                let r = setInterval(
                    () => {
                        t({ parsed: e.parsed, formatted: f.kx.R(e.parsed) });
                    },
                    (function (e) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u()(),
                            t = Math.abs(e.diff(r));
                        for (let [e, r] of p) if (t < 1e3 * e) return 1e3 * r;
                        return 1e3 * i;
                    })(e.parsed),
                );
                return () => clearInterval(r);
            }, [e.format, e.parsed]),
            "R" === e.format)
                ? null != r && r.parsed === e.parsed
                    ? r.formatted
                    : f.kx.R(e.parsed)
                : e.formatted;
        })(r),
        l = (0, n.jsx)("span", { className: a()(A.vE, d), children: c });
    return !0 !== t ? l : (0, n.jsx)(o.m, { __unsupportedReactNodeAsText: r.full, ariaHidden: !0, children: l });
}
