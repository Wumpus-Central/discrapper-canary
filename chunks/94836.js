n.d(t, { A: () => E, a: () => b });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    c = n(732955),
    o = n(397927),
    d = n(775602),
    u = n(951707),
    m = n(248643),
    x = n(256905),
    h = n(652176),
    g = n(371794),
    f = n(409626),
    _ = n(368546),
    p = n(985018),
    v = n(325952),
    A = n(894704),
    j = n(240892);
function E(e) {
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
                      className: v.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: p.intl.string(p.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: s ? A.DA : A.pZ,
                      children: [
                          (0, a.jsx)(o.zCo, {
                              ref: i,
                              className: A.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, a.jsx)(
                                      o.DUT,
                                      {
                                          className: A.gw,
                                          focusProps: { offset: 4, ringClassName: A.jR },
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
                                              className: A.Zm,
                                              alt: p.intl.formatToPlainString(p.t.COYYrn, { game: name }),
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
                                      (0, a.jsx)(o.DUT, {
                                          className: A.G9,
                                          onClick: () => c(-1),
                                          children: (0, a.jsx)(o.rJJ, { className: A.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: A.Pj }),
                                      (0, a.jsx)(o.DUT, {
                                          className: A.G9,
                                          onClick: () => c(1),
                                          children: (0, a.jsx)(o.EdP, { className: A.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let C = l.memo(function (e) {
        let { item: t, index: n, isSelected: i, isPlaying: s, onSelect: d, gameName: u } = e,
            m = l.useCallback(() => d(n), [d, n]);
        return (0, a.jsx)(o.DUT, {
            className: r()(j.JS, i && j.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: j.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: j.xn,
                        alt: p.intl.formatToPlainString(p.t.COYYrn, { game: u }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, a.jsx)("div", {
                            className: j.UZ,
                            children: (0, a.jsx)(c.DMX, { playing: i && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    I = l.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: s,
                onPause: c,
                onFullscreenChange: o,
            } = e,
            d = l.useRef(null);
        return (
            (0, _.A)({ videoRef: i, canvasRef: d, enabled: !n }),
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
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: j.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function b(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, r] = l.useState(0),
        [c, m] = l.useState(null),
        [h, _] = l.useState(t.artwork),
        [v, A] = l.useState(t.screenshots),
        E = l.useRef(null),
        b = l.useRef(null),
        N = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    (h !== t.artwork || v !== t.screenshots) && (_(t.artwork), A(t.screenshots), r(0));
    let S = l.useMemo(() => {
            let e = (t.trailers ?? []).map((e) => {
                    let t = (0, g.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, g.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                n = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...e, ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...n];
        }, [t.trailers, t.artwork, t.screenshots]),
        T = S.length > 0 ? Math.min(i, S.length - 1) : 0,
        k = S[T],
        y = k?.type === "VIDEO",
        L = l.useCallback(
            (e) => {
                let t = S[T],
                    n = S[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? m(t.url) : m(null), r(e);
            },
            [S, T],
        ),
        [O, R] = l.useState(!1),
        G = l.useRef(null),
        M = l.useCallback(() => {
            n(y ? f.Ws.ClickTrailer : f.Ws.ClickImage);
            let e = E.current,
                t = G.current,
                a = null != e && !e.paused,
                l = e?.muted ?? !0,
                i = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = S.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === T;
                    return { ...e, autoPlay: !!n && a, autoMute: !n || l, initialTimeSec: n ? i : void 0, videoRef: b };
                }
                return e;
            });
            (0, x.R)({
                items: s,
                startingIndex: T,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = b.current,
                        t = G.current,
                        n = null != e ? !e.paused : a;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        R(n);
                },
            });
        }, [n, S, T, y]),
        P = l.useCallback(() => R(!0), []),
        w = l.useCallback(() => R(!1), []),
        V = l.useCallback(() => m(null), []),
        D = l.useCallback(
            (e) => {
                e && M();
            },
            [M],
        );
    return 0 === S.length
        ? null
        : (0, a.jsxs)("div", {
              className: j.kL,
              children: [
                  y
                      ? (0, a.jsx)("div", {
                            className: j.ND,
                            children: (0, a.jsx)(
                                I,
                                {
                                    item: k,
                                    reducedMotion: N,
                                    videoRef: E,
                                    mediaPlayerRef: G,
                                    onPlay: P,
                                    onPause: w,
                                    onFullscreenChange: D,
                                },
                                `${T}-${k.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: j.wp,
                            children: [
                                null != c &&
                                    !N &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: j.Jy,
                                            onAnimationEnd: V,
                                            children: (0, a.jsx)("img", { src: c, className: j.Db, alt: "" }),
                                        },
                                        c,
                                    ),
                                (0, a.jsx)(o.DUT, {
                                    className: j.gv,
                                    onClick: M,
                                    children: (0, a.jsx)(
                                        "img",
                                        {
                                            src: k.url,
                                            className: j.c8,
                                            alt: p.intl.formatToPlainString(p.t.COYYrn, { game: t.name }),
                                        },
                                        k.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, a.jsx)(u.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: S.map((e, n) =>
                          (0, a.jsx)(
                              C,
                              { item: e, index: n, isPlaying: O, isSelected: n === T, onSelect: L, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
