n.d(t, { Ay: () => w, gS: () => k, O7: () => M });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    u = n(118751),
    c = n(855986),
    d = n(834730),
    m = n(150934),
    p = n(939249),
    h = n(516106),
    C = n(418200),
    f = n(773669),
    E = n(97352),
    S = n(45938),
    g = n(879610),
    y = n(580630),
    I = n(371710),
    A = n(529412),
    P = n(742655),
    v = n(682901),
    x = n(50302),
    _ = n(792996),
    T = n(771871),
    b = n(574892);
function N(e) {
    let {
            planId: t,
            subscriptionPlan: n,
            planLabel: r,
            priceSubtext: s,
            selected: o,
            disabled: u,
            onSelect: c,
            children: m,
        } = e,
        {
            setSelectedPlanId: f,
            isRecurringGift: E,
            setIsRecurringGift: S,
        } = (0, h.t4)((e) => ({
            setSelectedPlanId: e.setSelectedPlanId,
            isRecurringGift: e.isRecurringGift,
            setIsRecurringGift: e.setIsRecurringGift,
        })),
        { setSelectedGiftingPromotionRewards: g } = (0, C.Pv)(),
        y = n.interval === v.WT.YEAR ? x.default.rstMwN : x.default.Vb8FaC,
        I = i.useMemo(
            () => [
                { isRecurring: !0, label: y },
                { isRecurring: !1, label: x.default["hs/Nr+"] },
            ],
            [y],
        ),
        A = i.useCallback(
            (e) => {
                (f(t), S(e), e && g([]));
            },
            [t, f, S, g],
        );
    return o
        ? (0, l.jsxs)("div", {
              className: a()(b.Gb, b.wH),
              children: [
                  m,
                  (0, l.jsx)("div", {
                      className: b.Hg,
                      children: I.map((e) => {
                          let { isRecurring: t, label: n } = e,
                              i = E === t;
                          return (0, l.jsxs)(
                              p.D,
                              {
                                  role: "radio",
                                  "aria-checked": i,
                                  "aria-label": _.intl.formatToPlainString(x.default.PR7GrT, {
                                      plan: r,
                                      option: _.intl.string(n),
                                  }),
                                  tabIndex: i ? 0 : -1,
                                  className: b.Mg,
                                  onClick: () => A(t),
                                  children: [
                                      (0, l.jsx)(T.T, { disabled: u, checked: i }),
                                      (0, l.jsx)(d.E, { variant: "body-sm/medium", children: _.intl.string(n) }),
                                  ],
                              },
                              String(t),
                          );
                      }),
                  }),
              ],
          })
        : (0, l.jsx)(p.D, {
              role: "radio",
              "aria-checked": !1,
              "aria-label": _.intl.formatToPlainString(x.default.nRS0N2, { plan: r, price: s }),
              tabIndex: -1,
              focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
              onClick: c,
              className: b.Gb,
              children: m,
          });
}
var j = n(35587),
    R = n(387278),
    O = n(268431);
function M(e, t) {
    let n = e.interval === v.WT.YEAR ? _.t.ECT4A5 : _.t.v9QeON;
    return _.intl.format(n, { price: (0, y.$g)(t.amount, t.currency) });
}
function L(e) {
    return { type: "badge", textBadgeVariant: "body-sm/medium", text: e };
}
function k(e, t, n) {
    let {
            userLocale: l,
            isEligibleForBOGOPromotion: i,
            shouldShowSavingsPercent: r,
            isGift: a,
            planId: s,
            savingsPercent: o,
            priceOptions: c,
            isEligibleForTrial: d,
        } = n,
        m = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== v.gD.PREMIUM_MONTH_TIER_2 ? null : L(_.intl.string(_.t.iQTfWx));
    if (null != t && (t.interval !== v.WT.YEAR || null == e) && !(r && !m)) return null;
    if (
        null != t &&
        !m &&
        (0, R.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: d ?? !1 })
    ) {
        let e = (0, R.vK)(t, a, c);
        return null != e ? L(e) : null;
    }
    return null != t && t.interval === v.WT.YEAR && null != e
        ? _.intl.string(_.t["122kWB"])
        : r && !m && null != o
          ? L(_.intl.format(_.t.IAybsG, { discount: (0, u.l9)(l, o / 100) }))
          : null;
}
function w(e) {
    let t,
        n,
        r,
        {
            premiumSubscription: s,
            planId: u,
            selected: T,
            priceOptions: b,
            isPrepaid: R,
            shouldShowTrialOrDiscountLayout: L,
            isEligibleForDiscount: w,
            isEligibleForTrial: D,
            isCurrentPlan: U,
            disabled: G,
            isRecurringGiftEnabled: F,
        } = e,
        B = (0, c.bG)([f.default], () => f.default.locale),
        {
            discountInfo: H,
            setSelectedPlanId: W,
            setIsRecurringGift: V,
            isGift: Y,
        } = (0, h.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            setIsRecurringGift: e.setIsRecurringGift,
            isGift: e.isGift,
        })),
        { giftRecipient: K } = (0, C.Pv)(),
        q = Y && (0, S.Ik)(K),
        { discountOffer: Z, discountAmountOff: z, applicablePlan: $ } = H,
        Q = (0, c.bG)([E.A], () => E.A.get(u));
    o()(null != Q, "Missing subscriptionPlan");
    let J = (0, g.m6)(Q.id),
        X = q && J === v.PremiumTypes.TIER_2,
        ee = (0, A.qi)({ location: `PremiumSwitchPlanSelectOption${X ? "" : "-DISABLED"}` }),
        et = q && (!X || !ee || T),
        en = (0, j.Sq)(),
        el = (0, g.L_)({ planId: u, isGift: Y, priceOptions: b, subscriptionPlan: Q }),
        ei = (0, g.y8)(u, !1, Y, b),
        er = null != el && !L,
        ea = i.useCallback(() => {
            let e = k(s, Q, {
                userLocale: B,
                isEligibleForBOGOPromotion: en,
                shouldShowSavingsPercent: er,
                isGift: Y,
                planId: u,
                savingsPercent: el,
                priceOptions: b,
                isEligibleForTrial: D,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: O.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(d.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: O.kP,
                        children: e.text,
                    }))
                  : null;
        }, [B, en, Q, s, er, Y, u, el, b, D]),
        es = i.useMemo(
            () => (0, g.D8)(Q.interval, Y, R, Q.intervalCount, q, J),
            [Q.interval, Q.intervalCount, Y, R, q, J],
        ),
        eo = F && q && (0, I.dI)(u),
        eu =
            ((t = (0, h.t4)((e) => e.isRecurringGift)),
            (n = T && t),
            (r = Q.interval === v.WT.YEAR),
            {
                priceSubtext: n
                    ? _.intl.string(x.default["0llBr2"])
                    : _.intl.formatToPlainString(_.t.ori2Jm, { currencyAmount: (0, y.$g)(ei.amount, ei.currency) }),
                priceInterval: n ? _.intl.string(r ? x.default.mqaMxh : x.default.JUUvJw) : null,
            }),
        ec = null != $ && u === $;
    function ed() {
        (G || T || W(u, { shouldUpdateQuantity: !(0, P.bM)(u) }), eo || V(!1));
    }
    let em = L
            ? _.intl.format(_.t.hXcaLT, {
                  price:
                      w && null != z && ec
                          ? (0, y.$g)(ei.amount - z, ei.currency)
                          : D
                            ? (0, y.$g)(0, ei.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, y.$g)(ei.amount, ei.currency),
              })
            : (0, y.$g)(ei.amount, ei.currency),
        ep = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(O.XM, { [O.PA]: G }),
                    children: [
                        (0, l.jsxs)("div", {
                            className: O.l,
                            children: [
                                !q &&
                                    (0, l.jsx)("div", {
                                        className: O.E2,
                                        children: (0, l.jsx)(m.S, {
                                            checked: T,
                                            value: T,
                                            label: "",
                                            description: "",
                                            onChange: ed,
                                        }),
                                    }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: a()(O.Gl, { [O.h4]: T || q, [O.ox]: L && (T || q) }),
                                            children: [es, q && ea()],
                                        }),
                                        et &&
                                            (0, l.jsx)("div", {
                                                className: O._R,
                                                children: eo
                                                    ? eu.priceSubtext
                                                    : _.intl.format(_.t.ori2Jm, {
                                                          currencyAmount: (0, y.$g)(ei.amount, ei.currency),
                                                      }),
                                            }),
                                    ],
                                }),
                                U &&
                                    (0, l.jsxs)("span", {
                                        className: O.bq,
                                        children: ["(", _.intl.string(_.t.ymSxhy), ")"],
                                    }),
                                !q && ea(),
                            ],
                        }),
                        L
                            ? (0, l.jsx)("div", { className: a()({ [O.kb]: T }), children: em })
                            : (0, l.jsxs)("div", {
                                  className: a()({ [O.h4]: T || q }),
                                  children: [
                                      em,
                                      eo &&
                                          null != eu.priceInterval &&
                                          (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  " ",
                                                  (0, l.jsx)(d.E, {
                                                      tag: "span",
                                                      variant: "body-md/medium",
                                                      color: "text-muted",
                                                      children: eu.priceInterval,
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                    ],
                }),
                L &&
                    (0, l.jsx)("div", {
                        className: O.hB,
                        children: (0, l.jsx)(d.E, {
                            variant: "body-md/normal",
                            color: T ? "text-default" : "interactive-text-default",
                            className: a()(O.Ub, { [O.sw]: w || D }),
                            children: (function (e, t) {
                                let {
                                    price: n,
                                    isEligibleForDiscount: l,
                                    isEligibleForTrial: i,
                                    discountAmountOff: r,
                                    discountOffer: a,
                                    isDiscountApplicableToPlan: s,
                                    savingsPercent: o,
                                } = t;
                                return l && null != r && s
                                    ? e.interval === v.WT.YEAR
                                        ? _.intl.format(_.t["EQmTl+"], {
                                              numYears: a?.discount.intervalCount ?? 1,
                                              regularPrice: (0, y.$g)(n.amount, n.currency),
                                          })
                                        : _.intl.format(_.t["VeE/4E"], {
                                              numMonths: a?.discount.intervalCount ?? 1,
                                              discountedPrice: (0, y.$g)(n.amount - r, n.currency),
                                              regularPrice: (0, y.$g)(n.amount, n.currency),
                                          })
                                    : i
                                      ? M(e, n)
                                      : e.interval === v.WT.YEAR
                                        ? _.intl.formatToPlainString(_.t.rtLTJP, { percent: o ?? "" })
                                        : null;
                            })(Q, {
                                price: ei,
                                isEligibleForDiscount: w,
                                isEligibleForTrial: D,
                                discountAmountOff: z,
                                discountOffer: Z,
                                isDiscountApplicableToPlan: ec,
                                savingsPercent: el,
                            }),
                        }),
                    }),
            ],
        });
    return eo
        ? (0, l.jsx)(N, {
              planId: u,
              subscriptionPlan: Q,
              planLabel: es,
              priceSubtext: eu.priceSubtext,
              selected: T,
              disabled: G,
              onSelect: ed,
              children: (0, l.jsx)("div", { className: a()(O.G_, O.S4), children: ep }),
          })
        : (0, l.jsx)(p.D, {
              role: "radio",
              "aria-checked": T,
              tabIndex: T ? 0 : -1,
              focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
              onClick: ed,
              className: a()(O.G_, { [O.vW]: q && T, [O.Gb]: q }),
              children: ep,
          });
}
