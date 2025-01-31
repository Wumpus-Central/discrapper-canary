n.d(t, { Z: () => K }), n(47120), n(653041);
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
    C = n(70097),
    p = n(210887),
    S = n(866960),
    f = n(228488),
    g = n(617136),
    x = n(915750),
    h = n(272008),
    _ = n(497505),
    T = n(918701),
    N = n(184299),
    D = n(208109),
    j = n(720293),
    I = n(602667),
    A = n(341907),
    b = n(881773),
    L = n(350312),
    O = n(355243),
    R = n(106743),
    k = n(223418),
    M = n(604162),
    P = n(747717),
    q = n(281055),
    y = n(920393),
    w = n(46140),
    F = n(981631),
    B = n(217702),
    U = n(388032),
    Z = n(451680);
let V = new Set([F.IyS.FIVE_G, F.IyS.FOUR_G, F.IyS.UNKNOWN]),
    Y = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function z() {
    let e = (0, c.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: Z.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: U.intl.string(U.t.U7Xrb2)
        })
    });
}
function G(e) {
    let { quest: t, shouldShow: n } = e,
        i = l.useMemo(() => (0, j.z)(j.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(I.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: 'Video thumbnail',
                      className: s()(Z.stillFrameImageCard, { [Z.stillFrameImageCardHidden]: !n })
                  })
          });
}
function H(e) {
    let { title: t, subtitle: n, icon: i, onClick: o, className: a } = e,
        [u, c] = l.useState(!1),
        d = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: s()(Z.endScreenPanel, Z.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: v,
        onFocus: d,
        onBlur: v,
        onClick: o,
        children: (0, r.jsxs)('div', {
            className: Z.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: Z.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-md/semibold',
                            className: Z.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-sm/normal',
                            className: Z.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(P.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: Z.endScreenIcon
                })
            ]
        })
    });
}
function K(e) {
    var t, n, i, d, p, I, P, K, X, Q, W, $, J, ee, et, en, er;
    let { quest: el, videoSessionId: ei, onOptimisticProgressUpdate: es, autoplay: eo, parentTransitionState: ea } = e,
        eu = (0, x.aM)(),
        ec = (0, g._F)(),
        ed = (0, g.O5)(),
        em = (0, N.km)((e) => e.transcriptEnabled),
        ev = (0, N.km)((e) => e.setTranscriptEnabled),
        eE = (0, N.km)((e) => e.captionEnabled),
        eC = (0, N.km)((e) => e.setCaptionEnabled),
        ep = (0, N.km)((e) => e.fullScreenEnabled),
        eS = (0, N.km)((e) => e.setFullScreenEnabled),
        { focused: ef, focusedChanged: eg } = (0, q.xU)(),
        { visible: ex, visibleChanged: eh, targetRef: e_ } = (0, q.Yy)(),
        [eT, eN] = l.useState(!0 === eo ? k.rq.PLAYING : k.rq.PAUSED),
        [eD, ej] = l.useState(!1),
        eI = (0, T.il)(el),
        [eA, eb] = l.useState(eI.percentComplete),
        [eL, eO] = l.useState(!1),
        [eR, ek] = l.useState(!0),
        [eM, eP] = l.useState(!1),
        [eq, ey] = l.useState([]),
        [ew, eF] = l.useState(S.Z.getEffectiveConnectionSpeed()),
        [eB, eU] = l.useState(0),
        [eZ, eV] = l.useState(0),
        [eY, ez] = l.useState(!1),
        [eG, eH] = l.useState(!1),
        eK = l.useRef(null),
        eX = l.useRef(null),
        eQ = (0, l.useRef)(-1),
        eW = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[el.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, u.X),
        e$ = (0, N.km)((e) => e.setVideoProgress),
        eJ = (0, N.km)((e) => e.muted),
        e0 = (0, N.km)((e) => e.volume),
        e1 = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
        e2 = (0, l.useRef)(null),
        e6 = (0, l.useRef)(null),
        e4 = l.useRef(!0),
        e9 = (null === (t = el.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        e7 = (0, N.km)((e) => e.transcript),
        [e8, e3] = l.useState(null),
        [e5, te] = l.useState(!1),
        [tt, tn] = l.useState(!1),
        [tr, tl] = l.useState(null),
        ti = e9 ? (null !== (p = null === (n = e2.current) || void 0 === n ? void 0 : n.duration) && void 0 !== p ? p : 0) : Math.max(eW.maxTimestampSec, eI.progressSeconds),
        ts = l.useMemo(() => (V.has(ew) ? j.i.VIDEO_PLAYER_VIDEO : j.i.VIDEO_PLAYER_VIDEO_LOW_RES), [ew]),
        to = l.useMemo(() => (null != ts ? (0, j.z)(ts, el) : null), [ts, el]),
        ta = l.useCallback(
            (e) => {
                null != e2.current &&
                    ec({
                        questId: el.id,
                        event: F.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: ts,
                            quest_completed: e9,
                            video_duration_sec: e2.current.duration,
                            video_progress: (0, A.formatVideoProgressRatio)(e.segment_end_sec, e2.current.duration),
                            video_session_id: ei
                        }
                    });
            },
            [ec, el.id, ts, e9, ei]
        ),
        { forceSendCurrentSegment: tu } = (0, y.Z)({
            videoRef: e2,
            isPlaying: eT === k.rq.PLAYING,
            isMetadataLoaded: e5,
            isInitialSeekComplete: tt,
            onAnalytics: ta,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tc = l.useCallback(
            (e) => {
                if ((eN(e), null != e2.current))
                    switch (e) {
                        case k.rq.PLAYING:
                            e2.current.play(),
                                ec({
                                    questId: el.id,
                                    event: F.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: e2.current.currentTime,
                                        pause_reason: e8,
                                        video_session_id: ei
                                    }
                                }),
                                e3(null);
                            break;
                        case k.rq.PAUSED:
                            e2.current.pause(), tu();
                            break;
                        case k.rq.ENDED:
                            ev(!1), tu();
                    }
            },
            [ec, el.id, e8, ei, tu, ev]
        );
    (0, v.N)(() => {
        e4.current && ((e4.current = !1), eF(S.Z.getEffectiveConnectionSpeed()), e9 && eW.timestampSec >= eW.duration && e$(el.id, 0, eW.duration));
    }),
        l.useEffect(() => {
            null != e2.current &&
                null != e8 &&
                ec({
                    questId: el.id,
                    event: F.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: e2.current.currentTime,
                        reason: e8,
                        video_session_id: ei
                    }
                });
        }, [e8, el.id, ec, ei]),
        l.useEffect(() => {
            eg &&
                null != e2.current &&
                ec({
                    questId: el.id,
                    event: ef ? F.rMx.QUEST_VIDEO_APP_FOCUSED : F.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e2.current.currentTime,
                        video_state: eT,
                        video_session_id: ei
                    }
                });
        }, [ef, eg, eT, el.id, ec, ei]);
    let td = l.useCallback(
        (e) => {
            var t;
            e9 || (null === (t = el.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (0, T.FI)(el, e),
                null != e2.current &&
                    ec({
                        questId: el.id,
                        event: F.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, A.formatVideoProgressRatio)(e2.current.currentTime, e2.current.duration),
                            video_timestamp_seconds: e2.current.currentTime,
                            video_session_id: ei
                        }
                    });
        },
        [e9, el, ec, ei]
    );
    l.useEffect(() => {
        (ea !== m.Dvm.HIDDEN && ea !== m.Dvm.EXITING && ea !== m.Dvm.EXITED && (null == ea || !eh || ex || e9) && (!eg || ef || e9)) || null == e2.current || eT !== k.rq.PLAYING || (tc(k.rq.PAUSED), e9 || e3(k.yE.LOST_FOCUS));
    }, [ea, ef, eg, ex, eh, eT, e9, tc, td]);
    let tm = () => {
            ej(!0);
        },
        tv = () => {
            ej(!1);
        },
        tE = eD || eT === k.rq.PAUSED || eT === k.rq.ENDED,
        tC = l.useCallback(() => {
            var e;
            let t = (0, f.fn)(null === (e = e2.current) || void 0 === e ? void 0 : e.parentNode, e2.current);
            null == t ||
                (0, f.rB)(t) ||
                (t.removeEventListener(f.NO, tC),
                eS(!1),
                ec({
                    questId: el.id,
                    event: F.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: ei }
                }));
        }, [el.id, eS, ec, ei]),
        tp = () => {
            null != e2.current &&
                (tf(Math.max(e2.current.currentTime - 10, 0)),
                eT === k.rq.ENDED && tc(k.rq.PAUSED),
                ed({
                    questId: el.id,
                    questContent: _.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_BACKWARD
                }));
        },
        tS = () => {
            if (null == e2.current || !tk) return;
            let e = Math.min(e2.current.currentTime + 10, ti);
            tf(e),
                eT !== k.rq.ENDED && e >= e2.current.duration && tc(k.rq.ENDED),
                ed({
                    questId: el.id,
                    questContent: _.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    l.useEffect(() => {
        let e = e2.current;
        return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, tC);
        };
    }, [tC]);
    let tf = l.useCallback(
            (e) => {
                null != e2.current && (tu(), eO(!0), tn(!1), (e2.current.currentTime = e), e$(el.id, e, e2.current.duration));
            },
            [e2, e$, el.id, tu]
        ),
        tg = () => {
            if (null != e2.current)
                switch (eT) {
                    case k.rq.ENDED:
                        tf(0), tc(k.rq.PLAYING);
                        break;
                    case k.rq.PLAYING:
                        tc(k.rq.PAUSED), e3(k.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tc(k.rq.PLAYING);
                }
        },
        tx = (e) => {
            tl(e);
        },
        th = (e) => {
            tl((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        t_ = l.useCallback(() => {
            if (null == e2.current || 0 === e2.current.textTracks.length) return;
            let e = e2.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tx(n)), (n.onexit = () => th(n)));
                }
        }, [e2]);
    l.useEffect(() => {
        if (null == e6.current) return;
        let e = e6.current;
        return (
            e.addEventListener('load', t_),
            () => {
                null != e && e.removeEventListener('load', t_);
            }
        );
    }, [e6, t_]);
    let tT = l.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e2.current) || void 0 === t ? void 0 : t.error,
                        l = null === (n = e2.current) || void 0 === n ? void 0 : n.networkState,
                        i = null != e2.current ? (0, A.formatVideoProgressRatio)(e2.current.currentTime, e2.current.duration) : void 0;
                    ec({
                        questId: el.id,
                        event: F.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: i,
                            video_error_type: e,
                            video_asset_id: ts,
                            network_connection_speed: ew,
                            video_session_id: ei,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: l
                        }
                    });
                } catch (e) {}
            },
            [ew, el.id, ec, ts, ei]
        ),
        tN = (e) => {
            if (null != e2.current && eT === k.rq.PLAYING) {
                if ((eR && ek(!1), eM)) {
                    let e = null != eX.current ? Date.now() - eX.current : null;
                    ec({
                        questId: el.id,
                        event: F.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: ts,
                            network_connection_speed: ew,
                            duration: e,
                            buffer_index: eQ.current,
                            video_session_id: ei
                        }
                    }),
                        eP(!1);
                }
                tc(k.rq.PLAYING);
            }
        };
    l.useEffect(() => {
        if (!eL) return;
        let e = setTimeout(() => {
            eO(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eL]);
    let [{ controlBarAnimSpring: tD }, tj] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Y,
            onStart: () => {
                eH(!1);
            },
            onRest: (e) => {
                1 === e.value && eH(!0);
            }
        })),
        tI = (0, l.useRef)(null),
        [{ captionHeightSpring: tA }, tb] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: Y
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tb({
                captionHeightSpring: eE && null != tr && null !== (t = null === (e = tI.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e1
            }),
            () => {
                tA.stop();
            }
        );
    }, [eE, tb, e1, tr, tA]),
        l.useEffect(
            () => (
                tj({
                    controlBarAnimSpring: tE || eY ? 1 : 0,
                    immediate: e1
                }),
                () => {
                    tD.stop();
                }
            ),
            [tE, tj, e1, eY, tD]
        );
    let tL = eT === k.rq.ENDED,
        tO = l.useMemo(() => (0, j.z)(j.i.VIDEO_PLAYER_THUMBNAIL, el), [el]),
        tR = l.useMemo(() => (0, j.z)(j.i.VIDEO_PLAYER_CAPTION, el), [el]),
        tk = e9 || eW.maxTimestampSec >= (null !== (I = null === (i = e2.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== I ? I : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.P3F, {
            className: Z.videoCont,
            'data-fullscreen': ep,
            tabIndex: -1,
            onMouseEnter: tm,
            onMouseLeave: tv,
            onFocus: tm,
            onBlur: tv,
            children: (0, r.jsxs)('div', {
                className: Z.videoContInnerRelative,
                children: [
                    tL &&
                        ((0, D.e)({ location: w.dr.VIDEO_MODAL })
                            ? (0, r.jsx)(L.Z, {
                                  quest: el,
                                  title: null !== (W = null === (K = el.config.videoMetadata) || void 0 === K ? void 0 : K.messages.videoEndCtaTitle) && void 0 !== W ? W : U.intl.string(U.t.Ka526u),
                                  subtitle: null !== ($ = null === (X = el.config.videoMetadata) || void 0 === X ? void 0 : X.messages.videoEndCtaSubtitle) && void 0 !== $ ? $ : U.intl.string(U.t.tKMcAg),
                                  ctaBtnLabel: null !== (J = null === (Q = el.config.videoMetadata) || void 0 === Q ? void 0 : Q.messages.videoEndCtaButtonLabel) && void 0 !== J ? J : U.intl.string(U.t.iiTtpK),
                                  onCTAClick: () => {
                                      ed({
                                          questId: el.id,
                                          questContent: _.jn.VIDEO_MODAL_END_CARD,
                                          questContentCTA: g.jZ.LEARN_MORE,
                                          impressionId: eu
                                      }),
                                          (0, T.FE)(el, {
                                              content: _.jn.VIDEO_MODAL_END_CARD,
                                              ctaContent: g.jZ.LEARN_MORE
                                          });
                                  }
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(G, {
                                          quest: el,
                                          shouldShow: tL
                                      }),
                                      (0, r.jsx)('div', { className: Z.videoContOverlay }),
                                      (0, r.jsx)(H, {
                                          title: null !== (en = null === (ee = el.config.videoMetadata) || void 0 === ee ? void 0 : ee.messages.videoEndCtaTitle) && void 0 !== en ? en : U.intl.string(U.t.iiTtpK),
                                          subtitle: null !== (er = null === (et = el.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaSubtitle) && void 0 !== er ? er : U.intl.string(U.t.mxaHf3),
                                          icon: m.d4D,
                                          className: Z.endScreenPanelRight,
                                          onClick: () => {
                                              ed({
                                                  questId: el.id,
                                                  questContent: _.jn.VIDEO_MODAL,
                                                  questContentCTA: g.jZ.LEARN_MORE
                                              }),
                                                  (0, T.FE)(el, {
                                                      content: _.jn.VIDEO_MODAL,
                                                      ctaContent: g.jZ.LEARN_MORE,
                                                      impressionId: eu
                                                  });
                                          }
                                      })
                                  ]
                              })),
                    (0, r.jsxs)(C.Z, {
                        ref: (e) => {
                            (e2.current = e), (e_.current = e);
                        },
                        autoPlay: eo,
                        playsInline: !0,
                        mediaLayoutType: ep ? B.hV.STATIC : B.hV.RESPONSIVE,
                        className: s()({
                            [Z.hidden]: tL,
                            [Z.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tO ? void 0 : tO.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != e2.current && (e2.current.currentTime >= eB && (eU(e2.current.currentTime + 6 + 2 * Math.random()), td(e2.current.currentTime)), e2.current.currentTime >= eZ && (eV(e2.current.currentTime + 1), (0, h.qm)(el.id, eI.taskType, e2.current.currentTime), es(e2.current.currentTime)), e$(el.id, e2.current.currentTime, e2.current.duration), eb((e2.current.currentTime / e2.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != e2.current && (td(e2.current.duration + 1), e$(el.id, e2.current.duration, e2.current.duration)), tc(k.rq.ENDED), eP(!1);
                        },
                        onLoadedData: (e) => {
                            if (eR) {
                                let e = null != eK.current ? Date.now() - eK.current : null;
                                ec({
                                    questId: el.id,
                                    event: F.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: ts,
                                        network_connection_speed: ew,
                                        duration: e,
                                        video_session_id: ei
                                    }
                                }),
                                    ek(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            null != e2.current && (te(!0), tf(e9 ? eW.timestampSec : Math.max(eW.timestampSec, eI.progressSeconds)), eJ ? (e2.current.volume = 0) : (e2.current.volume = e0));
                        },
                        onLoadStart: () => {
                            (eK.current = Date.now()),
                                ec({
                                    questId: el.id,
                                    event: F.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: ts,
                                        network_connection_speed: ew,
                                        video_session_id: ei,
                                        is_hls_supported: o.ZP.isSupported()
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eX.current = Date.now()),
                                (eQ.current += 1),
                                ec({
                                    questId: el.id,
                                    event: F.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: ts,
                                        network_connection_speed: ew,
                                        buffer_index: eQ.current,
                                        video_session_id: ei
                                    }
                                }),
                                eP(!0);
                        },
                        onProgress: (e) => {
                            if (null == e2.current) return;
                            let t = [];
                            for (let e = 0; e < e2.current.buffered.length; e++) {
                                let n = e2.current.buffered.start(e),
                                    r = e2.current.buffered.end(e);
                                !(r - n < 1) &&
                                    t.push({
                                        start: n / e2.current.duration,
                                        size: (r - n) / e2.current.duration
                                    });
                            }
                            ey(t);
                        },
                        onCanPlay: tN,
                        onCanPlayThrough: tN,
                        onSeeked: () => {
                            tn(!0);
                        },
                        onAbort: () => tT(k.CY.ABORT),
                        onError: () => tT(k.CY.ERROR),
                        onEmptied: () => tT(k.CY.EMPTIED),
                        onStalled: () => tT(k.CY.STALLED),
                        onSuspend: () => tT(k.CY.SUSPEND),
                        onClick: () => {
                            tg();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tR &&
                                (0, r.jsx)('track', {
                                    ref: e6,
                                    src: tR.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != to &&
                                (0, r.jsx)('source', {
                                    onError: () => tT(k.CY.SOURCE_ERROR),
                                    src: to.url,
                                    type: to.mimetype
                                })
                        ]
                    }),
                    (eR || eM) &&
                        eT === k.rq.PLAYING &&
                        (0, r.jsx)(m.$jN, {
                            type: m.$jN.Type.WANDERING_CUBES,
                            className: Z.loadingSpinner
                        }),
                    eT === k.rq.PAUSED && e8 === k.yE.LOST_FOCUS && (0, r.jsx)(z, {}),
                    em &&
                        eT !== k.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.P3F, {
                                    onClick: () => ev(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: Z.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: Z.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tD, tA], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(R.K, {
                                        quest: el,
                                        onClose: () => {
                                            ev(!1),
                                                ed({
                                                    questId: el.id,
                                                    questContent: _.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: Z.videoFooterContGradient,
                        style: {
                            opacity: (0, a.to)(
                                [
                                    tD.to({
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
                            className: s()(Z.playPausePopCont, {
                                [Z.play]: eT === k.rq.PLAYING,
                                [Z.pause]: eT === k.rq.PAUSED
                            }),
                            children: eT === k.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: Z.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: Z.playPausePopIcon })
                        },
                        eT
                    ),
                    eE &&
                        null != tr &&
                        (0, r.jsx)(a.animated.div, {
                            className: Z.captionContainer,
                            ref: tI,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        tD.to({
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
                                className: Z.captionText,
                                children: tr.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: Z.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    tD.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    tD.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    tD.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(O.Z, {
                                percent: eA,
                                animate: !0 !== e4.current && !eL,
                                interactionEnabled: e9 && eG,
                                backgroundColor: tE ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tE ? eq : void 0,
                                duration: null !== (P = null === (d = e2.current) || void 0 === d ? void 0 : d.duration) && void 0 !== P ? P : 1,
                                maxSeekableTime: tE && eG ? ti : void 0,
                                onClick: (e) => {
                                    tf(e), eT === k.rq.ENDED && tc(k.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    tp();
                                },
                                onScrubForward: () => {
                                    tS();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: Z.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            tD.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            tD.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            tD.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(b.Z, {
                                    videoRef: e2,
                                    quest: el,
                                    playerState: eT,
                                    animSpring: tD,
                                    visible: tE,
                                    seekForwardEnabled: tk,
                                    hideCaptionBtn: null == tR,
                                    handlePlaybackBtnClick: tg,
                                    handleTranscriptBtnClick: () => {
                                        em || (null != e7 && e7.questId === el.id && e7.fetchStatus !== N.iF.NONE && e7.fetchStatus !== N.iF.FAILURE) || (0, h.lL)(el),
                                            ev(!em),
                                            ed({
                                                questId: el.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: em ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        eC(!eE),
                                            ed({
                                                questId: el.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: eE ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !ep,
                                            n = (0, f.fn)(null === (e = e2.current) || void 0 === e ? void 0 : e.parentNode, e2.current);
                                        t && null != n
                                            ? ((0, f.Dj)(n),
                                              n.addEventListener(f.NO, tC),
                                              ec({
                                                  questId: el.id,
                                                  event: F.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: ei }
                                              }))
                                            : t ||
                                              null == n ||
                                              (n.removeEventListener(f.NO, tC),
                                              ec({
                                                  questId: el.id,
                                                  event: F.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: ei }
                                              }),
                                              (0, f.Pr)(n)),
                                            eS(t);
                                    },
                                    handleSeekBackBtnClick: tp,
                                    handleSeekForwardBtnClick: tS,
                                    handleControlBarPendingInteraction: ez
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
