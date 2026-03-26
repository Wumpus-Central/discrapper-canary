n.d(t, { A: () => E });
var r = n(627968),
    a = n(64700),
    o = n(942381),
    i = n(876230),
    s = n(645577),
    l = n(892358),
    d = n(544180),
    u = n(829219),
    c = n(341915),
    p = n(405670),
    _ = n(579473),
    f = n(851936),
    b = n(792620),
    m = n(753386),
    g = n(795068),
    S = n(179615),
    v = n(576199),
    C = n(758423),
    h = n(458817),
    x = n(873856),
    y = n(142619),
    T = n(654487);
function E(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: E,
            parentTransitionState: P,
            performanceClockStartTime: A,
            orientation: k,
            videoUrlOverride: I,
        } = e,
        { sourceQuestContent: V, quest: R, videoSessionId: w, setIsFullscreenEnabled: O } = a.useContext(g.a),
        B = (0, a.useRef)(null),
        U = (0, b.Yh)(R),
        L = R.userStatus?.completedAt != null,
        D = a.useMemo(() => R.config.features.includes(T.Li.FULL_EPISODE_VIDEO_QUEST), [R.config.features]),
        F = (0, p.Kr)((e) => e.videoProgress[R.id] ?? p.yc, o.x),
        M = (0, p.Kr)((e) => e.setVideoProgress),
        j = (0, s.g)(L, F, U.progressSeconds),
        [W] = a.useState(() => d.A.getEffectiveConnectionSpeed()),
        N = L ? void 0 : Math.max(F.maxTimestampSec, U.progressSeconds),
        { videoAsset: Q, videoAssetType: G } = (0, C.A)(B, W, j, I, !1),
        q = (0, a.useRef)(null),
        H = a.useCallback((e) => {
            q.current = e;
        }, []),
        K = a.useMemo(() => (0, f.L)({ quest: R, location: T.rE.VIDEO_MODAL }), [R]),
        Y = (0, a.useRef)(0),
        z = (0, a.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: $,
            trackQuestVideoLoadingEnded: X,
            trackQuestVideoResumed: Z,
            trackQuestVideoPaused: J,
            trackQuestVideoFocusChange: ee,
            trackQuestVideoBufferingStarted: et,
            trackQuestVideoBufferingEnded: en,
            trackQuestVideoTimeToFirstFrame: er,
            trackQuestVideoFullscreenChanged: ea,
            trackQuestVideoError: eo,
            trackQuestVideoVolumeChanged: ei,
            trackQuestContentClick: es,
            trackQuestVideoProgressed: el,
            trackQuestVideoSegmentWatched: ed,
        } = (0, h.A)({
            questId: R.id,
            isQuestCompleted: L,
            videoRef: B,
            hlsRef: q,
            videoSessionId: w,
            videoAssetId: G,
            sourceQuestContent: V,
            logger: K,
            isFullEpisodeVideoQuest: D,
            listenForHlsErrors: !1,
        });
    (0, x.A)({ videoAssetUrl: Q?.url, videoRef: B, hlsRef: q, videoAssetType: G });
    let eu = (0, y.A)(R),
        [ec, ep] = a.useState(!1),
        [e_, ef] = a.useState(!1),
        [eb, em] = a.useState(!1),
        eg = a.useCallback(() => B.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: eS } = (0, l.Yr)({
            getCurrentVideoTime: eg,
            isPlaying: ec,
            isMetadataLoaded: e_,
            isInitialSeekComplete: eb,
            onAnalytics: ed,
            emitIntervalMs: l.KI,
            minSegmentDurationMs: l._4,
        }),
        ev = (0, a.useRef)(null),
        eC = a.useCallback(
            (e, t) => {
                switch (e) {
                    case i.Q6.PLAYING:
                        ep(!0), B.current?.paused === !0 && Z(ev.current), (ev.current = null);
                        break;
                    case i.Q6.PAUSED:
                        ep(!1), eS();
                        {
                            let e = (function (e) {
                                switch (e) {
                                    case i.KB.USER:
                                        return c.Yg.PAUSE_BUTTON;
                                    case i.KB.FOCUS:
                                        return c.Yg.LOST_FOCUS;
                                    case i.KB.VISIBILITY:
                                        return c.Yg.MODAL_CLOSED;
                                    default:
                                        return null;
                                }
                            })(t);
                            null != e && ((ev.current = e), J(e));
                        }
                        break;
                    case i.Q6.ENDED:
                        ep(!1);
                }
            },
            [Z, J, eS],
        ),
        eh = a.useCallback(() => {
            $(W);
        }, [$, W]),
        ex = a.useCallback(
            (e) => {
                ef(!0), X(e);
            },
            [X],
        ),
        ey = a.useCallback(
            (e) => {
                em(!0), er(e);
            },
            [er],
        ),
        eT = a.useCallback(
            (e) => {
                O(e), ea(e);
            },
            [O, ea],
        ),
        eE = a.useCallback(
            (e, r) => {
                M(R.id, e, r), (0, u.Gn)(R.id, U.taskType, e), n(e);
                let a = D && e >= t && !z.current;
                (e >= Y.current || a) &&
                    (a && (z.current = !0),
                    (Y.current = e + T.aA + Math.random() * T.A6),
                    L || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e),
                    el());
            },
            [R, U.taskType, t, L, D, el, M, n],
        ),
        eP = a.useCallback(
            (e, t) => {
                eS(), null != B.current && M(R.id, t, B.current.duration);
            },
            [R.id, M, eS],
        ),
        eA = a.useCallback(() => {
            if ((eS(), null != B.current)) {
                let e = B.current.duration;
                L || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e + 1), M(R.id, e, e);
            }
        }, [R, L, M, eS]),
        ek = a.useCallback(
            (e, t) => {
                eo(e, t);
            },
            [eo],
        ),
        eI = a.useMemo(() => (0, _.tW)(R, _.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [R]),
        eV = a.useCallback(() => (0, r.jsx)(v.A, {}), []),
        eR = a.useCallback(
            () => (0, r.jsx)(S.A, { videoRef: B, onTrackQuestContentClick: es, orientation: k }),
            [es, k],
        );
    return (0, r.jsx)(l.Ft, {
        ref: B,
        targetTimeSec: t,
        parentTransitionState: P,
        onOptimisticProgressUpdate: n,
        autoplay: E,
        performanceClockStartTime: A,
        orientation: k,
        videoUrlOverride: I,
        src: Q?.url,
        poster: void 0,
        initialTimeSec: j,
        maxSeekableTimeSec: N,
        seekForwardRestricted: !L,
        captionTrackUrl: eI?.url,
        onPlayerStateChange: eC,
        onLoadStart: eh,
        onLoadEnd: ex,
        onFirstFrame: ey,
        onBufferingStart: et,
        onBufferingEnd: en,
        onFocusChange: ee,
        onFullscreenChange: eT,
        onVolumeChange: ei,
        onProgressUpdate: eE,
        onSeek: eP,
        onEnded: eA,
        onError: ek,
        onHlsInstance: H,
        transcriptText: eu ?? void 0,
        renderOverlay: eV,
        renderEndScreen: eR,
    });
}
