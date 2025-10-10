n.d(t, { Z: () => ee }), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(713447),
    s = n(137317),
    c = n(574583),
    u = n(754700),
    d = n(670081),
    m = n(442837),
    p = n(780384),
    f = n(481060),
    v = n(493773),
    E = n(607070),
    g = n(70097),
    O = n(210887),
    b = n(707903),
    h = n(866960),
    S = n(63063),
    C = n(228488),
    _ = n(617136),
    y = n(509212),
    j = n(272008),
    x = n(497505),
    T = n(184299),
    D = n(347382),
    R = n(5881),
    P = n(208109),
    I = n(117242),
    N = n(720293),
    k = n(566078),
    w = n(602667),
    A = n(881773),
    L = n(350312),
    M = n(355243),
    V = n(106743),
    Z = n(223418),
    B = n(604162),
    F = n(747717),
    q = n(281055),
    U = n(435585),
    H = n(46140),
    Q = n(981631),
    Y = n(217702),
    G = n(388032),
    z = n(430799);
let W = new Set([Q.IyS.FIVE_G, Q.IyS.FOUR_G, Q.IyS.UNKNOWN]),
    K = {
        tension: 250,
        friction: 5,
        clamp: !0,
    };
function X() {
    let e = (0, m.e7)([O.Z], () => O.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: z.pauseText,
        style: { background: (0, p.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: G.intl.string(G.t.U7Xrb2),
        }),
    });
}
function $(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: o } = e,
        a = l.useMemo(() => (0, N.z0)(t, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(w.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: o,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: a.url,
                      alt: "Video thumbnail",
                      className: i()(z.stillFrameImageCard, { [z.stillFrameImageCardHidden]: !n }),
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
        className: i()(z.endScreenPanel, z.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)("div", {
            className: z.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: z.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: "heading-md/semibold",
                            className: z.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(f.X6q, {
                            variant: "heading-sm/normal",
                            className: z.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(F.Z, { color: "#747783" }),
                (0, r.jsx)(o, {
                    size: "md",
                    color: c ? "#FFFFFF" : "#B5BAC1",
                    className: z.endScreenIcon,
                }),
            ],
        }),
    });
}
function ee(e) {
    var t, n, o, p, O, w, F, ee;
    let {
            quest: et,
            videoTask: en,
            videoSessionId: er,
            onOptimisticProgressUpdate: el,
            autoplay: eo,
            parentTransitionState: ei,
            performanceClockStartTime: ea,
            onClose: es,
            sourceQuestContent: ec,
            orientation: eu,
        } = e,
        ed = (0, T.km)((e) => e.transcriptEnabled),
        em = (0, T.km)((e) => e.setTranscriptEnabled),
        ep = (0, T.km)((e) => e.captionEnabled),
        ef = (0, T.km)((e) => e.setCaptionEnabled),
        ev = (0, T.km)((e) => e.fullScreenEnabled),
        eE = (0, T.km)((e) => e.setFullScreenEnabled),
        { focused: eg, focusedChanged: eO } = (0, q.xU)(),
        { visible: eb, visibleChanged: eh, targetRef: eS } = (0, q.Yy)(),
        [eC, e_] = l.useState(!0 === eo ? Z.rq.PLAYING : Z.rq.PAUSED),
        [ey, ej] = l.useState(!1),
        [ex, eT] = l.useState(!1),
        eD = (0, y.il)(et),
        [eR, eP] = l.useState(eD.percentComplete),
        [eI, eN] = l.useState(!1),
        [ek, ew] = l.useState(!0),
        [eA, eL] = l.useState(!1),
        [eM, eV] = l.useState([]),
        [eZ, eB] = l.useState(h.Z.getEffectiveConnectionSpeed()),
        [eF, eq] = l.useState(0),
        [eU, eH] = l.useState(0),
        [eQ, eY] = l.useState(!1),
        [eG, ez] = l.useState(!1),
        eW = l.useRef(!0),
        eK = l.useRef(null),
        eX = l.useRef(null),
        e$ = (0, T.km)((e) => {
            var t;
            return null != (t = e.videoProgress[et.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, c.X),
        eJ = (0, T.km)((e) => e.setVideoProgress),
        e0 = (0, T.km)((e) => e.muted),
        e1 = (0, T.km)((e) => e.volume),
        e2 = (0, m.e7)([E.Z], () => E.Z.useReducedMotion),
        e8 = (0, l.useRef)(null),
        e4 = (0, l.useRef)(null),
        e6 = l.useRef(!0),
        e7 = (null == (t = et.userStatus) ? void 0 : t.completedAt) != null,
        [e3, e9] = l.useState(null),
        [e5, te] = l.useState(!1),
        [tt, tn] = l.useState(!1),
        [tr, tl] = l.useState(null),
        to = e7
            ? null != (w = null == (n = e8.current) ? void 0 : n.duration)
                ? w
                : 0
            : Math.max(e$.maxTimestampSec, eD.progressSeconds),
        ti = l.useMemo(
            () =>
                (0, R.T)({
                    quest: et,
                    location: H.dr.VIDEO_MODAL,
                }),
            [et],
        ),
        { title: ta, subtitle: ts } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : G.intl.string(G.t.iiTtpK),
                a =
                    null !=
                    (r =
                        null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel)
                            ? n
                            : null == o
                              ? void 0
                              : o.messages.videoEndCtaSubtitle)
                        ? r
                        : G.intl.string(G.t.mxaHf3),
                s = (0, y.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : G.intl.string(G.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a,
            };
        })(et),
        tc = e7
            ? e$.timestampSec >= e$.duration
                ? 0
                : e$.timestampSec
            : Math.max(e$.timestampSec, eD.progressSeconds);
    (0, v.Ng)(() => {
        e6.current &&
            ((e6.current = !1),
            eB(h.Z.getEffectiveConnectionSpeed()),
            e7 && e$.timestampSec >= e$.duration && eJ(et.id, 0, e$.duration));
    });
    let {
            videoVariant: tu,
            videoAsset: td,
            hlsRef: tm,
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, D.z)(e, H.dr.VIDEO_MODAL),
                d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                m = l.useMemo(
                    () =>
                        null != d
                            ? c && a.ZP.isSupported() && null != d.videoHls
                                ? N.n1.VIDEO_HLS
                                : W.has(n) || null == d.videoLowRes
                                  ? N.n1.VIDEO
                                  : N.n1.VIDEO_LOW_RES
                            : null,
                    [d, n, c],
                ),
                p = l.useMemo(() => (null != m ? (0, N.z0)(e, u.X.WATCH_VIDEO, m, N.O.VIDEO) : null), [e, m]),
                f = () => {
                    null != s.current &&
                        800000 !== s.current.config.minAutoBitrate &&
                        (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (m !== N.n1.VIDEO_HLS || null == p || null == t.current || i.current) return;
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
        })(et, e8, eZ, tc),
        tp = (0, N.CC)(tu),
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
        } = (0, U.Z)({
            quest: et,
            videoRef: e8,
            hlsRef: tm,
            videoSessionId: er,
            videoAssetId: tp,
            sourceQuestContent: ec,
            logger: ti,
        }),
        tD = l.useRef(null),
        tR = et.id,
        tP = et.config.application.id,
        tI = et.config.application.name,
        tN = null == td ? void 0 : td.url,
        tk = null == (o = et.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.messages.videoTitle;
    l.useEffect(() => {
        var e;
        if (
            null == tN ||
            null == e8.current ||
            (tu === N.n1.VIDEO_HLS && null == tm.current) ||
            !(0, b.Zx)({ location: H.dr.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let t = {
            debug: !1,
            videoElement: e8.current,
            hlsInstance: tu === N.n1.VIDEO_HLS && null != (e = tm.current) ? e : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: tN,
                videoStreamType: tu === N.n1.VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == e8.current.duration || isNaN(e8.current.duration) ? 0 : e8.current.duration,
                title: tk,
                questId: tR,
                gameId: tP,
                gameName: tI,
            },
        };
        return (
            (tD.current = new b.ci(t)),
            tD.current.initialize(),
            () => {
                null != tD.current && (tD.current.endSession(), tD.current.destroy(), (tD.current = null));
            }
        );
    }, [tu, tm, tP, tI, tR, tN, tk]);
    let tw = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e8.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tA } = (0, I.Z)({
            getCurrentVideoTime: tw,
            isPlaying: eC === Z.rq.PLAYING,
            isMetadataLoaded: e5,
            isInitialSeekComplete: tt,
            onAnalytics: t_,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tL = l.useCallback(
            (e) => {
                if ((ti.info("[QV] | updatePlayerState | playerState: ".concat(e)), e_(e), null != e8.current))
                    switch (e) {
                        case Z.rq.PLAYING:
                            e8.current.paused && tg(e3), e9(null), e8.current.play();
                            break;
                        case Z.rq.PAUSED:
                            e8.current.paused || tA(), e8.current.pause(), (eW.current = !1);
                            break;
                        case Z.rq.ENDED:
                            tA(), em(!1);
                    }
            },
            [tg, e3, tA, em, ti],
        );
    l.useEffect(() => {
        tO(e3);
    }, [e3, tO]),
        l.useEffect(() => {
            eO && tb(eg, eC);
        }, [eg, eO, eC, tb]);
    let tM = l.useCallback(
        (e) => {
            var t;
            e7 ||
                (null == (t = et.userStatus) ? void 0 : t.enrolledAt) == null ||
                (ti.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, y.FI)(et, e)),
                tE();
        },
        [e7, et, ti, tE],
    );
    l.useEffect(() => {
        (ei !== f.Dvm.HIDDEN &&
            ei !== f.Dvm.EXITING &&
            ei !== f.Dvm.EXITED &&
            (null == ei || !eh || eb || e7) &&
            (!eO || eg || e7)) ||
            null == e8.current ||
            eC !== Z.rq.PLAYING ||
            (ti.info(
                "[QV] | Pausing video | playerState: "
                    .concat(eC, ", parentTransitionState: ")
                    .concat(ei, ", visible: ")
                    .concat(eb, ", focused: ")
                    .concat(eg, ", isQuestCompleted: ")
                    .concat(e7),
            ),
            tL(Z.rq.PAUSED),
            e7 || e9(x.yE.LOST_FOCUS));
    }, [ei, eg, eO, eb, eh, eC, e7, tL, tM, ti]);
    let [tV, tZ] = l.useState(!1),
        tB = l.useRef(null),
        tF = l.useRef(performance.now()),
        tq = l.useCallback(() => {
            null != tB.current && clearTimeout(tB.current),
                eC === Z.rq.PLAYING &&
                    (tB.current = setTimeout(
                        () => {
                            eC === Z.rq.PLAYING && tZ(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tF.current)),
                    ));
        }, [eC]),
        tU = () => {
            tZ(!1), (tF.current = performance.now()), tq();
        };
    l.useEffect(() => {
        if (eC !== Z.rq.PLAYING) {
            tZ(!1), null != tB.current && clearTimeout(tB.current);
            return;
        }
        return (
            tq(),
            () => {
                null != tB.current && clearTimeout(tB.current);
            }
        );
    }, [eC, tq]);
    let tH = !tV && (ex || ey || eC === Z.rq.ENDED),
        tQ = l.useCallback(() => {
            var e;
            ti.info("[QV] | handleFullScreenExit");
            let t = (0, C.fn)(null == (e = e8.current) ? void 0 : e.parentNode, e8.current);
            null == t || (0, C.rB)(t) || (t.removeEventListener(C.NO, tQ), eE(!1), tj(!1));
        }, [eE, ti, tj]),
        tY = () => {
            if (null == e8.current) return;
            let e = Math.max(e8.current.currentTime - 10, 0);
            ti.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tz(e),
                eC === Z.rq.ENDED && tL(Z.rq.PAUSED),
                th(x.jn.VIDEO_MODAL, _.jZ.SEEK_BACKWARD);
        },
        tG = () => {
            if (null == e8.current || !ne) return;
            let e = Math.min(e8.current.currentTime + 10, to);
            ti.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tz(e),
                eC !== Z.rq.ENDED && e >= e8.current.duration && tL(Z.rq.ENDED),
                th(x.jn.VIDEO_MODAL, _.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e8.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, tQ);
        };
    }, [tQ]);
    let tz = l.useCallback(
            (e) => {
                null != e8.current &&
                    (ti.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    tA(),
                    eN(!0),
                    tn(!1),
                    (e8.current.currentTime = e),
                    eJ(et.id, e, e8.current.duration));
            },
            [e8, eJ, et.id, tA, ti],
        ),
        tW = () => {
            if (null != e8.current)
                switch ((ti.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eC)), eC)) {
                    case Z.rq.ENDED:
                        tz(0), tL(Z.rq.PLAYING);
                        break;
                    case Z.rq.PLAYING:
                        tL(Z.rq.PAUSED), e9(x.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tL(Z.rq.PLAYING);
                }
        },
        tK = (e) => {
            tl(e);
        },
        tX = (e) => {
            tl((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        t$ = l.useCallback(() => {
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
                    (0, B.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tK(n)), (n.onexit = () => tX(n)));
                }
        }, [e8, ti]);
    l.useEffect(() => {
        if (null == e4.current) return;
        let e = e4.current;
        return (
            e.addEventListener("load", t$),
            () => {
                null != e && e.removeEventListener("load", t$);
            }
        );
    }, [e4, t$]);
    let tJ = l.useCallback(
            (e) => {
                var t;
                ti.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e8.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tp, ", connectionSpeed: ")
                        .concat(eZ),
                ),
                    tx(e);
            },
            [eZ, tx, e8, tp, ti],
        ),
        t0 = (e) => {
            ti.info("[QV] | handleCanPlay: playerState: ".concat(eC)),
                null != e8.current &&
                    eC === Z.rq.PLAYING &&
                    (ti.info("[QV] | handleCanPlay: did NOT early return"),
                    ek && (ti.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ek)), ew(!1)),
                    eA &&
                        (ti.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eA)),
                        tC(null != eX.current ? performance.now() - eX.current : null),
                        eL(!1)),
                    ti.info("[QV] | handleCanPlay: updating player state to playing"),
                    tL(Z.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!eI) return;
        let e = setTimeout(() => {
            eN(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eI]);
    let [{ controlBarAnimSpring: t1 }, t2] = (0, f.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                ez(!1);
            },
            onRest: (e) => {
                1 === e.value && ez(!0);
            },
        })),
        t8 = (0, l.useRef)(null),
        [{ captionHeightSpring: t4 }, t6] = (0, f.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: K,
        }));
    l.useEffect(() => {
        var e, t;
        return (
            t6({
                captionHeightSpring:
                    ep && null != tr && null != (t = null == (e = t8.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e2,
            }),
            () => {
                t4.stop();
            }
        );
    }, [ep, t6, e2, tr, t4]),
        l.useEffect(
            () => (
                t2({
                    controlBarAnimSpring: tH || eQ ? 1 : 0,
                    immediate: e2,
                }),
                () => {
                    t1.stop();
                }
            ),
            [tH, t2, e2, eQ, t1],
        );
    let t7 = eC === Z.rq.ENDED,
        t3 = l.useCallback(
            async (e) => {
                if (ev) {
                    var t;
                    let e = (0, C.fn)(null == (t = e8.current) ? void 0 : t.parentNode, e8.current);
                    null != e && (e.removeEventListener(C.NO, tQ), (0, C.Pr)(e), eE(!1), tj(!1));
                }
                if ((th(e, _.jZ.LEARN_MORE), et.id === H.V6))
                    return void window.open(S.Z.getArticleURL(Q.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != es) {
                    let e = k.r.build(et.config).application.link;
                    (await (0, B.qP)(e)) && es();
                }
                (0, y.nc)(et, {
                    content: e,
                    ctaContent: _.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: ec,
                });
            },
            [th, et, es, ev, e8, tQ, eE, tj, ec],
        ),
        t9 = l.useMemo(() => (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [et]),
        t5 = l.useMemo(() => (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.CAPTION), [et]),
        ne = e7 || e$.maxTimestampSec >= (null != (F = null == (p = e8.current) ? void 0 : p.currentTime) ? F : 0) + 1,
        nt = l.useMemo(() => null === (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.TRANSCRIPT), [et]);
    return (0, r.jsx)(f.P3F, {
        className: z.videoCont,
        "data-fullscreen": ev,
        tabIndex: -1,
        onMouseEnter: () => {
            ej(!0), tZ(!1), (tF.current = performance.now()), null != tB.current && clearTimeout(tB.current);
        },
        onMouseLeave: () => {
            ej(!1), tZ(!1);
        },
        onMouseMove: tU,
        onKeyDown: tU,
        children: (0, r.jsxs)("div", {
            className: i()(z.videoContInnerRelative, {
                [z.videoContInnerRelativePortrait]: "portrait" === eu,
                [z.videoContInnerRelativeLandscape]: "landscape" === eu,
            }),
            children: [
                t7 &&
                    (() => {
                        if (!(0, P.e)({ location: H.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: et,
                                        shouldShow: t7,
                                        sourceQuestContent: ec,
                                    }),
                                    (0, r.jsx)("div", { className: z.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: ta,
                                        subtitle: ts,
                                        icon: f.d4D,
                                        className: z.endScreenPanelRight,
                                        onClick: () => t3(x.jn.VIDEO_MODAL),
                                    }),
                                ],
                            });
                        {
                            var e, t, n;
                            let l = et.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(L.Z, {
                                quest: et,
                                title:
                                    null != (e = null == l ? void 0 : l.messages.videoEndCtaTitle)
                                        ? e
                                        : G.intl.string(G.t.Ka526u),
                                subtitle:
                                    null != (t = null == l ? void 0 : l.messages.videoEndCtaSubtitle)
                                        ? t
                                        : G.intl.string(G.t.tKMcAg),
                                ctaBtnLabel:
                                    null != (n = null == l ? void 0 : l.messages.videoEndCtaButtonLabel)
                                        ? n
                                        : G.intl.string(G.t.iiTtpK),
                                onCTAClick: () => t3(x.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: ec,
                            });
                        }
                    })(),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (e8.current = e), (eS.current = e);
                    },
                    autoPlay: eo,
                    playsInline: !0,
                    mediaLayoutType: ev ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: t7,
                        [z.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == t9 ? void 0 : t9.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e8.current &&
                            (e8.current.currentTime >= eF &&
                                (ti.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        e8.current.currentTime,
                                    ),
                                ),
                                eq(e8.current.currentTime + 6 + 2 * Math.random()),
                                tM(e8.current.currentTime)),
                            e8.current.currentTime >= eU &&
                                (eH(e8.current.currentTime + 1),
                                (0, j.qm)(et.id, eD.taskType, e8.current.currentTime),
                                el(e8.current.currentTime)),
                            eJ(et.id, e8.current.currentTime, e8.current.duration),
                            eP((e8.current.currentTime / e8.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e8.current &&
                            (tM(e8.current.duration + 1),
                            ti.info("[QV] | handleEnded: sending progress update: ".concat(e8.current.duration + 1)),
                            eJ(et.id, e8.current.duration, e8.current.duration)),
                            tL(Z.rq.ENDED),
                            eL(!1);
                    },
                    onLoadedData: (e) => {
                        ti.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ek)),
                            ek &&
                                (tv(null != eK.current ? performance.now() - eK.current : null),
                                ew(!1),
                                null != tm.current && (tm.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e8.current &&
                            (ti.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tp)),
                            te(!0),
                            tu !== N.n1.VIDEO_HLS && tz(tc),
                            e0 ? (e8.current.volume = 0) : (e8.current.volume = e1));
                    },
                    onLoadStart: () => {
                        (eK.current = performance.now()),
                            tf(eZ),
                            ti.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eK.current));
                    },
                    onPlaying: () => {
                        if (!eW.current) return;
                        let e = performance.now() - ea;
                        ti.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), ty(e), (eW.current = !1);
                    },
                    onWaiting: (e) => {
                        (eX.current = performance.now()),
                            ti.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eX.current)),
                            tS(),
                            eL(!0);
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
                        eV(t);
                    },
                    onCanPlay: t0,
                    onCanPlayThrough: t0,
                    onSeeked: () => {
                        ti.info("[QV] | handleSeeked"), tn(!0);
                    },
                    onAbort: () => tJ(Z.CY.ABORT),
                    onError: () => tJ(Z.CY.ERROR),
                    onEmptied: () => tJ(Z.CY.EMPTIED),
                    onStalled: () => tJ(Z.CY.STALLED),
                    onClick: () => {
                        ti.info("[QV] | handleVideoClick"), tW();
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
                            tu !== N.n1.VIDEO_HLS &&
                            (0, r.jsx)("source", {
                                onError: () => tJ(Z.CY.SOURCE_ERROR),
                                src: td.url,
                                type: td.mimetype,
                            }),
                    ],
                }),
                (ek || eA) &&
                    eC === Z.rq.PLAYING &&
                    (0, r.jsx)(f.$jN, {
                        type: f.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner,
                    }),
                eC === Z.rq.PAUSED && e3 === x.yE.LOST_FOCUS && (0, r.jsx)(X, {}),
                ed &&
                    eC !== Z.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.P3F, {
                                onClick: () => em(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: z.transcriptOverlay }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: i()(z.transcriptCont, { [z.transcriptContPortrait]: "portrait" === eu }),
                                style: {
                                    marginBottom: (0, s.to)([t1, t4], (e, t) => "".concat(50 * e + t, "px")),
                                },
                                children: (0, r.jsx)(V.K, {
                                    quest: et,
                                    onClose: () => {
                                        em(!1), th(x.jn.VIDEO_MODAL, _.jZ.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: z.videoFooterContGradient,
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
                        className: i()(z.playPausePopCont, {
                            [z.play]: eC === Z.rq.PLAYING,
                            [z.pause]: eC === Z.rq.PAUSED,
                        }),
                        children:
                            eC === Z.rq.PLAYING
                                ? (0, r.jsx)(f.o1U, { className: z.playPausePopIcon })
                                : (0, r.jsx)(f.fpf, { className: z.playPausePopIcon }),
                    },
                    eC,
                ),
                ep &&
                    null != tr &&
                    (0, r.jsx)(s.animated.div, {
                        className: z.captionContainer,
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
                        children: (0, r.jsx)(f.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: z.captionText,
                            children: tr.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: z.videoFooterCont,
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
                        (0, r.jsx)(M.Z, {
                            percent: eR,
                            animate: !0 !== e6.current && !eI,
                            interactionEnabled: e7 && eG,
                            backgroundColor: tH ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tH ? eM : void 0,
                            duration: null != (ee = null == (O = e8.current) ? void 0 : O.duration) ? ee : 1,
                            maxSeekableTime: tH && eG ? to : void 0,
                            onClick: (e) => {
                                tz(e), eC === Z.rq.ENDED && tL(Z.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tY();
                            },
                            onScrubForward: () => {
                                tG();
                            },
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: z.videoControlsCont,
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
                            onFocus: () => eT(!0),
                            onBlur: () => eT(!1),
                            children: (0, r.jsx)(A.Z, {
                                videoRef: e8,
                                videoTask: en,
                                playerState: eC,
                                animSpring: t1,
                                visible: tH,
                                seekForwardEnabled: ne,
                                hideCaptionBtn: null == t5,
                                hideTranscriptBtn: nt,
                                handlePlaybackBtnClick: tW,
                                handleTranscriptBtnClick: () => {
                                    em(!ed),
                                        th(x.jn.VIDEO_MODAL, ed ? _.jZ.TRANSCRIPT_DISABLE : _.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ef(!ep),
                                        th(
                                            x.jn.VIDEO_MODAL,
                                            ep ? _.jZ.CLOSED_CAPTIONING_DISABLE : _.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ev;
                                    ti.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, C.fn)(null == (e = e8.current) ? void 0 : e.parentNode, e8.current);
                                    t && null != n
                                        ? ((0, C.Dj)(n), n.addEventListener(C.NO, tQ), tj(!0))
                                        : t || null == n || (n.removeEventListener(C.NO, tQ), tj(!1), (0, C.Pr)(n)),
                                        eE(t);
                                },
                                handleSeekBackBtnClick: tY,
                                handleSeekForwardBtnClick: tG,
                                handleControlBarPendingInteraction: eY,
                                onVolumeChange: tT,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
