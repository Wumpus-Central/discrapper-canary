n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(821982),
    l = n(70097),
    c = n(594174),
    u = n(967282),
    d = n(328756),
    f = n(131812);
let _ = 1.2,
    p = 0.321;
function h(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: h } = e,
        m = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        E = (0, a.pxk)(h),
        b = { height: E * _ };
    return n.length > 2
        ? (0, r.jsx)(l.Z, {
              style: b,
              src: t,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
          })
        : (0, r.jsxs)("div", {
              className: u.container,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(a.Xo$, {
                          "aria-label": null == m ? void 0 : m.username,
                          size: h,
                          className: u.firstPromotionalAvatar,
                          src: 1 === n.length ? (null == m ? void 0 : m.getAvatarURL(void 0, (0, a.pxk)(h), !g)) : f,
                          avatarDecoration: (0, s.Z)(n[0].assetId, h, !g),
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(E * p) },
                          children: (0, r.jsx)(a.Xo$, {
                              "aria-label": null == m ? void 0 : m.username,
                              size: h,
                              src: d,
                              avatarDecoration: (0, s.Z)(n[1].assetId, h, !g),
                          }),
                      }),
              ],
          });
}
