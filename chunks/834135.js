(n.r(e), n.d(e, { default: () => Y }));
var s = n(477900),
    o = n(582128),
    u = n(284009),
    a = n.n(u),
    l = n(412703),
    r = n(17928),
    i = n(613373),
    c = n(859703),
    d = n(738822),
    m = n(77870),
    p = n(792620),
    f = n(753386),
    A = n(738883),
    C = n(669912),
    S = n(657792),
    x = n(862529),
    g = n(795068),
    h = n(781121),
    j = n(821609),
    M = n(590202),
    O = n(651892);
function E(t) {
    let { handlePrimaryCtaClick: e } = t,
        { quest: n } = o.useContext(g.a);
    return (0, s.jsx)(j.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => e(d.uF.VIDEO_MODAL_PRIMARY_CTA, M.Cy.OPEN_GAME_LINK),
        text: (0, O.wr)(n),
    });
}
var _ = n(262254);
function y() {
    let { quest: t, sourceQuestContent: e, onClose: n } = o.useContext(g.a);
    return (0, s.jsx)(_.A, { quest: t, questContent: d.uF.QUEST_HOME_DESKTOP, sourceQuestContent: e, onClose: n });
}
var v = n(628284),
    D = n(637691),
    T = n(105292);
function b() {
    let { quest: t, sourceQuestContent: e, onClose: n } = o.useContext(g.a),
        u = (0, m.LS)(t),
        a = (0, h.H)({ quest: t, onClose: n, sourceQuestContent: e });
    return (0, s.jsx)(D.A, {
        title: T.intl.format(T.t.EQa7os, { questName: t.config.messages.questName }),
        subtitle: t.config.messages.gamePublisher,
        subtitleCta: t.config.ctaConfig.subtitle,
        subtitlePrefixIcon: v.y,
        isFlush: u,
        onClick: () => a(d.uF.VIDEO_MODAL, M.Cy.OPEN_GAME_LINK),
    });
}
var P = n(118751),
    k = n(604121),
    q = n(866665),
    I = n(939249),
    Q = n(775602),
    N = n(773669),
    V = n(287809),
    G = n(801365),
    L = n(453384),
    R = n(62405),
    w = n(630037),
    F = n(190107),
    H = n(150387);
async function K() {
    return await n.e("40119").then(n.t.bind(n, 718698, 19));
}
function U() {
    let { quest: t, sourceQuestContent: e, onClose: n, maxProgressSec: u, targetSec: a } = o.useContext(g.a),
        [l, i] = o.useState(!1),
        c = (0, r.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        m = (0, r.bG)([N.default], () => N.default.locale),
        p = (0, r.bG)([V.default], () => V.default.getCurrentUser()),
        f = o.useRef(t.userStatus?.completedAt),
        [A, C] = o.useState(!1),
        S = (0, G.mq)(t.config, p),
        x = t.userStatus?.completedAt != null,
        h = a > 0 ? Math.min(u / a, 0.99) : 0,
        j = x ? 1 : h,
        M = (0, P.l9)(m, j, { roundingMode: "floor" }),
        O = t.userStatus?.claimedAt != null,
        E = T.intl.formatToPlainString(x && !O ? T.t.NRp4K4 : T.t["12IWP2"], { rewardName: S });
    o.useEffect(() => {
        (null == f.current && t.userStatus?.completedAt != null && C(!0), (f.current = t.userStatus?.completedAt));
    }, [t.userStatus?.completedAt]);
    let _ = (0, w.D)({
        quest: t,
        questContent: d.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: e,
        shouldShowShopIfAlreadyClaimed: !1,
        onCloseModal: n,
    });
    return (0, s.jsxs)("div", {
        className: H.Tr,
        children: [
            x && (0, s.jsx)(k.a, { importData: K, className: H.t_, loop: !1, autoplay: !1, shouldAnimate: A && !c }),
            (0, s.jsx)(q.m, {
                position: "top",
                text: E,
                onTooltipShow: function () {
                    i(!0);
                },
                onTooltipHide: function () {
                    i(!1);
                },
                children: (0, s.jsx)(I.D, {
                    className: H.md,
                    style: x ? { cursor: "pointer" } : void 0,
                    onClick: () => {
                        x && _();
                    },
                    children: (0, s.jsx)(L.A, {
                        size: 48,
                        percentComplete: j,
                        overlayText: l ? M : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, s.jsx)(R.A, {
                            fullWidth: !0,
                            quest: t,
                            location: F.rE.VIDEO_MODAL,
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
function W(t) {
    let {
            transitionState: e,
            onClose: n,
            quest: u,
            autoplay: r,
            videoSessionId: i,
            impressionRef: c,
            parentModalOpenStartClockTime: d,
            sourceQuestContent: S,
        } = t,
        j = (0, p.Yh)(u),
        M = (0, m.LS)(u),
        { maxProgressSec: O, trackProgress: _ } = (function (t) {
            let { initialProgressSec: e, targetSec: n, completedAt: s } = t,
                [u, a] = (0, o.useState)(e);
            return {
                maxProgressSec: null != s ? n : u,
                trackProgress: (0, o.useCallback)((t) => {
                    a((e) => (t > e ? t : e));
                }, []),
            };
        })({
            initialProgressSec: j.progressSeconds,
            targetSec: j.targetSeconds,
            completedAt: u.userStatus?.completedAt,
        }),
        [v, D] = o.useState(!1),
        T = u.config.taskConfigV2?.tasks?.[l.n.WATCH_VIDEO];
    a()(null != T, "VideoQuestModal: videoTask must not be null");
    let P = (0, f.eG)(T),
        k = (0, h.H)({ quest: u, onClose: n, sourceQuestContent: S }),
        q = o.useMemo(
            () => ({
                quest: u,
                sourceQuestContent: S,
                videoSessionId: i,
                onClose: n,
                isFullscreenEnabled: v,
                setIsFullscreenEnabled: D,
                maxProgressSec: O,
                targetSec: j.targetSeconds,
            }),
            [u, S, i, n, v, D, O, j.targetSeconds],
        );
    return (0, s.jsx)(g.a.Provider, {
        value: q,
        children: (0, s.jsx)(C.A, {
            transitionState: e,
            orientation: P,
            impressionRef: (t) => {
                c.current = t;
            },
            video: (0, s.jsx)(x.A, {
                targetTimeSec: T.target,
                parentTransitionState: e,
                onOptimisticProgressUpdate: _,
                autoplay: r,
                openedAtMs: d,
                orientation: P,
            }),
            footer: (0, s.jsx)(A.A, {
                prefix: M ? null : (0, s.jsx)(U, {}),
                advertiserDetails: (0, s.jsx)(b, {}),
                secondaryAction: (0, s.jsx)(y, {}),
                primaryAction: (0, s.jsx)(E, { handlePrimaryCtaClick: k }),
            }),
        }),
    });
}
function Y(t) {
    let { questId: e, overrideQuest: n, autoplay: u, openStartClockTime: a, ...l } = t,
        m = (0, r.bG)([c.A], () => c.A.getQuest(e)),
        p = (0, r.bG)([c.A], () => c.A.getQuestConfig(e)),
        f = n ?? m,
        A = null != n ? n.config : p,
        C = o.useMemo(() => (null != A ? { questConfig: A } : null), [A]);
    return null != f && null != A && null != C
        ? (0, s.jsx)(g.l.Provider, {
              value: C,
              children: (0, s.jsx)(S.R, {
                  questOrQuests: f,
                  questContent: d.uF.VIDEO_MODAL,
                  minViewTimeSeconds: i.bq,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: l.sourceQuestContent,
                  children: (t) =>
                      (0, s.jsx)(W, {
                          ...l,
                          parentModalOpenStartClockTime: a,
                          impressionRef: t,
                          quest: f,
                          autoplay: u,
                      }),
              }),
          })
        : null;
}
