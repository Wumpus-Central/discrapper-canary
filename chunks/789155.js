r.d(s, { Z: () => d });
var t = r(255367);
r(73800);
var n = r(780384),
    i = r(755721),
    a = r(481060),
    o = r(410030),
    l = r(388032),
    c = r(615836),
    u = r(982404),
    m = r(299156);
let d = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: r, onContinue: d } = e,
        p = (0, o.ZP)(),
        x = (0, n.wj)(p) ? u : m;
    return null == s
        ? null
        : (0, t.jsxs)('div', {
              className: c.churnFooterContainer,
              children: [
                  (0, t.jsx)('div', { className: c.churnFooterGlow }),
                  (0, t.jsx)('div', { className: c.churnFooterTopBorder }),
                  (0, t.jsx)('div', {
                      className: c.churnFooterContent,
                      children: (0, t.jsxs)('div', {
                          className: c.churnFooterContentBody,
                          children: [
                              (0, t.jsx)('img', {
                                  alt: '',
                                  src: x,
                                  className: c.churnFooterIcon
                              }),
                              (0, t.jsxs)('div', {
                                  className: c.churnFooterContentBodyInner,
                                  children: [
                                      (0, t.jsx)(a.Text, {
                                          variant: 'text-md/medium',
                                          className: c.churnFooterCopy,
                                          children: l.intl.format(l.t['2gem09'], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.user_usage_limit
                                          })
                                      }),
                                      (0, t.jsxs)('div', {
                                          className: c.churnFooterCTAs,
                                          children: [
                                              (0, t.jsxs)(a.gtL, {
                                                  className: c.churnFooterClaimCTA,
                                                  innerClassName: c.churnFooterClaimCTAInner,
                                                  look: i.iL.OUTLINED,
                                                  color: i.Tt.CUSTOM,
                                                  onClick: () => (null == r ? void 0 : r()),
                                                  children: [
                                                      (0, t.jsx)(a.SrA, {
                                                          size: 'xs',
                                                          color: 'currentColor',
                                                          className: c.churnFooterClaimIcon
                                                      }),
                                                      (0, t.jsx)(a.Text, {
                                                          variant: 'text-sm/semibold',
                                                          className: c.churnFooterClaimCopy,
                                                          children: l.intl.string(l.t.zrCzVF)
                                                      })
                                                  ]
                                              }),
                                              (0, t.jsx)(a.zxk, {
                                                  variant: 'primary',
                                                  text: l.intl.string(l.t['3PatS0']),
                                                  onClick: () => (null == d ? void 0 : d())
                                              })
                                          ]
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
