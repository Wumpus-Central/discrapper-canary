n.d(t, { A: () => W });
var i = n(627968),
    a = n(64700),
    r = n(331322),
    s = n(821609),
    l = n(834730),
    o = n(43990),
    d = n(17928),
    c = n(554146),
    _ = n(922016),
    E = n(192308),
    u = n(932001),
    A = n(625180),
    I = n(363195),
    T = n(829219),
    h = n(859703),
    S = n(507107),
    N = n(759366),
    f = n(245853),
    p = n(838077),
    m = n(890687),
    O = n(590202),
    C = n(639214),
    R = n(43105),
    g = n(985018);
function L(e) {
    let { onDismiss: t, onCTAClick: n, targetElementRef: a } = e;
    return (0, i.jsx)(R.A, {
        actions: [{ text: g.intl.string(g.t["8+TMEJ"]), variant: "primary", onClick: n }],
        body: g.intl.string(g.t.tP7w6c),
        caretConfig: { align: "start" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/85af57d01e12bec0f5b196f62e9898fad51b8a18681f6b90723856bae7b10363.svg",
        },
        onRequestClose: t,
        position: "bottom",
        size: "lg",
        targetElementRef: a,
        title: g.intl.string(g.t.y0cRrO),
    });
}
var D = n(305866),
    b = n(939249),
    M = n(789645),
    P = n(915089),
    U = n(18437),
    v = n(453384),
    y = n(646764),
    G = n(545986),
    w = n(571038);
function x(e) {
    let { quest: t, questDescription: n, completedRatio: r, minimizeFrame: o, onClose: d } = e,
        c = (0, P.GV)(),
        _ = (0, U.Ut)(),
        E = a.useCallback(() => {
            _({
                questId: t.id,
                questContent: S.uF.RUNNING_ACTIVITY,
                questContentCTA: O.Cy.LEARN_MORE,
                sourceQuestContent: S.uF.RUNNING_ACTIVITY,
            }),
                (0, G.navigateToQuestHome)({ fromContent: S.uF.RUNNING_ACTIVITY, questId: t.id }),
                o(),
                d();
        }, [t.id, _, o, d]);
    return (0, i.jsxs)(D.l, {
        className: w.kL,
        "aria-labelledby": c,
        children: [
            (0, i.jsxs)("div", {
                className: w.wx,
                children: [
                    (0, i.jsx)(l.E, {
                        id: c,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: g.intl.formatToPlainString(g.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(b.D, {
                        className: w.b,
                        "aria-label": g.intl.string(g.t.cpT0Cq),
                        onClick: d,
                        children: (0, i.jsx)(M.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: w.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(v.A, {
                            size: 48,
                            percentComplete: r,
                            children: (0, i.jsx)(y.A, {
                                fullWidth: !0,
                                quest: t,
                                questContent: S.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: S.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
                        }),
                    }),
                    (0, i.jsx)(l.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(s.$, {
                autoFocus: !0,
                fullWidth: !0,
                text: g.intl.string(g.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: E,
            }),
        ],
    });
}
var V = n(713081),
    B = n(73473),
    F = n(654487),
    k = n(49999),
    H = n(165610),
    j = n(200254);
function Y(e) {
    let { quest: t, applicationId: n } = e,
        o = (0, m.fc)(t),
        d = (0, p.mU)({
            quest: t,
            taskDetails: o,
            location: F.rE.QUEST_ACTIVITY_HEADER,
            questContent: S.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: S.uF.RUNNING_ACTIVITY,
        }),
        [E, I] = a.useState(!1),
        h = a.useRef(null),
        N = a.useRef(null),
        [f, C] = (0, u.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: R, completedRatioDisplay: D, percentComplete: b } = (0, m.O9)(t, !0),
        M = a.useCallback(() => {
            A.A.updateFrameLayoutMode({ applicationId: n, layoutMode: H.y.PIP });
        }, [n]),
        P = t.userStatus?.enrolledAt != null,
        U = a.useCallback(() => {
            (0, T.Oy)(t.id, {
                questContent: S.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: O.Cy.ACCEPT_QUEST,
                sourceQuestContent: S.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: j.wx,
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: [
                    (0, i.jsxs)(r.B, {
                        className: j.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: j.v0,
                                ref: h,
                                children: (0, i.jsx)(y.A, {
                                    quest: t,
                                    questContent: S.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: S.uF.RUNNING_ACTIVITY,
                                    className: j.Qf,
                                    autoplay: E,
                                }),
                            }),
                            (0, i.jsx)(_.Y, {
                                targetElementRef: N,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(x, {
                                        quest: t,
                                        questDescription: d,
                                        completedRatio: R,
                                        minimizeFrame: M,
                                        onClose: n,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)(s.$, {
                                        text: g.intl.formatToPlainString(g.t.EAYZAr, {
                                            questName: t.config.messages.questName,
                                        }),
                                        variant: "secondary",
                                        size: "sm",
                                        buttonRef: N,
                                        ...e,
                                    }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(r.B, {
                        className: j.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: j.L$,
                                children: [
                                    (0, i.jsx)(l.E, { variant: "text-sm/semibold", color: "text-strong", children: D }),
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
                            P
                                ? (0, i.jsx)(V.A, {
                                      quest: t,
                                      questContent: S.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: S.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, i.jsx)(s.$, {
                                      variant: "primary",
                                      text: g.intl.string(g.t.l7E81v),
                                      size: "sm",
                                      onClick: U,
                                  }),
                        ],
                    }),
                ],
            }),
            null != f &&
                P &&
                (0, i.jsx)(L, {
                    onDismiss: () => C(k.i.USER_DISMISS),
                    onCTAClick: () => C(k.i.TAKE_ACTION),
                    targetElementRef: h,
                }),
        ],
    });
}
function W(e) {
    let { applicationId: t } = e,
        r = (0, d.bG)([h.A], () => h.A.quests),
        s = (0, d.bG)([I.A], () => I.A.theme),
        l = a.useMemo(() => (0, C.jm)(r, t, !0)[0], [r, t]),
        { enabled: c, showSkipButton: _ } = f.Ym.useConfig({ location: F.rE.QUEST_ACTIVITY_HEADER }),
        u = (0, d.bG)([N.A], () => N.A.getState().autoEnroll),
        A = l?.id,
        T = (0, d.bG)([N.A], () => N.A.isDismissed(A), [A]);
    return (a.useEffect(() => {
        !c ||
            null == l ||
            l.userStatus?.enrolledAt != null ||
            u ||
            T ||
            (0, E.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: l, showSkipButton: _ });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [c, l, u, T, _]),
    null != l && c)
        ? (0, i.jsx)(o.N, {
              theme: s,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(B.R, {
                          questOrQuests: l,
                          questContent: S.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: S.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(Y, { quest: l, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
