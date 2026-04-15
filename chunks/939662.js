"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(827734),
    a = n(397927),
    o = n(564790),
    d = n(166005),
    c = n(498642),
    u = n(317525),
    m = n(576705),
    g = n(545868),
    x = n(642133),
    h = n(652215),
    _ = n(985018),
    A = n(871829);
function p(e) {
    let { guild: t, location: p } = e,
        { enabled: f } = (0, o.L)({ guildId: t.id, location: p }),
        j = (0, l.bG)([m.A], () => m.A.can(h.xBc.MANAGE_GUILD, t), [t]),
        N = (0, l.bG)([u.A], () => (null != t.verificationRoleId ? u.A.getRole(t.id, t.verificationRoleId) : null), [
            t.id,
            t.verificationRoleId,
        ]),
        E = (0, l.bG)([x.A], () => x.A.getRoleMemberCount(t.id), [t.id]),
        C = (0, l.bG)([c.A], () => c.A.getMemberCount(t.id), [t.id]),
        T = null != t.verificationRoleId;
    if (
        (s.useEffect(() => {
            T && (0, g.L)(t.id);
        }, [t.id, T]),
        !f && !T)
    )
        return null;
    let I = T && null != E && null != t.verificationRoleId ? (E[t.verificationRoleId] ?? 0) : 0,
        b = T && null != C ? Math.max(C - I, 0) : 0;
    return (0, i.jsxs)("div", {
        className: A.ue,
        children: [
            (0, i.jsxs)("div", {
                className: A.ZZ,
                children: [
                    (0, i.jsxs)("div", {
                        className: A.N1,
                        children: [
                            (0, i.jsx)(a.euF, {
                                src: n(641140),
                                size: a._3J.SIZE_40,
                                "aria-label": _.intl.string(_.t["whKq+8"]),
                            }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: A.YN,
                                        children: [
                                            (0, i.jsx)(a.Heading, {
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: _.intl.string(_.t["whKq+8"]),
                                            }),
                                            !T &&
                                                (0, i.jsx)(a.LpS, {
                                                    color: r.A.colors.BADGE_BACKGROUND_BRAND.css,
                                                    text: _.intl.string(_.t.y2b7CA),
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-default",
                                        children: _.intl.string(_.t.BDy2Gn),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    j &&
                        (0, i.jsx)(a.Button, {
                            variant: T ? "secondary" : "primary",
                            size: "sm",
                            text: T ? _.intl.string(_.t.bt75uw) : _.intl.string(_.t["mio/Xf"]),
                            onClick: () =>
                                (0, a.mMO)(async () => {
                                    let { default: e } = await n.e("35852").then(n.bind(n, 361255));
                                    return (n) => (0, i.jsx)(e, { ...n, guild: t, canSetNewRole: f });
                                }),
                        }),
                ],
            }),
            T &&
                null != N &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", { className: A.Jb }),
                        (0, i.jsxs)("div", {
                            className: A.IJ,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: A.uP,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: _.intl.string(_.t.ExCYMX),
                                        }),
                                        (0, i.jsx)(d.g1, { role: N, guildId: t.id }),
                                    ],
                                }),
                                null != C &&
                                    null != E &&
                                    (0, i.jsxs)(a.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: A.xW,
                                        children: [
                                            _.intl.formatToPlainString(_.t.tOznq1, { count: I }),
                                            " \xb7 ",
                                            (0, i.jsx)(a.Text, {
                                                variant: "text-sm/medium",
                                                color: "status-warning",
                                                tag: "span",
                                                children: _.intl.formatToPlainString(_.t.sgiPrC, { count: b }),
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
