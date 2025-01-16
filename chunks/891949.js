n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(341176),
    o = n(312097),
    s = n(810568),
    c = n(388032),
    d = n(561526),
    u = n(639935);
function m(e) {
    let { detectedGame: t, trackAction: n } = e,
        m = i.useRef(null),
        p = i.useMemo(() => {
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
    function f(e) {
        if (null == m.current) return;
        let t = m.current.getScrollerState().scrollLeft;
        m.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        });
    }
    return 0 === p.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(a.Heading, {
                      className: d.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: c.intl.string(c.t['bNdK5+'])
                  }),
                  (0, r.jsxs)('div', {
                      className: g ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, r.jsx)(a.AdvancedScrollerNone, {
                              ref: m,
                              className: u.imageScroller,
                              orientation: 'horizontal',
                              children: p.map((e, t) =>
                                  (0, r.jsx)(
                                      a.Clickable,
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
                                      (0, r.jsx)(a.Clickable, {
                                          className: u.arrowClickable,
                                          onClick: () => f(-1),
                                          children: (0, r.jsx)(a.ArrowSmallLeftIcon, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)('div', { className: u.gradientRight }),
                                      (0, r.jsx)(a.Clickable, {
                                          className: u.arrowClickable,
                                          onClick: () => f(1),
                                          children: (0, r.jsx)(a.ArrowSmallRightIcon, {
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
