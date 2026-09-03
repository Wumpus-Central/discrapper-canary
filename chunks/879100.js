t.d(e, { W: () => M, _: () => y });
var l = t(477900),
    n = t(582128),
    r = t(284009),
    s = t.n(r),
    i = t(364840),
    c = t(331322),
    o = t(123292),
    d = t(38021),
    h = t(834730),
    u = t(821609),
    m = t(169797),
    p = t(166532),
    x = t(997330),
    E = t(659746),
    C = t(975571),
    A = t(652215),
    v = t(26279),
    g = t(202541),
    j = t(818348),
    f = t(375708),
    b = t(458924);
function y(a) {
    let {
        currentStep: e,
        isRefreshEnabled: t,
        backStep: n,
        handleStepChange: r,
        primaryButtonProps: d,
        secondaryButton: h,
        legacySubmitButton: u,
    } = a;
    return e === p.pn.CONFIRM
        ? null
        : e === p.pn.REVIEW
          ? (s()(null != d, "Missing primaryButtonProps for review step"),
            (0, l.jsx)(m.lo, { onBackClick: null != n ? () => r(n) : void 0, primaryButtonProps: d }))
          : (0, l.jsx)(i.j, {
                children: (0, l.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != n ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != n
                            ? (0, l.jsx)(o.Q, {
                                  text: f.intl.string(f.t["13/7kX"]),
                                  onClick: () => r(n),
                                  variant: "secondary",
                              })
                            : null,
                        (0, l.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(t && e === p.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [h, u],
                        }),
                    ],
                }),
            });
}
function M(a) {
    let e,
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
        } = a,
        { theme: M } = (0, d.wR)(),
        [I, T] = n.useState(x.V1.Scenes.ENTRY),
        [L, R] = n.useState(!1),
        _ = r?.name ?? p;
    return (
        (e = i
            ? null == _
                ? f.intl.format(f.t.P52e1r, {})
                : f.intl.format(f.t["4UnIk9"], { guildName: _ })
            : m
              ? f.intl.format(f.t.gFaKd1, { helpCenterLink: C.A.getArticleURL(A.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == _
                ? f.intl.format(f.t.SZ5ohR, { guildSubscriptionQuantity: s })
                : f.intl.format(f.t.GxK3Mv, { guildName: _, guildSubscriptionQuantity: s })),
        (0, l.jsxs)("div", {
            className: b.RP,
            children: [
                c
                    ? (0, l.jsx)(x.V1, {
                          className: b.ud,
                          nextScene: I,
                          onScenePlay: (a) => {
                              if (!L)
                                  switch (a) {
                                      case x.V1.Scenes.ENTRY:
                                          return T(x.V1.Scenes.IDLE);
                                      case x.V1.Scenes.IDLE:
                                          return T(x.V1.Scenes.SUCCESS);
                                      case x.V1.Scenes.SUCCESS:
                                          return R(!0), T(x.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, l.jsx)(E.Ay, {
                    className: b.E,
                    theme: M,
                    premiumType: g.PremiumTypes.TIER_2,
                    type: j.Nc.has(o ?? j.he.UNKNOWN)
                        ? E.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : E.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, l.jsx)(h.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: b.xR,
                    children: e,
                }),
                y === v.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, l.jsx)(h.E, {
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
                              y === v.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? f.intl.string(f.t.sRApon)
                                  : f.intl.string(f.t["/iTxgz"]),
                          onClick: t,
                      }),
            ],
        })
    );
}
