(t.d(e, { Z: () => D }), t(539854));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(399606),
    a = t(481060),
    o = t(285173),
    g = t(422559),
    f = t(485386),
    v = t(430824),
    c = t(233608),
    h = t(776767),
    E = t(351127),
    u = t(50493),
    d = t(981631),
    C = t(388032),
    B = t(514983);
function w(A) {
    var e, t;
    let { permission: r, roleIds: l, guild: v, specMap: c } = A,
        h = d.Plq[r],
        u = null != (t = null == (e = c[h.toString()]) ? void 0 : e.title) ? t : (0, g.wt)(h),
        w = E._o.has(h),
        D = (0, s.Wu)([f.Z], () => f.Z.getManyRoles(v.id, l), [v.id, l]);
    return (0, n.jsx)(a.ua7, {
        'aria-label': C.intl.string(C.t['0g8Xd3']),
        tooltipClassName: B.roleTooltipContainer,
        tooltipContentClassName: B.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    children: w ? C.intl.string(C.t['GEuu/P']) : C.intl.string(C.t.wgGiCg)
                }),
                D.map((A) =>
                    (0, n.jsx)(
                        'div',
                        {
                            className: B.roleTooltipItem,
                            children: (0, n.jsx)(o.Z, {
                                role: A,
                                guildId: v.id
                            })
                        },
                        A.id
                    )
                )
            ]
        }),
        children: (A) => {
            let { onMouseEnter: e, onMouseLeave: t } = A;
            return (0, n.jsxs)(a.P3F, {
                className: i()(B.permissionChiplet, { [B.elevatedPermission]: w }),
                onMouseEnter: e,
                onMouseLeave: t,
                children: [
                    w &&
                        (0, n.jsx)(a.tQf, {
                            size: 'custom',
                            width: 16,
                            height: 16,
                            color: a.TVs.colors.TEXT_BRAND
                        }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: u
                    })
                ]
            });
        }
    });
}
let D = r.memo(function (A) {
    let { member: e, onNavigate: t } = A,
        l = (0, s.e7)([v.Z], () => v.Z.getGuild(e.guildId), [e.guildId]),
        o = (0, E.B2)(e.userId, e.guildId, E.Qn),
        g = (0, E.B2)(e.userId, e.guildId, E.pd),
        f = Object.keys(o).length,
        D = Object.keys(g).length,
        M = r.useMemo(() => (null != l ? c.Z.getGuildPermissionSpecMap(l) : null), [l]),
        I = r.useMemo(() => (null != l ? c.Z.generateGuildPermissionSpec(l) : null), [l]),
        p = r.useMemo(() => {
            if (null == l || null == M) return null;
            if (0 === f)
                return (0, n.jsx)('div', {
                    className: i()(B.permissionChiplet, B.noModPerms),
                    children: (0, n.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-feedback-positive',
                        children: C.intl.string(C.t.sXhykZ)
                    })
                });
            let A = [];
            return (
                null == I ||
                    I.forEach((e) => {
                        e.permissions.forEach((e) => {
                            let t = e.flag,
                                r = E.pd.find((A) => d.Plq[A] === t);
                            if (null == r) return;
                            let i = o[r];
                            null != i &&
                                A.push(
                                    (0, n.jsx)(
                                        w,
                                        {
                                            permission: r,
                                            roleIds: i,
                                            guild: l,
                                            specMap: M
                                        },
                                        r
                                    )
                                );
                        });
                    }),
                A
            );
        }, [l, f, o, I, M]);
    return null == l
        ? null
        : (0, n.jsx)(a.xJW, {
              title: (0, n.jsxs)('div', {
                  className: B.headerContainer,
                  children: [
                      (0, n.jsx)(a.Text, {
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: C.intl.string(C.t.ZCq2nJ)
                      }),
                      (0, n.jsxs)(a.P3F, {
                          className: B.viewAllPermissions,
                          onClick: () => t(u.k.PERMISSIONS),
                          children: [
                              (0, n.jsx)(a.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: C.intl.format(C.t['0x6aTk'], { count: D })
                              }),
                              (0, n.jsx)(a.Fbu, {
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          ]
                      })
                  ]
              }),
              children: (0, n.jsx)(h.WM, {
                  children: (0, n.jsx)(h._2, {
                      description: (0, n.jsx)('div', {
                          className: B.permissionsContainer,
                          children: p
                      })
                  })
              })
          });
});
