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
    E = n(70097),
    b = n(210887),
    O = n(866960),
    h = n(63063),
    S = n(228488),
    C = n(617136),
    j = n(272008),
    _ = n(497505),
    y = n(918701),
    x = n(184299),
    D = n(56117),
    P = n(347382),
    T = n(5881),
    N = n(208109),
    k = n(117242),
    I = n(720293),
    A = n(566078),
    w = n(602667),
    L = n(881773),
    R = n(350312),
    M = n(355243),
    V = n(106743),
    B = n(223418),
    F = n(604162),
    Z = n(747717),
    U = n(281055),
    q = n(435585),
    Y = n(46140),
    Q = n(981631),
    G = n(217702),
    z = n(388032),
    H = n(844136);
let K = new Set([Q.IyS.FIVE_G, Q.IyS.FOUR_G, Q.IyS.UNKNOWN]),
    W = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function X() {
    let e = (0, m.e7)([b.Z], () => b.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: H.pauseText,
        style: { background: (0, p.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(f.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: z.intl.string(z.t.U7Xrb2)
        })
    });
}
function $(e) {
    let { quest: t, shouldShow: n } = e,
        o = l.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == o
        ? null
        : (0, r.jsx)(w.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: o.url,
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
    return (0, r.jsx)(f.P3F, {
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
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-md/semibold',
                            className: H.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(f.X6q, {
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
    var t, n, o, p, b, w, Z;
    let { quest: ee, videoSessionId: et, onOptimisticProgressUpdate: en, autoplay: er, parentTransitionState: el, performanceClockStartTime: eo, onClose: ei } = e,
        ea = (0, x.km)((e) => e.transcriptEnabled),
        es = (0, x.km)((e) => e.setTranscriptEnabled),
        ec = (0, x.km)((e) => e.captionEnabled),
        eu = (0, x.km)((e) => e.setCaptionEnabled),
        ed = (0, x.km)((e) => e.fullScreenEnabled),
        em = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ep, focusedChanged: ef } = (0, U.xU)(),
        { visible: ev, visibleChanged: eg, targetRef: eE } = (0, U.Yy)(),
        [eb, eO] = l.useState(!0 === er ? B.rq.PLAYING : B.rq.PAUSED),
        [eh, eS] = l.useState(!1),
        eC = (0, y.il)(ee),
        [ej, e_] = l.useState(eC.percentComplete),
        [ey, ex] = l.useState(!1),
        [eD, eP] = l.useState(!0),
        [eT, eN] = l.useState(!1),
        [ek, eI] = l.useState([]),
        [eA, ew] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eL, eR] = l.useState(0),
        [eM, eV] = l.useState(0),
        [eB, eF] = l.useState(!1),
        [eZ, eU] = l.useState(!1),
        eq = l.useRef(!0),
        eY = l.useRef(null),
        eQ = l.useRef(null),
        eG = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[ee.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        ez = (0, x.km)((e) => e.setVideoProgress),
        eH = (0, x.km)((e) => e.muted),
        eK = (0, x.km)((e) => e.volume),
        eW = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        eX = (0, l.useRef)(null),
        e$ = (0, l.useRef)(null),
        eJ = l.useRef(!0),
        e0 = (null == (t = ee.userStatus) ? void 0 : t.completedAt) != null,
        e1 = (0, x.km)((e) => e.transcript),
        e2 = (0, D.Ec)(ee),
        e8 = (0, D.H)() && e2,
        [e6, e4] = l.useState(null),
        [e7, e3] = l.useState(!1),
        [e9, e5] = l.useState(!1),
        [te, tt] = l.useState(null),
        tn = e0 ? (null != (b = null == (n = eX.current) ? void 0 : n.duration) ? b : 0) : Math.max(eG.maxTimestampSec, eC.progressSeconds),
        tr = l.useMemo(
            () =>
                (0, T.T)({
                    quest: ee,
                    location: Y.dr.VIDEO_MODAL
                }),
            [ee]
        ),
        { title: tl, subtitle: to } = (function (e) {
            var t, n, r, l, o;
            let i = null == (t = e.config.taskConfigV2) ? void 0 : t.tasks[u.X.WATCH_VIDEO],
                a = null != (n = null == i ? void 0 : i.messages.videoEndCtaTitle) ? n : z.intl.string(z.t.iiTtpK),
                s = null != (l = null != (r = null == i ? void 0 : i.messages.videoEndCtaButtonLabel) ? r : null == i ? void 0 : i.messages.videoEndCtaSubtitle) ? l : z.intl.string(z.t.mxaHf3),
                c = (0, y.B2)(e.config),
                m = null != (o = null == i ? void 0 : i.messages.videoEndCtaSubtitle) ? o : z.intl.string(z.t.mxaHf3),
                p = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: p ? c : a,
                subtitle: p ? m : s
            };
        })(ee),
        ti = e0 ? (eG.timestampSec >= eG.duration ? 0 : eG.timestampSec) : Math.max(eG.timestampSec, eC.progressSeconds);
    (0, v.Ng)(() => {
        eJ.current && ((eJ.current = !1), ew(O.Z.getEffectiveConnectionSpeed()), e0 && eG.timestampSec >= eG.duration && ez(ee.id, 0, eG.duration));
    });
    let {
            videoAssetId: ta,
            videoAsset: ts,
            hlsRef: tc
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, P.z)(e, Y.dr.VIDEO_MODAL),
                u = null == (o = e.config.videoMetadata) ? void 0 : o.assets,
                d = l.useMemo(() => (null != u ? (c && a.ZP.isSupported() && null != u.videoPlayerVideoHls ? I.i.VIDEO_PLAYER_VIDEO_HLS : K.has(n) || null == u.videoPlayerVideoLowRes ? I.i.VIDEO_PLAYER_VIDEO : I.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = l.useMemo(() => (null != d ? (0, I.z)(d, e) : null), [e, d]),
                p = () => {
                    null != s.current && 800000 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (d !== I.i.VIDEO_PLAYER_VIDEO_HLS || null == m || null == t.current || i.current) return;
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
        })(ee, eX, eA, ti),
        { trackQuestVideoLoadingStarted: tu, trackQuestVideoLoadingEnded: td, trackQuestVideoProgressed: tm, trackQuestVideoResumed: tp, trackQuestVideoPaused: tf, trackQuestVideoFocusChange: tv, trackQuestContentClick: tg, trackQuestVideoBufferingStarted: tE, trackQuestVideoBufferingEnded: tb, trackWatchTimeAnalytics: tO, trackQuestVideoTimeToFirstFrame: th, trackQuestVideoFullscreenChanged: tS, trackQuestVideoError: tC, trackQuestVideoVolumeChanged: tj } = (0, q.Z)(ee, eX, tc, et, ta),
        t_ = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = eX.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: ty } = (0, k.Z)({
            getCurrentVideoTime: t_,
            isPlaying: eb === B.rq.PLAYING,
            isMetadataLoaded: e7,
            isInitialSeekComplete: e9,
            onAnalytics: tO,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tx = l.useCallback(
            (e) => {
                if ((tr.info('[QV] | updatePlayerState | playerState: '.concat(e)), eO(e), null != eX.current))
                    switch (e) {
                        case B.rq.PLAYING:
                            eX.current.paused && tp(e6), e4(null), eX.current.play();
                            break;
                        case B.rq.PAUSED:
                            eX.current.paused || ty(), eX.current.pause(), (eq.current = !1);
                            break;
                        case B.rq.ENDED:
                            ty(), es(!1);
                    }
            },
            [tp, e6, ty, es, tr]
        );
    l.useEffect(() => {
        tf(e6);
    }, [e6, tf]),
        l.useEffect(() => {
            ef && tv(ep, eb);
        }, [ep, ef, eb, tv]);
    let tD = l.useCallback(
        (e) => {
            var t;
            e0 || (null == (t = ee.userStatus) ? void 0 : t.enrolledAt) == null || (tr.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, y.FI)(ee, e)), tm();
        },
        [e0, ee, tr, tm]
    );
    l.useEffect(() => {
        (el !== f.Dvm.HIDDEN && el !== f.Dvm.EXITING && el !== f.Dvm.EXITED && (null == el || !eg || ev || e0) && (!ef || ep || e0)) || null == eX.current || eb !== B.rq.PLAYING || (tr.info('[QV] | Pausing video | playerState: '.concat(eb, ', parentTransitionState: ').concat(el, ', visible: ').concat(ev, ', focused: ').concat(ep, ', isQuestCompleted: ').concat(e0)), tx(B.rq.PAUSED), e0 || e4(_.yE.LOST_FOCUS));
    }, [el, ep, ef, ev, eg, eb, e0, tx, tD, tr]);
    let tP = () => eS(!0),
        tT = () => eS(!1),
        tN = eh || eb === B.rq.PAUSED || eb === B.rq.ENDED,
        tk = l.useCallback(() => {
            var e;
            tr.info('[QV] | handleFullScreenExit');
            let t = (0, S.fn)(null == (e = eX.current) ? void 0 : e.parentNode, eX.current);
            null == t || (0, S.rB)(t) || (t.removeEventListener(S.NO, tk), em(!1), tS(!1));
        }, [em, tr, tS]),
        tI = () => {
            if (null == eX.current) return;
            let e = Math.max(eX.current.currentTime - 10, 0);
            tr.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tw(e), eb === B.rq.ENDED && tx(B.rq.PAUSED), tg(_.jn.VIDEO_MODAL, C.jZ.SEEK_BACKWARD);
        },
        tA = () => {
            if (null == eX.current || !tW) return;
            let e = Math.min(eX.current.currentTime + 10, tn);
            tr.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tw(e), eb !== B.rq.ENDED && e >= eX.current.duration && tx(B.rq.ENDED), tg(_.jn.VIDEO_MODAL, C.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eX.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tk);
        };
    }, [tk]);
    let tw = l.useCallback(
            (e) => {
                null != eX.current && (tr.info('[QV] | seekTimeline | timeSec: '.concat(e)), ty(), ex(!0), e5(!1), (eX.current.currentTime = e), ez(ee.id, e, eX.current.duration));
            },
            [eX, ez, ee.id, ty, tr]
        ),
        tL = () => {
            if (null != eX.current)
                switch ((tr.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eb)), eb)) {
                    case B.rq.ENDED:
                        tw(0), tx(B.rq.PLAYING);
                        break;
                    case B.rq.PLAYING:
                        tx(B.rq.PAUSED), e4(_.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tx(B.rq.PLAYING);
                }
        },
        tR = (e) => {
            tt(e);
        },
        tM = (e) => {
            tt((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tV = l.useCallback(() => {
            if (null == eX.current || (tr.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(eX.current.textTracks.length)), 0 === eX.current.textTracks.length)) return;
            let e = eX.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, F.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tR(n)), (n.onexit = () => tM(n)));
                }
        }, [eX, tr]);
    l.useEffect(() => {
        if (null == e$.current) return;
        let e = e$.current;
        return (
            e.addEventListener('load', tV),
            () => {
                null != e && e.removeEventListener('load', tV);
            }
        );
    }, [e$, tV]);
    let tB = l.useCallback(
            (e) => {
                var t;
                tr.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = eX.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(ta, ', connectionSpeed: ')
                        .concat(eA)
                ),
                    tC(e, eA);
            },
            [eA, tC, eX, ta, tr]
        ),
        tF = (e) => {
            tr.info('[QV] | handleCanPlay: playerState: '.concat(eb)), null != eX.current && eb === B.rq.PLAYING && (tr.info('[QV] | handleCanPlay: did NOT early return'), eD && (tr.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eD)), eP(!1)), eT && (tr.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eT)), tb(eA, null != eQ.current ? Date.now() - eQ.current : null), eN(!1)), tr.info('[QV] | handleCanPlay: updating player state to playing'), tx(B.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!ey) return;
        let e = setTimeout(() => {
            ex(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ey]);
    let [{ controlBarAnimSpring: tZ }, tU] = (0, f.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: W,
            onStart: () => {
                eU(!1);
            },
            onRest: (e) => {
                1 === e.value && eU(!0);
            }
        })),
        tq = (0, l.useRef)(null),
        [{ captionHeightSpring: tY }, tQ] = (0, f.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: W
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tQ({
                captionHeightSpring: ec && null != te && null != (t = null == (e = tq.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: eW
            }),
            () => {
                tY.stop();
            }
        );
    }, [ec, tQ, eW, te, tY]),
        l.useEffect(
            () => (
                tU({
                    controlBarAnimSpring: tN || eB ? 1 : 0,
                    immediate: eW
                }),
                () => {
                    tZ.stop();
                }
            ),
            [tN, tU, eW, eB, tZ]
        );
    let tG = eb === B.rq.ENDED,
        tz = l.useCallback(
            async (e) => {
                if ((tg(e, C.jZ.LEARN_MORE), ee.id === Y.V6)) return void window.open(h.Z.getArticleURL(Q.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != ei) {
                    let e = A.r.build(ee.config).application.link;
                    (await (0, F.qP)(e)) && ei();
                }
                e2 && D.uK.trackExposure({ location: 'Quest External Dialog' }),
                    e8
                        ? (0, y.nc)(ee, {
                              content: e,
                              ctaContent: C.jZ.OPEN_GAME_LINK
                          })
                        : (0, y.FE)(ee, {
                              content: e,
                              ctaContent: C.jZ.OPEN_GAME_LINK
                          });
            },
            [tg, ee, ei, e2, e8]
        ),
        tH = l.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, ee), [ee]),
        tK = l.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_CAPTION, ee), [ee]),
        tW = e0 || eG.maxTimestampSec >= (null != (w = null == (o = eX.current) ? void 0 : o.currentTime) ? w : 0) + 1;
    return (0, r.jsx)(f.P3F, {
        className: H.videoCont,
        'data-fullscreen': ed,
        tabIndex: -1,
        onMouseEnter: tP,
        onMouseLeave: tT,
        onFocus: tP,
        onBlur: tT,
        children: (0, r.jsxs)('div', {
            className: H.videoContInnerRelative,
            children: [
                tG &&
                    (() => {
                        if (!(0, N.e)({ location: Y.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)($, {
                                        quest: ee,
                                        shouldShow: tG
                                    }),
                                    (0, r.jsx)('div', { className: H.videoContOverlay }),
                                    (0, r.jsx)(J, {
                                        title: tl,
                                        subtitle: to,
                                        icon: f.d4D,
                                        className: H.endScreenPanelRight,
                                        onClick: () => tz(_.jn.VIDEO_MODAL)
                                    })
                                ]
                            });
                        {
                            var e, t, n, l;
                            let o = null == (e = ee.config.taskConfigV2) ? void 0 : e.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(R.Z, {
                                quest: ee,
                                title: null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : z.intl.string(z.t.Ka526u),
                                subtitle: null != (n = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? n : z.intl.string(z.t.tKMcAg),
                                ctaBtnLabel: null != (l = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? l : z.intl.string(z.t.iiTtpK),
                                onCTAClick: () => tz(_.jn.VIDEO_MODAL_END_CARD)
                            });
                        }
                    })(),
                (0, r.jsxs)(E.Z, {
                    ref: (e) => {
                        (eX.current = e), (eE.current = e);
                    },
                    autoPlay: er,
                    playsInline: !0,
                    mediaLayoutType: ed ? G.hV.STATIC : G.hV.RESPONSIVE,
                    className: i()({
                        [H.hidden]: tG,
                        [H.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tH ? void 0 : tH.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != eX.current && (eX.current.currentTime >= eL && (tr.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(eX.current.currentTime)), eR(eX.current.currentTime + 6 + 2 * Math.random()), tD(eX.current.currentTime)), eX.current.currentTime >= eM && (eV(eX.current.currentTime + 1), (0, j.qm)(ee.id, eC.taskType, eX.current.currentTime), en(eX.current.currentTime)), ez(ee.id, eX.current.currentTime, eX.current.duration), e_((eX.current.currentTime / eX.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != eX.current && (tD(eX.current.duration + 1), tr.info('[QV] | handleEnded: sending progress update: '.concat(eX.current.duration + 1)), ez(ee.id, eX.current.duration, eX.current.duration)), tx(B.rq.ENDED), eN(!1);
                    },
                    onLoadedData: (e) => {
                        tr.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eD)), eD && (td(eA, null != eY.current ? Date.now() - eY.current : null), eP(!1), null != tc.current && (tc.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != eX.current && (tr.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(ta)), e3(!0), ta !== I.i.VIDEO_PLAYER_VIDEO_HLS && tw(ti), eH ? (eX.current.volume = 0) : (eX.current.volume = eK));
                    },
                    onLoadStart: () => {
                        (eY.current = Date.now()), tu(eA), tr.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eY.current));
                    },
                    onPlaying: () => {
                        if (!eq.current) return;
                        let e = performance.now() - eo;
                        tr.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), th(e), (eq.current = !1);
                    },
                    onWaiting: (e) => {
                        (eQ.current = Date.now()), tr.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eQ.current)), tE(eA), eN(!0);
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
                    onCanPlay: tF,
                    onCanPlayThrough: tF,
                    onSeeked: () => {
                        tr.info('[QV] | handleSeeked'), e5(!0);
                    },
                    onAbort: () => tB(B.CY.ABORT),
                    onError: () => tB(B.CY.ERROR),
                    onEmptied: () => tB(B.CY.EMPTIED),
                    onStalled: () => tB(B.CY.STALLED),
                    onClick: () => {
                        tr.info('[QV] | handleVideoClick'), tL();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tK &&
                            (0, r.jsx)('track', {
                                ref: e$,
                                src: tK.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != ts &&
                            ta !== I.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tB(B.CY.SOURCE_ERROR),
                                src: ts.url,
                                type: ts.mimetype
                            })
                    ]
                }),
                (eD || eT) &&
                    eb === B.rq.PLAYING &&
                    (0, r.jsx)(f.$jN, {
                        type: f.$jN.Type.WANDERING_CUBES,
                        className: H.loadingSpinner
                    }),
                eb === B.rq.PAUSED && e6 === _.yE.LOST_FOCUS && (0, r.jsx)(X, {}),
                ea &&
                    eb !== B.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.P3F, {
                                onClick: () => es(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: H.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: H.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tZ, tY], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(V.K, {
                                    quest: ee,
                                    onClose: () => {
                                        es(!1), tg(_.jn.VIDEO_MODAL, C.jZ.TRANSCRIPT_DISABLE);
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
                                tZ.to({
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
                            [H.play]: eb === B.rq.PLAYING,
                            [H.pause]: eb === B.rq.PAUSED
                        }),
                        children: eb === B.rq.PLAYING ? (0, r.jsx)(f.o1U, { className: H.playPausePopIcon }) : (0, r.jsx)(f.fpf, { className: H.playPausePopIcon })
                    },
                    eb
                ),
                ec &&
                    null != te &&
                    (0, r.jsx)(s.animated.div, {
                        className: H.captionContainer,
                        ref: tq,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tZ.to({
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
                            className: H.captionText,
                            children: te.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: H.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tZ.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tZ.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tZ.to({
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
                            animate: !0 !== eJ.current && !ey,
                            interactionEnabled: e0 && eZ,
                            backgroundColor: tN ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tN ? ek : void 0,
                            duration: null != (Z = null == (p = eX.current) ? void 0 : p.duration) ? Z : 1,
                            maxSeekableTime: tN && eZ ? tn : void 0,
                            onClick: (e) => {
                                tw(e), eb === B.rq.ENDED && tx(B.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tI();
                            },
                            onScrubForward: () => {
                                tA();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: H.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tZ.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tZ.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tZ.to({
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
                                playerState: eb,
                                animSpring: tZ,
                                visible: tN,
                                seekForwardEnabled: tW,
                                hideCaptionBtn: null == tK,
                                handlePlaybackBtnClick: tL,
                                handleTranscriptBtnClick: () => {
                                    ea || (null != e1 && e1.questId === ee.id && e1.fetchStatus !== x.iF.NONE && e1.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(ee), es(!ea), tg(_.jn.VIDEO_MODAL, ea ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eu(!ec), tg(_.jn.VIDEO_MODAL, ec ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ed;
                                    tr.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, S.fn)(null == (e = eX.current) ? void 0 : e.parentNode, eX.current);
                                    t && null != n ? ((0, S.Dj)(n), n.addEventListener(S.NO, tk), tS(!0)) : t || null == n || (n.removeEventListener(S.NO, tk), tS(!1), (0, S.Pr)(n)), em(t);
                                },
                                handleSeekBackBtnClick: tI,
                                handleSeekForwardBtnClick: tA,
                                handleControlBarPendingInteraction: eF,
                                onVolumeChange: tj
                            })
                        })
                    ]
                })
            ]
        })
    });
}
