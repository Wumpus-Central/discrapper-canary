n.d(t, { A: () => C, a: () => E });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    c = n(732955),
    o = n(397927),
    d = n(775602),
    u = n(720462),
    m = n(248643),
    x = n(256905),
    h = n(652176),
    f = n(371794),
    g = n(409626),
    p = n(368546),
    _ = n(985018),
    v = n(282063),
    j = n(426401),
    A = n(791129);
function C(e) {
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
                      children: _.intl.string(_.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: s ? j.DA : j.pZ,
                      children: [
                          (0, a.jsx)(o.zCo, {
                              ref: i,
                              className: j.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, a.jsx)(
                                      o.DUT,
                                      {
                                          className: j.gw,
                                          focusProps: { offset: 4, ringClassName: j.jR },
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
                                              className: j.Zm,
                                              alt: _.intl.formatToPlainString(_.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          s &&
                              (0, a.jsxs)("div", {
                                  className: j.NA,
                                  children: [
                                      (0, a.jsx)("div", { className: j.EJ }),
                                      (0, a.jsx)(o.DUT, {
                                          className: j.G9,
                                          onClick: () => c(-1),
                                          children: (0, a.jsx)(o.rJJ, { className: j.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: j.Pj }),
                                      (0, a.jsx)(o.DUT, {
                                          className: j.G9,
                                          onClick: () => c(1),
                                          children: (0, a.jsx)(o.EdP, { className: j.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let I = l.memo(function (e) {
        let { item: t, index: n, isSelected: i, isPlaying: s, onSelect: d, gameName: u } = e,
            m = l.useCallback(() => d(n), [d, n]);
        return (0, a.jsx)(o.DUT, {
            className: r()(A.JS, i && A.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: A.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: A.xn,
                        alt: _.intl.formatToPlainString(_.t.COYYrn, { game: u }),
                    }),
                    "VIDEO" === t.type &&
                        (0, a.jsx)("div", {
                            className: A.UZ,
                            children: (0, a.jsx)(c.DMX, { playing: i && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    b = l.memo(function (e) {
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
            (0, p.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: d, className: A.HW, "aria-hidden": "true" }),
                    (0, a.jsx)(m.A, {
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
                        mediaPlayerClassName: A.T9,
                        videoRef: i,
                        mediaPlayerRef: r,
                    }),
                ],
            })
        );
    });
function E(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, r] = l.useState(0),
        [c, m] = l.useState(t.artwork),
        [h, p] = l.useState(t.screenshots),
        v = l.useRef(null),
        j = l.useRef(null),
        C = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    (c !== t.artwork || h !== t.screenshots) && (m(t.artwork), p(t.screenshots), r(0));
    let E = l.useMemo(() => {
            let e = (t.trailers ?? []).map((e) => {
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
                n = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [...e, ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })), ...n];
        }, [t.trailers, t.artwork, t.screenshots]),
        N = E.length > 0 ? Math.min(i, E.length - 1) : 0,
        S = E[N],
        k = S?.type === "VIDEO",
        [T, y] = l.useState(!1),
        L = l.useRef(null),
        O = l.useCallback(() => {
            n(k ? g.Ws.ClickTrailer : g.Ws.ClickImage);
            let e = v.current,
                t = L.current,
                a = null != e && !e.paused,
                l = e?.muted ?? !0,
                i = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = E.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === N;
                    return { ...e, autoPlay: !!n && a, autoMute: !n || l, initialTimeSec: n ? i : void 0, videoRef: j };
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
                    let e = j.current,
                        t = L.current,
                        n = null != e ? !e.paused : a;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        y(n);
                },
            });
        }, [n, E, N, k]),
        R = l.useCallback(() => y(!0), []),
        G = l.useCallback(() => y(!1), []),
        M = l.useCallback(
            (e) => {
                e && O();
            },
            [O],
        );
    return 0 === E.length
        ? null
        : (0, a.jsxs)("div", {
              className: A.kL,
              children: [
                  k
                      ? (0, a.jsx)("div", {
                            className: A.ND,
                            children: (0, a.jsx)(
                                b,
                                {
                                    item: S,
                                    reducedMotion: C,
                                    videoRef: v,
                                    mediaPlayerRef: L,
                                    onPlay: R,
                                    onPause: G,
                                    onFullscreenChange: M,
                                },
                                `${N}-${S.url}`,
                            ),
                        })
                      : (0, a.jsx)(o.DUT, {
                            className: A.gv,
                            onClick: O,
                            children: (0, a.jsx)("img", {
                                src: S.url,
                                className: A.c8,
                                alt: _.intl.formatToPlainString(_.t.COYYrn, { game: t.name }),
                            }),
                        }),
                  (0, a.jsx)(u.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: E.map((e, n) =>
                          (0, a.jsx)(
                              I,
                              { item: e, index: n, isPlaying: T, isSelected: n === N, onSelect: r, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
