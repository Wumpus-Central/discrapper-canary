l.d(t, { A: () => X }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    c = l(702841),
    o = l(834730),
    u = l(408278),
    d = l(461150),
    m = l(782134),
    h = l(113494),
    f = l(898196),
    p = l(187322),
    x = l(765671),
    v = l(531685);
l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var g = l(661531),
    j = l(602853),
    b = l(602674),
    y = l(696016),
    C = l(335416),
    E = l(664875);
let A = new Map(),
    N = a.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: c } = e,
            o = a.useRef(null),
            { ref: u, width: d, height: m } = (0, x.Ay)(),
            [h, f] = a.useState(null),
            p = (0, j.r)(g.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (a.useEffect(
            () => (
                (o.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    o.current?.terminate();
                }
            ),
            [],
        ),
        a.useEffect(() => {
            if (0 === d || 0 === i.length || null == o.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${d}`,
                l = A.get(e);
            if (null != l) return void f(l.waveform);
            let n = o.current,
                a = !1;
            function s(t) {
                if (a) return;
                let { waveform: l, error: n } = t.data;
                null != n ? y.nx.error("Failed to load waveform:", n) : (A.set(e, { waveform: l }), f(l));
            }
            return (
                n.addEventListener("message", s),
                (async function () {
                    try {
                        let e = (0, b.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (a) return;
                        let l = [],
                            s = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let n = new Float32Array(e.getChannelData(l));
                                t.push(n), s.push(n.buffer);
                            }
                            l.push(t);
                        }
                        n.postMessage({ trackChannels: l, width: d }, s);
                    } catch (e) {
                        a || y.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (a = !0), n.removeEventListener("message", s);
                }
            );
        }, [i, t, d]),
        a.useEffect(() => {
            if (null == u.current || null == h || (d ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = u.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: n } = e,
                a = l / h.length,
                i = -(a * (C.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, n), (t.fillStyle = p);
            for (let e = 0; e < h.length; e++) {
                let l = h[e] * n,
                    s = e * a + i;
                t.fillRect(s, n, a - i, -l);
            }
        }, [p, d, u, m, h]),
        0 === i.length)
            ? null
            : (0, n.jsx)("div", {
                  className: s()(E.k, c),
                  children: (0, n.jsx)("canvas", {
                      className: E.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
var k = l(584794),
    w = l(362081),
    R = l(343032),
    T = l(713608),
    L = l(17928),
    I = l(459192),
    O = l(565645),
    D = l(287809),
    _ = l(562153),
    M = l(372684),
    S = l(16590),
    P = l(375708),
    z = l(995469);
function U(e) {
    let { icon: t, title: l, body: a, position: i } = e;
    return (0, n.jsx)(I.u, {
        title: l,
        body: a,
        position: "top",
        children: (0, n.jsx)("div", {
            className: z.H,
            style: { left: `${i}%` },
            children: (0, n.jsx)(t, { size: "refresh_sm", color: g.A.colors.ICON_DEFAULT }),
        }),
    });
}
function G(e) {
    let { signal: t, guildId: l, position: a } = e,
        i = (0, L.bG)([D.default], () => D.default.getUser(t.userId)),
        s = (0, _.tx)(l, null, i);
    return (0, n.jsx)(I.u, {
        title: t.name,
        body: s,
        position: "top",
        children: (0, n.jsx)("div", {
            className: z.H,
            style: { left: `${a}%` },
            children: (0, n.jsx)(O.A, {
                emojiId: t.emojiId ?? null,
                emojiName: t.emojiName ?? null,
                animated: t.emojiAnimated,
                size: "reaction",
            }),
        }),
    });
}
let B = a.memo(function (e) {
    let { clip: t, videoLength: l } = e;
    return a
        .useMemo(
            () =>
                (function (e) {
                    let t = e
                            .filter((e) => e.signal.type === M.Gy.LAUGHTER && e.signal.confidence > 0.8)
                            .sort((e, t) => e.timestamp - t.timestamp),
                        l = new Set(),
                        n = 0;
                    for (let e = 1; e <= t.length; e++)
                        (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                            (e - n >= 2 && l.add(t[e - 1]), (n = e));
                    return e.filter((e) => e.signal.type !== M.Gy.LAUGHTER || l.has(e));
                })(t.timeline),
            [t.timeline],
        )
        .map(function (e) {
            if (e.signal.hiddenFromTimeline) return null;
            let a = (function (e) {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return n < 0 || n > l ? null : (n / l) * 100;
            })(e.timestamp);
            if (null == a) return null;
            let i = `${e.timestamp}-${e.signal.type}`;
            switch (e.signal.type) {
                case M.Gy.LAUGHTER:
                    return (0, n.jsx)(
                        U,
                        {
                            icon: R.i,
                            title: P.intl.string(S.default.bTC23D),
                            body: P.intl.string(S.default["ry+jxm"]),
                            position: a,
                        },
                        i,
                    );
                case M.Gy.GAME_EVENT:
                    return (0, n.jsx)(
                        U,
                        {
                            icon: T.q,
                            title: e.signal.title ?? "",
                            body: P.intl.string(S.default["347DBb"]),
                            position: a,
                        },
                        i,
                    );
                case M.Gy.SOUNDBOARD:
                    return (0, n.jsx)(G, { signal: e.signal, guildId: t.guildId, position: a }, i);
                default:
                    return null;
            }
        });
});
var $ = l(698269);
let V = a.memo(function (e) {
    let { videoLength: t, clip: l, onMouseDown: i } = e,
        { timeNotches: s, subNotches: r } = a.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                n = t / 6;
            e =
                n <= 1
                    ? 1
                    : n <= 2
                      ? 2
                      : n <= 5
                        ? 5
                        : n <= 10
                          ? 10
                          : n <= 15
                            ? 15
                            : n <= 20
                              ? 20
                              : n <= 30
                                ? 30
                                : 10 * Math.round(n / 10);
            for (let n = 0; n <= t; n += e) {
                let e = (n / t) * 100;
                l.push({ time: n, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let a = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    a.push({ position: l });
                }
            return { timeNotches: l, subNotches: a };
        }, [t]);
    return (0, n.jsx)("div", {
        className: $.ZX,
        onMouseDown: i,
        children: (0, n.jsxs)("div", {
            className: $.QY,
            children: [
                r.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: $.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, n.jsx)("div", { className: $.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                s.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: $.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, n.jsx)("div", { className: $.d9 }),
                                (0, n.jsxs)(o.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: $.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, n.jsx)(B, { clip: l, videoLength: t }),
            ],
        }),
    });
});
var F = l(445563),
    H = l(541151);
function K(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`;
}
function W(e) {
    let t = Math.floor(e / 60),
        l = P.intl.formatToPlainString(P.t.iXLF9W, { minutes: t }),
        n = P.intl.formatToPlainString(P.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function X(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: g,
            isPlaying: j,
            cropStart: b,
            cropEnd: C,
            cropDuration: E,
            setCropStart: A,
            setCropEnd: R,
            play: T,
            pause: L,
            subscribe: I,
            seek: O,
            clip: D,
            generateThumbnails: _,
            videoDimensions: M,
        } = (0, w.T)(),
        S = i(),
        [z, U] = a.useState(null),
        G = a.useRef(null),
        B = a.useRef(null),
        [$, X] = a.useState(!1),
        [Z, Y] = a.useState(null);
    a.useEffect(
        () =>
            I({
                onPlay: () => {
                    U(null), X(!1);
                },
            }),
        [I],
    );
    let { ref: q, width: Q = 0, height: J = 0 } = (0, x.Ay)(),
        ee = (0, c.bG)([v.A], () => v.A.windowSize());
    a.useMemo(() => {
        ee.width, ee.height;
        let e = q.current;
        null != e && Y(e.getBoundingClientRect());
    }, [ee.width, ee.height, Q, q, l]);
    let et = a.useCallback(
            (e, t) => {
                if (null == g) return;
                if (null == Z) return null;
                let l = (((0, r.clamp)(e, Z.left, Z.right) - Z.left) / Z.width) * g,
                    n = (0, r.clamp)(l, 0, g),
                    a = z;
                null == a && t && ((a = n <= b ? "start" : n >= C ? "end" : "playhead"), j && (L(), X(!0)), U(a)),
                    "start" === a ? A(n) : "end" === a ? R(n) : "playhead" === a && O((0, r.clamp)(n, b, C));
            },
            [g, Z, z, b, C, j, L, A, R, O],
        ),
        el = a.useCallback(
            (e) => {
                if (null == g) return;
                let t = (0, k.A)(g, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), A(b - t);
                        break;
                    case "ArrowRight":
                        (l = !0), A(b + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [g, A, b],
        ),
        en = a.useCallback(
            (e) => {
                if (null == g) return;
                let t = (0, k.A)(g, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), R(C - t);
                        break;
                    case "ArrowRight":
                        (l = !0), R(C + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [g, R, C],
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
            $ && T(), X(!1), U(null);
        }, [$, T]);
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
        if (null == M) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(J * (M.width / M.height));
        return { numberOfPreviews: Math.ceil(Q / e), timelinePreviewWidth: e };
    }, [J, Q, M]);
    a.useEffect(() => {
        if (0 === er || 0 === ec) return;
        let e = q.current;
        if (null == e) return;
        (e.height = J), (e.width = Q);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, Q, J);
        let l = [];
        for (let e = 0; e < er; e++) l.push((ec / Q) * g * e);
        return _(l, ec, J, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], ec * l, 0, ec, J), e[l].close();
        });
    }, [J, q, g, er, ec, _, Q]);
    let eo = S - b,
        eu = a.useCallback(() => {
            O(Math.max(b, S - 10));
        }, [b, S, O]),
        ed = a.useCallback(() => {
            O(Math.min(C, S + 10));
        }, [C, S, O]),
        em = a.useCallback(() => {
            j ? L() : T();
        }, [j, T, L]),
        eh = (b / g) * 100,
        ef = (1 - (g - C) / g) * 100,
        ep = {
            background: `linear-gradient(to right, var(--black-500) ${eh}%, transparent ${eh}%, transparent ${ef}%, var(--black-500) ${ef}%)`,
        };
    return (0, n.jsx)("div", {
        className: H.f4,
        children: (0, n.jsxs)("div", {
            className: H.fL,
            children: [
                (0, n.jsxs)("div", {
                    className: H.lx,
                    children: [
                        (0, n.jsx)("div", {
                            className: H.k2,
                            children: (0, n.jsx)("div", {
                                ref: B,
                                className: H.re,
                                children: (0, n.jsxs)(o.E, {
                                    variant: "text-sm/normal",
                                    className: H.g7,
                                    color: "text-muted",
                                    children: [K(eo), (0, n.jsx)("span", { className: H.xW, children: " / " }), K(E)],
                                }),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: H.s2,
                            children: [
                                (0, n.jsx)(u.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.q,
                                    onClick: eu,
                                    "aria-label": P.intl.string(F.default["dRVF+Z"]),
                                }),
                                (0, n.jsx)(u.K, {
                                    size: "md",
                                    icon: j ? h.E : m.u,
                                    onClick: em,
                                    "aria-label": P.intl.string(j ? P.t.ZcgDJX : P.t.RscU7I),
                                }),
                                (0, n.jsx)(u.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: f.i,
                                    onClick: ed,
                                    "aria-label": P.intl.string(F.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(N, { onMouseDown: ea, voiceAudioTracks: t, clipId: D.id, className: H.ou }),
                (0, n.jsx)(V, { onMouseDown: ea, videoLength: g, clip: D }),
                (0, n.jsx)("div", {
                    className: H.PH,
                    children: (0, n.jsxs)("div", {
                        className: s()(H.IO, { [H.Dg]: null != z }),
                        onMouseDown: ea,
                        children: [
                            (0, n.jsx)("canvas", { className: H.Ay, ref: q }),
                            (0, n.jsx)(p.vN, { children: (0, n.jsx)("div", { tabIndex: 0, ref: G, className: H.lG }) }),
                            (0, n.jsx)("div", { className: H.QT, style: ep }),
                            (0, n.jsxs)("div", {
                                className: H.Ws,
                                style: {
                                    left: null != g ? `${(b / g) * 100}%` : "0",
                                    right: null != g ? `${((g - C) / g) * 100}%` : "0",
                                },
                                children: [
                                    (0, n.jsx)(p.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: s()(H.uI, { [H.cB]: "start" === z }),
                                            onMouseDown: ea,
                                            onKeyDown: el,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": b,
                                            "aria-valuetext": W(b),
                                            "aria-valuemax": C - y.zj,
                                            "aria-label": P.intl.string(P.t["+BTvw8"]),
                                            children: (0, n.jsx)("div", { className: H.FV }),
                                        }),
                                    }),
                                    (0, n.jsx)(p.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: s()(H.H1, { [H.cB]: "end" === z }),
                                            onMouseDown: ea,
                                            onKeyDown: en,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": b + y.zj,
                                            "aria-valuenow": C,
                                            "aria-valuetext": W(C),
                                            "aria-valuemax": g,
                                            "aria-label": P.intl.string(P.t.bBgBYo),
                                            children: (0, n.jsx)("div", { className: H.kn }),
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
