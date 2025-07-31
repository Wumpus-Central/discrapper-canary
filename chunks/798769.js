n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(409813),
    l = n(669079),
    c = n(709093),
    u = n(170579),
    d = n(616030),
    _ = n(474936),
    f = n(388032),
    p = n(451316);
function h(e) {
    let { currentStep: t, className: n, purchaseState: h, premiumType: m, useWinterTheme: g = !1, onClose: E, hideCloseButton: b, showTrialBadge: y, showDiscountBadge: O, isGift: v, giftRecipient: I, isEligibleForTrial: T, enablePremiumBrandRefresh: S } = e,
        A = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        N = g ? _.nL.WINTER : _.nL.DEFAULT,
        C = () => {
            switch (t) {
                case s.h8.PLAN_SELECT:
                    return m === _.p9.TIER_0 ? f.intl.string(f.t.rk4Uu7) : f.intl.string(f.t['7YWj6+']);
                case s.h8.ADD_PAYMENT_STEPS:
                    return f.intl.string(f.t.vHqbJC);
                case s.h8.REVIEW:
                    return f.intl.string(f.t.wKaVLC);
                default:
                    return f.intl.string(f.t['7YWj6+']);
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
        : S
          ? (0, r.jsx)(c.Z, {
                hideCloseOnFullScreen: !0,
                hideCloseButton: b,
                upgradeToPremiumType: m,
                onClose: E,
                isEligibleForTrial: T,
                showTrialBadge: y,
                showDiscountBadge: O
            })
          : (0, r.jsx)('div', {
                className: n,
                children: (0, r.jsx)(u.Z, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: b,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: m,
                    renderAnimation: () =>
                        m === _.p9.TIER_0
                            ? (0, r.jsx)(d.zC, {
                                  className: p.headerAnimation,
                                  currentStep: t,
                                  purchaseState: h,
                                  pause: A
                              })
                            : m === _.p9.TIER_1
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
