var i = n(477900),
    s = n(582128),
    l = n(646514),
    r = n(331322),
    a = n(403581),
    o = n(534514),
    c = n(805251),
    u = n(834730),
    d = n(821609),
    m = n(866665),
    f = n(408278),
    E = n(789645),
    I = n(240248),
    h = n(49999),
    g = n(236432),
    A = n(792996),
    p = n(857913),
    _ = n(298079);
let N = (0, I.xI)(l.A.space.PX_128) - 1;
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onViewEmojiPacks: t, onDismiss: n } = e,
                I = s.useId();
            return (0, i.jsxs)(r.B, {
                as: "section",
                "aria-labelledby": I,
                className: p.vK,
                direction: "horizontal",
                align: "center",
                gap: 8,
                padding: { left: 16, right: 12 },
                fullWidth: !1,
                children: [
                    (0, i.jsxs)(r.B, {
                        className: p.C,
                        direction: "vertical",
                        align: "start",
                        gap: 12,
                        padding: { top: 16, bottom: 16 },
                        fullWidth: !1,
                        children: [
                            (0, i.jsxs)(r.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                children: [
                                    (0, i.jsxs)(r.B, {
                                        className: p.$,
                                        direction: "horizontal",
                                        align: "center",
                                        gap: 4,
                                        fullWidth: !1,
                                        children: [
                                            (0, i.jsx)(a.NitroWheelIcon, {
                                                color: l.A.colors.ICON_DEFAULT,
                                                size: "xs",
                                            }),
                                            (0, i.jsx)(o.D, {
                                                id: I,
                                                variant: "body-sm/semibold",
                                                color: "text-default",
                                                children: A.intl.string(g.default["0+5+Oy"]),
                                            }),
                                            (0, i.jsx)(c.E, { type: "beta", variant: "primary" }),
                                        ],
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        lineClamp: 2,
                                        children: A.intl.string(g.default["6mcVBm"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: A.intl.string(g.default.Nj8Y3C),
                                onClick: function () {
                                    (n(h.i.TAKE_ACTION), t());
                                },
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: p.Sl,
                        children: (0, i.jsx)("img", { alt: "", className: p.Qw, src: _.A }),
                    }),
                    (0, i.jsx)("div", {
                        className: p.VN,
                        children: (0, i.jsx)(m.m, {
                            text: A.intl.string(A.t.WAI6xu),
                            children: (0, i.jsx)(f.K, {
                                "aria-label": A.intl.string(A.t.WAI6xu),
                                icon: E.XSmallIcon,
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => n(h.i.USER_DISMISS),
                            }),
                        }),
                    }),
                ],
            });
        },
        D: N,
    },
);
