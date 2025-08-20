t.d(e, { Z: () => B });
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    s = t(399606),
    a = t(481060),
    o = t(893966),
    g = t(472596),
    c = t(285173),
    f = t(485386),
    v = t(430824),
    h = t(496675),
    u = t(776767),
    d = t(981631),
    E = t(388032),
    C = t(87819);
function B(A) {
    let { member: e } = A,
        t = (0, s.e7)([v.Z], () => v.Z.getGuild(e.guildId)),
        l = (0, s.e7)([f.Z], () => f.Z.getSortedRoles(e.guildId)),
        B = r.useMemo(
            () => l.filter((A) => A.id !== e.highestRoleId && e.roles.includes(A.id)),
            [e.roles, e.highestRoleId, l],
        ),
        w = (0, s.e7)([o.Z], () => o.Z.getEnhancedMember(e.guildId, e.userId), [e.guildId, e.userId]),
        D = (0, g.zq)(w),
        M = (0, g.vN)(e),
        p = (0, s.e7)([h.Z], () => h.Z.can(d.Plq.MANAGE_ROLES, t), [t]);
    return null == t
        ? null
        : (0, n.jsx)(a.xJW, {
              title: E.intl.string(E.t.LPJmLy),
              titleClassName: C.infoTitle,
              children: (0, n.jsx)(u.WM, {
                  children: (0, n.jsx)(u._2, {
                      description:
                          e.roles.length > 0 || p
                              ? (0, n.jsxs)("div", {
                                    className: C.roleContainer,
                                    children: [
                                        (0, n.jsx)(a.ua7, {
                                            "aria-label": E.intl.string(E.t["0g8Xd3"]),
                                            allowOverflow: !0,
                                            text: E.intl.string(E.t["93S+lJ"]),
                                            children: (A) => {
                                                let { onMouseEnter: t, onMouseLeave: r } = A;
                                                return (0, n.jsx)(a.P3F, {
                                                    onMouseEnter: t,
                                                    onMouseLeave: r,
                                                    children: (0, n.jsx)(c.Z, {
                                                        className: i()(C.roleTooltipItem, C.highestRole),
                                                        role: D,
                                                        guildId: e.guildId,
                                                    }),
                                                });
                                            },
                                        }),
                                        B.map((A) =>
                                            (0, n.jsx)(
                                                c.Z,
                                                {
                                                    className: C.roleTooltipItem,
                                                    role: A,
                                                    guildId: e.guildId,
                                                },
                                                A.id,
                                            ),
                                        ),
                                        p &&
                                            (0, n.jsx)(a.ua7, {
                                                "aria-label": E.intl.string(E.t.ljnBlp),
                                                allowOverflow: !0,
                                                text: E.intl.string(E.t.ljnBlp),
                                                children: (A) => {
                                                    let { onMouseEnter: e, onMouseLeave: t } = A;
                                                    return (0, n.jsx)(a.P3F, {
                                                        className: C.addRoleContainer,
                                                        onClick: M,
                                                        onMouseEnter: e,
                                                        onMouseLeave: t,
                                                        children: (0, n.jsx)(a.oFk, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            className: C.addRoleIcon,
                                                            width: 20,
                                                            height: 20,
                                                        }),
                                                    });
                                                },
                                            }),
                                    ],
                                })
                              : (0, n.jsx)("div", {
                                    className: C.noRoles,
                                    children: (0, n.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        children: E.intl.string(E.t.nZfHsb),
                                    }),
                                }),
                  }),
              }),
          });
}
