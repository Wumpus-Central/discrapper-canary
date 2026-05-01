s.r(t), s.d(t, { VideoQuestModalContext: () => M.a, VideoQuestConfigContext: () => M.l, default: () => el });
var n = s(627968),
    a = s(64700),
    l = s(503698),
    i = s.n(l),
    o = s(284009),
    r = s.n(o),
    c = s(412703),
    u = s(17928),
    d = s(935462),
    m = s(408278),
    x = s(789645),
    h = s(661531),
    p = s(770178),
    g = s(765548),
    C = s(613373),
    j = s(859703),
    f = s(507107),
    A = s(245853),
    S = s(890687),
    v = s(971649),
    N = s(792620),
    O = s(753386),
    E = s(73473),
    _ = s(441512),
    D = s(55759),
    M = s(795068),
    T = s(781121),
    P = s(821609),
    y = s(590202),
    V = s(651892);
function b(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: s } = a.useContext(M.a);
    return (0, n.jsx)(P.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(f.uF.VIDEO_MODAL_PRIMARY_CTA, y.Cy.OPEN_GAME_LINK),
        text: (0, V.wr)(s),
    });
}
var I = s(713081);
function L() {
    let { quest: e, sourceQuestContent: t, onClose: s } = a.useContext(M.a);
    return (0, n.jsx)(I.A, { quest: e, questContent: f.uF.QUEST_HOME_DESKTOP, sourceQuestContent: t, onClose: s });
}
var k = s(990078),
    q = s(939249),
    Q = s(534514),
    R = s(628284),
    F = s(713517),
    w = s(240248),
    G = s(985018),
    H = s(503820),
    U = s(834926);
function K() {
    let { quest: e, sourceQuestContent: t, isPortrait: s, onClose: l } = a.useContext(M.a),
        o = (0, v.go)(),
        r = (0, S.LS)(e),
        c = a.useRef(null),
        { isHoveringOrFocusing: u } = (0, F.A)(c),
        d = (0, T.H)({ quest: e, onClose: l, sourceQuestContent: t, impressionId: o }),
        m = e.config.ctaConfig.subtitle,
        x = void 0 !== m && !(0, w.uJ)(m);
    return (0, n.jsx)(k.m, {
        text: G.intl.string(G.t.EuHF34),
        children: (0, n.jsx)(q.D, {
            onClick: () => d(f.uF.VIDEO_MODAL, y.Cy.OPEN_GAME_LINK),
            className: H._S,
            children: (0, n.jsxs)("div", {
                className: i()(U.hA, H.t8, { [H.Mc]: r }),
                ref: c,
                children: [
                    (0, n.jsx)("div", {
                        className: H.sB,
                        children: (0, n.jsx)(Q.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: i()(H.xw, { [H._L]: s }),
                            lineClamp: s ? void 0 : 1,
                            children: G.intl.format(G.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: i()(H.sB, { [H.fi]: s }),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(H.PV, { [H.WV]: s, [H.mq]: s }),
                                children: (0, n.jsx)(R.y, {
                                    size: "xs",
                                    color: u ? h.A.colors.ICON_STRONG.css : h.A.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, n.jsx)(Q.D, {
                                variant: "heading-sm/medium",
                                className: i()(H.PV, { [H.WV]: s, [H.mq]: s }),
                                color: u ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            x
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: i()(H.SC, { [H.b2]: s }),
                                          }),
                                          (0, n.jsx)(Q.D, {
                                              className: i()(H.xw, { [H._L]: s }),
                                              variant: "heading-sm/medium",
                                              lineClamp: s ? void 0 : 1,
                                              color: u ? "text-strong" : "text-subtle",
                                              children: m,
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
    X = s(252424),
    $ = s(801365),
    B = s(453384),
    J = s(646764),
    Z = s(793683),
    ee = s(693086);
let et = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function es() {
    let { quest: e, sourceQuestContent: t, onClose: s, maxProgressSec: l, targetSec: i } = a.useContext(M.a),
        [o, r] = a.useState(!1),
        c = (0, u.bG)([Y.A], () => Y.A.useReducedMotion),
        d = (0, u.bG)([z.default], () => z.default.locale),
        m = a.useRef(e.userStatus?.completedAt),
        [x, h] = a.useState(!1),
        p = (0, $.mq)(e.config),
        g = e.userStatus?.completedAt != null,
        C = i > 0 ? Math.min(l / i, 0.99) : 0,
        j = g ? 1 : C,
        A = (0, X.l9)(d, j, { roundingMode: "floor" }),
        S = e.userStatus?.claimedAt != null,
        v = G.intl.formatToPlainString(g && !S ? G.t.NRp4K4 : G.t["12IWP2"], { rewardName: p });
    a.useEffect(() => {
        null == m.current && e.userStatus?.completedAt != null && h(!0), (m.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let N = (0, Z.v)({
        quest: e,
        questContent: f.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: s,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, n.jsxs)("div", {
        className: ee.Tr,
        children: [
            g && (0, n.jsx)(W.a, { importData: et, className: ee.t_, loop: !1, autoplay: !1, shouldAnimate: x && !c }),
            (0, n.jsx)(k.m, {
                position: "top",
                text: v,
                onTooltipShow: () => {
                    r(!0);
                },
                onTooltipHide: () => {
                    r(!1);
                },
                children: (0, n.jsx)(q.D, {
                    className: ee.md,
                    style: g ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        g && N(e);
                    },
                    children: (0, n.jsx)(B.A, {
                        size: 48,
                        percentComplete: j,
                        overlayText: o ? A : void 0,
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
var en = s(654487);
function ea(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: l,
            autoplay: o,
            videoSessionId: u,
            impressionRef: C,
            parentModalOpenStartClockTime: j,
            sourceQuestContent: f,
        } = e,
        E = (0, N.Yh)(l),
        P = (0, S.LS)(l),
        y = (0, v.go)(),
        { maxProgressSec: V, trackProgress: I } = (function (e) {
            let { initialProgressSec: t, targetSec: s, completedAt: n } = e,
                [l, i] = (0, a.useState)(t);
            return {
                maxProgressSec: null != n ? s : l,
                trackProgress: (0, a.useCallback)((e) => {
                    i((t) => (e > t ? e : t));
                }, []),
            };
        })({
            initialProgressSec: E.progressSeconds,
            targetSec: E.targetSeconds,
            completedAt: l.userStatus?.completedAt,
        }),
        [k, q] = a.useState(142),
        [Q, R] = a.useState(!1),
        F = l.config.taskConfigV2?.tasks?.[c.n.WATCH_VIDEO];
    r()(null != F, "VideoQuestModal: videoTask must not be null");
    let w = (0, O.eG)(F),
        W = "portrait" === w,
        Y = (0, g.A)((e) => {
            q(e.target.offsetHeight);
        }),
        z = (0, p.w)(Y),
        X = l.config.features.includes(en.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: $ } = A.jS.useConfig({ location: en.rE.VIDEO_MODAL }),
        { enabled: B } = A.n6.useConfig({ location: en.rE.VIDEO_MODAL }),
        J = $ || X,
        Z = (0, T.H)({ quest: l, onClose: s, sourceQuestContent: f, impressionId: y }),
        ee = a.useMemo(
            () => ({
                quest: l,
                sourceQuestContent: f,
                videoSessionId: u,
                isPortrait: W,
                onClose: s,
                isFullscreenEnabled: Q,
                useNewProgressBarStyling: J,
                setIsFullscreenEnabled: R,
                maxProgressSec: V,
                targetSec: E.targetSeconds,
            }),
            [l, f, u, W, s, Q, J, R, V, E.targetSeconds],
        );
    return (0, n.jsx)(M.a.Provider, {
        value: ee,
        children: (0, n.jsx)("div", {
            style: W ? { "--custom-portrait-footer-height": `${k}px` } : void 0,
            children: (0, n.jsxs)(d.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rI.DYNAMIC,
                className: i()(U.CR, { [U.VX]: "landscape" === w, [U.Zy]: "portrait" === w }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !J &&
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
                            C.current = e;
                        },
                        className: U.NE,
                        children: (0, n.jsx)("div", {
                            className: U.S3,
                            style: { "--custom-footer-horizontal-padding": `${J ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: U.jE,
                                children: [
                                    B
                                        ? (0, n.jsx)(_.A, {
                                              targetTimeSec: F.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: I,
                                              autoplay: o,
                                              openedAtMs: j,
                                              orientation: w,
                                          })
                                        : (0, n.jsx)(D.A, {
                                              targetTimeSec: F.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: I,
                                              autoplay: o,
                                              openedAtMs: j,
                                              orientation: w,
                                          }),
                                    W
                                        ? (0, n.jsxs)("div", {
                                              ref: z,
                                              className: H.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: H.Df,
                                                      children: [P ? null : (0, n.jsx)(es, {}), (0, n.jsx)(K, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: H.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: H.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: H.ne,
                                                                  children: (0, n.jsx)(L, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(b, { handlePrimaryCtaClick: Z }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: H.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: H.uu,
                                                      children: [P ? null : (0, n.jsx)(es, {}), (0, n.jsx)(K, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: H.NY,
                                                      children: [
                                                          (0, n.jsx)(L, {}),
                                                          (0, n.jsx)(b, { handlePrimaryCtaClick: Z }),
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
        r = (0, u.bG)([j.A], () => j.A.getQuest(t)),
        c = (0, u.bG)([j.A], () => j.A.getQuestConfig(t)),
        d = s ?? r,
        m = null != s ? s.config : c,
        x = a.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != x
        ? (0, n.jsx)(M.l.Provider, {
              value: x,
              children: (0, n.jsx)(E.R, {
                  questOrQuests: d,
                  questContent: f.uF.VIDEO_MODAL,
                  minViewTimeSeconds: C.bq,
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
