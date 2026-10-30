n.d(t, { A: () => x });
var l = n(477900);
n(582128);
var r = n(939249),
    a = n(97808),
    o = n(778712),
    u = n(834730),
    s = n(821609),
    i = n(402860),
    d = n(427262),
    c = n(659723),
    v = n(95264),
    f = n(652215),
    m = n(809526),
    g = n(105292),
    p = n(41799);
function x(e) {
    let { creator: t, remixProject: n, guildId: x, onClose: j } = e;
    return (0, l.jsxs)("div", {
        className: p.qr,
        children: [
            (0, l.jsx)("div", { className: p.xX, children: (0, l.jsx)(c.Al, {}) }),
            (0, l.jsxs)("div", {
                className: p.OZ,
                children: [
                    null != t
                        ? (0, l.jsxs)(r.D, {
                              className: p.xL,
                              onClick: function () {
                                  null != t &&
                                      (j(),
                                      (0, i.openUserProfileModal)({
                                          userId: t.id,
                                          guildId: x ?? void 0,
                                          appContext: f.BRT.APP,
                                      }));
                              },
                              children: [
                                  (0, l.jsx)(a.eu, {
                                      src: t.getAvatarURL(x, 40),
                                      size: o._3.SIZE_20,
                                      "aria-hidden": !0,
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "none",
                                      lineClamp: 1,
                                      children: g.intl.format(m.default["6/x9LD"], { name: (0, d.mG)(t) }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)("span", {}),
                    null != n
                        ? (0, l.jsx)(s.$, {
                              variant: "secondary",
                              size: "sm",
                              text: g.intl.string(m.default.XWgAfc),
                              onClick: function () {
                                  null != n && null != x && (j(), (0, v.A)(n, x));
                              },
                          })
                        : null,
                ],
            }),
        ],
    });
}
