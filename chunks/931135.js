n.d(t, { A: () => w });
var r = n(627968),
    s = n(64700),
    a = n(942381),
    l = n(876230),
    i = n(645577),
    u = n(408278),
    o = n(789645),
    c = n(697397),
    d = n(931853),
    E = n(544180),
    m = n(723702),
    f = n(829219),
    _ = n(341915),
    S = n(405670),
    p = n(579473),
    v = n(590202),
    g = n(971649),
    h = n(851936),
    A = n(792620),
    C = n(753386),
    x = n(795068),
    D = n(179615),
    I = n(576199),
    T = n(758423),
    b = n(458817),
    O = n(781121),
    y = n(873856),
    L = n(142619),
    R = n(721092),
    k = n(654487),
    N = n(985018),
    M = n(111846),
    P = n(311872);
function w(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: w,
            autoFocus: V = !0,
            parentTransitionState: Q,
            openedAtMs: j,
            orientation: U,
            videoUrlOverride: B,
        } = e,
        {
            sourceQuestContent: F,
            quest: Y,
            videoSessionId: K,
            setIsFullscreenEnabled: H,
            onClose: G,
        } = s.useContext(x.a),
        $ = (0, s.useRef)(null),
        q = (0, A.Yh)(Y),
        W = Y.userStatus?.completedAt != null,
        z = !W,
        X = s.useMemo(() => Y.config.features.includes(k.Li.FULL_EPISODE_VIDEO_QUEST), [Y.config.features]),
        Z = (0, S.Kr)((e) => e.videoProgress[Y.id] ?? S.yc, a.x),
        J = (0, S.Kr)((e) => e.setVideoProgress),
        ee = (0, S.Kr)((e) => e.volume),
        et = (0, S.Kr)((e) => e.muted),
        en = (0, S.Kr)((e) => e.setVolume),
        er = (0, S.Kr)((e) => e.setMuted),
        es = (0, i.g)(W, Z, q.progressSeconds),
        [ea] = s.useState(() => E.A.getEffectiveConnectionSpeed()),
        el = Math.max(Z.maxTimestampSec, q.progressSeconds),
        ei = W ? void 0 : (0, C.vd)(el, Z.duration),
        { videoAsset: eu, videoAssetType: eo } = (0, T.A)($, ea, es, B, !1),
        ec = s.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != eo
                    ? n === l.Q6.PAUSED && r === l.KB.FOCUS
                        ? N.intl.string(N.t.w6PeBF)
                        : (0, d.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, m.isWeb)()
                      ? N.intl.string(N.t["E1du/q"])
                      : N.intl.string(N.t["rStN/7"]);
            },
            [eo],
        ),
        ed = (0, s.useRef)(null),
        eE = s.useCallback((e) => {
            ed.current = e;
        }, []),
        em = s.useMemo(() => (0, h.L)({ quest: Y, location: k.rE.VIDEO_MODAL }), [Y]),
        ef = (0, s.useRef)(0),
        e_ = (0, s.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: eS,
            trackQuestVideoLoadingEnded: ep,
            trackQuestVideoResumed: ev,
            trackQuestVideoPaused: eg,
            trackQuestVideoFocusChange: eh,
            trackQuestVideoBufferingStarted: eA,
            trackQuestVideoBufferingEnded: eC,
            trackQuestVideoTimeToFirstFrame: ex,
            trackQuestVideoFullscreenChanged: eD,
            trackQuestVideoError: eI,
            trackQuestVideoVolumeChanged: eT,
            trackQuestContentClick: eb,
            trackQuestVideoProgressed: eO,
            trackQuestVideoSegmentWatched: ey,
        } = (0, b.A)({
            questId: Y.id,
            isQuestCompleted: W,
            videoRef: $,
            hlsRef: ed,
            videoSessionId: K,
            videoAssetId: eo,
            sourceQuestContent: F,
            logger: em,
            isFullEpisodeVideoQuest: X,
            listenForHlsErrors: !1,
        });
    (0, y.A)({ videoAssetUrl: eu?.url, videoRef: $, hlsRef: ed, videoAssetType: eo });
    let eL = (0, L.A)(Y),
        eR = (0, g.go)(),
        ek = (0, O.H)({ quest: Y, onClose: G, sourceQuestContent: F, impressionId: eR }),
        eN = s.useCallback(() => {
            ek(_.uF.VIDEO_MODAL, v.Cy.OPEN_GAME_LINK);
        }, [ek]),
        eM = (0, R.A)({
            targetSec: t,
            quest: Y,
            sourceQuestContent: F,
            questConfig: Y.config,
            onIndicatorClick: W ? eN : void 0,
        }),
        eP = s.useCallback(() => $.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: ew,
            handleLoadEnd: eV,
            handleFirstFrame: eQ,
            handleSeek: ej,
        } = (0, c.Yr)({ getCurrentVideoTime: eP, onAnalytics: ey, emitIntervalMs: c.KI, minSegmentDurationMs: c._4 }),
        eU = (0, s.useRef)(null),
        eB = s.useCallback(
            (e, t) => {
                switch ((ew(e, t), e)) {
                    case l.Q6.PLAYING:
                        $.current?.paused === !0 && ev(eU.current), (eU.current = null);
                        break;
                    case l.Q6.PAUSED: {
                        let e = (function (e) {
                            switch (e) {
                                case l.KB.USER:
                                    return _.Yg.PAUSE_BUTTON;
                                case l.KB.FOCUS:
                                    return _.Yg.LOST_FOCUS;
                                case l.KB.VISIBILITY:
                                    return _.Yg.MODAL_CLOSED;
                                default:
                                    return null;
                            }
                        })(t);
                        null != e && ((eU.current = e), eg(e));
                    }
                    case l.Q6.ENDED:
                }
            },
            [ew, ev, eg],
        ),
        eF = s.useCallback(() => {
            eS(ea);
        }, [eS, ea]),
        eY = s.useCallback(
            (e) => {
                eV(e), ep(e);
            },
            [eV, ep],
        ),
        eK = s.useCallback(
            (e) => {
                let t = e - j;
                eQ(t), ex(t);
            },
            [eQ, ex, j],
        ),
        eH = s.useCallback(
            (e) => {
                H(e), eD(e);
            },
            [H, eD],
        ),
        eG = s.useCallback(
            (e) => {
                en(e), eT(e);
            },
            [en, eT],
        ),
        e$ = s.useCallback(
            (e, r) => {
                J(Y.id, e, r), (0, f.Gn)(Y.id, q.taskType, e), n(e);
                let s = X && e >= t && !e_.current;
                (e >= ef.current || s) &&
                    (s && (e_.current = !0),
                    (ef.current = e + k.aA + Math.random() * k.A6),
                    W || Y.userStatus?.enrolledAt == null || (0, C.zv)(Y, e),
                    eO());
            },
            [Y, q.taskType, t, W, X, eO, J, n],
        ),
        eq = s.useCallback(
            (e, t) => {
                ej(), null != $.current && J(Y.id, t, $.current.duration);
            },
            [ej, Y.id, J],
        ),
        eW = s.useCallback(() => {
            if (null != $.current) {
                let e = $.current.duration;
                W || Y.userStatus?.enrolledAt == null || (0, C.zv)(Y, e + 1), J(Y.id, e, e), eO();
            }
        }, [Y, W, J, eO]),
        ez = s.useCallback(
            (e, t) => {
                eI(e, t);
            },
            [eI],
        ),
        eX = s.useMemo(() => (0, p.tW)(Y, p.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [Y]),
        eZ = s.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: P.A,
                    children: [
                        (0, r.jsx)(I.A, {}),
                        (0, r.jsx)(u.K, {
                            "data-testid": "video-quest-close-btn",
                            variant: "overlay-secondary",
                            icon: o.P,
                            "aria-label": N.intl.string(N.t.cpT0Cq),
                            onClick: G,
                        }),
                    ],
                }),
            [G],
        ),
        eJ = s.useCallback(
            () => (0, r.jsx)(D.A, { videoRef: $, onTrackQuestContentClick: eb, orientation: U }),
            [eb, U],
        );
    return (0, r.jsx)(c.Ft, {
        ref: $,
        parentTransitionState: Q,
        autoplay: w,
        progressClassName: z ? M.q : M.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !W,
        autoFocus: V,
        getPlaybackBlockedMessage: ec,
        orientation: U,
        videoUrlOverride: B,
        src: eu?.url,
        poster: void 0,
        initialTimeSec: es,
        maxSeekableTimeSec: ei,
        captionTrackUrl: eX?.url,
        onPlayerStateChange: eB,
        onLoadStart: eF,
        onLoadEnd: eY,
        onFirstFrame: eK,
        onBufferingStart: eA,
        onBufferingEnd: eC,
        onFocusChange: eh,
        onFullscreenChange: eH,
        initialVolume: ee,
        initialMuted: et,
        onVolumeChange: eG,
        onMutedChange: (e) => {
            er(e);
        },
        onProgressUpdate: e$,
        onSeek: eq,
        onEnded: eW,
        onError: ez,
        onHlsInstance: eE,
        transcriptText: eL ?? void 0,
        transcriptClassName: P.f,
        renderPersistentOverlay: eZ,
        renderEndScreen: eJ,
        timelineIndicatorConfig: eM,
        autoHideVolumeSlider: !0,
    });
}
