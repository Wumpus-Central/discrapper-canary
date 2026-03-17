n.d(t, { A: () => A, a: () => E });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(775602),
    d = n(435582),
    u = n(607470),
    m = n(720462),
    x = n(256905),
    f = n(409626),
    h = n(368546),
    g = n(985018),
    p = n(851822),
    v = n(351886),
    j = n(947570),
    _ = n(1309);
function A(e) {
    let { detectedGame: t, trackAction: n } = e,
        i = l.useRef(null),
        r = l.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [t.artwork, t.screenshots]),
        s = r.length > 2;
    function c(e) {
        if (null == i.current) return;
        let t = i.current.getScrollerState().scrollLeft;
        i.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === r.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(o.Heading, {
                      className: p.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: g.intl.string(g.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: s ? v.DA : v.pZ,
                      children: [
                          (0, a.jsx)(o.zCo, {
                              ref: i,
                              className: v.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, a.jsx)(
                                      o.DUT,
                                      {
                                          className: v.gw,
                                          focusProps: { offset: 4, ringClassName: v.jR },
                                          onClick: () => {
                                              n(f.Ws.ClickImage),
                                                  (0, x.R)({
                                                      items: r,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, a.jsx)("img", {
                                              src: e.url,
                                              className: v.Zm,
                                              alt: g.intl.formatToPlainString(g.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          s &&
                              (0, a.jsxs)("div", {
                                  className: v.NA,
                                  children: [
                                      (0, a.jsx)("div", { className: v.EJ }),
                                      (0, a.jsx)(o.DUT, {
                                          className: v.G9,
                                          onClick: () => c(-1),
                                          children: (0, a.jsx)(o.rJJ, { className: v.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: v.Pj }),
                                      (0, a.jsx)(o.DUT, {
                                          className: v.G9,
                                          onClick: () => c(1),
                                          children: (0, a.jsx)(o.EdP, { className: v.UE, color: "currentColor" }),
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
        [f, p] = l.useState(t.artwork),
        [v, A] = l.useState(t.screenshots),
        E = l.useRef(null),
        I = l.useRef(null),
        b = (0, s.bG)([c.A], () => c.A.useReducedMotion);
    (f !== t.artwork || v !== t.screenshots) && (p(t.artwork), A(t.screenshots), i(0));
    let N = l.useMemo(() => {
            let e = (t.trailers ?? []).map((e) => ({ url: (0, d.A)(e.application_id, e.id), type: "VIDEO" })),
                n = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...e, ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...n];
        }, [t.trailers, t.artwork, t.screenshots]),
        C = N.length > 0 ? Math.min(n, N.length - 1) : 0,
        T = N[C],
        S = T?.type === "VIDEO";
    return ((0, h.A)({ videoRef: E, canvasRef: I, enabled: S && !b }), 0 === N.length)
        ? null
        : (0, a.jsxs)("div", {
              className: j.kL,
              children: [
                  S
                      ? (0, a.jsxs)("div", {
                            className: _.ND,
                            children: [
                                !b && (0, a.jsx)("canvas", { ref: I, className: _.HW, "aria-hidden": "true" }),
                                (0, a.jsx)(u.A, { ref: E, className: _.dj, src: T.url, controls: !0, playsInline: !0 }),
                            ],
                        })
                      : (0, a.jsx)(o.DUT, {
                            className: j.gv,
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
                                className: j.c8,
                                alt: g.intl.formatToPlainString(g.t.COYYrn, { game: t.name }),
                            }),
                        }),
                  (0, a.jsx)(m.A, {
                      gap: "xs",
                      children: N.map((e, n) =>
                          (0, a.jsx)(
                              o.DUT,
                              {
                                  className: r()(j.JS, n === C && j.Y4),
                                  onClick: () => i(n),
                                  children: (0, a.jsx)("img", {
                                      src: e.url,
                                      className: j.xn,
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
