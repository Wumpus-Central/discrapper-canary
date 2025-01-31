n.d(t, {
    Vb: () => l,
    Yz: () => s,
    by: () => o,
    is: () => r,
    lx: () => a
});
var i = n(570140);
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10000;
    i.Z.dispatch({
        type: 'BROWSER_HANDOFF_BEGIN',
        timeout: e
    });
}
function a(e, t) {
    i.Z.dispatch({
        type: 'BROWSER_HANDOFF_END',
        handoffToken: e,
        fingerprint: t
    });
}
function s(e) {
    let { handoffKey: t, handoffToken: n, handoffSource: r, timeout: a = 10000 } = e;
    i.Z.dispatch({
        type: 'BROWSER_HANDOFF_FROM_APP',
        handoffKey: t,
        handoffToken: n,
        handoffSource: r,
        timeout: a
    });
}
function o() {
    i.Z.dispatch({ type: 'BROWSER_HANDOFF_UNAVAILABLE' });
}
function l(e) {
    i.Z.dispatch({
        type: 'BROWSER_HANDOFF_SET_USER',
        user: e
    });
}
