n.d(t, { Z: () => j });
var i = n(951288);
n(647438);
var r = n(399606),
    s = n(481060),
    a = n(594174),
    l = n(277537),
    o = n(785681),
    c = n(780985),
    d = n(631885),
    u = n(552045),
    m = n(87792),
    p = n(302289),
    g = n(946690),
    h = n(369954),
    f = n(292352),
    b = n(345909),
    x = n(388032),
    _ = n(862964);
let j = () => {
    let e = (0, d.mq)(f.ne.ACTIVE),
        t = e.length > 0,
        n = (0, l.PO)("family_center_activity_page"),
        j = (0, c.c)(),
        E = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        C = (0, o.o)(x.intl.string(b.default["5RZ8Tk"]), x.intl.string(b.default.bmhCnJ)),
        O = (0, o.o)(x.intl.string(b.default.XKnFFh), x.intl.string(b.default["68zfxM"])),
        v = (0, o.o)(x.intl.string(b.default["Rm/6a2"]), x.intl.string(b.default["1xPTwM"]));
    return void 0 === E
        ? null
        : (0, i.jsxs)("div", {
              className: _.container,
              children: [
                  n && t
                      ? null
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", {
                                    className: _.banner,
                                    children: (0, i.jsx)(u.Z, {}),
                                }),
                                (0, i.jsxs)("div", {
                                    className: _.featureCards,
                                    children: [
                                        (0, i.jsx)(g.Z, {
                                            icon: s.eQA,
                                            header: x.intl.string(b.default["001l3t"]),
                                            description: C,
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            icon: s.tEF,
                                            header: x.intl.string(b.default.yipAeH),
                                            description: O,
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            icon: s.IkH,
                                            header: x.intl.string(b.default.hhOuMT),
                                            description: v,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  t ? null : (0, i.jsx)(p.Z, {}),
                  void 0 !== j && e.length > 0 ? (0, i.jsx)(m.Z, { user: j }) : null,
                  (0, i.jsx)(h.J, {}),
              ],
          });
};
