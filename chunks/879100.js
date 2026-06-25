"use strict";
n.d(t, { W: () => C, _: () => y });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(364840),
    l = n(331322),
    u = n(123292),
    c = n(38021),
    d = n(821609),
    _ = n(169797),
    h = n(166532),
    f = n(997330),
    p = n(659746),
    E = n(975571),
    m = n(652215),
    g = n(26279),
    A = n(788868),
    I = n(818348),
    T = n(375708),
    S = n(703345);
function y(e) {
    let {
        currentStep: t,
        isRefreshEnabled: n,
        backStep: r,
        handleStepChange: s,
        primaryButtonProps: c,
        secondaryButton: d,
        legacySubmitButton: f,
    } = e;
    return t === h.pn.CONFIRM
        ? null
        : t === h.pn.REVIEW
          ? (a()(null != c, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(_.lo, { onBackClick: null != r ? () => s(r) : void 0, primaryButtonProps: c }))
          : (0, i.jsx)(o.j, {
                children: (0, i.jsxs)(l.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != r ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != r
                            ? (0, i.jsx)(u.Q, {
                                  text: T.intl.string(T.t["13/7kX"]),
                                  onClick: () => s(r),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(l.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(n && t === h.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [d, f],
                        }),
                    ],
                }),
            });
}
function C(e) {
    let t,
        {
            onClose: n,
            guild: s,
            guildBoostQuantity: a,
            isTransfer: o = !1,
            withAnimation: l = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: _ = !1,
            fallbackGuildName: h,
            customCheckoutFlow: y,
        } = e,
        { theme: C } = (0, c.wR)(),
        [N, v] = r.useState(f.V1.Scenes.ENTRY),
        [R, O] = r.useState(!1),
        b = s?.name ?? h;
    return (
        (t = o
            ? null == b
                ? T.intl.format(T.t.P52e1r, {})
                : T.intl.format(T.t["4UnIk9"], { guildName: b })
            : _
              ? T.intl.format(T.t.gFaKd1, { helpCenterLink: E.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == b
                ? T.intl.format(T.t.SZ5ohR, { guildSubscriptionQuantity: a })
                : T.intl.format(T.t.GxK3Mv, { guildName: b, guildSubscriptionQuantity: a })),
        (0, i.jsxs)("div", {
            className: S.RP,
            children: [
                l
                    ? (0, i.jsx)(f.V1, {
                          className: S.ud,
                          nextScene: N,
                          onScenePlay: (e) => {
                              if (!R)
                                  switch (e) {
                                      case f.V1.Scenes.ENTRY:
                                          return v(f.V1.Scenes.IDLE);
                                      case f.V1.Scenes.IDLE:
                                          return v(f.V1.Scenes.SUCCESS);
                                      case f.V1.Scenes.SUCCESS:
                                          return O(!0), v(f.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(p.Ay, {
                    className: S.E,
                    theme: C,
                    premiumType: A.PremiumTypes.TIER_2,
                    type: I.Nc.has(u ?? I.he.UNKNOWN)
                        ? p.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : p.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", { className: S.xR, children: t }),
                y === g.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, i.jsx)("div", {
                          className: S.xR,
                          children: (0, i.jsxs)("p", {
                              children: [T.intl.string(T.t.bIVRSQ), " ", T.intl.string(T.t["0UJqOy"])],
                          }),
                      })
                    : (0, i.jsx)(d.$, {
                          variant: "primary",
                          text:
                              y === g.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? T.intl.string(T.t.sRApon)
                                  : T.intl.string(T.t["/iTxgz"]),
                          onClick: n,
                      }),
            ],
        })
    );
}
