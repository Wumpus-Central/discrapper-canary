n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(312097),
    s = n(810568),
    o = n(388032),
    c = n(226788),
    d = n(275914);
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
    function p(e) {
        if (null == u.current) return;
        let t = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({
            to: t + 280 * e,
            animate: !0,
        });
    }
    return 0 === m.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(l.Heading, {
                      className: c.sectionHeader,
                      variant: "text-md/semibold",
                      color: "header-primary",
                      children: o.intl.string(o.t.bNdK5x),
                  }),
                  (0, r.jsxs)("div", {
                      className: f ? d.gameProfileMediaSmall : d.gameProfileMediaLarge,
                      children: [
                          (0, r.jsx)(l.xVE, {
                              ref: u,
                              className: d.imageScroller,
                              orientation: "horizontal",
                              children: m.map((e, t) =>
                                  (0, r.jsx)(
                                      l.P3F,
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
                                          children: (0, r.jsx)("img", {
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
                              (0, r.jsxs)("div", {
                                  className: d.mediaOverlay,
                                  children: [
                                      (0, r.jsx)("div", { className: d.gradientLeft }),
                                      (0, r.jsx)(l.P3F, {
                                          className: d.arrowClickable,
                                          onClick: () => p(-1),
                                          children: (0, r.jsx)(l.whL, {
                                              className: d.arrow,
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)("div", { className: d.gradientRight }),
                                      (0, r.jsx)(l.P3F, {
                                          className: d.arrowClickable,
                                          onClick: () => p(1),
                                          children: (0, r.jsx)(l.ZSh, {
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
