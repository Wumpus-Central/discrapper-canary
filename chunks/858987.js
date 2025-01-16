t.d(n, {
    K: function () {
        return A;
    },
    Z: function () {
        return g;
    }
}),
    t(789020);
var i = t(200651);
t(192379);
var r = t(512722),
    a = t.n(r),
    l = t(481060),
    s = t(115130),
    o = t(906732),
    c = t(563132),
    u = t(630388),
    d = t(74538),
    p = t(296848),
    f = t(244923),
    m = t(981631),
    b = t(231338),
    v = t(388032),
    h = t(963074),
    P = t(74316);
function A(e) {
    let { purchaseType: n, plan: t, premiumSubscription: i, isGift: r, planGroup: l, isPrepaidPaymentSource: s, inReverseTrial: o } = e;
    if (n === b.GZ.ONE_TIME) return r ? v.intl.string(v.t.ouo4FB) : v.intl.string(v.t.ExD0Nj);
    if ((a()(null != t, 'Subscription plan must be selected to render SubscriptionReviewButton'), r)) return v.intl.string(v.t.ouo4FB);
    if (o) return v.intl.string(v.t.LQVQIi);
    if ((0, d.PV)(t.id)) {
        if (s) return v.intl.string(v.t.cRCCJy);
        if (null != i) return i.isPaused ? v.intl.string(v.t.zpi5pq) : (0, p.R4)(i, t.id, l) ? v.intl.string(v.t.IJI7ys) : v.intl.string(v.t.VPuTc3);
        return (0, d.W_)(null, t);
    }
    return v.intl.string(v.t.YScQSE);
}
function T(e, n) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), n());
}
function g(e) {
    var n;
    let { legalTermsNodeRef: t, invoiceError: r, planError: a, disablePurchase: d, flashLegalTerms: p, isSubmitting: b, premiumSubscription: g, isGift: y, planGroup: E, isPrepaid: I, isTrial: x, makePurchase: _, needsPaymentSource: N, inReverseTrial: C, onNext: R } = e,
        { application: S, selectedPlan: M, hasAcceptedTerms: L, purchaseType: j, paymentSourceId: k, activeSubscription: U, devShelfFetchState: O } = (0, c.usePaymentContext)(),
        B = A({
            purchaseType: j,
            plan: M,
            premiumSubscription: g,
            isGift: y,
            planGroup: E,
            isPrepaidPaymentSource: I,
            inReverseTrial: C
        }),
        { analyticsLocations: Z } = (0, o.ZP)();
    if (null != r || null != a || d)
        return (0, i.jsx)(l.Button, {
            color: l.Button.Colors.GREEN,
            disabled: !0,
            children: B
        });
    if (N)
        return (0, i.jsx)(l.Tooltip, {
            text: v.intl.string(v.t.L7jbQU),
            children: (e) =>
                (0, i.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: B
                })
        });
    if ((0, u.yE)(null !== (n = null == S ? void 0 : S.flags) && void 0 !== n ? n : 0, m.udG.EMBEDDED) && O === s.O.LOADING)
        return (0, i.jsx)(l.Tooltip, {
            text: v.intl.string(v.t.cjA5tr),
            children: (e) =>
                (0, i.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: B
                })
        });
    else if (x)
        return (0, i.jsxs)(l.ShinyButton, {
            innerClassName: h.innerButton,
            'data-testid': L ? 'purchase' : 'submitButton',
            onClick: L ? _ : () => T(t, p),
            color: l.Button.Colors.GREEN,
            submitting: b,
            children: [
                (0, i.jsx)('img', {
                    alt: '',
                    className: h.nitroIcon,
                    src: P
                }),
                B
            ]
        });
    else if (!L)
        return (0, i.jsx)(l.Tooltip, {
            text: v.intl.string(v.t.XdvBLS),
            children: (e) =>
                (0, i.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    onClick: () => T(t, p),
                    'data-testid': 'submitButton',
                    children: B
                })
        });
    else if (C && null != U && null != k)
        return (0, i.jsx)(f.Z, {
            activeSubscription: U,
            onNext: R,
            isSubmitting: b,
            paymentSourceId: k,
            buttonLabel: B,
            analyticsLocations: Z
        });
    else
        return (0, i.jsx)(l.Button, {
            'data-testid': 'purchase',
            onClick: _,
            color: l.Button.Colors.GREEN,
            submitting: b,
            children: B
        });
}
