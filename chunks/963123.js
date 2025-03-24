n.d(t, { Z: () => ee }), n(47120), n(653041);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(941208),
    a = n(642128),
    c = n(232713),
    u = n(442837),
    d = n(780384),
    m = n(481060),
    p = n(493773),
    f = n(607070),
    v = n(70097),
    g = n(210887),
    E = n(866960),
    b = n(63063),
    O = n(228488),
    S = n(617136),
    h = n(915750),
    C = n(272008),
    j = n(497505),
    y = n(918701),
    _ = n(184299),
    x = n(347382),
    D = n(5881),
    N = n(208109),
    P = n(720293),
    T = n(602667),
    I = n(341907),
    w = n(881773),
    k = n(350312),
    A = n(355243),
    L = n(106743),
    R = n(223418),
    M = n(604162),
    V = n(747717),
    q = n(281055),
    B = n(920393),
    F = n(46140),
    U = n(642145),
    Z = n(981631),
    Y = n(217702),
    Q = n(388032),
    W = n(881382);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let G = new Set([Z.IyS.FIVE_G, Z.IyS.FOUR_G, Z.IyS.UNKNOWN]),
    H = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function K() {
    let e = (0, u.e7)([g.Z], () => g.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: W.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Q.NW.string(Q.t.U7Xrb2)
        })
    });
}
function X(e) {
    let { quest: t, shouldShow: n } = e,
        i = o.useMemo(() => (0, P.z)(P.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(T.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: 'Video thumbnail',
                      className: l()(W.stillFrameImageCard, { [W.stillFrameImageCardHidden]: !n })
                  })
          });
}
function $(e) {
    let { title: t, subtitle: n, icon: i, onClick: s, className: a } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        p = () => {
            u(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: l()(W.endScreenPanel, W.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: p,
        onFocus: d,
        onBlur: p,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: W.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: W.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-md/semibold',
                            className: W.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-sm/normal',
                            className: W.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(V.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: W.endScreenIcon
                })
            ]
        })
    });
}
function J(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? {
              hls_level_index: -100,
              hls_segment_res_width: -100,
              hls_segment_res_height: -100
          }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height
          };
}
function ee(e) {
    var t, n, i, d, g, T, V, ee, et, en, er, eo, ei, el, es, ea, ec, eu, ed;
    let { quest: em, videoSessionId: ep, onOptimisticProgressUpdate: ef, autoplay: ev, parentTransitionState: eg, performanceClockStartTime: eE } = e,
        eb = (0, h.aM)(),
        eO = (0, S._F)(),
        eS = (0, S.O5)(),
        eh = (0, _.km)((e) => e.transcriptEnabled),
        eC = (0, _.km)((e) => e.setTranscriptEnabled),
        ej = (0, _.km)((e) => e.captionEnabled),
        ey = (0, _.km)((e) => e.setCaptionEnabled),
        e_ = (0, _.km)((e) => e.fullScreenEnabled),
        ex = (0, _.km)((e) => e.setFullScreenEnabled),
        { focused: eD, focusedChanged: eN } = (0, q.xU)(),
        { visible: eP, visibleChanged: eT, targetRef: eI } = (0, q.Yy)(),
        [ew, ek] = o.useState(!0 === ev ? R.rq.PLAYING : R.rq.PAUSED),
        [eA, eL] = o.useState(!1),
        eR = (0, y.il)(em),
        [eM, eV] = o.useState(eR.percentComplete),
        [eq, eB] = o.useState(!1),
        [eF, eU] = o.useState(!0),
        [eZ, eY] = o.useState(!1),
        [eQ, eW] = o.useState([]),
        [ez, eG] = o.useState(E.Z.getEffectiveConnectionSpeed()),
        [eH, eK] = o.useState(0),
        [eX, e$] = o.useState(0),
        [eJ, e0] = o.useState(!1),
        [e1, e2] = o.useState(!1),
        e6 = o.useRef(!0),
        e4 = o.useRef(null),
        e8 = o.useRef(null),
        e9 = (0, o.useRef)(-1),
        e7 = (0, _.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[em.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        e3 = (0, _.km)((e) => e.setVideoProgress),
        e5 = (0, _.km)((e) => e.muted),
        te = (0, _.km)((e) => e.volume),
        tt = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        tn = (0, o.useRef)(null),
        tr = (0, o.useRef)(null),
        to = o.useRef(!0),
        ti = (null === (t = em.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        tl = (0, _.km)((e) => e.transcript),
        [ts, ta] = o.useState(null),
        [tc, tu] = o.useState(!1),
        [td, tm] = o.useState(!1),
        [tp, tf] = o.useState(null),
        tv = ti ? (null !== (g = null === (n = tn.current) || void 0 === n ? void 0 : n.duration) && void 0 !== g ? g : 0) : Math.max(e7.maxTimestampSec, eR.progressSeconds),
        tg = ti ? (e7.timestampSec >= e7.duration ? 0 : e7.timestampSec) : Math.max(e7.timestampSec, eR.progressSeconds),
        tE = o.useMemo(
            () =>
                (0, D.T)({
                    quest: em,
                    location: F.dr.VIDEO_MODAL
                }),
            [em]
        ),
        {
            videoAssetId: tb,
            videoAsset: tO,
            hlsRef: tS
        } = (function (e, t, n, r) {
            var i;
            let l = o.useRef(!1),
                a = o.useRef(null),
                c = (0, x.z)(e, F.dr.VIDEO_MODAL),
                u = null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.assets,
                d = o.useMemo(() => (null != u ? (c && s.ZP.isSupported() && null != u.videoPlayerVideoHls ? P.i.VIDEO_PLAYER_VIDEO_HLS : G.has(n) || null == u.videoPlayerVideoLowRes ? P.i.VIDEO_PLAYER_VIDEO : P.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = o.useMemo(() => (null != d ? (0, P.z)(d, e) : null), [e, d]);
            return (
                o.useEffect(() => {
                    d === P.i.VIDEO_PLAYER_VIDEO_HLS &&
                        null != m &&
                        null != t.current &&
                        !l.current &&
                        ((a.current = new s.ZP({
                            maxBufferLength: 15,
                            startPosition: r,
                            startFragPrefetch: !0
                        })),
                        a.current.loadSource(m.url),
                        a.current.attachMedia(t.current),
                        (l.current = !0));
                }, [m, d, t, r]),
                {
                    videoAssetId: d,
                    videoAsset: m,
                    hlsRef: a
                }
            );
        })(em, tn, ez, tg),
        th = o.useCallback(
            (e) => {
                if (null != tn.current) {
                    var t, n;
                    eO({
                        questId: em.id,
                        event: Z.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: z(
                            ((t = z({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tb,
                                    quest_completed: ti,
                                    video_duration_sec: tn.current.duration,
                                    video_progress: (0, I.formatVideoProgressRatio)(e.segment_end_sec, tn.current.duration),
                                    video_session_id: ep
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                            J(tS)
                        )
                    });
                }
            },
            [eO, em.id, tb, ti, ep, tS]
        ),
        { forceSendCurrentSegment: tC } = (0, B.Z)({
            videoRef: tn,
            isPlaying: ew === R.rq.PLAYING,
            isMetadataLoaded: tc,
            isInitialSeekComplete: td,
            onAnalytics: th,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tj = o.useCallback(
            (e) => {
                if ((tE.info('[QV] | updatePlayerState | playerState: '.concat(e)), ek(e), null != tn.current))
                    switch (e) {
                        case R.rq.PLAYING:
                            tn.current.play(),
                                eO({
                                    questId: em.id,
                                    event: Z.rMx.QUEST_VIDEO_RESUMED,
                                    properties: z(
                                        {
                                            video_timestamp_seconds: tn.current.currentTime,
                                            pause_reason: ts,
                                            video_session_id: ep
                                        },
                                        J(tS)
                                    )
                                }),
                                ta(null);
                            break;
                        case R.rq.PAUSED:
                            tn.current.pause(), (e6.current = !1), tC();
                            break;
                        case R.rq.ENDED:
                            eC(!1), tC();
                    }
            },
            [eO, em.id, ts, ep, tC, eC, tS, tE]
        );
    (0, p.Ng)(() => {
        to.current && ((to.current = !1), eG(E.Z.getEffectiveConnectionSpeed()), ti && e7.timestampSec >= e7.duration && e3(em.id, 0, e7.duration));
    }),
        o.useEffect(() => {
            null != tn.current &&
                null != ts &&
                eO({
                    questId: em.id,
                    event: Z.rMx.QUEST_VIDEO_PAUSED,
                    properties: z(
                        {
                            video_timestamp_seconds: tn.current.currentTime,
                            reason: ts,
                            video_session_id: ep
                        },
                        J(tS)
                    )
                });
        }, [ts, em.id, eO, ep, tS]),
        o.useEffect(() => {
            eN &&
                null != tn.current &&
                eO({
                    questId: em.id,
                    event: eD ? Z.rMx.QUEST_VIDEO_APP_FOCUSED : Z.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: tn.current.currentTime,
                        video_state: ew,
                        video_session_id: ep
                    }
                });
        }, [eD, eN, ew, em.id, eO, ep]);
    let ty = o.useCallback(
        (e) => {
            var t;
            tE.info('[QV] | sendProgressUpdate: Checking conditions...'),
                ti || (null === (t = em.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (tE.info('[QV] | sendProgressUpdate: quest enrolled and not completed, sending video progress: '.concat(e)), (0, y.FI)(em, e)),
                null != tn.current &&
                    eO({
                        questId: em.id,
                        event: Z.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: z(
                            {
                                progress: (0, I.formatVideoProgressRatio)(tn.current.currentTime, tn.current.duration),
                                video_timestamp_seconds: tn.current.currentTime,
                                video_session_id: ep
                            },
                            J(tS)
                        )
                    });
        },
        [ti, em, eO, ep, tS, tE]
    );
    o.useEffect(() => {
        (eg !== m.Dvm.HIDDEN && eg !== m.Dvm.EXITING && eg !== m.Dvm.EXITED && (null == eg || !eT || eP || ti) && (!eN || eD || ti)) || null == tn.current || ew !== R.rq.PLAYING || (tE.info('[QV] | Pausing video | playerState: '.concat(ew, ', parentTransitionState: ').concat(eg, ', visible: ').concat(eP, ', focused: ').concat(eD, ', isQuestCompleted: ').concat(ti)), tj(R.rq.PAUSED), ti || ta(R.yE.LOST_FOCUS));
    }, [eg, eD, eN, eP, eT, ew, ti, tj, ty, tE]);
    let t_ = () => {
            eL(!0);
        },
        tx = () => {
            eL(!1);
        },
        tD = eA || ew === R.rq.PAUSED || ew === R.rq.ENDED,
        tN = o.useCallback(() => {
            var e;
            tE.info('[QV] | handleFullScreenExit');
            let t = (0, O.fn)(null === (e = tn.current) || void 0 === e ? void 0 : e.parentNode, tn.current);
            null == t ||
                (0, O.rB)(t) ||
                (t.removeEventListener(O.NO, tN),
                ex(!1),
                eO({
                    questId: em.id,
                    event: Z.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: ep }
                }));
        }, [em.id, ex, eO, ep, tE]),
        tP = () => {
            if (null == tn.current) return;
            let e = Math.max(tn.current.currentTime - 10, 0);
            tE.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)),
                tI(e),
                ew === R.rq.ENDED && tj(R.rq.PAUSED),
                eS({
                    questId: em.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_BACKWARD
                });
        },
        tT = () => {
            if (null == tn.current || !tz) return;
            let e = Math.min(tn.current.currentTime + 10, tv);
            tE.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)),
                tI(e),
                ew !== R.rq.ENDED && e >= tn.current.duration && tj(R.rq.ENDED),
                eS({
                    questId: em.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = tn.current;
        return () => {
            let t = (0, O.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(O.NO, tN);
        };
    }, [tN]);
    let tI = o.useCallback(
            (e) => {
                null != tn.current && (tE.info('[QV] | seekTimeline | timeSec: '.concat(e)), tC(), eB(!0), tm(!1), (tn.current.currentTime = e), e3(em.id, e, tn.current.duration));
            },
            [tn, e3, em.id, tC, tE]
        ),
        tw = () => {
            if (null != tn.current)
                switch ((tE.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(ew)), ew)) {
                    case R.rq.ENDED:
                        tI(0), tj(R.rq.PLAYING);
                        break;
                    case R.rq.PLAYING:
                        tj(R.rq.PAUSED), ta(R.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tj(R.rq.PLAYING);
                }
        },
        tk = (e) => {
            tf(e);
        },
        tA = (e) => {
            tf((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tL = o.useCallback(() => {
            if (null == tn.current || (tE.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(tn.current.textTracks.length)), 0 === tn.current.textTracks.length)) return;
            let e = tn.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tk(n)), (n.onexit = () => tA(n)));
                }
        }, [tn, tE]);
    o.useEffect(() => {
        if (null == tr.current) return;
        let e = tr.current;
        return (
            e.addEventListener('load', tL),
            () => {
                null != e && e.removeEventListener('load', tL);
            }
        );
    }, [tr, tL]);
    let tR = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = tn.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = tn.current) || void 0 === n ? void 0 : n.networkState,
                        i = null != tn.current ? (0, I.formatVideoProgressRatio)(tn.current.currentTime, tn.current.duration) : void 0;
                    tE.info('[QV] | logVideoError: errorType: '.concat(e, ', videoProgress: ').concat(i, ', videoAssetId: ').concat(tb, ', connectionSpeed: ').concat(ez, ', error: ').concat(r, ', networkState: ').concat(o)),
                        eO({
                            questId: em.id,
                            event: Z.rMx.QUEST_VIDEO_ERROR,
                            properties: z(
                                {
                                    video_progress: i,
                                    video_error_type: e,
                                    video_asset_id: tb,
                                    network_connection_speed: ez,
                                    video_session_id: ep,
                                    video_error_code: null == r ? void 0 : r.code,
                                    video_error_message: null == r ? void 0 : r.message,
                                    video_network_state: o
                                },
                                J(tS)
                            )
                        });
                } catch (e) {}
            },
            [ez, em.id, eO, tb, ep, tS, tE]
        ),
        tM = (e) => {
            if ((tE.info('[QV] | handleCanPlay: playerState: '.concat(ew)), null != tn.current && ew === R.rq.PLAYING)) {
                if ((tE.info('[QV] | handleCanPlay: did NOT early return'), eF && (tE.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eF)), eU(!1)), eZ)) {
                    tE.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eZ));
                    let e = null != e8.current ? Date.now() - e8.current : null;
                    eO({
                        questId: em.id,
                        event: Z.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: z(
                            {
                                video_asset_id: tb,
                                network_connection_speed: ez,
                                duration: e,
                                buffer_index: e9.current,
                                video_session_id: ep
                            },
                            J(tS)
                        )
                    }),
                        eY(!1);
                }
                tE.info('[QV] | handleCanPlay: updating player state to playing'), tj(R.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!eq) return;
        let e = setTimeout(() => {
            eB(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eq]);
    let [{ controlBarAnimSpring: tV }, tq] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: H,
            onStart: () => {
                e2(!1);
            },
            onRest: (e) => {
                1 === e.value && e2(!0);
            }
        })),
        tB = (0, o.useRef)(null),
        [{ captionHeightSpring: tF }, tU] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: H
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tU({
                captionHeightSpring: ej && null != tp && null !== (t = null === (e = tB.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: tt
            }),
            () => {
                tF.stop();
            }
        );
    }, [ej, tU, tt, tp, tF]),
        o.useEffect(
            () => (
                tq({
                    controlBarAnimSpring: tD || eJ ? 1 : 0,
                    immediate: tt
                }),
                () => {
                    tV.stop();
                }
            ),
            [tD, tq, tt, eJ, tV]
        );
    let tZ = ew === R.rq.ENDED,
        tY = o.useCallback(
            (e) => {
                if (
                    (eS({
                        questId: em.id,
                        questContent: e,
                        questContentCTA: S.jZ.LEARN_MORE,
                        impressionId: eb
                    }),
                    em.id === U.V)
                ) {
                    window.open(b.Z.getArticleURL(Z.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                    return;
                }
                (0, y.FE)(em, {
                    content: e,
                    ctaContent: S.jZ.LEARN_MORE
                });
            },
            [eb, em, eS]
        ),
        tQ = o.useMemo(() => (0, P.z)(P.i.VIDEO_PLAYER_THUMBNAIL, em), [em]),
        tW = o.useMemo(() => (0, P.z)(P.i.VIDEO_PLAYER_CAPTION, em), [em]),
        tz = ti || e7.maxTimestampSec >= (null !== (T = null === (i = tn.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== T ? T : 0) + 1;
    return (0, r.jsx)(m.P3F, {
        className: W.videoCont,
        'data-fullscreen': e_,
        tabIndex: -1,
        onMouseEnter: t_,
        onMouseLeave: tx,
        onFocus: t_,
        onBlur: tx,
        children: (0, r.jsxs)('div', {
            className: W.videoContInnerRelative,
            children: [
                tZ &&
                    ((0, N.e)({ location: F.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(k.Z, {
                              quest: em,
                              title: null !== (er = null === (ee = em.config.videoMetadata) || void 0 === ee ? void 0 : ee.messages.videoEndCtaTitle) && void 0 !== er ? er : Q.NW.string(Q.t.Ka526u),
                              subtitle: null !== (eo = null === (et = em.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaSubtitle) && void 0 !== eo ? eo : Q.NW.string(Q.t.tKMcAg),
                              ctaBtnLabel: null !== (ei = null === (en = em.config.videoMetadata) || void 0 === en ? void 0 : en.messages.videoEndCtaButtonLabel) && void 0 !== ei ? ei : Q.NW.string(Q.t.iiTtpK),
                              onCTAClick: () => tY(j.jn.VIDEO_MODAL_END_CARD)
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(X, {
                                      quest: em,
                                      shouldShow: tZ
                                  }),
                                  (0, r.jsx)('div', { className: W.videoContOverlay }),
                                  (0, r.jsx)($, {
                                      title: null !== (ec = null === (el = em.config.videoMetadata) || void 0 === el ? void 0 : el.messages.videoEndCtaTitle) && void 0 !== ec ? ec : Q.NW.string(Q.t.iiTtpK),
                                      subtitle: null !== (ed = null !== (eu = null === (es = em.config.videoMetadata) || void 0 === es ? void 0 : es.messages.videoEndCtaButtonLabel) && void 0 !== eu ? eu : null === (ea = em.config.videoMetadata) || void 0 === ea ? void 0 : ea.messages.videoEndCtaSubtitle) && void 0 !== ed ? ed : Q.NW.string(Q.t.mxaHf3),
                                      icon: m.d4D,
                                      className: W.endScreenPanelRight,
                                      onClick: () => tY(j.jn.VIDEO_MODAL)
                                  })
                              ]
                          })),
                (0, r.jsxs)(v.Z, {
                    ref: (e) => {
                        (tn.current = e), (eI.current = e);
                    },
                    autoPlay: ev,
                    playsInline: !0,
                    mediaLayoutType: e_ ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: l()({
                        [W.hidden]: tZ,
                        [W.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tQ ? void 0 : tQ.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != tn.current && (tn.current.currentTime >= eH && (tE.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(tn.current.currentTime)), eK(tn.current.currentTime + 6 + 2 * Math.random()), ty(tn.current.currentTime)), tn.current.currentTime >= eX && (e$(tn.current.currentTime + 1), (0, C.qm)(em.id, eR.taskType, tn.current.currentTime), ef(tn.current.currentTime)), e3(em.id, tn.current.currentTime, tn.current.duration), eV((tn.current.currentTime / tn.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != tn.current && (ty(tn.current.duration + 1), tE.info('[QV] | handleEnded: sending progress update: '.concat(tn.current.duration + 1)), e3(em.id, tn.current.duration, tn.current.duration)), tj(R.rq.ENDED), eY(!1);
                    },
                    onLoadedData: (e) => {
                        if ((tE.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eF)), eF)) {
                            let e = null != e4.current ? Date.now() - e4.current : null;
                            eO({
                                questId: em.id,
                                event: Z.rMx.QUEST_VIDEO_LOADING_ENDED,
                                properties: z(
                                    {
                                        video_asset_id: tb,
                                        network_connection_speed: ez,
                                        duration: e,
                                        video_session_id: ep
                                    },
                                    J(tS)
                                )
                            }),
                                eU(!1);
                        }
                    },
                    onLoadedMetadata: (e) => {
                        null != tn.current && (tE.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tb)), tu(!0), tb !== P.i.VIDEO_PLAYER_VIDEO_HLS && tI(tg), e5 ? (tn.current.volume = 0) : (tn.current.volume = te));
                    },
                    onLoadStart: () => {
                        (e4.current = Date.now()),
                            tE.info('[QV] | handleLoadStart | loadingStartTime: '.concat(e4.current)),
                            eO({
                                questId: em.id,
                                event: Z.rMx.QUEST_VIDEO_LOADING_STARTED,
                                properties: z(
                                    {
                                        video_asset_id: tb,
                                        network_connection_speed: ez,
                                        video_session_id: ep,
                                        is_hls_supported: s.ZP.isSupported()
                                    },
                                    J(tS)
                                )
                            });
                    },
                    onPlaying: () => {
                        if (!e6.current) return;
                        let e = performance.now() - eE;
                        tE.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')),
                            eO({
                                questId: em.id,
                                event: Z.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: z(
                                    {
                                        duration_ms: e,
                                        video_session_id: ep,
                                        video_asset_id: tb
                                    },
                                    J(tS)
                                )
                            }),
                            (e6.current = !1);
                    },
                    onWaiting: (e) => {
                        (e8.current = Date.now()),
                            tE.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(e8.current)),
                            (e9.current += 1),
                            eO({
                                questId: em.id,
                                event: Z.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                properties: z(
                                    {
                                        video_asset_id: tb,
                                        network_connection_speed: ez,
                                        buffer_index: e9.current,
                                        video_session_id: ep
                                    },
                                    J(tS)
                                )
                            }),
                            eY(!0);
                    },
                    onProgress: (e) => {
                        if (null == tn.current) return;
                        tE.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(tn.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < tn.current.buffered.length; e++) {
                            let n = tn.current.buffered.start(e),
                                r = tn.current.buffered.end(e);
                            !(r - n < 1) &&
                                t.push({
                                    start: n / tn.current.duration,
                                    size: (r - n) / tn.current.duration
                                });
                        }
                        eW(t);
                    },
                    onCanPlay: tM,
                    onCanPlayThrough: tM,
                    onSeeked: () => {
                        tE.info('[QV] | handleSeeked'), tm(!0);
                    },
                    onAbort: () => tR(R.CY.ABORT),
                    onError: () => tR(R.CY.ERROR),
                    onEmptied: () => tR(R.CY.EMPTIED),
                    onStalled: () => tR(R.CY.STALLED),
                    onSuspend: () => tR(R.CY.SUSPEND),
                    onClick: () => {
                        tE.info('[QV] | handleVideoClick'), tw();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tW &&
                            (0, r.jsx)('track', {
                                ref: tr,
                                src: tW.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tO &&
                            tb !== P.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tR(R.CY.SOURCE_ERROR),
                                src: tO.url,
                                type: tO.mimetype
                            })
                    ]
                }),
                (eF || eZ) &&
                    ew === R.rq.PLAYING &&
                    (0, r.jsx)(m.$jN, {
                        type: m.$jN.Type.WANDERING_CUBES,
                        className: W.loadingSpinner
                    }),
                ew === R.rq.PAUSED && ts === R.yE.LOST_FOCUS && (0, r.jsx)(K, {}),
                eh &&
                    ew !== R.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.P3F, {
                                onClick: () => eC(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: W.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: W.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([tV, tF], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(L.K, {
                                    quest: em,
                                    onClose: () => {
                                        eC(!1),
                                            eS({
                                                questId: em.id,
                                                questContent: j.jn.VIDEO_MODAL,
                                                questContentCTA: S.jZ.TRANSCRIPT_DISABLE
                                            });
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: W.videoFooterContGradient,
                    style: {
                        opacity: (0, a.to)(
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
                        className: l()(W.playPausePopCont, {
                            [W.play]: ew === R.rq.PLAYING,
                            [W.pause]: ew === R.rq.PAUSED
                        }),
                        children: ew === R.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: W.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: W.playPausePopIcon })
                    },
                    ew
                ),
                ej &&
                    null != tp &&
                    (0, r.jsx)(a.animated.div, {
                        className: W.captionContainer,
                        ref: tB,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tV.to({
                                        range: [0, 1],
                                        output: [0, -50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: (0, r.jsx)(m.Text, {
                            variant: 'text-lg/semibold',
                            color: 'always-white',
                            className: W.captionText,
                            children: tp.text
                        })
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: W.videoFooterCont,
                    style: {
                        paddingLeft: (0, a.to)(
                            [
                                tV.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, a.to)(
                            [
                                tV.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, a.to)(
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
                        (0, r.jsx)(A.Z, {
                            percent: eM,
                            animate: !0 !== to.current && !eq,
                            interactionEnabled: ti && e1,
                            backgroundColor: tD ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tD ? eQ : void 0,
                            duration: null !== (V = null === (d = tn.current) || void 0 === d ? void 0 : d.duration) && void 0 !== V ? V : 1,
                            maxSeekableTime: tD && e1 ? tv : void 0,
                            onClick: (e) => {
                                tI(e), ew === R.rq.ENDED && tj(R.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tP();
                            },
                            onScrubForward: () => {
                                tT();
                            }
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: W.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(w.Z, {
                                videoRef: tn,
                                quest: em,
                                playerState: ew,
                                animSpring: tV,
                                visible: tD,
                                seekForwardEnabled: tz,
                                hideCaptionBtn: null == tW,
                                handlePlaybackBtnClick: tw,
                                handleTranscriptBtnClick: () => {
                                    eh || (null != tl && tl.questId === em.id && tl.fetchStatus !== _.iF.NONE && tl.fetchStatus !== _.iF.FAILURE) || (0, C.lL)(em),
                                        eC(!eh),
                                        eS({
                                            questId: em.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eh ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE
                                        });
                                },
                                handleCaptionBtnClick: () => {
                                    ey(!ej),
                                        eS({
                                            questId: em.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: ej ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE
                                        });
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !e_;
                                    tE.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, O.fn)(null === (e = tn.current) || void 0 === e ? void 0 : e.parentNode, tn.current);
                                    t && null != n
                                        ? ((0, O.Dj)(n),
                                          n.addEventListener(O.NO, tN),
                                          eO({
                                              questId: em.id,
                                              event: Z.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                              properties: { video_session_id: ep }
                                          }))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(O.NO, tN),
                                          eO({
                                              questId: em.id,
                                              event: Z.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                              properties: { video_session_id: ep }
                                          }),
                                          (0, O.Pr)(n)),
                                        ex(t);
                                },
                                handleSeekBackBtnClick: tP,
                                handleSeekForwardBtnClick: tT,
                                handleControlBarPendingInteraction: e0
                            })
                        })
                    ]
                })
            ]
        })
    });
}
