(n.d(t, { Z: () => N }), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(399606),
    o = n(481060),
    u = n(285173),
    c = n(422559),
    E = n(485386),
    d = n(430824),
    _ = n(233608),
    A = n(776767),
    T = n(351127),
    I = n(50493),
    g = n(981631),
    m = n(388032),
    f = n(514983);
function O(e) {
    var t, n;
    let { permission: l, roleIds: i, guild: d, specMap: _ } = e,
        A = g.Plq[l],
        I = null != (n = null == (t = _[A.toString()]) ? void 0 : t.title) ? n : (0, c.wt)(A),
        O = T._o.has(A),
        N = (0, a.e7)([E.Z], () => E.Z.getRoles(d.id));
    return (0, r.jsx)(o.ua7, {
        'aria-label': m.intl.string(m.t['0g8Xd3']),
        tooltipClassName: f.roleTooltipContainer,
        tooltipContentClassName: f.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: O ? m.intl.string(m.t['GEuu/P']) : m.intl.string(m.t.wgGiCg)
                }),
                i.map((e) =>
                    (0, r.jsx)(
                        'div',
                        {
                            className: f.roleTooltipItem,
                            children: (0, r.jsx)(u.Z, {
                                role: N[e],
                                guildId: d.id
                            })
                        },
                        e
                    )
                )
            ]
        }),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(o.P3F, {
                className: s()(f.permissionChiplet, { [f.elevatedPermission]: O }),
                onMouseEnter: t,
                onMouseLeave: n,
                children: [
                    O &&
                        (0, r.jsx)(o.tQf, {
                            size: 'custom',
                            width: 16,
                            height: 16,
                            color: o.TVs.colors.TEXT_BRAND
                        }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: I
                    })
                ]
            });
        }
    });
}
let N = l.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        i = (0, a.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        u = (0, T.B2)(t.userId, t.guildId, T.Qn),
        c = (0, T.B2)(t.userId, t.guildId, T.pd),
        E = Object.keys(u).length,
        N = Object.keys(c).length,
        h = l.useMemo(() => (null != i ? _.Z.getGuildPermissionSpecMap(i) : null), [i]),
        R = l.useMemo(() => (null != i ? _.Z.generateGuildPermissionSpec(i) : null), [i]),
        p = l.useMemo(() => {
            if (null == i || null == h) return null;
            if (0 === E)
                return (0, r.jsx)('div', {
                    className: s()(f.permissionChiplet, f.noModPerms),
                    children: (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-feedback-positive',
                        children: m.intl.string(m.t.sXhykZ)
                    })
                });
            let e = [];
            return (
                null == R ||
                    R.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                l = T.pd.find((e) => g.Plq[e] === n);
                            if (null == l) return;
                            let s = u[l];
                            null != s &&
                                e.push(
                                    (0, r.jsx)(
                                        O,
                                        {
                                            permission: l,
                                            roleIds: s,
                                            guild: i,
                                            specMap: h
                                        },
                                        l
                                    )
                                );
                        });
                    }),
                e
            );
        }, [i, E, u, R, h]);
    return null == i
        ? null
        : (0, r.jsx)(o.xJW, {
              title: (0, r.jsxs)('div', {
                  className: f.headerContainer,
                  children: [
                      (0, r.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: m.intl.string(m.t.ZCq2nJ)
                      }),
                      (0, r.jsxs)(o.P3F, {
                          className: f.viewAllPermissions,
                          onClick: () => n(I.k.PERMISSIONS),
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: m.intl.format(m.t['0x6aTk'], { count: N })
                              }),
                              (0, r.jsx)(o.Fbu, {
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          ]
                      })
                  ]
              }),
              children: (0, r.jsx)(A.WM, {
                  children: (0, r.jsx)(A._2, {
                      description: (0, r.jsx)('div', {
                          className: f.permissionsContainer,
                          children: p
                      })
                  })
              })
          });
});
