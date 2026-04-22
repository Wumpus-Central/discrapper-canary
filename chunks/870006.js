n.d(t, { u: () => S });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(353182),
    s = n(821609),
    r = n(793574),
    o = n(688810),
    c = n(989985),
    d = n(206835),
    u = n(961350),
    h = n(696451),
    m = n(229527),
    A = n(81400),
    g = n(652215),
    p = n(340837),
    _ = n(355097),
    f = n(985018),
    E = n(944089);
function C(e) {
    let { guild: t } = e,
        n = (0, d.A)({ scrollPosition: _._F.GUILD_TAG });
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(c._, {
            bannerIcon: (0, i.jsx)(a._, { size: "lg", color: "currentColor", className: E.q3 }),
            bannerHeader: f.intl.format(f.t.GgMwjk, { guildName: t?.name ?? "" }),
            bannerSubtext: f.intl.string(f.t.ONjwD5),
            textStyles: E.cI,
            headerStyles: E.U_,
            children: (0, i.jsx)(s.$, {
                variant: "primary",
                size: "sm",
                text: f.intl.string(f.t.Viksoo),
                onClick: () => n(),
            }),
        }),
    });
}
function x(e) {
    let { guild: t } = e,
        { analyticsLocations: n } = (0, o.Ay)(r.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [l, d] = (0, A.j8)({ guildId: t?.id ?? g.dJq, analyticsLocations: n }),
        u = d ? f.intl.string(f.t["9ph2v7"]) : f.intl.string(f.t.ldh9Cg),
        h = d ? f.intl.string(f.t["/PGQf0"]) : f.intl.string(f.t.WikgZ1);
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(c._, {
            bannerIcon: (0, i.jsx)(a._, { size: "lg", color: "currentColor", className: E.q3 }),
            bannerHeader: f.intl.format(f.t.kcYdTq, { guildName: t?.name ?? "" }),
            bannerSubtext: u,
            textStyles: E.cI,
            headerStyles: E.U_,
            children: (0, i.jsx)(s.$, {
                variant: "primary",
                size: "sm",
                text: h,
                onClick: () => {
                    l();
                },
            }),
        }),
    });
}
function S(e) {
    let { guild: t } = e,
        n = (0, l.bG)([u.default, h.Ay], () => {
            if (null == t) return new Set();
            let e = u.default.getId();
            return (0, m.wj)(h.Ay.getMember(t.id, e));
        }, [t]);
    return n.has(p.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(p.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(x, { guild: t })
        : n.has(p.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(C, { guild: t })
          : (0, i.jsx)(x, { guild: t });
}
