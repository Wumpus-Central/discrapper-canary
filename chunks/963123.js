n.d(t, { Z: () => Q }), n(47120), n(653041);
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
    j = n(208109),
    I = n(720293),
    A = n(602667),
    b = n(341907),
    L = n(881773),
    O = n(350312),
    R = n(355243),
    k = n(106743),
    M = n(223418),
    P = n(604162),
    q = n(747717),
    y = n(281055),
    w = n(920393),
    B = n(46140),
    F = n(981631),
    U = n(217702),
    Z = n(388032),
    V = n(451680);
let Y = new Set([F.IyS.FIVE_G, F.IyS.FOUR_G, F.IyS.UNKNOWN]),
    z = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function G() {
    let e = (0, c.e7)([C.Z], () => C.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: V.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Z.intl.string(Z.t.U7Xrb2)
        })
    });
}
function H(e) {
    let { quest: t, shouldShow: n } = e,
        i = l.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(A.A, {
              questOrQuests: t,
              questContent: h.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: 'Video thumbnail',
                      className: s()(V.stillFrameImageCard, { [V.stillFrameImageCardHidden]: !n })
                  })
          });
}
function K(e) {
    let { title: t, subtitle: n, icon: i, onClick: o, className: a } = e,
        [u, c] = l.useState(!1),
        d = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: s()(V.endScreenPanel, V.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: v,
        onFocus: d,
        onBlur: v,
        onClick: o,
        children: (0, r.jsxs)('div', {
            className: V.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: V.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-md/semibold',
                            className: V.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-sm/normal',
                            className: V.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(q.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: V.endScreenIcon
                })
            ]
        })
    });
}
function Q(e) {
    var t, n, i, d, C, A, q, Q, X, W, $, J, ee, et, en, er, el;
    let { quest: ei, videoSessionId: es, onOptimisticProgressUpdate: eo, autoplay: ea, parentTransitionState: eu } = e,
        ec = (0, x.aM)(),
        ed = (0, g._F)(),
        em = (0, g.O5)(),
        ev = (0, D.km)((e) => e.transcriptEnabled),
        eE = (0, D.km)((e) => e.setTranscriptEnabled),
        ep = (0, D.km)((e) => e.captionEnabled),
        eC = (0, D.km)((e) => e.setCaptionEnabled),
        ef = (0, D.km)((e) => e.fullScreenEnabled),
        eS = (0, D.km)((e) => e.setFullScreenEnabled),
        { focused: eg, focusedChanged: ex } = (0, y.xU)(),
        { visible: e_, visibleChanged: eh, targetRef: eT } = (0, y.Yy)(),
        [eD, eN] = l.useState(!0 === ea ? M.rq.PLAYING : M.rq.PAUSED),
        [ej, eI] = l.useState(!1),
        eA = (0, T.il)(ei),
        [eb, eL] = l.useState(eA.percentComplete),
        [eO, eR] = l.useState(!1),
        [ek, eM] = l.useState(!0),
        [eP, eq] = l.useState(!1),
        [ey, ew] = l.useState([]),
        [eB, eF] = l.useState(f.Z.getEffectiveConnectionSpeed()),
        [eU, eZ] = l.useState(0),
        [eV, eY] = l.useState(0),
        [ez, eG] = l.useState(!1),
        [eH, eK] = l.useState(!1),
        eQ = l.useRef(null),
        eX = l.useRef(null),
        eW = (0, l.useRef)(-1),
        e$ = (0, D.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[ei.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, u.X),
        eJ = (0, D.km)((e) => e.setVideoProgress),
        e0 = (0, D.km)((e) => e.muted),
        e1 = (0, D.km)((e) => e.volume),
        e2 = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
        e6 = (0, l.useRef)(null),
        e4 = (0, l.useRef)(null),
        e9 = l.useRef(!0),
        e7 = (null === (t = ei.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        e8 = (0, D.km)((e) => e.transcript),
        [e3, e5] = l.useState(null),
        [te, tt] = l.useState(!1),
        [tn, tr] = l.useState(!1),
        [tl, ti] = l.useState(null),
        ts = e7 ? (null !== (C = null === (n = e6.current) || void 0 === n ? void 0 : n.duration) && void 0 !== C ? C : 0) : Math.max(e$.maxTimestampSec, eA.progressSeconds),
        { videoAssetId: to, videoAsset: ta } = (function (e, t, n) {
            var r;
            let i = l.useRef(!1),
                s = l.useRef(null),
                a = (0, N.z)('VideoPanel'),
                u = null === (r = e.config.videoMetadata) || void 0 === r ? void 0 : r.assets,
                c = l.useMemo(() => (null != u ? (a && o.ZP.isSupported() && null != u.videoPlayerVideoHls ? I.i.VIDEO_PLAYER_VIDEO_HLS : Y.has(n) || null == u.videoPlayerVideoLowRes ? I.i.VIDEO_PLAYER_VIDEO : I.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, a]),
                d = l.useMemo(() => (null != c ? (0, I.z)(c, e) : null), [e, c]);
            return (
                l.useEffect(() => {
                    c === I.i.VIDEO_PLAYER_VIDEO_HLS && null != d && null != t.current && !i.current && ((s.current = new o.ZP()), s.current.loadSource(d.url), s.current.attachMedia(t.current), (i.current = !0));
                }, [d, c, t]),
                {
                    videoAssetId: c,
                    videoAsset: d,
                    hlsRef: s
                }
            );
        })(ei, e6, eB),
        tu = l.useCallback(
            (e) => {
                null != e6.current &&
                    ed({
                        questId: ei.id,
                        event: F.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: to,
                            quest_completed: e7,
                            video_duration_sec: e6.current.duration,
                            video_progress: (0, b.formatVideoProgressRatio)(e.segment_end_sec, e6.current.duration),
                            video_session_id: es
                        }
                    });
            },
            [ed, ei.id, to, e7, es]
        ),
        { forceSendCurrentSegment: tc } = (0, w.Z)({
            videoRef: e6,
            isPlaying: eD === M.rq.PLAYING,
            isMetadataLoaded: te,
            isInitialSeekComplete: tn,
            onAnalytics: tu,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        td = l.useCallback(
            (e) => {
                if ((eN(e), null != e6.current))
                    switch (e) {
                        case M.rq.PLAYING:
                            e6.current.play(),
                                ed({
                                    questId: ei.id,
                                    event: F.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: e6.current.currentTime,
                                        pause_reason: e3,
                                        video_session_id: es
                                    }
                                }),
                                e5(null);
                            break;
                        case M.rq.PAUSED:
                            e6.current.pause(), tc();
                            break;
                        case M.rq.ENDED:
                            eE(!1), tc();
                    }
            },
            [ed, ei.id, e3, es, tc, eE]
        );
    (0, v.Ng)(() => {
        e9.current && ((e9.current = !1), eF(f.Z.getEffectiveConnectionSpeed()), e7 && e$.timestampSec >= e$.duration && eJ(ei.id, 0, e$.duration));
    }),
        l.useEffect(() => {
            null != e6.current &&
                null != e3 &&
                ed({
                    questId: ei.id,
                    event: F.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: e6.current.currentTime,
                        reason: e3,
                        video_session_id: es
                    }
                });
        }, [e3, ei.id, ed, es]),
        l.useEffect(() => {
            ex &&
                null != e6.current &&
                ed({
                    questId: ei.id,
                    event: eg ? F.rMx.QUEST_VIDEO_APP_FOCUSED : F.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e6.current.currentTime,
                        video_state: eD,
                        video_session_id: es
                    }
                });
        }, [eg, ex, eD, ei.id, ed, es]);
    let tm = l.useCallback(
        (e) => {
            var t;
            e7 || (null === (t = ei.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (0, T.FI)(ei, e),
                null != e6.current &&
                    ed({
                        questId: ei.id,
                        event: F.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, b.formatVideoProgressRatio)(e6.current.currentTime, e6.current.duration),
                            video_timestamp_seconds: e6.current.currentTime,
                            video_session_id: es
                        }
                    });
        },
        [e7, ei, ed, es]
    );
    l.useEffect(() => {
        (eu !== m.Dvm.HIDDEN && eu !== m.Dvm.EXITING && eu !== m.Dvm.EXITED && (null == eu || !eh || e_ || e7) && (!ex || eg || e7)) || null == e6.current || eD !== M.rq.PLAYING || (td(M.rq.PAUSED), e7 || e5(M.yE.LOST_FOCUS));
    }, [eu, eg, ex, e_, eh, eD, e7, td, tm]);
    let tv = () => {
            eI(!0);
        },
        tE = () => {
            eI(!1);
        },
        tp = ej || eD === M.rq.PAUSED || eD === M.rq.ENDED,
        tC = l.useCallback(() => {
            var e;
            let t = (0, S.fn)(null === (e = e6.current) || void 0 === e ? void 0 : e.parentNode, e6.current);
            null == t ||
                (0, S.rB)(t) ||
                (t.removeEventListener(S.NO, tC),
                eS(!1),
                ed({
                    questId: ei.id,
                    event: F.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: es }
                }));
        }, [ei.id, eS, ed, es]),
        tf = () => {
            null != e6.current &&
                (tg(Math.max(e6.current.currentTime - 10, 0)),
                eD === M.rq.ENDED && td(M.rq.PAUSED),
                em({
                    questId: ei.id,
                    questContent: h.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_BACKWARD
                }));
        },
        tS = () => {
            if (null == e6.current || !tM) return;
            let e = Math.min(e6.current.currentTime + 10, ts);
            tg(e),
                eD !== M.rq.ENDED && e >= e6.current.duration && td(M.rq.ENDED),
                em({
                    questId: ei.id,
                    questContent: h.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    l.useEffect(() => {
        let e = e6.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tC);
        };
    }, [tC]);
    let tg = l.useCallback(
            (e) => {
                null != e6.current && (tc(), eR(!0), tr(!1), (e6.current.currentTime = e), eJ(ei.id, e, e6.current.duration));
            },
            [e6, eJ, ei.id, tc]
        ),
        tx = () => {
            if (null != e6.current)
                switch (eD) {
                    case M.rq.ENDED:
                        tg(0), td(M.rq.PLAYING);
                        break;
                    case M.rq.PLAYING:
                        td(M.rq.PAUSED), e5(M.yE.PAUSE_BUTTON);
                        break;
                    default:
                        td(M.rq.PLAYING);
                }
        },
        t_ = (e) => {
            ti(e);
        },
        th = (e) => {
            ti((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tT = l.useCallback(() => {
            if (null == e6.current || 0 === e6.current.textTracks.length) return;
            let e = e6.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, P.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => t_(n)), (n.onexit = () => th(n)));
                }
        }, [e6]);
    l.useEffect(() => {
        if (null == e4.current) return;
        let e = e4.current;
        return (
            e.addEventListener('load', tT),
            () => {
                null != e && e.removeEventListener('load', tT);
            }
        );
    }, [e4, tT]);
    let tD = l.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e6.current) || void 0 === t ? void 0 : t.error,
                        l = null === (n = e6.current) || void 0 === n ? void 0 : n.networkState,
                        i = null != e6.current ? (0, b.formatVideoProgressRatio)(e6.current.currentTime, e6.current.duration) : void 0;
                    ed({
                        questId: ei.id,
                        event: F.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: i,
                            video_error_type: e,
                            video_asset_id: to,
                            network_connection_speed: eB,
                            video_session_id: es,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: l
                        }
                    });
                } catch (e) {}
            },
            [eB, ei.id, ed, to, es]
        ),
        tN = (e) => {
            if (null != e6.current && eD === M.rq.PLAYING) {
                if ((ek && eM(!1), eP)) {
                    let e = null != eX.current ? Date.now() - eX.current : null;
                    ed({
                        questId: ei.id,
                        event: F.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: to,
                            network_connection_speed: eB,
                            duration: e,
                            buffer_index: eW.current,
                            video_session_id: es
                        }
                    }),
                        eq(!1);
                }
                td(M.rq.PLAYING);
            }
        };
    l.useEffect(() => {
        if (!eO) return;
        let e = setTimeout(() => {
            eR(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eO]);
    let [{ controlBarAnimSpring: tj }, tI] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: z,
            onStart: () => {
                eK(!1);
            },
            onRest: (e) => {
                1 === e.value && eK(!0);
            }
        })),
        tA = (0, l.useRef)(null),
        [{ captionHeightSpring: tb }, tL] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: z
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tL({
                captionHeightSpring: ep && null != tl && null !== (t = null === (e = tA.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e2
            }),
            () => {
                tb.stop();
            }
        );
    }, [ep, tL, e2, tl, tb]),
        l.useEffect(
            () => (
                tI({
                    controlBarAnimSpring: tp || ez ? 1 : 0,
                    immediate: e2
                }),
                () => {
                    tj.stop();
                }
            ),
            [tp, tI, e2, ez, tj]
        );
    let tO = eD === M.rq.ENDED,
        tR = l.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, ei), [ei]),
        tk = l.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_CAPTION, ei), [ei]),
        tM = e7 || e$.maxTimestampSec >= (null !== (A = null === (i = e6.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== A ? A : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.P3F, {
            className: V.videoCont,
            'data-fullscreen': ef,
            tabIndex: -1,
            onMouseEnter: tv,
            onMouseLeave: tE,
            onFocus: tv,
            onBlur: tE,
            children: (0, r.jsxs)('div', {
                className: V.videoContInnerRelative,
                children: [
                    tO &&
                        ((0, j.e)({ location: B.dr.VIDEO_MODAL })
                            ? (0, r.jsx)(O.Z, {
                                  quest: ei,
                                  title: null !== ($ = null === (Q = ei.config.videoMetadata) || void 0 === Q ? void 0 : Q.messages.videoEndCtaTitle) && void 0 !== $ ? $ : Z.intl.string(Z.t.Ka526u),
                                  subtitle: null !== (J = null === (X = ei.config.videoMetadata) || void 0 === X ? void 0 : X.messages.videoEndCtaSubtitle) && void 0 !== J ? J : Z.intl.string(Z.t.tKMcAg),
                                  ctaBtnLabel: null !== (ee = null === (W = ei.config.videoMetadata) || void 0 === W ? void 0 : W.messages.videoEndCtaButtonLabel) && void 0 !== ee ? ee : Z.intl.string(Z.t.iiTtpK),
                                  onCTAClick: () => {
                                      em({
                                          questId: ei.id,
                                          questContent: h.jn.VIDEO_MODAL_END_CARD,
                                          questContentCTA: g.jZ.LEARN_MORE,
                                          impressionId: ec
                                      }),
                                          (0, T.FE)(ei, {
                                              content: h.jn.VIDEO_MODAL_END_CARD,
                                              ctaContent: g.jZ.LEARN_MORE
                                          });
                                  }
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(H, {
                                          quest: ei,
                                          shouldShow: tO
                                      }),
                                      (0, r.jsx)('div', { className: V.videoContOverlay }),
                                      (0, r.jsx)(K, {
                                          title: null !== (er = null === (et = ei.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaTitle) && void 0 !== er ? er : Z.intl.string(Z.t.iiTtpK),
                                          subtitle: null !== (el = null === (en = ei.config.videoMetadata) || void 0 === en ? void 0 : en.messages.videoEndCtaSubtitle) && void 0 !== el ? el : Z.intl.string(Z.t.mxaHf3),
                                          icon: m.d4D,
                                          className: V.endScreenPanelRight,
                                          onClick: () => {
                                              em({
                                                  questId: ei.id,
                                                  questContent: h.jn.VIDEO_MODAL,
                                                  questContentCTA: g.jZ.LEARN_MORE
                                              }),
                                                  (0, T.FE)(ei, {
                                                      content: h.jn.VIDEO_MODAL,
                                                      ctaContent: g.jZ.LEARN_MORE,
                                                      impressionId: ec
                                                  });
                                          }
                                      })
                                  ]
                              })),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (e6.current = e), (eT.current = e);
                        },
                        autoPlay: ea,
                        playsInline: !0,
                        mediaLayoutType: ef ? U.hV.STATIC : U.hV.RESPONSIVE,
                        className: s()({
                            [V.hidden]: tO,
                            [V.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tR ? void 0 : tR.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != e6.current && (e6.current.currentTime >= eU && (eZ(e6.current.currentTime + 6 + 2 * Math.random()), tm(e6.current.currentTime)), e6.current.currentTime >= eV && (eY(e6.current.currentTime + 1), (0, _.qm)(ei.id, eA.taskType, e6.current.currentTime), eo(e6.current.currentTime)), eJ(ei.id, e6.current.currentTime, e6.current.duration), eL((e6.current.currentTime / e6.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != e6.current && (tm(e6.current.duration + 1), eJ(ei.id, e6.current.duration, e6.current.duration)), td(M.rq.ENDED), eq(!1);
                        },
                        onLoadedData: (e) => {
                            if (ek) {
                                let e = null != eQ.current ? Date.now() - eQ.current : null;
                                ed({
                                    questId: ei.id,
                                    event: F.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: to,
                                        network_connection_speed: eB,
                                        duration: e,
                                        video_session_id: es
                                    }
                                }),
                                    eM(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            null != e6.current && (tt(!0), tg(e7 ? e$.timestampSec : Math.max(e$.timestampSec, eA.progressSeconds)), e0 ? (e6.current.volume = 0) : (e6.current.volume = e1));
                        },
                        onLoadStart: () => {
                            (eQ.current = Date.now()),
                                ed({
                                    questId: ei.id,
                                    event: F.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: to,
                                        network_connection_speed: eB,
                                        video_session_id: es,
                                        is_hls_supported: o.ZP.isSupported()
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eX.current = Date.now()),
                                (eW.current += 1),
                                ed({
                                    questId: ei.id,
                                    event: F.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: to,
                                        network_connection_speed: eB,
                                        buffer_index: eW.current,
                                        video_session_id: es
                                    }
                                }),
                                eq(!0);
                        },
                        onProgress: (e) => {
                            if (null == e6.current) return;
                            let t = [];
                            for (let e = 0; e < e6.current.buffered.length; e++) {
                                let n = e6.current.buffered.start(e),
                                    r = e6.current.buffered.end(e);
                                !(r - n < 1) &&
                                    t.push({
                                        start: n / e6.current.duration,
                                        size: (r - n) / e6.current.duration
                                    });
                            }
                            ew(t);
                        },
                        onCanPlay: tN,
                        onCanPlayThrough: tN,
                        onSeeked: () => {
                            tr(!0);
                        },
                        onAbort: () => tD(M.CY.ABORT),
                        onError: () => tD(M.CY.ERROR),
                        onEmptied: () => tD(M.CY.EMPTIED),
                        onStalled: () => tD(M.CY.STALLED),
                        onSuspend: () => tD(M.CY.SUSPEND),
                        onClick: () => {
                            tx();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tk &&
                                (0, r.jsx)('track', {
                                    ref: e4,
                                    src: tk.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != ta &&
                                to !== I.i.VIDEO_PLAYER_VIDEO_HLS &&
                                (0, r.jsx)('source', {
                                    onError: () => tD(M.CY.SOURCE_ERROR),
                                    src: ta.url,
                                    type: ta.mimetype
                                })
                        ]
                    }),
                    (ek || eP) &&
                        eD === M.rq.PLAYING &&
                        (0, r.jsx)(m.$jN, {
                            type: m.$jN.Type.WANDERING_CUBES,
                            className: V.loadingSpinner
                        }),
                    eD === M.rq.PAUSED && e3 === M.yE.LOST_FOCUS && (0, r.jsx)(G, {}),
                    ev &&
                        eD !== M.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.P3F, {
                                    onClick: () => eE(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: V.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: V.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tj, tb], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(k.K, {
                                        quest: ei,
                                        onClose: () => {
                                            eE(!1),
                                                em({
                                                    questId: ei.id,
                                                    questContent: h.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: V.videoFooterContGradient,
                        style: {
                            opacity: (0, a.to)(
                                [
                                    tj.to({
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
                            className: s()(V.playPausePopCont, {
                                [V.play]: eD === M.rq.PLAYING,
                                [V.pause]: eD === M.rq.PAUSED
                            }),
                            children: eD === M.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: V.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: V.playPausePopIcon })
                        },
                        eD
                    ),
                    ep &&
                        null != tl &&
                        (0, r.jsx)(a.animated.div, {
                            className: V.captionContainer,
                            ref: tA,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        tj.to({
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
                                className: V.captionText,
                                children: tl.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: V.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    tj.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    tj.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    tj.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(R.Z, {
                                percent: eb,
                                animate: !0 !== e9.current && !eO,
                                interactionEnabled: e7 && eH,
                                backgroundColor: tp ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tp ? ey : void 0,
                                duration: null !== (q = null === (d = e6.current) || void 0 === d ? void 0 : d.duration) && void 0 !== q ? q : 1,
                                maxSeekableTime: tp && eH ? ts : void 0,
                                onClick: (e) => {
                                    tg(e), eD === M.rq.ENDED && td(M.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    tf();
                                },
                                onScrubForward: () => {
                                    tS();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: V.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            tj.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            tj.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            tj.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(L.Z, {
                                    videoRef: e6,
                                    quest: ei,
                                    playerState: eD,
                                    animSpring: tj,
                                    visible: tp,
                                    seekForwardEnabled: tM,
                                    hideCaptionBtn: null == tk,
                                    handlePlaybackBtnClick: tx,
                                    handleTranscriptBtnClick: () => {
                                        ev || (null != e8 && e8.questId === ei.id && e8.fetchStatus !== D.iF.NONE && e8.fetchStatus !== D.iF.FAILURE) || (0, _.lL)(ei),
                                            eE(!ev),
                                            em({
                                                questId: ei.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: ev ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        eC(!ep),
                                            em({
                                                questId: ei.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: ep ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !ef,
                                            n = (0, S.fn)(null === (e = e6.current) || void 0 === e ? void 0 : e.parentNode, e6.current);
                                        t && null != n
                                            ? ((0, S.Dj)(n),
                                              n.addEventListener(S.NO, tC),
                                              ed({
                                                  questId: ei.id,
                                                  event: F.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: es }
                                              }))
                                            : t ||
                                              null == n ||
                                              (n.removeEventListener(S.NO, tC),
                                              ed({
                                                  questId: ei.id,
                                                  event: F.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: es }
                                              }),
                                              (0, S.Pr)(n)),
                                            eS(t);
                                    },
                                    handleSeekBackBtnClick: tf,
                                    handleSeekForwardBtnClick: tS,
                                    handleControlBarPendingInteraction: eG
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
