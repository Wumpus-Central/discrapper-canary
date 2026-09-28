n.d(t, { M: () => eA });
var l = n(477900),
    i = n(582128),
    r = n(688810),
    a = n(795791),
    s = n(669874),
    o = n(202475),
    u = n(883645),
    c = n(601194),
    d = n(263532),
    m = n(132500),
    p = n(444927),
    h = n(38405),
    C = n(120700),
    f = n(17928),
    E = n(228366),
    S = n(277984),
    y = n(67480);
function I(e, t) {
    let { paymentSources: n, eligiblePaymentGateways: l } = t;
    return !!(null != e && e in n && (null == l || 0 === l.length || l.includes(n[e].paymentGateway)));
}
function g(e) {
    let {
        isGift: t,
        activeSubscription: n,
        defaultPaymentSourceId: l,
        paymentSources: i,
        eligiblePaymentGateways: r,
    } = e;
    if (!t && n?.paymentSourceId != null) return n.paymentSourceId;
    if (null != r && r.length > 0) {
        if (null != l && l in i && r.includes(i[l].paymentGateway)) return l;
        for (let e in i) {
            let t = i[e];
            if (r.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return l;
}
let A = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: l,
            eligiblePaymentGateways: r,
            hasFetchedPaymentSources: a,
            paymentSources: s,
            initialPaymentSourceId: o,
        } = e,
        {
            setPaymentSourceId: u,
            setPendingPaymentSourceId: c,
            setHasAddedPaymentSourceThisSession: m,
        } = (0, d.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
            setHasAddedPaymentSourceThisSession: e.setHasAddedPaymentSourceThisSession,
        })),
        p = i.useRef(!1),
        h = i.useRef(!1),
        C = i.useCallback(() => {
            if (!p.current && !h.current) {
                if (I(o, { paymentSources: s, eligiblePaymentGateways: r })) {
                    (u(o), (p.current = !0));
                    return;
                }
                u(
                    g({
                        isGift: t,
                        activeSubscription: n,
                        defaultPaymentSourceId: l,
                        eligiblePaymentGateways: r,
                        paymentSources: s,
                    }),
                );
            }
        }, [t, n, l, r, u, o]);
    i.useEffect(() => {
        a ? C() : (0, S.$o)();
    }, [a, C]);
    let f = i.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            ((h.current = !0), m(), c(t.id), u(t.id));
        },
        [u, c, m],
    );
    return (
        i.useEffect(
            () => (
                E.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", f),
                () => {
                    E.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", f);
                }
            ),
            [f],
        ),
        null
    );
};
var P = n(531260);
function v(e) {
    let { hasFetchedPaymentSources: t, hasPaymentSources: n } = e,
        {
            activeSubscription: l,
            startedPaymentFlowWithPaymentSources: r,
            captureStartingPremiumSubscriptionPlanId: a,
            captureStartingFractionalPremiumEndsAt: s,
            captureStartingPaymentFlowWithPaymentSources: o,
        } = (0, d.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
            captureStartingPaymentFlowWithPaymentSources: e.captureStartingPaymentFlowWithPaymentSources,
        }));
    (i.useEffect(() => {
        t && null == r && o(n);
    }, [t, n, o, r]),
        i.useEffect(() => {
            null != l && a(l.planId);
        }, [l, a]));
    let { endsAt: u } = (0, P.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        i.useEffect(() => {
            null != u && 0 !== u.valueOf() && s(u);
        }, [u, s]),
        null
    );
}
var x = n(800342),
    _ = n(328968),
    T = n(202541);
function N() {
    let e = (0, d.t4)((e) => e.skuIds),
        t = i.useMemo(() => e.filter((e) => !T.oz.includes(e)), [e]),
        n = (0, f.bG)([_.A], () => t.filter((e) => null == _.A.getForSKU(e) && !_.A.isFetchingForSKU(e)), [t]);
    return (
        i.useEffect(() => {
            for (let e of n) (0, x.QB)(e);
        }, [n]),
        null
    );
}
var b = n(566980),
    j = n(830382),
    R = n(543767),
    M = n(570221),
    O = n(666646);
function L() {
    var e;
    let t,
        n,
        l,
        r,
        {
            isGift: a,
            applicationId: s,
            purchaseState: o,
            priceOptions: u,
            selectedSkuId: c,
            paymentSourceId: m,
            setPurchasePreviewError: p,
        } = (0, d.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        h = o === b.h.PURCHASING || o === b.h.COMPLETED,
        [C, f] =
            ((e = i.useMemo(
                () => ({
                    applicationId: s,
                    skuId: c,
                    paymentSourceId: m,
                    isGift: a,
                    currency: u.loaded ? u.currency : void 0,
                    preventFetch: h,
                }),
                [s, c, m, a, u, h],
            )),
            (t = (0, i.useRef)(e)),
            (n = (0, i.useRef)(!1)),
            (0, i.useEffect)(() => {
                t.current = e;
            }),
            (l = JSON.stringify(e)),
            (r = (0, i.useCallback)(async () => {
                let e = t.current;
                if (null == e.skuId) return null;
                let l = {
                        applicationId: e.applicationId,
                        skuId: e.skuId,
                        paymentSourceId: e.paymentSourceId,
                        isGift: e.isGift,
                        currency: e.currency,
                    },
                    i = n.current ? l : { ...l, paymentSourceId: null };
                n.current = !0;
                let r = await (0, j.NY)(i);
                return null != r ? M.A.createFromOTPPreview(r) : null;
            }, [l])),
            (0, R.$n)(e, r, void 0));
    return (
        (0, O.F)(C, f),
        i.useEffect(() => {
            p(f);
        }, [f, p]),
        null
    );
}
var k = n(120992);
function w() {
    let { applicationId: e, skuIds: t } = (0, d.t4)((e) => ({ applicationId: e.applicationId, skuIds: e.skuIds }));
    return ((0, k.c)({ applicationId: e, skuIDs: t }), null);
}
var U = n(166532);
function D(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, R.YV)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function G(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, R.C8)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function F(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, R.QQ)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function B(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, R.YV)(t, n),
        { setRenewalInvoicePreview: a } = (0, d.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function H() {
    let e = (0, u.Ay)((e) => e.step),
        t = i.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: r,
            setFetchCheckoutInvoicePreviewRequest: a,
            setFetchRenewalInvoicePreviewRequest: s,
        } = (0, d.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
    return (i.useEffect(() => {
        let n = t.current;
        ((t.current = e), n === U.pn.REVIEW && e !== U.pn.REVIEW && (a(null), s(null)));
    }, [e, a, s]),
    null == n && null == r)
        ? null
        : (null != r && r.type,
          (0, l.jsxs)(l.Fragment, {
              children: [
                  null != n && "subscription_checkout_invoice" === n.type && (0, l.jsx)(D, { fetchParams: n.params }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(G, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(F, { fetchParams: n.params }),
                  null != r && (0, l.jsx)(B, { fetchParams: r.params }),
              ],
          }));
}
var W = n(428865),
    Y = n(624210),
    V = n(739508);
class K {
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
        let i = this.pendingOrderUpdates(t, n);
        if (null == i || this.isPatchingRef.current) return;
        let { setOrder: r, setIsOrderSyncing: a, setOrderSyncError: s } = this.checkoutStore.getState();
        ((this.isPatchingRef.current = !0), a(!0));
        try {
            let e = await (0, Y.iY)({ orderId: t.id, updates: i, expectedRevision: t.revision });
            if (null != e) {
                r(e);
                let { currency: n, ...l } = i;
                if (null != this.pendingOrderUpdates(e, l)) {
                    let e = Error("Order patch was not applied");
                    ((0, V.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e));
                }
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            ((0, V.gr)(n) || (0, V.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e));
        } finally {
            ((this.isPatchingRef.current = !1), a(!1));
        }
    }
}
function Z() {
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
                n = (0, i.useRef)(!1),
                l = (0, i.useMemo)(() => new K(t, n), [t]),
                { order: r, orderSyncError: a } = (0, d.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, i.useEffect)(() => {
                l.syncOrder({ order: r, orderUpdates: e, orderSyncError: a });
            }, [l, r, e, a]);
        })(
            i.useMemo(
                () => ({ paymentSourceId: e, paymentGateway: t, currency: n, loadId: l.loadId }),
                [e, t, n, l.loadId],
            ),
        ),
        null
    );
}
var q = n(10716),
    z = n(795816),
    Q = n(627363),
    $ = n(20015),
    J = n(885386),
    X = n(652215);
function ee() {
    let e = (0, d.t4)((e) => e.applicationId),
        { data: t } = (0, Q.YY)(e),
        n = J.Q_.useSetting(),
        l = (0, f.bG)([q.A], () => q.A.getFetchState());
    return (
        i.useEffect(() => {
            null != t && (0, $.n)(t, X.gfo.EMBEDDED) && n && null == l && (0, z.SE)();
        }, [t, n, l]),
        null
    );
}
function et() {
    let {
            orderRecord: e,
            orderSyncError: t,
            setOrderSyncError: n,
            setPaymentSourceId: l,
            setCheckoutCurrency: r,
        } = (0, d.t4)((e) => ({
            orderRecord: e.orderRecord,
            orderSyncError: e.orderSyncError,
            setOrderSyncError: e.setOrderSyncError,
            setPaymentSourceId: e.setPaymentSourceId,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        a = null != e ? e.billingFacetRecord : null,
        s = null != a ? a.paymentSourceId : null,
        o = null != a ? a.fiatCurrency : null;
    return (
        i.useEffect(() => {
            null != e && null != t && (l(s), r(o), n(null));
        }, [e, t, s, o, l, r, n]),
        null
    );
}
var en = n(158317);
function el() {
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
        r = null != t ? t.id : null,
        a = null != t ? t.revision : 0;
    return (
        i.useEffect(() => {
            if (null == r || l <= a) return;
            let t = !1;
            return (
                (0, en.r$)(r).then((l) => {
                    if (t || null == l) return;
                    let i = e.getState().order;
                    (null != i && i.id === l.id && l.revision <= i.revision) || n(l);
                }),
                () => {
                    t = !0;
                }
            );
        }, [r, l, a, n, e]),
        null
    );
}
function ei() {
    let e = (0, d.t4)((e) => e.handleOrderUpdate);
    return (
        i.useEffect(
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
let er = [
        "BILLING_SUBSCRIPTION_UPDATE_FAIL",
        "GIFT_CODE_REDEEM_FAILURE",
        "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
        "PREMIUM_PAYMENT_UPDATE_FAIL",
        "SKU_PURCHASE_FAIL",
    ],
    ea = ["BILLING_PAYMENT_FETCH_SUCCESS", "PAYMENT_UPDATE"],
    es = [
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
        resetPaymentAuthentication: r,
    } = (0, d.t4)((e) => ({
        handlePaymentFailure: e.handlePaymentFailure,
        handlePaymentUpdate: e.handlePaymentUpdate,
        handlePaymentAuthenticationError: e.handlePaymentAuthenticationError,
        handlePaymentAuthenticationCancel: e.handlePaymentAuthenticationCancel,
        resetPaymentAuthentication: e.resetPaymentAuthentication,
    }));
    return (
        i.useEffect(() => {
            for (let t of er) E.h.subscribe(t, e);
            for (let e of ea) E.h.subscribe(e, t);
            for (let e of es) E.h.subscribe(e, r);
            return (
                E.h.subscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                E.h.subscribe("PAYMENT_AUTHENTICATION_CANCEL", l),
                () => {
                    for (let t of er) E.h.unsubscribe(t, e);
                    for (let e of ea) E.h.unsubscribe(e, t);
                    for (let e of es) E.h.unsubscribe(e, r);
                    (E.h.unsubscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                        E.h.unsubscribe("PAYMENT_AUTHENTICATION_CANCEL", l));
                }
            );
        }, [e, t, n, l, r]),
        null
    );
}
var eu = n(83617),
    ec = n(655857);
function ed() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: l,
            excludeSubscriptionPlansBySKU: r,
        } = (0, d.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = i.useMemo(() => (0, ec._r)(n), [n]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: o } = (0, ec.ow)({
            skuIDs: a,
            paymentSourceId: t,
            isGift: l,
        }),
        u = JSON.stringify(a),
        c = i.useRef(a);
    return (
        i.useEffect(() => {
            c.current = a;
        }),
        i.useEffect(() => {
            (async function () {
                let { current: n } = c;
                try {
                    n.length > 0 && !r && (await (0, eu.c_)(t, n));
                } catch (e) {
                    if (e.code !== eu.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(X.tEg);
        }, [t, u, r, e, s, o, l]),
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
    ep = ["SKU_PURCHASE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL"],
    eh = ["USER_PAYMENT_CLIENT_ADD"];
function eC() {
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
        i.useEffect(() => {
            for (let e of em) E.h.subscribe(e, n);
            for (let t of ep) E.h.subscribe(t, e);
            for (let e of eh) E.h.subscribe(e, t);
            return () => {
                for (let e of em) E.h.unsubscribe(e, n);
                for (let t of ep) E.h.unsubscribe(t, e);
                for (let e of eh) E.h.unsubscribe(e, t);
            };
        }, [n, e, t]),
        null
    );
}
var ef = n(741923),
    eE = n(504275);
function eS() {
    return (
        !(function () {
            let e = (0, u.s2)(),
                { purchaseState: t, setPurchaseState: n } = (0, d.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, U.zT)(e, t, n);
        })(),
        null
    );
}
let ey = [
    C.C.PREMIUM_CHECKOUT,
    C.C.GUILD_ROLE_CHECKOUT,
    C.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    C.C.GUILD_BOOST_CHECKOUT,
    C.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
];
function eI(e) {
    var t, n;
    let { checkoutInitParameters: r = eE.r, loadId: a, discoverySessionId: s, children: u } = e,
        { order: c, isOrderCreationEnabled: E } = (0, ef._5)(),
        S = (0, p.A)(() => {
            let e = c?.id ?? a ?? (0, m.A)();
            return (
                h.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: s, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: P,
            defaultPaymentSourceId: x,
            eligiblePaymentGateways: _,
            hasFetchedPaymentSources: T,
            paymentSources: b,
            hasPaymentSources: j,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: l, initialPaymentSourceId: r } = e,
                a = (0, f.bG)([y.A], () => y.A.get(t), [t]),
                s = null != a ? a.eligiblePaymentGateways : null,
                {
                    defaultPaymentSourceId: u,
                    paymentSources: c,
                    hasFetchedPaymentSources: d,
                    hasPaymentSources: m,
                } = (0, o.j)();
            return {
                initialCheckoutPaymentSourceId: i.useMemo(() => {
                    var e;
                    return I(
                        (e = {
                            isGift: n,
                            activeSubscription: l,
                            defaultPaymentSourceId: u,
                            eligiblePaymentGateways: s,
                            paymentSources: c,
                            initialPaymentSourceId: r,
                        }).initialPaymentSourceId,
                        e,
                    )
                        ? (e.initialPaymentSourceId ?? null)
                        : (g(e) ?? null);
                }, [n, l, u, s, c, r]),
                defaultPaymentSourceId: u,
                eligiblePaymentGateways: s,
                hasFetchedPaymentSources: d,
                paymentSources: c,
                hasPaymentSources: m,
            };
        })({
            skuId: r.skuIds[0],
            isGift: r.isGift,
            activeSubscription: r.activeSubscription,
            initialPaymentSourceId: r.initialPaymentSourceId,
        }),
        [R] = i.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: null,
                startingPremiumSubscriptionPlanId: null != r.activeSubscription ? r.activeSubscription?.planId : null,
            };
            return (
                T && (e.startedPaymentFlowWithPaymentSources = j),
                (0, d.y$)({
                    checkoutInitParameters: r,
                    startingValues: e,
                    contextMetadata: S,
                    order: c,
                    initialPaymentSourceId: P,
                    initialCurrency: (0, ec.el)({
                        activeSubscription: r.activeSubscription,
                        skuIds: r.skuIds,
                        paymentSourceId: P,
                        isGift: r.isGift,
                    }),
                })
            );
        }),
        M = i.useRef(null != c);
    (i.useEffect(() => {
        M.current || null == c || (R.getState().setOrder(c), (M.current = !0));
    }, [c, R]),
        i.useEffect(() => {
            R.getState().setCheckoutInitParameters(r);
        }, [R, r]));
    let O = ((t = r.purchaseType), null != (n = r.unifiedCheckoutFlow) && t === X.VVm.SUBSCRIPTION && ey.includes(n)),
        k = r.unifiedCheckoutFlow === C.C.GUILD_ROLE_CHECKOUT,
        U = r.purchaseType === X.VVm.ONE_TIME && r.unifiedCheckoutFlow !== C.C.ORB_CHECKOUT,
        D = !E && U;
    return (0, l.jsxs)(d.Ni, {
        value: R,
        children: [
            (0, l.jsx)(v, { hasFetchedPaymentSources: T, hasPaymentSources: j }),
            (0, l.jsx)(eS, {}),
            (0, l.jsx)(eo, {}),
            r.unifiedCheckoutFlow !== C.C.ORB_CHECKOUT && (0, l.jsx)(eC, {}),
            (0, l.jsx)(ee, {}),
            (0, l.jsx)(ed, {}),
            (0, l.jsx)(Z, {}),
            (0, l.jsx)(et, {}),
            (0, l.jsx)(ei, {}),
            (0, l.jsx)(el, {}),
            (0, l.jsx)(A, {
                isGift: r.isGift,
                activeSubscription: r.activeSubscription,
                defaultPaymentSourceId: x,
                eligiblePaymentGateways: _,
                hasFetchedPaymentSources: T,
                paymentSources: b,
                initialPaymentSourceId: r.initialPaymentSourceId,
            }),
            O && (0, l.jsx)(H, {}),
            k && (0, l.jsx)(N, {}),
            U && (0, l.jsx)(w, {}),
            D && (0, l.jsx)(L, {}),
            u,
        ],
    });
}
var eg = n(783327);
function eA(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: r,
            discoverySessionId: s,
            purchaseType: o = X.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: c,
            ...d
        } = e,
        m = JSON.stringify(d.skuIDs),
        p = i.useMemo(() => d.skuIDs, [m]),
        h = (0, a.$w)(),
        C = i.useMemo(
            () => ({
                skuIds: p,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                initialPaymentSourceId: d.initialPaymentSourceId ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: o,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: c ?? h,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? T.tv,
                tenantParamsMap: d.tenantParamsMap ?? {},
            }),
            [
                p,
                o,
                d.isGift,
                d.referralTrialOfferId,
                d.activeSubscription,
                d.initialPaymentSourceId,
                d.excludeSubscriptionPlansBySKU,
                d.applicationId,
                d.defaultPlanId,
                d.referralCode,
                c,
                h,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
                d.tenantParamsMap,
            ],
        );
    return (0, l.jsx)(u.Gf, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, l.jsx)(eI, {
            loadId: r,
            discoverySessionId: s,
            checkoutInitParameters: C,
            children: (0, l.jsx)(eP, { ...d, skuIDs: p, purchaseType: o }),
        }),
    });
}
function eP(e) {
    let { errorHandlingBehavior: t = "close-and-alert", onErrorReported: n, skuIDs: a, children: m } = e,
        { paymentSources: p } = (0, o.j)(),
        {
            contextMetadata: h,
            unifiedCheckoutFlow: C,
            purchaseType: f,
            isGift: E,
            selectedSkuId: S,
            selectedPlanId: y,
            paymentSourceId: I,
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
        A = null != I && null != p[I] ? p[I]?.type : null,
        P = i.useMemo(
            () => ({ payment_source_id: I, payment_gateway: g, payment_source_type: A, checkout_flow: C, is_gift: E }),
            [I, g, A, C, E],
        ),
        v = (0, r.Db)(),
        x = (0, u.BQ)();
    return (0, l.jsx)(c.yv, {
        children: (0, l.jsx)(eg.R, {
            children: (0, l.jsx)(s.j, {
                errorHandlingBehavior: t,
                locationStack: v,
                onErrorReported: n,
                loadId: h.loadId,
                selectedSkuId: S ?? null,
                selectedPlanId: y ?? null,
                isGift: E,
                skuIds: a,
                purchaseType: f,
                checkoutStepsHistory: x,
                additionalAnalyticsData: P,
                children: m,
            }),
        }),
    });
}
