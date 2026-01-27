n.d(t, {
    A: () => U,
}),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    c = n.n(o),
    d = n(837381),
    u = n(311907),
    _ = n(397927),
    p = n(73153),
    m = n(384904),
    g = n(661439),
    A = n(73825),
    f = n(928039),
    h = n(235986),
    b = n(39190),
    E = n(933392),
    x = n(97352),
    O = n(166403),
    C = n(927578),
    I = n(61509),
    T = n(652215),
    S = n(788868),
    j = n(818348),
    v = n(985018),
    N = n(166789),
    y = n(124953);

function P(e, t, n) {
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

function R(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}

function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function w(e) {
    let { payments: t, locale: n, compactMode: r, numPages: s } = e,
        o = l.useRef(null),
        [c, u] = l.useState(0),
        [p, g] = l.useState(null),
        A = t.slice(10 * c, (c + 1) * 10);
    l.useEffect(() => {
        var e;
        null == (e = o.current) ||
            e.scrollTo({
                to: 0,
            });
    }, [c]);
    let h = l.useCallback(
            (e) => {
                u(e);
                let n = t[t.length - 1].id;
                e >= s - 2 && p !== n && ((0, m.CK)(10, n), g(n));
            },
            [t, s, p],
        ),
        E = (0, f.A)("billing-history", o);
    return (0, i.jsx)(d.hD, {
        navigator: E,
        children: (0, i.jsx)(d.PR, {
            children: (e) => {
                let { ref: t } = e,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i,
                            l = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                            return l;
                        }
                        if (
                            ((l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.getOwnPropertyNames(e);
                                for (r = 0; r < l.length; r++)
                                    (n = l[r]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (i[n] = e[n]);
                                return i;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                        return l;
                    })(e, ["ref"]);
                return (0, i.jsx)(
                    b.A,
                    D(
                        R(
                            {
                                className: N.GD,
                                currentPageIndex: c,
                                onChangePage: h,
                                numPages: s,
                                showPageCount: !1,
                                ref: t,
                            },
                            l,
                        ),
                        {
                            children: (0, i.jsx)(_.T7Y, {
                                className: N.Bd,
                                ref: o,
                                overflow: "auto",
                                children: A.map((e, t) =>
                                    (0, i.jsx)(
                                        I.A,
                                        {
                                            className: a()(N.Nj, N.Bd),
                                            payment: e,
                                            locale: n,
                                            compactMode: r,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        },
                    ),
                );
            },
        }),
    });
}
class L extends (r = l.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        p.h.wait(() => {
            (0, g.X)(), (0, m.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(_.ZpM, {
                className: N.K1,
                children: [
                    (0, i.jsx)("div", {
                        className: N.BF,
                        children: v.intl.format(v.t["6mIX6s"], {
                            paymentGatewayName: j.qm[e.paymentGateway],
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: N.Q2,
                        children: v.intl.format(v.t.eG0uZB, {
                            paymentGatewayName: j.qm[e.paymentGateway],
                            billingHistoryLink: (0, C.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: r } = this.props,
            l = null != n && n.isPurchasedExternally;
        return 0 !== t.length || l
            ? (0, i.jsxs)("div", {
                  className: N.GD,
                  children: [
                      null != n && l ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: a()(N.PQ, N.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: a()(N.Nj, N.Bd),
                                              children: (0, i.jsxs)(h.A, {
                                                  className: N.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: y.p6,
                                                          children: v.intl.string(v.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: N.Ir,
                                                          children: v.intl.string(v.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: y.vj,
                                                          children: v.intl.string(v.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(w, {
                                        compactMode: e,
                                        locale: r,
                                        payments: t,
                                        numPages: this.numPages,
                                    }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    }
    constructor(...e) {
        super(...e), P(this, "scrollerRef", l.createRef());
    }
}

function M(e) {
    var t;
    let n = e.skuId,
        r = null == (t = e.subscription) ? void 0 : t.items[0].planId;
    return !(null == n || null == r || Object.values(S.pe).includes(n) || (0, C.ys)(r));
}

function U(e) {
    let t = (0, u.bG)([E.A], () => E.A.getPayments()),
        n = (0, u.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        r = l.useMemo(
            () =>
                new Set(
                    t.filter(M).map((e) => {
                        let { subscription: t } = e;
                        return null == t ? void 0 : t.items[0].planId;
                    }),
                ),
            [t],
        ),
        s = l.useMemo(
            () =>
                new Set(
                    t.filter(M).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        a = (0, u.yK)([x.A], () => x.A.getPlanIdsForSkus(Array.from(s))),
        o = l.useCallback(() => a.length === r.size, [a, r]),
        c = l.useMemo(() => t.filter((e) => e.currency !== T.Yri.DISCORD_ORB), [t]);
    return (
        l.useEffect(() => {
            o() ||
                p.h.wait(() => {
                    s.forEach((e) => (0, A.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [o, s]),
        (0, i.jsx)(
            L,
            D(R({}, e), {
                payments: c,
                subscription: n,
            }),
        )
    );
}
P(L, "defaultProps", {
    compactMode: !1,
});
