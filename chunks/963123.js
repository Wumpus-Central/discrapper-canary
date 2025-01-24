n.d(t, {
    Z: function () {
        return K;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(837604),
    a = n(642128),
    u = n(232713),
    c = n(442837),
    d = n(780384),
    m = n(481060),
    v = n(493773),
    E = n(607070),
    C = n(70097),
    p = n(210887),
    f = n(866960),
    S = n(228488),
    g = n(617136),
    x = n(915750),
    h = n(272008),
    _ = n(497505),
    T = n(918701),
    N = n(184299),
    D = n(208109),
    I = n(720293),
    j = n(602667),
    A = n(341907),
    b = n(881773),
    L = n(350312),
    R = n(355243),
    O = n(106743),
    k = n(223418),
    M = n(604162),
    P = n(747717),
    y = n(281055),
    q = n(920393),
    B = n(46140),
    w = n(981631),
    U = n(217702),
    Z = n(388032),
    F = n(451680);
let V = new Set([w.IyS.FIVE_G, w.IyS.FOUR_G, w.IyS.UNKNOWN]),
    Y = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function G() {
    let e = (0, c.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: F.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Z.intl.string(Z.t.U7Xrb2)
        })
    });
}
function z(e) {
    let { quest: t, shouldShow: n } = e,
        l = i.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(j.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: o()(F.stillFrameImageCard, { [F.stillFrameImageCardHidden]: !n })
                  })
          });
}
function H(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [u, c] = i.useState(!1),
        d = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(m.Clickable, {
        className: o()(F.endScreenPanel, F.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: v,
        onFocus: d,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: F.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: F.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.Heading, {
                            variant: 'heading-md/semibold',
                            className: F.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.Heading, {
                            variant: 'heading-sm/normal',
                            className: F.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(P.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: F.endScreenIcon
                })
            ]
        })
    });
}
function K(e) {
    var t, n, l, d, p, j, P, K, Q, W, X, J, $, ee, et, en, er;
    let { quest: ei, videoSessionId: el, onOptimisticProgressUpdate: eo, autoplay: es, parentTransitionState: ea } = e,
        eu = (0, x.aM)(),
        ec = (0, g._F)(),
        ed = (0, g.O5)(),
        em = (0, N.km)((e) => e.transcriptEnabled),
        ev = (0, N.km)((e) => e.setTranscriptEnabled),
        eE = (0, N.km)((e) => e.captionEnabled),
        eC = (0, N.km)((e) => e.setCaptionEnabled),
        ep = (0, N.km)((e) => e.fullScreenEnabled),
        ef = (0, N.km)((e) => e.setFullScreenEnabled),
        { focused: eS, focusedChanged: eg } = (0, y.xU)(),
        { visible: ex, visibleChanged: eh, targetRef: e_ } = (0, y.Yy)(),
        [eT, eN] = i.useState(!0 === es ? k.rq.PLAYING : k.rq.PAUSED),
        [eD, eI] = i.useState(!1),
        ej = (0, T.il)(ei),
        [eA, eb] = i.useState(ej.percentComplete),
        [eL, eR] = i.useState(!1),
        [eO, ek] = i.useState(!0),
        [eM, eP] = i.useState(!1),
        [ey, eq] = i.useState([]),
        [eB, ew] = i.useState(f.Z.getEffectiveConnectionSpeed()),
        [eU, eZ] = i.useState(0),
        [eF, eV] = i.useState(0),
        [eY, eG] = i.useState(!1),
        [ez, eH] = i.useState(!1),
        eK = i.useRef(null),
        eQ = i.useRef(null),
        eW = (0, i.useRef)(-1),
        eX = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[ei.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, u.X),
        eJ = (0, N.km)((e) => e.setVideoProgress),
        e$ = (0, N.km)((e) => e.muted),
        e0 = (0, N.km)((e) => e.volume),
        e1 = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
        e2 = (0, i.useRef)(null),
        e4 = (0, i.useRef)(null),
        e6 = i.useRef(!0),
        e9 = (null === (t = ei.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        e7 = (0, N.km)((e) => e.transcript),
        [e8, e3] = i.useState(null),
        [e5, te] = i.useState(!1),
        [tt, tn] = i.useState(!1),
        [tr, ti] = i.useState(null),
        tl = e9 ? (null !== (p = null === (n = e2.current) || void 0 === n ? void 0 : n.duration) && void 0 !== p ? p : 0) : Math.max(eX.maxTimestampSec, ej.progressSeconds),
        to = i.useMemo(() => (V.has(eB) ? I.i.VIDEO_PLAYER_VIDEO : I.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eB]),
        ts = i.useMemo(() => (null != to ? (0, I.z)(to, ei) : null), [to, ei]),
        ta = i.useCallback(
            (e) => {
                null != e2.current &&
                    ec({
                        questId: ei.id,
                        event: w.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: to,
                            quest_completed: e9,
                            video_duration_sec: e2.current.duration,
                            video_progress: (0, A.formatVideoProgressRatio)(e.segment_end_sec, e2.current.duration),
                            video_session_id: el
                        }
                    });
            },
            [ec, ei.id, to, e9, el]
        ),
        { forceSendCurrentSegment: tu } = (0, q.Z)({
            videoRef: e2,
            isPlaying: eT === k.rq.PLAYING,
            isMetadataLoaded: e5,
            isInitialSeekComplete: tt,
            onAnalytics: ta,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tc = i.useCallback(
            (e) => {
                if ((eN(e), null != e2.current))
                    switch (e) {
                        case k.rq.PLAYING:
                            e2.current.play(),
                                ec({
                                    questId: ei.id,
                                    event: w.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: e2.current.currentTime,
                                        pause_reason: e8,
                                        video_session_id: el
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
            [ec, ei.id, e8, el, tu, ev]
        );
    (0, v.N)(() => {
        e6.current && ((e6.current = !1), ew(f.Z.getEffectiveConnectionSpeed()), e9 && eX.timestampSec >= eX.duration && eJ(ei.id, 0, eX.duration));
    }),
        i.useEffect(() => {
            null != e2.current &&
                null != e8 &&
                ec({
                    questId: ei.id,
                    event: w.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: e2.current.currentTime,
                        reason: e8,
                        video_session_id: el
                    }
                });
        }, [e8, ei.id, ec, el]),
        i.useEffect(() => {
            eg &&
                null != e2.current &&
                ec({
                    questId: ei.id,
                    event: eS ? w.rMx.QUEST_VIDEO_APP_FOCUSED : w.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e2.current.currentTime,
                        video_state: eT,
                        video_session_id: el
                    }
                });
        }, [eS, eg, eT, ei.id, ec, el]);
    let td = i.useCallback(
        (e) => {
            var t;
            !e9 && (null === (t = ei.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, T.FI)(ei, e),
                null != e2.current &&
                    ec({
                        questId: ei.id,
                        event: w.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, A.formatVideoProgressRatio)(e2.current.currentTime, e2.current.duration),
                            video_timestamp_seconds: e2.current.currentTime,
                            video_session_id: el
                        }
                    });
        },
        [e9, ei, ec, el]
    );
    i.useEffect(() => {
        (ea === m.ModalTransitionState.HIDDEN || ea === m.ModalTransitionState.EXITING || ea === m.ModalTransitionState.EXITED || (null != ea && eh && !ex && !e9) || (eg && !eS && !e9)) && null != e2.current && eT === k.rq.PLAYING && (tc(k.rq.PAUSED), !e9 && e3(k.yE.LOST_FOCUS));
    }, [ea, eS, eg, ex, eh, eT, e9, tc, td]);
    let tm = () => {
            eI(!0);
        },
        tv = () => {
            eI(!1);
        },
        tE = eD || eT === k.rq.PAUSED || eT === k.rq.ENDED,
        tC = i.useCallback(() => {
            var e;
            let t = (0, S.fn)(null === (e = e2.current) || void 0 === e ? void 0 : e.parentNode, e2.current);
            null != t &&
                !(0, S.rB)(t) &&
                (t.removeEventListener(S.NO, tC),
                ef(!1),
                ec({
                    questId: ei.id,
                    event: w.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: el }
                }));
        }, [ei.id, ef, ec, el]),
        tp = () => {
            if (null != e2.current)
                tS(Math.max(e2.current.currentTime - 10, 0)),
                    eT === k.rq.ENDED && tc(k.rq.PAUSED),
                    ed({
                        questId: ei.id,
                        questContent: _.jn.VIDEO_MODAL,
                        questContentCTA: g.jZ.SEEK_BACKWARD
                    });
        },
        tf = () => {
            if (null == e2.current || !tk) return;
            let e = Math.min(e2.current.currentTime + 10, tl);
            tS(e),
                eT !== k.rq.ENDED && e >= e2.current.duration && tc(k.rq.ENDED),
                ed({
                    questId: ei.id,
                    questContent: _.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = e2.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tC);
        };
    }, [tC]);
    let tS = i.useCallback(
            (e) => {
                null != e2.current && (tu(), eR(!0), tn(!1), (e2.current.currentTime = e), eJ(ei.id, e, e2.current.duration));
            },
            [e2, eJ, ei.id, tu]
        ),
        tg = () => {
            if (null != e2.current)
                switch (eT) {
                    case k.rq.ENDED:
                        tS(0), tc(k.rq.PLAYING);
                        break;
                    case k.rq.PLAYING:
                        tc(k.rq.PAUSED), e3(k.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tc(k.rq.PLAYING);
                }
        },
        tx = (e) => {
            ti(e);
        },
        th = (e) => {
            ti((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        t_ = i.useCallback(() => {
            if (null == e2.current || 0 === e2.current.textTracks.length) return;
            let e = e2.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tx(n)), (n.onexit = () => th(n)));
                }
        }, [e2]);
    i.useEffect(() => {
        if (null == e4.current) return;
        let e = e4.current;
        return (
            e.addEventListener('load', t_),
            () => {
                null != e && e.removeEventListener('load', t_);
            }
        );
    }, [e4, t_]);
    let tT = i.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e2.current) || void 0 === t ? void 0 : t.error,
                        i = null === (n = e2.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != e2.current ? (0, A.formatVideoProgressRatio)(e2.current.currentTime, e2.current.duration) : void 0;
                    ec({
                        questId: ei.id,
                        event: w.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: l,
                            video_error_type: e,
                            video_asset_id: to,
                            network_connection_speed: eB,
                            video_session_id: el,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: i
                        }
                    });
                } catch (e) {}
            },
            [eB, ei.id, ec, to, el]
        ),
        tN = (e) => {
            if (null != e2.current && eT === k.rq.PLAYING) {
                if ((eO && ek(!1), eM)) {
                    let e = null != eQ.current ? Date.now() - eQ.current : null;
                    ec({
                        questId: ei.id,
                        event: w.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: to,
                            network_connection_speed: eB,
                            duration: e,
                            buffer_index: eW.current,
                            video_session_id: el
                        }
                    }),
                        eP(!1);
                }
                tc(k.rq.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!eL) return;
        let e = setTimeout(() => {
            eR(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eL]);
    let [{ controlBarAnimSpring: tD }, tI] = (0, m.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Y,
            onStart: () => {
                eH(!1);
            },
            onRest: (e) => {
                1 === e.value && eH(!0);
            }
        })),
        tj = (0, i.useRef)(null),
        [{ captionHeightSpring: tA }, tb] = (0, m.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: Y
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tb({
                captionHeightSpring: eE && null != tr && null !== (t = null === (e = tj.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e1
            }),
            () => {
                tA.stop();
            }
        );
    }, [eE, tb, e1, tr, tA]),
        i.useEffect(
            () => (
                tI({
                    controlBarAnimSpring: tE || eY ? 1 : 0,
                    immediate: e1
                }),
                () => {
                    tD.stop();
                }
            ),
            [tE, tI, e1, eY, tD]
        );
    let tL = eT === k.rq.ENDED,
        tR = i.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, ei), [ei]),
        tO = i.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_CAPTION, ei), [ei]),
        tk = e9 || eX.maxTimestampSec >= (null !== (j = null === (l = e2.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== j ? j : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.Clickable, {
            className: F.videoCont,
            'data-fullscreen': ep,
            tabIndex: -1,
            onMouseEnter: tm,
            onMouseLeave: tv,
            onFocus: tm,
            onBlur: tv,
            children: (0, r.jsxs)('div', {
                className: F.videoContInnerRelative,
                children: [
                    tL &&
                        ((0, D.e)({ location: B.dr.VIDEO_MODAL })
                            ? (0, r.jsx)(L.Z, {
                                  quest: ei,
                                  title: null !== (X = null === (K = ei.config.videoMetadata) || void 0 === K ? void 0 : K.messages.videoEndCtaTitle) && void 0 !== X ? X : Z.intl.string(Z.t.Ka526u),
                                  subtitle: null !== (J = null === (Q = ei.config.videoMetadata) || void 0 === Q ? void 0 : Q.messages.videoEndCtaSubtitle) && void 0 !== J ? J : Z.intl.string(Z.t.tKMcAg),
                                  ctaBtnLabel: null !== ($ = null === (W = ei.config.videoMetadata) || void 0 === W ? void 0 : W.messages.videoEndCtaButtonLabel) && void 0 !== $ ? $ : Z.intl.string(Z.t.iiTtpK),
                                  onCTAClick: () => {
                                      ed({
                                          questId: ei.id,
                                          questContent: _.jn.VIDEO_MODAL_END_CARD,
                                          questContentCTA: g.jZ.LEARN_MORE,
                                          impressionId: eu
                                      }),
                                          (0, T.FE)(ei, {
                                              content: _.jn.VIDEO_MODAL_END_CARD,
                                              ctaContent: g.jZ.LEARN_MORE
                                          });
                                  }
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(z, {
                                          quest: ei,
                                          shouldShow: tL
                                      }),
                                      (0, r.jsx)('div', { className: F.videoContOverlay }),
                                      (0, r.jsx)(H, {
                                          title: null !== (en = null === (ee = ei.config.videoMetadata) || void 0 === ee ? void 0 : ee.messages.videoEndCtaTitle) && void 0 !== en ? en : Z.intl.string(Z.t.iiTtpK),
                                          subtitle: null !== (er = null === (et = ei.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaSubtitle) && void 0 !== er ? er : Z.intl.string(Z.t.mxaHf3),
                                          icon: m.ArrowLargeRightIcon,
                                          className: F.endScreenPanelRight,
                                          onClick: () => {
                                              ed({
                                                  questId: ei.id,
                                                  questContent: _.jn.VIDEO_MODAL,
                                                  questContentCTA: g.jZ.LEARN_MORE
                                              }),
                                                  (0, T.FE)(ei, {
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
                        autoPlay: es,
                        playsInline: !0,
                        mediaLayoutType: ep ? U.hV.STATIC : U.hV.RESPONSIVE,
                        className: o()({
                            [F.hidden]: tL,
                            [F.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tR ? void 0 : tR.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != e2.current && (e2.current.currentTime >= eU && (eZ(e2.current.currentTime + 6 + 2 * Math.random()), td(e2.current.currentTime)), e2.current.currentTime >= eF && (eV(e2.current.currentTime + 1), (0, h.qm)(ei.id, ej.taskType, e2.current.currentTime), eo(e2.current.currentTime)), eJ(ei.id, e2.current.currentTime, e2.current.duration), eb((e2.current.currentTime / e2.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != e2.current && (td(e2.current.duration + 1), eJ(ei.id, e2.current.duration, e2.current.duration)), tc(k.rq.ENDED), eP(!1);
                        },
                        onLoadedData: (e) => {
                            if (eO) {
                                let e = null != eK.current ? Date.now() - eK.current : null;
                                ec({
                                    questId: ei.id,
                                    event: w.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: to,
                                        network_connection_speed: eB,
                                        duration: e,
                                        video_session_id: el
                                    }
                                }),
                                    ek(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != e2.current) te(!0), tS(e9 ? eX.timestampSec : Math.max(eX.timestampSec, ej.progressSeconds)), e$ ? (e2.current.volume = 0) : (e2.current.volume = e0);
                        },
                        onLoadStart: () => {
                            (eK.current = Date.now()),
                                ec({
                                    questId: ei.id,
                                    event: w.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: to,
                                        network_connection_speed: eB,
                                        video_session_id: el,
                                        is_hls_supported: s.ZP.isSupported()
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eQ.current = Date.now()),
                                (eW.current += 1),
                                ec({
                                    questId: ei.id,
                                    event: w.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: to,
                                        network_connection_speed: eB,
                                        buffer_index: eW.current,
                                        video_session_id: el
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
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / e2.current.duration,
                                        size: (r - n) / e2.current.duration
                                    });
                            }
                            eq(t);
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
                            null != tO &&
                                (0, r.jsx)('track', {
                                    ref: e4,
                                    src: tO.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != ts &&
                                (0, r.jsx)('source', {
                                    onError: () => tT(k.CY.SOURCE_ERROR),
                                    src: ts.url,
                                    type: ts.mimetype
                                })
                        ]
                    }),
                    (eO || eM) &&
                        eT === k.rq.PLAYING &&
                        (0, r.jsx)(m.Spinner, {
                            type: m.Spinner.Type.WANDERING_CUBES,
                            className: F.loadingSpinner
                        }),
                    eT === k.rq.PAUSED && e8 === k.yE.LOST_FOCUS && (0, r.jsx)(G, {}),
                    em &&
                        eT !== k.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.Clickable, {
                                    onClick: () => ev(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: F.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: F.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tD, tA], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(O.K, {
                                        quest: ei,
                                        onClose: () => {
                                            ev(!1),
                                                ed({
                                                    questId: ei.id,
                                                    questContent: _.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: F.videoFooterContGradient,
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
                            className: o()(F.playPausePopCont, {
                                [F.play]: eT === k.rq.PLAYING,
                                [F.pause]: eT === k.rq.PAUSED
                            }),
                            children: eT === k.rq.PLAYING ? (0, r.jsx)(m.PlayIcon, { className: F.playPausePopIcon }) : (0, r.jsx)(m.PauseIcon, { className: F.playPausePopIcon })
                        },
                        eT
                    ),
                    eE &&
                        null != tr &&
                        (0, r.jsx)(a.animated.div, {
                            className: F.captionContainer,
                            ref: tj,
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
                                className: F.captionText,
                                children: tr.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: F.videoFooterCont,
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
                            (0, r.jsx)(R.Z, {
                                percent: eA,
                                animate: !0 !== e6.current && !eL,
                                interactionEnabled: e9 && ez,
                                backgroundColor: tE ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tE ? ey : void 0,
                                duration: null !== (P = null === (d = e2.current) || void 0 === d ? void 0 : d.duration) && void 0 !== P ? P : 1,
                                maxSeekableTime: tE && ez ? tl : void 0,
                                onClick: (e) => {
                                    tS(e), eT === k.rq.ENDED && tc(k.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    tp();
                                },
                                onScrubForward: () => {
                                    tf();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: F.videoControlsCont,
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
                                    quest: ei,
                                    playerState: eT,
                                    animSpring: tD,
                                    visible: tE,
                                    seekForwardEnabled: tk,
                                    hideCaptionBtn: null == tO,
                                    handlePlaybackBtnClick: tg,
                                    handleTranscriptBtnClick: () => {
                                        !em && (null == e7 || e7.questId !== ei.id || e7.fetchStatus === N.iF.NONE || e7.fetchStatus === N.iF.FAILURE) && (0, h.lL)(ei),
                                            ev(!em),
                                            ed({
                                                questId: ei.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: em ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        eC(!eE),
                                            ed({
                                                questId: ei.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: eE ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !ep,
                                            n = (0, S.fn)(null === (e = e2.current) || void 0 === e ? void 0 : e.parentNode, e2.current);
                                        t && null != n
                                            ? ((0, S.Dj)(n),
                                              n.addEventListener(S.NO, tC),
                                              ec({
                                                  questId: ei.id,
                                                  event: w.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: el }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(S.NO, tC),
                                              ec({
                                                  questId: ei.id,
                                                  event: w.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: el }
                                              }),
                                              (0, S.Pr)(n)),
                                            ef(t);
                                    },
                                    handleSeekBackBtnClick: tp,
                                    handleSeekForwardBtnClick: tf,
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
