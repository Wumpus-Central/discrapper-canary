n.d(t, { A: () => E, a: () => I });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(732955),
    c = n(397927),
    d = n(775602),
    u = n(951707),
    m = n(248643),
    x = n(256905),
    h = n(652176),
    f = n(371794),
    g = n(409626),
    p = n(368546),
    _ = n(985018),
    v = n(282063),
    A = n(426401),
    j = n(791129);
function E(e) {
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
                      className: v.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: _.intl.string(_.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: s ? A.DA : A.pZ,
                      children: [
                          (0, a.jsx)(c.zCo, {
                              ref: i,
                              className: A.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, a.jsx)(
                                      c.DUT,
                                      {
                                          className: A.gw,
                                          focusProps: { offset: 4, ringClassName: A.jR },
                                          onClick: () => {
                                              n(g.Ws.ClickImage),
                                                  (0, x.R)({
                                                      items: r,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, a.jsx)("img", {
                                              src: e.url,
                                              className: A.Zm,
                                              alt: _.intl.formatToPlainString(_.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          s &&
                              (0, a.jsxs)("div", {
                                  className: A.NA,
                                  children: [
                                      (0, a.jsx)("div", { className: A.EJ }),
                                      (0, a.jsx)(c.DUT, {
                                          className: A.G9,
                                          onClick: () => o(-1),
                                          children: (0, a.jsx)(c.rJJ, { className: A.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: A.Pj }),
                                      (0, a.jsx)(c.DUT, {
                                          className: A.G9,
                                          onClick: () => o(1),
                                          children: (0, a.jsx)(c.EdP, { className: A.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let b = l.memo(function (e) {
        let { item: t, index: n, isSelected: i, isPlaying: s, onSelect: d, gameName: u } = e,
            m = l.useCallback(() => d(n), [d, n]);
        return (0, a.jsx)(c.DUT, {
            className: r()(j.JS, i && j.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: j.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: j.xn,
                        alt: _.intl.formatToPlainString(_.t.COYYrn, { game: u }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, a.jsx)("div", {
                            className: j.UZ,
                            children: (0, a.jsx)(o.DMX, { playing: i && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    C = l.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: s,
                onPause: o,
                onFullscreenChange: c,
            } = e,
            d = l.useRef(null);
        return (
            (0, p.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: d, className: j.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: j.tN,
                        children: (0, a.jsx)(m.A, {
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
                            mediaPlayerClassName: j.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function I(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, r] = l.useState(0),
        [o, m] = l.useState(null),
        [h, p] = l.useState(t.screenshots),
        v = l.useRef(null),
        A = l.useRef(null),
        E = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    h !== t.screenshots && (p(t.screenshots), r(0));
    let I = l.useMemo(
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
                ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshots],
        ),
        N = I.length > 0 ? Math.min(i, I.length - 1) : 0,
        S = I[N],
        T = S?.type === "VIDEO",
        y = l.useCallback(
            (e) => {
                let t = I[N],
                    n = I[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? m(t.url) : m(null), r(e);
            },
            [I, N],
        ),
        [L, k] = l.useState(!1),
        R = l.useRef(null),
        O = l.useCallback(() => {
            n(T ? g.Ws.ClickTrailer : g.Ws.ClickImage);
            let e = v.current,
                t = R.current,
                a = null != e && !e.paused,
                l = e?.muted ?? !0,
                i = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = I.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === N;
                    return { ...e, autoPlay: !!n && a, autoMute: !n || l, initialTimeSec: n ? i : void 0, videoRef: A };
                }
                return e;
            });
            (0, x.R)({
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
        }, [n, I, N, T]),
        G = l.useCallback(() => k(!0), []),
        M = l.useCallback(() => k(!1), []),
        w = l.useCallback(() => m(null), []),
        P = l.useCallback(
            (e) => {
                e && O();
            },
            [O],
        );
    return 0 === I.length
        ? null
        : (0, a.jsxs)("div", {
              className: j.kL,
              children: [
                  T
                      ? (0, a.jsx)("div", {
                            className: j.ND,
                            children: (0, a.jsx)(
                                C,
                                {
                                    item: S,
                                    reducedMotion: E,
                                    videoRef: v,
                                    mediaPlayerRef: R,
                                    onPlay: G,
                                    onPause: M,
                                    onFullscreenChange: P,
                                },
                                `${N}-${S.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: j.wp,
                            children: [
                                null != o &&
                                    !E &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: j.Jy,
                                            onAnimationEnd: w,
                                            children: (0, a.jsx)("img", { src: o, className: j.Db, alt: "" }),
                                        },
                                        o,
                                    ),
                                (0, a.jsx)("div", { className: j.QN }),
                                (0, a.jsx)(c.DUT, {
                                    className: j.gv,
                                    onClick: O,
                                    children: (0, a.jsx)(
                                        "img",
                                        {
                                            src: S.url,
                                            className: j.c8,
                                            alt: _.intl.formatToPlainString(_.t.COYYrn, { game: t.name }),
                                        },
                                        S.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, a.jsx)(u.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: I.map((e, n) =>
                          (0, a.jsx)(
                              b,
                              { item: e, index: n, isPlaying: L, isSelected: n === N, onSelect: y, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
