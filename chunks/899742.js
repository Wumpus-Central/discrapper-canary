n.d(t, {
    Vb: () => l,
    Yz: () => o,
    by: () => s,
    is: () => i,
    lx: () => a
});
var r = n(570140);
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10000;
    r.Z.dispatch({
        type: 'BROWSER_HANDOFF_BEGIN',
        timeout: e
    });
}
function a(e, t) {
    r.Z.dispatch({
        type: 'BROWSER_HANDOFF_END',
        handoffToken: e,
        fingerprint: t
    });
}
function o(e) {
    let { handoffKey: t, handoffToken: n, handoffSource: i, timeout: a = 10000 } = e;
    r.Z.dispatch({
        type: 'BROWSER_HANDOFF_FROM_APP',
        handoffKey: t,
        handoffToken: n,
        handoffSource: i,
        timeout: a
    });
}
function s() {
    r.Z.dispatch({ type: 'BROWSER_HANDOFF_UNAVAILABLE' });
}
function l(e) {
    r.Z.dispatch({
        type: 'BROWSER_HANDOFF_SET_USER',
        user: e
    });
}
