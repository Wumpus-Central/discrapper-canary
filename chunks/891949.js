n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(481060),
    o = n(341176),
    l = n(312097),
    s = n(810568),
    c = n(388032),
    d = n(959559),
    u = n(977249);
function m(e) {
    let { detectedGame: t, trackAction: n } = e,
        m = a.useRef(null),
        _ = a.useMemo(() => {
            let e = t.artwork.map((e) => ({
                url: e,
                type: 'IMAGE'
            }));
            return [
                ...t.screenshots.map((e) => ({
                    url: e,
                    type: 'IMAGE'
                })),
                ...e
            ];
        }, [t.artwork, t.screenshots]),
        g = _.length > 2;
    function p(e) {
        if (null == m.current) return;
        let t = m.current.getScrollerState().scrollLeft;
        m.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        });
    }
    return 0 === _.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(i.X6q, {
                      className: d.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: c.intl.string(c.t['bNdK5+'])
                  }),
                  (0, r.jsxs)('div', {
                      className: g ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, r.jsx)(i.xVE, {
                              ref: m,
                              className: u.imageScroller,
                              orientation: 'horizontal',
                              children: _.map((e, t) =>
                                  (0, r.jsx)(
                                      i.P3F,
                                      {
                                          className: u.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: u.gameArtworkFocusRing
                                          },
                                          onClick: () => {
                                              n(s.as.ClickImage),
                                                  (0, l.K)({
                                                      className: u.mediaModal,
                                                      items: _,
                                                      fit: o.D.SCALE_DOWN,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      shouldAnimateCarousel: !0,
                                                      location: 'GameProfileMedia'
                                                  });
                                          },
                                          children: (0, r.jsx)('img', {
                                              src: e.url,
                                              className: u.gameArtwork,
                                              alt: c.intl.formatToPlainString(c.t.COYYrq, { game: name })
                                          })
                                      },
                                      t
                                  )
                              )
                          }),
                          g &&
                              (0, r.jsxs)('div', {
                                  className: u.mediaOverlay,
                                  children: [
                                      (0, r.jsx)('div', { className: u.gradientLeft }),
                                      (0, r.jsx)(i.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => p(-1),
                                          children: (0, r.jsx)(i.whL, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)('div', { className: u.gradientRight }),
                                      (0, r.jsx)(i.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => p(1),
                                          children: (0, r.jsx)(i.ZSh, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              ]
          });
}
