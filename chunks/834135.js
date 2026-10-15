(n.r(e), n.d(e, { default: () => $ }));
var s = n(477900),
    o = n(582128),
    a = n(284009),
    u = n.n(a),
    r = n(412703),
    i = n(17928),
    l = n(613373),
    c = n(859703),
    d = n(738822),
    p = n(192444),
    m = n(77870),
    f = n(792620),
    A = n(753386),
    C = n(738883),
    S = n(669912),
    g = n(657792),
    x = n(441512),
    h = n(55759),
    O = n(795068),
    M = n(781121),
    j = n(821609),
    E = n(590202),
    _ = n(651892);
function y(t) {
    let { handlePrimaryCtaClick: e } = t,
        { quest: n } = o.useContext(O.a);
    return (0, s.jsx)(j.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => e(d.uF.VIDEO_MODAL_PRIMARY_CTA, E.Cy.OPEN_GAME_LINK),
        text: (0, _.wr)(n),
    });
}
var D = n(262254);
function T() {
    let { quest: t, sourceQuestContent: e, onClose: n } = o.useContext(O.a);
    return (0, s.jsx)(D.A, { quest: t, questContent: d.uF.QUEST_HOME_DESKTOP, sourceQuestContent: e, onClose: n });
}
var b = n(628284),
    v = n(637691),
    P = n(105292);
function k() {
    let { quest: t, sourceQuestContent: e, onClose: n } = o.useContext(O.a),
        a = (0, m.LS)(t),
        u = (0, M.H)({ quest: t, onClose: n, sourceQuestContent: e });
    return (0, s.jsx)(v.A, {
        title: P.intl.format(P.t.EQa7os, { questName: t.config.messages.questName }),
        subtitle: t.config.messages.gamePublisher,
        subtitleCta: t.config.ctaConfig.subtitle,
        subtitlePrefixIcon: b.y,
        isFlush: a,
        onClick: () => u(d.uF.VIDEO_MODAL, E.Cy.OPEN_GAME_LINK),
    });
}
var q = n(118751),
    I = n(604121),
    Q = n(866665),
    V = n(939249),
    L = n(775602),
    N = n(773669),
    G = n(287809),
    R = n(801365),
    w = n(453384),
    F = n(62405),
    H = n(630037),
    K = n(190107),
    U = n(150387);
async function W() {
    return await n.e("40119").then(n.t.bind(n, 718698, 19));
}
function Y() {
    let { quest: t, sourceQuestContent: e, onClose: n, maxProgressSec: a, targetSec: u } = o.useContext(O.a),
        [r, l] = o.useState(!1),
        c = (0, i.bG)([L.Ay], () => L.Ay.useReducedMotion),
        p = (0, i.bG)([N.default], () => N.default.locale),
        m = (0, i.bG)([G.default], () => G.default.getCurrentUser()),
        f = o.useRef(t.userStatus?.completedAt),
        [A, C] = o.useState(!1),
        S = (0, R.mq)(t.config, m),
        g = t.userStatus?.completedAt != null,
        x = u > 0 ? Math.min(a / u, 0.99) : 0,
        h = g ? 1 : x,
        M = (0, q.l9)(p, h, { roundingMode: "floor" }),
        j = t.userStatus?.claimedAt != null,
        E = P.intl.formatToPlainString(g && !j ? P.t.NRp4K4 : P.t["12IWP2"], { rewardName: S });
    o.useEffect(() => {
        (null == f.current && t.userStatus?.completedAt != null && C(!0), (f.current = t.userStatus?.completedAt));
    }, [t.userStatus?.completedAt]);
    let _ = (0, H.D)({
        quest: t,
        questContent: d.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: e,
        shouldShowShopIfAlreadyClaimed: !1,
        onCloseModal: n,
    });
    return (0, s.jsxs)("div", {
        className: U.Tr,
        children: [
            g && (0, s.jsx)(I.a, { importData: W, className: U.t_, loop: !1, autoplay: !1, shouldAnimate: A && !c }),
            (0, s.jsx)(Q.m, {
                position: "top",
                text: E,
                onTooltipShow: function () {
                    l(!0);
                },
                onTooltipHide: function () {
                    l(!1);
                },
                children: (0, s.jsx)(V.D, {
                    className: U.md,
                    style: g ? { cursor: "pointer" } : void 0,
                    onClick: () => {
                        g && _();
                    },
                    children: (0, s.jsx)(w.A, {
                        size: 48,
                        percentComplete: h,
                        overlayText: r ? M : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, s.jsx)(F.A, {
                            fullWidth: !0,
                            quest: t,
                            location: K.rE.VIDEO_MODAL,
                            questContent: d.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: e,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function z(t) {
    let {
            transitionState: e,
            onClose: n,
            quest: a,
            autoplay: i,
            videoSessionId: l,
            impressionRef: c,
            parentModalOpenStartClockTime: d,
            sourceQuestContent: g,
        } = t,
        j = (0, f.Yh)(a),
        E = (0, m.LS)(a),
        { maxProgressSec: _, trackProgress: D } = (function (t) {
            let { initialProgressSec: e, targetSec: n, completedAt: s } = t,
                [a, u] = (0, o.useState)(e);
            return {
                maxProgressSec: null != s ? n : a,
                trackProgress: (0, o.useCallback)((t) => {
                    u((e) => (t > e ? t : e));
                }, []),
            };
        })({
            initialProgressSec: j.progressSeconds,
            targetSec: j.targetSeconds,
            completedAt: a.userStatus?.completedAt,
        }),
        [b, v] = o.useState(!1),
        P = a.config.taskConfigV2?.tasks?.[r.n.WATCH_VIDEO];
    u()(null != P, "VideoQuestModal: videoTask must not be null");
    let q = (0, A.eG)(P),
        { enabled: I } = p.n6.useConfig({ location: K.rE.VIDEO_MODAL }),
        Q = (0, M.H)({ quest: a, onClose: n, sourceQuestContent: g }),
        V = o.useMemo(
            () => ({
                quest: a,
                sourceQuestContent: g,
                videoSessionId: l,
                onClose: n,
                isFullscreenEnabled: b,
                setIsFullscreenEnabled: v,
                maxProgressSec: _,
                targetSec: j.targetSeconds,
            }),
            [a, g, l, n, b, v, _, j.targetSeconds],
        );
    return (0, s.jsx)(O.a.Provider, {
        value: V,
        children: (0, s.jsx)(S.A, {
            transitionState: e,
            orientation: q,
            impressionRef: (t) => {
                c.current = t;
            },
            video: I
                ? (0, s.jsx)(x.A, {
                      targetTimeSec: P.target,
                      parentTransitionState: e,
                      onOptimisticProgressUpdate: D,
                      autoplay: i,
                      openedAtMs: d,
                      orientation: q,
                  })
                : (0, s.jsx)(h.A, {
                      targetTimeSec: P.target,
                      parentTransitionState: e,
                      onOptimisticProgressUpdate: D,
                      autoplay: i,
                      openedAtMs: d,
                      orientation: q,
                  }),
            footer: (0, s.jsx)(C.A, {
                prefix: E ? null : (0, s.jsx)(Y, {}),
                advertiserDetails: (0, s.jsx)(k, {}),
                secondaryAction: (0, s.jsx)(T, {}),
                primaryAction: (0, s.jsx)(y, { handlePrimaryCtaClick: Q }),
            }),
        }),
    });
}
function $(t) {
    let { questId: e, overrideQuest: n, autoplay: a, openStartClockTime: u, ...r } = t,
        p = (0, i.bG)([c.A], () => c.A.getQuest(e)),
        m = (0, i.bG)([c.A], () => c.A.getQuestConfig(e)),
        f = n ?? p,
        A = null != n ? n.config : m,
        C = o.useMemo(() => (null != A ? { questConfig: A } : null), [A]);
    return null != f && null != A && null != C
        ? (0, s.jsx)(O.l.Provider, {
              value: C,
              children: (0, s.jsx)(g.R, {
                  questOrQuests: f,
                  questContent: d.uF.VIDEO_MODAL,
                  minViewTimeSeconds: l.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: r.sourceQuestContent,
                  children: (t) =>
                      (0, s.jsx)(z, {
                          ...r,
                          parentModalOpenStartClockTime: u,
                          impressionRef: t,
                          quest: f,
                          autoplay: a,
                      }),
              }),
          })
        : null;
}
