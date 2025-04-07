n.d(t, {
    N3: () => b,
    Z7: () => E,
    ZP: () => y
}),
    n(953529);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(692547),
    s = n(481060),
    l = n(114487),
    c = n(686546),
    u = n(813197),
    d = n(15210),
    f = n(464647),
    _ = n(43542),
    p = n(723776),
    h = n(686369),
    m = n(248217);
function g(e, t) {
    let n = (0, h.q)(e, t);
    return null != e.brandColorPrimary ? e.brandColorPrimary : n;
}
function E(e) {
    let { profile: t, className: n } = e,
        i = g(t, (0, s.dQu)(a.Z.colors.BG_BASE_TERTIARY).hex()),
        l = (0, h.d)(i, t);
    return (0, r.jsx)('div', {
        className: o()(n, m.banner),
        style: { background: l }
    });
}
function b(e) {
    let { profile: t, onIconChange: n } = e;
    return null == n
        ? (0, r.jsx)('div', {
              className: m.avatarContainer,
              children: (0, r.jsx)(c.ZP, {
                  mask: c.QS.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, r.jsx)('div', {
                      className: m.avatarWrapper,
                      children: (0, r.jsx)(l.b, {
                          guildId: t.id,
                          guildName: t.name,
                          guildIcon: t.icon,
                          iconSize: 64
                      })
                  })
              })
          })
        : (0, r.jsx)('div', {
              className: m.avatarContainer,
              children: (0, r.jsx)(s.tEY, {
                  within: !0,
                  children: (0, r.jsx)(c.ZP, {
                      mask: c.QS.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, r.jsxs)('div', {
                          className: o()(m.avatarWrapper, m.clickable),
                          children: [
                              (0, r.jsx)(l.b, {
                                  guildId: t.id,
                                  guildName: t.name,
                                  guildIcon: t.icon,
                                  iconSize: 64
                              }),
                              (0, r.jsx)('div', { className: m.overlay }),
                              (0, r.jsx)(s.vdY, {
                                  size: 'custom',
                                  className: m.overlayIcon,
                                  width: 20,
                                  height: 20,
                                  color: 'white'
                              }),
                              (0, r.jsx)(u.ZP, {
                                  tabIndex: 0,
                                  onChange: n
                              })
                          ]
                      })
                  })
              })
          });
}
function y(e) {
    let { profile: t, onIconChange: n, className: i, disableCTA: a, CTAOverride: l, onClose: c } = e,
        u = null;
    return (
        null != l
            ? (u = l)
            : a ||
              (u = (0, r.jsx)(d.Z, {
                  profile: t,
                  onClose: c
              })),
        (0, r.jsxs)('div', {
            className: o()(m.container, i),
            children: [
                (0, r.jsx)(E, { profile: t }),
                (0, r.jsx)(b, {
                    onIconChange: n,
                    profile: t
                }),
                (0, r.jsx)(_.Z, { profile: t }),
                (0, r.jsxs)('div', {
                    className: m.body,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: t.description
                        }),
                        (0, r.jsx)(f.Z, { profile: t }),
                        (0, r.jsx)(p.F, { profile: t })
                    ]
                }),
                null != u &&
                    (0, r.jsx)('div', {
                        className: m.buttonContainer,
                        children: u
                    })
            ]
        })
    );
}
