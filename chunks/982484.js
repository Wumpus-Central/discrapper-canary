(s.r(t), s.d(t, { default: () => $ }));
var n = s(477900),
    i = s(582128),
    a = s(17928),
    l = s(554146),
    r = s(331322),
    o = s(265872),
    u = s(821609),
    c = s(834730),
    d = s(192308),
    m = s(43990),
    C = s(131607),
    I = s(625180),
    T = s(363195),
    N = s(396813),
    A = s(859703),
    x = s(738822),
    E = s(759366),
    p = s(3738),
    h = s(77870),
    j = s(590202),
    f = s(639214),
    _ = s(43105),
    R = s(105292);
function v(e) {
    let { onDismiss: t, onCTAClick: s, targetElementRef: i } = e;
    return (0, n.jsx)(_.A, {
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
    b = s(939249),
    q = s(789645),
    S = s(274670),
    U = s(144779),
    Y = s(915089),
    V = s(971649),
    F = s(453384),
    Q = s(62405),
    k = s(617986),
    G = s(190107),
    D = s(621485);
function z(e) {
    let { quest: t, questDescription: s, completedRatio: a, minimizeFrame: l, onClose: r } = e,
        o = (0, Y.GV)(),
        d = (0, V.wW)(),
        m = i.useCallback(() => {
            ((0, S.r)({
                type: U.F.CLICK_INTERNAL,
                adCreativeType: g.p.QUEST,
                adCreativeId: t.id,
                questContentCTA: j.Cy.LEARN_MORE,
                surfaceId: x.uF.RUNNING_ACTIVITY,
                sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                impressionId: d(),
            }),
                (0, k.mA)({ fromContent: x.uF.RUNNING_ACTIVITY, questId: t.id }),
                l(),
                r());
        }, [t.id, d, l, r]);
    return (0, n.jsxs)(y.l, {
        className: D.kL,
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: D.wx,
                children: [
                    (0, n.jsx)(c.E, {
                        id: o,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: R.intl.formatToPlainString(R.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, n.jsx)(b.D, {
                        className: D.b,
                        "aria-label": R.intl.string(R.t.cpT0Cq),
                        onClick: r,
                        children: (0, n.jsx)(q.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: D.rf,
                children: [
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(F.A, {
                            size: 48,
                            percentComplete: a,
                            children: (0, n.jsx)(Q.A, {
                                fullWidth: !0,
                                quest: t,
                                location: G.rE.QUEST_ACTIVITY_HEADER,
                                questContent: x.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
                        }),
                    }),
                    (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            (0, n.jsx)(u.$, {
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
    w = s(657792),
    P = s(49999),
    H = s(165610),
    L = s(391803);
function O(e) {
    let { quest: t, ...s } = e,
        a = (0, h.fc)(t),
        d = (0, p.mU)({
            quest: t,
            taskDetails: a,
            location: G.rE.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: x.uF.RUNNING_ACTIVITY,
        }),
        [m, T] = i.useState(!1),
        A = i.useRef(null),
        E = i.useRef(null),
        [f, _] = (0, C.kn)([l.M.QUEST_ACTIVITY_HEADER_INTRO], { bypassAutoDismiss: !0 }),
        { completedRatio: g, completedRatioDisplay: y, percentComplete: b } = (0, h.O9)(t, !0),
        q = i.useCallback(() => {
            "frame" === s.type && I.A.updateFrameLayoutMode({ frameId: s.frameId, layoutMode: H.y0.PIP });
        }, [s]),
        S = t.userStatus?.enrolledAt != null,
        U = i.useCallback(() => {
            (0, N.Oy)(t.id, {
                questContent: x.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: j.Cy.ACCEPT_QUEST,
                sourceQuestContent: x.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: L.wx,
                onMouseEnter: () => T(!0),
                onMouseLeave: () => T(!1),
                children: [
                    (0, n.jsxs)(r.B, {
                        className: L.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)("div", {
                                className: L.v0,
                                ref: A,
                                children: (0, n.jsx)(Q.A, {
                                    quest: t,
                                    location: G.rE.QUEST_ACTIVITY_HEADER,
                                    questContent: x.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                                    className: L.Qf,
                                    autoplay: m,
                                }),
                            }),
                            (0, n.jsx)(o.Y, {
                                targetElementRef: E,
                                renderPopout: (e) => {
                                    let { closePopout: s } = e;
                                    return (0, n.jsx)(z, {
                                        quest: t,
                                        questDescription: d,
                                        completedRatio: g,
                                        minimizeFrame: q,
                                        onClose: s,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, n.jsx)(u.$, {
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
                    (0, n.jsxs)(r.B, {
                        className: L.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, n.jsxs)("div", {
                                className: L.L$,
                                children: [
                                    (0, n.jsx)(c.E, { variant: "text-sm/semibold", color: "text-strong", children: y }),
                                    (0, n.jsxs)("div", {
                                        className: L.hr,
                                        children: [
                                            (0, n.jsx)("div", { className: L.SX, style: { width: `${b}%` } }),
                                            (0, n.jsxs)("div", {
                                                className: L.tu,
                                                style: { width: `${b}%` },
                                                children: [
                                                    (0, n.jsx)("div", { className: L.SZ }),
                                                    (0, n.jsx)("div", { className: L.SZ }),
                                                    (0, n.jsx)("div", { className: L.SZ }),
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
                                : (0, n.jsx)(u.$, {
                                      variant: "primary",
                                      text: R.intl.string(R.t.l7E81v),
                                      size: "sm",
                                      onClick: U,
                                  }),
                        ],
                    }),
                ],
            }),
            null != f &&
                S &&
                (0, n.jsx)(v, {
                    onDismiss: function () {
                        return _(P.i.USER_DISMISS);
                    },
                    onCTAClick: function () {
                        return _(P.i.TAKE_ACTION);
                    },
                    targetElementRef: A,
                }),
        ],
    });
}
function $(e) {
    let t = (0, a.bG)([A.A], () => A.A.quests),
        l = (0, a.bG)([T.A], () => T.A.theme),
        r = i.useMemo(() => (0, f.jm)(t, e.applicationId, !0)[0], [t, e.applicationId]),
        o = (0, a.bG)([E.A], () => E.A.getState().autoEnroll),
        u = r?.id,
        c = (0, a.bG)([E.A], () => E.A.isDismissed(u), [u]);
    return (i.useEffect(() => {
        null == r ||
            r.userStatus?.enrolledAt != null ||
            o ||
            c ||
            (0, d.openModalLazy)(
                async () => {
                    let { default: e } = await s.e("885986").then(s.bind(s, 113273));
                    return (t) => (0, n.jsx)(e, { ...t, quest: r });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [r, o, c]),
    null == r)
        ? null
        : (0, n.jsx)(m.N, {
              theme: l,
              children: (t) =>
                  (0, n.jsx)("div", {
                      className: t,
                      children: (0, n.jsx)(w.R, {
                          questOrQuests: r,
                          questContent: x.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: x.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, n.jsx)(O, { ...e, quest: r }),
                      }),
                  }),
          });
}
