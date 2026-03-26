n.d(t, { A: () => $ }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(771253),
    o = n(497766),
    u = n(942381),
    c = n(311907),
    d = n(876230),
    m = n(645577),
    p = n(397927),
    E = n(964486),
    f = n(775602),
    h = n(607470),
    v = n(892358),
    x = n(544180),
    g = n(475815),
    S = n(829219),
    A = n(341915),
    b = n(405670),
    _ = n(579473),
    C = n(590202),
    y = n(851936),
    T = n(651892),
    N = n(792620),
    D = n(753386),
    I = n(795068),
    R = n(179615),
    L = n(576199),
    w = n(163961),
    M = n(758423),
    k = n(458817),
    P = n(873856),
    j = n(26192),
    O = n(804147),
    U = n(820636),
    B = n(654487),
    Q = n(838541),
    V = n(985018),
    K = n(681636);
let F = { tension: 250, friction: 5, clamp: !0 };
function $(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: a,
            parentTransitionState: $,
            performanceClockStartTime: Y,
            orientation: G,
            videoUrlOverride: H,
        } = e,
        {
            sourceQuestContent: z,
            quest: W,
            videoSessionId: q,
            onClose: X,
            isFullscreenEnabled: J,
            setIsFullscreenEnabled: Z,
            useNewProgressBarStyling: ee,
        } = l.useContext(I.a),
        et = (0, b.Kr)((e) => e.transcriptEnabled),
        en = (0, b.Kr)((e) => e.setTranscriptEnabled),
        er = (0, b.Kr)((e) => e.captionEnabled),
        el = (0, b.Kr)((e) => e.setCaptionEnabled),
        { focused: ea, focusedChanged: ei } = (0, v.A7)(),
        { visible: es, visibleChanged: eo, targetRef: eu } = (0, v.O7)(),
        [ec, ed] = l.useState(!0 === a ? w.Q6.PLAYING : w.Q6.PAUSED),
        [em, ep] = l.useState(!1),
        [eE, ef] = l.useState(!1),
        eh = (0, N.Yh)(W),
        [ev, ex] = l.useState(eh.percentComplete),
        eg = l.useCallback((e) => {
            eB(null), ex(e);
        }, []),
        [eS, eA] = l.useState(!1),
        [eb, e_] = l.useState(!0),
        [eC, ey] = l.useState(!1),
        [eT, eN] = l.useState([]),
        [eD, eI] = l.useState(x.A.getEffectiveConnectionSpeed()),
        [eR, eL] = l.useState(0),
        [ew, eM] = l.useState(0),
        [ek, eP] = l.useState(!1),
        [ej, eO] = l.useState(!1),
        [eU, eB] = l.useState(null),
        eQ = l.useRef(!0),
        eV = l.useRef(null),
        eK = l.useRef(null),
        eF = (0, b.Kr)((e) => e.videoProgress[W.id] ?? b.yc, u.x),
        e$ = (0, b.Kr)((e) => e.setVideoProgress),
        eY = (0, b.Kr)((e) => e.muted),
        eG = (0, b.Kr)((e) => e.volume),
        eH = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        ez = (0, l.useRef)(null),
        eW = (0, l.useRef)(null),
        eq = l.useRef(!0),
        eX = W.userStatus?.completedAt != null,
        eJ = l.useMemo(() => W.config.features.includes(B.Li.FULL_EPISODE_VIDEO_QUEST), [W.config.features]),
        eZ = l.useRef(!1),
        [e0, e1] = l.useState(null),
        [e6, e7] = l.useState(!1),
        [e2, e4] = l.useState(!1),
        [e9, e8] = l.useState(!1),
        [e3, e5] = l.useState(null),
        te = eX ? (ez.current?.duration ?? 0) : Math.max(eF.maxTimestampSec, eh.progressSeconds),
        tt = l.useMemo(() => (0, y.L)({ quest: W, location: B.rE.VIDEO_MODAL }), [W]),
        tn = (0, m.g)(eX, eF, eh.progressSeconds),
        [tr, tl] = l.useState(w.oA.MD),
        ta = { [w.oA.MD]: ee ? 56 : 50, [w.oA.LG]: ee ? 64 : 58 };
    (0, E.u5)(() => {
        eq.current &&
            ((eq.current = !1),
            eI(x.A.getEffectiveConnectionSpeed()),
            eX && eF.timestampSec >= eF.duration && e$(W.id, 0, eF.duration));
    });
    let { videoAsset: ti, videoAssetType: ts, hlsRef: to, onFirstChunkLoaded: tu } = (0, M.A)(ez, eD, tn, H),
        {
            trackQuestVideoLoadingStarted: tc,
            trackQuestVideoLoadingEnded: td,
            trackQuestVideoProgressed: tm,
            trackQuestVideoResumed: tp,
            trackQuestVideoPaused: tE,
            trackQuestVideoFocusChange: tf,
            trackQuestContentClick: th,
            trackQuestVideoBufferingStarted: tv,
            trackQuestVideoBufferingEnded: tx,
            trackQuestVideoSegmentWatched: tg,
            trackQuestVideoTimeToFirstFrame: tS,
            trackQuestVideoFullscreenChanged: tA,
            trackQuestVideoError: tb,
            trackQuestVideoVolumeChanged: t_,
        } = (0, k.A)({
            questId: W.id,
            isQuestCompleted: eX,
            videoRef: ez,
            hlsRef: to,
            videoSessionId: q,
            videoAssetId: ts,
            sourceQuestContent: z,
            logger: tt,
            isFullEpisodeVideoQuest: eJ,
        });
    (0, P.A)({ videoAssetUrl: ti?.url, videoRef: ez, hlsRef: to, videoAssetType: ts });
    let tC = l.useRef(null),
        ty = l.useCallback(() => {
            clearTimeout(tC.current),
                e8(!0),
                (tC.current = setTimeout(() => {
                    e8(!1);
                }, 1e3));
        }, []);
    l.useEffect(
        () => () => {
            null != tC.current && clearTimeout(tC.current);
        },
        [],
    );
    let tT = l.useCallback(() => ez.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tN } = (0, v.Yr)({
            getCurrentVideoTime: tT,
            isPlaying: ec === w.Q6.PLAYING,
            isMetadataLoaded: e6,
            isInitialSeekComplete: e2,
            onAnalytics: tg,
            emitIntervalMs: v.KI,
            minSegmentDurationMs: v._4,
        }),
        tD = l.useCallback(
            (e) => {
                if ((tt.info(`[QV] | updatePlayerState | playerState: ${e}`), ed(e), null != ez.current))
                    switch (e) {
                        case w.Q6.PLAYING:
                            ez.current.paused && tp(e0), e1(null), ez.current.play();
                            break;
                        case w.Q6.PAUSED:
                            ez.current.paused || tN(), ez.current.pause(), (eQ.current = !1);
                            break;
                        case w.Q6.ENDED:
                            tN(), en(!1);
                    }
            },
            [tp, e0, tN, en, tt],
        );
    l.useEffect(() => {
        tE(e0);
    }, [e0, tE]),
        l.useEffect(() => {
            ei && tf(ea, ec);
        }, [ea, ei, ec, tf]);
    let tI = l.useCallback(
        (e) => {
            eX || W.userStatus?.enrolledAt == null || (tt.info(`[QV] sendServerProgressUpdate: ${e}`), (0, D.zv)(W, e)),
                tm();
        },
        [eX, W, tt, tm],
    );
    l.useEffect(() => {
        ($ !== p.ip4.HIDDEN &&
            $ !== p.ip4.EXITING &&
            $ !== p.ip4.EXITED &&
            (null == $ || !eo || es || eX) &&
            (!ei || ea || eX)) ||
            null == ez.current ||
            ec !== w.Q6.PLAYING ||
            (tt.info(
                `[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${$}, visible: ${es}, focused: ${ea}, isQuestCompleted: ${eX}`,
            ),
            tD(w.Q6.PAUSED),
            eX ? eJ && e1(A.Yg.ANOTHER_MODAL_OPENED) : e1(A.Yg.LOST_FOCUS));
    }, [$, ea, ei, es, eo, ec, eX, tD, tI, tt, eJ]),
        l.useEffect(() => {
            e0 === A.Yg.ANOTHER_MODAL_OPENED &&
                $ === p.ip4.ENTERED &&
                ec === w.Q6.PAUSED &&
                eJ &&
                ea &&
                (tt.info("[QV] | Resuming full episode video after modal re-entered"), tD(w.Q6.PLAYING));
        }, [$, ec, tt, tD, e0, eJ, ea]);
    let [tR, tL] = l.useState(!1),
        tw = l.useRef(null),
        tM = l.useRef(performance.now()),
        tk = l.useCallback(() => {
            null != tw.current && clearTimeout(tw.current),
                ec !== w.Q6.PLAYING ||
                    (tw.current = setTimeout(
                        () => {
                            ec === w.Q6.PLAYING && tL(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tM.current)),
                    ));
        }, [ec]),
        tP = () => {
            tL(!1), (tM.current = performance.now()), tk();
        };
    l.useEffect(() => {
        if (ec !== w.Q6.PLAYING) {
            tL(!1), null != tw.current && clearTimeout(tw.current);
            return;
        }
        return (
            tk(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [ec, tk]);
    let tj = !tR && (eE || em || ec === w.Q6.ENDED),
        tO = l.useCallback(() => {
            tt.info("[QV] | handleFullScreenExit");
            let e = (0, g.qf)(ez.current?.parentNode, ez.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, tO), Z(!1), tA(!1), tl(w.oA.MD));
        }, [Z, tt, tA]),
        tU = () => {
            if (null == ez.current) return;
            let e = Math.max(ez.current.currentTime - 10, 0);
            tt.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tQ(e),
                ec === w.Q6.ENDED && tD(w.Q6.PAUSED),
                th(A.uF.VIDEO_MODAL, C.Cy.SEEK_BACKWARD);
        },
        tB = () => {
            if (null == ez.current || !t6) return;
            let e = Math.min(ez.current.currentTime + 10, te);
            tt.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tQ(e),
                ec !== w.Q6.ENDED && e >= ez.current.duration && tD(w.Q6.ENDED),
                th(A.uF.VIDEO_MODAL, C.Cy.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = ez.current;
        return () => {
            let t = (0, g.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(g.Wb, tO);
        };
    }, [tO]);
    let tQ = l.useCallback(
        (e) => {
            null != ez.current &&
                (tt.info(`[QV] | seekTimeline | timeSec: ${e}`),
                eB((e / (ez.current.duration ?? 1)) * 100),
                tN(),
                eA(!0),
                e4(!1),
                (ez.current.currentTime = e),
                e$(W.id, e, ez.current.duration));
        },
        [ez, e$, W.id, tN, tt],
    );
    l.useEffect(() => {
        let e = ez.current;
        if (null == e) return;
        let t = () => {
            null != to.current &&
                to.current.mainForwardBufferInfo?.len === 0 &&
                to.current.trigger(s.sV.BUFFER_FLUSHING, {
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
    }, [ez, to]);
    let tV = () => {
            if (null != ez.current)
                switch ((tt.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), ty(), ec)) {
                    case w.Q6.ENDED:
                        tQ(0), tD(w.Q6.PLAYING);
                        break;
                    case w.Q6.PLAYING:
                        tD(w.Q6.PAUSED), e1(A.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tD(w.Q6.PLAYING);
                }
        },
        tK = (e) => {
            e5(e);
        },
        tF = (e) => {
            e5((t) => (t?.id === e.id ? null : t));
        },
        t$ = l.useCallback(() => {
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
                    (0, v.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tK(n)), (n.onexit = () => tF(n)));
                }
        }, [ez, tt]);
    l.useEffect(() => {
        if (null == eW.current) return;
        let e = eW.current;
        return (
            e.addEventListener("load", t$),
            () => {
                null != e && e.removeEventListener("load", t$);
            }
        );
    }, [eW, t$]);
    let tY = l.useCallback(
            (e) => {
                tt.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${ez.current?.currentTime}, videoAssetId: ${ts}, connectionSpeed: ${eD}`,
                ),
                    tb(e);
            },
            [eD, tb, ez, ts, tt],
        ),
        tG = l.useRef(!1);
    l.useEffect(() => {
        null != ti || tG.current || ((tG.current = !0), tb(w.SB.NO_VALID_SOURCE));
    }, [ti, tb, tG]);
    let tH = (e) => {
        tt.info(`[QV] | handleCanPlay: playerState: ${ec}`),
            null != ez.current &&
                ec === w.Q6.PLAYING &&
                (tt.info("[QV] | handleCanPlay: did NOT early return"),
                eb && (tt.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eb}`), e_(!1)),
                eC &&
                    (tt.info(`[QV] | handleCanPlay: waitingForChunk: ${eC}`),
                    tx(null != eK.current ? performance.now() - eK.current : null),
                    ey(!1)),
                tt.info("[QV] | handleCanPlay: updating player state to playing"),
                tD(w.Q6.PLAYING));
    };
    l.useEffect(() => {
        if (!eS) return;
        let e = setTimeout(() => {
            eA(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eS]);
    let [{ controlBarAnimSpring: tz }, tW] = (0, p.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: F,
            onStart: () => {
                eO(!1);
            },
            onRest: (e) => {
                1 === e.value && eO(!0);
            },
        })),
        tq = (0, l.useRef)(null),
        [{ captionHeightSpring: tX }, tJ] = (0, p.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
    l.useEffect(
        () => (
            tJ({ captionHeightSpring: er && null != e3 ? (tq.current?.clientHeight ?? 0) : 0, immediate: eH }),
            () => {
                tX.stop();
            }
        ),
        [er, tJ, eH, e3, tX],
    ),
        l.useEffect(
            () => (
                tW({ controlBarAnimSpring: tj || ek ? 1 : 0, immediate: eH }),
                () => {
                    tz.stop();
                }
            ),
            [tj, tW, eH, ek, tz],
        );
    let tZ = ec === w.Q6.ENDED,
        t0 = l.useMemo(() => (0, _.tW)(W, _.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [W]),
        t1 = l.useMemo(() => (0, _.tW)(W, _.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [W]),
        t6 = eX || eF.maxTimestampSec >= (ez.current?.currentTime ?? 0) + 1,
        t7 = l.useMemo(() => null === (0, _.tW)(W, _.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [W]),
        t2 = ee ? 20 : 12,
        t4 = 20 * !!ee,
        t9 = eX && ej;
    return (0, r.jsx)(p.DUT, {
        className: K.W6,
        "data-fullscreen": J,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            ep(!0), tL(!1), (tM.current = performance.now()), null != tw.current && clearTimeout(tw.current);
        },
        onMouseLeave: () => {
            ep(!1), tL(!1);
        },
        onMouseMove: tP,
        onKeyDown: tP,
        children: (0, r.jsxs)("div", {
            className: i()(K.NS, { [K.DO]: "portrait" === G, [K.r7]: "landscape" === G }),
            style: { "--custom-footer-bottom": `${ee ? 4 : 2}px` },
            children: [
                tZ && (0, r.jsx)(R.A, { videoRef: ez, onTrackQuestContentClick: th, orientation: G }),
                (0, r.jsxs)(h.A, {
                    ref: (e) => {
                        (ez.current = e), (eu.current = e);
                    },
                    autoPlay: a,
                    playsInline: !0,
                    mediaLayoutType: J ? Q.dG.STATIC : Q.dG.RESPONSIVE,
                    className: i()({ [K.R]: tZ, [K.IR]: !0 }),
                    controls: !1,
                    poster: t0?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == ez.current) return;
                        let r = ez.current.currentTime >= t && !eZ.current && eJ;
                        if (ez.current.currentTime >= eR || r) {
                            var l;
                            tt.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${ez.current.currentTime}`,
                            ),
                                (l = ez.current.currentTime) >= t && (eZ.current = !0),
                                eL(l + B.aA + Math.random() * B.A6),
                                tI(l);
                        }
                        ez.current.currentTime >= ew &&
                            (eM(ez.current.currentTime + 1),
                            (0, S.Gn)(W.id, eh.taskType, ez.current.currentTime),
                            n(ez.current.currentTime)),
                            e$(W.id, ez.current.currentTime, ez.current.duration),
                            eg((ez.current.currentTime / ez.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != ez.current &&
                            (tI(ez.current.duration + 1),
                            tt.info(`[QV] | handleEnded: sending progress update: ${ez.current.duration + 1}`),
                            e$(W.id, ez.current.duration, ez.current.duration)),
                            tD(w.Q6.ENDED),
                            ey(!1);
                    },
                    onLoadedData: (e) => {
                        tt.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eb}`),
                            eb && (td(null != eV.current ? performance.now() - eV.current : null), e_(!1), tu());
                    },
                    onLoadedMetadata: (e) => {
                        null != ez.current &&
                            (tt.info(`[QV] | handleLoadedMetadata | videoAssetId: ${ts}`),
                            e7(!0),
                            ts !== _.fY.VIDEO_PLAYER_VIDEO_HLS && tQ(tn),
                            eY ? (ez.current.volume = 0) : (ez.current.volume = eG));
                    },
                    onLoadStart: () => {
                        (eV.current = performance.now()),
                            tc(eD),
                            tt.info(`[QV] | handleLoadStart | loadingStartTime: ${eV.current}`);
                    },
                    onPlaying: () => {
                        if (!eQ.current) return;
                        let e = performance.now() - Y;
                        tt.info(`[QV] | ⏰ Video FCP: ${e}ms`), tS(e), (eQ.current = !1);
                    },
                    onWaiting: (e) => {
                        (eK.current = performance.now()),
                            tt.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eK.current}`),
                            tv(),
                            ey(!0);
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
                        eN(t);
                    },
                    onCanPlay: tH,
                    onCanPlayThrough: tH,
                    onSeeked: () => {
                        tt.info("[QV] | handleSeeked"), e4(!0);
                    },
                    onAbort: () => tY(w.SB.ABORT),
                    onError: () => tY(w.SB.ERROR),
                    onEmptied: () => tY(w.SB.EMPTIED),
                    onStalled: () => tY(w.SB.STALLED),
                    onClick: () => {
                        tt.info("[QV] | handleVideoClick"), tV();
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
                        null != ti &&
                            ts !== _.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != ti.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tY(w.SB.SOURCE_ERROR),
                                src: ti.url,
                                type: ti.mimetype,
                            }),
                    ],
                }),
                (eb || eC) &&
                    ec === w.Q6.PLAYING &&
                    null != ti &&
                    (0, r.jsx)("span", {
                        className: K.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(p.y$y, { type: p.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(v.DQ, {
                    message: (0, T.XL)({
                        hasVideoAsset: null != ti,
                        playerState: ec,
                        pauseReason: (function (e) {
                            switch (e) {
                                case A.Yg.PAUSE_BUTTON:
                                    return d.KB.USER;
                                case A.Yg.LOST_FOCUS:
                                    return d.KB.FOCUS;
                                case A.Yg.MODAL_CLOSED:
                                    return d.KB.VISIBILITY;
                                default:
                                    return null;
                            }
                        })(e0),
                    }),
                    showOverlay: null == ti,
                }),
                ee
                    ? (0, r.jsxs)("div", {
                          className: K.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(L.A, {}),
                              (0, r.jsx)(p.K0, {
                                  variant: "overlay-secondary",
                                  icon: p.PGe,
                                  "aria-label": V.intl.string(V.t.cpT0Cq),
                                  onClick: X,
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.animated.div, {
                          className: K.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, o.to)([tz.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, o.to)([tz.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, o.to)([tz.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(L.A, {}),
                      }),
                et &&
                    ec !== w.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.DUT, {
                                onClick: () => {
                                    ec === w.Q6.PAUSED && tD(w.Q6.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: K.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: i()(K.xr, { [K.MZ]: "portrait" === G }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([tz, tX], (e, t) => `${e * ta[tr] + t}px`) },
                                children: (0, r.jsx)(U.y, {
                                    quest: W,
                                    onClose: () => {
                                        en(!1), th(A.uF.VIDEO_MODAL, C.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: K.Jp,
                    style: { opacity: (0, o.to)([tz.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                e9 &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: i()(K.yf, { [K.ZH]: ec === w.Q6.PLAYING, [K.v7]: ec === w.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ec === w.Q6.PLAYING
                                    ? (0, r.jsx)(p.udU, { className: K.PK })
                                    : (0, r.jsx)(p.E$n, { className: K.PK }),
                        },
                        ec,
                    ),
                er &&
                    null != e3 &&
                    !tZ &&
                    (0, r.jsx)(o.animated.div, {
                        className: K.o$,
                        ref: tq,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([tz.to({ range: [0, 1], output: [-t4, -ta[tr]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(p.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: K.qh,
                            children: e3.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: K.r8,
                    style: { height: (0, o.to)([tz.to({ range: [0, 1], output: [0, ta[tr]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            style: {
                                transform: (0, o.to)(
                                    [tz.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * t4}px)`,
                                ),
                            },
                            children: (0, r.jsx)(O.A, {
                                percent: null != eU ? eU : ev,
                                animate: !0 !== eq.current && !eS,
                                interactionEnabled: t9,
                                playerState: ec,
                                preloadedBuffers: tj ? eT : void 0,
                                durationSec: ez.current?.duration ?? 1,
                                isFullyVisible: tj && ej,
                                maxSeekableTime: tj && ej ? te : void 0,
                                onClick: (e) => {
                                    t9 && (tQ(e), ec === w.Q6.ENDED && tD(w.Q6.PLAYING));
                                },
                                onScrubBack: tU,
                                onScrubForward: tB,
                                isQuestCompleted: eX,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: K.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [tz.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * t2}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [tz.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([tz.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ef(!0),
                            onBlur: () => ef(!1),
                            children: (0, r.jsx)(j.A, {
                                videoRef: ez,
                                orientation: G,
                                playerState: ec,
                                animSpring: tz,
                                visible: tj,
                                seekForwardEnabled: t6,
                                hideCaptionBtn: null == t1,
                                hideTranscriptBtn: t7,
                                size: tr,
                                handlePlaybackBtnClick: tV,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        th(A.uF.VIDEO_MODAL, et ? C.Cy.TRANSCRIPT_DISABLE : C.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    el(!er),
                                        th(
                                            A.uF.VIDEO_MODAL,
                                            er ? C.Cy.CLOSED_CAPTIONING_DISABLE : C.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !J;
                                    tt.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, g.qf)(ez.current?.parentNode, ez.current);
                                    e && null != t
                                        ? ((0, g.tl)(t), t.addEventListener(g.Wb, tO), tA(!0), tl(w.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(g.Wb, tO), tA(!1), (0, g.sP)(t), tl(w.oA.MD)),
                                        Z(e);
                                },
                                handleSeekBackBtnClick: tU,
                                handleSeekForwardBtnClick: tB,
                                handleControlBarPendingInteraction: eP,
                                onVolumeChange: t_,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
