n.d(t, { Ar: () => c, Ay: () => u, fU: () => d });
var a = n(582128),
    i = n(451988),
    l = n(583846),
    r = n(927813);
function o(e) {
    let t = Math.floor(e) % r.A.Seconds.MINUTE,
        n = Math.floor(e / r.A.Seconds.MINUTE) % r.A.Seconds.MINUTE;
    return { hours: Math.floor(e / r.A.Seconds.HOUR), minutes: n, seconds: t };
}
function s(e) {
    return String(e).padStart(2, "0");
}
function d(e) {
    let { hours: t, minutes: n, seconds: a } = o(e);
    return 0 === t ? `${s(n)}:${s(a)}` : `${s(t)}:${s(n)}:${s(a)}`;
}
function c(e) {
    let { hours: t, minutes: n, seconds: a } = o(e);
    return (0, l.XK)({ hours: t, minutes: n, seconds: a });
}
function u(e) {
    let { start: t, end: n } = e,
        [l] = (0, a.useState)(new i.IX()),
        [o, s] = (0, a.useState)(() => Date.now());
    (0, a.useEffect)(() => (l.start(r.A.Millis.HALF_SECOND, () => s(Date.now())), () => l.stop()), [l]);
    let d = (n - t) / r.A.Millis.SECOND,
        c = Math.max(Math.min((o - t) / r.A.Millis.SECOND, d), 0);
    return { elapsed: c, duration: d, percentage: Math.max(Math.min(c / d, 1), 0) };
}
