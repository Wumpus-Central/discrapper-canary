"use strict";
let i;
n.r(t),
    n.d(t, {
        DEV_PID: () => A,
        OVERLAY_DEFAULT_RESOLUTION: () => u,
        OVERLAY_LAYOUT_ID: () => E,
        OVERLAY_MIN_RESOLUTION: () => _,
        OVERLAY_VERSION: () => c,
        UNSET_PID: () => h,
        getPID: () => f,
        getRPCAuthToken: () => m,
        isValidGamePID: () => T,
        log: () => g,
        setOutOfProcessSupport: () => N,
        setPID: () => p,
        supportsLegacy: () => O,
        supportsOutOfProcess: () => C,
        validResolution: () => S,
    }),
    n(323874),
    n(14289),
    n(35956);
var r = n(719129),
    a = n(996308),
    s = n(206885),
    l = n(723702),
    o = n(19575),
    d = n(652215);
let c = 2,
    u = { width: 3840, height: 2160 },
    _ = { width: 768, height: 432 },
    E = "overlay_default",
    A = -2,
    h = -1,
    I = !1;
function f() {
    if (void 0 !== i && i !== h) return i;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return isNaN(e) && (e = h), (i = e);
}
function p(e) {
    i = e;
}
function T(e) {
    return null != e && 0 !== e && e !== h;
}
function m() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function g(e) {
    (0, a.tN)({ type: d.kGV.LOG_MESSAGES, pid: f(), token: m(), payload: e });
}
function S(e) {
    return !l.isPlatformEmbedded || (e.width >= _.width && e.height >= _.height);
}
function N(e) {
    I = e;
}
function C() {
    return I;
}
function O() {
    let e = (0, l.isWindows)() && "arm64" === o.Ay.architecture;
    return s.O && !e && !(0, r.Zi)();
}
