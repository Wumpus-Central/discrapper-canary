n.d(t, { A: () => Y }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(771253),
    o = n(382222),
    u = n(942381),
    c = n(311907),
    d = n(876230),
    m = n(645577),
    E = n(397927),
    _ = n(964486),
    p = n(775602),
    f = n(607470),
    v = n(892358),
    S = n(544180),
    h = n(723702),
    g = n(475815),
    A = n(829219),
    C = n(341915),
    T = n(405670),
    b = n(579473),
    x = n(590202),
    D = n(851936),
    y = n(792620),
    I = n(753386),
    L = n(795068),
    N = n(179615),
    R = n(576199),
    O = n(163961),
    k = n(758423),
    M = n(458817),
    w = n(873856),
    P = n(26192),
    j = n(804147),
    V = n(820636),
    U = n(654487),
    Q = n(838541),
    B = n(985018),
    F = n(655833);
let K = { tension: 250, friction: 5, clamp: !0 };
function Y(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: s,
            parentTransitionState: Y,
            performanceClockStartTime: H,
            orientation: $,
            videoUrlOverride: G,
        } = e,
        {
            sourceQuestContent: q,
            quest: W,
            videoSessionId: z,
            onClose: J,
            isFullscreenEnabled: X,
            setIsFullscreenEnabled: Z,
            useNewProgressBarStyling: ee,
        } = i.useContext(L.a),
        et = (0, T.Kr)((e) => e.transcriptEnabled),
        en = (0, T.Kr)((e) => e.setTranscriptEnabled),
        er = (0, T.Kr)((e) => e.captionEnabled),
        ei = (0, T.Kr)((e) => e.setCaptionEnabled),
        { focused: es, focusedChanged: ea } = (0, v.A7)(),
        { visible: el, visibleChanged: eo, targetRef: eu } = (0, v.O7)(),
        [ec, ed] = i.useState(!0 === s ? O.Q6.PLAYING : O.Q6.PAUSED),
        [em, eE] = i.useState(!1),
        [e_, ep] = i.useState(!1),
        ef = (0, y.Yh)(W),
        [ev, eS] = i.useState(ef.percentComplete),
        eh = i.useCallback((e) => {
            eU(null), eS(e);
        }, []),
        [eg, eA] = i.useState(!1),
        [eC, eT] = i.useState(!0),
        [eb, ex] = i.useState(!1),
        [eD, ey] = i.useState([]),
        [eI, eL] = i.useState(S.A.getEffectiveConnectionSpeed()),
        [eN, eR] = i.useState(0),
        [eO, ek] = i.useState(0),
        [eM, ew] = i.useState(!1),
        [eP, ej] = i.useState(!1),
        [eV, eU] = i.useState(null),
        eQ = i.useRef(!0),
        eB = i.useRef(null),
        eF = i.useRef(null),
        eK = (0, T.Kr)((e) => e.videoProgress[W.id] ?? T.yc, u.x),
        eY = (0, T.Kr)((e) => e.setVideoProgress),
        eH = (0, T.Kr)((e) => e.muted),
        e$ = (0, T.Kr)((e) => e.volume),
        eG = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        eq = (0, i.useRef)(null),
        eW = (0, i.useRef)(null),
        ez = i.useRef(!0),
        eJ = W.userStatus?.completedAt != null,
        eX = i.useMemo(() => W.config.features.includes(U.Li.FULL_EPISODE_VIDEO_QUEST), [W.config.features]),
        eZ = i.useRef(!1),
        [e0, e1] = i.useState(null),
        [e6, e7] = i.useState(!1),
        [e5, e4] = i.useState(!1),
        [e3, e8] = i.useState(!1),
        [e2, e9] = i.useState(null),
        te = eJ ? (eq.current?.duration ?? 0) : Math.max(eK.maxTimestampSec, ef.progressSeconds),
        tt = i.useMemo(() => (0, D.L)({ quest: W, location: U.rE.VIDEO_MODAL }), [W]),
        tn = (0, m.g)(eJ, eK, ef.progressSeconds),
        [tr, ti] = i.useState(O.oA.MD),
        ts = { [O.oA.MD]: ee ? 56 : 50, [O.oA.LG]: ee ? 64 : 58 };
    (0, _.u5)(() => {
        ez.current &&
            ((ez.current = !1),
            eL(S.A.getEffectiveConnectionSpeed()),
            eJ && eK.timestampSec >= eK.duration && eY(W.id, 0, eK.duration));
    });
    let { videoAsset: ta, videoAssetType: tl, hlsRef: to, onFirstChunkLoaded: tu } = (0, k.A)(eq, eI, tn, G),
        {
            trackQuestVideoLoadingStarted: tc,
            trackQuestVideoLoadingEnded: td,
            trackQuestVideoProgressed: tm,
            trackQuestVideoResumed: tE,
            trackQuestVideoPaused: t_,
            trackQuestVideoFocusChange: tp,
            trackQuestContentClick: tf,
            trackQuestVideoBufferingStarted: tv,
            trackQuestVideoBufferingEnded: tS,
            trackQuestVideoSegmentWatched: th,
            trackQuestVideoTimeToFirstFrame: tg,
            trackQuestVideoFullscreenChanged: tA,
            trackQuestVideoError: tC,
            trackQuestVideoVolumeChanged: tT,
        } = (0, M.A)({
            questId: W.id,
            isQuestCompleted: eJ,
            videoRef: eq,
            hlsRef: to,
            videoSessionId: z,
            videoAssetId: tl,
            sourceQuestContent: q,
            logger: tt,
            isFullEpisodeVideoQuest: eX,
        });
    (0, w.A)({ videoAssetUrl: ta?.url, videoRef: eq, hlsRef: to, videoAssetType: tl });
    let tb = i.useRef(null),
        tx = i.useCallback(() => {
            clearTimeout(tb.current),
                e8(!0),
                (tb.current = setTimeout(() => {
                    e8(!1);
                }, 1e3));
        }, []);
    i.useEffect(
        () => () => {
            null != tb.current && clearTimeout(tb.current);
        },
        [],
    );
    let tD = i.useCallback(() => eq.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: ty } = (0, v.Yr)({
            getCurrentVideoTime: tD,
            isPlaying: ec === O.Q6.PLAYING,
            isMetadataLoaded: e6,
            isInitialSeekComplete: e5,
            onAnalytics: th,
            emitIntervalMs: v.KI,
            minSegmentDurationMs: v._4,
        }),
        tI = i.useCallback(
            (e) => {
                if ((tt.info(`[QV] | updatePlayerState | playerState: ${e}`), ed(e), null != eq.current))
                    switch (e) {
                        case O.Q6.PLAYING:
                            eq.current.paused && tE(e0), e1(null), eq.current.play();
                            break;
                        case O.Q6.PAUSED:
                            eq.current.paused || ty(), eq.current.pause(), (eQ.current = !1);
                            break;
                        case O.Q6.ENDED:
                            ty(), en(!1);
                    }
            },
            [tE, e0, ty, en, tt],
        );
    i.useEffect(() => {
        t_(e0);
    }, [e0, t_]),
        i.useEffect(() => {
            ea && tp(es, ec);
        }, [es, ea, ec, tp]);
    let tL = i.useCallback(
        (e) => {
            eJ || W.userStatus?.enrolledAt == null || (tt.info(`[QV] sendServerProgressUpdate: ${e}`), (0, I.zv)(W, e)),
                tm();
        },
        [eJ, W, tt, tm],
    );
    i.useEffect(() => {
        (Y !== E.ip4.HIDDEN &&
            Y !== E.ip4.EXITING &&
            Y !== E.ip4.EXITED &&
            (null == Y || !eo || el || eJ) &&
            (!ea || es || eJ)) ||
            null == eq.current ||
            ec !== O.Q6.PLAYING ||
            (tt.info(
                `[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${Y}, visible: ${el}, focused: ${es}, isQuestCompleted: ${eJ}`,
            ),
            tI(O.Q6.PAUSED),
            eJ ? eX && e1(C.Yg.ANOTHER_MODAL_OPENED) : e1(C.Yg.LOST_FOCUS));
    }, [Y, es, ea, el, eo, ec, eJ, tI, tL, tt, eX]),
        i.useEffect(() => {
            e0 === C.Yg.ANOTHER_MODAL_OPENED &&
                Y === E.ip4.ENTERED &&
                ec === O.Q6.PAUSED &&
                eX &&
                es &&
                (tt.info("[QV] | Resuming full episode video after modal re-entered"), tI(O.Q6.PLAYING));
        }, [Y, ec, tt, tI, e0, eX, es]);
    let [tN, tR] = i.useState(!1),
        tO = i.useRef(null),
        tk = i.useRef(performance.now()),
        tM = i.useCallback(() => {
            null != tO.current && clearTimeout(tO.current),
                ec !== O.Q6.PLAYING ||
                    (tO.current = setTimeout(
                        () => {
                            ec === O.Q6.PLAYING && tR(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tk.current)),
                    ));
        }, [ec]),
        tw = () => {
            tR(!1), (tk.current = performance.now()), tM();
        };
    i.useEffect(() => {
        if (ec !== O.Q6.PLAYING) {
            tR(!1), null != tO.current && clearTimeout(tO.current);
            return;
        }
        return (
            tM(),
            () => {
                null != tO.current && clearTimeout(tO.current);
            }
        );
    }, [ec, tM]);
    let tP = !tN && (e_ || em || ec === O.Q6.ENDED),
        tj = i.useCallback(() => {
            tt.info("[QV] | handleFullScreenExit");
            let e = (0, g.qf)(eq.current?.parentNode, eq.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, tj), Z(!1), tA(!1), ti(O.oA.MD));
        }, [Z, tt, tA]),
        tV = () => {
            if (null == eq.current) return;
            let e = Math.max(eq.current.currentTime - 10, 0);
            tt.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tQ(e),
                ec === O.Q6.ENDED && tI(O.Q6.PAUSED),
                tf(C.uF.VIDEO_MODAL, x.Cy.SEEK_BACKWARD);
        },
        tU = () => {
            if (null == eq.current || !t6) return;
            let e = Math.min(eq.current.currentTime + 10, te);
            tt.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tQ(e),
                ec !== O.Q6.ENDED && e >= eq.current.duration && tI(O.Q6.ENDED),
                tf(C.uF.VIDEO_MODAL, x.Cy.SEEK_FORWARD);
        };
    i.useEffect(() => {
        let e = eq.current;
        return () => {
            let t = (0, g.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(g.Wb, tj);
        };
    }, [tj]);
    let tQ = i.useCallback(
        (e) => {
            null != eq.current &&
                (tt.info(`[QV] | seekTimeline | timeSec: ${e}`),
                eU((e / (eq.current.duration ?? 1)) * 100),
                ty(),
                eA(!0),
                e4(!1),
                (eq.current.currentTime = e),
                eY(W.id, e, eq.current.duration));
        },
        [eq, eY, W.id, ty, tt],
    );
    i.useEffect(() => {
        let e = eq.current;
        if (null == e) return;
        let t = () => {
            null != to.current &&
                to.current.mainForwardBufferInfo?.len === 0 &&
                to.current.trigger(l.sV.BUFFER_FLUSHING, {
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
    }, [eq, to]);
    let tB = () => {
            if (null != eq.current)
                switch ((tt.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), tx(), ec)) {
                    case O.Q6.ENDED:
                        tQ(0), tI(O.Q6.PLAYING);
                        break;
                    case O.Q6.PLAYING:
                        tI(O.Q6.PAUSED), e1(C.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tI(O.Q6.PLAYING);
                }
        },
        tF = (e) => {
            e9(e);
        },
        tK = (e) => {
            e9((t) => (t?.id === e.id ? null : t));
        },
        tY = i.useCallback(() => {
            if (
                null == eq.current ||
                (tt.info(`[QV] | handleTracksLoaded: textTracks.length: ${eq.current.textTracks.length}`),
                0 === eq.current.textTracks.length)
            )
                return;
            let e = eq.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, v.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tF(n)), (n.onexit = () => tK(n)));
                }
        }, [eq, tt]);
    i.useEffect(() => {
        if (null == eW.current) return;
        let e = eW.current;
        return (
            e.addEventListener("load", tY),
            () => {
                null != e && e.removeEventListener("load", tY);
            }
        );
    }, [eW, tY]);
    let tH = i.useCallback(
            (e) => {
                tt.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${eq.current?.currentTime}, videoAssetId: ${tl}, connectionSpeed: ${eI}`,
                ),
                    tC(e);
            },
            [eI, tC, eq, tl, tt],
        ),
        t$ = i.useRef(!1);
    i.useEffect(() => {
        null != ta || t$.current || ((t$.current = !0), tC(O.SB.NO_VALID_SOURCE));
    }, [ta, tC, t$]);
    let tG = (e) => {
        tt.info(`[QV] | handleCanPlay: playerState: ${ec}`),
            null != eq.current &&
                ec === O.Q6.PLAYING &&
                (tt.info("[QV] | handleCanPlay: did NOT early return"),
                eC && (tt.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eC}`), eT(!1)),
                eb &&
                    (tt.info(`[QV] | handleCanPlay: waitingForChunk: ${eb}`),
                    tS(null != eF.current ? performance.now() - eF.current : null),
                    ex(!1)),
                tt.info("[QV] | handleCanPlay: updating player state to playing"),
                tI(O.Q6.PLAYING));
    };
    i.useEffect(() => {
        if (!eg) return;
        let e = setTimeout(() => {
            eA(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eg]);
    let [{ controlBarAnimSpring: tq }, tW] = (0, E.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                ej(!1);
            },
            onRest: (e) => {
                1 === e.value && ej(!0);
            },
        })),
        tz = (0, i.useRef)(null),
        [{ captionHeightSpring: tJ }, tX] = (0, E.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: K }));
    i.useEffect(
        () => (
            tX({ captionHeightSpring: er && null != e2 ? (tz.current?.clientHeight ?? 0) : 0, immediate: eG }),
            () => {
                tJ.stop();
            }
        ),
        [er, tX, eG, e2, tJ],
    ),
        i.useEffect(
            () => (
                tW({ controlBarAnimSpring: tP || eM ? 1 : 0, immediate: eG }),
                () => {
                    tq.stop();
                }
            ),
            [tP, tW, eG, eM, tq],
        );
    let tZ = ec === O.Q6.ENDED,
        t0 = i.useMemo(() => (0, b.tW)(W, b.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [W]),
        t1 = i.useMemo(() => (0, b.tW)(W, b.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [W]),
        t6 = eJ || eK.maxTimestampSec >= (eq.current?.currentTime ?? 0) + 1,
        t7 = i.useMemo(() => null === (0, b.tW)(W, b.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [W]),
        t5 = ee ? 20 : 12,
        t4 = 20 * !!ee,
        t3 = eJ && eP;
    return (0, r.jsx)(E.DUT, {
        className: F.W6,
        "data-fullscreen": X,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            eE(!0), tR(!1), (tk.current = performance.now()), null != tO.current && clearTimeout(tO.current);
        },
        onMouseLeave: () => {
            eE(!1), tR(!1);
        },
        onMouseMove: tw,
        onKeyDown: tw,
        children: (0, r.jsxs)("div", {
            className: a()(F.NS, { [F.DO]: "portrait" === $, [F.r7]: "landscape" === $ }),
            style: { "--custom-footer-bottom": `${ee ? 4 : 2}px` },
            children: [
                tZ && (0, r.jsx)(N.A, { videoRef: eq, onTrackQuestContentClick: tf, orientation: $ }),
                (0, r.jsxs)(f.A, {
                    ref: (e) => {
                        (eq.current = e), (eu.current = e);
                    },
                    autoPlay: s,
                    playsInline: !0,
                    mediaLayoutType: X ? Q.dG.STATIC : Q.dG.RESPONSIVE,
                    className: a()({ [F.R]: tZ, [F.IR]: !0 }),
                    controls: !1,
                    poster: t0?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == eq.current) return;
                        let r = eq.current.currentTime >= t && !eZ.current && eX;
                        if (eq.current.currentTime >= eN || r) {
                            var i;
                            tt.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eq.current.currentTime}`,
                            ),
                                (i = eq.current.currentTime) >= t && (eZ.current = !0),
                                eR(i + U.aA + Math.random() * U.A6),
                                tL(i);
                        }
                        eq.current.currentTime >= eO &&
                            (ek(eq.current.currentTime + 1),
                            (0, A.Gn)(W.id, ef.taskType, eq.current.currentTime),
                            n(eq.current.currentTime)),
                            eY(W.id, eq.current.currentTime, eq.current.duration),
                            eh((eq.current.currentTime / eq.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eq.current &&
                            (tL(eq.current.duration + 1),
                            tt.info(`[QV] | handleEnded: sending progress update: ${eq.current.duration + 1}`),
                            eY(W.id, eq.current.duration, eq.current.duration)),
                            tI(O.Q6.ENDED),
                            ex(!1);
                    },
                    onLoadedData: (e) => {
                        tt.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eC}`),
                            eC && (td(null != eB.current ? performance.now() - eB.current : null), eT(!1), tu());
                    },
                    onLoadedMetadata: (e) => {
                        null != eq.current &&
                            (tt.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tl}`),
                            e7(!0),
                            tl !== b.fY.VIDEO_PLAYER_VIDEO_HLS && tQ(tn),
                            eH ? (eq.current.volume = 0) : (eq.current.volume = e$));
                    },
                    onLoadStart: () => {
                        (eB.current = performance.now()),
                            tc(eI),
                            tt.info(`[QV] | handleLoadStart | loadingStartTime: ${eB.current}`);
                    },
                    onPlaying: () => {
                        if (!eQ.current) return;
                        let e = performance.now() - H;
                        tt.info(`[QV] | ⏰ Video FCP: ${e}ms`), tg(e), (eQ.current = !1);
                    },
                    onWaiting: (e) => {
                        (eF.current = performance.now()),
                            tt.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eF.current}`),
                            tv(),
                            ex(!0);
                    },
                    onProgress: (e) => {
                        if (null == eq.current) return;
                        tt.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eq.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < eq.current.buffered.length; e++) {
                            let n = eq.current.buffered.start(e),
                                r = eq.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / eq.current.duration, size: (r - n) / eq.current.duration });
                        }
                        ey(t);
                    },
                    onCanPlay: tG,
                    onCanPlayThrough: tG,
                    onSeeked: () => {
                        tt.info("[QV] | handleSeeked"), e4(!0);
                    },
                    onAbort: () => tH(O.SB.ABORT),
                    onError: () => tH(O.SB.ERROR),
                    onEmptied: () => tH(O.SB.EMPTIED),
                    onStalled: () => tH(O.SB.STALLED),
                    onClick: () => {
                        tt.info("[QV] | handleVideoClick"), tB();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t1 &&
                            (0, r.jsx)("track", {
                                ref: eW,
                                src: t1.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != ta &&
                            tl !== b.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ta.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tH(O.SB.SOURCE_ERROR),
                                src: ta.url,
                                type: ta.mimetype,
                            }),
                    ],
                }),
                (eC || eb) &&
                    ec === O.Q6.PLAYING &&
                    null != ta &&
                    (0, r.jsx)("span", {
                        className: F.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(E.y$y, { type: E.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(v.DQ, {
                    message: ((e) => {
                        let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                        return t
                            ? n === O.Q6.PAUSED && r === d.KB.FOCUS
                                ? B.intl.string(B.t.w6PeBF)
                                : null
                            : (0, h.isWeb)()
                              ? B.intl.string(B.t["E1du/q"])
                              : B.intl.string(B.t["rStN/7"]);
                    })({
                        hasVideoAsset: null != ta,
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
                        })(e0),
                    }),
                    showOverlay: null == ta,
                }),
                ee
                    ? (0, r.jsxs)("div", {
                          className: F.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(R.A, {}),
                              (0, r.jsx)(E.K0, {
                                  variant: "overlay-secondary",
                                  icon: E.PGe,
                                  "aria-label": B.intl.string(B.t.cpT0Cq),
                                  onClick: J,
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.animated.div, {
                          className: F.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, o.to)([tq.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, o.to)([tq.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, o.to)([tq.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(R.A, {}),
                      }),
                et &&
                    ec !== O.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(E.DUT, {
                                onClick: () => {
                                    ec === O.Q6.PAUSED && tI(O.Q6.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: F.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: a()(F.xr, { [F.MZ]: "portrait" === $ }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([tq, tJ], (e, t) => `${e * ts[tr] + t}px`) },
                                children: (0, r.jsx)(V.y, {
                                    quest: W,
                                    onClose: () => {
                                        en(!1), tf(C.uF.VIDEO_MODAL, x.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: F.Jp,
                    style: { opacity: (0, o.to)([tq.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                e3 &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: a()(F.yf, { [F.ZH]: ec === O.Q6.PLAYING, [F.v7]: ec === O.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ec === O.Q6.PLAYING
                                    ? (0, r.jsx)(E.udU, { className: F.PK })
                                    : (0, r.jsx)(E.E$n, { className: F.PK }),
                        },
                        ec,
                    ),
                er &&
                    null != e2 &&
                    !tZ &&
                    (0, r.jsx)(o.animated.div, {
                        className: F.o$,
                        ref: tz,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([tq.to({ range: [0, 1], output: [-t4, -ts[tr]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(E.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: F.qh,
                            children: e2.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: F.r8,
                    style: { height: (0, o.to)([tq.to({ range: [0, 1], output: [0, ts[tr]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            style: {
                                transform: (0, o.to)(
                                    [tq.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * t4}px)`,
                                ),
                            },
                            children: (0, r.jsx)(j.A, {
                                percent: null != eV ? eV : ev,
                                animate: !0 !== ez.current && !eg,
                                interactionEnabled: t3,
                                playerState: ec,
                                preloadedBuffers: tP ? eD : void 0,
                                durationSec: eq.current?.duration ?? 1,
                                isFullyVisible: tP && eP,
                                maxSeekableTime: tP && eP ? te : void 0,
                                onClick: (e) => {
                                    t3 && (tQ(e), ec === O.Q6.ENDED && tI(O.Q6.PLAYING));
                                },
                                onScrubBack: tV,
                                onScrubForward: tU,
                                isQuestCompleted: eJ,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: F.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [tq.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * t5}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [tq.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([tq.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ep(!0),
                            onBlur: () => ep(!1),
                            children: (0, r.jsx)(P.A, {
                                videoRef: eq,
                                orientation: $,
                                playerState: ec,
                                animSpring: tq,
                                visible: tP,
                                seekForwardEnabled: t6,
                                hideCaptionBtn: null == t1,
                                hideTranscriptBtn: t7,
                                size: tr,
                                handlePlaybackBtnClick: tB,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tf(C.uF.VIDEO_MODAL, et ? x.Cy.TRANSCRIPT_DISABLE : x.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ei(!er),
                                        tf(
                                            C.uF.VIDEO_MODAL,
                                            er ? x.Cy.CLOSED_CAPTIONING_DISABLE : x.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !X;
                                    tt.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, g.qf)(eq.current?.parentNode, eq.current);
                                    e && null != t
                                        ? ((0, g.tl)(t), t.addEventListener(g.Wb, tj), tA(!0), ti(O.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(g.Wb, tj), tA(!1), (0, g.sP)(t), ti(O.oA.MD)),
                                        Z(e);
                                },
                                handleSeekBackBtnClick: tV,
                                handleSeekForwardBtnClick: tU,
                                handleControlBarPendingInteraction: ew,
                                onVolumeChange: tT,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
