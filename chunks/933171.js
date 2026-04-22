a.d(t, { A: () => j });
var n = a(627968);
a(64700);
var l = a(503698),
    i = a.n(l),
    s = a(939249),
    r = a(781696),
    o = a(534514),
    c = a(834730),
    d = a(950305),
    u = a(736653),
    h = a(573435),
    m = a(263063),
    p = a(714991),
    _ = a(776231),
    g = a(486020),
    x = a(860689),
    A = a(652215),
    f = a(985018),
    C = a(728968),
    v = a(937495),
    b = a(517061);
function j(e) {
    let { guild: t, className: a, onClick: l } = e,
        j = (0, u.Ay)(),
        I = (0, x.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        E = g.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, _.mZ)() }),
        N =
            null != E
                ? E
                : (function (e) {
                      switch (e) {
                          case A.NJ8.DARK:
                              return v;
                          case A.NJ8.LIGHT:
                              return b;
                      }
                  })(j),
        S = g.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, n.jsxs)(s.D, {
        className: i()(C.Nr, a),
        onClick: l,
        "aria-label": f.intl.string(f.t.RB4L2x),
        children: [
            (0, n.jsxs)("div", {
                className: C.MY,
                children: [
                    (0, n.jsx)("img", { src: N, alt: "", className: C.j0 }),
                    (0, n.jsx)("div", {
                        className: C.$f,
                        children: (0, n.jsx)(h.Ay, {
                            mask: h.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, n.jsx)("div", {
                                className: C.SA,
                                children: (0, n.jsx)(m.Ay, {
                                    className: C.__invalid_icon,
                                    iconSrc: S,
                                    guild: I,
                                    size: m.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: C.RN,
                children: [
                    (0, n.jsxs)("div", {
                        className: C.Y_,
                        children: [
                            (0, n.jsx)(p.A, { className: C.n2, guild: t, tooltipColor: r.ST.Colors.PRIMARY }),
                            (0, n.jsx)(o.D, { variant: "heading-md/semibold", className: C.J5, children: t.name }),
                        ],
                    }),
                    (0, n.jsx)(c.E, {
                        className: C.eF,
                        variant: "text-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, n.jsx)("div", {
                        className: C.Fj,
                        children: (0, n.jsxs)("div", {
                            className: C.FG,
                            children: [
                                (0, n.jsx)(d.n, { color: "currentColor", className: C.NP, size: "xs" }),
                                (0, n.jsx)(c.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: f.intl.format(f.t.zRl6XR, { count: t.approximate_member_count }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
