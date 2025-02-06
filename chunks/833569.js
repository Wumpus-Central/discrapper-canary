n.d(t, {
    R: () => H,
    default: () => J
}),
    n(47120),
    n(411104);
var i,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(119617),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    m = n(780384),
    h = n(481060),
    g = n(355467),
    _ = n(410030),
    x = n(100527),
    p = n(906732),
    E = n(211242),
    C = n(600164),
    f = n(509545),
    T = n(626135),
    N = n(122289),
    I = n(63063),
    S = n(74538),
    b = n(937615),
    v = n(374649),
    j = n(140465),
    A = n(314684),
    O = n(653798),
    R = n(625881),
    P = n(440984),
    D = n(398775),
    Z = n(807163),
    y = n(311821),
    k = n(42818),
    L = n(798769),
    B = n(459965),
    M = n(119269),
    w = n(474936),
    V = n(735825),
    U = n(981631),
    G = n(388032),
    F = n(665680),
    H = (((i = {})[(i.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (i[(i.CONFIRM = 2)] = 'CONFIRM'), (i[(i.PREVIEW = 3)] = 'PREVIEW'), (i[(i.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (i[(i.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (i[(i.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (i[(i.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM'), i);
async function z(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: s, analyticsLocations: r, analyticsLocation: l } = e;
    try {
        if ((s(!0), i(!1), [U.O0b.PAST_DUE, U.O0b.PAUSED, U.O0b.BILLING_RETRY].includes(t.status))) await (0, g.EO)(t.id, r, l);
        else {
            var a, o;
            let e = null !== (o = null === (a = t.renewalMutations) || void 0 === a ? void 0 : a.items) && void 0 !== o ? o : t.items;
            await (0, g.Mg)(t, { items: (0, S.Ue)(e) }, r, l);
        }
        n();
    } catch {
        i(!0), s(!1);
    }
}
function Y(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: l, onClose: a, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, E.Q)(),
        [u, g] = r.useState(!1),
        [x, f] = r.useState(!1),
        T = (0, _.ZP)(),
        { analyticsLocations: N } = (0, p.ZP)(),
        b = null;
    switch (n.status) {
        case U.O0b.PAST_DUE:
        case U.O0b.PAUSED:
        case U.O0b.BILLING_RETRY:
            b = G.intl.string(G.t.FClXh4);
            break;
        default:
            switch (i) {
                case w.p9.TIER_0:
                    b = d
                        ? G.intl.format(G.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case w.p9.TIER_1:
                    b = d
                        ? G.intl.format(G.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    b = d
                        ? G.intl.format(G.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let v =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !w.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null === (t = n.renewalMutations) || void 0 === t
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !w.dJ.has(t);
                  })) != null
                ? (0, s.jsx)(h.zxk, {
                      onClick: () => l(3),
                      children: G.intl.string(G.t.PDTjLC)
                  })
                : (0, s.jsx)(h.zxk, {
                      color: h.zxk.Colors.RED,
                      disabled: u,
                      onClick: async () => {
                          await z({
                              setHasError: f,
                              onClose: a,
                              premiumSubscription: n,
                              setIsCancelling: g,
                              analyticsLocations: N,
                              analyticsLocation: c
                          });
                      },
                      children: o ? G.intl.string(G.t['cY+Ooa']) : G.intl.formatToPlainString(G.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                  }),
        j = (0, s.jsx)(h.zxk, {
            look: h.zxk.Looks.LINK,
            color: (0, m.ap)(T) ? h.zxk.Colors.PRIMARY : h.zxk.Colors.WHITE,
            onClick: a,
            children: o ? G.intl.string(G.t.h9tkAA) : G.intl.string(G.t['ETE/oK'])
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            o
                ? (0, s.jsx)(L.Z, {
                      premiumType: i,
                      className: F.cancellationHeader,
                      onClose: a
                  })
                : (0, s.jsxs)(h.xBx, {
                      separator: !1,
                      children: [
                          (0, s.jsx)(h.vwX, {
                              tag: h.RB0.H4,
                              children: G.intl.format(G.t.ZpiGy8, { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, s.jsx)(h.olH, { onClick: a })
                      ]
                  }),
            (0, s.jsxs)(h.hzk, {
                className: F.body,
                children: [
                    x
                        ? (0, s.jsx)(h.kzN, {
                              className: F.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, s.jsx)('div', { className: F.cancelImage }),
                    (0, s.jsx)('div', { children: b })
                ]
            }),
            (0, s.jsxs)(h.mzw, {
                justify: C.Z.Justify.START,
                children: [v, j]
            })
        ]
    });
}
function W(e) {
    var t, n;
    let { premiumSubscription: i } = e,
        { analyticsLocations: r } = (0, p.ZP)(),
        [l] = (0, v.ED)({
            subscriptionId: i.id,
            items: (0, S.Ue)(null !== (n = null === (t = i.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== n ? n : i.items),
            renewal: !0,
            analyticsLocations: r,
            analyticsLocation: x.Z.CANCEL_INVOICE_PREVIEW
        }),
        a = (0, u.e7)([f.Z], () => f.Z.get(i.planId));
    if (null == l || null == a) return (0, s.jsx)(h.$jN, { className: F.loading });
    let { intervalType: o, intervalCount: c } = S.ZP.getIntervalForInvoice(l);
    return (0, s.jsxs)('div', {
        className: F.__invalid_bodyText,
        children: [
            (0, s.jsx)('div', {
                className: F.renewalInvoiceDate,
                children:
                    0 !== l.total
                        ? G.intl.format(G.t.ycyeBw, {
                              renewalDate: l.subscriptionPeriodStart,
                              rate: (0, b.og)((0, b.T4)(l.total, l.currency), o, c)
                          })
                        : G.intl.format(G.t['+y0Tj4'], { renewalDate: l.subscriptionPeriodStart })
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
                    (0, s.jsx)(k.nd, {
                        premiumSubscription: i,
                        renewalInvoice: l,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function K(e) {
    let { premiumSubscription: t, premiumType: n, onBack: i, onClose: l, analyticsLocation: o } = e,
        [c, d] = r.useState(!1),
        [u, m] = r.useState(!1),
        { analyticsLocations: g } = (0, p.ZP)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(L.Z, {
                premiumType: n,
                onClose: l
            }),
            (0, s.jsxs)(h.hzk, {
                className: a()(F.previewStep, F.body),
                children: [
                    u
                        ? (0, s.jsx)(h.kzN, {
                              className: F.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, s.jsx)(W, { premiumSubscription: t })
                ]
            }),
            (0, s.jsxs)(h.mzw, {
                align: C.Z.Align.CENTER,
                justify: C.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(h.zxk, {
                        color: h.zxk.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await z({
                                setHasError: m,
                                onClose: l,
                                premiumSubscription: t,
                                setIsCancelling: d,
                                analyticsLocations: g,
                                analyticsLocation: o
                            });
                        },
                        children: G.intl.format(G.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(t.planId) })
                    }),
                    (0, s.jsx)(y.Z, { onClick: i })
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
        { premiumSubscription: i, transitionState: l, onClose: a, analyticsLocations: c, analyticsLocation: u, initialStep: g } = e,
        E = r.useRef(new o.qA()),
        [C, f] = r.useState(null),
        I = (0, A.yQ)(),
        b = (null == I ? void 0 : I.showCard) === !0,
        v = (null == I ? void 0 : I.tenureRewardType) === V.nW.AVATAR_DECO,
        O = null === (t = (0, S.Af)(i)) || void 0 === t ? void 0 : t.planId,
        y = null != O ? S.ZP.getPremiumType(O) : null;
    d()(null != y, 'Should not be cancelling Nitro without premiumType');
    let k = (0, _.ZP)();
    r.useEffect(() => {
        T.default.track(U.rMx.CANCELLATION_FLOW_STARTED, X(i));
    }, [i]);
    let L = y === w.p9.TIER_0 || y === w.p9.TIER_1 || y === w.p9.TIER_2;
    null == g && (g = L ? 1 : 2);
    let { analyticsLocations: H } = (0, p.ZP)(c, x.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [z, W, J, Q] = (function (e, t, n) {
            let [i, s] = r.useState(e),
                [l, a] = r.useState(Date.now()),
                [o] = r.useState(Date.now()),
                c = r.useCallback(
                    (e) => {
                        T.default.track(U.rMx.CANCELLATION_FLOW_STEP, {
                            from_step: q[i],
                            to_step: q[e],
                            step_duration_ms: Date.now() - l,
                            flow_duration_ms: Date.now() - o,
                            location_stack: n,
                            ...X(t)
                        }),
                            s(e),
                            a(Date.now());
                    },
                    [n, o, l, i, t]
                );
            return [i, c, l, o];
        })(g, i, c),
        [$, ee] = r.useState(null);
    (0, B.w)(i, a, !1);
    let et = (e) => {
            a(),
                T.default.track(U.rMx.CANCELLATION_FLOW_STEP, {
                    from_step: q[e],
                    to_step: null,
                    step_duration_ms: Date.now() - J,
                    flow_duration_ms: Date.now() - Q,
                    location_stack: c,
                    ...X(i)
                });
        },
        en = (0, j.UV)(),
        { churnUserDiscountOffer: ei, isFetchingChurnDiscountOffer: es } = (0, j.WR)(!en || 1 !== z);
    switch (z) {
        case 6:
            n = (0, s.jsx)(D.of, {
                premiumSubscription: i,
                premiumType: y,
                setStep: W,
                onClose: () => et(z),
                pauseDuration: $,
                setPauseDuration: ee,
                footer: (0, s.jsxs)('div', {
                    className: F.whatYouLoseButtonContainer,
                    children: [
                        (0, s.jsx)(h.zxk, {
                            disabled: null === $,
                            onClick: () => {
                                0 === $ ? W(1) : W(7);
                            },
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, s.jsx)(h.zxk, {
                            look: h.zxk.Looks.LINK,
                            color: (0, m.wj)(k) ? h.zxk.Colors.WHITE : h.zxk.Colors.PRIMARY,
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
                    ((0, N.q2)(e, {
                        extra: {
                            subscriptionId: i.id,
                            status: i.status
                        }
                    }),
                    e)
                );
            }
            n = (0, s.jsx)(D.Sz, {
                premiumSubscription: i,
                premiumType: y,
                setStep: W,
                onClose: () => et(z),
                analyticsLocation: u,
                pauseDuration: $
            });
            break;
        case 1:
            n = (0, s.jsx)(Z.Z, {
                premiumType: y,
                titleText: G.intl.string(G.t.PWq8TE),
                subtitleText: b ? G.intl.string(G.t.QagLCA) : G.intl.format(G.t.nsGVzs, {}),
                subtitleClassName: b ? F.subtitleSection : void 0,
                subtitleIcon:
                    b &&
                    (0, s.jsx)('div', {
                        className: F.subtitleIcon,
                        children: (0, s.jsx)(M.ZP, {
                            staticPercentage: 100,
                            iconClassName: F.iconClassName,
                            showAnimations: !1,
                            innerCircleClassName: F.innerCircle,
                            progressCircleVariation: v ? M.Qo.AVATAR_DECO : M.Qo.NITRO_GEM,
                            avatarDecoAssetDescription: G.intl.string(G.t['9o4F4+']),
                            avatarDecoAssetId: v ? V.VA : void 0,
                            progressCircleStrokeSize: 5,
                            backgroundCircleSize: '38%'
                        })
                    }),
                footer: (0, s.jsxs)('div', {
                    className: F.whatYouLoseButtonContainer,
                    children: [
                        (0, s.jsx)(h.zxk, {
                            onClick: () => W(2),
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, s.jsx)(h.zxk, {
                            look: h.zxk.Looks.LINK,
                            color: (0, m.wj)(k) ? h.zxk.Colors.WHITE : h.zxk.Colors.PRIMARY,
                            onClick: () => et(z),
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => et(z),
                onDiscountClaim: () => W(4),
                onContinue: () => W(2),
                isLoading: en && es,
                churnUserDiscountOffer: ei,
                analyticsLocations: H
            });
            break;
        case 2:
            n = (0, s.jsx)(Y, {
                premiumSubscription: i,
                premiumType: y,
                setStep: W,
                onClose: () => et(z),
                whatYouLoseExperienceEnabled: L,
                analyticsLocation: u
            });
            break;
        case 3:
            n = (0, s.jsx)(K, {
                premiumSubscription: i,
                premiumType: y,
                onBack: () => W(2),
                onClose: () => et(z),
                analyticsLocation: u
            });
            break;
        case 4:
            n = (0, s.jsx)(R.Z, {
                premiumSubscription: i,
                premiumType: y,
                onClose: () => et(z),
                onConfirm: () => W(5),
                userDiscountOffer: ei
            });
            break;
        case 5:
            n = (0, s.jsx)(P.D, {
                premiumSubscription: i,
                premiumType: y,
                onClose: () => et(z),
                confettiCanvas: C,
                userDiscountOffer: ei
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(z));
    }
    return (0, s.jsxs)(p.Gt, {
        value: H,
        children: [
            (0, s.jsx)(o.O_, {
                ref: f,
                className: F.confettiCanvas,
                environment: E.current
            }),
            (0, s.jsx)(h.Y0X, {
                transitionState: l,
                children: n
            })
        ]
    });
}
