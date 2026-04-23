n.d(t, { A: () => S, a: () => L });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(80687),
    c = n(534514),
    d = n(599319),
    u = n(939249),
    m = n(477155),
    h = n(935286),
    f = n(775602),
    _ = n(951707),
    g = n(898736),
    p = n(248643),
    x = n(256905),
    E = n(652176),
    A = n(90721),
    v = n(371794),
    I = n(409626),
    b = n(985018),
    j = n(141535),
    N = n(616337),
    C = n(381641);
function S(e) {
    let { game: t, trackAction: n } = e,
        i = a.useRef(null),
        r = (0, g._)(t),
        s = a.useMemo(() => {
            let e = r.map((e) => ({ url: e, type: "IMAGE" }));
            return [...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [r, t.screenshotUrls]),
        o = s.length > 2;
    function f(e) {
        if (null == i.current) return;
        let t = i.current.getScrollerState().scrollLeft;
        i.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === s.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(c.D, {
                      className: j.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: b.intl.string(b.t.bNdK5x),
                  }),
                  (0, l.jsxs)("div", {
                      className: o ? N.DA : N.pZ,
                      children: [
                          (0, l.jsx)(d.zC, {
                              ref: i,
                              className: N.ec,
                              orientation: "horizontal",
                              children: s.map((e, t) =>
                                  (0, l.jsx)(
                                      u.D,
                                      {
                                          className: N.gw,
                                          focusProps: { offset: 4, ringClassName: N.jR },
                                          onClick: () => {
                                              n(I.Ws.ClickImage),
                                                  (0, x.R)({
                                                      items: s,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, l.jsx)("img", {
                                              src: e.url,
                                              className: N.Zm,
                                              alt: b.intl.formatToPlainString(b.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          o &&
                              (0, l.jsxs)("div", {
                                  className: N.NA,
                                  children: [
                                      (0, l.jsx)("div", { className: N.EJ }),
                                      (0, l.jsx)(u.D, {
                                          className: N.G9,
                                          onClick: () => f(-1),
                                          children: (0, l.jsx)(m.r, { className: N.UE, color: "currentColor" }),
                                      }),
                                      (0, l.jsx)("div", { className: N.Pj }),
                                      (0, l.jsx)(u.D, {
                                          className: N.G9,
                                          onClick: () => f(1),
                                          children: (0, l.jsx)(h.E, { className: N.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let y = a.memo(function (e) {
        let { item: t, index: n, isSelected: i, isPlaying: s, onSelect: c, gameName: d } = e,
            m = a.useCallback(() => c(n), [c, n]);
        return (0, l.jsx)(u.D, {
            className: r()(C.JS, i && C.Y4),
            onClick: m,
            children: (0, l.jsxs)("div", {
                className: C.ub,
                children: [
                    (0, l.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: C.xn,
                        alt: b.intl.formatToPlainString(b.t.COYYrn, { game: d }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, l.jsx)("div", {
                            className: C.UZ,
                            children: (0, l.jsx)(o.D, { playing: i && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    R = a.memo(function (e) {
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
            (0, A.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, l.jsxs)(l.Fragment, {
                children: [
                    !n && (0, l.jsx)("canvas", { ref: d, className: C.HW, "aria-hidden": "true" }),
                    (0, l.jsx)("div", {
                        className: C.tN,
                        children: (0, l.jsx)(p.A, {
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
                            renderLinkComponent: E.bU,
                            onPlay: s,
                            onPause: o,
                            onFullscreenChange: c,
                            mediaPlayerClassName: C.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function L(e) {
    let { game: t, trackAction: n } = e,
        [i, r] = a.useState(0),
        [o, c] = a.useState(null),
        [d, m] = a.useState(t.screenshotUrls),
        h = a.useRef(null),
        g = a.useRef(null),
        p = (0, s.bG)([f.A], () => f.A.useReducedMotion);
    d !== t.screenshotUrls && (m(t.screenshotUrls), r(0));
    let E = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, v.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, v.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        A = E.length > 0 ? Math.min(i, E.length - 1) : 0,
        j = E[A],
        N = j?.type === "VIDEO",
        S = a.useCallback(
            (e) => {
                let t = E[A],
                    n = E[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), r(e);
            },
            [E, A],
        ),
        [L, T] = a.useState(!1),
        k = a.useRef(null),
        w = a.useCallback(() => {
            n(N ? I.Ws.ClickTrailer : I.Ws.ClickImage);
            let e = h.current,
                t = k.current,
                l = null != e && !e.paused,
                a = e?.muted ?? !0,
                i = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = E.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === A;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || a, initialTimeSec: n ? i : void 0, videoRef: g };
                }
                return e;
            });
            (0, x.R)({
                items: s,
                startingIndex: A,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = g.current,
                        t = k.current,
                        n = null != e ? !e.paused : l;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        T(n);
                },
            });
        }, [n, E, A, N]),
        M = a.useCallback(() => T(!0), []),
        O = a.useCallback(() => T(!1), []),
        G = a.useCallback(() => c(null), []),
        P = a.useCallback(
            (e) => {
                e && w();
            },
            [w],
        );
    return 0 === E.length
        ? null
        : (0, l.jsxs)("div", {
              className: C.kL,
              children: [
                  N
                      ? (0, l.jsx)("div", {
                            className: C.ND,
                            children: (0, l.jsx)(
                                R,
                                {
                                    item: j,
                                    reducedMotion: p,
                                    videoRef: h,
                                    mediaPlayerRef: k,
                                    onPlay: M,
                                    onPause: O,
                                    onFullscreenChange: P,
                                },
                                `${A}-${j.url}`,
                            ),
                        })
                      : (0, l.jsxs)("div", {
                            className: C.wp,
                            children: [
                                null != o &&
                                    !p &&
                                    (0, l.jsx)(
                                        "div",
                                        {
                                            className: C.Jy,
                                            onAnimationEnd: G,
                                            children: (0, l.jsx)("img", { src: o, className: C.Db, alt: "" }),
                                        },
                                        o,
                                    ),
                                (0, l.jsx)("div", { className: C.QN }),
                                (0, l.jsx)(u.D, {
                                    className: C.gv,
                                    onClick: w,
                                    children: (0, l.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: C.c8,
                                            alt: b.intl.formatToPlainString(b.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, l.jsx)(_.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: E.map((e, n) =>
                          (0, l.jsx)(
                              y,
                              { item: e, index: n, isPlaying: L, isSelected: n === A, onSelect: S, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
