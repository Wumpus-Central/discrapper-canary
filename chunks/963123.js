n.d(t, { Z: () => ee }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(386230),
    c = n(94171),
    u = n(754700),
    d = n(670081),
    m = n(442837),
    f = n(780384),
    p = n(481060),
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
    q = n(281055),
    U = n(435585),
    Q = n(46140),
    G = n(981631),
    Y = n(217702),
    H = n(388032),
    z = n(844136);
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
        style: { background: (0, f.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: H.intl.string(H.t.U7Xrb2)
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
    return (0, r.jsx)(p.P3F, {
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
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-md/semibold',
                            className: z.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(p.X6q, {
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
    var t, n, o, f, E, A, Z;
    let { quest: ee, videoSessionId: et, onOptimisticProgressUpdate: en, autoplay: er, parentTransitionState: el, performanceClockStartTime: eo, onClose: ei } = e,
        ea = (0, x.km)((e) => e.transcriptEnabled),
        es = (0, x.km)((e) => e.setTranscriptEnabled),
        ec = (0, x.km)((e) => e.captionEnabled),
        eu = (0, x.km)((e) => e.setCaptionEnabled),
        ed = (0, x.km)((e) => e.fullScreenEnabled),
        em = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ef, focusedChanged: ep } = (0, q.xU)(),
        { visible: ev, visibleChanged: eg, targetRef: eb } = (0, q.Yy)(),
        [eE, eO] = l.useState(!0 === er ? B.rq.PLAYING : B.rq.PAUSED),
        [eh, eC] = l.useState(!1),
        [eS, ej] = l.useState(!1),
        ey = (0, _.il)(ee),
        [e_, ex] = l.useState(ey.percentComplete),
        [eD, eT] = l.useState(!1),
        [eP, eN] = l.useState(!0),
        [ek, eI] = l.useState(!1),
        [ew, eA] = l.useState([]),
        [eL, eR] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eM, eV] = l.useState(0),
        [eB, eF] = l.useState(0),
        [eZ, eq] = l.useState(!1),
        [eU, eQ] = l.useState(!1),
        eG = l.useRef(!0),
        eY = l.useRef(null),
        eH = l.useRef(null),
        ez = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[ee.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eK = (0, x.km)((e) => e.setVideoProgress),
        eW = (0, x.km)((e) => e.muted),
        eX = (0, x.km)((e) => e.volume),
        e$ = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        eJ = (0, l.useRef)(null),
        e0 = (0, l.useRef)(null),
        e1 = l.useRef(!0),
        e2 = (null == (t = ee.userStatus) ? void 0 : t.completedAt) != null,
        e8 = (0, x.km)((e) => e.transcript),
        e6 = (0, D.Ec)(ee),
        e4 = (0, D.H)() && e6,
        [e7, e3] = l.useState(null),
        [e9, e5] = l.useState(!1),
        [te, tt] = l.useState(!1),
        [tn, tr] = l.useState(null),
        tl = e2 ? (null != (E = null == (n = eJ.current) ? void 0 : n.duration) ? E : 0) : Math.max(ez.maxTimestampSec, ey.progressSeconds),
        to = l.useMemo(
            () =>
                (0, P.T)({
                    quest: ee,
                    location: Q.dr.VIDEO_MODAL
                }),
            [ee]
        ),
        { title: ti, subtitle: ta } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : H.intl.string(H.t.iiTtpK),
                a = null != (r = null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? n : null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? r : H.intl.string(H.t.mxaHf3),
                s = (0, _.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : H.intl.string(H.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a
            };
        })(ee),
        ts = e2 ? (ez.timestampSec >= ez.duration ? 0 : ez.timestampSec) : Math.max(ez.timestampSec, ey.progressSeconds);
    (0, v.Ng)(() => {
        e1.current && ((e1.current = !1), eR(O.Z.getEffectiveConnectionSpeed()), e2 && ez.timestampSec >= ez.duration && eK(ee.id, 0, ez.duration));
    });
    let {
            videoVariant: tc,
            videoAsset: tu,
            hlsRef: td
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, T.z)(e, Q.dr.VIDEO_MODAL),
                d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                m = l.useMemo(() => (null != d ? (c && a.ZP.isSupported() && null != d.videoHls ? I.n1.VIDEO_HLS : K.has(n) || null == d.videoLowRes ? I.n1.VIDEO : I.n1.VIDEO_LOW_RES) : null), [d, n, c]),
                f = l.useMemo(() => (null != m ? (0, I.z0)(e, u.X.WATCH_VIDEO, m, I.O.VIDEO) : null), [e, m]),
                p = () => {
                    null != s.current && 800000 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (m !== I.n1.VIDEO_HLS || null == f || null == t.current || i.current) return;
                    (s.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1
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
                    hlsRef: s
                }
            );
        })(ee, eJ, eL, ts),
        tm = (0, I.CC)(tc),
        { trackQuestVideoLoadingStarted: tf, trackQuestVideoLoadingEnded: tp, trackQuestVideoProgressed: tv, trackQuestVideoResumed: tg, trackQuestVideoPaused: tb, trackQuestVideoFocusChange: tE, trackQuestContentClick: tO, trackQuestVideoBufferingStarted: th, trackQuestVideoBufferingEnded: tC, trackWatchTimeAnalytics: tS, trackQuestVideoTimeToFirstFrame: tj, trackQuestVideoFullscreenChanged: ty, trackQuestVideoError: t_, trackQuestVideoVolumeChanged: tx } = (0, U.Z)(ee, eJ, td, et, tm),
        tD = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = eJ.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tT } = (0, k.Z)({
            getCurrentVideoTime: tD,
            isPlaying: eE === B.rq.PLAYING,
            isMetadataLoaded: e9,
            isInitialSeekComplete: te,
            onAnalytics: tS,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tP = l.useCallback(
            (e) => {
                if ((to.info('[QV] | updatePlayerState | playerState: '.concat(e)), eO(e), null != eJ.current))
                    switch (e) {
                        case B.rq.PLAYING:
                            eJ.current.paused && tg(e7), e3(null), eJ.current.play();
                            break;
                        case B.rq.PAUSED:
                            eJ.current.paused || tT(), eJ.current.pause(), (eG.current = !1);
                            break;
                        case B.rq.ENDED:
                            tT(), es(!1);
                    }
            },
            [tg, e7, tT, es, to]
        );
    l.useEffect(() => {
        tb(e7);
    }, [e7, tb]),
        l.useEffect(() => {
            ep && tE(ef, eE);
        }, [ef, ep, eE, tE]);
    let tN = l.useCallback(
        (e) => {
            var t;
            e2 || (null == (t = ee.userStatus) ? void 0 : t.enrolledAt) == null || (to.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, _.FI)(ee, e)), tv();
        },
        [e2, ee, to, tv]
    );
    l.useEffect(() => {
        (el !== p.Dvm.HIDDEN && el !== p.Dvm.EXITING && el !== p.Dvm.EXITED && (null == el || !eg || ev || e2) && (!ep || ef || e2)) || null == eJ.current || eE !== B.rq.PLAYING || (to.info('[QV] | Pausing video | playerState: '.concat(eE, ', parentTransitionState: ').concat(el, ', visible: ').concat(ev, ', focused: ').concat(ef, ', isQuestCompleted: ').concat(e2)), tP(B.rq.PAUSED), e2 || e3(y.yE.LOST_FOCUS));
    }, [el, ef, ep, ev, eg, eE, e2, tP, tN, to]);
    let [tk, tI] = l.useState(!1),
        tw = l.useRef(null),
        tA = l.useRef(performance.now()),
        tL = l.useCallback(() => {
            null != tw.current && clearTimeout(tw.current),
                eE === B.rq.PLAYING &&
                    (tw.current = setTimeout(
                        () => {
                            eE === B.rq.PLAYING && tI(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tA.current))
                    ));
        }, [eE]),
        tR = () => {
            eC(!0), tI(!1), (tA.current = performance.now()), null != tw.current && clearTimeout(tw.current);
        },
        tM = () => {
            eC(!1), tI(!1);
        };
    l.useEffect(() => {
        if (eE !== B.rq.PLAYING) {
            tI(!1), null != tw.current && clearTimeout(tw.current);
            return;
        }
        return (
            tL(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [eE, tL]);
    let tV = !tk && (eS || eh || eE === B.rq.PAUSED || eE === B.rq.ENDED),
        tB = l.useCallback(() => {
            var e;
            to.info('[QV] | handleFullScreenExit');
            let t = (0, C.fn)(null == (e = eJ.current) ? void 0 : e.parentNode, eJ.current);
            null == t || (0, C.rB)(t) || (t.removeEventListener(C.NO, tB), em(!1), ty(!1));
        }, [em, to, ty]),
        tF = () => {
            if (null == eJ.current) return;
            let e = Math.max(eJ.current.currentTime - 10, 0);
            to.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tq(e), eE === B.rq.ENDED && tP(B.rq.PAUSED), tO(y.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD);
        },
        tZ = () => {
            if (null == eJ.current || !t6) return;
            let e = Math.min(eJ.current.currentTime + 10, tl);
            to.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tq(e), eE !== B.rq.ENDED && e >= eJ.current.duration && tP(B.rq.ENDED), tO(y.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eJ.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, tB);
        };
    }, [tB]);
    let tq = l.useCallback(
            (e) => {
                null != eJ.current && (to.info('[QV] | seekTimeline | timeSec: '.concat(e)), tT(), eT(!0), tt(!1), (eJ.current.currentTime = e), eK(ee.id, e, eJ.current.duration));
            },
            [eJ, eK, ee.id, tT, to]
        ),
        tU = () => {
            if (null != eJ.current)
                switch ((to.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eE)), eE)) {
                    case B.rq.ENDED:
                        tq(0), tP(B.rq.PLAYING);
                        break;
                    case B.rq.PLAYING:
                        tP(B.rq.PAUSED), e3(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tP(B.rq.PLAYING);
                }
        },
        tQ = (e) => {
            tr(e);
        },
        tG = (e) => {
            tr((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tY = l.useCallback(() => {
            if (null == eJ.current || (to.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(eJ.current.textTracks.length)), 0 === eJ.current.textTracks.length)) return;
            let e = eJ.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, F.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tQ(n)), (n.onexit = () => tG(n)));
                }
        }, [eJ, to]);
    l.useEffect(() => {
        if (null == e0.current) return;
        let e = e0.current;
        return (
            e.addEventListener('load', tY),
            () => {
                null != e && e.removeEventListener('load', tY);
            }
        );
    }, [e0, tY]);
    let tH = l.useCallback(
            (e) => {
                var t;
                to.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = eJ.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tm, ', connectionSpeed: ')
                        .concat(eL)
                ),
                    t_(e, eL);
            },
            [eL, t_, eJ, tm, to]
        ),
        tz = (e) => {
            to.info('[QV] | handleCanPlay: playerState: '.concat(eE)), null != eJ.current && eE === B.rq.PLAYING && (to.info('[QV] | handleCanPlay: did NOT early return'), eP && (to.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eP)), eN(!1)), ek && (to.info('[QV] | handleCanPlay: waitingForChunk: '.concat(ek)), tC(eL, null != eH.current ? performance.now() - eH.current : null), eI(!1)), to.info('[QV] | handleCanPlay: updating player state to playing'), tP(B.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!eD) return;
        let e = setTimeout(() => {
            eT(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eD]);
    let [{ controlBarAnimSpring: tK }, tW] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                eQ(!1);
            },
            onRest: (e) => {
                1 === e.value && eQ(!0);
            }
        })),
        tX = (0, l.useRef)(null),
        [{ captionHeightSpring: t$ }, tJ] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: W
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tJ({
                captionHeightSpring: ec && null != tn && null != (t = null == (e = tX.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e$
            }),
            () => {
                t$.stop();
            }
        );
    }, [ec, tJ, e$, tn, t$]),
        l.useEffect(
            () => (
                tW({
                    controlBarAnimSpring: tV || eZ ? 1 : 0,
                    immediate: e$
                }),
                () => {
                    tK.stop();
                }
            ),
            [tV, tW, e$, eZ, tK]
        );
    let t0 = eE === B.rq.ENDED,
        t1 = l.useCallback(
            async (e) => {
                if (ed) {
                    var t;
                    let e = (0, C.fn)(null == (t = eJ.current) ? void 0 : t.parentNode, eJ.current);
                    null != e && (e.removeEventListener(C.NO, tB), (0, C.Pr)(e), em(!1), ty(!1));
                }
                if ((tO(e, S.jZ.LEARN_MORE), ee.id === Q.V6)) return void window.open(h.Z.getArticleURL(G.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ei) {
                    let e = w.r.build(ee.config).application.link;
                    (await (0, F.qP)(e)) && ei();
                }
                e6 && D.uK.trackExposure({ location: 'Quest External Dialog' }),
                    e4
                        ? (0, _.nc)(ee, {
                              content: e,
                              ctaContent: S.jZ.OPEN_GAME_LINK
                          })
                        : (0, _.FE)(ee, {
                              content: e,
                              ctaContent: S.jZ.OPEN_GAME_LINK
                          });
            },
            [tO, ee, ei, e6, e4, ed, eJ, tB, em, ty]
        ),
        t2 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
        t8 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
        t6 = e2 || ez.maxTimestampSec >= (null != (A = null == (o = eJ.current) ? void 0 : o.currentTime) ? A : 0) + 1;
    return (0, r.jsx)(p.P3F, {
        className: z.videoCont,
        'data-fullscreen': ed,
        tabIndex: -1,
        onMouseEnter: tR,
        onMouseLeave: tM,
        onMouseMove: () => {
            tI(!1), (tA.current = performance.now()), tL();
        },
        onFocus: tR,
        onBlur: tM,
        children: (0, r.jsxs)('div', {
            className: z.videoContInnerRelative,
            children: [
                t0 &&
                    (() => {
                        if (!(0, N.e)({ location: Q.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: ee,
                                        shouldShow: t0
                                    }),
                                    (0, r.jsx)('div', { className: z.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: ti,
                                        subtitle: ta,
                                        icon: p.d4D,
                                        className: z.endScreenPanelRight,
                                        onClick: () => t1(y.jn.VIDEO_MODAL)
                                    })
                                ]
                            });
                        {
                            var e, t, n;
                            let l = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(R.Z, {
                                quest: ee,
                                title: null != (e = null == l ? void 0 : l.messages.videoEndCtaTitle) ? e : H.intl.string(H.t.Ka526u),
                                subtitle: null != (t = null == l ? void 0 : l.messages.videoEndCtaSubtitle) ? t : H.intl.string(H.t.tKMcAg),
                                ctaBtnLabel: null != (n = null == l ? void 0 : l.messages.videoEndCtaButtonLabel) ? n : H.intl.string(H.t.iiTtpK),
                                onCTAClick: () => t1(y.jn.VIDEO_MODAL_END_CARD)
                            });
                        }
                    })(),
                (0, r.jsxs)(b.Z, {
                    ref: (e) => {
                        (eJ.current = e), (eb.current = e);
                    },
                    autoPlay: er,
                    playsInline: !0,
                    mediaLayoutType: ed ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: t0,
                        [z.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == t2 ? void 0 : t2.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != eJ.current && (eJ.current.currentTime >= eM && (to.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(eJ.current.currentTime)), eV(eJ.current.currentTime + 6 + 2 * Math.random()), tN(eJ.current.currentTime)), eJ.current.currentTime >= eB && (eF(eJ.current.currentTime + 1), (0, j.qm)(ee.id, ey.taskType, eJ.current.currentTime), en(eJ.current.currentTime)), eK(ee.id, eJ.current.currentTime, eJ.current.duration), ex((eJ.current.currentTime / eJ.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != eJ.current && (tN(eJ.current.duration + 1), to.info('[QV] | handleEnded: sending progress update: '.concat(eJ.current.duration + 1)), eK(ee.id, eJ.current.duration, eJ.current.duration)), tP(B.rq.ENDED), eI(!1);
                    },
                    onLoadedData: (e) => {
                        to.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eP)), eP && (tp(eL, null != eY.current ? performance.now() - eY.current : null), eN(!1), null != td.current && (td.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != eJ.current && (to.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tm)), e5(!0), tc !== I.n1.VIDEO_HLS && tq(ts), eW ? (eJ.current.volume = 0) : (eJ.current.volume = eX));
                    },
                    onLoadStart: () => {
                        (eY.current = performance.now()), tf(eL), to.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eY.current));
                    },
                    onPlaying: () => {
                        if (!eG.current) return;
                        let e = performance.now() - eo;
                        to.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), tj(e), (eG.current = !1);
                    },
                    onWaiting: (e) => {
                        (eH.current = performance.now()), to.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eH.current)), th(eL), eI(!0);
                    },
                    onProgress: (e) => {
                        if (null == eJ.current) return;
                        to.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(eJ.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < eJ.current.buffered.length; e++) {
                            let n = eJ.current.buffered.start(e),
                                r = eJ.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / eJ.current.duration,
                                    size: (r - n) / eJ.current.duration
                                });
                        }
                        eA(t);
                    },
                    onCanPlay: tz,
                    onCanPlayThrough: tz,
                    onSeeked: () => {
                        to.info('[QV] | handleSeeked'), tt(!0);
                    },
                    onAbort: () => tH(B.CY.ABORT),
                    onError: () => tH(B.CY.ERROR),
                    onEmptied: () => tH(B.CY.EMPTIED),
                    onStalled: () => tH(B.CY.STALLED),
                    onClick: () => {
                        to.info('[QV] | handleVideoClick'), tU();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != t8 &&
                            (0, r.jsx)('track', {
                                ref: e0,
                                src: t8.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tu &&
                            tc !== I.n1.VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tH(B.CY.SOURCE_ERROR),
                                src: tu.url,
                                type: tu.mimetype
                            })
                    ]
                }),
                (eP || ek) &&
                    eE === B.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner
                    }),
                eE === B.rq.PAUSED && e7 === y.yE.LOST_FOCUS && (0, r.jsx)(X, {}),
                ea &&
                    eE !== B.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => es(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: z.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: z.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tK, t$], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(V.K, {
                                    quest: ee,
                                    onClose: () => {
                                        es(!1), tO(y.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE);
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
                                tK.to({
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
                        children: eE === B.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: z.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: z.playPausePopIcon })
                    },
                    eE
                ),
                ec &&
                    null != tn &&
                    (0, r.jsx)(s.animated.div, {
                        className: z.captionContainer,
                        ref: tX,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tK.to({
                                        range: [0, 1],
                                        output: [0, -50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-lg/semibold',
                            color: 'always-white',
                            className: z.captionText,
                            children: tn.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: z.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tK.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tK.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tK.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(M.Z, {
                            percent: e_,
                            animate: !0 !== e1.current && !eD,
                            interactionEnabled: e2 && eU,
                            backgroundColor: tV ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tV ? ew : void 0,
                            duration: null != (Z = null == (f = eJ.current) ? void 0 : f.duration) ? Z : 1,
                            maxSeekableTime: tV && eU ? tl : void 0,
                            onClick: (e) => {
                                tq(e), eE === B.rq.ENDED && tP(B.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tF();
                            },
                            onScrubForward: () => {
                                tZ();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: z.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            onFocus: () => ej(!0),
                            onBlur: () => ej(!1),
                            children: (0, r.jsx)(L.Z, {
                                videoRef: eJ,
                                quest: ee,
                                playerState: eE,
                                animSpring: tK,
                                visible: tV,
                                seekForwardEnabled: t6,
                                hideCaptionBtn: null == t8,
                                handlePlaybackBtnClick: tU,
                                handleTranscriptBtnClick: () => {
                                    ea || (null != e8 && e8.questId === ee.id && e8.fetchStatus !== x.iF.NONE && e8.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(ee, u.X.WATCH_VIDEO), es(!ea), tO(y.jn.VIDEO_MODAL, ea ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eu(!ec), tO(y.jn.VIDEO_MODAL, ec ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ed;
                                    to.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, C.fn)(null == (e = eJ.current) ? void 0 : e.parentNode, eJ.current);
                                    t && null != n ? ((0, C.Dj)(n), n.addEventListener(C.NO, tB), ty(!0)) : t || null == n || (n.removeEventListener(C.NO, tB), ty(!1), (0, C.Pr)(n)), em(t);
                                },
                                handleSeekBackBtnClick: tF,
                                handleSeekForwardBtnClick: tZ,
                                handleControlBarPendingInteraction: eq,
                                onVolumeChange: tx
                            })
                        })
                    ]
                })
            ]
        })
    });
}
