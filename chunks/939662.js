n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(827734),
    a = n(192308),
    o = n(97808),
    d = n(778712),
    c = n(534514),
    u = n(777666),
    m = n(834730),
    g = n(821609),
    h = n(564790),
    x = n(166005),
    _ = n(498642),
    p = n(317525),
    A = n(576705),
    E = n(545868),
    f = n(642133),
    j = n(652215),
    N = n(985018),
    I = n(119333);
function C(e) {
    let { guild: t, location: C } = e,
        { enabled: b } = (0, h.L)({ guildId: t.id, location: C }),
        v = (0, s.bG)([A.A], () => A.A.can(j.xBc.MANAGE_GUILD, t), [t]),
        S = (0, s.bG)([p.A], () => (null != t.verificationRoleId ? p.A.getRole(t.id, t.verificationRoleId) : null), [
            t.id,
            t.verificationRoleId,
        ]),
        T = (0, s.bG)([f.A], () => f.A.getRoleMemberCount(t.id), [t.id]),
        y = (0, s.bG)([_.A], () => _.A.getMemberCount(t.id), [t.id]),
        R = null != t.verificationRoleId;
    if (
        (l.useEffect(() => {
            R && (0, E.L)(t.id);
        }, [t.id, R]),
        !b && !R)
    )
        return null;
    let L = R && null != T && null != t.verificationRoleId ? (T[t.verificationRoleId] ?? 0) : 0,
        D = R && null != y ? Math.max(y - L, 0) : 0;
    return (0, i.jsxs)("div", {
        className: I.ue,
        children: [
            (0, i.jsxs)("div", {
                className: I.ZZ,
                children: [
                    (0, i.jsxs)("div", {
                        className: I.N1,
                        children: [
                            (0, i.jsx)(o.eu, {
                                src: n(641140),
                                size: d._3.SIZE_40,
                                "aria-label": N.intl.string(N.t["whKq+8"]),
                            }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: I.YN,
                                        children: [
                                            (0, i.jsx)(c.D, {
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: N.intl.string(N.t["whKq+8"]),
                                            }),
                                            !R &&
                                                (0, i.jsx)(u.Lp, {
                                                    color: r.A.colors.BADGE_BACKGROUND_BRAND.css,
                                                    text: N.intl.string(N.t.y2b7CA),
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)(m.E, {
                                        variant: "text-xs/medium",
                                        color: "text-default",
                                        children: N.intl.string(N.t.BDy2Gn),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    v &&
                        (0, i.jsx)(g.$, {
                            variant: R ? "secondary" : "primary",
                            size: "sm",
                            text: R ? N.intl.string(N.t.bt75uw) : N.intl.string(N.t["mio/Xf"]),
                            onClick: () =>
                                (0, a.openModalLazy)(async () => {
                                    let { default: e } = await n.e("35852").then(n.bind(n, 361255));
                                    return (n) => (0, i.jsx)(e, { ...n, guild: t, canSetNewRole: b });
                                }),
                        }),
                ],
            }),
            R &&
                null != S &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", { className: I.Jb }),
                        (0, i.jsxs)("div", {
                            className: I.IJ,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: I.uP,
                                    children: [
                                        (0, i.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: N.intl.string(N.t.ExCYMX),
                                        }),
                                        (0, i.jsx)(x.g1, { role: S, guildId: t.id }),
                                    ],
                                }),
                                null != y &&
                                    null != T &&
                                    (0, i.jsxs)(m.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: I.xW,
                                        children: [
                                            N.intl.formatToPlainString(N.t.tOznq1, { count: L }),
                                            " \xb7 ",
                                            (0, i.jsx)(m.E, {
                                                variant: "text-sm/medium",
                                                color: "status-warning",
                                                tag: "span",
                                                children: N.intl.formatToPlainString(N.t.sgiPrC, { count: D }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
