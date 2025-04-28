n.d(t, {
    N3: () => E,
    Z7: () => g,
    ZP: () => b
}),
    n(953529);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(686546),
    l = n(813197),
    c = n(60034),
    u = n(15210),
    d = n(464647),
    f = n(43542),
    _ = n(723776),
    p = n(686369),
    h = n(248217);
function m(e, t) {
    let n = (0, p.qw)(e, t);
    return null != e.brandColorPrimary ? e.brandColorPrimary : n;
}
function g(e) {
    let { profile: t, className: n } = e,
        i = m(t, (0, p.nv)().hex()),
        o = (0, p.dG)(i, t);
    return (0, r.jsx)('div', {
        className: a()(n, h.banner),
        style: { background: o }
    });
}
function E(e) {
    let { profile: t, onIconChange: n } = e;
    return null == n
        ? (0, r.jsx)('div', {
              className: h.avatarContainer,
              children: (0, r.jsx)(s.ZP, {
                  mask: s.QS.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, r.jsx)('div', {
                      className: h.avatarWrapper,
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
              className: h.avatarContainer,
              children: (0, r.jsx)(o.tEY, {
                  within: !0,
                  children: (0, r.jsx)(s.ZP, {
                      mask: s.QS.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, r.jsxs)('div', {
                          className: a()(h.avatarWrapper, h.clickable),
                          children: [
                              (0, r.jsx)(c.Ft, {
                                  guildId: t.id,
                                  guildName: t.name,
                                  guildIcon: t.icon,
                                  iconSize: 64
                              }),
                              (0, r.jsx)('div', { className: h.overlay }),
                              (0, r.jsx)(o.vdY, {
                                  size: 'custom',
                                  className: h.overlayIcon,
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
function b(e) {
    let { profile: t, onIconChange: n, className: i, disableCTA: s, CTAOverride: l, onClose: c } = e,
        p = null;
    return (
        null != l
            ? (p = l)
            : s ||
              (p = (0, r.jsx)(u.Z, {
                  profile: t,
                  onComplete: c
              })),
        (0, r.jsxs)('div', {
            className: a()(h.container, i),
            children: [
                (0, r.jsx)(g, { profile: t }),
                (0, r.jsx)(E, {
                    onIconChange: n,
                    profile: t
                }),
                (0, r.jsx)(f.Z, { profile: t }),
                (0, r.jsxs)('div', {
                    className: h.body,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: t.description
                        }),
                        (0, r.jsx)(d.Z, { profile: t }),
                        (0, r.jsx)(_.F, { profile: t })
                    ]
                }),
                null != p &&
                    (0, r.jsx)('div', {
                        className: h.buttonContainer,
                        children: p
                    })
            ]
        })
    );
}
