n.d(t, { A: () => v }), n(228524);
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(397927),
    s = n(736653),
    c = n(573435),
    o = n(263063),
    d = n(714991),
    u = n(776231),
    p = n(486020),
    h = n(860689),
    m = n(652215),
    b = n(985018),
    f = n(906987),
    g = n(937495),
    x = n(517061);
function v(e) {
    let { guild: t, className: n, onClick: a } = e,
        v = (0, s.Ay)(),
        j = (0, h.dangerouslyConstructGuildRecordFromUntypedObject)({
            name: t.name,
            icon: t.icon,
        }),
        A = p.Ay.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.mZ)(),
        }),
        _ =
            null != A
                ? A
                : (function (e) {
                      switch (e) {
                          case m.NJ8.DARK:
                              return g;
                          case m.NJ8.LIGHT:
                              return x;
                      }
                  })(v),
        y = p.Ay.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50,
        });
    return (0, l.jsxs)(i.DUT, {
        className: r()(f.Nr, n),
        onClick: a,
        "aria-label": b.intl.string(b.t.RB4L2x),
        children: [
            (0, l.jsxs)("div", {
                className: f.MY,
                children: [
                    (0, l.jsx)("img", {
                        src: _,
                        alt: "",
                        className: f.j0,
                    }),
                    (0, l.jsx)("div", {
                        className: f.$f,
                        children: (0, l.jsx)(c.Ay, {
                            mask: c.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, l.jsx)("div", {
                                className: f.SA,
                                children: (0, l.jsx)(o.A, {
                                    className: f.__invalid_icon,
                                    iconSrc: y,
                                    guild: j,
                                    size: o.A.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: f.RN,
                children: [
                    (0, l.jsxs)("div", {
                        className: f.Y_,
                        children: [
                            (0, l.jsx)(d.A, {
                                className: f.n2,
                                guild: t,
                                tooltipColor: i.STz.Colors.PRIMARY,
                            }),
                            (0, l.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                className: f.J5,
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, l.jsx)(i.Text, {
                        className: f.eF,
                        variant: "text-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, l.jsx)("div", {
                        className: f.Fj,
                        children: (0, l.jsxs)("div", {
                            className: f.FG,
                            children: [
                                (0, l.jsx)(i.nys, {
                                    color: "currentColor",
                                    className: f.NP,
                                    size: "xs",
                                }),
                                (0, l.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: b.intl.format(b.t.zRl6XR, { count: t.approximate_member_count }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
