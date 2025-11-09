n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(409813),
    l = n(669079),
    c = n(709093),
    u = n(170579),
    d = n(616030),
    f = n(474936),
    _ = n(388032),
    p = n(900678);
function h(e) {
    let {
            currentStep: t,
            className: n,
            purchaseState: h,
            premiumType: m,
            onClose: g,
            hideCloseButton: E,
            showTrialBadge: b,
            showDiscountBadge: y,
            isGift: O,
            giftRecipient: v,
            isEligibleForTrial: I,
            enablePremiumBrandRefresh: S,
            isDisplayingWowMomentConfirmation: T,
        } = e,
        A = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        C = () => {
            switch (t) {
                case s.h8.PLAN_SELECT:
                    return m === f.PremiumTypes.TIER_0 ? _.intl.string(_.t.rk4Uu8) : _.intl.string(_.t["7YWj6+"]);
                case s.h8.ADD_PAYMENT_STEPS:
                    return _.intl.string(_.t.vHqbJE);
                case s.h8.REVIEW:
                    return _.intl.string(_.t.wKaVLC);
                default:
                    return _.intl.string(_.t["7YWj6+"]);
            }
        };
    return O && (0, l.pO)(v) && t !== s.h8.CONFIRM
        ? (0, r.jsxs)(a.xBx, {
              className: p.modalHeaderCustomGift,
              separator: !1,
              "data-migration-pending": !0,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: C(),
                  }),
                  (0, r.jsx)(a.olH, {
                      onClick: g,
                      className: p.closeButton,
                      innerClassName: p.closeButtonInner,
                      "data-migration-pending": !0,
                  }),
              ],
          })
        : S || T
          ? (0, r.jsx)(c.Z, {
                hideCloseOnFullScreen: !0,
                hideCloseButton: E,
                upgradeToPremiumType: m,
                onClose: g,
                isEligibleForTrial: I,
                showTrialBadge: b,
                showDiscountBadge: y,
            })
          : (0, r.jsx)("div", {
                className: n,
                children: (0, r.jsx)(u.Z, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: E,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: m,
                    renderAnimation: () =>
                        m === f.PremiumTypes.TIER_0
                            ? (0, r.jsx)(d.zC, {
                                  className: p.headerAnimation,
                                  currentStep: t,
                                  purchaseState: h,
                                  pause: A,
                              })
                            : m === f.PremiumTypes.TIER_1
                              ? (0, r.jsx)(d.tK, {
                                    className: p.headerAnimation,
                                    currentStep: t,
                                    purchaseState: h,
                                    pause: A,
                                })
                              : (0, r.jsx)(d.Bk, {
                                    className: p.headerAnimation,
                                    currentStep: t,
                                    purchaseState: h,
                                    pause: A,
                                }),
                    plan: null,
                    isGift: !1,
                    className: p.header,
                    onClose: g,
                    showTrialBadge: b,
                    showDiscountBadge: y,
                }),
            });
}
