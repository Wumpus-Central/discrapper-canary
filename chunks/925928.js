r.d(n, {
    ZP: function () {
        return _;
    },
    Zk: function () {
        return p;
    },
    d0: function () {
        return f;
    }
});
var i = r(913527),
    a = r.n(i),
    o = r(388032);
let s = 60,
    l = 3600,
    u = 86400,
    c = 2592000,
    d = 31104000,
    f = () => ({
        minutes: o.t['XIGt+f'],
        hours: o.t.rhY1Rk,
        days: o.t.GBLpQ0,
        months: o.t.XzBNbW,
        years: o.t.I1E8p6
    }),
    p = () => ({
        minutes: o.t['GqQ/Y2'],
        hours: o.t.c5zfWV,
        days: o.t.amjnaG,
        months: o.t.SoON3d,
        years: o.t['12B3RU']
    });
function h(e) {
    let { seconds: n, getFormatter: r } = e,
        i = r(),
        a = '';
    return (a = n < s ? o.intl.formatToPlainString(i.minutes, { minutes: 1 }) : n < l ? o.intl.formatToPlainString(i.minutes, { minutes: Math.floor(n / s) }) : n < u ? o.intl.formatToPlainString(i.hours, { hours: Math.floor(n / l) }) : n < c ? o.intl.formatToPlainString(i.days, { days: Math.floor(n / u) }) : n < d ? o.intl.formatToPlainString(i.months, { months: Math.floor(n / c) }) : o.intl.formatToPlainString(i.years, { years: Math.floor(n / d) }));
}
function _(e) {
    let { since: n, getFormatter: r } = e;
    return h({
        seconds: a()().diff(a()(n), 's'),
        getFormatter: r
    });
}
