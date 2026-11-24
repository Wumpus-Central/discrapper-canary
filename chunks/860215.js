n.d(t, { rV: () => S, _5: () => g });
var l = n(477900),
    r = n(582128),
    i = n(20742),
    a = n(430993),
    s = n(834730),
    u = n(534479),
    c = n(708146),
    o = n(977445),
    d = n(624210);
let h = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var p = n(937427),
    f = n(120700),
    m = n(818348);
let C = new Set([f.C.COLLECTIBLES_CHECKOUT, f.C.SLAYER_STOREFRONT_CHECKOUT]);
var y = n(169797),
    _ = n(792996);
let E = r.createContext({ order: null, isOrderCreationEnabled: !1 });
function g() {
    return r.useContext(E);
}
function I(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.rQ, {}), (0, l.jsx)(a.c, { children: n })] });
    return null != t ? (0, l.jsx)(y.Jg, { ...t, children: r }) : r;
}
function S(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: f,
            isGift: y,
            onOrderCreated: g,
            renderModalProps: S,
            children: A,
        } = e,
        {
            order: P,
            isCreateOrderLoading: x,
            createOrderError: v,
            shouldBlockOnOrderCreation: R,
            isOrderCreationEnabled: T,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: l,
                    paymentGateway: i,
                    checkoutFlow: a,
                    isGift: s,
                    loadId: u,
                    onOrderCreated: f,
                } = e,
                y = h.useConfig({ location: "payment_modal" }).enabled,
                _ = i === m.kM.VIRTUAL_CURRENCY,
                E = null != a && C.has(a),
                g = (t = !!_ || (!!E && !0 !== s && y)),
                I = null != n ? n[0] : void 0,
                [S, A] = (0, r.useState)(null),
                [P, x] = (0, r.useState)(null),
                [v, R] = (0, r.useState)(g),
                T = (0, r.useRef)(!1),
                M = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        R(!0);
                        try {
                            let e = null != l && (0, o.Fs)(l),
                                n = await (0, d.fS)({
                                    skuId: t,
                                    paymentGateway: i,
                                    loadId: u,
                                    testMode: e,
                                    promotionIdOverride: p.A.getPromotionIdOverride(),
                                });
                            (A(n), null != f && f(n));
                        } catch (e) {
                            x(
                                c.r.report(
                                    { site: "order_create", extra: { skuId: t, paymentGateway: String(i), loadId: u } },
                                    e,
                                ),
                            );
                        } finally {
                            R(!1);
                        }
                    },
                    [l, i, u, f],
                );
            return (
                (0, r.useEffect)(() => {
                    t && null != I && (null != S || null != P || T.current || ((T.current = !0), M({ skuId: I })));
                }, [I, t, S, M, P]),
                {
                    order: S,
                    isCreateOrderLoading: v,
                    createOrderError: P,
                    shouldBlockOnOrderCreation: g,
                    isOrderCreationEnabled: t,
                }
            );
        })({
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: f,
            isGift: y,
            loadId: t,
            onOrderCreated: g,
        }),
        M = r.useMemo(() => ({ order: P, isOrderCreationEnabled: T }), [P, T]);
    if (R) {
        if (x) return (0, l.jsx)(I, { renderModalProps: S, children: (0, l.jsx)(u.A, {}) });
        else if (null != v)
            return (0, l.jsx)(I, {
                renderModalProps: S,
                children: (0, l.jsx)(s.E, { variant: "body-md/normal", children: _.intl.string(_.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(E.Provider, { value: M, children: A });
}
