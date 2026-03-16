n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(837381),
    c = n(311907),
    u = n(397927),
    _ = n(73153),
    m = n(384904),
    g = n(661439),
    A = n(73825),
    h = n(928039),
    x = n(235986),
    p = n(39190),
    T = n(933392),
    E = n(97352),
    C = n(166403),
    S = n(927578),
    f = n(61509),
    N = n(652215),
    b = n(788868),
    I = n(818348),
    v = n(985018),
    j = n(166789),
    O = n(124953);
function y(e) {
    let { payments: t, locale: n, compactMode: l, numPages: a } = e,
        o = s.useRef(null),
        [c, _] = s.useState(0),
        [g, A] = s.useState(null),
        x = t.slice(10 * c, (c + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [c]);
    let T = s.useCallback(
            (e) => {
                _(e);
                let n = t[t.length - 1].id;
                e >= a - 2 && g !== n && ((0, m.CK)(10, n), A(n));
            },
            [t, a, g],
        ),
        E = (0, h.A)("billing-history", o);
    return (0, i.jsx)(d.hD, {
        navigator: E,
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
                        children: x.map((e, t) =>
                            (0, i.jsx)(f.A, { className: r()(j.Nj, j.Bd), payment: e, locale: n, compactMode: l }, t),
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
        _.h.wait(() => {
            (0, g.X)(), (0, m.CK)(30);
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
                        children: v.intl.format(v.t["6mIX6s"], { paymentGatewayName: I.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: j.Q2,
                        children: v.intl.format(v.t.eG0uZB, {
                            paymentGatewayName: I.qm[e.paymentGateway],
                            billingHistoryLink: (0, S.tW)(e.paymentGateway, "BILLING_HISTORY"),
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
                                              children: (0, i.jsxs)(x.A, {
                                                  className: j.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: O.p6,
                                                          children: v.intl.string(v.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: j.Ir,
                                                          children: v.intl.string(v.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: O.vj,
                                                          children: v.intl.string(v.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(y, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    }
}
function P(e) {
    let t = e.skuId,
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(b.pe).includes(t) || (0, S.ys)(n));
}
function D(e) {
    let t = (0, c.bG)([T.A], () => T.A.getPayments()),
        n = (0, c.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        l = s.useMemo(
            () =>
                new Set(
                    t.filter(P).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(P).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        a = (0, c.yK)([E.A], () => E.A.getPlanIdsForSkus(Array.from(r))),
        o = s.useCallback(() => a.length === l.size, [a, l]),
        d = s.useMemo(() => t.filter((e) => e.currency !== N.Yri.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                _.h.wait(() => {
                    r.forEach((e) => (0, A.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [o, r]),
        (0, i.jsx)(R, { ...e, payments: d, subscription: n })
    );
}
