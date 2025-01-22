r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(913527),
    s = r.n(o),
    l = r(931609),
    u = r(70956),
    c = r(660199);
let d = [
        [2 * u.Z.Seconds.MINUTE, u.Z.Seconds.SECOND],
        [5 * u.Z.Seconds.MINUTE, u.Z.Seconds.MINUTE],
        [45 * u.Z.Seconds.MINUTE, 2 * u.Z.Seconds.MINUTE],
        [21 * u.Z.Seconds.HOUR, 5 * u.Z.Seconds.MINUTE]
    ],
    f = 2 * u.Z.Seconds.HOUR;
function p(e) {
    let n = (0, l.Z)();
    return (a.useEffect(() => {
        if ('R' !== e.format) return;
        let r = 1000 * f,
            i = Math.abs(e.parsed.diff(s()()));
        for (let [e, n] of d)
            if (i < 1000 * e) {
                r = 1000 * n;
                break;
            }
        let a = setInterval(() => {
            n();
        }, r);
        return () => clearInterval(a);
    }, [n, e.format, e.parsed]),
    'R' === e.format)
        ? c.Qh.R(e.parsed)
        : e.formatted;
}
