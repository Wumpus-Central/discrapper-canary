n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(284009),
    o = n.n(l),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    _ = n(73153),
    m = n(384904),
    A = n(661439),
    g = n(73825),
    E = n(928039),
    h = n(235986),
    p = n(39190),
    C = n(933392),
    x = n(97352),
    T = n(166403),
    I = n(927578),
    S = n(61509),
    f = n(652215),
    N = n(788868),
    b = n(818348),
    R = n(985018),
    v = n(166789),
    O = n(124953);
function j(e) {
    let { payments: t, locale: n, compactMode: r, numPages: l } = e,
        o = s.useRef(null),
        [d, _] = s.useState(0),
        [A, g] = s.useState(null),
        h = t.slice(10 * d, (d + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [d]);
    let C = s.useCallback(
            (e) => {
                _(e);
                let n = t[t.length - 1].id;
                e >= l - 2 && A !== n && ((0, m.CK)(10, n), g(n));
            },
            [t, l, A],
        ),
        x = (0, E.A)("billing-history", o);
    return (0, i.jsx)(c.hD, {
        navigator: x,
        children: (0, i.jsx)(c.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, i.jsx)(p.A, {
                    className: v.GD,
                    currentPageIndex: d,
                    onChangePage: C,
                    numPages: l,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, i.jsx)(u.T7Y, {
                        className: v.Bd,
                        ref: o,
                        overflow: "auto",
                        children: h.map((e, t) =>
                            (0, i.jsx)(S.A, { className: a()(v.Nj, v.Bd), payment: e, locale: n, compactMode: r }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class P extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        _.h.wait(() => {
            (0, A.X)(), (0, m.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(u.ZpM, {
                className: v.K1,
                children: [
                    (0, i.jsx)("div", {
                        className: v.BF,
                        children: R.intl.format(R.t["6mIX6s"], { paymentGatewayName: b.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: v.Q2,
                        children: R.intl.format(R.t.eG0uZB, {
                            paymentGatewayName: b.qm[e.paymentGateway],
                            billingHistoryLink: (0, I.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: s } = this.props,
            r = null != n && n.isPurchasedExternally;
        return 0 !== t.length || r
            ? (0, i.jsxs)("div", {
                  className: v.GD,
                  children: [
                      null != n && r ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: a()(v.PQ, v.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: a()(v.Nj, v.Bd),
                                              children: (0, i.jsxs)(h.A, {
                                                  className: v.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: O.p6,
                                                          children: R.intl.string(R.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: v.Ir,
                                                          children: R.intl.string(R.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: O.vj,
                                                          children: R.intl.string(R.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(j, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    }
}
function y(e) {
    let t = e.skuId,
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(N.pe).includes(t) || (0, I.ys)(n));
}
function L(e) {
    let t = (0, d.bG)([C.A], () => C.A.getPayments()),
        n = (0, d.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(y).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        a = s.useMemo(
            () =>
                new Set(
                    t.filter(y).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        l = (0, d.yK)([x.A], () => x.A.getPlanIdsForSkus(Array.from(a))),
        o = s.useCallback(() => l.length === r.size, [l, r]),
        c = s.useMemo(() => t.filter((e) => e.currency !== f.Yri.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                _.h.wait(() => {
                    a.forEach((e) => (0, g.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [o, a]),
        (0, i.jsx)(P, { ...e, payments: c, subscription: n })
    );
}
