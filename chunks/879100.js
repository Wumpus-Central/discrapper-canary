t.d(a, { W: () => I, _: () => y });
var l = t(477900),
    n = t(582128),
    r = t(284009),
    s = t.n(r),
    i = t(364840),
    c = t(331322),
    o = t(123292),
    u = t(38021),
    d = t(834730),
    h = t(821609),
    m = t(480642),
    p = t(166532),
    x = t(997330),
    C = t(659746),
    E = t(975571),
    g = t(652215),
    v = t(26279),
    f = t(202541),
    j = t(818348),
    A = t(375708),
    b = t(458924);
function y(e) {
    let {
        currentStep: a,
        isRefreshEnabled: t,
        backStep: n,
        handleStepChange: r,
        primaryButtonProps: u,
        secondaryButton: d,
        legacySubmitButton: h,
    } = e;
    return a === p.pn.CONFIRM
        ? null
        : a === p.pn.REVIEW
          ? (s()(null != u, "Missing primaryButtonProps for review step"),
            (0, l.jsx)(m.lo, { onBackClick: null != n ? () => r(n) : void 0, primaryButtonProps: u }))
          : (0, l.jsx)(i.j, {
                children: (0, l.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != n ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != n
                            ? (0, l.jsx)(o.Q, {
                                  text: A.intl.string(A.t["13/7kX"]),
                                  onClick: () => r(n),
                                  variant: "secondary",
                              })
                            : null,
                        (0, l.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(t && a === p.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [d, h],
                        }),
                    ],
                }),
            });
}
function I(e) {
    let a,
        {
            onClose: t,
            guild: r,
            guildBoostQuantity: s,
            isTransfer: i = !1,
            withAnimation: c = !0,
            paymentSourceType: o,
            didPurchaseOnFractionalPremium: m = !1,
            fallbackGuildName: p,
            customCheckoutFlow: y,
        } = e,
        { theme: I } = (0, u.wR)(),
        [M, T] = n.useState(x.V1.Scenes.ENTRY),
        [R, L] = n.useState(!1),
        P = r?.name ?? p;
    return (
        (a = i
            ? null == P
                ? A.intl.format(A.t.P52e1r, {})
                : A.intl.format(A.t["4UnIk9"], { guildName: P })
            : m
              ? A.intl.format(A.t.gFaKd1, { helpCenterLink: E.A.getArticleURL(g.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == P
                ? A.intl.format(A.t.SZ5ohR, { guildSubscriptionQuantity: s })
                : A.intl.format(A.t.GxK3Mv, { guildName: P, guildSubscriptionQuantity: s })),
        (0, l.jsxs)("div", {
            className: b.RP,
            children: [
                c
                    ? (0, l.jsx)(x.V1, {
                          className: b.ud,
                          nextScene: M,
                          onScenePlay: (e) => {
                              if (!R)
                                  switch (e) {
                                      case x.V1.Scenes.ENTRY:
                                          return T(x.V1.Scenes.IDLE);
                                      case x.V1.Scenes.IDLE:
                                          return T(x.V1.Scenes.SUCCESS);
                                      case x.V1.Scenes.SUCCESS:
                                          return L(!0), T(x.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, l.jsx)(C.Ay, {
                    className: b.E,
                    theme: I,
                    premiumType: f.PremiumTypes.TIER_2,
                    type: j.Nc.has(o ?? j.he.UNKNOWN)
                        ? C.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : C.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: b.xR,
                    children: a,
                }),
                y === v.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, l.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "interactive-text-default",
                          className: b.xR,
                          children: (0, l.jsxs)("p", {
                              children: [A.intl.string(A.t.bIVRSQ), " ", A.intl.string(A.t["0UJqOy"])],
                          }),
                      })
                    : (0, l.jsx)(h.$, {
                          variant: "primary",
                          text:
                              y === v.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? A.intl.string(A.t.sRApon)
                                  : A.intl.string(A.t["/iTxgz"]),
                          onClick: t,
                      }),
            ],
        })
    );
}
