a.d(t, { A: () => C });
var n = a(627968);
a(64700);
var i = a(503698),
    s = a.n(i),
    l = a(397927),
    r = a(736653),
    o = a(573435),
    c = a(263063),
    d = a(714991),
    u = a(776231),
    h = a(486020),
    m = a(860689),
    p = a(652215),
    _ = a(985018),
    g = a(728989),
    x = a(937495),
    A = a(517061);
function C(e) {
    let { guild: t, className: a, onClick: i } = e,
        C = (0, r.Ay)(),
        v = (0, m.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        b = h.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, u.mZ)() }),
        f =
            null != b
                ? b
                : (function (e) {
                      switch (e) {
                          case p.NJ8.DARK:
                              return x;
                          case p.NJ8.LIGHT:
                              return A;
                      }
                  })(C),
        j = h.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, n.jsxs)(l.DUT, {
        className: s()(g.Nr, a),
        onClick: i,
        "aria-label": _.intl.string(_.t.RB4L2x),
        children: [
            (0, n.jsxs)("div", {
                className: g.MY,
                children: [
                    (0, n.jsx)("img", { src: f, alt: "", className: g.j0 }),
                    (0, n.jsx)("div", {
                        className: g.$f,
                        children: (0, n.jsx)(o.Ay, {
                            mask: o.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, n.jsx)("div", {
                                className: g.SA,
                                children: (0, n.jsx)(c.Ay, {
                                    className: g.__invalid_icon,
                                    iconSrc: j,
                                    guild: v,
                                    size: c.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: g.RN,
                children: [
                    (0, n.jsxs)("div", {
                        className: g.Y_,
                        children: [
                            (0, n.jsx)(d.A, { className: g.n2, guild: t, tooltipColor: l.STz.Colors.PRIMARY }),
                            (0, n.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                className: g.J5,
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, n.jsx)(l.Text, {
                        className: g.eF,
                        variant: "text-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, n.jsx)("div", {
                        className: g.Fj,
                        children: (0, n.jsxs)("div", {
                            className: g.FG,
                            children: [
                                (0, n.jsx)(l.nys, { color: "currentColor", className: g.NP, size: "xs" }),
                                (0, n.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: _.intl.format(_.t.zRl6XR, { count: t.approximate_member_count }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
