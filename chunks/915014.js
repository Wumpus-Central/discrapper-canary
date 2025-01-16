r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(318374),
    o = r(522289),
    l = r(565138),
    u = r(697927),
    c = r(200634),
    d = r(708108),
    f = r(146078),
    _ = r(228168),
    h = r(182294),
    p = r(636565);
let m = 3;
function g(e) {
    let { user: n, onOpenProfile: r } = e,
        { mutualFriends: g } = (0, u.Z)(n.id),
        { mutualGuilds: E } = (0, c.Z)(n.id),
        v = null != g && g.length > 0,
        I = null != E && E.length > 0,
        T = v && I ? 'text-xs/normal' : 'text-sm/normal';
    if (!v && !I) return null;
    let b = () =>
            v
                ? (0, i.jsxs)(a.Clickable, {
                      className: p.section,
                      onClick: () => (null == r ? void 0 : r(_.oh.MUTUAL_FRIENDS)),
                      children: [
                          (0, i.jsx)(s.Z, {
                              maxUsers: m,
                              users: g.map((e) => {
                                  let { user: n } = e;
                                  return n;
                              }),
                              size: h.EF.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0
                          }),
                          (0, i.jsx)(a.Text, {
                              className: p.text,
                              variant: T,
                              color: 'interactive-normal',
                              children: (0, d.Z)(g.length)
                          })
                      ]
                  })
                : null,
        y = () =>
            v && I
                ? (0, i.jsx)('div', {
                      'aria-hidden': 'true',
                      className: p.spacer
                  })
                : null,
        S = () =>
            I
                ? (0, i.jsxs)(a.Clickable, {
                      className: p.section,
                      onClick: () => (null == r ? void 0 : r(_.oh.MUTUAL_GUILDS)),
                      children: [
                          !v &&
                              (0, i.jsx)(o.Z, {
                                  maxGuilds: m,
                                  guilds: E.map((e) => {
                                      let { guild: n } = e;
                                      return n;
                                  }),
                                  size: l.Z.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0
                              }),
                          (0, i.jsx)(a.Text, {
                              className: p.text,
                              variant: T,
                              color: 'interactive-normal',
                              children: (0, f.Z)(E.length)
                          })
                      ]
                  })
                : null;
    return (0, i.jsxs)('div', {
        className: p.mutuals,
        children: [b(), y(), S()]
    });
}
