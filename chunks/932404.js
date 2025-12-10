n.d(t, {
    Dv: () => s,
    Hi: () => E,
    MP: () => g,
    NB: () => f,
    Nk: () => c,
    P9: () => I,
    PV: () => y,
    PY: () => v,
    U9: () => d,
    UK: () => u,
    VQ: () => T,
    _l: () => O,
    bs: () => S,
    k0: () => p,
    nV: () => b,
    pH: () => _,
    rI: () => o,
    ry: () => l,
    sG: () => m,
    uD: () => C,
    xO: () => h,
    zg: () => A,
});
var r = n(570140),
    i = n(145597),
    a = n(307149);
function o(e, t) {
    return r.Z.dispatch({
        type: "OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE",
        applicationId: e,
        enabled: t,
    });
}
function s() {
    return r.Z.dispatch({ type: "OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS" });
}
function l() {
    return r.Z.dispatch({ type: "OVERLAY_OOP_UI_INITIALIZED" });
}
function c() {
    return r.Z.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE" });
}
function u(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED",
        error: e,
    });
}
function d() {
    return r.Z.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS" });
}
function f(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_NATIVE_TRACK_GAME",
        pid: e,
    });
}
function p(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_NATIVE_UNTRACK_GAME",
        pid: e,
    });
}
function _(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_PRE_CREATE_POPOUT",
        createWindowTriggeringPID: e,
    });
}
function m(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_POST_CREATE_POPOUT",
        createWindowTriggeringPID: e,
    });
}
function h(e, t) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS",
        createWindowTriggeringPID: e,
        nativeWindowHandle: t,
    });
}
function g(e, t, n) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_WINDOW_CREATION_FAILURE",
        createWindowTriggeringPID: e,
        error: t,
        nativeWindowHandle: n,
    });
}
function E(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW",
        lastAssociatedPID: null != e ? e : i.UNSET_PID,
    });
}
function b(e, t) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW",
        refreshingPID: e,
        lastAssociatedPID: t,
    });
}
function y(e, t, n) {
    let { crashType: i, isCrashedDisabled: a } = n;
    return r.Z.dispatch({
        type: "OVERLAY_CRASHED",
        pid: e,
        error: t,
        crashType: i,
        isCrashedDisabled: a,
    });
}
function O(e) {
    let { pid: t, name: n, type: i, data: o, logType: s = a.l6.Info } = e;
    return r.Z.dispatch({
        type: "OVERLAY_ADD_DEBUG_BREADCRUMB",
        breadcrumb: {
            pid: t,
            type: i,
            name: n,
            data: o,
            logType: s,
        },
    });
}
function v(e, t, n, r) {
    return O({
        pid: e,
        name: t,
        type: a.C7.Flux,
        data: n,
        logType: r,
    });
}
function S(e, t, n, r) {
    return O({
        pid: e,
        name: t,
        type: a.C7.OOPModule,
        data: n,
        logType: r,
    });
}
function I(e, t, n) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_NATIVE_FOCUS_GAINED",
        pid: e,
        windowHandle: t,
        windowClass: n,
    });
}
function T(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_NATIVE_FOCUS_LOST",
        pid: e,
    });
}
function C(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN",
        pid: e,
    });
}
function A(e) {
    return r.Z.dispatch({
        type: "OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED",
        initialized: e,
    });
}
