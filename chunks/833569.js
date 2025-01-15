n.r(t),
    n.d(t, {
        Steps: function () {
            return i;
        },
        default: function () {
            return X;
        }
    }),
    n(47120),
    n(411104);
var i,
    s,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(119617),
    d = n(512722),
    u = n.n(d),
    m = n(442837),
    g = n(780384),
    h = n(481060),
    p = n(355467),
    x = n(410030),
    f = n(100527),
    _ = n(906732),
    E = n(211242),
    C = n(600164),
    T = n(509545),
    S = n(626135),
    b = n(122289),
    I = n(63063),
    N = n(74538),
    v = n(937615),
    A = n(374649),
    j = n(140465),
    R = n(314684),
    O = n(653798),
    P = n(625881),
    y = n(440984),
    D = n(398775),
    B = n(807163),
    Z = n(311821),
    L = n(42818),
    M = n(798769),
    k = n(459965),
    w = n(119269),
    F = n(474936),
    U = n(735825),
    V = n(981631),
    G = n(388032),
    H = n(665680);
((s = i || (i = {}))[(s.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (s[(s.CONFIRM = 2)] = 'CONFIRM'), (s[(s.PREVIEW = 3)] = 'PREVIEW'), (s[(s.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (s[(s.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (s[(s.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (s[(s.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM');
async function Y(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: s, analyticsLocations: r, analyticsLocation: a } = e;
    try {
        if ((s(!0), i(!1), [V.O0b.PAST_DUE, V.O0b.PAUSED, V.O0b.BILLING_RETRY].includes(t.status))) await (0, p.EO)(t.id, r, a);
        else {
            var l, o;
            let e = null !== (o = null === (l = t.renewalMutations) || void 0 === l ? void 0 : l.items) && void 0 !== o ? o : t.items;
            await (0, p.Mg)(t, { items: (0, N.Ue)(e) }, r, a);
        }
        n();
    } catch {
        i(!0), s(!1);
    }
}
function W(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: s, onClose: l, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, E.Q)(),
        [u, m] = a.useState(!1),
        [p, f] = a.useState(!1),
        T = (0, x.ZP)(),
        { analyticsLocations: S } = (0, _.ZP)(),
        b = null;
    switch (n.status) {
        case V.O0b.PAST_DUE:
        case V.O0b.PAUSED:
        case V.O0b.BILLING_RETRY:
            b = G.intl.string(G.t.FClXh4);
            break;
        default:
            switch (i) {
                case F.p9.TIER_0:
                    b = d
                        ? G.intl.format(G.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case F.p9.TIER_1:
                    b = d
                        ? G.intl.format(G.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    b = d
                        ? G.intl.format(G.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: I.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let v =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !F.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null === (t = n.renewalMutations) || void 0 === t
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !F.dJ.has(t);
                  })) != null,
        A = v
            ? (0, r.jsx)(h.Button, {
                  onClick: () => s(3),
                  children: G.intl.string(G.t.PDTjLC)
              })
            : (0, r.jsx)(h.Button, {
                  color: h.Button.Colors.RED,
                  disabled: u,
                  onClick: async () => {
                      await Y({
                          setHasError: f,
                          onClose: l,
                          premiumSubscription: n,
                          setIsCancelling: m,
                          analyticsLocations: S,
                          analyticsLocation: c
                      });
                  },
                  children: o ? G.intl.string(G.t['cY+Ooa']) : G.intl.formatToPlainString(G.t['V3+Rpa'], { planPremiumType: N.ZP.getDisplayPremiumType(n.planId) })
              }),
        j = (0, r.jsx)(h.Button, {
            look: h.Button.Looks.LINK,
            color: (0, g.ap)(T) ? h.Button.Colors.PRIMARY : h.Button.Colors.WHITE,
            onClick: l,
            children: o ? G.intl.string(G.t.h9tkAA) : G.intl.string(G.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o
                ? (0, r.jsx)(M.Z, {
                      premiumType: i,
                      className: H.cancellationHeader,
                      onClose: l
                  })
                : (0, r.jsxs)(h.ModalHeader, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(h.FormTitle, {
                              tag: h.FormTitleTags.H4,
                              children: G.intl.format(G.t.ZpiGy8, { planPremiumType: N.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(h.ModalCloseButton, { onClick: l })
                      ]
                  }),
            (0, r.jsxs)(h.ModalContent, {
                className: H.body,
                children: [
                    p
                        ? (0, r.jsx)(h.FormErrorBlock, {
                              className: H.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: H.cancelImage }),
                    (0, r.jsx)('div', { children: b })
                ]
            }),
            (0, r.jsxs)(h.ModalFooter, {
                justify: C.Z.Justify.START,
                children: [A, j]
            })
        ]
    });
}
function z(e) {
    var t, n;
    let { premiumSubscription: i } = e,
        { analyticsLocations: s } = (0, _.ZP)(),
        [a] = (0, A.ED)({
            subscriptionId: i.id,
            items: (0, N.Ue)(null !== (n = null === (t = i.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== n ? n : i.items),
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: f.Z.CANCEL_INVOICE_PREVIEW
        }),
        l = (0, m.e7)([T.Z], () => T.Z.get(i.planId));
    if (null == a || null == l) return (0, r.jsx)(h.Spinner, { className: H.loading });
    let { intervalType: o, intervalCount: c } = N.ZP.getIntervalForInvoice(a);
    return (0, r.jsxs)('div', {
        className: H.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: H.renewalInvoiceDate,
                children:
                    0 !== a.total
                        ? G.intl.format(G.t.ycyeBw, {
                              renewalDate: a.subscriptionPeriodStart,
                              rate: (0, v.og)((0, v.T4)(a.total, a.currency), o, c)
                          })
                        : G.intl.format(G.t['+y0Tj4'], { renewalDate: a.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(O.PO, {
                children: [
                    (0, r.jsx)(O.q9, { children: G.intl.string(G.t.iqhIp6) }),
                    (0, r.jsx)(O.R$, {
                        label: G.intl.formatToPlainString(G.t.r3jVZm, { planName: N.ZP.getDisplayName(l.id) }),
                        value: (0, N.PK)(l),
                        className: H.invoiceCancelRow
                    }),
                    (0, r.jsx)(O.KU, {}),
                    (0, r.jsx)(L.nd, {
                        premiumSubscription: i,
                        renewalInvoice: a,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function K(e) {
    let { premiumSubscription: t, premiumType: n, onBack: i, onClose: s, analyticsLocation: l } = e,
        [c, d] = a.useState(!1),
        [u, m] = a.useState(!1),
        { analyticsLocations: g } = (0, _.ZP)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(M.Z, {
                premiumType: n,
                onClose: s
            }),
            (0, r.jsxs)(h.ModalContent, {
                className: o()(H.previewStep, H.body),
                children: [
                    u
                        ? (0, r.jsx)(h.FormErrorBlock, {
                              className: H.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(z, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(h.ModalFooter, {
                align: C.Z.Align.CENTER,
                justify: C.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(h.Button, {
                        color: h.Button.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await Y({
                                setHasError: m,
                                onClose: s,
                                premiumSubscription: t,
                                setIsCancelling: d,
                                analyticsLocations: g,
                                analyticsLocation: l
                            });
                        },
                        children: G.intl.format(G.t['V3+Rpa'], { planPremiumType: N.ZP.getDisplayPremiumType(t.planId) })
                    }),
                    (0, r.jsx)(Z.Z, { onClick: i })
                ]
            })
        ]
    });
}
function q(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null === (t = (0, N.Af)(e)) || void 0 === t ? void 0 : t.id,
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
function X(e) {
    var t;
    let n,
        { premiumSubscription: i, transitionState: s, onClose: l, analyticsLocations: o, analyticsLocation: d, initialStep: m } = e,
        p = a.useRef(new c.qA()),
        [E, C] = a.useState(null),
        T = (0, R.yQ)(),
        I = (null == T ? void 0 : T.showCard) === !0,
        v = (null == T ? void 0 : T.tenureRewardType) === U.nW.AVATAR_DECO,
        A = null === (t = (0, N.Af)(i)) || void 0 === t ? void 0 : t.planId,
        O = null != A ? N.ZP.getPremiumType(A) : null;
    u()(null != O, 'Should not be cancelling Nitro without premiumType');
    let Z = (0, x.ZP)();
    a.useEffect(() => {
        S.default.track(V.rMx.CANCELLATION_FLOW_STARTED, q(i));
    }, [i]);
    let L = O === F.p9.TIER_0 || O === F.p9.TIER_1 || O === F.p9.TIER_2;
    null == m && (m = L ? 1 : 2);
    let { analyticsLocations: M } = (0, _.ZP)(o, f.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [Y, z, X, J] = (function (e, t, n) {
            let [i, s] = a.useState(e),
                [r, l] = a.useState(Date.now()),
                [o] = a.useState(Date.now()),
                c = a.useCallback(
                    (e) => {
                        S.default.track(V.rMx.CANCELLATION_FLOW_STEP, {
                            from_step: Q[i],
                            to_step: Q[e],
                            step_duration_ms: Date.now() - r,
                            flow_duration_ms: Date.now() - o,
                            location_stack: n,
                            ...q(t)
                        }),
                            s(e),
                            l(Date.now());
                    },
                    [n, o, r, i, t]
                );
            return [i, c, r, o];
        })(m, i, o),
        [$, ee] = a.useState(null);
    (0, k.w)(i, l, !1);
    let et = (e) => {
            l(),
                S.default.track(V.rMx.CANCELLATION_FLOW_STEP, {
                    from_step: Q[e],
                    to_step: null,
                    step_duration_ms: Date.now() - X,
                    flow_duration_ms: Date.now() - J,
                    location_stack: o,
                    ...q(i)
                });
        },
        en = (0, j.UV)(),
        { churnUserDiscountOffer: ei, isFetchingChurnDiscountOffer: es } = (0, j.WR)(!en || 1 !== Y);
    switch (Y) {
        case 6:
            n = (0, r.jsx)(D.of, {
                premiumSubscription: i,
                premiumType: O,
                setStep: z,
                onClose: () => et(Y),
                pauseDuration: $,
                setPauseDuration: ee,
                footer: (0, r.jsxs)('div', {
                    className: H.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(h.Button, {
                            disabled: null === $,
                            onClick: () => {
                                0 === $ ? z(1) : z(7);
                            },
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, r.jsx)(h.Button, {
                            look: h.Button.Looks.LINK,
                            color: (0, g.wj)(Z) ? h.Button.Colors.WHITE : h.Button.Colors.PRIMARY,
                            onClick: l,
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: d
            });
            break;
        case 7:
            if (null == $) {
                let e = Error('No pause duration to set');
                throw (
                    ((0, b.q2)(e, {
                        extra: {
                            subscriptionId: i.id,
                            status: i.status
                        }
                    }),
                    e)
                );
            }
            n = (0, r.jsx)(D.Sz, {
                premiumSubscription: i,
                premiumType: O,
                setStep: z,
                onClose: () => et(Y),
                analyticsLocation: d,
                pauseDuration: $
            });
            break;
        case 1:
            n = (0, r.jsx)(B.Z, {
                premiumType: O,
                titleText: G.intl.string(G.t.PWq8TE),
                subtitleText: I ? G.intl.string(G.t.QagLCA) : G.intl.format(G.t.nsGVzs, {}),
                subtitleClassName: I ? H.subtitleSection : void 0,
                subtitleIcon:
                    I &&
                    (0, r.jsx)('div', {
                        className: H.subtitleIcon,
                        children: (0, r.jsx)(w.ZP, {
                            staticPercentage: 100,
                            iconClassName: H.iconClassName,
                            showAnimations: !1,
                            innerCircleClassName: H.innerCircle,
                            progressCircleVariation: v ? w.Qo.AVATAR_DECO : w.Qo.NITRO_GEM,
                            avatarDecoAssetDescription: G.intl.string(G.t['9o4F4+']),
                            avatarDecoAssetId: v ? U.VA : void 0,
                            progressCircleStrokeSize: 5,
                            backgroundCircleSize: '38%'
                        })
                    }),
                footer: (0, r.jsxs)('div', {
                    className: H.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(h.Button, {
                            onClick: () => z(2),
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, r.jsx)(h.Button, {
                            look: h.Button.Looks.LINK,
                            color: (0, g.wj)(Z) ? h.Button.Colors.WHITE : h.Button.Colors.PRIMARY,
                            onClick: () => et(Y),
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => et(Y),
                onDiscountClaim: () => z(4),
                onContinue: () => z(2),
                isLoading: en && es,
                churnUserDiscountOffer: ei,
                analyticsLocations: M
            });
            break;
        case 2:
            n = (0, r.jsx)(W, {
                premiumSubscription: i,
                premiumType: O,
                setStep: z,
                onClose: () => et(Y),
                whatYouLoseExperienceEnabled: L,
                analyticsLocation: d
            });
            break;
        case 3:
            n = (0, r.jsx)(K, {
                premiumSubscription: i,
                premiumType: O,
                onBack: () => z(2),
                onClose: () => et(Y),
                analyticsLocation: d
            });
            break;
        case 4:
            n = (0, r.jsx)(P.Z, {
                premiumSubscription: i,
                premiumType: O,
                onClose: () => et(Y),
                onConfirm: () => z(5),
                userDiscountOffer: ei
            });
            break;
        case 5:
            n = (0, r.jsx)(y.D, {
                premiumSubscription: i,
                premiumType: O,
                onClose: () => et(Y),
                confettiCanvas: E,
                userDiscountOffer: ei
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(Y));
    }
    return (0, r.jsxs)(_.Gt, {
        value: M,
        children: [
            (0, r.jsx)(c.O_, {
                ref: C,
                className: H.confettiCanvas,
                environment: p.current
            }),
            (0, r.jsx)(h.ModalRoot, {
                transitionState: s,
                children: n
            })
        ]
    });
}
