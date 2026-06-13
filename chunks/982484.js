"use strict";
n.d(t, { A: () => X });
var i = n(627968),
    r = n(64700),
    s = n(331322),
    a = n(821609),
    o = n(834730),
    l = n(43990),
    u = n(17928),
    c = n(554146),
    d = n(922016),
    _ = n(192308),
    h = n(131607),
    f = n(113854),
    p = n(363195),
    E = n(340124),
    m = n(859703),
    g = n(507107),
    A = n(759366),
    I = n(192444),
    T = n(3738),
    S = n(347135),
    y = n(590202),
    N = n(639214),
    v = n(43105),
    C = n(375708);
function R(e) {
    let { onDismiss: t, onCTAClick: n, targetElementRef: r } = e;
    return (0, i.jsx)(v.A, {
        actions: [{ text: C.intl.string(C.t["8+TMEJ"]), variant: "primary", onClick: n }],
        body: C.intl.string(C.t.tP7w6c),
        caretConfig: { align: "start" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/85af57d01e12bec0f5b196f62e9898fad51b8a18681f6b90723856bae7b10363.svg",
        },
        onRequestClose: t,
        position: "bottom",
        size: "lg",
        targetElementRef: r,
        title: C.intl.string(C.t.y0cRrO),
    });
}
var O = n(323889),
    b = n(305866),
    D = n(939249),
    L = n(789645),
    w = n(274670),
    M = n(144779),
    P = n(915089),
    x = n(104886),
    k = n(18437),
    U = n(971649),
    G = n(453384),
    F = n(646764),
    V = n(617986),
    B = n(571038);
function H(e) {
    let { quest: t, questDescription: n, completedRatio: s, minimizeFrame: l, onClose: u } = e,
        c = (0, P.GV)(),
        d = (0, k.Ut)(),
        _ = (0, U.go)(),
        h = r.useCallback(() => {
            (0, x.E5)(x.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_header_popout")
                ? (0, w.r)({
                      type: M.F.CLICK_INTERNAL,
                      adCreativeType: O.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: y.Cy.LEARN_MORE,
                      surfaceId: g.uF.RUNNING_ACTIVITY,
                      sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                      impressionId: _,
                  })
                : d({
                      questId: t.id,
                      questContent: g.uF.RUNNING_ACTIVITY,
                      questContentCTA: y.Cy.LEARN_MORE,
                      sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                  }),
                (0, V.navigateToQuestHome)({ fromContent: g.uF.RUNNING_ACTIVITY, questId: t.id }),
                l(),
                u();
        }, [t.id, d, _, l, u]);
    return (0, i.jsxs)(b.l, {
        className: B.kL,
        "aria-labelledby": c,
        children: [
            (0, i.jsxs)("div", {
                className: B.wx,
                children: [
                    (0, i.jsx)(o.E, {
                        id: c,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: C.intl.formatToPlainString(C.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(D.D, {
                        className: B.b,
                        "aria-label": C.intl.string(C.t.cpT0Cq),
                        onClick: u,
                        children: (0, i.jsx)(L.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: B.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(G.A, {
                            size: 48,
                            percentComplete: s,
                            children: (0, i.jsx)(F.A, {
                                fullWidth: !0,
                                quest: t,
                                questContent: g.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
                        }),
                    }),
                    (0, i.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(a.$, {
                autoFocus: !0,
                fullWidth: !0,
                text: C.intl.string(C.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: h,
            }),
        ],
    });
}
var j = n(262254),
    Y = n(73473),
    W = n(190107),
    K = n(49999),
    $ = n(165610),
    z = n(200254);
function q(e) {
    let { quest: t, applicationId: n } = e,
        l = (0, S.fc)(t),
        u = (0, T.mU)({
            quest: t,
            taskDetails: l,
            location: W.rE.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: g.uF.RUNNING_ACTIVITY,
        }),
        [_, p] = r.useState(!1),
        m = r.useRef(null),
        A = r.useRef(null),
        [I, N] = (0, h.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: v, completedRatioDisplay: O, percentComplete: b } = (0, S.O9)(t, !0),
        D = r.useCallback(() => {
            f.A.updateFrameLayoutMode({ applicationId: n, layoutMode: $.y.PIP });
        }, [n]),
        L = t.userStatus?.enrolledAt != null,
        w = r.useCallback(() => {
            (0, E.Oy)(t.id, {
                questContent: g.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: y.Cy.ACCEPT_QUEST,
                sourceQuestContent: g.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: z.wx,
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
                children: [
                    (0, i.jsxs)(s.B, {
                        className: z.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: z.v0,
                                ref: m,
                                children: (0, i.jsx)(F.A, {
                                    quest: t,
                                    questContent: g.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                                    className: z.Qf,
                                    autoplay: _,
                                }),
                            }),
                            (0, i.jsx)(d.Y, {
                                targetElementRef: A,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(H, {
                                        quest: t,
                                        questDescription: u,
                                        completedRatio: v,
                                        minimizeFrame: D,
                                        onClose: n,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)(a.$, {
                                        text: C.intl.formatToPlainString(C.t.EAYZAr, {
                                            questName: t.config.messages.questName,
                                        }),
                                        variant: "secondary",
                                        size: "sm",
                                        buttonRef: A,
                                        ...e,
                                    }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(s.B, {
                        className: z.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: z.L$,
                                children: [
                                    (0, i.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: O }),
                                    (0, i.jsxs)("div", {
                                        className: z.hr,
                                        children: [
                                            (0, i.jsx)("div", { className: z.SX, style: { width: `${b}%` } }),
                                            (0, i.jsxs)("div", {
                                                className: z.tu,
                                                style: { width: `${b}%` },
                                                children: [
                                                    (0, i.jsx)("div", { className: z.SZ }),
                                                    (0, i.jsx)("div", { className: z.SZ }),
                                                    (0, i.jsx)("div", { className: z.SZ }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            L
                                ? (0, i.jsx)(j.A, {
                                      quest: t,
                                      questContent: g.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                                      experimentLocation: W.rE.QUEST_ACTIVITY_HEADER,
                                      size: "sm",
                                  })
                                : (0, i.jsx)(a.$, {
                                      variant: "primary",
                                      text: C.intl.string(C.t.l7E81v),
                                      size: "sm",
                                      onClick: w,
                                  }),
                        ],
                    }),
                ],
            }),
            null != I &&
                L &&
                (0, i.jsx)(R, {
                    onDismiss: () => N(K.i.USER_DISMISS),
                    onCTAClick: () => N(K.i.TAKE_ACTION),
                    targetElementRef: m,
                }),
        ],
    });
}
function X(e) {
    let { applicationId: t } = e,
        s = (0, u.bG)([m.A], () => m.A.quests),
        a = (0, u.bG)([p.A], () => p.A.theme),
        o = r.useMemo(() => (0, N.jm)(s, t, !0)[0], [s, t]),
        { enabled: c, showSkipButton: d } = I.Ym.useConfig({ location: W.rE.QUEST_ACTIVITY_HEADER }),
        h = (0, u.bG)([A.A], () => A.A.getState().autoEnroll),
        f = o?.id,
        E = (0, u.bG)([A.A], () => A.A.isDismissed(f), [f]);
    return (r.useEffect(() => {
        !c ||
            null == o ||
            o.userStatus?.enrolledAt != null ||
            h ||
            E ||
            (0, _.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: o, showSkipButton: d });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [c, o, h, E, d]),
    null != o && c)
        ? (0, i.jsx)(l.N, {
              theme: a,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(Y.R, {
                          questOrQuests: o,
                          questContent: g.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(q, { quest: o, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
