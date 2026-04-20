n.d(t, { A: () => Y }), n(321073);
var r = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(771253),
    u = n(825638),
    o = n(942381),
    c = n(311907),
    d = n(876230),
    E = n(645577),
    m = n(397927),
    f = n(964486),
    _ = n(775602),
    S = n(607470),
    p = n(697397),
    v = n(544180),
    h = n(723702),
    g = n(475815),
    A = n(829219),
    C = n(341915),
    x = n(405670),
    T = n(579473),
    D = n(590202),
    I = n(851936),
    b = n(792620),
    y = n(753386),
    O = n(795068),
    R = n(179615),
    L = n(576199),
    N = n(163961),
    k = n(758423),
    M = n(458817),
    P = n(873856),
    V = n(804147),
    w = n(820636),
    U = n(654487),
    Q = n(838541),
    j = n(985018),
    B = n(834926);
let F = { tension: 250, friction: 5, clamp: !0 };
function Y(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: a,
            autoFocus: Y = !0,
            parentTransitionState: H,
            openedAtMs: K,
            orientation: G,
            videoUrlOverride: $,
        } = e,
        {
            sourceQuestContent: q,
            quest: W,
            videoSessionId: z,
            onClose: Z,
            isFullscreenEnabled: X,
            setIsFullscreenEnabled: J,
            useNewProgressBarStyling: ee,
        } = s.useContext(O.a),
        et = (0, x.Kr)((e) => e.transcriptEnabled),
        en = (0, x.Kr)((e) => e.setTranscriptEnabled),
        er = (0, x.Kr)((e) => e.captionEnabled),
        es = (0, x.Kr)((e) => e.setCaptionEnabled),
        { focused: ea, focusedChanged: el } = (0, p.A7)(),
        { visible: ei, visibleChanged: eu, targetRef: eo } = (0, p.O7)(),
        [ec, ed] = s.useState(!0 === a ? N.Q6.PLAYING : N.Q6.PAUSED),
        [eE, em] = s.useState(!1),
        [ef, e_] = s.useState(!1),
        eS = (0, b.Yh)(W),
        [ep, ev] = s.useState(eS.percentComplete),
        eh = s.useCallback((e) => {
            eQ(null), ev(e);
        }, []),
        [eg, eA] = s.useState(!1),
        [eC, ex] = s.useState(!0),
        [eT, eD] = s.useState(!1),
        [eI, eb] = s.useState([]),
        [ey, eO] = s.useState(v.A.getEffectiveConnectionSpeed()),
        [eR, eL] = s.useState(0),
        [eN, ek] = s.useState(0),
        [eM, eP] = s.useState(!1),
        [eV, ew] = s.useState(!1),
        [eU, eQ] = s.useState(null),
        ej = s.useRef(!0),
        eB = s.useRef(null),
        eF = s.useRef(null),
        eY = (0, x.Kr)((e) => e.videoProgress[W.id] ?? x.yc, o.x),
        eH = (0, x.Kr)((e) => e.setVideoProgress),
        eK = (0, x.Kr)((e) => e.muted),
        eG = (0, x.Kr)((e) => e.setMuted),
        e$ = (0, x.Kr)((e) => e.volume),
        eq = (0, x.Kr)((e) => e.setVolume),
        eW = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        ez = (0, s.useRef)(null),
        eZ = (0, s.useRef)(null),
        eX = (0, s.useRef)(null),
        eJ = s.useRef(!0),
        e0 = W.userStatus?.completedAt != null,
        e1 = s.useMemo(() => W.config.features.includes(U.Li.FULL_EPISODE_VIDEO_QUEST), [W.config.features]),
        e6 = s.useRef(!1),
        [e7, e4] = s.useState(null),
        [e9, e5] = s.useState(!1),
        [e3, e8] = s.useState(null),
        e2 = Math.max(eY.maxTimestampSec, eS.progressSeconds),
        te = e0 ? (ez.current?.duration ?? 0) : (0, y.vd)(e2, eY.duration),
        tt = s.useMemo(() => (0, I.L)({ quest: W, location: U.rE.VIDEO_MODAL }), [W]),
        tn = (0, E.g)(e0, eY, eS.progressSeconds),
        [tr, ts] = s.useState(N.oA.MD),
        ta = { [N.oA.MD]: ee ? 56 : 50, [N.oA.LG]: ee ? 64 : 58 };
    (0, f.u5)(() => {
        eJ.current &&
            ((eJ.current = !1),
            eO(v.A.getEffectiveConnectionSpeed()),
            e0 && eY.timestampSec >= eY.duration && eH(W.id, 0, eY.duration));
    });
    let { videoAsset: tl, videoAssetType: ti, hlsRef: tu, onFirstChunkLoaded: to } = (0, k.A)(ez, ey, tn, $),
        {
            trackQuestVideoLoadingStarted: tc,
            trackQuestVideoLoadingEnded: td,
            trackQuestVideoProgressed: tE,
            trackQuestVideoResumed: tm,
            trackQuestVideoPaused: tf,
            trackQuestVideoFocusChange: t_,
            trackQuestContentClick: tS,
            trackQuestVideoBufferingStarted: tp,
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
            videoAssetId: ti,
            sourceQuestContent: q,
            logger: tt,
            isFullEpisodeVideoQuest: e1,
        });
    (0, P.A)({ videoAssetUrl: tl?.url, videoRef: ez, hlsRef: tu, videoAssetType: ti });
    let tT = s.useRef(null),
        tD = s.useCallback(() => {
            clearTimeout(tT.current),
                e5(!0),
                (tT.current = setTimeout(() => {
                    e5(!1);
                }, 1e3));
        }, []);
    s.useEffect(
        () => () => {
            null != tT.current && clearTimeout(tT.current);
        },
        [],
    );
    let tI = s.useCallback(() => ez.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tb,
            handleLoadEnd: ty,
            handleFirstFrame: tO,
            handleSeek: tR,
        } = (0, p.Yr)({ getCurrentVideoTime: tI, onAnalytics: th, emitIntervalMs: p.KI, minSegmentDurationMs: p._4 }),
        tL = s.useRef(tb);
    s.useEffect(() => {
        tL.current(ec, null);
    }, []);
    let tN = s.useCallback(
        (e) => {
            if ((tt.info(`[QV] | updatePlayerState | playerState: ${e}`), tb(e, null), ed(e), null != ez.current))
                switch (e) {
                    case N.Q6.PLAYING:
                        ez.current.paused && tm(e7), e4(null), ez.current.play();
                        break;
                    case N.Q6.PAUSED:
                        ez.current.pause(), (ej.current = !1);
                        break;
                    case N.Q6.ENDED:
                        en(!1);
                }
        },
        [tb, tm, e7, en, tt],
    );
    s.useEffect(() => {
        tf(e7);
    }, [e7, tf]),
        s.useEffect(() => {
            el && t_(ea, ec);
        }, [ea, el, ec, t_]);
    let tk = s.useCallback(
        (e) => {
            e0 || W.userStatus?.enrolledAt == null || (tt.info(`[QV] sendServerProgressUpdate: ${e}`), (0, y.zv)(W, e)),
                tE();
        },
        [e0, W, tt, tE],
    );
    s.useEffect(() => {
        (H !== m.ip4.HIDDEN &&
            H !== m.ip4.EXITING &&
            H !== m.ip4.EXITED &&
            (null == H || !eu || ei || e0) &&
            (!el || ea || e0)) ||
            null == ez.current ||
            ec !== N.Q6.PLAYING ||
            (tt.info(
                `[QV] | Pausing video | playerState: ${ec}, parentTransitionState: ${H}, visible: ${ei}, focused: ${ea}, isQuestCompleted: ${e0}`,
            ),
            tN(N.Q6.PAUSED),
            e0 ? e1 && e4(C.Yg.ANOTHER_MODAL_OPENED) : e4(C.Yg.LOST_FOCUS));
    }, [H, ea, el, ei, eu, ec, e0, tN, tk, tt, e1]),
        s.useEffect(() => {
            e7 === C.Yg.ANOTHER_MODAL_OPENED &&
                H === m.ip4.ENTERED &&
                ec === N.Q6.PAUSED &&
                e1 &&
                ea &&
                (tt.info("[QV] | Resuming full episode video after modal re-entered"), tN(N.Q6.PLAYING));
        }, [H, ec, tt, tN, e7, e1, ea]);
    let [tM, tP] = s.useState(!1),
        tV = s.useRef(null),
        tw = s.useRef(performance.now()),
        tU = s.useCallback(() => {
            null != tV.current && clearTimeout(tV.current),
                ec !== N.Q6.PLAYING ||
                    (tV.current = setTimeout(
                        () => {
                            ec === N.Q6.PLAYING && tP(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tw.current)),
                    ));
        }, [ec]),
        tQ = () => {
            tP(!1), (tw.current = performance.now()), tU();
        };
    s.useEffect(() => {
        if (ec !== N.Q6.PLAYING) {
            tP(!1), null != tV.current && clearTimeout(tV.current);
            return;
        }
        return (
            tU(),
            () => {
                null != tV.current && clearTimeout(tV.current);
            }
        );
    }, [ec, tU]);
    let tj = !tM && (ef || eE || ec === N.Q6.ENDED),
        tB = s.useCallback(() => {
            tt.info("[QV] | handleFullScreenExit");
            let e = (0, g.qf)(ez.current?.parentNode, ez.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, tB), J(!1), tA(!1), ts(N.oA.MD));
        }, [J, tt, tA]),
        tF = () => {
            if (null == ez.current) return;
            let e = Math.max(ez.current.currentTime - 10, 0);
            tt.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tG(e),
                ec === N.Q6.ENDED && tN(N.Q6.PAUSED),
                tS(C.uF.VIDEO_MODAL, D.Cy.SEEK_BACKWARD);
        },
        tY = () => {
            if (null == ez.current || !t2) return;
            let e = Math.min(ez.current.currentTime + 10, te);
            tt.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tG(e),
                ec !== N.Q6.ENDED && e >= ez.current.duration && tN(N.Q6.ENDED),
                tS(C.uF.VIDEO_MODAL, D.Cy.SEEK_FORWARD);
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
        tK = s.useCallback(
            (e) => {
                eG(e);
            },
            [eG],
        ),
        tG = s.useCallback(
            (e) => {
                null != ez.current &&
                    (tt.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    eQ((e / (ez.current.duration ?? 1)) * 100),
                    tR(),
                    eA(!0),
                    (ez.current.currentTime = e),
                    eH(W.id, e, ez.current.duration));
            },
            [ez, eH, W.id, tR, tt],
        );
    s.useEffect(() => {
        let e = ez.current;
        if (null == e) return;
        let t = () => {
            null != tu.current &&
                tu.current.mainForwardBufferInfo?.len === 0 &&
                tu.current.trigger(i.sV.BUFFER_FLUSHING, {
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
    let t$ = s.useRef(!1),
        tq = () => {
            if (null != ez.current)
                switch ((tt.info(`[QV] | handlePlaybackBtnClick | playerState: ${ec}`), tD(), ec)) {
                    case N.Q6.ENDED:
                        tG(0), tN(N.Q6.PLAYING);
                        break;
                    case N.Q6.PLAYING:
                        tN(N.Q6.PAUSED), e4(C.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tN(N.Q6.PLAYING);
                }
        },
        tW = (e) => {
            e8(e);
        },
        tz = (e) => {
            e8((t) => (t?.id === e.id ? null : t));
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
                    (0, p.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => tW(n)), (n.onexit = () => tz(n)));
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
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${ez.current?.currentTime}, videoAssetId: ${ti}, connectionSpeed: ${ey}`,
                ),
                    tC(e);
            },
            [ey, tC, ez, ti, tt],
        ),
        tJ = s.useRef(!1);
    s.useEffect(() => {
        null != tl || tJ.current || ((tJ.current = !0), tC(N.SB.NO_VALID_SOURCE));
    }, [tl, tC, tJ]);
    let t0 = (e) => {
        tt.info(`[QV] | handleCanPlay: playerState: ${ec}`),
            null != ez.current &&
                ec === N.Q6.PLAYING &&
                (tt.info("[QV] | handleCanPlay: did NOT early return"),
                eC && (tt.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eC}`), ex(!1)),
                eT &&
                    (tt.info(`[QV] | handleCanPlay: waitingForChunk: ${eT}`),
                    tv(null != eF.current ? performance.now() - eF.current : null),
                    eD(!1)),
                tt.info("[QV] | handleCanPlay: updating player state to playing"),
                tN(N.Q6.PLAYING));
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
                ew(!1);
            },
            onRest: (e) => {
                1 === e.value && ew(!0);
            },
        })),
        t7 = (0, s.useRef)(null),
        [{ captionHeightSpring: t4 }, t9] = (0, m.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
    s.useEffect(
        () => (
            t9({ captionHeightSpring: er && null != e3 ? (t7.current?.clientHeight ?? 0) : 0, immediate: eW }),
            () => {
                t4.stop();
            }
        ),
        [er, t9, eW, e3, t4],
    ),
        s.useEffect(
            () => (
                t6({ controlBarAnimSpring: tj || eM ? 1 : 0, immediate: eW }),
                () => {
                    t1.stop();
                }
            ),
            [tj, t6, eW, eM, t1],
        );
    let t5 = ec === N.Q6.ENDED,
        t3 = s.useMemo(() => (0, T.tW)(W, T.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [W]),
        t8 = s.useMemo(() => (0, T.tW)(W, T.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [W]),
        t2 = e0 || e2 >= (ez.current?.currentTime ?? 0) + 1,
        ne = s.useMemo(() => null === (0, T.tW)(W, T.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [W]),
        nt = ee ? 20 : 12,
        nn = 20 * !!ee,
        nr = e0 && eV;
    return (0, r.jsx)(m.DUT, {
        className: B.W6,
        "data-fullscreen": X,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            em(!0), tP(!1), (tw.current = performance.now()), null != tV.current && clearTimeout(tV.current);
        },
        onMouseLeave: () => {
            em(!1), tP(!1);
        },
        onMouseMove: tQ,
        onKeyDown: tQ,
        children: (0, r.jsxs)("div", {
            className: l()(B.NS, { [B.DO]: "portrait" === G, [B.r7]: "landscape" === G }),
            style: { "--custom-footer-bottom": `${ee ? 4 : 2}px` },
            children: [
                t5 && (0, r.jsx)(R.A, { videoRef: ez, onTrackQuestContentClick: tS, orientation: G }),
                (0, r.jsxs)(S.A, {
                    ref: (e) => {
                        (ez.current = e), (eo.current = e);
                    },
                    autoPlay: a,
                    playsInline: !0,
                    mediaLayoutType: X ? Q.dG.STATIC : Q.dG.RESPONSIVE,
                    className: l()({ [B.R]: t5, [B.IR]: !0 }),
                    controls: !1,
                    poster: t3?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == ez.current) return;
                        let r = ez.current.currentTime >= t && !e6.current && e1;
                        if (ez.current.currentTime >= eR || r) {
                            var s;
                            tt.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${ez.current.currentTime}`,
                            ),
                                (s = ez.current.currentTime) >= t && (e6.current = !0),
                                eL(s + U.aA + Math.random() * U.A6),
                                tk(s);
                        }
                        ez.current.currentTime >= eN &&
                            (ek(ez.current.currentTime + 1),
                            (0, A.Gn)(W.id, eS.taskType, ez.current.currentTime),
                            n(ez.current.currentTime)),
                            eH(W.id, ez.current.currentTime, ez.current.duration),
                            eh((ez.current.currentTime / ez.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != ez.current &&
                            (tk(ez.current.duration + 1),
                            tt.info(`[QV] | handleEnded: sending progress update: ${ez.current.duration + 1}`),
                            eH(W.id, ez.current.duration, ez.current.duration)),
                            tN(N.Q6.ENDED),
                            eD(!1);
                    },
                    onLoadedData: (e) => {
                        tt.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eC}`),
                            eC && (td(null != eB.current ? performance.now() - eB.current : null), ex(!1), to());
                    },
                    onLoadedMetadata: (e) => {
                        null != ez.current &&
                            (tt.info(`[QV] | handleLoadedMetadata | videoAssetId: ${ti}`),
                            ty(null),
                            ti !== T.fY.VIDEO_PLAYER_VIDEO_HLS && tG(tn),
                            eK ? (ez.current.volume = 0) : (ez.current.volume = e$));
                    },
                    onLoadStart: () => {
                        (eB.current = performance.now()),
                            (t$.current = !1),
                            tc(ey),
                            tt.info(`[QV] | handleLoadStart | loadingStartTime: ${eB.current}`);
                    },
                    onPlaying: () => {
                        if (!ej.current) return;
                        let e = performance.now() - K;
                        tt.info(`[QV] | ⏰ Video FCP: ${e}ms`), tg(e), (ej.current = !1);
                    },
                    onWaiting: (e) => {
                        (eF.current = performance.now()),
                            tt.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eF.current}`),
                            tp(),
                            eD(!0);
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
                        eb(t);
                    },
                    onCanPlay: t0,
                    onCanPlayThrough: t0,
                    onSeeked: () => {
                        tt.info("[QV] | handleSeeked"), t$.current || ((t$.current = !0), tO(0));
                    },
                    onAbort: () => tX(N.SB.ABORT),
                    onError: () => tX(N.SB.ERROR),
                    onEmptied: () => tX(N.SB.EMPTIED),
                    onStalled: () => tX(N.SB.STALLED),
                    onClick: () => {
                        tt.info("[QV] | handleVideoClick"), tq();
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
                        null != tl &&
                            ti !== T.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tl.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tX(N.SB.SOURCE_ERROR),
                                src: tl.url,
                                type: tl.mimetype,
                            }),
                    ],
                }),
                (eC || eT) &&
                    ec === N.Q6.PLAYING &&
                    null != tl &&
                    (0, r.jsx)("span", {
                        className: B.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(m.y$y, { type: m.y$y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(p.DQ, {
                    message: ((e) => {
                        let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                        return t
                            ? n === N.Q6.PAUSED && r === d.KB.FOCUS
                                ? j.intl.string(j.t.w6PeBF)
                                : null
                            : (0, h.isWeb)()
                              ? j.intl.string(j.t["E1du/q"])
                              : j.intl.string(j.t["rStN/7"]);
                    })({
                        hasVideoAsset: null != tl,
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
                    showOverlay: null == tl,
                }),
                ee
                    ? (0, r.jsxs)("div", {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(L.A, {}),
                              (0, r.jsx)(m.K0, {
                                  variant: "overlay-secondary",
                                  icon: m.PGe,
                                  "aria-label": j.intl.string(j.t.cpT0Cq),
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
                          children: (0, r.jsx)(L.A, {}),
                      }),
                et &&
                    ec !== N.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.DUT, {
                                onClick: () => {
                                    ec === N.Q6.PAUSED && tN(N.Q6.PLAYING), en(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: B.BG }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: l()(B.xr, { [B.MZ]: "portrait" === G }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, u.to)([t1, t4], (e, t) => `${e * ta[tr] + t}px`) },
                                children: (0, r.jsx)(w.y, {
                                    quest: W,
                                    onClose: () => {
                                        en(!1), tS(C.uF.VIDEO_MODAL, D.Cy.TRANSCRIPT_DISABLE);
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
                            className: l()(B.yf, { [B.ZH]: ec === N.Q6.PLAYING, [B.v7]: ec === N.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ec === N.Q6.PLAYING
                                    ? (0, r.jsx)(m.udU, { className: B.PK })
                                    : (0, r.jsx)(m.E$n, { className: B.PK }),
                        },
                        ec,
                    ),
                er &&
                    null != e3 &&
                    !t5 &&
                    (0, r.jsx)(u.animated.div, {
                        className: B.o$,
                        ref: t7,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, u.to)([t1.to({ range: [0, 1], output: [-nn, -ta[tr]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: B.qh,
                            children: e3.text,
                        }),
                    }),
                (0, r.jsxs)(u.animated.div, {
                    className: B.r8,
                    style: { height: (0, u.to)([t1.to({ range: [0, 1], output: [0, ta[tr]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(u.animated.div, {
                            style: {
                                transform: (0, u.to)(
                                    [t1.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * nn}px)`,
                                ),
                            },
                            children: (0, r.jsx)(V.A, {
                                percent: null != eU ? eU : ep,
                                animate: !0 !== eJ.current && !eg,
                                interactionEnabled: nr,
                                playerState: ec,
                                preloadedBuffers: tj ? eI : void 0,
                                durationSec: ez.current?.duration ?? 1,
                                isFullyVisible: tj && eV,
                                maxSeekableTime: tj && eV ? te : void 0,
                                onClick: (e) => {
                                    nr && (tG(e), ec === N.Q6.ENDED && tN(N.Q6.PLAYING));
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
                            onFocus: () => e_(!0),
                            onBlur: () => e_(!1),
                            children: (0, r.jsx)(p.zZ, {
                                videoRef: ez,
                                playerState: ec,
                                animSpring: t1,
                                visible: tj,
                                seekForwardEnabled: t2,
                                hideCaptionBtn: null == t8,
                                hideTranscriptBtn: ne,
                                hideSkipButtons: "portrait" === G,
                                size: tr,
                                autoFocus: Y,
                                keyDownHandlerRef: eX,
                                volume: e$,
                                muted: eK,
                                transcriptEnabled: et,
                                captionEnabled: er,
                                fullScreenEnabled: X,
                                handlePlaybackBtnClick: tq,
                                handleTranscriptBtnClick: () => {
                                    en(!et),
                                        tS(C.uF.VIDEO_MODAL, et ? D.Cy.TRANSCRIPT_DISABLE : D.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    es(!er),
                                        tS(
                                            C.uF.VIDEO_MODAL,
                                            er ? D.Cy.CLOSED_CAPTIONING_DISABLE : D.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !X;
                                    tt.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, g.qf)(ez.current?.parentNode, ez.current);
                                    e && null != t
                                        ? ((0, g.tl)(t), t.addEventListener(g.Wb, tB), tA(!0), ts(N.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(g.Wb, tB), tA(!1), (0, g.sP)(t), ts(N.oA.MD)),
                                        J(e);
                                },
                                handleSeekBackBtnClick: tF,
                                handleSeekForwardBtnClick: tY,
                                handleControlBarPendingInteraction: eP,
                                onVolumeChange: tH,
                                onMutedChange: tK,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
