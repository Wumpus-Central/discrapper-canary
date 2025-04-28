n.d(t, {
    R: () => z,
    default: () => J
}),
    n(388685),
    n(415506);
var i,
    r = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(995899),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    m = n(780384),
    p = n(481060),
    g = n(355467),
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
    I = n(314684),
    y = n(811334),
    A = n(625881),
    P = n(440984),
    R = n(398775),
    D = n(807163),
    Z = n(311821),
    w = n(42818),
    k = n(798769),
    L = n(459965),
    M = n(119269),
    B = n(474936),
    U = n(735825),
    V = n(981631),
    G = n(388032),
    F = n(868006);
function H(e) {
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
var z = (((i = {})[(i.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (i[(i.CONFIRM = 2)] = 'CONFIRM'), (i[(i.PREVIEW = 3)] = 'PREVIEW'), (i[(i.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (i[(i.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (i[(i.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (i[(i.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM'), i);
async function W(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: r, analyticsLocations: s, analyticsLocation: l } = e;
    try {
        if ((r(!0), i(!1), [V.O0b.PAST_DUE, V.O0b.PAUSED, V.O0b.BILLING_RETRY].includes(t.status))) await (0, g.EO)(t.id, s, l);
        else {
            var a, o;
            let e = null != (o = null == (a = t.renewalMutations) ? void 0 : a.items) ? o : t.items;
            await (0, g.Mg)(t, { items: (0, S.Ue)(e) }, s, l);
        }
        n();
    } catch (e) {
        i(!0), r(!1);
    }
}
function Y(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: l, onClose: a, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, _.Q)(),
        [u, g] = s.useState(!1),
        [f, E] = s.useState(!1),
        j = (0, h.ZP)(),
        { analyticsLocations: C } = (0, b.ZP)(),
        v = null;
    switch (n.status) {
        case V.O0b.PAST_DUE:
        case V.O0b.PAUSED:
        case V.O0b.BILLING_RETRY:
            v = G.intl.string(G.t.FClXh4);
            break;
        default:
            switch (i) {
                case B.p9.TIER_0:
                    v = d
                        ? G.intl.format(G.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case B.p9.TIER_1:
                    v = d
                        ? G.intl.format(G.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    v = d
                        ? G.intl.format(G.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.fCdmNj, { date: n.currentPeriodEnd });
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
                      children: G.intl.string(G.t.PDTjLC)
                  })
                : (0, r.jsx)(p.zxk, {
                      color: p.zxk.Colors.RED,
                      disabled: u,
                      onClick: async () => {
                          await W({
                              setHasError: E,
                              onClose: a,
                              premiumSubscription: n,
                              setIsCancelling: g,
                              analyticsLocations: C,
                              analyticsLocation: c
                          });
                      },
                      children: o ? G.intl.string(G.t['cY+Ooa']) : G.intl.formatToPlainString(G.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                  }),
        N = (0, r.jsx)(p.zxk, {
            look: p.zxk.Looks.LINK,
            color: (0, m.ap)(j) ? p.zxk.Colors.PRIMARY : p.zxk.Colors.WHITE,
            onClick: a,
            children: o ? G.intl.string(G.t.h9tkAA) : G.intl.string(G.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o
                ? (0, r.jsx)(k.Z, {
                      premiumType: i,
                      className: F.cancellationHeader,
                      onClose: a
                  })
                : (0, r.jsxs)(p.xBx, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(p.vwX, {
                              tag: p.RB0.H4,
                              children: G.intl.format(G.t.ZpiGy8, { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(p.olH, { onClick: a })
                      ]
                  }),
            (0, r.jsxs)(p.hzk, {
                className: F.body,
                children: [
                    f
                        ? (0, r.jsx)(p.kzN, {
                              className: F.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: F.cancelImage }),
                    (0, r.jsx)('div', { children: v })
                ]
            }),
            (0, r.jsxs)(p.mzw, {
                justify: x.Z.Justify.START,
                children: [T, N]
            })
        ]
    });
}
function K(e) {
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
    if (null == l || null == a) return (0, r.jsx)(p.$jN, { className: F.loading });
    let { intervalType: o, intervalCount: c } = S.ZP.getIntervalForInvoice(l);
    return (0, r.jsxs)('div', {
        className: F.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: F.renewalInvoiceDate,
                children:
                    0 !== l.total
                        ? G.intl.format(G.t.ycyeBw, {
                              renewalDate: l.subscriptionPeriodStart,
                              rate: (0, v.og)((0, v.T4)(l.total, l.currency), o, c)
                          })
                        : G.intl.format(G.t['+y0Tj4'], { renewalDate: l.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(y.aO, {
                children: [
                    (0, r.jsx)(y.Z9, { children: G.intl.string(G.t.iqhIp6) }),
                    (0, r.jsx)(y.B1, {
                        label: G.intl.formatToPlainString(G.t.r3jVZm, { planName: S.ZP.getDisplayName(a.id) }),
                        value: (0, S.PK)(a),
                        className: F.invoiceCancelRow
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
function q(e) {
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
                className: a()(F.previewStep, F.body),
                children: [
                    u
                        ? (0, r.jsx)(p.kzN, {
                              className: F.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(K, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(p.mzw, {
                align: x.Z.Align.CENTER,
                justify: x.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(p.zxk, {
                        color: p.zxk.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await W({
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
                    (0, r.jsx)(Z.Z, { onClick: i })
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
        subscription_plan_id: null == (t = (0, S.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
let Q = {
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
        _ = s.useRef(new o.qA()),
        [x, E] = s.useState(null),
        O = (0, I.Er)(),
        v = (null == O ? void 0 : O.showCard) === !0,
        T = (null == O ? void 0 : O.tenureRewardType) === U.nW.AVATAR_DECO,
        y = null == (t = (0, S.Af)(i)) ? void 0 : t.planId,
        Z = null != y ? S.ZP.getPremiumType(y) : null;
    d()(null != Z, 'Should not be cancelling Nitro without premiumType');
    let w = (0, h.ZP)();
    s.useEffect(() => {
        j.default.track(V.rMx.CANCELLATION_FLOW_STARTED, X(i));
    }, [i]);
    let k = Z === B.p9.TIER_0 || Z === B.p9.TIER_1 || Z === B.p9.TIER_2;
    null == g && (g = k ? 1 : 2);
    let { analyticsLocations: z } = (0, b.ZP)(c, f.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [W, K, J, $] = (function (e, t, n) {
            let [i, r] = s.useState(e),
                [l, a] = s.useState(Date.now()),
                [o] = s.useState(Date.now()),
                c = s.useCallback(
                    (e) => {
                        j.default.track(
                            V.rMx.CANCELLATION_FLOW_STEP,
                            H(
                                {
                                    from_step: Q[i],
                                    to_step: Q[e],
                                    step_duration_ms: Date.now() - l,
                                    flow_duration_ms: Date.now() - o,
                                    location_stack: n
                                },
                                X(t)
                            )
                        ),
                            r(e),
                            a(Date.now());
                    },
                    [n, o, l, i, t]
                );
            return [i, c, l, o];
        })(g, i, c),
        [ee, et] = s.useState(null);
    (0, L.w)(i, a, !1);
    let en = (e) => {
            a(),
                j.default.track(
                    V.rMx.CANCELLATION_FLOW_STEP,
                    H(
                        {
                            from_step: Q[e],
                            to_step: null,
                            step_duration_ms: Date.now() - J,
                            flow_duration_ms: Date.now() - $,
                            location_stack: c
                        },
                        X(i)
                    )
                );
        },
        ei = (0, N.UV)(),
        { churnUserDiscountOffer: er, isFetchingChurnDiscountOffer: es } = (0, N.WR)(!ei || 1 !== W);
    switch (W) {
        case 6:
            n = (0, r.jsx)(R.of, {
                premiumSubscription: i,
                premiumType: Z,
                setStep: K,
                onClose: () => en(W),
                pauseDuration: ee,
                setPauseDuration: et,
                footer: (0, r.jsxs)('div', {
                    className: F.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(p.zxk, {
                            disabled: null === ee,
                            onClick: () => {
                                0 === ee ? K(1) : K(7);
                            },
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, r.jsx)(p.zxk, {
                            look: p.zxk.Looks.LINK,
                            color: (0, m.wj)(w) ? p.zxk.Colors.WHITE : p.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: u
            });
            break;
        case 7:
            if (null == ee) {
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
            n = (0, r.jsx)(R.Sz, {
                premiumSubscription: i,
                premiumType: Z,
                setStep: K,
                onClose: () => en(W),
                analyticsLocation: u,
                pauseDuration: ee
            });
            break;
        case 1:
            n = (0, r.jsx)(D.Z, {
                premiumType: Z,
                titleText: G.intl.string(G.t.PWq8TE),
                subtitleText: v ? G.intl.string(G.t.QagLCA) : G.intl.format(G.t.nsGVzs, {}),
                subtitleClassName: v ? F.subtitleSection : void 0,
                subtitleIcon:
                    v &&
                    (0, r.jsx)('div', {
                        className: F.subtitleIcon,
                        children: (0, r.jsx)(M.ZP, {
                            staticPercentage: 100,
                            iconClassName: F.iconClassName,
                            showAnimations: !1,
                            innerCircleClassName: F.innerCircle,
                            progressCircleVariation: T ? M.Qo.AVATAR_DECO : M.Qo.NITRO_GEM,
                            avatarDecoAssetDescription: G.intl.string(G.t['9o4F4+']),
                            avatarDecoAssetId: T ? U.VA : void 0,
                            progressCircleStrokeSize: 5,
                            backgroundCircleSize: '38%'
                        })
                    }),
                footer: (0, r.jsxs)('div', {
                    className: F.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(p.zxk, {
                            onClick: () => K(2),
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, r.jsx)(p.zxk, {
                            look: p.zxk.Looks.LINK,
                            color: (0, m.wj)(w) ? p.zxk.Colors.WHITE : p.zxk.Colors.PRIMARY,
                            onClick: () => en(W),
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => en(W),
                onDiscountClaim: () => K(4),
                onContinue: () => K(2),
                isLoading: ei && es,
                churnUserDiscountOffer: er,
                analyticsLocations: z
            });
            break;
        case 2:
            n = (0, r.jsx)(Y, {
                premiumSubscription: i,
                premiumType: Z,
                setStep: K,
                onClose: () => en(W),
                whatYouLoseExperienceEnabled: k,
                analyticsLocation: u
            });
            break;
        case 3:
            n = (0, r.jsx)(q, {
                premiumSubscription: i,
                premiumType: Z,
                onBack: () => K(2),
                onClose: () => en(W),
                analyticsLocation: u
            });
            break;
        case 4:
            n = (0, r.jsx)(A.Z, {
                premiumSubscription: i,
                premiumType: Z,
                onClose: () => en(W),
                onConfirm: () => K(5),
                userDiscountOffer: er
            });
            break;
        case 5:
            n = (0, r.jsx)(P.D, {
                premiumSubscription: i,
                premiumType: Z,
                onClose: () => en(W),
                confettiCanvas: x,
                userDiscountOffer: er
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(W));
    }
    return (0, r.jsxs)(b.Gt, {
        value: z,
        children: [
            (0, r.jsx)(o.O_, {
                ref: E,
                className: F.confettiCanvas,
                environment: _.current
            }),
            (0, r.jsx)(p.Y0X, {
                transitionState: l,
                children: n
            })
        ]
    });
}
