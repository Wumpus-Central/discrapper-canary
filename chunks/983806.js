n.d(t, { b: () => C });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(843282),
    o = n(397927),
    c = n(10005),
    d = n(809697),
    u = n(153739),
    _ = n(834981),
    m = n(343906),
    A = n(191627),
    g = n(842130),
    E = n(985018),
    h = n(377148);
let p = () => {
        let e = (0, _.vx)(),
            t = (0, u.y3)(),
            { selectTeenUser: n } = (0, c.A)({}),
            r = e.map((e) => ({ label: e, value: e })),
            d = s.useCallback(
                (e) => (0, i.jsx)(m.O, { userId: e.value, avatarSize: o._3J.SIZE_24, hideUserTag: !0 }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, i.jsx)("div", {
                  className: a()(h.Gq, { [h.wS]: e.length > 1 }),
                  children:
                      e.length > 1
                          ? (0, i.jsx)(l.Pw, {
                                renderOptionLabel: d,
                                renderOptionValue: (e) => {
                                    let [t] = e;
                                    return d(t);
                                },
                                serialize: (e) => e,
                                select: (e) => {
                                    n(e);
                                },
                                isSelected: (e) => e === t?.id,
                                options: r,
                                "data-migration-pending": !0,
                            })
                          : (0, i.jsx)(m.O, { userId: e[0], avatarSize: o._3J.SIZE_24, hideUserTag: !0 }),
              });
    },
    C = () => {
        let { selectedTab: e, handleTabChange: t } = (0, d.A)(),
            n = s.useCallback(() => {
                t(A.u9.ACTIVITY);
            }, [t]);
        return (0, i.jsxs)(o.BJc, {
            gap: 32,
            children: [
                (0, i.jsxs)(o.DUT, {
                    className: h.Gv,
                    onClick: n,
                    "aria-label": E.intl.string(E.t.ybUZql),
                    children: [
                        (0, i.jsx)(o.Zge, { size: "sm", color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
                        (0, i.jsx)(o.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: E.intl.string(E.t["13/7kX"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(o.BJc, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, i.jsxs)(o.BJc, {
                            gap: 4,
                            className: h.gn,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: E.intl.string(g.default.RZqaJn),
                                }),
                                (0, i.jsx)(o.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: E.intl.string(e === A.u9.CONTENT_AND_SOCIAL ? E.t["+o1pDZ"] : E.t.OAuOHD),
                                }),
                            ],
                        }),
                        (0, i.jsx)(p, {}),
                    ],
                }),
            ],
        });
    };
