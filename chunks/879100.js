t.d(e, { W: () => M, _: () => I });
var l = t(477900),
    n = t(582128),
    i = t(284009),
    r = t.n(i),
    s = t(364840),
    c = t(331322),
    o = t(123292),
    h = t(38021),
    d = t(834730),
    u = t(821609),
    m = t(480642),
    p = t(166532),
    x = t(796012),
    E = t(659746),
    j = t(975571),
    v = t(652215),
    A = t(26279),
    C = t(202541),
    f = t(818348),
    g = t(375708),
    b = t(443593);
function I(a) {
    let {
        currentStep: e,
        isRefreshEnabled: t,
        backStep: n,
        handleStepChange: i,
        primaryButtonProps: h,
        secondaryButton: d,
        legacySubmitButton: u,
    } = a;
    return e === p.pn.CONFIRM
        ? null
        : e === p.pn.REVIEW
          ? (r()(null != h, "Missing primaryButtonProps for review step"),
            (0, l.jsx)(m.lo, { onBackClick: null != n ? () => i(n) : void 0, primaryButtonProps: h }))
          : (0, l.jsx)(s.j, {
                children: (0, l.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != n ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != n
                            ? (0, l.jsx)(o.Q, {
                                  text: g.intl.string(g.t["13/7kX"]),
                                  onClick: () => i(n),
                                  variant: "secondary",
                              })
                            : null,
                        (0, l.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(t && e === p.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [d, u],
                        }),
                    ],
                }),
            });
}
function M(a) {
    let e,
        {
            onClose: t,
            guild: i,
            guildBoostQuantity: r,
            isTransfer: s = !1,
            withAnimation: c = !0,
            paymentSourceType: o,
            didPurchaseOnFractionalPremium: m = !1,
            fallbackGuildName: p,
            customCheckoutFlow: I,
        } = a,
        { theme: M } = (0, h.wR)(),
        [R, L] = n.useState(x.V1.Scenes.ENTRY),
        [T, y] = n.useState(!1),
        P = i?.name ?? p;
    return (
        (e = s
            ? null == P
                ? g.intl.format(g.t.P52e1r, {})
                : g.intl.format(g.t["4UnIk9"], { guildName: P })
            : m
              ? g.intl.format(g.t.gFaKd1, { helpCenterLink: j.A.getArticleURL(v.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == P
                ? g.intl.format(g.t.SZ5ohR, { guildSubscriptionQuantity: r })
                : g.intl.format(g.t.GxK3Mv, { guildName: P, guildSubscriptionQuantity: r })),
        (0, l.jsxs)("div", {
            className: b.RP,
            children: [
                c
                    ? (0, l.jsx)(x.V1, {
                          className: b.ud,
                          nextScene: R,
                          onScenePlay: (a) => {
                              if (!T)
                                  switch (a) {
                                      case x.V1.Scenes.ENTRY:
                                          return L(x.V1.Scenes.IDLE);
                                      case x.V1.Scenes.IDLE:
                                          return L(x.V1.Scenes.SUCCESS);
                                      case x.V1.Scenes.SUCCESS:
                                          return y(!0), L(x.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, l.jsx)(E.Ay, {
                    className: b.E,
                    theme: M,
                    premiumType: C.PremiumTypes.TIER_2,
                    type: f.Nc.has(o ?? f.he.UNKNOWN)
                        ? E.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : E.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: b.xR,
                    children: e,
                }),
                I === A.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, l.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "interactive-text-default",
                          className: b.xR,
                          children: (0, l.jsxs)("p", {
                              children: [g.intl.string(g.t.bIVRSQ), " ", g.intl.string(g.t["0UJqOy"])],
                          }),
                      })
                    : (0, l.jsx)(u.$, {
                          variant: "primary",
                          text:
                              I === A.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? g.intl.string(g.t.sRApon)
                                  : g.intl.string(g.t["/iTxgz"]),
                          onClick: t,
                      }),
            ],
        })
    );
}
