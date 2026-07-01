"use strict";
n.d(t, { P: () => J });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(120700),
    u = n(277984),
    c = n(426398),
    d = n(46332);
let _ = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: i,
            eligiblePaymentGateways: s,
            hasFetchedPaymentSources: a,
            paymentSources: o,
        } = e,
        l = (0, d.t4)((e) => e.setPaymentSourceId),
        _ = r.useCallback(() => {
            l(
                (0, c._m)({
                    isGift: t,
                    activeSubscription: n,
                    defaultPaymentSourceId: i,
                    eligiblePaymentGateways: s,
                    paymentSources: o,
                }),
            );
        }, [t, n, i, s, l]);
    return (
        r.useEffect(() => {
            a ? _() : (0, u.$o)();
        }, [a, _]),
        null
    );
};
var h = n(531260);
function f() {
    let {
        activeSubscription: e,
        captureStartingPremiumSubscriptionPlanId: t,
        captureStartingFractionalPremiumEndsAt: n,
    } = (0, d.t4)((e) => ({
        activeSubscription: e.activeSubscription,
        captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
        captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
    }));
    r.useEffect(() => {
        null != e && t(e.planId);
    }, [e, t]);
    let { endsAt: i } = (0, h.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        r.useEffect(() => {
            null != i && 0 !== i.valueOf() && n(i);
        }, [i, n]),
        null
    );
}
var p = n(17928),
    E = n(800342),
    m = n(328968),
    g = n(788868);
function A() {
    let e = (0, d.t4)((e) => e.skuIds),
        t = r.useMemo(() => e.filter((e) => !g.oz.includes(e)), [e]),
        n = (0, p.bG)([m.A], () => t.filter((e) => null == m.A.getForSKU(e) && !m.A.isFetchingForSKU(e)), [t]);
    return (
        r.useEffect(() => {
            for (let e of n) (0, E.QB)(e);
        }, [n]),
        null
    );
}
var I = n(566980),
    T = n(120992),
    S = n(830382),
    y = n(543767),
    C = n(570221),
    N = n(666646);
function v() {
    var e;
    let t,
        n,
        i,
        s,
        {
            isGift: a,
            applicationId: o,
            skuIds: l,
            purchaseState: u,
            priceOptions: c,
            selectedSkuId: _,
            paymentSourceId: h,
            setPurchasePreviewError: f,
        } = (0, d.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        p = u === I.h.PURCHASING || u === I.h.COMPLETED;
    (0, T.c)({ applicationId: o, skuIDs: l });
    let [E, m] =
        ((e = r.useMemo(
            () => ({
                applicationId: o,
                skuId: _,
                paymentSourceId: h,
                isGift: a,
                currency: c.loaded ? c.currency : void 0,
                preventFetch: p,
            }),
            [o, _, h, a, c, p],
        )),
        (t = (0, r.useRef)(e)),
        (n = (0, r.useRef)(!1)),
        (0, r.useEffect)(() => {
            t.current = e;
        }),
        (i = JSON.stringify(e)),
        (s = (0, r.useCallback)(async () => {
            let e = t.current;
            if (null == e.skuId) return null;
            let i = {
                    applicationId: e.applicationId,
                    skuId: e.skuId,
                    paymentSourceId: e.paymentSourceId,
                    isGift: e.isGift,
                    currency: e.currency,
                },
                r = n.current ? i : { ...i, paymentSourceId: null };
            n.current = !0;
            let s = await (0, S.NY)(r);
            return null != s ? C.A.createFromOTPPreview(s) : null;
        }, [i])),
        (0, y.$n)(e, s, void 0));
    return (
        (0, N.F0)(E, m),
        r.useEffect(() => {
            f(m);
        }, [m, f]),
        null
    );
}
var R = n(166532),
    O = n(615310);
function b(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [i, s] = (0, y.YV)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            a(i, s);
        }, [i, s, a]),
        null
    );
}
function D(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [i, s] = (0, y.C8)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            a(i, s);
        }, [i, s, a]),
        null
    );
}
function L(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [i, s] = (0, y.QQ)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            a(i, s);
        }, [i, s, a]),
        null
    );
}
function w(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [i, s] = (0, y.YV)(t, n),
        { setRenewalInvoicePreview: a } = (0, d.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        r.useEffect(() => {
            a(i, s);
        }, [i, s, a]),
        null
    );
}
function M() {
    let e = (0, O.Ay)((e) => e.step),
        t = r.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: s,
            setFetchCheckoutInvoicePreviewRequest: a,
            setFetchRenewalInvoicePreviewRequest: o,
        } = (0, d.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
    return (r.useEffect(() => {
        let n = t.current;
        (t.current = e), n === R.pn.REVIEW && e !== R.pn.REVIEW && (a(null), o(null));
    }, [e, a, o]),
    null == n && null == s)
        ? null
        : (null != s && s.type,
          (0, i.jsxs)(i.Fragment, {
              children: [
                  null != n && "premium_checkout_invoice" === n.type && (0, i.jsx)(b, { fetchParams: n.params }),
                  null != n &&
                      "premium_checkout_invoice_get_request" === n.type &&
                      (0, i.jsx)(D, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, i.jsx)(L, { fetchParams: n.params }),
                  null != s && (0, i.jsx)(w, { fetchParams: s.params }),
              ],
          }));
}
var P = n(10716),
    x = n(795816),
    k = n(627363),
    U = n(20015),
    G = n(885386),
    F = n(652215);
function V() {
    let e = (0, d.t4)((e) => e.applicationId),
        { data: t } = (0, k.YY)(e),
        n = G.Q_.useSetting(),
        i = (0, p.bG)([P.A], () => P.A.getFetchState());
    return (
        r.useEffect(() => {
            null != t && (0, U.n)(t, F.gfo.EMBEDDED) && n && null == i && (0, x.SE)();
        }, [t, n, i]),
        null
    );
}
var B = n(624210),
    j = n(739508),
    H = n(818348);
class Y {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        (this.checkoutStore = e), (this.isPatchingRef = t);
    }
    shouldPatchOrder(e) {
        let t = e.billing_facet;
        return null == t || t.payment_gateway !== H.kM.VIRTUAL_CURRENCY;
    }
    persistedPaymentSourceId(e) {
        let t = e.billing_facet;
        return null == t || null == t.payment_source_id ? null : t.payment_source_id;
    }
    pendingOrderUpdates(e, t) {
        let n = {};
        return (
            null != t.paymentSourceId &&
                this.persistedPaymentSourceId(e) !== t.paymentSourceId &&
                (n.paymentSourceId = t.paymentSourceId),
            Object.keys(n).length > 0 ? n : null
        );
    }
    async syncOrder(e) {
        let { order: t, orderUpdates: n, orderSyncError: i } = e;
        if (null == t || !this.shouldPatchOrder(t) || null != i) return;
        let r = this.pendingOrderUpdates(t, n);
        if (null == r || this.isPatchingRef.current) return;
        let { setOrder: s, setIsOrderSyncing: a, setOrderSyncError: o } = this.checkoutStore.getState();
        (this.isPatchingRef.current = !0), a(!0);
        try {
            let e = await (0, B.iY)({ orderId: t.id, updates: r, expectedRevision: t.revision });
            if (null != e && (s(e), null != this.pendingOrderUpdates(e, r))) {
                let e = Error("Order patch was not applied");
                (0, j.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), o(e);
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            (0, j.gr)(n) || (0, j.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), o(e);
        } finally {
            (this.isPatchingRef.current = !1), a(!1);
        }
    }
}
function W() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        contextMetadata: n,
    } = (0, d.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, d.Q9)(),
                n = (0, r.useRef)(!1),
                i = (0, r.useMemo)(() => new Y(t, n), [t]),
                { order: s, orderSyncError: a } = (0, d.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, r.useEffect)(() => {
                i.syncOrder({ order: s, orderUpdates: e, orderSyncError: a });
            }, [i, s, e, a]);
        })(r.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: n.loadId }), [e, t, n.loadId])),
        null
    );
}
var K = n(83617),
    $ = n(655857);
function z() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: i,
            excludeSubscriptionPlansBySKU: s,
        } = (0, d.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = r.useMemo(() => (0, $._r)(n), [n]),
        { subscriptionPlanIdForCurrency: o, hasFetchedRelatedSubscriptionPlans: l } = (0, $.ow)({
            skuIDs: a,
            paymentSourceId: t,
            isGift: i,
        }),
        u = JSON.stringify(a),
        c = r.useRef(a);
    return (
        r.useEffect(() => {
            c.current = a;
        }),
        r.useEffect(() => {
            !(async function () {
                let { current: n } = c;
                try {
                    n.length > 0 && !s && (await (0, K.c_)(t, n));
                } catch (e) {
                    if (e.code !== K.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, u, s, e, o, l, i]),
        null
    );
}
var q = n(619624),
    Z = n(504275);
function X() {
    return (
        !(function () {
            let e = (0, O.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, d.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, R.zT)(e, t, n);
        })(),
        null
    );
}
let Q = [
    l.C.PREMIUM_CHECKOUT,
    l.C.GUILD_ROLE_CHECKOUT,
    l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    l.C.GUILD_BOOST_CHECKOUT,
];
function J(e) {
    var t, n;
    let { checkoutInitParameters: u = Z.r, loadId: h, discoverySessionId: p, children: E } = e,
        m = (0, q._5)(),
        g = (0, a.A)(() => {
            let e = m?.id ?? h ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: p, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: I,
            defaultPaymentSourceId: T,
            eligiblePaymentGateways: S,
            hasFetchedPaymentSources: y,
            paymentSources: C,
            hasPaymentSources: N,
        } = (0, c.mz)({ skuId: u.skuIds[0], isGift: u.isGift, activeSubscription: u.activeSubscription }),
        [R] = r.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: N,
                startingPremiumSubscriptionPlanId: null != u.activeSubscription ? u.activeSubscription?.planId : null,
            };
            return (0, d.y$)({
                checkoutInitParameters: u,
                startingValues: e,
                contextMetadata: g,
                order: m,
                initialPaymentSourceId: I,
                initialCurrency: (0, $.el)({
                    activeSubscription: u.activeSubscription,
                    skuIds: u.skuIds,
                    paymentSourceId: I,
                    isGift: u.isGift,
                }),
            });
        }),
        O = r.useRef(null != m);
    r.useEffect(() => {
        O.current || null == m || (R.getState().setOrder(m), (O.current = !0));
    }, [m, R]),
        r.useEffect(() => {
            R.getState().setCheckoutInitParameters(u);
        }, [R, u]);
    let b = ((t = u.purchaseType), null != (n = u.unifiedCheckoutFlow) && t === F.VVm.SUBSCRIPTION && Q.includes(n)),
        D = u.unifiedCheckoutFlow === l.C.GUILD_ROLE_CHECKOUT,
        L = u.purchaseType === F.VVm.ONE_TIME && u.unifiedCheckoutFlow !== l.C.ORB_CHECKOUT;
    return (0, i.jsxs)(d.Ni, {
        value: R,
        children: [
            (0, i.jsx)(f, {}),
            (0, i.jsx)(X, {}),
            (0, i.jsx)(V, {}),
            (0, i.jsx)(z, {}),
            (0, i.jsx)(W, {}),
            (0, i.jsx)(_, {
                isGift: u.isGift,
                activeSubscription: u.activeSubscription,
                defaultPaymentSourceId: T,
                eligiblePaymentGateways: S,
                hasFetchedPaymentSources: y,
                paymentSources: C,
            }),
            b && (0, i.jsx)(M, {}),
            D && (0, i.jsx)(A, {}),
            L && (0, i.jsx)(v, {}),
            E,
        ],
    });
}
