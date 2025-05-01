n.d(t, {
    N3: () => g,
    Z7: () => m,
    ZP: () => E
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(686546),
    l = n(813197),
    c = n(60034),
    u = n(137162),
    d = n(15210),
    f = n(43542),
    _ = n(686369),
    p = n(248217);
function h(e, t) {
    let n = (0, _.qw)(e, t);
    return null != e.brandColorPrimary ? e.brandColorPrimary : n;
}
function m(e) {
    let { profile: t, className: n } = e,
        i = h(t, (0, _.nv)().hex()),
        a = (0, _.dG)(i, t);
    return (0, r.jsx)('div', {
        className: o()(n, p.banner),
        style: { background: a }
    });
}
function g(e) {
    let { profile: t, onIconChange: n } = e;
    return null == n
        ? (0, r.jsx)('div', {
              className: p.avatarContainer,
              children: (0, r.jsx)(s.ZP, {
                  mask: s.QS.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, r.jsx)('div', {
                      className: p.avatarWrapper,
                      children: (0, r.jsx)(c.Ft, {
                          guildId: t.id,
                          guildName: t.name,
                          guildIcon: t.icon,
                          iconSize: 64
                      })
                  })
              })
          })
        : (0, r.jsx)('div', {
              className: p.avatarContainer,
              children: (0, r.jsx)(a.tEY, {
                  within: !0,
                  children: (0, r.jsx)(s.ZP, {
                      mask: s.QS.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, r.jsxs)('div', {
                          className: o()(p.avatarWrapper, p.clickable),
                          children: [
                              (0, r.jsx)(c.Ft, {
                                  guildId: t.id,
                                  guildName: t.name,
                                  guildIcon: t.icon,
                                  iconSize: 64
                              }),
                              (0, r.jsx)('div', { className: p.overlay }),
                              (0, r.jsx)(a.vdY, {
                                  size: 'custom',
                                  className: p.overlayIcon,
                                  width: 20,
                                  height: 20,
                                  color: 'white'
                              }),
                              (0, r.jsx)(l.ZP, {
                                  tabIndex: 0,
                                  onChange: n
                              })
                          ]
                      })
                  })
              })
          });
}
function E(e) {
    let { profile: t, onIconChange: n, className: i, disableCTA: a, CTAOverride: s, onClose: l } = e,
        c = null;
    return (
        null != s
            ? (c = s)
            : a ||
              (c = (0, r.jsx)(d.Z, {
                  profile: t,
                  onComplete: l
              })),
        (0, r.jsxs)('div', {
            className: o()(p.container, i),
            children: [
                (0, r.jsx)(m, { profile: t }),
                (0, r.jsx)(g, {
                    onIconChange: n,
                    profile: t
                }),
                (0, r.jsx)(f.Z, { profile: t }),
                (0, r.jsx)(u.E, { profile: t }),
                null != c &&
                    (0, r.jsx)('div', {
                        className: p.buttonContainer,
                        children: c
                    })
            ]
        })
    );
}
