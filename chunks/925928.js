n.d(t, {
    ZP: () => p,
    Zk: () => f,
    d0: () => d
});
var i = n(913527),
    r = n.n(i),
    a = n(388032);
let s = 60,
    o = 3600,
    l = 86400,
    u = 2592000,
    c = 31104000,
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
        i = n(),
        r = '';
    return t < s ? a.intl.formatToPlainString(i.minutes, { minutes: 1 }) : t < o ? a.intl.formatToPlainString(i.minutes, { minutes: Math.floor(t / s) }) : t < l ? a.intl.formatToPlainString(i.hours, { hours: Math.floor(t / o) }) : t < u ? a.intl.formatToPlainString(i.days, { days: Math.floor(t / l) }) : t < c ? a.intl.formatToPlainString(i.months, { months: Math.floor(t / u) }) : a.intl.formatToPlainString(i.years, { years: Math.floor(t / c) });
}
function p(e) {
    let { since: t, getFormatter: n } = e;
    return _({
        seconds: r()().diff(r()(t), 's'),
        getFormatter: n
    });
}
