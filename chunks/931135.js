n.d(t, { A: () => k });
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
    V = n(590358);
function k(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: k,
            autoFocus: L = !0,
            parentTransitionState: R,
            performanceClockStartTime: O,
            orientation: U,
            videoUrlOverride: w,
        } = e,
        { sourceQuestContent: D, quest: B, videoSessionId: F, setIsFullscreenEnabled: M } = r.useContext(v.a),
        j = (0, r.useRef)(null),
        N = (0, g.Yh)(B),
        q = B.userStatus?.completedAt != null,
        Q = !q,
        W = r.useMemo(() => B.config.features.includes(A.Li.FULL_EPISODE_VIDEO_QUEST), [B.config.features]),
        K = (0, b.Kr)((e) => e.videoProgress[B.id] ?? b.yc, o.x),
        H = (0, b.Kr)((e) => e.setVideoProgress),
        Y = (0, b.Kr)((e) => e.volume),
        G = (0, b.Kr)((e) => e.muted),
        z = (0, b.Kr)((e) => e.setVolume),
        $ = (0, b.Kr)((e) => e.setMuted),
        X = (0, l.g)(q, K, N.progressSeconds),
        [Z] = r.useState(() => d.A.getEffectiveConnectionSpeed()),
        J = Math.max(K.maxTimestampSec, N.progressSeconds),
        ee = q ? void 0 : (0, f.vd)(J, K.duration),
        { videoAsset: et, videoAssetType: en } = (0, x.A)(j, Z, X, w, !1),
        ea = r.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: a } = e;
                return t || null != en
                    ? n === i.Q6.PAUSED && a === i.KB.FOCUS
                        ? I.intl.string(I.t.w6PeBF)
                        : (0, c.u)({ hasVideoAsset: t, playerState: n, pauseReason: a })
                    : (0, u.isWeb)()
                      ? I.intl.string(I.t["E1du/q"])
                      : I.intl.string(I.t["rStN/7"]);
            },
            [en],
        ),
        er = (0, r.useRef)(null),
        eo = r.useCallback((e) => {
            er.current = e;
        }, []),
        ei = r.useMemo(() => (0, S.L)({ quest: B, location: A.rE.VIDEO_MODAL }), [B]),
        el = (0, r.useRef)(0),
        es = (0, r.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: ec,
            trackQuestVideoLoadingEnded: ed,
            trackQuestVideoResumed: eu,
            trackQuestVideoPaused: ep,
            trackQuestVideoFocusChange: em,
            trackQuestVideoBufferingStarted: eb,
            trackQuestVideoBufferingEnded: e_,
            trackQuestVideoTimeToFirstFrame: eS,
            trackQuestVideoFullscreenChanged: eg,
            trackQuestVideoError: ef,
            trackQuestVideoVolumeChanged: ev,
            trackQuestContentClick: eh,
            trackQuestVideoProgressed: eC,
            trackQuestVideoSegmentWatched: ex,
        } = (0, y.A)({
            questId: B.id,
            isQuestCompleted: q,
            videoRef: j,
            hlsRef: er,
            videoSessionId: F,
            videoAssetId: en,
            sourceQuestContent: D,
            logger: ei,
            isFullEpisodeVideoQuest: W,
            listenForHlsErrors: !1,
        });
    (0, T.A)({ videoAssetUrl: et?.url, videoRef: j, hlsRef: er, videoAssetType: en });
    let ey = (0, E.A)(B),
        eT = (0, P.A)({ targetSec: t, quest: B, sourceQuestContent: D, questConfig: B.config }),
        eE = r.useCallback(() => j.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eP,
            handleLoadEnd: eA,
            handleFirstFrame: eI,
            handleSeek: eV,
        } = (0, s.Yr)({ getCurrentVideoTime: eE, onAnalytics: ex, emitIntervalMs: s.KI, minSegmentDurationMs: s._4 }),
        ek = (0, r.useRef)(null),
        eL = r.useCallback(
            (e, t) => {
                switch ((eP(e, t), e)) {
                    case i.Q6.PLAYING:
                        j.current?.paused === !0 && eu(ek.current), (ek.current = null);
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
                        null != e && ((ek.current = e), ep(e));
                    }
                    case i.Q6.ENDED:
                }
            },
            [eP, eu, ep],
        ),
        eR = r.useCallback(() => {
            ec(Z);
        }, [ec, Z]),
        eO = r.useCallback(
            (e) => {
                eA(e), ed(e);
            },
            [eA, ed],
        ),
        eU = r.useCallback(
            (e) => {
                eI(e), eS(e);
            },
            [eI, eS],
        ),
        ew = r.useCallback(
            (e) => {
                M(e), eg(e);
            },
            [M, eg],
        ),
        eD = r.useCallback(
            (e) => {
                z(e), ev(e);
            },
            [z, ev],
        ),
        eB = r.useCallback(
            (e, a) => {
                H(B.id, e, a), (0, p.Gn)(B.id, N.taskType, e), n(e);
                let r = W && e >= t && !es.current;
                (e >= el.current || r) &&
                    (r && (es.current = !0),
                    (el.current = e + A.aA + Math.random() * A.A6),
                    q || B.userStatus?.enrolledAt == null || (0, f.zv)(B, e),
                    eC());
            },
            [B, N.taskType, t, q, W, eC, H, n],
        ),
        eF = r.useCallback(
            (e, t) => {
                eV(), null != j.current && H(B.id, t, j.current.duration);
            },
            [eV, B.id, H],
        ),
        eM = r.useCallback(() => {
            if (null != j.current) {
                let e = j.current.duration;
                q || B.userStatus?.enrolledAt == null || (0, f.zv)(B, e + 1), H(B.id, e, e);
            }
        }, [B, q, H]),
        ej = r.useCallback(
            (e, t) => {
                ef(e, t);
            },
            [ef],
        ),
        eN = r.useMemo(() => (0, _.tW)(B, _.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [B]),
        eq = r.useCallback(() => (0, a.jsx)(C.A, {}), []),
        eQ = r.useCallback(
            () => (0, a.jsx)(h.A, { videoRef: j, onTrackQuestContentClick: eh, orientation: U }),
            [eh, U],
        );
    return (0, a.jsx)(s.Ft, {
        ref: j,
        targetTimeSec: t,
        parentTransitionState: R,
        onOptimisticProgressUpdate: n,
        autoplay: k,
        progressClassName: Q ? V.q : V.c,
        persistTimeline: !0,
        persistGrabber: !1,
        pauseOnLostVisibility: !0,
        autoFocus: L,
        getPlaybackBlockedMessage: ea,
        performanceClockStartTime: O,
        orientation: U,
        videoUrlOverride: w,
        src: et?.url,
        poster: void 0,
        initialTimeSec: X,
        maxSeekableTimeSec: ee,
        captionTrackUrl: eN?.url,
        onPlayerStateChange: eL,
        onLoadStart: eR,
        onLoadEnd: eO,
        onFirstFrame: eU,
        onBufferingStart: eb,
        onBufferingEnd: e_,
        onFocusChange: em,
        onFullscreenChange: ew,
        initialVolume: Y,
        initialMuted: G,
        onVolumeChange: eD,
        onMutedChange: (e) => {
            $(e);
        },
        onProgressUpdate: eB,
        onSeek: eF,
        onEnded: eM,
        onError: ej,
        onHlsInstance: eo,
        transcriptText: ey ?? void 0,
        renderPersistentOverlay: eq,
        renderEndScreen: eQ,
        timelineIndicatorConfig: eT,
        autoHideVolumeSlider: !0,
    });
}
