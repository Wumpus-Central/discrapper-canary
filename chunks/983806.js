n.d(t, {
    b: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(843282),
    l = n(397927),
    c = n(10005),
    u = n(809697),
    d = n(153739),
    f = n(834981),
    p = n(343906),
    _ = n(191627),
    h = n(842130),
    m = n(985018),
    g = n(377148);
let E = () => {
        let e = (0, f.vx)(),
            t = (0, d.y3)(),
            { selectTeenUser: n } = (0, c.A)({}),
            a = (e) => {
                n(e);
            },
            u = e.map((e) => ({
                label: e,
                value: e,
            })),
            _ = i.useCallback(
                (e) =>
                    (0, r.jsx)(p.O, {
                        userId: e.value,
                        avatarSize: l._3J.SIZE_24,
                        hideUserTag: !0,
                    }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, r.jsx)("div", {
                  className: s()(g.Gq, {
                      [g.wS]: e.length > 1,
                  }),
                  children:
                      e.length > 1
                          ? (0, r.jsx)(o.Pw, {
                                renderOptionLabel: _,
                                renderOptionValue: (e) => {
                                    let [t] = e;
                                    return _(t);
                                },
                                serialize: (e) => e,
                                select: a,
                                isSelected: (e) => e === (null == t ? void 0 : t.id),
                                options: u,
                                "data-migration-pending": !0,
                            })
                          : (0, r.jsx)(p.O, {
                                userId: e[0],
                                avatarSize: l._3J.SIZE_24,
                                hideUserTag: !0,
                            }),
              });
    },
    b = () => {
        let { selectedTab: e, handleTabChange: t } = (0, u.A)(),
            n = i.useCallback(() => {
                t(_.u9.ACTIVITY);
            }, [t]);
        return (0, r.jsxs)(l.BJc, {
            gap: 32,
            children: [
                (0, r.jsxs)(l.DUT, {
                    className: g.Gv,
                    onClick: n,
                    "aria-label": m.intl.string(m.t.ybUZql),
                    children: [
                        (0, r.jsx)(l.Zge, {
                            size: "sm",
                            color: l.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: m.intl.string(m.t["13/7kX"]),
                        }),
                    ],
                }),
                (0, r.jsxs)(l.BJc, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, r.jsxs)(l.BJc, {
                            gap: 4,
                            className: g.gn,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: m.intl.string(h.default.RZqaJn),
                                }),
                                (0, r.jsx)(l.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: m.intl.string(e === _.u9.CONTENT_AND_SOCIAL ? m.t["+o1pDZ"] : m.t.OAuOHD),
                                }),
                            ],
                        }),
                        (0, r.jsx)(E, {}),
                    ],
                }),
            ],
        });
    };
