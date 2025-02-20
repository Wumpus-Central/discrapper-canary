n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(318374),
    a = n(522289),
    s = n(565138),
    l = n(697927),
    c = n(200634),
    u = n(708108),
    d = n(146078),
    f = n(228168),
    p = n(182294),
    _ = n(285055);
let h = 3;
function m(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: m } = (0, l.Z)(t.id),
        { mutualGuilds: g } = (0, c.Z)(t.id),
        E = null != m && m.length > 0,
        v = null != g && g.length > 0,
        b = E && v ? 'text-xs/normal' : 'text-sm/normal';
    if (!E && !v) return null;
    let y = () =>
            E
                ? (0, r.jsxs)(i.P3F, {
                      className: _.section,
                      onClick: () => (null == n ? void 0 : n(f.oh.MUTUAL_FRIENDS)),
                      children: [
                          (0, r.jsx)(o.Z, {
                              maxUsers: h,
                              users: m.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: p.EF.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0
                          }),
                          (0, r.jsx)(i.Text, {
                              className: _.text,
                              variant: b,
                              color: 'interactive-normal',
                              children: (0, u.Z)(m.length)
                          })
                      ]
                  })
                : null,
        O = () =>
            E && v
                ? (0, r.jsx)('div', {
                      'aria-hidden': 'true',
                      className: _.spacer
                  })
                : null,
        S = () =>
            v
                ? (0, r.jsxs)(i.P3F, {
                      className: _.section,
                      onClick: () => (null == n ? void 0 : n(f.oh.MUTUAL_GUILDS)),
                      children: [
                          !E &&
                              (0, r.jsx)(a.Z, {
                                  maxGuilds: h,
                                  guilds: g.map((e) => {
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
                              children: (0, d.Z)(g.length)
                          })
                      ]
                  })
                : null;
    return (0, r.jsxs)('div', {
        className: _.mutuals,
        children: [y(), O(), S()]
    });
}
