n.d(t, {
    YS: () => u,
    bA: () => a,
    hP: () => s,
    hY: () => l,
    xv: () => o
});
var i = n(570140);
let r = {
    menubar: !1,
    toolbar: !1,
    location: !1,
    directories: !1
};
function a(e, t, n) {
    return i.Z.dispatch({
        type: 'POPOUT_WINDOW_OPEN',
        key: e,
        features: {
            ...r,
            ...n
        },
        render: t
    });
}
function s(e) {
    return i.Z.dispatch({
        type: 'CHANNEL_CALL_POPOUT_WINDOW_OPEN',
        channel: e
    });
}
function o(e) {
    return i.Z.dispatch({
        type: 'POPOUT_WINDOW_CLOSE',
        key: e
    });
}
function l(e, t) {
    return i.Z.dispatch({
        type: 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP',
        alwaysOnTop: t,
        key: e
    });
}
function u(e, t) {
    return i.Z.dispatch({
        type: 'POPOUT_WINDOW_ADD_STYLESHEET',
        url: e,
        integrity: t
    });
}
