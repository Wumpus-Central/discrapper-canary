n.d(t, { P: () => ee });
var l = n(627968),
    i = n(64700),
    r = n(132500),
    a = n(444927),
    s = n(38405),
    o = n(120700),
    u = n(228366),
    c = n(277984),
    d = n(426398),
    p = n(316915);
let m = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: l,
            eligiblePaymentGateways: r,
            hasFetchedPaymentSources: a,
            paymentSources: s,
        } = e,
        { setPaymentSourceId: o, setPendingPaymentSourceId: m } = (0, p.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
        })),
        h = i.useCallback(() => {
            o(
                (0, d._m)({
                    isGift: t,
                    activeSubscription: n,
                    defaultPaymentSourceId: l,
                    eligiblePaymentGateways: r,
                    paymentSources: s,
                }),
            );
        }, [t, n, l, r, o]);
    i.useEffect(() => {
        a ? h() : (0, c.$o)();
    }, [a, h]);
    let C = i.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            m(t.id), o(t.id);
        },
        [o, m],
    );
    return (
        i.useEffect(
            () => (
                u.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", C),
                () => {
                    u.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", C);
                }
            ),
            [C],
        ),
        null
    );
};
var h = n(531260);
function C(e) {
    let { hasFetchedPaymentSources: t, hasPaymentSources: n } = e,
        {
            activeSubscription: l,
            startedPaymentFlowWithPaymentSources: r,
            captureStartingPremiumSubscriptionPlanId: a,
            captureStartingFractionalPremiumEndsAt: s,
            captureStartingPaymentFlowWithPaymentSources: o,
        } = (0, p.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
            captureStartingPaymentFlowWithPaymentSources: e.captureStartingPaymentFlowWithPaymentSources,
        }));
    i.useEffect(() => {
        t && null == r && o(n);
    }, [t, n, o, r]),
        i.useEffect(() => {
            null != l && a(l.planId);
        }, [l, a]);
    let { endsAt: u } = (0, h.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        i.useEffect(() => {
            null != u && 0 !== u.valueOf() && s(u);
        }, [u, s]),
        null
    );
}
var E = n(17928),
    f = n(800342),
    A = n(328968),
    S = n(202541);
function y() {
    let e = (0, p.t4)((e) => e.skuIds),
        t = i.useMemo(() => e.filter((e) => !S.oz.includes(e)), [e]),
        n = (0, E.bG)([A.A], () => t.filter((e) => null == A.A.getForSKU(e) && !A.A.isFetchingForSKU(e)), [t]);
    return (
        i.useEffect(() => {
            for (let e of n) (0, f.QB)(e);
        }, [n]),
        null
    );
}
var P = n(566980),
    I = n(120992),
    _ = n(830382),
    T = n(543767),
    g = n(570221),
    x = n(666646);
function v() {
    var e;
    let t,
        n,
        l,
        r,
        {
            isGift: a,
            applicationId: s,
            skuIds: o,
            purchaseState: u,
            priceOptions: c,
            selectedSkuId: d,
            paymentSourceId: m,
            setPurchasePreviewError: h,
        } = (0, p.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        C = u === P.h.PURCHASING || u === P.h.COMPLETED;
    (0, I.c)({ applicationId: s, skuIDs: o });
    let [E, f] =
        ((e = i.useMemo(
            () => ({
                applicationId: s,
                skuId: d,
                paymentSourceId: m,
                isGift: a,
                currency: c.loaded ? c.currency : void 0,
                preventFetch: C,
            }),
            [s, d, m, a, c, C],
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
            let r = await (0, _.NY)(i);
            return null != r ? g.A.createFromOTPPreview(r) : null;
        }, [l])),
        (0, T.$n)(e, r, void 0));
    return (
        (0, x.F0)(E, f),
        i.useEffect(() => {
            h(f);
        }, [f, h]),
        null
    );
}
var N = n(166532),
    M = n(615310);
function R(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, T.YV)(t, n),
        { setCheckoutInvoicePreview: a } = (0, p.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function b(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, T.C8)(t, n),
        { setCheckoutInvoicePreview: a } = (0, p.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function j(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, T.QQ)(t, n),
        { setCheckoutInvoicePreview: a } = (0, p.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function O(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, T.YV)(t, n),
        { setRenewalInvoicePreview: a } = (0, p.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function L() {
    let e = (0, M.Ay)((e) => e.step),
        t = i.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: r,
            setFetchCheckoutInvoicePreviewRequest: a,
            setFetchRenewalInvoicePreviewRequest: s,
        } = (0, p.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
    return (i.useEffect(() => {
        let n = t.current;
        (t.current = e), n === N.pn.REVIEW && e !== N.pn.REVIEW && (a(null), s(null));
    }, [e, a, s]),
    null == n && null == r)
        ? null
        : (null != r && r.type,
          (0, l.jsxs)(l.Fragment, {
              children: [
                  null != n && "premium_checkout_invoice" === n.type && (0, l.jsx)(R, { fetchParams: n.params }),
                  null != n &&
                      "premium_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(b, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(j, { fetchParams: n.params }),
                  null != r && (0, l.jsx)(O, { fetchParams: r.params }),
              ],
          }));
}
var w = n(10716),
    k = n(795816),
    D = n(627363),
    U = n(20015),
    G = n(885386),
    F = n(652215);
function H() {
    let e = (0, p.t4)((e) => e.applicationId),
        { data: t } = (0, D.YY)(e),
        n = G.Q_.useSetting(),
        l = (0, E.bG)([w.A], () => w.A.getFetchState());
    return (
        i.useEffect(() => {
            null != t && (0, U.n)(t, F.gfo.EMBEDDED) && n && null == l && (0, k.SE)();
        }, [t, n, l]),
        null
    );
}
var B = n(624210),
    Y = n(739508),
    W = n(818348);
class V {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        (this.checkoutStore = e), (this.isPatchingRef = t);
    }
    shouldPatchOrder(e) {
        let t = e.billing_facet;
        return null == t || t.payment_gateway !== W.kM.VIRTUAL_CURRENCY;
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
        let { order: t, orderUpdates: n, orderSyncError: l } = e;
        if (null == t || !this.shouldPatchOrder(t) || null != l) return;
        let i = this.pendingOrderUpdates(t, n);
        if (null == i || this.isPatchingRef.current) return;
        let { setOrder: r, setIsOrderSyncing: a, setOrderSyncError: s } = this.checkoutStore.getState();
        (this.isPatchingRef.current = !0), a(!0);
        try {
            let e = await (0, B.iY)({ orderId: t.id, updates: i, expectedRevision: t.revision });
            if (null != e && (r(e), null != this.pendingOrderUpdates(e, i))) {
                let e = Error("Order patch was not applied");
                (0, Y.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            (0, Y.gr)(n) || (0, Y.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
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
    } = (0, p.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, p.Q9)(),
                n = (0, i.useRef)(!1),
                l = (0, i.useMemo)(() => new V(t, n), [t]),
                { order: r, orderSyncError: a } = (0, p.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, i.useEffect)(() => {
                l.syncOrder({ order: r, orderUpdates: e, orderSyncError: a });
            }, [l, r, e, a]);
        })(i.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: n.loadId }), [e, t, n.loadId])),
        null
    );
}
var Z = n(83617),
    q = n(655857);
function z() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: l,
            excludeSubscriptionPlansBySKU: r,
        } = (0, p.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = i.useMemo(() => (0, q._r)(n), [n]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: o } = (0, q.ow)({
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
                    n.length > 0 && !r && (await (0, Z.c_)(t, n));
                } catch (e) {
                    if (e.code !== Z.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(F.tEg);
        }, [t, u, r, e, s, o, l]),
        null
    );
}
var Q = n(815379),
    $ = n(504275);
function J() {
    return (
        !(function () {
            let e = (0, M.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, p.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, N.zT)(e, t, n);
        })(),
        null
    );
}
let X = [
    o.C.PREMIUM_CHECKOUT,
    o.C.GUILD_ROLE_CHECKOUT,
    o.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    o.C.GUILD_BOOST_CHECKOUT,
];
function ee(e) {
    var t, n;
    let { checkoutInitParameters: u = $.r, loadId: c, discoverySessionId: h, children: E } = e,
        f = (0, Q._5)(),
        A = (0, a.A)(() => {
            let e = f?.id ?? c ?? (0, r.A)();
            return (
                s.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: h, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: S,
            defaultPaymentSourceId: P,
            eligiblePaymentGateways: I,
            hasFetchedPaymentSources: _,
            paymentSources: T,
            hasPaymentSources: g,
        } = (0, d.mz)({ skuId: u.skuIds[0], isGift: u.isGift, activeSubscription: u.activeSubscription }),
        [x] = i.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: null,
                startingPremiumSubscriptionPlanId: null != u.activeSubscription ? u.activeSubscription?.planId : null,
            };
            return (
                _ && (e.startedPaymentFlowWithPaymentSources = g),
                (0, p.y$)({
                    checkoutInitParameters: u,
                    startingValues: e,
                    contextMetadata: A,
                    order: f,
                    initialPaymentSourceId: S,
                    initialCurrency: (0, q.el)({
                        activeSubscription: u.activeSubscription,
                        skuIds: u.skuIds,
                        paymentSourceId: S,
                        isGift: u.isGift,
                    }),
                })
            );
        }),
        N = i.useRef(null != f);
    i.useEffect(() => {
        N.current || null == f || (x.getState().setOrder(f), (N.current = !0));
    }, [f, x]),
        i.useEffect(() => {
            x.getState().setCheckoutInitParameters(u);
        }, [x, u]);
    let M = ((t = u.purchaseType), null != (n = u.unifiedCheckoutFlow) && t === F.VVm.SUBSCRIPTION && X.includes(n)),
        R = u.unifiedCheckoutFlow === o.C.GUILD_ROLE_CHECKOUT,
        b = u.purchaseType === F.VVm.ONE_TIME && u.unifiedCheckoutFlow !== o.C.ORB_CHECKOUT;
    return (0, l.jsxs)(p.Ni, {
        value: x,
        children: [
            (0, l.jsx)(C, { hasFetchedPaymentSources: _, hasPaymentSources: g }),
            (0, l.jsx)(J, {}),
            (0, l.jsx)(H, {}),
            (0, l.jsx)(z, {}),
            (0, l.jsx)(K, {}),
            (0, l.jsx)(m, {
                isGift: u.isGift,
                activeSubscription: u.activeSubscription,
                defaultPaymentSourceId: P,
                eligiblePaymentGateways: I,
                hasFetchedPaymentSources: _,
                paymentSources: T,
            }),
            M && (0, l.jsx)(L, {}),
            R && (0, l.jsx)(y, {}),
            b && (0, l.jsx)(v, {}),
            E,
        ],
    });
}
