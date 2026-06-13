s.r(t), s.d(t, { VideoQuestModalContext: () => D.a, VideoQuestConfigContext: () => D.l, default: () => eo });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    o = s.n(i),
    a = s(284009),
    r = s.n(a),
    u = s(412703),
    c = s(17928),
    d = s(935462),
    m = s(408278),
    x = s(789645),
    C = s(661531),
    h = s(770178),
    g = s(765548),
    p = s(613373),
    f = s(859703),
    A = s(507107),
    S = s(192444),
    j = s(347135),
    v = s(971649),
    N = s(792620),
    O = s(753386),
    E = s(73473),
    _ = s(441512),
    M = s(55759),
    D = s(795068),
    y = s(781121),
    T = s(821609),
    L = s(590202),
    P = s(651892);
function b(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: s } = l.useContext(D.a);
    return (0, n.jsx)(T.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(A.uF.VIDEO_MODAL_PRIMARY_CTA, L.Cy.OPEN_GAME_LINK),
        text: (0, P.wr)(s),
    });
}
var q = s(262254),
    k = s(190107);
function V() {
    let { quest: e, sourceQuestContent: t, onClose: s } = l.useContext(D.a);
    return (0, n.jsx)(q.A, {
        quest: e,
        questContent: A.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        experimentLocation: k.rE.VIDEO_MODAL,
        onClose: s,
    });
}
var I = s(990078),
    R = s(939249),
    Q = s(534514),
    w = s(628284),
    G = s(713517),
    F = s(240248),
    U = s(375708),
    H = s(503820),
    W = s(834926);
function K() {
    let { quest: e, sourceQuestContent: t, isPortrait: s, onClose: i } = l.useContext(D.a),
        a = (0, v.go)(),
        r = (0, j.LS)(e),
        u = l.useRef(null),
        { isHoveringOrFocusing: c } = (0, G.A)(u),
        d = (0, y.H)({ quest: e, onClose: i, sourceQuestContent: t, impressionId: a }),
        m = e.config.ctaConfig.subtitle,
        x = void 0 !== m && !(0, F.uJ)(m);
    return (0, n.jsx)(I.m, {
        text: U.intl.string(U.t.EuHF34),
        children: (0, n.jsx)(R.D, {
            onClick: () => d(A.uF.VIDEO_MODAL, L.Cy.OPEN_GAME_LINK),
            className: H._S,
            children: (0, n.jsxs)("div", {
                className: o()(W.hA, H.t8, { [H.Mc]: r }),
                ref: u,
                children: [
                    (0, n.jsx)("div", {
                        className: H.sB,
                        children: (0, n.jsx)(Q.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: o()(H.xw, { [H._L]: s }),
                            lineClamp: s ? void 0 : 1,
                            children: U.intl.format(U.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: o()(H.sB, { [H.fi]: s }),
                        children: [
                            (0, n.jsx)("div", {
                                className: o()(H.PV, { [H.WV]: s, [H.mq]: s }),
                                children: (0, n.jsx)(w.y, {
                                    size: "xs",
                                    color: c ? C.A.colors.ICON_STRONG.css : C.A.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, n.jsx)(Q.D, {
                                variant: "heading-sm/medium",
                                className: o()(H.PV, { [H.WV]: s, [H.mq]: s }),
                                color: c ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            x
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: o()(H.SC, { [H.b2]: s }),
                                          }),
                                          (0, n.jsx)(Q.D, {
                                              className: o()(H.xw, { [H._L]: s }),
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
var Y = s(604121),
    z = s(775602),
    B = s(773669),
    $ = s(287809),
    X = s(252424),
    J = s(801365),
    Z = s(453384),
    ee = s(646764),
    et = s(795965),
    es = s(693086);
let en = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function el() {
    let { quest: e, sourceQuestContent: t, onClose: s, maxProgressSec: i, targetSec: o } = l.useContext(D.a),
        [a, r] = l.useState(!1),
        u = (0, c.bG)([z.Ay], () => z.Ay.useReducedMotion),
        d = (0, c.bG)([B.default], () => B.default.locale),
        m = (0, c.bG)([$.default], () => $.default.getCurrentUser()),
        x = l.useRef(e.userStatus?.completedAt),
        [C, h] = l.useState(!1),
        g = (0, J.mq)(e.config, m),
        p = e.userStatus?.completedAt != null,
        f = o > 0 ? Math.min(i / o, 0.99) : 0,
        S = p ? 1 : f,
        j = (0, X.l9)(d, S, { roundingMode: "floor" }),
        v = e.userStatus?.claimedAt != null,
        N = U.intl.formatToPlainString(p && !v ? U.t.NRp4K4 : U.t["12IWP2"], { rewardName: g });
    l.useEffect(() => {
        null == x.current && e.userStatus?.completedAt != null && h(!0), (x.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let O = (0, et.D)({
        quest: e,
        questContent: A.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        experimentLocation: k.rE.VIDEO_MODAL,
        shouldShowShopIfAlreadyClaimed: !1,
        onCloseModal: s,
    });
    return (0, n.jsxs)("div", {
        className: es.Tr,
        children: [
            p && (0, n.jsx)(Y.a, { importData: en, className: es.t_, loop: !1, autoplay: !1, shouldAnimate: C && !u }),
            (0, n.jsx)(I.m, {
                position: "top",
                text: N,
                onTooltipShow: () => {
                    r(!0);
                },
                onTooltipHide: () => {
                    r(!1);
                },
                children: (0, n.jsx)(R.D, {
                    className: es.md,
                    style: p ? { cursor: "pointer" } : void 0,
                    onClick: () => {
                        p && O();
                    },
                    children: (0, n.jsx)(Z.A, {
                        size: 48,
                        percentComplete: S,
                        overlayText: a ? j : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(ee.A, {
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
function ei(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: a,
            videoSessionId: c,
            impressionRef: p,
            parentModalOpenStartClockTime: f,
            sourceQuestContent: A,
        } = e,
        E = (0, N.Yh)(i),
        T = (0, j.LS)(i),
        L = (0, v.go)(),
        { maxProgressSec: P, trackProgress: q } = (function (e) {
            let { initialProgressSec: t, targetSec: s, completedAt: n } = e,
                [i, o] = (0, l.useState)(t);
            return {
                maxProgressSec: null != n ? s : i,
                trackProgress: (0, l.useCallback)((e) => {
                    o((t) => (e > t ? e : t));
                }, []),
            };
        })({
            initialProgressSec: E.progressSeconds,
            targetSec: E.targetSeconds,
            completedAt: i.userStatus?.completedAt,
        }),
        [I, R] = l.useState(142),
        [Q, w] = l.useState(!1),
        G = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != G, "VideoQuestModal: videoTask must not be null");
    let F = (0, O.eG)(G),
        Y = "portrait" === F,
        z = (0, g.A)((e) => {
            R(e.target.offsetHeight);
        }),
        B = (0, h.w)(z),
        $ = i.config.features.includes(k.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: X } = S.jS.useConfig({ location: k.rE.VIDEO_MODAL }),
        { enabled: J } = S.n6.useConfig({ location: k.rE.VIDEO_MODAL }),
        Z = X || $,
        ee = (0, y.H)({ quest: i, onClose: s, sourceQuestContent: A, impressionId: L }),
        et = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: A,
                videoSessionId: c,
                isPortrait: Y,
                onClose: s,
                isFullscreenEnabled: Q,
                useNewProgressBarStyling: Z,
                setIsFullscreenEnabled: w,
                maxProgressSec: P,
                targetSec: E.targetSeconds,
            }),
            [i, A, c, Y, s, Q, Z, w, P, E.targetSeconds],
        );
    return (0, n.jsx)(D.a.Provider, {
        value: et,
        children: (0, n.jsx)("div", {
            style: Y ? { "--custom-portrait-footer-height": `${I}px` } : void 0,
            children: (0, n.jsxs)(d.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rI.DYNAMIC,
                className: o()(W.CR, { [W.VX]: "landscape" === F, [W.Zy]: "portrait" === F }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !Z &&
                        (0, n.jsx)("div", {
                            className: W.z6,
                            children: (0, n.jsx)(m.K, {
                                variant: "icon-only",
                                icon: (e) =>
                                    (0, n.jsx)(x.P, { ...e, color: C.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
                                "aria-label": U.intl.string(U.t.cpT0Cq),
                                onClick: s,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        ref: (e) => {
                            p.current = e;
                        },
                        className: W.NE,
                        children: (0, n.jsx)("div", {
                            className: W.S3,
                            style: { "--custom-footer-horizontal-padding": `${Z ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: W.jE,
                                children: [
                                    J
                                        ? (0, n.jsx)(_.A, {
                                              targetTimeSec: G.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: q,
                                              autoplay: a,
                                              openedAtMs: f,
                                              orientation: F,
                                          })
                                        : (0, n.jsx)(M.A, {
                                              targetTimeSec: G.target,
                                              parentTransitionState: t,
                                              onOptimisticProgressUpdate: q,
                                              autoplay: a,
                                              openedAtMs: f,
                                              orientation: F,
                                          }),
                                    Y
                                        ? (0, n.jsxs)("div", {
                                              ref: B,
                                              className: H.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: H.Df,
                                                      children: [T ? null : (0, n.jsx)(el, {}), (0, n.jsx)(K, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: H.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: H.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: H.ne,
                                                                  children: (0, n.jsx)(V, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(b, { handlePrimaryCtaClick: ee }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: H.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: H.uu,
                                                      children: [T ? null : (0, n.jsx)(el, {}), (0, n.jsx)(K, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: H.NY,
                                                      children: [
                                                          (0, n.jsx)(V, {}),
                                                          (0, n.jsx)(b, { handlePrimaryCtaClick: ee }),
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
function eo(e) {
    let { questId: t, overrideQuest: s, autoplay: i, openStartClockTime: o, ...a } = e,
        r = (0, c.bG)([f.A], () => f.A.getQuest(t)),
        u = (0, c.bG)([f.A], () => f.A.getQuestConfig(t)),
        d = s ?? r,
        m = null != s ? s.config : u,
        x = l.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != x
        ? (0, n.jsx)(D.l.Provider, {
              value: x,
              children: (0, n.jsx)(E.R, {
                  questOrQuests: d,
                  questContent: A.uF.VIDEO_MODAL,
                  minViewTimeSeconds: p.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: a.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(ei, {
                          ...a,
                          parentModalOpenStartClockTime: o,
                          impressionRef: e,
                          quest: d,
                          autoplay: i,
                      }),
              }),
          })
        : null;
}
