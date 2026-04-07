n.d(t, { A: () => b, a: () => N });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    o = n(732955),
    c = n(397927),
    d = n(775602),
    u = n(951707),
    m = n(130531),
    x = n(248643),
    g = n(256905),
    h = n(652176),
    f = n(371794),
    p = n(409626),
    _ = n(368546),
    v = n(985018),
    A = n(282063),
    j = n(426401),
    E = n(791129);
function b(e) {
    let { game: t, trackAction: n } = e,
        l = i.useRef(null),
        r = (0, m._)(t),
        s = i.useMemo(() => {
            let e = r.map((e) => ({ url: e, type: "IMAGE" }));
            return [...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [r, t.screenshotUrls]),
        o = s.length > 2;
    function d(e) {
        if (null == l.current) return;
        let t = l.current.getScrollerState().scrollLeft;
        l.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === s.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(c.Heading, {
                      className: A.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: v.intl.string(v.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: o ? j.DA : j.pZ,
                      children: [
                          (0, a.jsx)(c.zCo, {
                              ref: l,
                              className: j.ec,
                              orientation: "horizontal",
                              children: s.map((e, t) =>
                                  (0, a.jsx)(
                                      c.DUT,
                                      {
                                          className: j.gw,
                                          focusProps: { offset: 4, ringClassName: j.jR },
                                          onClick: () => {
                                              n(p.Ws.ClickImage),
                                                  (0, g.R)({
                                                      items: s,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, a.jsx)("img", {
                                              src: e.url,
                                              className: j.Zm,
                                              alt: v.intl.formatToPlainString(v.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          o &&
                              (0, a.jsxs)("div", {
                                  className: j.NA,
                                  children: [
                                      (0, a.jsx)("div", { className: j.EJ }),
                                      (0, a.jsx)(c.DUT, {
                                          className: j.G9,
                                          onClick: () => d(-1),
                                          children: (0, a.jsx)(c.rJJ, { className: j.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: j.Pj }),
                                      (0, a.jsx)(c.DUT, {
                                          className: j.G9,
                                          onClick: () => d(1),
                                          children: (0, a.jsx)(c.EdP, { className: j.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let C = i.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: s, onSelect: d, gameName: u } = e,
            m = i.useCallback(() => d(n), [d, n]);
        return (0, a.jsx)(c.DUT, {
            className: r()(E.JS, l && E.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: E.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: E.xn,
                        alt: v.intl.formatToPlainString(v.t.COYYrn, { game: u }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, a.jsx)("div", {
                            className: E.UZ,
                            children: (0, a.jsx)(o.DMX, { playing: l && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    I = i.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                videoRef: l,
                mediaPlayerRef: r,
                onPlay: s,
                onPause: o,
                onFullscreenChange: c,
            } = e,
            d = i.useRef(null);
        return (
            (0, _.A)({ videoRef: l, canvasRef: d, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: d, className: E.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: E.tN,
                        children: (0, a.jsx)(x.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: !n,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: h.bU,
                            onPlay: s,
                            onPause: o,
                            onFullscreenChange: c,
                            mediaPlayerClassName: E.T9,
                            videoRef: l,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function N(e) {
    let { game: t, trackAction: n } = e,
        [l, r] = i.useState(0),
        [o, m] = i.useState(null),
        [x, h] = i.useState(t.screenshotUrls),
        _ = i.useRef(null),
        A = i.useRef(null),
        j = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    x !== t.screenshotUrls && (h(t.screenshotUrls), r(0));
    let b = i.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, f.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, f.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        N = b.length > 0 ? Math.min(l, b.length - 1) : 0,
        S = b[N],
        T = S?.type === "VIDEO",
        y = i.useCallback(
            (e) => {
                let t = b[N],
                    n = b[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? m(t.url) : m(null), r(e);
            },
            [b, N],
        ),
        [L, k] = i.useState(!1),
        R = i.useRef(null),
        O = i.useCallback(() => {
            n(T ? p.Ws.ClickTrailer : p.Ws.ClickImage);
            let e = _.current,
                t = R.current,
                a = null != e && !e.paused,
                i = e?.muted ?? !0,
                l = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = b.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === N;
                    return { ...e, autoPlay: !!n && a, autoMute: !n || i, initialTimeSec: n ? l : void 0, videoRef: A };
                }
                return e;
            });
            (0, g.R)({
                items: s,
                startingIndex: N,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = A.current,
                        t = R.current,
                        n = null != e ? !e.paused : a;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        k(n);
                },
            });
        }, [n, b, N, T]),
        M = i.useCallback(() => k(!0), []),
        G = i.useCallback(() => k(!1), []),
        w = i.useCallback(() => m(null), []),
        P = i.useCallback(
            (e) => {
                e && O();
            },
            [O],
        );
    return 0 === b.length
        ? null
        : (0, a.jsxs)("div", {
              className: E.kL,
              children: [
                  T
                      ? (0, a.jsx)("div", {
                            className: E.ND,
                            children: (0, a.jsx)(
                                I,
                                {
                                    item: S,
                                    reducedMotion: j,
                                    videoRef: _,
                                    mediaPlayerRef: R,
                                    onPlay: M,
                                    onPause: G,
                                    onFullscreenChange: P,
                                },
                                `${N}-${S.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: E.wp,
                            children: [
                                null != o &&
                                    !j &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: E.Jy,
                                            onAnimationEnd: w,
                                            children: (0, a.jsx)("img", { src: o, className: E.Db, alt: "" }),
                                        },
                                        o,
                                    ),
                                (0, a.jsx)("div", { className: E.QN }),
                                (0, a.jsx)(c.DUT, {
                                    className: E.gv,
                                    onClick: O,
                                    children: (0, a.jsx)(
                                        "img",
                                        {
                                            src: S.url,
                                            className: E.c8,
                                            alt: v.intl.formatToPlainString(v.t.COYYrn, { game: t.name }),
                                        },
                                        S.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, a.jsx)(u.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: b.map((e, n) =>
                          (0, a.jsx)(
                              C,
                              { item: e, index: n, isPlaying: L, isSelected: n === N, onSelect: y, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
