n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var s = n(774078),
    r = n(706454),
    l = n(55935),
    a = n(388032);
function o(e) {
    return e.toLocaleString(r.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let c = function (e) {
    let { endDate: t } = e,
        n = Date.now(),
        r = (0, l.TD)(n, t),
        c = n > t.getTime(),
        d = r.days > 0 ? 3600000 : 1000,
        u = (0, s.Z)(t, d, void 0, c);
    return c || Object.values(u).every((e) => 0 === e)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children:
                  u.days > 0
                      ? a.intl.formatToPlainString(a.t.f0QaSU, { days: u.days })
                      : a.intl.formatToPlainString(a.t['3MT4MT'], {
                            hours: o(u.hours),
                            minutes: o(u.minutes),
                            seconds: o(u.seconds)
                        })
          });
};
