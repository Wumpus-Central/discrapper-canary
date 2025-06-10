n.d(t, { Z: () => J }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(524979),
    c = n(94171),
    u = n(754700),
    d = n(670081),
    m = n(442837),
    p = n(780384),
    f = n(481060),
    v = n(493773),
    g = n(607070),
    b = n(70097),
    E = n(210887),
    O = n(866960),
    h = n(63063),
    C = n(228488),
    S = n(617136),
    j = n(272008),
    y = n(497505),
    _ = n(918701),
    x = n(184299),
    D = n(347382),
    T = n(5881),
    P = n(208109),
    N = n(117242),
    k = n(720293),
    I = n(566078),
    w = n(602667),
    A = n(881773),
    L = n(350312),
    R = n(355243),
    M = n(106743),
    V = n(223418),
    B = n(604162),
    F = n(747717),
    Z = n(281055),
    q = n(435585),
    U = n(46140),
    Q = n(981631),
    G = n(217702),
    Y = n(388032),
    z = n(844136);
let H = new Set([Q.IyS.FIVE_G, Q.IyS.FOUR_G, Q.IyS.UNKNOWN]),
    W = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function K() {
    let e = (0, m.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: z.pauseText,
        style: { background: (0, p.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(f.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Y.intl.string(Y.t.U7Xrb2)
        })
    });
}
function X(e) {
    let { quest: t, shouldShow: n } = e,
        o = l.useMemo(() => (0, k.z0)(t, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.THUMBNAIL), [t]);
    return null == o
        ? null
        : (0, r.jsx)(w.A, {
              questOrQuests: t,
              questContent: y.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: o.url,
                      alt: 'Video thumbnail',
                      className: i()(z.stillFrameImageCard, { [z.stillFrameImageCardHidden]: !n })
                  })
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
        children: (0, r.jsxs)('div', {
            className: z.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: z.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-md/semibold',
                            className: z.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-sm/normal',
                            className: z.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(F.Z, { color: '#747783' }),
                (0, r.jsx)(o, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: z.endScreenIcon
                })
            ]
        })
    });
}
function J(e) {
    var t, n, o, p, E, w, F;
    let { quest: J, videoSessionId: ee, onOptimisticProgressUpdate: et, autoplay: en, parentTransitionState: er, performanceClockStartTime: el, onClose: eo } = e,
        ei = (0, x.km)((e) => e.transcriptEnabled),
        ea = (0, x.km)((e) => e.setTranscriptEnabled),
        es = (0, x.km)((e) => e.captionEnabled),
        ec = (0, x.km)((e) => e.setCaptionEnabled),
        eu = (0, x.km)((e) => e.fullScreenEnabled),
        ed = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: em, focusedChanged: ep } = (0, Z.xU)(),
        { visible: ef, visibleChanged: ev, targetRef: eg } = (0, Z.Yy)(),
        [eb, eE] = l.useState(!0 === en ? V.rq.PLAYING : V.rq.PAUSED),
        [eO, eh] = l.useState(!1),
        [eC, eS] = l.useState(!1),
        ej = (0, _.il)(J),
        [ey, e_] = l.useState(ej.percentComplete),
        [ex, eD] = l.useState(!1),
        [eT, eP] = l.useState(!0),
        [eN, ek] = l.useState(!1),
        [eI, ew] = l.useState([]),
        [eA, eL] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eR, eM] = l.useState(0),
        [eV, eB] = l.useState(0),
        [eF, eZ] = l.useState(!1),
        [eq, eU] = l.useState(!1),
        eQ = l.useRef(!0),
        eG = l.useRef(null),
        eY = l.useRef(null),
        ez = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[J.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eH = (0, x.km)((e) => e.setVideoProgress),
        eW = (0, x.km)((e) => e.muted),
        eK = (0, x.km)((e) => e.volume),
        eX = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        e$ = (0, l.useRef)(null),
        eJ = (0, l.useRef)(null),
        e0 = l.useRef(!0),
        e1 = (null == (t = J.userStatus) ? void 0 : t.completedAt) != null,
        e2 = (0, x.km)((e) => e.transcript),
        [e8, e6] = l.useState(null),
        [e4, e7] = l.useState(!1),
        [e3, e9] = l.useState(!1),
        [e5, te] = l.useState(null),
        tt = e1 ? (null != (E = null == (n = e$.current) ? void 0 : n.duration) ? E : 0) : Math.max(ez.maxTimestampSec, ej.progressSeconds),
        tn = l.useMemo(
            () =>
                (0, T.T)({
                    quest: J,
                    location: U.dr.VIDEO_MODAL
                }),
            [J]
        ),
        { title: tr, subtitle: tl } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : Y.intl.string(Y.t.iiTtpK),
                a = null != (r = null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? n : null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? r : Y.intl.string(Y.t.mxaHf3),
                s = (0, _.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : Y.intl.string(Y.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a
            };
        })(J),
        to = e1 ? (ez.timestampSec >= ez.duration ? 0 : ez.timestampSec) : Math.max(ez.timestampSec, ej.progressSeconds);
    (0, v.Ng)(() => {
        e0.current && ((e0.current = !1), eL(O.Z.getEffectiveConnectionSpeed()), e1 && ez.timestampSec >= ez.duration && eH(J.id, 0, ez.duration));
    });
    let {
            videoVariant: ti,
            videoAsset: ta,
            hlsRef: ts
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, D.z)(e, U.dr.VIDEO_MODAL),
                d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                m = l.useMemo(() => (null != d ? (c && a.ZP.isSupported() && null != d.videoHls ? k.n1.VIDEO_HLS : H.has(n) || null == d.videoLowRes ? k.n1.VIDEO : k.n1.VIDEO_LOW_RES) : null), [d, n, c]),
                p = l.useMemo(() => (null != m ? (0, k.z0)(e, u.X.WATCH_VIDEO, m, k.O.VIDEO) : null), [e, m]),
                f = () => {
                    null != s.current && 800000 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (m !== k.n1.VIDEO_HLS || null == p || null == t.current || i.current) return;
                    (s.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1
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
                    hlsRef: s
                }
            );
        })(J, e$, eA, to),
        tc = (0, k.CC)(ti),
        { trackQuestVideoLoadingStarted: tu, trackQuestVideoLoadingEnded: td, trackQuestVideoProgressed: tm, trackQuestVideoResumed: tp, trackQuestVideoPaused: tf, trackQuestVideoFocusChange: tv, trackQuestContentClick: tg, trackQuestVideoBufferingStarted: tb, trackQuestVideoBufferingEnded: tE, trackWatchTimeAnalytics: tO, trackQuestVideoTimeToFirstFrame: th, trackQuestVideoFullscreenChanged: tC, trackQuestVideoError: tS, trackQuestVideoVolumeChanged: tj } = (0, q.Z)(J, e$, ts, ee, tc),
        ty = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e$.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: t_ } = (0, N.Z)({
            getCurrentVideoTime: ty,
            isPlaying: eb === V.rq.PLAYING,
            isMetadataLoaded: e4,
            isInitialSeekComplete: e3,
            onAnalytics: tO,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tx = l.useCallback(
            (e) => {
                if ((tn.info('[QV] | updatePlayerState | playerState: '.concat(e)), eE(e), null != e$.current))
                    switch (e) {
                        case V.rq.PLAYING:
                            e$.current.paused && tp(e8), e6(null), e$.current.play();
                            break;
                        case V.rq.PAUSED:
                            e$.current.paused || t_(), e$.current.pause(), (eQ.current = !1);
                            break;
                        case V.rq.ENDED:
                            t_(), ea(!1);
                    }
            },
            [tp, e8, t_, ea, tn]
        );
    l.useEffect(() => {
        tf(e8);
    }, [e8, tf]),
        l.useEffect(() => {
            ep && tv(em, eb);
        }, [em, ep, eb, tv]);
    let tD = l.useCallback(
        (e) => {
            var t;
            e1 || (null == (t = J.userStatus) ? void 0 : t.enrolledAt) == null || (tn.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, _.FI)(J, e)), tm();
        },
        [e1, J, tn, tm]
    );
    l.useEffect(() => {
        (er !== f.Dvm.HIDDEN && er !== f.Dvm.EXITING && er !== f.Dvm.EXITED && (null == er || !ev || ef || e1) && (!ep || em || e1)) || null == e$.current || eb !== V.rq.PLAYING || (tn.info('[QV] | Pausing video | playerState: '.concat(eb, ', parentTransitionState: ').concat(er, ', visible: ').concat(ef, ', focused: ').concat(em, ', isQuestCompleted: ').concat(e1)), tx(V.rq.PAUSED), e1 || e6(y.yE.LOST_FOCUS));
    }, [er, em, ep, ef, ev, eb, e1, tx, tD, tn]);
    let [tT, tP] = l.useState(!1),
        tN = l.useRef(null),
        tk = l.useRef(performance.now()),
        tI = l.useCallback(() => {
            null != tN.current && clearTimeout(tN.current),
                eb === V.rq.PLAYING &&
                    (tN.current = setTimeout(
                        () => {
                            eb === V.rq.PLAYING && tP(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tk.current))
                    ));
        }, [eb]),
        tw = () => {
            tP(!1), (tk.current = performance.now()), tI();
        };
    l.useEffect(() => {
        if (eb !== V.rq.PLAYING) {
            tP(!1), null != tN.current && clearTimeout(tN.current);
            return;
        }
        return (
            tI(),
            () => {
                null != tN.current && clearTimeout(tN.current);
            }
        );
    }, [eb, tI]);
    let tA = !tT && (eC || eO || eb === V.rq.ENDED),
        tL = l.useCallback(() => {
            var e;
            tn.info('[QV] | handleFullScreenExit');
            let t = (0, C.fn)(null == (e = e$.current) ? void 0 : e.parentNode, e$.current);
            null == t || (0, C.rB)(t) || (t.removeEventListener(C.NO, tL), ed(!1), tC(!1));
        }, [ed, tn, tC]),
        tR = () => {
            if (null == e$.current) return;
            let e = Math.max(e$.current.currentTime - 10, 0);
            tn.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tV(e), eb === V.rq.ENDED && tx(V.rq.PAUSED), tg(y.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD);
        },
        tM = () => {
            if (null == e$.current || !t0) return;
            let e = Math.min(e$.current.currentTime + 10, tt);
            tn.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tV(e), eb !== V.rq.ENDED && e >= e$.current.duration && tx(V.rq.ENDED), tg(y.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e$.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, tL);
        };
    }, [tL]);
    let tV = l.useCallback(
            (e) => {
                null != e$.current && (tn.info('[QV] | seekTimeline | timeSec: '.concat(e)), t_(), eD(!0), e9(!1), (e$.current.currentTime = e), eH(J.id, e, e$.current.duration));
            },
            [e$, eH, J.id, t_, tn]
        ),
        tB = () => {
            if (null != e$.current)
                switch ((tn.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eb)), eb)) {
                    case V.rq.ENDED:
                        tV(0), tx(V.rq.PLAYING);
                        break;
                    case V.rq.PLAYING:
                        tx(V.rq.PAUSED), e6(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tx(V.rq.PLAYING);
                }
        },
        tF = (e) => {
            te(e);
        },
        tZ = (e) => {
            te((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tq = l.useCallback(() => {
            if (null == e$.current || (tn.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(e$.current.textTracks.length)), 0 === e$.current.textTracks.length)) return;
            let e = e$.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, B.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tF(n)), (n.onexit = () => tZ(n)));
                }
        }, [e$, tn]);
    l.useEffect(() => {
        if (null == eJ.current) return;
        let e = eJ.current;
        return (
            e.addEventListener('load', tq),
            () => {
                null != e && e.removeEventListener('load', tq);
            }
        );
    }, [eJ, tq]);
    let tU = l.useCallback(
            (e) => {
                var t;
                tn.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = e$.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tc, ', connectionSpeed: ')
                        .concat(eA)
                ),
                    tS(e, eA);
            },
            [eA, tS, e$, tc, tn]
        ),
        tQ = (e) => {
            tn.info('[QV] | handleCanPlay: playerState: '.concat(eb)), null != e$.current && eb === V.rq.PLAYING && (tn.info('[QV] | handleCanPlay: did NOT early return'), eT && (tn.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eT)), eP(!1)), eN && (tn.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eN)), tE(eA, null != eY.current ? performance.now() - eY.current : null), ek(!1)), tn.info('[QV] | handleCanPlay: updating player state to playing'), tx(V.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!ex) return;
        let e = setTimeout(() => {
            eD(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ex]);
    let [{ controlBarAnimSpring: tG }, tY] = (0, f.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                eU(!1);
            },
            onRest: (e) => {
                1 === e.value && eU(!0);
            }
        })),
        tz = (0, l.useRef)(null),
        [{ captionHeightSpring: tH }, tW] = (0, f.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: W
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tW({
                captionHeightSpring: es && null != e5 && null != (t = null == (e = tz.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: eX
            }),
            () => {
                tH.stop();
            }
        );
    }, [es, tW, eX, e5, tH]),
        l.useEffect(
            () => (
                tY({
                    controlBarAnimSpring: tA || eF ? 1 : 0,
                    immediate: eX
                }),
                () => {
                    tG.stop();
                }
            ),
            [tA, tY, eX, eF, tG]
        );
    let tK = eb === V.rq.ENDED,
        tX = l.useCallback(
            async (e) => {
                if (eu) {
                    var t;
                    let e = (0, C.fn)(null == (t = e$.current) ? void 0 : t.parentNode, e$.current);
                    null != e && (e.removeEventListener(C.NO, tL), (0, C.Pr)(e), ed(!1), tC(!1));
                }
                if ((tg(e, S.jZ.LEARN_MORE), J.id === U.V6)) return void window.open(h.Z.getArticleURL(Q.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != eo) {
                    let e = I.r.build(J.config).application.link;
                    (await (0, B.qP)(e)) && eo();
                }
                (0, _.nc)(J, {
                    content: e,
                    ctaContent: S.jZ.OPEN_GAME_LINK
                });
            },
            [tg, J, eo, eu, e$, tL, ed, tC]
        ),
        t$ = l.useMemo(() => (0, k.z0)(J, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.THUMBNAIL), [J]),
        tJ = l.useMemo(() => (0, k.z0)(J, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.CAPTION), [J]),
        t0 = e1 || ez.maxTimestampSec >= (null != (w = null == (o = e$.current) ? void 0 : o.currentTime) ? w : 0) + 1;
    return (0, r.jsx)(f.P3F, {
        className: z.videoCont,
        'data-fullscreen': eu,
        tabIndex: -1,
        onMouseEnter: () => {
            eh(!0), tP(!1), (tk.current = performance.now()), null != tN.current && clearTimeout(tN.current);
        },
        onMouseLeave: () => {
            eh(!1), tP(!1);
        },
        onMouseMove: tw,
        onKeyDown: tw,
        children: (0, r.jsxs)('div', {
            className: z.videoContInnerRelative,
            children: [
                tK &&
                    (() => {
                        if (!(0, P.e)({ location: U.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(X, {
                                        quest: J,
                                        shouldShow: tK
                                    }),
                                    (0, r.jsx)('div', { className: z.videoContOverlay }),
                                    (0, r.jsx)($, {
                                        title: tr,
                                        subtitle: tl,
                                        icon: f.d4D,
                                        className: z.endScreenPanelRight,
                                        onClick: () => tX(y.jn.VIDEO_MODAL)
                                    })
                                ]
                            });
                        {
                            var e, t, n;
                            let l = J.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(L.Z, {
                                quest: J,
                                title: null != (e = null == l ? void 0 : l.messages.videoEndCtaTitle) ? e : Y.intl.string(Y.t.Ka526u),
                                subtitle: null != (t = null == l ? void 0 : l.messages.videoEndCtaSubtitle) ? t : Y.intl.string(Y.t.tKMcAg),
                                ctaBtnLabel: null != (n = null == l ? void 0 : l.messages.videoEndCtaButtonLabel) ? n : Y.intl.string(Y.t.iiTtpK),
                                onCTAClick: () => tX(y.jn.VIDEO_MODAL_END_CARD)
                            });
                        }
                    })(),
                (0, r.jsxs)(b.Z, {
                    ref: (e) => {
                        (e$.current = e), (eg.current = e);
                    },
                    autoPlay: en,
                    playsInline: !0,
                    mediaLayoutType: eu ? G.hV.STATIC : G.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: tK,
                        [z.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == t$ ? void 0 : t$.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e$.current && (e$.current.currentTime >= eR && (tn.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(e$.current.currentTime)), eM(e$.current.currentTime + 6 + 2 * Math.random()), tD(e$.current.currentTime)), e$.current.currentTime >= eV && (eB(e$.current.currentTime + 1), (0, j.qm)(J.id, ej.taskType, e$.current.currentTime), et(e$.current.currentTime)), eH(J.id, e$.current.currentTime, e$.current.duration), e_((e$.current.currentTime / e$.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e$.current && (tD(e$.current.duration + 1), tn.info('[QV] | handleEnded: sending progress update: '.concat(e$.current.duration + 1)), eH(J.id, e$.current.duration, e$.current.duration)), tx(V.rq.ENDED), ek(!1);
                    },
                    onLoadedData: (e) => {
                        tn.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eT)), eT && (td(eA, null != eG.current ? performance.now() - eG.current : null), eP(!1), null != ts.current && (ts.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e$.current && (tn.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tc)), e7(!0), ti !== k.n1.VIDEO_HLS && tV(to), eW ? (e$.current.volume = 0) : (e$.current.volume = eK));
                    },
                    onLoadStart: () => {
                        (eG.current = performance.now()), tu(eA), tn.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eG.current));
                    },
                    onPlaying: () => {
                        if (!eQ.current) return;
                        let e = performance.now() - el;
                        tn.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), th(e), (eQ.current = !1);
                    },
                    onWaiting: (e) => {
                        (eY.current = performance.now()), tn.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eY.current)), tb(eA), ek(!0);
                    },
                    onProgress: (e) => {
                        if (null == e$.current) return;
                        tn.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(e$.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < e$.current.buffered.length; e++) {
                            let n = e$.current.buffered.start(e),
                                r = e$.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e$.current.duration,
                                    size: (r - n) / e$.current.duration
                                });
                        }
                        ew(t);
                    },
                    onCanPlay: tQ,
                    onCanPlayThrough: tQ,
                    onSeeked: () => {
                        tn.info('[QV] | handleSeeked'), e9(!0);
                    },
                    onAbort: () => tU(V.CY.ABORT),
                    onError: () => tU(V.CY.ERROR),
                    onEmptied: () => tU(V.CY.EMPTIED),
                    onStalled: () => tU(V.CY.STALLED),
                    onClick: () => {
                        tn.info('[QV] | handleVideoClick'), tB();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tJ &&
                            (0, r.jsx)('track', {
                                ref: eJ,
                                src: tJ.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != ta &&
                            ti !== k.n1.VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tU(V.CY.SOURCE_ERROR),
                                src: ta.url,
                                type: ta.mimetype
                            })
                    ]
                }),
                (eT || eN) &&
                    eb === V.rq.PLAYING &&
                    (0, r.jsx)(f.$jN, {
                        type: f.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner
                    }),
                eb === V.rq.PAUSED && e8 === y.yE.LOST_FOCUS && (0, r.jsx)(K, {}),
                ei &&
                    eb !== V.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.P3F, {
                                onClick: () => ea(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: z.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: z.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tG, tH], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(M.K, {
                                    quest: J,
                                    onClose: () => {
                                        ea(!1), tg(y.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE);
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: z.videoFooterContGradient,
                    style: {
                        opacity: (0, s.to)(
                            [
                                tG.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(e)
                        )
                    }
                }),
                (0, r.jsx)(
                    'div',
                    {
                        className: i()(z.playPausePopCont, {
                            [z.play]: eb === V.rq.PLAYING,
                            [z.pause]: eb === V.rq.PAUSED
                        }),
                        children: eb === V.rq.PLAYING ? (0, r.jsx)(f.o1U, { className: z.playPausePopIcon }) : (0, r.jsx)(f.fpf, { className: z.playPausePopIcon })
                    },
                    eb
                ),
                es &&
                    null != e5 &&
                    (0, r.jsx)(s.animated.div, {
                        className: z.captionContainer,
                        ref: tz,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tG.to({
                                        range: [0, 1],
                                        output: [0, -50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: (0, r.jsx)(f.Text, {
                            variant: 'text-lg/semibold',
                            color: 'always-white',
                            className: z.captionText,
                            children: e5.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: z.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tG.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tG.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tG.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(R.Z, {
                            percent: ey,
                            animate: !0 !== e0.current && !ex,
                            interactionEnabled: e1 && eq,
                            backgroundColor: tA ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tA ? eI : void 0,
                            duration: null != (F = null == (p = e$.current) ? void 0 : p.duration) ? F : 1,
                            maxSeekableTime: tA && eq ? tt : void 0,
                            onClick: (e) => {
                                tV(e), eb === V.rq.ENDED && tx(V.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tR();
                            },
                            onScrubForward: () => {
                                tM();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: z.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tG.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tG.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tG.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            onFocus: () => eS(!0),
                            onBlur: () => eS(!1),
                            children: (0, r.jsx)(A.Z, {
                                videoRef: e$,
                                quest: J,
                                playerState: eb,
                                animSpring: tG,
                                visible: tA,
                                seekForwardEnabled: t0,
                                hideCaptionBtn: null == tJ,
                                handlePlaybackBtnClick: tB,
                                handleTranscriptBtnClick: () => {
                                    ei || (null != e2 && e2.questId === J.id && e2.fetchStatus !== x.iF.NONE && e2.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(J, u.X.WATCH_VIDEO), ea(!ei), tg(y.jn.VIDEO_MODAL, ei ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ec(!es), tg(y.jn.VIDEO_MODAL, es ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !eu;
                                    tn.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, C.fn)(null == (e = e$.current) ? void 0 : e.parentNode, e$.current);
                                    t && null != n ? ((0, C.Dj)(n), n.addEventListener(C.NO, tL), tC(!0)) : t || null == n || (n.removeEventListener(C.NO, tL), tC(!1), (0, C.Pr)(n)), ed(t);
                                },
                                handleSeekBackBtnClick: tR,
                                handleSeekForwardBtnClick: tM,
                                handleControlBarPendingInteraction: eZ,
                                onVolumeChange: tj
                            })
                        })
                    ]
                })
            ]
        })
    });
}
