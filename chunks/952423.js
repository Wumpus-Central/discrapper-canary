n.d(t, { M: () => eR });
var l = n(477900),
    r = n(582128),
    i = n(688810),
    s = n(795791),
    a = n(669874),
    u = n(202475),
    c = n(883645),
    o = n(601194),
    d = n(642639),
    f = n(132500),
    h = n(444927),
    C = n(38405),
    p = n(120700),
    m = n(17928),
    E = n(73153),
    I = n(277984),
    y = n(67480);
function S(e, t) {
    let { paymentSources: n, eligiblePaymentGateways: l } = t;
    return !!(null != e && e in n && (null == l || 0 === l.length || l.includes(n[e].paymentGateway)));
}
function _(e) {
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
let g = (e) => {
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
        C = r.useRef(!1),
        p = r.useCallback(() => {
            if (!h.current && !C.current) {
                if (S(u, { paymentSources: a, eligiblePaymentGateways: i })) {
                    (c(u), (h.current = !0));
                    return;
                }
                c(
                    _({
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
        s ? p() : (0, I.$o)();
    }, [s, p]);
    let m = r.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            ((C.current = !0), f(), o(t.id), c(t.id));
        },
        [c, o, f],
    );
    return (
        r.useEffect(
            () => (
                E.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", m),
                () => {
                    E.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", m);
                }
            ),
            [m],
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
        n = (0, m.bG)([M.A], () => t.filter((e) => null == M.A.getForSKU(e) && !M.A.isFetchingForSKU(e)), [t]);
    return (
        r.useEffect(() => {
            for (let e of n) (0, R.QB)(e);
        }, [n]),
        null
    );
}
var L = n(813873),
    x = n(11939),
    b = n(566980),
    N = n(830382),
    U = n(543767),
    k = n(570221);
function H(e) {
    return JSON.stringify({ ...e, paymentSourceId: void 0, previousTotal: void 0 });
}
var w = n(666646);
function j() {
    var e;
    let t,
        n,
        l,
        i,
        s,
        {
            isGift: a,
            applicationId: u,
            purchaseState: c,
            priceOptions: o,
            selectedSkuId: f,
            paymentSourceId: h,
            applyWalletBalance: C,
            setApplyWalletBalance: p,
            setPurchasePreviewError: m,
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
        { enabled: E } = (0, L.U)({ location: "HeadlessCheckoutStoreOTPInvoiceFetcher" }),
        I = c === b.h.PURCHASING || c === b.h.COMPLETED,
        { giftCardCurrency: y } = (0, x.h)(),
        S = E && !0 === C,
        _ = r.useMemo(() => (S && null != y ? y : o.loaded ? o.currency : void 0), [S, y, o]),
        [g, P] =
            ((e = r.useMemo(
                () => ({
                    applicationId: u,
                    skuId: f,
                    paymentSourceId: h,
                    isGift: a,
                    currency: _,
                    preventFetch: I,
                    applyWalletBalance: E ? (C ?? void 0) : void 0,
                }),
                [u, f, h, a, _, I, E, C],
            )),
            (t = (0, r.useRef)(e)),
            (n = (0, r.useRef)(!1)),
            (l = (0, r.useRef)(new WeakMap())),
            (0, r.useEffect)(() => {
                t.current = e;
            }),
            (i = JSON.stringify(e)),
            (s = (0, r.useCallback)(
                async (e) => {
                    var r;
                    let i = t.current;
                    if (null == i.skuId) return null;
                    let s = {
                            applicationId: i.applicationId,
                            skuId: i.skuId,
                            paymentSourceId: i.paymentSourceId,
                            isGift: i.isGift,
                            currency: i.currency,
                            applyWalletBalance: i.applyWalletBalance ?? void 0,
                        },
                        a = n.current ? s : { ...s, paymentSourceId: null, applyWalletBalance: void 0 };
                    n.current = !0;
                    let u = (function (e, t, n) {
                            if (null == t) return;
                            let l = e.get(t);
                            if (null != l && l.pricingKey === H(n) && l.paymentSourceId !== n.paymentSourceId)
                                return t.total;
                        })(l.current, e, a),
                        c = await (0, N.NY)({ ...a, previousTotal: u }),
                        o = null != c ? k.A.createFromOTPPreview(c) : null;
                    return (
                        (r = l.current),
                        null != o &&
                            null != a.paymentSourceId &&
                            r.set(o, { paymentSourceId: a.paymentSourceId, pricingKey: H(a) }),
                        o
                    );
                },
                [i],
            )),
            (0, U.$n)(e, s, void 0));
    (0, w.F)(g, P);
    let A = g?.applyWalletBalance;
    return (
        r.useEffect(() => {
            E && null == C && null != A && p(A);
        }, [E, C, A, p]),
        r.useEffect(() => {
            m(P);
        }, [P, m]),
        null
    );
}
var O = n(120992);
function F() {
    let { applicationId: e, skuIds: t } = (0, d.t4)((e) => ({ applicationId: e.applicationId, skuIds: e.skuIds }));
    return ((0, O.c)({ applicationId: e, skuIDs: t }), null);
}
var D = n(166532);
function G(e) {
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
function B(e) {
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
function Z(e) {
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
function K(e) {
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
function W() {
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
        ((t.current = e), n === D.pn.REVIEW && e !== D.pn.REVIEW && (s(null), a(null)));
    }, [e, s, a]),
    null == n && null == i)
        ? null
        : (null != i && i.type,
          (0, l.jsxs)(l.Fragment, {
              children: [
                  null != n && "subscription_checkout_invoice" === n.type && (0, l.jsx)(G, { fetchParams: n.params }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(B, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(Z, { fetchParams: n.params }),
                  null != i && (0, l.jsx)(K, { fetchParams: i.params }),
              ],
          }));
}
var Y = n(428865),
    q = n(624210),
    Q = n(739508);
class V {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        ((this.checkoutStore = e), (this.isPatchingRef = t));
    }
    shouldPatchOrder(e) {
        return !(0, Y.L)(e);
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
            let e = await (0, q.iY)({ orderId: t.id, updates: r, expectedRevision: t.revision });
            if (null != e) {
                i(e);
                let { currency: n, ...l } = r;
                if (null != this.pendingOrderUpdates(e, l)) {
                    let e = Error("Order patch was not applied");
                    ((0, Q.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), a(e));
                }
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            ((0, Q.gr)(n) || (0, Q.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), a(e));
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
                l = (0, r.useMemo)(() => new V(t, n), [t]),
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
var X = n(991690),
    $ = n(10716),
    J = n(795816),
    ee = n(627363),
    et = n(885386);
function en() {
    let e = (0, d.t4)((e) => e.applicationId),
        { data: t } = (0, ee.YY)(e),
        n = et.Q_.useSetting(),
        l = (0, m.bG)([$.A], () => $.A.getFetchState());
    return (
        r.useEffect(() => {
            null != t && t.supportsEmbeddedSurface(X.U.MAIN) && n && null == l && (0, J.SE)();
        }, [t, n, l]),
        null
    );
}
function el() {
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
var er = n(158317);
function ei() {
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
                (0, er.r$)(i).then((l) => {
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
function es() {
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
let ea = [
        "BILLING_SUBSCRIPTION_UPDATE_FAIL",
        "GIFT_CODE_REDEEM_FAILURE",
        "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
        "PREMIUM_PAYMENT_UPDATE_FAIL",
        "SKU_PURCHASE_FAIL",
    ],
    eu = ["BILLING_PAYMENT_FETCH_SUCCESS", "PAYMENT_UPDATE"],
    ec = [
        "BILLING_SUBSCRIPTION_UPDATE_START",
        "PAYMENT_AUTHENTICATION_CLEAR_ERROR",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_SUBSCRIBE_START",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
    ];
function eo() {
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
            for (let t of ea) E.h.subscribe(t, e);
            for (let e of eu) E.h.subscribe(e, t);
            for (let e of ec) E.h.subscribe(e, i);
            return (
                E.h.subscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                E.h.subscribe("PAYMENT_AUTHENTICATION_CANCEL", l),
                () => {
                    for (let t of ea) E.h.unsubscribe(t, e);
                    for (let e of eu) E.h.unsubscribe(e, t);
                    for (let e of ec) E.h.unsubscribe(e, i);
                    (E.h.unsubscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                        E.h.unsubscribe("PAYMENT_AUTHENTICATION_CANCEL", l));
                }
            );
        }, [e, t, n, l, i]),
        null
    );
}
var ed = n(83617),
    ef = n(655857),
    eh = n(652215);
function eC() {
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
        s = r.useMemo(() => (0, ef._r)(n), [n]),
        { subscriptionPlanIdForCurrency: a, hasFetchedRelatedSubscriptionPlans: u } = (0, ef.ow)({
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
                    n.length > 0 && !i && (await (0, ed.c_)(t, n));
                } catch (e) {
                    if (e.code !== ed.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(eh.tEg);
        }, [t, c, i, e, a, u, l]),
        null
    );
}
let ep = [
        "BILLING_SUBSCRIPTION_UPDATE_START",
        "PAYMENT_AUTHENTICATION_CLEAR_ERROR",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_SUBSCRIBE_START",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
    ],
    em = ["SKU_PURCHASE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL"],
    eE = ["USER_PAYMENT_CLIENT_ADD"];
function eI() {
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
            for (let e of ep) E.h.subscribe(e, n);
            for (let t of em) E.h.subscribe(t, e);
            for (let e of eE) E.h.subscribe(e, t);
            return () => {
                for (let e of ep) E.h.unsubscribe(e, n);
                for (let t of em) E.h.unsubscribe(t, e);
                for (let e of eE) E.h.unsubscribe(e, t);
            };
        }, [n, e, t]),
        null
    );
}
var ey = n(741923),
    eS = n(504275);
function e_() {
    return (
        !(function () {
            let e = (0, c.s2)(),
                { purchaseState: t, setPurchaseState: n } = (0, d.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, D.zT)(e, t, n);
        })(),
        null
    );
}
let eg = [
    p.C.PREMIUM_CHECKOUT,
    p.C.GUILD_ROLE_CHECKOUT,
    p.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    p.C.GUILD_BOOST_CHECKOUT,
    p.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
];
function eP(e) {
    var t, n;
    let { checkoutInitParameters: i = eS.r, loadId: s, discoverySessionId: a, children: c } = e,
        { order: o, isOrderCreationEnabled: E } = (0, ey._5)(),
        I = (0, h.A)(() => {
            let e = o?.id ?? s ?? (0, f.A)();
            return (
                C.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: a, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: P,
            defaultPaymentSourceId: R,
            eligiblePaymentGateways: M,
            hasFetchedPaymentSources: v,
            paymentSources: L,
            hasPaymentSources: x,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: l, initialPaymentSourceId: i } = e,
                s = (0, m.bG)([y.A], () => y.A.get(t), [t]),
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
                    return S(
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
                        : (_(e) ?? null);
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
                v && (e.startedPaymentFlowWithPaymentSources = x),
                (0, d.y$)({
                    checkoutInitParameters: i,
                    startingValues: e,
                    contextMetadata: I,
                    order: o,
                    initialPaymentSourceId: P,
                    initialCurrency: (0, ef.el)({
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
    let U = ((t = i.purchaseType), null != (n = i.unifiedCheckoutFlow) && t === eh.VVm.SUBSCRIPTION && eg.includes(n)),
        k = i.unifiedCheckoutFlow === p.C.GUILD_ROLE_CHECKOUT,
        H = i.purchaseType === eh.VVm.ONE_TIME && i.unifiedCheckoutFlow !== p.C.ORB_CHECKOUT,
        w = !E && H;
    return (0, l.jsxs)(d.Ni, {
        value: b,
        children: [
            (0, l.jsx)(A, { hasFetchedPaymentSources: v, hasPaymentSources: x }),
            (0, l.jsx)(e_, {}),
            (0, l.jsx)(eo, {}),
            i.unifiedCheckoutFlow !== p.C.ORB_CHECKOUT && (0, l.jsx)(eI, {}),
            (0, l.jsx)(en, {}),
            (0, l.jsx)(eC, {}),
            (0, l.jsx)(z, {}),
            (0, l.jsx)(el, {}),
            (0, l.jsx)(es, {}),
            (0, l.jsx)(ei, {}),
            (0, l.jsx)(g, {
                isGift: i.isGift,
                activeSubscription: i.activeSubscription,
                defaultPaymentSourceId: R,
                eligiblePaymentGateways: M,
                hasFetchedPaymentSources: v,
                paymentSources: L,
                initialPaymentSourceId: i.initialPaymentSourceId,
            }),
            U && (0, l.jsx)(W, {}),
            k && (0, l.jsx)(T, {}),
            H && (0, l.jsx)(F, {}),
            w && (0, l.jsx)(j, {}),
            c,
        ],
    });
}
var eA = n(783327);
function eR(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: i,
            discoverySessionId: a,
            purchaseType: u = eh.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: o,
            ...d
        } = e,
        f = JSON.stringify(d.skuIDs),
        h = r.useMemo(() => d.skuIDs, [f]),
        C = (0, s.$w)(),
        p = r.useMemo(
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
                customCheckoutFlow: o ?? C,
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
                C,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
                d.tenantParamsMap,
            ],
        );
    return (0, l.jsx)(c.Gf, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, l.jsx)(eP, {
            loadId: i,
            discoverySessionId: a,
            checkoutInitParameters: p,
            children: (0, l.jsx)(eM, { ...d, skuIDs: h, purchaseType: u }),
        }),
    });
}
function eM(e) {
    let { errorHandlingBehavior: t = "close-and-alert", onErrorReported: n, skuIDs: s, children: f } = e,
        { paymentSources: h } = (0, u.j)(),
        {
            contextMetadata: C,
            unifiedCheckoutFlow: p,
            purchaseType: m,
            isGift: E,
            selectedSkuId: I,
            selectedPlanId: y,
            paymentSourceId: S,
            paymentGateway: _,
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
        g = null != S && null != h[S] ? h[S]?.type : null,
        P = r.useMemo(
            () => ({ payment_source_id: S, payment_gateway: _, payment_source_type: g, checkout_flow: p, is_gift: E }),
            [S, _, g, p, E],
        ),
        A = (0, i.Db)(),
        R = (0, c.BQ)();
    return (0, l.jsx)(o.yv, {
        children: (0, l.jsx)(eA.R, {
            children: (0, l.jsx)(a.j, {
                errorHandlingBehavior: t,
                locationStack: A,
                onErrorReported: n,
                loadId: C.loadId,
                selectedSkuId: I ?? null,
                selectedPlanId: y ?? null,
                isGift: E,
                skuIds: s,
                purchaseType: m,
                checkoutStepsHistory: R,
                additionalAnalyticsData: P,
                children: f,
            }),
        }),
    });
}
