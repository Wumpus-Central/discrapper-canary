l.d(t, { A: () => V }), l(801541);
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(889137),
    d = l(837381),
    c = l(534514),
    u = l(707554),
    o = l(834730),
    x = l(475825),
    h = l(260762),
    m = l(485947),
    g = l(294433),
    j = l(426190),
    A = l(438732),
    v = l(834981),
    f = l(469696),
    E = l(796497),
    N = l(148131),
    p = l(845197),
    T = l(442671),
    S = l(191627),
    y = l(327337),
    C = l(602339),
    _ = l(985018),
    I = l(453287),
    b = l(19331),
    R = l(818050),
    L = l(525351);
function D(e) {
    let { header: t, description: l, stepNumber: i } = e;
    return (0, n.jsxs)("div", {
        className: b.PM,
        children: [
            (0, n.jsx)("div", {
                className: b.CD,
                children: (0, n.jsx)(c.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, n.jsx)(u.F, { children: i }),
                }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(c.D, { variant: "heading-sm/bold", children: (0, n.jsx)(u.F, { children: t }) }),
                    (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                ],
            }),
        ],
    });
}
function k() {
    return (0, n.jsxs)("div", {
        className: a()(b.aP, I.a, b.dO, b.p2),
        children: [
            (0, n.jsxs)("div", {
                className: b.Np,
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(c.D, {
                                className: R.QB,
                                variant: "heading-xl/medium",
                                children: (0, n.jsx)(u.F, { children: _.intl.string(C.default.pHEnV5) }),
                            }),
                            (0, n.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: R.SX,
                                children: _.intl.string(C.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)("img", { className: b._u, src: L, alt: _.intl.string(C.default["r+PDmu"]) }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: b.Ci,
                children: [
                    (0, n.jsx)(D, {
                        header: _.intl.string(C.default["7xxAni"]),
                        description: _.intl.string(C.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, n.jsx)(D, {
                        header: _.intl.string(C.default["AXgx+a"]),
                        description: _.intl.string(C.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, n.jsx)(D, {
                        header: _.intl.string(C.default.MZn1tG),
                        description: _.intl.string(C.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function M() {
    let e = (0, v.xr)();
    return (0, n.jsxs)("div", {
        className: a()(b.aP, I.a, b.dO),
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(c.D, {
                        className: R.QB,
                        variant: "heading-xl/medium",
                        children: (0, n.jsx)(u.F, { children: _.intl.string(C.default.zUCWEL) }),
                    }),
                    (0, n.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: R.SX,
                        children: _.intl.format(C.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, n.jsx)(E.A, {}),
                ],
            }),
            (0, n.jsx)("img", { className: b._u, src: L, alt: _.intl.string(C.default["r+PDmu"]) }),
        ],
    });
}
function U(e) {
    let { sectionType: t, sectionTitle: l, requests: s } = e,
        a = i.useRef(null),
        r = `${t}-list`,
        c = (0, h.A)(r),
        u = i.useCallback(
            (e) => {
                let { row: l, listIndex: i } = e,
                    a = s[l],
                    r = i === s.length;
                return null == a
                    ? null
                    : (0, n.jsx)(
                          T.A,
                          {
                              userId: a.id,
                              isLast: r,
                              children: () =>
                                  t === S.Ef.ACTIVE ? (0, n.jsx)(N.w, { user: a }) : (0, n.jsx)(p.M, { user: a }),
                          },
                          a.id,
                      );
            },
            [s, t],
        ),
        g = i.useCallback(
            () =>
                (0, n.jsx)(
                    m.A,
                    {
                        children: (0, n.jsx)(o.E, {
                            className: R.QB,
                            variant: "eyebrow",
                            color: "text-default",
                            children: l,
                        }),
                    },
                    "title",
                ),
            [l],
        );
    return (0, n.jsx)("div", {
        className: b.uW,
        children: (0, n.jsx)(d.hD, {
            navigator: c,
            children: (0, n.jsx)(d.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, n.jsx)(
                        x.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: l,
                            ref: (e) => {
                                (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            sectionHeight: S.h4,
                            rowHeight: S.Gg,
                            renderSection: g,
                            renderRow: u,
                            sections: [s.length],
                            chunkSize: 30,
                            fade: !0,
                            ...d,
                        },
                        r,
                    );
                },
            }),
        }),
    });
}
let w = () => {
        let e = (0, A.A)(),
            t = (0, v.GR)(),
            l = e ? S.Y7 : S.kp,
            i = { count: t.length, max: l },
            s = (0, g.y)(
                _.intl.formatToPlainString(C.default["+tnO34"], i),
                _.intl.formatToPlainString(C.default["pu6/U0"], i),
            );
        return t.length > 0
            ? (0, n.jsx)(U, { sectionType: S.Ef.ACTIVE, sectionTitle: s, requests: t })
            : (0, n.jsxs)("div", {
                  className: b.uW,
                  children: [
                      (0, n.jsx)(o.E, { className: R.QB, variant: "eyebrow", color: "text-default", children: s }),
                      (0, n.jsx)("div", {
                          className: b.aP,
                          children: (0, n.jsx)(f.A, { text: _.intl.string(C.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    O = () => {
        let e = (0, v.xr)(),
            t = (0, A.A)() ? S.Y7 : S.kp,
            l = (0, g.y)(
                _.intl.formatToPlainString(C.default["1/PzIj"], { maxConnections: t }),
                _.intl.formatToPlainString(C.default.RcTgiE, { maxConnections: t }),
            );
        return e
            ? (0, n.jsx)("div", {
                  className: b.rv,
                  children: (0, n.jsx)(o.E, { variant: "text-xxs/medium", color: "text-muted", children: l }),
              })
            : null;
    },
    G = () => {
        let e = (0, j.N)(),
            t = (0, j.z)(),
            l = (0, r.YW)({ helpline: e, throughline: t })
                .with({ helpline: !0 }, () =>
                    _.intl.format(C.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => _.intl.format(C.default["6tsC8u"], { helpLink: y.CL }))
                .otherwise(() => null);
        return null == l
            ? null
            : (0, n.jsxs)("div", {
                  className: R.QX,
                  children: [
                      (0, n.jsx)(c.D, {
                          className: b.rH,
                          variant: "heading-sm/semibold",
                          children: (0, n.jsx)(u.F, { children: _.intl.string(C.default["7/tVhv"]) }),
                      }),
                      (0, n.jsx)(o.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
                  ],
              });
    },
    P = () => {
        let e = (0, v.xk)(S.Ef.PENDING),
            t = (0, g.y)(
                _.intl.formatToPlainString(C.default.IkAgkG, { count: e.length }),
                _.intl.formatToPlainString(C.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length ? null : (0, n.jsx)(U, { sectionType: S.Ef.PENDING, sectionTitle: t, requests: e });
    },
    V = () => {
        let e = (0, A.A)();
        return (0, n.jsxs)("div", {
            className: b.kL,
            children: [
                e ? (0, n.jsx)(k, {}) : (0, n.jsx)(M, {}),
                (0, n.jsx)(w, {}),
                (0, n.jsx)(P, {}),
                (0, n.jsx)(O, {}),
                (0, n.jsx)(G, {}),
            ],
        });
    };
