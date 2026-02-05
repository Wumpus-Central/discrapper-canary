n.d(t, { A: () => U }), n(801541);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(889137),
    o = n(837381),
    c = n(397927),
    d = n(260762),
    u = n(485947),
    _ = n(294433),
    m = n(426190),
    A = n(438732),
    g = n(834981),
    E = n(469696),
    h = n(796497),
    p = n(148131),
    C = n(845197),
    x = n(442671),
    T = n(191627),
    I = n(327337),
    S = n(842130),
    f = n(985018),
    N = n(896498),
    b = n(205806),
    R = n(473169),
    v = n(525351);
function O(e) {
    let { header: t, description: n, stepNumber: s } = e;
    return (0, i.jsxs)("div", {
        className: b.PM,
        children: [
            (0, i.jsx)("div", {
                className: b.CD,
                children: (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, i.jsx)(c.Fmo, { children: s }),
                }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.Heading, { variant: "heading-sm/bold", children: (0, i.jsx)(c.Fmo, { children: t }) }),
                    (0, i.jsx)(c.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function j() {
    return (0, i.jsxs)("div", {
        className: a()(b.aP, N.a, b.dO, b.p2),
        children: [
            (0, i.jsxs)("div", {
                className: b.Np,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.Heading, {
                                className: R.QB,
                                variant: "heading-xl/medium",
                                children: (0, i.jsx)(c.Fmo, { children: f.intl.string(S.default.pHEnV5) }),
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: R.SX,
                                children: f.intl.string(S.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, i.jsx)("img", { className: b._u, src: v, alt: f.intl.string(S.default["r+PDmu"]) }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: b.Ci,
                children: [
                    (0, i.jsx)(O, {
                        header: f.intl.string(S.default["7xxAni"]),
                        description: f.intl.string(S.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, i.jsx)(O, {
                        header: f.intl.string(S.default["AXgx+a"]),
                        description: f.intl.string(S.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, i.jsx)(O, {
                        header: f.intl.string(S.default.MZn1tG),
                        description: f.intl.string(S.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function P() {
    let e = (0, g.xr)();
    return (0, i.jsxs)("div", {
        className: a()(b.aP, N.a, b.dO),
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.Heading, {
                        className: R.QB,
                        variant: "heading-xl/medium",
                        children: (0, i.jsx)(c.Fmo, { children: f.intl.string(S.default.zUCWEL) }),
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: R.SX,
                        children: f.intl.format(S.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, i.jsx)(h.A, {}),
                ],
            }),
            (0, i.jsx)("img", { className: b._u, src: v, alt: f.intl.string(S.default["r+PDmu"]) }),
        ],
    });
}
function y(e) {
    let { sectionType: t, sectionTitle: n, requests: r } = e,
        a = s.useRef(null),
        l = `${t}-list`,
        _ = (0, d.A)(l),
        m = s.useCallback(
            (e) => {
                let { row: n, listIndex: s } = e,
                    a = r[n],
                    l = s === r.length;
                return null == a
                    ? null
                    : (0, i.jsx)(
                          x.A,
                          {
                              userId: a.id,
                              isLast: l,
                              children: () =>
                                  t === T.Ef.ACTIVE ? (0, i.jsx)(p.w, { user: a }) : (0, i.jsx)(C.M, { user: a }),
                          },
                          a.id,
                      );
            },
            [r, t],
        ),
        A = s.useCallback(
            () =>
                (0, i.jsx)(
                    u.A,
                    {
                        children: (0, i.jsx)(c.Text, {
                            className: R.QB,
                            variant: "eyebrow",
                            color: "text-default",
                            children: n,
                        }),
                    },
                    "title",
                ),
            [n],
        );
    return (0, i.jsx)("div", {
        className: b.uW,
        children: (0, i.jsx)(o.hD, {
            navigator: _,
            children: (0, i.jsx)(o.PR, {
                children: (e) => {
                    let { ref: t, role: s, ...o } = e;
                    return (0, i.jsx)(
                        c.B8B,
                        {
                            innerRole: s,
                            innerAriaLabel: n,
                            ref: (e) => {
                                (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            sectionHeight: T.h4,
                            rowHeight: T.Gg,
                            renderSection: A,
                            renderRow: m,
                            sections: [r.length],
                            chunkSize: 30,
                            fade: !0,
                            ...o,
                        },
                        l,
                    );
                },
            }),
        }),
    });
}
let L = () => {
        let e = (0, A.A)(),
            t = (0, g.GR)(),
            n = e ? T.Y7 : T.kp,
            s = { count: t.length, max: n },
            r = (0, _.y)(
                f.intl.formatToPlainString(S.default["+tnO34"], s),
                f.intl.formatToPlainString(S.default["pu6/U0"], s),
            );
        return t.length > 0
            ? (0, i.jsx)(y, { sectionType: T.Ef.ACTIVE, sectionTitle: r, requests: t })
            : (0, i.jsxs)("div", {
                  className: b.uW,
                  children: [
                      (0, i.jsx)(c.Text, { className: R.QB, variant: "eyebrow", color: "text-default", children: r }),
                      (0, i.jsx)("div", {
                          className: b.aP,
                          children: (0, i.jsx)(E.A, { text: f.intl.string(S.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    D = () => {
        let e = (0, g.xr)(),
            t = (0, A.A)() ? T.Y7 : T.kp,
            n = (0, _.y)(
                f.intl.formatToPlainString(S.default["1/PzIj"], { maxConnections: t }),
                f.intl.formatToPlainString(S.default.RcTgiE, { maxConnections: t }),
            );
        return e
            ? (0, i.jsx)("div", {
                  className: b.rv,
                  children: (0, i.jsx)(c.Text, { variant: "text-xxs/medium", color: "text-muted", children: n }),
              })
            : null;
    },
    M = () => {
        let e = (0, m.N)(),
            t = (0, m.z)(),
            n = (0, l.YW)({ helpline: e, throughline: t })
                .with({ helpline: !0 }, () =>
                    f.intl.format(S.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => f.intl.format(S.default["6tsC8u"], { helpLink: I.CL }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: R.QX,
                  children: [
                      (0, i.jsx)(c.Heading, {
                          className: b.rH,
                          variant: "heading-sm/semibold",
                          children: (0, i.jsx)(c.Fmo, { children: f.intl.string(S.default["7/tVhv"]) }),
                      }),
                      (0, i.jsx)(c.Text, { variant: "text-xs/medium", color: "text-muted", children: n }),
                  ],
              });
    },
    G = () => {
        let e = (0, g.xk)(T.Ef.PENDING),
            t = (0, _.y)(
                f.intl.formatToPlainString(S.default.IkAgkG, { count: e.length }),
                f.intl.formatToPlainString(S.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length ? null : (0, i.jsx)(y, { sectionType: T.Ef.PENDING, sectionTitle: t, requests: e });
    },
    U = () => {
        let e = (0, A.A)();
        return (0, i.jsxs)("div", {
            className: b.kL,
            children: [
                e ? (0, i.jsx)(j, {}) : (0, i.jsx)(P, {}),
                (0, i.jsx)(L, {}),
                (0, i.jsx)(G, {}),
                (0, i.jsx)(D, {}),
                (0, i.jsx)(M, {}),
            ],
        });
    };
