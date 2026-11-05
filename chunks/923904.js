(l.d(t, { p: () => j, T: () => y }), l(323874), l(14289), l(35956), l(321073));
var n = l(477900),
    a = l(582128),
    i = l(435558),
    r = l(194498),
    s = l(77729),
    o = l(489496);
let c = new Map(),
    u = new Map();
var d = l(956050),
    m = l(367974);
function f(e, t) {
    return new Promise((l, n) => {
        function a() {
            (e.removeEventListener("error", i), l());
        }
        function i() {
            (e.removeEventListener(t, a),
                n(Error(`video element error while waiting for ${t}: ${e.error?.message ?? "unknown"}`)));
        }
        (e.addEventListener(t, a, { once: !0 }), e.addEventListener("error", i, { once: !0 }));
    });
}
var h = l(635793),
    p = l(696016),
    v = l(683825),
    x = l(792996);
let g = (e, t, l, n) => (n([]), () => {}),
    b = a.createContext(null);
function j(e) {
    var t;
    let j,
        y,
        C,
        N,
        k,
        E,
        { children: w, clip: A, modalContainerRef: I, editOnly: L = !1 } = e,
        R = A.type === p.nQ.SCREENSHOT,
        {
            initialDuration: T,
            initialCropStart: S,
            initialCropEnd: D,
            initialCurrentTime: M,
        } = ((j = A.length / 1e3),
        (y = A.editMetadata?.start ?? 0),
        (C = A.editMetadata?.end ?? 0),
        (N = 0 !== y || (0 !== C && C !== j)),
        {
            initialDuration: j,
            initialCropStart: y,
            initialCropEnd: C,
            isCropped: N,
            initialCurrentTime: N ? y : j / 2,
        }),
        P = a.useMemo(
            () =>
                null == s.A.clips.getClipProtocolURLFromPath ? null : s.A.clips.getClipProtocolURLFromPath(A.filepath),
            [A.filepath],
        ),
        [O, _] = a.useState({
            clipName: A.name,
            cropStart: S,
            cropEnd: 0 === D ? T : D,
            voiceAudioEnabled: A.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: A.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: A.editMetadata?.soundboardAudio ?? !0,
            cropPreset: A.editMetadata?.crop?.preset ?? p.yz.ORIGINAL,
        }),
        [z, U] = a.useState(h.Y.NONE),
        {
            clipName: $,
            cropStart: G,
            cropEnd: B,
            voiceAudioEnabled: X,
            applicationAudioEnabled: H,
            soundboardAudioEnabled: W,
            cropPreset: F,
        } = O,
        V = a.useRef(null),
        K = a.useRef(M),
        [Y, Z] = a.useState(T),
        [Q, q] = a.useState(!1),
        [J, ee] = a.useState(!1),
        et = a.useRef(new Set()),
        el = a.useRef(!1),
        [en, ea] = a.useState(null),
        [ei, er] = a.useState(null),
        [es, eo] = a.useState(null),
        [ec, eu] = a.useState([]),
        [ed, em] = a.useState(!1),
        [ef, eh] = a.useState(() => g),
        [ep, ev] = a.useState(null),
        [ex, eg] = a.useState(() => A.tracks ?? []),
        eb = a.useRef(ex);
    eb.current = ex;
    let ej = a.useCallback(() => {
            let e = V.current?.videoElement?.currentTime ?? G,
                t = (0, i.clamp)(e, G, B - 1);
            return { startSec: t, endSec: Math.min(t + 5, B) };
        }, [G, B, V]),
        ey = a.useCallback(() => {
            let e = crypto.randomUUID(),
                t = {
                    id: e,
                    type: p.Me.TEXT,
                    ...ej(),
                    data: {
                        text: x.intl.string(v.default.v2jEIc),
                        style: { ...p.QK },
                        position: { ...p._S },
                        rotationDeg: 0,
                    },
                };
            return (eg((e) => [...e, t]), U(h.Y.NONE), e);
        }, [ej, U]),
        eC = (0, p.QY)(F) ?? (null != ep ? ep.width / ep.height : null),
        eN = a.useCallback(
            (e) => {
                let t = crypto.randomUUID(),
                    l = {
                        id: t,
                        type: p.Me.IMAGE,
                        ...ej(),
                        data: {
                            ...e,
                            position: { ...p._S },
                            widthFraction: null != eC ? (0, p.Qw)(e.naturalWidth / e.naturalHeight, eC) : 0.35,
                            rotationDeg: 0,
                            shadow: "none",
                            shadowColor: p.pk,
                        },
                    };
                return (eg((e) => [...e, l]), U(h.Y.NONE), t);
            },
            [ej, U, eC],
        ),
        ek = a.useCallback((e) => {
            eg((t) => t.filter((t) => t.id !== e));
        }, []),
        eE = a.useCallback((e, t, l) => {
            eg((n) => n.map((n) => (n.id === e ? { ...n, startSec: t, endSec: l } : n)));
        }, []),
        ew = a.useCallback((e, t) => {
            eg((l) => l.map((l) => (l.id === e && l.type === p.Me.TEXT ? { ...l, data: t(l.data) } : l)));
        }, []),
        eA = a.useCallback((e, t) => {
            eg((l) => l.map((l) => (l.id === e && l.type === p.Me.IMAGE ? { ...l, data: t(l.data) } : l)));
        }, []),
        eI = a.useCallback(
            () => ({
                ...A,
                name: $,
                tracks: eb.current,
                editMetadata: {
                    start: G,
                    end: B,
                    applicationAudio: H,
                    voiceAudio: X,
                    soundboardAudio: W,
                    crop: { preset: F },
                },
            }),
            [A, $, G, B, H, X, W, F],
        ),
        eL = a.useCallback((e) => {
            ((V.current = e), ea(e.videoElement));
        }, []),
        eR = a.useCallback((e, t, l, n) => {
            (er(e), eu(t), eo(l), eh(() => n));
        }, []),
        eT = a.useCallback(() => {
            em(!0);
        }, []);
    ((t = A.filepath),
        a.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u(166608), l.b)),
                n = new Worker(new URL("/assets/" + l.u(35886), l.b)),
                a = new Map(),
                i = 0,
                r = null,
                o = !1;
            async function c(e, t, l) {
                let n = [];
                try {
                    n = await (async function (e, t, l, n, a) {
                        let i = document.createElement("video");
                        ((i.muted = !0), (i.preload = "auto"), (i.src = e));
                        let r = [];
                        try {
                            for (let e of (await f(i, "loadeddata"), t)) {
                                if (a()) break;
                                ((i.currentTime = e),
                                    await f(i, "seeked"),
                                    r.push(
                                        await createImageBitmap(i, {
                                            resizeWidth: l,
                                            resizeHeight: n,
                                            resizeQuality: "low",
                                        }),
                                    ));
                            }
                        } catch (e) {
                            for (let e of r) e.close();
                            throw e;
                        } finally {
                            (0, m.A)(i);
                        }
                        return r;
                    })(l, t.timestamps, t.previewWidth, t.previewHeight, () => !a.has(e));
                } catch (e) {
                    p.GU.warn("Timeline thumbnail video element fallback error:", e);
                }
                let i = a.get(e);
                if ((a.delete(e), null == i)) {
                    for (let e of n) e.close();
                    return;
                }
                i.onComplete(n);
            }
            let u = (e, t, l, s) => {
                let u = ++i,
                    d = { timestamps: e, previewWidth: t, previewHeight: l, onComplete: s };
                return (
                    a.set(u, d),
                    o && null != r
                        ? c(u, d, r)
                        : n.postMessage({
                              type: "extract",
                              requestId: u,
                              timestamps: e,
                              previewWidth: t,
                              previewHeight: l,
                          }),
                    () => {
                        a.delete(u);
                    }
                );
            };
            return (
                !(async function () {
                    let l;
                    try {
                        l = await s.A.clips.loadClip(t);
                    } catch {
                        eT();
                        return;
                    }
                    ((e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: a } = e.data,
                            i = URL.createObjectURL(new Blob([t], { type: "video/mp4" }));
                        r = i;
                        let s = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            s.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        (n.postMessage({ type: "init", videoBuffer: t }, [t]),
                            eR(i, s, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })), u));
                    }),
                        (n.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    ev({ width: t.width, height: t.height });
                                    break;
                                case "thumbnails": {
                                    let e = a.get(t.requestId);
                                    if ((a.delete(t.requestId), null == e)) {
                                        for (let e of t.bitmaps) e.close();
                                        return;
                                    }
                                    e.onComplete(t.bitmaps);
                                    break;
                                }
                                case "error": {
                                    if (
                                        (p.GU.warn(`Timeline thumbnail extraction error: ${t.message}`),
                                        null == t.requestId)
                                    )
                                        break;
                                    let e = a.get(t.requestId);
                                    if (null == e) break;
                                    if (null == r) {
                                        (a.delete(t.requestId), e.onComplete([]));
                                        break;
                                    }
                                    (o ||
                                        (p.GU.info("Timeline thumbnails: falling back to video element extraction"),
                                        (o = !0)),
                                        c(t.requestId, e, r));
                                }
                            }
                        }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]));
                })(),
                () => {
                    (e.terminate(), n.terminate(), a.clear());
                }
            );
        }, [t, eR, ev, eT]),
        a.useEffect(
            () => () => {
                null != ei && URL.revokeObjectURL(ei);
            },
            [ei],
        ),
        a.useEffect(
            () => () => {
                for (let e of ec) URL.revokeObjectURL(e.url);
            },
            [ec],
        ),
        a.useEffect(
            () => () => {
                null != es && URL.revokeObjectURL(es);
            },
            [es],
        ),
        (function (e, t) {
            let { clipId: l, clipProtocolVideoURL: n, isScreenshot: i, editOnly: r, pendingEdits: s } = e,
                m = a.useRef(s);
            ((m.current = s),
                a.useEffect(() => {
                    async function e() {
                        let e = {},
                            a = m.current;
                        if (!i && null != n)
                            try {
                                e = { thumbnail: await (0, d.m)(n, a.editMetadata.start) };
                            } catch (e) {
                                p.GU.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                            }
                        await (0, o.Yy)(l, { ...a, tracks: t.current, ...e }, !0);
                    }
                    return () => {
                        !r &&
                            (u.set(l, e),
                            c.has(l) ||
                                (async function (e) {
                                    let t = u.get(e);
                                    for (; null != t;) {
                                        u.delete(e);
                                        let l = t().catch(() => {});
                                        (c.set(e, l), await l, c.delete(e), (t = u.get(e)));
                                    }
                                })(l));
                    };
                }, [l, n, i, m, r, t]));
        })(
            {
                clipId: A.id,
                clipProtocolVideoURL: P,
                isScreenshot: R,
                editOnly: L,
                pendingEdits: {
                    name: $,
                    editMetadata: {
                        start: G,
                        end: B,
                        voiceAudio: X,
                        applicationAudio: H,
                        soundboardAudio: W,
                        crop: { preset: F },
                    },
                },
            },
            eb,
        ),
        a.useEffect(() => {
            Y > 0 && B <= 0 && T <= 0 && _((e) => ({ ...e, cropEnd: Y }));
        }, [Y, B, T]));
    let eS = a.useMemo(() => B - G, [G, B]),
        eD = a.useCallback(
            (e) => (
                et.current.add(e),
                () => {
                    et.current.delete(e);
                }
            ),
            [et],
        ),
        {
            setCropStart: eM,
            setCropEnd: eP,
            setCrop: eO,
        } = ((k = a.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, B - 1);
                (_((e) => ({ ...e, cropStart: t })), V?.current?.seek(t));
            },
            [B, _, V],
        )),
        {
            setCropStart: k,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, G + 1, Y);
                    (_((e) => ({ ...e, cropEnd: t })), V?.current?.seek(t));
                },
                [G, Y, _, V],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    _((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [_],
            ),
        }),
        {
            play: e_,
            pause: ez,
            seek: eU,
        } = ((E = a.useCallback(() => {
            V?.current?.play();
        }, [V])),
        {
            play: E,
            pause: a.useCallback(() => {
                V?.current?.pause();
            }, [V]),
            seek: a.useCallback(
                (e) => {
                    V?.current?.seek(e);
                },
                [V],
            ),
        });
    ((0, r.A)(() => {
        let e = V.current?.videoElement;
        if (null == e || !el.current) return;
        let t = e.currentTime;
        (K.current !== t && ((K.current = t), et.current.forEach((e) => e.onTimeUpdate?.(t))),
            I.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`));
    }),
        a.useEffect(() => {
            if (null != en)
                return (
                    en.addEventListener("play", e),
                    en.addEventListener("pause", t),
                    en.addEventListener("durationchange", l),
                    en.addEventListener("loadedmetadata", n),
                    en.addEventListener("seeked", a),
                    en.duration > 0 && Z(en.duration),
                    en.readyState >= 1 && (ee(!0), V?.current?.seek(M)),
                    q(!en.paused),
                    () => {
                        (en.removeEventListener("play", e),
                            en.removeEventListener("pause", t),
                            en.removeEventListener("durationchange", l),
                            en.removeEventListener("loadedmetadata", n),
                            en.removeEventListener("seeked", a));
                    }
                );
            function e() {
                (q(!0), et.current.forEach((e) => e.onPlay?.()));
            }
            function t() {
                (q(!1), et.current.forEach((e) => e.onPause?.()));
            }
            function l() {
                null != en && Z(en.duration);
            }
            function n() {
                null != en && (ee(!0), Z(en.duration), V?.current?.seek(M));
            }
            function a() {
                el.current = !0;
            }
        }, [en, M, V, et, q, ee, Z, el]));
    let e$ = a.useCallback((e) => {
            _((t) => ({ ...t, clipName: e }));
        }, []),
        eG = a.useCallback((e) => {
            _((t) => ({ ...t, cropPreset: e }));
        }, []),
        eB = a.useCallback((e) => {
            _((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eX = a.useCallback((e) => {
            _((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eH = a.useCallback((e) => {
            _((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eW = a.useMemo(
            () =>
                function () {
                    let [e, t] = a.useState(K.current);
                    return (
                        a.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                et.current.add(e),
                                () => {
                                    et.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [K, et],
        ),
        eF = a.useMemo(
            () => ({
                useCurrentTime: eW,
                duration: Y,
                isPlaying: Q,
                isLoaded: J,
                cropStart: G,
                cropEnd: B,
                cropDuration: eS,
                setCropStart: eM,
                setCropEnd: eP,
                setCrop: eO,
                cropPreset: F,
                setCropPreset: eG,
                activeTool: z,
                setActiveTool: U,
                play: e_,
                pause: ez,
                seek: eU,
                subscribe: eD,
                setVideoPlayerRef: eL,
                videoPlayerRef: V,
                videoURL: ei,
                audioTracks: ec,
                hasError: ed,
                applicationAudioEnabled: H,
                setApplicationAudioEnabled: eB,
                voiceAudioEnabled: X,
                setVoiceAudioEnabled: eX,
                soundboardAudioEnabled: W,
                setSoundboardAudioEnabled: eH,
                getEditedClip: eI,
                tracks: ex,
                addTextTrack: ey,
                addImageTrack: eN,
                removeTrack: ek,
                updateTrackRange: eE,
                updateTextTrackData: ew,
                updateImageTrackData: eA,
                clipName: $,
                setClipName: e$,
                audioURL: es,
                clip: A,
                editOnly: L,
                generateThumbnails: ef,
                videoDimensions: ep,
            }),
            [
                L,
                eW,
                Y,
                Q,
                J,
                G,
                B,
                eS,
                eM,
                eP,
                eO,
                F,
                eG,
                z,
                U,
                e_,
                ez,
                eU,
                es,
                eD,
                eL,
                ei,
                ec,
                ed,
                H,
                eB,
                X,
                eX,
                W,
                eH,
                eI,
                ex,
                ey,
                eN,
                ek,
                eE,
                ew,
                eA,
                $,
                e$,
                A,
                ef,
                ep,
            ],
        );
    return (0, n.jsx)(b.Provider, { value: eF, children: w });
}
function y() {
    let e = a.useContext(b);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
