(n.d(t, { Z: () => u }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(481060),
    a = n(810568),
    l = n(168524),
    c = n(388032),
    s = n(467514);
function d(e) {
    let { imageSrc: t, gameName: n } = e,
        [a, l] = o.useState(!1),
        d = null != n ? n : c.intl.string(c.t.GIWFlJ);
    return a || null == t
        ? (0, r.jsx)('div', {
              role: 'img',
              'aria-label': d,
              className: s.fallback,
              children: (0, r.jsx)(i.Text, {
                  variant: 'text-xxs/medium',
                  lineClamp: 3,
                  'aria-hidden': !0,
                  children: d
              })
          })
        : (0, r.jsx)('img', {
              src: t,
              alt: d,
              className: s.gameCoverImage,
              onError: () => l(!0),
              onLoad: () => l(!1)
          });
}
function u(e) {
    let { imageSrc: t, gameName: n, applicationId: o, userId: u, disableInteraction: f = !1 } = e,
        m = (0, l.Z)({
            location: 'GameCover',
            applicationId: o,
            source: a.m1.UserProfile,
            sourceUserId: u,
            trackEntryPointImpression: !0
        });
    if (f || null == m)
        return (0, r.jsx)(d, {
            imageSrc: t,
            gameName: n
        });
    let p = c.intl.formatToPlainString(c.t['8QLQBw'], { gameName: null != n ? n : c.intl.string(c.t.GIWFlJ) });
    return (0, r.jsx)(i.P3F, {
        onClick: m,
        'aria-label': p,
        className: s.clickable,
        children: (0, r.jsx)(d, {
            imageSrc: t,
            gameName: n
        })
    });
}
