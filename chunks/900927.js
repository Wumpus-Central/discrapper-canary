n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    a = n(275759),
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
        C = (0, l.e7)([d.Z], () => (null != n ? d.Z.getGuild(n) : null)),
        x = (0, l.e7)([c.ZP], () => (null != n ? c.ZP.getMember(n, t) : null)),
        v = (0, a.FI)(u.default.extractTimestamp(t), g),
        _ = (0, a.FI)(null == x ? void 0 : x.joinedAt, g);
    return null == C || null == x
        ? (0, i.jsx)(r.Text, {
              variant: 'text-sm/normal',
              className: m,
              children: v
          })
        : (0, i.jsxs)('div', {
              className: p.memberSinceWrapper,
              children: [
                  (0, i.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, i.jsx)(r.Tooltip, {
                              text: h.intl.string(h.t.uvGmCw),
                              delay: f,
                              children: (e) =>
                                  (0, i.jsx)(r.ClydeIcon, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: p.discordIcon
                                  })
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-sm/normal',
                              className: m,
                              children: v
                          })
                      ]
                  }),
                  (0, i.jsx)('div', { className: p.divider }),
                  (0, i.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, i.jsx)(r.Tooltip, {
                              text: C.name,
                              delay: f,
                              children: (e) =>
                                  (0, i.jsx)(s.Z, {
                                      ...e,
                                      guild: C,
                                      size: s.Z.Sizes.SMOL
                                  })
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-sm/normal',
                              className: m,
                              children: _
                          })
                      ]
                  })
              ]
          });
}
