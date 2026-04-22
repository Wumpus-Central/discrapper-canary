n.d(t, { W: () => y });
var a = n(627968),
    c = n(64700),
    i = n(38021),
    r = n(821609),
    s = n(796012),
    d = n(659746),
    l = n(975571),
    o = n(652215),
    b = n(26279),
    u = n(788868),
    p = n(818348),
    f = n(985018),
    m = n(7921);
function y(e) {
    let t,
        {
            onClose: n,
            guild: y,
            guildBoostQuantity: E,
            isTransfer: R = !1,
            withAnimation: A = !0,
            paymentSourceType: h,
            didPurchaseOnFractionalPremium: v = !1,
            fallbackGuildName: I,
            customCheckoutFlow: S,
        } = e,
        { theme: x } = (0, i.wR)(),
        [j, U] = c.useState(s.V1.Scenes.ENTRY),
        [w, g] = c.useState(!1),
        T = y?.name ?? I;
    return (
        (t = R
            ? null == T
                ? f.intl.format(f.t.P52e1r, {})
                : f.intl.format(f.t["4UnIk9"], { guildName: T })
            : v
              ? f.intl.format(f.t.gFaKd1, { helpCenterLink: l.A.getArticleURL(o.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == T
                ? f.intl.format(f.t.SZ5ohR, { guildSubscriptionQuantity: E })
                : f.intl.format(f.t.GxK3Mv, { guildName: T, guildSubscriptionQuantity: E })),
        (0, a.jsxs)("div", {
            className: m.RP,
            children: [
                A
                    ? (0, a.jsx)(s.V1, {
                          className: m.ud,
                          nextScene: j,
                          onScenePlay: (e) => {
                              if (!w)
                                  switch (e) {
                                      case s.V1.Scenes.ENTRY:
                                          return U(s.V1.Scenes.IDLE);
                                      case s.V1.Scenes.IDLE:
                                          return U(s.V1.Scenes.SUCCESS);
                                      case s.V1.Scenes.SUCCESS:
                                          return g(!0), U(s.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, a.jsx)(d.Ay, {
                    className: m.E,
                    theme: x,
                    premiumType: u.PremiumTypes.TIER_2,
                    type: p.Nc.has(h ?? p.he.UNKNOWN)
                        ? d.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : d.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, a.jsx)("div", { className: m.xR, children: t }),
                S === b.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, a.jsx)("div", {
                          className: m.xR,
                          children: (0, a.jsxs)("p", {
                              children: [f.intl.string(f.t.bIVRSQ), " ", f.intl.string(f.t["0UJqOy"])],
                          }),
                      })
                    : (0, a.jsx)(r.$, {
                          variant: "primary",
                          text:
                              S === b.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? f.intl.string(f.t.sRApon)
                                  : f.intl.string(f.t["/iTxgz"]),
                          onClick: n,
                      }),
            ],
        })
    );
}
