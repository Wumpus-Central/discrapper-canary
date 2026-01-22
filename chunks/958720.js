n.d(t, {
    A: () => y,
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
    b = n(371894);

function y(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: a,
            selectPlan: o,
            selected: y,
            priceOptions: O,
            isPrepaid: A,
            isCustomGift: v,
            shouldUseUnifiedCheckoutUI: S,
            shouldUseCalculatedDiscount: I,
            shouldShowUpdatedPaymentModal: T,
            discountOffer: C,
            discountAmountOff: N,
            isEligibleForDiscount: R,
            isEligibleForBOGOPromotion: w,
            isEligibleForTrial: P,
            isCurrentPlan: D,
            disabled: x,
        } = e,
        { isGift: L } = (0, f.Pv)(),
        j = (0, c.bG)([p.A], () => p.A.get(a));
    l()(null != j, "Missing subscriptionPlan");
    let M = g.XE[a];
    I && (M = (0, h.k8)(j, L, O));
    let k = (0, h.y8)(a, !1, L, O),
        U = j.interval === g.WT.YEAR && null != M ? Math.floor(k.amount / (1 - M / 100)) : null,
        G = null != M && !T,
        V = j.interval === g.WT.YEAR ? E.t.ECT4A5 : E.t.v9QeON,
        F = () =>
            w && !L && a === g.gD.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(u.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: b.kP,
                      children: E.intl.string(E.t.iQTfWx),
                  })
                : null,
        B = () =>
            null != M &&
            !w &&
            (0, r.jsx)(u.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: b.kP,
                children: E.intl.format(E.t.IAybsG, {
                    discount: (0, _.l9)(t, M / 100),
                }),
            }),
        H = () =>
            w
                ? F()
                : (j.interval === g.WT.YEAR && null != n) || (G && !D)
                  ? j.interval === g.WT.YEAR && null != n
                      ? (0, r.jsxs)("span", {
                            className: b.IS,
                            children: ["(", E.intl.string(E.t["122kWB"]), ")"],
                        })
                      : G && !D
                        ? B()
                        : void 0
                  : null,
        Y = (0, h.m6)(j.id),
        W = i.useMemo(
            () => (0, h.D8)(j.interval, L, A, j.intervalCount, v, Y),
            [j.interval, j.intervalCount, L, A, v, Y],
        ),
        K = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(b.Gl, {
                            [b.h4]: y || v,
                            [b.ox]: T && (y || v),
                        }),
                        children: [W, v && H()],
                    }),
                    v &&
                        (0, r.jsx)("div", {
                            className: b._R,
                            children: E.intl.format(E.t.ori2Jm, {
                                currencyAmount: (0, m.$g)(k.amount, k.currency),
                            }),
                        }),
                ],
            }),
        z = () =>
            R && null != N && j.interval === g.WT.MONTH
                ? (0, m.$g)(k.amount - N, k.currency)
                : P
                  ? (0, m.$g)(0, k.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                  : (0, m.$g)(k.amount, k.currency),
        q = () => {
            if (R && null != N && j.interval === g.WT.MONTH) {
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
        X = () => {
            x || o(a);
        },
        Z = T
            ? E.intl.format(E.t.hXcaLT, {
                  price: z(),
              })
            : (0, m.$g)(k.amount, k.currency);
    return S
        ? (0, r.jsx)(d.ZA, {
              id: a,
              title: null,
              titleDescriber: (0, h.YR)(j.interval, j.intervalCount),
              primaryText: Z,
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
              role: v ? "menuitem" : "radio",
              "aria-checked": y,
              tabIndex: y ? 0 : -1,
              focusProps: {
                  offset: {
                      left: -4,
                      right: -4,
                      top: 0,
                      bottom: 0,
                  },
              },
              onClick: X,
              className: s()(b.G_, {
                  [b.vW]: v && y,
                  [b.Gb]: v,
              }),
              children: [
                  (0, r.jsxs)("div", {
                      className: s()(b.XM, {
                          [b.PA]: x,
                      }),
                      children: [
                          (0, r.jsxs)("div", {
                              className: b.l,
                              children: [
                                  !v &&
                                      (0, r.jsx)("div", {
                                          className: b.E2,
                                          children: (0, r.jsx)(u.Checkbox, {
                                              checked: y,
                                              value: y,
                                              label: "",
                                              description: "",
                                              onChange: X,
                                          }),
                                      }),
                                  K(),
                                  D &&
                                      (0, r.jsxs)("span", {
                                          className: b.bq,
                                          children: ["(", E.intl.string(E.t.ymSxhy), ")"],
                                      }),
                                  !v && H(),
                              ],
                          }),
                          T
                              ? (0, r.jsx)("div", {
                                    className: s()({
                                        [b.kb]: y,
                                    }),
                                    children: Z,
                                })
                              : (0, r.jsx)("div", {
                                    className: s()({
                                        [b.h4]: y || v,
                                    }),
                                    children: Z,
                                }),
                      ],
                  }),
                  T &&
                      (0, r.jsx)("div", {
                          className: b.hB,
                          children: (0, r.jsx)(u.Text, {
                              variant: "text-md/normal",
                              color: y ? "text-default" : "interactive-text-default",
                              className: s()(b.Ub, {
                                  [b.sw]: R || P,
                              }),
                              children: q(),
                          }),
                      }),
              ],
          });
}
