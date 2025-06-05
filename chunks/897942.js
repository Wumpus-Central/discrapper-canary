i.d(t, { Z: () => m });
var n = i(255367);
i(73800);
var r = i(442837),
    l = i(481060),
    a = i(607070),
    s = i(821982),
    o = i(594174),
    c = i(484027),
    u = i(328756),
    d = i(131812);
function m(e) {
    let { maxRewardImageSrc: t, claimableRewards: i, size: m } = e,
        C = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        p = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        g = (0, l.pxk)(m);
    return i.length > 2
        ? (0, n.jsx)('img', {
              alt: '',
              src: t,
              style: { height: 1.2 * g }
          })
        : (0, n.jsxs)('div', {
              className: c.container,
              children: [
                  (1 === i.length || 2 === i.length) &&
                      (0, n.jsx)(l.Xo$, {
                          'aria-label': null == C ? void 0 : C.username,
                          size: m,
                          className: c.firstPromotionalAvatar,
                          src: 1 === i.length ? (null == C ? void 0 : C.getAvatarURL(void 0, (0, l.pxk)(m), !p)) : d,
                          avatarDecoration: (0, s.Z)(i[0].assetId, m, !p)
                      }),
                  2 === i.length &&
                      (0, n.jsx)('div', {
                          style: { marginRight: -Math.round(0.321 * g) },
                          children: (0, n.jsx)(l.Xo$, {
                              'aria-label': null == C ? void 0 : C.username,
                              size: m,
                              src: u,
                              avatarDecoration: (0, s.Z)(i[1].assetId, m, !p)
                          })
                      })
              ]
          });
}
