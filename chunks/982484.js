(s.r(t), s.d(t, { default: () => Z }));
var n = s(477900),
    i = s(582128),
    a = s(331322),
    l = s(821609),
    r = s(834730),
    o = s(43990),
    u = s(17928),
    c = s(554146),
    d = s(922016),
    C = s(192308),
    I = s(131607),
    m = s(625180),
    N = s(363195),
    T = s(396813),
    A = s(859703),
    E = s(738822),
    x = s(759366),
    _ = s(3738),
    p = s(866157),
    h = s(590202),
    j = s(639214),
    f = s(43105),
    R = s(375708);
function v(e) {
    let { onDismiss: t, onCTAClick: s, targetElementRef: i } = e;
    return (0, n.jsx)(f.A, {
        actions: [{ text: R.intl.string(R.t["8+TMEJ"]), variant: "primary", onClick: s }],
        body: R.intl.string(R.t.tP7w6c),
        caretConfig: { align: "start" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/03bf41f59ada6198fc679ac9b630cf4491ee96e1a4db067d8e8459223f0fe1ca.svg",
        },
        onRequestClose: t,
        position: "bottom",
        size: "lg",
        targetElementRef: i,
        title: R.intl.string(R.t.y0cRrO),
    });
}
var g = s(323889),
    y = s(305866),
    q = s(939249),
    S = s(789645),
    U = s(274670),
    b = s(144779),
    Y = s(915089),
    V = s(104886),
    F = s(18437),
    Q = s(971649),
    G = s(453384),
    k = s(62405),
    D = s(617986),
    z = s(190107),
    L = s(621485);
function M(e) {
    let { quest: t, questDescription: s, completedRatio: a, minimizeFrame: o, onClose: u } = e,
        c = (0, Y.GV)(),
        d = (0, F.Ut)(),
        C = (0, Q.go)(),
        I = i.useCallback(() => {
            ((0, V.E5)(V.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_header_popout")
                ? (0, U.r)({
                      type: b.F.CLICK_INTERNAL,
                      adCreativeType: g.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: h.Cy.LEARN_MORE,
                      surfaceId: E.uF.RUNNING_ACTIVITY,
                      sourceQuestContent: E.uF.RUNNING_ACTIVITY,
                      impressionId: C,
                  })
                : d({
                      questId: t.id,
                      questContent: E.uF.RUNNING_ACTIVITY,
                      questContentCTA: h.Cy.LEARN_MORE,
                      sourceQuestContent: E.uF.RUNNING_ACTIVITY,
                  }),
                (0, D.mA)({ fromContent: E.uF.RUNNING_ACTIVITY, questId: t.id }),
                o(),
                u());
        }, [t.id, d, C, o, u]);
    return (0, n.jsxs)(y.l, {
        className: L.kL,
        "aria-labelledby": c,
        children: [
            (0, n.jsxs)("div", {
                className: L.wx,
                children: [
                    (0, n.jsx)(r.E, {
                        id: c,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: R.intl.formatToPlainString(R.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, n.jsx)(q.D, {
                        className: L.b,
                        "aria-label": R.intl.string(R.t.cpT0Cq),
                        onClick: u,
                        children: (0, n.jsx)(S.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: L.rf,
                children: [
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(G.A, {
                            size: 48,
                            percentComplete: a,
                            children: (0, n.jsx)(k.A, {
                                fullWidth: !0,
                                quest: t,
                                location: z.rE.QUEST_ACTIVITY_HEADER,
                                questContent: E.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: E.uF.RUNNING_ACTIVITY,
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
                text: R.intl.string(R.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: I,
            }),
        ],
    });
}
var P = s(262254),
    w = s(73473),
    H = s(49999),
    O = s(165610),
    $ = s(391803);
function K(e) {
    let { quest: t, ...s } = e,
        o = (0, p.fc)(t),
        u = (0, _.mU)({
            quest: t,
            taskDetails: o,
            location: z.rE.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: E.uF.RUNNING_ACTIVITY,
        }),
        [C, N] = i.useState(!1),
        A = i.useRef(null),
        x = i.useRef(null),
        [j, f] = (0, I.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: g, completedRatioDisplay: y, percentComplete: q } = (0, p.O9)(t, !0),
        S = i.useCallback(() => {
            "frame" === s.type && m.A.updateFrameLayoutMode({ frameId: s.frameId, layoutMode: O.y0.PIP });
        }, [s]),
        U = t.userStatus?.enrolledAt != null,
        b = i.useCallback(() => {
            (0, T.Oy)(t.id, {
                questContent: E.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: h.Cy.ACCEPT_QUEST,
                sourceQuestContent: E.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: $.wx,
                onMouseEnter: () => N(!0),
                onMouseLeave: () => N(!1),
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
                                    location: z.rE.QUEST_ACTIVITY_HEADER,
                                    questContent: E.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: E.uF.RUNNING_ACTIVITY,
                                    className: $.Qf,
                                    autoplay: C,
                                }),
                            }),
                            (0, n.jsx)(d.Y, {
                                targetElementRef: x,
                                renderPopout: (e) => {
                                    let { closePopout: s } = e;
                                    return (0, n.jsx)(M, {
                                        quest: t,
                                        questDescription: u,
                                        completedRatio: g,
                                        minimizeFrame: S,
                                        onClose: s,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, n.jsx)(l.$, {
                                        text: R.intl.formatToPlainString(R.t.EAYZAr, {
                                            questName: t.config.messages.questName,
                                        }),
                                        variant: "secondary",
                                        size: "sm",
                                        buttonRef: x,
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
                                    (0, n.jsx)(r.E, { variant: "text-sm/semibold", color: "text-strong", children: y }),
                                    (0, n.jsxs)("div", {
                                        className: $.hr,
                                        children: [
                                            (0, n.jsx)("div", { className: $.SX, style: { width: `${q}%` } }),
                                            (0, n.jsxs)("div", {
                                                className: $.tu,
                                                style: { width: `${q}%` },
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
                            U
                                ? (0, n.jsx)(P.A, {
                                      quest: t,
                                      questContent: E.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: E.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, n.jsx)(l.$, {
                                      variant: "primary",
                                      text: R.intl.string(R.t.l7E81v),
                                      size: "sm",
                                      onClick: b,
                                  }),
                        ],
                    }),
                ],
            }),
            null != j &&
                U &&
                (0, n.jsx)(v, {
                    onDismiss: function () {
                        return f(H.i.USER_DISMISS);
                    },
                    onCTAClick: function () {
                        return f(H.i.TAKE_ACTION);
                    },
                    targetElementRef: A,
                }),
        ],
    });
}
function Z(e) {
    let t = (0, u.bG)([A.A], () => A.A.quests),
        a = (0, u.bG)([N.A], () => N.A.theme),
        l = i.useMemo(() => (0, j.jm)(t, e.applicationId, !0)[0], [t, e.applicationId]),
        r = (0, u.bG)([x.A], () => x.A.getState().autoEnroll),
        c = l?.id,
        d = (0, u.bG)([x.A], () => x.A.isDismissed(c), [c]);
    return (i.useEffect(() => {
        null == l ||
            l.userStatus?.enrolledAt != null ||
            r ||
            d ||
            (0, C.openModalLazy)(
                async () => {
                    let { default: e } = await s.e("885986").then(s.bind(s, 113273));
                    return (t) => (0, n.jsx)(e, { ...t, quest: l });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [l, r, d]),
    null == l)
        ? null
        : (0, n.jsx)(o.N, {
              theme: a,
              children: (t) =>
                  (0, n.jsx)("div", {
                      className: t,
                      children: (0, n.jsx)(w.R, {
                          questOrQuests: l,
                          questContent: E.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: E.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, n.jsx)(K, { ...e, quest: l }),
                      }),
                  }),
          });
}
