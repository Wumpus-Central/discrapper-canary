(n.d(t, {
    ZP: () => _,
    aj: () => u,
    eB: () => d
}),
    n(415506));
var r = n(774078),
    i = n(55935),
    a = n(960048),
    o = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
    }
    return e;
}
let c = 60000;
var u = (function (e) {
    return ((e[(e.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (e[(e.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (e[(e.ENDS_IN = 2)] = 'ENDS_IN'), (e[(e.SHORT_TIME = 3)] = 'SHORT_TIME'), (e[(e.CREDITS_ENDS_IN = 4)] = 'CREDITS_ENDS_IN'), e);
})({});
function d(e) {
    let t = l({}, e);
    if ((t.seconds > 0 && ((t.minutes = t.minutes + 1), (t.seconds = 0)), 60 === t.minutes && ((t.hours = t.hours + 1), (t.minutes = 0)), 24 === t.hours && ((t.days = t.days + 1), (t.hours = 0)), t.days > 0))
        return {
            days: t.hours > 0 ? t.days + 1 : t.days,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    if (t.hours > 0) {
        let e = t.minutes > 45 ? t.hours + 1 : t.hours;
        return e > 11
            ? {
                  days: 1,
                  hours: 0,
                  minutes: 0,
                  seconds: 0
              }
            : {
                  days: 0,
                  hours: e,
                  minutes: 0,
                  seconds: 0
              };
    }
    if (t.minutes > 0) {
        let e = +(t.minutes > 45),
            n = 1 === e ? 0 : t.minutes;
        return {
            days: 0,
            hours: e,
            minutes: n,
            seconds: 0
        };
    }
    return t.seconds > 0
        ? {
              days: 0,
              hours: 0,
              minutes: 1,
              seconds: 0
          }
        : t;
}
function _(e, t) {
    let n;
    switch (t) {
        case 0:
            n = {
                days: o.t['/wnvqK'],
                hours: o.t.Jsq0XF,
                minutes: o.t['SBd+Bg']
            };
            break;
        case 1:
            n = {
                days: o.t.UD5nn5,
                hours: o.t.Hg8FeX,
                minutes: o.t.XSbQZW
            };
            break;
        case 2:
            n = {
                days: o.t.rLqNaW,
                hours: o.t.d1LvCA,
                minutes: o.t.Z2LX7O
            };
            break;
        case 4:
            n = {
                days: o.t.xQ3zuL,
                hours: o.t.SFU7QE,
                minutes: o.t.Y4FNdH
            };
            break;
        case 3:
            n = {
                days: o.t.fYmir6,
                hours: o.t['C3RO+v'],
                minutes: o.t.r77oHR
            };
            break;
        default:
            throw Error('Unknown messageType ('.concat(t, ') when rendering time left'));
    }
    let s = d((0, r.Z)(e.toDate(), c)),
        l = '';
    try {
        l = (0, i.QX)(s, n);
    } catch (e) {
        a.Z.captureMessage('Error trying to format string for fractional nitro duration pill');
    }
    return l;
}
