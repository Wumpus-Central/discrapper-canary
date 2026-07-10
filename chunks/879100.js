n.d(t, { W: () => S, _: () => g });
var a = n(627968),
    i = n(64700),
    c = n(284009),
    r = n.n(c),
    l = n(364840),
    s = n(331322),
    o = n(123292),
    d = n(38021),
    u = n(834730),
    b = n(821609),
    p = n(169797),
    f = n(166532),
    m = n(796012),
    y = n(659746),
    E = n(975571),
    h = n(652215),
    v = n(26279),
    x = n(202541),
    R = n(818348),
    j = n(375708),
    I = n(7921);
function g(e) {
    let {
        currentStep: t,
        isRefreshEnabled: n,
        backStep: i,
        handleStepChange: c,
        primaryButtonProps: d,
        secondaryButton: u,
        legacySubmitButton: b,
    } = e;
    return t === f.pn.CONFIRM
        ? null
        : t === f.pn.REVIEW
          ? (r()(null != d, "Missing primaryButtonProps for review step"),
            (0, a.jsx)(p.lo, { onBackClick: null != i ? () => c(i) : void 0, primaryButtonProps: d }))
          : (0, a.jsx)(l.j, {
                children: (0, a.jsxs)(s.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != i ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != i
                            ? (0, a.jsx)(o.Q, {
                                  text: j.intl.string(j.t["13/7kX"]),
                                  onClick: () => c(i),
                                  variant: "secondary",
                              })
                            : null,
                        (0, a.jsxs)(s.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(n && t === f.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [u, b],
                        }),
                    ],
                }),
            });
}
function S(e) {
    let t,
        {
            onClose: n,
            guild: c,
            guildBoostQuantity: r,
            isTransfer: l = !1,
            withAnimation: s = !0,
            paymentSourceType: o,
            didPurchaseOnFractionalPremium: p = !1,
            fallbackGuildName: f,
            customCheckoutFlow: g,
        } = e,
        { theme: S } = (0, d.wR)(),
        [w, U] = i.useState(m.V1.Scenes.ENTRY),
        [L, N] = i.useState(!1),
        T = c?.name ?? f;
    return (
        (t = l
            ? null == T
                ? j.intl.format(j.t.P52e1r, {})
                : j.intl.format(j.t["4UnIk9"], { guildName: T })
            : p
              ? j.intl.format(j.t.gFaKd1, { helpCenterLink: E.A.getArticleURL(h.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == T
                ? j.intl.format(j.t.SZ5ohR, { guildSubscriptionQuantity: r })
                : j.intl.format(j.t.GxK3Mv, { guildName: T, guildSubscriptionQuantity: r })),
        (0, a.jsxs)("div", {
            className: I.RP,
            children: [
                s
                    ? (0, a.jsx)(m.V1, {
                          className: I.ud,
                          nextScene: w,
                          onScenePlay: (e) => {
                              if (!L)
                                  switch (e) {
                                      case m.V1.Scenes.ENTRY:
                                          return U(m.V1.Scenes.IDLE);
                                      case m.V1.Scenes.IDLE:
                                          return U(m.V1.Scenes.SUCCESS);
                                      case m.V1.Scenes.SUCCESS:
                                          return N(!0), U(m.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, a.jsx)(y.Ay, {
                    className: I.E,
                    theme: S,
                    premiumType: x.PremiumTypes.TIER_2,
                    type: R.Nc.has(o ?? R.he.UNKNOWN)
                        ? y.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : y.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, a.jsx)(u.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: I.xR,
                    children: t,
                }),
                g === v.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, a.jsx)(u.E, {
                          variant: "text-md/medium",
                          color: "interactive-text-default",
                          className: I.xR,
                          children: (0, a.jsxs)("p", {
                              children: [j.intl.string(j.t.bIVRSQ), " ", j.intl.string(j.t["0UJqOy"])],
                          }),
                      })
                    : (0, a.jsx)(b.$, {
                          variant: "primary",
                          text:
                              g === v.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? j.intl.string(j.t.sRApon)
                                  : j.intl.string(j.t["/iTxgz"]),
                          onClick: n,
                      }),
            ],
        })
    );
}
