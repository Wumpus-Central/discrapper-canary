n.d(t, { Z: () => N });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(399606),
    o = n(481060),
    u = n(893966),
    c = n(472596),
    E = n(285173),
    d = n(485386),
    _ = n(430824),
    A = n(496675),
    T = n(776767),
    I = n(981631),
    m = n(388032),
    g = n(87819);
function N(e) {
    let { member: t } = e,
        n = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guildId)),
        i = (0, a.e7)([d.Z], () => d.Z.getSortedRoles(t.guildId)),
        N = l.useMemo(
            () => i.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, i],
        ),
        O = (0, a.e7)([u.Z], () => u.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        h = (0, c.zq)(O),
        f = (0, c.vN)(t),
        R = (0, a.e7)([A.Z], () => A.Z.can(I.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(o.xJW, {
              title: m.intl.string(m.t.LPJmLy),
              titleClassName: g.infoTitle,
              children: (0, r.jsx)(T.WM, {
                  children: (0, r.jsx)(T._2, {
                      description:
                          t.roles.length > 0 || R
                              ? (0, r.jsxs)("div", {
                                    className: g.roleContainer,
                                    children: [
                                        (0, r.jsx)(o.ua7, {
                                            "aria-label": m.intl.string(m.t["0g8Xd3"]),
                                            allowOverflow: !0,
                                            text: m.intl.string(m.t["93S+lJ"]),
                                            children: (e) => {
                                                let { onMouseEnter: n, onMouseLeave: l } = e;
                                                return (0, r.jsx)(o.P3F, {
                                                    onMouseEnter: n,
                                                    onMouseLeave: l,
                                                    children: (0, r.jsx)(E.Z, {
                                                        className: s()(g.roleTooltipItem, g.highestRole),
                                                        role: h,
                                                        guildId: t.guildId,
                                                    }),
                                                });
                                            },
                                        }),
                                        N.map((e) =>
                                            (0, r.jsx)(
                                                E.Z,
                                                {
                                                    className: g.roleTooltipItem,
                                                    role: e,
                                                    guildId: t.guildId,
                                                },
                                                e.id,
                                            ),
                                        ),
                                        R &&
                                            (0, r.jsx)(o.ua7, {
                                                "aria-label": m.intl.string(m.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: m.intl.string(m.t.ljnBlp),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                                    return (0, r.jsx)(o.P3F, {
                                                        className: g.addRoleContainer,
                                                        onClick: f,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        children: (0, r.jsx)(o.oFk, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            className: g.addRoleIcon,
                                                            width: 20,
                                                            height: 20,
                                                        }),
                                                    });
                                                },
                                            }),
                                    ],
                                })
                              : (0, r.jsx)("div", {
                                    className: g.noRoles,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        children: m.intl.string(m.t.nZfHsb),
                                    }),
                                }),
                  }),
              }),
          });
}
