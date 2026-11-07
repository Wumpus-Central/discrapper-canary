var t = l(477900);
l(582128);
var r = l(939249),
    o = l(825484),
    u = l(821609),
    a = l(152367),
    s = l(702476),
    i = l(318774),
    d = l(32639),
    c = l(95264),
    v = l(995377),
    f = l(652215),
    m = l(191850),
    g = l(792996),
    p = l(41799);
l.d(
    n,
    {},
    {
        A: function (e) {
            let { applicationId: n, creator: l, remixProject: j, editProject: x, guildId: C, onClose: h } = e;
            return (0, t.jsxs)("div", {
                className: p.qr,
                children: [
                    (0, t.jsx)("div", { className: p.xX, children: (0, t.jsx)(i.Al, {}) }),
                    (0, t.jsxs)("div", {
                        className: p.OZ,
                        children: [
                            null != l
                                ? (0, t.jsx)(r.D, {
                                      className: p.xL,
                                      onClick: function () {
                                          null != l &&
                                              (h(),
                                              (0, s.openUserProfileModal)({
                                                  userId: l.id,
                                                  guildId: C ?? void 0,
                                                  appContext: f.BRT.APP,
                                              }));
                                      },
                                      children: (0, t.jsx)(v.A, { creator: l, guildId: C }),
                                  })
                                : (0, t.jsx)("span", {}),
                            null != x || null != j
                                ? (0, t.jsxs)(o.e, {
                                      size: "sm",
                                      wrap: !1,
                                      children: [
                                          null != x
                                              ? (0, t.jsx)(u.$, {
                                                    variant: "secondary",
                                                    icon: a.MagicWandIcon,
                                                    text: g.intl.string(g.t.bt75uw),
                                                    onClick: function () {
                                                        null != x && (h(), (0, d.A)(x, n));
                                                    },
                                                })
                                              : null,
                                          null != j
                                              ? (0, t.jsx)(u.$, {
                                                    variant: "secondary",
                                                    text: g.intl.string(m.default["276ll6"]),
                                                    onClick: function () {
                                                        null != j && null != C && (h(), (0, c.A)(j, C));
                                                    },
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            });
        },
    },
);
