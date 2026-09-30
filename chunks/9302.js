let i;
(n.r(t),
    n.d(t, {
        DEV_PID: () => A,
        OVERLAY_DEFAULT_RESOLUTION: () => u,
        OVERLAY_LAYOUT_ID: () => E,
        OVERLAY_MIN_RESOLUTION: () => _,
        OVERLAY_VERSION: () => c,
        getPID: () => I,
        getRPCAuthToken: () => T,
        isValidGamePID: () => p,
        log: () => m,
        setOutOfProcessSupport: () => S,
        setPID: () => f,
        supportsLegacy: () => C,
        supportsOutOfProcess: () => N,
        validResolution: () => g,
    }),
    n(323874),
    n(14289),
    n(35956));
var r = n(719129),
    a = n(996308),
    s = n(206885),
    l = n(723702),
    o = n(19575),
    d = n(652215);
n(672396);
let c = 2,
    u = { width: 3840, height: 2160 },
    _ = { width: 768, height: 432 },
    E = "overlay_default",
    A = -2,
    h = !1;
function I() {
    if (void 0 !== i && -1 !== i) return i;
    let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
    return (isNaN(e) && (e = -1), (i = e));
}
function f(e) {
    i = e;
}
function p(e) {
    return null != e && 0 !== e && -1 !== e;
}
function T() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function m(e) {
    (0, a.tN)({ type: d.kGV.LOG_MESSAGES, pid: I(), token: T(), payload: e });
}
function g(e) {
    return !l.isPlatformEmbedded || (e.width >= _.width && e.height >= _.height);
}
function S(e) {
    h = e;
}
function N() {
    return h;
}
function C() {
    let e = (0, l.isWindows)() && "arm64" === o.Ay.architecture;
    return s.O && !e && !(0, r.Zi)();
}
