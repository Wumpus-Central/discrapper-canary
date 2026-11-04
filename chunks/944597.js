(n.r(t),
    n.d(t, {
        ATTACHMENT_CONTROL_BAR_CONFIG: () => L.Xq,
        COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => L.$7,
        default: () => q,
    }),
    n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    o = n(29477),
    u = n(621466),
    s = n(337836),
    c = n(17928),
    d = n(876230),
    m = n(231723),
    f = n(717421),
    p = n(939249),
    h = n(289873),
    x = n(782134),
    v = n(113494),
    g = n(834730),
    b = n(964486),
    E = n(770178),
    P = n(765548),
    y = n(775602),
    S = n(475815),
    C = n(614269),
    w = n(53200),
    N = n(23590),
    A = n(683574),
    R = n(649606),
    L = n(530567);
let { Layer: T, LayerContainer: M, LayerProvider: k, layerContext: j } = (0, n(365912).Ay)("DiscordVideoPlayer");
var D = n(565164),
    I = n(858918),
    B = n(275664),
    F = n(408121),
    G = n(984212),
    $ = n(246047),
    H = n(739416),
    U = n(931853),
    _ = n(90721),
    O = n(920228),
    K = n(953584),
    Q = n(338659),
    z = n(838541),
    V = n(105292),
    X = n(862649);
let Y = l.lazy(() =>
        Promise.all([n.e("999272"), n.e("919307")])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    W = { tension: 250, friction: 5, clamp: !0 };
function q(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: a = "landscape",
            videoUrlOverride: T,
            alt: q,
            src: Z,
            poster: J,
            initialActive: ee = !0,
            preloadOnHover: et = !1,
            initialTimeSec: en = 0,
            onProgressUpdate: er,
            onEnded: el,
            onError: ea,
            maxSeekableTimeSec: ei,
            captionTrackUrl: eo,
            transcriptText: eu,
            renderEndScreen: es,
            renderVideo: ec = $.v,
            onPlayerStateChange: ed,
            onFullscreenChange: em,
            onVolumeChange: ef,
            onMutedChange: ep,
            initialVolume: eh = 0.3,
            initialMuted: ex = !1,
            getInitialVolume: ev,
            getInitialMuted: eg,
            onLoadStart: eb,
            onLoadEnd: eE,
            onFirstFrame: eP,
            onBufferingStart: ey,
            onBufferingEnd: eS,
            onFocusChange: eC,
            onVisibilityChange: ew,
            onSeek: eN,
            onTimelineDragStateChange: eA,
            renderOverlay: eR,
            renderPersistentOverlay: eL,
            transcriptClassName: eT,
            onHlsInstance: eM,
            onClick: ek,
            preload: ej,
            downloadUrl: eD,
            fileSizeBytes: eI,
            downloadContentType: eB,
            extraButtons: eF,
            renderTopStartOverlay: eG,
            hideFullScreenBtn: e$ = !1,
            hideSkipButtons: eH,
            compactTimeDisplay: eU = !1,
            hidePlaybackSpeedBtn: e_ = !1,
            autoSizeControlBar: eO = !1,
            controlBarConfig: eK,
            getPlaybackBlockedMessage: eQ,
            progressClassName: ez,
            pauseOnLostVisibility: eV = !1,
            persistTimeline: eX = !1,
            persistPlayhead: eY = !0,
            autoFocus: eW = !1,
            autoHideVolumeSlider: eq = !1,
            floatingVolumeSlider: eZ = !1,
            timelineIndicatorConfig: eJ,
            scrubPreviewVttUrl: e0,
            scrubPreviewImageUrl: e1,
            loadingSpinnerPosition: e2 = "top-left",
            crossOrigin: e6 = "anonymous",
            withVideoHalo: e4 = !1,
            objectFit: e8 = "contain",
            minWidth: e7 = 240,
            minHeight: e9 = 180,
            muxContentMetadata: e3,
            awaitMuxReady: e5 = !1,
            playerRef: te,
            ref: tt,
        } = e,
        tn = T ?? Z,
        tr = eQ ?? U.u,
        { focused: tl, focusedChanged: ta } = (0, H.A7)(),
        { visible: ti, visibleChanged: to, targetRef: tu } = (0, H.O7)(),
        [ts, tc] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [td, tm] = l.useState(!1),
        [tf, tp] = l.useState(!1),
        [th, tx] = l.useState(!1),
        [tv, tg] = l.useState(0),
        [tb, tE] = l.useState(null),
        tP = l.useCallback((e) => {
            (tE(null), tg(e));
        }, []),
        ty = l.useRef(null),
        [tS, tC] = l.useState(!1),
        tw = l.useRef(null),
        [tN, tA] = l.useState(d.h$.LOADING),
        tR = l.useRef(!1),
        tL = l.useRef(null),
        [tT, tM] = l.useState([]),
        [tk, tj] = l.useState(!1),
        tD = l.useRef(!1),
        tI = l.useRef(!1),
        tB = l.useRef(!1),
        tF = l.useRef(!1),
        [tG, t$] = l.useState(!0),
        tH = l.useRef(!0),
        tU = l.useRef(null),
        t_ = l.useRef(null),
        [tO, tK] = l.useState(n || ee),
        [tQ, tz] = l.useState(eh),
        [tV, tX] = l.useState(ex),
        tY = eq || eZ,
        [tW, tq] = l.useState(!tY),
        [tZ, tJ] = l.useState(!1),
        [t0, t1] = l.useState(!1),
        [t2, t6] = l.useState(!1),
        t4 = (0, c.bG)([y.Ay], () => y.Ay.useReducedMotion),
        t8 = (0, c.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
        t7 = (0, l.useRef)(null),
        t9 = (0, l.useRef)(null),
        t3 = (0, l.useRef)(null),
        t5 = (0, l.useRef)(null),
        ne = l.useRef(!0),
        [nt, nn] = l.useState(null),
        nr = l.useRef(null),
        nl = (0, D.z5)(tO, nr, e0, e1),
        na = l.useCallback(() => t7.current?.currentTime ?? null, []),
        ni = l.useMemo(
            () => ({
                get current() {
                    return (0, $.c)(t7.current);
                },
            }),
            [],
        );
    (0, _.A)({ videoRef: ni, canvasRef: t3, enabled: tO && e4 && !t4, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: no,
            videoStats: nu,
            onCloseStats: ns,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                a = null != n && "" !== n,
                i = (0, c.bG)([K.Ay], () => !!a && K.Ay.isVideoStatsEnabled(n)),
                [o, u] = l.useState(null);
            return (
                l.useEffect(() => {
                    if (!i) return;
                    let e = t.current;
                    if (null == e) {
                        a && (0, K.Vh)(n, !1);
                        return;
                    }
                    let l = new Q.s(e, r ?? void 0);
                    return (
                        l.startTracking(u, { emitInitial: !0 }),
                        () => {
                            l.destroy();
                        }
                    );
                }, [i, t, n, a, r]),
                l.useEffect(
                    () => () => {
                        a && (0, K.ke)(n);
                    },
                    [n, a],
                ),
                {
                    showStats: i,
                    videoStats: i ? o : null,
                    onCloseStats: l.useCallback(() => {
                        a && (0, K.Vh)(n, !1);
                    }, [n, a]),
                }
            );
        })({ videoRef: t7, src: tn, fileSizeBytes: eI }),
        nc = l.useCallback(
            (e, t) => {
                ea?.(e, t);
            },
            [ea],
        ),
        { isHlsActive: nd, hls: nm } = (function (e, t) {
            let { src: n, initialTimeSec: r = 0, onError: a, onHlsInstance: i, crossOrigin: o = "anonymous" } = t,
                u = l.useRef(null),
                [s, c] = l.useState(null),
                m = l.useRef(r);
            m.current = r;
            let f = l.useRef(a),
                p = l.useRef(i),
                h = l.useRef(o);
            ((h.current = o),
                l.useEffect(() => {
                    f.current = a;
                }, [a]),
                l.useEffect(() => {
                    p.current = i;
                }, [i]));
            let [x, v] = l.useState(!1),
                g = !x && C.u.isHlsUrl(n) && (0, w.Ap)();
            return (
                l.useEffect(() => {
                    if (!g || null == n || null == e.current) return;
                    let t = e.current,
                        r = !1,
                        l = null,
                        a = null;
                    return (
                        (0, w.E)().then((e) => {
                            if (r) return;
                            if (!e.isSupported()) return void v(!0);
                            let i = (l = new e({
                                backBufferLength: 20,
                                maxBufferLength: 30,
                                startPosition: m.current,
                                startFragPrefetch: !0,
                                startLevel: -1,
                                xhrSetup: (e) => {
                                    e.withCredentials = "use-credentials" === h.current;
                                },
                                fetchSetup: (e, t) => (
                                    (t.credentials = (function (e) {
                                        switch (e) {
                                            case "use-credentials":
                                                return "include";
                                            case "anonymous":
                                            case null:
                                                return "same-origin";
                                        }
                                    })(h.current)),
                                    new Request(e.url, t)
                                ),
                            }));
                            ((u.current = i), c(i), p.current?.(i));
                            let o = 0;
                            ((a = () => {
                                i.mainForwardBufferInfo?.len === 0 &&
                                    i.trigger(e.Events.BUFFER_FLUSHING, {
                                        startOffset: t.currentTime,
                                        endOffset: 1 / 0,
                                        type: "video",
                                    });
                            }),
                                i.on(e.Events.FRAG_LOADING, function () {
                                    8e5 !== i.config.minAutoBitrate && (i.config.minAutoBitrate = 8e5);
                                }),
                                i.on(e.Events.ERROR, function (t, n) {
                                    if (
                                        (f.current?.(
                                            (function (e, t) {
                                                switch (t) {
                                                    case e.ErrorTypes.NETWORK_ERROR:
                                                        return d.SB.HLS_NETWORK_ERROR;
                                                    case e.ErrorTypes.MEDIA_ERROR:
                                                        return d.SB.HLS_MEDIA_ERROR;
                                                    case e.ErrorTypes.MUX_ERROR:
                                                        return d.SB.HLS_MUX_ERROR;
                                                    case e.ErrorTypes.KEY_SYSTEM_ERROR:
                                                        return d.SB.HLS_KEY_SYSTEM_ERROR;
                                                    default:
                                                        return d.SB.HLS_OTHER_ERROR;
                                                }
                                            })(e, n.type),
                                            { errorDetails: n.details, fatal: n.fatal },
                                        ),
                                        n.fatal)
                                    ) {
                                        if (o >= 3) {
                                            (i.destroy(), (u.current = null), c(null), p.current?.(null));
                                            return;
                                        }
                                        switch ((o++, n.type)) {
                                            case e.ErrorTypes.NETWORK_ERROR:
                                                i.startLoad();
                                                break;
                                            case e.ErrorTypes.MEDIA_ERROR:
                                                i.recoverMediaError();
                                                break;
                                            default:
                                                (i.destroy(), (u.current = null), p.current?.(null));
                                        }
                                    }
                                }),
                                t.addEventListener("seeking", a),
                                i.loadSource(n),
                                i.attachMedia(t));
                        }),
                        () => {
                            ((r = !0),
                                null != a && t.removeEventListener("seeking", a),
                                null != l &&
                                    (u.current === l && (l.destroy(), (u.current = null), c(null), p.current?.(null)),
                                    t.removeAttribute("src"),
                                    t.load()));
                        }
                    );
                }, [g, n, e]),
                { isHlsActive: g, hlsRef: u, hls: s }
            );
        })(ni, { src: tn, initialTimeSec: en, onError: nc, onHlsInstance: eM, crossOrigin: e6 }),
        { isReady: nf } = (0, N.A)({ videoRef: ni, hls: nm, contentMetadata: e3, isHls: nd }),
        np = e5 && !nf && !nd,
        [nh, nx] = l.useState(null),
        [nv, ng] = l.useState(0),
        [nb, nE] = l.useState(!1),
        nP = ei ?? t7.current?.duration ?? 0,
        [ny, nS] = l.useState(!1),
        nC = (0, P.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || nS(t < L.$7);
        });
    (0, E.g)(t9, nC, [], { enabled: eO, fireOnMount: eO });
    let { size: nw, config: nN } = l.useMemo(() => (0, L.ZH)(eO && ny ? d.oA.SM : d.oA.MD, eK, t2), [eO, ny, eK, t2]),
        nA = nN.timelineVerticalPaddingPx;
    (0, b.u5)(() => {
        ne.current && (ne.current = !1);
    });
    let nR = (0, P.A)(() => {
            if (null == t7.current) return;
            let e = ev?.() ?? tQ,
                t = eg?.() ?? tV;
            (e !== tQ && tz(e), t !== tV && tX(t), (t7.current.volume = t ? 0 : e));
        }),
        nL = (0, P.A)(() => {
            (tO || nR(), tK(!0));
        }),
        nT = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tF.current = !0), tc(e), ed?.(e, t), null != t7.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            (nn(null), nL(), t7.current.play());
                            break;
                        case d.Q6.PAUSED:
                            ((tD.current = !1), t7.current.pause(), (tH.current = !1));
                            break;
                        case d.Q6.ENDED:
                            tJ(!1);
                    }
            },
            [ed, nL],
        );
    (l.useEffect(() => {
        if (!eV) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && to && !ti,
            r = ta && !tl;
        if ((e || n || r) && null != t7.current && ts === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (nn(t), nT(d.Q6.PAUSED, t));
        }
    }, [eV, t, tl, ta, ti, to, ts, nT]),
        (0, O.A)({
            videoRef: ni,
            enabled: eV,
            onPipPause: () => {
                (nn(d.KB.PICTURE_IN_PICTURE), nT(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (nn(d.KB.FOCUS), nT(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            ta && eC?.(tl, ts);
        }, [tl, ta, ts, eC]),
        l.useEffect(() => {
            to && ew?.(ti, ts);
        }, [ti, to, ts, ew]));
    let [nM, nk] = l.useState(!1),
        nj = l.useRef(null),
        nD = l.useRef(0);
    l.useLayoutEffect(() => {
        nD.current = performance.now();
    }, []);
    let nI = l.useCallback(() => {
            switch ((null != nj.current && clearTimeout(nj.current), ts)) {
                case d.Q6.PLAYING:
                    nj.current = setTimeout(
                        () => {
                            nk(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nD.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [ts]),
        nB = l.useCallback(() => {
            (nk(!1), (nD.current = performance.now()), nI());
        }, [nI]);
    (l.useEffect(() => {
        if (ts !== d.Q6.PLAYING) {
            (nk(!1), null != nj.current && clearTimeout(nj.current));
            return;
        }
        return (
            nI(),
            () => {
                null != nj.current && clearTimeout(nj.current);
            }
        );
    }, [ts, nI]),
        l.useEffect(
            () => () => {
                null != tw.current && clearTimeout(tw.current);
            },
            [],
        ));
    let nF = th && t8,
        nG = ts === d.Q6.ENDED,
        n$ = nF || ((th || td || nG) && !nM);
    function nH() {
        tx(!0);
    }
    function nU(e) {
        ((0, u.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tx(!1);
    }
    let n_ = l.useRef(!1);
    l.useEffect(() => {
        (n_.current && !nF && nB(), (n_.current = nF));
    }, [nF, nB]);
    let nO = l.useRef(em);
    nO.current = em;
    let nK = l.useCallback(() => {
        let e = (0, S.qf)(t9.current);
        null == e || (0, S._U)(e) || (e.removeEventListener(S.Wb, nK), t6(!1), nO.current?.(!1));
    }, []);
    function nQ() {
        null == t7.current ||
            (nV(Math.max((tL.current ?? t7.current.currentTime) - 10, 0)),
            ts === d.Q6.ENDED && nT(d.Q6.PAUSED, d.KB.SEEK));
    }
    function nz() {
        if (null == t7.current) return;
        let e = Math.min((tL.current ?? t7.current.currentTime) + 10, nP);
        (nV(e), ts !== d.Q6.ENDED && e >= t7.current.duration && nT(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = t9.current;
        return () => {
            let t = (0, S.qf)(e);
            null != t && t.removeEventListener(S.Wb, nK);
        };
    }, [nK]);
    let nV = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == t7.current) return;
            let n = t7.current.currentTime;
            ((tL.current = e),
                tE((e / (t7.current.duration ?? 1)) * 100),
                tC(!0),
                null != tw.current && clearTimeout(tw.current),
                (tw.current = setTimeout(() => {
                    (tC(!1), (tw.current = null));
                }, 100)),
                (tR.current = !0),
                (t7.current.currentTime = e),
                t && eN?.(n, e));
        },
        [eN],
    );
    function nX() {
        if (null != t7.current)
            switch (ts) {
                case d.Q6.ENDED:
                    (nV(0), nT(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nn(d.KB.USER), nT(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nT(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function nY(e) {
        null != ek ? ek(e) : (tK(!0), nX());
    }
    let nW = l.useCallback(() => {
        if (null == t7.current || 0 === t7.current.textTracks.length) return;
        let e = t7.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, G.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        nx(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            nx((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function nq(e) {
        if (null != t7.current) {
            if (tN === d.h$.BUFFERING) {
                let e = null != t_.current ? performance.now() - t_.current : null;
                eS?.(e);
            } else if (tN === d.h$.LOADING) {
                let e = null != tU.current ? performance.now() - tU.current : null;
                eE?.(e);
            }
            (tA(d.h$.READY), ts === d.Q6.PLAYING && (tD.current || nT(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function nZ(e) {
        if ((nV(e), ts === d.Q6.ENDED && !tI.current)) {
            let t = t7.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nT(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == t5.current) return;
        let e = t5.current;
        return (
            e.addEventListener("load", nW),
            () => {
                null != e && e.removeEventListener("load", nW);
            }
        );
    }, [nW]);
    let [{ controlBarAnimSpring: nJ }, n0] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                t$(!1);
            },
            onRest: () => {
                t$(!0);
            },
        })),
        n1 = (0, l.useRef)(null),
        [{ captionHeightSpring: n2 }, n6] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: W }));
    (l.useEffect(
        () => (
            n6({ captionHeightSpring: t0 && null != nh ? (n1.current?.clientHeight ?? 0) : 0, immediate: t4 }),
            () => {
                n2.stop();
            }
        ),
        [t0, n6, t4, nh, n2],
    ),
        l.useEffect(
            () => (
                n0({ controlBarAnimSpring: n$ || tk ? 1 : 0, immediate: t4 }),
                () => {
                    nJ.stop();
                }
            ),
            [n$, n0, t4, tk, nJ],
        ));
    let n4 = ts === d.Q6.ENDED && null != es,
        n8 = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != t7.current && (nV(0), nT(d.Q6.PLAYING, e));
            },
            [nV, nT],
        ),
        n7 = l.useRef(null),
        n9 = l.useCallback(
            (e) => {
                (nB(), n7.current?.(e.nativeEvent));
            },
            [nB],
        );
    l.useImperativeHandle(
        te,
        () => ({
            play: () => {
                nT(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nT(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                nV(e);
            },
        }),
        [nT, nV],
    );
    let n3 = {
            ref: l.useCallback(
                (e) => {
                    t7.current = e;
                    let t = (0, $.c)(e);
                    ((tu.current = t), "function" == typeof tt ? tt(t) : null != tt && (tt.current = t));
                },
                [tt, tu],
            ),
            alt: q,
            playsInline: !0,
            mediaLayoutType: t2 ? z.dG.STATIC : z.dG.RESPONSIVE,
            className: i()({ [X.R]: n4, [X.IR]: !0, [X.FP]: "cover" === e8 && !t2 }),
            controls: !1,
            poster: J,
            preload: tO ? ej : tf ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != t7.current &&
                    (er?.(t7.current.currentTime, t7.current.duration),
                    tR.current || tP((t7.current.currentTime / t7.current.duration) * 100));
            },
            onEnded: function (e) {
                (tA(d.h$.READY), el?.(), tI.current || nT(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tN === d.h$.LOADING) {
                    let e = null != tU.current ? performance.now() - tU.current : null;
                    (eE?.(e), tA(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == t7.current) return;
                (en > 0 && !nd && nV(en, !1), nR());
                let t = t7.current.duration;
                (t > 0 && isFinite(t) && ng(t), nE(!0));
            },
            onLoadStart: function () {
                ((tU.current = performance.now()), eb?.());
            },
            onPlaying: function () {
                tH.current && (eP?.(performance.now()), (tH.current = !1));
            },
            onWaiting: function (e) {
                ((t_.current = performance.now()), ey?.(), tA(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == t7.current) return;
                let t = [];
                for (let e = 0; e < t7.current.buffered.length; e++) {
                    let n = t7.current.buffered.start(e),
                        r = t7.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / t7.current.duration, size: (r - n) / t7.current.duration });
                }
                tM(t);
            },
            onCanPlay: nq,
            onCanPlayThrough: nq,
            onSeeked: function () {
                ((tR.current = !1),
                    (tL.current = null),
                    null != t7.current && tP((t7.current.currentTime / t7.current.duration) * 100));
            },
            onAbort: function () {
                return nc(d.SB.ABORT);
            },
            onError: function () {
                return nc(d.SB.ERROR);
            },
            onEmptied: function () {
                return nc(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nc(d.SB.STALLED);
            },
            onClick: nY,
            crossOrigin: e6 ?? void 0,
            src: nd || np ? null : (tn ?? null),
            onSourceError: function () {
                return nc(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tk,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != eo &&
                        (0, r.jsx)("track", {
                            ref: t5,
                            src: eo,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != e0 && (0, r.jsx)("track", { ref: nr, src: e0, kind: "metadata" }),
                ],
            }),
        },
        n5 = (0, r.jsx)(k, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: t2 ? j : void 0,
                isFullscreen: t2,
                videoRef: t7,
                isActive: tO,
                controlBarConfig: nN,
                isControlBarExpanded: n$,
                children: (0, r.jsx)(p.D, {
                    className: i()(X.W6, I.i.blurple, { [X.nZ]: !tO }),
                    style: { minWidth: e7, minHeight: e9 },
                    "data-fullscreen": t2,
                    "data-dvp-controls-visible": n$ || tk,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tO ? -1 : 0,
                    focusProps: tO ? void 0 : { ringTarget: ty },
                    onMouseEnter: function () {
                        (tm(!0),
                            nk(!1),
                            et && tp(!0),
                            (nD.current = performance.now()),
                            null != nj.current && clearTimeout(nj.current));
                    },
                    onMouseLeave: function () {
                        (tm(!1), nk(!1));
                    },
                    "aria-label": tO ? void 0 : V.intl.string(V.t.RscU7I),
                    onClick: tO ? void 0 : nY,
                    onMouseMove: nB,
                    children: (0, r.jsxs)("div", {
                        ref: t9,
                        className: i()(X.NS, { [X.DO]: "portrait" === a, [X.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: n9,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nN.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${nN.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${nN.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nN.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${nN.midGroupGapPx}px`,
                            "--custom-duration-margin": `${nN.durationMarginPx}px`,
                            "--custom-playhead-size": `${nN.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${nN.timelineHitboxOffsetPx}px`,
                            "--custom-dvp-timeline-row-gap": nw === d.oA.LG ? "var(--space-6)" : "var(--space-4)",
                            "--custom-volume-slider-margin-start": `${nN.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${nN.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${nN.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": nN.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != nN.trailingGroupWidthPx ? `${nN.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tO && e4 && !t4 && (0, r.jsx)("canvas", { ref: t3, className: X.Xm }),
                            n4 && es?.({ replay: n8 }),
                            ec(n3),
                            tN !== d.h$.READY &&
                                ts === d.Q6.PLAYING &&
                                null != tn &&
                                (0, r.jsx)("span", {
                                    className: i()(X.S, { [X.F]: "center" === e2 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(U.A, {
                                message: tr({ hasVideoAsset: null != tn, playerState: ts, pauseReason: nt }),
                                showOverlay: null == tn,
                            }),
                            no &&
                                null != nu &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(Y, { stats: nu, onClose: ns }),
                                }),
                            null != eR &&
                                (0, r.jsx)(o.animated.div, {
                                    className: X.MU,
                                    style: {
                                        opacity: (0, o.to)([nJ.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, o.to)([nJ.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, o.to)([nJ.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eR(),
                                }),
                            tO &&
                                null != eG &&
                                (0, r.jsx)("div", {
                                    className: X.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: nH,
                                    onBlur: nU,
                                    children: eG({ visible: n$, animSpring: nJ, size: nw }),
                                }),
                            tZ &&
                                ts !== d.Q6.ENDED &&
                                null != eu &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (ts === d.Q6.PAUSED && nT(d.Q6.PLAYING, d.KB.USER), tJ(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: X.BG }),
                                        }),
                                        (0, r.jsx)(o.animated.div, {
                                            className: i()(X.xr, eT, { [X.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, o.to)(
                                                    [nJ, n2],
                                                    (e, t) => `${e * nN.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(F.X, {
                                                text: eu,
                                                onClose: function () {
                                                    tJ(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tO &&
                                (0, r.jsx)(o.animated.div, {
                                    className: X.Jp,
                                    style: {
                                        opacity: (0, o.to)([nJ.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(X.yf, {
                                        [X.ZH]: tF.current && ts === d.Q6.PLAYING,
                                        [X.v7]: tF.current && ts === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        ts === d.Q6.PLAYING
                                            ? (0, r.jsx)(x.PlayIcon, { className: X.PK })
                                            : (0, r.jsx)(v.PauseIcon, { className: X.PK }),
                                },
                                ts,
                            ),
                            t0 &&
                                null != nh &&
                                !n4 &&
                                (0, r.jsx)(o.animated.div, {
                                    className: X.o$,
                                    ref: n1,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, o.to)(
                                            [nJ.to({ range: [0, 1], output: [-nA, -nN.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-lg/semibold",
                                        color: "text-overlay-light",
                                        className: X.qh,
                                        children: nh.text,
                                    }),
                                }),
                            tO &&
                                (0, r.jsxs)(o.animated.div, {
                                    className: X.r8,
                                    style: {
                                        height: (0, o.to)(
                                            [nJ.to({ range: [0, 1], output: [0, nN.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: nH,
                                    onBlur: nU,
                                    children: [
                                        (0, r.jsx)(o.animated.div, {
                                            className: X.oB,
                                            style: {
                                                opacity: (0, o.to)([nJ], (e) => `${eX ? 1 : e}`),
                                                visibility:
                                                    eX || n$ || tk
                                                        ? void 0
                                                        : nJ.to((e) => (0 === e ? "hidden" : "visible")),
                                                transform: (0, o.to)(
                                                    [nJ.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * nA}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.Ay, {
                                                percent: null != tb ? tb : tv,
                                                animate:
                                                    !0 !== ne.current &&
                                                    !tS &&
                                                    ts === d.Q6.PLAYING &&
                                                    nb &&
                                                    tN === d.h$.READY,
                                                interactionEnabled: tG && nP > 0,
                                                backgroundColor: n$ || eX ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: ts,
                                                preloadedBuffers: n$ ? tT : void 0,
                                                durationSec: nv > 0 ? nv : +!nb,
                                                isFullyVisible: n$ && tG,
                                                maxSeekableTime: null != ei && nP > 0 ? nP : void 0,
                                                progressClassName: ez,
                                                persistPlayhead: eY,
                                                onClick: nZ,
                                                onScrubBack: nQ,
                                                onScrubForward: nz,
                                                onDragStateChange: function (e) {
                                                    if (((tI.current = e), eA?.(e), tj(e), e))
                                                        ((tD.current = ts === d.Q6.PLAYING),
                                                            (tB.current = ts === d.Q6.ENDED),
                                                            tD.current
                                                                ? t7.current?.pause()
                                                                : tB.current && nT(d.Q6.PAUSED, d.KB.SEEK));
                                                    else {
                                                        let e = t7.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tD.current
                                                            ? ((tD.current = !1),
                                                              t ? nT(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : tB.current
                                                              ? ((tB.current = !1),
                                                                t
                                                                    ? nT(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : nT(d.Q6.PLAYING, d.KB.USER))
                                                              : t && nT(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: eJ,
                                                scrubPreviewCues: nl,
                                                onIndicatorSeek: nZ,
                                                getCurrentTimeSec: na,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                        (0, r.jsx)(o.animated.div, {
                                            className: X.EG,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, o.to)(
                                                    [nJ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nA}px`,
                                                ),
                                                paddingBottom: (0, o.to)(
                                                    [nJ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nA}px`,
                                                ),
                                                pointerEvents: (0, o.to)(
                                                    [nJ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: ts,
                                                animSpring: nJ,
                                                visible: n$,
                                                seekForwardEnabled:
                                                    null == ei || (t7.current?.currentTime ?? 0) + 1 < nP,
                                                hideCaptionBtn: null == eo,
                                                hideTranscriptBtn: null == eu,
                                                hideFullScreenBtn: e$,
                                                hidePlaybackSpeedBtn: e_,
                                                hideSkipButtons: eH ?? "portrait" === a,
                                                compactTimeDisplay: eU,
                                                size: nw,
                                                downloadUrl: eD,
                                                downloadContentType: eB,
                                                extraButtons: eF,
                                                autoFocus: eW,
                                                keyDownHandlerRef: n7,
                                                volume: tQ,
                                                muted: tV,
                                                transcriptEnabled: tZ,
                                                captionEnabled: t0,
                                                handlePlaybackBtnClick: nX,
                                                handleTranscriptBtnClick: function () {
                                                    tJ(!tZ);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    t1(!t0);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !t2,
                                                        t = (0, S.qf)(t9.current);
                                                    (e && null != t
                                                        ? ((0, S.tl)(t), t.addEventListener(S.Wb, nK), em?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(S.Wb, nK), em?.(!1), (0, S.sP)(t)),
                                                        t6(e));
                                                },
                                                handleSeekBackBtnClick: nQ,
                                                handleSeekForwardBtnClick: nz,
                                                autoHideVolumeSlider: tY,
                                                floatingVolumeSlider: eZ,
                                                handleControlBarPendingInteraction: tj,
                                                onVolumeChange: function (e) {
                                                    (tz(e), ef?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (tX(e), ep?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tq(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eL &&
                                (0, r.jsx)("div", {
                                    className: X.MU,
                                    children: eL({
                                        playerState: ts,
                                        isControlBarExpanded: n$,
                                        controlBarAnimationSpring: nJ,
                                        videoRef: t7,
                                        isActive: tO,
                                        isVolumeExpanded: tW,
                                    }),
                                }),
                            !tO &&
                                (0, r.jsx)("div", {
                                    className: X.mF,
                                    ref: ty,
                                    children: (0, r.jsx)(x.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: X.z_,
                                    }),
                                }),
                            (0, r.jsx)(M, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(s.Jh, { enabled: t2, children: n5 });
}
