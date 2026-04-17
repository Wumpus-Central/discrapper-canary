n.d(t, { A: () => k });
var r = n(627968),
    s = n(64700),
    a = n(942381),
    l = n(876230),
    i = n(645577),
    u = n(397927),
    o = n(697397),
    c = n(931853),
    d = n(544180),
    E = n(723702),
    m = n(829219),
    f = n(341915),
    _ = n(405670),
    S = n(579473),
    p = n(851936),
    v = n(792620),
    h = n(753386),
    g = n(795068),
    A = n(179615),
    C = n(576199),
    x = n(758423),
    T = n(458817),
    D = n(873856),
    I = n(142619),
    b = n(721092),
    y = n(654487),
    O = n(985018),
    R = n(924838),
    L = n(25920);
function k(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: k,
            autoFocus: N = !0,
            parentTransitionState: M,
            performanceClockStartTime: P,
            orientation: V,
            videoUrlOverride: w,
        } = e,
        {
            sourceQuestContent: U,
            quest: Q,
            videoSessionId: j,
            setIsFullscreenEnabled: B,
            onClose: F,
        } = s.useContext(g.a),
        Y = (0, s.useRef)(null),
        H = (0, v.Yh)(Q),
        K = Q.userStatus?.completedAt != null,
        G = !K,
        $ = s.useMemo(() => Q.config.features.includes(y.Li.FULL_EPISODE_VIDEO_QUEST), [Q.config.features]),
        q = (0, _.Kr)((e) => e.videoProgress[Q.id] ?? _.yc, a.x),
        W = (0, _.Kr)((e) => e.setVideoProgress),
        z = (0, _.Kr)((e) => e.volume),
        Z = (0, _.Kr)((e) => e.muted),
        X = (0, _.Kr)((e) => e.setVolume),
        J = (0, _.Kr)((e) => e.setMuted),
        ee = (0, i.g)(K, q, H.progressSeconds),
        [et] = s.useState(() => d.A.getEffectiveConnectionSpeed()),
        en = Math.max(q.maxTimestampSec, H.progressSeconds),
        er = K ? void 0 : (0, h.vd)(en, q.duration),
        { videoAsset: es, videoAssetType: ea } = (0, x.A)(Y, et, ee, w, !1),
        el = s.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != ea
                    ? n === l.Q6.PAUSED && r === l.KB.FOCUS
                        ? O.intl.string(O.t.w6PeBF)
                        : (0, c.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, E.isWeb)()
                      ? O.intl.string(O.t["E1du/q"])
                      : O.intl.string(O.t["rStN/7"]);
            },
            [ea],
        ),
        ei = (0, s.useRef)(null),
        eu = s.useCallback((e) => {
            ei.current = e;
        }, []),
        eo = s.useMemo(() => (0, p.L)({ quest: Q, location: y.rE.VIDEO_MODAL }), [Q]),
        ec = (0, s.useRef)(0),
        ed = (0, s.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: eE,
            trackQuestVideoLoadingEnded: em,
            trackQuestVideoResumed: ef,
            trackQuestVideoPaused: e_,
            trackQuestVideoFocusChange: eS,
            trackQuestVideoBufferingStarted: ep,
            trackQuestVideoBufferingEnded: ev,
            trackQuestVideoTimeToFirstFrame: eh,
            trackQuestVideoFullscreenChanged: eg,
            trackQuestVideoError: eA,
            trackQuestVideoVolumeChanged: eC,
            trackQuestContentClick: ex,
            trackQuestVideoProgressed: eT,
            trackQuestVideoSegmentWatched: eD,
        } = (0, T.A)({
            questId: Q.id,
            isQuestCompleted: K,
            videoRef: Y,
            hlsRef: ei,
            videoSessionId: j,
            videoAssetId: ea,
            sourceQuestContent: U,
            logger: eo,
            isFullEpisodeVideoQuest: $,
            listenForHlsErrors: !1,
        });
    (0, D.A)({ videoAssetUrl: es?.url, videoRef: Y, hlsRef: ei, videoAssetType: ea });
    let eI = (0, I.A)(Q),
        eb = (0, b.A)({ targetSec: t, quest: Q, sourceQuestContent: U, questConfig: Q.config }),
        ey = s.useCallback(() => Y.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eO,
            handleLoadEnd: eR,
            handleFirstFrame: eL,
            handleSeek: ek,
        } = (0, o.Yr)({ getCurrentVideoTime: ey, onAnalytics: eD, emitIntervalMs: o.KI, minSegmentDurationMs: o._4 }),
        eN = (0, s.useRef)(null),
        eM = s.useCallback(
            (e, t) => {
                switch ((eO(e, t), e)) {
                    case l.Q6.PLAYING:
                        Y.current?.paused === !0 && ef(eN.current), (eN.current = null);
                        break;
                    case l.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case l.KB.USER:
                                    return f.Yg.PAUSE_BUTTON;
                                case l.KB.FOCUS:
                                    return f.Yg.LOST_FOCUS;
                                case l.KB.VISIBILITY:
                                    return f.Yg.MODAL_CLOSED;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((eN.current = e), e_(e));
                    }
                    case l.Q6.ENDED:
                }
            },
            [eO, ef, e_],
        ),
        eP = s.useCallback(() => {
            eE(et);
        }, [eE, et]),
        eV = s.useCallback(
            (e) => {
                eR(e), em(e);
            },
            [eR, em],
        ),
        ew = s.useCallback(
            (e) => {
                eL(e), eh(e);
            },
            [eL, eh],
        ),
        eU = s.useCallback(
            (e) => {
                B(e), eg(e);
            },
            [B, eg],
        ),
        eQ = s.useCallback(
            (e) => {
                X(e), eC(e);
            },
            [X, eC],
        ),
        ej = s.useCallback(
            (e, r) => {
                W(Q.id, e, r), (0, m.Gn)(Q.id, H.taskType, e), n(e);
                let s = $ && e >= t && !ed.current;
                (e >= ec.current || s) &&
                    (s && (ed.current = !0),
                    (ec.current = e + y.aA + Math.random() * y.A6),
                    K || Q.userStatus?.enrolledAt == null || (0, h.zv)(Q, e),
                    eT());
            },
            [Q, H.taskType, t, K, $, eT, W, n],
        ),
        eB = s.useCallback(
            (e, t) => {
                ek(), null != Y.current && W(Q.id, t, Y.current.duration);
            },
            [ek, Q.id, W],
        ),
        eF = s.useCallback(() => {
            if (null != Y.current) {
                let e = Y.current.duration;
                K || Q.userStatus?.enrolledAt == null || (0, h.zv)(Q, e + 1), W(Q.id, e, e);
            }
        }, [Q, K, W]),
        eY = s.useCallback(
            (e, t) => {
                eA(e, t);
            },
            [eA],
        ),
        eH = s.useMemo(() => (0, S.tW)(Q, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [Q]),
        eK = s.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: L.A,
                    children: [
                        (0, r.jsx)(C.A, {}),
                        (0, r.jsx)(u.K0, {
                            "data-testid": "video-quest-close-btn",
                            variant: "overlay-secondary",
                            icon: u.PGe,
                            "aria-label": O.intl.string(O.t.cpT0Cq),
                            onClick: F,
                        }),
                    ],
                }),
            [F],
        ),
        eG = s.useCallback(
            () => (0, r.jsx)(A.A, { videoRef: Y, onTrackQuestContentClick: ex, orientation: V }),
            [ex, V],
        );
    return (0, r.jsx)(o.Ft, {
        ref: Y,
        parentTransitionState: M,
        autoplay: k,
        progressClassName: G ? R.q : R.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !0,
        autoFocus: N,
        getPlaybackBlockedMessage: el,
        performanceClockStartTime: P,
        orientation: V,
        videoUrlOverride: w,
        src: es?.url,
        poster: void 0,
        initialTimeSec: ee,
        maxSeekableTimeSec: er,
        captionTrackUrl: eH?.url,
        onPlayerStateChange: eM,
        onLoadStart: eP,
        onLoadEnd: eV,
        onFirstFrame: ew,
        onBufferingStart: ep,
        onBufferingEnd: ev,
        onFocusChange: eS,
        onFullscreenChange: eU,
        initialVolume: z,
        initialMuted: Z,
        onVolumeChange: eQ,
        onMutedChange: (e) => {
            J(e);
        },
        onProgressUpdate: ej,
        onSeek: eB,
        onEnded: eF,
        onError: eY,
        onHlsInstance: eu,
        transcriptText: eI ?? void 0,
        transcriptClassName: L.f,
        renderPersistentOverlay: eK,
        renderEndScreen: eG,
        timelineIndicatorConfig: eb,
        autoHideVolumeSlider: !0,
    });
}
