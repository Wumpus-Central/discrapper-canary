n.d(t, { A: () => U }), n(801541);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(889137),
    o = n(837381),
    d = n(397927),
    c = n(260762),
    u = n(485947),
    m = n(294433),
    g = n(426190),
    _ = n(438732),
    x = n(834981),
    h = n(469696),
    A = n(796497),
    p = n(148131),
    T = n(845197),
    f = n(442671),
    S = n(191627),
    E = n(327337),
    b = n(602339),
    C = n(985018),
    v = n(453287),
    N = n(19331),
    I = n(818050),
    j = n(525351);
function y(e) {
    let { header: t, description: n, stepNumber: s } = e;
    return (0, i.jsxs)("div", {
        className: N.PM,
        children: [
            (0, i.jsx)("div", {
                className: N.CD,
                children: (0, i.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, i.jsx)(d.Fmo, { children: s }),
                }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Heading, { variant: "heading-sm/bold", children: (0, i.jsx)(d.Fmo, { children: t }) }),
                    (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function O() {
    return (0, i.jsxs)("div", {
        className: r()(N.aP, v.a, N.dO, N.p2),
        children: [
            (0, i.jsxs)("div", {
                className: N.Np,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.Heading, {
                                className: I.QB,
                                variant: "heading-xl/medium",
                                children: (0, i.jsx)(d.Fmo, { children: C.intl.string(b.default.pHEnV5) }),
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: I.SX,
                                children: C.intl.string(b.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, i.jsx)("img", { className: N._u, src: j, alt: C.intl.string(b.default["r+PDmu"]) }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: N.Ci,
                children: [
                    (0, i.jsx)(y, {
                        header: C.intl.string(b.default["7xxAni"]),
                        description: C.intl.string(b.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, i.jsx)(y, {
                        header: C.intl.string(b.default["AXgx+a"]),
                        description: C.intl.string(b.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, i.jsx)(y, {
                        header: C.intl.string(b.default.MZn1tG),
                        description: C.intl.string(b.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function R() {
    let e = (0, x.xr)();
    return (0, i.jsxs)("div", {
        className: r()(N.aP, v.a, N.dO),
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Heading, {
                        className: I.QB,
                        variant: "heading-xl/medium",
                        children: (0, i.jsx)(d.Fmo, { children: C.intl.string(b.default.zUCWEL) }),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: I.SX,
                        children: C.intl.format(b.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, i.jsx)(A.A, {}),
                ],
            }),
            (0, i.jsx)("img", { className: N._u, src: j, alt: C.intl.string(b.default["r+PDmu"]) }),
        ],
    });
}
function L(e) {
    let { sectionType: t, sectionTitle: n, requests: l } = e,
        r = s.useRef(null),
        a = `${t}-list`,
        m = (0, c.A)(a),
        g = s.useCallback(
            (e) => {
                let { row: n, listIndex: s } = e,
                    r = l[n],
                    a = s === l.length;
                return null == r
                    ? null
                    : (0, i.jsx)(
                          f.A,
                          {
                              userId: r.id,
                              isLast: a,
                              children: () =>
                                  t === S.Ef.ACTIVE ? (0, i.jsx)(p.w, { user: r }) : (0, i.jsx)(T.M, { user: r }),
                          },
                          r.id,
                      );
            },
            [l, t],
        ),
        _ = s.useCallback(
            () =>
                (0, i.jsx)(
                    u.A,
                    {
                        children: (0, i.jsx)(d.Text, {
                            className: I.QB,
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
        className: N.uW,
        children: (0, i.jsx)(o.hD, {
            navigator: m,
            children: (0, i.jsx)(o.PR, {
                children: (e) => {
                    let { ref: t, role: s, ...o } = e;
                    return (0, i.jsx)(
                        d.B8B,
                        {
                            innerRole: s,
                            innerAriaLabel: n,
                            ref: (e) => {
                                (r.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            sectionHeight: S.h4,
                            rowHeight: S.Gg,
                            renderSection: _,
                            renderRow: g,
                            sections: [l.length],
                            chunkSize: 30,
                            fade: !0,
                            ...o,
                        },
                        a,
                    );
                },
            }),
        }),
    });
}
let P = () => {
        let e = (0, _.A)(),
            t = (0, x.GR)(),
            n = e ? S.Y7 : S.kp,
            s = { count: t.length, max: n },
            l = (0, m.y)(
                C.intl.formatToPlainString(b.default["+tnO34"], s),
                C.intl.formatToPlainString(b.default["pu6/U0"], s),
            );
        return t.length > 0
            ? (0, i.jsx)(L, { sectionType: S.Ef.ACTIVE, sectionTitle: l, requests: t })
            : (0, i.jsxs)("div", {
                  className: N.uW,
                  children: [
                      (0, i.jsx)(d.Text, { className: I.QB, variant: "eyebrow", color: "text-default", children: l }),
                      (0, i.jsx)("div", {
                          className: N.aP,
                          children: (0, i.jsx)(h.A, { text: C.intl.string(b.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    D = () => {
        let e = (0, x.xr)(),
            t = (0, _.A)() ? S.Y7 : S.kp,
            n = (0, m.y)(
                C.intl.formatToPlainString(b.default["1/PzIj"], { maxConnections: t }),
                C.intl.formatToPlainString(b.default.RcTgiE, { maxConnections: t }),
            );
        return e
            ? (0, i.jsx)("div", {
                  className: N.rv,
                  children: (0, i.jsx)(d.Text, { variant: "text-xxs/medium", color: "text-muted", children: n }),
              })
            : null;
    },
    G = () => {
        let e = (0, g.N)(),
            t = (0, g.z)(),
            n = (0, a.YW)({ helpline: e, throughline: t })
                .with({ helpline: !0 }, () =>
                    C.intl.format(b.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => C.intl.format(b.default["6tsC8u"], { helpLink: E.CL }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: I.QX,
                  children: [
                      (0, i.jsx)(d.Heading, {
                          className: N.rH,
                          variant: "heading-sm/semibold",
                          children: (0, i.jsx)(d.Fmo, { children: C.intl.string(b.default["7/tVhv"]) }),
                      }),
                      (0, i.jsx)(d.Text, { variant: "text-xs/medium", color: "text-muted", children: n }),
                  ],
              });
    },
    M = () => {
        let e = (0, x.xk)(S.Ef.PENDING),
            t = (0, m.y)(
                C.intl.formatToPlainString(b.default.IkAgkG, { count: e.length }),
                C.intl.formatToPlainString(b.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length ? null : (0, i.jsx)(L, { sectionType: S.Ef.PENDING, sectionTitle: t, requests: e });
    },
    U = () => {
        let e = (0, _.A)();
        return (0, i.jsxs)("div", {
            className: N.kL,
            children: [
                e ? (0, i.jsx)(O, {}) : (0, i.jsx)(R, {}),
                (0, i.jsx)(P, {}),
                (0, i.jsx)(M, {}),
                (0, i.jsx)(D, {}),
                (0, i.jsx)(G, {}),
            ],
        });
    };
