n.d(t, { Z: () => h });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    a = n(399606),
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
    g = n(388032),
    N = n(87819);
function h(e) {
    let { member: t } = e,
        n = (0, a.e7)([A.Z], () => A.Z.getGuild(t.guildId)),
        i = (0, a.e7)([_.Z], () => _.Z.getSortedRoles(t.guildId)),
        h = l.useMemo(
            () => i.filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id)),
            [t.roles, t.highestRoleId, i],
        ),
        O = (0, a.e7)([c.Z], () => c.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]),
        f = (0, E.zq)(O),
        R = (0, E.vN)(t),
        S = (0, a.e7)([T.Z], () => T.Z.can(m.Plq.MANAGE_ROLES, n), [n]);
    return null == n
        ? null
        : (0, r.jsx)(u.gNt, {
              label: g.intl.string(g.t["LPJmL/"]),
              children: (0, r.jsx)(I.WM, {
                  children: (0, r.jsx)(I._2, {
                      description:
                          t.roles.length > 0 || S
                              ? (0, r.jsxs)("div", {
                                    className: N.roleContainer,
                                    children: [
                                        (0, r.jsx)(o.u, {
                                            asContainer: !0,
                                            "aria-label": g.intl.string(g.t["0g8Xd/"]),
                                            text: g.intl.string(g.t["93S+lG"]),
                                            children: (0, r.jsx)(u.P3F, {
                                                children: (0, r.jsx)(d.Z, {
                                                    className: s()(N.roleTooltipItem, N.highestRole),
                                                    role: f,
                                                    guildId: t.guildId,
                                                }),
                                            }),
                                        }),
                                        h.map((e) =>
                                            (0, r.jsx)(
                                                d.Z,
                                                {
                                                    className: N.roleTooltipItem,
                                                    role: e,
                                                    guildId: t.guildId,
                                                },
                                                e.id,
                                            ),
                                        ),
                                        S &&
                                            (0, r.jsx)(o.u, {
                                                asContainer: !0,
                                                "aria-label": g.intl.string(g.t.ljnBlo),
                                                text: g.intl.string(g.t.ljnBlo),
                                                children: (0, r.jsx)(u.P3F, {
                                                    onClick: R,
                                                    className: N.addRoleContainer,
                                                    children: (0, r.jsx)(u.oFk, {
                                                        size: "custom",
                                                        color: "currentColor",
                                                        className: N.addRoleIcon,
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                }),
                                            }),
                                    ],
                                })
                              : (0, r.jsx)("div", {
                                    className: N.noRoles,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: g.intl.string(g.t.nZfHsf),
                                    }),
                                }),
                  }),
              }),
          });
}
