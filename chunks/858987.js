n.d(t, {
    K: () => O,
    Z: () => S,
}),
    n(997841);
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(95015),
    s = n(481060),
    l = n(115130),
    c = n(906732),
    u = n(563132),
    d = n(74538),
    f = n(296848),
    p = n(244923),
    _ = n(981631),
    m = n(231338),
    h = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let {
        purchaseType: t,
        plan: n,
        premiumSubscription: r,
        productLine: i,
        isGift: o,
        planGroup: s,
        isPrepaidPaymentSource: l,
        inReverseTrial: c,
        paymentSourceId: u,
        hasPaymentSources: p,
    } = e;
    if (null === u && p) return h.intl.string(h.t.CpOiEO);
    if (t === m.GZ.ONE_TIME) return o ? h.intl.string(h.t.ouo4FK) : h.intl.string(h.t.ExD0Ng);
    if ((a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === _.POd.BOOST))
        return h.intl.string(h.t.eUEeCt);
    if (o) return h.intl.string(h.t.ouo4FK);
    if (c) return h.intl.string(h.t.LQVQIq);
    if ((0, d.PV)(n.id))
        return l
            ? h.intl.string(h.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? h.intl.string(h.t.zpi5pg)
                  : (0, f.R4)(r, n.id, s)
                    ? h.intl.string(h.t.IJI7yk)
                    : h.intl.string(h.t.VPuTc5)
              : (0, d.W_)(null, n);
    return h.intl.string(h.t.YScQSF);
}
function v(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
function S(e) {
    var t;
    let {
            legalTermsNodeRef: n,
            invoiceError: i,
            planError: a,
            disablePurchase: d,
            flashLegalTerms: f,
            isSubmitting: m,
            premiumSubscription: g,
            isGift: b,
            planGroup: S,
            isPrepaid: I,
            isTrial: T,
            makePurchase: A,
            needsPaymentSource: C,
            inReverseTrial: N,
            onNext: P,
            onPaymentSourceAdd: R,
        } = e,
        {
            application: D,
            selectedPlan: w,
            hasAcceptedTerms: x,
            purchaseType: L,
            paymentSourceId: j,
            activeSubscription: M,
            devShelfFetchState: k,
            hasPaymentSources: U,
        } = (0, u.JL)(),
        G = O({
            purchaseType: L,
            plan: w,
            premiumSubscription: g,
            isGift: b,
            planGroup: S,
            isPrepaidPaymentSource: I,
            inReverseTrial: N,
            paymentSourceId: j,
            hasPaymentSources: U,
        }),
        { analyticsLocations: Z } = (0, c.ZP)();
    if (null != i || null != a || d)
        return (0, r.jsx)(s.Button, {
            variant: "active",
            text: G,
            disabled: !0,
        });
    if (C && U)
        return (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: h.intl.string(h.t.L7jbQV),
            children: (e) =>
                (0, r.jsx)(
                    s.Button,
                    y(
                        E(
                            {
                                variant: "primary",
                                text: G,
                            },
                            e,
                        ),
                        {
                            type: "submit",
                            "data-testid": "submitButton",
                            onClick: R,
                        },
                    ),
                ),
        });
    if (C && !U)
        return (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: h.intl.string(h.t.L7jbQV),
            children: (e) =>
                (0, r.jsx)(
                    s.Button,
                    y(
                        E(
                            {
                                variant: "active",
                                text: G,
                            },
                            e,
                        ),
                        {
                            type: "submit",
                            "data-testid": "submitButton",
                            disabled: !0,
                        },
                    ),
                ),
        });
    if ((0, o.yE)(null != (t = null == D ? void 0 : D.flags) ? t : 0, _.udG.EMBEDDED) && k === l.O.LOADING)
        return (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: h.intl.string(h.t.cjA5tj),
            children: (e) =>
                (0, r.jsx)(
                    s.Button,
                    y(
                        E(
                            {
                                variant: "active",
                                text: G,
                            },
                            e,
                        ),
                        {
                            type: "submit",
                            "data-testid": "submitButton",
                            disabled: !0,
                        },
                    ),
                ),
        });
    if (T)
        return (0, r.jsx)(s.Button, {
            variant: "expressive",
            "data-testid": x ? "purchase" : "submitButton",
            text: G,
            onClick: x ? A : () => v(n, f),
            loading: m,
            iconPosition: "start",
            icon: () => (0, r.jsx)(s.SrA, { color: "currentColor" }),
        });
    else if (!x)
        return (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: h.intl.string(h.t.XdvBLS),
            children: (e) =>
                (0, r.jsx)(
                    s.Button,
                    y(
                        E(
                            {
                                variant: "active",
                                text: G,
                            },
                            e,
                        ),
                        {
                            type: "submit",
                            onClick: () => v(n, f),
                            "data-testid": "submitButton",
                        },
                    ),
                ),
        });
    else if (N && null != M && null != j)
        return (0, r.jsx)(p.Z, {
            activeSubscription: M,
            onNext: P,
            isSubmitting: m,
            paymentSourceId: j,
            buttonLabel: G,
            analyticsLocations: Z,
        });
    else
        return (0, r.jsx)(s.Button, {
            variant: "active",
            text: G,
            "data-testid": "purchase",
            onClick: A,
            loading: m,
        });
}
