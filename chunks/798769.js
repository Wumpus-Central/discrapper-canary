n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(409813),
    l = n(669079),
    c = n(170579),
    u = n(696515),
    d = n(616030),
    f = n(474936),
    _ = n(388032),
    p = n(451316);
function h(e) {
    let { currentStep: t, className: n, purchaseState: h, premiumType: m, useWinterTheme: g = !1, onClose: E, hideCloseButton: b, showTrialBadge: y, showDiscountBadge: O, isGift: v, giftRecipient: I, isEligibleForTrial: S, enablePremiumRebrandDesign: T } = e,
        A = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        N = g ? f.nL.WINTER : f.nL.DEFAULT,
        C = () => {
            switch (t) {
                case s.h8.PLAN_SELECT:
                    return m === f.p9.TIER_0 ? _.intl.string(_.t.rk4Uu7) : _.intl.string(_.t['7YWj6+']);
                case s.h8.ADD_PAYMENT_STEPS:
                    return _.intl.string(_.t.vHqbJC);
                case s.h8.REVIEW:
                    return _.intl.string(_.t.wKaVLC);
                default:
                    return _.intl.string(_.t['7YWj6+']);
            }
        };
    return v && (0, l.pO)(I) && t !== s.h8.CONFIRM
        ? (0, r.jsxs)(a.xBx, {
              className: p.modalHeaderCustomGift,
              separator: !1,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: 'heading-lg/semibold',
                      children: C()
                  }),
                  (0, r.jsx)(a.olH, {
                      onClick: E,
                      className: p.closeButton,
                      innerClassName: p.closeButtonInner
                  })
              ]
          })
        : T
          ? (0, r.jsx)(u.Z, {
                hideCloseOnFullScreen: !0,
                hideCloseButton: b,
                upgradeToPremiumType: m,
                onClose: E,
                isEligibleForTrial: S,
                showTrialBadge: y,
                showDiscountBadge: O
            })
          : (0, r.jsx)('div', {
                className: n,
                children: (0, r.jsx)(c.Z, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: b,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: m,
                    renderAnimation: () =>
                        m === f.p9.TIER_0
                            ? (0, r.jsx)(d.zC, {
                                  className: p.headerAnimation,
                                  currentStep: t,
                                  purchaseState: h,
                                  pause: A
                              })
                            : m === f.p9.TIER_1
                              ? (0, r.jsx)(d.tK, {
                                    className: p.headerAnimation,
                                    currentStep: t,
                                    purchaseState: h,
                                    pause: A
                                })
                              : (0, r.jsx)(d.Bk, {
                                    className: p.headerAnimation,
                                    currentStep: t,
                                    purchaseState: h,
                                    pause: A
                                }),
                    plan: null,
                    isGift: !1,
                    className: p.header,
                    onClose: E,
                    headerTheme: N,
                    showTrialBadge: y,
                    showDiscountBadge: O
                })
            });
}
