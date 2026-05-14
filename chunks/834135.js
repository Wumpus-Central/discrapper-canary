s.r(t), s.d(t, { VideoQuestModalContext: () => T.a, VideoQuestConfigContext: () => T.l, default: () => ei });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(284009),
    r = s.n(o),
    u = s(412703),
    c = s(17928),
    d = s(935462),
    m = s(408278),
    x = s(789645),
    h = s(661531),
    g = s(770178),
    p = s(765548),
    C = s(613373),
    S = s(859703),
    A = s(507107),
    v = s(192444),
    f = s(31587),
    j = s(971649),
    N = s(792620),
    O = s(753386),
    E = s(73473),
    _ = s(441512),
    M = s(55759),
    T = s(795068),
    D = s(781121),
    y = s(821609),
    P = s(590202),
    b = s(651892);
function k(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: s } = l.useContext(T.a);
    return (0, n.jsx)(y.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(A.uF.VIDEO_MODAL_PRIMARY_CTA, P.Cy.OPEN_GAME_LINK),
        text: (0, b.wr)(s),
    });
}
var V = s(713081);
function I() {
    let { quest: e, sourceQuestContent: t, onClose: s } = l.useContext(T.a);
    return (0, n.jsx)(V.A, { quest: e, questContent: A.uF.QUEST_HOME_DESKTOP, sourceQuestContent: t, onClose: s });
}
var L = s(990078),
    R = s(939249),
    q = s(534514),
    Q = s(628284),
    G = s(713517),
    w = s(240248),
    F = s(375708),
    H = s(503820),
    U = s(834926);
function W() {
    let { quest: e, sourceQuestContent: t, isPortrait: s, onClose: i } = l.useContext(T.a),
        o = (0, j.go)(),
        r = (0, f.LS)(e),
        u = l.useRef(null),
        { isHoveringOrFocusing: c } = (0, G.A)(u),
        d = (0, D.H)({ quest: e, onClose: i, sourceQuestContent: t, impressionId: o }),
        m = e.config.ctaConfig.subtitle,
        x = void 0 !== m && !(0, w.uJ)(m);
    return (0, n.jsx)(L.m, {
        text: F.intl.string(F.t.EuHF34),
        children: (0, n.jsx)(R.D, {
            onClick: () => d(A.uF.VIDEO_MODAL, P.Cy.OPEN_GAME_LINK),
            className: H._S,
            children: (0, n.jsxs)("div", {
                className: a()(U.hA, H.t8, { [H.Mc]: r }),
                ref: u,
                children: [
                    (0, n.jsx)("div", {
                        className: H.sB,
                        children: (0, n.jsx)(q.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: a()(H.xw, { [H._L]: s }),
                            lineClamp: s ? void 0 : 1,
                            children: F.intl.format(F.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(H.sB, { [H.fi]: s }),
                        children: [
                            (0, n.jsx)("div", {
                                className: a()(H.PV, { [H.WV]: s, [H.mq]: s }),
                                children: (0, n.jsx)(Q.y, {
                                    size: "xs",
                                    color: c ? h.A.colors.ICON_STRONG.css : h.A.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, n.jsx)(q.D, {
                                variant: "heading-sm/medium",
                                className: a()(H.PV, { [H.WV]: s, [H.mq]: s }),
                                color: c ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            x
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: a()(H.SC, { [H.b2]: s }),
                                          }),
                                          (0, n.jsx)(q.D, {
                                              className: a()(H.xw, { [H._L]: s }),
                                              variant: "heading-sm/medium",
                                              lineClamp: s ? void 0 : 1,
                                              color: c ? "text-strong" : "text-subtle",
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
var K = s(604121),
    Y = s(775602),
    z = s(773669),
    B = s(252424),
    $ = s(801365),
    X = s(453384),
    J = s(646764),
    Z = s(793683),
    ee = s(693086);
let et = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function es() {
    let { quest: e, sourceQuestContent: t, onClose: s, maxProgressSec: i, targetSec: a } = l.useContext(T.a),
        [o, r] = l.useState(!1),
        u = (0, c.bG)([Y.A], () => Y.A.useReducedMotion),
        d = (0, c.bG)([z.default], () => z.default.locale),
        m = l.useRef(e.userStatus?.completedAt),
        [x, h] = l.useState(!1),
        g = (0, $.mq)(e.config),
        p = e.userStatus?.completedAt != null,
        C = a > 0 ? Math.min(i / a, 0.99) : 0,
        S = p ? 1 : C,
        v = (0, B.l9)(d, S, { roundingMode: "floor" }),
        f = e.userStatus?.claimedAt != null,
        j = F.intl.formatToPlainString(p && !f ? F.t.NRp4K4 : F.t["12IWP2"], { rewardName: g });
    l.useEffect(() => {
        null == m.current && e.userStatus?.completedAt != null && h(!0), (m.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let N = (0, Z.v)({
        quest: e,
        questContent: A.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: s,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, n.jsxs)("div", {
        className: ee.Tr,
        children: [
            p && (0, n.jsx)(K.a, { importData: et, className: ee.t_, loop: !1, autoplay: !1, shouldAnimate: x && !u }),
            (0, n.jsx)(L.m, {
                position: "top",
                text: j,
                onTooltipShow: () => {
                    r(!0);
                },
                onTooltipHide: () => {
                    r(!1);
                },
                children: (0, n.jsx)(R.D, {
                    className: ee.md,
                    style: p ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        p && N(e);
                    },
                    children: (0, n.jsx)(X.A, {
                        size: 48,
                        percentComplete: S,
                        overlayText: o ? v : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(J.A, {
                            fullWidth: !0,
                            quest: e,
                            questContent: A.uF.VIDEO_MODAL,
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
function el(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: o,
            videoSessionId: c,
            impressionRef: C,
            parentModalOpenStartClockTime: S,
            sourceQuestContent: A,
        } = e,
        E = (0, N.Yh)(i),
        y = (0, f.LS)(i),
        P = (0, j.go)(),
        { maxProgressSec: b, trackProgress: V } = (function (e) {
            let { initialProgressSec: t, targetSec: s, completedAt: n } = e,
                [i, a] = (0, l.useState)(t);
            return {
                maxProgressSec: null != n ? s : i,
                trackProgress: (0, l.useCallback)((e) => {
                    a((t) => (e > t ? e : t));
                }, []),
            };
        })({
            initialProgressSec: E.progressSeconds,
            targetSec: E.targetSeconds,
            completedAt: i.userStatus?.completedAt,
        }),
        [L, R] = l.useState(142),
        [q, Q] = l.useState(!1),
        G = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != G, "VideoQuestModal: videoTask must not be null");
    let w = (0, O.eG)(G),
        K = "portrait" === w,
        Y = (0, p.A)((e) => {
            R(e.target.offsetHeight);
        }),
        z = (0, g.w)(Y),
        B = i.config.features.includes(en.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: $ } = v.jS.useConfig({ location: en.rE.VIDEO_MODAL }),
        { enabled: X } = v.n6.useConfig({ location: en.rE.VIDEO_MODAL }),
        J = $ || B,
        Z = (0, D.H)({ quest: i, onClose: s, sourceQuestContent: A, impressionId: P }),
        ee = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: A,
                videoSessionId: c,
                isPortrait: K,
                onClose: s,
                isFullscreenEnabled: q,
                useNewProgressBarStyling: J,
                setIsFullscreenEnabled: Q,
                maxProgressSec: b,
                targetSec: E.targetSeconds,
            }),
            [i, A, c, K, s, q, J, Q, b, E.targetSeconds],
        );
    return (0, n.jsx)(T.a.Provider, {
        value: ee,
        children: (0, n.jsx)("div", {
            style: K ? { "--custom-portrait-footer-height": `${L}px` } : void 0,
            children: (0, n.jsxs)(d.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rI.DYNAMIC,
                className: a()(U.CR, { [U.VX]: "landscape" === w, [U.Zy]: "portrait" === w }),
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
                                "aria-label": F.intl.string(F.t.cpT0Cq),
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
                                    X
                                        ? (0, n.jsx)(_.A, {
                                              targetTimeSec: G.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: V,
                                              autoplay: o,
                                              openedAtMs: S,
                                              orientation: w,
                                          })
                                        : (0, n.jsx)(M.A, {
                                              targetTimeSec: G.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: V,
                                              autoplay: o,
                                              openedAtMs: S,
                                              orientation: w,
                                          }),
                                    K
                                        ? (0, n.jsxs)("div", {
                                              ref: z,
                                              className: H.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: H.Df,
                                                      children: [y ? null : (0, n.jsx)(es, {}), (0, n.jsx)(W, {})],
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
                                                          (0, n.jsx)(k, { handlePrimaryCtaClick: Z }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: H.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: H.uu,
                                                      children: [y ? null : (0, n.jsx)(es, {}), (0, n.jsx)(W, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: H.NY,
                                                      children: [
                                                          (0, n.jsx)(I, {}),
                                                          (0, n.jsx)(k, { handlePrimaryCtaClick: Z }),
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
    let { questId: t, overrideQuest: s, autoplay: i, openStartClockTime: a, ...o } = e,
        r = (0, c.bG)([S.A], () => S.A.getQuest(t)),
        u = (0, c.bG)([S.A], () => S.A.getQuestConfig(t)),
        d = s ?? r,
        m = null != s ? s.config : u,
        x = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != x
        ? (0, n.jsx)(T.l.Provider, {
              value: x,
              children: (0, n.jsx)(E.R, {
                  questOrQuests: d,
                  questContent: A.uF.VIDEO_MODAL,
                  minViewTimeSeconds: C.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(el, {
                          ...o,
                          parentModalOpenStartClockTime: a,
                          impressionRef: e,
                          quest: d,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
