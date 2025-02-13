n.d(t, { Z: () => v }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(388032),
    C = n(369188);
function x(e) {
    var t, n;
    let { permission: l, roleIds: a, guild: h, specMap: p } = e,
        f = g.Plq[l],
        x = null !== (n = null === (t = p[f.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, d.wt)(f),
        v = m._o.has(f),
        E = (0, s.e7)([u.Z], () => u.Z.getRoles(h.id));
    return (0, i.jsx)(o.ua7, {
        'aria-label': _.intl.string(_.t['0g8Xd3']),
        tooltipClassName: C.roleTooltipContainer,
        tooltipContentClassName: C.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: v ? _.intl.string(_.t['GEuu/P']) : _.intl.string(_.t.wgGiCg)
                }),
                a.map((e) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: C.roleTooltipItem,
                            children: (0, i.jsx)(c.Z, {
                                role: E[e],
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
            return (0, i.jsxs)(o.P3F, {
                className: r()(C.permissionChiplet, { [C.elevatedPermission]: v }),
                onMouseEnter: t,
                onMouseLeave: n,
                children: [
                    v &&
                        (0, i.jsx)(o.tQf, {
                            size: 'custom',
                            width: 16,
                            height: 16,
                            color: o.TVs.colors.TEXT_BRAND
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: x
                    })
                ]
            });
        }
    });
}
let v = l.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        a = (0, s.e7)([u.Z], () => u.Z.getGuild(t.guildId), [t.guildId]),
        c = (0, m.B2)(t.userId, t.guildId, m.Qn),
        d = (0, m.B2)(t.userId, t.guildId, m.pd),
        v = Object.keys(c).length,
        E = Object.keys(d).length,
        I = l.useMemo(() => (null != a ? h.Z.getGuildPermissionSpecMap(a) : null), [a]),
        b = l.useMemo(() => (null != a ? h.Z.generateGuildPermissionSpec(a) : null), [a]),
        Z = l.useMemo(() => {
            if (null == a || null == I) return null;
            if (0 === v)
                return (0, i.jsx)('div', {
                    className: r()(C.permissionChiplet, C.noModPerms),
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-positive',
                        children: _.intl.string(_.t.sXhykZ)
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
                            let r = c[l];
                            null != r &&
                                e.push(
                                    (0, i.jsx)(
                                        x,
                                        {
                                            permission: l,
                                            roleIds: r,
                                            guild: a,
                                            specMap: I
                                        },
                                        l
                                    )
                                );
                        });
                    }),
                e
            );
        }, [a, v, c, b, I]);
    return null == a
        ? null
        : (0, i.jsx)(o.xJW, {
              title: (0, i.jsxs)('div', {
                  className: C.headerContainer,
                  children: [
                      (0, i.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: _.intl.string(_.t.ZCq2nJ)
                      }),
                      (0, i.jsxs)(o.P3F, {
                          className: C.viewAllPermissions,
                          onClick: () => n(f.k.PERMISSIONS),
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: _.intl.format(_.t['0x6aTk'], { count: E })
                              }),
                              (0, i.jsx)(o.Fbu, {
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
                          className: C.permissionsContainer,
                          children: Z
                      })
                  })
              })
          });
});
