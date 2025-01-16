n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(481060),
    c = n(893966),
    d = n(472596),
    u = n(285173),
    h = n(430824),
    p = n(496675),
    m = n(776767),
    f = n(981631),
    g = n(388032),
    C = n(758570);
function x(e) {
    let { member: t } = e,
        n = (0, s.e7)([h.Z], () => h.Z.getGuild(t.guildId)),
        r = (0, s.e7)([h.Z], () => h.Z.getRoles(t.guildId)),
        x = l.useMemo(
            () =>
                null == n
                    ? []
                    : null == t.highestRoleId
                      ? t.roles
                      : Object.values(r)
                            .filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id))
                            .sort((e, t) => {
                                var n, i;
                                return null !== (i = null !== (n = null == e ? void 0 : e.position) && void 0 !== n ? n : 0 - (null == t ? void 0 : t.position)) && void 0 !== i ? i : 0;
                            })
                            .map((e) => e.id),
            [t.roles, t.highestRoleId, n, r]
        ),
        v = (0, s.e7)([c.Z], () => c.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        _ = (0, d.zq)(v),
        I = (0, d.vN)(t),
        E = (0, s.e7)([p.Z], () => p.Z.can(f.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, i.jsx)(o.FormItem, {
              title: g.intl.string(g.t.LPJmLy),
              titleClassName: C.infoTitle,
              children: (0, i.jsx)(m.WM, {
                  children: (0, i.jsx)(m._2, {
                      description:
                          t.roles.length > 0 || E
                              ? (0, i.jsxs)('div', {
                                    className: C.roleContainer,
                                    children: [
                                        (0, i.jsx)(o.Tooltip, {
                                            'aria-label': g.intl.string(g.t['0g8Xd3']),
                                            allowOverflow: !0,
                                            text: g.intl.string(g.t['93S+lJ']),
                                            children: (e) => {
                                                let { onMouseEnter: n, onMouseLeave: l } = e;
                                                return (0, i.jsx)(o.Clickable, {
                                                    onMouseEnter: n,
                                                    onMouseLeave: l,
                                                    children: (0, i.jsx)(u.Z, {
                                                        className: a()(C.roleTooltipItem, C.highestRole),
                                                        role: _,
                                                        guildId: t.guildId
                                                    })
                                                });
                                            }
                                        }),
                                        x.map((e) =>
                                            (0, i.jsx)(
                                                u.Z,
                                                {
                                                    className: C.roleTooltipItem,
                                                    role: r[e],
                                                    guildId: t.guildId
                                                },
                                                e
                                            )
                                        ),
                                        E &&
                                            (0, i.jsx)(o.Tooltip, {
                                                'aria-label': g.intl.string(g.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: g.intl.string(g.t.ljnBlp),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                                    return (0, i.jsx)(o.Clickable, {
                                                        className: C.addRoleContainer,
                                                        onClick: I,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        children: (0, i.jsx)(o.CirclePlusIcon, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            className: C.addRoleIcon,
                                                            width: 20,
                                                            height: 20
                                                        })
                                                    });
                                                }
                                            })
                                    ]
                                })
                              : (0, i.jsx)('div', {
                                    className: C.noRoles,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        children: g.intl.string(g.t.nZfHsb)
                                    })
                                })
                  })
              })
          });
}
