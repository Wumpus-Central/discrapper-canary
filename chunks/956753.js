"use strict";
n.d(t, { U5: () => o, v$: () => s });
var r = n(291445),
    i = n(589051),
    a = n(672396);
function s(e, t) {
    return function () {
        for (var n = arguments.length, s = Array(n), o = 0; o < n; o++) s[o] = arguments[o];
        let l = (a.OX || a.ed) && (0, i.NI)(t).hasFriendList,
            u = r.z.getConfig({ location: t }).hasFriendList;
        return (!!l || !!u) && e(...s);
    };
}
function o(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return !!(0, i.NI)(t).hasChat && e(...r);
    };
}
