r.d(t, { Z: () => d }), r(388685);
var n = r(200651),
    a = r(192379),
    o = r(481060),
    i = r(312097),
    l = r(810568),
    s = r(388032),
    c = r(263930),
    u = r(301736);
function d(e) {
    let { detectedGame: t, trackAction: r } = e,
        d = a.useRef(null),
        p = a.useMemo(() => {
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
        f = p.length > 2;
    function m(e) {
        if (null == d.current) return;
        let t = d.current.getScrollerState().scrollLeft;
        d.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        });
    }
    return 0 === p.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)(o.X6q, {
                      className: c.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: s.NW.string(s.t['bNdK5+'])
                  }),
                  (0, n.jsxs)('div', {
                      className: f ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, n.jsx)(o.xVE, {
                              ref: d,
                              className: u.imageScroller,
                              orientation: 'horizontal',
                              children: p.map((e, t) =>
                                  (0, n.jsx)(
                                      o.P3F,
                                      {
                                          className: u.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: u.gameArtworkFocusRing
                                          },
                                          onClick: () => {
                                              r(l.as.ClickImage),
                                                  (0, i.K)({
                                                      items: p,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: 'GameProfileMedia'
                                                  });
                                          },
                                          children: (0, n.jsx)('img', {
                                              src: e.url,
                                              className: u.gameArtwork,
                                              alt: s.NW.formatToPlainString(s.t.COYYrq, { game: name })
                                          })
                                      },
                                      t
                                  )
                              )
                          }),
                          f &&
                              (0, n.jsxs)('div', {
                                  className: u.mediaOverlay,
                                  children: [
                                      (0, n.jsx)('div', { className: u.gradientLeft }),
                                      (0, n.jsx)(o.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => m(-1),
                                          children: (0, n.jsx)(o.whL, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, n.jsx)('div', { className: u.gradientRight }),
                                      (0, n.jsx)(o.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => m(1),
                                          children: (0, n.jsx)(o.ZSh, {
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
