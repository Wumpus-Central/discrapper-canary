(n.d(t, { default: () => Q }), n(388685), n(415506));
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
    j = n(122289),
    I = n(63063),
    v = n(74538),
    T = n(937615),
    E = n(374649),
    P = n(140465),
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
function G(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
async function X(e) {
    let { premiumSubscription: t, onClose: n, setHasError: r, setIsCancelling: i, analyticsLocations: o, analyticsLocation: a } = e;
    try {
        if ((i(!0), r(!1), [Y.O0b.PAST_DUE, Y.O0b.PAUSED, Y.O0b.BILLING_RETRY].includes(t.status))) await (0, p.EO)(t.id, o, a);
        else {
            var s, l;
            let e = null != (l = null == (s = t.renewalMutations) ? void 0 : s.items) ? l : t.items,
                n = (0, v.Ue)(e);
            await (0, p.Mg)(
                t,
                { items: n },
                {
                    amount: 0,
                    currency: t.currency
                },
                (0, v.UX)(n, t.currency, t.paymentSourceId),
                o,
                a
            );
        }
        n();
    } catch (e) {
        (r(!0), i(!1));
    }
}
function q(e) {
    var t;
    let { premiumSubscription: n, premiumType: o, setStep: a, onClose: s, whatYouLoseExperienceEnabled: l, analyticsLocation: c } = e,
        u = (0, x.Q)(),
        [p, C] = i.useState(!1),
        [b, g] = i.useState(!1),
        j = (0, f.ZP)(),
        { analyticsLocations: T } = (0, h.ZP)(),
        E = null;
    switch (n.status) {
        case Y.O0b.PAST_DUE:
        case Y.O0b.PAUSED:
        case Y.O0b.BILLING_RETRY:
            E = H.intl.string(H.t.FClXh4);
            break;
        default:
            switch (o) {
                case z.p9.TIER_0:
                    E = u
                        ? H.intl.format(H.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS)
                          })
                        : H.intl.format(H.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case z.p9.TIER_1:
                    E = u
                        ? H.intl.format(H.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS)
                          })
                        : H.intl.format(H.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    E = u
                        ? H.intl.format(H.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS)
                          })
                        : H.intl.format(H.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let P =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !z.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null == (t = n.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !z.dJ.has(t);
                  })) != null
                ? (0, r.jsx)(_.zxk, {
                      variant: 'primary',
                      text: H.intl.string(H.t.PDTjLC),
                      onClick: () => a(B.R.PREVIEW)
                  })
                : (0, r.jsx)(_.zxk, {
                      variant: 'critical-primary',
                      text: l ? H.intl.string(H.t['cY+Ooa']) : H.intl.formatToPlainString(H.t['V3+Rpa'], { planPremiumType: v.ZP.getDisplayPremiumType(n.planId) }),
                      disabled: p,
                      onClick: async () => {
                          await X({
                              setHasError: g,
                              onClose: s,
                              premiumSubscription: n,
                              setIsCancelling: C,
                              analyticsLocations: T,
                              analyticsLocation: c
                          });
                      }
                  }),
        O = (0, r.jsx)(m.zx, {
            look: m.zx.Looks.LINK,
            color: (0, d.ap)(j) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
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
                              children: H.intl.format(H.t.ZpiGy8, { planPremiumType: v.ZP.getDisplayPremiumType(n.planId) })
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
                    (0, r.jsx)('div', { children: E })
                ]
            }),
            (0, r.jsxs)(_.mzw, {
                justify: y.Z.Justify.START,
                children: [P, O]
            })
        ]
    });
}
function K(e) {
    var t, n;
    let { premiumSubscription: i } = e,
        { analyticsLocations: o } = (0, h.ZP)(),
        [a] = (0, E.ED)({
            subscriptionId: i.id,
            items: (0, v.Ue)(null != (n = null == (t = i.renewalMutations) ? void 0 : t.items) ? n : i.items),
            renewal: !0,
            analyticsLocations: o,
            analyticsLocation: C.Z.CANCEL_INVOICE_PREVIEW
        }),
        s = (0, u.e7)([b.Z], () => b.Z.get(i.planId));
    if (null == a || null == s) return (0, r.jsx)(_.$jN, { className: W.loading });
    let { intervalType: l, intervalCount: c } = v.ZP.getIntervalForInvoice(a);
    return (0, r.jsxs)('div', {
        className: W.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: W.renewalInvoiceDate,
                children:
                    0 !== a.total
                        ? H.intl.format(H.t.ycyeBw, {
                              renewalDate: a.subscriptionPeriodStart,
                              rate: (0, T.og)((0, T.T4)(a.total, a.currency), l, c)
                          })
                        : H.intl.format(H.t['+y0Tj4'], { renewalDate: a.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(N.aO, {
                children: [
                    (0, r.jsx)(N.Z9, { children: H.intl.string(H.t.iqhIp6) }),
                    (0, r.jsx)(N.B1, {
                        label: H.intl.formatToPlainString(H.t.r3jVZm, { planName: v.ZP.getDisplayName(s.id) }),
                        value: (0, v.PK)(s),
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
function V(e) {
    let { premiumSubscription: t, premiumType: n, onBack: o, onClose: s, analyticsLocation: l } = e,
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
                    (0, r.jsx)(K, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(_.mzw, {
                align: y.Z.Align.CENTER,
                justify: y.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(_.zxk, {
                        variant: 'critical-primary',
                        text: H.intl.format(H.t['V3+Rpa'], { planPremiumType: v.ZP.getDisplayPremiumType(t.planId) }),
                        disabled: c,
                        onClick: async () => {
                            await X({
                                setHasError: m,
                                onClose: s,
                                premiumSubscription: t,
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
function J(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null == (t = (0, v.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
function Q(e) {
    var t, n, i;
    let { premiumSubscription: o } = e,
        a =
            (o.items.some((e) => {
                let { planId: t } = e;
                return !z.dJ.has(t);
            }) &&
                null == o.renewalMutations) ||
            (null == (t = o.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !z.dJ.has(t);
                  })) != null,
        { enabled: s, discountPrimary: l } = (0, O.S)({ location: 'Churn Modal' });
    return !a && s
        ? (0, r.jsx)(
              R.I,
              ((n = G({}, e)),
              (i = i = { discountPrimary: l }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(i)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                    }),
              n)
          )
        : (0, r.jsx)($, G({}, e));
}
let $ = (e) => {
    var t;
    let n,
        { premiumSubscription: o, transitionState: a, onClose: l, analyticsLocations: u, analyticsLocation: p } = e,
        { initialStep: x } = e,
        y = i.useRef(new s.qA()),
        [b, I] = i.useState(null),
        T = null == (t = (0, v.Af)(o)) ? void 0 : t.planId,
        E = null != T ? v.ZP.getPremiumType(T) : null;
    c()(null != E, 'Should not be cancelling Nitro without premiumType');
    let O = (0, f.ZP)();
    i.useEffect(() => {
        g.default.track(Y.rMx.CANCELLATION_FLOW_STARTED, J(o));
    }, [o]);
    let N = E === z.p9.TIER_0 || E === z.p9.TIER_1 || E === z.p9.TIER_2;
    null == x && (x = N ? B.R.WHAT_YOU_LOSE : B.R.CONFIRM);
    let { analyticsLocations: R } = (0, h.ZP)(u, C.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [k, M, U, X] = (0, Z.q)(x, o, u),
        [K, Q] = i.useState(null);
    (0, F.w)(o, l, !1);
    let $ = (e) => {
            (l(),
                g.default.track(
                    Y.rMx.CANCELLATION_FLOW_STEP,
                    G(
                        {
                            from_step: B.O[e],
                            to_step: null,
                            step_duration_ms: Date.now() - U,
                            flow_duration_ms: Date.now() - X,
                            location_stack: u
                        },
                        J(o)
                    )
                ));
        },
        ee = (0, P.UV)(),
        { churnUserDiscountOffer: et, isFetchingChurnDiscountOffer: en } = (0, P.WR)(!ee || k !== B.R.WHAT_YOU_LOSE),
        er = (0, S.Z)(),
        ei = 'US' === er.ipCountryCode && 'CA' === er.ipSubdivisionCode;
    switch (k) {
        case B.R.PAUSE_SELECT:
            n = (0, r.jsx)(A.of, {
                premiumSubscription: o,
                premiumType: E,
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
                let e = Error('No pause duration to set');
                throw (
                    (0, j.q2)(e, {
                        extra: {
                            subscriptionId: o.id,
                            status: o.status
                        }
                    }),
                    e
                );
            }
            n = (0, r.jsx)(A.Sz, {
                premiumSubscription: o,
                premiumType: E,
                setStep: M,
                onClose: () => $(k),
                analyticsLocation: p,
                pauseDuration: K
            });
            break;
        case B.R.WHAT_YOU_LOSE:
            n = (0, r.jsx)(L.Z, {
                premiumType: E,
                titleText: H.intl.string(H.t.PWq8TE),
                subtitleText: H.intl.format(H.t.nsGVzs, {}),
                subtitleClassName: void 0,
                footer: (0, r.jsxs)('div', {
                    className: W.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(_.zxk, {
                            variant: 'primary',
                            text: ei ? H.intl.string(H.t.PfnxqK) : H.intl.string(H.t['3PatS0']),
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
                isLoading: ee && en,
                churnUserDiscountOffer: et,
                analyticsLocations: R
            });
            break;
        case B.R.CONFIRM:
            n = (0, r.jsx)(q, {
                premiumSubscription: o,
                premiumType: E,
                setStep: M,
                onClose: () => $(k),
                whatYouLoseExperienceEnabled: N,
                analyticsLocation: p
            });
            break;
        case B.R.PREVIEW:
            n = (0, r.jsx)(V, {
                premiumSubscription: o,
                premiumType: E,
                onBack: () => M(B.R.CONFIRM),
                onClose: () => $(k),
                analyticsLocation: p
            });
            break;
        case B.R.CONFIRM_DISCOUNT:
            n = (0, r.jsx)(D.Z, {
                premiumSubscription: o,
                premiumType: E,
                onClose: () => $(k),
                onConfirm: () => M(B.R.DISCOUNT_APPLIED),
                userDiscountOffer: et
            });
            break;
        case B.R.DISCOUNT_APPLIED:
            n = (0, r.jsx)(w.D, {
                premiumSubscription: o,
                premiumType: E,
                onClose: () => $(k),
                confettiCanvas: b,
                userDiscountOffer: et
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(k));
    }
    return (0, r.jsxs)(h.Gt, {
        value: R,
        children: [
            (0, r.jsx)(s.O_, {
                ref: I,
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
