"use strict";
n.d(t, { W: () => N, _: () => C });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(364840),
    l = n(331322),
    u = n(123292),
    c = n(38021),
    d = n(834730),
    _ = n(821609),
    h = n(169797),
    f = n(166532),
    p = n(997330),
    E = n(659746),
    m = n(975571),
    g = n(652215),
    A = n(26279),
    I = n(788868),
    T = n(818348),
    S = n(375708),
    y = n(703345);
function C(e) {
    let {
        currentStep: t,
        isRefreshEnabled: n,
        backStep: r,
        handleStepChange: s,
        primaryButtonProps: c,
        secondaryButton: d,
        legacySubmitButton: _,
    } = e;
    return t === f.pn.CONFIRM
        ? null
        : t === f.pn.REVIEW
          ? (a()(null != c, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(h.lo, { onBackClick: null != r ? () => s(r) : void 0, primaryButtonProps: c }))
          : (0, i.jsx)(o.j, {
                children: (0, i.jsxs)(l.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != r ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != r
                            ? (0, i.jsx)(u.Q, {
                                  text: S.intl.string(S.t["13/7kX"]),
                                  onClick: () => s(r),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(l.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(n && t === f.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [d, _],
                        }),
                    ],
                }),
            });
}
function N(e) {
    let t,
        {
            onClose: n,
            guild: s,
            guildBoostQuantity: a,
            isTransfer: o = !1,
            withAnimation: l = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: h = !1,
            fallbackGuildName: f,
            customCheckoutFlow: C,
        } = e,
        { theme: N } = (0, c.wR)(),
        [v, R] = r.useState(p.V1.Scenes.ENTRY),
        [O, b] = r.useState(!1),
        D = s?.name ?? f;
    return (
        (t = o
            ? null == D
                ? S.intl.format(S.t.P52e1r, {})
                : S.intl.format(S.t["4UnIk9"], { guildName: D })
            : h
              ? S.intl.format(S.t.gFaKd1, { helpCenterLink: m.A.getArticleURL(g.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == D
                ? S.intl.format(S.t.SZ5ohR, { guildSubscriptionQuantity: a })
                : S.intl.format(S.t.GxK3Mv, { guildName: D, guildSubscriptionQuantity: a })),
        (0, i.jsxs)("div", {
            className: y.RP,
            children: [
                l
                    ? (0, i.jsx)(p.V1, {
                          className: y.ud,
                          nextScene: v,
                          onScenePlay: (e) => {
                              if (!O)
                                  switch (e) {
                                      case p.V1.Scenes.ENTRY:
                                          return R(p.V1.Scenes.IDLE);
                                      case p.V1.Scenes.IDLE:
                                          return R(p.V1.Scenes.SUCCESS);
                                      case p.V1.Scenes.SUCCESS:
                                          return b(!0), R(p.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(E.Ay, {
                    className: y.E,
                    theme: N,
                    premiumType: I.PremiumTypes.TIER_2,
                    type: T.Nc.has(u ?? T.he.UNKNOWN)
                        ? E.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : E.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: y.xR,
                    children: t,
                }),
                C === A.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, i.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "interactive-text-default",
                          className: y.xR,
                          children: (0, i.jsxs)("p", {
                              children: [S.intl.string(S.t.bIVRSQ), " ", S.intl.string(S.t["0UJqOy"])],
                          }),
                      })
                    : (0, i.jsx)(_.$, {
                          variant: "primary",
                          text:
                              C === A.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? S.intl.string(S.t.sRApon)
                                  : S.intl.string(S.t["/iTxgz"]),
                          onClick: n,
                      }),
            ],
        })
    );
}
