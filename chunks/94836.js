"use strict";
n.d(t, { A: () => u, a: () => m });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(256905),
    s = n(409626),
    c = n(985018),
    o = n(851822),
    d = n(351886);
function u(e) {
    let { detectedGame: t, trackAction: n } = e,
        u = l.useRef(null),
        m = l.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [t.artwork, t.screenshots]),
        x = m.length > 2;
    function h(e) {
        if (null == u.current) return;
        let t = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === m.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(a.Heading, {
                      className: o.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: c.intl.string(c.t.bNdK5x),
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
                                              n(s.Ws.ClickImage),
                                                  (0, r.R)({
                                                      items: m,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, i.jsx)("img", {
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
                              (0, i.jsxs)("div", {
                                  className: d.NA,
                                  children: [
                                      (0, i.jsx)("div", { className: d.EJ }),
                                      (0, i.jsx)(a.DUT, {
                                          className: d.G9,
                                          onClick: () => h(-1),
                                          children: (0, i.jsx)(a.rJJ, { className: d.UE, color: "currentColor" }),
                                      }),
                                      (0, i.jsx)("div", { className: d.Pj }),
                                      (0, i.jsx)(a.DUT, {
                                          className: d.G9,
                                          onClick: () => h(1),
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
        o = l.useRef(null),
        u = l.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [t.artwork, t.screenshots]),
        m = u.length > 2;
    function x(e) {
        if (null == o.current) return;
        let t = o.current.getScrollerState().scrollLeft;
        o.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)("div", {
              children: (0, i.jsxs)("div", {
                  className: m ? d.DA : d.pZ,
                  children: [
                      (0, i.jsx)(a.zCo, {
                          ref: o,
                          className: d.ec,
                          orientation: "horizontal",
                          children: u.map((e, l) =>
                              (0, i.jsx)(
                                  a.DUT,
                                  {
                                      className: d.gw,
                                      focusProps: { offset: 4, ringClassName: d.jR },
                                      onClick: () => {
                                          n(s.Ws.ClickImage),
                                              (0, r.R)({
                                                  items: u,
                                                  startingIndex: l,
                                                  shouldHideMediaOptions: !0,
                                                  location: "GameProfileMedia",
                                              });
                                      },
                                      children: (0, i.jsx)("img", {
                                          src: e.url,
                                          className: d.Zm,
                                          alt: c.intl.formatToPlainString(c.t.COYYrn, { game: t.name }),
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
