l.d(t, { A: () => P });
var n = l(477900),
    a = l(582128),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    c = l(256905),
    o = l(530574),
    u = l(675747),
    d = l(584794);
l(321073);
var m = l(503698),
    f = l.n(m),
    h = l(435558),
    x = l(702841),
    v = l(834730),
    p = l(408278),
    g = l(461150),
    j = l(782134),
    C = l(113494),
    b = l(898196),
    y = l(259678),
    E = l(765671),
    N = l(531685),
    k = l(335494),
    w = l(362081),
    A = l(589049),
    L = l(696016),
    R = l(375708),
    T = l(445563),
    I = l(631015);
function M(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`;
}
function D(e) {
    let t = Math.floor(e / 60),
        l = R.intl.formatToPlainString(R.t.iXLF9W, { minutes: t }),
        n = R.intl.formatToPlainString(R.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function S(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: s,
            isPlaying: r,
            cropStart: c,
            cropEnd: o,
            cropDuration: u,
            setCropStart: m,
            setCropEnd: S,
            play: O,
            pause: P,
            subscribe: _,
            seek: z,
            clip: U,
            generateThumbnails: $,
            videoDimensions: B,
        } = (0, w.T)(),
        G = i(),
        [H, V] = a.useState(null),
        K = a.useRef(null),
        F = a.useRef(null),
        [X, Z] = a.useState(!1),
        [W, Y] = a.useState(null);
    a.useEffect(
        () =>
            _({
                onPlay: () => {
                    V(null), Z(!1);
                },
            }),
        [_],
    );
    let { ref: Q, width: J = 0, height: q = 0 } = (0, E.Ay)(),
        ee = (0, x.bG)([N.A], () => N.A.windowSize());
    a.useMemo(() => {
        ee.width, ee.height;
        let e = Q.current;
        null != e && Y(e.getBoundingClientRect());
    }, [ee.width, ee.height, J, Q, l]);
    let et = a.useCallback(
            (e, t) => {
                if (null == s) return;
                if (null == W) return null;
                let l = (((0, h.clamp)(e, W.left, W.right) - W.left) / W.width) * s,
                    n = (0, h.clamp)(l, 0, s),
                    a = H;
                null == a && t && ((a = n <= c ? "start" : n >= o ? "end" : "playhead"), r && (P(), Z(!0)), V(a)),
                    "start" === a ? m(n) : "end" === a ? S(n) : "playhead" === a && z((0, h.clamp)(n, c, o));
            },
            [s, W, H, c, o, r, P, m, S, z],
        ),
        el = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, d.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), m(c - t);
                        break;
                    case "ArrowRight":
                        (l = !0), m(c + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, m, c],
        ),
        en = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, d.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), S(o - t);
                        break;
                    case "ArrowRight":
                        (l = !0), S(o + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, S, o],
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
            X && O(), Z(!1), V(null);
        }, [X, O]);
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
    let { numberOfPreviews: er, timelinePreviewWidth: ec } = a.useMemo(() => {
        if (null == B) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(q * (B.width / B.height));
        return { numberOfPreviews: Math.ceil(J / e), timelinePreviewWidth: e };
    }, [q, J, B]);
    a.useEffect(() => {
        if (0 === er || 0 === ec) return;
        let e = Q.current;
        if (null == e) return;
        (e.height = q), (e.width = J);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, J, q);
        let l = [];
        for (let e = 0; e < er; e++) l.push((ec / J) * s * e);
        return $(l, ec, q, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], ec * l, 0, ec, q), e[l].close();
        });
    }, [q, Q, s, er, ec, $, J]);
    let eo = G - c,
        eu = a.useCallback(() => {
            z(Math.max(c, G - 10));
        }, [c, G, z]),
        ed = a.useCallback(() => {
            z(Math.min(o, G + 10));
        }, [o, G, z]),
        em = a.useCallback(() => {
            r ? P() : O();
        }, [r, O, P]),
        ef = (c / s) * 100,
        eh = (1 - (s - o) / s) * 100,
        ex = {
            background: `linear-gradient(to right, var(--black-500) ${ef}%, transparent ${ef}%, transparent ${eh}%, var(--black-500) ${eh}%)`,
        };
    return (0, n.jsx)("div", {
        className: I.f4,
        children: (0, n.jsxs)("div", {
            className: I.fL,
            children: [
                (0, n.jsxs)("div", {
                    className: I.lx,
                    children: [
                        (0, n.jsx)("div", {
                            className: I.k2,
                            children: (0, n.jsx)("div", {
                                ref: F,
                                className: I.re,
                                children: (0, n.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    className: I.g7,
                                    color: "text-muted",
                                    children: [M(eo), (0, n.jsx)("span", { className: I.xW, children: " / " }), M(u)],
                                }),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: I.s2,
                            children: [
                                (0, n.jsx)(p.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: g.q,
                                    onClick: eu,
                                    "aria-label": R.intl.string(T.default["dRVF+Z"]),
                                }),
                                (0, n.jsx)(p.K, {
                                    size: "md",
                                    icon: r ? C.E : j.u,
                                    onClick: em,
                                    "aria-label": R.intl.string(r ? R.t.ZcgDJX : R.t.RscU7I),
                                }),
                                (0, n.jsx)(p.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: b.i,
                                    onClick: ed,
                                    "aria-label": R.intl.string(T.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(k.A, { onMouseDown: ea, voiceAudioTracks: t, clipId: U.id, className: I.ou }),
                (0, n.jsx)(A.A, { onMouseDown: ea, videoLength: s, clip: U }),
                (0, n.jsx)("div", {
                    className: I.PH,
                    children: (0, n.jsxs)("div", {
                        className: f()(I.IO, { [I.Dg]: null != H }),
                        onMouseDown: ea,
                        children: [
                            (0, n.jsx)("canvas", { className: I.Ay, ref: Q }),
                            (0, n.jsx)(y.vN, { children: (0, n.jsx)("div", { tabIndex: 0, ref: K, className: I.lG }) }),
                            (0, n.jsx)("div", { className: I.QT, style: ex }),
                            (0, n.jsxs)("div", {
                                className: I.Ws,
                                style: {
                                    left: null != s ? `${(c / s) * 100}%` : "0",
                                    right: null != s ? `${((s - o) / s) * 100}%` : "0",
                                },
                                children: [
                                    (0, n.jsx)(y.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: f()(I.uI, { [I.cB]: "start" === H }),
                                            onMouseDown: ea,
                                            onKeyDown: el,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": c,
                                            "aria-valuetext": D(c),
                                            "aria-valuemax": o - L.zj,
                                            "aria-label": R.intl.string(R.t["+BTvw8"]),
                                            children: (0, n.jsx)("div", { className: I.FV }),
                                        }),
                                    }),
                                    (0, n.jsx)(y.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: f()(I.H1, { [I.cB]: "end" === H }),
                                            onMouseDown: ea,
                                            onKeyDown: en,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": c + L.zj,
                                            "aria-valuenow": o,
                                            "aria-valuetext": D(o),
                                            "aria-valuemax": s,
                                            "aria-label": R.intl.string(R.t.bBgBYo),
                                            children: (0, n.jsx)("div", { className: I.kn }),
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
        { cropStart: l, cropEnd: m, videoPlayerRef: f, videoURL: h, audioTracks: x, clip: v } = (0, w.T)(),
        p = v.type === L.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!p) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = f.current;
            if (null == t) return;
            let n = f.current?.videoElement;
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
    }, [f, p, v.type, l, m]);
    let g = a.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        j = a.useCallback(() => {
            (0, c.R)(
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
                    ? (0, n.jsx)(o.A, {})
                    : (0, n.jsx)("div", {
                          className: O.zT,
                          children: (0, n.jsx)(r.D, {
                              className: O.xS,
                              onClick: j,
                              children: (0, n.jsx)("img", { className: O.V_, src: v.thumbnail, alt: v.name ?? "" }),
                          }),
                      }),
        });
    let C = null == h || t !== s.ip.ENTERED;
    return (0, n.jsx)("div", {
        className: O.OJ,
        children: (0, n.jsx)("div", {
            className: O.zT,
            children: C
                ? (0, n.jsx)(o.A, {})
                : (0, n.jsxs)("div", {
                      className: O.Xf,
                      children: [
                          (0, n.jsx)(u.A, { ref: f }),
                          (0, n.jsx)(S, { transitionState: t, voiceAudioTracks: g }),
                      ],
                  }),
        }),
    });
}
