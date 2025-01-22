r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(607070),
    l = r(821982),
    u = r(594174),
    c = r(169413),
    d = r(328756),
    f = r(131812);
let p = 1.2,
    h = 0.321;
function _(e) {
    let { maxRewardImageSrc: n, claimableRewards: r, size: _ } = e,
        m = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        g = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        E = (0, o.getAvatarSize)(_),
        v = { height: E * p };
    return r.length > 2
        ? (0, i.jsx)('img', {
              alt: '',
              src: n,
              style: v
          })
        : (0, i.jsxs)('div', {
              className: c.container,
              children: [
                  (1 === r.length || 2 === r.length) &&
                      (0, i.jsx)(o.AnimatedAvatar, {
                          'aria-label': null == m ? void 0 : m.username,
                          size: _,
                          className: c.firstPromotionalAvatar,
                          src: 1 === r.length ? (null == m ? void 0 : m.getAvatarURL(void 0, (0, o.getAvatarSize)(_), !g)) : f,
                          avatarDecoration: (0, l.Z)(r[0].assetId, _, !g)
                      }),
                  2 === r.length &&
                      (0, i.jsx)('div', {
                          style: { marginRight: -Math.round(E * h) },
                          children: (0, i.jsx)(o.AnimatedAvatar, {
                              'aria-label': null == m ? void 0 : m.username,
                              size: _,
                              src: d,
                              avatarDecoration: (0, l.Z)(r[1].assetId, _, !g)
                          })
                      })
              ]
          });
}
