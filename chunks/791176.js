n.d(t, { Z: () => O }), n(539854);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
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
    f = n(981631),
    g = n(388032),
    N = n(471302);
function h(e) {
    var t, n;
    let { permission: l, roleIds: i, guild: _, specMap: A } = e,
        T = f.Plq[l],
        m = null != (n = null == (t = A[T.toString()]) ? void 0 : t.title) ? n : (0, E.wt)(T),
        h = I._o.has(T),
        O = (0, s.Wu)([d.Z], () => d.Z.getManyRoles(_.id, i), [_.id, i]);
    return (0, r.jsx)(o.u, {
        "aria-label": g.intl.string(g.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    children: h ? g.intl.string(g.t["GEuu/O"]) : g.intl.string(g.t.wgGiCk),
                }),
                O.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: N.roleTooltipItem,
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
            className: a()(N.permissionChiplet, { [N.elevatedPermission]: h }),
            children: [
                h &&
                    (0, r.jsx)(u.tQf, {
                        size: "custom",
                        width: 16,
                        height: 16,
                        color: u.TVs.colors.TEXT_BRAND,
                    }),
                (0, r.jsx)(u.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: m,
                }),
            ],
        }),
    });
}
let O = l.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        i = (0, s.e7)([_.Z], () => _.Z.getGuild(t.guildId), [t.guildId]),
        o = (0, I.B2)(t.userId, t.guildId, I.Qn),
        c = (0, I.B2)(t.userId, t.guildId, I.pd),
        E = Object.keys(o).length,
        d = Object.keys(c).length,
        O = l.useMemo(() => (null != i ? A.Z.getGuildPermissionSpecMap(i) : null), [i]),
        R = l.useMemo(() => (null != i ? A.Z.generateGuildPermissionSpec(i) : null), [i]),
        S = l.useMemo(() => {
            if (null == i || null == O) return null;
            if (0 === E)
                return (0, r.jsx)("div", {
                    className: a()(N.permissionChiplet, N.noModPerms),
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: g.intl.string(g.t.sXhykX),
                    }),
                });
            let e = [];
            return (
                null == R ||
                    R.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                l = I.pd.find((e) => f.Plq[e] === n);
                            if (null == l) return;
                            let a = o[l];
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
        }, [i, E, o, R, O]);
    return null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: N.headerContainer,
                      children: [
                          (0, r.jsx)(u.Text, {
                              variant: "eyebrow",
                              color: "text-default",
                              children: g.intl.string(g.t.ZCq2nC),
                          }),
                          (0, r.jsxs)(u.P3F, {
                              className: N.viewAllPermissions,
                              onClick: () => n(m.k.PERMISSIONS),
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "eyebrow",
                                      color: "interactive-text-default",
                                      children: g.intl.format(g.t["0x6aTm"], { count: d }),
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
                  (0, r.jsx)(T.WM, {
                      children: (0, r.jsx)(T._2, {
                          description: (0, r.jsx)("div", {
                              className: N.permissionsContainer,
                              children: S,
                          }),
                      }),
                  }),
              ],
          });
});
