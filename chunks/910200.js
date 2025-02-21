n.d(t, { Z: () => O }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    o = n(481060),
    s = n(410030),
    c = n(220082),
    u = n(114487),
    d = n(686546),
    m = n(813197),
    x = n(768581),
    v = n(15210),
    j = n(464647),
    h = n(43542),
    f = n(723776),
    g = n(686369),
    b = n(545495);
function p(e) {
    let { profile: t } = e,
        n = (0, s.ZP)(),
        i = (function (e, t) {
            let n = x.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                r = (0, c.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : r;
        })(t, (0, o.dQu)(a.Z.colors.BG_BASE_TERTIARY).hex()),
        l = (0, g.d)(n, i);
    return (0, r.jsx)('div', {
        className: b.banner,
        style: { background: l }
    });
}
function y(e) {
    let { profile: t, onIconChange: n } = e;
    return null == n
        ? (0, r.jsx)('div', {
              className: b.avatarContainer,
              children: (0, r.jsx)(d.ZP, {
                  mask: d.QS.CLAN_ICON,
                  width: 70,
                  height: 70,
                  children: (0, r.jsx)('div', {
                      className: b.avatarWrapper,
                      children: (0, r.jsx)(u.b, {
                          guildId: t.id,
                          guildName: t.name,
                          guildIcon: t.icon,
                          iconSize: 64
                      })
                  })
              })
          })
        : (0, r.jsx)('div', {
              className: b.avatarContainer,
              children: (0, r.jsx)(o.tEY, {
                  within: !0,
                  children: (0, r.jsx)(d.ZP, {
                      mask: d.QS.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, r.jsxs)('div', {
                          className: l()(b.avatarWrapper, b.clickable),
                          children: [
                              (0, r.jsx)(u.b, {
                                  guildId: t.id,
                                  guildName: t.name,
                                  guildIcon: t.icon,
                                  iconSize: 64
                              }),
                              (0, r.jsx)('div', { className: b.overlay }),
                              (0, r.jsx)(o.vdY, {
                                  size: 'custom',
                                  className: b.overlayIcon,
                                  width: 20,
                                  height: 20,
                                  color: 'white'
                              }),
                              (0, r.jsx)(m.ZP, {
                                  tabIndex: 0,
                                  onChange: n
                              })
                          ]
                      })
                  })
              })
          });
}
function O(e) {
    let { profile: t, onIconChange: n, className: i, disableCTA: a } = e;
    return (0, r.jsxs)('div', {
        className: l()(b.container, i),
        children: [
            (0, r.jsx)(p, { profile: t }),
            (0, r.jsx)(y, {
                onIconChange: n,
                profile: t
            }),
            (0, r.jsx)(h.Z, { profile: t }),
            (0, r.jsxs)('div', {
                className: b.body,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: t.description
                    }),
                    (0, r.jsx)(j.Z, { profile: t }),
                    (0, r.jsx)(f.F, { profile: t })
                ]
            }),
            a
                ? null
                : (0, r.jsx)('div', {
                      className: b.buttonContainer,
                      children: (0, r.jsx)(v.Z, { profile: t })
                  })
        ]
    });
}
