let r;
n.r(t),
    n.d(t, {
        DEV_PID: () => _,
        OVERLAY_DEFAULT_RESOLUTION: () => d,
        OVERLAY_LAYOUT_ID: () => p,
        OVERLAY_MIN_RESOLUTION: () => f,
        OVERLAY_VERSION: () => u,
        UNSET_PID: () => h,
        getPID: () => g,
        getRPCAuthToken: () => y,
        isValidGamePID: () => b,
        log: () => O,
        setOutOfProcessSupport: () => v,
        setPID: () => E,
        supportsLegacy: () => I,
        supportsOutOfProcess: () => S,
        validResolution: () => A,
    }),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var i = n(719129),
    a = n(996308),
    s = n(723702),
    o = n(837921),
    l = n(652215),
    c = n(672396);
let u = 2,
    d = {
        width: 3840,
        height: 2160,
    },
    f = {
        width: 768,
        height: 432,
    },
    p = "overlay_default",
    _ = -2,
    h = -1,
    m = !1;

function g() {
    var e;
    if (void 0 !== r && r !== h) return r;
    let t = parseInt(null != (e = new URLSearchParams(window.location.search).get("pid")) ? e : "", 10);
    return isNaN(t) && (t = h), (r = t);
}

function E(e) {
    r = e;
}

function b(e) {
    return null != e && 0 !== e && e !== h;
}

function y() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}

function O(e) {
    (0, a.tN)({
        type: l.kGV.LOG_MESSAGES,
        pid: g(),
        token: y(),
        payload: e,
    });
}

function A(e) {
    return !s.isPlatformEmbedded || (e.width >= f.width && e.height >= f.height);
}

function v(e) {
    m = e;
}

function S() {
    return m;
}

function I() {
    let e = (0, s.isWindows)() && "arm64" === o.Ay.architecture;
    return c.OX && !e && !(0, i.Zi)();
}
