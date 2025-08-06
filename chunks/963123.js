n.d(t, { Z: () => ee }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(126663),
    c = n(94171),
    u = n(754700),
    d = n(670081),
    m = n(442837),
    f = n(780384),
    p = n(481060),
    v = n(493773),
    E = n(607070),
    g = n(70097),
    O = n(210887),
    b = n(866960),
    C = n(63063),
    S = n(228488),
    h = n(617136),
    _ = n(509212),
    j = n(272008),
    y = n(497505),
    x = n(184299),
    T = n(347382),
    D = n(5881),
    P = n(249485),
    R = n(208109),
    N = n(117242),
    I = n(720293),
    k = n(566078),
    A = n(602667),
    w = n(881773),
    L = n(350312),
    M = n(355243),
    V = n(106743),
    B = n(223418),
    F = n(604162),
    Z = n(747717),
    U = n(281055),
    q = n(435585),
    Y = n(46140),
    H = n(981631),
    Q = n(217702),
    z = n(388032),
    G = n(844136);
let K = new Set([H.IyS.FIVE_G, H.IyS.FOUR_G, H.IyS.UNKNOWN]),
    X = {
        tension: 250,
        friction: 5,
        clamp: !0,
    };
function W() {
    let e = (0, m.e7)([O.Z], () => O.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: G.pauseText,
        style: { background: (0, f.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: z.intl.string(z.t.U7Xrb2),
        }),
    });
}
function $(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: o } = e,
        a = l.useMemo(() => (0, I.z0)(t, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(A.A, {
              questOrQuests: t,
              questContent: y.jn.VIDEO_MODAL_END_CARD,
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
    return (0, r.jsx)(p.P3F, {
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
                        (0, r.jsx)(p.X6q, {
                            variant: "heading-md/semibold",
                            className: G.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(p.X6q, {
                            variant: "heading-sm/normal",
                            className: G.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(Z.Z, { color: "#747783" }),
                (0, r.jsx)(o, {
                    size: "md",
                    color: c ? "#FFFFFF" : "#B5BAC1",
                    className: G.endScreenIcon,
                }),
            ],
        }),
    });
}
function ee(e) {
    var t, n, o, f, O, A, Z;
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
        { focused: eE, focusedChanged: eg } = (0, U.xU)(),
        { visible: eO, visibleChanged: eb, targetRef: eC } = (0, U.Yy)(),
        [eS, eh] = l.useState(!0 === el ? B.rq.PLAYING : B.rq.PAUSED),
        [e_, ej] = l.useState(!1),
        [ey, ex] = l.useState(!1),
        eT = (0, _.il)(ee),
        [eD, eP] = l.useState(eT.percentComplete),
        [eR, eN] = l.useState(!1),
        [eI, ek] = l.useState(!0),
        [eA, ew] = l.useState(!1),
        [eL, eM] = l.useState([]),
        [eV, eB] = l.useState(b.Z.getEffectiveConnectionSpeed()),
        [eF, eZ] = l.useState(0),
        [eU, eq] = l.useState(0),
        [eY, eH] = l.useState(!1),
        [eQ, ez] = l.useState(!1),
        eG = l.useRef(!0),
        eK = l.useRef(null),
        eX = l.useRef(null),
        eW = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[ee.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, c.X),
        e$ = (0, x.km)((e) => e.setVideoProgress),
        eJ = (0, x.km)((e) => e.muted),
        e0 = (0, x.km)((e) => e.volume),
        e1 = (0, m.e7)([E.Z], () => E.Z.useReducedMotion),
        e2 = (0, l.useRef)(null),
        e8 = (0, l.useRef)(null),
        e6 = l.useRef(!0),
        e4 = (null == (t = ee.userStatus) ? void 0 : t.completedAt) != null,
        e7 = (0, x.km)((e) => e.transcript),
        [e3, e9] = l.useState(null),
        e5 = (0, P._)({ location: Y.dr.VIDEO_MODAL }),
        [te, tt] = l.useState(!1),
        [tn, tr] = l.useState(!1),
        [tl, to] = l.useState(null),
        ti = e4
            ? null != (O = null == (n = e2.current) ? void 0 : n.duration)
                ? O
                : 0
            : Math.max(eW.maxTimestampSec, eT.progressSeconds),
        ta = l.useMemo(
            () =>
                (0, D.T)({
                    quest: ee,
                    location: Y.dr.VIDEO_MODAL,
                }),
            [ee],
        ),
        { title: ts, subtitle: tc } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : z.intl.string(z.t.iiTtpK),
                a =
                    null !=
                    (r =
                        null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel)
                            ? n
                            : null == o
                              ? void 0
                              : o.messages.videoEndCtaSubtitle)
                        ? r
                        : z.intl.string(z.t.mxaHf3),
                s = (0, _.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : z.intl.string(z.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a,
            };
        })(ee),
        tu = e4
            ? eW.timestampSec >= eW.duration
                ? 0
                : eW.timestampSec
            : Math.max(eW.timestampSec, eT.progressSeconds);
    (0, v.Ng)(() => {
        e6.current &&
            ((e6.current = !1),
            eB(b.Z.getEffectiveConnectionSpeed()),
            e4 && eW.timestampSec >= eW.duration && e$(ee.id, 0, eW.duration));
    });
    let {
            videoVariant: td,
            videoAsset: tm,
            hlsRef: tf,
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, T.z)(e, Y.dr.VIDEO_MODAL),
                d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                m = l.useMemo(
                    () =>
                        null != d
                            ? c && a.ZP.isSupported() && null != d.videoHls
                                ? I.n1.VIDEO_HLS
                                : K.has(n) || null == d.videoLowRes
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
        })(ee, e2, eV, tu),
        tp = (0, I.CC)(td),
        {
            trackQuestVideoLoadingStarted: tv,
            trackQuestVideoLoadingEnded: tE,
            trackQuestVideoProgressed: tg,
            trackQuestVideoResumed: tO,
            trackQuestVideoPaused: tb,
            trackQuestVideoFocusChange: tC,
            trackQuestContentClick: tS,
            trackQuestVideoBufferingStarted: th,
            trackQuestVideoBufferingEnded: t_,
            trackWatchTimeAnalytics: tj,
            trackQuestVideoTimeToFirstFrame: ty,
            trackQuestVideoFullscreenChanged: tx,
            trackQuestVideoError: tT,
            trackQuestVideoVolumeChanged: tD,
        } = (0, q.Z)({
            quest: ee,
            videoRef: e2,
            hlsRef: tf,
            videoSessionId: en,
            videoAssetId: tp,
            sourceQuestContent: es,
            logger: ta,
        }),
        tP = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e2.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tR } = (0, N.Z)({
            getCurrentVideoTime: tP,
            isPlaying: eS === B.rq.PLAYING,
            isMetadataLoaded: te,
            isInitialSeekComplete: tn,
            onAnalytics: tj,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tN = l.useCallback(
            (e) => {
                if ((ta.info("[QV] | updatePlayerState | playerState: ".concat(e)), eh(e), null != e2.current))
                    switch (e) {
                        case B.rq.PLAYING:
                            e2.current.paused && tO(e3), e9(null), e2.current.play();
                            break;
                        case B.rq.PAUSED:
                            e2.current.paused || tR(), e2.current.pause(), (eG.current = !1);
                            break;
                        case B.rq.ENDED:
                            tR(), ed(!1);
                    }
            },
            [tO, e3, tR, ed, ta],
        );
    l.useEffect(() => {
        tb(e3);
    }, [e3, tb]),
        l.useEffect(() => {
            eg && tC(eE, eS);
        }, [eE, eg, eS, tC]);
    let tI = l.useCallback(
        (e) => {
            var t;
            e4 ||
                (null == (t = ee.userStatus) ? void 0 : t.enrolledAt) == null ||
                (ta.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, _.FI)(ee, e)),
                tg();
        },
        [e4, ee, ta, tg],
    );
    l.useEffect(() => {
        (eo !== p.Dvm.HIDDEN &&
            eo !== p.Dvm.EXITING &&
            eo !== p.Dvm.EXITED &&
            (null == eo || !eb || eO || e4) &&
            (!eg || eE || e4)) ||
            null == e2.current ||
            eS !== B.rq.PLAYING ||
            (ta.info(
                "[QV] | Pausing video | playerState: "
                    .concat(eS, ", parentTransitionState: ")
                    .concat(eo, ", visible: ")
                    .concat(eO, ", focused: ")
                    .concat(eE, ", isQuestCompleted: ")
                    .concat(e4),
            ),
            tN(B.rq.PAUSED),
            e4 || e9(y.yE.LOST_FOCUS));
    }, [eo, eE, eg, eO, eb, eS, e4, tN, tI, ta]);
    let [tk, tA] = l.useState(!1),
        tw = l.useRef(null),
        tL = l.useRef(performance.now()),
        tM = l.useCallback(() => {
            null != tw.current && clearTimeout(tw.current),
                eS === B.rq.PLAYING &&
                    (tw.current = setTimeout(
                        () => {
                            eS === B.rq.PLAYING && tA(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tL.current)),
                    ));
        }, [eS]),
        tV = () => {
            tA(!1), (tL.current = performance.now()), tM();
        };
    l.useEffect(() => {
        if (eS !== B.rq.PLAYING) {
            tA(!1), null != tw.current && clearTimeout(tw.current);
            return;
        }
        return (
            tM(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [eS, tM]);
    let tB = !tk && (ey || e_ || eS === B.rq.ENDED),
        tF = l.useCallback(() => {
            var e;
            ta.info("[QV] | handleFullScreenExit");
            let t = (0, S.fn)(null == (e = e2.current) ? void 0 : e.parentNode, e2.current);
            null == t || (0, S.rB)(t) || (t.removeEventListener(S.NO, tF), ev(!1), tx(!1));
        }, [ev, ta, tx]),
        tZ = () => {
            if (null == e2.current) return;
            let e = Math.max(e2.current.currentTime - 10, 0);
            ta.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tq(e),
                eS === B.rq.ENDED && tN(B.rq.PAUSED),
                tS(y.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD);
        },
        tU = () => {
            if (null == e2.current || !t3) return;
            let e = Math.min(e2.current.currentTime + 10, ti);
            ta.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tq(e),
                eS !== B.rq.ENDED && e >= e2.current.duration && tN(B.rq.ENDED),
                tS(y.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e2.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tF);
        };
    }, [tF]);
    let tq = l.useCallback(
            (e) => {
                null != e2.current &&
                    (ta.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    tR(),
                    eN(!0),
                    tr(!1),
                    (e2.current.currentTime = e),
                    e$(ee.id, e, e2.current.duration));
            },
            [e2, e$, ee.id, tR, ta],
        ),
        tY = () => {
            if (null != e2.current)
                switch ((ta.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eS)), eS)) {
                    case B.rq.ENDED:
                        tq(0), tN(B.rq.PLAYING);
                        break;
                    case B.rq.PLAYING:
                        tN(B.rq.PAUSED), e9(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tN(B.rq.PLAYING);
                }
        },
        tH = (e) => {
            to(e);
        },
        tQ = (e) => {
            to((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tz = l.useCallback(() => {
            if (
                null == e2.current ||
                (ta.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e2.current.textTracks.length)),
                0 === e2.current.textTracks.length)
            )
                return;
            let e = e2.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, F.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tH(n)), (n.onexit = () => tQ(n)));
                }
        }, [e2, ta]),
        tG = (function (e, t) {
            let { enabled: n, forceNoCrossOrigin: r } = e;
            if (!n || (!r && t)) return "anonymous";
        })(e5, em),
        tK = "anonymous" === tG;
    l.useEffect(() => {
        if (null == e8.current || !tK) return;
        let e = e8.current;
        return (
            e.addEventListener("load", tz),
            () => {
                null != e && e.removeEventListener("load", tz);
            }
        );
    }, [e8, tz, tK]);
    let tX = l.useCallback(
            (e) => {
                var t;
                ta.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e2.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tp, ", connectionSpeed: ")
                        .concat(eV),
                ),
                    tT(e);
            },
            [eV, tT, e2, tp, ta],
        ),
        tW = (e) => {
            ta.info("[QV] | handleCanPlay: playerState: ".concat(eS)),
                null != e2.current &&
                    eS === B.rq.PLAYING &&
                    (ta.info("[QV] | handleCanPlay: did NOT early return"),
                    eI && (ta.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eI)), ek(!1)),
                    eA &&
                        (ta.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eA)),
                        t_(null != eX.current ? performance.now() - eX.current : null),
                        ew(!1)),
                    ta.info("[QV] | handleCanPlay: updating player state to playing"),
                    tN(B.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!eR) return;
        let e = setTimeout(() => {
            eN(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eR]);
    let [{ controlBarAnimSpring: t$ }, tJ] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: X,
            onStart: () => {
                ez(!1);
            },
            onRest: (e) => {
                1 === e.value && ez(!0);
            },
        })),
        t0 = (0, l.useRef)(null),
        [{ captionHeightSpring: t1 }, t2] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: X,
        }));
    l.useEffect(() => {
        var e, t;
        return (
            t2({
                captionHeightSpring:
                    em && null != tl && null != (t = null == (e = t0.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e1,
            }),
            () => {
                t1.stop();
            }
        );
    }, [em, t2, e1, tl, t1]),
        l.useEffect(
            () => (
                tJ({
                    controlBarAnimSpring: tB || eY ? 1 : 0,
                    immediate: e1,
                }),
                () => {
                    t$.stop();
                }
            ),
            [tB, tJ, e1, eY, t$],
        );
    let t8 = eS === B.rq.ENDED,
        t6 = l.useCallback(
            async (e) => {
                if (ep) {
                    var t;
                    let e = (0, S.fn)(null == (t = e2.current) ? void 0 : t.parentNode, e2.current);
                    null != e && (e.removeEventListener(S.NO, tF), (0, S.Pr)(e), ev(!1), tx(!1));
                }
                if ((tS(e, h.jZ.LEARN_MORE), ee.id === Y.V6))
                    return void window.open(C.Z.getArticleURL(H.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ea) {
                    let e = k.r.build(ee.config).application.link;
                    (await (0, F.qP)(e)) && ea();
                }
                (0, _.nc)(ee, {
                    content: e,
                    ctaContent: h.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: es,
                });
            },
            [tS, ee, ea, ep, e2, tF, ev, tx, es],
        ),
        t4 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
        t7 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
        t3 = e4 || eW.maxTimestampSec >= (null != (A = null == (o = e2.current) ? void 0 : o.currentTime) ? A : 0) + 1,
        t9 = l.useMemo(() => null === (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.TRANSCRIPT), [ee]);
    return (0, r.jsx)(p.P3F, {
        className: G.videoCont,
        "data-fullscreen": ep,
        tabIndex: -1,
        onMouseEnter: () => {
            ej(!0), tA(!1), (tL.current = performance.now()), null != tw.current && clearTimeout(tw.current);
        },
        onMouseLeave: () => {
            ej(!1), tA(!1);
        },
        onMouseMove: tV,
        onKeyDown: tV,
        children: (0, r.jsxs)("div", {
            className: i()(G.videoContInnerRelative, {
                [G.videoContInnerRelativePortrait]: "portrait" === ec,
                [G.videoContInnerRelativeLandscape]: "landscape" === ec,
            }),
            children: [
                t8 &&
                    (() => {
                        if (!(0, R.e)({ location: Y.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: ee,
                                        shouldShow: t8,
                                        sourceQuestContent: es,
                                    }),
                                    (0, r.jsx)("div", { className: G.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: ts,
                                        subtitle: tc,
                                        icon: p.d4D,
                                        className: G.endScreenPanelRight,
                                        onClick: () => t6(y.jn.VIDEO_MODAL),
                                    }),
                                ],
                            });
                        {
                            var e, t, n;
                            let l = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(L.Z, {
                                quest: ee,
                                title:
                                    null != (e = null == l ? void 0 : l.messages.videoEndCtaTitle)
                                        ? e
                                        : z.intl.string(z.t.Ka526u),
                                subtitle:
                                    null != (t = null == l ? void 0 : l.messages.videoEndCtaSubtitle)
                                        ? t
                                        : z.intl.string(z.t.tKMcAg),
                                ctaBtnLabel:
                                    null != (n = null == l ? void 0 : l.messages.videoEndCtaButtonLabel)
                                        ? n
                                        : z.intl.string(z.t.iiTtpK),
                                onCTAClick: () => t6(y.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: es,
                            });
                        }
                    })(),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (e2.current = e), (eC.current = e);
                    },
                    autoPlay: el,
                    playsInline: !0,
                    mediaLayoutType: ep ? Q.hV.STATIC : Q.hV.RESPONSIVE,
                    className: i()({
                        [G.hidden]: t8,
                        [G.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == t4 ? void 0 : t4.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e2.current &&
                            (e2.current.currentTime >= eF &&
                                (ta.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        e2.current.currentTime,
                                    ),
                                ),
                                eZ(e2.current.currentTime + 6 + 2 * Math.random()),
                                tI(e2.current.currentTime)),
                            e2.current.currentTime >= eU &&
                                (eq(e2.current.currentTime + 1),
                                (0, j.qm)(ee.id, eT.taskType, e2.current.currentTime),
                                er(e2.current.currentTime)),
                            e$(ee.id, e2.current.currentTime, e2.current.duration),
                            eP((e2.current.currentTime / e2.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e2.current &&
                            (tI(e2.current.duration + 1),
                            ta.info("[QV] | handleEnded: sending progress update: ".concat(e2.current.duration + 1)),
                            e$(ee.id, e2.current.duration, e2.current.duration)),
                            tN(B.rq.ENDED),
                            ew(!1);
                    },
                    onLoadedData: (e) => {
                        ta.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eI)),
                            eI &&
                                (tE(null != eK.current ? performance.now() - eK.current : null),
                                ek(!1),
                                null != tf.current && (tf.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e2.current &&
                            (ta.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tp)),
                            tt(!0),
                            td !== I.n1.VIDEO_HLS && tq(tu),
                            eJ ? (e2.current.volume = 0) : (e2.current.volume = e0));
                    },
                    onLoadStart: () => {
                        (eK.current = performance.now()),
                            tv(eV),
                            ta.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eK.current));
                    },
                    onPlaying: () => {
                        if (!eG.current) return;
                        let e = performance.now() - ei;
                        ta.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), ty(e), (eG.current = !1);
                    },
                    onWaiting: (e) => {
                        (eX.current = performance.now()),
                            ta.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eX.current)),
                            th(),
                            ew(!0);
                    },
                    onProgress: (e) => {
                        if (null == e2.current) return;
                        ta.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e2.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < e2.current.buffered.length; e++) {
                            let n = e2.current.buffered.start(e),
                                r = e2.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e2.current.duration,
                                    size: (r - n) / e2.current.duration,
                                });
                        }
                        eM(t);
                    },
                    onCanPlay: tW,
                    onCanPlayThrough: tW,
                    onSeeked: () => {
                        ta.info("[QV] | handleSeeked"), tr(!0);
                    },
                    onAbort: () => tX(B.CY.ABORT),
                    onError: () => tX(B.CY.ERROR),
                    onEmptied: () => tX(B.CY.EMPTIED),
                    onStalled: () => tX(B.CY.STALLED),
                    onClick: () => {
                        ta.info("[QV] | handleVideoClick"), tY();
                    },
                    crossOrigin: tG,
                    children: [
                        null != t7 &&
                            tK &&
                            (0, r.jsx)("track", {
                                ref: e8,
                                src: t7.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tm &&
                            td !== I.n1.VIDEO_HLS &&
                            (0, r.jsx)("source", {
                                onError: () => tX(B.CY.SOURCE_ERROR),
                                src: tm.url,
                                type: tm.mimetype,
                            }),
                    ],
                }),
                (eI || eA) &&
                    eS === B.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: G.loadingSpinner,
                    }),
                eS === B.rq.PAUSED && e3 === y.yE.LOST_FOCUS && (0, r.jsx)(W, {}),
                eu &&
                    eS !== B.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => ed(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: G.transcriptOverlay }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: i()(G.transcriptCont, { [G.transcriptContPortrait]: "portrait" === ec }),
                                style: {
                                    marginBottom: (0, s.to)([t$, t1], (e, t) => "".concat(50 * e + t, "px")),
                                },
                                children: (0, r.jsx)(V.K, {
                                    quest: ee,
                                    onClose: () => {
                                        ed(!1), tS(y.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE);
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
                                t$.to({
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
                            [G.play]: eS === B.rq.PLAYING,
                            [G.pause]: eS === B.rq.PAUSED,
                        }),
                        children:
                            eS === B.rq.PLAYING
                                ? (0, r.jsx)(p.o1U, { className: G.playPausePopIcon })
                                : (0, r.jsx)(p.fpf, { className: G.playPausePopIcon }),
                    },
                    eS,
                ),
                em &&
                    null != tl &&
                    (0, r.jsx)(s.animated.div, {
                        className: G.captionContainer,
                        ref: t0,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    t$.to({
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
                            className: G.captionText,
                            children: tl.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: G.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                t$.to({
                                    range: [0, 1],
                                    output: [0, 25],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                        paddingRight: (0, s.to)(
                            [
                                t$.to({
                                    range: [0, 1],
                                    output: [0, 25],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                        height: (0, s.to)(
                            [
                                t$.to({
                                    range: [0, 1],
                                    output: [0, 50],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                    },
                    children: [
                        (0, r.jsx)(M.Z, {
                            percent: eD,
                            animate: !0 !== e6.current && !eR,
                            interactionEnabled: e4 && eQ,
                            backgroundColor: tB ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tB ? eL : void 0,
                            duration: null != (Z = null == (f = e2.current) ? void 0 : f.duration) ? Z : 1,
                            maxSeekableTime: tB && eQ ? ti : void 0,
                            onClick: (e) => {
                                tq(e), eS === B.rq.ENDED && tN(B.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tZ();
                            },
                            onScrubForward: () => {
                                tU();
                            },
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: G.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        t$.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        t$.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        t$.to({
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
                                videoRef: e2,
                                videoTask: et,
                                playerState: eS,
                                animSpring: t$,
                                visible: tB,
                                seekForwardEnabled: t3,
                                hideCaptionBtn: null == t7,
                                hideTranscriptBtn: t9,
                                handlePlaybackBtnClick: tY,
                                handleTranscriptBtnClick: () => {
                                    eu ||
                                        (null != e7 &&
                                            e7.questId === ee.id &&
                                            e7.fetchStatus !== x.iF.NONE &&
                                            e7.fetchStatus !== x.iF.FAILURE) ||
                                        (0, j.lL)(ee, u.X.WATCH_VIDEO),
                                        ed(!eu),
                                        tS(y.jn.VIDEO_MODAL, eu ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ef(!em),
                                        tS(
                                            y.jn.VIDEO_MODAL,
                                            em ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ep;
                                    ta.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, S.fn)(null == (e = e2.current) ? void 0 : e.parentNode, e2.current);
                                    t && null != n
                                        ? ((0, S.Dj)(n), n.addEventListener(S.NO, tF), tx(!0))
                                        : t || null == n || (n.removeEventListener(S.NO, tF), tx(!1), (0, S.Pr)(n)),
                                        ev(t);
                                },
                                handleSeekBackBtnClick: tZ,
                                handleSeekForwardBtnClick: tU,
                                handleControlBarPendingInteraction: eH,
                                onVolumeChange: tD,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
