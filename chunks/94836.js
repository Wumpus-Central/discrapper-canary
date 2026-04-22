n.d(t, { A: () => y, a: () => T });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(80687),
    d = n(534514),
    c = n(599319),
    u = n(939249),
    m = n(477155),
    _ = n(935286),
    h = n(775602),
    f = n(951707),
    g = n(898736),
    p = n(248643),
    x = n(256905),
    b = n(652176),
    A = n(90721),
    v = n(371794),
    E = n(409626),
    I = n(985018),
    C = n(141535),
    N = n(616337),
    j = n(381641);
function y(e) {
    let { game: t, trackAction: n } = e,
        i = l.useRef(null),
        r = (0, g._)(t),
        s = l.useMemo(() => {
            let e = r.map((e) => ({ url: e, type: "IMAGE" }));
            return [...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [r, t.screenshotUrls]),
        o = s.length > 2;
    function h(e) {
        if (null == i.current) return;
        let t = i.current.getScrollerState().scrollLeft;
        i.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === s.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(d.D, {
                      className: C.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: I.intl.string(I.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: o ? N.DA : N.pZ,
                      children: [
                          (0, a.jsx)(c.zC, {
                              ref: i,
                              className: N.ec,
                              orientation: "horizontal",
                              children: s.map((e, t) =>
                                  (0, a.jsx)(
                                      u.D,
                                      {
                                          className: N.gw,
                                          focusProps: { offset: 4, ringClassName: N.jR },
                                          onClick: () => {
                                              n(E.Ws.ClickImage),
                                                  (0, x.R)({
                                                      items: s,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, a.jsx)("img", {
                                              src: e.url,
                                              className: N.Zm,
                                              alt: I.intl.formatToPlainString(I.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          o &&
                              (0, a.jsxs)("div", {
                                  className: N.NA,
                                  children: [
                                      (0, a.jsx)("div", { className: N.EJ }),
                                      (0, a.jsx)(u.D, {
                                          className: N.G9,
                                          onClick: () => h(-1),
                                          children: (0, a.jsx)(m.r, { className: N.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: N.Pj }),
                                      (0, a.jsx)(u.D, {
                                          className: N.G9,
                                          onClick: () => h(1),
                                          children: (0, a.jsx)(_.E, { className: N.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let S = l.memo(function (e) {
        let { item: t, index: n, isSelected: i, isPlaying: s, onSelect: d, gameName: c } = e,
            m = l.useCallback(() => d(n), [d, n]);
        return (0, a.jsx)(u.D, {
            className: r()(j.JS, i && j.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: j.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: j.xn,
                        alt: I.intl.formatToPlainString(I.t.COYYrn, { game: c }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, a.jsx)("div", {
                            className: j.UZ,
                            children: (0, a.jsx)(o.D, { playing: i && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    R = l.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: s,
                onPause: o,
                onFullscreenChange: d,
            } = e,
            c = l.useRef(null);
        return (
            (0, A.A)({ videoRef: i, canvasRef: c, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: c, className: j.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: j.tN,
                        children: (0, a.jsx)(p.A, {
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
                            renderLinkComponent: b.bU,
                            onPlay: s,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: j.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function T(e) {
    let { game: t, trackAction: n } = e,
        [i, r] = l.useState(0),
        [o, d] = l.useState(null),
        [c, m] = l.useState(t.screenshotUrls),
        _ = l.useRef(null),
        g = l.useRef(null),
        p = (0, s.bG)([h.A], () => h.A.useReducedMotion);
    c !== t.screenshotUrls && (m(t.screenshotUrls), r(0));
    let b = l.useMemo(
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
        A = b.length > 0 ? Math.min(i, b.length - 1) : 0,
        C = b[A],
        N = C?.type === "VIDEO",
        y = l.useCallback(
            (e) => {
                let t = b[A],
                    n = b[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? d(t.url) : d(null), r(e);
            },
            [b, A],
        ),
        [T, L] = l.useState(!1),
        k = l.useRef(null),
        M = l.useCallback(() => {
            n(N ? E.Ws.ClickTrailer : E.Ws.ClickImage);
            let e = _.current,
                t = k.current,
                a = null != e && !e.paused,
                l = e?.muted ?? !0,
                i = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = b.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === A;
                    return { ...e, autoPlay: !!n && a, autoMute: !n || l, initialTimeSec: n ? i : void 0, videoRef: g };
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
                        n = null != e ? !e.paused : a;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        L(n);
                },
            });
        }, [n, b, A, N]),
        w = l.useCallback(() => L(!0), []),
        O = l.useCallback(() => L(!1), []),
        P = l.useCallback(() => d(null), []),
        G = l.useCallback(
            (e) => {
                e && M();
            },
            [M],
        );
    return 0 === b.length
        ? null
        : (0, a.jsxs)("div", {
              className: j.kL,
              children: [
                  N
                      ? (0, a.jsx)("div", {
                            className: j.ND,
                            children: (0, a.jsx)(
                                R,
                                {
                                    item: C,
                                    reducedMotion: p,
                                    videoRef: _,
                                    mediaPlayerRef: k,
                                    onPlay: w,
                                    onPause: O,
                                    onFullscreenChange: G,
                                },
                                `${A}-${C.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: j.wp,
                            children: [
                                null != o &&
                                    !p &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: j.Jy,
                                            onAnimationEnd: P,
                                            children: (0, a.jsx)("img", { src: o, className: j.Db, alt: "" }),
                                        },
                                        o,
                                    ),
                                (0, a.jsx)("div", { className: j.QN }),
                                (0, a.jsx)(u.D, {
                                    className: j.gv,
                                    onClick: M,
                                    children: (0, a.jsx)(
                                        "img",
                                        {
                                            src: C.url,
                                            className: j.c8,
                                            alt: I.intl.formatToPlainString(I.t.COYYrn, { game: t.name }),
                                        },
                                        C.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, a.jsx)(f.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: b.map((e, n) =>
                          (0, a.jsx)(
                              S,
                              { item: e, index: n, isPlaying: T, isSelected: n === A, onSelect: y, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
