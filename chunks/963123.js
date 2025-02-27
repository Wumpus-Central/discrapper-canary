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
    O = n(228488),
    b = n(617136),
    S = n(915750),
    C = n(272008),
    j = n(497505),
    h = n(918701),
    y = n(184299),
    _ = n(347382),
    x = n(5881),
    D = n(208109),
    N = n(720293),
    P = n(602667),
    T = n(341907),
    I = n(881773),
    A = n(350312),
    w = n(355243),
    L = n(106743),
    R = n(223418),
    k = n(604162),
    M = n(747717),
    q = n(281055),
    B = n(920393),
    F = n(46140),
    U = n(981631),
    V = n(217702),
    Z = n(388032),
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
            children: Z.NW.string(Z.t.U7Xrb2)
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
    var t, n, l, d, E, P, M, X, $, J, ee, et, en, er, eo, el, ei, es, ea;
    let { quest: ec, videoSessionId: eu, onOptimisticProgressUpdate: ed, autoplay: em, parentTransitionState: ep, startTime: ev } = e,
        ef = (0, S.aM)(),
        eE = (0, b._F)(),
        eg = (0, b.O5)(),
        eO = (0, y.km)((e) => e.transcriptEnabled),
        eb = (0, y.km)((e) => e.setTranscriptEnabled),
        eS = (0, y.km)((e) => e.captionEnabled),
        eC = (0, y.km)((e) => e.setCaptionEnabled),
        ej = (0, y.km)((e) => e.fullScreenEnabled),
        eh = (0, y.km)((e) => e.setFullScreenEnabled),
        { focused: ey, focusedChanged: e_ } = (0, q.xU)(),
        { visible: ex, visibleChanged: eD, targetRef: eN } = (0, q.Yy)(),
        [eP, eT] = o.useState(!0 === em ? R.rq.PLAYING : R.rq.PAUSED),
        [eI, eA] = o.useState(!1),
        ew = (0, h.il)(ec),
        [eL, eR] = o.useState(ew.percentComplete),
        [ek, eM] = o.useState(!1),
        [eq, eB] = o.useState(!0),
        [eF, eU] = o.useState(!1),
        [eV, eZ] = o.useState([]),
        [eY, eW] = o.useState(g.Z.getEffectiveConnectionSpeed()),
        [ez, eG] = o.useState(0),
        [eH, eK] = o.useState(0),
        [eQ, eX] = o.useState(!1),
        [e$, eJ] = o.useState(!1),
        e0 = o.useRef(!0),
        e1 = o.useRef(null),
        e2 = o.useRef(null),
        e6 = (0, o.useRef)(-1),
        e4 = (0, y.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[ec.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        e7 = (0, y.km)((e) => e.setVideoProgress),
        e8 = (0, y.km)((e) => e.muted),
        e9 = (0, y.km)((e) => e.volume),
        e3 = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        e5 = (0, o.useRef)(null),
        te = (0, o.useRef)(null),
        tt = o.useRef(!0),
        tn = (null === (t = ec.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        tr = (0, y.km)((e) => e.transcript),
        [to, tl] = o.useState(null),
        [ti, ts] = o.useState(!1),
        [ta, tc] = o.useState(!1),
        [tu, td] = o.useState(null),
        tm = tn ? (null !== (E = null === (n = e5.current) || void 0 === n ? void 0 : n.duration) && void 0 !== E ? E : 0) : Math.max(e4.maxTimestampSec, ew.progressSeconds),
        { hlsAnalytics: tp, handleHlsSegmentUpdate: tv } = (function () {
            let [e, t] = o.useState({
                levelIndex: -100,
                resWidth: -100,
                resHeight: -100
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
        tf = tn ? e4.timestampSec : Math.max(e4.timestampSec, ew.progressSeconds),
        { videoAssetId: tE, videoAsset: tg } = (function (e, t, n, r, l) {
            var i;
            let a = o.useRef(!1),
                c = o.useRef(null),
                u = (0, _.z)(e, F.dr.VIDEO_MODAL),
                d = null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.assets,
                m = o.useMemo(() => (null != d ? (u && s.ZP.isSupported() && null != d.videoPlayerVideoHls ? N.i.VIDEO_PLAYER_VIDEO_HLS : z.has(n) || null == d.videoPlayerVideoLowRes ? N.i.VIDEO_PLAYER_VIDEO : N.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [d, n, u]),
                p = o.useMemo(() => (null != m ? (0, N.z)(m, e) : null), [e, m]),
                v = o.useCallback(
                    (e, t) => {
                        null != c.current &&
                            (c.current.levels.length <= t.level ||
                                r({
                                    levelIndex: t.level,
                                    resWidth: c.current.levels[t.level].width,
                                    resHeight: c.current.levels[t.level].height
                                }));
                    },
                    [r]
                );
            return (
                o.useEffect(() => {
                    if (m !== N.i.VIDEO_PLAYER_VIDEO_HLS || null == p || null == t.current || a.current) return;
                    (c.current = new s.ZP({
                        maxBufferLength: 15,
                        startPosition: l,
                        startFragPrefetch: !0
                    })),
                        c.current.loadSource(p.url),
                        c.current.attachMedia(t.current),
                        c.current.on(s.ZP.Events.LEVEL_SWITCHED, v),
                        (a.current = !0);
                    let e = c.current;
                    return () => {
                        null != e && e.off(s.ZP.Events.LEVEL_SWITCHED, v);
                    };
                }, [p, m, t, v, l]),
                {
                    videoAssetId: m,
                    videoAsset: p,
                    hlsRef: c
                }
            );
        })(ec, e5, eY, tv, tf),
        tO = o.useCallback(
            (e) => {
                if (null != e5.current) {
                    var t, n;
                    eE({
                        questId: ec.id,
                        event: U.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: W(
                            ((t = W({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tE,
                                    quest_completed: tn,
                                    video_duration_sec: e5.current.duration,
                                    video_progress: (0, T.formatVideoProgressRatio)(e.segment_end_sec, e5.current.duration),
                                    video_session_id: eu
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
                            tp
                        )
                    });
                }
            },
            [eE, ec.id, tE, tn, eu, tp]
        ),
        { forceSendCurrentSegment: tb } = (0, B.Z)({
            videoRef: e5,
            isPlaying: eP === R.rq.PLAYING,
            isMetadataLoaded: ti,
            isInitialSeekComplete: ta,
            onAnalytics: tO,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tS = o.useCallback(
            (e) => {
                if ((eT(e), null != e5.current))
                    switch (e) {
                        case R.rq.PLAYING:
                            e5.current.play(),
                                eE({
                                    questId: ec.id,
                                    event: U.rMx.QUEST_VIDEO_RESUMED,
                                    properties: W(
                                        {
                                            video_timestamp_seconds: e5.current.currentTime,
                                            pause_reason: to,
                                            video_session_id: eu
                                        },
                                        tp
                                    )
                                }),
                                tl(null);
                            break;
                        case R.rq.PAUSED:
                            e5.current.pause(), (e0.current = !1), tb();
                            break;
                        case R.rq.ENDED:
                            eb(!1), tb();
                    }
            },
            [eE, ec.id, to, eu, tb, eb, tp]
        );
    (0, p.Ng)(() => {
        tt.current && ((tt.current = !1), eW(g.Z.getEffectiveConnectionSpeed()), tn && e4.timestampSec >= e4.duration && e7(ec.id, 0, e4.duration));
    }),
        o.useEffect(() => {
            null != e5.current &&
                null != to &&
                eE({
                    questId: ec.id,
                    event: U.rMx.QUEST_VIDEO_PAUSED,
                    properties: W(
                        {
                            video_timestamp_seconds: e5.current.currentTime,
                            reason: to,
                            video_session_id: eu
                        },
                        tp
                    )
                });
        }, [to, ec.id, eE, eu, tp]),
        o.useEffect(() => {
            e_ &&
                null != e5.current &&
                eE({
                    questId: ec.id,
                    event: ey ? U.rMx.QUEST_VIDEO_APP_FOCUSED : U.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e5.current.currentTime,
                        video_state: eP,
                        video_session_id: eu
                    }
                });
        }, [ey, e_, eP, ec.id, eE, eu]);
    let tC = o.useCallback(
        (e) => {
            var t;
            tn || (null === (t = ec.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (0, h.FI)(ec, e),
                null != e5.current &&
                    eE({
                        questId: ec.id,
                        event: U.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: W(
                            {
                                progress: (0, T.formatVideoProgressRatio)(e5.current.currentTime, e5.current.duration),
                                video_timestamp_seconds: e5.current.currentTime,
                                video_session_id: eu
                            },
                            tp
                        )
                    });
        },
        [tn, ec, eE, eu, tp]
    );
    o.useEffect(() => {
        (ep !== m.Dvm.HIDDEN && ep !== m.Dvm.EXITING && ep !== m.Dvm.EXITED && (null == ep || !eD || ex || tn) && (!e_ || ey || tn)) || null == e5.current || eP !== R.rq.PLAYING || (tS(R.rq.PAUSED), tn || tl(R.yE.LOST_FOCUS));
    }, [ep, ey, e_, ex, eD, eP, tn, tS, tC]);
    let tj = () => {
            eA(!0);
        },
        th = () => {
            eA(!1);
        },
        ty = eI || eP === R.rq.PAUSED || eP === R.rq.ENDED,
        t_ = o.useCallback(() => {
            var e;
            let t = (0, O.fn)(null === (e = e5.current) || void 0 === e ? void 0 : e.parentNode, e5.current);
            null == t ||
                (0, O.rB)(t) ||
                (t.removeEventListener(O.NO, t_),
                eh(!1),
                eE({
                    questId: ec.id,
                    event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: eu }
                }));
        }, [ec.id, eh, eE, eu]),
        tx = () => {
            null != e5.current &&
                (tN(Math.max(e5.current.currentTime - 10, 0)),
                eP === R.rq.ENDED && tS(R.rq.PAUSED),
                eg({
                    questId: ec.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: b.jZ.SEEK_BACKWARD
                }));
        },
        tD = () => {
            if (null == e5.current || !tZ) return;
            let e = Math.min(e5.current.currentTime + 10, tm);
            tN(e),
                eP !== R.rq.ENDED && e >= e5.current.duration && tS(R.rq.ENDED),
                eg({
                    questId: ec.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: b.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = e5.current;
        return () => {
            let t = (0, O.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(O.NO, t_);
        };
    }, [t_]);
    let tN = o.useCallback(
            (e) => {
                null != e5.current && (tb(), eM(!0), tc(!1), (e5.current.currentTime = e), e7(ec.id, e, e5.current.duration));
            },
            [e5, e7, ec.id, tb]
        ),
        tP = () => {
            if (null != e5.current)
                switch (eP) {
                    case R.rq.ENDED:
                        tN(0), tS(R.rq.PLAYING);
                        break;
                    case R.rq.PLAYING:
                        tS(R.rq.PAUSED), tl(R.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tS(R.rq.PLAYING);
                }
        },
        tT = (e) => {
            td(e);
        },
        tI = (e) => {
            td((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tA = o.useCallback(() => {
            if (null == e5.current || 0 === e5.current.textTracks.length) return;
            let e = e5.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, k.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tT(n)), (n.onexit = () => tI(n)));
                }
        }, [e5]);
    o.useEffect(() => {
        if (null == te.current) return;
        let e = te.current;
        return (
            e.addEventListener('load', tA),
            () => {
                null != e && e.removeEventListener('load', tA);
            }
        );
    }, [te, tA]);
    let tw = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e5.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = e5.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != e5.current ? (0, T.formatVideoProgressRatio)(e5.current.currentTime, e5.current.duration) : void 0;
                    eE({
                        questId: ec.id,
                        event: U.rMx.QUEST_VIDEO_ERROR,
                        properties: W(
                            {
                                video_progress: l,
                                video_error_type: e,
                                video_asset_id: tE,
                                network_connection_speed: eY,
                                video_session_id: eu,
                                video_error_code: null == r ? void 0 : r.code,
                                video_error_message: null == r ? void 0 : r.message,
                                video_network_state: o
                            },
                            tp
                        )
                    });
                } catch (e) {}
            },
            [eY, ec.id, eE, tE, eu, tp]
        ),
        tL = (e) => {
            if (null != e5.current && eP === R.rq.PLAYING) {
                if ((eq && eB(!1), eF)) {
                    let e = null != e2.current ? Date.now() - e2.current : null;
                    eE({
                        questId: ec.id,
                        event: U.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: W(
                            {
                                video_asset_id: tE,
                                network_connection_speed: eY,
                                duration: e,
                                buffer_index: e6.current,
                                video_session_id: eu
                            },
                            tp
                        )
                    }),
                        eU(!1);
                }
                tS(R.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!ek) return;
        let e = setTimeout(() => {
            eM(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ek]);
    let [{ controlBarAnimSpring: tR }, tk] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: G,
            onStart: () => {
                eJ(!1);
            },
            onRest: (e) => {
                1 === e.value && eJ(!0);
            }
        })),
        tM = (0, o.useRef)(null),
        [{ captionHeightSpring: tq }, tB] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: G
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tB({
                captionHeightSpring: eS && null != tu && null !== (t = null === (e = tM.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e3
            }),
            () => {
                tq.stop();
            }
        );
    }, [eS, tB, e3, tu, tq]),
        o.useEffect(
            () => (
                tk({
                    controlBarAnimSpring: ty || eQ ? 1 : 0,
                    immediate: e3
                }),
                () => {
                    tR.stop();
                }
            ),
            [ty, tk, e3, eQ, tR]
        );
    let tF = eP === R.rq.ENDED,
        tU = o.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, ec), [ec]),
        tV = o.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_CAPTION, ec), [ec]),
        tZ = tn || e4.maxTimestampSec >= (null !== (P = null === (l = e5.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== P ? P : 0) + 1;
    return (0, r.jsx)(m.P3F, {
        className: Y.videoCont,
        'data-fullscreen': ej,
        tabIndex: -1,
        onMouseEnter: tj,
        onMouseLeave: th,
        onFocus: tj,
        onBlur: th,
        children: (0, r.jsxs)('div', {
            className: Y.videoContInnerRelative,
            children: [
                tF &&
                    ((0, D.e)({ location: F.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(A.Z, {
                              quest: ec,
                              title: null !== (ee = null === (X = ec.config.videoMetadata) || void 0 === X ? void 0 : X.messages.videoEndCtaTitle) && void 0 !== ee ? ee : Z.NW.string(Z.t.Ka526u),
                              subtitle: null !== (et = null === ($ = ec.config.videoMetadata) || void 0 === $ ? void 0 : $.messages.videoEndCtaSubtitle) && void 0 !== et ? et : Z.NW.string(Z.t.tKMcAg),
                              ctaBtnLabel: null !== (en = null === (J = ec.config.videoMetadata) || void 0 === J ? void 0 : J.messages.videoEndCtaButtonLabel) && void 0 !== en ? en : Z.NW.string(Z.t.iiTtpK),
                              onCTAClick: () => {
                                  eg({
                                      questId: ec.id,
                                      questContent: j.jn.VIDEO_MODAL_END_CARD,
                                      questContentCTA: b.jZ.LEARN_MORE,
                                      impressionId: ef
                                  }),
                                      (0, h.FE)(ec, {
                                          content: j.jn.VIDEO_MODAL_END_CARD,
                                          ctaContent: b.jZ.LEARN_MORE
                                      });
                              }
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(K, {
                                      quest: ec,
                                      shouldShow: tF
                                  }),
                                  (0, r.jsx)('div', { className: Y.videoContOverlay }),
                                  (0, r.jsx)(Q, {
                                      title: null !== (ei = null === (er = ec.config.videoMetadata) || void 0 === er ? void 0 : er.messages.videoEndCtaTitle) && void 0 !== ei ? ei : Z.NW.string(Z.t.iiTtpK),
                                      subtitle: null !== (ea = null !== (es = null === (eo = ec.config.videoMetadata) || void 0 === eo ? void 0 : eo.messages.videoEndCtaButtonLabel) && void 0 !== es ? es : null === (el = ec.config.videoMetadata) || void 0 === el ? void 0 : el.messages.videoEndCtaSubtitle) && void 0 !== ea ? ea : Z.NW.string(Z.t.mxaHf3),
                                      icon: m.d4D,
                                      className: Y.endScreenPanelRight,
                                      onClick: () => {
                                          eg({
                                              questId: ec.id,
                                              questContent: j.jn.VIDEO_MODAL,
                                              questContentCTA: b.jZ.LEARN_MORE
                                          }),
                                              (0, h.FE)(ec, {
                                                  content: j.jn.VIDEO_MODAL,
                                                  ctaContent: b.jZ.LEARN_MORE,
                                                  impressionId: ef
                                              });
                                      }
                                  })
                              ]
                          })),
                (0, r.jsxs)(f.Z, {
                    ref: (e) => {
                        (e5.current = e), (eN.current = e);
                    },
                    autoPlay: em,
                    playsInline: !0,
                    mediaLayoutType: ej ? V.hV.STATIC : V.hV.RESPONSIVE,
                    className: i()({
                        [Y.hidden]: tF,
                        [Y.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tU ? void 0 : tU.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != e5.current && (e5.current.currentTime >= ez && (eG(e5.current.currentTime + 6 + 2 * Math.random()), tC(e5.current.currentTime)), e5.current.currentTime >= eH && (eK(e5.current.currentTime + 1), (0, C.qm)(ec.id, ew.taskType, e5.current.currentTime), ed(e5.current.currentTime)), e7(ec.id, e5.current.currentTime, e5.current.duration), eR((e5.current.currentTime / e5.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != e5.current && (tC(e5.current.duration + 1), e7(ec.id, e5.current.duration, e5.current.duration)), tS(R.rq.ENDED), eU(!1);
                    },
                    onLoadedData: (e) => {
                        if (eq) {
                            let e = null != e1.current ? Date.now() - e1.current : null;
                            eE({
                                questId: ec.id,
                                event: U.rMx.QUEST_VIDEO_LOADING_ENDED,
                                properties: W(
                                    {
                                        video_asset_id: tE,
                                        network_connection_speed: eY,
                                        duration: e,
                                        video_session_id: eu
                                    },
                                    tp
                                )
                            }),
                                eB(!1);
                        }
                    },
                    onLoadedMetadata: (e) => {
                        null != e5.current && (ts(!0), tE !== N.i.VIDEO_PLAYER_VIDEO_HLS && tN(tf), e8 ? (e5.current.volume = 0) : (e5.current.volume = e9));
                    },
                    onLoadStart: () => {
                        (e1.current = Date.now()),
                            eE({
                                questId: ec.id,
                                event: U.rMx.QUEST_VIDEO_LOADING_STARTED,
                                properties: W(
                                    {
                                        video_asset_id: tE,
                                        network_connection_speed: eY,
                                        video_session_id: eu,
                                        is_hls_supported: s.ZP.isSupported()
                                    },
                                    tp
                                )
                            });
                    },
                    onPlaying: () => {
                        if (!e0.current) return;
                        let e = performance.now() - ev;
                        (0, x.T)({ quest: ec }).info('\u23F0 Video FCP: '.concat(e, 'ms')),
                            eE({
                                questId: ec.id,
                                event: U.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: W(
                                    {
                                        duration_ms: e,
                                        video_session_id: eu,
                                        video_asset_id: tE
                                    },
                                    tp
                                )
                            }),
                            (e0.current = !1);
                    },
                    onWaiting: (e) => {
                        (e2.current = Date.now()),
                            (e6.current += 1),
                            eE({
                                questId: ec.id,
                                event: U.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                properties: W(
                                    {
                                        video_asset_id: tE,
                                        network_connection_speed: eY,
                                        buffer_index: e6.current,
                                        video_session_id: eu
                                    },
                                    tp
                                )
                            }),
                            eU(!0);
                    },
                    onProgress: (e) => {
                        if (null == e5.current) return;
                        let t = [];
                        for (let e = 0; e < e5.current.buffered.length; e++) {
                            let n = e5.current.buffered.start(e),
                                r = e5.current.buffered.end(e);
                            !(r - n < 1) &&
                                t.push({
                                    start: n / e5.current.duration,
                                    size: (r - n) / e5.current.duration
                                });
                        }
                        eZ(t);
                    },
                    onCanPlay: tL,
                    onCanPlayThrough: tL,
                    onSeeked: () => {
                        tc(!0);
                    },
                    onAbort: () => tw(R.CY.ABORT),
                    onError: () => tw(R.CY.ERROR),
                    onEmptied: () => tw(R.CY.EMPTIED),
                    onStalled: () => tw(R.CY.STALLED),
                    onSuspend: () => tw(R.CY.SUSPEND),
                    onClick: () => {
                        tP();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tV &&
                            (0, r.jsx)('track', {
                                ref: te,
                                src: tV.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tg &&
                            tE !== N.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tw(R.CY.SOURCE_ERROR),
                                src: tg.url,
                                type: tg.mimetype
                            })
                    ]
                }),
                (eq || eF) &&
                    eP === R.rq.PLAYING &&
                    (0, r.jsx)(m.$jN, {
                        type: m.$jN.Type.WANDERING_CUBES,
                        className: Y.loadingSpinner
                    }),
                eP === R.rq.PAUSED && to === R.yE.LOST_FOCUS && (0, r.jsx)(H, {}),
                eO &&
                    eP !== R.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.P3F, {
                                onClick: () => eb(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: Y.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: Y.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([tR, tq], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(L.K, {
                                    quest: ec,
                                    onClose: () => {
                                        eb(!1),
                                            eg({
                                                questId: ec.id,
                                                questContent: j.jn.VIDEO_MODAL,
                                                questContentCTA: b.jZ.TRANSCRIPT_DISABLE
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
                                tR.to({
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
                            [Y.play]: eP === R.rq.PLAYING,
                            [Y.pause]: eP === R.rq.PAUSED
                        }),
                        children: eP === R.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: Y.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: Y.playPausePopIcon })
                    },
                    eP
                ),
                eS &&
                    null != tu &&
                    (0, r.jsx)(a.animated.div, {
                        className: Y.captionContainer,
                        ref: tM,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tR.to({
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
                            children: tu.text
                        })
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: Y.videoFooterCont,
                    style: {
                        paddingLeft: (0, a.to)(
                            [
                                tR.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, a.to)(
                            [
                                tR.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, a.to)(
                            [
                                tR.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(w.Z, {
                            percent: eL,
                            animate: !0 !== tt.current && !ek,
                            interactionEnabled: tn && e$,
                            backgroundColor: ty ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: ty ? eV : void 0,
                            duration: null !== (M = null === (d = e5.current) || void 0 === d ? void 0 : d.duration) && void 0 !== M ? M : 1,
                            maxSeekableTime: ty && e$ ? tm : void 0,
                            onClick: (e) => {
                                tN(e), eP === R.rq.ENDED && tS(R.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tx();
                            },
                            onScrubForward: () => {
                                tD();
                            }
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: Y.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tR.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tR.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tR.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(I.Z, {
                                videoRef: e5,
                                quest: ec,
                                playerState: eP,
                                animSpring: tR,
                                visible: ty,
                                seekForwardEnabled: tZ,
                                hideCaptionBtn: null == tV,
                                handlePlaybackBtnClick: tP,
                                handleTranscriptBtnClick: () => {
                                    eO || (null != tr && tr.questId === ec.id && tr.fetchStatus !== y.iF.NONE && tr.fetchStatus !== y.iF.FAILURE) || (0, C.lL)(ec),
                                        eb(!eO),
                                        eg({
                                            questId: ec.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eO ? b.jZ.TRANSCRIPT_DISABLE : b.jZ.TRANSCRIPT_ENABLE
                                        });
                                },
                                handleCaptionBtnClick: () => {
                                    eC(!eS),
                                        eg({
                                            questId: ec.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eS ? b.jZ.CLOSED_CAPTIONING_DISABLE : b.jZ.CLOSED_CAPTIONING_ENABLE
                                        });
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ej,
                                        n = (0, O.fn)(null === (e = e5.current) || void 0 === e ? void 0 : e.parentNode, e5.current);
                                    t && null != n
                                        ? ((0, O.Dj)(n),
                                          n.addEventListener(O.NO, t_),
                                          eE({
                                              questId: ec.id,
                                              event: U.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                              properties: { video_session_id: eu }
                                          }))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(O.NO, t_),
                                          eE({
                                              questId: ec.id,
                                              event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                              properties: { video_session_id: eu }
                                          }),
                                          (0, O.Pr)(n)),
                                        eh(t);
                                },
                                handleSeekBackBtnClick: tx,
                                handleSeekForwardBtnClick: tD,
                                handleControlBarPendingInteraction: eX
                            })
                        })
                    ]
                })
            ]
        })
    });
}
