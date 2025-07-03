(n.d(t, { Z: () => I }), n(642613));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(399606),
    o = n(481060),
    u = n(893966),
    c = n(472596),
    d = n(285173),
    E = n(485386),
    _ = n(430824),
    A = n(496675),
    m = n(776767),
    f = n(981631),
    T = n(388032),
    g = n(12740);
function I(e) {
    let { member: t } = e,
        n = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guildId)),
        i = (0, a.e7)([E.Z], () => E.Z.getRoles(t.guildId)),
        I = l.useMemo(
            () =>
                null == n
                    ? []
                    : null == t.highestRoleId
                      ? t.roles
                      : Object.values(i)
                            .filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id))
                            .sort((e, t) => {
                                var n, r;
                                return null != (r = null != (n = null == e ? void 0 : e.position) ? n : 0 - (null == t ? void 0 : t.position)) ? r : 0;
                            })
                            .map((e) => e.id),
            [t.roles, t.highestRoleId, n, i]
        ),
        h = (0, a.e7)([u.Z], () => u.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        O = (0, c.zq)(h),
        N = (0, c.vN)(t),
        p = (0, a.e7)([A.Z], () => A.Z.can(f.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(o.xJW, {
              title: T.intl.string(T.t.LPJmLy),
              titleClassName: g.infoTitle,
              children: (0, r.jsx)(m.WM, {
                  children: (0, r.jsx)(m._2, {
                      description:
                          t.roles.length > 0 || p
                              ? (0, r.jsxs)('div', {
                                    className: g.roleContainer,
                                    children: [
                                        (0, r.jsx)(o.ua7, {
                                            'aria-label': T.intl.string(T.t['0g8Xd3']),
                                            allowOverflow: !0,
                                            text: T.intl.string(T.t['93S+lJ']),
                                            children: (e) => {
                                                let { onMouseEnter: n, onMouseLeave: l } = e;
                                                return (0, r.jsx)(o.P3F, {
                                                    onMouseEnter: n,
                                                    onMouseLeave: l,
                                                    children: (0, r.jsx)(d.Z, {
                                                        className: s()(g.roleTooltipItem, g.highestRole),
                                                        role: O,
                                                        guildId: t.guildId
                                                    })
                                                });
                                            }
                                        }),
                                        I.map((e) =>
                                            (0, r.jsx)(
                                                d.Z,
                                                {
                                                    className: g.roleTooltipItem,
                                                    role: i[e],
                                                    guildId: t.guildId
                                                },
                                                e
                                            )
                                        ),
                                        p &&
                                            (0, r.jsx)(o.ua7, {
                                                'aria-label': T.intl.string(T.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: T.intl.string(T.t.ljnBlp),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                                    return (0, r.jsx)(o.P3F, {
                                                        className: g.addRoleContainer,
                                                        onClick: N,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        children: (0, r.jsx)(o.oFk, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            className: g.addRoleIcon,
                                                            width: 20,
                                                            height: 20
                                                        })
                                                    });
                                                }
                                            })
                                    ]
                                })
                              : (0, r.jsx)('div', {
                                    className: g.noRoles,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        children: T.intl.string(T.t.nZfHsb)
                                    })
                                })
                  })
              })
          });
}
