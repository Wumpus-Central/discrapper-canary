n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(318374),
    s = n(522289),
    o = n(565138),
    l = n(697927),
    u = n(200634),
    c = n(708108),
    d = n(146078),
    f = n(228168),
    _ = n(182294),
    p = n(636565);
let h = 3;
function m(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: m } = (0, l.Z)(t.id),
        { mutualGuilds: g } = (0, u.Z)(t.id),
        E = null != m && m.length > 0,
        v = null != g && g.length > 0,
        y = E && v ? 'text-xs/normal' : 'text-sm/normal';
    if (!E && !v) return null;
    let I = () =>
            E
                ? (0, i.jsxs)(r.P3F, {
                      className: p.section,
                      onClick: () => (null == n ? void 0 : n(f.oh.MUTUAL_FRIENDS)),
                      children: [
                          (0, i.jsx)(a.Z, {
                              maxUsers: h,
                              users: m.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: _.EF.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0
                          }),
                          (0, i.jsx)(r.Text, {
                              className: p.text,
                              variant: y,
                              color: 'interactive-normal',
                              children: (0, c.Z)(m.length)
                          })
                      ]
                  })
                : null,
        b = () =>
            E && v
                ? (0, i.jsx)('div', {
                      'aria-hidden': 'true',
                      className: p.spacer
                  })
                : null,
        T = () =>
            v
                ? (0, i.jsxs)(r.P3F, {
                      className: p.section,
                      onClick: () => (null == n ? void 0 : n(f.oh.MUTUAL_GUILDS)),
                      children: [
                          !E &&
                              (0, i.jsx)(s.Z, {
                                  maxGuilds: h,
                                  guilds: g.map((e) => {
                                      let { guild: t } = e;
                                      return t;
                                  }),
                                  size: o.Z.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0
                              }),
                          (0, i.jsx)(r.Text, {
                              className: p.text,
                              variant: y,
                              color: 'interactive-normal',
                              children: (0, d.Z)(g.length)
                          })
                      ]
                  })
                : null;
    return (0, i.jsxs)('div', {
        className: p.mutuals,
        children: [I(), b(), T()]
    });
}
