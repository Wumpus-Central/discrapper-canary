n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(837381),
    u = n(311907),
    c = n(599319),
    g = n(359778),
    m = n(73153),
    _ = n(661439),
    A = n(73825),
    h = n(928039),
    p = n(323082),
    x = n(235986),
    E = n(39190),
    T = n(933392),
    S = n(97352),
    f = n(166403),
    b = n(927578),
    C = n(61509),
    v = n(652215),
    N = n(788868),
    I = n(818348),
    y = n(985018),
    j = n(687788),
    O = n(12762);
function R(e) {
    let { payments: t, locale: n, compactMode: l, numPages: r } = e,
        o = s.useRef(null),
        [u, g] = s.useState(0),
        [m, _] = s.useState(null),
        A = t.slice(10 * u, (u + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [u]);
    let x = s.useCallback(
            (e) => {
                g(e);
                let n = t[t.length - 1].id;
                e >= r - 2 && m !== n && ((0, p.CK)(10, n), _(n));
            },
            [t, r, m],
        ),
        T = (0, h.A)("billing-history", o);
    return (0, i.jsx)(d.hD, {
        navigator: T,
        children: (0, i.jsx)(d.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, i.jsx)(E.A, {
                    className: j.GD,
                    currentPageIndex: u,
                    onChangePage: x,
                    numPages: r,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, i.jsx)(c.Ch, {
                        className: j.Bd,
                        ref: o,
                        overflow: "auto",
                        children: A.map((e, t) =>
                            (0, i.jsx)(C.A, { className: a()(j.Nj, j.Bd), payment: e, locale: n, compactMode: l }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class L extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        m.h.wait(() => {
            (0, _.X)(), (0, p.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(g.Z, {
                className: j.K1,
                children: [
                    (0, i.jsx)("div", {
                        className: j.BF,
                        children: y.intl.format(y.t["6mIX6s"], { paymentGatewayName: I.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: j.Q2,
                        children: y.intl.format(y.t.eG0uZB, {
                            paymentGatewayName: I.qm[e.paymentGateway],
                            billingHistoryLink: (0, b.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: s } = this.props,
            l = null != n && n.isPurchasedExternally;
        return 0 !== t.length || l
            ? (0, i.jsxs)("div", {
                  className: j.GD,
                  children: [
                      null != n && l ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: a()(j.PQ, j.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: a()(j.Nj, j.Bd),
                                              children: (0, i.jsxs)(x.A, {
                                                  className: j.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: O.p6,
                                                          children: y.intl.string(y.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: j.Ir,
                                                          children: y.intl.string(y.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: O.vj,
                                                          children: y.intl.string(y.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(R, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    }
}
function D(e) {
    let t = e.skuId,
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(N.pe).includes(t) || (0, b.ys)(n));
}
function P(e) {
    let t = (0, u.bG)([T.A], () => T.A.getPayments()),
        n = (0, u.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        l = s.useMemo(
            () =>
                new Set(
                    t.filter(D).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        a = s.useMemo(
            () =>
                new Set(
                    t.filter(D).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        r = (0, u.yK)([S.A], () => S.A.getPlanIdsForSkus(Array.from(a))),
        o = s.useCallback(() => r.length === l.size, [r, l]),
        d = s.useMemo(() => t.filter((e) => e.currency !== v.Yri.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                m.h.wait(() => {
                    a.forEach((e) => (0, A.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [o, a]),
        (0, i.jsx)(L, { ...e, payments: d, subscription: n })
    );
}
