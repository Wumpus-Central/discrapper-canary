n.d(t, {
    A: () => F,
}),
    n(228524),
    n(801541);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(889137),
    l = n(837381),
    c = n(397927),
    u = n(260762),
    d = n(485947),
    f = n(294433),
    p = n(426190),
    _ = n(945276),
    h = n(834981),
    m = n(469696),
    g = n(796497),
    E = n(148131),
    b = n(845197),
    y = n(442671),
    O = n(191627),
    A = n(327337),
    v = n(842130),
    S = n(985018),
    I = n(896498),
    T = n(205806),
    C = n(473169),
    N = n(525351);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}

function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = D(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function x(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, r.jsxs)("div", {
        className: T.PM,
        children: [
            (0, r.jsx)("div", {
                className: T.CD,
                children: (0, r.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, r.jsx)(c.Fmo, {
                        children: i,
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-sm/bold",
                        children: (0, r.jsx)(c.Fmo, {
                            children: t,
                        }),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: n,
                    }),
                ],
            }),
        ],
    });
}

function L() {
    return (0, r.jsxs)("div", {
        className: s()(T.aP, I.a, T.dO, T.p2),
        children: [
            (0, r.jsxs)("div", {
                className: T.Np,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(c.Heading, {
                                className: C.QB,
                                variant: "heading-xl/medium",
                                children: (0, r.jsx)(c.Fmo, {
                                    children: S.intl.string(v.default.pHEnV5),
                                }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: C.SX,
                                children: S.intl.string(v.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        className: T._u,
                        src: N,
                        alt: S.intl.string(v.default["r+PDmu"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: T.Ci,
                children: [
                    (0, r.jsx)(x, {
                        header: S.intl.string(v.default["7xxAni"]),
                        description: S.intl.string(v.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, r.jsx)(x, {
                        header: S.intl.string(v.default["AXgx+a"]),
                        description: S.intl.string(v.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, r.jsx)(x, {
                        header: S.intl.string(v.default.MZn1tG),
                        description: S.intl.string(v.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}

function j() {
    let e = (0, h.xr)();
    return (0, r.jsxs)("div", {
        className: s()(T.aP, I.a, T.dO),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Heading, {
                        className: C.QB,
                        variant: "heading-xl/medium",
                        children: (0, r.jsx)(c.Fmo, {
                            children: S.intl.string(v.default.zUCWEL),
                        }),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: C.SX,
                        children: S.intl.format(v.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, r.jsx)(g.A, {}),
                ],
            }),
            (0, r.jsx)("img", {
                className: T._u,
                src: N,
                alt: S.intl.string(v.default["r+PDmu"]),
            }),
        ],
    });
}

function M(e) {
    let { sectionType: t, sectionTitle: n, requests: a } = e,
        s = i.useRef(null),
        o = "".concat(t, "-list"),
        f = (0, u.A)(o),
        p = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    s = a[n],
                    o = i === a.length;
                return null == s
                    ? null
                    : (0, r.jsx)(
                          y.A,
                          {
                              userId: s.id,
                              isLast: o,
                              children: () =>
                                  t === O.Ef.ACTIVE
                                      ? (0, r.jsx)(E.w, {
                                            user: s,
                                        })
                                      : (0, r.jsx)(b.M, {
                                            user: s,
                                        }),
                          },
                          s.id,
                      );
            },
            [a, t],
        ),
        _ = i.useCallback(
            () =>
                (0, r.jsx)(
                    d.A,
                    {
                        children: (0, r.jsx)(c.Text, {
                            className: C.QB,
                            variant: "eyebrow",
                            color: "text-default",
                            children: n,
                        }),
                    },
                    "title",
                ),
            [n],
        );
    return (0, r.jsx)("div", {
        className: T.uW,
        children: (0, r.jsx)(l.hD, {
            navigator: f,
            children: (0, r.jsx)(l.PR, {
                children: (e) => {
                    let { ref: t, role: i } = e,
                        l = P(e, ["ref", "role"]);
                    return (0, r.jsx)(
                        c.B8B,
                        w(
                            {
                                innerRole: i,
                                innerAriaLabel: n,
                                ref: (e) => {
                                    var n;
                                    (s.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                                sectionHeight: O.h4,
                                rowHeight: O.Gg,
                                renderSection: _,
                                renderRow: p,
                                sections: [a.length],
                                chunkSize: 30,
                                fade: !0,
                            },
                            l,
                        ),
                        o,
                    );
                },
            }),
        }),
    });
}
let k = () => {
        let e = (0, _.A)(),
            t = (0, h.GR)(),
            n = e ? O.Y7 : O.kp,
            i = {
                count: t.length,
                max: n,
            },
            a = (0, f.y)(
                S.intl.formatToPlainString(v.default["+tnO34"], i),
                S.intl.formatToPlainString(v.default["pu6/U0"], i),
            );
        return t.length > 0
            ? (0, r.jsx)(M, {
                  sectionType: O.Ef.ACTIVE,
                  sectionTitle: a,
                  requests: t,
              })
            : (0, r.jsxs)("div", {
                  className: T.uW,
                  children: [
                      (0, r.jsx)(c.Text, {
                          className: C.QB,
                          variant: "eyebrow",
                          color: "text-default",
                          children: a,
                      }),
                      (0, r.jsx)("div", {
                          className: T.aP,
                          children: (0, r.jsx)(m.A, {
                              text: S.intl.string(v.default.C4ScLD),
                          }),
                      }),
                  ],
              });
    },
    U = () => {
        let e = (0, h.xr)(),
            t = (0, _.A)() ? O.Y7 : O.kp,
            n = (0, f.y)(
                S.intl.formatToPlainString(v.default["1/PzIj"], {
                    maxConnections: t,
                }),
                S.intl.formatToPlainString(v.default.RcTgiE, {
                    maxConnections: t,
                }),
            );
        return e
            ? (0, r.jsx)("div", {
                  className: T.rv,
                  children: (0, r.jsx)(c.Text, {
                      variant: "text-xxs/medium",
                      color: "text-muted",
                      children: n,
                  }),
              })
            : null;
    },
    G = () => {
        let e = (0, p.N)(),
            t = (0, p.z)(),
            n = (0, o.YW)({
                helpline: e,
                throughline: t,
            })
                .with(
                    {
                        helpline: !0,
                    },
                    () =>
                        S.intl.format(v.default["KOwsf/"], {
                            helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                        }),
                )
                .with(
                    {
                        throughline: !0,
                    },
                    () =>
                        S.intl.format(v.default["6tsC8u"], {
                            helpLink: A.CL,
                        }),
                )
                .otherwise(() => null);
        return null == n
            ? null
            : (0, r.jsxs)("div", {
                  className: C.QX,
                  children: [
                      (0, r.jsx)(c.Heading, {
                          className: T.rH,
                          variant: "heading-sm/semibold",
                          children: (0, r.jsx)(c.Fmo, {
                              children: S.intl.string(v.default["7/tVhv"]),
                          }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: n,
                      }),
                  ],
              });
    },
    V = () => {
        let e = (0, h.xk)(O.Ef.PENDING),
            t = (0, f.y)(
                S.intl.formatToPlainString(v.default.IkAgkG, {
                    count: e.length,
                }),
                S.intl.formatToPlainString(v.default.Q8XnAa, {
                    count: e.length,
                }),
            );
        return 0 === e.length
            ? null
            : (0, r.jsx)(M, {
                  sectionType: O.Ef.PENDING,
                  sectionTitle: t,
                  requests: e,
              });
    },
    F = () => {
        let e = (0, _.A)();
        return (0, r.jsxs)("div", {
            className: T.kL,
            children: [
                e ? (0, r.jsx)(L, {}) : (0, r.jsx)(j, {}),
                (0, r.jsx)(k, {}),
                (0, r.jsx)(V, {}),
                (0, r.jsx)(U, {}),
                (0, r.jsx)(G, {}),
            ],
        });
    };
