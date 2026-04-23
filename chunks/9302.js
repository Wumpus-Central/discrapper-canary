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
        getPID: () => m,
        getRPCAuthToken: () => I,
        isValidGamePID: () => A,
        log: () => T,
        setOutOfProcessSupport: () => y,
        setPID: () => g,
        supportsLegacy: () => v,
        supportsOutOfProcess: () => N,
        validResolution: () => S,
    }),
    n(323874),
    n(14289),
    n(35956);
var i = n(719129),
    s = n(996308),
    a = n(206885),
    o = n(723702),
    l = n(837921),
    u = n(652215);
let c = 2,
    d = { width: 3840, height: 2160 },
    _ = { width: 768, height: 432 },
    f = "overlay_default",
    p = -2,
    h = -1,
    E = !1;
function m() {
    if (void 0 !== r && r !== h) return r;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return isNaN(e) && (e = h), (r = e);
}
function g(e) {
    r = e;
}
function A(e) {
    return null != e && 0 !== e && e !== h;
}
function I() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function T(e) {
    (0, s.tN)({ type: u.kGV.LOG_MESSAGES, pid: m(), token: I(), payload: e });
}
function S(e) {
    return !o.isPlatformEmbedded || (e.width >= _.width && e.height >= _.height);
}
function y(e) {
    E = e;
}
function N() {
    return E;
}
function v() {
    let e = (0, o.isWindows)() && "arm64" === l.Ay.architecture;
    return a.O && !e && !(0, i.Zi)();
}
