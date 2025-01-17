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
    var t, n, l, d, p, j, P, K, Q, W, X, J, $, ee, et;
    let { quest: en, videoSessionId: er, onOptimisticProgressUpdate: ei, autoplay: el, parentTransitionState: eo } = e,
        es = (0, x.aM)(),
        ea = (0, g._F)(),
        eu = (0, g.O5)(),
        ec = (0, N.km)((e) => e.transcriptEnabled),
        ed = (0, N.km)((e) => e.setTranscriptEnabled),
        em = (0, N.km)((e) => e.captionEnabled),
        ev = (0, N.km)((e) => e.setCaptionEnabled),
        eE = (0, N.km)((e) => e.fullScreenEnabled),
        eC = (0, N.km)((e) => e.setFullScreenEnabled),
        { focused: ep, focusedChanged: ef } = (0, y.xU)(),
        { visible: eS, visibleChanged: eg, targetRef: ex } = (0, y.Yy)(),
        [eh, e_] = i.useState(!0 === el ? k.rq.PLAYING : k.rq.PAUSED),
        [eT, eN] = i.useState(!1),
        eD = (0, T.il)(en),
        [eI, ej] = i.useState(eD.percentComplete),
        [eA, eb] = i.useState(!1),
        [eL, eR] = i.useState(!0),
        [eO, ek] = i.useState(!1),
        [eM, eP] = i.useState([]),
        [ey, eq] = i.useState(f.Z.getEffectiveConnectionSpeed()),
        [eB, ew] = i.useState(0),
        [eU, eZ] = i.useState(0),
        [eF, eV] = i.useState(!1),
        [eY, eG] = i.useState(!1),
        ez = i.useRef(null),
        eH = i.useRef(null),
        eK = (0, i.useRef)(-1),
        eQ = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[en.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, u.X),
        eW = (0, N.km)((e) => e.setVideoProgress),
        eX = (0, N.km)((e) => e.muted),
        eJ = (0, N.km)((e) => e.volume),
        e$ = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
        e0 = (0, i.useRef)(null),
        e1 = (0, i.useRef)(null),
        e2 = i.useRef(!0),
        e4 = (null === (t = en.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        e6 = (0, N.km)((e) => e.transcript),
        [e9, e7] = i.useState(null),
        [e8, e3] = i.useState(!1),
        [e5, te] = i.useState(!1),
        [tt, tn] = i.useState(null),
        tr = e4 ? (null !== (p = null === (n = e0.current) || void 0 === n ? void 0 : n.duration) && void 0 !== p ? p : 0) : Math.max(eQ.maxTimestampSec, eD.progressSeconds),
        ti = i.useMemo(() => (V.has(ey) ? I.i.VIDEO_PLAYER_VIDEO : I.i.VIDEO_PLAYER_VIDEO_LOW_RES), [ey]),
        tl = i.useMemo(() => (null != ti ? (0, I.z)(ti, en) : null), [ti, en]),
        to = i.useCallback(
            (e) => {
                null != e0.current &&
                    ea({
                        questId: en.id,
                        event: w.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: ti,
                            quest_completed: e4,
                            video_duration_sec: e0.current.duration,
                            video_progress: (0, A.formatVideoProgressRatio)(e.segment_end_sec, e0.current.duration),
                            video_session_id: er
                        }
                    });
            },
            [ea, en.id, ti, e4, er]
        ),
        { forceSendCurrentSegment: ts } = (0, q.Z)({
            videoRef: e0,
            isPlaying: eh === k.rq.PLAYING,
            isMetadataLoaded: e8,
            isInitialSeekComplete: e5,
            onAnalytics: to,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        ta = i.useCallback(
            (e) => {
                if ((e_(e), null != e0.current))
                    switch (e) {
                        case k.rq.PLAYING:
                            e0.current.play(),
                                ea({
                                    questId: en.id,
                                    event: w.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: e0.current.currentTime,
                                        pause_reason: e9,
                                        video_session_id: er
                                    }
                                }),
                                e7(null);
                            break;
                        case k.rq.PAUSED:
                            e0.current.pause(), ts();
                            break;
                        case k.rq.ENDED:
                            ed(!1), ts();
                    }
            },
            [ea, en.id, e9, er, ts, ed]
        );
    (0, v.N)(() => {
        e2.current && ((e2.current = !1), eq(f.Z.getEffectiveConnectionSpeed()), e4 && eQ.timestampSec >= eQ.duration && eW(en.id, 0, eQ.duration));
    }),
        i.useEffect(() => {
            null != e0.current &&
                null != e9 &&
                ea({
                    questId: en.id,
                    event: w.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: e0.current.currentTime,
                        reason: e9,
                        video_session_id: er
                    }
                });
        }, [e9, en.id, ea, er]),
        i.useEffect(() => {
            ef &&
                null != e0.current &&
                ea({
                    questId: en.id,
                    event: ep ? w.rMx.QUEST_VIDEO_APP_FOCUSED : w.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: e0.current.currentTime,
                        video_state: eh,
                        video_session_id: er
                    }
                });
        }, [ep, ef, eh, en.id, ea, er]);
    let tu = i.useCallback(
        (e) => {
            var t;
            !e4 && (null === (t = en.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, T.FI)(en, e),
                null != e0.current &&
                    ea({
                        questId: en.id,
                        event: w.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, A.formatVideoProgressRatio)(e0.current.currentTime, e0.current.duration),
                            video_timestamp_seconds: e0.current.currentTime,
                            video_session_id: er
                        }
                    });
        },
        [e4, en, ea, er]
    );
    i.useEffect(() => {
        (eo === m.ModalTransitionState.HIDDEN || eo === m.ModalTransitionState.EXITING || eo === m.ModalTransitionState.EXITED || (null != eo && eg && !eS && !e4) || (ef && !ep && !e4)) && null != e0.current && eh === k.rq.PLAYING && (ta(k.rq.PAUSED), !e4 && e7(k.yE.LOST_FOCUS));
    }, [eo, ep, ef, eS, eg, eh, e4, ta, tu]);
    let tc = () => {
            eN(!0);
        },
        td = () => {
            eN(!1);
        },
        tm = eT || eh === k.rq.PAUSED || eh === k.rq.ENDED,
        tv = i.useCallback(() => {
            var e;
            let t = (0, S.fn)(null === (e = e0.current) || void 0 === e ? void 0 : e.parentNode, e0.current);
            null != t &&
                !(0, S.rB)(t) &&
                (t.removeEventListener(S.NO, tv),
                eC(!1),
                ea({
                    questId: en.id,
                    event: w.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: er }
                }));
        }, [en.id, eC, ea, er]),
        tE = () => {
            if (null != e0.current)
                tp(Math.max(e0.current.currentTime - 10, 0)),
                    eh === k.rq.ENDED && ta(k.rq.PAUSED),
                    eu({
                        questId: en.id,
                        questContent: _.jn.VIDEO_MODAL,
                        questContentCTA: g.jZ.SEEK_BACKWARD
                    });
        },
        tC = () => {
            if (null == e0.current || !tR) return;
            let e = Math.min(e0.current.currentTime + 10, tr);
            tp(e),
                eh !== k.rq.ENDED && e >= e0.current.duration && ta(k.rq.ENDED),
                eu({
                    questId: en.id,
                    questContent: _.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = e0.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tv);
        };
    }, [tv]);
    let tp = i.useCallback(
            (e) => {
                null != e0.current && (ts(), eb(!0), te(!1), (e0.current.currentTime = e), eW(en.id, e, e0.current.duration));
            },
            [e0, eW, en.id, ts]
        ),
        tf = () => {
            if (null != e0.current)
                switch (eh) {
                    case k.rq.ENDED:
                        tp(0), ta(k.rq.PLAYING);
                        break;
                    case k.rq.PLAYING:
                        ta(k.rq.PAUSED), e7(k.yE.PAUSE_BUTTON);
                        break;
                    default:
                        ta(k.rq.PLAYING);
                }
        },
        tS = (e) => {
            tn(e);
        },
        tg = (e) => {
            tn((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tx = i.useCallback(() => {
            if (null == e0.current || 0 === e0.current.textTracks.length) return;
            let e = e0.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tS(n)), (n.onexit = () => tg(n)));
                }
        }, [e0]);
    i.useEffect(() => {
        if (null == e1.current) return;
        let e = e1.current;
        return (
            e.addEventListener('load', tx),
            () => {
                null != e && e.removeEventListener('load', tx);
            }
        );
    }, [e1, tx]);
    let th = i.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = e0.current) || void 0 === t ? void 0 : t.error,
                        i = null === (n = e0.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != e0.current ? (0, A.formatVideoProgressRatio)(e0.current.currentTime, e0.current.duration) : void 0;
                    ea({
                        questId: en.id,
                        event: w.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: l,
                            video_error_type: e,
                            video_asset_id: ti,
                            network_connection_speed: ey,
                            video_session_id: er,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: i
                        }
                    });
                } catch (e) {}
            },
            [ey, en.id, ea, ti, er]
        ),
        t_ = (e) => {
            if (null != e0.current && eh === k.rq.PLAYING) {
                if ((eL && eR(!1), eO)) {
                    let e = null != eH.current ? Date.now() - eH.current : null;
                    ea({
                        questId: en.id,
                        event: w.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: ti,
                            network_connection_speed: ey,
                            duration: e,
                            buffer_index: eK.current,
                            video_session_id: er
                        }
                    }),
                        ek(!1);
                }
                ta(k.rq.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!eA) return;
        let e = setTimeout(() => {
            eb(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eA]);
    let [{ controlBarAnimSpring: tT }, tN] = (0, m.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Y,
            onStart: () => {
                eG(!1);
            },
            onRest: (e) => {
                1 === e.value && eG(!0);
            }
        })),
        tD = (0, i.useRef)(null),
        [{ captionHeightSpring: tI }, tj] = (0, m.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: Y
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tj({
                captionHeightSpring: em && null != tt && null !== (t = null === (e = tD.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: e$
            }),
            () => {
                tI.stop();
            }
        );
    }, [em, tj, e$, tt, tI]),
        i.useEffect(
            () => (
                tN({
                    controlBarAnimSpring: tm || eF ? 1 : 0,
                    immediate: e$
                }),
                () => {
                    tT.stop();
                }
            ),
            [tm, tN, e$, eF, tT]
        );
    let tA = eh === k.rq.ENDED,
        tb = i.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, en), [en]),
        tL = i.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_CAPTION, en), [en]),
        tR = e4 || eQ.maxTimestampSec >= (null !== (j = null === (l = e0.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== j ? j : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.Clickable, {
            className: F.videoCont,
            'data-fullscreen': eE,
            tabIndex: -1,
            onMouseEnter: tc,
            onMouseLeave: td,
            onFocus: tc,
            onBlur: td,
            children: (0, r.jsxs)('div', {
                className: F.videoContInnerRelative,
                children: [
                    tA &&
                        ((0, D.e)({ location: B.dr.VIDEO_MODAL })
                            ? (0, r.jsx)(L.Z, {
                                  quest: en,
                                  title: null === (K = en.config.videoMetadata) || void 0 === K ? void 0 : K.messages.videoEndCtaTitle,
                                  subtitle: null === (Q = en.config.videoMetadata) || void 0 === Q ? void 0 : Q.messages.videoEndCtaSubtitle,
                                  ctaBtnLabel: null !== (X = null === (W = en.config.videoMetadata) || void 0 === W ? void 0 : W.messages.videoEndCtaButtonLabel) && void 0 !== X ? X : Z.intl.string(Z.t.iiTtpK),
                                  onCTAClick: () => {
                                      eu({
                                          questId: en.id,
                                          questContent: _.jn.VIDEO_MODAL_END_CARD,
                                          questContentCTA: g.jZ.LEARN_MORE,
                                          impressionId: es
                                      }),
                                          (0, T.FE)(en, {
                                              content: _.jn.VIDEO_MODAL_END_CARD,
                                              ctaContent: g.jZ.LEARN_MORE
                                          });
                                  }
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(z, {
                                          quest: en,
                                          shouldShow: tA
                                      }),
                                      (0, r.jsx)('div', { className: F.videoContOverlay }),
                                      (0, r.jsx)(H, {
                                          title: null !== (ee = null === (J = en.config.videoMetadata) || void 0 === J ? void 0 : J.messages.videoEndCtaTitle) && void 0 !== ee ? ee : Z.intl.string(Z.t.iiTtpK),
                                          subtitle: null !== (et = null === ($ = en.config.videoMetadata) || void 0 === $ ? void 0 : $.messages.videoEndCtaSubtitle) && void 0 !== et ? et : Z.intl.string(Z.t.mxaHf3),
                                          icon: m.ArrowLargeRightIcon,
                                          className: F.endScreenPanelRight,
                                          onClick: () => {
                                              eu({
                                                  questId: en.id,
                                                  questContent: _.jn.VIDEO_MODAL,
                                                  questContentCTA: g.jZ.LEARN_MORE
                                              }),
                                                  (0, T.FE)(en, {
                                                      content: _.jn.VIDEO_MODAL,
                                                      ctaContent: g.jZ.LEARN_MORE,
                                                      impressionId: es
                                                  });
                                          }
                                      })
                                  ]
                              })),
                    (0, r.jsxs)(C.Z, {
                        ref: (e) => {
                            (e0.current = e), (ex.current = e);
                        },
                        autoPlay: el,
                        playsInline: !0,
                        mediaLayoutType: eE ? U.hV.STATIC : U.hV.RESPONSIVE,
                        className: o()({
                            [F.hidden]: tA,
                            [F.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tb ? void 0 : tb.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != e0.current && (e0.current.currentTime >= eB && (ew(e0.current.currentTime + 6 + 2 * Math.random()), tu(e0.current.currentTime)), e0.current.currentTime >= eU && (eZ(e0.current.currentTime + 1), (0, h.qm)(en.id, eD.taskType, e0.current.currentTime), ei(e0.current.currentTime)), eW(en.id, e0.current.currentTime, e0.current.duration), ej((e0.current.currentTime / e0.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != e0.current && (tu(e0.current.duration + 1), eW(en.id, e0.current.duration, e0.current.duration)), ta(k.rq.ENDED), ek(!1);
                        },
                        onLoadedData: (e) => {
                            if (eL) {
                                let e = null != ez.current ? Date.now() - ez.current : null;
                                ea({
                                    questId: en.id,
                                    event: w.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: ti,
                                        network_connection_speed: ey,
                                        duration: e,
                                        video_session_id: er
                                    }
                                }),
                                    eR(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != e0.current) e3(!0), tp(e4 ? eQ.timestampSec : Math.max(eQ.timestampSec, eD.progressSeconds)), eX ? (e0.current.volume = 0) : (e0.current.volume = eJ);
                        },
                        onLoadStart: () => {
                            (ez.current = Date.now()),
                                ea({
                                    questId: en.id,
                                    event: w.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: ti,
                                        network_connection_speed: ey,
                                        video_session_id: er,
                                        is_hls_supported: s.ZP.isSupported()
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eH.current = Date.now()),
                                (eK.current += 1),
                                ea({
                                    questId: en.id,
                                    event: w.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: ti,
                                        network_connection_speed: ey,
                                        buffer_index: eK.current,
                                        video_session_id: er
                                    }
                                }),
                                ek(!0);
                        },
                        onProgress: (e) => {
                            if (null == e0.current) return;
                            let t = [];
                            for (let e = 0; e < e0.current.buffered.length; e++) {
                                let n = e0.current.buffered.start(e),
                                    r = e0.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / e0.current.duration,
                                        size: (r - n) / e0.current.duration
                                    });
                            }
                            eP(t);
                        },
                        onCanPlay: t_,
                        onCanPlayThrough: t_,
                        onSeeked: () => {
                            te(!0);
                        },
                        onAbort: () => th(k.CY.ABORT),
                        onError: () => th(k.CY.ERROR),
                        onEmptied: () => th(k.CY.EMPTIED),
                        onStalled: () => th(k.CY.STALLED),
                        onSuspend: () => th(k.CY.SUSPEND),
                        onClick: () => {
                            tf();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tL &&
                                (0, r.jsx)('track', {
                                    ref: e1,
                                    src: tL.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != tl &&
                                (0, r.jsx)('source', {
                                    onError: () => th(k.CY.SOURCE_ERROR),
                                    src: tl.url,
                                    type: tl.mimetype
                                })
                        ]
                    }),
                    (eL || eO) &&
                        eh === k.rq.PLAYING &&
                        (0, r.jsx)(m.Spinner, {
                            type: m.Spinner.Type.WANDERING_CUBES,
                            className: F.loadingSpinner
                        }),
                    eh === k.rq.PAUSED && e9 === k.yE.LOST_FOCUS && (0, r.jsx)(G, {}),
                    ec &&
                        eh !== k.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.Clickable, {
                                    onClick: () => ed(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: F.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: F.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tT, tI], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(O.K, {
                                        quest: en,
                                        onClose: () => {
                                            ed(!1),
                                                eu({
                                                    questId: en.id,
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
                                    tT.to({
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
                                [F.play]: eh === k.rq.PLAYING,
                                [F.pause]: eh === k.rq.PAUSED
                            }),
                            children: eh === k.rq.PLAYING ? (0, r.jsx)(m.PlayIcon, { className: F.playPausePopIcon }) : (0, r.jsx)(m.PauseIcon, { className: F.playPausePopIcon })
                        },
                        eh
                    ),
                    em &&
                        null != tt &&
                        (0, r.jsx)(a.animated.div, {
                            className: F.captionContainer,
                            ref: tD,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        tT.to({
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
                                children: tt.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: F.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    tT.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    tT.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    tT.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(R.Z, {
                                percent: eI,
                                animate: !0 !== e2.current && !eA,
                                interactionEnabled: e4 && eY,
                                backgroundColor: tm ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tm ? eM : void 0,
                                duration: null !== (P = null === (d = e0.current) || void 0 === d ? void 0 : d.duration) && void 0 !== P ? P : 1,
                                maxSeekableTime: tm && eY ? tr : void 0,
                                onClick: (e) => {
                                    tp(e), eh === k.rq.ENDED && ta(k.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    tE();
                                },
                                onScrubForward: () => {
                                    tC();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: F.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            tT.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            tT.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            tT.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(b.Z, {
                                    videoRef: e0,
                                    quest: en,
                                    playerState: eh,
                                    animSpring: tT,
                                    visible: tm,
                                    seekForwardEnabled: tR,
                                    hideCaptionBtn: null == tL,
                                    handlePlaybackBtnClick: tf,
                                    handleTranscriptBtnClick: () => {
                                        !ec && (null == e6 || e6.questId !== en.id || e6.fetchStatus === N.iF.NONE || e6.fetchStatus === N.iF.FAILURE) && (0, h.lL)(en),
                                            ed(!ec),
                                            eu({
                                                questId: en.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: ec ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        ev(!em),
                                            eu({
                                                questId: en.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: em ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !eE,
                                            n = (0, S.fn)(null === (e = e0.current) || void 0 === e ? void 0 : e.parentNode, e0.current);
                                        t && null != n
                                            ? ((0, S.Dj)(n),
                                              n.addEventListener(S.NO, tv),
                                              ea({
                                                  questId: en.id,
                                                  event: w.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: er }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(S.NO, tv),
                                              ea({
                                                  questId: en.id,
                                                  event: w.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: er }
                                              }),
                                              (0, S.Pr)(n)),
                                            eC(t);
                                    },
                                    handleSeekBackBtnClick: tE,
                                    handleSeekForwardBtnClick: tC,
                                    handleControlBarPendingInteraction: eV
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
