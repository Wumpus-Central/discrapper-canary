i.d(t, { A: () => u, a: () => m });
var l = i(627968),
    a = i(64700),
    n = i(397927),
    s = i(256905),
    r = i(409626),
    c = i(985018),
    o = i(851822),
    d = i(351886);
function u(e) {
    let { detectedGame: t, trackAction: i } = e,
        u = a.useRef(null),
        m = a.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [t.artwork, t.screenshots]),
        x = m.length > 2;
    function g(e) {
        if (null == u.current) return;
        let t = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === m.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(n.Heading, {
                      className: o.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: c.intl.string(c.t.bNdK5x),
                  }),
                  (0, l.jsxs)("div", {
                      className: x ? d.DA : d.pZ,
                      children: [
                          (0, l.jsx)(n.zCo, {
                              ref: u,
                              className: d.ec,
                              orientation: "horizontal",
                              children: m.map((e, t) =>
                                  (0, l.jsx)(
                                      n.DUT,
                                      {
                                          className: d.gw,
                                          focusProps: { offset: 4, ringClassName: d.jR },
                                          onClick: () => {
                                              i(r.Ws.ClickImage),
                                                  (0, s.R)({
                                                      items: m,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, l.jsx)("img", {
                                              src: e.url,
                                              className: d.Zm,
                                              alt: c.intl.formatToPlainString(c.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          x &&
                              (0, l.jsxs)("div", {
                                  className: d.NA,
                                  children: [
                                      (0, l.jsx)("div", { className: d.EJ }),
                                      (0, l.jsx)(n.DUT, {
                                          className: d.G9,
                                          onClick: () => g(-1),
                                          children: (0, l.jsx)(n.rJJ, { className: d.UE, color: "currentColor" }),
                                      }),
                                      (0, l.jsx)("div", { className: d.Pj }),
                                      (0, l.jsx)(n.DUT, {
                                          className: d.G9,
                                          onClick: () => g(1),
                                          children: (0, l.jsx)(n.EdP, { className: d.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
function m(e) {
    let { detectedGame: t, trackAction: i } = e,
        u = a.useRef(null),
        m = a.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [t.artwork, t.screenshots]),
        x = m.length > 2;
    function g(e) {
        if (null == u.current) return;
        let t = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === m.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(n.Heading, {
                      className: o.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: c.intl.string(c.t.bNdK5x),
                  }),
                  (0, l.jsxs)("div", {
                      className: x ? d.DA : d.pZ,
                      children: [
                          (0, l.jsx)(n.zCo, {
                              ref: u,
                              className: d.ec,
                              orientation: "horizontal",
                              children: m.map((e, a) =>
                                  (0, l.jsx)(
                                      n.DUT,
                                      {
                                          className: d.gw,
                                          focusProps: { offset: 4, ringClassName: d.jR },
                                          onClick: () => {
                                              i(r.Ws.ClickImage),
                                                  (0, s.R)({
                                                      items: m,
                                                      startingIndex: a,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, l.jsx)("img", {
                                              src: e.url,
                                              className: d.Zm,
                                              alt: c.intl.formatToPlainString(c.t.COYYrn, { game: t.name }),
                                          }),
                                      },
                                      a,
                                  ),
                              ),
                          }),
                          x &&
                              (0, l.jsxs)("div", {
                                  className: d.NA,
                                  children: [
                                      (0, l.jsx)("div", { className: d.EJ }),
                                      (0, l.jsx)(n.DUT, {
                                          className: d.G9,
                                          onClick: () => g(-1),
                                          children: (0, l.jsx)(n.rJJ, { className: d.UE, color: "currentColor" }),
                                      }),
                                      (0, l.jsx)("div", { className: d.Pj }),
                                      (0, l.jsx)(n.DUT, {
                                          className: d.G9,
                                          onClick: () => g(1),
                                          children: (0, l.jsx)(n.EdP, { className: d.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
