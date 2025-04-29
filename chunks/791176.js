n.d(t, { Z: () => C }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(481060),
    c = n(285173),
    u = n(422559),
    d = n(430824),
    p = n(233608),
    h = n(776767),
    f = n(351127),
    m = n(50493),
    g = n(981631),
    b = n(388032),
    _ = n(514983);
function y(e) {
    var t, n;
    let { permission: i, roleIds: l, guild: p, specMap: h } = e,
        m = g.Plq[i],
        y = null != (n = null == (t = h[m.toString()]) ? void 0 : t.title) ? n : (0, u.wt)(m),
        C = f._o.has(m),
        x = (0, a.e7)([d.Z], () => d.Z.getRoles(p.id));
    return (0, r.jsx)(s.ua7, {
        'aria-label': b.intl.string(b.t['0g8Xd3']),
        tooltipClassName: _.roleTooltipContainer,
        tooltipContentClassName: _.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    children: C ? b.intl.string(b.t['GEuu/P']) : b.intl.string(b.t.wgGiCg)
                }),
                l.map((e) =>
                    (0, r.jsx)(
                        'div',
                        {
                            className: _.roleTooltipItem,
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
                className: o()(_.permissionChiplet, { [_.elevatedPermission]: C }),
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
                        children: y
                    })
                ]
            });
        }
    });
}
let C = i.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        l = (0, a.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        c = (0, f.B2)(t.userId, t.guildId, f.Qn),
        u = (0, f.B2)(t.userId, t.guildId, f.pd),
        C = Object.keys(c).length,
        x = Object.keys(u).length,
        v = i.useMemo(() => (null != l ? p.Z.getGuildPermissionSpecMap(l) : null), [l]),
        j = i.useMemo(() => (null != l ? p.Z.generateGuildPermissionSpec(l) : null), [l]),
        O = i.useMemo(() => {
            if (null == l || null == v) return null;
            if (0 === C)
                return (0, r.jsx)('div', {
                    className: o()(_.permissionChiplet, _.noModPerms),
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-positive',
                        children: b.intl.string(b.t.sXhykZ)
                    })
                });
            let e = [];
            return (
                null == j ||
                    j.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                i = f.pd.find((e) => g.Plq[e] === n);
                            if (null == i) return;
                            let o = c[i];
                            null != o &&
                                e.push(
                                    (0, r.jsx)(
                                        y,
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
        }, [l, C, c, j, v]);
    return null == l
        ? null
        : (0, r.jsx)(s.xJW, {
              title: (0, r.jsxs)('div', {
                  className: _.headerContainer,
                  children: [
                      (0, r.jsx)(s.Text, {
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: b.intl.string(b.t.ZCq2nJ)
                      }),
                      (0, r.jsxs)(s.P3F, {
                          className: _.viewAllPermissions,
                          onClick: () => n(m.k.PERMISSIONS),
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: b.intl.format(b.t['0x6aTk'], { count: x })
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
              children: (0, r.jsx)(h.WM, {
                  children: (0, r.jsx)(h._2, {
                      description: (0, r.jsx)('div', {
                          className: _.permissionsContainer,
                          children: O
                      })
                  })
              })
          });
});
