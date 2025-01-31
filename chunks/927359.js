n.d(t, {
    Z: () => l,
    a: () => o
}),
    n(411104);
var i = n(774078),
    r = n(55935),
    a = n(388032);
let s = 60000;
var o = (function (e) {
    return (e[(e.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (e[(e.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (e[(e.ENDS_IN = 2)] = 'ENDS_IN'), (e[(e.SHORT_TIME = 3)] = 'SHORT_TIME'), e;
})({});
function l(e, t) {
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
    let o = (0, i.Z)(e.toDate(), s);
    return (0, r.QX)(o, n);
}
