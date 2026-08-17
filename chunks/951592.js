l.d(t, { A: () => P });
var n = l(477900),
    a = l(582128),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    o = l(256905),
    c = l(530574),
    u = l(675747),
    d = l(584794);
l(321073);
var m = l(503698),
    h = l.n(m),
    f = l(435558),
    x = l(702841),
    v = l(834730),
    p = l(408278),
    g = l(461150),
    j = l(782134),
    b = l(113494),
    C = l(898196),
    y = l(259678),
    N = l(765671),
    E = l(531685),
    w = l(335494),
    k = l(362081),
    A = l(589049),
    L = l(696016),
    R = l(375708),
    I = l(445563),
    T = l(631015);
function M(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`;
}
function S(e) {
    let t = Math.floor(e / 60),
        l = R.intl.formatToPlainString(R.t.iXLF9W, { minutes: t }),
        n = R.intl.formatToPlainString(R.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function D(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: s,
            isPlaying: r,
            cropStart: o,
            cropEnd: c,
            cropDuration: u,
            setCropStart: m,
            setCropEnd: D,
            play: O,
            pause: P,
            subscribe: _,
            seek: z,
            clip: U,
            generateThumbnails: $,
            videoDimensions: B,
        } = (0, k.T)(),
        G = i(),
        [H, V] = a.useState(null),
        K = a.useRef(null),
        F = a.useRef(null),
        [Z, W] = a.useState(!1),
        [X, Y] = a.useState(null);
    a.useEffect(
        () =>
            _({
                onPlay: () => {
                    V(null), W(!1);
                },
            }),
        [_],
    );
    let { ref: J, width: Q = 0, height: q = 0 } = (0, N.Ay)(),
        ee = (0, x.bG)([E.A], () => E.A.windowSize());
    a.useMemo(() => {
        ee.width, ee.height;
        let e = J.current;
        null != e && Y(e.getBoundingClientRect());
    }, [ee.width, ee.height, Q, J, l]);
    let et = a.useCallback(
            (e, t) => {
                if (null == s) return;
                if (null == X) return null;
                let l = (((0, f.clamp)(e, X.left, X.right) - X.left) / X.width) * s,
                    n = (0, f.clamp)(l, 0, s),
                    a = H;
                null == a && t && ((a = n <= o ? "start" : n >= c ? "end" : "playhead"), r && (P(), W(!0)), V(a)),
                    "start" === a ? m(n) : "end" === a ? D(n) : "playhead" === a && z((0, f.clamp)(n, o, c));
            },
            [s, X, H, o, c, r, P, m, D, z],
        ),
        el = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, d.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), m(o - t);
                        break;
                    case "ArrowRight":
                        (l = !0), m(o + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, m, o],
        ),
        en = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, d.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), D(c - t);
                        break;
                    case "ArrowRight":
                        (l = !0), D(c + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, D, c],
        ),
        ea = a.useCallback(
            (e) => {
                et(e.clientX, !0);
            },
            [et],
        ),
        ei = a.useCallback(
            (e) => {
                et(e.clientX, !1);
            },
            [et],
        ),
        es = a.useCallback(() => {
            Z && O(), W(!1), V(null);
        }, [Z, O]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", ei),
            document.addEventListener("mouseup", es),
            () => {
                document.removeEventListener("mousemove", ei), document.removeEventListener("mouseup", es);
            }
        ),
        [ei, es],
    );
    let { numberOfPreviews: er, timelinePreviewWidth: eo } = a.useMemo(() => {
        if (null == B) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(q * (B.width / B.height));
        return { numberOfPreviews: Math.ceil(Q / e), timelinePreviewWidth: e };
    }, [q, Q, B]);
    a.useEffect(() => {
        if (0 === er || 0 === eo) return;
        let e = J.current;
        if (null == e) return;
        (e.height = q), (e.width = Q);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, Q, q);
        let l = [];
        for (let e = 0; e < er; e++) l.push((eo / Q) * s * e);
        return $(l, eo, q, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], eo * l, 0, eo, q), e[l].close();
        });
    }, [q, J, s, er, eo, $, Q]);
    let ec = G - o,
        eu = a.useCallback(() => {
            z(Math.max(o, G - 10));
        }, [o, G, z]),
        ed = a.useCallback(() => {
            z(Math.min(c, G + 10));
        }, [c, G, z]),
        em = a.useCallback(() => {
            r ? P() : O();
        }, [r, O, P]),
        eh = (o / s) * 100,
        ef = (1 - (s - c) / s) * 100,
        ex = {
            background: `linear-gradient(to right, var(--black-500) ${eh}%, transparent ${eh}%, transparent ${ef}%, var(--black-500) ${ef}%)`,
        };
    return (0, n.jsx)("div", {
        className: T.f4,
        children: (0, n.jsxs)("div", {
            className: T.fL,
            children: [
                (0, n.jsxs)("div", {
                    className: T.lx,
                    children: [
                        (0, n.jsx)("div", {
                            className: T.k2,
                            children: (0, n.jsx)("div", {
                                ref: F,
                                className: T.re,
                                children: (0, n.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    className: T.g7,
                                    color: "text-muted",
                                    children: [M(ec), (0, n.jsx)("span", { className: T.xW, children: " / " }), M(u)],
                                }),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: T.s2,
                            children: [
                                (0, n.jsx)(p.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: g.q,
                                    onClick: eu,
                                    "aria-label": R.intl.string(I.default["dRVF+Z"]),
                                }),
                                (0, n.jsx)(p.K, {
                                    size: "md",
                                    icon: r ? b.PauseIcon : j.PlayIcon,
                                    onClick: em,
                                    "aria-label": R.intl.string(r ? R.t.ZcgDJX : R.t.RscU7I),
                                }),
                                (0, n.jsx)(p.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: C.i,
                                    onClick: ed,
                                    "aria-label": R.intl.string(I.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(w.A, { onMouseDown: ea, voiceAudioTracks: t, clipId: U.id, className: T.ou }),
                (0, n.jsx)(A.A, { onMouseDown: ea, videoLength: s, clip: U }),
                (0, n.jsx)("div", {
                    className: T.PH,
                    children: (0, n.jsxs)("div", {
                        className: h()(T.IO, { [T.Dg]: null != H }),
                        onMouseDown: ea,
                        children: [
                            (0, n.jsx)("canvas", { className: T.Ay, ref: J }),
                            (0, n.jsx)(y.vN, { children: (0, n.jsx)("div", { tabIndex: 0, ref: K, className: T.lG }) }),
                            (0, n.jsx)("div", { className: T.QT, style: ex }),
                            (0, n.jsxs)("div", {
                                className: T.Ws,
                                style: {
                                    left: null != s ? `${(o / s) * 100}%` : "0",
                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                },
                                children: [
                                    (0, n.jsx)(y.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: h()(T.uI, { [T.cB]: "start" === H }),
                                            onMouseDown: ea,
                                            onKeyDown: el,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": o,
                                            "aria-valuetext": S(o),
                                            "aria-valuemax": c - L.zj,
                                            "aria-label": R.intl.string(R.t["+BTvw8"]),
                                            children: (0, n.jsx)("div", { className: T.FV }),
                                        }),
                                    }),
                                    (0, n.jsx)(y.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: h()(T.H1, { [T.cB]: "end" === H }),
                                            onMouseDown: ea,
                                            onKeyDown: en,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": o + L.zj,
                                            "aria-valuenow": c,
                                            "aria-valuetext": S(c),
                                            "aria-valuemax": s,
                                            "aria-label": R.intl.string(R.t.bBgBYo),
                                            children: (0, n.jsx)("div", { className: T.kn }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
var O = l(884003);
function P(e) {
    let { transitionState: t } = e,
        { cropStart: l, cropEnd: m, videoPlayerRef: h, videoURL: f, audioTracks: x, clip: v } = (0, k.T)(),
        p = v.type === L.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!p) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = h.current;
            if (null == t) return;
            let n = h.current?.videoElement;
            if (null == n) return;
            let a = (0, d.A)(n.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    (s = !0), n.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (s = !0), t.seek(Math.max(l, n.currentTime - a));
                    break;
                case "ArrowRight":
                    (s = !0), t.seek(Math.min(m, n.currentTime + a));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [h, p, v.type, l, m]);
    let g = a.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        j = a.useCallback(() => {
            (0, o.R)(
                {
                    items: [{ type: "IMAGE", url: v.thumbnail, proxyUrl: v.thumbnail, alt: v.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [v.thumbnail, v.name]);
    if (p)
        return (0, n.jsx)("div", {
            className: O.OJ,
            children:
                t !== s.ip.ENTERED
                    ? (0, n.jsx)(c.A, {})
                    : (0, n.jsx)("div", {
                          className: O.zT,
                          children: (0, n.jsx)(r.D, {
                              className: O.xS,
                              onClick: j,
                              children: (0, n.jsx)("img", { className: O.V_, src: v.thumbnail, alt: v.name ?? "" }),
                          }),
                      }),
        });
    let b = null == f || t !== s.ip.ENTERED;
    return (0, n.jsx)("div", {
        className: O.OJ,
        children: (0, n.jsx)("div", {
            className: O.zT,
            children: b
                ? (0, n.jsx)(c.A, {})
                : (0, n.jsxs)("div", {
                      className: O.Xf,
                      children: [
                          (0, n.jsx)(u.A, { ref: h }),
                          (0, n.jsx)(D, { transitionState: t, voiceAudioTracks: g }),
                      ],
                  }),
        }),
    });
}
