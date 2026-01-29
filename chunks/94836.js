l.d(t, {
    A: () => u,
    a: () => m,
}),
    l(896048);
var n = l(627968),
    i = l(64700),
    a = l(397927),
    r = l(256905),
    s = l(409626),
    o = l(985018),
    c = l(851822),
    d = l(351886);

function u(e) {
    let { detectedGame: t, trackAction: l } = e,
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
        x = m.length > 2;

    function f(e) {
        if (null == u.current) return;
        let t = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({
            to: t + 280 * e,
            animate: !0,
        });
    }
    return 0 === m.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(a.Heading, {
                      className: c.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: o.intl.string(o.t.bNdK5x),
                  }),
                  (0, n.jsxs)("div", {
                      className: x ? d.DA : d.pZ,
                      children: [
                          (0, n.jsx)(a.zCo, {
                              ref: u,
                              className: d.ec,
                              orientation: "horizontal",
                              children: m.map((e, t) =>
                                  (0, n.jsx)(
                                      a.DUT,
                                      {
                                          className: d.gw,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: d.jR,
                                          },
                                          onClick: () => {
                                              l(s.Ws.ClickImage),
                                                  (0, r.R)({
                                                      items: m,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, n.jsx)("img", {
                                              src: e.url,
                                              className: d.Zm,
                                              alt: o.intl.formatToPlainString(o.t.COYYrn, {
                                                  game: name,
                                              }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          x &&
                              (0, n.jsxs)("div", {
                                  className: d.NA,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: d.EJ,
                                      }),
                                      (0, n.jsx)(a.DUT, {
                                          className: d.G9,
                                          onClick: () => f(-1),
                                          children: (0, n.jsx)(a.rJJ, {
                                              className: d.UE,
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: d.Pj,
                                      }),
                                      (0, n.jsx)(a.DUT, {
                                          className: d.G9,
                                          onClick: () => f(1),
                                          children: (0, n.jsx)(a.EdP, {
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

function m(e) {
    let { detectedGame: t, trackAction: l } = e,
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
        x = m.length > 2;

    function f(e) {
        if (null == u.current) return;
        let t = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({
            to: t + 280 * e,
            animate: !0,
        });
    }
    return 0 === m.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(a.Heading, {
                      className: c.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: o.intl.string(o.t.bNdK5x),
                  }),
                  (0, n.jsxs)("div", {
                      className: x ? d.DA : d.pZ,
                      children: [
                          (0, n.jsx)(a.zCo, {
                              ref: u,
                              className: d.ec,
                              orientation: "horizontal",
                              children: m.map((e, i) =>
                                  (0, n.jsx)(
                                      a.DUT,
                                      {
                                          className: d.gw,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: d.jR,
                                          },
                                          onClick: () => {
                                              l(s.Ws.ClickImage),
                                                  (0, r.R)({
                                                      items: m,
                                                      startingIndex: i,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, n.jsx)("img", {
                                              src: e.url,
                                              className: d.Zm,
                                              alt: o.intl.formatToPlainString(o.t.COYYrn, {
                                                  game: t.name,
                                              }),
                                          }),
                                      },
                                      i,
                                  ),
                              ),
                          }),
                          x &&
                              (0, n.jsxs)("div", {
                                  className: d.NA,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: d.EJ,
                                      }),
                                      (0, n.jsx)(a.DUT, {
                                          className: d.G9,
                                          onClick: () => f(-1),
                                          children: (0, n.jsx)(a.rJJ, {
                                              className: d.UE,
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: d.Pj,
                                      }),
                                      (0, n.jsx)(a.DUT, {
                                          className: d.G9,
                                          onClick: () => f(1),
                                          children: (0, n.jsx)(a.EdP, {
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
