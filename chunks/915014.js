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
    _ = n(68646);
let p = 3;
function h(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: h, mutualGuilds: m } = (0, l.Z)(t),
        g = null != h && h.length > 0,
        E = null != m && m.length > 0,
        b = g && E ? 'text-xs/normal' : 'text-sm/normal';
    if (!g && !E) return null;
    let y = () =>
            g
                ? (0, r.jsxs)(i.P3F, {
                      className: _.section,
                      onClick: () => (null == n ? void 0 : n(d.oh.MUTUAL_FRIENDS)),
                      children: [
                          (0, r.jsx)(o.Z, {
                              maxUsers: p,
                              users: h.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: f.EF.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0
                          }),
                          (0, r.jsx)(i.Text, {
                              className: _.text,
                              variant: b,
                              color: 'interactive-normal',
                              children: (0, c.Z)(h.length)
                          })
                      ]
                  })
                : null,
        v = () =>
            g && E
                ? (0, r.jsx)('div', {
                      'aria-hidden': 'true',
                      className: _.spacer
                  })
                : null,
        O = () =>
            E
                ? (0, r.jsxs)(i.P3F, {
                      className: _.section,
                      onClick: () => (null == n ? void 0 : n(d.oh.MUTUAL_GUILDS)),
                      children: [
                          !g &&
                              (0, r.jsx)(a.Z, {
                                  maxGuilds: p,
                                  guilds: m.map((e) => {
                                      let { guild: t } = e;
                                      return t;
                                  }),
                                  size: s.Z.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0
                              }),
                          (0, r.jsx)(i.Text, {
                              className: _.text,
                              variant: b,
                              color: 'interactive-normal',
                              children: (0, u.Z)(m.length)
                          })
                      ]
                  })
                : null;
    return (0, r.jsxs)('div', {
        className: _.mutuals,
        children: [y(), v(), O()]
    });
}
