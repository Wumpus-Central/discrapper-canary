n.d(t, {
    Z: function () {
        return Y;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(208404),
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
    g = n(915750),
    x = n(272008),
    h = n(497505),
    _ = n(918701),
    T = n(184299),
    N = n(720293),
    D = n(602667),
    I = n(341907),
    A = n(881773),
    j = n(355243),
    b = n(106743),
    R = n(223418),
    L = n(604162),
    O = n(747717),
    k = n(281055),
    M = n(920393),
    P = n(981631),
    y = n(217702),
    q = n(388032),
    w = n(451680);
let B = new Set([P.IyS.FIVE_G, P.IyS.FOUR_G, P.IyS.UNKNOWN]),
    U = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function F() {
    let e = (0, u.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: w.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: q.intl.string(q.t.U7Xrb2)
        })
    });
}
function Z(e) {
    let { quest: t, shouldShow: n } = e,
        l = i.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(D.A, {
              questOrQuests: t,
              questContent: h.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: o()(w.stillFrameImageCard, { [w.stillFrameImageCardHidden]: !n })
                  })
          });
}
function V(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [u, c] = i.useState(!1),
        m = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: o()(w.endScreenPanel, w.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: v,
        onFocus: m,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: w.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: w.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            className: w.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            className: w.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(O.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: w.endScreenIcon
                })
            ]
        })
    });
}
function Y(e) {
    var t, n, l, c, p, D, O, Y, G, z, H;
    let { quest: K, videoSessionId: Q, onOptimisticProgressUpdate: W, autoplay: X, parentTransitionState: J } = e,
        $ = (0, g.aM)(),
        ee = (0, S._F)(),
        et = (0, S.O5)(),
        en = (0, T.km)((e) => e.transcriptEnabled),
        er = (0, T.km)((e) => e.setTranscriptEnabled),
        ei = (0, T.km)((e) => e.captionEnabled),
        el = (0, T.km)((e) => e.setCaptionEnabled),
        eo = (0, T.km)((e) => e.fullScreenEnabled),
        es = (0, T.km)((e) => e.setFullScreenEnabled),
        { focused: ea, focusedChanged: eu } = (0, k.xU)(),
        { visible: ec, visibleChanged: ed, targetRef: em } = (0, k.Yy)(),
        [ev, eE] = i.useState(!0 === X ? R.rq.PLAYING : R.rq.PAUSED),
        [ep, eC] = i.useState(!1),
        ef = (0, _.il)(K),
        [eS, eg] = i.useState(ef.percentComplete),
        [ex, eh] = i.useState(!1),
        [e_, eT] = i.useState(!0),
        [eN, eD] = i.useState(!1),
        [eI, eA] = i.useState([]),
        [ej, eb] = i.useState(C.Z.getEffectiveConnectionSpeed()),
        [eR, eL] = i.useState(0),
        [eO, ek] = i.useState(0),
        [eM, eP] = i.useState(!1),
        [ey, eq] = i.useState(!1),
        ew = i.useRef(null),
        eB = i.useRef(null),
        eU = (0, i.useRef)(-1),
        eF = (0, T.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[K.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, a.X),
        eZ = (0, T.km)((e) => e.setVideoProgress),
        eV = (0, T.km)((e) => e.muted),
        eY = (0, T.km)((e) => e.volume),
        eG = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        ez = (0, i.useRef)(null),
        eH = (0, i.useRef)(null),
        eK = i.useRef(!0),
        eQ = (null === (t = K.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eW = (0, T.km)((e) => e.transcript),
        [eX, eJ] = i.useState(null),
        [e$, e0] = i.useState(!1),
        [e1, e2] = i.useState(!1),
        [e4, e9] = i.useState(null),
        e6 = eQ ? (null !== (O = null === (n = ez.current) || void 0 === n ? void 0 : n.duration) && void 0 !== O ? O : 0) : Math.max(eF.maxTimestampSec, ef.progressSeconds),
        e7 = i.useMemo(() => (B.has(ej) ? N.i.VIDEO_PLAYER_VIDEO : N.i.VIDEO_PLAYER_VIDEO_LOW_RES), [ej]),
        e8 = i.useMemo(() => (null != e7 ? (0, N.z)(e7, K) : null), [e7, K]),
        e3 = i.useCallback(
            (e) => {
                null != ez.current &&
                    ee({
                        questId: K.id,
                        event: P.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e7,
                            quest_completed: eQ,
                            video_duration_sec: ez.current.duration,
                            video_progress: (0, I.formatVideoProgressRatio)(e.segment_end_sec, ez.current.duration),
                            video_session_id: Q
                        }
                    });
            },
            [ee, K.id, e7, eQ, Q]
        ),
        { forceSendCurrentSegment: e5 } = (0, M.Z)({
            videoRef: ez,
            isPlaying: ev === R.rq.PLAYING,
            isMetadataLoaded: e$,
            isInitialSeekComplete: e1,
            onAnalytics: e3,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        te = i.useCallback(
            (e) => {
                if ((eE(e), null != ez.current))
                    switch (e) {
                        case R.rq.PLAYING:
                            ez.current.play(),
                                ee({
                                    questId: K.id,
                                    event: P.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: ez.current.currentTime,
                                        pause_reason: eX,
                                        video_session_id: Q
                                    }
                                }),
                                eJ(null);
                            break;
                        case R.rq.PAUSED:
                            ez.current.pause(), e5();
                            break;
                        case R.rq.ENDED:
                            er(!1), e5();
                    }
            },
            [ee, K.id, eX, Q, e5, er]
        );
    (0, m.N)(() => {
        eK.current && ((eK.current = !1), eb(C.Z.getEffectiveConnectionSpeed()), eQ && eF.timestampSec >= eF.duration && eZ(K.id, 0, eF.duration));
    }),
        i.useEffect(() => {
            null != ez.current &&
                null != eX &&
                ee({
                    questId: K.id,
                    event: P.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: ez.current.currentTime,
                        reason: eX,
                        video_session_id: Q
                    }
                });
        }, [eX, K.id, ee, Q]),
        i.useEffect(() => {
            eu &&
                null != ez.current &&
                ee({
                    questId: K.id,
                    event: ea ? P.rMx.QUEST_VIDEO_APP_FOCUSED : P.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: ez.current.currentTime,
                        video_state: ev,
                        video_session_id: Q
                    }
                });
        }, [ea, eu, ev, K.id, ee, Q]);
    let tt = i.useCallback(
        (e) => {
            var t;
            !eQ && (null === (t = K.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, _.FI)(K, e),
                null != ez.current &&
                    ee({
                        questId: K.id,
                        event: P.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, I.formatVideoProgressRatio)(ez.current.currentTime, ez.current.duration),
                            video_timestamp_seconds: ez.current.currentTime,
                            video_session_id: Q
                        }
                    });
        },
        [eQ, K, ee, Q]
    );
    i.useEffect(() => {
        (J === d.ModalTransitionState.HIDDEN || J === d.ModalTransitionState.EXITING || J === d.ModalTransitionState.EXITED || (null != J && ed && !ec && !eQ) || (eu && !ea && !eQ)) && null != ez.current && ev === R.rq.PLAYING && (te(R.rq.PAUSED), !eQ && eJ(R.yE.LOST_FOCUS));
    }, [J, ea, eu, ec, ed, ev, eQ, te, tt]);
    let tn = () => {
            eC(!0);
        },
        tr = () => {
            eC(!1);
        },
        ti = ep || ev === R.rq.PAUSED || ev === R.rq.ENDED,
        tl = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(null === (e = ez.current) || void 0 === e ? void 0 : e.parentNode, ez.current);
            null != t &&
                !(0, f.rB)(t) &&
                (t.removeEventListener(f.NO, tl),
                es(!1),
                ee({
                    questId: K.id,
                    event: P.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: Q }
                }));
        }, [K.id, es, ee, Q]),
        to = () => {
            if (null != ez.current)
                ta(Math.max(ez.current.currentTime - 10, 0)),
                    ev === R.rq.ENDED && te(R.rq.PAUSED),
                    et({
                        questId: K.id,
                        questContent: h.jn.VIDEO_MODAL,
                        questContentCTA: S.jZ.SEEK_BACKWARD
                    });
        },
        ts = () => {
            if (null == ez.current || !tT) return;
            let e = Math.min(ez.current.currentTime + 10, e6);
            ta(e),
                ev !== R.rq.ENDED && e >= ez.current.duration && te(R.rq.ENDED),
                et({
                    questId: K.id,
                    questContent: h.jn.VIDEO_MODAL,
                    questContentCTA: S.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = ez.current;
        return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, tl);
        };
    }, [tl]);
    let ta = i.useCallback(
            (e) => {
                null != ez.current && (e5(), eh(!0), e2(!1), (ez.current.currentTime = e), eZ(K.id, e, ez.current.duration));
            },
            [ez, eZ, K.id, e5]
        ),
        tu = () => {
            if (null != ez.current)
                switch (ev) {
                    case R.rq.ENDED:
                        ta(0), te(R.rq.PLAYING);
                        break;
                    case R.rq.PLAYING:
                        te(R.rq.PAUSED), eJ(R.yE.PAUSE_BUTTON);
                        break;
                    default:
                        te(R.rq.PLAYING);
                }
        },
        tc = (e) => {
            e9(e);
        },
        td = (e) => {
            e9((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tm = i.useCallback(() => {
            if (null == ez.current || 0 === ez.current.textTracks.length) return;
            let e = ez.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, L.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tc(n)), (n.onexit = () => td(n)));
                }
        }, [ez]);
    i.useEffect(() => {
        if (null == eH.current) return;
        let e = eH.current;
        return (
            e.addEventListener('load', tm),
            () => {
                null != e && e.removeEventListener('load', tm);
            }
        );
    }, [eH, tm]);
    let tv = i.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = ez.current) || void 0 === t ? void 0 : t.error,
                        i = null === (n = ez.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != ez.current ? (0, I.formatVideoProgressRatio)(ez.current.currentTime, ez.current.duration) : void 0;
                    ee({
                        questId: K.id,
                        event: P.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: l,
                            video_error_type: e,
                            video_asset_id: e7,
                            network_connection_speed: ej,
                            video_session_id: Q,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: i
                        }
                    });
                } catch (e) {}
            },
            [ej, K.id, ee, e7, Q]
        ),
        tE = (e) => {
            if (null != ez.current && ev === R.rq.PLAYING) {
                if ((e_ && eT(!1), eN)) {
                    let e = null != eB.current ? Date.now() - eB.current : null;
                    ee({
                        questId: K.id,
                        event: P.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: e7,
                            network_connection_speed: ej,
                            duration: e,
                            buffer_index: eU.current,
                            video_session_id: Q
                        }
                    }),
                        eD(!1);
                }
                te(R.rq.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!ex) return;
        let e = setTimeout(() => {
            eh(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ex]);
    let [{ controlBarAnimSpring: tp }, tC] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: U,
            onStart: () => {
                eq(!1);
            },
            onRest: (e) => {
                1 === e.value && eq(!0);
            }
        })),
        tf = (0, i.useRef)(null),
        [{ captionHeightSpring: tS }, tg] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: U
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tg({
                captionHeightSpring: ei && null != e4 && null !== (t = null === (e = tf.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eG
            }),
            () => {
                tS.stop();
            }
        );
    }, [ei, tg, eG, e4, tS]),
        i.useEffect(
            () => (
                tC({
                    controlBarAnimSpring: ti || eM ? 1 : 0,
                    immediate: eG
                }),
                () => {
                    tp.stop();
                }
            ),
            [ti, tC, eG, eM, tp]
        );
    let tx = ev === R.rq.ENDED,
        th = i.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, K), [K]),
        t_ = i.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_CAPTION, K), [K]),
        tT = eQ || eF.maxTimestampSec >= (null !== (Y = null === (l = ez.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== Y ? Y : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: w.videoCont,
            'data-fullscreen': eo,
            tabIndex: -1,
            onMouseEnter: tn,
            onMouseLeave: tr,
            onFocus: tn,
            onBlur: tr,
            children: (0, r.jsxs)('div', {
                className: w.videoContInnerRelative,
                children: [
                    (0, r.jsx)(Z, {
                        quest: K,
                        shouldShow: tx
                    }),
                    tx && (0, r.jsx)('div', { className: w.videoContOverlay }),
                    (0, r.jsxs)(E.Z, {
                        ref: (e) => {
                            (ez.current = e), (em.current = e);
                        },
                        autoPlay: X,
                        playsInline: !0,
                        mediaLayoutType: eo ? y.hV.STATIC : y.hV.RESPONSIVE,
                        className: o()({
                            [w.hidden]: tx,
                            [w.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == th ? void 0 : th.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != ez.current && (ez.current.currentTime >= eR && (eL(ez.current.currentTime + 6 + 2 * Math.random()), tt(ez.current.currentTime)), ez.current.currentTime >= eO && (ek(ez.current.currentTime + 1), (0, x.qm)(K.id, ef.taskType, ez.current.currentTime), W(ez.current.currentTime)), eZ(K.id, ez.current.currentTime, ez.current.duration), eg((ez.current.currentTime / ez.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != ez.current && (tt(ez.current.duration + 1), eZ(K.id, ez.current.duration, ez.current.duration)), te(R.rq.ENDED), eD(!1);
                        },
                        onLoadedData: (e) => {
                            if (e_) {
                                let e = null != ew.current ? Date.now() - ew.current : null;
                                ee({
                                    questId: K.id,
                                    event: P.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e7,
                                        network_connection_speed: ej,
                                        duration: e,
                                        video_session_id: Q
                                    }
                                }),
                                    eT(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != ez.current) e0(!0), ta(eQ ? eF.timestampSec : Math.max(eF.timestampSec, ef.progressSeconds)), eV ? (ez.current.volume = 0) : (ez.current.volume = eY);
                        },
                        onLoadStart: () => {
                            (ew.current = Date.now()),
                                ee({
                                    questId: K.id,
                                    event: P.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e7,
                                        network_connection_speed: ej,
                                        video_session_id: Q
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eB.current = Date.now()),
                                (eU.current += 1),
                                ee({
                                    questId: K.id,
                                    event: P.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e7,
                                        network_connection_speed: ej,
                                        buffer_index: eU.current,
                                        video_session_id: Q
                                    }
                                }),
                                eD(!0);
                        },
                        onProgress: (e) => {
                            if (null == ez.current) return;
                            let t = [];
                            for (let e = 0; e < ez.current.buffered.length; e++) {
                                let n = ez.current.buffered.start(e),
                                    r = ez.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / ez.current.duration,
                                        size: (r - n) / ez.current.duration
                                    });
                            }
                            eA(t);
                        },
                        onCanPlay: tE,
                        onCanPlayThrough: tE,
                        onSeeked: () => {
                            e2(!0);
                        },
                        onAbort: () => tv(R.CY.ABORT),
                        onError: () => tv(R.CY.ERROR),
                        onEmptied: () => tv(R.CY.EMPTIED),
                        onStalled: () => tv(R.CY.STALLED),
                        onSuspend: () => tv(R.CY.SUSPEND),
                        onClick: () => {
                            tu();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != t_ &&
                                (0, r.jsx)('track', {
                                    ref: eH,
                                    src: t_.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e8 &&
                                (0, r.jsx)('source', {
                                    onError: () => tv(R.CY.SOURCE_ERROR),
                                    src: e8.url,
                                    type: e8.mimetype
                                })
                        ]
                    }),
                    (e_ || eN) &&
                        ev === R.rq.PLAYING &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: w.loadingSpinner
                        }),
                    ev === R.rq.PAUSED && eX === R.yE.LOST_FOCUS && (0, r.jsx)(F, {}),
                    en &&
                        ev !== R.rq.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => er(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: w.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: w.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([tp, tS], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(b.K, {
                                        quest: K,
                                        onClose: () => {
                                            er(!1),
                                                et({
                                                    questId: K.id,
                                                    questContent: h.jn.VIDEO_MODAL,
                                                    questContentCTA: S.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ev === R.rq.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(V, {
                                title: null !== (G = null === (c = K.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== G ? G : q.intl.string(q.t.iiTtpK),
                                subtitle: null !== (z = null === (p = K.config.videoMetadata) || void 0 === p ? void 0 : p.messages.videoEndCtaSubtitle) && void 0 !== z ? z : q.intl.string(q.t.mxaHf3),
                                icon: d.ArrowLargeRightIcon,
                                className: w.endScreenPanelRight,
                                onClick: () => {
                                    et({
                                        questId: K.id,
                                        questContent: h.jn.VIDEO_MODAL,
                                        questContentCTA: S.jZ.LEARN_MORE
                                    }),
                                        (0, _.FE)(K, {
                                            content: h.jn.VIDEO_MODAL,
                                            ctaContent: S.jZ.LEARN_MORE,
                                            impressionId: $
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: w.videoFooterContGradient,
                        style: {
                            opacity: (0, s.to)(
                                [
                                    tp.to({
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
                            className: o()(w.playPausePopCont, {
                                [w.play]: ev === R.rq.PLAYING,
                                [w.pause]: ev === R.rq.PAUSED
                            }),
                            children: ev === R.rq.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: w.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: w.playPausePopIcon })
                        },
                        ev
                    ),
                    ei &&
                        null != e4 &&
                        (0, r.jsx)(s.animated.div, {
                            className: w.captionContainer,
                            ref: tf,
                            style: {
                                translateY: (0, s.to)(
                                    [
                                        tp.to({
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
                                className: w.captionText,
                                children: e4.text
                            })
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: w.videoFooterCont,
                        style: {
                            paddingLeft: (0, s.to)(
                                [
                                    tp.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, s.to)(
                                [
                                    tp.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, s.to)(
                                [
                                    tp.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(j.Z, {
                                percent: eS,
                                animate: !0 !== eK.current && !ex,
                                interactionEnabled: eQ && ey,
                                backgroundColor: ti ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: ti ? eI : void 0,
                                duration: null !== (H = null === (D = ez.current) || void 0 === D ? void 0 : D.duration) && void 0 !== H ? H : 1,
                                maxSeekableTime: ti && ey ? e6 : void 0,
                                onClick: (e) => {
                                    ta(e), ev === R.rq.ENDED && te(R.rq.PLAYING);
                                },
                                onScrubBack: () => {
                                    to();
                                },
                                onScrubForward: () => {
                                    ts();
                                }
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: w.videoControlsCont,
                                style: {
                                    paddingTop: (0, s.to)(
                                        [
                                            tp.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [
                                            tp.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, s.to)(
                                        [
                                            tp.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(A.Z, {
                                    videoRef: ez,
                                    quest: K,
                                    playerState: ev,
                                    animSpring: tp,
                                    visible: ti,
                                    seekForwardEnabled: tT,
                                    hideCaptionBtn: null == t_,
                                    handlePlaybackBtnClick: tu,
                                    handleTranscriptBtnClick: () => {
                                        !en && (null == eW || eW.questId !== K.id || eW.fetchStatus === T.iF.NONE || eW.fetchStatus === T.iF.FAILURE) && (0, x.lL)(K),
                                            er(!en),
                                            et({
                                                questId: K.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: en ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        el(!ei),
                                            et({
                                                questId: K.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: ei ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !eo,
                                            n = (0, f.fn)(null === (e = ez.current) || void 0 === e ? void 0 : e.parentNode, ez.current);
                                        t && null != n
                                            ? ((0, f.Dj)(n),
                                              n.addEventListener(f.NO, tl),
                                              ee({
                                                  questId: K.id,
                                                  event: P.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: Q }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(f.NO, tl),
                                              ee({
                                                  questId: K.id,
                                                  event: P.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: Q }
                                              }),
                                              (0, f.Pr)(n)),
                                            es(t);
                                    },
                                    handleSeekBackBtnClick: to,
                                    handleSeekForwardBtnClick: ts,
                                    handleControlBarPendingInteraction: eP
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
