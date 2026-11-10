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
            controlBarConfig: eH,
            getPlaybackBlockedMessage: eX,
            progressClassName: eV,
            pauseOnLostVisibility: eY = !1,
            persistTimeline: ez = !1,
            persistPlayhead: eW = !0,
            autoFocus: eZ = !1,
            autoHideVolumeSlider: eq = !1,
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
        tr = T ?? q,
        tl = eX ?? K.u,
        { focused: ta, focusedChanged: ti } = (0, _.A7)(),
        { visible: tu, visibleChanged: to, targetRef: ts } = (0, _.O7)(),
        [tc, td] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [tm, tf] = l.useState(!1),
        [tp, th] = l.useState(!1),
        [tv, tx] = l.useState(!1),
        [tg, tE] = l.useState(0),
        [tb, ty] = l.useState(null),
        tS = l.useCallback((e) => {
            (ty(null), tE(e));
        }, []),
        tC = l.useRef(null),
        [tw, tN] = l.useState(!1),
        tP = l.useRef(null),
        [tA, tR] = l.useState(d.h$.LOADING),
        tL = l.useRef(!1),
        tT = l.useRef(null),
        [tk, tM] = l.useState([]),
        [tj, tD] = l.useState(!1),
        tI = l.useRef(!1),
        tB = l.useRef(!1),
        tF = l.useRef(!1),
        t$ = l.useRef(!1),
        [tU, t_] = l.useState(!0),
        tK = l.useRef(!0),
        tO = l.useRef(null),
        tQ = l.useRef(null),
        [tG, tH] = l.useState(n || ee),
        [tX, tV] = l.useState(eh),
        [tY, tz] = l.useState(ev),
        tW = eq || eJ,
        [tZ, tq] = l.useState(!tW),
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
        na = (0, D.z5)(tG, nl, e1, e2),
        ni = l.useCallback(() => t3.current?.currentTime ?? null, []),
        nu = l.useMemo(
            () => ({
                get current() {
                    return (0, U.c)(t3.current);
                },
            }),
            [],
        );
    (0, O.A)({ videoRef: nu, canvasRef: t5, enabled: tG && e8 && !t8, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: no,
            videoStats: ns,
            onCloseStats: nc,
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
        })({ videoRef: t3, src: tr, fileSizeBytes: eI }),
        nd = l.useCallback(
            (e, t) => {
                ea?.(e, t);
            },
            [ea],
        ),
        { isHlsActive: nm, hls: nf } = (function (e, t) {
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
        })(nu, { src: tr, initialTimeSec: en, onError: nd, onHlsInstance: ek, crossOrigin: e4 }),
        { isReady: np } = (0, P.A)({ videoRef: nu, hls: nf, contentMetadata: e5, isHls: nm }),
        nh = te && !np && !nm,
        [nv, nx] = l.useState(null),
        [ng, nE] = l.useState(0),
        [nb, ny] = l.useState(0),
        [nS, nC] = l.useState(!1),
        nw = ei ?? t3.current?.duration ?? 0,
        [nN, nP] = l.useState(!1),
        nA = l.useRef(null),
        [nR, nL] = l.useState(!1),
        nT = eG && nN ? d.oA.SM : d.oA.MD,
        { size: nk, config: nM } = l.useMemo(() => (0, L.ZH)(nT, eH, t6), [nT, eH, t6]),
        nj = e_ ?? "portrait" === a,
        nD = l.useMemo(
            () =>
                eO
                    ? (0, L.Dq)(
                          (0, L.ZH)(nT, eH).config,
                          {
                              showSkipButtons: !nj,
                              showInlineVolumeSlider: !eJ,
                              trailingButtonCount: (0, L.eD)({
                                  hideTranscriptBtn: null == eo,
                                  hideCaptionBtn: null == eu,
                                  hasDownloadBtn: null != eD,
                                  extraButtonCount: eF?.length ?? 0,
                              }),
                              showPlaybackSpeedBtn: !1 === eQ,
                              showFullScreenBtn: !eU,
                          },
                          nb,
                      )
                    : null,
            [eO, nT, eH, nj, eJ, eo, eu, eD, eF, eQ, eU, nb],
        ),
        nI = (0, y.A)(() => {
            let e = nA.current;
            nL(null != e && null != nD && e < nD);
        });
    l.useLayoutEffect(nI, [nD, nI]);
    let nB = (0, y.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || ((nA.current = t), nP(t < 400), nI());
        }),
        nF = eG || eO;
    (0, b.g)(t7, nB, [], { enabled: nF, fireOnMount: nF });
    let n$ = nM.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        nt.current && (nt.current = !1);
    });
    let nU = (0, y.A)(() => {
            if (null == t3.current) return;
            let e = ex?.() ?? tX,
                t = eg?.() ?? tY;
            (e !== tX && tV(e), t !== tY && tz(t), (t3.current.volume = t ? 0 : e));
        }),
        n_ = (0, y.A)(() => {
            (tG || nU(), tH(!0));
        }),
        nK = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((t$.current = !0), td(e), ed?.(e, t), null != t3.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            (nr(null), n_(), t3.current.play());
                            break;
                        case d.Q6.PAUSED:
                            ((tI.current = !1), t3.current.pause(), (tK.current = !1));
                            break;
                        case d.Q6.ENDED:
                            t0(!1);
                    }
            },
            [ed, n_],
        );
    (l.useEffect(() => {
        if (!eY) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && to && !tu,
            r = ti && !ta;
        if ((e || n || r) && null != t3.current && tc === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (nr(t), nK(d.Q6.PAUSED, t));
        }
    }, [eY, t, ta, ti, tu, to, tc, nK]),
        (0, Q.A)({
            videoRef: nu,
            enabled: eY,
            onPipPause: () => {
                (nr(d.KB.PICTURE_IN_PICTURE), nK(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (nr(d.KB.FOCUS), nK(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            ti && ew?.(ta, tc);
        }, [ta, ti, tc, ew]),
        l.useEffect(() => {
            to && eN?.(tu, tc);
        }, [tu, to, tc, eN]));
    let [nO, nQ] = l.useState(!1),
        nG = l.useRef(null),
        nH = l.useRef(0);
    l.useLayoutEffect(() => {
        nH.current = performance.now();
    }, []);
    let nX = l.useCallback(() => {
            switch ((null != nG.current && clearTimeout(nG.current), tc)) {
                case d.Q6.PLAYING:
                    nG.current = setTimeout(
                        () => {
                            nQ(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nH.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [tc]),
        nV = l.useCallback(() => {
            (nQ(!1), (nH.current = performance.now()), nX());
        }, [nX]);
    (l.useEffect(() => {
        if (tc !== d.Q6.PLAYING) {
            (nQ(!1), null != nG.current && clearTimeout(nG.current));
            return;
        }
        return (
            nX(),
            () => {
                null != nG.current && clearTimeout(nG.current);
            }
        );
    }, [tc, nX]),
        l.useEffect(
            () => () => {
                null != tP.current && clearTimeout(tP.current);
            },
            [],
        ));
    let nY = tv && t9,
        nz = tc === d.Q6.ENDED,
        nW = nY || ((tv || tm || nz) && !nO);
    function nZ() {
        tx(!0);
    }
    function nq(e) {
        ((0, o.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tx(!1);
    }
    let nJ = l.useRef(!1);
    l.useEffect(() => {
        (nJ.current && !nY && nV(), (nJ.current = nY));
    }, [nY, nV]);
    let n0 = l.useRef(em);
    n0.current = em;
    let n1 = l.useCallback(() => {
        let e = (0, C.qf)(t7.current);
        null == e || (0, C._U)(e) || (e.removeEventListener(C.Wb, n1), t4(!1), n0.current?.(!1));
    }, []);
    function n2() {
        null == t3.current ||
            (n4(Math.max((tT.current ?? t3.current.currentTime) - 10, 0)),
            tc === d.Q6.ENDED && nK(d.Q6.PAUSED, d.KB.SEEK));
    }
    function n6() {
        if (null == t3.current) return;
        let e = Math.min((tT.current ?? t3.current.currentTime) + 10, nw);
        (n4(e), tc !== d.Q6.ENDED && e >= t3.current.duration && nK(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = t7.current;
        return () => {
            let t = (0, C.qf)(e);
            null != t && t.removeEventListener(C.Wb, n1);
        };
    }, [n1]);
    let n4 = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == t3.current) return;
            let n = t3.current.currentTime;
            ((tT.current = e),
                ty((e / (t3.current.duration ?? 1)) * 100),
                tN(!0),
                null != tP.current && clearTimeout(tP.current),
                (tP.current = setTimeout(() => {
                    (tN(!1), (tP.current = null));
                }, 100)),
                (tL.current = !0),
                (t3.current.currentTime = e),
                t && eP?.(n, e));
        },
        [eP],
    );
    function n8() {
        if (null != t3.current)
            switch (tc) {
                case d.Q6.ENDED:
                    (n4(0), nK(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nr(d.KB.USER), nK(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nK(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function n9(e) {
        null != eM ? eM(e) : (tH(!0), n8());
    }
    let n3 = (0, y.A)(() => {
        let e = t3.current?.duration;
        null != e && e > 0 && isFinite(e) && ny(e);
    });
    l.useEffect(() => {
        let e = t3.current;
        if (null != e && eO)
            return (e.addEventListener("durationchange", n3), () => e.removeEventListener("durationchange", n3));
    }, [eO, n3]);
    let n7 = l.useCallback(() => {
        if (null == t3.current || 0 === t3.current.textTracks.length) return;
        let e = t3.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, $.C)(n) &&
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
    function n5(e) {
        if (null != t3.current) {
            if (tA === d.h$.BUFFERING) {
                let e = null != tQ.current ? performance.now() - tQ.current : null;
                eC?.(e);
            } else if (tA === d.h$.LOADING) {
                let e = null != tO.current ? performance.now() - tO.current : null;
                eb?.(e);
            }
            (tR(d.h$.READY), tc === d.Q6.PLAYING && (tI.current || nK(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function re(e) {
        if ((n4(e), tc === d.Q6.ENDED && !tB.current)) {
            let t = t3.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nK(d.Q6.PLAYING, d.KB.USER);
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
                t_(!1);
            },
            onRest: () => {
                t_(!0);
            },
        })),
        rr = (0, l.useRef)(null),
        [{ captionHeightSpring: rl }, ra] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: W }));
    (l.useEffect(
        () => (
            ra({ captionHeightSpring: t1 && null != nv ? (rr.current?.clientHeight ?? 0) : 0, immediate: t8 }),
            () => {
                rl.stop();
            }
        ),
        [t1, ra, t8, nv, rl],
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
        ru = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != t3.current && (n4(0), nK(d.Q6.PLAYING, e));
            },
            [n4, nK],
        ),
        ro = l.useRef(null),
        rs = l.useCallback(
            (e) => {
                (nV(), ro.current?.(e.nativeEvent));
            },
            [nV],
        );
    l.useImperativeHandle(
        tt,
        () => ({
            play: () => {
                nK(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nK(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                n4(e);
            },
        }),
        [nK, n4],
    );
    let rc = {
            ref: l.useCallback(
                (e) => {
                    t3.current = e;
                    let t = (0, U.c)(e);
                    ((ts.current = t), "function" == typeof tn ? tn(t) : null != tn && (tn.current = t));
                },
                [tn, ts],
            ),
            alt: Z,
            playsInline: !0,
            mediaLayoutType: t6 ? X.d.STATIC : X.d.RESPONSIVE,
            className: i()({ [Y.R]: ri, [Y.IR]: !0, [Y.FP]: "cover" === e9 && !t6 }),
            controls: !1,
            poster: J,
            preload: tG ? ej : tp ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != t3.current &&
                    (er?.(t3.current.currentTime, t3.current.duration),
                    tL.current || tS((t3.current.currentTime / t3.current.duration) * 100));
            },
            onEnded: function (e) {
                (tR(d.h$.READY), el?.(), tB.current || nK(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tA === d.h$.LOADING) {
                    let e = null != tO.current ? performance.now() - tO.current : null;
                    (eb?.(e), tR(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == t3.current) return;
                (en > 0 && !nm && n4(en, !1), nU());
                let t = t3.current.duration;
                (t > 0 && isFinite(t) && nE(t), n3(), nC(!0));
            },
            onLoadStart: function () {
                ((tO.current = performance.now()), eE?.());
            },
            onPlaying: function () {
                tK.current && (ey?.(performance.now()), (tK.current = !1));
            },
            onWaiting: function (e) {
                ((tQ.current = performance.now()), eS?.(), tR(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == t3.current) return;
                let t = [];
                for (let e = 0; e < t3.current.buffered.length; e++) {
                    let n = t3.current.buffered.start(e),
                        r = t3.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / t3.current.duration, size: (r - n) / t3.current.duration });
                }
                tM(t);
            },
            onCanPlay: n5,
            onCanPlayThrough: n5,
            onSeeked: function () {
                ((tL.current = !1),
                    (tT.current = null),
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
                    null != eu &&
                        (0, r.jsx)("track", {
                            ref: ne,
                            src: eu,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != e1 && (0, r.jsx)("track", { ref: nl, src: e1, kind: "metadata" }),
                ],
            }),
        },
        rd = (0, r.jsx)(M, {
            children: (0, r.jsx)(A.pT, {
                activeLayer: t6 ? j : void 0,
                isFullscreen: t6,
                videoRef: t3,
                isActive: tG,
                controlBarConfig: nM,
                isControlBarExpanded: nW,
                children: (0, r.jsx)(p.D, {
                    className: i()(Y.W6, I.i.blurple, { [Y.nZ]: !tG }),
                    style: { minWidth: e3, minHeight: e7 },
                    "data-fullscreen": t6,
                    "data-dvp-controls-visible": nW || tj,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tG ? -1 : 0,
                    focusProps: tG ? void 0 : { ringTarget: tC },
                    onMouseEnter: function () {
                        (tf(!0),
                            nQ(!1),
                            et && th(!0),
                            (nH.current = performance.now()),
                            null != nG.current && clearTimeout(nG.current));
                    },
                    onMouseLeave: function () {
                        (tf(!1), nQ(!1));
                    },
                    "aria-label": tG ? void 0 : V.intl.string(V.t.RscU7I),
                    onClick: tG ? void 0 : n9,
                    onMouseMove: nV,
                    children: (0, r.jsxs)("div", {
                        ref: t7,
                        className: i()(Y.NS, { [Y.DO]: "portrait" === a, [Y.r7]: "landscape" === a }),
                        tabIndex: -1,
                        onKeyDown: rs,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nM.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${nM.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${nM.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nM.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${nM.midGroupGapPx}px`,
                            "--custom-duration-margin": `${nM.durationMarginPx}px`,
                            "--custom-playhead-size": `${nM.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${nM.timelineHitboxOffsetPx}px`,
                            "--custom-dvp-timeline-row-gap": nk === d.oA.LG ? "var(--space-6)" : "var(--space-4)",
                            "--custom-volume-slider-margin-start": `${nM.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${nM.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${nM.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": nM.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != nM.trailingGroupWidthPx ? `${nM.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tG && e8 && !t8 && (0, r.jsx)("canvas", { ref: t5, className: Y.Xm }),
                            ri && es?.({ replay: ru }),
                            ec(rc),
                            tA !== d.h$.READY &&
                                tc === d.Q6.PLAYING &&
                                null != tr &&
                                (0, r.jsx)("span", {
                                    className: i()(Y.S, { [Y.F]: "center" === e6 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(K.A, {
                                message: tl({ hasVideoAsset: null != tr, playerState: tc, pauseReason: nn }),
                                showOverlay: null == tr,
                            }),
                            no &&
                                null != ns &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(z, { stats: ns, onClose: nc }),
                                }),
                            null != eR &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.MU,
                                    style: {
                                        opacity: (0, u.to)([rt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([rt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([rt.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eR(),
                                }),
                            tG &&
                                null != e$ &&
                                (0, r.jsx)("div", {
                                    className: Y.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: nZ,
                                    onBlur: nq,
                                    children: e$({ visible: nW, animSpring: rt, size: nk }),
                                }),
                            tJ &&
                                tc !== d.Q6.ENDED &&
                                null != eo &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (tc === d.Q6.PAUSED && nK(d.Q6.PLAYING, d.KB.USER), t0(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: Y.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: i()(Y.xr, eT, { [Y.MZ]: "portrait" === a }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [rt, rl],
                                                    (e, t) => `${e * nM.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(F.X, {
                                                text: eo,
                                                onClose: function () {
                                                    t0(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tG &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.Jp,
                                    style: {
                                        opacity: (0, u.to)([rt.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: i()(Y.yf, {
                                        [Y.ZH]: t$.current && tc === d.Q6.PLAYING,
                                        [Y.v7]: t$.current && tc === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        tc === d.Q6.PLAYING
                                            ? (0, r.jsx)(v.PlayIcon, { className: Y.PK })
                                            : (0, r.jsx)(x.PauseIcon, { className: Y.PK }),
                                },
                                tc,
                            ),
                            t1 &&
                                null != nv &&
                                !ri &&
                                (0, r.jsx)(u.animated.div, {
                                    className: Y.o$,
                                    ref: rr,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [rt.to({ range: [0, 1], output: [-n$, -nM.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-lg/semibold",
                                        color: "text-overlay-light",
                                        className: Y.qh,
                                        children: nv.text,
                                    }),
                                }),
                            tG &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: Y.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [rt.to({ range: [0, 1], output: [0, nM.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: nZ,
                                    onBlur: nq,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            className: Y.oB,
                                            style: {
                                                opacity: (0, u.to)([rt], (e) => `${ez ? 1 : e}`),
                                                visibility:
                                                    ez || nW || tj
                                                        ? void 0
                                                        : rt.to((e) => (0 === e ? "hidden" : "visible")),
                                                transform: (0, u.to)(
                                                    [rt.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * n$}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.Ay, {
                                                percent: null != tb ? tb : tg,
                                                animate:
                                                    !0 !== nt.current &&
                                                    !tw &&
                                                    tc === d.Q6.PLAYING &&
                                                    nS &&
                                                    tA === d.h$.READY,
                                                interactionEnabled: tU && nw > 0,
                                                backgroundColor: nW || ez ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                playerState: tc,
                                                preloadedBuffers: nW ? tk : void 0,
                                                durationSec: ng > 0 ? ng : +!nS,
                                                isFullyVisible: nW && tU,
                                                maxSeekableTime: null != ei && nw > 0 ? nw : void 0,
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
                                                                : tF.current && nK(d.Q6.PAUSED, d.KB.SEEK));
                                                    else {
                                                        let e = t3.current,
                                                            t =
                                                                null != e &&
                                                                !Number.isNaN(e.duration) &&
                                                                e.currentTime >= e.duration;
                                                        tI.current
                                                            ? ((tI.current = !1),
                                                              t ? nK(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE) : e?.play())
                                                            : tF.current
                                                              ? ((tF.current = !1),
                                                                t
                                                                    ? nK(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                    : nK(d.Q6.PLAYING, d.KB.USER))
                                                              : t && nK(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                    }
                                                },
                                                indicatorConfig: e0,
                                                scrubPreviewCues: na,
                                                onIndicatorSeek: re,
                                                getCurrentTimeSec: ni,
                                                "data-testid": "discord-web-video-player-timeline",
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: Y.EG,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [rt.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * n$}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [rt.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * n$}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [rt.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(R.A, {
                                                playerState: tc,
                                                animSpring: rt,
                                                visible: nW,
                                                seekForwardEnabled:
                                                    null == ei || (t3.current?.currentTime ?? 0) + 1 < nw,
                                                hideCaptionBtn: null == eu,
                                                hideTranscriptBtn: null == eo,
                                                hideFullScreenBtn: eU,
                                                hidePlaybackSpeedBtn: eQ,
                                                hideSkipButtons: nj,
                                                compactTimeDisplay: eK || nR,
                                                size: nk,
                                                downloadUrl: eD,
                                                downloadContentType: eB,
                                                extraButtons: eF,
                                                autoFocus: eZ,
                                                keyDownHandlerRef: ro,
                                                volume: tX,
                                                muted: tY,
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
                                                        t = (0, C.qf)(t7.current);
                                                    (e && null != t
                                                        ? ((0, C.tl)(t), t.addEventListener(C.Wb, n1), em?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(C.Wb, n1), em?.(!1), (0, C.sP)(t)),
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
                                                    (tz(e), ep?.(e));
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
                                    className: Y.MU,
                                    children: eL({
                                        playerState: tc,
                                        isControlBarExpanded: nW,
                                        controlBarAnimationSpring: rt,
                                        videoRef: t3,
                                        isActive: tG,
                                        isVolumeExpanded: tZ,
                                    }),
                                }),
                            !tG &&
                                (0, r.jsx)("div", {
                                    className: Y.mF,
                                    ref: tC,
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
    return (0, r.jsx)(s.Jh, { enabled: t6, children: rd });
}
