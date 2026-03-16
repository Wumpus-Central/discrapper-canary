n.d(t, { A: () => G }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(771253),
    o = n(497766),
    u = n(942381),
    c = n(311907),
    d = n(645577),
    m = n(397927),
    p = n(964486),
    f = n(775602),
    E = n(607470),
    h = n(892358),
    v = n(544180),
    x = n(475815),
    g = n(829219),
    S = n(341915),
    A = n(405670),
    C = n(943849),
    _ = n(579473),
    b = n(590202),
    y = n(792620),
    T = n(753386),
    N = n(179615),
    D = n(576199),
    R = n(163961),
    L = n(758423),
    M = n(458817),
    j = n(873856),
    I = n(26192),
    w = n(752231),
    k = n(804147),
    O = n(820636),
    P = n(272887),
    Q = n(654487),
    U = n(838541),
    V = n(985018),
    B = n(681636);
let F = { tension: 250, friction: 5, clamp: !0 };
function G(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: i,
            parentTransitionState: G,
            performanceClockStartTime: K,
            orientation: $,
            videoUrlOverride: Y,
        } = e,
        {
            sourceQuestContent: H,
            quest: z,
            videoSessionId: W,
            onClose: q,
            isFullscreenEnabled: X,
            setIsFullscreenEnabled: J,
            useNewProgressBarStyling: Z,
        } = l.useContext(w.VideoQuestModalContext),
        ee = (0, A.Kr)((e) => e.transcriptEnabled),
        et = (0, A.Kr)((e) => e.setTranscriptEnabled),
        en = (0, A.Kr)((e) => e.captionEnabled),
        er = (0, A.Kr)((e) => e.setCaptionEnabled),
        { focused: el, focusedChanged: ei } = (0, h.A7)(),
        { visible: es, visibleChanged: ea, targetRef: eo } = (0, h.O7)(),
        [eu, ec] = l.useState(!0 === i ? R.Q6.PLAYING : R.Q6.PAUSED),
        [ed, em] = l.useState(!1),
        [ep, ef] = l.useState(!1),
        eE = (0, y.Yh)(z),
        [eh, ev] = l.useState(eE.percentComplete),
        ex = l.useCallback((e) => {
            eQ(null), ev(e);
        }, []),
        [eg, eS] = l.useState(!1),
        [eA, eC] = l.useState(!0),
        [e_, eb] = l.useState(!1),
        [ey, eT] = l.useState([]),
        [eN, eD] = l.useState(v.A.getEffectiveConnectionSpeed()),
        [eR, eL] = l.useState(0),
        [eM, ej] = l.useState(0),
        [eI, ew] = l.useState(!1),
        [ek, eO] = l.useState(!1),
        [eP, eQ] = l.useState(null),
        eU = l.useRef(!0),
        eV = l.useRef(null),
        eB = l.useRef(null),
        eF = (0, A.Kr)((e) => e.videoProgress[z.id] ?? A.yc, u.x),
        eG = (0, A.Kr)((e) => e.setVideoProgress),
        eK = (0, A.Kr)((e) => e.muted),
        e$ = (0, A.Kr)((e) => e.volume),
        eY = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        eH = (0, l.useRef)(null),
        ez = (0, l.useRef)(null),
        eW = l.useRef(!0),
        eq = z.userStatus?.completedAt != null,
        eX = l.useMemo(() => z.config.features.includes(Q.Li.FULL_EPISODE_VIDEO_QUEST), [z.config.features]),
        eJ = l.useRef(!1),
        [eZ, e0] = l.useState(null),
        [e1, e6] = l.useState(!1),
        [e2, e7] = l.useState(!1),
        [e4, e9] = l.useState(!1),
        [e8, e3] = l.useState(null),
        e5 = eq ? (eH.current?.duration ?? 0) : Math.max(eF.maxTimestampSec, eE.progressSeconds),
        te = l.useMemo(() => (0, C.L)({ quest: z, location: Q.rE.VIDEO_MODAL }), [z]),
        tt = (0, d.g)(eq, eF, eE.progressSeconds),
        [tn, tr] = l.useState(R.oA.MD),
        tl = { [R.oA.MD]: Z ? 56 : 50, [R.oA.LG]: Z ? 64 : 58 };
    (0, p.u5)(() => {
        eW.current &&
            ((eW.current = !1),
            eD(v.A.getEffectiveConnectionSpeed()),
            eq && eF.timestampSec >= eF.duration && eG(z.id, 0, eF.duration));
    });
    let { videoAsset: ti, videoAssetType: ts, hlsRef: ta, onFirstChunkLoaded: to } = (0, L.A)(eH, eN, tt, Y),
        {
            trackQuestVideoLoadingStarted: tu,
            trackQuestVideoLoadingEnded: tc,
            trackQuestVideoProgressed: td,
            trackQuestVideoResumed: tm,
            trackQuestVideoPaused: tp,
            trackQuestVideoFocusChange: tf,
            trackQuestContentClick: tE,
            trackQuestVideoBufferingStarted: th,
            trackQuestVideoBufferingEnded: tv,
            trackQuestVideoSegmentWatched: tx,
            trackQuestVideoTimeToFirstFrame: tg,
            trackQuestVideoFullscreenChanged: tS,
            trackQuestVideoError: tA,
            trackQuestVideoVolumeChanged: tC,
        } = (0, M.A)({
            questId: z.id,
            isQuestCompleted: eq,
            videoRef: eH,
            hlsRef: ta,
            videoSessionId: W,
            videoAssetId: ts,
            sourceQuestContent: H,
            logger: te,
            isFullEpisodeVideoQuest: eX,
        });
    (0, j.A)({ videoAssetUrl: ti?.url, videoRef: eH, hlsRef: ta, videoAssetType: ts });
    let t_ = l.useRef(null),
        tb = l.useCallback(() => {
            clearTimeout(t_.current),
                e9(!0),
                (t_.current = setTimeout(() => {
                    e9(!1);
                }, 1e3));
        }, []);
    l.useEffect(
        () => () => {
            null != t_.current && clearTimeout(t_.current);
        },
        [],
    );
    let ty = l.useCallback(() => eH.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tT } = (0, h.Yr)({
            getCurrentVideoTime: ty,
            isPlaying: eu === R.Q6.PLAYING,
            isMetadataLoaded: e1,
            isInitialSeekComplete: e2,
            onAnalytics: tx,
            emitIntervalMs: h.KI,
            minSegmentDurationMs: h._4,
        }),
        tN = l.useCallback(
            (e) => {
                if ((te.info(`[QV] | updatePlayerState | playerState: ${e}`), ec(e), null != eH.current))
                    switch (e) {
                        case R.Q6.PLAYING:
                            eH.current.paused && tm(eZ), e0(null), eH.current.play();
                            break;
                        case R.Q6.PAUSED:
                            eH.current.paused || tT(), eH.current.pause(), (eU.current = !1);
                            break;
                        case R.Q6.ENDED:
                            tT(), et(!1);
                    }
            },
            [tm, eZ, tT, et, te],
        );
    l.useEffect(() => {
        tp(eZ);
    }, [eZ, tp]),
        l.useEffect(() => {
            ei && tf(el, eu);
        }, [el, ei, eu, tf]);
    let tD = l.useCallback(
        (e) => {
            eq || z.userStatus?.enrolledAt == null || (te.info(`[QV] sendServerProgressUpdate: ${e}`), (0, T.zv)(z, e)),
                td();
        },
        [eq, z, te, td],
    );
    l.useEffect(() => {
        (G !== m.ip4.HIDDEN &&
            G !== m.ip4.EXITING &&
            G !== m.ip4.EXITED &&
            (null == G || !ea || es || eq) &&
            (!ei || el || eq)) ||
            null == eH.current ||
            eu !== R.Q6.PLAYING ||
            (te.info(
                `[QV] | Pausing video | playerState: ${eu}, parentTransitionState: ${G}, visible: ${es}, focused: ${el}, isQuestCompleted: ${eq}`,
            ),
            tN(R.Q6.PAUSED),
            eq ? eX && e0(S.Yg.ANOTHER_MODAL_OPENED) : e0(S.Yg.LOST_FOCUS));
    }, [G, el, ei, es, ea, eu, eq, tN, tD, te, eX]),
        l.useEffect(() => {
            eZ === S.Yg.ANOTHER_MODAL_OPENED &&
                G === m.ip4.ENTERED &&
                eu === R.Q6.PAUSED &&
                eX &&
                el &&
                (te.info("[QV] | Resuming full episode video after modal re-entered"), tN(R.Q6.PLAYING));
        }, [G, eu, te, tN, eZ, eX, el]);
    let [tR, tL] = l.useState(!1),
        tM = l.useRef(null),
        tj = l.useRef(performance.now()),
        tI = l.useCallback(() => {
            null != tM.current && clearTimeout(tM.current),
                eu !== R.Q6.PLAYING ||
                    (tM.current = setTimeout(
                        () => {
                            eu === R.Q6.PLAYING && tL(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tj.current)),
                    ));
        }, [eu]),
        tw = () => {
            tL(!1), (tj.current = performance.now()), tI();
        };
    l.useEffect(() => {
        if (eu !== R.Q6.PLAYING) {
            tL(!1), null != tM.current && clearTimeout(tM.current);
            return;
        }
        return (
            tI(),
            () => {
                null != tM.current && clearTimeout(tM.current);
            }
        );
    }, [eu, tI]);
    let tk = !tR && (ep || ed || eu === R.Q6.ENDED),
        tO = l.useCallback(() => {
            te.info("[QV] | handleFullScreenExit");
            let e = (0, x.qf)(eH.current?.parentNode, eH.current);
            null == e || (0, x._U)(e) || (e.removeEventListener(x.Wb, tO), J(!1), tS(!1), tr(R.oA.MD));
        }, [J, te, tS]),
        tP = () => {
            if (null == eH.current) return;
            let e = Math.max(eH.current.currentTime - 10, 0);
            te.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tU(e),
                eu === R.Q6.ENDED && tN(R.Q6.PAUSED),
                tE(S.uF.VIDEO_MODAL, b.Cy.SEEK_BACKWARD);
        },
        tQ = () => {
            if (null == eH.current || !t1) return;
            let e = Math.min(eH.current.currentTime + 10, e5);
            te.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tU(e),
                eu !== R.Q6.ENDED && e >= eH.current.duration && tN(R.Q6.ENDED),
                tE(S.uF.VIDEO_MODAL, b.Cy.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eH.current;
        return () => {
            let t = (0, x.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(x.Wb, tO);
        };
    }, [tO]);
    let tU = l.useCallback(
        (e) => {
            null != eH.current &&
                (te.info(`[QV] | seekTimeline | timeSec: ${e}`),
                eQ((e / (eH.current.duration ?? 1)) * 100),
                tT(),
                eS(!0),
                e7(!1),
                (eH.current.currentTime = e),
                eG(z.id, e, eH.current.duration));
        },
        [eH, eG, z.id, tT, te],
    );
    l.useEffect(() => {
        let e = eH.current;
        if (null == e) return;
        let t = () => {
            null != ta.current &&
                ta.current.mainForwardBufferInfo?.len === 0 &&
                ta.current.trigger(a.sV.BUFFER_FLUSHING, {
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
    }, [eH, ta]);
    let tV = () => {
            if (null != eH.current)
                switch ((te.info(`[QV] | handlePlaybackBtnClick | playerState: ${eu}`), tb(), eu)) {
                    case R.Q6.ENDED:
                        tU(0), tN(R.Q6.PLAYING);
                        break;
                    case R.Q6.PLAYING:
                        tN(R.Q6.PAUSED), e0(S.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tN(R.Q6.PLAYING);
                }
        },
        tB = (e) => {
            e3(e);
        },
        tF = (e) => {
            e3((t) => (t?.id === e.id ? null : t));
        },
        tG = l.useCallback(() => {
            if (
                null == eH.current ||
                (te.info(`[QV] | handleTracksLoaded: textTracks.length: ${eH.current.textTracks.length}`),
                0 === eH.current.textTracks.length)
            )
                return;
            let e = eH.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, h.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tB(n)), (n.onexit = () => tF(n)));
                }
        }, [eH, te]);
    l.useEffect(() => {
        if (null == ez.current) return;
        let e = ez.current;
        return (
            e.addEventListener("load", tG),
            () => {
                null != e && e.removeEventListener("load", tG);
            }
        );
    }, [ez, tG]);
    let tK = l.useCallback(
            (e) => {
                te.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${eH.current?.currentTime}, videoAssetId: ${ts}, connectionSpeed: ${eN}`,
                ),
                    tA(e);
            },
            [eN, tA, eH, ts, te],
        ),
        t$ = l.useRef(!1);
    l.useEffect(() => {
        null != ti || t$.current || ((t$.current = !0), tA(R.SB.NO_VALID_SOURCE));
    }, [ti, tA, t$]);
    let tY = (e) => {
        te.info(`[QV] | handleCanPlay: playerState: ${eu}`),
            null != eH.current &&
                eu === R.Q6.PLAYING &&
                (te.info("[QV] | handleCanPlay: did NOT early return"),
                eA && (te.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eA}`), eC(!1)),
                e_ &&
                    (te.info(`[QV] | handleCanPlay: waitingForChunk: ${e_}`),
                    tv(null != eB.current ? performance.now() - eB.current : null),
                    eb(!1)),
                te.info("[QV] | handleCanPlay: updating player state to playing"),
                tN(R.Q6.PLAYING));
    };
    l.useEffect(() => {
        if (!eg) return;
        let e = setTimeout(() => {
            eS(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eg]);
    let [{ controlBarAnimSpring: tH }, tz] = (0, m.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: F,
            onStart: () => {
                eO(!1);
            },
            onRest: (e) => {
                1 === e.value && eO(!0);
            },
        })),
        tW = (0, l.useRef)(null),
        [{ captionHeightSpring: tq }, tX] = (0, m.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
    l.useEffect(
        () => (
            tX({ captionHeightSpring: en && null != e8 ? (tW.current?.clientHeight ?? 0) : 0, immediate: eY }),
            () => {
                tq.stop();
            }
        ),
        [en, tX, eY, e8, tq],
    ),
        l.useEffect(
            () => (
                tz({ controlBarAnimSpring: tk || eI ? 1 : 0, immediate: eY }),
                () => {
                    tH.stop();
                }
            ),
            [tk, tz, eY, eI, tH],
        );
    let tJ = eu === R.Q6.ENDED,
        tZ = l.useMemo(() => (0, _.tW)(z, _.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [z]),
        t0 = l.useMemo(() => (0, _.tW)(z, _.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [z]),
        t1 = eq || eF.maxTimestampSec >= (eH.current?.currentTime ?? 0) + 1,
        t6 = l.useMemo(() => null === (0, _.tW)(z, _.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [z]),
        t2 = Z ? 20 : 12,
        t7 = 20 * !!Z,
        t4 = eq && ek;
    return (0, r.jsx)(m.DUT, {
        className: B.W6,
        "data-fullscreen": X,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            em(!0), tL(!1), (tj.current = performance.now()), null != tM.current && clearTimeout(tM.current);
        },
        onMouseLeave: () => {
            em(!1), tL(!1);
        },
        onMouseMove: tw,
        onKeyDown: tw,
        children: (0, r.jsxs)("div", {
            className: s()(B.NS, { [B.DO]: "portrait" === $, [B.r7]: "landscape" === $ }),
            style: { "--custom-footer-bottom": `${Z ? 4 : 2}px` },
            children: [
                tJ && (0, r.jsx)(N.A, { videoRef: eH, onTrackQuestContentClick: tE, orientation: $ }),
                (0, r.jsxs)(E.A, {
                    ref: (e) => {
                        (eH.current = e), (eo.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: X ? U.dG.STATIC : U.dG.RESPONSIVE,
                    className: s()({ [B.R]: tJ, [B.IR]: !0 }),
                    controls: !1,
                    poster: tZ?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == eH.current) return;
                        let r = eH.current.currentTime >= t && !eJ.current && eX;
                        if (eH.current.currentTime >= eR || r) {
                            var l;
                            te.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eH.current.currentTime}`,
                            ),
                                (l = eH.current.currentTime) >= t && (eJ.current = !0),
                                eL(l + Q.aA + Math.random() * Q.A6),
                                tD(l);
                        }
                        eH.current.currentTime >= eM &&
                            (ej(eH.current.currentTime + 1),
                            (0, g.Gn)(z.id, eE.taskType, eH.current.currentTime),
                            n(eH.current.currentTime)),
                            eG(z.id, eH.current.currentTime, eH.current.duration),
                            ex((eH.current.currentTime / eH.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eH.current &&
                            (tD(eH.current.duration + 1),
                            te.info(`[QV] | handleEnded: sending progress update: ${eH.current.duration + 1}`),
                            eG(z.id, eH.current.duration, eH.current.duration)),
                            tN(R.Q6.ENDED),
                            eb(!1);
                    },
                    onLoadedData: (e) => {
                        te.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eA}`),
                            eA && (tc(null != eV.current ? performance.now() - eV.current : null), eC(!1), to());
                    },
                    onLoadedMetadata: (e) => {
                        null != eH.current &&
                            (te.info(`[QV] | handleLoadedMetadata | videoAssetId: ${ts}`),
                            e6(!0),
                            ts !== _.fY.VIDEO_PLAYER_VIDEO_HLS && tU(tt),
                            eK ? (eH.current.volume = 0) : (eH.current.volume = e$));
                    },
                    onLoadStart: () => {
                        (eV.current = performance.now()),
                            tu(eN),
                            te.info(`[QV] | handleLoadStart | loadingStartTime: ${eV.current}`);
                    },
                    onPlaying: () => {
                        if (!eU.current) return;
                        let e = performance.now() - K;
                        te.info(`[QV] | ⏰ Video FCP: ${e}ms`), tg(e), (eU.current = !1);
                    },
                    onWaiting: (e) => {
                        (eB.current = performance.now()),
                            te.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eB.current}`),
                            th(),
                            eb(!0);
                    },
                    onProgress: (e) => {
                        if (null == eH.current) return;
                        te.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eH.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < eH.current.buffered.length; e++) {
                            let n = eH.current.buffered.start(e),
                                r = eH.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / eH.current.duration, size: (r - n) / eH.current.duration });
                        }
                        eT(t);
                    },
                    onCanPlay: tY,
                    onCanPlayThrough: tY,
                    onSeeked: () => {
                        te.info("[QV] | handleSeeked"), e7(!0);
                    },
                    onAbort: () => tK(R.SB.ABORT),
                    onError: () => tK(R.SB.ERROR),
                    onEmptied: () => tK(R.SB.EMPTIED),
                    onStalled: () => tK(R.SB.STALLED),
                    onClick: () => {
                        te.info("[QV] | handleVideoClick"), tV();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t0 &&
                            (0, r.jsx)("track", {
                                ref: ez,
                                src: t0.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != ti &&
                            ts !== _.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ti.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tK(R.SB.SOURCE_ERROR),
                                src: ti.url,
                                type: ti.mimetype,
                            }),
                    ],
                }),
                (eA || e_) &&
                    eu === R.Q6.PLAYING &&
                    null != ti &&
                    (0, r.jsx)("span", {
                        className: B.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(m.y$y, { type: m.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(P.A, { hasVideoAsset: null != ti, playerState: eu, pauseReason: eZ }),
                Z
                    ? (0, r.jsxs)("div", {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(D.A, {}),
                              (0, r.jsx)(m.K0, {
                                  variant: "overlay-secondary",
                                  icon: m.PGe,
                                  "aria-label": V.intl.string(V.t.cpT0Cq),
                                  onClick: q,
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.animated.div, {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, o.to)([tH.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, o.to)([tH.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, o.to)([tH.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(D.A, {}),
                      }),
                ee &&
                    eu !== R.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.DUT, {
                                onClick: () => {
                                    eu === R.Q6.PAUSED && tN(R.Q6.PLAYING), et(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: B.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: s()(B.xr, { [B.MZ]: "portrait" === $ }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([tH, tq], (e, t) => `${e * tl[tn] + t}px`) },
                                children: (0, r.jsx)(O.y, {
                                    quest: z,
                                    onClose: () => {
                                        et(!1), tE(S.uF.VIDEO_MODAL, b.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: B.Jp,
                    style: { opacity: (0, o.to)([tH.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                e4 &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: s()(B.yf, { [B.ZH]: eu === R.Q6.PLAYING, [B.v7]: eu === R.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eu === R.Q6.PLAYING
                                    ? (0, r.jsx)(m.udU, { className: B.PK })
                                    : (0, r.jsx)(m.E$n, { className: B.PK }),
                        },
                        eu,
                    ),
                en &&
                    null != e8 &&
                    !tJ &&
                    (0, r.jsx)(o.animated.div, {
                        className: B.o$,
                        ref: tW,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([tH.to({ range: [0, 1], output: [-t7, -tl[tn]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: B.qh,
                            children: e8.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: B.r8,
                    style: { height: (0, o.to)([tH.to({ range: [0, 1], output: [0, tl[tn]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            style: {
                                transform: (0, o.to)(
                                    [tH.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * t7}px)`,
                                ),
                            },
                            children: (0, r.jsx)(k.A, {
                                percent: null != eP ? eP : eh,
                                animate: !0 !== eW.current && !eg,
                                interactionEnabled: t4,
                                playerState: eu,
                                preloadedBuffers: tk ? ey : void 0,
                                duration: eH.current?.duration ?? 1,
                                isFullyVisible: tk && ek,
                                maxSeekableTime: tk && ek ? e5 : void 0,
                                onClick: (e) => {
                                    t4 && (tU(e), eu === R.Q6.ENDED && tN(R.Q6.PLAYING));
                                },
                                onScrubBack: tP,
                                onScrubForward: tQ,
                                isQuestCompleted: eq,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: B.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [tH.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * t2}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [tH.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([tH.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ef(!0),
                            onBlur: () => ef(!1),
                            children: (0, r.jsx)(I.A, {
                                videoRef: eH,
                                orientation: $,
                                playerState: eu,
                                animSpring: tH,
                                visible: tk,
                                seekForwardEnabled: t1,
                                hideCaptionBtn: null == t0,
                                hideTranscriptBtn: t6,
                                size: tn,
                                handlePlaybackBtnClick: tV,
                                handleTranscriptBtnClick: () => {
                                    et(!ee),
                                        tE(S.uF.VIDEO_MODAL, ee ? b.Cy.TRANSCRIPT_DISABLE : b.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    er(!en),
                                        tE(
                                            S.uF.VIDEO_MODAL,
                                            en ? b.Cy.CLOSED_CAPTIONING_DISABLE : b.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !X;
                                    te.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, x.qf)(eH.current?.parentNode, eH.current);
                                    e && null != t
                                        ? ((0, x.tl)(t), t.addEventListener(x.Wb, tO), tS(!0), tr(R.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(x.Wb, tO), tS(!1), (0, x.sP)(t), tr(R.oA.MD)),
                                        J(e);
                                },
                                handleSeekBackBtnClick: tP,
                                handleSeekForwardBtnClick: tQ,
                                handleControlBarPendingInteraction: ew,
                                onVolumeChange: tC,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
