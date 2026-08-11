s.r(t), s.d(t, { VideoQuestModalContext: () => M.a, VideoQuestConfigContext: () => M.l, default: () => en });
var n = s(477900),
    a = s(582128),
    l = s(503698),
    i = s.n(l),
    o = s(284009),
    r = s.n(o),
    u = s(412703),
    c = s(17928),
    d = s(935462),
    m = s(770178),
    x = s(765548),
    h = s(613373),
    p = s(859703),
    g = s(24001),
    C = s(192444),
    f = s(514547),
    j = s(792620),
    v = s(753386),
    S = s(73473),
    A = s(441512),
    N = s(55759),
    M = s(795068),
    O = s(781121),
    E = s(821609),
    _ = s(590202),
    D = s(651892);
function y(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: s } = a.useContext(M.a);
    return (0, n.jsx)(E.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(g.uF.VIDEO_MODAL_PRIMARY_CTA, _.Cy.OPEN_GAME_LINK),
        text: (0, D.wr)(s),
    });
}
var T = s(262254);
function P() {
    let { quest: e, sourceQuestContent: t, onClose: s } = a.useContext(M.a);
    return (0, n.jsx)(T.A, { quest: e, questContent: g.uF.QUEST_HOME_DESKTOP, sourceQuestContent: t, onClose: s });
}
var b = s(866665),
    V = s(939249),
    k = s(297264),
    q = s(628284),
    I = s(661531),
    Q = s(713517),
    L = s(240248),
    R = s(375708),
    w = s(833860),
    G = s(668534);
function F() {
    let { quest: e, sourceQuestContent: t, isPortrait: s, onClose: l } = a.useContext(M.a),
        o = (0, f.LS)(e),
        r = a.useRef(null),
        { isHoveringOrFocusing: u } = (0, Q.A)(r),
        c = (0, O.H)({ quest: e, onClose: l, sourceQuestContent: t }),
        d = e.config.ctaConfig.subtitle,
        m = void 0 !== d && !(0, L.uJ)(d);
    return (0, n.jsx)(b.m, {
        text: R.intl.string(R.t.EuHF34),
        children: (0, n.jsx)(V.D, {
            onClick: () => c(g.uF.VIDEO_MODAL, _.Cy.OPEN_GAME_LINK),
            className: w._S,
            children: (0, n.jsxs)("div", {
                className: i()(G.hA, w.t8, { [w.Mc]: o }),
                ref: r,
                children: [
                    (0, n.jsx)("div", {
                        className: w.sB,
                        children: (0, n.jsx)(k.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: i()(w.xw, { [w._L]: s }),
                            lineClamp: s ? void 0 : 1,
                            children: R.intl.format(R.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: i()(w.sB, { [w.fi]: s }),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(w.PV, { [w.WV]: s, [w.mq]: s }),
                                children: (0, n.jsx)(q.y, {
                                    size: "xs",
                                    color: u ? I.A.colors.ICON_STRONG.css : I.A.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, n.jsx)(k.D, {
                                variant: "heading-sm/medium",
                                className: i()(w.PV, { [w.WV]: s, [w.mq]: s }),
                                color: u ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            m
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: i()(w.SC, { [w.b2]: s }),
                                          }),
                                          (0, n.jsx)(k.D, {
                                              className: i()(w.xw, { [w._L]: s }),
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
var H = s(604121),
    U = s(775602),
    W = s(773669),
    K = s(287809),
    z = s(252424),
    Y = s(801365),
    B = s(453384),
    X = s(646764),
    $ = s(630037),
    J = s(634726);
async function Z() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function ee() {
    let { quest: e, sourceQuestContent: t, onClose: s, maxProgressSec: l, targetSec: i } = a.useContext(M.a),
        [o, r] = a.useState(!1),
        u = (0, c.bG)([U.Ay], () => U.Ay.useReducedMotion),
        d = (0, c.bG)([W.default], () => W.default.locale),
        m = (0, c.bG)([K.default], () => K.default.getCurrentUser()),
        x = a.useRef(e.userStatus?.completedAt),
        [h, p] = a.useState(!1),
        C = (0, Y.mq)(e.config, m),
        f = e.userStatus?.completedAt != null,
        j = i > 0 ? Math.min(l / i, 0.99) : 0,
        v = f ? 1 : j,
        S = (0, z.l9)(d, v, { roundingMode: "floor" }),
        A = e.userStatus?.claimedAt != null,
        N = R.intl.formatToPlainString(f && !A ? R.t.NRp4K4 : R.t["12IWP2"], { rewardName: C });
    a.useEffect(() => {
        null == x.current && e.userStatus?.completedAt != null && p(!0), (x.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let O = (0, $.D)({
        quest: e,
        questContent: g.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        shouldShowShopIfAlreadyClaimed: !1,
        onCloseModal: s,
    });
    return (0, n.jsxs)("div", {
        className: J.Tr,
        children: [
            f && (0, n.jsx)(H.a, { importData: Z, className: J.t_, loop: !1, autoplay: !1, shouldAnimate: h && !u }),
            (0, n.jsx)(b.m, {
                position: "top",
                text: N,
                onTooltipShow: function () {
                    r(!0);
                },
                onTooltipHide: function () {
                    r(!1);
                },
                children: (0, n.jsx)(V.D, {
                    className: J.md,
                    style: f ? { cursor: "pointer" } : void 0,
                    onClick: () => {
                        f && O();
                    },
                    children: (0, n.jsx)(B.A, {
                        size: 48,
                        percentComplete: v,
                        overlayText: o ? S : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(X.A, {
                            fullWidth: !0,
                            quest: e,
                            questContent: g.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: t,
                        }),
                    }),
                }),
            }),
        ],
    });
}
var et = s(190107);
function es(e) {
    let {
            transitionState: t,
            onClose: s,
            quest: l,
            autoplay: o,
            videoSessionId: c,
            impressionRef: h,
            parentModalOpenStartClockTime: p,
            sourceQuestContent: g,
        } = e,
        S = (0, j.Yh)(l),
        E = (0, f.LS)(l),
        { maxProgressSec: _, trackProgress: D } = (function (e) {
            let { initialProgressSec: t, targetSec: s, completedAt: n } = e,
                [l, i] = (0, a.useState)(t);
            return {
                maxProgressSec: null != n ? s : l,
                trackProgress: (0, a.useCallback)((e) => {
                    i((t) => (e > t ? e : t));
                }, []),
            };
        })({
            initialProgressSec: S.progressSeconds,
            targetSec: S.targetSeconds,
            completedAt: l.userStatus?.completedAt,
        }),
        [T, b] = a.useState(142),
        [V, k] = a.useState(!1),
        q = l.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    r()(null != q, "VideoQuestModal: videoTask must not be null");
    let I = (0, v.eG)(q),
        Q = "portrait" === I,
        L = (0, x.A)((e) => {
            b(e.target.offsetHeight);
        }),
        R = (0, m.w)(L),
        { enabled: H } = C.n6.useConfig({ location: et.rE.VIDEO_MODAL }),
        U = (0, O.H)({ quest: l, onClose: s, sourceQuestContent: g }),
        W = a.useMemo(
            () => ({
                quest: l,
                sourceQuestContent: g,
                videoSessionId: c,
                isPortrait: Q,
                onClose: s,
                isFullscreenEnabled: V,
                setIsFullscreenEnabled: k,
                maxProgressSec: _,
                targetSec: S.targetSeconds,
            }),
            [l, g, c, Q, s, V, k, _, S.targetSeconds],
        );
    return (0, n.jsx)(M.a.Provider, {
        value: W,
        children: (0, n.jsx)("div", {
            style: Q ? { "--custom-portrait-footer-height": `${T}px` } : void 0,
            children: (0, n.jsx)(d.EO, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rI.DYNAMIC,
                className: i()(G.CR, { [G.VX]: "landscape" === I, [G.Zy]: "portrait" === I }),
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: (0, n.jsx)("div", {
                    ref: (e) => {
                        h.current = e;
                    },
                    className: G.NE,
                    children: (0, n.jsx)("div", {
                        className: G.S3,
                        style: { "--custom-footer-horizontal-padding": "20px" },
                        children: (0, n.jsxs)("div", {
                            className: G.jE,
                            children: [
                                H
                                    ? (0, n.jsx)(A.A, {
                                          targetTimeSec: q.target,
                                          parentTransitionState: t,
                                          onOptimisticProgressUpdate: D,
                                          autoplay: o,
                                          openedAtMs: p,
                                          orientation: I,
                                      })
                                    : (0, n.jsx)(N.A, {
                                          targetTimeSec: q.target,
                                          parentTransitionState: t,
                                          onOptimisticProgressUpdate: D,
                                          autoplay: o,
                                          openedAtMs: p,
                                          orientation: I,
                                      }),
                                Q
                                    ? (0, n.jsxs)("div", {
                                          ref: R,
                                          className: w.uh,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: w.Df,
                                                  children: [E ? null : (0, n.jsx)(ee, {}), (0, n.jsx)(F, {})],
                                              }),
                                              (0, n.jsxs)("div", {
                                                  className: w.eX,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: w.uP,
                                                          children: (0, n.jsx)("div", {
                                                              className: w.ne,
                                                              children: (0, n.jsx)(P, {}),
                                                          }),
                                                      }),
                                                      (0, n.jsx)(y, { handlePrimaryCtaClick: U }),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : (0, n.jsxs)("div", {
                                          className: w.nR,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: w.uu,
                                                  children: [E ? null : (0, n.jsx)(ee, {}), (0, n.jsx)(F, {})],
                                              }),
                                              (0, n.jsxs)("div", {
                                                  className: w.NY,
                                                  children: [
                                                      (0, n.jsx)(P, {}),
                                                      (0, n.jsx)(y, { handlePrimaryCtaClick: U }),
                                                  ],
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                    }),
                }),
            }),
        }),
    });
}
function en(e) {
    let { questId: t, overrideQuest: s, autoplay: l, openStartClockTime: i, ...o } = e,
        r = (0, c.bG)([p.A], () => p.A.getQuest(t)),
        u = (0, c.bG)([p.A], () => p.A.getQuestConfig(t)),
        d = s ?? r,
        m = null != s ? s.config : u,
        x = a.useMemo(() => (null != m ? { questConfig: m } : null), [m]);
    return null != d && null != m && null != x
        ? (0, n.jsx)(M.l.Provider, {
              value: x,
              children: (0, n.jsx)(S.R, {
                  questOrQuests: d,
                  questContent: g.uF.VIDEO_MODAL,
                  minViewTimeSeconds: h.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: o.sourceQuestContent,
                  children: (e) =>
                      (0, n.jsx)(es, {
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
