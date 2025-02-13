n.d(t, { Z: () => x });
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
    m = n(302289),
    g = n(946690),
    _ = n(456771),
    p = n(292352),
    f = n(388032),
    h = n(860392);
let x = () => {
    let e = (0, c.mq)(p.ne.ACTIVE),
        t = (0, o.c)(),
        n = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
        x = (0, l.o)(f.intl.string(f.t['5RZ8Tk']), f.intl.string(f.t.bmhCnJ)),
        E = (0, l.o)(f.intl.string(f.t.XKnFFh), f.intl.string(f.t['68zfxM'])),
        C = (0, l.o)(f.intl.string(f.t['Rm/6a2']), f.intl.string(f.t['1xPTwM'])),
        b = (0, a.bWb)().enabled;
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
                          (0, i.jsx)(g.Z, {
                              iconClassName: h.chatCheckIcon,
                              icon: a.eQA,
                              header: f.intl.string(f.t['001l3t']),
                              description: x
                          }),
                          (0, i.jsx)(g.Z, {
                              icon: a.tEF,
                              header: f.intl.string(f.t.yipAeH),
                              description: E
                          }),
                          (0, i.jsx)(g.Z, {
                              icon: b ? a.IkH : (0, a.GSL)(_.Z),
                              header: f.intl.string(f.t.hhOuMT),
                              description: C
                          })
                      ]
                  }),
                  0 === e.length ? (0, i.jsx)(m.Z, {}) : null,
                  void 0 !== t && e.length > 0 ? (0, i.jsx)(u.Z, { user: t }) : null
              ]
          });
};
