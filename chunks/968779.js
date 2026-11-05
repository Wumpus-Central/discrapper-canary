i.d(t, { default: () => el });
var n = i(477900),
    s = i(582128),
    l = i(506988),
    a = i(61387),
    r = i(189213),
    o = i(935462),
    c = i(834730),
    d = i(289873),
    u = i(280905),
    C = i(323889),
    m = i(821609),
    E = i(366010),
    h = i(534514),
    N = i(736653),
    x = i(870273),
    I = i(760914),
    T = i(971649),
    g = i(557637),
    _ = i(918338),
    v = i(491145),
    A = i(818348),
    p = i(792996),
    f = i(733908);
function j(e) {
    let { quest: t } = e,
        i = (0, N.Ay)(),
        s = (0, E.M)(i) ? A.NJ.DARK : A.NJ.LIGHT,
        l = (0, I.tW)(t, I.fY.LOGO_TYPE, s);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(g._M, {
                id: "SplitQuestModal_hero",
                children: (e) =>
                    (0, n.jsx)(_.A, {
                        quest: t,
                        imageSize: (0, _.k)(),
                        variant: "modalPanel",
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, n.jsx)("div", {
                className: f.Lt,
                children: (0, n.jsx)(g._M, {
                    id: "SplitQuestModal_logotype",
                    children: (e) =>
                        (0, n.jsx)("img", {
                            ref: e,
                            className: f.a$,
                            alt: p.intl.formatToPlainString(p.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: l.url,
                        }),
                }),
            }),
        ],
    });
}
function M(e) {
    let { quest: t, title: i, subtitle: s } = e,
        l = (0, N.Ay)(),
        a = (0, E.M)(l) ? A.NJ.DARK : A.NJ.LIGHT;
    return (0, n.jsxs)("div", {
        className: f.Th,
        children: [
            (0, n.jsx)(g._M, {
                id: "SplitQuestModal_gameTile",
                children: (e) =>
                    (0, n.jsx)("img", {
                        ref: e,
                        className: f.rw,
                        alt: p.intl.formatToPlainString(p.t.rtm15P, { name: t.config.messages.gameTitle }),
                        src: (0, I.tW)(t, I.fY.GAME_TILE, a).url,
                    }),
            }),
            (0, n.jsxs)("div", {
                className: f.Ly,
                children: [
                    (0, n.jsx)(h.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: f.fx,
                        children: i,
                    }),
                    (0, n.jsx)(c.E, { variant: "body-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { quest: t, questContent: i, sourceQuestContent: s, location: l, preCtaClick: a } = e,
        r = (0, T.wW)(),
        o = (0, T.go)(),
        c = (0, x.Jf)({ quest: t, questContent: i, getImpressionId: r, preCtaClick: a, sourceQuestContent: s }),
        d = (0, v.A)(t, { impressionId: o, sourceQuestContent: s }, a) ?? c;
    return (0, n.jsxs)("div", {
        className: f.kL,
        children: [
            (0, n.jsxs)(g.y5, {
                source: l,
                adCreativeId: t.id,
                adCreativeType: C.p.QUEST,
                isPreview: t.preview,
                children: [
                    (0, n.jsx)(j, { quest: t }),
                    (0, n.jsx)(M, { quest: t, title: d.title, subtitle: d.subtitle }),
                ],
            }),
            (0, n.jsx)("div", {
                className: f.z1,
                children: (0, n.jsx)(m.$, {
                    fullWidth: !0,
                    variant: d.ctaVariant,
                    size: "md",
                    text: d.ctaText,
                    onClick: d.onClickCta,
                }),
            }),
        ],
    });
}
var L = i(815021),
    S = i(408278),
    k = i(173936),
    b = i(590202),
    q = i(814793),
    G = i(201805),
    O = i(88561);
function Q(e) {
    let { quest: t, questContent: i, sourceQuestContent: l, onClose: a } = e,
        r = (0, q.E0)(t.config),
        o = (0, G.Lk)({
            isShareable: r,
            questId: t.id,
            trackingCtx: s.useMemo(
                () => ({ content: i, ctaContent: b.Cy.COPY_QUEST_URL, sourceQuestContent: l }),
                [i, l],
            ),
        });
    return (0, n.jsxs)("div", {
        className: O.n,
        children: [
            r &&
                (0, n.jsx)(S.K, {
                    size: "sm",
                    variant: "overlay-secondary",
                    icon: k.LinkIcon,
                    "aria-label": p.intl.string(p.t.WqhZss),
                    onClick: o,
                }),
            (0, n.jsx)(L.J, { size: "sm", variant: "overlay-secondary", onClick: a }),
        ],
    });
}
var U = i(436511);
function D(e) {
    let { onClose: t, transitionState: i, title: s, description: l } = e;
    return (0, n.jsx)(r.a, {
        size: "md",
        title: s,
        actions: [{ variant: "primary", text: p.intl.string(p.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: i,
        children: (0, n.jsx)(c.E, { variant: "body-md/medium", color: "text-subtle", children: l }),
    });
}
function W(e) {
    let {
        quest: t,
        questContent: i,
        sourceQuestContent: s,
        ariaLabel: l,
        transitionState: a,
        onClose: r,
        leftContent: c,
        preCtaClick: C,
        isContentLoading: m,
        contentHasError: E,
        errorTitle: h,
        errorDescription: N,
        location: x,
    } = e;
    return E
        ? (0, n.jsx)(D, {
              onClose: r,
              transitionState: a,
              title: h ?? p.intl.string(p.t["9cfXek"]),
              description: N ?? p.intl.string(p.t.nYQyEg),
          })
        : (0, n.jsx)(u.R, {
              questOrQuests: t,
              questContent: i,
              sourceQuestContent: s,
              children: (e) =>
                  (0, n.jsxs)(o.EO, {
                      "data-migration-pending": !0,
                      transitionState: a,
                      size: o.rI.DYNAMIC,
                      className: U.yl,
                      "aria-label": l,
                      parentComponent: "QuestSplitModalBase",
                      children: [
                          (0, n.jsx)(Q, { quest: t, questContent: i, sourceQuestContent: s, onClose: r }),
                          m ? (0, n.jsx)(d.y, { className: U.u1, type: d.y.Type.WANDERING_CUBES }) : null,
                          (0, n.jsx)("div", {
                              ref: e,
                              className: U.BM,
                              style: { visibility: m ? "hidden" : "visible" },
                              children: (0, n.jsxs)("div", {
                                  className: U.jE,
                                  children: [
                                      (0, n.jsx)("div", { className: U._H, children: c }),
                                      (0, n.jsx)("div", {
                                          className: U.xK,
                                          children: (0, n.jsx)(y, {
                                              quest: t,
                                              questContent: i,
                                              sourceQuestContent: s,
                                              location: x,
                                              preCtaClick: C,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
          });
}
var H = i(412703),
    P = i(928264),
    R = i(141628),
    z = i(975807),
    B = i(438457),
    J = i(144779),
    K = i(793574),
    Y = i(409626),
    w = i(692969),
    F = i(889558),
    V = i(792620),
    Z = i(691885),
    X = i(506425);
function $(e) {
    let { heading: t, subtitle: i, methodSelect: s, ctaButton: l, children: a } = e;
    return (0, n.jsxs)("div", {
        className: X.kL,
        children: [
            (0, n.jsx)(h.D, { variant: "heading-xl/semibold", color: "text-strong", className: X.DD, children: t }),
            (0, n.jsx)(c.E, { variant: "body-sm/medium", color: "text-subtle", className: X.VA, children: i }),
            null != s &&
                s.length > 0 &&
                s.map(
                    (e) =>
                        !1 !== e.visible &&
                        (0, n.jsx)(
                            "div",
                            {
                                className: X.oL,
                                children: (0, n.jsx)(Z.l, {
                                    label: e.label,
                                    hideLabel: !0,
                                    placeholder: e.placeholder,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                    value: e.value ?? void 0,
                                    onSelectionChange: (t) => {
                                        e.onSelectionChange(t);
                                    },
                                    options: e.options,
                                    disabled: e.disabled,
                                }),
                            },
                            e.label,
                        ),
                ),
            a,
            null != l &&
                (0, n.jsx)("div", {
                    className: X.WJ,
                    children: (0, n.jsx)(m.$, {
                        fullWidth: !0,
                        variant: "primary",
                        size: "md",
                        text: l.text,
                        loading: l.loading,
                        icon: l.icon,
                        onClick: () => {
                            l.onClick();
                        },
                    }),
                }),
        ],
    });
}
var ee = i(284846),
    et = i(976019),
    ei = i(221596),
    en = i(189955);
function es(e) {
    let { quest: t, sourceQuestContent: i } = e,
        { hasAlreadyLinked: a, canStartAuthorization: r, startAuthorization: o, fetched: c } = (0, ee.U)(t),
        d = (0, T.wW)(),
        u = (0, V.xc)(t),
        m = (0, w.A)({
            applicationId: u,
            location: ei.rE.QUEST_INSTRUCTIONS,
            source: Y.GameProfileSources.QuestInGameModal,
        }),
        [E, h] = s.useState(null),
        N = c && !a && r,
        x = N ? E : ei.qh.IN_GAME,
        I = c && (null != x || a),
        g = p.intl.string(!0 === a ? p.t["2+opCy"] : p.t.dp0CUb),
        _ = (function () {
            if (!0 !== a) return p.intl.string(p.t.Z1T4zl);
            let e = t.config.messages.gameTitle;
            return null != m
                ? p.intl.format(p.t.X8hBDz, { gameTitle: e, onClickGameTitle: m })
                : p.intl.format(p.t.u3mdpP, { gameTitle: e });
        })(),
        v = {
            label: p.intl.string(p.t.okJIPY),
            placeholder: p.intl.string(p.t.okJIPY),
            options: [
                {
                    id: ei.qh.IN_GAME,
                    value: ei.qh.IN_GAME,
                    label: p.intl.string(p.t["4PWzD7"]),
                    leading: R.ExperimentalGameControllerLinkIcon,
                },
                { id: ei.qh.WEB, value: ei.qh.WEB, label: p.intl.string(p.t.CM8LUl), leading: P.BrowserLinkIcon },
            ],
            value: E,
            onSelectionChange: (e) => {
                if (e !== ei.qh.IN_GAME && e !== ei.qh.WEB) return void h(null);
                h(e);
                let n = e === ei.qh.IN_GAME ? b.Cy.SELECT_IN_GAME_AUTH_METHOD : b.Cy.SELECT_WEB_AUTH_METHOD;
                (0, B.r)({
                    type: J.F.CLICK_INTERNAL,
                    adCreativeType: C.p.QUEST,
                    adCreativeId: t.id,
                    questContentCTA: n,
                    surfaceId: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                    sourceQuestContent: i,
                    impressionId: d(),
                });
            },
        };
    return (0, n.jsx)($, {
        heading: g,
        subtitle: _,
        methodSelect: N ? [v] : void 0,
        ctaButton: (function () {
            if (!c || !0 === a || null == x) return;
            if (x === ei.qh.WEB)
                return {
                    text: p.intl.string(p.t.T0zC77),
                    onClick: () => {
                        ((0, B.r)({
                            type: J.F.CLICK_INTERNAL,
                            adCreativeType: C.p.QUEST,
                            adCreativeId: t.id,
                            questContentCTA: b.Cy.START_WEB_AUTHORIZATION,
                            surfaceId: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                            sourceQuestContent: i,
                            impressionId: d(),
                        }),
                            o({ analyticsLocations: [K.A.QUEST_IN_GAME_MODAL_CONNECT] }));
                    },
                };
            let e = t.config.taskConfigV2.tasks[H.n.ACHIEVEMENT_IN_GAME];
            if (null == e) return;
            let n = e.accountLinkInstructions;
            return {
                text: p.intl.string(p.t.KgYvrZ),
                onClick: () =>
                    (0, F.h)({
                        href: n,
                        onConfirm: () => {
                            ((0, B.r)({
                                type: J.F.CLICK_INTERNAL,
                                adCreativeType: C.p.QUEST,
                                adCreativeId: t.id,
                                questContentCTA: b.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                surfaceId: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                sourceQuestContent: i,
                                impressionId: d(),
                            }),
                                (0, z.A)(n));
                        },
                    }),
            };
        })(),
        children:
            !0 === I &&
            (0, n.jsx)("div", {
                className: en.X,
                children: (0, n.jsx)(et.A, {
                    quest: t,
                    hasAlreadyLinked: a,
                    onClickGameTitle: m,
                    selectedAuthMethod: x,
                }),
            }),
    });
}
let el = function (e) {
    let { initialQuest: t, sourceQuestContent: i, transitionState: s, onClose: r } = e,
        o = (0, a.C5)(t.id) ?? t;
    return (0, n.jsx)(W, {
        quest: o,
        questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: i,
        ariaLabel: p.intl.string(p.t.dp0CUb),
        transitionState: s,
        onClose: r,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, n.jsx)(es, { quest: o, sourceQuestContent: i }),
        location: ei.rE.INGAME_CONNECTION_MODAL,
    });
};
