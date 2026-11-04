var n = e(855986),
    r = e(71393),
    i = e(576705),
    l = e(890634),
    A = e(652215);
function s(t) {
    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        n = u.getGuild(t);
    return null != n && e.can(A.xBc.MANAGE_GUILD, n);
}
function a(t) {
    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return u.getGuild(t)?.features.has(A.GuildFeatures.COMMUNITY) ?? !1;
}
e.d(
    u,
    {},
    {
        AH: a,
        DG: function (t) {
            return (0, n.bG)([r.A], () => a(t, r.A), [t]);
        },
        XO: function (t) {
            return (0, n.bG)(
                [r.A],
                () => {
                    let u = r.A.getGuild(t);
                    return u?.features.has(A.GuildFeatures.COMMUNITY) || !1;
                },
                [t],
            );
        },
        _x: function (t, u) {
            return (0, n.bG)(
                [r.A],
                () => {
                    if (u !== l.uh.MENTION_SPAM) return !1;
                    let e = r.A.getGuild(t);
                    return null != e && e.features.has(A.GuildFeatures.COMMUNITY);
                },
                [t, u],
            );
        },
        hX: function (t) {
            return s(t);
        },
        iI: function (t) {
            return (0, n.bG)([r.A, i.A], () => s(t, r.A, i.A), [t]);
        },
        i_: function (t) {
            return null != t && s(t);
        },
    },
);
