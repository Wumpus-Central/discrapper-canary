n.d(t, { A: () => L });
var a = n(627968),
    r = n(64700),
    o = n(942381),
    i = n(876230),
    l = n(645577),
    s = n(697397),
    c = n(931853),
    d = n(544180),
    u = n(723702),
    p = n(829219),
    m = n(341915),
    b = n(405670),
    _ = n(579473),
    S = n(851936),
    g = n(792620),
    f = n(753386),
    v = n(795068),
    h = n(179615),
    C = n(576199),
    x = n(758423),
    y = n(458817),
    T = n(873856),
    E = n(142619),
    P = n(721092),
    A = n(654487),
    I = n(985018),
    V = n(924838),
    k = n(25920);
function L(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: L,
            autoFocus: R = !0,
            parentTransitionState: O,
            performanceClockStartTime: U,
            orientation: w,
            videoUrlOverride: D,
        } = e,
        { sourceQuestContent: B, quest: F, videoSessionId: M, setIsFullscreenEnabled: j } = r.useContext(v.a),
        N = (0, r.useRef)(null),
        q = (0, g.Yh)(F),
        Q = F.userStatus?.completedAt != null,
        W = !Q,
        K = r.useMemo(() => F.config.features.includes(A.Li.FULL_EPISODE_VIDEO_QUEST), [F.config.features]),
        H = (0, b.Kr)((e) => e.videoProgress[F.id] ?? b.yc, o.x),
        Y = (0, b.Kr)((e) => e.setVideoProgress),
        G = (0, b.Kr)((e) => e.volume),
        z = (0, b.Kr)((e) => e.muted),
        $ = (0, b.Kr)((e) => e.setVolume),
        X = (0, b.Kr)((e) => e.setMuted),
        Z = (0, l.g)(Q, H, q.progressSeconds),
        [J] = r.useState(() => d.A.getEffectiveConnectionSpeed()),
        ee = Math.max(H.maxTimestampSec, q.progressSeconds),
        et = Q ? void 0 : (0, f.vd)(ee, H.duration),
        { videoAsset: en, videoAssetType: ea } = (0, x.A)(N, J, Z, D, !1),
        er = r.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: a } = e;
                return t || null != ea
                    ? n === i.Q6.PAUSED && a === i.KB.FOCUS
                        ? I.intl.string(I.t.w6PeBF)
                        : (0, c.u)({ hasVideoAsset: t, playerState: n, pauseReason: a })
                    : (0, u.isWeb)()
                      ? I.intl.string(I.t["E1du/q"])
                      : I.intl.string(I.t["rStN/7"]);
            },
            [ea],
        ),
        eo = (0, r.useRef)(null),
        ei = r.useCallback((e) => {
            eo.current = e;
        }, []),
        el = r.useMemo(() => (0, S.L)({ quest: F, location: A.rE.VIDEO_MODAL }), [F]),
        es = (0, r.useRef)(0),
        ec = (0, r.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: ed,
            trackQuestVideoLoadingEnded: eu,
            trackQuestVideoResumed: ep,
            trackQuestVideoPaused: em,
            trackQuestVideoFocusChange: eb,
            trackQuestVideoBufferingStarted: e_,
            trackQuestVideoBufferingEnded: eS,
            trackQuestVideoTimeToFirstFrame: eg,
            trackQuestVideoFullscreenChanged: ef,
            trackQuestVideoError: ev,
            trackQuestVideoVolumeChanged: eh,
            trackQuestContentClick: eC,
            trackQuestVideoProgressed: ex,
            trackQuestVideoSegmentWatched: ey,
        } = (0, y.A)({
            questId: F.id,
            isQuestCompleted: Q,
            videoRef: N,
            hlsRef: eo,
            videoSessionId: M,
            videoAssetId: ea,
            sourceQuestContent: B,
            logger: el,
            isFullEpisodeVideoQuest: K,
            listenForHlsErrors: !1,
        });
    (0, T.A)({ videoAssetUrl: en?.url, videoRef: N, hlsRef: eo, videoAssetType: ea });
    let eT = (0, E.A)(F),
        eE = (0, P.A)({ targetSec: t, quest: F, sourceQuestContent: B, questConfig: F.config }),
        eP = r.useCallback(() => N.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eA,
            handleLoadEnd: eI,
            handleFirstFrame: eV,
            handleSeek: ek,
        } = (0, s.Yr)({ getCurrentVideoTime: eP, onAnalytics: ey, emitIntervalMs: s.KI, minSegmentDurationMs: s._4 }),
        eL = (0, r.useRef)(null),
        eR = r.useCallback(
            (e, t) => {
                switch ((eA(e, t), e)) {
                    case i.Q6.PLAYING:
                        N.current?.paused === !0 && ep(eL.current), (eL.current = null);
                        break;
                    case i.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case i.KB.USER:
                                    return m.Yg.PAUSE_BUTTON;
                                case i.KB.FOCUS:
                                    return m.Yg.LOST_FOCUS;
                                case i.KB.VISIBILITY:
                                    return m.Yg.MODAL_CLOSED;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((eL.current = e), em(e));
                    }
                    case i.Q6.ENDED:
                }
            },
            [eA, ep, em],
        ),
        eO = r.useCallback(() => {
            ed(J);
        }, [ed, J]),
        eU = r.useCallback(
            (e) => {
                eI(e), eu(e);
            },
            [eI, eu],
        ),
        ew = r.useCallback(
            (e) => {
                eV(e), eg(e);
            },
            [eV, eg],
        ),
        eD = r.useCallback(
            (e) => {
                j(e), ef(e);
            },
            [j, ef],
        ),
        eB = r.useCallback(
            (e) => {
                $(e), eh(e);
            },
            [$, eh],
        ),
        eF = r.useCallback(
            (e, a) => {
                Y(F.id, e, a), (0, p.Gn)(F.id, q.taskType, e), n(e);
                let r = K && e >= t && !ec.current;
                (e >= es.current || r) &&
                    (r && (ec.current = !0),
                    (es.current = e + A.aA + Math.random() * A.A6),
                    Q || F.userStatus?.enrolledAt == null || (0, f.zv)(F, e),
                    ex());
            },
            [F, q.taskType, t, Q, K, ex, Y, n],
        ),
        eM = r.useCallback(
            (e, t) => {
                ek(), null != N.current && Y(F.id, t, N.current.duration);
            },
            [ek, F.id, Y],
        ),
        ej = r.useCallback(() => {
            if (null != N.current) {
                let e = N.current.duration;
                Q || F.userStatus?.enrolledAt == null || (0, f.zv)(F, e + 1), Y(F.id, e, e);
            }
        }, [F, Q, Y]),
        eN = r.useCallback(
            (e, t) => {
                ev(e, t);
            },
            [ev],
        ),
        eq = r.useMemo(() => (0, _.tW)(F, _.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [F]),
        eQ = r.useCallback(() => (0, a.jsx)("div", { className: k.A, children: (0, a.jsx)(C.A, {}) }), []),
        eW = r.useCallback(
            () => (0, a.jsx)(h.A, { videoRef: N, onTrackQuestContentClick: eC, orientation: w }),
            [eC, w],
        );
    return (0, a.jsx)(s.Ft, {
        ref: N,
        targetTimeSec: t,
        parentTransitionState: O,
        onOptimisticProgressUpdate: n,
        autoplay: L,
        progressClassName: W ? V.q : V.c,
        persistTimeline: !0,
        persistGrabber: !1,
        pauseOnLostVisibility: !0,
        autoFocus: R,
        getPlaybackBlockedMessage: er,
        performanceClockStartTime: U,
        orientation: w,
        videoUrlOverride: D,
        src: en?.url,
        poster: void 0,
        initialTimeSec: Z,
        maxSeekableTimeSec: et,
        captionTrackUrl: eq?.url,
        onPlayerStateChange: eR,
        onLoadStart: eO,
        onLoadEnd: eU,
        onFirstFrame: ew,
        onBufferingStart: e_,
        onBufferingEnd: eS,
        onFocusChange: eb,
        onFullscreenChange: eD,
        initialVolume: G,
        initialMuted: z,
        onVolumeChange: eB,
        onMutedChange: (e) => {
            X(e);
        },
        onProgressUpdate: eF,
        onSeek: eM,
        onEnded: ej,
        onError: eN,
        onHlsInstance: ei,
        transcriptText: eT ?? void 0,
        renderPersistentOverlay: eQ,
        renderEndScreen: eW,
        timelineIndicatorConfig: eE,
        autoHideVolumeSlider: !0,
    });
}
