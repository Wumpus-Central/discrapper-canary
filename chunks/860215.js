n.d(t, { rV: () => I, _5: () => g });
var l = n(477900),
    r = n(582128),
    i = n(20742),
    a = n(430993),
    s = n(834730),
    u = n(534479),
    c = n(977445),
    o = n(624210);
let d = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var h = n(937427),
    p = n(949192),
    f = n(120700),
    m = n(818348);
let C = new Set([f.C.COLLECTIBLES_CHECKOUT, f.C.SLAYER_STOREFRONT_CHECKOUT]);
var y = n(169797),
    E = n(792996);
let _ = r.createContext({ order: null, isOrderCreationEnabled: !1 });
function g() {
    return r.useContext(_);
}
function S(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.rQ, {}), (0, l.jsx)(a.c, { children: n })] });
    return null != t ? (0, l.jsx)(y.Jg, { ...t, children: r }) : r;
}
function I(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: f,
            isGift: y,
            onOrderCreated: g,
            renderModalProps: I,
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
                y = d.useConfig({ location: "payment_modal" }).enabled,
                E = i === m.kM.VIRTUAL_CURRENCY,
                _ = null != a && C.has(a);
            t = !!E || (!!_ && !0 !== s && y);
            let g = null != n ? n[0] : void 0,
                [S, I] = (0, r.useState)(null),
                [A, P] = (0, r.useState)(null),
                [x, v] = (0, r.useState)(E),
                R = (0, r.useRef)(!1),
                T = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        v(!0);
                        try {
                            let e = null != l && (0, c.Fs)(l),
                                n = await (0, o.fS)({
                                    skuId: t,
                                    paymentGateway: i,
                                    loadId: u,
                                    testMode: e,
                                    promotionIdOverride: h.A.getPromotionIdOverride(),
                                });
                            (I(n), null != f && f(n));
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            ((0, p.gr)(n) ||
                                (0, p.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(i), loadId: u },
                                }),
                                P(e));
                        } finally {
                            v(!1);
                        }
                    },
                    [l, i, u, f],
                );
            return (
                (0, r.useEffect)(() => {
                    t && null != g && (null != S || null != A || R.current || ((R.current = !0), T({ skuId: g })));
                }, [g, t, S, T, A]),
                {
                    order: S,
                    isCreateOrderLoading: x,
                    createOrderError: A,
                    shouldBlockOnOrderCreation: E,
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
        if (x) return (0, l.jsx)(S, { renderModalProps: I, children: (0, l.jsx)(u.A, {}) });
        else if (null != v)
            return (0, l.jsx)(S, {
                renderModalProps: I,
                children: (0, l.jsx)(s.E, { variant: "body-md/normal", children: E.intl.string(E.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(_.Provider, { value: M, children: A });
}
