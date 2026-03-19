n.d(t, { A: () => A, a: () => I });
var l = n(627968),
    a = n(64700),
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
        i = a.useRef(null),
        r = a.useMemo(() => {
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
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(c.Heading, {
                      className: p.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: g.intl.string(g.t.bNdK5x),
                  }),
                  (0, l.jsxs)("div", {
                      className: s ? _.DA : _.pZ,
                      children: [
                          (0, l.jsx)(c.zCo, {
                              ref: i,
                              className: _.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, l.jsx)(
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
                                          children: (0, l.jsx)("img", {
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
                              (0, l.jsxs)("div", {
                                  className: _.NA,
                                  children: [
                                      (0, l.jsx)("div", { className: _.EJ }),
                                      (0, l.jsx)(c.DUT, {
                                          className: _.G9,
                                          onClick: () => o(-1),
                                          children: (0, l.jsx)(c.rJJ, { className: _.UE, color: "currentColor" }),
                                      }),
                                      (0, l.jsx)("div", { className: _.Pj }),
                                      (0, l.jsx)(c.DUT, {
                                          className: _.G9,
                                          onClick: () => o(1),
                                          children: (0, l.jsx)(c.EdP, { className: _.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
function I(e) {
    let { detectedGame: t } = e,
        [n, i] = a.useState(0),
        [h, p] = a.useState(t.artwork),
        [_, A] = a.useState(t.screenshots),
        I = a.useRef(null),
        E = a.useRef(null),
        N = (0, s.bG)([o.A], () => o.A.useReducedMotion);
    (h !== t.artwork || _ !== t.screenshots) && (p(t.artwork), A(t.screenshots), i(0));
    let b = a.useMemo(() => {
            let e = (t.trailers ?? []).map((e) => ({ url: (0, d.A)(e.application_id, e.id), type: "VIDEO" })),
                n = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...e, ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...n];
        }, [t.trailers, t.artwork, t.screenshots]),
        C = b.length > 0 ? Math.min(n, b.length - 1) : 0,
        T = b[C],
        S = T?.type === "VIDEO";
    return ((0, f.A)({ videoRef: I, canvasRef: E, enabled: S && !N }), 0 === b.length)
        ? null
        : (0, l.jsxs)("div", {
              className: v.kL,
              children: [
                  S
                      ? (0, l.jsxs)("div", {
                            className: j.ND,
                            children: [
                                !N && (0, l.jsx)("canvas", { ref: E, className: j.HW, "aria-hidden": "true" }),
                                (0, l.jsx)(u.A, { ref: I, className: j.dj, src: T.url, controls: !0, playsInline: !0 }),
                            ],
                        })
                      : (0, l.jsx)(c.DUT, {
                            className: v.gv,
                            onClick: () => {
                                let e = b.filter((e) => "IMAGE" === e.type),
                                    t = e.indexOf(T);
                                (0, x.R)({
                                    items: e,
                                    startingIndex: Math.max(0, t),
                                    shouldHideMediaOptions: !0,
                                    location: "GameProfileMedia",
                                });
                            },
                            children: (0, l.jsx)("img", {
                                src: T.url,
                                className: v.c8,
                                alt: g.intl.formatToPlainString(g.t.COYYrn, { game: t.name }),
                            }),
                        }),
                  (0, l.jsx)(m.A, {
                      gap: "xs",
                      children: b.map((e, n) =>
                          (0, l.jsx)(
                              c.DUT,
                              {
                                  className: r()(v.JS, n === C && v.Y4),
                                  onClick: () => i(n),
                                  children: (0, l.jsx)("img", {
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
