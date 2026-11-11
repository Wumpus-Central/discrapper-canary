n.d(t, { default: () => eE });
var r = n(477900),
    a = n(582128),
    i = n(323889),
    l = n(984827),
    s = n(821609),
    o = n(284009),
    d = n.n(o);
(l.x.PORTRAIT, l.x.PORTRAIT);
let u = { preferred: l.x.LANDSCAPE, supported: [l.x.LANDSCAPE, l.x.PORTRAIT] },
    c = { [l.x.PORTRAIT]: 9 / 16, [l.x.LANDSCAPE]: 16 / 9 };
function h(e, t) {
    let n = e[t];
    return null == n || "" === n ? null : { url: n, aspectRatio: t };
}
var m = n(91982),
    _ = n(506988);
function p(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var C = n(637691),
    v = n(738883),
    A = n(669912),
    f = n(280905),
    g = n(503698),
    E = n.n(g),
    T = n(760914),
    S = n(815714);
let R = { sm: 48, lg: 92 };
function b(e) {
    let { iconImageUri: t, size: n } = e,
        a = R[n],
        i = E()(S.Z2, { [S.Ke]: "sm" === n, [S.EX]: "lg" === n }),
        l = { "--custom-product-icon-size": `${a}px` };
    return null == t
        ? (0, r.jsx)("div", { "aria-hidden": !0, className: i, style: l })
        : (0, r.jsx)("img", {
              src: (0, T.lR)({ assetUrl: t, width: a, height: a }),
              alt: "",
              width: a,
              height: a,
              className: i,
              style: l,
          });
}
var x = n(855986),
    I = n(858899),
    D = n(43990),
    O = n(672619),
    N = n(533609),
    k = n(845890),
    y = n(265704),
    j = n(561844),
    w = n(590202),
    P = n(792996);
let L = new Set([260021]);
var M = n(753386),
    V = n(491812),
    U = n(755372),
    B = n(260918),
    F = n(236850),
    Q = n(939249),
    Y = n(834730),
    H = n(475815),
    z = n(192308),
    G = n(971649),
    $ = n(574112),
    q = n(321538);
function K(e) {
    let { bounty: t, onClose: n, sourceQuestContent: r } = e,
        l = (0, G.QK)();
    return a.useCallback(
        async (e) => {
            ((await (0, q.f7)(t.cta.url)) && (n(), (0, z.s7)()),
                (0, $._Q)(
                    { adContentId: t.id, adCreativeType: i.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: w.Cy.OPEN_GAME_LINK, impressionId: l(), sourceQuestContent: r },
                ));
        },
        [t.id, t.cta, n, r, l],
    );
}
var W = n(652215);
let X = { offset: 4 };
function J(e) {
    let { bounty: t, sourceQuestContent: n, videoRef: l, onClose: s } = e,
        o = p(t),
        d = K({ bounty: t, onClose: s, sourceQuestContent: n }),
        u = a.useCallback(() => {
            let e = (0, H.qf)(l.current?.parentNode, l.current);
            (null != e && (0, H.sP)(e), d(_.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [l, d]);
    return (0, r.jsx)(D.N, {
        theme: W.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)(f.R, {
                adContentId: t.id,
                adCreativeType: i.p.BOUNTY,
                questContent: _.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: n,
                children: (n) =>
                    (0, r.jsx)(Q.D, {
                        innerRef: n,
                        className: E()(e, S.hn),
                        focusProps: X,
                        onClick: u,
                        children: (0, r.jsxs)("div", {
                            className: S.jT,
                            children: [
                                (0, r.jsx)(b, { iconImageUri: o.iconImageUri, size: "lg" }),
                                (0, r.jsxs)("div", {
                                    className: S.z9,
                                    children: [
                                        (0, r.jsx)(Y.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: o.label ?? t.advertiserName,
                                        }),
                                        (0, r.jsx)(Y.E, {
                                            tag: "div",
                                            variant: "heading-xs/medium",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: o.buttonLabel,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
    });
}
var Z = n(646514),
    ee = n(820081),
    et = n(250328);
let en = 2 * Math.PI * 14.4,
    er = (1.6 / 14.4) * (180 / Math.PI),
    ea = `rotate(${-90 + er} 16 16)`;
function ei(e) {
    let { animateIn: t } = e;
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: E()(et.z6, { [et.HY]: t }),
        children: [
            (0, r.jsx)("div", { className: et.AW }),
            (0, r.jsx)(ee.CheckmarkSmallBoldIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: Z.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: et.kQ,
            }),
        ],
    });
}
function el(e) {
    var t;
    let { totalSeconds: n, remainingSeconds: i, isSeekInteraction: l } = e,
        s = i <= 0,
        [o] = a.useState(s),
        d = Math.max(1, Math.ceil(i)),
        u = 0;
    return (
        s ? (u = 1) : n > 0 && (u = 1 - i / n),
        (0, r.jsxs)("div", {
            role: "timer",
            "aria-label": s ? P.intl.string(P.t["0F4Peo"]) : P.intl.formatToPlainString(P.t["45cddS"], { seconds: d }),
            className: et.O1,
            children: [
                (0, r.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: et.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, r.jsx)("circle", { className: et.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, r.jsx)("circle", {
                            className: E()(et.qB, { [et.LQ]: u <= 0, [et.Aq]: l }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${en} ${en}`,
                            strokeDashoffset: en - ((t = u) >= 1 ? en : Math.max(0.01, t * en - 3.2)),
                            transform: ea,
                        }),
                    ],
                }),
                s
                    ? (0, r.jsx)(ei, { animateIn: !o })
                    : (0, r.jsx)(Y.E, {
                          "aria-hidden": !0,
                          variant: "body-xs/semibold",
                          color: "text-strong",
                          className: et.YA,
                          children: d,
                      }),
            ],
        })
    );
}
var es = n(115560),
    eo = n(731738),
    ed = n(876230),
    eu = n(69114),
    ec = n(913379),
    eh = n(544180),
    em = n(297727);
let e_ = [25, 50, 75];
function ep(e, t) {
    return null != t ? Math.min(e, t) : e;
}
(n(221596), n(500522));
var eC = n(879371),
    ev = n(970908);
function eA() {
    let e = a.useMemo(() => (0, T.lR)({ assetUrl: ev.A, width: 34, height: 34 }), []);
    return (0, r.jsx)("img", { src: e, alt: "", className: S.RN });
}
function ef(e) {
    let {
            bounty: t,
            sourceQuestContent: n,
            src: l,
            orientation: s,
            openedAtMs: o,
            parentTransitionState: d,
            onClose: u,
        } = e,
        c = a.useRef(null),
        h = (0, x.bG)([y.A], () => y.A.isBountyCompleted(t.id)),
        p = a.useCallback(() => {
            !(async function (e, t) {
                try {
                    await (0, k.Hq)(e.id, t);
                } catch (e) {
                    (0, I.P0)({
                        text:
                            e?.code != null && L.has(e.code) && e?.message != null
                                ? e.message
                                : P.intl.string(P.t.uLjCfn),
                        variant: "critical",
                    });
                }
            })(t, n);
        }, [t, n]),
        C = (function (e) {
            let { bountyId: t, sourceQuestContent: n, rewardTimerSeconds: r, openedAtMs: l, videoRef: s } = e,
                [o] = a.useState(() => (0, es.A)()),
                d = (0, G.wW)(),
                u = a.useRef(null),
                c = a.useRef(!1),
                h = a.useRef(null),
                p = a.useRef(-1),
                C = a.useRef(new Set()),
                v = a.useCallback(
                    () => ({ video_session_id: o, impression_id: d(), reward_timer_seconds: r }),
                    [o, d, r],
                ),
                A = a.useCallback(() => {
                    var e;
                    let t;
                    return {
                        ...((t = null != (e = u.current) && e.currentLevel >= 0 ? e.levels[e.currentLevel] : void 0),
                        null == e || null == t
                            ? { hls_level_index: null, hls_segment_res_width: null, hls_segment_res_height: null }
                            : {
                                  hls_level_index: e.currentLevel,
                                  hls_segment_res_width: t.width > 0 ? t.width : null,
                                  hls_segment_res_height: t.height > 0 ? t.height : null,
                              }),
                        network_connection_speed: eh.A.getEffectiveConnectionSpeed(),
                    };
                }, []),
                f = a.useCallback(
                    (e) => {
                        let r = s.current;
                        null != r &&
                            (0, j.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_SEGMENT_WATCHED,
                                properties: {
                                    ...e,
                                    ...v(),
                                    ...A(),
                                    video_duration_sec: r.duration,
                                    video_progress: (0, M.zh)(e.segment_end_sec, r.duration),
                                },
                                sourceQuestContent: n,
                            });
                    },
                    [t, n, s, v, A],
                ),
                g = a.useCallback(() => s.current?.currentTime ?? null, [s]),
                {
                    handlePlayerStateChange: E,
                    handleLoadEnd: T,
                    handleFirstFrame: S,
                    handleSeek: R,
                } = (0, m.Yr)({
                    getCurrentVideoTime: g,
                    onAnalytics: f,
                    emitIntervalMs: m.KI,
                    minSegmentDurationMs: m._4,
                }),
                b = a.useMemo(
                    () =>
                        (0, em.n0)({
                            getImpressionId: d,
                            onEmit: (e) => {
                                (0, j.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
                                    event: W.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                                    properties: {
                                        ...(0, w.fF)(_.uF.VIDEO_MODAL),
                                        ...(0, eu.A)(),
                                        ...e,
                                        impression_id: d(),
                                        apple_advertising_id: null,
                                        android_advertising_id: null,
                                    },
                                    sourceQuestContent: n,
                                });
                            },
                        }),
                    [t, n, d],
                ),
                x = a.useCallback(
                    (e, r, a, l) => {
                        C.current.has(e) ||
                            (C.current.add(e),
                            (0, j.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_PROGRESSED,
                                properties: { ...v(), progress: a, video_timestamp_seconds: r, threshold_met: l },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, v],
                ),
                I = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = (0, M.zh)(e, t),
                            i = e >= r;
                        if ((x("start", 0, 0, !1), i || n)) {
                            let n = Math.max(r, e);
                            x("threshold", n, (0, M.zh)(n, t), !0);
                        }
                        if ((0, M.di)(t)) for (let t of e_) a >= t / 100 && x(`p${t}`, e, a, i);
                        n && x("end", t, 1, !0);
                    },
                    [r, x],
                ),
                D = a.useCallback(
                    (e, t, n) => {
                        (I(e, t),
                            b.onProgress({
                                positionSeconds: n,
                                durationSeconds: t,
                                isPlaying: null != s.current && !s.current.paused && !s.current.seeking,
                            }));
                    },
                    [I, b, s],
                ),
                O = a.useCallback(
                    (e) => {
                        (R(e), b.pause());
                    },
                    [b, R],
                ),
                N = a.useCallback(
                    (e, t) => {
                        I(e, t, !0);
                    },
                    [I],
                ),
                k = a.useCallback(
                    (e, r) => {
                        (E(e, r), e !== ed.Q6.PLAYING && b.pause());
                        let a = s.current;
                        null == a ||
                            r !== ed.KB.USER ||
                            ((e !== ed.Q6.PLAYING || a.paused) &&
                                (0, j.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
                                    event: e === ed.Q6.PAUSED ? W.HAw.AD_VIDEO_PAUSED : W.HAw.AD_VIDEO_RESUMED,
                                    properties: { ...v(), video_timestamp_seconds: a.currentTime },
                                    sourceQuestContent: n,
                                }));
                    },
                    [t, n, s, v, b, E],
                ),
                y = a.useCallback(
                    (e) => {
                        let r = h.current;
                        null != r &&
                            ((h.current = null),
                            (0, j.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_BUFFERING_ENDED,
                                properties: { ...r, ...A(), duration: e },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, A],
                ),
                P = a.useCallback(() => {
                    if ((b.pause(), null != h.current)) return;
                    p.current += 1;
                    let e = { ...v(), buffer_index: p.current };
                    ((h.current = e),
                        (0, j.Qg)({
                            adContentId: t,
                            adCreativeType: i.p.BOUNTY,
                            event: W.HAw.AD_VIDEO_BUFFERING_STARTED,
                            properties: { ...e, ...A() },
                            sourceQuestContent: n,
                        }));
                }, [t, n, v, A, b]),
                L = a.useCallback(
                    (e) => {
                        (S(e),
                            c.current ||
                                ((c.current = !0),
                                (0, j.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
                                    event: W.HAw.AD_VIDEO_TIME_TO_FIRST_FRAME,
                                    properties: { ...v(), ...A(), duration_ms: e - l },
                                    sourceQuestContent: n,
                                })));
                    },
                    [t, n, l, v, A, S],
                ),
                V = a.useCallback(
                    (e, r) => {
                        let a = s.current;
                        if (null == a) return;
                        let l = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                        ((0, j.Qg)({
                            adContentId: t,
                            adCreativeType: i.p.BOUNTY,
                            event: W.HAw.AD_VIDEO_ERROR,
                            properties: {
                                ...v(),
                                ...A(),
                                video_progress: (0, M.zh)(a.currentTime, a.duration),
                                video_error_type: e,
                                video_error_code: a.error?.code,
                                video_error_message: a.error?.message,
                                video_network_state: a.networkState,
                                ...l,
                            },
                            sourceQuestContent: n,
                        }),
                            (e === ed.SB.SOURCE_ERROR || e === ed.SB.NO_VALID_SOURCE) &&
                                ec.A.increment({
                                    name: eo.K.QUEST_VIDEO_ERROR,
                                    tags: [
                                        `ad_creative_id:${t}`,
                                        `ad_creative_type:${i.p[i.p.BOUNTY]}`,
                                        `error_type:${e}`,
                                    ],
                                }));
                    },
                    [t, n, s, v, A],
                );
            return {
                getVideoProperties: v,
                handleVideoProgress: D,
                handleSeek: O,
                handleVideoEnd: N,
                handlePlayerStateChange: k,
                handleReadyForDisplay: L,
                handleLoadEnd: T,
                handleBufferingStart: P,
                handleBufferingEnd: y,
                handleVideoError: V,
                handleHlsInstance: a.useCallback((e) => {
                    u.current = e;
                }, []),
            };
        })({
            bountyId: t.id,
            sourceQuestContent: n,
            rewardTimerSeconds: t.rewardTimerSeconds,
            openedAtMs: o,
            videoRef: c,
        }),
        {
            maxWatchedSeconds: v,
            durationSeconds: A,
            rewardTargetSeconds: f,
            isRewardEarned: g,
            rewardRemainingSeconds: T,
            isSeekInteraction: R,
            maxSeekableTimeSeconds: b,
            handleProgressUpdate: Q,
            handleSeek: Y,
            handleEnded: H,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: n,
                    videoRef: r,
                    isCompleted: i,
                    onRewardEarned: l,
                    onVideoProgress: s,
                    onVideoSeek: o,
                    onVideoEnd: d,
                } = e,
                [u, c] = a.useState(0),
                [h, m] = a.useState(0),
                { isSeekInteraction: _, handleSeek: p } = (function () {
                    let [e, t] = a.useState(!1),
                        n = a.useRef(null);
                    return (
                        a.useEffect(
                            () => () => {
                                null != n.current && clearTimeout(n.current);
                            },
                            [],
                        ),
                        {
                            isSeekInteraction: e,
                            handleSeek: a.useCallback(() => {
                                (t(!0),
                                    null != n.current && clearTimeout(n.current),
                                    (n.current = window.setTimeout(() => {
                                        (t(!1), (n.current = null));
                                    }, 100)));
                            }, []),
                        }
                    );
                })(),
                [C, v] = a.useState(n),
                A = a.useRef(0),
                f = a.useRef(n),
                g = a.useRef(i),
                E = ep(t, C),
                T = i || u >= E,
                S = a.useCallback((e) => {
                    ((f.current = e), v(e));
                }, []),
                R = a.useCallback(
                    (e) => {
                        let n = Math.max(A.current, e);
                        return (
                            (A.current = n), c(n), !g.current && n >= ep(t, f.current) && ((g.current = !0), l()), n
                        );
                    },
                    [t, l],
                ),
                b = a.useCallback(
                    (e, t) => {
                        ((0, M.di)(t) && S(t), m(e), s(R(e), f.current ?? t, e));
                    },
                    [S, R, s],
                ),
                x = a.useCallback(
                    (e, t) => {
                        (R(e), m(t), p(), o(e, t));
                    },
                    [R, p, o],
                ),
                I = a.useCallback(() => {
                    let e = r.current,
                        t = A.current;
                    (null != e && (0, M.di)(e.duration) && (S(e.duration), (t = R(e.duration))),
                        d(t, f.current ?? e?.duration ?? 0 / 0));
                }, [r, S, R, d]),
                D = 0;
            return (
                null != C && (0, M.di)(C) ? (D = C) : null != n && (0, M.di)(n) && (D = n),
                {
                    maxWatchedSeconds: u,
                    durationSeconds: D,
                    rewardTargetSeconds: E,
                    isRewardEarned: T,
                    rewardRemainingSeconds: T ? 0 : E - h,
                    isSeekInteraction: _,
                    maxSeekableTimeSeconds: u,
                    handleProgressUpdate: b,
                    handleSeek: x,
                    handleEnded: I,
                }
            );
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: c,
            isCompleted: h,
            onRewardEarned: p,
            onVideoProgress: C.handleVideoProgress,
            onVideoSeek: C.handleSeek,
            onVideoEnd: C.handleVideoEnd,
        }),
        { getVideoProperties: z } = C,
        $ = (0, a.useEffectEvent)(() => {
            (0, j.Qg)({
                adContentId: t.id,
                adCreativeType: i.p.BOUNTY,
                event: W.HAw.AD_VIDEO_MODAL_CLOSED,
                sourceQuestContent: n,
                properties: {
                    ...z(),
                    content_name: (0, w.jO)(_.uF.VIDEO_MODAL),
                    content_id: _.uF.VIDEO_MODAL,
                    video_progress: (0, M.zh)(v, A),
                    threshold_met: v >= t.rewardTimerSeconds,
                },
            });
        });
    a.useEffect(() => () => $(), []);
    let { volume: q, muted: K, setVolume: X, setMuted: Z } = (0, F.A)(),
        { balance: ee } = (0, O.W0)(),
        et = a.useMemo(() => (0, r.jsx)(eA, {}), []),
        en = a.useMemo(() => P.intl.formatToPlainString(P.t["nLXlh+"], { orbAmount: 50 }), []),
        er = (0, B.A)({ targetSec: f, label: en, isCompleted: g, icon: et, clickable: b >= f }),
        ea = a.useCallback(
            () =>
                (0, r.jsx)(D.N, {
                    theme: W.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: E()(e, S.gP),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: S.Cq,
                                    children: [
                                        (0, r.jsx)(el, { totalSeconds: f, remainingSeconds: T, isSeekInteraction: R }),
                                        (0, r.jsx)(N.Ay, {
                                            variant: "overlay-secondary",
                                            balance: ee,
                                            borderRadius: "round",
                                            textSize: "sm",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: S.ne, children: (0, r.jsx)(V.A, { onClose: u }) }),
                            ],
                        }),
                }),
            [u, ee, T, f, R],
        ),
        ei = a.useCallback(
            () => (0, r.jsx)(J, { bounty: t, sourceQuestContent: n, videoRef: c, onClose: u }),
            [t, n, u],
        );
    return (0, r.jsx)(m.Ft, {
        ref: c,
        parentTransitionState: d,
        autoplay: !0,
        autoFocus: !0,
        orientation: s,
        src: l,
        progressClassName: g ? eC.s : eC.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !g,
        getPlaybackBlockedMessage: U.b,
        maxSeekableTimeSec: b,
        initialVolume: q,
        initialMuted: K,
        onVolumeChange: X,
        onMutedChange: Z,
        onProgressUpdate: Q,
        onSeek: Y,
        onEnded: H,
        onPlayerStateChange: C.handlePlayerStateChange,
        onLoadEnd: C.handleLoadEnd,
        onFirstFrame: C.handleReadyForDisplay,
        onBufferingStart: C.handleBufferingStart,
        onBufferingEnd: C.handleBufferingEnd,
        onError: C.handleVideoError,
        onHlsInstance: C.handleHlsInstance,
        renderPersistentOverlay: ea,
        renderEndScreen: ei,
        timelineIndicatorConfig: er,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
function eg(e) {
    let { transitionState: t, onClose: n, bounty: i, sourceQuestContent: o, openedAtMs: m, impressionRef: f } = e,
        { url: g, orientation: E } = a.useMemo(() => {
            let e,
                t =
                    null !=
                    (e =
                        null != i.videoRenditions
                            ? (function (e, t) {
                                  let { preferred: n, supported: r } = t;
                                  d()(r.includes(n), "Preferred aspect ratio must be in supported renditions list");
                                  let a = h(e, n);
                                  if (null != a) return a;
                                  let i = c[n],
                                      l = null,
                                      s = 1 / 0;
                                  for (let t of r) {
                                      if (t === n) continue;
                                      let r = h(e, t);
                                      if (null == r) continue;
                                      let a = Math.abs(c[t] - i);
                                      a < s && ((s = a), (l = r));
                                  }
                                  return l;
                              })(i.videoRenditions, u)
                            : null)
                        ? e
                        : u.supported.includes(l.x.PORTRAIT)
                          ? { url: i.videoHls, aspectRatio: l.x.PORTRAIT }
                          : null;
            return null == t
                ? { url: i.videoHls, orientation: "portrait" }
                : { url: t.url, orientation: t.aspectRatio === l.x.PORTRAIT ? "portrait" : "landscape" };
        }, [i]),
        T = p(i),
        S = T.label ?? i.advertiserName,
        R = K({ bounty: i, onClose: n, sourceQuestContent: o });
    return (0, r.jsx)(A.A, {
        transitionState: t,
        orientation: E,
        ariaLabel: S,
        impressionRef: (e) => {
            f.current = e;
        },
        video: (0, r.jsx)(ef, {
            bounty: i,
            sourceQuestContent: o,
            src: g,
            orientation: E,
            openedAtMs: m,
            parentTransitionState: t,
            onClose: n,
        }),
        footer: (0, r.jsx)(v.A, {
            advertiserDetails: (0, r.jsx)(C.A, {
                prefix: (0, r.jsx)(b, { iconImageUri: T.iconImageUri, size: "sm" }),
                title: S,
                subtitle: P.intl.string(P.t.o6FLcF),
                isFlush: !0,
                onClick: () => R(_.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, r.jsx)(s.$, {
                variant: "primary",
                text: T.buttonLabel,
                onClick: () => R(_.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
function eE(e) {
    return (0, r.jsx)(f.R, {
        adContentId: e.bounty.id,
        adCreativeType: i.p.BOUNTY,
        questContent: _.uF.VIDEO_MODAL,
        minViewTimeSeconds: m.bq,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, r.jsx)(eg, { ...e, impressionRef: t }),
    });
}
