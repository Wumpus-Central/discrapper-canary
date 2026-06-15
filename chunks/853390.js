a.d(e, { Ar: () => d, Ay: () => u, fU: () => A });
var r = a(64700),
    i = a(451988),
    n = a(751765),
    l = a(927813);
let s = (t) => {
        let e = Math.floor(t) % l.A.Seconds.MINUTE,
            a = Math.floor(t / l.A.Seconds.MINUTE) % l.A.Seconds.MINUTE;
        return { hours: Math.floor(t / l.A.Seconds.HOUR), minutes: a, seconds: e };
    },
    o = (t) => String(t).padStart(2, "0"),
    A = (t) => {
        let { hours: e, minutes: a, seconds: r } = s(t);
        return 0 === e ? `${o(a)}:${o(r)}` : `${o(e)}:${o(a)}:${o(r)}`;
    },
    d = (t) => {
        let { hours: e, minutes: a, seconds: r } = s(t);
        return (0, n.XK)({ hours: e, minutes: a, seconds: r });
    };
function u(t) {
    let { start: e, end: a } = t,
        [n] = (0, r.useState)(new i.IX()),
        [s, o] = (0, r.useState)(() => Date.now());
    (0, r.useEffect)(() => (n.start(l.A.Millis.HALF_SECOND, () => o(Date.now())), () => n.stop()), [n]);
    let A = (a - e) / l.A.Millis.SECOND,
        d = Math.max(Math.min((s - e) / l.A.Millis.SECOND, A), 0);
    return { elapsed: d, duration: A, percentage: Math.max(Math.min(d / A, 1), 0) };
}
