l.d(t, { $: () => lr, default: () => lo });
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(17928),
    o = l(990078),
    c = l(521489),
    d = l(231723),
    u = l(192308),
    m = l(534514),
    h = l(408278),
    p = l(405433),
    f = l(241326),
    x = l(972213),
    g = l(775602),
    v = l(793574),
    j = l(688810),
    b = l(274372),
    C = l(939249),
    y = l(548411),
    A = l(256905),
    N = l(372684),
    E = l(878185);
function k() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: E.OC }),
            (0, a.jsx)("div", {
                className: E.f4,
                children: (0, a.jsxs)("div", {
                    className: E.fL,
                    children: [
                        (0, a.jsx)("div", { className: E.u }),
                        (0, a.jsx)("div", { className: E.ou }),
                        (0, a.jsx)("div", { className: E.PH }),
                    ],
                }),
            }),
        ],
    });
}
l(321073);
var S = l(735438),
    I = l.n(S),
    w = l(194498),
    L = l(607470),
    M = l(226421),
    R = l(118356),
    D = l(97808),
    T = l(778712),
    O = l(834730),
    P = l(287809),
    U = l(690521),
    G = l(562153);
l(323874), l(14289), l(35956);
var z = l(77729),
    _ = l(399925),
    V = l(956050);
let H = n.createContext(null);
function $(e) {
    var t, s, i;
    let r,
        o,
        c,
        d,
        u,
        m,
        h,
        { children: p, clip: f, modalContainerRef: x } = e,
        g = f.type === N.nQ.SCREENSHOT,
        {
            initialDuration: v,
            initialCropStart: j,
            initialCropEnd: b,
            initialCurrentTime: C,
        } = ((r = f.length / 1e3),
        (o = f.editMetadata?.start ?? 0),
        (c = f.editMetadata?.end ?? 0),
        (d = 0 !== o || (0 !== c && c !== r)),
        {
            initialDuration: r,
            initialCropStart: o,
            initialCropEnd: c,
            isCropped: d,
            initialCurrentTime: d ? o : r / 2,
        }),
        y = n.useMemo(
            () =>
                null == z.A.clips.getClipProtocolURLFromPath ? null : z.A.clips.getClipProtocolURLFromPath(f.filepath),
            [f.filepath],
        ),
        [A, E] = n.useState({
            clipName: f.name,
            isTemporary: f.isTemporary ?? !1,
            cropStart: j,
            cropEnd: 0 === b ? v : b,
            voiceAudioEnabled: f.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: f.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: f.editMetadata?.soundboardAudio ?? !0,
        }),
        {
            clipName: k,
            isTemporary: I,
            cropStart: L,
            cropEnd: M,
            voiceAudioEnabled: R,
            applicationAudioEnabled: D,
            soundboardAudioEnabled: T,
        } = A,
        O = n.useRef(null),
        P = n.useRef(C),
        [U, G] = n.useState(v),
        [$, F] = n.useState(!1),
        [K, B] = n.useState(!1),
        Q = n.useRef(new Set()),
        X = n.useRef(!1),
        [Y, q] = n.useState(null),
        [Z, W] = n.useState(null),
        [J, ee] = n.useState(null),
        [et, el] = n.useState([]),
        [ea, en] = n.useState(!1),
        es = n.useCallback(
            () => ({
                ...f,
                name: k,
                editMetadata: { start: L, end: M, applicationAudio: D, voiceAudio: R, soundboardAudio: T },
            }),
            [f, k, L, M, D, R, T],
        ),
        ei = n.useCallback((e) => {
            (O.current = e), q(e.videoElement);
        }, []),
        er = n.useCallback((e, t, l) => {
            W(e), el(t), ee(l);
        }, []),
        eo = n.useCallback(() => {
            en(!0);
        }, []);
    (t = f.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("92994"), l.b));
            return (
                (async function () {
                    let l;
                    try {
                        l = await z.A.clips.loadClip(t);
                    } catch {
                        eo();
                        return;
                    }
                    (e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: a } = e.data,
                            n = URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                            s = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            s.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        er(n, s, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })));
                    }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]);
                })(),
                () => {
                    e.terminate();
                }
            );
        }, [t, er, eo]),
        n.useEffect(
            () => () => {
                null != Z && URL.revokeObjectURL(Z);
            },
            [Z],
        ),
        n.useEffect(
            () => () => {
                for (let e of et) URL.revokeObjectURL(e.url);
            },
            [et],
        ),
        n.useEffect(
            () => () => {
                null != J && URL.revokeObjectURL(J);
            },
            [J],
        ),
        (s = f.id),
        (i = { name: k, editMetadata: { start: L, end: M, voiceAudio: R, applicationAudio: D, soundboardAudio: T } }),
        ((u = n.useRef(i)).current = i),
        n.useEffect(() => {
            async function e() {
                let e = {},
                    t = u.current;
                g || null == y || (e = { thumbnail: await (0, V.m)(y, t.editMetadata.start) }),
                    (0, _.Yy)(s, { ...t, ...e });
            }
            return () => {
                e();
            };
        }, [s, y, g, u]),
        n.useEffect(() => {
            U > 0 && M <= 0 && v <= 0 && E((e) => ({ ...e, cropEnd: U }));
        }, [U, M, v]);
    let ec = n.useMemo(() => M - L, [L, M]),
        ed = n.useCallback(
            (e) => (
                Q.current.add(e),
                () => {
                    Q.current.delete(e);
                }
            ),
            [Q],
        ),
        {
            setCropStart: eu,
            setCropEnd: em,
            setCrop: eh,
        } = ((m = n.useCallback(
            (e) => {
                let t = (0, S.clamp)(e, 0, M - 1);
                E((e) => ({ ...e, cropStart: t })), O?.current?.seek(t);
            },
            [M, E, O],
        )),
        {
            setCropStart: m,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, S.clamp)(e, L + 1, U);
                    E((e) => ({ ...e, cropEnd: t })), O?.current?.seek(t);
                },
                [L, U, E, O],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    E((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [E],
            ),
        }),
        {
            play: ep,
            pause: ef,
            seek: ex,
        } = ((h = n.useCallback(() => {
            O?.current?.play();
        }, [O])),
        {
            play: h,
            pause: n.useCallback(() => {
                O?.current?.pause();
            }, [O]),
            seek: n.useCallback(
                (e) => {
                    O?.current?.seek(e);
                },
                [O],
            ),
        });
    (0, w.A)(() => {
        let e = O.current?.videoElement;
        if (null == e || !X.current) return;
        let t = e.currentTime;
        P.current !== t && ((P.current = t), Q.current.forEach((e) => e.onTimeUpdate?.(t))),
            x.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        n.useEffect(() => {
            if (null == Y) return;
            let e = () => {
                    F(!0), Q.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    F(!1), Q.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    G(Y.duration);
                },
                a = () => {
                    B(!0), G(Y.duration), O?.current?.seek(C);
                },
                n = () => {
                    X.current = !0;
                };
            return (
                Y.addEventListener("play", e),
                Y.addEventListener("pause", t),
                Y.addEventListener("durationchange", l),
                Y.addEventListener("loadedmetadata", a),
                Y.addEventListener("seeked", n),
                Y.duration > 0 && G(Y.duration),
                Y.readyState >= 1 && (B(!0), O?.current?.seek(C)),
                F(!Y.paused),
                () => {
                    Y.removeEventListener("play", e),
                        Y.removeEventListener("pause", t),
                        Y.removeEventListener("durationchange", l),
                        Y.removeEventListener("loadedmetadata", a),
                        Y.removeEventListener("seeked", n);
                }
            );
        }, [Y, C, O, Q, F, B, G, X]);
    let eg = n.useCallback((e) => {
            E((t) => ({ ...t, clipName: e }));
        }, []),
        ev = n.useCallback((e) => {
            E((t) => ({ ...t, isTemporary: e }));
        }, []),
        ej = n.useCallback((e) => {
            E((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eb = n.useCallback((e) => {
            E((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eC = n.useCallback((e) => {
            E((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        ey = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(P.current);
                    return (
                        n.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                Q.current.add(e),
                                () => {
                                    Q.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [P, Q],
        ),
        eA = n.useMemo(
            () => ({
                useCurrentTime: ey,
                duration: U,
                isPlaying: $,
                isLoaded: K,
                cropStart: L,
                cropEnd: M,
                cropDuration: ec,
                setCropStart: eu,
                setCropEnd: em,
                setCrop: eh,
                play: ep,
                pause: ef,
                seek: ex,
                subscribe: ed,
                setVideoPlayerRef: ei,
                videoPlayerRef: O,
                videoURL: Z,
                audioTracks: et,
                hasError: ea,
                applicationAudioEnabled: D,
                setApplicationAudioEnabled: ej,
                voiceAudioEnabled: R,
                setVoiceAudioEnabled: eb,
                soundboardAudioEnabled: T,
                setSoundboardAudioEnabled: eC,
                getEditedClip: es,
                clipName: k,
                setClipName: eg,
                isTemporary: I,
                audioURL: J,
                setIsTemporary: ev,
            }),
            [
                ey,
                U,
                $,
                K,
                L,
                M,
                ec,
                eu,
                em,
                eh,
                ep,
                ef,
                ex,
                J,
                ed,
                ei,
                Z,
                et,
                ea,
                D,
                ej,
                R,
                eb,
                T,
                eC,
                es,
                k,
                eg,
                I,
                ev,
            ],
        );
    return (0, a.jsx)(H.Provider, { value: eA, children: p });
}
function F() {
    let e = n.useContext(H);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
var K = l(731854),
    B = l(178420);
let Q = new R.Vy("ClipsSpeakingOverlay");
class X {
    timeline;
    userSpeakingStates;
    activeSoundboards;
    soundboardPlayCounts;
    constructor(e) {
        for (const t of ((this.timeline = new Map()),
        (this.userSpeakingStates = new Map()),
        (this.activeSoundboards = new Map()),
        (this.soundboardPlayCounts = new Map()),
        [...e].sort((e, t) => e.timestamp - t.timestamp)))
            t.signal.type === N.Gy.SPEAKING
                ? this.processSpeakingEvent(t.signal)
                : t.signal.type === N.Gy.SOUNDBOARD && this.processSoundboardEvent(t.signal),
                this.timeline.set(t.timestamp, this.getCurrentSnapshot());
    }
    getSoundboardKey(e, t) {
        return `${e}:${t}`;
    }
    processSpeakingEvent(e) {
        !this.userSpeakingStates.has(e.userId) &&
            0 === e.speakingFlags &&
            (this.userSpeakingStates.set(e.userId, !0),
            this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())),
            this.userSpeakingStates.set(e.userId, (e.speakingFlags & K.ME.VOICE) === K.ME.VOICE);
    }
    processSoundboardEvent(e) {
        let t = this.getSoundboardKey(e.soundboardId, e.userId),
            l = this.soundboardPlayCounts.get(t) ?? 0;
        if (
            (0 === l &&
                !e.playing &&
                (this.soundboardPlayCounts.set(t, 1),
                this.activeSoundboards.set(t, {
                    soundboardId: e.soundboardId,
                    name: e.name,
                    userId: e.userId,
                    emojiId: e.emojiId,
                    emojiName: e.emojiName,
                    emojiAnimated: e.emojiAnimated,
                }),
                this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())),
            e.playing)
        )
            this.soundboardPlayCounts.set(t, l + 1),
                this.activeSoundboards.set(t, {
                    soundboardId: e.soundboardId,
                    name: e.name,
                    userId: e.userId,
                    emojiId: e.emojiId,
                    emojiName: e.emojiName,
                    emojiAnimated: e.emojiAnimated,
                });
        else {
            let e = Math.max(0, l - 1);
            this.soundboardPlayCounts.set(t, e), 0 === e && this.activeSoundboards.delete(t);
        }
    }
    getCurrentSnapshot() {
        return {
            speakingUserIds: Array.from(this.userSpeakingStates.entries())
                .filter((e) => {
                    let [t, l] = e;
                    return l;
                })
                .map((e) => {
                    let [t, l] = e;
                    return t;
                }),
            activeSoundboards: Array.from(this.activeSoundboards.values()),
        };
    }
    getEventsAtTimestamp(e) {
        let t = Array.from(this.timeline.keys()).sort((e, t) => e - t),
            l = 0,
            a = t.length - 1,
            n = -1;
        for (; l <= a; ) {
            let s = Math.floor((l + a) / 2);
            t[s] <= e ? ((n = s), (l = s + 1)) : (a = s - 1);
        }
        return -1 === n
            ? { speakingUserIds: [], activeSoundboards: [] }
            : (this.timeline.get(t[n]) ?? { speakingUserIds: [], activeSoundboards: [] });
    }
}
function Y(e) {
    let { clip: t, soundboardAudioEnabled: l, voiceAudioEnabled: s } = e,
        { useCurrentTime: i, subscribe: o } = F(),
        c = i(),
        d = t.decision?.timestamp ?? 0,
        [u] = n.useState(() => new X(t.timeline ?? [])),
        m = d - t.length,
        h = n.useCallback(
            (e) => {
                let t = 1e3 * I().round(e, 3),
                    l = u.getEventsAtTimestamp(m + t);
                return {
                    speakingUserIds: I().sortBy(l.speakingUserIds),
                    activeSoundboards: I().sortBy(l.activeSoundboards, "soundboardId"),
                };
            },
            [u, m],
        ),
        [p, f] = n.useState(() => h(c)),
        x = (0, r.cf)([P.default], () => I().pick(P.default.getUsers(), t.users));
    return (n.useEffect(
        () =>
            o({
                onTimeUpdate: (e) => {
                    let t = h(e);
                    f((e) =>
                        I().isEqual(t, e)
                            ? e
                            : (Q.info("Event snapshot changed", { newEventSnapshot: t, currentEventSnapshot: e }), t),
                    );
                },
            }),
        [o, h],
    ),
    null == d)
        ? null
        : (0, a.jsxs)("div", {
              className: B.h8,
              children: [
                  s &&
                      p.speakingUserIds.map((e) => {
                          let l = x[e];
                          if (null == l) return null;
                          let n = (0, G.mG)(t.guildId, t.channelId, l);
                          return (0, a.jsxs)(
                              "div",
                              {
                                  className: B.q7,
                                  children: [
                                      (0, a.jsx)(D.eu, {
                                          "aria-label": n,
                                          size: T._3.SIZE_24,
                                          src: l.getAvatarURL(null, 24, !1),
                                      }),
                                      (0, a.jsx)(O.E, {
                                          className: B.Xh,
                                          color: "always-white",
                                          variant: "text-sm/normal",
                                          children: n,
                                      }),
                                  ],
                              },
                              e,
                          );
                      }),
                  l &&
                      p.activeSoundboards.map((e) => {
                          let t = x[e.userId];
                          return null == t
                              ? null
                              : (0, a.jsxs)(
                                    "div",
                                    {
                                        className: B.q7,
                                        children: [
                                            (0, a.jsx)(D.eu, {
                                                "aria-label": t.username,
                                                size: T._3.SIZE_24,
                                                src: t.getAvatarURL(null, 24, !1),
                                            }),
                                            null != e.emojiId || null != e.emojiName
                                                ? (0, a.jsx)("img", {
                                                      alt: e.name,
                                                      className: B.g8,
                                                      src: (0, U.Ez)(
                                                          {
                                                              id: e.emojiId,
                                                              name: e.emojiName ?? "",
                                                              animated: e.emojiAnimated ?? !1,
                                                          },
                                                          24,
                                                      ),
                                                  })
                                                : null,
                                            (0, a.jsx)(O.E, {
                                                className: B.Xh,
                                                color: "always-white",
                                                variant: "text-sm/normal",
                                                children: e.name,
                                            }),
                                        ],
                                    },
                                    `${e.soundboardId}:${e.userId}`,
                                );
                      }),
              ],
          });
}
var q = l(696016),
    Z = l(97451),
    W = l(813433);
function J(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: s } = t;
    if (!s && l && a && n)
        if (e.includes(q.gC.ALL)) return !1;
        else return !0;
    return e.includes(q.gC.APPLICATION) ? !l : e.includes(q.gC.VOICE) ? !a : !e.includes(q.gC.SOUNDBOARD) || !n;
}
function ee(e) {
    let { setRef: t, audioTrackLabel: l, src: s, muted: i } = e,
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
        src: s ?? void 0,
        muted: i,
        preload: "auto",
        className: W.R,
        onLoadedMetadata: o,
    });
}
let et = n.forwardRef(function (e, t) {
    let { clip: l, applicationAudioEnabled: s, voiceAudioEnabled: i, soundboardAudioEnabled: r } = e,
        { cropStart: o, cropEnd: c, setVideoPlayerRef: d, videoURL: u, audioURL: m } = F(),
        h = n.useRef({}),
        p = n.useRef(!1),
        [f, x] = n.useState([]),
        g = n.useCallback(() => {
            let e = h.current.main;
            if (null == e) return;
            let t = (0, S.round)(e.currentTime, 3),
                l = (0, S.round)(o, 3);
            if (t >= (null != c ? (0, S.round)(c, 3) : (0, S.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(h.current)) null != e && (e.currentTime = o);
                return !0;
            }
        }, [o, c]),
        v = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(q.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(q.gC.VOICE) || l.label.includes(q.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            x(t);
        }, []);
    (0, w.A)(() => {
        p.current && g() && j();
    });
    let j = n.useCallback(() => {
            for (let e of ((p.current = !0), g(), Object.values(h.current))) null != e && e.play();
        }, [g]),
        b = n.useCallback(() => {
            for (let e of Object.values(h.current)) null != e && e.pause();
        }, []),
        C = n.useCallback((e) => {
            for (let t of (h.current.main?.paused && (p.current = !1), Object.values(h.current)))
                null != t && (t.currentTime = e);
        }, []),
        y = n.useCallback(() => {
            h.current.main?.paused ? j() : b();
        }, [j, b]),
        A = n.useCallback((e) => {
            h.current.main = e;
        }, []),
        E = n.useCallback((e, t) => {
            h.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: j, seek: C, pause: b, videoElement: h.current.main };
        return d(e), e;
    }, [j, C, b, d]);
    let k = n.useCallback(() => {
        C(o);
    }, [C, o]);
    if (null == u) return null;
    let I = l.type === N.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: Z.DV,
        children: [
            I
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: A, src: u, muted: !0, preload: "auto" }),
                          (0, a.jsx)(M.A, { className: Z.Ap }),
                      ],
                  })
                : (0, a.jsx)(L.A, {
                      onClick: y,
                      className: Z.Ap,
                      ref: A,
                      src: u,
                      muted: J(":all", {
                          applicationAudioEnabled: s,
                          voiceAudioEnabled: i,
                          soundboardAudioEnabled: r,
                          isVoiceClip: I,
                      }),
                      preload: "auto",
                      onLoadedData: k,
                  }),
            (0, a.jsx)(Y, { soundboardAudioEnabled: r, voiceAudioEnabled: i, clip: l }),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: m ?? void 0,
                muted: J(":application", {
                    applicationAudioEnabled: s,
                    voiceAudioEnabled: i,
                    soundboardAudioEnabled: r,
                    isVoiceClip: I,
                }),
                className: W.R,
                preload: "auto",
                ref: (e) => E(e, "main:application"),
                onLoadedMetadata: v,
            }),
            f.map((e) =>
                (0, a.jsx)(
                    ee,
                    {
                        setRef: E,
                        audioTrackLabel: e,
                        src: m,
                        muted: J(e, {
                            applicationAudioEnabled: s,
                            voiceAudioEnabled: i,
                            soundboardAudioEnabled: r,
                            isVoiceClip: I,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});
var el = l(702841),
    ea = l(459192),
    en = l(768622),
    es = l(661531),
    ei = l(27232),
    er = l(918715),
    eo = l(297152),
    ec = l(369606),
    ed = l(138134),
    eu = l(499373),
    em = l(175841),
    eh = l(215026),
    ep = l(534890),
    ef = l(461150),
    ex = l(782134),
    eg = l(113494),
    ev = l(898196),
    ej = l(187322),
    eb = l(565645),
    eC = l(765671),
    ey = l(531685),
    eA = l(427262);
l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var eN = l(602853),
    eE = l(602674),
    ek = l(335416),
    eS = l(664875);
let eI = new Map(),
    ew = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: s, onMouseDown: r, className: o } = e,
            c = n.useRef(null),
            { ref: d, width: u, height: m } = (0, eC.Ay)(),
            [h, p] = n.useState(null),
            f = (0, eN.r)(es.A.colors.BACKGROUND_MOD_STRONG).hex();
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
            if (0 === u || 0 === s.length || null == c.current) return;
            let e = `${t}-${s.map((e) => e.trackName).join(",")}-${u}`,
                l = eI.get(e);
            if (null != l) return void p(l.waveform);
            let a = c.current,
                n = !1,
                i = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? q.nx.error("Failed to load waveform:", a) : (eI.set(e, { waveform: l }), p(l));
                };
            return (
                a.addEventListener("message", i),
                (async () => {
                    try {
                        let e = (0, eE.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(s.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            i = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                t.push(a), i.push(a.buffer);
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: u }, i);
                    } catch (e) {
                        n || q.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (n = !0), a.removeEventListener("message", i);
                }
            );
        }, [s, t, u]),
        n.useEffect(() => {
            if (null == d.current || null == h || (u ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = d.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / h.length,
                s = -(n * (ek.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), (t.fillStyle = f);
            for (let e = 0; e < h.length; e++) {
                let l = h[e] * a,
                    i = e * n + s;
                t.fillRect(i, a, n - s, -l);
            }
        }, [f, u, d, m, h]),
        0 === s.length)
            ? null
            : (0, a.jsx)("div", {
                  className: i()(eS.k, o),
                  children: (0, a.jsx)("canvas", {
                      className: eS.s,
                      ref: d,
                      width: (u ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
function eL(e, t) {
    let l = e / q.YM;
    return t && (l /= q.iJ), l;
}
var eM = l(985018),
    eR = l(445563),
    eD = l(474847);
function eT(e) {
    let { eventType: t, importance: l, style: s, title: i, description: r } = e,
        c = n.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        d = n.useMemo(() => {
            switch (t) {
                case N.rb.KILL:
                    return (0, a.jsx)(en.g, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.MULTIKILL:
                    return (0, a.jsx)(ei.G, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.DEATH:
                    return (0, a.jsx)(er.V, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.ASSIST:
                    return (0, a.jsx)(eo.E, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.ITEM:
                    return (0, a.jsx)(ei.G, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.VICTORY:
                    return (0, a.jsx)(ec.O, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.DEFEAT:
                    return (0, a.jsx)(ed.i, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.LEVEL_UP:
                    return (0, a.jsx)(eu.T, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.TREASURE:
                    return (0, a.jsx)(em.B, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                case N.rb.OBJECTIVE_KILL:
                    return (0, a.jsx)(eh.w, { size: "custom", width: c, height: c, color: es.A.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, c]);
    if (null == d) return null;
    let u = (0, a.jsx)("div", { className: eD.HS, style: s, children: d });
    return null != i || null != r
        ? null == i || null == r
            ? (0, a.jsx)(o.m, { text: i ?? r, position: "top", children: u })
            : (0, a.jsx)(ea.u, { title: i, body: r ?? "", position: "top", children: u })
        : u;
}
function eO(e) {
    let { videoLength: t, clip: l, onMouseDown: s } = e,
        { timeNotches: i, subNotches: r } = n.useMemo(() => {
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
                s = e / 5;
            for (let e = s; e < t; e += s)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    n.push({ position: l });
                }
            return { timeNotches: l, subNotches: n };
        }, [t]);
    return (0, a.jsx)("div", {
        className: eD.ZX,
        onMouseDown: s,
        children: (0, a.jsxs)("div", {
            className: eD.QY,
            children: [
                r.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eD.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eD.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                i.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eD.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eD.d9 }),
                                (0, a.jsxs)(O.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eD.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(eP, { clip: l, videoLength: t }),
                (0, a.jsx)(eU, { clip: l, videoLength: t }),
                (0, a.jsx)(eG, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function eP(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === N.Gy.GAME_EVENT),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      eT,
                      {
                          eventType: e.signal.eventType,
                          importance: e.signal.importance ?? 0,
                          title: e.signal.title,
                          description: e.signal.description,
                          style: { left: `${l}%` },
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
function eU(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === N.Gy.SOUNDBOARD && !0 === e.signal.playing),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            if (null == l || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let n = P.default.getUser(e.signal.userId),
                s = (0, eA.mG)(n);
            return (0, a.jsx)(
                ea.u,
                {
                    title: e.signal.name,
                    body: s ?? "",
                    position: "top",
                    children: (0, a.jsx)("div", {
                        className: eD.HS,
                        style: { left: `${l}%` },
                        children: (0, a.jsx)(eb.A, {
                            emojiId: e.signal.emojiId ?? null,
                            emojiName: e.signal.emojiName ?? null,
                            animated: e.signal.emojiAnimated,
                            size: "reaction",
                        }),
                    }),
                },
                `${e.timestamp}-${t}`,
            );
        }),
    });
}
function eG(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === N.Gy.PHRASE),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      ea.u,
                      {
                          title: eM.intl.string(eM.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, a.jsx)("div", {
                              className: eD.HS,
                              style: { left: `${l}%` },
                              children: (0, a.jsx)(ep.o, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: es.A.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
let ez = function (e) {
    let { sourceURL: t, clip: l, voiceAudioTracks: s, transitionState: r } = e,
        {
            useCurrentTime: o,
            duration: c,
            isPlaying: d,
            cropStart: u,
            cropEnd: m,
            cropDuration: p,
            setCropStart: f,
            setCropEnd: x,
            play: g,
            pause: v,
            subscribe: j,
            seek: b,
        } = F(),
        C = o(),
        y = n.useRef(null),
        [A, N] = n.useState(!1),
        [E, k] = n.useState(null),
        I = n.useRef(null),
        w = n.useRef(null),
        [M, R] = n.useState(!1),
        [D, T] = n.useState(null);
    n.useEffect(
        () =>
            j({
                onPlay: () => {
                    k(null), R(!1);
                },
            }),
        [j],
    );
    let { ref: P, width: U = 0, height: G = 0 } = (0, eC.Ay)(),
        z = (0, el.bG)([ey.A], () => ey.A.windowSize());
    n.useMemo(() => {
        z.width, z.height;
        let e = P.current;
        null != e && T(e.getBoundingClientRect());
    }, [z.width, z.height, U, P, r]);
    let _ = n.useRef(null),
        V = n.useRef({}),
        H = n.useCallback(
            (e, t) => {
                if (null == c) return;
                if (null == D) return null;
                let l = (((0, S.clamp)(e, D.left, D.right) - D.left) / D.width) * c,
                    a = (0, S.clamp)(l, 0, c),
                    n = E;
                null == n && t && ((n = a <= u ? "start" : a >= m ? "end" : "playhead"), d && (v(), R(!0)), k(n)),
                    "start" === n ? f(a) : "end" === n ? x(a) : "playhead" === n && b((0, S.clamp)(a, u, m));
            },
            [c, D, E, u, m, d, v, f, x, b],
        ),
        $ = n.useCallback(
            (e) => {
                if (null == c) return;
                let t = eL(c, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), f(u - t);
                        break;
                    case "ArrowRight":
                        (l = !0), f(u + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [c, f, u],
        ),
        K = n.useCallback(
            (e) => {
                if (null == c) return;
                let t = eL(c, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), x(m - t);
                        break;
                    case "ArrowRight":
                        (l = !0), x(m + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [c, x, m],
        ),
        B = n.useCallback(
            (e) => {
                H(e.clientX, !0);
            },
            [H],
        ),
        Q = n.useCallback(
            (e) => {
                H(e.clientX, !1);
            },
            [H],
        ),
        X = n.useCallback(() => {
            M && g(), R(!1), k(null);
        }, [M, g]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", Q),
            document.addEventListener("mouseup", X),
            () => {
                document.removeEventListener("mousemove", Q), document.removeEventListener("mouseup", X);
            }
        ),
        [Q, X],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = P.current,
                    t = y.current;
                if (null == e || null == t || !A) return;
                (e.height = G), (e.width = U);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, U, G);
                let a = Math.ceil(G * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(U / a),
                    s = _.current;
                if (null == s) return;
                (s.width = a), (s.height = G);
                let i = s?.getContext("2d", { willReadFrequently: !0 });
                if (null == i) return;
                let r = V.current;
                if (r[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(r[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((s) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, G), i.drawImage(t, 0, 0, a, G);
                            let o = i.getImageData(0, 0, a, G);
                            null == r[n] && (r[n] = []), (r[n][e] = o), s();
                        }),
                            (t.currentTime = (a / U) * c * e);
                    });
            })();
        }, [U, G, P, c, _, A]);
    let Y = C - u,
        Z = n.useCallback(() => {
            b(Math.max(u, C - 10));
        }, [u, C, b]),
        W = n.useCallback(() => {
            b(Math.min(m, C + 10));
        }, [m, C, b]),
        J = n.useCallback(() => {
            d ? v() : g();
        }, [d, g, v]),
        ee = n.useCallback(() => N(!0), []),
        et = (u / c) * 100,
        ea = (1 - (c - m) / c) * 100,
        en = {
            background: `linear-gradient(to right, var(--black-500) ${et}%, transparent ${et}%, transparent ${ea}%, var(--black-500) ${ea}%)`,
        };
    return (0, a.jsx)("div", {
        className: eD.f4,
        children: (0, a.jsxs)("div", {
            className: eD.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: eD.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: eD.k2,
                            children: (0, a.jsx)("div", {
                                ref: w,
                                className: eD.re,
                                children: (0, a.jsxs)(O.E, {
                                    variant: "text-sm/normal",
                                    className: eD.g7,
                                    color: "text-muted",
                                    children: [e_(Y), (0, a.jsx)("span", { className: eD.xW, children: " / " }), e_(p)],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: eD.s2,
                            children: [
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: ef.q,
                                    onClick: Z,
                                    "aria-label": eM.intl.string(eR.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    icon: d ? eg.E : ex.u,
                                    onClick: J,
                                    "aria-label": eM.intl.string(d ? eM.t.ZcgDJX : eM.t.RscU7I),
                                }),
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: ev.i,
                                    onClick: W,
                                    "aria-label": eM.intl.string(eR.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(ew, { onMouseDown: B, voiceAudioTracks: s, clipId: l.id, className: eD.ou }),
                (0, a.jsx)(eO, { onMouseDown: B, videoLength: c, clip: l }),
                (0, a.jsx)("div", {
                    className: eD.PH,
                    children: (0, a.jsxs)("div", {
                        className: i()(eD.IO, { [eD.Dg]: null != E }),
                        onMouseDown: B,
                        children: [
                            (0, a.jsx)("canvas", { className: eD.zj, ref: _ }),
                            (0, a.jsx)("canvas", { className: eD.Ay, ref: P }),
                            (0, a.jsx)(ej.vN, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: I, className: eD.lG }),
                            }),
                            (0, a.jsx)(L.A, {
                                preload: "auto",
                                className: eD.Fi,
                                ref: y,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ee,
                            }),
                            (0, a.jsx)("div", { className: eD.QT, style: en }),
                            (0, a.jsxs)("div", {
                                className: eD.Ws,
                                style: {
                                    left: null != c ? `${(u / c) * 100}%` : "0",
                                    right: null != c ? `${((c - m) / c) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(ej.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: i()(eD.uI, { [eD.cB]: "start" === E }),
                                            onMouseDown: B,
                                            onKeyDown: $,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": u,
                                            "aria-valuetext": eV(u),
                                            "aria-valuemax": m - q.zj,
                                            "aria-label": eM.intl.string(eM.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: eD.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(ej.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: i()(eD.H1, { [eD.cB]: "end" === E }),
                                            onMouseDown: B,
                                            onKeyDown: K,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": u + q.zj,
                                            "aria-valuenow": m,
                                            "aria-valuetext": eV(m),
                                            "aria-valuemax": c,
                                            "aria-label": eM.intl.string(eM.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: eD.kn }),
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
};
function e_(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function eV(e) {
    let t = Math.floor(e / 60),
        l = eM.intl.formatToPlainString(eM.t.iXLF9W, { minutes: t }),
        a = eM.intl.formatToPlainString(eM.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function eH(e) {
    let { transitionState: t, clip: l, onClose: s } = e,
        {
            applicationAudioEnabled: i,
            voiceAudioEnabled: r,
            soundboardAudioEnabled: o,
            cropStart: c,
            cropEnd: u,
            videoPlayerRef: m,
            videoURL: p,
            audioTracks: f,
        } = F(),
        x = l.type === N.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!x) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.role === "textbox") return;
            let t = m.current;
            if (null == t) return;
            let l = m.current?.videoElement;
            if (null == l) return;
            let a = eL(l.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    (n = !0), l.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (n = !0), t.seek(Math.max(c, l.currentTime - a));
                    break;
                case "ArrowRight":
                    (n = !0), t.seek(Math.min(u, l.currentTime + a));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [m, x, l.type, c, u]);
    let g = n.useMemo(() => f.filter((e) => e.trackName.includes(":voice")), [f]),
        v = n.useCallback(() => {
            (0, A.R)(
                {
                    items: [{ type: "IMAGE", url: l.thumbnail, proxyUrl: l.thumbnail, alt: l.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [l.thumbnail, l.name]);
    if (x)
        return (0, a.jsx)("div", {
            className: Z.OJ,
            children:
                t !== d.ip.ENTERED
                    ? (0, a.jsx)(k, {})
                    : (0, a.jsx)("div", {
                          className: Z.zT,
                          children: (0, a.jsx)(C.D, {
                              className: Z.xS,
                              onClick: v,
                              children: (0, a.jsx)("img", { className: Z.V_, src: l.thumbnail, alt: l.name ?? "" }),
                          }),
                      }),
        });
    let j = null == p || t !== d.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: Z.OJ,
        children: (0, a.jsxs)("div", {
            className: Z.zT,
            children: [
                (0, a.jsx)("div", {
                    className: Z.Gv,
                    children: (0, a.jsx)(h.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: y.Z,
                        "aria-label": eM.intl.string(eM.t["13/7kX"]),
                        onClick: s,
                    }),
                }),
                j
                    ? (0, a.jsx)(k, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(et, {
                                  applicationAudioEnabled: i,
                                  voiceAudioEnabled: r,
                                  soundboardAudioEnabled: o,
                                  ref: m,
                                  clip: l,
                              }),
                              (0, a.jsx)(ez, { transitionState: t, sourceURL: p, clip: l, voiceAudioTracks: g }),
                          ],
                      }),
            ],
        }),
    });
}
var e$ = l(342952),
    eF = l(92446),
    eK = l(364522),
    eB = l(270003),
    eQ = l(683071),
    eX = l(331322),
    eY = l(821609),
    eq = l(292666),
    eZ = l(413887),
    eW = l(452027),
    eJ = l(825484),
    e0 = l(365199),
    e1 = l(442433),
    e3 = l(429913),
    e6 = l(47167),
    e2 = l(713654),
    e9 = l(137177),
    e5 = l(145497),
    e8 = l(734057),
    e4 = l(540999),
    e7 = l(71393),
    te = l(58703),
    tt = l(403362);
function tl(e) {
    return n.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            switch (t.type) {
                case N.Gy.GAME_EVENT:
                    return t.description ?? t.title ?? eM.intl.string(eM.t.Cyxddp);
                case N.Gy.PHRASE:
                    return `"${t.text}"`;
            }
        }
        return eM.intl.string(eM.t.Cyxddp);
    }, [e.name, e.decision]);
}
var ta = l(794905),
    tn = l(16590),
    ts = l(567282);
function ti(e) {
    let { clip: t, channelId: s, onClose: i } = e,
        o = t.type === N.nQ.SCREENSHOT,
        {
            getEditedClip: c,
            voiceAudioEnabled: d,
            setVoiceAudioEnabled: f,
            applicationAudioEnabled: x,
            setApplicationAudioEnabled: g,
            soundboardAudioEnabled: v,
            setSoundboardAudioEnabled: j,
            pause: C,
            clipName: y,
            setClipName: A,
            isTemporary: E,
            setIsTemporary: k,
        } = F(),
        S = (0, e3.h)(t.applicationId),
        I = (0, r.bG)([b.A], () => b.A.isClipExporting(t.id)),
        { onShareClick: w } = (0, ta.A)(s),
        L = (0, r.bG)([e4.A], () => e4.A.isDeveloper),
        M = tl(t),
        R = n.useCallback(async () => {
            await (0, _.w7)(t.id), k(!1);
        }, [t.id, k]),
        D = (0, r.yK)([P.default], () => t.users.map(P.default.getUser).filter(tt.Vq)),
        T = (0, r.bG)([e7.A], () => (t.version >= 3 && null != t.guildId ? e7.A.getGuild(t.guildId) : null)),
        U = (0, r.bG)([e8.A], () => (t.version >= 3 && null != t.channelId ? e8.A.getChannel(t.channelId) : null)),
        G = (0, e6.Ay)(U),
        z = null != U ? (0, e2.gU)(U, T) : null;
    return (0, a.jsxs)("div", {
        className: ts.XV,
        children: [
            (0, a.jsxs)("div", {
                className: ts.eW,
                children: [
                    (0, a.jsx)("div", {
                        className: ts.VW,
                        children: (0, a.jsx)(m.D, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            className: ts.qd,
                            children: eM.intl.string(tn.default["snNYS+"]),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: ts.Pz,
                        children:
                            L &&
                            (0, a.jsx)(h.K, {
                                onClick: function () {
                                    (0, u.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (l) => (0, a.jsx)(e, { ...l, clip: t });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: eF.Q,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                    }),
                ],
            }),
            (0, a.jsx)(eK.Ip, {
                className: ts.Md,
                children: (0, a.jsxs)(eB.n, {
                    children: [
                        E &&
                            (0, a.jsx)(eQ.w, {
                                type: "info",
                                children: (0, a.jsxs)(eX.B, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(O.E, {
                                            variant: "text-sm/normal",
                                            children: eM.intl.string(eM.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(eY.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: R,
                                            text: eM.intl.string(eM.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(eq.k, {
                            label: eM.intl.string(eM.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? A(void 0) : A(e);
                            },
                            value: y,
                            minLength: q.U_,
                            maxLength: q.mk,
                            placeholder: M,
                        }),
                        !o &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(eZ.A, { label: eM.intl.string(eM.t.GnQui9), checked: x, onChange: g }),
                                    (0, a.jsx)(eZ.A, {
                                        label: eM.intl.string(eM.t["5mVOCb"]),
                                        checked: d,
                                        onChange: f,
                                    }),
                                    (0, a.jsx)(eZ.A, {
                                        label: eM.intl.string(eM.t["8K7Ges"]),
                                        checked: v,
                                        onChange: j,
                                    }),
                                ],
                            }),
                        (0, a.jsx)(eW.D, {
                            label: eM.intl.string(eM.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(O.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, te.mk)(new Date(t.createdAt)),
                            }),
                        }),
                        (0, a.jsx)(eW.D, {
                            label: eM.intl.string(eM.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(e$.A, { users: D, maxUsers: 10 }),
                        }),
                        null != S &&
                            (0, a.jsx)(eW.D, {
                                label: eM.intl.string(tn.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: ts._c,
                                    children: [
                                        (0, a.jsx)(e9.A, { game: S, size: e9.M.XXSMALL, className: ts.Z9 }),
                                        (0, a.jsx)(O.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: ts.lR,
                                            children: S?.name ?? t.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != T &&
                            (0, a.jsx)(eW.D, {
                                label: eM.intl.string(eM.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: ts._c,
                                    children: [
                                        (0, a.jsx)(e5.Ay, { guild: T, iconSize: 16, className: ts.Z9 }),
                                        (0, a.jsx)(O.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: ts.lR,
                                            children: T.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != U &&
                            null != z &&
                            (0, a.jsx)(eW.D, {
                                label: eM.intl.string(eM.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: ts._c,
                                    children: [
                                        (0, a.jsx)(z, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: ts.Z9,
                                        }),
                                        (0, a.jsx)(O.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: ts.lR,
                                            children: G,
                                        }),
                                    ],
                                }),
                            }),
                        t.version >= 3 &&
                            null != t.activity &&
                            (null != t.activity.state || null != t.activity.details) &&
                            (0, a.jsx)(eW.D, {
                                label: eM.intl.string(eM.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, a.jsx)(O.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [t.activity.state, t.activity.details].filter(Boolean).join(" › "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: ts.G3,
                children: (0, a.jsxs)(eJ.e, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(eY.$, {
                            loading: I,
                            disabled: I,
                            variant: "primary",
                            icon: p.l,
                            iconPosition: "start",
                            onClick: () => w({ clips: [c()] }),
                            text: eM.intl.string(eM.t.RDE0Sc),
                        }),
                        (0, a.jsx)(h.K, {
                            "aria-label": eM.intl.string(eM.t.PdRCRg),
                            loading: I,
                            disabled: I,
                            variant: "secondary",
                            onClick: function (e) {
                                C(),
                                    (0, e1.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            l.e("66900"),
                                            l.e("98793"),
                                            l.e("73500"),
                                            l.e("18489"),
                                            l.e("36926"),
                                            l.e("69006"),
                                            l.e("80628"),
                                        ]).then(l.bind(l, 183903));
                                        return (t) =>
                                            (0, a.jsx)(e, { ...t, clips: [c()], channelId: s, onAfterDelete: i });
                                    });
                            },
                            icon: e0.j,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var tr = l(110259),
    to = l(289873),
    tc = l(139286),
    td = l(962125),
    tu = l(989349),
    tm = l.n(tu),
    th = l(66455),
    tp = l(890856),
    tf = l(777666),
    tx = l(505930),
    tg = l(530005),
    tv = l(406810),
    tj = l(176781),
    tb = l(983851),
    tC = l(31300),
    ty = l(587895),
    tA = l(549685),
    tN = l(954571),
    tE = l(665039),
    tk = l(652215),
    tS = l(798594);
let tI = function (e) {
    let { clip: t, actionsDisabled: s, isNew: o, onEdit: c, onClick: d } = e,
        u = (0, r.yK)([P.default], () => t.users.map((e) => P.default.getUser(e)).filter(tt.Vq)),
        m = (0, r.bG)([e8.A], () => (null != t.channelId ? e8.A.getChannel(t.channelId) : null)),
        h = (0, r.bG)([e7.A], () => (null != t.guildId ? e7.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, j.Ay)(v.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: x, isMultiSelectMode: g } = n.useContext(lr),
        [C, y] = n.useState(!1),
        A = n.useRef(null),
        E = (0, th.A)(t.editMetadata?.start ?? 0),
        k = f.has(t.id),
        S = t.type === N.nQ.SCREENSHOT,
        I = (0, e6.Ay)(m),
        w = "" === t.applicationName && null != I && "" !== I ? I : t.applicationName,
        L = (0, te.Fe)(new Date(t.createdAt)),
        M = n.useMemo(() => {
            let e = [];
            return (
                t.type === N.nQ.VOICE_CLIP
                    ? (h?.name != null && e.push(h.name), null != I && e.push(I))
                    : ("" !== w && null != w && e.push(w),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [w, h?.name, I, t.activity?.state, t.activity?.details, t.type]),
        R = n.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        D = n.useCallback(() => {
            if (!0 === S) return;
            let e = A.current;
            null != e && e.paused && ((e.currentTime = E.current), A.current?.play());
        }, [S, E]),
        U = n.useCallback(() => {
            if (!0 === S) return;
            let e = A.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [S, t.editMetadata?.start]),
        G = n.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && U();
            },
            [U],
        ),
        z = n.useCallback(() => {
            y(!1);
        }, []),
        _ = n.useCallback(
            (e) => {
                y(!0), A.current?.pause();
                let n =
                    g && f.size > 0
                        ? Array.from(f)
                              .map((e) => b.A.getClipById(e))
                              .filter(tt.Vq)
                        : [t];
                (0, e1.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("66900"),
                            l.e("98793"),
                            l.e("73500"),
                            l.e("18489"),
                            l.e("36926"),
                            l.e("69006"),
                            l.e("80628"),
                        ]).then(l.bind(l, 183903));
                        return (l) =>
                            (0, a.jsx)(e, {
                                ...l,
                                clips: n,
                                actionsDisabled: s,
                                showShareAndEdit: !0,
                                onShare: () => {
                                    tN.default.track(tk.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(t), tN.default.track(tk.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: R,
                                onAfterDelete: () => {
                                    tN.default.track(tk.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: z },
                );
            },
            [t, g, f, s, R, z, c],
        ),
        V = n.useCallback(
            (e) => {
                s || (e.preventDefault(), e.stopPropagation(), _(e));
            },
            [s, _],
        ),
        H = n.useCallback(
            (e) => {
                s ||
                    (e.shiftKey ? (e.preventDefault(), x(t.id)) : g ? x(t.id) : null != d && d(t),
                    tN.default.track(tk.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [s, g, x, t, d],
        );
    return (0, a.jsx)(j.f5, {
        value: p,
        children: (0, a.jsxs)(tp.s, {
            "aria-disabled": s,
            "aria-label": eM.intl.string(!0 === S ? eM.t["HO/oXl"] : eM.t.bt75uw),
            onClick: s ? void 0 : H,
            onContextMenu: V,
            className: i()(tS.QN, { [tS.r9]: s, [tS.in]: C, [tS.wH]: k }),
            onBlur: G,
            onFocus: D,
            onMouseOver: D,
            onMouseLeave: U,
            children: [
                (0, a.jsx)(tw, { clip: t, isNew: o, videoRef: A, onOpenContextMenu: _, actionsDisabled: s }),
                (0, a.jsxs)("div", {
                    className: tS.wI,
                    children: [
                        (0, a.jsx)(tR, { clip: t }),
                        (0, a.jsxs)("div", {
                            className: tS.i0,
                            children: [
                                (0, a.jsx)(tL, { clip: t }),
                                (0, a.jsx)(O.E, {
                                    className: tS.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                                (0, a.jsx)(O.E, {
                                    className: tS.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: L,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: tS.jW,
                            children: (0, a.jsx)(e$.A, {
                                maxUsers: 3,
                                users: u,
                                size: T._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && D());
                                },
                                "aria-label": eM.intl.string(eM.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function tw(e) {
    let { clip: t, isNew: l, videoRef: s, onOpenContextMenu: i, actionsDisabled: r } = e,
        c = 0 === t.length,
        d = !0 === t.pending,
        [u, m] = n.useState(0);
    n.useEffect(() => {
        let e = s.current;
        if (null == e || c) return;
        let l = null,
            a = () => {
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let n = t.editMetadata?.start ?? 0,
                    s = t.editMetadata?.end ?? e.duration,
                    i = ((e.currentTime - n) / (s - n)) * 100;
                m(isNaN(i) ? 0 : Math.max(0, Math.min(100, i))), (l = requestAnimationFrame(a));
            },
            n = () => {
                null == l && (l = requestAnimationFrame(a));
            },
            i = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", n),
            e.addEventListener("pause", i),
            e.addEventListener("ended", i),
            e.paused || n(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", n),
                    e.removeEventListener("pause", i),
                    e.removeEventListener("ended", i);
            }
        );
    }, [s, c, t.editMetadata]);
    let { durationDisplay: p, isClipEdited: f } = n.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                a = !1;
            if (null != t.editMetadata) {
                let n = null != l && 1e3 * l < t.length,
                    s =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (a = n || s), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let n = tm().duration(e),
                s = n.minutes(),
                i = n.seconds();
            return 0 === s
                ? { durationDisplay: `${i}s`, isClipEdited: a }
                : { durationDisplay: `${s}:${i.toString().padStart(2, "0")}`, isClipEdited: a };
        }, [t.length, t.editMetadata]),
        x = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), _.XK(t);
            },
            [t],
        ),
        g = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || i(e);
            },
            [r, i],
        );
    return (0, a.jsxs)("div", {
        className: tS.QB,
        children: [
            (0, a.jsx)("div", { className: tS.ne }),
            !d && l && (0, a.jsx)(tf.Lp, { className: tS.Ad, text: eM.intl.string(eM.t.y2b7CA) }),
            !r &&
                (0, a.jsxs)("div", {
                    className: tS.g3,
                    children: [
                        (0, a.jsx)(
                            o.m,
                            {
                                text: eM.intl.string(t.isFavorite ? tn.default.IZsalP : tn.default.ihBfyA),
                                position: "top",
                                children: (0, a.jsx)(h.K, {
                                    onClick: x,
                                    icon: t.isFavorite ? ei.G : tx.y,
                                    "aria-label": eM.intl.string(eM.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, a.jsx)(h.K, {
                            onClick: g,
                            icon: tg.F,
                            "aria-label": eM.intl.string(eM.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, a.jsx)(tM, { clip: t, videoRef: s }),
            (0, a.jsxs)("div", {
                className: tS.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, a.jsxs)("div", {
                            className: tS.OH,
                            children: [
                                t.isTemporary && (0, a.jsx)(tv.O, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(O.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: eM.intl.string(eM.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, a.jsxs)("div", {
                            className: tS.OH,
                            children: [
                                f && (0, a.jsx)(tA.A, { color: "white", width: 16, height: 16 }),
                                (0, a.jsx)("span", {
                                    children: (0, a.jsx)(O.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: d ? eM.intl.string(eM.t["2Fp7OP"]) : p,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, a.jsx)("div", {
                    className: tS.X7,
                    children: (0, a.jsx)("div", { className: tS.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function tL(e) {
    let { clip: t } = e,
        l = tl(t),
        n = "" !== l;
    return (0, a.jsx)(O.E, {
        className: tS.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: n ? l : t.name,
    });
}
function tM(e) {
    let { clip: t, videoRef: l } = e,
        n = (0, tE.j)(t),
        s = t.type === N.nQ.SCREENSHOT;
    return t.type === N.nQ.VOICE_CLIP
        ? (0, a.jsx)(M.A, { className: tS.fT })
        : s
          ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: tS.fT })
          : null != n
            ? (0, a.jsx)(L.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: n,
                  loop: !0,
                  className: tS.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: tS.fT })
              : (0, a.jsx)("div", {
                    className: i()(tS.fT, tS.Is),
                    children: (0, a.jsx)(tj.x, { color: es.A.colors.ICON_MUTED }),
                });
}
function tR(e) {
    let { clip: t } = e,
        l = (0, r.bG)([ty.A], () => (null != t.applicationId ? ty.A.getApplication(t.applicationId) : null)),
        n = l?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: tS.gS,
        "aria-hidden": "true",
        children:
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: tS.NH })
                : t.type === N.nQ.VOICE_CLIP
                  ? (0, a.jsx)(tb.H, { size: "sm", color: "currentColor" })
                  : (0, a.jsx)(tC.k, { size: "sm", color: "currentColor" }),
    });
}
function tD(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: s, width: i = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: r },
        src: "https://cdn.discordapp.com/assets/content/469fc21d7c695426b2a4476c47ce30c6ff93031a6c38a6bdf12f95264ae547f6.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: s ?? "img",
    });
}
var tT = l(687966),
    tO = l(475358),
    tP = l(123292),
    tU = l(292801),
    tG = l(780964),
    tz = l(858897),
    t_ = l(532624),
    tV = l(350535),
    tH = l(311162);
function t$(e) {
    let { header: t, description: l } = e;
    return (0, a.jsxs)("div", {
        className: tH.Nr,
        children: [t, (0, a.jsx)(O.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function tF() {
    let e = (0, el.bG)([t_.Ay], () => t_.Ay.getKeybindForAction(tk.hCu.SAVE_CLIP)),
        t = null != e ? tV.dI(e.shortcut, !0) : null;
    return (0, a.jsxs)("div", {
        className: tH.kR,
        children: [
            (0, a.jsx)(t$, {
                header: (0, a.jsx)(tT._, { size: "refresh_sm", color: es.A.colors.ICON_DEFAULT }),
                description: eM.intl.string(tn.default["4K56sP"]),
            }),
            (0, a.jsx)(t$, {
                header: null != t ? (0, a.jsx)(tO.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  eM.intl.format(tn.default.BIwQis, { keybind: t }),
                                  (0, a.jsx)("div", {
                                      className: tH.JH,
                                      children: (0, a.jsx)(tP.Q, {
                                          text: eM.intl.string(tn.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, tz.openUserSettings)(tG.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : eM.intl.string(tn.default.HOUDUm),
            }),
            (0, a.jsx)(t$, {
                header: (0, a.jsx)(tU.t, { size: "refresh_sm", color: es.A.colors.ICON_DEFAULT }),
                description: eM.intl.string(tn.default.DLzdl7),
            }),
        ],
    });
}
function tK(e) {
    let { isEmptyBecauseQuery: t } = e;
    return (0, a.jsx)("div", {
        className: tH.kL,
        children: (0, a.jsxs)("div", {
            className: tH.Qs,
            children: [
                (0, a.jsx)(tD, { width: 213, height: 135, alt: "" }),
                (0, a.jsx)(m.D, {
                    className: tH.wx,
                    variant: "heading-xl/semibold",
                    children: t ? eM.intl.string(tn.default["+M2iLf"]) : eM.intl.string(tn.default.m2GEpP),
                }),
                t
                    ? (0, a.jsx)(O.E, {
                          className: tH.h_,
                          variant: "text-md/medium",
                          children: eM.intl.string(tn.default.xkY5xS),
                      })
                    : (0, a.jsx)(tF, {}),
            ],
        }),
    });
}
var tB = l(352528);
let tQ = 16 / 9,
    tX = [0, 16, 0, 16],
    tY = tX[1] + tX[3];
function tq(e, t) {
    return Math.ceil(t / e);
}
function tZ(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: s, onEdit: i } = e,
        [o, c] = n.useState(!0),
        [d, u] = n.useState({ width: 0, height: 0 }),
        h = (0, r.bG)([b.A], () => b.A.getSettings().storageLocation),
        p = (0, r.yK)([b.A], () => b.A.getNewClipIds()),
        f = (0, r.bG)([b.A], () => b.A.getExportingClipIds().length > 0);
    (0, tc.A)(
        {
            type: tr.ImpressionTypes.MODAL,
            name: tr.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: o },
        [t.length, o],
    ),
        n.useEffect(
            () => (
                (0, _.jA)(),
                () => {
                    (0, _.jA)(), (0, _.Su)();
                }
            ),
            [],
        );
    let x = n.useMemo(() => {
            let e = [],
                l = new Map(),
                a = [],
                n = new Date();
            n.setHours(0, 0, 0, 0);
            let s = n.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        n = new Date(t);
                    if ((n.setHours(0, 0, 0, 0), n.getTime() === s)) a.push(e);
                    else {
                        let a = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            n = l.get(a) ?? [];
                        l.set(a, [...n, e]);
                    }
                }),
                a.length > 0)
            ) {
                let t = a.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: eM.intl.string(eM.t["kB2R/0"]),
                    description: t ? eM.intl.string(eM.t["6AXirz"]) : void 0,
                    clips: a,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, a] = t;
                    e.push({ type: "monthyear", title: l, clips: a });
                }),
                e
            );
        }, [t]),
        { width: g } = d,
        { tileWidth: v, columns: j } = n.useMemo(() => {
            var e;
            let l, a, n, s, i;
            return (
                (e = t.length),
                (n = 16 * ((a = Math.max(1, Math.floor(((l = g - tY) + 16) / 336))) - 1)),
                (s = Math.max(320, (l - n) / a)),
                (i = tq(a, e)),
                { tileWidth: s, columns: a, rows: i }
            );
        }, [t.length, g]);
    n.useEffect(() => {
        !(async function () {
            c(!0);
            try {
                await _.Fb(h);
            } finally {
                c(!1);
            }
        })();
    }, [h]);
    let C = n.useMemo(() => x.map((e) => tq(j, e.clips.length)), [x, j]),
        y = n.useMemo(() => C.reduce((e, t) => e + t, 0), [C]),
        A = Math.floor(v / tQ),
        N = n.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: n } = t,
                    r = x[l];
                if (null == r) return null;
                let o = n * j,
                    c = r.clips.slice(o, o + j);
                return (0, a.jsx)(
                    "div",
                    {
                        className: tB.UX,
                        children: c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    style: { width: v },
                                    children: (0, a.jsx)(tI, {
                                        actionsDisabled: f,
                                        isNew: p.includes(e.id),
                                        onClick: s ?? i,
                                        onEdit: i,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    `row-${l}-${n}`,
                );
            },
            [x, j, v, f, p, s, i],
        ),
        E = n.useCallback(
            (e) => {
                let t = x[e];
                return t?.description != null ? 66 : 44;
            },
            [x],
        ),
        k = n.useCallback(
            (e) => {
                let t = x[e];
                return null == t
                    ? null
                    : (0, a.jsxs)(
                          "div",
                          {
                              className: tB.aE,
                              children: [
                                  (0, a.jsx)(m.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, a.jsx)(O.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tB.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [x],
        );
    return o || 0 !== x.length
        ? o
            ? (0, a.jsx)("div", { className: tB.dc, children: (0, a.jsx)(to.y, {}) })
            : (0, a.jsx)(td.A, {
                  listPadding: tX,
                  renderRow: N,
                  renderSectionHeader: k,
                  rowCount: y,
                  rowCountBySection: C,
                  rowHeight: A + 68 + 16,
                  sectionHeaderHeight: E,
                  onResize: u,
              })
        : (0, a.jsx)(tK, { isEmptyBecauseQuery: l > 0 });
}
var tW = l(922016),
    tJ = l(783977),
    t0 = l(625903),
    t1 = l(892547),
    t3 = l(91871),
    t6 = l.n(t3),
    t2 = l(550079),
    t9 = l(477782),
    t5 = l(583650),
    t8 = l(353640);
let t4 = {
        query: "",
        sortOrder: "descending",
        selectedGameId: null,
        selectedUserIds: new Set(),
        selectedActivity: null,
        selectedGuildId: null,
        selectedYear: null,
    },
    t7 = (0, t8.v)((e) => ({
        ...t4,
        setQuery: (t) => e({ query: t }),
        setSortOrder: (t) => e({ sortOrder: t }),
        setSelectedGameId: (t) => e({ selectedGameId: t }),
        setSelectedUserIds: (t) => e({ selectedUserIds: t }),
        toggleUserId: (t) =>
            e((e) => {
                let l = new Set(e.selectedUserIds);
                return l.has(t) ? l.delete(t) : l.add(t), { selectedUserIds: l };
            }),
        setSelectedActivity: (t) => e({ selectedActivity: t }),
        setSelectedGuildId: (t) => e({ selectedGuildId: t }),
        setSelectedYear: (t) => e({ selectedYear: t }),
        clearFilters: () =>
            e({ selectedUserIds: new Set(), selectedActivity: null, selectedGuildId: null, selectedYear: null }),
        resetFilters: () => e(t4),
    }));
function le(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: s,
            selectedActivity: i,
            selectedGuildId: r,
            selectedYear: o,
            sortOrder: c,
            toggleUserId: d,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setSelectedYear: h,
            setSortOrder: p,
            clearFilters: f,
        } = t7(),
        x = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = P.default.getUser(e);
                        if (null != t) {
                            let a = t.globalName ?? t.username;
                            l.push({ userId: e, name: a });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        g = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e)
                        l.activity?.state != null && t.add(l.activity.state),
                            l.activity?.details != null && t.add(l.activity.details);
                    return Array.from(t).sort((e, t) => e.localeCompare(t));
                })(l),
            [l],
        ),
        v = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = e7.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        j = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) {
                        let e = new Date(l.createdAt).getFullYear();
                        t.add(e);
                    }
                    return Array.from(t).sort((e, t) => t - e);
                })(l),
            [l],
        ),
        [b, C] = n.useState(""),
        [y, A] = n.useState(""),
        [N, E] = n.useState(""),
        k = n.useMemo(
            () => (0 === b.trim().length ? x : x.filter((e) => t6()(b.toLowerCase(), e.name.toLowerCase()))),
            [x, b],
        ),
        S = n.useMemo(
            () => (0 === y.trim().length ? v : v.filter((e) => t6()(y.toLowerCase(), e.name.toLowerCase()))),
            [v, y],
        ),
        I = n.useMemo(
            () => (0 === N.trim().length ? g : g.filter((e) => t6()(N.toLowerCase(), e.toLowerCase()))),
            [g, N],
        ),
        w = s.size > 0 || null != i || null != r || null != o,
        L = n.useMemo(() => {
            if (0 !== s.size)
                return x
                    .filter((e) => s.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [s, x]),
        M = n.useMemo(() => {
            if (null == r) return;
            let e = v.find((e) => e.guildId === r);
            return e?.name;
        }, [r, v]),
        R = n.useMemo(() => i ?? void 0, [i]),
        D = n.useMemo(() => (null != o ? String(o) : void 0), [o]);
    return (0, a.jsxs)(t2.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": eM.intl.string(eM.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, a.jsxs)(t9.rX, {
                label: "Filter",
                children: [
                    x.length > 0 &&
                        (0, a.jsxs)(t9.Dr, {
                            id: "participants",
                            label: eM.intl.string(eM.t.YQ6dJg),
                            subtext: L,
                            children: [
                                x.length > 20 &&
                                    (0, a.jsx)(t9.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t5.V, {
                                                ...e,
                                                query: b,
                                                onChange: C,
                                                ref: t,
                                                placeholder: eM.intl.string(eM.t["5h0QOP"]),
                                            }),
                                    }),
                                k.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        t9.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: s.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, a.jsxs)(t9.Dr, {
                            id: "servers",
                            label: eM.intl.string(eM.t["5qyruI"]),
                            subtext: M,
                            children: [
                                v.length > 20 &&
                                    (0, a.jsx)(t9.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t5.V, {
                                                ...e,
                                                query: y,
                                                onChange: A,
                                                ref: t,
                                                placeholder: eM.intl.string(eM.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(t9.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: eM.intl.string(eM.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                S.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        t9.iD,
                                        {
                                            id: `server-${t}`,
                                            group: "server",
                                            label: l,
                                            action: () => m(t),
                                            checked: r === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    g.length > 0 &&
                        (0, a.jsxs)(t9.Dr, {
                            id: "activities",
                            label: eM.intl.string(eM.t.agRtPG),
                            subtext: R,
                            children: [
                                g.length > 20 &&
                                    (0, a.jsx)(t9.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t5.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: eM.intl.string(eM.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(t9.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: eM.intl.string(eM.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == i,
                                }),
                                I.map((e) =>
                                    (0, a.jsx)(
                                        t9.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => u(e),
                                            checked: i === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    j.length > 0 &&
                        (0, a.jsxs)(t9.Dr, {
                            id: "years",
                            label: eM.intl.string(eM.t.w9zd68),
                            subtext: D,
                            children: [
                                (0, a.jsx)(t9.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: eM.intl.string(eM.t["2/yeUU"]),
                                    action: () => h(null),
                                    checked: null == o,
                                }),
                                j.map((e) =>
                                    (0, a.jsx)(
                                        t9.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => h(e),
                                            checked: o === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsxs)(t9.rX, {
                label: eM.intl.string(eM.t.XvNMNk),
                children: [
                    (0, a.jsx)(t9.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: eM.intl.string(eM.t["4LLKx3"]),
                        action: () => p("descending"),
                        checked: "descending" === c,
                    }),
                    (0, a.jsx)(t9.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: eM.intl.string(eM.t["0gitSE"]),
                        action: () => p("ascending"),
                        checked: "ascending" === c,
                    }),
                ],
            }),
            w &&
                (0, a.jsx)(t9.rX, {
                    children: (0, a.jsx)(t9.Dr, { id: "clear-filters", label: eM.intl.string(eM.t.FbDgiu), action: f }),
                }),
        ],
    });
}
var lt = l(174726);
let ll = n.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: s } = t7(),
            i = (0, el.bG)([t_.Ay], () => t_.Ay.getKeybindForAction(tk.hCu.SAVE_CLIP)),
            r = t7(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = n.useCallback(() => {
                (0, tz.openUserSettings)(tG.X.CLIPS_PANEL);
            }, []),
            d = n.useCallback(() => s(""), [s]),
            u = null != i ? tV.dI(i.shortcut, !0) : null,
            p = n.useRef(null);
        return (0, a.jsxs)("div", {
            className: lt.aN,
            children: [
                (0, a.jsxs)("div", {
                    className: lt.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: lt.Pe,
                            children: [
                                (0, a.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: eM.intl.string(eM.t.z2jK6X),
                                }),
                                null != u && (0, a.jsx)(tO.e, { className: lt.P, shortcut: u }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: lt.$s,
                            children: [
                                (0, a.jsx)(o.m, {
                                    text: eM.intl.string(eM.t.X7yRDm),
                                    children: (0, a.jsx)(tW.Y, {
                                        position: "bottom",
                                        targetElementRef: p,
                                        renderPopout: (e) => (0, a.jsx)(le, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, a.jsx)("div", {
                                                ref: p,
                                                children:
                                                    r > 0
                                                        ? (0, a.jsx)(eY.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: eM.intl.formatToPlainString(tn.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: tJ.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, a.jsx)(h.K, {
                                                              icon: tJ.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": eM.intl.string(eM.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, a.jsx)(o.m, {
                                    text: eM.intl.string(eM.t["3D5yo/"]),
                                    children: (0, a.jsx)(h.K, {
                                        onClick: c,
                                        icon: t0.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eM.intl.string(eM.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: lt.MT,
                    children: (0, a.jsx)(t1.I, {
                        placeholder: eM.intl.string(eM.t["5h0QOP"]),
                        query: l,
                        onChange: s,
                        onClear: d,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    la = n.memo(function (e) {
        let { name: t, count: l, icon: n, isSelected: s, onClick: r } = e;
        return (0, a.jsxs)(C.D, {
            className: i()(lt.MV, { [lt.wH]: s }),
            onClick: r,
            children: [
                (0, a.jsxs)("div", {
                    className: lt.tk,
                    children: [
                        n,
                        (0, a.jsx)(O.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: lt.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: lt.z2,
                    children: (0, a.jsx)(O.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function ln(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: s, allClips: i } = e,
        r = t7((e) => e.selectedGameId),
        o = t7((e) => e.setSelectedGameId),
        c = n.useMemo(() => t.map((e) => e.applicationId), [t]),
        d = (0, e3.A)(c),
        u = n.useCallback(() => o(null), [o]),
        h = n.useCallback(() => o("favorites"), [o]),
        p = n.useMemo(() => new Map(d.map((e) => [e?.id, e])), [d]);
    return (0, a.jsxs)("div", {
        className: lt.pz,
        children: [
            (0, a.jsx)(ll, { allClips: i }),
            (0, a.jsxs)("div", {
                className: lt.wp,
                children: [
                    (0, a.jsx)("div", {
                        className: lt.om,
                        children: (0, a.jsxs)("div", {
                            className: lt.Ep,
                            children: [
                                (0, a.jsx)(la, {
                                    name: eM.intl.string(eM.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, a.jsx)(tj.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, a.jsx)(la, {
                                    name: eM.intl.string(eM.t["9rlCk1"]),
                                    count: s.length,
                                    icon: (0, a.jsx)(ei.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: h,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, a.jsxs)(eK.Ip, {
                            className: lt.om,
                            fade: !0,
                            children: [
                                (0, a.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: lt.a9,
                                    children: eM.intl.string(eM.t.URyqtP),
                                }),
                                (0, a.jsx)("div", {
                                    className: lt.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: n } = e;
                                        return (0, a.jsx)(
                                            la,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, a.jsx)(e9.A, { game: p.get(n), size: e9.M.XSMALL }),
                                                isSelected: r === n,
                                                onClick: () => o(n),
                                            },
                                            n,
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function ls(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : "descending" === t
          ? e.sort((e, t) => t.createdAt - e.createdAt)
          : e;
}
var li = l(847455);
let lr = n.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lo(e) {
    let t,
        s,
        C,
        { channelId: y, onClose: A, onClipClick: N, transitionState: E, initialEditingClipId: k, ...S } = e,
        { analyticsLocations: I } = (0, j.Ay)(v.A.CLIPS_GALLERY),
        [w, L] = n.useState(new Set()),
        {
            clipsByGame: M,
            filteredClips: R,
            favoriteClips: D,
            allClips: T,
        } = ((t = (0, r.yK)([b.A], () => b.A.getClips())),
        (s = (0, r.bG)([b.A], () => b.A.getPendingClips())),
        (C = t7()),
        n.useMemo(() => {
            let e = [...s, ...t],
                l = new Map(),
                a = [];
            for (let t of e) {
                let e = (function (e, t) {
                    if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                        return !1;
                    if ("" !== t.query.trim()) {
                        let l = t.query.toLowerCase(),
                            a = null != e.name && t6()(l, e.name.toLowerCase()),
                            n = t6()(l, e.applicationName.toLowerCase()),
                            s = e.activity?.state != null && t6()(l, e.activity.state.toLowerCase()),
                            i = e.activity?.details != null && t6()(l, e.activity.details.toLowerCase());
                        if (!a && !n && !s && !i) return !1;
                    }
                    if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                    if (null !== t.selectedActivity) {
                        let l = e.activity?.state,
                            a = e.activity?.details;
                        if (l !== t.selectedActivity && a !== t.selectedActivity) return !1;
                    }
                    return (null === t.selectedYear || tm()(e.createdAt).year() === t.selectedYear) && !0;
                })(t, C);
                if ((e && a.push(t), null == t.applicationId)) continue;
                let n = l.get(t.applicationId);
                null == n
                    ? l.set(t.applicationId, {
                          clips: [t],
                          filteredClips: e ? [t] : [],
                          mostRecentClipCreatedAt: t.createdAt,
                          name: t.applicationName,
                      })
                    : (n.clips.push(t),
                      e && n.filteredClips.push(t),
                      t.createdAt > n.mostRecentClipCreatedAt && (n.mostRecentClipCreatedAt = t.createdAt));
            }
            let n = ls(a, C.sortOrder),
                i = ls(
                    a.filter((e) => e.isFavorite),
                    C.sortOrder,
                );
            return {
                clipsByGame: Array.from(l.entries())
                    .map((e) => {
                        let [t, l] = e;
                        return {
                            applicationId: t,
                            name: l.name,
                            count: l.filteredClips.length,
                            mostRecentClipCreatedAt: l.mostRecentClipCreatedAt,
                            filteredClips: ls(l.filteredClips, C.sortOrder),
                        };
                    })
                    .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
                allClips: e,
                filteredClips: n,
                favoriteClips: i,
            };
        }, [t, s, C])),
        { onShareClick: O } = (0, ta.A)(y),
        P = (0, r.bG)([b.A], () => b.A.getExportingClipIds().length > 0),
        [U, G] = n.useState(null != k ? "editing" : "gallery"),
        [z, _] = n.useState(k ?? null),
        V = (0, r.bG)([b.A], () => (null != z ? b.A.getClipById(z) : null), [z]),
        H = n.useRef(U);
    H.current = U;
    let [F, K] = n.useState(null != k ? d.ip.ENTERED : d.ip.HIDDEN),
        B = n.useRef(null),
        Q = t7((e) => e.selectedGameId),
        X = n.useMemo(
            () => (null == Q || "favorites" === Q ? null : (M.find((e) => e.applicationId === Q) ?? null)),
            [Q, M],
        ),
        Y = n.useMemo(() => ("favorites" === Q ? D : (X?.filteredClips ?? R)), [Q, X, R, D]),
        q = n.useMemo(
            () => ("favorites" === Q ? eM.intl.string(eM.t["9rlCk1"]) : (X?.name ?? eM.intl.string(eM.t.dPVrEv))),
            [Q, X],
        ),
        Z = n.useCallback(() => {
            G("editing"), g.A.useReducedMotion && K(d.ip.ENTERED);
        }, []),
        W = n.useCallback((e) => {
            L((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        J = n.useCallback(
            (e) => {
                _(e.id), Z();
            },
            [Z],
        ),
        ee = n.useCallback(() => {
            g.A.useReducedMotion && _(null), G("gallery");
        }, []);
    n.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === H.current && (e.stopPropagation(), ee());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ee, A]);
    let et = n.useCallback(() => {
            L(new Set());
        }, []),
        el = w.size > 0,
        ea = n.useCallback(() => {
            let e = T.filter((e) => w.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, a.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                et(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [T, w, et]),
        en = n.useCallback(async () => {
            let e = T.filter((e) => w.has(e.id));
            await O({ clips: e }), et();
        }, [T, w, O, et]),
        es = n.useMemo(
            () => ({ selectedClipIds: w, toggleClipSelection: W, clearSelection: et, isMultiSelectMode: el }),
            [w, W, et, el],
        );
    return (0, a.jsx)(j.f5, {
        value: I,
        children: (0, a.jsx)(lr.Provider, {
            value: es,
            children: (0, a.jsx)(c.N, {
                onClose: A,
                transitionState: E,
                ...S,
                children: (0, a.jsxs)("div", {
                    className: li.jT,
                    ref: B,
                    children: [
                        (0, a.jsxs)("div", {
                            className: i()(li.PD, "gallery" === U && li.vu),
                            "aria-hidden": "gallery" !== U,
                            children: [
                                (0, a.jsx)(ln, { clipsByGame: M, filteredClips: R, favoriteClips: D, allClips: T }),
                                (0, a.jsxs)("div", {
                                    className: li.Qs,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: li.$Q,
                                            children: [
                                                (0, a.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: q,
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: li.$s,
                                                    children: [
                                                        el &&
                                                            (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(o.m, {
                                                                        text: eM.intl.string(eM.t.RDE0Sc),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: en,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eM.intl.string(eM.t.RDE0Sc),
                                                                            loading: P,
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(o.m, {
                                                                        text: eM.intl.string(eM.t.oyYWHE),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: ea,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eM.intl.string(eM.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, a.jsx)(h.K, {
                                                            onClick: A,
                                                            icon: x.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": eM.intl.string(eM.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(tZ, {
                                            onEdit: J,
                                            channelId: y,
                                            filteredClips: Y,
                                            totalClipCount: T.length,
                                            onClipClick: N,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: i()(li.jN, "editing" === U && li.vu),
                            "aria-hidden": "editing" !== U,
                            onTransitionEnd: () => {
                                "gallery" === U ? (_(null), K(d.ip.HIDDEN)) : "editing" === U && K(d.ip.ENTERED);
                            },
                            children:
                                null != V &&
                                (0, a.jsxs)($, {
                                    clip: V,
                                    modalContainerRef: B,
                                    children: [
                                        (0, a.jsx)(eH, { clip: V, transitionState: F, onClose: ee }),
                                        (0, a.jsx)(ti, { channelId: y, clip: V, onClose: ee }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
