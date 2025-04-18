r.d(t, { Z: () => d }), r(388685);
var n = r(200651),
    a = r(192379),
    i = r(481060),
    l = r(312097),
    s = r(810568),
    o = r(388032),
    c = r(263930),
    u = r(301736);
function d(e) {
    let { detectedGame: t, trackAction: r } = e,
        d = a.useRef(null),
        m = a.useMemo(() => {
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
        g = m.length > 2;
    function f(e) {
        if (null == d.current) return;
        let t = d.current.getScrollerState().scrollLeft;
        d.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        });
    }
    return 0 === m.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)(i.X6q, {
                      className: c.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: o.NW.string(o.t['bNdK5+'])
                  }),
                  (0, n.jsxs)('div', {
                      className: g ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, n.jsx)(i.xVE, {
                              ref: d,
                              className: u.imageScroller,
                              orientation: 'horizontal',
                              children: m.map((e, t) =>
                                  (0, n.jsx)(
                                      i.P3F,
                                      {
                                          className: u.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: u.gameArtworkFocusRing
                                          },
                                          onClick: () => {
                                              r(s.as.ClickImage),
                                                  (0, l.K)({
                                                      items: m,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: 'GameProfileMedia'
                                                  });
                                          },
                                          children: (0, n.jsx)('img', {
                                              src: e.url,
                                              className: u.gameArtwork,
                                              alt: o.NW.formatToPlainString(o.t.COYYrq, { game: name })
                                          })
                                      },
                                      t
                                  )
                              )
                          }),
                          g &&
                              (0, n.jsxs)('div', {
                                  className: u.mediaOverlay,
                                  children: [
                                      (0, n.jsx)('div', { className: u.gradientLeft }),
                                      (0, n.jsx)(i.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => f(-1),
                                          children: (0, n.jsx)(i.whL, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, n.jsx)('div', { className: u.gradientRight }),
                                      (0, n.jsx)(i.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => f(1),
                                          children: (0, n.jsx)(i.ZSh, {
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
