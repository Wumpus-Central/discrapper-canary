n.d(t, { M: () => eu });
var l = n(477900),
    i = n(582128),
    r = n(688810),
    a = n(795791),
    s = n(669874),
    o = n(202475),
    u = n(883645),
    c = n(601194),
    d = n(87725),
    p = n(132500),
    m = n(444927),
    h = n(38405),
    C = n(120700),
    f = n(17928),
    E = n(228366),
    S = n(277984),
    y = n(67480);
function A(e, t) {
    let { paymentSources: n, eligiblePaymentGateways: l } = t;
    return !!(null != e && e in n && (null == l || 0 === l.length || l.includes(n[e].paymentGateway)));
}
function P(e) {
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
let I = (e) => {
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
            setHasAddedPaymentSourceThisSession: p,
        } = (0, d.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
            setHasAddedPaymentSourceThisSession: e.setHasAddedPaymentSourceThisSession,
        })),
        m = i.useRef(!1),
        h = i.useRef(!1),
        C = i.useCallback(() => {
            if (!m.current && !h.current) {
                if (A(o, { paymentSources: s, eligiblePaymentGateways: r })) {
                    u(o), (m.current = !0);
                    return;
                }
                u(
                    P({
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
            (h.current = !0), p(), c(t.id), u(t.id);
        },
        [u, c, p],
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
var g = n(531260);
function _(e) {
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
    i.useEffect(() => {
        t && null == r && o(n);
    }, [t, n, o, r]),
        i.useEffect(() => {
            null != l && a(l.planId);
        }, [l, a]);
    let { endsAt: u } = (0, g.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        i.useEffect(() => {
            null != u && 0 !== u.valueOf() && s(u);
        }, [u, s]),
        null
    );
}
var v = n(800342),
    T = n(328968),
    x = n(202541);
function N() {
    let e = (0, d.t4)((e) => e.skuIds),
        t = i.useMemo(() => e.filter((e) => !x.oz.includes(e)), [e]),
        n = (0, f.bG)([T.A], () => t.filter((e) => null == T.A.getForSKU(e) && !T.A.isFetchingForSKU(e)), [t]);
    return (
        i.useEffect(() => {
            for (let e of n) (0, v.QB)(e);
        }, [n]),
        null
    );
}
var b = n(566980),
    R = n(120992),
    j = n(830382),
    M = n(543767),
    O = n(570221),
    L = n(666646);
function k() {
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
            selectedSkuId: p,
            paymentSourceId: m,
            setPurchasePreviewError: h,
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
        C = u === b.h.PURCHASING || u === b.h.COMPLETED;
    (0, R.c)({ applicationId: s, skuIDs: o });
    let [f, E] =
        ((e = i.useMemo(
            () => ({
                applicationId: s,
                skuId: p,
                paymentSourceId: m,
                isGift: a,
                currency: c.loaded ? c.currency : void 0,
                preventFetch: C,
            }),
            [s, p, m, a, c, C],
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
            return null != r ? O.A.createFromOTPPreview(r) : null;
        }, [l])),
        (0, M.$n)(e, r, void 0));
    return (
        (0, L.F0)(f, E),
        i.useEffect(() => {
            h(E);
        }, [E, h]),
        null
    );
}
var w = n(166532);
function U(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, M.YV)(t, n),
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
function D(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, M.C8)(t, n),
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
        [l, r] = (0, M.QQ)(t, n),
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
        [l, r] = (0, M.YV)(t, n),
        { setRenewalInvoicePreview: a } = (0, d.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function B() {
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
        (t.current = e), n === w.pn.REVIEW && e !== w.pn.REVIEW && (a(null), s(null));
    }, [e, a, s]),
    null == n && null == r)
        ? null
        : (null != r && r.type,
          (0, l.jsxs)(l.Fragment, {
              children: [
                  null != n && "subscription_checkout_invoice" === n.type && (0, l.jsx)(U, { fetchParams: n.params }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(D, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(G, { fetchParams: n.params }),
                  null != r && (0, l.jsx)(F, { fetchParams: r.params }),
              ],
          }));
}
var H = n(10716),
    Y = n(795816),
    W = n(627363),
    V = n(20015),
    K = n(885386),
    q = n(652215);
function Z() {
    let e = (0, d.t4)((e) => e.applicationId),
        { data: t } = (0, W.YY)(e),
        n = K.Q_.useSetting(),
        l = (0, f.bG)([H.A], () => H.A.getFetchState());
    return (
        i.useEffect(() => {
            null != t && (0, V.n)(t, q.gfo.EMBEDDED) && n && null == l && (0, Y.SE)();
        }, [t, n, l]),
        null
    );
}
var z = n(624210),
    Q = n(739508),
    $ = n(818348);
class J {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        (this.checkoutStore = e), (this.isPatchingRef = t);
    }
    shouldPatchOrder(e) {
        let t = e.billing_facet;
        return null == t || t.payment_gateway !== $.kM.VIRTUAL_CURRENCY;
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
            let e = await (0, z.iY)({ orderId: t.id, updates: i, expectedRevision: t.revision });
            if (null != e && (r(e), null != this.pendingOrderUpdates(e, i))) {
                let e = Error("Order patch was not applied");
                (0, Q.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            (0, Q.gr)(n) || (0, Q.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
        } finally {
            (this.isPatchingRef.current = !1), a(!1);
        }
    }
}
function X() {
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
                n = (0, i.useRef)(!1),
                l = (0, i.useMemo)(() => new J(t, n), [t]),
                { order: r, orderSyncError: a } = (0, d.t4)((e) => ({
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
var ee = n(83617),
    et = n(655857);
function en() {
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
        a = i.useMemo(() => (0, et._r)(n), [n]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: o } = (0, et.ow)({
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
                    n.length > 0 && !r && (await (0, ee.c_)(t, n));
                } catch (e) {
                    if (e.code !== ee.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(q.tEg);
        }, [t, u, r, e, s, o, l]),
        null
    );
}
var el = n(741923),
    ei = n(504275);
function er() {
    return (
        !(function () {
            let e = (0, u.s2)(),
                { purchaseState: t, setPurchaseState: n } = (0, d.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, w.zT)(e, t, n);
        })(),
        null
    );
}
let ea = [
    C.C.PREMIUM_CHECKOUT,
    C.C.GUILD_ROLE_CHECKOUT,
    C.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    C.C.GUILD_BOOST_CHECKOUT,
    C.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
];
function es(e) {
    var t, n;
    let { checkoutInitParameters: r = ei.r, loadId: a, discoverySessionId: s, children: u } = e,
        c = (0, el._5)(),
        E = (0, m.A)(() => {
            let e = c?.id ?? a ?? (0, p.A)();
            return (
                h.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: s, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: S,
            defaultPaymentSourceId: g,
            eligiblePaymentGateways: v,
            hasFetchedPaymentSources: T,
            paymentSources: x,
            hasPaymentSources: b,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: l, initialPaymentSourceId: r } = e,
                a = (0, f.bG)([y.A], () => y.A.get(t), [t]),
                s = null != a ? a.eligiblePaymentGateways : null,
                {
                    defaultPaymentSourceId: u,
                    paymentSources: c,
                    hasFetchedPaymentSources: d,
                    hasPaymentSources: p,
                } = (0, o.j)();
            return {
                initialCheckoutPaymentSourceId: i.useMemo(() => {
                    var e;
                    return A(
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
                        : (P(e) ?? null);
                }, [n, l, u, s, c, r]),
                defaultPaymentSourceId: u,
                eligiblePaymentGateways: s,
                hasFetchedPaymentSources: d,
                paymentSources: c,
                hasPaymentSources: p,
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
                T && (e.startedPaymentFlowWithPaymentSources = b),
                (0, d.y$)({
                    checkoutInitParameters: r,
                    startingValues: e,
                    contextMetadata: E,
                    order: c,
                    initialPaymentSourceId: S,
                    initialCurrency: (0, et.el)({
                        activeSubscription: r.activeSubscription,
                        skuIds: r.skuIds,
                        paymentSourceId: S,
                        isGift: r.isGift,
                    }),
                })
            );
        }),
        j = i.useRef(null != c);
    i.useEffect(() => {
        j.current || null == c || (R.getState().setOrder(c), (j.current = !0));
    }, [c, R]),
        i.useEffect(() => {
            R.getState().setCheckoutInitParameters(r);
        }, [R, r]);
    let M = ((t = r.purchaseType), null != (n = r.unifiedCheckoutFlow) && t === q.VVm.SUBSCRIPTION && ea.includes(n)),
        O = r.unifiedCheckoutFlow === C.C.GUILD_ROLE_CHECKOUT,
        L = r.purchaseType === q.VVm.ONE_TIME && r.unifiedCheckoutFlow !== C.C.ORB_CHECKOUT;
    return (0, l.jsxs)(d.Ni, {
        value: R,
        children: [
            (0, l.jsx)(_, { hasFetchedPaymentSources: T, hasPaymentSources: b }),
            (0, l.jsx)(er, {}),
            (0, l.jsx)(Z, {}),
            (0, l.jsx)(en, {}),
            (0, l.jsx)(X, {}),
            (0, l.jsx)(I, {
                isGift: r.isGift,
                activeSubscription: r.activeSubscription,
                defaultPaymentSourceId: g,
                eligiblePaymentGateways: v,
                hasFetchedPaymentSources: T,
                paymentSources: x,
                initialPaymentSourceId: r.initialPaymentSourceId,
            }),
            M && (0, l.jsx)(B, {}),
            O && (0, l.jsx)(N, {}),
            L && (0, l.jsx)(k, {}),
            u,
        ],
    });
}
var eo = n(783327);
function eu(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: r,
            discoverySessionId: s,
            purchaseType: o = q.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: c,
            ...d
        } = e,
        p = JSON.stringify(d.skuIDs),
        m = i.useMemo(() => d.skuIDs, [p]),
        h = (0, a.$w)(),
        C = i.useMemo(
            () => ({
                skuIds: m,
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
                applicationId: d.applicationId ?? x.tv,
                tenantParamsMap: d.tenantParamsMap ?? {},
            }),
            [
                m,
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
        children: (0, l.jsx)(es, {
            loadId: r,
            discoverySessionId: s,
            checkoutInitParameters: C,
            children: (0, l.jsx)(ec, { ...d, skuIDs: m, purchaseType: o }),
        }),
    });
}
function ec(e) {
    let { errorHandlingBehavior: t = "rethrow", onErrorReported: n, skuIDs: a, children: p } = e,
        { paymentSources: m } = (0, o.j)(),
        {
            contextMetadata: h,
            unifiedCheckoutFlow: C,
            purchaseType: f,
            isGift: E,
            selectedSkuId: S,
            selectedPlanId: y,
            paymentSourceId: A,
            paymentGateway: P,
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
        I = null != A && null != m[A] ? m[A]?.type : null,
        g = i.useMemo(
            () => ({ payment_source_id: A, payment_gateway: P, payment_source_type: I, checkout_flow: C }),
            [A, P, I, C],
        ),
        _ = (0, r.Db)(),
        v = (0, u.BQ)();
    return (0, l.jsx)(c.yv, {
        children: (0, l.jsx)(eo.R, {
            children: (0, l.jsx)(s.j, {
                errorHandlingBehavior: t,
                locationStack: _,
                onErrorReported: n,
                loadId: h.loadId,
                selectedSkuId: S ?? null,
                selectedPlanId: y ?? null,
                isGift: E,
                skuIds: a,
                purchaseType: f,
                checkoutStepsHistory: v,
                additionalAnalyticsData: g,
                children: p,
            }),
        }),
    });
}
