(n.d(t, {
    R: () => H,
    default: () => J
}),
    n(388685),
    n(415506));
var i,
    r = n(255367),
    s = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(505266),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    m = n(780384),
    p = n(755721),
    g = n(481060),
    h = n(355467),
    f = n(410030),
    b = n(100527),
    x = n(906732),
    _ = n(211242),
    j = n(600164),
    E = n(509545),
    O = n(626135),
    C = n(122289),
    v = n(63063),
    S = n(74538),
    T = n(937615),
    N = n(374649),
    I = n(140465),
    y = n(847903),
    A = n(811334),
    P = n(625881),
    R = n(440984),
    D = n(398775),
    Z = n(807163),
    w = n(311821),
    k = n(42818),
    L = n(798769),
    B = n(459965),
    M = n(474936),
    U = n(981631),
    V = n(388032),
    G = n(868006);
function F(e) {
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
var H = (((i = {})[(i.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (i[(i.CONFIRM = 2)] = 'CONFIRM'), (i[(i.PREVIEW = 3)] = 'PREVIEW'), (i[(i.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (i[(i.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (i[(i.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (i[(i.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM'), i);
async function z(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: r, analyticsLocations: s, analyticsLocation: a } = e;
    try {
        if ((r(!0), i(!1), [U.O0b.PAST_DUE, U.O0b.PAUSED, U.O0b.BILLING_RETRY].includes(t.status))) await (0, h.EO)(t.id, s, a);
        else {
            var l, o;
            let e = null != (o = null == (l = t.renewalMutations) ? void 0 : l.items) ? o : t.items,
                n = (0, S.Ue)(e);
            await (0, h.Mg)(
                t,
                { items: n },
                {
                    amount: 0,
                    currency: t.currency
                },
                (0, S.UX)(n, t.currency, t.paymentSourceId),
                s,
                a
            );
        }
        n();
    } catch (e) {
        (i(!0), r(!1));
    }
}
function W(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: a, onClose: l, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, _.Q)(),
        [u, h] = s.useState(!1),
        [b, E] = s.useState(!1),
        O = (0, f.ZP)(),
        { analyticsLocations: C } = (0, x.ZP)(),
        T = null;
    switch (n.status) {
        case U.O0b.PAST_DUE:
        case U.O0b.PAUSED:
        case U.O0b.BILLING_RETRY:
            T = V.intl.string(V.t.FClXh4);
            break;
        default:
            switch (i) {
                case M.p9.TIER_0:
                    T = d
                        ? V.intl.format(V.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: v.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.intl.format(V.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case M.p9.TIER_1:
                    T = d
                        ? V.intl.format(V.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: v.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.intl.format(V.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    T = d
                        ? V.intl.format(V.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: v.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.intl.format(V.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let N =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !M.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null == (t = n.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !M.dJ.has(t);
                  })) != null
                ? (0, r.jsx)(g.zxk, {
                      variant: 'primary',
                      text: V.intl.string(V.t.PDTjLC),
                      onClick: () => a(3)
                  })
                : (0, r.jsx)(g.zxk, {
                      variant: 'critical-primary',
                      text: o ? V.intl.string(V.t['cY+Ooa']) : V.intl.formatToPlainString(V.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) }),
                      disabled: u,
                      onClick: async () => {
                          await z({
                              setHasError: E,
                              onClose: l,
                              premiumSubscription: n,
                              setIsCancelling: h,
                              analyticsLocations: C,
                              analyticsLocation: c
                          });
                      }
                  }),
        I = (0, r.jsx)(p.zx, {
            look: p.zx.Looks.LINK,
            color: (0, m.ap)(O) ? p.zx.Colors.PRIMARY : p.zx.Colors.WHITE,
            onClick: l,
            children: o ? V.intl.string(V.t.h9tkAA) : V.intl.string(V.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o
                ? (0, r.jsx)(L.Z, {
                      premiumType: i,
                      className: G.cancellationHeader,
                      onClose: l
                  })
                : (0, r.jsxs)(g.xBx, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(g.vwX, {
                              tag: g.RB0.H4,
                              children: V.intl.format(V.t.ZpiGy8, { planPremiumType: S.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(g.olH, { onClick: l })
                      ]
                  }),
            (0, r.jsxs)(g.hzk, {
                className: G.body,
                children: [
                    b
                        ? (0, r.jsx)(g.kzN, {
                              className: G.errorBlock,
                              children: V.intl.string(V.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: G.cancelImage }),
                    (0, r.jsx)('div', { children: T })
                ]
            }),
            (0, r.jsxs)(g.mzw, {
                justify: j.Z.Justify.START,
                children: [N, I]
            })
        ]
    });
}
function Y(e) {
    var t, n;
    let { premiumSubscription: i } = e,
        { analyticsLocations: s } = (0, x.ZP)(),
        [a] = (0, N.ED)({
            subscriptionId: i.id,
            items: (0, S.Ue)(null != (n = null == (t = i.renewalMutations) ? void 0 : t.items) ? n : i.items),
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: b.Z.CANCEL_INVOICE_PREVIEW
        }),
        l = (0, u.e7)([E.Z], () => E.Z.get(i.planId));
    if (null == a || null == l) return (0, r.jsx)(g.$jN, { className: G.loading });
    let { intervalType: o, intervalCount: c } = S.ZP.getIntervalForInvoice(a);
    return (0, r.jsxs)('div', {
        className: G.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: G.renewalInvoiceDate,
                children:
                    0 !== a.total
                        ? V.intl.format(V.t.ycyeBw, {
                              renewalDate: a.subscriptionPeriodStart,
                              rate: (0, T.og)((0, T.T4)(a.total, a.currency), o, c)
                          })
                        : V.intl.format(V.t['+y0Tj4'], { renewalDate: a.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(A.aO, {
                children: [
                    (0, r.jsx)(A.Z9, { children: V.intl.string(V.t.iqhIp6) }),
                    (0, r.jsx)(A.B1, {
                        label: V.intl.formatToPlainString(V.t.r3jVZm, { planName: S.ZP.getDisplayName(l.id) }),
                        value: (0, S.PK)(l),
                        className: G.invoiceCancelRow
                    }),
                    (0, r.jsx)(A.UN, {}),
                    (0, r.jsx)(k.nd, {
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
    let { premiumSubscription: t, premiumType: n, onBack: i, onClose: a, analyticsLocation: o } = e,
        [c, d] = s.useState(!1),
        [u, m] = s.useState(!1),
        { analyticsLocations: p } = (0, x.ZP)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.Z, {
                premiumType: n,
                onClose: a
            }),
            (0, r.jsxs)(g.hzk, {
                className: l()(G.previewStep, G.body),
                children: [
                    u
                        ? (0, r.jsx)(g.kzN, {
                              className: G.errorBlock,
                              children: V.intl.string(V.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(Y, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(g.mzw, {
                align: j.Z.Align.CENTER,
                justify: j.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(g.zxk, {
                        variant: 'critical-primary',
                        text: V.intl.format(V.t['V3+Rpa'], { planPremiumType: S.ZP.getDisplayPremiumType(t.planId) }),
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
                        }
                    }),
                    (0, r.jsx)(w.Z, { onClick: i })
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
        subscription_plan_id: null == (t = (0, S.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
let X = {
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
        { premiumSubscription: i, transitionState: a, onClose: l, analyticsLocations: c, analyticsLocation: u, initialStep: h } = e,
        _ = s.useRef(new o.qA()),
        [j, E] = s.useState(null),
        v = null == (t = (0, S.Af)(i)) ? void 0 : t.planId,
        T = null != v ? S.ZP.getPremiumType(v) : null;
    d()(null != T, 'Should not be cancelling Nitro without premiumType');
    let N = (0, f.ZP)();
    s.useEffect(() => {
        O.default.track(U.rMx.CANCELLATION_FLOW_STARTED, q(i));
    }, [i]);
    let A = T === M.p9.TIER_0 || T === M.p9.TIER_1 || T === M.p9.TIER_2;
    null == h && (h = A ? 1 : 2);
    let { analyticsLocations: w } = (0, x.ZP)(c, b.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [k, L, H, z] = (function (e, t, n) {
            let [i, r] = s.useState(e),
                [a, l] = s.useState(Date.now()),
                [o] = s.useState(Date.now()),
                c = s.useCallback(
                    (e) => {
                        (O.default.track(
                            U.rMx.CANCELLATION_FLOW_STEP,
                            F(
                                {
                                    from_step: X[i],
                                    to_step: X[e],
                                    step_duration_ms: Date.now() - a,
                                    flow_duration_ms: Date.now() - o,
                                    location_stack: n
                                },
                                q(t)
                            )
                        ),
                            r(e),
                            l(Date.now()));
                    },
                    [n, o, a, i, t]
                );
            return [i, c, a, o];
        })(h, i, c),
        [Y, J] = s.useState(null);
    (0, B.w)(i, l, !1);
    let Q = (e) => {
            (l(),
                O.default.track(
                    U.rMx.CANCELLATION_FLOW_STEP,
                    F(
                        {
                            from_step: X[e],
                            to_step: null,
                            step_duration_ms: Date.now() - H,
                            flow_duration_ms: Date.now() - z,
                            location_stack: c
                        },
                        q(i)
                    )
                ));
        },
        $ = (0, I.UV)(),
        { churnUserDiscountOffer: ee, isFetchingChurnDiscountOffer: et } = (0, I.WR)(!$ || 1 !== k),
        en = (0, y.Z)(),
        ei = 'US' === en.ipCountryCode && 'CA' === en.ipSubdivisionCode;
    switch (k) {
        case 6:
            n = (0, r.jsx)(D.of, {
                premiumSubscription: i,
                premiumType: T,
                setStep: L,
                onClose: () => Q(k),
                pauseDuration: Y,
                setPauseDuration: J,
                footer: (0, r.jsxs)('div', {
                    className: G.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(g.zxk, {
                            variant: 'primary',
                            text: V.intl.string(V.t['3PatS0']),
                            disabled: null === Y,
                            onClick: () => {
                                0 === Y ? L(1) : L(7);
                            }
                        }),
                        (0, r.jsx)(p.zx, {
                            look: p.zx.Looks.LINK,
                            color: (0, m.wj)(N) ? p.zx.Colors.WHITE : p.zx.Colors.PRIMARY,
                            onClick: l,
                            children: V.intl.string(V.t.h9tkAA)
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
                    (0, C.q2)(e, {
                        extra: {
                            subscriptionId: i.id,
                            status: i.status
                        }
                    }),
                    e
                );
            }
            n = (0, r.jsx)(D.Sz, {
                premiumSubscription: i,
                premiumType: T,
                setStep: L,
                onClose: () => Q(k),
                analyticsLocation: u,
                pauseDuration: Y
            });
            break;
        case 1:
            n = (0, r.jsx)(Z.Z, {
                premiumType: T,
                titleText: V.intl.string(V.t.PWq8TE),
                subtitleText: V.intl.format(V.t.nsGVzs, {}),
                subtitleClassName: void 0,
                footer: (0, r.jsxs)('div', {
                    className: G.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(g.zxk, {
                            variant: 'primary',
                            text: ei ? V.intl.string(V.t.PfnxqK) : V.intl.string(V.t['3PatS0']),
                            onClick: () => L(2)
                        }),
                        (0, r.jsx)(p.zx, {
                            look: p.zx.Looks.LINK,
                            color: (0, m.wj)(N) ? p.zx.Colors.WHITE : p.zx.Colors.PRIMARY,
                            onClick: () => Q(k),
                            children: V.intl.string(V.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => Q(k),
                onDiscountClaim: () => L(4),
                onContinue: () => L(2),
                isLoading: $ && et,
                churnUserDiscountOffer: ee,
                analyticsLocations: w
            });
            break;
        case 2:
            n = (0, r.jsx)(W, {
                premiumSubscription: i,
                premiumType: T,
                setStep: L,
                onClose: () => Q(k),
                whatYouLoseExperienceEnabled: A,
                analyticsLocation: u
            });
            break;
        case 3:
            n = (0, r.jsx)(K, {
                premiumSubscription: i,
                premiumType: T,
                onBack: () => L(2),
                onClose: () => Q(k),
                analyticsLocation: u
            });
            break;
        case 4:
            n = (0, r.jsx)(P.Z, {
                premiumSubscription: i,
                premiumType: T,
                onClose: () => Q(k),
                onConfirm: () => L(5),
                userDiscountOffer: ee
            });
            break;
        case 5:
            n = (0, r.jsx)(R.D, {
                premiumSubscription: i,
                premiumType: T,
                onClose: () => Q(k),
                confettiCanvas: j,
                userDiscountOffer: ee
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(k));
    }
    return (0, r.jsxs)(x.Gt, {
        value: w,
        children: [
            (0, r.jsx)(o.O_, {
                ref: E,
                className: G.confettiCanvas,
                environment: _.current
            }),
            (0, r.jsx)(g.Y0X, {
                transitionState: a,
                parentComponent: 'PremiumSubscriptionCancellationModal',
                children: n
            })
        ]
    });
}
