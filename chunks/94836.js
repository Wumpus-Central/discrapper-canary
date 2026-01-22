n.d(t, { A: () => u }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(256905),
    s = n(409626),
    o = n(985018),
    c = n(851822),
    d = n(351886);
function u(e) {
    let { detectedGame: t, trackAction: n } = e,
        u = r.useRef(null),
        m = r.useMemo(() => {
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
    function x(e) {
        if (null == u.current) return;
        let t = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({
            to: t + 280 * e,
            animate: !0,
        });
    }
    return 0 === m.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(i.Heading, {
                      className: c.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: o.intl.string(o.t.bNdK5x),
                  }),
                  (0, l.jsxs)("div", {
                      className: f ? d.DA : d.pZ,
                      children: [
                          (0, l.jsx)(i.zCo, {
                              ref: u,
                              className: d.ec,
                              orientation: "horizontal",
                              children: m.map((e, t) =>
                                  (0, l.jsx)(
                                      i.DUT,
                                      {
                                          className: d.gw,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: d.jR,
                                          },
                                          onClick: () => {
                                              n(s.Ws.ClickImage),
                                                  (0, a.R)({
                                                      items: m,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, l.jsx)("img", {
                                              src: e.url,
                                              className: d.Zm,
                                              alt: o.intl.formatToPlainString(o.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          f &&
                              (0, l.jsxs)("div", {
                                  className: d.NA,
                                  children: [
                                      (0, l.jsx)("div", { className: d.EJ }),
                                      (0, l.jsx)(i.DUT, {
                                          className: d.G9,
                                          onClick: () => x(-1),
                                          children: (0, l.jsx)(i.rJJ, {
                                              className: d.UE,
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, l.jsx)("div", { className: d.Pj }),
                                      (0, l.jsx)(i.DUT, {
                                          className: d.G9,
                                          onClick: () => x(1),
                                          children: (0, l.jsx)(i.EdP, {
                                              className: d.UE,
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
