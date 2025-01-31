n.d(t, {
    K: () => v,
    Z: () => I
}),
    n(789020);
var i = n(200651);
n(192379);
var r = n(512722),
    a = n.n(r),
    s = n(481060),
    o = n(115130),
    l = n(906732),
    u = n(563132),
    c = n(630388),
    d = n(74538),
    f = n(296848),
    _ = n(244923),
    p = n(981631),
    h = n(231338),
    m = n(388032),
    g = n(963074),
    E = n(74316);
function v(e) {
    let { purchaseType: t, plan: n, premiumSubscription: i, isGift: r, planGroup: s, isPrepaidPaymentSource: o, inReverseTrial: l } = e;
    if (t === h.GZ.ONE_TIME) return r ? m.intl.string(m.t.ouo4FB) : m.intl.string(m.t.ExD0Nj);
    if ((a()(null != n, 'Subscription plan must be selected to render SubscriptionReviewButton'), r)) return m.intl.string(m.t.ouo4FB);
    if (l) return m.intl.string(m.t.LQVQIi);
    if ((0, d.PV)(n.id)) return o ? m.intl.string(m.t.cRCCJy) : null != i ? (i.isPaused ? m.intl.string(m.t.zpi5pq) : (0, f.R4)(i, n.id, s) ? m.intl.string(m.t.IJI7ys) : m.intl.string(m.t.VPuTc3)) : (0, d.W_)(null, n);
    return m.intl.string(m.t.YScQSE);
}
function y(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), t());
}
function I(e) {
    var t;
    let { legalTermsNodeRef: n, invoiceError: r, planError: a, disablePurchase: d, flashLegalTerms: f, isSubmitting: h, premiumSubscription: I, isGift: b, planGroup: T, isPrepaid: S, isTrial: A, makePurchase: N, needsPaymentSource: C, inReverseTrial: R, onNext: O } = e,
        { application: D, selectedPlan: x, hasAcceptedTerms: L, purchaseType: P, paymentSourceId: w, activeSubscription: M, devShelfFetchState: k } = (0, u.JL)(),
        U = v({
            purchaseType: P,
            plan: x,
            premiumSubscription: I,
            isGift: b,
            planGroup: T,
            isPrepaidPaymentSource: S,
            inReverseTrial: R
        }),
        { analyticsLocations: G } = (0, l.ZP)();
    if (null != r || null != a || d)
        return (0, i.jsx)(s.zxk, {
            color: s.zxk.Colors.GREEN,
            disabled: !0,
            children: U
        });
    if (C)
        return (0, i.jsx)(s.ua7, {
            text: m.intl.string(m.t.L7jbQU),
            children: (e) =>
                (0, i.jsx)(s.zxk, {
                    ...e,
                    color: s.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: U
                })
        });
    if ((0, c.yE)(null !== (t = null == D ? void 0 : D.flags) && void 0 !== t ? t : 0, p.udG.EMBEDDED) && k === o.O.LOADING)
        return (0, i.jsx)(s.ua7, {
            text: m.intl.string(m.t.cjA5tr),
            children: (e) =>
                (0, i.jsx)(s.zxk, {
                    ...e,
                    color: s.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: U
                })
        });
    if (A)
        return (0, i.jsxs)(s.gtL, {
            innerClassName: g.innerButton,
            'data-testid': L ? 'purchase' : 'submitButton',
            onClick: L ? N : () => y(n, f),
            color: s.zxk.Colors.GREEN,
            submitting: h,
            children: [
                (0, i.jsx)('img', {
                    alt: '',
                    className: g.nitroIcon,
                    src: E
                }),
                U
            ]
        });
    if (!L)
        return (0, i.jsx)(s.ua7, {
            text: m.intl.string(m.t.XdvBLS),
            children: (e) =>
                (0, i.jsx)(s.zxk, {
                    ...e,
                    color: s.zxk.Colors.GREEN,
                    type: 'submit',
                    onClick: () => y(n, f),
                    'data-testid': 'submitButton',
                    children: U
                })
        });
    else if (R && null != M && null != w)
        return (0, i.jsx)(_.Z, {
            activeSubscription: M,
            onNext: O,
            isSubmitting: h,
            paymentSourceId: w,
            buttonLabel: U,
            analyticsLocations: G
        });
    else
        return (0, i.jsx)(s.zxk, {
            'data-testid': 'purchase',
            onClick: N,
            color: s.zxk.Colors.GREEN,
            submitting: h,
            children: U
        });
}
