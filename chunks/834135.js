s.r(t), s.d(t, { VideoQuestModalContext: () => T.a, VideoQuestConfigContext: () => T.l, default: () => ea });
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
    f = s(507107),
    A = s(192444),
    v = s(31587),
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
        onClick: () => t(f.uF.VIDEO_MODAL_PRIMARY_CTA, P.Cy.OPEN_GAME_LINK),
        text: (0, b.wr)(s),
    });
}
var V = s(713081);
function I() {
    let { quest: e, sourceQuestContent: t, onClose: s } = l.useContext(T.a);
    return (0, n.jsx)(V.A, { quest: e, questContent: f.uF.QUEST_HOME_DESKTOP, sourceQuestContent: t, onClose: s });
}
var L = s(990078),
    R = s(939249),
    q = s(534514),
    Q = s(628284),
    G = s(713517),
    w = s(240248),
    F = s(375708),
    U = s(503820),
    H = s(834926);
function W() {
    let { quest: e, sourceQuestContent: t, isPortrait: s, onClose: i } = l.useContext(T.a),
        o = (0, j.go)(),
        r = (0, v.LS)(e),
        u = l.useRef(null),
        { isHoveringOrFocusing: c } = (0, G.A)(u),
        d = (0, D.H)({ quest: e, onClose: i, sourceQuestContent: t, impressionId: o }),
        m = e.config.ctaConfig.subtitle,
        x = void 0 !== m && !(0, w.uJ)(m);
    return (0, n.jsx)(L.m, {
        text: F.intl.string(F.t.EuHF34),
        children: (0, n.jsx)(R.D, {
            onClick: () => d(f.uF.VIDEO_MODAL, P.Cy.OPEN_GAME_LINK),
            className: U._S,
            children: (0, n.jsxs)("div", {
                className: a()(H.hA, U.t8, { [U.Mc]: r }),
                ref: u,
                children: [
                    (0, n.jsx)("div", {
                        className: U.sB,
                        children: (0, n.jsx)(q.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: a()(U.xw, { [U._L]: s }),
                            lineClamp: s ? void 0 : 1,
                            children: F.intl.format(F.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(U.sB, { [U.fi]: s }),
                        children: [
                            (0, n.jsx)("div", {
                                className: a()(U.PV, { [U.WV]: s, [U.mq]: s }),
                                children: (0, n.jsx)(Q.y, {
                                    size: "xs",
                                    color: c ? h.A.colors.ICON_STRONG.css : h.A.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, n.jsx)(q.D, {
                                variant: "heading-sm/medium",
                                className: a()(U.PV, { [U.WV]: s, [U.mq]: s }),
                                color: c ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            x
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: a()(U.SC, { [U.b2]: s }),
                                          }),
                                          (0, n.jsx)(q.D, {
                                              className: a()(U.xw, { [U._L]: s }),
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
    B = s(287809),
    $ = s(252424),
    X = s(801365),
    J = s(453384),
    Z = s(646764),
    ee = s(793683),
    et = s(693086);
let es = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function en() {
    let { quest: e, sourceQuestContent: t, onClose: s, maxProgressSec: i, targetSec: a } = l.useContext(T.a),
        [o, r] = l.useState(!1),
        u = (0, c.bG)([Y.A], () => Y.A.useReducedMotion),
        d = (0, c.bG)([z.default], () => z.default.locale),
        m = (0, c.bG)([B.default], () => B.default.getCurrentUser()),
        x = l.useRef(e.userStatus?.completedAt),
        [h, g] = l.useState(!1),
        p = (0, X.mq)(e.config, m),
        C = e.userStatus?.completedAt != null,
        S = a > 0 ? Math.min(i / a, 0.99) : 0,
        A = C ? 1 : S,
        v = (0, $.l9)(d, A, { roundingMode: "floor" }),
        j = e.userStatus?.claimedAt != null,
        N = F.intl.formatToPlainString(C && !j ? F.t.NRp4K4 : F.t["12IWP2"], { rewardName: p });
    l.useEffect(() => {
        null == x.current && e.userStatus?.completedAt != null && g(!0), (x.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let O = (0, ee.v)({
        quest: e,
        questContent: f.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: s,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, n.jsxs)("div", {
        className: et.Tr,
        children: [
            C && (0, n.jsx)(K.a, { importData: es, className: et.t_, loop: !1, autoplay: !1, shouldAnimate: h && !u }),
            (0, n.jsx)(L.m, {
                position: "top",
                text: N,
                onTooltipShow: () => {
                    r(!0);
                },
                onTooltipHide: () => {
                    r(!1);
                },
                children: (0, n.jsx)(R.D, {
                    className: et.md,
                    style: C ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        C && O(e);
                    },
                    children: (0, n.jsx)(J.A, {
                        size: 48,
                        percentComplete: A,
                        overlayText: o ? v : void 0,
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
var el = s(190107);
function ei(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: i,
            autoplay: o,
            videoSessionId: c,
            impressionRef: C,
            parentModalOpenStartClockTime: S,
            sourceQuestContent: f,
        } = e,
        E = (0, N.Yh)(i),
        y = (0, v.LS)(i),
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
        B = i.config.features.includes(el.Li.FULL_EPISODE_VIDEO_QUEST),
        { enabled: $ } = A.jS.useConfig({ location: el.rE.VIDEO_MODAL }),
        { enabled: X } = A.n6.useConfig({ location: el.rE.VIDEO_MODAL }),
        J = $ || B,
        Z = (0, D.H)({ quest: i, onClose: s, sourceQuestContent: f, impressionId: P }),
        ee = l.useMemo(
            () => ({
                quest: i,
                sourceQuestContent: f,
                videoSessionId: c,
                isPortrait: K,
                onClose: s,
                isFullscreenEnabled: q,
                useNewProgressBarStyling: J,
                setIsFullscreenEnabled: Q,
                maxProgressSec: b,
                targetSec: E.targetSeconds,
            }),
            [i, f, c, K, s, q, J, Q, b, E.targetSeconds],
        );
    return (0, n.jsx)(T.a.Provider, {
        value: ee,
        children: (0, n.jsx)("div", {
            style: K ? { "--custom-portrait-footer-height": `${L}px` } : void 0,
            children: (0, n.jsxs)(d.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rI.DYNAMIC,
                className: a()(H.CR, { [H.VX]: "landscape" === w, [H.Zy]: "portrait" === w }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: [
                    !J &&
                        (0, n.jsx)("div", {
                            className: H.z6,
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
                        className: H.NE,
                        children: (0, n.jsx)("div", {
                            className: H.S3,
                            style: { "--custom-footer-horizontal-padding": `${J ? 20 : 16}px` },
                            children: (0, n.jsxs)("div", {
                                className: H.jE,
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
                                              className: U.uh,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: U.Df,
                                                      children: [y ? null : (0, n.jsx)(en, {}), (0, n.jsx)(W, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: U.eX,
                                                      children: [
                                                          (0, n.jsx)("div", {
                                                              className: U.uP,
                                                              children: (0, n.jsx)("div", {
                                                                  className: U.ne,
                                                                  children: (0, n.jsx)(I, {}),
                                                              }),
                                                          }),
                                                          (0, n.jsx)(k, { handlePrimaryCtaClick: Z }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: U.nR,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: U.uu,
                                                      children: [y ? null : (0, n.jsx)(en, {}), (0, n.jsx)(W, {})],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                      className: U.NY,
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
function ea(e) {
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
                  questContent: f.uF.VIDEO_MODAL,
                  minViewTimeSeconds: C.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(ei, {
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
