s.d(t, { Z: () => a });
var r = s(774078),
    n = s(706454),
    i = s(55935),
    o = s(388032);
function l(e) {
    return e.toLocaleString(n.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let a = function (e) {
    let { endDate: t } = e,
        s = Date.now(),
        n = (0, i.TD)(s, t),
        a = s > t.getTime(),
        c = n.days > 0 ? 3600000 : 1000,
        u = (0, r.Z)(t, c, void 0, a);
    return a || Object.values(u).every((e) => 0 === e)
        ? null
        : u.days > 0
          ? o.NW.formatToPlainString(o.t.f0QaSU, { days: u.days })
          : o.NW.formatToPlainString(o.t['3MT4MT'], {
                hours: l(u.hours),
                minutes: l(u.minutes),
                seconds: l(u.seconds)
            });
};
