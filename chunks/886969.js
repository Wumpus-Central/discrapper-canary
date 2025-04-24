n.d(t, { Z: () => s });
var r = n(774078);
let i = 60000,
    a = 1200000;
function o(e) {
    return e.minutes > 0 || e.seconds > 0
        ? 23 === e.hours
            ? {
                  days: e.days + 1,
                  hours: 0,
                  minutes: 0,
                  seconds: 0
              }
            : {
                  days: e.days,
                  hours: e.hours + 1,
                  minutes: 0,
                  seconds: 0
              }
        : e;
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.clone();
    return t && (n = n.subtract(a, 'milliseconds')), o((0, r.Z)(n.toDate(), i));
}
