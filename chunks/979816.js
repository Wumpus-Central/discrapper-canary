n.d(t, { XO: () => o, _x: () => h, hX: () => a, iI: () => d, i_: () => A });
var e = n(17928),
    r = n(71393),
    i = n(576705),
    l = n(243277),
    c = n(652215);
function s(u) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        e = t.getGuild(u);
    return null != e && n.can(c.xBc.MANAGE_GUILD, e);
}
function A(u) {
    return null != u && s(u);
}
function a(u) {
    return s(u);
}
function d(u) {
    return (0, e.bG)([r.A, i.A], () => s(u, r.A, i.A), [u]);
}
function h(u, t) {
    return (0, e.bG)(
        [r.A],
        () => {
            if (t !== l.uh.MENTION_SPAM) return !1;
            let n = r.A.getGuild(u);
            return null != n && n.features.has(c.GuildFeatures.COMMUNITY);
        },
        [u, t],
    );
}
function o(u) {
    return (0, e.bG)(
        [r.A],
        () => {
            let t = r.A.getGuild(u);
            return t?.features.has(c.GuildFeatures.COMMUNITY) || !1;
        },
        [u],
    );
}
