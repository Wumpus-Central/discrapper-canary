var i = n(200651);
n(192379);
var r = n(399606),
    a = n(481060),
    s = n(594174),
    l = n(785681),
    o = n(780985),
    c = n(631885),
    d = n(552045),
    u = n(87792),
    g = n(302289),
    m = n(946690),
    f = n(456771),
    p = n(292352),
    _ = n(388032),
    h = n(23020);
t.Z = () => {
    let e = (0, c.mq)(p.ne.ACTIVE),
        t = (0, o.c)(),
        n = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
        x = (0, l.o)(_.intl.string(_.t['5RZ8Tk']), _.intl.string(_.t.bmhCnJ)),
        E = (0, l.o)(_.intl.string(_.t.XKnFFh), _.intl.string(_.t['68zfxM'])),
        b = (0, l.o)(_.intl.string(_.t['Rm/6a2']), _.intl.string(_.t['1xPTwM'])),
        C = (0, a.useRedesignIconContext)().enabled;
    return void 0 === n
        ? null
        : (0, i.jsxs)('div', {
              className: h.container,
              children: [
                  (0, i.jsx)('div', {
                      className: h.banner,
                      children: (0, i.jsx)(d.Z, {})
                  }),
                  (0, i.jsxs)('div', {
                      className: h.featureCards,
                      children: [
                          (0, i.jsx)(m.Z, {
                              iconClassName: h.chatCheckIcon,
                              icon: a.ChatCheckIcon,
                              header: _.intl.string(_.t['001l3t']),
                              description: x
                          }),
                          (0, i.jsx)(m.Z, {
                              icon: a.EyeIcon,
                              header: _.intl.string(_.t.yipAeH),
                              description: E
                          }),
                          (0, i.jsx)(m.Z, {
                              icon: C ? a.QrCodeIcon : (0, a.makeIconCompat)(f.Z),
                              header: _.intl.string(_.t.hhOuMT),
                              description: b
                          })
                      ]
                  }),
                  0 === e.length ? (0, i.jsx)(g.Z, {}) : null,
                  void 0 !== t && e.length > 0 ? (0, i.jsx)(u.Z, { user: t }) : null
              ]
          });
};
