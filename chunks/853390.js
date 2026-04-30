"use strict";
n.d(t, { Ar: () => c, Ay: () => d, fU: () => u });
var i = n(64700),
    r = n(451988),
    s = n(832384),
    a = n(927813);
let o = (e) => {
        let t = Math.floor(e) % a.A.Seconds.MINUTE,
            n = Math.floor(e / a.A.Seconds.MINUTE) % a.A.Seconds.MINUTE;
        return { hours: Math.floor(e / a.A.Seconds.HOUR), minutes: n, seconds: t };
    },
    l = (e) => String(e).padStart(2, "0"),
    u = (e) => {
        let { hours: t, minutes: n, seconds: i } = o(e);
        return 0 === t ? `${l(n)}:${l(i)}` : `${l(t)}:${l(n)}:${l(i)}`;
    },
    c = (e) => {
        let { hours: t, minutes: n, seconds: i } = o(e);
        return (0, s.XK)({ hours: t, minutes: n, seconds: i });
    };
function d(e) {
    let { start: t, end: n } = e,
        [s] = (0, i.useState)(new r.IX()),
        [o, l] = (0, i.useState)(() => Date.now());
    (0, i.useEffect)(() => (s.start(a.A.Millis.HALF_SECOND, () => l(Date.now())), () => s.stop()), [s]);
    let u = (n - t) / a.A.Millis.SECOND,
        c = Math.max(Math.min((o - t) / a.A.Millis.SECOND, u), 0);
    return { elapsed: c, duration: u, percentage: Math.max(Math.min(c / u, 1), 0) };
}
