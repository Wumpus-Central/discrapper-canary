n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(607070),
    o = n(409813),
    l = n(669079),
    u = n(170579),
    c = n(616030),
    d = n(474936),
    f = n(388032),
    _ = n(622694);
function p(e) {
    let { currentStep: t, className: n, purchaseState: p, premiumType: h, useWinterTheme: m = !1, onClose: g, hideCloseButton: E, showTrialBadge: v, showDiscountBadge: y, isGift: I, giftRecipient: T } = e,
        b = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        S = m ? d.nL.WINTER : d.nL.DEFAULT,
        A = () => {
            switch (t) {
                case o.h8.PLAN_SELECT:
                    return h === d.p9.TIER_0 ? f.intl.string(f.t.rk4Uu7) : f.intl.string(f.t['7YWj6+']);
                case o.h8.ADD_PAYMENT_STEPS:
                    return f.intl.string(f.t.vHqbJC);
                case o.h8.REVIEW:
                    return f.intl.string(f.t.wKaVLC);
                default:
                    return f.intl.string(f.t['7YWj6+']);
            }
        };
    return I && (0, l.pO)(T) && t !== o.h8.CONFIRM
        ? (0, i.jsxs)(a.xBx, {
              className: _.modalHeaderCustomGift,
              separator: !1,
              children: [
                  (0, i.jsx)(a.X6q, {
                      variant: 'heading-lg/semibold',
                      children: A()
                  }),
                  (0, i.jsx)(a.olH, {
                      onClick: g,
                      className: _.closeButton,
                      innerClassName: _.closeButtonInner
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: n,
              children: (0, i.jsx)(u.Z, {
                  hideCloseOnFullScreen: !0,
                  hideCloseButton: E,
                  shouldShowPrice: !0,
                  upgradeToPremiumType: h,
                  renderAnimation: () =>
                      h === d.p9.TIER_0
                          ? (0, i.jsx)(c.zC, {
                                className: _.headerAnimation,
                                currentStep: t,
                                purchaseState: p,
                                pause: b
                            })
                          : h === d.p9.TIER_1
                            ? (0, i.jsx)(c.tK, {
                                  className: _.headerAnimation,
                                  currentStep: t,
                                  purchaseState: p,
                                  pause: b
                              })
                            : (0, i.jsx)(c.Bk, {
                                  className: _.headerAnimation,
                                  currentStep: t,
                                  purchaseState: p,
                                  pause: b
                              }),
                  plan: null,
                  isGift: !1,
                  className: _.header,
                  onClose: g,
                  headerTheme: S,
                  showTrialBadge: v,
                  showDiscountBadge: y
              })
          });
}
