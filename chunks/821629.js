r.d(t, { Z: () => a });
var n = r(774078),
    s = r(706454),
    i = r(55935),
    o = r(388032);
function l(e) {
    return e.toLocaleString(s.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let a = function (e) {
    let { endDate: t } = e,
        r = Date.now(),
        s = (0, i.TD)(r, t),
        a = r > t.getTime(),
        c = s.days > 0 ? 3600000 : 1000,
        u = (0, n.Z)(t, c, void 0, a);
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
