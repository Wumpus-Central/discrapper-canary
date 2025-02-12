n.d(t, { Z: () => X }), n(47120), n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(941208),
    a = n(642128),
    u = n(232713),
    c = n(442837),
    d = n(780384),
    m = n(481060),
    v = n(493773),
    E = n(607070),
    p = n(70097),
    C = n(210887),
    f = n(866960),
    S = n(228488),
    g = n(617136),
    x = n(915750),
    _ = n(272008),
    h = n(497505),
    T = n(918701),
    D = n(184299),
    N = n(347382),
    I = n(5881),
    j = n(208109),
    A = n(720293),
    b = n(602667),
    L = n(341907),
    O = n(881773),
    R = n(350312),
    k = n(355243),
    M = n(106743),
    P = n(223418),
    y = n(604162),
    q = n(747717),
    w = n(281055),
    F = n(920393),
    B = n(46140),
    U = n(981631),
    Z = n(217702),
    V = n(388032),
    Y = n(43465);
let z = new Set([U.IyS.FIVE_G, U.IyS.FOUR_G, U.IyS.UNKNOWN]),
    G = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function H() {
    let e = (0, c.e7)([C.Z], () => C.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: Y.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: V.intl.string(V.t.U7Xrb2)
        })
    });
}
function K(e) {
    let { quest: t, shouldShow: n } = e,
        i = l.useMemo(() => (0, A.z)(A.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(b.A, {
              questOrQuests: t,
              questContent: h.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: 'Video thumbnail',
                      className: s()(Y.stillFrameImageCard, { [Y.stillFrameImageCardHidden]: !n })
                  })
          });
}
function Q(e) {
    let { title: t, subtitle: n, icon: i, onClick: o, className: a } = e,
        [u, c] = l.useState(!1),
        d = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: s()(Y.endScreenPanel, Y.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: v,
        onFocus: d,
        onBlur: v,
        onClick: o,
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
                (0, r.jsx)(q.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: Y.endScreenIcon
                })
            ]
        })
    });
}
function X(e) {
    var t, n, i, d, C, b, q, X, W, $, J, ee, et, en, er, el, ei;
    let { quest: es, videoSessionId: eo, onOptimisticProgressUpdate: ea, autoplay: eu, parentTransitionState: ec, startTime: ed } = e,
        em = (0, x.aM)(),
        ev = (0, g._F)(),
        eE = (0, g.O5)(),
        ep = (0, D.km)((e) => e.transcriptEnabled),
        eC = (0, D.km)((e) => e.setTranscriptEnabled),
        ef = (0, D.km)((e) => e.captionEnabled),
        eS = (0, D.km)((e) => e.setCaptionEnabled),
        eg = (0, D.km)((e) => e.fullScreenEnabled),
        ex = (0, D.km)((e) => e.setFullScreenEnabled),
        { focused: e_, focusedChanged: eh } = (0, w.xU)(),
        { visible: eT, visibleChanged: eD, targetRef: eN } = (0, w.Yy)(),
        [eI, ej] = l.useState(!0 === eu ? P.rq.PLAYING : P.rq.PAUSED),
        [eA, eb] = l.useState(!1),
        eL = (0, T.il)(es),
        [eO, eR] = l.useState(eL.percentComplete),
        [ek, eM] = l.useState(!1),
        [eP, ey] = l.useState(!0),
        [eq, ew] = l.useState(!1),
        [eF, eB] = l.useState([]),
        [eU, eZ] = l.useState(f.Z.getEffectiveConnectionSpeed()),
        [eV, eY] = l.useState(0),
        [ez, eG] = l.useState(0),
        [eH, eK] = l.useState(!1),
        [eQ, eX] = l.useState(!1),
        eW = l.useRef(!1),
        e$ = l.useRef(null),
        eJ = l.useRef(null),
        e0 = (0, l.useRef)(-1),
        e1 = (0, D.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[es.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, u.X),
        e2 = (0, D.km)((e) => e.setVideoProgress),
        e4 = (0, D.km)((e) => e.muted),
        e6 = (0, D.km)((e) => e.volume),
        e9 = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
        e7 = (0, l.useRef)(null),
        e8 = (0, l.useRef)(null),
        e3 = l.useRef(!0),
        e5 = (null === (t = es.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        te = (0, D.km)((e) => e.transcript),
        [tt, tn] = l.useState(null),
        [tr, tl] = l.useState(!1),
        [ti, ts] = l.useState(!1),
        [to, ta] = l.useState(null),
        tu = e5 ? (null !== (C = null === (n = e7.current) || void 0 === n ? void 0 : n.duration) && void 0 !== C ? C : 0) : Math.max(e1.maxTimestampSec, eL.progressSeconds),
        { videoAssetId: tc, videoAsset: td } = (function (e, t, n) {
            var r;
            let i = l.useRef(!1),
                s = l.useRef(null),
                a = (0, N.z)('VideoPanel'),
                u = null === (r = e.config.videoMetadata) || void 0 === r ? void 0 : r.assets,
                c = l.useMemo(() => (null != u ? (a && o.ZP.isSupported() && null != u.videoPlayerVideoHls ? A.i.VIDEO_PLAYER_VIDEO_HLS : z.has(n) || null == u.videoPlayerVideoLowRes ? A.i.VIDEO_PLAYER_VIDEO : A.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, a]),
                d = l.useMemo(() => (null != c ? (0, A.z)(c, e) : null), [e, c]);
            return (
                l.useEffect(() => {
                    c === A.i.VIDEO_PLAYER_VIDEO_HLS && null != d && null != t.current && !i.current && ((s.current = new o.ZP()), s.current.loadSource(d.url), s.current.attachMedia(t.current), (i.current = !0));
                }, [d, c, t]),
                {
                    videoAssetId: c,
                    videoAsset: d,
                    hlsRef: s
                }
            );
        })(es, e7, eU),
        tm = l.useCallback(
            (e) => {
                null != e7.current &&
                    ev({
                        questId: es.id,
                        event: U.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: tc,
                            quest_completed: e5,
                            video_duration_sec: e7.current.duration,
                            video_progress: (0, L.formatVideoProgressRatio)(e.segment_end_sec, e7.current.duration),
                            video_session_id: eo
                        }
                    });
            },
            [ev, es.id, tc, e5, eo]
        ),
        { forceSendCurrentSegment: tv } = (0, F.Z)({
            videoRef: e7,
            isPlaying: eI === P.rq.PLAYING,
            isMetadataLoaded: tr,
            isInitialSeekComplete: ti,
            onAnalytics: tm,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tE = l.useCallback(
            (e) => {
                if ((ej(e), null != e7.current))
                    switch (e) {
                        case P.rq.PLAYING:
                            e7.current.play(),
                                ev({
                                    questId: es.id,
                                    event: U.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: e7.current.currentTime,
                                        pause_reason: tt,
                                        video_session_id: eo
                                    }
                                }),
                                tn(null);
                            break;
                        case P.rq.PAUSED:
                            e7.current.pause(), tv();
                            break;
                        case P.rq.ENDED:
                            eC(!1), tv();
                    }
            },
            [ev, es.id, tt, eo, tv, eC]
        );
    (0, v.Ng)(() => {
        e3.current && ((e3.current = !1), eZ(f.Z.getEffectiveConnectionSpeed()), e5 && e1.timestampSec >= e1.duration && e2(es.id, 0, e1.duration));
    }),
        l.useEffect(() => {
            null != e7.current &&
                null != tt &&
                ev({
                    questId: es.id,
                    event: U.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: e7.current.currentTime,
                        reason: tt,
                        video_session_id: eo
                    }
                });
        }, [tt, es.id, ev, eo]),
        l.useEffect(() => {
            eh &&
                null != e7.current &&
                ev({
                    questId: es.id,
                    event: e_ ? U.rMx.QUEST_VIDEO_APP_FOCUSED : U.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e7.current.currentTime,
                        video_state: eI,
                        video_session_id: eo
                    }
                });
        }, [e_, eh, eI, es.id, ev, eo]);
    let tp = l.useCallback(
        (e) => {
            var t;
            e5 || (null === (t = es.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (0, T.FI)(es, e),
                null != e7.current &&
                    ev({
                        questId: es.id,
                        event: U.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, L.formatVideoProgressRatio)(e7.current.currentTime, e7.current.duration),
                            video_timestamp_seconds: e7.current.currentTime,
                            video_session_id: eo
                        }
                    });
        },
        [e5, es, ev, eo]
    );
    l.useEffect(() => {
        (ec !== m.Dvm.HIDDEN && ec !== m.Dvm.EXITING && ec !== m.Dvm.EXITED && (null == ec || !eD || eT || e5) && (!eh || e_ || e5)) || null == e7.current || eI !== P.rq.PLAYING || (tE(P.rq.PAUSED), e5 || tn(P.yE.LOST_FOCUS));
    }, [ec, e_, eh, eT, eD, eI, e5, tE, tp]);
    let tC = () => {
            eb(!0);
        },
        tf = () => {
            eb(!1);
        },
        tS = eA || eI === P.rq.PAUSED || eI === P.rq.ENDED,
        tg = l.useCallback(() => {
            var e;
            let t = (0, S.fn)(null === (e = e7.current) || void 0 === e ? void 0 : e.parentNode, e7.current);
            null == t ||
                (0, S.rB)(t) ||
                (t.removeEventListener(S.NO, tg),
                ex(!1),
                ev({
                    questId: es.id,
                    event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: eo }
                }));
        }, [es.id, ex, ev, eo]),
        tx = () => {
            null != e7.current &&
                (th(Math.max(e7.current.currentTime - 10, 0)),
                eI === P.rq.ENDED && tE(P.rq.PAUSED),
                eE({
                    questId: es.id,
                    questContent: h.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_BACKWARD
                }));
        },
        t_ = () => {
            if (null == e7.current || !tq) return;
            let e = Math.min(e7.current.currentTime + 10, tu);
            th(e),
                eI !== P.rq.ENDED && e >= e7.current.duration && tE(P.rq.ENDED),
                eE({
                    questId: es.id,
                    questContent: h.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    l.useEffect(() => {
        let e = e7.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tg);
        };
    }, [tg]);
    let th = l.useCallback(
            (e) => {
                null != e7.current && (tv(), eM(!0), ts(!1), (e7.current.currentTime = e), e2(es.id, e, e7.current.duration));
            },
            [e7, e2, es.id, tv]
        ),
        tT = () => {
            if (null != e7.current)
                switch (eI) {
                    case P.rq.ENDED:
                        th(0), tE(P.rq.PLAYING);
                        break;
                    case P.rq.PLAYING:
                        tE(P.rq.PAUSED), tn(P.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tE(P.rq.PLAYING);
                }
        },
        tD = (e) => {
            ta(e);
        },
        tN = (e) => {
            ta((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tI = l.useCallback(() => {
            if (null == e7.current || 0 === e7.current.textTracks.length) return;
            let e = e7.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, y.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tD(n)), (n.onexit = () => tN(n)));
                }
        }, [e7]);
    l.useEffect(() => {
        if (null == e8.current) return;
        let e = e8.current;
        return (
            e.addEventListener('load', tI),
            () => {
                null != e && e.removeEventListener('load', tI);
            }
        );
    }, [e8, tI]);
    let tj = l.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e7.current) || void 0 === t ? void 0 : t.error,
                        l = null === (n = e7.current) || void 0 === n ? void 0 : n.networkState,
                        i = null != e7.current ? (0, L.formatVideoProgressRatio)(e7.current.currentTime, e7.current.duration) : void 0;
                    ev({
                        questId: es.id,
                        event: U.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: i,
                            video_error_type: e,
                            video_asset_id: tc,
                            network_connection_speed: eU,
                            video_session_id: eo,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: l
                        }
                    });
                } catch (e) {}
            },
            [eU, es.id, ev, tc, eo]
        ),
        tA = (e) => {
            if (null != e7.current && eI === P.rq.PLAYING) {
                if ((eP && ey(!1), eq)) {
                    let e = null != eJ.current ? Date.now() - eJ.current : null;
                    ev({
                        questId: es.id,
                        event: U.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: tc,
                            network_connection_speed: eU,
                            duration: e,
                            buffer_index: e0.current,
                            video_session_id: eo
                        }
                    }),
                        ew(!1);
                }
                tE(P.rq.PLAYING);
            }
        };
    l.useEffect(() => {
        if (!ek) return;
        let e = setTimeout(() => {
            eM(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ek]);
    let [{ controlBarAnimSpring: tb }, tL] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: G,
            onStart: () => {
                eX(!1);
            },
            onRest: (e) => {
                1 === e.value && eX(!0);
            }
        })),
        tO = (0, l.useRef)(null),
        [{ captionHeightSpring: tR }, tk] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: G
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tk({
                captionHeightSpring: ef && null != to && null !== (t = null === (e = tO.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e9
            }),
            () => {
                tR.stop();
            }
        );
    }, [ef, tk, e9, to, tR]),
        l.useEffect(
            () => (
                tL({
                    controlBarAnimSpring: tS || eH ? 1 : 0,
                    immediate: e9
                }),
                () => {
                    tb.stop();
                }
            ),
            [tS, tL, e9, eH, tb]
        );
    let tM = eI === P.rq.ENDED,
        tP = l.useMemo(() => (0, A.z)(A.i.VIDEO_PLAYER_THUMBNAIL, es), [es]),
        ty = l.useMemo(() => (0, A.z)(A.i.VIDEO_PLAYER_CAPTION, es), [es]),
        tq = e5 || e1.maxTimestampSec >= (null !== (b = null === (i = e7.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== b ? b : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.P3F, {
            className: Y.videoCont,
            'data-fullscreen': eg,
            tabIndex: -1,
            onMouseEnter: tC,
            onMouseLeave: tf,
            onFocus: tC,
            onBlur: tf,
            children: (0, r.jsxs)('div', {
                className: Y.videoContInnerRelative,
                children: [
                    tM &&
                        ((0, j.e)({ location: B.dr.VIDEO_MODAL })
                            ? (0, r.jsx)(R.Z, {
                                  quest: es,
                                  title: null !== (J = null === (X = es.config.videoMetadata) || void 0 === X ? void 0 : X.messages.videoEndCtaTitle) && void 0 !== J ? J : V.intl.string(V.t.Ka526u),
                                  subtitle: null !== (ee = null === (W = es.config.videoMetadata) || void 0 === W ? void 0 : W.messages.videoEndCtaSubtitle) && void 0 !== ee ? ee : V.intl.string(V.t.tKMcAg),
                                  ctaBtnLabel: null !== (et = null === ($ = es.config.videoMetadata) || void 0 === $ ? void 0 : $.messages.videoEndCtaButtonLabel) && void 0 !== et ? et : V.intl.string(V.t.iiTtpK),
                                  onCTAClick: () => {
                                      eE({
                                          questId: es.id,
                                          questContent: h.jn.VIDEO_MODAL_END_CARD,
                                          questContentCTA: g.jZ.LEARN_MORE,
                                          impressionId: em
                                      }),
                                          (0, T.FE)(es, {
                                              content: h.jn.VIDEO_MODAL_END_CARD,
                                              ctaContent: g.jZ.LEARN_MORE
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
                                          title: null !== (el = null === (en = es.config.videoMetadata) || void 0 === en ? void 0 : en.messages.videoEndCtaTitle) && void 0 !== el ? el : V.intl.string(V.t.iiTtpK),
                                          subtitle: null !== (ei = null === (er = es.config.videoMetadata) || void 0 === er ? void 0 : er.messages.videoEndCtaSubtitle) && void 0 !== ei ? ei : V.intl.string(V.t.mxaHf3),
                                          icon: m.d4D,
                                          className: Y.endScreenPanelRight,
                                          onClick: () => {
                                              eE({
                                                  questId: es.id,
                                                  questContent: h.jn.VIDEO_MODAL,
                                                  questContentCTA: g.jZ.LEARN_MORE
                                              }),
                                                  (0, T.FE)(es, {
                                                      content: h.jn.VIDEO_MODAL,
                                                      ctaContent: g.jZ.LEARN_MORE,
                                                      impressionId: em
                                                  });
                                          }
                                      })
                                  ]
                              })),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (e7.current = e), (eN.current = e);
                        },
                        autoPlay: eu,
                        playsInline: !0,
                        mediaLayoutType: eg ? Z.hV.STATIC : Z.hV.RESPONSIVE,
                        className: s()({
                            [Y.hidden]: tM,
                            [Y.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tP ? void 0 : tP.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != e7.current && (e7.current.currentTime >= eV && (eY(e7.current.currentTime + 6 + 2 * Math.random()), tp(e7.current.currentTime)), e7.current.currentTime >= ez && (eG(e7.current.currentTime + 1), (0, _.qm)(es.id, eL.taskType, e7.current.currentTime), ea(e7.current.currentTime)), e2(es.id, e7.current.currentTime, e7.current.duration), eR((e7.current.currentTime / e7.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != e7.current && (tp(e7.current.duration + 1), e2(es.id, e7.current.duration, e7.current.duration)), tE(P.rq.ENDED), ew(!1);
                        },
                        onLoadedData: (e) => {
                            if (eP) {
                                let e = null != e$.current ? Date.now() - e$.current : null;
                                ev({
                                    questId: es.id,
                                    event: U.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: tc,
                                        network_connection_speed: eU,
                                        duration: e,
                                        video_session_id: eo
                                    }
                                }),
                                    ey(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            null != e7.current && (tl(!0), th(e5 ? e1.timestampSec : Math.max(e1.timestampSec, eL.progressSeconds)), e4 ? (e7.current.volume = 0) : (e7.current.volume = e6));
                        },
                        onLoadStart: () => {
                            (e$.current = Date.now()),
                                ev({
                                    questId: es.id,
                                    event: U.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: tc,
                                        network_connection_speed: eU,
                                        video_session_id: eo,
                                        is_hls_supported: o.ZP.isSupported()
                                    }
                                });
                        },
                        onPlay: () => {
                            if (eW.current) return;
                            let e = performance.now() - ed;
                            (0, I.T)({ quest: es }).info('\u23F0 Video FCP: '.concat(e, 'ms')),
                                ev({
                                    questId: es.id,
                                    event: U.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                    properties: {
                                        duration_ms: e,
                                        video_session_id: eo,
                                        video_asset_id: tc
                                    }
                                }),
                                (eW.current = !0);
                        },
                        onWaiting: (e) => {
                            (eJ.current = Date.now()),
                                (e0.current += 1),
                                ev({
                                    questId: es.id,
                                    event: U.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: tc,
                                        network_connection_speed: eU,
                                        buffer_index: e0.current,
                                        video_session_id: eo
                                    }
                                }),
                                ew(!0);
                        },
                        onProgress: (e) => {
                            if (null == e7.current) return;
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
                        onCanPlay: tA,
                        onCanPlayThrough: tA,
                        onSeeked: () => {
                            ts(!0);
                        },
                        onAbort: () => tj(P.CY.ABORT),
                        onError: () => tj(P.CY.ERROR),
                        onEmptied: () => tj(P.CY.EMPTIED),
                        onStalled: () => tj(P.CY.STALLED),
                        onSuspend: () => tj(P.CY.SUSPEND),
                        onClick: () => {
                            tT();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != ty &&
                                (0, r.jsx)('track', {
                                    ref: e8,
                                    src: ty.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != td &&
                                tc !== A.i.VIDEO_PLAYER_VIDEO_HLS &&
                                (0, r.jsx)('source', {
                                    onError: () => tj(P.CY.SOURCE_ERROR),
                                    src: td.url,
                                    type: td.mimetype
                                })
                        ]
                    }),
                    (eP || eq) &&
                        eI === P.rq.PLAYING &&
                        (0, r.jsx)(m.$jN, {
                            type: m.$jN.Type.WANDERING_CUBES,
                            className: Y.loadingSpinner
                        }),
                    eI === P.rq.PAUSED && tt === P.yE.LOST_FOCUS && (0, r.jsx)(H, {}),
                    ep &&
                        eI !== P.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.P3F, {
                                    onClick: () => eC(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: Y.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: Y.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tb, tR], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(M.K, {
                                        quest: es,
                                        onClose: () => {
                                            eC(!1),
                                                eE({
                                                    questId: es.id,
                                                    questContent: h.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
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
                                    tb.to({
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
                            className: s()(Y.playPausePopCont, {
                                [Y.play]: eI === P.rq.PLAYING,
                                [Y.pause]: eI === P.rq.PAUSED
                            }),
                            children: eI === P.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: Y.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: Y.playPausePopIcon })
                        },
                        eI
                    ),
                    ef &&
                        null != to &&
                        (0, r.jsx)(a.animated.div, {
                            className: Y.captionContainer,
                            ref: tO,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        tb.to({
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
                                children: to.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: Y.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    tb.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    tb.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    tb.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(k.Z, {
                                percent: eO,
                                animate: !0 !== e3.current && !ek,
                                interactionEnabled: e5 && eQ,
                                backgroundColor: tS ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tS ? eF : void 0,
                                duration: null !== (q = null === (d = e7.current) || void 0 === d ? void 0 : d.duration) && void 0 !== q ? q : 1,
                                maxSeekableTime: tS && eQ ? tu : void 0,
                                onClick: (e) => {
                                    th(e), eI === P.rq.ENDED && tE(P.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    tx();
                                },
                                onScrubForward: () => {
                                    t_();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: Y.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            tb.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            tb.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            tb.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(O.Z, {
                                    videoRef: e7,
                                    quest: es,
                                    playerState: eI,
                                    animSpring: tb,
                                    visible: tS,
                                    seekForwardEnabled: tq,
                                    hideCaptionBtn: null == ty,
                                    handlePlaybackBtnClick: tT,
                                    handleTranscriptBtnClick: () => {
                                        ep || (null != te && te.questId === es.id && te.fetchStatus !== D.iF.NONE && te.fetchStatus !== D.iF.FAILURE) || (0, _.lL)(es),
                                            eC(!ep),
                                            eE({
                                                questId: es.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: ep ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        eS(!ef),
                                            eE({
                                                questId: es.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: ef ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !eg,
                                            n = (0, S.fn)(null === (e = e7.current) || void 0 === e ? void 0 : e.parentNode, e7.current);
                                        t && null != n
                                            ? ((0, S.Dj)(n),
                                              n.addEventListener(S.NO, tg),
                                              ev({
                                                  questId: es.id,
                                                  event: U.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: eo }
                                              }))
                                            : t ||
                                              null == n ||
                                              (n.removeEventListener(S.NO, tg),
                                              ev({
                                                  questId: es.id,
                                                  event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: eo }
                                              }),
                                              (0, S.Pr)(n)),
                                            ex(t);
                                    },
                                    handleSeekBackBtnClick: tx,
                                    handleSeekForwardBtnClick: t_,
                                    handleControlBarPendingInteraction: eK
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
