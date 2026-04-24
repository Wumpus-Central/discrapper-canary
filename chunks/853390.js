n.d(t, { Ar: () => d, Ay: () => u, fU: () => c });
var r = n(64700),
    a = n(451988),
    i = n(583846),
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
    d = (e) => {
        let { hours: t, minutes: n, seconds: r } = s(e);
        return (0, i.XK)({ hours: t, minutes: n, seconds: r });
    };
function u(e) {
    let { start: t, end: n } = e,
        [i] = (0, r.useState)(new a.IX()),
        [s, o] = (0, r.useState)(() => Date.now());
    (0, r.useEffect)(() => (i.start(l.A.Millis.HALF_SECOND, () => o(Date.now())), () => i.stop()), [i]);
    let c = (n - t) / l.A.Millis.SECOND,
        d = Math.max(Math.min((s - t) / l.A.Millis.SECOND, c), 0);
    return { elapsed: d, duration: c, percentage: Math.max(Math.min(d / c, 1), 0) };
}
