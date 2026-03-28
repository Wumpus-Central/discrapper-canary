"use strict";
n.d(t, { Ay: () => S, O7: () => A, gS: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(397927),
    d = n(937008),
    _ = n(97352),
    f = n(252424),
    p = n(927578),
    h = n(580630),
    m = n(788868),
    E = n(985018),
    g = n(799297);
let A = (e, t) => {
        let n = e.interval === m.WT.YEAR ? E.t.ECT4A5 : E.t.v9QeON;
        return E.intl.format(n, { price: (0, h.$g)(t.amount, t.currency) });
    },
    I = (e, t) => {
        let {
            price: n,
            isEligibleForDiscount: r,
            isEligibleForTrial: i,
            discountAmountOff: s,
            discountOffer: a,
            savingsPercent: o,
        } = t;
        return r && null != s && e.interval === m.WT.MONTH
            ? E.intl.format(E.t["VeE/4E"], {
                  numMonths: a?.discount.user_usage_limit ?? m.OJ,
                  discountedPrice: (0, h.$g)(n.amount - s, n.currency),
                  regularPrice: (0, h.$g)(n.amount, n.currency),
              })
            : i
              ? A(e, n)
              : e.interval === m.WT.YEAR
                ? E.intl.formatToPlainString(E.t.rtLTJP, { percent: o ?? "" })
                : null;
    },
    T = (e, t, n) => {
        let {
                userLocale: r,
                isEligibleForBOGOPromotion: i,
                shouldShowSavingsPercent: s,
                isGift: a,
                planId: o,
                savingsPercent: l,
            } = n,
            u = null != e && (e.planId === o || (null != t && e.planId === t.id));
        return i
            ? a || o !== m.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: E.intl.string(E.t.iQTfWx) }
            : null == t || (t.interval === m.WT.YEAR && null != e) || (s && !u)
              ? null != t && t.interval === m.WT.YEAR && null != e
                  ? E.intl.string(E.t["122kWB"])
                  : s && !u && null != l
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: E.intl.format(E.t.IAybsG, { discount: (0, f.l9)(r, l / 100) }),
                      }
                    : null
              : null;
    };
function S(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: s,
            selectPlan: o,
            selected: f,
            priceOptions: A,
            isPrepaid: S,
            isCustomGift: y,
            shouldUseCalculatedDiscount: v,
            shouldShowUpdatedPaymentModal: N,
            discountOffer: C,
            discountAmountOff: R,
            isEligibleForDiscount: O,
            isEligibleForBOGOPromotion: b,
            isEligibleForTrial: D,
            isCurrentPlan: L,
            disabled: w,
        } = e,
        { isGift: M } = (0, d.Pv)(),
        x = (0, u.bG)([_.A], () => _.A.get(s));
    l()(null != x, "Missing subscriptionPlan");
    let P = (0, p.L_)({ planId: s, shouldUseCalculatedDiscount: v, isGift: M, priceOptions: A, subscriptionPlan: x }),
        k = (0, p.y8)(s, !1, M, A),
        U = null != P && !N,
        G = i.useCallback(() => {
            let e = T(n, x, {
                userLocale: t,
                isEligibleForBOGOPromotion: b,
                shouldShowSavingsPercent: U,
                isGift: M,
                planId: s,
                savingsPercent: P,
            });
            return "string" == typeof e
                ? (0, r.jsxs)("span", { className: g.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, r.jsx)(c.Text, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: g.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, b, x, n, U, M, s, P]),
        F = (0, p.m6)(x.id),
        V = i.useMemo(
            () => (0, p.D8)(x.interval, M, S, x.intervalCount, y, F),
            [x.interval, x.intervalCount, M, S, y, F],
        ),
        B = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: a()(g.Gl, { [g.h4]: f || y, [g.ox]: N && (f || y) }),
                        children: [V, y && G()],
                    }),
                    y &&
                        (0, r.jsx)("div", {
                            className: g._R,
                            children: E.intl.format(E.t.ori2Jm, { currencyAmount: (0, h.$g)(k.amount, k.currency) }),
                        }),
                ],
            }),
        H = () =>
            O && null != R && x.interval === m.WT.MONTH
                ? (0, h.$g)(k.amount - R, k.currency)
                : D
                  ? (0, h.$g)(0, k.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                  : (0, h.$g)(k.amount, k.currency),
        j = () => {
            w || o(s);
        },
        Y = N ? E.intl.format(E.t.hXcaLT, { price: H() }) : (0, h.$g)(k.amount, k.currency);
    return (0, r.jsxs)(c.DUT, {
        role: y ? "menuitem" : "radio",
        "aria-checked": f,
        tabIndex: f ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: j,
        className: a()(g.G_, { [g.vW]: y && f, [g.Gb]: y }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(g.XM, { [g.PA]: w }),
                children: [
                    (0, r.jsxs)("div", {
                        className: g.l,
                        children: [
                            !y &&
                                (0, r.jsx)("div", {
                                    className: g.E2,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: f,
                                        value: f,
                                        label: "",
                                        description: "",
                                        onChange: j,
                                    }),
                                }),
                            B(),
                            L &&
                                (0, r.jsxs)("span", {
                                    className: g.bq,
                                    children: ["(", E.intl.string(E.t.ymSxhy), ")"],
                                }),
                            !y && G(),
                        ],
                    }),
                    N
                        ? (0, r.jsx)("div", { className: a()({ [g.kb]: f }), children: Y })
                        : (0, r.jsx)("div", { className: a()({ [g.h4]: f || y }), children: Y }),
                ],
            }),
            N &&
                (0, r.jsx)("div", {
                    className: g.hB,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: f ? "text-default" : "interactive-text-default",
                        className: a()(g.Ub, { [g.sw]: O || D }),
                        children: I(x, {
                            price: k,
                            isEligibleForDiscount: O,
                            isEligibleForTrial: D,
                            discountAmountOff: R,
                            discountOffer: C,
                            savingsPercent: P,
                        }),
                    }),
                }),
        ],
    });
}
