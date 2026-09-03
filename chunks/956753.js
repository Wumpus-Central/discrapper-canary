n.d(t, { U5: () => l, v$: () => s });
var i = n(291445),
    r = n(206885),
    a = n(589051);
function s(e, t) {
    return function () {
        for (var n = arguments.length, s = Array(n), l = 0; l < n; l++) s[l] = arguments[l];
        let o = (r.O || r.e) && (0, a.NI)(t).hasFriendList,
            d = i.z.getConfig({ location: t }).hasFriendList;
        return (!!o || !!d) && e(...s);
    };
}
function l(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        return !!(0, a.NI)(t).hasChat && e(...i);
    };
}
