let i;
(n.r(t),
    n.d(t, {
        DEV_PID: () => E,
        OVERLAY_DEFAULT_RESOLUTION: () => c,
        OVERLAY_LAYOUT_ID: () => _,
        OVERLAY_MIN_RESOLUTION: () => u,
        OVERLAY_VERSION: () => d,
        getPID: () => h,
        getRPCAuthToken: () => p,
        isHookModuleTooOld: () => C,
        isValidGamePID: () => f,
        log: () => T,
        setOutOfProcessSupport: () => g,
        setPID: () => I,
        supportsLegacy: () => O,
        supportsOutOfProcess: () => S,
        validResolution: () => m,
    }),
    n(323874),
    n(14289),
    n(35956));
var r = n(996308),
    a = n(206885),
    s = n(723702),
    l = n(19575),
    o = n(652215);
n(672396);
let d = 2,
    c = { width: 3840, height: 2160 },
    u = { width: 768, height: 432 },
    _ = "overlay_default",
    E = -2,
    A = !1;
function h() {
    if (void 0 !== i && -1 !== i) return i;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return (isNaN(e) && (e = -1), (i = e));
}
function I(e) {
    i = e;
}
function f(e) {
    return null != e && 0 !== e && -1 !== e;
}
function p() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function T(e) {
    (0, r.tN)({ type: o.kGV.LOG_MESSAGES, pid: h(), token: p(), payload: e });
}
function m(e) {
    return !s.isPlatformEmbedded || (e.width >= u.width && e.height >= u.height);
}
function g(e) {
    A = e;
}
function S() {
    return A;
}
let N = { development: [0, 0, 0, 0], canary: [1, 0, 30, 10], ptb: [1, 0, 1005, 2], stable: [1, 0, 9001, 2] };
function C() {
    return !l.Ay?.isModuleVersionAtLeast?.("discord_hook", N);
}
function O() {
    let e = (0, s.isWindows)() && "arm64" === l.Ay.architecture;
    return a.O && !e && !C();
}
