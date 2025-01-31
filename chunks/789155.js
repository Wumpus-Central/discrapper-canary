t.d(s, { Z: () => m });
var r = t(200651);
t(192379);
var i = t(780384),
    n = t(481060),
    a = t(410030),
    o = t(388032),
    l = t(534293),
    c = t(982404),
    u = t(299156);
let m = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: t, onContinue: m } = e,
        d = (0, a.ZP)(),
        p = (0, i.wj)(d) ? c : u;
    return null == s
        ? null
        : (0, r.jsxs)('div', {
              className: l.churnFooterContainer,
              children: [
                  (0, r.jsx)('div', { className: l.churnFooterGlow }),
                  (0, r.jsx)('div', { className: l.churnFooterTopBorder }),
                  (0, r.jsx)('div', {
                      className: l.churnFooterContent,
                      children: (0, r.jsxs)('div', {
                          className: l.churnFooterContentBody,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: p,
                                  className: l.churnFooterIcon
                              }),
                              (0, r.jsxs)('div', {
                                  className: l.churnFooterContentBodyInner,
                                  children: [
                                      (0, r.jsx)(n.Text, {
                                          variant: 'text-md/medium',
                                          className: l.churnFooterCopy,
                                          children: o.intl.format(o.t['2gem09'], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.user_usage_limit
                                          })
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: l.churnFooterCTAs,
                                          children: [
                                              (0, r.jsxs)(n.gtL, {
                                                  className: l.churnFooterClaimCTA,
                                                  innerClassName: l.churnFooterClaimCTAInner,
                                                  look: n.iLD.OUTLINED,
                                                  color: n.Ttl.CUSTOM,
                                                  onClick: () => (null == t ? void 0 : t()),
                                                  children: [
                                                      (0, r.jsx)(n.SrA, {
                                                          size: 'xs',
                                                          color: 'currentColor',
                                                          className: l.churnFooterClaimIcon
                                                      }),
                                                      (0, r.jsx)(n.Text, {
                                                          variant: 'text-sm/semibold',
                                                          className: l.churnFooterClaimCopy,
                                                          children: o.intl.string(o.t.zrCzVF)
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(n.zxk, {
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
