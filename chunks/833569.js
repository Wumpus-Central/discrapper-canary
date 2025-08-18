n.d(t, { default: () => Q }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(238651),
    l = n(512722),
    c = n.n(l),
    u = n(442837),
    d = n(780384),
    m = n(755721),
    p = n(481060),
    _ = n(355467),
    f = n(410030),
    x = n(100527),
    y = n(906732),
    b = n(211242),
    h = n(600164),
    g = n(509545),
    C = n(626135),
    j = n(122289),
    E = n(63063),
    I = n(74538),
    v = n(937615),
    N = n(374649),
    P = n(140465),
    O = n(140447),
    T = n(847903),
    R = n(811334),
    S = n(48813),
    w = n(625881),
    D = n(440984),
    k = n(398775),
    A = n(807163),
    L = n(311821),
    M = n(42818),
    U = n(798769),
    B = n(459965),
    Z = n(45474),
    z = n(501090),
    F = n(474936),
    Y = n(981631),
    H = n(388032),
    W = n(959032);
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
async function q(e) {
    let {
        premiumSubscription: t,
        onClose: n,
        setHasError: i,
        setIsCancelling: r,
        analyticsLocations: a,
        analyticsLocation: s,
    } = e;
    try {
        if ((r(!0), i(!1), [Y.O0b.PAST_DUE, Y.O0b.PAUSED, Y.O0b.BILLING_RETRY].includes(t.status)))
            await (0, _.EO)(t.id, a, s);
        else {
            var o, l;
            let e = null != (l = null == (o = t.renewalMutations) ? void 0 : o.items) ? l : t.items,
                n = (0, I.Ue)(e);
            await (0, _.Mg)(
                t,
                { items: n },
                {
                    amount: 0,
                    currency: t.currency,
                },
                (0, I.UX)(n, t.currency, t.paymentSourceId),
                a,
                s,
            );
        }
        n();
    } catch (e) {
        i(!0), r(!1);
    }
}
function V(e) {
    var t;
    let {
            premiumSubscription: n,
            premiumType: a,
            setStep: s,
            onClose: o,
            whatYouLoseExperienceEnabled: l,
            analyticsLocation: c,
        } = e,
        u = (0, b.Q)(),
        [_, x] = r.useState(!1),
        [g, C] = r.useState(!1),
        j = (0, f.ZP)(),
        { analyticsLocations: v } = (0, y.ZP)(),
        N = null;
    switch (n.status) {
        case Y.O0b.PAST_DUE:
        case Y.O0b.PAUSED:
        case Y.O0b.BILLING_RETRY:
            N = H.intl.string(H.t.FClXh4);
            break;
        default:
            switch (a) {
                case F.p9.TIER_0:
                    N = u
                        ? H.intl.format(H.t["l+A50N"], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: E.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS),
                          })
                        : H.intl.format(H.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case F.p9.TIER_1:
                    N = u
                        ? H.intl.format(H.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: E.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS),
                          })
                        : H.intl.format(H.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    N = u
                        ? H.intl.format(H.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: E.Z.getArticleURL(Y.BhN.BLOCKED_PAYMENTS),
                          })
                        : H.intl.format(H.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let P =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !F.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null == (t = n.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !F.dJ.has(t);
                  })) != null
                ? (0, i.jsx)(p.zxk, {
                      variant: "primary",
                      text: H.intl.string(H.t.PDTjLC),
                      onClick: () => s(Z.R.PREVIEW),
                  })
                : (0, i.jsx)(p.zxk, {
                      variant: "critical-primary",
                      text: l
                          ? H.intl.string(H.t["cY+Ooa"])
                          : H.intl.formatToPlainString(H.t["V3+Rpa"], {
                                planPremiumType: I.ZP.getDisplayPremiumType(n.planId),
                            }),
                      disabled: _,
                      onClick: async () => {
                          await q({
                              setHasError: C,
                              onClose: o,
                              premiumSubscription: n,
                              setIsCancelling: x,
                              analyticsLocations: v,
                              analyticsLocation: c,
                          });
                      },
                  }),
        O = (0, i.jsx)(m.zx, {
            "data-migration-pending": !0,
            look: m.zx.Looks.LINK,
            color: (0, d.ap)(j) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
            onClick: o,
            children: l ? H.intl.string(H.t.h9tkAA) : H.intl.string(H.t["ETE/oK"]),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l
                ? (0, i.jsx)(U.Z, {
                      premiumType: a,
                      className: W.cancellationHeader,
                      onClose: o,
                  })
                : (0, i.jsxs)(p.xBx, {
                      "data-migration-pending": !0,
                      separator: !1,
                      children: [
                          (0, i.jsx)(p.vwX, {
                              tag: p.RB0.H4,
                              children: H.intl.format(H.t.ZpiGy8, {
                                  planPremiumType: I.ZP.getDisplayPremiumType(n.planId),
                              }),
                          }),
                          (0, i.jsx)(p.olH, {
                              "data-migration-pending": !0,
                              onClick: o,
                          }),
                      ],
                  }),
            (0, i.jsxs)(p.hzk, {
                "data-migration-pending": !0,
                className: W.body,
                children: [
                    g
                        ? (0, i.jsx)(p.kzN, {
                              className: W.errorBlock,
                              children: H.intl.string(H.t["5mlOCQ"]),
                          })
                        : null,
                    (0, i.jsx)("div", { className: W.cancelImage }),
                    (0, i.jsx)("div", { children: N }),
                ],
            }),
            (0, i.jsxs)(p.mzw, {
                "data-migration-pending": !0,
                justify: h.Z.Justify.START,
                children: [P, O],
            }),
        ],
    });
}
function G(e) {
    var t, n;
    let { premiumSubscription: r } = e,
        { analyticsLocations: a } = (0, y.ZP)(),
        [s] = (0, N.ED)({
            subscriptionId: r.id,
            items: (0, I.Ue)(null != (n = null == (t = r.renewalMutations) ? void 0 : t.items) ? n : r.items),
            renewal: !0,
            analyticsLocations: a,
            analyticsLocation: x.Z.CANCEL_INVOICE_PREVIEW,
        }),
        o = (0, u.e7)([g.Z], () => g.Z.get(r.planId));
    if (null == s || null == o) return (0, i.jsx)(p.$jN, { className: W.loading });
    let { intervalType: l, intervalCount: c } = I.ZP.getIntervalForInvoice(s);
    return (0, i.jsxs)("div", {
        className: W.__invalid_bodyText,
        children: [
            (0, i.jsx)("div", {
                className: W.renewalInvoiceDate,
                children:
                    0 !== s.total
                        ? H.intl.format(H.t.ycyeBw, {
                              renewalDate: s.subscriptionPeriodStart,
                              rate: (0, v.og)((0, v.T4)(s.total, s.currency), l, c),
                          })
                        : H.intl.format(H.t["+y0Tj4"], { renewalDate: s.subscriptionPeriodStart }),
            }),
            (0, i.jsxs)(R.aO, {
                children: [
                    (0, i.jsx)(R.Z9, { children: H.intl.string(H.t.iqhIp6) }),
                    (0, i.jsx)(R.B1, {
                        label: H.intl.formatToPlainString(H.t.r3jVZm, { planName: I.ZP.getDisplayName(o.id) }),
                        value: (0, I.PK)(o),
                        className: W.invoiceCancelRow,
                    }),
                    (0, i.jsx)(R.UN, {}),
                    (0, i.jsx)(M.nd, {
                        premiumSubscription: r,
                        renewalInvoice: s,
                        isUpdate: !0,
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let { premiumSubscription: t, premiumType: n, onBack: a, onClose: o, analyticsLocation: l } = e,
        [c, u] = r.useState(!1),
        [d, m] = r.useState(!1),
        { analyticsLocations: _ } = (0, y.ZP)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(U.Z, {
                premiumType: n,
                onClose: o,
            }),
            (0, i.jsxs)(p.hzk, {
                "data-migration-pending": !0,
                className: s()(W.previewStep, W.body),
                children: [
                    d
                        ? (0, i.jsx)(p.kzN, {
                              className: W.errorBlock,
                              children: H.intl.string(H.t["5mlOCQ"]),
                          })
                        : null,
                    (0, i.jsx)(G, { premiumSubscription: t }),
                ],
            }),
            (0, i.jsxs)(p.mzw, {
                "data-migration-pending": !0,
                align: h.Z.Align.CENTER,
                justify: h.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(p.zxk, {
                        variant: "critical-primary",
                        text: H.intl.format(H.t["V3+Rpa"], { planPremiumType: I.ZP.getDisplayPremiumType(t.planId) }),
                        disabled: c,
                        onClick: async () => {
                            await q({
                                setHasError: m,
                                onClose: o,
                                premiumSubscription: t,
                                setIsCancelling: u,
                                analyticsLocations: _,
                                analyticsLocation: l,
                            });
                        },
                    }),
                    (0, i.jsx)(L.Z, { onClick: a }),
                ],
            }),
        ],
    });
}
function J(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null == (t = (0, I.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status,
    };
}
function Q(e) {
    var t;
    let { premiumSubscription: n } = e,
        r =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !F.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null == (t = n.renewalMutations)
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !F.dJ.has(t);
                  })) != null,
        { enabled: a } = (0, O.P)({ location: "Churn Modal" });
    return !r || a ? (0, i.jsx)(S.I, X({}, e)) : (0, i.jsx)($, X({}, e));
}
let $ = (e) => {
    var t;
    let n,
        { premiumSubscription: a, transitionState: s, onClose: l, analyticsLocations: u, analyticsLocation: _ } = e,
        { initialStep: b } = e,
        h = r.useRef(new o.qA()),
        [g, E] = r.useState(null),
        v = null == (t = (0, I.Af)(a)) ? void 0 : t.planId,
        N = null != v ? I.ZP.getPremiumType(v) : null;
    c()(null != N, "Should not be cancelling Nitro without premiumType");
    let O = (0, f.ZP)();
    r.useEffect(() => {
        C.default.track(Y.rMx.CANCELLATION_FLOW_STARTED, J(a));
    }, [a]);
    let R = N === F.p9.TIER_0 || N === F.p9.TIER_1 || N === F.p9.TIER_2;
    null == b && (b = R ? Z.R.WHAT_YOU_LOSE : Z.R.CONFIRM);
    let { analyticsLocations: S } = (0, y.ZP)(u, x.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [L, M, U, q] = (0, z.q)(b, a, u),
        [G, Q] = r.useState(null);
    (0, B.w)(a, l, !1);
    let $ = (e) => {
            l(),
                C.default.track(
                    Y.rMx.CANCELLATION_FLOW_STEP,
                    X(
                        {
                            from_step: Z.O[e],
                            to_step: null,
                            step_duration_ms: Date.now() - U,
                            flow_duration_ms: Date.now() - q,
                            location_stack: u,
                        },
                        J(a),
                    ),
                );
        },
        ee = (0, P.UV)(),
        { churnUserDiscountOffer: et, isFetchingChurnDiscountOffer: en } = (0, P.WR)(
            !ee || (null != a.canceledAt && L !== Z.R.CONFIRM_DISCOUNT),
        ),
        ei = (0, T.Z)(),
        er = "US" === ei.ipCountryCode && "CA" === ei.ipSubdivisionCode;
    switch (L) {
        case Z.R.PAUSE_SELECT:
            n = (0, i.jsx)(k.of, {
                premiumSubscription: a,
                premiumType: N,
                setStep: M,
                onClose: () => $(L),
                pauseDuration: G,
                setPauseDuration: Q,
                footer: (0, i.jsxs)("div", {
                    className: W.whatYouLoseButtonContainer,
                    children: [
                        (0, i.jsx)(p.zxk, {
                            variant: "primary",
                            text: H.intl.string(H.t["3PatS0"]),
                            disabled: null === G,
                            onClick: () => {
                                0 === G ? M(Z.R.WHAT_YOU_LOSE) : M(Z.R.PAUSE_CONFIRM);
                            },
                        }),
                        (0, i.jsx)(m.zx, {
                            "data-migration-pending": !0,
                            look: m.zx.Looks.LINK,
                            color: (0, d.wj)(O) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
                            onClick: l,
                            children: H.intl.string(H.t.h9tkAA),
                        }),
                    ],
                }),
                analyticsLocation: _,
            });
            break;
        case Z.R.PAUSE_CONFIRM:
            if (null == G) {
                let e = Error("No pause duration to set");
                throw (
                    ((0, j.q2)(e, {
                        extra: {
                            subscriptionId: a.id,
                            status: a.status,
                        },
                    }),
                    e)
                );
            }
            n = (0, i.jsx)(k.Sz, {
                premiumSubscription: a,
                premiumType: N,
                setStep: M,
                onClose: () => $(L),
                analyticsLocation: _,
                pauseDuration: G,
            });
            break;
        case Z.R.WHAT_YOU_LOSE:
            n = (0, i.jsx)(A.Z, {
                premiumType: N,
                titleText: H.intl.string(H.t.PWq8TE),
                subtitleText: H.intl.format(H.t.nsGVzs, {}),
                subtitleClassName: void 0,
                footer: (0, i.jsxs)("div", {
                    className: W.whatYouLoseButtonContainer,
                    children: [
                        (0, i.jsx)(p.zxk, {
                            variant: "primary",
                            text: er ? H.intl.string(H.t.PfnxqK) : H.intl.string(H.t["3PatS0"]),
                            onClick: () => M(Z.R.CONFIRM),
                        }),
                        (0, i.jsx)(m.zx, {
                            "data-migration-pending": !0,
                            look: m.zx.Looks.LINK,
                            color: (0, d.wj)(O) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
                            onClick: () => $(L),
                            children: H.intl.string(H.t.h9tkAA),
                        }),
                    ],
                }),
                onClose: () => $(L),
                onDiscountClaim: () => M(Z.R.CONFIRM_DISCOUNT),
                onContinue: () => M(Z.R.CONFIRM),
                isLoading: ee && en,
                churnUserDiscountOffer: et,
                analyticsLocations: S,
            });
            break;
        case Z.R.CONFIRM:
            n = (0, i.jsx)(V, {
                premiumSubscription: a,
                premiumType: N,
                setStep: M,
                onClose: () => $(L),
                whatYouLoseExperienceEnabled: R,
                analyticsLocation: _,
            });
            break;
        case Z.R.PREVIEW:
            n = (0, i.jsx)(K, {
                premiumSubscription: a,
                premiumType: N,
                onBack: () => M(Z.R.CONFIRM),
                onClose: () => $(L),
                analyticsLocation: _,
            });
            break;
        case Z.R.CONFIRM_DISCOUNT:
            n = (0, i.jsx)(w.Z, {
                premiumSubscription: a,
                premiumType: N,
                onClose: () => $(L),
                onConfirm: () => M(Z.R.DISCOUNT_APPLIED),
                userDiscountOffer: et,
            });
            break;
        case Z.R.DISCOUNT_APPLIED:
            n = (0, i.jsx)(D.D, {
                premiumSubscription: a,
                premiumType: N,
                onClose: () => $(L),
                confettiCanvas: g,
                userDiscountOffer: et,
            });
            break;
        default:
            throw Error("Unexpected step: ".concat(L));
    }
    return (0, i.jsxs)(y.Gt, {
        value: S,
        children: [
            (0, i.jsx)(o.O_, {
                ref: E,
                className: W.confettiCanvas,
                environment: h.current,
            }),
            (0, i.jsx)(p.Y0X, {
                "data-migration-pending": !0,
                transitionState: s,
                parentComponent: "PremiumSubscriptionCancellationModal",
                children: n,
            }),
        ],
    });
};
