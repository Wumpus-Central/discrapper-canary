n.d(e, { Ar: () => A, Ay: () => d, fU: () => u });
var i = n(64700),
    r = n(451988),
    a = n(583846),
    o = n(927813);
function l(t) {
    let e = Math.floor(t) % o.A.Seconds.MINUTE,
        n = Math.floor(t / o.A.Seconds.MINUTE) % o.A.Seconds.MINUTE;
    return { hours: Math.floor(t / o.A.Seconds.HOUR), minutes: n, seconds: e };
}
function s(t) {
    return String(t).padStart(2, "0");
}
function u(t) {
    let { hours: e, minutes: n, seconds: i } = l(t);
    return 0 === e ? `${s(n)}:${s(i)}` : `${s(e)}:${s(n)}:${s(i)}`;
}
function A(t) {
    let { hours: e, minutes: n, seconds: i } = l(t);
    return (0, a.XK)({ hours: e, minutes: n, seconds: i });
}
function d(t) {
    let { start: e, end: n } = t,
        [a] = (0, i.useState)(new r.IX()),
        [l, s] = (0, i.useState)(() => Date.now());
    (0, i.useEffect)(() => (a.start(o.A.Millis.HALF_SECOND, () => s(Date.now())), () => a.stop()), [a]);
    let u = (n - e) / o.A.Millis.SECOND,
        A = Math.max(Math.min((l - e) / o.A.Millis.SECOND, u), 0);
    return { elapsed: A, duration: u, percentage: Math.max(Math.min(A / u, 1), 0) };
}
