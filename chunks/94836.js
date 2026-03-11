"use strict";
n.d(t, { A: () => A, a: () => E });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    c = n(397927),
    o = n(775602),
    d = n(435582),
    u = n(607470),
    m = n(720462),
    x = n(256905),
    h = n(409626),
    f = n(368546),
    g = n(985018),
    p = n(728528),
    _ = n(281568),
    v = n(903404),
    j = n(176959);
function A(e) {
    let { detectedGame: t, trackAction: n } = e,
        i = l.useRef(null),
        r = l.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [t.artwork, t.screenshots]),
        s = r.length > 2;
    function o(e) {
        if (null == i.current) return;
        let t = i.current.getScrollerState().scrollLeft;
        i.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === r.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(c.Heading, {
                      className: p.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: g.intl.string(g.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: s ? _.DA : _.pZ,
                      children: [
                          (0, a.jsx)(c.zCo, {
                              ref: i,
                              className: _.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, a.jsx)(
                                      c.DUT,
                                      {
                                          className: _.gw,
                                          focusProps: { offset: 4, ringClassName: _.jR },
                                          onClick: () => {
                                              n(h.Ws.ClickImage),
                                                  (0, x.R)({
                                                      items: r,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, a.jsx)("img", {
                                              src: e.url,
                                              className: _.Zm,
                                              alt: g.intl.formatToPlainString(g.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          s &&
                              (0, a.jsxs)("div", {
                                  className: _.NA,
                                  children: [
                                      (0, a.jsx)("div", { className: _.EJ }),
                                      (0, a.jsx)(c.DUT, {
                                          className: _.G9,
                                          onClick: () => o(-1),
                                          children: (0, a.jsx)(c.rJJ, { className: _.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: _.Pj }),
                                      (0, a.jsx)(c.DUT, {
                                          className: _.G9,
                                          onClick: () => o(1),
                                          children: (0, a.jsx)(c.EdP, { className: _.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
function E(e) {
    let { detectedGame: t } = e,
        [n, i] = l.useState(0),
        [h, p] = l.useState(t.artwork),
        [_, A] = l.useState(t.screenshots),
        E = l.useRef(null),
        I = l.useRef(null),
        b = (0, s.bG)([o.A], () => o.A.useReducedMotion);
    (h !== t.artwork || _ !== t.screenshots) && (p(t.artwork), A(t.screenshots), i(0));
    let N = l.useMemo(() => {
            let e = (t.trailers ?? []).map((e) => ({ url: (0, d.A)(e.application_id, e.id), type: "VIDEO" })),
                n = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...e, ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...n];
        }, [t.trailers, t.artwork, t.screenshots]),
        C = N.length > 0 ? Math.min(n, N.length - 1) : 0,
        T = N[C],
        S = T?.type === "VIDEO";
    return ((0, f.A)({ videoRef: E, canvasRef: I, enabled: S && !b }), 0 === N.length)
        ? null
        : (0, a.jsxs)("div", {
              className: v.kL,
              children: [
                  S
                      ? (0, a.jsxs)("div", {
                            className: j.ND,
                            children: [
                                !b && (0, a.jsx)("canvas", { ref: I, className: j.HW, "aria-hidden": "true" }),
                                (0, a.jsx)(u.A, { ref: E, className: j.dj, src: T.url, controls: !0, playsInline: !0 }),
                            ],
                        })
                      : (0, a.jsx)(c.DUT, {
                            className: v.gv,
                            onClick: () => {
                                let e = N.filter((e) => "IMAGE" === e.type),
                                    t = e.indexOf(T);
                                (0, x.R)({
                                    items: e,
                                    startingIndex: Math.max(0, t),
                                    shouldHideMediaOptions: !0,
                                    location: "GameProfileMedia",
                                });
                            },
                            children: (0, a.jsx)("img", {
                                src: T.url,
                                className: v.c8,
                                alt: g.intl.formatToPlainString(g.t.COYYrn, { game: t.name }),
                            }),
                        }),
                  (0, a.jsx)(m.A, {
                      gap: "xs",
                      children: N.map((e, n) =>
                          (0, a.jsx)(
                              c.DUT,
                              {
                                  className: r()(v.JS, n === C && v.Y4),
                                  onClick: () => i(n),
                                  children: (0, a.jsx)("img", {
                                      src: e.url,
                                      className: v.xn,
                                      alt: g.intl.formatToPlainString(g.t.COYYrn, { game: t.name }),
                                  }),
                              },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
