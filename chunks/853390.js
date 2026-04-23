"use strict";
n.d(t, { Ar: () => d, Ay: () => u, fU: () => c });
var a = n(64700),
    i = n(451988),
    r = n(583846),
    s = n(927813);
let l = (e) => {
        let t = Math.floor(e) % s.A.Seconds.MINUTE,
            n = Math.floor(e / s.A.Seconds.MINUTE) % s.A.Seconds.MINUTE;
        return { hours: Math.floor(e / s.A.Seconds.HOUR), minutes: n, seconds: t };
    },
    o = (e) => String(e).padStart(2, "0"),
    c = (e) => {
        let { hours: t, minutes: n, seconds: a } = l(e);
        return 0 === t ? `${o(n)}:${o(a)}` : `${o(t)}:${o(n)}:${o(a)}`;
    },
    d = (e) => {
        let { hours: t, minutes: n, seconds: a } = l(e);
        return (0, r.XK)({ hours: t, minutes: n, seconds: a });
    };
function u(e) {
    let { start: t, end: n } = e,
        [r] = (0, a.useState)(new i.IX()),
        [l, o] = (0, a.useState)(() => Date.now());
    (0, a.useEffect)(() => (r.start(s.A.Millis.HALF_SECOND, () => o(Date.now())), () => r.stop()), [r]);
    let c = (n - t) / s.A.Millis.SECOND,
        d = Math.max(Math.min((l - t) / s.A.Millis.SECOND, c), 0);
    return { elapsed: d, duration: c, percentage: Math.max(Math.min(d / c, 1), 0) };
}
