n.d(t, { Z: () => J }), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(803948),
    c = n(524825),
    u = n(754700),
    d = n(670081),
    m = n(442837),
    p = n(780384),
    f = n(481060),
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
    R = n(208109),
    P = n(117242),
    N = n(720293),
    I = n(566078),
    k = n(602667),
    A = n(881773),
    w = n(350312),
    L = n(355243),
    M = n(106743),
    V = n(223418),
    B = n(604162),
    Z = n(747717),
    F = n(281055),
    U = n(435585),
    q = n(46140),
    Y = n(981631),
    H = n(217702),
    Q = n(388032),
    z = n(430799);
let G = new Set([Y.IyS.FIVE_G, Y.IyS.FOUR_G, Y.IyS.UNKNOWN]),
    K = {
        tension: 250,
        friction: 5,
        clamp: !0,
    };
function W() {
    let e = (0, m.e7)([O.Z], () => O.Z.getState().theme);
    return (0, r.jsx)("div", {
        className: z.pauseText,
        style: { background: (0, p.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
        children: (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: Q.intl.string(Q.t.U7Xrb2),
        }),
    });
}
function X(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: o } = e,
        a = l.useMemo(() => (0, N.z0)(t, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(k.A, {
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
                      className: i()(z.stillFrameImageCard, { [z.stillFrameImageCardHidden]: !n }),
                  }),
          });
}
function $(e) {
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
                (0, r.jsx)(Z.Z, { color: "#747783" }),
                (0, r.jsx)(o, {
                    size: "md",
                    color: c ? "#FFFFFF" : "#B5BAC1",
                    className: z.endScreenIcon,
                }),
            ],
        }),
    });
}
function J(e) {
    var t, n, o, p, O, k, Z;
    let {
            quest: J,
            videoTask: ee,
            videoSessionId: et,
            onOptimisticProgressUpdate: en,
            autoplay: er,
            parentTransitionState: el,
            performanceClockStartTime: eo,
            onClose: ei,
            sourceQuestContent: ea,
            orientation: es,
        } = e,
        ec = (0, x.km)((e) => e.transcriptEnabled),
        eu = (0, x.km)((e) => e.setTranscriptEnabled),
        ed = (0, x.km)((e) => e.captionEnabled),
        em = (0, x.km)((e) => e.setCaptionEnabled),
        ep = (0, x.km)((e) => e.fullScreenEnabled),
        ef = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ev, focusedChanged: eE } = (0, F.xU)(),
        { visible: eg, visibleChanged: eO, targetRef: eb } = (0, F.Yy)(),
        [eC, eS] = l.useState(!0 === er ? V.rq.PLAYING : V.rq.PAUSED),
        [eh, e_] = l.useState(!1),
        [ej, ey] = l.useState(!1),
        ex = (0, _.il)(J),
        [eT, eD] = l.useState(ex.percentComplete),
        [eR, eP] = l.useState(!1),
        [eN, eI] = l.useState(!0),
        [ek, eA] = l.useState(!1),
        [ew, eL] = l.useState([]),
        [eM, eV] = l.useState(b.Z.getEffectiveConnectionSpeed()),
        [eB, eZ] = l.useState(0),
        [eF, eU] = l.useState(0),
        [eq, eY] = l.useState(!1),
        [eH, eQ] = l.useState(!1),
        ez = l.useRef(!0),
        eG = l.useRef(null),
        eK = l.useRef(null),
        eW = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[J.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10,
                  };
        }, c.X),
        eX = (0, x.km)((e) => e.setVideoProgress),
        e$ = (0, x.km)((e) => e.muted),
        eJ = (0, x.km)((e) => e.volume),
        e0 = (0, m.e7)([E.Z], () => E.Z.useReducedMotion),
        e1 = (0, l.useRef)(null),
        e2 = (0, l.useRef)(null),
        e8 = l.useRef(!0),
        e4 = (null == (t = J.userStatus) ? void 0 : t.completedAt) != null,
        e6 = (0, x.km)((e) => e.transcript),
        [e7, e3] = l.useState(null),
        [e9, e5] = l.useState(!1),
        [te, tt] = l.useState(!1),
        [tn, tr] = l.useState(null),
        tl = e4
            ? null != (O = null == (n = e1.current) ? void 0 : n.duration)
                ? O
                : 0
            : Math.max(eW.maxTimestampSec, ex.progressSeconds),
        to = l.useMemo(
            () =>
                (0, D.T)({
                    quest: J,
                    location: q.dr.VIDEO_MODAL,
                }),
            [J],
        ),
        { title: ti, subtitle: ta } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : Q.intl.string(Q.t.iiTtpK),
                a =
                    null !=
                    (r =
                        null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel)
                            ? n
                            : null == o
                              ? void 0
                              : o.messages.videoEndCtaSubtitle)
                        ? r
                        : Q.intl.string(Q.t.mxaHf3),
                s = (0, _.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : Q.intl.string(Q.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a,
            };
        })(J),
        ts = e4
            ? eW.timestampSec >= eW.duration
                ? 0
                : eW.timestampSec
            : Math.max(eW.timestampSec, ex.progressSeconds);
    (0, v.Ng)(() => {
        e8.current &&
            ((e8.current = !1),
            eV(b.Z.getEffectiveConnectionSpeed()),
            e4 && eW.timestampSec >= eW.duration && eX(J.id, 0, eW.duration));
    });
    let {
            videoVariant: tc,
            videoAsset: tu,
            hlsRef: td,
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
                                ? N.n1.VIDEO_HLS
                                : G.has(n) || null == d.videoLowRes
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
        })(J, e1, eM, ts),
        tm = (0, N.CC)(tc),
        {
            trackQuestVideoLoadingStarted: tp,
            trackQuestVideoLoadingEnded: tf,
            trackQuestVideoProgressed: tv,
            trackQuestVideoResumed: tE,
            trackQuestVideoPaused: tg,
            trackQuestVideoFocusChange: tO,
            trackQuestContentClick: tb,
            trackQuestVideoBufferingStarted: tC,
            trackQuestVideoBufferingEnded: tS,
            trackWatchTimeAnalytics: th,
            trackQuestVideoTimeToFirstFrame: t_,
            trackQuestVideoFullscreenChanged: tj,
            trackQuestVideoError: ty,
            trackQuestVideoVolumeChanged: tx,
        } = (0, U.Z)({
            quest: J,
            videoRef: e1,
            hlsRef: td,
            videoSessionId: et,
            videoAssetId: tm,
            sourceQuestContent: ea,
            logger: to,
        }),
        tT = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e1.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tD } = (0, P.Z)({
            getCurrentVideoTime: tT,
            isPlaying: eC === V.rq.PLAYING,
            isMetadataLoaded: e9,
            isInitialSeekComplete: te,
            onAnalytics: th,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000,
        }),
        tR = l.useCallback(
            (e) => {
                if ((to.info("[QV] | updatePlayerState | playerState: ".concat(e)), eS(e), null != e1.current))
                    switch (e) {
                        case V.rq.PLAYING:
                            e1.current.paused && tE(e7), e3(null), e1.current.play();
                            break;
                        case V.rq.PAUSED:
                            e1.current.paused || tD(), e1.current.pause(), (ez.current = !1);
                            break;
                        case V.rq.ENDED:
                            tD(), eu(!1);
                    }
            },
            [tE, e7, tD, eu, to],
        );
    l.useEffect(() => {
        tg(e7);
    }, [e7, tg]),
        l.useEffect(() => {
            eE && tO(ev, eC);
        }, [ev, eE, eC, tO]);
    let tP = l.useCallback(
        (e) => {
            var t;
            e4 ||
                (null == (t = J.userStatus) ? void 0 : t.enrolledAt) == null ||
                (to.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, _.FI)(J, e)),
                tv();
        },
        [e4, J, to, tv],
    );
    l.useEffect(() => {
        (el !== f.Dvm.HIDDEN &&
            el !== f.Dvm.EXITING &&
            el !== f.Dvm.EXITED &&
            (null == el || !eO || eg || e4) &&
            (!eE || ev || e4)) ||
            null == e1.current ||
            eC !== V.rq.PLAYING ||
            (to.info(
                "[QV] | Pausing video | playerState: "
                    .concat(eC, ", parentTransitionState: ")
                    .concat(el, ", visible: ")
                    .concat(eg, ", focused: ")
                    .concat(ev, ", isQuestCompleted: ")
                    .concat(e4),
            ),
            tR(V.rq.PAUSED),
            e4 || e3(y.yE.LOST_FOCUS));
    }, [el, ev, eE, eg, eO, eC, e4, tR, tP, to]);
    let [tN, tI] = l.useState(!1),
        tk = l.useRef(null),
        tA = l.useRef(performance.now()),
        tw = l.useCallback(() => {
            null != tk.current && clearTimeout(tk.current),
                eC === V.rq.PLAYING &&
                    (tk.current = setTimeout(
                        () => {
                            eC === V.rq.PLAYING && tI(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tA.current)),
                    ));
        }, [eC]),
        tL = () => {
            tI(!1), (tA.current = performance.now()), tw();
        };
    l.useEffect(() => {
        if (eC !== V.rq.PLAYING) {
            tI(!1), null != tk.current && clearTimeout(tk.current);
            return;
        }
        return (
            tw(),
            () => {
                null != tk.current && clearTimeout(tk.current);
            }
        );
    }, [eC, tw]);
    let tM = !tN && (ej || eh || eC === V.rq.ENDED),
        tV = l.useCallback(() => {
            var e;
            to.info("[QV] | handleFullScreenExit");
            let t = (0, S.fn)(null == (e = e1.current) ? void 0 : e.parentNode, e1.current);
            null == t || (0, S.rB)(t) || (t.removeEventListener(S.NO, tV), ef(!1), tj(!1));
        }, [ef, to, tj]),
        tB = () => {
            if (null == e1.current) return;
            let e = Math.max(e1.current.currentTime - 10, 0);
            to.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)),
                tF(e),
                eC === V.rq.ENDED && tR(V.rq.PAUSED),
                tb(y.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD);
        },
        tZ = () => {
            if (null == e1.current || !t8) return;
            let e = Math.min(e1.current.currentTime + 10, tl);
            to.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)),
                tF(e),
                eC !== V.rq.ENDED && e >= e1.current.duration && tR(V.rq.ENDED),
                tb(y.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e1.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tV);
        };
    }, [tV]);
    let tF = l.useCallback(
            (e) => {
                null != e1.current &&
                    (to.info("[QV] | seekTimeline | timeSec: ".concat(e)),
                    tD(),
                    eP(!0),
                    tt(!1),
                    (e1.current.currentTime = e),
                    eX(J.id, e, e1.current.duration));
            },
            [e1, eX, J.id, tD, to],
        ),
        tU = () => {
            if (null != e1.current)
                switch ((to.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eC)), eC)) {
                    case V.rq.ENDED:
                        tF(0), tR(V.rq.PLAYING);
                        break;
                    case V.rq.PLAYING:
                        tR(V.rq.PAUSED), e3(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tR(V.rq.PLAYING);
                }
        },
        tq = (e) => {
            tr(e);
        },
        tY = (e) => {
            tr((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tH = l.useCallback(() => {
            if (
                null == e1.current ||
                (to.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e1.current.textTracks.length)),
                0 === e1.current.textTracks.length)
            )
                return;
            let e = e1.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, B.JC)(n) && ((n.id = "cue-".concat(t)), (n.onenter = () => tq(n)), (n.onexit = () => tY(n)));
                }
        }, [e1, to]);
    l.useEffect(() => {
        if (null == e2.current) return;
        let e = e2.current;
        return (
            e.addEventListener("load", tH),
            () => {
                null != e && e.removeEventListener("load", tH);
            }
        );
    }, [e2, tH]);
    let tQ = l.useCallback(
            (e) => {
                var t;
                to.info(
                    "[QV] | logVideoError: errorType: "
                        .concat(e, ", videoProgress: ")
                        .concat(null == (t = e1.current) ? void 0 : t.currentTime, ", videoAssetId: ")
                        .concat(tm, ", connectionSpeed: ")
                        .concat(eM),
                ),
                    ty(e);
            },
            [eM, ty, e1, tm, to],
        ),
        tz = (e) => {
            to.info("[QV] | handleCanPlay: playerState: ".concat(eC)),
                null != e1.current &&
                    eC === V.rq.PLAYING &&
                    (to.info("[QV] | handleCanPlay: did NOT early return"),
                    eN && (to.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eN)), eI(!1)),
                    ek &&
                        (to.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ek)),
                        tS(null != eK.current ? performance.now() - eK.current : null),
                        eA(!1)),
                    to.info("[QV] | handleCanPlay: updating player state to playing"),
                    tR(V.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!eR) return;
        let e = setTimeout(() => {
            eP(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eR]);
    let [{ controlBarAnimSpring: tG }, tK] = (0, f.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                eQ(!1);
            },
            onRest: (e) => {
                1 === e.value && eQ(!0);
            },
        })),
        tW = (0, l.useRef)(null),
        [{ captionHeightSpring: tX }, t$] = (0, f.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: K,
        }));
    l.useEffect(() => {
        var e, t;
        return (
            t$({
                captionHeightSpring:
                    ed && null != tn && null != (t = null == (e = tW.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e0,
            }),
            () => {
                tX.stop();
            }
        );
    }, [ed, t$, e0, tn, tX]),
        l.useEffect(
            () => (
                tK({
                    controlBarAnimSpring: tM || eq ? 1 : 0,
                    immediate: e0,
                }),
                () => {
                    tG.stop();
                }
            ),
            [tM, tK, e0, eq, tG],
        );
    let tJ = eC === V.rq.ENDED,
        t0 = l.useCallback(
            async (e) => {
                if (ep) {
                    var t;
                    let e = (0, S.fn)(null == (t = e1.current) ? void 0 : t.parentNode, e1.current);
                    null != e && (e.removeEventListener(S.NO, tV), (0, S.Pr)(e), ef(!1), tj(!1));
                }
                if ((tb(e, h.jZ.LEARN_MORE), J.id === q.V6))
                    return void window.open(C.Z.getArticleURL(Y.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ei) {
                    let e = I.r.build(J.config).application.link;
                    (await (0, B.qP)(e)) && ei();
                }
                (0, _.nc)(J, {
                    content: e,
                    ctaContent: h.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: ea,
                });
            },
            [tb, J, ei, ep, e1, tV, ef, tj, ea],
        ),
        t1 = l.useMemo(() => (0, N.z0)(J, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [J]),
        t2 = l.useMemo(() => (0, N.z0)(J, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.CAPTION), [J]),
        t8 = e4 || eW.maxTimestampSec >= (null != (k = null == (o = e1.current) ? void 0 : o.currentTime) ? k : 0) + 1,
        t4 = l.useMemo(() => null === (0, N.z0)(J, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.TRANSCRIPT), [J]);
    return (0, r.jsx)(f.P3F, {
        className: z.videoCont,
        "data-fullscreen": ep,
        tabIndex: -1,
        onMouseEnter: () => {
            e_(!0), tI(!1), (tA.current = performance.now()), null != tk.current && clearTimeout(tk.current);
        },
        onMouseLeave: () => {
            e_(!1), tI(!1);
        },
        onMouseMove: tL,
        onKeyDown: tL,
        children: (0, r.jsxs)("div", {
            className: i()(z.videoContInnerRelative, {
                [z.videoContInnerRelativePortrait]: "portrait" === es,
                [z.videoContInnerRelativeLandscape]: "landscape" === es,
            }),
            children: [
                tJ &&
                    (() => {
                        if (!(0, R.e)({ location: q.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(X, {
                                        quest: J,
                                        shouldShow: tJ,
                                        sourceQuestContent: ea,
                                    }),
                                    (0, r.jsx)("div", { className: z.videoContOverlay }),
                                    (0, r.jsx)($, {
                                        title: ti,
                                        subtitle: ta,
                                        icon: f.d4D,
                                        className: z.endScreenPanelRight,
                                        onClick: () => t0(y.jn.VIDEO_MODAL),
                                    }),
                                ],
                            });
                        {
                            var e, t, n;
                            let l = J.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(w.Z, {
                                quest: J,
                                title:
                                    null != (e = null == l ? void 0 : l.messages.videoEndCtaTitle)
                                        ? e
                                        : Q.intl.string(Q.t.Ka526u),
                                subtitle:
                                    null != (t = null == l ? void 0 : l.messages.videoEndCtaSubtitle)
                                        ? t
                                        : Q.intl.string(Q.t.tKMcAg),
                                ctaBtnLabel:
                                    null != (n = null == l ? void 0 : l.messages.videoEndCtaButtonLabel)
                                        ? n
                                        : Q.intl.string(Q.t.iiTtpK),
                                onCTAClick: () => t0(y.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: ea,
                            });
                        }
                    })(),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (e1.current = e), (eb.current = e);
                    },
                    autoPlay: er,
                    playsInline: !0,
                    mediaLayoutType: ep ? H.hV.STATIC : H.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: tJ,
                        [z.videoInner]: !0,
                    }),
                    controls: !1,
                    poster: null == t1 ? void 0 : t1.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e1.current &&
                            (e1.current.currentTime >= eB &&
                                (to.info(
                                    "[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(
                                        e1.current.currentTime,
                                    ),
                                ),
                                eZ(e1.current.currentTime + 6 + 2 * Math.random()),
                                tP(e1.current.currentTime)),
                            e1.current.currentTime >= eF &&
                                (eU(e1.current.currentTime + 1),
                                (0, j.qm)(J.id, ex.taskType, e1.current.currentTime),
                                en(e1.current.currentTime)),
                            eX(J.id, e1.current.currentTime, e1.current.duration),
                            eD((e1.current.currentTime / e1.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e1.current &&
                            (tP(e1.current.duration + 1),
                            to.info("[QV] | handleEnded: sending progress update: ".concat(e1.current.duration + 1)),
                            eX(J.id, e1.current.duration, e1.current.duration)),
                            tR(V.rq.ENDED),
                            eA(!1);
                    },
                    onLoadedData: (e) => {
                        to.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eN)),
                            eN &&
                                (tf(null != eG.current ? performance.now() - eG.current : null),
                                eI(!1),
                                null != td.current && (td.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e1.current &&
                            (to.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tm)),
                            e5(!0),
                            tc !== N.n1.VIDEO_HLS && tF(ts),
                            e$ ? (e1.current.volume = 0) : (e1.current.volume = eJ));
                    },
                    onLoadStart: () => {
                        (eG.current = performance.now()),
                            tp(eM),
                            to.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eG.current));
                    },
                    onPlaying: () => {
                        if (!ez.current) return;
                        let e = performance.now() - eo;
                        to.info("[QV] | \u23F0 Video FCP: ".concat(e, "ms")), t_(e), (ez.current = !1);
                    },
                    onWaiting: (e) => {
                        (eK.current = performance.now()),
                            to.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eK.current)),
                            tC(),
                            eA(!0);
                    },
                    onProgress: (e) => {
                        if (null == e1.current) return;
                        to.info(
                            "[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e1.current.buffered.length),
                        );
                        let t = [];
                        for (let e = 0; e < e1.current.buffered.length; e++) {
                            let n = e1.current.buffered.start(e),
                                r = e1.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e1.current.duration,
                                    size: (r - n) / e1.current.duration,
                                });
                        }
                        eL(t);
                    },
                    onCanPlay: tz,
                    onCanPlayThrough: tz,
                    onSeeked: () => {
                        to.info("[QV] | handleSeeked"), tt(!0);
                    },
                    onAbort: () => tQ(V.CY.ABORT),
                    onError: () => tQ(V.CY.ERROR),
                    onEmptied: () => tQ(V.CY.EMPTIED),
                    onStalled: () => tQ(V.CY.STALLED),
                    onClick: () => {
                        to.info("[QV] | handleVideoClick"), tU();
                    },
                    crossOrigin: "anonymous",
                    children: [
                        null != t2 &&
                            (0, r.jsx)("track", {
                                ref: e2,
                                src: t2.url,
                                label: "English",
                                kind: "captions",
                                srcLang: "en",
                                default: !0,
                            }),
                        null != tu &&
                            tc !== N.n1.VIDEO_HLS &&
                            (0, r.jsx)("source", {
                                onError: () => tQ(V.CY.SOURCE_ERROR),
                                src: tu.url,
                                type: tu.mimetype,
                            }),
                    ],
                }),
                (eN || ek) &&
                    eC === V.rq.PLAYING &&
                    (0, r.jsx)(f.$jN, {
                        type: f.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner,
                    }),
                eC === V.rq.PAUSED && e7 === y.yE.LOST_FOCUS && (0, r.jsx)(W, {}),
                ec &&
                    eC !== V.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.P3F, {
                                onClick: () => eu(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)("div", { className: z.transcriptOverlay }),
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: i()(z.transcriptCont, { [z.transcriptContPortrait]: "portrait" === es }),
                                style: {
                                    marginBottom: (0, s.to)([tG, tX], (e, t) => "".concat(50 * e + t, "px")),
                                },
                                children: (0, r.jsx)(M.K, {
                                    quest: J,
                                    onClose: () => {
                                        eu(!1), tb(y.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE);
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
                                tG.to({
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
                            [z.play]: eC === V.rq.PLAYING,
                            [z.pause]: eC === V.rq.PAUSED,
                        }),
                        children:
                            eC === V.rq.PLAYING
                                ? (0, r.jsx)(f.o1U, { className: z.playPausePopIcon })
                                : (0, r.jsx)(f.fpf, { className: z.playPausePopIcon }),
                    },
                    eC,
                ),
                ed &&
                    null != tn &&
                    (0, r.jsx)(s.animated.div, {
                        className: z.captionContainer,
                        ref: tW,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tG.to({
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
                            children: tn.text,
                        }),
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: z.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tG.to({
                                    range: [0, 1],
                                    output: [0, 25],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tG.to({
                                    range: [0, 1],
                                    output: [0, 25],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                        height: (0, s.to)(
                            [
                                tG.to({
                                    range: [0, 1],
                                    output: [0, 50],
                                }),
                            ],
                            (e) => "".concat(e, "px"),
                        ),
                    },
                    children: [
                        (0, r.jsx)(L.Z, {
                            percent: eT,
                            animate: !0 !== e8.current && !eR,
                            interactionEnabled: e4 && eH,
                            backgroundColor: tM ? void 0 : "rgba(0, 0, 0, 0.0)",
                            preloadedBuffers: tM ? ew : void 0,
                            duration: null != (Z = null == (p = e1.current) ? void 0 : p.duration) ? Z : 1,
                            maxSeekableTime: tM && eH ? tl : void 0,
                            onClick: (e) => {
                                tF(e), eC === V.rq.ENDED && tR(V.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tB();
                            },
                            onScrubForward: () => {
                                tZ();
                            },
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: z.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tG.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tG.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(e * e * 12, "px"),
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tG.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => (e < 0.3 ? "none" : "auto"),
                                ),
                            },
                            onFocus: () => ey(!0),
                            onBlur: () => ey(!1),
                            children: (0, r.jsx)(A.Z, {
                                videoRef: e1,
                                videoTask: ee,
                                playerState: eC,
                                animSpring: tG,
                                visible: tM,
                                seekForwardEnabled: t8,
                                hideCaptionBtn: null == t2,
                                hideTranscriptBtn: t4,
                                handlePlaybackBtnClick: tU,
                                handleTranscriptBtnClick: () => {
                                    ec ||
                                        (null != e6 &&
                                            e6.questId === J.id &&
                                            e6.fetchStatus !== x.iF.NONE &&
                                            e6.fetchStatus !== x.iF.FAILURE) ||
                                        (0, j.lL)(J, u.X.WATCH_VIDEO),
                                        eu(!ec),
                                        tb(y.jn.VIDEO_MODAL, ec ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    em(!ed),
                                        tb(
                                            y.jn.VIDEO_MODAL,
                                            ed ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE,
                                        );
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ep;
                                    to.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
                                    let n = (0, S.fn)(null == (e = e1.current) ? void 0 : e.parentNode, e1.current);
                                    t && null != n
                                        ? ((0, S.Dj)(n), n.addEventListener(S.NO, tV), tj(!0))
                                        : t || null == n || (n.removeEventListener(S.NO, tV), tj(!1), (0, S.Pr)(n)),
                                        ef(t);
                                },
                                handleSeekBackBtnClick: tB,
                                handleSeekForwardBtnClick: tZ,
                                handleControlBarPendingInteraction: eY,
                                onVolumeChange: tx,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
