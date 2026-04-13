n.d(t, { A: () => Y }), n(321073);
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(771253),
    u = n(294426),
    o = n(942381),
    c = n(311907),
    d = n(876230),
    E = n(645577),
    m = n(397927),
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
    D = n(579473),
    T = n(590202),
    I = n(851936),
    y = n(792620),
    R = n(753386),
    b = n(795068),
    N = n(179615),
    O = n(576199),
    L = n(163961),
    k = n(758423),
    M = n(458817),
    P = n(873856),
    w = n(804147),
    V = n(820636),
    Q = n(654487),
    j = n(838541),
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
        } = s.useContext(b.a),
        et = (0, x.Kr)((e) => e.transcriptEnabled),
        en = (0, x.Kr)((e) => e.setTranscriptEnabled),
        er = (0, x.Kr)((e) => e.captionEnabled),
        es = (0, x.Kr)((e) => e.setCaptionEnabled),
        { focused: ei, focusedChanged: ea } = (0, S.A7)(),
        { visible: el, visibleChanged: eu, targetRef: eo } = (0, S.O7)(),
        [ec, ed] = s.useState(!0 === i ? L.Q6.PLAYING : L.Q6.PAUSED),
        [eE, em] = s.useState(!1),
        [e_, ef] = s.useState(!1),
        ep = (0, y.Yh)(W),
        [eS, ev] = s.useState(ep.percentComplete),
        eh = s.useCallback((e) => {
            ej(null), ev(e);
        }, []),
        [eg, eA] = s.useState(!1),
        [eC, ex] = s.useState(!0),
        [eD, eT] = s.useState(!1),
        [eI, ey] = s.useState([]),
        [eR, eb] = s.useState(v.A.getEffectiveConnectionSpeed()),
        [eN, eO] = s.useState(0),
        [eL, ek] = s.useState(0),
        [eM, eP] = s.useState(!1),
        [ew, eV] = s.useState(!1),
        [eQ, ej] = s.useState(null),
        eU = s.useRef(!0),
        eB = s.useRef(null),
        eF = s.useRef(null),
        eY = (0, x.Kr)((e) => e.videoProgress[W.id] ?? x.yc, o.x),
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
        e1 = s.useMemo(() => W.config.features.includes(Q.Li.FULL_EPISODE_VIDEO_QUEST), [W.config.features]),
        e6 = s.useRef(!1),
        [e7, e4] = s.useState(null),
        [e9, e5] = s.useState(!1),
        [e8, e3] = s.useState(null),
        e2 = Math.max(eY.maxTimestampSec, ep.progressSeconds),
        te = e0 ? (ez.current?.duration ?? 0) : (0, R.vd)(e2, eY.duration),
        tt = s.useMemo(() => (0, I.L)({ quest: W, location: Q.rE.VIDEO_MODAL }), [W]),
        tn = (0, E.g)(e0, eY, ep.progressSeconds),
        [tr, ts] = s.useState(L.oA.MD),
        ti = { [L.oA.MD]: ee ? 56 : 50, [L.oA.LG]: ee ? 64 : 58 };
    (0, _.u5)(() => {
        eJ.current &&
            ((eJ.current = !1),
            eb(v.A.getEffectiveConnectionSpeed()),
            e0 && eY.timestampSec >= eY.duration && eH(W.id, 0, eY.duration));
    });
    let { videoAsset: ta, videoAssetType: tl, hlsRef: tu, onFirstChunkLoaded: to } = (0, k.A)(ez, eR, tn, K),
        {
            trackQuestVideoLoadingStarted: tc,
            trackQuestVideoLoadingEnded: td,
            trackQuestVideoProgressed: tE,
            trackQuestVideoResumed: tm,
            trackQuestVideoPaused: t_,
            trackQuestVideoFocusChange: tf,
            trackQuestContentClick: tp,
            trackQuestVideoBufferingStarted: tS,
            trackQuestVideoBufferingEnded: tv,
            trackQuestVideoSegmentWatched: th,
            trackQuestVideoTimeToFirstFrame: tg,
            trackQuestVideoFullscreenChanged: tA,
            trackQuestVideoError: tC,
            trackQuestVideoVolumeChanged: tx,
        } = (0, M.A)({
            questId: W.id,
            isQuestCompleted: e0,
            videoRef: ez,
            hlsRef: tu,
            videoSessionId: z,
            videoAssetId: tl,
            sourceQuestContent: q,
            logger: tt,
            isFullEpisodeVideoQuest: e1,
        });
    (0, P.A)({ videoAssetUrl: ta?.url, videoRef: ez, hlsRef: tu, videoAssetType: tl });
    let tD = s.useRef(null),
        tT = s.useCallback(() => {
            clearTimeout(tD.current),
                e5(!0),
                (tD.current = setTimeout(() => {
                    e5(!1);
                }, 1e3));
        }, []);
    s.useEffect(
        () => () => {
            null != tD.current && clearTimeout(tD.current);
        },
        [],
    );
    let tI = s.useCallback(() => ez.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: ty,
            handleLoadEnd: tR,
            handleFirstFrame: tb,
            handleSeek: tN,
        } = (0, S.Yr)({ getCurrentVideoTime: tI, onAnalytics: th, emitIntervalMs: S.KI, minSegmentDurationMs: S._4 }),
        tO = s.useRef(ty);
    s.useEffect(() => {
        tO.current(ec, null);
    }, []);
    let tL = s.useCallback(
        (e) => {
            if ((tt.info(`[QV] | updatePlayerState | playerState: ${e}`), ty(e, null), ed(e), null != ez.current))
                switch (e) {
                    case L.Q6.PLAYING:
                        ez.current.paused && tm(e7), e4(null), ez.current.play();
                        break;
                    case L.Q6.PAUSED:
                        ez.current.pause(), (eU.current = !1);
                        break;
                    case L.Q6.ENDED:
                        en(!1);
                }
        },
        [ty, tm, e7, en, tt],
    );
    s.useEffect(() => {
        t_(e7);
    }, [e7, t_]),
        s.useEffect(() => {
            ea && tf(ei, ec);
        }, [ei, ea, ec, tf]);
    let tk = s.useCallback(
        (e) => {
            e0 || W.userStatus?.enrolledAt == null || (tt.info(`[QV] sendServerProgressUpdate: ${e}`), (0, R.zv)(W, e)),
                tE();
        },
        [e0, W, tt, tE],
    );
    s.useEffect(() => {
        (H !== m.ip4.HIDDEN &&
            H !== m.ip4.EXITING &&
            H !== m.ip4.EXITED &&
            (null == H || !eu || el || e0) &&
            (!ea || ei || e0)) ||
            null == ez.current ||
            ec !== L.Q6.PLAYING ||
            (tt.info(
                `[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${H}, visible: ${el}, focused: ${ei}, isQuestCompleted: ${e0}`,
            ),
            tL(L.Q6.PAUSED),
            e0 ? e1 && e4(C.Yg.ANOTHER_MODAL_OPENED) : e4(C.Yg.LOST_FOCUS));
    }, [H, ei, ea, el, eu, ec, e0, tL, tk, tt, e1]),
        s.useEffect(() => {
            e7 === C.Yg.ANOTHER_MODAL_OPENED &&
                H === m.ip4.ENTERED &&
                ec === L.Q6.PAUSED &&
                e1 &&
                ei &&
                (tt.info("[QV] | Resuming full episode video after modal re-entered"), tL(L.Q6.PLAYING));
        }, [H, ec, tt, tL, e7, e1, ei]);
    let [tM, tP] = s.useState(!1),
        tw = s.useRef(null),
        tV = s.useRef(performance.now()),
        tQ = s.useCallback(() => {
            null != tw.current && clearTimeout(tw.current),
                ec !== L.Q6.PLAYING ||
                    (tw.current = setTimeout(
                        () => {
                            ec === L.Q6.PLAYING && tP(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tV.current)),
                    ));
        }, [ec]),
        tj = () => {
            tP(!1), (tV.current = performance.now()), tQ();
        };
    s.useEffect(() => {
        if (ec !== L.Q6.PLAYING) {
            tP(!1), null != tw.current && clearTimeout(tw.current);
            return;
        }
        return (
            tQ(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [ec, tQ]);
    let tU = !tM && (e_ || eE || ec === L.Q6.ENDED),
        tB = s.useCallback(() => {
            tt.info("[QV] | handleFullScreenExit");
            let e = (0, g.qf)(ez.current?.parentNode, ez.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, tB), J(!1), tA(!1), ts(L.oA.MD));
        }, [J, tt, tA]),
        tF = () => {
            if (null == ez.current) return;
            let e = Math.max(ez.current.currentTime - 10, 0);
            tt.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                t$(e),
                ec === L.Q6.ENDED && tL(L.Q6.PAUSED),
                tp(C.uF.VIDEO_MODAL, T.Cy.SEEK_BACKWARD);
        },
        tY = () => {
            if (null == ez.current || !t2) return;
            let e = Math.min(ez.current.currentTime + 10, te);
            tt.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                t$(e),
                ec !== L.Q6.ENDED && e >= ez.current.duration && tL(L.Q6.ENDED),
                tp(C.uF.VIDEO_MODAL, T.Cy.SEEK_FORWARD);
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
                eq(e), tx(e);
            },
            [eq, tx],
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
                    (tt.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    ej((e / (ez.current.duration ?? 1)) * 100),
                    tN(),
                    eA(!0),
                    (ez.current.currentTime = e),
                    eH(W.id, e, ez.current.duration));
            },
            [ez, eH, W.id, tN, tt],
        );
    s.useEffect(() => {
        let e = ez.current;
        if (null == e) return;
        let t = () => {
            null != tu.current &&
                tu.current.mainForwardBufferInfo?.len === 0 &&
                tu.current.trigger(l.sV.BUFFER_FLUSHING, {
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
    }, [ez, tu]);
    let tK = s.useRef(!1),
        tq = () => {
            if (null != ez.current)
                switch ((tt.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), tT(), ec)) {
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
        tW = (e) => {
            e3(e);
        },
        tz = (e) => {
            e3((t) => (t?.id === e.id ? null : t));
        },
        tZ = s.useCallback(() => {
            if (
                null == ez.current ||
                (tt.info(`[QV] | handleTracksLoaded: textTracks.length: ${ez.current.textTracks.length}`),
                0 === ez.current.textTracks.length)
            )
                return;
            let e = ez.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, S.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tW(n)), (n.onexit = () => tz(n)));
                }
        }, [ez, tt]);
    s.useEffect(() => {
        if (null == eZ.current) return;
        let e = eZ.current;
        return (
            e.addEventListener("load", tZ),
            () => {
                null != e && e.removeEventListener("load", tZ);
            }
        );
    }, [eZ, tZ]);
    let tX = s.useCallback(
            (e) => {
                tt.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${ez.current?.currentTime}, videoAssetId: ${tl}, connectionSpeed: ${eR}`,
                ),
                    tC(e);
            },
            [eR, tC, ez, tl, tt],
        ),
        tJ = s.useRef(!1);
    s.useEffect(() => {
        null != ta || tJ.current || ((tJ.current = !0), tC(L.SB.NO_VALID_SOURCE));
    }, [ta, tC, tJ]);
    let t0 = (e) => {
        tt.info(`[QV] | handleCanPlay: playerState: ${ec}`),
            null != ez.current &&
                ec === L.Q6.PLAYING &&
                (tt.info("[QV] | handleCanPlay: did NOT early return"),
                eC && (tt.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eC}`), ex(!1)),
                eD &&
                    (tt.info(`[QV] | handleCanPlay: waitingForChunk: ${eD}`),
                    tv(null != eF.current ? performance.now() - eF.current : null),
                    eT(!1)),
                tt.info("[QV] | handleCanPlay: updating player state to playing"),
                tL(L.Q6.PLAYING));
    };
    s.useEffect(() => {
        if (!eg) return;
        let e = setTimeout(() => {
            eA(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eg]);
    let [{ controlBarAnimSpring: t1 }, t6] = (0, m.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: F,
            onStart: () => {
                eV(!1);
            },
            onRest: (e) => {
                1 === e.value && eV(!0);
            },
        })),
        t7 = (0, s.useRef)(null),
        [{ captionHeightSpring: t4 }, t9] = (0, m.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
    s.useEffect(
        () => (
            t9({ captionHeightSpring: er && null != e8 ? (t7.current?.clientHeight ?? 0) : 0, immediate: eW }),
            () => {
                t4.stop();
            }
        ),
        [er, t9, eW, e8, t4],
    ),
        s.useEffect(
            () => (
                t6({ controlBarAnimSpring: tU || eM ? 1 : 0, immediate: eW }),
                () => {
                    t1.stop();
                }
            ),
            [tU, t6, eW, eM, t1],
        );
    let t5 = ec === L.Q6.ENDED,
        t8 = s.useMemo(() => (0, D.tW)(W, D.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [W]),
        t3 = s.useMemo(() => (0, D.tW)(W, D.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [W]),
        t2 = e0 || e2 >= (ez.current?.currentTime ?? 0) + 1,
        ne = s.useMemo(() => null === (0, D.tW)(W, D.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [W]),
        nt = ee ? 20 : 12,
        nn = 20 * !!ee,
        nr = e0 && ew;
    return (0, r.jsx)(m.DUT, {
        className: B.W6,
        "data-fullscreen": X,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            em(!0), tP(!1), (tV.current = performance.now()), null != tw.current && clearTimeout(tw.current);
        },
        onMouseLeave: () => {
            em(!1), tP(!1);
        },
        onMouseMove: tj,
        onKeyDown: tj,
        children: (0, r.jsxs)("div", {
            className: a()(B.NS, { [B.DO]: "portrait" === $, [B.r7]: "landscape" === $ }),
            style: { "--custom-footer-bottom": `${ee ? 4 : 2}px` },
            children: [
                t5 && (0, r.jsx)(N.A, { videoRef: ez, onTrackQuestContentClick: tp, orientation: $ }),
                (0, r.jsxs)(p.A, {
                    ref: (e) => {
                        (ez.current = e), (eo.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: X ? j.dG.STATIC : j.dG.RESPONSIVE,
                    className: a()({ [B.R]: t5, [B.IR]: !0 }),
                    controls: !1,
                    poster: t8?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == ez.current) return;
                        let r = ez.current.currentTime >= t && !e6.current && e1;
                        if (ez.current.currentTime >= eN || r) {
                            var s;
                            tt.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${ez.current.currentTime}`,
                            ),
                                (s = ez.current.currentTime) >= t && (e6.current = !0),
                                eO(s + Q.aA + Math.random() * Q.A6),
                                tk(s);
                        }
                        ez.current.currentTime >= eL &&
                            (ek(ez.current.currentTime + 1),
                            (0, A.Gn)(W.id, ep.taskType, ez.current.currentTime),
                            n(ez.current.currentTime)),
                            eH(W.id, ez.current.currentTime, ez.current.duration),
                            eh((ez.current.currentTime / ez.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != ez.current &&
                            (tk(ez.current.duration + 1),
                            tt.info(`[QV] | handleEnded: sending progress update: ${ez.current.duration + 1}`),
                            eH(W.id, ez.current.duration, ez.current.duration)),
                            tL(L.Q6.ENDED),
                            eT(!1);
                    },
                    onLoadedData: (e) => {
                        tt.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eC}`),
                            eC && (td(null != eB.current ? performance.now() - eB.current : null), ex(!1), to());
                    },
                    onLoadedMetadata: (e) => {
                        null != ez.current &&
                            (tt.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tl}`),
                            tR(null),
                            tl !== D.fY.VIDEO_PLAYER_VIDEO_HLS && t$(tn),
                            eG ? (ez.current.volume = 0) : (ez.current.volume = eK));
                    },
                    onLoadStart: () => {
                        (eB.current = performance.now()),
                            (tK.current = !1),
                            tc(eR),
                            tt.info(`[QV] | handleLoadStart | loadingStartTime: ${eB.current}`);
                    },
                    onPlaying: () => {
                        if (!eU.current) return;
                        let e = performance.now() - G;
                        tt.info(`[QV] | ⏰ Video FCP: ${e}ms`), tg(e), (eU.current = !1);
                    },
                    onWaiting: (e) => {
                        (eF.current = performance.now()),
                            tt.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eF.current}`),
                            tS(),
                            eT(!0);
                    },
                    onProgress: (e) => {
                        if (null == ez.current) return;
                        tt.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${ez.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < ez.current.buffered.length; e++) {
                            let n = ez.current.buffered.start(e),
                                r = ez.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / ez.current.duration, size: (r - n) / ez.current.duration });
                        }
                        ey(t);
                    },
                    onCanPlay: t0,
                    onCanPlayThrough: t0,
                    onSeeked: () => {
                        tt.info("[QV] | handleSeeked"), tK.current || ((tK.current = !0), tb(0));
                    },
                    onAbort: () => tX(L.SB.ABORT),
                    onError: () => tX(L.SB.ERROR),
                    onEmptied: () => tX(L.SB.EMPTIED),
                    onStalled: () => tX(L.SB.STALLED),
                    onClick: () => {
                        tt.info("[QV] | handleVideoClick"), tq();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t3 &&
                            (0, r.jsx)("track", {
                                ref: eZ,
                                src: t3.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != ta &&
                            tl !== D.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ta.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tX(L.SB.SOURCE_ERROR),
                                src: ta.url,
                                type: ta.mimetype,
                            }),
                    ],
                }),
                (eC || eD) &&
                    ec === L.Q6.PLAYING &&
                    null != ta &&
                    (0, r.jsx)("span", {
                        className: B.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(m.y$y, { type: m.y$y.Type.WANDERING_CUBES }),
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
                        })(e7),
                    }),
                    showOverlay: null == ta,
                }),
                ee
                    ? (0, r.jsxs)("div", {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(O.A, {}),
                              (0, r.jsx)(m.K0, {
                                  variant: "overlay-secondary",
                                  icon: m.PGe,
                                  "aria-label": U.intl.string(U.t.cpT0Cq),
                                  onClick: Z,
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.animated.div, {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(O.A, {}),
                      }),
                et &&
                    ec !== L.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.DUT, {
                                onClick: () => {
                                    ec === L.Q6.PAUSED && tL(L.Q6.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: B.BG }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: a()(B.xr, { [B.MZ]: "portrait" === $ }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, u.to)([t1, t4], (e, t) => `${e * ti[tr] + t}px`) },
                                children: (0, r.jsx)(V.y, {
                                    quest: W,
                                    onClose: () => {
                                        en(!1), tp(C.uF.VIDEO_MODAL, T.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(u.animated.div, {
                    className: B.Jp,
                    style: { opacity: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                e9 &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: a()(B.yf, { [B.ZH]: ec === L.Q6.PLAYING, [B.v7]: ec === L.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ec === L.Q6.PLAYING
                                    ? (0, r.jsx)(m.udU, { className: B.PK })
                                    : (0, r.jsx)(m.E$n, { className: B.PK }),
                        },
                        ec,
                    ),
                er &&
                    null != e8 &&
                    !t5 &&
                    (0, r.jsx)(u.animated.div, {
                        className: B.o$,
                        ref: t7,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, u.to)([t1.to({ range: [0, 1], output: [-nn, -ti[tr]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: B.qh,
                            children: e8.text,
                        }),
                    }),
                (0, r.jsxs)(u.animated.div, {
                    className: B.r8,
                    style: { height: (0, u.to)([t1.to({ range: [0, 1], output: [0, ti[tr]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(u.animated.div, {
                            style: {
                                transform: (0, u.to)(
                                    [t1.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * nn}px)`,
                                ),
                            },
                            children: (0, r.jsx)(w.A, {
                                percent: null != eQ ? eQ : eS,
                                animate: !0 !== eJ.current && !eg,
                                interactionEnabled: nr,
                                playerState: ec,
                                preloadedBuffers: tU ? eI : void 0,
                                durationSec: ez.current?.duration ?? 1,
                                isFullyVisible: tU && ew,
                                maxSeekableTime: tU && ew ? te : void 0,
                                onClick: (e) => {
                                    nr && (t$(e), ec === L.Q6.ENDED && tL(L.Q6.PLAYING));
                                },
                                onScrubBack: tF,
                                onScrubForward: tY,
                                isQuestCompleted: e0,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(u.animated.div, {
                            className: B.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, u.to)(
                                    [t1.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * nt}px`,
                                ),
                                paddingBottom: (0, u.to)(
                                    [t1.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, u.to)([t1.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ef(!0),
                            onBlur: () => ef(!1),
                            children: (0, r.jsx)(S.zZ, {
                                videoRef: ez,
                                playerState: ec,
                                animSpring: t1,
                                visible: tU,
                                seekForwardEnabled: t2,
                                hideCaptionBtn: null == t3,
                                hideTranscriptBtn: ne,
                                hideSkipButtons: "portrait" === $,
                                size: tr,
                                autoFocus: Y,
                                keyDownHandlerRef: eX,
                                volume: eK,
                                muted: eG,
                                transcriptEnabled: et,
                                captionEnabled: er,
                                fullScreenEnabled: X,
                                handlePlaybackBtnClick: tq,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tp(C.uF.VIDEO_MODAL, et ? T.Cy.TRANSCRIPT_DISABLE : T.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    es(!er),
                                        tp(
                                            C.uF.VIDEO_MODAL,
                                            er ? T.Cy.CLOSED_CAPTIONING_DISABLE : T.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !X;
                                    tt.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, g.qf)(ez.current?.parentNode, ez.current);
                                    e && null != t
                                        ? ((0, g.tl)(t), t.addEventListener(g.Wb, tB), tA(!0), ts(L.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(g.Wb, tB), tA(!1), (0, g.sP)(t), ts(L.oA.MD)),
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
