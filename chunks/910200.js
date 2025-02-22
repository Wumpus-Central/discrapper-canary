n.d(t, { Z: () => y }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    o = n(481060),
    s = n(220082),
    c = n(114487),
    u = n(686546),
    d = n(813197),
    m = n(768581),
    x = n(15210),
    v = n(464647),
    j = n(43542),
    h = n(723776),
    f = n(686369),
    g = n(545495);
function b(e) {
    let { profile: t } = e,
        n = (function (e, t) {
            let n = m.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                r = (0, s.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : r;
        })(t, (0, o.dQu)(a.Z.colors.BG_BASE_TERTIARY).hex()),
        i = (0, f.d)(n);
    return (0, r.jsx)('div', {
        className: g.banner,
        style: { background: i }
    });
}
function p(e) {
    let { profile: t, onIconChange: n } = e;
    return null == n
        ? (0, r.jsx)('div', {
              className: g.avatarContainer,
              children: (0, r.jsx)(u.ZP, {
                  mask: u.QS.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, r.jsx)('div', {
                      className: g.avatarWrapper,
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
              className: g.avatarContainer,
              children: (0, r.jsx)(o.tEY, {
                  within: !0,
                  children: (0, r.jsx)(u.ZP, {
                      mask: u.QS.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, r.jsxs)('div', {
                          className: l()(g.avatarWrapper, g.clickable),
                          children: [
                              (0, r.jsx)(c.b, {
                                  guildId: t.id,
                                  guildName: t.name,
                                  guildIcon: t.icon,
                                  iconSize: 64
                              }),
                              (0, r.jsx)('div', { className: g.overlay }),
                              (0, r.jsx)(o.vdY, {
                                  size: 'custom',
                                  className: g.overlayIcon,
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
function y(e) {
    let { profile: t, onIconChange: n, className: i, disableCTA: a } = e;
    return (0, r.jsxs)('div', {
        className: l()(g.container, i),
        children: [
            (0, r.jsx)(b, { profile: t }),
            (0, r.jsx)(p, {
                onIconChange: n,
                profile: t
            }),
            (0, r.jsx)(j.Z, { profile: t }),
            (0, r.jsxs)('div', {
                className: g.body,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: t.description
                    }),
                    (0, r.jsx)(v.Z, { profile: t }),
                    (0, r.jsx)(h.F, { profile: t })
                ]
            }),
            a
                ? null
                : (0, r.jsx)('div', {
                      className: g.buttonContainer,
                      children: (0, r.jsx)(x.Z, { profile: t })
                  })
        ]
    });
}
