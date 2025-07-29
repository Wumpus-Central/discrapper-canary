(n.d(t, { Z: () => ee }), n(388685), n(539854));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(564854),
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
    C = n(63063),
    h = n(228488),
    S = n(617136),
    j = n(509212),
    y = n(272008),
    _ = n(497505),
    x = n(184299),
    D = n(347382),
    T = n(5881),
    P = n(249485),
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
    z = n(388032),
    H = n(844136);
let X = new Set([G.IyS.FIVE_G, G.IyS.FOUR_G, G.IyS.UNKNOWN]),
    K = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function W() {
    let e = (0, m.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: H.pauseText,
        style: { background: (0, f.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-default',
            children: z.intl.string(z.t.U7Xrb2)
        })
    });
}
function $(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: o } = e,
        a = l.useMemo(() => (0, I.z0)(t, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(A.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: o,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: a.url,
                      alt: 'Video thumbnail',
                      className: i()(H.stillFrameImageCard, { [H.stillFrameImageCardHidden]: !n })
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
        className: i()(H.endScreenPanel, H.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)('div', {
            className: H.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: H.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-md/semibold',
                            className: H.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-sm/normal',
                            className: H.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(Z.Z, { color: '#747783' }),
                (0, r.jsx)(o, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: H.endScreenIcon
                })
            ]
        })
    });
}
function ee(e) {
    var t, n, o, f, E, A, Z;
    let { quest: ee, videoSessionId: et, onOptimisticProgressUpdate: en, autoplay: er, parentTransitionState: el, performanceClockStartTime: eo, onClose: ei, sourceQuestContent: ea, orientation: es } = e,
        ec = (0, x.km)((e) => e.transcriptEnabled),
        eu = (0, x.km)((e) => e.setTranscriptEnabled),
        ed = (0, x.km)((e) => e.captionEnabled),
        em = (0, x.km)((e) => e.setCaptionEnabled),
        ef = (0, x.km)((e) => e.fullScreenEnabled),
        ep = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ev, focusedChanged: eg } = (0, q.xU)(),
        { visible: eb, visibleChanged: eE, targetRef: eO } = (0, q.Yy)(),
        [eC, eh] = l.useState(!0 === er ? B.rq.PLAYING : B.rq.PAUSED),
        [eS, ej] = l.useState(!1),
        [ey, e_] = l.useState(!1),
        ex = (0, j.il)(ee),
        [eD, eT] = l.useState(ex.percentComplete),
        [eP, eN] = l.useState(!1),
        [ek, eI] = l.useState(!0),
        [ew, eA] = l.useState(!1),
        [eL, eR] = l.useState([]),
        [eM, eV] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eB, eF] = l.useState(0),
        [eZ, eq] = l.useState(0),
        [eU, eQ] = l.useState(!1),
        [eG, eY] = l.useState(!1),
        ez = l.useRef(!0),
        eH = l.useRef(null),
        eX = l.useRef(null),
        eK = (0, x.km)((e) => {
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
        e0 = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        e1 = (0, l.useRef)(null),
        e2 = (0, l.useRef)(null),
        e8 = l.useRef(!0),
        e6 = (null == (t = ee.userStatus) ? void 0 : t.completedAt) != null,
        e4 = (0, x.km)((e) => e.transcript),
        [e7, e3] = l.useState(null),
        e9 = (0, P._)({ location: Q.dr.VIDEO_MODAL }),
        [e5, te] = l.useState(!1),
        [tt, tn] = l.useState(!1),
        [tr, tl] = l.useState(null),
        to = e6 ? (null != (E = null == (n = e1.current) ? void 0 : n.duration) ? E : 0) : Math.max(eK.maxTimestampSec, ex.progressSeconds),
        ti = l.useMemo(
            () =>
                (0, T.T)({
                    quest: ee,
                    location: Q.dr.VIDEO_MODAL
                }),
            [ee]
        ),
        { title: ta, subtitle: ts } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : z.intl.string(z.t.iiTtpK),
                a = null != (r = null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? n : null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? r : z.intl.string(z.t.mxaHf3),
                s = (0, j.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : z.intl.string(z.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a
            };
        })(ee),
        tc = e6 ? (eK.timestampSec >= eK.duration ? 0 : eK.timestampSec) : Math.max(eK.timestampSec, ex.progressSeconds);
    (0, v.Ng)(() => {
        e8.current && ((e8.current = !1), eV(O.Z.getEffectiveConnectionSpeed()), e6 && eK.timestampSec >= eK.duration && eW(ee.id, 0, eK.duration));
    });
    let {
            videoVariant: tu,
            videoAsset: td,
            hlsRef: tm
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, D.z)(e, Q.dr.VIDEO_MODAL),
                d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                m = l.useMemo(() => (null != d ? (c && a.ZP.isSupported() && null != d.videoHls ? I.n1.VIDEO_HLS : X.has(n) || null == d.videoLowRes ? I.n1.VIDEO : I.n1.VIDEO_LOW_RES) : null), [d, n, c]),
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
            trackQuestVideoProgressed: tg,
            trackQuestVideoResumed: tb,
            trackQuestVideoPaused: tE,
            trackQuestVideoFocusChange: tO,
            trackQuestContentClick: tC,
            trackQuestVideoBufferingStarted: th,
            trackQuestVideoBufferingEnded: tS,
            trackWatchTimeAnalytics: tj,
            trackQuestVideoTimeToFirstFrame: ty,
            trackQuestVideoFullscreenChanged: t_,
            trackQuestVideoError: tx,
            trackQuestVideoVolumeChanged: tD
        } = (0, U.Z)({
            quest: ee,
            videoRef: e1,
            hlsRef: tm,
            videoSessionId: et,
            videoAssetId: tf,
            sourceQuestContent: ea
        }),
        tT = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e1.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tP } = (0, k.Z)({
            getCurrentVideoTime: tT,
            isPlaying: eC === B.rq.PLAYING,
            isMetadataLoaded: e5,
            isInitialSeekComplete: tt,
            onAnalytics: tj,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tN = l.useCallback(
            (e) => {
                if ((ti.info('[QV] | updatePlayerState | playerState: '.concat(e)), eh(e), null != e1.current))
                    switch (e) {
                        case B.rq.PLAYING:
                            (e1.current.paused && tb(e7), e3(null), e1.current.play());
                            break;
                        case B.rq.PAUSED:
                            (e1.current.paused || tP(), e1.current.pause(), (ez.current = !1));
                            break;
                        case B.rq.ENDED:
                            (tP(), eu(!1));
                    }
            },
            [tb, e7, tP, eu, ti]
        );
    (l.useEffect(() => {
        tE(e7);
    }, [e7, tE]),
        l.useEffect(() => {
            eg && tO(ev, eC);
        }, [ev, eg, eC, tO]));
    let tk = l.useCallback(
        (e) => {
            var t;
            (e6 || (null == (t = ee.userStatus) ? void 0 : t.enrolledAt) == null || (ti.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, j.FI)(ee, e)), tg());
        },
        [e6, ee, ti, tg]
    );
    l.useEffect(() => {
        (el !== p.Dvm.HIDDEN && el !== p.Dvm.EXITING && el !== p.Dvm.EXITED && (null == el || !eE || eb || e6) && (!eg || ev || e6)) || null == e1.current || eC !== B.rq.PLAYING || (ti.info('[QV] | Pausing video | playerState: '.concat(eC, ', parentTransitionState: ').concat(el, ', visible: ').concat(eb, ', focused: ').concat(ev, ', isQuestCompleted: ').concat(e6)), tN(B.rq.PAUSED), e6 || e3(_.yE.LOST_FOCUS));
    }, [el, ev, eg, eb, eE, eC, e6, tN, tk, ti]);
    let [tI, tw] = l.useState(!1),
        tA = l.useRef(null),
        tL = l.useRef(performance.now()),
        tR = l.useCallback(() => {
            (null != tA.current && clearTimeout(tA.current),
                eC === B.rq.PLAYING &&
                    (tA.current = setTimeout(
                        () => {
                            eC === B.rq.PLAYING && tw(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tL.current))
                    )));
        }, [eC]),
        tM = () => {
            (tw(!1), (tL.current = performance.now()), tR());
        };
    l.useEffect(() => {
        if (eC !== B.rq.PLAYING) {
            (tw(!1), null != tA.current && clearTimeout(tA.current));
            return;
        }
        return (
            tR(),
            () => {
                null != tA.current && clearTimeout(tA.current);
            }
        );
    }, [eC, tR]);
    let tV = !tI && (ey || eS || eC === B.rq.ENDED),
        tB = l.useCallback(() => {
            var e;
            ti.info('[QV] | handleFullScreenExit');
            let t = (0, h.fn)(null == (e = e1.current) ? void 0 : e.parentNode, e1.current);
            null == t || (0, h.rB)(t) || (t.removeEventListener(h.NO, tB), ep(!1), t_(!1));
        }, [ep, ti, t_]),
        tF = () => {
            if (null == e1.current) return;
            let e = Math.max(e1.current.currentTime - 10, 0);
            (ti.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tq(e), eC === B.rq.ENDED && tN(B.rq.PAUSED), tC(_.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD));
        },
        tZ = () => {
            if (null == e1.current || !t7) return;
            let e = Math.min(e1.current.currentTime + 10, to);
            (ti.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tq(e), eC !== B.rq.ENDED && e >= e1.current.duration && tN(B.rq.ENDED), tC(_.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD));
        };
    l.useEffect(() => {
        let e = e1.current;
        return () => {
            let t = (0, h.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(h.NO, tB);
        };
    }, [tB]);
    let tq = l.useCallback(
            (e) => {
                null != e1.current && (ti.info('[QV] | seekTimeline | timeSec: '.concat(e)), tP(), eN(!0), tn(!1), (e1.current.currentTime = e), eW(ee.id, e, e1.current.duration));
            },
            [e1, eW, ee.id, tP, ti]
        ),
        tU = () => {
            if (null != e1.current)
                switch ((ti.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eC)), eC)) {
                    case B.rq.ENDED:
                        (tq(0), tN(B.rq.PLAYING));
                        break;
                    case B.rq.PLAYING:
                        (tN(B.rq.PAUSED), e3(_.yE.PAUSE_BUTTON));
                        break;
                    default:
                        tN(B.rq.PLAYING);
                }
        },
        tQ = (e) => {
            tl(e);
        },
        tG = (e) => {
            tl((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tY = l.useCallback(() => {
            if (null == e1.current || (ti.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(e1.current.textTracks.length)), 0 === e1.current.textTracks.length)) return;
            let e = e1.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, F.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tQ(n)), (n.onexit = () => tG(n)));
                }
        }, [e1, ti]),
        tz = (function (e, t) {
            let { enabled: n, forceNoCrossOrigin: r } = e;
            if (!n || (!r && t)) return 'anonymous';
        })(e9, ed),
        tH = 'anonymous' === tz;
    l.useEffect(() => {
        if (null == e2.current || !tH) return;
        let e = e2.current;
        return (
            e.addEventListener('load', tY),
            () => {
                null != e && e.removeEventListener('load', tY);
            }
        );
    }, [e2, tY, tH]);
    let tX = l.useCallback(
            (e) => {
                var t;
                (ti.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = e1.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tf, ', connectionSpeed: ')
                        .concat(eM)
                ),
                    tx(e, eM));
            },
            [eM, tx, e1, tf, ti]
        ),
        tK = (e) => {
            (ti.info('[QV] | handleCanPlay: playerState: '.concat(eC)), null != e1.current && eC === B.rq.PLAYING && (ti.info('[QV] | handleCanPlay: did NOT early return'), ek && (ti.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(ek)), eI(!1)), ew && (ti.info('[QV] | handleCanPlay: waitingForChunk: '.concat(ew)), tS(eM, null != eX.current ? performance.now() - eX.current : null), eA(!1)), ti.info('[QV] | handleCanPlay: updating player state to playing'), tN(B.rq.PLAYING)));
        };
    l.useEffect(() => {
        if (!eP) return;
        let e = setTimeout(() => {
            eN(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eP]);
    let [{ controlBarAnimSpring: tW }, t$] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                eY(!1);
            },
            onRest: (e) => {
                1 === e.value && eY(!0);
            }
        })),
        tJ = (0, l.useRef)(null),
        [{ captionHeightSpring: t0 }, t1] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: K
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
                    controlBarAnimSpring: tV || eU ? 1 : 0,
                    immediate: e0
                }),
                () => {
                    tW.stop();
                }
            ),
            [tV, t$, e0, eU, tW]
        ));
    let t2 = eC === B.rq.ENDED,
        t8 = l.useCallback(
            async (e) => {
                if (ef) {
                    var t;
                    let e = (0, h.fn)(null == (t = e1.current) ? void 0 : t.parentNode, e1.current);
                    null != e && (e.removeEventListener(h.NO, tB), (0, h.Pr)(e), ep(!1), t_(!1));
                }
                if ((tC(e, S.jZ.LEARN_MORE), ee.id === Q.V6)) return void window.open(C.Z.getArticleURL(G.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ei) {
                    let e = w.r.build(ee.config).application.link;
                    (await (0, F.qP)(e)) && ei();
                }
                (0, j.nc)(ee, {
                    content: e,
                    ctaContent: S.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: ea
                });
            },
            [tC, ee, ei, ef, e1, tB, ep, t_, ea]
        ),
        t6 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
        t4 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
        t7 = e6 || eK.maxTimestampSec >= (null != (A = null == (o = e1.current) ? void 0 : o.currentTime) ? A : 0) + 1;
    return (0, r.jsx)(p.P3F, {
        className: H.videoCont,
        'data-fullscreen': ef,
        tabIndex: -1,
        onMouseEnter: () => {
            (ej(!0), tw(!1), (tL.current = performance.now()), null != tA.current && clearTimeout(tA.current));
        },
        onMouseLeave: () => {
            (ej(!1), tw(!1));
        },
        onMouseMove: tM,
        onKeyDown: tM,
        children: (0, r.jsxs)('div', {
            className: i()(H.videoContInnerRelative, {
                [H.videoContInnerRelativePortrait]: 'portrait' === es,
                [H.videoContInnerRelativeLandscape]: 'landscape' === es
            }),
            children: [
                t2 &&
                    (() => {
                        if (!(0, N.e)({ location: Q.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: ee,
                                        shouldShow: t2,
                                        sourceQuestContent: ea
                                    }),
                                    (0, r.jsx)('div', { className: H.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: ta,
                                        subtitle: ts,
                                        icon: p.d4D,
                                        className: H.endScreenPanelRight,
                                        onClick: () => t8(_.jn.VIDEO_MODAL)
                                    })
                                ]
                            });
                        {
                            var e, t, n;
                            let l = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(R.Z, {
                                quest: ee,
                                title: null != (e = null == l ? void 0 : l.messages.videoEndCtaTitle) ? e : z.intl.string(z.t.Ka526u),
                                subtitle: null != (t = null == l ? void 0 : l.messages.videoEndCtaSubtitle) ? t : z.intl.string(z.t.tKMcAg),
                                ctaBtnLabel: null != (n = null == l ? void 0 : l.messages.videoEndCtaButtonLabel) ? n : z.intl.string(z.t.iiTtpK),
                                onCTAClick: () => t8(_.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: ea
                            });
                        }
                    })(),
                (0, r.jsxs)(b.Z, {
                    ref: (e) => {
                        ((e1.current = e), (eO.current = e));
                    },
                    autoPlay: er,
                    playsInline: !0,
                    mediaLayoutType: ef ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [H.hidden]: t2,
                        [H.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == t6 ? void 0 : t6.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e1.current && (e1.current.currentTime >= eB && (ti.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(e1.current.currentTime)), eF(e1.current.currentTime + 6 + 2 * Math.random()), tk(e1.current.currentTime)), e1.current.currentTime >= eZ && (eq(e1.current.currentTime + 1), (0, y.qm)(ee.id, ex.taskType, e1.current.currentTime), en(e1.current.currentTime)), eW(ee.id, e1.current.currentTime, e1.current.duration), eT((e1.current.currentTime / e1.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        (null != e1.current && (tk(e1.current.duration + 1), ti.info('[QV] | handleEnded: sending progress update: '.concat(e1.current.duration + 1)), eW(ee.id, e1.current.duration, e1.current.duration)), tN(B.rq.ENDED), eA(!1));
                    },
                    onLoadedData: (e) => {
                        (ti.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(ek)), ek && (tv(eM, null != eH.current ? performance.now() - eH.current : null), eI(!1), null != tm.current && (tm.current.config.minAutoBitrate = 800000)));
                    },
                    onLoadedMetadata: (e) => {
                        null != e1.current && (ti.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tf)), te(!0), tu !== I.n1.VIDEO_HLS && tq(tc), e$ ? (e1.current.volume = 0) : (e1.current.volume = eJ));
                    },
                    onLoadStart: () => {
                        ((eH.current = performance.now()), tp(eM), ti.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eH.current)));
                    },
                    onPlaying: () => {
                        if (!ez.current) return;
                        let e = performance.now() - eo;
                        (ti.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), ty(e), (ez.current = !1));
                    },
                    onWaiting: (e) => {
                        ((eX.current = performance.now()), ti.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eX.current)), th(eM), eA(!0));
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
                        eR(t);
                    },
                    onCanPlay: tK,
                    onCanPlayThrough: tK,
                    onSeeked: () => {
                        (ti.info('[QV] | handleSeeked'), tn(!0));
                    },
                    onAbort: () => tX(B.CY.ABORT),
                    onError: () => tX(B.CY.ERROR),
                    onEmptied: () => tX(B.CY.EMPTIED),
                    onStalled: () => tX(B.CY.STALLED),
                    onClick: () => {
                        (ti.info('[QV] | handleVideoClick'), tU());
                    },
                    crossOrigin: tz,
                    children: [
                        null != t4 &&
                            tH &&
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
                                onError: () => tX(B.CY.SOURCE_ERROR),
                                src: td.url,
                                type: td.mimetype
                            })
                    ]
                }),
                (ek || ew) &&
                    eC === B.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: H.loadingSpinner
                    }),
                eC === B.rq.PAUSED && e7 === _.yE.LOST_FOCUS && (0, r.jsx)(W, {}),
                ec &&
                    eC !== B.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => eu(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: H.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: H.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tW, t0], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(V.K, {
                                    quest: ee,
                                    onClose: () => {
                                        (eu(!1), tC(_.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE));
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: H.videoFooterContGradient,
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
                        className: i()(H.playPausePopCont, {
                            [H.play]: eC === B.rq.PLAYING,
                            [H.pause]: eC === B.rq.PAUSED
                        }),
                        children: eC === B.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: H.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: H.playPausePopIcon })
                    },
                    eC
                ),
                ed &&
                    null != tr &&
                    (0, r.jsx)(s.animated.div, {
                        className: H.captionContainer,
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
                            className: H.captionText,
                            children: tr.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: H.videoFooterCont,
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
                            percent: eD,
                            animate: !0 !== e8.current && !eP,
                            interactionEnabled: e6 && eG,
                            backgroundColor: tV ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tV ? eL : void 0,
                            duration: null != (Z = null == (f = e1.current) ? void 0 : f.duration) ? Z : 1,
                            maxSeekableTime: tV && eG ? to : void 0,
                            onClick: (e) => {
                                (tq(e), eC === B.rq.ENDED && tN(B.rq.PLAYING));
                            },
                            onScrubBack: () => {
                                tF();
                            },
                            onScrubForward: () => {
                                tZ();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: H.videoControlsCont,
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
                            onFocus: () => e_(!0),
                            onBlur: () => e_(!1),
                            children: (0, r.jsx)(L.Z, {
                                videoRef: e1,
                                quest: ee,
                                playerState: eC,
                                animSpring: tW,
                                visible: tV,
                                seekForwardEnabled: t7,
                                hideCaptionBtn: null == t4,
                                handlePlaybackBtnClick: tU,
                                handleTranscriptBtnClick: () => {
                                    (ec || (null != e4 && e4.questId === ee.id && e4.fetchStatus !== x.iF.NONE && e4.fetchStatus !== x.iF.FAILURE) || (0, y.lL)(ee, u.X.WATCH_VIDEO), eu(!ec), tC(_.jn.VIDEO_MODAL, ec ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE));
                                },
                                handleCaptionBtnClick: () => {
                                    (em(!ed), tC(_.jn.VIDEO_MODAL, ed ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE));
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ef;
                                    ti.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, h.fn)(null == (e = e1.current) ? void 0 : e.parentNode, e1.current);
                                    (t && null != n ? ((0, h.Dj)(n), n.addEventListener(h.NO, tB), t_(!0)) : t || null == n || (n.removeEventListener(h.NO, tB), t_(!1), (0, h.Pr)(n)), ep(t));
                                },
                                handleSeekBackBtnClick: tF,
                                handleSeekForwardBtnClick: tZ,
                                handleControlBarPendingInteraction: eQ,
                                onVolumeChange: tD
                            })
                        })
                    ]
                })
            ]
        })
    });
}
