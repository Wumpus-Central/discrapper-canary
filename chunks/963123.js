n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(837604),
    a = n(476183),
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
    h = n(272008),
    _ = n(497505),
    T = n(918701),
    N = n(184299),
    D = n(720293),
    I = n(602667),
    A = n(341907),
    j = n(881773),
    b = n(355243),
    R = n(106743),
    L = n(223418),
    O = n(604162),
    k = n(747717),
    M = n(281055),
    P = n(920393),
    y = n(981631),
    q = n(217702),
    w = n(388032),
    B = n(225624);
let U = new Set([y.IyS.FIVE_G, y.IyS.FOUR_G, y.IyS.UNKNOWN]),
    Z = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function F() {
    let e = (0, c.e7)([C.Z], () => C.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: B.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: w.intl.string(w.t.U7Xrb2)
        })
    });
}
function V(e) {
    let { quest: t, shouldShow: n } = e,
        l = i.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(I.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: o()(B.stillFrameImageCard, { [B.stillFrameImageCardHidden]: !n })
                  })
          });
}
function Y(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [u, c] = i.useState(!1),
        d = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(m.Clickable, {
        className: o()(B.endScreenPanel, B.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: v,
        onFocus: d,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: B.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: B.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.Heading, {
                            variant: 'heading-md/semibold',
                            className: B.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.Heading, {
                            variant: 'heading-sm/normal',
                            className: B.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(k.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: B.endScreenIcon
                })
            ]
        })
    });
}
function G(e) {
    var t, n, l, d, C, I, k, G, z, H, K;
    let { quest: Q, videoSessionId: W, onOptimisticProgressUpdate: X, autoplay: J, parentTransitionState: $ } = e,
        ee = (0, x.aM)(),
        et = (0, g._F)(),
        en = (0, g.O5)(),
        er = (0, N.km)((e) => e.transcriptEnabled),
        ei = (0, N.km)((e) => e.setTranscriptEnabled),
        el = (0, N.km)((e) => e.captionEnabled),
        eo = (0, N.km)((e) => e.setCaptionEnabled),
        es = (0, N.km)((e) => e.fullScreenEnabled),
        ea = (0, N.km)((e) => e.setFullScreenEnabled),
        { focused: eu, focusedChanged: ec } = (0, M.xU)(),
        { visible: ed, visibleChanged: em, targetRef: ev } = (0, M.Yy)(),
        [eE, ep] = i.useState(!0 === J ? L.rq.PLAYING : L.rq.PAUSED),
        [eC, ef] = i.useState(!1),
        eS = (0, T.il)(Q),
        [eg, ex] = i.useState(eS.percentComplete),
        [eh, e_] = i.useState(!1),
        [eT, eN] = i.useState(!0),
        [eD, eI] = i.useState(!1),
        [eA, ej] = i.useState([]),
        [eb, eR] = i.useState(f.Z.getEffectiveConnectionSpeed()),
        [eL, eO] = i.useState(0),
        [ek, eM] = i.useState(0),
        [eP, ey] = i.useState(!1),
        [eq, ew] = i.useState(!1),
        eB = i.useRef(null),
        eU = i.useRef(null),
        eZ = (0, i.useRef)(-1),
        eF = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[Q.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, u.X),
        eV = (0, N.km)((e) => e.setVideoProgress),
        eY = (0, N.km)((e) => e.muted),
        eG = (0, N.km)((e) => e.volume),
        ez = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
        eH = (0, i.useRef)(null),
        eK = (0, i.useRef)(null),
        eQ = i.useRef(!0),
        eW = (null === (t = Q.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eX = (0, N.km)((e) => e.transcript),
        [eJ, e$] = i.useState(null),
        [e0, e1] = i.useState(!1),
        [e2, e4] = i.useState(!1),
        [e6, e9] = i.useState(null),
        e7 = eW ? (null !== (k = null === (n = eH.current) || void 0 === n ? void 0 : n.duration) && void 0 !== k ? k : 0) : Math.max(eF.maxTimestampSec, eS.progressSeconds),
        e8 = i.useMemo(() => (U.has(eb) ? D.i.VIDEO_PLAYER_VIDEO : D.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eb]),
        e3 = i.useMemo(() => (null != e8 ? (0, D.z)(e8, Q) : null), [e8, Q]),
        e5 = i.useCallback(
            (e) => {
                null != eH.current &&
                    et({
                        questId: Q.id,
                        event: y.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e8,
                            quest_completed: eW,
                            video_duration_sec: eH.current.duration,
                            video_progress: (0, A.formatVideoProgressRatio)(e.segment_end_sec, eH.current.duration),
                            video_session_id: W
                        }
                    });
            },
            [et, Q.id, e8, eW, W]
        ),
        { forceSendCurrentSegment: te } = (0, P.Z)({
            videoRef: eH,
            isPlaying: eE === L.rq.PLAYING,
            isMetadataLoaded: e0,
            isInitialSeekComplete: e2,
            onAnalytics: e5,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tt = i.useCallback(
            (e) => {
                if ((ep(e), null != eH.current))
                    switch (e) {
                        case L.rq.PLAYING:
                            eH.current.play(),
                                et({
                                    questId: Q.id,
                                    event: y.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eH.current.currentTime,
                                        pause_reason: eJ,
                                        video_session_id: W
                                    }
                                }),
                                e$(null);
                            break;
                        case L.rq.PAUSED:
                            eH.current.pause(), te();
                            break;
                        case L.rq.ENDED:
                            ei(!1), te();
                    }
            },
            [et, Q.id, eJ, W, te, ei]
        );
    (0, v.N)(() => {
        eQ.current && ((eQ.current = !1), eR(f.Z.getEffectiveConnectionSpeed()), eW && eF.timestampSec >= eF.duration && eV(Q.id, 0, eF.duration));
    }),
        i.useEffect(() => {
            null != eH.current &&
                null != eJ &&
                et({
                    questId: Q.id,
                    event: y.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eH.current.currentTime,
                        reason: eJ,
                        video_session_id: W
                    }
                });
        }, [eJ, Q.id, et, W]),
        i.useEffect(() => {
            ec &&
                null != eH.current &&
                et({
                    questId: Q.id,
                    event: eu ? y.rMx.QUEST_VIDEO_APP_FOCUSED : y.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eH.current.currentTime,
                        video_state: eE,
                        video_session_id: W
                    }
                });
        }, [eu, ec, eE, Q.id, et, W]);
    let tn = i.useCallback(
        (e) => {
            var t;
            !eW && (null === (t = Q.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, T.FI)(Q, e),
                null != eH.current &&
                    et({
                        questId: Q.id,
                        event: y.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, A.formatVideoProgressRatio)(eH.current.currentTime, eH.current.duration),
                            video_timestamp_seconds: eH.current.currentTime,
                            video_session_id: W
                        }
                    });
        },
        [eW, Q, et, W]
    );
    i.useEffect(() => {
        ($ === m.ModalTransitionState.HIDDEN || $ === m.ModalTransitionState.EXITING || $ === m.ModalTransitionState.EXITED || (null != $ && em && !ed && !eW) || (ec && !eu && !eW)) && null != eH.current && eE === L.rq.PLAYING && (tt(L.rq.PAUSED), !eW && e$(L.yE.LOST_FOCUS));
    }, [$, eu, ec, ed, em, eE, eW, tt, tn]);
    let tr = () => {
            ef(!0);
        },
        ti = () => {
            ef(!1);
        },
        tl = eC || eE === L.rq.PAUSED || eE === L.rq.ENDED,
        to = i.useCallback(() => {
            var e;
            let t = (0, S.fn)(null === (e = eH.current) || void 0 === e ? void 0 : e.parentNode, eH.current);
            null != t &&
                !(0, S.rB)(t) &&
                (t.removeEventListener(S.NO, to),
                ea(!1),
                et({
                    questId: Q.id,
                    event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: W }
                }));
        }, [Q.id, ea, et, W]),
        ts = () => {
            if (null != eH.current)
                tu(Math.max(eH.current.currentTime - 10, 0)),
                    eE === L.rq.ENDED && tt(L.rq.PAUSED),
                    en({
                        questId: Q.id,
                        questContent: _.jn.VIDEO_MODAL,
                        questContentCTA: g.jZ.SEEK_BACKWARD
                    });
        },
        ta = () => {
            if (null == eH.current || !tN) return;
            let e = Math.min(eH.current.currentTime + 10, e7);
            tu(e),
                eE !== L.rq.ENDED && e >= eH.current.duration && tt(L.rq.ENDED),
                en({
                    questId: Q.id,
                    questContent: _.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = eH.current;
        return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, to);
        };
    }, [to]);
    let tu = i.useCallback(
            (e) => {
                null != eH.current && (te(), e_(!0), e4(!1), (eH.current.currentTime = e), eV(Q.id, e, eH.current.duration));
            },
            [eH, eV, Q.id, te]
        ),
        tc = () => {
            if (null != eH.current)
                switch (eE) {
                    case L.rq.ENDED:
                        tu(0), tt(L.rq.PLAYING);
                        break;
                    case L.rq.PLAYING:
                        tt(L.rq.PAUSED), e$(L.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tt(L.rq.PLAYING);
                }
        },
        td = (e) => {
            e9(e);
        },
        tm = (e) => {
            e9((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tv = i.useCallback(() => {
            if (null == eH.current || 0 === eH.current.textTracks.length) return;
            let e = eH.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, O.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => td(n)), (n.onexit = () => tm(n)));
                }
        }, [eH]);
    i.useEffect(() => {
        if (null == eK.current) return;
        let e = eK.current;
        return (
            e.addEventListener('load', tv),
            () => {
                null != e && e.removeEventListener('load', tv);
            }
        );
    }, [eK, tv]);
    let tE = i.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = eH.current) || void 0 === t ? void 0 : t.error,
                        i = null === (n = eH.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != eH.current ? (0, A.formatVideoProgressRatio)(eH.current.currentTime, eH.current.duration) : void 0;
                    et({
                        questId: Q.id,
                        event: y.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: l,
                            video_error_type: e,
                            video_asset_id: e8,
                            network_connection_speed: eb,
                            video_session_id: W,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: i
                        }
                    });
                } catch (e) {}
            },
            [eb, Q.id, et, e8, W]
        ),
        tp = (e) => {
            if (null != eH.current && eE === L.rq.PLAYING) {
                if ((eT && eN(!1), eD)) {
                    let e = null != eU.current ? Date.now() - eU.current : null;
                    et({
                        questId: Q.id,
                        event: y.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: e8,
                            network_connection_speed: eb,
                            duration: e,
                            buffer_index: eZ.current,
                            video_session_id: W
                        }
                    }),
                        eI(!1);
                }
                tt(L.rq.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!eh) return;
        let e = setTimeout(() => {
            e_(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eh]);
    let [{ controlBarAnimSpring: tC }, tf] = (0, m.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Z,
            onStart: () => {
                ew(!1);
            },
            onRest: (e) => {
                1 === e.value && ew(!0);
            }
        })),
        tS = (0, i.useRef)(null),
        [{ captionHeightSpring: tg }, tx] = (0, m.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: Z
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tx({
                captionHeightSpring: el && null != e6 && null !== (t = null === (e = tS.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: ez
            }),
            () => {
                tg.stop();
            }
        );
    }, [el, tx, ez, e6, tg]),
        i.useEffect(
            () => (
                tf({
                    controlBarAnimSpring: tl || eP ? 1 : 0,
                    immediate: ez
                }),
                () => {
                    tC.stop();
                }
            ),
            [tl, tf, ez, eP, tC]
        );
    let th = eE === L.rq.ENDED,
        t_ = i.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_THUMBNAIL, Q), [Q]),
        tT = i.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_CAPTION, Q), [Q]),
        tN = eW || eF.maxTimestampSec >= (null !== (G = null === (l = eH.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== G ? G : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.Clickable, {
            className: B.videoCont,
            'data-fullscreen': es,
            tabIndex: -1,
            onMouseEnter: tr,
            onMouseLeave: ti,
            onFocus: tr,
            onBlur: ti,
            children: (0, r.jsxs)('div', {
                className: B.videoContInnerRelative,
                children: [
                    (0, r.jsx)(V, {
                        quest: Q,
                        shouldShow: th
                    }),
                    th && (0, r.jsx)('div', { className: B.videoContOverlay }),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (eH.current = e), (ev.current = e);
                        },
                        autoPlay: J,
                        playsInline: !0,
                        mediaLayoutType: es ? q.hV.STATIC : q.hV.RESPONSIVE,
                        className: o()({
                            [B.hidden]: th,
                            [B.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == t_ ? void 0 : t_.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eH.current && (eH.current.currentTime >= eL && (eO(eH.current.currentTime + 6 + 2 * Math.random()), tn(eH.current.currentTime)), eH.current.currentTime >= ek && (eM(eH.current.currentTime + 1), (0, h.qm)(Q.id, eS.taskType, eH.current.currentTime), X(eH.current.currentTime)), eV(Q.id, eH.current.currentTime, eH.current.duration), ex((eH.current.currentTime / eH.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eH.current && (tn(eH.current.duration + 1), eV(Q.id, eH.current.duration, eH.current.duration)), tt(L.rq.ENDED), eI(!1);
                        },
                        onLoadedData: (e) => {
                            if (eT) {
                                let e = null != eB.current ? Date.now() - eB.current : null;
                                et({
                                    questId: Q.id,
                                    event: y.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e8,
                                        network_connection_speed: eb,
                                        duration: e,
                                        video_session_id: W
                                    }
                                }),
                                    eN(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eH.current) e1(!0), tu(eW ? eF.timestampSec : Math.max(eF.timestampSec, eS.progressSeconds)), eY ? (eH.current.volume = 0) : (eH.current.volume = eG);
                        },
                        onLoadStart: () => {
                            (eB.current = Date.now()),
                                et({
                                    questId: Q.id,
                                    event: y.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e8,
                                        network_connection_speed: eb,
                                        video_session_id: W,
                                        is_hls_supported: s.ZP.isSupported()
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eU.current = Date.now()),
                                (eZ.current += 1),
                                et({
                                    questId: Q.id,
                                    event: y.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e8,
                                        network_connection_speed: eb,
                                        buffer_index: eZ.current,
                                        video_session_id: W
                                    }
                                }),
                                eI(!0);
                        },
                        onProgress: (e) => {
                            if (null == eH.current) return;
                            let t = [];
                            for (let e = 0; e < eH.current.buffered.length; e++) {
                                let n = eH.current.buffered.start(e),
                                    r = eH.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eH.current.duration,
                                        size: (r - n) / eH.current.duration
                                    });
                            }
                            ej(t);
                        },
                        onCanPlay: tp,
                        onCanPlayThrough: tp,
                        onSeeked: () => {
                            e4(!0);
                        },
                        onAbort: () => tE(L.CY.ABORT),
                        onError: () => tE(L.CY.ERROR),
                        onEmptied: () => tE(L.CY.EMPTIED),
                        onStalled: () => tE(L.CY.STALLED),
                        onSuspend: () => tE(L.CY.SUSPEND),
                        onClick: () => {
                            tc();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tT &&
                                (0, r.jsx)('track', {
                                    ref: eK,
                                    src: tT.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e3 &&
                                (0, r.jsx)('source', {
                                    onError: () => tE(L.CY.SOURCE_ERROR),
                                    src: e3.url,
                                    type: e3.mimetype
                                })
                        ]
                    }),
                    (eT || eD) &&
                        eE === L.rq.PLAYING &&
                        (0, r.jsx)(m.Spinner, {
                            type: m.Spinner.Type.WANDERING_CUBES,
                            className: B.loadingSpinner
                        }),
                    eE === L.rq.PAUSED && eJ === L.yE.LOST_FOCUS && (0, r.jsx)(F, {}),
                    er &&
                        eE !== L.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.Clickable, {
                                    onClick: () => ei(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: B.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: B.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tC, tg], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(R.K, {
                                        quest: Q,
                                        onClose: () => {
                                            ei(!1),
                                                en({
                                                    questId: Q.id,
                                                    questContent: _.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    eE === L.rq.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(Y, {
                                title: null !== (z = null === (d = Q.config.videoMetadata) || void 0 === d ? void 0 : d.messages.videoEndCtaTitle) && void 0 !== z ? z : w.intl.string(w.t.iiTtpK),
                                subtitle: null !== (H = null === (C = Q.config.videoMetadata) || void 0 === C ? void 0 : C.messages.videoEndCtaSubtitle) && void 0 !== H ? H : w.intl.string(w.t.mxaHf3),
                                icon: m.ArrowLargeRightIcon,
                                className: B.endScreenPanelRight,
                                onClick: () => {
                                    en({
                                        questId: Q.id,
                                        questContent: _.jn.VIDEO_MODAL,
                                        questContentCTA: g.jZ.LEARN_MORE
                                    }),
                                        (0, T.FE)(Q, {
                                            content: _.jn.VIDEO_MODAL,
                                            ctaContent: g.jZ.LEARN_MORE,
                                            impressionId: ee
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: B.videoFooterContGradient,
                        style: {
                            opacity: (0, a.to)(
                                [
                                    tC.to({
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
                            className: o()(B.playPausePopCont, {
                                [B.play]: eE === L.rq.PLAYING,
                                [B.pause]: eE === L.rq.PAUSED
                            }),
                            children: eE === L.rq.PLAYING ? (0, r.jsx)(m.PlayIcon, { className: B.playPausePopIcon }) : (0, r.jsx)(m.PauseIcon, { className: B.playPausePopIcon })
                        },
                        eE
                    ),
                    el &&
                        null != e6 &&
                        (0, r.jsx)(a.animated.div, {
                            className: B.captionContainer,
                            ref: tS,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        tC.to({
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
                                className: B.captionText,
                                children: e6.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: B.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    tC.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    tC.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    tC.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(b.Z, {
                                percent: eg,
                                animate: !0 !== eQ.current && !eh,
                                interactionEnabled: eW && eq,
                                backgroundColor: tl ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tl ? eA : void 0,
                                duration: null !== (K = null === (I = eH.current) || void 0 === I ? void 0 : I.duration) && void 0 !== K ? K : 1,
                                maxSeekableTime: tl && eq ? e7 : void 0,
                                onClick: (e) => {
                                    tu(e), eE === L.rq.ENDED && tt(L.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    ts();
                                },
                                onScrubForward: () => {
                                    ta();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: B.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            tC.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            tC.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            tC.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(j.Z, {
                                    videoRef: eH,
                                    quest: Q,
                                    playerState: eE,
                                    animSpring: tC,
                                    visible: tl,
                                    seekForwardEnabled: tN,
                                    hideCaptionBtn: null == tT,
                                    handlePlaybackBtnClick: tc,
                                    handleTranscriptBtnClick: () => {
                                        !er && (null == eX || eX.questId !== Q.id || eX.fetchStatus === N.iF.NONE || eX.fetchStatus === N.iF.FAILURE) && (0, h.lL)(Q),
                                            ei(!er),
                                            en({
                                                questId: Q.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: er ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        eo(!el),
                                            en({
                                                questId: Q.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: el ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !es,
                                            n = (0, S.fn)(null === (e = eH.current) || void 0 === e ? void 0 : e.parentNode, eH.current);
                                        t && null != n
                                            ? ((0, S.Dj)(n),
                                              n.addEventListener(S.NO, to),
                                              et({
                                                  questId: Q.id,
                                                  event: y.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: W }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(S.NO, to),
                                              et({
                                                  questId: Q.id,
                                                  event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: W }
                                              }),
                                              (0, S.Pr)(n)),
                                            ea(t);
                                    },
                                    handleSeekBackBtnClick: ts,
                                    handleSeekForwardBtnClick: ta,
                                    handleControlBarPendingInteraction: ey
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
