r.d(t, { P: () => ee });
var n = r(627968),
    u = r(64700),
    i = r(835245),
    c = r(444927),
    s = r(38405),
    l = r(120700),
    a = r(228366),
    o = r(277984),
    d = r(426398),
    f = r(6938);
let p = (e) => {
    let {
            isGift: t,
            activeSubscription: r,
            defaultPaymentSourceId: n,
            eligiblePaymentGateways: i,
            hasFetchedPaymentSources: c,
            paymentSources: s,
        } = e,
        { setPaymentSourceId: l, setPendingPaymentSourceId: p } = (0, f.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
        })),
        h = u.useCallback(() => {
            l(
                (0, d._m)({
                    isGift: t,
                    activeSubscription: r,
                    defaultPaymentSourceId: n,
                    eligiblePaymentGateways: i,
                    paymentSources: s,
                }),
            );
        }, [t, r, n, i, l]);
    u.useEffect(() => {
        c ? h() : (0, o.$o)();
    }, [c, h]);
    let I = u.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            p(t.id), l(t.id);
        },
        [l, p],
    );
    return (
        u.useEffect(
            () => (
                a.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", I),
                () => {
                    a.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", I);
                }
            ),
            [I],
        ),
        null
    );
};
var h = r(531260);
function I() {
    let {
        activeSubscription: e,
        captureStartingPremiumSubscriptionPlanId: t,
        captureStartingFractionalPremiumEndsAt: r,
    } = (0, f.t4)((e) => ({
        activeSubscription: e.activeSubscription,
        captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
        captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
    }));
    u.useEffect(() => {
        null != e && t(e.planId);
    }, [e, t]);
    let { endsAt: n } = (0, h.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        u.useEffect(() => {
            null != n && 0 !== n.valueOf() && r(n);
        }, [n, r]),
        null
    );
}
var m = r(17928),
    y = r(800342),
    S = r(328968),
    P = r(202541);
function E() {
    let e = (0, f.t4)((e) => e.skuIds),
        t = u.useMemo(() => e.filter((e) => !P.oz.includes(e)), [e]),
        r = (0, m.bG)([S.A], () => t.filter((e) => null == S.A.getForSKU(e) && !S.A.isFetchingForSKU(e)), [t]);
    return (
        u.useEffect(() => {
            for (let e of r) (0, y.QB)(e);
        }, [r]),
        null
    );
}
var v = r(566980),
    C = r(120992),
    _ = r(830382),
    k = r(543767),
    w = r(570221),
    g = r(666646);
function R() {
    var e;
    let t,
        r,
        n,
        i,
        {
            isGift: c,
            applicationId: s,
            skuIds: l,
            purchaseState: a,
            priceOptions: o,
            selectedSkuId: d,
            paymentSourceId: p,
            setPurchasePreviewError: h,
        } = (0, f.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        I = a === v.h.PURCHASING || a === v.h.COMPLETED;
    (0, C.c)({ applicationId: s, skuIDs: l });
    let [m, y] =
        ((e = u.useMemo(
            () => ({
                applicationId: s,
                skuId: d,
                paymentSourceId: p,
                isGift: c,
                currency: o.loaded ? o.currency : void 0,
                preventFetch: I,
            }),
            [s, d, p, c, o, I],
        )),
        (t = (0, u.useRef)(e)),
        (r = (0, u.useRef)(!1)),
        (0, u.useEffect)(() => {
            t.current = e;
        }),
        (n = JSON.stringify(e)),
        (i = (0, u.useCallback)(async () => {
            let e = t.current;
            if (null == e.skuId) return null;
            let n = {
                    applicationId: e.applicationId,
                    skuId: e.skuId,
                    paymentSourceId: e.paymentSourceId,
                    isGift: e.isGift,
                    currency: e.currency,
                },
                u = r.current ? n : { ...n, paymentSourceId: null };
            r.current = !0;
            let i = await (0, _.NY)(u);
            return null != i ? w.A.createFromOTPPreview(i) : null;
        }, [n])),
        (0, k.$n)(e, i, void 0));
    return (
        (0, g.F0)(m, y),
        u.useEffect(() => {
            h(y);
        }, [y, h]),
        null
    );
}
var x = r(166532),
    O = r(615310);
function b(e) {
    let { fetchParams: t, refetchKey: r } = e,
        [n, i] = (0, k.YV)(t, r),
        { setCheckoutInvoicePreview: c } = (0, f.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        u.useEffect(() => {
            c(n, i);
        }, [n, i, c]),
        null
    );
}
function T(e) {
    let { fetchParams: t, refetchKey: r } = e,
        [n, i] = (0, k.C8)(t, r),
        { setCheckoutInvoicePreview: c } = (0, f.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        u.useEffect(() => {
            c(n, i);
        }, [n, i, c]),
        null
    );
}
function A(e) {
    let { fetchParams: t, refetchKey: r } = e,
        [n, i] = (0, k.QQ)(t, r),
        { setCheckoutInvoicePreview: c } = (0, f.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        u.useEffect(() => {
            c(n, i);
        }, [n, i, c]),
        null
    );
}
function G(e) {
    let { fetchParams: t, refetchKey: r } = e,
        [n, i] = (0, k.YV)(t, r),
        { setRenewalInvoicePreview: c } = (0, f.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        u.useEffect(() => {
            c(n, i);
        }, [n, i, c]),
        null
    );
}
function M() {
    let e = (0, O.Ay)((e) => e.step),
        t = u.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: r,
            fetchRenewalInvoicePreviewRequest: i,
            setFetchCheckoutInvoicePreviewRequest: c,
            setFetchRenewalInvoicePreviewRequest: s,
        } = (0, f.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
    return (u.useEffect(() => {
        let r = t.current;
        (t.current = e), r === x.pn.REVIEW && e !== x.pn.REVIEW && (c(null), s(null));
    }, [e, c, s]),
    null == r && null == i)
        ? null
        : (null != i && i.type,
          (0, n.jsxs)(n.Fragment, {
              children: [
                  null != r && "premium_checkout_invoice" === r.type && (0, n.jsx)(b, { fetchParams: r.params }),
                  null != r &&
                      "premium_checkout_invoice_get_request" === r.type &&
                      (0, n.jsx)(T, { fetchParams: r.params }),
                  null != r &&
                      "premium_one_time_gift_purchase_invoice" === r.type &&
                      (0, n.jsx)(A, { fetchParams: r.params }),
                  null != i && (0, n.jsx)(G, { fetchParams: i.params }),
              ],
          }));
}
var U = r(10716),
    j = r(795816),
    F = r(627363),
    B = r(20015),
    D = r(885386),
    N = r(652215);
function K() {
    let e = (0, f.t4)((e) => e.applicationId),
        { data: t } = (0, F.YY)(e),
        r = D.Q_.useSetting(),
        n = (0, m.bG)([U.A], () => U.A.getFetchState());
    return (
        u.useEffect(() => {
            null != t && (0, B.n)(t, N.gfo.EMBEDDED) && r && null == n && (0, j.SE)();
        }, [t, r, n]),
        null
    );
}
var L = r(624210),
    H = r(739508),
    V = r(818348);
class W {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        (this.checkoutStore = e), (this.isPatchingRef = t);
    }
    shouldPatchOrder(e) {
        let t = e.billing_facet;
        return null == t || t.payment_gateway !== V.kM.VIRTUAL_CURRENCY;
    }
    persistedPaymentSourceId(e) {
        let t = e.billing_facet;
        return null == t || null == t.payment_source_id ? null : t.payment_source_id;
    }
    pendingOrderUpdates(e, t) {
        let r = {};
        return (
            null != t.paymentSourceId &&
                this.persistedPaymentSourceId(e) !== t.paymentSourceId &&
                (r.paymentSourceId = t.paymentSourceId),
            Object.keys(r).length > 0 ? r : null
        );
    }
    async syncOrder(e) {
        let { order: t, orderUpdates: r, orderSyncError: n } = e;
        if (null == t || !this.shouldPatchOrder(t) || null != n) return;
        let u = this.pendingOrderUpdates(t, r);
        if (null == u || this.isPatchingRef.current) return;
        let { setOrder: i, setIsOrderSyncing: c, setOrderSyncError: s } = this.checkoutStore.getState();
        (this.isPatchingRef.current = !0), c(!0);
        try {
            let e = await (0, L.iY)({ orderId: t.id, updates: u, expectedRevision: t.revision });
            if (null != e && (i(e), null != this.pendingOrderUpdates(e, u))) {
                let e = Error("Order patch was not applied");
                (0, H.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
            }
        } catch (r) {
            let e = r instanceof Error ? r : Error(String(r));
            (0, H.gr)(r) || (0, H.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
        } finally {
            (this.isPatchingRef.current = !1), c(!1);
        }
    }
}
function Y() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        contextMetadata: r,
    } = (0, f.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, f.Q9)(),
                r = (0, u.useRef)(!1),
                n = (0, u.useMemo)(() => new W(t, r), [t]),
                { order: i, orderSyncError: c } = (0, f.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, u.useEffect)(() => {
                n.syncOrder({ order: i, orderUpdates: e, orderSyncError: c });
            }, [n, i, e, c]);
        })(u.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: r.loadId }), [e, t, r.loadId])),
        null
    );
}
var q = r(83617),
    Q = r(655857);
function z() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: r,
            isGift: n,
            excludeSubscriptionPlansBySKU: i,
        } = (0, f.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        c = u.useMemo(() => (0, Q._r)(r), [r]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: l } = (0, Q.ow)({
            skuIDs: c,
            paymentSourceId: t,
            isGift: n,
        }),
        a = JSON.stringify(c),
        o = u.useRef(c);
    return (
        u.useEffect(() => {
            o.current = c;
        }),
        u.useEffect(() => {
            (async function () {
                let { current: r } = o;
                try {
                    r.length > 0 && !i && (await (0, q.c_)(t, r));
                } catch (e) {
                    if (e.code !== q.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(N.tEg);
        }, [t, a, i, e, s, l, n]),
        null
    );
}
var $ = r(815379),
    J = r(504275);
function X() {
    return (
        !(function () {
            let e = (0, O.bB)(),
                { purchaseState: t, setPurchaseState: r } = (0, f.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, x.zT)(e, t, r);
        })(),
        null
    );
}
let Z = [
    l.C.PREMIUM_CHECKOUT,
    l.C.GUILD_ROLE_CHECKOUT,
    l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    l.C.GUILD_BOOST_CHECKOUT,
];
function ee(e) {
    var t, r;
    let { checkoutInitParameters: a = J.r, loadId: o, discoverySessionId: h, children: m } = e,
        y = (0, $._5)(),
        S = (0, c.A)(() => {
            let e = y?.id ?? o ?? (0, i.A)();
            return (
                s.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: h, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: P,
            defaultPaymentSourceId: v,
            eligiblePaymentGateways: C,
            hasFetchedPaymentSources: _,
            paymentSources: k,
            hasPaymentSources: w,
        } = (0, d.mz)({ skuId: a.skuIds[0], isGift: a.isGift, activeSubscription: a.activeSubscription }),
        [g] = u.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: w,
                startingPremiumSubscriptionPlanId: null != a.activeSubscription ? a.activeSubscription?.planId : null,
            };
            return (0, f.y$)({
                checkoutInitParameters: a,
                startingValues: e,
                contextMetadata: S,
                order: y,
                initialPaymentSourceId: P,
                initialCurrency: (0, Q.el)({
                    activeSubscription: a.activeSubscription,
                    skuIds: a.skuIds,
                    paymentSourceId: P,
                    isGift: a.isGift,
                }),
            });
        }),
        x = u.useRef(null != y);
    u.useEffect(() => {
        x.current || null == y || (g.getState().setOrder(y), (x.current = !0));
    }, [y, g]),
        u.useEffect(() => {
            g.getState().setCheckoutInitParameters(a);
        }, [g, a]);
    let O = ((t = a.purchaseType), null != (r = a.unifiedCheckoutFlow) && t === N.VVm.SUBSCRIPTION && Z.includes(r)),
        b = a.unifiedCheckoutFlow === l.C.GUILD_ROLE_CHECKOUT,
        T = a.purchaseType === N.VVm.ONE_TIME && a.unifiedCheckoutFlow !== l.C.ORB_CHECKOUT;
    return (0, n.jsxs)(f.Ni, {
        value: g,
        children: [
            (0, n.jsx)(I, {}),
            (0, n.jsx)(X, {}),
            (0, n.jsx)(K, {}),
            (0, n.jsx)(z, {}),
            (0, n.jsx)(Y, {}),
            (0, n.jsx)(p, {
                isGift: a.isGift,
                activeSubscription: a.activeSubscription,
                defaultPaymentSourceId: v,
                eligiblePaymentGateways: C,
                hasFetchedPaymentSources: _,
                paymentSources: k,
            }),
            O && (0, n.jsx)(M, {}),
            b && (0, n.jsx)(E, {}),
            T && (0, n.jsx)(R, {}),
            m,
        ],
    });
}
