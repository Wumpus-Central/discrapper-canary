n.d(t, {
    R: () => H,
    default: () => Q
}),
    n(47120),
    n(411104);
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(48026),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    m = n(780384),
    g = n(481060),
    p = n(355467),
    h = n(410030),
    f = n(100527),
    b = n(906732),
    N = n(211242),
    x = n(600164),
    _ = n(509545),
    E = n(626135),
    j = n(122289),
    O = n(63063),
    C = n(74538),
    S = n(937615),
    v = n(374649),
    T = n(140465),
    I = n(314684),
    y = n(653798),
    A = n(625881),
    P = n(440984),
    R = n(398775),
    D = n(807163),
    Z = n(311821),
    w = n(42818),
    k = n(798769),
    W = n(459965),
    L = n(119269),
    B = n(474936),
    M = n(735825),
    U = n(981631),
    V = n(388032),
    G = n(868006);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
var H = (((r = {})[(r.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (r[(r.CONFIRM = 2)] = 'CONFIRM'), (r[(r.PREVIEW = 3)] = 'PREVIEW'), (r[(r.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (r[(r.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (r[(r.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (r[(r.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM'), r);
async function z(e) {
    let { premiumSubscription: t, onClose: n, setHasError: r, setIsCancelling: i, analyticsLocations: s, analyticsLocation: a } = e;
    try {
        if ((i(!0), r(!1), [U.O0b.PAST_DUE, U.O0b.PAUSED, U.O0b.BILLING_RETRY].includes(t.status))) await (0, p.EO)(t.id, s, a);
        else {
            var l, o;
            let e = null != (o = null == (l = t.renewalMutations) ? void 0 : l.items) ? o : t.items;
            await (0, p.Mg)(t, { items: (0, C.Ue)(e) }, s, a);
        }
        n();
    } catch (e) {
        r(!0), i(!1);
    }
}
function Y(e) {
    var t;
    let { premiumSubscription: n, premiumType: r, setStep: a, onClose: l, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, N.Q)(),
        [u, p] = s.useState(!1),
        [f, _] = s.useState(!1),
        E = (0, h.ZP)(),
        { analyticsLocations: j } = (0, b.ZP)(),
        S = null;
    switch (n.status) {
        case U.O0b.PAST_DUE:
        case U.O0b.PAUSED:
        case U.O0b.BILLING_RETRY:
            S = V.NW.string(V.t.FClXh4);
            break;
        default:
            switch (r) {
                case B.p9.TIER_0:
                    S = d
                        ? V.NW.format(V.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.NW.format(V.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case B.p9.TIER_1:
                    S = d
                        ? V.NW.format(V.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.NW.format(V.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    S = d
                        ? V.NW.format(V.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: O.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.NW.format(V.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let v =
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
                ? (0, i.jsx)(g.zxk, {
                      onClick: () => a(3),
                      children: V.NW.string(V.t.PDTjLC)
                  })
                : (0, i.jsx)(g.zxk, {
                      color: g.zxk.Colors.RED,
                      disabled: u,
                      onClick: async () => {
                          await z({
                              setHasError: _,
                              onClose: l,
                              premiumSubscription: n,
                              setIsCancelling: p,
                              analyticsLocations: j,
                              analyticsLocation: c
                          });
                      },
                      children: o ? V.NW.string(V.t['cY+Ooa']) : V.NW.formatToPlainString(V.t['V3+Rpa'], { planPremiumType: C.ZP.getDisplayPremiumType(n.planId) })
                  }),
        T = (0, i.jsx)(g.zxk, {
            look: g.zxk.Looks.LINK,
            color: (0, m.ap)(E) ? g.zxk.Colors.PRIMARY : g.zxk.Colors.WHITE,
            onClick: l,
            children: o ? V.NW.string(V.t.h9tkAA) : V.NW.string(V.t['ETE/oK'])
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o
                ? (0, i.jsx)(k.Z, {
                      premiumType: r,
                      className: G.cancellationHeader,
                      onClose: l
                  })
                : (0, i.jsxs)(g.xBx, {
                      separator: !1,
                      children: [
                          (0, i.jsx)(g.vwX, {
                              tag: g.RB0.H4,
                              children: V.NW.format(V.t.ZpiGy8, { planPremiumType: C.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, i.jsx)(g.olH, { onClick: l })
                      ]
                  }),
            (0, i.jsxs)(g.hzk, {
                className: G.body,
                children: [
                    f
                        ? (0, i.jsx)(g.kzN, {
                              className: G.errorBlock,
                              children: V.NW.string(V.t['5mlOCQ'])
                          })
                        : null,
                    (0, i.jsx)('div', { className: G.cancelImage }),
                    (0, i.jsx)('div', { children: S })
                ]
            }),
            (0, i.jsxs)(g.mzw, {
                justify: x.Z.Justify.START,
                children: [v, T]
            })
        ]
    });
}
function K(e) {
    var t, n;
    let { premiumSubscription: r } = e,
        { analyticsLocations: s } = (0, b.ZP)(),
        [a] = (0, v.ED)({
            subscriptionId: r.id,
            items: (0, C.Ue)(null != (n = null == (t = r.renewalMutations) ? void 0 : t.items) ? n : r.items),
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: f.Z.CANCEL_INVOICE_PREVIEW
        }),
        l = (0, u.e7)([_.Z], () => _.Z.get(r.planId));
    if (null == a || null == l) return (0, i.jsx)(g.$jN, { className: G.loading });
    let { intervalType: o, intervalCount: c } = C.ZP.getIntervalForInvoice(a);
    return (0, i.jsxs)('div', {
        className: G.__invalid_bodyText,
        children: [
            (0, i.jsx)('div', {
                className: G.renewalInvoiceDate,
                children:
                    0 !== a.total
                        ? V.NW.format(V.t.ycyeBw, {
                              renewalDate: a.subscriptionPeriodStart,
                              rate: (0, S.og)((0, S.T4)(a.total, a.currency), o, c)
                          })
                        : V.NW.format(V.t['+y0Tj4'], { renewalDate: a.subscriptionPeriodStart })
            }),
            (0, i.jsxs)(y.PO, {
                children: [
                    (0, i.jsx)(y.q9, { children: V.NW.string(V.t.iqhIp6) }),
                    (0, i.jsx)(y.R$, {
                        label: V.NW.formatToPlainString(V.t.r3jVZm, { planName: C.ZP.getDisplayName(l.id) }),
                        value: (0, C.PK)(l),
                        className: G.invoiceCancelRow
                    }),
                    (0, i.jsx)(y.KU, {}),
                    (0, i.jsx)(w.nd, {
                        premiumSubscription: r,
                        renewalInvoice: a,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function q(e) {
    let { premiumSubscription: t, premiumType: n, onBack: r, onClose: a, analyticsLocation: o } = e,
        [c, d] = s.useState(!1),
        [u, m] = s.useState(!1),
        { analyticsLocations: p } = (0, b.ZP)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(k.Z, {
                premiumType: n,
                onClose: a
            }),
            (0, i.jsxs)(g.hzk, {
                className: l()(G.previewStep, G.body),
                children: [
                    u
                        ? (0, i.jsx)(g.kzN, {
                              className: G.errorBlock,
                              children: V.NW.string(V.t['5mlOCQ'])
                          })
                        : null,
                    (0, i.jsx)(K, { premiumSubscription: t })
                ]
            }),
            (0, i.jsxs)(g.mzw, {
                align: x.Z.Align.CENTER,
                justify: x.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(g.zxk, {
                        color: g.zxk.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await z({
                                setHasError: m,
                                onClose: a,
                                premiumSubscription: t,
                                setIsCancelling: d,
                                analyticsLocations: p,
                                analyticsLocation: o
                            });
                        },
                        children: V.NW.format(V.t['V3+Rpa'], { planPremiumType: C.ZP.getDisplayPremiumType(t.planId) })
                    }),
                    (0, i.jsx)(Z.Z, { onClick: r })
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
        subscription_plan_id: null == (t = (0, C.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
let J = {
    1: "What You're Losing",
    2: 'Confirm Cancellation',
    3: 'Preview Updated Subscription',
    4: 'Redeem Churn Discount Started',
    5: 'Redeem Churn Discount Completed',
    6: 'Select Pause Duration',
    7: 'Confirm Pause Duration'
};
function Q(e) {
    var t;
    let n,
        { premiumSubscription: r, transitionState: a, onClose: l, analyticsLocations: c, analyticsLocation: u, initialStep: p } = e,
        N = s.useRef(new o.qA()),
        [x, _] = s.useState(null),
        O = (0, I.Er)(),
        S = (null == O ? void 0 : O.showCard) === !0,
        v = (null == O ? void 0 : O.tenureRewardType) === M.nW.AVATAR_DECO,
        y = null == (t = (0, C.Af)(r)) ? void 0 : t.planId,
        Z = null != y ? C.ZP.getPremiumType(y) : null;
    d()(null != Z, 'Should not be cancelling Nitro without premiumType');
    let w = (0, h.ZP)();
    s.useEffect(() => {
        E.default.track(U.rMx.CANCELLATION_FLOW_STARTED, X(r));
    }, [r]);
    let k = Z === B.p9.TIER_0 || Z === B.p9.TIER_1 || Z === B.p9.TIER_2;
    null == p && (p = k ? 1 : 2);
    let { analyticsLocations: H } = (0, b.ZP)(c, f.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [z, K, Q, $] = (function (e, t, n) {
            let [r, i] = s.useState(e),
                [a, l] = s.useState(Date.now()),
                [o] = s.useState(Date.now()),
                c = s.useCallback(
                    (e) => {
                        E.default.track(
                            U.rMx.CANCELLATION_FLOW_STEP,
                            F(
                                {
                                    from_step: J[r],
                                    to_step: J[e],
                                    step_duration_ms: Date.now() - a,
                                    flow_duration_ms: Date.now() - o,
                                    location_stack: n
                                },
                                X(t)
                            )
                        ),
                            i(e),
                            l(Date.now());
                    },
                    [n, o, a, r, t]
                );
            return [r, c, a, o];
        })(p, r, c),
        [ee, et] = s.useState(null);
    (0, W.w)(r, l, !1);
    let en = (e) => {
            l(),
                E.default.track(
                    U.rMx.CANCELLATION_FLOW_STEP,
                    F(
                        {
                            from_step: J[e],
                            to_step: null,
                            step_duration_ms: Date.now() - Q,
                            flow_duration_ms: Date.now() - $,
                            location_stack: c
                        },
                        X(r)
                    )
                );
        },
        er = (0, T.UV)(),
        { churnUserDiscountOffer: ei, isFetchingChurnDiscountOffer: es } = (0, T.WR)(!er || 1 !== z);
    switch (z) {
        case 6:
            n = (0, i.jsx)(R.of, {
                premiumSubscription: r,
                premiumType: Z,
                setStep: K,
                onClose: () => en(z),
                pauseDuration: ee,
                setPauseDuration: et,
                footer: (0, i.jsxs)('div', {
                    className: G.whatYouLoseButtonContainer,
                    children: [
                        (0, i.jsx)(g.zxk, {
                            disabled: null === ee,
                            onClick: () => {
                                0 === ee ? K(1) : K(7);
                            },
                            children: V.NW.string(V.t['3PatS0'])
                        }),
                        (0, i.jsx)(g.zxk, {
                            look: g.zxk.Looks.LINK,
                            color: (0, m.wj)(w) ? g.zxk.Colors.WHITE : g.zxk.Colors.PRIMARY,
                            onClick: l,
                            children: V.NW.string(V.t.h9tkAA)
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
                    ((0, j.q2)(e, {
                        extra: {
                            subscriptionId: r.id,
                            status: r.status
                        }
                    }),
                    e)
                );
            }
            n = (0, i.jsx)(R.Sz, {
                premiumSubscription: r,
                premiumType: Z,
                setStep: K,
                onClose: () => en(z),
                analyticsLocation: u,
                pauseDuration: ee
            });
            break;
        case 1:
            n = (0, i.jsx)(D.Z, {
                premiumType: Z,
                titleText: V.NW.string(V.t.PWq8TE),
                subtitleText: S ? V.NW.string(V.t.QagLCA) : V.NW.format(V.t.nsGVzs, {}),
                subtitleClassName: S ? G.subtitleSection : void 0,
                subtitleIcon:
                    S &&
                    (0, i.jsx)('div', {
                        className: G.subtitleIcon,
                        children: (0, i.jsx)(L.ZP, {
                            staticPercentage: 100,
                            iconClassName: G.iconClassName,
                            showAnimations: !1,
                            innerCircleClassName: G.innerCircle,
                            progressCircleVariation: v ? L.Qo.AVATAR_DECO : L.Qo.NITRO_GEM,
                            avatarDecoAssetDescription: V.NW.string(V.t['9o4F4+']),
                            avatarDecoAssetId: v ? M.VA : void 0,
                            progressCircleStrokeSize: 5,
                            backgroundCircleSize: '38%'
                        })
                    }),
                footer: (0, i.jsxs)('div', {
                    className: G.whatYouLoseButtonContainer,
                    children: [
                        (0, i.jsx)(g.zxk, {
                            onClick: () => K(2),
                            children: V.NW.string(V.t['3PatS0'])
                        }),
                        (0, i.jsx)(g.zxk, {
                            look: g.zxk.Looks.LINK,
                            color: (0, m.wj)(w) ? g.zxk.Colors.WHITE : g.zxk.Colors.PRIMARY,
                            onClick: () => en(z),
                            children: V.NW.string(V.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => en(z),
                onDiscountClaim: () => K(4),
                onContinue: () => K(2),
                isLoading: er && es,
                churnUserDiscountOffer: ei,
                analyticsLocations: H
            });
            break;
        case 2:
            n = (0, i.jsx)(Y, {
                premiumSubscription: r,
                premiumType: Z,
                setStep: K,
                onClose: () => en(z),
                whatYouLoseExperienceEnabled: k,
                analyticsLocation: u
            });
            break;
        case 3:
            n = (0, i.jsx)(q, {
                premiumSubscription: r,
                premiumType: Z,
                onBack: () => K(2),
                onClose: () => en(z),
                analyticsLocation: u
            });
            break;
        case 4:
            n = (0, i.jsx)(A.Z, {
                premiumSubscription: r,
                premiumType: Z,
                onClose: () => en(z),
                onConfirm: () => K(5),
                userDiscountOffer: ei
            });
            break;
        case 5:
            n = (0, i.jsx)(P.D, {
                premiumSubscription: r,
                premiumType: Z,
                onClose: () => en(z),
                confettiCanvas: x,
                userDiscountOffer: ei
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(z));
    }
    return (0, i.jsxs)(b.Gt, {
        value: H,
        children: [
            (0, i.jsx)(o.O_, {
                ref: _,
                className: G.confettiCanvas,
                environment: N.current
            }),
            (0, i.jsx)(g.Y0X, {
                transitionState: a,
                children: n
            })
        ]
    });
}
