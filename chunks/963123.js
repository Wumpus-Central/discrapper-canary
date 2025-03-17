n.d(t, { Z: () => J }), n(47120), n(653041);
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
    b = n(63063),
    O = n(228488),
    S = n(617136),
    C = n(915750),
    h = n(272008),
    j = n(497505),
    y = n(918701),
    x = n(184299),
    _ = n(347382),
    D = n(5881),
    N = n(208109),
    P = n(720293),
    T = n(602667),
    I = n(341907),
    w = n(881773),
    A = n(350312),
    L = n(355243),
    k = n(106743),
    R = n(223418),
    M = n(604162),
    q = n(747717),
    B = n(281055),
    U = n(920393),
    F = n(46140),
    V = n(642145),
    Z = n(981631),
    Y = n(217702),
    W = n(388032),
    z = n(881382);
function G(e) {
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
let H = new Set([Z.IyS.FIVE_G, Z.IyS.FOUR_G, Z.IyS.UNKNOWN]),
    K = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function Q() {
    let e = (0, u.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: z.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: W.NW.string(W.t.U7Xrb2)
        })
    });
}
function X(e) {
    let { quest: t, shouldShow: n } = e,
        l = o.useMemo(() => (0, P.z)(P.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(T.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: i()(z.stillFrameImageCard, { [z.stillFrameImageCardHidden]: !n })
                  })
          });
}
function $(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        p = () => {
            u(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: i()(z.endScreenPanel, z.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: p,
        onFocus: d,
        onBlur: p,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: z.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: z.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-md/semibold',
                            className: z.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-sm/normal',
                            className: z.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(q.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: z.endScreenIcon
                })
            ]
        })
    });
}
function J(e) {
    var t, n, l, d, E, T, q, J, ee, et, en, er, eo, el, ei, es, ea, ec, eu;
    let { quest: ed, videoSessionId: em, onOptimisticProgressUpdate: ep, autoplay: ev, parentTransitionState: ef, performanceClockStartTime: eE } = e,
        eg = (0, C.aM)(),
        eb = (0, S._F)(),
        eO = (0, S.O5)(),
        eS = (0, x.km)((e) => e.transcriptEnabled),
        eC = (0, x.km)((e) => e.setTranscriptEnabled),
        eh = (0, x.km)((e) => e.captionEnabled),
        ej = (0, x.km)((e) => e.setCaptionEnabled),
        ey = (0, x.km)((e) => e.fullScreenEnabled),
        ex = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: e_, focusedChanged: eD } = (0, B.xU)(),
        { visible: eN, visibleChanged: eP, targetRef: eT } = (0, B.Yy)(),
        [eI, ew] = o.useState(!0 === ev ? R.rq.PLAYING : R.rq.PAUSED),
        [eA, eL] = o.useState(!1),
        ek = (0, y.il)(ed),
        [eR, eM] = o.useState(ek.percentComplete),
        [eq, eB] = o.useState(!1),
        [eU, eF] = o.useState(!0),
        [eV, eZ] = o.useState(!1),
        [eY, eW] = o.useState([]),
        [ez, eG] = o.useState(g.Z.getEffectiveConnectionSpeed()),
        [eH, eK] = o.useState(0),
        [eQ, eX] = o.useState(0),
        [e$, eJ] = o.useState(!1),
        [e0, e1] = o.useState(!1),
        e2 = o.useRef(!0),
        e6 = o.useRef(null),
        e4 = o.useRef(null),
        e8 = (0, o.useRef)(-1),
        e9 = (0, x.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[ed.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        e7 = (0, x.km)((e) => e.setVideoProgress),
        e3 = (0, x.km)((e) => e.muted),
        e5 = (0, x.km)((e) => e.volume),
        te = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        tt = (0, o.useRef)(null),
        tn = (0, o.useRef)(null),
        tr = o.useRef(!0),
        to = (null === (t = ed.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        tl = (0, x.km)((e) => e.transcript),
        [ti, ts] = o.useState(null),
        [ta, tc] = o.useState(!1),
        [tu, td] = o.useState(!1),
        [tm, tp] = o.useState(null),
        tv = to ? (null !== (E = null === (n = tt.current) || void 0 === n ? void 0 : n.duration) && void 0 !== E ? E : 0) : Math.max(e9.maxTimestampSec, ek.progressSeconds),
        { hlsAnalytics: tf, handleHlsSegmentUpdate: tE } = (function () {
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
        tg = to ? (e9.timestampSec >= e9.duration ? 0 : e9.timestampSec) : Math.max(e9.timestampSec, ek.progressSeconds),
        { videoAssetId: tb, videoAsset: tO } = (function (e, t, n, r, l) {
            var i;
            let a = o.useRef(!1),
                c = o.useRef(null),
                u = (0, _.z)(e, F.dr.VIDEO_MODAL),
                d = null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.assets,
                m = o.useMemo(() => (null != d ? (u && s.ZP.isSupported() && null != d.videoPlayerVideoHls ? P.i.VIDEO_PLAYER_VIDEO_HLS : H.has(n) || null == d.videoPlayerVideoLowRes ? P.i.VIDEO_PLAYER_VIDEO : P.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [d, n, u]),
                p = o.useMemo(() => (null != m ? (0, P.z)(m, e) : null), [e, m]),
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
                    if (m !== P.i.VIDEO_PLAYER_VIDEO_HLS || null == p || null == t.current || a.current) return;
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
        })(ed, tt, ez, tE, tg),
        tS = o.useCallback(
            (e) => {
                if (null != tt.current) {
                    var t, n;
                    eb({
                        questId: ed.id,
                        event: Z.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: G(
                            ((t = G({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tb,
                                    quest_completed: to,
                                    video_duration_sec: tt.current.duration,
                                    video_progress: (0, I.formatVideoProgressRatio)(e.segment_end_sec, tt.current.duration),
                                    video_session_id: em
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
                            tf
                        )
                    });
                }
            },
            [eb, ed.id, tb, to, em, tf]
        ),
        { forceSendCurrentSegment: tC } = (0, U.Z)({
            videoRef: tt,
            isPlaying: eI === R.rq.PLAYING,
            isMetadataLoaded: ta,
            isInitialSeekComplete: tu,
            onAnalytics: tS,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        th = o.useCallback(
            (e) => {
                if ((ew(e), null != tt.current))
                    switch (e) {
                        case R.rq.PLAYING:
                            tt.current.play(),
                                eb({
                                    questId: ed.id,
                                    event: Z.rMx.QUEST_VIDEO_RESUMED,
                                    properties: G(
                                        {
                                            video_timestamp_seconds: tt.current.currentTime,
                                            pause_reason: ti,
                                            video_session_id: em
                                        },
                                        tf
                                    )
                                }),
                                ts(null);
                            break;
                        case R.rq.PAUSED:
                            tt.current.pause(), (e2.current = !1), tC();
                            break;
                        case R.rq.ENDED:
                            eC(!1), tC();
                    }
            },
            [eb, ed.id, ti, em, tC, eC, tf]
        );
    (0, p.Ng)(() => {
        tr.current && ((tr.current = !1), eG(g.Z.getEffectiveConnectionSpeed()), to && e9.timestampSec >= e9.duration && e7(ed.id, 0, e9.duration));
    }),
        o.useEffect(() => {
            null != tt.current &&
                null != ti &&
                eb({
                    questId: ed.id,
                    event: Z.rMx.QUEST_VIDEO_PAUSED,
                    properties: G(
                        {
                            video_timestamp_seconds: tt.current.currentTime,
                            reason: ti,
                            video_session_id: em
                        },
                        tf
                    )
                });
        }, [ti, ed.id, eb, em, tf]),
        o.useEffect(() => {
            eD &&
                null != tt.current &&
                eb({
                    questId: ed.id,
                    event: e_ ? Z.rMx.QUEST_VIDEO_APP_FOCUSED : Z.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: tt.current.currentTime,
                        video_state: eI,
                        video_session_id: em
                    }
                });
        }, [e_, eD, eI, ed.id, eb, em]);
    let tj = o.useCallback(
        (e) => {
            var t;
            to || (null === (t = ed.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (0, y.FI)(ed, e),
                null != tt.current &&
                    eb({
                        questId: ed.id,
                        event: Z.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: G(
                            {
                                progress: (0, I.formatVideoProgressRatio)(tt.current.currentTime, tt.current.duration),
                                video_timestamp_seconds: tt.current.currentTime,
                                video_session_id: em
                            },
                            tf
                        )
                    });
        },
        [to, ed, eb, em, tf]
    );
    o.useEffect(() => {
        (ef !== m.Dvm.HIDDEN && ef !== m.Dvm.EXITING && ef !== m.Dvm.EXITED && (null == ef || !eP || eN || to) && (!eD || e_ || to)) || null == tt.current || eI !== R.rq.PLAYING || (th(R.rq.PAUSED), to || ts(R.yE.LOST_FOCUS));
    }, [ef, e_, eD, eN, eP, eI, to, th, tj]);
    let ty = () => {
            eL(!0);
        },
        tx = () => {
            eL(!1);
        },
        t_ = eA || eI === R.rq.PAUSED || eI === R.rq.ENDED,
        tD = o.useCallback(() => {
            var e;
            let t = (0, O.fn)(null === (e = tt.current) || void 0 === e ? void 0 : e.parentNode, tt.current);
            null == t ||
                (0, O.rB)(t) ||
                (t.removeEventListener(O.NO, tD),
                ex(!1),
                eb({
                    questId: ed.id,
                    event: Z.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: em }
                }));
        }, [ed.id, ex, eb, em]),
        tN = () => {
            null != tt.current &&
                (tT(Math.max(tt.current.currentTime - 10, 0)),
                eI === R.rq.ENDED && th(R.rq.PAUSED),
                eO({
                    questId: ed.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_BACKWARD
                }));
        },
        tP = () => {
            if (null == tt.current || !tz) return;
            let e = Math.min(tt.current.currentTime + 10, tv);
            tT(e),
                eI !== R.rq.ENDED && e >= tt.current.duration && th(R.rq.ENDED),
                eO({
                    questId: ed.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = tt.current;
        return () => {
            let t = (0, O.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(O.NO, tD);
        };
    }, [tD]);
    let tT = o.useCallback(
            (e) => {
                null != tt.current && (tC(), eB(!0), td(!1), (tt.current.currentTime = e), e7(ed.id, e, tt.current.duration));
            },
            [tt, e7, ed.id, tC]
        ),
        tI = () => {
            if (null != tt.current)
                switch (eI) {
                    case R.rq.ENDED:
                        tT(0), th(R.rq.PLAYING);
                        break;
                    case R.rq.PLAYING:
                        th(R.rq.PAUSED), ts(R.yE.PAUSE_BUTTON);
                        break;
                    default:
                        th(R.rq.PLAYING);
                }
        },
        tw = (e) => {
            tp(e);
        },
        tA = (e) => {
            tp((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tL = o.useCallback(() => {
            if (null == tt.current || 0 === tt.current.textTracks.length) return;
            let e = tt.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tw(n)), (n.onexit = () => tA(n)));
                }
        }, [tt]);
    o.useEffect(() => {
        if (null == tn.current) return;
        let e = tn.current;
        return (
            e.addEventListener('load', tL),
            () => {
                null != e && e.removeEventListener('load', tL);
            }
        );
    }, [tn, tL]);
    let tk = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = tt.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = tt.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != tt.current ? (0, I.formatVideoProgressRatio)(tt.current.currentTime, tt.current.duration) : void 0;
                    eb({
                        questId: ed.id,
                        event: Z.rMx.QUEST_VIDEO_ERROR,
                        properties: G(
                            {
                                video_progress: l,
                                video_error_type: e,
                                video_asset_id: tb,
                                network_connection_speed: ez,
                                video_session_id: em,
                                video_error_code: null == r ? void 0 : r.code,
                                video_error_message: null == r ? void 0 : r.message,
                                video_network_state: o
                            },
                            tf
                        )
                    });
                } catch (e) {}
            },
            [ez, ed.id, eb, tb, em, tf]
        ),
        tR = (e) => {
            if (null != tt.current && eI === R.rq.PLAYING) {
                if ((eU && eF(!1), eV)) {
                    let e = null != e4.current ? Date.now() - e4.current : null;
                    eb({
                        questId: ed.id,
                        event: Z.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: G(
                            {
                                video_asset_id: tb,
                                network_connection_speed: ez,
                                duration: e,
                                buffer_index: e8.current,
                                video_session_id: em
                            },
                            tf
                        )
                    }),
                        eZ(!1);
                }
                th(R.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!eq) return;
        let e = setTimeout(() => {
            eB(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eq]);
    let [{ controlBarAnimSpring: tM }, tq] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                e1(!1);
            },
            onRest: (e) => {
                1 === e.value && e1(!0);
            }
        })),
        tB = (0, o.useRef)(null),
        [{ captionHeightSpring: tU }, tF] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: K
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tF({
                captionHeightSpring: eh && null != tm && null !== (t = null === (e = tB.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: te
            }),
            () => {
                tU.stop();
            }
        );
    }, [eh, tF, te, tm, tU]),
        o.useEffect(
            () => (
                tq({
                    controlBarAnimSpring: t_ || e$ ? 1 : 0,
                    immediate: te
                }),
                () => {
                    tM.stop();
                }
            ),
            [t_, tq, te, e$, tM]
        );
    let tV = eI === R.rq.ENDED,
        tZ = o.useCallback(
            (e) => {
                if (
                    (eO({
                        questId: ed.id,
                        questContent: e,
                        questContentCTA: S.jZ.LEARN_MORE,
                        impressionId: eg
                    }),
                    ed.id === V.V)
                ) {
                    window.open(b.Z.getArticleURL(Z.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                    return;
                }
                (0, y.FE)(ed, {
                    content: e,
                    ctaContent: S.jZ.LEARN_MORE
                });
            },
            [eg, ed, eO]
        ),
        tY = o.useMemo(() => (0, P.z)(P.i.VIDEO_PLAYER_THUMBNAIL, ed), [ed]),
        tW = o.useMemo(() => (0, P.z)(P.i.VIDEO_PLAYER_CAPTION, ed), [ed]),
        tz = to || e9.maxTimestampSec >= (null !== (T = null === (l = tt.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== T ? T : 0) + 1;
    return (0, r.jsx)(m.P3F, {
        className: z.videoCont,
        'data-fullscreen': ey,
        tabIndex: -1,
        onMouseEnter: ty,
        onMouseLeave: tx,
        onFocus: ty,
        onBlur: tx,
        children: (0, r.jsxs)('div', {
            className: z.videoContInnerRelative,
            children: [
                tV &&
                    ((0, N.e)({ location: F.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(A.Z, {
                              quest: ed,
                              title: null !== (en = null === (J = ed.config.videoMetadata) || void 0 === J ? void 0 : J.messages.videoEndCtaTitle) && void 0 !== en ? en : W.NW.string(W.t.Ka526u),
                              subtitle: null !== (er = null === (ee = ed.config.videoMetadata) || void 0 === ee ? void 0 : ee.messages.videoEndCtaSubtitle) && void 0 !== er ? er : W.NW.string(W.t.tKMcAg),
                              ctaBtnLabel: null !== (eo = null === (et = ed.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaButtonLabel) && void 0 !== eo ? eo : W.NW.string(W.t.iiTtpK),
                              onCTAClick: () => tZ(j.jn.VIDEO_MODAL_END_CARD)
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(X, {
                                      quest: ed,
                                      shouldShow: tV
                                  }),
                                  (0, r.jsx)('div', { className: z.videoContOverlay }),
                                  (0, r.jsx)($, {
                                      title: null !== (ea = null === (el = ed.config.videoMetadata) || void 0 === el ? void 0 : el.messages.videoEndCtaTitle) && void 0 !== ea ? ea : W.NW.string(W.t.iiTtpK),
                                      subtitle: null !== (eu = null !== (ec = null === (ei = ed.config.videoMetadata) || void 0 === ei ? void 0 : ei.messages.videoEndCtaButtonLabel) && void 0 !== ec ? ec : null === (es = ed.config.videoMetadata) || void 0 === es ? void 0 : es.messages.videoEndCtaSubtitle) && void 0 !== eu ? eu : W.NW.string(W.t.mxaHf3),
                                      icon: m.d4D,
                                      className: z.endScreenPanelRight,
                                      onClick: () => tZ(j.jn.VIDEO_MODAL)
                                  })
                              ]
                          })),
                (0, r.jsxs)(f.Z, {
                    ref: (e) => {
                        (tt.current = e), (eT.current = e);
                    },
                    autoPlay: ev,
                    playsInline: !0,
                    mediaLayoutType: ey ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: tV,
                        [z.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tY ? void 0 : tY.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != tt.current && (tt.current.currentTime >= eH && (eK(tt.current.currentTime + 6 + 2 * Math.random()), tj(tt.current.currentTime)), tt.current.currentTime >= eQ && (eX(tt.current.currentTime + 1), (0, h.qm)(ed.id, ek.taskType, tt.current.currentTime), ep(tt.current.currentTime)), e7(ed.id, tt.current.currentTime, tt.current.duration), eM((tt.current.currentTime / tt.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != tt.current && (tj(tt.current.duration + 1), e7(ed.id, tt.current.duration, tt.current.duration)), th(R.rq.ENDED), eZ(!1);
                    },
                    onLoadedData: (e) => {
                        if (eU) {
                            let e = null != e6.current ? Date.now() - e6.current : null;
                            eb({
                                questId: ed.id,
                                event: Z.rMx.QUEST_VIDEO_LOADING_ENDED,
                                properties: G(
                                    {
                                        video_asset_id: tb,
                                        network_connection_speed: ez,
                                        duration: e,
                                        video_session_id: em
                                    },
                                    tf
                                )
                            }),
                                eF(!1);
                        }
                    },
                    onLoadedMetadata: (e) => {
                        null != tt.current && (tc(!0), tb !== P.i.VIDEO_PLAYER_VIDEO_HLS && tT(tg), e3 ? (tt.current.volume = 0) : (tt.current.volume = e5));
                    },
                    onLoadStart: () => {
                        (e6.current = Date.now()),
                            eb({
                                questId: ed.id,
                                event: Z.rMx.QUEST_VIDEO_LOADING_STARTED,
                                properties: G(
                                    {
                                        video_asset_id: tb,
                                        network_connection_speed: ez,
                                        video_session_id: em,
                                        is_hls_supported: s.ZP.isSupported()
                                    },
                                    tf
                                )
                            });
                    },
                    onPlaying: () => {
                        if (!e2.current) return;
                        let e = performance.now() - eE;
                        (0, D.T)({ quest: ed }).info('\u23F0 Video FCP: '.concat(e, 'ms')),
                            eb({
                                questId: ed.id,
                                event: Z.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: G(
                                    {
                                        duration_ms: e,
                                        video_session_id: em,
                                        video_asset_id: tb
                                    },
                                    tf
                                )
                            }),
                            (e2.current = !1);
                    },
                    onWaiting: (e) => {
                        (e4.current = Date.now()),
                            (e8.current += 1),
                            eb({
                                questId: ed.id,
                                event: Z.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                properties: G(
                                    {
                                        video_asset_id: tb,
                                        network_connection_speed: ez,
                                        buffer_index: e8.current,
                                        video_session_id: em
                                    },
                                    tf
                                )
                            }),
                            eZ(!0);
                    },
                    onProgress: (e) => {
                        if (null == tt.current) return;
                        let t = [];
                        for (let e = 0; e < tt.current.buffered.length; e++) {
                            let n = tt.current.buffered.start(e),
                                r = tt.current.buffered.end(e);
                            !(r - n < 1) &&
                                t.push({
                                    start: n / tt.current.duration,
                                    size: (r - n) / tt.current.duration
                                });
                        }
                        eW(t);
                    },
                    onCanPlay: tR,
                    onCanPlayThrough: tR,
                    onSeeked: () => {
                        td(!0);
                    },
                    onAbort: () => tk(R.CY.ABORT),
                    onError: () => tk(R.CY.ERROR),
                    onEmptied: () => tk(R.CY.EMPTIED),
                    onStalled: () => tk(R.CY.STALLED),
                    onSuspend: () => tk(R.CY.SUSPEND),
                    onClick: () => {
                        tI();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tW &&
                            (0, r.jsx)('track', {
                                ref: tn,
                                src: tW.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tO &&
                            tb !== P.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tk(R.CY.SOURCE_ERROR),
                                src: tO.url,
                                type: tO.mimetype
                            })
                    ]
                }),
                (eU || eV) &&
                    eI === R.rq.PLAYING &&
                    (0, r.jsx)(m.$jN, {
                        type: m.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner
                    }),
                eI === R.rq.PAUSED && ti === R.yE.LOST_FOCUS && (0, r.jsx)(Q, {}),
                eS &&
                    eI !== R.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.P3F, {
                                onClick: () => eC(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: z.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: z.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([tM, tU], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(k.K, {
                                    quest: ed,
                                    onClose: () => {
                                        eC(!1),
                                            eO({
                                                questId: ed.id,
                                                questContent: j.jn.VIDEO_MODAL,
                                                questContentCTA: S.jZ.TRANSCRIPT_DISABLE
                                            });
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: z.videoFooterContGradient,
                    style: {
                        opacity: (0, a.to)(
                            [
                                tM.to({
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
                        className: i()(z.playPausePopCont, {
                            [z.play]: eI === R.rq.PLAYING,
                            [z.pause]: eI === R.rq.PAUSED
                        }),
                        children: eI === R.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: z.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: z.playPausePopIcon })
                    },
                    eI
                ),
                eh &&
                    null != tm &&
                    (0, r.jsx)(a.animated.div, {
                        className: z.captionContainer,
                        ref: tB,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tM.to({
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
                            className: z.captionText,
                            children: tm.text
                        })
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: z.videoFooterCont,
                    style: {
                        paddingLeft: (0, a.to)(
                            [
                                tM.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, a.to)(
                            [
                                tM.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, a.to)(
                            [
                                tM.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(L.Z, {
                            percent: eR,
                            animate: !0 !== tr.current && !eq,
                            interactionEnabled: to && e0,
                            backgroundColor: t_ ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: t_ ? eY : void 0,
                            duration: null !== (q = null === (d = tt.current) || void 0 === d ? void 0 : d.duration) && void 0 !== q ? q : 1,
                            maxSeekableTime: t_ && e0 ? tv : void 0,
                            onClick: (e) => {
                                tT(e), eI === R.rq.ENDED && th(R.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tN();
                            },
                            onScrubForward: () => {
                                tP();
                            }
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: z.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tM.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tM.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tM.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(w.Z, {
                                videoRef: tt,
                                quest: ed,
                                playerState: eI,
                                animSpring: tM,
                                visible: t_,
                                seekForwardEnabled: tz,
                                hideCaptionBtn: null == tW,
                                handlePlaybackBtnClick: tI,
                                handleTranscriptBtnClick: () => {
                                    eS || (null != tl && tl.questId === ed.id && tl.fetchStatus !== x.iF.NONE && tl.fetchStatus !== x.iF.FAILURE) || (0, h.lL)(ed),
                                        eC(!eS),
                                        eO({
                                            questId: ed.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eS ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE
                                        });
                                },
                                handleCaptionBtnClick: () => {
                                    ej(!eh),
                                        eO({
                                            questId: ed.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eh ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE
                                        });
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ey,
                                        n = (0, O.fn)(null === (e = tt.current) || void 0 === e ? void 0 : e.parentNode, tt.current);
                                    t && null != n
                                        ? ((0, O.Dj)(n),
                                          n.addEventListener(O.NO, tD),
                                          eb({
                                              questId: ed.id,
                                              event: Z.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                              properties: { video_session_id: em }
                                          }))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(O.NO, tD),
                                          eb({
                                              questId: ed.id,
                                              event: Z.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                              properties: { video_session_id: em }
                                          }),
                                          (0, O.Pr)(n)),
                                        ex(t);
                                },
                                handleSeekBackBtnClick: tN,
                                handleSeekForwardBtnClick: tP,
                                handleControlBarPendingInteraction: eJ
                            })
                        })
                    ]
                })
            ]
        })
    });
}
