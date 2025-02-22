n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(318374),
    a = n(522289),
    s = n(565138),
    l = n(806729),
    c = n(708108),
    u = n(146078),
    d = n(228168),
    f = n(182294),
    p = n(285055);
let _ = 3;
function h(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: h, mutualGuilds: m } = (0, l.Z)(t),
        g = null != h && h.length > 0,
        E = null != m && m.length > 0,
        v = g && E ? 'text-xs/normal' : 'text-sm/normal';
    if (!g && !E) return null;
    let b = () =>
            g
                ? (0, r.jsxs)(i.P3F, {
                      className: p.section,
                      onClick: () => (null == n ? void 0 : n(d.oh.MUTUAL_FRIENDS)),
                      children: [
                          (0, r.jsx)(o.Z, {
                              maxUsers: _,
                              users: h.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: f.EF.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0
                          }),
                          (0, r.jsx)(i.Text, {
                              className: p.text,
                              variant: v,
                              color: 'interactive-normal',
                              children: (0, c.Z)(h.length)
                          })
                      ]
                  })
                : null,
        y = () =>
            g && E
                ? (0, r.jsx)('div', {
                      'aria-hidden': 'true',
                      className: p.spacer
                  })
                : null,
        O = () =>
            E
                ? (0, r.jsxs)(i.P3F, {
                      className: p.section,
                      onClick: () => (null == n ? void 0 : n(d.oh.MUTUAL_GUILDS)),
                      children: [
                          !g &&
                              (0, r.jsx)(a.Z, {
                                  maxGuilds: _,
                                  guilds: m.map((e) => {
                                      let { guild: t } = e;
                                      return t;
                                  }),
                                  size: s.Z.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0
                              }),
                          (0, r.jsx)(i.Text, {
                              className: p.text,
                              variant: v,
                              color: 'interactive-normal',
                              children: (0, u.Z)(m.length)
                          })
                      ]
                  })
                : null;
    return (0, r.jsxs)('div', {
        className: p.mutuals,
        children: [b(), y(), O()]
    });
}
