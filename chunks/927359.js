r.d(n, {
    Z: function () {
        return c;
    },
    a: function () {
        return i;
    }
});
var i,
    a = r(411104);
var o = r(774078),
    s = r(55935),
    l = r(388032);
let u = 60000;
function c(e, n) {
    let r;
    switch (n) {
        case 0:
            r = {
                days: l.t['/wnvqK'],
                hours: l.t.Jsq0XF,
                minutes: l.t['SBd+Bg']
            };
            break;
        case 1:
            r = {
                days: l.t.UD5nn5,
                hours: l.t.Hg8FeX,
                minutes: l.t.XSbQZW
            };
            break;
        case 2:
            r = {
                days: l.t.rLqNaW,
                hours: l.t.d1LvCA,
                minutes: l.t.Z2LX7O
            };
            break;
        case 3:
            r = {
                days: l.t.fYmir6,
                hours: l.t['C3RO+v'],
                minutes: l.t.r77oHR
            };
            break;
        default:
            throw Error('Unknown messageType ('.concat(n, ') when rendering time left'));
    }
    let i = (0, o.Z)(e.toDate(), u);
    return (0, s.QX)(i, r);
}
!(function (e) {
    (e[(e.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (e[(e.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (e[(e.ENDS_IN = 2)] = 'ENDS_IN'), (e[(e.SHORT_TIME = 3)] = 'SHORT_TIME');
})(i || (i = {}));
