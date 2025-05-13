n.d(t, { Z: () => $ }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(683305),
    c = n(760907),
    u = n(670081),
    d = n(442837),
    m = n(780384),
    p = n(481060),
    f = n(493773),
    v = n(607070),
    g = n(70097),
    b = n(210887),
    E = n(866960),
    O = n(63063),
    h = n(228488),
    S = n(617136),
    C = n(272008),
    j = n(497505),
    y = n(918701),
    _ = n(184299),
    x = n(347382),
    D = n(5881),
    P = n(208109),
    T = n(117242),
    N = n(720293),
    k = n(566078),
    I = n(602667),
    w = n(881773),
    A = n(350312),
    L = n(355243),
    R = n(106743),
    M = n(223418),
    V = n(604162),
    B = n(747717),
    F = n(281055),
    Z = n(435585),
    U = n(46140),
    q = n(981631),
    Y = n(217702),
    Q = n(388032),
    G = n(844136);
let z = new Set([q.IyS.FIVE_G, q.IyS.FOUR_G, q.IyS.UNKNOWN]),
    H = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function K() {
    let e = (0, d.e7)([b.Z], () => b.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: G.pauseText,
        style: { background: (0, m.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Q.intl.string(Q.t.U7Xrb2)
        })
    });
}
function W(e) {
    let { quest: t, shouldShow: n } = e,
        o = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == o
        ? null
        : (0, r.jsx)(I.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: o.url,
                      alt: 'Video thumbnail',
                      className: i()(G.stillFrameImageCard, { [G.stillFrameImageCardHidden]: !n })
                  })
          });
}
function X(e) {
    let { title: t, subtitle: n, icon: o, onClick: a, className: s } = e,
        [c, u] = l.useState(!1),
        d = () => {
            u(!0);
        },
        m = () => {
            u(!1);
        };
    return (0, r.jsx)(p.P3F, {
        className: i()(G.endScreenPanel, G.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)('div', {
            className: G.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: G.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-md/semibold',
                            className: G.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-sm/normal',
                            className: G.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(B.Z, { color: '#747783' }),
                (0, r.jsx)(o, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: G.endScreenIcon
                })
            ]
        })
    });
}
function $(e) {
    var t, n, o, m, b, I, B, $, J, ee, et, en, er;
    let { quest: el, videoSessionId: eo, onOptimisticProgressUpdate: ei, autoplay: ea, parentTransitionState: es, performanceClockStartTime: ec, onClose: eu } = e,
        ed = (0, _.km)((e) => e.transcriptEnabled),
        em = (0, _.km)((e) => e.setTranscriptEnabled),
        ep = (0, _.km)((e) => e.captionEnabled),
        ef = (0, _.km)((e) => e.setCaptionEnabled),
        ev = (0, _.km)((e) => e.fullScreenEnabled),
        eg = (0, _.km)((e) => e.setFullScreenEnabled),
        { focused: eb, focusedChanged: eE } = (0, F.xU)(),
        { visible: eO, visibleChanged: eh, targetRef: eS } = (0, F.Yy)(),
        [eC, ej] = l.useState(!0 === ea ? M.rq.PLAYING : M.rq.PAUSED),
        [ey, e_] = l.useState(!1),
        ex = (0, y.il)(el),
        [eD, eP] = l.useState(ex.percentComplete),
        [eT, eN] = l.useState(!1),
        [ek, eI] = l.useState(!0),
        [ew, eA] = l.useState(!1),
        [eL, eR] = l.useState([]),
        [eM, eV] = l.useState(E.Z.getEffectiveConnectionSpeed()),
        [eB, eF] = l.useState(0),
        [eZ, eU] = l.useState(0),
        [eq, eY] = l.useState(!1),
        [eQ, eG] = l.useState(!1),
        ez = l.useRef(!0),
        eH = l.useRef(null),
        eK = l.useRef(null),
        eW = (0, _.km)((e) => {
            var t;
            return null != (t = e.videoProgress[el.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eX = (0, _.km)((e) => e.setVideoProgress),
        e$ = (0, _.km)((e) => e.muted),
        eJ = (0, _.km)((e) => e.volume),
        e0 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion),
        e1 = (0, l.useRef)(null),
        e2 = (0, l.useRef)(null),
        e8 = l.useRef(!0),
        e6 = (null == (t = el.userStatus) ? void 0 : t.completedAt) != null,
        e4 = (0, _.km)((e) => e.transcript),
        [e7, e3] = l.useState(null),
        [e9, e5] = l.useState(!1),
        [te, tt] = l.useState(!1),
        [tn, tr] = l.useState(null),
        tl = e6 ? (null != (b = null == (n = e1.current) ? void 0 : n.duration) ? b : 0) : Math.max(eW.maxTimestampSec, ex.progressSeconds),
        to = l.useMemo(
            () =>
                (0, D.T)({
                    quest: el,
                    location: U.dr.VIDEO_MODAL
                }),
            [el]
        ),
        { title: ti, subtitle: ta } = (function (e) {
            var t, n, r, l, o, i, a, s;
            let c = null != (o = null == (t = e.config.videoMetadata) ? void 0 : t.messages.videoEndCtaTitle) ? o : Q.intl.string(Q.t.iiTtpK),
                d = null != (a = null != (i = null == (n = e.config.videoMetadata) ? void 0 : n.messages.videoEndCtaButtonLabel) ? i : null == (r = e.config.videoMetadata) ? void 0 : r.messages.videoEndCtaSubtitle) ? a : Q.intl.string(Q.t.mxaHf3),
                m = (0, y.B2)(e.config),
                p = null != (s = null == (l = e.config.videoMetadata) ? void 0 : l.messages.videoEndCtaSubtitle) ? s : Q.intl.string(Q.t.mxaHf3),
                f = e.config.features.includes(u.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: f ? m : c,
                subtitle: f ? p : d
            };
        })(el),
        ts = e6 ? (eW.timestampSec >= eW.duration ? 0 : eW.timestampSec) : Math.max(eW.timestampSec, ex.progressSeconds);
    (0, f.Ng)(() => {
        e8.current && ((e8.current = !1), eV(E.Z.getEffectiveConnectionSpeed()), e6 && eW.timestampSec >= eW.duration && eX(el.id, 0, eW.duration));
    });
    let {
            videoAssetId: tc,
            videoAsset: tu,
            hlsRef: td
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, x.z)(e, U.dr.VIDEO_MODAL),
                u = null == (o = e.config.videoMetadata) ? void 0 : o.assets,
                d = l.useMemo(() => (null != u ? (c && a.ZP.isSupported() && null != u.videoPlayerVideoHls ? N.i.VIDEO_PLAYER_VIDEO_HLS : z.has(n) || null == u.videoPlayerVideoLowRes ? N.i.VIDEO_PLAYER_VIDEO : N.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = l.useMemo(() => (null != d ? (0, N.z)(d, e) : null), [e, d]),
                p = () => {
                    null != s.current && 800000 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (d !== N.i.VIDEO_PLAYER_VIDEO_HLS || null == m || null == t.current || i.current) return;
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
        })(el, e1, eM, ts),
        { trackQuestVideoLoadingStarted: tm, trackQuestVideoLoadingEnded: tp, trackQuestVideoProgressed: tf, trackQuestVideoResumed: tv, trackQuestVideoPaused: tg, trackQuestVideoFocusChange: tb, trackQuestContentClick: tE, trackQuestVideoBufferingStarted: tO, trackQuestVideoBufferingEnded: th, trackWatchTimeAnalytics: tS, trackQuestVideoTimeToFirstFrame: tC, trackQuestVideoFullscreenChanged: tj, trackQuestVideoError: ty, trackQuestVideoVolumeChanged: t_ } = (0, Z.Z)(el, e1, td, eo, tc),
        tx = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = e1.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tD } = (0, T.Z)({
            getCurrentVideoTime: tx,
            isPlaying: eC === M.rq.PLAYING,
            isMetadataLoaded: e9,
            isInitialSeekComplete: te,
            onAnalytics: tS,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tP = l.useCallback(
            (e) => {
                if ((to.info('[QV] | updatePlayerState | playerState: '.concat(e)), ej(e), null != e1.current))
                    switch (e) {
                        case M.rq.PLAYING:
                            e1.current.paused && tv(e7), e3(null), e1.current.play();
                            break;
                        case M.rq.PAUSED:
                            e1.current.paused || tD(), e1.current.pause(), (ez.current = !1);
                            break;
                        case M.rq.ENDED:
                            tD(), em(!1);
                    }
            },
            [tv, e7, tD, em, to]
        );
    l.useEffect(() => {
        tg(e7);
    }, [e7, tg]),
        l.useEffect(() => {
            eE && tb(eb, eC);
        }, [eb, eE, eC, tb]);
    let tT = l.useCallback(
        (e) => {
            var t;
            e6 || (null == (t = el.userStatus) ? void 0 : t.enrolledAt) == null || (to.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, y.FI)(el, e)), tf();
        },
        [e6, el, to, tf]
    );
    l.useEffect(() => {
        (es !== p.Dvm.HIDDEN && es !== p.Dvm.EXITING && es !== p.Dvm.EXITED && (null == es || !eh || eO || e6) && (!eE || eb || e6)) || null == e1.current || eC !== M.rq.PLAYING || (to.info('[QV] | Pausing video | playerState: '.concat(eC, ', parentTransitionState: ').concat(es, ', visible: ').concat(eO, ', focused: ').concat(eb, ', isQuestCompleted: ').concat(e6)), tP(M.rq.PAUSED), e6 || e3(j.yE.LOST_FOCUS));
    }, [es, eb, eE, eO, eh, eC, e6, tP, tT, to]);
    let tN = () => e_(!0),
        tk = () => e_(!1),
        tI = ey || eC === M.rq.PAUSED || eC === M.rq.ENDED,
        tw = l.useCallback(() => {
            var e;
            to.info('[QV] | handleFullScreenExit');
            let t = (0, h.fn)(null == (e = e1.current) ? void 0 : e.parentNode, e1.current);
            null == t || (0, h.rB)(t) || (t.removeEventListener(h.NO, tw), eg(!1), tj(!1));
        }, [eg, to, tj]),
        tA = () => {
            if (null == e1.current) return;
            let e = Math.max(e1.current.currentTime - 10, 0);
            to.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tR(e), eC === M.rq.ENDED && tP(M.rq.PAUSED), tE(j.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD);
        },
        tL = () => {
            if (null == e1.current || !t$) return;
            let e = Math.min(e1.current.currentTime + 10, tl);
            to.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tR(e), eC !== M.rq.ENDED && e >= e1.current.duration && tP(M.rq.ENDED), tE(j.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = e1.current;
        return () => {
            let t = (0, h.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(h.NO, tw);
        };
    }, [tw]);
    let tR = l.useCallback(
            (e) => {
                null != e1.current && (to.info('[QV] | seekTimeline | timeSec: '.concat(e)), tD(), eN(!0), tt(!1), (e1.current.currentTime = e), eX(el.id, e, e1.current.duration));
            },
            [e1, eX, el.id, tD, to]
        ),
        tM = () => {
            if (null != e1.current)
                switch ((to.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eC)), eC)) {
                    case M.rq.ENDED:
                        tR(0), tP(M.rq.PLAYING);
                        break;
                    case M.rq.PLAYING:
                        tP(M.rq.PAUSED), e3(j.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tP(M.rq.PLAYING);
                }
        },
        tV = (e) => {
            tr(e);
        },
        tB = (e) => {
            tr((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tF = l.useCallback(() => {
            if (null == e1.current || (to.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(e1.current.textTracks.length)), 0 === e1.current.textTracks.length)) return;
            let e = e1.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, V.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tV(n)), (n.onexit = () => tB(n)));
                }
        }, [e1, to]);
    l.useEffect(() => {
        if (null == e2.current) return;
        let e = e2.current;
        return (
            e.addEventListener('load', tF),
            () => {
                null != e && e.removeEventListener('load', tF);
            }
        );
    }, [e2, tF]);
    let tZ = l.useCallback(
            (e) => {
                var t;
                to.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = e1.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tc, ', connectionSpeed: ')
                        .concat(eM)
                ),
                    ty(e, eM);
            },
            [eM, ty, e1, tc, to]
        ),
        tU = (e) => {
            to.info('[QV] | handleCanPlay: playerState: '.concat(eC)), null != e1.current && eC === M.rq.PLAYING && (to.info('[QV] | handleCanPlay: did NOT early return'), ek && (to.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(ek)), eI(!1)), ew && (to.info('[QV] | handleCanPlay: waitingForChunk: '.concat(ew)), th(eM, null != eK.current ? Date.now() - eK.current : null), eA(!1)), to.info('[QV] | handleCanPlay: updating player state to playing'), tP(M.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!eT) return;
        let e = setTimeout(() => {
            eN(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eT]);
    let [{ controlBarAnimSpring: tq }, tY] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: H,
            onStart: () => {
                eG(!1);
            },
            onRest: (e) => {
                1 === e.value && eG(!0);
            }
        })),
        tQ = (0, l.useRef)(null),
        [{ captionHeightSpring: tG }, tz] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: H
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tz({
                captionHeightSpring: ep && null != tn && null != (t = null == (e = tQ.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e0
            }),
            () => {
                tG.stop();
            }
        );
    }, [ep, tz, e0, tn, tG]),
        l.useEffect(
            () => (
                tY({
                    controlBarAnimSpring: tI || eq ? 1 : 0,
                    immediate: e0
                }),
                () => {
                    tq.stop();
                }
            ),
            [tI, tY, e0, eq, tq]
        );
    let tH = eC === M.rq.ENDED,
        tK = l.useCallback(
            async (e) => {
                if ((tE(e, S.jZ.LEARN_MORE), el.id === U.V6)) return void window.open(O.Z.getArticleURL(q.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != eu) {
                    let e = k.r.build(el.config).application.link;
                    (await (0, V.qP)(e)) && eu();
                }
                (0, y.FE)(el, {
                    content: e,
                    ctaContent: S.jZ.VISIT_SITE
                });
            },
            [el, tE, eu]
        ),
        tW = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, el), [el]),
        tX = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_CAPTION, el), [el]),
        t$ = e6 || eW.maxTimestampSec >= (null != (I = null == (o = e1.current) ? void 0 : o.currentTime) ? I : 0) + 1;
    return (0, r.jsx)(p.P3F, {
        className: G.videoCont,
        'data-fullscreen': ev,
        tabIndex: -1,
        onMouseEnter: tN,
        onMouseLeave: tk,
        onFocus: tN,
        onBlur: tk,
        children: (0, r.jsxs)('div', {
            className: G.videoContInnerRelative,
            children: [
                tH &&
                    ((0, P.e)({ location: U.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(A.Z, {
                              quest: el,
                              title: null != (et = null == ($ = el.config.videoMetadata) ? void 0 : $.messages.videoEndCtaTitle) ? et : Q.intl.string(Q.t.Ka526u),
                              subtitle: null != (en = null == (J = el.config.videoMetadata) ? void 0 : J.messages.videoEndCtaSubtitle) ? en : Q.intl.string(Q.t.tKMcAg),
                              ctaBtnLabel: null != (er = null == (ee = el.config.videoMetadata) ? void 0 : ee.messages.videoEndCtaButtonLabel) ? er : Q.intl.string(Q.t.iiTtpK),
                              onCTAClick: () => tK(j.jn.VIDEO_MODAL_END_CARD)
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(W, {
                                      quest: el,
                                      shouldShow: tH
                                  }),
                                  (0, r.jsx)('div', { className: G.videoContOverlay }),
                                  (0, r.jsx)(X, {
                                      title: ti,
                                      subtitle: ta,
                                      icon: p.d4D,
                                      className: G.endScreenPanelRight,
                                      onClick: () => tK(j.jn.VIDEO_MODAL)
                                  })
                              ]
                          })),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (e1.current = e), (eS.current = e);
                    },
                    autoPlay: ea,
                    playsInline: !0,
                    mediaLayoutType: ev ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [G.hidden]: tH,
                        [G.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tW ? void 0 : tW.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e1.current && (e1.current.currentTime >= eB && (to.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(e1.current.currentTime)), eF(e1.current.currentTime + 6 + 2 * Math.random()), tT(e1.current.currentTime)), e1.current.currentTime >= eZ && (eU(e1.current.currentTime + 1), (0, C.qm)(el.id, ex.taskType, e1.current.currentTime), ei(e1.current.currentTime)), eX(el.id, e1.current.currentTime, e1.current.duration), eP((e1.current.currentTime / e1.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e1.current && (tT(e1.current.duration + 1), to.info('[QV] | handleEnded: sending progress update: '.concat(e1.current.duration + 1)), eX(el.id, e1.current.duration, e1.current.duration)), tP(M.rq.ENDED), eA(!1);
                    },
                    onLoadedData: (e) => {
                        to.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(ek)), ek && (tp(eM, null != eH.current ? Date.now() - eH.current : null), eI(!1), null != td.current && (td.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != e1.current && (to.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tc)), e5(!0), tc !== N.i.VIDEO_PLAYER_VIDEO_HLS && tR(ts), e$ ? (e1.current.volume = 0) : (e1.current.volume = eJ));
                    },
                    onLoadStart: () => {
                        (eH.current = Date.now()), tm(eM), to.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eH.current));
                    },
                    onPlaying: () => {
                        if (!ez.current) return;
                        let e = performance.now() - ec;
                        to.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), tC(e), (ez.current = !1);
                    },
                    onWaiting: (e) => {
                        (eK.current = Date.now()), to.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eK.current)), tO(eM), eA(!0);
                    },
                    onProgress: (e) => {
                        if (null == e1.current) return;
                        to.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(e1.current.buffered.length));
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
                    onCanPlay: tU,
                    onCanPlayThrough: tU,
                    onSeeked: () => {
                        to.info('[QV] | handleSeeked'), tt(!0);
                    },
                    onAbort: () => tZ(M.CY.ABORT),
                    onError: () => tZ(M.CY.ERROR),
                    onEmptied: () => tZ(M.CY.EMPTIED),
                    onStalled: () => tZ(M.CY.STALLED),
                    onClick: () => {
                        to.info('[QV] | handleVideoClick'), tM();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tX &&
                            (0, r.jsx)('track', {
                                ref: e2,
                                src: tX.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tu &&
                            tc !== N.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tZ(M.CY.SOURCE_ERROR),
                                src: tu.url,
                                type: tu.mimetype
                            })
                    ]
                }),
                (ek || ew) &&
                    eC === M.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: G.loadingSpinner
                    }),
                eC === M.rq.PAUSED && e7 === j.yE.LOST_FOCUS && (0, r.jsx)(K, {}),
                ed &&
                    eC !== M.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => em(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: G.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: G.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tq, tG], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(R.K, {
                                    quest: el,
                                    onClose: () => {
                                        em(!1), tE(j.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE);
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: G.videoFooterContGradient,
                    style: {
                        opacity: (0, s.to)(
                            [
                                tq.to({
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
                        className: i()(G.playPausePopCont, {
                            [G.play]: eC === M.rq.PLAYING,
                            [G.pause]: eC === M.rq.PAUSED
                        }),
                        children: eC === M.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: G.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: G.playPausePopIcon })
                    },
                    eC
                ),
                ep &&
                    null != tn &&
                    (0, r.jsx)(s.animated.div, {
                        className: G.captionContainer,
                        ref: tQ,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tq.to({
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
                            className: G.captionText,
                            children: tn.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: G.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tq.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tq.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tq.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(L.Z, {
                            percent: eD,
                            animate: !0 !== e8.current && !eT,
                            interactionEnabled: e6 && eQ,
                            backgroundColor: tI ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tI ? eL : void 0,
                            duration: null != (B = null == (m = e1.current) ? void 0 : m.duration) ? B : 1,
                            maxSeekableTime: tI && eQ ? tl : void 0,
                            onClick: (e) => {
                                tR(e), eC === M.rq.ENDED && tP(M.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tA();
                            },
                            onScrubForward: () => {
                                tL();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: G.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tq.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tq.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tq.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(w.Z, {
                                videoRef: e1,
                                quest: el,
                                playerState: eC,
                                animSpring: tq,
                                visible: tI,
                                seekForwardEnabled: t$,
                                hideCaptionBtn: null == tX,
                                handlePlaybackBtnClick: tM,
                                handleTranscriptBtnClick: () => {
                                    ed || (null != e4 && e4.questId === el.id && e4.fetchStatus !== _.iF.NONE && e4.fetchStatus !== _.iF.FAILURE) || (0, C.lL)(el), em(!ed), tE(j.jn.VIDEO_MODAL, ed ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    ef(!ep), tE(j.jn.VIDEO_MODAL, ep ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ev;
                                    to.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, h.fn)(null == (e = e1.current) ? void 0 : e.parentNode, e1.current);
                                    t && null != n ? ((0, h.Dj)(n), n.addEventListener(h.NO, tw), tj(!0)) : t || null == n || (n.removeEventListener(h.NO, tw), tj(!1), (0, h.Pr)(n)), eg(t);
                                },
                                handleSeekBackBtnClick: tA,
                                handleSeekForwardBtnClick: tL,
                                handleControlBarPendingInteraction: eY,
                                onVolumeChange: t_
                            })
                        })
                    ]
                })
            ]
        })
    });
}
