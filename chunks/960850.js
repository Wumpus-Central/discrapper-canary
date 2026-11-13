var i = n(536637),
    r = n.n(i),
    a = n(855986),
    s = n(576705),
    l = n(927813),
    o = n(652215),
    d = n(792996);
function c(e, t) {
    return t.can(o.xBc.BYPASS_SLOWMODE, e);
}
n.d(
    t,
    {},
    {
        F3: function (e) {
            return c(e, s.A);
        },
        VI: function (e) {
            let t,
                n,
                i,
                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                {
                    hours: a,
                    minutes: s,
                    seconds: o,
                } = ((t = Math.floor(e / l.A.Seconds.HOUR)),
                (n = Math.floor((e - t * l.A.Seconds.HOUR) / l.A.Seconds.MINUTE)),
                (i = e - t * l.A.Seconds.HOUR - n * l.A.Seconds.MINUTE),
                { hours: t, minutes: n, seconds: i });
            return a > 0
                ? d.intl.formatToPlainString(r ? d.t.oEwLez : d.t["3hz51F"], { hours: a, minutes: s, seconds: o })
                : s > 0
                  ? d.intl.formatToPlainString(r ? d.t.DARKYm : d.t.sY3wlG, { minutes: s, seconds: o })
                  : d.intl.formatToPlainString(r ? d.t["9yE8Ga"] : d.t.IWntYg, { seconds: e });
        },
        _i: function (e) {
            return (0, a.bG)([s.A], () => c(e, s.A));
        },
        js: c,
        pS: function (e, t) {
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
        },
    },
);
