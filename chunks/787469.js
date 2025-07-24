(t.d(e, { Z: () => B }), t(642613));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(399606),
    a = t(481060),
    o = t(893966),
    g = t(472596),
    f = t(285173),
    v = t(485386),
    c = t(430824),
    h = t(496675),
    E = t(776767),
    u = t(981631),
    d = t(388032),
    C = t(12740);
function B(A) {
    let { member: e } = A,
        t = (0, s.e7)([c.Z], () => c.Z.getGuild(e.guildId)),
        l = (0, s.e7)([v.Z], () => v.Z.getRoles(e.guildId)),
        B = r.useMemo(
            () =>
                null == t
                    ? []
                    : null == e.highestRoleId
                      ? e.roles
                      : Object.values(l)
                            .filter((A) => A.id !== e.highestRoleId && e.roles.includes(A.id))
                            .sort((A, e) => {
                                var t, n;
                                return null != (n = null != (t = null == A ? void 0 : A.position) ? t : 0 - (null == e ? void 0 : e.position)) ? n : 0;
                            })
                            .map((A) => A.id),
            [e.roles, e.highestRoleId, t, l]
        ),
        w = (0, s.e7)([o.Z], () => o.Z.getEnhancedMember(e.guildId, e.userId), [e.guildId, e.userId]),
        D = (0, g.zq)(w),
        M = (0, g.vN)(e),
        I = (0, s.e7)([h.Z], () => h.Z.can(u.Plq.MANAGE_ROLES, t), [t]);
    return null == t
        ? null
        : (0, n.jsx)(a.xJW, {
              title: d.intl.string(d.t.LPJmLy),
              titleClassName: C.infoTitle,
              children: (0, n.jsx)(E.WM, {
                  children: (0, n.jsx)(E._2, {
                      description:
                          e.roles.length > 0 || I
                              ? (0, n.jsxs)('div', {
                                    className: C.roleContainer,
                                    children: [
                                        (0, n.jsx)(a.ua7, {
                                            'aria-label': d.intl.string(d.t['0g8Xd3']),
                                            allowOverflow: !0,
                                            text: d.intl.string(d.t['93S+lJ']),
                                            children: (A) => {
                                                let { onMouseEnter: t, onMouseLeave: r } = A;
                                                return (0, n.jsx)(a.P3F, {
                                                    onMouseEnter: t,
                                                    onMouseLeave: r,
                                                    children: (0, n.jsx)(f.Z, {
                                                        className: i()(C.roleTooltipItem, C.highestRole),
                                                        role: D,
                                                        guildId: e.guildId
                                                    })
                                                });
                                            }
                                        }),
                                        B.map((A) =>
                                            (0, n.jsx)(
                                                f.Z,
                                                {
                                                    className: C.roleTooltipItem,
                                                    role: l[A],
                                                    guildId: e.guildId
                                                },
                                                A
                                            )
                                        ),
                                        I &&
                                            (0, n.jsx)(a.ua7, {
                                                'aria-label': d.intl.string(d.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: d.intl.string(d.t.ljnBlp),
                                                children: (A) => {
                                                    let { onMouseEnter: e, onMouseLeave: t } = A;
                                                    return (0, n.jsx)(a.P3F, {
                                                        className: C.addRoleContainer,
                                                        onClick: M,
                                                        onMouseEnter: e,
                                                        onMouseLeave: t,
                                                        children: (0, n.jsx)(a.oFk, {
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
                              : (0, n.jsx)('div', {
                                    className: C.noRoles,
                                    children: (0, n.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        children: d.intl.string(d.t.nZfHsb)
                                    })
                                })
                  })
              })
          });
}
