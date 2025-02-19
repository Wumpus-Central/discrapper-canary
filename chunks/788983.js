n.d(t, {
    YS: () => d,
    bA: () => s,
    hP: () => l,
    hY: () => u,
    xv: () => c
});
var r = n(570140);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
let a = {
    menubar: !1,
    toolbar: !1,
    location: !1,
    directories: !1
};
function s(e, t, n) {
    return r.Z.dispatch({
        type: 'POPOUT_WINDOW_OPEN',
        key: e,
        features: o({}, a, n),
        render: t
    });
}
function l(e) {
    return r.Z.dispatch({
        type: 'CHANNEL_CALL_POPOUT_WINDOW_OPEN',
        channel: e
    });
}
function c(e) {
    return r.Z.dispatch({
        type: 'POPOUT_WINDOW_CLOSE',
        key: e
    });
}
function u(e, t) {
    return r.Z.dispatch({
        type: 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP',
        alwaysOnTop: t,
        key: e
    });
}
function d(e, t) {
    return r.Z.dispatch({
        type: 'POPOUT_WINDOW_ADD_STYLESHEET',
        url: e,
        integrity: t
    });
}
