n.d(t, { Z: () => x });
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
    p = n(946690),
    g = n(456771),
    h = n(292352),
    f = n(635357),
    b = n(388032),
    N = n(28472);
let x = () => {
    let e = (0, c.mq)(h.ne.ACTIVE),
        t = (0, o.c)(),
        n = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        x = (0, l.o)(b.NW.string(f.Z['5RZ8Tk']), b.NW.string(f.Z.bmhCnJ)),
        _ = (0, l.o)(b.NW.string(f.Z.XKnFFh), b.NW.string(f.Z['68zfxM'])),
        E = (0, l.o)(b.NW.string(f.Z['Rm/6a2']), b.NW.string(f.Z['1xPTwM'])),
        j = (0, s.bWb)().enabled;
    return void 0 === n
        ? null
        : (0, r.jsxs)('div', {
              className: N.container,
              children: [
                  (0, r.jsx)('div', {
                      className: N.banner,
                      children: (0, r.jsx)(d.Z, {})
                  }),
                  (0, r.jsxs)('div', {
                      className: N.featureCards,
                      children: [
                          (0, r.jsx)(p.Z, {
                              iconClassName: N.chatCheckIcon,
                              icon: s.eQA,
                              header: b.NW.string(f.Z['001l3t']),
                              description: x
                          }),
                          (0, r.jsx)(p.Z, {
                              icon: s.tEF,
                              header: b.NW.string(f.Z.yipAeH),
                              description: _
                          }),
                          (0, r.jsx)(p.Z, {
                              icon: j ? s.IkH : (0, s.GSL)(g.Z),
                              header: b.NW.string(f.Z.hhOuMT),
                              description: E
                          })
                      ]
                  }),
                  0 === e.length ? (0, r.jsx)(m.Z, {}) : null,
                  void 0 !== t && e.length > 0 ? (0, r.jsx)(u.Z, { user: t }) : null
              ]
          });
};
