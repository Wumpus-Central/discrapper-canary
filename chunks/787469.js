n.d(t, { Z: () => N });
var r = n(255367),
    l = n(73800),
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
    g = n(388032),
    m = n(12740);
function N(e) {
    let { member: t } = e,
        n = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guildId)),
        i = (0, a.e7)([d.Z], () => d.Z.getSortedRoles(t.guildId)),
        N = l.useMemo(() => i.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)), [t.roles, t.highestRoleId, i]),
        O = (0, a.e7)([u.Z], () => u.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        f = (0, c.zq)(O),
        R = (0, c.vN)(t),
        S = (0, a.e7)([A.Z], () => A.Z.can(I.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(o.xJW, {
              title: g.intl.string(g.t.LPJmLy),
              titleClassName: m.infoTitle,
              children: (0, r.jsx)(T.WM, {
                  children: (0, r.jsx)(T._2, {
                      description:
                          t.roles.length > 0 || S
                              ? (0, r.jsxs)('div', {
                                    className: m.roleContainer,
                                    children: [
                                        (0, r.jsx)(o.ua7, {
                                            'aria-label': g.intl.string(g.t['0g8Xd3']),
                                            allowOverflow: !0,
                                            text: g.intl.string(g.t['93S+lJ']),
                                            children: (e) => {
                                                let { onMouseEnter: n, onMouseLeave: l } = e;
                                                return (0, r.jsx)(o.P3F, {
                                                    onMouseEnter: n,
                                                    onMouseLeave: l,
                                                    children: (0, r.jsx)(E.Z, {
                                                        className: s()(m.roleTooltipItem, m.highestRole),
                                                        role: f,
                                                        guildId: t.guildId
                                                    })
                                                });
                                            }
                                        }),
                                        N.map((e) =>
                                            (0, r.jsx)(
                                                E.Z,
                                                {
                                                    className: m.roleTooltipItem,
                                                    role: e,
                                                    guildId: t.guildId
                                                },
                                                e.id
                                            )
                                        ),
                                        S &&
                                            (0, r.jsx)(o.ua7, {
                                                'aria-label': g.intl.string(g.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: g.intl.string(g.t.ljnBlp),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                                    return (0, r.jsx)(o.P3F, {
                                                        className: m.addRoleContainer,
                                                        onClick: R,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        children: (0, r.jsx)(o.oFk, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            className: m.addRoleIcon,
                                                            width: 20,
                                                            height: 20
                                                        })
                                                    });
                                                }
                                            })
                                    ]
                                })
                              : (0, r.jsx)('div', {
                                    className: m.noRoles,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        children: g.intl.string(g.t.nZfHsb)
                                    })
                                })
                  })
              })
          });
}
