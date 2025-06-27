n.d(t, {
    R: () => G,
    default: () => q
}),
    n(388685),
    n(415506);
var i,
    r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(505266),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    m = n(780384),
    g = n(481060),
    p = n(355467),
    h = n(410030),
    f = n(100527),
    b = n(906732),
    _ = n(211242),
    x = n(600164),
    E = n(509545),
    j = n(626135),
    C = n(122289),
    O = n(63063),
    S = n(74538),
    v = n(937615),
    T = n(374649),
    N = n(140465),
    I = n(811334),
    y = n(625881),
    A = n(440984),
    P = n(398775),
    R = n(807163),
    D = n(311821),
    Z = n(42818),
    w = n(798769),
    k = n(459965),
    L = n(474936),
    B = n(981631),
    M = n(388032),
    U = n(868006);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
var G = (((i = {})[(i.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (i[(i.CONFIRM = 2)] = 'CONFIRM'), (i[(i.PREVIEW = 3)] = 'PREVIEW'), (i[(i.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (i[(i.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (i[(i.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (i[(i.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM'), i);
async function F(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: r, analyticsLocations: s, analyticsLocation: l } = e;
    try {
        if ((r(!0), i(!1), [B.O0b.PAST_DUE, B.O0b.PAUSED, B.O0b.BILLING_RETRY].includes(t.status))) await (0, p.EO)(t.id, s, l);
        else {
            var a, o;
            let e = null != (o = null == (a = t.renewalMutations) ? void 0 : a.items) ? o : t.items,
                n = (0, S.Ue)(e);
            await (0, p.Mg)(
                t,
                { items: n },
                {
                    amount: 0,
                    currency: t.currency
                },
                (0, S.UX)(n, t.currency, t.paymentSourceId),
                s,
                l
            );
        }
        n();
    } catch (e) {
        i(!0), r(!1);
    }
}
function H(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: l, onClose: a, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, _.Q)(),
        [u, p] = s.useState(!1),
        [f, E] = s.useState(!1),
        j = (0, h.ZP)(),
        { analyticsLocations: C } = (0, b.ZP)(),
        v = null;
    switch (n.status) {
        case B.O0b.PAST_DUE:
        case B.O0b.PAUSED:
        case B.O0b.BILLING_RETRY:
            v = M.intl.string(M.t.FClXh4);
            break;
        default:
            switch (i) {
                case L.p9.TIER_0:
                    v = d
                        ? M.intl.format(M.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(B.BhN.BLOCKED_PAYMENTS)
                          })
                        : M.intl.format(M.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case L.p9.TIER_1:
                    v = d
                        ? M.intl.format(M.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(B.BhN.BLOCKED_PAYMENTS)
                          })
                        : M.intl.format(M.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    v = d
                        ? M.intl.format(M.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(B.BhN.BLOCKED_PAYMENTS)
                          })
                        : M.intl.format(M.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let T =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !L.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null == (t = n.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !L.dJ.has(t);
                  })) != null
                ? (0, r.jsx)(g.zxk, {
                      onClick: () => l(3),
                      children: M.intl.string(M.t.PDTjLC)
                  })
                : (0, r.jsx)(g.zxk, {
                      color: g.zxk.Colors.RED,
                      disabled: u,
                      onClick: async () => {
                          await F({
                              setHasError: E,
                              onClose: a,
                              premiumSubscription: n,
                              setIsCancelling: p,
                              analyticsLocations: C,
                              analyticsLocation: c
                          });
                      },
                      children: o ? M.intl.string(M.t['cY+Ooa']) : M.intl.formatToPlainString(M.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                  }),
        N = (0, r.jsx)(g.zxk, {
            look: g.zxk.Looks.LINK,
            color: (0, m.ap)(j) ? g.zxk.Colors.PRIMARY : g.zxk.Colors.WHITE,
            onClick: a,
            children: o ? M.intl.string(M.t.h9tkAA) : M.intl.string(M.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o
                ? (0, r.jsx)(w.Z, {
                      premiumType: i,
                      className: U.cancellationHeader,
                      onClose: a
                  })
                : (0, r.jsxs)(g.xBx, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(g.vwX, {
                              tag: g.RB0.H4,
                              children: M.intl.format(M.t.ZpiGy8, { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(g.olH, { onClick: a })
                      ]
                  }),
            (0, r.jsxs)(g.hzk, {
                className: U.body,
                children: [
                    f
                        ? (0, r.jsx)(g.kzN, {
                              className: U.errorBlock,
                              children: M.intl.string(M.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: U.cancelImage }),
                    (0, r.jsx)('div', { children: v })
                ]
            }),
            (0, r.jsxs)(g.mzw, {
                justify: x.Z.Justify.START,
                children: [T, N]
            })
        ]
    });
}
function z(e) {
    var t, n;
    let { premiumSubscription: i } = e,
        { analyticsLocations: s } = (0, b.ZP)(),
        [l] = (0, T.ED)({
            subscriptionId: i.id,
            items: (0, S.Ue)(null != (n = null == (t = i.renewalMutations) ? void 0 : t.items) ? n : i.items),
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: f.Z.CANCEL_INVOICE_PREVIEW
        }),
        a = (0, u.e7)([E.Z], () => E.Z.get(i.planId));
    if (null == l || null == a) return (0, r.jsx)(g.$jN, { className: U.loading });
    let { intervalType: o, intervalCount: c } = S.ZP.getIntervalForInvoice(l);
    return (0, r.jsxs)('div', {
        className: U.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: U.renewalInvoiceDate,
                children:
                    0 !== l.total
                        ? M.intl.format(M.t.ycyeBw, {
                              renewalDate: l.subscriptionPeriodStart,
                              rate: (0, v.og)((0, v.T4)(l.total, l.currency), o, c)
                          })
                        : M.intl.format(M.t['+y0Tj4'], { renewalDate: l.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(I.aO, {
                children: [
                    (0, r.jsx)(I.Z9, { children: M.intl.string(M.t.iqhIp6) }),
                    (0, r.jsx)(I.B1, {
                        label: M.intl.formatToPlainString(M.t.r3jVZm, { planName: S.ZP.getDisplayName(a.id) }),
                        value: (0, S.PK)(a),
                        className: U.invoiceCancelRow
                    }),
                    (0, r.jsx)(I.UN, {}),
                    (0, r.jsx)(Z.nd, {
                        premiumSubscription: i,
                        renewalInvoice: l,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function Y(e) {
    let { premiumSubscription: t, premiumType: n, onBack: i, onClose: l, analyticsLocation: o } = e,
        [c, d] = s.useState(!1),
        [u, m] = s.useState(!1),
        { analyticsLocations: p } = (0, b.ZP)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.Z, {
                premiumType: n,
                onClose: l
            }),
            (0, r.jsxs)(g.hzk, {
                className: a()(U.previewStep, U.body),
                children: [
                    u
                        ? (0, r.jsx)(g.kzN, {
                              className: U.errorBlock,
                              children: M.intl.string(M.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(z, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(g.mzw, {
                align: x.Z.Align.CENTER,
                justify: x.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(g.zxk, {
                        color: g.zxk.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await F({
                                setHasError: m,
                                onClose: l,
                                premiumSubscription: t,
                                setIsCancelling: d,
                                analyticsLocations: p,
                                analyticsLocation: o
                            });
                        },
                        children: M.intl.format(M.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(t.planId) })
                    }),
                    (0, r.jsx)(D.Z, { onClick: i })
                ]
            })
        ]
    });
}
function W(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null == (t = (0, S.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
let K = {
    1: "What You're Losing",
    2: 'Confirm Cancellation',
    3: 'Preview Updated Subscription',
    4: 'Redeem Churn Discount Started',
    5: 'Redeem Churn Discount Completed',
    6: 'Select Pause Duration',
    7: 'Confirm Pause Duration'
};
function q(e) {
    var t;
    let n,
        { premiumSubscription: i, transitionState: l, onClose: a, analyticsLocations: c, analyticsLocation: u, initialStep: p } = e,
        _ = s.useRef(new o.qA()),
        [x, E] = s.useState(null),
        O = null == (t = (0, S.Af)(i)) ? void 0 : t.planId,
        v = null != O ? S.ZP.getPremiumType(O) : null;
    d()(null != v, 'Should not be cancelling Nitro without premiumType');
    let T = (0, h.ZP)();
    s.useEffect(() => {
        j.default.track(B.rMx.CANCELLATION_FLOW_STARTED, W(i));
    }, [i]);
    let I = v === L.p9.TIER_0 || v === L.p9.TIER_1 || v === L.p9.TIER_2;
    null == p && (p = I ? 1 : 2);
    let { analyticsLocations: D } = (0, b.ZP)(c, f.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [Z, w, G, F] = (function (e, t, n) {
            let [i, r] = s.useState(e),
                [l, a] = s.useState(Date.now()),
                [o] = s.useState(Date.now()),
                c = s.useCallback(
                    (e) => {
                        j.default.track(
                            B.rMx.CANCELLATION_FLOW_STEP,
                            V(
                                {
                                    from_step: K[i],
                                    to_step: K[e],
                                    step_duration_ms: Date.now() - l,
                                    flow_duration_ms: Date.now() - o,
                                    location_stack: n
                                },
                                W(t)
                            )
                        ),
                            r(e),
                            a(Date.now());
                    },
                    [n, o, l, i, t]
                );
            return [i, c, l, o];
        })(p, i, c),
        [z, q] = s.useState(null);
    (0, k.w)(i, a, !1);
    let X = (e) => {
            a(),
                j.default.track(
                    B.rMx.CANCELLATION_FLOW_STEP,
                    V(
                        {
                            from_step: K[e],
                            to_step: null,
                            step_duration_ms: Date.now() - G,
                            flow_duration_ms: Date.now() - F,
                            location_stack: c
                        },
                        W(i)
                    )
                );
        },
        Q = (0, N.UV)(),
        { churnUserDiscountOffer: J, isFetchingChurnDiscountOffer: $ } = (0, N.WR)(!Q || 1 !== Z);
    switch (Z) {
        case 6:
            n = (0, r.jsx)(P.of, {
                premiumSubscription: i,
                premiumType: v,
                setStep: w,
                onClose: () => X(Z),
                pauseDuration: z,
                setPauseDuration: q,
                footer: (0, r.jsxs)('div', {
                    className: U.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(g.zxk, {
                            disabled: null === z,
                            onClick: () => {
                                0 === z ? w(1) : w(7);
                            },
                            children: M.intl.string(M.t['3PatS0'])
                        }),
                        (0, r.jsx)(g.zxk, {
                            look: g.zxk.Looks.LINK,
                            color: (0, m.wj)(T) ? g.zxk.Colors.WHITE : g.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: M.intl.string(M.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: u
            });
            break;
        case 7:
            if (null == z) {
                let e = Error('No pause duration to set');
                throw (
                    ((0, C.q2)(e, {
                        extra: {
                            subscriptionId: i.id,
                            status: i.status
                        }
                    }),
                    e)
                );
            }
            n = (0, r.jsx)(P.Sz, {
                premiumSubscription: i,
                premiumType: v,
                setStep: w,
                onClose: () => X(Z),
                analyticsLocation: u,
                pauseDuration: z
            });
            break;
        case 1:
            n = (0, r.jsx)(R.Z, {
                premiumType: v,
                titleText: M.intl.string(M.t.PWq8TE),
                subtitleText: M.intl.format(M.t.nsGVzs, {}),
                subtitleClassName: void 0,
                footer: (0, r.jsxs)('div', {
                    className: U.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(g.zxk, {
                            onClick: () => w(2),
                            children: M.intl.string(M.t['3PatS0'])
                        }),
                        (0, r.jsx)(g.zxk, {
                            look: g.zxk.Looks.LINK,
                            color: (0, m.wj)(T) ? g.zxk.Colors.WHITE : g.zxk.Colors.PRIMARY,
                            onClick: () => X(Z),
                            children: M.intl.string(M.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => X(Z),
                onDiscountClaim: () => w(4),
                onContinue: () => w(2),
                isLoading: Q && $,
                churnUserDiscountOffer: J,
                analyticsLocations: D
            });
            break;
        case 2:
            n = (0, r.jsx)(H, {
                premiumSubscription: i,
                premiumType: v,
                setStep: w,
                onClose: () => X(Z),
                whatYouLoseExperienceEnabled: I,
                analyticsLocation: u
            });
            break;
        case 3:
            n = (0, r.jsx)(Y, {
                premiumSubscription: i,
                premiumType: v,
                onBack: () => w(2),
                onClose: () => X(Z),
                analyticsLocation: u
            });
            break;
        case 4:
            n = (0, r.jsx)(y.Z, {
                premiumSubscription: i,
                premiumType: v,
                onClose: () => X(Z),
                onConfirm: () => w(5),
                userDiscountOffer: J
            });
            break;
        case 5:
            n = (0, r.jsx)(A.D, {
                premiumSubscription: i,
                premiumType: v,
                onClose: () => X(Z),
                confettiCanvas: x,
                userDiscountOffer: J
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(Z));
    }
    return (0, r.jsxs)(b.Gt, {
        value: D,
        children: [
            (0, r.jsx)(o.O_, {
                ref: E,
                className: U.confettiCanvas,
                environment: _.current
            }),
            (0, r.jsx)(g.Y0X, {
                transitionState: l,
                parentComponent: 'PremiumSubscriptionCancellationModal',
                children: n
            })
        ]
    });
}
