n.d(t, {
    ZP: () => p,
    Zk: () => f,
    d0: () => d
});
var r = n(913527),
    i = n.n(r),
    a = n(388032);
let o = 60,
    s = 3600,
    l = 86400,
    c = 2592000,
    u = 31104000,
    d = () => ({
        minutes: a.t['XIGt+f'],
        hours: a.t.rhY1Rk,
        days: a.t.GBLpQ0,
        months: a.t.XzBNbW,
        years: a.t.I1E8p6
    }),
    f = () => ({
        minutes: a.t['GqQ/Y2'],
        hours: a.t.c5zfWV,
        days: a.t.amjnaG,
        months: a.t.SoON3d,
        years: a.t['12B3RU']
    });
function _(e) {
    let { seconds: t, getFormatter: n } = e,
        r = n(),
        i = '';
    return t < o ? a.intl.formatToPlainString(r.minutes, { minutes: 1 }) : t < s ? a.intl.formatToPlainString(r.minutes, { minutes: Math.floor(t / o) }) : t < l ? a.intl.formatToPlainString(r.hours, { hours: Math.floor(t / s) }) : t < c ? a.intl.formatToPlainString(r.days, { days: Math.floor(t / l) }) : t < u ? a.intl.formatToPlainString(r.months, { months: Math.floor(t / c) }) : a.intl.formatToPlainString(r.years, { years: Math.floor(t / u) });
}
function p(e) {
    let { since: t, getFormatter: n } = e;
    return _({
        seconds: i()().diff(i()(t), 's'),
        getFormatter: n
    });
}
