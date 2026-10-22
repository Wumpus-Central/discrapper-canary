n.d(t, { A: () => x });
var l = n(477900);
n(582128);
var r = n(939249),
    s = n(97808),
    a = n(778712),
    o = n(834730),
    u = n(123292),
    i = n(402860),
    d = n(427262),
    c = n(95264),
    m = n(652215),
    v = n(248675),
    f = n(105292),
    p = n(41799);
function x(e) {
    let { creator: t, remixProject: n, guildId: x, onClose: g } = e;
    return (0, l.jsxs)("div", {
        className: p.qr,
        children: [
            (0, l.jsxs)("div", {
                className: p.Pq,
                "aria-hidden": !0,
                children: [
                    (0, l.jsx)("span", { className: p.ly }),
                    (0, l.jsxs)("span", {
                        className: p.f5,
                        children: [
                            Array.from({ length: 6 }, (e, t) => (0, l.jsx)("span", { className: p.Dg }, t)),
                            (0, l.jsx)("span", { className: p.n4 }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: p.OZ,
                children: [
                    (0, l.jsxs)(r.D, {
                        className: p.xL,
                        onClick: function () {
                            (g(),
                                (0, i.openUserProfileModal)({
                                    userId: t.id,
                                    guildId: x ?? void 0,
                                    appContext: m.BRT.APP,
                                }));
                        },
                        children: [
                            (0, l.jsx)(s.eu, { src: t.getAvatarURL(x, 32), size: a._3.SIZE_16, "aria-hidden": !0 }),
                            (0, l.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                lineClamp: 1,
                                children: f.intl.formatToPlainString(v.default["6/x9LD"], { name: (0, d.mG)(t) }),
                            }),
                        ],
                    }),
                    null != n
                        ? (0, l.jsx)(u.Q, {
                              variant: "primary",
                              textVariant: "text-sm/medium",
                              text: f.intl.string(v.default.KMwCb7),
                              onClick: function () {
                                  null != n && null != x && (g(), (0, c.A)(n, x));
                              },
                          })
                        : null,
                ],
            }),
        ],
    });
}
