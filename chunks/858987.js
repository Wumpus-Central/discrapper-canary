n.d(t, {
    K: () => O,
    Z: () => I,
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
    _ = n(244923),
    p = n(981631),
    h = n(231338),
    m = n(388032);
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
        hasPaymentSources: _,
    } = e;
    if (null === u && _) return m.intl.string(m.t.CpOiEO);
    if (t === h.GZ.ONE_TIME) return o ? m.intl.string(m.t.ouo4FK) : m.intl.string(m.t.ExD0Ng);
    if ((a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === p.POd.BOOST))
        return m.intl.string(m.t.eUEeCt);
    if (o) return m.intl.string(m.t.ouo4FK);
    if (c) return m.intl.string(m.t.LQVQIq);
    if ((0, d.PV)(n.id))
        return l
            ? m.intl.string(m.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? m.intl.string(m.t.zpi5pg)
                  : (0, f.R4)(r, n.id, s)
                    ? m.intl.string(m.t.IJI7yk)
                    : m.intl.string(m.t.VPuTc5)
              : (0, d.W_)(null, n);
    return m.intl.string(m.t.YScQSF);
}
function v(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
function I(e) {
    var t;
    let {
            legalTermsNodeRef: n,
            invoiceError: i,
            planError: a,
            disablePurchase: d,
            flashLegalTerms: f,
            isSubmitting: h,
            premiumSubscription: g,
            isGift: b,
            planGroup: I,
            isPrepaid: T,
            isTrial: S,
            makePurchase: A,
            needsPaymentSource: C,
            inReverseTrial: N,
            onNext: R,
            onPaymentSourceAdd: P,
        } = e,
        {
            application: D,
            selectedPlan: w,
            hasAcceptedTerms: L,
            purchaseType: x,
            paymentSourceId: M,
            activeSubscription: k,
            devShelfFetchState: j,
            hasPaymentSources: U,
        } = (0, u.JL)(),
        G = O({
            purchaseType: x,
            plan: w,
            premiumSubscription: g,
            isGift: b,
            planGroup: I,
            isPrepaidPaymentSource: T,
            inReverseTrial: N,
            paymentSourceId: M,
            hasPaymentSources: U,
        }),
        { analyticsLocations: B } = (0, c.ZP)();
    if (null != i || null != a || d)
        return (0, r.jsx)(s.Button, {
            variant: "active",
            text: G,
            disabled: !0,
        });
    if (C && U)
        return (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: m.intl.string(m.t.L7jbQV),
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
                            onClick: P,
                        },
                    ),
                ),
        });
    if (C && !U)
        return (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: m.intl.string(m.t.L7jbQV),
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
    if ((0, o.yE)(null != (t = null == D ? void 0 : D.flags) ? t : 0, p.udG.EMBEDDED) && j === l.O.LOADING)
        return (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: m.intl.string(m.t.cjA5tj),
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
    if (S)
        return (0, r.jsx)(s.Button, {
            variant: "expressive",
            "data-testid": L ? "purchase" : "submitButton",
            text: G,
            onClick: L ? A : () => v(n, f),
            loading: h,
            iconPosition: "start",
            icon: () => (0, r.jsx)(s.SrA, { color: "currentColor" }),
        });
    else if (!L)
        return (0, r.jsx)(s.aML, {
            "data-migration-pending": !0,
            text: m.intl.string(m.t.XdvBLS),
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
    else if (N && null != k && null != M)
        return (0, r.jsx)(_.Z, {
            activeSubscription: k,
            onNext: R,
            isSubmitting: h,
            paymentSourceId: M,
            buttonLabel: G,
            analyticsLocations: B,
        });
    else
        return (0, r.jsx)(s.Button, {
            variant: "active",
            text: G,
            "data-testid": "purchase",
            onClick: A,
            loading: h,
        });
}
