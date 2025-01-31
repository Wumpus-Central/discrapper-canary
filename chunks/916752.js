n.d(t, { Z: () => d }), n(47120);
var i = n(192379),
    r = n(913527),
    a = n.n(r),
    s = n(931609),
    o = n(70956),
    l = n(660199);
let u = [
        [2 * o.Z.Seconds.MINUTE, o.Z.Seconds.SECOND],
        [5 * o.Z.Seconds.MINUTE, o.Z.Seconds.MINUTE],
        [45 * o.Z.Seconds.MINUTE, 2 * o.Z.Seconds.MINUTE],
        [21 * o.Z.Seconds.HOUR, 5 * o.Z.Seconds.MINUTE]
    ],
    c = 2 * o.Z.Seconds.HOUR;
function d(e) {
    let t = (0, s.Z)();
    return (i.useEffect(() => {
        if ('R' !== e.format) return;
        let n = 1000 * c,
            i = Math.abs(e.parsed.diff(a()()));
        for (let [e, t] of u)
            if (i < 1000 * e) {
                n = 1000 * t;
                break;
            }
        let r = setInterval(() => {
            t();
        }, n);
        return () => clearInterval(r);
    }, [t, e.format, e.parsed]),
    'R' === e.format)
        ? l.Qh.R(e.parsed)
        : e.formatted;
}
