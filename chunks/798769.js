r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(607070),
    l = r(409813),
    u = r(669079),
    c = r(170579),
    d = r(616030),
    f = r(474936),
    p = r(388032),
    h = r(622694);
function _(e) {
    let { currentStep: n, className: r, purchaseState: _, premiumType: m, useWinterTheme: g = !1, onClose: E, hideCloseButton: v, showTrialBadge: y, showDiscountBadge: b, isGift: I, giftRecipient: T } = e,
        S = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        A = g ? f.nL.WINTER : f.nL.DEFAULT,
        C = () => {
            switch (n) {
                case l.h8.PLAN_SELECT:
                    return m === f.p9.TIER_0 ? p.intl.string(p.t.rk4Uu7) : p.intl.string(p.t['7YWj6+']);
                case l.h8.ADD_PAYMENT_STEPS:
                    return p.intl.string(p.t.vHqbJC);
                case l.h8.REVIEW:
                    return p.intl.string(p.t.wKaVLC);
                default:
                    return p.intl.string(p.t['7YWj6+']);
            }
        };
    return I && (0, u.pO)(T) && n !== l.h8.CONFIRM
        ? (0, i.jsxs)(o.ModalHeader, {
              className: h.modalHeaderCustomGift,
              separator: !1,
              children: [
                  (0, i.jsx)(o.Heading, {
                      variant: 'heading-lg/semibold',
                      children: C()
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                      onClick: E,
                      className: h.closeButton,
                      innerClassName: h.closeButtonInner
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: r,
              children: (0, i.jsx)(c.Z, {
                  hideCloseOnFullScreen: !0,
                  hideCloseButton: v,
                  shouldShowPrice: !0,
                  upgradeToPremiumType: m,
                  renderAnimation: () =>
                      m === f.p9.TIER_0
                          ? (0, i.jsx)(d.zC, {
                                className: h.headerAnimation,
                                currentStep: n,
                                purchaseState: _,
                                pause: S
                            })
                          : m === f.p9.TIER_1
                            ? (0, i.jsx)(d.tK, {
                                  className: h.headerAnimation,
                                  currentStep: n,
                                  purchaseState: _,
                                  pause: S
                              })
                            : (0, i.jsx)(d.Bk, {
                                  className: h.headerAnimation,
                                  currentStep: n,
                                  purchaseState: _,
                                  pause: S
                              }),
                  plan: null,
                  isGift: !1,
                  className: h.header,
                  onClose: E,
                  headerTheme: A,
                  showTrialBadge: y,
                  showDiscountBadge: b
              })
          });
}
