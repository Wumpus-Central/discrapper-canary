var t = l(477900);
l(582128);
var r = l(939249),
    o = l(97808),
    u = l(778712),
    a = l(834730),
    s = l(825484),
    i = l(821609),
    d = l(152367),
    c = l(702476),
    v = l(427262),
    m = l(318774),
    f = l(32639),
    g = l(95264),
    p = l(652215),
    j = l(191850),
    x = l(792996),
    C = l(41799);
l.d(
    n,
    {},
    {
        A: function (e) {
            let { applicationId: n, creator: l, remixProject: h, editProject: E, guildId: A, onClose: H } = e;
            return (0, t.jsxs)("div", {
                className: C.qr,
                children: [
                    (0, t.jsx)("div", { className: C.xX, children: (0, t.jsx)(m.Al, {}) }),
                    (0, t.jsxs)("div", {
                        className: C.OZ,
                        children: [
                            null != l
                                ? (0, t.jsxs)(r.D, {
                                      className: C.xL,
                                      onClick: function () {
                                          null != l &&
                                              (H(),
                                              (0, c.openUserProfileModal)({
                                                  userId: l.id,
                                                  guildId: A ?? void 0,
                                                  appContext: p.BRT.APP,
                                              }));
                                      },
                                      children: [
                                          (0, t.jsx)(o.eu, {
                                              src: l.getAvatarURL(A, 40),
                                              size: u._3.SIZE_20,
                                              "aria-hidden": !0,
                                          }),
                                          (0, t.jsx)(a.E, {
                                              variant: "body-sm/normal",
                                              color: "none",
                                              lineClamp: 1,
                                              children: x.intl.format(j.default["6/x9LD"], { name: (0, v.mG)(l) }),
                                          }),
                                      ],
                                  })
                                : (0, t.jsx)("span", {}),
                            null != E || null != h
                                ? (0, t.jsxs)(s.e, {
                                      size: "sm",
                                      wrap: !1,
                                      children: [
                                          null != E
                                              ? (0, t.jsx)(i.$, {
                                                    variant: "secondary",
                                                    icon: d.MagicWandIcon,
                                                    text: x.intl.string(x.t.bt75uw),
                                                    onClick: function () {
                                                        null != E && (H(), (0, f.A)(E, n));
                                                    },
                                                })
                                              : null,
                                          null != h
                                              ? (0, t.jsx)(i.$, {
                                                    variant: "secondary",
                                                    text: x.intl.string(j.default["276ll6"]),
                                                    onClick: function () {
                                                        null != h && null != A && (H(), (0, g.A)(h, A));
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
