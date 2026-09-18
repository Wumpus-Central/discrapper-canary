l.d(t, { A: () => P });
var a = l(477900),
    n = l(582128),
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
    w = l(765671),
    N = l(531685),
    E = l(335494),
    k = l(362081),
    A = l(589049),
    L = l(696016),
    R = l(375708),
    I = l(711127),
    M = l(665160);
function T(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`);
}
function D(e) {
    let t = Math.floor(e / 60),
        l = R.intl.formatToPlainString(R.t.iXLF9W, { minutes: t }),
        a = R.intl.formatToPlainString(R.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function S(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: s,
            isPlaying: r,
            cropStart: o,
            cropEnd: c,
            cropDuration: u,
            setCropStart: m,
            setCropEnd: S,
            play: O,
            pause: P,
            subscribe: z,
            seek: _,
            clip: $,
            generateThumbnails: U,
            videoDimensions: G,
        } = (0, k.T)(),
        H = i(),
        [B, X] = n.useState(null),
        F = n.useRef(null),
        V = n.useRef(null),
        [K, W] = n.useState(!1),
        [Z, Y] = n.useState(null);
    n.useEffect(
        () =>
            z({
                onPlay: () => {
                    (X(null), W(!1));
                },
            }),
        [z],
    );
    let { ref: J, width: Q = 0, height: q = 0 } = (0, w.Ay)(),
        ee = (0, x.bG)([N.A], () => N.A.windowSize());
    n.useMemo(() => {
        (ee.width, ee.height);
        let e = J.current;
        null != e && Y(e.getBoundingClientRect());
    }, [ee.width, ee.height, Q, J, l]);
    let et = n.useCallback(
            (e, t) => {
                if (null == s) return;
                if (null == Z) return null;
                let l = (((0, f.clamp)(e, Z.left, Z.right) - Z.left) / Z.width) * s,
                    a = (0, f.clamp)(l, 0, s),
                    n = B;
                (null == n && t && ((n = a <= o ? "start" : a >= c ? "end" : "playhead"), r && (P(), W(!0)), X(n)),
                    "start" === n ? m(a) : "end" === n ? S(a) : "playhead" === n && _((0, f.clamp)(a, o, c)));
            },
            [s, Z, B, o, c, r, P, m, S, _],
        ),
        el = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, d.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        ((l = !0), m(o - t));
                        break;
                    case "ArrowRight":
                        ((l = !0), m(o + t));
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, m, o],
        ),
        ea = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = (0, d.A)(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        ((l = !0), S(c - t));
                        break;
                    case "ArrowRight":
                        ((l = !0), S(c + t));
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, S, c],
        ),
        en = n.useCallback(
            (e) => {
                et(e.clientX, !0);
            },
            [et],
        ),
        ei = n.useCallback(
            (e) => {
                et(e.clientX, !1);
            },
            [et],
        ),
        es = n.useCallback(() => {
            (K && O(), W(!1), X(null));
        }, [K, O]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", ei),
            document.addEventListener("mouseup", es),
            () => {
                (document.removeEventListener("mousemove", ei), document.removeEventListener("mouseup", es));
            }
        ),
        [ei, es],
    );
    let { numberOfPreviews: er, timelinePreviewWidth: eo } = n.useMemo(() => {
        if (null == G) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(q * (G.width / G.height));
        return { numberOfPreviews: Math.ceil(Q / e), timelinePreviewWidth: e };
    }, [q, Q, G]);
    n.useEffect(() => {
        if (0 === er || 0 === eo) return;
        let e = J.current;
        if (null == e) return;
        ((e.height = q), (e.width = Q));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, Q, q));
        let l = [];
        for (let e = 0; e < er; e++) l.push((eo / Q) * s * e);
        return U(l, eo, q, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], eo * l, 0, eo, q), e[l].close());
        });
    }, [q, J, s, er, eo, U, Q]);
    let ec = H - o,
        eu = n.useCallback(() => {
            _(Math.max(o, H - 10));
        }, [o, H, _]),
        ed = n.useCallback(() => {
            _(Math.min(c, H + 10));
        }, [c, H, _]),
        em = n.useCallback(() => {
            r ? P() : O();
        }, [r, O, P]),
        eh = (o / s) * 100,
        ef = (1 - (s - c) / s) * 100,
        ex = {
            background: `linear-gradient(to right, var(--black-500) ${eh}%, transparent ${eh}%, transparent ${ef}%, var(--black-500) ${ef}%)`,
        };
    return (0, a.jsx)("div", {
        className: M.f4,
        children: (0, a.jsxs)("div", {
            className: M.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: M.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: M.k2,
                            children: (0, a.jsx)("div", {
                                ref: V,
                                className: M.re,
                                children: (0, a.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    className: M.g7,
                                    color: "text-muted",
                                    children: [T(ec), (0, a.jsx)("span", { className: M.xW, children: " / " }), T(u)],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: M.s2,
                            children: [
                                (0, a.jsx)(p.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: g.q,
                                    onClick: eu,
                                    "aria-label": R.intl.string(I.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(p.K, {
                                    size: "md",
                                    icon: r ? b.PauseIcon : j.PlayIcon,
                                    onClick: em,
                                    "aria-label": R.intl.string(r ? R.t.ZcgDJX : R.t.RscU7I),
                                }),
                                (0, a.jsx)(p.K, {
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
                (0, a.jsx)(E.A, { onMouseDown: en, voiceAudioTracks: t, clipId: $.id, className: M.ou }),
                (0, a.jsx)(A.A, { onMouseDown: en, videoLength: s, clip: $ }),
                (0, a.jsx)("div", {
                    className: M.PH,
                    children: (0, a.jsxs)("div", {
                        className: h()(M.IO, { [M.Dg]: null != B }),
                        onMouseDown: en,
                        children: [
                            (0, a.jsx)("canvas", { className: M.Ay, ref: J }),
                            (0, a.jsx)(y.vN, { children: (0, a.jsx)("div", { tabIndex: 0, ref: F, className: M.lG }) }),
                            (0, a.jsx)("div", { className: M.QT, style: ex }),
                            (0, a.jsxs)("div", {
                                className: M.Ws,
                                style: {
                                    left: null != s ? `${(o / s) * 100}%` : "0",
                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(y.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: h()(M.uI, { [M.cB]: "start" === B }),
                                            onMouseDown: en,
                                            onKeyDown: el,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": o,
                                            "aria-valuetext": D(o),
                                            "aria-valuemax": c - L.zj,
                                            "aria-label": R.intl.string(R.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: M.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(y.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: h()(M.H1, { [M.cB]: "end" === B }),
                                            onMouseDown: en,
                                            onKeyDown: ea,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": o + L.zj,
                                            "aria-valuenow": c,
                                            "aria-valuetext": D(c),
                                            "aria-valuemax": s,
                                            "aria-label": R.intl.string(R.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: M.kn }),
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
var O = l(933092);
function P(e) {
    let { transitionState: t } = e,
        { cropStart: l, cropEnd: m, videoPlayerRef: h, videoURL: f, audioTracks: x, clip: v } = (0, k.T)(),
        p = v.type === L.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!p) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = h.current;
            if (null == t) return;
            let a = h.current?.videoElement;
            if (null == a) return;
            let n = (0, d.A)(a.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    ((s = !0), a.paused ? t.play() : t.pause());
                    break;
                case "ArrowLeft":
                    ((s = !0), t.seek(Math.max(l, a.currentTime - n)));
                    break;
                case "ArrowRight":
                    ((s = !0), t.seek(Math.min(m, a.currentTime + n)));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [h, p, v.type, l, m]);
    let g = n.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        j = n.useCallback(() => {
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
        return (0, a.jsx)("div", {
            className: O.OJ,
            children:
                t !== s.ip.ENTERED
                    ? (0, a.jsx)(c.A, {})
                    : (0, a.jsx)("div", {
                          className: O.zT,
                          children: (0, a.jsx)(r.D, {
                              className: O.xS,
                              onClick: j,
                              children: (0, a.jsx)("img", { className: O.V_, src: v.thumbnail, alt: v.name ?? "" }),
                          }),
                      }),
        });
    let b = null == f || t !== s.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: O.OJ,
        children: (0, a.jsx)("div", {
            className: O.zT,
            children: b
                ? (0, a.jsx)(c.A, {})
                : (0, a.jsxs)("div", {
                      className: O.Xf,
                      children: [
                          (0, a.jsx)(u.A, { ref: h }),
                          (0, a.jsx)(S, { transitionState: t, voiceAudioTracks: g }),
                      ],
                  }),
        }),
    });
}
