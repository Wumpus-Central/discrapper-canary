n.d(t, { Z: () => f });
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(399606),
    o = n(481060),
    u = n(893966),
    c = n(472596),
    d = n(285173),
    E = n(485386),
    _ = n(430824),
    A = n(496675),
    T = n(776767),
    m = n(981631),
    I = n(388032),
    g = n(12740);
function f(e) {
    let { member: t } = e,
        n = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guildId)),
        s = (0, a.e7)([E.Z], () => E.Z.getSortedRoles(t.guildId)),
        f = l.useMemo(
            () => s.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, s],
        ),
        N = (0, a.e7)([u.Z], () => u.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        h = (0, c.zq)(N),
        O = (0, c.vN)(t),
        p = (0, a.e7)([A.Z], () => A.Z.can(m.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(o.xJW, {
              title: I.intl.string(I.t.LPJmLy),
              titleClassName: g.infoTitle,
              children: (0, r.jsx)(T.WM, {
                  children: (0, r.jsx)(T._2, {
                      description:
                          t.roles.length > 0 || p
                              ? (0, r.jsxs)("div", {
                                    className: g.roleContainer,
                                    children: [
                                        (0, r.jsx)(o.ua7, {
                                            "aria-label": I.intl.string(I.t["0g8Xd3"]),
                                            allowOverflow: !0,
                                            text: I.intl.string(I.t["93S+lJ"]),
                                            children: (e) => {
                                                let { onMouseEnter: n, onMouseLeave: l } = e;
                                                return (0, r.jsx)(o.P3F, {
                                                    onMouseEnter: n,
                                                    onMouseLeave: l,
                                                    children: (0, r.jsx)(d.Z, {
                                                        className: i()(g.roleTooltipItem, g.highestRole),
                                                        role: h,
                                                        guildId: t.guildId,
                                                    }),
                                                });
                                            },
                                        }),
                                        f.map((e) =>
                                            (0, r.jsx)(
                                                d.Z,
                                                {
                                                    className: g.roleTooltipItem,
                                                    role: e,
                                                    guildId: t.guildId,
                                                },
                                                e.id,
                                            ),
                                        ),
                                        p &&
                                            (0, r.jsx)(o.ua7, {
                                                "aria-label": I.intl.string(I.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: I.intl.string(I.t.ljnBlp),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                                    return (0, r.jsx)(o.P3F, {
                                                        className: g.addRoleContainer,
                                                        onClick: O,
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
                                        children: I.intl.string(I.t.nZfHsb),
                                    }),
                                }),
                  }),
              }),
          });
}
