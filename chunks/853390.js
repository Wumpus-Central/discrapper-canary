"use strict";
n.d(t, { A: () => l, f: () => o });
var r = n(64700),
    i = n(451988),
    a = n(927813);
let s = (e) => String(e).padStart(2, "0"),
    o = (e) => {
        let t = Math.floor(e) % a.A.Seconds.MINUTE,
            n = Math.floor(e / a.A.Seconds.MINUTE) % a.A.Seconds.MINUTE,
            r = Math.floor(e / a.A.Seconds.HOUR);
        return 0 === r ? `${s(n)}:${s(t)}` : `${s(r)}:${s(n)}:${s(t)}`;
    };
function l(e) {
    let { start: t, end: n } = e,
        [s] = (0, r.useState)(new i.IX()),
        [o, l] = (0, r.useState)(Date.now());
    (0, r.useEffect)(() => (s.start(a.A.Millis.HALF_SECOND, () => l(Date.now())), () => s.stop()), [s]);
    let u = (n - t) / a.A.Millis.SECOND,
        c = Math.max(Math.min((o - t) / a.A.Millis.SECOND, u), 0);
    return { elapsed: c, duration: u, percentage: Math.max(Math.min(c / u, 1), 0) };
}
