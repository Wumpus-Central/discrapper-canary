(l.d(t, { p: () => j, T: () => y }), l(323874), l(14289), l(35956), l(321073));
var a = l(477900),
    n = l(582128),
    i = l(435558),
    s = l(194498),
    r = l(77729),
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
function j(e) {
    var t;
    let j,
        y,
        C,
        N,
        E,
        k,
        { children: w, clip: A, modalContainerRef: R, editOnly: L = !1 } = e,
        T = A.type === p.nQ.SCREENSHOT,
        {
            initialDuration: I,
            initialCropStart: D,
            initialCropEnd: M,
            initialCurrentTime: S,
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
        O = n.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(A.filepath),
            [A.filepath],
        ),
        [P, _] = n.useState({
            clipName: A.name,
            cropStart: D,
            cropEnd: 0 === M ? I : M,
            voiceAudioEnabled: A.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: A.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: A.editMetadata?.soundboardAudio ?? !0,
            cropPreset: A.editMetadata?.crop?.preset ?? p.yz.ORIGINAL,
        }),
        [z, U] = n.useState(h.Y.NONE),
        {
            clipName: $,
            cropStart: G,
            cropEnd: B,
            voiceAudioEnabled: H,
            applicationAudioEnabled: X,
            soundboardAudioEnabled: F,
            cropPreset: V,
        } = P,
        W = n.useRef(null),
        K = n.useRef(S),
        [Z, Y] = n.useState(I),
        [Q, q] = n.useState(!1),
        [J, ee] = n.useState(!1),
        et = n.useRef(new Set()),
        el = n.useRef(!1),
        [ea, en] = n.useState(null),
        [ei, es] = n.useState(null),
        [er, eo] = n.useState(null),
        [ec, eu] = n.useState([]),
        [ed, em] = n.useState(!1),
        [ef, eh] = n.useState(() => g),
        [ep, ev] = n.useState(null),
        [ex, eg] = n.useState(() => A.tracks ?? []),
        eb = n.useRef(ex);
    eb.current = ex;
    let ej = n.useCallback(() => {
            let e = W.current?.videoElement?.currentTime ?? G,
                t = (0, i.clamp)(e, G, B - 1);
            return { startSec: t, endSec: Math.min(t + 5, B) };
        }, [G, B, W]),
        ey = n.useCallback(() => {
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
        eC = (0, p.QY)(V) ?? (null != ep ? ep.width / ep.height : null),
        eN = n.useCallback(
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
        eE = n.useCallback((e) => {
            eg((t) => t.filter((t) => t.id !== e));
        }, []),
        ek = n.useCallback((e, t, l) => {
            eg((a) => a.map((a) => (a.id === e ? { ...a, startSec: t, endSec: l } : a)));
        }, []),
        ew = n.useCallback((e, t) => {
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
                    crop: { preset: V },
                },
            }),
            [A, $, G, B, X, H, F, V],
        ),
        eL = n.useCallback((e) => {
            ((W.current = e), en(e.videoElement));
        }, []),
        eT = n.useCallback((e, t, l, a) => {
            (es(e), eu(t), eo(l), eh(() => a));
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
                s = null,
                o = !1;
            async function c(e, t, l) {
                let a = [];
                try {
                    a = await (async function (e, t, l, a, n) {
                        let i = document.createElement("video");
                        ((i.muted = !0), (i.preload = "auto"), (i.src = e));
                        let s = [];
                        try {
                            for (let e of (await f(i, "loadeddata"), t)) {
                                if (n()) break;
                                ((i.currentTime = e),
                                    await f(i, "seeked"),
                                    s.push(
                                        await createImageBitmap(i, {
                                            resizeWidth: l,
                                            resizeHeight: a,
                                            resizeQuality: "low",
                                        }),
                                    ));
                            }
                        } catch (e) {
                            for (let e of s) e.close();
                            throw e;
                        } finally {
                            (0, m.A)(i);
                        }
                        return s;
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
            let u = (e, t, l, r) => {
                let u = ++i,
                    d = { timestamps: e, previewWidth: t, previewHeight: l, onComplete: r };
                return (
                    n.set(u, d),
                    o && null != s
                        ? c(u, d, s)
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
                        l = await r.A.clips.loadClip(t);
                    } catch {
                        eI();
                        return;
                    }
                    ((e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: n } = e.data,
                            i = URL.createObjectURL(new Blob([t], { type: "video/mp4" }));
                        s = i;
                        let r = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            r.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        (a.postMessage({ type: "init", videoBuffer: t }, [t]),
                            eT(i, r, URL.createObjectURL(new Blob([n], { type: "audio/mp4" })), u));
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
                                    if (null == s) {
                                        (n.delete(t.requestId), e.onComplete([]));
                                        break;
                                    }
                                    (o ||
                                        (p.GU.info("Timeline thumbnails: falling back to video element extraction"),
                                        (o = !0)),
                                        c(t.requestId, e, s));
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
                null != er && URL.revokeObjectURL(er);
            },
            [er],
        ),
        (function (e, t) {
            let { clipId: l, clipProtocolVideoURL: a, isScreenshot: i, editOnly: s, pendingEdits: r } = e,
                m = n.useRef(r);
            ((m.current = r),
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
                        !s &&
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
                }, [l, a, i, m, s, t]));
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
                        crop: { preset: V },
                    },
                },
            },
            eb,
        ),
        n.useEffect(() => {
            Z > 0 && B <= 0 && I <= 0 && _((e) => ({ ...e, cropEnd: Z }));
        }, [Z, B, I]));
    let eD = n.useMemo(() => B - G, [G, B]),
        eM = n.useCallback(
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
        } = ((E = n.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, B - 1);
                (_((e) => ({ ...e, cropStart: t })), W?.current?.seek(t));
            },
            [B, _, W],
        )),
        {
            setCropStart: E,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, G + 1, Z);
                    (_((e) => ({ ...e, cropEnd: t })), W?.current?.seek(t));
                },
                [G, Z, _, W],
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
            pause: ez,
            seek: eU,
        } = ((k = n.useCallback(() => {
            W?.current?.play();
        }, [W])),
        {
            play: k,
            pause: n.useCallback(() => {
                W?.current?.pause();
            }, [W]),
            seek: n.useCallback(
                (e) => {
                    W?.current?.seek(e);
                },
                [W],
            ),
        });
    ((0, s.A)(() => {
        let e = W.current?.videoElement;
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
                    ea.readyState >= 1 && (ee(!0), W?.current?.seek(S)),
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
                null != ea && (ee(!0), Y(ea.duration), W?.current?.seek(S));
            }
            function n() {
                el.current = !0;
            }
        }, [ea, S, W, et, q, ee, Y, el]));
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
        eV = n.useMemo(
            () => ({
                useCurrentTime: eF,
                duration: Z,
                isPlaying: Q,
                isLoaded: J,
                cropStart: G,
                cropEnd: B,
                cropDuration: eD,
                setCropStart: eS,
                setCropEnd: eO,
                setCrop: eP,
                cropPreset: V,
                setCropPreset: eG,
                activeTool: z,
                setActiveTool: U,
                play: e_,
                pause: ez,
                seek: eU,
                subscribe: eM,
                setVideoPlayerRef: eL,
                videoPlayerRef: W,
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
                addTextTrack: ey,
                addImageTrack: eN,
                removeTrack: eE,
                updateTrackRange: ek,
                updateTextTrackData: ew,
                updateImageTrackData: eA,
                clipName: $,
                setClipName: e$,
                audioURL: er,
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
                eD,
                eS,
                eO,
                eP,
                V,
                eG,
                z,
                U,
                e_,
                ez,
                eU,
                er,
                eM,
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
                ey,
                eN,
                eE,
                ek,
                ew,
                eA,
                $,
                e$,
                A,
                ef,
                ep,
            ],
        );
    return (0, a.jsx)(b.Provider, { value: eV, children: w });
}
function y() {
    let e = n.useContext(b);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
