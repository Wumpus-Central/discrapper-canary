n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(607070),
    o = n(821982),
    l = n(594174),
    u = n(833328),
    c = n(328756),
    d = n(131812);
let f = 1.2,
    _ = 0.321;
function p(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: p } = e,
        h = (0, r.e7)([l.default], () => l.default.getCurrentUser()),
        m = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        g = (0, a.pxk)(p),
        E = { height: g * f };
    return n.length > 2
        ? (0, i.jsx)('img', {
              alt: '',
              src: t,
              style: E
          })
        : (0, i.jsxs)('div', {
              className: u.container,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, i.jsx)(a.Xo$, {
                          'aria-label': null == h ? void 0 : h.username,
                          size: p,
                          className: u.firstPromotionalAvatar,
                          src: 1 === n.length ? (null == h ? void 0 : h.getAvatarURL(void 0, (0, a.pxk)(p), !m)) : d,
                          avatarDecoration: (0, o.Z)(n[0].assetId, p, !m)
                      }),
                  2 === n.length &&
                      (0, i.jsx)('div', {
                          style: { marginRight: -Math.round(g * _) },
                          children: (0, i.jsx)(a.Xo$, {
                              'aria-label': null == h ? void 0 : h.username,
                              size: p,
                              src: c,
                              avatarDecoration: (0, o.Z)(n[1].assetId, p, !m)
                          })
                      })
              ]
          });
}
