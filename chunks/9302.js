"use strict";
let i;
n.r(t),
    n.d(t, {
        DEV_PID: () => h,
        OVERLAY_DEFAULT_RESOLUTION: () => d,
        OVERLAY_LAYOUT_ID: () => f,
        OVERLAY_MIN_RESOLUTION: () => _,
        OVERLAY_VERSION: () => c,
        UNSET_PID: () => p,
        getPID: () => m,
        getRPCAuthToken: () => I,
        isValidGamePID: () => A,
        log: () => T,
        setOutOfProcessSupport: () => N,
        setPID: () => g,
        supportsLegacy: () => C,
        supportsOutOfProcess: () => y,
        validResolution: () => S,
    }),
    n(323874),
    n(14289),
    n(35956);
var r = n(719129),
    s = n(996308),
    a = n(206885),
    o = n(723702),
    l = n(19575),
    u = n(652215);
let c = 2,
    d = { width: 3840, height: 2160 },
    _ = { width: 768, height: 432 },
    f = "overlay_default",
    h = -2,
    p = -1,
    E = !1;
function m() {
    if (void 0 !== i && i !== p) return i;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return isNaN(e) && (e = p), (i = e);
}
function g(e) {
    i = e;
}
function A(e) {
    return null != e && 0 !== e && e !== p;
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
function N(e) {
    E = e;
}
function y() {
    return E;
}
function C() {
    let e = (0, o.isWindows)() && "arm64" === l.Ay.architecture;
    return a.O && !e && !(0, r.Zi)();
}
