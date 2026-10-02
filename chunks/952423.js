n.d(t, { M: () => eA });
var l = n(477900),
    r = n(582128),
    i = n(688810),
    s = n(795791),
    a = n(669874),
    u = n(202475),
    c = n(883645),
    o = n(601194),
    d = n(263532),
    f = n(132500),
    h = n(444927),
    m = n(38405),
    C = n(120700),
    p = n(17928),
    E = n(73153),
    I = n(277984),
    S = n(67480);
function y(e, t) {
    let { paymentSources: n, eligiblePaymentGateways: l } = t;
    return !!(null != e && e in n && (null == l || 0 === l.length || l.includes(n[e].paymentGateway)));
}
function g(e) {
    let {
        isGift: t,
        activeSubscription: n,
        defaultPaymentSourceId: l,
        paymentSources: r,
        eligiblePaymentGateways: i,
    } = e;
    if (!t && n?.paymentSourceId != null) return n.paymentSourceId;
    if (null != i && i.length > 0) {
        if (null != l && l in r && i.includes(r[l].paymentGateway)) return l;
        for (let e in r) {
            let t = r[e];
            if (i.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return l;
}
let _ = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: l,
            eligiblePaymentGateways: i,
            hasFetchedPaymentSources: s,
            paymentSources: a,
            initialPaymentSourceId: u,
        } = e,
        {
            setPaymentSourceId: c,
            setPendingPaymentSourceId: o,
            setHasAddedPaymentSourceThisSession: f,
        } = (0, d.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
            setHasAddedPaymentSourceThisSession: e.setHasAddedPaymentSourceThisSession,
        })),
        h = r.useRef(!1),
        m = r.useRef(!1),
        C = r.useCallback(() => {
            if (!h.current && !m.current) {
                if (y(u, { paymentSources: a, eligiblePaymentGateways: i })) {
                    (c(u), (h.current = !0));
                    return;
                }
                c(
                    g({
                        isGift: t,
                        activeSubscription: n,
                        defaultPaymentSourceId: l,
                        eligiblePaymentGateways: i,
                        paymentSources: a,
                    }),
                );
            }
        }, [t, n, l, i, c, u]);
    r.useEffect(() => {
        s ? C() : (0, I.$o)();
    }, [s, C]);
    let p = r.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            ((m.current = !0), f(), o(t.id), c(t.id));
        },
        [c, o, f],
    );
    return (
        r.useEffect(
            () => (
                E.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", p),
                () => {
                    E.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", p);
                }
            ),
            [p],
        ),
        null
    );
};
var P = n(531260);
function A(e) {
    let { hasFetchedPaymentSources: t, hasPaymentSources: n } = e,
        {
            activeSubscription: l,
            startedPaymentFlowWithPaymentSources: i,
            captureStartingPremiumSubscriptionPlanId: s,
            captureStartingFractionalPremiumEndsAt: a,
            captureStartingPaymentFlowWithPaymentSources: u,
        } = (0, d.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
            captureStartingPaymentFlowWithPaymentSources: e.captureStartingPaymentFlowWithPaymentSources,
        }));
    (r.useEffect(() => {
        t && null == i && u(n);
    }, [t, n, u, i]),
        r.useEffect(() => {
            null != l && s(l.planId);
        }, [l, s]));
    let { endsAt: c } = (0, P.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        r.useEffect(() => {
            null != c && 0 !== c.valueOf() && a(c);
        }, [c, a]),
        null
    );
}
var R = n(800342),
    M = n(328968),
    v = n(202541);
function T() {
    let e = (0, d.t4)((e) => e.skuIds),
        t = r.useMemo(() => e.filter((e) => !v.oz.includes(e)), [e]),
        n = (0, p.bG)([M.A], () => t.filter((e) => null == M.A.getForSKU(e) && !M.A.isFetchingForSKU(e)), [t]);
    return (
        r.useEffect(() => {
            for (let e of n) (0, R.QB)(e);
        }, [n]),
        null
    );
}
var x = n(813873),
    L = n(11939),
    b = n(566980),
    N = n(830382),
    U = n(543767),
    k = n(570221),
    H = n(666646);
function j() {
    var e;
    let t,
        n,
        l,
        i,
        {
            isGift: s,
            applicationId: a,
            purchaseState: u,
            priceOptions: c,
            selectedSkuId: o,
            paymentSourceId: f,
            applyWalletBalance: h,
            setApplyWalletBalance: m,
            setPurchasePreviewError: C,
        } = (0, d.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            applyWalletBalance: e.applyWalletBalance,
            setApplyWalletBalance: e.setApplyWalletBalance,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        { enabled: p } = (0, x.U)({ location: "HeadlessCheckoutStoreOTPInvoiceFetcher" }),
        E = u === b.h.PURCHASING || u === b.h.COMPLETED,
        { giftCardCurrency: I } = (0, L.h)(),
        S = p && !0 === h,
        y = r.useMemo(() => (S && null != I ? I : c.loaded ? c.currency : void 0), [S, I, c]),
        [g, _] =
            ((e = r.useMemo(
                () => ({
                    applicationId: a,
                    skuId: o,
                    paymentSourceId: f,
                    isGift: s,
                    currency: y,
                    preventFetch: E,
                    applyWalletBalance: p ? (h ?? void 0) : void 0,
                }),
                [a, o, f, s, y, E, p, h],
            )),
            (t = (0, r.useRef)(e)),
            (n = (0, r.useRef)(!1)),
            (0, r.useEffect)(() => {
                t.current = e;
            }),
            (l = JSON.stringify(e)),
            (i = (0, r.useCallback)(async () => {
                let e = t.current;
                if (null == e.skuId) return null;
                let l = {
                        applicationId: e.applicationId,
                        skuId: e.skuId,
                        paymentSourceId: e.paymentSourceId,
                        isGift: e.isGift,
                        currency: e.currency,
                        applyWalletBalance: e.applyWalletBalance ?? void 0,
                    },
                    r = n.current ? l : { ...l, paymentSourceId: null, applyWalletBalance: void 0 };
                n.current = !0;
                let i = await (0, N.NY)(r);
                return null != i ? k.A.createFromOTPPreview(i) : null;
            }, [l])),
            (0, U.$n)(e, i, void 0));
    (0, H.F)(g, _);
    let P = g?.applyWalletBalance;
    return (
        r.useEffect(() => {
            p && null == h && null != P && m(P);
        }, [p, h, P, m]),
        r.useEffect(() => {
            C(_);
        }, [_, C]),
        null
    );
}
var w = n(120992);
function O() {
    let { applicationId: e, skuIds: t } = (0, d.t4)((e) => ({ applicationId: e.applicationId, skuIds: e.skuIds }));
    return ((0, w.c)({ applicationId: e, skuIDs: t }), null);
}
var F = n(166532);
function D(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, i] = (0, U.YV)(t, n),
        { setCheckoutInvoicePreview: s } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            s(l, i);
        }, [l, i, s]),
        null
    );
}
function G(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, i] = (0, U.C8)(t, n),
        { setCheckoutInvoicePreview: s } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            s(l, i);
        }, [l, i, s]),
        null
    );
}
function B(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, i] = (0, U.QQ)(t, n),
        { setCheckoutInvoicePreview: s } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            s(l, i);
        }, [l, i, s]),
        null
    );
}
function Z(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, i] = (0, U.YV)(t, n),
        { setRenewalInvoicePreview: s } = (0, d.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        r.useEffect(() => {
            s(l, i);
        }, [l, i, s]),
        null
    );
}
function K() {
    let e = (0, c.Ay)((e) => e.step),
        t = r.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: i,
            setFetchCheckoutInvoicePreviewRequest: s,
            setFetchRenewalInvoicePreviewRequest: a,
        } = (0, d.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
    return (r.useEffect(() => {
        let n = t.current;
        ((t.current = e), n === F.pn.REVIEW && e !== F.pn.REVIEW && (s(null), a(null)));
    }, [e, s, a]),
    null == n && null == i)
        ? null
        : (null != i && i.type,
          (0, l.jsxs)(l.Fragment, {
              children: [
                  null != n && "subscription_checkout_invoice" === n.type && (0, l.jsx)(D, { fetchParams: n.params }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(G, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(B, { fetchParams: n.params }),
                  null != i && (0, l.jsx)(Z, { fetchParams: i.params }),
              ],
          }));
}
var W = n(428865),
    Y = n(624210),
    q = n(739508);
class Q {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        ((this.checkoutStore = e), (this.isPatchingRef = t));
    }
    shouldPatchOrder(e) {
        return !(0, W.L)(e);
    }
    persistedPaymentSourceId(e) {
        let t = e.billing_facet;
        return null == t || null == t.payment_source_id ? null : t.payment_source_id;
    }
    persistedCurrency(e) {
        let t = e.billing_facet;
        return null == t || null == t.currency ? null : t.currency;
    }
    pendingOrderUpdates(e, t) {
        let n = {};
        return (
            null != t.paymentSourceId &&
                this.persistedPaymentSourceId(e) !== t.paymentSourceId &&
                (n.paymentSourceId = t.paymentSourceId),
            null != t.currency && this.persistedCurrency(e) !== t.currency && (n.currency = t.currency),
            Object.keys(n).length > 0 ? n : null
        );
    }
    async syncOrder(e) {
        let { order: t, orderUpdates: n, orderSyncError: l } = e;
        if (null == t || !this.shouldPatchOrder(t) || null != l) return;
        let r = this.pendingOrderUpdates(t, n);
        if (null == r || this.isPatchingRef.current) return;
        let { setOrder: i, setIsOrderSyncing: s, setOrderSyncError: a } = this.checkoutStore.getState();
        ((this.isPatchingRef.current = !0), s(!0));
        try {
            let e = await (0, Y.iY)({ orderId: t.id, updates: r, expectedRevision: t.revision });
            if (null != e) {
                i(e);
                let { currency: n, ...l } = r;
                if (null != this.pendingOrderUpdates(e, l)) {
                    let e = Error("Order patch was not applied");
                    ((0, q.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), a(e));
                }
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            ((0, q.gr)(n) || (0, q.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), a(e));
        } finally {
            ((this.isPatchingRef.current = !1), s(!1));
        }
    }
}
function z() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        selectedCurrency: n,
        contextMetadata: l,
    } = (0, d.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        selectedCurrency: e.get("checkoutSelectedCurrency"),
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, d.Q9)(),
                n = (0, r.useRef)(!1),
                l = (0, r.useMemo)(() => new Q(t, n), [t]),
                { order: i, orderSyncError: s } = (0, d.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, r.useEffect)(() => {
                l.syncOrder({ order: i, orderUpdates: e, orderSyncError: s });
            }, [l, i, e, s]);
        })(
            r.useMemo(
                () => ({ paymentSourceId: e, paymentGateway: t, currency: n, loadId: l.loadId }),
                [e, t, n, l.loadId],
            ),
        ),
        null
    );
}
var V = n(991690),
    X = n(10716),
    $ = n(795816),
    J = n(627363),
    ee = n(885386);
function et() {
    let e = (0, d.t4)((e) => e.applicationId),
        { data: t } = (0, J.YY)(e),
        n = ee.Q_.useSetting(),
        l = (0, p.bG)([X.A], () => X.A.getFetchState());
    return (
        r.useEffect(() => {
            null != t && t.supportsEmbeddedSurface(V.U.MAIN) && n && null == l && (0, $.SE)();
        }, [t, n, l]),
        null
    );
}
function en() {
    let {
            orderRecord: e,
            orderSyncError: t,
            setOrderSyncError: n,
            setPaymentSourceId: l,
            setCheckoutCurrency: i,
        } = (0, d.t4)((e) => ({
            orderRecord: e.orderRecord,
            orderSyncError: e.orderSyncError,
            setOrderSyncError: e.setOrderSyncError,
            setPaymentSourceId: e.setPaymentSourceId,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        s = null != e ? e.billingFacetRecord : null,
        a = null != s ? s.paymentSourceId : null,
        u = null != s ? s.fiatCurrency : null;
    return (
        r.useEffect(() => {
            null != e && null != t && (l(a), i(u), n(null));
        }, [e, t, a, u, l, i, n]),
        null
    );
}
var el = n(158317);
function er() {
    let e = (0, d.Q9)(),
        {
            order: t,
            setOrder: n,
            lastOrderUpdateRevision: l,
        } = (0, d.t4)((e) => ({
            order: e.order,
            setOrder: e.setOrder,
            lastOrderUpdateRevision: e.lastOrderUpdateRevision,
        })),
        i = null != t ? t.id : null,
        s = null != t ? t.revision : 0;
    return (
        r.useEffect(() => {
            if (null == i || l <= s) return;
            let t = !1;
            return (
                (0, el.r$)(i).then((l) => {
                    if (t || null == l) return;
                    let r = e.getState().order;
                    (null != r && r.id === l.id && l.revision <= r.revision) || n(l);
                }),
                () => {
                    t = !0;
                }
            );
        }, [i, l, s, n, e]),
        null
    );
}
function ei() {
    let e = (0, d.t4)((e) => e.handleOrderUpdate);
    return (
        r.useEffect(
            () => (
                E.h.subscribe("ORDER_UPDATE", e),
                () => {
                    E.h.unsubscribe("ORDER_UPDATE", e);
                }
            ),
            [e],
        ),
        null
    );
}
let es = [
        "BILLING_SUBSCRIPTION_UPDATE_FAIL",
        "GIFT_CODE_REDEEM_FAILURE",
        "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
        "PREMIUM_PAYMENT_UPDATE_FAIL",
        "SKU_PURCHASE_FAIL",
    ],
    ea = ["BILLING_PAYMENT_FETCH_SUCCESS", "PAYMENT_UPDATE"],
    eu = [
        "BILLING_SUBSCRIPTION_UPDATE_START",
        "PAYMENT_AUTHENTICATION_CLEAR_ERROR",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_SUBSCRIBE_START",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
    ];
function ec() {
    let {
        handlePaymentFailure: e,
        handlePaymentUpdate: t,
        handlePaymentAuthenticationError: n,
        handlePaymentAuthenticationCancel: l,
        resetPaymentAuthentication: i,
    } = (0, d.t4)((e) => ({
        handlePaymentFailure: e.handlePaymentFailure,
        handlePaymentUpdate: e.handlePaymentUpdate,
        handlePaymentAuthenticationError: e.handlePaymentAuthenticationError,
        handlePaymentAuthenticationCancel: e.handlePaymentAuthenticationCancel,
        resetPaymentAuthentication: e.resetPaymentAuthentication,
    }));
    return (
        r.useEffect(() => {
            for (let t of es) E.h.subscribe(t, e);
            for (let e of ea) E.h.subscribe(e, t);
            for (let e of eu) E.h.subscribe(e, i);
            return (
                E.h.subscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                E.h.subscribe("PAYMENT_AUTHENTICATION_CANCEL", l),
                () => {
                    for (let t of es) E.h.unsubscribe(t, e);
                    for (let e of ea) E.h.unsubscribe(e, t);
                    for (let e of eu) E.h.unsubscribe(e, i);
                    (E.h.unsubscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                        E.h.unsubscribe("PAYMENT_AUTHENTICATION_CANCEL", l));
                }
            );
        }, [e, t, n, l, i]),
        null
    );
}
var eo = n(83617),
    ed = n(655857),
    ef = n(652215);
function eh() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: l,
            excludeSubscriptionPlansBySKU: i,
        } = (0, d.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        s = r.useMemo(() => (0, ed._r)(n), [n]),
        { subscriptionPlanIdForCurrency: a, hasFetchedRelatedSubscriptionPlans: u } = (0, ed.ow)({
            skuIDs: s,
            paymentSourceId: t,
            isGift: l,
        }),
        c = JSON.stringify(s),
        o = r.useRef(s);
    return (
        r.useEffect(() => {
            o.current = s;
        }),
        r.useEffect(() => {
            (async function () {
                let { current: n } = o;
                try {
                    n.length > 0 && !i && (await (0, eo.c_)(t, n));
                } catch (e) {
                    if (e.code !== eo.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(ef.tEg);
        }, [t, c, i, e, a, u, l]),
        null
    );
}
let em = [
        "BILLING_SUBSCRIPTION_UPDATE_START",
        "PAYMENT_AUTHENTICATION_CLEAR_ERROR",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_SUBSCRIBE_START",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
    ],
    eC = ["SKU_PURCHASE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL"],
    ep = ["USER_PAYMENT_CLIENT_ADD"];
function eE() {
    let {
        handlePaymentFailureForPurchaseTokenAuth: e,
        handlePurchaseTokenAuth: t,
        resetPurchaseTokenState: n,
    } = (0, d.t4)((e) => ({
        purchaseTokenAuthState: e.purchaseTokenAuthState,
        handlePaymentFailureForPurchaseTokenAuth: e.handlePaymentFailureForPurchaseTokenAuth,
        handlePurchaseTokenAuth: e.handlePurchaseTokenAuth,
        resetPurchaseTokenState: e.resetPurchaseTokenState,
    }));
    return (
        r.useEffect(() => {
            for (let e of em) E.h.subscribe(e, n);
            for (let t of eC) E.h.subscribe(t, e);
            for (let e of ep) E.h.subscribe(e, t);
            return () => {
                for (let e of em) E.h.unsubscribe(e, n);
                for (let t of eC) E.h.unsubscribe(t, e);
                for (let e of ep) E.h.unsubscribe(e, t);
            };
        }, [n, e, t]),
        null
    );
}
var eI = n(741923),
    eS = n(504275);
function ey() {
    return (
        !(function () {
            let e = (0, c.s2)(),
                { purchaseState: t, setPurchaseState: n } = (0, d.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, F.zT)(e, t, n);
        })(),
        null
    );
}
let eg = [
    C.C.PREMIUM_CHECKOUT,
    C.C.GUILD_ROLE_CHECKOUT,
    C.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    C.C.GUILD_BOOST_CHECKOUT,
    C.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
];
function e_(e) {
    var t, n;
    let { checkoutInitParameters: i = eS.r, loadId: s, discoverySessionId: a, children: c } = e,
        { order: o, isOrderCreationEnabled: E } = (0, eI._5)(),
        I = (0, h.A)(() => {
            let e = o?.id ?? s ?? (0, f.A)();
            return (
                m.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: a, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: P,
            defaultPaymentSourceId: R,
            eligiblePaymentGateways: M,
            hasFetchedPaymentSources: v,
            paymentSources: x,
            hasPaymentSources: L,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: l, initialPaymentSourceId: i } = e,
                s = (0, p.bG)([S.A], () => S.A.get(t), [t]),
                a = null != s ? s.eligiblePaymentGateways : null,
                {
                    defaultPaymentSourceId: c,
                    paymentSources: o,
                    hasFetchedPaymentSources: d,
                    hasPaymentSources: f,
                } = (0, u.j)();
            return {
                initialCheckoutPaymentSourceId: r.useMemo(() => {
                    var e;
                    return y(
                        (e = {
                            isGift: n,
                            activeSubscription: l,
                            defaultPaymentSourceId: c,
                            eligiblePaymentGateways: a,
                            paymentSources: o,
                            initialPaymentSourceId: i,
                        }).initialPaymentSourceId,
                        e,
                    )
                        ? (e.initialPaymentSourceId ?? null)
                        : (g(e) ?? null);
                }, [n, l, c, a, o, i]),
                defaultPaymentSourceId: c,
                eligiblePaymentGateways: a,
                hasFetchedPaymentSources: d,
                paymentSources: o,
                hasPaymentSources: f,
            };
        })({
            skuId: i.skuIds[0],
            isGift: i.isGift,
            activeSubscription: i.activeSubscription,
            initialPaymentSourceId: i.initialPaymentSourceId,
        }),
        [b] = r.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: null,
                startingPremiumSubscriptionPlanId: null != i.activeSubscription ? i.activeSubscription?.planId : null,
            };
            return (
                v && (e.startedPaymentFlowWithPaymentSources = L),
                (0, d.y$)({
                    checkoutInitParameters: i,
                    startingValues: e,
                    contextMetadata: I,
                    order: o,
                    initialPaymentSourceId: P,
                    initialCurrency: (0, ed.el)({
                        activeSubscription: i.activeSubscription,
                        skuIds: i.skuIds,
                        paymentSourceId: P,
                        isGift: i.isGift,
                    }),
                })
            );
        }),
        N = r.useRef(null != o);
    (r.useEffect(() => {
        N.current || null == o || (b.getState().setOrder(o), (N.current = !0));
    }, [o, b]),
        r.useEffect(() => {
            b.getState().setCheckoutInitParameters(i);
        }, [b, i]));
    let U = ((t = i.purchaseType), null != (n = i.unifiedCheckoutFlow) && t === ef.VVm.SUBSCRIPTION && eg.includes(n)),
        k = i.unifiedCheckoutFlow === C.C.GUILD_ROLE_CHECKOUT,
        H = i.purchaseType === ef.VVm.ONE_TIME && i.unifiedCheckoutFlow !== C.C.ORB_CHECKOUT,
        w = !E && H;
    return (0, l.jsxs)(d.Ni, {
        value: b,
        children: [
            (0, l.jsx)(A, { hasFetchedPaymentSources: v, hasPaymentSources: L }),
            (0, l.jsx)(ey, {}),
            (0, l.jsx)(ec, {}),
            i.unifiedCheckoutFlow !== C.C.ORB_CHECKOUT && (0, l.jsx)(eE, {}),
            (0, l.jsx)(et, {}),
            (0, l.jsx)(eh, {}),
            (0, l.jsx)(z, {}),
            (0, l.jsx)(en, {}),
            (0, l.jsx)(ei, {}),
            (0, l.jsx)(er, {}),
            (0, l.jsx)(_, {
                isGift: i.isGift,
                activeSubscription: i.activeSubscription,
                defaultPaymentSourceId: R,
                eligiblePaymentGateways: M,
                hasFetchedPaymentSources: v,
                paymentSources: x,
                initialPaymentSourceId: i.initialPaymentSourceId,
            }),
            U && (0, l.jsx)(K, {}),
            k && (0, l.jsx)(T, {}),
            H && (0, l.jsx)(O, {}),
            w && (0, l.jsx)(j, {}),
            c,
        ],
    });
}
var eP = n(783327);
function eA(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: i,
            discoverySessionId: a,
            purchaseType: u = ef.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: o,
            ...d
        } = e,
        f = JSON.stringify(d.skuIDs),
        h = r.useMemo(() => d.skuIDs, [f]),
        m = (0, s.$w)(),
        C = r.useMemo(
            () => ({
                skuIds: h,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                initialPaymentSourceId: d.initialPaymentSourceId ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: u,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: o ?? m,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? v.tv,
                tenantParamsMap: d.tenantParamsMap ?? {},
            }),
            [
                h,
                u,
                d.isGift,
                d.referralTrialOfferId,
                d.activeSubscription,
                d.initialPaymentSourceId,
                d.excludeSubscriptionPlansBySKU,
                d.applicationId,
                d.defaultPlanId,
                d.referralCode,
                o,
                m,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
                d.tenantParamsMap,
            ],
        );
    return (0, l.jsx)(c.Gf, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, l.jsx)(e_, {
            loadId: i,
            discoverySessionId: a,
            checkoutInitParameters: C,
            children: (0, l.jsx)(eR, { ...d, skuIDs: h, purchaseType: u }),
        }),
    });
}
function eR(e) {
    let { errorHandlingBehavior: t = "close-and-alert", onErrorReported: n, skuIDs: s, children: f } = e,
        { paymentSources: h } = (0, u.j)(),
        {
            contextMetadata: m,
            unifiedCheckoutFlow: C,
            purchaseType: p,
            isGift: E,
            selectedSkuId: I,
            selectedPlanId: S,
            paymentSourceId: y,
            paymentGateway: g,
        } = (0, d.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            purchaseType: e.purchaseType,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
            paymentGateway: e.paymentGateway,
        })),
        _ = null != y && null != h[y] ? h[y]?.type : null,
        P = r.useMemo(
            () => ({ payment_source_id: y, payment_gateway: g, payment_source_type: _, checkout_flow: C, is_gift: E }),
            [y, g, _, C, E],
        ),
        A = (0, i.Db)(),
        R = (0, c.BQ)();
    return (0, l.jsx)(o.yv, {
        children: (0, l.jsx)(eP.R, {
            children: (0, l.jsx)(a.j, {
                errorHandlingBehavior: t,
                locationStack: A,
                onErrorReported: n,
                loadId: m.loadId,
                selectedSkuId: I ?? null,
                selectedPlanId: S ?? null,
                isGift: E,
                skuIds: s,
                purchaseType: p,
                checkoutStepsHistory: R,
                additionalAnalyticsData: P,
                children: f,
            }),
        }),
    });
}
