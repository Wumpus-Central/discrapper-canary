n.d(e, { A: () => d });
var i = n(582128),
    r = n(536637),
    l = n.n(r),
    s = n(927813),
    o = n(379418);
let a = [
        [2 * s.A.Seconds.MINUTE, s.A.Seconds.SECOND],
        [5 * s.A.Seconds.MINUTE, s.A.Seconds.MINUTE],
        [45 * s.A.Seconds.MINUTE, 2 * s.A.Seconds.MINUTE],
        [21 * s.A.Seconds.HOUR, 5 * s.A.Seconds.MINUTE],
    ],
    u = 2 * s.A.Seconds.HOUR;
function d(t) {
    let [e, n] = i.useState(null);
    return (i.useEffect(() => {
        if ("R" !== t.format) return;
        let e = setInterval(
            () => {
                n({ parsed: t.parsed, formatted: o.kx.R(t.parsed) });
            },
            (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l()(),
                    n = Math.abs(t.diff(e));
                for (let [t, e] of a) if (n < 1e3 * t) return 1e3 * e;
                return 1e3 * u;
            })(t.parsed),
        );
        return () => clearInterval(e);
    }, [t.format, t.parsed]),
    "R" === t.format)
        ? null != e && e.parsed === t.parsed
            ? e.formatted
            : o.kx.R(t.parsed)
        : t.formatted;
}
