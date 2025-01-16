n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(481060),
    c = n(285173),
    d = n(422559),
    u = n(430824),
    h = n(233608),
    p = n(776767),
    m = n(351127),
    f = n(50493),
    g = n(981631),
    C = n(388032),
    x = n(944454);
function v(e) {
    var t, n;
    let { permission: l, roleIds: r, guild: h, specMap: p } = e,
        f = g.Plq[l],
        v = null !== (n = null === (t = p[f.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, d.wt)(f),
        _ = m._o.has(f),
        I = (0, s.e7)([u.Z], () => u.Z.getRoles(h.id));
    return (0, i.jsx)(o.Tooltip, {
        'aria-label': C.intl.string(C.t['0g8Xd3']),
        tooltipClassName: x.roleTooltipContainer,
        tooltipContentClassName: x.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: _ ? C.intl.string(C.t['GEuu/P']) : C.intl.string(C.t.wgGiCg)
                }),
                r.map((e) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: x.roleTooltipItem,
                            children: (0, i.jsx)(c.Z, {
                                role: I[e],
                                guildId: h.id
                            })
                        },
                        e
                    )
                )
            ]
        }),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsxs)(o.Clickable, {
                className: a()(x.permissionChiplet, { [x.elevatedPermission]: _ }),
                onMouseEnter: t,
                onMouseLeave: n,
                children: [
                    _ &&
                        (0, i.jsx)(o.ShieldLockIcon, {
                            size: 'custom',
                            width: 16,
                            height: 16,
                            color: o.tokens.colors.TEXT_BRAND
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: v
                    })
                ]
            });
        }
    });
}
t.Z = l.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        r = (0, s.e7)([u.Z], () => u.Z.getGuild(t.guildId), [t.guildId]),
        c = (0, m.B2)(t.userId, t.guildId, m.Qn),
        d = (0, m.B2)(t.userId, t.guildId, m.pd),
        _ = Object.keys(c).length,
        I = Object.keys(d).length,
        E = l.useMemo(() => (null != r ? h.Z.getGuildPermissionSpecMap(r) : null), [r]),
        b = l.useMemo(() => (null != r ? h.Z.generateGuildPermissionSpec(r) : null), [r]),
        Z = l.useMemo(() => {
            if (null == r || null == E) return null;
            if (0 === _)
                return (0, i.jsx)('div', {
                    className: a()(x.permissionChiplet, x.noModPerms),
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-positive',
                        children: C.intl.string(C.t.sXhykZ)
                    })
                });
            let e = [];
            return (
                null == b ||
                    b.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                l = m.pd.find((e) => g.Plq[e] === n);
                            if (null == l) return;
                            let a = c[l];
                            if (null != a)
                                e.push(
                                    (0, i.jsx)(
                                        v,
                                        {
                                            permission: l,
                                            roleIds: a,
                                            guild: r,
                                            specMap: E
                                        },
                                        l
                                    )
                                );
                        });
                    }),
                e
            );
        }, [r, _, c, b, E]);
    return null == r
        ? null
        : (0, i.jsx)(o.FormItem, {
              title: (0, i.jsxs)('div', {
                  className: x.headerContainer,
                  children: [
                      (0, i.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: C.intl.string(C.t.ZCq2nJ)
                      }),
                      (0, i.jsxs)(o.Clickable, {
                          className: x.viewAllPermissions,
                          onClick: () => n(f.k.PERMISSIONS),
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: C.intl.format(C.t['0x6aTk'], { count: I })
                              }),
                              (0, i.jsx)(o.ChevronSmallRightIcon, {
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          ]
                      })
                  ]
              }),
              children: (0, i.jsx)(p.WM, {
                  children: (0, i.jsx)(p._2, {
                      description: (0, i.jsx)('div', {
                          className: x.permissionsContainer,
                          children: Z
                      })
                  })
              })
          });
});
