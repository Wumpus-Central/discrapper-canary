"use strict";
n.d(t, { P: () => ee });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(120700),
    u = n(228366),
    c = n(277984),
    d = n(426398),
    _ = n(46332);
let h = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: i,
            eligiblePaymentGateways: s,
            hasFetchedPaymentSources: a,
            paymentSources: o,
        } = e,
        { setPaymentSourceId: l, setPendingPaymentSourceId: h } = (0, _.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
        })),
        f = r.useCallback(() => {
            l(
                (0, d._m)({
                    isGift: t,
                    activeSubscription: n,
                    defaultPaymentSourceId: i,
                    eligiblePaymentGateways: s,
                    paymentSources: o,
                }),
            );
        }, [t, n, i, s, l]);
    r.useEffect(() => {
        a ? f() : (0, c.$o)();
    }, [a, f]);
    let p = r.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            h(t.id), l(t.id);
        },
        [l, h],
    );
    return (
        r.useEffect(
            () => (
                u.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", p),
                () => {
                    u.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", p);
                }
            ),
            [p],
        ),
        null
    );
};
var f = n(531260);
function p() {
    let {
        activeSubscription: e,
        captureStartingPremiumSubscriptionPlanId: t,
        captureStartingFractionalPremiumEndsAt: n,
    } = (0, _.t4)((e) => ({
        activeSubscription: e.activeSubscription,
        captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
        captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
    }));
    r.useEffect(() => {
        null != e && t(e.planId);
    }, [e, t]);
    let { endsAt: i } = (0, f.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        r.useEffect(() => {
            null != i && 0 !== i.valueOf() && n(i);
        }, [i, n]),
        null
    );
}
var E = n(17928),
    m = n(800342),
    g = n(328968),
    A = n(202541);
function I() {
    let e = (0, _.t4)((e) => e.skuIds),
        t = r.useMemo(() => e.filter((e) => !A.oz.includes(e)), [e]),
        n = (0, E.bG)([g.A], () => t.filter((e) => null == g.A.getForSKU(e) && !g.A.isFetchingForSKU(e)), [t]);
    return (
        r.useEffect(() => {
            for (let e of n) (0, m.QB)(e);
        }, [n]),
        null
    );
}
var T = n(566980),
    S = n(120992),
    y = n(830382),
    C = n(543767),
    N = n(570221),
    v = n(666646);
function R() {
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
            selectedSkuId: d,
            paymentSourceId: h,
            setPurchasePreviewError: f,
        } = (0, _.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        p = u === T.h.PURCHASING || u === T.h.COMPLETED;
    (0, S.c)({ applicationId: o, skuIDs: l });
    let [E, m] =
        ((e = r.useMemo(
            () => ({
                applicationId: o,
                skuId: d,
                paymentSourceId: h,
                isGift: a,
                currency: c.loaded ? c.currency : void 0,
                preventFetch: p,
            }),
            [o, d, h, a, c, p],
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
            let s = await (0, y.NY)(r);
            return null != s ? N.A.createFromOTPPreview(s) : null;
        }, [i])),
        (0, C.$n)(e, s, void 0));
    return (
        (0, v.F0)(E, m),
        r.useEffect(() => {
            f(m);
        }, [m, f]),
        null
    );
}
var O = n(166532),
    b = n(615310);
function D(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [i, s] = (0, C.YV)(t, n),
        { setCheckoutInvoicePreview: a } = (0, _.t4)((e) => ({
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
        [i, s] = (0, C.C8)(t, n),
        { setCheckoutInvoicePreview: a } = (0, _.t4)((e) => ({
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
        [i, s] = (0, C.QQ)(t, n),
        { setCheckoutInvoicePreview: a } = (0, _.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            a(i, s);
        }, [i, s, a]),
        null
    );
}
function M(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [i, s] = (0, C.YV)(t, n),
        { setRenewalInvoicePreview: a } = (0, _.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        r.useEffect(() => {
            a(i, s);
        }, [i, s, a]),
        null
    );
}
function P() {
    let e = (0, b.Ay)((e) => e.step),
        t = r.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: s,
            setFetchCheckoutInvoicePreviewRequest: a,
            setFetchRenewalInvoicePreviewRequest: o,
        } = (0, _.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
    return (r.useEffect(() => {
        let n = t.current;
        (t.current = e), n === O.pn.REVIEW && e !== O.pn.REVIEW && (a(null), o(null));
    }, [e, a, o]),
    null == n && null == s)
        ? null
        : (null != s && s.type,
          (0, i.jsxs)(i.Fragment, {
              children: [
                  null != n && "premium_checkout_invoice" === n.type && (0, i.jsx)(D, { fetchParams: n.params }),
                  null != n &&
                      "premium_checkout_invoice_get_request" === n.type &&
                      (0, i.jsx)(L, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, i.jsx)(w, { fetchParams: n.params }),
                  null != s && (0, i.jsx)(M, { fetchParams: s.params }),
              ],
          }));
}
var x = n(10716),
    k = n(795816),
    U = n(627363),
    G = n(20015),
    F = n(885386),
    V = n(652215);
function B() {
    let e = (0, _.t4)((e) => e.applicationId),
        { data: t } = (0, U.YY)(e),
        n = F.Q_.useSetting(),
        i = (0, E.bG)([x.A], () => x.A.getFetchState());
    return (
        r.useEffect(() => {
            null != t && (0, G.n)(t, V.gfo.EMBEDDED) && n && null == i && (0, k.SE)();
        }, [t, n, i]),
        null
    );
}
var j = n(624210),
    H = n(739508),
    Y = n(818348);
class W {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        (this.checkoutStore = e), (this.isPatchingRef = t);
    }
    shouldPatchOrder(e) {
        let t = e.billing_facet;
        return null == t || t.payment_gateway !== Y.kM.VIRTUAL_CURRENCY;
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
            let e = await (0, j.iY)({ orderId: t.id, updates: r, expectedRevision: t.revision });
            if (null != e && (s(e), null != this.pendingOrderUpdates(e, r))) {
                let e = Error("Order patch was not applied");
                (0, H.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), o(e);
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            (0, H.gr)(n) || (0, H.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), o(e);
        } finally {
            (this.isPatchingRef.current = !1), a(!1);
        }
    }
}
function K() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        contextMetadata: n,
    } = (0, _.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, _.Q9)(),
                n = (0, r.useRef)(!1),
                i = (0, r.useMemo)(() => new W(t, n), [t]),
                { order: s, orderSyncError: a } = (0, _.t4)((e) => ({
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
var $ = n(83617),
    z = n(655857);
function q() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: i,
            excludeSubscriptionPlansBySKU: s,
        } = (0, _.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = r.useMemo(() => (0, z._r)(n), [n]),
        { subscriptionPlanIdForCurrency: o, hasFetchedRelatedSubscriptionPlans: l } = (0, z.ow)({
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
                    n.length > 0 && !s && (await (0, $.c_)(t, n));
                } catch (e) {
                    if (e.code !== $.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, u, s, e, o, l, i]),
        null
    );
}
var Z = n(619624),
    X = n(504275);
function Q() {
    return (
        !(function () {
            let e = (0, b.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, _.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, O.zT)(e, t, n);
        })(),
        null
    );
}
let J = [
    l.C.PREMIUM_CHECKOUT,
    l.C.GUILD_ROLE_CHECKOUT,
    l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    l.C.GUILD_BOOST_CHECKOUT,
];
function ee(e) {
    var t, n;
    let { checkoutInitParameters: u = X.r, loadId: c, discoverySessionId: f, children: E } = e,
        m = (0, Z._5)(),
        g = (0, a.A)(() => {
            let e = m?.id ?? c ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: f, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: A,
            defaultPaymentSourceId: T,
            eligiblePaymentGateways: S,
            hasFetchedPaymentSources: y,
            paymentSources: C,
            hasPaymentSources: N,
        } = (0, d.mz)({ skuId: u.skuIds[0], isGift: u.isGift, activeSubscription: u.activeSubscription }),
        [v] = r.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: N,
                startingPremiumSubscriptionPlanId: null != u.activeSubscription ? u.activeSubscription?.planId : null,
            };
            return (0, _.y$)({
                checkoutInitParameters: u,
                startingValues: e,
                contextMetadata: g,
                order: m,
                initialPaymentSourceId: A,
                initialCurrency: (0, z.el)({
                    activeSubscription: u.activeSubscription,
                    skuIds: u.skuIds,
                    paymentSourceId: A,
                    isGift: u.isGift,
                }),
            });
        }),
        O = r.useRef(null != m);
    r.useEffect(() => {
        O.current || null == m || (v.getState().setOrder(m), (O.current = !0));
    }, [m, v]),
        r.useEffect(() => {
            v.getState().setCheckoutInitParameters(u);
        }, [v, u]);
    let b = ((t = u.purchaseType), null != (n = u.unifiedCheckoutFlow) && t === V.VVm.SUBSCRIPTION && J.includes(n)),
        D = u.unifiedCheckoutFlow === l.C.GUILD_ROLE_CHECKOUT,
        L = u.purchaseType === V.VVm.ONE_TIME && u.unifiedCheckoutFlow !== l.C.ORB_CHECKOUT;
    return (0, i.jsxs)(_.Ni, {
        value: v,
        children: [
            (0, i.jsx)(p, {}),
            (0, i.jsx)(Q, {}),
            (0, i.jsx)(B, {}),
            (0, i.jsx)(q, {}),
            (0, i.jsx)(K, {}),
            (0, i.jsx)(h, {
                isGift: u.isGift,
                activeSubscription: u.activeSubscription,
                defaultPaymentSourceId: T,
                eligiblePaymentGateways: S,
                hasFetchedPaymentSources: y,
                paymentSources: C,
            }),
            b && (0, i.jsx)(P, {}),
            D && (0, i.jsx)(I, {}),
            L && (0, i.jsx)(R, {}),
            E,
        ],
    });
}
