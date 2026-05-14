"use strict";
n.d(t, { A: () => W });
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
    f = n(131607),
    h = n(113854),
    p = n(363195),
    E = n(340124),
    m = n(859703),
    g = n(507107),
    A = n(759366),
    I = n(192444),
    T = n(838077),
    S = n(31587),
    N = n(590202),
    y = n(639214),
    C = n(43105),
    v = n(375708);
function O(e) {
    let { onDismiss: t, onCTAClick: n, targetElementRef: r } = e;
    return (0, i.jsx)(C.A, {
        actions: [{ text: v.intl.string(v.t["8+TMEJ"]), variant: "primary", onClick: n }],
        body: v.intl.string(v.t.tP7w6c),
        caretConfig: { align: "start" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/85af57d01e12bec0f5b196f62e9898fad51b8a18681f6b90723856bae7b10363.svg",
        },
        onRequestClose: t,
        position: "bottom",
        size: "lg",
        targetElementRef: r,
        title: v.intl.string(v.t.y0cRrO),
    });
}
var R = n(305866),
    b = n(939249),
    D = n(789645),
    L = n(915089),
    w = n(18437),
    M = n(453384),
    P = n(646764),
    x = n(617986),
    U = n(571038);
function k(e) {
    let { quest: t, questDescription: n, completedRatio: s, minimizeFrame: l, onClose: u } = e,
        c = (0, L.GV)(),
        d = (0, w.Ut)(),
        _ = r.useCallback(() => {
            d({
                questId: t.id,
                questContent: g.uF.RUNNING_ACTIVITY,
                questContentCTA: N.Cy.LEARN_MORE,
                sourceQuestContent: g.uF.RUNNING_ACTIVITY,
            }),
                (0, x.navigateToQuestHome)({ fromContent: g.uF.RUNNING_ACTIVITY, questId: t.id }),
                l(),
                u();
        }, [t.id, d, l, u]);
    return (0, i.jsxs)(R.l, {
        className: U.kL,
        "aria-labelledby": c,
        children: [
            (0, i.jsxs)("div", {
                className: U.wx,
                children: [
                    (0, i.jsx)(o.E, {
                        id: c,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: v.intl.formatToPlainString(v.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(b.D, {
                        className: U.b,
                        "aria-label": v.intl.string(v.t.cpT0Cq),
                        onClick: u,
                        children: (0, i.jsx)(D.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: U.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(M.A, {
                            size: 48,
                            percentComplete: s,
                            children: (0, i.jsx)(P.A, {
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
                text: v.intl.string(v.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: _,
            }),
        ],
    });
}
var G = n(713081),
    F = n(73473),
    V = n(190107),
    B = n(49999),
    H = n(165610),
    j = n(200254);
function Y(e) {
    let { quest: t, applicationId: n } = e,
        l = (0, S.fc)(t),
        u = (0, T.mU)({
            quest: t,
            taskDetails: l,
            location: V.rE.QUEST_ACTIVITY_HEADER,
            questContent: g.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: g.uF.RUNNING_ACTIVITY,
        }),
        [_, p] = r.useState(!1),
        m = r.useRef(null),
        A = r.useRef(null),
        [I, y] = (0, f.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: C, completedRatioDisplay: R, percentComplete: b } = (0, S.O9)(t, !0),
        D = r.useCallback(() => {
            h.A.updateFrameLayoutMode({ applicationId: n, layoutMode: H.y.PIP });
        }, [n]),
        L = t.userStatus?.enrolledAt != null,
        w = r.useCallback(() => {
            (0, E.Oy)(t.id, {
                questContent: g.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: N.Cy.ACCEPT_QUEST,
                sourceQuestContent: g.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: j.wx,
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
                children: [
                    (0, i.jsxs)(s.B, {
                        className: j.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: j.v0,
                                ref: m,
                                children: (0, i.jsx)(P.A, {
                                    quest: t,
                                    questContent: g.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                                    className: j.Qf,
                                    autoplay: _,
                                }),
                            }),
                            (0, i.jsx)(d.Y, {
                                targetElementRef: A,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(k, {
                                        quest: t,
                                        questDescription: u,
                                        completedRatio: C,
                                        minimizeFrame: D,
                                        onClose: n,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)(a.$, {
                                        text: v.intl.formatToPlainString(v.t.EAYZAr, {
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
                        className: j.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: j.L$,
                                children: [
                                    (0, i.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: R }),
                                    (0, i.jsxs)("div", {
                                        className: j.hr,
                                        children: [
                                            (0, i.jsx)("div", { className: j.SX, style: { width: `${b}%` } }),
                                            (0, i.jsxs)("div", {
                                                className: j.tu,
                                                style: { width: `${b}%` },
                                                children: [
                                                    (0, i.jsx)("div", { className: j.SZ }),
                                                    (0, i.jsx)("div", { className: j.SZ }),
                                                    (0, i.jsx)("div", { className: j.SZ }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            L
                                ? (0, i.jsx)(G.A, {
                                      quest: t,
                                      questContent: g.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, i.jsx)(a.$, {
                                      variant: "primary",
                                      text: v.intl.string(v.t.l7E81v),
                                      size: "sm",
                                      onClick: w,
                                  }),
                        ],
                    }),
                ],
            }),
            null != I &&
                L &&
                (0, i.jsx)(O, {
                    onDismiss: () => y(B.i.USER_DISMISS),
                    onCTAClick: () => y(B.i.TAKE_ACTION),
                    targetElementRef: m,
                }),
        ],
    });
}
function W(e) {
    let { applicationId: t } = e,
        s = (0, u.bG)([m.A], () => m.A.quests),
        a = (0, u.bG)([p.A], () => p.A.theme),
        o = r.useMemo(() => (0, y.jm)(s, t, !0)[0], [s, t]),
        { enabled: c, showSkipButton: d } = I.Ym.useConfig({ location: V.rE.QUEST_ACTIVITY_HEADER }),
        f = (0, u.bG)([A.A], () => A.A.getState().autoEnroll),
        h = o?.id,
        E = (0, u.bG)([A.A], () => A.A.isDismissed(h), [h]);
    return (r.useEffect(() => {
        !c ||
            null == o ||
            o.userStatus?.enrolledAt != null ||
            f ||
            E ||
            (0, _.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: o, showSkipButton: d });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [c, o, f, E, d]),
    null != o && c)
        ? (0, i.jsx)(l.N, {
              theme: a,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(F.R, {
                          questOrQuests: o,
                          questContent: g.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(Y, { quest: o, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
