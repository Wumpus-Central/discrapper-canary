l.d(t, { b: () => y });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(843282),
    d = l(778712),
    c = l(331322),
    u = l(939249),
    o = l(548411),
    x = l(827734),
    h = l(834730),
    m = l(534514),
    g = l(10005),
    j = l(809697),
    A = l(153739),
    v = l(834981),
    f = l(343906),
    E = l(191627),
    N = l(602339),
    p = l(985018),
    T = l(336541);
let S = () => {
        let e = (0, v.vx)(),
            t = (0, A.y3)(),
            { selectTeenUser: l } = (0, g.A)({}),
            s = e.map((e) => ({ label: e, value: e })),
            c = i.useCallback(
                (e) => (0, n.jsx)(f.O, { userId: e.value, avatarSize: d._3.SIZE_24, hideUserTag: !0 }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, n.jsx)("div", {
                  className: a()(T.Gq, { [T.wS]: e.length > 1 }),
                  children:
                      e.length > 1
                          ? (0, n.jsx)(r.Pw, {
                                renderOptionLabel: c,
                                renderOptionValue: (e) => {
                                    let [t] = e;
                                    return c(t);
                                },
                                serialize: (e) => e,
                                select: (e) => {
                                    l(e);
                                },
                                isSelected: (e) => e === t?.id,
                                options: s,
                                "data-migration-pending": !0,
                            })
                          : (0, n.jsx)(f.O, { userId: e[0], avatarSize: d._3.SIZE_24, hideUserTag: !0 }),
              });
    },
    y = () => {
        let { selectedTab: e, handleTabChange: t } = (0, j.A)(),
            l = i.useCallback(() => {
                t(E.u9.ACTIVITY);
            }, [t]);
        return (0, n.jsxs)(c.B, {
            gap: 32,
            children: [
                (0, n.jsxs)(u.D, {
                    className: T.Gv,
                    onClick: l,
                    "aria-label": p.intl.string(p.t.ybUZql),
                    children: [
                        (0, n.jsx)(o.Z, { size: "sm", color: x.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        (0, n.jsx)(h.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: p.intl.string(p.t["13/7kX"]),
                        }),
                    ],
                }),
                (0, n.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, n.jsxs)(c.B, {
                            gap: 4,
                            className: T.gn,
                            children: [
                                (0, n.jsx)(h.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: p.intl.string(N.default.RZqaJn),
                                }),
                                (0, n.jsx)(m.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: p.intl.string(e === E.u9.CONTENT_AND_SOCIAL ? p.t["+o1pDZ"] : p.t.OAuOHD),
                                }),
                            ],
                        }),
                        (0, n.jsx)(S, {}),
                    ],
                }),
            ],
        });
    };
