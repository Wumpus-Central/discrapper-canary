(n.d(t, { default: () => $ }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    s = n.n(a),
    o = n(505266),
    l = n(512722),
    c = n.n(l),
    u = n(442837),
    d = n(780384),
    m = n(755721),
    p = n(481060),
    _ = n(355467),
    f = n(410030),
    b = n(100527),
    x = n(906732),
    y = n(211242),
    h = n(600164),
    C = n(509545),
    j = n(626135),
    E = n(122289),
    O = n(63063),
    P = n(74538),
    g = n(937615),
    v = n(374649),
    N = n(140465),
    I = n(414642),
    T = n(140447),
    S = n(847903),
    R = n(811334),
    w = n(48813),
    D = n(625881),
    k = n(440984),
    A = n(398775),
    L = n(807163),
    M = n(311821),
    U = n(42818),
    B = n(798769),
    Z = n(459965),
    z = n(45474),
    F = n(501090),
    Y = n(474936),
    H = n(981631),
    W = n(388032),
    X = n(868006);
function q(e) {
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
async function V(e) {
    let { premiumSubscription: t, onClose: n, setHasError: r, setIsCancelling: i, analyticsLocations: a, analyticsLocation: s } = e;
    try {
        if ((i(!0), r(!1), [H.O0b.PAST_DUE, H.O0b.PAUSED, H.O0b.BILLING_RETRY].includes(t.status))) await (0, _.EO)(t.id, a, s);
        else {
            var o, l;
            let e = null != (l = null == (o = t.renewalMutations) ? void 0 : o.items) ? l : t.items,
                n = (0, P.Ue)(e);
            await (0, _.Mg)(
                t,
                { items: n },
                {
                    amount: 0,
                    currency: t.currency
                },
                (0, P.UX)(n, t.currency, t.paymentSourceId),
                a,
                s
            );
        }
        n();
    } catch (e) {
        (r(!0), i(!1));
    }
}
function G(e) {
    var t;
    let { premiumSubscription: n, premiumType: a, setStep: s, onClose: o, whatYouLoseExperienceEnabled: l, analyticsLocation: c } = e,
        u = (0, y.Q)(),
        [_, b] = i.useState(!1),
        [C, j] = i.useState(!1),
        E = (0, f.ZP)(),
        { analyticsLocations: g } = (0, x.ZP)(),
        v = null;
    switch (n.status) {
        case H.O0b.PAST_DUE:
        case H.O0b.PAUSED:
        case H.O0b.BILLING_RETRY:
            v = W.intl.string(W.t.FClXh4);
            break;
        default:
            switch (a) {
                case Y.p9.TIER_0:
                    v = u
                        ? W.intl.format(W.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(H.BhN.BLOCKED_PAYMENTS)
                          })
                        : W.intl.format(W.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case Y.p9.TIER_1:
                    v = u
                        ? W.intl.format(W.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(H.BhN.BLOCKED_PAYMENTS)
                          })
                        : W.intl.format(W.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    v = u
                        ? W.intl.format(W.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(H.BhN.BLOCKED_PAYMENTS)
                          })
                        : W.intl.format(W.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let N =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !Y.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null == (t = n.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !Y.dJ.has(t);
                  })) != null
                ? (0, r.jsx)(p.zxk, {
                      variant: 'primary',
                      text: W.intl.string(W.t.PDTjLC),
                      onClick: () => s(z.R.PREVIEW)
                  })
                : (0, r.jsx)(p.zxk, {
                      variant: 'critical-primary',
                      text: l ? W.intl.string(W.t['cY+Ooa']) : W.intl.formatToPlainString(W.t['V3+Rpa'], { planPremiumType: P.ZP.getDisplayPremiumType(n.planId) }),
                      disabled: _,
                      onClick: async () => {
                          await V({
                              setHasError: j,
                              onClose: o,
                              premiumSubscription: n,
                              setIsCancelling: b,
                              analyticsLocations: g,
                              analyticsLocation: c
                          });
                      }
                  }),
        I = (0, r.jsx)(m.zx, {
            look: m.zx.Looks.LINK,
            color: (0, d.ap)(E) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
            onClick: o,
            children: l ? W.intl.string(W.t.h9tkAA) : W.intl.string(W.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l
                ? (0, r.jsx)(B.Z, {
                      premiumType: a,
                      className: X.cancellationHeader,
                      onClose: o
                  })
                : (0, r.jsxs)(p.xBx, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(p.vwX, {
                              tag: p.RB0.H4,
                              children: W.intl.format(W.t.ZpiGy8, { planPremiumType: P.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(p.olH, { onClick: o })
                      ]
                  }),
            (0, r.jsxs)(p.hzk, {
                className: X.body,
                children: [
                    C
                        ? (0, r.jsx)(p.kzN, {
                              className: X.errorBlock,
                              children: W.intl.string(W.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: X.cancelImage }),
                    (0, r.jsx)('div', { children: v })
                ]
            }),
            (0, r.jsxs)(p.mzw, {
                justify: h.Z.Justify.START,
                children: [N, I]
            })
        ]
    });
}
function K(e) {
    var t, n;
    let { premiumSubscription: i } = e,
        { analyticsLocations: a } = (0, x.ZP)(),
        [s] = (0, v.ED)({
            subscriptionId: i.id,
            items: (0, P.Ue)(null != (n = null == (t = i.renewalMutations) ? void 0 : t.items) ? n : i.items),
            renewal: !0,
            analyticsLocations: a,
            analyticsLocation: b.Z.CANCEL_INVOICE_PREVIEW
        }),
        o = (0, u.e7)([C.Z], () => C.Z.get(i.planId));
    if (null == s || null == o) return (0, r.jsx)(p.$jN, { className: X.loading });
    let { intervalType: l, intervalCount: c } = P.ZP.getIntervalForInvoice(s);
    return (0, r.jsxs)('div', {
        className: X.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: X.renewalInvoiceDate,
                children:
                    0 !== s.total
                        ? W.intl.format(W.t.ycyeBw, {
                              renewalDate: s.subscriptionPeriodStart,
                              rate: (0, g.og)((0, g.T4)(s.total, s.currency), l, c)
                          })
                        : W.intl.format(W.t['+y0Tj4'], { renewalDate: s.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(R.aO, {
                children: [
                    (0, r.jsx)(R.Z9, { children: W.intl.string(W.t.iqhIp6) }),
                    (0, r.jsx)(R.B1, {
                        label: W.intl.formatToPlainString(W.t.r3jVZm, { planName: P.ZP.getDisplayName(o.id) }),
                        value: (0, P.PK)(o),
                        className: X.invoiceCancelRow
                    }),
                    (0, r.jsx)(R.UN, {}),
                    (0, r.jsx)(U.nd, {
                        premiumSubscription: i,
                        renewalInvoice: s,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function J(e) {
    let { premiumSubscription: t, premiumType: n, onBack: a, onClose: o, analyticsLocation: l } = e,
        [c, u] = i.useState(!1),
        [d, m] = i.useState(!1),
        { analyticsLocations: _ } = (0, x.ZP)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(B.Z, {
                premiumType: n,
                onClose: o
            }),
            (0, r.jsxs)(p.hzk, {
                className: s()(X.previewStep, X.body),
                children: [
                    d
                        ? (0, r.jsx)(p.kzN, {
                              className: X.errorBlock,
                              children: W.intl.string(W.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(K, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(p.mzw, {
                align: h.Z.Align.CENTER,
                justify: h.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(p.zxk, {
                        variant: 'critical-primary',
                        text: W.intl.format(W.t['V3+Rpa'], { planPremiumType: P.ZP.getDisplayPremiumType(t.planId) }),
                        disabled: c,
                        onClick: async () => {
                            await V({
                                setHasError: m,
                                onClose: o,
                                premiumSubscription: t,
                                setIsCancelling: u,
                                analyticsLocations: _,
                                analyticsLocation: l
                            });
                        }
                    }),
                    (0, r.jsx)(M.Z, { onClick: a })
                ]
            })
        ]
    });
}
function Q(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null == (t = (0, P.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
function $(e) {
    var t, n, i;
    let { premiumSubscription: a } = e,
        s =
            (a.items.some((e) => {
                let { planId: t } = e;
                return !Y.dJ.has(t);
            }) &&
                null == a.renewalMutations) ||
            (null == (t = a.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !Y.dJ.has(t);
                  })) != null,
        { enabled: o, discountPrimary: l } = (0, I.S)({ location: 'Churn Modal' }),
        { enabled: c } = (0, T.P)({ location: 'Churn Modal' });
    return (!s || c) && o
        ? (0, r.jsx)(
              w.I,
              ((n = q({}, e)),
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
        : (0, r.jsx)(ee, q({}, e));
}
let ee = (e) => {
    var t;
    let n,
        { premiumSubscription: a, transitionState: s, onClose: l, analyticsLocations: u, analyticsLocation: _ } = e,
        { initialStep: y } = e,
        h = i.useRef(new o.qA()),
        [C, O] = i.useState(null),
        g = null == (t = (0, P.Af)(a)) ? void 0 : t.planId,
        v = null != g ? P.ZP.getPremiumType(g) : null;
    c()(null != v, 'Should not be cancelling Nitro without premiumType');
    let I = (0, f.ZP)();
    i.useEffect(() => {
        j.default.track(H.rMx.CANCELLATION_FLOW_STARTED, Q(a));
    }, [a]);
    let T = v === Y.p9.TIER_0 || v === Y.p9.TIER_1 || v === Y.p9.TIER_2;
    null == y && (y = T ? z.R.WHAT_YOU_LOSE : z.R.CONFIRM);
    let { analyticsLocations: R } = (0, x.ZP)(u, b.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [w, M, U, B] = (0, F.q)(y, a, u),
        [V, K] = i.useState(null);
    (0, Z.w)(a, l, !1);
    let $ = (e) => {
            (l(),
                j.default.track(
                    H.rMx.CANCELLATION_FLOW_STEP,
                    q(
                        {
                            from_step: z.O[e],
                            to_step: null,
                            step_duration_ms: Date.now() - U,
                            flow_duration_ms: Date.now() - B,
                            location_stack: u
                        },
                        Q(a)
                    )
                ));
        },
        ee = (0, N.UV)(),
        { churnUserDiscountOffer: et, isFetchingChurnDiscountOffer: en } = (0, N.WR)(!ee || w !== z.R.WHAT_YOU_LOSE),
        er = (0, S.Z)(),
        ei = 'US' === er.ipCountryCode && 'CA' === er.ipSubdivisionCode;
    switch (w) {
        case z.R.PAUSE_SELECT:
            n = (0, r.jsx)(A.of, {
                premiumSubscription: a,
                premiumType: v,
                setStep: M,
                onClose: () => $(w),
                pauseDuration: V,
                setPauseDuration: K,
                footer: (0, r.jsxs)('div', {
                    className: X.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(p.zxk, {
                            variant: 'primary',
                            text: W.intl.string(W.t['3PatS0']),
                            disabled: null === V,
                            onClick: () => {
                                0 === V ? M(z.R.WHAT_YOU_LOSE) : M(z.R.PAUSE_CONFIRM);
                            }
                        }),
                        (0, r.jsx)(m.zx, {
                            look: m.zx.Looks.LINK,
                            color: (0, d.wj)(I) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
                            onClick: l,
                            children: W.intl.string(W.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: _
            });
            break;
        case z.R.PAUSE_CONFIRM:
            if (null == V) {
                let e = Error('No pause duration to set');
                throw (
                    (0, E.q2)(e, {
                        extra: {
                            subscriptionId: a.id,
                            status: a.status
                        }
                    }),
                    e
                );
            }
            n = (0, r.jsx)(A.Sz, {
                premiumSubscription: a,
                premiumType: v,
                setStep: M,
                onClose: () => $(w),
                analyticsLocation: _,
                pauseDuration: V
            });
            break;
        case z.R.WHAT_YOU_LOSE:
            n = (0, r.jsx)(L.Z, {
                premiumType: v,
                titleText: W.intl.string(W.t.PWq8TE),
                subtitleText: W.intl.format(W.t.nsGVzs, {}),
                subtitleClassName: void 0,
                footer: (0, r.jsxs)('div', {
                    className: X.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(p.zxk, {
                            variant: 'primary',
                            text: ei ? W.intl.string(W.t.PfnxqK) : W.intl.string(W.t['3PatS0']),
                            onClick: () => M(z.R.CONFIRM)
                        }),
                        (0, r.jsx)(m.zx, {
                            look: m.zx.Looks.LINK,
                            color: (0, d.wj)(I) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
                            onClick: () => $(w),
                            children: W.intl.string(W.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => $(w),
                onDiscountClaim: () => M(z.R.CONFIRM_DISCOUNT),
                onContinue: () => M(z.R.CONFIRM),
                isLoading: ee && en,
                churnUserDiscountOffer: et,
                analyticsLocations: R
            });
            break;
        case z.R.CONFIRM:
            n = (0, r.jsx)(G, {
                premiumSubscription: a,
                premiumType: v,
                setStep: M,
                onClose: () => $(w),
                whatYouLoseExperienceEnabled: T,
                analyticsLocation: _
            });
            break;
        case z.R.PREVIEW:
            n = (0, r.jsx)(J, {
                premiumSubscription: a,
                premiumType: v,
                onBack: () => M(z.R.CONFIRM),
                onClose: () => $(w),
                analyticsLocation: _
            });
            break;
        case z.R.CONFIRM_DISCOUNT:
            n = (0, r.jsx)(D.Z, {
                premiumSubscription: a,
                premiumType: v,
                onClose: () => $(w),
                onConfirm: () => M(z.R.DISCOUNT_APPLIED),
                userDiscountOffer: et
            });
            break;
        case z.R.DISCOUNT_APPLIED:
            n = (0, r.jsx)(k.D, {
                premiumSubscription: a,
                premiumType: v,
                onClose: () => $(w),
                confettiCanvas: C,
                userDiscountOffer: et
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(w));
    }
    return (0, r.jsxs)(x.Gt, {
        value: R,
        children: [
            (0, r.jsx)(o.O_, {
                ref: O,
                className: X.confettiCanvas,
                environment: h.current
            }),
            (0, r.jsx)(p.Y0X, {
                transitionState: s,
                parentComponent: 'PremiumSubscriptionCancellationModal',
                children: n
            })
        ]
    });
};
