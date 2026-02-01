n.d(t, {
    R: () => a,
    U: () => i,
}),
    n(896048);
var r = n(589051);

function i(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
        return !!(0, r.NI)(t).hasChat && e(...i);
    };
}

function a(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
        return !!(0, r.NI)(t).hasFriendList && e(...i);
    };
}
