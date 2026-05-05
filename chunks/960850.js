"use strict";
n.d(t, { F3: () => d, VI: () => h, _i: () => _, pS: () => f });
var i = n(989349),
    r = n.n(i),
    s = n(17928),
    a = n(576705),
    o = n(927813),
    l = n(652215),
    u = n(375708);
function c(e, t, n) {
    return n.can(l.xBc.BYPASS_SLOWMODE, e);
}
function d(e, t) {
    return c(e, t, a.A);
}
function _(e, t) {
    return (0, s.bG)([a.A], () => c(e, t, a.A));
}
function f(e, t) {
    if (t) return u.intl.string(u.t["8+NidX"]);
    if (e >= o.A.Millis.HOUR) {
        let t = r().duration(e),
            n = `${t.minutes()}`.padStart(2, "0"),
            i = `${t.seconds()}`.padStart(2, "0");
        return `${t.hours()}:${n}:${i}`;
    }
    if (e > 0) {
        let t = r().duration(e),
            n = `${t.seconds()}`.padStart(2, "0");
        return `${t.minutes()}:${n}`;
    }
    return u.intl.string(u.t.Icu3bf);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (e >= o.A.Seconds.HOUR) {
        let n = Math.floor(e / o.A.Seconds.HOUR),
            i = Math.floor((e - n * o.A.Seconds.HOUR) / o.A.Seconds.MINUTE),
            r = e - n * o.A.Seconds.HOUR - i * o.A.Seconds.MINUTE;
        return u.intl.formatToPlainString(t ? u.t.oEwLez : u.t["3hz51F"], { hours: n, minutes: i, seconds: r });
    }
    if (!(e >= 60)) return u.intl.formatToPlainString(t ? u.t["9yE8Ga"] : u.t.IWntYg, { seconds: e });
    {
        let n = Math.floor(e / 60);
        return u.intl.formatToPlainString(t ? u.t.DARKYm : u.t.sY3wlG, { minutes: n, seconds: e - 60 * n });
    }
}
