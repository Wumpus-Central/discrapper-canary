n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(399606),
    o = n(481060),
    a = n(594174),
    s = n(277537),
    l = n(785681),
    c = n(780985),
    u = n(631885),
    d = n(552045),
    f = n(87792),
    _ = n(302289),
    p = n(946690),
    h = n(369954),
    m = n(292352),
    g = n(345909),
    E = n(388032),
    b = n(862964);
let y = () => {
    let e = (0, u.mq)(m.ne.ACTIVE),
        t = e.length > 0,
        n = (0, s.PO)("family_center_activity_page"),
        y = (0, c.cz)(),
        O = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        v = (0, l.o)(E.intl.string(g.default["5RZ8Tk"]), E.intl.string(g.default.bmhCnJ)),
        I = (0, l.o)(E.intl.string(g.default.XKnFFh), E.intl.string(g.default["68zfxM"])),
        T = (0, l.o)(E.intl.string(g.default["Rm/6a2"]), E.intl.string(g.default["1xPTwM"]));
    return void 0 === O
        ? null
        : (0, r.jsxs)("div", {
              className: b.container,
              children: [
                  n && t
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    className: b.banner,
                                    children: (0, r.jsx)(d.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: b.featureCards,
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            icon: o.eQA,
                                            header: E.intl.string(g.default["001l3t"]),
                                            description: v,
                                        }),
                                        (0, r.jsx)(p.Z, {
                                            icon: o.tEF,
                                            header: E.intl.string(g.default.yipAeH),
                                            description: I,
                                        }),
                                        (0, r.jsx)(p.Z, {
                                            icon: o.IkH,
                                            header: E.intl.string(g.default.hhOuMT),
                                            description: T,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  t ? null : (0, r.jsx)(_.Z, {}),
                  void 0 !== y && e.length > 0 ? (0, r.jsx)(f.Z, { user: y }) : null,
                  (0, r.jsx)(h.J, {}),
              ],
          });
};
