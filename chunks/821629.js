n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(774078),
    s = n(706454),
    a = n(55935),
    l = n(388032);
function o(e) {
    return e.toLocaleString(s.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let c = function (e) {
    let { endDate: t } = e,
        n = Date.now(),
        s = (0, a.TD)(n, t),
        c = n > t.getTime(),
        d = s.days > 0 ? 3600000 : 1000,
        u = (0, i.Z)(t, d, void 0, c);
    return c || Object.values(u).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(r.Fragment, {
              children:
                  u.days > 0
                      ? l.NW.formatToPlainString(l.t.f0QaSU, { days: u.days })
                      : l.NW.formatToPlainString(l.t['3MT4MT'], {
                            hours: o(u.hours),
                            minutes: o(u.minutes),
                            seconds: o(u.seconds)
                        })
          });
};
