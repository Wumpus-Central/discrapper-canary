let i;
n.r(t),
    n.d(t, {
        DEV_PID: () => A,
        OVERLAY_DEFAULT_RESOLUTION: () => _,
        OVERLAY_LAYOUT_ID: () => u,
        OVERLAY_MIN_RESOLUTION: () => E,
        OVERLAY_VERSION: () => c,
        UNSET_PID: () => I,
        getPID: () => h,
        getRPCAuthToken: () => f,
        isValidGamePID: () => N,
        log: () => p,
        setOutOfProcessSupport: () => O,
        setPID: () => S,
        supportsLegacy: () => R,
        supportsOutOfProcess: () => C,
        validResolution: () => m,
    }),
    n(323874),
    n(14289),
    n(35956);
var a = n(719129),
    r = n(996308),
    s = n(206885),
    l = n(723702),
    o = n(19575),
    d = n(652215);
let c = 2,
    _ = { width: 3840, height: 2160 },
    E = { width: 768, height: 432 },
    u = "overlay_default",
    A = -2,
    I = -1,
    T = !1;
function h() {
    if (void 0 !== i && i !== I) return i;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return isNaN(e) && (e = I), (i = e);
}
function S(e) {
    i = e;
}
function N(e) {
    return null != e && 0 !== e && e !== I;
}
function f() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function p(e) {
    (0, r.tN)({ type: d.kGV.LOG_MESSAGES, pid: h(), token: f(), payload: e });
}
function m(e) {
    return !l.isPlatformEmbedded || (e.width >= E.width && e.height >= E.height);
}
function O(e) {
    T = e;
}
function C() {
    return T;
}
function R() {
    let e = (0, l.isWindows)() && "arm64" === o.Ay.architecture;
    return s.O && !e && !(0, a.Zi)();
}
