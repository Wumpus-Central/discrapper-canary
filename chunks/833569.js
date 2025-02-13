n.d(t, {
    R: () => z,
    default: () => J
}),
    n(47120),
    n(411104);
var i,
    s = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(119617),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    h = n(780384),
    m = n(481060),
    g = n(355467),
    x = n(410030),
    _ = n(100527),
    p = n(906732),
    E = n(211242),
    C = n(600164),
    N = n(509545),
    f = n(626135),
    I = n(122289),
    T = n(63063),
    S = n(74538),
    j = n(937615),
    v = n(374649),
    b = n(140465),
    A = n(314684),
    O = n(653798),
    R = n(625881),
    D = n(440984),
    P = n(398775),
    y = n(807163),
    Z = n(311821),
    L = n(42818),
    k = n(798769),
    B = n(459965),
    M = n(119269),
    V = n(474936),
    w = n(735825),
    U = n(981631),
    G = n(388032),
    F = n(170406),
    z = (((i = {})[(i.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (i[(i.CONFIRM = 2)] = 'CONFIRM'), (i[(i.PREVIEW = 3)] = 'PREVIEW'), (i[(i.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (i[(i.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (i[(i.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (i[(i.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM'), i);
async function Y(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: s, analyticsLocations: l, analyticsLocation: r } = e;
    try {
        if ((s(!0), i(!1), [U.O0b.PAST_DUE, U.O0b.PAUSED, U.O0b.BILLING_RETRY].includes(t.status))) await (0, g.EO)(t.id, l, r);
        else {
            var a, o;
            let e = null !== (o = null === (a = t.renewalMutations) || void 0 === a ? void 0 : a.items) && void 0 !== o ? o : t.items;
            await (0, g.Mg)(t, { items: (0, S.Ue)(e) }, l, r);
        }
        n();
    } catch {
        i(!0), s(!1);
    }
}
function H(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: r, onClose: a, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, E.Q)(),
        [u, g] = l.useState(!1),
        [_, N] = l.useState(!1),
        f = (0, x.ZP)(),
        { analyticsLocations: I } = (0, p.ZP)(),
        j = null;
    switch (n.status) {
        case U.O0b.PAST_DUE:
        case U.O0b.PAUSED:
        case U.O0b.BILLING_RETRY:
            j = G.intl.string(G.t.FClXh4);
            break;
        default:
            switch (i) {
                case V.p9.TIER_0:
                    j = d
                        ? G.intl.format(G.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: T.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case V.p9.TIER_1:
                    j = d
                        ? G.intl.format(G.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: T.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    j = d
                        ? G.intl.format(G.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: T.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let v =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !V.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null === (t = n.renewalMutations) || void 0 === t
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !V.dJ.has(t);
                  })) != null
                ? (0, s.jsx)(m.zxk, {
                      onClick: () => r(3),
                      children: G.intl.string(G.t.PDTjLC)
                  })
                : (0, s.jsx)(m.zxk, {
                      color: m.zxk.Colors.RED,
                      disabled: u,
                      onClick: async () => {
                          await Y({
                              setHasError: N,
                              onClose: a,
                              premiumSubscription: n,
                              setIsCancelling: g,
                              analyticsLocations: I,
                              analyticsLocation: c
                          });
                      },
                      children: o ? G.intl.string(G.t['cY+Ooa']) : G.intl.formatToPlainString(G.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                  }),
        b = (0, s.jsx)(m.zxk, {
            look: m.zxk.Looks.LINK,
            color: (0, h.ap)(f) ? m.zxk.Colors.PRIMARY : m.zxk.Colors.WHITE,
            onClick: a,
            children: o ? G.intl.string(G.t.h9tkAA) : G.intl.string(G.t['ETE/oK'])
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            o
                ? (0, s.jsx)(k.Z, {
                      premiumType: i,
                      className: F.cancellationHeader,
                      onClose: a
                  })
                : (0, s.jsxs)(m.xBx, {
                      separator: !1,
                      children: [
                          (0, s.jsx)(m.vwX, {
                              tag: m.RB0.H4,
                              children: G.intl.format(G.t.ZpiGy8, { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, s.jsx)(m.olH, { onClick: a })
                      ]
                  }),
            (0, s.jsxs)(m.hzk, {
                className: F.body,
                children: [
                    _
                        ? (0, s.jsx)(m.kzN, {
                              className: F.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, s.jsx)('div', { className: F.cancelImage }),
                    (0, s.jsx)('div', { children: j })
                ]
            }),
            (0, s.jsxs)(m.mzw, {
                justify: C.Z.Justify.START,
                children: [v, b]
            })
        ]
    });
}
function W(e) {
    var t, n;
    let { premiumSubscription: i } = e,
        { analyticsLocations: l } = (0, p.ZP)(),
        [r] = (0, v.ED)({
            subscriptionId: i.id,
            items: (0, S.Ue)(null !== (n = null === (t = i.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== n ? n : i.items),
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: _.Z.CANCEL_INVOICE_PREVIEW
        }),
        a = (0, u.e7)([N.Z], () => N.Z.get(i.planId));
    if (null == r || null == a) return (0, s.jsx)(m.$jN, { className: F.loading });
    let { intervalType: o, intervalCount: c } = S.ZP.getIntervalForInvoice(r);
    return (0, s.jsxs)('div', {
        className: F.__invalid_bodyText,
        children: [
            (0, s.jsx)('div', {
                className: F.renewalInvoiceDate,
                children:
                    0 !== r.total
                        ? G.intl.format(G.t.ycyeBw, {
                              renewalDate: r.subscriptionPeriodStart,
                              rate: (0, j.og)((0, j.T4)(r.total, r.currency), o, c)
                          })
                        : G.intl.format(G.t['+y0Tj4'], { renewalDate: r.subscriptionPeriodStart })
            }),
            (0, s.jsxs)(O.PO, {
                children: [
                    (0, s.jsx)(O.q9, { children: G.intl.string(G.t.iqhIp6) }),
                    (0, s.jsx)(O.R$, {
                        label: G.intl.formatToPlainString(G.t.r3jVZm, { planName: S.ZP.getDisplayName(a.id) }),
                        value: (0, S.PK)(a),
                        className: F.invoiceCancelRow
                    }),
                    (0, s.jsx)(O.KU, {}),
                    (0, s.jsx)(L.nd, {
                        premiumSubscription: i,
                        renewalInvoice: r,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function K(e) {
    let { premiumSubscription: t, premiumType: n, onBack: i, onClose: r, analyticsLocation: o } = e,
        [c, d] = l.useState(!1),
        [u, h] = l.useState(!1),
        { analyticsLocations: g } = (0, p.ZP)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(k.Z, {
                premiumType: n,
                onClose: r
            }),
            (0, s.jsxs)(m.hzk, {
                className: a()(F.previewStep, F.body),
                children: [
                    u
                        ? (0, s.jsx)(m.kzN, {
                              className: F.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, s.jsx)(W, { premiumSubscription: t })
                ]
            }),
            (0, s.jsxs)(m.mzw, {
                align: C.Z.Align.CENTER,
                justify: C.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(m.zxk, {
                        color: m.zxk.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await Y({
                                setHasError: h,
                                onClose: r,
                                premiumSubscription: t,
                                setIsCancelling: d,
                                analyticsLocations: g,
                                analyticsLocation: o
                            });
                        },
                        children: G.intl.format(G.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(t.planId) })
                    }),
                    (0, s.jsx)(Z.Z, { onClick: i })
                ]
            })
        ]
    });
}
function X(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null === (t = (0, S.Af)(e)) || void 0 === t ? void 0 : t.id,
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
function J(e) {
    var t;
    let n,
        { premiumSubscription: i, transitionState: r, onClose: a, analyticsLocations: c, analyticsLocation: u, initialStep: g } = e,
        E = l.useRef(new o.qA()),
        [C, N] = l.useState(null),
        T = (0, A.yQ)(),
        j = (null == T ? void 0 : T.showCard) === !0,
        v = (null == T ? void 0 : T.tenureRewardType) === w.nW.AVATAR_DECO,
        O = null === (t = (0, S.Af)(i)) || void 0 === t ? void 0 : t.planId,
        Z = null != O ? S.ZP.getPremiumType(O) : null;
    d()(null != Z, 'Should not be cancelling Nitro without premiumType');
    let L = (0, x.ZP)();
    l.useEffect(() => {
        f.default.track(U.rMx.CANCELLATION_FLOW_STARTED, X(i));
    }, [i]);
    let k = Z === V.p9.TIER_0 || Z === V.p9.TIER_1 || Z === V.p9.TIER_2;
    null == g && (g = k ? 1 : 2);
    let { analyticsLocations: z } = (0, p.ZP)(c, _.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [Y, W, J, Q] = (function (e, t, n) {
            let [i, s] = l.useState(e),
                [r, a] = l.useState(Date.now()),
                [o] = l.useState(Date.now()),
                c = l.useCallback(
                    (e) => {
                        f.default.track(U.rMx.CANCELLATION_FLOW_STEP, {
                            from_step: q[i],
                            to_step: q[e],
                            step_duration_ms: Date.now() - r,
                            flow_duration_ms: Date.now() - o,
                            location_stack: n,
                            ...X(t)
                        }),
                            s(e),
                            a(Date.now());
                    },
                    [n, o, r, i, t]
                );
            return [i, c, r, o];
        })(g, i, c),
        [$, ee] = l.useState(null);
    (0, B.w)(i, a, !1);
    let et = (e) => {
            a(),
                f.default.track(U.rMx.CANCELLATION_FLOW_STEP, {
                    from_step: q[e],
                    to_step: null,
                    step_duration_ms: Date.now() - J,
                    flow_duration_ms: Date.now() - Q,
                    location_stack: c,
                    ...X(i)
                });
        },
        en = (0, b.UV)(),
        { churnUserDiscountOffer: ei, isFetchingChurnDiscountOffer: es } = (0, b.WR)(!en || 1 !== Y);
    switch (Y) {
        case 6:
            n = (0, s.jsx)(P.of, {
                premiumSubscription: i,
                premiumType: Z,
                setStep: W,
                onClose: () => et(Y),
                pauseDuration: $,
                setPauseDuration: ee,
                footer: (0, s.jsxs)('div', {
                    className: F.whatYouLoseButtonContainer,
                    children: [
                        (0, s.jsx)(m.zxk, {
                            disabled: null === $,
                            onClick: () => {
                                0 === $ ? W(1) : W(7);
                            },
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, s.jsx)(m.zxk, {
                            look: m.zxk.Looks.LINK,
                            color: (0, h.wj)(L) ? m.zxk.Colors.WHITE : m.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: u
            });
            break;
        case 7:
            if (null == $) {
                let e = Error('No pause duration to set');
                throw (
                    ((0, I.q2)(e, {
                        extra: {
                            subscriptionId: i.id,
                            status: i.status
                        }
                    }),
                    e)
                );
            }
            n = (0, s.jsx)(P.Sz, {
                premiumSubscription: i,
                premiumType: Z,
                setStep: W,
                onClose: () => et(Y),
                analyticsLocation: u,
                pauseDuration: $
            });
            break;
        case 1:
            n = (0, s.jsx)(y.Z, {
                premiumType: Z,
                titleText: G.intl.string(G.t.PWq8TE),
                subtitleText: j ? G.intl.string(G.t.QagLCA) : G.intl.format(G.t.nsGVzs, {}),
                subtitleClassName: j ? F.subtitleSection : void 0,
                subtitleIcon:
                    j &&
                    (0, s.jsx)('div', {
                        className: F.subtitleIcon,
                        children: (0, s.jsx)(M.ZP, {
                            staticPercentage: 100,
                            iconClassName: F.iconClassName,
                            showAnimations: !1,
                            innerCircleClassName: F.innerCircle,
                            progressCircleVariation: v ? M.Qo.AVATAR_DECO : M.Qo.NITRO_GEM,
                            avatarDecoAssetDescription: G.intl.string(G.t['9o4F4+']),
                            avatarDecoAssetId: v ? w.VA : void 0,
                            progressCircleStrokeSize: 5,
                            backgroundCircleSize: '38%'
                        })
                    }),
                footer: (0, s.jsxs)('div', {
                    className: F.whatYouLoseButtonContainer,
                    children: [
                        (0, s.jsx)(m.zxk, {
                            onClick: () => W(2),
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, s.jsx)(m.zxk, {
                            look: m.zxk.Looks.LINK,
                            color: (0, h.wj)(L) ? m.zxk.Colors.WHITE : m.zxk.Colors.PRIMARY,
                            onClick: () => et(Y),
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => et(Y),
                onDiscountClaim: () => W(4),
                onContinue: () => W(2),
                isLoading: en && es,
                churnUserDiscountOffer: ei,
                analyticsLocations: z
            });
            break;
        case 2:
            n = (0, s.jsx)(H, {
                premiumSubscription: i,
                premiumType: Z,
                setStep: W,
                onClose: () => et(Y),
                whatYouLoseExperienceEnabled: k,
                analyticsLocation: u
            });
            break;
        case 3:
            n = (0, s.jsx)(K, {
                premiumSubscription: i,
                premiumType: Z,
                onBack: () => W(2),
                onClose: () => et(Y),
                analyticsLocation: u
            });
            break;
        case 4:
            n = (0, s.jsx)(R.Z, {
                premiumSubscription: i,
                premiumType: Z,
                onClose: () => et(Y),
                onConfirm: () => W(5),
                userDiscountOffer: ei
            });
            break;
        case 5:
            n = (0, s.jsx)(D.D, {
                premiumSubscription: i,
                premiumType: Z,
                onClose: () => et(Y),
                confettiCanvas: C,
                userDiscountOffer: ei
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(Y));
    }
    return (0, s.jsxs)(p.Gt, {
        value: z,
        children: [
            (0, s.jsx)(o.O_, {
                ref: N,
                className: F.confettiCanvas,
                environment: E.current
            }),
            (0, s.jsx)(m.Y0X, {
                transitionState: r,
                children: n
            })
        ]
    });
}
