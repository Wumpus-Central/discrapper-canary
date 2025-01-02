n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(607070),
    o = n(409813),
    u = n(669079),
    s = n(170579),
    c = n(616030),
    d = n(474936),
    f = n(388032),
    C = n(622694);
function _(e) {
    let { currentStep: t, className: n, purchaseState: _, premiumType: m, useWinterTheme: L = !1, onClose: S, hideCloseButton: p, showTrialBadge: T, showDiscountBadge: E, isGift: N, giftRecipient: h } = e,
        g = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        A = L ? d.nL.WINTER : d.nL.DEFAULT;
    return N && (0, u.pO)(h) && t !== o.h8.CONFIRM
        ? (0, i.jsxs)(a.ModalHeader, {
              className: C.modalHeaderCustomGift,
              separator: !1,
              children: [
                  (0, i.jsx)('div', {
                      className: C.giftNitroInfo,
                      children: (0, i.jsx)(a.Heading, {
                          variant: 'heading-lg/semibold',
                          children: (() => {
                              switch (t) {
                                  case o.h8.PLAN_SELECT:
                                      return m === d.p9.TIER_0 ? f.intl.string(f.t.rk4Uu7) : f.intl.string(f.t['7YWj6+']);
                                  case o.h8.ADD_PAYMENT_STEPS:
                                      return f.intl.string(f.t.vHqbJC);
                                  case o.h8.REVIEW:
                                      return f.intl.string(f.t.wKaVLC);
                                  default:
                                      return f.intl.string(f.t['7YWj6+']);
                              }
                          })()
                      })
                  }),
                  (0, i.jsx)(a.ModalCloseButton, {
                      onClick: S,
                      className: C.closeButton
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: n,
              children: (0, i.jsx)(s.Z, {
                  hideCloseOnFullScreen: !0,
                  hideCloseButton: p,
                  shouldShowPrice: !0,
                  upgradeToPremiumType: m,
                  renderAnimation: () =>
                      m === d.p9.TIER_0
                          ? (0, i.jsx)(c.zC, {
                                className: C.headerAnimation,
                                currentStep: t,
                                purchaseState: _,
                                pause: g
                            })
                          : m === d.p9.TIER_1
                            ? (0, i.jsx)(c.tK, {
                                  className: C.headerAnimation,
                                  currentStep: t,
                                  purchaseState: _,
                                  pause: g
                              })
                            : (0, i.jsx)(c.Bk, {
                                  className: C.headerAnimation,
                                  currentStep: t,
                                  purchaseState: _,
                                  pause: g
                              }),
                  plan: null,
                  isGift: !1,
                  className: C.header,
                  onClose: S,
                  headerTheme: A,
                  showTrialBadge: T,
                  showDiscountBadge: E
              })
          });
}
