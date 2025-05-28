n.d(t, { Z: () => m });
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
function m(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: m } = e,
        C = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        g = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        p = (0, l.pxk)(m);
    return n.length > 2
        ? (0, r.jsx)('img', {
              alt: '',
              src: t,
              style: { height: 1.2 * p }
          })
        : (0, r.jsxs)('div', {
              className: c.container,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(l.Xo$, {
                          'aria-label': null == C ? void 0 : C.username,
                          size: m,
                          className: c.firstPromotionalAvatar,
                          src: 1 === n.length ? (null == C ? void 0 : C.getAvatarURL(void 0, (0, l.pxk)(m), !g)) : d,
                          avatarDecoration: (0, s.Z)(n[0].assetId, m, !g)
                      }),
                  2 === n.length &&
                      (0, r.jsx)('div', {
                          style: { marginRight: -Math.round(0.321 * p) },
                          children: (0, r.jsx)(l.Xo$, {
                              'aria-label': null == C ? void 0 : C.username,
                              size: m,
                              src: u,
                              avatarDecoration: (0, s.Z)(n[1].assetId, m, !g)
                          })
                      })
              ]
          });
}
