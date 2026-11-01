t.d(n, { A: () => x });
var l = t(477900);
t(582128);
var r = t(939249),
    o = t(97808),
    a = t(778712),
    u = t(834730),
    s = t(821609),
    i = t(402860),
    d = t(427262),
    c = t(659723),
    v = t(95264),
    m = t(652215),
    f = t(809526),
    g = t(105292),
    p = t(41799);
function x(e) {
    let { creator: n, remixProject: t, guildId: x, onClose: j } = e;
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
                                      (j(),
                                      (0, i.openUserProfileModal)({
                                          userId: n.id,
                                          guildId: x ?? void 0,
                                          appContext: m.BRT.APP,
                                      }));
                              },
                              children: [
                                  (0, l.jsx)(o.eu, {
                                      src: n.getAvatarURL(x, 40),
                                      size: a._3.SIZE_20,
                                      "aria-hidden": !0,
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "none",
                                      lineClamp: 1,
                                      children: g.intl.format(f.default["6/x9LD"], { name: (0, d.mG)(n) }),
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
                                  null != t && null != x && (j(), (0, v.A)(t, x));
                              },
                          })
                        : null,
                ],
            }),
        ],
    });
}
