n.d(e, { Ar: () => l, Ay: () => h, fU: () => c });
var r = n(582128),
    a = n(451988),
    o = n(583846),
    s = n(927813);
function i(t) {
    let e = Math.floor(t) % s.A.Seconds.MINUTE,
        n = Math.floor(t / s.A.Seconds.MINUTE) % s.A.Seconds.MINUTE;
    return { hours: Math.floor(t / s.A.Seconds.HOUR), minutes: n, seconds: e };
}
function u(t) {
    return String(t).padStart(2, "0");
}
function c(t) {
    let { hours: e, minutes: n, seconds: r } = i(t);
    return 0 === e ? `${u(n)}:${u(r)}` : `${u(e)}:${u(n)}:${u(r)}`;
}
function l(t) {
    let { hours: e, minutes: n, seconds: r } = i(t);
    return (0, o.XK)({ hours: e, minutes: n, seconds: r });
}
function h(t) {
    let { start: e, end: n } = t,
        [o] = (0, r.useState)(new a.IX()),
        [i, u] = (0, r.useState)(() => Date.now());
    (0, r.useEffect)(() => (o.start(s.A.Millis.HALF_SECOND, () => u(Date.now())), () => o.stop()), [o]);
    let c = (n - e) / s.A.Millis.SECOND,
        l = Math.max(Math.min((i - e) / s.A.Millis.SECOND, c), 0);
    return { elapsed: l, duration: c, percentage: Math.max(Math.min(l / c, 1), 0) };
}
