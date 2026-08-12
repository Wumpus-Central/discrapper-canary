a.d(t, { Ar: () => c, Ay: () => A, fU: () => d });
var l = a(582128),
    n = a(451988),
    i = a(583846),
    s = a(927813);
function r(e) {
    let t = Math.floor(e) % s.A.Seconds.MINUTE,
        a = Math.floor(e / s.A.Seconds.MINUTE) % s.A.Seconds.MINUTE;
    return { hours: Math.floor(e / s.A.Seconds.HOUR), minutes: a, seconds: t };
}
function o(e) {
    return String(e).padStart(2, "0");
}
function d(e) {
    let { hours: t, minutes: a, seconds: l } = r(e);
    return 0 === t ? `${o(a)}:${o(l)}` : `${o(t)}:${o(a)}:${o(l)}`;
}
function c(e) {
    let { hours: t, minutes: a, seconds: l } = r(e);
    return (0, i.XK)({ hours: t, minutes: a, seconds: l });
}
function A(e) {
    let { start: t, end: a } = e,
        [i] = (0, l.useState)(new n.IX()),
        [r, o] = (0, l.useState)(() => Date.now());
    (0, l.useEffect)(() => (i.start(s.A.Millis.HALF_SECOND, () => o(Date.now())), () => i.stop()), [i]);
    let d = (a - t) / s.A.Millis.SECOND,
        c = Math.max(Math.min((r - t) / s.A.Millis.SECOND, d), 0);
    return { elapsed: c, duration: d, percentage: Math.max(Math.min(c / d, 1), 0) };
}
