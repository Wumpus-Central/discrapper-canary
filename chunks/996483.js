"use strict";
n.d(t, {
    AV: () => d,
    A_: () => _,
    Bm: () => m,
    Ec: () => o,
    F1: () => g,
    Jp: () => p,
    Z6: () => h,
    ZB: () => E,
    jI: () => l,
    tB: () => s,
    ti: () => c,
    uf: () => u,
    zW: () => A,
    zr: () => f,
});
var r = n(374372),
    i = n(658809),
    a = n(322811);
function s(e) {
    let t = e.getDateWithAdjustedTimezone(),
        n = new r.BP(e, {});
    return (
        (0, i.Pl)(n, t),
        (0, i.i2)(n, t),
        n.assign("timezoneOffset", e.getTimezoneOffset()),
        n.addTag("casualReference/now"),
        n
    );
}
function o(e) {
    let t = e.getDateWithAdjustedTimezone(),
        n = new r.BP(e, {});
    return (0, i.Pl)(n, t), (0, i.A4)(n, t), n.delete("meridiem"), n.addTag("casualReference/today"), n;
}
function l(e) {
    return c(e, 1).addTag("casualReference/yesterday");
}
function u(e) {
    return d(e, 1).addTag("casualReference/tomorrow");
}
function c(e, t) {
    return d(e, -t);
}
function d(e, t) {
    let n = e.getDateWithAdjustedTimezone(),
        a = new r.BP(e, {}),
        s = new Date(n.getTime());
    return s.setDate(s.getDate() + t), (0, i.Pl)(a, s), (0, i.A4)(a, s), a.delete("meridiem"), a;
}
function _(e, t = 22) {
    let n = e.getDateWithAdjustedTimezone(),
        s = new r.BP(e, {});
    return (0, i.Pl)(s, n), s.imply("hour", t), s.imply("meridiem", a.FF.PM), s.addTag("casualReference/tonight"), s;
}
function f(e, t = 0) {
    let n = e.getDateWithAdjustedTimezone(),
        a = new r.BP(e, {});
    return 6 > n.getHours() && (n = new Date(n.getTime() - 864e5)), (0, i.Pl)(a, n), a.imply("hour", t), a;
}
function p(e, t = 20) {
    let n = new r.BP(e, {});
    return n.imply("meridiem", a.FF.PM), n.imply("hour", t), n.addTag("casualReference/evening"), n;
}
function h(e, t = 20) {
    let n = e.getDateWithAdjustedTimezone(),
        s = new r.BP(e, {});
    return (
        (n = new Date(n.getTime() - 864e5)),
        (0, i.Pl)(s, n),
        s.imply("hour", t),
        s.imply("meridiem", a.FF.PM),
        s.addTag("casualReference/yesterday"),
        s.addTag("casualReference/evening"),
        s
    );
}
function m(e) {
    let t = new r.BP(e, {});
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
function g(e, t = 6) {
    let n = new r.BP(e, {});
    return (
        n.imply("meridiem", a.FF.AM),
        n.imply("hour", t),
        n.imply("minute", 0),
        n.imply("second", 0),
        n.imply("millisecond", 0),
        n.addTag("casualReference/morning"),
        n
    );
}
function E(e, t = 15) {
    let n = new r.BP(e, {});
    return (
        n.imply("meridiem", a.FF.PM),
        n.imply("hour", t),
        n.imply("minute", 0),
        n.imply("second", 0),
        n.imply("millisecond", 0),
        n.addTag("casualReference/afternoon"),
        n
    );
}
function A(e) {
    let t = new r.BP(e, {});
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
