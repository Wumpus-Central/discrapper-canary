(n.d(t, {
    R: () => F,
    default: () => X
}),
    n(388685),
    n(415506));
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
    p = n(481060),
    g = n(355467),
    h = n(410030),
    f = n(100527),
    b = n(906732),
    x = n(211242),
    _ = n(600164),
    E = n(509545),
    j = n(626135),
    O = n(122289),
    C = n(63063),
    S = n(74538),
    v = n(937615),
    T = n(374649),
    N = n(140465),
    I = n(847903),
    y = n(811334),
    A = n(625881),
    P = n(440984),
    R = n(398775),
    D = n(807163),
    Z = n(311821),
    w = n(42818),
    k = n(798769),
    L = n(459965),
    B = n(474936),
    M = n(981631),
    U = n(388032),
    V = n(868006);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
var F = (((i = {})[(i.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (i[(i.CONFIRM = 2)] = 'CONFIRM'), (i[(i.PREVIEW = 3)] = 'PREVIEW'), (i[(i.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (i[(i.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (i[(i.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (i[(i.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM'), i);
async function H(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: r, analyticsLocations: s, analyticsLocation: l } = e;
    try {
        if ((r(!0), i(!1), [M.O0b.PAST_DUE, M.O0b.PAUSED, M.O0b.BILLING_RETRY].includes(t.status))) await (0, g.EO)(t.id, s, l);
        else {
            var a, o;
            let e = null != (o = null == (a = t.renewalMutations) ? void 0 : a.items) ? o : t.items,
                n = (0, S.Ue)(e);
            await (0, g.Mg)(
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
        (i(!0), r(!1));
    }
}
function z(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: l, onClose: a, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, x.Q)(),
        [u, g] = s.useState(!1),
        [f, E] = s.useState(!1),
        j = (0, h.ZP)(),
        { analyticsLocations: O } = (0, b.ZP)(),
        v = null;
    switch (n.status) {
        case M.O0b.PAST_DUE:
        case M.O0b.PAUSED:
        case M.O0b.BILLING_RETRY:
            v = U.intl.string(U.t.FClXh4);
            break;
        default:
            switch (i) {
                case B.p9.TIER_0:
                    v = d
                        ? U.intl.format(U.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: C.Z.getArticleURL(M.BhN.BLOCKED_PAYMENTS)
                          })
                        : U.intl.format(U.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case B.p9.TIER_1:
                    v = d
                        ? U.intl.format(U.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: C.Z.getArticleURL(M.BhN.BLOCKED_PAYMENTS)
                          })
                        : U.intl.format(U.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    v = d
                        ? U.intl.format(U.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: C.Z.getArticleURL(M.BhN.BLOCKED_PAYMENTS)
                          })
                        : U.intl.format(U.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let T =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !B.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null == (t = n.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !B.dJ.has(t);
                  })) != null
                ? (0, r.jsx)(p.zxk, {
                      onClick: () => l(3),
                      children: U.intl.string(U.t.PDTjLC)
                  })
                : (0, r.jsx)(p.zxk, {
                      color: p.zxk.Colors.RED,
                      disabled: u,
                      onClick: async () => {
                          await H({
                              setHasError: E,
                              onClose: a,
                              premiumSubscription: n,
                              setIsCancelling: g,
                              analyticsLocations: O,
                              analyticsLocation: c
                          });
                      },
                      children: o ? U.intl.string(U.t['cY+Ooa']) : U.intl.formatToPlainString(U.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                  }),
        N = (0, r.jsx)(p.zxk, {
            look: p.zxk.Looks.LINK,
            color: (0, m.ap)(j) ? p.zxk.Colors.PRIMARY : p.zxk.Colors.WHITE,
            onClick: a,
            children: o ? U.intl.string(U.t.h9tkAA) : U.intl.string(U.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o
                ? (0, r.jsx)(k.Z, {
                      premiumType: i,
                      className: V.cancellationHeader,
                      onClose: a
                  })
                : (0, r.jsxs)(p.xBx, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(p.vwX, {
                              tag: p.RB0.H4,
                              children: U.intl.format(U.t.ZpiGy8, { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(p.olH, { onClick: a })
                      ]
                  }),
            (0, r.jsxs)(p.hzk, {
                className: V.body,
                children: [
                    f
                        ? (0, r.jsx)(p.kzN, {
                              className: V.errorBlock,
                              children: U.intl.string(U.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: V.cancelImage }),
                    (0, r.jsx)('div', { children: v })
                ]
            }),
            (0, r.jsxs)(p.mzw, {
                justify: _.Z.Justify.START,
                children: [T, N]
            })
        ]
    });
}
function Y(e) {
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
    if (null == l || null == a) return (0, r.jsx)(p.$jN, { className: V.loading });
    let { intervalType: o, intervalCount: c } = S.ZP.getIntervalForInvoice(l);
    return (0, r.jsxs)('div', {
        className: V.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: V.renewalInvoiceDate,
                children:
                    0 !== l.total
                        ? U.intl.format(U.t.ycyeBw, {
                              renewalDate: l.subscriptionPeriodStart,
                              rate: (0, v.og)((0, v.T4)(l.total, l.currency), o, c)
                          })
                        : U.intl.format(U.t['+y0Tj4'], { renewalDate: l.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(y.aO, {
                children: [
                    (0, r.jsx)(y.Z9, { children: U.intl.string(U.t.iqhIp6) }),
                    (0, r.jsx)(y.B1, {
                        label: U.intl.formatToPlainString(U.t.r3jVZm, { planName: S.ZP.getDisplayName(a.id) }),
                        value: (0, S.PK)(a),
                        className: V.invoiceCancelRow
                    }),
                    (0, r.jsx)(y.UN, {}),
                    (0, r.jsx)(w.nd, {
                        premiumSubscription: i,
                        renewalInvoice: l,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function W(e) {
    let { premiumSubscription: t, premiumType: n, onBack: i, onClose: l, analyticsLocation: o } = e,
        [c, d] = s.useState(!1),
        [u, m] = s.useState(!1),
        { analyticsLocations: g } = (0, b.ZP)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.Z, {
                premiumType: n,
                onClose: l
            }),
            (0, r.jsxs)(p.hzk, {
                className: a()(V.previewStep, V.body),
                children: [
                    u
                        ? (0, r.jsx)(p.kzN, {
                              className: V.errorBlock,
                              children: U.intl.string(U.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(Y, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(p.mzw, {
                align: _.Z.Align.CENTER,
                justify: _.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(p.zxk, {
                        color: p.zxk.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await H({
                                setHasError: m,
                                onClose: l,
                                premiumSubscription: t,
                                setIsCancelling: d,
                                analyticsLocations: g,
                                analyticsLocation: o
                            });
                        },
                        children: U.intl.format(U.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(t.planId) })
                    }),
                    (0, r.jsx)(Z.Z, { onClick: i })
                ]
            })
        ]
    });
}
function K(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null == (t = (0, S.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
let q = {
    1: "What You're Losing",
    2: 'Confirm Cancellation',
    3: 'Preview Updated Subscription',
    4: 'Redeem Churn Discount Started',
    5: 'Redeem Churn Discount Completed',
    6: 'Select Pause Duration',
    7: 'Confirm Pause Duration'
};
function X(e) {
    var t;
    let n,
        { premiumSubscription: i, transitionState: l, onClose: a, analyticsLocations: c, analyticsLocation: u, initialStep: g } = e,
        x = s.useRef(new o.qA()),
        [_, E] = s.useState(null),
        C = null == (t = (0, S.Af)(i)) ? void 0 : t.planId,
        v = null != C ? S.ZP.getPremiumType(C) : null;
    d()(null != v, 'Should not be cancelling Nitro without premiumType');
    let T = (0, h.ZP)();
    s.useEffect(() => {
        j.default.track(M.rMx.CANCELLATION_FLOW_STARTED, K(i));
    }, [i]);
    let y = v === B.p9.TIER_0 || v === B.p9.TIER_1 || v === B.p9.TIER_2;
    null == g && (g = y ? 1 : 2);
    let { analyticsLocations: Z } = (0, b.ZP)(c, f.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [w, k, F, H] = (function (e, t, n) {
            let [i, r] = s.useState(e),
                [l, a] = s.useState(Date.now()),
                [o] = s.useState(Date.now()),
                c = s.useCallback(
                    (e) => {
                        (j.default.track(
                            M.rMx.CANCELLATION_FLOW_STEP,
                            G(
                                {
                                    from_step: q[i],
                                    to_step: q[e],
                                    step_duration_ms: Date.now() - l,
                                    flow_duration_ms: Date.now() - o,
                                    location_stack: n
                                },
                                K(t)
                            )
                        ),
                            r(e),
                            a(Date.now()));
                    },
                    [n, o, l, i, t]
                );
            return [i, c, l, o];
        })(g, i, c),
        [Y, X] = s.useState(null);
    (0, L.w)(i, a, !1);
    let Q = (e) => {
            (a(),
                j.default.track(
                    M.rMx.CANCELLATION_FLOW_STEP,
                    G(
                        {
                            from_step: q[e],
                            to_step: null,
                            step_duration_ms: Date.now() - F,
                            flow_duration_ms: Date.now() - H,
                            location_stack: c
                        },
                        K(i)
                    )
                ));
        },
        J = (0, N.UV)(),
        { churnUserDiscountOffer: $, isFetchingChurnDiscountOffer: ee } = (0, N.WR)(!J || 1 !== w),
        et = (0, I.Z)(),
        en = 'US' === et.ipCountryCode && 'CA' === et.ipSubdivisionCode;
    switch (w) {
        case 6:
            n = (0, r.jsx)(R.of, {
                premiumSubscription: i,
                premiumType: v,
                setStep: k,
                onClose: () => Q(w),
                pauseDuration: Y,
                setPauseDuration: X,
                footer: (0, r.jsxs)('div', {
                    className: V.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(p.zxk, {
                            disabled: null === Y,
                            onClick: () => {
                                0 === Y ? k(1) : k(7);
                            },
                            children: U.intl.string(U.t['3PatS0'])
                        }),
                        (0, r.jsx)(p.zxk, {
                            look: p.zxk.Looks.LINK,
                            color: (0, m.wj)(T) ? p.zxk.Colors.WHITE : p.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: U.intl.string(U.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: u
            });
            break;
        case 7:
            if (null == Y) {
                let e = Error('No pause duration to set');
                throw (
                    (0, O.q2)(e, {
                        extra: {
                            subscriptionId: i.id,
                            status: i.status
                        }
                    }),
                    e
                );
            }
            n = (0, r.jsx)(R.Sz, {
                premiumSubscription: i,
                premiumType: v,
                setStep: k,
                onClose: () => Q(w),
                analyticsLocation: u,
                pauseDuration: Y
            });
            break;
        case 1:
            n = (0, r.jsx)(D.Z, {
                premiumType: v,
                titleText: U.intl.string(U.t.PWq8TE),
                subtitleText: U.intl.format(U.t.nsGVzs, {}),
                subtitleClassName: void 0,
                footer: (0, r.jsxs)('div', {
                    className: V.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(p.zxk, {
                            onClick: () => k(2),
                            children: en ? U.intl.string(U.t.PfnxqK) : U.intl.string(U.t['3PatS0'])
                        }),
                        (0, r.jsx)(p.zxk, {
                            look: p.zxk.Looks.LINK,
                            color: (0, m.wj)(T) ? p.zxk.Colors.WHITE : p.zxk.Colors.PRIMARY,
                            onClick: () => Q(w),
                            children: U.intl.string(U.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => Q(w),
                onDiscountClaim: () => k(4),
                onContinue: () => k(2),
                isLoading: J && ee,
                churnUserDiscountOffer: $,
                analyticsLocations: Z
            });
            break;
        case 2:
            n = (0, r.jsx)(z, {
                premiumSubscription: i,
                premiumType: v,
                setStep: k,
                onClose: () => Q(w),
                whatYouLoseExperienceEnabled: y,
                analyticsLocation: u
            });
            break;
        case 3:
            n = (0, r.jsx)(W, {
                premiumSubscription: i,
                premiumType: v,
                onBack: () => k(2),
                onClose: () => Q(w),
                analyticsLocation: u
            });
            break;
        case 4:
            n = (0, r.jsx)(A.Z, {
                premiumSubscription: i,
                premiumType: v,
                onClose: () => Q(w),
                onConfirm: () => k(5),
                userDiscountOffer: $
            });
            break;
        case 5:
            n = (0, r.jsx)(P.D, {
                premiumSubscription: i,
                premiumType: v,
                onClose: () => Q(w),
                confettiCanvas: _,
                userDiscountOffer: $
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(w));
    }
    return (0, r.jsxs)(b.Gt, {
        value: Z,
        children: [
            (0, r.jsx)(o.O_, {
                ref: E,
                className: V.confettiCanvas,
                environment: x.current
            }),
            (0, r.jsx)(p.Y0X, {
                transitionState: l,
                parentComponent: 'PremiumSubscriptionCancellationModal',
                children: n
            })
        ]
    });
}
