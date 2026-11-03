t.d(n, { A: () => j });
var l = t(477900);
t(582128);
var r = t(939249),
    o = t(97808),
    a = t(778712),
    u = t(834730),
    s = t(821609),
    d = t(402860),
    i = t(427262),
    c = t(659723),
    v = t(95264),
    m = t(652215),
    f = t(809526),
    g = t(105292),
    p = t(41799);
function j(e) {
    let { creator: n, remixProject: t, guildId: j, onClose: x } = e;
    return (0, l.jsxs)("div", {
        className: p.qr,
        children: [
            (0, l.jsx)("div", { className: p.xX, children: (0, l.jsx)(c.Al, {}) }),
            (0, l.jsxs)("div", {
                className: p.OZ,
                children: [
                    null != n
                        ? (0, l.jsxs)(r.D, {
                              className: p.xL,
                              onClick: function () {
                                  null != n &&
                                      (x(),
                                      (0, d.openUserProfileModal)({
                                          userId: n.id,
                                          guildId: j ?? void 0,
                                          appContext: m.BRT.APP,
                                      }));
                              },
                              children: [
                                  (0, l.jsx)(o.eu, {
                                      src: n.getAvatarURL(j, 40),
                                      size: a._3.SIZE_20,
                                      "aria-hidden": !0,
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "body-sm/normal",
                                      color: "none",
                                      lineClamp: 1,
                                      children: g.intl.format(f.default["6/x9LD"], { name: (0, i.mG)(n) }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)("span", {}),
                    null != t
                        ? (0, l.jsx)(s.$, {
                              variant: "secondary",
                              size: "sm",
                              text: g.intl.string(f.default["276ll6"]),
                              onClick: function () {
                                  null != t && null != j && (x(), (0, v.A)(t, j));
                              },
                          })
                        : null,
                ],
            }),
        ],
    });
}
