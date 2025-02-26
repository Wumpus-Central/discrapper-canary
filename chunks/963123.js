n.d(t, { Z: () => X }), n(47120), n(653041);
var r = n(200651),
    o = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(941208),
    a = n(642128),
    c = n(232713),
    u = n(442837),
    d = n(780384),
    m = n(481060),
    p = n(493773),
    v = n(607070),
    f = n(70097),
    E = n(210887),
    g = n(866960),
    b = n(228488),
    O = n(617136),
    S = n(915750),
    C = n(272008),
    j = n(497505),
    h = n(918701),
    y = n(184299),
    x = n(347382),
    _ = n(5881),
    D = n(208109),
    N = n(720293),
    P = n(602667),
    T = n(341907),
    I = n(881773),
    A = n(350312),
    w = n(355243),
    L = n(106743),
    k = n(223418),
    R = n(604162),
    M = n(747717),
    q = n(281055),
    B = n(920393),
    F = n(46140),
    U = n(981631),
    Z = n(217702),
    V = n(388032),
    Y = n(677488);
function W(e) {
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
    let e = (0, u.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: Y.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: V.NW.string(V.t.U7Xrb2)
        })
    });
}
function K(e) {
    let { quest: t, shouldShow: n } = e,
        l = o.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(P.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: i()(Y.stillFrameImageCard, { [Y.stillFrameImageCardHidden]: !n })
                  })
          });
}
function Q(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        p = () => {
            u(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: i()(Y.endScreenPanel, Y.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: p,
        onFocus: d,
        onBlur: p,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: Y.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: Y.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-md/semibold',
                            className: Y.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-sm/normal',
                            className: Y.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(M.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: Y.endScreenIcon
                })
            ]
        })
    });
}
function X(e) {
    var t, n, l, d, E, P, M, X, $, J, ee, et, en, er, eo, el, ei;
    let { quest: es, videoSessionId: ea, onOptimisticProgressUpdate: ec, autoplay: eu, parentTransitionState: ed, startTime: em } = e,
        ep = (0, S.aM)(),
        ev = (0, O._F)(),
        ef = (0, O.O5)(),
        eE = (0, y.km)((e) => e.transcriptEnabled),
        eg = (0, y.km)((e) => e.setTranscriptEnabled),
        eb = (0, y.km)((e) => e.captionEnabled),
        eO = (0, y.km)((e) => e.setCaptionEnabled),
        eS = (0, y.km)((e) => e.fullScreenEnabled),
        eC = (0, y.km)((e) => e.setFullScreenEnabled),
        { focused: ej, focusedChanged: eh } = (0, q.xU)(),
        { visible: ey, visibleChanged: ex, targetRef: e_ } = (0, q.Yy)(),
        [eD, eN] = o.useState(!0 === eu ? k.rq.PLAYING : k.rq.PAUSED),
        [eP, eT] = o.useState(!1),
        eI = (0, h.il)(es),
        [eA, ew] = o.useState(eI.percentComplete),
        [eL, ek] = o.useState(!1),
        [eR, eM] = o.useState(!0),
        [eq, eB] = o.useState(!1),
        [eF, eU] = o.useState([]),
        [eZ, eV] = o.useState(g.Z.getEffectiveConnectionSpeed()),
        [eY, eW] = o.useState(0),
        [ez, eG] = o.useState(0),
        [eH, eK] = o.useState(!1),
        [eQ, eX] = o.useState(!1),
        e$ = o.useRef(!1),
        eJ = o.useRef(null),
        e0 = o.useRef(null),
        e1 = (0, o.useRef)(-1),
        e2 = (0, y.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[es.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        e6 = (0, y.km)((e) => e.setVideoProgress),
        e4 = (0, y.km)((e) => e.muted),
        e7 = (0, y.km)((e) => e.volume),
        e8 = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        e9 = (0, o.useRef)(null),
        e3 = (0, o.useRef)(null),
        e5 = o.useRef(!0),
        te = (null === (t = es.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        tt = (0, y.km)((e) => e.transcript),
        [tn, tr] = o.useState(null),
        [to, tl] = o.useState(!1),
        [ti, ts] = o.useState(!1),
        [ta, tc] = o.useState(null),
        tu = te ? (null !== (E = null === (n = e9.current) || void 0 === n ? void 0 : n.duration) && void 0 !== E ? E : 0) : Math.max(e2.maxTimestampSec, eI.progressSeconds),
        { hlsAnalytics: td, handleHlsSegmentUpdate: tm } = (function () {
            let [e, t] = o.useState({
                levelIndex: 0,
                resWidth: -1,
                resHeight: -1
            });
            return {
                hlsAnalytics: {
                    hls_level_index: e.levelIndex,
                    hls_segment_res_width: e.resWidth,
                    hls_segment_res_height: e.resHeight
                },
                handleHlsSegmentUpdate: t
            };
        })(),
        { videoAssetId: tp, videoAsset: tv } = (function (e, t, n, r) {
            var l;
            let i = o.useRef(!1),
                a = o.useRef(null),
                c = (0, x.z)('VideoPanel'),
                u = null === (l = e.config.videoMetadata) || void 0 === l ? void 0 : l.assets,
                d = o.useMemo(() => (null != u ? (c && s.ZP.isSupported() && null != u.videoPlayerVideoHls ? N.i.VIDEO_PLAYER_VIDEO_HLS : z.has(n) || null == u.videoPlayerVideoLowRes ? N.i.VIDEO_PLAYER_VIDEO : N.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = o.useMemo(() => (null != d ? (0, N.z)(d, e) : null), [e, d]),
                p = o.useCallback(
                    (e, t) => {
                        null != a.current &&
                            (a.current.levels.length <= t.level ||
                                r({
                                    levelIndex: t.level,
                                    resWidth: a.current.levels[t.level].width,
                                    resHeight: a.current.levels[t.level].height
                                }));
                    },
                    [r]
                );
            return (
                o.useEffect(() => {
                    if (d !== N.i.VIDEO_PLAYER_VIDEO_HLS || null == m || null == t.current || i.current) return;
                    (a.current = new s.ZP({ maxBufferLength: 15 })), a.current.loadSource(m.url), a.current.attachMedia(t.current), a.current.on(s.ZP.Events.LEVEL_SWITCHED, p), (i.current = !0);
                    let e = a.current;
                    return () => {
                        null != e && e.off(s.ZP.Events.LEVEL_SWITCHED, p);
                    };
                }, [m, d, t, p]),
                {
                    videoAssetId: d,
                    videoAsset: m,
                    hlsRef: a
                }
            );
        })(es, e9, eZ, tm),
        tf = o.useCallback(
            (e) => {
                if (null != e9.current) {
                    var t, n;
                    ev({
                        questId: es.id,
                        event: U.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: W(
                            ((t = W({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tp,
                                    quest_completed: te,
                                    video_duration_sec: e9.current.duration,
                                    video_progress: (0, T.formatVideoProgressRatio)(e.segment_end_sec, e9.current.duration),
                                    video_session_id: ea
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
                            td
                        )
                    });
                }
            },
            [ev, es.id, tp, te, ea, td]
        ),
        { forceSendCurrentSegment: tE } = (0, B.Z)({
            videoRef: e9,
            isPlaying: eD === k.rq.PLAYING,
            isMetadataLoaded: to,
            isInitialSeekComplete: ti,
            onAnalytics: tf,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tg = o.useCallback(
            (e) => {
                if ((eN(e), null != e9.current))
                    switch (e) {
                        case k.rq.PLAYING:
                            e9.current.play(),
                                ev({
                                    questId: es.id,
                                    event: U.rMx.QUEST_VIDEO_RESUMED,
                                    properties: W(
                                        {
                                            video_timestamp_seconds: e9.current.currentTime,
                                            pause_reason: tn,
                                            video_session_id: ea
                                        },
                                        td
                                    )
                                }),
                                tr(null);
                            break;
                        case k.rq.PAUSED:
                            e9.current.pause(), tE();
                            break;
                        case k.rq.ENDED:
                            eg(!1), tE();
                    }
            },
            [ev, es.id, tn, ea, tE, eg, td]
        );
    (0, p.Ng)(() => {
        e5.current && ((e5.current = !1), eV(g.Z.getEffectiveConnectionSpeed()), te && e2.timestampSec >= e2.duration && e6(es.id, 0, e2.duration));
    }),
        o.useEffect(() => {
            null != e9.current &&
                null != tn &&
                ev({
                    questId: es.id,
                    event: U.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: e9.current.currentTime,
                        reason: tn,
                        video_session_id: ea
                    }
                });
        }, [tn, es.id, ev, ea]),
        o.useEffect(() => {
            eh &&
                null != e9.current &&
                ev({
                    questId: es.id,
                    event: ej ? U.rMx.QUEST_VIDEO_APP_FOCUSED : U.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e9.current.currentTime,
                        video_state: eD,
                        video_session_id: ea
                    }
                });
        }, [ej, eh, eD, es.id, ev, ea]);
    let tb = o.useCallback(
        (e) => {
            var t;
            te || (null === (t = es.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (0, h.FI)(es, e),
                null != e9.current &&
                    ev({
                        questId: es.id,
                        event: U.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: W(
                            {
                                progress: (0, T.formatVideoProgressRatio)(e9.current.currentTime, e9.current.duration),
                                video_timestamp_seconds: e9.current.currentTime,
                                video_session_id: ea
                            },
                            td
                        )
                    });
        },
        [te, es, ev, ea, td]
    );
    o.useEffect(() => {
        (ed !== m.Dvm.HIDDEN && ed !== m.Dvm.EXITING && ed !== m.Dvm.EXITED && (null == ed || !ex || ey || te) && (!eh || ej || te)) || null == e9.current || eD !== k.rq.PLAYING || (tg(k.rq.PAUSED), te || tr(k.yE.LOST_FOCUS));
    }, [ed, ej, eh, ey, ex, eD, te, tg, tb]);
    let tO = () => {
            eT(!0);
        },
        tS = () => {
            eT(!1);
        },
        tC = eP || eD === k.rq.PAUSED || eD === k.rq.ENDED,
        tj = o.useCallback(() => {
            var e;
            let t = (0, b.fn)(null === (e = e9.current) || void 0 === e ? void 0 : e.parentNode, e9.current);
            null == t ||
                (0, b.rB)(t) ||
                (t.removeEventListener(b.NO, tj),
                eC(!1),
                ev({
                    questId: es.id,
                    event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: ea }
                }));
        }, [es.id, eC, ev, ea]),
        th = () => {
            null != e9.current &&
                (tx(Math.max(e9.current.currentTime - 10, 0)),
                eD === k.rq.ENDED && tg(k.rq.PAUSED),
                ef({
                    questId: es.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: O.jZ.SEEK_BACKWARD
                }));
        },
        ty = () => {
            if (null == e9.current || !tF) return;
            let e = Math.min(e9.current.currentTime + 10, tu);
            tx(e),
                eD !== k.rq.ENDED && e >= e9.current.duration && tg(k.rq.ENDED),
                ef({
                    questId: es.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: O.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = e9.current;
        return () => {
            let t = (0, b.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(b.NO, tj);
        };
    }, [tj]);
    let tx = o.useCallback(
            (e) => {
                null != e9.current && (tE(), ek(!0), ts(!1), (e9.current.currentTime = e), e6(es.id, e, e9.current.duration));
            },
            [e9, e6, es.id, tE]
        ),
        t_ = () => {
            if (null != e9.current)
                switch (eD) {
                    case k.rq.ENDED:
                        tx(0), tg(k.rq.PLAYING);
                        break;
                    case k.rq.PLAYING:
                        tg(k.rq.PAUSED), tr(k.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tg(k.rq.PLAYING);
                }
        },
        tD = (e) => {
            tc(e);
        },
        tN = (e) => {
            tc((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tP = o.useCallback(() => {
            if (null == e9.current || 0 === e9.current.textTracks.length) return;
            let e = e9.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, R.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tD(n)), (n.onexit = () => tN(n)));
                }
        }, [e9]);
    o.useEffect(() => {
        if (null == e3.current) return;
        let e = e3.current;
        return (
            e.addEventListener('load', tP),
            () => {
                null != e && e.removeEventListener('load', tP);
            }
        );
    }, [e3, tP]);
    let tT = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e9.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = e9.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != e9.current ? (0, T.formatVideoProgressRatio)(e9.current.currentTime, e9.current.duration) : void 0;
                    ev({
                        questId: es.id,
                        event: U.rMx.QUEST_VIDEO_ERROR,
                        properties: W(
                            {
                                video_progress: l,
                                video_error_type: e,
                                video_asset_id: tp,
                                network_connection_speed: eZ,
                                video_session_id: ea,
                                video_error_code: null == r ? void 0 : r.code,
                                video_error_message: null == r ? void 0 : r.message,
                                video_network_state: o
                            },
                            td
                        )
                    });
                } catch (e) {}
            },
            [eZ, es.id, ev, tp, ea, td]
        ),
        tI = (e) => {
            if (null != e9.current && eD === k.rq.PLAYING) {
                if ((eR && eM(!1), eq)) {
                    let e = null != e0.current ? Date.now() - e0.current : null;
                    ev({
                        questId: es.id,
                        event: U.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: W(
                            {
                                video_asset_id: tp,
                                network_connection_speed: eZ,
                                duration: e,
                                buffer_index: e1.current,
                                video_session_id: ea
                            },
                            td
                        )
                    }),
                        eB(!1);
                }
                tg(k.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!eL) return;
        let e = setTimeout(() => {
            ek(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eL]);
    let [{ controlBarAnimSpring: tA }, tw] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: G,
            onStart: () => {
                eX(!1);
            },
            onRest: (e) => {
                1 === e.value && eX(!0);
            }
        })),
        tL = (0, o.useRef)(null),
        [{ captionHeightSpring: tk }, tR] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: G
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tR({
                captionHeightSpring: eb && null != ta && null !== (t = null === (e = tL.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e8
            }),
            () => {
                tk.stop();
            }
        );
    }, [eb, tR, e8, ta, tk]),
        o.useEffect(
            () => (
                tw({
                    controlBarAnimSpring: tC || eH ? 1 : 0,
                    immediate: e8
                }),
                () => {
                    tA.stop();
                }
            ),
            [tC, tw, e8, eH, tA]
        );
    let tM = eD === k.rq.ENDED,
        tq = o.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, es), [es]),
        tB = o.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_CAPTION, es), [es]),
        tF = te || e2.maxTimestampSec >= (null !== (P = null === (l = e9.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== P ? P : 0) + 1;
    return (0, r.jsx)(m.P3F, {
        className: Y.videoCont,
        'data-fullscreen': eS,
        tabIndex: -1,
        onMouseEnter: tO,
        onMouseLeave: tS,
        onFocus: tO,
        onBlur: tS,
        children: (0, r.jsxs)('div', {
            className: Y.videoContInnerRelative,
            children: [
                tM &&
                    ((0, D.e)({ location: F.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(A.Z, {
                              quest: es,
                              title: null !== (ee = null === (X = es.config.videoMetadata) || void 0 === X ? void 0 : X.messages.videoEndCtaTitle) && void 0 !== ee ? ee : V.NW.string(V.t.Ka526u),
                              subtitle: null !== (et = null === ($ = es.config.videoMetadata) || void 0 === $ ? void 0 : $.messages.videoEndCtaSubtitle) && void 0 !== et ? et : V.NW.string(V.t.tKMcAg),
                              ctaBtnLabel: null !== (en = null === (J = es.config.videoMetadata) || void 0 === J ? void 0 : J.messages.videoEndCtaButtonLabel) && void 0 !== en ? en : V.NW.string(V.t.iiTtpK),
                              onCTAClick: () => {
                                  ef({
                                      questId: es.id,
                                      questContent: j.jn.VIDEO_MODAL_END_CARD,
                                      questContentCTA: O.jZ.LEARN_MORE,
                                      impressionId: ep
                                  }),
                                      (0, h.FE)(es, {
                                          content: j.jn.VIDEO_MODAL_END_CARD,
                                          ctaContent: O.jZ.LEARN_MORE
                                      });
                              }
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(K, {
                                      quest: es,
                                      shouldShow: tM
                                  }),
                                  (0, r.jsx)('div', { className: Y.videoContOverlay }),
                                  (0, r.jsx)(Q, {
                                      title: null !== (el = null === (er = es.config.videoMetadata) || void 0 === er ? void 0 : er.messages.videoEndCtaTitle) && void 0 !== el ? el : V.NW.string(V.t.iiTtpK),
                                      subtitle: null !== (ei = null === (eo = es.config.videoMetadata) || void 0 === eo ? void 0 : eo.messages.videoEndCtaSubtitle) && void 0 !== ei ? ei : V.NW.string(V.t.mxaHf3),
                                      icon: m.d4D,
                                      className: Y.endScreenPanelRight,
                                      onClick: () => {
                                          ef({
                                              questId: es.id,
                                              questContent: j.jn.VIDEO_MODAL,
                                              questContentCTA: O.jZ.LEARN_MORE
                                          }),
                                              (0, h.FE)(es, {
                                                  content: j.jn.VIDEO_MODAL,
                                                  ctaContent: O.jZ.LEARN_MORE,
                                                  impressionId: ep
                                              });
                                      }
                                  })
                              ]
                          })),
                (0, r.jsxs)(f.Z, {
                    ref: (e) => {
                        (e9.current = e), (e_.current = e);
                    },
                    autoPlay: eu,
                    playsInline: !0,
                    mediaLayoutType: eS ? Z.hV.STATIC : Z.hV.RESPONSIVE,
                    className: i()({
                        [Y.hidden]: tM,
                        [Y.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tq ? void 0 : tq.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e9.current && (e9.current.currentTime >= eY && (eW(e9.current.currentTime + 6 + 2 * Math.random()), tb(e9.current.currentTime)), e9.current.currentTime >= ez && (eG(e9.current.currentTime + 1), (0, C.qm)(es.id, eI.taskType, e9.current.currentTime), ec(e9.current.currentTime)), e6(es.id, e9.current.currentTime, e9.current.duration), ew((e9.current.currentTime / e9.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e9.current && (tb(e9.current.duration + 1), e6(es.id, e9.current.duration, e9.current.duration)), tg(k.rq.ENDED), eB(!1);
                    },
                    onLoadedData: (e) => {
                        if (eR) {
                            let e = null != eJ.current ? Date.now() - eJ.current : null;
                            ev({
                                questId: es.id,
                                event: U.rMx.QUEST_VIDEO_LOADING_ENDED,
                                properties: W(
                                    {
                                        video_asset_id: tp,
                                        network_connection_speed: eZ,
                                        duration: e,
                                        video_session_id: ea
                                    },
                                    td
                                )
                            }),
                                eM(!1);
                        }
                    },
                    onLoadedMetadata: (e) => {
                        null != e9.current && (tl(!0), tx(te ? e2.timestampSec : Math.max(e2.timestampSec, eI.progressSeconds)), e4 ? (e9.current.volume = 0) : (e9.current.volume = e7));
                    },
                    onLoadStart: () => {
                        (eJ.current = Date.now()),
                            ev({
                                questId: es.id,
                                event: U.rMx.QUEST_VIDEO_LOADING_STARTED,
                                properties: W(
                                    {
                                        video_asset_id: tp,
                                        network_connection_speed: eZ,
                                        video_session_id: ea,
                                        is_hls_supported: s.ZP.isSupported()
                                    },
                                    td
                                )
                            });
                    },
                    onPlay: () => {
                        if (e$.current) return;
                        let e = performance.now() - em;
                        (0, _.T)({ quest: es }).info('\u23F0 Video FCP: '.concat(e, 'ms')),
                            ev({
                                questId: es.id,
                                event: U.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: W(
                                    {
                                        duration_ms: e,
                                        video_session_id: ea,
                                        video_asset_id: tp
                                    },
                                    td
                                )
                            }),
                            (e$.current = !0);
                    },
                    onWaiting: (e) => {
                        (e0.current = Date.now()),
                            (e1.current += 1),
                            ev({
                                questId: es.id,
                                event: U.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                properties: W(
                                    {
                                        video_asset_id: tp,
                                        network_connection_speed: eZ,
                                        buffer_index: e1.current,
                                        video_session_id: ea
                                    },
                                    td
                                )
                            }),
                            eB(!0);
                    },
                    onProgress: (e) => {
                        if (null == e9.current) return;
                        let t = [];
                        for (let e = 0; e < e9.current.buffered.length; e++) {
                            let n = e9.current.buffered.start(e),
                                r = e9.current.buffered.end(e);
                            !(r - n < 1) &&
                                t.push({
                                    start: n / e9.current.duration,
                                    size: (r - n) / e9.current.duration
                                });
                        }
                        eU(t);
                    },
                    onCanPlay: tI,
                    onCanPlayThrough: tI,
                    onSeeked: () => {
                        ts(!0);
                    },
                    onAbort: () => tT(k.CY.ABORT),
                    onError: () => tT(k.CY.ERROR),
                    onEmptied: () => tT(k.CY.EMPTIED),
                    onStalled: () => tT(k.CY.STALLED),
                    onSuspend: () => tT(k.CY.SUSPEND),
                    onClick: () => {
                        t_();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tB &&
                            (0, r.jsx)('track', {
                                ref: e3,
                                src: tB.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tv &&
                            tp !== N.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tT(k.CY.SOURCE_ERROR),
                                src: tv.url,
                                type: tv.mimetype
                            })
                    ]
                }),
                (eR || eq) &&
                    eD === k.rq.PLAYING &&
                    (0, r.jsx)(m.$jN, {
                        type: m.$jN.Type.WANDERING_CUBES,
                        className: Y.loadingSpinner
                    }),
                eD === k.rq.PAUSED && tn === k.yE.LOST_FOCUS && (0, r.jsx)(H, {}),
                eE &&
                    eD !== k.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.P3F, {
                                onClick: () => eg(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: Y.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: Y.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([tA, tk], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(L.K, {
                                    quest: es,
                                    onClose: () => {
                                        eg(!1),
                                            ef({
                                                questId: es.id,
                                                questContent: j.jn.VIDEO_MODAL,
                                                questContentCTA: O.jZ.TRANSCRIPT_DISABLE
                                            });
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: Y.videoFooterContGradient,
                    style: {
                        opacity: (0, a.to)(
                            [
                                tA.to({
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
                        className: i()(Y.playPausePopCont, {
                            [Y.play]: eD === k.rq.PLAYING,
                            [Y.pause]: eD === k.rq.PAUSED
                        }),
                        children: eD === k.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: Y.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: Y.playPausePopIcon })
                    },
                    eD
                ),
                eb &&
                    null != ta &&
                    (0, r.jsx)(a.animated.div, {
                        className: Y.captionContainer,
                        ref: tL,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tA.to({
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
                            className: Y.captionText,
                            children: ta.text
                        })
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: Y.videoFooterCont,
                    style: {
                        paddingLeft: (0, a.to)(
                            [
                                tA.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, a.to)(
                            [
                                tA.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, a.to)(
                            [
                                tA.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(w.Z, {
                            percent: eA,
                            animate: !0 !== e5.current && !eL,
                            interactionEnabled: te && eQ,
                            backgroundColor: tC ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tC ? eF : void 0,
                            duration: null !== (M = null === (d = e9.current) || void 0 === d ? void 0 : d.duration) && void 0 !== M ? M : 1,
                            maxSeekableTime: tC && eQ ? tu : void 0,
                            onClick: (e) => {
                                tx(e), eD === k.rq.ENDED && tg(k.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                th();
                            },
                            onScrubForward: () => {
                                ty();
                            }
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: Y.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tA.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tA.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tA.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(I.Z, {
                                videoRef: e9,
                                quest: es,
                                playerState: eD,
                                animSpring: tA,
                                visible: tC,
                                seekForwardEnabled: tF,
                                hideCaptionBtn: null == tB,
                                handlePlaybackBtnClick: t_,
                                handleTranscriptBtnClick: () => {
                                    eE || (null != tt && tt.questId === es.id && tt.fetchStatus !== y.iF.NONE && tt.fetchStatus !== y.iF.FAILURE) || (0, C.lL)(es),
                                        eg(!eE),
                                        ef({
                                            questId: es.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eE ? O.jZ.TRANSCRIPT_DISABLE : O.jZ.TRANSCRIPT_ENABLE
                                        });
                                },
                                handleCaptionBtnClick: () => {
                                    eO(!eb),
                                        ef({
                                            questId: es.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eb ? O.jZ.CLOSED_CAPTIONING_DISABLE : O.jZ.CLOSED_CAPTIONING_ENABLE
                                        });
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !eS,
                                        n = (0, b.fn)(null === (e = e9.current) || void 0 === e ? void 0 : e.parentNode, e9.current);
                                    t && null != n
                                        ? ((0, b.Dj)(n),
                                          n.addEventListener(b.NO, tj),
                                          ev({
                                              questId: es.id,
                                              event: U.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                              properties: { video_session_id: ea }
                                          }))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(b.NO, tj),
                                          ev({
                                              questId: es.id,
                                              event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                              properties: { video_session_id: ea }
                                          }),
                                          (0, b.Pr)(n)),
                                        eC(t);
                                },
                                handleSeekBackBtnClick: th,
                                handleSeekForwardBtnClick: ty,
                                handleControlBarPendingInteraction: eK
                            })
                        })
                    ]
                })
            ]
        })
    });
}
