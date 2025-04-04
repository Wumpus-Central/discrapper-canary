n.d(t, {
    ZP: () => p,
    Zk: () => f,
    d0: () => d
});
var r = n(913527),
    i = n.n(r),
    o = n(388032);
let a = 60,
    s = 3600,
    l = 86400,
    c = 2592000,
    u = 31104000,
    d = () => ({
        minutes: o.t['XIGt+f'],
        hours: o.t.rhY1Rk,
        days: o.t.GBLpQ0,
        months: o.t.XzBNbW,
        years: o.t.I1E8p6
    }),
    f = () => ({
        minutes: o.t['GqQ/Y2'],
        hours: o.t.c5zfWV,
        days: o.t.amjnaG,
        months: o.t.SoON3d,
        years: o.t['12B3RU']
    });
function _(e) {
    let { seconds: t, getFormatter: n } = e,
        r = n(),
        i = '';
    return t < a ? o.NW.formatToPlainString(r.minutes, { minutes: 1 }) : t < s ? o.NW.formatToPlainString(r.minutes, { minutes: Math.floor(t / a) }) : t < l ? o.NW.formatToPlainString(r.hours, { hours: Math.floor(t / s) }) : t < c ? o.NW.formatToPlainString(r.days, { days: Math.floor(t / l) }) : t < u ? o.NW.formatToPlainString(r.months, { months: Math.floor(t / c) }) : o.NW.formatToPlainString(r.years, { years: Math.floor(t / u) });
}
function p(e) {
    let { since: t, getFormatter: n } = e;
    return _({
        seconds: i()().diff(i()(t), 's'),
        getFormatter: n
    });
}
