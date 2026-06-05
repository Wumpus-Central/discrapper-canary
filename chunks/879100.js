n.d(t, { W: () => S, _: () => I });
var a = n(627968),
    c = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(364840),
    l = n(331322),
    d = n(123292),
    o = n(38021),
    u = n(821609),
    b = n(480642),
    p = n(166532),
    f = n(997330),
    m = n(659746),
    y = n(975571),
    E = n(652215),
    h = n(26279),
    R = n(788868),
    v = n(818348),
    j = n(375708),
    x = n(7921);
function I(e) {
    let {
        currentStep: t,
        isRefreshEnabled: n,
        backStep: c,
        handleStepChange: i,
        primaryButtonProps: o,
        secondaryButton: u,
        legacySubmitButton: f,
    } = e;
    return t === p.pn.CONFIRM
        ? null
        : t === p.pn.REVIEW
          ? (r()(null != o, "Missing primaryButtonProps for review step"),
            (0, a.jsx)(b.lo, { onBackClick: null != c ? () => i(c) : void 0, primaryButtonProps: o }))
          : (0, a.jsx)(s.j, {
                children: (0, a.jsxs)(l.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != c ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != c
                            ? (0, a.jsx)(d.Q, {
                                  text: j.intl.string(j.t["13/7kX"]),
                                  onClick: () => i(c),
                                  variant: "secondary",
                              })
                            : null,
                        (0, a.jsxs)(l.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(n && t === p.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [u, f],
                        }),
                    ],
                }),
            });
}
function S(e) {
    let t,
        {
            onClose: n,
            guild: i,
            guildBoostQuantity: r,
            isTransfer: s = !1,
            withAnimation: l = !0,
            paymentSourceType: d,
            didPurchaseOnFractionalPremium: b = !1,
            fallbackGuildName: p,
            customCheckoutFlow: I,
        } = e,
        { theme: S } = (0, o.wR)(),
        [g, w] = c.useState(f.V1.Scenes.ENTRY),
        [U, L] = c.useState(!1),
        T = i?.name ?? p;
    return (
        (t = s
            ? null == T
                ? j.intl.format(j.t.P52e1r, {})
                : j.intl.format(j.t["4UnIk9"], { guildName: T })
            : b
              ? j.intl.format(j.t.gFaKd1, { helpCenterLink: y.A.getArticleURL(E.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == T
                ? j.intl.format(j.t.SZ5ohR, { guildSubscriptionQuantity: r })
                : j.intl.format(j.t.GxK3Mv, { guildName: T, guildSubscriptionQuantity: r })),
        (0, a.jsxs)("div", {
            className: x.RP,
            children: [
                l
                    ? (0, a.jsx)(f.V1, {
                          className: x.ud,
                          nextScene: g,
                          onScenePlay: (e) => {
                              if (!U)
                                  switch (e) {
                                      case f.V1.Scenes.ENTRY:
                                          return w(f.V1.Scenes.IDLE);
                                      case f.V1.Scenes.IDLE:
                                          return w(f.V1.Scenes.SUCCESS);
                                      case f.V1.Scenes.SUCCESS:
                                          return L(!0), w(f.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, a.jsx)(m.Ay, {
                    className: x.E,
                    theme: S,
                    premiumType: R.PremiumTypes.TIER_2,
                    type: v.Nc.has(d ?? v.he.UNKNOWN)
                        ? m.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : m.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, a.jsx)("div", { className: x.xR, children: t }),
                I === h.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, a.jsx)("div", {
                          className: x.xR,
                          children: (0, a.jsxs)("p", {
                              children: [j.intl.string(j.t.bIVRSQ), " ", j.intl.string(j.t["0UJqOy"])],
                          }),
                      })
                    : (0, a.jsx)(u.$, {
                          variant: "primary",
                          text:
                              I === h.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? j.intl.string(j.t.sRApon)
                                  : j.intl.string(j.t["/iTxgz"]),
                          onClick: n,
                      }),
            ],
        })
    );
}
