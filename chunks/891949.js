n.d(t, { Z: () => u }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(481060),
    a = n(312097),
    s = n(810568),
    o = n(388032),
    c = n(456486),
    d = n(823117);
function u(e) {
    let { detectedGame: t, trackAction: n } = e,
        u = l.useRef(null),
        m = l.useMemo(() => {
            let e = t.artwork.map((e) => ({
                url: e,
                type: "IMAGE",
            }));
            return [
                ...t.screenshots.map((e) => ({
                    url: e,
                    type: "IMAGE",
                })),
                ...e,
            ];
        }, [t.artwork, t.screenshots]),
        f = m.length > 2;
    function g(e) {
        if (null == u.current) return;
        let t = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({
            to: t + 280 * e,
            animate: !0,
        });
    }
    return 0 === m.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(r.Heading, {
                      className: c.sectionHeader,
                      variant: "text-md/semibold",
                      color: "header-primary",
                      children: o.intl.string(o.t.bNdK5x),
                  }),
                  (0, i.jsxs)("div", {
                      className: f ? d.gameProfileMediaSmall : d.gameProfileMediaLarge,
                      children: [
                          (0, i.jsx)(r.xVE, {
                              ref: u,
                              className: d.imageScroller,
                              orientation: "horizontal",
                              children: m.map((e, t) =>
                                  (0, i.jsx)(
                                      r.P3F,
                                      {
                                          className: d.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: d.gameArtworkFocusRing,
                                          },
                                          onClick: () => {
                                              n(s.as.ClickImage),
                                                  (0, a.K)({
                                                      items: m,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, i.jsx)("img", {
                                              src: e.url,
                                              className: d.gameArtwork,
                                              alt: o.intl.formatToPlainString(o.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          f &&
                              (0, i.jsxs)("div", {
                                  className: d.mediaOverlay,
                                  children: [
                                      (0, i.jsx)("div", { className: d.gradientLeft }),
                                      (0, i.jsx)(r.P3F, {
                                          className: d.arrowClickable,
                                          onClick: () => g(-1),
                                          children: (0, i.jsx)(r.whL, {
                                              className: d.arrow,
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, i.jsx)("div", { className: d.gradientRight }),
                                      (0, i.jsx)(r.P3F, {
                                          className: d.arrowClickable,
                                          onClick: () => g(1),
                                          children: (0, i.jsx)(r.ZSh, {
                                              className: d.arrow,
                                              color: "currentColor",
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
