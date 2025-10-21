n.d(t, { Z: () => f }), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(399606),
    o = n(28664),
    u = n(481060),
    c = n(285173),
    E = n(422559),
    d = n(485386),
    _ = n(430824),
    A = n(233608),
    T = n(776767),
    I = n(351127),
    m = n(50493),
    g = n(981631),
    N = n(388032),
    h = n(536037);
function O(e) {
    var t, n;
    let { permission: l, roleIds: i, guild: _, specMap: A } = e,
        T = g.Plq[l],
        m = null != (n = null == (t = A[T.toString()]) ? void 0 : t.title) ? n : (0, E.wt)(T),
        O = I._o.has(T),
        f = (0, a.Wu)([d.Z], () => d.Z.getManyRoles(_.id, i), [_.id, i]);
    return (0, r.jsx)(o.u, {
        "aria-label": N.intl.string(N.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    children: O ? N.intl.string(N.t["GEuu/O"]) : N.intl.string(N.t.wgGiCk),
                }),
                f.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: h.roleTooltipItem,
                            children: (0, r.jsx)(c.Z, {
                                role: e,
                                guildId: _.id,
                            }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
        children: (0, r.jsxs)(u.P3F, {
            className: s()(h.permissionChiplet, { [h.elevatedPermission]: O }),
            children: [
                O &&
                    (0, r.jsx)(u.tQf, {
                        size: "custom",
                        width: 16,
                        height: 16,
                        color: u.TVs.colors.TEXT_BRAND,
                    }),
                (0, r.jsx)(u.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-normal",
                    children: m,
                }),
            ],
        }),
    });
}
let f = l.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        i = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guildId), [t.guildId]),
        o = (0, I.B2)(t.userId, t.guildId, I.Qn),
        c = (0, I.B2)(t.userId, t.guildId, I.pd),
        E = Object.keys(o).length,
        d = Object.keys(c).length,
        f = l.useMemo(() => (null != i ? A.Z.getGuildPermissionSpecMap(i) : null), [i]),
        R = l.useMemo(() => (null != i ? A.Z.generateGuildPermissionSpec(i) : null), [i]),
        S = l.useMemo(() => {
            if (null == i || null == f) return null;
            if (0 === E)
                return (0, r.jsx)("div", {
                    className: s()(h.permissionChiplet, h.noModPerms),
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: N.intl.string(N.t.sXhykX),
                    }),
                });
            let e = [];
            return (
                null == R ||
                    R.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                l = I.pd.find((e) => g.Plq[e] === n);
                            if (null == l) return;
                            let s = o[l];
                            null != s &&
                                e.push(
                                    (0, r.jsx)(
                                        O,
                                        {
                                            permission: l,
                                            roleIds: s,
                                            guild: i,
                                            specMap: f,
                                        },
                                        l,
                                    ),
                                );
                        });
                    }),
                e
            );
        }, [i, E, o, R, f]);
    return null == i
        ? null
        : (0, r.jsx)(u.xJW, {
              title: (0, r.jsxs)("div", {
                  className: h.headerContainer,
                  children: [
                      (0, r.jsx)(u.Text, {
                          variant: "eyebrow",
                          color: "header-secondary",
                          children: N.intl.string(N.t.ZCq2nC),
                      }),
                      (0, r.jsxs)(u.P3F, {
                          className: h.viewAllPermissions,
                          onClick: () => n(m.k.PERMISSIONS),
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-normal",
                                  children: N.intl.format(N.t["0x6aTm"], { count: d }),
                              }),
                              (0, r.jsx)(u.Fbu, {
                                  size: "custom",
                                  width: 16,
                                  height: 16,
                              }),
                          ],
                      }),
                  ],
              }),
              children: (0, r.jsx)(T.WM, {
                  children: (0, r.jsx)(T._2, {
                      description: (0, r.jsx)("div", {
                          className: h.permissionsContainer,
                          children: S,
                      }),
                  }),
              }),
          });
});
