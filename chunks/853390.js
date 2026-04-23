n.d(t, { Ar: () => d, Ay: () => u, fU: () => o });
var r = n(64700),
    i = n(451988),
    a = n(583846),
    l = n(927813);
let s = (e) => {
        let t = Math.floor(e) % l.A.Seconds.MINUTE,
            n = Math.floor(e / l.A.Seconds.MINUTE) % l.A.Seconds.MINUTE;
        return { hours: Math.floor(e / l.A.Seconds.HOUR), minutes: n, seconds: t };
    },
    c = (e) => String(e).padStart(2, "0"),
    o = (e) => {
        let { hours: t, minutes: n, seconds: r } = s(e);
        return 0 === t ? `${c(n)}:${c(r)}` : `${c(t)}:${c(n)}:${c(r)}`;
    },
    d = (e) => {
        let { hours: t, minutes: n, seconds: r } = s(e);
        return (0, a.XK)({ hours: t, minutes: n, seconds: r });
    };
function u(e) {
    let { start: t, end: n } = e,
        [a] = (0, r.useState)(new i.IX()),
        [s, c] = (0, r.useState)(() => Date.now());
    (0, r.useEffect)(() => (a.start(l.A.Millis.HALF_SECOND, () => c(Date.now())), () => a.stop()), [a]);
    let o = (n - t) / l.A.Millis.SECOND,
        d = Math.max(Math.min((s - t) / l.A.Millis.SECOND, o), 0);
    return { elapsed: d, duration: o, percentage: Math.max(Math.min(d / o, 1), 0) };
}
