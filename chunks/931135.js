r.d(t, { A: () => T });
var a = r(627968),
    o = r(64700),
    n = r(942381),
    i = r(876230),
    s = r(645577),
    l = r(892358),
    d = r(544180),
    c = r(829219),
    u = r(341915),
    _ = r(405670),
    p = r(943849),
    f = r(579473),
    b = r(792620),
    m = r(753386),
    g = r(752231),
    C = r(179615),
    v = r(576199),
    S = r(758423),
    h = r(458817),
    x = r(873856),
    y = r(654487);
function T(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: r,
            autoplay: T,
            parentTransitionState: P,
            performanceClockStartTime: A,
            orientation: E,
            videoUrlOverride: k,
        } = e,
        {
            sourceQuestContent: V,
            quest: R,
            videoSessionId: I,
            setIsFullscreenEnabled: B,
        } = o.useContext(g.VideoQuestModalContext),
        D = (0, o.useRef)(null),
        w = (0, b.Yh)(R),
        O = R.userStatus?.completedAt != null,
        U = o.useMemo(() => R.config.features.includes(y.Li.FULL_EPISODE_VIDEO_QUEST), [R.config.features]),
        L = (0, _.Kr)((e) => e.videoProgress[R.id] ?? _.yc, n.x),
        j = (0, _.Kr)((e) => e.setVideoProgress),
        F = (0, s.g)(O, L, w.progressSeconds),
        [N] = o.useState(() => d.A.getEffectiveConnectionSpeed()),
        W = O ? void 0 : Math.max(L.maxTimestampSec, w.progressSeconds),
        { videoAsset: M, videoAssetType: Q } = (0, S.A)(D, N, F, k, !1),
        q = (0, o.useRef)(null),
        G = o.useCallback((e) => {
            q.current = e;
        }, []),
        H = o.useMemo(() => (0, p.L)({ quest: R, location: y.rE.VIDEO_MODAL }), [R]),
        K = (0, o.useRef)(0),
        Y = (0, o.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: z,
            trackQuestVideoLoadingEnded: X,
            trackQuestVideoResumed: $,
            trackQuestVideoPaused: Z,
            trackQuestVideoFocusChange: J,
            trackQuestVideoBufferingStarted: ee,
            trackQuestVideoBufferingEnded: et,
            trackQuestVideoTimeToFirstFrame: er,
            trackQuestVideoFullscreenChanged: ea,
            trackQuestVideoError: eo,
            trackQuestVideoVolumeChanged: en,
            trackQuestContentClick: ei,
            trackQuestVideoProgressed: es,
            trackQuestVideoSegmentWatched: el,
        } = (0, h.A)({
            questId: R.id,
            isQuestCompleted: O,
            videoRef: D,
            hlsRef: q,
            videoSessionId: I,
            videoAssetId: Q,
            sourceQuestContent: V,
            logger: H,
            isFullEpisodeVideoQuest: U,
            listenForHlsErrors: !1,
        });
    (0, x.A)({ videoAssetUrl: M?.url, videoRef: D, hlsRef: q, videoAssetType: Q });
    let [ed, ec] = o.useState(!1),
        [eu, e_] = o.useState(!1),
        [ep, ef] = o.useState(!1),
        eb = o.useCallback(() => D.current?.currentTime ?? null, []),
        { forceSendCurrentSegment: em } = (0, l.Yr)({
            getCurrentVideoTime: eb,
            isPlaying: ed,
            isMetadataLoaded: eu,
            isInitialSeekComplete: ep,
            onAnalytics: el,
            emitIntervalMs: l.KI,
            minSegmentDurationMs: l._4,
        }),
        eg = (0, o.useRef)(null),
        eC = o.useCallback(
            (e, t) => {
                switch (e) {
                    case i.Q6.PLAYING:
                        ec(!0), D.current?.paused === !0 && $(eg.current), (eg.current = null);
                        break;
                    case i.Q6.PAUSED:
                        ec(!1), em();
                        {
                            let e = (function (e) {
                                switch (e) {
                                    case "user":
                                        return u.Yg.PAUSE_BUTTON;
                                    case "focus":
                                        return u.Yg.LOST_FOCUS;
                                    case "visibility":
                                        return u.Yg.MODAL_CLOSED;
                                    default:
                                        return null;
                                }
                            })(t);
                            null != e && ((eg.current = e), Z(e));
                        }
                        break;
                    case i.Q6.ENDED:
                        ec(!1);
                }
            },
            [$, Z, em],
        ),
        ev = o.useCallback(() => {
            z(N);
        }, [z, N]),
        eS = o.useCallback(
            (e) => {
                e_(!0), X(e);
            },
            [X],
        ),
        eh = o.useCallback(
            (e) => {
                ef(!0), er(e);
            },
            [er],
        ),
        ex = o.useCallback(
            (e) => {
                B(e), ea(e);
            },
            [B, ea],
        ),
        ey = o.useCallback(
            (e, a) => {
                j(R.id, e, a), (0, c.Gn)(R.id, w.taskType, e), r(e);
                let o = U && e >= t && !Y.current;
                (e >= K.current || o) &&
                    (o && (Y.current = !0),
                    (K.current = e + y.aA + Math.random() * y.A6),
                    O || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e),
                    es());
            },
            [R, w.taskType, t, O, U, es, j, r],
        ),
        eT = o.useCallback(
            (e, t) => {
                em(), null != D.current && j(R.id, t, D.current.duration);
            },
            [R.id, j, em],
        ),
        eP = o.useCallback(() => {
            if ((em(), null != D.current)) {
                let e = D.current.duration;
                O || R.userStatus?.enrolledAt == null || (0, m.zv)(R, e + 1), j(R.id, e, e);
            }
        }, [R, O, j, em]),
        eA = o.useCallback(
            (e, t) => {
                eo(e, t);
            },
            [eo],
        ),
        eE = o.useMemo(() => (0, f.tW)(R, f.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [R]),
        ek = o.useCallback(() => (0, a.jsx)(v.A, {}), []),
        eV = o.useCallback(
            () => (0, a.jsx)(C.A, { videoRef: D, onTrackQuestContentClick: ei, orientation: E }),
            [ei, E],
        );
    return (0, a.jsx)(l.Ft, {
        ref: D,
        targetTimeSec: t,
        parentTransitionState: P,
        onOptimisticProgressUpdate: r,
        autoplay: T,
        performanceClockStartTime: A,
        orientation: E,
        videoUrlOverride: k,
        src: M?.url,
        poster: void 0,
        initialTimeSec: F,
        maxSeekableTimeSec: W,
        seekForwardRestricted: !O,
        captionTrackUrl: eE?.url,
        onPlayerStateChange: eC,
        onLoadStart: ev,
        onLoadEnd: eS,
        onFirstFrame: eh,
        onBufferingStart: ee,
        onBufferingEnd: et,
        onFocusChange: J,
        onFullscreenChange: ex,
        onVolumeChange: en,
        onProgressUpdate: ey,
        onSeek: eT,
        onEnded: eP,
        onError: eA,
        onHlsInstance: G,
        renderOverlay: ek,
        renderEndScreen: eV,
    });
}
