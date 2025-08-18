i.d(t, { Z: () => C });
var n = i(951288);
i(647438);
var r = i(442837),
    l = i(481060),
    a = i(607070),
    s = i(821982),
    o = i(70097),
    c = i(594174),
    u = i(967282),
    d = i(328756),
    m = i(131812);
function C(e) {
    let { maxRewardImageSrc: t, claimableRewards: i, size: C } = e,
        p = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        g = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        x = (0, l.pxk)(C);
    return i.length > 2
        ? (0, n.jsx)(o.Z, {
              style: { height: 1.2 * x },
              src: t,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
          })
        : (0, n.jsxs)("div", {
              className: u.container,
              children: [
                  (1 === i.length || 2 === i.length) &&
                      (0, n.jsx)(l.Xo$, {
                          "aria-label": null == p ? void 0 : p.username,
                          size: C,
                          className: u.firstPromotionalAvatar,
                          src: 1 === i.length ? (null == p ? void 0 : p.getAvatarURL(void 0, (0, l.pxk)(C), !g)) : m,
                          avatarDecoration: (0, s.Z)(i[0].assetId, C, !g),
                      }),
                  2 === i.length &&
                      (0, n.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * x) },
                          children: (0, n.jsx)(l.Xo$, {
                              "aria-label": null == p ? void 0 : p.username,
                              size: C,
                              src: d,
                              avatarDecoration: (0, s.Z)(i[1].assetId, C, !g),
                          }),
                      }),
              ],
          });
}
