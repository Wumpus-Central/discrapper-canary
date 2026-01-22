n.d(t, {
    u: () => j,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(793574),
    s = n(688810),
    o = n(989985),
    c = n(206835),
    u = n(961350),
    d = n(696451),
    f = n(229527),
    p = n(81400),
    h = n(652215),
    b = n(340837),
    g = n(355097),
    m = n(985018),
    A = n(169880);

function y(e) {
    var t;
    let { guild: n } = e,
        l = (0, c.A)({
            scrollPosition: g._F.GUILD_TAG,
        });
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(o._, {
            bannerIcon: (0, r.jsx)(i._mZ, {
                size: "lg",
                color: "currentColor",
                className: A.q3,
            }),
            bannerHeader: m.intl.format(m.t.GgMwjk, {
                guildName: null != (t = null == n ? void 0 : n.name) ? t : "",
            }),
            bannerSubtext: m.intl.string(m.t.ONjwD5),
            textStyles: A.cI,
            headerStyles: A.U_,
            children: (0, r.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: m.intl.string(m.t.Viksoo),
                onClick: () => l(),
            }),
        }),
    });
}

function O(e) {
    var t, n;
    let { guild: l } = e,
        { analyticsLocations: c } = (0, s.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [u, d] = (0, p.j8)({
            guildId: null != (t = null == l ? void 0 : l.id) ? t : h.dJq,
            analyticsLocations: c,
        }),
        f = d ? m.intl.string(m.t["9ph2v7"]) : m.intl.string(m.t.ldh9Cg),
        b = d ? m.intl.string(m.t["/PGQf0"]) : m.intl.string(m.t.WikgZ1);
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(o._, {
            bannerIcon: (0, r.jsx)(i._mZ, {
                size: "lg",
                color: "currentColor",
                className: A.q3,
            }),
            bannerHeader: m.intl.format(m.t.kcYdTq, {
                guildName: null != (n = null == l ? void 0 : l.name) ? n : "",
            }),
            bannerSubtext: f,
            textStyles: A.cI,
            headerStyles: A.U_,
            children: (0, r.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: b,
                onClick: () => {
                    u();
                },
            }),
        }),
    });
}

function j(e) {
    let { guild: t } = e,
        n = (0, l.bG)([u.default, d.Ay], () => {
            if (null == t) return new Set();
            let e = u.default.getId();
            return (0, f.wj)(d.Ay.getMember(t.id, e));
        }, [t]);
    return n.has(b.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(b.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, r.jsx)(O, {
              guild: t,
          })
        : n.has(b.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, r.jsx)(y, {
                guild: t,
            })
          : (0, r.jsx)(O, {
                guild: t,
            });
}
