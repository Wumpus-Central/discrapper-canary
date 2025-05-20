n.d(t, { Z: () => C });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(607070),
    s = n(821982),
    o = n(594174),
    c = n(484027),
    u = n(328756),
    d = n(131812);
function C(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: C } = e,
        m = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        p = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        g = (0, l.pxk)(C);
    return n.length > 2
        ? (0, r.jsx)('img', {
              alt: '',
              src: t,
              style: { height: 1.2 * g }
          })
        : (0, r.jsxs)('div', {
              className: c.container,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(l.Xo$, {
                          'aria-label': null == m ? void 0 : m.username,
                          size: C,
                          className: c.firstPromotionalAvatar,
                          src: 1 === n.length ? (null == m ? void 0 : m.getAvatarURL(void 0, (0, l.pxk)(C), !p)) : d,
                          avatarDecoration: (0, s.Z)(n[0].assetId, C, !p)
                      }),
                  2 === n.length &&
                      (0, r.jsx)('div', {
                          style: { marginRight: -Math.round(0.321 * g) },
                          children: (0, r.jsx)(l.Xo$, {
                              'aria-label': null == m ? void 0 : m.username,
                              size: C,
                              src: u,
                              avatarDecoration: (0, s.Z)(n[1].assetId, C, !p)
                          })
                      })
              ]
          });
}
