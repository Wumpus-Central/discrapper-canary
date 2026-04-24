"use strict";
n.d(t, { Ar: () => u, Ay: () => d, fU: () => c });
var r = n(64700),
    i = n(451988),
    a = n(583846),
    l = n(927813);
let s = (e) => {
        let t = Math.floor(e) % l.A.Seconds.MINUTE,
            n = Math.floor(e / l.A.Seconds.MINUTE) % l.A.Seconds.MINUTE;
        return { hours: Math.floor(e / l.A.Seconds.HOUR), minutes: n, seconds: t };
    },
    o = (e) => String(e).padStart(2, "0"),
    c = (e) => {
        let { hours: t, minutes: n, seconds: r } = s(e);
        return 0 === t ? `${o(n)}:${o(r)}` : `${o(t)}:${o(n)}:${o(r)}`;
    },
    u = (e) => {
        let { hours: t, minutes: n, seconds: r } = s(e);
        return (0, a.XK)({ hours: t, minutes: n, seconds: r });
    };
function d(e) {
    let { start: t, end: n } = e,
        [a] = (0, r.useState)(new i.IX()),
        [s, o] = (0, r.useState)(() => Date.now());
    (0, r.useEffect)(() => (a.start(l.A.Millis.HALF_SECOND, () => o(Date.now())), () => a.stop()), [a]);
    let c = (n - t) / l.A.Millis.SECOND,
        u = Math.max(Math.min((s - t) / l.A.Millis.SECOND, c), 0);
    return { elapsed: u, duration: c, percentage: Math.max(Math.min(u / c, 1), 0) };
}
