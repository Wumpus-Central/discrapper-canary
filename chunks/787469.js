n.d(t, { Z: () => y }), n(642613);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(481060),
    c = n(893966),
    u = n(472596),
    d = n(285173),
    p = n(485386),
    h = n(430824),
    f = n(496675),
    m = n(776767),
    g = n(981631),
    b = n(388032),
    _ = n(12740);
function y(e) {
    let { member: t } = e,
        n = (0, a.e7)([h.Z], () => h.Z.getGuild(t.guildId)),
        l = (0, a.e7)([p.Z], () => p.Z.getRoles(t.guildId)),
        y = i.useMemo(
            () =>
                null == n
                    ? []
                    : null == t.highestRoleId
                      ? t.roles
                      : Object.values(l)
                            .filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id))
                            .sort((e, t) => {
                                var n, r;
                                return null != (r = null != (n = null == e ? void 0 : e.position) ? n : 0 - (null == t ? void 0 : t.position)) ? r : 0;
                            })
                            .map((e) => e.id),
            [t.roles, t.highestRoleId, n, l]
        ),
        C = (0, a.e7)([c.Z], () => c.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        x = (0, u.zq)(C),
        v = (0, u.vN)(t),
        j = (0, a.e7)([f.Z], () => f.Z.can(g.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(s.xJW, {
              title: b.intl.string(b.t.LPJmLy),
              titleClassName: _.infoTitle,
              children: (0, r.jsx)(m.WM, {
                  children: (0, r.jsx)(m._2, {
                      description:
                          t.roles.length > 0 || j
                              ? (0, r.jsxs)('div', {
                                    className: _.roleContainer,
                                    children: [
                                        (0, r.jsx)(s.ua7, {
                                            'aria-label': b.intl.string(b.t['0g8Xd3']),
                                            allowOverflow: !0,
                                            text: b.intl.string(b.t['93S+lJ']),
                                            children: (e) => {
                                                let { onMouseEnter: n, onMouseLeave: i } = e;
                                                return (0, r.jsx)(s.P3F, {
                                                    onMouseEnter: n,
                                                    onMouseLeave: i,
                                                    children: (0, r.jsx)(d.Z, {
                                                        className: o()(_.roleTooltipItem, _.highestRole),
                                                        role: x,
                                                        guildId: t.guildId
                                                    })
                                                });
                                            }
                                        }),
                                        y.map((e) =>
                                            (0, r.jsx)(
                                                d.Z,
                                                {
                                                    className: _.roleTooltipItem,
                                                    role: l[e],
                                                    guildId: t.guildId
                                                },
                                                e
                                            )
                                        ),
                                        j &&
                                            (0, r.jsx)(s.ua7, {
                                                'aria-label': b.intl.string(b.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: b.intl.string(b.t.ljnBlp),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                                    return (0, r.jsx)(s.P3F, {
                                                        className: _.addRoleContainer,
                                                        onClick: v,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        children: (0, r.jsx)(s.oFk, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            className: _.addRoleIcon,
                                                            width: 20,
                                                            height: 20
                                                        })
                                                    });
                                                }
                                            })
                                    ]
                                })
                              : (0, r.jsx)('div', {
                                    className: _.noRoles,
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        children: b.intl.string(b.t.nZfHsb)
                                    })
                                })
                  })
              })
          });
}
