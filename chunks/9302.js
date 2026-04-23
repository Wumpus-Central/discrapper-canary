let i;
n.r(t),
    n.d(t, {
        DEV_PID: () => I,
        OVERLAY_DEFAULT_RESOLUTION: () => d,
        OVERLAY_LAYOUT_ID: () => u,
        OVERLAY_MIN_RESOLUTION: () => c,
        OVERLAY_VERSION: () => E,
        UNSET_PID: () => A,
        getPID: () => S,
        getRPCAuthToken: () => R,
        isValidGamePID: () => O,
        log: () => f,
        setOutOfProcessSupport: () => p,
        setPID: () => N,
        supportsLegacy: () => L,
        supportsOutOfProcess: () => m,
        validResolution: () => C,
    }),
    n(323874),
    n(14289),
    n(35956);
var r = n(719129),
    a = n(996308),
    s = n(206885),
    _ = n(723702),
    l = n(19575),
    o = n(652215);
let E = 2,
    d = { width: 3840, height: 2160 },
    c = { width: 768, height: 432 },
    u = "overlay_default",
    I = -2,
    A = -1,
    T = !1;
function S() {
    if (void 0 !== i && i !== A) return i;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return isNaN(e) && (e = A), (i = e);
}
function N(e) {
    i = e;
}
function O(e) {
    return null != e && 0 !== e && e !== A;
}
function R() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function f(e) {
    (0, a.tN)({ type: o.kGV.LOG_MESSAGES, pid: S(), token: R(), payload: e });
}
function C(e) {
    return !_.isPlatformEmbedded || (e.width >= c.width && e.height >= c.height);
}
function p(e) {
    T = e;
}
function m() {
    return T;
}
function L() {
    let e = (0, _.isWindows)() && "arm64" === l.Ay.architecture;
    return s.O && !e && !(0, r.Zi)();
}
