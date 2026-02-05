"use strict";
let r;
n.r(t),
    n.d(t, {
        DEV_PID: () => p,
        OVERLAY_DEFAULT_RESOLUTION: () => d,
        OVERLAY_LAYOUT_ID: () => f,
        OVERLAY_MIN_RESOLUTION: () => _,
        OVERLAY_VERSION: () => c,
        UNSET_PID: () => h,
        getPID: () => g,
        getRPCAuthToken: () => I,
        isValidGamePID: () => A,
        log: () => T,
        setOutOfProcessSupport: () => S,
        setPID: () => E,
        supportsLegacy: () => C,
        supportsOutOfProcess: () => v,
        validResolution: () => y,
    }),
    n(323874),
    n(14289),
    n(35956);
var i = n(719129),
    a = n(996308),
    s = n(723702),
    o = n(837921),
    l = n(652215),
    u = n(672396);
let c = 2,
    d = { width: 3840, height: 2160 },
    _ = { width: 768, height: 432 },
    f = "overlay_default",
    p = -2,
    h = -1,
    m = !1;
function g() {
    if (void 0 !== r && r !== h) return r;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return isNaN(e) && (e = h), (r = e);
}
function E(e) {
    r = e;
}
function A(e) {
    return null != e && 0 !== e && e !== h;
}
function I() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function T(e) {
    (0, a.tN)({ type: l.kGV.LOG_MESSAGES, pid: g(), token: I(), payload: e });
}
function y(e) {
    return !s.isPlatformEmbedded || (e.width >= _.width && e.height >= _.height);
}
function S(e) {
    m = e;
}
function v() {
    return m;
}
function C() {
    let e = (0, s.isWindows)() && "arm64" === o.Ay.architecture;
    return u.OX && !e && !(0, i.Zi)();
}
