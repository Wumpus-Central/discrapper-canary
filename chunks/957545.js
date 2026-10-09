(n.d(t, { J: () => r, P: () => o }), n(321073));
var i = n(136722),
    l = n(34457),
    s = n(558393),
    a = n(652215);
function r(e) {
    return i.X8(e.permissions, a.Lti);
}
function o(e, t) {
    let n = [],
        i = s.A.getGuildPermissionSpecMap(e);
    for (let e of a.nfo) (0, l._m)(t, e) && n.push(i[e.toString()].title);
    return n;
}
