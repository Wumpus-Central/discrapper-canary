r.d(n, {
    Vb: function () {
        return u;
    },
    Yz: function () {
        return s;
    },
    by: function () {
        return l;
    },
    is: function () {
        return a;
    },
    lx: function () {
        return o;
    }
});
var i = r(570140);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10000;
    i.Z.dispatch({
        type: 'BROWSER_HANDOFF_BEGIN',
        timeout: e
    });
}
function o(e, n) {
    i.Z.dispatch({
        type: 'BROWSER_HANDOFF_END',
        handoffToken: e,
        fingerprint: n
    });
}
function s(e) {
    let { handoffKey: n, handoffToken: r, handoffSource: a, timeout: o = 10000 } = e;
    i.Z.dispatch({
        type: 'BROWSER_HANDOFF_FROM_APP',
        handoffKey: n,
        handoffToken: r,
        handoffSource: a,
        timeout: o
    });
}
function l() {
    i.Z.dispatch({ type: 'BROWSER_HANDOFF_UNAVAILABLE' });
}
function u(e) {
    i.Z.dispatch({
        type: 'BROWSER_HANDOFF_SET_USER',
        user: e
    });
}
