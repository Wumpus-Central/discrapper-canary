(n.r(t),
    n.d(t, {
        ATTACHMENT_CONTROL_BAR_CONFIG: () => L.Xq,
        COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => 400,
        FULL_SCREEN_MEASURE_TIMEOUT_MS: () => Z,
        default: () => J,
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
let { Layer: T, LayerContainer: k, LayerProvider: M, layerContext: j } = (0, n(365912).Ay)("DiscordVideoPlayer");
var D = n(565164),
    I = n(636537),
    B = n(894413),
    F = n(408121),
    U = n(984212),
    _ = n(246047),
    $ = n(739416),
    K = n(931853);
let O = "(hover: none)";
var Q = n(90721),
    G = n(920228),
    H = n(953584),
    V = n(338659),
    X = n(838541),
    Y = n(792996),
    z = n(862649);
let W = l.lazy(() =>
        Promise.all([n.e(999272), n.e(783988), n.e(919307)])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    Z = 300,
    q = { tension: 250, friction: 5, clamp: !0 };
function J(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: a = "landscape",
            videoUrlOverride: T,
            alt: J,
            src: ee,
            poster: et,
            initialActive: en = !0,
            preloadOnHover: er = !1,
            initialTimeSec: el = 0,
            onProgressUpdate: ea,
            onEnded: ei,
            onError: eu,
            maxSeekableTimeSec: eo,
            captionTrackUrl: es,
            transcriptText: ec,
            renderEndScreen: ed,
            renderVideo: em = _.v,
            onPlayerStateChange: ef,
            onFullscreenChange: ep,
            onVolumeChange: eh,
            onMutedChange: ev,
            initialVolume: ex = 0.3,
            initialMuted: eg = !1,
            getInitialVolume: eE,
            getInitialMuted: eb,
            onLoadStart: ey,
            onLoadEnd: eS,
            onFirstFrame: eC,
            onBufferingStart: ew,
            onBufferingEnd: eP,
            onFocusChange: eN,
            onVisibilityChange: eA,
            onSeek: eR,
            onTimelineDragStateChange: eL,
            renderOverlay: eT,
            renderPersistentOverlay: ek,
            transcriptClassName: eM,
            onHlsInstance: ej,
            onClick: eD,
            preload: eI,
            downloadUrl: eB,
            fileSizeBytes: eF,
            downloadContentType: eU,
            extraButtons: e_,
            expandButton: e$,
            renderTopStartOverlay: eK,
            hideFullScreenBtn: eO = !1,
            hideSkipButtons: eQ,
            compactTimeDisplay: eG = !1,
            autoCompactTimeDisplay: eH = !1,
            hidePlaybackSpeedBtn: eV = !1,
            autoSizeControlBar: eX = !1,
            autoFitControls: eY = !1,
            controlBarConfig: ez,
            getPlaybackBlockedMessage: eW,
            progressClassName: eZ,
            pauseOnLostVisibility: eq = !1,
            persistTimeline: eJ = !1,
            persistPlayhead: e0 = !0,
            autoFocus: e1 = !1,
            autoHideVolumeSlider: e2 = !1,
            floatingVolumeSlider: e6 = !1,
            timelineIndicatorConfig: e4,
            scrubPreviewVttUrl: e8,
            scrubPreviewImageUrl: e9,
            loadingSpinnerPosition: e3 = "top-left",
            crossOrigin: e7 = "anonymous",
            withVideoHalo: e5 = !1,
            objectFit: te = "contain",
            minWidth: tt = 240,
            minHeight: tn = 180,
            muxContentMetadata: tr,
            awaitMuxReady: tl = !1,
            playerRef: ta,
            ref: ti,
        } = e,
        tu = T ?? ee,
        to = eW ?? K.u,
        { focused: ts, focusedChanged: tc } = (0, $.A7)(),
        { visible: td, visibleChanged: tm, targetRef: tf } = (0, $.O7)(),
        [tp, th] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [tv, tx] = l.useState(!1),
        [tg, tE] = l.useState(!1),
        [tb, ty] = l.useState(!1),
        [tS, tC] = l.useState(0),
        [tw, tP] = l.useState(null),
        tN = l.useCallback((e) => {
            (tP(null), tC(e));
        }, []),
        tA = l.useRef(null),
        [tR, tL] = l.useState(!1),
        tT = l.useRef(null),
        [tk, tM] = l.useState(d.h$.LOADING),
        tj = l.useRef(!1),
        tD = l.useRef(null),
        [tI, tB] = l.useState([]),
        [tF, tU] = l.useState(!1),
        t_ = l.useRef(!1),
        t$ = l.useRef(!1),
        tK = l.useRef(!1),
        tO = l.useRef(!1),
        [tQ, tG] = l.useState(!0),
        tH = l.useRef(!0),
        tV = l.useRef(null),
        tX = l.useRef(null),
        [tY, tz] = l.useState(n || en),
        [tW, tZ] = l.useState(ex),
        [tq, tJ] = l.useState(eg),
        [t0, t1] = l.useState(!1),
        [t2, t6] = l.useState(!1),
        [t4, t8] = l.useState(!1),
        t9 = eY && t2 && !t0,
        t3 = eY && t4 && !t0,
        t7 = e6 || t9,
        t5 = (function () {
            let [e, t] = l.useState(() => window.matchMedia?.(O)?.matches ?? !1);
            return (
                l.useEffect(() => {
                    let e = window.matchMedia?.(O);
                    if (null != e) return (n(), e.addListener(n), () => e.removeListener(n));
                    function n() {
                        t(e.matches);
                    }
                }, []),
                e
            );
        })(),
        ne = e2 || t7,
        [nt, nn] = l.useState(!ne),
        [nr, nl] = l.useState(!1),
        [na, ni] = l.useState(!1),
        nu = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        no = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        ns = (0, l.useRef)(null),
        nc = (0, l.useRef)(null),
        nd = (0, l.useRef)(null),
        nm = (0, l.useRef)(null),
        nf = l.useRef(!0),
        [np, nh] = l.useState(null),
        nv = l.useRef(null),
        nx = (0, D.z5)(tY, nv, e8, e9),
        ng = l.useCallback(() => ns.current?.currentTime ?? null, []),
        nE = l.useMemo(
            () => ({
                get current() {
                    return (0, _.c)(ns.current);
                },
            }),
            [],
        );
    (0, Q.A)({ videoRef: nE, canvasRef: nd, enabled: tY && e5 && !nu, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nb,
            videoStats: ny,
            onCloseStats: nS,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                a = null != n && "" !== n,
                i = (0, c.bG)([H.Ay], () => !!a && H.Ay.isVideoStatsEnabled(n)),
                [u, o] = l.useState(null);
            return (
                l.useEffect(() => {
                    if (!i) return;
                    let e = t.current;
                    if (null == e) {
                        a && (0, H.Vh)(n, !1);
                        return;
                    }
                    let l = new V.s(e, r ?? void 0);
                    return (
                        l.startTracking(o, { emitInitial: !0 }),
                        () => {
                            l.destroy();
                        }
                    );
                }, [i, t, n, a, r]),
                l.useEffect(
                    () => () => {
                        a && (0, H.ke)(n);
                    },
                    [n, a],
                ),
                {
                    showStats: i,
                    videoStats: i ? u : null,
                    onCloseStats: l.useCallback(() => {
                        a && (0, H.Vh)(n, !1);
                    }, [n, a]),
                }
            );
        })({ videoRef: ns, src: tu, fileSizeBytes: eF }),
        nC = l.useCallback(
            (e, t) => {
                eu?.(e, t);
            },
            [eu],
        ),
        { isHlsActive: nw, hls: nP } = (function (e, t) {
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
        })(nE, { src: tu, initialTimeSec: el, onError: nC, onHlsInstance: ej, crossOrigin: e7 }),
        { isReady: nN } = (0, N.A)({ videoRef: nE, hls: nP, contentMetadata: tr, isHls: nw }),
        nA = tl && !nN && !nw,
        [nR, nL] = l.useState(null),
        [nT, nk] = l.useState(0),
        [nM, nj] = l.useState(0),
        [nD, nI] = l.useState(!1),
        nB = eo ?? ns.current?.duration ?? 0,
        nF = l.useRef(null),
        [nU, n_] = l.useState(!1),
        n$ = (eX || eY) && t2 ? d.oA.SM : d.oA.MD,
        { size: nK, config: nO } = l.useMemo(() => (0, L.ZH)(n$, ez, t0), [n$, ez, t0]),
        nQ = (eQ ?? "portrait" === a) || t3,
        nG = t3 ? void 0 : e$,
        nH = !1 !== eV ? eV : !!t3 && "inline",
        nV = (0, L.eD)({
            hideTranscriptBtn: null == ec,
            hideCaptionBtn: null == es,
            hasDownloadBtn: null != eB,
            extraButtonCount: e_?.length ?? 0,
        }),
        nX = l.useMemo(
            () =>
                eH
                    ? (0, L.Dq)(
                          (0, L.ZH)(n$, ez).config,
                          {
                              showSkipButtons: !nQ,
                              showInlineVolumeSlider: !t7 && !t5,
                              trailingButtonCount: nV + +(null != nG),
                              showPlaybackSpeedBtn: !1 === nH,
                              showFullScreenBtn: !eO,
                          },
                          nM,
                      )
                    : null,
            [eH, n$, ez, nQ, t7, t5, nV, nG, nH, eO, nM],
        ),
        nY = (0, y.A)(() => {
            let e = nF.current;
            n_(null != e && null != nX && e < nX);
        });
    l.useLayoutEffect(nY, [nX, nY]);
    let nz = l.useRef(null),
        [nW, nZ] = l.useState(null),
        nq = t0 && null == nW;
    l.useEffect(() => {
        if (!nq) return;
        let e = window.setTimeout(() => {
            let e = nc.current?.getBoundingClientRect().width ?? 0;
            nZ(e > 0 ? e : 1 / 0);
        }, Z);
        return () => window.clearTimeout(e);
    }, [nq]);
    let nJ = l.useMemo(() => {
            if (!t0 || null == nW) return 0;
            let e = (0, L.ZH)(n$, ez, !0).config,
                t = {
                    showSkipButtons: !nQ,
                    showInlineVolumeSlider: !t5,
                    trailingButtonCount: nV,
                    showPlaybackSpeedBtn: !0 !== nH,
                    showFullScreenBtn: !eO,
                },
                n = [t, { ...t, showInlineVolumeSlider: !1 }, { ...t, showInlineVolumeSlider: !1, compactTime: !0 }],
                r = n.findIndex((t) => nW >= (0, L.Dq)(e, t, nM));
            return -1 === r ? n.length : r;
        }, [t0, nW, n$, ez, nQ, t5, nV, nH, eO, nM]),
        [n0, n1] = l.useState(t0);
    t0 !== n0 && (n1(t0), nZ(null));
    let n2 = t0 ? nJ >= 1 : t7,
        n6 = t0 ? nJ >= 2 : eG || nU,
        n4 = nQ || (t0 && nJ >= 3),
        n8 = (0, y.A)((e) => {
            let t = e.contentRect.width;
            if (!(t <= 0)) {
                if (t0) {
                    let e = nz.current;
                    null != e && (0, C._U)(e) && nZ(t);
                    return;
                }
                ((nF.current = t), t6(t < 400), eY && t8(t < 240), nY());
            }
        }),
        n9 = eX || eH || eY || t0;
    (0, b.g)(nc, n8, [], { enabled: n9, fireOnMount: n9 });
    let n3 = nO.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        nf.current && (nf.current = !1);
    });
    let n7 = (0, y.A)(() => {
            if (null == ns.current) return;
            let e = eE?.() ?? tW,
                t = eb?.() ?? tq;
            (e !== tW && tZ(e), t !== tq && tJ(t), (ns.current.muted = t), (ns.current.volume = t ? 0 : e));
        }),
        n5 = (0, y.A)(() => {
            (tY || n7(), tz(!0));
        }),
        re = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tO.current = !0), th(e), ef?.(e, t), null != ns.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            (nh(null), n5(), ns.current.play());
                            break;
                        case d.Q6.PAUSED:
                            ((t_.current = !1), ns.current.pause(), (tH.current = !1));
                            break;
                        case d.Q6.ENDED:
                            nl(!1);
                    }
            },
            [ef, n5],
        );
    (l.useEffect(() => {
        if (!eq) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && tm && !td,
            r = tc && !ts;
        if ((e || n || r) && null != ns.current && tp === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (nh(t), re(d.Q6.PAUSED, t));
        }
    }, [eq, t, ts, tc, td, tm, tp, re]),
        (0, G.A)({
            videoRef: nE,
            enabled: eq,
            onPipPause: () => {
                (nh(d.KB.PICTURE_IN_PICTURE), re(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (nh(d.KB.FOCUS), re(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            tc && eN?.(ts, tp);
        }, [ts, tc, tp, eN]),
        l.useEffect(() => {
            tm && eA?.(td, tp);
        }, [td, tm, tp, eA]));
    let [rt, rn] = l.useState(!1),
        rr = l.useRef(null),
        rl = l.useRef(0);
    l.useLayoutEffect(() => {
        rl.current = performance.now();
    }, []);
    let ra = l.useCallback(() => {
            switch ((null != rr.current && clearTimeout(rr.current), tp)) {
                case d.Q6.PLAYING:
                    rr.current = setTimeout(
                        () => {
                            rn(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - rl.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [tp]),
        ri = l.useCallback(() => {
            (rn(!1), (rl.current = performance.now()), ra());
        }, [ra]);
    function ru() {
        (tv || tx(!0), ri());
    }
    (l.useEffect(() => {
        if (tp !== d.Q6.PLAYING) {
            (rn(!1), null != rr.current && clearTimeout(rr.current));
            return;
        }
        return (
            ra(),
            () => {
                null != rr.current && clearTimeout(rr.current);
            }
        );
    }, [tp, ra]),
        l.useEffect(
            () => () => {
                null != tT.current && clearTimeout(tT.current);
            },
            [],
        ));
    let ro = tb && no,
        rs = tp === d.Q6.ENDED,
        rc = ro || ((tb || tv || rs) && !rt);
    function rd() {
        ty(!0);
    }
    function rm(e) {
        ((0, o.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || ty(!1);
    }
    let rf = l.useRef(!1);
    l.useEffect(() => {
        (rf.current && !ro && ri(), (rf.current = ro));
    }, [ro, ri]);
    let rp = l.useRef(ep);
    function rh() {
        return (0, C.qf)(nc.current, nE.current);
    }
    rp.current = ep;
    let rv = (0, y.A)(() => {
        let e = nz.current;
        if (null == e) return;
        if ((0, C._U)(e)) {
            let e = nc.current?.getBoundingClientRect().width ?? 0;
            e > 0 && nZ(e);
            return;
        }
        (e.removeEventListener(C.Wb, rv), (nz.current = null), t1(!1), rp.current?.(!1));
        let t = nE.current;
        if (e !== t) return;
        t.muted !== tq && rj(t.muted);
        let n = t.ended ? d.Q6.ENDED : t.paused ? d.Q6.PAUSED : d.Q6.PLAYING;
        n !== tp && re(n, d.KB.USER);
    });
    function rx() {
        null == ns.current ||
            (rE(Math.max((tD.current ?? ns.current.currentTime) - 10, 0)),
            tp === d.Q6.ENDED && re(d.Q6.PAUSED, d.KB.SEEK));
    }
    function rg() {
        if (null == ns.current) return;
        let e = Math.min((tD.current ?? ns.current.currentTime) + 10, nB);
        (rE(e), tp !== d.Q6.ENDED && e >= ns.current.duration && re(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(
        () => () => {
            nz.current?.removeEventListener(C.Wb, rv);
        },
        [rv],
    );
    let rE = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == ns.current) return;
            let n = ns.current.currentTime;
            ((tD.current = e),
                tP((e / (ns.current.duration ?? 1)) * 100),
                tL(!0),
                null != tT.current && clearTimeout(tT.current),
                (tT.current = setTimeout(() => {
                    (tL(!1), (tT.current = null));
                }, 100)),
                (tj.current = !0),
                (ns.current.currentTime = e),
                t && eR?.(n, e));
        },
        [eR],
    );
    function rb() {
        if (null != ns.current)
            switch (tp) {
                case d.Q6.ENDED:
                    (rE(0), re(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nh(d.KB.USER), re(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    re(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function ry(e) {
        null != eD ? eD(e) : (tz(!0), rb());
    }
    let rS = (0, y.A)(() => {
        let e = ns.current?.duration;
        null != e && e > 0 && isFinite(e) && nj(e);
    });
    l.useEffect(() => {
        let e = ns.current;
        if (null != e && eH)
            return (e.addEventListener("durationchange", rS), () => e.removeEventListener("durationchange", rS));
    }, [eH, rS]);
    let rC = l.useCallback(() => {
        if (null == ns.current || 0 === ns.current.textTracks.length) return;
        let e = ns.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, U.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        nL(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            nL((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function rw(e) {
        if (null != ns.current) {
            if (tk === d.h$.BUFFERING) {
                let e = null != tX.current ? performance.now() - tX.current : null;
                eP?.(e);
            } else if (tk === d.h$.LOADING) {
                let e = null != tV.current ? performance.now() - tV.current : null;
                eS?.(e);
            }
            (tM(d.h$.READY), tp === d.Q6.PLAYING && (t_.current || re(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function rP(e) {
        if ((rE(e), tp === d.Q6.ENDED && !t$.current)) {
            let t = ns.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && re(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == nm.current) return;
        let e = nm.current;
        return (
            e.addEventListener("load", rC),
            () => {
                null != e && e.removeEventListener("load", rC);
            }
        );
    }, [rC]);
    let [{ controlBarAnimSpring: rN }, rA] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: q,
            onStart: () => {
                tG(!1);
            },
            onRest: () => {
                tG(!0);
            },
            onChange: {
                controlBarAnimSpring: (e) => {
                    1 === e && tG(!0);
                },
            },
        })),
        rR = (0, l.useRef)(null),
        [{ captionHeightSpring: rL }, rT] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: q }));
    (l.useEffect(
        () => (
            rT({
                captionHeightSpring: na && null != nR ? (rR.current?.clientHeight ?? 0) : 0,
                default: { immediate: nu },
            }),
            () => {
                rL.stop();
            }
        ),
        [na, rT, nu, nR, rL],
    ),
        l.useEffect(
            () => (
                rA({ controlBarAnimSpring: rc || tF ? 1 : 0, default: { immediate: nu } }),
                () => {
                    rN.stop();
                }
            ),
            [rc, rA, nu, tF, rN],
        ));
    let rk = tp === d.Q6.ENDED && null != ed,
        rM = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != ns.current && (rE(0), re(d.Q6.PLAYING, e));
            },
            [rE, re],
        );
    function rj(e) {
        (tJ(e), ev?.(e));
    }
    let rD = l.useRef(null),
        rI = l.useCallback(
            (e) => {
                (ri(), rD.current?.(e.nativeEvent));
            },
            [ri],
        );
    l.useImperativeHandle(
        ta,
        () => ({
            play: () => {
                re(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                re(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                rE(e);
            },
        }),
        [re, rE],
    );
    let rB = {
            ref: l.useCallback(
                (e) => {
                    ns.current = e;
                    let t = (0, _.c)(e);
                    ((tf.current = t), "function" == typeof ti ? ti(t) : null != ti && (ti.current = t));
                },
                [ti, tf],
            ),
            alt: J,
            playsInline: !0,
            mediaLayoutType: t0 ? X.d.STATIC : X.d.RESPONSIVE,
            className: i()({ [z.R]: rk, [z.IR]: !0, [z.FP]: "cover" === te && !t0 }),
            controls: !1,
            poster: et,
            preload: tY ? eI : tg ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != ns.current &&
                    (ea?.(ns.current.currentTime, ns.current.duration),
                    tj.current || tN((ns.current.currentTime / ns.current.duration) * 100));
            },
            onEnded: function (e) {
                (tM(d.h$.READY), ei?.(), t$.current || re(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tk === d.h$.LOADING) {
                    let e = null != tV.current ? performance.now() - tV.current : null;
                    (eS?.(e), tM(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == ns.current) return;
                (el > 0 && !nw && rE(el, !1), n7());
                let t = ns.current.duration;
                (t > 0 && isFinite(t) && nk(t), rS(), nI(!0));
            },
            onLoadStart: function () {
                ((tV.current = performance.now()), ey?.());
            },
            onPlaying: function () {
                tH.current && (eC?.(performance.now()), (tH.current = !1));
            },
            onWaiting: function (e) {
                ((tX.current = performance.now()), ew?.(), tM(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == ns.current) return;
                let t = [];
                for (let e = 0; e < ns.current.buffered.length; e++) {
                    let n = ns.current.buffered.start(e),
                        r = ns.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / ns.current.duration, size: (r - n) / ns.current.duration });
                }
                tB(t);
            },
            onCanPlay: rw,
            onCanPlayThrough: rw,
            onSeeked: function () {
                ((tj.current = !1),
                    (tD.current = null),
                    null != ns.current && tN((ns.current.currentTime / ns.current.duration) * 100));
            },
            onAbort: function () {
                return nC(d.SB.ABORT);
            },
            onError: function () {
                return nC(d.SB.ERROR);
            },
            onEmptied: function () {
                return nC(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nC(d.SB.STALLED);
            },
            onClick: ry,
            crossOrigin: e7 ?? void 0,
            src: nw || nA ? null : (tu ?? null),
            onSourceError: function () {
                return nC(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tF,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != es &&
                        (0, r.jsx)("track", {
                            ref: nm,
                            src: es,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != e8 && (0, r.jsx)("track", { ref: nv, src: e8, kind: "metadata" }),
                ],
            }),
        },
        rF = (0, r.jsx)(M, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: t0 ? j : void 0,
                isFullscreen: t0,
                videoRef: ns,
                isActive: tY,
                controlBarConfig: nO,
                isControlBarExpanded: rc,
                children: (0, r.jsx)(p.D, {
                    className: i()(z.W6, I.i.blurple, { [z.nZ]: !tY }),
                    style: { minWidth: tt, minHeight: tn },
                    "data-fullscreen": t0,
                    "data-dvp-controls-visible": rc || tF,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tY ? -1 : 0,
                    focusProps: tY ? void 0 : { ringTarget: tA },
                    onMouseEnter: function () {
                        (tx(!0),
                            rn(!1),
                            er && tE(!0),
                            (rl.current = performance.now()),
                            null != rr.current && clearTimeout(rr.current));
                    },
                    onMouseLeave: function () {
                        (tx(!1), rn(!1));
                    },
                    "aria-label": tY ? void 0 : Y.intl.string(Y.t.RscU7I),
                    onClick: tY ? void 0 : ry,
                    onKeyDown: function (e) {
                        e.key !== d.TJ.SPACE ||
                            (e.target !== e.currentTarget && e.target !== nc.current) ||
                            (e.preventDefault(), tY || e.repeat || (ri(), tz(!0), rb()));
                    },
                    onPointerDown: ru,
                    onMouseMove: ru,
                    children: (0, r.jsxs)("div", {
                        ref: nc,
                        className: i()(z.NS, { [z.DO]: "portrait" === a, [z.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: rI,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nO.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${nO.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${nO.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nO.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${nO.midGroupGapPx}px`,
                            "--custom-duration-margin": `${nO.durationMarginPx}px`,
                            "--custom-playhead-size": `${nO.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${nO.timelineHitboxOffsetPx}px`,
                            "--custom-dvp-timeline-row-gap": nK === d.oA.LG ? "var(--space-6)" : "var(--space-4)",
                            "--custom-volume-slider-margin-start": `${nO.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${nO.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${nO.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": nO.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != nO.trailingGroupWidthPx ? `${nO.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tY && e5 && !nu && (0, r.jsx)("canvas", { ref: nd, className: z.Xm }),
                            rk && ed?.({ replay: rM }),
                            em(rB),
                            tk !== d.h$.READY &&
                                tp === d.Q6.PLAYING &&
                                null != tu &&
                                (0, r.jsx)("span", {
                                    className: i()(z.S, { [z.F]: "center" === e3 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(K.A, {
                                message: to({ hasVideoAsset: null != tu, playerState: tp, pauseReason: np }),
                                showOverlay: null == tu,
                            }),
                            nb &&
                                null != ny &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(W, { stats: ny, onClose: nS }),
                                }),
                            null != eT &&
                                (0, r.jsx)(u.animated.div, {
                                    className: z.MU,
                                    style: {
                                        opacity: (0, u.to)([rN.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([rN.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([rN.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eT(),
                                }),
                            tY &&
                                null != eK &&
                                (0, r.jsx)("div", {
                                    className: z.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: rd,
                                    onBlur: rm,
                                    children: eK({ visible: rc, animSpring: rN, size: nK }),
                                }),
                            nr &&
                                tp !== d.Q6.ENDED &&
                                null != ec &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (tp === d.Q6.PAUSED && re(d.Q6.PLAYING, d.KB.USER), nl(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: z.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()(z.xr, eM, { [z.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [rN, rL],
                                                    (e, t) => `${e * nO.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(F.X, {
                                                text: ec,
                                                onClose: function () {
                                                    nl(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tY &&
                                (0, r.jsx)(u.animated.div, {
                                    className: z.Jp,
                                    style: {
                                        opacity: (0, u.to)([rN.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(z.yf, {
                                        [z.ZH]: tO.current && tp === d.Q6.PLAYING,
                                        [z.v7]: tO.current && tp === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tp === d.Q6.PLAYING
                                            ? (0, r.jsx)(v.PlayIcon, { className: z.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: z.PK }),
                                },
                                tp,
                            ),
                            na &&
                                null != nR &&
                                !rk &&
                                (0, r.jsx)(u.animated.div, {
                                    className: z.o$,
                                    ref: rR,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [rN.to({ range: [0, 1], output: [-n3, -nO.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-lg/semibold",
                                        color: "text-overlay-light",
                                        className: z.qh,
                                        children: nR.text,
                                    }),
                                }),
                            tY &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: z.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [rN.to({ range: [0, 1], output: [0, nO.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: rd,
                                    onBlur: rm,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            className: z.oB,
                                            style: {
                                                opacity: (0, u.to)([rN], (e) => `${eJ ? 1 : e}`),
                                                visibility:
                                                    eJ || rc || tF
                                                        ? void 0
                                                        : rN.to((e) => (0 === e ? "hidden" : "visible")),
                                                transform: (0, u.to)(
                                                    [rN.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * n3}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.Ay, {
                                                percent: null != tw ? tw : tS,
                                                animate:
                                                    !0 !== nf.current &&
                                                    !tR &&
                                                    tp === d.Q6.PLAYING &&
                                                    nD &&
                                                    tk === d.h$.READY,
                                                interactionEnabled: tQ && nB > 0,
                                                backgroundColor: rc || eJ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: tp,
                                                preloadedBuffers: rc ? tI : void 0,
                                                durationSec: nT > 0 ? nT : +!nD,
                                                isFullyVisible: rc && tQ,
                                                maxSeekableTime: null != eo && nB > 0 ? nB : void 0,
                                                progressClassName: eZ,
                                                persistPlayhead: e0,
                                                onClick: rP,
                                                onScrubBack: rx,
                                                onScrubForward: rg,
                                                onDragStateChange: function (e) {
                                                    if (((t$.current = e), eL?.(e), tU(e), e))
                                                        ((t_.current = tp === d.Q6.PLAYING),
                                                            (tK.current = tp === d.Q6.ENDED),
                                                            t_.current
                                                                ? ns.current?.pause()
                                                                : tK.current && re(d.Q6.PAUSED, d.KB.SEEK));
                                                    else {
                                                        let e = ns.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        t_.current
                                                            ? ((t_.current = !1),
                                                              t ? re(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : tK.current
                                                              ? ((tK.current = !1),
                                                                t
                                                                    ? re(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : re(d.Q6.PLAYING, d.KB.USER))
                                                              : t && re(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: e4,
                                                scrubPreviewCues: nx,
                                                onIndicatorSeek: rP,
                                                getCurrentTimeSec: ng,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: z.EG,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                visibility: nq ? "hidden" : void 0,
                                                paddingTop: (0, u.to)(
                                                    [rN.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * n3}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [rN.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * n3}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [rN.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: tp,
                                                animSpring: rN,
                                                visible: rc,
                                                seekForwardEnabled:
                                                    null == eo || (ns.current?.currentTime ?? 0) + 1 < nB,
                                                hideCaptionBtn: null == es,
                                                hideTranscriptBtn: null == ec,
                                                hideFullScreenBtn: eO,
                                                hidePlaybackSpeedBtn: nH,
                                                hideSkipButtons: n4,
                                                compactTimeDisplay: n6,
                                                size: nK,
                                                downloadUrl: eB,
                                                downloadContentType: eU,
                                                extraButtons: e_,
                                                expandButton: nG,
                                                autoFocus: e1,
                                                keyDownHandlerRef: rD,
                                                volume: tW,
                                                muted: tq,
                                                transcriptEnabled: nr,
                                                captionEnabled: na,
                                                handlePlaybackBtnClick: rb,
                                                handleTranscriptBtnClick: function () {
                                                    nl(!nr);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    ni(!na);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !t0;
                                                    if (e) {
                                                        let e = rh();
                                                        if (null == e) return;
                                                        try {
                                                            (0, C.tl)(e);
                                                        } catch {
                                                            return;
                                                        }
                                                        ((nz.current = e), e.addEventListener(C.Wb, rv), ep?.(!0));
                                                    } else {
                                                        let e = nz.current ?? rh();
                                                        ((nz.current = null),
                                                            null != e &&
                                                                (e.removeEventListener(C.Wb, rv),
                                                                ep?.(!1),
                                                                (0, C.sP)(e)));
                                                    }
                                                    t1(e);
                                                },
                                                handleSeekBackBtnClick: rx,
                                                handleSeekForwardBtnClick: rg,
                                                autoHideVolumeSlider: ne,
                                                floatingVolumeSlider: n2,
                                                hideVolumeSlider: t5,
                                                handleControlBarPendingInteraction: tU,
                                                onVolumeChange: function (e) {
                                                    (tZ(e), eh?.(e));
                                                },
                                                onMutedChange: rj,
                                                onVolumeExpandedChange: function (e) {
                                                    nn(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != ek &&
                                (0, r.jsx)("div", {
                                    className: z.MU,
                                    children: ek({
                                        playerState: tp,
                                        isControlBarExpanded: rc,
                                        controlBarAnimationSpring: rN,
                                        videoRef: ns,
                                        isActive: tY,
                                        isVolumeExpanded: nt,
                                    }),
                                }),
                            !tY &&
                                (0, r.jsx)("div", {
                                    className: z.mF,
                                    ref: tA,
                                    children: (0, r.jsx)(v.PlayIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: z.z_,
                                    }),
                                }),
                            (0, r.jsx)(k, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(s.Jh, { enabled: t0, children: rF });
}
