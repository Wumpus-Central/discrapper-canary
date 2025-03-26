n.d(t, {
    Z: () => u,
    a: () => l
}),
    n(411104);
var r = n(774078),
    i = n(55935),
    o = n(960048),
    a = n(388032);
let s = 60000;
var l = (function (e) {
    return (e[(e.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (e[(e.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (e[(e.ENDS_IN = 2)] = 'ENDS_IN'), (e[(e.SHORT_TIME = 3)] = 'SHORT_TIME'), e;
})({});
function c(e) {
    return e.days > 0
        ? {
              days: e.days + 1,
              hours: 0,
              minutes: 0,
              seconds: 0
          }
        : e.hours > 11
          ? {
                days: 1,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
          : e.minutes > 45
            ? {
                  days: 0,
                  hours: 1,
                  minutes: 0,
                  seconds: 0
              }
            : e;
}
function u(e, t) {
    let n;
    switch (t) {
        case 0:
            n = {
                days: a.t['/wnvqK'],
                hours: a.t.Jsq0XF,
                minutes: a.t['SBd+Bg']
            };
            break;
        case 1:
            n = {
                days: a.t.UD5nn5,
                hours: a.t.Hg8FeX,
                minutes: a.t.XSbQZW
            };
            break;
        case 2:
            n = {
                days: a.t.rLqNaW,
                hours: a.t.d1LvCA,
                minutes: a.t.Z2LX7O
            };
            break;
        case 3:
            n = {
                days: a.t.fYmir6,
                hours: a.t['C3RO+v'],
                minutes: a.t.r77oHR
            };
            break;
        default:
            throw Error('Unknown messageType ('.concat(t, ') when rendering time left'));
    }
    let l = c((0, r.Z)(e.toDate(), s)),
        u = '';
    try {
        u = (0, i.QX)(l, n);
    } catch (e) {
        o.Z.captureMessage('Error trying to format string for fractional nitro duration pill');
    }
    return u;
}
