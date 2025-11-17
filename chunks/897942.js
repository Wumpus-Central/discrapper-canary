n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(821982),
    l = n(594174),
    c = n(967282),
    u = n(328756),
    d = n(131812);
let f = 1.5,
    _ = 0.321;
function p(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: p, imageScaling: h = f } = e,
        m = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        E = (0, a.pxk)(p),
        b = { height: E * h };
    return n.length > 0
        ? (0, r.jsx)("img", {
              alt: "",
              src: t,
              style: b,
          })
        : (0, r.jsxs)("div", {
              className: c.container,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(a.Xo$, {
                          "aria-label": null == m ? void 0 : m.username,
                          size: p,
                          className: c.firstPromotionalAvatar,
                          src: 1 === n.length ? (null == m ? void 0 : m.getAvatarURL(void 0, (0, a.pxk)(p), !g)) : d,
                          avatarDecoration: (0, s.Z)(n[0].assetId, p, !g),
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(E * _) },
                          children: (0, r.jsx)(a.Xo$, {
                              "aria-label": null == m ? void 0 : m.username,
                              size: p,
                              src: u,
                              avatarDecoration: (0, s.Z)(n[1].assetId, p, !g),
                          }),
                      }),
              ],
          });
}
