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
    u = n(156150),
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
    X = n(953584),
    H = n(338659),
    V = n(838541),
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
            autoCompactTimeDisplay: eX = !1,
            hidePlaybackSpeedBtn: eH = !1,
            autoSizeControlBar: eV = !1,
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
        tR = l.useRef(null),
        tL = l.useRef(null),
        [tT, tk] = l.useState(!1),
        tM = l.useRef(null),
        [tj, tD] = l.useState(d.h$.LOADING),
        tI = l.useRef(!1),
        tB = l.useRef(null),
        [tF, tU] = l.useState([]),
        [t_, t$] = l.useState(!1),
        tK = l.useRef(!1),
        tO = l.useRef(!1),
        tQ = l.useRef(!1),
        tG = l.useRef(!1),
        [tX, tH] = l.useState(!0),
        tV = l.useRef(!0),
        tY = l.useRef(null),
        tz = l.useRef(null),
        [tW, tZ] = l.useState(n || en),
        [tq, tJ] = l.useState(ex),
        [t0, t1] = l.useState(eg),
        [t2, t6] = l.useState(!1),
        [t4, t8] = l.useState(!1),
        [t9, t3] = l.useState(!1),
        t7 = eY && t4 && !t2,
        t5 = eY && t9 && !t2,
        ne = e6 || t7,
        nt = (function () {
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
        nn = e2 || ne,
        [nr, nl] = l.useState(!nn),
        [na, ni] = l.useState(!1),
        [nu, no] = l.useState(!1),
        ns = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        nc = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        nd = (0, l.useRef)(null),
        nm = (0, l.useRef)(null),
        nf = (0, l.useRef)(null),
        np = (0, l.useRef)(null),
        nh = l.useRef(!0),
        [nv, nx] = l.useState(null),
        ng = l.useRef(null),
        nE = (0, D.z5)(tW, ng, e8, e9),
        nb = l.useCallback(() => nd.current?.currentTime ?? null, []),
        ny = l.useMemo(
            () => ({
                get current() {
                    return (0, _.c)(nd.current);
                },
            }),
            [],
        );
    (0, Q.A)({ videoRef: ny, canvasRef: nf, enabled: tW && e5 && !ns, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nS,
            videoStats: nC,
            onCloseStats: nw,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                a = null != n && "" !== n,
                i = (0, c.bG)([X.Ay], () => !!a && X.Ay.isVideoStatsEnabled(n)),
                [u, o] = l.useState(null);
            return (
                l.useEffect(() => {
                    if (!i) return;
                    let e = t.current;
                    if (null == e) {
                        a && (0, X.Vh)(n, !1);
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
                        a && (0, X.ke)(n);
                    },
                    [n, a],
                ),
                {
                    showStats: i,
                    videoStats: i ? u : null,
                    onCloseStats: l.useCallback(() => {
                        a && (0, X.Vh)(n, !1);
                    }, [n, a]),
                }
            );
        })({ videoRef: nd, src: tu, fileSizeBytes: eF }),
        nP = l.useCallback(
            (e, t) => {
                eu?.(e, t);
            },
            [eu],
        ),
        { isHlsActive: nN, hls: nA } = (function (e, t) {
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
        })(ny, { src: tu, initialTimeSec: el, onError: nP, onHlsInstance: ej, crossOrigin: e7 }),
        { isReady: nR } = (0, N.A)({ videoRef: ny, hls: nA, contentMetadata: tr, isHls: nN }),
        nL = tl && !nR && !nN,
        [nT, nk] = l.useState(null),
        [nM, nj] = l.useState(0),
        [nD, nI] = l.useState(0),
        [nB, nF] = l.useState(!1),
        nU = eo ?? nd.current?.duration ?? 0,
        n_ = l.useRef(null),
        [n$, nK] = l.useState(!1),
        nO = (eV || eY) && t4 ? d.oA.SM : d.oA.MD,
        { size: nQ, config: nG } = l.useMemo(() => (0, L.ZH)(nO, ez, t2), [nO, ez, t2]),
        nX = (eQ ?? "portrait" === a) || t5,
        nH = t5 ? void 0 : e$,
        nV = !1 !== eH ? eH : !!t5 && "inline",
        nY = (0, L.eD)({
            hideTranscriptBtn: null == ec,
            hideCaptionBtn: null == es,
            hasDownloadBtn: null != eB,
            extraButtonCount: e_?.length ?? 0,
        }),
        nz = l.useMemo(
            () =>
                eX
                    ? (0, L.Dq)(
                          (0, L.ZH)(nO, ez).config,
                          {
                              showSkipButtons: !nX,
                              showInlineVolumeSlider: !ne && !nt,
                              trailingButtonCount: nY + +(null != nH),
                              showPlaybackSpeedBtn: !1 === nV,
                              showFullScreenBtn: !eO,
                          },
                          nD,
                      )
                    : null,
            [eX, nO, ez, nX, ne, nt, nY, nH, nV, eO, nD],
        ),
        nW = (0, y.A)(() => {
            let e = n_.current;
            nK(null != e && null != nz && e < nz);
        });
    l.useLayoutEffect(nW, [nz, nW]);
    let nZ = l.useRef(null),
        [nq, nJ] = l.useState(null),
        n0 = t2 && null == nq;
    l.useEffect(() => {
        if (!n0) return;
        let e = window.setTimeout(() => {
            let e = nm.current?.getBoundingClientRect().width ?? 0;
            nJ(e > 0 ? e : 1 / 0);
        }, Z);
        return () => window.clearTimeout(e);
    }, [n0]);
    let n1 = l.useMemo(() => {
            if (!t2 || null == nq) return 0;
            let e = (0, L.ZH)(nO, ez, !0).config,
                t = {
                    showSkipButtons: !nX,
                    showInlineVolumeSlider: !nt,
                    trailingButtonCount: nY,
                    showPlaybackSpeedBtn: !0 !== nV,
                    showFullScreenBtn: !eO,
                },
                n = [t, { ...t, showInlineVolumeSlider: !1 }, { ...t, showInlineVolumeSlider: !1, compactTime: !0 }],
                r = n.findIndex((t) => nq >= (0, L.Dq)(e, t, nD));
            return -1 === r ? n.length : r;
        }, [t2, nq, nO, ez, nX, nt, nY, nV, eO, nD]),
        [n2, n6] = l.useState(t2);
    t2 !== n2 && (n6(t2), nJ(null));
    let n4 = t2 ? n1 >= 1 : ne,
        n8 = t2 ? n1 >= 2 : eG || n$,
        n9 = nX || (t2 && n1 >= 3),
        n3 = (0, y.A)((e) => {
            let t = e.contentRect.width;
            if (!(t <= 0)) {
                if (t2) {
                    let e = nZ.current;
                    null != e && (0, C._U)(e) && nJ(t);
                    return;
                }
                ((n_.current = t), t8(t < 400), eY && t3(t < 240), nW());
            }
        }),
        n7 = eV || eX || eY || t2;
    (0, b.g)(nm, n3, [], { enabled: n7, fireOnMount: n7 });
    let n5 = nG.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        nh.current && (nh.current = !1);
    });
    let re = (0, y.A)(() => {
            if (null == nd.current) return;
            let e = eE?.() ?? tq,
                t = eb?.() ?? t0;
            (e !== tq && tJ(e), t !== t0 && t1(t), (nd.current.muted = t), (nd.current.volume = t ? 0 : e));
        }),
        rt = (0, y.A)(() => {
            (tW || re(), tZ(!0));
        }),
        rn = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tG.current = !0), th(e), ef?.(e, t), null != nd.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            (nx(null), rt(), nd.current.play());
                            break;
                        case d.Q6.PAUSED:
                            ((tK.current = !1), nd.current.pause(), (tV.current = !1));
                            break;
                        case d.Q6.ENDED:
                            ni(!1);
                    }
            },
            [ef, rt],
        );
    (l.useEffect(() => {
        if (!eq) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && tm && !td,
            r = tc && !ts;
        if ((e || n || r) && null != nd.current && tp === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (nx(t), rn(d.Q6.PAUSED, t));
        }
    }, [eq, t, ts, tc, td, tm, tp, rn]),
        (0, G.A)({
            videoRef: ny,
            enabled: eq,
            onPipPause: () => {
                (nx(d.KB.PICTURE_IN_PICTURE), rn(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (nx(d.KB.FOCUS), rn(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            tc && eN?.(ts, tp);
        }, [ts, tc, tp, eN]),
        l.useEffect(() => {
            tm && eA?.(td, tp);
        }, [td, tm, tp, eA]));
    let [rr, rl] = l.useState(!1),
        ra = l.useRef(null),
        ri = l.useRef(0);
    l.useLayoutEffect(() => {
        ri.current = performance.now();
    }, []);
    let ru = l.useCallback(() => {
            switch ((null != ra.current && clearTimeout(ra.current), tp)) {
                case d.Q6.PLAYING:
                    ra.current = setTimeout(
                        () => {
                            rl(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - ri.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [tp]),
        ro = l.useCallback(() => {
            (rl(!1), (ri.current = performance.now()), ru());
        }, [ru]);
    function rs() {
        (tv || tx(!0), ro());
    }
    (l.useEffect(() => {
        if (tp !== d.Q6.PLAYING) {
            (rl(!1), null != ra.current && clearTimeout(ra.current));
            return;
        }
        return (
            ru(),
            () => {
                null != ra.current && clearTimeout(ra.current);
            }
        );
    }, [tp, ru]),
        l.useEffect(
            () => () => {
                null != tM.current && clearTimeout(tM.current);
            },
            [],
        ));
    let rc = tb && nc,
        rd = tp === d.Q6.ENDED,
        rm = rc || ((tb || tv || rd) && !rr);
    function rf() {
        ty(!0);
    }
    function rp(e) {
        ((0, o.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || ty(!1);
    }
    let rh = l.useRef(!1);
    l.useEffect(() => {
        (rh.current && !rc && ro(), (rh.current = rc));
    }, [rc, ro]);
    let rv = l.useRef(ep);
    function rx() {
        return (0, C.qf)(nm.current, ny.current);
    }
    rv.current = ep;
    let rg = (0, y.A)(() => {
        let e = nZ.current;
        if (null == e) return;
        if ((0, C._U)(e)) {
            let e = nm.current?.getBoundingClientRect().width ?? 0;
            e > 0 && nJ(e);
            return;
        }
        (e.removeEventListener(C.Wb, rg), (nZ.current = null), t6(!1), rv.current?.(!1));
        let t = ny.current;
        if (e !== t) return;
        t.muted !== t0 && rF(t.muted);
        let n = t.ended ? d.Q6.ENDED : t.paused ? d.Q6.PAUSED : d.Q6.PLAYING;
        n !== tp && rn(n, d.KB.USER);
    });
    function rE() {
        null == nd.current ||
            (ry(Math.max((tB.current ?? nd.current.currentTime) - 10, 0)),
            tp === d.Q6.ENDED && rn(d.Q6.PAUSED, d.KB.SEEK));
    }
    function rb() {
        if (null == nd.current) return;
        let e = Math.min((tB.current ?? nd.current.currentTime) + 10, nU);
        (ry(e), tp !== d.Q6.ENDED && e >= nd.current.duration && rn(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(
        () => () => {
            nZ.current?.removeEventListener(C.Wb, rg);
        },
        [rg],
    );
    let ry = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == nd.current) return;
            let n = nd.current.currentTime;
            ((tB.current = e),
                tP((e / (nd.current.duration ?? 1)) * 100),
                tk(!0),
                null != tM.current && clearTimeout(tM.current),
                (tM.current = setTimeout(() => {
                    (tk(!1), (tM.current = null));
                }, 100)),
                (tI.current = !0),
                (nd.current.currentTime = e),
                t && eR?.(n, e));
        },
        [eR],
    );
    function rS() {
        if (null != nd.current)
            switch (tp) {
                case d.Q6.ENDED:
                    (ry(0), rn(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nx(d.KB.USER), rn(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    rn(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function rC() {
        (tZ(!0), rS());
    }
    function rw(e, t) {
        return (
            e === ny.current ||
            (!tW && (e === t || e === nm.current || ((0, o.vq)(e, Node) && tL.current?.contains(e))))
        );
    }
    function rP(e) {
        null != eD ? eD(e) : rC();
    }
    let rN = (0, y.A)(() => {
        let e = nd.current?.duration;
        null != e && e > 0 && isFinite(e) && nI(e);
    });
    l.useEffect(() => {
        let e = nd.current;
        if (null != e && eX)
            return (e.addEventListener("durationchange", rN), () => e.removeEventListener("durationchange", rN));
    }, [eX, rN]);
    let rA = l.useCallback(() => {
        if (null == nd.current || 0 === nd.current.textTracks.length) return;
        let e = nd.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, U.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        nk(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            nk((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function rR(e) {
        if (null != nd.current) {
            if (tj === d.h$.BUFFERING) {
                let e = null != tz.current ? performance.now() - tz.current : null;
                eP?.(e);
            } else if (tj === d.h$.LOADING) {
                let e = null != tY.current ? performance.now() - tY.current : null;
                eS?.(e);
            }
            (tD(d.h$.READY), tp === d.Q6.PLAYING && (tK.current || rn(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function rL(e) {
        if ((ry(e), tp === d.Q6.ENDED && !tO.current)) {
            let t = nd.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && rn(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == np.current) return;
        let e = np.current;
        return (
            e.addEventListener("load", rA),
            () => {
                null != e && e.removeEventListener("load", rA);
            }
        );
    }, [rA]);
    let [{ controlBarAnimSpring: rT }, rk] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: q,
            onStart: () => {
                tH(!1);
            },
            onRest: () => {
                tH(!0);
            },
            onChange: {
                controlBarAnimSpring: (e) => {
                    1 === e && tH(!0);
                },
            },
        })),
        rM = (0, l.useRef)(null),
        [{ captionHeightSpring: rj }, rD] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: q }));
    (l.useEffect(
        () => (
            rD({
                captionHeightSpring: nu && null != nT ? (rM.current?.clientHeight ?? 0) : 0,
                default: { immediate: ns },
            }),
            () => {
                rj.stop();
            }
        ),
        [nu, rD, ns, nT, rj],
    ),
        l.useEffect(
            () => (
                rk({ controlBarAnimSpring: rm || t_ ? 1 : 0, default: { immediate: ns } }),
                () => {
                    rT.stop();
                }
            ),
            [rm, rk, ns, t_, rT],
        ));
    let rI = tp === d.Q6.ENDED && null != ed,
        rB = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != nd.current && (ry(0), rn(d.Q6.PLAYING, e));
            },
            [ry, rn],
        );
    function rF(e) {
        (t1(e), ev?.(e));
    }
    let rU = l.useRef(null),
        r_ = (0, y.A)(rS),
        r$ = l.useCallback(
            (e) => {
                (ro(), rU.current?.(e.nativeEvent));
            },
            [ro],
        );
    l.useImperativeHandle(
        ta,
        () => ({
            play: () => {
                rn(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                rn(d.Q6.PAUSED, d.KB.USER);
            },
            togglePlayback: () => {
                r_();
            },
            seek: (e) => {
                ry(e);
            },
        }),
        [rn, ry, r_],
    );
    let rK = {
            ref: l.useCallback(
                (e) => {
                    nd.current = e;
                    let t = (0, _.c)(e);
                    ((tf.current = t), "function" == typeof ti ? ti(t) : null != ti && (ti.current = t));
                },
                [ti, tf],
            ),
            alt: J,
            playsInline: !0,
            mediaLayoutType: t2 ? V.d.STATIC : V.d.RESPONSIVE,
            className: i()({ [z.R]: rI, [z.IR]: !0, [z.FP]: "cover" === te && !t2 }),
            controls: !1,
            poster: et,
            preload: tW ? eI : tg ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != nd.current &&
                    (ea?.(nd.current.currentTime, nd.current.duration),
                    tI.current || tN((nd.current.currentTime / nd.current.duration) * 100));
            },
            onEnded: function (e) {
                (tD(d.h$.READY), ei?.(), tO.current || rn(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tj === d.h$.LOADING) {
                    let e = null != tY.current ? performance.now() - tY.current : null;
                    (eS?.(e), tD(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == nd.current) return;
                (el > 0 && !nN && ry(el, !1), re());
                let t = nd.current.duration;
                (t > 0 && isFinite(t) && nj(t), rN(), nF(!0));
            },
            onLoadStart: function () {
                ((tY.current = performance.now()), ey?.());
            },
            onPlaying: function () {
                tV.current && (eC?.(performance.now()), (tV.current = !1));
            },
            onWaiting: function (e) {
                ((tz.current = performance.now()), ew?.(), tD(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == nd.current) return;
                let t = [];
                for (let e = 0; e < nd.current.buffered.length; e++) {
                    let n = nd.current.buffered.start(e),
                        r = nd.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / nd.current.duration, size: (r - n) / nd.current.duration });
                }
                tU(t);
            },
            onCanPlay: rR,
            onCanPlayThrough: rR,
            onSeeked: function () {
                ((tI.current = !1),
                    (tB.current = null),
                    null != nd.current && tN((nd.current.currentTime / nd.current.duration) * 100));
            },
            onAbort: function () {
                return nP(d.SB.ABORT);
            },
            onError: function () {
                return nP(d.SB.ERROR);
            },
            onEmptied: function () {
                return nP(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nP(d.SB.STALLED);
            },
            onClick: rP,
            crossOrigin: e7 ?? void 0,
            src: nN || nL ? null : (tu ?? null),
            onSourceError: function () {
                return nP(d.SB.SOURCE_ERROR);
            },
            isScrubbing: t_,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != es &&
                        (0, r.jsx)("track", {
                            ref: np,
                            src: es,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != e8 && (0, r.jsx)("track", { ref: ng, src: e8, kind: "metadata" }),
                ],
            }),
        },
        rO = (0, r.jsx)(M, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: t2 ? j : void 0,
                isFullscreen: t2,
                videoRef: nd,
                isActive: tW,
                controlBarConfig: nG,
                isControlBarExpanded: rm,
                children: (0, r.jsx)(p.D, {
                    className: i()(z.W6, I.i.blurple, { [z.nZ]: !tW }),
                    style: { minWidth: tt, minHeight: tn },
                    "data-fullscreen": t2,
                    "data-dvp-controls-visible": rm || t_,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tW ? -1 : 0,
                    focusProps: tW ? void 0 : { ringTarget: tL },
                    onMouseEnter: function () {
                        (tx(!0),
                            rl(!1),
                            er && tE(!0),
                            (ri.current = performance.now()),
                            null != ra.current && clearTimeout(ra.current));
                    },
                    onMouseLeave: function () {
                        (tx(!1), rl(!1));
                    },
                    "aria-label": tW ? void 0 : Y.intl.string(Y.t.RscU7I),
                    onClick: tW ? void 0 : rP,
                    onKeyDown: function (e) {
                        e.key !== d.TJ.SPACE ||
                            (e.target !== e.currentTarget && e.target !== nm.current) ||
                            (e.preventDefault(), tW || e.repeat || (ro(), rC()));
                    },
                    onPointerDown: function (e) {
                        (rs(),
                            (tA.current = null),
                            (tR.current = null),
                            "touch" !== e.pointerType ||
                                (e.isPrimary &&
                                    null == eD &&
                                    rw(e.target, e.currentTarget) &&
                                    (tA.current = {
                                        pointerId: e.pointerId,
                                        x: e.clientX,
                                        y: e.clientY,
                                        startedAt: performance.now(),
                                        moved: !1,
                                    })));
                    },
                    onPointerMove: function (e) {
                        let t = tA.current;
                        null != t && Math.hypot(e.clientX - t.x, e.clientY - t.y) > 10 && (t.moved = !0);
                    },
                    onPointerUp: function (e) {
                        let t = tA.current;
                        ((tA.current = null),
                            null == t ||
                                "touch" !== e.pointerType ||
                                e.pointerId !== t.pointerId ||
                                !rw(e.target, e.currentTarget) ||
                                ((tR.current = { target: e.target, expiresAt: performance.now() + 1e4 }),
                                t.moved ||
                                    performance.now() - t.startedAt > 500 ||
                                    Math.hypot(e.clientX - t.x, e.clientY - t.y) > 10 ||
                                    rC()));
                    },
                    onPointerCancel: () => {
                        tA.current = null;
                    },
                    onPointerLeave: () => {
                        tA.current = null;
                    },
                    onClickCapture: function (e) {
                        let t = tR.current;
                        if (null == t || 0 === e.detail) return;
                        if (performance.now() > t.expiresAt) {
                            tR.current = null;
                            return;
                        }
                        let n = (0, o.vq)(t.target, Node) && !t.target.isConnected;
                        (e.target === t.target || n) && ((tR.current = null), e.preventDefault(), e.stopPropagation());
                    },
                    onMouseMove: rs,
                    children: (0, r.jsxs)("div", {
                        ref: nm,
                        className: i()(z.NS, { [z.DO]: "portrait" === a, [z.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: r$,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nG.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${nG.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${nG.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nG.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${nG.midGroupGapPx}px`,
                            "--custom-duration-margin": `${nG.durationMarginPx}px`,
                            "--custom-playhead-size": `${nG.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${nG.timelineHitboxOffsetPx}px`,
                            "--custom-dvp-timeline-row-gap": nQ === d.oA.LG ? "var(--space-6)" : "var(--space-4)",
                            "--custom-volume-slider-margin-start": `${nG.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${nG.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${nG.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": nG.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != nG.trailingGroupWidthPx ? `${nG.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tW && e5 && !ns && (0, r.jsx)("canvas", { ref: nf, className: z.Xm }),
                            rI && ed?.({ replay: rB }),
                            em(rK),
                            tj !== d.h$.READY &&
                                tp === d.Q6.PLAYING &&
                                null != tu &&
                                (0, r.jsx)("span", {
                                    className: i()(z.S, { [z.F]: "center" === e3 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(K.A, {
                                message: to({ hasVideoAsset: null != tu, playerState: tp, pauseReason: nv }),
                                showOverlay: null == tu,
                            }),
                            nS &&
                                null != nC &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(W, { stats: nC, onClose: nw }),
                                }),
                            null != eT &&
                                (0, r.jsx)(u.animated.div, {
                                    className: z.MU,
                                    style: {
                                        opacity: (0, u.to)([rT.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([rT.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([rT.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eT(),
                                }),
                            tW &&
                                null != eK &&
                                (0, r.jsx)("div", {
                                    className: z.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: rf,
                                    onBlur: rp,
                                    children: eK({ visible: rm, animSpring: rT, size: nQ }),
                                }),
                            na &&
                                tp !== d.Q6.ENDED &&
                                null != ec &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (tp === d.Q6.PAUSED && rn(d.Q6.PLAYING, d.KB.USER), ni(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: z.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()(z.xr, eM, { [z.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [rT, rj],
                                                    (e, t) => `${e * nG.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(F.X, {
                                                text: ec,
                                                onClose: function () {
                                                    ni(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tW &&
                                (0, r.jsx)(u.animated.div, {
                                    className: z.Jp,
                                    style: {
                                        opacity: (0, u.to)([rT.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(z.yf, {
                                        [z.ZH]: tG.current && tp === d.Q6.PLAYING,
                                        [z.v7]: tG.current && tp === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tp === d.Q6.PLAYING
                                            ? (0, r.jsx)(v.PlayIcon, { className: z.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: z.PK }),
                                },
                                tp,
                            ),
                            nu &&
                                null != nT &&
                                !rI &&
                                (0, r.jsx)(u.animated.div, {
                                    className: z.o$,
                                    ref: rM,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [rT.to({ range: [0, 1], output: [-n5, -nG.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-lg/semibold",
                                        color: "text-overlay-light",
                                        className: z.qh,
                                        children: nT.text,
                                    }),
                                }),
                            tW &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: z.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [rT.to({ range: [0, 1], output: [0, nG.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: rf,
                                    onBlur: rp,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            className: z.oB,
                                            style: {
                                                opacity: (0, u.to)([rT], (e) => `${eJ ? 1 : e}`),
                                                visibility:
                                                    eJ || rm || t_
                                                        ? void 0
                                                        : rT.to((e) => (0 === e ? "hidden" : "visible")),
                                                transform: (0, u.to)(
                                                    [rT.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * n5}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.Ay, {
                                                percent: null != tw ? tw : tS,
                                                animate:
                                                    !0 !== nh.current &&
                                                    !tT &&
                                                    tp === d.Q6.PLAYING &&
                                                    nB &&
                                                    tj === d.h$.READY,
                                                interactionEnabled: tX && nU > 0,
                                                backgroundColor: rm || eJ ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: tp,
                                                preloadedBuffers: rm ? tF : void 0,
                                                durationSec: nM > 0 ? nM : +!nB,
                                                isFullyVisible: rm && tX,
                                                maxSeekableTime: null != eo && nU > 0 ? nU : void 0,
                                                progressClassName: eZ,
                                                persistPlayhead: e0,
                                                onClick: rL,
                                                onScrubBack: rE,
                                                onScrubForward: rb,
                                                onDragStateChange: function (e) {
                                                    if (((tO.current = e), eL?.(e), t$(e), e))
                                                        ((tK.current = tp === d.Q6.PLAYING),
                                                            (tQ.current = tp === d.Q6.ENDED),
                                                            tK.current
                                                                ? nd.current?.pause()
                                                                : tQ.current && rn(d.Q6.PAUSED, d.KB.SEEK));
                                                    else {
                                                        let e = nd.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tK.current
                                                            ? ((tK.current = !1),
                                                              t ? rn(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : tQ.current
                                                              ? ((tQ.current = !1),
                                                                t
                                                                    ? rn(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : rn(d.Q6.PLAYING, d.KB.USER))
                                                              : t && rn(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: e4,
                                                scrubPreviewCues: nE,
                                                onIndicatorSeek: rL,
                                                getCurrentTimeSec: nb,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: z.EG,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                visibility: n0 ? "hidden" : void 0,
                                                paddingTop: (0, u.to)(
                                                    [rT.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * n5}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [rT.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * n5}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [rT.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: tp,
                                                animSpring: rT,
                                                visible: rm,
                                                seekForwardEnabled:
                                                    null == eo || (nd.current?.currentTime ?? 0) + 1 < nU,
                                                hideCaptionBtn: null == es,
                                                hideTranscriptBtn: null == ec,
                                                hideFullScreenBtn: eO,
                                                hidePlaybackSpeedBtn: nV,
                                                hideSkipButtons: n9,
                                                compactTimeDisplay: n8,
                                                size: nQ,
                                                downloadUrl: eB,
                                                downloadContentType: eU,
                                                extraButtons: e_,
                                                expandButton: nH,
                                                autoFocus: e1,
                                                keyDownHandlerRef: rU,
                                                volume: tq,
                                                muted: t0,
                                                transcriptEnabled: na,
                                                captionEnabled: nu,
                                                handlePlaybackBtnClick: rS,
                                                handleTranscriptBtnClick: function () {
                                                    ni(!na);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    no(!nu);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !t2;
                                                    if (e) {
                                                        let e = rx();
                                                        if (null == e) return;
                                                        try {
                                                            (0, C.tl)(e);
                                                        } catch {
                                                            return;
                                                        }
                                                        ((nZ.current = e), e.addEventListener(C.Wb, rg), ep?.(!0));
                                                    } else {
                                                        let e = nZ.current ?? rx();
                                                        ((nZ.current = null),
                                                            null != e &&
                                                                (e.removeEventListener(C.Wb, rg),
                                                                ep?.(!1),
                                                                (0, C.sP)(e)));
                                                    }
                                                    t6(e);
                                                },
                                                handleSeekBackBtnClick: rE,
                                                handleSeekForwardBtnClick: rb,
                                                autoHideVolumeSlider: nn,
                                                floatingVolumeSlider: n4,
                                                hideVolumeSlider: nt,
                                                handleControlBarPendingInteraction: t$,
                                                onVolumeChange: function (e) {
                                                    (tJ(e), eh?.(e));
                                                },
                                                onMutedChange: rF,
                                                onVolumeExpandedChange: function (e) {
                                                    nl(e);
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
                                        isControlBarExpanded: rm,
                                        controlBarAnimationSpring: rT,
                                        videoRef: nd,
                                        isActive: tW,
                                        isVolumeExpanded: nr,
                                    }),
                                }),
                            !tW &&
                                (0, r.jsx)("div", {
                                    className: z.mF,
                                    ref: tL,
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
    return (0, r.jsx)(s.Jh, { enabled: t2, children: rO });
}
