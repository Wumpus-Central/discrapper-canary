n.d(t, { default: () => eR });
var r = n(477900),
    a = n(582128),
    s = n(323889),
    i = n(984827),
    l = n(821609),
    o = n(284009),
    d = n.n(o);
(i.x.PORTRAIT, i.x.PORTRAIT);
let u = { preferred: i.x.LANDSCAPE, supported: [i.x.LANDSCAPE, i.x.PORTRAIT] },
    c = { [i.x.PORTRAIT]: 9 / 16, [i.x.LANDSCAPE]: 16 / 9 };
function h(e, t) {
    let n = e[t];
    return null == n || "" === n ? null : { url: n, aspectRatio: t };
}
var m = n(613373),
    p = n(738822);
function _(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var C = n(637691),
    v = n(738883),
    A = n(669912),
    f = n(657792),
    g = n(503698),
    b = n.n(g),
    R = n(31046),
    x = n(815714);
let E = { sm: 48, lg: 92 };
function T(e) {
    let { iconImageUri: t, size: n } = e,
        a = E[n],
        s = b()(x.Z2, { [x.Ke]: "sm" === n, [x.EX]: "lg" === n }),
        i = { "--custom-product-icon-size": `${a}px` };
    return null == t
        ? (0, r.jsx)("div", { "aria-hidden": !0, className: s, style: i })
        : (0, r.jsx)("img", {
              src: (0, R.lR)({ assetUrl: t, width: a, height: a }),
              alt: "",
              width: a,
              height: a,
              className: s,
              style: i,
          });
}
var S = n(17928),
    N = n(858899),
    I = n(43990),
    O = n(478996),
    D = n(37402),
    k = n(845890),
    y = n(265704),
    j = n(105292);
let P = new Set([260021]);
var w = n(491812),
    M = n(755372),
    U = n(759182),
    L = n(236850),
    V = n(939249),
    B = n(834730),
    F = n(475815),
    Q = n(192308),
    Y = n(590202),
    H = n(971649),
    z = n(620954),
    G = n(617986);
function $(e) {
    let { bounty: t, onClose: n, sourceQuestContent: r } = e,
        i = (0, H.QK)();
    return a.useCallback(
        async (e) => {
            ((await (0, G.f7)(t.cta.url)) && (n(), (0, Q.closeAllModals)()),
                (0, z._Q)(
                    { adContentId: t.id, adCreativeType: s.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: Y.Cy.OPEN_GAME_LINK, impressionId: i(), sourceQuestContent: r },
                ));
        },
        [t.id, t.cta, n, r, i],
    );
}
var q = n(652215);
let K = { offset: 4 };
function W(e) {
    let { bounty: t, sourceQuestContent: n, videoRef: i, onClose: l } = e,
        o = _(t),
        d = $({ bounty: t, onClose: l, sourceQuestContent: n }),
        u = a.useCallback(() => {
            let e = (0, F.qf)(i.current?.parentNode, i.current);
            (null != e && (0, F.sP)(e), d(p.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [i, d]);
    return (0, r.jsx)(I.N, {
        theme: q.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)(f.R, {
                adContentId: t.id,
                adCreativeType: s.p.BOUNTY,
                questContent: p.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: n,
                children: (n) =>
                    (0, r.jsx)(V.D, {
                        innerRef: n,
                        className: b()(e, x.hn),
                        focusProps: K,
                        onClick: u,
                        children: (0, r.jsxs)("div", {
                            className: x.jT,
                            children: [
                                (0, r.jsx)(T, { iconImageUri: o.iconImageUri, size: "lg" }),
                                (0, r.jsxs)("div", {
                                    className: x.z9,
                                    children: [
                                        (0, r.jsx)(B.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: o.label ?? t.advertiserName,
                                        }),
                                        (0, r.jsx)(B.E, {
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
var X = n(661531),
    J = n(820081),
    Z = n(250328);
let ee = 2 * Math.PI * 14.4,
    et = (180 / Math.PI) * 0.11111111111111112,
    en = `rotate(${-90 + et} 16 16)`;
function er(e) {
    let { animateIn: t } = e;
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: b()(Z.z6, { [Z.HY]: t }),
        children: [
            (0, r.jsx)("div", { className: Z.AW }),
            (0, r.jsx)(J.B, {
                size: "custom",
                width: 20,
                height: 20,
                color: X.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: Z.kQ,
            }),
        ],
    });
}
function ea(e) {
    var t;
    let { totalSeconds: n, remainingSeconds: s } = e,
        i = s <= 0,
        [l] = a.useState(i),
        o = Math.max(1, Math.ceil(s)),
        d = 0;
    return (
        i ? (d = 1) : n > 0 && (d = 1 - s / n),
        (0, r.jsxs)("div", {
            role: "timer",
            "aria-label": i ? j.intl.string(j.t["0F4Peo"]) : j.intl.formatToPlainString(j.t["45cddS"], { seconds: o }),
            className: Z.O1,
            children: [
                (0, r.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: Z.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, r.jsx)("circle", { className: Z.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, r.jsx)("circle", {
                            className: b()(Z.qB, { [Z.LQ]: d <= 0 }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${ee} ${ee}`,
                            strokeDashoffset: ee - ((t = d) >= 1 ? ee : Math.max(0.01, t * ee - 3.2)),
                            transform: en,
                        }),
                    ],
                }),
                i
                    ? (0, r.jsx)(er, { animateIn: !l })
                    : (0, r.jsx)(B.E, {
                          "aria-hidden": !0,
                          variant: "body-xs/semibold",
                          color: "text-strong",
                          className: Z.YA,
                          children: o,
                      }),
            ],
        })
    );
}
var es = n(132500),
    ei = n(731738),
    el = n(876230),
    eo = n(69114),
    ed = n(807393),
    eu = n(544180),
    ec = n(561844),
    eh = n(297727),
    em = n(753386);
let ep = [25, 50, 75];
function e_(e, t) {
    return null != t ? Math.min(e, t) : e;
}
var eC = n(190107);
n(500522);
var ev = n(879371);
function eA() {
    let e = a.useMemo(
        () =>
            (0, R.lR)({
                assetUrl:
                    "https://cdn.discordapp.com/assets/content/8db8015bf879338028eb3094d2ca5567c70f6ea9a6bb60068b0f00ca712e5bf6.webp",
                width: 34,
                height: 34,
            }),
        [],
    );
    return (0, r.jsx)("img", { src: e, alt: "", className: x.RN });
}
async function ef(e, t) {
    try {
        await (0, k.Hq)(e.id, t);
    } catch (e) {
        (0, N.P0)({
            text: e?.code != null && P.has(e.code) && e?.message != null ? e.message : j.intl.string(j.t.uLjCfn),
            variant: "critical",
        });
    }
}
function eg(e) {
    let {
            bounty: t,
            sourceQuestContent: n,
            src: i,
            orientation: l,
            openedAtMs: o,
            parentTransitionState: d,
            onClose: u,
        } = e,
        c = a.useRef(null),
        h = (0, S.bG)([y.A], () => y.A.isBountyCompleted(t.id)),
        _ = a.useCallback(() => {
            ef(t, n);
        }, [t, n]),
        C = (function (e) {
            let { bountyId: t, sourceQuestContent: n, rewardTimerSeconds: r, openedAtMs: i, videoRef: l } = e,
                [o] = a.useState(() => (0, es.A)()),
                d = (0, H.wW)(),
                u = a.useRef(null),
                c = a.useRef(!1),
                h = a.useRef(null),
                m = a.useRef(-1),
                _ = a.useRef(new Set()),
                C = a.useCallback(
                    () => ({ video_session_id: o, impression_id: d(), reward_timer_seconds: r }),
                    [o, d, r],
                ),
                v = a.useCallback(() => {
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
                        network_connection_speed: eu.A.getEffectiveConnectionSpeed(),
                    };
                }, []),
                A = a.useMemo(
                    () =>
                        (0, eh.n0)({
                            getImpressionId: d,
                            onEmit: (e) => {
                                (0, ec.Qg)({
                                    adContentId: t,
                                    adCreativeType: s.p.BOUNTY,
                                    event: q.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                                    properties: {
                                        ...(0, Y.fF)(p.uF.VIDEO_MODAL),
                                        ...(0, eo.A)(),
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
                f = a.useCallback(
                    (e, r, a, i) => {
                        _.current.has(e) ||
                            (_.current.add(e),
                            (0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_PROGRESSED,
                                properties: { ...C(), progress: a, video_timestamp_seconds: r, threshold_met: i },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, C],
                ),
                g = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = (0, em.zh)(e, t),
                            s = e >= r;
                        if ((f("start", 0, 0, !1), s || n)) {
                            let n = Math.max(r, e);
                            f("threshold", n, (0, em.zh)(n, t), !0);
                        }
                        if ((0, em.di)(t)) for (let t of ep) a >= t / 100 && f(`p${t}`, e, a, s);
                        n && f("end", t, 1, !0);
                    },
                    [r, f],
                ),
                b = a.useCallback(
                    (e, t, n) => {
                        (g(e, t),
                            A.onProgress({
                                positionSeconds: n,
                                durationSeconds: t,
                                isPlaying: null != l.current && !l.current.paused && !l.current.seeking,
                            }));
                    },
                    [g, A, l],
                ),
                R = a.useCallback(() => {
                    A.pause();
                }, [A]),
                x = a.useCallback(
                    (e, t) => {
                        g(e, t, !0);
                    },
                    [g],
                ),
                E = a.useCallback(
                    (e, r) => {
                        e !== el.Q6.PLAYING && A.pause();
                        let a = l.current;
                        null == a ||
                            r !== el.KB.USER ||
                            ((e !== el.Q6.PLAYING || a.paused) &&
                                (0, ec.Qg)({
                                    adContentId: t,
                                    adCreativeType: s.p.BOUNTY,
                                    event: e === el.Q6.PAUSED ? q.HAw.AD_VIDEO_PAUSED : q.HAw.AD_VIDEO_RESUMED,
                                    properties: { ...C(), video_timestamp_seconds: a.currentTime },
                                    sourceQuestContent: n,
                                }));
                    },
                    [t, n, l, C, A],
                ),
                T = a.useCallback(
                    (e) => {
                        let r = h.current;
                        null != r &&
                            ((h.current = null),
                            (0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_BUFFERING_ENDED,
                                properties: { ...r, ...v(), duration: e },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, v],
                ),
                S = a.useCallback(() => {
                    if ((A.pause(), null != h.current)) return;
                    m.current += 1;
                    let e = { ...C(), buffer_index: m.current };
                    ((h.current = e),
                        (0, ec.Qg)({
                            adContentId: t,
                            adCreativeType: s.p.BOUNTY,
                            event: q.HAw.AD_VIDEO_BUFFERING_STARTED,
                            properties: { ...e, ...v() },
                            sourceQuestContent: n,
                        }));
                }, [t, n, C, v, A]),
                N = a.useCallback(
                    (e) => {
                        c.current ||
                            ((c.current = !0),
                            (0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: { ...C(), ...v(), duration_ms: e - i },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, i, C, v],
                ),
                I = a.useCallback(
                    (e) => {
                        let r = l.current;
                        null != r &&
                            ((0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_ERROR,
                                properties: {
                                    ...C(),
                                    ...v(),
                                    video_progress: (0, em.zh)(r.currentTime, r.duration),
                                    video_error_type: e,
                                    video_error_code: r.error?.code,
                                    video_error_message: r.error?.message,
                                    video_network_state: r.networkState,
                                },
                                sourceQuestContent: n,
                            }),
                            (e === el.SB.SOURCE_ERROR || e === el.SB.NO_VALID_SOURCE) &&
                                ed.A.increment({
                                    name: ei.K.QUEST_VIDEO_ERROR,
                                    tags: [
                                        `ad_creative_id:${t}`,
                                        `ad_creative_type:${s.p[s.p.BOUNTY]}`,
                                        `error_type:${e}`,
                                    ],
                                }));
                    },
                    [t, n, l, C, v],
                );
            return {
                handleVideoProgress: b,
                handleSeek: R,
                handleVideoEnd: x,
                handlePlayerStateChange: E,
                handleReadyForDisplay: N,
                handleBufferingStart: S,
                handleBufferingEnd: T,
                handleVideoError: I,
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
            rewardTargetSeconds: v,
            isRewardEarned: A,
            rewardRemainingSeconds: f,
            maxSeekableTimeSeconds: g,
            handleProgressUpdate: R,
            handleSeek: E,
            handleEnded: T,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: n,
                    videoRef: r,
                    isCompleted: s,
                    onRewardEarned: i,
                    onVideoProgress: l,
                    onVideoSeek: o,
                    onVideoEnd: d,
                } = e,
                [u, c] = a.useState(0),
                [h, m] = a.useState(n),
                p = a.useRef(0),
                _ = a.useRef(n),
                C = a.useRef(s),
                v = e_(t, h),
                A = s || u >= v,
                f = a.useCallback((e) => {
                    ((_.current = e), m(e));
                }, []),
                g = a.useCallback(
                    (e) => {
                        let n = Math.max(p.current, e);
                        return (
                            (p.current = n), c(n), !C.current && n >= e_(t, _.current) && ((C.current = !0), i()), n
                        );
                    },
                    [t, i],
                ),
                b = a.useCallback(
                    (e, t) => {
                        ((0, em.di)(t) && f(t), l(g(e), _.current ?? t, e));
                    },
                    [f, g, l],
                );
            return {
                rewardTargetSeconds: v,
                isRewardEarned: A,
                rewardRemainingSeconds: A ? 0 : v - u,
                maxSeekableTimeSeconds: u,
                handleProgressUpdate: b,
                handleSeek: a.useCallback(
                    (e, t) => {
                        (g(e), o(e, t));
                    },
                    [g, o],
                ),
                handleEnded: a.useCallback(() => {
                    let e = r.current,
                        t = p.current;
                    (null != e && (0, em.di)(e.duration) && (f(e.duration), (t = g(e.duration))),
                        d(t, _.current ?? e?.duration ?? NaN));
                }, [r, f, g, d]),
            };
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: c,
            isCompleted: h,
            onRewardEarned: _,
            onVideoProgress: C.handleVideoProgress,
            onVideoSeek: C.handleSeek,
            onVideoEnd: C.handleVideoEnd,
        }),
        { volume: N, muted: k, setVolume: P, setMuted: V } = (0, L.A)(),
        { balance: B } = (0, O.W0)(),
        F = a.useMemo(() => (0, r.jsx)(eA, {}), []),
        Q = a.useMemo(() => j.intl.formatToPlainString(j.t["nLXlh+"], { orbAmount: eC.FA }), []),
        z = (0, U.A)({ targetSec: v, label: Q, isCompleted: A, icon: F, clickable: g >= v }),
        G = a.useCallback(
            () =>
                (0, r.jsx)(I.N, {
                    theme: q.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: b()(e, x.gP),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: x.Cq,
                                    children: [
                                        (0, r.jsx)(ea, { totalSeconds: v, remainingSeconds: f }),
                                        (0, r.jsx)(D.Ay, {
                                            variant: "overlay-secondary",
                                            balance: B,
                                            borderRadius: "round",
                                            textSize: "sm",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: x.ne, children: (0, r.jsx)(w.A, { onClose: u }) }),
                            ],
                        }),
                }),
            [u, B, f, v],
        ),
        $ = a.useCallback(
            () => (0, r.jsx)(W, { bounty: t, sourceQuestContent: n, videoRef: c, onClose: u }),
            [t, n, u],
        );
    return (0, r.jsx)(m.Ft, {
        ref: c,
        parentTransitionState: d,
        autoplay: !0,
        autoFocus: !0,
        orientation: l,
        src: i,
        progressClassName: A ? ev.s : ev.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !A,
        getPlaybackBlockedMessage: M.b,
        maxSeekableTimeSec: g,
        initialVolume: N,
        initialMuted: k,
        onVolumeChange: P,
        onMutedChange: V,
        onProgressUpdate: R,
        onSeek: E,
        onEnded: T,
        onPlayerStateChange: C.handlePlayerStateChange,
        onFirstFrame: C.handleReadyForDisplay,
        onBufferingStart: C.handleBufferingStart,
        onBufferingEnd: C.handleBufferingEnd,
        onError: C.handleVideoError,
        onHlsInstance: C.handleHlsInstance,
        renderPersistentOverlay: G,
        renderEndScreen: $,
        timelineIndicatorConfig: z,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
function eb(e) {
    let { transitionState: t, onClose: n, bounty: s, sourceQuestContent: o, openedAtMs: m, impressionRef: f } = e,
        { url: g, orientation: b } = a.useMemo(() => {
            var e, t;
            let n =
                ((e = s),
                (t = u),
                null == e.videoRenditions
                    ? t.supported.includes(i.x.PORTRAIT)
                        ? { url: e.videoHls, aspectRatio: i.x.PORTRAIT }
                        : null
                    : (function (e, t) {
                          let { preferred: n, supported: r } = t;
                          d()(r.includes(n), "Preferred aspect ratio must be in supported renditions list");
                          let a = h(e, n);
                          if (null != a) return a;
                          let s = c[n],
                              i = null,
                              l = 1 / 0;
                          for (let t of r) {
                              if (t === n) continue;
                              let r = h(e, t);
                              if (null == r) continue;
                              let a = Math.abs(c[t] - s);
                              a < l && ((l = a), (i = r));
                          }
                          return i;
                      })(e.videoRenditions, t));
            return null == n
                ? { url: s.videoHls, orientation: "portrait" }
                : { url: n.url, orientation: n.aspectRatio === i.x.PORTRAIT ? "portrait" : "landscape" };
        }, [s]),
        R = _(s),
        x = R.label ?? s.advertiserName,
        E = $({ bounty: s, onClose: n, sourceQuestContent: o });
    return (0, r.jsx)(A.A, {
        transitionState: t,
        orientation: b,
        ariaLabel: x,
        impressionRef: (e) => {
            f.current = e;
        },
        video: (0, r.jsx)(eg, {
            bounty: s,
            sourceQuestContent: o,
            src: g,
            orientation: b,
            openedAtMs: m,
            parentTransitionState: t,
            onClose: n,
        }),
        footer: (0, r.jsx)(v.A, {
            prefix: (0, r.jsx)(T, { iconImageUri: R.iconImageUri, size: "sm" }),
            advertiserDetails: (0, r.jsx)(C.A, {
                title: x,
                subtitle: j.intl.string(j.t.o6FLcF),
                onClick: () => E(p.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, r.jsx)(l.$, {
                variant: "primary",
                text: R.buttonLabel,
                onClick: () => E(p.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
function eR(e) {
    return (0, r.jsx)(f.R, {
        adContentId: e.bounty.id,
        adCreativeType: s.p.BOUNTY,
        questContent: p.uF.VIDEO_MODAL,
        minViewTimeSeconds: m.bq,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, r.jsx)(eb, { ...e, impressionRef: t }),
    });
}
