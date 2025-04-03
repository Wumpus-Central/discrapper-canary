n.d(t, { Z: () => _ }), n(230036);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(481060),
    c = n(893966),
    u = n(472596),
    d = n(285173),
    p = n(430824),
    h = n(496675),
    f = n(776767),
    m = n(981631),
    g = n(388032),
    b = n(12740);
function _(e) {
    let { member: t } = e,
        n = (0, a.e7)([p.Z], () => p.Z.getGuild(t.guildId)),
        l = (0, a.e7)([p.Z], () => p.Z.getRoles(t.guildId)),
        _ = i.useMemo(
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
        y = (0, u.zq)(C),
        x = (0, u.vN)(t),
        v = (0, a.e7)([h.Z], () => h.Z.can(m.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(s.xJW, {
              title: g.NW.string(g.t.LPJmLy),
              titleClassName: b.infoTitle,
              children: (0, r.jsx)(f.WM, {
                  children: (0, r.jsx)(f._2, {
                      description:
                          t.roles.length > 0 || v
                              ? (0, r.jsxs)('div', {
                                    className: b.roleContainer,
                                    children: [
                                        (0, r.jsx)(s.ua7, {
                                            'aria-label': g.NW.string(g.t['0g8Xd3']),
                                            allowOverflow: !0,
                                            text: g.NW.string(g.t['93S+lJ']),
                                            children: (e) => {
                                                let { onMouseEnter: n, onMouseLeave: i } = e;
                                                return (0, r.jsx)(s.P3F, {
                                                    onMouseEnter: n,
                                                    onMouseLeave: i,
                                                    children: (0, r.jsx)(d.Z, {
                                                        className: o()(b.roleTooltipItem, b.highestRole),
                                                        role: y,
                                                        guildId: t.guildId
                                                    })
                                                });
                                            }
                                        }),
                                        _.map((e) =>
                                            (0, r.jsx)(
                                                d.Z,
                                                {
                                                    className: b.roleTooltipItem,
                                                    role: l[e],
                                                    guildId: t.guildId
                                                },
                                                e
                                            )
                                        ),
                                        v &&
                                            (0, r.jsx)(s.ua7, {
                                                'aria-label': g.NW.string(g.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: g.NW.string(g.t.ljnBlp),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                                    return (0, r.jsx)(s.P3F, {
                                                        className: b.addRoleContainer,
                                                        onClick: x,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        children: (0, r.jsx)(s.oFk, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            className: b.addRoleIcon,
                                                            width: 20,
                                                            height: 20
                                                        })
                                                    });
                                                }
                                            })
                                    ]
                                })
                              : (0, r.jsx)('div', {
                                    className: b.noRoles,
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        children: g.NW.string(g.t.nZfHsb)
                                    })
                                })
                  })
              })
          });
}
