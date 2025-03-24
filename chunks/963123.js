n.d(t, { Z: () => J }), n(47120), n(653041);
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
    f = n(607070),
    v = n(70097),
    g = n(210887),
    E = n(866960),
    b = n(63063),
    O = n(228488),
    h = n(617136),
    S = n(915750),
    C = n(272008),
    j = n(497505),
    y = n(918701),
    x = n(184299),
    _ = n(347382),
    N = n(5881),
    D = n(208109),
    P = n(117242),
    T = n(720293),
    I = n(602667),
    w = n(881773),
    k = n(350312),
    A = n(355243),
    L = n(106743),
    R = n(223418),
    M = n(604162),
    V = n(747717),
    q = n(281055),
    B = n(46140),
    F = n(642145),
    U = n(981631),
    Z = n(217702),
    Y = n(388032),
    Q = n(881382);
function W(e) {
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
let z = new Set([U.IyS.FIVE_G, U.IyS.FOUR_G, U.IyS.UNKNOWN]),
    G = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function H() {
    let e = (0, u.e7)([g.Z], () => g.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: Q.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Y.NW.string(Y.t.U7Xrb2)
        })
    });
}
function K(e) {
    let { quest: t, shouldShow: n } = e,
        l = o.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(I.A, {
              questOrQuests: t,
              questContent: j.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: i()(Q.stillFrameImageCard, { [Q.stillFrameImageCardHidden]: !n })
                  })
          });
}
function X(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        p = () => {
            u(!1);
        };
    return (0, r.jsx)(m.P3F, {
        className: i()(Q.endScreenPanel, Q.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: p,
        onFocus: d,
        onBlur: p,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: Q.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: Q.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-md/semibold',
                            className: Q.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-sm/normal',
                            className: Q.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(V.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: Q.endScreenIcon
                })
            ]
        })
    });
}
function $(e) {
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
function J(e) {
    var t, n, l, d, g, I, V, J, ee, et, en, er, eo, el, ei, es, ea, ec, eu;
    let { quest: ed, videoSessionId: em, onOptimisticProgressUpdate: ep, autoplay: ef, parentTransitionState: ev, performanceClockStartTime: eg } = e,
        eE = (0, S.aM)(),
        eb = (0, h._F)(),
        eO = (0, h.O5)(),
        eh = (0, x.km)((e) => e.transcriptEnabled),
        eS = (0, x.km)((e) => e.setTranscriptEnabled),
        eC = (0, x.km)((e) => e.captionEnabled),
        ej = (0, x.km)((e) => e.setCaptionEnabled),
        ey = (0, x.km)((e) => e.fullScreenEnabled),
        ex = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: e_, focusedChanged: eN } = (0, q.xU)(),
        { visible: eD, visibleChanged: eP, targetRef: eT } = (0, q.Yy)(),
        [eI, ew] = o.useState(!0 === ef ? R.rq.PLAYING : R.rq.PAUSED),
        [ek, eA] = o.useState(!1),
        eL = (0, y.il)(ed),
        [eR, eM] = o.useState(eL.percentComplete),
        [eV, eq] = o.useState(!1),
        [eB, eF] = o.useState(!0),
        [eU, eZ] = o.useState(!1),
        [eY, eQ] = o.useState([]),
        [eW, ez] = o.useState(E.Z.getEffectiveConnectionSpeed()),
        [eG, eH] = o.useState(0),
        [eK, eX] = o.useState(0),
        [e$, eJ] = o.useState(!1),
        [e0, e1] = o.useState(!1),
        e2 = o.useRef(!0),
        e6 = o.useRef(null),
        e4 = o.useRef(null),
        e8 = (0, o.useRef)(-1),
        e7 = (0, x.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[ed.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        e9 = (0, x.km)((e) => e.setVideoProgress),
        e3 = (0, x.km)((e) => e.muted),
        e5 = (0, x.km)((e) => e.volume),
        te = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        tt = (0, o.useRef)(null),
        tn = (0, o.useRef)(null),
        tr = o.useRef(!0),
        to = (null === (t = ed.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        tl = (0, x.km)((e) => e.transcript),
        [ti, ts] = o.useState(null),
        [ta, tc] = o.useState(!1),
        [tu, td] = o.useState(!1),
        [tm, tp] = o.useState(null),
        tf = to ? (null !== (g = null === (n = tt.current) || void 0 === n ? void 0 : n.duration) && void 0 !== g ? g : 0) : Math.max(e7.maxTimestampSec, eL.progressSeconds),
        tv = to ? (e7.timestampSec >= e7.duration ? 0 : e7.timestampSec) : Math.max(e7.timestampSec, eL.progressSeconds),
        tg = o.useMemo(
            () =>
                (0, N.T)({
                    quest: ed,
                    location: B.dr.VIDEO_MODAL
                }),
            [ed]
        ),
        {
            videoAssetId: tE,
            videoAsset: tb,
            hlsRef: tO
        } = (function (e, t, n, r) {
            var l;
            let i = o.useRef(!1),
                a = o.useRef(null),
                c = (0, _.z)(e, B.dr.VIDEO_MODAL),
                u = null === (l = e.config.videoMetadata) || void 0 === l ? void 0 : l.assets,
                d = o.useMemo(() => (null != u ? (c && s.ZP.isSupported() && null != u.videoPlayerVideoHls ? T.i.VIDEO_PLAYER_VIDEO_HLS : z.has(n) || null == u.videoPlayerVideoLowRes ? T.i.VIDEO_PLAYER_VIDEO : T.i.VIDEO_PLAYER_VIDEO_LOW_RES) : null), [u, n, c]),
                m = o.useMemo(() => (null != d ? (0, T.z)(d, e) : null), [e, d]);
            return (
                o.useEffect(() => {
                    d === T.i.VIDEO_PLAYER_VIDEO_HLS &&
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
        })(ed, tt, eW, tv),
        th = o.useCallback(
            (e) => {
                if (null != tt.current) {
                    var t, n;
                    eb({
                        questId: ed.id,
                        event: U.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: W(
                            ((t = W({}, e)),
                            (n = n =
                                {
                                    video_asset_id: tE,
                                    quest_completed: to,
                                    video_duration_sec: tt.current.duration,
                                    video_progress: (0, y.bA)(e.segment_end_sec, tt.current.duration),
                                    video_session_id: em
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
                            $(tO)
                        )
                    });
                }
            },
            [eb, ed.id, tE, to, em, tO]
        ),
        tS = o.useCallback(() => {
            var e, t;
            return null !== (t = null === (e = tt.current) || void 0 === e ? void 0 : e.currentTime) && void 0 !== t ? t : null;
        }, []),
        { forceSendCurrentSegment: tC } = (0, P.Z)({
            getCurrentVideoTime: tS,
            isPlaying: eI === R.rq.PLAYING,
            isMetadataLoaded: ta,
            isInitialSeekComplete: tu,
            onAnalytics: th,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tj = o.useCallback(
            (e) => {
                if ((tg.info('[QV] | updatePlayerState | playerState: '.concat(e)), ew(e), null != tt.current))
                    switch (e) {
                        case R.rq.PLAYING:
                            tt.current.play(),
                                eb({
                                    questId: ed.id,
                                    event: U.rMx.QUEST_VIDEO_RESUMED,
                                    properties: W(
                                        {
                                            video_timestamp_seconds: tt.current.currentTime,
                                            pause_reason: ti,
                                            video_session_id: em
                                        },
                                        $(tO)
                                    )
                                }),
                                ts(null);
                            break;
                        case R.rq.PAUSED:
                            tt.current.pause(), (e2.current = !1), tC();
                            break;
                        case R.rq.ENDED:
                            eS(!1), tC();
                    }
            },
            [eb, ed.id, ti, em, tC, eS, tO, tg]
        );
    (0, p.Ng)(() => {
        tr.current && ((tr.current = !1), ez(E.Z.getEffectiveConnectionSpeed()), to && e7.timestampSec >= e7.duration && e9(ed.id, 0, e7.duration));
    }),
        o.useEffect(() => {
            null != tt.current &&
                null != ti &&
                eb({
                    questId: ed.id,
                    event: U.rMx.QUEST_VIDEO_PAUSED,
                    properties: W(
                        {
                            video_timestamp_seconds: tt.current.currentTime,
                            reason: ti,
                            video_session_id: em
                        },
                        $(tO)
                    )
                });
        }, [ti, ed.id, eb, em, tO]),
        o.useEffect(() => {
            eN &&
                null != tt.current &&
                eb({
                    questId: ed.id,
                    event: e_ ? U.rMx.QUEST_VIDEO_APP_FOCUSED : U.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: tt.current.currentTime,
                        video_state: eI,
                        video_session_id: em
                    }
                });
        }, [e_, eN, eI, ed.id, eb, em]);
    let ty = o.useCallback(
        (e) => {
            var t;
            tg.info('[QV] | sendProgressUpdate: Checking conditions...'),
                to || (null === (t = ed.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (tg.info('[QV] | sendProgressUpdate: quest enrolled and not completed, sending video progress: '.concat(e)), (0, y.FI)(ed, e)),
                null != tt.current &&
                    eb({
                        questId: ed.id,
                        event: U.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: W(
                            {
                                progress: (0, y.bA)(tt.current.currentTime, tt.current.duration),
                                video_timestamp_seconds: tt.current.currentTime,
                                video_session_id: em
                            },
                            $(tO)
                        )
                    });
        },
        [to, ed, eb, em, tO, tg]
    );
    o.useEffect(() => {
        (ev !== m.Dvm.HIDDEN && ev !== m.Dvm.EXITING && ev !== m.Dvm.EXITED && (null == ev || !eP || eD || to) && (!eN || e_ || to)) || null == tt.current || eI !== R.rq.PLAYING || (tg.info('[QV] | Pausing video | playerState: '.concat(eI, ', parentTransitionState: ').concat(ev, ', visible: ').concat(eD, ', focused: ').concat(e_, ', isQuestCompleted: ').concat(to)), tj(R.rq.PAUSED), to || ts(j.yE.LOST_FOCUS));
    }, [ev, e_, eN, eD, eP, eI, to, tj, ty, tg]);
    let tx = () => {
            eA(!0);
        },
        t_ = () => {
            eA(!1);
        },
        tN = ek || eI === R.rq.PAUSED || eI === R.rq.ENDED,
        tD = o.useCallback(() => {
            var e;
            tg.info('[QV] | handleFullScreenExit');
            let t = (0, O.fn)(null === (e = tt.current) || void 0 === e ? void 0 : e.parentNode, tt.current);
            null == t ||
                (0, O.rB)(t) ||
                (t.removeEventListener(O.NO, tD),
                ex(!1),
                eb({
                    questId: ed.id,
                    event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: em }
                }));
        }, [ed.id, ex, eb, em, tg]),
        tP = () => {
            if (null == tt.current) return;
            let e = Math.max(tt.current.currentTime - 10, 0);
            tg.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)),
                tI(e),
                eI === R.rq.ENDED && tj(R.rq.PAUSED),
                eO({
                    questId: ed.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: h.jZ.SEEK_BACKWARD
                });
        },
        tT = () => {
            if (null == tt.current || !tz) return;
            let e = Math.min(tt.current.currentTime + 10, tf);
            tg.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)),
                tI(e),
                eI !== R.rq.ENDED && e >= tt.current.duration && tj(R.rq.ENDED),
                eO({
                    questId: ed.id,
                    questContent: j.jn.VIDEO_MODAL,
                    questContentCTA: h.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = tt.current;
        return () => {
            let t = (0, O.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(O.NO, tD);
        };
    }, [tD]);
    let tI = o.useCallback(
            (e) => {
                null != tt.current && (tg.info('[QV] | seekTimeline | timeSec: '.concat(e)), tC(), eq(!0), td(!1), (tt.current.currentTime = e), e9(ed.id, e, tt.current.duration));
            },
            [tt, e9, ed.id, tC, tg]
        ),
        tw = () => {
            if (null != tt.current)
                switch ((tg.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eI)), eI)) {
                    case R.rq.ENDED:
                        tI(0), tj(R.rq.PLAYING);
                        break;
                    case R.rq.PLAYING:
                        tj(R.rq.PAUSED), ts(j.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tj(R.rq.PLAYING);
                }
        },
        tk = (e) => {
            tp(e);
        },
        tA = (e) => {
            tp((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tL = o.useCallback(() => {
            if (null == tt.current || (tg.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(tt.current.textTracks.length)), 0 === tt.current.textTracks.length)) return;
            let e = tt.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, M.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tk(n)), (n.onexit = () => tA(n)));
                }
        }, [tt, tg]);
    o.useEffect(() => {
        if (null == tn.current) return;
        let e = tn.current;
        return (
            e.addEventListener('load', tL),
            () => {
                null != e && e.removeEventListener('load', tL);
            }
        );
    }, [tn, tL]);
    let tR = o.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = tt.current) || void 0 === t ? void 0 : t.error,
                        o = null === (n = tt.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != tt.current ? (0, y.bA)(tt.current.currentTime, tt.current.duration) : void 0;
                    tg.info('[QV] | logVideoError: errorType: '.concat(e, ', videoProgress: ').concat(l, ', videoAssetId: ').concat(tE, ', connectionSpeed: ').concat(eW, ', error: ').concat(r, ', networkState: ').concat(o)),
                        eb({
                            questId: ed.id,
                            event: U.rMx.QUEST_VIDEO_ERROR,
                            properties: W(
                                {
                                    video_progress: l,
                                    video_error_type: e,
                                    video_asset_id: tE,
                                    network_connection_speed: eW,
                                    video_session_id: em,
                                    video_error_code: null == r ? void 0 : r.code,
                                    video_error_message: null == r ? void 0 : r.message,
                                    video_network_state: o
                                },
                                $(tO)
                            )
                        });
                } catch (e) {}
            },
            [eW, ed.id, eb, tE, em, tO, tg]
        ),
        tM = (e) => {
            if ((tg.info('[QV] | handleCanPlay: playerState: '.concat(eI)), null != tt.current && eI === R.rq.PLAYING)) {
                if ((tg.info('[QV] | handleCanPlay: did NOT early return'), eB && (tg.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eB)), eF(!1)), eU)) {
                    tg.info('[QV] | handleCanPlay: waitingForChunk: '.concat(eU));
                    let e = null != e4.current ? Date.now() - e4.current : null;
                    eb({
                        questId: ed.id,
                        event: U.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: W(
                            {
                                video_asset_id: tE,
                                network_connection_speed: eW,
                                duration: e,
                                buffer_index: e8.current,
                                video_session_id: em
                            },
                            $(tO)
                        )
                    }),
                        eZ(!1);
                }
                tg.info('[QV] | handleCanPlay: updating player state to playing'), tj(R.rq.PLAYING);
            }
        };
    o.useEffect(() => {
        if (!eV) return;
        let e = setTimeout(() => {
            eq(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eV]);
    let [{ controlBarAnimSpring: tV }, tq] = (0, m.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: G,
            onStart: () => {
                e1(!1);
            },
            onRest: (e) => {
                1 === e.value && e1(!0);
            }
        })),
        tB = (0, o.useRef)(null),
        [{ captionHeightSpring: tF }, tU] = (0, m.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: G
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tU({
                captionHeightSpring: eC && null != tm && null !== (t = null === (e = tB.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: te
            }),
            () => {
                tF.stop();
            }
        );
    }, [eC, tU, te, tm, tF]),
        o.useEffect(
            () => (
                tq({
                    controlBarAnimSpring: tN || e$ ? 1 : 0,
                    immediate: te
                }),
                () => {
                    tV.stop();
                }
            ),
            [tN, tq, te, e$, tV]
        );
    let tZ = eI === R.rq.ENDED,
        tY = o.useCallback(
            (e) => {
                if (
                    (eO({
                        questId: ed.id,
                        questContent: e,
                        questContentCTA: h.jZ.LEARN_MORE,
                        impressionId: eE
                    }),
                    ed.id === F.V)
                ) {
                    window.open(b.Z.getArticleURL(U.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                    return;
                }
                (0, y.FE)(ed, {
                    content: e,
                    ctaContent: h.jZ.LEARN_MORE
                });
            },
            [eE, ed, eO]
        ),
        tQ = o.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, ed), [ed]),
        tW = o.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_CAPTION, ed), [ed]),
        tz = to || e7.maxTimestampSec >= (null !== (I = null === (l = tt.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== I ? I : 0) + 1;
    return (0, r.jsx)(m.P3F, {
        className: Q.videoCont,
        'data-fullscreen': ey,
        tabIndex: -1,
        onMouseEnter: tx,
        onMouseLeave: t_,
        onFocus: tx,
        onBlur: t_,
        children: (0, r.jsxs)('div', {
            className: Q.videoContInnerRelative,
            children: [
                tZ &&
                    ((0, D.e)({ location: B.dr.VIDEO_MODAL })
                        ? (0, r.jsx)(k.Z, {
                              quest: ed,
                              title: null !== (en = null === (J = ed.config.videoMetadata) || void 0 === J ? void 0 : J.messages.videoEndCtaTitle) && void 0 !== en ? en : Y.NW.string(Y.t.Ka526u),
                              subtitle: null !== (er = null === (ee = ed.config.videoMetadata) || void 0 === ee ? void 0 : ee.messages.videoEndCtaSubtitle) && void 0 !== er ? er : Y.NW.string(Y.t.tKMcAg),
                              ctaBtnLabel: null !== (eo = null === (et = ed.config.videoMetadata) || void 0 === et ? void 0 : et.messages.videoEndCtaButtonLabel) && void 0 !== eo ? eo : Y.NW.string(Y.t.iiTtpK),
                              onCTAClick: () => tY(j.jn.VIDEO_MODAL_END_CARD)
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(K, {
                                      quest: ed,
                                      shouldShow: tZ
                                  }),
                                  (0, r.jsx)('div', { className: Q.videoContOverlay }),
                                  (0, r.jsx)(X, {
                                      title: null !== (ea = null === (el = ed.config.videoMetadata) || void 0 === el ? void 0 : el.messages.videoEndCtaTitle) && void 0 !== ea ? ea : Y.NW.string(Y.t.iiTtpK),
                                      subtitle: null !== (eu = null !== (ec = null === (ei = ed.config.videoMetadata) || void 0 === ei ? void 0 : ei.messages.videoEndCtaButtonLabel) && void 0 !== ec ? ec : null === (es = ed.config.videoMetadata) || void 0 === es ? void 0 : es.messages.videoEndCtaSubtitle) && void 0 !== eu ? eu : Y.NW.string(Y.t.mxaHf3),
                                      icon: m.d4D,
                                      className: Q.endScreenPanelRight,
                                      onClick: () => tY(j.jn.VIDEO_MODAL)
                                  })
                              ]
                          })),
                (0, r.jsxs)(v.Z, {
                    ref: (e) => {
                        (tt.current = e), (eT.current = e);
                    },
                    autoPlay: ef,
                    playsInline: !0,
                    mediaLayoutType: ey ? Z.hV.STATIC : Z.hV.RESPONSIVE,
                    className: i()({
                        [Q.hidden]: tZ,
                        [Q.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tQ ? void 0 : tQ.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != tt.current && (tt.current.currentTime >= eG && (tg.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(tt.current.currentTime)), eH(tt.current.currentTime + 6 + 2 * Math.random()), ty(tt.current.currentTime)), tt.current.currentTime >= eK && (eX(tt.current.currentTime + 1), (0, C.qm)(ed.id, eL.taskType, tt.current.currentTime), ep(tt.current.currentTime)), e9(ed.id, tt.current.currentTime, tt.current.duration), eM((tt.current.currentTime / tt.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != tt.current && (ty(tt.current.duration + 1), tg.info('[QV] | handleEnded: sending progress update: '.concat(tt.current.duration + 1)), e9(ed.id, tt.current.duration, tt.current.duration)), tj(R.rq.ENDED), eZ(!1);
                    },
                    onLoadedData: (e) => {
                        if ((tg.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eB)), eB)) {
                            let e = null != e6.current ? Date.now() - e6.current : null;
                            eb({
                                questId: ed.id,
                                event: U.rMx.QUEST_VIDEO_LOADING_ENDED,
                                properties: W(
                                    {
                                        video_asset_id: tE,
                                        network_connection_speed: eW,
                                        duration: e,
                                        video_session_id: em
                                    },
                                    $(tO)
                                )
                            }),
                                eF(!1);
                        }
                    },
                    onLoadedMetadata: (e) => {
                        null != tt.current && (tg.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tE)), tc(!0), tE !== T.i.VIDEO_PLAYER_VIDEO_HLS && tI(tv), e3 ? (tt.current.volume = 0) : (tt.current.volume = e5));
                    },
                    onLoadStart: () => {
                        (e6.current = Date.now()),
                            tg.info('[QV] | handleLoadStart | loadingStartTime: '.concat(e6.current)),
                            eb({
                                questId: ed.id,
                                event: U.rMx.QUEST_VIDEO_LOADING_STARTED,
                                properties: W(
                                    {
                                        video_asset_id: tE,
                                        network_connection_speed: eW,
                                        video_session_id: em,
                                        is_hls_supported: s.ZP.isSupported()
                                    },
                                    $(tO)
                                )
                            });
                    },
                    onPlaying: () => {
                        if (!e2.current) return;
                        let e = performance.now() - eg;
                        tg.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')),
                            eb({
                                questId: ed.id,
                                event: U.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: W(
                                    {
                                        duration_ms: e,
                                        video_session_id: em,
                                        video_asset_id: tE
                                    },
                                    $(tO)
                                )
                            }),
                            (e2.current = !1);
                    },
                    onWaiting: (e) => {
                        (e4.current = Date.now()),
                            tg.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(e4.current)),
                            (e8.current += 1),
                            eb({
                                questId: ed.id,
                                event: U.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                properties: W(
                                    {
                                        video_asset_id: tE,
                                        network_connection_speed: eW,
                                        buffer_index: e8.current,
                                        video_session_id: em
                                    },
                                    $(tO)
                                )
                            }),
                            eZ(!0);
                    },
                    onProgress: (e) => {
                        if (null == tt.current) return;
                        tg.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(tt.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < tt.current.buffered.length; e++) {
                            let n = tt.current.buffered.start(e),
                                r = tt.current.buffered.end(e);
                            !(r - n < 1) &&
                                t.push({
                                    start: n / tt.current.duration,
                                    size: (r - n) / tt.current.duration
                                });
                        }
                        eQ(t);
                    },
                    onCanPlay: tM,
                    onCanPlayThrough: tM,
                    onSeeked: () => {
                        tg.info('[QV] | handleSeeked'), td(!0);
                    },
                    onAbort: () => tR(R.CY.ABORT),
                    onError: () => tR(R.CY.ERROR),
                    onEmptied: () => tR(R.CY.EMPTIED),
                    onStalled: () => tR(R.CY.STALLED),
                    onSuspend: () => tR(R.CY.SUSPEND),
                    onClick: () => {
                        tg.info('[QV] | handleVideoClick'), tw();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != tW &&
                            (0, r.jsx)('track', {
                                ref: tn,
                                src: tW.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != tb &&
                            tE !== T.i.VIDEO_PLAYER_VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tR(R.CY.SOURCE_ERROR),
                                src: tb.url,
                                type: tb.mimetype
                            })
                    ]
                }),
                (eB || eU) &&
                    eI === R.rq.PLAYING &&
                    (0, r.jsx)(m.$jN, {
                        type: m.$jN.Type.WANDERING_CUBES,
                        className: Q.loadingSpinner
                    }),
                eI === R.rq.PAUSED && ti === j.yE.LOST_FOCUS && (0, r.jsx)(H, {}),
                eh &&
                    eI !== R.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.P3F, {
                                onClick: () => eS(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: Q.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: Q.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([tV, tF], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(L.K, {
                                    quest: ed,
                                    onClose: () => {
                                        eS(!1),
                                            eO({
                                                questId: ed.id,
                                                questContent: j.jn.VIDEO_MODAL,
                                                questContentCTA: h.jZ.TRANSCRIPT_DISABLE
                                            });
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: Q.videoFooterContGradient,
                    style: {
                        opacity: (0, a.to)(
                            [
                                tV.to({
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
                        className: i()(Q.playPausePopCont, {
                            [Q.play]: eI === R.rq.PLAYING,
                            [Q.pause]: eI === R.rq.PAUSED
                        }),
                        children: eI === R.rq.PLAYING ? (0, r.jsx)(m.o1U, { className: Q.playPausePopIcon }) : (0, r.jsx)(m.fpf, { className: Q.playPausePopIcon })
                    },
                    eI
                ),
                eC &&
                    null != tm &&
                    (0, r.jsx)(a.animated.div, {
                        className: Q.captionContainer,
                        ref: tB,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    tV.to({
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
                            className: Q.captionText,
                            children: tm.text
                        })
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: Q.videoFooterCont,
                    style: {
                        paddingLeft: (0, a.to)(
                            [
                                tV.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, a.to)(
                            [
                                tV.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, a.to)(
                            [
                                tV.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(A.Z, {
                            percent: eR,
                            animate: !0 !== tr.current && !eV,
                            interactionEnabled: to && e0,
                            backgroundColor: tN ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tN ? eY : void 0,
                            duration: null !== (V = null === (d = tt.current) || void 0 === d ? void 0 : d.duration) && void 0 !== V ? V : 1,
                            maxSeekableTime: tN && e0 ? tf : void 0,
                            onClick: (e) => {
                                tI(e), eI === R.rq.ENDED && tj(R.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tP();
                            },
                            onScrubForward: () => {
                                tT();
                            }
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: Q.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        tV.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(w.Z, {
                                videoRef: tt,
                                quest: ed,
                                playerState: eI,
                                animSpring: tV,
                                visible: tN,
                                seekForwardEnabled: tz,
                                hideCaptionBtn: null == tW,
                                handlePlaybackBtnClick: tw,
                                handleTranscriptBtnClick: () => {
                                    eh || (null != tl && tl.questId === ed.id && tl.fetchStatus !== x.iF.NONE && tl.fetchStatus !== x.iF.FAILURE) || (0, C.lL)(ed),
                                        eS(!eh),
                                        eO({
                                            questId: ed.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eh ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE
                                        });
                                },
                                handleCaptionBtnClick: () => {
                                    ej(!eC),
                                        eO({
                                            questId: ed.id,
                                            questContent: j.jn.VIDEO_MODAL,
                                            questContentCTA: eC ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE
                                        });
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ey;
                                    tg.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, O.fn)(null === (e = tt.current) || void 0 === e ? void 0 : e.parentNode, tt.current);
                                    t && null != n
                                        ? ((0, O.Dj)(n),
                                          n.addEventListener(O.NO, tD),
                                          eb({
                                              questId: ed.id,
                                              event: U.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                              properties: { video_session_id: em }
                                          }))
                                        : t ||
                                          null == n ||
                                          (n.removeEventListener(O.NO, tD),
                                          eb({
                                              questId: ed.id,
                                              event: U.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                              properties: { video_session_id: em }
                                          }),
                                          (0, O.Pr)(n)),
                                        ex(t);
                                },
                                handleSeekBackBtnClick: tP,
                                handleSeekForwardBtnClick: tT,
                                handleControlBarPendingInteraction: eJ
                            })
                        })
                    ]
                })
            ]
        })
    });
}
