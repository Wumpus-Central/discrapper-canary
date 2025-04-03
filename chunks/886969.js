n.d(t, { Z: () => a });
var r = n(774078);
let i = 60000;
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
function a(e) {
    return o((0, r.Z)(e.toDate(), i));
}
