n.d(t, { Z: () => p }), n(266796);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(692547),
    s = n(481060),
    o = n(220082),
    c = n(114487),
    u = n(686546),
    d = n(813197),
    m = n(768581),
    v = n(15210),
    x = n(464647),
    f = n(43542),
    I = n(723776),
    h = n(686369),
    j = n(22858);
function g(e) {
    let { profile: t } = e,
        n = (function (e, t) {
            let n = m.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                r = (0, o.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : r;
        })(t, (0, s.dQu)(a.Z.colors.BG_BASE_TERTIARY).hex()),
        l = (0, h.d)(n, t);
    return (0, r.jsx)('div', {
        className: j.banner,
        style: { background: l }
    });
}
function b(e) {
    let { profile: t, onIconChange: n } = e;
    return null == n
        ? (0, r.jsx)('div', {
              className: j.avatarContainer,
              children: (0, r.jsx)(u.ZP, {
                  mask: u.QS.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, r.jsx)('div', {
                      className: j.avatarWrapper,
                      children: (0, r.jsx)(c.b, {
                          guildId: t.id,
                          guildName: t.name,
                          guildIcon: t.icon,
                          iconSize: 64
                      })
                  })
              })
          })
        : (0, r.jsx)('div', {
              className: j.avatarContainer,
              children: (0, r.jsx)(s.tEY, {
                  within: !0,
                  children: (0, r.jsx)(u.ZP, {
                      mask: u.QS.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, r.jsxs)('div', {
                          className: i()(j.avatarWrapper, j.clickable),
                          children: [
                              (0, r.jsx)(c.b, {
                                  guildId: t.id,
                                  guildName: t.name,
                                  guildIcon: t.icon,
                                  iconSize: 64
                              }),
                              (0, r.jsx)('div', { className: j.overlay }),
                              (0, r.jsx)(s.vdY, {
                                  size: 'custom',
                                  className: j.overlayIcon,
                                  width: 20,
                                  height: 20,
                                  color: 'white'
                              }),
                              (0, r.jsx)(d.ZP, {
                                  tabIndex: 0,
                                  onChange: n
                              })
                          ]
                      })
                  })
              })
          });
}
function p(e) {
    let { profile: t, onIconChange: n, className: l, disableCTA: a, CTAOverride: o } = e,
        c = null;
    return (
        null != o ? (c = o) : a || (c = (0, r.jsx)(v.Z, { profile: t })),
        (0, r.jsxs)('div', {
            className: i()(j.container, l),
            children: [
                (0, r.jsx)(g, { profile: t }),
                (0, r.jsx)(b, {
                    onIconChange: n,
                    profile: t
                }),
                (0, r.jsx)(f.Z, { profile: t }),
                (0, r.jsxs)('div', {
                    className: j.body,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: t.description
                        }),
                        (0, r.jsx)(x.Z, { profile: t }),
                        (0, r.jsx)(I.F, { profile: t })
                    ]
                }),
                null != c &&
                    (0, r.jsx)('div', {
                        className: j.buttonContainer,
                        children: c
                    })
            ]
        })
    );
}
