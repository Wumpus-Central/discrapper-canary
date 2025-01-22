r.d(n, {
    YS: function () {
        return c;
    },
    bA: function () {
        return o;
    },
    hP: function () {
        return s;
    },
    hY: function () {
        return u;
    },
    xv: function () {
        return l;
    }
});
var i = r(570140);
let a = {
    menubar: !1,
    toolbar: !1,
    location: !1,
    directories: !1
};
function o(e, n, r) {
    return i.Z.dispatch({
        type: 'POPOUT_WINDOW_OPEN',
        key: e,
        features: {
            ...a,
            ...r
        },
        render: n
    });
}
function s(e) {
    return i.Z.dispatch({
        type: 'CHANNEL_CALL_POPOUT_WINDOW_OPEN',
        channel: e
    });
}
function l(e) {
    return i.Z.dispatch({
        type: 'POPOUT_WINDOW_CLOSE',
        key: e
    });
}
function u(e, n) {
    return i.Z.dispatch({
        type: 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP',
        alwaysOnTop: n,
        key: e
    });
}
function c(e, n) {
    return i.Z.dispatch({
        type: 'POPOUT_WINDOW_ADD_STYLESHEET',
        url: e,
        integrity: n
    });
}
