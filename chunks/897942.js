n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    o = n(481060),
    a = n(607070),
    s = n(821982),
    l = n(70097),
    c = n(594174),
    u = n(967282),
    d = n(328756),
    f = n(131812);
let _ = 1.3,
    p = 0.321;
function h(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: h, imageScaling: m = _ } = e,
        g = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        E = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        b = (0, o.pxk)(h),
        y = { height: b * m };
    return n.length > 2
        ? (0, r.jsx)(l.Z, {
              style: y,
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
                      (0, r.jsx)(o.Xo$, {
                          "aria-label": null == g ? void 0 : g.username,
                          size: h,
                          className: u.firstPromotionalAvatar,
                          src: 1 === n.length ? (null == g ? void 0 : g.getAvatarURL(void 0, (0, o.pxk)(h), !E)) : f,
                          avatarDecoration: (0, s.Z)(n[0].assetId, h, !E),
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(b * p) },
                          children: (0, r.jsx)(o.Xo$, {
                              "aria-label": null == g ? void 0 : g.username,
                              size: h,
                              src: d,
                              avatarDecoration: (0, s.Z)(n[1].assetId, h, !E),
                          }),
                      }),
              ],
          });
}
