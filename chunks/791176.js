n.d(t, { Z: () => N }), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    o = n(481060),
    u = n(285173),
    c = n(422559),
    d = n(485386),
    E = n(430824),
    _ = n(233608),
    A = n(776767),
    m = n(351127),
    T = n(50493),
    I = n(981631),
    g = n(388032),
    f = n(536037);
function h(e) {
    var t, n;
    let { permission: l, roleIds: i, guild: E, specMap: _ } = e,
        A = I.Plq[l],
        T = null != (n = null == (t = _[A.toString()]) ? void 0 : t.title) ? n : (0, c.wt)(A),
        h = m._o.has(A),
        N = (0, s.Wu)([d.Z], () => d.Z.getManyRoles(E.id, i), [E.id, i]);
    return (0, r.jsx)(o.ua7, {
        "aria-label": g.intl.string(g.t["0g8Xd3"]),
        tooltipClassName: f.roleTooltipContainer,
        tooltipContentClassName: f.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: h ? g.intl.string(g.t["GEuu/P"]) : g.intl.string(g.t.wgGiCg),
                }),
                N.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: f.roleTooltipItem,
                            children: (0, r.jsx)(u.Z, {
                                role: e,
                                guildId: E.id,
                            }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(o.P3F, {
                className: a()(f.permissionChiplet, { [f.elevatedPermission]: h }),
                onMouseEnter: t,
                onMouseLeave: n,
                children: [
                    h &&
                        (0, r.jsx)(o.tQf, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: o.TVs.colors.TEXT_BRAND,
                        }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "interactive-normal",
                        children: T,
                    }),
                ],
            });
        },
    });
}
let N = l.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        i = (0, s.e7)([E.Z], () => E.Z.getGuild(t.guildId), [t.guildId]),
        u = (0, m.B2)(t.userId, t.guildId, m.Qn),
        c = (0, m.B2)(t.userId, t.guildId, m.pd),
        d = Object.keys(u).length,
        N = Object.keys(c).length,
        O = l.useMemo(() => (null != i ? _.Z.getGuildPermissionSpecMap(i) : null), [i]),
        p = l.useMemo(() => (null != i ? _.Z.generateGuildPermissionSpec(i) : null), [i]),
        R = l.useMemo(() => {
            if (null == i || null == O) return null;
            if (0 === d)
                return (0, r.jsx)("div", {
                    className: a()(f.permissionChiplet, f.noModPerms),
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: g.intl.string(g.t.sXhykZ),
                    }),
                });
            let e = [];
            return (
                null == p ||
                    p.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                l = m.pd.find((e) => I.Plq[e] === n);
                            if (null == l) return;
                            let a = u[l];
                            null != a &&
                                e.push(
                                    (0, r.jsx)(
                                        h,
                                        {
                                            permission: l,
                                            roleIds: a,
                                            guild: i,
                                            specMap: O,
                                        },
                                        l,
                                    ),
                                );
                        });
                    }),
                e
            );
        }, [i, d, u, p, O]);
    return null == i
        ? null
        : (0, r.jsx)(o.xJW, {
              title: (0, r.jsxs)("div", {
                  className: f.headerContainer,
                  children: [
                      (0, r.jsx)(o.Text, {
                          variant: "eyebrow",
                          color: "header-secondary",
                          children: g.intl.string(g.t.ZCq2nJ),
                      }),
                      (0, r.jsxs)(o.P3F, {
                          className: f.viewAllPermissions,
                          onClick: () => n(T.k.PERMISSIONS),
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-normal",
                                  children: g.intl.format(g.t["0x6aTk"], { count: N }),
                              }),
                              (0, r.jsx)(o.Fbu, {
                                  size: "custom",
                                  width: 16,
                                  height: 16,
                              }),
                          ],
                      }),
                  ],
              }),
              children: (0, r.jsx)(A.WM, {
                  children: (0, r.jsx)(A._2, {
                      description: (0, r.jsx)("div", {
                          className: f.permissionsContainer,
                          children: R,
                      }),
                  }),
              }),
          });
});
