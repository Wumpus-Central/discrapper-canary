(n.d(t, {
    K: () => T,
    Z: () => A
}),
    n(997841));
var r = n(255367);
n(73800);
var i = n(512722),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(115130),
    c = n(906732),
    u = n(563132),
    d = n(630388),
    f = n(74538),
    _ = n(296848),
    p = n(244923),
    h = n(981631),
    m = n(231338),
    g = n(388032),
    E = n(972478),
    b = n(74316);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
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
function T(e) {
    let { purchaseType: t, plan: n, premiumSubscription: r, productLine: i, isGift: o, planGroup: s, isPrepaidPaymentSource: l, inReverseTrial: c, paymentSourceId: u, hasPaymentSources: d } = e;
    if (null === u && d) return g.intl.string(g.t.CpOiEB);
    if (t === m.GZ.ONE_TIME) return o ? g.intl.string(g.t.ouo4FB) : g.intl.string(g.t.ExD0Nj);
    if ((a()(null != n, 'Subscription plan must be selected to render SubscriptionReviewButton'), i === h.POd.BOOST)) return g.intl.string(g.t.eUEeCg);
    if (o) return g.intl.string(g.t.ouo4FB);
    if (c) return g.intl.string(g.t.LQVQIi);
    if ((0, f.PV)(n.id)) return l ? g.intl.string(g.t.cRCCJy) : null != r ? (r.isPausedAllowsResumeButNotUpdates ? g.intl.string(g.t.zpi5pq) : (0, _.R4)(r, n.id, s) ? g.intl.string(g.t.IJI7ys) : g.intl.string(g.t.VPuTc3)) : (0, f.W_)(null, n);
    return g.intl.string(g.t.YScQSE);
}
function S(e, t) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), t());
}
function A(e) {
    var t;
    let { legalTermsNodeRef: n, invoiceError: i, planError: a, disablePurchase: f, flashLegalTerms: _, isSubmitting: m, premiumSubscription: y, isGift: v, planGroup: A, isPrepaid: N, isTrial: C, makePurchase: R, needsPaymentSource: P, inReverseTrial: w, onNext: D, onPaymentSourceAdd: L } = e,
        { application: x, selectedPlan: M, hasAcceptedTerms: k, purchaseType: j, paymentSourceId: U, activeSubscription: G, devShelfFetchState: B, hasPaymentSources: V } = (0, u.JL)(),
        F = T({
            purchaseType: j,
            plan: M,
            premiumSubscription: y,
            isGift: v,
            planGroup: A,
            isPrepaidPaymentSource: N,
            inReverseTrial: w,
            paymentSourceId: U,
            hasPaymentSources: V
        }),
        { analyticsLocations: Z } = (0, c.ZP)();
    if (null != i || null != a || f)
        return (0, r.jsx)(s.zxk, {
            variant: 'active',
            text: F,
            disabled: !0
        });
    if (P && V)
        return (0, r.jsx)(s.ua7, {
            text: g.intl.string(g.t.L7jbQU),
            children: (e) =>
                (0, r.jsx)(
                    s.zxk,
                    I(
                        O(
                            {
                                variant: 'primary',
                                text: F
                            },
                            e
                        ),
                        {
                            type: 'submit',
                            'data-testid': 'submitButton',
                            onClick: L
                        }
                    )
                )
        });
    if (P && !V)
        return (0, r.jsx)(s.ua7, {
            text: g.intl.string(g.t.L7jbQU),
            children: (e) =>
                (0, r.jsx)(
                    s.zxk,
                    I(
                        O(
                            {
                                variant: 'active',
                                text: F
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
    if ((0, d.yE)(null != (t = null == x ? void 0 : x.flags) ? t : 0, h.udG.EMBEDDED) && B === l.O.LOADING)
        return (0, r.jsx)(s.ua7, {
            text: g.intl.string(g.t.cjA5tr),
            children: (e) =>
                (0, r.jsx)(
                    s.zxk,
                    I(
                        O(
                            {
                                variant: 'active',
                                text: F
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
    if (C)
        return (0, r.jsxs)(s.gtL, {
            innerClassName: E.innerButton,
            'data-testid': k ? 'purchase' : 'submitButton',
            onClick: k ? R : () => S(n, _),
            color: o.zx.Colors.GREEN,
            submitting: m,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    className: E.nitroIcon,
                    src: b
                }),
                F
            ]
        });
    else if (!k)
        return (0, r.jsx)(s.ua7, {
            text: g.intl.string(g.t.XdvBLS),
            children: (e) =>
                (0, r.jsx)(
                    s.zxk,
                    I(
                        O(
                            {
                                variant: 'active',
                                text: F
                            },
                            e
                        ),
                        {
                            type: 'submit',
                            onClick: () => S(n, _),
                            'data-testid': 'submitButton'
                        }
                    )
                )
        });
    else if (w && null != G && null != U)
        return (0, r.jsx)(p.Z, {
            activeSubscription: G,
            onNext: D,
            isSubmitting: m,
            paymentSourceId: U,
            buttonLabel: F,
            analyticsLocations: Z
        });
    else
        return (0, r.jsx)(s.zxk, {
            variant: 'active',
            text: F,
            'data-testid': 'purchase',
            onClick: R,
            loading: m
        });
}
