n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(409813),
    l = n(669079),
    c = n(709093),
    u = n(170579),
    d = n(616030),
    f = n(474936),
    p = n(388032),
    _ = n(15962);
function m(e) {
    let {
            currentStep: t,
            className: n,
            purchaseState: m,
            premiumType: h,
            onClose: g,
            hideCloseButton: E,
            showTrialBadge: b,
            showDiscountBadge: y,
            isGift: O,
            giftRecipient: v,
            isEligibleForTrial: S,
            enablePremiumBrandRefresh: I,
            isDisplayingWowMomentConfirmation: T,
        } = e,
        A = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        C = () => {
            switch (t) {
                case s.h8.PLAN_SELECT:
                    return h === f.PremiumTypes.TIER_0 ? p.intl.string(p.t.rk4Uu8) : p.intl.string(p.t["7YWj6+"]);
                case s.h8.ADD_PAYMENT_STEPS:
                    return p.intl.string(p.t.vHqbJE);
                case s.h8.REVIEW:
                    return p.intl.string(p.t.wKaVLC);
                default:
                    return p.intl.string(p.t["7YWj6+"]);
            }
        };
    return O && (0, l.pO)(v) && t !== s.h8.CONFIRM
        ? (0, r.jsxs)(a.xBx, {
              className: _.modalHeaderCustomGift,
              separator: !1,
              "data-migration-pending": !0,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: C(),
                  }),
                  (0, r.jsx)(a.olH, {
                      onClick: g,
                      className: _.closeButton,
                      innerClassName: _.closeButtonInner,
                      "data-migration-pending": !0,
                  }),
              ],
          })
        : I || T
          ? (0, r.jsx)(c.Z, {
                hideCloseOnFullScreen: !0,
                hideCloseButton: E,
                upgradeToPremiumType: h,
                onClose: g,
                isEligibleForTrial: S,
                showTrialBadge: b,
                showDiscountBadge: y,
            })
          : (0, r.jsx)("div", {
                className: n,
                children: (0, r.jsx)(u.Z, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: E,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: h,
                    renderAnimation: () =>
                        h === f.PremiumTypes.TIER_0
                            ? (0, r.jsx)(d.zC, {
                                  className: _.headerAnimation,
                                  currentStep: t,
                                  purchaseState: m,
                                  pause: A,
                              })
                            : h === f.PremiumTypes.TIER_1
                              ? (0, r.jsx)(d.tK, {
                                    className: _.headerAnimation,
                                    currentStep: t,
                                    purchaseState: m,
                                    pause: A,
                                })
                              : (0, r.jsx)(d.Bk, {
                                    className: _.headerAnimation,
                                    currentStep: t,
                                    purchaseState: m,
                                    pause: A,
                                }),
                    plan: null,
                    isGift: !1,
                    className: _.header,
                    onClose: g,
                    showTrialBadge: b,
                    showDiscountBadge: y,
                }),
            });
}
