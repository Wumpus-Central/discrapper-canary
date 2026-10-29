n.d(t, { default: () => eE });
var r = n(477900),
    a = n(582128),
    i = n(323889),
    s = n(984827),
    l = n(821609),
    o = n(284009),
    d = n.n(o);
(s.x.PORTRAIT, s.x.PORTRAIT);
let u = { preferred: s.x.LANDSCAPE, supported: [s.x.LANDSCAPE, s.x.PORTRAIT] },
    c = { [s.x.PORTRAIT]: 9 / 16, [s.x.LANDSCAPE]: 16 / 9 };
function m(e, t) {
    let n = e[t];
    return null == n || "" === n ? null : { url: n, aspectRatio: t };
}
var h = n(613373),
    p = n(738822);
function _(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var C = n(637691),
    v = n(738883),
    A = n(669912),
    g = n(657792),
    f = n(503698),
    R = n.n(f),
    x = n(291749),
    E = n(815714);
let T = { sm: 48, lg: 92 };
function b(e) {
    let { iconImageUri: t, size: n } = e,
        a = T[n],
        i = R()(E.Z2, { [E.Ke]: "sm" === n, [E.EX]: "lg" === n }),
        s = { "--custom-product-icon-size": `${a}px` };
    return null == t
        ? (0, r.jsx)("div", { "aria-hidden": !0, className: i, style: s })
        : (0, r.jsx)("img", {
              src: (0, x.lR)({ assetUrl: t, width: a, height: a }),
              alt: "",
              width: a,
              height: a,
              className: i,
              style: s,
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
        s = (0, H.QK)();
    return a.useCallback(
        async (e) => {
            ((await (0, G.f7)(t.cta.url)) && (n(), (0, Q.closeAllModals)()),
                (0, z._Q)(
                    { adContentId: t.id, adCreativeType: i.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: Y.Cy.OPEN_GAME_LINK, impressionId: s(), sourceQuestContent: r },
                ));
        },
        [t.id, t.cta, n, r, s],
    );
}
var q = n(652215);
let K = { offset: 4 };
function W(e) {
    let { bounty: t, sourceQuestContent: n, videoRef: s, onClose: l } = e,
        o = _(t),
        d = $({ bounty: t, onClose: l, sourceQuestContent: n }),
        u = a.useCallback(() => {
            let e = (0, F.qf)(s.current?.parentNode, s.current);
            (null != e && (0, F.sP)(e), d(p.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [s, d]);
    return (0, r.jsx)(I.N, {
        theme: q.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)(g.R, {
                adContentId: t.id,
                adCreativeType: i.p.BOUNTY,
                questContent: p.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: n,
                children: (n) =>
                    (0, r.jsx)(V.D, {
                        innerRef: n,
                        className: R()(e, E.hn),
                        focusProps: K,
                        onClick: u,
                        children: (0, r.jsxs)("div", {
                            className: E.jT,
                            children: [
                                (0, r.jsx)(b, { iconImageUri: o.iconImageUri, size: "lg" }),
                                (0, r.jsxs)("div", {
                                    className: E.z9,
                                    children: [
                                        (0, r.jsx)(B.E, {
                                            tag: "div",
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: o.label ?? t.advertiserName,
                                        }),
                                        (0, r.jsx)(B.E, {
                                            tag: "div",
                                            variant: "heading-sm/medium",
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
        className: R()(Z.z6, { [Z.HY]: t }),
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
    let { totalSeconds: n, remainingSeconds: i } = e,
        s = i <= 0,
        [l] = a.useState(s),
        o = Math.max(1, Math.ceil(i)),
        d = 0;
    return (
        s ? (d = 1) : n > 0 && (d = 1 - i / n),
        (0, r.jsxs)("div", {
            role: "timer",
            "aria-label": s ? j.intl.string(j.t["0F4Peo"]) : j.intl.formatToPlainString(j.t["45cddS"], { seconds: o }),
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
                            className: R()(Z.qB, { [Z.LQ]: d <= 0 }),
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
                s
                    ? (0, r.jsx)(er, { animateIn: !l })
                    : (0, r.jsx)(B.E, {
                          "aria-hidden": !0,
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: Z.YA,
                          children: o,
                      }),
            ],
        })
    );
}
var ei = n(132500),
    es = n(731738),
    el = n(876230),
    eo = n(69114),
    ed = n(807393),
    eu = n(544180),
    ec = n(561844),
    em = n(297727),
    eh = n(753386);
let ep = [25, 50, 75];
function e_(e, t) {
    return null != t ? Math.min(e, t) : e;
}
var eC = n(190107);
n(500522);
var ev = n(879371),
    eA = n(337611);
function eg() {
    let e = a.useMemo(() => (0, x.lR)({ assetUrl: eA.A, width: 34, height: 34 }), []);
    return (0, r.jsx)("img", { src: e, alt: "", className: E.RN });
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
function eR(e) {
    let {
            bounty: t,
            sourceQuestContent: n,
            src: s,
            orientation: l,
            openedAtMs: o,
            parentTransitionState: d,
            onClose: u,
        } = e,
        c = a.useRef(null),
        m = (0, S.bG)([y.A], () => y.A.isBountyCompleted(t.id)),
        _ = a.useCallback(() => {
            ef(t, n);
        }, [t, n]),
        C = (function (e) {
            let { bountyId: t, sourceQuestContent: n, rewardTimerSeconds: r, openedAtMs: s, videoRef: l } = e,
                [o] = a.useState(() => (0, ei.A)()),
                d = (0, H.wW)(),
                u = a.useRef(null),
                c = a.useRef(!1),
                m = a.useRef(null),
                h = a.useRef(-1),
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
                        (0, em.n0)({
                            getImpressionId: d,
                            onEmit: (e) => {
                                (0, ec.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
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
                g = a.useCallback(
                    (e, r, a, s) => {
                        _.current.has(e) ||
                            (_.current.add(e),
                            (0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_PROGRESSED,
                                properties: { ...C(), progress: a, video_timestamp_seconds: r, threshold_met: s },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, C],
                ),
                f = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = (0, eh.zh)(e, t),
                            i = e >= r;
                        if ((g("start", 0, 0, !1), i || n)) {
                            let n = Math.max(r, e);
                            g("threshold", n, (0, eh.zh)(n, t), !0);
                        }
                        if ((0, eh.di)(t)) for (let t of ep) a >= t / 100 && g(`p${t}`, e, a, i);
                        n && g("end", t, 1, !0);
                    },
                    [r, g],
                ),
                R = a.useCallback(
                    (e, t, n) => {
                        (f(e, t),
                            A.onProgress({
                                positionSeconds: n,
                                durationSeconds: t,
                                isPlaying: null != l.current && !l.current.paused && !l.current.seeking,
                            }));
                    },
                    [f, A, l],
                ),
                x = a.useCallback(() => {
                    A.pause();
                }, [A]),
                E = a.useCallback(
                    (e, t) => {
                        f(e, t, !0);
                    },
                    [f],
                ),
                T = a.useCallback(
                    (e, r) => {
                        e !== el.Q6.PLAYING && A.pause();
                        let a = l.current;
                        null == a ||
                            r !== el.KB.USER ||
                            ((e !== el.Q6.PLAYING || a.paused) &&
                                (0, ec.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
                                    event: e === el.Q6.PAUSED ? q.HAw.AD_VIDEO_PAUSED : q.HAw.AD_VIDEO_RESUMED,
                                    properties: { ...C(), video_timestamp_seconds: a.currentTime },
                                    sourceQuestContent: n,
                                }));
                    },
                    [t, n, l, C, A],
                ),
                b = a.useCallback(
                    (e) => {
                        let r = m.current;
                        null != r &&
                            ((m.current = null),
                            (0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_BUFFERING_ENDED,
                                properties: { ...r, ...v(), duration: e },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, v],
                ),
                S = a.useCallback(() => {
                    if ((A.pause(), null != m.current)) return;
                    h.current += 1;
                    let e = { ...C(), buffer_index: h.current };
                    ((m.current = e),
                        (0, ec.Qg)({
                            adContentId: t,
                            adCreativeType: i.p.BOUNTY,
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
                                adCreativeType: i.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: { ...C(), ...v(), duration_ms: e - s },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, s, C, v],
                ),
                I = a.useCallback(
                    (e) => {
                        let r = l.current;
                        null != r &&
                            ((0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_ERROR,
                                properties: {
                                    ...C(),
                                    ...v(),
                                    video_progress: (0, eh.zh)(r.currentTime, r.duration),
                                    video_error_type: e,
                                    video_error_code: r.error?.code,
                                    video_error_message: r.error?.message,
                                    video_network_state: r.networkState,
                                },
                                sourceQuestContent: n,
                            }),
                            (e === el.SB.SOURCE_ERROR || e === el.SB.NO_VALID_SOURCE) &&
                                ed.A.increment({
                                    name: es.K.QUEST_VIDEO_ERROR,
                                    tags: [
                                        `ad_creative_id:${t}`,
                                        `ad_creative_type:${i.p[i.p.BOUNTY]}`,
                                        `error_type:${e}`,
                                    ],
                                }));
                    },
                    [t, n, l, C, v],
                );
            return {
                handleVideoProgress: R,
                handleSeek: x,
                handleVideoEnd: E,
                handlePlayerStateChange: T,
                handleReadyForDisplay: N,
                handleBufferingStart: S,
                handleBufferingEnd: b,
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
            rewardRemainingSeconds: g,
            maxSeekableTimeSeconds: f,
            handleProgressUpdate: x,
            handleSeek: T,
            handleEnded: b,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: n,
                    videoRef: r,
                    isCompleted: i,
                    onRewardEarned: s,
                    onVideoProgress: l,
                    onVideoSeek: o,
                    onVideoEnd: d,
                } = e,
                [u, c] = a.useState(0),
                [m, h] = a.useState(n),
                p = a.useRef(0),
                _ = a.useRef(n),
                C = a.useRef(i),
                v = e_(t, m),
                A = i || u >= v,
                g = a.useCallback((e) => {
                    ((_.current = e), h(e));
                }, []),
                f = a.useCallback(
                    (e) => {
                        let n = Math.max(p.current, e);
                        return (
                            (p.current = n), c(n), !C.current && n >= e_(t, _.current) && ((C.current = !0), s()), n
                        );
                    },
                    [t, s],
                ),
                R = a.useCallback(
                    (e, t) => {
                        ((0, eh.di)(t) && g(t), l(f(e), _.current ?? t, e));
                    },
                    [g, f, l],
                );
            return {
                rewardTargetSeconds: v,
                isRewardEarned: A,
                rewardRemainingSeconds: A ? 0 : v - u,
                maxSeekableTimeSeconds: u,
                handleProgressUpdate: R,
                handleSeek: a.useCallback(
                    (e, t) => {
                        (f(e), o(e, t));
                    },
                    [f, o],
                ),
                handleEnded: a.useCallback(() => {
                    let e = r.current,
                        t = p.current;
                    (null != e && (0, eh.di)(e.duration) && (g(e.duration), (t = f(e.duration))),
                        d(t, _.current ?? e?.duration ?? NaN));
                }, [r, g, f, d]),
            };
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: c,
            isCompleted: m,
            onRewardEarned: _,
            onVideoProgress: C.handleVideoProgress,
            onVideoSeek: C.handleSeek,
            onVideoEnd: C.handleVideoEnd,
        }),
        { volume: N, muted: k, setVolume: P, setMuted: V } = (0, L.A)(),
        { balance: B } = (0, O.W0)(),
        F = a.useMemo(() => (0, r.jsx)(eg, {}), []),
        Q = a.useMemo(() => j.intl.formatToPlainString(j.t["nLXlh+"], { orbAmount: eC.FA }), []),
        z = (0, U.A)({ targetSec: v, label: Q, isCompleted: A, icon: F, clickable: f >= v }),
        G = a.useCallback(
            () =>
                (0, r.jsx)(I.N, {
                    theme: q.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: R()(e, E.gP),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: E.Cq,
                                    children: [
                                        (0, r.jsx)(ea, { totalSeconds: v, remainingSeconds: g }),
                                        (0, r.jsx)(D.Ay, {
                                            variant: "overlay-secondary",
                                            balance: B,
                                            borderRadius: "round",
                                            textSize: "sm",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: E.ne, children: (0, r.jsx)(w.A, { onClose: u }) }),
                            ],
                        }),
                }),
            [u, B, g, v],
        ),
        $ = a.useCallback(
            () => (0, r.jsx)(W, { bounty: t, sourceQuestContent: n, videoRef: c, onClose: u }),
            [t, n, u],
        );
    return (0, r.jsx)(h.Ft, {
        ref: c,
        parentTransitionState: d,
        autoplay: !0,
        autoFocus: !0,
        orientation: l,
        src: s,
        progressClassName: A ? ev.s : ev.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !A,
        getPlaybackBlockedMessage: M.b,
        maxSeekableTimeSec: f,
        initialVolume: N,
        initialMuted: k,
        onVolumeChange: P,
        onMutedChange: V,
        onProgressUpdate: x,
        onSeek: T,
        onEnded: b,
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
function ex(e) {
    let { transitionState: t, onClose: n, bounty: i, sourceQuestContent: o, openedAtMs: h, impressionRef: g } = e,
        { url: f, orientation: R } = a.useMemo(() => {
            var e, t;
            let n =
                ((e = i),
                (t = u),
                null == e.videoRenditions
                    ? t.supported.includes(s.x.PORTRAIT)
                        ? { url: e.videoHls, aspectRatio: s.x.PORTRAIT }
                        : null
                    : (function (e, t) {
                          let { preferred: n, supported: r } = t;
                          d()(r.includes(n), "Preferred aspect ratio must be in supported renditions list");
                          let a = m(e, n);
                          if (null != a) return a;
                          let i = c[n],
                              s = null,
                              l = 1 / 0;
                          for (let t of r) {
                              if (t === n) continue;
                              let r = m(e, t);
                              if (null == r) continue;
                              let a = Math.abs(c[t] - i);
                              a < l && ((l = a), (s = r));
                          }
                          return s;
                      })(e.videoRenditions, t));
            return null == n
                ? { url: i.videoHls, orientation: "portrait" }
                : { url: n.url, orientation: n.aspectRatio === s.x.PORTRAIT ? "portrait" : "landscape" };
        }, [i]),
        x = _(i),
        E = x.label ?? i.advertiserName,
        T = $({ bounty: i, onClose: n, sourceQuestContent: o });
    return (0, r.jsx)(A.A, {
        transitionState: t,
        orientation: R,
        ariaLabel: E,
        impressionRef: (e) => {
            g.current = e;
        },
        video: (0, r.jsx)(eR, {
            bounty: i,
            sourceQuestContent: o,
            src: f,
            orientation: R,
            openedAtMs: h,
            parentTransitionState: t,
            onClose: n,
        }),
        footer: (0, r.jsx)(v.A, {
            prefix: (0, r.jsx)(b, { iconImageUri: x.iconImageUri, size: "sm" }),
            advertiserDetails: (0, r.jsx)(C.A, {
                title: E,
                subtitle: j.intl.string(j.t.o6FLcF),
                onClick: () => T(p.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, r.jsx)(l.$, {
                variant: "primary",
                text: x.buttonLabel,
                onClick: () => T(p.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
function eE(e) {
    return (0, r.jsx)(g.R, {
        adContentId: e.bounty.id,
        adCreativeType: i.p.BOUNTY,
        questContent: p.uF.VIDEO_MODAL,
        minViewTimeSeconds: h.bq,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, r.jsx)(ex, { ...e, impressionRef: t }),
    });
}
