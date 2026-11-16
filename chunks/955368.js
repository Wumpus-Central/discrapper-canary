(n.r(t),
    n.d(t, {
        ATTACHMENT_CONTROL_BAR_CONFIG: () => L.Xq,
        COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => 400,
        default: () => Z,
    }),
    n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(120692),
    o = n(621466),
    s = n(337836),
    c = n(855986),
    d = n(876230),
    m = n(231723),
    f = n(717421),
    p = n(939249),
    h = n(289873),
    v = n(782134),
    x = n(113494),
    g = n(834730),
    E = n(964486),
    b = n(770178),
    y = n(765548),
    S = n(775602),
    C = n(475815),
    w = n(614269),
    P = n(53200),
    N = n(23590),
    A = n(683574),
    R = n(40705),
    L = n(530567);
let { Layer: k, LayerContainer: T, LayerProvider: M, layerContext: j } = (0, n(365912).Ay)("DiscordVideoPlayer");
var D = n(565164),
    I = n(636537),
    B = n(894413),
    F = n(408121),
    $ = n(984212),
    U = n(246047),
    _ = n(739416),
    K = n(931853),
    O = n(90721),
    Q = n(920228),
    G = n(953584),
    H = n(338659),
    X = n(838541),
    V = n(792996),
    Y = n(862649);
let z = l.lazy(() =>
        Promise.all([n.e(999272), n.e(783988), n.e(919307)])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    W = { tension: 250, friction: 5, clamp: !0 };
function Z(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: a = "landscape",
            videoUrlOverride: k,
            alt: Z,
            src: q,
            poster: J,
            initialActive: ee = !0,
            preloadOnHover: et = !1,
            initialTimeSec: en = 0,
            onProgressUpdate: er,
            onEnded: el,
            onError: ea,
            maxSeekableTimeSec: ei,
            captionTrackUrl: eu,
            transcriptText: eo,
            renderEndScreen: es,
            renderVideo: ec = U.v,
            onPlayerStateChange: ed,
            onFullscreenChange: em,
            onVolumeChange: ef,
            onMutedChange: ep,
            initialVolume: eh = 0.3,
            initialMuted: ev = !1,
            getInitialVolume: ex,
            getInitialMuted: eg,
            onLoadStart: eE,
            onLoadEnd: eb,
            onFirstFrame: ey,
            onBufferingStart: eS,
            onBufferingEnd: eC,
            onFocusChange: ew,
            onVisibilityChange: eP,
            onSeek: eN,
            onTimelineDragStateChange: eA,
            renderOverlay: eR,
            renderPersistentOverlay: eL,
            transcriptClassName: ek,
            onHlsInstance: eT,
            onClick: eM,
            preload: ej,
            downloadUrl: eD,
            fileSizeBytes: eI,
            downloadContentType: eB,
            extraButtons: eF,
            expandButton: e$,
            renderTopStartOverlay: eU,
            hideFullScreenBtn: e_ = !1,
            hideSkipButtons: eK,
            compactTimeDisplay: eO = !1,
            autoCompactTimeDisplay: eQ = !1,
            hidePlaybackSpeedBtn: eG = !1,
            autoSizeControlBar: eH = !1,
            autoFitControls: eX = !1,
            controlBarConfig: eV,
            getPlaybackBlockedMessage: eY,
            progressClassName: ez,
            pauseOnLostVisibility: eW = !1,
            persistTimeline: eZ = !1,
            persistPlayhead: eq = !0,
            autoFocus: eJ = !1,
            autoHideVolumeSlider: e0 = !1,
            floatingVolumeSlider: e1 = !1,
            timelineIndicatorConfig: e2,
            scrubPreviewVttUrl: e6,
            scrubPreviewImageUrl: e4,
            loadingSpinnerPosition: e8 = "top-left",
            crossOrigin: e9 = "anonymous",
            withVideoHalo: e3 = !1,
            objectFit: e7 = "contain",
            minWidth: e5 = 240,
            minHeight: te = 180,
            muxContentMetadata: tt,
            awaitMuxReady: tn = !1,
            playerRef: tr,
            ref: tl,
        } = e,
        ta = k ?? q,
        ti = eY ?? K.u,
        { focused: tu, focusedChanged: to } = (0, _.A7)(),
        { visible: ts, visibleChanged: tc, targetRef: td } = (0, _.O7)(),
        [tm, tf] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [tp, th] = l.useState(!1),
        [tv, tx] = l.useState(!1),
        [tg, tE] = l.useState(!1),
        [tb, ty] = l.useState(0),
        [tS, tC] = l.useState(null),
        tw = l.useCallback((e) => {
            (tC(null), ty(e));
        }, []),
        tP = l.useRef(null),
        [tN, tA] = l.useState(!1),
        tR = l.useRef(null),
        [tL, tk] = l.useState(d.h$.LOADING),
        tT = l.useRef(!1),
        tM = l.useRef(null),
        [tj, tD] = l.useState([]),
        [tI, tB] = l.useState(!1),
        tF = l.useRef(!1),
        t$ = l.useRef(!1),
        tU = l.useRef(!1),
        t_ = l.useRef(!1),
        [tK, tO] = l.useState(!0),
        tQ = l.useRef(!0),
        tG = l.useRef(null),
        tH = l.useRef(null),
        [tX, tV] = l.useState(n || ee),
        [tY, tz] = l.useState(eh),
        [tW, tZ] = l.useState(ev),
        [tq, tJ] = l.useState(!1),
        [t0, t1] = l.useState(!1),
        [t2, t6] = l.useState(!1),
        t4 = eX && t0 && !tq,
        t8 = eX && t2 && !tq,
        t9 = e1 || t4,
        t3 = e0 || t9,
        [t7, t5] = l.useState(!t3),
        [ne, nt] = l.useState(!1),
        [nn, nr] = l.useState(!1),
        nl = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        na = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        ni = (0, l.useRef)(null),
        nu = (0, l.useRef)(null),
        no = (0, l.useRef)(null),
        ns = (0, l.useRef)(null),
        nc = l.useRef(!0),
        [nd, nm] = l.useState(null),
        nf = l.useRef(null),
        np = (0, D.z5)(tX, nf, e6, e4),
        nh = l.useCallback(() => ni.current?.currentTime ?? null, []),
        nv = l.useMemo(
            () => ({
                get current() {
                    return (0, U.c)(ni.current);
                },
            }),
            [],
        );
    (0, O.A)({ videoRef: nv, canvasRef: no, enabled: tX && e3 && !nl, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nx,
            videoStats: ng,
            onCloseStats: nE,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                a = null != n && "" !== n,
                i = (0, c.bG)([G.Ay], () => !!a && G.Ay.isVideoStatsEnabled(n)),
                [u, o] = l.useState(null);
            return (
                l.useEffect(() => {
                    if (!i) return;
                    let e = t.current;
                    if (null == e) {
                        a && (0, G.Vh)(n, !1);
                        return;
                    }
                    let l = new H.s(e, r ?? void 0);
                    return (
                        l.startTracking(o, { emitInitial: !0 }),
                        () => {
                            l.destroy();
                        }
                    );
                }, [i, t, n, a, r]),
                l.useEffect(
                    () => () => {
                        a && (0, G.ke)(n);
                    },
                    [n, a],
                ),
                {
                    showStats: i,
                    videoStats: i ? u : null,
                    onCloseStats: l.useCallback(() => {
                        a && (0, G.Vh)(n, !1);
                    }, [n, a]),
                }
            );
        })({ videoRef: ni, src: ta, fileSizeBytes: eI }),
        nb = l.useCallback(
            (e, t) => {
                ea?.(e, t);
            },
            [ea],
        ),
        { isHlsActive: ny, hls: nS } = (function (e, t) {
            let { src: n, initialTimeSec: r = 0, onError: a, onHlsInstance: i, crossOrigin: u = "anonymous" } = t,
                o = l.useRef(null),
                [s, c] = l.useState(null),
                m = l.useRef(r);
            m.current = r;
            let f = l.useRef(a),
                p = l.useRef(i),
                h = l.useRef(u);
            ((h.current = u),
                l.useEffect(() => {
                    f.current = a;
                }, [a]),
                l.useEffect(() => {
                    p.current = i;
                }, [i]));
            let [v, x] = l.useState(!1),
                g = !v && w.u.isHlsUrl(n) && (0, P.Ap)();
            return (
                l.useEffect(() => {
                    if (!g || null == n || null == e.current) return;
                    let t = e.current,
                        r = !1,
                        l = null,
                        a = null;
                    return (
                        (0, P.E)().then((e) => {
                            if (r) return;
                            if (!e.isSupported()) return void x(!0);
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
                            ((o.current = i), c(i), p.current?.(i));
                            let u = 0;
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
                                        if (u >= 3) {
                                            (i.destroy(), (o.current = null), c(null), p.current?.(null));
                                            return;
                                        }
                                        switch ((u++, n.type)) {
                                            case e.ErrorTypes.NETWORK_ERROR:
                                                i.startLoad();
                                                break;
                                            case e.ErrorTypes.MEDIA_ERROR:
                                                i.recoverMediaError();
                                                break;
                                            default:
                                                (i.destroy(), (o.current = null), p.current?.(null));
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
                                    (o.current === l && (l.destroy(), (o.current = null), c(null), p.current?.(null)),
                                    t.removeAttribute("src"),
                                    t.load()));
                        }
                    );
                }, [g, n, e]),
                { isHlsActive: g, hlsRef: o, hls: s }
            );
        })(nv, { src: ta, initialTimeSec: en, onError: nb, onHlsInstance: eT, crossOrigin: e9 }),
        { isReady: nC } = (0, N.A)({ videoRef: nv, hls: nS, contentMetadata: tt, isHls: ny }),
        nw = tn && !nC && !ny,
        [nP, nN] = l.useState(null),
        [nA, nR] = l.useState(0),
        [nL, nk] = l.useState(0),
        [nT, nM] = l.useState(!1),
        nj = ei ?? ni.current?.duration ?? 0,
        nD = l.useRef(null),
        [nI, nB] = l.useState(!1),
        nF = (eH || eX) && t0 ? d.oA.SM : d.oA.MD,
        { size: n$, config: nU } = l.useMemo(() => (0, L.ZH)(nF, eV, tq), [nF, eV, tq]),
        n_ = (eK ?? "portrait" === a) || t8,
        nK = t8 ? void 0 : e$,
        nO = !1 !== eG ? eG : !!t8 && "inline",
        nQ = l.useMemo(
            () =>
                eQ
                    ? (0, L.Dq)(
                          (0, L.ZH)(nF, eV).config,
                          {
                              showSkipButtons: !n_,
                              showInlineVolumeSlider: !t9,
                              trailingButtonCount:
                                  (0, L.eD)({
                                      hideTranscriptBtn: null == eo,
                                      hideCaptionBtn: null == eu,
                                      hasDownloadBtn: null != eD,
                                      extraButtonCount: eF?.length ?? 0,
                                  }) + +(null != nK),
                              showPlaybackSpeedBtn: !1 === nO,
                              showFullScreenBtn: !e_,
                          },
                          nL,
                      )
                    : null,
            [eQ, nF, eV, n_, t9, eo, eu, eD, eF, nK, nO, e_, nL],
        ),
        nG = (0, y.A)(() => {
            let e = nD.current;
            nB(null != e && null != nQ && e < nQ);
        });
    l.useLayoutEffect(nG, [nQ, nG]);
    let nH = (0, y.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || ((nD.current = t), t1(t < 400), eX && t6(t < 240), nG());
        }),
        nX = eH || eQ || eX;
    (0, b.g)(nu, nH, [], { enabled: nX, fireOnMount: nX });
    let nV = nU.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        nc.current && (nc.current = !1);
    });
    let nY = (0, y.A)(() => {
            if (null == ni.current) return;
            let e = ex?.() ?? tY,
                t = eg?.() ?? tW;
            (e !== tY && tz(e), t !== tW && tZ(t), (ni.current.volume = t ? 0 : e));
        }),
        nz = (0, y.A)(() => {
            (tX || nY(), tV(!0));
        }),
        nW = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((t_.current = !0), tf(e), ed?.(e, t), null != ni.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            (nm(null), nz(), ni.current.play());
                            break;
                        case d.Q6.PAUSED:
                            ((tF.current = !1), ni.current.pause(), (tQ.current = !1));
                            break;
                        case d.Q6.ENDED:
                            nt(!1);
                    }
            },
            [ed, nz],
        );
    (l.useEffect(() => {
        if (!eW) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && tc && !ts,
            r = to && !tu;
        if ((e || n || r) && null != ni.current && tm === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (nm(t), nW(d.Q6.PAUSED, t));
        }
    }, [eW, t, tu, to, ts, tc, tm, nW]),
        (0, Q.A)({
            videoRef: nv,
            enabled: eW,
            onPipPause: () => {
                (nm(d.KB.PICTURE_IN_PICTURE), nW(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (nm(d.KB.FOCUS), nW(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            to && ew?.(tu, tm);
        }, [tu, to, tm, ew]),
        l.useEffect(() => {
            tc && eP?.(ts, tm);
        }, [ts, tc, tm, eP]));
    let [nZ, nq] = l.useState(!1),
        nJ = l.useRef(null),
        n0 = l.useRef(0);
    l.useLayoutEffect(() => {
        n0.current = performance.now();
    }, []);
    let n1 = l.useCallback(() => {
            switch ((null != nJ.current && clearTimeout(nJ.current), tm)) {
                case d.Q6.PLAYING:
                    nJ.current = setTimeout(
                        () => {
                            nq(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - n0.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [tm]),
        n2 = l.useCallback(() => {
            (nq(!1), (n0.current = performance.now()), n1());
        }, [n1]);
    function n6() {
        (tp || th(!0), n2());
    }
    (l.useEffect(() => {
        if (tm !== d.Q6.PLAYING) {
            (nq(!1), null != nJ.current && clearTimeout(nJ.current));
            return;
        }
        return (
            n1(),
            () => {
                null != nJ.current && clearTimeout(nJ.current);
            }
        );
    }, [tm, n1]),
        l.useEffect(
            () => () => {
                null != tR.current && clearTimeout(tR.current);
            },
            [],
        ));
    let n4 = tg && na,
        n8 = tm === d.Q6.ENDED,
        n9 = n4 || ((tg || tp || n8) && !nZ);
    function n3() {
        tE(!0);
    }
    function n7(e) {
        ((0, o.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tE(!1);
    }
    let n5 = l.useRef(!1);
    l.useEffect(() => {
        (n5.current && !n4 && n2(), (n5.current = n4));
    }, [n4, n2]);
    let re = l.useRef(em);
    re.current = em;
    let rt = l.useCallback(() => {
        let e = (0, C.qf)(nu.current);
        null == e || (0, C._U)(e) || (e.removeEventListener(C.Wb, rt), tJ(!1), re.current?.(!1));
    }, []);
    function rn() {
        null == ni.current ||
            (rl(Math.max((tM.current ?? ni.current.currentTime) - 10, 0)),
            tm === d.Q6.ENDED && nW(d.Q6.PAUSED, d.KB.SEEK));
    }
    function rr() {
        if (null == ni.current) return;
        let e = Math.min((tM.current ?? ni.current.currentTime) + 10, nj);
        (rl(e), tm !== d.Q6.ENDED && e >= ni.current.duration && nW(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = nu.current;
        return () => {
            let t = (0, C.qf)(e);
            null != t && t.removeEventListener(C.Wb, rt);
        };
    }, [rt]);
    let rl = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == ni.current) return;
            let n = ni.current.currentTime;
            ((tM.current = e),
                tC((e / (ni.current.duration ?? 1)) * 100),
                tA(!0),
                null != tR.current && clearTimeout(tR.current),
                (tR.current = setTimeout(() => {
                    (tA(!1), (tR.current = null));
                }, 100)),
                (tT.current = !0),
                (ni.current.currentTime = e),
                t && eN?.(n, e));
        },
        [eN],
    );
    function ra() {
        if (null != ni.current)
            switch (tm) {
                case d.Q6.ENDED:
                    (rl(0), nW(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nm(d.KB.USER), nW(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nW(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function ri(e) {
        null != eM ? eM(e) : (tV(!0), ra());
    }
    let ru = (0, y.A)(() => {
        let e = ni.current?.duration;
        null != e && e > 0 && isFinite(e) && nk(e);
    });
    l.useEffect(() => {
        let e = ni.current;
        if (null != e && eQ)
            return (e.addEventListener("durationchange", ru), () => e.removeEventListener("durationchange", ru));
    }, [eQ, ru]);
    let ro = l.useCallback(() => {
        if (null == ni.current || 0 === ni.current.textTracks.length) return;
        let e = ni.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, $.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        nN(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            nN((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function rs(e) {
        if (null != ni.current) {
            if (tL === d.h$.BUFFERING) {
                let e = null != tH.current ? performance.now() - tH.current : null;
                eC?.(e);
            } else if (tL === d.h$.LOADING) {
                let e = null != tG.current ? performance.now() - tG.current : null;
                eb?.(e);
            }
            (tk(d.h$.READY), tm === d.Q6.PLAYING && (tF.current || nW(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function rc(e) {
        if ((rl(e), tm === d.Q6.ENDED && !t$.current)) {
            let t = ni.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nW(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == ns.current) return;
        let e = ns.current;
        return (
            e.addEventListener("load", ro),
            () => {
                null != e && e.removeEventListener("load", ro);
            }
        );
    }, [ro]);
    let [{ controlBarAnimSpring: rd }, rm] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                tO(!1);
            },
            onRest: () => {
                tO(!0);
            },
            onChange: {
                controlBarAnimSpring: (e) => {
                    1 === e && tO(!0);
                },
            },
        })),
        rf = (0, l.useRef)(null),
        [{ captionHeightSpring: rp }, rh] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: W }));
    (l.useEffect(
        () => (
            rh({
                captionHeightSpring: nn && null != nP ? (rf.current?.clientHeight ?? 0) : 0,
                default: { immediate: nl },
            }),
            () => {
                rp.stop();
            }
        ),
        [nn, rh, nl, nP, rp],
    ),
        l.useEffect(
            () => (
                rm({ controlBarAnimSpring: n9 || tI ? 1 : 0, default: { immediate: nl } }),
                () => {
                    rd.stop();
                }
            ),
            [n9, rm, nl, tI, rd],
        ));
    let rv = tm === d.Q6.ENDED && null != es,
        rx = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != ni.current && (rl(0), nW(d.Q6.PLAYING, e));
            },
            [rl, nW],
        ),
        rg = l.useRef(null),
        rE = l.useCallback(
            (e) => {
                (n2(), rg.current?.(e.nativeEvent));
            },
            [n2],
        );
    l.useImperativeHandle(
        tr,
        () => ({
            play: () => {
                nW(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nW(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                rl(e);
            },
        }),
        [nW, rl],
    );
    let rb = {
            ref: l.useCallback(
                (e) => {
                    ni.current = e;
                    let t = (0, U.c)(e);
                    ((td.current = t), "function" == typeof tl ? tl(t) : null != tl && (tl.current = t));
                },
                [tl, td],
            ),
            alt: Z,
            playsInline: !0,
            mediaLayoutType: tq ? X.d.STATIC : X.d.RESPONSIVE,
            className: i()({ [Y.R]: rv, [Y.IR]: !0, [Y.FP]: "cover" === e7 && !tq }),
            controls: !1,
            poster: J,
            preload: tX ? ej : tv ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != ni.current &&
                    (er?.(ni.current.currentTime, ni.current.duration),
                    tT.current || tw((ni.current.currentTime / ni.current.duration) * 100));
            },
            onEnded: function (e) {
                (tk(d.h$.READY), el?.(), t$.current || nW(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tL === d.h$.LOADING) {
                    let e = null != tG.current ? performance.now() - tG.current : null;
                    (eb?.(e), tk(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == ni.current) return;
                (en > 0 && !ny && rl(en, !1), nY());
                let t = ni.current.duration;
                (t > 0 && isFinite(t) && nR(t), ru(), nM(!0));
            },
            onLoadStart: function () {
                ((tG.current = performance.now()), eE?.());
            },
            onPlaying: function () {
                tQ.current && (ey?.(performance.now()), (tQ.current = !1));
            },
            onWaiting: function (e) {
                ((tH.current = performance.now()), eS?.(), tk(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == ni.current) return;
                let t = [];
                for (let e = 0; e < ni.current.buffered.length; e++) {
                    let n = ni.current.buffered.start(e),
                        r = ni.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / ni.current.duration, size: (r - n) / ni.current.duration });
                }
                tD(t);
            },
            onCanPlay: rs,
            onCanPlayThrough: rs,
            onSeeked: function () {
                ((tT.current = !1),
                    (tM.current = null),
                    null != ni.current && tw((ni.current.currentTime / ni.current.duration) * 100));
            },
            onAbort: function () {
                return nb(d.SB.ABORT);
            },
            onError: function () {
                return nb(d.SB.ERROR);
            },
            onEmptied: function () {
                return nb(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nb(d.SB.STALLED);
            },
            onClick: ri,
            crossOrigin: e9 ?? void 0,
            src: ny || nw ? null : (ta ?? null),
            onSourceError: function () {
                return nb(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tI,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != eu &&
                        (0, r.jsx)("track", {
                            ref: ns,
                            src: eu,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != e6 && (0, r.jsx)("track", { ref: nf, src: e6, kind: "metadata" }),
                ],
            }),
        },
        ry = (0, r.jsx)(M, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: tq ? j : void 0,
                isFullscreen: tq,
                videoRef: ni,
                isActive: tX,
                controlBarConfig: nU,
                isControlBarExpanded: n9,
                children: (0, r.jsx)(p.D, {
                    className: i()(Y.W6, I.i.blurple, { [Y.nZ]: !tX }),
                    style: { minWidth: e5, minHeight: te },
                    "data-fullscreen": tq,
                    "data-dvp-controls-visible": n9 || tI,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tX ? -1 : 0,
                    focusProps: tX ? void 0 : { ringTarget: tP },
                    onMouseEnter: function () {
                        (th(!0),
                            nq(!1),
                            et && tx(!0),
                            (n0.current = performance.now()),
                            null != nJ.current && clearTimeout(nJ.current));
                    },
                    onMouseLeave: function () {
                        (th(!1), nq(!1));
                    },
                    "aria-label": tX ? void 0 : V.intl.string(V.t.RscU7I),
                    onClick: tX ? void 0 : ri,
                    onKeyDown: function (e) {
                        e.key !== d.TJ.SPACE ||
                            (e.target !== e.currentTarget && e.target !== nu.current) ||
                            (e.preventDefault(), tX || e.repeat || (n2(), tV(!0), ra()));
                    },
                    onPointerDown: n6,
                    onMouseMove: n6,
                    children: (0, r.jsxs)("div", {
                        ref: nu,
                        className: i()(Y.NS, { [Y.DO]: "portrait" === a, [Y.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: rE,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nU.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${nU.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${nU.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nU.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${nU.midGroupGapPx}px`,
                            "--custom-duration-margin": `${nU.durationMarginPx}px`,
                            "--custom-playhead-size": `${nU.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${nU.timelineHitboxOffsetPx}px`,
                            "--custom-dvp-timeline-row-gap": n$ === d.oA.LG ? "var(--space-6)" : "var(--space-4)",
                            "--custom-volume-slider-margin-start": `${nU.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${nU.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${nU.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": nU.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != nU.trailingGroupWidthPx ? `${nU.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tX && e3 && !nl && (0, r.jsx)("canvas", { ref: no, className: Y.Xm }),
                            rv && es?.({ replay: rx }),
                            ec(rb),
                            tL !== d.h$.READY &&
                                tm === d.Q6.PLAYING &&
                                null != ta &&
                                (0, r.jsx)("span", {
                                    className: i()(Y.S, { [Y.F]: "center" === e8 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(K.A, {
                                message: ti({ hasVideoAsset: null != ta, playerState: tm, pauseReason: nd }),
                                showOverlay: null == ta,
                            }),
                            nx &&
                                null != ng &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(z, { stats: ng, onClose: nE }),
                                }),
                            null != eR &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.MU,
                                    style: {
                                        opacity: (0, u.to)([rd.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([rd.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([rd.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eR(),
                                }),
                            tX &&
                                null != eU &&
                                (0, r.jsx)("div", {
                                    className: Y.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: n3,
                                    onBlur: n7,
                                    children: eU({ visible: n9, animSpring: rd, size: n$ }),
                                }),
                            ne &&
                                tm !== d.Q6.ENDED &&
                                null != eo &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (tm === d.Q6.PAUSED && nW(d.Q6.PLAYING, d.KB.USER), nt(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: Y.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()(Y.xr, ek, { [Y.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [rd, rp],
                                                    (e, t) => `${e * nU.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(F.X, {
                                                text: eo,
                                                onClose: function () {
                                                    nt(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tX &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.Jp,
                                    style: {
                                        opacity: (0, u.to)([rd.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(Y.yf, {
                                        [Y.ZH]: t_.current && tm === d.Q6.PLAYING,
                                        [Y.v7]: t_.current && tm === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tm === d.Q6.PLAYING
                                            ? (0, r.jsx)(v.PlayIcon, { className: Y.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: Y.PK }),
                                },
                                tm,
                            ),
                            nn &&
                                null != nP &&
                                !rv &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.o$,
                                    ref: rf,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [rd.to({ range: [0, 1], output: [-nV, -nU.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-lg/semibold",
                                        color: "text-overlay-light",
                                        className: Y.qh,
                                        children: nP.text,
                                    }),
                                }),
                            tX &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: Y.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [rd.to({ range: [0, 1], output: [0, nU.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: n3,
                                    onBlur: n7,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            className: Y.oB,
                                            style: {
                                                opacity: (0, u.to)([rd], (e) => `${eZ ? 1 : e}`),
                                                visibility:
                                                    eZ || n9 || tI
                                                        ? void 0
                                                        : rd.to((e) => (0 === e ? "hidden" : "visible")),
                                                transform: (0, u.to)(
                                                    [rd.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * nV}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.Ay, {
                                                percent: null != tS ? tS : tb,
                                                animate:
                                                    !0 !== nc.current &&
                                                    !tN &&
                                                    tm === d.Q6.PLAYING &&
                                                    nT &&
                                                    tL === d.h$.READY,
                                                interactionEnabled: tK && nj > 0,
                                                backgroundColor: n9 || eZ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: tm,
                                                preloadedBuffers: n9 ? tj : void 0,
                                                durationSec: nA > 0 ? nA : +!nT,
                                                isFullyVisible: n9 && tK,
                                                maxSeekableTime: null != ei && nj > 0 ? nj : void 0,
                                                progressClassName: ez,
                                                persistPlayhead: eq,
                                                onClick: rc,
                                                onScrubBack: rn,
                                                onScrubForward: rr,
                                                onDragStateChange: function (e) {
                                                    if (((t$.current = e), eA?.(e), tB(e), e))
                                                        ((tF.current = tm === d.Q6.PLAYING),
                                                            (tU.current = tm === d.Q6.ENDED),
                                                            tF.current
                                                                ? ni.current?.pause()
                                                                : tU.current && nW(d.Q6.PAUSED, d.KB.SEEK));
                                                    else {
                                                        let e = ni.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tF.current
                                                            ? ((tF.current = !1),
                                                              t ? nW(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : tU.current
                                                              ? ((tU.current = !1),
                                                                t
                                                                    ? nW(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : nW(d.Q6.PLAYING, d.KB.USER))
                                                              : t && nW(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: e2,
                                                scrubPreviewCues: np,
                                                onIndicatorSeek: rc,
                                                getCurrentTimeSec: nh,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: Y.EG,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [rd.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nV}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [rd.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nV}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [rd.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: tm,
                                                animSpring: rd,
                                                visible: n9,
                                                seekForwardEnabled:
                                                    null == ei || (ni.current?.currentTime ?? 0) + 1 < nj,
                                                hideCaptionBtn: null == eu,
                                                hideTranscriptBtn: null == eo,
                                                hideFullScreenBtn: e_,
                                                hidePlaybackSpeedBtn: nO,
                                                hideSkipButtons: n_,
                                                compactTimeDisplay: eO || nI,
                                                size: n$,
                                                downloadUrl: eD,
                                                downloadContentType: eB,
                                                extraButtons: eF,
                                                expandButton: nK,
                                                autoFocus: eJ,
                                                keyDownHandlerRef: rg,
                                                volume: tY,
                                                muted: tW,
                                                transcriptEnabled: ne,
                                                captionEnabled: nn,
                                                handlePlaybackBtnClick: ra,
                                                handleTranscriptBtnClick: function () {
                                                    nt(!ne);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    nr(!nn);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tq,
                                                        t = (0, C.qf)(nu.current);
                                                    (e && null != t
                                                        ? ((0, C.tl)(t), t.addEventListener(C.Wb, rt), em?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(C.Wb, rt), em?.(!1), (0, C.sP)(t)),
                                                        tJ(e));
                                                },
                                                handleSeekBackBtnClick: rn,
                                                handleSeekForwardBtnClick: rr,
                                                autoHideVolumeSlider: t3,
                                                floatingVolumeSlider: t9,
                                                handleControlBarPendingInteraction: tB,
                                                onVolumeChange: function (e) {
                                                    (tz(e), ef?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (tZ(e), ep?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    t5(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eL &&
                                (0, r.jsx)("div", {
                                    className: Y.MU,
                                    children: eL({
                                        playerState: tm,
                                        isControlBarExpanded: n9,
                                        controlBarAnimationSpring: rd,
                                        videoRef: ni,
                                        isActive: tX,
                                        isVolumeExpanded: t7,
                                    }),
                                }),
                            !tX &&
                                (0, r.jsx)("div", {
                                    className: Y.mF,
                                    ref: tP,
                                    children: (0, r.jsx)(v.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: Y.z_,
                                    }),
                                }),
                            (0, r.jsx)(T, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(s.Jh, { enabled: tq, children: ry });
}
