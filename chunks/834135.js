s.r(t), s.d(t, { VideoQuestModalContext: () => D.a, VideoQuestConfigContext: () => D.l, default: () => el });
var n = s(627968),
    a = s(64700),
    l = s(503698),
    i = s.n(l),
    o = s(284009),
    r = s.n(o),
    u = s(412703),
    c = s(17928),
    d = s(935462),
    m = s(408278),
    x = s(789645),
    h = s(661531),
    p = s(770178),
    C = s(765548),
    g = s(613373),
    j = s(859703),
    f = s(24001),
    A = s(192444),
    S = s(347135),
    v = s(792620),
    N = s(753386),
    O = s(73473),
    E = s(441512),
    _ = s(55759),
    D = s(795068),
    M = s(781121),
    T = s(821609),
    y = s(590202),
    P = s(651892);
function b(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: s } = a.useContext(D.a);
    return (0, n.jsx)(T.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(f.uF.VIDEO_MODAL_PRIMARY_CTA, y.Cy.OPEN_GAME_LINK),
        text: (0, P.wr)(s),
    });
}
var V = s(262254);
function I() {
    let { quest: e, sourceQuestContent: t, onClose: s } = a.useContext(D.a);
    return (0, n.jsx)(V.A, { quest: e, questContent: f.uF.QUEST_HOME_DESKTOP, sourceQuestContent: t, onClose: s });
}
var L = s(990078),
    k = s(939249),
    q = s(534514),
    Q = s(628284),
    R = s(713517),
    F = s(240248),
    w = s(375708),
    G = s(503820),
    H = s(834926);
function U() {
    let { quest: e, sourceQuestContent: t, isPortrait: s, onClose: l } = a.useContext(D.a),
        o = (0, S.LS)(e),
        r = a.useRef(null),
        { isHoveringOrFocusing: u } = (0, R.A)(r),
        c = (0, M.H)({ quest: e, onClose: l, sourceQuestContent: t }),
        d = e.config.ctaConfig.subtitle,
        m = void 0 !== d && !(0, F.uJ)(d);
    return (0, n.jsx)(L.m, {
        text: w.intl.string(w.t.EuHF34),
        children: (0, n.jsx)(k.D, {
            onClick: () => c(f.uF.VIDEO_MODAL, y.Cy.OPEN_GAME_LINK),
            className: G._S,
            children: (0, n.jsxs)("div", {
                className: i()(H.hA, G.t8, { [G.Mc]: o }),
                ref: r,
                children: [
                    (0, n.jsx)("div", {
                        className: G.sB,
                        children: (0, n.jsx)(q.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: i()(G.xw, { [G._L]: s }),
                            lineClamp: s ? void 0 : 1,
                            children: w.intl.format(w.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: i()(G.sB, { [G.fi]: s }),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(G.PV, { [G.WV]: s, [G.mq]: s }),
                                children: (0, n.jsx)(Q.y, {
                                    size: "xs",
                                    color: u ? h.A.colors.ICON_STRONG.css : h.A.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, n.jsx)(q.D, {
                                variant: "heading-sm/medium",
                                className: i()(G.PV, { [G.WV]: s, [G.mq]: s }),
                                color: u ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            m
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: i()(G.SC, { [G.b2]: s }),
                                          }),
                                          (0, n.jsx)(q.D, {
                                              className: i()(G.xw, { [G._L]: s }),
                                              variant: "heading-sm/medium",
                                              lineClamp: s ? void 0 : 1,
                                              color: u ? "text-strong" : "text-subtle",
                                              children: d,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var K = s(604121),
    W = s(775602),
    Y = s(773669),
    z = s(287809),
    X = s(252424),
    $ = s(801365),
    B = s(453384),
    J = s(646764),
    Z = s(630037),
    ee = s(693086);
async function et() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function es() {
    let { quest: e, sourceQuestContent: t, onClose: s, maxProgressSec: l, targetSec: i } = a.useContext(D.a),
        [o, r] = a.useState(!1),
        u = (0, c.bG)([W.Ay], () => W.Ay.useReducedMotion),
        d = (0, c.bG)([Y.default], () => Y.default.locale),
        m = (0, c.bG)([z.default], () => z.default.getCurrentUser()),
        x = a.useRef(e.userStatus?.completedAt),
        [h, p] = a.useState(!1),
        C = (0, $.mq)(e.config, m),
        g = e.userStatus?.completedAt != null,
        j = i > 0 ? Math.min(l / i, 0.99) : 0,
        A = g ? 1 : j,
        S = (0, X.l9)(d, A, { roundingMode: "floor" }),
        v = e.userStatus?.claimedAt != null,
        N = w.intl.formatToPlainString(g && !v ? w.t.NRp4K4 : w.t["12IWP2"], { rewardName: C });
    a.useEffect(() => {
        null == x.current && e.userStatus?.completedAt != null && p(!0), (x.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let O = (0, Z.D)({
        quest: e,
        questContent: f.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        shouldShowShopIfAlreadyClaimed: !1,
        onCloseModal: s,
    });
    return (0, n.jsxs)("div", {
        className: ee.Tr,
        children: [
            g && (0, n.jsx)(K.a, { importData: et, className: ee.t_, loop: !1, autoplay: !1, shouldAnimate: h && !u }),
            (0, n.jsx)(L.m, {
                position: "top",
                text: N,
                onTooltipShow: function () {
                    r(!0);
                },
                onTooltipHide: function () {
                    r(!1);
                },
                children: (0, n.jsx)(k.D, {
                    className: ee.md,
                    style: g ? { cursor: "pointer" } : void 0,
                    onClick: () => {
                        g && O();
                    },
                    children: (0, n.jsx)(B.A, {
                        size: 48,
                        percentComplete: A,
                        overlayText: o ? S : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(J.A, {
                            fullWidth: !0,
                            quest: e,
                            questContent: f.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: t,
                        }),
                    }),
                }),
            }),
        ],
    });
}
var en = s(190107);
function ea(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: l,
            autoplay: o,
            videoSessionId: c,
            impressionRef: g,
            parentModalOpenStartClockTime: j,
            sourceQuestContent: f,
        } = e,
        O = (0, v.Yh)(l),
        T = (0, S.LS)(l),
        { maxProgressSec: y, trackProgress: P } = (function (e) {
            let { initialProgressSec: t, targetSec: s, completedAt: n } = e,
                [l, i] = (0, a.useState)(t);
            return {
                maxProgressSec: null != n ? s : l,
                trackProgress: (0, a.useCallback)((e) => {
                    i((t) => (e > t ? e : t));
                }, []),
            };
        })({
            initialProgressSec: O.progressSeconds,
            targetSec: O.targetSeconds,
            completedAt: l.userStatus?.completedAt,
        }),
        [V, L] = a.useState(142),
        [k, q] = a.useState(!1),
        Q = l.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != Q, "VideoQuestModal: videoTask must not be null");
    let R = (0, N.eG)(Q),
        F = "portrait" === R,
        K = (0, C.A)((e) => {
            L(e.target.offsetHeight);
        }),
        W = (0, p.w)(K),
        Y = l.config.features.includes(en.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: z } = A.jS.useConfig({ location: en.rE.VIDEO_MODAL }),
        { enabled: X } = A.n6.useConfig({ location: en.rE.VIDEO_MODAL }),
        $ = z || Y,
        B = (0, M.H)({ quest: l, onClose: s, sourceQuestContent: f }),
        J = a.useMemo(
            () => ({
                quest: l,
                sourceQuestContent: f,
                videoSessionId: c,
                isPortrait: F,
                onClose: s,
                isFullscreenEnabled: k,
                useNewProgressBarStyling: $,
                setIsFullscreenEnabled: q,
                maxProgressSec: y,
                targetSec: O.targetSeconds,
            }),
            [l, f, c, F, s, k, $, q, y, O.targetSeconds],
        );
    return (0, n.jsx)(D.a.Provider, {
        value: J,
        children: (0, n.jsx)("div", {
            style: F ? { "--custom-portrait-footer-height": `${V}px` } : void 0,
            children: (0, n.jsxs)(d.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rI.DYNAMIC,
                className: i()(H.CR, { [H.VX]: "landscape" === R, [H.Zy]: "portrait" === R }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !$ &&
                        (0, n.jsx)("div", {
                            className: H.z6,
                            children: (0, n.jsx)(m.K, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, n.jsx)(x.P, { ...e, color: h.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                                "aria-label": w.intl.string(w.t.cpT0Cq),
                                onClick: s,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        ref: (e) => {
                            g.current = e;
                        },
                        className: H.NE,
                        children: (0, n.jsx)("div", {
                            className: H.S3,
                            style: { "--custom-footer-horizontal-padding": `${$ ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: H.jE,
                                children: [
                                    X
                                        ? (0, n.jsx)(E.A, {
                                              targetTimeSec: Q.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: P,
                                              autoplay: o,
                                              openedAtMs: j,
                                              orientation: R,
                                          })
                                        : (0, n.jsx)(_.A, {
                                              targetTimeSec: Q.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: P,
                                              autoplay: o,
                                              openedAtMs: j,
                                              orientation: R,
                                          }),
                                    F
                                        ? (0, n.jsxs)("div", {
                                              ref: W,
                                              className: G.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: G.Df,
                                                      children: [T ? null : (0, n.jsx)(es, {}), (0, n.jsx)(U, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: G.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: G.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: G.ne,
                                                                  children: (0, n.jsx)(I, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(b, { handlePrimaryCtaClick: B }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: G.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: G.uu,
                                                      children: [T ? null : (0, n.jsx)(es, {}), (0, n.jsx)(U, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: G.NY,
                                                      children: [
                                                          (0, n.jsx)(I, {}),
                                                          (0, n.jsx)(b, { handlePrimaryCtaClick: B }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function el(e) {
    let { questId: t, overrideQuest: s, autoplay: l, openStartClockTime: i, ...o } = e,
        r = (0, c.bG)([j.A], () => j.A.getQuest(t)),
        u = (0, c.bG)([j.A], () => j.A.getQuestConfig(t)),
        d = s ?? r,
        m = null != s ? s.config : u,
        x = a.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != x
        ? (0, n.jsx)(D.l.Provider, {
              value: x,
              children: (0, n.jsx)(O.R, {
                  questOrQuests: d,
                  questContent: f.uF.VIDEO_MODAL,
                  minViewTimeSeconds: g.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(ea, {
                          ...o,
                          parentModalOpenStartClockTime: i,
                          impressionRef: e,
                          quest: d,
                          autoplay: l,
                      }),
              }),
          })
        : null;
}
