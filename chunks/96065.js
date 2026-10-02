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
function h() {
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
var f = l(503698),
    p = l.n(f),
    x = l(435558),
    v = l.n(x),
    g = l(194498),
    C = l(607470),
    y = l(176781),
    j = l(901127);
function b(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: p()(j.L, t),
        children: (0, a.jsx)(y.x, { size: "lg", color: "currentColor" }),
    });
}
var w = l(367974),
    E = l(376595),
    N = l(773503),
    k = l(362081);
let A = [],
    I = [];
function L() {
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
        (0, a.jsx)(N.A, {
            speakingUserIds: l ? u.speakingUserIds : A,
            activeSoundboards: t ? u.activeSoundboards : I,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var M = l(696016),
    R = l(933092),
    T = l(24468);
function D(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(M.gC.ALL)) return !1;
        else return !0;
    return e.includes(M.gC.APPLICATION) ? !l : e.includes(M.gC.VOICE) ? !a : !e.includes(M.gC.SOUNDBOARD) || !n;
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
let _ = n.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: s, loop: r = !0 } = e,
        {
            cropStart: o,
            cropEnd: c,
            setVideoPlayerRef: u,
            videoURL: d,
            audioURL: m,
            applicationAudioEnabled: h,
            voiceAudioEnabled: f,
            soundboardAudioEnabled: v,
            clip: y,
        } = (0, k.T)(),
        j = n.useRef({}),
        E = n.useRef(null),
        N = n.useRef(!1),
        [A, I] = n.useState([]),
        _ = n.useCallback(() => {
            let e = j.current.main;
            if (null == e) return;
            let t = (0, x.round)(e.currentTime, 3),
                l = (0, x.round)(o, 3);
            if (t >= (null != c ? (0, x.round)(c, 3) : (0, x.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(j.current)) null != e && (e.currentTime = o);
                return !0;
            }
        }, [o, c]),
        O = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(M.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(M.gC.VOICE) || l.label.includes(M.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            I(t);
        }, []),
        P = n.useCallback(() => {
            for (let e of ((N.current = !0), _(), Object.values(j.current))) null != e && e.play();
        }, [_]),
        G = n.useCallback(() => {
            for (let e of Object.values(j.current)) null != e && e.pause();
        }, []);
    (0, g.A)(() => {
        if (N.current) {
            if (!r) {
                let e = j.current.main;
                if (null != e) {
                    let t = null != c ? (0, x.round)(c, 3) : (0, x.round)(e.duration, 3);
                    if ((0, x.round)(e.currentTime, 3) >= t) {
                        (G(), (N.current = !1));
                        return;
                    }
                }
            }
            _() && P();
        }
    });
    let U = n.useCallback((e) => {
            for (let t of (j.current.main?.paused && (N.current = !1), Object.values(j.current)))
                null != t && (t.currentTime = e);
        }, []),
        B = n.useCallback(() => {
            j.current.main?.paused ? P() : G();
        }, [P, G]),
        K = n.useCallback((e) => {
            j.current.main = e;
        }, []),
        z = n.useCallback((e, t) => {
            j.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: P, seek: U, pause: G, videoElement: j.current.main };
        return (u(e), e);
    }, [P, U, G, u]);
    let $ = n.useCallback(() => {
        U(o);
    }, [U, o]);
    n.useLayoutEffect(() => {
        let e = j.current;
        return () => {
            for (let t of Object.values(e)) (0, w.A)(t);
        };
    }, []);
    let H = y.type === M.nQ.VOICE_CLIP,
        F = !0 === i && !H && null != s;
    return (n.useLayoutEffect(() => {
        let e = E.current;
        if (null == e) return;
        if (!F) {
            ((e.style.width = ""), (e.style.height = ""));
            return;
        }
        function t() {
            let e = E.current,
                t = j.current.main;
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
    }, [F, s]),
    null == d)
        ? null
        : (0, a.jsxs)("div", {
              ref: E,
              className: p()(R.DV, F && R.Ln),
              children: [
                  H
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("audio", { ref: K, src: d, muted: !0, preload: "auto" }),
                                (0, a.jsx)(b, { className: R.Ap }),
                            ],
                        })
                      : (0, a.jsx)(C.A, {
                            onClick: B,
                            className: p()(R.Ap, F && R.HU),
                            style: F ? { aspectRatio: s } : void 0,
                            ref: K,
                            src: d,
                            muted: D(":all", {
                                applicationAudioEnabled: h,
                                voiceAudioEnabled: f,
                                soundboardAudioEnabled: v,
                                isVoiceClip: H,
                            }),
                            preload: "auto",
                            onLoadedData: $,
                        }),
                  (0, a.jsx)(L, {}),
                  l,
                  (0, a.jsx)("audio", {
                      id: "ClipsPlayerAudioTrack:application",
                      src: m ?? void 0,
                      muted: D(":application", {
                          applicationAudioEnabled: h,
                          voiceAudioEnabled: f,
                          soundboardAudioEnabled: v,
                          isVoiceClip: H,
                      }),
                      className: T.R,
                      preload: "auto",
                      ref: (e) => z(e, "main:application"),
                      onLoadedMetadata: O,
                  }),
                  A.map((e) =>
                      (0, a.jsx)(
                          S,
                          {
                              setRef: z,
                              audioTrackLabel: e,
                              src: m,
                              muted: D(e, {
                                  applicationAudioEnabled: h,
                                  voiceAudioEnabled: f,
                                  soundboardAudioEnabled: v,
                                  isVoiceClip: H,
                              }),
                          },
                          e,
                      ),
                  ),
              ],
          });
});
function O(e, t) {
    let l = e / M.YM;
    return (t && (l /= M.iJ), l);
}
var P = l(22745);
function G() {
    let { clip: e } = (0, k.T)();
    return "" !== e.thumbnail
        ? (0, a.jsx)("img", { className: P.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
}
var U = l(17928),
    B = l(342952),
    K = l(834730),
    z = l(778712),
    $ = l(429913),
    H = l(47167),
    F = l(713654),
    V = l(769015),
    X = l(145497),
    Z = l(734057),
    W = l(71393),
    q = l(287809),
    Y = l(58703),
    J = l(403362),
    Q = l(818433),
    ee = l(620828);
function et(e) {
    let { icon: t, label: l } = e;
    return (0, a.jsxs)("div", {
        className: ee.Ho,
        children: [
            null != t && (0, a.jsx)("div", { className: ee.t8, children: t }),
            (0, a.jsx)(K.E, { variant: "text-xs/normal", color: "text-subtle", className: ee.Mk, children: l }),
        ],
    });
}
function el() {
    let { clip: e } = (0, k.T)(),
        t = (0, $.h)(e.applicationId),
        l = (0, U.yK)([q.default], () => e.users.map(q.default.getUser).filter(J.Vq)),
        n = (0, U.bG)([W.A], () => (null != e.guildId ? W.A.getGuild(e.guildId) : null)),
        i = (0, U.bG)([Z.A], () => (null != e.channelId ? Z.A.getChannel(e.channelId) : null)),
        s = (0, H.Ay)(i),
        r = null != i ? (0, F.gU)(i, n) : null,
        o = t?.name ?? e.applicationName,
        c =
            null != i && null != r
                ? (0, a.jsx)(r, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, a.jsxs)("div", {
        className: ee.wx,
        children: [
            (0, a.jsx)(Q.A, { variant: "text-md/medium", className: ee.DD }),
            (0, a.jsxs)("div", {
                className: ee.KW,
                children: [
                    null != o &&
                        "" !== o &&
                        (0, a.jsx)(et, {
                            icon: null != t ? (0, a.jsx)(V.A, { game: t, size: V.M.XXSMALL }) : void 0,
                            label: o,
                        }),
                    null != n && (0, a.jsx)(et, { icon: (0, a.jsx)(X.Ay, { guild: n, iconSize: 16 }), label: n.name }),
                    null != c && (0, a.jsx)(et, { icon: c, label: s ?? "" }),
                    (0, a.jsx)(et, { label: (0, Y.mk)(new Date(e.createdAt)) }),
                    l.length > 0 &&
                        (0, a.jsx)("div", {
                            className: ee.Ho,
                            children: (0, a.jsx)(B.A, { users: l, maxUsers: 10, size: z._3.SIZE_16 }),
                        }),
                ],
            }),
        ],
    });
}
var ea = l(973177);
let en = { [M.yz.ORIGINAL]: null, [M.yz.PORTRAIT_9_16]: 9 / 16, [M.yz.LANDSCAPE_16_9]: 16 / 9 };
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
                    h = r.width,
                    f = r.height;
                (null != u &&
                    ((f = (h = Math.min(r.width, r.height * u)) / u),
                    (d = o + (r.width - h) / 2),
                    (m = c + (r.height - f) / 2)),
                    (n.style.left = `${d}px`),
                    (n.style.top = `${m}px`),
                    (n.style.width = `${h}px`),
                    (n.style.height = `${f}px`));
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
            selected: h,
            visible: f,
            onSelect: v,
            onChange: g,
            children: C,
        } = e,
        y = n.useRef(null),
        j = n.useRef(null),
        b = n.useRef(null),
        w = n.useRef(l),
        E = n.useRef(i),
        N = n.useRef(s),
        A = n.useRef(d),
        I = n.useCallback(
            (e) => {
                let t,
                    l = j.current;
                if (null == l) return;
                let { x: a, y: n } = w.current;
                if (
                    ((l.style.left = `${e.left + a * e.width}px`),
                    (l.style.top = `${e.top + n * e.height}px`),
                    (l.style.transform = `translate(-50%, -50%) rotate(${E.current}deg)`),
                    "fixed" === u)
                ) {
                    ((t = N.current * e.width), (l.style.width = `${t}px`));
                    let a = A.current;
                    l.style.height = null != a && a > 0 ? `${t / a}px` : "auto";
                } else ((t = N.current * e.height), (l.style.fontSize = `${t}px`));
                l.style.setProperty("--clip-track-scale", `${t}px`);
            },
            [u],
        ),
        L = (function (e, t) {
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
        })(y, I);
    n.useEffect(() => {
        ((w.current = l), (E.current = i), (N.current = s), (A.current = d));
        let e = L.current;
        null != e && I(e);
    }, [l, i, s, d, I, L]);
    let R = n.useCallback(
            (e) => {
                let t = b.current,
                    l = L.current,
                    a = y.current?.getBoundingClientRect();
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
                            g({ rotationDeg: (0, M.Ew)(t.baseRotationDeg + l - t.startAngleDeg) });
                        }
                    }
            },
            [g, o, c, L],
        ),
        T = n.useCallback(() => {
            b.current = null;
        }, []);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", R),
            document.addEventListener("mouseup", T),
            () => {
                (document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", T));
            }
        ),
        [R, T],
    );
    let D = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), t.preventDefault(), v(), j.current?.focus({ preventScroll: !0 }));
                let a = L.current,
                    n = y.current?.getBoundingClientRect();
                if (null == a || null == n || 0 === a.width || 0 === a.height) return;
                let r = n.left + a.left + l.x * a.width,
                    o = n.top + a.top + l.y * a.height;
                b.current = {
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
            [v, l, i, s, L],
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
                    (e.preventDefault(), e.stopPropagation(), g({ rotationDeg: (0, M.Ew)(i + t * M.p4) }));
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
        ref: y,
        className: er.DW,
        children: (0, a.jsxs)(r.D, {
            innerRef: j,
            className: p()(er.aP, { [er.$A]: h }),
            style: { display: f ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: v,
            onMouseDown: D("move"),
            onKeyDown: S,
            children: [
                C,
                h &&
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
    eh = l(375708),
    ef = l(545052);
function ep(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: s } = (0, k.T)(),
        { updateImageTrackData: r } = (0, ed.fn)(),
        o = s(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: h, naturalHeight: f } = t.data,
        p = t.data.shadow ?? M.xy,
        x = t.data.shadowColor ?? M.pk,
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
        C = M.EC[p],
        y =
            C > 0
                ? `drop-shadow(0 calc(${C * M.HA} * var(--clip-track-scale)) calc(${C} * var(--clip-track-scale)) ${x})`
                : void 0;
    return (0, a.jsx)(ec, {
        label: eh.intl.formatToPlainString(em.default.lZuIri, { fileName: t.data.fileName }),
        position: u,
        rotationDeg: d,
        scale: m,
        minScale: M.DX,
        maxScale: M.nS,
        sizing: "fixed",
        aspectRatio: h / f,
        selected: l,
        visible: g,
        onSelect: i,
        onChange: v,
        children: (0, a.jsx)("img", {
            className: ef.S,
            src: c,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            style: { filter: y },
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
        m = t.data.rotationDeg ?? M.ad,
        h = n.useCallback(
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
        f = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        p = M.mO[d.strokeWidth];
    return (0, a.jsxs)(ec, {
        label: eh.intl.formatToPlainString(em.default.EDmwVf, { text: c }),
        position: u,
        rotationDeg: m,
        scale: d.fontSize,
        minScale: M.z2,
        maxScale: M.T7,
        sizing: "content",
        resizable: !1,
        selected: l,
        visible: f,
        onSelect: i,
        onChange: h,
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
    eC = l(408278),
    ey = l(461150),
    ej = l(782134),
    eb = l(113494),
    ew = l(898196),
    eE = l(559106),
    eN = l(765671),
    ek = l(531685);
(l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var eA = l(661531),
    eI = l(602853),
    eL = l(602674),
    eM = l(335416),
    eR = l(556250);
let eT = new Map(),
    eD = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: s, className: r, alwaysRenderContainer: o = !1 } = e,
            c = n.useRef(null),
            { ref: u, width: d, height: m } = (0, eN.Ay)(),
            [h, f] = n.useState(null),
            x = (0, eI.r)(eA.A.colors.BACKGROUND_MOD_STRONG).hex();
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
            if (null != l) return void f(l.waveform);
            let a = c.current,
                n = !1;
            function s(t) {
                if (n) return;
                let { waveform: l, error: a } = t.data;
                null != a ? M.nx.error("Failed to load waveform:", a) : (eT.set(e, { waveform: l }), f(l));
            }
            return (
                a.addEventListener("message", s),
                (async function () {
                    try {
                        let e = (0, eL.v)();
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
                        n || M.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    ((n = !0), a.removeEventListener("message", s));
                }
            );
        }, [i, t, d]),
        n.useEffect(() => {
            if (null == u.current || null == h || (d ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = u.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / h.length,
                i = -(n * (eM.Jh.waveformBarWidth - 1));
            (t.clearRect(0, 0, l, a), (t.fillStyle = x));
            for (let e = 0; e < h.length; e++) {
                let l = h[e] * a,
                    s = e * n + i;
                t.fillRect(s, a, n - i, -l);
            }
        }, [x, d, u, m, h]),
        0 === i.length)
            ? o
                ? (0, a.jsx)("div", { className: p()(eR.k, r), onMouseDown: s })
                : null
            : (0, a.jsx)("div", {
                  className: p()(eR.k, r),
                  children: (0, a.jsx)("canvas", {
                      className: eR.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: s,
                  }),
              });
    });
var eS = l(683063),
    e_ = l(565645),
    eO = l(562153),
    eP = l(869036),
    eG = l(931540);
function eU(e, t) {
    return (0, eP.$)(e, t.type, t.type === M.Gy.GAME_EVENT ? t.eventName : void 0);
}
function eB(e) {
    return { timestamp: e.peakMs, signal: { type: e.type, userId: e.userId, confidence: e.peakConfidence } };
}
function eK(e) {
    let { icon: t, title: l, body: n, position: i, compact: s } = e;
    return (0, a.jsx)(eS.u, {
        title: l,
        body: n,
        position: "top",
        children: (0, a.jsx)("div", {
            className: p()(eG.H, { [eG.c]: s }),
            style: { left: `${i}%` },
            children: (0, a.jsx)(t, { size: "refresh_sm", color: eA.A.colors.ICON_DEFAULT }),
        }),
    });
}
let ez = { [M.Gy.LAUGHTER]: em.default.bTC23D, [M.Gy.SHOUTING]: em.default["3gqpuo"] };
function e$(e) {
    let { icon: t, signal: l, guildId: n, position: i, compact: s } = e,
        r = (0, U.bG)([q.default], () => q.default.getUser(l.userId)),
        o = (0, eO.tx)(n, null, r);
    return null == l.emojiId && null == l.emojiName
        ? (0, a.jsx)(eK, { icon: t, title: l.name, body: o, position: i, compact: s })
        : (0, a.jsx)(eS.u, {
              title: l.name,
              body: o,
              position: "top",
              children: (0, a.jsx)("div", {
                  className: p()(eG.H, { [eG.c]: s }),
                  style: { left: `${i}%` },
                  children: (0, a.jsx)(e_.A, {
                      emojiId: l.emojiId ?? null,
                      emojiName: l.emojiName ?? null,
                      animated: l.emojiAnimated,
                      size: "reaction",
                  }),
              }),
          });
}
let eH = n.memo(function (e) {
    let { clip: t, videoLength: l, compact: i = !1 } = e,
        s = t.audioEvents,
        r = t.applicationId,
        o = n.useMemo(() => {
            let e = t.timeline.filter(
                (e) => !e.signal.hiddenFromTimeline && !(e.signal.type === M.Gy.SOUNDBOARD && !e.signal.playing),
            );
            return (
                null != s
                    ? (e = e.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== M.Gy.LAUGHTER && t !== M.Gy.SHOUTING;
                      })).push(...s.map(eB))
                    : (e = (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === M.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              a = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - a >= 2 && l.add(t[e - 1]), (a = e));
                          return e.filter((e) => e.signal.type !== M.Gy.LAUGHTER || l.has(e));
                      })(e)),
                (e = e.filter((e) => eU(r, e.signal) > 0)).sort((e, t) => e.timestamp - t.timestamp),
                e.sort((e, t) => eU(r, t.signal) - eU(r, e.signal)),
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
        null != t && (d.some((e) => 3 > Math.abs(e - t)) || (u.push(e), d.push(t)));
    }
    return u.map(function (e) {
        var l;
        if (e.signal.hiddenFromTimeline) return null;
        let n = c(e.timestamp);
        if (null == n) return null;
        let s = ((l = e.signal), (0, eP.u)(r, l.type, l.type === M.Gy.GAME_EVENT ? l.eventName : void 0));
        if (null == s) return null;
        let o = `${e.timestamp}-${e.signal.type}`;
        switch (e.signal.type) {
            case M.Gy.LAUGHTER:
            case M.Gy.SHOUTING:
                return (0, a.jsx)(
                    eK,
                    {
                        icon: s,
                        title: eh.intl.string(ez[e.signal.type]),
                        body: eh.intl.string(em.default["ry+jxm"]),
                        position: n,
                        compact: i,
                    },
                    o,
                );
            case M.Gy.GAME_EVENT:
                return (0, a.jsx)(
                    eK,
                    {
                        icon: s,
                        title: e.signal.title ?? "",
                        body: eh.intl.string(em.default["347DBb"]),
                        position: n,
                        compact: i,
                    },
                    `${o}-${e.signal.eventName ?? ""}`,
                );
            case M.Gy.SOUNDBOARD:
                if (!e.signal.playing) return null;
                return (0, a.jsx)(e$, { icon: s, signal: e.signal, guildId: t.guildId, position: n, compact: i }, o);
            default:
                return null;
        }
    });
});
var eF = l(590936);
let eV = n.memo(function (e) {
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
        className: p()(eF.ZX, { [eF.dZ]: s, [eF.oE]: r }),
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: eF.QY,
            children: [
                c.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eF.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eF.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                o.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eF.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eF.d9 }),
                                (0, a.jsxs)(K.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eF.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(eH, { clip: l, videoLength: t, compact: r }),
            ],
        }),
    });
});
var eX = l(591246);
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
        h = n.useRef(null),
        f = n.useRef(null),
        [v, g] = n.useState(null),
        C = n.useCallback(() => {
            let e = h.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        y = n.useCallback(
            (e) => {
                let t = f.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * C();
                if ("start" === t.mode) m((0, x.clamp)(t.initialStart + l, 0, t.initialEnd - M.Cx), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, x.clamp)(t.initialEnd + l, t.initialStart + M.Cx, c);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        a = (0, x.clamp)(t.initialStart + l, 0, c - e);
                    m(a, a + e);
                }
            },
            [C, m, c],
        ),
        j = n.useCallback(() => {
            ((f.current = null), g(null));
        }, []);
    n.useEffect(() => {
        if (null != v)
            return (
                document.addEventListener("mousemove", y),
                document.addEventListener("mouseup", j),
                () => {
                    (document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", j));
                }
            );
    }, [v, y, j]);
    let b = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(),
                    d(),
                    (f.current = { mode: e, clientX: t.clientX, initialStart: s, initialEnd: o }),
                    g(e));
            },
            [d, s, o],
        ),
        w = n.useCallback(
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
                    ? ((l = !0), (a = (0, x.clamp)(s - t, 0, o - M.Cx)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, x.clamp)(s + t, 0, o - M.Cx))),
                    l && (e.preventDefault(), e.stopPropagation(), m(a, o)));
            },
            [s, o, m],
        ),
        N = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = o;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, x.clamp)(o - t, s + M.Cx, c)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, x.clamp)(o + t, s + M.Cx, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, a)));
            },
            [s, o, c, m],
        ),
        k = 0 === c ? 0 : (s / c) * 100,
        A = 0 === c ? 0 : ((o - s) / c) * 100;
    return (0, a.jsx)("div", {
        className: eX.nM,
        children: (0, a.jsxs)("div", {
            ref: h,
            className: eX.hz,
            children: [
                (0, a.jsx)(eE.vN, {
                    children: (0, a.jsx)(r.D, {
                        className: p()(eX.u4, { [eX.jX]: u }),
                        style: { left: `${k}%`, width: `${A}%`, backgroundColor: i },
                        onMouseDown: b("move"),
                        onKeyDown: w,
                        "aria-label": t,
                        children: (0, a.jsx)("div", {
                            className: eX.Kq,
                            children: (0, a.jsx)(K.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: eX.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, a.jsx)(eE.vN, {
                    children: (0, a.jsx)("button", {
                        className: eX.YQ,
                        style: { left: `${k}%` },
                        onMouseDown: b("start"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": o - M.Cx,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eX.gt }),
                    }),
                }),
                (0, a.jsx)(eE.vN, {
                    children: (0, a.jsx)("button", {
                        className: eX.JZ,
                        style: { left: `${k + A}%` },
                        onMouseDown: b("end"),
                        onKeyDown: N,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + M.Cx,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eX.gt }),
                    }),
                }),
            ],
        }),
    });
}
var eW = l(711127),
    eq = l(503535);
function eY(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`);
}
function eJ(e) {
    let t = Math.floor(e / 60),
        l = eh.intl.formatToPlainString(eh.t.iXLF9W, { minutes: t }),
        a = eh.intl.formatToPlainString(eh.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function eQ(e) {
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
            play: h,
            pause: f,
            subscribe: v,
            seek: g,
            clip: C,
            generateThumbnails: y,
            videoDimensions: j,
        } = (0, k.T)(),
        { tracks: b, selectedTrackId: w, setSelectedTrackId: E, updateTrackRange: N } = (0, ed.fn)(),
        A = i(),
        [I, L] = n.useState(null),
        R = n.useRef(null),
        T = n.useRef(null),
        [D, S] = n.useState(!1),
        [_, P] = n.useState(null);
    n.useEffect(
        () =>
            v({
                onPlay: () => {
                    (L(null), S(!1));
                },
            }),
        [v],
    );
    let { ref: G, width: U = 0, height: B = 0 } = (0, eN.Ay)(),
        z = (0, eg.bG)([ek.A], () => ek.A.windowSize()),
        $ = n.useRef(null),
        H = n.useCallback(() => {
            let e = G.current;
            null != e && P(e.getBoundingClientRect());
        }, [G]);
    (n.useMemo(() => {
        (z.width, z.height, H());
    }, [z.width, z.height, U, l, H]),
        n.useEffect(() => {
            let e = $.current;
            if (null != e) return (e.addEventListener("scroll", H), () => e.removeEventListener("scroll", H));
        }, [H]));
    let F = n.useCallback(
            (e, t) => {
                if (null == s || null == _) return;
                let l = (((0, x.clamp)(e, _.left, _.right) - _.left) / _.width) * s,
                    a = (0, x.clamp)(l, 0, s),
                    n = I;
                (null == n && t && ((n = "playhead"), r && (f(), S(!0)), L(n)),
                    "start" === n ? d(a) : "end" === n ? m(a) : "playhead" === n && g((0, x.clamp)(a, o, c)));
            },
            [s, _, I, o, c, r, f, d, m, g],
        ),
        V = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = O(s, e.shiftKey),
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
        X = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = O(s, e.shiftKey),
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
                F(e.clientX, !0);
            },
            [F],
        ),
        W = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), r && (f(), S(!0)), L(e));
            },
            [r, f],
        ),
        q = n.useCallback(
            (e) => {
                F(e.clientX, !1);
            },
            [F],
        ),
        Y = n.useCallback(() => {
            (D && h(), S(!1), L(null));
        }, [D, h]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", q),
            document.addEventListener("mouseup", Y),
            () => {
                (document.removeEventListener("mousemove", q), document.removeEventListener("mouseup", Y));
            }
        ),
        [q, Y],
    );
    let { numberOfPreviews: J, timelinePreviewWidth: Q } = n.useMemo(() => {
        if (null == j) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(B * (j.width / j.height));
        return { numberOfPreviews: Math.ceil(U / e), timelinePreviewWidth: e };
    }, [B, U, j]);
    n.useEffect(() => {
        if (0 === J || 0 === Q) return;
        let e = G.current;
        if (null == e) return;
        ((e.height = B), (e.width = U));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, U, B));
        let l = [];
        for (let e = 0; e < J; e++) l.push((Q / U) * s * e);
        return y(l, Q, B, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], Q * l, 0, Q, B), e[l].close());
        });
    }, [B, G, s, J, Q, y, U]);
    let ee = A - o,
        et = n.useCallback(() => {
            g(Math.max(o, A - 10));
        }, [o, A, g]),
        el = n.useCallback(() => {
            g(Math.min(c, A + 10));
        }, [c, A, g]),
        ea = n.useCallback(() => {
            r ? f() : h();
        }, [r, h, f]),
        en = (o / s) * 100,
        ei = (1 - (s - c) / s) * 100,
        es = {
            background: `linear-gradient(to right, var(--black-500) ${en}%, transparent ${en}%, transparent ${ei}%, var(--black-500) ${ei}%)`,
        };
    return (0, a.jsxs)("div", {
        className: eq.f4,
        children: [
            (0, a.jsx)("div", { className: eq.qs }),
            (0, a.jsxs)("div", {
                className: eq.lx,
                children: [
                    (0, a.jsx)("div", {
                        className: eq.k2,
                        children: (0, a.jsx)("div", {
                            ref: T,
                            className: eq.re,
                            children: (0, a.jsxs)(K.E, {
                                variant: "text-xs/medium",
                                className: eq.g7,
                                color: "text-muted",
                                children: [
                                    (0, a.jsx)("span", { className: eq.$k, children: eY(ee) }),
                                    (0, a.jsx)("span", { className: eq.xW, children: " / " }),
                                    eY(u),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: eq.s2,
                        children: [
                            (0, a.jsx)(eC.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: ey.q,
                                onClick: et,
                                "aria-label": eh.intl.string(eW.default["dRVF+Z"]),
                            }),
                            (0, a.jsx)(eC.K, {
                                size: "sm",
                                icon: r ? eb.PauseIcon : ej.PlayIcon,
                                onClick: ea,
                                "aria-label": eh.intl.string(r ? eh.t.ZcgDJX : eh.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, a.jsx)(eC.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: ew.i,
                                onClick: el,
                                "aria-label": eh.intl.string(eW.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eq.fL,
                ref: $,
                children: [
                    (0, a.jsx)(eV, { onMouseDown: Z, videoLength: s, clip: C, noBottomMargin: !0, compact: !0 }),
                    (0, a.jsx)(eD, {
                        onMouseDown: Z,
                        voiceAudioTracks: t,
                        clipId: C.id,
                        className: eq.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: eq.iI,
                        children: (0, a.jsxs)("div", {
                            className: eq.Qp,
                            children: [
                                (0, a.jsx)("div", { className: eq.bd }),
                                (0, a.jsx)("div", {
                                    className: eq.PH,
                                    children: (0, a.jsxs)("div", {
                                        className: p()(eq.IO, { [eq.Dg]: null != I }),
                                        onMouseDown: Z,
                                        children: [
                                            (0, a.jsx)("canvas", { className: eq.Ay, ref: G }),
                                            (0, a.jsx)(eE.vN, {
                                                children: (0, a.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: R,
                                                    className: eq.lG,
                                                    children: (0, a.jsx)("svg", {
                                                        className: eq.$6,
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
                                            (0, a.jsx)("div", { className: eq.QT, style: es }),
                                            (0, a.jsxs)("div", {
                                                className: eq.Ws,
                                                style: {
                                                    left: null != s ? `${(o / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, a.jsx)(eE.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eq.uI,
                                                            onMouseDown: W("start"),
                                                            onKeyDown: V,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": eJ(o),
                                                            "aria-valuemax": c - M.zj,
                                                            "aria-label": eh.intl.string(eh.t["+BTvw8"]),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eq.FV }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eq.lm,
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
                                                            className: eq.H1,
                                                            onMouseDown: W("end"),
                                                            onKeyDown: X,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + M.zj,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": eJ(c),
                                                            "aria-valuemax": s,
                                                            "aria-label": eh.intl.string(eh.t.bBgBYo),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eq.kn }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eq.mN,
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
                                b.map((e) =>
                                    (0, a.jsx)(
                                        eZ,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case M.Me.TEXT:
                                                        return eh.intl.string(em.default.WvkbtB);
                                                    case M.Me.IMAGE:
                                                        return eh.intl.string(em.default.heHHUW);
                                                    default:
                                                        return "";
                                                }
                                            })(e.type),
                                            text: (function (e) {
                                                switch (e.type) {
                                                    case M.Me.TEXT:
                                                        return e.data.text;
                                                    case M.Me.IMAGE:
                                                        return e.data.fileName;
                                                    default:
                                                        return "";
                                                }
                                            })(e),
                                            color: M.mY[e.type],
                                            startSec: e.startSec,
                                            endSec: e.endSec,
                                            totalDurationSec: s,
                                            selected: w === e.id,
                                            onSelect: () => E(e.id),
                                            onChangeRange: (t, l) => N(e.id, t, l),
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
            videoPlayerRef: f,
            videoURL: p,
            audioTracks: x,
            clip: v,
            activeTool: g,
            cropPreset: C,
            videoDimensions: y,
        } = (0, k.T)(),
        { analyticsLocations: j } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: b, selectedTrackId: w, setSelectedTrackId: E, removeTrack: N } = (0, ed.fn)(),
        A = v.type === M.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!A) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            if ("Delete" === e.key) {
                null != w && (e.stopPropagation(), e.preventDefault(), N(w));
                return;
            }
            let t = f.current;
            if (null == t) return;
            let a = f.current?.videoElement;
            if (null == a) return;
            let n = O(a.duration, e.shiftKey),
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
    }, [f, A, v.type, l, m, w, N]);
    let I = n.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        L = n.useCallback(() => {
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
                (0, a.jsx)(G, {}),
                t !== s.ip.ENTERED
                    ? (0, a.jsx)(h, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(el, {}),
                              (0, a.jsx)("div", {
                                  className: R.zT,
                                  children: (0, a.jsx)(r.D, {
                                      className: R.xS,
                                      onClick: L,
                                      children: (0, a.jsx)("img", {
                                          className: R.V_,
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
        D = v.type === M.nQ.VOICE_CLIP,
        S = g === d.Y.CROP,
        P = null != y ? y.width / y.height : null,
        U = S
            ? P
            : (function (e, t) {
                  switch (e) {
                      case M.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case M.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case M.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(C, P),
        B = null;
    return (
        (B =
            S && !D
                ? (0, a.jsx)(ei, {})
                : b.map((e) => {
                      switch (e.type) {
                          case M.Me.TEXT:
                              return (0, a.jsx)(ev, { track: e, selected: e.id === w, onSelect: () => E(e.id) }, e.id);
                          case M.Me.IMAGE:
                              return (0, a.jsx)(ep, { track: e, selected: e.id === w, onSelect: () => E(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, a.jsx)(c.f5, {
            value: j,
            children: (0, a.jsxs)("div", {
                className: ea.OJ,
                children: [
                    (0, a.jsx)(G, {}),
                    (0, a.jsx)("div", {
                        className: ea.zT,
                        children: T
                            ? (0, a.jsx)(h, {})
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(el, {}),
                                      (0, a.jsx)("div", {
                                          className: ea.x3,
                                          children: (0, a.jsx)(_, {
                                              ref: f,
                                              cropFraming: !D,
                                              frameAspectRatio: U,
                                              overlay: B,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, a.jsx)("div", {
                                          className: ea.fL,
                                          children: (0, a.jsx)(eQ, { transitionState: t, voiceAudioTracks: I }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}
