l.d(t, { $: () => lr, default: () => ld });
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(17928),
    d = l(990078),
    o = l(521489),
    c = l(231723),
    u = l(192308),
    m = l(534514),
    h = l(408278),
    p = l(405433),
    v = l(241326),
    f = l(972213),
    g = l(775602),
    x = l(793574),
    j = l(688810),
    b = l(274372),
    C = l(939249),
    y = l(548411),
    N = l(256905),
    A = l(372684),
    E = l(878185);
function w() {
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
var k = l(735438),
    I = l.n(k),
    S = l(194498),
    L = l(607470),
    M = l(226421),
    R = l(118356),
    T = l(97808),
    D = l(778712),
    O = l(834730),
    U = l(287809),
    P = l(690521),
    _ = l(562153);
l(323874), l(14289), l(35956);
var V = l(77729),
    G = l(399925),
    H = l(956050);
let z = n.createContext(null);
function $(e) {
    var t, s, i;
    let r,
        d,
        o,
        c,
        u,
        m,
        h,
        { children: p, clip: v, modalContainerRef: f } = e,
        g = v.type === A.nQ.SCREENSHOT,
        {
            initialDuration: x,
            initialCropStart: j,
            initialCropEnd: b,
            initialCurrentTime: C,
        } = ((r = v.length / 1e3),
        (d = v.editMetadata?.start ?? 0),
        (o = v.editMetadata?.end ?? 0),
        (c = 0 !== d || (0 !== o && o !== r)),
        {
            initialDuration: r,
            initialCropStart: d,
            initialCropEnd: o,
            isCropped: c,
            initialCurrentTime: c ? d : r / 2,
        }),
        y = n.useMemo(
            () =>
                null == V.A.clips.getClipProtocolURLFromPath ? null : V.A.clips.getClipProtocolURLFromPath(v.filepath),
            [v.filepath],
        ),
        [N, E] = n.useState({
            clipName: v.name,
            isTemporary: v.isTemporary ?? !1,
            cropStart: j,
            cropEnd: 0 === b ? x : b,
            voiceAudioEnabled: v.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: v.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: v.editMetadata?.soundboardAudio ?? !0,
        }),
        {
            clipName: w,
            isTemporary: I,
            cropStart: L,
            cropEnd: M,
            voiceAudioEnabled: R,
            applicationAudioEnabled: T,
            soundboardAudioEnabled: D,
        } = N,
        O = n.useRef(null),
        U = n.useRef(C),
        [P, _] = n.useState(x),
        [$, F] = n.useState(!1),
        [B, K] = n.useState(!1),
        Z = n.useRef(new Set()),
        Q = n.useRef(!1),
        [X, Y] = n.useState(null),
        [q, J] = n.useState(null),
        [W, ee] = n.useState(null),
        [et, el] = n.useState([]),
        [ea, en] = n.useState(!1),
        es = n.useCallback(
            () => ({
                ...v,
                name: w,
                editMetadata: { start: L, end: M, applicationAudio: T, voiceAudio: R, soundboardAudio: D },
            }),
            [v, w, L, M, T, R, D],
        ),
        ei = n.useCallback((e) => {
            (O.current = e), Y(e.videoElement);
        }, []),
        er = n.useCallback((e, t, l) => {
            J(e), el(t), ee(l);
        }, []),
        ed = n.useCallback(() => {
            en(!0);
        }, []);
    (t = v.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("72106"), l.b));
            return (
                (async function () {
                    let l;
                    try {
                        l = await V.A.clips.loadClip(t);
                    } catch {
                        ed();
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
        }, [t, er, ed]),
        n.useEffect(
            () => () => {
                null != q && URL.revokeObjectURL(q);
            },
            [q],
        ),
        n.useEffect(
            () => () => {
                for (let e of et) URL.revokeObjectURL(e.url);
            },
            [et],
        ),
        n.useEffect(
            () => () => {
                null != W && URL.revokeObjectURL(W);
            },
            [W],
        ),
        (s = v.id),
        (i = { name: w, editMetadata: { start: L, end: M, voiceAudio: R, applicationAudio: T, soundboardAudio: D } }),
        ((u = n.useRef(i)).current = i),
        n.useEffect(() => {
            async function e() {
                let e = {},
                    t = u.current;
                g || null == y || (e = { thumbnail: await (0, H.m)(y, t.editMetadata.start) }),
                    (0, G.Yy)(s, { ...t, ...e });
            }
            return () => {
                e();
            };
        }, [s, y, g, u]),
        n.useEffect(() => {
            P > 0 && M <= 0 && x <= 0 && E((e) => ({ ...e, cropEnd: P }));
        }, [P, M, x]);
    let eo = n.useMemo(() => M - L, [L, M]),
        ec = n.useCallback(
            (e) => (
                Z.current.add(e),
                () => {
                    Z.current.delete(e);
                }
            ),
            [Z],
        ),
        {
            setCropStart: eu,
            setCropEnd: em,
            setCrop: eh,
        } = ((m = n.useCallback(
            (e) => {
                let t = (0, k.clamp)(e, 0, M - 1);
                E((e) => ({ ...e, cropStart: t })), O?.current?.seek(t);
            },
            [M, E, O],
        )),
        {
            setCropStart: m,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, k.clamp)(e, L + 1, P);
                    E((e) => ({ ...e, cropEnd: t })), O?.current?.seek(t);
                },
                [L, P, E, O],
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
            pause: ev,
            seek: ef,
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
    (0, S.A)(() => {
        let e = O.current?.videoElement;
        if (null == e || !Q.current) return;
        let t = e.currentTime;
        U.current !== t && ((U.current = t), Z.current.forEach((e) => e.onTimeUpdate?.(t))),
            f.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        n.useEffect(() => {
            if (null == X) return;
            let e = () => {
                    F(!0), Z.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    F(!1), Z.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    _(X.duration);
                },
                a = () => {
                    K(!0), _(X.duration), O?.current?.seek(C);
                },
                n = () => {
                    Q.current = !0;
                };
            return (
                X.addEventListener("play", e),
                X.addEventListener("pause", t),
                X.addEventListener("durationchange", l),
                X.addEventListener("loadedmetadata", a),
                X.addEventListener("seeked", n),
                X.duration > 0 && _(X.duration),
                X.readyState >= 1 && (K(!0), O?.current?.seek(C)),
                F(!X.paused),
                () => {
                    X.removeEventListener("play", e),
                        X.removeEventListener("pause", t),
                        X.removeEventListener("durationchange", l),
                        X.removeEventListener("loadedmetadata", a),
                        X.removeEventListener("seeked", n);
                }
            );
        }, [X, C, O, Z, F, K, _, Q]);
    let eg = n.useCallback((e) => {
            E((t) => ({ ...t, clipName: e }));
        }, []),
        ex = n.useCallback((e) => {
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
                    let [e, t] = n.useState(U.current);
                    return (
                        n.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                Z.current.add(e),
                                () => {
                                    Z.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [U, Z],
        ),
        eN = n.useMemo(
            () => ({
                useCurrentTime: ey,
                duration: P,
                isPlaying: $,
                isLoaded: B,
                cropStart: L,
                cropEnd: M,
                cropDuration: eo,
                setCropStart: eu,
                setCropEnd: em,
                setCrop: eh,
                play: ep,
                pause: ev,
                seek: ef,
                subscribe: ec,
                setVideoPlayerRef: ei,
                videoPlayerRef: O,
                videoURL: q,
                audioTracks: et,
                hasError: ea,
                applicationAudioEnabled: T,
                setApplicationAudioEnabled: ej,
                voiceAudioEnabled: R,
                setVoiceAudioEnabled: eb,
                soundboardAudioEnabled: D,
                setSoundboardAudioEnabled: eC,
                getEditedClip: es,
                clipName: w,
                setClipName: eg,
                isTemporary: I,
                audioURL: W,
                setIsTemporary: ex,
            }),
            [
                ey,
                P,
                $,
                B,
                L,
                M,
                eo,
                eu,
                em,
                eh,
                ep,
                ev,
                ef,
                W,
                ec,
                ei,
                q,
                et,
                ea,
                T,
                ej,
                R,
                eb,
                D,
                eC,
                es,
                w,
                eg,
                I,
                ex,
            ],
        );
    return (0, a.jsx)(z.Provider, { value: eN, children: p });
}
function F() {
    let e = n.useContext(z);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
var B = l(731854),
    K = l(178420);
let Z = new R.Vy("ClipsSpeakingOverlay");
class Q {
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
            t.signal.type === A.Gy.SPEAKING
                ? this.processSpeakingEvent(t.signal)
                : t.signal.type === A.Gy.SOUNDBOARD && this.processSoundboardEvent(t.signal),
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
            this.userSpeakingStates.set(e.userId, (e.speakingFlags & B.ME.VOICE) === B.ME.VOICE);
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
function X(e) {
    let { clip: t, soundboardAudioEnabled: l, voiceAudioEnabled: s } = e,
        { useCurrentTime: i, subscribe: d } = F(),
        o = i(),
        c = t.decision?.timestamp ?? 0,
        [u] = n.useState(() => new Q(t.timeline ?? [])),
        m = c - t.length,
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
        [p, v] = n.useState(() => h(o)),
        f = (0, r.cf)([U.default], () => I().pick(U.default.getUsers(), t.users));
    return (n.useEffect(
        () =>
            d({
                onTimeUpdate: (e) => {
                    let t = h(e);
                    v((e) =>
                        I().isEqual(t, e)
                            ? e
                            : (Z.info("Event snapshot changed", { newEventSnapshot: t, currentEventSnapshot: e }), t),
                    );
                },
            }),
        [d, h],
    ),
    null == c)
        ? null
        : (0, a.jsxs)("div", {
              className: K.h8,
              children: [
                  s &&
                      p.speakingUserIds.map((e) => {
                          let l = f[e];
                          if (null == l) return null;
                          let n = (0, _.mG)(t.guildId, t.channelId, l);
                          return (0, a.jsxs)(
                              "div",
                              {
                                  className: K.q7,
                                  children: [
                                      (0, a.jsx)(T.eu, {
                                          "aria-label": n,
                                          size: D._3.SIZE_24,
                                          src: l.getAvatarURL(null, 24, !1),
                                      }),
                                      (0, a.jsx)(O.E, {
                                          className: K.Xh,
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
                          let t = f[e.userId];
                          return null == t
                              ? null
                              : (0, a.jsxs)(
                                    "div",
                                    {
                                        className: K.q7,
                                        children: [
                                            (0, a.jsx)(T.eu, {
                                                "aria-label": t.username,
                                                size: D._3.SIZE_24,
                                                src: t.getAvatarURL(null, 24, !1),
                                            }),
                                            null != e.emojiId || null != e.emojiName
                                                ? (0, a.jsx)("img", {
                                                      alt: e.name,
                                                      className: K.g8,
                                                      src: (0, P.Ez)(
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
                                                className: K.Xh,
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
var Y = l(696016),
    q = l(97451),
    J = l(813433);
function W(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: s } = t;
    if (!s && l && a && n)
        if (e.includes(Y.gC.ALL)) return !1;
        else return !0;
    return e.includes(Y.gC.APPLICATION) ? !l : e.includes(Y.gC.VOICE) ? !a : !e.includes(Y.gC.SOUNDBOARD) || !n;
}
function ee(e) {
    let { setRef: t, audioTrackLabel: l, src: s, muted: i } = e,
        r = n.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        d = n.useCallback(
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
        className: J.R,
        onLoadedMetadata: d,
    });
}
let et = n.forwardRef(function (e, t) {
    let { clip: l, applicationAudioEnabled: s, voiceAudioEnabled: i, soundboardAudioEnabled: r } = e,
        { cropStart: d, cropEnd: o, setVideoPlayerRef: c, videoURL: u, audioURL: m } = F(),
        h = n.useRef({}),
        p = n.useRef(!1),
        [v, f] = n.useState([]),
        g = n.useCallback(() => {
            let e = h.current.main;
            if (null == e) return;
            let t = (0, k.round)(e.currentTime, 3),
                l = (0, k.round)(d, 3);
            if (t >= (null != o ? (0, k.round)(o, 3) : (0, k.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(h.current)) null != e && (e.currentTime = d);
                return !0;
            }
        }, [d, o]),
        x = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(Y.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(Y.gC.VOICE) || l.label.includes(Y.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            f(t);
        }, []);
    (0, S.A)(() => {
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
        N = n.useCallback((e) => {
            h.current.main = e;
        }, []),
        E = n.useCallback((e, t) => {
            h.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: j, seek: C, pause: b, videoElement: h.current.main };
        return c(e), e;
    }, [j, C, b, c]);
    let w = n.useCallback(() => {
        C(d);
    }, [C, d]);
    if (null == u) return null;
    let I = l.type === A.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: q.DV,
        children: [
            I
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: N, src: u, muted: !0, preload: "auto" }),
                          (0, a.jsx)(M.A, { className: q.Ap }),
                      ],
                  })
                : (0, a.jsx)(L.A, {
                      onClick: y,
                      className: q.Ap,
                      ref: N,
                      src: u,
                      muted: W(":all", {
                          applicationAudioEnabled: s,
                          voiceAudioEnabled: i,
                          soundboardAudioEnabled: r,
                          isVoiceClip: I,
                      }),
                      preload: "auto",
                      onLoadedData: w,
                  }),
            (0, a.jsx)(X, { soundboardAudioEnabled: r, voiceAudioEnabled: i, clip: l }),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: m ?? void 0,
                muted: W(":application", {
                    applicationAudioEnabled: s,
                    voiceAudioEnabled: i,
                    soundboardAudioEnabled: r,
                    isVoiceClip: I,
                }),
                className: J.R,
                preload: "auto",
                ref: (e) => E(e, "main:application"),
                onLoadedMetadata: x,
            }),
            v.map((e) =>
                (0, a.jsx)(
                    ee,
                    {
                        setRef: E,
                        audioTrackLabel: e,
                        src: m,
                        muted: W(e, {
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
    ed = l(297152),
    eo = l(369606),
    ec = l(138134),
    eu = l(499373),
    em = l(175841),
    eh = l(215026),
    ep = l(534890),
    ev = l(461150),
    ef = l(782134),
    eg = l(113494),
    ex = l(898196),
    ej = l(187322),
    eb = l(565645),
    eC = l(765671),
    ey = l(531685),
    eN = l(427262);
l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var eA = l(602853),
    eE = l(602674),
    ew = l(335416),
    ek = l(664875);
let eI = new Map(),
    eS = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: s, onMouseDown: r, className: d } = e,
            o = n.useRef(null),
            { ref: c, width: u, height: m } = (0, eC.Ay)(),
            [h, p] = n.useState(null),
            v = (0, eA.r)(es.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(
            () => (
                (o.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    o.current?.terminate();
                }
            ),
            [],
        ),
        n.useEffect(() => {
            if (0 === u || 0 === s.length || null == o.current) return;
            let e = `${t}-${s.map((e) => e.trackName).join(",")}-${u}`,
                l = eI.get(e);
            if (null != l) return void p(l.waveform);
            let a = o.current,
                n = !1,
                i = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? Y.nx.error("Failed to load waveform:", a) : (eI.set(e, { waveform: l }), p(l));
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
                        n || Y.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (n = !0), a.removeEventListener("message", i);
                }
            );
        }, [s, t, u]),
        n.useEffect(() => {
            if (null == c.current || null == h || (u ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = c.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / h.length,
                s = -(n * (ew.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), (t.fillStyle = v);
            for (let e = 0; e < h.length; e++) {
                let l = h[e] * a,
                    i = e * n + s;
                t.fillRect(i, a, n - s, -l);
            }
        }, [v, u, c, m, h]),
        0 === s.length)
            ? null
            : (0, a.jsx)("div", {
                  className: i()(ek.k, d),
                  children: (0, a.jsx)("canvas", {
                      className: ek.s,
                      ref: c,
                      width: (u ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
function eL(e, t) {
    let l = e / Y.YM;
    return t && (l /= Y.iJ), l;
}
var eM = l(985018),
    eR = l(445563),
    eT = l(474847);
function eD(e) {
    let { eventType: t, importance: l, style: s, title: i, description: r } = e,
        o = n.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        c = n.useMemo(() => {
            switch (t) {
                case A.rb.KILL:
                    return (0, a.jsx)(en.g, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.MULTIKILL:
                    return (0, a.jsx)(ei.G, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.DEATH:
                    return (0, a.jsx)(er.V, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.ASSIST:
                    return (0, a.jsx)(ed.E, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.ITEM:
                    return (0, a.jsx)(ei.G, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.VICTORY:
                    return (0, a.jsx)(eo.O, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.DEFEAT:
                    return (0, a.jsx)(ec.i, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.LEVEL_UP:
                    return (0, a.jsx)(eu.T, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.TREASURE:
                    return (0, a.jsx)(em.B, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                case A.rb.OBJECTIVE_KILL:
                    return (0, a.jsx)(eh.w, { size: "custom", width: o, height: o, color: es.A.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, o]);
    if (null == c) return null;
    let u = (0, a.jsx)("div", { className: eT.HS, style: s, children: c });
    return null != i || null != r
        ? null == i || null == r
            ? (0, a.jsx)(d.m, { text: i ?? r, position: "top", children: u })
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
        className: eT.ZX,
        onMouseDown: s,
        children: (0, a.jsxs)("div", {
            className: eT.QY,
            children: [
                r.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eT.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eT.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                i.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eT.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eT.d9 }),
                                (0, a.jsxs)(O.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eT.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(eU, { clip: l, videoLength: t }),
                (0, a.jsx)(eP, { clip: l, videoLength: t }),
                (0, a.jsx)(e_, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function eU(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === A.Gy.GAME_EVENT),
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
                      eD,
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
function eP(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === A.Gy.SOUNDBOARD && !0 === e.signal.playing),
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
            let n = U.default.getUser(e.signal.userId),
                s = (0, eN.mG)(n);
            return (0, a.jsx)(
                ea.u,
                {
                    title: e.signal.name,
                    body: s ?? "",
                    position: "top",
                    children: (0, a.jsx)("div", {
                        className: eT.HS,
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
function e_(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === A.Gy.PHRASE),
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
                              className: eT.HS,
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
let eV = function (e) {
    let { sourceURL: t, clip: l, voiceAudioTracks: s, transitionState: r } = e,
        {
            useCurrentTime: d,
            duration: o,
            isPlaying: c,
            cropStart: u,
            cropEnd: m,
            cropDuration: p,
            setCropStart: v,
            setCropEnd: f,
            play: g,
            pause: x,
            subscribe: j,
            seek: b,
        } = F(),
        C = d(),
        y = n.useRef(null),
        [N, A] = n.useState(!1),
        [E, w] = n.useState(null),
        I = n.useRef(null),
        S = n.useRef(null),
        [M, R] = n.useState(!1),
        [T, D] = n.useState(null);
    n.useEffect(
        () =>
            j({
                onPlay: () => {
                    w(null), R(!1);
                },
            }),
        [j],
    );
    let { ref: U, width: P = 0, height: _ = 0 } = (0, eC.Ay)(),
        V = (0, el.bG)([ey.A], () => ey.A.windowSize());
    n.useMemo(() => {
        V.width, V.height;
        let e = U.current;
        null != e && D(e.getBoundingClientRect());
    }, [V.width, V.height, P, U, r]);
    let G = n.useRef(null),
        H = n.useRef({}),
        z = n.useCallback(
            (e, t) => {
                if (null == o) return;
                if (null == T) return null;
                let l = (((0, k.clamp)(e, T.left, T.right) - T.left) / T.width) * o,
                    a = (0, k.clamp)(l, 0, o),
                    n = E;
                null == n && t && ((n = a <= u ? "start" : a >= m ? "end" : "playhead"), c && (x(), R(!0)), w(n)),
                    "start" === n ? v(a) : "end" === n ? f(a) : "playhead" === n && b((0, k.clamp)(a, u, m));
            },
            [o, T, E, u, m, c, x, v, f, b],
        ),
        $ = n.useCallback(
            (e) => {
                if (null == o) return;
                let t = eL(o, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), v(u - t);
                        break;
                    case "ArrowRight":
                        (l = !0), v(u + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [o, v, u],
        ),
        B = n.useCallback(
            (e) => {
                if (null == o) return;
                let t = eL(o, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), f(m - t);
                        break;
                    case "ArrowRight":
                        (l = !0), f(m + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [o, f, m],
        ),
        K = n.useCallback(
            (e) => {
                z(e.clientX, !0);
            },
            [z],
        ),
        Z = n.useCallback(
            (e) => {
                z(e.clientX, !1);
            },
            [z],
        ),
        Q = n.useCallback(() => {
            M && g(), R(!1), w(null);
        }, [M, g]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", Z),
            document.addEventListener("mouseup", Q),
            () => {
                document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", Q);
            }
        ),
        [Z, Q],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = U.current,
                    t = y.current;
                if (null == e || null == t || !N) return;
                (e.height = _), (e.width = P);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, P, _);
                let a = Math.ceil(_ * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(P / a),
                    s = G.current;
                if (null == s) return;
                (s.width = a), (s.height = _);
                let i = s?.getContext("2d", { willReadFrequently: !0 });
                if (null == i) return;
                let r = H.current;
                if (r[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(r[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((s) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, _), i.drawImage(t, 0, 0, a, _);
                            let d = i.getImageData(0, 0, a, _);
                            null == r[n] && (r[n] = []), (r[n][e] = d), s();
                        }),
                            (t.currentTime = (a / P) * o * e);
                    });
            })();
        }, [P, _, U, o, G, N]);
    let X = C - u,
        q = n.useCallback(() => {
            b(Math.max(u, C - 10));
        }, [u, C, b]),
        J = n.useCallback(() => {
            b(Math.min(m, C + 10));
        }, [m, C, b]),
        W = n.useCallback(() => {
            c ? x() : g();
        }, [c, g, x]),
        ee = n.useCallback(() => A(!0), []),
        et = (u / o) * 100,
        ea = (1 - (o - m) / o) * 100,
        en = {
            background: `linear-gradient(to right, var(--black-500) ${et}%, transparent ${et}%, transparent ${ea}%, var(--black-500) ${ea}%)`,
        };
    return (0, a.jsx)("div", {
        className: eT.f4,
        children: (0, a.jsxs)("div", {
            className: eT.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: eT.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: eT.k2,
                            children: (0, a.jsx)("div", {
                                ref: S,
                                className: eT.re,
                                children: (0, a.jsxs)(O.E, {
                                    variant: "text-sm/normal",
                                    className: eT.g7,
                                    color: "text-muted",
                                    children: [eG(X), (0, a.jsx)("span", { className: eT.xW, children: " / " }), eG(p)],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: eT.s2,
                            children: [
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: ev.q,
                                    onClick: q,
                                    "aria-label": eM.intl.string(eR.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    icon: c ? eg.E : ef.u,
                                    onClick: W,
                                    "aria-label": eM.intl.string(c ? eM.t.ZcgDJX : eM.t.RscU7I),
                                }),
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: ex.i,
                                    onClick: J,
                                    "aria-label": eM.intl.string(eR.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(eS, { onMouseDown: K, voiceAudioTracks: s, clipId: l.id, className: eT.ou }),
                (0, a.jsx)(eO, { onMouseDown: K, videoLength: o, clip: l }),
                (0, a.jsx)("div", {
                    className: eT.PH,
                    children: (0, a.jsxs)("div", {
                        className: i()(eT.IO, { [eT.Dg]: null != E }),
                        onMouseDown: K,
                        children: [
                            (0, a.jsx)("canvas", { className: eT.zj, ref: G }),
                            (0, a.jsx)("canvas", { className: eT.Ay, ref: U }),
                            (0, a.jsx)(ej.vN, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: I, className: eT.lG }),
                            }),
                            (0, a.jsx)(L.A, {
                                preload: "auto",
                                className: eT.Fi,
                                ref: y,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ee,
                            }),
                            (0, a.jsx)("div", { className: eT.QT, style: en }),
                            (0, a.jsxs)("div", {
                                className: eT.Ws,
                                style: {
                                    left: null != o ? `${(u / o) * 100}%` : "0",
                                    right: null != o ? `${((o - m) / o) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(ej.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: i()(eT.uI, { [eT.cB]: "start" === E }),
                                            onMouseDown: K,
                                            onKeyDown: $,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": u,
                                            "aria-valuetext": eH(u),
                                            "aria-valuemax": m - Y.zj,
                                            "aria-label": eM.intl.string(eM.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: eT.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(ej.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: i()(eT.H1, { [eT.cB]: "end" === E }),
                                            onMouseDown: K,
                                            onKeyDown: B,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": u + Y.zj,
                                            "aria-valuenow": m,
                                            "aria-valuetext": eH(m),
                                            "aria-valuemax": o,
                                            "aria-label": eM.intl.string(eM.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: eT.kn }),
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
function eG(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function eH(e) {
    let t = Math.floor(e / 60),
        l = eM.intl.formatToPlainString(eM.t.iXLF9W, { minutes: t }),
        a = eM.intl.formatToPlainString(eM.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function ez(e) {
    let { transitionState: t, clip: l, onClose: s } = e,
        {
            applicationAudioEnabled: i,
            voiceAudioEnabled: r,
            soundboardAudioEnabled: d,
            cropStart: o,
            cropEnd: u,
            videoPlayerRef: m,
            videoURL: p,
            audioTracks: v,
        } = F(),
        f = l.type === A.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!f) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
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
                    (n = !0), t.seek(Math.max(o, l.currentTime - a));
                    break;
                case "ArrowRight":
                    (n = !0), t.seek(Math.min(u, l.currentTime + a));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [m, f, l.type, o, u]);
    let g = n.useMemo(() => v.filter((e) => e.trackName.includes(":voice")), [v]),
        x = n.useCallback(() => {
            (0, N.R)(
                {
                    items: [{ type: "IMAGE", url: l.thumbnail, proxyUrl: l.thumbnail, alt: l.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [l.thumbnail, l.name]);
    if (f)
        return (0, a.jsx)("div", {
            className: q.OJ,
            children:
                t !== c.ip.ENTERED
                    ? (0, a.jsx)(w, {})
                    : (0, a.jsx)("div", {
                          className: q.zT,
                          children: (0, a.jsx)(C.D, {
                              className: q.xS,
                              onClick: x,
                              children: (0, a.jsx)("img", { className: q.V_, src: l.thumbnail, alt: l.name ?? "" }),
                          }),
                      }),
        });
    let j = null == p || t !== c.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: q.OJ,
        children: (0, a.jsxs)("div", {
            className: q.zT,
            children: [
                (0, a.jsx)("div", {
                    className: q.Gv,
                    children: (0, a.jsx)(h.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: y.Z,
                        "aria-label": eM.intl.string(eM.t["13/7kX"]),
                        onClick: s,
                    }),
                }),
                j
                    ? (0, a.jsx)(w, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(et, {
                                  applicationAudioEnabled: i,
                                  voiceAudioEnabled: r,
                                  soundboardAudioEnabled: d,
                                  ref: m,
                                  clip: l,
                              }),
                              (0, a.jsx)(eV, { transitionState: t, sourceURL: p, clip: l, voiceAudioTracks: g }),
                          ],
                      }),
            ],
        }),
    });
}
var e$ = l(342952),
    eF = l(92446),
    eB = l(364522),
    eK = l(270003),
    eZ = l(683071),
    eQ = l(331322),
    eX = l(821609),
    eY = l(292666),
    eq = l(413887),
    eJ = l(452027),
    eW = l(825484),
    e0 = l(365199),
    e1 = l(442433),
    e2 = l(429913),
    e3 = l(47167),
    e4 = l(713654),
    e5 = l(137177),
    e8 = l(145497),
    e9 = l(734057),
    e6 = l(540999),
    e7 = l(71393),
    te = l(58703),
    tt = l(403362);
function tl(e) {
    return n.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            switch (t.type) {
                case A.Gy.GAME_EVENT:
                    return t.description ?? t.title ?? eM.intl.string(eM.t.Cyxddp);
                case A.Gy.PHRASE:
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
        d = t.type === A.nQ.SCREENSHOT,
        {
            getEditedClip: o,
            voiceAudioEnabled: c,
            setVoiceAudioEnabled: v,
            applicationAudioEnabled: f,
            setApplicationAudioEnabled: g,
            soundboardAudioEnabled: x,
            setSoundboardAudioEnabled: j,
            pause: C,
            clipName: y,
            setClipName: N,
            isTemporary: E,
            setIsTemporary: w,
        } = F(),
        k = (0, e2.h)(t.applicationId),
        I = (0, r.bG)([b.A], () => b.A.isClipExporting(t.id)),
        { onShareClick: S } = (0, ta.A)(s),
        L = (0, r.bG)([e6.A], () => e6.A.isDeveloper),
        M = tl(t),
        R = n.useCallback(async () => {
            await (0, G.w7)(t.id), w(!1);
        }, [t.id, w]),
        T = (0, r.yK)([U.default], () => t.users.map(U.default.getUser).filter(tt.Vq)),
        D = (0, r.bG)([e7.A], () => (t.version >= 3 && null != t.guildId ? e7.A.getGuild(t.guildId) : null)),
        P = (0, r.bG)([e9.A], () => (t.version >= 3 && null != t.channelId ? e9.A.getChannel(t.channelId) : null)),
        _ = (0, e3.Ay)(P),
        V = null != P ? (0, e4.gU)(P, D) : null;
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
            (0, a.jsx)(eB.Ip, {
                className: ts.Md,
                children: (0, a.jsxs)(eK.n, {
                    children: [
                        E &&
                            (0, a.jsx)(eZ.w, {
                                type: "info",
                                children: (0, a.jsxs)(eQ.B, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(O.E, {
                                            variant: "text-sm/normal",
                                            children: eM.intl.string(eM.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(eX.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: R,
                                            text: eM.intl.string(eM.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(eY.k, {
                            label: eM.intl.string(eM.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? N(void 0) : N(e);
                            },
                            value: y,
                            minLength: Y.U_,
                            maxLength: Y.mk,
                            placeholder: M,
                        }),
                        !d &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(eq.A, { label: eM.intl.string(eM.t.GnQui9), checked: f, onChange: g }),
                                    (0, a.jsx)(eq.A, {
                                        label: eM.intl.string(eM.t["5mVOCb"]),
                                        checked: c,
                                        onChange: v,
                                    }),
                                    (0, a.jsx)(eq.A, {
                                        label: eM.intl.string(eM.t["8K7Ges"]),
                                        checked: x,
                                        onChange: j,
                                    }),
                                ],
                            }),
                        (0, a.jsx)(eJ.D, {
                            label: eM.intl.string(eM.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(O.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, te.mk)(new Date(t.createdAt)),
                            }),
                        }),
                        (0, a.jsx)(eJ.D, {
                            label: eM.intl.string(eM.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(e$.A, { users: T, maxUsers: 10 }),
                        }),
                        null != k &&
                            (0, a.jsx)(eJ.D, {
                                label: eM.intl.string(tn.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: ts._c,
                                    children: [
                                        (0, a.jsx)(e5.A, { game: k, size: e5.M.XXSMALL, className: ts.Z9 }),
                                        (0, a.jsx)(O.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: ts.lR,
                                            children: k?.name ?? t.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != D &&
                            (0, a.jsx)(eJ.D, {
                                label: eM.intl.string(eM.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: ts._c,
                                    children: [
                                        (0, a.jsx)(e8.Ay, { guild: D, iconSize: 16, className: ts.Z9 }),
                                        (0, a.jsx)(O.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: ts.lR,
                                            children: D.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != P &&
                            null != V &&
                            (0, a.jsx)(eJ.D, {
                                label: eM.intl.string(eM.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: ts._c,
                                    children: [
                                        (0, a.jsx)(V, {
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
                                            children: _,
                                        }),
                                    ],
                                }),
                            }),
                        t.version >= 3 &&
                            null != t.activity &&
                            (null != t.activity.state || null != t.activity.details) &&
                            (0, a.jsx)(eJ.D, {
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
                children: (0, a.jsxs)(eW.e, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(eX.$, {
                            loading: I,
                            disabled: I,
                            variant: "primary",
                            icon: p.l,
                            iconPosition: "start",
                            onClick: () => S({ clips: [o()] }),
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
                                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                                        return (t) =>
                                            (0, a.jsx)(e, { ...t, clips: [o()], channelId: s, onAfterDelete: i });
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
    td = l(289873),
    to = l(139286),
    tc = l(962125),
    tu = l(989349),
    tm = l.n(tu),
    th = l(66455),
    tp = l(890856),
    tv = l(777666),
    tf = l(505930),
    tg = l(530005),
    tx = l(406810),
    tj = l(176781),
    tb = l(983851),
    tC = l(31300),
    ty = l(587895),
    tN = l(549685),
    tA = l(954571),
    tE = l(665039),
    tw = l(652215),
    tk = l(798594);
let tI = function (e) {
    let { clip: t, actionsDisabled: s, isNew: d, onEdit: o, onClick: c } = e,
        u = (0, r.yK)([U.default], () => t.users.map((e) => U.default.getUser(e)).filter(tt.Vq)),
        m = (0, r.bG)([e9.A], () => (null != t.channelId ? e9.A.getChannel(t.channelId) : null)),
        h = (0, r.bG)([e7.A], () => (null != t.guildId ? e7.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, j.Ay)(x.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: v, toggleClipSelection: f, isMultiSelectMode: g } = n.useContext(lr),
        [C, y] = n.useState(!1),
        N = n.useRef(null),
        E = (0, th.A)(t.editMetadata?.start ?? 0),
        w = v.has(t.id),
        k = t.type === A.nQ.SCREENSHOT,
        I = (0, e3.Ay)(m),
        S = "" === t.applicationName && null != I && "" !== I ? I : t.applicationName,
        L = (0, te.Fe)(new Date(t.createdAt)),
        M = n.useMemo(() => {
            let e = [];
            return (
                t.type === A.nQ.VOICE_CLIP
                    ? (h?.name != null && e.push(h.name), null != I && e.push(I))
                    : ("" !== S && null != S && e.push(S),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [S, h?.name, I, t.activity?.state, t.activity?.details, t.type]),
        R = n.useCallback(() => {
            let e = N.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        T = n.useCallback(() => {
            if (!0 === k) return;
            let e = N.current;
            null != e && e.paused && ((e.currentTime = E.current), N.current?.play());
        }, [k, E]),
        P = n.useCallback(() => {
            if (!0 === k) return;
            let e = N.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [k, t.editMetadata?.start]),
        _ = n.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && P();
            },
            [P],
        ),
        V = n.useCallback(() => {
            y(!1);
        }, []),
        G = n.useCallback(
            (e) => {
                y(!0), N.current?.pause();
                let n =
                    g && v.size > 0
                        ? Array.from(v)
                              .map((e) => b.A.getClipById(e))
                              .filter(tt.Vq)
                        : [t];
                (0, e1.L3)(
                    e,
                    async () => {
                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                        return (l) =>
                            (0, a.jsx)(e, {
                                ...l,
                                clips: n,
                                actionsDisabled: s,
                                showShareAndEdit: !0,
                                onShare: () => {
                                    tA.default.track(tw.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    o(t), tA.default.track(tw.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: R,
                                onAfterDelete: () => {
                                    tA.default.track(tw.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: V },
                );
            },
            [t, g, v, s, R, V, o],
        ),
        H = n.useCallback(
            (e) => {
                s || (e.preventDefault(), e.stopPropagation(), G(e));
            },
            [s, G],
        ),
        z = n.useCallback(
            (e) => {
                s ||
                    (e.shiftKey ? (e.preventDefault(), f(t.id)) : g ? f(t.id) : null != c && c(t),
                    tA.default.track(tw.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [s, g, f, t, c],
        );
    return (0, a.jsx)(j.f5, {
        value: p,
        children: (0, a.jsxs)(tp.s, {
            "aria-disabled": s,
            "aria-label": eM.intl.string(!0 === k ? eM.t["HO/oXl"] : eM.t.bt75uw),
            onClick: s ? void 0 : z,
            onContextMenu: H,
            className: i()(tk.QN, { [tk.r9]: s, [tk.in]: C, [tk.wH]: w }),
            onBlur: _,
            onFocus: T,
            onMouseOver: T,
            onMouseLeave: P,
            children: [
                (0, a.jsx)(tS, { clip: t, isNew: d, videoRef: N, onOpenContextMenu: G, actionsDisabled: s }),
                (0, a.jsxs)("div", {
                    className: tk.wI,
                    children: [
                        (0, a.jsx)(tR, { clip: t }),
                        (0, a.jsxs)("div", {
                            className: tk.i0,
                            children: [
                                (0, a.jsx)(tL, { clip: t }),
                                (0, a.jsx)(O.E, {
                                    className: tk.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                                (0, a.jsx)(O.E, {
                                    className: tk.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: L,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: tk.jW,
                            children: (0, a.jsx)(e$.A, {
                                maxUsers: 3,
                                users: u,
                                size: D._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && T());
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
function tS(e) {
    let { clip: t, isNew: l, videoRef: s, onOpenContextMenu: i, actionsDisabled: r } = e,
        o = 0 === t.length,
        c = !0 === t.pending,
        [u, m] = n.useState(0);
    n.useEffect(() => {
        let e = s.current;
        if (null == e || o) return;
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
    }, [s, o, t.editMetadata]);
    let { durationDisplay: p, isClipEdited: v } = n.useMemo(() => {
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
        f = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), G.XK(t);
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
        className: tk.QB,
        children: [
            (0, a.jsx)("div", { className: tk.ne }),
            !c && l && (0, a.jsx)(tv.Lp, { className: tk.Ad, text: eM.intl.string(eM.t.y2b7CA) }),
            !r &&
                (0, a.jsxs)("div", {
                    className: tk.g3,
                    children: [
                        (0, a.jsx)(
                            d.m,
                            {
                                text: eM.intl.string(t.isFavorite ? tn.default.IZsalP : tn.default.ihBfyA),
                                position: "top",
                                children: (0, a.jsx)(h.K, {
                                    onClick: f,
                                    icon: t.isFavorite ? ei.G : tf.y,
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
                className: tk.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, a.jsxs)("div", {
                            className: tk.OH,
                            children: [
                                t.isTemporary && (0, a.jsx)(tx.O, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(O.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: eM.intl.string(eM.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !o &&
                        (0, a.jsxs)("div", {
                            className: tk.OH,
                            children: [
                                v && (0, a.jsx)(tN.A, { color: "white", width: 16, height: 16 }),
                                (0, a.jsx)("span", {
                                    children: (0, a.jsx)(O.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: c ? eM.intl.string(eM.t["2Fp7OP"]) : p,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !o &&
                u > 0 &&
                (0, a.jsx)("div", {
                    className: tk.X7,
                    children: (0, a.jsx)("div", { className: tk.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function tL(e) {
    let { clip: t } = e,
        l = tl(t),
        n = "" !== l;
    return (0, a.jsx)(O.E, {
        className: tk.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: n ? l : t.name,
    });
}
function tM(e) {
    let { clip: t, videoRef: l } = e,
        n = (0, tE.j)(t),
        s = t.type === A.nQ.SCREENSHOT;
    return t.type === A.nQ.VOICE_CLIP
        ? (0, a.jsx)(M.A, { className: tk.fT })
        : s
          ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: tk.fT })
          : null != n
            ? (0, a.jsx)(L.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: n,
                  loop: !0,
                  className: tk.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: tk.fT })
              : (0, a.jsx)("div", {
                    className: i()(tk.fT, tk.Is),
                    children: (0, a.jsx)(tj.x, { color: es.A.colors.ICON_MUTED }),
                });
}
function tR(e) {
    let { clip: t } = e,
        l = (0, r.bG)([ty.A], () => (null != t.applicationId ? ty.A.getApplication(t.applicationId) : null)),
        n = l?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: tk.gS,
        "aria-hidden": "true",
        children:
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: tk.NH })
                : t.type === A.nQ.VOICE_CLIP
                  ? (0, a.jsx)(tb.H, { size: "sm", color: "currentColor" })
                  : (0, a.jsx)(tC.k, { size: "sm", color: "currentColor" }),
    });
}
function tT(e) {
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
var tD = l(687966),
    tO = l(475358),
    tU = l(123292),
    tP = l(292801),
    t_ = l(780964),
    tV = l(858897),
    tG = l(532624),
    tH = l(350535),
    tz = l(311162);
function t$(e) {
    let { header: t, description: l } = e;
    return (0, a.jsxs)("div", {
        className: tz.Nr,
        children: [t, (0, a.jsx)(O.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function tF() {
    let e = (0, el.bG)([tG.Ay], () => tG.Ay.getKeybindForAction(tw.hCu.SAVE_CLIP)),
        t = null != e ? tH.dI(e.shortcut, !0) : null;
    return (0, a.jsxs)("div", {
        className: tz.kR,
        children: [
            (0, a.jsx)(t$, {
                header: (0, a.jsx)(tD._, { size: "refresh_sm", color: es.A.colors.ICON_DEFAULT }),
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
                                      className: tz.JH,
                                      children: (0, a.jsx)(tU.Q, {
                                          text: eM.intl.string(tn.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, tV.openUserSettings)(t_.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : eM.intl.string(tn.default.HOUDUm),
            }),
            (0, a.jsx)(t$, {
                header: (0, a.jsx)(tP.t, { size: "refresh_sm", color: es.A.colors.ICON_DEFAULT }),
                description: eM.intl.string(tn.default.DLzdl7),
            }),
        ],
    });
}
function tB(e) {
    let { isEmptyBecauseQuery: t } = e;
    return (0, a.jsx)("div", {
        className: tz.kL,
        children: (0, a.jsxs)("div", {
            className: tz.Qs,
            children: [
                (0, a.jsx)(tT, { width: 213, height: 135, alt: "" }),
                (0, a.jsx)(m.D, {
                    className: tz.wx,
                    variant: "heading-xl/semibold",
                    children: t ? eM.intl.string(tn.default["+M2iLf"]) : eM.intl.string(tn.default.m2GEpP),
                }),
                t
                    ? (0, a.jsx)(O.E, {
                          className: tz.h_,
                          variant: "text-md/medium",
                          children: eM.intl.string(tn.default.xkY5xS),
                      })
                    : (0, a.jsx)(tF, {}),
            ],
        }),
    });
}
var tK = l(352528);
let tZ = 16 / 9,
    tQ = [0, 16, 0, 16],
    tX = tQ[1] + tQ[3];
function tY(e, t) {
    return Math.ceil(t / e);
}
function tq(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: s, onEdit: i } = e,
        [d, o] = n.useState(!0),
        [c, u] = n.useState({ width: 0, height: 0 }),
        h = (0, r.bG)([b.A], () => b.A.getSettings().storageLocation),
        p = (0, r.yK)([b.A], () => b.A.getNewClipIds()),
        v = (0, r.bG)([b.A], () => b.A.getExportingClipIds().length > 0);
    (0, to.A)(
        {
            type: tr.ImpressionTypes.MODAL,
            name: tr.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: d },
        [t.length, d],
    ),
        n.useEffect(
            () => (
                (0, G.jA)(),
                () => {
                    (0, G.jA)(), (0, G.Su)();
                }
            ),
            [],
        );
    let f = n.useMemo(() => {
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
        { width: g } = c,
        { tileWidth: x, columns: j } = n.useMemo(() => {
            var e;
            let l, a, n, s, i;
            return (
                (e = t.length),
                (n = 16 * ((a = Math.max(1, Math.floor(((l = g - tX) + 16) / 336))) - 1)),
                (s = Math.max(320, (l - n) / a)),
                (i = tY(a, e)),
                { tileWidth: s, columns: a, rows: i }
            );
        }, [t.length, g]);
    n.useEffect(() => {
        !(async function () {
            o(!0);
            try {
                await G.Fb(h);
            } finally {
                o(!1);
            }
        })();
    }, [h]);
    let C = n.useMemo(() => f.map((e) => tY(j, e.clips.length)), [f, j]),
        y = n.useMemo(() => C.reduce((e, t) => e + t, 0), [C]),
        N = Math.floor(x / tZ),
        A = n.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: n } = t,
                    r = f[l];
                if (null == r) return null;
                let d = n * j,
                    o = r.clips.slice(d, d + j);
                return (0, a.jsx)(
                    "div",
                    {
                        className: tK.UX,
                        children: o.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    style: { width: x },
                                    children: (0, a.jsx)(tI, {
                                        actionsDisabled: v,
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
            [f, j, x, v, p, s, i],
        ),
        E = n.useCallback(
            (e) => {
                let t = f[e];
                return t?.description != null ? 66 : 44;
            },
            [f],
        ),
        w = n.useCallback(
            (e) => {
                let t = f[e];
                return null == t
                    ? null
                    : (0, a.jsxs)(
                          "div",
                          {
                              className: tK.aE,
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
                                          className: tK.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [f],
        );
    return d || 0 !== f.length
        ? d
            ? (0, a.jsx)("div", { className: tK.dc, children: (0, a.jsx)(td.y, {}) })
            : (0, a.jsx)(tc.A, {
                  listPadding: tQ,
                  renderRow: A,
                  renderSectionHeader: w,
                  rowCount: y,
                  rowCountBySection: C,
                  rowHeight: N + 68 + 16,
                  sectionHeaderHeight: E,
                  onResize: u,
              })
        : (0, a.jsx)(tB, { isEmptyBecauseQuery: l > 0 });
}
var tJ = l(922016),
    tW = l(783977),
    t0 = l(625903),
    t1 = l(892547),
    t2 = l(91871),
    t3 = l.n(t2),
    t4 = l(550079),
    t5 = l(477782),
    t8 = l(583650),
    t9 = l(353640);
let t6 = {
        query: "",
        sortOrder: "descending",
        selectedGameId: null,
        selectedUserIds: new Set(),
        selectedActivity: null,
        selectedGuildId: null,
        selectedYear: null,
    },
    t7 = (0, t9.v)((e) => ({
        ...t6,
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
        resetFilters: () => e(t6),
    }));
function le(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: s,
            selectedActivity: i,
            selectedGuildId: r,
            selectedYear: d,
            sortOrder: o,
            toggleUserId: c,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setSelectedYear: h,
            setSortOrder: p,
            clearFilters: v,
        } = t7(),
        f = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = U.default.getUser(e);
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
        x = n.useMemo(
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
        [y, N] = n.useState(""),
        [A, E] = n.useState(""),
        w = n.useMemo(
            () => (0 === b.trim().length ? f : f.filter((e) => t3()(b.toLowerCase(), e.name.toLowerCase()))),
            [f, b],
        ),
        k = n.useMemo(
            () => (0 === y.trim().length ? x : x.filter((e) => t3()(y.toLowerCase(), e.name.toLowerCase()))),
            [x, y],
        ),
        I = n.useMemo(
            () => (0 === A.trim().length ? g : g.filter((e) => t3()(A.toLowerCase(), e.toLowerCase()))),
            [g, A],
        ),
        S = s.size > 0 || null != i || null != r || null != d,
        L = n.useMemo(() => {
            if (0 !== s.size)
                return f
                    .filter((e) => s.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [s, f]),
        M = n.useMemo(() => {
            if (null == r) return;
            let e = x.find((e) => e.guildId === r);
            return e?.name;
        }, [r, x]),
        R = n.useMemo(() => i ?? void 0, [i]),
        T = n.useMemo(() => (null != d ? String(d) : void 0), [d]);
    return (0, a.jsxs)(t4.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": eM.intl.string(eM.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, a.jsxs)(t5.rX, {
                label: "Filter",
                children: [
                    f.length > 0 &&
                        (0, a.jsxs)(t5.Dr, {
                            id: "participants",
                            label: eM.intl.string(eM.t.YQ6dJg),
                            subtext: L,
                            children: [
                                f.length > 20 &&
                                    (0, a.jsx)(t5.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t8.V, {
                                                ...e,
                                                query: b,
                                                onChange: C,
                                                ref: t,
                                                placeholder: eM.intl.string(eM.t["5h0QOP"]),
                                            }),
                                    }),
                                w.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        t5.sL,
                                        { id: `participant-${t}`, label: l, action: () => c(t), checked: s.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    x.length > 0 &&
                        (0, a.jsxs)(t5.Dr, {
                            id: "servers",
                            label: eM.intl.string(eM.t["5qyruI"]),
                            subtext: M,
                            children: [
                                x.length > 20 &&
                                    (0, a.jsx)(t5.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t8.V, {
                                                ...e,
                                                query: y,
                                                onChange: N,
                                                ref: t,
                                                placeholder: eM.intl.string(eM.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(t5.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: eM.intl.string(eM.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                k.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        t5.iD,
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
                        (0, a.jsxs)(t5.Dr, {
                            id: "activities",
                            label: eM.intl.string(eM.t.agRtPG),
                            subtext: R,
                            children: [
                                g.length > 20 &&
                                    (0, a.jsx)(t5.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t8.V, {
                                                ...e,
                                                query: A,
                                                onChange: E,
                                                ref: t,
                                                placeholder: eM.intl.string(eM.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(t5.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: eM.intl.string(eM.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == i,
                                }),
                                I.map((e) =>
                                    (0, a.jsx)(
                                        t5.iD,
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
                        (0, a.jsxs)(t5.Dr, {
                            id: "years",
                            label: eM.intl.string(eM.t.w9zd68),
                            subtext: T,
                            children: [
                                (0, a.jsx)(t5.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: eM.intl.string(eM.t["2/yeUU"]),
                                    action: () => h(null),
                                    checked: null == d,
                                }),
                                j.map((e) =>
                                    (0, a.jsx)(
                                        t5.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => h(e),
                                            checked: d === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsxs)(t5.rX, {
                label: eM.intl.string(eM.t.XvNMNk),
                children: [
                    (0, a.jsx)(t5.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: eM.intl.string(eM.t["4LLKx3"]),
                        action: () => p("descending"),
                        checked: "descending" === o,
                    }),
                    (0, a.jsx)(t5.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: eM.intl.string(eM.t["0gitSE"]),
                        action: () => p("ascending"),
                        checked: "ascending" === o,
                    }),
                ],
            }),
            S &&
                (0, a.jsx)(t5.rX, {
                    children: (0, a.jsx)(t5.Dr, { id: "clear-filters", label: eM.intl.string(eM.t.FbDgiu), action: v }),
                }),
        ],
    });
}
var lt = l(174726);
let ll = n.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: s } = t7(),
            i = (0, el.bG)([tG.Ay], () => tG.Ay.getKeybindForAction(tw.hCu.SAVE_CLIP)),
            r = t7(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            o = n.useCallback(() => {
                (0, tV.openUserSettings)(t_.X.CLIPS_PANEL);
            }, []),
            c = n.useCallback(() => s(""), [s]),
            u = null != i ? tH.dI(i.shortcut, !0) : null,
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
                                (0, a.jsx)(d.m, {
                                    text: eM.intl.string(eM.t.X7yRDm),
                                    children: (0, a.jsx)(tJ.Y, {
                                        position: "bottom",
                                        targetElementRef: p,
                                        renderPopout: (e) => (0, a.jsx)(le, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, a.jsx)("div", {
                                                ref: p,
                                                children:
                                                    r > 0
                                                        ? (0, a.jsx)(eX.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: eM.intl.formatToPlainString(tn.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: tW.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, a.jsx)(h.K, {
                                                              icon: tW.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": eM.intl.string(eM.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, a.jsx)(d.m, {
                                    text: eM.intl.string(eM.t["3D5yo/"]),
                                    children: (0, a.jsx)(h.K, {
                                        onClick: o,
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
                        onClear: c,
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
        d = t7((e) => e.setSelectedGameId),
        o = n.useMemo(() => t.map((e) => e.applicationId), [t]),
        c = (0, e2.A)(o),
        u = n.useCallback(() => d(null), [d]),
        h = n.useCallback(() => d("favorites"), [d]),
        p = n.useMemo(() => new Map(c.map((e) => [e?.id, e])), [c]);
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
                        (0, a.jsxs)(eB.Ip, {
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
                                                icon: (0, a.jsx)(e5.A, { game: p.get(n), size: e5.M.XSMALL }),
                                                isSelected: r === n,
                                                onClick: () => d(n),
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
function ld(e) {
    let t,
        s,
        C,
        { channelId: y, onClose: N, onClipClick: A, transitionState: E, ...w } = e,
        { analyticsLocations: k } = (0, j.Ay)(x.A.CLIPS_GALLERY),
        [I, S] = n.useState(new Set()),
        {
            clipsByGame: L,
            filteredClips: M,
            favoriteClips: R,
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
                            a = null != e.name && t3()(l, e.name.toLowerCase()),
                            n = t3()(l, e.applicationName.toLowerCase()),
                            s = e.activity?.state != null && t3()(l, e.activity.state.toLowerCase()),
                            i = e.activity?.details != null && t3()(l, e.activity.details.toLowerCase());
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
        { onShareClick: D } = (0, ta.A)(y),
        O = (0, r.bG)([b.A], () => b.A.getExportingClipIds().length > 0),
        [U, P] = n.useState("gallery"),
        [_, V] = n.useState(null),
        G = (0, r.bG)([b.A], () => (null != _ ? b.A.getClipById(_) : null), [_]),
        H = n.useRef(U);
    H.current = U;
    let [z, F] = n.useState(c.ip.HIDDEN),
        B = n.useRef(null),
        K = t7((e) => e.selectedGameId),
        Z = n.useMemo(
            () => (null == K || "favorites" === K ? null : (L.find((e) => e.applicationId === K) ?? null)),
            [K, L],
        ),
        Q = n.useMemo(() => ("favorites" === K ? R : (Z?.filteredClips ?? M)), [K, Z, M, R]),
        X = n.useMemo(
            () => ("favorites" === K ? eM.intl.string(eM.t["9rlCk1"]) : (Z?.name ?? eM.intl.string(eM.t.dPVrEv))),
            [K, Z],
        ),
        Y = n.useCallback((e) => {
            S((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        q = n.useCallback((e) => {
            V(e.id), P("editing"), g.A.useReducedMotion && F(c.ip.ENTERED);
        }, []),
        J = n.useCallback(() => {
            g.A.useReducedMotion && V(null), P("gallery");
        }, []);
    n.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === H.current && (e.stopPropagation(), J());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [J, N]);
    let W = n.useCallback(() => {
            S(new Set());
        }, []),
        ee = I.size > 0,
        et = n.useCallback(() => {
            let e = T.filter((e) => I.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, a.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                W(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [T, I, W]),
        el = n.useCallback(async () => {
            let e = T.filter((e) => I.has(e.id));
            await D({ clips: e }), W();
        }, [T, I, D, W]),
        ea = n.useMemo(
            () => ({ selectedClipIds: I, toggleClipSelection: Y, clearSelection: W, isMultiSelectMode: ee }),
            [I, Y, W, ee],
        );
    return (0, a.jsx)(j.f5, {
        value: k,
        children: (0, a.jsx)(lr.Provider, {
            value: ea,
            children: (0, a.jsx)(o.N, {
                onClose: N,
                transitionState: E,
                ...w,
                children: (0, a.jsxs)("div", {
                    className: li.jT,
                    ref: B,
                    children: [
                        (0, a.jsxs)("div", {
                            className: i()(li.PD, "gallery" === U && li.vu),
                            "aria-hidden": "gallery" !== U,
                            children: [
                                (0, a.jsx)(ln, { clipsByGame: L, filteredClips: M, favoriteClips: R, allClips: T }),
                                (0, a.jsxs)("div", {
                                    className: li.Qs,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: li.$Q,
                                            children: [
                                                (0, a.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: X,
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: li.$s,
                                                    children: [
                                                        ee &&
                                                            (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(d.m, {
                                                                        text: eM.intl.string(eM.t.RDE0Sc),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: el,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eM.intl.string(eM.t.RDE0Sc),
                                                                            loading: O,
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(d.m, {
                                                                        text: eM.intl.string(eM.t.oyYWHE),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: et,
                                                                            icon: v.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eM.intl.string(eM.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, a.jsx)(h.K, {
                                                            onClick: N,
                                                            icon: f.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": eM.intl.string(eM.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(tq, {
                                            onEdit: q,
                                            channelId: y,
                                            filteredClips: Q,
                                            totalClipCount: T.length,
                                            onClipClick: A,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: i()(li.jN, "editing" === U && li.vu),
                            "aria-hidden": "editing" !== U,
                            onTransitionEnd: () => {
                                "gallery" === U ? (V(null), F(c.ip.HIDDEN)) : "editing" === U && F(c.ip.ENTERED);
                            },
                            children:
                                null != G &&
                                (0, a.jsxs)($, {
                                    clip: G,
                                    modalContainerRef: B,
                                    children: [
                                        (0, a.jsx)(ez, { clip: G, transitionState: z, onClose: J }),
                                        (0, a.jsx)(ti, { channelId: y, clip: G, onClose: J }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
