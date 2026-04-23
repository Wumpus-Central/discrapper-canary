n.d(t, { A: () => X }), n(321073);
var r = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(771253),
    u = n(419354),
    o = n(942381),
    c = n(311907),
    d = n(876230),
    E = n(645577),
    m = n(231723),
    f = n(717421),
    _ = n(939249),
    S = n(289873),
    p = n(408278),
    v = n(789645),
    g = n(782134),
    h = n(113494),
    A = n(834730),
    C = n(964486),
    x = n(775602),
    D = n(607470),
    I = n(697397),
    T = n(544180),
    b = n(723702),
    O = n(475815),
    y = n(829219),
    L = n(341915),
    R = n(405670),
    k = n(579473),
    N = n(590202),
    M = n(851936),
    P = n(792620),
    w = n(753386),
    V = n(795068),
    Q = n(179615),
    j = n(576199),
    U = n(163961),
    B = n(758423),
    F = n(458817),
    Y = n(873856),
    K = n(804147),
    H = n(820636),
    G = n(654487),
    $ = n(838541),
    q = n(985018),
    W = n(834926);
let z = { tension: 250, friction: 5, clamp: !0 };
function X(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: a,
            autoFocus: X = !0,
            parentTransitionState: Z,
            openedAtMs: J,
            orientation: ee,
            videoUrlOverride: et,
        } = e,
        {
            sourceQuestContent: en,
            quest: er,
            videoSessionId: es,
            onClose: ea,
            isFullscreenEnabled: el,
            setIsFullscreenEnabled: ei,
            useNewProgressBarStyling: eu,
        } = s.useContext(V.a),
        eo = (0, R.Kr)((e) => e.transcriptEnabled),
        ec = (0, R.Kr)((e) => e.setTranscriptEnabled),
        ed = (0, R.Kr)((e) => e.captionEnabled),
        eE = (0, R.Kr)((e) => e.setCaptionEnabled),
        { focused: em, focusedChanged: ef } = (0, I.A7)(),
        { visible: e_, visibleChanged: eS, targetRef: ep } = (0, I.O7)(),
        [ev, eg] = s.useState(!0 === a ? U.Q6.PLAYING : U.Q6.PAUSED),
        [eh, eA] = s.useState(!1),
        [eC, ex] = s.useState(!1),
        eD = (0, P.Yh)(er),
        [eI, eT] = s.useState(eD.percentComplete),
        eb = s.useCallback((e) => {
            e$(null), eT(e);
        }, []),
        [eO, ey] = s.useState(!1),
        [eL, eR] = s.useState(!0),
        [ek, eN] = s.useState(!1),
        [eM, eP] = s.useState([]),
        [ew, eV] = s.useState(T.A.getEffectiveConnectionSpeed()),
        [eQ, ej] = s.useState(0),
        [eU, eB] = s.useState(0),
        [eF, eY] = s.useState(!1),
        [eK, eH] = s.useState(!1),
        [eG, e$] = s.useState(null),
        eq = s.useRef(!0),
        eW = s.useRef(null),
        ez = s.useRef(null),
        eX = (0, R.Kr)((e) => e.videoProgress[er.id] ?? R.yc, o.x),
        eZ = (0, R.Kr)((e) => e.setVideoProgress),
        eJ = (0, R.Kr)((e) => e.muted),
        e0 = (0, R.Kr)((e) => e.setMuted),
        e1 = (0, R.Kr)((e) => e.volume),
        e6 = (0, R.Kr)((e) => e.setVolume),
        e7 = (0, c.bG)([x.A], () => x.A.useReducedMotion),
        e4 = (0, s.useRef)(null),
        e9 = (0, s.useRef)(null),
        e5 = (0, s.useRef)(null),
        e3 = s.useRef(!0),
        e8 = er.userStatus?.completedAt != null,
        e2 = s.useMemo(() => er.config.features.includes(G.Li.FULL_EPISODE_VIDEO_QUEST), [er.config.features]),
        te = s.useRef(!1),
        [tt, tn] = s.useState(null),
        [tr, ts] = s.useState(!1),
        [ta, tl] = s.useState(null),
        ti = Math.max(eX.maxTimestampSec, eD.progressSeconds),
        tu = e8 ? (e4.current?.duration ?? 0) : (0, w.vd)(ti, eX.duration),
        to = s.useMemo(() => (0, M.L)({ quest: er, location: G.rE.VIDEO_MODAL }), [er]),
        tc = (0, E.g)(e8, eX, eD.progressSeconds),
        [td, tE] = s.useState(U.oA.MD),
        tm = { [U.oA.MD]: eu ? 56 : 50, [U.oA.LG]: eu ? 64 : 58 };
    (0, C.u5)(() => {
        e3.current &&
            ((e3.current = !1),
            eV(T.A.getEffectiveConnectionSpeed()),
            e8 && eX.timestampSec >= eX.duration && eZ(er.id, 0, eX.duration));
    });
    let { videoAsset: tf, videoAssetType: t_, hlsRef: tS, onFirstChunkLoaded: tp } = (0, B.A)(e4, ew, tc, et),
        {
            trackQuestVideoLoadingStarted: tv,
            trackQuestVideoLoadingEnded: tg,
            trackQuestVideoProgressed: th,
            trackQuestVideoResumed: tA,
            trackQuestVideoPaused: tC,
            trackQuestVideoFocusChange: tx,
            trackQuestContentClick: tD,
            trackQuestVideoBufferingStarted: tI,
            trackQuestVideoBufferingEnded: tT,
            trackQuestVideoSegmentWatched: tb,
            trackQuestVideoTimeToFirstFrame: tO,
            trackQuestVideoFullscreenChanged: ty,
            trackQuestVideoError: tL,
            trackQuestVideoVolumeChanged: tR,
        } = (0, F.A)({
            questId: er.id,
            isQuestCompleted: e8,
            videoRef: e4,
            hlsRef: tS,
            videoSessionId: es,
            videoAssetId: t_,
            sourceQuestContent: en,
            logger: to,
            isFullEpisodeVideoQuest: e2,
        });
    (0, Y.A)({ videoAssetUrl: tf?.url, videoRef: e4, hlsRef: tS, videoAssetType: t_ });
    let tk = s.useRef(null),
        tN = s.useCallback(() => {
            clearTimeout(tk.current),
                ts(!0),
                (tk.current = setTimeout(() => {
                    ts(!1);
                }, 1e3));
        }, []);
    s.useEffect(
        () => () => {
            null != tk.current && clearTimeout(tk.current);
        },
        [],
    );
    let tM = s.useCallback(() => e4.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: tP,
            handleLoadEnd: tw,
            handleFirstFrame: tV,
            handleSeek: tQ,
        } = (0, I.Yr)({ getCurrentVideoTime: tM, onAnalytics: tb, emitIntervalMs: I.KI, minSegmentDurationMs: I._4 }),
        tj = s.useRef(tP);
    s.useEffect(() => {
        tj.current(ev, null);
    }, []);
    let tU = s.useCallback(
        (e) => {
            if ((to.info(`[QV] | updatePlayerState | playerState: ${e}`), tP(e, null), eg(e), null != e4.current))
                switch (e) {
                    case U.Q6.PLAYING:
                        e4.current.paused && tA(tt), tn(null), e4.current.play();
                        break;
                    case U.Q6.PAUSED:
                        e4.current.pause(), (eq.current = !1);
                        break;
                    case U.Q6.ENDED:
                        ec(!1);
                }
        },
        [tP, tA, tt, ec, to],
    );
    s.useEffect(() => {
        tC(tt);
    }, [tt, tC]),
        s.useEffect(() => {
            ef && tx(em, ev);
        }, [em, ef, ev, tx]);
    let tB = s.useCallback(
        (e) => {
            e8 ||
                er.userStatus?.enrolledAt == null ||
                (to.info(`[QV] sendServerProgressUpdate: ${e}`), (0, w.zv)(er, e)),
                th();
        },
        [e8, er, to, th],
    );
    s.useEffect(() => {
        (Z !== m.ip.HIDDEN &&
            Z !== m.ip.EXITING &&
            Z !== m.ip.EXITED &&
            (null == Z || !eS || e_ || e8) &&
            (!ef || em || e8)) ||
            null == e4.current ||
            ev !== U.Q6.PLAYING ||
            (to.info(
                `[QV] | Pausing video | playerState: ${ev}, parentTransitionState: ${Z}, visible: ${e_}, focused: ${em}, isQuestCompleted: ${e8}`,
            ),
            tU(U.Q6.PAUSED),
            e8 ? e2 && tn(L.Yg.ANOTHER_MODAL_OPENED) : tn(L.Yg.LOST_FOCUS));
    }, [Z, em, ef, e_, eS, ev, e8, tU, tB, to, e2]),
        s.useEffect(() => {
            tt === L.Yg.ANOTHER_MODAL_OPENED &&
                Z === m.ip.ENTERED &&
                ev === U.Q6.PAUSED &&
                e2 &&
                em &&
                (to.info("[QV] | Resuming full episode video after modal re-entered"), tU(U.Q6.PLAYING));
        }, [Z, ev, to, tU, tt, e2, em]);
    let [tF, tY] = s.useState(!1),
        tK = s.useRef(null),
        tH = s.useRef(performance.now()),
        tG = s.useCallback(() => {
            null != tK.current && clearTimeout(tK.current),
                ev !== U.Q6.PLAYING ||
                    (tK.current = setTimeout(
                        () => {
                            ev === U.Q6.PLAYING && tY(!0);
                        },
                        Math.max(0, 3e3 - (performance.now() - tH.current)),
                    ));
        }, [ev]),
        t$ = () => {
            tY(!1), (tH.current = performance.now()), tG();
        };
    s.useEffect(() => {
        if (ev !== U.Q6.PLAYING) {
            tY(!1), null != tK.current && clearTimeout(tK.current);
            return;
        }
        return (
            tG(),
            () => {
                null != tK.current && clearTimeout(tK.current);
            }
        );
    }, [ev, tG]);
    let tq = !tF && (eC || eh || ev === U.Q6.ENDED),
        tW = s.useCallback(() => {
            to.info("[QV] | handleFullScreenExit");
            let e = (0, O.qf)(e4.current?.parentNode, e4.current);
            null == e || (0, O._U)(e) || (e.removeEventListener(O.Wb, tW), ei(!1), ty(!1), tE(U.oA.MD));
        }, [ei, to, ty]),
        tz = () => {
            if (null == e4.current) return;
            let e = Math.max(e4.current.currentTime - 10, 0);
            to.info(`[QV] | handleSeekBackIncrement | newTime: ${e}`),
                t0(e),
                ev === U.Q6.ENDED && tU(U.Q6.PAUSED),
                tD(L.uF.VIDEO_MODAL, N.Cy.SEEK_BACKWARD);
        },
        tX = () => {
            if (null == e4.current || !ni) return;
            let e = Math.min(e4.current.currentTime + 10, tu);
            to.info(`[QV] | handleSeekForwardIncrement | newTime: ${e}`),
                t0(e),
                ev !== U.Q6.ENDED && e >= e4.current.duration && tU(U.Q6.ENDED),
                tD(L.uF.VIDEO_MODAL, N.Cy.SEEK_FORWARD);
        };
    s.useEffect(() => {
        let e = e4.current;
        return () => {
            let t = (0, O.qf)(e?.parentNode, e);
            null != t && t.removeEventListener(O.Wb, tW);
        };
    }, [tW]),
        s.useEffect(() => {
            let e = (e) => e5.current?.(e);
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []);
    let tZ = s.useCallback(
            (e) => {
                e6(e), tR(e);
            },
            [e6, tR],
        ),
        tJ = s.useCallback(
            (e) => {
                e0(e);
            },
            [e0],
        ),
        t0 = s.useCallback(
            (e) => {
                null != e4.current &&
                    (to.info(`[QV] | seekTimeline | timeSec: ${e}`),
                    e$((e / (e4.current.duration ?? 1)) * 100),
                    tQ(),
                    ey(!0),
                    (e4.current.currentTime = e),
                    eZ(er.id, e, e4.current.duration));
            },
            [e4, eZ, er.id, tQ, to],
        );
    s.useEffect(() => {
        let e = e4.current;
        if (null == e) return;
        let t = () => {
            null != tS.current &&
                tS.current.mainForwardBufferInfo?.len === 0 &&
                tS.current.trigger(i.sV.BUFFER_FLUSHING, {
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
    }, [e4, tS]);
    let t1 = s.useRef(!1),
        t6 = () => {
            if (null != e4.current)
                switch ((to.info(`[QV] | handlePlaybackBtnClick | playerState: ${ev}`), tN(), ev)) {
                    case U.Q6.ENDED:
                        t0(0), tU(U.Q6.PLAYING);
                        break;
                    case U.Q6.PLAYING:
                        tU(U.Q6.PAUSED), tn(L.Yg.PAUSE_BUTTON);
                        break;
                    default:
                        tU(U.Q6.PLAYING);
                }
        },
        t7 = (e) => {
            tl(e);
        },
        t4 = (e) => {
            tl((t) => (t?.id === e.id ? null : t));
        },
        t9 = s.useCallback(() => {
            if (
                null == e4.current ||
                (to.info(`[QV] | handleTracksLoaded: textTracks.length: ${e4.current.textTracks.length}`),
                0 === e4.current.textTracks.length)
            )
                return;
            let e = e4.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, I.Ce)(n) && ((n.id = `cue-${t}`), (n.onenter = () => t7(n)), (n.onexit = () => t4(n)));
                }
        }, [e4, to]);
    s.useEffect(() => {
        if (null == e9.current) return;
        let e = e9.current;
        return (
            e.addEventListener("load", t9),
            () => {
                null != e && e.removeEventListener("load", t9);
            }
        );
    }, [e9, t9]);
    let t5 = s.useCallback(
            (e) => {
                to.info(
                    `[QV] | logVideoError: errorType: ${e}, videoProgress: ${e4.current?.currentTime}, videoAssetId: ${t_}, connectionSpeed: ${ew}`,
                ),
                    tL(e);
            },
            [ew, tL, e4, t_, to],
        ),
        t3 = s.useRef(!1);
    s.useEffect(() => {
        null != tf || t3.current || ((t3.current = !0), tL(U.SB.NO_VALID_SOURCE));
    }, [tf, tL, t3]);
    let t8 = (e) => {
        to.info(`[QV] | handleCanPlay: playerState: ${ev}`),
            null != e4.current &&
                ev === U.Q6.PLAYING &&
                (to.info("[QV] | handleCanPlay: did NOT early return"),
                eL && (to.info(`[QV] | handleCanPlay: loadingFirstChunk: ${eL}`), eR(!1)),
                ek &&
                    (to.info(`[QV] | handleCanPlay: waitingForChunk: ${ek}`),
                    tT(null != ez.current ? performance.now() - ez.current : null),
                    eN(!1)),
                to.info("[QV] | handleCanPlay: updating player state to playing"),
                tU(U.Q6.PLAYING));
    };
    s.useEffect(() => {
        if (!eO) return;
        let e = setTimeout(() => {
            ey(!1);
        }, 1e3);
        return () => clearTimeout(e);
    }, [eO]);
    let [{ controlBarAnimSpring: t2 }, ne] = (0, f.z)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: z,
            onStart: () => {
                eH(!1);
            },
            onRest: (e) => {
                1 === e.value && eH(!0);
            },
        })),
        nt = (0, s.useRef)(null),
        [{ captionHeightSpring: nn }, nr] = (0, f.z)(() => ({ from: { captionHeightSpring: 0 }, config: z }));
    s.useEffect(
        () => (
            nr({ captionHeightSpring: ed && null != ta ? (nt.current?.clientHeight ?? 0) : 0, immediate: e7 }),
            () => {
                nn.stop();
            }
        ),
        [ed, nr, e7, ta, nn],
    ),
        s.useEffect(
            () => (
                ne({ controlBarAnimSpring: tq || eF ? 1 : 0, immediate: e7 }),
                () => {
                    t2.stop();
                }
            ),
            [tq, ne, e7, eF, t2],
        );
    let ns = ev === U.Q6.ENDED,
        na = s.useMemo(() => (0, k.tW)(er, k.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [er]),
        nl = s.useMemo(() => (0, k.tW)(er, k.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [er]),
        ni = e8 || ti >= (e4.current?.currentTime ?? 0) + 1,
        nu = s.useMemo(() => null === (0, k.tW)(er, k.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1), [er]),
        no = eu ? 20 : 12,
        nc = 20 * !!eu,
        nd = e8 && eK;
    return (0, r.jsx)(_.D, {
        className: W.W6,
        "data-fullscreen": el,
        "data-testid": "discord-web-video-player-container",
        tabIndex: -1,
        onMouseEnter: () => {
            eA(!0), tY(!1), (tH.current = performance.now()), null != tK.current && clearTimeout(tK.current);
        },
        onMouseLeave: () => {
            eA(!1), tY(!1);
        },
        onMouseMove: t$,
        onKeyDown: t$,
        children: (0, r.jsxs)("div", {
            className: l()(W.NS, { [W.DO]: "portrait" === ee, [W.r7]: "landscape" === ee }),
            style: { "--custom-footer-bottom": `${eu ? 4 : 2}px` },
            children: [
                ns && (0, r.jsx)(Q.A, { videoRef: e4, onTrackQuestContentClick: tD, orientation: ee }),
                (0, r.jsxs)(D.A, {
                    ref: (e) => {
                        (e4.current = e), (ep.current = e);
                    },
                    autoPlay: a,
                    playsInline: !0,
                    mediaLayoutType: el ? $.dG.STATIC : $.dG.RESPONSIVE,
                    className: l()({ [W.R]: ns, [W.IR]: !0 }),
                    controls: !1,
                    poster: na?.url,
                    disablePictureInPicture: !0,
                    "data-testid": "discord-web-video-player-video",
                    onTimeUpdate: (e) => {
                        if (null == e4.current) return;
                        let r = e4.current.currentTime >= t && !te.current && e2;
                        if (e4.current.currentTime >= eQ || r) {
                            var s;
                            to.info(
                                `[QV] | handleTimeUpdate: capturing server time update: currentTime: ${e4.current.currentTime}`,
                            ),
                                (s = e4.current.currentTime) >= t && (te.current = !0),
                                ej(s + G.aA + Math.random() * G.A6),
                                tB(s);
                        }
                        e4.current.currentTime >= eU &&
                            (eB(e4.current.currentTime + 1),
                            (0, y.Gn)(er.id, eD.taskType, e4.current.currentTime),
                            n(e4.current.currentTime)),
                            eZ(er.id, e4.current.currentTime, e4.current.duration),
                            eb((e4.current.currentTime / e4.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != e4.current &&
                            (tB(e4.current.duration + 1),
                            to.info(`[QV] | handleEnded: sending progress update: ${e4.current.duration + 1}`),
                            eZ(er.id, e4.current.duration, e4.current.duration)),
                            tU(U.Q6.ENDED),
                            eN(!1);
                    },
                    onLoadedData: (e) => {
                        to.info(`[QV] | handleLoadedData: loadingFirstChunk: ${eL}`),
                            eL && (tg(null != eW.current ? performance.now() - eW.current : null), eR(!1), tp());
                    },
                    onLoadedMetadata: (e) => {
                        null != e4.current &&
                            (to.info(`[QV] | handleLoadedMetadata | videoAssetId: ${t_}`),
                            tw(null),
                            t_ !== k.fY.VIDEO_PLAYER_VIDEO_HLS && t0(tc),
                            eJ ? (e4.current.volume = 0) : (e4.current.volume = e1));
                    },
                    onLoadStart: () => {
                        (eW.current = performance.now()),
                            (t1.current = !1),
                            tv(ew),
                            to.info(`[QV] | handleLoadStart | loadingStartTime: ${eW.current}`);
                    },
                    onPlaying: () => {
                        if (!eq.current) return;
                        let e = performance.now() - J;
                        to.info(`[QV] | ⏰ Video FCP: ${e}ms`), tO(e), (eq.current = !1);
                    },
                    onWaiting: (e) => {
                        (ez.current = performance.now()),
                            to.info(`[QV] | handleWaitingForData: bufferingStartTime: ${ez.current}`),
                            tI(),
                            eN(!0);
                    },
                    onProgress: (e) => {
                        if (null == e4.current) return;
                        to.info(`[QV] | handleLoadingHasProgressed: buffered.length: ${e4.current.buffered.length}`);
                        let t = [];
                        for (let e = 0; e < e4.current.buffered.length; e++) {
                            let n = e4.current.buffered.start(e),
                                r = e4.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({ start: n / e4.current.duration, size: (r - n) / e4.current.duration });
                        }
                        eP(t);
                    },
                    onCanPlay: t8,
                    onCanPlayThrough: t8,
                    onSeeked: () => {
                        to.info("[QV] | handleSeeked"), t1.current || ((t1.current = !0), tV(0));
                    },
                    onAbort: () => t5(U.SB.ABORT),
                    onError: () => t5(U.SB.ERROR),
                    onEmptied: () => t5(U.SB.EMPTIED),
                    onStalled: () => t5(U.SB.STALLED),
                    onClick: () => {
                        to.info("[QV] | handleVideoClick"), t6();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != nl &&
                            (0, r.jsx)("track", {
                                ref: e9,
                                src: nl.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tf &&
                            t_ !== k.fY.VIDEO_PLAYER_VIDEO_HLS &&
                            null != tf.mimetype &&
                            (0, r.jsx)("source", {
                                onError: () => t5(U.SB.SOURCE_ERROR),
                                src: tf.url,
                                type: tf.mimetype,
                            }),
                    ],
                }),
                (eL || ek) &&
                    ev === U.Q6.PLAYING &&
                    null != tf &&
                    (0, r.jsx)("span", {
                        className: W.S,
                        "data-testid": "discord-web-video-player-loading-spinner",
                        children: (0, r.jsx)(S.y, { type: S.y.Type.WANDERING_CUBES }),
                    }),
                (0, r.jsx)(I.DQ, {
                    message: ((e) => {
                        let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                        return t
                            ? n === U.Q6.PAUSED && r === d.KB.FOCUS
                                ? q.intl.string(q.t.w6PeBF)
                                : null
                            : (0, b.isWeb)()
                              ? q.intl.string(q.t["E1du/q"])
                              : q.intl.string(q.t["rStN/7"]);
                    })({
                        hasVideoAsset: null != tf,
                        playerState: ev,
                        pauseReason: (function (e) {
                            switch (e) {
                                case L.Yg.PAUSE_BUTTON:
                                    return d.KB.USER;
                                case L.Yg.LOST_FOCUS:
                                    return d.KB.FOCUS;
                                case L.Yg.MODAL_CLOSED:
                                    return d.KB.VISIBILITY;
                                default:
                                    return null;
                            }
                        })(tt),
                    }),
                    showOverlay: null == tf,
                }),
                eu
                    ? (0, r.jsxs)("div", {
                          className: W.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          children: [
                              (0, r.jsx)(j.A, {}),
                              (0, r.jsx)(p.K, {
                                  variant: "overlay-secondary",
                                  icon: v.P,
                                  "aria-label": q.intl.string(q.t.cpT0Cq),
                                  onClick: ea,
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.animated.div, {
                          className: W.R4,
                          "data-testid": "discord-web-video-player-share-btn",
                          style: {
                              opacity: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                              visibility: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.1 ? "hidden" : "visible",
                              ),
                              pointerEvents: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                  e < 0.3 ? "none" : "auto",
                              ),
                          },
                          children: (0, r.jsx)(j.A, {}),
                      }),
                eo &&
                    ev !== U.Q6.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(_.D, {
                                onClick: () => {
                                    ev === U.Q6.PAUSED && tU(U.Q6.PLAYING), ec(!1);
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: W.BG }),
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: l()(W.xr, { [W.MZ]: "portrait" === ee }),
                                "data-testid": "discord-web-video-player-transcript",
                                style: { marginBottom: (0, u.to)([t2, nn], (e, t) => `${e * tm[td] + t}px`) },
                                children: (0, r.jsx)(H.y, {
                                    quest: er,
                                    onClose: () => {
                                        ec(!1), tD(L.uF.VIDEO_MODAL, N.Cy.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(u.animated.div, {
                    className: W.Jp,
                    style: { opacity: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`) },
                }),
                tr &&
                    (0, r.jsx)(
                        "div",
                        {
                            className: l()(W.yf, { [W.ZH]: ev === U.Q6.PLAYING, [W.v7]: ev === U.Q6.PAUSED }),
                            style: { "--custom-play-pause-pop-ms": "1000ms" },
                            children:
                                ev === U.Q6.PLAYING
                                    ? (0, r.jsx)(g.u, { className: W.PK })
                                    : (0, r.jsx)(h.E, { className: W.PK }),
                        },
                        ev,
                    ),
                ed &&
                    null != ta &&
                    !ns &&
                    (0, r.jsx)(u.animated.div, {
                        className: W.o$,
                        ref: nt,
                        "data-testid": "discord-web-video-player-captions",
                        style: {
                            translateY: (0, u.to)([t2.to({ range: [0, 1], output: [-nc, -tm[td]] })], (e) => `${e}px`),
                        },
                        children: (0, r.jsx)(A.E, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: W.qh,
                            children: ta.text,
                        }),
                    }),
                (0, r.jsxs)(u.animated.div, {
                    className: W.r8,
                    style: { height: (0, u.to)([t2.to({ range: [0, 1], output: [0, tm[td]] })], (e) => `${e}px`) },
                    children: [
                        (0, r.jsx)(u.animated.div, {
                            style: {
                                transform: (0, u.to)(
                                    [t2.to({ range: [1, 0], output: [0, 1] })],
                                    (e) => `translateY(-${e * nc}px)`,
                                ),
                            },
                            children: (0, r.jsx)(K.A, {
                                percent: null != eG ? eG : eI,
                                animate: !0 !== e3.current && !eO,
                                interactionEnabled: nd,
                                playerState: ev,
                                preloadedBuffers: tq ? eM : void 0,
                                durationSec: e4.current?.duration ?? 1,
                                isFullyVisible: tq && eK,
                                maxSeekableTime: tq && eK ? tu : void 0,
                                onClick: (e) => {
                                    nd && (t0(e), ev === U.Q6.ENDED && tU(U.Q6.PLAYING));
                                },
                                onScrubBack: tz,
                                onScrubForward: tX,
                                isQuestCompleted: e8,
                                targetSec: t,
                                "data-testid": "discord-web-video-player-timeline",
                            }),
                        }),
                        (0, r.jsx)(u.animated.div, {
                            className: W.uN,
                            "data-testid": "discord-web-video-player-controls",
                            style: {
                                paddingTop: (0, u.to)(
                                    [t2.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * no}px`,
                                ),
                                paddingBottom: (0, u.to)(
                                    [t2.to({ range: [0, 1], output: [0, 1] })],
                                    (e) => `${e * e * 12}px`,
                                ),
                                pointerEvents: (0, u.to)([t2.to({ range: [0, 1], output: [0, 1] })], (e) =>
                                    e < 0.3 ? "none" : "auto",
                                ),
                            },
                            onFocus: () => ex(!0),
                            onBlur: () => ex(!1),
                            children: (0, r.jsx)(I.zZ, {
                                videoRef: e4,
                                playerState: ev,
                                animSpring: t2,
                                visible: tq,
                                seekForwardEnabled: ni,
                                hideCaptionBtn: null == nl,
                                hideTranscriptBtn: nu,
                                hideSkipButtons: "portrait" === ee,
                                size: td,
                                autoFocus: X,
                                keyDownHandlerRef: e5,
                                volume: e1,
                                muted: eJ,
                                transcriptEnabled: eo,
                                captionEnabled: ed,
                                fullScreenEnabled: el,
                                handlePlaybackBtnClick: t6,
                                handleTranscriptBtnClick: () => {
                                    ec(!eo),
                                        tD(L.uF.VIDEO_MODAL, eo ? N.Cy.TRANSCRIPT_DISABLE : N.Cy.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eE(!ed),
                                        tD(
                                            L.uF.VIDEO_MODAL,
                                            ed ? N.Cy.CLOSED_CAPTIONING_DISABLE : N.Cy.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    let e = !el;
                                    to.info(`[QV] | handleFullScreenButtonClick | shouldBeEnabled: ${e}`);
                                    let t = (0, O.qf)(e4.current?.parentNode, e4.current);
                                    e && null != t
                                        ? ((0, O.tl)(t), t.addEventListener(O.Wb, tW), ty(!0), tE(U.oA.LG))
                                        : e ||
                                          null == t ||
                                          (t.removeEventListener(O.Wb, tW), ty(!1), (0, O.sP)(t), tE(U.oA.MD)),
                                        ei(e);
                                },
                                handleSeekBackBtnClick: tz,
                                handleSeekForwardBtnClick: tX,
                                handleControlBarPendingInteraction: eY,
                                onVolumeChange: tZ,
                                onMutedChange: tJ,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
