s.r(t), s.d(t, { VideoQuestModalContext: () => D.a, VideoQuestConfigContext: () => D.l, default: () => ei });
var n = s(627968),
    a = s(64700),
    i = s(503698),
    l = s.n(i),
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
    L = s(651892);
function P(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: s } = a.useContext(D.a);
    return (0, n.jsx)(T.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(f.uF.VIDEO_MODAL_PRIMARY_CTA, y.Cy.OPEN_GAME_LINK),
        text: (0, L.wr)(s),
    });
}
var V = s(262254),
    b = s(190107);
function I() {
    let { quest: e, sourceQuestContent: t, onClose: s } = a.useContext(D.a);
    return (0, n.jsx)(V.A, {
        quest: e,
        questContent: f.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        experimentLocation: b.rE.VIDEO_MODAL,
        onClose: s,
    });
}
var k = s(990078),
    q = s(939249),
    Q = s(534514),
    R = s(628284),
    F = s(713517),
    w = s(240248),
    G = s(375708),
    H = s(516556),
    U = s(332206);
function K() {
    let { quest: e, sourceQuestContent: t, isPortrait: s, onClose: i } = a.useContext(D.a),
        o = (0, S.LS)(e),
        r = a.useRef(null),
        { isHoveringOrFocusing: u } = (0, F.A)(r),
        c = (0, M.H)({ quest: e, onClose: i, sourceQuestContent: t }),
        d = e.config.ctaConfig.subtitle,
        m = void 0 !== d && !(0, w.uJ)(d);
    return (0, n.jsx)(k.m, {
        text: G.intl.string(G.t.EuHF34),
        children: (0, n.jsx)(q.D, {
            onClick: () => c(f.uF.VIDEO_MODAL, y.Cy.OPEN_GAME_LINK),
            className: H._S,
            children: (0, n.jsxs)("div", {
                className: l()(U.hA, H.t8, { [H.Mc]: o }),
                ref: r,
                children: [
                    (0, n.jsx)("div", {
                        className: H.sB,
                        children: (0, n.jsx)(Q.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: l()(H.xw, { [H._L]: s }),
                            lineClamp: s ? void 0 : 1,
                            children: G.intl.format(G.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: l()(H.sB, { [H.fi]: s }),
                        children: [
                            (0, n.jsx)("div", {
                                className: l()(H.PV, { [H.WV]: s, [H.mq]: s }),
                                children: (0, n.jsx)(R.y, {
                                    size: "xs",
                                    color: u ? h.A.colors.ICON_STRONG.css : h.A.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, n.jsx)(Q.D, {
                                variant: "heading-sm/medium",
                                className: l()(H.PV, { [H.WV]: s, [H.mq]: s }),
                                color: u ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            m
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: l()(H.SC, { [H.b2]: s }),
                                          }),
                                          (0, n.jsx)(Q.D, {
                                              className: l()(H.xw, { [H._L]: s }),
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
var W = s(604121),
    Y = s(775602),
    z = s(773669),
    X = s(287809),
    $ = s(252424),
    B = s(801365),
    J = s(453384),
    Z = s(646764),
    ee = s(795965),
    et = s(319070);
async function es() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function en() {
    let { quest: e, sourceQuestContent: t, onClose: s, maxProgressSec: i, targetSec: l } = a.useContext(D.a),
        [o, r] = a.useState(!1),
        u = (0, c.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        d = (0, c.bG)([z.default], () => z.default.locale),
        m = (0, c.bG)([X.default], () => X.default.getCurrentUser()),
        x = a.useRef(e.userStatus?.completedAt),
        [h, p] = a.useState(!1),
        C = (0, B.mq)(e.config, m),
        g = e.userStatus?.completedAt != null,
        j = l > 0 ? Math.min(i / l, 0.99) : 0,
        A = g ? 1 : j,
        S = (0, $.l9)(d, A, { roundingMode: "floor" }),
        v = e.userStatus?.claimedAt != null,
        N = G.intl.formatToPlainString(g && !v ? G.t.NRp4K4 : G.t["12IWP2"], { rewardName: C });
    a.useEffect(() => {
        null == x.current && e.userStatus?.completedAt != null && p(!0), (x.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let O = (0, ee.D)({
        quest: e,
        questContent: f.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        experimentLocation: b.rE.VIDEO_MODAL,
        shouldShowShopIfAlreadyClaimed: !1,
        onCloseModal: s,
    });
    return (0, n.jsxs)("div", {
        className: et.Tr,
        children: [
            g && (0, n.jsx)(W.a, { importData: es, className: et.t_, loop: !1, autoplay: !1, shouldAnimate: h && !u }),
            (0, n.jsx)(k.m, {
                position: "top",
                text: N,
                onTooltipShow: function () {
                    r(!0);
                },
                onTooltipHide: function () {
                    r(!1);
                },
                children: (0, n.jsx)(q.D, {
                    className: et.md,
                    style: g ? { cursor: "pointer" } : void 0,
                    onClick: () => {
                        g && O();
                    },
                    children: (0, n.jsx)(J.A, {
                        size: 48,
                        percentComplete: A,
                        overlayText: o ? S : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(Z.A, {
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
function ea(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: o,
            videoSessionId: c,
            impressionRef: g,
            parentModalOpenStartClockTime: j,
            sourceQuestContent: f,
        } = e,
        O = (0, v.Yh)(i),
        T = (0, S.LS)(i),
        { maxProgressSec: y, trackProgress: L } = (function (e) {
            let { initialProgressSec: t, targetSec: s, completedAt: n } = e,
                [i, l] = (0, a.useState)(t);
            return {
                maxProgressSec: null != n ? s : i,
                trackProgress: (0, a.useCallback)((e) => {
                    l((t) => (e > t ? e : t));
                }, []),
            };
        })({
            initialProgressSec: O.progressSeconds,
            targetSec: O.targetSeconds,
            completedAt: i.userStatus?.completedAt,
        }),
        [V, k] = a.useState(142),
        [q, Q] = a.useState(!1),
        R = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != R, "VideoQuestModal: videoTask must not be null");
    let F = (0, N.eG)(R),
        w = "portrait" === F,
        W = (0, C.A)((e) => {
            k(e.target.offsetHeight);
        }),
        Y = (0, p.w)(W),
        z = i.config.features.includes(b.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: X } = A.jS.useConfig({ location: b.rE.VIDEO_MODAL }),
        { enabled: $ } = A.n6.useConfig({ location: b.rE.VIDEO_MODAL }),
        B = X || z,
        J = (0, M.H)({ quest: i, onClose: s, sourceQuestContent: f }),
        Z = a.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: f,
                videoSessionId: c,
                isPortrait: w,
                onClose: s,
                isFullscreenEnabled: q,
                useNewProgressBarStyling: B,
                setIsFullscreenEnabled: Q,
                maxProgressSec: y,
                targetSec: O.targetSeconds,
            }),
            [i, f, c, w, s, q, B, Q, y, O.targetSeconds],
        );
    return (0, n.jsx)(D.a.Provider, {
        value: Z,
        children: (0, n.jsx)("div", {
            style: w ? { "--custom-portrait-footer-height": `${V}px` } : void 0,
            children: (0, n.jsxs)(d.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rI.DYNAMIC,
                className: l()(U.CR, { [U.VX]: "landscape" === F, [U.Zy]: "portrait" === F }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !B &&
                        (0, n.jsx)("div", {
                            className: U.z6,
                            children: (0, n.jsx)(m.K, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, n.jsx)(x.P, { ...e, color: h.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                                "aria-label": G.intl.string(G.t.cpT0Cq),
                                onClick: s,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        ref: (e) => {
                            g.current = e;
                        },
                        className: U.NE,
                        children: (0, n.jsx)("div", {
                            className: U.S3,
                            style: { "--custom-footer-horizontal-padding": `${B ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: U.jE,
                                children: [
                                    $
                                        ? (0, n.jsx)(E.A, {
                                              targetTimeSec: R.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: L,
                                              autoplay: o,
                                              openedAtMs: j,
                                              orientation: F,
                                          })
                                        : (0, n.jsx)(_.A, {
                                              targetTimeSec: R.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: L,
                                              autoplay: o,
                                              openedAtMs: j,
                                              orientation: F,
                                          }),
                                    w
                                        ? (0, n.jsxs)("div", {
                                              ref: Y,
                                              className: H.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: H.Df,
                                                      children: [T ? null : (0, n.jsx)(en, {}), (0, n.jsx)(K, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: H.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: H.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: H.ne,
                                                                  children: (0, n.jsx)(I, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(P, { handlePrimaryCtaClick: J }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: H.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: H.uu,
                                                      children: [T ? null : (0, n.jsx)(en, {}), (0, n.jsx)(K, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: H.NY,
                                                      children: [
                                                          (0, n.jsx)(I, {}),
                                                          (0, n.jsx)(P, { handlePrimaryCtaClick: J }),
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
function ei(e) {
    let { questId: t, overrideQuest: s, autoplay: i, openStartClockTime: l, ...o } = e,
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
                          parentModalOpenStartClockTime: l,
                          impressionRef: e,
                          quest: d,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
