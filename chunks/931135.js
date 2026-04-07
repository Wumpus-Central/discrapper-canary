n.d(t, { A: () => V });
var r = n(627968),
    a = n(64700),
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
            autoFocus: R = !0,
            parentTransitionState: U,
            performanceClockStartTime: L,
            orientation: w,
            videoUrlOverride: O,
        } = e,
        {
            sourceQuestContent: D,
            quest: B,
            videoSessionId: M,
            setIsFullscreenEnabled: F,
            useNewProgressBarStyling: j,
        } = a.useContext(v.a),
        N = (0, a.useRef)(null),
        Q = (0, S.Yh)(B),
        W = B.userStatus?.completedAt != null,
        K = !W && j,
        q = a.useMemo(() => B.config.features.includes(A.Li.FULL_EPISODE_VIDEO_QUEST), [B.config.features]),
        G = (0, b.Kr)((e) => e.videoProgress[B.id] ?? b.yc, o.x),
        H = (0, b.Kr)((e) => e.setVideoProgress),
        Y = (0, b.Kr)((e) => e.volume),
        z = (0, b.Kr)((e) => e.muted),
        $ = (0, b.Kr)((e) => e.setVolume),
        X = (0, b.Kr)((e) => e.setMuted),
        Z = (0, l.g)(W, G, Q.progressSeconds),
        [J] = a.useState(() => d.A.getEffectiveConnectionSpeed()),
        ee = Math.max(G.maxTimestampSec, Q.progressSeconds),
        et = W ? void 0 : (0, f.vd)(ee, G.duration),
        { videoAsset: en, videoAssetType: er } = (0, x.A)(N, J, Z, O, !1),
        ea = a.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != er
                    ? n === i.Q6.PAUSED && r === i.KB.FOCUS
                        ? I.intl.string(I.t.w6PeBF)
                        : (0, c.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, u.isWeb)()
                      ? I.intl.string(I.t["E1du/q"])
                      : I.intl.string(I.t["rStN/7"]);
            },
            [er],
        ),
        eo = (0, a.useRef)(null),
        ei = a.useCallback((e) => {
            eo.current = e;
        }, []),
        el = a.useMemo(() => (0, g.L)({ quest: B, location: A.rE.VIDEO_MODAL }), [B]),
        es = (0, a.useRef)(0),
        ec = (0, a.useRef)(!1),
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
            videoSessionId: M,
            videoAssetId: er,
            sourceQuestContent: D,
            logger: el,
            isFullEpisodeVideoQuest: q,
            listenForHlsErrors: !1,
        });
    (0, T.A)({ videoAssetUrl: en?.url, videoRef: N, hlsRef: eo, videoAssetType: er });
    let eT = (0, E.A)(B),
        eE = (0, P.A)({ targetSec: t, quest: B, sourceQuestContent: D, questConfig: B.config }),
        [eP, eA] = a.useState(!1),
        [eI, ek] = a.useState(!1),
        [eV, eR] = a.useState(!1),
        eU = a.useCallback(() => N.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: eL } = (0, s.Yr)({
            getCurrentVideoTime: eU,
            isPlaying: eP,
            isMetadataLoaded: eI,
            isInitialSeekComplete: eV,
            onAnalytics: ey,
            emitIntervalMs: s.KI,
            minSegmentDurationMs: s._4,
        }),
        ew = (0, a.useRef)(null),
        eO = a.useCallback(
            (e, t) => {
                switch (e) {
                    case i.Q6.PLAYING:
                        eA(!0), N.current?.paused === !0 && ep(ew.current), (ew.current = null);
                        break;
                    case i.Q6.PAUSED:
                        eA(!1), eL();
                        {
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
                            null != e && ((ew.current = e), em(e));
                        }
                        break;
                    case i.Q6.ENDED:
                        eA(!1);
                }
            },
            [ep, em, eL],
        ),
        eD = a.useCallback(() => {
            ed(J);
        }, [ed, J]),
        eB = a.useCallback(
            (e) => {
                ek(!0), eu(e);
            },
            [eu],
        ),
        eM = a.useCallback(
            (e) => {
                eR(!0), eS(e);
            },
            [eS],
        ),
        eF = a.useCallback(
            (e) => {
                F(e), ef(e);
            },
            [F, ef],
        ),
        ej = a.useCallback(
            (e) => {
                $(e), eh(e);
            },
            [$, eh],
        ),
        eN = a.useCallback(
            (e, r) => {
                H(B.id, e, r), (0, p.Gn)(B.id, Q.taskType, e), n(e);
                let a = q && e >= t && !ec.current;
                (e >= es.current || a) &&
                    (a && (ec.current = !0),
                    (es.current = e + A.aA + Math.random() * A.A6),
                    W || B.userStatus?.enrolledAt == null || (0, f.zv)(B, e),
                    ex());
            },
            [B, Q.taskType, t, W, q, ex, H, n],
        ),
        eQ = a.useCallback(
            (e, t) => {
                eL(), null != N.current && H(B.id, t, N.current.duration);
            },
            [B.id, H, eL],
        ),
        eW = a.useCallback(() => {
            if ((eL(), null != N.current)) {
                let e = N.current.duration;
                W || B.userStatus?.enrolledAt == null || (0, f.zv)(B, e + 1), H(B.id, e, e);
            }
        }, [B, W, H, eL]),
        eK = a.useCallback(
            (e, t) => {
                ev(e, t);
            },
            [ev],
        ),
        eq = a.useMemo(() => (0, _.tW)(B, _.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [B]),
        eG = a.useCallback(() => (0, r.jsx)(C.A, {}), []),
        eH = a.useCallback(
            () => (0, r.jsx)(h.A, { videoRef: N, onTrackQuestContentClick: eC, orientation: w }),
            [eC, w],
        );
    return (0, r.jsx)(s.Ft, {
        ref: N,
        targetTimeSec: t,
        parentTransitionState: U,
        onOptimisticProgressUpdate: n,
        autoplay: V,
        progressGlow: !0,
        progressFillClassName: K ? k.QR : k.UA,
        glowClassName: K ? k.Um : k.U5,
        persistTimeline: !0,
        persistGrabber: !1,
        pauseOnLostVisibility: !0,
        autoFocus: R,
        getPlaybackBlockedMessage: ea,
        performanceClockStartTime: L,
        orientation: w,
        videoUrlOverride: O,
        src: en?.url,
        poster: void 0,
        initialTimeSec: Z,
        maxSeekableTimeSec: et,
        captionTrackUrl: eq?.url,
        onPlayerStateChange: eO,
        onLoadStart: eD,
        onLoadEnd: eB,
        onFirstFrame: eM,
        onBufferingStart: e_,
        onBufferingEnd: eg,
        onFocusChange: eb,
        onFullscreenChange: eF,
        initialVolume: Y,
        initialMuted: z,
        onVolumeChange: ej,
        onMutedChange: (e) => {
            X(e);
        },
        onProgressUpdate: eN,
        onSeek: eQ,
        onEnded: eW,
        onError: eK,
        onHlsInstance: ei,
        transcriptText: eT ?? void 0,
        renderOverlay: eG,
        renderEndScreen: eH,
        timelineIndicatorConfig: eE,
    });
}
