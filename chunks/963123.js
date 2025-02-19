n.d(t, { Z: () => Q }), n(47120), n(653041);
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
    E = n(210887),
    g = n(866960),
    b = n(228488),
    O = n(617136),
    S = n(915750),
    j = n(272008),
    C = n(497505),
    h = n(918701),
    y = n(184299),
    x = n(347382),
    _ = n(5881),
    N = n(208109),
    D = n(720293),
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
    F = n(920393),
    B = n(46140),
    U = n(981631),
    Z = n(217702),
    V = n(388032),
    Y = n(677488);
let W = new Set([U.IyS.FIVE_G, U.IyS.FOUR_G, U.IyS.UNKNOWN]),
    z = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function G() {
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
function H(e) {
    let { quest: t, shouldShow: n } = e,
        i = o.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(P.A, {
              questOrQuests: t,
              questContent: C.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: 'Video thumbnail',
                      className: l()(Y.stillFrameImageCard, { [Y.stillFrameImageCardHidden]: !n })
                  })
          });
}
function K(e) {
    let { title: t, subtitle: n, icon: i, onClick: s, className: a } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        p = () => {
            u(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: l()(Y.endScreenPanel, Y.accentOnHover, a),
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
                (0, r.jsx)(i, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: Y.endScreenIcon
                })
            ]
        })
    });
}
function Q(e) {
    var t, n, i, d, E, P, M, Q, X, $, J, ee, et, en, er, eo, ei;
    let { quest: el, videoSessionId: es, onOptimisticProgressUpdate: ea, autoplay: ec, parentTransitionState: eu, startTime: ed } = e,
        em = (0, S.aM)(),
        ep = (0, O._F)(),
        ef = (0, O.O5)(),
        ev = (0, y.km)((e) => e.transcriptEnabled),
        eE = (0, y.km)((e) => e.setTranscriptEnabled),
        eg = (0, y.km)((e) => e.captionEnabled),
        eb = (0, y.km)((e) => e.setCaptionEnabled),
        eO = (0, y.km)((e) => e.fullScreenEnabled),
        eS = (0, y.km)((e) => e.setFullScreenEnabled),
        { focused: ej, focusedChanged: eC } = (0, q.xU)(),
        { visible: eh, visibleChanged: ey, targetRef: ex } = (0, q.Yy)(),
        [e_, eN] = o.useState(!0 === ec ? k.rq.PLAYING : k.rq.PAUSED),
        [eD, eP] = o.useState(!1),
        eT = (0, h.il)(el),
        [eI, eA] = o.useState(eT.percentComplete),
        [ew, eL] = o.useState(!1),
        [ek, eR] = o.useState(!0),
        [eM, eq] = o.useState(!1),
        [eF, eB] = o.useState([]),
        [eU, eZ] = o.useState(g.Z.getEffectiveConnectionSpeed()),
        [eV, eY] = o.useState(0),
        [eW, ez] = o.useState(0),
        [eG, eH] = o.useState(!1),
        [eK, eQ] = o.useState(!1),
        eX = o.useRef(!1),
        e$ = o.useRef(null),
        eJ = o.useRef(null),
        e0 = (0, o.useRef)(-1),
        e1 = (0, y.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[el.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        e2 = (0, y.km)((e) => e.setVideoProgress),
        e6 = (0, y.km)((e) => e.muted),
        e4 = (0, y.km)((e) => e.volume),
        e7 = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        e8 = (0, o.useRef)(null),
        e9 = (0, o.useRef)(null),
        e3 = o.useRef(!0),
        e5 = (null === (t = el.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        te = (0, y.km)((e) => e.transcript),
        [tt, tn] = o.useState(null),
        [tr, to] = o.useState(!1),
        [ti, tl] = o.useState(!1),
        [ts, ta] = o.useState(null),
        tc = e5 ? (null !== (E = null === (n = e8.current) || void 0 === n ? void 0 : n.duration) && void 0 !== E ? E : 0) : Math.max(e1.maxTimestampSec, eT.progressSeconds),
        { videoAssetId: tu, videoAsset: td } = (function (e, t, n) {
            var r;
            let i = o.useRef(!1),
                l = o.useRef(null),
                a = (0, x.z)('VideoPanel'),
                c = null === (r = e.config.videoMetadata) || void 0 === r ? void 0 : r.assets,
                u = o.useMemo(() => (null != c ? (a && s.ZP.isSupported() && null != c.videoPlayerVideoHls ? D.i.VIDEO_PLAYER_VIDEO_HLS : W.has(n) || null == c.videoPlayerVideoLowRes ? D.i.VIDEO_PLAYER_VIDEO : D.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [c, n, a]),
                d = o.useMemo(() => (null != u ? (0, D.z)(u, e) : null), [e, u]);
            return (
                o.useEffect(() => {
                    u === D.i.VIDEO_PLAYER_VIDEO_HLS && null != d && null != t.current && !i.current && ((l.current = new s.ZP()), l.current.loadSource(d.url), l.current.attachMedia(t.current), (i.current = !0));
                }, [d, u, t]),
                {
                    videoAssetId: u,
                    videoAsset: d,
                    hlsRef: l
                }
            );
        })(el, e8, eU),
        tm = o.useCallback(
            (e) => {
                if (null != e8.current) {
                    var t, n;
                    ep({
                        questId: el.id,
                        event: U.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties:
                            ((t = (function (e) {
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
                            })({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tu,
                                    quest_completed: e5,
                                    video_duration_sec: e8.current.duration,
                                    video_progress: (0, T.formatVideoProgressRatio)(e.segment_end_sec, e8.current.duration),
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
                            t)
                    });
                }
            },
            [ep, el.id, tu, e5, es]
        ),
        { forceSendCurrentSegment: tp } = (0, F.Z)({
            videoRef: e8,
            isPlaying: e_ === k.rq.PLAYING,
            isMetadataLoaded: tr,
            isInitialSeekComplete: ti,
            onAnalytics: tm,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tf = o.useCallback(
            (e) => {
                if ((eN(e), null != e8.current))
                    switch (e) {
                        case k.rq.PLAYING:
                            e8.current.play(),
                                ep({
                                    questId: el.id,
                                    event: U.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: e8.current.currentTime,
                                        pause_reason: tt,
                                        video_session_id: es
                                    }
                                }),
                                tn(null);
                            break;
                        case k.rq.PAUSED:
                            e8.current.pause(), tp();
                            break;
                        case k.rq.ENDED:
                            eE(!1), tp();
                    }
            },
            [ep, el.id, tt, es, tp, eE]
        );
    (0, p.Ng)(() => {
        e3.current && ((e3.current = !1), eZ(g.Z.getEffectiveConnectionSpeed()), e5 && e1.timestampSec >= e1.duration && e2(el.id, 0, e1.duration));
    }),
        o.useEffect(() => {
            null != e8.current &&
                null != tt &&
                ep({
                    questId: el.id,
                    event: U.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: e8.current.currentTime,
                        reason: tt,
                        video_session_id: es
                    }
                });
        }, [tt, el.id, ep, es]),
        o.useEffect(() => {
            eC &&
                null != e8.current &&
                ep({
                    questId: el.id,
                    event: ej ? U.rMx.QUEST_VIDEO_APP_FOCUSED : U.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e8.current.currentTime,
                        video_state: e_,
                        video_session_id: es
                    }
                });
        }, [ej, eC, e_, el.id, ep, es]);
    let tv = o.useCallback(
        (e) => {
            var t;
            e5 || (null === (t = el.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (0, h.FI)(el, e),
                null != e8.current &&
                    ep({
                        questId: el.id,
                        event: U.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, T.formatVideoProgressRatio)(e8.current.currentTime, e8.current.duration),
                            video_timestamp_seconds: e8.current.currentTime,
                            video_session_id: es
                        }
                    });
        },
        [e5, el, ep, es]
    );
    o.useEffect(() => {
        (eu !== m.Dvm.HIDDEN && eu !== m.Dvm.EXITING && eu !== m.Dvm.EXITED && (null == eu || !ey || eh || e5) && (!eC || ej || e5)) || null == e8.current || e_ !== k.rq.PLAYING || (tf(k.rq.PAUSED), e5 || tn(k.yE.LOST_FOCUS));
    }, [eu, ej, eC, eh, ey, e_, e5, tf, tv]);
    let tE = () => {
            eP(!0);
        },
        tg = () => {
            eP(!1);
        },
        tb = eD || e_ === k.rq.PAUSED || e_ === k.rq.ENDED,
        tO = o.useCallback(() => {
            var e;
            let t = (0, b.fn)(null === (e = e8.current) || void 0 === e ? void 0 : e.parentNode, e8.current);
            null == t ||
                (0, b.rB)(t) ||
                (t.removeEventListener(b.NO, tO),
                eS(!1),
                ep({
                    questId: el.id,
                    event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: es }
                }));
        }, [el.id, eS, ep, es]),
        tS = () => {
            null != e8.current &&
                (tC(Math.max(e8.current.currentTime - 10, 0)),
                e_ === k.rq.ENDED && tf(k.rq.PAUSED),
                ef({
                    questId: el.id,
                    questContent: C.jn.VIDEO_MODAL,
                    questContentCTA: O.jZ.SEEK_BACKWARD
                }));
        },
        tj = () => {
            if (null == e8.current || !tM) return;
            let e = Math.min(e8.current.currentTime + 10, tc);
            tC(e),
                e_ !== k.rq.ENDED && e >= e8.current.duration && tf(k.rq.ENDED),
                ef({
                    questId: el.id,
                    questContent: C.jn.VIDEO_MODAL,
                    questContentCTA: O.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = e8.current;
        return () => {
            let t = (0, b.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(b.NO, tO);
        };
    }, [tO]);
    let tC = o.useCallback(
            (e) => {
                null != e8.current && (tp(), eL(!0), tl(!1), (e8.current.currentTime = e), e2(el.id, e, e8.current.duration));
            },
            [e8, e2, el.id, tp]
        ),
        th = () => {
            if (null != e8.current)
                switch (e_) {
                    case k.rq.ENDED:
                        tC(0), tf(k.rq.PLAYING);
                        break;
                    case k.rq.PLAYING:
                        tf(k.rq.PAUSED), tn(k.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tf(k.rq.PLAYING);
                }
        },
        ty = (e) => {
            ta(e);
        },
        tx = (e) => {
            ta((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        t_ = o.useCallback(() => {
            if (null == e8.current || 0 === e8.current.textTracks.length) return;
            let e = e8.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, R.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => ty(n)), (n.onexit = () => tx(n)));
                }
        }, [e8]);
    o.useEffect(() => {
        if (null == e9.current) return;
        let e = e9.current;
        return (
            e.addEventListener('load', t_),
            () => {
                null != e && e.removeEventListener('load', t_);
            }
        );
    }, [e9, t_]);
    let tN = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e8.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = e8.current) || void 0 === n ? void 0 : n.networkState,
                        i = null != e8.current ? (0, T.formatVideoProgressRatio)(e8.current.currentTime, e8.current.duration) : void 0;
                    ep({
                        questId: el.id,
                        event: U.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: i,
                            video_error_type: e,
                            video_asset_id: tu,
                            network_connection_speed: eU,
                            video_session_id: es,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: o
                        }
                    });
                } catch (e) {}
            },
            [eU, el.id, ep, tu, es]
        ),
        tD = (e) => {
            if (null != e8.current && e_ === k.rq.PLAYING) {
                if ((ek && eR(!1), eM)) {
                    let e = null != eJ.current ? Date.now() - eJ.current : null;
                    ep({
                        questId: el.id,
                        event: U.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: tu,
                            network_connection_speed: eU,
                            duration: e,
                            buffer_index: e0.current,
                            video_session_id: es
                        }
                    }),
                        eq(!1);
                }
                tf(k.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!ew) return;
        let e = setTimeout(() => {
            eL(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ew]);
    let [{ controlBarAnimSpring: tP }, tT] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: z,
            onStart: () => {
                eQ(!1);
            },
            onRest: (e) => {
                1 === e.value && eQ(!0);
            }
        })),
        tI = (0, o.useRef)(null),
        [{ captionHeightSpring: tA }, tw] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: z
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tw({
                captionHeightSpring: eg && null != ts && null !== (t = null === (e = tI.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e7
            }),
            () => {
                tA.stop();
            }
        );
    }, [eg, tw, e7, ts, tA]),
        o.useEffect(
            () => (
                tT({
                    controlBarAnimSpring: tb || eG ? 1 : 0,
                    immediate: e7
                }),
                () => {
                    tP.stop();
                }
            ),
            [tb, tT, e7, eG, tP]
        );
    let tL = e_ === k.rq.ENDED,
        tk = o.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_THUMBNAIL, el), [el]),
        tR = o.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_CAPTION, el), [el]),
        tM = e5 || e1.maxTimestampSec >= (null !== (P = null === (i = e8.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== P ? P : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.P3F, {
            className: Y.videoCont,
            'data-fullscreen': eO,
            tabIndex: -1,
            onMouseEnter: tE,
            onMouseLeave: tg,
            onFocus: tE,
            onBlur: tg,
            children: (0, r.jsxs)('div', {
                className: Y.videoContInnerRelative,
                children: [
                    tL &&
                        ((0, N.e)({ location: B.dr.VIDEO_MODAL })
                            ? (0, r.jsx)(A.Z, {
                                  quest: el,
                                  title: null !== (J = null === (Q = el.config.videoMetadata) || void 0 === Q ? void 0 : Q.messages.videoEndCtaTitle) && void 0 !== J ? J : V.NW.string(V.t.Ka526u),
                                  subtitle: null !== (ee = null === (X = el.config.videoMetadata) || void 0 === X ? void 0 : X.messages.videoEndCtaSubtitle) && void 0 !== ee ? ee : V.NW.string(V.t.tKMcAg),
                                  ctaBtnLabel: null !== (et = null === ($ = el.config.videoMetadata) || void 0 === $ ? void 0 : $.messages.videoEndCtaButtonLabel) && void 0 !== et ? et : V.NW.string(V.t.iiTtpK),
                                  onCTAClick: () => {
                                      ef({
                                          questId: el.id,
                                          questContent: C.jn.VIDEO_MODAL_END_CARD,
                                          questContentCTA: O.jZ.LEARN_MORE,
                                          impressionId: em
                                      }),
                                          (0, h.FE)(el, {
                                              content: C.jn.VIDEO_MODAL_END_CARD,
                                              ctaContent: O.jZ.LEARN_MORE
                                          });
                                  }
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(H, {
                                          quest: el,
                                          shouldShow: tL
                                      }),
                                      (0, r.jsx)('div', { className: Y.videoContOverlay }),
                                      (0, r.jsx)(K, {
                                          title: null !== (eo = null === (en = el.config.videoMetadata) || void 0 === en ? void 0 : en.messages.videoEndCtaTitle) && void 0 !== eo ? eo : V.NW.string(V.t.iiTtpK),
                                          subtitle: null !== (ei = null === (er = el.config.videoMetadata) || void 0 === er ? void 0 : er.messages.videoEndCtaSubtitle) && void 0 !== ei ? ei : V.NW.string(V.t.mxaHf3),
                                          icon: m.d4D,
                                          className: Y.endScreenPanelRight,
                                          onClick: () => {
                                              ef({
                                                  questId: el.id,
                                                  questContent: C.jn.VIDEO_MODAL,
                                                  questContentCTA: O.jZ.LEARN_MORE
                                              }),
                                                  (0, h.FE)(el, {
                                                      content: C.jn.VIDEO_MODAL,
                                                      ctaContent: O.jZ.LEARN_MORE,
                                                      impressionId: em
                                                  });
                                          }
                                      })
                                  ]
                              })),
                    (0, r.jsxs)(v.Z, {
                        ref: (e) => {
                            (e8.current = e), (ex.current = e);
                        },
                        autoPlay: ec,
                        playsInline: !0,
                        mediaLayoutType: eO ? Z.hV.STATIC : Z.hV.RESPONSIVE,
                        className: l()({
                            [Y.hidden]: tL,
                            [Y.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tk ? void 0 : tk.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != e8.current && (e8.current.currentTime >= eV && (eY(e8.current.currentTime + 6 + 2 * Math.random()), tv(e8.current.currentTime)), e8.current.currentTime >= eW && (ez(e8.current.currentTime + 1), (0, j.qm)(el.id, eT.taskType, e8.current.currentTime), ea(e8.current.currentTime)), e2(el.id, e8.current.currentTime, e8.current.duration), eA((e8.current.currentTime / e8.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != e8.current && (tv(e8.current.duration + 1), e2(el.id, e8.current.duration, e8.current.duration)), tf(k.rq.ENDED), eq(!1);
                        },
                        onLoadedData: (e) => {
                            if (ek) {
                                let e = null != e$.current ? Date.now() - e$.current : null;
                                ep({
                                    questId: el.id,
                                    event: U.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: tu,
                                        network_connection_speed: eU,
                                        duration: e,
                                        video_session_id: es
                                    }
                                }),
                                    eR(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            null != e8.current && (to(!0), tC(e5 ? e1.timestampSec : Math.max(e1.timestampSec, eT.progressSeconds)), e6 ? (e8.current.volume = 0) : (e8.current.volume = e4));
                        },
                        onLoadStart: () => {
                            (e$.current = Date.now()),
                                ep({
                                    questId: el.id,
                                    event: U.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: tu,
                                        network_connection_speed: eU,
                                        video_session_id: es,
                                        is_hls_supported: s.ZP.isSupported()
                                    }
                                });
                        },
                        onPlay: () => {
                            if (eX.current) return;
                            let e = performance.now() - ed;
                            (0, _.T)({ quest: el }).info('\u23F0 Video FCP: '.concat(e, 'ms')),
                                ep({
                                    questId: el.id,
                                    event: U.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                    properties: {
                                        duration_ms: e,
                                        video_session_id: es,
                                        video_asset_id: tu
                                    }
                                }),
                                (eX.current = !0);
                        },
                        onWaiting: (e) => {
                            (eJ.current = Date.now()),
                                (e0.current += 1),
                                ep({
                                    questId: el.id,
                                    event: U.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: tu,
                                        network_connection_speed: eU,
                                        buffer_index: e0.current,
                                        video_session_id: es
                                    }
                                }),
                                eq(!0);
                        },
                        onProgress: (e) => {
                            if (null == e8.current) return;
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
                            eB(t);
                        },
                        onCanPlay: tD,
                        onCanPlayThrough: tD,
                        onSeeked: () => {
                            tl(!0);
                        },
                        onAbort: () => tN(k.CY.ABORT),
                        onError: () => tN(k.CY.ERROR),
                        onEmptied: () => tN(k.CY.EMPTIED),
                        onStalled: () => tN(k.CY.STALLED),
                        onSuspend: () => tN(k.CY.SUSPEND),
                        onClick: () => {
                            th();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tR &&
                                (0, r.jsx)('track', {
                                    ref: e9,
                                    src: tR.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != td &&
                                tu !== D.i.VIDEO_PLAYER_VIDEO_HLS &&
                                (0, r.jsx)('source', {
                                    onError: () => tN(k.CY.SOURCE_ERROR),
                                    src: td.url,
                                    type: td.mimetype
                                })
                        ]
                    }),
                    (ek || eM) &&
                        e_ === k.rq.PLAYING &&
                        (0, r.jsx)(m.$jN, {
                            type: m.$jN.Type.WANDERING_CUBES,
                            className: Y.loadingSpinner
                        }),
                    e_ === k.rq.PAUSED && tt === k.yE.LOST_FOCUS && (0, r.jsx)(G, {}),
                    ev &&
                        e_ !== k.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.P3F, {
                                    onClick: () => eE(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: Y.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: Y.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tP, tA], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(L.K, {
                                        quest: el,
                                        onClose: () => {
                                            eE(!1),
                                                ef({
                                                    questId: el.id,
                                                    questContent: C.jn.VIDEO_MODAL,
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
                                    tP.to({
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
                            className: l()(Y.playPausePopCont, {
                                [Y.play]: e_ === k.rq.PLAYING,
                                [Y.pause]: e_ === k.rq.PAUSED
                            }),
                            children: e_ === k.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: Y.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: Y.playPausePopIcon })
                        },
                        e_
                    ),
                    eg &&
                        null != ts &&
                        (0, r.jsx)(a.animated.div, {
                            className: Y.captionContainer,
                            ref: tI,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        tP.to({
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
                                children: ts.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: Y.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    tP.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    tP.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    tP.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(w.Z, {
                                percent: eI,
                                animate: !0 !== e3.current && !ew,
                                interactionEnabled: e5 && eK,
                                backgroundColor: tb ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tb ? eF : void 0,
                                duration: null !== (M = null === (d = e8.current) || void 0 === d ? void 0 : d.duration) && void 0 !== M ? M : 1,
                                maxSeekableTime: tb && eK ? tc : void 0,
                                onClick: (e) => {
                                    tC(e), e_ === k.rq.ENDED && tf(k.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    tS();
                                },
                                onScrubForward: () => {
                                    tj();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: Y.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            tP.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            tP.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            tP.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(I.Z, {
                                    videoRef: e8,
                                    quest: el,
                                    playerState: e_,
                                    animSpring: tP,
                                    visible: tb,
                                    seekForwardEnabled: tM,
                                    hideCaptionBtn: null == tR,
                                    handlePlaybackBtnClick: th,
                                    handleTranscriptBtnClick: () => {
                                        ev || (null != te && te.questId === el.id && te.fetchStatus !== y.iF.NONE && te.fetchStatus !== y.iF.FAILURE) || (0, j.lL)(el),
                                            eE(!ev),
                                            ef({
                                                questId: el.id,
                                                questContent: C.jn.VIDEO_MODAL,
                                                questContentCTA: ev ? O.jZ.TRANSCRIPT_DISABLE : O.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        eb(!eg),
                                            ef({
                                                questId: el.id,
                                                questContent: C.jn.VIDEO_MODAL,
                                                questContentCTA: eg ? O.jZ.CLOSED_CAPTIONING_DISABLE : O.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !eO,
                                            n = (0, b.fn)(null === (e = e8.current) || void 0 === e ? void 0 : e.parentNode, e8.current);
                                        t && null != n
                                            ? ((0, b.Dj)(n),
                                              n.addEventListener(b.NO, tO),
                                              ep({
                                                  questId: el.id,
                                                  event: U.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: es }
                                              }))
                                            : t ||
                                              null == n ||
                                              (n.removeEventListener(b.NO, tO),
                                              ep({
                                                  questId: el.id,
                                                  event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: es }
                                              }),
                                              (0, b.Pr)(n)),
                                            eS(t);
                                    },
                                    handleSeekBackBtnClick: tS,
                                    handleSeekForwardBtnClick: tj,
                                    handleControlBarPendingInteraction: eH
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
