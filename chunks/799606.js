"use strict";
n.d(t, { P: () => R });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(426398),
    u = n(655857),
    c = n(166532),
    d = n(615310),
    _ = n(722847),
    h = n(753390);
let f = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: i,
            eligiblePaymentGateways: s,
            hasFetchedPaymentSources: a,
            paymentSources: o,
        } = e,
        u = (0, _.t4)((e) => e.setPaymentSourceId),
        c = r.useCallback(() => {
            u(
                (0, l._m)({
                    isGift: t,
                    activeSubscription: n,
                    defaultPaymentSourceId: i,
                    eligiblePaymentGateways: s,
                    paymentSources: o,
                }),
            );
        }, [t, n, i, s, u]);
    return (
        r.useEffect(() => {
            a ? c() : (0, h.$o)();
        }, [a, c]),
        null
    );
};
var p = n(543767);
let E = (e) => {
        let { fetchParams: t, refetchKey: n } = e,
            [i, s] = (0, p.YV)(t, n),
            { setCheckoutInvoicePreview: a } = (0, _.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                a(i, s);
            }, [i, s, a]),
            null
        );
    },
    m = (e) => {
        let { fetchParams: t, refetchKey: n } = e,
            [i, s] = (0, p.C8)(t, n),
            { setCheckoutInvoicePreview: a } = (0, _.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                a(i, s);
            }, [i, s, a]),
            null
        );
    },
    g = (e) => {
        let { fetchParams: t, refetchKey: n } = e,
            [i, s] = (0, p.QQ)(t, n),
            { setCheckoutInvoicePreview: a } = (0, _.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                a(i, s);
            }, [i, s, a]),
            null
        );
    },
    A = (e) => {
        let { fetchParams: t, refetchKey: n } = e,
            [i, s] = (0, p.YV)(t, n),
            { setRenewalInvoicePreview: a } = (0, _.t4)((e) => ({
                setRenewalInvoicePreview: e.setRenewalInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                a(i, s);
            }, [i, s, a]),
            null
        );
    },
    I = () => {
        let e = (0, d.Ay)((e) => e.step),
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
            (t.current = e), n === c.pn.REVIEW && e !== c.pn.REVIEW && (a(null), o(null));
        }, [e, a, o]),
        null == n && null == s)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != n && "premium_checkout_invoice" === n.type && (0, i.jsx)(E, { fetchParams: n.params }),
                      null != n &&
                          "premium_checkout_invoice_get_request" === n.type &&
                          (0, i.jsx)(m, { fetchParams: n.params }),
                      null != n &&
                          "premium_one_time_gift_purchase_invoice" === n.type &&
                          (0, i.jsx)(g, { fetchParams: n.params }),
                      null != s && "premium_renewal_invoice" === s.type && (0, i.jsx)(A, { fetchParams: s.params }),
                  ],
              });
    };
var T = n(83617);
let S = () => {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            checkoutInitParameters: n,
        } = (0, _.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            checkoutInitParameters: e.checkoutInitParameters,
        })),
        i = r.useMemo(() => (0, u._r)(n.skuIds), [n.skuIds]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: a } = (0, u.ow)({
            skuIDs: i,
            paymentSourceId: t,
            isGift: n.isGift,
        }),
        o = JSON.stringify(i),
        l = r.useRef(i);
    return (
        r.useEffect(() => {
            l.current = i;
        }),
        r.useEffect(() => {
            (async () => {
                let { current: i } = l;
                try {
                    i.length > 0 && !n.excludeSubscriptionPlansBySKU && (await (0, T.c_)(t, i));
                } catch (e) {
                    if (e.code !== T.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, o, n.excludeSubscriptionPlansBySKU, e, s, a, n.isGift]),
        null
    );
};
var y = n(679374),
    N = n(652215);
let v = {
    skuIds: [],
    isGift: !1,
    referralTrialOfferId: null,
    activeSubscription: null,
    excludeSubscriptionPlansBySKU: !1,
    purchaseType: N.VVm.SUBSCRIPTION,
};
function C() {
    return (
        !(function () {
            let e = (0, d.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, _.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, c.zT)(e, t, n);
        })(),
        null
    );
}
function R(e) {
    let { checkoutInitParameters: t = v, loadId: n, discoverySessionId: c, children: d } = e,
        h = (0, y._5)(),
        p = (0, a.A)(() => {
            let e = h?.id ?? n ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: c, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: E,
            defaultPaymentSourceId: m,
            eligiblePaymentGateways: g,
            hasFetchedPaymentSources: A,
            paymentSources: T,
        } = (0, l.mz)({ skuId: t.skuIds[0], isGift: t.isGift, activeSubscription: t.activeSubscription }),
        [R] = r.useState(() =>
            (0, _.y$)({
                checkoutInitParameters: t,
                contextMetadata: p,
                order: h,
                initialPaymentSourceId: E,
                initialCurrency: (0, u.el)({
                    activeSubscription: t.activeSubscription,
                    skuIds: t.skuIds,
                    paymentSourceId: E,
                    isGift: t.isGift,
                }),
            }),
        ),
        O = r.useRef(null != h);
    return (
        r.useEffect(() => {
            O.current || null == h || (R.setState({ order: h }), (O.current = !0));
        }, [h, R]),
        r.useEffect(() => {
            R.setState({ checkoutInitParameters: t });
        }, [R, t]),
        (0, i.jsxs)(_.Ni, {
            value: R,
            children: [
                (0, i.jsx)(C, {}),
                (0, i.jsx)(S, {}),
                (0, i.jsx)(f, {
                    isGift: t.isGift,
                    activeSubscription: t.activeSubscription,
                    defaultPaymentSourceId: m,
                    eligiblePaymentGateways: g,
                    hasFetchedPaymentSources: A,
                    paymentSources: T,
                }),
                t.purchaseType === N.VVm.SUBSCRIPTION && (0, i.jsx)(I, {}),
                d,
            ],
        })
    );
}
