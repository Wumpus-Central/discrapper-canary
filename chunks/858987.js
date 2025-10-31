n.d(t, {
    K: () => v,
    Z: () => T,
}),
    n(997841);
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(481060),
    s = n(115130),
    l = n(906732),
    c = n(563132),
    u = n(630388),
    d = n(74538),
    f = n(296848),
    _ = n(212029),
    p = n(244923),
    h = n(981631),
    m = n(231338),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
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
    if (null === u && _) return g.intl.string(g.t.CpOiEO);
    if (t === m.GZ.ONE_TIME) return o ? g.intl.string(g.t.ouo4FK) : g.intl.string(g.t.ExD0Ng);
    if ((a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === h.POd.BOOST))
        return g.intl.string(g.t.eUEeCt);
    if (o) return g.intl.string(g.t.ouo4FK);
    if (c) return g.intl.string(g.t.LQVQIq);
    if ((0, d.PV)(n.id))
        return l
            ? g.intl.string(g.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? g.intl.string(g.t.zpi5pg)
                  : (0, f.R4)(r, n.id, s)
                    ? g.intl.string(g.t.IJI7yk)
                    : g.intl.string(g.t.VPuTc5)
              : (0, d.W_)(null, n);
    return g.intl.string(g.t.YScQSF);
}
function I(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
function T(e) {
    var t;
    let {
            legalTermsNodeRef: n,
            invoiceError: i,
            planError: a,
            disablePurchase: d,
            flashLegalTerms: f,
            isSubmitting: m,
            premiumSubscription: E,
            isGift: y,
            planGroup: T,
            isPrepaid: S,
            isTrial: A,
            makePurchase: C,
            needsPaymentSource: N,
            inReverseTrial: R,
            onNext: P,
            onPaymentSourceAdd: w,
        } = e,
        {
            application: D,
            selectedPlan: x,
            hasAcceptedTerms: L,
            purchaseType: M,
            paymentSourceId: j,
            activeSubscription: k,
            devShelfFetchState: U,
            hasPaymentSources: G,
        } = (0, c.JL)(),
        { enabled: B } = _.Z.useConfig({ location: "SubscriptionReviewButton" }),
        Z = v({
            purchaseType: M,
            plan: x,
            premiumSubscription: E,
            isGift: y,
            planGroup: T,
            isPrepaidPaymentSource: S,
            inReverseTrial: R,
            paymentSourceId: j,
            hasPaymentSources: G,
        }),
        { analyticsLocations: F } = (0, l.ZP)();
    if (null != i || null != a || d) {
        let e = y && B ? "expressive" : "active";
        return (0, r.jsx)(o.Button, {
            variant: e,
            text: Z,
            disabled: !0,
        });
    }
    if (N && G)
        return (0, r.jsx)(o.aML, {
            "data-migration-pending": !0,
            text: g.intl.string(g.t.L7jbQV),
            children: (e) =>
                (0, r.jsx)(
                    o.Button,
                    O(
                        b(
                            {
                                variant: "primary",
                                text: Z,
                            },
                            e,
                        ),
                        {
                            type: "submit",
                            "data-testid": "submitButton",
                            onClick: w,
                        },
                    ),
                ),
        });
    if (N && !G)
        return (0, r.jsx)(o.aML, {
            "data-migration-pending": !0,
            text: g.intl.string(g.t.L7jbQV),
            children: (e) =>
                (0, r.jsx)(
                    o.Button,
                    O(
                        b(
                            {
                                variant: "active",
                                text: Z,
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
    if ((0, u.yE)(null != (t = null == D ? void 0 : D.flags) ? t : 0, h.udG.EMBEDDED) && U === s.O.LOADING)
        return (0, r.jsx)(o.aML, {
            "data-migration-pending": !0,
            text: g.intl.string(g.t.cjA5tj),
            children: (e) =>
                (0, r.jsx)(
                    o.Button,
                    O(
                        b(
                            {
                                variant: "active",
                                text: Z,
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
    if (A)
        return (0, r.jsx)(o.Button, {
            variant: "expressive",
            "data-testid": L ? "purchase" : "submitButton",
            text: Z,
            onClick: L ? C : () => I(n, f),
            loading: m,
            iconPosition: "start",
            icon: () => (0, r.jsx)(o.SrA, { color: "currentColor" }),
        });
    else if (!L)
        return (0, r.jsx)(o.aML, {
            "data-migration-pending": !0,
            text: g.intl.string(g.t.XdvBLS),
            children: (e) =>
                (0, r.jsx)(
                    o.Button,
                    O(
                        b(
                            {
                                variant: "active",
                                text: Z,
                            },
                            e,
                        ),
                        {
                            type: "submit",
                            onClick: () => I(n, f),
                            "data-testid": "submitButton",
                        },
                    ),
                ),
        });
    else if (R && null != k && null != j)
        return (0, r.jsx)(p.Z, {
            activeSubscription: k,
            onNext: P,
            isSubmitting: m,
            paymentSourceId: j,
            buttonLabel: Z,
            analyticsLocations: F,
        });
    else if (y && B)
        return (0, r.jsx)(o.Button, {
            variant: "expressive",
            text: Z,
            "data-testid": "purchase",
            onClick: C,
            loading: m,
        });
    else
        return (0, r.jsx)(o.Button, {
            variant: "active",
            text: Z,
            "data-testid": "purchase",
            onClick: C,
            loading: m,
        });
}
