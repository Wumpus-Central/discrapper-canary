n.d(t, { Z: () => a });
var r = n(774078),
    i = n(706454),
    s = n(55935),
    o = n(388032);
function l(e) {
    return e.toLocaleString(i.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let a = function (e) {
    let { endDate: t } = e,
        n = Date.now(),
        i = (0, s.TD)(n, t),
        a = n > t.getTime(),
        c = i.days > 0 ? 3600000 : 1000,
        u = (0, r.Z)(t, c, void 0, a);
    return a || Object.values(u).every((e) => 0 === e)
        ? null
        : u.days > 0
          ? o.intl.formatToPlainString(o.t.f0QaSU, { days: u.days })
          : o.intl.formatToPlainString(o.t['3MT4MT'], {
                hours: l(u.hours),
                minutes: l(u.minutes),
                seconds: l(u.seconds)
            });
};
