"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(27867),
    o = n(927813),
    l = n(379418);
let u = [
        [2 * o.A.Seconds.MINUTE, o.A.Seconds.SECOND],
        [5 * o.A.Seconds.MINUTE, o.A.Seconds.MINUTE],
        [45 * o.A.Seconds.MINUTE, 2 * o.A.Seconds.MINUTE],
        [21 * o.A.Seconds.HOUR, 5 * o.A.Seconds.MINUTE],
    ],
    c = 2 * o.A.Seconds.HOUR;
function d(e) {
    let t = (0, a.A)();
    return (r.useEffect(() => {
        if ("R" !== e.format) return;
        let n = 1e3 * c,
            r = Math.abs(e.parsed.diff(s()()));
        for (let [e, t] of u)
            if (r < 1e3 * e) {
                n = 1e3 * t;
                break;
            }
        let i = setInterval(() => {
            t();
        }, n);
        return () => clearInterval(i);
    }, [t, e.format, e.parsed]),
    "R" === e.format)
        ? l.kx.R(e.parsed)
        : e.formatted;
}
