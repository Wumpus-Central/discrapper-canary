n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(774078),
    a = n(706454),
    s = n(55935),
    l = n(388032);
function o(e) {
    return e.toLocaleString(a.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let c = function (e) {
    let { endDate: t } = e,
        n = Date.now(),
        a = (0, s.TD)(n, t),
        c = n > t.getTime(),
        d = a.days > 0 ? 3600000 : 1000,
        u = (0, r.Z)(t, d, void 0, c);
    return c || Object.values(u).every((e) => 0 === e)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children:
                  u.days > 0
                      ? l.intl.formatToPlainString(l.t.f0QaSU, { days: u.days })
                      : l.intl.formatToPlainString(l.t['3MT4MT'], {
                            hours: o(u.hours),
                            minutes: o(u.minutes),
                            seconds: o(u.seconds)
                        })
          });
};
