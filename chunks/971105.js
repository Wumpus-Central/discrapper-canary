n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(837381),
    c = n(311907),
    u = n(397927),
    m = n(73153),
    g = n(661439),
    _ = n(73825),
    x = n(928039),
    h = n(323082),
    A = n(235986),
    p = n(39190),
    T = n(933392),
    f = n(97352),
    S = n(166403),
    E = n(927578),
    b = n(61509),
    C = n(652215),
    v = n(788868),
    N = n(818348),
    I = n(985018),
    j = n(687788),
    y = n(12762);
function O(e) {
    let { payments: t, locale: n, compactMode: l, numPages: a } = e,
        o = s.useRef(null),
        [c, m] = s.useState(0),
        [g, _] = s.useState(null),
        A = t.slice(10 * c, (c + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [c]);
    let T = s.useCallback(
            (e) => {
                m(e);
                let n = t[t.length - 1].id;
                e >= a - 2 && g !== n && ((0, h.CK)(10, n), _(n));
            },
            [t, a, g],
        ),
        f = (0, x.A)("billing-history", o);
    return (0, i.jsx)(d.hD, {
        navigator: f,
        children: (0, i.jsx)(d.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, i.jsx)(p.A, {
                    className: j.GD,
                    currentPageIndex: c,
                    onChangePage: T,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, i.jsx)(u.T7Y, {
                        className: j.Bd,
                        ref: o,
                        overflow: "auto",
                        children: A.map((e, t) =>
                            (0, i.jsx)(b.A, { className: r()(j.Nj, j.Bd), payment: e, locale: n, compactMode: l }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class R extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        m.h.wait(() => {
            (0, g.X)(), (0, h.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(u.ZpM, {
                className: j.K1,
                children: [
                    (0, i.jsx)("div", {
                        className: j.BF,
                        children: I.intl.format(I.t["6mIX6s"], { paymentGatewayName: N.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: j.Q2,
                        children: I.intl.format(I.t.eG0uZB, {
                            paymentGatewayName: N.qm[e.paymentGateway],
                            billingHistoryLink: (0, E.tW)(e.paymentGateway, "BILLING_HISTORY"),
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
                                className: r()(j.PQ, j.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: r()(j.Nj, j.Bd),
                                              children: (0, i.jsxs)(A.A, {
                                                  className: j.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: y.p6,
                                                          children: I.intl.string(I.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: j.Ir,
                                                          children: I.intl.string(I.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: y.vj,
                                                          children: I.intl.string(I.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(O, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    }
}
function L(e) {
    let t = e.skuId,
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(v.pe).includes(t) || (0, E.ys)(n));
}
function P(e) {
    let t = (0, c.bG)([T.A], () => T.A.getPayments()),
        n = (0, c.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        l = s.useMemo(
            () =>
                new Set(
                    t.filter(L).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(L).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        a = (0, c.yK)([f.A], () => f.A.getPlanIdsForSkus(Array.from(r))),
        o = s.useCallback(() => a.length === l.size, [a, l]),
        d = s.useMemo(() => t.filter((e) => e.currency !== C.Yri.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                m.h.wait(() => {
                    r.forEach((e) => (0, _.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [o, r]),
        (0, i.jsx)(R, { ...e, payments: d, subscription: n })
    );
}
