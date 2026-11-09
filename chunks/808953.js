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
var h = n(91982),
    p = n(506988);
function _(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var C = n(637691),
    v = n(738883),
    A = n(669912),
    f = n(280905),
    g = n(503698),
    E = n.n(g),
    R = n(760914),
    T = n(815714);
let x = { sm: 48, lg: 92 };
function S(e) {
    let { iconImageUri: t, size: n } = e,
        a = x[n],
        i = E()(T.Z2, { [T.Ke]: "sm" === n, [T.EX]: "lg" === n }),
        s = { "--custom-product-icon-size": `${a}px` };
    return null == t
        ? (0, r.jsx)("div", { "aria-hidden": !0, className: i, style: s })
        : (0, r.jsx)("img", {
              src: (0, R.lR)({ assetUrl: t, width: a, height: a }),
              alt: "",
              width: a,
              height: a,
              className: i,
              style: s,
          });
}
var b = n(855986),
    I = n(858899),
    O = n(43990),
    D = n(672619),
    N = n(533609),
    k = n(845890),
    y = n(265704),
    j = n(561844),
    w = n(590202),
    P = n(792996);
let M = new Set([260021]);
var L = n(753386),
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
        s = (0, G.QK)();
    return a.useCallback(
        async (e) => {
            ((await (0, q.f7)(t.cta.url)) && (n(), (0, z.s7)()),
                (0, $._Q)(
                    { adContentId: t.id, adCreativeType: i.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: w.Cy.OPEN_GAME_LINK, impressionId: s(), sourceQuestContent: r },
                ));
        },
        [t.id, t.cta, n, r, s],
    );
}
var W = n(652215);
let X = { offset: 4 };
function J(e) {
    let { bounty: t, sourceQuestContent: n, videoRef: s, onClose: l } = e,
        o = _(t),
        d = K({ bounty: t, onClose: l, sourceQuestContent: n }),
        u = a.useCallback(() => {
            let e = (0, H.qf)(s.current?.parentNode, s.current);
            (null != e && (0, H.sP)(e), d(p.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [s, d]);
    return (0, r.jsx)(O.N, {
        theme: W.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)(f.R, {
                adContentId: t.id,
                adCreativeType: i.p.BOUNTY,
                questContent: p.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: n,
                children: (n) =>
                    (0, r.jsx)(Q.D, {
                        innerRef: n,
                        className: E()(e, T.hn),
                        focusProps: X,
                        onClick: u,
                        children: (0, r.jsxs)("div", {
                            className: T.jT,
                            children: [
                                (0, r.jsx)(S, { iconImageUri: o.iconImageUri, size: "lg" }),
                                (0, r.jsxs)("div", {
                                    className: T.z9,
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
function es(e) {
    var t;
    let { totalSeconds: n, remainingSeconds: i, isSeekInteraction: s } = e,
        l = i <= 0,
        [o] = a.useState(l),
        d = Math.max(1, Math.ceil(i)),
        u = 0;
    return (
        l ? (u = 1) : n > 0 && (u = 1 - i / n),
        (0, r.jsxs)("div", {
            role: "timer",
            "aria-label": l ? P.intl.string(P.t["0F4Peo"]) : P.intl.formatToPlainString(P.t["45cddS"], { seconds: d }),
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
                            className: E()(et.qB, { [et.LQ]: u <= 0, [et.Aq]: s }),
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
                l
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
var el = n(115560),
    eo = n(731738),
    ed = n(876230),
    eu = n(69114),
    ec = n(913379),
    em = n(544180),
    eh = n(297727);
let ep = [25, 50, 75];
function e_(e, t) {
    return null != t ? Math.min(e, t) : e;
}
(n(221596), n(500522));
var eC = n(879371),
    ev = n(970908);
function eA() {
    let e = a.useMemo(() => (0, R.lR)({ assetUrl: ev.A, width: 34, height: 34 }), []);
    return (0, r.jsx)("img", { src: e, alt: "", className: T.RN });
}
function ef(e) {
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
        m = (0, b.bG)([y.A], () => y.A.isBountyCompleted(t.id)),
        _ = a.useCallback(() => {
            !(async function (e, t) {
                try {
                    await (0, k.Hq)(e.id, t);
                } catch (e) {
                    (0, I.P0)({
                        text:
                            e?.code != null && M.has(e.code) && e?.message != null
                                ? e.message
                                : P.intl.string(P.t.uLjCfn),
                        variant: "critical",
                    });
                }
            })(t, n);
        }, [t, n]),
        C = (function (e) {
            let { bountyId: t, sourceQuestContent: n, rewardTimerSeconds: r, openedAtMs: s, videoRef: l } = e,
                [o] = a.useState(() => (0, el.A)()),
                d = (0, G.wW)(),
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
                        network_connection_speed: em.A.getEffectiveConnectionSpeed(),
                    };
                }, []),
                A = a.useMemo(
                    () =>
                        (0, eh.n0)({
                            getImpressionId: d,
                            onEmit: (e) => {
                                (0, j.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
                                    event: W.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                                    properties: {
                                        ...(0, w.fF)(p.uF.VIDEO_MODAL),
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
                f = a.useCallback(
                    (e, r, a, s) => {
                        _.current.has(e) ||
                            (_.current.add(e),
                            (0, j.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_PROGRESSED,
                                properties: { ...C(), progress: a, video_timestamp_seconds: r, threshold_met: s },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, C],
                ),
                g = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = (0, L.zh)(e, t),
                            i = e >= r;
                        if ((f("start", 0, 0, !1), i || n)) {
                            let n = Math.max(r, e);
                            f("threshold", n, (0, L.zh)(n, t), !0);
                        }
                        if ((0, L.di)(t)) for (let t of ep) a >= t / 100 && f(`p${t}`, e, a, i);
                        n && f("end", t, 1, !0);
                    },
                    [r, f],
                ),
                E = a.useCallback(
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
                T = a.useCallback(
                    (e, t) => {
                        g(e, t, !0);
                    },
                    [g],
                ),
                x = a.useCallback(
                    (e, r) => {
                        e !== ed.Q6.PLAYING && A.pause();
                        let a = l.current;
                        null == a ||
                            r !== ed.KB.USER ||
                            ((e !== ed.Q6.PLAYING || a.paused) &&
                                (0, j.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
                                    event: e === ed.Q6.PAUSED ? W.HAw.AD_VIDEO_PAUSED : W.HAw.AD_VIDEO_RESUMED,
                                    properties: { ...C(), video_timestamp_seconds: a.currentTime },
                                    sourceQuestContent: n,
                                }));
                    },
                    [t, n, l, C, A],
                ),
                S = a.useCallback(
                    (e) => {
                        let r = m.current;
                        null != r &&
                            ((m.current = null),
                            (0, j.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_BUFFERING_ENDED,
                                properties: { ...r, ...v(), duration: e },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, v],
                ),
                b = a.useCallback(() => {
                    if ((A.pause(), null != m.current)) return;
                    h.current += 1;
                    let e = { ...C(), buffer_index: h.current };
                    ((m.current = e),
                        (0, j.Qg)({
                            adContentId: t,
                            adCreativeType: i.p.BOUNTY,
                            event: W.HAw.AD_VIDEO_BUFFERING_STARTED,
                            properties: { ...e, ...v() },
                            sourceQuestContent: n,
                        }));
                }, [t, n, C, v, A]),
                I = a.useCallback(
                    (e) => {
                        c.current ||
                            ((c.current = !0),
                            (0, j.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: { ...C(), ...v(), duration_ms: e - s },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, s, C, v],
                ),
                O = a.useCallback(
                    (e) => {
                        let r = l.current;
                        null != r &&
                            ((0, j.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_ERROR,
                                properties: {
                                    ...C(),
                                    ...v(),
                                    video_progress: (0, L.zh)(r.currentTime, r.duration),
                                    video_error_type: e,
                                    video_error_code: r.error?.code,
                                    video_error_message: r.error?.message,
                                    video_network_state: r.networkState,
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
                    [t, n, l, C, v],
                );
            return {
                getVideoProperties: C,
                handleVideoProgress: E,
                handleSeek: R,
                handleVideoEnd: T,
                handlePlayerStateChange: x,
                handleReadyForDisplay: I,
                handleBufferingStart: b,
                handleBufferingEnd: S,
                handleVideoError: O,
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
            rewardRemainingSeconds: R,
            isSeekInteraction: x,
            maxSeekableTimeSeconds: S,
            handleProgressUpdate: Q,
            handleSeek: Y,
            handleEnded: H,
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
                [m, h] = a.useState(0),
                { isSeekInteraction: p, handleSeek: _ } = (function () {
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
                E = e_(t, C),
                R = i || u >= E,
                T = a.useCallback((e) => {
                    ((f.current = e), v(e));
                }, []),
                x = a.useCallback(
                    (e) => {
                        let n = Math.max(A.current, e);
                        return (
                            (A.current = n), c(n), !g.current && n >= e_(t, f.current) && ((g.current = !0), s()), n
                        );
                    },
                    [t, s],
                ),
                S = a.useCallback(
                    (e, t) => {
                        ((0, L.di)(t) && T(t), h(e), l(x(e), f.current ?? t, e));
                    },
                    [T, x, l],
                ),
                b = a.useCallback(
                    (e, t) => {
                        (x(e), h(t), _(), o(e, t));
                    },
                    [x, _, o],
                ),
                I = a.useCallback(() => {
                    let e = r.current,
                        t = A.current;
                    (null != e && (0, L.di)(e.duration) && (T(e.duration), (t = x(e.duration))),
                        d(t, f.current ?? e?.duration ?? 0 / 0));
                }, [r, T, x, d]),
                O = 0;
            return (
                null != C && (0, L.di)(C) ? (O = C) : null != n && (0, L.di)(n) && (O = n),
                {
                    maxWatchedSeconds: u,
                    durationSeconds: O,
                    rewardTargetSeconds: E,
                    isRewardEarned: R,
                    rewardRemainingSeconds: R ? 0 : E - m,
                    isSeekInteraction: p,
                    maxSeekableTimeSeconds: u,
                    handleProgressUpdate: S,
                    handleSeek: b,
                    handleEnded: I,
                }
            );
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
        { getVideoProperties: z } = C,
        $ = (0, a.useEffectEvent)(() => {
            (0, j.Qg)({
                adContentId: t.id,
                adCreativeType: i.p.BOUNTY,
                event: W.HAw.AD_VIDEO_MODAL_CLOSED,
                sourceQuestContent: n,
                properties: {
                    ...z(),
                    content_name: (0, w.jO)(p.uF.VIDEO_MODAL),
                    content_id: p.uF.VIDEO_MODAL,
                    video_progress: (0, L.zh)(v, A),
                    threshold_met: v >= t.rewardTimerSeconds,
                },
            });
        });
    a.useEffect(() => () => $(), []);
    let { volume: q, muted: K, setVolume: X, setMuted: Z } = (0, F.A)(),
        { balance: ee } = (0, D.W0)(),
        et = a.useMemo(() => (0, r.jsx)(eA, {}), []),
        en = a.useMemo(() => P.intl.formatToPlainString(P.t["nLXlh+"], { orbAmount: 50 }), []),
        er = (0, B.A)({ targetSec: f, label: en, isCompleted: g, icon: et, clickable: S >= f }),
        ea = a.useCallback(
            () =>
                (0, r.jsx)(O.N, {
                    theme: W.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: E()(e, T.gP),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: T.Cq,
                                    children: [
                                        (0, r.jsx)(es, { totalSeconds: f, remainingSeconds: R, isSeekInteraction: x }),
                                        (0, r.jsx)(N.Ay, {
                                            variant: "overlay-secondary",
                                            balance: ee,
                                            borderRadius: "round",
                                            textSize: "sm",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: T.ne, children: (0, r.jsx)(V.A, { onClose: u }) }),
                            ],
                        }),
                }),
            [u, ee, R, f, x],
        ),
        ei = a.useCallback(
            () => (0, r.jsx)(J, { bounty: t, sourceQuestContent: n, videoRef: c, onClose: u }),
            [t, n, u],
        );
    return (0, r.jsx)(h.Ft, {
        ref: c,
        parentTransitionState: d,
        autoplay: !0,
        autoFocus: !0,
        orientation: l,
        src: s,
        progressClassName: g ? eC.s : eC.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !g,
        getPlaybackBlockedMessage: U.b,
        maxSeekableTimeSec: S,
        initialVolume: q,
        initialMuted: K,
        onVolumeChange: X,
        onMutedChange: Z,
        onProgressUpdate: Q,
        onSeek: Y,
        onEnded: H,
        onPlayerStateChange: C.handlePlayerStateChange,
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
    let { transitionState: t, onClose: n, bounty: i, sourceQuestContent: o, openedAtMs: h, impressionRef: f } = e,
        { url: g, orientation: E } = a.useMemo(() => {
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
        R = _(i),
        T = R.label ?? i.advertiserName,
        x = K({ bounty: i, onClose: n, sourceQuestContent: o });
    return (0, r.jsx)(A.A, {
        transitionState: t,
        orientation: E,
        ariaLabel: T,
        impressionRef: (e) => {
            f.current = e;
        },
        video: (0, r.jsx)(ef, {
            bounty: i,
            sourceQuestContent: o,
            src: g,
            orientation: E,
            openedAtMs: h,
            parentTransitionState: t,
            onClose: n,
        }),
        footer: (0, r.jsx)(v.A, {
            prefix: (0, r.jsx)(S, { iconImageUri: R.iconImageUri, size: "sm" }),
            advertiserDetails: (0, r.jsx)(C.A, {
                title: T,
                subtitle: P.intl.string(P.t.o6FLcF),
                onClick: () => x(p.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, r.jsx)(l.$, {
                variant: "primary",
                text: R.buttonLabel,
                onClick: () => x(p.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
function eE(e) {
    return (0, r.jsx)(f.R, {
        adContentId: e.bounty.id,
        adCreativeType: i.p.BOUNTY,
        questContent: p.uF.VIDEO_MODAL,
        minViewTimeSeconds: h.bq,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, r.jsx)(eg, { ...e, impressionRef: t }),
    });
}
