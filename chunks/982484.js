n.d(t, { A: () => K });
var i = n(627968),
    l = n(64700),
    s = n(331322),
    r = n(821609),
    a = n(834730),
    o = n(43990),
    d = n(17928),
    c = n(554146),
    u = n(922016),
    h = n(192308),
    A = n(932001),
    _ = n(625180),
    g = n(363195),
    m = n(829219),
    p = n(859703),
    f = n(507107),
    E = n(759366),
    C = n(245853),
    x = n(838077),
    I = n(890687),
    b = n(590202),
    S = n(639214),
    N = n(43105),
    T = n(985018);
function v(e) {
    let { onDismiss: t, onCTAClick: n, targetElementRef: l } = e;
    return (0, i.jsx)(N.A, {
        actions: [{ text: T.intl.string(T.t["8+TMEJ"]), variant: "primary", onClick: n }],
        body: T.intl.string(T.t.tP7w6c),
        caretConfig: { align: "start" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/85af57d01e12bec0f5b196f62e9898fad51b8a18681f6b90723856bae7b10363.svg",
        },
        onRequestClose: t,
        position: "bottom",
        size: "lg",
        targetElementRef: l,
        title: T.intl.string(T.t.y0cRrO),
    });
}
var y = n(305866),
    R = n(939249),
    j = n(789645),
    L = n(915089),
    O = n(18437),
    G = n(453384),
    M = n(646764),
    D = n(545986),
    U = n(571038);
function P(e) {
    let { quest: t, questDescription: n, completedRatio: s, minimizeFrame: o, onClose: d } = e,
        c = (0, L.GV)(),
        u = (0, O.Ut)(),
        h = l.useCallback(() => {
            u({
                questId: t.id,
                questContent: f.uF.RUNNING_ACTIVITY,
                questContentCTA: b.Cy.LEARN_MORE,
                sourceQuestContent: f.uF.RUNNING_ACTIVITY,
            }),
                (0, D.navigateToQuestHome)({ fromContent: f.uF.RUNNING_ACTIVITY, questId: t.id }),
                o(),
                d();
        }, [t.id, u, o, d]);
    return (0, i.jsxs)(y.l, {
        className: U.kL,
        "aria-labelledby": c,
        children: [
            (0, i.jsxs)("div", {
                className: U.wx,
                children: [
                    (0, i.jsx)(a.E, {
                        id: c,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: T.intl.formatToPlainString(T.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(R.D, {
                        className: U.b,
                        "aria-label": T.intl.string(T.t.cpT0Cq),
                        onClick: d,
                        children: (0, i.jsx)(j.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: U.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(G.A, {
                            size: 48,
                            percentComplete: s,
                            children: (0, i.jsx)(M.A, {
                                fullWidth: !0,
                                quest: t,
                                questContent: f.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: f.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
                        }),
                    }),
                    (0, i.jsx)(a.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(r.$, {
                autoFocus: !0,
                fullWidth: !0,
                text: T.intl.string(T.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: h,
            }),
        ],
    });
}
var w = n(713081),
    k = n(73473),
    V = n(654487),
    B = n(49999),
    H = n(165610),
    F = n(200254);
function W(e) {
    let { quest: t, applicationId: n } = e,
        o = (0, I.fc)(t),
        d = (0, x.mU)({
            quest: t,
            taskDetails: o,
            location: V.rE.QUEST_ACTIVITY_HEADER,
            questContent: f.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: f.uF.RUNNING_ACTIVITY,
        }),
        [h, g] = l.useState(!1),
        p = l.useRef(null),
        E = l.useRef(null),
        [C, S] = (0, A.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: N, completedRatioDisplay: y, percentComplete: R } = (0, I.O9)(t, !0),
        j = l.useCallback(() => {
            _.A.updateFrameLayoutMode({ applicationId: n, layoutMode: H.y.PIP });
        }, [n]),
        L = t.userStatus?.enrolledAt != null,
        O = l.useCallback(() => {
            (0, m.Oy)(t.id, {
                questContent: f.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: b.Cy.ACCEPT_QUEST,
                sourceQuestContent: f.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: F.wx,
                onMouseEnter: () => g(!0),
                onMouseLeave: () => g(!1),
                children: [
                    (0, i.jsxs)(s.B, {
                        className: F.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: F.v0,
                                ref: p,
                                children: (0, i.jsx)(M.A, {
                                    quest: t,
                                    questContent: f.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: f.uF.RUNNING_ACTIVITY,
                                    className: F.Qf,
                                    autoplay: h,
                                }),
                            }),
                            (0, i.jsx)(u.Y, {
                                targetElementRef: E,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(P, {
                                        quest: t,
                                        questDescription: d,
                                        completedRatio: N,
                                        minimizeFrame: j,
                                        onClose: n,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)(r.$, {
                                        text: T.intl.formatToPlainString(T.t.EAYZAr, {
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
                    (0, i.jsxs)(s.B, {
                        className: F.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: F.L$,
                                children: [
                                    (0, i.jsx)(a.E, { variant: "text-sm/semibold", color: "text-strong", children: y }),
                                    (0, i.jsxs)("div", {
                                        className: F.hr,
                                        children: [
                                            (0, i.jsx)("div", { className: F.SX, style: { width: `${R}%` } }),
                                            (0, i.jsxs)("div", {
                                                className: F.tu,
                                                style: { width: `${R}%` },
                                                children: [
                                                    (0, i.jsx)("div", { className: F.SZ }),
                                                    (0, i.jsx)("div", { className: F.SZ }),
                                                    (0, i.jsx)("div", { className: F.SZ }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            L
                                ? (0, i.jsx)(w.A, {
                                      quest: t,
                                      questContent: f.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: f.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, i.jsx)(r.$, {
                                      variant: "primary",
                                      text: T.intl.string(T.t.l7E81v),
                                      size: "sm",
                                      onClick: O,
                                  }),
                        ],
                    }),
                ],
            }),
            null != C &&
                L &&
                (0, i.jsx)(v, {
                    onDismiss: () => S(B.i.USER_DISMISS),
                    onCTAClick: () => S(B.i.TAKE_ACTION),
                    targetElementRef: p,
                }),
        ],
    });
}
function K(e) {
    let { applicationId: t } = e,
        s = (0, d.bG)([p.A], () => p.A.quests),
        r = (0, d.bG)([g.A], () => g.A.theme),
        a = l.useMemo(() => (0, S.jm)(s, t, !0)[0], [s, t]),
        { enabled: c, showSkipButton: u } = C.Ym.useConfig({ location: V.rE.QUEST_ACTIVITY_HEADER }),
        A = (0, d.bG)([E.A], () => E.A.getState().autoEnroll),
        _ = a?.id,
        m = (0, d.bG)([E.A], () => E.A.isDismissed(_), [_]);
    return (l.useEffect(() => {
        !c ||
            null == a ||
            a.userStatus?.enrolledAt != null ||
            A ||
            m ||
            (0, h.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: a, showSkipButton: u });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [c, a, A, m, u]),
    null != a && c)
        ? (0, i.jsx)(o.N, {
              theme: r,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(k.R, {
                          questOrQuests: a,
                          questContent: f.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: f.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(W, { quest: a, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
