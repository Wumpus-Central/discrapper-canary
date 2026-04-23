n.d(t, { Ay: () => S, O7: () => y, gS: () => g });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(284009),
    s = n.n(l),
    d = n(17928),
    u = n(834730),
    c = n(939249),
    _ = n(150934),
    p = n(937008),
    C = n(97352),
    h = n(252424),
    E = n(927578),
    m = n(580630),
    A = n(788868),
    I = n(985018),
    T = n(672305);
let y = (e, t) => {
        let n = e.interval === A.WT.YEAR ? I.t.ECT4A5 : I.t.v9QeON;
        return I.intl.format(n, { price: (0, m.$g)(t.amount, t.currency) });
    },
    g = (e, t, n) => {
        let {
                userLocale: r,
                isEligibleForBOGOPromotion: a,
                shouldShowSavingsPercent: i,
                isGift: o,
                planId: l,
                savingsPercent: s,
            } = n,
            d = null != e && (e.planId === l || (null != t && e.planId === t.id));
        return a
            ? o || l !== A.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: I.intl.string(I.t.iQTfWx) }
            : null == t || (t.interval === A.WT.YEAR && null != e) || (i && !d)
              ? null != t && t.interval === A.WT.YEAR && null != e
                  ? I.intl.string(I.t["122kWB"])
                  : i && !d && null != s
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: I.intl.format(I.t.IAybsG, { discount: (0, h.l9)(r, s / 100) }),
                      }
                    : null
              : null;
    };
function S(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: i,
            selectPlan: l,
            selected: h,
            priceOptions: S,
            isPrepaid: N,
            isCustomGift: f,
            shouldUseCalculatedDiscount: R,
            shouldShowUpdatedPaymentModal: L,
            discountOffer: O,
            discountAmountOff: P,
            isEligibleForDiscount: b,
            isEligibleForBOGOPromotion: M,
            isEligibleForTrial: x,
            isCurrentPlan: v,
            disabled: U,
        } = e,
        { isGift: D } = (0, p.Pv)(),
        G = (0, d.bG)([C.A], () => C.A.get(i));
    s()(null != G, "Missing subscriptionPlan");
    let j = (0, E.L_)({ planId: i, shouldUseCalculatedDiscount: R, isGift: D, priceOptions: S, subscriptionPlan: G }),
        w = (0, E.y8)(i, !1, D, S),
        B = null != j && !L,
        F = a.useCallback(() => {
            let e = g(n, G, {
                userLocale: t,
                isEligibleForBOGOPromotion: M,
                shouldShowSavingsPercent: B,
                isGift: D,
                planId: i,
                savingsPercent: j,
            });
            return "string" == typeof e
                ? (0, r.jsxs)("span", { className: T.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, r.jsx)(u.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: T.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, M, G, n, B, D, i, j]),
        k = (0, E.m6)(G.id),
        V = a.useMemo(
            () => (0, E.D8)(G.interval, D, N, G.intervalCount, f, k),
            [G.interval, G.intervalCount, D, N, f, k],
        ),
        H = () => {
            U || l(i);
        },
        K = L
            ? I.intl.format(I.t.hXcaLT, {
                  price:
                      b && null != P && G.interval === A.WT.MONTH
                          ? (0, m.$g)(w.amount - P, w.currency)
                          : x
                            ? (0, m.$g)(0, w.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, m.$g)(w.amount, w.currency),
              })
            : (0, m.$g)(w.amount, w.currency);
    return (0, r.jsxs)(c.D, {
        role: f ? "menuitem" : "radio",
        "aria-checked": h,
        tabIndex: f || h ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: H,
        className: o()(T.G_, { [T.vW]: f && h, [T.Gb]: f }),
        children: [
            (0, r.jsxs)("div", {
                className: o()(T.XM, { [T.PA]: U }),
                children: [
                    (0, r.jsxs)("div", {
                        className: T.l,
                        children: [
                            !f &&
                                (0, r.jsx)("div", {
                                    className: T.E2,
                                    children: (0, r.jsx)(_.S, {
                                        checked: h,
                                        value: h,
                                        label: "",
                                        description: "",
                                        onChange: H,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: o()(T.Gl, { [T.h4]: h || f, [T.ox]: L && (h || f) }),
                                        children: [V, f && F()],
                                    }),
                                    f &&
                                        (0, r.jsx)("div", {
                                            className: T._R,
                                            children: I.intl.format(I.t.ori2Jm, {
                                                currencyAmount: (0, m.$g)(w.amount, w.currency),
                                            }),
                                        }),
                                ],
                            }),
                            v &&
                                (0, r.jsxs)("span", {
                                    className: T.bq,
                                    children: ["(", I.intl.string(I.t.ymSxhy), ")"],
                                }),
                            !f && F(),
                        ],
                    }),
                    L
                        ? (0, r.jsx)("div", { className: o()({ [T.kb]: h }), children: K })
                        : (0, r.jsx)("div", { className: o()({ [T.h4]: h || f }), children: K }),
                ],
            }),
            L &&
                (0, r.jsx)("div", {
                    className: T.hB,
                    children: (0, r.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: h ? "text-default" : "interactive-text-default",
                        className: o()(T.Ub, { [T.sw]: b || x }),
                        children: ((e, t) => {
                            let {
                                price: n,
                                isEligibleForDiscount: r,
                                isEligibleForTrial: a,
                                discountAmountOff: i,
                                discountOffer: o,
                                savingsPercent: l,
                            } = t;
                            return r && null != i && e.interval === A.WT.MONTH
                                ? I.intl.format(I.t["VeE/4E"], {
                                      numMonths: o?.discount.user_usage_limit ?? A.OJ,
                                      discountedPrice: (0, m.$g)(n.amount - i, n.currency),
                                      regularPrice: (0, m.$g)(n.amount, n.currency),
                                  })
                                : a
                                  ? y(e, n)
                                  : e.interval === A.WT.YEAR
                                    ? I.intl.formatToPlainString(I.t.rtLTJP, { percent: l ?? "" })
                                    : null;
                        })(G, {
                            price: w,
                            isEligibleForDiscount: b,
                            isEligibleForTrial: x,
                            discountAmountOff: P,
                            discountOffer: O,
                            savingsPercent: j,
                        }),
                    }),
                }),
        ],
    });
}
