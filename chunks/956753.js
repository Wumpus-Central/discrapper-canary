"use strict";
n.d(t, { U5: () => o, v$: () => a });
var r = n(291445),
    i = n(206885),
    s = n(589051);
function a(e, t) {
    return function () {
        for (var n = arguments.length, a = Array(n), o = 0; o < n; o++) a[o] = arguments[o];
        let l = (i.O || i.e) && (0, s.NI)(t).hasFriendList,
            u = r.z.getConfig({ location: t }).hasFriendList;
        return (!!l || !!u) && e(...a);
    };
}
function o(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return !!(0, s.NI)(t).hasChat && e(...r);
    };
}
