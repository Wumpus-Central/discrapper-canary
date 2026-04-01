n.d(t, { A: () => Y }), n(321073);
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(771253),
    o = n(773690),
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
    b = n(795068),
    N = n(179615),
    O = n(576199),
    L = n(163961),
    M = n(758423),
    k = n(458817),
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
            parentTransitionState: Y,
            performanceClockStartTime: H,
            orientation: G,
            videoUrlOverride: $,
        } = e,
        {
            sourceQuestContent: K,
            quest: q,
            videoSessionId: W,
            onClose: z,
            isFullscreenEnabled: Z,
            setIsFullscreenEnabled: X,
            useNewProgressBarStyling: J,
        } = s.useContext(b.a),
        ee = (0, x.Kr)((e) => e.transcriptEnabled),
        et = (0, x.Kr)((e) => e.setTranscriptEnabled),
        en = (0, x.Kr)((e) => e.captionEnabled),
        er = (0, x.Kr)((e) => e.setCaptionEnabled),
        { focused: es, focusedChanged: ei } = (0, S.A7)(),
        { visible: ea, visibleChanged: el, targetRef: eo } = (0, S.O7)(),
        [eu, ec] = s.useState(!0 === i ? L.Q6.PLAYING : L.Q6.PAUSED),
        [ed, em] = s.useState(!1),
        [eE, e_] = s.useState(!1),
        ef = (0, y.Yh)(q),
        [ep, eS] = s.useState(ef.percentComplete),
        ev = s.useCallback((e) => {
            eQ(null), eS(e);
        }, []),
        [eh, eg] = s.useState(!1),
        [eA, eC] = s.useState(!0),
        [ex, eT] = s.useState(!1),
        [eD, eI] = s.useState([]),
        [ey, eR] = s.useState(v.A.getEffectiveConnectionSpeed()),
        [eb, eN] = s.useState(0),
        [eO, eL] = s.useState(0),
        [eM, ek] = s.useState(!1),
        [eP, ew] = s.useState(!1),
        [eV, eQ] = s.useState(null),
        ej = s.useRef(!0),
        eU = s.useRef(null),
        eB = s.useRef(null),
        eF = (0, x.Kr)((e) => e.videoProgress[q.id] ?? x.yc, u.x),
        eY = (0, x.Kr)((e) => e.setVideoProgress),
        eH = (0, x.Kr)((e) => e.muted),
        eG = (0, x.Kr)((e) => e.setMuted),
        e$ = (0, x.Kr)((e) => e.volume),
        eK = (0, x.Kr)((e) => e.setVolume),
        eq = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        eW = (0, s.useRef)(null),
        ez = (0, s.useRef)(null),
        eZ = (0, s.useRef)(null),
        eX = s.useRef(!0),
        eJ = q.userStatus?.completedAt != null,
        e0 = s.useMemo(() => q.config.features.includes(Q.Li.FULL_EPISODE_VIDEO_QUEST), [q.config.features]),
        e1 = s.useRef(!1),
        [e6, e7] = s.useState(null),
        [e4, e9] = s.useState(!1),
        [e5, e8] = s.useState(!1),
        [e3, e2] = s.useState(!1),
        [te, tt] = s.useState(null),
        tn = eJ ? (eW.current?.duration ?? 0) : Math.max(eF.maxTimestampSec, ef.progressSeconds),
        tr = s.useMemo(() => (0, I.L)({ quest: q, location: Q.rE.VIDEO_MODAL }), [q]),
        ts = (0, m.g)(eJ, eF, ef.progressSeconds),
        [ti, ta] = s.useState(L.oA.MD),
        tl = { [L.oA.MD]: J ? 56 : 50, [L.oA.LG]: J ? 64 : 58 };
    (0, _.u5)(() => {
        eX.current &&
            ((eX.current = !1),
            eR(v.A.getEffectiveConnectionSpeed()),
            eJ && eF.timestampSec >= eF.duration && eY(q.id, 0, eF.duration));
    });
    let { videoAsset: to, videoAssetType: tu, hlsRef: tc, onFirstChunkLoaded: td } = (0, M.A)(eW, ey, ts, $),
        {
            trackQuestVideoLoadingStarted: tm,
            trackQuestVideoLoadingEnded: tE,
            trackQuestVideoProgressed: t_,
            trackQuestVideoResumed: tf,
            trackQuestVideoPaused: tp,
            trackQuestVideoFocusChange: tS,
            trackQuestContentClick: tv,
            trackQuestVideoBufferingStarted: th,
            trackQuestVideoBufferingEnded: tg,
            trackQuestVideoSegmentWatched: tA,
            trackQuestVideoTimeToFirstFrame: tC,
            trackQuestVideoFullscreenChanged: tx,
            trackQuestVideoError: tT,
            trackQuestVideoVolumeChanged: tD,
        } = (0, k.A)({
            questId: q.id,
            isQuestCompleted: eJ,
            videoRef: eW,
            hlsRef: tc,
            videoSessionId: W,
            videoAssetId: tu,
            sourceQuestContent: K,
            logger: tr,
            isFullEpisodeVideoQuest: e0,
        });
    (0, P.A)({ videoAssetUrl: to?.url, videoRef: eW, hlsRef: tc, videoAssetType: tu });
    let tI = s.useRef(null),
        ty = s.useCallback(() => {
            clearTimeout(tI.current),
                e2(!0),
                (tI.current = setTimeout(() => {
                    e2(!1);
                }, 1e3));
        }, []);
    s.useEffect(
        () => () => {
            null != tI.current && clearTimeout(tI.current);
        },
        [],
    );
    let tR = s.useCallback(() => eW.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: tb } = (0, S.Yr)({
            getCurrentVideoTime: tR,
            isPlaying: eu === L.Q6.PLAYING,
            isMetadataLoaded: e4,
            isInitialSeekComplete: e5,
            onAnalytics: tA,
            emitIntervalMs: S.KI,
            minSegmentDurationMs: S._4,
        }),
        tN = s.useCallback(
            (e) => {
                if ((tr.info(`[QV] | updatePlayerState | playerState: ${e}`), ec(e), null != eW.current))
                    switch (e) {
                        case L.Q6.PLAYING:
                            eW.current.paused && tf(e6), e7(null), eW.current.play();
                            break;
                        case L.Q6.PAUSED:
                            eW.current.paused || tb(), eW.current.pause(), (ej.current = !1);
                            break;
                        case L.Q6.ENDED:
                            tb(), et(!1);
                    }
            },
            [tf, e6, tb, et, tr],
        );
    s.useEffect(() => {
        tp(e6);
    }, [e6, tp]),
        s.useEffect(() => {
            ei && tS(es, eu);
        }, [es, ei, eu, tS]);
    let tO = s.useCallback(
        (e) => {
            eJ || q.userStatus?.enrolledAt == null || (tr.info(`[QV] sendServerProgressUpdate: ${e}`), (0, R.zv)(q, e)),
                t_();
        },
        [eJ, q, tr, t_],
    );
    s.useEffect(() => {
        (Y !== E.ip4.HIDDEN &&
            Y !== E.ip4.EXITING &&
            Y !== E.ip4.EXITED &&
            (null == Y || !el || ea || eJ) &&
            (!ei || es || eJ)) ||
            null == eW.current ||
            eu !== L.Q6.PLAYING ||
            (tr.info(
                `[QV] | Pausing video | playerState: ${eu}, parentTransitionState: ${Y}, visible: ${ea}, focused: ${es}, isQuestCompleted: ${eJ}`,
            ),
            tN(L.Q6.PAUSED),
            eJ ? e0 && e7(C.Yg.ANOTHER_MODAL_OPENED) : e7(C.Yg.LOST_FOCUS));
    }, [Y, es, ei, ea, el, eu, eJ, tN, tO, tr, e0]),
        s.useEffect(() => {
            e6 === C.Yg.ANOTHER_MODAL_OPENED &&
                Y === E.ip4.ENTERED &&
                eu === L.Q6.PAUSED &&
                e0 &&
                es &&
                (tr.info("[QV] | Resuming full episode video after modal re-entered"), tN(L.Q6.PLAYING));
        }, [Y, eu, tr, tN, e6, e0, es]);
    let [tL, tM] = s.useState(!1),
        tk = s.useRef(null),
        tP = s.useRef(performance.now()),
        tw = s.useCallback(() => {
            null != tk.current && clearTimeout(tk.current),
                eu !== L.Q6.PLAYING ||
                    (tk.current = setTimeout(
                        () => {
                            eu === L.Q6.PLAYING && tM(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tP.current)),
                    ));
        }, [eu]),
        tV = () => {
            tM(!1), (tP.current = performance.now()), tw();
        };
    s.useEffect(() => {
        if (eu !== L.Q6.PLAYING) {
            tM(!1), null != tk.current && clearTimeout(tk.current);
            return;
        }
        return (
            tw(),
            () => {
                null != tk.current && clearTimeout(tk.current);
            }
        );
    }, [eu, tw]);
    let tQ = !tL && (eE || ed || eu === L.Q6.ENDED),
        tj = s.useCallback(() => {
            tr.info("[QV] | handleFullScreenExit");
            let e = (0, g.qf)(eW.current?.parentNode, eW.current);
            null == e || (0, g._U)(e) || (e.removeEventListener(g.Wb, tj), X(!1), tx(!1), ta(L.oA.MD));
        }, [X, tr, tx]),
        tU = () => {
            if (null == eW.current) return;
            let e = Math.max(eW.current.currentTime - 10, 0);
            tr.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                tH(e),
                eu === L.Q6.ENDED && tN(L.Q6.PAUSED),
                tv(C.uF.VIDEO_MODAL, D.Cy.SEEK_BACKWARD);
        },
        tB = () => {
            if (null == eW.current || !t5) return;
            let e = Math.min(eW.current.currentTime + 10, tn);
            tr.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                tH(e),
                eu !== L.Q6.ENDED && e >= eW.current.duration && tN(L.Q6.ENDED),
                tv(C.uF.VIDEO_MODAL, D.Cy.SEEK_FORWARD);
        };
    s.useEffect(() => {
        let e = eW.current;
        return () => {
            let t = (0, g.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(g.Wb, tj);
        };
    }, [tj]),
        s.useEffect(() => {
            let e = (e) => eZ.current?.(e);
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let tF = s.useCallback(
            (e) => {
                eK(e), tD(e);
            },
            [eK, tD],
        ),
        tY = s.useCallback(
            (e) => {
                eG(e);
            },
            [eG],
        ),
        tH = s.useCallback(
            (e) => {
                null != eW.current &&
                    (tr.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    eQ((e / (eW.current.duration ?? 1)) * 100),
                    tb(),
                    eg(!0),
                    e8(!1),
                    (eW.current.currentTime = e),
                    eY(q.id, e, eW.current.duration));
            },
            [eW, eY, q.id, tb, tr],
        );
    s.useEffect(() => {
        let e = eW.current;
        if (null == e) return;
        let t = () => {
            null != tc.current &&
                tc.current.mainForwardBufferInfo?.len === 0 &&
                tc.current.trigger(l.sV.BUFFER_FLUSHING, {
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
    }, [eW, tc]);
    let tG = () => {
            if (null != eW.current)
                switch ((tr.info(`[QV] | handlePlaybackBtnClick | playerState: ${eu}`), ty(), eu)) {
                    case L.Q6.ENDED:
                        tH(0), tN(L.Q6.PLAYING);
                        break;
                    case L.Q6.PLAYING:
                        tN(L.Q6.PAUSED), e7(C.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tN(L.Q6.PLAYING);
                }
        },
        t$ = (e) => {
            tt(e);
        },
        tK = (e) => {
            tt((t) => (t?.id === e.id ? null : t));
        },
        tq = s.useCallback(() => {
            if (
                null == eW.current ||
                (tr.info(`[QV] | handleTracksLoaded: textTracks.length: ${eW.current.textTracks.length}`),
                0 === eW.current.textTracks.length)
            )
                return;
            let e = eW.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, S.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t$(n)), (n.onexit = () => tK(n)));
                }
        }, [eW, tr]);
    s.useEffect(() => {
        if (null == ez.current) return;
        let e = ez.current;
        return (
            e.addEventListener("load", tq),
            () => {
                null != e && e.removeEventListener("load", tq);
            }
        );
    }, [ez, tq]);
    let tW = s.useCallback(
            (e) => {
                tr.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${eW.current?.currentTime}, videoAssetId: ${tu}, connectionSpeed: ${ey}`,
                ),
                    tT(e);
            },
            [ey, tT, eW, tu, tr],
        ),
        tz = s.useRef(!1);
    s.useEffect(() => {
        null != to || tz.current || ((tz.current = !0), tT(L.SB.NO_VALID_SOURCE));
    }, [to, tT, tz]);
    let tZ = (e) => {
        tr.info(`[QV] | handleCanPlay: playerState: ${eu}`),
            null != eW.current &&
                eu === L.Q6.PLAYING &&
                (tr.info("[QV] | handleCanPlay: did NOT early return"),
                eA && (tr.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eA}`), eC(!1)),
                ex &&
                    (tr.info(`[QV] | handleCanPlay: waitingForChunk: ${ex}`),
                    tg(null != eB.current ? performance.now() - eB.current : null),
                    eT(!1)),
                tr.info("[QV] | handleCanPlay: updating player state to playing"),
                tN(L.Q6.PLAYING));
    };
    s.useEffect(() => {
        if (!eh) return;
        let e = setTimeout(() => {
            eg(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eh]);
    let [{ controlBarAnimSpring: tX }, tJ] = (0, E.zhh)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: F,
            onStart: () => {
                ew(!1);
            },
            onRest: (e) => {
                1 === e.value && ew(!0);
            },
        })),
        t0 = (0, s.useRef)(null),
        [{ captionHeightSpring: t1 }, t6] = (0, E.zhh)(() => ({ from: { captionHeightSpring: 0 }, config: F }));
    s.useEffect(
        () => (
            t6({ captionHeightSpring: en && null != te ? (t0.current?.clientHeight ?? 0) : 0, immediate: eq }),
            () => {
                t1.stop();
            }
        ),
        [en, t6, eq, te, t1],
    ),
        s.useEffect(
            () => (
                tJ({ controlBarAnimSpring: tQ || eM ? 1 : 0, immediate: eq }),
                () => {
                    tX.stop();
                }
            ),
            [tQ, tJ, eq, eM, tX],
        );
    let t7 = eu === L.Q6.ENDED,
        t4 = s.useMemo(() => (0, T.tW)(q, T.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [q]),
        t9 = s.useMemo(() => (0, T.tW)(q, T.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [q]),
        t5 = eJ || eF.maxTimestampSec >= (eW.current?.currentTime ?? 0) + 1,
        t8 = s.useMemo(() => null === (0, T.tW)(q, T.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [q]),
        t3 = J ? 20 : 12,
        t2 = 20 * !!J,
        ne = eJ && eP;
    return (0, r.jsx)(E.DUT, {
        className: B.W6,
        "data-fullscreen": Z,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            em(!0), tM(!1), (tP.current = performance.now()), null != tk.current && clearTimeout(tk.current);
        },
        onMouseLeave: () => {
            em(!1), tM(!1);
        },
        onMouseMove: tV,
        onKeyDown: tV,
        children: (0, r.jsxs)("div", {
            className: a()(B.NS, { [B.DO]: "portrait" === G, [B.r7]: "landscape" === G }),
            style: { "--custom-footer-bottom": `${J ? 4 : 2}px` },
            children: [
                t7 && (0, r.jsx)(N.A, { videoRef: eW, onTrackQuestContentClick: tv, orientation: G }),
                (0, r.jsxs)(p.A, {
                    ref: (e) => {
                        (eW.current = e), (eo.current = e);
                    },
                    autoPlay: i,
                    playsInline: !0,
                    mediaLayoutType: Z ? j.dG.STATIC : j.dG.RESPONSIVE,
                    className: a()({ [B.R]: t7, [B.IR]: !0 }),
                    controls: !1,
                    poster: t4?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == eW.current) return;
                        let r = eW.current.currentTime >= t && !e1.current && e0;
                        if (eW.current.currentTime >= eb || r) {
                            var s;
                            tr.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${eW.current.currentTime}`,
                            ),
                                (s = eW.current.currentTime) >= t && (e1.current = !0),
                                eN(s + Q.aA + Math.random() * Q.A6),
                                tO(s);
                        }
                        eW.current.currentTime >= eO &&
                            (eL(eW.current.currentTime + 1),
                            (0, A.Gn)(q.id, ef.taskType, eW.current.currentTime),
                            n(eW.current.currentTime)),
                            eY(q.id, eW.current.currentTime, eW.current.duration),
                            ev((eW.current.currentTime / eW.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eW.current &&
                            (tO(eW.current.duration + 1),
                            tr.info(`[QV] | handleEnded: sending progress update: ${eW.current.duration + 1}`),
                            eY(q.id, eW.current.duration, eW.current.duration)),
                            tN(L.Q6.ENDED),
                            eT(!1);
                    },
                    onLoadedData: (e) => {
                        tr.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eA}`),
                            eA && (tE(null != eU.current ? performance.now() - eU.current : null), eC(!1), td());
                    },
                    onLoadedMetadata: (e) => {
                        null != eW.current &&
                            (tr.info(`[QV] | handleLoadedMetadata | videoAssetId: ${tu}`),
                            e9(!0),
                            tu !== T.fY.VIDEO_PLAYER_VIDEO_HLS && tH(ts),
                            eH ? (eW.current.volume = 0) : (eW.current.volume = e$));
                    },
                    onLoadStart: () => {
                        (eU.current = performance.now()),
                            tm(ey),
                            tr.info(`[QV] | handleLoadStart | loadingStartTime: ${eU.current}`);
                    },
                    onPlaying: () => {
                        if (!ej.current) return;
                        let e = performance.now() - H;
                        tr.info(`[QV] | ⏰ Video FCP: ${e}ms`), tC(e), (ej.current = !1);
                    },
                    onWaiting: (e) => {
                        (eB.current = performance.now()),
                            tr.info(`[QV] | handleWaitingForData: bufferingStartTime: ${eB.current}`),
                            th(),
                            eT(!0);
                    },
                    onProgress: (e) => {
                        if (null == eW.current) return;
                        tr.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${eW.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < eW.current.buffered.length; e++) {
                            let n = eW.current.buffered.start(e),
                                r = eW.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / eW.current.duration, size: (r - n) / eW.current.duration });
                        }
                        eI(t);
                    },
                    onCanPlay: tZ,
                    onCanPlayThrough: tZ,
                    onSeeked: () => {
                        tr.info("[QV] | handleSeeked"), e8(!0);
                    },
                    onAbort: () => tW(L.SB.ABORT),
                    onError: () => tW(L.SB.ERROR),
                    onEmptied: () => tW(L.SB.EMPTIED),
                    onStalled: () => tW(L.SB.STALLED),
                    onClick: () => {
                        tr.info("[QV] | handleVideoClick"), tG();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t9 &&
                            (0, r.jsx)("track", {
                                ref: ez,
                                src: t9.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != to &&
                            tu !== T.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != to.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => tW(L.SB.SOURCE_ERROR),
                                src: to.url,
                                type: to.mimetype,
                            }),
                    ],
                }),
                (eA || ex) &&
                    eu === L.Q6.PLAYING &&
                    null != to &&
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
                        hasVideoAsset: null != to,
                        playerState: eu,
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
                        })(e6),
                    }),
                    showOverlay: null == to,
                }),
                J
                    ? (0, r.jsxs)("div", {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(O.A, {}),
                              (0, r.jsx)(E.K0, {
                                  variant: "overlay-secondary",
                                  icon: E.PGe,
                                  "aria-label": U.intl.string(U.t.cpT0Cq),
                                  onClick: z,
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.animated.div, {
                          className: B.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, o.to)([tX.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, o.to)([tX.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, o.to)([tX.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(O.A, {}),
                      }),
                ee &&
                    eu !== L.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(E.DUT, {
                                onClick: () => {
                                    eu === L.Q6.PAUSED && tN(L.Q6.PLAYING), et(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: B.BG }),
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: a()(B.xr, { [B.MZ]: "portrait" === G }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, o.to)([tX, t1], (e, t) => `${e * tl[ti] + t}px`) },
                                children: (0, r.jsx)(V.y, {
                                    quest: q,
                                    onClose: () => {
                                        et(!1), tv(C.uF.VIDEO_MODAL, D.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(o.animated.div, {
                    className: B.Jp,
                    style: { opacity: (0, o.to)([tX.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                e3 &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: a()(B.yf, { [B.ZH]: eu === L.Q6.PLAYING, [B.v7]: eu === L.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                eu === L.Q6.PLAYING
                                    ? (0, r.jsx)(E.udU, { className: B.PK })
                                    : (0, r.jsx)(E.E$n, { className: B.PK }),
                        },
                        eu,
                    ),
                en &&
                    null != te &&
                    !t7 &&
                    (0, r.jsx)(o.animated.div, {
                        className: B.o$,
                        ref: t0,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, o.to)([tX.to({ range: [0, 1], output: [-t2, -tl[ti]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(E.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: B.qh,
                            children: te.text,
                        }),
                    }),
                (0, r.jsxs)(o.animated.div, {
                    className: B.r8,
                    style: { height: (0, o.to)([tX.to({ range: [0, 1], output: [0, tl[ti]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            style: {
                                transform: (0, o.to)(
                                    [tX.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * t2}px)`,
                                ),
                            },
                            children: (0, r.jsx)(w.A, {
                                percent: null != eV ? eV : ep,
                                animate: !0 !== eX.current && !eh,
                                interactionEnabled: ne,
                                playerState: eu,
                                preloadedBuffers: tQ ? eD : void 0,
                                durationSec: eW.current?.duration ?? 1,
                                isFullyVisible: tQ && eP,
                                maxSeekableTime: tQ && eP ? tn : void 0,
                                onClick: (e) => {
                                    ne && (tH(e), eu === L.Q6.ENDED && tN(L.Q6.PLAYING));
                                },
                                onScrubBack: tU,
                                onScrubForward: tB,
                                isQuestCompleted: eJ,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(o.animated.div, {
                            className: B.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, o.to)(
                                    [tX.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * t3}px`,
                                ),
                                paddingBottom: (0, o.to)(
                                    [tX.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, o.to)([tX.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => e_(!0),
                            onBlur: () => e_(!1),
                            children: (0, r.jsx)(S.zZ, {
                                videoRef: eW,
                                playerState: eu,
                                animSpring: tX,
                                visible: tQ,
                                seekForwardEnabled: t5,
                                hideCaptionBtn: null == t9,
                                hideTranscriptBtn: t8,
                                hideSkipButtons: "portrait" === G,
                                size: ti,
                                autoFocus: !0,
                                keyDownHandlerRef: eZ,
                                volume: e$,
                                muted: eH,
                                transcriptEnabled: ee,
                                captionEnabled: en,
                                fullScreenEnabled: Z,
                                handlePlaybackBtnClick: tG,
                                handleTranscriptBtnClick: () => {
                                    et(!ee),
                                        tv(C.uF.VIDEO_MODAL, ee ? D.Cy.TRANSCRIPT_DISABLE : D.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    er(!en),
                                        tv(
                                            C.uF.VIDEO_MODAL,
                                            en ? D.Cy.CLOSED_CAPTIONING_DISABLE : D.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !Z;
                                    tr.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, g.qf)(eW.current?.parentNode, eW.current);
                                    e && null != t
                                        ? ((0, g.tl)(t), t.addEventListener(g.Wb, tj), tx(!0), ta(L.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(g.Wb, tj), tx(!1), (0, g.sP)(t), ta(L.oA.MD)),
                                        X(e);
                                },
                                handleSeekBackBtnClick: tU,
                                handleSeekForwardBtnClick: tB,
                                handleControlBarPendingInteraction: ek,
                                onVolumeChange: tF,
                                onMutedChange: tY,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
