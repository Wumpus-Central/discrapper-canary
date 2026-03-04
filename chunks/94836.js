n.d(t, { A: () => u, a: () => m });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(256905),
    r = n(409626),
    o = n(985018),
    c = n(851822),
    d = n(351886);
function u(e) {
    let { detectedGame: t, trackAction: n } = e,
        u = l.useRef(null),
        m = l.useMemo(() => {
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
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(a.Heading, {
                      className: c.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: o.intl.string(o.t.bNdK5x),
                  }),
                  (0, i.jsxs)("div", {
                      className: x ? d.DA : d.pZ,
                      children: [
                          (0, i.jsx)(a.zCo, {
                              ref: u,
                              className: d.ec,
                              orientation: "horizontal",
                              children: m.map((e, t) =>
                                  (0, i.jsx)(
                                      a.DUT,
                                      {
                                          className: d.gw,
                                          focusProps: { offset: 4, ringClassName: d.jR },
                                          onClick: () => {
                                              n(r.Ws.ClickImage),
                                                  (0, s.R)({
                                                      items: m,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, i.jsx)("img", {
                                              src: e.url,
                                              className: d.Zm,
                                              alt: o.intl.formatToPlainString(o.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          x &&
                              (0, i.jsxs)("div", {
                                  className: d.NA,
                                  children: [
                                      (0, i.jsx)("div", { className: d.EJ }),
                                      (0, i.jsx)(a.DUT, {
                                          className: d.G9,
                                          onClick: () => g(-1),
                                          children: (0, i.jsx)(a.rJJ, { className: d.UE, color: "currentColor" }),
                                      }),
                                      (0, i.jsx)("div", { className: d.Pj }),
                                      (0, i.jsx)(a.DUT, {
                                          className: d.G9,
                                          onClick: () => g(1),
                                          children: (0, i.jsx)(a.EdP, { className: d.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
function m(e) {
    let { detectedGame: t, trackAction: n } = e,
        c = l.useRef(null),
        u = l.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [t.artwork, t.screenshots]),
        m = u.length > 2;
    function x(e) {
        if (null == c.current) return;
        let t = c.current.getScrollerState().scrollLeft;
        c.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)("div", {
              children: (0, i.jsxs)("div", {
                  className: m ? d.DA : d.pZ,
                  children: [
                      (0, i.jsx)(a.zCo, {
                          ref: c,
                          className: d.ec,
                          orientation: "horizontal",
                          children: u.map((e, l) =>
                              (0, i.jsx)(
                                  a.DUT,
                                  {
                                      className: d.gw,
                                      focusProps: { offset: 4, ringClassName: d.jR },
                                      onClick: () => {
                                          n(r.Ws.ClickImage),
                                              (0, s.R)({
                                                  items: u,
                                                  startingIndex: l,
                                                  shouldHideMediaOptions: !0,
                                                  location: "GameProfileMedia",
                                              });
                                      },
                                      children: (0, i.jsx)("img", {
                                          src: e.url,
                                          className: d.Zm,
                                          alt: o.intl.formatToPlainString(o.t.COYYrn, { game: t.name }),
                                      }),
                                  },
                                  l,
                              ),
                          ),
                      }),
                      m &&
                          (0, i.jsxs)("div", {
                              className: d.NA,
                              children: [
                                  (0, i.jsx)("div", { className: d.EJ }),
                                  (0, i.jsx)(a.DUT, {
                                      className: d.G9,
                                      onClick: () => x(-1),
                                      children: (0, i.jsx)(a.rJJ, { className: d.UE, color: "currentColor" }),
                                  }),
                                  (0, i.jsx)("div", { className: d.Pj }),
                                  (0, i.jsx)(a.DUT, {
                                      className: d.G9,
                                      onClick: () => x(1),
                                      children: (0, i.jsx)(a.EdP, { className: d.UE, color: "currentColor" }),
                                  }),
                              ],
                          }),
                  ],
              }),
          });
}
