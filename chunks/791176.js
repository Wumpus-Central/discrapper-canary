(n.d(t, { Z: () => O }), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(399606),
    o = n(481060),
    u = n(285173),
    c = n(422559),
    d = n(485386),
    E = n(430824),
    _ = n(233608),
    A = n(776767),
    m = n(351127),
    T = n(50493),
    f = n(981631),
    g = n(388032),
    I = n(514983);
function h(e) {
    var t, n;
    let { permission: l, roleIds: i, guild: E, specMap: _ } = e,
        A = f.Plq[l],
        T = null != (n = null == (t = _[A.toString()]) ? void 0 : t.title) ? n : (0, c.wt)(A),
        h = m._o.has(A),
        O = (0, a.e7)([d.Z], () => d.Z.getRoles(E.id));
    return (0, r.jsx)(o.ua7, {
        'aria-label': g.intl.string(g.t['0g8Xd3']),
        tooltipClassName: I.roleTooltipContainer,
        tooltipContentClassName: I.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: h ? g.intl.string(g.t['GEuu/P']) : g.intl.string(g.t.wgGiCg)
                }),
                i.map((e) =>
                    (0, r.jsx)(
                        'div',
                        {
                            className: I.roleTooltipItem,
                            children: (0, r.jsx)(u.Z, {
                                role: O[e],
                                guildId: E.id
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
                className: s()(I.permissionChiplet, { [I.elevatedPermission]: h }),
                onMouseEnter: t,
                onMouseLeave: n,
                children: [
                    h &&
                        (0, r.jsx)(o.tQf, {
                            size: 'custom',
                            width: 16,
                            height: 16,
                            color: o.TVs.colors.TEXT_BRAND
                        }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: T
                    })
                ]
            });
        }
    });
}
let O = l.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        i = (0, a.e7)([E.Z], () => E.Z.getGuild(t.guildId), [t.guildId]),
        u = (0, m.B2)(t.userId, t.guildId, m.Qn),
        c = (0, m.B2)(t.userId, t.guildId, m.pd),
        d = Object.keys(u).length,
        O = Object.keys(c).length,
        N = l.useMemo(() => (null != i ? _.Z.getGuildPermissionSpecMap(i) : null), [i]),
        p = l.useMemo(() => (null != i ? _.Z.generateGuildPermissionSpec(i) : null), [i]),
        R = l.useMemo(() => {
            if (null == i || null == N) return null;
            if (0 === d)
                return (0, r.jsx)('div', {
                    className: s()(I.permissionChiplet, I.noModPerms),
                    children: (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-feedback-positive',
                        children: g.intl.string(g.t.sXhykZ)
                    })
                });
            let e = [];
            return (
                null == p ||
                    p.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                l = m.pd.find((e) => f.Plq[e] === n);
                            if (null == l) return;
                            let s = u[l];
                            null != s &&
                                e.push(
                                    (0, r.jsx)(
                                        h,
                                        {
                                            permission: l,
                                            roleIds: s,
                                            guild: i,
                                            specMap: N
                                        },
                                        l
                                    )
                                );
                        });
                    }),
                e
            );
        }, [i, d, u, p, N]);
    return null == i
        ? null
        : (0, r.jsx)(o.xJW, {
              title: (0, r.jsxs)('div', {
                  className: I.headerContainer,
                  children: [
                      (0, r.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: g.intl.string(g.t.ZCq2nJ)
                      }),
                      (0, r.jsxs)(o.P3F, {
                          className: I.viewAllPermissions,
                          onClick: () => n(T.k.PERMISSIONS),
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: g.intl.format(g.t['0x6aTk'], { count: O })
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
                          className: I.permissionsContainer,
                          children: R
                      })
                  })
              })
          });
});
