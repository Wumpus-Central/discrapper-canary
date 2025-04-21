r.d(t, { Z: () => a });
var n = r(774078),
    i = r(706454),
    s = r(55935),
    o = r(388032);
function l(e) {
    return e.toLocaleString(i.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let a = function (e) {
    let { endDate: t } = e,
        r = Date.now(),
        i = (0, s.TD)(r, t),
        a = r > t.getTime(),
        c = i.days > 0 ? 3600000 : 1000,
        h = (0, n.Z)(t, c, void 0, a);
    return a || Object.values(h).every((e) => 0 === e)
        ? null
        : h.days > 0
          ? o.intl.formatToPlainString(o.t.f0QaSU, { days: h.days })
          : o.intl.formatToPlainString(o.t['3MT4MT'], {
                hours: l(h.hours),
                minutes: l(h.minutes),
                seconds: l(h.seconds)
            });
};
