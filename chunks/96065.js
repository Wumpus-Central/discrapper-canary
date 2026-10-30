l.d(t, { A: () => e5 });
var a = l(477900),
    n = l(582128),
    i = l(621466),
    r = l(231723),
    s = l(939249),
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
    b = l(607470),
    j = l(176781),
    y = l(901127);
function C(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: p()(y.L, t),
        children: (0, a.jsx)(j.x, { size: "lg", color: "currentColor" }),
    });
}
var N = l(367974),
    w = l(376595),
    E = l(773503),
    k = l(758262);
let A = [],
    L = [];
function R() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, k.T)(),
        r = i.decision?.timestamp ?? 0,
        s = n.useMemo(() => new w.H(i.timeline ?? []), [i.timeline]),
        o = r - i.length,
        c = n.useCallback(
            (e) => {
                let t = 1e3 * v().round(e, 3);
                return s.getEventsAtTimestamp(o + t);
            },
            [s, o],
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
        (0, a.jsx)(E.A, {
            speakingUserIds: l ? u.speakingUserIds : A,
            activeSoundboards: t ? u.activeSoundboards : L,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var T = l(696016),
    I = l(933092),
    M = l(24468);
function D(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(T.gC.ALL)) return !1;
        else return !0;
    return e.includes(T.gC.APPLICATION) ? !l : e.includes(T.gC.VOICE) ? !a : !e.includes(T.gC.SOUNDBOARD) || !n;
}
function S(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: r } = e,
        s = n.useCallback(
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
        ref: s,
        src: i ?? void 0,
        muted: r,
        preload: "auto",
        className: M.R,
        onLoadedMetadata: o,
    });
}
function O(e) {
    let { overlay: t, cropFraming: l, frameAspectRatio: i, loop: r = !0, ref: s } = e,
        {
            cropStart: o,
            cropEnd: c,
            setVideoPlayerRef: u,
            videoURL: d,
            audioURL: m,
            applicationAudioEnabled: f,
            voiceAudioEnabled: h,
            soundboardAudioEnabled: v,
            clip: j,
        } = (0, k.T)(),
        y = n.useRef({}),
        w = n.useRef(null),
        E = n.useRef(!1),
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
                l.label.includes(T.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(T.gC.VOICE) || l.label.includes(T.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            L(t);
        }, []),
        _ = n.useCallback(() => {
            for (let e of ((E.current = !0), O(), Object.values(y.current))) null != e && e.play();
        }, [O]),
        z = n.useCallback(() => {
            for (let e of Object.values(y.current)) null != e && e.pause();
        }, []);
    (0, g.A)(() => {
        if (E.current) {
            if (!r) {
                let e = y.current.main;
                if (null != e) {
                    let t = null != c ? (0, x.round)(c, 3) : (0, x.round)(e.duration, 3);
                    if ((0, x.round)(e.currentTime, 3) >= t) {
                        (z(), (E.current = !1));
                        return;
                    }
                }
            }
            O() && _();
        }
    });
    let $ = n.useCallback((e) => {
            for (let t of (y.current.main?.paused && (E.current = !1), Object.values(y.current)))
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
    n.useImperativeHandle(s, () => {
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
    let X = j.type === T.nQ.VOICE_CLIP,
        F = !0 === l && !X && null != i;
    return (n.useLayoutEffect(() => {
        let e = w.current;
        if (null == e) return;
        if (!F) {
            ((e.style.width = ""), (e.style.height = ""));
            return;
        }
        function t() {
            let e = w.current,
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
    }, [F, i]),
    null == d)
        ? null
        : (0, a.jsxs)("div", {
              ref: w,
              className: p()(I.DV, F && I.Ln),
              children: [
                  X
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("audio", { ref: G, src: d, muted: !0, preload: "auto" }),
                                (0, a.jsx)(C, { className: I.Ap }),
                            ],
                        })
                      : (0, a.jsx)(b.A, {
                            onClick: U,
                            className: p()(I.Ap, F && I.HU),
                            style: F ? { aspectRatio: i } : void 0,
                            ref: G,
                            src: d,
                            muted: D(":all", {
                                applicationAudioEnabled: f,
                                voiceAudioEnabled: h,
                                soundboardAudioEnabled: v,
                                isVoiceClip: X,
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
                          isVoiceClip: X,
                      }),
                      className: M.R,
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
                                  isVoiceClip: X,
                              }),
                          },
                          e,
                      ),
                  ),
              ],
          });
}
function P(e, t) {
    let l = e / T.YM;
    return (t && (l /= T.iJ), l);
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
    B = l(866665),
    H = l(408278),
    X = l(548411),
    F = l(297264),
    W = l(778712),
    V = l(429913),
    K = l(47167),
    Y = l(713654),
    Z = l(769015),
    Q = l(145497),
    q = l(734057),
    J = l(71393),
    ee = l(287809),
    et = l(58703),
    el = l(403362),
    ea = l(718812),
    en = l(105292),
    ei = l(620828);
function er(e) {
    let { icon: t, label: l } = e;
    return (0, a.jsxs)("div", {
        className: ei.Ho,
        children: [
            null != t && (0, a.jsx)("div", { className: ei.t8, children: t }),
            (0, a.jsx)(G.E, { variant: "text-xs/normal", color: "text-subtle", className: ei.Mk, children: l }),
        ],
    });
}
function es(e) {
    let { onBack: t } = e,
        { clip: l, clipName: n } = (0, k.T)(),
        i = (0, ea.h)(l),
        r = (0, V.h)(l.applicationId),
        s = (0, $.yK)([ee.default], () => l.users.map(ee.default.getUser).filter(el.Vq)),
        o = (0, $.bG)([J.A], () => (null != l.guildId ? J.A.getGuild(l.guildId) : null)),
        c = (0, $.bG)([q.A], () => (null != l.channelId ? q.A.getChannel(l.channelId) : null)),
        u = (0, K.Ay)(c),
        d = null != c ? (0, Y.gU)(c, o) : null,
        m = r?.name ?? l.applicationName,
        f =
            null != c && null != d
                ? (0, a.jsx)(d, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, a.jsxs)("div", {
        className: ei.wx,
        children: [
            null != t &&
                (0, a.jsx)(B.m, {
                    position: "bottom",
                    text: en.intl.string(en.t["13/7kX"]),
                    children: (0, a.jsx)(H.K, {
                        onClick: t,
                        icon: X.Z,
                        size: "md",
                        variant: "icon-only",
                        "aria-label": en.intl.string(en.t["13/7kX"]),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: p()(ei.K5, null != t && ei.fr),
                children: [
                    (0, a.jsx)(F.D, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        className: ei.DD,
                        children: null != n && "" !== n ? n : i,
                    }),
                    (0, a.jsxs)("div", {
                        className: ei.KW,
                        children: [
                            null != m &&
                                "" !== m &&
                                (0, a.jsx)(er, {
                                    icon: null != r ? (0, a.jsx)(Z.A, { game: r, size: Z.M.XXSMALL }) : void 0,
                                    label: m,
                                }),
                            null != o &&
                                (0, a.jsx)(er, { icon: (0, a.jsx)(Q.Ay, { guild: o, iconSize: 16 }), label: o.name }),
                            null != f && (0, a.jsx)(er, { icon: f, label: u ?? "" }),
                            (0, a.jsx)(er, { label: (0, et.mk)(new Date(l.createdAt)) }),
                            s.length > 0 &&
                                (0, a.jsx)("div", {
                                    className: ei.Ho,
                                    children: (0, a.jsx)(U.A, { users: s, maxUsers: 10, size: W._3.SIZE_16 }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eo = l(973177);
let ec = { [T.yz.ORIGINAL]: null, [T.yz.PORTRAIT_9_16]: 9 / 16, [T.yz.LANDSCAPE_16_9]: 16 / 9 };
function eu() {
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
                let r = l.getBoundingClientRect(),
                    s = (t.current?.videoElement ?? l).getBoundingClientRect(),
                    o = s.left - r.left,
                    c = s.top - r.top,
                    u = ec[e],
                    d = o,
                    m = c,
                    f = s.width,
                    h = s.height;
                (null != u &&
                    ((h = (f = Math.min(s.width, s.height * u)) / u),
                    (d = o + (s.width - f) / 2),
                    (m = c + (s.height - h) / 2)),
                    (n.style.left = `${d}px`),
                    (n.style.top = `${m}px`),
                    (n.style.width = `${f}px`),
                    (n.style.height = `${h}px`));
            }
            n();
            let r = new ResizeObserver(n);
            r.observe(a.parentElement ?? a);
            let s = t.current?.videoElement;
            return (
                null != s && r.observe(s),
                window.addEventListener("resize", n),
                () => {
                    (r.disconnect(), window.removeEventListener("resize", n));
                }
            );
        }, [e, t]),
        (0, a.jsx)("div", { ref: l, className: eo.pC, children: (0, a.jsx)("div", { ref: i, className: eo.E$ }) })
    );
}
var ed = l(831453),
    em = l(607345);
let ef = [
    { key: "topStart", className: em.On },
    { key: "topEnd", className: em.zI },
    { key: "bottomEnd", className: em.TP },
    { key: "bottomStart", className: em.kb },
];
function eh(e) {
    let {
            label: t,
            position: l,
            rotationDeg: i,
            scale: r,
            minScale: o,
            maxScale: c,
            sizing: u,
            aspectRatio: d,
            resizable: m = !0,
            selected: f,
            visible: h,
            onSelect: v,
            onChange: g,
            children: b,
        } = e,
        j = n.useRef(null),
        y = n.useRef(null),
        C = n.useRef(null),
        N = n.useRef(l),
        w = n.useRef(i),
        E = n.useRef(r),
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
                    (l.style.transform = `translate(-50%, -50%) rotate(${w.current}deg)`),
                    "fixed" === u)
                ) {
                    ((t = E.current * e.width), (l.style.width = `${t}px`));
                    let a = A.current;
                    l.style.height = null != a && a > 0 ? `${t / a}px` : "auto";
                } else ((t = E.current * e.height), (l.style.fontSize = `${t}px`));
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
                            r = { left: i.left - e.left, top: i.top - e.top, width: i.width, height: i.height };
                        ((a.current = r), t(r));
                    }
                    i();
                    let r = new ResizeObserver(i);
                    r.observe(n);
                    let s = l.current?.videoElement;
                    return (
                        null != s && r.observe(s),
                        window.addEventListener("resize", i),
                        () => {
                            (r.disconnect(), window.removeEventListener("resize", i));
                        }
                    );
                }, [e, t, l]),
                a
            );
        })(j, L);
    n.useEffect(() => {
        ((N.current = l), (w.current = i), (E.current = r), (A.current = d));
        let e = R.current;
        null != e && L(e);
    }, [l, i, r, d, L, R]);
    let I = n.useCallback(
            (e) => {
                let t = C.current,
                    l = R.current,
                    a = j.current?.getBoundingClientRect();
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
                            let l = ep(t.centerX, t.centerY, e.clientX, e.clientY);
                            g({ rotationDeg: (0, T.Ew)(t.baseRotationDeg + l - t.startAngleDeg) });
                        }
                    }
            },
            [g, o, c, R],
        ),
        M = n.useCallback(() => {
            C.current = null;
        }, []);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", I),
            document.addEventListener("mouseup", M),
            () => {
                (document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", M));
            }
        ),
        [I, M],
    );
    let D = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), t.preventDefault(), v(), y.current?.focus({ preventScroll: !0 }));
                let a = R.current,
                    n = j.current?.getBoundingClientRect();
                if (null == a || null == n || 0 === a.width || 0 === a.height) return;
                let s = n.left + a.left + l.x * a.width,
                    o = n.top + a.top + l.y * a.height;
                C.current = {
                    mode: e,
                    centerX: s,
                    centerY: o,
                    baseRotationDeg: i,
                    baseScale: r,
                    grabOffset: {
                        x: (t.clientX - n.left - a.left) / a.width - l.x,
                        y: (t.clientY - n.top - a.top) / a.height - l.y,
                    },
                    startDistance: Math.hypot(t.clientX - s, t.clientY - o),
                    startAngleDeg: ep(s, o, t.clientX, t.clientY),
                };
            },
            [v, l, i, r, R],
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
                    (e.preventDefault(), e.stopPropagation(), g({ rotationDeg: (0, T.Ew)(i + t * T.p4) }));
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
        ref: j,
        className: em.DW,
        children: (0, a.jsxs)(s.D, {
            innerRef: y,
            className: p()(em.aP, { [em.$A]: f }),
            style: { display: h ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: v,
            onMouseDown: D("move"),
            onKeyDown: S,
            children: [
                b,
                f &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { "aria-hidden": !0, className: em.t$ }),
                            (0, a.jsx)("div", {
                                "aria-hidden": !0,
                                className: em.oT,
                                onMouseDown: D("rotate"),
                                children: (0, a.jsx)(ed.H, { size: "xxs", color: "currentColor" }),
                            }),
                            m &&
                                ef.map((e) => {
                                    let { key: t, className: l } = e;
                                    return (0, a.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: p()(em.ZV, l), onMouseDown: D("scale") },
                                        t,
                                    );
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function ep(e, t, l, a) {
    return (180 * Math.atan2(a - t, l - e)) / Math.PI;
}
var ex = l(245116),
    ev = l(507216),
    eg = l(545052);
function eb(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: r } = (0, k.T)(),
        { updateImageTrackData: s } = (0, ex.fn)(),
        o = r(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: f, naturalHeight: h } = t.data,
        p = t.data.shadow ?? T.xy,
        x = t.data.shadowColor ?? T.pk,
        v = n.useCallback(
            (e) => {
                let { position: l, rotationDeg: a, scale: n } = e;
                s(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: a ?? e.rotationDeg,
                    widthFraction: n ?? e.widthFraction,
                }));
            },
            [s, t.id],
        ),
        g = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        b = T.EC[p],
        j =
            b > 0
                ? `drop-shadow(0 calc(${b * T.HA} * var(--clip-track-scale)) calc(${b} * var(--clip-track-scale)) ${x})`
                : void 0;
    return (0, a.jsx)(eh, {
        label: en.intl.formatToPlainString(ev.default.lZuIri, { fileName: t.data.fileName }),
        position: u,
        rotationDeg: d,
        scale: m,
        minScale: T.DX,
        maxScale: T.nS,
        sizing: "fixed",
        aspectRatio: f / h,
        selected: l,
        visible: g,
        onSelect: i,
        onChange: v,
        children: (0, a.jsx)("img", {
            className: eg.S,
            src: c,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            style: { filter: j },
        }),
    });
}
var ej = l(637526);
function ey(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: r } = (0, k.T)(),
        { updateTextTrackData: s } = (0, ex.fn)(),
        o = r(),
        { text: c, position: u, style: d } = t.data,
        m = t.data.rotationDeg ?? T.ad,
        f = n.useCallback(
            (e) => {
                let { position: l, rotationDeg: a, scale: n } = e;
                s(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: a ?? e.rotationDeg,
                    style: null != n ? { ...e.style, fontSize: n } : e.style,
                }));
            },
            [s, t.id],
        ),
        h = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        p = T.mO[d.strokeWidth];
    return (0, a.jsxs)(eh, {
        label: en.intl.formatToPlainString(ev.default.EDmwVf, { text: c }),
        position: u,
        rotationDeg: m,
        scale: d.fontSize,
        minScale: T.z2,
        maxScale: T.T7,
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
                    className: ej.C,
                    style: {
                        color: d.strokeColor,
                        WebkitTextStrokeColor: d.strokeColor,
                        WebkitTextStrokeWidth: `${p}em`,
                    },
                    children: c,
                }),
            (0, a.jsx)("span", { className: ej.L, style: { color: d.color }, children: c }),
        ],
    });
}
var eC = l(702841),
    eN = l(461150),
    ew = l(782134),
    eE = l(113494),
    ek = l(898196),
    eA = l(559106),
    eL = l(765671),
    eR = l(531685);
(l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var eT = l(661531),
    eI = l(602853),
    eM = l(602674),
    eD = l(335416),
    eS = l(556250);
let eO = new Map(),
    eP = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: s, alwaysRenderContainer: o = !1 } = e,
            c = n.useRef(null),
            { ref: u, width: d, height: m } = (0, eL.Ay)(),
            [f, h] = n.useState(null),
            x = (0, eI.r)(eT.A.colors.BACKGROUND_MOD_STRONG).hex();
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
                l = eO.get(e);
            if (null != l) return void h(l.waveform);
            let a = c.current,
                n = !1;
            function r(t) {
                if (n) return;
                let { waveform: l, error: a } = t.data;
                null != a ? T.nx.error("Failed to load waveform:", a) : (eO.set(e, { waveform: l }), h(l));
            }
            return (
                a.addEventListener("message", r),
                (async function () {
                    try {
                        let e = (0, eM.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            r = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                (t.push(a), r.push(a.buffer));
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: d }, r);
                    } catch (e) {
                        n || T.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    ((n = !0), a.removeEventListener("message", r));
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
                i = -(n * (eD.Jh.waveformBarWidth - 1));
            (t.clearRect(0, 0, l, a), (t.fillStyle = x));
            for (let e = 0; e < f.length; e++) {
                let l = f[e] * a,
                    r = e * n + i;
                t.fillRect(r, a, n - i, -l);
            }
        }, [x, d, u, m, f]),
        0 === i.length)
            ? o
                ? (0, a.jsx)("div", { className: p()(eS.k, s), onMouseDown: r })
                : null
            : (0, a.jsx)("div", {
                  className: p()(eS.k, s),
                  children: (0, a.jsx)("canvas", {
                      className: eS.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
var e_ = l(683063),
    ez = l(788026),
    e$ = l(562153),
    eU = l(374816),
    eG = l(931540);
function eB(e, t) {
    return (0, eU.$b)(e, t.type, t.type === T.Gy.GAME_EVENT ? t.eventName : void 0);
}
function eH(e) {
    return { timestamp: e.peakMs, signal: { type: e.type, userId: e.userId, confidence: e.peakConfidence } };
}
function eX(e) {
    let { icon: t, title: l, body: n, position: i, compact: r } = e;
    return (0, a.jsx)(e_.u, {
        title: l,
        body: n,
        position: "top",
        children: (0, a.jsx)("div", {
            className: p()(eG.H, { [eG.c]: r }),
            style: { left: `${i}%` },
            children: (0, a.jsx)(t, { size: "refresh_sm", color: eT.A.colors.ICON_DEFAULT }),
        }),
    });
}
let eF = { [T.Gy.LAUGHTER]: ev.default.bTC23D, [T.Gy.SHOUTING]: ev.default["3gqpuo"] };
function eW(e) {
    let { icon: t, signal: l, guildId: n, position: i, compact: r } = e,
        s = (0, $.bG)([ee.default], () => ee.default.getUser(l.userId)),
        o = (0, e$.tx)(n, null, s);
    return null == l.emojiId && null == l.emojiName
        ? (0, a.jsx)(eX, { icon: t, title: l.name, body: o, position: i, compact: r })
        : (0, a.jsx)(e_.u, {
              title: l.name,
              body: o,
              position: "top",
              children: (0, a.jsx)("div", {
                  className: p()(eG.H, { [eG.c]: r }),
                  style: { left: `${i}%` },
                  children: (0, a.jsx)(ez.A, {
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
        r = t.audioEvents,
        s = t.applicationId,
        o = n.useMemo(() => {
            let e = t.timeline.filter(
                (e) => !e.signal.hiddenFromTimeline && !(e.signal.type === T.Gy.SOUNDBOARD && !e.signal.playing),
            );
            return (
                null != r
                    ? (e = e.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== T.Gy.LAUGHTER && t !== T.Gy.SHOUTING;
                      })).push(...r.map(eH))
                    : (e = (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === T.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              a = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - a >= 2 && l.add(t[e - 1]), (a = e));
                          return e.filter((e) => e.signal.type !== T.Gy.LAUGHTER || l.has(e));
                      })(e)),
                (e = e.filter((e) => eB(s, e.signal) > 0)).sort((e, t) => e.timestamp - t.timestamp),
                e.sort((e, t) => eB(s, t.signal) - eB(s, e.signal)),
                e
            );
        }, [t.timeline, r, s]);
    function c(e) {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return a < 0 || a > l ? null : (a / l) * 100;
    }
    let u = [],
        d = [];
    for (let e of o) {
        let t = c(e.timestamp);
        null != t && (d.some((e) => Math.abs(e - t) < eU.Vd) || (u.push(e), d.push(t)));
    }
    return u.map(function (e) {
        var l, n;
        if (e.signal.hiddenFromTimeline) return null;
        let r = c(e.timestamp);
        if (null == r) return null;
        let o = ((l = e.signal), (0, eU.u6)(s, l.type, l.type === T.Gy.GAME_EVENT ? l.eventName : void 0));
        if (null == o) return null;
        let u = `${e.timestamp}-${e.signal.type}`;
        switch (e.signal.type) {
            case T.Gy.LAUGHTER:
            case T.Gy.SHOUTING:
                return (0, a.jsx)(
                    eX,
                    {
                        icon: o,
                        title: en.intl.string(eF[e.signal.type]),
                        body: en.intl.string(ev.default["ry+jxm"]),
                        position: r,
                        compact: i,
                    },
                    u,
                );
            case T.Gy.GAME_EVENT:
                return (0, a.jsx)(
                    eX,
                    {
                        icon: o,
                        title:
                            ((n = e.signal),
                            (0, eU.PZ)(s, n.type, n.type === T.Gy.GAME_EVENT ? n.eventName : void 0) ?? ""),
                        body: en.intl.string(ev.default["347DBb"]),
                        position: r,
                        compact: i,
                    },
                    `${u}-${e.signal.eventName ?? ""}`,
                );
            case T.Gy.SOUNDBOARD:
                if (!e.signal.playing) return null;
                return (0, a.jsx)(eW, { icon: o, signal: e.signal, guildId: t.guildId, position: r, compact: i }, u);
            default:
                return null;
        }
    });
});
var eK = l(590936);
let eY = n.memo(function (e) {
    let { videoLength: t, clip: l, onMouseDown: i, noBottomMargin: r = !1, compact: s = !1 } = e,
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
        className: p()(eK.ZX, { [eK.dZ]: r, [eK.oE]: s }),
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: eK.QY,
            children: [
                c.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eK.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eK.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                o.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eK.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eK.d9 }),
                                (0, a.jsxs)(G.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eK.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(eV, { clip: l, videoLength: t, compact: s }),
            ],
        }),
    });
});
var eZ = l(591246);
function eQ(e) {
    let {
            label: t,
            text: l,
            color: i,
            startSec: r,
            endSec: o,
            totalDurationSec: c,
            selected: u,
            onSelect: d,
            onChangeRange: m,
        } = e,
        f = n.useRef(null),
        h = n.useRef(null),
        [v, g] = n.useState(null),
        b = n.useCallback(() => {
            let e = f.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        j = n.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * b();
                if ("start" === t.mode) m((0, x.clamp)(t.initialStart + l, 0, t.initialEnd - T.Cx), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, x.clamp)(t.initialEnd + l, t.initialStart + T.Cx, c);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        a = (0, x.clamp)(t.initialStart + l, 0, c - e);
                    m(a, a + e);
                }
            },
            [b, m, c],
        ),
        y = n.useCallback(() => {
            ((h.current = null), g(null));
        }, []);
    n.useEffect(() => {
        if (null != v)
            return (
                document.addEventListener("mousemove", j),
                document.addEventListener("mouseup", y),
                () => {
                    (document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", y));
                }
            );
    }, [v, j, y]);
    let C = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(),
                    d(),
                    (h.current = { mode: e, clientX: t.clientX, initialStart: r, initialEnd: o }),
                    g(e));
            },
            [d, r, o],
        ),
        N = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = o - r,
                    a = !1,
                    n = r;
                ("ArrowLeft" === e.key
                    ? ((a = !0), (n = (0, x.clamp)(r - t, 0, c - l)))
                    : "ArrowRight" === e.key && ((a = !0), (n = (0, x.clamp)(r + t, 0, c - l))),
                    a && (e.preventDefault(), e.stopPropagation(), m(n, n + l)));
            },
            [r, o, c, m],
        ),
        w = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = r;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, x.clamp)(r - t, 0, o - T.Cx)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, x.clamp)(r + t, 0, o - T.Cx))),
                    l && (e.preventDefault(), e.stopPropagation(), m(a, o)));
            },
            [r, o, m],
        ),
        E = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = o;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, x.clamp)(o - t, r + T.Cx, c)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, x.clamp)(o + t, r + T.Cx, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(r, a)));
            },
            [r, o, c, m],
        ),
        k = 0 === c ? 0 : (r / c) * 100,
        A = 0 === c ? 0 : ((o - r) / c) * 100;
    return (0, a.jsx)("div", {
        className: eZ.nM,
        children: (0, a.jsxs)("div", {
            ref: f,
            className: eZ.hz,
            children: [
                (0, a.jsx)(eA.vN, {
                    children: (0, a.jsx)(s.D, {
                        className: p()(eZ.u4, { [eZ.jX]: u }),
                        style: { left: `${k}%`, width: `${A}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: N,
                        "aria-label": t,
                        children: (0, a.jsx)("div", {
                            className: eZ.Kq,
                            children: (0, a.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: eZ.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, a.jsx)(eA.vN, {
                    children: (0, a.jsx)("button", {
                        className: eZ.YQ,
                        style: { left: `${k}%` },
                        onMouseDown: C("start"),
                        onKeyDown: w,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": r,
                        "aria-valuemax": o - T.Cx,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eZ.gt }),
                    }),
                }),
                (0, a.jsx)(eA.vN, {
                    children: (0, a.jsx)("button", {
                        className: eZ.JZ,
                        style: { left: `${k + A}%` },
                        onMouseDown: C("end"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": r + T.Cx,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eZ.gt }),
                    }),
                }),
            ],
        }),
    });
}
var eq = l(769821),
    eJ = l(503535);
function e0(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`);
}
function e1(e) {
    let t = Math.floor(e / 60),
        l = en.intl.formatToPlainString(en.t.iXLF9W, { minutes: t }),
        a = en.intl.formatToPlainString(en.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function e2(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: r,
            isPlaying: s,
            cropStart: o,
            cropEnd: c,
            cropDuration: u,
            setCropStart: d,
            setCropEnd: m,
            play: f,
            pause: h,
            subscribe: v,
            seek: g,
            clip: b,
            generateThumbnails: j,
            videoDimensions: y,
        } = (0, k.T)(),
        { tracks: C, selectedTrackId: N, setSelectedTrackId: w, updateTrackRange: E } = (0, ex.fn)(),
        A = i(),
        [L, R] = n.useState(null),
        I = n.useRef(null),
        M = n.useRef(null),
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
    let { ref: z, width: $ = 0, height: U = 0 } = (0, eL.Ay)(),
        B = (0, eC.bG)([eR.A], () => eR.A.windowSize()),
        X = n.useRef(null),
        F = n.useCallback(() => {
            let e = z.current;
            null != e && _(e.getBoundingClientRect());
        }, [z]);
    (n.useMemo(() => {
        (B.width, B.height, F());
    }, [B.width, B.height, $, l, F]),
        n.useEffect(() => {
            let e = X.current;
            if (null != e) return (e.addEventListener("scroll", F), () => e.removeEventListener("scroll", F));
        }, [F]));
    let W = n.useCallback(
            (e, t) => {
                if (null == r || null == O) return;
                let l = (((0, x.clamp)(e, O.left, O.right) - O.left) / O.width) * r,
                    a = (0, x.clamp)(l, 0, r),
                    n = L;
                (null == n && t && ((n = "playhead"), s && (h(), S(!0)), R(n)),
                    "start" === n ? d(a) : "end" === n ? m(a) : "playhead" === n && g((0, x.clamp)(a, o, c)));
            },
            [r, O, L, o, c, s, h, d, m, g],
        ),
        V = n.useCallback(
            (e) => {
                if (null == r) return;
                let t = P(r, e.shiftKey),
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
            [r, d, o],
        ),
        K = n.useCallback(
            (e) => {
                if (null == r) return;
                let t = P(r, e.shiftKey),
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
            [r, m, c],
        ),
        Y = n.useCallback(
            (e) => {
                W(e.clientX, !0);
            },
            [W],
        ),
        Z = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), s && (h(), S(!0)), R(e));
            },
            [s, h],
        ),
        Q = n.useCallback(
            (e) => {
                W(e.clientX, !1);
            },
            [W],
        ),
        q = n.useCallback(() => {
            (D && f(), S(!1), R(null));
        }, [D, f]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", Q),
            document.addEventListener("mouseup", q),
            () => {
                (document.removeEventListener("mousemove", Q), document.removeEventListener("mouseup", q));
            }
        ),
        [Q, q],
    );
    let { numberOfPreviews: J, timelinePreviewWidth: ee } = n.useMemo(() => {
        if (null == y) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(U * (y.width / y.height));
        return { numberOfPreviews: Math.ceil($ / e), timelinePreviewWidth: e };
    }, [U, $, y]);
    n.useEffect(() => {
        if (0 === J || 0 === ee) return;
        let e = z.current;
        if (null == e) return;
        ((e.height = U), (e.width = $));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, $, U));
        let l = [];
        for (let e = 0; e < J; e++) l.push((ee / $) * r * e);
        return j(l, ee, U, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], ee * l, 0, ee, U), e[l].close());
        });
    }, [U, z, r, J, ee, j, $]);
    let et = A - o,
        el = n.useCallback(() => {
            g(Math.max(o, A - 10));
        }, [o, A, g]),
        ea = n.useCallback(() => {
            g(Math.min(c, A + 10));
        }, [c, A, g]),
        ei = n.useCallback(() => {
            s ? h() : f();
        }, [s, f, h]),
        er = (o / r) * 100,
        es = (1 - (r - c) / r) * 100,
        eo = {
            background: `linear-gradient(to right, var(--black-500) ${er}%, transparent ${er}%, transparent ${es}%, var(--black-500) ${es}%)`,
        };
    return (0, a.jsxs)("div", {
        className: eJ.f4,
        children: [
            (0, a.jsx)("div", { className: eJ.qs }),
            (0, a.jsxs)("div", {
                className: eJ.lx,
                children: [
                    (0, a.jsx)("div", {
                        className: eJ.k2,
                        children: (0, a.jsx)("div", {
                            ref: M,
                            className: eJ.re,
                            children: (0, a.jsxs)(G.E, {
                                variant: "text-xs/medium",
                                className: eJ.g7,
                                color: "text-muted",
                                children: [
                                    (0, a.jsx)("span", { className: eJ.$k, children: e0(et) }),
                                    (0, a.jsx)("span", { className: eJ.xW, children: " / " }),
                                    e0(u),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: eJ.s2,
                        children: [
                            (0, a.jsx)(H.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eN.q,
                                onClick: el,
                                "aria-label": en.intl.string(eq.default["dRVF+Z"]),
                            }),
                            (0, a.jsx)(H.K, {
                                size: "sm",
                                icon: s ? eE.PauseIcon : ew.PlayIcon,
                                onClick: ei,
                                "aria-label": en.intl.string(s ? en.t.ZcgDJX : en.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, a.jsx)(H.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: ek.i,
                                onClick: ea,
                                "aria-label": en.intl.string(eq.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eJ.fL,
                ref: X,
                children: [
                    (0, a.jsx)(eY, { onMouseDown: Y, videoLength: r, clip: b, noBottomMargin: !0, compact: !0 }),
                    (0, a.jsx)(eP, {
                        onMouseDown: Y,
                        voiceAudioTracks: t,
                        clipId: b.id,
                        className: eJ.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: eJ.iI,
                        children: (0, a.jsxs)("div", {
                            className: eJ.Qp,
                            children: [
                                (0, a.jsx)("div", { className: eJ.bd }),
                                (0, a.jsx)("div", {
                                    className: eJ.PH,
                                    children: (0, a.jsxs)("div", {
                                        className: p()(eJ.IO, { [eJ.Dg]: null != L }),
                                        onMouseDown: Y,
                                        children: [
                                            (0, a.jsx)("canvas", { className: eJ.Ay, ref: z }),
                                            (0, a.jsx)(eA.vN, {
                                                children: (0, a.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: I,
                                                    className: eJ.lG,
                                                    children: (0, a.jsx)("svg", {
                                                        className: eJ.$6,
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
                                            (0, a.jsx)("div", { className: eJ.QT, style: eo }),
                                            (0, a.jsxs)("div", {
                                                className: eJ.Ws,
                                                style: {
                                                    left: null != r ? `${(o / r) * 100}%` : "0",
                                                    right: null != r ? `${((r - c) / r) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, a.jsx)(eA.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eJ.uI,
                                                            onMouseDown: Z("start"),
                                                            onKeyDown: V,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": e1(o),
                                                            "aria-valuemax": c - T.zj,
                                                            "aria-label": en.intl.string(en.t["+BTvw8"]),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eJ.FV }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eJ.lm,
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
                                                    (0, a.jsx)(eA.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eJ.H1,
                                                            onMouseDown: Z("end"),
                                                            onKeyDown: K,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + T.zj,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": e1(c),
                                                            "aria-valuemax": r,
                                                            "aria-label": en.intl.string(en.t.bBgBYo),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eJ.kn }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eJ.mN,
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
                                        eQ,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case T.Me.TEXT:
                                                        return en.intl.string(ev.default.WvkbtB);
                                                    case T.Me.IMAGE:
                                                        return en.intl.string(ev.default.heHHUW);
                                                    default:
                                                        return "";
                                                }
                                            })(e.type),
                                            text: (function (e) {
                                                switch (e.type) {
                                                    case T.Me.TEXT:
                                                        return e.data.text;
                                                    case T.Me.IMAGE:
                                                        return e.data.fileName;
                                                    default:
                                                        return "";
                                                }
                                            })(e),
                                            color: T.mY[e.type],
                                            startSec: e.startSec,
                                            endSec: e.endSec,
                                            totalDurationSec: r,
                                            selected: N === e.id,
                                            onSelect: () => w(e.id),
                                            onChangeRange: (t, l) => E(e.id, t, l),
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
function e5(e) {
    let { transitionState: t, onBack: l } = e,
        {
            cropStart: m,
            cropEnd: h,
            videoPlayerRef: p,
            videoURL: x,
            audioTracks: v,
            clip: g,
            activeTool: b,
            cropPreset: j,
            videoDimensions: y,
        } = (0, k.T)(),
        { analyticsLocations: C } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: N, selectedTrackId: w, setSelectedTrackId: E, removeTrack: A } = (0, ex.fn)(),
        L = g.type === T.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!L) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            if ("Delete" === e.key) {
                null != w && (e.stopPropagation(), e.preventDefault(), A(w));
                return;
            }
            let t = p.current;
            if (null == t) return;
            let l = p.current?.videoElement;
            if (null == l) return;
            let a = P(l.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    ((n = !0), l.paused ? t.play() : t.pause());
                    break;
                case "ArrowLeft":
                    ((n = !0), t.seek(Math.max(m, l.currentTime - a)));
                    break;
                case "ArrowRight":
                    ((n = !0), t.seek(Math.min(h, l.currentTime + a)));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [p, L, g.type, m, h, w, A]);
    let R = n.useMemo(() => v.filter((e) => e.trackName.includes(":voice")), [v]),
        M = n.useCallback(() => {
            (0, u.R)(
                {
                    items: [{ type: "IMAGE", url: g.thumbnail, proxyUrl: g.thumbnail, alt: g.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [g.thumbnail, g.name]);
    if (L)
        return (0, a.jsxs)("div", {
            className: eo.OJ,
            children: [
                (0, a.jsx)(z, {}),
                t !== r.ip.ENTERED
                    ? (0, a.jsx)(f, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(es, { onBack: l }),
                              (0, a.jsx)("div", {
                                  className: I.zT,
                                  children: (0, a.jsx)(s.D, {
                                      className: I.xS,
                                      onClick: M,
                                      children: (0, a.jsx)("img", {
                                          className: I.V_,
                                          src: g.thumbnail,
                                          alt: g.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let D = null == x || t !== r.ip.ENTERED,
        S = g.type === T.nQ.VOICE_CLIP,
        _ = b === d.Y.CROP,
        $ = null != y ? y.width / y.height : null,
        U = _
            ? $
            : (function (e, t) {
                  switch (e) {
                      case T.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case T.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case T.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(j, $),
        G = null;
    return (
        (G =
            _ && !S
                ? (0, a.jsx)(eu, {})
                : N.map((e) => {
                      switch (e.type) {
                          case T.Me.TEXT:
                              return (0, a.jsx)(ey, { track: e, selected: e.id === w, onSelect: () => E(e.id) }, e.id);
                          case T.Me.IMAGE:
                              return (0, a.jsx)(eb, { track: e, selected: e.id === w, onSelect: () => E(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, a.jsx)(c.f5, {
            value: C,
            children: (0, a.jsxs)("div", {
                className: eo.OJ,
                children: [
                    (0, a.jsx)(z, {}),
                    (0, a.jsx)("div", {
                        className: eo.zT,
                        children: D
                            ? (0, a.jsx)(f, {})
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(es, { onBack: l }),
                                      (0, a.jsx)("div", {
                                          className: eo.x3,
                                          children: (0, a.jsx)(O, {
                                              ref: p,
                                              cropFraming: !S,
                                              frameAspectRatio: U,
                                              overlay: G,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, a.jsx)("div", {
                                          className: eo.fL,
                                          children: (0, a.jsx)(e2, { transitionState: t, voiceAudioTracks: R }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}
