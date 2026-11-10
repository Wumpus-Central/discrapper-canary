(n.r(t),
    n.d(t, {
        ATTACHMENT_CONTROL_BAR_CONFIG: () => M.Xq,
        COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => 400,
        default: () => q,
    }),
    n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    o = n(120692),
    u = n(621466),
    s = n(337836),
    c = n(855986),
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
    N = n(23590),
    A = n(683574),
    R = n(40705),
    M = n(530567);
let { Layer: L, LayerContainer: T, LayerProvider: k, layerContext: j } = (0, n(365912).Ay)("DiscordVideoPlayer");
var D = n(565164),
    I = n(636537),
    B = n(894413),
    F = n(408121),
    G = n(984212),
    H = n(246047),
    $ = n(739416),
    U = n(931853),
    _ = n(90721),
    K = n(920228),
    O = n(953584),
    Q = n(338659),
    z = n(838541),
    V = n(792996),
    X = n(862649);
let Y = l.lazy(() =>
        Promise.all([n.e(999272), n.e(783988), n.e(919307)])
            .then(n.bind(n, 410694))
            .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    W = { tension: 250, friction: 5, clamp: !0 };
function q(e) {
    let {
            parentTransitionState: t,
            autoplay: n = !1,
            orientation: a = "landscape",
            videoUrlOverride: L,
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
            renderVideo: ec = H.v,
            onPlayerStateChange: ed,
            onFullscreenChange: em,
            onVolumeChange: ef,
            onMutedChange: ep,
            initialVolume: eh = 0.3,
            initialMuted: ex = !1,
            getInitialVolume: ev,
            getInitialMuted: eg,
            onLoadStart: eE,
            onLoadEnd: eb,
            onFirstFrame: eP,
            onBufferingStart: eS,
            onBufferingEnd: ey,
            onFocusChange: eC,
            onVisibilityChange: ew,
            onSeek: eN,
            onTimelineDragStateChange: eA,
            renderOverlay: eR,
            renderPersistentOverlay: eM,
            transcriptClassName: eL,
            onHlsInstance: eT,
            onClick: ek,
            preload: ej,
            downloadUrl: eD,
            fileSizeBytes: eI,
            downloadContentType: eB,
            extraButtons: eF,
            renderTopStartOverlay: eG,
            hideFullScreenBtn: eH = !1,
            hideSkipButtons: e$,
            compactTimeDisplay: eU = !1,
            autoCompactTimeDisplay: e_ = !1,
            hidePlaybackSpeedBtn: eK = !1,
            autoSizeControlBar: eO = !1,
            controlBarConfig: eQ,
            getPlaybackBlockedMessage: ez,
            progressClassName: eV,
            pauseOnLostVisibility: eX = !1,
            persistTimeline: eY = !1,
            persistPlayhead: eW = !0,
            autoFocus: eq = !1,
            autoHideVolumeSlider: eZ = !1,
            floatingVolumeSlider: eJ = !1,
            timelineIndicatorConfig: e0,
            scrubPreviewVttUrl: e1,
            scrubPreviewImageUrl: e2,
            loadingSpinnerPosition: e6 = "top-left",
            crossOrigin: e4 = "anonymous",
            withVideoHalo: e8 = !1,
            objectFit: e9 = "contain",
            minWidth: e3 = 240,
            minHeight: e7 = 180,
            muxContentMetadata: e5,
            awaitMuxReady: te = !1,
            playerRef: tt,
            ref: tn,
        } = e,
        tr = L ?? Z,
        tl = ez ?? U.u,
        { focused: ta, focusedChanged: ti } = (0, $.A7)(),
        { visible: to, visibleChanged: tu, targetRef: ts } = (0, $.O7)(),
        [tc, td] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [tm, tf] = l.useState(!1),
        [tp, th] = l.useState(!1),
        [tx, tv] = l.useState(!1),
        [tg, tE] = l.useState(0),
        [tb, tP] = l.useState(null),
        tS = l.useCallback((e) => {
            (tP(null), tE(e));
        }, []),
        ty = l.useRef(null),
        [tC, tw] = l.useState(!1),
        tN = l.useRef(null),
        [tA, tR] = l.useState(d.h$.LOADING),
        tM = l.useRef(!1),
        tL = l.useRef(null),
        [tT, tk] = l.useState([]),
        [tj, tD] = l.useState(!1),
        tI = l.useRef(!1),
        tB = l.useRef(!1),
        tF = l.useRef(!1),
        tG = l.useRef(!1),
        [tH, t$] = l.useState(!0),
        tU = l.useRef(!0),
        t_ = l.useRef(null),
        tK = l.useRef(null),
        [tO, tQ] = l.useState(n || ee),
        [tz, tV] = l.useState(eh),
        [tX, tY] = l.useState(ex),
        tW = eZ || eJ,
        [tq, tZ] = l.useState(!tW),
        [tJ, t0] = l.useState(!1),
        [t1, t2] = l.useState(!1),
        [t6, t4] = l.useState(!1),
        t8 = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        t9 = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        t3 = (0, l.useRef)(null),
        t7 = (0, l.useRef)(null),
        t5 = (0, l.useRef)(null),
        ne = (0, l.useRef)(null),
        nt = l.useRef(!0),
        [nn, nr] = l.useState(null),
        nl = l.useRef(null),
        na = (0, D.z5)(tO, nl, e1, e2),
        ni = l.useCallback(() => t3.current?.currentTime ?? null, []),
        no = l.useMemo(
            () => ({
                get current() {
                    return (0, H.c)(t3.current);
                },
            }),
            [],
        );
    (0, _.A)({ videoRef: no, canvasRef: t5, enabled: tO && e8 && !t8, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nu,
            videoStats: ns,
            onCloseStats: nc,
        } = (function (e) {
            let { videoRef: t, src: n, fileSizeBytes: r } = e,
                a = null != n && "" !== n,
                i = (0, c.bG)([O.Ay], () => !!a && O.Ay.isVideoStatsEnabled(n)),
                [o, u] = l.useState(null);
            return (
                l.useEffect(() => {
                    if (!i) return;
                    let e = t.current;
                    if (null == e) {
                        a && (0, O.Vh)(n, !1);
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
                        a && (0, O.ke)(n);
                    },
                    [n, a],
                ),
                {
                    showStats: i,
                    videoStats: i ? o : null,
                    onCloseStats: l.useCallback(() => {
                        a && (0, O.Vh)(n, !1);
                    }, [n, a]),
                }
            );
        })({ videoRef: t3, src: tr, fileSizeBytes: eI }),
        nd = l.useCallback(
            (e, t) => {
                ea?.(e, t);
            },
            [ea],
        ),
        { isHlsActive: nm, hls: nf } = (function (e, t) {
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
        })(no, { src: tr, initialTimeSec: en, onError: nd, onHlsInstance: eT, crossOrigin: e4 }),
        { isReady: np } = (0, N.A)({ videoRef: no, hls: nf, contentMetadata: e5, isHls: nm }),
        nh = te && !np && !nm,
        [nx, nv] = l.useState(null),
        [ng, nE] = l.useState(0),
        [nb, nP] = l.useState(0),
        [nS, ny] = l.useState(!1),
        nC = ei ?? t3.current?.duration ?? 0,
        [nw, nN] = l.useState(!1),
        nA = l.useRef(null),
        [nR, nM] = l.useState(!1),
        nL = eO && nw ? d.oA.SM : d.oA.MD,
        { size: nT, config: nk } = l.useMemo(() => (0, M.ZH)(nL, eQ, t6), [nL, eQ, t6]),
        nj = e$ ?? "portrait" === a,
        nD = l.useMemo(
            () =>
                e_
                    ? (0, M.Dq)(
                          (0, M.ZH)(nL, eQ).config,
                          {
                              showSkipButtons: !nj,
                              showInlineVolumeSlider: !eJ,
                              trailingButtonCount: (0, M.eD)({
                                  hideTranscriptBtn: null == eu,
                                  hideCaptionBtn: null == eo,
                                  hasDownloadBtn: null != eD,
                                  extraButtonCount: eF?.length ?? 0,
                              }),
                              showPlaybackSpeedBtn: !1 === eK,
                              showFullScreenBtn: !eH,
                          },
                          nb,
                      )
                    : null,
            [e_, nL, eQ, nj, eJ, eu, eo, eD, eF, eK, eH, nb],
        ),
        nI = (0, P.A)(() => {
            let e = nA.current;
            nM(null != e && null != nD && e < nD);
        });
    l.useLayoutEffect(nI, [nD, nI]);
    let nB = (0, P.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || ((nA.current = t), nN(t < 400), nI());
        }),
        nF = eO || e_;
    (0, b.g)(t7, nB, [], { enabled: nF, fireOnMount: nF });
    let nG = nk.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        nt.current && (nt.current = !1);
    });
    let nH = (0, P.A)(() => {
            if (null == t3.current) return;
            let e = ev?.() ?? tz,
                t = eg?.() ?? tX;
            (e !== tz && tV(e), t !== tX && tY(t), (t3.current.volume = t ? 0 : e));
        }),
        n$ = (0, P.A)(() => {
            (tO || nH(), tQ(!0));
        }),
        nU = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tG.current = !0), td(e), ed?.(e, t), null != t3.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            (nr(null), n$(), t3.current.play());
                            break;
                        case d.Q6.PAUSED:
                            ((tI.current = !1), t3.current.pause(), (tU.current = !1));
                            break;
                        case d.Q6.ENDED:
                            t0(!1);
                    }
            },
            [ed, n$],
        );
    (l.useEffect(() => {
        if (!eX) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && tu && !to,
            r = ti && !ta;
        if ((e || n || r) && null != t3.current && tc === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (nr(t), nU(d.Q6.PAUSED, t));
        }
    }, [eX, t, ta, ti, to, tu, tc, nU]),
        (0, K.A)({
            videoRef: no,
            enabled: eX,
            onPipPause: () => {
                (nr(d.KB.PICTURE_IN_PICTURE), nU(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (nr(d.KB.FOCUS), nU(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            ti && eC?.(ta, tc);
        }, [ta, ti, tc, eC]),
        l.useEffect(() => {
            tu && ew?.(to, tc);
        }, [to, tu, tc, ew]));
    let [n_, nK] = l.useState(!1),
        nO = l.useRef(null),
        nQ = l.useRef(0);
    l.useLayoutEffect(() => {
        nQ.current = performance.now();
    }, []);
    let nz = l.useCallback(() => {
            switch ((null != nO.current && clearTimeout(nO.current), tc)) {
                case d.Q6.PLAYING:
                    nO.current = setTimeout(
                        () => {
                            nK(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nQ.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [tc]),
        nV = l.useCallback(() => {
            (nK(!1), (nQ.current = performance.now()), nz());
        }, [nz]);
    (l.useEffect(() => {
        if (tc !== d.Q6.PLAYING) {
            (nK(!1), null != nO.current && clearTimeout(nO.current));
            return;
        }
        return (
            nz(),
            () => {
                null != nO.current && clearTimeout(nO.current);
            }
        );
    }, [tc, nz]),
        l.useEffect(
            () => () => {
                null != tN.current && clearTimeout(tN.current);
            },
            [],
        ));
    let nX = tx && t9,
        nY = tc === d.Q6.ENDED,
        nW = nX || ((tx || tm || nY) && !n_);
    function nq() {
        tv(!0);
    }
    function nZ(e) {
        ((0, u.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tv(!1);
    }
    let nJ = l.useRef(!1);
    l.useEffect(() => {
        (nJ.current && !nX && nV(), (nJ.current = nX));
    }, [nX, nV]);
    let n0 = l.useRef(em);
    n0.current = em;
    let n1 = l.useCallback(() => {
        let e = (0, y.qf)(t7.current);
        null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, n1), t4(!1), n0.current?.(!1));
    }, []);
    function n2() {
        null == t3.current ||
            (n4(Math.max((tL.current ?? t3.current.currentTime) - 10, 0)),
            tc === d.Q6.ENDED && nU(d.Q6.PAUSED, d.KB.SEEK));
    }
    function n6() {
        if (null == t3.current) return;
        let e = Math.min((tL.current ?? t3.current.currentTime) + 10, nC);
        (n4(e), tc !== d.Q6.ENDED && e >= t3.current.duration && nU(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = t7.current;
        return () => {
            let t = (0, y.qf)(e);
            null != t && t.removeEventListener(y.Wb, n1);
        };
    }, [n1]);
    let n4 = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == t3.current) return;
            let n = t3.current.currentTime;
            ((tL.current = e),
                tP((e / (t3.current.duration ?? 1)) * 100),
                tw(!0),
                null != tN.current && clearTimeout(tN.current),
                (tN.current = setTimeout(() => {
                    (tw(!1), (tN.current = null));
                }, 100)),
                (tM.current = !0),
                (t3.current.currentTime = e),
                t && eN?.(n, e));
        },
        [eN],
    );
    function n8() {
        if (null != t3.current)
            switch (tc) {
                case d.Q6.ENDED:
                    (n4(0), nU(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nr(d.KB.USER), nU(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nU(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function n9(e) {
        null != ek ? ek(e) : (tQ(!0), n8());
    }
    let n3 = (0, P.A)(() => {
        let e = t3.current?.duration;
        null != e && e > 0 && isFinite(e) && nP(e);
    });
    l.useEffect(() => {
        let e = t3.current;
        if (null != e && e_)
            return (e.addEventListener("durationchange", n3), () => e.removeEventListener("durationchange", n3));
    }, [e_, n3]);
    let n7 = l.useCallback(() => {
        if (null == t3.current || 0 === t3.current.textTracks.length) return;
        let e = t3.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, G.C)(n) &&
                    ((n.id = `cue-${t}`),
                    (n.onenter = () => {
                        nv(n);
                    }),
                    (n.onexit = () =>
                        (function (e) {
                            nv((t) => (t?.id === e.id ? null : t));
                        })(n)));
            }
    }, []);
    function n5(e) {
        if (null != t3.current) {
            if (tA === d.h$.BUFFERING) {
                let e = null != tK.current ? performance.now() - tK.current : null;
                ey?.(e);
            } else if (tA === d.h$.LOADING) {
                let e = null != t_.current ? performance.now() - t_.current : null;
                eb?.(e);
            }
            (tR(d.h$.READY), tc === d.Q6.PLAYING && (tI.current || nU(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function re(e) {
        if ((n4(e), tc === d.Q6.ENDED && !tB.current)) {
            let t = t3.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nU(d.Q6.PLAYING, d.KB.USER);
        }
    }
    l.useEffect(() => {
        if (null == ne.current) return;
        let e = ne.current;
        return (
            e.addEventListener("load", n7),
            () => {
                null != e && e.removeEventListener("load", n7);
            }
        );
    }, [n7]);
    let [{ controlBarAnimSpring: rt }, rn] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                t$(!1);
            },
            onRest: () => {
                t$(!0);
            },
        })),
        rr = (0, l.useRef)(null),
        [{ captionHeightSpring: rl }, ra] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: W }));
    (l.useEffect(
        () => (
            ra({ captionHeightSpring: t1 && null != nx ? (rr.current?.clientHeight ?? 0) : 0, immediate: t8 }),
            () => {
                rl.stop();
            }
        ),
        [t1, ra, t8, nx, rl],
    ),
        l.useEffect(
            () => (
                rn({ controlBarAnimSpring: nW || tj ? 1 : 0, immediate: t8 }),
                () => {
                    rt.stop();
                }
            ),
            [nW, rn, t8, tj, rt],
        ));
    let ri = tc === d.Q6.ENDED && null != es,
        ro = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != t3.current && (n4(0), nU(d.Q6.PLAYING, e));
            },
            [n4, nU],
        ),
        ru = l.useRef(null),
        rs = l.useCallback(
            (e) => {
                (nV(), ru.current?.(e.nativeEvent));
            },
            [nV],
        );
    l.useImperativeHandle(
        tt,
        () => ({
            play: () => {
                nU(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nU(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                n4(e);
            },
        }),
        [nU, n4],
    );
    let rc = {
            ref: l.useCallback(
                (e) => {
                    t3.current = e;
                    let t = (0, H.c)(e);
                    ((ts.current = t), "function" == typeof tn ? tn(t) : null != tn && (tn.current = t));
                },
                [tn, ts],
            ),
            alt: q,
            playsInline: !0,
            mediaLayoutType: t6 ? z.d.STATIC : z.d.RESPONSIVE,
            className: i()({ [X.R]: ri, [X.IR]: !0, [X.FP]: "cover" === e9 && !t6 }),
            controls: !1,
            poster: J,
            preload: tO ? ej : tp ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != t3.current &&
                    (er?.(t3.current.currentTime, t3.current.duration),
                    tM.current || tS((t3.current.currentTime / t3.current.duration) * 100));
            },
            onEnded: function (e) {
                (tR(d.h$.READY), el?.(), tB.current || nU(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tA === d.h$.LOADING) {
                    let e = null != t_.current ? performance.now() - t_.current : null;
                    (eb?.(e), tR(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == t3.current) return;
                (en > 0 && !nm && n4(en, !1), nH());
                let t = t3.current.duration;
                (t > 0 && isFinite(t) && nE(t), n3(), ny(!0));
            },
            onLoadStart: function () {
                ((t_.current = performance.now()), eE?.());
            },
            onPlaying: function () {
                tU.current && (eP?.(performance.now()), (tU.current = !1));
            },
            onWaiting: function (e) {
                ((tK.current = performance.now()), eS?.(), tR(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == t3.current) return;
                let t = [];
                for (let e = 0; e < t3.current.buffered.length; e++) {
                    let n = t3.current.buffered.start(e),
                        r = t3.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / t3.current.duration, size: (r - n) / t3.current.duration });
                }
                tk(t);
            },
            onCanPlay: n5,
            onCanPlayThrough: n5,
            onSeeked: function () {
                ((tM.current = !1),
                    (tL.current = null),
                    null != t3.current && tS((t3.current.currentTime / t3.current.duration) * 100));
            },
            onAbort: function () {
                return nd(d.SB.ABORT);
            },
            onError: function () {
                return nd(d.SB.ERROR);
            },
            onEmptied: function () {
                return nd(d.SB.EMPTIED);
            },
            onStalled: function () {
                return nd(d.SB.STALLED);
            },
            onClick: n9,
            crossOrigin: e4 ?? void 0,
            src: nm || nh ? null : (tr ?? null),
            onSourceError: function () {
                return nd(d.SB.SOURCE_ERROR);
            },
            isScrubbing: tj,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != eo &&
                        (0, r.jsx)("track", {
                            ref: ne,
                            src: eo,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != e1 && (0, r.jsx)("track", { ref: nl, src: e1, kind: "metadata" }),
                ],
            }),
        },
        rd = (0, r.jsx)(k, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: t6 ? j : void 0,
                isFullscreen: t6,
                videoRef: t3,
                isActive: tO,
                controlBarConfig: nk,
                isControlBarExpanded: nW,
                children: (0, r.jsx)(p.D, {
                    className: i()(X.W6, I.i.blurple, { [X.nZ]: !tO }),
                    style: { minWidth: e3, minHeight: e7 },
                    "data-fullscreen": t6,
                    "data-dvp-controls-visible": nW || tj,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tO ? -1 : 0,
                    focusProps: tO ? void 0 : { ringTarget: ty },
                    onMouseEnter: function () {
                        (tf(!0),
                            nK(!1),
                            et && th(!0),
                            (nQ.current = performance.now()),
                            null != nO.current && clearTimeout(nO.current));
                    },
                    onMouseLeave: function () {
                        (tf(!1), nK(!1));
                    },
                    "aria-label": tO ? void 0 : V.intl.string(V.t.RscU7I),
                    onClick: tO ? void 0 : n9,
                    onMouseMove: nV,
                    children: (0, r.jsxs)("div", {
                        ref: t7,
                        className: i()(X.NS, { [X.DO]: "portrait" === a, [X.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: rs,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nk.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${nk.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${nk.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nk.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${nk.midGroupGapPx}px`,
                            "--custom-duration-margin": `${nk.durationMarginPx}px`,
                            "--custom-playhead-size": `${nk.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${nk.timelineHitboxOffsetPx}px`,
                            "--custom-dvp-timeline-row-gap": nT === d.oA.LG ? "var(--space-6)" : "var(--space-4)",
                            "--custom-volume-slider-margin-start": `${nk.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${nk.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${nk.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": nk.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != nk.trailingGroupWidthPx ? `${nk.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tO && e8 && !t8 && (0, r.jsx)("canvas", { ref: t5, className: X.Xm }),
                            ri && es?.({ replay: ro }),
                            ec(rc),
                            tA !== d.h$.READY &&
                                tc === d.Q6.PLAYING &&
                                null != tr &&
                                (0, r.jsx)("span", {
                                    className: i()(X.S, { [X.F]: "center" === e6 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(U.A, {
                                message: tl({ hasVideoAsset: null != tr, playerState: tc, pauseReason: nn }),
                                showOverlay: null == tr,
                            }),
                            nu &&
                                null != ns &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(Y, { stats: ns, onClose: nc }),
                                }),
                            null != eR &&
                                (0, r.jsx)(o.animated.div, {
                                    className: X.MU,
                                    style: {
                                        opacity: (0, o.to)([rt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, o.to)([rt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, o.to)([rt.to({ range: [0, 1], output: [0, 1] })], (e) =>
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
                                    onFocus: nq,
                                    onBlur: nZ,
                                    children: eG({ visible: nW, animSpring: rt, size: nT }),
                                }),
                            tJ &&
                                tc !== d.Q6.ENDED &&
                                null != eu &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (tc === d.Q6.PAUSED && nU(d.Q6.PLAYING, d.KB.USER), t0(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: X.BG }),
                                        }),
                                        (0, r.jsx)(o.animated.div, {
                                            className: i()(X.xr, eL, { [X.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, o.to)(
                                                    [rt, rl],
                                                    (e, t) => `${e * nk.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(F.X, {
                                                text: eu,
                                                onClose: function () {
                                                    t0(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tO &&
                                (0, r.jsx)(o.animated.div, {
                                    className: X.Jp,
                                    style: {
                                        opacity: (0, o.to)([rt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(X.yf, {
                                        [X.ZH]: tG.current && tc === d.Q6.PLAYING,
                                        [X.v7]: tG.current && tc === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tc === d.Q6.PLAYING
                                            ? (0, r.jsx)(x.PlayIcon, { className: X.PK })
                                            : (0, r.jsx)(v.PauseIcon, { className: X.PK }),
                                },
                                tc,
                            ),
                            t1 &&
                                null != nx &&
                                !ri &&
                                (0, r.jsx)(o.animated.div, {
                                    className: X.o$,
                                    ref: rr,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, o.to)(
                                            [rt.to({ range: [0, 1], output: [-nG, -nk.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-lg/semibold",
                                        color: "text-overlay-light",
                                        className: X.qh,
                                        children: nx.text,
                                    }),
                                }),
                            tO &&
                                (0, r.jsxs)(o.animated.div, {
                                    className: X.r8,
                                    style: {
                                        height: (0, o.to)(
                                            [rt.to({ range: [0, 1], output: [0, nk.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: nq,
                                    onBlur: nZ,
                                    children: [
                                        (0, r.jsx)(o.animated.div, {
                                            className: X.oB,
                                            style: {
                                                opacity: (0, o.to)([rt], (e) => `${eY ? 1 : e}`),
                                                visibility:
                                                    eY || nW || tj
                                                        ? void 0
                                                        : rt.to((e) => (0 === e ? "hidden" : "visible")),
                                                transform: (0, o.to)(
                                                    [rt.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * nG}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.Ay, {
                                                percent: null != tb ? tb : tg,
                                                animate:
                                                    !0 !== nt.current &&
                                                    !tC &&
                                                    tc === d.Q6.PLAYING &&
                                                    nS &&
                                                    tA === d.h$.READY,
                                                interactionEnabled: tH && nC > 0,
                                                backgroundColor: nW || eY ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: tc,
                                                preloadedBuffers: nW ? tT : void 0,
                                                durationSec: ng > 0 ? ng : +!nS,
                                                isFullyVisible: nW && tH,
                                                maxSeekableTime: null != ei && nC > 0 ? nC : void 0,
                                                progressClassName: eV,
                                                persistPlayhead: eW,
                                                onClick: re,
                                                onScrubBack: n2,
                                                onScrubForward: n6,
                                                onDragStateChange: function (e) {
                                                    if (((tB.current = e), eA?.(e), tD(e), e))
                                                        ((tI.current = tc === d.Q6.PLAYING),
                                                            (tF.current = tc === d.Q6.ENDED),
                                                            tI.current
                                                                ? t3.current?.pause()
                                                                : tF.current && nU(d.Q6.PAUSED, d.KB.SEEK));
                                                    else {
                                                        let e = t3.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tI.current
                                                            ? ((tI.current = !1),
                                                              t ? nU(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : tF.current
                                                              ? ((tF.current = !1),
                                                                t
                                                                    ? nU(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : nU(d.Q6.PLAYING, d.KB.USER))
                                                              : t && nU(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: e0,
                                                scrubPreviewCues: na,
                                                onIndicatorSeek: re,
                                                getCurrentTimeSec: ni,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                        (0, r.jsx)(o.animated.div, {
                                            className: X.EG,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, o.to)(
                                                    [rt.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nG}px`,
                                                ),
                                                paddingBottom: (0, o.to)(
                                                    [rt.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nG}px`,
                                                ),
                                                pointerEvents: (0, o.to)(
                                                    [rt.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: tc,
                                                animSpring: rt,
                                                visible: nW,
                                                seekForwardEnabled:
                                                    null == ei || (t3.current?.currentTime ?? 0) + 1 < nC,
                                                hideCaptionBtn: null == eo,
                                                hideTranscriptBtn: null == eu,
                                                hideFullScreenBtn: eH,
                                                hidePlaybackSpeedBtn: eK,
                                                hideSkipButtons: nj,
                                                compactTimeDisplay: eU || nR,
                                                size: nT,
                                                downloadUrl: eD,
                                                downloadContentType: eB,
                                                extraButtons: eF,
                                                autoFocus: eq,
                                                keyDownHandlerRef: ru,
                                                volume: tz,
                                                muted: tX,
                                                transcriptEnabled: tJ,
                                                captionEnabled: t1,
                                                handlePlaybackBtnClick: n8,
                                                handleTranscriptBtnClick: function () {
                                                    t0(!tJ);
                                                },
                                                handleCaptionBtnClick: function () {
                                                    t2(!t1);
                                                },
                                                handleFullScreenBtnClick: function () {
                                                    let e = !t6,
                                                        t = (0, y.qf)(t7.current);
                                                    (e && null != t
                                                        ? ((0, y.tl)(t), t.addEventListener(y.Wb, n1), em?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(y.Wb, n1), em?.(!1), (0, y.sP)(t)),
                                                        t4(e));
                                                },
                                                handleSeekBackBtnClick: n2,
                                                handleSeekForwardBtnClick: n6,
                                                autoHideVolumeSlider: tW,
                                                floatingVolumeSlider: eJ,
                                                handleControlBarPendingInteraction: tD,
                                                onVolumeChange: function (e) {
                                                    (tV(e), ef?.(e));
                                                },
                                                onMutedChange: function (e) {
                                                    (tY(e), ep?.(e));
                                                },
                                                onVolumeExpandedChange: function (e) {
                                                    tZ(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            null != eM &&
                                (0, r.jsx)("div", {
                                    className: X.MU,
                                    children: eM({
                                        playerState: tc,
                                        isControlBarExpanded: nW,
                                        controlBarAnimationSpring: rt,
                                        videoRef: t3,
                                        isActive: tO,
                                        isVolumeExpanded: tq,
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
                            (0, r.jsx)(T, {}),
                            (0, r.jsx)(s.P, {}),
                        ],
                    }),
                }),
            }),
        });
    return (0, r.jsx)(s.Jh, { enabled: t6, children: rd });
}
