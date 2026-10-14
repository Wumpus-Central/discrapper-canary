l.d(t, { A: () => e0 });
var a = l(477900),
    n = l(582128),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    o = l(793574),
    c = l(688810),
    u = l(256905),
    d = l(635793),
    m = l(164386);
function f() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: m.OC }),
            (0, a.jsx)("div", {
                className: m.f4,
                children: (0, a.jsxs)("div", {
                    className: m.fL,
                    children: [
                        (0, a.jsx)("div", { className: m.u }),
                        (0, a.jsx)("div", { className: m.ou }),
                        (0, a.jsx)("div", { className: m.PH }),
                    ],
                }),
            }),
        ],
    });
}
l(321073);
var h = l(503698),
    p = l.n(h),
    x = l(435558),
    v = l.n(x),
    g = l(194498),
    j = l(607470),
    b = l(176781),
    y = l(901127);
function C(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: p()(y.L, t),
        children: (0, a.jsx)(b.x, { size: "lg", color: "currentColor" }),
    });
}
var N = l(367974),
    E = l(376595),
    w = l(773503),
    k = l(362081);
let A = [],
    L = [];
function R() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, k.T)(),
        s = i.decision?.timestamp ?? 0,
        r = n.useMemo(() => new E.H(i.timeline ?? []), [i.timeline]),
        o = s - i.length,
        c = n.useCallback(
            (e) => {
                let t = 1e3 * v().round(e, 3);
                return r.getEventsAtTimestamp(o + t);
            },
            [r, o],
        ),
        [u, d] = n.useState(() => c(0));
    return (
        n.useEffect(
            () =>
                e({
                    onTimeUpdate: (e) => {
                        d(c(e));
                    },
                }),
            [e, c],
        ),
        (0, a.jsx)(w.A, {
            speakingUserIds: l ? u.speakingUserIds : A,
            activeSoundboards: t ? u.activeSoundboards : L,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var I = l(696016),
    M = l(933092),
    T = l(24468);
function D(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(I.gC.ALL)) return !1;
        else return !0;
    return e.includes(I.gC.APPLICATION) ? !l : e.includes(I.gC.VOICE) ? !a : !e.includes(I.gC.SOUNDBOARD) || !n;
}
function S(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: s } = e,
        r = n.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        o = n.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, a.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: r,
        src: i ?? void 0,
        muted: s,
        preload: "auto",
        className: T.R,
        onLoadedMetadata: o,
    });
}
function O(e) {
    let { overlay: t, cropFraming: l, frameAspectRatio: i, loop: s = !0, ref: r } = e,
        {
            cropStart: o,
            cropEnd: c,
            setVideoPlayerRef: u,
            videoURL: d,
            audioURL: m,
            applicationAudioEnabled: f,
            voiceAudioEnabled: h,
            soundboardAudioEnabled: v,
            clip: b,
        } = (0, k.T)(),
        y = n.useRef({}),
        E = n.useRef(null),
        w = n.useRef(!1),
        [A, L] = n.useState([]),
        O = n.useCallback(() => {
            let e = y.current.main;
            if (null == e) return;
            let t = (0, x.round)(e.currentTime, 3),
                l = (0, x.round)(o, 3);
            if (t >= (null != c ? (0, x.round)(c, 3) : (0, x.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(y.current)) null != e && (e.currentTime = o);
                return !0;
            }
        }, [o, c]),
        P = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(I.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(I.gC.VOICE) || l.label.includes(I.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            L(t);
        }, []),
        _ = n.useCallback(() => {
            for (let e of ((w.current = !0), O(), Object.values(y.current))) null != e && e.play();
        }, [O]),
        z = n.useCallback(() => {
            for (let e of Object.values(y.current)) null != e && e.pause();
        }, []);
    (0, g.A)(() => {
        if (w.current) {
            if (!s) {
                let e = y.current.main;
                if (null != e) {
                    let t = null != c ? (0, x.round)(c, 3) : (0, x.round)(e.duration, 3);
                    if ((0, x.round)(e.currentTime, 3) >= t) {
                        (z(), (w.current = !1));
                        return;
                    }
                }
            }
            O() && _();
        }
    });
    let $ = n.useCallback((e) => {
            for (let t of (y.current.main?.paused && (w.current = !1), Object.values(y.current)))
                null != t && (t.currentTime = e);
        }, []),
        U = n.useCallback(() => {
            y.current.main?.paused ? _() : z();
        }, [_, z]),
        G = n.useCallback((e) => {
            y.current.main = e;
        }, []),
        B = n.useCallback((e, t) => {
            y.current[t] = e;
        }, []);
    n.useImperativeHandle(r, () => {
        let e = { play: _, seek: $, pause: z, videoElement: y.current.main };
        return (u(e), e);
    }, [_, $, z, u]);
    let H = n.useCallback(() => {
        $(o);
    }, [$, o]);
    n.useLayoutEffect(() => {
        let e = y.current;
        return () => {
            for (let t of Object.values(e)) (0, N.A)(t);
        };
    }, []);
    let V = b.type === I.nQ.VOICE_CLIP,
        X = !0 === l && !V && null != i;
    return (n.useLayoutEffect(() => {
        let e = E.current;
        if (null == e) return;
        if (!X) {
            ((e.style.width = ""), (e.style.height = ""));
            return;
        }
        function t() {
            let e = E.current,
                t = y.current.main;
            null != e &&
                null != t &&
                ((e.style.width = ""),
                (e.style.height = ""),
                (e.style.width = `${t.clientWidth}px`),
                (e.style.height = `${t.clientHeight}px`));
        }
        t();
        let l = e.parentElement;
        if (null == l) return;
        let a = new ResizeObserver(t);
        return (a.observe(l), () => a.disconnect());
    }, [X, i]),
    null == d)
        ? null
        : (0, a.jsxs)("div", {
              ref: E,
              className: p()(M.DV, X && M.Ln),
              children: [
                  V
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("audio", { ref: G, src: d, muted: !0, preload: "auto" }),
                                (0, a.jsx)(C, { className: M.Ap }),
                            ],
                        })
                      : (0, a.jsx)(j.A, {
                            onClick: U,
                            className: p()(M.Ap, X && M.HU),
                            style: X ? { aspectRatio: i } : void 0,
                            ref: G,
                            src: d,
                            muted: D(":all", {
                                applicationAudioEnabled: f,
                                voiceAudioEnabled: h,
                                soundboardAudioEnabled: v,
                                isVoiceClip: V,
                            }),
                            preload: "auto",
                            onLoadedData: H,
                        }),
                  (0, a.jsx)(R, {}),
                  t,
                  (0, a.jsx)("audio", {
                      id: "ClipsPlayerAudioTrack:application",
                      src: m ?? void 0,
                      muted: D(":application", {
                          applicationAudioEnabled: f,
                          voiceAudioEnabled: h,
                          soundboardAudioEnabled: v,
                          isVoiceClip: V,
                      }),
                      className: T.R,
                      preload: "auto",
                      ref: (e) => B(e, "main:application"),
                      onLoadedMetadata: P,
                  }),
                  A.map((e) =>
                      (0, a.jsx)(
                          S,
                          {
                              setRef: B,
                              audioTrackLabel: e,
                              src: m,
                              muted: D(e, {
                                  applicationAudioEnabled: f,
                                  voiceAudioEnabled: h,
                                  soundboardAudioEnabled: v,
                                  isVoiceClip: V,
                              }),
                          },
                          e,
                      ),
                  ),
              ],
          });
}
function P(e, t) {
    let l = e / I.YM;
    return (t && (l /= I.iJ), l);
}
var _ = l(22745);
function z() {
    let { clip: e } = (0, k.T)();
    return "" !== e.thumbnail
        ? (0, a.jsx)("img", { className: _.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
}
var $ = l(17928),
    U = l(342952),
    G = l(834730),
    B = l(778712),
    H = l(429913),
    V = l(47167),
    X = l(713654),
    F = l(769015),
    W = l(145497),
    Z = l(734057),
    K = l(71393),
    Y = l(287809),
    Q = l(58703),
    J = l(403362),
    q = l(818433),
    ee = l(620828);
function et(e) {
    let { icon: t, label: l } = e;
    return (0, a.jsxs)("div", {
        className: ee.Ho,
        children: [
            null != t && (0, a.jsx)("div", { className: ee.t8, children: t }),
            (0, a.jsx)(G.E, { variant: "text-xs/normal", color: "text-subtle", className: ee.Mk, children: l }),
        ],
    });
}
function el() {
    let { clip: e } = (0, k.T)(),
        t = (0, H.h)(e.applicationId),
        l = (0, $.yK)([Y.default], () => e.users.map(Y.default.getUser).filter(J.Vq)),
        n = (0, $.bG)([K.A], () => (null != e.guildId ? K.A.getGuild(e.guildId) : null)),
        i = (0, $.bG)([Z.A], () => (null != e.channelId ? Z.A.getChannel(e.channelId) : null)),
        s = (0, V.Ay)(i),
        r = null != i ? (0, X.gU)(i, n) : null,
        o = t?.name ?? e.applicationName,
        c =
            null != i && null != r
                ? (0, a.jsx)(r, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, a.jsxs)("div", {
        className: ee.wx,
        children: [
            (0, a.jsx)(q.A, { variant: "text-md/medium", className: ee.DD }),
            (0, a.jsxs)("div", {
                className: ee.KW,
                children: [
                    null != o &&
                        "" !== o &&
                        (0, a.jsx)(et, {
                            icon: null != t ? (0, a.jsx)(F.A, { game: t, size: F.M.XXSMALL }) : void 0,
                            label: o,
                        }),
                    null != n && (0, a.jsx)(et, { icon: (0, a.jsx)(W.Ay, { guild: n, iconSize: 16 }), label: n.name }),
                    null != c && (0, a.jsx)(et, { icon: c, label: s ?? "" }),
                    (0, a.jsx)(et, { label: (0, Q.mk)(new Date(e.createdAt)) }),
                    l.length > 0 &&
                        (0, a.jsx)("div", {
                            className: ee.Ho,
                            children: (0, a.jsx)(U.A, { users: l, maxUsers: 10, size: B._3.SIZE_16 }),
                        }),
                ],
            }),
        ],
    });
}
var ea = l(973177);
let en = { [I.yz.ORIGINAL]: null, [I.yz.PORTRAIT_9_16]: 9 / 16, [I.yz.LANDSCAPE_16_9]: 16 / 9 };
function ei() {
    let { cropPreset: e, videoPlayerRef: t } = (0, k.T)(),
        l = n.useRef(null),
        i = n.useRef(null);
    return (
        n.useEffect(() => {
            let a = l.current;
            if (null == a) return;
            function n() {
                if (null == a) return;
                let l = a.parentElement,
                    n = i.current;
                if (null == l || null == n) return;
                let s = l.getBoundingClientRect(),
                    r = (t.current?.videoElement ?? l).getBoundingClientRect(),
                    o = r.left - s.left,
                    c = r.top - s.top,
                    u = en[e],
                    d = o,
                    m = c,
                    f = r.width,
                    h = r.height;
                (null != u &&
                    ((h = (f = Math.min(r.width, r.height * u)) / u),
                    (d = o + (r.width - f) / 2),
                    (m = c + (r.height - h) / 2)),
                    (n.style.left = `${d}px`),
                    (n.style.top = `${m}px`),
                    (n.style.width = `${f}px`),
                    (n.style.height = `${h}px`));
            }
            n();
            let s = new ResizeObserver(n);
            s.observe(a.parentElement ?? a);
            let r = t.current?.videoElement;
            return (
                null != r && s.observe(r),
                window.addEventListener("resize", n),
                () => {
                    (s.disconnect(), window.removeEventListener("resize", n));
                }
            );
        }, [e, t]),
        (0, a.jsx)("div", { ref: l, className: ea.pC, children: (0, a.jsx)("div", { ref: i, className: ea.E$ }) })
    );
}
var es = l(831453),
    er = l(607345);
let eo = [
    { key: "topStart", className: er.On },
    { key: "topEnd", className: er.zI },
    { key: "bottomEnd", className: er.TP },
    { key: "bottomStart", className: er.kb },
];
function ec(e) {
    let {
            label: t,
            position: l,
            rotationDeg: i,
            scale: s,
            minScale: o,
            maxScale: c,
            sizing: u,
            aspectRatio: d,
            resizable: m = !0,
            selected: f,
            visible: h,
            onSelect: v,
            onChange: g,
            children: j,
        } = e,
        b = n.useRef(null),
        y = n.useRef(null),
        C = n.useRef(null),
        N = n.useRef(l),
        E = n.useRef(i),
        w = n.useRef(s),
        A = n.useRef(d),
        L = n.useCallback(
            (e) => {
                let t,
                    l = y.current;
                if (null == l) return;
                let { x: a, y: n } = N.current;
                if (
                    ((l.style.left = `${e.left + a * e.width}px`),
                    (l.style.top = `${e.top + n * e.height}px`),
                    (l.style.transform = `translate(-50%, -50%) rotate(${E.current}deg)`),
                    "fixed" === u)
                ) {
                    ((t = w.current * e.width), (l.style.width = `${t}px`));
                    let a = A.current;
                    l.style.height = null != a && a > 0 ? `${t / a}px` : "auto";
                } else ((t = w.current * e.height), (l.style.fontSize = `${t}px`));
                l.style.setProperty("--clip-track-scale", `${t}px`);
            },
            [u],
        ),
        R = (function (e, t) {
            let { videoPlayerRef: l } = (0, k.T)(),
                a = n.useRef(null);
            return (
                n.useEffect(() => {
                    let n = e.current?.parentElement;
                    if (null == n) return;
                    function i() {
                        if (null == n) return;
                        let e = n.getBoundingClientRect(),
                            i = (l.current?.videoElement ?? n).getBoundingClientRect(),
                            s = { left: i.left - e.left, top: i.top - e.top, width: i.width, height: i.height };
                        ((a.current = s), t(s));
                    }
                    i();
                    let s = new ResizeObserver(i);
                    s.observe(n);
                    let r = l.current?.videoElement;
                    return (
                        null != r && s.observe(r),
                        window.addEventListener("resize", i),
                        () => {
                            (s.disconnect(), window.removeEventListener("resize", i));
                        }
                    );
                }, [e, t, l]),
                a
            );
        })(b, L);
    n.useEffect(() => {
        ((N.current = l), (E.current = i), (w.current = s), (A.current = d));
        let e = R.current;
        null != e && L(e);
    }, [l, i, s, d, L, R]);
    let M = n.useCallback(
            (e) => {
                let t = C.current,
                    l = R.current,
                    a = b.current?.getBoundingClientRect();
                if (null != t && null != l && null != a)
                    switch (t.mode) {
                        case "move":
                            g({
                                position: {
                                    x: (0, x.clamp)((e.clientX - a.left - l.left) / l.width - t.grabOffset.x, 0, 1),
                                    y: (0, x.clamp)((e.clientY - a.top - l.top) / l.height - t.grabOffset.y, 0, 1),
                                },
                            });
                            break;
                        case "scale": {
                            if (0 === t.startDistance) return;
                            let l = Math.hypot(e.clientX - t.centerX, e.clientY - t.centerY);
                            g({ scale: (0, x.clamp)((t.baseScale * l) / t.startDistance, o, c) });
                            break;
                        }
                        case "rotate": {
                            let l = eu(t.centerX, t.centerY, e.clientX, e.clientY);
                            g({ rotationDeg: (0, I.Ew)(t.baseRotationDeg + l - t.startAngleDeg) });
                        }
                    }
            },
            [g, o, c, R],
        ),
        T = n.useCallback(() => {
            C.current = null;
        }, []);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", M),
            document.addEventListener("mouseup", T),
            () => {
                (document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", T));
            }
        ),
        [M, T],
    );
    let D = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), t.preventDefault(), v(), y.current?.focus({ preventScroll: !0 }));
                let a = R.current,
                    n = b.current?.getBoundingClientRect();
                if (null == a || null == n || 0 === a.width || 0 === a.height) return;
                let r = n.left + a.left + l.x * a.width,
                    o = n.top + a.top + l.y * a.height;
                C.current = {
                    mode: e,
                    centerX: r,
                    centerY: o,
                    baseRotationDeg: i,
                    baseScale: s,
                    grabOffset: {
                        x: (t.clientX - n.left - a.left) / a.width - l.x,
                        y: (t.clientY - n.top - a.top) / a.height - l.y,
                    },
                    startDistance: Math.hypot(t.clientX - r, t.clientY - o),
                    startAngleDeg: eu(r, o, t.clientX, t.clientY),
                };
            },
            [v, l, i, s, R],
        ),
        S = n.useCallback(
            (e) => {
                if (e.altKey) {
                    let t = 0;
                    if ("ArrowLeft" === e.key) t = -1;
                    else {
                        if ("ArrowRight" !== e.key) return;
                        t = 1;
                    }
                    (e.preventDefault(), e.stopPropagation(), g({ rotationDeg: (0, I.Ew)(i + t * I.p4) }));
                    return;
                }
                let t = e.shiftKey ? 0.05 : 0.01,
                    a = 0,
                    n = 0;
                switch (e.key) {
                    case "ArrowLeft":
                        a = -t;
                        break;
                    case "ArrowRight":
                        a = t;
                        break;
                    case "ArrowUp":
                        n = -t;
                        break;
                    case "ArrowDown":
                        n = t;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(),
                    e.stopPropagation(),
                    g({ position: { x: (0, x.clamp)(l.x + a, 0, 1), y: (0, x.clamp)(l.y + n, 0, 1) } }));
            },
            [g, l, i],
        );
    return (0, a.jsx)("div", {
        ref: b,
        className: er.DW,
        children: (0, a.jsxs)(r.D, {
            innerRef: y,
            className: p()(er.aP, { [er.$A]: f }),
            style: { display: h ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: v,
            onMouseDown: D("move"),
            onKeyDown: S,
            children: [
                j,
                f &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { "aria-hidden": !0, className: er.t$ }),
                            (0, a.jsx)("div", {
                                "aria-hidden": !0,
                                className: er.oT,
                                onMouseDown: D("rotate"),
                                children: (0, a.jsx)(es.H, { size: "xxs", color: "currentColor" }),
                            }),
                            m &&
                                eo.map((e) => {
                                    let { key: t, className: l } = e;
                                    return (0, a.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: p()(er.ZV, l), onMouseDown: D("scale") },
                                        t,
                                    );
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function eu(e, t, l, a) {
    return (180 * Math.atan2(a - t, l - e)) / Math.PI;
}
var ed = l(245116),
    em = l(268378),
    ef = l(660183),
    eh = l(545052);
function ep(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: s } = (0, k.T)(),
        { updateImageTrackData: r } = (0, ed.fn)(),
        o = s(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: f, naturalHeight: h } = t.data,
        p = t.data.shadow ?? I.xy,
        x = t.data.shadowColor ?? I.pk,
        v = n.useCallback(
            (e) => {
                let { position: l, rotationDeg: a, scale: n } = e;
                r(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: a ?? e.rotationDeg,
                    widthFraction: n ?? e.widthFraction,
                }));
            },
            [r, t.id],
        ),
        g = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        j = I.EC[p],
        b =
            j > 0
                ? `drop-shadow(0 calc(${j * I.HA} * var(--clip-track-scale)) calc(${j} * var(--clip-track-scale)) ${x})`
                : void 0;
    return (0, a.jsx)(ec, {
        label: ef.intl.formatToPlainString(em.default.lZuIri, { fileName: t.data.fileName }),
        position: u,
        rotationDeg: d,
        scale: m,
        minScale: I.DX,
        maxScale: I.nS,
        sizing: "fixed",
        aspectRatio: f / h,
        selected: l,
        visible: g,
        onSelect: i,
        onChange: v,
        children: (0, a.jsx)("img", {
            className: eh.S,
            src: c,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            style: { filter: b },
        }),
    });
}
var ex = l(637526);
function ev(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: s } = (0, k.T)(),
        { updateTextTrackData: r } = (0, ed.fn)(),
        o = s(),
        { text: c, position: u, style: d } = t.data,
        m = t.data.rotationDeg ?? I.ad,
        f = n.useCallback(
            (e) => {
                let { position: l, rotationDeg: a, scale: n } = e;
                r(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: a ?? e.rotationDeg,
                    style: null != n ? { ...e.style, fontSize: n } : e.style,
                }));
            },
            [r, t.id],
        ),
        h = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        p = I.mO[d.strokeWidth];
    return (0, a.jsxs)(ec, {
        label: ef.intl.formatToPlainString(em.default.EDmwVf, { text: c }),
        position: u,
        rotationDeg: m,
        scale: d.fontSize,
        minScale: I.z2,
        maxScale: I.T7,
        sizing: "content",
        resizable: !1,
        selected: l,
        visible: h,
        onSelect: i,
        onChange: f,
        children: [
            p > 0 &&
                (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: ex.C,
                    style: {
                        color: d.strokeColor,
                        WebkitTextStrokeColor: d.strokeColor,
                        WebkitTextStrokeWidth: `${p}em`,
                    },
                    children: c,
                }),
            (0, a.jsx)("span", { className: ex.L, style: { color: d.color }, children: c }),
        ],
    });
}
var eg = l(702841),
    ej = l(408278),
    eb = l(461150),
    ey = l(782134),
    eC = l(113494),
    eN = l(898196),
    eE = l(559106),
    ew = l(765671),
    ek = l(531685);
(l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var eA = l(661531),
    eL = l(602853),
    eR = l(602674),
    eI = l(335416),
    eM = l(556250);
let eT = new Map(),
    eD = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: s, className: r, alwaysRenderContainer: o = !1 } = e,
            c = n.useRef(null),
            { ref: u, width: d, height: m } = (0, ew.Ay)(),
            [f, h] = n.useState(null),
            x = (0, eL.r)(eA.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(
            () => (
                (c.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    c.current?.terminate();
                }
            ),
            [],
        ),
        n.useEffect(() => {
            if (0 === d || 0 === i.length || null == c.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${d}`,
                l = eT.get(e);
            if (null != l) return void h(l.waveform);
            let a = c.current,
                n = !1;
            function s(t) {
                if (n) return;
                let { waveform: l, error: a } = t.data;
                null != a ? I.nx.error("Failed to load waveform:", a) : (eT.set(e, { waveform: l }), h(l));
            }
            return (
                a.addEventListener("message", s),
                (async function () {
                    try {
                        let e = (0, eR.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            s = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                (t.push(a), s.push(a.buffer));
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: d }, s);
                    } catch (e) {
                        n || I.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    ((n = !0), a.removeEventListener("message", s));
                }
            );
        }, [i, t, d]),
        n.useEffect(() => {
            if (null == u.current || null == f || (d ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = u.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / f.length,
                i = -(n * (eI.Jh.waveformBarWidth - 1));
            (t.clearRect(0, 0, l, a), (t.fillStyle = x));
            for (let e = 0; e < f.length; e++) {
                let l = f[e] * a,
                    s = e * n + i;
                t.fillRect(s, a, n - i, -l);
            }
        }, [x, d, u, m, f]),
        0 === i.length)
            ? o
                ? (0, a.jsx)("div", { className: p()(eM.k, r), onMouseDown: s })
                : null
            : (0, a.jsx)("div", {
                  className: p()(eM.k, r),
                  children: (0, a.jsx)("canvas", {
                      className: eM.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: s,
                  }),
              });
    });
var eS = l(683063),
    eO = l(565645),
    eP = l(562153),
    e_ = l(374816),
    ez = l(931540);
function e$(e, t) {
    return (0, e_.$b)(e, t.type, t.type === I.Gy.GAME_EVENT ? t.eventName : void 0);
}
function eU(e) {
    return { timestamp: e.peakMs, signal: { type: e.type, userId: e.userId, confidence: e.peakConfidence } };
}
function eG(e) {
    let { icon: t, title: l, body: n, position: i, compact: s } = e;
    return (0, a.jsx)(eS.u, {
        title: l,
        body: n,
        position: "top",
        children: (0, a.jsx)("div", {
            className: p()(ez.H, { [ez.c]: s }),
            style: { left: `${i}%` },
            children: (0, a.jsx)(t, { size: "refresh_sm", color: eA.A.colors.ICON_DEFAULT }),
        }),
    });
}
let eB = { [I.Gy.LAUGHTER]: em.default.bTC23D, [I.Gy.SHOUTING]: em.default["3gqpuo"] };
function eH(e) {
    let { icon: t, signal: l, guildId: n, position: i, compact: s } = e,
        r = (0, $.bG)([Y.default], () => Y.default.getUser(l.userId)),
        o = (0, eP.tx)(n, null, r);
    return null == l.emojiId && null == l.emojiName
        ? (0, a.jsx)(eG, { icon: t, title: l.name, body: o, position: i, compact: s })
        : (0, a.jsx)(eS.u, {
              title: l.name,
              body: o,
              position: "top",
              children: (0, a.jsx)("div", {
                  className: p()(ez.H, { [ez.c]: s }),
                  style: { left: `${i}%` },
                  children: (0, a.jsx)(eO.A, {
                      emojiId: l.emojiId ?? null,
                      emojiName: l.emojiName ?? null,
                      animated: l.emojiAnimated,
                      size: "reaction",
                  }),
              }),
          });
}
let eV = n.memo(function (e) {
    let { clip: t, videoLength: l, compact: i = !1 } = e,
        s = t.audioEvents,
        r = t.applicationId,
        o = n.useMemo(() => {
            let e = t.timeline.filter(
                (e) => !e.signal.hiddenFromTimeline && !(e.signal.type === I.Gy.SOUNDBOARD && !e.signal.playing),
            );
            return (
                null != s
                    ? (e = e.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== I.Gy.LAUGHTER && t !== I.Gy.SHOUTING;
                      })).push(...s.map(eU))
                    : (e = (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === I.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              a = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - a >= 2 && l.add(t[e - 1]), (a = e));
                          return e.filter((e) => e.signal.type !== I.Gy.LAUGHTER || l.has(e));
                      })(e)),
                (e = e.filter((e) => e$(r, e.signal) > 0)).sort((e, t) => e.timestamp - t.timestamp),
                e.sort((e, t) => e$(r, t.signal) - e$(r, e.signal)),
                e
            );
        }, [t.timeline, s, r]);
    function c(e) {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return a < 0 || a > l ? null : (a / l) * 100;
    }
    let u = [],
        d = [];
    for (let e of o) {
        let t = c(e.timestamp);
        null != t && (d.some((e) => Math.abs(e - t) < e_.Vd) || (u.push(e), d.push(t)));
    }
    return u.map(function (e) {
        var l, n;
        if (e.signal.hiddenFromTimeline) return null;
        let s = c(e.timestamp);
        if (null == s) return null;
        let o = ((l = e.signal), (0, e_.u6)(r, l.type, l.type === I.Gy.GAME_EVENT ? l.eventName : void 0));
        if (null == o) return null;
        let u = `${e.timestamp}-${e.signal.type}`;
        switch (e.signal.type) {
            case I.Gy.LAUGHTER:
            case I.Gy.SHOUTING:
                return (0, a.jsx)(
                    eG,
                    {
                        icon: o,
                        title: ef.intl.string(eB[e.signal.type]),
                        body: ef.intl.string(em.default["ry+jxm"]),
                        position: s,
                        compact: i,
                    },
                    u,
                );
            case I.Gy.GAME_EVENT:
                return (0, a.jsx)(
                    eG,
                    {
                        icon: o,
                        title:
                            ((n = e.signal),
                            (0, e_.PZ)(r, n.type, n.type === I.Gy.GAME_EVENT ? n.eventName : void 0) ?? ""),
                        body: ef.intl.string(em.default["347DBb"]),
                        position: s,
                        compact: i,
                    },
                    `${u}-${e.signal.eventName ?? ""}`,
                );
            case I.Gy.SOUNDBOARD:
                if (!e.signal.playing) return null;
                return (0, a.jsx)(eH, { icon: o, signal: e.signal, guildId: t.guildId, position: s, compact: i }, u);
            default:
                return null;
        }
    });
});
var eX = l(590936);
let eF = n.memo(function (e) {
    let { videoLength: t, clip: l, onMouseDown: i, noBottomMargin: s = !1, compact: r = !1 } = e,
        { timeNotches: o, subNotches: c } = n.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                a = t / 6;
            e =
                a <= 1
                    ? 1
                    : a <= 2
                      ? 2
                      : a <= 5
                        ? 5
                        : a <= 10
                          ? 10
                          : a <= 15
                            ? 15
                            : a <= 20
                              ? 20
                              : a <= 30
                                ? 30
                                : 10 * Math.round(a / 10);
            for (let a = 0; a <= t; a += e) {
                let e = (a / t) * 100;
                l.push({ time: a, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let n = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    n.push({ position: l });
                }
            return { timeNotches: l, subNotches: n };
        }, [t]);
    return (0, a.jsx)("div", {
        className: p()(eX.ZX, { [eX.dZ]: s, [eX.oE]: r }),
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: eX.QY,
            children: [
                c.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eX.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eX.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                o.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eX.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eX.d9 }),
                                (0, a.jsxs)(G.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eX.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(eV, { clip: l, videoLength: t, compact: r }),
            ],
        }),
    });
});
var eW = l(591246);
function eZ(e) {
    let {
            label: t,
            text: l,
            color: i,
            startSec: s,
            endSec: o,
            totalDurationSec: c,
            selected: u,
            onSelect: d,
            onChangeRange: m,
        } = e,
        f = n.useRef(null),
        h = n.useRef(null),
        [v, g] = n.useState(null),
        j = n.useCallback(() => {
            let e = f.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        b = n.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * j();
                if ("start" === t.mode) m((0, x.clamp)(t.initialStart + l, 0, t.initialEnd - I.Cx), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, x.clamp)(t.initialEnd + l, t.initialStart + I.Cx, c);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        a = (0, x.clamp)(t.initialStart + l, 0, c - e);
                    m(a, a + e);
                }
            },
            [j, m, c],
        ),
        y = n.useCallback(() => {
            ((h.current = null), g(null));
        }, []);
    n.useEffect(() => {
        if (null != v)
            return (
                document.addEventListener("mousemove", b),
                document.addEventListener("mouseup", y),
                () => {
                    (document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", y));
                }
            );
    }, [v, b, y]);
    let C = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(),
                    d(),
                    (h.current = { mode: e, clientX: t.clientX, initialStart: s, initialEnd: o }),
                    g(e));
            },
            [d, s, o],
        ),
        N = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = o - s,
                    a = !1,
                    n = s;
                ("ArrowLeft" === e.key
                    ? ((a = !0), (n = (0, x.clamp)(s - t, 0, c - l)))
                    : "ArrowRight" === e.key && ((a = !0), (n = (0, x.clamp)(s + t, 0, c - l))),
                    a && (e.preventDefault(), e.stopPropagation(), m(n, n + l)));
            },
            [s, o, c, m],
        ),
        E = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = s;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, x.clamp)(s - t, 0, o - I.Cx)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, x.clamp)(s + t, 0, o - I.Cx))),
                    l && (e.preventDefault(), e.stopPropagation(), m(a, o)));
            },
            [s, o, m],
        ),
        w = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = o;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, x.clamp)(o - t, s + I.Cx, c)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, x.clamp)(o + t, s + I.Cx, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, a)));
            },
            [s, o, c, m],
        ),
        k = 0 === c ? 0 : (s / c) * 100,
        A = 0 === c ? 0 : ((o - s) / c) * 100;
    return (0, a.jsx)("div", {
        className: eW.nM,
        children: (0, a.jsxs)("div", {
            ref: f,
            className: eW.hz,
            children: [
                (0, a.jsx)(eE.vN, {
                    children: (0, a.jsx)(r.D, {
                        className: p()(eW.u4, { [eW.jX]: u }),
                        style: { left: `${k}%`, width: `${A}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: N,
                        "aria-label": t,
                        children: (0, a.jsx)("div", {
                            className: eW.Kq,
                            children: (0, a.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: eW.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, a.jsx)(eE.vN, {
                    children: (0, a.jsx)("button", {
                        className: eW.YQ,
                        style: { left: `${k}%` },
                        onMouseDown: C("start"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": o - I.Cx,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eW.gt }),
                    }),
                }),
                (0, a.jsx)(eE.vN, {
                    children: (0, a.jsx)("button", {
                        className: eW.JZ,
                        style: { left: `${k + A}%` },
                        onMouseDown: C("end"),
                        onKeyDown: w,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + I.Cx,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eW.gt }),
                    }),
                }),
            ],
        }),
    });
}
var eK = l(711127),
    eY = l(503535);
function eQ(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`);
}
function eJ(e) {
    let t = Math.floor(e / 60),
        l = ef.intl.formatToPlainString(ef.t.iXLF9W, { minutes: t }),
        a = ef.intl.formatToPlainString(ef.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function eq(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: s,
            isPlaying: r,
            cropStart: o,
            cropEnd: c,
            cropDuration: u,
            setCropStart: d,
            setCropEnd: m,
            play: f,
            pause: h,
            subscribe: v,
            seek: g,
            clip: j,
            generateThumbnails: b,
            videoDimensions: y,
        } = (0, k.T)(),
        { tracks: C, selectedTrackId: N, setSelectedTrackId: E, updateTrackRange: w } = (0, ed.fn)(),
        A = i(),
        [L, R] = n.useState(null),
        M = n.useRef(null),
        T = n.useRef(null),
        [D, S] = n.useState(!1),
        [O, _] = n.useState(null);
    n.useEffect(
        () =>
            v({
                onPlay: () => {
                    (R(null), S(!1));
                },
            }),
        [v],
    );
    let { ref: z, width: $ = 0, height: U = 0 } = (0, ew.Ay)(),
        B = (0, eg.bG)([ek.A], () => ek.A.windowSize()),
        H = n.useRef(null),
        V = n.useCallback(() => {
            let e = z.current;
            null != e && _(e.getBoundingClientRect());
        }, [z]);
    (n.useMemo(() => {
        (B.width, B.height, V());
    }, [B.width, B.height, $, l, V]),
        n.useEffect(() => {
            let e = H.current;
            if (null != e) return (e.addEventListener("scroll", V), () => e.removeEventListener("scroll", V));
        }, [V]));
    let X = n.useCallback(
            (e, t) => {
                if (null == s || null == O) return;
                let l = (((0, x.clamp)(e, O.left, O.right) - O.left) / O.width) * s,
                    a = (0, x.clamp)(l, 0, s),
                    n = L;
                (null == n && t && ((n = "playhead"), r && (h(), S(!0)), R(n)),
                    "start" === n ? d(a) : "end" === n ? m(a) : "playhead" === n && g((0, x.clamp)(a, o, c)));
            },
            [s, O, L, o, c, r, h, d, m, g],
        ),
        F = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = P(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        ((l = !0), d(o - t));
                        break;
                    case "ArrowRight":
                        ((l = !0), d(o + t));
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, d, o],
        ),
        W = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = P(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        ((l = !0), m(c - t));
                        break;
                    case "ArrowRight":
                        ((l = !0), m(c + t));
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, m, c],
        ),
        Z = n.useCallback(
            (e) => {
                X(e.clientX, !0);
            },
            [X],
        ),
        K = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), r && (h(), S(!0)), R(e));
            },
            [r, h],
        ),
        Y = n.useCallback(
            (e) => {
                X(e.clientX, !1);
            },
            [X],
        ),
        Q = n.useCallback(() => {
            (D && f(), S(!1), R(null));
        }, [D, f]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", Y),
            document.addEventListener("mouseup", Q),
            () => {
                (document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", Q));
            }
        ),
        [Y, Q],
    );
    let { numberOfPreviews: J, timelinePreviewWidth: q } = n.useMemo(() => {
        if (null == y) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(U * (y.width / y.height));
        return { numberOfPreviews: Math.ceil($ / e), timelinePreviewWidth: e };
    }, [U, $, y]);
    n.useEffect(() => {
        if (0 === J || 0 === q) return;
        let e = z.current;
        if (null == e) return;
        ((e.height = U), (e.width = $));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, $, U));
        let l = [];
        for (let e = 0; e < J; e++) l.push((q / $) * s * e);
        return b(l, q, U, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], q * l, 0, q, U), e[l].close());
        });
    }, [U, z, s, J, q, b, $]);
    let ee = A - o,
        et = n.useCallback(() => {
            g(Math.max(o, A - 10));
        }, [o, A, g]),
        el = n.useCallback(() => {
            g(Math.min(c, A + 10));
        }, [c, A, g]),
        ea = n.useCallback(() => {
            r ? h() : f();
        }, [r, f, h]),
        en = (o / s) * 100,
        ei = (1 - (s - c) / s) * 100,
        es = {
            background: `linear-gradient(to right, var(--black-500) ${en}%, transparent ${en}%, transparent ${ei}%, var(--black-500) ${ei}%)`,
        };
    return (0, a.jsxs)("div", {
        className: eY.f4,
        children: [
            (0, a.jsx)("div", { className: eY.qs }),
            (0, a.jsxs)("div", {
                className: eY.lx,
                children: [
                    (0, a.jsx)("div", {
                        className: eY.k2,
                        children: (0, a.jsx)("div", {
                            ref: T,
                            className: eY.re,
                            children: (0, a.jsxs)(G.E, {
                                variant: "text-xs/medium",
                                className: eY.g7,
                                color: "text-muted",
                                children: [
                                    (0, a.jsx)("span", { className: eY.$k, children: eQ(ee) }),
                                    (0, a.jsx)("span", { className: eY.xW, children: " / " }),
                                    eQ(u),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: eY.s2,
                        children: [
                            (0, a.jsx)(ej.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eb.q,
                                onClick: et,
                                "aria-label": ef.intl.string(eK.default["dRVF+Z"]),
                            }),
                            (0, a.jsx)(ej.K, {
                                size: "sm",
                                icon: r ? eC.PauseIcon : ey.PlayIcon,
                                onClick: ea,
                                "aria-label": ef.intl.string(r ? ef.t.ZcgDJX : ef.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, a.jsx)(ej.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eN.i,
                                onClick: el,
                                "aria-label": ef.intl.string(eK.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eY.fL,
                ref: H,
                children: [
                    (0, a.jsx)(eF, { onMouseDown: Z, videoLength: s, clip: j, noBottomMargin: !0, compact: !0 }),
                    (0, a.jsx)(eD, {
                        onMouseDown: Z,
                        voiceAudioTracks: t,
                        clipId: j.id,
                        className: eY.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: eY.iI,
                        children: (0, a.jsxs)("div", {
                            className: eY.Qp,
                            children: [
                                (0, a.jsx)("div", { className: eY.bd }),
                                (0, a.jsx)("div", {
                                    className: eY.PH,
                                    children: (0, a.jsxs)("div", {
                                        className: p()(eY.IO, { [eY.Dg]: null != L }),
                                        onMouseDown: Z,
                                        children: [
                                            (0, a.jsx)("canvas", { className: eY.Ay, ref: z }),
                                            (0, a.jsx)(eE.vN, {
                                                children: (0, a.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: M,
                                                    className: eY.lG,
                                                    children: (0, a.jsx)("svg", {
                                                        className: eY.$6,
                                                        width: "10",
                                                        height: "7.5",
                                                        viewBox: "0 0 8 6",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M0 0.999999C0 0.447714 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V2.5998C8 2.9209 7.8458 3.22248 7.58549 3.41048L4.58549 5.57715C4.23598 5.82957 3.76402 5.82957 3.41451 5.57715L0.41451 3.41048C0.154198 3.22248 0 2.9209 0 2.5998V0.999999Z",
                                                            fill: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)("div", { className: eY.QT, style: es }),
                                            (0, a.jsxs)("div", {
                                                className: eY.Ws,
                                                style: {
                                                    left: null != s ? `${(o / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, a.jsx)(eE.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eY.uI,
                                                            onMouseDown: K("start"),
                                                            onKeyDown: F,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": eJ(o),
                                                            "aria-valuemax": c - I.zj,
                                                            "aria-label": ef.intl.string(ef.t["+BTvw8"]),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eY.FV }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eY.lm,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, a.jsx)("path", {
                                                                            d: "M0 48C1.93283e-07 52.4183 3.58172 56 8 56H0V48Z",
                                                                        }),
                                                                        (0, a.jsx)("path", {
                                                                            d: "M8 0C3.58172 0 0 3.58172 0 8V0H8Z",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, a.jsx)(eE.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eY.H1,
                                                            onMouseDown: K("end"),
                                                            onKeyDown: W,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + I.zj,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": eJ(c),
                                                            "aria-valuemax": s,
                                                            "aria-label": ef.intl.string(ef.t.bBgBYo),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eY.kn }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eY.mN,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, a.jsx)("path", {
                                                                            d: "M8 48C8 52.4183 4.41828 56 0 56H8V48Z",
                                                                        }),
                                                                        (0, a.jsx)("path", {
                                                                            d: "M0 0C4.41828 0 8 3.58172 8 8V0H0Z",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                C.map((e) =>
                                    (0, a.jsx)(
                                        eZ,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case I.Me.TEXT:
                                                        return ef.intl.string(em.default.WvkbtB);
                                                    case I.Me.IMAGE:
                                                        return ef.intl.string(em.default.heHHUW);
                                                    default:
                                                        return "";
                                                }
                                            })(e.type),
                                            text: (function (e) {
                                                switch (e.type) {
                                                    case I.Me.TEXT:
                                                        return e.data.text;
                                                    case I.Me.IMAGE:
                                                        return e.data.fileName;
                                                    default:
                                                        return "";
                                                }
                                            })(e),
                                            color: I.mY[e.type],
                                            startSec: e.startSec,
                                            endSec: e.endSec,
                                            totalDurationSec: s,
                                            selected: N === e.id,
                                            onSelect: () => E(e.id),
                                            onChangeRange: (t, l) => w(e.id, t, l),
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
function e0(e) {
    let { transitionState: t } = e,
        {
            cropStart: l,
            cropEnd: m,
            videoPlayerRef: h,
            videoURL: p,
            audioTracks: x,
            clip: v,
            activeTool: g,
            cropPreset: j,
            videoDimensions: b,
        } = (0, k.T)(),
        { analyticsLocations: y } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: C, selectedTrackId: N, setSelectedTrackId: E, removeTrack: w } = (0, ed.fn)(),
        A = v.type === I.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!A) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            if ("Delete" === e.key) {
                null != N && (e.stopPropagation(), e.preventDefault(), w(N));
                return;
            }
            let t = h.current;
            if (null == t) return;
            let a = h.current?.videoElement;
            if (null == a) return;
            let n = P(a.duration, e.shiftKey),
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
    }, [h, A, v.type, l, m, N, w]);
    let L = n.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        R = n.useCallback(() => {
            (0, u.R)(
                {
                    items: [{ type: "IMAGE", url: v.thumbnail, proxyUrl: v.thumbnail, alt: v.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [v.thumbnail, v.name]);
    if (A)
        return (0, a.jsxs)("div", {
            className: ea.OJ,
            children: [
                (0, a.jsx)(z, {}),
                t !== s.ip.ENTERED
                    ? (0, a.jsx)(f, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(el, {}),
                              (0, a.jsx)("div", {
                                  className: M.zT,
                                  children: (0, a.jsx)(r.D, {
                                      className: M.xS,
                                      onClick: R,
                                      children: (0, a.jsx)("img", {
                                          className: M.V_,
                                          src: v.thumbnail,
                                          alt: v.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let T = null == p || t !== s.ip.ENTERED,
        D = v.type === I.nQ.VOICE_CLIP,
        S = g === d.Y.CROP,
        _ = null != b ? b.width / b.height : null,
        $ = S
            ? _
            : (function (e, t) {
                  switch (e) {
                      case I.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case I.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case I.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(j, _),
        U = null;
    return (
        (U =
            S && !D
                ? (0, a.jsx)(ei, {})
                : C.map((e) => {
                      switch (e.type) {
                          case I.Me.TEXT:
                              return (0, a.jsx)(ev, { track: e, selected: e.id === N, onSelect: () => E(e.id) }, e.id);
                          case I.Me.IMAGE:
                              return (0, a.jsx)(ep, { track: e, selected: e.id === N, onSelect: () => E(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, a.jsx)(c.f5, {
            value: y,
            children: (0, a.jsxs)("div", {
                className: ea.OJ,
                children: [
                    (0, a.jsx)(z, {}),
                    (0, a.jsx)("div", {
                        className: ea.zT,
                        children: T
                            ? (0, a.jsx)(f, {})
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(el, {}),
                                      (0, a.jsx)("div", {
                                          className: ea.x3,
                                          children: (0, a.jsx)(O, {
                                              ref: h,
                                              cropFraming: !D,
                                              frameAspectRatio: $,
                                              overlay: U,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, a.jsx)("div", {
                                          className: ea.fL,
                                          children: (0, a.jsx)(eq, { transitionState: t, voiceAudioTracks: L }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}
