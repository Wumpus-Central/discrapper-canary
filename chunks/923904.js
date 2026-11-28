(l.d(t, { p: () => k, T: () => N }), l(323874), l(14289), l(35956), l(321073));
var n = l(477900),
    a = l(582128),
    i = l(435558),
    r = l(194498),
    s = l(77729),
    o = l(723702),
    c = l(457538),
    u = l(489496);
let d = new Map(),
    m = new Map();
var f = l(956050),
    h = l(160759),
    p = l(367974);
function v(e, t) {
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
var x = l(635793),
    g = l(696016),
    b = l(636107),
    j = l(792996);
let y = (e, t, l, n) => (n([]), () => {}),
    C = a.createContext(null);
function k(e) {
    var t;
    let k,
        N,
        E,
        w,
        I,
        A,
        { children: R, clip: L, modalContainerRef: S, editOnly: T = !1 } = e,
        M = L.type === g.nQ.SCREENSHOT,
        D = (0, o.xl)() && (0, o.uF)(),
        [O, P] = a.useState(() => D && (0, h.mD)()),
        [_, z] = a.useState(() => D && (0, h.NV)());
    a.useEffect(() => {
        if (!D) return;
        let e = !0;
        return (
            !(async function () {
                (await (0, h.so)(), e && (z((0, h.NV)()), P((0, h.mD)())));
            })(),
            () => {
                e = !1;
            }
        );
    }, [D]);
    let {
            initialDuration: U,
            initialCropStart: $,
            initialCropEnd: G,
            initialCurrentTime: V,
        } = ((k = L.length / 1e3),
        (N = L.editMetadata?.start ?? 0),
        (E = L.editMetadata?.end ?? 0),
        (w = 0 !== N || (0 !== E && E !== k)),
        {
            initialDuration: k,
            initialCropStart: N,
            initialCropEnd: E,
            isCropped: w,
            initialCurrentTime: w ? N : k / 2,
        }),
        B = a.useMemo(
            () =>
                null == s.A.clips.getClipProtocolURLFromPath ? null : s.A.clips.getClipProtocolURLFromPath(L.filepath),
            [L.filepath],
        ),
        [X, H] = a.useState({
            clipName: L.name,
            cropStart: $,
            cropEnd: 0 === G ? U : G,
            voiceAudioEnabled: L.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: L.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: L.editMetadata?.soundboardAudio ?? !0,
            speakerVolumes: L.editMetadata?.speakerVolumes ?? {},
            mutedSpeakerIds: L.editMetadata?.mutedSpeakerIds ?? [],
            applicationVolume: L.editMetadata?.applicationVolume ?? 100,
            soundboardVolume: L.editMetadata?.soundboardVolume ?? 100,
            cropPreset: L.editMetadata?.crop?.preset ?? g.yz.ORIGINAL,
        }),
        [F, W] = a.useState(x.Y.NONE),
        {
            clipName: K,
            cropStart: Y,
            cropEnd: Z,
            voiceAudioEnabled: Q,
            applicationAudioEnabled: q,
            soundboardAudioEnabled: J,
            speakerVolumes: ee,
            mutedSpeakerIds: et,
            applicationVolume: el,
            soundboardVolume: en,
            cropPreset: ea,
        } = X,
        ei = a.useRef(null),
        er = a.useRef(V),
        [es, eo] = a.useState(U),
        [ec, eu] = a.useState(!1),
        [ed, em] = a.useState(!1),
        ef = a.useRef(new Set()),
        eh = a.useRef(!1),
        [ep, ev] = a.useState(null),
        [ex, eg] = a.useState(null),
        [eb, ej] = a.useState(null),
        [ey, eC] = a.useState([]),
        [ek, eN] = a.useState(!1),
        [eE, ew] = a.useState(() => y),
        [eI, eA] = a.useState(null),
        [eR, eL] = a.useState(() => L.tracks ?? []),
        eS = a.useRef(eR);
    eS.current = eR;
    let eT = a.useCallback(() => {
            let e = ei.current?.videoElement?.currentTime ?? Y,
                t = (0, i.clamp)(e, Y, Z - 1);
            return { startSec: t, endSec: Math.min(t + 5, Z) };
        }, [Y, Z, ei]),
        eM = a.useCallback(() => {
            let e = crypto.randomUUID(),
                t = {
                    id: e,
                    type: g.Me.TEXT,
                    ...eT(),
                    data: {
                        text: j.intl.string(b.default.v2jEIc),
                        style: { ...g.QK },
                        position: { ...g._S },
                        rotationDeg: 0,
                    },
                };
            return (eL((e) => [...e, t]), W(x.Y.NONE), e);
        }, [eT, W]),
        eD = (0, g.QY)(ea) ?? (null != eI ? eI.width / eI.height : null),
        eO = a.useCallback(
            (e) => {
                let t = crypto.randomUUID(),
                    l = {
                        id: t,
                        type: g.Me.IMAGE,
                        ...eT(),
                        data: {
                            ...e,
                            position: { ...g._S },
                            widthFraction: null != eD ? (0, g.Qw)(e.naturalWidth / e.naturalHeight, eD) : 0.35,
                            rotationDeg: 0,
                            shadow: "none",
                            shadowColor: g.pk,
                        },
                    };
                return (eL((e) => [...e, l]), W(x.Y.NONE), t);
            },
            [eT, W, eD],
        ),
        eP = a.useCallback((e) => {
            eL((t) => t.filter((t) => t.id !== e));
        }, []),
        e_ = a.useCallback((e, t, l) => {
            eL((n) => n.map((n) => (n.id === e ? { ...n, startSec: t, endSec: l } : n)));
        }, []),
        ez = a.useCallback((e, t) => {
            eL((l) => l.map((l) => (l.id === e && l.type === g.Me.TEXT ? { ...l, data: t(l.data) } : l)));
        }, []),
        eU = a.useCallback((e, t) => {
            eL((l) => l.map((l) => (l.id === e && l.type === g.Me.IMAGE ? { ...l, data: t(l.data) } : l)));
        }, []),
        e$ = a.useCallback(
            () => ({
                ...L,
                name: K,
                tracks: eS.current,
                editMetadata: {
                    start: Y,
                    end: Z,
                    applicationAudio: q,
                    voiceAudio: Q,
                    soundboardAudio: J,
                    speakerVolumes: (0, c.RH)(ee),
                    mutedSpeakerIds: et.length > 0 ? et : void 0,
                    applicationVolume: 100 !== el ? el : void 0,
                    soundboardVolume: 100 !== en ? en : void 0,
                    crop: { preset: ea },
                },
            }),
            [L, K, Y, Z, q, Q, J, ee, et, el, en, ea],
        ),
        eG = a.useCallback((e) => {
            ((ei.current = e), ev(e.videoElement));
        }, []),
        eV = a.useCallback((e, t, l, n) => {
            (eg(e), eC(t), ej(l), ew(() => n));
        }, []),
        eB = a.useCallback(() => {
            eN(!0);
        }, []);
    ((t = L.filepath),
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
                            for (let e of (await v(i, "loadeddata"), t)) {
                                if (a()) break;
                                ((i.currentTime = e),
                                    await v(i, "seeked"),
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
                            (0, p.A)(i);
                        }
                        return r;
                    })(l, t.timestamps, t.previewWidth, t.previewHeight, () => !a.has(e));
                } catch (e) {
                    g.GU.warn("Timeline thumbnail video element fallback error:", e);
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
                        eB();
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
                            eV(i, s, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })), u));
                    }),
                        (n.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    eA({ width: t.width, height: t.height });
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
                                        (g.GU.warn(`Timeline thumbnail extraction error: ${t.message}`),
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
                                        (g.GU.info("Timeline thumbnails: falling back to video element extraction"),
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
        }, [t, eV, eA, eB]),
        a.useEffect(
            () => () => {
                null != ex && URL.revokeObjectURL(ex);
            },
            [ex],
        ),
        a.useEffect(
            () => () => {
                for (let e of ey) URL.revokeObjectURL(e.url);
            },
            [ey],
        ),
        a.useEffect(
            () => () => {
                null != eb && URL.revokeObjectURL(eb);
            },
            [eb],
        ),
        (function (e, t) {
            let { clipId: l, clipProtocolVideoURL: n, isScreenshot: i, editOnly: r, pendingEdits: s } = e,
                o = a.useRef(s);
            ((o.current = s),
                a.useEffect(() => {
                    async function e() {
                        let e = {},
                            a = o.current;
                        if (!i && null != n)
                            try {
                                e = { thumbnail: await (0, f.m)(n, a.editMetadata.start) };
                            } catch (e) {
                                g.GU.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                            }
                        await (0, u.Yy)(l, { ...a, tracks: t.current, ...e }, !0);
                    }
                    return () => {
                        !r &&
                            (m.set(l, e),
                            d.has(l) ||
                                (async function (e) {
                                    let t = m.get(e);
                                    for (; null != t;) {
                                        m.delete(e);
                                        let l = t().catch(() => {});
                                        (d.set(e, l), await l, d.delete(e), (t = m.get(e)));
                                    }
                                })(l));
                    };
                }, [l, n, i, o, r, t]));
        })(
            {
                clipId: L.id,
                clipProtocolVideoURL: B,
                isScreenshot: M,
                editOnly: T,
                pendingEdits: {
                    name: K,
                    editMetadata: {
                        start: Y,
                        end: Z,
                        voiceAudio: Q,
                        applicationAudio: q,
                        soundboardAudio: J,
                        speakerVolumes: (0, c.RH)(ee),
                        mutedSpeakerIds: et.length > 0 ? et : void 0,
                        applicationVolume: 100 !== el ? el : void 0,
                        soundboardVolume: 100 !== en ? en : void 0,
                        crop: { preset: ea },
                    },
                },
            },
            eS,
        ),
        a.useEffect(() => {
            es > 0 && Z <= 0 && U <= 0 && H((e) => ({ ...e, cropEnd: es }));
        }, [es, Z, U]));
    let eX = a.useMemo(() => Z - Y, [Y, Z]),
        eH = a.useCallback(
            (e) => (
                ef.current.add(e),
                () => {
                    ef.current.delete(e);
                }
            ),
            [ef],
        ),
        {
            setCropStart: eF,
            setCropEnd: eW,
            setCrop: eK,
        } = ((I = a.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, Z - 1);
                (H((e) => ({ ...e, cropStart: t })), ei?.current?.seek(t));
            },
            [Z, H, ei],
        )),
        {
            setCropStart: I,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, Y + 1, es);
                    (H((e) => ({ ...e, cropEnd: t })), ei?.current?.seek(t));
                },
                [Y, es, H, ei],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    H((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [H],
            ),
        }),
        {
            play: eY,
            pause: eZ,
            seek: eQ,
        } = ((A = a.useCallback(() => {
            ei?.current?.play();
        }, [ei])),
        {
            play: A,
            pause: a.useCallback(() => {
                ei?.current?.pause();
            }, [ei]),
            seek: a.useCallback(
                (e) => {
                    ei?.current?.seek(e);
                },
                [ei],
            ),
        });
    ((0, r.A)(() => {
        let e = ei.current?.videoElement;
        if (null == e || !eh.current) return;
        let t = e.currentTime;
        (er.current !== t && ((er.current = t), ef.current.forEach((e) => e.onTimeUpdate?.(t))),
            S.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`));
    }),
        a.useEffect(() => {
            if (null != ep)
                return (
                    ep.addEventListener("play", e),
                    ep.addEventListener("pause", t),
                    ep.addEventListener("durationchange", l),
                    ep.addEventListener("loadedmetadata", n),
                    ep.addEventListener("seeked", a),
                    ep.duration > 0 && eo(ep.duration),
                    ep.readyState >= 1 && (em(!0), ei?.current?.seek(V)),
                    eu(!ep.paused),
                    () => {
                        (ep.removeEventListener("play", e),
                            ep.removeEventListener("pause", t),
                            ep.removeEventListener("durationchange", l),
                            ep.removeEventListener("loadedmetadata", n),
                            ep.removeEventListener("seeked", a));
                    }
                );
            function e() {
                (eu(!0), ef.current.forEach((e) => e.onPlay?.()));
            }
            function t() {
                (eu(!1), ef.current.forEach((e) => e.onPause?.()));
            }
            function l() {
                null != ep && eo(ep.duration);
            }
            function n() {
                null != ep && (em(!0), eo(ep.duration), ei?.current?.seek(V));
            }
            function a() {
                eh.current = !0;
            }
        }, [ep, V, ei, ef, eu, em, eo, eh]));
    let eq = a.useCallback((e) => {
            H((t) => ({ ...t, clipName: e }));
        }, []),
        eJ = a.useCallback((e) => {
            H((t) => ({ ...t, cropPreset: e }));
        }, []),
        e0 = a.useCallback((e) => {
            H((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        e1 = a.useCallback((e) => {
            H((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        e5 = a.useCallback((e) => {
            H((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        e3 = a.useCallback((e, t) => {
            H((l) => ({ ...l, speakerVolumes: { ...l.speakerVolumes, [e]: (0, c.pX)(t) } }));
        }, []),
        e9 = a.useCallback((e, t) => {
            H((l) => {
                let n = l.mutedSpeakerIds.filter((t) => t !== e);
                return { ...l, mutedSpeakerIds: t ? [...n, e] : n };
            });
        }, []),
        e6 = a.useCallback((e) => {
            H((t) => ({ ...t, applicationVolume: (0, c.pX)(e) }));
        }, []),
        e2 = a.useCallback((e) => {
            H((t) => ({ ...t, soundboardVolume: (0, c.pX)(e) }));
        }, []),
        e4 = a.useMemo(
            () =>
                function () {
                    let [e, t] = a.useState(er.current);
                    return (
                        a.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                ef.current.add(e),
                                () => {
                                    ef.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [er, ef],
        ),
        e8 = a.useMemo(
            () => ({
                useCurrentTime: e4,
                duration: es,
                isPlaying: ec,
                isLoaded: ed,
                cropStart: Y,
                cropEnd: Z,
                cropDuration: eX,
                setCropStart: eF,
                setCropEnd: eW,
                setCrop: eK,
                cropPreset: ea,
                setCropPreset: eJ,
                activeTool: F,
                setActiveTool: W,
                play: eY,
                pause: eZ,
                seek: eQ,
                subscribe: eH,
                setVideoPlayerRef: eG,
                videoPlayerRef: ei,
                videoURL: ex,
                audioTracks: ey,
                hasError: ek,
                applicationAudioEnabled: q,
                setApplicationAudioEnabled: e0,
                voiceAudioEnabled: Q,
                setVoiceAudioEnabled: e1,
                soundboardAudioEnabled: J,
                setSoundboardAudioEnabled: e5,
                speakerVolumes: ee,
                mutedSpeakerIds: et,
                setSpeakerVolume: e3,
                speakerVolumeSupported: O,
                setSpeakerMuted: e9,
                speakerMuteSupported: _,
                applicationVolume: el,
                setApplicationVolume: e6,
                soundboardVolume: en,
                setSoundboardVolume: e2,
                getEditedClip: e$,
                tracks: eR,
                addTextTrack: eM,
                addImageTrack: eO,
                removeTrack: eP,
                updateTrackRange: e_,
                updateTextTrackData: ez,
                updateImageTrackData: eU,
                clipName: K,
                setClipName: eq,
                audioURL: eb,
                clip: L,
                editOnly: T,
                generateThumbnails: eE,
                videoDimensions: eI,
            }),
            [
                T,
                e4,
                es,
                ec,
                ed,
                Y,
                Z,
                eX,
                eF,
                eW,
                eK,
                ea,
                eJ,
                F,
                W,
                eY,
                eZ,
                eQ,
                eb,
                eH,
                eG,
                ex,
                ey,
                ek,
                q,
                e0,
                Q,
                e1,
                J,
                e5,
                ee,
                et,
                e3,
                O,
                e9,
                _,
                el,
                e6,
                en,
                e2,
                e$,
                eR,
                eM,
                eO,
                eP,
                e_,
                ez,
                eU,
                K,
                eq,
                L,
                eE,
                eI,
            ],
        );
    return (0, n.jsx)(C.Provider, { value: e8, children: R });
}
function N() {
    let e = a.useContext(C);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
