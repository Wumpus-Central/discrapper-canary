n.d(t, {
    U5: () => s,
    v$: () => o,
}),
    n(896048);
var r = n(291445),
    i = n(589051),
    a = n(672396);

function o(e, t) {
    return function () {
        for (var n = arguments.length, o = Array(n), s = 0; s < n; s++) o[s] = arguments[s];
        let l = (a.OX || a.ed) && (0, i.NI)(t).hasFriendList,
            c = r.z.getConfig({
                location: t,
            }).hasFriendList;
        return (!!l || !!c) && e(...o);
    };
}

function s(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return !!(0, i.NI)(t).hasChat && e(...r);
    };
}
