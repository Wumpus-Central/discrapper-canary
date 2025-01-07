n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(666912),
    a = n(232713),
    u = n(442837),
    c = n(780384),
    d = n(481060),
    m = n(493773),
    v = n(607070),
    E = n(70097),
    p = n(210887),
    C = n(866960),
    f = n(228488),
    S = n(617136),
    g = n(272008),
    x = n(497505),
    h = n(918701),
    _ = n(184299),
    T = n(720293),
    N = n(602667),
    D = n(341907),
    I = n(881773),
    A = n(355243),
    j = n(106743),
    b = n(223418),
    R = n(604162),
    L = n(747717),
    O = n(281055),
    k = n(920393),
    M = n(981631),
    P = n(217702),
    y = n(388032),
    q = n(451680);
let w = new Set([M.IyS.FIVE_G, M.IyS.FOUR_G, M.IyS.UNKNOWN]),
    B = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function U() {
    let e = (0, u.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: q.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: y.intl.string(y.t.U7Xrb2)
        })
    });
}
function F(e) {
    let { quest: t, shouldShow: n } = e,
        l = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(N.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: o()(q.stillFrameImageCard, { [q.stillFrameImageCardHidden]: !n })
                  })
          });
}
function Z(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [u, c] = i.useState(!1),
        m = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: o()(q.endScreenPanel, q.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: v,
        onFocus: m,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: q.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: q.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            className: q.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            className: q.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(L.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: q.endScreenIcon
                })
            ]
        })
    });
}
function V(e) {
    var t, n, l, c, p, N, L, V, Y, G, z;
    let { quest: H, videoSessionId: K, onOptimisticProgressUpdate: Q, autoplay: W, parentTransitionState: X } = e,
        J = (0, S._F)(),
        $ = (0, S.O5)(),
        ee = (0, _.km)((e) => e.transcriptEnabled),
        et = (0, _.km)((e) => e.setTranscriptEnabled),
        en = (0, _.km)((e) => e.captionEnabled),
        er = (0, _.km)((e) => e.setCaptionEnabled),
        ei = (0, _.km)((e) => e.fullScreenEnabled),
        el = (0, _.km)((e) => e.setFullScreenEnabled),
        { focused: eo, focusedChanged: es } = (0, O.xU)(),
        { visible: ea, visibleChanged: eu, targetRef: ec } = (0, O.Yy)(),
        [ed, em] = i.useState(!0 === W ? b.rq.PLAYING : b.rq.PAUSED),
        [ev, eE] = i.useState(!1),
        ep = (0, h.il)(H),
        [eC, ef] = i.useState(ep.percentComplete),
        [eS, eg] = i.useState(!1),
        [ex, eh] = i.useState(!0),
        [e_, eT] = i.useState(!1),
        [eN, eD] = i.useState([]),
        [eI, eA] = i.useState(C.Z.getEffectiveConnectionSpeed()),
        [ej, eb] = i.useState(0),
        [eR, eL] = i.useState(0),
        [eO, ek] = i.useState(!1),
        [eM, eP] = i.useState(!1),
        ey = i.useRef(null),
        eq = i.useRef(null),
        ew = (0, i.useRef)(-1),
        eB = (0, _.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[H.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, a.X),
        eU = (0, _.km)((e) => e.setVideoProgress),
        eF = (0, _.km)((e) => e.muted),
        eZ = (0, _.km)((e) => e.volume),
        eV = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        eY = (0, i.useRef)(null),
        eG = (0, i.useRef)(null),
        ez = i.useRef(!0),
        eH = (null === (t = H.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eK = (0, _.km)((e) => e.transcript),
        [eQ, eW] = i.useState(null),
        [eX, eJ] = i.useState(!1),
        [e$, e0] = i.useState(!1),
        [e1, e2] = i.useState(null),
        e6 = eH ? (null !== (L = null === (n = eY.current) || void 0 === n ? void 0 : n.duration) && void 0 !== L ? L : 0) : Math.max(eB.maxTimestampSec, ep.progressSeconds),
        e4 = i.useMemo(() => (w.has(eI) ? T.i.VIDEO_PLAYER_VIDEO : T.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eI]),
        e9 = i.useMemo(() => (null != e4 ? (0, T.z)(e4, H) : null), [e4, H]),
        e7 = i.useCallback(
            (e) => {
                null != eY.current &&
                    J({
                        questId: H.id,
                        event: M.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e4,
                            quest_completed: eH,
                            video_duration_sec: eY.current.duration,
                            video_progress: (0, D.formatVideoProgressRatio)(e.segment_end_sec, eY.current.duration),
                            video_session_id: K
                        }
                    });
            },
            [J, H.id, e4, eH, K]
        ),
        { forceSendCurrentSegment: e8 } = (0, k.Z)({
            videoRef: eY,
            isPlaying: ed === b.rq.PLAYING,
            isMetadataLoaded: eX,
            isInitialSeekComplete: e$,
            onAnalytics: e7,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e3 = i.useCallback(
            (e) => {
                if ((em(e), null != eY.current))
                    switch (e) {
                        case b.rq.PLAYING:
                            eY.current.play(),
                                J({
                                    questId: H.id,
                                    event: M.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eY.current.currentTime,
                                        pause_reason: eQ,
                                        video_session_id: K
                                    }
                                }),
                                eW(null);
                            break;
                        case b.rq.PAUSED:
                            eY.current.pause(), e8();
                            break;
                        case b.rq.ENDED:
                            et(!1), e8();
                    }
            },
            [J, H.id, eQ, K, e8, et]
        );
    (0, m.N)(() => {
        ez.current && ((ez.current = !1), eA(C.Z.getEffectiveConnectionSpeed()), eH && eB.timestampSec >= eB.duration && eU(H.id, 0, eB.duration));
    }),
        i.useEffect(() => {
            null != eY.current &&
                null != eQ &&
                J({
                    questId: H.id,
                    event: M.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eY.current.currentTime,
                        reason: eQ,
                        video_session_id: K
                    }
                });
        }, [eQ, H.id, J, K]),
        i.useEffect(() => {
            es &&
                null != eY.current &&
                J({
                    questId: H.id,
                    event: eo ? M.rMx.QUEST_VIDEO_APP_FOCUSED : M.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eY.current.currentTime,
                        video_state: ed,
                        video_session_id: K
                    }
                });
        }, [eo, es, ed, H.id, J, K]);
    let e5 = i.useCallback(
        (e) => {
            var t;
            !eH && (null === (t = H.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, h.FI)(H, e),
                null != eY.current &&
                    J({
                        questId: H.id,
                        event: M.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, D.formatVideoProgressRatio)(eY.current.currentTime, eY.current.duration),
                            video_timestamp_seconds: eY.current.currentTime,
                            video_session_id: K
                        }
                    });
        },
        [eH, H, J, K]
    );
    i.useEffect(() => {
        (X === d.ModalTransitionState.HIDDEN || X === d.ModalTransitionState.EXITING || X === d.ModalTransitionState.EXITED || (null != X && eu && !ea && !eH) || (es && !eo && !eH)) && null != eY.current && ed === b.rq.PLAYING && (e3(b.rq.PAUSED), !eH && eW(b.yE.LOST_FOCUS));
    }, [X, eo, es, ea, eu, ed, eH, e3, e5]);
    let te = () => {
            eE(!0);
        },
        tt = () => {
            eE(!1);
        },
        tn = ev || ed === b.rq.PAUSED || ed === b.rq.ENDED,
        tr = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(null === (e = eY.current) || void 0 === e ? void 0 : e.parentNode, eY.current);
            null != t &&
                !(0, f.rB)(t) &&
                (t.removeEventListener(f.NO, tr),
                el(!1),
                J({
                    questId: H.id,
                    event: M.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: K }
                }));
        }, [H.id, el, J, K]),
        ti = () => {
            if (null != eY.current)
                to(Math.max(eY.current.currentTime - 10, 0)),
                    ed === b.rq.ENDED && e3(b.rq.PAUSED),
                    $({
                        questId: H.id,
                        questContent: x.jn.VIDEO_MODAL,
                        questContentCTA: S.jZ.SEEK_BACKWARD
                    });
        },
        tl = () => {
            if (null == eY.current || !th) return;
            let e = Math.min(eY.current.currentTime + 10, e6);
            to(e),
                ed !== b.rq.ENDED && e >= eY.current.duration && e3(b.rq.ENDED),
                $({
                    questId: H.id,
                    questContent: x.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = eY.current;
        return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, tr);
        };
    }, [tr]);
    let to = i.useCallback(
            (e) => {
                null != eY.current && (e8(), eg(!0), e0(!1), (eY.current.currentTime = e), eU(H.id, e, eY.current.duration));
            },
            [eY, eU, H.id, e8]
        ),
        ts = () => {
            if (null != eY.current)
                switch (ed) {
                    case b.rq.ENDED:
                        to(0), e3(b.rq.PLAYING);
                        break;
                    case b.rq.PLAYING:
                        e3(b.rq.PAUSED), eW(b.yE.PAUSE_BUTTON);
                        break;
                    default:
                        e3(b.rq.PLAYING);
                }
        },
        ta = (e) => {
            e2(e);
        },
        tu = (e) => {
            e2((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tc = i.useCallback(() => {
            if (null == eY.current || 0 === eY.current.textTracks.length) return;
            let e = eY.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, R.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => ta(n)), (n.onexit = () => tu(n)));
                }
        }, [eY]);
    i.useEffect(() => {
        if (null == eG.current) return;
        let e = eG.current;
        return (
            e.addEventListener('load', tc),
            () => {
                null != e && e.removeEventListener('load', tc);
            }
        );
    }, [eG, tc]);
    let td = i.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = eY.current) || void 0 === t ? void 0 : t.error,
                        i = null === (n = eY.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != eY.current ? (0, D.formatVideoProgressRatio)(eY.current.currentTime, eY.current.duration) : void 0;
                    J({
                        questId: H.id,
                        event: M.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: l,
                            video_error_type: e,
                            video_asset_id: e4,
                            network_connection_speed: eI,
                            video_session_id: K,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: i
                        }
                    });
                } catch (e) {}
            },
            [eI, H.id, J, e4, K]
        ),
        tm = (e) => {
            if (null != eY.current && ed === b.rq.PLAYING) {
                if ((ex && eh(!1), e_)) {
                    let e = null != eq.current ? Date.now() - eq.current : null;
                    J({
                        questId: H.id,
                        event: M.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: e4,
                            network_connection_speed: eI,
                            duration: e,
                            buffer_index: ew.current,
                            video_session_id: K
                        }
                    }),
                        eT(!1);
                }
                e3(b.rq.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!eS) return;
        let e = setTimeout(() => {
            eg(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eS]);
    let [{ controlBarAnimSpring: tv }, tE] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: B,
            onStart: () => {
                eP(!1);
            },
            onRest: (e) => {
                1 === e.value && eP(!0);
            }
        })),
        tp = (0, i.useRef)(null),
        [{ captionHeightSpring: tC }, tf] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: B
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tf({
                captionHeightSpring: en && null != e1 && null !== (t = null === (e = tp.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eV
            }),
            () => {
                tC.stop();
            }
        );
    }, [en, tf, eV, e1, tC]),
        i.useEffect(
            () => (
                tE({
                    controlBarAnimSpring: tn || eO ? 1 : 0,
                    immediate: eV
                }),
                () => {
                    tv.stop();
                }
            ),
            [tn, tE, eV, eO, tv]
        );
    let tS = ed === b.rq.ENDED,
        tg = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, H), [H]),
        tx = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_CAPTION, H), [H]),
        th = eH || eB.maxTimestampSec >= (null !== (V = null === (l = eY.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== V ? V : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: q.videoCont,
            'data-fullscreen': ei,
            tabIndex: -1,
            onMouseEnter: te,
            onMouseLeave: tt,
            onFocus: te,
            onBlur: tt,
            children: (0, r.jsxs)('div', {
                className: q.videoContInnerRelative,
                children: [
                    (0, r.jsx)(F, {
                        quest: H,
                        shouldShow: tS
                    }),
                    tS && (0, r.jsx)('div', { className: q.videoContOverlay }),
                    (0, r.jsxs)(E.Z, {
                        ref: (e) => {
                            (eY.current = e), (ec.current = e);
                        },
                        autoPlay: W,
                        playsInline: !0,
                        mediaLayoutType: ei ? P.hV.STATIC : P.hV.RESPONSIVE,
                        className: o()({
                            [q.hidden]: tS,
                            [q.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tg ? void 0 : tg.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eY.current && (eY.current.currentTime >= ej && (eb(eY.current.currentTime + 6 + 2 * Math.random()), e5(eY.current.currentTime)), eY.current.currentTime >= eR && (eL(eY.current.currentTime + 1), (0, g.qm)(H.id, ep.taskType, eY.current.currentTime), Q(eY.current.currentTime)), eU(H.id, eY.current.currentTime, eY.current.duration), ef((eY.current.currentTime / eY.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eY.current && (e5(eY.current.duration + 1), eU(H.id, eY.current.duration, eY.current.duration)), e3(b.rq.ENDED), eT(!1);
                        },
                        onLoadedData: (e) => {
                            if (ex) {
                                let e = null != ey.current ? Date.now() - ey.current : null;
                                J({
                                    questId: H.id,
                                    event: M.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e4,
                                        network_connection_speed: eI,
                                        duration: e,
                                        video_session_id: K
                                    }
                                }),
                                    eh(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eY.current) eJ(!0), to(eH ? eB.timestampSec : Math.max(eB.timestampSec, ep.progressSeconds)), eF ? (eY.current.volume = 0) : (eY.current.volume = eZ);
                        },
                        onLoadStart: () => {
                            (ey.current = Date.now()),
                                J({
                                    questId: H.id,
                                    event: M.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e4,
                                        network_connection_speed: eI,
                                        video_session_id: K
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eq.current = Date.now()),
                                (ew.current += 1),
                                J({
                                    questId: H.id,
                                    event: M.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e4,
                                        network_connection_speed: eI,
                                        buffer_index: ew.current,
                                        video_session_id: K
                                    }
                                }),
                                eT(!0);
                        },
                        onProgress: (e) => {
                            if (null == eY.current) return;
                            let t = [];
                            for (let e = 0; e < eY.current.buffered.length; e++) {
                                let n = eY.current.buffered.start(e),
                                    r = eY.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eY.current.duration,
                                        size: (r - n) / eY.current.duration
                                    });
                            }
                            eD(t);
                        },
                        onCanPlay: tm,
                        onCanPlayThrough: tm,
                        onSeeked: () => {
                            e0(!0);
                        },
                        onAbort: () => td(b.CY.ABORT),
                        onError: () => td(b.CY.ERROR),
                        onEmptied: () => td(b.CY.EMPTIED),
                        onStalled: () => td(b.CY.STALLED),
                        onSuspend: () => td(b.CY.SUSPEND),
                        onClick: () => {
                            ts();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tx &&
                                (0, r.jsx)('track', {
                                    ref: eG,
                                    src: tx.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e9 &&
                                (0, r.jsx)('source', {
                                    onError: () => td(b.CY.SOURCE_ERROR),
                                    src: e9.url,
                                    type: e9.mimetype
                                })
                        ]
                    }),
                    (ex || e_) &&
                        ed === b.rq.PLAYING &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: q.loadingSpinner
                        }),
                    ed === b.rq.PAUSED && eQ === b.yE.LOST_FOCUS && (0, r.jsx)(U, {}),
                    ee &&
                        ed !== b.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => et(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: q.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: q.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([tv, tC], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(j.K, {
                                        quest: H,
                                        onClose: () => {
                                            et(!1),
                                                $({
                                                    questId: H.id,
                                                    questContent: x.jn.VIDEO_MODAL,
                                                    questContentCTA: S.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ed === b.rq.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(Z, {
                                title: null !== (Y = null === (c = H.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== Y ? Y : y.intl.string(y.t.iiTtpK),
                                subtitle: null !== (G = null === (p = H.config.videoMetadata) || void 0 === p ? void 0 : p.messages.videoEndCtaSubtitle) && void 0 !== G ? G : y.intl.string(y.t.mxaHf3),
                                icon: d.ArrowLargeRightIcon,
                                className: q.endScreenPanelRight,
                                onClick: () => {
                                    $({
                                        questId: H.id,
                                        questContent: x.jn.VIDEO_MODAL,
                                        questContentCTA: S.jZ.LEARN_MORE
                                    }),
                                        (0, h.FE)(H, {
                                            content: x.jn.VIDEO_MODAL,
                                            ctaContent: S.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: q.videoFooterContGradient,
                        style: {
                            opacity: (0, s.to)(
                                [
                                    tv.to({
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
                            className: o()(q.playPausePopCont, {
                                [q.play]: ed === b.rq.PLAYING,
                                [q.pause]: ed === b.rq.PAUSED
                            }),
                            children: ed === b.rq.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: q.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: q.playPausePopIcon })
                        },
                        ed
                    ),
                    en &&
                        null != e1 &&
                        (0, r.jsx)(s.animated.div, {
                            className: q.captionContainer,
                            ref: tp,
                            style: {
                                translateY: (0, s.to)(
                                    [
                                        tv.to({
                                            range: [0, 1],
                                            output: [0, -50]
                                        })
                                    ],
                                    (e) => ''.concat(e, 'px')
                                )
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-lg/semibold',
                                color: 'always-white',
                                className: q.captionText,
                                children: e1.text
                            })
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: q.videoFooterCont,
                        style: {
                            paddingLeft: (0, s.to)(
                                [
                                    tv.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, s.to)(
                                [
                                    tv.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, s.to)(
                                [
                                    tv.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(A.Z, {
                                percent: eC,
                                animate: !0 !== ez.current && !eS,
                                interactionEnabled: eH && eM,
                                backgroundColor: tn ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tn ? eN : void 0,
                                duration: null !== (z = null === (N = eY.current) || void 0 === N ? void 0 : N.duration) && void 0 !== z ? z : 1,
                                maxSeekableTime: tn && eM ? e6 : void 0,
                                onClick: (e) => {
                                    to(e), ed === b.rq.ENDED && e3(b.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    ti();
                                },
                                onScrubForward: () => {
                                    tl();
                                }
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: q.videoControlsCont,
                                style: {
                                    paddingTop: (0, s.to)(
                                        [
                                            tv.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [
                                            tv.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, s.to)(
                                        [
                                            tv.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(I.Z, {
                                    videoRef: eY,
                                    quest: H,
                                    playerState: ed,
                                    animSpring: tv,
                                    visible: tn,
                                    seekForwardEnabled: th,
                                    hideCaptionBtn: null == tx,
                                    handlePlaybackBtnClick: ts,
                                    handleTranscriptBtnClick: () => {
                                        !ee && (null == eK || eK.questId !== H.id || eK.fetchStatus === _.iF.NONE || eK.fetchStatus === _.iF.FAILURE) && (0, g.lL)(H),
                                            et(!ee),
                                            $({
                                                questId: H.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: ee ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        er(!en),
                                            $({
                                                questId: H.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: en ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !ei,
                                            n = (0, f.fn)(null === (e = eY.current) || void 0 === e ? void 0 : e.parentNode, eY.current);
                                        t && null != n
                                            ? ((0, f.Dj)(n),
                                              n.addEventListener(f.NO, tr),
                                              J({
                                                  questId: H.id,
                                                  event: M.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: K }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(f.NO, tr),
                                              J({
                                                  questId: H.id,
                                                  event: M.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: K }
                                              }),
                                              (0, f.Pr)(n)),
                                            el(t);
                                    },
                                    handleSeekBackBtnClick: ti,
                                    handleSeekForwardBtnClick: tl,
                                    handleControlBarPendingInteraction: ek
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
