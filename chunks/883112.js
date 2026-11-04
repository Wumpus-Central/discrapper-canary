r.d(t, { A: () => p });
var s = r(582128),
    d = r(536637),
    n = r.n(d),
    a = r(927813),
    o = r(379418);
let c = [
        [2 * a.A.Seconds.MINUTE, a.A.Seconds.SECOND],
        [5 * a.A.Seconds.MINUTE, a.A.Seconds.MINUTE],
        [45 * a.A.Seconds.MINUTE, 2 * a.A.Seconds.MINUTE],
        [21 * a.A.Seconds.HOUR, 5 * a.A.Seconds.MINUTE],
    ],
    f = 2 * a.A.Seconds.HOUR;
function p(e) {
    let [t, r] = s.useState(null);
    return (s.useEffect(() => {
        if ("R" !== e.format) return;
        let t = setInterval(
            () => {
                r({ parsed: e.parsed, formatted: o.kx.R(e.parsed) });
            },
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n()(),
                    r = Math.abs(e.diff(t));
                for (let [e, t] of c) if (r < 1e3 * e) return 1e3 * t;
                return 1e3 * f;
            })(e.parsed),
        );
        return () => clearInterval(t);
    }, [e.format, e.parsed]),
    "R" === e.format)
        ? null != t && t.parsed === e.parsed
            ? t.formatted
            : o.kx.R(e.parsed)
        : e.formatted;
}
