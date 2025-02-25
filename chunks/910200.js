n.d(t, { Z: () => I }), n(266796);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    s = n(220082),
    u = n(114487),
    d = n(686546),
    m = n(813197),
    v = n(430824),
    x = n(768581),
    h = n(15210),
    f = n(464647),
    j = n(43542),
    g = n(723776),
    p = n(686369),
    b = n(545495);
function y(e) {
    let { profile: t } = e,
        n = (0, a.e7)([v.Z], () => v.Z.getGuild(t.id)),
        l = (function (e, t) {
            let n = x.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                r = (0, s.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : r;
        })(t, (0, c.dQu)(o.Z.colors.BG_BASE_TERTIARY).hex()),
        i = (0, p.d)(l, n, t);
    return (0, r.jsx)('div', {
        className: b.banner,
        style: { background: i }
    });
}
function O(e) {
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
              children: (0, r.jsx)(c.tEY, {
                  within: !0,
                  children: (0, r.jsx)(d.ZP, {
                      mask: d.QS.CLAN_ICON,
                      width: 70,
                      height: 70,
                      children: (0, r.jsxs)('div', {
                          className: i()(b.avatarWrapper, b.clickable),
                          children: [
                              (0, r.jsx)(u.b, {
                                  guildId: t.id,
                                  guildName: t.name,
                                  guildIcon: t.icon,
                                  iconSize: 64
                              }),
                              (0, r.jsx)('div', { className: b.overlay }),
                              (0, r.jsx)(c.vdY, {
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
function I(e) {
    let { profile: t, onIconChange: n, className: l, disableCTA: a } = e;
    return (0, r.jsxs)('div', {
        className: i()(b.container, l),
        children: [
            (0, r.jsx)(y, { profile: t }),
            (0, r.jsx)(O, {
                onIconChange: n,
                profile: t
            }),
            (0, r.jsx)(j.Z, { profile: t }),
            (0, r.jsxs)('div', {
                className: b.body,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: t.description
                    }),
                    (0, r.jsx)(f.Z, { profile: t }),
                    (0, r.jsx)(g.F, { profile: t })
                ]
            }),
            a
                ? null
                : (0, r.jsx)('div', {
                      className: b.buttonContainer,
                      children: (0, r.jsx)(h.Z, { profile: t })
                  })
        ]
    });
}
