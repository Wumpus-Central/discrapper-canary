n.d(t, { rV: () => v, _5: () => P });
var l = n(477900),
    r = n(582128),
    i = n(20742),
    a = n(430993),
    s = n(331322),
    u = n(834730),
    c = n(821609),
    o = n(534479),
    d = n(708146),
    h = n(977445),
    p = n(624210);
let f = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var m = n(937427),
    C = n(129230),
    y = n(120700),
    _ = n(652215),
    E = n(818348);
let g = new Set([y.C.COLLECTIBLES_CHECKOUT, y.C.SLAYER_STOREFRONT_CHECKOUT]);
var S = n(169797),
    I = n(792996);
let A = r.createContext({ order: null, isOrderCreationEnabled: !1 });
function P() {
    return r.useContext(A);
}
function x(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.rQ, {}), (0, l.jsx)(a.c, { children: n })] });
    return null != t ? (0, l.jsx)(S.Jg, { ...t, children: r }) : r;
}
function v(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: y,
            isGift: S,
            onOrderCreated: P,
            renderModalProps: v,
            children: R,
        } = e,
        {
            order: T,
            isCreateOrderLoading: M,
            createOrderError: b,
            retryCreateOrder: L,
            shouldBlockOnOrderCreation: k,
            isOrderCreationEnabled: N,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: l,
                    paymentGateway: i,
                    checkoutFlow: a,
                    isGift: s,
                    loadId: u,
                    onOrderCreated: c,
                } = e,
                o = f.useConfig({ location: "payment_modal" }).enabled,
                y = i === E.kM.VIRTUAL_CURRENCY,
                S = null != a && g.has(a),
                I = (t = !!y || (!!S && !0 !== s && o)),
                A = null != n ? n[0] : void 0,
                [P, x] = (0, r.useState)(null),
                [v, R] = (0, r.useState)(null),
                [T, M] = (0, r.useState)(I),
                b = (0, r.useRef)(!1),
                L = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        (M(!0), R(null));
                        try {
                            let e = null != l && (0, h.Fs)(l),
                                n = await (0, p.fS)({
                                    skuId: t,
                                    paymentGateway: i,
                                    loadId: u,
                                    testMode: e,
                                    promotionIdOverride: m.A.getPromotionIdOverride(),
                                });
                            (x(n), null != c && c(n));
                        } catch (n) {
                            let e = d.r.report(
                                { site: "order_create", extra: { skuId: t, paymentGateway: String(i), loadId: u } },
                                n,
                            );
                            (C.default.track(_.HAw.PAYMENT_FLOW_ERROR, {
                                load_id: u,
                                sku_id: t,
                                payment_gateway: i,
                                checkout_flow: a,
                                error_message: e.message,
                                crashed: !1,
                            }),
                                R(e));
                        } finally {
                            M(!1);
                        }
                    },
                    [l, i, a, u, c],
                ),
                k = (0, r.useCallback)(() => {
                    null != A && L({ skuId: A });
                }, [A, L]);
            return (
                (0, r.useEffect)(() => {
                    t && null != A && (null != P || null != v || b.current || ((b.current = !0), L({ skuId: A })));
                }, [A, t, P, L, v]),
                {
                    order: P,
                    isCreateOrderLoading: T,
                    createOrderError: v,
                    retryCreateOrder: k,
                    shouldBlockOnOrderCreation: I,
                    isOrderCreationEnabled: t,
                }
            );
        })({
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: y,
            isGift: S,
            loadId: t,
            onOrderCreated: P,
        }),
        j = r.useMemo(() => ({ order: T, isOrderCreationEnabled: N }), [T, N]);
    if (k) {
        if (M) return (0, l.jsx)(x, { renderModalProps: v, children: (0, l.jsx)(o.A, {}) });
        else if (null != b)
            return (0, l.jsx)(x, {
                renderModalProps: v,
                children: (0, l.jsxs)(s.B, {
                    gap: 16,
                    align: "start",
                    children: [
                        (0, l.jsx)(u.E, { variant: "body-md/normal", children: b.getUserFacingMessage() }),
                        (0, l.jsx)(c.$, { text: I.intl.string(I.t["7NqTJn"]), onClick: L }),
                    ],
                }),
            });
    }
    return (0, l.jsx)(A.Provider, { value: j, children: R });
}
