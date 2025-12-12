n.d(t, {
    K: () => E,
    Z: () => y,
}),
    n(997841);
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(95015),
    s = n(681715),
    l = n(481060),
    c = n(115130),
    u = n(906732),
    d = n(563132),
    f = n(74538),
    p = n(296848),
    _ = n(244923),
    m = n(981631),
    h = n(231338),
    g = n(388032);
function E(e) {
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
        hasPaymentSources: d,
    } = e;
    if (null === u && d) return g.intl.string(g.t.CpOiEO);
    if (t === h.GZ.ONE_TIME) return o ? g.intl.string(g.t.ouo4FK) : g.intl.string(g.t.ExD0Ng);
    if ((a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === m.POd.BOOST))
        return g.intl.string(g.t.eUEeCt);
    if (o) return g.intl.string(g.t.ouo4FK);
    if (c) return g.intl.string(g.t.LQVQIq);
    if ((0, f.PV)(n.id))
        return l
            ? g.intl.string(g.t.cRCCJ3)
            : null != r
              ? r.isPausedAllowsResumeButNotUpdates
                  ? g.intl.string(g.t.zpi5pg)
                  : (0, p.R4)(r, n.id, s)
                    ? g.intl.string(g.t.IJI7yk)
                    : g.intl.string(g.t.VPuTc5)
              : (0, f.W_)(null, n);
    return g.intl.string(g.t.YScQSF);
}
function b(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: "smooth" }), t());
}
function y(e) {
    var t;
    let {
            legalTermsNodeRef: n,
            invoiceError: i,
            planError: a,
            disablePurchase: f,
            flashLegalTerms: p,
            isSubmitting: h,
            premiumSubscription: y,
            isGift: O,
            planGroup: v,
            isPrepaid: S,
            isTrial: I,
            makePurchase: T,
            needsPaymentSource: C,
            inReverseTrial: A,
            onNext: N,
            onPaymentSourceAdd: P,
        } = e,
        {
            application: R,
            selectedPlan: w,
            hasAcceptedTerms: D,
            purchaseType: x,
            paymentSourceId: L,
            activeSubscription: j,
            devShelfFetchState: M,
            hasPaymentSources: k,
        } = (0, d.JL)(),
        U = E({
            purchaseType: x,
            plan: w,
            premiumSubscription: y,
            isGift: O,
            planGroup: v,
            isPrepaidPaymentSource: S,
            inReverseTrial: A,
            paymentSourceId: L,
            hasPaymentSources: k,
        }),
        { analyticsLocations: G } = (0, u.ZP)();
    if (null != i || null != a || f)
        return (0, r.jsx)(l.Button, {
            variant: "active",
            text: U,
            disabled: !0,
        });
    if (C && k)
        return (0, r.jsx)(s.u, {
            text: g.intl.string(g.t.L7jbQV),
            children: (0, r.jsx)(l.Button, {
                variant: "primary",
                text: U,
                type: "submit",
                "data-testid": "submitButton",
                onClick: P,
            }),
        });
    if (C && !k)
        return (0, r.jsx)(s.u, {
            text: g.intl.string(g.t.L7jbQV),
            children: (0, r.jsx)(l.Button, {
                variant: "active",
                text: U,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
            }),
        });
    if ((0, o.yE)(null != (t = null == R ? void 0 : R.flags) ? t : 0, m.udG.EMBEDDED) && M === c.O.LOADING)
        return (0, r.jsx)(s.u, {
            text: g.intl.string(g.t.cjA5tj),
            children: (0, r.jsx)(l.Button, {
                variant: "active",
                text: U,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
            }),
        });
    if (I)
        return (0, r.jsx)(l.Button, {
            variant: "expressive",
            "data-testid": D ? "purchase" : "submitButton",
            text: U,
            onClick: D ? T : () => b(n, p),
            loading: h,
            iconPosition: "start",
            icon: () => (0, r.jsx)(l.SrA, { color: "currentColor" }),
        });
    else if (!D)
        return (0, r.jsx)(s.u, {
            text: g.intl.string(g.t.XdvBLS),
            children: (0, r.jsx)(l.Button, {
                variant: "active",
                text: U,
                type: "submit",
                onClick: () => b(n, p),
                "data-testid": "submitButton",
            }),
        });
    else if (A && null != j && null != L)
        return (0, r.jsx)(_.Z, {
            activeSubscription: j,
            onNext: N,
            isSubmitting: h,
            paymentSourceId: L,
            buttonLabel: U,
            analyticsLocations: G,
        });
    else
        return (0, r.jsx)(l.Button, {
            variant: "active",
            text: U,
            "data-testid": "purchase",
            onClick: T,
            loading: h,
        });
}
