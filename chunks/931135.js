n.d(t, { A: () => V });
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
    g = n(851936),
    S = n(792620),
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
    k = n(590358);
function V(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: V,
            autoFocus: L = !0,
            parentTransitionState: R,
            performanceClockStartTime: U,
            orientation: w,
            videoUrlOverride: O,
        } = e,
        {
            sourceQuestContent: D,
            quest: B,
            videoSessionId: F,
            setIsFullscreenEnabled: M,
            useNewProgressBarStyling: j,
        } = r.useContext(v.a),
        N = (0, r.useRef)(null),
        Q = (0, S.Yh)(B),
        W = B.userStatus?.completedAt != null,
        K = !W && j,
        q = r.useMemo(() => B.config.features.includes(A.Li.FULL_EPISODE_VIDEO_QUEST), [B.config.features]),
        G = (0, b.Kr)((e) => e.videoProgress[B.id] ?? b.yc, o.x),
        H = (0, b.Kr)((e) => e.setVideoProgress),
        Y = (0, b.Kr)((e) => e.volume),
        z = (0, b.Kr)((e) => e.muted),
        $ = (0, b.Kr)((e) => e.setVolume),
        X = (0, b.Kr)((e) => e.setMuted),
        Z = (0, l.g)(W, G, Q.progressSeconds),
        [J] = r.useState(() => d.A.getEffectiveConnectionSpeed()),
        ee = Math.max(G.maxTimestampSec, Q.progressSeconds),
        et = W ? void 0 : (0, f.vd)(ee, G.duration),
        { videoAsset: en, videoAssetType: ea } = (0, x.A)(N, J, Z, O, !1),
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
        el = r.useMemo(() => (0, g.L)({ quest: B, location: A.rE.VIDEO_MODAL }), [B]),
        es = (0, r.useRef)(0),
        ec = (0, r.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: ed,
            trackQuestVideoLoadingEnded: eu,
            trackQuestVideoResumed: ep,
            trackQuestVideoPaused: em,
            trackQuestVideoFocusChange: eb,
            trackQuestVideoBufferingStarted: e_,
            trackQuestVideoBufferingEnded: eg,
            trackQuestVideoTimeToFirstFrame: eS,
            trackQuestVideoFullscreenChanged: ef,
            trackQuestVideoError: ev,
            trackQuestVideoVolumeChanged: eh,
            trackQuestContentClick: eC,
            trackQuestVideoProgressed: ex,
            trackQuestVideoSegmentWatched: ey,
        } = (0, y.A)({
            questId: B.id,
            isQuestCompleted: W,
            videoRef: N,
            hlsRef: eo,
            videoSessionId: F,
            videoAssetId: ea,
            sourceQuestContent: D,
            logger: el,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, T.A)({ videoAssetUrl: en?.url, videoRef: N, hlsRef: eo, videoAssetType: ea });
    let eT = (0, E.A)(B),
        eE = (0, P.A)({ targetSec: t, quest: B, sourceQuestContent: D, questConfig: B.config }),
        eP = r.useCallback(() => N.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eA,
            handleLoadEnd: eI,
            handleFirstFrame: ek,
            handleSeek: eV,
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
        eU = r.useCallback(() => {
            ed(J);
        }, [ed, J]),
        ew = r.useCallback(
            (e) => {
                eI(e), eu(e);
            },
            [eI, eu],
        ),
        eO = r.useCallback(
            (e) => {
                ek(e), eS(e);
            },
            [ek, eS],
        ),
        eD = r.useCallback(
            (e) => {
                M(e), ef(e);
            },
            [M, ef],
        ),
        eB = r.useCallback(
            (e) => {
                $(e), eh(e);
            },
            [$, eh],
        ),
        eF = r.useCallback(
            (e, a) => {
                H(B.id, e, a), (0, p.Gn)(B.id, Q.taskType, e), n(e);
                let r = q && e >= t && !ec.current;
                (e >= es.current || r) &&
                    (r && (ec.current = !0),
                    (es.current = e + A.aA + Math.random() * A.A6),
                    W || B.userStatus?.enrolledAt == null || (0, f.zv)(B, e),
                    ex());
            },
            [B, Q.taskType, t, W, q, ex, H, n],
        ),
        eM = r.useCallback(
            (e, t) => {
                eV(), null != N.current && H(B.id, t, N.current.duration);
            },
            [eV, B.id, H],
        ),
        ej = r.useCallback(() => {
            if (null != N.current) {
                let e = N.current.duration;
                W || B.userStatus?.enrolledAt == null || (0, f.zv)(B, e + 1), H(B.id, e, e);
            }
        }, [B, W, H]),
        eN = r.useCallback(
            (e, t) => {
                ev(e, t);
            },
            [ev],
        ),
        eQ = r.useMemo(() => (0, _.tW)(B, _.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [B]),
        eW = r.useCallback(() => (0, a.jsx)(C.A, {}), []),
        eK = r.useCallback(
            () => (0, a.jsx)(h.A, { videoRef: N, onTrackQuestContentClick: eC, orientation: w }),
            [eC, w],
        );
    return (0, a.jsx)(s.Ft, {
        ref: N,
        targetTimeSec: t,
        parentTransitionState: R,
        onOptimisticProgressUpdate: n,
        autoplay: V,
        progressGlow: !0,
        progressFillClassName: K ? k.QR : k.UA,
        glowClassName: K ? k.Um : k.U5,
        persistTimeline: !0,
        persistGrabber: !1,
        pauseOnLostVisibility: !0,
        autoFocus: L,
        getPlaybackBlockedMessage: er,
        performanceClockStartTime: U,
        orientation: w,
        videoUrlOverride: O,
        src: en?.url,
        poster: void 0,
        initialTimeSec: Z,
        maxSeekableTimeSec: et,
        captionTrackUrl: eQ?.url,
        onPlayerStateChange: eR,
        onLoadStart: eU,
        onLoadEnd: ew,
        onFirstFrame: eO,
        onBufferingStart: e_,
        onBufferingEnd: eg,
        onFocusChange: eb,
        onFullscreenChange: eD,
        initialVolume: Y,
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
        renderOverlay: eW,
        renderEndScreen: eK,
        timelineIndicatorConfig: eE,
    });
}
