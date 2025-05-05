n.d(t, {
    ZP: () => u,
    aj: () => l,
    eB: () => c
}),
    n(415506);
var r = n(774078),
    i = n(55935),
    o = n(960048),
    a = n(388032);
let s = 60000;
var l = (function (e) {
    return (e[(e.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (e[(e.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (e[(e.ENDS_IN = 2)] = 'ENDS_IN'), (e[(e.SHORT_TIME = 3)] = 'SHORT_TIME'), (e[(e.CREDITS_ENDS_IN = 4)] = 'CREDITS_ENDS_IN'), e;
})({});
function c(e) {
    if (e.days > 0)
        return {
            days: e.hours > 0 ? e.days + 1 : e.days,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    if (e.hours > 0) {
        let t = e.minutes > 45 ? e.hours + 1 : e.hours;
        return t > 11
            ? {
                  days: 1,
                  hours: 0,
                  minutes: 0,
                  seconds: 0
              }
            : {
                  days: 0,
                  hours: t,
                  minutes: 0,
                  seconds: 0
              };
    }
    if (e.minutes > 0) {
        let t = +(e.minutes > 45),
            n = 1 === t ? 0 : e.minutes;
        return {
            days: 0,
            hours: t,
            minutes: n,
            seconds: 0
        };
    }
    return e.seconds > 0
        ? {
              days: 0,
              hours: 0,
              minutes: 1,
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
        case 4:
            n = {
                days: a.t.xQ3zuL,
                hours: a.t.SFU7QE,
                minutes: a.t.Y4FNdH
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
