n.d(t, {
    b: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(843282),
    o = n(397927),
    c = n(10005),
    d = n(809697),
    u = n(153739),
    _ = n(834981),
    p = n(343906),
    m = n(191627),
    g = n(842130),
    A = n(985018),
    f = n(377148);
let h = () => {
        let e = (0, _.vx)(),
            t = (0, u.y3)(),
            { selectTeenUser: n } = (0, c.A)({}),
            l = e.map((e) => ({
                label: e,
                value: e,
            })),
            d = i.useCallback(
                (e) =>
                    (0, r.jsx)(p.O, {
                        userId: e.value,
                        avatarSize: o._3J.SIZE_24,
                        hideUserTag: !0,
                    }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, r.jsx)("div", {
                  className: s()(f.Gq, {
                      [f.wS]: e.length > 1,
                  }),
                  children:
                      e.length > 1
                          ? (0, r.jsx)(a.Pw, {
                                renderOptionLabel: d,
                                renderOptionValue: (e) => {
                                    let [t] = e;
                                    return d(t);
                                },
                                serialize: (e) => e,
                                select: (e) => {
                                    n(e);
                                },
                                isSelected: (e) => e === (null == t ? void 0 : t.id),
                                options: l,
                                "data-migration-pending": !0,
                            })
                          : (0, r.jsx)(p.O, {
                                userId: e[0],
                                avatarSize: o._3J.SIZE_24,
                                hideUserTag: !0,
                            }),
              });
    },
    b = () => {
        let { selectedTab: e, handleTabChange: t } = (0, d.A)(),
            n = i.useCallback(() => {
                t(m.u9.ACTIVITY);
            }, [t]);
        return (0, r.jsxs)(o.BJc, {
            gap: 32,
            children: [
                (0, r.jsxs)(o.DUT, {
                    className: f.Gv,
                    onClick: n,
                    "aria-label": A.intl.string(A.t.ybUZql),
                    children: [
                        (0, r.jsx)(o.Zge, {
                            size: "sm",
                            color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: A.intl.string(A.t["13/7kX"]),
                        }),
                    ],
                }),
                (0, r.jsxs)(o.BJc, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, r.jsxs)(o.BJc, {
                            gap: 4,
                            className: f.gn,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: A.intl.string(g.default.RZqaJn),
                                }),
                                (0, r.jsx)(o.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: A.intl.string(e === m.u9.CONTENT_AND_SOCIAL ? A.t["+o1pDZ"] : A.t.OAuOHD),
                                }),
                            ],
                        }),
                        (0, r.jsx)(h, {}),
                    ],
                }),
            ],
        });
    };
