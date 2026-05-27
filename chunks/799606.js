"use strict";
n.d(t, { P: () => C });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(426398),
    u = n(655857),
    c = n(166532),
    d = n(615310),
    _ = n(671744),
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
        let { fetchParams: t } = e,
            [n, i] = (0, p.YV)(t),
            { setCheckoutInvoicePreview: s } = (0, _.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                s(n, i);
            }, [n, i, s]),
            null
        );
    },
    m = (e) => {
        let { fetchParams: t } = e,
            [n, i] = (0, p.QQ)(t),
            { setCheckoutInvoicePreview: s } = (0, _.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                s(n, i);
            }, [n, i, s]),
            null
        );
    },
    g = (e) => {
        let { fetchParams: t } = e,
            [n, i] = (0, p.YV)(t),
            { setRenewalInvoicePreview: s } = (0, _.t4)((e) => ({
                setRenewalInvoicePreview: e.setRenewalInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                s(n, i);
            }, [n, i, s]),
            null
        );
    },
    A = () => {
        let { fetchCheckoutInvoicePreviewRequest: e, fetchRenewalInvoicePreviewRequest: t } = (0, _.t4)((e) => ({
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
        return null == e && null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != e && "premium_checkout_invoice" === e.type && (0, i.jsx)(E, { fetchParams: e.params }),
                      null != e &&
                          "premium_one_time_gift_purchase_invoice" === e.type &&
                          (0, i.jsx)(m, { fetchParams: e.params }),
                      null != t && "premium_renewal_invoice" === t.type && (0, i.jsx)(g, { fetchParams: t.params }),
                  ],
              });
    };
var I = n(83617);
let T = () => {
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
                    i.length > 0 && !n.excludeSubscriptionPlansBySKU && (await (0, I.c_)(t, i));
                } catch (e) {
                    if (e.code !== I.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, o, n.excludeSubscriptionPlansBySKU, e, s, a, n.isGift]),
        null
    );
};
var S = n(679374),
    y = n(652215);
let N = {
    skuIds: [],
    isGift: !1,
    referralTrialOfferId: null,
    activeSubscription: null,
    excludeSubscriptionPlansBySKU: !1,
    purchaseType: y.VVm.SUBSCRIPTION,
};
function v() {
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
function C(e) {
    let { checkoutInitParameters: t = N, loadId: n, discoverySessionId: c, children: d } = e,
        h = (0, S._5)(),
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
            hasFetchedPaymentSources: I,
            paymentSources: C,
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
                (0, i.jsx)(v, {}),
                (0, i.jsx)(T, {}),
                (0, i.jsx)(f, {
                    isGift: t.isGift,
                    activeSubscription: t.activeSubscription,
                    defaultPaymentSourceId: m,
                    eligiblePaymentGateways: g,
                    hasFetchedPaymentSources: I,
                    paymentSources: C,
                }),
                t.purchaseType === y.VVm.SUBSCRIPTION && (0, i.jsx)(A, {}),
                d,
            ],
        })
    );
}
