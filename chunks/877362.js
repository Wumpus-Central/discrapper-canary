t.d(n, { Z: () => x });
var r = t(255367),
    i = t(793030),
    o = t(442837),
    s = t(481060),
    a = t(678558),
    l = t(343649),
    c = t(430824),
    u = t(981631),
    d = t(93841),
    p = t(388032),
    m = t(302794),
    _ = t(350618);
function x(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([c.Z], () => c.Z.getGuild(n));
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsx)('div', { className: m.background }),
                  (0, r.jsx)('img', {
                      alt: '',
                      className: m.image,
                      src: _
                  }),
                  (0, r.jsxs)('div', {
                      className: m.textContainer,
                      children: [
                          (0, r.jsx)(i.xv, {
                              variant: 'text-md/semibold',
                              children: p.intl.string(d.default.ta6BOD)
                          }),
                          (0, r.jsx)(i.xv, {
                              variant: 'text-sm/medium',
                              children: p.intl.string(d.default.wpQAGB)
                          })
                      ]
                  }),
                  (0, r.jsx)(a.Z, {
                      guild: t,
                      className: m.button,
                      analyticsLocation: {
                          page: u.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: u.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                      },
                      color: s.Ttl.BRAND,
                      size: s.PhG.MEDIUM,
                      intent: l.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(s.$Eu, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                  })
              ]
          });
}
