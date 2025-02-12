s.d(l, { Z: () => v });
var t = s(200651);
s(192379);
var i = s(399606),
    a = s(481060),
    n = s(275759),
    r = s(565138),
    c = s(706454),
    o = s(271383),
    d = s(430824),
    u = s(709054),
    m = s(388032),
    x = s(198873);
function v(e) {
    let { userId: l, guildId: s, textClassName: v, tooltipDelay: j } = e,
        h = (0, i.e7)([c.default], () => c.default.locale),
        p = (0, i.e7)([d.Z], () => (null != s ? d.Z.getGuild(s) : null)),
        f = (0, i.e7)([o.ZP], () => (null != s ? o.ZP.getMember(s, l) : null)),
        N = (0, n.FI)(u.default.extractTimestamp(l), h),
        g = (0, n.FI)(null == f ? void 0 : f.joinedAt, h);
    return null == p || null == f
        ? (0, t.jsx)(a.Text, {
              variant: 'text-sm/normal',
              className: v,
              children: N
          })
        : (0, t.jsxs)('div', {
              className: x.memberSinceWrapper,
              children: [
                  (0, t.jsxs)('div', {
                      className: x.memberSince,
                      children: [
                          (0, t.jsx)(a.ua7, {
                              text: m.intl.string(m.t.uvGmCw),
                              delay: j,
                              children: (e) =>
                                  (0, t.jsx)(a.gw7, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: x.discordIcon
                                  })
                          }),
                          (0, t.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              className: v,
                              children: N
                          })
                      ]
                  }),
                  (0, t.jsx)('div', { className: x.divider }),
                  (0, t.jsxs)('div', {
                      className: x.memberSince,
                      children: [
                          (0, t.jsx)(a.ua7, {
                              text: p.name,
                              delay: j,
                              children: (e) =>
                                  (0, t.jsx)(r.Z, {
                                      ...e,
                                      guild: p,
                                      size: r.Z.Sizes.SMOL
                                  })
                          }),
                          (0, t.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              className: v,
                              children: g
                          })
                      ]
                  })
              ]
          });
}
