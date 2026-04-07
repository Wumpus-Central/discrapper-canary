n.d(t, { A: () => Y }), n(321073);
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(771253),
    o = n(687498),
    u = n(942381),
    c = n(311907),
    d = n(876230),
    m = n(645577),
    E = n(397927),
    _ = n(964486),
    f = n(775602),
    p = n(607470),
    S = n(697397),
    v = n(544180),
    h = n(723702),
    g = n(475815),
    A = n(829219),
    C = n(341915),
    x = n(405670),
    T = n(579473),
    D = n(590202),
    I = n(851936),
    y = n(792620),
    R = n(753386),
    N = n(795068),
    O = n(179615),
    b = n(576199),
    L = n(163961),
    M = n(758423),
    k = n(458817),
    P = n(873856),
    w = n(804147),
    V = n(820636),
    j = n(654487),
    Q = n(838541),
    U = n(985018),
    B = n(246878);
let F = { tension: 250, friction: 5, clamp: !0 };
function Y(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: i,
            autoFocus: Y = !0,
            parentTransitionState: H,
            performanceClockStartTime: G,
            orientation: $,
            videoUrlOverride: K,
        } = e,
        {
            sourceQuestContent: q,
            quest: W,
            videoSessionId: z,
            onClose: Z,
            isFullscreenEnabled: X,
            setIsFullscreenEnabled: J,
            useNewProgressBarStyling: ee,
        } = s.useContext(N.a),
        et = (0, x.Kr)((e) => e.transcriptEnabled),
        en = (0, x.Kr)((e) => e.setTranscriptEnabled),
        er = (0, x.Kr)((e) => e.captionEnabled),
        es = (0, x.Kr)((e) => e.setCaptionEnabled),
        { focused: ei, focusedChanged: ea } = (0, S.A7)(),
        { visible: el, visibleChanged: eo, targetRef: eu } = (0, S.O7)(),
        [ec, ed] = s.useState(!0 === i ? L.Q6.PLAYING : L.Q6.PAUSED),
        [em, eE] = s.useState(!1),
        [e_, ef] = s.useState(!1),
        ep = (0, y.Yh)(W),
        [eS, ev] = s.useState(ep.percentComplete),
        eh = s.useCallback((e) => {
            eQ(null), ev(e);
        }, []),
        [eg, eA] = s.useState(!1),
        [eC, ex] = s.useState(!0),
        [eT, eD] = s.useState(!1),
        [eI, ey] = s.useState([]),
        [eR, eN] = s.useState(v.A.getEffectiveConnectionSpeed()),
        [eO, eb] = s.useState(0),
        [eL, eM] = s.useState(0),
        [ek, eP] = s.useState(!1),
        [ew, eV] = s.useState(!1),
        [ej, eQ] = s.useState(null),
        eU = s.useRef(!0),
        eB = s.useRef(null),
        eF = s.useRef(null),
        eY = (0, x.Kr)((e) => e.videoProgress[W.id] ?? x.yc, u.x),
        eH = (0, x.Kr)((e) => e.setVideoProgress),
        eG = (0, x.Kr)((e) => e.muted),
        e$ = (0, x.Kr)((e) => e.setMuted),
        eK = (0, x.Kr)((e) => e.volume),
        eq = (0, x.Kr)((e) => e.setVolume),
        eW = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        ez = (0, s.useRef)(null),
        eZ = (0, s.useRef)(null),
        eX = (0, s.useRef)(null),
        eJ = s.useRef(!0),
        e0 = W.userStatus?.completedAt != null,
        e1 = s.useMemo(() => W.config.features.includes(j.Li.FULL_EPISODE_VIDEO_QUEST), [W.config.features]),
        e6 = s.useRef(!1),
        [e7, e4] = s.useState(null),
        [e9, e5] = s.useState(!1),
        [e8, e3] = s.useState(!1),
        [e2, te] = s.useState(!1),
        [tt, tn] = s.useState(null),
        tr = Math.max(eY.maxTimestampSec, ep.progressSeconds),
        ts = e0 ? (ez.current?.duration ?? 0) : (0, R.vd)(tr, eY.duration),
        ti = s.useMemo(() => (0, I.L)({ quest: W, location: j.rE.VIDEO_MODAL }), [W]),
        ta = (0, m.g)(e0, eY, ep.progressSeconds),
        [tl, to] = s.useState(L.oA.MD),
        tu = { [L.oA.MD]: ee ? 56 : 50, [L.oA.LG]: ee ? 64 : 58 };
    (0, _.u5)(() => {
        eJ.current &&
            ((eJ.current = !1),
            eN(v.A.getEffectiveConnectionSpeed()),
            e0 && eY.timestampSec >= eY.duration && eH(W.id, 0, eY.duration));
    });
    let { videoAsset: tc, videoAssetType: td, hlsRef: tm, onFirstChunkLoaded: tE } = (0, M.A)(ez, eR, ta, K),
        {
            trackQuestVideoLoadingStarted: t_,
            trackQuestVideoLoadingEnded: tf,
            trackQuestVideoProgressed: tp,
            trackQuestVideoResumed: tS,
            trackQuestVideoPaused: tv,
            trackQuestVideoFocusChange: th,
            trackQuestContentClick: tg,
            trackQuestVideoBufferingStarted: tA,
            trackQuestVideoBufferingEnded: tC,
            trackQuestVideoSegmentWatched: tx,
            trackQuestVideoTimeToFirstFrame: tT,
            trackQuestVideoFullscreenChanged: tD,
            trackQuestVideoError: tI,
            trackQuestVideoVolumeChanged: ty,
        } = (0, k.A)({
            questId: W.id,
            isQuestCompleted: e0,
            videoRef: ez,
            hlsRef: tm,
            videoSessionId: z,
            videoAssetId: td,
            sourceQuestContent: q,
            logger: ti,
            isFullEpisodeVideoQuest: e1,
        });
    (0, P.A)({ videoAssetUrl: tc?.url, videoRef: ez, hlsRef: tm, videoAssetType: td });
    let tR = s.useRef(null),
        tN = s.useCallback(() => {
            clearTimeout(tR.current),
                te(!0),
                (tR.current = setTimeout(() => {
                    te(!1);
                }, 1e3));
        }, []);
    s.useEffect(
        () => () => {
            null != tR.current && clearTimeout(tR.current);
        },
        [],
    );
    let tO = s.useCallback(() => ez.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tb } = (0, S.Yr)({
            getCurrentVideoTime: tO,
            isPlaying: ec === L.Q6.PLAYING,
            isMetadataLoaded: e9,
            isInitialSeekComplete: e8,
            onAnalytics: tx,
            emitIntervalMs: S.KI,
            minSegmentDurationMs: S._4,
        }),
        tL = s.useCallback(
            (e) => {
                if ((ti.info(`[QV] | updatePlayerState | playerState: ${e}`), ed(e), null != ez.current))
                    switch (e) {
                        case L.Q6.PLAYING:
                            ez.current.paused && tS(e7), e4(null), ez.current.play();
                            break;
                        case L.Q6.PAUSED:
                            ez.current.paused || tb(), ez.current.pause(), (eU.current = !1);
                            break;
                        case L.Q6.ENDED:
                            tb(), en(!1);
                    }
            },
            [tS, e7, tb, en, ti],
        );
    s.useEffect(() => {
        tv(e7);
    }, [e7, tv]),
        s.useEffect(() => {
            ea && th(ei, ec);
        }, [ei, ea, ec, th]);
    let tM = s.useCallback(
        (e) => {
            e0 || W.userStatus?.enrolledAt == null || (ti.info(`[QV] sendServerProgressUpdate: ${e}`), (0, R.zv)(W, e)),
                tp();
        },
        [e0, W, ti, tp],
    );
    s.useEffect(() => {
        (H !== E.ip4.HIDDEN &&
            H !== E.ip4.EXITING &&
            H !== E.ip4.EXITED &&
            (null == H || !eo || el || e0) &&
            (!ea || ei || e0)) ||
            null == ez.current ||
            ec !== L.Q6.PLAYING ||
            (ti.info(
                `[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${H}, visible: ${el}, focused: ${ei}, isQuestCompleted: ${e0}`,
            ),
            tL(L.Q6.PAUSED),
            e0 ? e1 && e4(C.Yg.ANOTHER_MODAL_OPENED) : e4(C.Yg.LOST_FOCUS));
    }, [H, ei, ea, el, eo, ec, e0, tL, tM, ti, e1]),
        s.useEffect(() => {
            e7 === C.Yg.ANOTHER_MODAL_OPENED &&
                H === E.ip4.ENTERED &&
                ec === L.Q6.PAUSED &&
                e1 &&
                ei &&
                (ti.info("[QV] | Resuming full episode video after modal re-entered"), tL(L.Q6.PLAYING));
        }, [H, ec, ti, tL, e7, e1, ei]);
    let [tk, tP] = s.useState(!1),
        tw = s.useRef(null),
        tV = s.useRef(performance.now()),
        tj = s.useCallback(() => {
            null != tw.current && clearTimeout(tw.current),
                ec !== L.Q6.PLAYING ||
                    (tw.current = setTimeout(
                        () => {
                            ec === L.Q6.PLAYING && tP(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tV.current)),
                    ));
        }, [ec]),
        tQ = () => {
            tP(!1), (tV.current = performance.now()), tj();
        };
    s.useEffect(() => {
        if (ec !== L.Q6.PLAYING) {
            tP(!1), null != tw.current && clearTimeout(tw.current);
            return;
        }
        return (
            tj(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [ec, tj]);
    let tU = !tk && (e_ || em || ec === L.Q6.ENDED),
        tB = s.useCallback(() => {
            ti.info("[QV] | handleFullScreenExit");
            let e = (0, g.qf)(ez.current?.parentNode, ez.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, tB), J(!1), tD(!1), to(L.oA.MD));
        }, [J, ti, tD]),
        tF = () => {
            if (null == ez.current) return;
            let e = Math.max(ez.current.currentTime - 10, 0);
            ti.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                t$(e),
                ec === L.Q6.ENDED && tL(L.Q6.PAUSED),
                tg(C.uF.VIDEO_MODAL, D.Cy.SEEK_BACKWARD);
        },
        tY = () => {
            if (null == ez.current || !t3) return;
            let e = Math.min(ez.current.currentTime + 10, ts);
            ti.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                t$(e),
                ec !== L.Q6.ENDED && e >= ez.current.duration && tL(L.Q6.ENDED),
                tg(C.uF.VIDEO_MODAL, D.Cy.SEEK_FORWARD);
        };
    s.useEffect(() => {
        let e = ez.current;
        return () => {
            let t = (0, g.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(g.Wb, tB);
        };
    }, [tB]),
        s.useEffect(() => {
            let e = (e) => eX.current?.(e);
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let tH = s.useCallback(
            (e) => {
                eq(e), ty(e);
            },
            [eq, ty],
        ),
        tG = s.useCallback(
            (e) => {
                e$(e);
            },
            [e$],
        ),
        t$ = s.useCallback(
            (e) => {
                null != ez.current &&
                    (ti.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    eQ((e / (ez.current.duration ?? 1)) * 100),
                    tb(),
                    eA(!0),
                    e3(!1),
                    (ez.current.currentTime = e),
                    eH(W.id, e, ez.current.duration));
            },
            [ez, eH, W.id, tb, ti],
        );
    s.useEffect(() => {
        let e = ez.current;
        if (null == e) return;
        let t = () => {
            null != tm.current &&
                tm.current.mainForwardBufferInfo?.len === 0 &&
                tm.current.trigger(l.sV.BUFFER_FLUSHING, {
                    startOffset: e.currentTime,
                    endOffset: 1 / 0,
                    type: "video",
                });
        };
        return (
            e.addEventListener("seeking", t),
            () => {
                e.removeEventListener("seeking", t);
            }
        );
    }, [ez, tm]);
    let tK = () => {
            if (null != ez.current)
                switch ((ti.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), tN(), ec)) {
                    case L.Q6.ENDED:
                        t$(0), tL(L.Q6.PLAYING);
                        break;
                    case L.Q6.PLAYING:
                        tL(L.Q6.PAUSED), e4(C.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tL(L.Q6.PLAYING);
                }
        },
        tq = (e) => {
            tn(e);
        },
        tW = (e) => {
            tn((t) => (t?.id === e.id ? null : t));
        },
        tz = s.useCallback(() => {
            if (
                null == ez.current ||
                (ti.info(`[QV] | handleTracksLoaded: textTracks.length: ${ez.current.textTracks.length}`),
                0 === ez.current.textTracks.length)
            )
                return;
            let e = ez.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, S.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tq(n)), (n.onexit = () => tW(n)));
                }
        }, [ez, ti]);
    s.useEffect(() => {
        if (null == eZ.current) return;
        let e = eZ.current;
        return (
            e.addEventListener("load", tz),
            () => {
                null != e && e.removeEventListener("load", tz);
            }
        );
    }, [eZ, tz]);
    let tZ = s.useCallback(
            (e) => {
                ti.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${ez.current?.currentTime}, videoAssetId: ${td}, connectionSpeed: ${eR}`,
                ),
                    tI(e);
            },
            [eR, tI, ez, td, ti],
        ),
        tX = s.useRef(!1);
    s.useEffect(() => {
        null != tc || tX.current || ((tX.current = !0), tI(L.SB.NO_VALID_SOURCE));
    }, [tc, tI, tX]);
    let tJ = (e) => {
        ti.info(`[QV] | handleCanPlay: playerState: ${ec}`),
            null != ez.current &&
                ec === L.Q6.PLAYING &&
                (ti.info("[QV] | handleCanPlay: did NOT early return"),
                eC && (ti.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eC}`), ex(!1)),
                eT &&
                    (ti.info(`[QV] | handleCanPlay: waitingForChunk: ${eT}`),
                    tC(null != eF.current ? performance.now() - eF.current : null),
                    eD(!1)),
                ti.info("[QV] | handleCanPlay: updating player state to playing"),
                tL(L.Q6.PLAYING));
    };
    s.useEffect(() => {
        if (!eg) return;
        let e = setTimeout(() => {
            eA(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eg]);
    let [{ controlBarAnimSpring: t0 }, t1] = (0, E.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: F,
            onStart: () => {
                eV(!1);
            },
            onRest: (e) => {
                1 === e.value && eV(!0);
            },
        })),
        t6 = (0, s.useRef)(null),
        [{ captionHeightSpring: t7 }, t4] = (0, E.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
    s.useEffect(
        () => (
            t4({ captionHeightSpring: er && null != tt ? (t6.current?.clientHeight ?? 0) : 0, immediate: eW }),
            () => {
                t7.stop();
            }
        ),
        [er, t4, eW, tt, t7],
    ),
        s.useEffect(
            () => (
                t1({ controlBarAnimSpring: tU || ek ? 1 : 0, immediate: eW }),
                () => {
                    t0.stop();
                }
            ),
            [tU, t1, eW, ek, t0],
        );
    let t9 = ec === L.Q6.ENDED,
        t5 = s.useMemo(() => (0, T.tW)(W, T.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [W]),
        t8 = s.useMemo(() => (0, T.tW)(W, T.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [W]),
        t3 = e0 || tr >= (ez.current?.currentTime ?? 0) + 1,
        t2 = s.useMemo(() => null === (0, T.tW)(W, T.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [W]),
        ne = ee ? 20 : 12,
        nt = 20 * !!ee,
        nn = e0 && ew;
    return (0, r.jsx)(E.DUT, {
        className: B.W6,
        "data-fullscreen": X,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            eE(!0), tP(!1), (tV.current = performance.now()), null != tw.current && clearTimeout(tw.current);
        },
        onMouseLeave: () => {
            eE(!1), tP(!1);
        },
        onMouseMove: tQ,
        onKeyDown: tQ,
        children: (0, r.jsxs)("div", {
            className: a()(B.NS, { [B.DO]: "portrait" === $, [B.r7]: "landscape" === $ }),
            style: { "--custom-footer-bottom": `${ee ? 4 : 2}px` },
            children: [
                t9 && (0, r.jsx)(O.A, { videoRef: ez, onTrackQuestContentClick: tg, orientation: $ }),
                (0, r.jsxs)(p.A, {
                    ref: (e) => {
                        (ez.current = e), (eu.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: X ? Q.dG.STATIC : Q.dG.RESPONSIVE,
                    className: a()({ [B.R]: t9, [B.IR]: !0 }),
                    controls: !1,
                    poster: t5?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == ez.current) return;
                        let r = ez.current.currentTime >= t && !e6.current && e1;
                        if (ez.current.currentTime >= eO || r) {
                            var s;
                            ti.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${ez.current.currentTime}`,
                            ),
                                (s = ez.current.currentTime) >= t && (e6.current = !0),
                                eb(s + j.aA + Math.random() * j.A6),
                                tM(s);
                        }
                        ez.current.currentTime >= eL &&
                            (eM(ez.current.currentTime + 1),
                            (0, A.Gn)(W.id, ep.taskType, ez.current.currentTime),
                            n(ez.current.currentTime)),
                            eH(W.id, ez.current.currentTime, ez.current.duration),
                            eh((ez.current.currentTime / ez.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != ez.current &&
                            (tM(ez.current.duration + 1),
                            ti.info(`[QV] | handleEnded: sending progress update: ${ez.current.duration + 1}`),
                            eH(W.id, ez.current.duration, ez.current.duration)),
                            tL(L.Q6.ENDED),
                            eD(!1);
                    },
                    onLoadedData: (e) => {
                        ti.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eC}`),
                            eC && (tf(null != eB.current ? performance.now() - eB.current : null), ex(!1), tE());
                    },
                    onLoadedMetadata: (e) => {
                        null != ez.current &&
                            (ti.info(`[QV] | handleLoadedMetadata | videoAssetId: ${td}`),
                            e5(!0),
                            td !== T.fY.VIDEO_PLAYER_VIDEO_HLS && t$(ta),
                            eG ? (ez.current.volume = 0) : (ez.current.volume = eK));
                    },
                    onLoadStart: () => {
                        (eB.current = performance.now()),
                            t_(eR),
                            ti.info(`[QV] | handleLoadStart | loadingStartTime: ${eB.current}`);
                    },
                    onPlaying: () => {
                        if (!eU.current) return;
                        let e = performance.now() - G;
                        ti.info(`[QV] | ⏰ Video FCP: ${e}ms`), tT(e), (eU.current = !1);
                    },
                    onWaiting: (e) => {
                        (eF.current = performance.now()),
                            ti.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eF.current}`),
                            tA(),
                            eD(!0);
                    },
                    onProgress: (e) => {
                        if (null == ez.current) return;
                        ti.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${ez.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < ez.current.buffered.length; e++) {
                            let n = ez.current.buffered.start(e),
                                r = ez.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / ez.current.duration, size: (r - n) / ez.current.duration });
                        }
                        ey(t);
                    },
                    onCanPlay: tJ,
                    onCanPlayThrough: tJ,
                    onSeeked: () => {
                        ti.info("[QV] | handleSeeked"), e3(!0);
                    },
                    onAbort: () => tZ(L.SB.ABORT),
                    onError: () => tZ(L.SB.ERROR),
                    onEmptied: () => tZ(L.SB.EMPTIED),
                    onStalled: () => tZ(L.SB.STALLED),
                    onClick: () => {
                        ti.info("[QV] | handleVideoClick"), tK();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t8 &&
                            (0, r.jsx)("track", {
                                ref: eZ,
                                src: t8.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tc &&
                            td !== T.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tc.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tZ(L.SB.SOURCE_ERROR),
                                src: tc.url,
                                type: tc.mimetype,
                            }),
                    ],
                }),
                (eC || eT) &&
                    ec === L.Q6.PLAYING &&
                    null != tc &&
                    (0, r.jsx)("span", {
                        className: B.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(E.y$y, { type: E.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(S.DQ, {
                    message: ((e) => {
                        let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                        return t
                            ? n === L.Q6.PAUSED && r === d.KB.FOCUS
                                ? U.intl.string(U.t.w6PeBF)
                                : null
                            : (0, h.isWeb)()
                              ? U.intl.string(U.t["E1du/q"])
                              : U.intl.string(U.t["rStN/7"]);
                    })({
                        hasVideoAsset: null != tc,
                        playerState: ec,
                        pauseReason: (function (e) {
                            switch (e) {
                                case C.Yg.PAUSE_BUTTON:
                                    return d.KB.USER;
                                case C.Yg.LOST_FOCUS:
                                    return d.KB.FOCUS;
                                case C.Yg.MODAL_CLOSED:
                                    return d.KB.VISIBILITY;
                                default:
                                    return null;
                            }
                        })(e7),
                    }),
                    showOverlay: null == tc,
                }),
                ee
                    ? (0, r.jsxs)("div", {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(b.A, {}),
                              (0, r.jsx)(E.K0, {
                                  variant: "overlay-secondary",
                                  icon: E.PGe,
                                  "aria-label": U.intl.string(U.t.cpT0Cq),
                                  onClick: Z,
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.animated.div, {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, o.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, o.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, o.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(b.A, {}),
                      }),
                et &&
                    ec !== L.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(E.DUT, {
                                onClick: () => {
                                    ec === L.Q6.PAUSED && tL(L.Q6.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: B.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: a()(B.xr, { [B.MZ]: "portrait" === $ }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([t0, t7], (e, t) => `${e * tu[tl] + t}px`) },
                                children: (0, r.jsx)(V.y, {
                                    quest: W,
                                    onClose: () => {
                                        en(!1), tg(C.uF.VIDEO_MODAL, D.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: B.Jp,
                    style: { opacity: (0, o.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                e2 &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: a()(B.yf, { [B.ZH]: ec === L.Q6.PLAYING, [B.v7]: ec === L.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ec === L.Q6.PLAYING
                                    ? (0, r.jsx)(E.udU, { className: B.PK })
                                    : (0, r.jsx)(E.E$n, { className: B.PK }),
                        },
                        ec,
                    ),
                er &&
                    null != tt &&
                    !t9 &&
                    (0, r.jsx)(o.animated.div, {
                        className: B.o$,
                        ref: t6,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([t0.to({ range: [0, 1], output: [-nt, -tu[tl]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(E.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: B.qh,
                            children: tt.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: B.r8,
                    style: { height: (0, o.to)([t0.to({ range: [0, 1], output: [0, tu[tl]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            style: {
                                transform: (0, o.to)(
                                    [t0.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * nt}px)`,
                                ),
                            },
                            children: (0, r.jsx)(w.A, {
                                percent: null != ej ? ej : eS,
                                animate: !0 !== eJ.current && !eg,
                                interactionEnabled: nn,
                                playerState: ec,
                                preloadedBuffers: tU ? eI : void 0,
                                durationSec: ez.current?.duration ?? 1,
                                isFullyVisible: tU && ew,
                                maxSeekableTime: tU && ew ? ts : void 0,
                                onClick: (e) => {
                                    nn && (t$(e), ec === L.Q6.ENDED && tL(L.Q6.PLAYING));
                                },
                                onScrubBack: tF,
                                onScrubForward: tY,
                                isQuestCompleted: e0,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: B.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [t0.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * ne}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [t0.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([t0.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ef(!0),
                            onBlur: () => ef(!1),
                            children: (0, r.jsx)(S.zZ, {
                                videoRef: ez,
                                playerState: ec,
                                animSpring: t0,
                                visible: tU,
                                seekForwardEnabled: t3,
                                hideCaptionBtn: null == t8,
                                hideTranscriptBtn: t2,
                                hideSkipButtons: "portrait" === $,
                                size: tl,
                                autoFocus: Y,
                                keyDownHandlerRef: eX,
                                volume: eK,
                                muted: eG,
                                transcriptEnabled: et,
                                captionEnabled: er,
                                fullScreenEnabled: X,
                                handlePlaybackBtnClick: tK,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tg(C.uF.VIDEO_MODAL, et ? D.Cy.TRANSCRIPT_DISABLE : D.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    es(!er),
                                        tg(
                                            C.uF.VIDEO_MODAL,
                                            er ? D.Cy.CLOSED_CAPTIONING_DISABLE : D.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !X;
                                    ti.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, g.qf)(ez.current?.parentNode, ez.current);
                                    e && null != t
                                        ? ((0, g.tl)(t), t.addEventListener(g.Wb, tB), tD(!0), to(L.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(g.Wb, tB), tD(!1), (0, g.sP)(t), to(L.oA.MD)),
                                        J(e);
                                },
                                handleSeekBackBtnClick: tF,
                                handleSeekForwardBtnClick: tY,
                                handleControlBarPendingInteraction: eP,
                                onVolumeChange: tH,
                                onMutedChange: tG,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
