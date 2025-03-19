n.d(t, { Z: () => ee }), n(47120), n(653041);
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
    _ = n(184299),
    x = n(347382),
    N = n(5881),
    D = n(208109),
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
    F = n(920393),
    U = n(46140),
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
    var t, n, l, d, E, T, q, ee, et, en, er, eo, el, ei, es, ea, ec, eu, ed;
    let { quest: em, videoSessionId: ep, onOptimisticProgressUpdate: ev, autoplay: ef, parentTransitionState: eE, performanceClockStartTime: eg } = e,
        eb = (0, C.aM)(),
        eO = (0, S._F)(),
        eS = (0, S.O5)(),
        eC = (0, _.km)((e) => e.transcriptEnabled),
        eh = (0, _.km)((e) => e.setTranscriptEnabled),
        ej = (0, _.km)((e) => e.captionEnabled),
        ey = (0, _.km)((e) => e.setCaptionEnabled),
        e_ = (0, _.km)((e) => e.fullScreenEnabled),
        ex = (0, _.km)((e) => e.setFullScreenEnabled),
        { focused: eN, focusedChanged: eD } = (0, B.xU)(),
        { visible: eP, visibleChanged: eT, targetRef: eI } = (0, B.Yy)(),
        [ew, eA] = o.useState(!0 === ef ? R.rq.PLAYING : R.rq.PAUSED),
        [eL, ek] = o.useState(!1),
        eR = (0, y.il)(em),
        [eM, eq] = o.useState(eR.percentComplete),
        [eB, eF] = o.useState(!1),
        [eU, eV] = o.useState(!0),
        [eZ, eY] = o.useState(!1),
        [eW, ez] = o.useState([]),
        [eG, eH] = o.useState(g.Z.getEffectiveConnectionSpeed()),
        [eK, eQ] = o.useState(0),
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
        tt = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        tn = (0, o.useRef)(null),
        tr = (0, o.useRef)(null),
        to = o.useRef(!0),
        tl = (null === (t = em.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        ti = (0, _.km)((e) => e.transcript),
        [ts, ta] = o.useState(null),
        [tc, tu] = o.useState(!1),
        [td, tm] = o.useState(!1),
        [tp, tv] = o.useState(null),
        tf = tl ? (null !== (E = null === (n = tn.current) || void 0 === n ? void 0 : n.duration) && void 0 !== E ? E : 0) : Math.max(e7.maxTimestampSec, eR.progressSeconds),
        tE = tl ? (e7.timestampSec >= e7.duration ? 0 : e7.timestampSec) : Math.max(e7.timestampSec, eR.progressSeconds),
        {
            videoAssetId: tg,
            videoAsset: tb,
            hlsRef: tO
        } = (function (e, t, n, r) {
            var l;
            let i = o.useRef(!1),
                a = o.useRef(null),
                c = (0, x.z)(e, U.dr.VIDEO_MODAL),
                u = null === (l = e.config.videoMetadata) || void 0 === l ? void 0 : l.assets,
                d = o.useMemo(() => (null != u ? (c && s.ZP.isSupported() && null != u.videoPlayerVideoHls ? P.i.VIDEO_PLAYER_VIDEO_HLS : H.has(n) || null == u.videoPlayerVideoLowRes ? P.i.VIDEO_PLAYER_VIDEO : P.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = o.useMemo(() => (null != d ? (0, P.z)(d, e) : null), [e, d]);
            return (
                o.useEffect(() => {
                    d === P.i.VIDEO_PLAYER_VIDEO_HLS &&
                        null != m &&
                        null != t.current &&
                        !i.current &&
                        ((a.current = new s.ZP({
                            maxBufferLength: 15,
                            startPosition: r,
                            startFragPrefetch: !0
                        })),
                        a.current.loadSource(m.url),
                        a.current.attachMedia(t.current),
                        (i.current = !0));
                }, [m, d, t, r]),
                {
                    videoAssetId: d,
                    videoAsset: m,
                    hlsRef: a
                }
            );
        })(em, tn, eG, tE),
        tS = o.useCallback(
            (e) => {
                if (null != tn.current) {
                    var t, n;
                    eO({
                        questId: em.id,
                        event: Z.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: G(
                            ((t = G({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tg,
                                    quest_completed: tl,
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
                            J(tO)
                        )
                    });
                }
            },
            [eO, em.id, tg, tl, ep, tO]
        ),
        { forceSendCurrentSegment: tC } = (0, F.Z)({
            videoRef: tn,
            isPlaying: ew === R.rq.PLAYING,
            isMetadataLoaded: tc,
            isInitialSeekComplete: td,
            onAnalytics: tS,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        th = o.useCallback(
            (e) => {
                if ((eA(e), null != tn.current))
                    switch (e) {
                        case R.rq.PLAYING:
                            tn.current.play(),
                                eO({
                                    questId: em.id,
                                    event: Z.rMx.QUEST_VIDEO_RESUMED,
                                    properties: G(
                                        {
                                            video_timestamp_seconds: tn.current.currentTime,
                                            pause_reason: ts,
                                            video_session_id: ep
                                        },
                                        J(tO)
                                    )
                                }),
                                ta(null);
                            break;
                        case R.rq.PAUSED:
                            tn.current.pause(), (e6.current = !1), tC();
                            break;
                        case R.rq.ENDED:
                            eh(!1), tC();
                    }
            },
            [eO, em.id, ts, ep, tC, eh, tO]
        );
    (0, p.Ng)(() => {
        to.current && ((to.current = !1), eH(g.Z.getEffectiveConnectionSpeed()), tl && e7.timestampSec >= e7.duration && e3(em.id, 0, e7.duration));
    }),
        o.useEffect(() => {
            null != tn.current &&
                null != ts &&
                eO({
                    questId: em.id,
                    event: Z.rMx.QUEST_VIDEO_PAUSED,
                    properties: G(
                        {
                            video_timestamp_seconds: tn.current.currentTime,
                            reason: ts,
                            video_session_id: ep
                        },
                        J(tO)
                    )
                });
        }, [ts, em.id, eO, ep, tO]),
        o.useEffect(() => {
            eD &&
                null != tn.current &&
                eO({
                    questId: em.id,
                    event: eN ? Z.rMx.QUEST_VIDEO_APP_FOCUSED : Z.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: tn.current.currentTime,
                        video_state: ew,
                        video_session_id: ep
                    }
                });
        }, [eN, eD, ew, em.id, eO, ep]);
    let tj = o.useCallback(
        (e) => {
            var t;
            tl || (null === (t = em.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (0, y.FI)(em, e),
                null != tn.current &&
                    eO({
                        questId: em.id,
                        event: Z.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: G(
                            {
                                progress: (0, I.formatVideoProgressRatio)(tn.current.currentTime, tn.current.duration),
                                video_timestamp_seconds: tn.current.currentTime,
                                video_session_id: ep
                            },
                            J(tO)
                        )
                    });
        },
        [tl, em, eO, ep, tO]
    );
    o.useEffect(() => {
        (eE !== m.Dvm.HIDDEN && eE !== m.Dvm.EXITING && eE !== m.Dvm.EXITED && (null == eE || !eT || eP || tl) && (!eD || eN || tl)) || null == tn.current || ew !== R.rq.PLAYING || (th(R.rq.PAUSED), tl || ta(R.yE.LOST_FOCUS));
    }, [eE, eN, eD, eP, eT, ew, tl, th, tj]);
    let ty = () => {
            ek(!0);
        },
        t_ = () => {
            ek(!1);
        },
        tx = eL || ew === R.rq.PAUSED || ew === R.rq.ENDED,
        tN = o.useCallback(() => {
            var e;
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
        }, [em.id, ex, eO, ep]),
        tD = () => {
            null != tn.current &&
                (tT(Math.max(tn.current.currentTime - 10, 0)),
                ew === R.rq.ENDED && th(R.rq.PAUSED),
                eS({
                    questId: em.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_BACKWARD
                }));
        },
        tP = () => {
            if (null == tn.current || !tz) return;
            let e = Math.min(tn.current.currentTime + 10, tf);
            tT(e),
                ew !== R.rq.ENDED && e >= tn.current.duration && th(R.rq.ENDED),
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
    let tT = o.useCallback(
            (e) => {
                null != tn.current && (tC(), eF(!0), tm(!1), (tn.current.currentTime = e), e3(em.id, e, tn.current.duration));
            },
            [tn, e3, em.id, tC]
        ),
        tI = () => {
            if (null != tn.current)
                switch (ew) {
                    case R.rq.ENDED:
                        tT(0), th(R.rq.PLAYING);
                        break;
                    case R.rq.PLAYING:
                        th(R.rq.PAUSED), ta(R.yE.PAUSE_BUTTON);
                        break;
                    default:
                        th(R.rq.PLAYING);
                }
        },
        tw = (e) => {
            tv(e);
        },
        tA = (e) => {
            tv((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tL = o.useCallback(() => {
            if (null == tn.current || 0 === tn.current.textTracks.length) return;
            let e = tn.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tw(n)), (n.onexit = () => tA(n)));
                }
        }, [tn]);
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
    let tk = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = tn.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = tn.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != tn.current ? (0, I.formatVideoProgressRatio)(tn.current.currentTime, tn.current.duration) : void 0;
                    eO({
                        questId: em.id,
                        event: Z.rMx.QUEST_VIDEO_ERROR,
                        properties: G(
                            {
                                video_progress: l,
                                video_error_type: e,
                                video_asset_id: tg,
                                network_connection_speed: eG,
                                video_session_id: ep,
                                video_error_code: null == r ? void 0 : r.code,
                                video_error_message: null == r ? void 0 : r.message,
                                video_network_state: o
                            },
                            J(tO)
                        )
                    });
                } catch (e) {}
            },
            [eG, em.id, eO, tg, ep, tO]
        ),
        tR = (e) => {
            if (null != tn.current && ew === R.rq.PLAYING) {
                if ((eU && eV(!1), eZ)) {
                    let e = null != e8.current ? Date.now() - e8.current : null;
                    eO({
                        questId: em.id,
                        event: Z.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: G(
                            {
                                video_asset_id: tg,
                                network_connection_speed: eG,
                                duration: e,
                                buffer_index: e9.current,
                                video_session_id: ep
                            },
                            J(tO)
                        )
                    }),
                        eY(!1);
                }
                th(R.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!eB) return;
        let e = setTimeout(() => {
            eF(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eB]);
    let [{ controlBarAnimSpring: tM }, tq] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
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
            config: K
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
                    controlBarAnimSpring: tx || eJ ? 1 : 0,
                    immediate: tt
                }),
                () => {
                    tM.stop();
                }
            ),
            [tx, tq, tt, eJ, tM]
        );
    let tV = ew === R.rq.ENDED,
        tZ = o.useCallback(
            (e) => {
                if (
                    (eS({
                        questId: em.id,
                        questContent: e,
                        questContentCTA: S.jZ.LEARN_MORE,
                        impressionId: eb
                    }),
                    em.id === V.V)
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
        tY = o.useMemo(() => (0, P.z)(P.i.VIDEO_PLAYER_THUMBNAIL, em), [em]),
        tW = o.useMemo(() => (0, P.z)(P.i.VIDEO_PLAYER_CAPTION, em), [em]),
        tz = tl || e7.maxTimestampSec >= (null !== (T = null === (l = tn.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== T ? T : 0) + 1;
    return (0, r.jsx)(m.P3F, {
        className: z.videoCont,
        'data-fullscreen': e_,
        tabIndex: -1,
        onMouseEnter: ty,
        onMouseLeave: t_,
        onFocus: ty,
        onBlur: t_,
        children: (0, r.jsxs)('div', {
            className: z.videoContInnerRelative,
            children: [
                tV &&
                    ((0, D.e)({ location: U.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(A.Z, {
                              quest: em,
                              title: null !== (er = null === (ee = em.config.videoMetadata) || void 0 === ee ? void 0 : ee.messages.videoEndCtaTitle) && void 0 !== er ? er : W.NW.string(W.t.Ka526u),
                              subtitle: null !== (eo = null === (et = em.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaSubtitle) && void 0 !== eo ? eo : W.NW.string(W.t.tKMcAg),
                              ctaBtnLabel: null !== (el = null === (en = em.config.videoMetadata) || void 0 === en ? void 0 : en.messages.videoEndCtaButtonLabel) && void 0 !== el ? el : W.NW.string(W.t.iiTtpK),
                              onCTAClick: () => tZ(j.jn.VIDEO_MODAL_END_CARD)
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(X, {
                                      quest: em,
                                      shouldShow: tV
                                  }),
                                  (0, r.jsx)('div', { className: z.videoContOverlay }),
                                  (0, r.jsx)($, {
                                      title: null !== (ec = null === (ei = em.config.videoMetadata) || void 0 === ei ? void 0 : ei.messages.videoEndCtaTitle) && void 0 !== ec ? ec : W.NW.string(W.t.iiTtpK),
                                      subtitle: null !== (ed = null !== (eu = null === (es = em.config.videoMetadata) || void 0 === es ? void 0 : es.messages.videoEndCtaButtonLabel) && void 0 !== eu ? eu : null === (ea = em.config.videoMetadata) || void 0 === ea ? void 0 : ea.messages.videoEndCtaSubtitle) && void 0 !== ed ? ed : W.NW.string(W.t.mxaHf3),
                                      icon: m.d4D,
                                      className: z.endScreenPanelRight,
                                      onClick: () => tZ(j.jn.VIDEO_MODAL)
                                  })
                              ]
                          })),
                (0, r.jsxs)(f.Z, {
                    ref: (e) => {
                        (tn.current = e), (eI.current = e);
                    },
                    autoPlay: ef,
                    playsInline: !0,
                    mediaLayoutType: e_ ? Y.hV.STATIC : Y.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: tV,
                        [z.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tY ? void 0 : tY.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != tn.current && (tn.current.currentTime >= eK && (eQ(tn.current.currentTime + 6 + 2 * Math.random()), tj(tn.current.currentTime)), tn.current.currentTime >= eX && (e$(tn.current.currentTime + 1), (0, h.qm)(em.id, eR.taskType, tn.current.currentTime), ev(tn.current.currentTime)), e3(em.id, tn.current.currentTime, tn.current.duration), eq((tn.current.currentTime / tn.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != tn.current && (tj(tn.current.duration + 1), e3(em.id, tn.current.duration, tn.current.duration)), th(R.rq.ENDED), eY(!1);
                    },
                    onLoadedData: (e) => {
                        if (eU) {
                            let e = null != e4.current ? Date.now() - e4.current : null;
                            eO({
                                questId: em.id,
                                event: Z.rMx.QUEST_VIDEO_LOADING_ENDED,
                                properties: G(
                                    {
                                        video_asset_id: tg,
                                        network_connection_speed: eG,
                                        duration: e,
                                        video_session_id: ep
                                    },
                                    J(tO)
                                )
                            }),
                                eV(!1);
                        }
                    },
                    onLoadedMetadata: (e) => {
                        null != tn.current && (tu(!0), tg !== P.i.VIDEO_PLAYER_VIDEO_HLS && tT(tE), e5 ? (tn.current.volume = 0) : (tn.current.volume = te));
                    },
                    onLoadStart: () => {
                        (e4.current = Date.now()),
                            eO({
                                questId: em.id,
                                event: Z.rMx.QUEST_VIDEO_LOADING_STARTED,
                                properties: G(
                                    {
                                        video_asset_id: tg,
                                        network_connection_speed: eG,
                                        video_session_id: ep,
                                        is_hls_supported: s.ZP.isSupported()
                                    },
                                    J(tO)
                                )
                            });
                    },
                    onPlaying: () => {
                        if (!e6.current) return;
                        let e = performance.now() - eg;
                        (0, N.T)({ quest: em }).info('\u23F0 Video FCP: '.concat(e, 'ms')),
                            eO({
                                questId: em.id,
                                event: Z.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: G(
                                    {
                                        duration_ms: e,
                                        video_session_id: ep,
                                        video_asset_id: tg
                                    },
                                    J(tO)
                                )
                            }),
                            (e6.current = !1);
                    },
                    onWaiting: (e) => {
                        (e8.current = Date.now()),
                            (e9.current += 1),
                            eO({
                                questId: em.id,
                                event: Z.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                properties: G(
                                    {
                                        video_asset_id: tg,
                                        network_connection_speed: eG,
                                        buffer_index: e9.current,
                                        video_session_id: ep
                                    },
                                    J(tO)
                                )
                            }),
                            eY(!0);
                    },
                    onProgress: (e) => {
                        if (null == tn.current) return;
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
                        ez(t);
                    },
                    onCanPlay: tR,
                    onCanPlayThrough: tR,
                    onSeeked: () => {
                        tm(!0);
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
                                ref: tr,
                                src: tW.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tb &&
                            tg !== P.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tk(R.CY.SOURCE_ERROR),
                                src: tb.url,
                                type: tb.mimetype
                            })
                    ]
                }),
                (eU || eZ) &&
                    ew === R.rq.PLAYING &&
                    (0, r.jsx)(m.$jN, {
                        type: m.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner
                    }),
                ew === R.rq.PAUSED && ts === R.yE.LOST_FOCUS && (0, r.jsx)(Q, {}),
                eC &&
                    ew !== R.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.P3F, {
                                onClick: () => eh(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: z.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: z.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([tM, tF], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(k.K, {
                                    quest: em,
                                    onClose: () => {
                                        eh(!1),
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
                            [z.play]: ew === R.rq.PLAYING,
                            [z.pause]: ew === R.rq.PAUSED
                        }),
                        children: ew === R.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: z.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: z.playPausePopIcon })
                    },
                    ew
                ),
                ej &&
                    null != tp &&
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
                            children: tp.text
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
                            percent: eM,
                            animate: !0 !== to.current && !eB,
                            interactionEnabled: tl && e1,
                            backgroundColor: tx ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tx ? eW : void 0,
                            duration: null !== (q = null === (d = tn.current) || void 0 === d ? void 0 : d.duration) && void 0 !== q ? q : 1,
                            maxSeekableTime: tx && e1 ? tf : void 0,
                            onClick: (e) => {
                                tT(e), ew === R.rq.ENDED && th(R.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tD();
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
                                videoRef: tn,
                                quest: em,
                                playerState: ew,
                                animSpring: tM,
                                visible: tx,
                                seekForwardEnabled: tz,
                                hideCaptionBtn: null == tW,
                                handlePlaybackBtnClick: tI,
                                handleTranscriptBtnClick: () => {
                                    eC || (null != ti && ti.questId === em.id && ti.fetchStatus !== _.iF.NONE && ti.fetchStatus !== _.iF.FAILURE) || (0, h.lL)(em),
                                        eh(!eC),
                                        eS({
                                            questId: em.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eC ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE
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
                                    let t = !e_,
                                        n = (0, O.fn)(null === (e = tn.current) || void 0 === e ? void 0 : e.parentNode, tn.current);
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
                                handleSeekBackBtnClick: tD,
                                handleSeekForwardBtnClick: tP,
                                handleControlBarPendingInteraction: e0
                            })
                        })
                    ]
                })
            ]
        })
    });
}
