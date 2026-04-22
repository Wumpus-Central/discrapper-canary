r.d(t, {
    AV: () => m,
    A_: () => c,
    Bm: () => p,
    Ec: () => o,
    F1: () => y,
    Jp: () => h,
    Z6: () => f,
    ZB: () => x,
    jI: () => l,
    tB: () => i,
    ti: () => d,
    uf: () => u,
    zW: () => w,
    zr: () => g,
});
var n = r(374372),
    s = r(881190),
    a = r(322811);
function i(e) {
    let t = e.getDateWithAdjustedTimezone(),
        r = new n.BP(e, {});
    return (
        (0, s.Pl)(r, t),
        (0, s.i2)(r, t),
        r.assign("timezoneOffset", e.getTimezoneOffset()),
        r.addTag("casualReference/now"),
        r
    );
}
function o(e) {
    let t = e.getDateWithAdjustedTimezone(),
        r = new n.BP(e, {});
    return (0, s.Pl)(r, t), (0, s.A4)(r, t), r.delete("meridiem"), r.addTag("casualReference/today"), r;
}
function l(e) {
    return d(e, 1).addTag("casualReference/yesterday");
}
function u(e) {
    return m(e, 1).addTag("casualReference/tomorrow");
}
function d(e, t) {
    return m(e, -t);
}
function m(e, t) {
    let r = e.getDateWithAdjustedTimezone(),
        a = new n.BP(e, {}),
        i = new Date(r.getTime());
    return i.setDate(i.getDate() + t), (0, s.Pl)(a, i), (0, s.A4)(a, i), a.delete("meridiem"), a;
}
function c(e, t = 22) {
    let r = e.getDateWithAdjustedTimezone(),
        i = new n.BP(e, {});
    return (0, s.Pl)(i, r), i.imply("hour", t), i.imply("meridiem", a.FF.PM), i.addTag("casualReference/tonight"), i;
}
function g(e, t = 0) {
    let r = e.getDateWithAdjustedTimezone(),
        a = new n.BP(e, {});
    return 6 > r.getHours() && (r = new Date(r.getTime() - 864e5)), (0, s.Pl)(a, r), a.imply("hour", t), a;
}
function h(e, t = 20) {
    let r = new n.BP(e, {});
    return r.imply("meridiem", a.FF.PM), r.imply("hour", t), r.addTag("casualReference/evening"), r;
}
function f(e, t = 20) {
    let r = e.getDateWithAdjustedTimezone(),
        i = new n.BP(e, {});
    return (
        (r = new Date(r.getTime() - 864e5)),
        (0, s.Pl)(i, r),
        i.imply("hour", t),
        i.imply("meridiem", a.FF.PM),
        i.addTag("casualReference/yesterday"),
        i.addTag("casualReference/evening"),
        i
    );
}
function p(e) {
    let t = new n.BP(e, {});
    return (
        e.getDateWithAdjustedTimezone().getHours() > 2 && t.addDurationAsImplied({ day: 1 }),
        t.assign("hour", 0),
        t.imply("minute", 0),
        t.imply("second", 0),
        t.imply("millisecond", 0),
        t.addTag("casualReference/midnight"),
        t
    );
}
function y(e, t = 6) {
    let r = new n.BP(e, {});
    return (
        r.imply("meridiem", a.FF.AM),
        r.imply("hour", t),
        r.imply("minute", 0),
        r.imply("second", 0),
        r.imply("millisecond", 0),
        r.addTag("casualReference/morning"),
        r
    );
}
function x(e, t = 15) {
    let r = new n.BP(e, {});
    return (
        r.imply("meridiem", a.FF.PM),
        r.imply("hour", t),
        r.imply("minute", 0),
        r.imply("second", 0),
        r.imply("millisecond", 0),
        r.addTag("casualReference/afternoon"),
        r
    );
}
function w(e) {
    let t = new n.BP(e, {});
    return (
        t.imply("meridiem", a.FF.AM),
        t.assign("hour", 12),
        t.imply("minute", 0),
        t.imply("second", 0),
        t.imply("millisecond", 0),
        t.addTag("casualReference/noon"),
        t
    );
}
