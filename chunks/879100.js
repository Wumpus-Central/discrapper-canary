n.d(t, { W: () => m });
var a = n(627968),
    c = n(64700),
    i = n(397927),
    r = n(796012),
    s = n(659746),
    d = n(975571),
    l = n(652215),
    o = n(26279),
    b = n(788868),
    u = n(818348),
    p = n(985018),
    f = n(877985);
function m(e) {
    let t,
        {
            onClose: n,
            guild: m,
            guildBoostQuantity: y,
            isTransfer: A = !1,
            withAnimation: E = !0,
            paymentSourceType: R,
            didPurchaseOnFractionalPremium: h = !1,
            fallbackGuildName: v,
            customCheckoutFlow: I,
        } = e,
        { theme: S } = (0, i.wRf)(),
        [x, j] = c.useState(r.V1.Scenes.ENTRY),
        [w, U] = c.useState(!1),
        g = m?.name ?? v;
    return (
        (t = A
            ? null == g
                ? p.intl.format(p.t.P52e1r, {})
                : p.intl.format(p.t["4UnIk9"], { guildName: g })
            : h
              ? p.intl.format(p.t.gFaKd1, { helpCenterLink: d.A.getArticleURL(l.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == g
                ? p.intl.format(p.t.SZ5ohR, { guildSubscriptionQuantity: y })
                : p.intl.format(p.t.GxK3Mv, { guildName: g, guildSubscriptionQuantity: y })),
        (0, a.jsxs)("div", {
            className: f.RP,
            children: [
                E
                    ? (0, a.jsx)(r.V1, {
                          className: f.ud,
                          nextScene: x,
                          onScenePlay: (e) => {
                              if (!w)
                                  switch (e) {
                                      case r.V1.Scenes.ENTRY:
                                          return j(r.V1.Scenes.IDLE);
                                      case r.V1.Scenes.IDLE:
                                          return j(r.V1.Scenes.SUCCESS);
                                      case r.V1.Scenes.SUCCESS:
                                          return U(!0), j(r.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, a.jsx)(s.Ay, {
                    className: f.E,
                    theme: S,
                    premiumType: b.PremiumTypes.TIER_2,
                    type: u.Nc.has(R ?? u.he.UNKNOWN)
                        ? s.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : s.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, a.jsx)("div", { className: f.xR, children: t }),
                (0, a.jsx)(i.Button, {
                    variant: "primary",
                    text:
                        I === o.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                            ? p.intl.string(p.t.sRApon)
                            : p.intl.string(p.t["/iTxgz"]),
                    onClick: n,
                }),
            ],
        })
    );
}
