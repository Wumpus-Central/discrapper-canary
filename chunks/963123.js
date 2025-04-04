n.d(t, { Z: () => X }), n(47120), n(653041);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(941208),
    s = n(642128),
    c = n(788347),
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
    N = n(5881),
    D = n(208109),
    P = n(117242),
    T = n(720293),
    k = n(602667),
    w = n(881773),
    A = n(350312),
    I = n(355243),
    L = n(106743),
    R = n(223418),
    M = n(604162),
    V = n(747717),
    B = n(281055),
    F = n(435585),
    Z = n(46140),
    U = n(981631),
    q = n(217702),
    Y = n(388032),
    W = n(844136);
let Q = new Set([U.IyS.FIVE_G, U.IyS.FOUR_G, U.IyS.UNKNOWN]),
    G = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function z() {
    let e = (0, d.e7)([b.Z], () => b.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: W.pauseText,
        style: { background: (0, m.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Y.NW.string(Y.t.U7Xrb2)
        })
    });
}
function H(e) {
    let { quest: t, shouldShow: n } = e,
        o = l.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == o
        ? null
        : (0, r.jsx)(k.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: o.url,
                      alt: 'Video thumbnail',
                      className: i()(W.stillFrameImageCard, { [W.stillFrameImageCardHidden]: !n })
                  })
          });
}
function K(e) {
    let { title: t, subtitle: n, icon: o, onClick: a, className: s } = e,
        [c, u] = l.useState(!1),
        d = () => {
            u(!0);
        },
        m = () => {
            u(!1);
        };
    return (0, r.jsx)(p.P3F, {
        className: i()(W.endScreenPanel, W.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)('div', {
            className: W.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: W.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-md/semibold',
                            className: W.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-sm/normal',
                            className: W.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(V.Z, { color: '#747783' }),
                (0, r.jsx)(o, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: W.endScreenIcon
                })
            ]
        })
    });
}
function X(e) {
    var t, n, o, m, b, k, V, X, $, J, ee, et, en;
    let { quest: er, videoSessionId: el, onOptimisticProgressUpdate: eo, autoplay: ei, parentTransitionState: ea, performanceClockStartTime: es } = e,
        ec = (0, _.km)((e) => e.transcriptEnabled),
        eu = (0, _.km)((e) => e.setTranscriptEnabled),
        ed = (0, _.km)((e) => e.captionEnabled),
        em = (0, _.km)((e) => e.setCaptionEnabled),
        ep = (0, _.km)((e) => e.fullScreenEnabled),
        ef = (0, _.km)((e) => e.setFullScreenEnabled),
        { focused: ev, focusedChanged: eg } = (0, B.xU)(),
        { visible: eb, visibleChanged: eE, targetRef: eO } = (0, B.Yy)(),
        [eh, eS] = l.useState(!0 === ei ? R.rq.PLAYING : R.rq.PAUSED),
        [eC, ej] = l.useState(!1),
        ey = (0, y.il)(er),
        [e_, ex] = l.useState(ey.percentComplete),
        [eN, eD] = l.useState(!1),
        [eP, eT] = l.useState(!0),
        [ek, ew] = l.useState(!1),
        [eA, eI] = l.useState([]),
        [eL, eR] = l.useState(E.Z.getEffectiveConnectionSpeed()),
        [eM, eV] = l.useState(0),
        [eB, eF] = l.useState(0),
        [eZ, eU] = l.useState(!1),
        [eq, eY] = l.useState(!1),
        eW = l.useRef(!0),
        eQ = l.useRef(null),
        eG = l.useRef(null),
        ez = (0, _.km)((e) => {
            var t;
            return null != (t = e.videoProgress[er.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eH = (0, _.km)((e) => e.setVideoProgress),
        eK = (0, _.km)((e) => e.muted),
        eX = (0, _.km)((e) => e.volume),
        e$ = (0, d.e7)([v.Z], () => v.Z.useReducedMotion),
        eJ = (0, l.useRef)(null),
        e0 = (0, l.useRef)(null),
        e1 = l.useRef(!0),
        e2 = (null == (t = er.userStatus) ? void 0 : t.completedAt) != null,
        e6 = (0, _.km)((e) => e.transcript),
        [e4, e7] = l.useState(null),
        [e8, e9] = l.useState(!1),
        [e3, e5] = l.useState(!1),
        [te, tt] = l.useState(null),
        tn = e2 ? (null != (b = null == (n = eJ.current) ? void 0 : n.duration) ? b : 0) : Math.max(ez.maxTimestampSec, ey.progressSeconds),
        tr = l.useMemo(
            () =>
                (0, N.T)({
                    quest: er,
                    location: Z.dr.VIDEO_MODAL
                }),
            [er]
        ),
        { title: tl, subtitle: to } = (function (e) {
            var t, n, r, l, o, i, a, s;
            let c = null != (o = null == (t = e.config.videoMetadata) ? void 0 : t.messages.videoEndCtaTitle) ? o : Y.NW.string(Y.t.iiTtpK),
                d = null != (a = null != (i = null == (n = e.config.videoMetadata) ? void 0 : n.messages.videoEndCtaButtonLabel) ? i : null == (r = e.config.videoMetadata) ? void 0 : r.messages.videoEndCtaSubtitle) ? a : Y.NW.string(Y.t.mxaHf3),
                m = (0, y.B2)(e.config),
                p = null != (s = null == (l = e.config.videoMetadata) ? void 0 : l.messages.videoEndCtaSubtitle) ? s : Y.NW.string(Y.t.mxaHf3),
                f = e.config.features.includes(u.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: f ? m : c,
                subtitle: f ? p : d
            };
        })(er),
        ti = e2 ? (ez.timestampSec >= ez.duration ? 0 : ez.timestampSec) : Math.max(ez.timestampSec, ey.progressSeconds);
    (0, f.Ng)(() => {
        e1.current && ((e1.current = !1), eR(E.Z.getEffectiveConnectionSpeed()), e2 && ez.timestampSec >= ez.duration && eH(er.id, 0, ez.duration));
    });
    let {
            videoAssetId: ta,
            videoAsset: ts,
            hlsRef: tc
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, x.z)(e, Z.dr.VIDEO_MODAL),
                u = null == (o = e.config.videoMetadata) ? void 0 : o.assets,
                d = l.useMemo(() => (null != u ? (c && a.ZP.isSupported() && null != u.videoPlayerVideoHls ? T.i.VIDEO_PLAYER_VIDEO_HLS : Q.has(n) || null == u.videoPlayerVideoLowRes ? T.i.VIDEO_PLAYER_VIDEO : T.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = l.useMemo(() => (null != d ? (0, T.z)(d, e) : null), [e, d]),
                p = () => {
                    null != s.current && 800000 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (d !== T.i.VIDEO_PLAYER_VIDEO_HLS || null == m || null == t.current || i.current) return;
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
        })(er, eJ, eL, ti),
        { trackQuestVideoLoadingStarted: tu, trackQuestVideoLoadingEnded: td, trackQuestVideoProgressed: tm, trackQuestVideoResumed: tp, trackQuestVideoPaused: tf, trackQuestVideoFocusChange: tv, trackQuestContentClick: tg, trackQuestVideoBufferingStarted: tb, trackQuestVideoBufferingEnded: tE, trackWatchTimeAnalytics: tO, trackQuestVideoTimeToFirstFrame: th, trackQuestVideoFullscreenChanged: tS, trackQuestVideoError: tC, trackQuestVideoVolumeChanged: tj } = (0, F.Z)(er, eJ, tc, el, ta),
        ty = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = eJ.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: t_ } = (0, P.Z)({
            getCurrentVideoTime: ty,
            isPlaying: eh === R.rq.PLAYING,
            isMetadataLoaded: e8,
            isInitialSeekComplete: e3,
            onAnalytics: tO,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tx = l.useCallback(
            (e) => {
                if ((tr.info('[QV] | updatePlayerState | playerState: '.concat(e)), eS(e), null != eJ.current))
                    switch (e) {
                        case R.rq.PLAYING:
                            eJ.current.paused && tp(e4), e7(null), eJ.current.play();
                            break;
                        case R.rq.PAUSED:
                            eJ.current.paused || t_(), eJ.current.pause(), (eW.current = !1);
                            break;
                        case R.rq.ENDED:
                            t_(), eu(!1);
                    }
            },
            [tp, e4, t_, eu, tr]
        );
    l.useEffect(() => {
        tf(e4);
    }, [e4, tf]),
        l.useEffect(() => {
            eg && tv(ev, eh);
        }, [ev, eg, eh, tv]);
    let tN = l.useCallback(
        (e) => {
            var t;
            e2 || (null == (t = er.userStatus) ? void 0 : t.enrolledAt) == null || (tr.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, y.FI)(er, e)), tm();
        },
        [e2, er, tr, tm]
    );
    l.useEffect(() => {
        (ea !== p.Dvm.HIDDEN && ea !== p.Dvm.EXITING && ea !== p.Dvm.EXITED && (null == ea || !eE || eb || e2) && (!eg || ev || e2)) || null == eJ.current || eh !== R.rq.PLAYING || (tr.info('[QV] | Pausing video | playerState: '.concat(eh, ', parentTransitionState: ').concat(ea, ', visible: ').concat(eb, ', focused: ').concat(ev, ', isQuestCompleted: ').concat(e2)), tx(R.rq.PAUSED), e2 || e7(j.yE.LOST_FOCUS));
    }, [ea, ev, eg, eb, eE, eh, e2, tx, tN, tr]);
    let tD = () => ej(!0),
        tP = () => ej(!1),
        tT = eC || eh === R.rq.PAUSED || eh === R.rq.ENDED,
        tk = l.useCallback(() => {
            var e;
            tr.info('[QV] | handleFullScreenExit');
            let t = (0, h.fn)(null == (e = eJ.current) ? void 0 : e.parentNode, eJ.current);
            null == t || (0, h.rB)(t) || (t.removeEventListener(h.NO, tk), ef(!1), tS(!1));
        }, [ef, tr, tS]),
        tw = () => {
            if (null == eJ.current) return;
            let e = Math.max(eJ.current.currentTime - 10, 0);
            tr.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tI(e), eh === R.rq.ENDED && tx(R.rq.PAUSED), tg(j.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD);
        },
        tA = () => {
            if (null == eJ.current || !tK) return;
            let e = Math.min(eJ.current.currentTime + 10, tn);
            tr.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tI(e), eh !== R.rq.ENDED && e >= eJ.current.duration && tx(R.rq.ENDED), tg(j.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eJ.current;
        return () => {
            let t = (0, h.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(h.NO, tk);
        };
    }, [tk]);
    let tI = l.useCallback(
            (e) => {
                null != eJ.current && (tr.info('[QV] | seekTimeline | timeSec: '.concat(e)), t_(), eD(!0), e5(!1), (eJ.current.currentTime = e), eH(er.id, e, eJ.current.duration));
            },
            [eJ, eH, er.id, t_, tr]
        ),
        tL = () => {
            if (null != eJ.current)
                switch ((tr.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eh)), eh)) {
                    case R.rq.ENDED:
                        tI(0), tx(R.rq.PLAYING);
                        break;
                    case R.rq.PLAYING:
                        tx(R.rq.PAUSED), e7(j.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tx(R.rq.PLAYING);
                }
        },
        tR = (e) => {
            tt(e);
        },
        tM = (e) => {
            tt((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tV = l.useCallback(() => {
            if (null == eJ.current || (tr.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(eJ.current.textTracks.length)), 0 === eJ.current.textTracks.length)) return;
            let e = eJ.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tR(n)), (n.onexit = () => tM(n)));
                }
        }, [eJ, tr]);
    l.useEffect(() => {
        if (null == e0.current) return;
        let e = e0.current;
        return (
            e.addEventListener('load', tV),
            () => {
                null != e && e.removeEventListener('load', tV);
            }
        );
    }, [e0, tV]);
    let tB = l.useCallback(
            (e) => {
                var t;
                tr.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = eJ.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(ta, ', connectionSpeed: ')
                        .concat(eL)
                ),
                    tC(e, eL);
            },
            [eL, tC, eJ, ta, tr]
        ),
        tF = (e) => {
            tr.info('[QV] | handleCanPlay: playerState: '.concat(eh)), null != eJ.current && eh === R.rq.PLAYING && (tr.info('[QV] | handleCanPlay: did NOT early return'), eP && (tr.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eP)), eT(!1)), ek && (tr.info('[QV] | handleCanPlay: waitingForChunk: '.concat(ek)), tE(eL, null != eG.current ? Date.now() - eG.current : null), ew(!1)), tr.info('[QV] | handleCanPlay: updating player state to playing'), tx(R.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!eN) return;
        let e = setTimeout(() => {
            eD(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eN]);
    let [{ controlBarAnimSpring: tZ }, tU] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: G,
            onStart: () => {
                eY(!1);
            },
            onRest: (e) => {
                1 === e.value && eY(!0);
            }
        })),
        tq = (0, l.useRef)(null),
        [{ captionHeightSpring: tY }, tW] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: G
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tW({
                captionHeightSpring: ed && null != te && null != (t = null == (e = tq.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e$
            }),
            () => {
                tY.stop();
            }
        );
    }, [ed, tW, e$, te, tY]),
        l.useEffect(
            () => (
                tU({
                    controlBarAnimSpring: tT || eZ ? 1 : 0,
                    immediate: e$
                }),
                () => {
                    tZ.stop();
                }
            ),
            [tT, tU, e$, eZ, tZ]
        );
    let tQ = eh === R.rq.ENDED,
        tG = l.useCallback(
            (e) => {
                if ((tg(e, S.jZ.LEARN_MORE), er.id === Z.V6)) return void window.open(O.Z.getArticleURL(U.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                (0, y.FE)(er, {
                    content: e,
                    ctaContent: S.jZ.LEARN_MORE
                });
            },
            [er, tg]
        ),
        tz = l.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, er), [er]),
        tH = l.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_CAPTION, er), [er]),
        tK = e2 || ez.maxTimestampSec >= (null != (k = null == (o = eJ.current) ? void 0 : o.currentTime) ? k : 0) + 1;
    return (0, r.jsx)(p.P3F, {
        className: W.videoCont,
        'data-fullscreen': ep,
        tabIndex: -1,
        onMouseEnter: tD,
        onMouseLeave: tP,
        onFocus: tD,
        onBlur: tP,
        children: (0, r.jsxs)('div', {
            className: W.videoContInnerRelative,
            children: [
                tQ &&
                    ((0, D.e)({ location: Z.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(A.Z, {
                              quest: er,
                              title: null != (ee = null == (X = er.config.videoMetadata) ? void 0 : X.messages.videoEndCtaTitle) ? ee : Y.NW.string(Y.t.Ka526u),
                              subtitle: null != (et = null == ($ = er.config.videoMetadata) ? void 0 : $.messages.videoEndCtaSubtitle) ? et : Y.NW.string(Y.t.tKMcAg),
                              ctaBtnLabel: null != (en = null == (J = er.config.videoMetadata) ? void 0 : J.messages.videoEndCtaButtonLabel) ? en : Y.NW.string(Y.t.iiTtpK),
                              onCTAClick: () => tG(j.jn.VIDEO_MODAL_END_CARD)
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(H, {
                                      quest: er,
                                      shouldShow: tQ
                                  }),
                                  (0, r.jsx)('div', { className: W.videoContOverlay }),
                                  (0, r.jsx)(K, {
                                      title: tl,
                                      subtitle: to,
                                      icon: p.d4D,
                                      className: W.endScreenPanelRight,
                                      onClick: () => tG(j.jn.VIDEO_MODAL)
                                  })
                              ]
                          })),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (eJ.current = e), (eO.current = e);
                    },
                    autoPlay: ei,
                    playsInline: !0,
                    mediaLayoutType: ep ? q.hV.STATIC : q.hV.RESPONSIVE,
                    className: i()({
                        [W.hidden]: tQ,
                        [W.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tz ? void 0 : tz.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != eJ.current && (eJ.current.currentTime >= eM && (tr.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(eJ.current.currentTime)), eV(eJ.current.currentTime + 6 + 2 * Math.random()), tN(eJ.current.currentTime)), eJ.current.currentTime >= eB && (eF(eJ.current.currentTime + 1), (0, C.qm)(er.id, ey.taskType, eJ.current.currentTime), eo(eJ.current.currentTime)), eH(er.id, eJ.current.currentTime, eJ.current.duration), ex((eJ.current.currentTime / eJ.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != eJ.current && (tN(eJ.current.duration + 1), tr.info('[QV] | handleEnded: sending progress update: '.concat(eJ.current.duration + 1)), eH(er.id, eJ.current.duration, eJ.current.duration)), tx(R.rq.ENDED), ew(!1);
                    },
                    onLoadedData: (e) => {
                        tr.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eP)), eP && (td(eL, null != eQ.current ? Date.now() - eQ.current : null), eT(!1), null != tc.current && (tc.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != eJ.current && (tr.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(ta)), e9(!0), ta !== T.i.VIDEO_PLAYER_VIDEO_HLS && tI(ti), eK ? (eJ.current.volume = 0) : (eJ.current.volume = eX));
                    },
                    onLoadStart: () => {
                        (eQ.current = Date.now()), tu(eL), tr.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eQ.current));
                    },
                    onPlaying: () => {
                        if (!eW.current) return;
                        let e = performance.now() - es;
                        tr.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), th(e), (eW.current = !1);
                    },
                    onWaiting: (e) => {
                        (eG.current = Date.now()), tr.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eG.current)), tb(eL), ew(!0);
                    },
                    onProgress: (e) => {
                        if (null == eJ.current) return;
                        tr.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(eJ.current.buffered.length));
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
                        eI(t);
                    },
                    onCanPlay: tF,
                    onCanPlayThrough: tF,
                    onSeeked: () => {
                        tr.info('[QV] | handleSeeked'), e5(!0);
                    },
                    onAbort: () => tB(R.CY.ABORT),
                    onError: () => tB(R.CY.ERROR),
                    onEmptied: () => tB(R.CY.EMPTIED),
                    onStalled: () => tB(R.CY.STALLED),
                    onClick: () => {
                        tr.info('[QV] | handleVideoClick'), tL();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tH &&
                            (0, r.jsx)('track', {
                                ref: e0,
                                src: tH.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != ts &&
                            ta !== T.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tB(R.CY.SOURCE_ERROR),
                                src: ts.url,
                                type: ts.mimetype
                            })
                    ]
                }),
                (eP || ek) &&
                    eh === R.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: W.loadingSpinner
                    }),
                eh === R.rq.PAUSED && e4 === j.yE.LOST_FOCUS && (0, r.jsx)(z, {}),
                ec &&
                    eh !== R.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => eu(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: W.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: W.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tZ, tY], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(L.K, {
                                    quest: er,
                                    onClose: () => {
                                        eu(!1), tg(j.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE);
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: W.videoFooterContGradient,
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
                        className: i()(W.playPausePopCont, {
                            [W.play]: eh === R.rq.PLAYING,
                            [W.pause]: eh === R.rq.PAUSED
                        }),
                        children: eh === R.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: W.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: W.playPausePopIcon })
                    },
                    eh
                ),
                ed &&
                    null != te &&
                    (0, r.jsx)(s.animated.div, {
                        className: W.captionContainer,
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
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-lg/semibold',
                            color: 'always-white',
                            className: W.captionText,
                            children: te.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: W.videoFooterCont,
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
                        (0, r.jsx)(I.Z, {
                            percent: e_,
                            animate: !0 !== e1.current && !eN,
                            interactionEnabled: e2 && eq,
                            backgroundColor: tT ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tT ? eA : void 0,
                            duration: null != (V = null == (m = eJ.current) ? void 0 : m.duration) ? V : 1,
                            maxSeekableTime: tT && eq ? tn : void 0,
                            onClick: (e) => {
                                tI(e), eh === R.rq.ENDED && tx(R.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tw();
                            },
                            onScrubForward: () => {
                                tA();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: W.videoControlsCont,
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
                            children: (0, r.jsx)(w.Z, {
                                videoRef: eJ,
                                quest: er,
                                playerState: eh,
                                animSpring: tZ,
                                visible: tT,
                                seekForwardEnabled: tK,
                                hideCaptionBtn: null == tH,
                                handlePlaybackBtnClick: tL,
                                handleTranscriptBtnClick: () => {
                                    ec || (null != e6 && e6.questId === er.id && e6.fetchStatus !== _.iF.NONE && e6.fetchStatus !== _.iF.FAILURE) || (0, C.lL)(er), eu(!ec), tg(j.jn.VIDEO_MODAL, ec ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    em(!ed), tg(j.jn.VIDEO_MODAL, ed ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ep;
                                    tr.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, h.fn)(null == (e = eJ.current) ? void 0 : e.parentNode, eJ.current);
                                    t && null != n ? ((0, h.Dj)(n), n.addEventListener(h.NO, tk), tS(!0)) : t || null == n || (n.removeEventListener(h.NO, tk), tS(!1), (0, h.Pr)(n)), ef(t);
                                },
                                handleSeekBackBtnClick: tw,
                                handleSeekForwardBtnClick: tA,
                                handleControlBarPendingInteraction: eU,
                                onVolumeChange: tj
                            })
                        })
                    ]
                })
            ]
        })
    });
}
