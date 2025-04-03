r.d(s, { Z: () => m });
var t = r(200651);
r(192379);
var n = r(780384),
    a = r(481060),
    o = r(410030),
    i = r(388032),
    l = r(615836),
    c = r(982404),
    u = r(299156);
let m = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: r, onContinue: m } = e,
        d = (0, o.ZP)(),
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
                                      (0, t.jsx)(a.Text, {
                                          variant: 'text-md/medium',
                                          className: l.churnFooterCopy,
                                          children: i.NW.format(i.t['2gem09'], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.user_usage_limit
                                          })
                                      }),
                                      (0, t.jsxs)('div', {
                                          className: l.churnFooterCTAs,
                                          children: [
                                              (0, t.jsxs)(a.gtL, {
                                                  className: l.churnFooterClaimCTA,
                                                  innerClassName: l.churnFooterClaimCTAInner,
                                                  look: a.iLD.OUTLINED,
                                                  color: a.Ttl.CUSTOM,
                                                  onClick: () => (null == r ? void 0 : r()),
                                                  children: [
                                                      (0, t.jsx)(a.SrA, {
                                                          size: 'xs',
                                                          color: 'currentColor',
                                                          className: l.churnFooterClaimIcon
                                                      }),
                                                      (0, t.jsx)(a.Text, {
                                                          variant: 'text-sm/semibold',
                                                          className: l.churnFooterClaimCopy,
                                                          children: i.NW.string(i.t.zrCzVF)
                                                      })
                                                  ]
                                              }),
                                              (0, t.jsx)(a.zxk, {
                                                  onClick: () => (null == m ? void 0 : m()),
                                                  children: i.NW.string(i.t['3PatS0'])
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
