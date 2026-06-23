u.d(t, { XO: () => a, hX: () => s, iI: () => A, i_: () => d });
var e = u(17928),
    r = u(71393),
    i = u(576705),
    c = u(652215);
function l(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        e = t.getGuild(n);
    return null != e && u.can(c.xBc.MANAGE_GUILD, e);
}
function d(n) {
    return null != n && l(n);
}
function s(n) {
    return l(n);
}
function A(n) {
    return (0, e.bG)([r.A, i.A], () => l(n, r.A, i.A), [n]);
}
function a(n) {
    return (0, e.bG)([r.A], () => {
        let t = r.A.getGuild(n);
        return t?.features.has(c.GuildFeatures.COMMUNITY) || !1;
    }, [n]);
}
