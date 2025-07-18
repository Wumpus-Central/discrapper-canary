(n.d(t, { Z: () => ee }), n(388685), n(539854));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(42133),
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
    j = n(272008),
    y = n(497505),
    _ = n(918701),
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
let K = new Set([G.IyS.FIVE_G, G.IyS.FOUR_G, G.IyS.UNKNOWN]),
    X = {
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
              questContent: y.jn.VIDEO_MODAL_END_CARD,
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
    let { quest: ee, videoSessionId: et, onOptimisticProgressUpdate: en, autoplay: er, parentTransitionState: el, performanceClockStartTime: eo, onClose: ei, sourceQuestContent: ea } = e,
        es = (0, x.km)((e) => e.transcriptEnabled),
        ec = (0, x.km)((e) => e.setTranscriptEnabled),
        eu = (0, x.km)((e) => e.captionEnabled),
        ed = (0, x.km)((e) => e.setCaptionEnabled),
        em = (0, x.km)((e) => e.fullScreenEnabled),
        ef = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ep, focusedChanged: ev } = (0, q.xU)(),
        { visible: eg, visibleChanged: eb, targetRef: eE } = (0, q.Yy)(),
        [eO, eC] = l.useState(!0 === er ? B.rq.PLAYING : B.rq.PAUSED),
        [eh, eS] = l.useState(!1),
        [ej, ey] = l.useState(!1),
        e_ = (0, _.il)(ee),
        [ex, eD] = l.useState(e_.percentComplete),
        [eT, eP] = l.useState(!1),
        [eN, ek] = l.useState(!0),
        [eI, ew] = l.useState(!1),
        [eA, eL] = l.useState([]),
        [eR, eM] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eV, eB] = l.useState(0),
        [eF, eZ] = l.useState(0),
        [eq, eU] = l.useState(!1),
        [eQ, eG] = l.useState(!1),
        eY = l.useRef(!0),
        ez = l.useRef(null),
        eH = l.useRef(null),
        eK = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[ee.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eX = (0, x.km)((e) => e.setVideoProgress),
        eW = (0, x.km)((e) => e.muted),
        e$ = (0, x.km)((e) => e.volume),
        eJ = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        e0 = (0, l.useRef)(null),
        e1 = (0, l.useRef)(null),
        e2 = l.useRef(!0),
        e8 = (null == (t = ee.userStatus) ? void 0 : t.completedAt) != null,
        e6 = (0, x.km)((e) => e.transcript),
        [e4, e7] = l.useState(null),
        e3 = (0, P._)({ location: Q.dr.VIDEO_MODAL }),
        [e9, e5] = l.useState(!1),
        [te, tt] = l.useState(!1),
        [tn, tr] = l.useState(null),
        tl = e8 ? (null != (E = null == (n = e0.current) ? void 0 : n.duration) ? E : 0) : Math.max(eK.maxTimestampSec, e_.progressSeconds),
        to = l.useMemo(
            () =>
                (0, T.T)({
                    quest: ee,
                    location: Q.dr.VIDEO_MODAL
                }),
            [ee]
        ),
        { title: ti, subtitle: ta } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : z.intl.string(z.t.iiTtpK),
                a = null != (r = null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? n : null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? r : z.intl.string(z.t.mxaHf3),
                s = (0, _.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : z.intl.string(z.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a
            };
        })(ee),
        ts = e8 ? (eK.timestampSec >= eK.duration ? 0 : eK.timestampSec) : Math.max(eK.timestampSec, e_.progressSeconds);
    (0, v.Ng)(() => {
        e2.current && ((e2.current = !1), eM(O.Z.getEffectiveConnectionSpeed()), e8 && eK.timestampSec >= eK.duration && eX(ee.id, 0, eK.duration));
    });
    let {
            videoVariant: tc,
            videoAsset: tu,
            hlsRef: td
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, D.z)(e, Q.dr.VIDEO_MODAL),
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
        })(ee, e0, eR, ts),
        tm = (0, I.CC)(tc),
        {
            trackQuestVideoLoadingStarted: tf,
            trackQuestVideoLoadingEnded: tp,
            trackQuestVideoProgressed: tv,
            trackQuestVideoResumed: tg,
            trackQuestVideoPaused: tb,
            trackQuestVideoFocusChange: tE,
            trackQuestContentClick: tO,
            trackQuestVideoBufferingStarted: tC,
            trackQuestVideoBufferingEnded: th,
            trackWatchTimeAnalytics: tS,
            trackQuestVideoTimeToFirstFrame: tj,
            trackQuestVideoFullscreenChanged: ty,
            trackQuestVideoError: t_,
            trackQuestVideoVolumeChanged: tx
        } = (0, U.Z)({
            quest: ee,
            videoRef: e0,
            hlsRef: td,
            videoSessionId: et,
            videoAssetId: tm,
            sourceQuestContent: ea
        }),
        tD = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e0.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tT } = (0, k.Z)({
            getCurrentVideoTime: tD,
            isPlaying: eO === B.rq.PLAYING,
            isMetadataLoaded: e9,
            isInitialSeekComplete: te,
            onAnalytics: tS,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tP = l.useCallback(
            (e) => {
                if ((to.info('[QV] | updatePlayerState | playerState: '.concat(e)), eC(e), null != e0.current))
                    switch (e) {
                        case B.rq.PLAYING:
                            (e0.current.paused && tg(e4), e7(null), e0.current.play());
                            break;
                        case B.rq.PAUSED:
                            (e0.current.paused || tT(), e0.current.pause(), (eY.current = !1));
                            break;
                        case B.rq.ENDED:
                            (tT(), ec(!1));
                    }
            },
            [tg, e4, tT, ec, to]
        );
    (l.useEffect(() => {
        tb(e4);
    }, [e4, tb]),
        l.useEffect(() => {
            ev && tE(ep, eO);
        }, [ep, ev, eO, tE]));
    let tN = l.useCallback(
        (e) => {
            var t;
            (e8 || (null == (t = ee.userStatus) ? void 0 : t.enrolledAt) == null || (to.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, _.FI)(ee, e)), tv());
        },
        [e8, ee, to, tv]
    );
    l.useEffect(() => {
        (el !== p.Dvm.HIDDEN && el !== p.Dvm.EXITING && el !== p.Dvm.EXITED && (null == el || !eb || eg || e8) && (!ev || ep || e8)) || null == e0.current || eO !== B.rq.PLAYING || (to.info('[QV] | Pausing video | playerState: '.concat(eO, ', parentTransitionState: ').concat(el, ', visible: ').concat(eg, ', focused: ').concat(ep, ', isQuestCompleted: ').concat(e8)), tP(B.rq.PAUSED), e8 || e7(y.yE.LOST_FOCUS));
    }, [el, ep, ev, eg, eb, eO, e8, tP, tN, to]);
    let [tk, tI] = l.useState(!1),
        tw = l.useRef(null),
        tA = l.useRef(performance.now()),
        tL = l.useCallback(() => {
            (null != tw.current && clearTimeout(tw.current),
                eO === B.rq.PLAYING &&
                    (tw.current = setTimeout(
                        () => {
                            eO === B.rq.PLAYING && tI(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tA.current))
                    )));
        }, [eO]),
        tR = () => {
            (tI(!1), (tA.current = performance.now()), tL());
        };
    l.useEffect(() => {
        if (eO !== B.rq.PLAYING) {
            (tI(!1), null != tw.current && clearTimeout(tw.current));
            return;
        }
        return (
            tL(),
            () => {
                null != tw.current && clearTimeout(tw.current);
            }
        );
    }, [eO, tL]);
    let tM = !tk && (ej || eh || eO === B.rq.ENDED),
        tV = l.useCallback(() => {
            var e;
            to.info('[QV] | handleFullScreenExit');
            let t = (0, h.fn)(null == (e = e0.current) ? void 0 : e.parentNode, e0.current);
            null == t || (0, h.rB)(t) || (t.removeEventListener(h.NO, tV), ef(!1), ty(!1));
        }, [ef, to, ty]),
        tB = () => {
            if (null == e0.current) return;
            let e = Math.max(e0.current.currentTime - 10, 0);
            (to.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tZ(e), eO === B.rq.ENDED && tP(B.rq.PAUSED), tO(y.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD));
        },
        tF = () => {
            if (null == e0.current || !t4) return;
            let e = Math.min(e0.current.currentTime + 10, tl);
            (to.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tZ(e), eO !== B.rq.ENDED && e >= e0.current.duration && tP(B.rq.ENDED), tO(y.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD));
        };
    l.useEffect(() => {
        let e = e0.current;
        return () => {
            let t = (0, h.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(h.NO, tV);
        };
    }, [tV]);
    let tZ = l.useCallback(
            (e) => {
                null != e0.current && (to.info('[QV] | seekTimeline | timeSec: '.concat(e)), tT(), eP(!0), tt(!1), (e0.current.currentTime = e), eX(ee.id, e, e0.current.duration));
            },
            [e0, eX, ee.id, tT, to]
        ),
        tq = () => {
            if (null != e0.current)
                switch ((to.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eO)), eO)) {
                    case B.rq.ENDED:
                        (tZ(0), tP(B.rq.PLAYING));
                        break;
                    case B.rq.PLAYING:
                        (tP(B.rq.PAUSED), e7(y.yE.PAUSE_BUTTON));
                        break;
                    default:
                        tP(B.rq.PLAYING);
                }
        },
        tU = (e) => {
            tr(e);
        },
        tQ = (e) => {
            tr((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tG = l.useCallback(() => {
            if (null == e0.current || (to.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(e0.current.textTracks.length)), 0 === e0.current.textTracks.length)) return;
            let e = e0.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, F.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tU(n)), (n.onexit = () => tQ(n)));
                }
        }, [e0, to]),
        tY = e3 ? (eu ? 'anonymous' : void 0) : 'anonymous',
        tz = 'anonymous' === tY;
    l.useEffect(() => {
        if (null == e1.current || !tz) return;
        let e = e1.current;
        return (
            e.addEventListener('load', tG),
            () => {
                null != e && e.removeEventListener('load', tG);
            }
        );
    }, [e1, tG, tz]);
    let tH = l.useCallback(
            (e) => {
                var t;
                (to.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = e0.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tm, ', connectionSpeed: ')
                        .concat(eR)
                ),
                    t_(e, eR));
            },
            [eR, t_, e0, tm, to]
        ),
        tK = (e) => {
            (to.info('[QV] | handleCanPlay: playerState: '.concat(eO)), null != e0.current && eO === B.rq.PLAYING && (to.info('[QV] | handleCanPlay: did NOT early return'), eN && (to.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eN)), ek(!1)), eI && (to.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eI)), th(eR, null != eH.current ? performance.now() - eH.current : null), ew(!1)), to.info('[QV] | handleCanPlay: updating player state to playing'), tP(B.rq.PLAYING)));
        };
    l.useEffect(() => {
        if (!eT) return;
        let e = setTimeout(() => {
            eP(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eT]);
    let [{ controlBarAnimSpring: tX }, tW] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: X,
            onStart: () => {
                eG(!1);
            },
            onRest: (e) => {
                1 === e.value && eG(!0);
            }
        })),
        t$ = (0, l.useRef)(null),
        [{ captionHeightSpring: tJ }, t0] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: X
        }));
    (l.useEffect(() => {
        var e, t;
        return (
            t0({
                captionHeightSpring: eu && null != tn && null != (t = null == (e = t$.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: eJ
            }),
            () => {
                tJ.stop();
            }
        );
    }, [eu, t0, eJ, tn, tJ]),
        l.useEffect(
            () => (
                tW({
                    controlBarAnimSpring: tM || eq ? 1 : 0,
                    immediate: eJ
                }),
                () => {
                    tX.stop();
                }
            ),
            [tM, tW, eJ, eq, tX]
        ));
    let t1 = eO === B.rq.ENDED,
        t2 = l.useCallback(
            async (e) => {
                if (em) {
                    var t;
                    let e = (0, h.fn)(null == (t = e0.current) ? void 0 : t.parentNode, e0.current);
                    null != e && (e.removeEventListener(h.NO, tV), (0, h.Pr)(e), ef(!1), ty(!1));
                }
                if ((tO(e, S.jZ.LEARN_MORE), ee.id === Q.V6)) return void window.open(C.Z.getArticleURL(G.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ei) {
                    let e = w.r.build(ee.config).application.link;
                    (await (0, F.qP)(e)) && ei();
                }
                (0, _.nc)(ee, {
                    content: e,
                    ctaContent: S.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: ea
                });
            },
            [tO, ee, ei, em, e0, tV, ef, ty, ea]
        ),
        t8 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
        t6 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
        t4 = e8 || eK.maxTimestampSec >= (null != (A = null == (o = e0.current) ? void 0 : o.currentTime) ? A : 0) + 1;
    return (0, r.jsx)(p.P3F, {
        className: H.videoCont,
        'data-fullscreen': em,
        tabIndex: -1,
        onMouseEnter: () => {
            (eS(!0), tI(!1), (tA.current = performance.now()), null != tw.current && clearTimeout(tw.current));
        },
        onMouseLeave: () => {
            (eS(!1), tI(!1));
        },
        onMouseMove: tR,
        onKeyDown: tR,
        children: (0, r.jsxs)('div', {
            className: H.videoContInnerRelative,
            children: [
                t1 &&
                    (() => {
                        if (!(0, N.e)({ location: Q.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: ee,
                                        shouldShow: t1,
                                        sourceQuestContent: ea
                                    }),
                                    (0, r.jsx)('div', { className: H.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: ti,
                                        subtitle: ta,
                                        icon: p.d4D,
                                        className: H.endScreenPanelRight,
                                        onClick: () => t2(y.jn.VIDEO_MODAL)
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
                                onCTAClick: () => t2(y.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: ea
                            });
                        }
                    })(),
                (0, r.jsxs)(b.Z, {
                    ref: (e) => {
                        ((e0.current = e), (eE.current = e));
                    },
                    autoPlay: er,
                    playsInline: !0,
                    mediaLayoutType: em ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [H.hidden]: t1,
                        [H.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == t8 ? void 0 : t8.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e0.current && (e0.current.currentTime >= eV && (to.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(e0.current.currentTime)), eB(e0.current.currentTime + 6 + 2 * Math.random()), tN(e0.current.currentTime)), e0.current.currentTime >= eF && (eZ(e0.current.currentTime + 1), (0, j.qm)(ee.id, e_.taskType, e0.current.currentTime), en(e0.current.currentTime)), eX(ee.id, e0.current.currentTime, e0.current.duration), eD((e0.current.currentTime / e0.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        (null != e0.current && (tN(e0.current.duration + 1), to.info('[QV] | handleEnded: sending progress update: '.concat(e0.current.duration + 1)), eX(ee.id, e0.current.duration, e0.current.duration)), tP(B.rq.ENDED), ew(!1));
                    },
                    onLoadedData: (e) => {
                        (to.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eN)), eN && (tp(eR, null != ez.current ? performance.now() - ez.current : null), ek(!1), null != td.current && (td.current.config.minAutoBitrate = 800000)));
                    },
                    onLoadedMetadata: (e) => {
                        null != e0.current && (to.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tm)), e5(!0), tc !== I.n1.VIDEO_HLS && tZ(ts), eW ? (e0.current.volume = 0) : (e0.current.volume = e$));
                    },
                    onLoadStart: () => {
                        ((ez.current = performance.now()), tf(eR), to.info('[QV] | handleLoadStart | loadingStartTime: '.concat(ez.current)));
                    },
                    onPlaying: () => {
                        if (!eY.current) return;
                        let e = performance.now() - eo;
                        (to.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), tj(e), (eY.current = !1));
                    },
                    onWaiting: (e) => {
                        ((eH.current = performance.now()), to.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eH.current)), tC(eR), ew(!0));
                    },
                    onProgress: (e) => {
                        if (null == e0.current) return;
                        to.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(e0.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < e0.current.buffered.length; e++) {
                            let n = e0.current.buffered.start(e),
                                r = e0.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / e0.current.duration,
                                    size: (r - n) / e0.current.duration
                                });
                        }
                        eL(t);
                    },
                    onCanPlay: tK,
                    onCanPlayThrough: tK,
                    onSeeked: () => {
                        (to.info('[QV] | handleSeeked'), tt(!0));
                    },
                    onAbort: () => tH(B.CY.ABORT),
                    onError: () => tH(B.CY.ERROR),
                    onEmptied: () => tH(B.CY.EMPTIED),
                    onStalled: () => tH(B.CY.STALLED),
                    onClick: () => {
                        (to.info('[QV] | handleVideoClick'), tq());
                    },
                    crossOrigin: tY,
                    children: [
                        null != t6 &&
                            tz &&
                            (0, r.jsx)('track', {
                                ref: e1,
                                src: t6.url,
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
                (eN || eI) &&
                    eO === B.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: H.loadingSpinner
                    }),
                eO === B.rq.PAUSED && e4 === y.yE.LOST_FOCUS && (0, r.jsx)(W, {}),
                es &&
                    eO !== B.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => ec(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: H.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: H.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tX, tJ], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(V.K, {
                                    quest: ee,
                                    onClose: () => {
                                        (ec(!1), tO(y.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE));
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
                                tX.to({
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
                            [H.play]: eO === B.rq.PLAYING,
                            [H.pause]: eO === B.rq.PAUSED
                        }),
                        children: eO === B.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: H.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: H.playPausePopIcon })
                    },
                    eO
                ),
                eu &&
                    null != tn &&
                    (0, r.jsx)(s.animated.div, {
                        className: H.captionContainer,
                        ref: t$,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tX.to({
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
                            children: tn.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: H.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tX.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tX.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tX.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(M.Z, {
                            percent: ex,
                            animate: !0 !== e2.current && !eT,
                            interactionEnabled: e8 && eQ,
                            backgroundColor: tM ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tM ? eA : void 0,
                            duration: null != (Z = null == (f = e0.current) ? void 0 : f.duration) ? Z : 1,
                            maxSeekableTime: tM && eQ ? tl : void 0,
                            onClick: (e) => {
                                (tZ(e), eO === B.rq.ENDED && tP(B.rq.PLAYING));
                            },
                            onScrubBack: () => {
                                tB();
                            },
                            onScrubForward: () => {
                                tF();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: H.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tX.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tX.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tX.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            onFocus: () => ey(!0),
                            onBlur: () => ey(!1),
                            children: (0, r.jsx)(L.Z, {
                                videoRef: e0,
                                quest: ee,
                                playerState: eO,
                                animSpring: tX,
                                visible: tM,
                                seekForwardEnabled: t4,
                                hideCaptionBtn: null == t6,
                                handlePlaybackBtnClick: tq,
                                handleTranscriptBtnClick: () => {
                                    (es || (null != e6 && e6.questId === ee.id && e6.fetchStatus !== x.iF.NONE && e6.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(ee, u.X.WATCH_VIDEO), ec(!es), tO(y.jn.VIDEO_MODAL, es ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE));
                                },
                                handleCaptionBtnClick: () => {
                                    (ed(!eu), tO(y.jn.VIDEO_MODAL, eu ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE));
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !em;
                                    to.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, h.fn)(null == (e = e0.current) ? void 0 : e.parentNode, e0.current);
                                    (t && null != n ? ((0, h.Dj)(n), n.addEventListener(h.NO, tV), ty(!0)) : t || null == n || (n.removeEventListener(h.NO, tV), ty(!1), (0, h.Pr)(n)), ef(t));
                                },
                                handleSeekBackBtnClick: tB,
                                handleSeekForwardBtnClick: tF,
                                handleControlBarPendingInteraction: eU,
                                onVolumeChange: tx
                            })
                        })
                    ]
                })
            ]
        })
    });
}
