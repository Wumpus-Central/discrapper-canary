r.d(n, {
    K: function () {
        return b;
    },
    Z: function () {
        return T;
    }
});
var i = r(789020);
var a = r(200651);
r(192379);
var o = r(512722),
    s = r.n(o),
    l = r(481060),
    u = r(115130),
    c = r(906732),
    d = r(563132),
    f = r(630388),
    p = r(74538),
    h = r(296848),
    _ = r(244923),
    m = r(981631),
    g = r(231338),
    E = r(388032),
    v = r(963074),
    y = r(74316);
function b(e) {
    let { purchaseType: n, plan: r, premiumSubscription: i, isGift: a, planGroup: o, isPrepaidPaymentSource: l, inReverseTrial: u } = e;
    if (n === g.GZ.ONE_TIME) return a ? E.intl.string(E.t.ouo4FB) : E.intl.string(E.t.ExD0Nj);
    if ((s()(null != r, 'Subscription plan must be selected to render SubscriptionReviewButton'), a)) return E.intl.string(E.t.ouo4FB);
    if (u) return E.intl.string(E.t.LQVQIi);
    if ((0, p.PV)(r.id)) {
        if (l) return E.intl.string(E.t.cRCCJy);
        if (null != i) return i.isPaused ? E.intl.string(E.t.zpi5pq) : (0, h.R4)(i, r.id, o) ? E.intl.string(E.t.IJI7ys) : E.intl.string(E.t.VPuTc3);
        return (0, p.W_)(null, r);
    }
    return E.intl.string(E.t.YScQSE);
}
function I(e, n) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), n());
}
function T(e) {
    var n;
    let { legalTermsNodeRef: r, invoiceError: i, planError: o, disablePurchase: s, flashLegalTerms: p, isSubmitting: h, premiumSubscription: g, isGift: T, planGroup: S, isPrepaid: A, isTrial: C, makePurchase: N, needsPaymentSource: R, inReverseTrial: O, onNext: D } = e,
        { application: x, selectedPlan: L, hasAcceptedTerms: w, purchaseType: P, paymentSourceId: M, activeSubscription: k, devShelfFetchState: U } = (0, d.usePaymentContext)(),
        B = b({
            purchaseType: P,
            plan: L,
            premiumSubscription: g,
            isGift: T,
            planGroup: S,
            isPrepaidPaymentSource: A,
            inReverseTrial: O
        }),
        { analyticsLocations: G } = (0, c.ZP)();
    if (null != i || null != o || s)
        return (0, a.jsx)(l.Button, {
            color: l.Button.Colors.GREEN,
            disabled: !0,
            children: B
        });
    if (R)
        return (0, a.jsx)(l.Tooltip, {
            text: E.intl.string(E.t.L7jbQU),
            children: (e) =>
                (0, a.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: B
                })
        });
    if ((0, f.yE)(null !== (n = null == x ? void 0 : x.flags) && void 0 !== n ? n : 0, m.udG.EMBEDDED) && U === u.O.LOADING)
        return (0, a.jsx)(l.Tooltip, {
            text: E.intl.string(E.t.cjA5tr),
            children: (e) =>
                (0, a.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: B
                })
        });
    else if (C)
        return (0, a.jsxs)(l.ShinyButton, {
            innerClassName: v.innerButton,
            'data-testid': w ? 'purchase' : 'submitButton',
            onClick: w ? N : () => I(r, p),
            color: l.Button.Colors.GREEN,
            submitting: h,
            children: [
                (0, a.jsx)('img', {
                    alt: '',
                    className: v.nitroIcon,
                    src: y
                }),
                B
            ]
        });
    else if (!w)
        return (0, a.jsx)(l.Tooltip, {
            text: E.intl.string(E.t.XdvBLS),
            children: (e) =>
                (0, a.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    onClick: () => I(r, p),
                    'data-testid': 'submitButton',
                    children: B
                })
        });
    else if (O && null != k && null != M)
        return (0, a.jsx)(_.Z, {
            activeSubscription: k,
            onNext: D,
            isSubmitting: h,
            paymentSourceId: M,
            buttonLabel: B,
            analyticsLocations: G
        });
    else
        return (0, a.jsx)(l.Button, {
            'data-testid': 'purchase',
            onClick: N,
            color: l.Button.Colors.GREEN,
            submitting: h,
            children: B
        });
}
