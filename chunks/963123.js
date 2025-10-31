n.d(t, { Z: () => X }), n(388685), n(539854);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(713447),
    s = n(13941),
    c = n(574583),
    u = n(754700),
    d = n(442837),
    m = n(780384),
    p = n(481060),
    f = n(493773),
    v = n(607070),
    E = n(70097),
    g = n(210887),
    O = n(707903),
    b = n(866960),
    h = n(63063),
    S = n(228488),
    C = n(22095),
    _ = n(617136),
    y = n(509212),
    j = n(497505),
    x = n(184299),
    T = n(347382),
    D = n(5881),
    P = n(117242),
    R = n(720293),
    I = n(566078),
    w = n(602667),
    N = n(881773),
    k = n(355243),
    L = n(106743),
    A = n(223418),
    M = n(604162),
    V = n(747717),
    Z = n(281055),
    B = n(435585),
    F = n(46140),
    U = n(981631),
    q = n(217702),
    H = n(388032),
    Y = n(946232);
let Q = new Set([U.IyS.FIVE_G, U.IyS.FOUR_G, U.IyS.UNKNOWN]),
    G = {
        tension: 250,
        friction: 5,
        clamp: !0,
    };
function W() {
    let e = (0, d.e7)([g.Z], () => g.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: Y.pauseText,
        style: { background: (0, m.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: H.intl.string(H.t["U7Xrb+"]),
        }),
    });
}
function z(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: l } = e,
        a = o.useMemo(() => (0, R.z0)(t, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(w.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: l,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: a.url,
                      alt: "Video thumbnail",
                      className: i()(Y.stillFrameImageCard, { [Y.stillFrameImageCardHidden]: !n }),
                  }),
          });
}
function K(e) {
    let { title: t, subtitle: n, icon: l, onClick: a, className: s } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        m = () => {
            u(!1);
        };
    return (0, r.jsx)(p.P3F, {
        className: i()(Y.endScreenPanel, Y.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)("div", {
            className: Y.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: Y.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(p.Heading, {
                            variant: "heading-md/semibold",
                            className: Y.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(p.Heading, {
                            variant: "heading-sm/normal",
                            className: Y.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(V.Z, { color: "#747783" }),
                (0, r.jsx)(l, {
                    size: "md",
                    color: c ? "#FFFFFF" : "#B5BAC1",
                    className: Y.endScreenIcon,
                }),
            ],
        }),
    });
}
function X(e) {
    var t, n, l, m, g, w, V, X;
    let {
            quest: J,
            videoTask: $,
            videoSessionId: ee,
            onOptimisticProgressUpdate: et,
            autoplay: en,
            parentTransitionState: er,
            performanceClockStartTime: eo,
            onClose: el,
            sourceQuestContent: ei,
            orientation: ea,
        } = e,
        es = (0, x.km)((e) => e.transcriptEnabled),
        ec = (0, x.km)((e) => e.setTranscriptEnabled),
        eu = (0, x.km)((e) => e.captionEnabled),
        ed = (0, x.km)((e) => e.setCaptionEnabled),
        em = (0, x.km)((e) => e.fullScreenEnabled),
        ep = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ef, focusedChanged: ev } = (0, Z.xU)(),
        { visible: eE, visibleChanged: eg, targetRef: eO } = (0, Z.Yy)(),
        [eb, eh] = o.useState(!0 === en ? A.rq.PLAYING : A.rq.PAUSED),
        [eS, eC] = o.useState(!1),
        [e_, ey] = o.useState(!1),
        ej = (0, y.il)(J),
        [ex, eT] = o.useState(ej.percentComplete),
        eD = o.useCallback((e) => {
            eW(null), eT(e);
        }, []),
        [eP, eR] = o.useState(!1),
        [eI, ew] = o.useState(!0),
        [eN, ek] = o.useState(!1),
        [eL, eA] = o.useState([]),
        [eM, eV] = o.useState(b.Z.getEffectiveConnectionSpeed()),
        [eZ, eB] = o.useState(0),
        [eF, eU] = o.useState(0),
        [eq, eH] = o.useState(!1),
        [eY, eQ] = o.useState(!1),
        [eG, eW] = o.useState(null),
        ez = o.useRef(!0),
        eK = o.useRef(null),
        eX = o.useRef(null),
        eJ = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[J.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, c.X),
        e$ = (0, x.km)((e) => e.setVideoProgress),
        e0 = (0, x.km)((e) => e.muted),
        e1 = (0, x.km)((e) => e.volume),
        e2 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion),
        e8 = (0, o.useRef)(null),
        e4 = (0, o.useRef)(null),
        e6 = o.useRef(!0),
        e7 = (null == (t = J.userStatus) ? void 0 : t.completedAt) != null,
        [e9, e3] = o.useState(null),
        [e5, te] = o.useState(!1),
        [tt, tn] = o.useState(!1),
        [tr, to] = o.useState(null),
        tl = e7
            ? null != (w = null == (n = e8.current) ? void 0 : n.duration)
                ? w
                : 0
            : Math.max(eJ.maxTimestampSec, ej.progressSeconds),
        ti = o.useMemo(
            () =>
                (0, D.T)({
                    quest: J,
                    location: F.dr.VIDEO_MODAL,
                }),
            [J],
        ),
        { title: ta, subtitle: ts } = (function (e) {
            var t, n, r;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
            return {
                title: (0, y.B2)(e.config),
                subtitle:
                    null !=
                    (r =
                        null != (n = null == (t = e.config.ctaConfig) ? void 0 : t.subtitle)
                            ? n
                            : null == o
                              ? void 0
                              : o.messages.videoEndCtaSubtitle)
                        ? r
                        : H.intl.string(H.t.mxaHfx),
            };
        })(J),
        tc = e7
            ? eJ.timestampSec >= eJ.duration
                ? 0
                : eJ.timestampSec
            : Math.max(eJ.timestampSec, ej.progressSeconds);
    (0, f.Ng)(() => {
        e6.current &&
            ((e6.current = !1),
            eV(b.Z.getEffectiveConnectionSpeed()),
            e7 && eJ.timestampSec >= eJ.duration && e$(J.id, 0, eJ.duration));
    });
    let {
            videoVariant: tu,
            videoAsset: td,
            hlsRef: tm,
        } = (function (e, t, n, r) {
            var l;
            let i = o.useRef(!1),
                s = o.useRef(null),
                c = (0, T.z)(e, F.dr.VIDEO_MODAL),
                d = null == (l = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : l.assets,
                m = o.useMemo(
                    () =>
                        null != d
                            ? c && a.ZP.isSupported() && null != d.videoHls
                                ? R.n1.VIDEO_HLS
                                : Q.has(n) || null == d.videoLowRes
                                  ? R.n1.VIDEO
                                  : R.n1.VIDEO_LOW_RES
                            : null,
                    [d, n, c],
                ),
                p = o.useMemo(() => (null != m ? (0, R.z0)(e, u.X.WATCH_VIDEO, m, R.O.VIDEO) : null), [e, m]),
                f = () => {
                    null != s.current &&
                        800000 !== s.current.config.minAutoBitrate &&
                        (s.current.config.minAutoBitrate = 800000);
                };
            return (
                o.useEffect(() => {
                    if (m !== R.n1.VIDEO_HLS || null == p || null == t.current || i.current) return;
                    (s.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1,
                    })),
                        s.current.on(a.ZP.Events.FRAG_LOADING, f),
                        s.current.loadSource(p.url),
                        s.current.attachMedia(t.current),
                        (i.current = !0);
                    let e = s.current;
                    return () => {
                        null != e && e.off(a.ZP.Events.FRAG_LOADING, f);
                    };
                }, [p, m, t, r]),
                {
                    videoVariant: m,
                    videoAsset: p,
                    hlsRef: s,
                }
            );
        })(J, e8, eM, tc),
        tp = (0, R.CC)(tu),
        {
            trackQuestVideoLoadingStarted: tf,
            trackQuestVideoLoadingEnded: tv,
            trackQuestVideoProgressed: tE,
            trackQuestVideoResumed: tg,
            trackQuestVideoPaused: tO,
            trackQuestVideoFocusChange: tb,
            trackQuestContentClick: th,
            trackQuestVideoBufferingStarted: tS,
            trackQuestVideoBufferingEnded: tC,
            trackWatchTimeAnalytics: t_,
            trackQuestVideoTimeToFirstFrame: ty,
            trackQuestVideoFullscreenChanged: tj,
            trackQuestVideoError: tx,
            trackQuestVideoVolumeChanged: tT,
        } = (0, B.Z)({
            quest: J,
            videoRef: e8,
            hlsRef: tm,
            videoSessionId: ee,
            videoAssetId: tp,
            sourceQuestContent: ei,
            logger: ti,
        }),
        tD = o.useRef(null),
        tP = J.id,
        tR = J.config.application.id,
        tI = J.config.messages.gameTitle,
        tw = null == td ? void 0 : td.url,
        tN = null == (l = J.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : l.messages.videoTitle;
    o.useEffect(() => {
        var e;
        if (
            null == tw ||
            null == e8.current ||
            (tu === R.n1.VIDEO_HLS && null == tm.current) ||
            !(0, O.Zx)({ location: F.dr.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let t = {
            debug: !1,
            videoElement: e8.current,
            hlsInstance: tu === R.n1.VIDEO_HLS && null != (e = tm.current) ? e : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: tw,
                videoStreamType: tu === R.n1.VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == e8.current.duration || isNaN(e8.current.duration) ? 0 : e8.current.duration,
                title: tN,
                questId: tP,
                gameId: tR,
                gameName: tI,
            },
        };
        return (
            (tD.current = new O.ci(t)),
            tD.current.initialize(),
            () => {
                null != tD.current && (tD.current.endSession(), tD.current.destroy(), (tD.current = null));
            }
        );
    }, [tu, tm, tR, tI, tP, tw, tN]);
    let tk = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e8.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tL } = (0, P.Z)({
            getCurrentVideoTime: tk,
            isPlaying: eb === A.rq.PLAYING,
            isMetadataLoaded: e5,
            isInitialSeekComplete: tt,
            onAnalytics: t_,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tA = o.useCallback(
            (e) => {
                if ((ti.info("[QV] | updatePlayerState | playerState: ".concat(e)), eh(e), null != e8.current))
                    switch (e) {
                        case A.rq.PLAYING:
                            e8.current.paused && tg(e9), e3(null), e8.current.play();
                            break;
                        case A.rq.PAUSED:
                            e8.current.paused || tL(), e8.current.pause(), (ez.current = !1);
                            break;
                        case A.rq.ENDED:
                            tL(), ec(!1);
                    }
            },
            [tg, e9, tL, ec, ti],
        );
    o.useEffect(() => {
        tO(e9);
    }, [e9, tO]),
        o.useEffect(() => {
            ev && tb(ef, eb);
        }, [ef, ev, eb, tb]);
    let tM = o.useCallback(
        (e) => {
            var t;
            e7 ||
                (null == (t = J.userStatus) ? void 0 : t.enrolledAt) == null ||
                (ti.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, y.FI)(J, e)),
                tE();
        },
        [e7, J, ti, tE],
    );
    o.useEffect(() => {
        (er !== p.Dvm.HIDDEN &&
            er !== p.Dvm.EXITING &&
            er !== p.Dvm.EXITED &&
            (null == er || !eg || eE || e7) &&
            (!ev || ef || e7)) ||
            null == e8.current ||
            eb !== A.rq.PLAYING ||
            (ti.info(
                "[QV] | Pausing video | playerState: "
                    .concat(eb, ", parentTransitionState: ")
                    .concat(er, ", visible: ")
                    .concat(eE, ", focused: ")
                    .concat(ef, ", isQuestCompleted: ")
                    .concat(e7),
            ),
            tA(A.rq.PAUSED),
            e7 || e3(j.yE.LOST_FOCUS));
    }, [er, ef, ev, eE, eg, eb, e7, tA, tM, ti]);
    let [tV, tZ] = o.useState(!1),
        tB = o.useRef(null),
        tF = o.useRef(performance.now()),
        tU = o.useCallback(() => {
            null != tB.current && clearTimeout(tB.current),
                eb === A.rq.PLAYING &&
                    (tB.current = setTimeout(
                        () => {
                            eb === A.rq.PLAYING && tZ(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tF.current)),
                    ));
        }, [eb]),
        tq = () => {
            tZ(!1), (tF.current = performance.now()), tU();
        };
    o.useEffect(() => {
        if (eb !== A.rq.PLAYING) {
            tZ(!1), null != tB.current && clearTimeout(tB.current);
            return;
        }
        return (
            tU(),
            () => {
                null != tB.current && clearTimeout(tB.current);
            }
        );
    }, [eb, tU]);
    let tH = !tV && (e_ || eS || eb === A.rq.ENDED),
        tY = o.useCallback(() => {
            var e;
            ti.info("[QV] | handleFullScreenExit");
            let t = (0, S.fn)(null == (e = e8.current) ? void 0 : e.parentNode, e8.current);
            null == t || (0, S.rB)(t) || (t.removeEventListener(S.NO, tY), ep(!1), tj(!1));
        }, [ep, ti, tj]),
        tQ = () => {
            if (null == e8.current) return;
            let e = Math.max(e8.current.currentTime - 10, 0);
            ti.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tW(e),
                eb === A.rq.ENDED && tA(A.rq.PAUSED),
                th(j.jn.VIDEO_MODAL, _.jZ.SEEK_BACKWARD);
        },
        tG = () => {
            if (null == e8.current || !ne) return;
            let e = Math.min(e8.current.currentTime + 10, tl);
            ti.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tW(e),
                eb !== A.rq.ENDED && e >= e8.current.duration && tA(A.rq.ENDED),
                th(j.jn.VIDEO_MODAL, _.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = e8.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tY);
        };
    }, [tY]);
    let tW = o.useCallback(
            (e) => {
                var t;
                null != e8.current &&
                    (ti.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    eW((e / (null != (t = e8.current.duration) ? t : 1)) * 100),
                    tL(),
                    eR(!0),
                    tn(!1),
                    (e8.current.currentTime = e),
                    e$(J.id, e, e8.current.duration));
            },
            [e8, e$, J.id, tL, ti],
        ),
        tz = () => {
            if (null != e8.current)
                switch ((ti.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eb)), eb)) {
                    case A.rq.ENDED:
                        tW(0), tA(A.rq.PLAYING);
                        break;
                    case A.rq.PLAYING:
                        tA(A.rq.PAUSED), e3(j.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tA(A.rq.PLAYING);
                }
        },
        tK = (e) => {
            to(e);
        },
        tX = (e) => {
            to((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tJ = o.useCallback(() => {
            if (
                null == e8.current ||
                (ti.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e8.current.textTracks.length)),
                0 === e8.current.textTracks.length)
            )
                return;
            let e = e8.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tK(n)), (n.onexit = () => tX(n)));
                }
        }, [e8, ti]);
    o.useEffect(() => {
        if (null == e4.current) return;
        let e = e4.current;
        return (
            e.addEventListener("load", tJ),
            () => {
                null != e && e.removeEventListener("load", tJ);
            }
        );
    }, [e4, tJ]);
    let t$ = o.useCallback(
            (e) => {
                var t;
                ti.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e8.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tp, ", connectionSpeed: ")
                        .concat(eM),
                ),
                    tx(e);
            },
            [eM, tx, e8, tp, ti],
        ),
        t0 = (e) => {
            ti.info("[QV] | handleCanPlay: playerState: ".concat(eb)),
                null != e8.current &&
                    eb === A.rq.PLAYING &&
                    (ti.info("[QV] | handleCanPlay: did NOT early return"),
                    eI && (ti.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eI)), ew(!1)),
                    eN &&
                        (ti.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eN)),
                        tC(null != eX.current ? performance.now() - eX.current : null),
                        ek(!1)),
                    ti.info("[QV] | handleCanPlay: updating player state to playing"),
                    tA(A.rq.PLAYING));
        };
    o.useEffect(() => {
        if (!eP) return;
        let e = setTimeout(() => {
            eR(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eP]);
    let [{ controlBarAnimSpring: t1 }, t2] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: G,
            onStart: () => {
                eQ(!1);
            },
            onRest: (e) => {
                1 === e.value && eQ(!0);
            },
        })),
        t8 = (0, o.useRef)(null),
        [{ captionHeightSpring: t4 }, t6] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: G,
        }));
    o.useEffect(() => {
        var e, t;
        return (
            t6({
                captionHeightSpring:
                    eu && null != tr && null != (t = null == (e = t8.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e2,
            }),
            () => {
                t4.stop();
            }
        );
    }, [eu, t6, e2, tr, t4]),
        o.useEffect(
            () => (
                t2({
                    controlBarAnimSpring: tH || eq ? 1 : 0,
                    immediate: e2,
                }),
                () => {
                    t1.stop();
                }
            ),
            [tH, t2, e2, eq, t1],
        );
    let t7 = eb === A.rq.ENDED,
        t9 = o.useCallback(
            async (e) => {
                if (em) {
                    var t;
                    let e = (0, S.fn)(null == (t = e8.current) ? void 0 : t.parentNode, e8.current);
                    null != e && (e.removeEventListener(S.NO, tY), (0, S.Pr)(e), ep(!1), tj(!1));
                }
                if ((th(e, _.jZ.LEARN_MORE), J.id === F.V6))
                    return void window.open(h.Z.getArticleURL(U.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != el) {
                    let e = I.r.build(J.config).ctaLink;
                    (await (0, M.PW)(e)) && el();
                }
                (0, y.nc)(J, {
                    content: e,
                    ctaContent: _.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: ei,
                });
            },
            [th, J, el, em, e8, tY, ep, tj, ei],
        ),
        t3 = o.useMemo(() => (0, R.z0)(J, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [J]),
        t5 = o.useMemo(() => (0, R.z0)(J, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.CAPTION), [J]),
        ne = e7 || eJ.maxTimestampSec >= (null != (V = null == (m = e8.current) ? void 0 : m.currentTime) ? V : 0) + 1,
        nt = o.useMemo(() => null === (0, R.z0)(J, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.TRANSCRIPT), [J]);
    return (0, r.jsx)(p.P3F, {
        className: Y.videoCont,
        "data-fullscreen": em,
        tabIndex: -1,
        onMouseEnter: () => {
            eC(!0), tZ(!1), (tF.current = performance.now()), null != tB.current && clearTimeout(tB.current);
        },
        onMouseLeave: () => {
            eC(!1), tZ(!1);
        },
        onMouseMove: tq,
        onKeyDown: tq,
        children: (0, r.jsxs)("div", {
            className: i()(Y.videoContInnerRelative, {
                [Y.videoContInnerRelativePortrait]: "portrait" === ea,
                [Y.videoContInnerRelativeLandscape]: "landscape" === ea,
            }),
            children: [
                t7 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(z, {
                                quest: J,
                                shouldShow: t7,
                                sourceQuestContent: ei,
                            }),
                            (0, r.jsx)("div", { className: Y.videoContOverlay }),
                            (0, r.jsx)(K, {
                                title: ta,
                                subtitle: ts,
                                icon: p.d4D,
                                className: Y.endScreenPanelRight,
                                onClick: () => t9(j.jn.VIDEO_MODAL),
                            }),
                        ],
                    }),
                (0, r.jsxs)(E.Z, {
                    ref: (e) => {
                        (e8.current = e), (eO.current = e);
                    },
                    autoPlay: en,
                    playsInline: !0,
                    mediaLayoutType: em ? q.hV.STATIC : q.hV.RESPONSIVE,
                    className: i()({
                        [Y.hidden]: t7,
                        [Y.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == t3 ? void 0 : t3.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e8.current &&
                            (e8.current.currentTime >= eZ &&
                                (ti.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        e8.current.currentTime,
                                    ),
                                ),
                                eB(e8.current.currentTime + 6 + 2 * Math.random()),
                                tM(e8.current.currentTime)),
                            e8.current.currentTime >= eF &&
                                (eU(e8.current.currentTime + 1),
                                (0, C.qm)(J.id, ej.taskType, e8.current.currentTime),
                                et(e8.current.currentTime)),
                            e$(J.id, e8.current.currentTime, e8.current.duration),
                            eD((e8.current.currentTime / e8.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e8.current &&
                            (tM(e8.current.duration + 1),
                            ti.info("[QV] | handleEnded: sending progress update: ".concat(e8.current.duration + 1)),
                            e$(J.id, e8.current.duration, e8.current.duration)),
                            tA(A.rq.ENDED),
                            ek(!1);
                    },
                    onLoadedData: (e) => {
                        ti.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eI)),
                            eI &&
                                (tv(null != eK.current ? performance.now() - eK.current : null),
                                ew(!1),
                                null != tm.current && (tm.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e8.current &&
                            (ti.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tp)),
                            te(!0),
                            tu !== R.n1.VIDEO_HLS && tW(tc),
                            e0 ? (e8.current.volume = 0) : (e8.current.volume = e1));
                    },
                    onLoadStart: () => {
                        (eK.current = performance.now()),
                            tf(eM),
                            ti.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eK.current));
                    },
                    onPlaying: () => {
                        if (!ez.current) return;
                        let e = performance.now() - eo;
                        ti.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), ty(e), (ez.current = !1);
                    },
                    onWaiting: (e) => {
                        (eX.current = performance.now()),
                            ti.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eX.current)),
                            tS(),
                            ek(!0);
                    },
                    onProgress: (e) => {
                        if (null == e8.current) return;
                        ti.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e8.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < e8.current.buffered.length; e++) {
                            let n = e8.current.buffered.start(e),
                                r = e8.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e8.current.duration,
                                    size: (r - n) / e8.current.duration,
                                });
                        }
                        eA(t);
                    },
                    onCanPlay: t0,
                    onCanPlayThrough: t0,
                    onSeeked: () => {
                        ti.info("[QV] | handleSeeked"), tn(!0);
                    },
                    onAbort: () => t$(A.CY.ABORT),
                    onError: () => t$(A.CY.ERROR),
                    onEmptied: () => t$(A.CY.EMPTIED),
                    onStalled: () => t$(A.CY.STALLED),
                    onClick: () => {
                        ti.info("[QV] | handleVideoClick"), tz();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t5 &&
                            (0, r.jsx)("track", {
                                ref: e4,
                                src: t5.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != td &&
                            tu !== R.n1.VIDEO_HLS &&
                            (0, r.jsx)("source", {
                                onError: () => t$(A.CY.SOURCE_ERROR),
                                src: td.url,
                                type: td.mimetype,
                            }),
                    ],
                }),
                (eI || eN) &&
                    eb === A.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: Y.loadingSpinner,
                    }),
                eb === A.rq.PAUSED && e9 === j.yE.LOST_FOCUS && (0, r.jsx)(W, {}),
                es &&
                    eb !== A.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => ec(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: Y.transcriptOverlay }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: i()(Y.transcriptCont, { [Y.transcriptContPortrait]: "portrait" === ea }),
                                style: {
                                    marginBottom: (0, s.to)([t1, t4], (e, t) => "".concat(50 * e + t, "px")),
                                },
                                children: (0, r.jsx)(L.K, {
                                    quest: J,
                                    onClose: () => {
                                        ec(!1), th(j.jn.VIDEO_MODAL, _.jZ.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: Y.videoFooterContGradient,
                    style: {
                        opacity: (0, s.to)(
                            [
                                t1.to({
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
                        className: i()(Y.playPausePopCont, {
                            [Y.play]: eb === A.rq.PLAYING,
                            [Y.pause]: eb === A.rq.PAUSED,
                        }),
                        children:
                            eb === A.rq.PLAYING
                                ? (0, r.jsx)(p.o1U, { className: Y.playPausePopIcon })
                                : (0, r.jsx)(p.fpf, { className: Y.playPausePopIcon }),
                    },
                    eb,
                ),
                eu &&
                    null != tr &&
                    (0, r.jsx)(s.animated.div, {
                        className: Y.captionContainer,
                        ref: t8,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    t1.to({
                                        range: [0, 1],
                                        output: [0, -50],
                                    }),
                                ],
                                (e) => "".concat(e, "px"),
                            ),
                        },
                        children: (0, r.jsx)(p.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: Y.captionText,
                            children: tr.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: Y.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                t1.to({
                                    range: [0, 1],
                                    output: [0, 25],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                        paddingRight: (0, s.to)(
                            [
                                t1.to({
                                    range: [0, 1],
                                    output: [0, 25],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                        height: (0, s.to)(
                            [
                                t1.to({
                                    range: [0, 1],
                                    output: [0, 50],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                    },
                    children: [
                        (0, r.jsx)(k.Z, {
                            percent: null != eG ? eG : ex,
                            animate: !0 !== e6.current && !eP,
                            interactionEnabled: e7 && eY,
                            backgroundColor: tH ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tH ? eL : void 0,
                            duration: null != (X = null == (g = e8.current) ? void 0 : g.duration) ? X : 1,
                            maxSeekableTime: tH && eY ? tl : void 0,
                            onClick: (e) => {
                                tW(e), eb === A.rq.ENDED && tA(A.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tQ();
                            },
                            onScrubForward: () => {
                                tG();
                            },
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: Y.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        t1.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        t1.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        t1.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => (e < 0.3 ? "none" : "auto"),
                                ),
                            },
                            onFocus: () => ey(!0),
                            onBlur: () => ey(!1),
                            children: (0, r.jsx)(N.Z, {
                                videoRef: e8,
                                videoTask: $,
                                playerState: eb,
                                animSpring: t1,
                                visible: tH,
                                seekForwardEnabled: ne,
                                hideCaptionBtn: null == t5,
                                hideTranscriptBtn: nt,
                                handlePlaybackBtnClick: tz,
                                handleTranscriptBtnClick: () => {
                                    ec(!es),
                                        th(j.jn.VIDEO_MODAL, es ? _.jZ.TRANSCRIPT_DISABLE : _.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ed(!eu),
                                        th(
                                            j.jn.VIDEO_MODAL,
                                            eu ? _.jZ.CLOSED_CAPTIONING_DISABLE : _.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !em;
                                    ti.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, S.fn)(null == (e = e8.current) ? void 0 : e.parentNode, e8.current);
                                    t && null != n
                                        ? ((0, S.Dj)(n), n.addEventListener(S.NO, tY), tj(!0))
                                        : t || null == n || (n.removeEventListener(S.NO, tY), tj(!1), (0, S.Pr)(n)),
                                        ep(t);
                                },
                                handleSeekBackBtnClick: tQ,
                                handleSeekForwardBtnClick: tG,
                                handleControlBarPendingInteraction: eH,
                                onVolumeChange: tT,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
