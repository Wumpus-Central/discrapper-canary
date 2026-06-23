"use strict";
n.d(t, { A: () => q });
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
    I = n(3738),
    T = n(347135),
    S = n(590202),
    y = n(639214),
    C = n(43105),
    N = n(375708);
function v(e) {
    let { onDismiss: t, onCTAClick: n, targetElementRef: r } = e;
    return (0, i.jsx)(C.A, {
        actions: [{ text: N.intl.string(N.t["8+TMEJ"]), variant: "primary", onClick: n }],
        body: N.intl.string(N.t.tP7w6c),
        caretConfig: { align: "start" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/85af57d01e12bec0f5b196f62e9898fad51b8a18681f6b90723856bae7b10363.svg",
        },
        onRequestClose: t,
        position: "bottom",
        size: "lg",
        targetElementRef: r,
        title: N.intl.string(N.t.y0cRrO),
    });
}
var R = n(323889),
    O = n(305866),
    b = n(939249),
    D = n(789645),
    L = n(274670),
    w = n(144779),
    M = n(915089),
    P = n(104886),
    x = n(18437),
    k = n(971649),
    U = n(453384),
    G = n(646764),
    F = n(617986),
    V = n(571038);
function B(e) {
    let { quest: t, questDescription: n, completedRatio: s, minimizeFrame: l, onClose: u } = e,
        c = (0, M.GV)(),
        d = (0, x.Ut)(),
        _ = (0, k.go)(),
        h = r.useCallback(() => {
            (0, P.E5)(P.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_header_popout")
                ? (0, L.r)({
                      type: w.F.CLICK_INTERNAL,
                      adCreativeType: R.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: S.Cy.LEARN_MORE,
                      surfaceId: g.uF.RUNNING_ACTIVITY,
                      sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                      impressionId: _,
                  })
                : d({
                      questId: t.id,
                      questContent: g.uF.RUNNING_ACTIVITY,
                      questContentCTA: S.Cy.LEARN_MORE,
                      sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                  }),
                (0, F.navigateToQuestHome)({ fromContent: g.uF.RUNNING_ACTIVITY, questId: t.id }),
                l(),
                u();
        }, [t.id, d, _, l, u]);
    return (0, i.jsxs)(O.l, {
        className: V.kL,
        "aria-labelledby": c,
        children: [
            (0, i.jsxs)("div", {
                className: V.wx,
                children: [
                    (0, i.jsx)(o.E, {
                        id: c,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: N.intl.formatToPlainString(N.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(b.D, {
                        className: V.b,
                        "aria-label": N.intl.string(N.t.cpT0Cq),
                        onClick: u,
                        children: (0, i.jsx)(D.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: V.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(U.A, {
                            size: 48,
                            percentComplete: s,
                            children: (0, i.jsx)(G.A, {
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
                text: N.intl.string(N.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: h,
            }),
        ],
    });
}
var j = n(262254),
    H = n(73473),
    Y = n(190107),
    W = n(49999),
    K = n(165610),
    $ = n(200254);
function z(e) {
    let { quest: t, applicationId: n } = e,
        l = (0, T.fc)(t),
        u = (0, I.mU)({
            quest: t,
            taskDetails: l,
            location: Y.rE.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: g.uF.RUNNING_ACTIVITY,
        }),
        [_, p] = r.useState(!1),
        m = r.useRef(null),
        A = r.useRef(null),
        [y, C] = (0, h.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: R, completedRatioDisplay: O, percentComplete: b } = (0, T.O9)(t, !0),
        D = r.useCallback(() => {
            f.A.updateFrameLayoutMode({ applicationId: n, layoutMode: K.y.PIP });
        }, [n]),
        L = t.userStatus?.enrolledAt != null,
        w = r.useCallback(() => {
            (0, E.Oy)(t.id, {
                questContent: g.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: S.Cy.ACCEPT_QUEST,
                sourceQuestContent: g.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: $.wx,
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
                children: [
                    (0, i.jsxs)(s.B, {
                        className: $.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: $.v0,
                                ref: m,
                                children: (0, i.jsx)(G.A, {
                                    quest: t,
                                    questContent: g.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                                    className: $.Qf,
                                    autoplay: _,
                                }),
                            }),
                            (0, i.jsx)(d.Y, {
                                targetElementRef: A,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(B, {
                                        quest: t,
                                        questDescription: u,
                                        completedRatio: R,
                                        minimizeFrame: D,
                                        onClose: n,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)(a.$, {
                                        text: N.intl.formatToPlainString(N.t.EAYZAr, {
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
                        className: $.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: $.L$,
                                children: [
                                    (0, i.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: O }),
                                    (0, i.jsxs)("div", {
                                        className: $.hr,
                                        children: [
                                            (0, i.jsx)("div", { className: $.SX, style: { width: `${b}%` } }),
                                            (0, i.jsxs)("div", {
                                                className: $.tu,
                                                style: { width: `${b}%` },
                                                children: [
                                                    (0, i.jsx)("div", { className: $.SZ }),
                                                    (0, i.jsx)("div", { className: $.SZ }),
                                                    (0, i.jsx)("div", { className: $.SZ }),
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
                                      experimentLocation: Y.rE.QUEST_ACTIVITY_HEADER,
                                      size: "sm",
                                  })
                                : (0, i.jsx)(a.$, {
                                      variant: "primary",
                                      text: N.intl.string(N.t.l7E81v),
                                      size: "sm",
                                      onClick: w,
                                  }),
                        ],
                    }),
                ],
            }),
            null != y &&
                L &&
                (0, i.jsx)(v, {
                    onDismiss: () => C(W.i.USER_DISMISS),
                    onCTAClick: () => C(W.i.TAKE_ACTION),
                    targetElementRef: m,
                }),
        ],
    });
}
function q(e) {
    let { applicationId: t } = e,
        s = (0, u.bG)([m.A], () => m.A.quests),
        a = (0, u.bG)([p.A], () => p.A.theme),
        o = r.useMemo(() => (0, y.jm)(s, t, !0)[0], [s, t]),
        c = (0, u.bG)([A.A], () => A.A.getState().autoEnroll),
        d = o?.id,
        h = (0, u.bG)([A.A], () => A.A.isDismissed(d), [d]);
    return (r.useEffect(() => {
        null == o ||
            o.userStatus?.enrolledAt != null ||
            c ||
            h ||
            (0, _.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: o });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [o, c, h]),
    null == o)
        ? null
        : (0, i.jsx)(l.N, {
              theme: a,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(H.R, {
                          questOrQuests: o,
                          questContent: g.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: g.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(z, { quest: o, applicationId: t }),
                      }),
                  }),
          });
}
