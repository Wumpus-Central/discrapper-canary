n.d(t, { Z: () => ee }), n(47120), n(653041);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(941208),
    a = n(642128),
    c = n(232713),
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
    S = n(228488),
    h = n(617136),
    C = n(915750),
    j = n(272008),
    y = n(497505),
    _ = n(918701),
    x = n(184299),
    N = n(347382),
    D = n(5881),
    P = n(208109),
    T = n(117242),
    I = n(720293),
    w = n(602667),
    A = n(881773),
    k = n(350312),
    L = n(355243),
    R = n(106743),
    M = n(223418),
    V = n(604162),
    q = n(747717),
    B = n(281055),
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
    let e = (0, d.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: W.pauseText,
        style: { background: (0, m.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Q.NW.string(Q.t.U7Xrb2)
        })
    });
}
function X(e) {
    let { quest: t, shouldShow: n } = e,
        i = o.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(w.A, {
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
function $(e) {
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
    var t, n, i, m, E, w, q, ee, et, en, er, eo, ei;
    let { quest: el, videoSessionId: es, onOptimisticProgressUpdate: ea, autoplay: ec, parentTransitionState: eu, performanceClockStartTime: ed } = e,
        em = (0, C.aM)(),
        ep = (0, h._F)(),
        ef = (0, h.O5)(),
        ev = (0, x.km)((e) => e.transcriptEnabled),
        eg = (0, x.km)((e) => e.setTranscriptEnabled),
        eE = (0, x.km)((e) => e.captionEnabled),
        eb = (0, x.km)((e) => e.setCaptionEnabled),
        eO = (0, x.km)((e) => e.fullScreenEnabled),
        eS = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: eh, focusedChanged: eC } = (0, B.xU)(),
        { visible: ej, visibleChanged: ey, targetRef: e_ } = (0, B.Yy)(),
        [ex, eN] = o.useState(!0 === ec ? M.rq.PLAYING : M.rq.PAUSED),
        [eD, eP] = o.useState(!1),
        eT = (0, _.il)(el),
        [eI, ew] = o.useState(eT.percentComplete),
        [eA, ek] = o.useState(!1),
        [eL, eR] = o.useState(!0),
        [eM, eV] = o.useState(!1),
        [eq, eB] = o.useState([]),
        [eF, eU] = o.useState(b.Z.getEffectiveConnectionSpeed()),
        [eZ, eY] = o.useState(0),
        [eQ, eW] = o.useState(0),
        [ez, eG] = o.useState(!1),
        [eH, eK] = o.useState(!1),
        eX = o.useRef(!0),
        e$ = o.useRef(null),
        eJ = o.useRef(null),
        e0 = (0, o.useRef)(-1),
        e1 = (0, x.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[el.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        e2 = (0, x.km)((e) => e.setVideoProgress),
        e6 = (0, x.km)((e) => e.muted),
        e4 = (0, x.km)((e) => e.volume),
        e8 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion),
        e7 = (0, o.useRef)(null),
        e9 = (0, o.useRef)(null),
        e3 = o.useRef(!0),
        e5 = (null === (t = el.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        te = (0, x.km)((e) => e.transcript),
        [tt, tn] = o.useState(null),
        [tr, to] = o.useState(!1),
        [ti, tl] = o.useState(!1),
        [ts, ta] = o.useState(null),
        tc = e5 ? (null !== (E = null === (n = e7.current) || void 0 === n ? void 0 : n.duration) && void 0 !== E ? E : 0) : Math.max(e1.maxTimestampSec, eT.progressSeconds),
        tu = o.useMemo(
            () =>
                (0, D.T)({
                    quest: el,
                    location: F.dr.VIDEO_MODAL
                }),
            [el]
        ),
        { title: td, subtitle: tm } = (function (e) {
            var t, n, r, o, i, l, s, a, c, d, m, p;
            let f = null !== (s = null === (t = e.config.videoMetadata) || void 0 === t ? void 0 : t.messages.videoEndCtaTitle) && void 0 !== s ? s : Q.NW.string(Q.t.iiTtpK),
                v = null !== (c = null !== (a = null === (n = e.config.videoMetadata) || void 0 === n ? void 0 : n.messages.videoEndCtaButtonLabel) && void 0 !== a ? a : null === (r = e.config.videoMetadata) || void 0 === r ? void 0 : r.messages.videoEndCtaSubtitle) && void 0 !== c ? c : Q.NW.string(Q.t.mxaHf3),
                g = null !== (m = null !== (d = null === (o = e.config.videoMetadata) || void 0 === o ? void 0 : o.messages.videoEndCtaButtonLabel) && void 0 !== d ? d : null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.messages.videoEndCtaTitle) && void 0 !== m ? m : Q.NW.string(Q.t.iiTtpK),
                E = null !== (p = null === (l = e.config.videoMetadata) || void 0 === l ? void 0 : l.messages.videoEndCtaSubtitle) && void 0 !== p ? p : Q.NW.string(Q.t.mxaHf3),
                b = e.config.features.includes(u.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: b ? g : f,
                subtitle: b ? E : v
            };
        })(el),
        tp = e5 ? (e1.timestampSec >= e1.duration ? 0 : e1.timestampSec) : Math.max(e1.timestampSec, eT.progressSeconds),
        {
            videoAssetId: tf,
            videoAsset: tv,
            hlsRef: tg
        } = (function (e, t, n, r) {
            var i;
            let l = o.useRef(!1),
                a = o.useRef(null),
                c = (0, N.z)(e, F.dr.VIDEO_MODAL),
                u = null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.assets,
                d = o.useMemo(() => (null != u ? (c && s.ZP.isSupported() && null != u.videoPlayerVideoHls ? I.i.VIDEO_PLAYER_VIDEO_HLS : G.has(n) || null == u.videoPlayerVideoLowRes ? I.i.VIDEO_PLAYER_VIDEO : I.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = o.useMemo(() => (null != d ? (0, I.z)(d, e) : null), [e, d]);
            return (
                o.useEffect(() => {
                    d === I.i.VIDEO_PLAYER_VIDEO_HLS &&
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
        })(el, e7, eF, tp),
        tE = o.useCallback(
            (e) => {
                if (null != e7.current) {
                    var t, n;
                    ep({
                        questId: el.id,
                        event: Z.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: z(
                            ((t = z({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tf,
                                    quest_completed: e5,
                                    video_duration_sec: e7.current.duration,
                                    video_progress: (0, _.bA)(e.segment_end_sec, e7.current.duration),
                                    video_session_id: es
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
                            J(tg)
                        )
                    });
                }
            },
            [ep, el.id, tf, e5, es, tg]
        ),
        tb = o.useCallback(() => {
            var e, t;
            return null !== (t = null === (e = e7.current) || void 0 === e ? void 0 : e.currentTime) && void 0 !== t ? t : null;
        }, []),
        { forceSendCurrentSegment: tO } = (0, T.Z)({
            getCurrentVideoTime: tb,
            isPlaying: ex === M.rq.PLAYING,
            isMetadataLoaded: tr,
            isInitialSeekComplete: ti,
            onAnalytics: tE,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tS = o.useCallback(
            (e) => {
                if ((tu.info('[QV] | updatePlayerState | playerState: '.concat(e)), eN(e), null != e7.current))
                    switch (e) {
                        case M.rq.PLAYING:
                            e7.current.play(),
                                ep({
                                    questId: el.id,
                                    event: Z.rMx.QUEST_VIDEO_RESUMED,
                                    properties: z(
                                        {
                                            video_timestamp_seconds: e7.current.currentTime,
                                            pause_reason: tt,
                                            video_session_id: es
                                        },
                                        J(tg)
                                    )
                                }),
                                tn(null);
                            break;
                        case M.rq.PAUSED:
                            e7.current.pause(), (eX.current = !1), tO();
                            break;
                        case M.rq.ENDED:
                            eg(!1), tO();
                    }
            },
            [ep, el.id, tt, es, tO, eg, tg, tu]
        );
    (0, f.Ng)(() => {
        e3.current && ((e3.current = !1), eU(b.Z.getEffectiveConnectionSpeed()), e5 && e1.timestampSec >= e1.duration && e2(el.id, 0, e1.duration));
    }),
        o.useEffect(() => {
            null != e7.current &&
                null != tt &&
                ep({
                    questId: el.id,
                    event: Z.rMx.QUEST_VIDEO_PAUSED,
                    properties: z(
                        {
                            video_timestamp_seconds: e7.current.currentTime,
                            reason: tt,
                            video_session_id: es
                        },
                        J(tg)
                    )
                });
        }, [tt, el.id, ep, es, tg]),
        o.useEffect(() => {
            eC &&
                null != e7.current &&
                ep({
                    questId: el.id,
                    event: eh ? Z.rMx.QUEST_VIDEO_APP_FOCUSED : Z.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e7.current.currentTime,
                        video_state: ex,
                        video_session_id: es
                    }
                });
        }, [eh, eC, ex, el.id, ep, es]);
    let th = o.useCallback(
        (e) => {
            var t;
            tu.info('[QV] | sendProgressUpdate: Checking conditions...'),
                e5 || (null === (t = el.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (tu.info('[QV] | sendProgressUpdate: quest enrolled and not completed, sending video progress: '.concat(e)), (0, _.FI)(el, e)),
                null != e7.current &&
                    ep({
                        questId: el.id,
                        event: Z.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: z(
                            {
                                progress: (0, _.bA)(e7.current.currentTime, e7.current.duration),
                                video_timestamp_seconds: e7.current.currentTime,
                                video_session_id: es
                            },
                            J(tg)
                        )
                    });
        },
        [e5, el, ep, es, tg, tu]
    );
    o.useEffect(() => {
        (eu !== p.Dvm.HIDDEN && eu !== p.Dvm.EXITING && eu !== p.Dvm.EXITED && (null == eu || !ey || ej || e5) && (!eC || eh || e5)) || null == e7.current || ex !== M.rq.PLAYING || (tu.info('[QV] | Pausing video | playerState: '.concat(ex, ', parentTransitionState: ').concat(eu, ', visible: ').concat(ej, ', focused: ').concat(eh, ', isQuestCompleted: ').concat(e5)), tS(M.rq.PAUSED), e5 || tn(y.yE.LOST_FOCUS));
    }, [eu, eh, eC, ej, ey, ex, e5, tS, th, tu]);
    let tC = () => {
            eP(!0);
        },
        tj = () => {
            eP(!1);
        },
        ty = eD || ex === M.rq.PAUSED || ex === M.rq.ENDED,
        t_ = o.useCallback(() => {
            var e;
            tu.info('[QV] | handleFullScreenExit');
            let t = (0, S.fn)(null === (e = e7.current) || void 0 === e ? void 0 : e.parentNode, e7.current);
            null == t ||
                (0, S.rB)(t) ||
                (t.removeEventListener(S.NO, t_),
                eS(!1),
                ep({
                    questId: el.id,
                    event: Z.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: es }
                }));
        }, [el.id, eS, ep, es, tu]),
        tx = () => {
            if (null == e7.current) return;
            let e = Math.max(e7.current.currentTime - 10, 0);
            tu.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)),
                tD(e),
                ex === M.rq.ENDED && tS(M.rq.PAUSED),
                ef({
                    questId: el.id,
                    questContent: y.jn.VIDEO_MODAL,
                    questContentCTA: h.jZ.SEEK_BACKWARD
                });
        },
        tN = () => {
            if (null == e7.current || !tY) return;
            let e = Math.min(e7.current.currentTime + 10, tc);
            tu.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)),
                tD(e),
                ex !== M.rq.ENDED && e >= e7.current.duration && tS(M.rq.ENDED),
                ef({
                    questId: el.id,
                    questContent: y.jn.VIDEO_MODAL,
                    questContentCTA: h.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = e7.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, t_);
        };
    }, [t_]);
    let tD = o.useCallback(
            (e) => {
                null != e7.current && (tu.info('[QV] | seekTimeline | timeSec: '.concat(e)), tO(), ek(!0), tl(!1), (e7.current.currentTime = e), e2(el.id, e, e7.current.duration));
            },
            [e7, e2, el.id, tO, tu]
        ),
        tP = () => {
            if (null != e7.current)
                switch ((tu.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(ex)), ex)) {
                    case M.rq.ENDED:
                        tD(0), tS(M.rq.PLAYING);
                        break;
                    case M.rq.PLAYING:
                        tS(M.rq.PAUSED), tn(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tS(M.rq.PLAYING);
                }
        },
        tT = (e) => {
            ta(e);
        },
        tI = (e) => {
            ta((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tw = o.useCallback(() => {
            if (null == e7.current || (tu.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(e7.current.textTracks.length)), 0 === e7.current.textTracks.length)) return;
            let e = e7.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, V.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tT(n)), (n.onexit = () => tI(n)));
                }
        }, [e7, tu]);
    o.useEffect(() => {
        if (null == e9.current) return;
        let e = e9.current;
        return (
            e.addEventListener('load', tw),
            () => {
                null != e && e.removeEventListener('load', tw);
            }
        );
    }, [e9, tw]);
    let tA = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e7.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = e7.current) || void 0 === n ? void 0 : n.networkState,
                        i = null != e7.current ? (0, _.bA)(e7.current.currentTime, e7.current.duration) : void 0;
                    tu.info('[QV] | logVideoError: errorType: '.concat(e, ', videoProgress: ').concat(i, ', videoAssetId: ').concat(tf, ', connectionSpeed: ').concat(eF, ', error: ').concat(r, ', networkState: ').concat(o)),
                        ep({
                            questId: el.id,
                            event: Z.rMx.QUEST_VIDEO_ERROR,
                            properties: z(
                                {
                                    video_progress: i,
                                    video_error_type: e,
                                    video_asset_id: tf,
                                    network_connection_speed: eF,
                                    video_session_id: es,
                                    video_error_code: null == r ? void 0 : r.code,
                                    video_error_message: null == r ? void 0 : r.message,
                                    video_network_state: o
                                },
                                J(tg)
                            )
                        });
                } catch (e) {}
            },
            [eF, el.id, ep, tf, es, tg, tu]
        ),
        tk = (e) => {
            if ((tu.info('[QV] | handleCanPlay: playerState: '.concat(ex)), null != e7.current && ex === M.rq.PLAYING)) {
                if ((tu.info('[QV] | handleCanPlay: did NOT early return'), eL && (tu.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eL)), eR(!1)), eM)) {
                    tu.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eM));
                    let e = null != eJ.current ? Date.now() - eJ.current : null;
                    ep({
                        questId: el.id,
                        event: Z.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: z(
                            {
                                video_asset_id: tf,
                                network_connection_speed: eF,
                                duration: e,
                                buffer_index: e0.current,
                                video_session_id: es
                            },
                            J(tg)
                        )
                    }),
                        eV(!1);
                }
                tu.info('[QV] | handleCanPlay: updating player state to playing'), tS(M.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!eA) return;
        let e = setTimeout(() => {
            ek(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eA]);
    let [{ controlBarAnimSpring: tL }, tR] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: H,
            onStart: () => {
                eK(!1);
            },
            onRest: (e) => {
                1 === e.value && eK(!0);
            }
        })),
        tM = (0, o.useRef)(null),
        [{ captionHeightSpring: tV }, tq] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: H
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tq({
                captionHeightSpring: eE && null != ts && null !== (t = null === (e = tM.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e8
            }),
            () => {
                tV.stop();
            }
        );
    }, [eE, tq, e8, ts, tV]),
        o.useEffect(
            () => (
                tR({
                    controlBarAnimSpring: ty || ez ? 1 : 0,
                    immediate: e8
                }),
                () => {
                    tL.stop();
                }
            ),
            [ty, tR, e8, ez, tL]
        );
    let tB = ex === M.rq.ENDED,
        tF = o.useCallback(
            (e) => {
                if (
                    (ef({
                        questId: el.id,
                        questContent: e,
                        questContentCTA: h.jZ.LEARN_MORE,
                        impressionId: em
                    }),
                    el.id === U.V)
                ) {
                    window.open(O.Z.getArticleURL(Z.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                    return;
                }
                (0, _.FE)(el, {
                    content: e,
                    ctaContent: h.jZ.LEARN_MORE
                });
            },
            [em, el, ef]
        ),
        tU = o.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, el), [el]),
        tZ = o.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_CAPTION, el), [el]),
        tY = e5 || e1.maxTimestampSec >= (null !== (w = null === (i = e7.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== w ? w : 0) + 1;
    return (0, r.jsx)(p.P3F, {
        className: W.videoCont,
        'data-fullscreen': eO,
        tabIndex: -1,
        onMouseEnter: tC,
        onMouseLeave: tj,
        onFocus: tC,
        onBlur: tj,
        children: (0, r.jsxs)('div', {
            className: W.videoContInnerRelative,
            children: [
                tB &&
                    ((0, P.e)({ location: F.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(k.Z, {
                              quest: el,
                              title: null !== (er = null === (ee = el.config.videoMetadata) || void 0 === ee ? void 0 : ee.messages.videoEndCtaTitle) && void 0 !== er ? er : Q.NW.string(Q.t.Ka526u),
                              subtitle: null !== (eo = null === (et = el.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaSubtitle) && void 0 !== eo ? eo : Q.NW.string(Q.t.tKMcAg),
                              ctaBtnLabel: null !== (ei = null === (en = el.config.videoMetadata) || void 0 === en ? void 0 : en.messages.videoEndCtaButtonLabel) && void 0 !== ei ? ei : Q.NW.string(Q.t.iiTtpK),
                              onCTAClick: () => tF(y.jn.VIDEO_MODAL_END_CARD)
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(X, {
                                      quest: el,
                                      shouldShow: tB
                                  }),
                                  (0, r.jsx)('div', { className: W.videoContOverlay }),
                                  (0, r.jsx)($, {
                                      title: td,
                                      subtitle: tm,
                                      icon: p.d4D,
                                      className: W.endScreenPanelRight,
                                      onClick: () => tF(y.jn.VIDEO_MODAL)
                                  })
                              ]
                          })),
                (0, r.jsxs)(g.Z, {
                    ref: (e) => {
                        (e7.current = e), (e_.current = e);
                    },
                    autoPlay: ec,
                    playsInline: !0,
                    mediaLayoutType: eO ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: l()({
                        [W.hidden]: tB,
                        [W.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tU ? void 0 : tU.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e7.current && (e7.current.currentTime >= eZ && (tu.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(e7.current.currentTime)), eY(e7.current.currentTime + 6 + 2 * Math.random()), th(e7.current.currentTime)), e7.current.currentTime >= eQ && (eW(e7.current.currentTime + 1), (0, j.qm)(el.id, eT.taskType, e7.current.currentTime), ea(e7.current.currentTime)), e2(el.id, e7.current.currentTime, e7.current.duration), ew((e7.current.currentTime / e7.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e7.current && (th(e7.current.duration + 1), tu.info('[QV] | handleEnded: sending progress update: '.concat(e7.current.duration + 1)), e2(el.id, e7.current.duration, e7.current.duration)), tS(M.rq.ENDED), eV(!1);
                    },
                    onLoadedData: (e) => {
                        if ((tu.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eL)), eL)) {
                            let e = null != e$.current ? Date.now() - e$.current : null;
                            ep({
                                questId: el.id,
                                event: Z.rMx.QUEST_VIDEO_LOADING_ENDED,
                                properties: z(
                                    {
                                        video_asset_id: tf,
                                        network_connection_speed: eF,
                                        duration: e,
                                        video_session_id: es
                                    },
                                    J(tg)
                                )
                            }),
                                eR(!1);
                        }
                    },
                    onLoadedMetadata: (e) => {
                        null != e7.current && (tu.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tf)), to(!0), tf !== I.i.VIDEO_PLAYER_VIDEO_HLS && tD(tp), e6 ? (e7.current.volume = 0) : (e7.current.volume = e4));
                    },
                    onLoadStart: () => {
                        (e$.current = Date.now()),
                            tu.info('[QV] | handleLoadStart | loadingStartTime: '.concat(e$.current)),
                            ep({
                                questId: el.id,
                                event: Z.rMx.QUEST_VIDEO_LOADING_STARTED,
                                properties: z(
                                    {
                                        video_asset_id: tf,
                                        network_connection_speed: eF,
                                        video_session_id: es,
                                        is_hls_supported: s.ZP.isSupported()
                                    },
                                    J(tg)
                                )
                            });
                    },
                    onPlaying: () => {
                        if (!eX.current) return;
                        let e = performance.now() - ed;
                        tu.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')),
                            ep({
                                questId: el.id,
                                event: Z.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: z(
                                    {
                                        duration_ms: e,
                                        video_session_id: es,
                                        video_asset_id: tf
                                    },
                                    J(tg)
                                )
                            }),
                            (eX.current = !1);
                    },
                    onWaiting: (e) => {
                        (eJ.current = Date.now()),
                            tu.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(eJ.current)),
                            (e0.current += 1),
                            ep({
                                questId: el.id,
                                event: Z.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                properties: z(
                                    {
                                        video_asset_id: tf,
                                        network_connection_speed: eF,
                                        buffer_index: e0.current,
                                        video_session_id: es
                                    },
                                    J(tg)
                                )
                            }),
                            eV(!0);
                    },
                    onProgress: (e) => {
                        if (null == e7.current) return;
                        tu.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(e7.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < e7.current.buffered.length; e++) {
                            let n = e7.current.buffered.start(e),
                                r = e7.current.buffered.end(e);
                            !(r - n < 1) &&
                                t.push({
                                    start: n / e7.current.duration,
                                    size: (r - n) / e7.current.duration
                                });
                        }
                        eB(t);
                    },
                    onCanPlay: tk,
                    onCanPlayThrough: tk,
                    onSeeked: () => {
                        tu.info('[QV] | handleSeeked'), tl(!0);
                    },
                    onAbort: () => tA(M.CY.ABORT),
                    onError: () => tA(M.CY.ERROR),
                    onEmptied: () => tA(M.CY.EMPTIED),
                    onStalled: () => tA(M.CY.STALLED),
                    onSuspend: () => tA(M.CY.SUSPEND),
                    onClick: () => {
                        tu.info('[QV] | handleVideoClick'), tP();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tZ &&
                            (0, r.jsx)('track', {
                                ref: e9,
                                src: tZ.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tv &&
                            tf !== I.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tA(M.CY.SOURCE_ERROR),
                                src: tv.url,
                                type: tv.mimetype
                            })
                    ]
                }),
                (eL || eM) &&
                    ex === M.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: W.loadingSpinner
                    }),
                ex === M.rq.PAUSED && tt === y.yE.LOST_FOCUS && (0, r.jsx)(K, {}),
                ev &&
                    ex !== M.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => eg(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: W.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: W.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([tL, tV], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(R.K, {
                                    quest: el,
                                    onClose: () => {
                                        eg(!1),
                                            ef({
                                                questId: el.id,
                                                questContent: y.jn.VIDEO_MODAL,
                                                questContentCTA: h.jZ.TRANSCRIPT_DISABLE
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
                                tL.to({
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
                            [W.play]: ex === M.rq.PLAYING,
                            [W.pause]: ex === M.rq.PAUSED
                        }),
                        children: ex === M.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: W.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: W.playPausePopIcon })
                    },
                    ex
                ),
                eE &&
                    null != ts &&
                    (0, r.jsx)(a.animated.div, {
                        className: W.captionContainer,
                        ref: tM,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tL.to({
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
                            children: ts.text
                        })
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: W.videoFooterCont,
                    style: {
                        paddingLeft: (0, a.to)(
                            [
                                tL.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, a.to)(
                            [
                                tL.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, a.to)(
                            [
                                tL.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(L.Z, {
                            percent: eI,
                            animate: !0 !== e3.current && !eA,
                            interactionEnabled: e5 && eH,
                            backgroundColor: ty ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: ty ? eq : void 0,
                            duration: null !== (q = null === (m = e7.current) || void 0 === m ? void 0 : m.duration) && void 0 !== q ? q : 1,
                            maxSeekableTime: ty && eH ? tc : void 0,
                            onClick: (e) => {
                                tD(e), ex === M.rq.ENDED && tS(M.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tx();
                            },
                            onScrubForward: () => {
                                tN();
                            }
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: W.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tL.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tL.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tL.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(A.Z, {
                                videoRef: e7,
                                quest: el,
                                playerState: ex,
                                animSpring: tL,
                                visible: ty,
                                seekForwardEnabled: tY,
                                hideCaptionBtn: null == tZ,
                                handlePlaybackBtnClick: tP,
                                handleTranscriptBtnClick: () => {
                                    ev || (null != te && te.questId === el.id && te.fetchStatus !== x.iF.NONE && te.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(el),
                                        eg(!ev),
                                        ef({
                                            questId: el.id,
                                            questContent: y.jn.VIDEO_MODAL,
                                            questContentCTA: ev ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE
                                        });
                                },
                                handleCaptionBtnClick: () => {
                                    eb(!eE),
                                        ef({
                                            questId: el.id,
                                            questContent: y.jn.VIDEO_MODAL,
                                            questContentCTA: eE ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE
                                        });
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !eO;
                                    tu.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, S.fn)(null === (e = e7.current) || void 0 === e ? void 0 : e.parentNode, e7.current);
                                    t && null != n
                                        ? ((0, S.Dj)(n),
                                          n.addEventListener(S.NO, t_),
                                          ep({
                                              questId: el.id,
                                              event: Z.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                              properties: { video_session_id: es }
                                          }))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(S.NO, t_),
                                          ep({
                                              questId: el.id,
                                              event: Z.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                              properties: { video_session_id: es }
                                          }),
                                          (0, S.Pr)(n)),
                                        eS(t);
                                },
                                handleSeekBackBtnClick: tx,
                                handleSeekForwardBtnClick: tN,
                                handleControlBarPendingInteraction: eG
                            })
                        })
                    ]
                })
            ]
        })
    });
}
