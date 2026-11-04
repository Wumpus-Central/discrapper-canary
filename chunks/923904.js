(l.d(t, { p: () => y, T: () => j }), l(323874), l(14289), l(35956), l(321073));
var a = l(477900),
    n = l(582128),
    i = l(435558),
    r = l(194498),
    s = l(77729),
    o = l(489496);
let c = new Map(),
    u = new Map();
var d = l(956050),
    m = l(367974);
function f(e, t) {
    return new Promise((l, a) => {
        function n() {
            (e.removeEventListener("error", i), l());
        }
        function i() {
            (e.removeEventListener(t, n),
                a(Error(`video element error while waiting for ${t}: ${e.error?.message ?? "unknown"}`)));
        }
        (e.addEventListener(t, n, { once: !0 }), e.addEventListener("error", i, { once: !0 }));
    });
}
var h = l(635793),
    p = l(696016),
    v = l(683825),
    x = l(792996);
let g = (e, t, l, a) => (a([]), () => {}),
    b = n.createContext(null);
function y(e) {
    var t;
    let y,
        j,
        C,
        N,
        w,
        E,
        { children: k, clip: A, modalContainerRef: R, editOnly: L = !1 } = e,
        T = A.type === p.nQ.SCREENSHOT,
        {
            initialDuration: I,
            initialCropStart: M,
            initialCropEnd: D,
            initialCurrentTime: S,
        } = ((y = A.length / 1e3),
        (j = A.editMetadata?.start ?? 0),
        (C = A.editMetadata?.end ?? 0),
        (N = 0 !== j || (0 !== C && C !== y)),
        {
            initialDuration: y,
            initialCropStart: j,
            initialCropEnd: C,
            isCropped: N,
            initialCurrentTime: N ? j : y / 2,
        }),
        O = n.useMemo(
            () =>
                null == s.A.clips.getClipProtocolURLFromPath ? null : s.A.clips.getClipProtocolURLFromPath(A.filepath),
            [A.filepath],
        ),
        [P, _] = n.useState({
            clipName: A.name,
            cropStart: M,
            cropEnd: 0 === D ? I : D,
            voiceAudioEnabled: A.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: A.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: A.editMetadata?.soundboardAudio ?? !0,
            cropPreset: A.editMetadata?.crop?.preset ?? p.yz.ORIGINAL,
        }),
        [U, z] = n.useState(h.Y.NONE),
        {
            clipName: $,
            cropStart: G,
            cropEnd: B,
            voiceAudioEnabled: H,
            applicationAudioEnabled: X,
            soundboardAudioEnabled: F,
            cropPreset: W,
        } = P,
        V = n.useRef(null),
        K = n.useRef(S),
        [Z, Y] = n.useState(I),
        [Q, q] = n.useState(!1),
        [J, ee] = n.useState(!1),
        et = n.useRef(new Set()),
        el = n.useRef(!1),
        [ea, en] = n.useState(null),
        [ei, er] = n.useState(null),
        [es, eo] = n.useState(null),
        [ec, eu] = n.useState([]),
        [ed, em] = n.useState(!1),
        [ef, eh] = n.useState(() => g),
        [ep, ev] = n.useState(null),
        [ex, eg] = n.useState(() => A.tracks ?? []),
        eb = n.useRef(ex);
    eb.current = ex;
    let ey = n.useCallback(() => {
            let e = V.current?.videoElement?.currentTime ?? G,
                t = (0, i.clamp)(e, G, B - 1);
            return { startSec: t, endSec: Math.min(t + 5, B) };
        }, [G, B, V]),
        ej = n.useCallback(() => {
            let e = crypto.randomUUID(),
                t = {
                    id: e,
                    type: p.Me.TEXT,
                    ...ey(),
                    data: {
                        text: x.intl.string(v.default.v2jEIc),
                        style: { ...p.QK },
                        position: { ...p._S },
                        rotationDeg: 0,
                    },
                };
            return (eg((e) => [...e, t]), z(h.Y.NONE), e);
        }, [ey, z]),
        eC = (0, p.QY)(W) ?? (null != ep ? ep.width / ep.height : null),
        eN = n.useCallback(
            (e) => {
                let t = crypto.randomUUID(),
                    l = {
                        id: t,
                        type: p.Me.IMAGE,
                        ...ey(),
                        data: {
                            ...e,
                            position: { ...p._S },
                            widthFraction: null != eC ? (0, p.Qw)(e.naturalWidth / e.naturalHeight, eC) : 0.35,
                            rotationDeg: 0,
                            shadow: "none",
                            shadowColor: p.pk,
                        },
                    };
                return (eg((e) => [...e, l]), z(h.Y.NONE), t);
            },
            [ey, z, eC],
        ),
        ew = n.useCallback((e) => {
            eg((t) => t.filter((t) => t.id !== e));
        }, []),
        eE = n.useCallback((e, t, l) => {
            eg((a) => a.map((a) => (a.id === e ? { ...a, startSec: t, endSec: l } : a)));
        }, []),
        ek = n.useCallback((e, t) => {
            eg((l) => l.map((l) => (l.id === e && l.type === p.Me.TEXT ? { ...l, data: t(l.data) } : l)));
        }, []),
        eA = n.useCallback((e, t) => {
            eg((l) => l.map((l) => (l.id === e && l.type === p.Me.IMAGE ? { ...l, data: t(l.data) } : l)));
        }, []),
        eR = n.useCallback(
            () => ({
                ...A,
                name: $,
                tracks: eb.current,
                editMetadata: {
                    start: G,
                    end: B,
                    applicationAudio: X,
                    voiceAudio: H,
                    soundboardAudio: F,
                    crop: { preset: W },
                },
            }),
            [A, $, G, B, X, H, F, W],
        ),
        eL = n.useCallback((e) => {
            ((V.current = e), en(e.videoElement));
        }, []),
        eT = n.useCallback((e, t, l, a) => {
            (er(e), eu(t), eo(l), eh(() => a));
        }, []),
        eI = n.useCallback(() => {
            em(!0);
        }, []);
    ((t = A.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u(166608), l.b)),
                a = new Worker(new URL("/assets/" + l.u(35886), l.b)),
                n = new Map(),
                i = 0,
                r = null,
                o = !1;
            async function c(e, t, l) {
                let a = [];
                try {
                    a = await (async function (e, t, l, a, n) {
                        let i = document.createElement("video");
                        ((i.muted = !0), (i.preload = "auto"), (i.src = e));
                        let r = [];
                        try {
                            for (let e of (await f(i, "loadeddata"), t)) {
                                if (n()) break;
                                ((i.currentTime = e),
                                    await f(i, "seeked"),
                                    r.push(
                                        await createImageBitmap(i, {
                                            resizeWidth: l,
                                            resizeHeight: a,
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
                    })(l, t.timestamps, t.previewWidth, t.previewHeight, () => !n.has(e));
                } catch (e) {
                    p.GU.warn("Timeline thumbnail video element fallback error:", e);
                }
                let i = n.get(e);
                if ((n.delete(e), null == i)) {
                    for (let e of a) e.close();
                    return;
                }
                i.onComplete(a);
            }
            let u = (e, t, l, s) => {
                let u = ++i,
                    d = { timestamps: e, previewWidth: t, previewHeight: l, onComplete: s };
                return (
                    n.set(u, d),
                    o && null != r
                        ? c(u, d, r)
                        : a.postMessage({
                              type: "extract",
                              requestId: u,
                              timestamps: e,
                              previewWidth: t,
                              previewHeight: l,
                          }),
                    () => {
                        n.delete(u);
                    }
                );
            };
            return (
                !(async function () {
                    let l;
                    try {
                        l = await s.A.clips.loadClip(t);
                    } catch {
                        eI();
                        return;
                    }
                    ((e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: n } = e.data,
                            i = URL.createObjectURL(new Blob([t], { type: "video/mp4" }));
                        r = i;
                        let s = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            s.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        (a.postMessage({ type: "init", videoBuffer: t }, [t]),
                            eT(i, s, URL.createObjectURL(new Blob([n], { type: "audio/mp4" })), u));
                    }),
                        (a.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    ev({ width: t.width, height: t.height });
                                    break;
                                case "thumbnails": {
                                    let e = n.get(t.requestId);
                                    if ((n.delete(t.requestId), null == e)) {
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
                                    let e = n.get(t.requestId);
                                    if (null == e) break;
                                    if (null == r) {
                                        (n.delete(t.requestId), e.onComplete([]));
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
                    (e.terminate(), a.terminate(), n.clear());
                }
            );
        }, [t, eT, ev, eI]),
        n.useEffect(
            () => () => {
                null != ei && URL.revokeObjectURL(ei);
            },
            [ei],
        ),
        n.useEffect(
            () => () => {
                for (let e of ec) URL.revokeObjectURL(e.url);
            },
            [ec],
        ),
        n.useEffect(
            () => () => {
                null != es && URL.revokeObjectURL(es);
            },
            [es],
        ),
        (function (e, t) {
            let { clipId: l, clipProtocolVideoURL: a, isScreenshot: i, editOnly: r, pendingEdits: s } = e,
                m = n.useRef(s);
            ((m.current = s),
                n.useEffect(() => {
                    async function e() {
                        let e = {},
                            n = m.current;
                        if (!i && null != a)
                            try {
                                e = { thumbnail: await (0, d.m)(a, n.editMetadata.start) };
                            } catch (e) {
                                p.GU.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                            }
                        await (0, o.Yy)(l, { ...n, tracks: t.current, ...e }, !0);
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
                }, [l, a, i, m, r, t]));
        })(
            {
                clipId: A.id,
                clipProtocolVideoURL: O,
                isScreenshot: T,
                editOnly: L,
                pendingEdits: {
                    name: $,
                    editMetadata: {
                        start: G,
                        end: B,
                        voiceAudio: H,
                        applicationAudio: X,
                        soundboardAudio: F,
                        crop: { preset: W },
                    },
                },
            },
            eb,
        ),
        n.useEffect(() => {
            Z > 0 && B <= 0 && I <= 0 && _((e) => ({ ...e, cropEnd: Z }));
        }, [Z, B, I]));
    let eM = n.useMemo(() => B - G, [G, B]),
        eD = n.useCallback(
            (e) => (
                et.current.add(e),
                () => {
                    et.current.delete(e);
                }
            ),
            [et],
        ),
        {
            setCropStart: eS,
            setCropEnd: eO,
            setCrop: eP,
        } = ((w = n.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, B - 1);
                (_((e) => ({ ...e, cropStart: t })), V?.current?.seek(t));
            },
            [B, _, V],
        )),
        {
            setCropStart: w,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, G + 1, Z);
                    (_((e) => ({ ...e, cropEnd: t })), V?.current?.seek(t));
                },
                [G, Z, _, V],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    _((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [_],
            ),
        }),
        {
            play: e_,
            pause: eU,
            seek: ez,
        } = ((E = n.useCallback(() => {
            V?.current?.play();
        }, [V])),
        {
            play: E,
            pause: n.useCallback(() => {
                V?.current?.pause();
            }, [V]),
            seek: n.useCallback(
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
            R.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`));
    }),
        n.useEffect(() => {
            if (null != ea)
                return (
                    ea.addEventListener("play", e),
                    ea.addEventListener("pause", t),
                    ea.addEventListener("durationchange", l),
                    ea.addEventListener("loadedmetadata", a),
                    ea.addEventListener("seeked", n),
                    ea.duration > 0 && Y(ea.duration),
                    ea.readyState >= 1 && (ee(!0), V?.current?.seek(S)),
                    q(!ea.paused),
                    () => {
                        (ea.removeEventListener("play", e),
                            ea.removeEventListener("pause", t),
                            ea.removeEventListener("durationchange", l),
                            ea.removeEventListener("loadedmetadata", a),
                            ea.removeEventListener("seeked", n));
                    }
                );
            function e() {
                (q(!0), et.current.forEach((e) => e.onPlay?.()));
            }
            function t() {
                (q(!1), et.current.forEach((e) => e.onPause?.()));
            }
            function l() {
                null != ea && Y(ea.duration);
            }
            function a() {
                null != ea && (ee(!0), Y(ea.duration), V?.current?.seek(S));
            }
            function n() {
                el.current = !0;
            }
        }, [ea, S, V, et, q, ee, Y, el]));
    let e$ = n.useCallback((e) => {
            _((t) => ({ ...t, clipName: e }));
        }, []),
        eG = n.useCallback((e) => {
            _((t) => ({ ...t, cropPreset: e }));
        }, []),
        eB = n.useCallback((e) => {
            _((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eH = n.useCallback((e) => {
            _((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eX = n.useCallback((e) => {
            _((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eF = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(K.current);
                    return (
                        n.useEffect(() => {
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
        eW = n.useMemo(
            () => ({
                useCurrentTime: eF,
                duration: Z,
                isPlaying: Q,
                isLoaded: J,
                cropStart: G,
                cropEnd: B,
                cropDuration: eM,
                setCropStart: eS,
                setCropEnd: eO,
                setCrop: eP,
                cropPreset: W,
                setCropPreset: eG,
                activeTool: U,
                setActiveTool: z,
                play: e_,
                pause: eU,
                seek: ez,
                subscribe: eD,
                setVideoPlayerRef: eL,
                videoPlayerRef: V,
                videoURL: ei,
                audioTracks: ec,
                hasError: ed,
                applicationAudioEnabled: X,
                setApplicationAudioEnabled: eB,
                voiceAudioEnabled: H,
                setVoiceAudioEnabled: eH,
                soundboardAudioEnabled: F,
                setSoundboardAudioEnabled: eX,
                getEditedClip: eR,
                tracks: ex,
                addTextTrack: ej,
                addImageTrack: eN,
                removeTrack: ew,
                updateTrackRange: eE,
                updateTextTrackData: ek,
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
                eF,
                Z,
                Q,
                J,
                G,
                B,
                eM,
                eS,
                eO,
                eP,
                W,
                eG,
                U,
                z,
                e_,
                eU,
                ez,
                es,
                eD,
                eL,
                ei,
                ec,
                ed,
                X,
                eB,
                H,
                eH,
                F,
                eX,
                eR,
                ex,
                ej,
                eN,
                ew,
                eE,
                ek,
                eA,
                $,
                e$,
                A,
                ef,
                ep,
            ],
        );
    return (0, a.jsx)(b.Provider, { value: eW, children: k });
}
function j() {
    let e = n.useContext(b);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
