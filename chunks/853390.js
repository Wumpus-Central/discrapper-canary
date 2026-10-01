n.d(t, { Ar: () => u, Ay: () => d, fU: () => c });
var a = n(582128),
    i = n(451988),
    o = n(583846),
    r = n(927813);
function l(e) {
    let t = Math.floor(e) % r.A.Seconds.MINUTE,
        n = Math.floor(e / r.A.Seconds.MINUTE) % r.A.Seconds.MINUTE;
    return { hours: Math.floor(e / r.A.Seconds.HOUR), minutes: n, seconds: t };
}
function s(e) {
    return String(e).padStart(2, "0");
}
function c(e) {
    let { hours: t, minutes: n, seconds: a } = l(e);
    return 0 === t ? `${s(n)}:${s(a)}` : `${s(t)}:${s(n)}:${s(a)}`;
}
function u(e) {
    let { hours: t, minutes: n, seconds: a } = l(e);
    return (0, o.XK)({ hours: t, minutes: n, seconds: a });
}
function d(e) {
    let { start: t, end: n } = e,
        [o] = (0, a.useState)(new i.IX()),
        [l, s] = (0, a.useState)(() => Date.now());
    (0, a.useEffect)(() => (o.start(r.A.Millis.HALF_SECOND, () => s(Date.now())), () => o.stop()), [o]);
    let c = (n - t) / r.A.Millis.SECOND,
        u = Math.max(Math.min((l - t) / r.A.Millis.SECOND, c), 0);
    return { elapsed: u, duration: c, percentage: Math.max(Math.min(u / c, 1), 0) };
}
