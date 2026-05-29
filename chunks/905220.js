"use strict";
n.d(t, { P: () => P });
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
var T = n(17928),
    S = n(10716),
    y = n(795816),
    N = n(627363),
    v = n(20015),
    C = n(885386),
    R = n(652215);
let O = () => {
    let e = (0, _.t4)((e) => e.applicationId),
        { data: t } = (0, N.YY)(e),
        n = C.Q_.useSetting(),
        i = (0, T.bG)([S.A], () => S.A.getFetchState());
    return (
        r.useEffect(() => {
            null != t && (0, v.n)(t, R.gfo.EMBEDDED) && n && null == i && (0, y.SE)();
        }, [t, n, i]),
        null
    );
};
var b = n(83617);
let D = () => {
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
        a = r.useMemo(() => (0, u._r)(n), [n]),
        { subscriptionPlanIdForCurrency: o, hasFetchedRelatedSubscriptionPlans: l } = (0, u.ow)({
            skuIDs: a,
            paymentSourceId: t,
            isGift: i,
        }),
        c = JSON.stringify(a),
        d = r.useRef(a);
    return (
        r.useEffect(() => {
            d.current = a;
        }),
        r.useEffect(() => {
            (async () => {
                let { current: n } = d;
                try {
                    n.length > 0 && !s && (await (0, b.c_)(t, n));
                } catch (e) {
                    if (e.code !== b.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, c, s, e, o, l, i]),
        null
    );
};
var L = n(679374),
    w = n(504275);
function M() {
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
function P(e) {
    let { checkoutInitParameters: t = w.r, loadId: n, discoverySessionId: c, children: d } = e,
        h = (0, L._5)(),
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
        [S] = r.useState(() =>
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
        y = r.useRef(null != h);
    return (
        r.useEffect(() => {
            y.current || null == h || (S.setState({ order: h }), (y.current = !0));
        }, [h, S]),
        r.useEffect(() => {
            S.getState().setCheckoutInitParameters(t);
        }, [S, t]),
        (0, i.jsxs)(_.Ni, {
            value: S,
            children: [
                (0, i.jsx)(M, {}),
                (0, i.jsx)(O, {}),
                (0, i.jsx)(D, {}),
                (0, i.jsx)(f, {
                    isGift: t.isGift,
                    activeSubscription: t.activeSubscription,
                    defaultPaymentSourceId: m,
                    eligiblePaymentGateways: g,
                    hasFetchedPaymentSources: A,
                    paymentSources: T,
                }),
                t.purchaseType === R.VVm.SUBSCRIPTION && (0, i.jsx)(I, {}),
                d,
            ],
        })
    );
}
