(n.d(t, { Z: () => ee }), n(388685), n(539854));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(66546),
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
    y = n(272008),
    j = n(497505),
    x = n(184299),
    T = n(347382),
    D = n(5881),
    P = n(249485),
    R = n(208109),
    N = n(117242),
    I = n(720293),
    k = n(566078),
    w = n(602667),
    A = n(881773),
    L = n(350312),
    M = n(355243),
    V = n(106743),
    B = n(223418),
    Z = n(604162),
    F = n(747717),
    U = n(281055),
    q = n(435585),
    H = n(46140),
    Y = n(981631),
    Q = n(217702),
    G = n(388032),
    z = n(844136);
let K = new Set([Y.IyS.FIVE_G, Y.IyS.FOUR_G, Y.IyS.UNKNOWN]),
    X = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function W() {
    let e = (0, m.e7)([O.Z], () => O.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: z.pauseText,
        style: { background: (0, f.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-default',
            children: G.intl.string(G.t.U7Xrb2)
        })
    });
}
function $(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: o } = e,
        a = l.useMemo(() => (0, I.z0)(t, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(w.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: o,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: a.url,
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
function ee(e) {
    var t, n, o, f, O, w, F;
    let { quest: ee, videoSessionId: et, onOptimisticProgressUpdate: en, autoplay: er, parentTransitionState: el, performanceClockStartTime: eo, onClose: ei, sourceQuestContent: ea, orientation: es } = e,
        ec = (0, x.km)((e) => e.transcriptEnabled),
        eu = (0, x.km)((e) => e.setTranscriptEnabled),
        ed = (0, x.km)((e) => e.captionEnabled),
        em = (0, x.km)((e) => e.setCaptionEnabled),
        ef = (0, x.km)((e) => e.fullScreenEnabled),
        ep = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ev, focusedChanged: eE } = (0, U.xU)(),
        { visible: eg, visibleChanged: eO, targetRef: eb } = (0, U.Yy)(),
        [eC, eS] = l.useState(!0 === er ? B.rq.PLAYING : B.rq.PAUSED),
        [eh, e_] = l.useState(!1),
        [ey, ej] = l.useState(!1),
        ex = (0, _.il)(ee),
        [eT, eD] = l.useState(ex.percentComplete),
        [eP, eR] = l.useState(!1),
        [eN, eI] = l.useState(!0),
        [ek, ew] = l.useState(!1),
        [eA, eL] = l.useState([]),
        [eM, eV] = l.useState(b.Z.getEffectiveConnectionSpeed()),
        [eB, eZ] = l.useState(0),
        [eF, eU] = l.useState(0),
        [eq, eH] = l.useState(!1),
        [eY, eQ] = l.useState(!1),
        eG = l.useRef(!0),
        ez = l.useRef(null),
        eK = l.useRef(null),
        eX = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[ee.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eW = (0, x.km)((e) => e.setVideoProgress),
        e$ = (0, x.km)((e) => e.muted),
        eJ = (0, x.km)((e) => e.volume),
        e0 = (0, m.e7)([E.Z], () => E.Z.useReducedMotion),
        e1 = (0, l.useRef)(null),
        e2 = (0, l.useRef)(null),
        e8 = l.useRef(!0),
        e6 = (null == (t = ee.userStatus) ? void 0 : t.completedAt) != null,
        e4 = (0, x.km)((e) => e.transcript),
        [e7, e3] = l.useState(null),
        e9 = (0, P._)({ location: H.dr.VIDEO_MODAL }),
        [e5, te] = l.useState(!1),
        [tt, tn] = l.useState(!1),
        [tr, tl] = l.useState(null),
        to = e6 ? (null != (O = null == (n = e1.current) ? void 0 : n.duration) ? O : 0) : Math.max(eX.maxTimestampSec, ex.progressSeconds),
        ti = l.useMemo(
            () =>
                (0, D.T)({
                    quest: ee,
                    location: H.dr.VIDEO_MODAL
                }),
            [ee]
        ),
        { title: ta, subtitle: ts } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : G.intl.string(G.t.iiTtpK),
                a = null != (r = null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? n : null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? r : G.intl.string(G.t.mxaHf3),
                s = (0, _.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : G.intl.string(G.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a
            };
        })(ee),
        tc = e6 ? (eX.timestampSec >= eX.duration ? 0 : eX.timestampSec) : Math.max(eX.timestampSec, ex.progressSeconds);
    (0, v.Ng)(() => {
        e8.current && ((e8.current = !1), eV(b.Z.getEffectiveConnectionSpeed()), e6 && eX.timestampSec >= eX.duration && eW(ee.id, 0, eX.duration));
    });
    let {
            videoVariant: tu,
            videoAsset: td,
            hlsRef: tm
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, T.z)(e, H.dr.VIDEO_MODAL),
                d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                m = l.useMemo(() => (null != d ? (c && a.ZP.isSupported() && null != d.videoHls ? I.n1.VIDEO_HLS : K.has(n) || null == d.videoLowRes ? I.n1.VIDEO : I.n1.VIDEO_LOW_RES) : null), [d, n, c]),
                f = l.useMemo(() => (null != m ? (0, I.z0)(e, u.X.WATCH_VIDEO, m, I.O.VIDEO) : null), [e, m]),
                p = () => {
                    null != s.current && 800000 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (m !== I.n1.VIDEO_HLS || null == f || null == t.current || i.current) return;
                    ((s.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1
                    })),
                        s.current.on(a.ZP.Events.FRAG_LOADING, p),
                        s.current.loadSource(f.url),
                        s.current.attachMedia(t.current),
                        (i.current = !0));
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
        })(ee, e1, eM, tc),
        tf = (0, I.CC)(tu),
        {
            trackQuestVideoLoadingStarted: tp,
            trackQuestVideoLoadingEnded: tv,
            trackQuestVideoProgressed: tE,
            trackQuestVideoResumed: tg,
            trackQuestVideoPaused: tO,
            trackQuestVideoFocusChange: tb,
            trackQuestContentClick: tC,
            trackQuestVideoBufferingStarted: tS,
            trackQuestVideoBufferingEnded: th,
            trackWatchTimeAnalytics: t_,
            trackQuestVideoTimeToFirstFrame: ty,
            trackQuestVideoFullscreenChanged: tj,
            trackQuestVideoError: tx,
            trackQuestVideoVolumeChanged: tT
        } = (0, q.Z)({
            quest: ee,
            videoRef: e1,
            hlsRef: tm,
            videoSessionId: et,
            videoAssetId: tf,
            sourceQuestContent: ea,
            logger: ti
        }),
        tD = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e1.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tP } = (0, N.Z)({
            getCurrentVideoTime: tD,
            isPlaying: eC === B.rq.PLAYING,
            isMetadataLoaded: e5,
            isInitialSeekComplete: tt,
            onAnalytics: t_,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tR = l.useCallback(
            (e) => {
                if ((ti.info('[QV] | updatePlayerState | playerState: '.concat(e)), eS(e), null != e1.current))
                    switch (e) {
                        case B.rq.PLAYING:
                            (e1.current.paused && tg(e7), e3(null), e1.current.play());
                            break;
                        case B.rq.PAUSED:
                            (e1.current.paused || tP(), e1.current.pause(), (eG.current = !1));
                            break;
                        case B.rq.ENDED:
                            (tP(), eu(!1));
                    }
            },
            [tg, e7, tP, eu, ti]
        );
    (l.useEffect(() => {
        tO(e7);
    }, [e7, tO]),
        l.useEffect(() => {
            eE && tb(ev, eC);
        }, [ev, eE, eC, tb]));
    let tN = l.useCallback(
        (e) => {
            var t;
            (e6 || (null == (t = ee.userStatus) ? void 0 : t.enrolledAt) == null || (ti.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, _.FI)(ee, e)), tE());
        },
        [e6, ee, ti, tE]
    );
    l.useEffect(() => {
        (el !== p.Dvm.HIDDEN && el !== p.Dvm.EXITING && el !== p.Dvm.EXITED && (null == el || !eO || eg || e6) && (!eE || ev || e6)) || null == e1.current || eC !== B.rq.PLAYING || (ti.info('[QV] | Pausing video | playerState: '.concat(eC, ', parentTransitionState: ').concat(el, ', visible: ').concat(eg, ', focused: ').concat(ev, ', isQuestCompleted: ').concat(e6)), tR(B.rq.PAUSED), e6 || e3(j.yE.LOST_FOCUS));
    }, [el, ev, eE, eg, eO, eC, e6, tR, tN, ti]);
    let [tI, tk] = l.useState(!1),
        tw = l.useRef(null),
        tA = l.useRef(performance.now()),
        tL = l.useCallback(() => {
            (null != tw.current && clearTimeout(tw.current),
                eC === B.rq.PLAYING &&
                    (tw.current = setTimeout(
                        () => {
                            eC === B.rq.PLAYING && tk(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tA.current))
                    )));
        }, [eC]),
        tM = () => {
            (tk(!1), (tA.current = performance.now()), tL());
        };
    l.useEffect(() => {
        if (eC !== B.rq.PLAYING) {
            (tk(!1), null != tw.current && clearTimeout(tw.current));
            return;
        }
        return (
            tL(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [eC, tL]);
    let tV = !tI && (ey || eh || eC === B.rq.ENDED),
        tB = l.useCallback(() => {
            var e;
            ti.info('[QV] | handleFullScreenExit');
            let t = (0, S.fn)(null == (e = e1.current) ? void 0 : e.parentNode, e1.current);
            null == t || (0, S.rB)(t) || (t.removeEventListener(S.NO, tB), ep(!1), tj(!1));
        }, [ep, ti, tj]),
        tZ = () => {
            if (null == e1.current) return;
            let e = Math.max(e1.current.currentTime - 10, 0);
            (ti.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tU(e), eC === B.rq.ENDED && tR(B.rq.PAUSED), tC(j.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD));
        },
        tF = () => {
            if (null == e1.current || !t7) return;
            let e = Math.min(e1.current.currentTime + 10, to);
            (ti.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tU(e), eC !== B.rq.ENDED && e >= e1.current.duration && tR(B.rq.ENDED), tC(j.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD));
        };
    l.useEffect(() => {
        let e = e1.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tB);
        };
    }, [tB]);
    let tU = l.useCallback(
            (e) => {
                null != e1.current && (ti.info('[QV] | seekTimeline | timeSec: '.concat(e)), tP(), eR(!0), tn(!1), (e1.current.currentTime = e), eW(ee.id, e, e1.current.duration));
            },
            [e1, eW, ee.id, tP, ti]
        ),
        tq = () => {
            if (null != e1.current)
                switch ((ti.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eC)), eC)) {
                    case B.rq.ENDED:
                        (tU(0), tR(B.rq.PLAYING));
                        break;
                    case B.rq.PLAYING:
                        (tR(B.rq.PAUSED), e3(j.yE.PAUSE_BUTTON));
                        break;
                    default:
                        tR(B.rq.PLAYING);
                }
        },
        tH = (e) => {
            tl(e);
        },
        tY = (e) => {
            tl((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tQ = l.useCallback(() => {
            if (null == e1.current || (ti.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(e1.current.textTracks.length)), 0 === e1.current.textTracks.length)) return;
            let e = e1.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, Z.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tH(n)), (n.onexit = () => tY(n)));
                }
        }, [e1, ti]),
        tG = (function (e, t) {
            let { enabled: n, forceNoCrossOrigin: r } = e;
            if (!n || (!r && t)) return 'anonymous';
        })(e9, ed),
        tz = 'anonymous' === tG;
    l.useEffect(() => {
        if (null == e2.current || !tz) return;
        let e = e2.current;
        return (
            e.addEventListener('load', tQ),
            () => {
                null != e && e.removeEventListener('load', tQ);
            }
        );
    }, [e2, tQ, tz]);
    let tK = l.useCallback(
            (e) => {
                var t;
                (ti.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = e1.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tf, ', connectionSpeed: ')
                        .concat(eM)
                ),
                    tx(e));
            },
            [eM, tx, e1, tf, ti]
        ),
        tX = (e) => {
            (ti.info('[QV] | handleCanPlay: playerState: '.concat(eC)), null != e1.current && eC === B.rq.PLAYING && (ti.info('[QV] | handleCanPlay: did NOT early return'), eN && (ti.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eN)), eI(!1)), ek && (ti.info('[QV] | handleCanPlay: waitingForChunk: '.concat(ek)), th(null != eK.current ? performance.now() - eK.current : null), ew(!1)), ti.info('[QV] | handleCanPlay: updating player state to playing'), tR(B.rq.PLAYING)));
        };
    l.useEffect(() => {
        if (!eP) return;
        let e = setTimeout(() => {
            eR(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eP]);
    let [{ controlBarAnimSpring: tW }, t$] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: X,
            onStart: () => {
                eQ(!1);
            },
            onRest: (e) => {
                1 === e.value && eQ(!0);
            }
        })),
        tJ = (0, l.useRef)(null),
        [{ captionHeightSpring: t0 }, t1] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: X
        }));
    (l.useEffect(() => {
        var e, t;
        return (
            t1({
                captionHeightSpring: ed && null != tr && null != (t = null == (e = tJ.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e0
            }),
            () => {
                t0.stop();
            }
        );
    }, [ed, t1, e0, tr, t0]),
        l.useEffect(
            () => (
                t$({
                    controlBarAnimSpring: tV || eq ? 1 : 0,
                    immediate: e0
                }),
                () => {
                    tW.stop();
                }
            ),
            [tV, t$, e0, eq, tW]
        ));
    let t2 = eC === B.rq.ENDED,
        t8 = l.useCallback(
            async (e) => {
                if (ef) {
                    var t;
                    let e = (0, S.fn)(null == (t = e1.current) ? void 0 : t.parentNode, e1.current);
                    null != e && (e.removeEventListener(S.NO, tB), (0, S.Pr)(e), ep(!1), tj(!1));
                }
                if ((tC(e, h.jZ.LEARN_MORE), ee.id === H.V6)) return void window.open(C.Z.getArticleURL(Y.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ei) {
                    let e = k.r.build(ee.config).application.link;
                    (await (0, Z.qP)(e)) && ei();
                }
                (0, _.nc)(ee, {
                    content: e,
                    ctaContent: h.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: ea
                });
            },
            [tC, ee, ei, ef, e1, tB, ep, tj, ea]
        ),
        t6 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
        t4 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
        t7 = e6 || eX.maxTimestampSec >= (null != (w = null == (o = e1.current) ? void 0 : o.currentTime) ? w : 0) + 1,
        t3 = l.useMemo(() => null === (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.TRANSCRIPT), [ee]);
    return (0, r.jsx)(p.P3F, {
        className: z.videoCont,
        'data-fullscreen': ef,
        tabIndex: -1,
        onMouseEnter: () => {
            (e_(!0), tk(!1), (tA.current = performance.now()), null != tw.current && clearTimeout(tw.current));
        },
        onMouseLeave: () => {
            (e_(!1), tk(!1));
        },
        onMouseMove: tM,
        onKeyDown: tM,
        children: (0, r.jsxs)('div', {
            className: i()(z.videoContInnerRelative, {
                [z.videoContInnerRelativePortrait]: 'portrait' === es,
                [z.videoContInnerRelativeLandscape]: 'landscape' === es
            }),
            children: [
                t2 &&
                    (() => {
                        if (!(0, R.e)({ location: H.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: ee,
                                        shouldShow: t2,
                                        sourceQuestContent: ea
                                    }),
                                    (0, r.jsx)('div', { className: z.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: ta,
                                        subtitle: ts,
                                        icon: p.d4D,
                                        className: z.endScreenPanelRight,
                                        onClick: () => t8(j.jn.VIDEO_MODAL)
                                    })
                                ]
                            });
                        {
                            var e, t, n;
                            let l = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(L.Z, {
                                quest: ee,
                                title: null != (e = null == l ? void 0 : l.messages.videoEndCtaTitle) ? e : G.intl.string(G.t.Ka526u),
                                subtitle: null != (t = null == l ? void 0 : l.messages.videoEndCtaSubtitle) ? t : G.intl.string(G.t.tKMcAg),
                                ctaBtnLabel: null != (n = null == l ? void 0 : l.messages.videoEndCtaButtonLabel) ? n : G.intl.string(G.t.iiTtpK),
                                onCTAClick: () => t8(j.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: ea
                            });
                        }
                    })(),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        ((e1.current = e), (eb.current = e));
                    },
                    autoPlay: er,
                    playsInline: !0,
                    mediaLayoutType: ef ? Q.hV.STATIC : Q.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: t2,
                        [z.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == t6 ? void 0 : t6.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e1.current && (e1.current.currentTime >= eB && (ti.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(e1.current.currentTime)), eZ(e1.current.currentTime + 6 + 2 * Math.random()), tN(e1.current.currentTime)), e1.current.currentTime >= eF && (eU(e1.current.currentTime + 1), (0, y.qm)(ee.id, ex.taskType, e1.current.currentTime), en(e1.current.currentTime)), eW(ee.id, e1.current.currentTime, e1.current.duration), eD((e1.current.currentTime / e1.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        (null != e1.current && (tN(e1.current.duration + 1), ti.info('[QV] | handleEnded: sending progress update: '.concat(e1.current.duration + 1)), eW(ee.id, e1.current.duration, e1.current.duration)), tR(B.rq.ENDED), ew(!1));
                    },
                    onLoadedData: (e) => {
                        (ti.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eN)), eN && (tv(null != ez.current ? performance.now() - ez.current : null), eI(!1), null != tm.current && (tm.current.config.minAutoBitrate = 800000)));
                    },
                    onLoadedMetadata: (e) => {
                        null != e1.current && (ti.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tf)), te(!0), tu !== I.n1.VIDEO_HLS && tU(tc), e$ ? (e1.current.volume = 0) : (e1.current.volume = eJ));
                    },
                    onLoadStart: () => {
                        ((ez.current = performance.now()), tp(eM), ti.info('[QV] | handleLoadStart | loadingStartTime: '.concat(ez.current)));
                    },
                    onPlaying: () => {
                        if (!eG.current) return;
                        let e = performance.now() - eo;
                        (ti.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), ty(e), (eG.current = !1));
                    },
                    onWaiting: (e) => {
                        ((eK.current = performance.now()), ti.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eK.current)), tS(), ew(!0));
                    },
                    onProgress: (e) => {
                        if (null == e1.current) return;
                        ti.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(e1.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < e1.current.buffered.length; e++) {
                            let n = e1.current.buffered.start(e),
                                r = e1.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e1.current.duration,
                                    size: (r - n) / e1.current.duration
                                });
                        }
                        eL(t);
                    },
                    onCanPlay: tX,
                    onCanPlayThrough: tX,
                    onSeeked: () => {
                        (ti.info('[QV] | handleSeeked'), tn(!0));
                    },
                    onAbort: () => tK(B.CY.ABORT),
                    onError: () => tK(B.CY.ERROR),
                    onEmptied: () => tK(B.CY.EMPTIED),
                    onStalled: () => tK(B.CY.STALLED),
                    onClick: () => {
                        (ti.info('[QV] | handleVideoClick'), tq());
                    },
                    crossOrigin: tG,
                    children: [
                        null != t4 &&
                            tz &&
                            (0, r.jsx)('track', {
                                ref: e2,
                                src: t4.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != td &&
                            tu !== I.n1.VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tK(B.CY.SOURCE_ERROR),
                                src: td.url,
                                type: td.mimetype
                            })
                    ]
                }),
                (eN || ek) &&
                    eC === B.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner
                    }),
                eC === B.rq.PAUSED && e7 === j.yE.LOST_FOCUS && (0, r.jsx)(W, {}),
                ec &&
                    eC !== B.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => eu(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: z.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: z.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tW, t0], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(V.K, {
                                    quest: ee,
                                    onClose: () => {
                                        (eu(!1), tC(j.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE));
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
                                tW.to({
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
                            [z.play]: eC === B.rq.PLAYING,
                            [z.pause]: eC === B.rq.PAUSED
                        }),
                        children: eC === B.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: z.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: z.playPausePopIcon })
                    },
                    eC
                ),
                ed &&
                    null != tr &&
                    (0, r.jsx)(s.animated.div, {
                        className: z.captionContainer,
                        ref: tJ,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tW.to({
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
                            children: tr.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: z.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tW.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tW.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tW.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(M.Z, {
                            percent: eT,
                            animate: !0 !== e8.current && !eP,
                            interactionEnabled: e6 && eY,
                            backgroundColor: tV ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tV ? eA : void 0,
                            duration: null != (F = null == (f = e1.current) ? void 0 : f.duration) ? F : 1,
                            maxSeekableTime: tV && eY ? to : void 0,
                            onClick: (e) => {
                                (tU(e), eC === B.rq.ENDED && tR(B.rq.PLAYING));
                            },
                            onScrubBack: () => {
                                tZ();
                            },
                            onScrubForward: () => {
                                tF();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: z.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tW.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tW.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tW.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            onFocus: () => ej(!0),
                            onBlur: () => ej(!1),
                            children: (0, r.jsx)(A.Z, {
                                videoRef: e1,
                                quest: ee,
                                playerState: eC,
                                animSpring: tW,
                                visible: tV,
                                seekForwardEnabled: t7,
                                hideCaptionBtn: null == t4,
                                hideTranscriptBtn: t3,
                                handlePlaybackBtnClick: tq,
                                handleTranscriptBtnClick: () => {
                                    (ec || (null != e4 && e4.questId === ee.id && e4.fetchStatus !== x.iF.NONE && e4.fetchStatus !== x.iF.FAILURE) || (0, y.lL)(ee, u.X.WATCH_VIDEO), eu(!ec), tC(j.jn.VIDEO_MODAL, ec ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE));
                                },
                                handleCaptionBtnClick: () => {
                                    (em(!ed), tC(j.jn.VIDEO_MODAL, ed ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE));
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ef;
                                    ti.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, S.fn)(null == (e = e1.current) ? void 0 : e.parentNode, e1.current);
                                    (t && null != n ? ((0, S.Dj)(n), n.addEventListener(S.NO, tB), tj(!0)) : t || null == n || (n.removeEventListener(S.NO, tB), tj(!1), (0, S.Pr)(n)), ep(t));
                                },
                                handleSeekBackBtnClick: tZ,
                                handleSeekForwardBtnClick: tF,
                                handleControlBarPendingInteraction: eH,
                                onVolumeChange: tT
                            })
                        })
                    ]
                })
            ]
        })
    });
}
