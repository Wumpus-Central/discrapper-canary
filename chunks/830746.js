n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var s = n(399606),
    r = n(481060),
    l = n(594174),
    a = n(785681),
    o = n(780985),
    c = n(631885),
    d = n(552045),
    u = n(87792),
    m = n(302289),
    h = n(946690),
    g = n(456771),
    _ = n(292352),
    x = n(388032),
    p = n(23020);
let E = () => {
    let e = (0, c.mq)(_.ne.ACTIVE),
        t = (0, o.c)(),
        n = (0, s.e7)([l.default], () => l.default.getCurrentUser()),
        E = (0, a.o)(x.intl.string(x.t['5RZ8Tk']), x.intl.string(x.t.bmhCnJ)),
        C = (0, a.o)(x.intl.string(x.t.XKnFFh), x.intl.string(x.t['68zfxM'])),
        f = (0, a.o)(x.intl.string(x.t['Rm/6a2']), x.intl.string(x.t['1xPTwM'])),
        T = (0, r.bWb)().enabled;
    return void 0 === n
        ? null
        : (0, i.jsxs)('div', {
              className: p.container,
              children: [
                  (0, i.jsx)('div', {
                      className: p.banner,
                      children: (0, i.jsx)(d.Z, {})
                  }),
                  (0, i.jsxs)('div', {
                      className: p.featureCards,
                      children: [
                          (0, i.jsx)(h.Z, {
                              iconClassName: p.chatCheckIcon,
                              icon: r.eQA,
                              header: x.intl.string(x.t['001l3t']),
                              description: E
                          }),
                          (0, i.jsx)(h.Z, {
                              icon: r.tEF,
                              header: x.intl.string(x.t.yipAeH),
                              description: C
                          }),
                          (0, i.jsx)(h.Z, {
                              icon: T ? r.IkH : (0, r.GSL)(g.Z),
                              header: x.intl.string(x.t.hhOuMT),
                              description: f
                          })
                      ]
                  }),
                  0 === e.length ? (0, i.jsx)(m.Z, {}) : null,
                  void 0 !== t && e.length > 0 ? (0, i.jsx)(u.Z, { user: t }) : null
              ]
          });
};
