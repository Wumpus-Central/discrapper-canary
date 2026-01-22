n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    l = n(311907),
    c = n(397927),
    u = n(937008),
    d = n(97352),
    f = n(252424),
    p = n(927578),
    _ = n(580630),
    h = n(788868),
    m = n(985018),
    g = n(371894);

function E(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: i,
            selectPlan: s,
            selected: E,
            priceOptions: b,
            isPrepaid: y,
            isCustomGift: O,
            shouldUseCalculatedDiscount: A,
            shouldShowUpdatedPaymentModal: v,
            discountOffer: S,
            discountAmountOff: I,
            isEligibleForDiscount: T,
            isEligibleForBOGOPromotion: C,
            isEligibleForTrial: N,
        } = e,
        { isGift: R } = (0, u.Pv)(),
        w = (0, l.bG)([d.A], () => d.A.get(i));
    o()(null != w, "Missing subscriptionPlan");
    let P = null != n && n.planId === i,
        D =
            P ||
            (i === h.gD.PREMIUM_MONTH_TIER_2 &&
                null != n &&
                [h.gD.PREMIUM_YEAR_TIER_0, h.gD.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        x = h.XE[i];
    A && (x = (0, p.k8)(w, R, b));
    let L = (0, p.y8)(i, !1, R, b),
        j = null != x && !v,
        M = w.interval === h.WT.YEAR ? m.t.ECT4A5 : m.t.v9QeON,
        k = () =>
            C && !R && i === h.gD.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(c.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: g.kP,
                      children: m.intl.string(m.t.iQTfWx),
                  })
                : null,
        U = () =>
            null != x &&
            !C &&
            (0, r.jsx)(c.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: g.kP,
                children: m.intl.format(m.t.IAybsG, {
                    discount: (0, f.l9)(t, x / 100),
                }),
            }),
        G = () =>
            C
                ? k()
                : (w.interval === h.WT.YEAR && null != n) || (j && !P)
                  ? w.interval === h.WT.YEAR && null != n
                      ? (0, r.jsxs)("span", {
                            className: g.IS,
                            children: ["(", m.intl.string(m.t["122kWB"]), ")"],
                        })
                      : j && !P
                        ? U()
                        : void 0
                  : null,
        V = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: a()(g.Gl, {
                            [g.h4]: E || O,
                            [g.ox]: v && (E || O),
                        }),
                        children: [(0, p.D8)(w.interval, R, y, w.intervalCount, O, (0, p.m6)(w.id)), O && G()],
                    }),
                    O &&
                        (0, r.jsx)("div", {
                            className: g._R,
                            children: m.intl.format(m.t.ori2Jm, {
                                currencyAmount: (0, _.$g)(L.amount, L.currency),
                            }),
                        }),
                ],
            }),
        F = () =>
            T && null != I && w.interval === h.WT.MONTH
                ? (0, _.$g)(L.amount - I, L.currency)
                : N
                  ? (0, _.$g)(0, L.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                  : (0, _.$g)(L.amount, L.currency),
        B = () => {
            if (T && null != I && w.interval === h.WT.MONTH) {
                var e;
                return m.intl.format(m.t["VeE/4E"], {
                    numMonths: null != (e = null == S ? void 0 : S.discount.user_usage_limit) ? e : h.OJ,
                    discountedPrice: (0, _.$g)(L.amount - I, L.currency),
                    regularPrice: (0, _.$g)(L.amount, L.currency),
                });
            }
            return N
                ? m.intl.format(M, {
                      price: (0, _.$g)(L.amount, L.currency),
                  })
                : w.interval === h.WT.YEAR
                  ? m.intl.formatToPlainString(m.t.rtLTJP, {
                        percent: x,
                    })
                  : null;
        },
        H = () => {
            D || s(i);
        };
    return (0, r.jsxs)(c.DUT, {
        role: O ? "menuitem" : "radio",
        "aria-checked": E,
        tabIndex: E ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0,
            },
        },
        onClick: H,
        className: a()(g.G_, {
            [g.vW]: O && E,
            [g.Gb]: O,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(g.XM, {
                    [g.PA]: D,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: g.l,
                        children: [
                            !O &&
                                (0, r.jsx)("div", {
                                    className: g.E2,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: E,
                                        value: E,
                                        label: "",
                                        description: "",
                                        onChange: H,
                                    }),
                                }),
                            V(),
                            P &&
                                (0, r.jsxs)("span", {
                                    className: g.bq,
                                    children: ["(", m.intl.string(m.t.ymSxhy), ")"],
                                }),
                            !O && G(),
                        ],
                    }),
                    v
                        ? (0, r.jsx)("div", {
                              className: a()({
                                  [g.kb]: E,
                              }),
                              children: m.intl.format(m.t.hXcaLT, {
                                  price: F(),
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: a()({
                                  [g.h4]: E || O,
                              }),
                              children: (0, _.$g)(L.amount, L.currency),
                          }),
                ],
            }),
            v &&
                (0, r.jsx)("div", {
                    className: g.hB,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: E ? "text-default" : "interactive-text-default",
                        className: a()(g.Ub, {
                            [g.sw]: T || N,
                        }),
                        children: B(),
                    }),
                }),
        ],
    });
}
