l.d(t, { A: () => _ });
var n = l(477900),
    a = l(582128),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    c = l(256905),
    o = l(372684),
    u = l(530574),
    d = l(675747),
    m = l(584794);
l(321073);
var h = l(503698),
    f = l.n(h),
    x = l(435558),
    v = l(702841),
    p = l(834730),
    j = l(408278),
    g = l(461150),
    b = l(782134),
    C = l(113494),
    y = l(898196),
    N = l(259678),
    E = l(765671),
    k = l(531685),
    w = l(335494),
    A = l(362081),
    L = l(589049),
    R = l(696016),
    T = l(375708),
    M = l(445563),
    I = l(631015);
function D(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`;
}
function S(e) {
    let t = Math.floor(e / 60),
        l = T.intl.formatToPlainString(T.t.iXLF9W, { minutes: t }),
        n = T.intl.formatToPlainString(T.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function O(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: s,
            isPlaying: r,
            cropStart: c,
            cropEnd: o,
            cropDuration: u,
            setCropStart: d,
            setCropEnd: h,
            play: O,
            pause: P,
            subscribe: _,
            seek: z,
            clip: U,
            generateThumbnails: $,
            videoDimensions: B,
        } = (0, A.T)(),
        G = i(),
        [H, F] = a.useState(null),
        K = a.useRef(null),
        V = a.useRef(null),
        [X, Z] = a.useState(!1),
        [W, Y] = a.useState(null);
    a.useEffect(
        () =>
            _({
                onPlay: () => {
                    F(null), Z(!1);
                },
            }),
        [_],
    );
    let { ref: Q, width: J = 0, height: q = 0 } = (0, E.Ay)(),
        ee = (0, v.bG)([k.A], () => k.A.windowSize());
    a.useMemo(() => {
        ee.width, ee.height;
        let e = Q.current;
        null != e && Y(e.getBoundingClientRect());
    }, [ee.width, ee.height, J, Q, l]);
    let et = a.useCallback(
            (e, t) => {
                if (null == s) return;
                if (null == W) return null;
                let l = (((0, x.clamp)(e, W.left, W.right) - W.left) / W.width) * s,
                    n = (0, x.clamp)(l, 0, s),
                    a = H;
                null == a && t && ((a = n <= c ? "start" : n >= o ? "end" : "playhead"), r && (P(), Z(!0)), F(a)),
                    "start" === a ? d(n) : "end" === a ? h(n) : "playhead" === a && z((0, x.clamp)(n, c, o));
            },
            [s, W, H, c, o, r, P, d, h, z],
        ),
        el = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, m.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), d(c - t);
                        break;
                    case "ArrowRight":
                        (l = !0), d(c + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, d, c],
        ),
        en = a.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, m.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), h(o - t);
                        break;
                    case "ArrowRight":
                        (l = !0), h(o + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, h, o],
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
            X && O(), Z(!1), F(null);
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
        eh = (c / s) * 100,
        ef = (1 - (s - o) / s) * 100,
        ex = {
            background: `linear-gradient(to right, var(--black-500) ${eh}%, transparent ${eh}%, transparent ${ef}%, var(--black-500) ${ef}%)`,
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
                                ref: V,
                                className: I.re,
                                children: (0, n.jsxs)(p.E, {
                                    variant: "text-sm/normal",
                                    className: I.g7,
                                    color: "text-muted",
                                    children: [D(eo), (0, n.jsx)("span", { className: I.xW, children: " / " }), D(u)],
                                }),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: I.s2,
                            children: [
                                (0, n.jsx)(j.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: g.q,
                                    onClick: eu,
                                    "aria-label": T.intl.string(M.default["dRVF+Z"]),
                                }),
                                (0, n.jsx)(j.K, {
                                    size: "md",
                                    icon: r ? C.E : b.u,
                                    onClick: em,
                                    "aria-label": T.intl.string(r ? T.t.ZcgDJX : T.t.RscU7I),
                                }),
                                (0, n.jsx)(j.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: y.i,
                                    onClick: ed,
                                    "aria-label": T.intl.string(M.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(w.A, { onMouseDown: ea, voiceAudioTracks: t, clipId: U.id, className: I.ou }),
                (0, n.jsx)(L.A, { onMouseDown: ea, videoLength: s, clip: U }),
                (0, n.jsx)("div", {
                    className: I.PH,
                    children: (0, n.jsxs)("div", {
                        className: f()(I.IO, { [I.Dg]: null != H }),
                        onMouseDown: ea,
                        children: [
                            (0, n.jsx)("canvas", { className: I.Ay, ref: Q }),
                            (0, n.jsx)(N.vN, { children: (0, n.jsx)("div", { tabIndex: 0, ref: K, className: I.lG }) }),
                            (0, n.jsx)("div", { className: I.QT, style: ex }),
                            (0, n.jsxs)("div", {
                                className: I.Ws,
                                style: {
                                    left: null != s ? `${(c / s) * 100}%` : "0",
                                    right: null != s ? `${((s - o) / s) * 100}%` : "0",
                                },
                                children: [
                                    (0, n.jsx)(N.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: f()(I.uI, { [I.cB]: "start" === H }),
                                            onMouseDown: ea,
                                            onKeyDown: el,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": c,
                                            "aria-valuetext": S(c),
                                            "aria-valuemax": o - R.zj,
                                            "aria-label": T.intl.string(T.t["+BTvw8"]),
                                            children: (0, n.jsx)("div", { className: I.FV }),
                                        }),
                                    }),
                                    (0, n.jsx)(N.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: f()(I.H1, { [I.cB]: "end" === H }),
                                            onMouseDown: ea,
                                            onKeyDown: en,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": c + R.zj,
                                            "aria-valuenow": o,
                                            "aria-valuetext": S(o),
                                            "aria-valuemax": s,
                                            "aria-label": T.intl.string(T.t.bBgBYo),
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
var P = l(884003);
function _(e) {
    let { transitionState: t } = e,
        { cropStart: l, cropEnd: h, videoPlayerRef: f, videoURL: x, audioTracks: v, clip: p } = (0, A.T)(),
        j = p.type === o.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!j) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = f.current;
            if (null == t) return;
            let n = f.current?.videoElement;
            if (null == n) return;
            let a = (0, m.A)(n.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    (s = !0), n.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (s = !0), t.seek(Math.max(l, n.currentTime - a));
                    break;
                case "ArrowRight":
                    (s = !0), t.seek(Math.min(h, n.currentTime + a));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [f, j, p.type, l, h]);
    let g = a.useMemo(() => v.filter((e) => e.trackName.includes(":voice")), [v]),
        b = a.useCallback(() => {
            (0, c.R)(
                {
                    items: [{ type: "IMAGE", url: p.thumbnail, proxyUrl: p.thumbnail, alt: p.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [p.thumbnail, p.name]);
    if (j)
        return (0, n.jsx)("div", {
            className: P.OJ,
            children:
                t !== s.ip.ENTERED
                    ? (0, n.jsx)(u.A, {})
                    : (0, n.jsx)("div", {
                          className: P.zT,
                          children: (0, n.jsx)(r.D, {
                              className: P.xS,
                              onClick: b,
                              children: (0, n.jsx)("img", { className: P.V_, src: p.thumbnail, alt: p.name ?? "" }),
                          }),
                      }),
        });
    let C = null == x || t !== s.ip.ENTERED;
    return (0, n.jsx)("div", {
        className: P.OJ,
        children: (0, n.jsx)("div", {
            className: P.zT,
            children: C
                ? (0, n.jsx)(u.A, {})
                : (0, n.jsxs)("div", {
                      className: P.Xf,
                      children: [
                          (0, n.jsx)(d.A, { ref: f }),
                          (0, n.jsx)(O, { transitionState: t, voiceAudioTracks: g }),
                      ],
                  }),
        }),
    });
}
