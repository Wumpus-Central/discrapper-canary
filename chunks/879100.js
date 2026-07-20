t.d(e, { W: () => I, _: () => M });
var l = t(627968),
    n = t(64700),
    i = t(284009),
    r = t.n(i),
    s = t(364840),
    c = t(331322),
    o = t(123292),
    h = t(38021),
    d = t(834730),
    u = t(821609),
    m = t(169797),
    p = t(166532),
    x = t(796012),
    E = t(659746),
    j = t(975571),
    C = t(652215),
    v = t(26279),
    A = t(202541),
    g = t(818348),
    f = t(375708),
    b = t(703345);
function M(a) {
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
                                  text: f.intl.string(f.t["13/7kX"]),
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
function I(a) {
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
            customCheckoutFlow: M,
        } = a,
        { theme: I } = (0, h.wR)(),
        [R, L] = n.useState(x.V1.Scenes.ENTRY),
        [T, y] = n.useState(!1),
        P = i?.name ?? p;
    return (
        (e = s
            ? null == P
                ? f.intl.format(f.t.P52e1r, {})
                : f.intl.format(f.t["4UnIk9"], { guildName: P })
            : m
              ? f.intl.format(f.t.gFaKd1, { helpCenterLink: j.A.getArticleURL(C.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == P
                ? f.intl.format(f.t.SZ5ohR, { guildSubscriptionQuantity: r })
                : f.intl.format(f.t.GxK3Mv, { guildName: P, guildSubscriptionQuantity: r })),
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
                    theme: I,
                    premiumType: A.PremiumTypes.TIER_2,
                    type: g.Nc.has(o ?? g.he.UNKNOWN)
                        ? E.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : E.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: b.xR,
                    children: e,
                }),
                M === v.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, l.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "interactive-text-default",
                          className: b.xR,
                          children: (0, l.jsxs)("p", {
                              children: [f.intl.string(f.t.bIVRSQ), " ", f.intl.string(f.t["0UJqOy"])],
                          }),
                      })
                    : (0, l.jsx)(u.$, {
                          variant: "primary",
                          text:
                              M === v.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? f.intl.string(f.t.sRApon)
                                  : f.intl.string(f.t["/iTxgz"]),
                          onClick: t,
                      }),
            ],
        })
    );
}
