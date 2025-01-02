n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(752877),
    a = n(232713),
    u = n(442837),
    c = n(780384),
    d = n(481060),
    m = n(607070),
    v = n(70097),
    E = n(210887),
    p = n(866960),
    f = n(228488),
    C = n(617136),
    S = n(272008),
    g = n(497505),
    x = n(918701),
    h = n(184299),
    _ = n(720293),
    T = n(602667),
    D = n(341907),
    N = n(881773),
    I = n(355243),
    A = n(106743),
    j = n(223418),
    b = n(604162),
    L = n(747717),
    R = n(281055),
    O = n(920393),
    k = n(981631),
    M = n(217702),
    P = n(388032),
    y = n(451680);
let q = new Set([k.IyS.FIVE_G, k.IyS.FOUR_G, k.IyS.UNKNOWN]),
    w = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function B() {
    let e = (0, u.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: y.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: P.intl.string(P.t.U7Xrb2)
        })
    });
}
function U(e) {
    let { quest: t, shouldShow: n } = e,
        l = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(T.A, {
              questOrQuests: t,
              questContent: g.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: o()(y.stillFrameImageCard, { [y.stillFrameImageCardHidden]: !n })
                  })
          });
}
function F(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [u, c] = i.useState(!1),
        m = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: o()(y.endScreenPanel, y.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: v,
        onFocus: m,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: y.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: y.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            className: y.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            className: y.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(L.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: y.endScreenIcon
                })
            ]
        })
    });
}
function Z(e) {
    var t, n, l, c, E, T, L, Z, V, Y, G;
    let { quest: z, videoSessionId: H, onOptimisticProgressUpdate: K, autoplay: Q, parentTransitionState: W } = e,
        X = (0, C._F)(),
        J = (0, C.O5)(),
        $ = (0, h.km)((e) => e.transcriptEnabled),
        ee = (0, h.km)((e) => e.setTranscriptEnabled),
        et = (0, h.km)((e) => e.captionEnabled),
        en = (0, h.km)((e) => e.setCaptionEnabled),
        er = (0, h.km)((e) => e.fullScreenEnabled),
        ei = (0, h.km)((e) => e.setFullScreenEnabled),
        { focused: el, focusedChanged: eo } = (0, R.xU)(),
        { visible: es, visibleChanged: ea, targetRef: eu } = (0, R.Yy)(),
        [ec, ed] = i.useState(!0 === Q ? j.rq.PLAYING : j.rq.PAUSED),
        [em, ev] = i.useState(!1),
        eE = (0, x.il)(z),
        [ep, ef] = i.useState(eE.percentComplete),
        [eC, eS] = i.useState(!1),
        [eg, ex] = i.useState(!0),
        [eh, e_] = i.useState(!1),
        [eT, eD] = i.useState([]),
        [eN, eI] = i.useState(p.Z.getEffectiveConnectionSpeed()),
        [eA, ej] = i.useState(0),
        [eb, eL] = i.useState(0),
        [eR, eO] = i.useState(!1),
        [ek, eM] = i.useState(!1),
        eP = i.useRef(null),
        ey = i.useRef(null),
        eq = (0, i.useRef)(-1),
        ew = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[z.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, a.X),
        eB = (0, h.km)((e) => e.setVideoProgress),
        eU = (0, h.km)((e) => e.muted),
        eF = (0, h.km)((e) => e.volume),
        eZ = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        eV = (0, i.useRef)(null),
        eY = (0, i.useRef)(null),
        eG = i.useRef(!0),
        ez = (null === (t = z.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eH = (0, h.km)((e) => e.transcript),
        [eK, eQ] = i.useState(null),
        [eW, eX] = i.useState(!1),
        [eJ, e$] = i.useState(!1),
        [e0, e1] = i.useState(null),
        e2 = ez ? (null !== (L = null === (n = eV.current) || void 0 === n ? void 0 : n.duration) && void 0 !== L ? L : 0) : Math.max(ew.maxTimestampSec, eE.progressSeconds),
        e4 = i.useMemo(() => (q.has(eN) ? _.i.VIDEO_PLAYER_VIDEO : _.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eN]),
        e6 = i.useMemo(() => (null != e4 ? (0, _.z)(e4, z) : null), [e4, z]),
        e7 = i.useCallback(
            (e) => {
                null != eV.current &&
                    X({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e4,
                            quest_completed: ez,
                            video_duration_sec: eV.current.duration,
                            video_progress: (0, D.formatVideoProgressRatio)(e.segment_end_sec, eV.current.duration),
                            video_session_id: H
                        }
                    });
            },
            [X, z.id, e4, ez, H]
        ),
        { forceSendCurrentSegment: e9 } = (0, O.Z)({
            videoRef: eV,
            isPlaying: ec === j.rq.PLAYING,
            isMetadataLoaded: eW,
            isInitialSeekComplete: eJ,
            onAnalytics: e7,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e8 = i.useCallback(
            (e) => {
                if ((ed(e), null != eV.current))
                    switch (e) {
                        case j.rq.PLAYING:
                            eV.current.play(),
                                X({
                                    questId: z.id,
                                    event: k.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eV.current.currentTime,
                                        pause_reason: eK,
                                        video_session_id: H
                                    }
                                }),
                                eQ(null);
                            break;
                        case j.rq.PAUSED:
                            eV.current.pause(), e9();
                            break;
                        case j.rq.ENDED:
                            ee(!1), e9();
                    }
            },
            [X, z.id, eK, H, e9, ee]
        );
    i.useLayoutEffect(() => {
        eG.current && ((eG.current = !1), eI(p.Z.getEffectiveConnectionSpeed()), ez && ew.timestampSec >= ew.duration && eB(z.id, 0, ew.duration));
    }, []),
        i.useEffect(() => {
            null != eV.current &&
                null != eK &&
                X({
                    questId: z.id,
                    event: k.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eV.current.currentTime,
                        reason: eK,
                        video_session_id: H
                    }
                });
        }, [eK, z.id, X, H]),
        i.useEffect(() => {
            eo &&
                null != eV.current &&
                X({
                    questId: z.id,
                    event: el ? k.rMx.QUEST_VIDEO_APP_FOCUSED : k.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eV.current.currentTime,
                        video_state: ec,
                        video_session_id: H
                    }
                });
        }, [el, eo, ec, z.id, X, H]);
    let e3 = i.useCallback(
        (e) => {
            var t;
            !ez && (null === (t = z.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, x.FI)(z, e),
                null != eV.current &&
                    X({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, D.formatVideoProgressRatio)(eV.current.currentTime, eV.current.duration),
                            video_timestamp_seconds: eV.current.currentTime,
                            video_session_id: H
                        }
                    });
        },
        [ez, z, X, H]
    );
    i.useEffect(() => {
        (W === d.ModalTransitionState.HIDDEN || W === d.ModalTransitionState.EXITING || W === d.ModalTransitionState.EXITED || (null != W && ea && !es && !ez) || (eo && !el && !ez)) && null != eV.current && ec === j.rq.PLAYING && (e8(j.rq.PAUSED), !ez && eQ(j.yE.LOST_FOCUS));
    }, [W, el, eo, es, ea, ec, ez, e8, e3]);
    let e5 = () => {
            ev(!0);
        },
        te = () => {
            ev(!1);
        },
        tt = em || ec === j.rq.PAUSED || ec === j.rq.ENDED,
        tn = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(null === (e = eV.current) || void 0 === e ? void 0 : e.parentNode, eV.current);
            null != t &&
                !(0, f.rB)(t) &&
                (t.removeEventListener(f.NO, tn),
                ei(!1),
                X({
                    questId: z.id,
                    event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: H }
                }));
        }, [z.id, ei, X, H]),
        tr = () => {
            if (null != eV.current)
                tl(Math.max(eV.current.currentTime - 10, 0)),
                    ec === j.rq.ENDED && e8(j.rq.PAUSED),
                    J({
                        questId: z.id,
                        questContent: g.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        ti = () => {
            if (null == eV.current || !tx) return;
            let e = Math.min(eV.current.currentTime + 10, e2);
            tl(e),
                ec !== j.rq.ENDED && e >= eV.current.duration && e8(j.rq.ENDED),
                J({
                    questId: z.id,
                    questContent: g.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = eV.current;
        return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, tn);
        };
    }, [tn]);
    let tl = i.useCallback(
            (e) => {
                null != eV.current && (e9(), eS(!0), e$(!1), (eV.current.currentTime = e), eB(z.id, e, eV.current.duration));
            },
            [eV, eB, z.id, e9]
        ),
        to = () => {
            if (null != eV.current)
                switch (ec) {
                    case j.rq.ENDED:
                        tl(0), e8(j.rq.PLAYING);
                        break;
                    case j.rq.PLAYING:
                        e8(j.rq.PAUSED), eQ(j.yE.PAUSE_BUTTON);
                        break;
                    default:
                        e8(j.rq.PLAYING);
                }
        },
        ts = (e) => {
            e1(e);
        },
        ta = (e) => {
            e1((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tu = i.useCallback(() => {
            if (null == eV.current || 0 === eV.current.textTracks.length) return;
            let e = eV.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, b.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => ts(n)), (n.onexit = () => ta(n)));
                }
        }, [eV]);
    i.useEffect(() => {
        if (null == eY.current) return;
        let e = eY.current;
        return (
            e.addEventListener('load', tu),
            () => {
                null != e && e.removeEventListener('load', tu);
            }
        );
    }, [eY, tu]);
    let tc = i.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = eV.current) || void 0 === t ? void 0 : t.error,
                        i = null === (n = eV.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != eV.current ? (0, D.formatVideoProgressRatio)(eV.current.currentTime, eV.current.duration) : void 0;
                    X({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: l,
                            video_error_type: e,
                            video_asset_id: e4,
                            network_connection_speed: eN,
                            video_session_id: H,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: i
                        }
                    });
                } catch (e) {}
            },
            [eN, z.id, X, e4, H]
        ),
        td = (e) => {
            if (null != eV.current && ec === j.rq.PLAYING) {
                if ((eg && ex(!1), eh)) {
                    let e = null != ey.current ? Date.now() - ey.current : null;
                    X({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: e4,
                            network_connection_speed: eN,
                            duration: e,
                            buffer_index: eq.current,
                            video_session_id: H
                        }
                    }),
                        e_(!1);
                }
                e8(j.rq.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!eC) return;
        let e = setTimeout(() => {
            eS(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eC]);
    let [{ controlBarAnimSpring: tm }, tv] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: w,
            onStart: () => {
                eM(!1);
            },
            onRest: (e) => {
                1 === e.value && eM(!0);
            }
        })),
        tE = (0, i.useRef)(null),
        [{ captionHeightSpring: tp }, tf] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: w
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tf({
                captionHeightSpring: et && null != e0 && null !== (t = null === (e = tE.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eZ
            }),
            () => {
                tp.stop();
            }
        );
    }, [et, tf, eZ, e0, tp]),
        i.useEffect(
            () => (
                tv({
                    controlBarAnimSpring: tt || eR ? 1 : 0,
                    immediate: eZ
                }),
                () => {
                    tm.stop();
                }
            ),
            [tt, tv, eZ, eR, tm]
        );
    let tC = ec === j.rq.ENDED,
        tS = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, z), [z]),
        tg = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, z), [z]),
        tx = ez || ew.maxTimestampSec >= (null !== (Z = null === (l = eV.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== Z ? Z : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: y.videoCont,
            'data-fullscreen': er,
            tabIndex: -1,
            onMouseEnter: e5,
            onMouseLeave: te,
            onFocus: e5,
            onBlur: te,
            children: (0, r.jsxs)('div', {
                className: y.videoContInnerRelative,
                children: [
                    (0, r.jsx)(U, {
                        quest: z,
                        shouldShow: tC
                    }),
                    tC && (0, r.jsx)('div', { className: y.videoContOverlay }),
                    (0, r.jsxs)(v.Z, {
                        ref: (e) => {
                            (eV.current = e), (eu.current = e);
                        },
                        autoPlay: Q,
                        playsInline: !0,
                        mediaLayoutType: er ? M.hV.STATIC : M.hV.RESPONSIVE,
                        className: o()({
                            [y.hidden]: tC,
                            [y.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tS ? void 0 : tS.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eV.current && (eV.current.currentTime >= eA && (ej(eV.current.currentTime + 6 + 2 * Math.random()), e3(eV.current.currentTime)), eV.current.currentTime >= eb && (eL(eV.current.currentTime + 1), (0, S.qm)(z.id, eE.taskType, eV.current.currentTime), K(eV.current.currentTime)), eB(z.id, eV.current.currentTime, eV.current.duration), ef((eV.current.currentTime / eV.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eV.current && (e3(eV.current.duration + 1), eB(z.id, eV.current.duration, eV.current.duration)), e8(j.rq.ENDED), e_(!1);
                        },
                        onLoadedData: (e) => {
                            if (eg) {
                                let e = null != eP.current ? Date.now() - eP.current : null;
                                X({
                                    questId: z.id,
                                    event: k.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e4,
                                        network_connection_speed: eN,
                                        duration: e,
                                        video_session_id: H
                                    }
                                }),
                                    ex(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eV.current) eX(!0), tl(ez ? ew.timestampSec : Math.max(ew.timestampSec, eE.progressSeconds)), eU ? (eV.current.volume = 0) : (eV.current.volume = eF);
                        },
                        onLoadStart: () => {
                            (eP.current = Date.now()),
                                X({
                                    questId: z.id,
                                    event: k.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e4,
                                        network_connection_speed: eN,
                                        video_session_id: H
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (ey.current = Date.now()),
                                (eq.current += 1),
                                X({
                                    questId: z.id,
                                    event: k.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e4,
                                        network_connection_speed: eN,
                                        buffer_index: eq.current,
                                        video_session_id: H
                                    }
                                }),
                                e_(!0);
                        },
                        onProgress: (e) => {
                            if (null == eV.current) return;
                            let t = [];
                            for (let e = 0; e < eV.current.buffered.length; e++) {
                                let n = eV.current.buffered.start(e),
                                    r = eV.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eV.current.duration,
                                        size: (r - n) / eV.current.duration
                                    });
                            }
                            eD(t);
                        },
                        onCanPlay: td,
                        onCanPlayThrough: td,
                        onSeeked: () => {
                            e$(!0);
                        },
                        onAbort: () => tc(j.CY.ABORT),
                        onError: () => tc(j.CY.ERROR),
                        onEmptied: () => tc(j.CY.EMPTIED),
                        onStalled: () => tc(j.CY.STALLED),
                        onSuspend: () => tc(j.CY.SUSPEND),
                        onClick: () => {
                            to();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tg &&
                                (0, r.jsx)('track', {
                                    ref: eY,
                                    src: tg.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e6 &&
                                (0, r.jsx)('source', {
                                    onError: () => tc(j.CY.SOURCE_ERROR),
                                    src: e6.url,
                                    type: e6.mimetype
                                })
                        ]
                    }),
                    (eg || eh) &&
                        ec === j.rq.PLAYING &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: y.loadingSpinner
                        }),
                    ec === j.rq.PAUSED && eK === j.yE.LOST_FOCUS && (0, r.jsx)(B, {}),
                    $ &&
                        ec !== j.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => ee(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: y.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: y.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([tm, tp], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(A.K, {
                                        quest: z,
                                        onClose: () => {
                                            ee(!1),
                                                J({
                                                    questId: z.id,
                                                    questContent: g.jn.VIDEO_MODAL,
                                                    questContentCTA: C.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ec === j.rq.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(F, {
                                title: null !== (V = null === (c = z.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== V ? V : P.intl.string(P.t.iiTtpK),
                                subtitle: null !== (Y = null === (E = z.config.videoMetadata) || void 0 === E ? void 0 : E.messages.videoEndCtaSubtitle) && void 0 !== Y ? Y : P.intl.string(P.t.mxaHf3),
                                icon: d.ArrowLargeRightIcon,
                                className: y.endScreenPanelRight,
                                onClick: () => {
                                    J({
                                        questId: z.id,
                                        questContent: g.jn.VIDEO_MODAL,
                                        questContentCTA: C.jZ.LEARN_MORE
                                    }),
                                        (0, x.FE)(z, {
                                            content: g.jn.VIDEO_MODAL,
                                            ctaContent: C.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: y.videoFooterContGradient,
                        style: {
                            opacity: (0, s.to)(
                                [
                                    tm.to({
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
                            className: o()(y.playPausePopCont, {
                                [y.play]: ec === j.rq.PLAYING,
                                [y.pause]: ec === j.rq.PAUSED
                            }),
                            children: ec === j.rq.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: y.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: y.playPausePopIcon })
                        },
                        ec
                    ),
                    et &&
                        null != e0 &&
                        (0, r.jsx)(s.animated.div, {
                            className: y.captionContainer,
                            ref: tE,
                            style: {
                                translateY: (0, s.to)(
                                    [
                                        tm.to({
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
                                className: y.captionText,
                                children: e0.text
                            })
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: y.videoFooterCont,
                        style: {
                            paddingLeft: (0, s.to)(
                                [
                                    tm.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, s.to)(
                                [
                                    tm.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, s.to)(
                                [
                                    tm.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(I.Z, {
                                percent: ep,
                                animate: !0 !== eG.current && !eC,
                                interactionEnabled: ez && ek,
                                backgroundColor: tt ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: tt ? eT : void 0,
                                duration: null !== (G = null === (T = eV.current) || void 0 === T ? void 0 : T.duration) && void 0 !== G ? G : 1,
                                maxSeekableTime: tt && ek ? e2 : void 0,
                                onClick: (e) => {
                                    tl(e), ec === j.rq.ENDED && e8(j.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    tr();
                                },
                                onScrubForward: () => {
                                    ti();
                                }
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: y.videoControlsCont,
                                style: {
                                    paddingTop: (0, s.to)(
                                        [
                                            tm.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [
                                            tm.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, s.to)(
                                        [
                                            tm.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(N.Z, {
                                    videoRef: eV,
                                    quest: z,
                                    playerState: ec,
                                    animSpring: tm,
                                    visible: tt,
                                    seekForwardEnabled: tx,
                                    hideCaptionBtn: null == tg,
                                    handlePlaybackBtnClick: to,
                                    handleTranscriptBtnClick: () => {
                                        !$ && (null == eH || eH.questId !== z.id || eH.fetchStatus === h.iF.NONE || eH.fetchStatus === h.iF.FAILURE) && (0, S.lL)(z),
                                            ee(!$),
                                            J({
                                                questId: z.id,
                                                questContent: g.jn.VIDEO_MODAL,
                                                questContentCTA: $ ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        en(!et),
                                            J({
                                                questId: z.id,
                                                questContent: g.jn.VIDEO_MODAL,
                                                questContentCTA: et ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !er,
                                            n = (0, f.fn)(null === (e = eV.current) || void 0 === e ? void 0 : e.parentNode, eV.current);
                                        t && null != n
                                            ? ((0, f.Dj)(n),
                                              n.addEventListener(f.NO, tn),
                                              X({
                                                  questId: z.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: H }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(f.NO, tn),
                                              X({
                                                  questId: z.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: H }
                                              }),
                                              (0, f.Pr)(n)),
                                            ei(t);
                                    },
                                    handleSeekBackBtnClick: tr,
                                    handleSeekForwardBtnClick: ti,
                                    handleControlBarPendingInteraction: eO
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
