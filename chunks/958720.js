n.d(t, { Ay: () => y, O7: () => I, gS: () => v });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(311907),
    c = n(834730),
    d = n(939249),
    _ = n(150934),
    p = n(937008),
    h = n(97352),
    m = n(252424),
    A = n(927578),
    f = n(580630),
    g = n(788868),
    E = n(985018),
    C = n(672305);
let I = (e, t) => {
        let n = e.interval === g.WT.YEAR ? E.t.ECT4A5 : E.t.v9QeON;
        return E.intl.format(n, { price: (0, f.$g)(t.amount, t.currency) });
    },
    v = (e, t, n) => {
        let {
                userLocale: r,
                isEligibleForBOGOPromotion: l,
                shouldShowSavingsPercent: i,
                isGift: a,
                planId: s,
                savingsPercent: o,
            } = n,
            u = null != e && (e.planId === s || (null != t && e.planId === t.id));
        return l
            ? a || s !== g.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: E.intl.string(E.t.iQTfWx) }
            : null == t || (t.interval === g.WT.YEAR && null != e) || (i && !u)
              ? null != t && t.interval === g.WT.YEAR && null != e
                  ? E.intl.string(E.t["122kWB"])
                  : i && !u && null != o
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: E.intl.format(E.t.IAybsG, { discount: (0, m.l9)(r, o / 100) }),
                      }
                    : null
              : null;
    };
function y(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: i,
            selectPlan: s,
            selected: m,
            priceOptions: y,
            isPrepaid: T,
            isCustomGift: x,
            shouldUseCalculatedDiscount: b,
            shouldShowUpdatedPaymentModal: S,
            discountOffer: N,
            discountAmountOff: L,
            isEligibleForDiscount: O,
            isEligibleForBOGOPromotion: R,
            isEligibleForTrial: j,
            isCurrentPlan: P,
            disabled: D,
        } = e,
        { isGift: M } = (0, p.Pv)(),
        F = (0, u.bG)([h.A], () => h.A.get(i));
    o()(null != F, "Missing subscriptionPlan");
    let G = (0, A.L_)({ planId: i, shouldUseCalculatedDiscount: b, isGift: M, priceOptions: y, subscriptionPlan: F }),
        w = (0, A.y8)(i, !1, M, y),
        U = null != G && !S,
        B = l.useCallback(() => {
            let e = v(n, F, {
                userLocale: t,
                isEligibleForBOGOPromotion: R,
                shouldShowSavingsPercent: U,
                isGift: M,
                planId: i,
                savingsPercent: G,
            });
            return "string" == typeof e
                ? (0, r.jsxs)("span", { className: C.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, r.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: C.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, R, F, n, U, M, i, G]),
        k = (0, A.m6)(F.id),
        V = l.useMemo(
            () => (0, A.D8)(F.interval, M, T, F.intervalCount, x, k),
            [F.interval, F.intervalCount, M, T, x, k],
        ),
        H = () => {
            D || s(i);
        },
        W = S
            ? E.intl.format(E.t.hXcaLT, {
                  price:
                      O && null != L && F.interval === g.WT.MONTH
                          ? (0, f.$g)(w.amount - L, w.currency)
                          : j
                            ? (0, f.$g)(0, w.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, f.$g)(w.amount, w.currency),
              })
            : (0, f.$g)(w.amount, w.currency);
    return (0, r.jsxs)(d.D, {
        role: x ? "menuitem" : "radio",
        "aria-checked": m,
        tabIndex: x || m ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: H,
        className: a()(C.G_, { [C.vW]: x && m, [C.Gb]: x }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(C.XM, { [C.PA]: D }),
                children: [
                    (0, r.jsxs)("div", {
                        className: C.l,
                        children: [
                            !x &&
                                (0, r.jsx)("div", {
                                    className: C.E2,
                                    children: (0, r.jsx)(_.S, {
                                        checked: m,
                                        value: m,
                                        label: "",
                                        description: "",
                                        onChange: H,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: a()(C.Gl, { [C.h4]: m || x, [C.ox]: S && (m || x) }),
                                        children: [V, x && B()],
                                    }),
                                    x &&
                                        (0, r.jsx)("div", {
                                            className: C._R,
                                            children: E.intl.format(E.t.ori2Jm, {
                                                currencyAmount: (0, f.$g)(w.amount, w.currency),
                                            }),
                                        }),
                                ],
                            }),
                            P &&
                                (0, r.jsxs)("span", {
                                    className: C.bq,
                                    children: ["(", E.intl.string(E.t.ymSxhy), ")"],
                                }),
                            !x && B(),
                        ],
                    }),
                    S
                        ? (0, r.jsx)("div", { className: a()({ [C.kb]: m }), children: W })
                        : (0, r.jsx)("div", { className: a()({ [C.h4]: m || x }), children: W }),
                ],
            }),
            S &&
                (0, r.jsx)("div", {
                    className: C.hB,
                    children: (0, r.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: m ? "text-default" : "interactive-text-default",
                        className: a()(C.Ub, { [C.sw]: O || j }),
                        children: ((e, t) => {
                            let {
                                price: n,
                                isEligibleForDiscount: r,
                                isEligibleForTrial: l,
                                discountAmountOff: i,
                                discountOffer: a,
                                savingsPercent: s,
                            } = t;
                            return r && null != i && e.interval === g.WT.MONTH
                                ? E.intl.format(E.t["VeE/4E"], {
                                      numMonths: a?.discount.user_usage_limit ?? g.OJ,
                                      discountedPrice: (0, f.$g)(n.amount - i, n.currency),
                                      regularPrice: (0, f.$g)(n.amount, n.currency),
                                  })
                                : l
                                  ? I(e, n)
                                  : e.interval === g.WT.YEAR
                                    ? E.intl.formatToPlainString(E.t.rtLTJP, { percent: s ?? "" })
                                    : null;
                        })(F, {
                            price: w,
                            isEligibleForDiscount: O,
                            isEligibleForTrial: j,
                            discountAmountOff: L,
                            discountOffer: N,
                            savingsPercent: G,
                        }),
                    }),
                }),
        ],
    });
}
