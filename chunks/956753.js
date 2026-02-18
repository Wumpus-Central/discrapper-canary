"use strict";
n.d(t, { U5: () => l, v$: () => o });
var r = n(291445),
    i = n(206885),
    a = n(589051),
    s = n(672396);
function o(e, t) {
    return function () {
        for (var n = arguments.length, o = Array(n), l = 0; l < n; l++) o[l] = arguments[l];
        let u = (i.O || s.ed) && (0, a.NI)(t).hasFriendList,
            c = r.z.getConfig({ location: t }).hasFriendList;
        return (!!u || !!c) && e(...o);
    };
}
function l(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return !!(0, a.NI)(t).hasChat && e(...r);
    };
}
