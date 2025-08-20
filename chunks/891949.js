n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(312097),
    s = n(810568),
    o = n(388032),
    c = n(226788),
    u = n(275914);
function d(e) {
    let { detectedGame: t, trackAction: n } = e,
        d = i.useRef(null),
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
        p = m.length > 2;
    function f(e) {
        if (null == d.current) return;
        let t = d.current.getScrollerState().scrollLeft;
        d.current.scrollTo({
            to: t + 280 * e,
            animate: !0,
        });
    }
    return 0 === m.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: c.sectionHeader,
                      variant: "text-md/semibold",
                      color: "header-primary",
                      children: o.intl.string(o.t["bNdK5+"]),
                  }),
                  (0, r.jsxs)("div", {
                      className: p ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, r.jsx)(l.xVE, {
                              ref: d,
                              className: u.imageScroller,
                              orientation: "horizontal",
                              children: m.map((e, t) =>
                                  (0, r.jsx)(
                                      l.P3F,
                                      {
                                          className: u.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: u.gameArtworkFocusRing,
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
                                              className: u.gameArtwork,
                                              alt: o.intl.formatToPlainString(o.t.COYYrq, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          p &&
                              (0, r.jsxs)("div", {
                                  className: u.mediaOverlay,
                                  children: [
                                      (0, r.jsx)("div", { className: u.gradientLeft }),
                                      (0, r.jsx)(l.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => f(-1),
                                          children: (0, r.jsx)(l.whL, {
                                              className: u.arrow,
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)("div", { className: u.gradientRight }),
                                      (0, r.jsx)(l.P3F, {
                                          className: u.arrowClickable,
                                          onClick: () => f(1),
                                          children: (0, r.jsx)(l.ZSh, {
                                              className: u.arrow,
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
