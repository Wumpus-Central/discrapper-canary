s.r(t), s.d(t, { default: () => Z });
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
    m = s(131607),
    I = s(625180),
    N = s(363195),
    T = s(396813),
    A = s(859703),
    x = s(24001),
    E = s(759366),
    p = s(3738),
    h = s(309593),
    j = s(590202),
    _ = s(639214),
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
    z = s(400838);
function L(e) {
    let { quest: t, questDescription: s, completedRatio: a, minimizeFrame: o, onClose: u } = e,
        c = (0, F.GV)(),
        d = (0, V.Ut)(),
        C = (0, Q.go)(),
        m = i.useCallback(() => {
            (0, Y.E5)(Y.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_header_popout")
                ? (0, S.r)({
                      type: U.F.CLICK_INTERNAL,
                      adCreativeType: g.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: j.Cy.LEARN_MORE,
                      surfaceId: x.uF.RUNNING_ACTIVITY,
                      sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                      impressionId: C,
                  })
                : d({
                      questId: t.id,
                      questContent: x.uF.RUNNING_ACTIVITY,
                      questContentCTA: j.Cy.LEARN_MORE,
                      sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                  }),
                (0, D.mA)({ fromContent: x.uF.RUNNING_ACTIVITY, questId: t.id }),
                o(),
                u();
        }, [t.id, d, C, o, u]);
    return (0, n.jsxs)(y.l, {
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
                        children: R.intl.formatToPlainString(R.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, n.jsx)(q.D, {
                        className: z.b,
                        "aria-label": R.intl.string(R.t.cpT0Cq),
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
                text: R.intl.string(R.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: m,
            }),
        ],
    });
}
var M = s(262254),
    P = s(73473),
    w = s(190107),
    O = s(49999),
    H = s(165610),
    $ = s(614758);
function K(e) {
    let { quest: t, ...s } = e,
        o = (0, h.fc)(t),
        u = (0, p.mU)({
            quest: t,
            taskDetails: o,
            location: w.rE.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: x.uF.RUNNING_ACTIVITY,
        }),
        [C, N] = i.useState(!1),
        A = i.useRef(null),
        E = i.useRef(null),
        [_, f] = (0, m.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: g, completedRatioDisplay: y, percentComplete: q } = (0, h.O9)(t, !0),
        b = i.useCallback(() => {
            "frame" === s.type && I.A.updateFrameLayoutMode({ frameId: s.frameId, layoutMode: H.y0.PIP });
        }, [s]),
        S = t.userStatus?.enrolledAt != null,
        U = i.useCallback(() => {
            (0, T.Oy)(t.id, {
                questContent: x.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: j.Cy.ACCEPT_QUEST,
                sourceQuestContent: x.uF.RUNNING_ACTIVITY,
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
                                        text: R.intl.formatToPlainString(R.t.EAYZAr, {
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
                            S
                                ? (0, n.jsx)(M.A, {
                                      quest: t,
                                      questContent: x.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, n.jsx)(l.$, {
                                      variant: "primary",
                                      text: R.intl.string(R.t.l7E81v),
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
                        return f(O.i.USER_DISMISS);
                    },
                    onCTAClick: function () {
                        return f(O.i.TAKE_ACTION);
                    },
                    targetElementRef: A,
                }),
        ],
    });
}
function Z(e) {
    let t = (0, u.bG)([A.A], () => A.A.quests),
        a = (0, u.bG)([N.A], () => N.A.theme),
        l = i.useMemo(() => (0, _.jm)(t, e.applicationId, !0)[0], [t, e.applicationId]),
        r = (0, u.bG)([E.A], () => E.A.getState().autoEnroll),
        c = l?.id,
        d = (0, u.bG)([E.A], () => E.A.isDismissed(c), [c]);
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
                      children: (0, n.jsx)(P.R, {
                          questOrQuests: l,
                          questContent: x.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, n.jsx)(K, { ...e, quest: l }),
                      }),
                  }),
          });
}
