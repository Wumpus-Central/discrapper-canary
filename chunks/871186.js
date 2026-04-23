"use strict";
n.d(t, {
    Cp: () => u,
    Dp: () => S,
    J0: () => x,
    J5: () => I,
    NA: () => _,
    Ol: () => E,
    Q: () => v,
    SA: () => k,
    VN: () => w,
    Wt: () => g,
    bX: () => b,
    cx: () => f,
    gV: () => y,
    ky: () => C,
    l7: () => m,
    o: () => h,
    r: () => p,
    wd: () => d,
});
var r = n(922248),
    i = n(630449),
    o = n(326447),
    a = n(680753),
    s = n(272469),
    l = n(978862),
    c = n(689456);
function u(e, t) {
    return (0, i.o5)().captureException(e, (0, c.li)(t));
}
function d(e, t) {
    let n = "string" == typeof t ? t : void 0,
        r = "string" != typeof t ? { captureContext: t } : void 0;
    return (0, i.o5)().captureMessage(e, n, r);
}
function p(e, t) {
    return (0, i.o5)().captureEvent(e, t);
}
function h(e, t) {
    (0, i.rm)().setContext(e, t);
}
function f(e) {
    (0, i.rm)().setExtras(e);
}
function m(e, t) {
    (0, i.rm)().setExtra(e, t);
}
function g(e) {
    (0, i.rm)().setTags(e);
}
function _(e, t) {
    (0, i.rm)().setTag(e, t);
}
function y(e) {
    (0, i.rm)().setUser(e);
}
function v() {
    return (0, i.rm)().lastEventId();
}
async function b(e) {
    let t = (0, i.KU)();
    return t ? t.flush(e) : (o.T && s.vF.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
}
async function w(e) {
    let t = (0, i.KU)();
    return t
        ? t.close(e)
        : (o.T && s.vF.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1));
}
function S() {
    return !!(0, i.KU)();
}
function E() {
    let e = (0, i.KU)();
    return !!e && !1 !== e.getOptions().enabled && !!e.getTransport();
}
function k(e) {
    (0, i.rm)().addEventProcessor(e);
}
function x(e) {
    let t = (0, i.KU)(),
        n = (0, i.rm)(),
        o = (0, i.o5)(),
        { release: s, environment: c = r.U } = (t && t.getOptions()) || {},
        { userAgent: u } = l.O.navigator || {},
        d = (0, a.fj)({
            release: s,
            environment: c,
            user: o.getUser() || n.getUser(),
            ...(u && { userAgent: u }),
            ...e,
        }),
        p = n.getSession();
    return p && "ok" === p.status && (0, a.qO)(p, { status: "exited" }), C(), n.setSession(d), o.setSession(d), d;
}
function C() {
    let e = (0, i.rm)(),
        t = (0, i.o5)(),
        n = t.getSession() || e.getSession();
    n && (0, a.Vu)(n), T(), e.setSession(), t.setSession();
}
function T() {
    let e = (0, i.rm)(),
        t = (0, i.o5)(),
        n = (0, i.KU)(),
        r = t.getSession() || e.getSession();
    r && n && n.captureSession(r);
}
function I(e = !1) {
    e ? C() : T();
}
