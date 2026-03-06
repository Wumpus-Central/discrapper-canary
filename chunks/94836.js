"use strict";
n.d(t, { A: () => f, a: () => g });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    c = n(720462),
    o = n(256905),
    d = n(409626),
    u = n(985018),
    m = n(728528),
    x = n(281568),
    h = n(903404);
function f(e) {
    let { detectedGame: t, trackAction: n } = e,
        i = a.useRef(null),
        r = a.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [t.artwork, t.screenshots]),
        c = r.length > 2;
    function h(e) {
        if (null == i.current) return;
        let t = i.current.getScrollerState().scrollLeft;
        i.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === r.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(s.Heading, {
                      className: m.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: u.intl.string(u.t.bNdK5x),
                  }),
                  (0, l.jsxs)("div", {
                      className: c ? x.DA : x.pZ,
                      children: [
                          (0, l.jsx)(s.zCo, {
                              ref: i,
                              className: x.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, l.jsx)(
                                      s.DUT,
                                      {
                                          className: x.gw,
                                          focusProps: { offset: 4, ringClassName: x.jR },
                                          onClick: () => {
                                              n(d.Ws.ClickImage),
                                                  (0, o.R)({
                                                      items: r,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, l.jsx)("img", {
                                              src: e.url,
                                              className: x.Zm,
                                              alt: u.intl.formatToPlainString(u.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          c &&
                              (0, l.jsxs)("div", {
                                  className: x.NA,
                                  children: [
                                      (0, l.jsx)("div", { className: x.EJ }),
                                      (0, l.jsx)(s.DUT, {
                                          className: x.G9,
                                          onClick: () => h(-1),
                                          children: (0, l.jsx)(s.rJJ, { className: x.UE, color: "currentColor" }),
                                      }),
                                      (0, l.jsx)("div", { className: x.Pj }),
                                      (0, l.jsx)(s.DUT, {
                                          className: x.G9,
                                          onClick: () => h(1),
                                          children: (0, l.jsx)(s.EdP, { className: x.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
function g(e) {
    let { detectedGame: t } = e,
        [n, i] = a.useState(0),
        [o, d] = a.useState(t.artwork),
        [m, x] = a.useState(t.screenshots);
    (o !== t.artwork || m !== t.screenshots) && (d(t.artwork), x(t.screenshots), i(0));
    let f = a.useMemo(() => {
        let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
        return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
    }, [t.artwork, t.screenshots]);
    if (0 === f.length) return null;
    let g = Math.min(n, f.length - 1),
        p = f[g];
    return (0, l.jsxs)("div", {
        className: h.kL,
        children: [
            (0, l.jsx)("div", {
                className: h.gv,
                children: (0, l.jsx)("img", {
                    src: p.url,
                    className: h.c8,
                    alt: u.intl.formatToPlainString(u.t.COYYrn, { game: t.name }),
                }),
            }),
            (0, l.jsx)(c.A, {
                gap: "sm",
                children: f.map((e, n) =>
                    (0, l.jsx)(
                        s.DUT,
                        {
                            className: r()(h.JS, n === g && h.Y4),
                            onClick: () => i(n),
                            children: (0, l.jsx)("img", {
                                src: e.url,
                                className: h.xn,
                                alt: u.intl.formatToPlainString(u.t.COYYrn, { game: t.name }),
                            }),
                        },
                        `${n}-${e.url}`,
                    ),
                ),
            }),
        ],
    });
}
