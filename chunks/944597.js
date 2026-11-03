(n.r(t),
    n.d(t, {
        ATTACHMENT_CONTROL_BAR_CONFIG: () => T.Xq,
        COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => T.$7,
        default: () => q,
    }),
    n(321073));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    u = n(29477),
    o = n(621466),
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
    E = n(964486),
    b = n(770178),
    P = n(765548),
    S = n(775602),
    y = n(475815),
    C = n(614269),
    w = n(53200),
    A = n(23590),
    R = n(683574),
    N = n(671897),
    T = n(530567);
let { Layer: k, LayerContainer: L, LayerProvider: M, layerContext: j } = (0, n(365912).Ay)("DiscordVideoPlayer");
var D = n(565164),
    I = n(275664),
    B = n(408121),
    F = n(984212),
    $ = n(246047),
    G = n(739416),
    H = n(931853),
    _ = n(90721),
    U = n(920228),
    O = n(953584),
    K = n(338659),
    Q = n(838541),
    z = n(105292),
    V = n(862649);
let X = l.lazy(() =>
        Promise.all([n.e("999272"), n.e("919307")])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    Y = { tension: 250, friction: 5, clamp: !0 },
    W = { visibility: "hidden" };
function q(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: i = "landscape",
            videoUrlOverride: k,
            alt: q,
            src: Z,
            poster: J,
            initialActive: ee = !0,
            initialTimeSec: et = 0,
            onProgressUpdate: en,
            onEnded: er,
            onError: el,
            maxSeekableTimeSec: ei,
            captionTrackUrl: ea,
            transcriptText: eu,
            renderEndScreen: eo,
            renderVideo: es = $.v,
            onPlayerStateChange: ec,
            onFullscreenChange: ed,
            onVolumeChange: em,
            onMutedChange: ef,
            initialVolume: ep = 0.3,
            initialMuted: eh = !1,
            getInitialVolume: ex,
            getInitialMuted: ev,
            onLoadStart: eg,
            onLoadEnd: eE,
            onFirstFrame: eb,
            onBufferingStart: eP,
            onBufferingEnd: eS,
            onFocusChange: ey,
            onVisibilityChange: eC,
            onSeek: ew,
            onTimelineDragStateChange: eA,
            renderOverlay: eR,
            renderPersistentOverlay: eN,
            transcriptClassName: eT,
            onHlsInstance: ek,
            onClick: eL,
            preload: eM,
            downloadUrl: ej,
            fileSizeBytes: eD,
            downloadContentType: eI,
            extraButtons: eB,
            renderTopStartOverlay: eF,
            hideFullScreenBtn: e$ = !1,
            hideSkipButtons: eG,
            compactTimeDisplay: eH = !1,
            hidePlaybackSpeedBtn: e_ = !1,
            autoSizeControlBar: eU = !1,
            controlBarConfig: eO,
            getPlaybackBlockedMessage: eK,
            progressClassName: eQ,
            pauseOnLostVisibility: ez = !1,
            persistTimeline: eV = !1,
            persistPlayhead: eX = !0,
            autoFocus: eY = !1,
            autoHideVolumeSlider: eW = !1,
            floatingVolumeSlider: eq = !1,
            timelineIndicatorConfig: eZ,
            scrubPreviewVttUrl: eJ,
            scrubPreviewImageUrl: e0,
            loadingSpinnerPosition: e1 = "top-left",
            crossOrigin: e2 = "anonymous",
            withVideoHalo: e6 = !1,
            objectFit: e4 = "contain",
            minWidth: e8 = 240,
            minHeight: e9 = 180,
            muxContentMetadata: e7,
            awaitMuxReady: e3 = !1,
            playerRef: e5,
            ref: te,
        } = e,
        tt = k ?? Z,
        tn = eK ?? H.u,
        { focused: tr, focusedChanged: tl } = (0, G.A7)(),
        { visible: ti, visibleChanged: ta, targetRef: tu } = (0, G.O7)(),
        [to, ts] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [tc, td] = l.useState(!1),
        [tm, tf] = l.useState(!1),
        [tp, th] = l.useState(0),
        [tx, tv] = l.useState(null),
        tg = l.useCallback((e) => {
            (tv(null), th(e));
        }, []),
        tE = l.useRef(null),
        [tb, tP] = l.useState(!1),
        tS = l.useRef(null),
        [ty, tC] = l.useState(d.h$.LOADING),
        tw = l.useRef(!1),
        tA = l.useRef(null),
        [tR, tN] = l.useState([]),
        [tT, tk] = l.useState(!1),
        tL = l.useRef(!1),
        tM = l.useRef(!1),
        tj = l.useRef(!1),
        tD = l.useRef(!1),
        [tI, tB] = l.useState(!0),
        tF = l.useRef(!0),
        t$ = l.useRef(null),
        tG = l.useRef(null),
        [tH, t_] = l.useState(n || ee),
        [tU, tO] = l.useState(ep),
        [tK, tQ] = l.useState(eh),
        tz = eW || eq,
        [tV, tX] = l.useState(!tz),
        [tY, tW] = l.useState(!1),
        [tq, tZ] = l.useState(!1),
        [tJ, t0] = l.useState(!1),
        t1 = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        t2 = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        t6 = (0, l.useRef)(null),
        t4 = (0, l.useRef)(null),
        t8 = (0, l.useRef)(null),
        t9 = (0, l.useRef)(null),
        t7 = l.useRef(!0),
        [t3, t5] = l.useState(null),
        ne = l.useRef(null),
        nt = (0, D.z5)(tH, ne, eJ, e0),
        nn = l.useCallback(() => t6.current?.currentTime ?? null, []),
        nr = l.useMemo(
            () => ({
                get current() {
                    return (0, $.c)(t6.current);
                },
            }),
            [],
        );
    (0, _.A)({ videoRef: nr, canvasRef: t8, enabled: tH && e6 && !t1, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nl,
            videoStats: ni,
            onCloseStats: na,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                i = null != n && "" !== n,
                a = (0, c.bG)([O.Ay], () => !!i && O.Ay.isVideoStatsEnabled(n)),
                [u, o] = l.useState(null);
            return (
                l.useEffect(() => {
                    if (!a) return;
                    let e = t.current;
                    if (null == e) {
                        i && (0, O.Vh)(n, !1);
                        return;
                    }
                    let l = new K.s(e, r ?? void 0);
                    return (
                        l.startTracking(o, { emitInitial: !0 }),
                        () => {
                            l.destroy();
                        }
                    );
                }, [a, t, n, i, r]),
                l.useEffect(
                    () => () => {
                        i && (0, O.ke)(n);
                    },
                    [n, i],
                ),
                {
                    showStats: a,
                    videoStats: a ? u : null,
                    onCloseStats: l.useCallback(() => {
                        i && (0, O.Vh)(n, !1);
                    }, [n, i]),
                }
            );
        })({ videoRef: t6, src: tt, fileSizeBytes: eD }),
        nu = l.useCallback(
            (e, t) => {
                el?.(e, t);
            },
            [el],
        ),
        { isHlsActive: no, hls: ns } = (function (e, t) {
            let { src: n, initialTimeSec: r = 0, onError: i, onHlsInstance: a, crossOrigin: u = "anonymous" } = t,
                o = l.useRef(null),
                [s, c] = l.useState(null),
                m = l.useRef(r);
            m.current = r;
            let f = l.useRef(i),
                p = l.useRef(a),
                h = l.useRef(u);
            ((h.current = u),
                l.useEffect(() => {
                    f.current = i;
                }, [i]),
                l.useEffect(() => {
                    p.current = a;
                }, [a]));
            let [x, v] = l.useState(!1),
                g = !x && C.u.isHlsUrl(n) && (0, w.Ap)();
            return (
                l.useEffect(() => {
                    if (!g || null == n || null == e.current) return;
                    let t = e.current,
                        r = !1,
                        l = null,
                        i = null;
                    return (
                        (0, w.E)().then((e) => {
                            if (r) return;
                            if (!e.isSupported()) return void v(!0);
                            let a = (l = new e({
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
                            ((o.current = a), c(a), p.current?.(a));
                            let u = 0;
                            ((i = () => {
                                a.mainForwardBufferInfo?.len === 0 &&
                                    a.trigger(e.Events.BUFFER_FLUSHING, {
                                        startOffset: t.currentTime,
                                        endOffset: 1 / 0,
                                        type: "video",
                                    });
                            }),
                                a.on(e.Events.FRAG_LOADING, function () {
                                    8e5 !== a.config.minAutoBitrate && (a.config.minAutoBitrate = 8e5);
                                }),
                                a.on(e.Events.ERROR, function (t, n) {
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
                                        if (u >= 3) {
                                            (a.destroy(), (o.current = null), c(null), p.current?.(null));
                                            return;
                                        }
                                        switch ((u++, n.type)) {
                                            case e.ErrorTypes.NETWORK_ERROR:
                                                a.startLoad();
                                                break;
                                            case e.ErrorTypes.MEDIA_ERROR:
                                                a.recoverMediaError();
                                                break;
                                            default:
                                                (a.destroy(), (o.current = null), p.current?.(null));
                                        }
                                    }
                                }),
                                t.addEventListener("seeking", i),
                                a.loadSource(n),
                                a.attachMedia(t));
                        }),
                        () => {
                            ((r = !0),
                                null != i && t.removeEventListener("seeking", i),
                                null != l &&
                                    (o.current === l && (l.destroy(), (o.current = null), c(null), p.current?.(null)),
                                    t.removeAttribute("src"),
                                    t.load()));
                        }
                    );
                }, [g, n, e]),
                { isHlsActive: g, hlsRef: o, hls: s }
            );
        })(nr, { src: tt, initialTimeSec: et, onError: nu, onHlsInstance: ek, crossOrigin: e2 }),
        { isReady: nc } = (0, A.A)({ videoRef: nr, hls: ns, contentMetadata: e7, isHls: no }),
        nd = e3 && !nc && !no,
        [nm, nf] = l.useState(null),
        [np, nh] = l.useState(0),
        [nx, nv] = l.useState(!1),
        ng = ei ?? t6.current?.duration ?? 0,
        [nE, nb] = l.useState(!1),
        nP = (0, P.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || nb(t < T.$7);
        });
    (0, b.g)(t4, nP, [], { enabled: eU, fireOnMount: eU });
    let { size: nS, config: ny } = l.useMemo(() => (0, T.ZH)(eU && nE ? d.oA.SM : d.oA.MD, eO, tJ), [eU, nE, eO, tJ]),
        nC = ny.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        t7.current && (t7.current = !1);
    });
    let nw = l.useCallback(
        function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (((tD.current = !0), ts(e), ec?.(e, t), null != t6.current))
                switch (e) {
                    case d.Q6.PLAYING:
                        (t5(null), t_(!0), t6.current.play());
                        break;
                    case d.Q6.PAUSED:
                        ((tL.current = !1), t6.current.pause(), (tF.current = !1));
                        break;
                    case d.Q6.ENDED:
                        tW(!1);
                }
        },
        [ec],
    );
    (l.useEffect(() => {
        if (!ez) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && ta && !ti,
            r = tl && !tr;
        if ((e || n || r) && null != t6.current && to === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (t5(t), nw(d.Q6.PAUSED, t));
        }
    }, [ez, t, tr, tl, ti, ta, to, nw]),
        (0, U.A)({
            videoRef: nr,
            enabled: ez,
            onPipPause: () => {
                (t5(d.KB.PICTURE_IN_PICTURE), nw(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (t5(d.KB.FOCUS), nw(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            tl && ey?.(tr, to);
        }, [tr, tl, to, ey]),
        l.useEffect(() => {
            ta && eC?.(ti, to);
        }, [ti, ta, to, eC]));
    let [nA, nR] = l.useState(!1),
        nN = l.useRef(null),
        nT = l.useRef(0);
    l.useLayoutEffect(() => {
        nT.current = performance.now();
    }, []);
    let nk = l.useCallback(() => {
            switch ((null != nN.current && clearTimeout(nN.current), to)) {
                case d.Q6.PLAYING:
                    nN.current = setTimeout(
                        () => {
                            nR(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nT.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [to]),
        nL = l.useCallback(() => {
            (nR(!1), (nT.current = performance.now()), nk());
        }, [nk]);
    (l.useEffect(() => {
        if (to !== d.Q6.PLAYING) {
            (nR(!1), null != nN.current && clearTimeout(nN.current));
            return;
        }
        return (
            nk(),
            () => {
                null != nN.current && clearTimeout(nN.current);
            }
        );
    }, [to, nk]),
        l.useEffect(
            () => () => {
                null != tS.current && clearTimeout(tS.current);
            },
            [],
        ));
    let nM = tm && t2,
        nj = to === d.Q6.ENDED,
        nD = nM || ((tm || tc || nj) && !nA);
    function nI() {
        tf(!0);
    }
    function nB(e) {
        ((0, o.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tf(!1);
    }
    let nF = l.useRef(!1);
    l.useEffect(() => {
        (nF.current && !nM && nL(), (nF.current = nM));
    }, [nM, nL]);
    let n$ = l.useRef(ed);
    n$.current = ed;
    let nG = l.useCallback(() => {
        let e = (0, y.qf)(t4.current);
        null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, nG), t0(!1), n$.current?.(!1));
    }, []);
    function nH() {
        null == t6.current ||
            (nU(Math.max((tA.current ?? t6.current.currentTime) - 10, 0)),
            to === d.Q6.ENDED && nw(d.Q6.PAUSED, d.KB.SEEK));
    }
    function n_() {
        if (null == t6.current) return;
        let e = Math.min((tA.current ?? t6.current.currentTime) + 10, ng);
        (nU(e), to !== d.Q6.ENDED && e >= t6.current.duration && nw(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = t4.current;
        return () => {
            let t = (0, y.qf)(e);
            null != t && t.removeEventListener(y.Wb, nG);
        };
    }, [nG]);
    let nU = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == t6.current) return;
            let n = t6.current.currentTime;
            ((tA.current = e),
                tv((e / (t6.current.duration ?? 1)) * 100),
                tP(!0),
                null != tS.current && clearTimeout(tS.current),
                (tS.current = setTimeout(() => {
                    (tP(!1), (tS.current = null));
                }, 100)),
                (tw.current = !0),
                (t6.current.currentTime = e),
                t && ew?.(n, e));
        },
        [ew],
    );
    function nO() {
        if (null != t6.current)
            switch (to) {
                case d.Q6.ENDED:
                    (nU(0), nw(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (t5(d.KB.USER), nw(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nw(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function nK(e) {
        null != eL ? eL(e) : (t_(!0), nO());
    }
    let nQ = l.useCallback(() => {
        if (null == t6.current || 0 === t6.current.textTracks.length) return;
        let e = t6.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, F.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        nf(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            nf((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function nz(e) {
        if (null != t6.current) {
            if (ty === d.h$.BUFFERING) {
                let e = null != tG.current ? performance.now() - tG.current : null;
                eS?.(e);
            } else if (ty === d.h$.LOADING) {
                let e = null != t$.current ? performance.now() - t$.current : null;
                eE?.(e);
            }
            (tC(d.h$.READY), to === d.Q6.PLAYING && (tL.current || nw(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function nV(e) {
        if ((nU(e), to === d.Q6.ENDED && !tM.current)) {
            let t = t6.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nw(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == t9.current) return;
        let e = t9.current;
        return (
            e.addEventListener("load", nQ),
            () => {
                null != e && e.removeEventListener("load", nQ);
            }
        );
    }, [nQ]);
    let [{ controlBarAnimSpring: nX }, nY] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Y,
            onStart: () => {
                tB(!1);
            },
            onRest: () => {
                tB(!0);
            },
        })),
        nW = (0, l.useRef)(null),
        [{ captionHeightSpring: nq }, nZ] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: Y }));
    (l.useEffect(
        () => (
            nZ({ captionHeightSpring: tq && null != nm ? (nW.current?.clientHeight ?? 0) : 0, immediate: t1 }),
            () => {
                nq.stop();
            }
        ),
        [tq, nZ, t1, nm, nq],
    ),
        l.useEffect(
            () => (
                nY({ controlBarAnimSpring: nD || tT ? 1 : 0, immediate: t1 }),
                () => {
                    nX.stop();
                }
            ),
            [nD, nY, t1, tT, nX],
        ));
    let nJ = to === d.Q6.ENDED && null != eo,
        n0 = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != t6.current && (nU(0), nw(d.Q6.PLAYING, e));
            },
            [nU, nw],
        ),
        n1 = l.useRef(null),
        n2 = l.useCallback(
            (e) => {
                (nL(), n1.current?.(e.nativeEvent));
            },
            [nL],
        );
    l.useImperativeHandle(
        e5,
        () => ({
            play: () => {
                nw(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nw(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                nU(e);
            },
        }),
        [nw, nU],
    );
    let n6 = {
            ref: l.useCallback(
                (e) => {
                    t6.current = e;
                    let t = (0, $.c)(e);
                    ((tu.current = t), "function" == typeof te ? te(t) : null != te && (te.current = t));
                },
                [te, tu],
            ),
            alt: q,
            playsInline: !0,
            mediaLayoutType: tJ ? Q.dG.STATIC : Q.dG.RESPONSIVE,
            className: a()({ [V.R]: nJ, [V.IR]: !0, [V.FP]: "cover" === e4 && !tJ }),
            controls: !1,
            poster: J,
            preload: tH ? eM : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != t6.current &&
                    (en?.(t6.current.currentTime, t6.current.duration),
                    tw.current || tg((t6.current.currentTime / t6.current.duration) * 100));
            },
            onEnded: function (e) {
                (tC(d.h$.READY), er?.(), tM.current || nw(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (ty === d.h$.LOADING) {
                    let e = null != t$.current ? performance.now() - t$.current : null;
                    (eE?.(e), tC(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == t6.current) return;
                et > 0 && !no && nU(et, !1);
                let t = ex?.() ?? tU,
                    n = ev?.() ?? tK;
                (t !== tU && tO(t), n !== tK && tQ(n), (t6.current.volume = n ? 0 : t));
                let r = t6.current.duration;
                (r > 0 && isFinite(r) && nh(r), nv(!0));
            },
            onLoadStart: function () {
                ((t$.current = performance.now()), eg?.());
            },
            onPlaying: function () {
                tF.current && (eb?.(performance.now()), (tF.current = !1));
            },
            onWaiting: function (e) {
                ((tG.current = performance.now()), eP?.(), tC(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == t6.current) return;
                let t = [];
                for (let e = 0; e < t6.current.buffered.length; e++) {
                    let n = t6.current.buffered.start(e),
                        r = t6.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / t6.current.duration, size: (r - n) / t6.current.duration });
                }
                tN(t);
            },
            onCanPlay: nz,
            onCanPlayThrough: nz,
            onSeeked: function () {
                ((tw.current = !1),
                    (tA.current = null),
                    null != t6.current && tg((t6.current.currentTime / t6.current.duration) * 100));
            },
            onAbort: function () {
                return nu(d.SB.ABORT);
            },
            onError: function () {
                return nu(d.SB.ERROR);
            },
            onEmptied: function () {
                return nu(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nu(d.SB.STALLED);
            },
            onClick: nK,
            crossOrigin: e2 ?? void 0,
            src: no || nd ? null : (tt ?? null),
            onSourceError: function () {
                return nu(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tT,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != ea &&
                        (0, r.jsx)("track", {
                            ref: t9,
                            src: ea,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != eJ && (0, r.jsx)("track", { ref: ne, src: eJ, kind: "metadata" }),
                ],
            }),
        },
        n4 = (0, r.jsx)(M, {
            children: (0, r.jsx)(R.pT, {
                activeLayer: tJ ? j : void 0,
                isFullscreen: tJ,
                videoRef: t6,
                isActive: tH,
                controlBarConfig: ny,
                isControlBarExpanded: nD,
                children: (0, r.jsx)(p.D, {
                    className: a()(V.W6, { [V.nZ]: !tH }),
                    style: { minWidth: e8, minHeight: e9 },
                    "data-fullscreen": tJ,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tH ? -1 : 0,
                    focusProps: tH ? void 0 : { ringTarget: tE },
                    onMouseEnter: function () {
                        (td(!0),
                            nR(!1),
                            (nT.current = performance.now()),
                            null != nN.current && clearTimeout(nN.current));
                    },
                    onMouseLeave: function () {
                        (td(!1), nR(!1));
                    },
                    "aria-label": tH ? void 0 : z.intl.string(z.t.RscU7I),
                    onClick: tH ? void 0 : nK,
                    onMouseMove: nL,
                    children: (0, r.jsxs)("div", {
                        ref: t4,
                        className: a()(V.NS, { [V.DO]: "portrait" === i, [V.r7]: "landscape" === i }),
                        tabIndex: -1,
                        onKeyDown: n2,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${ny.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${ny.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${ny.scrimHeightPx}px`,
                            "--custom-controls-gap": `${ny.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${ny.midGroupGapPx}px`,
                            "--custom-duration-margin": `${ny.durationMarginPx}px`,
                            "--custom-playhead-size": `${ny.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${ny.timelineHitboxOffsetPx}px`,
                            "--custom-volume-slider-margin-start": `${ny.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${ny.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${ny.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": ny.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != ny.trailingGroupWidthPx ? `${ny.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tH && e6 && !t1 && (0, r.jsx)("canvas", { ref: t8, className: V.Xm }),
                            nJ && eo?.({ replay: n0 }),
                            es(n6),
                            ty !== d.h$.READY &&
                                to === d.Q6.PLAYING &&
                                null != tt &&
                                (0, r.jsx)("span", {
                                    className: a()(V.S, { [V.F]: "center" === e1 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(H.A, {
                                message: tn({ hasVideoAsset: null != tt, playerState: to, pauseReason: t3 }),
                                showOverlay: null == tt,
                            }),
                            nl &&
                                null != ni &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(X, { stats: ni, onClose: na }),
                                }),
                            null != eR &&
                                (0, r.jsx)(u.animated.div, {
                                    className: V.MU,
                                    style: {
                                        opacity: (0, u.to)([nX.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([nX.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([nX.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eR(),
                                }),
                            tH &&
                                null != eF &&
                                (0, r.jsx)("div", {
                                    className: V.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: nI,
                                    onBlur: nB,
                                    children: eF({ visible: nD, animSpring: nX, size: nS }),
                                }),
                            tY &&
                                to !== d.Q6.ENDED &&
                                null != eu &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (to === d.Q6.PAUSED && nw(d.Q6.PLAYING, d.KB.USER), tW(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: V.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: a()(V.xr, eT, { [V.MZ]: "portrait" === i }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [nX, nq],
                                                    (e, t) => `${e * ny.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.X, {
                                                text: eu,
                                                onClose: function () {
                                                    tW(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tH &&
                                (0, r.jsx)(u.animated.div, {
                                    className: V.Jp,
                                    style: {
                                        opacity: (0, u.to)([nX.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: a()(V.yf, {
                                        [V.ZH]: tD.current && to === d.Q6.PLAYING,
                                        [V.v7]: tD.current && to === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        to === d.Q6.PLAYING
                                            ? (0, r.jsx)(x.PlayIcon, { className: V.PK })
                                            : (0, r.jsx)(v.PauseIcon, { className: V.PK }),
                                },
                                to,
                            ),
                            tq &&
                                null != nm &&
                                !nJ &&
                                (0, r.jsx)(u.animated.div, {
                                    className: V.o$,
                                    ref: nW,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nX.to({ range: [0, 1], output: [-nC, -ny.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: V.qh,
                                        children: nm.text,
                                    }),
                                }),
                            tH &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: V.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [nX.to({ range: [0, 1], output: [0, ny.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: nI,
                                    onBlur: nB,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [nX.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * nC}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nD || tT || eV ? void 0 : W,
                                                children: (0, r.jsx)(I.Ay, {
                                                    percent: null != tx ? tx : tp,
                                                    animate:
                                                        !0 !== t7.current &&
                                                        !tb &&
                                                        to === d.Q6.PLAYING &&
                                                        nx &&
                                                        ty === d.h$.READY,
                                                    interactionEnabled: tI && ng > 0,
                                                    backgroundColor: nD || eV ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: to,
                                                    preloadedBuffers: nD ? tR : void 0,
                                                    durationSec: np > 0 ? np : +!nx,
                                                    isFullyVisible: nD && tI,
                                                    maxSeekableTime: null != ei && ng > 0 ? ng : void 0,
                                                    progressClassName: eQ,
                                                    persistPlayhead: eX,
                                                    onClick: nV,
                                                    onScrubBack: nH,
                                                    onScrubForward: n_,
                                                    onDragStateChange: function (e) {
                                                        if (((tM.current = e), eA?.(e), tk(e), e))
                                                            ((tL.current = to === d.Q6.PLAYING),
                                                                (tj.current = to === d.Q6.ENDED),
                                                                tL.current
                                                                    ? t6.current?.pause()
                                                                    : tj.current && nw(d.Q6.PAUSED, d.KB.SEEK));
                                                        else {
                                                            let e = t6.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tL.current
                                                                ? ((tL.current = !1),
                                                                  t
                                                                      ? nw(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tj.current
                                                                  ? ((tj.current = !1),
                                                                    t
                                                                        ? nw(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                        : nw(d.Q6.PLAYING, d.KB.USER))
                                                                  : t && nw(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eZ,
                                                    scrubPreviewCues: nt,
                                                    onIndicatorSeek: nV,
                                                    getCurrentTimeSec: nn,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: V.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [nX.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nC}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [nX.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nC}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [nX.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(N.A, {
                                                playerState: to,
                                                animSpring: nX,
                                                visible: nD,
                                                seekForwardEnabled:
                                                    null == ei || (t6.current?.currentTime ?? 0) + 1 < ng,
                                                hideCaptionBtn: null == ea,
                                                hideTranscriptBtn: null == eu,
                                                hideFullScreenBtn: e$,
                                                hidePlaybackSpeedBtn: e_,
                                                hideSkipButtons: eG ?? "portrait" === i,
                                                compactTimeDisplay: eH,
                                                size: nS,
                                                downloadUrl: ej,
                                                downloadContentType: eI,
                                                extraButtons: eB,
                                                autoFocus: eY,
                                                keyDownHandlerRef: n1,
                                                volume: tU,
                                                muted: tK,
                                                transcriptEnabled: tY,
                                                captionEnabled: tq,
                                                handlePlaybackBtnClick: nO,
                                                handleTranscriptBtnClick: function () {
                                                    tW(!tY);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    tZ(!tq);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tJ,
                                                        t = (0, y.qf)(t4.current);
                                                    (e && null != t
                                                        ? ((0, y.tl)(t), t.addEventListener(y.Wb, nG), ed?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(y.Wb, nG), ed?.(!1), (0, y.sP)(t)),
                                                        t0(e));
                                                },
                                                handleSeekBackBtnClick: nH,
                                                handleSeekForwardBtnClick: n_,
                                                autoHideVolumeSlider: tz,
                                                floatingVolumeSlider: eq,
                                                handleControlBarPendingInteraction: tk,
                                                onVolumeChange: function (e) {
                                                    (tO(e), em?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (tQ(e), ef?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tX(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eN &&
                                (0, r.jsx)("div", {
                                    className: V.MU,
                                    children: eN({
                                        playerState: to,
                                        isControlBarExpanded: nD,
                                        controlBarAnimationSpring: nX,
                                        videoRef: t6,
                                        isActive: tH,
                                        isVolumeExpanded: tV,
                                    }),
                                }),
                            !tH &&
                                (0, r.jsx)("div", {
                                    className: V.mF,
                                    ref: tE,
                                    children: (0, r.jsx)(x.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: V.z_,
                                    }),
                                }),
                            (0, r.jsx)(L, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(s.Jh, { enabled: tJ, children: n4 });
}
