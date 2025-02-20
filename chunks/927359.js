n.d(t, {
    Z: () => l,
    a: () => s
}),
    n(411104);
var r = n(774078),
    i = n(55935),
    o = n(388032);
let a = 60000;
var s = (function (e) {
    return (e[(e.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (e[(e.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (e[(e.ENDS_IN = 2)] = 'ENDS_IN'), (e[(e.SHORT_TIME = 3)] = 'SHORT_TIME'), e;
})({});
function l(e, t) {
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
    let s = (0, r.Z)(e.toDate(), a);
    return (0, i.QX)(s, n);
}
