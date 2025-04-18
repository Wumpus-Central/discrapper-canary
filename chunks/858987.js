n.d(t, {
    K: () => I,
    Z: () => T
}),
    n(997841);
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    o = n(481060),
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
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { purchaseType: t, plan: n, premiumSubscription: r, productLine: i, isGift: o, planGroup: s, isPrepaidPaymentSource: l, inReverseTrial: c } = e;
    if (t === h.GZ.ONE_TIME) return o ? m.NW.string(m.t.ouo4FB) : m.NW.string(m.t.ExD0Nj);
    if ((a()(null != n, 'Subscription plan must be selected to render SubscriptionReviewButton'), i === p.POd.BOOST)) return m.NW.string(m.t.eUEeCg);
    if (o) return m.NW.string(m.t.ouo4FB);
    if (c) return m.NW.string(m.t.LQVQIi);
    if ((0, d.PV)(n.id)) return l ? m.NW.string(m.t.cRCCJy) : null != r ? (r.isPausedAllowsResumeButNotUpdates ? m.NW.string(m.t.zpi5pq) : (0, f.R4)(r, n.id, s) ? m.NW.string(m.t.IJI7ys) : m.NW.string(m.t.VPuTc3)) : (0, d.W_)(null, n);
    return m.NW.string(m.t.YScQSE);
}
function S(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), t());
}
function T(e) {
    var t;
    let { legalTermsNodeRef: n, invoiceError: i, planError: a, disablePurchase: d, flashLegalTerms: f, isSubmitting: h, premiumSubscription: b, isGift: v, planGroup: T, isPrepaid: N, isTrial: A, makePurchase: C, needsPaymentSource: R, inReverseTrial: P, onNext: w } = e,
        { application: D, selectedPlan: L, hasAcceptedTerms: x, purchaseType: M, paymentSourceId: k, activeSubscription: j, devShelfFetchState: U } = (0, c.JL)(),
        G = I({
            purchaseType: M,
            plan: L,
            premiumSubscription: b,
            isGift: v,
            planGroup: T,
            isPrepaidPaymentSource: N,
            inReverseTrial: P
        }),
        { analyticsLocations: B } = (0, l.ZP)();
    if (null != i || null != a || d)
        return (0, r.jsx)(o.zxk, {
            color: o.zxk.Colors.GREEN,
            disabled: !0,
            children: G
        });
    if (R)
        return (0, r.jsx)(o.ua7, {
            text: m.NW.string(m.t.L7jbQU),
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    O(y({}, e), {
                        color: o.zxk.Colors.GREEN,
                        type: 'submit',
                        'data-testid': 'submitButton',
                        disabled: !0,
                        children: G
                    })
                )
        });
    if ((0, u.yE)(null != (t = null == D ? void 0 : D.flags) ? t : 0, p.udG.EMBEDDED) && U === s.O.LOADING)
        return (0, r.jsx)(o.ua7, {
            text: m.NW.string(m.t.cjA5tr),
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    O(y({}, e), {
                        color: o.zxk.Colors.GREEN,
                        type: 'submit',
                        'data-testid': 'submitButton',
                        disabled: !0,
                        children: G
                    })
                )
        });
    if (A)
        return (0, r.jsxs)(o.gtL, {
            innerClassName: g.innerButton,
            'data-testid': x ? 'purchase' : 'submitButton',
            onClick: x ? C : () => S(n, f),
            color: o.zxk.Colors.GREEN,
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
    if (!x)
        return (0, r.jsx)(o.ua7, {
            text: m.NW.string(m.t.XdvBLS),
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    O(y({}, e), {
                        color: o.zxk.Colors.GREEN,
                        type: 'submit',
                        onClick: () => S(n, f),
                        'data-testid': 'submitButton',
                        children: G
                    })
                )
        });
    else if (P && null != j && null != k)
        return (0, r.jsx)(_.Z, {
            activeSubscription: j,
            onNext: w,
            isSubmitting: h,
            paymentSourceId: k,
            buttonLabel: G,
            analyticsLocations: B
        });
    else
        return (0, r.jsx)(o.zxk, {
            'data-testid': 'purchase',
            onClick: C,
            color: o.zxk.Colors.GREEN,
            submitting: h,
            children: G
        });
}
