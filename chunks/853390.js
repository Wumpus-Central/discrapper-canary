a.d(e, { Ar: () => u, Ay: () => M, fU: () => h });
var r = a(64700),
    s = a(451988),
    n = a(583846),
    o = a(927813);
let i = (t) => {
        let e = Math.floor(t) % o.A.Seconds.MINUTE,
            a = Math.floor(t / o.A.Seconds.MINUTE) % o.A.Seconds.MINUTE;
        return { hours: Math.floor(t / o.A.Seconds.HOUR), minutes: a, seconds: e };
    },
    l = (t) => String(t).padStart(2, "0"),
    h = (t) => {
        let { hours: e, minutes: a, seconds: r } = i(t);
        return 0 === e ? `${l(a)}:${l(r)}` : `${l(e)}:${l(a)}:${l(r)}`;
    },
    u = (t) => {
        let { hours: e, minutes: a, seconds: r } = i(t);
        return (0, n.XK)({ hours: e, minutes: a, seconds: r });
    };
function M(t) {
    let { start: e, end: a } = t,
        [n] = (0, r.useState)(new s.IX()),
        [i, l] = (0, r.useState)(() => Date.now());
    (0, r.useEffect)(() => (n.start(o.A.Millis.HALF_SECOND, () => l(Date.now())), () => n.stop()), [n]);
    let h = (a - e) / o.A.Millis.SECOND,
        u = Math.max(Math.min((i - e) / o.A.Millis.SECOND, h), 0);
    return { elapsed: u, duration: h, percentage: Math.max(Math.min(u / h, 1), 0) };
}
