n.d(t, { Z: () => u }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(481060),
    l = n(312097),
    o = n(810568),
    s = n(388032),
    c = n(452379),
    d = n(588109);
function u(e) {
    let { detectedGame: t, trackAction: n } = e,
        u = i.useRef(null),
        m = i.useMemo(() => {
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
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(r.Heading, {
                      className: c.sectionHeader,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: s.intl.string(s.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: f ? d.gameProfileMediaSmall : d.gameProfileMediaLarge,
                      children: [
                          (0, a.jsx)(r.xVE, {
                              ref: u,
                              className: d.imageScroller,
                              orientation: "horizontal",
                              children: m.map((e, t) =>
                                  (0, a.jsx)(
                                      r.P3F,
                                      {
                                          className: d.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: d.gameArtworkFocusRing,
                                          },
                                          onClick: () => {
                                              n(o.as.ClickImage),
                                                  (0, l.K)({
                                                      items: m,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, a.jsx)("img", {
                                              src: e.url,
                                              className: d.gameArtwork,
                                              alt: s.intl.formatToPlainString(s.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          f &&
                              (0, a.jsxs)("div", {
                                  className: d.mediaOverlay,
                                  children: [
                                      (0, a.jsx)("div", { className: d.gradientLeft }),
                                      (0, a.jsx)(r.P3F, {
                                          className: d.arrowClickable,
                                          onClick: () => g(-1),
                                          children: (0, a.jsx)(r.whL, {
                                              className: d.arrow,
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, a.jsx)("div", { className: d.gradientRight }),
                                      (0, a.jsx)(r.P3F, {
                                          className: d.arrowClickable,
                                          onClick: () => g(1),
                                          children: (0, a.jsx)(r.ZSh, {
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
