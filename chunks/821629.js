n.d(t, { Z: () => o });
var i = n(774078),
    r = n(706454),
    s = n(55935),
    l = n(388032);
function a(e) {
    return e.toLocaleString(r.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let o = function (e) {
    let { endDate: t } = e,
        n = Date.now(),
        r = (0, s.TD)(n, t),
        o = n > t.getTime(),
        c = r.days > 0 ? 3600000 : 1000,
        d = (0, i.Z)(t, c, void 0, o);
    return o || Object.values(d).every((e) => 0 === e)
        ? null
        : d.days > 0
          ? l.intl.formatToPlainString(l.t.f0QaSU, { days: d.days })
          : l.intl.formatToPlainString(l.t['3MT4MT'], {
                hours: a(d.hours),
                minutes: a(d.minutes),
                seconds: a(d.seconds)
            });
};
