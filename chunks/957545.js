n.d(t, { J: () => a, P: () => o }), n(321073);
var i = n(136722),
    l = n(34457),
    s = n(558393),
    r = n(652215);
function a(e) {
    return i.X8(e.permissions, r.Lti);
}
function o(e, t) {
    let n = [],
        i = s.A.getGuildPermissionSpecMap(e);
    for (let e of r.nfo) (0, l._m)(t, e) && n.push(i[e.toString()].title);
    return n;
}
