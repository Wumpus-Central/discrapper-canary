n.d(t, { Z: () => J }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(366594),
    c = n(760907),
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
    S = n(228488),
    C = n(617136),
    j = n(272008),
    y = n(497505),
    _ = n(918701),
    x = n(184299),
    D = n(347382),
    P = n(5881),
    T = n(208109),
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
    U = n(435585),
    q = n(46140),
    Y = n(981631),
    Q = n(217702),
    G = n(388032),
    z = n(844136);
let H = new Set([Y.IyS.FIVE_G, Y.IyS.FOUR_G, Y.IyS.UNKNOWN]),
    K = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function W() {
    let e = (0, m.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: z.pauseText,
        style: { background: (0, p.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(f.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: G.intl.string(G.t.U7Xrb2)
        })
    });
}
function X(e) {
    let { quest: t, shouldShow: n } = e,
        o = l.useMemo(() => (0, k.z)(k.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
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
        eS = (0, _.il)(J),
        [eC, ej] = l.useState(eS.percentComplete),
        [ey, e_] = l.useState(!1),
        [ex, eD] = l.useState(!0),
        [eP, eT] = l.useState(!1),
        [eN, ek] = l.useState([]),
        [eI, ew] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eA, eL] = l.useState(0),
        [eR, eM] = l.useState(0),
        [eV, eB] = l.useState(!1),
        [eF, eZ] = l.useState(!1),
        eU = l.useRef(!0),
        eq = l.useRef(null),
        eY = l.useRef(null),
        eQ = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[J.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eG = (0, x.km)((e) => e.setVideoProgress),
        ez = (0, x.km)((e) => e.muted),
        eH = (0, x.km)((e) => e.volume),
        eK = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        eW = (0, l.useRef)(null),
        eX = (0, l.useRef)(null),
        e$ = l.useRef(!0),
        eJ = (null == (t = J.userStatus) ? void 0 : t.completedAt) != null,
        e0 = (0, x.km)((e) => e.transcript),
        [e1, e2] = l.useState(null),
        [e6, e8] = l.useState(!1),
        [e4, e7] = l.useState(!1),
        [e3, e9] = l.useState(null),
        e5 = eJ ? (null != (E = null == (n = eW.current) ? void 0 : n.duration) ? E : 0) : Math.max(eQ.maxTimestampSec, eS.progressSeconds),
        te = l.useMemo(
            () =>
                (0, P.T)({
                    quest: J,
                    location: q.dr.VIDEO_MODAL
                }),
            [J]
        ),
        { title: tt, subtitle: tn } = (function (e) {
            var t, n, r, l, o;
            let i = null == (t = e.config.taskConfigV2) ? void 0 : t.tasks[u.X.WATCH_VIDEO],
                a = null != (n = null == i ? void 0 : i.messages.videoEndCtaTitle) ? n : G.intl.string(G.t.iiTtpK),
                s = null != (l = null != (r = null == i ? void 0 : i.messages.videoEndCtaButtonLabel) ? r : null == i ? void 0 : i.messages.videoEndCtaSubtitle) ? l : G.intl.string(G.t.mxaHf3),
                c = (0, _.B2)(e.config),
                m = null != (o = null == i ? void 0 : i.messages.videoEndCtaSubtitle) ? o : G.intl.string(G.t.mxaHf3),
                p = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: p ? c : a,
                subtitle: p ? m : s
            };
        })(J),
        tr = eJ ? (eQ.timestampSec >= eQ.duration ? 0 : eQ.timestampSec) : Math.max(eQ.timestampSec, eS.progressSeconds);
    (0, v.Ng)(() => {
        e$.current && ((e$.current = !1), ew(O.Z.getEffectiveConnectionSpeed()), eJ && eQ.timestampSec >= eQ.duration && eG(J.id, 0, eQ.duration));
    });
    let {
            videoAssetId: tl,
            videoAsset: to,
            hlsRef: ti
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, D.z)(e, q.dr.VIDEO_MODAL),
                u = null == (o = e.config.videoMetadata) ? void 0 : o.assets,
                d = l.useMemo(() => (null != u ? (c && a.ZP.isSupported() && null != u.videoPlayerVideoHls ? k.i.VIDEO_PLAYER_VIDEO_HLS : H.has(n) || null == u.videoPlayerVideoLowRes ? k.i.VIDEO_PLAYER_VIDEO : k.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = l.useMemo(() => (null != d ? (0, k.z)(d, e) : null), [e, d]),
                p = () => {
                    null != s.current && 800000 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (d !== k.i.VIDEO_PLAYER_VIDEO_HLS || null == m || null == t.current || i.current) return;
                    (s.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1
                    })),
                        s.current.on(a.ZP.Events.FRAG_LOADING, p),
                        s.current.loadSource(m.url),
                        s.current.attachMedia(t.current),
                        (i.current = !0);
                    let e = s.current;
                    return () => {
                        null != e && e.off(a.ZP.Events.FRAG_LOADING, p);
                    };
                }, [m, d, t, r]),
                {
                    videoAssetId: d,
                    videoAsset: m,
                    hlsRef: s
                }
            );
        })(J, eW, eI, tr),
        { trackQuestVideoLoadingStarted: ta, trackQuestVideoLoadingEnded: ts, trackQuestVideoProgressed: tc, trackQuestVideoResumed: tu, trackQuestVideoPaused: td, trackQuestVideoFocusChange: tm, trackQuestContentClick: tp, trackQuestVideoBufferingStarted: tf, trackQuestVideoBufferingEnded: tv, trackWatchTimeAnalytics: tg, trackQuestVideoTimeToFirstFrame: tb, trackQuestVideoFullscreenChanged: tE, trackQuestVideoError: tO, trackQuestVideoVolumeChanged: th } = (0, U.Z)(J, eW, ti, ee, tl),
        tS = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = eW.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tC } = (0, N.Z)({
            getCurrentVideoTime: tS,
            isPlaying: eb === V.rq.PLAYING,
            isMetadataLoaded: e6,
            isInitialSeekComplete: e4,
            onAnalytics: tg,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tj = l.useCallback(
            (e) => {
                if ((te.info('[QV] | updatePlayerState | playerState: '.concat(e)), eE(e), null != eW.current))
                    switch (e) {
                        case V.rq.PLAYING:
                            eW.current.paused && tu(e1), e2(null), eW.current.play();
                            break;
                        case V.rq.PAUSED:
                            eW.current.paused || tC(), eW.current.pause(), (eU.current = !1);
                            break;
                        case V.rq.ENDED:
                            tC(), ea(!1);
                    }
            },
            [tu, e1, tC, ea, te]
        );
    l.useEffect(() => {
        td(e1);
    }, [e1, td]),
        l.useEffect(() => {
            ep && tm(em, eb);
        }, [em, ep, eb, tm]);
    let ty = l.useCallback(
        (e) => {
            var t;
            eJ || (null == (t = J.userStatus) ? void 0 : t.enrolledAt) == null || (te.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, _.FI)(J, e)), tc();
        },
        [eJ, J, te, tc]
    );
    l.useEffect(() => {
        (er !== f.Dvm.HIDDEN && er !== f.Dvm.EXITING && er !== f.Dvm.EXITED && (null == er || !ev || ef || eJ) && (!ep || em || eJ)) || null == eW.current || eb !== V.rq.PLAYING || (te.info('[QV] | Pausing video | playerState: '.concat(eb, ', parentTransitionState: ').concat(er, ', visible: ').concat(ef, ', focused: ').concat(em, ', isQuestCompleted: ').concat(eJ)), tj(V.rq.PAUSED), eJ || e2(y.yE.LOST_FOCUS));
    }, [er, em, ep, ef, ev, eb, eJ, tj, ty, te]);
    let t_ = () => eh(!0),
        tx = () => eh(!1),
        tD = eO || eb === V.rq.PAUSED || eb === V.rq.ENDED,
        tP = l.useCallback(() => {
            var e;
            te.info('[QV] | handleFullScreenExit');
            let t = (0, S.fn)(null == (e = eW.current) ? void 0 : e.parentNode, eW.current);
            null == t || (0, S.rB)(t) || (t.removeEventListener(S.NO, tP), ed(!1), tE(!1));
        }, [ed, te, tE]),
        tT = () => {
            if (null == eW.current) return;
            let e = Math.max(eW.current.currentTime - 10, 0);
            te.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tk(e), eb === V.rq.ENDED && tj(V.rq.PAUSED), tp(y.jn.VIDEO_MODAL, C.jZ.SEEK_BACKWARD);
        },
        tN = () => {
            if (null == eW.current || !tz) return;
            let e = Math.min(eW.current.currentTime + 10, e5);
            te.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tk(e), eb !== V.rq.ENDED && e >= eW.current.duration && tj(V.rq.ENDED), tp(y.jn.VIDEO_MODAL, C.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eW.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tP);
        };
    }, [tP]);
    let tk = l.useCallback(
            (e) => {
                null != eW.current && (te.info('[QV] | seekTimeline | timeSec: '.concat(e)), tC(), e_(!0), e7(!1), (eW.current.currentTime = e), eG(J.id, e, eW.current.duration));
            },
            [eW, eG, J.id, tC, te]
        ),
        tI = () => {
            if (null != eW.current)
                switch ((te.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eb)), eb)) {
                    case V.rq.ENDED:
                        tk(0), tj(V.rq.PLAYING);
                        break;
                    case V.rq.PLAYING:
                        tj(V.rq.PAUSED), e2(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tj(V.rq.PLAYING);
                }
        },
        tw = (e) => {
            e9(e);
        },
        tA = (e) => {
            e9((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tL = l.useCallback(() => {
            if (null == eW.current || (te.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(eW.current.textTracks.length)), 0 === eW.current.textTracks.length)) return;
            let e = eW.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, B.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tw(n)), (n.onexit = () => tA(n)));
                }
        }, [eW, te]);
    l.useEffect(() => {
        if (null == eX.current) return;
        let e = eX.current;
        return (
            e.addEventListener('load', tL),
            () => {
                null != e && e.removeEventListener('load', tL);
            }
        );
    }, [eX, tL]);
    let tR = l.useCallback(
            (e) => {
                var t;
                te.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = eW.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tl, ', connectionSpeed: ')
                        .concat(eI)
                ),
                    tO(e, eI);
            },
            [eI, tO, eW, tl, te]
        ),
        tM = (e) => {
            te.info('[QV] | handleCanPlay: playerState: '.concat(eb)), null != eW.current && eb === V.rq.PLAYING && (te.info('[QV] | handleCanPlay: did NOT early return'), ex && (te.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(ex)), eD(!1)), eP && (te.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eP)), tv(eI, null != eY.current ? Date.now() - eY.current : null), eT(!1)), te.info('[QV] | handleCanPlay: updating player state to playing'), tj(V.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!ey) return;
        let e = setTimeout(() => {
            e_(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ey]);
    let [{ controlBarAnimSpring: tV }, tB] = (0, f.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                eZ(!1);
            },
            onRest: (e) => {
                1 === e.value && eZ(!0);
            }
        })),
        tF = (0, l.useRef)(null),
        [{ captionHeightSpring: tZ }, tU] = (0, f.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: K
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tU({
                captionHeightSpring: es && null != e3 && null != (t = null == (e = tF.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: eK
            }),
            () => {
                tZ.stop();
            }
        );
    }, [es, tU, eK, e3, tZ]),
        l.useEffect(
            () => (
                tB({
                    controlBarAnimSpring: tD || eV ? 1 : 0,
                    immediate: eK
                }),
                () => {
                    tV.stop();
                }
            ),
            [tD, tB, eK, eV, tV]
        );
    let tq = eb === V.rq.ENDED,
        tY = l.useCallback(
            async (e) => {
                if ((tp(e, C.jZ.LEARN_MORE), J.id === q.V6)) return void window.open(h.Z.getArticleURL(Y.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != eo) {
                    let e = I.r.build(J.config).application.link;
                    (await (0, B.qP)(e)) && eo();
                }
                (0, _.FE)(J, {
                    content: e,
                    ctaContent: C.jZ.OPEN_GAME_LINK
                });
            },
            [J, tp, eo]
        ),
        tQ = l.useMemo(() => (0, k.z)(k.i.VIDEO_PLAYER_THUMBNAIL, J), [J]),
        tG = l.useMemo(() => (0, k.z)(k.i.VIDEO_PLAYER_CAPTION, J), [J]),
        tz = eJ || eQ.maxTimestampSec >= (null != (w = null == (o = eW.current) ? void 0 : o.currentTime) ? w : 0) + 1;
    return (0, r.jsx)(f.P3F, {
        className: z.videoCont,
        'data-fullscreen': eu,
        tabIndex: -1,
        onMouseEnter: t_,
        onMouseLeave: tx,
        onFocus: t_,
        onBlur: tx,
        children: (0, r.jsxs)('div', {
            className: z.videoContInnerRelative,
            children: [
                tq &&
                    (() => {
                        if (!(0, T.e)({ location: q.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(X, {
                                        quest: J,
                                        shouldShow: tq
                                    }),
                                    (0, r.jsx)('div', { className: z.videoContOverlay }),
                                    (0, r.jsx)($, {
                                        title: tt,
                                        subtitle: tn,
                                        icon: f.d4D,
                                        className: z.endScreenPanelRight,
                                        onClick: () => tY(y.jn.VIDEO_MODAL)
                                    })
                                ]
                            });
                        {
                            var e, t, n, l;
                            let o = null == (e = J.config.taskConfigV2) ? void 0 : e.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(L.Z, {
                                quest: J,
                                title: null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : G.intl.string(G.t.Ka526u),
                                subtitle: null != (n = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? n : G.intl.string(G.t.tKMcAg),
                                ctaBtnLabel: null != (l = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? l : G.intl.string(G.t.iiTtpK),
                                onCTAClick: () => tY(y.jn.VIDEO_MODAL_END_CARD)
                            });
                        }
                    })(),
                (0, r.jsxs)(b.Z, {
                    ref: (e) => {
                        (eW.current = e), (eg.current = e);
                    },
                    autoPlay: en,
                    playsInline: !0,
                    mediaLayoutType: eu ? Q.hV.STATIC : Q.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: tq,
                        [z.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tQ ? void 0 : tQ.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != eW.current && (eW.current.currentTime >= eA && (te.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(eW.current.currentTime)), eL(eW.current.currentTime + 6 + 2 * Math.random()), ty(eW.current.currentTime)), eW.current.currentTime >= eR && (eM(eW.current.currentTime + 1), (0, j.qm)(J.id, eS.taskType, eW.current.currentTime), et(eW.current.currentTime)), eG(J.id, eW.current.currentTime, eW.current.duration), ej((eW.current.currentTime / eW.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != eW.current && (ty(eW.current.duration + 1), te.info('[QV] | handleEnded: sending progress update: '.concat(eW.current.duration + 1)), eG(J.id, eW.current.duration, eW.current.duration)), tj(V.rq.ENDED), eT(!1);
                    },
                    onLoadedData: (e) => {
                        te.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(ex)), ex && (ts(eI, null != eq.current ? Date.now() - eq.current : null), eD(!1), null != ti.current && (ti.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != eW.current && (te.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tl)), e8(!0), tl !== k.i.VIDEO_PLAYER_VIDEO_HLS && tk(tr), ez ? (eW.current.volume = 0) : (eW.current.volume = eH));
                    },
                    onLoadStart: () => {
                        (eq.current = Date.now()), ta(eI), te.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eq.current));
                    },
                    onPlaying: () => {
                        if (!eU.current) return;
                        let e = performance.now() - el;
                        te.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), tb(e), (eU.current = !1);
                    },
                    onWaiting: (e) => {
                        (eY.current = Date.now()), te.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eY.current)), tf(eI), eT(!0);
                    },
                    onProgress: (e) => {
                        if (null == eW.current) return;
                        te.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(eW.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < eW.current.buffered.length; e++) {
                            let n = eW.current.buffered.start(e),
                                r = eW.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / eW.current.duration,
                                    size: (r - n) / eW.current.duration
                                });
                        }
                        ek(t);
                    },
                    onCanPlay: tM,
                    onCanPlayThrough: tM,
                    onSeeked: () => {
                        te.info('[QV] | handleSeeked'), e7(!0);
                    },
                    onAbort: () => tR(V.CY.ABORT),
                    onError: () => tR(V.CY.ERROR),
                    onEmptied: () => tR(V.CY.EMPTIED),
                    onStalled: () => tR(V.CY.STALLED),
                    onClick: () => {
                        te.info('[QV] | handleVideoClick'), tI();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tG &&
                            (0, r.jsx)('track', {
                                ref: eX,
                                src: tG.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != to &&
                            tl !== k.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tR(V.CY.SOURCE_ERROR),
                                src: to.url,
                                type: to.mimetype
                            })
                    ]
                }),
                (ex || eP) &&
                    eb === V.rq.PLAYING &&
                    (0, r.jsx)(f.$jN, {
                        type: f.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner
                    }),
                eb === V.rq.PAUSED && e1 === y.yE.LOST_FOCUS && (0, r.jsx)(W, {}),
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
                                    marginBottom: (0, s.to)([tV, tZ], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(M.K, {
                                    quest: J,
                                    onClose: () => {
                                        ea(!1), tp(y.jn.VIDEO_MODAL, C.jZ.TRANSCRIPT_DISABLE);
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
                                tV.to({
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
                    null != e3 &&
                    (0, r.jsx)(s.animated.div, {
                        className: z.captionContainer,
                        ref: tF,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tV.to({
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
                            children: e3.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: z.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tV.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tV.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tV.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(R.Z, {
                            percent: eC,
                            animate: !0 !== e$.current && !ey,
                            interactionEnabled: eJ && eF,
                            backgroundColor: tD ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tD ? eN : void 0,
                            duration: null != (F = null == (p = eW.current) ? void 0 : p.duration) ? F : 1,
                            maxSeekableTime: tD && eF ? e5 : void 0,
                            onClick: (e) => {
                                tk(e), eb === V.rq.ENDED && tj(V.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tT();
                            },
                            onScrubForward: () => {
                                tN();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: z.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(A.Z, {
                                videoRef: eW,
                                quest: J,
                                playerState: eb,
                                animSpring: tV,
                                visible: tD,
                                seekForwardEnabled: tz,
                                hideCaptionBtn: null == tG,
                                handlePlaybackBtnClick: tI,
                                handleTranscriptBtnClick: () => {
                                    ei || (null != e0 && e0.questId === J.id && e0.fetchStatus !== x.iF.NONE && e0.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(J), ea(!ei), tp(y.jn.VIDEO_MODAL, ei ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ec(!es), tp(y.jn.VIDEO_MODAL, es ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !eu;
                                    te.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, S.fn)(null == (e = eW.current) ? void 0 : e.parentNode, eW.current);
                                    t && null != n ? ((0, S.Dj)(n), n.addEventListener(S.NO, tP), tE(!0)) : t || null == n || (n.removeEventListener(S.NO, tP), tE(!1), (0, S.Pr)(n)), ed(t);
                                },
                                handleSeekBackBtnClick: tT,
                                handleSeekForwardBtnClick: tN,
                                handleControlBarPendingInteraction: eB,
                                onVolumeChange: th
                            })
                        })
                    ]
                })
            ]
        })
    });
}
