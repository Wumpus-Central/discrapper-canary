n.d(t, { default: () => $ }), n(388685), n(415506);
var i = n(255367),
    r = n(73800),
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
    g = n(509545),
    C = n(626135),
    E = n(122289),
    j = n(63063),
    O = n(74538),
    P = n(937615),
    N = n(374649),
    v = n(140465),
    I = n(414642),
    T = n(140447),
    R = n(847903),
    S = n(811334),
    w = n(48813),
    D = n(625881),
    k = n(440984),
    A = n(398775),
    M = n(807163),
    L = n(311821),
    U = n(42818),
    B = n(798769),
    Z = n(459965),
    z = n(45474),
    F = n(501090),
    Y = n(474936),
    W = n(981631),
    H = n(388032),
    X = n(868006);
function V(e) {
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
        if ((r(!0), i(!1), [W.O0b.PAST_DUE, W.O0b.PAUSED, W.O0b.BILLING_RETRY].includes(t.status)))
            await (0, _.EO)(t.id, a, s);
        else {
            var o, l;
            let e = null != (l = null == (o = t.renewalMutations) ? void 0 : o.items) ? l : t.items,
                n = (0, O.Ue)(e);
            await (0, _.Mg)(
                t,
                { items: n },
                {
                    amount: 0,
                    currency: t.currency,
                },
                (0, O.UX)(n, t.currency, t.paymentSourceId),
                a,
                s,
            );
        }
        n();
    } catch (e) {
        i(!0), r(!1);
    }
}
function G(e) {
    var t;
    let {
            premiumSubscription: n,
            premiumType: a,
            setStep: s,
            onClose: o,
            whatYouLoseExperienceEnabled: l,
            analyticsLocation: c,
        } = e,
        u = (0, y.Q)(),
        [_, b] = r.useState(!1),
        [g, C] = r.useState(!1),
        E = (0, f.ZP)(),
        { analyticsLocations: P } = (0, x.ZP)(),
        N = null;
    switch (n.status) {
        case W.O0b.PAST_DUE:
        case W.O0b.PAUSED:
        case W.O0b.BILLING_RETRY:
            N = H.intl.string(H.t.FClXh4);
            break;
        default:
            switch (a) {
                case Y.p9.TIER_0:
                    N = u
                        ? H.intl.format(H.t["l+A50N"], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: j.Z.getArticleURL(W.BhN.BLOCKED_PAYMENTS),
                          })
                        : H.intl.format(H.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case Y.p9.TIER_1:
                    N = u
                        ? H.intl.format(H.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: j.Z.getArticleURL(W.BhN.BLOCKED_PAYMENTS),
                          })
                        : H.intl.format(H.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    N = u
                        ? H.intl.format(H.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: j.Z.getArticleURL(W.BhN.BLOCKED_PAYMENTS),
                          })
                        : H.intl.format(H.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let v =
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
                ? (0, i.jsx)(p.zxk, {
                      variant: "primary",
                      text: H.intl.string(H.t.PDTjLC),
                      onClick: () => s(z.R.PREVIEW),
                  })
                : (0, i.jsx)(p.zxk, {
                      variant: "critical-primary",
                      text: l
                          ? H.intl.string(H.t["cY+Ooa"])
                          : H.intl.formatToPlainString(H.t["V3+Rpa"], {
                                planPremiumType: O.ZP.getDisplayPremiumType(n.planId),
                            }),
                      disabled: _,
                      onClick: async () => {
                          await q({
                              setHasError: C,
                              onClose: o,
                              premiumSubscription: n,
                              setIsCancelling: b,
                              analyticsLocations: P,
                              analyticsLocation: c,
                          });
                      },
                  }),
        I = (0, i.jsx)(m.zx, {
            "data-migration-pending": !0,
            look: m.zx.Looks.LINK,
            color: (0, d.ap)(E) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
            onClick: o,
            children: l ? H.intl.string(H.t.h9tkAA) : H.intl.string(H.t["ETE/oK"]),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l
                ? (0, i.jsx)(B.Z, {
                      premiumType: a,
                      className: X.cancellationHeader,
                      onClose: o,
                  })
                : (0, i.jsxs)(p.xBx, {
                      "data-migration-pending": !0,
                      separator: !1,
                      children: [
                          (0, i.jsx)(p.vwX, {
                              tag: p.RB0.H4,
                              children: H.intl.format(H.t.ZpiGy8, {
                                  planPremiumType: O.ZP.getDisplayPremiumType(n.planId),
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
                className: X.body,
                children: [
                    g
                        ? (0, i.jsx)(p.kzN, {
                              className: X.errorBlock,
                              children: H.intl.string(H.t["5mlOCQ"]),
                          })
                        : null,
                    (0, i.jsx)("div", { className: X.cancelImage }),
                    (0, i.jsx)("div", { children: N }),
                ],
            }),
            (0, i.jsxs)(p.mzw, {
                "data-migration-pending": !0,
                justify: h.Z.Justify.START,
                children: [v, I],
            }),
        ],
    });
}
function K(e) {
    var t, n;
    let { premiumSubscription: r } = e,
        { analyticsLocations: a } = (0, x.ZP)(),
        [s] = (0, N.ED)({
            subscriptionId: r.id,
            items: (0, O.Ue)(null != (n = null == (t = r.renewalMutations) ? void 0 : t.items) ? n : r.items),
            renewal: !0,
            analyticsLocations: a,
            analyticsLocation: b.Z.CANCEL_INVOICE_PREVIEW,
        }),
        o = (0, u.e7)([g.Z], () => g.Z.get(r.planId));
    if (null == s || null == o) return (0, i.jsx)(p.$jN, { className: X.loading });
    let { intervalType: l, intervalCount: c } = O.ZP.getIntervalForInvoice(s);
    return (0, i.jsxs)("div", {
        className: X.__invalid_bodyText,
        children: [
            (0, i.jsx)("div", {
                className: X.renewalInvoiceDate,
                children:
                    0 !== s.total
                        ? H.intl.format(H.t.ycyeBw, {
                              renewalDate: s.subscriptionPeriodStart,
                              rate: (0, P.og)((0, P.T4)(s.total, s.currency), l, c),
                          })
                        : H.intl.format(H.t["+y0Tj4"], { renewalDate: s.subscriptionPeriodStart }),
            }),
            (0, i.jsxs)(S.aO, {
                children: [
                    (0, i.jsx)(S.Z9, { children: H.intl.string(H.t.iqhIp6) }),
                    (0, i.jsx)(S.B1, {
                        label: H.intl.formatToPlainString(H.t.r3jVZm, { planName: O.ZP.getDisplayName(o.id) }),
                        value: (0, O.PK)(o),
                        className: X.invoiceCancelRow,
                    }),
                    (0, i.jsx)(S.UN, {}),
                    (0, i.jsx)(U.nd, {
                        premiumSubscription: r,
                        renewalInvoice: s,
                        isUpdate: !0,
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { premiumSubscription: t, premiumType: n, onBack: a, onClose: o, analyticsLocation: l } = e,
        [c, u] = r.useState(!1),
        [d, m] = r.useState(!1),
        { analyticsLocations: _ } = (0, x.ZP)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(B.Z, {
                premiumType: n,
                onClose: o,
            }),
            (0, i.jsxs)(p.hzk, {
                "data-migration-pending": !0,
                className: s()(X.previewStep, X.body),
                children: [
                    d
                        ? (0, i.jsx)(p.kzN, {
                              className: X.errorBlock,
                              children: H.intl.string(H.t["5mlOCQ"]),
                          })
                        : null,
                    (0, i.jsx)(K, { premiumSubscription: t }),
                ],
            }),
            (0, i.jsxs)(p.mzw, {
                "data-migration-pending": !0,
                align: h.Z.Align.CENTER,
                justify: h.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(p.zxk, {
                        variant: "critical-primary",
                        text: H.intl.format(H.t["V3+Rpa"], { planPremiumType: O.ZP.getDisplayPremiumType(t.planId) }),
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
function Q(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null == (t = (0, O.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status,
    };
}
function $(e) {
    var t, n, r;
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
        { enabled: o, discountPrimary: l } = (0, I.S)({ location: "Churn Modal" }),
        { enabled: c } = (0, T.P)({ location: "Churn Modal" });
    return (!s || c) && o
        ? (0, i.jsx)(
              w.I,
              ((n = V({}, e)),
              (r = r = { discountPrimary: l }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i);
                        }
                        return n;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              n),
          )
        : (0, i.jsx)(ee, V({}, e));
}
let ee = (e) => {
    var t;
    let n,
        { premiumSubscription: a, transitionState: s, onClose: l, analyticsLocations: u, analyticsLocation: _ } = e,
        { initialStep: y } = e,
        h = r.useRef(new o.qA()),
        [g, j] = r.useState(null),
        P = null == (t = (0, O.Af)(a)) ? void 0 : t.planId,
        N = null != P ? O.ZP.getPremiumType(P) : null;
    c()(null != N, "Should not be cancelling Nitro without premiumType");
    let I = (0, f.ZP)();
    r.useEffect(() => {
        C.default.track(W.rMx.CANCELLATION_FLOW_STARTED, Q(a));
    }, [a]);
    let T = N === Y.p9.TIER_0 || N === Y.p9.TIER_1 || N === Y.p9.TIER_2;
    null == y && (y = T ? z.R.WHAT_YOU_LOSE : z.R.CONFIRM);
    let { analyticsLocations: S } = (0, x.ZP)(u, b.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [w, L, U, B] = (0, F.q)(y, a, u),
        [q, K] = r.useState(null);
    (0, Z.w)(a, l, !1);
    let $ = (e) => {
            l(),
                C.default.track(
                    W.rMx.CANCELLATION_FLOW_STEP,
                    V(
                        {
                            from_step: z.O[e],
                            to_step: null,
                            step_duration_ms: Date.now() - U,
                            flow_duration_ms: Date.now() - B,
                            location_stack: u,
                        },
                        Q(a),
                    ),
                );
        },
        ee = (0, v.UV)(),
        { churnUserDiscountOffer: et, isFetchingChurnDiscountOffer: en } = (0, v.WR)(
            !ee || (null != a.canceledAt && w !== z.R.CONFIRM_DISCOUNT),
        ),
        ei = (0, R.Z)(),
        er = "US" === ei.ipCountryCode && "CA" === ei.ipSubdivisionCode;
    switch (w) {
        case z.R.PAUSE_SELECT:
            n = (0, i.jsx)(A.of, {
                premiumSubscription: a,
                premiumType: N,
                setStep: L,
                onClose: () => $(w),
                pauseDuration: q,
                setPauseDuration: K,
                footer: (0, i.jsxs)("div", {
                    className: X.whatYouLoseButtonContainer,
                    children: [
                        (0, i.jsx)(p.zxk, {
                            variant: "primary",
                            text: H.intl.string(H.t["3PatS0"]),
                            disabled: null === q,
                            onClick: () => {
                                0 === q ? L(z.R.WHAT_YOU_LOSE) : L(z.R.PAUSE_CONFIRM);
                            },
                        }),
                        (0, i.jsx)(m.zx, {
                            "data-migration-pending": !0,
                            look: m.zx.Looks.LINK,
                            color: (0, d.wj)(I) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
                            onClick: l,
                            children: H.intl.string(H.t.h9tkAA),
                        }),
                    ],
                }),
                analyticsLocation: _,
            });
            break;
        case z.R.PAUSE_CONFIRM:
            if (null == q) {
                let e = Error("No pause duration to set");
                throw (
                    ((0, E.q2)(e, {
                        extra: {
                            subscriptionId: a.id,
                            status: a.status,
                        },
                    }),
                    e)
                );
            }
            n = (0, i.jsx)(A.Sz, {
                premiumSubscription: a,
                premiumType: N,
                setStep: L,
                onClose: () => $(w),
                analyticsLocation: _,
                pauseDuration: q,
            });
            break;
        case z.R.WHAT_YOU_LOSE:
            n = (0, i.jsx)(M.Z, {
                premiumType: N,
                titleText: H.intl.string(H.t.PWq8TE),
                subtitleText: H.intl.format(H.t.nsGVzs, {}),
                subtitleClassName: void 0,
                footer: (0, i.jsxs)("div", {
                    className: X.whatYouLoseButtonContainer,
                    children: [
                        (0, i.jsx)(p.zxk, {
                            variant: "primary",
                            text: er ? H.intl.string(H.t.PfnxqK) : H.intl.string(H.t["3PatS0"]),
                            onClick: () => L(z.R.CONFIRM),
                        }),
                        (0, i.jsx)(m.zx, {
                            "data-migration-pending": !0,
                            look: m.zx.Looks.LINK,
                            color: (0, d.wj)(I) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
                            onClick: () => $(w),
                            children: H.intl.string(H.t.h9tkAA),
                        }),
                    ],
                }),
                onClose: () => $(w),
                onDiscountClaim: () => L(z.R.CONFIRM_DISCOUNT),
                onContinue: () => L(z.R.CONFIRM),
                isLoading: ee && en,
                churnUserDiscountOffer: et,
                analyticsLocations: S,
            });
            break;
        case z.R.CONFIRM:
            n = (0, i.jsx)(G, {
                premiumSubscription: a,
                premiumType: N,
                setStep: L,
                onClose: () => $(w),
                whatYouLoseExperienceEnabled: T,
                analyticsLocation: _,
            });
            break;
        case z.R.PREVIEW:
            n = (0, i.jsx)(J, {
                premiumSubscription: a,
                premiumType: N,
                onBack: () => L(z.R.CONFIRM),
                onClose: () => $(w),
                analyticsLocation: _,
            });
            break;
        case z.R.CONFIRM_DISCOUNT:
            n = (0, i.jsx)(D.Z, {
                premiumSubscription: a,
                premiumType: N,
                onClose: () => $(w),
                onConfirm: () => L(z.R.DISCOUNT_APPLIED),
                userDiscountOffer: et,
            });
            break;
        case z.R.DISCOUNT_APPLIED:
            n = (0, i.jsx)(k.D, {
                premiumSubscription: a,
                premiumType: N,
                onClose: () => $(w),
                confettiCanvas: g,
                userDiscountOffer: et,
            });
            break;
        default:
            throw Error("Unexpected step: ".concat(w));
    }
    return (0, i.jsxs)(x.Gt, {
        value: S,
        children: [
            (0, i.jsx)(o.O_, {
                ref: j,
                className: X.confettiCanvas,
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
