n.d(t, { Z: () => ee }), n(388685), n(539854);
var r = n(951288),
    o = n(647438),
    a = n(120356),
    l = n.n(a),
    i = n(10106),
    s = n(938288),
    c = n(524825),
    u = n(754700),
    d = n(670081),
    f = n(442837),
    p = n(780384),
    m = n(481060),
    v = n(493773),
    g = n(607070),
    _ = n(70097),
    E = n(210887),
    C = n(707903),
    S = n(866960),
    b = n(63063),
    O = n(228488),
    h = n(617136),
    y = n(509212),
    j = n(272008),
    x = n(497505),
    T = n(184299),
    D = n(347382),
    P = n(5881),
    I = n(208109),
    R = n(117242),
    N = n(720293),
    k = n(566078),
    w = n(602667),
    A = n(881773),
    L = n(350312),
    M = n(355243),
    B = n(106743),
    V = n(223418),
    F = n(604162),
    Z = n(747717),
    q = n(281055),
    U = n(435585),
    H = n(46140),
    G = n(981631),
    Y = n(217702),
    Q = n(388032),
    W = n(430799);
let z = new Set([G.IyS.FIVE_G, G.IyS.FOUR_G, G.IyS.UNKNOWN]),
    K = {
        tension: 250,
        friction: 5,
        clamp: !0,
    };
function X() {
    let e = (0, f.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: W.pauseText,
        style: { background: (0, p.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: Q.intl.string(Q.t.U7Xrb2),
        }),
    });
}
function $(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: a } = e,
        i = o.useMemo(() => (0, N.z0)(t, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [t]);
    return null == i
        ? null
        : (0, r.jsx)(w.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: a,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: "Video thumbnail",
                      className: l()(W.stillFrameImageCard, { [W.stillFrameImageCardHidden]: !n }),
                  }),
          });
}
function J(e) {
    let { title: t, subtitle: n, icon: a, onClick: i, className: s } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        f = () => {
            u(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: l()(W.endScreenPanel, W.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: f,
        onFocus: d,
        onBlur: f,
        onClick: i,
        children: (0, r.jsxs)("div", {
            className: W.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: W.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            variant: "heading-md/semibold",
                            className: W.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(m.X6q, {
                            variant: "heading-sm/normal",
                            className: W.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(Z.Z, { color: "#747783" }),
                (0, r.jsx)(a, {
                    size: "md",
                    color: c ? "#FFFFFF" : "#B5BAC1",
                    className: W.endScreenIcon,
                }),
            ],
        }),
    });
}
function ee(e) {
    var t, n, a, p, E, w, Z, ee;
    let {
            quest: et,
            videoTask: en,
            videoSessionId: er,
            onOptimisticProgressUpdate: eo,
            autoplay: ea,
            parentTransitionState: el,
            performanceClockStartTime: ei,
            onClose: es,
            sourceQuestContent: ec,
            orientation: eu,
        } = e,
        ed = (0, T.km)((e) => e.transcriptEnabled),
        ef = (0, T.km)((e) => e.setTranscriptEnabled),
        ep = (0, T.km)((e) => e.captionEnabled),
        em = (0, T.km)((e) => e.setCaptionEnabled),
        ev = (0, T.km)((e) => e.fullScreenEnabled),
        eg = (0, T.km)((e) => e.setFullScreenEnabled),
        { focused: e_, focusedChanged: eE } = (0, q.xU)(),
        { visible: eC, visibleChanged: eS, targetRef: eb } = (0, q.Yy)(),
        [eO, eh] = o.useState(!0 === ea ? V.rq.PLAYING : V.rq.PAUSED),
        [ey, ej] = o.useState(!1),
        [ex, eT] = o.useState(!1),
        eD = (0, y.il)(et),
        [eP, eI] = o.useState(eD.percentComplete),
        [eR, eN] = o.useState(!1),
        [ek, ew] = o.useState(!0),
        [eA, eL] = o.useState(!1),
        [eM, eB] = o.useState([]),
        [eV, eF] = o.useState(S.Z.getEffectiveConnectionSpeed()),
        [eZ, eq] = o.useState(0),
        [eU, eH] = o.useState(0),
        [eG, eY] = o.useState(!1),
        [eQ, eW] = o.useState(!1),
        ez = o.useRef(!0),
        eK = o.useRef(null),
        eX = o.useRef(null),
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
        e2 = (0, f.e7)([g.Z], () => g.Z.useReducedMotion),
        e8 = (0, o.useRef)(null),
        e4 = (0, o.useRef)(null),
        e6 = o.useRef(!0),
        e7 = (null == (t = et.userStatus) ? void 0 : t.completedAt) != null,
        [e3, e9] = o.useState(null),
        [e5, te] = o.useState(!1),
        [tt, tn] = o.useState(!1),
        [tr, to] = o.useState(null),
        ta = e7
            ? null != (w = null == (n = e8.current) ? void 0 : n.duration)
                ? w
                : 0
            : Math.max(e$.maxTimestampSec, eD.progressSeconds),
        tl = o.useMemo(
            () =>
                (0, P.T)({
                    quest: et,
                    location: H.dr.VIDEO_MODAL,
                }),
            [et],
        ),
        { title: ti, subtitle: ts } = (function (e) {
            var t, n, r, o;
            let a = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                l = null != (t = null == a ? void 0 : a.messages.videoEndCtaTitle) ? t : Q.intl.string(Q.t.iiTtpK),
                i =
                    null !=
                    (r =
                        null != (n = null == a ? void 0 : a.messages.videoEndCtaButtonLabel)
                            ? n
                            : null == a
                              ? void 0
                              : a.messages.videoEndCtaSubtitle)
                        ? r
                        : Q.intl.string(Q.t.mxaHf3),
                s = (0, y.B2)(e.config),
                c = null != (o = null == a ? void 0 : a.messages.videoEndCtaSubtitle) ? o : Q.intl.string(Q.t.mxaHf3),
                f = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: f ? s : l,
                subtitle: f ? c : i,
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
            eF(S.Z.getEffectiveConnectionSpeed()),
            e7 && e$.timestampSec >= e$.duration && eJ(et.id, 0, e$.duration));
    });
    let {
            videoVariant: tu,
            videoAsset: td,
            hlsRef: tf,
        } = (function (e, t, n, r) {
            var a;
            let l = o.useRef(!1),
                s = o.useRef(null),
                c = (0, D.z)(e, H.dr.VIDEO_MODAL),
                d = null == (a = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : a.assets,
                f = o.useMemo(
                    () =>
                        null != d
                            ? c && i.ZP.isSupported() && null != d.videoHls
                                ? N.n1.VIDEO_HLS
                                : z.has(n) || null == d.videoLowRes
                                  ? N.n1.VIDEO
                                  : N.n1.VIDEO_LOW_RES
                            : null,
                    [d, n, c],
                ),
                p = o.useMemo(() => (null != f ? (0, N.z0)(e, u.X.WATCH_VIDEO, f, N.O.VIDEO) : null), [e, f]),
                m = () => {
                    null != s.current &&
                        800000 !== s.current.config.minAutoBitrate &&
                        (s.current.config.minAutoBitrate = 800000);
                };
            return (
                o.useEffect(() => {
                    if (f !== N.n1.VIDEO_HLS || null == p || null == t.current || l.current) return;
                    (s.current = new i.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1,
                    })),
                        s.current.on(i.ZP.Events.FRAG_LOADING, m),
                        s.current.loadSource(p.url),
                        s.current.attachMedia(t.current),
                        (l.current = !0);
                    let e = s.current;
                    return () => {
                        null != e && e.off(i.ZP.Events.FRAG_LOADING, m);
                    };
                }, [p, f, t, r]),
                {
                    videoVariant: f,
                    videoAsset: p,
                    hlsRef: s,
                }
            );
        })(et, e8, eV, tc),
        tp = (0, N.CC)(tu),
        {
            trackQuestVideoLoadingStarted: tm,
            trackQuestVideoLoadingEnded: tv,
            trackQuestVideoProgressed: tg,
            trackQuestVideoResumed: t_,
            trackQuestVideoPaused: tE,
            trackQuestVideoFocusChange: tC,
            trackQuestContentClick: tS,
            trackQuestVideoBufferingStarted: tb,
            trackQuestVideoBufferingEnded: tO,
            trackWatchTimeAnalytics: th,
            trackQuestVideoTimeToFirstFrame: ty,
            trackQuestVideoFullscreenChanged: tj,
            trackQuestVideoError: tx,
            trackQuestVideoVolumeChanged: tT,
        } = (0, U.Z)({
            quest: et,
            videoRef: e8,
            hlsRef: tf,
            videoSessionId: er,
            videoAssetId: tp,
            sourceQuestContent: ec,
            logger: tl,
        }),
        tD = o.useRef(null),
        tP = et.id,
        tI = et.config.application.id,
        tR = et.config.application.name,
        tN = null == td ? void 0 : td.url,
        tk = null == (a = et.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : a.messages.videoTitle;
    o.useEffect(() => {
        var e;
        if (
            null == tN ||
            null == e8.current ||
            (tu === N.n1.VIDEO_HLS && null == tf.current) ||
            !(0, C.Zx)({ location: H.dr.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let t = {
            debug: !1,
            videoElement: e8.current,
            hlsInstance: tu === N.n1.VIDEO_HLS && null != (e = tf.current) ? e : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: tN,
                videoStreamType: tu === N.n1.VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == e8.current.duration || isNaN(e8.current.duration) ? 0 : e8.current.duration,
                title: tk,
                questId: tP,
                gameId: tI,
                gameName: tR,
            },
        };
        return (
            (tD.current = new C.ci(t)),
            tD.current.initialize(),
            () => {
                null != tD.current && (tD.current.endSession(), tD.current.destroy(), (tD.current = null));
            }
        );
    }, [tu, tf, tI, tR, tP, tN, tk]);
    let tw = o.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e8.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tA } = (0, R.Z)({
            getCurrentVideoTime: tw,
            isPlaying: eO === V.rq.PLAYING,
            isMetadataLoaded: e5,
            isInitialSeekComplete: tt,
            onAnalytics: th,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tL = o.useCallback(
            (e) => {
                if ((tl.info("[QV] | updatePlayerState | playerState: ".concat(e)), eh(e), null != e8.current))
                    switch (e) {
                        case V.rq.PLAYING:
                            e8.current.paused && t_(e3), e9(null), e8.current.play();
                            break;
                        case V.rq.PAUSED:
                            e8.current.paused || tA(), e8.current.pause(), (ez.current = !1);
                            break;
                        case V.rq.ENDED:
                            tA(), ef(!1);
                    }
            },
            [t_, e3, tA, ef, tl],
        );
    o.useEffect(() => {
        tE(e3);
    }, [e3, tE]),
        o.useEffect(() => {
            eE && tC(e_, eO);
        }, [e_, eE, eO, tC]);
    let tM = o.useCallback(
        (e) => {
            var t;
            e7 ||
                (null == (t = et.userStatus) ? void 0 : t.enrolledAt) == null ||
                (tl.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, y.FI)(et, e)),
                tg();
        },
        [e7, et, tl, tg],
    );
    o.useEffect(() => {
        (el !== m.Dvm.HIDDEN &&
            el !== m.Dvm.EXITING &&
            el !== m.Dvm.EXITED &&
            (null == el || !eS || eC || e7) &&
            (!eE || e_ || e7)) ||
            null == e8.current ||
            eO !== V.rq.PLAYING ||
            (tl.info(
                "[QV] | Pausing video | playerState: "
                    .concat(eO, ", parentTransitionState: ")
                    .concat(el, ", visible: ")
                    .concat(eC, ", focused: ")
                    .concat(e_, ", isQuestCompleted: ")
                    .concat(e7),
            ),
            tL(V.rq.PAUSED),
            e7 || e9(x.yE.LOST_FOCUS));
    }, [el, e_, eE, eC, eS, eO, e7, tL, tM, tl]);
    let [tB, tV] = o.useState(!1),
        tF = o.useRef(null),
        tZ = o.useRef(performance.now()),
        tq = o.useCallback(() => {
            null != tF.current && clearTimeout(tF.current),
                eO === V.rq.PLAYING &&
                    (tF.current = setTimeout(
                        () => {
                            eO === V.rq.PLAYING && tV(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tZ.current)),
                    ));
        }, [eO]),
        tU = () => {
            tV(!1), (tZ.current = performance.now()), tq();
        };
    o.useEffect(() => {
        if (eO !== V.rq.PLAYING) {
            tV(!1), null != tF.current && clearTimeout(tF.current);
            return;
        }
        return (
            tq(),
            () => {
                null != tF.current && clearTimeout(tF.current);
            }
        );
    }, [eO, tq]);
    let tH = !tB && (ex || ey || eO === V.rq.ENDED),
        tG = o.useCallback(() => {
            var e;
            tl.info("[QV] | handleFullScreenExit");
            let t = (0, O.fn)(null == (e = e8.current) ? void 0 : e.parentNode, e8.current);
            null == t || (0, O.rB)(t) || (t.removeEventListener(O.NO, tG), eg(!1), tj(!1));
        }, [eg, tl, tj]),
        tY = () => {
            if (null == e8.current) return;
            let e = Math.max(e8.current.currentTime - 10, 0);
            tl.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tW(e),
                eO === V.rq.ENDED && tL(V.rq.PAUSED),
                tS(x.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD);
        },
        tQ = () => {
            if (null == e8.current || !ne) return;
            let e = Math.min(e8.current.currentTime + 10, ta);
            tl.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tW(e),
                eO !== V.rq.ENDED && e >= e8.current.duration && tL(V.rq.ENDED),
                tS(x.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD);
        };
    o.useEffect(() => {
        let e = e8.current;
        return () => {
            let t = (0, O.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(O.NO, tG);
        };
    }, [tG]);
    let tW = o.useCallback(
            (e) => {
                null != e8.current &&
                    (tl.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    tA(),
                    eN(!0),
                    tn(!1),
                    (e8.current.currentTime = e),
                    eJ(et.id, e, e8.current.duration));
            },
            [e8, eJ, et.id, tA, tl],
        ),
        tz = () => {
            if (null != e8.current)
                switch ((tl.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eO)), eO)) {
                    case V.rq.ENDED:
                        tW(0), tL(V.rq.PLAYING);
                        break;
                    case V.rq.PLAYING:
                        tL(V.rq.PAUSED), e9(x.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tL(V.rq.PLAYING);
                }
        },
        tK = (e) => {
            to(e);
        },
        tX = (e) => {
            to((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        t$ = o.useCallback(() => {
            if (
                null == e8.current ||
                (tl.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e8.current.textTracks.length)),
                0 === e8.current.textTracks.length)
            )
                return;
            let e = e8.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, F.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tK(n)), (n.onexit = () => tX(n)));
                }
        }, [e8, tl]);
    o.useEffect(() => {
        if (null == e4.current) return;
        let e = e4.current;
        return (
            e.addEventListener("load", t$),
            () => {
                null != e && e.removeEventListener("load", t$);
            }
        );
    }, [e4, t$]);
    let tJ = o.useCallback(
            (e) => {
                var t;
                tl.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e8.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tp, ", connectionSpeed: ")
                        .concat(eV),
                ),
                    tx(e);
            },
            [eV, tx, e8, tp, tl],
        ),
        t0 = (e) => {
            tl.info("[QV] | handleCanPlay: playerState: ".concat(eO)),
                null != e8.current &&
                    eO === V.rq.PLAYING &&
                    (tl.info("[QV] | handleCanPlay: did NOT early return"),
                    ek && (tl.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ek)), ew(!1)),
                    eA &&
                        (tl.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eA)),
                        tO(null != eX.current ? performance.now() - eX.current : null),
                        eL(!1)),
                    tl.info("[QV] | handleCanPlay: updating player state to playing"),
                    tL(V.rq.PLAYING));
        };
    o.useEffect(() => {
        if (!eR) return;
        let e = setTimeout(() => {
            eN(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eR]);
    let [{ controlBarAnimSpring: t1 }, t2] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                eW(!1);
            },
            onRest: (e) => {
                1 === e.value && eW(!0);
            },
        })),
        t8 = (0, o.useRef)(null),
        [{ captionHeightSpring: t4 }, t6] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: K,
        }));
    o.useEffect(() => {
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
        o.useEffect(
            () => (
                t2({
                    controlBarAnimSpring: tH || eG ? 1 : 0,
                    immediate: e2,
                }),
                () => {
                    t1.stop();
                }
            ),
            [tH, t2, e2, eG, t1],
        );
    let t7 = eO === V.rq.ENDED,
        t3 = o.useCallback(
            async (e) => {
                if (ev) {
                    var t;
                    let e = (0, O.fn)(null == (t = e8.current) ? void 0 : t.parentNode, e8.current);
                    null != e && (e.removeEventListener(O.NO, tG), (0, O.Pr)(e), eg(!1), tj(!1));
                }
                if ((tS(e, h.jZ.LEARN_MORE), et.id === H.V6))
                    return void window.open(b.Z.getArticleURL(G.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != es) {
                    let e = k.r.build(et.config).application.link;
                    (await (0, F.qP)(e)) && es();
                }
                (0, y.nc)(et, {
                    content: e,
                    ctaContent: h.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: ec,
                });
            },
            [tS, et, es, ev, e8, tG, eg, tj, ec],
        ),
        t9 = o.useMemo(() => (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [et]),
        t5 = o.useMemo(() => (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.CAPTION), [et]),
        ne = e7 || e$.maxTimestampSec >= (null != (Z = null == (p = e8.current) ? void 0 : p.currentTime) ? Z : 0) + 1,
        nt = o.useMemo(() => null === (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.TRANSCRIPT), [et]);
    return (0, r.jsx)(m.P3F, {
        className: W.videoCont,
        "data-fullscreen": ev,
        tabIndex: -1,
        onMouseEnter: () => {
            ej(!0), tV(!1), (tZ.current = performance.now()), null != tF.current && clearTimeout(tF.current);
        },
        onMouseLeave: () => {
            ej(!1), tV(!1);
        },
        onMouseMove: tU,
        onKeyDown: tU,
        children: (0, r.jsxs)("div", {
            className: l()(W.videoContInnerRelative, {
                [W.videoContInnerRelativePortrait]: "portrait" === eu,
                [W.videoContInnerRelativeLandscape]: "landscape" === eu,
            }),
            children: [
                t7 &&
                    (() => {
                        if (!(0, I.e)({ location: H.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: et,
                                        shouldShow: t7,
                                        sourceQuestContent: ec,
                                    }),
                                    (0, r.jsx)("div", { className: W.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: ti,
                                        subtitle: ts,
                                        icon: m.d4D,
                                        className: W.endScreenPanelRight,
                                        onClick: () => t3(x.jn.VIDEO_MODAL),
                                    }),
                                ],
                            });
                        {
                            var e, t, n;
                            let o = et.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(L.Z, {
                                quest: et,
                                title:
                                    null != (e = null == o ? void 0 : o.messages.videoEndCtaTitle)
                                        ? e
                                        : Q.intl.string(Q.t.Ka526u),
                                subtitle:
                                    null != (t = null == o ? void 0 : o.messages.videoEndCtaSubtitle)
                                        ? t
                                        : Q.intl.string(Q.t.tKMcAg),
                                ctaBtnLabel:
                                    null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel)
                                        ? n
                                        : Q.intl.string(Q.t.iiTtpK),
                                onCTAClick: () => t3(x.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: ec,
                            });
                        }
                    })(),
                (0, r.jsxs)(_.Z, {
                    ref: (e) => {
                        (e8.current = e), (eb.current = e);
                    },
                    autoPlay: ea,
                    playsInline: !0,
                    mediaLayoutType: ev ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: l()({
                        [W.hidden]: t7,
                        [W.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == t9 ? void 0 : t9.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e8.current &&
                            (e8.current.currentTime >= eZ &&
                                (tl.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        e8.current.currentTime,
                                    ),
                                ),
                                eq(e8.current.currentTime + 6 + 2 * Math.random()),
                                tM(e8.current.currentTime)),
                            e8.current.currentTime >= eU &&
                                (eH(e8.current.currentTime + 1),
                                (0, j.qm)(et.id, eD.taskType, e8.current.currentTime),
                                eo(e8.current.currentTime)),
                            eJ(et.id, e8.current.currentTime, e8.current.duration),
                            eI((e8.current.currentTime / e8.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e8.current &&
                            (tM(e8.current.duration + 1),
                            tl.info("[QV] | handleEnded: sending progress update: ".concat(e8.current.duration + 1)),
                            eJ(et.id, e8.current.duration, e8.current.duration)),
                            tL(V.rq.ENDED),
                            eL(!1);
                    },
                    onLoadedData: (e) => {
                        tl.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ek)),
                            ek &&
                                (tv(null != eK.current ? performance.now() - eK.current : null),
                                ew(!1),
                                null != tf.current && (tf.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e8.current &&
                            (tl.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tp)),
                            te(!0),
                            tu !== N.n1.VIDEO_HLS && tW(tc),
                            e0 ? (e8.current.volume = 0) : (e8.current.volume = e1));
                    },
                    onLoadStart: () => {
                        (eK.current = performance.now()),
                            tm(eV),
                            tl.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eK.current));
                    },
                    onPlaying: () => {
                        if (!ez.current) return;
                        let e = performance.now() - ei;
                        tl.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), ty(e), (ez.current = !1);
                    },
                    onWaiting: (e) => {
                        (eX.current = performance.now()),
                            tl.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eX.current)),
                            tb(),
                            eL(!0);
                    },
                    onProgress: (e) => {
                        if (null == e8.current) return;
                        tl.info(
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
                        eB(t);
                    },
                    onCanPlay: t0,
                    onCanPlayThrough: t0,
                    onSeeked: () => {
                        tl.info("[QV] | handleSeeked"), tn(!0);
                    },
                    onAbort: () => tJ(V.CY.ABORT),
                    onError: () => tJ(V.CY.ERROR),
                    onEmptied: () => tJ(V.CY.EMPTIED),
                    onStalled: () => tJ(V.CY.STALLED),
                    onClick: () => {
                        tl.info("[QV] | handleVideoClick"), tz();
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
                                onError: () => tJ(V.CY.SOURCE_ERROR),
                                src: td.url,
                                type: td.mimetype,
                            }),
                    ],
                }),
                (ek || eA) &&
                    eO === V.rq.PLAYING &&
                    (0, r.jsx)(m.$jN, {
                        type: m.$jN.Type.WANDERING_CUBES,
                        className: W.loadingSpinner,
                    }),
                eO === V.rq.PAUSED && e3 === x.yE.LOST_FOCUS && (0, r.jsx)(X, {}),
                ed &&
                    eO !== V.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.P3F, {
                                onClick: () => ef(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: W.transcriptOverlay }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: l()(W.transcriptCont, { [W.transcriptContPortrait]: "portrait" === eu }),
                                style: {
                                    marginBottom: (0, s.to)([t1, t4], (e, t) => "".concat(50 * e + t, "px")),
                                },
                                children: (0, r.jsx)(B.K, {
                                    quest: et,
                                    onClose: () => {
                                        ef(!1), tS(x.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE);
                                    },
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: W.videoFooterContGradient,
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
                        className: l()(W.playPausePopCont, {
                            [W.play]: eO === V.rq.PLAYING,
                            [W.pause]: eO === V.rq.PAUSED,
                        }),
                        children:
                            eO === V.rq.PLAYING
                                ? (0, r.jsx)(m.o1U, { className: W.playPausePopIcon })
                                : (0, r.jsx)(m.fpf, { className: W.playPausePopIcon }),
                    },
                    eO,
                ),
                ep &&
                    null != tr &&
                    (0, r.jsx)(s.animated.div, {
                        className: W.captionContainer,
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
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-lg/semibold",
                            color: "always-white",
                            className: W.captionText,
                            children: tr.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: W.videoFooterCont,
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
                            percent: eP,
                            animate: !0 !== e6.current && !eR,
                            interactionEnabled: e7 && eQ,
                            backgroundColor: tH ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tH ? eM : void 0,
                            duration: null != (ee = null == (E = e8.current) ? void 0 : E.duration) ? ee : 1,
                            maxSeekableTime: tH && eQ ? ta : void 0,
                            onClick: (e) => {
                                tW(e), eO === V.rq.ENDED && tL(V.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tY();
                            },
                            onScrubForward: () => {
                                tQ();
                            },
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: W.videoControlsCont,
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
                                playerState: eO,
                                animSpring: t1,
                                visible: tH,
                                seekForwardEnabled: ne,
                                hideCaptionBtn: null == t5,
                                hideTranscriptBtn: nt,
                                handlePlaybackBtnClick: tz,
                                handleTranscriptBtnClick: () => {
                                    ef(!ed),
                                        tS(x.jn.VIDEO_MODAL, ed ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    em(!ep),
                                        tS(
                                            x.jn.VIDEO_MODAL,
                                            ep ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ev;
                                    tl.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, O.fn)(null == (e = e8.current) ? void 0 : e.parentNode, e8.current);
                                    t && null != n
                                        ? ((0, O.Dj)(n), n.addEventListener(O.NO, tG), tj(!0))
                                        : t || null == n || (n.removeEventListener(O.NO, tG), tj(!1), (0, O.Pr)(n)),
                                        eg(t);
                                },
                                handleSeekBackBtnClick: tY,
                                handleSeekForwardBtnClick: tQ,
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
