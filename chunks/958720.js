l.d(t, { Ay: () => T, O7: () => b, gS: () => E });
var n = l(627968),
    a = l(64700),
    r = l(503698),
    s = l.n(r),
    i = l(284009),
    c = l.n(i),
    o = l(17928),
    u = l(834730),
    d = l(939249),
    m = l(150934),
    x = l(937008),
    h = l(97352),
    g = l(252424),
    v = l(927578),
    j = l(580630),
    p = l(788868),
    f = l(985018),
    N = l(672305);
let b = (e, t) => {
        let l = e.interval === p.WT.YEAR ? f.t.ECT4A5 : f.t.v9QeON;
        return f.intl.format(l, { price: (0, j.$g)(t.amount, t.currency) });
    },
    E = (e, t, l) => {
        let {
                userLocale: n,
                isEligibleForBOGOPromotion: a,
                shouldShowSavingsPercent: r,
                isGift: s,
                planId: i,
                savingsPercent: c,
            } = l,
            o = null != e && (e.planId === i || (null != t && e.planId === t.id));
        return a
            ? s || i !== p.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: f.intl.string(f.t.iQTfWx) }
            : null == t || (t.interval === p.WT.YEAR && null != e) || (r && !o)
              ? null != t && t.interval === p.WT.YEAR && null != e
                  ? f.intl.string(f.t["122kWB"])
                  : r && !o && null != c
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: f.intl.format(f.t.IAybsG, { discount: (0, g.l9)(n, c / 100) }),
                      }
                    : null
              : null;
    };
function T(e) {
    let {
            userLocale: t,
            premiumSubscription: l,
            planId: r,
            selectPlan: i,
            selected: g,
            priceOptions: T,
            isPrepaid: y,
            isCustomGift: A,
            shouldUseCalculatedDiscount: C,
            shouldShowUpdatedPaymentModal: I,
            discountOffer: S,
            discountAmountOff: _,
            isEligibleForDiscount: k,
            isEligibleForBOGOPromotion: P,
            isEligibleForTrial: G,
            isCurrentPlan: L,
            disabled: M,
        } = e,
        { isGift: w } = (0, x.Pv)(),
        R = (0, o.bG)([h.A], () => h.A.get(r));
    c()(null != R, "Missing subscriptionPlan");
    let D = (0, v.L_)({ planId: r, shouldUseCalculatedDiscount: C, isGift: w, priceOptions: T, subscriptionPlan: R }),
        O = (0, v.y8)(r, !1, w, T),
        $ = null != D && !I,
        B = a.useCallback(() => {
            let e = E(l, R, {
                userLocale: t,
                isEligibleForBOGOPromotion: P,
                shouldShowSavingsPercent: $,
                isGift: w,
                planId: r,
                savingsPercent: D,
            });
            return "string" == typeof e
                ? (0, n.jsxs)("span", { className: N.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, n.jsx)(u.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: N.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, P, R, l, $, w, r, D]),
        U = (0, v.m6)(R.id),
        W = a.useMemo(
            () => (0, v.D8)(R.interval, w, y, R.intervalCount, A, U),
            [R.interval, R.intervalCount, w, y, A, U],
        ),
        z = () => {
            M || i(r);
        },
        F = I
            ? f.intl.format(f.t.hXcaLT, {
                  price:
                      k && null != _ && R.interval === p.WT.MONTH
                          ? (0, j.$g)(O.amount - _, O.currency)
                          : G
                            ? (0, j.$g)(0, O.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, j.$g)(O.amount, O.currency),
              })
            : (0, j.$g)(O.amount, O.currency);
    return (0, n.jsxs)(d.D, {
        role: A ? "menuitem" : "radio",
        "aria-checked": g,
        tabIndex: A || g ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: z,
        className: s()(N.G_, { [N.vW]: A && g, [N.Gb]: A }),
        children: [
            (0, n.jsxs)("div", {
                className: s()(N.XM, { [N.PA]: M }),
                children: [
                    (0, n.jsxs)("div", {
                        className: N.l,
                        children: [
                            !A &&
                                (0, n.jsx)("div", {
                                    className: N.E2,
                                    children: (0, n.jsx)(m.S, {
                                        checked: g,
                                        value: g,
                                        label: "",
                                        description: "",
                                        onChange: z,
                                    }),
                                }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: s()(N.Gl, { [N.h4]: g || A, [N.ox]: I && (g || A) }),
                                        children: [W, A && B()],
                                    }),
                                    A &&
                                        (0, n.jsx)("div", {
                                            className: N._R,
                                            children: f.intl.format(f.t.ori2Jm, {
                                                currencyAmount: (0, j.$g)(O.amount, O.currency),
                                            }),
                                        }),
                                ],
                            }),
                            L &&
                                (0, n.jsxs)("span", {
                                    className: N.bq,
                                    children: ["(", f.intl.string(f.t.ymSxhy), ")"],
                                }),
                            !A && B(),
                        ],
                    }),
                    I
                        ? (0, n.jsx)("div", { className: s()({ [N.kb]: g }), children: F })
                        : (0, n.jsx)("div", { className: s()({ [N.h4]: g || A }), children: F }),
                ],
            }),
            I &&
                (0, n.jsx)("div", {
                    className: N.hB,
                    children: (0, n.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: g ? "text-default" : "interactive-text-default",
                        className: s()(N.Ub, { [N.sw]: k || G }),
                        children: ((e, t) => {
                            let {
                                price: l,
                                isEligibleForDiscount: n,
                                isEligibleForTrial: a,
                                discountAmountOff: r,
                                discountOffer: s,
                                savingsPercent: i,
                            } = t;
                            return n && null != r && e.interval === p.WT.MONTH
                                ? f.intl.format(f.t["VeE/4E"], {
                                      numMonths: s?.discount.user_usage_limit ?? p.OJ,
                                      discountedPrice: (0, j.$g)(l.amount - r, l.currency),
                                      regularPrice: (0, j.$g)(l.amount, l.currency),
                                  })
                                : a
                                  ? b(e, l)
                                  : e.interval === p.WT.YEAR
                                    ? f.intl.formatToPlainString(f.t.rtLTJP, { percent: i ?? "" })
                                    : null;
                        })(R, {
                            price: O,
                            isEligibleForDiscount: k,
                            isEligibleForTrial: G,
                            discountAmountOff: _,
                            discountOffer: S,
                            savingsPercent: D,
                        }),
                    }),
                }),
        ],
    });
}
