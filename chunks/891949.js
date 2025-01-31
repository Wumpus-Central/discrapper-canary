n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(341176),
    o = n(312097),
    s = n(810568),
    c = n(388032),
    d = n(561526),
    u = n(639935);
function m(e) {
    let { detectedGame: t, trackAction: n } = e,
        m = r.useRef(null),
        p = r.useMemo(() => {
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
        g = p.length > 2;
    function h(e) {
        if (null == m.current) return;
        let t = m.current.getScrollerState().scrollLeft;
        m.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        });
    }
    return 0 === p.length
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(a.X6q, {
                      className: d.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: c.intl.string(c.t['bNdK5+'])
                  }),
                  (0, i.jsxs)('div', {
                      className: g ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, i.jsx)(a.xVE, {
                              ref: m,
                              className: u.imageScroller,
                              orientation: 'horizontal',
                              children: p.map((e, t) =>
                                  (0, i.jsx)(
                                      a.P3F,
                                      {
                                          className: u.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: u.gameArtworkFocusRing
                                          },
                                          onClick: () => {
                                              n(s.as.ClickImage),
                                                  (0, o.K)({
                                                      className: u.mediaModal,
                                                      items: p,
                                                      fit: l.D.SCALE_DOWN,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      shouldAnimateCarousel: !0,
                                                      location: 'GameProfileMedia'
                                                  });
                                          },
                                          children: (0, i.jsx)('img', {
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
                              (0, i.jsxs)('div', {
                                  className: u.mediaOverlay,
                                  children: [
                                      (0, i.jsx)('div', { className: u.gradientLeft }),
                                      (0, i.jsx)(a.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => h(-1),
                                          children: (0, i.jsx)(a.whL, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, i.jsx)('div', { className: u.gradientRight }),
                                      (0, i.jsx)(a.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => h(1),
                                          children: (0, i.jsx)(a.ZSh, {
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
