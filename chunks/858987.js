(n.d(t, {
    K: () => O,
    Z: () => I
}),
    n(997841));
var r = n(255367);
n(73800);
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
    m = n(388032);
function g(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            }));
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
    let { purchaseType: t, plan: n, premiumSubscription: r, productLine: i, isGift: o, planGroup: s, isPrepaidPaymentSource: l, inReverseTrial: c, paymentSourceId: u, hasPaymentSources: _ } = e;
    if (null === u && _) return m.intl.string(m.t.CpOiEB);
    if (t === h.GZ.ONE_TIME) return o ? m.intl.string(m.t.ouo4FB) : m.intl.string(m.t.ExD0Nj);
    if ((a()(null != n, 'Subscription plan must be selected to render SubscriptionReviewButton'), i === p.POd.BOOST)) return m.intl.string(m.t.eUEeCg);
    if (o) return m.intl.string(m.t.ouo4FB);
    if (c) return m.intl.string(m.t.LQVQIi);
    if ((0, d.PV)(n.id)) return l ? m.intl.string(m.t.cRCCJy) : null != r ? (r.isPausedAllowsResumeButNotUpdates ? m.intl.string(m.t.zpi5pq) : (0, f.R4)(r, n.id, s) ? m.intl.string(m.t.IJI7ys) : m.intl.string(m.t.VPuTc3)) : (0, d.W_)(null, n);
    return m.intl.string(m.t.YScQSE);
}
function v(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), t());
}
function I(e) {
    var t;
    let { legalTermsNodeRef: n, invoiceError: i, planError: a, disablePurchase: d, flashLegalTerms: f, isSubmitting: h, premiumSubscription: g, isGift: b, planGroup: I, isPrepaid: T, isTrial: S, makePurchase: A, needsPaymentSource: N, inReverseTrial: C, onNext: R, onPaymentSourceAdd: P } = e,
        { application: w, selectedPlan: D, hasAcceptedTerms: L, purchaseType: x, paymentSourceId: M, activeSubscription: k, devShelfFetchState: j, hasPaymentSources: U } = (0, c.JL)(),
        G = O({
            purchaseType: x,
            plan: D,
            premiumSubscription: g,
            isGift: b,
            planGroup: I,
            isPrepaidPaymentSource: T,
            inReverseTrial: C,
            paymentSourceId: M,
            hasPaymentSources: U
        }),
        { analyticsLocations: B } = (0, l.ZP)();
    if (null != i || null != a || d)
        return (0, r.jsx)(o.zxk, {
            variant: 'active',
            text: G,
            disabled: !0
        });
    if (N && U)
        return (0, r.jsx)(o.ua7, {
            text: m.intl.string(m.t.L7jbQU),
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    y(
                        E(
                            {
                                variant: 'primary',
                                text: G
                            },
                            e
                        ),
                        {
                            type: 'submit',
                            'data-testid': 'submitButton',
                            onClick: P
                        }
                    )
                )
        });
    if (N && !U)
        return (0, r.jsx)(o.ua7, {
            text: m.intl.string(m.t.L7jbQU),
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    y(
                        E(
                            {
                                variant: 'active',
                                text: G
                            },
                            e
                        ),
                        {
                            type: 'submit',
                            'data-testid': 'submitButton',
                            disabled: !0
                        }
                    )
                )
        });
    if ((0, u.yE)(null != (t = null == w ? void 0 : w.flags) ? t : 0, p.udG.EMBEDDED) && j === s.O.LOADING)
        return (0, r.jsx)(o.ua7, {
            text: m.intl.string(m.t.cjA5tr),
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    y(
                        E(
                            {
                                variant: 'active',
                                text: G
                            },
                            e
                        ),
                        {
                            type: 'submit',
                            'data-testid': 'submitButton',
                            disabled: !0
                        }
                    )
                )
        });
    if (S)
        return (0, r.jsx)(o.zxk, {
            variant: 'expressive',
            'data-testid': L ? 'purchase' : 'submitButton',
            text: G,
            onClick: L ? A : () => v(n, f),
            loading: h,
            iconPosition: 'start',
            icon: () => (0, r.jsx)(o.SrA, { color: 'currentColor' })
        });
    else if (!L)
        return (0, r.jsx)(o.ua7, {
            text: m.intl.string(m.t.XdvBLS),
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    y(
                        E(
                            {
                                variant: 'active',
                                text: G
                            },
                            e
                        ),
                        {
                            type: 'submit',
                            onClick: () => v(n, f),
                            'data-testid': 'submitButton'
                        }
                    )
                )
        });
    else if (C && null != k && null != M)
        return (0, r.jsx)(_.Z, {
            activeSubscription: k,
            onNext: R,
            isSubmitting: h,
            paymentSourceId: M,
            buttonLabel: G,
            analyticsLocations: B
        });
    else
        return (0, r.jsx)(o.zxk, {
            variant: 'active',
            text: G,
            'data-testid': 'purchase',
            onClick: A,
            loading: h
        });
}
