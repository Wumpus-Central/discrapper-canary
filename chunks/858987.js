n.d(t, {
    K: () => S,
    Z: () => T
}),
    n(789020);
var r = n(200651);
n(192379);
var i = n(512722),
    o = n.n(i),
    a = n(481060),
    s = n(115130),
    l = n(906732),
    c = n(563132),
    u = n(630388),
    d = n(74538),
    f = n(296848),
    p = n(244923),
    _ = n(981631),
    h = n(231338),
    m = n(388032),
    g = n(223590),
    E = n(74316);
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
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
function S(e) {
    let { purchaseType: t, plan: n, premiumSubscription: r, isGift: i, planGroup: a, isPrepaidPaymentSource: s, inReverseTrial: l } = e;
    if (t === h.GZ.ONE_TIME) return i ? m.NW.string(m.t.ouo4FB) : m.NW.string(m.t.ExD0Nj);
    if ((o()(null != n, 'Subscription plan must be selected to render SubscriptionReviewButton'), i)) return m.NW.string(m.t.ouo4FB);
    if (l) return m.NW.string(m.t.LQVQIi);
    if ((0, d.PV)(n.id)) return s ? m.NW.string(m.t.cRCCJy) : null != r ? (r.isPaused ? m.NW.string(m.t.zpi5pq) : (0, f.R4)(r, n.id, a) ? m.NW.string(m.t.IJI7ys) : m.NW.string(m.t.VPuTc3)) : (0, d.W_)(null, n);
    return m.NW.string(m.t.YScQSE);
}
function I(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), t());
}
function T(e) {
    var t;
    let { legalTermsNodeRef: n, invoiceError: i, planError: o, disablePurchase: d, flashLegalTerms: f, isSubmitting: h, premiumSubscription: v, isGift: y, planGroup: T, isPrepaid: N, isTrial: A, makePurchase: C, needsPaymentSource: R, inReverseTrial: P, onNext: w } = e,
        { application: D, selectedPlan: x, hasAcceptedTerms: L, purchaseType: M, paymentSourceId: k, activeSubscription: j, devShelfFetchState: U } = (0, c.JL)(),
        G = S({
            purchaseType: M,
            plan: x,
            premiumSubscription: v,
            isGift: y,
            planGroup: T,
            isPrepaidPaymentSource: N,
            inReverseTrial: P
        }),
        { analyticsLocations: B } = (0, l.ZP)();
    if (null != i || null != o || d)
        return (0, r.jsx)(a.zxk, {
            color: a.zxk.Colors.GREEN,
            disabled: !0,
            children: G
        });
    if (R)
        return (0, r.jsx)(a.ua7, {
            text: m.NW.string(m.t.L7jbQU),
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    O(b({}, e), {
                        color: a.zxk.Colors.GREEN,
                        type: 'submit',
                        'data-testid': 'submitButton',
                        disabled: !0,
                        children: G
                    })
                )
        });
    if ((0, u.yE)(null !== (t = null == D ? void 0 : D.flags) && void 0 !== t ? t : 0, _.udG.EMBEDDED) && U === s.O.LOADING)
        return (0, r.jsx)(a.ua7, {
            text: m.NW.string(m.t.cjA5tr),
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    O(b({}, e), {
                        color: a.zxk.Colors.GREEN,
                        type: 'submit',
                        'data-testid': 'submitButton',
                        disabled: !0,
                        children: G
                    })
                )
        });
    if (A)
        return (0, r.jsxs)(a.gtL, {
            innerClassName: g.innerButton,
            'data-testid': L ? 'purchase' : 'submitButton',
            onClick: L ? C : () => I(n, f),
            color: a.zxk.Colors.GREEN,
            submitting: h,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    className: g.nitroIcon,
                    src: E
                }),
                G
            ]
        });
    if (!L)
        return (0, r.jsx)(a.ua7, {
            text: m.NW.string(m.t.XdvBLS),
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    O(b({}, e), {
                        color: a.zxk.Colors.GREEN,
                        type: 'submit',
                        onClick: () => I(n, f),
                        'data-testid': 'submitButton',
                        children: G
                    })
                )
        });
    else if (P && null != j && null != k)
        return (0, r.jsx)(p.Z, {
            activeSubscription: j,
            onNext: w,
            isSubmitting: h,
            paymentSourceId: k,
            buttonLabel: G,
            analyticsLocations: B
        });
    else
        return (0, r.jsx)(a.zxk, {
            'data-testid': 'purchase',
            onClick: C,
            color: a.zxk.Colors.GREEN,
            submitting: h,
            children: G
        });
}
