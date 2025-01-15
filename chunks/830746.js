var i = n(200651);
n(192379);
var r = n(399606),
    s = n(481060),
    a = n(594174),
    l = n(785681),
    o = n(780985),
    c = n(631885),
    d = n(552045),
    u = n(87792),
    m = n(302289),
    g = n(946690),
    h = n(456771),
    p = n(292352),
    x = n(388032),
    f = n(382095);
t.Z = () => {
    let e = (0, c.mq)(p.ne.ACTIVE),
        t = (0, o.c)(),
        n = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        _ = (0, l.o)(x.intl.string(x.t['5RZ8Tk']), x.intl.string(x.t.bmhCnJ)),
        E = (0, l.o)(x.intl.string(x.t.XKnFFh), x.intl.string(x.t['68zfxM'])),
        C = (0, l.o)(x.intl.string(x.t['Rm/6a2']), x.intl.string(x.t['1xPTwM'])),
        T = (0, s.useRedesignIconContext)().enabled;
    return void 0 === n
        ? null
        : (0, i.jsxs)('div', {
              className: f.container,
              children: [
                  (0, i.jsx)('div', {
                      className: f.banner,
                      children: (0, i.jsx)(d.Z, {})
                  }),
                  (0, i.jsxs)('div', {
                      className: f.featureCards,
                      children: [
                          (0, i.jsx)(g.Z, {
                              iconClassName: f.chatCheckIcon,
                              icon: s.ChatCheckIcon,
                              header: x.intl.string(x.t['001l3t']),
                              description: _
                          }),
                          (0, i.jsx)(g.Z, {
                              icon: s.EyeIcon,
                              header: x.intl.string(x.t.yipAeH),
                              description: E
                          }),
                          (0, i.jsx)(g.Z, {
                              icon: T ? s.QrCodeIcon : (0, s.makeIconCompat)(h.Z),
                              header: x.intl.string(x.t.hhOuMT),
                              description: C
                          })
                      ]
                  }),
                  0 === e.length ? (0, i.jsx)(m.Z, {}) : null,
                  void 0 !== t && e.length > 0 ? (0, i.jsx)(u.Z, { user: t }) : null
              ]
          });
};
