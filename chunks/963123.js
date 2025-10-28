n.d(t, { Z: () => $ }), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(713447),
    s = n(13941),
    c = n(574583),
    u = n(754700),
    d = n(442837),
    m = n(780384),
    f = n(481060),
    p = n(493773),
    v = n(607070),
    g = n(70097),
    E = n(210887),
    b = n(707903),
    O = n(866960),
    h = n(63063),
    C = n(228488),
    S = n(617136),
    _ = n(509212),
    y = n(272008),
    j = n(497505),
    x = n(184299),
    T = n(347382),
    D = n(5881),
    P = n(208109),
    R = n(117242),
    I = n(720293),
    N = n(566078),
    k = n(602667),
    w = n(881773),
    A = n(350312),
    L = n(355243),
    M = n(106743),
    V = n(223418),
    Z = n(604162),
    B = n(747717),
    F = n(281055),
    U = n(435585),
    q = n(46140),
    H = n(981631),
    Y = n(217702),
    Q = n(388032),
    G = n(430799);
let W = new Set([H.IyS.FIVE_G, H.IyS.FOUR_G, H.IyS.UNKNOWN]),
    z = {
        tension: 250,
        friction: 5,
        clamp: !0,
    };
function K() {
    let e = (0, d.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: G.pauseText,
        style: { background: (0, m.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: Q.intl.string(Q.t["U7Xrb+"]),
        }),
    });
}
function X(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: o } = e,
        a = l.useMemo(() => (0, I.z0)(t, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(k.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: o,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: a.url,
                      alt: "Video thumbnail",
                      className: i()(G.stillFrameImageCard, { [G.stillFrameImageCardHidden]: !n }),
                  }),
          });
}
function J(e) {
    let { title: t, subtitle: n, icon: o, onClick: a, className: s } = e,
        [c, u] = l.useState(!1),
        d = () => {
            u(!0);
        },
        m = () => {
            u(!1);
        };
    return (0, r.jsx)(f.P3F, {
        className: i()(G.endScreenPanel, G.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)("div", {
            className: G.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: G.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(f.Heading, {
                            variant: "heading-md/semibold",
                            className: G.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(f.Heading, {
                            variant: "heading-sm/normal",
                            className: G.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(B.Z, { color: "#747783" }),
                (0, r.jsx)(o, {
                    size: "md",
                    color: c ? "#FFFFFF" : "#B5BAC1",
                    className: G.endScreenIcon,
                }),
            ],
        }),
    });
}
function $(e) {
    var t, n, o, m, E, k, B, $;
    let {
            quest: ee,
            videoTask: et,
            videoSessionId: en,
            onOptimisticProgressUpdate: er,
            autoplay: el,
            parentTransitionState: eo,
            performanceClockStartTime: ei,
            onClose: ea,
            sourceQuestContent: es,
            orientation: ec,
        } = e,
        eu = (0, x.km)((e) => e.transcriptEnabled),
        ed = (0, x.km)((e) => e.setTranscriptEnabled),
        em = (0, x.km)((e) => e.captionEnabled),
        ef = (0, x.km)((e) => e.setCaptionEnabled),
        ep = (0, x.km)((e) => e.fullScreenEnabled),
        ev = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: eg, focusedChanged: eE } = (0, F.xU)(),
        { visible: eb, visibleChanged: eO, targetRef: eh } = (0, F.Yy)(),
        [eC, eS] = l.useState(!0 === el ? V.rq.PLAYING : V.rq.PAUSED),
        [e_, ey] = l.useState(!1),
        [ej, ex] = l.useState(!1),
        eT = (0, _.il)(ee),
        [eD, eP] = l.useState(eT.percentComplete),
        eR = l.useCallback((e) => {
            eK(null), eP(e);
        }, []),
        [eI, eN] = l.useState(!1),
        [ek, ew] = l.useState(!0),
        [eA, eL] = l.useState(!1),
        [eM, eV] = l.useState([]),
        [eZ, eB] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eF, eU] = l.useState(0),
        [eq, eH] = l.useState(0),
        [eY, eQ] = l.useState(!1),
        [eG, eW] = l.useState(!1),
        [ez, eK] = l.useState(null),
        eX = l.useRef(!0),
        eJ = l.useRef(null),
        e$ = l.useRef(null),
        e0 = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[ee.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, c.X),
        e1 = (0, x.km)((e) => e.setVideoProgress),
        e2 = (0, x.km)((e) => e.muted),
        e8 = (0, x.km)((e) => e.volume),
        e4 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion),
        e6 = (0, l.useRef)(null),
        e7 = (0, l.useRef)(null),
        e9 = l.useRef(!0),
        e3 = (null == (t = ee.userStatus) ? void 0 : t.completedAt) != null,
        [e5, te] = l.useState(null),
        [tt, tn] = l.useState(!1),
        [tr, tl] = l.useState(!1),
        [to, ti] = l.useState(null),
        ta = e3
            ? null != (k = null == (n = e6.current) ? void 0 : n.duration)
                ? k
                : 0
            : Math.max(e0.maxTimestampSec, eT.progressSeconds),
        ts = l.useMemo(
            () =>
                (0, D.T)({
                    quest: ee,
                    location: q.dr.VIDEO_MODAL,
                }),
            [ee],
        ),
        { title: tc, subtitle: tu } = (function (e) {
            var t, n, r;
            let l = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
            return {
                title: (0, _.B2)(e.config),
                subtitle:
                    null !=
                    (r =
                        null != (n = null == (t = e.config.ctaConfig) ? void 0 : t.subtitle)
                            ? n
                            : null == l
                              ? void 0
                              : l.messages.videoEndCtaSubtitle)
                        ? r
                        : Q.intl.string(Q.t.mxaHfx),
            };
        })(ee),
        td = e3
            ? e0.timestampSec >= e0.duration
                ? 0
                : e0.timestampSec
            : Math.max(e0.timestampSec, eT.progressSeconds);
    (0, p.Ng)(() => {
        e9.current &&
            ((e9.current = !1),
            eB(O.Z.getEffectiveConnectionSpeed()),
            e3 && e0.timestampSec >= e0.duration && e1(ee.id, 0, e0.duration));
    });
    let {
            videoVariant: tm,
            videoAsset: tf,
            hlsRef: tp,
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, T.z)(e, q.dr.VIDEO_MODAL),
                d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                m = l.useMemo(
                    () =>
                        null != d
                            ? c && a.ZP.isSupported() && null != d.videoHls
                                ? I.n1.VIDEO_HLS
                                : W.has(n) || null == d.videoLowRes
                                  ? I.n1.VIDEO
                                  : I.n1.VIDEO_LOW_RES
                            : null,
                    [d, n, c],
                ),
                f = l.useMemo(() => (null != m ? (0, I.z0)(e, u.X.WATCH_VIDEO, m, I.O.VIDEO) : null), [e, m]),
                p = () => {
                    null != s.current &&
                        800000 !== s.current.config.minAutoBitrate &&
                        (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (m !== I.n1.VIDEO_HLS || null == f || null == t.current || i.current) return;
                    (s.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1,
                    })),
                        s.current.on(a.ZP.Events.FRAG_LOADING, p),
                        s.current.loadSource(f.url),
                        s.current.attachMedia(t.current),
                        (i.current = !0);
                    let e = s.current;
                    return () => {
                        null != e && e.off(a.ZP.Events.FRAG_LOADING, p);
                    };
                }, [f, m, t, r]),
                {
                    videoVariant: m,
                    videoAsset: f,
                    hlsRef: s,
                }
            );
        })(ee, e6, eZ, td),
        tv = (0, I.CC)(tm),
        {
            trackQuestVideoLoadingStarted: tg,
            trackQuestVideoLoadingEnded: tE,
            trackQuestVideoProgressed: tb,
            trackQuestVideoResumed: tO,
            trackQuestVideoPaused: th,
            trackQuestVideoFocusChange: tC,
            trackQuestContentClick: tS,
            trackQuestVideoBufferingStarted: t_,
            trackQuestVideoBufferingEnded: ty,
            trackWatchTimeAnalytics: tj,
            trackQuestVideoTimeToFirstFrame: tx,
            trackQuestVideoFullscreenChanged: tT,
            trackQuestVideoError: tD,
            trackQuestVideoVolumeChanged: tP,
        } = (0, U.Z)({
            quest: ee,
            videoRef: e6,
            hlsRef: tp,
            videoSessionId: en,
            videoAssetId: tv,
            sourceQuestContent: es,
            logger: ts,
        }),
        tR = l.useRef(null),
        tI = ee.id,
        tN = ee.config.application.id,
        tk = ee.config.messages.gameTitle,
        tw = null == tf ? void 0 : tf.url,
        tA = null == (o = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.messages.videoTitle;
    l.useEffect(() => {
        var e;
        if (
            null == tw ||
            null == e6.current ||
            (tm === I.n1.VIDEO_HLS && null == tp.current) ||
            !(0, b.Zx)({ location: q.dr.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let t = {
            debug: !1,
            videoElement: e6.current,
            hlsInstance: tm === I.n1.VIDEO_HLS && null != (e = tp.current) ? e : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: tw,
                videoStreamType: tm === I.n1.VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == e6.current.duration || isNaN(e6.current.duration) ? 0 : e6.current.duration,
                title: tA,
                questId: tI,
                gameId: tN,
                gameName: tk,
            },
        };
        return (
            (tR.current = new b.ci(t)),
            tR.current.initialize(),
            () => {
                null != tR.current && (tR.current.endSession(), tR.current.destroy(), (tR.current = null));
            }
        );
    }, [tm, tp, tN, tk, tI, tw, tA]);
    let tL = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e6.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tM } = (0, R.Z)({
            getCurrentVideoTime: tL,
            isPlaying: eC === V.rq.PLAYING,
            isMetadataLoaded: tt,
            isInitialSeekComplete: tr,
            onAnalytics: tj,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tV = l.useCallback(
            (e) => {
                if ((ts.info("[QV] | updatePlayerState | playerState: ".concat(e)), eS(e), null != e6.current))
                    switch (e) {
                        case V.rq.PLAYING:
                            e6.current.paused && tO(e5), te(null), e6.current.play();
                            break;
                        case V.rq.PAUSED:
                            e6.current.paused || tM(), e6.current.pause(), (eX.current = !1);
                            break;
                        case V.rq.ENDED:
                            tM(), ed(!1);
                    }
            },
            [tO, e5, tM, ed, ts],
        );
    l.useEffect(() => {
        th(e5);
    }, [e5, th]),
        l.useEffect(() => {
            eE && tC(eg, eC);
        }, [eg, eE, eC, tC]);
    let tZ = l.useCallback(
        (e) => {
            var t;
            e3 ||
                (null == (t = ee.userStatus) ? void 0 : t.enrolledAt) == null ||
                (ts.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, _.FI)(ee, e)),
                tb();
        },
        [e3, ee, ts, tb],
    );
    l.useEffect(() => {
        (eo !== f.Dvm.HIDDEN &&
            eo !== f.Dvm.EXITING &&
            eo !== f.Dvm.EXITED &&
            (null == eo || !eO || eb || e3) &&
            (!eE || eg || e3)) ||
            null == e6.current ||
            eC !== V.rq.PLAYING ||
            (ts.info(
                "[QV] | Pausing video | playerState: "
                    .concat(eC, ", parentTransitionState: ")
                    .concat(eo, ", visible: ")
                    .concat(eb, ", focused: ")
                    .concat(eg, ", isQuestCompleted: ")
                    .concat(e3),
            ),
            tV(V.rq.PAUSED),
            e3 || te(j.yE.LOST_FOCUS));
    }, [eo, eg, eE, eb, eO, eC, e3, tV, tZ, ts]);
    let [tB, tF] = l.useState(!1),
        tU = l.useRef(null),
        tq = l.useRef(performance.now()),
        tH = l.useCallback(() => {
            null != tU.current && clearTimeout(tU.current),
                eC === V.rq.PLAYING &&
                    (tU.current = setTimeout(
                        () => {
                            eC === V.rq.PLAYING && tF(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tq.current)),
                    ));
        }, [eC]),
        tY = () => {
            tF(!1), (tq.current = performance.now()), tH();
        };
    l.useEffect(() => {
        if (eC !== V.rq.PLAYING) {
            tF(!1), null != tU.current && clearTimeout(tU.current);
            return;
        }
        return (
            tH(),
            () => {
                null != tU.current && clearTimeout(tU.current);
            }
        );
    }, [eC, tH]);
    let tQ = !tB && (ej || e_ || eC === V.rq.ENDED),
        tG = l.useCallback(() => {
            var e;
            ts.info("[QV] | handleFullScreenExit");
            let t = (0, C.fn)(null == (e = e6.current) ? void 0 : e.parentNode, e6.current);
            null == t || (0, C.rB)(t) || (t.removeEventListener(C.NO, tG), ev(!1), tT(!1));
        }, [ev, ts, tT]),
        tW = () => {
            if (null == e6.current) return;
            let e = Math.max(e6.current.currentTime - 10, 0);
            ts.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tK(e),
                eC === V.rq.ENDED && tV(V.rq.PAUSED),
                tS(j.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD);
        },
        tz = () => {
            if (null == e6.current || !nn) return;
            let e = Math.min(e6.current.currentTime + 10, ta);
            ts.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tK(e),
                eC !== V.rq.ENDED && e >= e6.current.duration && tV(V.rq.ENDED),
                tS(j.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e6.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, tG);
        };
    }, [tG]);
    let tK = l.useCallback(
            (e) => {
                var t;
                null != e6.current &&
                    (ts.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    eK((e / (null != (t = e6.current.duration) ? t : 1)) * 100),
                    tM(),
                    eN(!0),
                    tl(!1),
                    (e6.current.currentTime = e),
                    e1(ee.id, e, e6.current.duration));
            },
            [e6, e1, ee.id, tM, ts],
        ),
        tX = () => {
            if (null != e6.current)
                switch ((ts.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eC)), eC)) {
                    case V.rq.ENDED:
                        tK(0), tV(V.rq.PLAYING);
                        break;
                    case V.rq.PLAYING:
                        tV(V.rq.PAUSED), te(j.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tV(V.rq.PLAYING);
                }
        },
        tJ = (e) => {
            ti(e);
        },
        t$ = (e) => {
            ti((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        t0 = l.useCallback(() => {
            if (
                null == e6.current ||
                (ts.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e6.current.textTracks.length)),
                0 === e6.current.textTracks.length)
            )
                return;
            let e = e6.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, Z.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tJ(n)), (n.onexit = () => t$(n)));
                }
        }, [e6, ts]);
    l.useEffect(() => {
        if (null == e7.current) return;
        let e = e7.current;
        return (
            e.addEventListener("load", t0),
            () => {
                null != e && e.removeEventListener("load", t0);
            }
        );
    }, [e7, t0]);
    let t1 = l.useCallback(
            (e) => {
                var t;
                ts.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e6.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tv, ", connectionSpeed: ")
                        .concat(eZ),
                ),
                    tD(e);
            },
            [eZ, tD, e6, tv, ts],
        ),
        t2 = (e) => {
            ts.info("[QV] | handleCanPlay: playerState: ".concat(eC)),
                null != e6.current &&
                    eC === V.rq.PLAYING &&
                    (ts.info("[QV] | handleCanPlay: did NOT early return"),
                    ek && (ts.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ek)), ew(!1)),
                    eA &&
                        (ts.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eA)),
                        ty(null != e$.current ? performance.now() - e$.current : null),
                        eL(!1)),
                    ts.info("[QV] | handleCanPlay: updating player state to playing"),
                    tV(V.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!eI) return;
        let e = setTimeout(() => {
            eN(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eI]);
    let [{ controlBarAnimSpring: t8 }, t4] = (0, f.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: z,
            onStart: () => {
                eW(!1);
            },
            onRest: (e) => {
                1 === e.value && eW(!0);
            },
        })),
        t6 = (0, l.useRef)(null),
        [{ captionHeightSpring: t7 }, t9] = (0, f.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: z,
        }));
    l.useEffect(() => {
        var e, t;
        return (
            t9({
                captionHeightSpring:
                    em && null != to && null != (t = null == (e = t6.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e4,
            }),
            () => {
                t7.stop();
            }
        );
    }, [em, t9, e4, to, t7]),
        l.useEffect(
            () => (
                t4({
                    controlBarAnimSpring: tQ || eY ? 1 : 0,
                    immediate: e4,
                }),
                () => {
                    t8.stop();
                }
            ),
            [tQ, t4, e4, eY, t8],
        );
    let t3 = eC === V.rq.ENDED,
        t5 = l.useCallback(
            async (e) => {
                if (ep) {
                    var t;
                    let e = (0, C.fn)(null == (t = e6.current) ? void 0 : t.parentNode, e6.current);
                    null != e && (e.removeEventListener(C.NO, tG), (0, C.Pr)(e), ev(!1), tT(!1));
                }
                if ((tS(e, S.jZ.LEARN_MORE), ee.id === q.V6))
                    return void window.open(h.Z.getArticleURL(H.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ea) {
                    let e = N.r.build(ee.config).ctaLink;
                    (await (0, Z.PW)(e)) && ea();
                }
                (0, _.nc)(ee, {
                    content: e,
                    ctaContent: S.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: es,
                });
            },
            [tS, ee, ea, ep, e6, tG, ev, tT, es],
        ),
        ne = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
        nt = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
        nn = e3 || e0.maxTimestampSec >= (null != (B = null == (m = e6.current) ? void 0 : m.currentTime) ? B : 0) + 1,
        nr = l.useMemo(() => null === (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.TRANSCRIPT), [ee]);
    return (0, r.jsx)(f.P3F, {
        className: G.videoCont,
        "data-fullscreen": ep,
        tabIndex: -1,
        onMouseEnter: () => {
            ey(!0), tF(!1), (tq.current = performance.now()), null != tU.current && clearTimeout(tU.current);
        },
        onMouseLeave: () => {
            ey(!1), tF(!1);
        },
        onMouseMove: tY,
        onKeyDown: tY,
        children: (0, r.jsxs)("div", {
            className: i()(G.videoContInnerRelative, {
                [G.videoContInnerRelativePortrait]: "portrait" === ec,
                [G.videoContInnerRelativeLandscape]: "landscape" === ec,
            }),
            children: [
                t3 &&
                    (() => {
                        if (!(0, P.e)({ location: q.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(X, {
                                        quest: ee,
                                        shouldShow: t3,
                                        sourceQuestContent: es,
                                    }),
                                    (0, r.jsx)("div", { className: G.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: tc,
                                        subtitle: tu,
                                        icon: f.d4D,
                                        className: G.endScreenPanelRight,
                                        onClick: () => t5(j.jn.VIDEO_MODAL),
                                    }),
                                ],
                            });
                        {
                            var e, t, n, l, o, i, a;
                            let s = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(A.Z, {
                                quest: ee,
                                title:
                                    null != (n = null == s ? void 0 : s.messages.videoEndCtaTitle)
                                        ? n
                                        : Q.intl.string(Q.t.Ka526o),
                                subtitle:
                                    null !=
                                    (o =
                                        null != (l = null == (e = ee.config.ctaConfig) ? void 0 : e.subtitle)
                                            ? l
                                            : null == s
                                              ? void 0
                                              : s.messages.videoEndCtaSubtitle)
                                        ? o
                                        : Q.intl.string(Q.t.tKMcAv),
                                ctaBtnLabel:
                                    null !=
                                    (a =
                                        null != (i = null == (t = ee.config.ctaConfig) ? void 0 : t.buttonLabel)
                                            ? i
                                            : null == s
                                              ? void 0
                                              : s.messages.videoEndCtaButtonLabel)
                                        ? a
                                        : Q.intl.string(Q.t.iiTtpJ),
                                onCTAClick: () => t5(j.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: es,
                            });
                        }
                    })(),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (e6.current = e), (eh.current = e);
                    },
                    autoPlay: el,
                    playsInline: !0,
                    mediaLayoutType: ep ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [G.hidden]: t3,
                        [G.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == ne ? void 0 : ne.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e6.current &&
                            (e6.current.currentTime >= eF &&
                                (ts.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        e6.current.currentTime,
                                    ),
                                ),
                                eU(e6.current.currentTime + 6 + 2 * Math.random()),
                                tZ(e6.current.currentTime)),
                            e6.current.currentTime >= eq &&
                                (eH(e6.current.currentTime + 1),
                                (0, y.qm)(ee.id, eT.taskType, e6.current.currentTime),
                                er(e6.current.currentTime)),
                            e1(ee.id, e6.current.currentTime, e6.current.duration),
                            eR((e6.current.currentTime / e6.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e6.current &&
                            (tZ(e6.current.duration + 1),
                            ts.info("[QV] | handleEnded: sending progress update: ".concat(e6.current.duration + 1)),
                            e1(ee.id, e6.current.duration, e6.current.duration)),
                            tV(V.rq.ENDED),
                            eL(!1);
                    },
                    onLoadedData: (e) => {
                        ts.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ek)),
                            ek &&
                                (tE(null != eJ.current ? performance.now() - eJ.current : null),
                                ew(!1),
                                null != tp.current && (tp.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e6.current &&
                            (ts.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tv)),
                            tn(!0),
                            tm !== I.n1.VIDEO_HLS && tK(td),
                            e2 ? (e6.current.volume = 0) : (e6.current.volume = e8));
                    },
                    onLoadStart: () => {
                        (eJ.current = performance.now()),
                            tg(eZ),
                            ts.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eJ.current));
                    },
                    onPlaying: () => {
                        if (!eX.current) return;
                        let e = performance.now() - ei;
                        ts.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), tx(e), (eX.current = !1);
                    },
                    onWaiting: (e) => {
                        (e$.current = performance.now()),
                            ts.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(e$.current)),
                            t_(),
                            eL(!0);
                    },
                    onProgress: (e) => {
                        if (null == e6.current) return;
                        ts.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e6.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < e6.current.buffered.length; e++) {
                            let n = e6.current.buffered.start(e),
                                r = e6.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e6.current.duration,
                                    size: (r - n) / e6.current.duration,
                                });
                        }
                        eV(t);
                    },
                    onCanPlay: t2,
                    onCanPlayThrough: t2,
                    onSeeked: () => {
                        ts.info("[QV] | handleSeeked"), tl(!0);
                    },
                    onAbort: () => t1(V.CY.ABORT),
                    onError: () => t1(V.CY.ERROR),
                    onEmptied: () => t1(V.CY.EMPTIED),
                    onStalled: () => t1(V.CY.STALLED),
                    onClick: () => {
                        ts.info("[QV] | handleVideoClick"), tX();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != nt &&
                            (0, r.jsx)("track", {
                                ref: e7,
                                src: nt.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tf &&
                            tm !== I.n1.VIDEO_HLS &&
                            (0, r.jsx)("source", {
                                onError: () => t1(V.CY.SOURCE_ERROR),
                                src: tf.url,
                                type: tf.mimetype,
                            }),
                    ],
                }),
                (ek || eA) &&
                    eC === V.rq.PLAYING &&
                    (0, r.jsx)(f.$jN, {
                        type: f.$jN.Type.WANDERING_CUBES,
                        className: G.loadingSpinner,
                    }),
                eC === V.rq.PAUSED && e5 === j.yE.LOST_FOCUS && (0, r.jsx)(K, {}),
                eu &&
                    eC !== V.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.P3F, {
                                onClick: () => ed(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: G.transcriptOverlay }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: i()(G.transcriptCont, { [G.transcriptContPortrait]: "portrait" === ec }),
                                style: {
                                    marginBottom: (0, s.to)([t8, t7], (e, t) => "".concat(50 * e + t, "px")),
                                },
                                children: (0, r.jsx)(M.K, {
                                    quest: ee,
                                    onClose: () => {
                                        ed(!1), tS(j.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: G.videoFooterContGradient,
                    style: {
                        opacity: (0, s.to)(
                            [
                                t8.to({
                                    range: [0, 1],
                                    output: [0, 1],
                                }),
                            ],
                            (e) => "".concat(e),
                        ),
                    },
                }),
                (0, r.jsx)(
                    "div",
                    {
                        className: i()(G.playPausePopCont, {
                            [G.play]: eC === V.rq.PLAYING,
                            [G.pause]: eC === V.rq.PAUSED,
                        }),
                        children:
                            eC === V.rq.PLAYING
                                ? (0, r.jsx)(f.o1U, { className: G.playPausePopIcon })
                                : (0, r.jsx)(f.fpf, { className: G.playPausePopIcon }),
                    },
                    eC,
                ),
                em &&
                    null != to &&
                    (0, r.jsx)(s.animated.div, {
                        className: G.captionContainer,
                        ref: t6,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    t8.to({
                                        range: [0, 1],
                                        output: [0, -50],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(f.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: G.captionText,
                            children: to.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: G.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                t8.to({
                                    range: [0, 1],
                                    output: [0, 25],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                        paddingRight: (0, s.to)(
                            [
                                t8.to({
                                    range: [0, 1],
                                    output: [0, 25],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                        height: (0, s.to)(
                            [
                                t8.to({
                                    range: [0, 1],
                                    output: [0, 50],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                    },
                    children: [
                        (0, r.jsx)(L.Z, {
                            percent: null != ez ? ez : eD,
                            animate: !0 !== e9.current && !eI,
                            interactionEnabled: e3 && eG,
                            backgroundColor: tQ ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tQ ? eM : void 0,
                            duration: null != ($ = null == (E = e6.current) ? void 0 : E.duration) ? $ : 1,
                            maxSeekableTime: tQ && eG ? ta : void 0,
                            onClick: (e) => {
                                tK(e), eC === V.rq.ENDED && tV(V.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tW();
                            },
                            onScrubForward: () => {
                                tz();
                            },
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: G.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        t8.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        t8.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        t8.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => (e < 0.3 ? "none" : "auto"),
                                ),
                            },
                            onFocus: () => ex(!0),
                            onBlur: () => ex(!1),
                            children: (0, r.jsx)(w.Z, {
                                videoRef: e6,
                                videoTask: et,
                                playerState: eC,
                                animSpring: t8,
                                visible: tQ,
                                seekForwardEnabled: nn,
                                hideCaptionBtn: null == nt,
                                hideTranscriptBtn: nr,
                                handlePlaybackBtnClick: tX,
                                handleTranscriptBtnClick: () => {
                                    ed(!eu),
                                        tS(j.jn.VIDEO_MODAL, eu ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ef(!em),
                                        tS(
                                            j.jn.VIDEO_MODAL,
                                            em ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ep;
                                    ts.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, C.fn)(null == (e = e6.current) ? void 0 : e.parentNode, e6.current);
                                    t && null != n
                                        ? ((0, C.Dj)(n), n.addEventListener(C.NO, tG), tT(!0))
                                        : t || null == n || (n.removeEventListener(C.NO, tG), tT(!1), (0, C.Pr)(n)),
                                        ev(t);
                                },
                                handleSeekBackBtnClick: tW,
                                handleSeekForwardBtnClick: tz,
                                handleControlBarPendingInteraction: eQ,
                                onVolumeChange: tP,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
