n.d(t, {
    $p: () => eN,
    cD: () => eP,
    LR: () => eb,
    yq: () => eS,
    U_: () => eE,
    Ct: () => ex,
    RO: () => eI,
    O8: () => eg,
});
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(855986),
    o = n(785007),
    u = n(331322),
    c = n(534514),
    d = n(834730),
    m = n(726656),
    p = n(463376),
    h = n(558620),
    C = n(516106),
    f = n(418200),
    E = n(222707),
    S = n(97352),
    g = n(45938),
    I = n(975571),
    y = n(722178),
    A = n(580630),
    P = n(881489),
    v = n(774962),
    x = n(371710),
    _ = n(163074),
    T = n(547902),
    b = n(810498),
    N = n(742655),
    j = n(841907),
    R = n(650583),
    O = n(452027),
    M = n(403581),
    L = n(646514),
    k = n(682901),
    w = n(50302),
    D = n(792996),
    U = n(318824);
let G = { presets: [1, 2, 3, 4], defaultCustomQuantity: 5 },
    F = { presets: [1, 3, 5, 10], defaultCustomQuantity: 20 };
function B(e) {
    return e?.interval === k.WT.MONTH ? F : G;
}
function H(e) {
    return null != e && e > 0 ? D.intl.formatToPlainString(w.default.rr3AQS, { percent: e }) : null;
}
function W(e) {
    return Number.isInteger(e) && e >= 1 && e <= 50;
}
function V(e) {
    let { label: t, savingsLabel: n, selected: i, labelId: r, savingsId: a } = e;
    return (0, l.jsxs)("span", {
        className: U.l_,
        children: [
            (0, l.jsx)(d.E, {
                id: r,
                tag: "span",
                variant: "body-sm/semibold",
                color: i ? "text-strong" : "text-default",
                children: t,
            }),
            null != n
                ? (0, l.jsx)(d.E, {
                      id: a,
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-feedback-positive",
                      children: n,
                  })
                : null,
        ],
    });
}
function Y(e) {
    let { amount: t, currency: n, selected: i, announce: r, id: a } = e;
    return (0, l.jsx)("span", {
        id: a,
        className: U.f$,
        "aria-live": r ? "polite" : void 0,
        children: (0, l.jsx)(d.E, {
            tag: "span",
            variant: "body-sm/semibold",
            color: i ? "text-strong" : "text-default",
            tabularNumbers: !0,
            children: (0, A.$g)(t, n),
        }),
    });
}
function K(e) {
    let { selectedPlanId: t, planOptions: n, unitPrice: r } = e,
        a = (0, s.yK)([S.A], () => n.map((e) => S.A.get(e))),
        {
            quantity: o,
            setQuantity: c,
            setSelectedPlanId: m,
            checkoutPriceOptions: p,
        } = (0, C.t4)((e) => ({
            quantity: e.quantity,
            setQuantity: e.setQuantity,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        h = a
            .filter((e) => null != e && (0, N.bM)(e.id))
            .map((e) => ({
                plan: e,
                label:
                    e.interval === k.WT.YEAR
                        ? D.intl.formatToPlainString(D.t.IfYQVC, { years: e.intervalCount })
                        : D.intl.formatToPlainString(D.t.erUSmA, { months: e.intervalCount }),
                savingsPercent: (0, y.L_)({ planId: e.id, isGift: !0, priceOptions: p, subscriptionPlan: e }),
            })),
        { presets: f, defaultCustomQuantity: E } = B(
            h.find((e) => {
                let { plan: n } = e;
                return n.id === t;
            })?.plan,
        ),
        g = !f.includes(o) && W(o),
        I = g ? o : E,
        [A, P] = i.useState(() => (f.includes(o) ? "preset" : "custom")),
        [v, x] = i.useState(() => String(I)),
        [_, T] = i.useState(I),
        [b, j] = i.useState(g),
        R = i.useId(),
        G = i.useId(),
        F = i.useId(),
        K = i.useId();
    function Z(e) {
        let { total: t, percentOff: n } = (0, N.YX)(r.amount, e);
        return { total: t, savingsLabel: H(n) };
    }
    let q = Z(_);
    function z(e) {
        (x(String(e)), T(e));
    }
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(O.D, {
                label: D.intl.string(w.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: U.bH,
                    children: h.map((e) => {
                        let { plan: n, label: i, savingsPercent: r } = e,
                            a = n.id === t,
                            s = H(r);
                        return (0, l.jsxs)(
                            "label",
                            {
                                className: U.Ap,
                                "data-selected": a,
                                children: [
                                    (0, l.jsx)("input", {
                                        className: U.Ts,
                                        type: "radio",
                                        name: R,
                                        value: n.id,
                                        checked: a,
                                        onChange: () =>
                                            (function (e) {
                                                if (e.id === t) return;
                                                m(e.id, { shouldUpdateQuantity: !1 });
                                                let n = B(e);
                                                n.presets.includes(o)
                                                    ? (P("preset"),
                                                      (!b || n.presets.includes(_)) &&
                                                          (z(n.defaultCustomQuantity), j(!1)))
                                                    : "preset" === A && (P("custom"), z(o), j(!1));
                                            })(n),
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", className: U.FC }),
                                    (0, l.jsx)(d.E, {
                                        tag: "span",
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: i,
                                    }),
                                    null != s
                                        ? (0, l.jsx)(d.E, {
                                              tag: "span",
                                              variant: "body-xs/semibold",
                                              color: "text-feedback-positive",
                                              className: U.eQ,
                                              children: s,
                                          })
                                        : null,
                                ],
                            },
                            n.id,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(O.D, {
                label: D.intl.string(w.default.H3pTAa),
                role: "group",
                children: (0, l.jsxs)("div", {
                    className: U._L,
                    children: [
                        f.map((e) => {
                            let t = "preset" === A && o === e,
                                n = Z(e);
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: U.Jy,
                                    onClick: () => {
                                        (P("preset"), c(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: U.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)(M.NitroWheelIcon, {
                                                size: "sm",
                                                color: L.A.colors.ICON_STRONG,
                                            }),
                                        }),
                                        (0, l.jsx)(V, {
                                            label: D.intl.formatToPlainString(w.default["AxON/M"], { giftCount: e }),
                                            savingsLabel: n.savingsLabel,
                                            selected: t,
                                        }),
                                        (0, l.jsx)(Y, { amount: n.total, currency: r.currency, selected: t }),
                                    ],
                                },
                                e,
                            );
                        }),
                        (0, l.jsxs)("label", {
                            className: U.r8,
                            "data-selected": "custom" === A,
                            onPointerUp: function () {
                                "custom" !== A && (P("custom"), c(_));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: U.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: v,
                                    "aria-labelledby": G,
                                    "aria-describedby": null != q.savingsLabel ? `${F} ${K}` : K,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            (P("custom"), j(!0), z(50), c(50));
                                            return;
                                        }
                                        x(t);
                                        let n = Number(t);
                                        W(n) && (P("custom"), j(!0), T(n), c(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(v);
                                        x(String(W(e) ? e : _));
                                    },
                                }),
                                (0, l.jsx)(V, {
                                    label: D.intl.string(w.default.jhNRIe),
                                    savingsLabel: q.savingsLabel,
                                    selected: "custom" === A,
                                    labelId: G,
                                    savingsId: F,
                                }),
                                (0, l.jsx)(Y, {
                                    id: K,
                                    amount: q.total,
                                    currency: r.currency,
                                    selected: "custom" === A,
                                    announce: "custom" === A,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var Z = n(503698),
    q = n.n(Z),
    z = n(778712),
    $ = n(123292),
    Q = n(103557),
    J = n(966327),
    X = n(7584),
    ee = n(427262),
    et = n(390755);
function en(e) {
    let { className: t, giftRecipient: n, isMessageAttached: r, customGiftMessage: a, setCustomGiftMessage: s } = e,
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            r && o.current?.focus();
        }, [r]),
        (0, l.jsx)("div", {
            className: t,
            children: (0, l.jsxs)(u.B, {
                gap: 8,
                children: [
                    (0, l.jsx)(d.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: D.intl.string(D.t.xFn72s),
                    }),
                    (0, l.jsxs)("div", {
                        className: et.Nr,
                        children: [
                            (0, l.jsxs)("div", {
                                className: et.MT,
                                children: [
                                    (0, l.jsx)(J.A, { user: n, size: z._3.SIZE_24 }),
                                    (0, l.jsxs)("div", {
                                        className: et.rG,
                                        children: [
                                            (0, l.jsx)(d.E, {
                                                variant: "body-md/medium",
                                                color: "text-default",
                                                lineClamp: 1,
                                                children: ee.Ay.getName(n),
                                            }),
                                            (0, l.jsx)(d.E, {
                                                variant: "body-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: ee.Ay.getUserTag(n),
                                            }),
                                        ],
                                    }),
                                    r
                                        ? (0, l.jsx)($.Q, {
                                              variant: "critical",
                                              text: D.intl.string(D.t.MhoLHy),
                                              onClick: () => s(void 0),
                                          })
                                        : (0, l.jsx)($.Q, {
                                              text: D.intl.string(D.t.RoS6FI),
                                              onClick: () => s(D.intl.string(D.t.ZkOo1U)),
                                          }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: q()(et.ob, r && et.F8),
                                children: (0, l.jsx)("div", {
                                    className: et.GM,
                                    inert: !r,
                                    children: (0, l.jsx)("div", {
                                        className: et.BK,
                                        children: (0, l.jsx)(Q.f, {
                                            label: D.intl.string(D.t.B3miE8),
                                            hideLabel: !0,
                                            value: a ?? "",
                                            onChange: (e) => s(X.Ay.translateInlineEmojiToSurrogates(e)),
                                            maxLength: 190,
                                            showCharacterCount: !0,
                                            inputRef: o,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var el = n(477421),
    ei = n(35587),
    er = n(511484),
    ea = n(735164),
    es = n(428212);
function eo(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: r,
            intervalCount: a = 1,
            isPrepaidPaymentSource: s = !1,
        } = e,
        o = (0, A.$g)(t, n),
        u = null;
    return (
        i === k.WT.YEAR
            ? (u = D.intl.format(D.t["3U719t"], { price: o }))
            : i === k.WT.MONTH && 1 === a
              ? (u = D.intl.format(D.t.NkR7BU, { price: o }))
              : i === k.WT.MONTH && a > 1 && (u = D.intl.format(D.t.CNAGg4, { price: o, intervalCount: a })),
        (0, l.jsx)("div", {
            className: q()(es.S, r),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || s ? (0, l.jsx)("strong", { children: o }) : u,
        })
    );
}
var eu = n(781949),
    ec = n(968060),
    ed = n(274076),
    em = n(813267),
    ep = n(948388),
    eh = n(652215);
n(26279);
var eC = n(818348),
    ef = n(305828);
function eE(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function eS(e, t) {
    let n = D.intl.string(D.t.BYa62u),
        l = D.intl.string(D.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case k.WT.YEAR:
                    return n;
                case k.WT.MONTH:
                default:
                    return l;
            }
        })(),
        r = e.skuId;
    switch (t) {
        case k.pe.TIER_0:
            switch (r) {
                case k.pe.TIER_1:
                    return D.intl.string(D.t.q6mxDS);
                case k.pe.TIER_2:
                    return D.intl.string(D.t.seZVS0);
                default:
                    return i;
            }
        case k.pe.TIER_1:
            switch (r) {
                case k.pe.TIER_0:
                    return D.intl.string(D.t["7+u2zg"]);
                case k.pe.TIER_2:
                    return D.intl.string(D.t.NG2qcc);
                default:
                    return i;
            }
        case k.pe.TIER_2:
            switch (r) {
                case k.pe.TIER_0:
                case k.pe.TIER_1:
                    return D.intl.string(D.t["eB0/w9"]);
                case k.pe.TIER_2:
                    return e.interval === k.WT.MONTH
                        ? D.intl.formatToPlainString(D.t.RqUv86, { numFreeGuildSubscriptions: 2 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function eg() {
    let { userTrialOffer: e } = (0, p.i)(),
        t = e?.subscriptionTrial,
        { daysCount: n, copy: l } = i.useMemo(
            () =>
                t?.interval === k.WT.DAY
                    ? t?.intervalCount > 7
                        ? { daysCount: 14, copy: D.intl.string(D.t.Z1V2cs) }
                        : { daysCount: 7, copy: D.intl.string(D.t.MI1rHs) }
                    : { daysCount: 30, copy: D.intl.string(D.t["+S5lrV"]) },
            [t],
        );
    return { daysCount: n, copy: l, userTrialOffer: e };
}
function eI(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: m,
            activeSubscription: E,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: I, isEligibleForTrial: A, discountOffer: P } = (0, p.i)(),
        v = (0, er.YJ)(P),
        {
            isGift: x,
            giftRecipient: _,
            selectedGiftStyle: T,
            customGiftMessage: N,
            setCustomGiftMessage: R,
            claimableRewards: O,
            setSelectedGiftingPromotionRewards: M,
        } = (0, f.Pv)(),
        L = (0, h.A)(),
        k = (0, C.t4)((e) => e.getIsRecurringGiftCheckout());
    (0, j.r)(k);
    let w = (0, b.kz)(L, x && !k && (0, g.Ik)(_), O);
    a()(void 0 !== E, "should not be undefined");
    let [D, U] = (0, s.yK)([S.A], () => [null != E ? S.A.get(E.planId) : null, null != t ? S.A.get(t) : null]),
        G = I?.subscriptionTrial,
        F = I?.isReferralTrial === !0,
        B = (0, ei.Sq)() && !F,
        H = U ?? L,
        W = n ?? m;
    a()(null != W, "Price option has to be set");
    let V = P?.discount?.planIds,
        Y = null != P && l.some((e) => V?.includes(e)) && null != P.discount,
        K = null != v && l.includes(v) ? (0, y.y8)(v, !1, x, W) : void 0,
        Z = null != H ? H.id : void 0,
        q = null != Z && l.includes(Z);
    (i.useEffect(() => {
        if (q) return void d(Z, { shouldUpdateQuantity: !1 });
        let e = !x && null != v && l.includes(v) ? v : null;
        if (null == D || x) d(e ?? l[0]);
        else if (null != D) {
            let e = l.find((e) => e !== D.id);
            null != e && d(e);
        }
    }, [q, x, l, D, d, Z, v]),
        i.useEffect(() => {
            w && null != O && O.length > 0 && M(O);
        }, [O, M, w]));
    let { ref: z, ...$ } = (0, o._u)(),
        Q = H?.id != null ? (0, y.y8)(H.id, !1, x, W) : void 0,
        { ipCountryCode: J } = (0, el.A)(),
        X = "HR" === J && null != Q && Q.currency === eC.Yr.EUR,
        ee = (0, y.J$)(W.paymentSourceId),
        et = !x && (Y || (null != G && A && null != r)),
        { copy: en } = eg();
    return {
        skuId: c,
        selectedPlan: H,
        selectedPlanPrice: Q,
        premiumSubscriptionPlan: D,
        premiumSubscription: E,
        thePriceOptions: W,
        shouldShowTrialOrDiscountLayout: et,
        shouldShowHRKEuroWarning: X,
        shouldShowTotalInSubscriptionFlow: !A && !Y && q && u,
        canContinue: q,
        isPrepaid: ee,
        radioGroupRef: z,
        radioGroupProps: $,
        isGift: x,
        giftRecipient: _,
        customGiftMessage: N,
        setCustomGiftMessage: R,
        selectedGiftStyle: T,
        isEligibleForBOGOPromotion: B,
        isEligibleForTrial: A,
        userTrialOffer: I,
        trialPeriodCopy: en,
        isPlansEligibleForDiscount: Y,
        discountedPlanRegularPrice: K,
    };
}
function ey(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: ef.T }),
            (0, l.jsx)(ea.Sd, {
                label: D.intl.string(D.t.txajQG),
                value: (0, l.jsx)(eo, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: ef.M3,
            }),
        ],
    });
}
function eA(e) {
    let {
            giftRecipient: t,
            customGiftMessage: n,
            setCustomGiftMessage: i,
            selectedGiftStyle: r,
            isPrepaid: a,
            canContinue: s,
            selectedPlan: o,
            selectedPlanPrice: d,
            useCompactGiftComponents: m,
            isRecurringGiftEnabled: p,
            quantityPresetsSelector: h,
            showTotal: f,
            switchPlanSelectComponent: E,
            warningComponent: S,
        } = e,
        I = (0, C.t4)((e) => e.hasClearedDefaultGiftMessage);
    function y(e) {
        return (0, l.jsxs)(u.B, {
            gap: 8,
            children: [
                (0, l.jsx)(c.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: D.intl.string(D.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return null != h
        ? (0, l.jsxs)(l.Fragment, { children: [h, S] })
        : (0, g.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: ef.mh,
                children: [
                    (0, l.jsx)("div", { className: ef.MU, children: null != r && (0, l.jsx)(ed.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: ef.Tc,
                        children: [
                            p && null != t && null != i
                                ? (0, l.jsx)(en, {
                                      className: m ? ef.KW : ef.xp,
                                      giftRecipient: t,
                                      isMessageAttached: I && null != n,
                                      customGiftMessage: n,
                                      setCustomGiftMessage: i,
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(ep.Z, { className: m ? ef.KW : void 0, giftRecipient: t }),
                                          (function () {
                                              if ((0, g.lo)(t) === g.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                                  return (0, l.jsx)(ec.A, {
                                                      className: ef.iX,
                                                      innerClassName: ef.pt,
                                                      onTextChange: (e) => i(e),
                                                      pendingText: n,
                                                      currentText: n,
                                                  });
                                          })(),
                                      ],
                                  }),
                            y(E),
                            S,
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: ef.Du,
                children: [
                    (0, l.jsx)(ep.Z, { className: m ? ef.KW : void 0, giftRecipient: t }),
                    y(E),
                    s &&
                        f &&
                        null != o &&
                        null != d &&
                        (0, l.jsx)(ey, { selectedPlan: o, selectedPlanPrice: d, intervalType: null, isPrepaid: a }),
                    S,
                ],
            });
}
function eP(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === k.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [k.gD.PREMIUM_YEAR_TIER_0, k.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function ev(e) {
    let {
            isPrepaid: t,
            planOptions: n,
            radioGroupRef: r,
            selectedPlan: a,
            radioGroupProps: s,
            shouldShowTrialOrDiscountLayout: o,
            thePriceOptions: u,
            isPlansEligibleForDiscount: c,
            isEligibleForTrial: d,
            isRecurringGiftEnabled: m,
        } = e,
        { currentPremiumSubscriptionForCheckout: p } = (0, C.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        { onKeyDown: h, ...f } = s,
        E = i.useCallback(
            (e) => {
                var t;
                if (!m) return void h(e);
                let n =
                    (t = e.key) === R.dh.ARROW_DOWN || t === R.dh.ARROW_RIGHT
                        ? 1
                        : t === R.dh.ARROW_UP || t === R.dh.ARROW_LEFT
                          ? -1
                          : 0;
                if (0 === n) return;
                let l = e.currentTarget,
                    i = e.target.closest('[role="radio"]'),
                    r = Array.from(l.querySelectorAll('[role="radio"]')),
                    a = null != i ? r.indexOf(i) : -1;
                a < 0 ||
                    (e.preventDefault(),
                    e.stopPropagation(),
                    r[(a + n + r.length) % r.length].click(),
                    requestAnimationFrame(() => l.querySelector('[role="radio"][aria-checked="true"]')?.focus()));
            },
            [m, h],
        ),
        S = i.useMemo(() => (m ? (0, x.RG)(n) : n), [m, n]),
        g = i.useMemo(
            () =>
                S.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = eP(p, n);
                    return (0, l.jsx)(
                        em.Ay,
                        {
                            planId: n,
                            selected: a?.id === n,
                            isCurrentPlan: i,
                            disabled: e.disabled || r,
                            premiumSubscription: p,
                            isPrepaid: t,
                            priceOptions: u,
                            shouldShowTrialOrDiscountLayout: o,
                            isEligibleForDiscount: c,
                            isEligibleForTrial: d,
                            isRecurringGiftEnabled: m,
                        },
                        n,
                    );
                }),
            [e.disabled, S, a, p, t, u, o, c, d, m],
        );
    return (0, l.jsx)("div", {
        ref: r,
        ...f,
        "aria-label": m ? D.intl.string(D.t["3E5hXj"]) : void 0,
        onKeyDown: E,
        children: g,
    });
}
function ex(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.isReferralTrial === !0;
    return null == n
        ? null
        : i
          ? D.intl.format(D.t.nG95hA, { endDate: n })
          : D.intl.format(D.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function e_(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(m.A, {
              message: D.intl.formatToPlainString(D.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, A.$g)(7.5345 * n.amount, eC.Yr.HRK),
              }),
          })
        : null;
}
function eT() {
    let e = (0, v.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(m.A, {
        message: e
            ? D.intl.string(D.t.jHqrJW)
            : D.intl.format(D.t.Om31w8, { documentationLink: I.A.getArticleURL(eh.MVz.LOCALIZED_PRICING) }),
    });
}
function eb(e) {
    let {
        selectedPlan: t,
        selectedPlanPrice: n,
        isPrepaid: i,
        shouldShowHRKEuroWarning: r,
        shouldShowTrialOrDiscountLayout: a,
        showTotal: s,
        shouldShowTotalInSubscriptionFlow: o,
        previewTotalSectionClassName: u,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            o &&
                null != t &&
                null != n &&
                (0, l.jsx)(ey, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            e_({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(eT, {}),
        ],
    });
}
function eN(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: r,
            priceOptions: a,
            planOptions: s,
            subscriptionPeriodEnd: o,
            showTotal: u = !0,
            useCompactGiftComponents: m,
        } = e,
        {
            skuId: p,
            selectedPlan: h,
            premiumSubscription: S,
            premiumSubscriptionPlan: g,
            isEligibleForBOGOPromotion: I,
            isGift: y,
            thePriceOptions: v,
            isEligibleForTrial: b,
            giftRecipient: j,
            customGiftMessage: R,
            setCustomGiftMessage: O,
            selectedGiftStyle: M,
            isPlansEligibleForDiscount: L,
            discountedPlanRegularPrice: w,
            userTrialOffer: U,
            shouldShowTrialOrDiscountLayout: G,
            isPrepaid: F,
            radioGroupRef: B,
            radioGroupProps: H,
            selectedPlanPrice: W,
            shouldShowHRKEuroWarning: V,
            shouldShowTotalInSubscriptionFlow: Y,
            canContinue: Z,
            trialPeriodCopy: q,
        } = eI({ selectedPlanId: n, priceOptions: a, planOptions: s, subscriptionPeriodEnd: o, showTotal: u }),
        { discountAmountOff: z, applicablePlan: $, discountOffer: Q } = (0, C.t4)((e) => e.premiumDiscountInfo),
        J =
            (0, T.u)({ location: "PremiumSwitchPlanSelectBody" }) &&
            (0, x.Cu)({ isGift: y, giftRecipient: j, planOptions: s });
    !(function (e) {
        let { hasClearedDefaultGiftMessage: t, setHasClearedDefaultGiftMessage: n } = (0, C.t4)((e) => ({
                hasClearedDefaultGiftMessage: e.hasClearedDefaultGiftMessage,
                setHasClearedDefaultGiftMessage: e.setHasClearedDefaultGiftMessage,
            })),
            { setCustomGiftMessage: l } = (0, f.Pv)();
        i.useEffect(() => {
            e && !t && (n(!0), l?.(void 0));
        }, [t, e, l, n]);
    })(J);
    let X = (0, P.ds)(),
        { enabled: ee } = _.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        et = (0, N.MW)({ isGift: y, giftRecipient: j, selectedPlanId: h?.id });
    function en() {
        return (0, l.jsx)(ev, {
            disabled: t,
            planOptions: s,
            radioGroupRef: B,
            radioGroupProps: H,
            isGift: y,
            isPrepaid: F,
            premiumSubscription: S,
            selectedPlan: h,
            thePriceOptions: v,
            shouldShowTrialOrDiscountLayout: G,
            isEligibleForTrial: b,
            isPlansEligibleForDiscount: L,
            isRecurringGiftEnabled: J,
        });
    }
    let { showFractionalPremiumBanner: el, fractionalPremiumInfo: ei } = (0, E._V)({
        premiumSubscription: S,
        selectedPlanId: n,
        planGroup: r,
        isGift: y,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (y)
        return (0, l.jsx)(eA, {
            giftRecipient: j,
            customGiftMessage: R,
            setCustomGiftMessage: O,
            selectedGiftStyle: M,
            isPrepaid: F,
            canContinue: Z,
            selectedPlan: h,
            selectedPlanPrice: W,
            useCompactGiftComponents: m,
            isRecurringGiftEnabled: J,
            quantityPresetsSelector:
                et && ee && null != h && null != W
                    ? (0, l.jsx)(K, { selectedPlanId: h.id, planOptions: s, unitPrice: W })
                    : null,
            showTotal: u,
            switchPlanSelectComponent: en(),
            warningComponent: e_({ shouldShowHRKEuroWarning: V, selectedPlanPrice: W }),
        });
    let er = !(b && el && !X),
        ea = eE(g, { isEligibleForBOGOPromotion: I });
    return (0, l.jsxs)("div", {
        children: [
            el &&
                !X &&
                (0, l.jsx)(eu.vi, {
                    fractionalPremiumInfo: ei,
                    enablePremiumBrandRefresh: !0,
                    variant: b ? eu.uA.TRIAL : void 0,
                    trialPeriod: b ? q : void 0,
                    trialEnd: b ? o : void 0,
                }),
            ea &&
                !el &&
                (0, l.jsx)(d.E, {
                    variant: "body-md/medium",
                    color: "interactive-text-default",
                    className: ef.G3,
                    children: eS(g, p),
                }),
            er &&
                (function (e, t, i) {
                    if (!G)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: ef.VZ,
                            children: D.intl.string(D.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    className: ef.Tz,
                                    children: ex(e, { subscriptionPeriodEnd: o, trialPeriodCopy: q }),
                                }),
                                (0, l.jsx)("hr", { className: ef.RA }),
                            ],
                        });
                    if (i && null != z && null != w && null != $ && n === $) {
                        let e = h?.interval === k.WT.YEAR,
                            t = (0, A.$g)(w.amount - z, w.currency),
                            n = (0, A.$g)(w.amount, w.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    className: ef.Tz,
                                    children: e
                                        ? D.intl.format(D.t.ofweWu, {
                                              numYears: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : D.intl.format(D.t["nG7g/E"], {
                                              numMonths: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: ef.RA }),
                            ],
                        });
                    }
                })(U, b, L),
            en(),
            eb({
                selectedPlan: h,
                selectedPlanPrice: W,
                isPrepaid: F,
                shouldShowHRKEuroWarning: V,
                shouldShowTrialOrDiscountLayout: G,
                showTotal: u,
                shouldShowTotalInSubscriptionFlow: Y,
            }),
        ],
    });
}
