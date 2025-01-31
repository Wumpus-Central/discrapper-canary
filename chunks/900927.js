n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(399606),
    a = n(481060),
    r = n(275759),
    s = n(565138),
    o = n(706454),
    c = n(271383),
    d = n(430824),
    u = n(709054),
    h = n(388032),
    p = n(181402);
function m(e) {
    let { userId: t, guildId: n, textClassName: m, tooltipDelay: f } = e,
        g = (0, l.e7)([o.default], () => o.default.locale),
        _ = (0, l.e7)([d.Z], () => (null != n ? d.Z.getGuild(n) : null)),
        C = (0, l.e7)([c.ZP], () => (null != n ? c.ZP.getMember(n, t) : null)),
        x = (0, r.FI)(u.default.extractTimestamp(t), g),
        v = (0, r.FI)(null == C ? void 0 : C.joinedAt, g);
    return null == _ || null == C
        ? (0, i.jsx)(a.Text, {
              variant: 'text-sm/normal',
              className: m,
              children: x
          })
        : (0, i.jsxs)('div', {
              className: p.memberSinceWrapper,
              children: [
                  (0, i.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, i.jsx)(a.ua7, {
                              text: h.intl.string(h.t.uvGmCw),
                              delay: f,
                              children: (e) =>
                                  (0, i.jsx)(a.gw7, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: p.discordIcon
                                  })
                          }),
                          (0, i.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              className: m,
                              children: x
                          })
                      ]
                  }),
                  (0, i.jsx)('div', { className: p.divider }),
                  (0, i.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, i.jsx)(a.ua7, {
                              text: _.name,
                              delay: f,
                              children: (e) =>
                                  (0, i.jsx)(s.Z, {
                                      ...e,
                                      guild: _,
                                      size: s.Z.Sizes.SMOL
                                  })
                          }),
                          (0, i.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              className: m,
                              children: v
                          })
                      ]
                  })
              ]
          });
}
