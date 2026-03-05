n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(837381),
    c = n(311907),
    u = n(397927),
    _ = n(73153),
    g = n(384904),
    m = n(661439),
    A = n(73825),
    h = n(928039),
    p = n(235986),
    x = n(39190),
    E = n(933392),
    T = n(97352),
    S = n(166403),
    C = n(927578),
    f = n(61509),
    I = n(652215),
    b = n(788868),
    N = n(818348),
    v = n(985018),
    j = n(62495),
    O = n(956171);
function R(e) {
    let { payments: t, locale: n, compactMode: l, numPages: r } = e,
        o = s.useRef(null),
        [c, _] = s.useState(0),
        [m, A] = s.useState(null),
        p = t.slice(10 * c, (c + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [c]);
    let E = s.useCallback(
            (e) => {
                _(e);
                let n = t[t.length - 1].id;
                e >= r - 2 && m !== n && ((0, g.CK)(10, n), A(n));
            },
            [t, r, m],
        ),
        T = (0, h.A)("billing-history", o);
    return (0, i.jsx)(d.hD, {
        navigator: T,
        children: (0, i.jsx)(d.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, i.jsx)(x.A, {
                    className: j.GD,
                    currentPageIndex: c,
                    onChangePage: E,
                    numPages: r,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, i.jsx)(u.T7Y, {
                        className: j.Bd,
                        ref: o,
                        overflow: "auto",
                        children: p.map((e, t) =>
                            (0, i.jsx)(f.A, { className: a()(j.Nj, j.Bd), payment: e, locale: n, compactMode: l }, t),
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
            (0, m.X)(), (0, g.CK)(30);
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
                        children: v.intl.format(v.t["6mIX6s"], { paymentGatewayName: N.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: j.Q2,
                        children: v.intl.format(v.t.eG0uZB, {
                            paymentGatewayName: N.qm[e.paymentGateway],
                            billingHistoryLink: (0, C.tW)(e.paymentGateway, "BILLING_HISTORY"),
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
                                              children: (0, i.jsxs)(p.A, {
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
    return !(null == t || null == n || Object.values(b.pe).includes(t) || (0, C.ys)(n));
}
function L(e) {
    let t = (0, c.bG)([E.A], () => E.A.getPayments()),
        n = (0, c.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
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
        a = s.useMemo(
            () =>
                new Set(
                    t.filter(P).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        r = (0, c.yK)([T.A], () => T.A.getPlanIdsForSkus(Array.from(a))),
        o = s.useCallback(() => r.length === l.size, [r, l]),
        d = s.useMemo(() => t.filter((e) => e.currency !== I.Yri.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                _.h.wait(() => {
                    a.forEach((e) => (0, A.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [o, a]),
        (0, i.jsx)(y, { ...e, payments: d, subscription: n })
    );
}
