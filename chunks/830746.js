n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(399606),
    s = n(481060),
    a = n(594174),
    l = n(785681),
    o = n(780985),
    c = n(631885),
    d = n(552045),
    u = n(87792),
    m = n(302289),
    g = n(946690),
    p = n(456771),
    h = n(292352),
    f = n(388032),
    b = n(488371);
let N = () => {
    let e = (0, c.mq)(h.ne.ACTIVE),
        t = (0, o.c)(),
        n = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        N = (0, l.o)(f.NW.string(f.t['5RZ8Tk']), f.NW.string(f.t.bmhCnJ)),
        x = (0, l.o)(f.NW.string(f.t.XKnFFh), f.NW.string(f.t['68zfxM'])),
        _ = (0, l.o)(f.NW.string(f.t['Rm/6a2']), f.NW.string(f.t['1xPTwM'])),
        E = (0, s.bWb)().enabled;
    return void 0 === n
        ? null
        : (0, r.jsxs)('div', {
              className: b.container,
              children: [
                  (0, r.jsx)('div', {
                      className: b.banner,
                      children: (0, r.jsx)(d.Z, {})
                  }),
                  (0, r.jsxs)('div', {
                      className: b.featureCards,
                      children: [
                          (0, r.jsx)(g.Z, {
                              iconClassName: b.chatCheckIcon,
                              icon: s.eQA,
                              header: f.NW.string(f.t['001l3t']),
                              description: N
                          }),
                          (0, r.jsx)(g.Z, {
                              icon: s.tEF,
                              header: f.NW.string(f.t.yipAeH),
                              description: x
                          }),
                          (0, r.jsx)(g.Z, {
                              icon: E ? s.IkH : (0, s.GSL)(p.Z),
                              header: f.NW.string(f.t.hhOuMT),
                              description: _
                          })
                      ]
                  }),
                  0 === e.length ? (0, r.jsx)(m.Z, {}) : null,
                  void 0 !== t && e.length > 0 ? (0, r.jsx)(u.Z, { user: t }) : null
              ]
          });
};
