n.d(t, { Z: () => ee }), n(388685), n(539854);
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
    C = n(228488),
    S = n(617136),
    j = n(272008),
    y = n(497505),
    _ = n(918701),
    x = n(184299),
    D = n(56117),
    T = n(347382),
    P = n(5881),
    N = n(208109),
    k = n(117242),
    I = n(720293),
    w = n(566078),
    A = n(602667),
    L = n(881773),
    R = n(350312),
    M = n(355243),
    V = n(106743),
    B = n(223418),
    F = n(604162),
    Z = n(747717),
    U = n(281055),
    q = n(435585),
    Q = n(46140),
    G = n(981631),
    H = n(217702),
    Y = n(388032),
    z = n(38855);
let K = new Set([G.IyS.FIVE_G, G.IyS.FOUR_G, G.IyS.UNKNOWN]),
    W = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function X() {
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
function $(e) {
    let { quest: t, shouldShow: n } = e,
        o = l.useMemo(() => (0, I.z0)(t, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [t]);
    return null == o
        ? null
        : (0, r.jsx)(A.A, {
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
                (0, r.jsx)(Z.Z, { color: '#747783' }),
                (0, r.jsx)(o, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: z.endScreenIcon
                })
            ]
        })
    });
}
function ee(e) {
    var t, n, o, p, E, A, Z;
    let { quest: ee, videoSessionId: et, onOptimisticProgressUpdate: en, autoplay: er, parentTransitionState: el, performanceClockStartTime: eo, onClose: ei } = e,
        ea = (0, x.km)((e) => e.transcriptEnabled),
        es = (0, x.km)((e) => e.setTranscriptEnabled),
        ec = (0, x.km)((e) => e.captionEnabled),
        eu = (0, x.km)((e) => e.setCaptionEnabled),
        ed = (0, x.km)((e) => e.fullScreenEnabled),
        em = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ep, focusedChanged: ef } = (0, U.xU)(),
        { visible: ev, visibleChanged: eg, targetRef: eb } = (0, U.Yy)(),
        [eE, eO] = l.useState(!0 === er ? B.rq.PLAYING : B.rq.PAUSED),
        [eh, eC] = l.useState(!1),
        eS = (0, _.il)(ee),
        [ej, ey] = l.useState(eS.percentComplete),
        [e_, ex] = l.useState(!1),
        [eD, eT] = l.useState(!0),
        [eP, eN] = l.useState(!1),
        [ek, eI] = l.useState([]),
        [ew, eA] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eL, eR] = l.useState(0),
        [eM, eV] = l.useState(0),
        [eB, eF] = l.useState(!1),
        [eZ, eU] = l.useState(!1),
        eq = l.useRef(!0),
        eQ = l.useRef(null),
        eG = l.useRef(null),
        eH = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[ee.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eY = (0, x.km)((e) => e.setVideoProgress),
        ez = (0, x.km)((e) => e.muted),
        eK = (0, x.km)((e) => e.volume),
        eW = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        eX = (0, l.useRef)(null),
        e$ = (0, l.useRef)(null),
        eJ = l.useRef(!0),
        e0 = (null == (t = ee.userStatus) ? void 0 : t.completedAt) != null,
        e1 = (0, x.km)((e) => e.transcript),
        e2 = (0, D.Ec)(ee),
        e8 = (0, D.H)() && e2,
        [e6, e7] = l.useState(null),
        [e3, e4] = l.useState(!1),
        [e9, e5] = l.useState(!1),
        [te, tt] = l.useState(null),
        tn = e0 ? (null != (E = null == (n = eX.current) ? void 0 : n.duration) ? E : 0) : Math.max(eH.maxTimestampSec, eS.progressSeconds),
        tr = l.useMemo(
            () =>
                (0, P.T)({
                    quest: ee,
                    location: Q.dr.VIDEO_MODAL
                }),
            [ee]
        ),
        { title: tl, subtitle: to } = (function (e) {
            var t, n, r, l, o;
            let i = null == (t = e.config.taskConfigV2) ? void 0 : t.tasks[u.X.WATCH_VIDEO],
                a = null != (n = null == i ? void 0 : i.messages.videoEndCtaTitle) ? n : Y.intl.string(Y.t.iiTtpK),
                s = null != (l = null != (r = null == i ? void 0 : i.messages.videoEndCtaButtonLabel) ? r : null == i ? void 0 : i.messages.videoEndCtaSubtitle) ? l : Y.intl.string(Y.t.mxaHf3),
                c = (0, _.B2)(e.config),
                m = null != (o = null == i ? void 0 : i.messages.videoEndCtaSubtitle) ? o : Y.intl.string(Y.t.mxaHf3),
                p = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: p ? c : a,
                subtitle: p ? m : s
            };
        })(ee),
        ti = e0 ? (eH.timestampSec >= eH.duration ? 0 : eH.timestampSec) : Math.max(eH.timestampSec, eS.progressSeconds);
    (0, v.Ng)(() => {
        eJ.current && ((eJ.current = !1), eA(O.Z.getEffectiveConnectionSpeed()), e0 && eH.timestampSec >= eH.duration && eY(ee.id, 0, eH.duration));
    });
    let {
            videoVariant: ta,
            videoAsset: ts,
            hlsRef: tc
        } = (function (e, t, n, r) {
            var o, i;
            let s = l.useRef(!1),
                c = l.useRef(null),
                d = (0, T.z)(e, Q.dr.VIDEO_MODAL),
                m = null == (i = e.config.taskConfigV2) || null == (o = i.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                p = l.useMemo(() => (null != m ? (d && a.ZP.isSupported() && null != m.videoHls ? I.n1.VIDEO_HLS : K.has(n) || null == m.videoLowRes ? I.n1.VIDEO : I.n1.VIDEO_LOW_RES) : null), [m, n, d]),
                f = l.useMemo(() => (null != p ? (0, I.z0)(e, u.X.WATCH_VIDEO, p, I.O.VIDEO) : null), [e, p]),
                v = () => {
                    null != c.current && 800000 !== c.current.config.minAutoBitrate && (c.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (p !== I.n1.VIDEO_HLS || null == f || null == t.current || s.current) return;
                    (c.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1
                    })),
                        c.current.on(a.ZP.Events.FRAG_LOADING, v),
                        c.current.loadSource(f.url),
                        c.current.attachMedia(t.current),
                        (s.current = !0);
                    let e = c.current;
                    return () => {
                        null != e && e.off(a.ZP.Events.FRAG_LOADING, v);
                    };
                }, [f, p, t, r]),
                {
                    videoVariant: p,
                    videoAsset: f,
                    hlsRef: c
                }
            );
        })(ee, eX, ew, ti),
        tu = (0, I.CC)(ta),
        { trackQuestVideoLoadingStarted: td, trackQuestVideoLoadingEnded: tm, trackQuestVideoProgressed: tp, trackQuestVideoResumed: tf, trackQuestVideoPaused: tv, trackQuestVideoFocusChange: tg, trackQuestContentClick: tb, trackQuestVideoBufferingStarted: tE, trackQuestVideoBufferingEnded: tO, trackWatchTimeAnalytics: th, trackQuestVideoTimeToFirstFrame: tC, trackQuestVideoFullscreenChanged: tS, trackQuestVideoError: tj, trackQuestVideoVolumeChanged: ty } = (0, q.Z)(ee, eX, tc, et, tu),
        t_ = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = eX.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tx } = (0, k.Z)({
            getCurrentVideoTime: t_,
            isPlaying: eE === B.rq.PLAYING,
            isMetadataLoaded: e3,
            isInitialSeekComplete: e9,
            onAnalytics: th,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tD = l.useCallback(
            (e) => {
                if ((tr.info('[QV] | updatePlayerState | playerState: '.concat(e)), eO(e), null != eX.current))
                    switch (e) {
                        case B.rq.PLAYING:
                            eX.current.paused && tf(e6), e7(null), eX.current.play();
                            break;
                        case B.rq.PAUSED:
                            eX.current.paused || tx(), eX.current.pause(), (eq.current = !1);
                            break;
                        case B.rq.ENDED:
                            tx(), es(!1);
                    }
            },
            [tf, e6, tx, es, tr]
        );
    l.useEffect(() => {
        tv(e6);
    }, [e6, tv]),
        l.useEffect(() => {
            ef && tg(ep, eE);
        }, [ep, ef, eE, tg]);
    let tT = l.useCallback(
        (e) => {
            var t;
            e0 || (null == (t = ee.userStatus) ? void 0 : t.enrolledAt) == null || (tr.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, _.FI)(ee, e)), tp();
        },
        [e0, ee, tr, tp]
    );
    l.useEffect(() => {
        (el !== f.Dvm.HIDDEN && el !== f.Dvm.EXITING && el !== f.Dvm.EXITED && (null == el || !eg || ev || e0) && (!ef || ep || e0)) || null == eX.current || eE !== B.rq.PLAYING || (tr.info('[QV] | Pausing video | playerState: '.concat(eE, ', parentTransitionState: ').concat(el, ', visible: ').concat(ev, ', focused: ').concat(ep, ', isQuestCompleted: ').concat(e0)), tD(B.rq.PAUSED), e0 || e7(y.yE.LOST_FOCUS));
    }, [el, ep, ef, ev, eg, eE, e0, tD, tT, tr]);
    let tP = () => eC(!0),
        tN = () => eC(!1),
        tk = eh || eE === B.rq.PAUSED || eE === B.rq.ENDED,
        tI = l.useCallback(() => {
            var e;
            tr.info('[QV] | handleFullScreenExit');
            let t = (0, C.fn)(null == (e = eX.current) ? void 0 : e.parentNode, eX.current);
            null == t || (0, C.rB)(t) || (t.removeEventListener(C.NO, tI), em(!1), tS(!1));
        }, [em, tr, tS]),
        tw = () => {
            if (null == eX.current) return;
            let e = Math.max(eX.current.currentTime - 10, 0);
            tr.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tL(e), eE === B.rq.ENDED && tD(B.rq.PAUSED), tb(y.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD);
        },
        tA = () => {
            if (null == eX.current || !tX) return;
            let e = Math.min(eX.current.currentTime + 10, tn);
            tr.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tL(e), eE !== B.rq.ENDED && e >= eX.current.duration && tD(B.rq.ENDED), tb(y.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eX.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, tI);
        };
    }, [tI]);
    let tL = l.useCallback(
            (e) => {
                null != eX.current && (tr.info('[QV] | seekTimeline | timeSec: '.concat(e)), tx(), ex(!0), e5(!1), (eX.current.currentTime = e), eY(ee.id, e, eX.current.duration));
            },
            [eX, eY, ee.id, tx, tr]
        ),
        tR = () => {
            if (null != eX.current)
                switch ((tr.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eE)), eE)) {
                    case B.rq.ENDED:
                        tL(0), tD(B.rq.PLAYING);
                        break;
                    case B.rq.PLAYING:
                        tD(B.rq.PAUSED), e7(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tD(B.rq.PLAYING);
                }
        },
        tM = (e) => {
            tt(e);
        },
        tV = (e) => {
            tt((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tB = l.useCallback(() => {
            if (null == eX.current || (tr.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(eX.current.textTracks.length)), 0 === eX.current.textTracks.length)) return;
            let e = eX.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, F.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tM(n)), (n.onexit = () => tV(n)));
                }
        }, [eX, tr]);
    l.useEffect(() => {
        if (null == e$.current) return;
        let e = e$.current;
        return (
            e.addEventListener('load', tB),
            () => {
                null != e && e.removeEventListener('load', tB);
            }
        );
    }, [e$, tB]);
    let tF = l.useCallback(
            (e) => {
                var t;
                tr.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = eX.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tu, ', connectionSpeed: ')
                        .concat(ew)
                ),
                    tj(e, ew);
            },
            [ew, tj, eX, tu, tr]
        ),
        tZ = (e) => {
            tr.info('[QV] | handleCanPlay: playerState: '.concat(eE)), null != eX.current && eE === B.rq.PLAYING && (tr.info('[QV] | handleCanPlay: did NOT early return'), eD && (tr.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eD)), eT(!1)), eP && (tr.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eP)), tO(ew, null != eG.current ? Date.now() - eG.current : null), eN(!1)), tr.info('[QV] | handleCanPlay: updating player state to playing'), tD(B.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!e_) return;
        let e = setTimeout(() => {
            ex(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [e_]);
    let [{ controlBarAnimSpring: tU }, tq] = (0, f.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                eU(!1);
            },
            onRest: (e) => {
                1 === e.value && eU(!0);
            }
        })),
        tQ = (0, l.useRef)(null),
        [{ captionHeightSpring: tG }, tH] = (0, f.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: W
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tH({
                captionHeightSpring: ec && null != te && null != (t = null == (e = tQ.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: eW
            }),
            () => {
                tG.stop();
            }
        );
    }, [ec, tH, eW, te, tG]),
        l.useEffect(
            () => (
                tq({
                    controlBarAnimSpring: tk || eB ? 1 : 0,
                    immediate: eW
                }),
                () => {
                    tU.stop();
                }
            ),
            [tk, tq, eW, eB, tU]
        );
    let tY = eE === B.rq.ENDED,
        tz = l.useCallback(
            async (e) => {
                if ((tb(e, S.jZ.LEARN_MORE), ee.id === Q.V6)) return void window.open(h.Z.getArticleURL(G.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ei) {
                    let e = w.r.build(ee.config).application.link;
                    (await (0, F.qP)(e)) && ei();
                }
                e2 && D.uK.trackExposure({ location: 'Quest External Dialog' }),
                    e8
                        ? (0, _.nc)(ee, {
                              content: e,
                              ctaContent: S.jZ.OPEN_GAME_LINK
                          })
                        : (0, _.FE)(ee, {
                              content: e,
                              ctaContent: S.jZ.OPEN_GAME_LINK
                          });
            },
            [tb, ee, ei, e2, e8]
        ),
        tK = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
        tW = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
        tX = e0 || eH.maxTimestampSec >= (null != (A = null == (o = eX.current) ? void 0 : o.currentTime) ? A : 0) + 1;
    return (0, r.jsx)(f.P3F, {
        className: z.videoCont,
        'data-fullscreen': ed,
        tabIndex: -1,
        onMouseEnter: tP,
        onMouseLeave: tN,
        onFocus: tP,
        onBlur: tN,
        children: (0, r.jsxs)('div', {
            className: z.videoContInnerRelative,
            children: [
                tY &&
                    (() => {
                        if (!(0, N.e)({ location: Q.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: ee,
                                        shouldShow: tY
                                    }),
                                    (0, r.jsx)('div', { className: z.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: tl,
                                        subtitle: to,
                                        icon: f.d4D,
                                        className: z.endScreenPanelRight,
                                        onClick: () => tz(y.jn.VIDEO_MODAL)
                                    })
                                ]
                            });
                        {
                            var e, t, n, l;
                            let o = null == (e = ee.config.taskConfigV2) ? void 0 : e.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(R.Z, {
                                quest: ee,
                                title: null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : Y.intl.string(Y.t.Ka526u),
                                subtitle: null != (n = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? n : Y.intl.string(Y.t.tKMcAg),
                                ctaBtnLabel: null != (l = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? l : Y.intl.string(Y.t.iiTtpK),
                                onCTAClick: () => tz(y.jn.VIDEO_MODAL_END_CARD)
                            });
                        }
                    })(),
                (0, r.jsxs)(b.Z, {
                    ref: (e) => {
                        (eX.current = e), (eb.current = e);
                    },
                    autoPlay: er,
                    playsInline: !0,
                    mediaLayoutType: ed ? H.hV.STATIC : H.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: tY,
                        [z.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tK ? void 0 : tK.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != eX.current && (eX.current.currentTime >= eL && (tr.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(eX.current.currentTime)), eR(eX.current.currentTime + 6 + 2 * Math.random()), tT(eX.current.currentTime)), eX.current.currentTime >= eM && (eV(eX.current.currentTime + 1), (0, j.qm)(ee.id, eS.taskType, eX.current.currentTime), en(eX.current.currentTime)), eY(ee.id, eX.current.currentTime, eX.current.duration), ey((eX.current.currentTime / eX.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != eX.current && (tT(eX.current.duration + 1), tr.info('[QV] | handleEnded: sending progress update: '.concat(eX.current.duration + 1)), eY(ee.id, eX.current.duration, eX.current.duration)), tD(B.rq.ENDED), eN(!1);
                    },
                    onLoadedData: (e) => {
                        tr.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eD)), eD && (tm(ew, null != eQ.current ? Date.now() - eQ.current : null), eT(!1), null != tc.current && (tc.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != eX.current && (tr.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tu)), e4(!0), ta !== I.n1.VIDEO_HLS && tL(ti), ez ? (eX.current.volume = 0) : (eX.current.volume = eK));
                    },
                    onLoadStart: () => {
                        (eQ.current = Date.now()), td(ew), tr.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eQ.current));
                    },
                    onPlaying: () => {
                        if (!eq.current) return;
                        let e = performance.now() - eo;
                        tr.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), tC(e), (eq.current = !1);
                    },
                    onWaiting: (e) => {
                        (eG.current = Date.now()), tr.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eG.current)), tE(ew), eN(!0);
                    },
                    onProgress: (e) => {
                        if (null == eX.current) return;
                        tr.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(eX.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < eX.current.buffered.length; e++) {
                            let n = eX.current.buffered.start(e),
                                r = eX.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / eX.current.duration,
                                    size: (r - n) / eX.current.duration
                                });
                        }
                        eI(t);
                    },
                    onCanPlay: tZ,
                    onCanPlayThrough: tZ,
                    onSeeked: () => {
                        tr.info('[QV] | handleSeeked'), e5(!0);
                    },
                    onAbort: () => tF(B.CY.ABORT),
                    onError: () => tF(B.CY.ERROR),
                    onEmptied: () => tF(B.CY.EMPTIED),
                    onStalled: () => tF(B.CY.STALLED),
                    onClick: () => {
                        tr.info('[QV] | handleVideoClick'), tR();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tW &&
                            (0, r.jsx)('track', {
                                ref: e$,
                                src: tW.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != ts &&
                            ta !== I.n1.VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tF(B.CY.SOURCE_ERROR),
                                src: ts.url,
                                type: ts.mimetype
                            })
                    ]
                }),
                (eD || eP) &&
                    eE === B.rq.PLAYING &&
                    (0, r.jsx)(f.$jN, {
                        type: f.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner
                    }),
                eE === B.rq.PAUSED && e6 === y.yE.LOST_FOCUS && (0, r.jsx)(X, {}),
                ea &&
                    eE !== B.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.P3F, {
                                onClick: () => es(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: z.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: z.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tU, tG], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(V.K, {
                                    quest: ee,
                                    onClose: () => {
                                        es(!1), tb(y.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE);
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
                                tU.to({
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
                            [z.play]: eE === B.rq.PLAYING,
                            [z.pause]: eE === B.rq.PAUSED
                        }),
                        children: eE === B.rq.PLAYING ? (0, r.jsx)(f.o1U, { className: z.playPausePopIcon }) : (0, r.jsx)(f.fpf, { className: z.playPausePopIcon })
                    },
                    eE
                ),
                ec &&
                    null != te &&
                    (0, r.jsx)(s.animated.div, {
                        className: z.captionContainer,
                        ref: tQ,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tU.to({
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
                            children: te.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: z.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tU.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tU.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tU.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(M.Z, {
                            percent: ej,
                            animate: !0 !== eJ.current && !e_,
                            interactionEnabled: e0 && eZ,
                            backgroundColor: tk ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tk ? ek : void 0,
                            duration: null != (Z = null == (p = eX.current) ? void 0 : p.duration) ? Z : 1,
                            maxSeekableTime: tk && eZ ? tn : void 0,
                            onClick: (e) => {
                                tL(e), eE === B.rq.ENDED && tD(B.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tw();
                            },
                            onScrubForward: () => {
                                tA();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: z.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tU.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tU.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tU.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(L.Z, {
                                videoRef: eX,
                                quest: ee,
                                playerState: eE,
                                animSpring: tU,
                                visible: tk,
                                seekForwardEnabled: tX,
                                hideCaptionBtn: null == tW,
                                handlePlaybackBtnClick: tR,
                                handleTranscriptBtnClick: () => {
                                    ea || (null != e1 && e1.questId === ee.id && e1.fetchStatus !== x.iF.NONE && e1.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(ee), es(!ea), tb(y.jn.VIDEO_MODAL, ea ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eu(!ec), tb(y.jn.VIDEO_MODAL, ec ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ed;
                                    tr.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, C.fn)(null == (e = eX.current) ? void 0 : e.parentNode, eX.current);
                                    t && null != n ? ((0, C.Dj)(n), n.addEventListener(C.NO, tI), tS(!0)) : t || null == n || (n.removeEventListener(C.NO, tI), tS(!1), (0, C.Pr)(n)), em(t);
                                },
                                handleSeekBackBtnClick: tw,
                                handleSeekForwardBtnClick: tA,
                                handleControlBarPendingInteraction: eF,
                                onVolumeChange: ty
                            })
                        })
                    ]
                })
            ]
        })
    });
}
