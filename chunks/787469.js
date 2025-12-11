n.d(t, { Z: () => N });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    o = n(28664),
    u = n(481060),
    c = n(893966),
    E = n(472596),
    d = n(285173),
    _ = n(485386),
    A = n(430824),
    T = n(496675),
    I = n(776767),
    m = n(981631),
    f = n(388032),
    g = n(280533);
function N(e) {
    let { member: t } = e,
        n = (0, s.e7)([A.Z], () => A.Z.getGuild(t.guildId)),
        i = (0, s.e7)([_.Z], () => _.Z.getSortedRoles(t.guildId)),
        N = l.useMemo(
            () => i.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, i],
        ),
        h = (0, s.e7)([c.Z], () => c.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        O = (0, E.zq)(h),
        R = (0, E.vN)(t),
        S = (0, s.e7)([T.Z], () => T.Z.can(m.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(u.gNt, {
              label: f.intl.string(f.t["LPJmL/"]),
              children: (0, r.jsx)(I.WM, {
                  children: (0, r.jsx)(I._2, {
                      description:
                          t.roles.length > 0 || S
                              ? (0, r.jsxs)("div", {
                                    className: g.roleContainer,
                                    children: [
                                        (0, r.jsx)(o.u, {
                                            asContainer: !0,
                                            "aria-label": f.intl.string(f.t["0g8Xd/"]),
                                            text: f.intl.string(f.t["93S+lG"]),
                                            children: (0, r.jsx)(u.P3F, {
                                                children: (0, r.jsx)(d.Z, {
                                                    className: a()(g.roleTooltipItem, g.highestRole),
                                                    role: O,
                                                    guildId: t.guildId,
                                                }),
                                            }),
                                        }),
                                        N.map((e) =>
                                            (0, r.jsx)(
                                                d.Z,
                                                {
                                                    className: g.roleTooltipItem,
                                                    role: e,
                                                    guildId: t.guildId,
                                                },
                                                e.id,
                                            ),
                                        ),
                                        S &&
                                            (0, r.jsx)(o.u, {
                                                asContainer: !0,
                                                "aria-label": f.intl.string(f.t.ljnBlo),
                                                text: f.intl.string(f.t.ljnBlo),
                                                children: (0, r.jsx)(u.P3F, {
                                                    onClick: R,
                                                    className: g.addRoleContainer,
                                                    children: (0, r.jsx)(u.oFk, {
                                                        size: "custom",
                                                        color: "currentColor",
                                                        className: g.addRoleIcon,
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                }),
                                            }),
                                    ],
                                })
                              : (0, r.jsx)("div", {
                                    className: g.noRoles,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: f.intl.string(f.t.nZfHsf),
                                    }),
                                }),
                  }),
              }),
          });
}
