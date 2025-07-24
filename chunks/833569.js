(n.d(e, { default: () => Q }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(505266),
    l = n(512722),
    c = n.n(l),
    u = n(442837),
    d = n(780384),
    m = n(755721),
    _ = n(481060),
    p = n(355467),
    f = n(410030),
    C = n(100527),
    h = n(906732),
    x = n(211242),
    y = n(600164),
    b = n(509545),
    g = n(626135),
    I = n(122289),
    j = n(63063),
    P = n(74538),
    v = n(937615),
    T = n(374649),
    E = n(140465),
    O = n(414642),
    S = n(847903),
    N = n(811334),
    R = n(48813),
    D = n(625881),
    w = n(440984),
    A = n(398775),
    L = n(807163),
    k = n(311821),
    M = n(42818),
    U = n(798769),
    F = n(459965),
    B = n(45474),
    Z = n(501090),
    z = n(474936),
    Y = n(981631),
    H = n(388032),
    W = n(868006);
function G(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                ((r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r));
            }));
    }
    return t;
}
async function X(t) {
    let { premiumSubscription: e, onClose: n, setHasError: r, setIsCancelling: i, analyticsLocations: o, analyticsLocation: a } = t;
    try {
        if ((i(!0), r(!1), [Y.O0b.PAST_DUE, Y.O0b.PAUSED, Y.O0b.BILLING_RETRY].includes(e.status))) await (0, p.EO)(e.id, o, a);
        else {
            var s, l;
            let t = null != (l = null == (s = e.renewalMutations) ? void 0 : s.items) ? l : e.items,
                n = (0, P.Ue)(t);
            await (0, p.Mg)(
                e,
                { items: n },
                {
                    amount: 0,
                    currency: e.currency
                },
                (0, P.UX)(n, e.currency, e.paymentSourceId),
                o,
                a
            );
        }
        n();
    } catch (t) {
        (r(!0), i(!1));
    }
}
function q(t) {
    var e;
    let { premiumSubscription: n, premiumType: o, setStep: a, onClose: s, whatYouLoseExperienceEnabled: l, analyticsLocation: c } = t,
        u = (0, x.Q)(),
        [p, C] = i.useState(!1),
        [b, g] = i.useState(!1),
        I = (0, f.ZP)(),
        { analyticsLocations: v } = (0, h.ZP)(),
        T = null;
    switch (n.status) {
        case Y.O0b.PAST_DUE:
        case Y.O0b.PAUSED:
        case Y.O0b.BILLING_RETRY:
            T = H.intl.string(H.t.FClXh4);
            break;
        default:
            switch (o) {
                case z.p9.TIER_0:
                    T = u
                        ? H.intl.format(H.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: j.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS)
                          })
                        : H.intl.format(H.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case z.p9.TIER_1:
                    T = u
                        ? H.intl.format(H.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: j.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS)
                          })
                        : H.intl.format(H.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    T = u
                        ? H.intl.format(H.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: j.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS)
                          })
                        : H.intl.format(H.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let E =
            (n.items.some((t) => {
                let { planId: e } = t;
                return !z.dJ.has(e);
            }) &&
                null == n.renewalMutations) ||
            (null == (e = n.renewalMutations)
                ? void 0
                : e.items.find((t) => {
                      let { planId: e } = t;
                      return !z.dJ.has(e);
                  })) != null
                ? (0, r.jsx)(_.zxk, {
                      variant: 'primary',
                      text: H.intl.string(H.t.PDTjLC),
                      onClick: () => a(B.R.PREVIEW)
                  })
                : (0, r.jsx)(_.zxk, {
                      variant: 'critical-primary',
                      text: l ? H.intl.string(H.t['cY+Ooa']) : H.intl.formatToPlainString(H.t['V3+Rpa'], { planPremiumType: P.ZP.getDisplayPremiumType(n.planId) }),
                      disabled: p,
                      onClick: async () => {
                          await X({
                              setHasError: g,
                              onClose: s,
                              premiumSubscription: n,
                              setIsCancelling: C,
                              analyticsLocations: v,
                              analyticsLocation: c
                          });
                      }
                  }),
        O = (0, r.jsx)(m.zx, {
            look: m.zx.Looks.LINK,
            color: (0, d.ap)(I) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
            onClick: s,
            children: l ? H.intl.string(H.t.h9tkAA) : H.intl.string(H.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l
                ? (0, r.jsx)(U.Z, {
                      premiumType: o,
                      className: W.cancellationHeader,
                      onClose: s
                  })
                : (0, r.jsxs)(_.xBx, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(_.vwX, {
                              tag: _.RB0.H4,
                              children: H.intl.format(H.t.ZpiGy8, { planPremiumType: P.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(_.olH, { onClick: s })
                      ]
                  }),
            (0, r.jsxs)(_.hzk, {
                className: W.body,
                children: [
                    b
                        ? (0, r.jsx)(_.kzN, {
                              className: W.errorBlock,
                              children: H.intl.string(H.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: W.cancelImage }),
                    (0, r.jsx)('div', { children: T })
                ]
            }),
            (0, r.jsxs)(_.mzw, {
                justify: y.Z.Justify.START,
                children: [E, O]
            })
        ]
    });
}
function K(t) {
    var e, n;
    let { premiumSubscription: i } = t,
        { analyticsLocations: o } = (0, h.ZP)(),
        [a] = (0, T.ED)({
            subscriptionId: i.id,
            items: (0, P.Ue)(null != (n = null == (e = i.renewalMutations) ? void 0 : e.items) ? n : i.items),
            renewal: !0,
            analyticsLocations: o,
            analyticsLocation: C.Z.CANCEL_INVOICE_PREVIEW
        }),
        s = (0, u.e7)([b.Z], () => b.Z.get(i.planId));
    if (null == a || null == s) return (0, r.jsx)(_.$jN, { className: W.loading });
    let { intervalType: l, intervalCount: c } = P.ZP.getIntervalForInvoice(a);
    return (0, r.jsxs)('div', {
        className: W.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: W.renewalInvoiceDate,
                children:
                    0 !== a.total
                        ? H.intl.format(H.t.ycyeBw, {
                              renewalDate: a.subscriptionPeriodStart,
                              rate: (0, v.og)((0, v.T4)(a.total, a.currency), l, c)
                          })
                        : H.intl.format(H.t['+y0Tj4'], { renewalDate: a.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(N.aO, {
                children: [
                    (0, r.jsx)(N.Z9, { children: H.intl.string(H.t.iqhIp6) }),
                    (0, r.jsx)(N.B1, {
                        label: H.intl.formatToPlainString(H.t.r3jVZm, { planName: P.ZP.getDisplayName(s.id) }),
                        value: (0, P.PK)(s),
                        className: W.invoiceCancelRow
                    }),
                    (0, r.jsx)(N.UN, {}),
                    (0, r.jsx)(M.nd, {
                        premiumSubscription: i,
                        renewalInvoice: a,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function V(t) {
    let { premiumSubscription: e, premiumType: n, onBack: o, onClose: s, analyticsLocation: l } = t,
        [c, u] = i.useState(!1),
        [d, m] = i.useState(!1),
        { analyticsLocations: p } = (0, h.ZP)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U.Z, {
                premiumType: n,
                onClose: s
            }),
            (0, r.jsxs)(_.hzk, {
                className: a()(W.previewStep, W.body),
                children: [
                    d
                        ? (0, r.jsx)(_.kzN, {
                              className: W.errorBlock,
                              children: H.intl.string(H.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(K, { premiumSubscription: e })
                ]
            }),
            (0, r.jsxs)(_.mzw, {
                align: y.Z.Align.CENTER,
                justify: y.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(_.zxk, {
                        variant: 'critical-primary',
                        text: H.intl.format(H.t['V3+Rpa'], { planPremiumType: P.ZP.getDisplayPremiumType(e.planId) }),
                        disabled: c,
                        onClick: async () => {
                            await X({
                                setHasError: m,
                                onClose: s,
                                premiumSubscription: e,
                                setIsCancelling: u,
                                analyticsLocations: p,
                                analyticsLocation: l
                            });
                        }
                    }),
                    (0, r.jsx)(k.Z, { onClick: o })
                ]
            })
        ]
    });
}
function J(t) {
    var e;
    return {
        subscription_id: t.id,
        subscription_type: t.type,
        subscription_plan_id: null == (e = (0, P.Af)(t)) ? void 0 : e.id,
        subscription_plan_gateway_plan_id: t.paymentGatewayPlanId,
        subscription_status: t.status
    };
}
function Q(t) {
    var e, n, i;
    let { premiumSubscription: o } = t,
        a =
            (o.items.some((t) => {
                let { planId: e } = t;
                return !z.dJ.has(e);
            }) &&
                null == o.renewalMutations) ||
            (null == (e = o.renewalMutations)
                ? void 0
                : e.items.find((t) => {
                      let { planId: e } = t;
                      return !z.dJ.has(e);
                  })) != null,
        { enabled: s, discountPrimary: l } = (0, O.S)({ location: 'Churn Modal' });
    return !a && s
        ? (0, r.jsx)(
              R.I,
              ((n = G({}, t)),
              (i = i = { discountPrimary: l }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                  : (function (t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(i)).forEach(function (t) {
                        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
                    }),
              n)
          )
        : (0, r.jsx)($, G({}, t));
}
let $ = (t) => {
    var e;
    let n,
        { premiumSubscription: o, transitionState: a, onClose: l, analyticsLocations: u, analyticsLocation: p } = t,
        { initialStep: x } = t,
        y = i.useRef(new s.qA()),
        [b, j] = i.useState(null),
        v = null == (e = (0, P.Af)(o)) ? void 0 : e.planId,
        T = null != v ? P.ZP.getPremiumType(v) : null;
    c()(null != T, 'Should not be cancelling Nitro without premiumType');
    let O = (0, f.ZP)();
    i.useEffect(() => {
        g.default.track(Y.rMx.CANCELLATION_FLOW_STARTED, J(o));
    }, [o]);
    let N = T === z.p9.TIER_0 || T === z.p9.TIER_1 || T === z.p9.TIER_2;
    null == x && (x = N ? B.R.WHAT_YOU_LOSE : B.R.CONFIRM);
    let { analyticsLocations: R } = (0, h.ZP)(u, C.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [k, M, U, X] = (0, Z.q)(x, o, u),
        [K, Q] = i.useState(null);
    (0, F.w)(o, l, !1);
    let $ = (t) => {
            (l(),
                g.default.track(
                    Y.rMx.CANCELLATION_FLOW_STEP,
                    G(
                        {
                            from_step: B.O[t],
                            to_step: null,
                            step_duration_ms: Date.now() - U,
                            flow_duration_ms: Date.now() - X,
                            location_stack: u
                        },
                        J(o)
                    )
                ));
        },
        tt = (0, E.UV)(),
        { churnUserDiscountOffer: te, isFetchingChurnDiscountOffer: tn } = (0, E.WR)(!tt || k !== B.R.WHAT_YOU_LOSE),
        tr = (0, S.Z)(),
        ti = 'US' === tr.ipCountryCode && 'CA' === tr.ipSubdivisionCode;
    switch (k) {
        case B.R.PAUSE_SELECT:
            n = (0, r.jsx)(A.of, {
                premiumSubscription: o,
                premiumType: T,
                setStep: M,
                onClose: () => $(k),
                pauseDuration: K,
                setPauseDuration: Q,
                footer: (0, r.jsxs)('div', {
                    className: W.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(_.zxk, {
                            variant: 'primary',
                            text: H.intl.string(H.t['3PatS0']),
                            disabled: null === K,
                            onClick: () => {
                                0 === K ? M(B.R.WHAT_YOU_LOSE) : M(B.R.PAUSE_CONFIRM);
                            }
                        }),
                        (0, r.jsx)(m.zx, {
                            look: m.zx.Looks.LINK,
                            color: (0, d.wj)(O) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
                            onClick: l,
                            children: H.intl.string(H.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: p
            });
            break;
        case B.R.PAUSE_CONFIRM:
            if (null == K) {
                let t = Error('No pause duration to set');
                throw (
                    (0, I.q2)(t, {
                        extra: {
                            subscriptionId: o.id,
                            status: o.status
                        }
                    }),
                    t
                );
            }
            n = (0, r.jsx)(A.Sz, {
                premiumSubscription: o,
                premiumType: T,
                setStep: M,
                onClose: () => $(k),
                analyticsLocation: p,
                pauseDuration: K
            });
            break;
        case B.R.WHAT_YOU_LOSE:
            n = (0, r.jsx)(L.Z, {
                premiumType: T,
                titleText: H.intl.string(H.t.PWq8TE),
                subtitleText: H.intl.format(H.t.nsGVzs, {}),
                subtitleClassName: void 0,
                footer: (0, r.jsxs)('div', {
                    className: W.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(_.zxk, {
                            variant: 'primary',
                            text: ti ? H.intl.string(H.t.PfnxqK) : H.intl.string(H.t['3PatS0']),
                            onClick: () => M(B.R.CONFIRM)
                        }),
                        (0, r.jsx)(m.zx, {
                            look: m.zx.Looks.LINK,
                            color: (0, d.wj)(O) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
                            onClick: () => $(k),
                            children: H.intl.string(H.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => $(k),
                onDiscountClaim: () => M(B.R.CONFIRM_DISCOUNT),
                onContinue: () => M(B.R.CONFIRM),
                isLoading: tt && tn,
                churnUserDiscountOffer: te,
                analyticsLocations: R
            });
            break;
        case B.R.CONFIRM:
            n = (0, r.jsx)(q, {
                premiumSubscription: o,
                premiumType: T,
                setStep: M,
                onClose: () => $(k),
                whatYouLoseExperienceEnabled: N,
                analyticsLocation: p
            });
            break;
        case B.R.PREVIEW:
            n = (0, r.jsx)(V, {
                premiumSubscription: o,
                premiumType: T,
                onBack: () => M(B.R.CONFIRM),
                onClose: () => $(k),
                analyticsLocation: p
            });
            break;
        case B.R.CONFIRM_DISCOUNT:
            n = (0, r.jsx)(D.Z, {
                premiumSubscription: o,
                premiumType: T,
                onClose: () => $(k),
                onConfirm: () => M(B.R.DISCOUNT_APPLIED),
                userDiscountOffer: te
            });
            break;
        case B.R.DISCOUNT_APPLIED:
            n = (0, r.jsx)(w.D, {
                premiumSubscription: o,
                premiumType: T,
                onClose: () => $(k),
                confettiCanvas: b,
                userDiscountOffer: te
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(k));
    }
    return (0, r.jsxs)(h.Gt, {
        value: R,
        children: [
            (0, r.jsx)(s.O_, {
                ref: j,
                className: W.confettiCanvas,
                environment: y.current
            }),
            (0, r.jsx)(_.Y0X, {
                transitionState: a,
                parentComponent: 'PremiumSubscriptionCancellationModal',
                children: n
            })
        ]
    });
};
