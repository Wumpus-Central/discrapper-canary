r.d(s, { Z: () => m });
var t = r(255367);
r(73800);
var n = r(780384),
    i = r(481060),
    a = r(410030),
    o = r(388032),
    l = r(615836),
    c = r(982404),
    u = r(299156);
let m = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: r, onContinue: m } = e,
        d = (0, a.ZP)(),
        p = (0, n.wj)(d) ? c : u;
    return null == s
        ? null
        : (0, t.jsxs)('div', {
              className: l.churnFooterContainer,
              children: [
                  (0, t.jsx)('div', { className: l.churnFooterGlow }),
                  (0, t.jsx)('div', { className: l.churnFooterTopBorder }),
                  (0, t.jsx)('div', {
                      className: l.churnFooterContent,
                      children: (0, t.jsxs)('div', {
                          className: l.churnFooterContentBody,
                          children: [
                              (0, t.jsx)('img', {
                                  alt: '',
                                  src: p,
                                  className: l.churnFooterIcon
                              }),
                              (0, t.jsxs)('div', {
                                  className: l.churnFooterContentBodyInner,
                                  children: [
                                      (0, t.jsx)(i.Text, {
                                          variant: 'text-md/medium',
                                          className: l.churnFooterCopy,
                                          children: o.intl.format(o.t['2gem09'], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.user_usage_limit
                                          })
                                      }),
                                      (0, t.jsxs)('div', {
                                          className: l.churnFooterCTAs,
                                          children: [
                                              (0, t.jsxs)(i.gtL, {
                                                  className: l.churnFooterClaimCTA,
                                                  innerClassName: l.churnFooterClaimCTAInner,
                                                  look: i.iLD.OUTLINED,
                                                  color: i.Ttl.CUSTOM,
                                                  onClick: () => (null == r ? void 0 : r()),
                                                  children: [
                                                      (0, t.jsx)(i.SrA, {
                                                          size: 'xs',
                                                          color: 'currentColor',
                                                          className: l.churnFooterClaimIcon
                                                      }),
                                                      (0, t.jsx)(i.Text, {
                                                          variant: 'text-sm/semibold',
                                                          className: l.churnFooterClaimCopy,
                                                          children: o.intl.string(o.t.zrCzVF)
                                                      })
                                                  ]
                                              }),
                                              (0, t.jsx)(i.zxk, {
                                                  onClick: () => (null == m ? void 0 : m()),
                                                  children: o.intl.string(o.t['3PatS0'])
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
