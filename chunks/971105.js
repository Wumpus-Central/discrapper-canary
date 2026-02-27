n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    _ = n(73153),
    m = n(384904),
    A = n(661439),
    g = n(73825),
    h = n(928039),
    x = n(235986),
    p = n(39190),
    E = n(933392),
    C = n(97352),
    T = n(166403),
    S = n(927578),
    I = n(61509),
    f = n(652215),
    N = n(788868),
    b = n(818348),
    j = n(985018),
    v = n(166789),
    O = n(124953);
function R(e) {
    let { payments: t, locale: n, compactMode: a, numPages: r } = e,
        o = s.useRef(null),
        [d, _] = s.useState(0),
        [A, g] = s.useState(null),
        x = t.slice(10 * d, (d + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [d]);
    let E = s.useCallback(
            (e) => {
                _(e);
                let n = t[t.length - 1].id;
                e >= r - 2 && A !== n && ((0, m.CK)(10, n), g(n));
            },
            [t, r, A],
        ),
        C = (0, h.A)("billing-history", o);
    return (0, i.jsx)(c.hD, {
        navigator: C,
        children: (0, i.jsx)(c.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, i.jsx)(p.A, {
                    className: v.GD,
                    currentPageIndex: d,
                    onChangePage: E,
                    numPages: r,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, i.jsx)(u.T7Y, {
                        className: v.Bd,
                        ref: o,
                        overflow: "auto",
                        children: x.map((e, t) =>
                            (0, i.jsx)(I.A, { className: l()(v.Nj, v.Bd), payment: e, locale: n, compactMode: a }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class y extends s.PureComponent {
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
                        children: j.intl.format(j.t["6mIX6s"], { paymentGatewayName: b.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: v.Q2,
                        children: j.intl.format(j.t.eG0uZB, {
                            paymentGatewayName: b.qm[e.paymentGateway],
                            billingHistoryLink: (0, S.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: s } = this.props,
            a = null != n && n.isPurchasedExternally;
        return 0 !== t.length || a
            ? (0, i.jsxs)("div", {
                  className: v.GD,
                  children: [
                      null != n && a ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: l()(v.PQ, v.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: l()(v.Nj, v.Bd),
                                              children: (0, i.jsxs)(x.A, {
                                                  className: v.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: O.p6,
                                                          children: j.intl.string(j.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: v.Ir,
                                                          children: j.intl.string(j.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: O.vj,
                                                          children: j.intl.string(j.t["6MqHXV"]),
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
function P(e) {
    let t = e.skuId,
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(N.pe).includes(t) || (0, S.ys)(n));
}
function L(e) {
    let t = (0, d.bG)([E.A], () => E.A.getPayments()),
        n = (0, d.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        a = s.useMemo(
            () =>
                new Set(
                    t.filter(P).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        l = s.useMemo(
            () =>
                new Set(
                    t.filter(P).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        r = (0, d.yK)([C.A], () => C.A.getPlanIdsForSkus(Array.from(l))),
        o = s.useCallback(() => r.length === a.size, [r, a]),
        c = s.useMemo(() => t.filter((e) => e.currency !== f.Yri.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                _.h.wait(() => {
                    l.forEach((e) => (0, g.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [o, l]),
        (0, i.jsx)(y, { ...e, payments: c, subscription: n })
    );
}
