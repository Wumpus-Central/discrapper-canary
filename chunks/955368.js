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
    N = n(53200),
    P = n(23590),
    A = n(683574),
    R = n(40705),
    L = n(530567);
let { Layer: T, LayerContainer: k, LayerProvider: M, layerContext: j } = (0, n(365912).Ay)("DiscordVideoPlayer");
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
            onVisibilityChange: eN,
            onSeek: eP,
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
            renderTopStartOverlay: e$,
            hideFullScreenBtn: eU = !1,
            hideSkipButtons: e_,
            compactTimeDisplay: eK = !1,
            autoCompactTimeDisplay: eO = !1,
            hidePlaybackSpeedBtn: eQ = !1,
            autoSizeControlBar: eG = !1,
            autoFitControls: eH = !1,
            controlBarConfig: eX,
            getPlaybackBlockedMessage: eV,
            progressClassName: eY,
            pauseOnLostVisibility: ez = !1,
            persistTimeline: eW = !1,
            persistPlayhead: eZ = !0,
            autoFocus: eq = !1,
            autoHideVolumeSlider: eJ = !1,
            floatingVolumeSlider: e0 = !1,
            timelineIndicatorConfig: e1,
            scrubPreviewVttUrl: e2,
            scrubPreviewImageUrl: e6,
            loadingSpinnerPosition: e4 = "top-left",
            crossOrigin: e8 = "anonymous",
            withVideoHalo: e9 = !1,
            objectFit: e3 = "contain",
            minWidth: e7 = 240,
            minHeight: e5 = 180,
            muxContentMetadata: te,
            awaitMuxReady: tt = !1,
            playerRef: tn,
            ref: tr,
        } = e,
        tl = T ?? q,
        ta = eV ?? K.u,
        { focused: ti, focusedChanged: tu } = (0, _.A7)(),
        { visible: to, visibleChanged: ts, targetRef: tc } = (0, _.O7)(),
        [td, tm] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [tf, tp] = l.useState(!1),
        [th, tv] = l.useState(!1),
        [tx, tg] = l.useState(!1),
        [tE, tb] = l.useState(0),
        [ty, tS] = l.useState(null),
        tC = l.useCallback((e) => {
            (tS(null), tb(e));
        }, []),
        tw = l.useRef(null),
        [tN, tP] = l.useState(!1),
        tA = l.useRef(null),
        [tR, tL] = l.useState(d.h$.LOADING),
        tT = l.useRef(!1),
        tk = l.useRef(null),
        [tM, tj] = l.useState([]),
        [tD, tI] = l.useState(!1),
        tB = l.useRef(!1),
        tF = l.useRef(!1),
        t$ = l.useRef(!1),
        tU = l.useRef(!1),
        [t_, tK] = l.useState(!0),
        tO = l.useRef(!0),
        tQ = l.useRef(null),
        tG = l.useRef(null),
        [tH, tX] = l.useState(n || ee),
        [tV, tY] = l.useState(eh),
        [tz, tW] = l.useState(ev),
        [tZ, tq] = l.useState(!1),
        [tJ, t0] = l.useState(!1),
        [t1, t2] = l.useState(!1),
        t6 = eH && tJ && !tZ,
        t4 = eH && t1 && !tZ,
        t8 = e0 || t6,
        t9 = eJ || t8,
        [t3, t7] = l.useState(!t9),
        [t5, ne] = l.useState(!1),
        [nt, nn] = l.useState(!1),
        nr = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        nl = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        na = (0, l.useRef)(null),
        ni = (0, l.useRef)(null),
        nu = (0, l.useRef)(null),
        no = (0, l.useRef)(null),
        ns = l.useRef(!0),
        [nc, nd] = l.useState(null),
        nm = l.useRef(null),
        nf = (0, D.z5)(tH, nm, e2, e6),
        np = l.useCallback(() => na.current?.currentTime ?? null, []),
        nh = l.useMemo(
            () => ({
                get current() {
                    return (0, U.c)(na.current);
                },
            }),
            [],
        );
    (0, O.A)({ videoRef: nh, canvasRef: nu, enabled: tH && e9 && !nr, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nv,
            videoStats: nx,
            onCloseStats: ng,
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
        })({ videoRef: na, src: tl, fileSizeBytes: eI }),
        nE = l.useCallback(
            (e, t) => {
                ea?.(e, t);
            },
            [ea],
        ),
        { isHlsActive: nb, hls: ny } = (function (e, t) {
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
                g = !v && w.u.isHlsUrl(n) && (0, N.Ap)();
            return (
                l.useEffect(() => {
                    if (!g || null == n || null == e.current) return;
                    let t = e.current,
                        r = !1,
                        l = null,
                        a = null;
                    return (
                        (0, N.E)().then((e) => {
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
        })(nh, { src: tl, initialTimeSec: en, onError: nE, onHlsInstance: ek, crossOrigin: e8 }),
        { isReady: nS } = (0, P.A)({ videoRef: nh, hls: ny, contentMetadata: te, isHls: nb }),
        nC = tt && !nS && !nb,
        [nw, nN] = l.useState(null),
        [nP, nA] = l.useState(0),
        [nR, nL] = l.useState(0),
        [nT, nk] = l.useState(!1),
        nM = ei ?? na.current?.duration ?? 0,
        nj = l.useRef(null),
        [nD, nI] = l.useState(!1),
        nB = (eG || eH) && tJ ? d.oA.SM : d.oA.MD,
        { size: nF, config: n$ } = l.useMemo(() => (0, L.ZH)(nB, eX, tZ), [nB, eX, tZ]),
        nU = (e_ ?? "portrait" === a) || t4,
        n_ = !1 !== eQ ? eQ : !!t4 && "inline",
        nK = l.useMemo(
            () =>
                eO
                    ? (0, L.Dq)(
                          (0, L.ZH)(nB, eX).config,
                          {
                              showSkipButtons: !nU,
                              showInlineVolumeSlider: !t8,
                              trailingButtonCount: (0, L.eD)({
                                  hideTranscriptBtn: null == eo,
                                  hideCaptionBtn: null == eu,
                                  hasDownloadBtn: null != eD,
                                  extraButtonCount: eF?.length ?? 0,
                              }),
                              showPlaybackSpeedBtn: !1 === n_,
                              showFullScreenBtn: !eU,
                          },
                          nR,
                      )
                    : null,
            [eO, nB, eX, nU, t8, eo, eu, eD, eF, n_, eU, nR],
        ),
        nO = (0, y.A)(() => {
            let e = nj.current;
            nI(null != e && null != nK && e < nK);
        });
    l.useLayoutEffect(nO, [nK, nO]);
    let nQ = (0, y.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || ((nj.current = t), t0(t < 400), eH && t2(t < 240), nO());
        }),
        nG = eG || eO || eH;
    (0, b.g)(ni, nQ, [], { enabled: nG, fireOnMount: nG });
    let nH = n$.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        ns.current && (ns.current = !1);
    });
    let nX = (0, y.A)(() => {
            if (null == na.current) return;
            let e = ex?.() ?? tV,
                t = eg?.() ?? tz;
            (e !== tV && tY(e), t !== tz && tW(t), (na.current.volume = t ? 0 : e));
        }),
        nV = (0, y.A)(() => {
            (tH || nX(), tX(!0));
        }),
        nY = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tU.current = !0), tm(e), ed?.(e, t), null != na.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            (nd(null), nV(), na.current.play());
                            break;
                        case d.Q6.PAUSED:
                            ((tB.current = !1), na.current.pause(), (tO.current = !1));
                            break;
                        case d.Q6.ENDED:
                            ne(!1);
                    }
            },
            [ed, nV],
        );
    (l.useEffect(() => {
        if (!ez) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && ts && !to,
            r = tu && !ti;
        if ((e || n || r) && null != na.current && td === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (nd(t), nY(d.Q6.PAUSED, t));
        }
    }, [ez, t, ti, tu, to, ts, td, nY]),
        (0, Q.A)({
            videoRef: nh,
            enabled: ez,
            onPipPause: () => {
                (nd(d.KB.PICTURE_IN_PICTURE), nY(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (nd(d.KB.FOCUS), nY(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            tu && ew?.(ti, td);
        }, [ti, tu, td, ew]),
        l.useEffect(() => {
            ts && eN?.(to, td);
        }, [to, ts, td, eN]));
    let [nz, nW] = l.useState(!1),
        nZ = l.useRef(null),
        nq = l.useRef(0);
    l.useLayoutEffect(() => {
        nq.current = performance.now();
    }, []);
    let nJ = l.useCallback(() => {
            switch ((null != nZ.current && clearTimeout(nZ.current), td)) {
                case d.Q6.PLAYING:
                    nZ.current = setTimeout(
                        () => {
                            nW(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nq.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [td]),
        n0 = l.useCallback(() => {
            (nW(!1), (nq.current = performance.now()), nJ());
        }, [nJ]);
    function n1() {
        (tf || tp(!0), n0());
    }
    (l.useEffect(() => {
        if (td !== d.Q6.PLAYING) {
            (nW(!1), null != nZ.current && clearTimeout(nZ.current));
            return;
        }
        return (
            nJ(),
            () => {
                null != nZ.current && clearTimeout(nZ.current);
            }
        );
    }, [td, nJ]),
        l.useEffect(
            () => () => {
                null != tA.current && clearTimeout(tA.current);
            },
            [],
        ));
    let n2 = tx && nl,
        n6 = td === d.Q6.ENDED,
        n4 = n2 || ((tx || tf || n6) && !nz);
    function n8() {
        tg(!0);
    }
    function n9(e) {
        ((0, o.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tg(!1);
    }
    let n3 = l.useRef(!1);
    l.useEffect(() => {
        (n3.current && !n2 && n0(), (n3.current = n2));
    }, [n2, n0]);
    let n7 = l.useRef(em);
    n7.current = em;
    let n5 = l.useCallback(() => {
        let e = (0, C.qf)(ni.current);
        null == e || (0, C._U)(e) || (e.removeEventListener(C.Wb, n5), tq(!1), n7.current?.(!1));
    }, []);
    function re() {
        null == na.current ||
            (rn(Math.max((tk.current ?? na.current.currentTime) - 10, 0)),
            td === d.Q6.ENDED && nY(d.Q6.PAUSED, d.KB.SEEK));
    }
    function rt() {
        if (null == na.current) return;
        let e = Math.min((tk.current ?? na.current.currentTime) + 10, nM);
        (rn(e), td !== d.Q6.ENDED && e >= na.current.duration && nY(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = ni.current;
        return () => {
            let t = (0, C.qf)(e);
            null != t && t.removeEventListener(C.Wb, n5);
        };
    }, [n5]);
    let rn = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == na.current) return;
            let n = na.current.currentTime;
            ((tk.current = e),
                tS((e / (na.current.duration ?? 1)) * 100),
                tP(!0),
                null != tA.current && clearTimeout(tA.current),
                (tA.current = setTimeout(() => {
                    (tP(!1), (tA.current = null));
                }, 100)),
                (tT.current = !0),
                (na.current.currentTime = e),
                t && eP?.(n, e));
        },
        [eP],
    );
    function rr() {
        if (null != na.current)
            switch (td) {
                case d.Q6.ENDED:
                    (rn(0), nY(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nd(d.KB.USER), nY(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nY(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function rl(e) {
        null != eM ? eM(e) : (tX(!0), rr());
    }
    let ra = (0, y.A)(() => {
        let e = na.current?.duration;
        null != e && e > 0 && isFinite(e) && nL(e);
    });
    l.useEffect(() => {
        let e = na.current;
        if (null != e && eO)
            return (e.addEventListener("durationchange", ra), () => e.removeEventListener("durationchange", ra));
    }, [eO, ra]);
    let ri = l.useCallback(() => {
        if (null == na.current || 0 === na.current.textTracks.length) return;
        let e = na.current.textTracks[0];
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
    function ru(e) {
        if (null != na.current) {
            if (tR === d.h$.BUFFERING) {
                let e = null != tG.current ? performance.now() - tG.current : null;
                eC?.(e);
            } else if (tR === d.h$.LOADING) {
                let e = null != tQ.current ? performance.now() - tQ.current : null;
                eb?.(e);
            }
            (tL(d.h$.READY), td === d.Q6.PLAYING && (tB.current || nY(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function ro(e) {
        if ((rn(e), td === d.Q6.ENDED && !tF.current)) {
            let t = na.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nY(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == no.current) return;
        let e = no.current;
        return (
            e.addEventListener("load", ri),
            () => {
                null != e && e.removeEventListener("load", ri);
            }
        );
    }, [ri]);
    let [{ controlBarAnimSpring: rs }, rc] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                tK(!1);
            },
            onRest: () => {
                tK(!0);
            },
            onChange: {
                controlBarAnimSpring: (e) => {
                    1 === e && tK(!0);
                },
            },
        })),
        rd = (0, l.useRef)(null),
        [{ captionHeightSpring: rm }, rf] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: W }));
    (l.useEffect(
        () => (
            rf({
                captionHeightSpring: nt && null != nw ? (rd.current?.clientHeight ?? 0) : 0,
                default: { immediate: nr },
            }),
            () => {
                rm.stop();
            }
        ),
        [nt, rf, nr, nw, rm],
    ),
        l.useEffect(
            () => (
                rc({ controlBarAnimSpring: n4 || tD ? 1 : 0, default: { immediate: nr } }),
                () => {
                    rs.stop();
                }
            ),
            [n4, rc, nr, tD, rs],
        ));
    let rp = td === d.Q6.ENDED && null != es,
        rh = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != na.current && (rn(0), nY(d.Q6.PLAYING, e));
            },
            [rn, nY],
        ),
        rv = l.useRef(null),
        rx = l.useCallback(
            (e) => {
                (n0(), rv.current?.(e.nativeEvent));
            },
            [n0],
        );
    l.useImperativeHandle(
        tn,
        () => ({
            play: () => {
                nY(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nY(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                rn(e);
            },
        }),
        [nY, rn],
    );
    let rg = {
            ref: l.useCallback(
                (e) => {
                    na.current = e;
                    let t = (0, U.c)(e);
                    ((tc.current = t), "function" == typeof tr ? tr(t) : null != tr && (tr.current = t));
                },
                [tr, tc],
            ),
            alt: Z,
            playsInline: !0,
            mediaLayoutType: tZ ? X.d.STATIC : X.d.RESPONSIVE,
            className: i()({ [Y.R]: rp, [Y.IR]: !0, [Y.FP]: "cover" === e3 && !tZ }),
            controls: !1,
            poster: J,
            preload: tH ? ej : th ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != na.current &&
                    (er?.(na.current.currentTime, na.current.duration),
                    tT.current || tC((na.current.currentTime / na.current.duration) * 100));
            },
            onEnded: function (e) {
                (tL(d.h$.READY), el?.(), tF.current || nY(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tR === d.h$.LOADING) {
                    let e = null != tQ.current ? performance.now() - tQ.current : null;
                    (eb?.(e), tL(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == na.current) return;
                (en > 0 && !nb && rn(en, !1), nX());
                let t = na.current.duration;
                (t > 0 && isFinite(t) && nA(t), ra(), nk(!0));
            },
            onLoadStart: function () {
                ((tQ.current = performance.now()), eE?.());
            },
            onPlaying: function () {
                tO.current && (ey?.(performance.now()), (tO.current = !1));
            },
            onWaiting: function (e) {
                ((tG.current = performance.now()), eS?.(), tL(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == na.current) return;
                let t = [];
                for (let e = 0; e < na.current.buffered.length; e++) {
                    let n = na.current.buffered.start(e),
                        r = na.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / na.current.duration, size: (r - n) / na.current.duration });
                }
                tj(t);
            },
            onCanPlay: ru,
            onCanPlayThrough: ru,
            onSeeked: function () {
                ((tT.current = !1),
                    (tk.current = null),
                    null != na.current && tC((na.current.currentTime / na.current.duration) * 100));
            },
            onAbort: function () {
                return nE(d.SB.ABORT);
            },
            onError: function () {
                return nE(d.SB.ERROR);
            },
            onEmptied: function () {
                return nE(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nE(d.SB.STALLED);
            },
            onClick: rl,
            crossOrigin: e8 ?? void 0,
            src: nb || nC ? null : (tl ?? null),
            onSourceError: function () {
                return nE(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tD,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != eu &&
                        (0, r.jsx)("track", {
                            ref: no,
                            src: eu,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != e2 && (0, r.jsx)("track", { ref: nm, src: e2, kind: "metadata" }),
                ],
            }),
        },
        rE = (0, r.jsx)(M, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: tZ ? j : void 0,
                isFullscreen: tZ,
                videoRef: na,
                isActive: tH,
                controlBarConfig: n$,
                isControlBarExpanded: n4,
                children: (0, r.jsx)(p.D, {
                    className: i()(Y.W6, I.i.blurple, { [Y.nZ]: !tH }),
                    style: { minWidth: e7, minHeight: e5 },
                    "data-fullscreen": tZ,
                    "data-dvp-controls-visible": n4 || tD,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tH ? -1 : 0,
                    focusProps: tH ? void 0 : { ringTarget: tw },
                    onMouseEnter: function () {
                        (tp(!0),
                            nW(!1),
                            et && tv(!0),
                            (nq.current = performance.now()),
                            null != nZ.current && clearTimeout(nZ.current));
                    },
                    onMouseLeave: function () {
                        (tp(!1), nW(!1));
                    },
                    "aria-label": tH ? void 0 : V.intl.string(V.t.RscU7I),
                    onClick: tH ? void 0 : rl,
                    onPointerDown: n1,
                    onMouseMove: n1,
                    children: (0, r.jsxs)("div", {
                        ref: ni,
                        className: i()(Y.NS, { [Y.DO]: "portrait" === a, [Y.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: rx,
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
                            "--custom-dvp-timeline-row-gap": nF === d.oA.LG ? "var(--space-6)" : "var(--space-4)",
                            "--custom-volume-slider-margin-start": `${n$.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${n$.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${n$.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": n$.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != n$.trailingGroupWidthPx ? `${n$.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tH && e9 && !nr && (0, r.jsx)("canvas", { ref: nu, className: Y.Xm }),
                            rp && es?.({ replay: rh }),
                            ec(rg),
                            tR !== d.h$.READY &&
                                td === d.Q6.PLAYING &&
                                null != tl &&
                                (0, r.jsx)("span", {
                                    className: i()(Y.S, { [Y.F]: "center" === e4 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(K.A, {
                                message: ta({ hasVideoAsset: null != tl, playerState: td, pauseReason: nc }),
                                showOverlay: null == tl,
                            }),
                            nv &&
                                null != nx &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(z, { stats: nx, onClose: ng }),
                                }),
                            null != eR &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.MU,
                                    style: {
                                        opacity: (0, u.to)([rs.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([rs.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([rs.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eR(),
                                }),
                            tH &&
                                null != e$ &&
                                (0, r.jsx)("div", {
                                    className: Y.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: n8,
                                    onBlur: n9,
                                    children: e$({ visible: n4, animSpring: rs, size: nF }),
                                }),
                            t5 &&
                                td !== d.Q6.ENDED &&
                                null != eo &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (td === d.Q6.PAUSED && nY(d.Q6.PLAYING, d.KB.USER), ne(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: Y.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()(Y.xr, eT, { [Y.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [rs, rm],
                                                    (e, t) => `${e * n$.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(F.X, {
                                                text: eo,
                                                onClose: function () {
                                                    ne(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tH &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.Jp,
                                    style: {
                                        opacity: (0, u.to)([rs.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(Y.yf, {
                                        [Y.ZH]: tU.current && td === d.Q6.PLAYING,
                                        [Y.v7]: tU.current && td === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        td === d.Q6.PLAYING
                                            ? (0, r.jsx)(v.PlayIcon, { className: Y.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: Y.PK }),
                                },
                                td,
                            ),
                            nt &&
                                null != nw &&
                                !rp &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.o$,
                                    ref: rd,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [rs.to({ range: [0, 1], output: [-nH, -n$.barHeightPx] })],
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
                            tH &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: Y.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [rs.to({ range: [0, 1], output: [0, n$.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: n8,
                                    onBlur: n9,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            className: Y.oB,
                                            style: {
                                                opacity: (0, u.to)([rs], (e) => `${eW ? 1 : e}`),
                                                visibility:
                                                    eW || n4 || tD
                                                        ? void 0
                                                        : rs.to((e) => (0 === e ? "hidden" : "visible")),
                                                transform: (0, u.to)(
                                                    [rs.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * nH}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.Ay, {
                                                percent: null != ty ? ty : tE,
                                                animate:
                                                    !0 !== ns.current &&
                                                    !tN &&
                                                    td === d.Q6.PLAYING &&
                                                    nT &&
                                                    tR === d.h$.READY,
                                                interactionEnabled: t_ && nM > 0,
                                                backgroundColor: n4 || eW ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: td,
                                                preloadedBuffers: n4 ? tM : void 0,
                                                durationSec: nP > 0 ? nP : +!nT,
                                                isFullyVisible: n4 && t_,
                                                maxSeekableTime: null != ei && nM > 0 ? nM : void 0,
                                                progressClassName: eY,
                                                persistPlayhead: eZ,
                                                onClick: ro,
                                                onScrubBack: re,
                                                onScrubForward: rt,
                                                onDragStateChange: function (e) {
                                                    if (((tF.current = e), eA?.(e), tI(e), e))
                                                        ((tB.current = td === d.Q6.PLAYING),
                                                            (t$.current = td === d.Q6.ENDED),
                                                            tB.current
                                                                ? na.current?.pause()
                                                                : t$.current && nY(d.Q6.PAUSED, d.KB.SEEK));
                                                    else {
                                                        let e = na.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tB.current
                                                            ? ((tB.current = !1),
                                                              t ? nY(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : t$.current
                                                              ? ((t$.current = !1),
                                                                t
                                                                    ? nY(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : nY(d.Q6.PLAYING, d.KB.USER))
                                                              : t && nY(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: e1,
                                                scrubPreviewCues: nf,
                                                onIndicatorSeek: ro,
                                                getCurrentTimeSec: np,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: Y.EG,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [rs.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nH}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [rs.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nH}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [rs.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: td,
                                                animSpring: rs,
                                                visible: n4,
                                                seekForwardEnabled:
                                                    null == ei || (na.current?.currentTime ?? 0) + 1 < nM,
                                                hideCaptionBtn: null == eu,
                                                hideTranscriptBtn: null == eo,
                                                hideFullScreenBtn: eU,
                                                hidePlaybackSpeedBtn: n_,
                                                hideSkipButtons: nU,
                                                compactTimeDisplay: eK || nD,
                                                size: nF,
                                                downloadUrl: eD,
                                                downloadContentType: eB,
                                                extraButtons: eF,
                                                autoFocus: eq,
                                                keyDownHandlerRef: rv,
                                                volume: tV,
                                                muted: tz,
                                                transcriptEnabled: t5,
                                                captionEnabled: nt,
                                                handlePlaybackBtnClick: rr,
                                                handleTranscriptBtnClick: function () {
                                                    ne(!t5);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    nn(!nt);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !tZ,
                                                        t = (0, C.qf)(ni.current);
                                                    (e && null != t
                                                        ? ((0, C.tl)(t), t.addEventListener(C.Wb, n5), em?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(C.Wb, n5), em?.(!1), (0, C.sP)(t)),
                                                        tq(e));
                                                },
                                                handleSeekBackBtnClick: re,
                                                handleSeekForwardBtnClick: rt,
                                                autoHideVolumeSlider: t9,
                                                floatingVolumeSlider: t8,
                                                handleControlBarPendingInteraction: tI,
                                                onVolumeChange: function (e) {
                                                    (tY(e), ef?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (tW(e), ep?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    t7(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eL &&
                                (0, r.jsx)("div", {
                                    className: Y.MU,
                                    children: eL({
                                        playerState: td,
                                        isControlBarExpanded: n4,
                                        controlBarAnimationSpring: rs,
                                        videoRef: na,
                                        isActive: tH,
                                        isVolumeExpanded: t3,
                                    }),
                                }),
                            !tH &&
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
    return (0, r.jsx)(s.Jh, { enabled: tZ, children: rE });
}
