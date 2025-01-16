r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(607070),
    l = r(821982),
    u = r(594174),
    c = r(169413),
    d = r(328756),
    f = r(131812);
let _ = 1.4,
    h = 0.321;
function p(e) {
    let { maxRewardImageSrc: n, claimableRewards: r, size: p } = e,
        m = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        g = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        E = (0, s.getAvatarSize)(p),
        v = 56 === E ? void 0 : { height: Math.round(E * _) };
    return r.length > 2
        ? (0, i.jsx)('img', {
              alt: '',
              src: n,
              className: c.image,
              style: v
          })
        : (0, i.jsxs)('div', {
              className: c.container,
              children: [
                  (1 === r.length || 2 === r.length) &&
                      (0, i.jsx)(s.AnimatedAvatar, {
                          'aria-label': null == m ? void 0 : m.username,
                          size: p,
                          className: c.firstPromotionalAvatar,
                          src: 1 === r.length ? (null == m ? void 0 : m.getAvatarURL(void 0, (0, s.getAvatarSize)(p), !g)) : f,
                          avatarDecoration: (0, l.Z)(r[0].assetId, p, !g)
                      }),
                  2 === r.length &&
                      (0, i.jsx)('div', {
                          style: { marginRight: -Math.round(E * h) },
                          children: (0, i.jsx)(s.AnimatedAvatar, {
                              'aria-label': null == m ? void 0 : m.username,
                              size: p,
                              src: d,
                              avatarDecoration: (0, l.Z)(r[1].assetId, p, !g)
                          })
                      })
              ]
          });
}
