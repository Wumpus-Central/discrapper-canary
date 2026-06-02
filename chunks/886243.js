r.d(t, { P: () => V });
var n = r(627968),
    a = r(64700),
    l = r(835245),
    i = r(444927),
    u = r(38405),
    s = r(120700),
    o = r(426398),
    c = r(655857),
    d = r(166532),
    p = r(615310),
    f = r(722847),
    _ = r(753390);
let m = (e) => {
    let {
            isGift: t,
            activeSubscription: r,
            defaultPaymentSourceId: n,
            eligiblePaymentGateways: l,
            hasFetchedPaymentSources: i,
            paymentSources: u,
        } = e,
        s = (0, f.t4)((e) => e.setPaymentSourceId),
        c = a.useCallback(() => {
            s(
                (0, o._m)({
                    isGift: t,
                    activeSubscription: r,
                    defaultPaymentSourceId: n,
                    eligiblePaymentGateways: l,
                    paymentSources: u,
                }),
            );
        }, [t, r, n, l, s]);
    return (
        a.useEffect(() => {
            i ? c() : (0, _.$o)();
        }, [i, c]),
        null
    );
};
var h = r(566980),
    y = r(120992),
    I = r(830382),
    E = r(543767),
    S = r(570221),
    v = r(666646);
let C = () => {
        var e;
        let t,
            r,
            n,
            l,
            {
                isGift: i,
                applicationId: u,
                skuIds: s,
                purchaseState: o,
                priceOptions: c,
                selectedSkuId: d,
                paymentSourceId: p,
                setPurchasePreviewError: _,
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
            m = o === h.h.PURCHASING || o === h.h.COMPLETED;
        (0, y.c)({ applicationId: u, skuIDs: s });
        let [C, w] =
            ((e = a.useMemo(
                () => ({
                    applicationId: u,
                    skuId: d,
                    paymentSourceId: p,
                    isGift: i,
                    currency: c.loaded ? c.currency : void 0,
                    preventFetch: m,
                }),
                [u, d, p, i, c, m],
            )),
            (t = (0, a.useRef)(e)),
            (r = (0, a.useRef)(!1)),
            (0, a.useEffect)(() => {
                t.current = e;
            }),
            (n = JSON.stringify(e)),
            (l = (0, a.useCallback)(async () => {
                let e = t.current;
                if (null == e.skuId) return null;
                let n = {
                        applicationId: e.applicationId,
                        skuId: e.skuId,
                        paymentSourceId: e.paymentSourceId,
                        isGift: e.isGift,
                        currency: e.currency,
                    },
                    a = r.current ? n : { ...n, paymentSourceId: null };
                r.current = !0;
                let l = await (0, I.NY)(a);
                return null != l ? S.A.createFromOTPPreview(l) : null;
            }, [n])),
            (0, E.$n)(e, l, void 0));
        return (
            (0, v.F0)(C, w),
            a.useEffect(() => {
                _(w);
            }, [w, _]),
            null
        );
    },
    w = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, E.YV)(t, r),
            { setCheckoutInvoicePreview: i } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            a.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    x = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, E.C8)(t, r),
            { setCheckoutInvoicePreview: i } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            a.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    P = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, E.QQ)(t, r),
            { setCheckoutInvoicePreview: i } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            a.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    g = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, E.YV)(t, r),
            { setRenewalInvoicePreview: i } = (0, f.t4)((e) => ({
                setRenewalInvoicePreview: e.setRenewalInvoicePreview,
            }));
        return (
            a.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    A = () => {
        let e = (0, p.Ay)((e) => e.step),
            t = a.useRef(e),
            {
                fetchCheckoutInvoicePreviewRequest: r,
                fetchRenewalInvoicePreviewRequest: l,
                setFetchCheckoutInvoicePreviewRequest: i,
                setFetchRenewalInvoicePreviewRequest: u,
            } = (0, f.t4)((e) => ({
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
                fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
            }));
        return (a.useEffect(() => {
            let r = t.current;
            (t.current = e), r === d.pn.REVIEW && e !== d.pn.REVIEW && (i(null), u(null));
        }, [e, i, u]),
        null == r && null == l)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      null != r && "premium_checkout_invoice" === r.type && (0, n.jsx)(w, { fetchParams: r.params }),
                      null != r &&
                          "premium_checkout_invoice_get_request" === r.type &&
                          (0, n.jsx)(x, { fetchParams: r.params }),
                      null != r &&
                          "premium_one_time_gift_purchase_invoice" === r.type &&
                          (0, n.jsx)(P, { fetchParams: r.params }),
                      null != l && "premium_renewal_invoice" === l.type && (0, n.jsx)(g, { fetchParams: l.params }),
                  ],
              });
    };
var k = r(17928),
    R = r(10716),
    T = r(795816),
    b = r(627363),
    j = r(20015),
    O = r(885386),
    N = r(652215);
let M = () => {
    let e = (0, f.t4)((e) => e.applicationId),
        { data: t } = (0, b.YY)(e),
        r = O.Q_.useSetting(),
        n = (0, k.bG)([R.A], () => R.A.getFetchState());
    return (
        a.useEffect(() => {
            null != t && (0, j.n)(t, N.gfo.EMBEDDED) && r && null == n && (0, T.SE)();
        }, [t, r, n]),
        null
    );
};
var G = r(624210),
    B = r(573582),
    U = r(818348);
let F = () => {
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
            let t = B.A.useConfig({ location: "payment_modal" }).enabled,
                { order: r, setOrder: n } = (0, f.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, a.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let a = e.paymentSourceId;
                async function l() {
                    if (null == r || r?.billing_facet?.payment_gateway === U.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, G.iY)({ orderId: r.id, updates: e });
                    null != t && n(t);
                }
                r?.billing_facet?.payment_source_id !== a && l();
            }, [r, n, e.paymentSourceId, t]);
        })(a.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: r.loadId }), [e, t, r.loadId])),
        null
    );
};
var D = r(83617);
let L = () => {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: r,
            isGift: n,
            excludeSubscriptionPlansBySKU: l,
        } = (0, f.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        i = a.useMemo(() => (0, c._r)(r), [r]),
        { subscriptionPlanIdForCurrency: u, hasFetchedRelatedSubscriptionPlans: s } = (0, c.ow)({
            skuIDs: i,
            paymentSourceId: t,
            isGift: n,
        }),
        o = JSON.stringify(i),
        d = a.useRef(i);
    return (
        a.useEffect(() => {
            d.current = i;
        }),
        a.useEffect(() => {
            (async () => {
                let { current: r } = d;
                try {
                    r.length > 0 && !l && (await (0, D.c_)(t, r));
                } catch (e) {
                    if (e.code !== D.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, o, l, e, u, s, n]),
        null
    );
};
var W = r(679374),
    H = r(504275);
function K() {
    return (
        !(function () {
            let e = (0, p.bB)(),
                { purchaseState: t, setPurchaseState: r } = (0, f.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, d.zT)(e, t, r);
        })(),
        null
    );
}
function V(e) {
    let { checkoutInitParameters: t = H.r, loadId: r, discoverySessionId: d, children: p } = e,
        _ = (0, W._5)(),
        h = (0, i.A)(() => {
            let e = _?.id ?? r ?? (0, l.A)();
            return (
                u.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: d, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: y,
            defaultPaymentSourceId: I,
            eligiblePaymentGateways: E,
            hasFetchedPaymentSources: S,
            paymentSources: v,
        } = (0, o.mz)({ skuId: t.skuIds[0], isGift: t.isGift, activeSubscription: t.activeSubscription }),
        [w] = a.useState(() =>
            (0, f.y$)({
                checkoutInitParameters: t,
                contextMetadata: h,
                order: _,
                initialPaymentSourceId: y,
                initialCurrency: (0, c.el)({
                    activeSubscription: t.activeSubscription,
                    skuIds: t.skuIds,
                    paymentSourceId: y,
                    isGift: t.isGift,
                }),
            }),
        ),
        x = a.useRef(null != _);
    a.useEffect(() => {
        x.current || null == _ || (w.setState({ order: _ }), (x.current = !0));
    }, [_, w]),
        a.useEffect(() => {
            w.getState().setCheckoutInitParameters(t);
        }, [w, t]);
    let P = t.purchaseType === N.VVm.SUBSCRIPTION,
        g = t.purchaseType === N.VVm.ONE_TIME && t.unifiedCheckoutFlow !== s.C.ORB_CHECKOUT;
    return (0, n.jsxs)(f.Ni, {
        value: w,
        children: [
            (0, n.jsx)(K, {}),
            (0, n.jsx)(M, {}),
            (0, n.jsx)(L, {}),
            (0, n.jsx)(F, {}),
            (0, n.jsx)(m, {
                isGift: t.isGift,
                activeSubscription: t.activeSubscription,
                defaultPaymentSourceId: I,
                eligiblePaymentGateways: E,
                hasFetchedPaymentSources: S,
                paymentSources: v,
            }),
            P && (0, n.jsx)(A, {}),
            g && (0, n.jsx)(C, {}),
            p,
        ],
    });
}
