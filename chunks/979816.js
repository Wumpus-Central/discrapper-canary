u.d(n, { XO: () => a, hX: () => s, iI: () => A, i_: () => d });
var e = u(17928),
    r = u(71393),
    i = u(576705),
    c = u(652215);
let l = function (t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        e = n.getGuild(t);
    return null != e && u.can(c.xBc.MANAGE_GUILD, e);
};
function d(t) {
    return null != t && l(t);
}
function s(t) {
    return l(t);
}
function A(t) {
    return (0, e.bG)([r.A, i.A], () => l(t, r.A, i.A), [t]);
}
function a(t) {
    return (0, e.bG)([r.A], () => {
        let n = r.A.getGuild(t);
        return n?.features.has(c.GuildFeatures.COMMUNITY) || !1;
    }, [t]);
}
