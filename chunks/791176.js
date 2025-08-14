n.d(t, { Z: () => f }), n(539854);
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
    m = n(50493),
    I = n(981631),
    g = n(388032),
    N = n(536037);
function h(e) {
    var t, n;
    let { permission: l, roleIds: i, guild: d, specMap: _ } = e,
        A = I.Plq[l],
        m = null != (n = null == (t = _[A.toString()]) ? void 0 : t.title) ? n : (0, c.wt)(A),
        h = T._o.has(A),
        f = (0, a.Wu)([E.Z], () => E.Z.getManyRoles(d.id, i), [d.id, i]);
    return (0, r.jsx)(o.ua7, {
        "aria-label": g.intl.string(g.t["0g8Xd3"]),
        tooltipClassName: N.roleTooltipContainer,
        tooltipContentClassName: N.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: h ? g.intl.string(g.t["GEuu/P"]) : g.intl.string(g.t.wgGiCg),
                }),
                f.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: N.roleTooltipItem,
                            children: (0, r.jsx)(u.Z, {
                                role: e,
                                guildId: d.id,
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
                className: s()(N.permissionChiplet, { [N.elevatedPermission]: h }),
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
                        children: m,
                    }),
                ],
            });
        },
    });
}
let f = l.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        i = (0, a.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        u = (0, T.B2)(t.userId, t.guildId, T.Qn),
        c = (0, T.B2)(t.userId, t.guildId, T.pd),
        E = Object.keys(u).length,
        f = Object.keys(c).length,
        O = l.useMemo(() => (null != i ? _.Z.getGuildPermissionSpecMap(i) : null), [i]),
        p = l.useMemo(() => (null != i ? _.Z.generateGuildPermissionSpec(i) : null), [i]),
        R = l.useMemo(() => {
            if (null == i || null == O) return null;
            if (0 === E)
                return (0, r.jsx)("div", {
                    className: s()(N.permissionChiplet, N.noModPerms),
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
                                l = T.pd.find((e) => I.Plq[e] === n);
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
                                            specMap: O,
                                        },
                                        l,
                                    ),
                                );
                        });
                    }),
                e
            );
        }, [i, E, u, p, O]);
    return null == i
        ? null
        : (0, r.jsx)(o.xJW, {
              title: (0, r.jsxs)("div", {
                  className: N.headerContainer,
                  children: [
                      (0, r.jsx)(o.Text, {
                          variant: "eyebrow",
                          color: "header-secondary",
                          children: g.intl.string(g.t.ZCq2nJ),
                      }),
                      (0, r.jsxs)(o.P3F, {
                          className: N.viewAllPermissions,
                          onClick: () => n(m.k.PERMISSIONS),
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-normal",
                                  children: g.intl.format(g.t["0x6aTk"], { count: f }),
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
                          className: N.permissionsContainer,
                          children: R,
                      }),
                  }),
              }),
          });
});
