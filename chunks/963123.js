n.d(t, { Z: () => J }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(10106),
    s = n(524979),
    c = n(94171),
    u = n(754700),
    d = n(670081),
    m = n(442837),
    f = n(780384),
    p = n(481060),
    v = n(493773),
    g = n(607070),
    b = n(70097),
    E = n(210887),
    O = n(866960),
    C = n(63063),
    h = n(228488),
    S = n(617136),
    j = n(272008),
    y = n(497505),
    _ = n(918701),
    x = n(184299),
    D = n(347382),
    T = n(5881),
    P = n(208109),
    N = n(117242),
    k = n(720293),
    I = n(566078),
    w = n(602667),
    A = n(881773),
    L = n(350312),
    R = n(355243),
    M = n(106743),
    V = n(223418),
    B = n(604162),
    F = n(747717),
    Z = n(281055),
    q = n(435585),
    U = n(46140),
    Q = n(981631),
    G = n(217702),
    Y = n(388032),
    z = n(844136);
let H = new Set([Q.IyS.FIVE_G, Q.IyS.FOUR_G, Q.IyS.UNKNOWN]),
    K = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function X() {
    let e = (0, m.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: z.pauseText,
        style: { background: (0, f.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: Y.intl.string(Y.t.U7Xrb2)
        })
    });
}
function W(e) {
    let { quest: t, shouldShow: n, sourceQuestContent: o } = e,
        a = l.useMemo(() => (0, k.z0)(t, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.THUMBNAIL), [t]);
    return null == a
        ? null
        : (0, r.jsx)(w.A, {
              questOrQuests: t,
              questContent: y.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: o,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: a.url,
                      alt: 'Video thumbnail',
                      className: i()(z.stillFrameImageCard, { [z.stillFrameImageCardHidden]: !n })
                  })
          });
}
function $(e) {
    let { title: t, subtitle: n, icon: o, onClick: a, className: s } = e,
        [c, u] = l.useState(!1),
        d = () => {
            u(!0);
        },
        m = () => {
            u(!1);
        };
    return (0, r.jsx)(p.P3F, {
        className: i()(z.endScreenPanel, z.accentOnHover, s),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)('div', {
            className: z.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: z.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-md/semibold',
                            className: z.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-sm/normal',
                            className: z.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(F.Z, { color: '#747783' }),
                (0, r.jsx)(o, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: z.endScreenIcon
                })
            ]
        })
    });
}
function J(e) {
    var t, n, o, f, E, w, F;
    let { quest: J, videoSessionId: ee, onOptimisticProgressUpdate: et, autoplay: en, parentTransitionState: er, performanceClockStartTime: el, onClose: eo, sourceQuestContent: ei } = e,
        ea = (0, x.km)((e) => e.transcriptEnabled),
        es = (0, x.km)((e) => e.setTranscriptEnabled),
        ec = (0, x.km)((e) => e.captionEnabled),
        eu = (0, x.km)((e) => e.setCaptionEnabled),
        ed = (0, x.km)((e) => e.fullScreenEnabled),
        em = (0, x.km)((e) => e.setFullScreenEnabled),
        { focused: ef, focusedChanged: ep } = (0, Z.xU)(),
        { visible: ev, visibleChanged: eg, targetRef: eb } = (0, Z.Yy)(),
        [eE, eO] = l.useState(!0 === en ? V.rq.PLAYING : V.rq.PAUSED),
        [eC, eh] = l.useState(!1),
        [eS, ej] = l.useState(!1),
        ey = (0, _.il)(J),
        [e_, ex] = l.useState(ey.percentComplete),
        [eD, eT] = l.useState(!1),
        [eP, eN] = l.useState(!0),
        [ek, eI] = l.useState(!1),
        [ew, eA] = l.useState([]),
        [eL, eR] = l.useState(O.Z.getEffectiveConnectionSpeed()),
        [eM, eV] = l.useState(0),
        [eB, eF] = l.useState(0),
        [eZ, eq] = l.useState(!1),
        [eU, eQ] = l.useState(!1),
        eG = l.useRef(!0),
        eY = l.useRef(null),
        ez = l.useRef(null),
        eH = (0, x.km)((e) => {
            var t;
            return null != (t = e.videoProgress[J.id])
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eK = (0, x.km)((e) => e.setVideoProgress),
        eX = (0, x.km)((e) => e.muted),
        eW = (0, x.km)((e) => e.volume),
        e$ = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        eJ = (0, l.useRef)(null),
        e0 = (0, l.useRef)(null),
        e1 = l.useRef(!0),
        e2 = (null == (t = J.userStatus) ? void 0 : t.completedAt) != null,
        e8 = (0, x.km)((e) => e.transcript),
        [e6, e4] = l.useState(null),
        [e7, e3] = l.useState(!1),
        [e9, e5] = l.useState(!1),
        [te, tt] = l.useState(null),
        tn = e2 ? (null != (E = null == (n = eJ.current) ? void 0 : n.duration) ? E : 0) : Math.max(eH.maxTimestampSec, ey.progressSeconds),
        tr = l.useMemo(
            () =>
                (0, T.T)({
                    quest: J,
                    location: U.dr.VIDEO_MODAL
                }),
            [J]
        ),
        { title: tl, subtitle: to } = (function (e) {
            var t, n, r, l;
            let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
                i = null != (t = null == o ? void 0 : o.messages.videoEndCtaTitle) ? t : Y.intl.string(Y.t.iiTtpK),
                a = null != (r = null != (n = null == o ? void 0 : o.messages.videoEndCtaButtonLabel) ? n : null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? r : Y.intl.string(Y.t.mxaHf3),
                s = (0, _.B2)(e.config),
                c = null != (l = null == o ? void 0 : o.messages.videoEndCtaSubtitle) ? l : Y.intl.string(Y.t.mxaHf3),
                m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
            return {
                title: m ? s : i,
                subtitle: m ? c : a
            };
        })(J),
        ti = e2 ? (eH.timestampSec >= eH.duration ? 0 : eH.timestampSec) : Math.max(eH.timestampSec, ey.progressSeconds);
    (0, v.Ng)(() => {
        e1.current && ((e1.current = !1), eR(O.Z.getEffectiveConnectionSpeed()), e2 && eH.timestampSec >= eH.duration && eK(J.id, 0, eH.duration));
    });
    let {
            videoVariant: ta,
            videoAsset: ts,
            hlsRef: tc
        } = (function (e, t, n, r) {
            var o;
            let i = l.useRef(!1),
                s = l.useRef(null),
                c = (0, D.z)(e, U.dr.VIDEO_MODAL),
                d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? void 0 : o.assets,
                m = l.useMemo(() => (null != d ? (c && a.ZP.isSupported() && null != d.videoHls ? k.n1.VIDEO_HLS : H.has(n) || null == d.videoLowRes ? k.n1.VIDEO : k.n1.VIDEO_LOW_RES) : null), [d, n, c]),
                f = l.useMemo(() => (null != m ? (0, k.z0)(e, u.X.WATCH_VIDEO, m, k.O.VIDEO) : null), [e, m]),
                p = () => {
                    null != s.current && 800000 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 800000);
                };
            return (
                l.useEffect(() => {
                    if (m !== k.n1.VIDEO_HLS || null == f || null == t.current || i.current) return;
                    (s.current = new a.ZP({
                        backBufferLength: 20,
                        maxBufferLength: 30,
                        startPosition: r,
                        startFragPrefetch: !0,
                        startLevel: -1
                    })),
                        s.current.on(a.ZP.Events.FRAG_LOADING, p),
                        s.current.loadSource(f.url),
                        s.current.attachMedia(t.current),
                        (i.current = !0);
                    let e = s.current;
                    return () => {
                        null != e && e.off(a.ZP.Events.FRAG_LOADING, p);
                    };
                }, [f, m, t, r]),
                {
                    videoVariant: m,
                    videoAsset: f,
                    hlsRef: s
                }
            );
        })(J, eJ, eL, ti),
        tu = (0, k.CC)(ta),
        {
            trackQuestVideoLoadingStarted: td,
            trackQuestVideoLoadingEnded: tm,
            trackQuestVideoProgressed: tf,
            trackQuestVideoResumed: tp,
            trackQuestVideoPaused: tv,
            trackQuestVideoFocusChange: tg,
            trackQuestContentClick: tb,
            trackQuestVideoBufferingStarted: tE,
            trackQuestVideoBufferingEnded: tO,
            trackWatchTimeAnalytics: tC,
            trackQuestVideoTimeToFirstFrame: th,
            trackQuestVideoFullscreenChanged: tS,
            trackQuestVideoError: tj,
            trackQuestVideoVolumeChanged: ty
        } = (0, q.Z)({
            quest: J,
            videoRef: eJ,
            hlsRef: tc,
            videoSessionId: ee,
            videoAssetId: tu,
            sourceQuestContent: ei
        }),
        t_ = l.useCallback(() => {
            var e, t;
            return null != (t = null == (e = eJ.current) ? void 0 : e.currentTime) ? t : null;
        }, []),
        { forceSendCurrentSegment: tx } = (0, N.Z)({
            getCurrentVideoTime: t_,
            isPlaying: eE === V.rq.PLAYING,
            isMetadataLoaded: e7,
            isInitialSeekComplete: e9,
            onAnalytics: tC,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        tD = l.useCallback(
            (e) => {
                if ((tr.info('[QV] | updatePlayerState | playerState: '.concat(e)), eO(e), null != eJ.current))
                    switch (e) {
                        case V.rq.PLAYING:
                            eJ.current.paused && tp(e6), e4(null), eJ.current.play();
                            break;
                        case V.rq.PAUSED:
                            eJ.current.paused || tx(), eJ.current.pause(), (eG.current = !1);
                            break;
                        case V.rq.ENDED:
                            tx(), es(!1);
                    }
            },
            [tp, e6, tx, es, tr]
        );
    l.useEffect(() => {
        tv(e6);
    }, [e6, tv]),
        l.useEffect(() => {
            ep && tg(ef, eE);
        }, [ef, ep, eE, tg]);
    let tT = l.useCallback(
        (e) => {
            var t;
            e2 || (null == (t = J.userStatus) ? void 0 : t.enrolledAt) == null || (tr.info('[QV] sendServerProgressUpdate: '.concat(e)), (0, _.FI)(J, e)), tf();
        },
        [e2, J, tr, tf]
    );
    l.useEffect(() => {
        (er !== p.Dvm.HIDDEN && er !== p.Dvm.EXITING && er !== p.Dvm.EXITED && (null == er || !eg || ev || e2) && (!ep || ef || e2)) || null == eJ.current || eE !== V.rq.PLAYING || (tr.info('[QV] | Pausing video | playerState: '.concat(eE, ', parentTransitionState: ').concat(er, ', visible: ').concat(ev, ', focused: ').concat(ef, ', isQuestCompleted: ').concat(e2)), tD(V.rq.PAUSED), e2 || e4(y.yE.LOST_FOCUS));
    }, [er, ef, ep, ev, eg, eE, e2, tD, tT, tr]);
    let [tP, tN] = l.useState(!1),
        tk = l.useRef(null),
        tI = l.useRef(performance.now()),
        tw = l.useCallback(() => {
            null != tk.current && clearTimeout(tk.current),
                eE === V.rq.PLAYING &&
                    (tk.current = setTimeout(
                        () => {
                            eE === V.rq.PLAYING && tN(!0);
                        },
                        Math.max(0, 3000 - (performance.now() - tI.current))
                    ));
        }, [eE]),
        tA = () => {
            tN(!1), (tI.current = performance.now()), tw();
        };
    l.useEffect(() => {
        if (eE !== V.rq.PLAYING) {
            tN(!1), null != tk.current && clearTimeout(tk.current);
            return;
        }
        return (
            tw(),
            () => {
                null != tk.current && clearTimeout(tk.current);
            }
        );
    }, [eE, tw]);
    let tL = !tP && (eS || eC || eE === V.rq.ENDED),
        tR = l.useCallback(() => {
            var e;
            tr.info('[QV] | handleFullScreenExit');
            let t = (0, h.fn)(null == (e = eJ.current) ? void 0 : e.parentNode, eJ.current);
            null == t || (0, h.rB)(t) || (t.removeEventListener(h.NO, tR), em(!1), tS(!1));
        }, [em, tr, tS]),
        tM = () => {
            if (null == eJ.current) return;
            let e = Math.max(eJ.current.currentTime - 10, 0);
            tr.info('[QV] | handleSeekBackIncrement | newTime: '.concat(e)), tB(e), eE === V.rq.ENDED && tD(V.rq.PAUSED), tb(y.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD);
        },
        tV = () => {
            if (null == eJ.current || !t1) return;
            let e = Math.min(eJ.current.currentTime + 10, tn);
            tr.info('[QV] | handleSeekForwardIncrement | newTime: '.concat(e)), tB(e), eE !== V.rq.ENDED && e >= eJ.current.duration && tD(V.rq.ENDED), tb(y.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD);
        };
    l.useEffect(() => {
        let e = eJ.current;
        return () => {
            let t = (0, h.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(h.NO, tR);
        };
    }, [tR]);
    let tB = l.useCallback(
            (e) => {
                null != eJ.current && (tr.info('[QV] | seekTimeline | timeSec: '.concat(e)), tx(), eT(!0), e5(!1), (eJ.current.currentTime = e), eK(J.id, e, eJ.current.duration));
            },
            [eJ, eK, J.id, tx, tr]
        ),
        tF = () => {
            if (null != eJ.current)
                switch ((tr.info('[QV] | handlePlaybackBtnClick | playerState: '.concat(eE)), eE)) {
                    case V.rq.ENDED:
                        tB(0), tD(V.rq.PLAYING);
                        break;
                    case V.rq.PLAYING:
                        tD(V.rq.PAUSED), e4(y.yE.PAUSE_BUTTON);
                        break;
                    default:
                        tD(V.rq.PLAYING);
                }
        },
        tZ = (e) => {
            tt(e);
        },
        tq = (e) => {
            tt((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tU = l.useCallback(() => {
            if (null == eJ.current || (tr.info('[QV] | handleTracksLoaded: textTracks.length: '.concat(eJ.current.textTracks.length)), 0 === eJ.current.textTracks.length)) return;
            let e = eJ.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, B.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tZ(n)), (n.onexit = () => tq(n)));
                }
        }, [eJ, tr]);
    l.useEffect(() => {
        if (null == e0.current) return;
        let e = e0.current;
        return (
            e.addEventListener('load', tU),
            () => {
                null != e && e.removeEventListener('load', tU);
            }
        );
    }, [e0, tU]);
    let tQ = l.useCallback(
            (e) => {
                var t;
                tr.info(
                    '[QV] | logVideoError: errorType: '
                        .concat(e, ', videoProgress: ')
                        .concat(null == (t = eJ.current) ? void 0 : t.currentTime, ', videoAssetId: ')
                        .concat(tu, ', connectionSpeed: ')
                        .concat(eL)
                ),
                    tj(e, eL);
            },
            [eL, tj, eJ, tu, tr]
        ),
        tG = (e) => {
            tr.info('[QV] | handleCanPlay: playerState: '.concat(eE)), null != eJ.current && eE === V.rq.PLAYING && (tr.info('[QV] | handleCanPlay: did NOT early return'), eP && (tr.info('[QV] | handleCanPlay: loadingFirstChunk: '.concat(eP)), eN(!1)), ek && (tr.info('[QV] | handleCanPlay: waitingForChunk: '.concat(ek)), tO(eL, null != ez.current ? performance.now() - ez.current : null), eI(!1)), tr.info('[QV] | handleCanPlay: updating player state to playing'), tD(V.rq.PLAYING));
        };
    l.useEffect(() => {
        if (!eD) return;
        let e = setTimeout(() => {
            eT(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eD]);
    let [{ controlBarAnimSpring: tY }, tz] = (0, p.q_F)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: K,
            onStart: () => {
                eQ(!1);
            },
            onRest: (e) => {
                1 === e.value && eQ(!0);
            }
        })),
        tH = (0, l.useRef)(null),
        [{ captionHeightSpring: tK }, tX] = (0, p.q_F)(() => ({
            from: { captionHeightSpring: 0 },
            config: K
        }));
    l.useEffect(() => {
        var e, t;
        return (
            tX({
                captionHeightSpring: ec && null != te && null != (t = null == (e = tH.current) ? void 0 : e.clientHeight) ? t : 0,
                immediate: e$
            }),
            () => {
                tK.stop();
            }
        );
    }, [ec, tX, e$, te, tK]),
        l.useEffect(
            () => (
                tz({
                    controlBarAnimSpring: tL || eZ ? 1 : 0,
                    immediate: e$
                }),
                () => {
                    tY.stop();
                }
            ),
            [tL, tz, e$, eZ, tY]
        );
    let tW = eE === V.rq.ENDED,
        t$ = l.useCallback(
            async (e) => {
                if (ed) {
                    var t;
                    let e = (0, h.fn)(null == (t = eJ.current) ? void 0 : t.parentNode, eJ.current);
                    null != e && (e.removeEventListener(h.NO, tR), (0, h.Pr)(e), em(!1), tS(!1));
                }
                if ((tb(e, S.jZ.LEARN_MORE), J.id === U.V6)) return void window.open(C.Z.getArticleURL(Q.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                if (null != eo) {
                    let e = I.r.build(J.config).application.link;
                    (await (0, B.qP)(e)) && eo();
                }
                (0, _.nc)(J, {
                    content: e,
                    ctaContent: S.jZ.OPEN_GAME_LINK,
                    sourceQuestContent: ei
                });
            },
            [tb, J, eo, ed, eJ, tR, em, tS, ei]
        ),
        tJ = l.useMemo(() => (0, k.z0)(J, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.THUMBNAIL), [J]),
        t0 = l.useMemo(() => (0, k.z0)(J, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.CAPTION), [J]),
        t1 = e2 || eH.maxTimestampSec >= (null != (w = null == (o = eJ.current) ? void 0 : o.currentTime) ? w : 0) + 1;
    return (0, r.jsx)(p.P3F, {
        className: z.videoCont,
        'data-fullscreen': ed,
        tabIndex: -1,
        onMouseEnter: () => {
            eh(!0), tN(!1), (tI.current = performance.now()), null != tk.current && clearTimeout(tk.current);
        },
        onMouseLeave: () => {
            eh(!1), tN(!1);
        },
        onMouseMove: tA,
        onKeyDown: tA,
        children: (0, r.jsxs)('div', {
            className: z.videoContInnerRelative,
            children: [
                tW &&
                    (() => {
                        if (!(0, P.e)({ location: U.dr.VIDEO_MODAL }))
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(W, {
                                        quest: J,
                                        shouldShow: tW,
                                        sourceQuestContent: ei
                                    }),
                                    (0, r.jsx)('div', { className: z.videoContOverlay }),
                                    (0, r.jsx)($, {
                                        title: tl,
                                        subtitle: to,
                                        icon: p.d4D,
                                        className: z.endScreenPanelRight,
                                        onClick: () => t$(y.jn.VIDEO_MODAL)
                                    })
                                ]
                            });
                        {
                            var e, t, n;
                            let l = J.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
                            return (0, r.jsx)(L.Z, {
                                quest: J,
                                title: null != (e = null == l ? void 0 : l.messages.videoEndCtaTitle) ? e : Y.intl.string(Y.t.Ka526u),
                                subtitle: null != (t = null == l ? void 0 : l.messages.videoEndCtaSubtitle) ? t : Y.intl.string(Y.t.tKMcAg),
                                ctaBtnLabel: null != (n = null == l ? void 0 : l.messages.videoEndCtaButtonLabel) ? n : Y.intl.string(Y.t.iiTtpK),
                                onCTAClick: () => t$(y.jn.VIDEO_MODAL_END_CARD),
                                sourceQuestContent: ei
                            });
                        }
                    })(),
                (0, r.jsxs)(b.Z, {
                    ref: (e) => {
                        (eJ.current = e), (eb.current = e);
                    },
                    autoPlay: en,
                    playsInline: !0,
                    mediaLayoutType: ed ? G.hV.STATIC : G.hV.RESPONSIVE,
                    className: i()({
                        [z.hidden]: tW,
                        [z.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == tJ ? void 0 : tJ.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        null != eJ.current && (eJ.current.currentTime >= eM && (tr.info('[QV] | handleTimeUpdate: capturing server time update: currentTime: '.concat(eJ.current.currentTime)), eV(eJ.current.currentTime + 6 + 2 * Math.random()), tT(eJ.current.currentTime)), eJ.current.currentTime >= eB && (eF(eJ.current.currentTime + 1), (0, j.qm)(J.id, ey.taskType, eJ.current.currentTime), et(eJ.current.currentTime)), eK(J.id, eJ.current.currentTime, eJ.current.duration), ex((eJ.current.currentTime / eJ.current.duration) * 100));
                    },
                    onEnded: (e) => {
                        null != eJ.current && (tT(eJ.current.duration + 1), tr.info('[QV] | handleEnded: sending progress update: '.concat(eJ.current.duration + 1)), eK(J.id, eJ.current.duration, eJ.current.duration)), tD(V.rq.ENDED), eI(!1);
                    },
                    onLoadedData: (e) => {
                        tr.info('[QV] | handleLoadedData: loadingFirstChunk: '.concat(eP)), eP && (tm(eL, null != eY.current ? performance.now() - eY.current : null), eN(!1), null != tc.current && (tc.current.config.minAutoBitrate = 800000));
                    },
                    onLoadedMetadata: (e) => {
                        null != eJ.current && (tr.info('[QV] | handleLoadedMetadata | videoAssetId: '.concat(tu)), e3(!0), ta !== k.n1.VIDEO_HLS && tB(ti), eX ? (eJ.current.volume = 0) : (eJ.current.volume = eW));
                    },
                    onLoadStart: () => {
                        (eY.current = performance.now()), td(eL), tr.info('[QV] | handleLoadStart | loadingStartTime: '.concat(eY.current));
                    },
                    onPlaying: () => {
                        if (!eG.current) return;
                        let e = performance.now() - el;
                        tr.info('[QV] | \u23F0 Video FCP: '.concat(e, 'ms')), th(e), (eG.current = !1);
                    },
                    onWaiting: (e) => {
                        (ez.current = performance.now()), tr.info('[QV] | handleWaitingForData: bufferingStartTime: '.concat(ez.current)), tE(eL), eI(!0);
                    },
                    onProgress: (e) => {
                        if (null == eJ.current) return;
                        tr.info('[QV] | handleLoadingHasProgressed: buffered.length: '.concat(eJ.current.buffered.length));
                        let t = [];
                        for (let e = 0; e < eJ.current.buffered.length; e++) {
                            let n = eJ.current.buffered.start(e),
                                r = eJ.current.buffered.end(e);
                            r - n < 1 ||
                                t.push({
                                    start: n / eJ.current.duration,
                                    size: (r - n) / eJ.current.duration
                                });
                        }
                        eA(t);
                    },
                    onCanPlay: tG,
                    onCanPlayThrough: tG,
                    onSeeked: () => {
                        tr.info('[QV] | handleSeeked'), e5(!0);
                    },
                    onAbort: () => tQ(V.CY.ABORT),
                    onError: () => tQ(V.CY.ERROR),
                    onEmptied: () => tQ(V.CY.EMPTIED),
                    onStalled: () => tQ(V.CY.STALLED),
                    onClick: () => {
                        tr.info('[QV] | handleVideoClick'), tF();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != t0 &&
                            (0, r.jsx)('track', {
                                ref: e0,
                                src: t0.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != ts &&
                            ta !== k.n1.VIDEO_HLS &&
                            (0, r.jsx)('source', {
                                onError: () => tQ(V.CY.SOURCE_ERROR),
                                src: ts.url,
                                type: ts.mimetype
                            })
                    ]
                }),
                (eP || ek) &&
                    eE === V.rq.PLAYING &&
                    (0, r.jsx)(p.$jN, {
                        type: p.$jN.Type.WANDERING_CUBES,
                        className: z.loadingSpinner
                    }),
                eE === V.rq.PAUSED && e6 === y.yE.LOST_FOCUS && (0, r.jsx)(X, {}),
                ea &&
                    eE !== V.rq.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.P3F, {
                                onClick: () => es(!1),
                                tabIndex: -1,
                                children: (0, r.jsx)('div', { className: z.transcriptOverlay })
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: z.transcriptCont,
                                style: {
                                    marginBottom: (0, s.to)([tY, tK], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(M.K, {
                                    quest: J,
                                    onClose: () => {
                                        es(!1), tb(y.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE);
                                    }
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(s.animated.div, {
                    className: z.videoFooterContGradient,
                    style: {
                        opacity: (0, s.to)(
                            [
                                tY.to({
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
                        className: i()(z.playPausePopCont, {
                            [z.play]: eE === V.rq.PLAYING,
                            [z.pause]: eE === V.rq.PAUSED
                        }),
                        children: eE === V.rq.PLAYING ? (0, r.jsx)(p.o1U, { className: z.playPausePopIcon }) : (0, r.jsx)(p.fpf, { className: z.playPausePopIcon })
                    },
                    eE
                ),
                ec &&
                    null != te &&
                    (0, r.jsx)(s.animated.div, {
                        className: z.captionContainer,
                        ref: tH,
                        style: {
                            translateY: (0, s.to)(
                                [
                                    tY.to({
                                        range: [0, 1],
                                        output: [0, -50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-lg/semibold',
                            color: 'always-white',
                            className: z.captionText,
                            children: te.text
                        })
                    }),
                (0, r.jsxs)(s.animated.div, {
                    className: z.videoFooterCont,
                    style: {
                        paddingLeft: (0, s.to)(
                            [
                                tY.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, s.to)(
                            [
                                tY.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, s.to)(
                            [
                                tY.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(R.Z, {
                            percent: e_,
                            animate: !0 !== e1.current && !eD,
                            interactionEnabled: e2 && eU,
                            backgroundColor: tL ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: tL ? ew : void 0,
                            duration: null != (F = null == (f = eJ.current) ? void 0 : f.duration) ? F : 1,
                            maxSeekableTime: tL && eU ? tn : void 0,
                            onClick: (e) => {
                                tB(e), eE === V.rq.ENDED && tD(V.rq.PLAYING);
                            },
                            onScrubBack: () => {
                                tM();
                            },
                            onScrubForward: () => {
                                tV();
                            }
                        }),
                        (0, r.jsx)(s.animated.div, {
                            className: z.videoControlsCont,
                            style: {
                                paddingTop: (0, s.to)(
                                    [
                                        tY.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, s.to)(
                                    [
                                        tY.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, s.to)(
                                    [
                                        tY.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            onFocus: () => ej(!0),
                            onBlur: () => ej(!1),
                            children: (0, r.jsx)(A.Z, {
                                videoRef: eJ,
                                quest: J,
                                playerState: eE,
                                animSpring: tY,
                                visible: tL,
                                seekForwardEnabled: t1,
                                hideCaptionBtn: null == t0,
                                handlePlaybackBtnClick: tF,
                                handleTranscriptBtnClick: () => {
                                    ea || (null != e8 && e8.questId === J.id && e8.fetchStatus !== x.iF.NONE && e8.fetchStatus !== x.iF.FAILURE) || (0, j.lL)(J, u.X.WATCH_VIDEO), es(!ea), tb(y.jn.VIDEO_MODAL, ea ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE);
                                },
                                handleCaptionBtnClick: () => {
                                    eu(!ec), tb(y.jn.VIDEO_MODAL, ec ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !ed;
                                    tr.info('[QV] | handleFullScreenButtonClick | shouldBeEnabled: '.concat(t));
                                    let n = (0, h.fn)(null == (e = eJ.current) ? void 0 : e.parentNode, eJ.current);
                                    t && null != n ? ((0, h.Dj)(n), n.addEventListener(h.NO, tR), tS(!0)) : t || null == n || (n.removeEventListener(h.NO, tR), tS(!1), (0, h.Pr)(n)), em(t);
                                },
                                handleSeekBackBtnClick: tM,
                                handleSeekForwardBtnClick: tV,
                                handleControlBarPendingInteraction: eq,
                                onVolumeChange: ty
                            })
                        })
                    ]
                })
            ]
        })
    });
}
