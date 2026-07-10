s.r(t), s.d(t, { default: () => Z });
var n = s(627968),
    i = s(64700),
    a = s(331322),
    l = s(821609),
    r = s(834730),
    o = s(43990),
    u = s(17928),
    c = s(554146),
    d = s(922016),
    C = s(192308),
    N = s(131607),
    m = s(113854),
    I = s(363195),
    T = s(340124),
    A = s(859703),
    x = s(24001),
    E = s(759366),
    h = s(3738),
    j = s(347135),
    p = s(590202),
    _ = s(639214),
    R = s(43105),
    f = s(375708);
function v(e) {
    let { onDismiss: t, onCTAClick: s, targetElementRef: i } = e;
    return (0, n.jsx)(R.A, {
        actions: [{ text: f.intl.string(f.t["8+TMEJ"]), variant: "primary", onClick: s }],
        body: f.intl.string(f.t.tP7w6c),
        caretConfig: { align: "start" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/85af57d01e12bec0f5b196f62e9898fad51b8a18681f6b90723856bae7b10363.svg",
        },
        onRequestClose: t,
        position: "bottom",
        size: "lg",
        targetElementRef: i,
        title: f.intl.string(f.t.y0cRrO),
    });
}
var g = s(323889),
    q = s(305866),
    y = s(939249),
    b = s(789645),
    S = s(274670),
    U = s(144779),
    F = s(915089),
    Y = s(104886),
    V = s(18437),
    Q = s(971649),
    G = s(453384),
    k = s(646764),
    D = s(617986),
    z = s(571038);
function L(e) {
    let { quest: t, questDescription: s, completedRatio: a, minimizeFrame: o, onClose: u } = e,
        c = (0, F.GV)(),
        d = (0, V.Ut)(),
        C = (0, Q.go)(),
        N = i.useCallback(() => {
            (0, Y.E5)(Y.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_header_popout")
                ? (0, S.r)({
                      type: U.F.CLICK_INTERNAL,
                      adCreativeType: g.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: p.Cy.LEARN_MORE,
                      surfaceId: x.uF.RUNNING_ACTIVITY,
                      sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                      impressionId: C,
                  })
                : d({
                      questId: t.id,
                      questContent: x.uF.RUNNING_ACTIVITY,
                      questContentCTA: p.Cy.LEARN_MORE,
                      sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                  }),
                (0, D.mA)({ fromContent: x.uF.RUNNING_ACTIVITY, questId: t.id }),
                o(),
                u();
        }, [t.id, d, C, o, u]);
    return (0, n.jsxs)(q.l, {
        className: z.kL,
        "aria-labelledby": c,
        children: [
            (0, n.jsxs)("div", {
                className: z.wx,
                children: [
                    (0, n.jsx)(r.E, {
                        id: c,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: f.intl.formatToPlainString(f.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, n.jsx)(y.D, {
                        className: z.b,
                        "aria-label": f.intl.string(f.t.cpT0Cq),
                        onClick: u,
                        children: (0, n.jsx)(b.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: z.rf,
                children: [
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(G.A, {
                            size: 48,
                            percentComplete: a,
                            children: (0, n.jsx)(k.A, {
                                fullWidth: !0,
                                quest: t,
                                questContent: x.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
                        }),
                    }),
                    (0, n.jsx)(r.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            (0, n.jsx)(l.$, {
                autoFocus: !0,
                fullWidth: !0,
                text: f.intl.string(f.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: N,
            }),
        ],
    });
}
var M = s(262254),
    P = s(73473),
    w = s(190107),
    O = s(49999),
    H = s(165610),
    $ = s(200254);
function K(e) {
    let { quest: t, applicationId: s } = e,
        o = (0, j.fc)(t),
        u = (0, h.mU)({
            quest: t,
            taskDetails: o,
            location: w.rE.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: x.uF.RUNNING_ACTIVITY,
        }),
        [C, I] = i.useState(!1),
        A = i.useRef(null),
        E = i.useRef(null),
        [_, R] = (0, N.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: g, completedRatioDisplay: q, percentComplete: y } = (0, j.O9)(t, !0),
        b = i.useCallback(() => {
            m.A.updateFrameLayoutMode({ applicationId: s, layoutMode: H.y.PIP });
        }, [s]),
        S = t.userStatus?.enrolledAt != null,
        U = i.useCallback(() => {
            (0, T.Oy)(t.id, {
                questContent: x.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: p.Cy.ACCEPT_QUEST,
                sourceQuestContent: x.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: $.wx,
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: [
                    (0, n.jsxs)(a.B, {
                        className: $.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)("div", {
                                className: $.v0,
                                ref: A,
                                children: (0, n.jsx)(k.A, {
                                    quest: t,
                                    questContent: x.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                                    className: $.Qf,
                                    autoplay: C,
                                }),
                            }),
                            (0, n.jsx)(d.Y, {
                                targetElementRef: E,
                                renderPopout: (e) => {
                                    let { closePopout: s } = e;
                                    return (0, n.jsx)(L, {
                                        quest: t,
                                        questDescription: u,
                                        completedRatio: g,
                                        minimizeFrame: b,
                                        onClose: s,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, n.jsx)(l.$, {
                                        text: f.intl.formatToPlainString(f.t.EAYZAr, {
                                            questName: t.config.messages.questName,
                                        }),
                                        variant: "secondary",
                                        size: "sm",
                                        buttonRef: E,
                                        ...e,
                                    }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)(a.B, {
                        className: $.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, n.jsxs)("div", {
                                className: $.L$,
                                children: [
                                    (0, n.jsx)(r.E, { variant: "text-sm/semibold", color: "text-strong", children: q }),
                                    (0, n.jsxs)("div", {
                                        className: $.hr,
                                        children: [
                                            (0, n.jsx)("div", { className: $.SX, style: { width: `${y}%` } }),
                                            (0, n.jsxs)("div", {
                                                className: $.tu,
                                                style: { width: `${y}%` },
                                                children: [
                                                    (0, n.jsx)("div", { className: $.SZ }),
                                                    (0, n.jsx)("div", { className: $.SZ }),
                                                    (0, n.jsx)("div", { className: $.SZ }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            S
                                ? (0, n.jsx)(M.A, {
                                      quest: t,
                                      questContent: x.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, n.jsx)(l.$, {
                                      variant: "primary",
                                      text: f.intl.string(f.t.l7E81v),
                                      size: "sm",
                                      onClick: U,
                                  }),
                        ],
                    }),
                ],
            }),
            null != _ &&
                S &&
                (0, n.jsx)(v, {
                    onDismiss: function () {
                        return R(O.i.USER_DISMISS);
                    },
                    onCTAClick: function () {
                        return R(O.i.TAKE_ACTION);
                    },
                    targetElementRef: A,
                }),
        ],
    });
}
function Z(e) {
    let { applicationId: t } = e,
        a = (0, u.bG)([A.A], () => A.A.quests),
        l = (0, u.bG)([I.A], () => I.A.theme),
        r = i.useMemo(() => (0, _.jm)(a, t, !0)[0], [a, t]),
        c = (0, u.bG)([E.A], () => E.A.getState().autoEnroll),
        d = r?.id,
        N = (0, u.bG)([E.A], () => E.A.isDismissed(d), [d]);
    return (i.useEffect(() => {
        null == r ||
            r.userStatus?.enrolledAt != null ||
            c ||
            N ||
            (0, C.openModalLazy)(
                async () => {
                    let { default: e } = await s.e("85986").then(s.bind(s, 113273));
                    return (t) => (0, n.jsx)(e, { ...t, quest: r });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [r, c, N]),
    null == r)
        ? null
        : (0, n.jsx)(o.N, {
              theme: l,
              children: (e) =>
                  (0, n.jsx)("div", {
                      className: e,
                      children: (0, n.jsx)(P.R, {
                          questOrQuests: r,
                          questContent: x.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, n.jsx)(K, { quest: r, applicationId: t }),
                      }),
                  }),
          });
}
