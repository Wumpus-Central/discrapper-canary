"use strict";
n.d(t, { Ar: () => c, Ay: () => u, fU: () => d });
var i = n(64700),
    r = n(451988),
    a = n(583846),
    s = n(927813);
function l(e) {
    let t = Math.floor(e) % s.A.Seconds.MINUTE,
        n = Math.floor(e / s.A.Seconds.MINUTE) % s.A.Seconds.MINUTE;
    return { hours: Math.floor(e / s.A.Seconds.HOUR), minutes: n, seconds: t };
}
function o(e) {
    return String(e).padStart(2, "0");
}
function d(e) {
    let { hours: t, minutes: n, seconds: i } = l(e);
    return 0 === t ? `${o(n)}:${o(i)}` : `${o(t)}:${o(n)}:${o(i)}`;
}
function c(e) {
    let { hours: t, minutes: n, seconds: i } = l(e);
    return (0, a.XK)({ hours: t, minutes: n, seconds: i });
}
function u(e) {
    let { start: t, end: n } = e,
        [a] = (0, i.useState)(new r.IX()),
        [l, o] = (0, i.useState)(() => Date.now());
    (0, i.useEffect)(() => (a.start(s.A.Millis.HALF_SECOND, () => o(Date.now())), () => a.stop()), [a]);
    let d = (n - t) / s.A.Millis.SECOND,
        c = Math.max(Math.min((l - t) / s.A.Millis.SECOND, d), 0);
    return { elapsed: c, duration: d, percentage: Math.max(Math.min(c / d, 1), 0) };
}
