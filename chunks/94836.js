n.d(t, { A: () => j, a: () => N });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(732955),
    c = n(397927),
    d = n(775602),
    u = n(951707),
    m = n(898736),
    f = n(248643),
    h = n(256905),
    x = n(652176),
    g = n(90721),
    p = n(371794),
    _ = n(409626),
    v = n(985018),
    A = n(141535),
    b = n(616337),
    E = n(381641);
function j(e) {
    let { game: t, trackAction: n } = e,
        i = a.useRef(null),
        r = (0, m._)(t),
        s = a.useMemo(() => {
            let e = r.map((e) => ({ url: e, type: "IMAGE" }));
            return [...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [r, t.screenshotUrls]),
        o = s.length > 2;
    function d(e) {
        if (null == i.current) return;
        let t = i.current.getScrollerState().scrollLeft;
        i.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === s.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(c.Heading, {
                      className: A.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: v.intl.string(v.t.bNdK5x),
                  }),
                  (0, l.jsxs)("div", {
                      className: o ? b.DA : b.pZ,
                      children: [
                          (0, l.jsx)(c.zCo, {
                              ref: i,
                              className: b.ec,
                              orientation: "horizontal",
                              children: s.map((e, t) =>
                                  (0, l.jsx)(
                                      c.DUT,
                                      {
                                          className: b.gw,
                                          focusProps: { offset: 4, ringClassName: b.jR },
                                          onClick: () => {
                                              n(_.Ws.ClickImage),
                                                  (0, h.R)({
                                                      items: s,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, l.jsx)("img", {
                                              src: e.url,
                                              className: b.Zm,
                                              alt: v.intl.formatToPlainString(v.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          o &&
                              (0, l.jsxs)("div", {
                                  className: b.NA,
                                  children: [
                                      (0, l.jsx)("div", { className: b.EJ }),
                                      (0, l.jsx)(c.DUT, {
                                          className: b.G9,
                                          onClick: () => d(-1),
                                          children: (0, l.jsx)(c.rJJ, { className: b.UE, color: "currentColor" }),
                                      }),
                                      (0, l.jsx)("div", { className: b.Pj }),
                                      (0, l.jsx)(c.DUT, {
                                          className: b.G9,
                                          onClick: () => d(1),
                                          children: (0, l.jsx)(c.EdP, { className: b.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let I = a.memo(function (e) {
        let { item: t, index: n, isSelected: i, isPlaying: s, onSelect: d, gameName: u } = e,
            m = a.useCallback(() => d(n), [d, n]);
        return (0, l.jsx)(c.DUT, {
            className: r()(E.JS, i && E.Y4),
            onClick: m,
            children: (0, l.jsxs)("div", {
                className: E.ub,
                children: [
                    (0, l.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: E.xn,
                        alt: v.intl.formatToPlainString(v.t.COYYrn, { game: u }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, l.jsx)("div", {
                            className: E.UZ,
                            children: (0, l.jsx)(o.DMX, { playing: i && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    C = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: s,
                onPause: o,
                onFullscreenChange: c,
            } = e,
            d = a.useRef(null);
        return (
            (0, g.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, l.jsxs)(l.Fragment, {
                children: [
                    !n && (0, l.jsx)("canvas", { ref: d, className: E.HW, "aria-hidden": "true" }),
                    (0, l.jsx)("div", {
                        className: E.tN,
                        children: (0, l.jsx)(f.A, {
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
                            renderLinkComponent: x.bU,
                            onPlay: s,
                            onPause: o,
                            onFullscreenChange: c,
                            mediaPlayerClassName: E.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function N(e) {
    let { game: t, trackAction: n } = e,
        [i, r] = a.useState(0),
        [o, m] = a.useState(null),
        [f, x] = a.useState(t.screenshotUrls),
        g = a.useRef(null),
        A = a.useRef(null),
        b = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    f !== t.screenshotUrls && (x(t.screenshotUrls), r(0));
    let j = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, p.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, p.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        N = j.length > 0 ? Math.min(i, j.length - 1) : 0,
        S = j[N],
        T = S?.type === "VIDEO",
        y = a.useCallback(
            (e) => {
                let t = j[N],
                    n = j[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? m(t.url) : m(null), r(e);
            },
            [j, N],
        ),
        [L, k] = a.useState(!1),
        R = a.useRef(null),
        O = a.useCallback(() => {
            n(T ? _.Ws.ClickTrailer : _.Ws.ClickImage);
            let e = g.current,
                t = R.current,
                l = null != e && !e.paused,
                a = e?.muted ?? !0,
                i = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = j.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === N;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || a, initialTimeSec: n ? i : void 0, videoRef: A };
                }
                return e;
            });
            (0, h.R)({
                items: s,
                startingIndex: N,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = A.current,
                        t = R.current,
                        n = null != e ? !e.paused : l;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        k(n);
                },
            });
        }, [n, j, N, T]),
        M = a.useCallback(() => k(!0), []),
        G = a.useCallback(() => k(!1), []),
        w = a.useCallback(() => m(null), []),
        P = a.useCallback(
            (e) => {
                e && O();
            },
            [O],
        );
    return 0 === j.length
        ? null
        : (0, l.jsxs)("div", {
              className: E.kL,
              children: [
                  T
                      ? (0, l.jsx)("div", {
                            className: E.ND,
                            children: (0, l.jsx)(
                                C,
                                {
                                    item: S,
                                    reducedMotion: b,
                                    videoRef: g,
                                    mediaPlayerRef: R,
                                    onPlay: M,
                                    onPause: G,
                                    onFullscreenChange: P,
                                },
                                `${N}-${S.url}`,
                            ),
                        })
                      : (0, l.jsxs)("div", {
                            className: E.wp,
                            children: [
                                null != o &&
                                    !b &&
                                    (0, l.jsx)(
                                        "div",
                                        {
                                            className: E.Jy,
                                            onAnimationEnd: w,
                                            children: (0, l.jsx)("img", { src: o, className: E.Db, alt: "" }),
                                        },
                                        o,
                                    ),
                                (0, l.jsx)("div", { className: E.QN }),
                                (0, l.jsx)(c.DUT, {
                                    className: E.gv,
                                    onClick: O,
                                    children: (0, l.jsx)(
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
                  (0, l.jsx)(u.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: j.map((e, n) =>
                          (0, l.jsx)(
                              I,
                              { item: e, index: n, isPlaying: L, isSelected: n === N, onSelect: y, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
