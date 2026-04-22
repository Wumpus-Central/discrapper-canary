n.d(t, { A: () => P });
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
    p = n(590202),
    v = n(971649),
    g = n(851936),
    h = n(792620),
    A = n(753386),
    C = n(795068),
    x = n(179615),
    T = n(576199),
    D = n(758423),
    I = n(458817),
    b = n(781121),
    y = n(873856),
    O = n(142619),
    L = n(721092),
    R = n(654487),
    N = n(985018),
    k = n(924838),
    M = n(25920);
function P(e) {
    let {
            targetTimeSec: t,
            onOptimisticProgressUpdate: n,
            autoplay: P,
            autoFocus: w = !0,
            parentTransitionState: V,
            openedAtMs: U,
            orientation: Q,
            videoUrlOverride: j,
        } = e,
        {
            sourceQuestContent: B,
            quest: F,
            videoSessionId: Y,
            setIsFullscreenEnabled: H,
            onClose: K,
        } = s.useContext(C.a),
        G = (0, s.useRef)(null),
        $ = (0, h.Yh)(F),
        q = F.userStatus?.completedAt != null,
        W = !q,
        z = s.useMemo(() => F.config.features.includes(R.Li.FULL_EPISODE_VIDEO_QUEST), [F.config.features]),
        Z = (0, _.Kr)((e) => e.videoProgress[F.id] ?? _.yc, a.x),
        X = (0, _.Kr)((e) => e.setVideoProgress),
        J = (0, _.Kr)((e) => e.volume),
        ee = (0, _.Kr)((e) => e.muted),
        et = (0, _.Kr)((e) => e.setVolume),
        en = (0, _.Kr)((e) => e.setMuted),
        er = (0, i.g)(q, Z, $.progressSeconds),
        [es] = s.useState(() => d.A.getEffectiveConnectionSpeed()),
        ea = Math.max(Z.maxTimestampSec, $.progressSeconds),
        el = q ? void 0 : (0, A.vd)(ea, Z.duration),
        { videoAsset: ei, videoAssetType: eu } = (0, D.A)(G, es, er, j, !1),
        eo = s.useCallback(
            (e) => {
                let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
                return t || null != eu
                    ? n === l.Q6.PAUSED && r === l.KB.FOCUS
                        ? N.intl.string(N.t.w6PeBF)
                        : (0, c.u)({ hasVideoAsset: t, playerState: n, pauseReason: r })
                    : (0, E.isWeb)()
                      ? N.intl.string(N.t["E1du/q"])
                      : N.intl.string(N.t["rStN/7"]);
            },
            [eu],
        ),
        ec = (0, s.useRef)(null),
        ed = s.useCallback((e) => {
            ec.current = e;
        }, []),
        eE = s.useMemo(() => (0, g.L)({ quest: F, location: R.rE.VIDEO_MODAL }), [F]),
        em = (0, s.useRef)(0),
        ef = (0, s.useRef)(!1),
        {
            trackQuestVideoLoadingStarted: e_,
            trackQuestVideoLoadingEnded: eS,
            trackQuestVideoResumed: ep,
            trackQuestVideoPaused: ev,
            trackQuestVideoFocusChange: eg,
            trackQuestVideoBufferingStarted: eh,
            trackQuestVideoBufferingEnded: eA,
            trackQuestVideoTimeToFirstFrame: eC,
            trackQuestVideoFullscreenChanged: ex,
            trackQuestVideoError: eT,
            trackQuestVideoVolumeChanged: eD,
            trackQuestContentClick: eI,
            trackQuestVideoProgressed: eb,
            trackQuestVideoSegmentWatched: ey,
        } = (0, I.A)({
            questId: F.id,
            isQuestCompleted: q,
            videoRef: G,
            hlsRef: ec,
            videoSessionId: Y,
            videoAssetId: eu,
            sourceQuestContent: B,
            logger: eE,
            isFullEpisodeVideoQuest: z,
            listenForHlsErrors: !1,
        });
    (0, y.A)({ videoAssetUrl: ei?.url, videoRef: G, hlsRef: ec, videoAssetType: eu });
    let eO = (0, O.A)(F),
        eL = (0, v.go)(),
        eR = (0, b.H)({ quest: F, onClose: K, sourceQuestContent: B, impressionId: eL }),
        eN = s.useCallback(() => {
            eR(f.uF.VIDEO_MODAL, p.Cy.OPEN_GAME_LINK);
        }, [eR]),
        ek = (0, L.A)({
            targetSec: t,
            quest: F,
            sourceQuestContent: B,
            questConfig: F.config,
            onIndicatorClick: q ? eN : void 0,
        }),
        eM = s.useCallback(() => G.current?.currentTime ?? null, []),
        {
            handlePlayerStateChange: eP,
            handleLoadEnd: ew,
            handleFirstFrame: eV,
            handleSeek: eU,
        } = (0, o.Yr)({ getCurrentVideoTime: eM, onAnalytics: ey, emitIntervalMs: o.KI, minSegmentDurationMs: o._4 }),
        eQ = (0, s.useRef)(null),
        ej = s.useCallback(
            (e, t) => {
                switch ((eP(e, t), e)) {
                    case l.Q6.PLAYING:
                        G.current?.paused === !0 && ep(eQ.current), (eQ.current = null);
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
                        null != e && ((eQ.current = e), ev(e));
                    }
                    case l.Q6.ENDED:
                }
            },
            [eP, ep, ev],
        ),
        eB = s.useCallback(() => {
            e_(es);
        }, [e_, es]),
        eF = s.useCallback(
            (e) => {
                ew(e), eS(e);
            },
            [ew, eS],
        ),
        eY = s.useCallback(
            (e) => {
                let t = e - U;
                eV(t), eC(t);
            },
            [eV, eC, U],
        ),
        eH = s.useCallback(
            (e) => {
                H(e), ex(e);
            },
            [H, ex],
        ),
        eK = s.useCallback(
            (e) => {
                et(e), eD(e);
            },
            [et, eD],
        ),
        eG = s.useCallback(
            (e, r) => {
                X(F.id, e, r), (0, m.Gn)(F.id, $.taskType, e), n(e);
                let s = z && e >= t && !ef.current;
                (e >= em.current || s) &&
                    (s && (ef.current = !0),
                    (em.current = e + R.aA + Math.random() * R.A6),
                    q || F.userStatus?.enrolledAt == null || (0, A.zv)(F, e),
                    eb());
            },
            [F, $.taskType, t, q, z, eb, X, n],
        ),
        e$ = s.useCallback(
            (e, t) => {
                eU(), null != G.current && X(F.id, t, G.current.duration);
            },
            [eU, F.id, X],
        ),
        eq = s.useCallback(() => {
            if (null != G.current) {
                let e = G.current.duration;
                q || F.userStatus?.enrolledAt == null || (0, A.zv)(F, e + 1), X(F.id, e, e), eb();
            }
        }, [F, q, X, eb]),
        eW = s.useCallback(
            (e, t) => {
                eT(e, t);
            },
            [eT],
        ),
        ez = s.useMemo(() => (0, S.tW)(F, S.fY.VIDEO_PLAYER_CAPTION, void 0, !1), [F]),
        eZ = s.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: M.A,
                    children: [
                        (0, r.jsx)(T.A, {}),
                        (0, r.jsx)(u.K0, {
                            "data-testid": "video-quest-close-btn",
                            variant: "overlay-secondary",
                            icon: u.PGe,
                            "aria-label": N.intl.string(N.t.cpT0Cq),
                            onClick: K,
                        }),
                    ],
                }),
            [K],
        ),
        eX = s.useCallback(
            () => (0, r.jsx)(x.A, { videoRef: G, onTrackQuestContentClick: eI, orientation: Q }),
            [eI, Q],
        );
    return (0, r.jsx)(o.Ft, {
        ref: G,
        parentTransitionState: V,
        autoplay: P,
        progressClassName: W ? k.q : k.c,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !q,
        autoFocus: w,
        getPlaybackBlockedMessage: eo,
        orientation: Q,
        videoUrlOverride: j,
        src: ei?.url,
        poster: void 0,
        initialTimeSec: er,
        maxSeekableTimeSec: el,
        captionTrackUrl: ez?.url,
        onPlayerStateChange: ej,
        onLoadStart: eB,
        onLoadEnd: eF,
        onFirstFrame: eY,
        onBufferingStart: eh,
        onBufferingEnd: eA,
        onFocusChange: eg,
        onFullscreenChange: eH,
        initialVolume: J,
        initialMuted: ee,
        onVolumeChange: eK,
        onMutedChange: (e) => {
            en(e);
        },
        onProgressUpdate: eG,
        onSeek: e$,
        onEnded: eq,
        onError: eW,
        onHlsInstance: ed,
        transcriptText: eO ?? void 0,
        transcriptClassName: M.f,
        renderPersistentOverlay: eZ,
        renderEndScreen: eX,
        timelineIndicatorConfig: ek,
        autoHideVolumeSlider: !0,
    });
}
