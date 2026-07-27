"use strict";
n.d(t, { F3: () => u, VI: () => A, _i: () => _, pS: () => E });
var i = n(989349),
    r = n.n(i),
    a = n(17928),
    s = n(576705),
    l = n(927813),
    o = n(652215),
    d = n(375708);
function c(e, t) {
    return t.can(o.xBc.BYPASS_SLOWMODE, e);
}
function u(e) {
    return c(e, s.A);
}
function _(e) {
    return (0, a.bG)([s.A], () => c(e, s.A));
}
function E(e, t) {
    if (t) return d.intl.string(d.t["8+NidX"]);
    if (e >= l.A.Millis.HOUR) {
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
    return d.intl.string(d.t.Icu3bf);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (e >= l.A.Seconds.HOUR) {
        let n = Math.floor(e / l.A.Seconds.HOUR),
            i = Math.floor((e - n * l.A.Seconds.HOUR) / l.A.Seconds.MINUTE),
            r = e - n * l.A.Seconds.HOUR - i * l.A.Seconds.MINUTE;
        return d.intl.formatToPlainString(t ? d.t.oEwLez : d.t["3hz51F"], { hours: n, minutes: i, seconds: r });
    }
    if (!(e >= 60)) return d.intl.formatToPlainString(t ? d.t["9yE8Ga"] : d.t.IWntYg, { seconds: e });
    {
        let n = Math.floor(e / 60);
        return d.intl.formatToPlainString(t ? d.t.DARKYm : d.t.sY3wlG, { minutes: n, seconds: e - 60 * n });
    }
}
