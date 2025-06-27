n.d(t, { Z: () => x }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(481060),
    c = n(285173),
    u = n(422559),
    d = n(485386),
    p = n(430824),
    h = n(233608),
    f = n(776767),
    m = n(351127),
    g = n(50493),
    b = n(981631),
    _ = n(388032),
    y = n(514983);
function C(e) {
    var t, n;
    let { permission: i, roleIds: l, guild: p, specMap: h } = e,
        f = b.Plq[i],
        g = null != (n = null == (t = h[f.toString()]) ? void 0 : t.title) ? n : (0, u.wt)(f),
        C = m._o.has(f),
        x = (0, a.e7)([d.Z], () => d.Z.getRoles(p.id));
    return (0, r.jsx)(s.ua7, {
        'aria-label': _.intl.string(_.t['0g8Xd3']),
        tooltipClassName: y.roleTooltipContainer,
        tooltipContentClassName: y.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    children: C ? _.intl.string(_.t['GEuu/P']) : _.intl.string(_.t.wgGiCg)
                }),
                l.map((e) =>
                    (0, r.jsx)(
                        'div',
                        {
                            className: y.roleTooltipItem,
                            children: (0, r.jsx)(c.Z, {
                                role: x[e],
                                guildId: p.id
                            })
                        },
                        e
                    )
                )
            ]
        }),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(s.P3F, {
                className: o()(y.permissionChiplet, { [y.elevatedPermission]: C }),
                onMouseEnter: t,
                onMouseLeave: n,
                children: [
                    C &&
                        (0, r.jsx)(s.tQf, {
                            size: 'custom',
                            width: 16,
                            height: 16,
                            color: s.TVs.colors.TEXT_BRAND
                        }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: g
                    })
                ]
            });
        }
    });
}
let x = i.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        l = (0, a.e7)([p.Z], () => p.Z.getGuild(t.guildId), [t.guildId]),
        c = (0, m.B2)(t.userId, t.guildId, m.Qn),
        u = (0, m.B2)(t.userId, t.guildId, m.pd),
        d = Object.keys(c).length,
        x = Object.keys(u).length,
        v = i.useMemo(() => (null != l ? h.Z.getGuildPermissionSpecMap(l) : null), [l]),
        j = i.useMemo(() => (null != l ? h.Z.generateGuildPermissionSpec(l) : null), [l]),
        O = i.useMemo(() => {
            if (null == l || null == v) return null;
            if (0 === d)
                return (0, r.jsx)('div', {
                    className: o()(y.permissionChiplet, y.noModPerms),
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-feedback-positive',
                        children: _.intl.string(_.t.sXhykZ)
                    })
                });
            let e = [];
            return (
                null == j ||
                    j.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                i = m.pd.find((e) => b.Plq[e] === n);
                            if (null == i) return;
                            let o = c[i];
                            null != o &&
                                e.push(
                                    (0, r.jsx)(
                                        C,
                                        {
                                            permission: i,
                                            roleIds: o,
                                            guild: l,
                                            specMap: v
                                        },
                                        i
                                    )
                                );
                        });
                    }),
                e
            );
        }, [l, d, c, j, v]);
    return null == l
        ? null
        : (0, r.jsx)(s.xJW, {
              title: (0, r.jsxs)('div', {
                  className: y.headerContainer,
                  children: [
                      (0, r.jsx)(s.Text, {
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: _.intl.string(_.t.ZCq2nJ)
                      }),
                      (0, r.jsxs)(s.P3F, {
                          className: y.viewAllPermissions,
                          onClick: () => n(g.k.PERMISSIONS),
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: _.intl.format(_.t['0x6aTk'], { count: x })
                              }),
                              (0, r.jsx)(s.Fbu, {
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          ]
                      })
                  ]
              }),
              children: (0, r.jsx)(f.WM, {
                  children: (0, r.jsx)(f._2, {
                      description: (0, r.jsx)('div', {
                          className: y.permissionsContainer,
                          children: O
                      })
                  })
              })
          });
});
