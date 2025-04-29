n.d(t, {
    K: () => I,
    Z: () => T
}),
    n(997841);
var r = n(255367);
n(73800);
var i = n(512722),
    o = n.n(i),
    a = n(481060),
    s = n(115130),
    l = n(906732),
    c = n(563132),
    u = n(630388),
    d = n(74538),
    f = n(296848),
    _ = n(244923),
    p = n(981631),
    h = n(231338),
    m = n(388032),
    g = n(972478),
    E = n(74316);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { purchaseType: t, plan: n, premiumSubscription: r, productLine: i, isGift: a, planGroup: s, isPrepaidPaymentSource: l, inReverseTrial: c, paymentSourceId: u, hasPaymentSources: _ } = e;
    if (null === u && _) return m.intl.string(m.t.CpOiEB);
    if (t === h.GZ.ONE_TIME) return a ? m.intl.string(m.t.ouo4FB) : m.intl.string(m.t.ExD0Nj);
    if ((o()(null != n, 'Subscription plan must be selected to render SubscriptionReviewButton'), i === p.POd.BOOST)) return m.intl.string(m.t.eUEeCg);
    if (a) return m.intl.string(m.t.ouo4FB);
    if (c) return m.intl.string(m.t.LQVQIi);
    if ((0, d.PV)(n.id)) return l ? m.intl.string(m.t.cRCCJy) : null != r ? (r.isPausedAllowsResumeButNotUpdates ? m.intl.string(m.t.zpi5pq) : (0, f.R4)(r, n.id, s) ? m.intl.string(m.t.IJI7ys) : m.intl.string(m.t.VPuTc3)) : (0, d.W_)(null, n);
    return m.intl.string(m.t.YScQSE);
}
function S(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), t());
}
function T(e) {
    var t;
    let { legalTermsNodeRef: n, invoiceError: i, planError: o, disablePurchase: d, flashLegalTerms: f, isSubmitting: h, premiumSubscription: b, isGift: O, planGroup: T, isPrepaid: A, isTrial: N, makePurchase: C, needsPaymentSource: R, inReverseTrial: P, onNext: w, onPaymentSourceAdd: D } = e,
        { application: L, selectedPlan: x, hasAcceptedTerms: M, purchaseType: k, paymentSourceId: j, activeSubscription: U, devShelfFetchState: G, hasPaymentSources: B } = (0, c.JL)(),
        V = I({
            purchaseType: k,
            plan: x,
            premiumSubscription: b,
            isGift: O,
            planGroup: T,
            isPrepaidPaymentSource: A,
            inReverseTrial: P,
            paymentSourceId: j,
            hasPaymentSources: B
        }),
        { analyticsLocations: F } = (0, l.ZP)();
    if (null != i || null != o || d)
        return (0, r.jsx)(a.zxk, {
            color: a.zxk.Colors.GREEN,
            disabled: !0,
            children: V
        });
    if (R && B)
        return (0, r.jsx)(a.ua7, {
            text: m.intl.string(m.t.L7jbQU),
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    v(y({}, e), {
                        color: a.zxk.Colors.BRAND,
                        type: 'submit',
                        'data-testid': 'submitButton',
                        onClick: D,
                        children: V
                    })
                )
        });
    if (R && !B)
        return (0, r.jsx)(a.ua7, {
            text: m.intl.string(m.t.L7jbQU),
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    v(y({}, e), {
                        color: a.zxk.Colors.GREEN,
                        type: 'submit',
                        'data-testid': 'submitButton',
                        disabled: !0,
                        children: V
                    })
                )
        });
    if ((0, u.yE)(null != (t = null == L ? void 0 : L.flags) ? t : 0, p.udG.EMBEDDED) && G === s.O.LOADING)
        return (0, r.jsx)(a.ua7, {
            text: m.intl.string(m.t.cjA5tr),
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    v(y({}, e), {
                        color: a.zxk.Colors.GREEN,
                        type: 'submit',
                        'data-testid': 'submitButton',
                        disabled: !0,
                        children: V
                    })
                )
        });
    if (N)
        return (0, r.jsxs)(a.gtL, {
            innerClassName: g.innerButton,
            'data-testid': M ? 'purchase' : 'submitButton',
            onClick: M ? C : () => S(n, f),
            color: a.zxk.Colors.GREEN,
            submitting: h,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    className: g.nitroIcon,
                    src: E
                }),
                V
            ]
        });
    else if (!M)
        return (0, r.jsx)(a.ua7, {
            text: m.intl.string(m.t.XdvBLS),
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    v(y({}, e), {
                        color: a.zxk.Colors.GREEN,
                        type: 'submit',
                        onClick: () => S(n, f),
                        'data-testid': 'submitButton',
                        children: V
                    })
                )
        });
    else if (P && null != U && null != j)
        return (0, r.jsx)(_.Z, {
            activeSubscription: U,
            onNext: w,
            isSubmitting: h,
            paymentSourceId: j,
            buttonLabel: V,
            analyticsLocations: F
        });
    else
        return (0, r.jsx)(a.zxk, {
            'data-testid': 'purchase',
            onClick: C,
            color: a.zxk.Colors.GREEN,
            submitting: h,
            children: V
        });
}
