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
    P = n(614269),
    w = n(53200),
    N = n(23590),
    A = n(683574),
    R = n(40705),
    L = n(530567);
let { Layer: T, LayerContainer: k, LayerProvider: M, layerContext: j } = (0, n(365912).Ay)("DiscordVideoPlayer");
var D = n(565164),
    I = n(636537),
    B = n(894413),
    F = n(408121),
    U = n(984212),
    $ = n(246047),
    _ = n(739416),
    K = n(931853),
    Q = n(90721),
    O = n(920228),
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
            videoUrlOverride: T,
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
            renderVideo: ec = $.v,
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
            onFocusChange: eP,
            onVisibilityChange: ew,
            onSeek: eN,
            onTimelineDragStateChange: eA,
            renderOverlay: eR,
            renderPersistentOverlay: eL,
            transcriptClassName: eT,
            onHlsInstance: ek,
            onClick: eM,
            preload: ej,
            downloadUrl: eD,
            fileSizeBytes: eI,
            downloadContentType: eB,
            extraButtons: eF,
            expandButton: eU,
            renderTopStartOverlay: e$,
            hideFullScreenBtn: e_ = !1,
            hideSkipButtons: eK,
            compactTimeDisplay: eQ = !1,
            autoCompactTimeDisplay: eO = !1,
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
        ta = T ?? q,
        ti = eY ?? K.u,
        { focused: tu, focusedChanged: to } = (0, _.A7)(),
        { visible: ts, visibleChanged: tc, targetRef: td } = (0, _.O7)(),
        [tm, tf] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [tp, th] = l.useState(!1),
        [tv, tx] = l.useState(!1),
        [tg, tE] = l.useState(!1),
        [tb, ty] = l.useState(0),
        [tS, tC] = l.useState(null),
        tP = l.useCallback((e) => {
            (tC(null), ty(e));
        }, []),
        tw = l.useRef(null),
        [tN, tA] = l.useState(!1),
        tR = l.useRef(null),
        [tL, tT] = l.useState(d.h$.LOADING),
        tk = l.useRef(!1),
        tM = l.useRef(null),
        [tj, tD] = l.useState([]),
        [tI, tB] = l.useState(!1),
        tF = l.useRef(!1),
        tU = l.useRef(!1),
        t$ = l.useRef(!1),
        t_ = l.useRef(!1),
        [tK, tQ] = l.useState(!0),
        tO = l.useRef(!0),
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
                    return (0, $.c)(ni.current);
                },
            }),
            [],
        );
    (0, Q.A)({ videoRef: nv, canvasRef: no, enabled: tX && e3 && !nl, canvasWidth: 32, canvasHeight: 18 });
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
                g = !v && P.u.isHlsUrl(n) && (0, w.Ap)();
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
        })(nv, { src: ta, initialTimeSec: en, onError: nb, onHlsInstance: ek, crossOrigin: e9 }),
        { isReady: nC } = (0, N.A)({ videoRef: nv, hls: nS, contentMetadata: tt, isHls: ny }),
        nP = tn && !nC && !ny,
        [nw, nN] = l.useState(null),
        [nA, nR] = l.useState(0),
        [nL, nT] = l.useState(0),
        [nk, nM] = l.useState(!1),
        nj = ei ?? ni.current?.duration ?? 0,
        nD = l.useRef(null),
        [nI, nB] = l.useState(!1),
        nF = (eH || eX) && t0 ? d.oA.SM : d.oA.MD,
        { size: nU, config: n$ } = l.useMemo(() => (0, L.ZH)(nF, eV, tq), [nF, eV, tq]),
        n_ = (eK ?? "portrait" === a) || t8,
        nK = t8 ? void 0 : eU,
        nQ = !1 !== eG ? eG : !!t8 && "inline",
        nO = l.useMemo(
            () =>
                eO
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
                              showPlaybackSpeedBtn: !1 === nQ,
                              showFullScreenBtn: !e_,
                          },
                          nL,
                      )
                    : null,
            [eO, nF, eV, n_, t9, eo, eu, eD, eF, nK, nQ, e_, nL],
        ),
        nG = (0, y.A)(() => {
            let e = nD.current;
            nB(null != e && null != nO && e < nO);
        });
    l.useLayoutEffect(nG, [nO, nG]);
    let nH = (0, y.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || ((nD.current = t), t1(t < 400), eX && t6(t < 240), nG());
        }),
        nX = eH || eO || eX;
    (0, b.g)(nu, nH, [], { enabled: nX, fireOnMount: nX });
    let nV = n$.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        nc.current && (nc.current = !1);
    });
    let nY = (0, y.A)(() => {
            if (null == ni.current) return;
            let e = ex?.() ?? tY,
                t = eg?.() ?? tW;
            (e !== tY && tz(e), t !== tW && tZ(t), (ni.current.muted = t), (ni.current.volume = t ? 0 : e));
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
                            ((tF.current = !1), ni.current.pause(), (tO.current = !1));
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
        (0, O.A)({
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
            to && eP?.(tu, tm);
        }, [tu, to, tm, eP]),
        l.useEffect(() => {
            tc && ew?.(ts, tm);
        }, [ts, tc, tm, ew]));
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
    function rt() {
        return (0, C.qf)(nu.current, nv.current);
    }
    re.current = em;
    let rn = l.useRef(null),
        rr = (0, y.A)(() => {
            let e = rn.current;
            if (null == e || (0, C._U)(e)) return;
            (e.removeEventListener(C.Wb, rr), (rn.current = null), tJ(!1), re.current?.(!1));
            let t = nv.current;
            if (e !== t) return;
            t.muted !== tW && rb(t.muted);
            let n = t.ended ? d.Q6.ENDED : t.paused ? d.Q6.PAUSED : d.Q6.PLAYING;
            n !== tm && nW(n, d.KB.USER);
        });
    function rl() {
        null == ni.current ||
            (ri(Math.max((tM.current ?? ni.current.currentTime) - 10, 0)),
            tm === d.Q6.ENDED && nW(d.Q6.PAUSED, d.KB.SEEK));
    }
    function ra() {
        if (null == ni.current) return;
        let e = Math.min((tM.current ?? ni.current.currentTime) + 10, nj);
        (ri(e), tm !== d.Q6.ENDED && e >= ni.current.duration && nW(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(
        () => () => {
            rn.current?.removeEventListener(C.Wb, rr);
        },
        [rr],
    );
    let ri = l.useCallback(
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
                (tk.current = !0),
                (ni.current.currentTime = e),
                t && eN?.(n, e));
        },
        [eN],
    );
    function ru() {
        if (null != ni.current)
            switch (tm) {
                case d.Q6.ENDED:
                    (ri(0), nW(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nm(d.KB.USER), nW(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nW(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function ro(e) {
        null != eM ? eM(e) : (tV(!0), ru());
    }
    let rs = (0, y.A)(() => {
        let e = ni.current?.duration;
        null != e && e > 0 && isFinite(e) && nT(e);
    });
    l.useEffect(() => {
        let e = ni.current;
        if (null != e && eO)
            return (e.addEventListener("durationchange", rs), () => e.removeEventListener("durationchange", rs));
    }, [eO, rs]);
    let rc = l.useCallback(() => {
        if (null == ni.current || 0 === ni.current.textTracks.length) return;
        let e = ni.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, U.C)(n) &&
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
    function rd(e) {
        if (null != ni.current) {
            if (tL === d.h$.BUFFERING) {
                let e = null != tH.current ? performance.now() - tH.current : null;
                eC?.(e);
            } else if (tL === d.h$.LOADING) {
                let e = null != tG.current ? performance.now() - tG.current : null;
                eb?.(e);
            }
            (tT(d.h$.READY), tm === d.Q6.PLAYING && (tF.current || nW(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function rm(e) {
        if ((ri(e), tm === d.Q6.ENDED && !tU.current)) {
            let t = ni.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nW(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == ns.current) return;
        let e = ns.current;
        return (
            e.addEventListener("load", rc),
            () => {
                null != e && e.removeEventListener("load", rc);
            }
        );
    }, [rc]);
    let [{ controlBarAnimSpring: rf }, rp] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                tQ(!1);
            },
            onRest: () => {
                tQ(!0);
            },
            onChange: {
                controlBarAnimSpring: (e) => {
                    1 === e && tQ(!0);
                },
            },
        })),
        rh = (0, l.useRef)(null),
        [{ captionHeightSpring: rv }, rx] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: W }));
    (l.useEffect(
        () => (
            rx({
                captionHeightSpring: nn && null != nw ? (rh.current?.clientHeight ?? 0) : 0,
                default: { immediate: nl },
            }),
            () => {
                rv.stop();
            }
        ),
        [nn, rx, nl, nw, rv],
    ),
        l.useEffect(
            () => (
                rp({ controlBarAnimSpring: n9 || tI ? 1 : 0, default: { immediate: nl } }),
                () => {
                    rf.stop();
                }
            ),
            [n9, rp, nl, tI, rf],
        ));
    let rg = tm === d.Q6.ENDED && null != es,
        rE = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != ni.current && (ri(0), nW(d.Q6.PLAYING, e));
            },
            [ri, nW],
        );
    function rb(e) {
        (tZ(e), ep?.(e));
    }
    let ry = l.useRef(null),
        rS = l.useCallback(
            (e) => {
                (n2(), ry.current?.(e.nativeEvent));
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
                ri(e);
            },
        }),
        [nW, ri],
    );
    let rC = {
            ref: l.useCallback(
                (e) => {
                    ni.current = e;
                    let t = (0, $.c)(e);
                    ((td.current = t), "function" == typeof tl ? tl(t) : null != tl && (tl.current = t));
                },
                [tl, td],
            ),
            alt: Z,
            playsInline: !0,
            mediaLayoutType: tq ? X.d.STATIC : X.d.RESPONSIVE,
            className: i()({ [Y.R]: rg, [Y.IR]: !0, [Y.FP]: "cover" === e7 && !tq }),
            controls: !1,
            poster: J,
            preload: tX ? ej : tv ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != ni.current &&
                    (er?.(ni.current.currentTime, ni.current.duration),
                    tk.current || tP((ni.current.currentTime / ni.current.duration) * 100));
            },
            onEnded: function (e) {
                (tT(d.h$.READY), el?.(), tU.current || nW(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tL === d.h$.LOADING) {
                    let e = null != tG.current ? performance.now() - tG.current : null;
                    (eb?.(e), tT(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == ni.current) return;
                (en > 0 && !ny && ri(en, !1), nY());
                let t = ni.current.duration;
                (t > 0 && isFinite(t) && nR(t), rs(), nM(!0));
            },
            onLoadStart: function () {
                ((tG.current = performance.now()), eE?.());
            },
            onPlaying: function () {
                tO.current && (ey?.(performance.now()), (tO.current = !1));
            },
            onWaiting: function (e) {
                ((tH.current = performance.now()), eS?.(), tT(d.h$.BUFFERING));
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
            onCanPlay: rd,
            onCanPlayThrough: rd,
            onSeeked: function () {
                ((tk.current = !1),
                    (tM.current = null),
                    null != ni.current && tP((ni.current.currentTime / ni.current.duration) * 100));
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
            onClick: ro,
            crossOrigin: e9 ?? void 0,
            src: ny || nP ? null : (ta ?? null),
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
        rP = (0, r.jsx)(M, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: tq ? j : void 0,
                isFullscreen: tq,
                videoRef: ni,
                isActive: tX,
                controlBarConfig: n$,
                isControlBarExpanded: n9,
                children: (0, r.jsx)(p.D, {
                    className: i()(Y.W6, I.i.blurple, { [Y.nZ]: !tX }),
                    style: { minWidth: e5, minHeight: te },
                    "data-fullscreen": tq,
                    "data-dvp-controls-visible": n9 || tI,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tX ? -1 : 0,
                    focusProps: tX ? void 0 : { ringTarget: tw },
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
                    onClick: tX ? void 0 : ro,
                    onKeyDown: function (e) {
                        e.key !== d.TJ.SPACE ||
                            (e.target !== e.currentTarget && e.target !== nu.current) ||
                            (e.preventDefault(), tX || e.repeat || (n2(), tV(!0), ru()));
                    },
                    onPointerDown: n6,
                    onMouseMove: n6,
                    children: (0, r.jsxs)("div", {
                        ref: nu,
                        className: i()(Y.NS, { [Y.DO]: "portrait" === a, [Y.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: rS,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${n$.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${n$.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${n$.scrimHeightPx}px`,
                            "--custom-controls-gap": `${n$.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${n$.midGroupGapPx}px`,
                            "--custom-duration-margin": `${n$.durationMarginPx}px`,
                            "--custom-playhead-size": `${n$.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${n$.timelineHitboxOffsetPx}px`,
                            "--custom-dvp-timeline-row-gap": nU === d.oA.LG ? "var(--space-6)" : "var(--space-4)",
                            "--custom-volume-slider-margin-start": `${n$.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${n$.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${n$.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": n$.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != n$.trailingGroupWidthPx ? `${n$.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tX && e3 && !nl && (0, r.jsx)("canvas", { ref: no, className: Y.Xm }),
                            rg && es?.({ replay: rE }),
                            ec(rC),
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
                                        opacity: (0, u.to)([rf.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([rf.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([rf.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eR(),
                                }),
                            tX &&
                                null != e$ &&
                                (0, r.jsx)("div", {
                                    className: Y.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: n3,
                                    onBlur: n7,
                                    children: e$({ visible: n9, animSpring: rf, size: nU }),
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
                                            className: i()(Y.xr, eT, { [Y.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [rf, rv],
                                                    (e, t) => `${e * n$.barHeightPx + t}px`,
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
                                        opacity: (0, u.to)([rf.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
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
                                null != nw &&
                                !rg &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.o$,
                                    ref: rh,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [rf.to({ range: [0, 1], output: [-nV, -n$.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-lg/semibold",
                                        color: "text-overlay-light",
                                        className: Y.qh,
                                        children: nw.text,
                                    }),
                                }),
                            tX &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: Y.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [rf.to({ range: [0, 1], output: [0, n$.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: n3,
                                    onBlur: n7,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            className: Y.oB,
                                            style: {
                                                opacity: (0, u.to)([rf], (e) => `${eZ ? 1 : e}`),
                                                visibility:
                                                    eZ || n9 || tI
                                                        ? void 0
                                                        : rf.to((e) => (0 === e ? "hidden" : "visible")),
                                                transform: (0, u.to)(
                                                    [rf.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * nV}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.Ay, {
                                                percent: null != tS ? tS : tb,
                                                animate:
                                                    !0 !== nc.current &&
                                                    !tN &&
                                                    tm === d.Q6.PLAYING &&
                                                    nk &&
                                                    tL === d.h$.READY,
                                                interactionEnabled: tK && nj > 0,
                                                backgroundColor: n9 || eZ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: tm,
                                                preloadedBuffers: n9 ? tj : void 0,
                                                durationSec: nA > 0 ? nA : +!nk,
                                                isFullyVisible: n9 && tK,
                                                maxSeekableTime: null != ei && nj > 0 ? nj : void 0,
                                                progressClassName: ez,
                                                persistPlayhead: eq,
                                                onClick: rm,
                                                onScrubBack: rl,
                                                onScrubForward: ra,
                                                onDragStateChange: function (e) {
                                                    if (((tU.current = e), eA?.(e), tB(e), e))
                                                        ((tF.current = tm === d.Q6.PLAYING),
                                                            (t$.current = tm === d.Q6.ENDED),
                                                            tF.current
                                                                ? ni.current?.pause()
                                                                : t$.current && nW(d.Q6.PAUSED, d.KB.SEEK));
                                                    else {
                                                        let e = ni.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tF.current
                                                            ? ((tF.current = !1),
                                                              t ? nW(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : t$.current
                                                              ? ((t$.current = !1),
                                                                t
                                                                    ? nW(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : nW(d.Q6.PLAYING, d.KB.USER))
                                                              : t && nW(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: e2,
                                                scrubPreviewCues: np,
                                                onIndicatorSeek: rm,
                                                getCurrentTimeSec: nh,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: Y.EG,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [rf.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nV}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [rf.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nV}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [rf.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: tm,
                                                animSpring: rf,
                                                visible: n9,
                                                seekForwardEnabled:
                                                    null == ei || (ni.current?.currentTime ?? 0) + 1 < nj,
                                                hideCaptionBtn: null == eu,
                                                hideTranscriptBtn: null == eo,
                                                hideFullScreenBtn: e_,
                                                hidePlaybackSpeedBtn: nQ,
                                                hideSkipButtons: n_,
                                                compactTimeDisplay: eQ || nI,
                                                size: nU,
                                                downloadUrl: eD,
                                                downloadContentType: eB,
                                                extraButtons: eF,
                                                expandButton: nK,
                                                autoFocus: eJ,
                                                keyDownHandlerRef: ry,
                                                volume: tY,
                                                muted: tW,
                                                transcriptEnabled: ne,
                                                captionEnabled: nn,
                                                handlePlaybackBtnClick: ru,
                                                handleTranscriptBtnClick: function () {
                                                    nt(!ne);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    nr(!nn);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tq;
                                                    if (e) {
                                                        let e = rt();
                                                        if (null == e) return;
                                                        try {
                                                            (0, C.tl)(e);
                                                        } catch {
                                                            return;
                                                        }
                                                        ((rn.current = e), e.addEventListener(C.Wb, rr), em?.(!0));
                                                    } else {
                                                        let e = rn.current ?? rt();
                                                        ((rn.current = null),
                                                            null != e &&
                                                                (e.removeEventListener(C.Wb, rr),
                                                                em?.(!1),
                                                                (0, C.sP)(e)));
                                                    }
                                                    tJ(e);
                                                },
                                                handleSeekBackBtnClick: rl,
                                                handleSeekForwardBtnClick: ra,
                                                autoHideVolumeSlider: t3,
                                                floatingVolumeSlider: t9,
                                                handleControlBarPendingInteraction: tB,
                                                onVolumeChange: function (e) {
                                                    (tz(e), ef?.(e));
                                                },
                                                onMutedChange: rb,
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
                                        controlBarAnimationSpring: rf,
                                        videoRef: ni,
                                        isActive: tX,
                                        isVolumeExpanded: t7,
                                    }),
                                }),
                            !tX &&
                                (0, r.jsx)("div", {
                                    className: Y.mF,
                                    ref: tw,
                                    children: (0, r.jsx)(v.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: Y.z_,
                                    }),
                                }),
                            (0, r.jsx)(k, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(s.Jh, { enabled: tq, children: rP });
}
