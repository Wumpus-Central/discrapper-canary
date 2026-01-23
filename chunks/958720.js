n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(311907),
    u = n(397927),
    d = n(93159),
    f = n(937008),
    p = n(97352),
    _ = n(252424),
    h = n(927578),
    m = n(580630),
    g = n(788868),
    E = n(985018),
    y = n(371894);

function b(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: a,
            selectPlan: o,
            selected: b,
            priceOptions: O,
            isPrepaid: v,
            isCustomGift: A,
            shouldUseUnifiedCheckoutUI: I,
            shouldUseCalculatedDiscount: S,
            shouldShowUpdatedPaymentModal: T,
            discountOffer: C,
            discountAmountOff: N,
            isEligibleForDiscount: w,
            isEligibleForBOGOPromotion: R,
            isEligibleForTrial: P,
            isCurrentPlan: D,
            disabled: x,
        } = e,
        { isGift: L } = (0, f.Pv)(),
        j = (0, c.bG)([p.A], () => p.A.get(a));
    l()(null != j, "Missing subscriptionPlan");
    let M = g.XE[a];
    S && (M = (0, h.k8)(j, L, O));
    let k = (0, h.y8)(a, !1, L, O),
        U = (0, h.VA)({
            subscriptionPlan: j,
            isGift: L,
            priceOptions: O,
        }),
        G = null != M && !T,
        V = j.interval === g.WT.YEAR ? E.t.ECT4A5 : E.t.v9QeON,
        F = () =>
            R && !L && a === g.gD.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(u.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: y.kP,
                      children: E.intl.string(E.t.iQTfWx),
                  })
                : null,
        B = () =>
            null != M &&
            !R &&
            (0, r.jsx)(u.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: y.kP,
                children: E.intl.format(E.t.IAybsG, {
                    discount: (0, _.l9)(t, M / 100),
                }),
            }),
        H = () =>
            R
                ? F()
                : (j.interval === g.WT.YEAR && null != n) || (G && !D)
                  ? j.interval === g.WT.YEAR && null != n
                      ? (0, r.jsxs)("span", {
                            className: y.IS,
                            children: ["(", E.intl.string(E.t["122kWB"]), ")"],
                        })
                      : G && !D
                        ? B()
                        : void 0
                  : null,
        Y = (0, h.m6)(j.id),
        W = i.useMemo(
            () => (0, h.D8)(j.interval, L, v, j.intervalCount, A, Y),
            [j.interval, j.intervalCount, L, v, A, Y],
        ),
        K = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(y.Gl, {
                            [y.h4]: b || A,
                            [y.ox]: T && (b || A),
                        }),
                        children: [W, A && H()],
                    }),
                    A &&
                        (0, r.jsx)("div", {
                            className: y._R,
                            children: E.intl.format(E.t.ori2Jm, {
                                currencyAmount: (0, m.$g)(k.amount, k.currency),
                            }),
                        }),
                ],
            }),
        z = () =>
            w && null != N && j.interval === g.WT.MONTH
                ? (0, m.$g)(k.amount - N, k.currency)
                : P
                  ? (0, m.$g)(0, k.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                  : (0, m.$g)(k.amount, k.currency),
        q = () => {
            if (w && null != N && j.interval === g.WT.MONTH) {
                var e;
                return E.intl.format(E.t["VeE/4E"], {
                    numMonths: null != (e = null == C ? void 0 : C.discount.user_usage_limit) ? e : g.OJ,
                    discountedPrice: (0, m.$g)(k.amount - N, k.currency),
                    regularPrice: (0, m.$g)(k.amount, k.currency),
                });
            }
            return P
                ? E.intl.format(V, {
                      price: (0, m.$g)(k.amount, k.currency),
                  })
                : j.interval === g.WT.YEAR
                  ? E.intl.formatToPlainString(E.t.rtLTJP, {
                        percent: M,
                    })
                  : null;
        },
        Z = () => {
            x || o(a);
        },
        X = T
            ? E.intl.format(E.t.hXcaLT, {
                  price: z(),
              })
            : (0, m.$g)(k.amount, k.currency);
    return I
        ? (0, r.jsx)(d.ZA, {
              id: a,
              title: null,
              titleDescriber: (0, h.YR)(j.interval, j.intervalCount),
              primaryText: X,
              subtext:
                  null != U
                      ? (0, r.jsx)(d.Lo, {
                            strikethrough: !0,
                            price: (0, m.$g)(U, k.currency),
                        })
                      : void 0,
              isDisabled: x,
          })
        : (0, r.jsxs)(u.DUT, {
              role: A ? "menuitem" : "radio",
              "aria-checked": b,
              tabIndex: b ? 0 : -1,
              focusProps: {
                  offset: {
                      left: -4,
                      right: -4,
                      top: 0,
                      bottom: 0,
                  },
              },
              onClick: Z,
              className: s()(y.G_, {
                  [y.vW]: A && b,
                  [y.Gb]: A,
              }),
              children: [
                  (0, r.jsxs)("div", {
                      className: s()(y.XM, {
                          [y.PA]: x,
                      }),
                      children: [
                          (0, r.jsxs)("div", {
                              className: y.l,
                              children: [
                                  !A &&
                                      (0, r.jsx)("div", {
                                          className: y.E2,
                                          children: (0, r.jsx)(u.Checkbox, {
                                              checked: b,
                                              value: b,
                                              label: "",
                                              description: "",
                                              onChange: Z,
                                          }),
                                      }),
                                  K(),
                                  D &&
                                      (0, r.jsxs)("span", {
                                          className: y.bq,
                                          children: ["(", E.intl.string(E.t.ymSxhy), ")"],
                                      }),
                                  !A && H(),
                              ],
                          }),
                          T
                              ? (0, r.jsx)("div", {
                                    className: s()({
                                        [y.kb]: b,
                                    }),
                                    children: X,
                                })
                              : (0, r.jsx)("div", {
                                    className: s()({
                                        [y.h4]: b || A,
                                    }),
                                    children: X,
                                }),
                      ],
                  }),
                  T &&
                      (0, r.jsx)("div", {
                          className: y.hB,
                          children: (0, r.jsx)(u.Text, {
                              variant: "text-md/normal",
                              color: b ? "text-default" : "interactive-text-default",
                              className: s()(y.Ub, {
                                  [y.sw]: w || P,
                              }),
                              children: q(),
                          }),
                      }),
              ],
          });
}
