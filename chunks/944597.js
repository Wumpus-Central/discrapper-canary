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
    A = n(53200),
    w = n(23590),
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
            preloadOnHover: et = !1,
            initialTimeSec: en = 0,
            onProgressUpdate: er,
            onEnded: el,
            onError: ei,
            maxSeekableTimeSec: ea,
            captionTrackUrl: eu,
            transcriptText: eo,
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
            onLoadStart: eE,
            onLoadEnd: eb,
            onFirstFrame: eP,
            onBufferingStart: eS,
            onBufferingEnd: ey,
            onFocusChange: eC,
            onVisibilityChange: eA,
            onSeek: ew,
            onTimelineDragStateChange: eR,
            renderOverlay: eN,
            renderPersistentOverlay: eT,
            transcriptClassName: ek,
            onHlsInstance: eL,
            onClick: eM,
            preload: ej,
            downloadUrl: eD,
            fileSizeBytes: eI,
            downloadContentType: eB,
            extraButtons: eF,
            renderTopStartOverlay: e$,
            hideFullScreenBtn: eG = !1,
            hideSkipButtons: eH,
            compactTimeDisplay: e_ = !1,
            hidePlaybackSpeedBtn: eU = !1,
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
            minWidth: e9 = 240,
            minHeight: e7 = 180,
            muxContentMetadata: e3,
            awaitMuxReady: e5 = !1,
            playerRef: te,
            ref: tt,
        } = e,
        tn = k ?? Z,
        tr = eQ ?? H.u,
        { focused: tl, focusedChanged: ti } = (0, G.A7)(),
        { visible: ta, visibleChanged: tu, targetRef: to } = (0, G.O7)(),
        [ts, tc] = l.useState(n ? d.Q6.PLAYING : d.Q6.PAUSED),
        [td, tm] = l.useState(!1),
        [tf, tp] = l.useState(!1),
        [th, tx] = l.useState(!1),
        [tv, tg] = l.useState(0),
        [tE, tb] = l.useState(null),
        tP = l.useCallback((e) => {
            (tb(null), tg(e));
        }, []),
        tS = l.useRef(null),
        [ty, tC] = l.useState(!1),
        tA = l.useRef(null),
        [tw, tR] = l.useState(d.h$.LOADING),
        tN = l.useRef(!1),
        tT = l.useRef(null),
        [tk, tL] = l.useState([]),
        [tM, tj] = l.useState(!1),
        tD = l.useRef(!1),
        tI = l.useRef(!1),
        tB = l.useRef(!1),
        tF = l.useRef(!1),
        [t$, tG] = l.useState(!0),
        tH = l.useRef(!0),
        t_ = l.useRef(null),
        tU = l.useRef(null),
        [tO, tK] = l.useState(n || ee),
        [tQ, tz] = l.useState(eh),
        [tV, tX] = l.useState(ex),
        tY = eq || eZ,
        [tW, tq] = l.useState(!tY),
        [tZ, tJ] = l.useState(!1),
        [t0, t1] = l.useState(!1),
        [t2, t6] = l.useState(!1),
        t4 = (0, c.bG)([S.Ay], () => S.Ay.useReducedMotion),
        t8 = (0, c.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        t9 = (0, l.useRef)(null),
        t7 = (0, l.useRef)(null),
        t3 = (0, l.useRef)(null),
        t5 = (0, l.useRef)(null),
        ne = l.useRef(!0),
        [nt, nn] = l.useState(null),
        nr = l.useRef(null),
        nl = (0, D.z5)(tO, nr, e0, e1),
        ni = l.useCallback(() => t9.current?.currentTime ?? null, []),
        na = l.useMemo(
            () => ({
                get current() {
                    return (0, $.c)(t9.current);
                },
            }),
            [],
        );
    (0, _.A)({ videoRef: na, canvasRef: t3, enabled: tO && e4 && !t4, canvasWidth: 32, canvasHeight: 18 });
    let {
            showStats: nu,
            videoStats: no,
            onCloseStats: ns,
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
        })({ videoRef: t9, src: tn, fileSizeBytes: eI }),
        nc = l.useCallback(
            (e, t) => {
                ei?.(e, t);
            },
            [ei],
        ),
        { isHlsActive: nd, hls: nm } = (function (e, t) {
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
                g = !x && C.u.isHlsUrl(n) && (0, A.Ap)();
            return (
                l.useEffect(() => {
                    if (!g || null == n || null == e.current) return;
                    let t = e.current,
                        r = !1,
                        l = null,
                        i = null;
                    return (
                        (0, A.E)().then((e) => {
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
        })(na, { src: tn, initialTimeSec: en, onError: nc, onHlsInstance: eL, crossOrigin: e6 }),
        { isReady: nf } = (0, w.A)({ videoRef: na, hls: nm, contentMetadata: e3, isHls: nd }),
        np = e5 && !nf && !nd,
        [nh, nx] = l.useState(null),
        [nv, ng] = l.useState(0),
        [nE, nb] = l.useState(!1),
        nP = ea ?? t9.current?.duration ?? 0,
        [nS, ny] = l.useState(!1),
        nC = (0, P.A)((e) => {
            let t = e.contentRect.width;
            t <= 0 || ny(t < T.$7);
        });
    (0, b.g)(t7, nC, [], { enabled: eO, fireOnMount: eO });
    let { size: nA, config: nw } = l.useMemo(() => (0, T.ZH)(eO && nS ? d.oA.SM : d.oA.MD, eK, t2), [eO, nS, eK, t2]),
        nR = nw.timelineVerticalPaddingPx;
    (0, E.u5)(() => {
        ne.current && (ne.current = !1);
    });
    let nN = (0, P.A)(() => {
            if (null == t9.current) return;
            let e = ev?.() ?? tQ,
                t = eg?.() ?? tV;
            (e !== tQ && tz(e), t !== tV && tX(t), (t9.current.volume = t ? 0 : e));
        }),
        nT = (0, P.A)(() => {
            (tO || nN(), tK(!0));
        }),
        nk = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (((tF.current = !0), tc(e), ed?.(e, t), null != t9.current))
                    switch (e) {
                        case d.Q6.PLAYING:
                            (nn(null), nT(), t9.current.play());
                            break;
                        case d.Q6.PAUSED:
                            ((tD.current = !1), t9.current.pause(), (tH.current = !1));
                            break;
                        case d.Q6.ENDED:
                            tJ(!1);
                    }
            },
            [ed, nT],
        );
    (l.useEffect(() => {
        if (!eV) return;
        let e = null != t && (t === m.ip.HIDDEN || t === m.ip.EXITING || t === m.ip.EXITED),
            n = null != t && tu && !ta,
            r = ti && !tl;
        if ((e || n || r) && null != t9.current && ts === d.Q6.PLAYING) {
            let t = e || n ? d.KB.VISIBILITY : d.KB.FOCUS;
            (nn(t), nk(d.Q6.PAUSED, t));
        }
    }, [eV, t, tl, ti, ta, tu, ts, nk]),
        (0, U.A)({
            videoRef: na,
            enabled: eV,
            onPipPause: () => {
                (nn(d.KB.PICTURE_IN_PICTURE), nk(d.Q6.PAUSED, d.KB.PICTURE_IN_PICTURE));
            },
            onHiddenPause: () => {
                (nn(d.KB.FOCUS), nk(d.Q6.PAUSED, d.KB.FOCUS));
            },
        }),
        l.useEffect(() => {
            ti && eC?.(tl, ts);
        }, [tl, ti, ts, eC]),
        l.useEffect(() => {
            tu && eA?.(ta, ts);
        }, [ta, tu, ts, eA]));
    let [nL, nM] = l.useState(!1),
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
                            nM(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - nD.current)),
                    );
                case d.Q6.PAUSED:
                case d.Q6.ENDED:
            }
        }, [ts]),
        nB = l.useCallback(() => {
            (nM(!1), (nD.current = performance.now()), nI());
        }, [nI]);
    (l.useEffect(() => {
        if (ts !== d.Q6.PLAYING) {
            (nM(!1), null != nj.current && clearTimeout(nj.current));
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
                null != tA.current && clearTimeout(tA.current);
            },
            [],
        ));
    let nF = th && t8,
        n$ = ts === d.Q6.ENDED,
        nG = nF || ((th || td || n$) && !nL);
    function nH() {
        tx(!0);
    }
    function n_(e) {
        ((0, o.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || tx(!1);
    }
    let nU = l.useRef(!1);
    l.useEffect(() => {
        (nU.current && !nF && nB(), (nU.current = nF));
    }, [nF, nB]);
    let nO = l.useRef(em);
    nO.current = em;
    let nK = l.useCallback(() => {
        let e = (0, y.qf)(t7.current);
        null == e || (0, y._U)(e) || (e.removeEventListener(y.Wb, nK), t6(!1), nO.current?.(!1));
    }, []);
    function nQ() {
        null == t9.current ||
            (nV(Math.max((tT.current ?? t9.current.currentTime) - 10, 0)),
            ts === d.Q6.ENDED && nk(d.Q6.PAUSED, d.KB.SEEK));
    }
    function nz() {
        if (null == t9.current) return;
        let e = Math.min((tT.current ?? t9.current.currentTime) + 10, nP);
        (nV(e), ts !== d.Q6.ENDED && e >= t9.current.duration && nk(d.Q6.ENDED, d.KB.SEEK));
    }
    l.useEffect(() => {
        let e = t7.current;
        return () => {
            let t = (0, y.qf)(e);
            null != t && t.removeEventListener(y.Wb, nK);
        };
    }, [nK]);
    let nV = l.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == t9.current) return;
            let n = t9.current.currentTime;
            ((tT.current = e),
                tb((e / (t9.current.duration ?? 1)) * 100),
                tC(!0),
                null != tA.current && clearTimeout(tA.current),
                (tA.current = setTimeout(() => {
                    (tC(!1), (tA.current = null));
                }, 100)),
                (tN.current = !0),
                (t9.current.currentTime = e),
                t && ew?.(n, e));
        },
        [ew],
    );
    function nX() {
        if (null != t9.current)
            switch (ts) {
                case d.Q6.ENDED:
                    (nV(0), nk(d.Q6.PLAYING, d.KB.USER));
                    break;
                case d.Q6.PLAYING:
                    (nn(d.KB.USER), nk(d.Q6.PAUSED, d.KB.USER));
                    break;
                default:
                    nk(d.Q6.PLAYING, d.KB.USER);
            }
    }
    function nY(e) {
        null != eM ? eM(e) : (tK(!0), nX());
    }
    let nW = l.useCallback(() => {
        if (null == t9.current || 0 === t9.current.textTracks.length) return;
        let e = t9.current.textTracks[0];
        if (((e.mode = "hidden"), null != e.cues))
            for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, F.C)(n) &&
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
        if (null != t9.current) {
            if (tw === d.h$.BUFFERING) {
                let e = null != tU.current ? performance.now() - tU.current : null;
                ey?.(e);
            } else if (tw === d.h$.LOADING) {
                let e = null != t_.current ? performance.now() - t_.current : null;
                eb?.(e);
            }
            (tR(d.h$.READY), ts === d.Q6.PLAYING && (tD.current || nk(d.Q6.PLAYING, d.KB.BUFFERING_RECOVERY)));
        }
    }
    function nZ(e) {
        if ((nV(e), ts === d.Q6.ENDED && !tI.current)) {
            let t = t9.current?.duration;
            (null == t || Number.isNaN(t) || e < t) && nk(d.Q6.PLAYING, d.KB.USER);
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
            config: Y,
            onStart: () => {
                tG(!1);
            },
            onRest: () => {
                tG(!0);
            },
        })),
        n1 = (0, l.useRef)(null),
        [{ captionHeightSpring: n2 }, n6] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: Y }));
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
                n0({ controlBarAnimSpring: nG || tM ? 1 : 0, immediate: t4 }),
                () => {
                    nJ.stop();
                }
            ),
            [nG, n0, t4, tM, nJ],
        ));
    let n4 = ts === d.Q6.ENDED && null != es,
        n8 = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KB.USER;
                null != t9.current && (nV(0), nk(d.Q6.PLAYING, e));
            },
            [nV, nk],
        ),
        n9 = l.useRef(null),
        n7 = l.useCallback(
            (e) => {
                (nB(), n9.current?.(e.nativeEvent));
            },
            [nB],
        );
    l.useImperativeHandle(
        te,
        () => ({
            play: () => {
                nk(d.Q6.PLAYING, d.KB.USER);
            },
            pause: () => {
                nk(d.Q6.PAUSED, d.KB.USER);
            },
            seek: (e) => {
                nV(e);
            },
        }),
        [nk, nV],
    );
    let n3 = {
            ref: l.useCallback(
                (e) => {
                    t9.current = e;
                    let t = (0, $.c)(e);
                    ((to.current = t), "function" == typeof tt ? tt(t) : null != tt && (tt.current = t));
                },
                [tt, to],
            ),
            alt: q,
            playsInline: !0,
            mediaLayoutType: t2 ? Q.dG.STATIC : Q.dG.RESPONSIVE,
            className: a()({ [V.R]: n4, [V.IR]: !0, [V.FP]: "cover" === e8 && !t2 }),
            controls: !1,
            poster: J,
            preload: tO ? ej : tf ? "metadata" : "none",
            disablePictureInPicture: !0,
            "data-testid": "discord-web-video-player-video",
            onTimeUpdate: function (e) {
                null != t9.current &&
                    (er?.(t9.current.currentTime, t9.current.duration),
                    tN.current || tP((t9.current.currentTime / t9.current.duration) * 100));
            },
            onEnded: function (e) {
                (tR(d.h$.READY), el?.(), tI.current || nk(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE));
            },
            onLoadedData: function (e) {
                if (tw === d.h$.LOADING) {
                    let e = null != t_.current ? performance.now() - t_.current : null;
                    (eb?.(e), tR(d.h$.READY));
                }
            },
            onLoadedMetadata: function (e) {
                if (null == t9.current) return;
                (en > 0 && !nd && nV(en, !1), nN());
                let t = t9.current.duration;
                (t > 0 && isFinite(t) && ng(t), nb(!0));
            },
            onLoadStart: function () {
                ((t_.current = performance.now()), eE?.());
            },
            onPlaying: function () {
                tH.current && (eP?.(performance.now()), (tH.current = !1));
            },
            onWaiting: function (e) {
                ((tU.current = performance.now()), eS?.(), tR(d.h$.BUFFERING));
            },
            onProgress: function (e) {
                if (null == t9.current) return;
                let t = [];
                for (let e = 0; e < t9.current.buffered.length; e++) {
                    let n = t9.current.buffered.start(e),
                        r = t9.current.buffered.end(e);
                    r - n < 1 || t.push({ start: n / t9.current.duration, size: (r - n) / t9.current.duration });
                }
                tL(t);
            },
            onCanPlay: nq,
            onCanPlayThrough: nq,
            onSeeked: function () {
                ((tN.current = !1),
                    (tT.current = null),
                    null != t9.current && tP((t9.current.currentTime / t9.current.duration) * 100));
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
            isScrubbing: tM,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != eu &&
                        (0, r.jsx)("track", {
                            ref: t5,
                            src: eu,
                            label: "English",
                            kind: "captions",
                            srcLang: "en",
                            default: !0,
                        }),
                    null != e0 && (0, r.jsx)("track", { ref: nr, src: e0, kind: "metadata" }),
                ],
            }),
        },
        n5 = (0, r.jsx)(M, {
            children: (0, r.jsx)(R.pT, {
                activeLayer: t2 ? j : void 0,
                isFullscreen: t2,
                videoRef: t9,
                isActive: tO,
                controlBarConfig: nw,
                isControlBarExpanded: nG,
                children: (0, r.jsx)(p.D, {
                    className: a()(V.W6, { [V.nZ]: !tO }),
                    style: { minWidth: e9, minHeight: e7 },
                    "data-fullscreen": t2,
                    "data-testid": "discord-web-video-player-container",
                    tabIndex: tO ? -1 : 0,
                    focusProps: tO ? void 0 : { ringTarget: tS },
                    onMouseEnter: function () {
                        (tm(!0),
                            nM(!1),
                            et && tp(!0),
                            (nD.current = performance.now()),
                            null != nj.current && clearTimeout(nj.current));
                    },
                    onMouseLeave: function () {
                        (tm(!1), nM(!1));
                    },
                    "aria-label": tO ? void 0 : z.intl.string(z.t.RscU7I),
                    onClick: tO ? void 0 : nY,
                    onMouseMove: nB,
                    children: (0, r.jsxs)("div", {
                        ref: t7,
                        className: a()(V.NS, { [V.DO]: "portrait" === i, [V.r7]: "landscape" === i }),
                        tabIndex: -1,
                        onKeyDown: n7,
                        "data-testid": "discord-web-video-player-frame",
                        style: {
                            "--custom-footer-horizontal-padding": `${nw.footerHorizontalPaddingPx}px`,
                            "--custom-footer-bottom": `${nw.footerBottomPx}px`,
                            "--custom-footer-scrim-height": `${nw.scrimHeightPx}px`,
                            "--custom-controls-gap": `${nw.controlsGapPx}px`,
                            "--custom-controls-mid-gap": `${nw.midGroupGapPx}px`,
                            "--custom-duration-margin": `${nw.durationMarginPx}px`,
                            "--custom-playhead-size": `${nw.playheadSizePx}px`,
                            "--custom-timeline-hitbox-offset": `${nw.timelineHitboxOffsetPx}px`,
                            "--custom-volume-slider-margin-start": `${nw.volumeSliderMarginStartPx}px`,
                            "--custom-volume-slider-padding-inline": `${nw.volumeSliderPaddingInlinePx}px`,
                            "--custom-volume-group-margin-end": `${nw.volumeGroupMarginEndPx}px`,
                            "--custom-volume-flex-shrink": nw.volumeFlexShrink,
                            "--custom-controls-end-width":
                                null != nw.trailingGroupWidthPx ? `${nw.trailingGroupWidthPx}px` : "auto",
                        },
                        children: [
                            tO && e4 && !t4 && (0, r.jsx)("canvas", { ref: t3, className: V.Xm }),
                            n4 && es?.({ replay: n8 }),
                            ec(n3),
                            tw !== d.h$.READY &&
                                ts === d.Q6.PLAYING &&
                                null != tn &&
                                (0, r.jsx)("span", {
                                    className: a()(V.S, { [V.F]: "center" === e2 }),
                                    "data-testid": "discord-web-video-player-loading-spinner",
                                    children: (0, r.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }),
                                }),
                            (0, r.jsx)(H.A, {
                                message: tr({ hasVideoAsset: null != tn, playerState: ts, pauseReason: nt }),
                                showOverlay: null == tn,
                            }),
                            nu &&
                                null != no &&
                                (0, r.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, r.jsx)(X, { stats: no, onClose: ns }),
                                }),
                            null != eN &&
                                (0, r.jsx)(u.animated.div, {
                                    className: V.MU,
                                    style: {
                                        opacity: (0, u.to)([nJ.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                        visibility: (0, u.to)([nJ.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.1 ? "hidden" : "visible",
                                        ),
                                        pointerEvents: (0, u.to)([nJ.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                            e < 0.3 ? "none" : "auto",
                                        ),
                                    },
                                    children: eN(),
                                }),
                            tO &&
                                null != e$ &&
                                (0, r.jsx)("div", {
                                    className: V.Wq,
                                    "data-testid": "discord-web-video-player-top-start-overlay",
                                    onFocus: nH,
                                    onBlur: n_,
                                    children: e$({ visible: nG, animSpring: nJ, size: nA }),
                                }),
                            tZ &&
                                ts !== d.Q6.ENDED &&
                                null != eo &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.D, {
                                            onClick: () => {
                                                (ts === d.Q6.PAUSED && nk(d.Q6.PLAYING, d.KB.USER), tJ(!1));
                                            },
                                            tabIndex: -1,
                                            children: (0, r.jsx)("div", { className: V.BG }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: a()(V.xr, ek, { [V.MZ]: "portrait" === i }),
                                            "data-testid": "discord-web-video-player-transcript",
                                            style: {
                                                marginBottom: (0, u.to)(
                                                    [nJ, n2],
                                                    (e, t) => `${e * nw.barHeightPx + t}px`,
                                                ),
                                            },
                                            children: (0, r.jsx)(B.X, {
                                                text: eo,
                                                onClose: function () {
                                                    tJ(!1);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            tO &&
                                (0, r.jsx)(u.animated.div, {
                                    className: V.Jp,
                                    style: {
                                        opacity: (0, u.to)([nJ.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                                    },
                                }),
                            (0, r.jsx)(
                                "div",
                                {
                                    className: a()(V.yf, {
                                        [V.ZH]: tF.current && ts === d.Q6.PLAYING,
                                        [V.v7]: tF.current && ts === d.Q6.PAUSED,
                                    }),
                                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                                    children:
                                        ts === d.Q6.PLAYING
                                            ? (0, r.jsx)(x.PlayIcon, { className: V.PK })
                                            : (0, r.jsx)(v.PauseIcon, { className: V.PK }),
                                },
                                ts,
                            ),
                            t0 &&
                                null != nh &&
                                !n4 &&
                                (0, r.jsx)(u.animated.div, {
                                    className: V.o$,
                                    ref: n1,
                                    "data-testid": "discord-web-video-player-captions",
                                    style: {
                                        translateY: (0, u.to)(
                                            [nJ.to({ range: [0, 1], output: [-nR, -nw.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "text-lg/semibold",
                                        color: "text-overlay-light",
                                        className: V.qh,
                                        children: nh.text,
                                    }),
                                }),
                            tO &&
                                (0, r.jsxs)(u.animated.div, {
                                    className: V.r8,
                                    style: {
                                        height: (0, u.to)(
                                            [nJ.to({ range: [0, 1], output: [0, nw.barHeightPx] })],
                                            (e) => `${e}px`,
                                        ),
                                    },
                                    onFocus: nH,
                                    onBlur: n_,
                                    children: [
                                        (0, r.jsx)(u.animated.div, {
                                            style: {
                                                transform: (0, u.to)(
                                                    [nJ.to({ range: [1, 0], output: [0, 1] })],
                                                    (e) => `translateY(-${e * nR}px)`,
                                                ),
                                            },
                                            children: (0, r.jsx)("div", {
                                                style: nG || tM || eX ? void 0 : W,
                                                children: (0, r.jsx)(I.Ay, {
                                                    percent: null != tE ? tE : tv,
                                                    animate:
                                                        !0 !== ne.current &&
                                                        !ty &&
                                                        ts === d.Q6.PLAYING &&
                                                        nE &&
                                                        tw === d.h$.READY,
                                                    interactionEnabled: t$ && nP > 0,
                                                    backgroundColor: nG || eX ? void 0 : "rgba(0, 0, 0, 0.0)",
                                                    playerState: ts,
                                                    preloadedBuffers: nG ? tk : void 0,
                                                    durationSec: nv > 0 ? nv : +!nE,
                                                    isFullyVisible: nG && t$,
                                                    maxSeekableTime: null != ea && nP > 0 ? nP : void 0,
                                                    progressClassName: ez,
                                                    persistPlayhead: eY,
                                                    onClick: nZ,
                                                    onScrubBack: nQ,
                                                    onScrubForward: nz,
                                                    onDragStateChange: function (e) {
                                                        if (((tI.current = e), eR?.(e), tj(e), e))
                                                            ((tD.current = ts === d.Q6.PLAYING),
                                                                (tB.current = ts === d.Q6.ENDED),
                                                                tD.current
                                                                    ? t9.current?.pause()
                                                                    : tB.current && nk(d.Q6.PAUSED, d.KB.SEEK));
                                                        else {
                                                            let e = t9.current,
                                                                t =
                                                                    null != e &&
                                                                    !Number.isNaN(e.duration) &&
                                                                    e.currentTime >= e.duration;
                                                            tD.current
                                                                ? ((tD.current = !1),
                                                                  t
                                                                      ? nk(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                      : e?.play())
                                                                : tB.current
                                                                  ? ((tB.current = !1),
                                                                    t
                                                                        ? nk(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE)
                                                                        : nk(d.Q6.PLAYING, d.KB.USER))
                                                                  : t && nk(d.Q6.ENDED, d.KB.PLAYBACK_COMPLETE);
                                                        }
                                                    },
                                                    indicatorConfig: eJ,
                                                    scrubPreviewCues: nl,
                                                    onIndicatorSeek: nZ,
                                                    getCurrentTimeSec: ni,
                                                    "data-testid": "discord-web-video-player-timeline",
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(u.animated.div, {
                                            className: V.uN,
                                            "data-testid": "discord-web-video-player-controls",
                                            style: {
                                                paddingTop: (0, u.to)(
                                                    [nJ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nR}px`,
                                                ),
                                                paddingBottom: (0, u.to)(
                                                    [nJ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => `${e * e * nR}px`,
                                                ),
                                                pointerEvents: (0, u.to)(
                                                    [nJ.to({ range: [0, 1], output: [0, 1] })],
                                                    (e) => (e < 0.3 ? "none" : "auto"),
                                                ),
                                            },
                                            children: (0, r.jsx)(N.A, {
                                                playerState: ts,
                                                animSpring: nJ,
                                                visible: nG,
                                                seekForwardEnabled:
                                                    null == ea || (t9.current?.currentTime ?? 0) + 1 < nP,
                                                hideCaptionBtn: null == eu,
                                                hideTranscriptBtn: null == eo,
                                                hideFullScreenBtn: eG,
                                                hidePlaybackSpeedBtn: eU,
                                                hideSkipButtons: eH ?? "portrait" === i,
                                                compactTimeDisplay: e_,
                                                size: nA,
                                                downloadUrl: eD,
                                                downloadContentType: eB,
                                                extraButtons: eF,
                                                autoFocus: eW,
                                                keyDownHandlerRef: n9,
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
                                                        t = (0, y.qf)(t7.current);
                                                    (e && null != t
                                                        ? ((0, y.tl)(t), t.addEventListener(y.Wb, nK), em?.(!0))
                                                        : e ||
                                                          null == t ||
                                                          (t.removeEventListener(y.Wb, nK), em?.(!1), (0, y.sP)(t)),
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
                            null != eT &&
                                (0, r.jsx)("div", {
                                    className: V.MU,
                                    children: eT({
                                        playerState: ts,
                                        isControlBarExpanded: nG,
                                        controlBarAnimationSpring: nJ,
                                        videoRef: t9,
                                        isActive: tO,
                                        isVolumeExpanded: tW,
                                    }),
                                }),
                            !tO &&
                                (0, r.jsx)("div", {
                                    className: V.mF,
                                    ref: tS,
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
    return (0, r.jsx)(s.Jh, { enabled: t2, children: n5 });
}
