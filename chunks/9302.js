"use strict";
let r;
n.r(t),
    n.d(t, {
        DEV_PID: () => h,
        OVERLAY_DEFAULT_RESOLUTION: () => d,
        OVERLAY_LAYOUT_ID: () => f,
        OVERLAY_MIN_RESOLUTION: () => _,
        OVERLAY_VERSION: () => c,
        UNSET_PID: () => p,
        getPID: () => E,
        getRPCAuthToken: () => T,
        isValidGamePID: () => I,
        log: () => y,
        setOutOfProcessSupport: () => v,
        setPID: () => A,
        supportsLegacy: () => b,
        supportsOutOfProcess: () => C,
        validResolution: () => S,
    }),
    n(323874),
    n(14289),
    n(35956);
var i = n(719129),
    a = n(996308),
    s = n(206885),
    o = n(723702),
    l = n(837921),
    u = n(652215);
let c = 2,
    d = { width: 3840, height: 2160 },
    _ = { width: 768, height: 432 },
    f = "overlay_default",
    h = -2,
    p = -1,
    g = !1;
function E() {
    if (void 0 !== r && r !== p) return r;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return isNaN(e) && (e = p), (r = e);
}
function A(e) {
    r = e;
}
function I(e) {
    return null != e && 0 !== e && e !== p;
}
function T() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function y(e) {
    (0, a.tN)({ type: u.kGV.LOG_MESSAGES, pid: E(), token: T(), payload: e });
}
function S(e) {
    return !o.isPlatformEmbedded || (e.width >= _.width && e.height >= _.height);
}
function v(e) {
    g = e;
}
function C() {
    return g;
}
function b() {
    let e = (0, o.isWindows)() && "arm64" === l.Ay.architecture;
    return s.O && !e && !(0, i.Zi)();
}
