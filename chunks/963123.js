n.d(t, { Z: () => J }), n(47120), n(653041);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(941208),
    a = n(642128),
    c = n(788347),
    u = n(670081),
    d = n(442837),
    m = n(780384),
    p = n(481060),
    f = n(493773),
    v = n(607070),
    g = n(70097),
    E = n(210887),
    b = n(866960),
    O = n(63063),
    h = n(228488),
    S = n(617136),
    C = n(915750),
    j = n(272008),
    y = n(497505),
    _ = n(918701),
    x = n(184299),
    D = n(347382),
    N = n(5881),
    P = n(208109),
    T = n(117242),
    I = n(720293),
    A = n(602667),
    w = n(881773),
    k = n(350312),
    L = n(355243),
    R = n(106743),
    M = n(223418),
    V = n(604162),
    q = n(747717),
    B = n(281055),
    F = n(46140),
    U = n(981631),
    Z = n(217702),
    Y = n(388032),
    W = n(881382);
function Q(e) {
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
let z = new Set([U.IyS.FIVE_G, U.IyS.FOUR_G, U.IyS.UNKNOWN]),
    G = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function H() {
    let e = (0, d.e7)([E.Z], () => E.Z.getState().theme);
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
function K(e) {
    let { quest: t, shouldShow: n } = e,
        i = o.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(A.A, {
              questOrQuests: t,
              questContent: y.jn.VIDEO_MODAL_END_CARD,
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
function X(e) {
    let { title: t, subtitle: n, icon: i, onClick: s, className: a } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        m = () => {
            u(!1);
        };
    return (0, r.jsx)(p.P3F, {
        className: l()(W.endScreenPanel, W.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: s,
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
                (0, r.jsx)(q.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: W.endScreenIcon
                })
            ]
        })
    });
}
function $(e) {
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
function J(e) {
    var t, n, i, m, E, A, q, J, ee, et, en, er, eo;
    let { quest: ei, videoSessionId: el, onOptimisticProgressUpdate: es, autoplay: ea, parentTransitionState: ec, performanceClockStartTime: eu } = e,
        ed = (0, C.aM)(),
        em = (0, S._F)(),
        ep = (0, S.O5)(),
        ef = (0, x.km)((e) => e.transcriptEnabled),
        ev = (0, x.km)((e) => e.setTranscriptEnabled),
        eg = (0, x.km)((e) => e.captionEnabled),
        eE = (0, x.km)((e) => e.setCaptionEnabled),
        eb = (0, x.km)((e) => e.fullScreenEnabled),
        eO = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: eh, focusedChanged: eS } = (0, B.xU)(),
        { visible: eC, visibleChanged: ej, targetRef: ey } = (0, B.Yy)(),
        [e_, ex] = o.useState(!0 === ea ? M.rq.PLAYING : M.rq.PAUSED),
        [eD, eN] = o.useState(!1),
        eP = (0, _.il)(ei),
        [eT, eI] = o.useState(eP.percentComplete),
        [eA, ew] = o.useState(!1),
        [ek, eL] = o.useState(!0),
        [eR, eM] = o.useState(!1),
        [eV, eq] = o.useState([]),
        [eB, eF] = o.useState(b.Z.getEffectiveConnectionSpeed()),
        [eU, eZ] = o.useState(0),
        [eY, eW] = o.useState(0),
        [eQ, ez] = o.useState(!1),
        [eG, eH] = o.useState(!1),
        eK = o.useRef(!0),
        eX = o.useRef(null),
        e$ = o.useRef(null),
        eJ = (0, o.useRef)(-1),
        e0 = (0, x.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[ei.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        e1 = (0, x.km)((e) => e.setVideoProgress),
        e2 = (0, x.km)((e) => e.muted),
        e6 = (0, x.km)((e) => e.volume),
        e4 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion),
        e8 = (0, o.useRef)(null),
        e7 = (0, o.useRef)(null),
        e9 = o.useRef(!0),
        e3 = (null === (t = ei.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        e5 = (0, x.km)((e) => e.transcript),
        [te, tt] = o.useState(null),
        [tn, tr] = o.useState(!1),
        [to, ti] = o.useState(!1),
        [tl, ts] = o.useState(null),
        ta = e3 ? (null !== (E = null === (n = e8.current) || void 0 === n ? void 0 : n.duration) && void 0 !== E ? E : 0) : Math.max(e0.maxTimestampSec, eP.progressSeconds),
        tc = o.useMemo(
            () =>
                (0, N.T)({
                    quest: ei,
                    location: F.dr.VIDEO_MODAL
                }),
            [ei]
        ),
        { title: tu, subtitle: td } = (function (e) {
            var t, n, r, o, i, l, s, a, c, d, m, p;
            let f = null !== (s = null === (t = e.config.videoMetadata) || void 0 === t ? void 0 : t.messages.videoEndCtaTitle) && void 0 !== s ? s : Y.NW.string(Y.t.iiTtpK),
                v = null !== (c = null !== (a = null === (n = e.config.videoMetadata) || void 0 === n ? void 0 : n.messages.videoEndCtaButtonLabel) && void 0 !== a ? a : null === (r = e.config.videoMetadata) || void 0 === r ? void 0 : r.messages.videoEndCtaSubtitle) && void 0 !== c ? c : Y.NW.string(Y.t.mxaHf3),
                g = null !== (m = null !== (d = null === (o = e.config.videoMetadata) || void 0 === o ? void 0 : o.messages.videoEndCtaButtonLabel) && void 0 !== d ? d : null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.messages.videoEndCtaTitle) && void 0 !== m ? m : Y.NW.string(Y.t.iiTtpK),
                E = null !== (p = null === (l = e.config.videoMetadata) || void 0 === l ? void 0 : l.messages.videoEndCtaSubtitle) && void 0 !== p ? p : Y.NW.string(Y.t.mxaHf3),
                b = e.config.features.includes(u.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: b ? g : f,
                subtitle: b ? E : v
            };
        })(ei),
        tm = e3 ? (e0.timestampSec >= e0.duration ? 0 : e0.timestampSec) : Math.max(e0.timestampSec, eP.progressSeconds),
        {
            videoAssetId: tp,
            videoAsset: tf,
            hlsRef: tv
        } = (function (e, t, n, r) {
            var i;
            let l = o.useRef(!1),
                a = o.useRef(null),
                c = (0, D.z)(e, F.dr.VIDEO_MODAL),
                u = null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.assets,
                d = o.useMemo(() => (null != u ? (c && s.ZP.isSupported() && null != u.videoPlayerVideoHls ? I.i.VIDEO_PLAYER_VIDEO_HLS : z.has(n) || null == u.videoPlayerVideoLowRes ? I.i.VIDEO_PLAYER_VIDEO : I.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = o.useMemo(() => (null != d ? (0, I.z)(d, e) : null), [e, d]),
                p = () => {
                    null != a.current && (a.current.config.minAutoBitrate = 800000);
                };
            return (
                o.useEffect(() => {
                    if (d !== I.i.VIDEO_PLAYER_VIDEO_HLS || null == m || null == t.current || l.current) return;
                    (a.current = new s.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1
                    })),
                        a.current.on(s.ZP.Events.FRAG_LOADED, p),
                        a.current.loadSource(m.url),
                        a.current.attachMedia(t.current),
                        (l.current = !0);
                    let e = a.current;
                    return () => {
                        null != e && e.off(s.ZP.Events.FRAG_LOADED, p);
                    };
                }, [m, d, t, r]),
                {
                    videoAssetId: d,
                    videoAsset: m,
                    hlsRef: a
                }
            );
        })(ei, e8, eB, tm),
        tg = o.useCallback(
            (e) => {
                if (null != e8.current) {
                    var t, n;
                    em({
                        questId: ei.id,
                        event: U.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: Q(
                            ((t = Q({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tp,
                                    quest_completed: e3,
                                    video_duration_sec: e8.current.duration,
                                    video_progress: (0, _.bA)(e.segment_end_sec, e8.current.duration),
                                    video_session_id: el
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
                            $(tv)
                        )
                    });
                }
            },
            [em, ei.id, tp, e3, el, tv]
        ),
        tE = o.useCallback(() => {
            var e, t;
            return null !== (t = null === (e = e8.current) || void 0 === e ? void 0 : e.currentTime) && void 0 !== t ? t : null;
        }, []),
        { forceSendCurrentSegment: tb } = (0, T.Z)({
            getCurrentVideoTime: tE,
            isPlaying: e_ === M.rq.PLAYING,
            isMetadataLoaded: tn,
            isInitialSeekComplete: to,
            onAnalytics: tg,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tO = o.useCallback(
            (e) => {
                if ((tc.info('[QV] | updatePlayerState | playerState: '.concat(e)), ex(e), null != e8.current))
                    switch (e) {
                        case M.rq.PLAYING:
                            e8.current.play(),
                                em({
                                    questId: ei.id,
                                    event: U.rMx.QUEST_VIDEO_RESUMED,
                                    properties: Q(
                                        {
                                            video_timestamp_seconds: e8.current.currentTime,
                                            pause_reason: te,
                                            video_session_id: el
                                        },
                                        $(tv)
                                    )
                                }),
                                tt(null);
                            break;
                        case M.rq.PAUSED:
                            e8.current.pause(), (eK.current = !1), tb();
                            break;
                        case M.rq.ENDED:
                            ev(!1), tb();
                    }
            },
            [em, ei.id, te, el, tb, ev, tv, tc]
        );
    (0, f.Ng)(() => {
        e9.current && ((e9.current = !1), eF(b.Z.getEffectiveConnectionSpeed()), e3 && e0.timestampSec >= e0.duration && e1(ei.id, 0, e0.duration));
    }),
        o.useEffect(() => {
            null != e8.current &&
                null != te &&
                em({
                    questId: ei.id,
                    event: U.rMx.QUEST_VIDEO_PAUSED,
                    properties: Q(
                        {
                            video_timestamp_seconds: e8.current.currentTime,
                            reason: te,
                            video_session_id: el
                        },
                        $(tv)
                    )
                });
        }, [te, ei.id, em, el, tv]),
        o.useEffect(() => {
            eS &&
                null != e8.current &&
                em({
                    questId: ei.id,
                    event: eh ? U.rMx.QUEST_VIDEO_APP_FOCUSED : U.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e8.current.currentTime,
                        video_state: e_,
                        video_session_id: el
                    }
                });
        }, [eh, eS, e_, ei.id, em, el]);
    let th = o.useCallback(
        (e) => {
            var t;
            tc.info('[QV] | sendProgressUpdate: Checking conditions...'),
                e3 || (null === (t = ei.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (tc.info('[QV] | sendProgressUpdate: quest enrolled and not completed, sending video progress: '.concat(e)), (0, _.FI)(ei, e)),
                null != e8.current &&
                    em({
                        questId: ei.id,
                        event: U.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: Q(
                            {
                                progress: (0, _.bA)(e8.current.currentTime, e8.current.duration),
                                video_timestamp_seconds: e8.current.currentTime,
                                video_session_id: el
                            },
                            $(tv)
                        )
                    });
        },
        [e3, ei, em, el, tv, tc]
    );
    o.useEffect(() => {
        (ec !== p.Dvm.HIDDEN && ec !== p.Dvm.EXITING && ec !== p.Dvm.EXITED && (null == ec || !ej || eC || e3) && (!eS || eh || e3)) || null == e8.current || e_ !== M.rq.PLAYING || (tc.info('[QV] | Pausing video | playerState: '.concat(e_, ', parentTransitionState: ').concat(ec, ', visible: ').concat(eC, ', focused: ').concat(eh, ', isQuestCompleted: ').concat(e3)), tO(M.rq.PAUSED), e3 || tt(y.yE.LOST_FOCUS));
    }, [ec, eh, eS, eC, ej, e_, e3, tO, th, tc]);
    let tS = () => {
            eN(!0);
        },
        tC = () => {
            eN(!1);
        },
        tj = eD || e_ === M.rq.PAUSED || e_ === M.rq.ENDED,
        ty = o.useCallback(() => {
            var e;
            tc.info('[QV] | handleFullScreenExit');
            let t = (0, h.fn)(null === (e = e8.current) || void 0 === e ? void 0 : e.parentNode, e8.current);
            null == t ||
                (0, h.rB)(t) ||
                (t.removeEventListener(h.NO, ty),
                eO(!1),
                em({
                    questId: ei.id,
                    event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: el }
                }));
        }, [ei.id, eO, em, el, tc]),
        t_ = () => {
            if (null == e8.current) return;
            let e = Math.max(e8.current.currentTime - 10, 0);
            tc.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)),
                tD(e),
                e_ === M.rq.ENDED && tO(M.rq.PAUSED),
                ep({
                    questId: ei.id,
                    questContent: y.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_BACKWARD
                });
        },
        tx = () => {
            if (null == e8.current || !tZ) return;
            let e = Math.min(e8.current.currentTime + 10, ta);
            tc.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)),
                tD(e),
                e_ !== M.rq.ENDED && e >= e8.current.duration && tO(M.rq.ENDED),
                ep({
                    questId: ei.id,
                    questContent: y.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = e8.current;
        return () => {
            let t = (0, h.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(h.NO, ty);
        };
    }, [ty]);
    let tD = o.useCallback(
            (e) => {
                null != e8.current && (tc.info('[QV] | seekTimeline | timeSec: '.concat(e)), tb(), ew(!0), ti(!1), (e8.current.currentTime = e), e1(ei.id, e, e8.current.duration));
            },
            [e8, e1, ei.id, tb, tc]
        ),
        tN = () => {
            if (null != e8.current)
                switch ((tc.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(e_)), e_)) {
                    case M.rq.ENDED:
                        tD(0), tO(M.rq.PLAYING);
                        break;
                    case M.rq.PLAYING:
                        tO(M.rq.PAUSED), tt(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tO(M.rq.PLAYING);
                }
        },
        tP = (e) => {
            ts(e);
        },
        tT = (e) => {
            ts((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tI = o.useCallback(() => {
            if (null == e8.current || (tc.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(e8.current.textTracks.length)), 0 === e8.current.textTracks.length)) return;
            let e = e8.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, V.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tP(n)), (n.onexit = () => tT(n)));
                }
        }, [e8, tc]);
    o.useEffect(() => {
        if (null == e7.current) return;
        let e = e7.current;
        return (
            e.addEventListener('load', tI),
            () => {
                null != e && e.removeEventListener('load', tI);
            }
        );
    }, [e7, tI]);
    let tA = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e8.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = e8.current) || void 0 === n ? void 0 : n.networkState,
                        i = null != e8.current ? (0, _.bA)(e8.current.currentTime, e8.current.duration) : void 0;
                    tc.info('[QV] | logVideoError: errorType: '.concat(e, ', videoProgress: ').concat(i, ', videoAssetId: ').concat(tp, ', connectionSpeed: ').concat(eB, ', error: ').concat(r, ', networkState: ').concat(o)),
                        em({
                            questId: ei.id,
                            event: U.rMx.QUEST_VIDEO_ERROR,
                            properties: Q(
                                {
                                    video_progress: i,
                                    video_error_type: e,
                                    video_asset_id: tp,
                                    network_connection_speed: eB,
                                    video_session_id: el,
                                    video_error_code: null == r ? void 0 : r.code,
                                    video_error_message: null == r ? void 0 : r.message,
                                    video_network_state: o
                                },
                                $(tv)
                            )
                        });
                } catch (e) {}
            },
            [eB, ei.id, em, tp, el, tv, tc]
        ),
        tw = (e) => {
            if ((tc.info('[QV] | handleCanPlay: playerState: '.concat(e_)), null != e8.current && e_ === M.rq.PLAYING)) {
                if ((tc.info('[QV] | handleCanPlay: did NOT early return'), ek && (tc.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(ek)), eL(!1)), eR)) {
                    tc.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eR));
                    let e = null != e$.current ? Date.now() - e$.current : null;
                    em({
                        questId: ei.id,
                        event: U.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: Q(
                            {
                                video_asset_id: tp,
                                network_connection_speed: eB,
                                duration: e,
                                buffer_index: eJ.current,
                                video_session_id: el
                            },
                            $(tv)
                        )
                    }),
                        eM(!1);
                }
                tc.info('[QV] | handleCanPlay: updating player state to playing'), tO(M.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!eA) return;
        let e = setTimeout(() => {
            ew(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eA]);
    let [{ controlBarAnimSpring: tk }, tL] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: G,
            onStart: () => {
                eH(!1);
            },
            onRest: (e) => {
                1 === e.value && eH(!0);
            }
        })),
        tR = (0, o.useRef)(null),
        [{ captionHeightSpring: tM }, tV] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: G
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tV({
                captionHeightSpring: eg && null != tl && null !== (t = null === (e = tR.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e4
            }),
            () => {
                tM.stop();
            }
        );
    }, [eg, tV, e4, tl, tM]),
        o.useEffect(
            () => (
                tL({
                    controlBarAnimSpring: tj || eQ ? 1 : 0,
                    immediate: e4
                }),
                () => {
                    tk.stop();
                }
            ),
            [tj, tL, e4, eQ, tk]
        );
    let tq = e_ === M.rq.ENDED,
        tB = o.useCallback(
            (e) => {
                if (
                    (ep({
                        questId: ei.id,
                        questContent: e,
                        questContentCTA: S.jZ.LEARN_MORE,
                        impressionId: ed
                    }),
                    ei.id === F.V6)
                ) {
                    window.open(O.Z.getArticleURL(U.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                    return;
                }
                (0, _.FE)(ei, {
                    content: e,
                    ctaContent: S.jZ.LEARN_MORE
                });
            },
            [ed, ei, ep]
        ),
        tF = o.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, ei), [ei]),
        tU = o.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_CAPTION, ei), [ei]),
        tZ = e3 || e0.maxTimestampSec >= (null !== (A = null === (i = e8.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== A ? A : 0) + 1;
    return (0, r.jsx)(p.P3F, {
        className: W.videoCont,
        'data-fullscreen': eb,
        tabIndex: -1,
        onMouseEnter: tS,
        onMouseLeave: tC,
        onFocus: tS,
        onBlur: tC,
        children: (0, r.jsxs)('div', {
            className: W.videoContInnerRelative,
            children: [
                tq &&
                    ((0, P.e)({ location: F.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(k.Z, {
                              quest: ei,
                              title: null !== (en = null === (J = ei.config.videoMetadata) || void 0 === J ? void 0 : J.messages.videoEndCtaTitle) && void 0 !== en ? en : Y.NW.string(Y.t.Ka526u),
                              subtitle: null !== (er = null === (ee = ei.config.videoMetadata) || void 0 === ee ? void 0 : ee.messages.videoEndCtaSubtitle) && void 0 !== er ? er : Y.NW.string(Y.t.tKMcAg),
                              ctaBtnLabel: null !== (eo = null === (et = ei.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaButtonLabel) && void 0 !== eo ? eo : Y.NW.string(Y.t.iiTtpK),
                              onCTAClick: () => tB(y.jn.VIDEO_MODAL_END_CARD)
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(K, {
                                      quest: ei,
                                      shouldShow: tq
                                  }),
                                  (0, r.jsx)('div', { className: W.videoContOverlay }),
                                  (0, r.jsx)(X, {
                                      title: tu,
                                      subtitle: td,
                                      icon: p.d4D,
                                      className: W.endScreenPanelRight,
                                      onClick: () => tB(y.jn.VIDEO_MODAL)
                                  })
                              ]
                          })),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (e8.current = e), (ey.current = e);
                    },
                    autoPlay: ea,
                    playsInline: !0,
                    mediaLayoutType: eb ? Z.hV.STATIC : Z.hV.RESPONSIVE,
                    className: l()({
                        [W.hidden]: tq,
                        [W.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tF ? void 0 : tF.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e8.current && (e8.current.currentTime >= eU && (tc.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(e8.current.currentTime)), eZ(e8.current.currentTime + 6 + 2 * Math.random()), th(e8.current.currentTime)), e8.current.currentTime >= eY && (eW(e8.current.currentTime + 1), (0, j.qm)(ei.id, eP.taskType, e8.current.currentTime), es(e8.current.currentTime)), e1(ei.id, e8.current.currentTime, e8.current.duration), eI((e8.current.currentTime / e8.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e8.current && (th(e8.current.duration + 1), tc.info('[QV] | handleEnded: sending progress update: '.concat(e8.current.duration + 1)), e1(ei.id, e8.current.duration, e8.current.duration)), tO(M.rq.ENDED), eM(!1);
                    },
                    onLoadedData: (e) => {
                        if ((tc.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(ek)), ek)) {
                            let e = null != eX.current ? Date.now() - eX.current : null;
                            em({
                                questId: ei.id,
                                event: U.rMx.QUEST_VIDEO_LOADING_ENDED,
                                properties: Q(
                                    {
                                        video_asset_id: tp,
                                        network_connection_speed: eB,
                                        duration: e,
                                        video_session_id: el
                                    },
                                    $(tv)
                                )
                            }),
                                eL(!1),
                                null != tv.current && (tv.current.config.minAutoBitrate = 800000);
                        }
                    },
                    onLoadedMetadata: (e) => {
                        null != e8.current && (tc.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tp)), tr(!0), tp !== I.i.VIDEO_PLAYER_VIDEO_HLS && tD(tm), e2 ? (e8.current.volume = 0) : (e8.current.volume = e6));
                    },
                    onLoadStart: () => {
                        (eX.current = Date.now()),
                            tc.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eX.current)),
                            em({
                                questId: ei.id,
                                event: U.rMx.QUEST_VIDEO_LOADING_STARTED,
                                properties: Q(
                                    {
                                        video_asset_id: tp,
                                        network_connection_speed: eB,
                                        video_session_id: el,
                                        is_hls_supported: s.ZP.isSupported()
                                    },
                                    $(tv)
                                )
                            });
                    },
                    onPlaying: () => {
                        if (!eK.current) return;
                        let e = performance.now() - eu;
                        tc.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')),
                            em({
                                questId: ei.id,
                                event: U.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: Q(
                                    {
                                        duration_ms: e,
                                        video_session_id: el,
                                        video_asset_id: tp
                                    },
                                    $(tv)
                                )
                            }),
                            (eK.current = !1);
                    },
                    onWaiting: (e) => {
                        (e$.current = Date.now()),
                            tc.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(e$.current)),
                            (eJ.current += 1),
                            em({
                                questId: ei.id,
                                event: U.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                properties: Q(
                                    {
                                        video_asset_id: tp,
                                        network_connection_speed: eB,
                                        buffer_index: eJ.current,
                                        video_session_id: el
                                    },
                                    $(tv)
                                )
                            }),
                            eM(!0);
                    },
                    onProgress: (e) => {
                        if (null == e8.current) return;
                        tc.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(e8.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < e8.current.buffered.length; e++) {
                            let n = e8.current.buffered.start(e),
                                r = e8.current.buffered.end(e);
                            !(r - n < 1) &&
                                t.push({
                                    start: n / e8.current.duration,
                                    size: (r - n) / e8.current.duration
                                });
                        }
                        eq(t);
                    },
                    onCanPlay: tw,
                    onCanPlayThrough: tw,
                    onSeeked: () => {
                        tc.info('[QV] | handleSeeked'), ti(!0);
                    },
                    onAbort: () => tA(M.CY.ABORT),
                    onError: () => tA(M.CY.ERROR),
                    onEmptied: () => tA(M.CY.EMPTIED),
                    onStalled: () => tA(M.CY.STALLED),
                    onSuspend: () => tA(M.CY.SUSPEND),
                    onClick: () => {
                        tc.info('[QV] | handleVideoClick'), tN();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tU &&
                            (0, r.jsx)('track', {
                                ref: e7,
                                src: tU.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tf &&
                            tp !== I.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tA(M.CY.SOURCE_ERROR),
                                src: tf.url,
                                type: tf.mimetype
                            })
                    ]
                }),
                (ek || eR) &&
                    e_ === M.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: W.loadingSpinner
                    }),
                e_ === M.rq.PAUSED && te === y.yE.LOST_FOCUS && (0, r.jsx)(H, {}),
                ef &&
                    e_ !== M.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => ev(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: W.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: W.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([tk, tM], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(R.K, {
                                    quest: ei,
                                    onClose: () => {
                                        ev(!1),
                                            ep({
                                                questId: ei.id,
                                                questContent: y.jn.VIDEO_MODAL,
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
                                tk.to({
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
                            [W.play]: e_ === M.rq.PLAYING,
                            [W.pause]: e_ === M.rq.PAUSED
                        }),
                        children: e_ === M.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: W.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: W.playPausePopIcon })
                    },
                    e_
                ),
                eg &&
                    null != tl &&
                    (0, r.jsx)(a.animated.div, {
                        className: W.captionContainer,
                        ref: tR,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tk.to({
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
                            children: tl.text
                        })
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: W.videoFooterCont,
                    style: {
                        paddingLeft: (0, a.to)(
                            [
                                tk.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, a.to)(
                            [
                                tk.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, a.to)(
                            [
                                tk.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(L.Z, {
                            percent: eT,
                            animate: !0 !== e9.current && !eA,
                            interactionEnabled: e3 && eG,
                            backgroundColor: tj ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tj ? eV : void 0,
                            duration: null !== (q = null === (m = e8.current) || void 0 === m ? void 0 : m.duration) && void 0 !== q ? q : 1,
                            maxSeekableTime: tj && eG ? ta : void 0,
                            onClick: (e) => {
                                tD(e), e_ === M.rq.ENDED && tO(M.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                t_();
                            },
                            onScrubForward: () => {
                                tx();
                            }
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: W.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tk.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tk.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tk.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(w.Z, {
                                videoRef: e8,
                                quest: ei,
                                playerState: e_,
                                animSpring: tk,
                                visible: tj,
                                seekForwardEnabled: tZ,
                                hideCaptionBtn: null == tU,
                                handlePlaybackBtnClick: tN,
                                handleTranscriptBtnClick: () => {
                                    ef || (null != e5 && e5.questId === ei.id && e5.fetchStatus !== x.iF.NONE && e5.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(ei),
                                        ev(!ef),
                                        ep({
                                            questId: ei.id,
                                            questContent: y.jn.VIDEO_MODAL,
                                            questContentCTA: ef ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE
                                        });
                                },
                                handleCaptionBtnClick: () => {
                                    eE(!eg),
                                        ep({
                                            questId: ei.id,
                                            questContent: y.jn.VIDEO_MODAL,
                                            questContentCTA: eg ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE
                                        });
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !eb;
                                    tc.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, h.fn)(null === (e = e8.current) || void 0 === e ? void 0 : e.parentNode, e8.current);
                                    t && null != n
                                        ? ((0, h.Dj)(n),
                                          n.addEventListener(h.NO, ty),
                                          em({
                                              questId: ei.id,
                                              event: U.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                              properties: { video_session_id: el }
                                          }))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(h.NO, ty),
                                          em({
                                              questId: ei.id,
                                              event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                              properties: { video_session_id: el }
                                          }),
                                          (0, h.Pr)(n)),
                                        eO(t);
                                },
                                handleSeekBackBtnClick: t_,
                                handleSeekForwardBtnClick: tx,
                                handleControlBarPendingInteraction: ez
                            })
                        })
                    ]
                })
            ]
        })
    });
}
