n.d(t, { Ay: () => eB, sT: () => eK });
var s = n(477900),
    i = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(855986),
    o = n(122760),
    c = n(506988),
    u = n(61387),
    d = n(280905),
    x = n(321503);
(n(134528), n(947204));
var m = n(120692),
    C = n(462887),
    h = n(717421),
    E = n(695366),
    f = n(885574),
    j = n(646514),
    g = n(834730),
    v = n(123292),
    A = n(331322),
    N = n(805251),
    S = n(866665),
    O = n(939249),
    y = n(782134),
    I = n(365199),
    p = n(820081),
    T = n(765671),
    Q = n(736653),
    q = n(152578),
    _ = n(178540),
    L = n(561844),
    w = n(590202),
    b = n(977416),
    D = n(792620),
    M = n(988436),
    P = n(918338),
    U = n(270045),
    R = n(201805),
    k = n(57718),
    H = n(398025),
    z = n(321538),
    K = n(516226),
    F = n(720875),
    B = n(419367),
    G = n(652215),
    V = n(792996),
    X = n(322335);
function W(e) {
    let { quest: t, warningHints: n, isDarkTheme: l, sourceQuestContent: r } = e,
        a = (0, _.O)((e) => e.getErrorHints(t.id)),
        { ref: o, height: c = 0 } = (0, T.Ay)([a]),
        d = t.userStatus?.completedAt != null,
        x = (0, u.Vn)(t),
        { type: C, hints: A } = i.useMemo(
            () =>
                d || x
                    ? { type: 2, hints: [] }
                    : a.length > 0
                      ? { type: 0, hints: a.map((e) => e.message) }
                      : n.length > 0
                        ? { type: 1, hints: n }
                        : { type: 2, hints: [] },
            [a, d, x, n],
        ),
        N = 2 !== C,
        S = (0, h.z)({ opacity: +!!N, height: N ? c : 0, config: B.N }),
        O = 0 === C ? E.CircleErrorIcon : f.CircleInformationIcon,
        y = j.A.unsafe_rawColors.RED_345.css,
        I = 0 === C ? y : l ? j.A.colors.TEXT_DEFAULT : j.A.colors.WHITE;
    return (0, s.jsx)(m.animated.div, {
        style: { height: S.height, opacity: (0, H.a)(S.opacity) },
        children: (0, s.jsxs)("div", {
            ref: o,
            className: X.XZ,
            children: [
                (0, s.jsxs)("div", {
                    className: X.M5,
                    children: [
                        (0, s.jsx)(O, { size: "xs", color: I }),
                        (0, s.jsx)(g.E, {
                            variant: "body-xs/medium",
                            color: l ? "text-muted" : "text-overlay-light",
                            children: A.at(0),
                        }),
                    ],
                }),
                0 === C &&
                    (0, s.jsx)(v.Q, {
                        text: V.intl.string(V.t["yKJi+/"]),
                        onClick: () => (0, M.i)({ quest: t, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "body-sm/semibold",
                    }),
            ],
        }),
    });
}
function $(e) {
    let {
            quest: t,
            isHovering: n,
            isInFeaturedSection: l,
            warningHints: r,
            isVisibleInViewport: a,
            onCtxMenuClose: o,
            onCtxMenuOpen: d,
            onCtxMenuSelect: x,
            sourceQuestContent: m,
        } = e,
        h = (0, D.IO)(t),
        E = (0, Q.Ay)(),
        f = ((0, C.M)(E) ? G.NJ8.DARK : G.NJ8.LIGHT) === G.NJ8.DARK,
        v = (0, u.LS)(t),
        T = t.userStatus?.claimedAt != null,
        _ = (0, u.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        M = t.userStatus?.enrolledAt != null,
        H = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: B } = i.useContext(K.M),
        $ = f ? "text-muted" : "text-overlay-light",
        Y = (0, u.Hv)() && !H,
        J = i.useCallback(() => {
            if (h) {
                if (Y) {
                    ((0, L.Y5)({
                        questId: t.id,
                        questContent: c.uF.QUEST_HOME_DESKTOP,
                        questContentCTA: w.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: m,
                    }),
                        (0, z.FS)());
                    return;
                }
                (0, z.d5)({
                    quest: t,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: m,
                    sourceQuestContentCTA: w.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
            }
        }, [h, t, m, Y]),
        Z = (0, R.UX)(t.id),
        ee = !0 === l || Z,
        et = i.useRef(null);
    return (0, s.jsxs)("div", {
        className: X.kL,
        children: [
            (0, s.jsx)("div", {
                className: X.IC,
                children: (0, s.jsx)(P.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !a,
                    imageSize: { width: 1320, height: 370 },
                    variant: "banner",
                }),
            }),
            (0, s.jsx)("div", { className: X.Lw }),
            (0, s.jsxs)("div", {
                className: X.nX,
                children: [
                    (0, s.jsxs)("div", {
                        className: X.PG,
                        children: [
                            (0, s.jsxs)("div", {
                                className: X.mY,
                                children: [
                                    (ee || t.preview) &&
                                        (0, s.jsxs)(A.B, {
                                            className: X.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ee &&
                                                    !(0, b.Ic)(t) &&
                                                    (0, s.jsx)(N.E, {
                                                        type: { text: V.intl.string(V.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                t.preview &&
                                                    (0, s.jsx)(N.E, {
                                                        type: { text: V.intl.string(V.t.SKNnqq) },
                                                        variant: "primary",
                                                    }),
                                            ],
                                        }),
                                    h &&
                                        (0, s.jsx)(S.m, {
                                            text: H
                                                ? V.intl.string(V.t.YsCuyF)
                                                : M
                                                  ? V.intl.string(V.t["74KqrR"])
                                                  : (0, b.Ic)(t)
                                                    ? V.intl.string(V.t.I6JG46)
                                                    : V.intl.string(V.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, s.jsx)(O.D, {
                                                className: X.iI,
                                                "aria-label": V.intl.string(V.t.RscU7I),
                                                onClick: J,
                                                children: (0, s.jsx)(y.PlayIcon, {
                                                    color: "currentColor",
                                                    className: X.A9,
                                                }),
                                            }),
                                        }),
                                    (0, s.jsx)(U.C, {
                                        onOpen: d,
                                        onClose: o,
                                        onSelect: x,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: m,
                                        returnRef: et,
                                        children: (e) =>
                                            (0, s.jsx)(O.D, {
                                                ...e,
                                                innerRef: et,
                                                className: X.iI,
                                                "aria-label": V.intl.string(V.t.DEoVWZ),
                                                children: (0, s.jsx)(I.MoreHorizontalIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: X.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(F.A, {
                                showPlaceholder: !a,
                                width: 100,
                                height: 30,
                                className: X.Iu,
                                children: (0, s.jsx)(k.Ay, {
                                    className: X.Iu,
                                    logotypeClassName: X.ND,
                                    quest: t,
                                    separatorSpacing: k.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: B,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: X.E_,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: X.O,
                                        children: [
                                            (0, s.jsx)(g.E, {
                                                tag: "span",
                                                className: X.vT,
                                                variant: "body-sm/medium",
                                                color: $,
                                                children: V.intl.string(V.t.VAbKhK),
                                            }),
                                            (0, s.jsx)(q.A, {
                                                className: X.w$,
                                                size: 16,
                                                color: j.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": V.intl.string(V.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, s.jsx)(p.CheckmarkSmallBoldIcon, {
                                                    color: j.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, s.jsx)(g.E, {
                                                className: X.eA,
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: "text-overlay-light",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    v || T
                                        ? null
                                        : (0, s.jsx)(g.E, {
                                              className: X.xK,
                                              variant: "body-sm/medium",
                                              color: $,
                                              children: V.intl.format(V.t["7D8r4F"], { expiryDate: _ }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(W, { quest: t, warningHints: r, isDarkTheme: f, sourceQuestContent: m }),
                ],
            }),
        ],
    });
}
var Y = n(604121),
    J = n(534514),
    Z = n(775602),
    ee = n(409626),
    et = n(106799),
    en = n(287809),
    es = n(914313),
    ei = n(870273),
    el = n(646917),
    er = n(576761),
    ea = n(417404),
    eo = n(117634),
    ec = n(453384),
    eu = n(442734),
    ed = n(639701),
    ex = n(843282),
    em = n(825484),
    eC = n(821609),
    eh = n(31300),
    eE = n(687966),
    ef = n(414499),
    ej = n(971649),
    eg = n(651892),
    ev = n(574112),
    eA = n(814793),
    eN = n(452411),
    eS = n(79545),
    eO = n(221596),
    ey = n(336779);
let eI = [
    {
        value: eO.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: eO.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function ep(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case eO.fO.DESKTOP:
            ((n = (0, s.jsx)(eh.ScreenIcon, {})), (t = V.intl.string(V.t["QXc01+"])));
            break;
        case eO.fO.CONSOLE:
            ((n = (0, s.jsx)(eE.GameControllerIcon, {})), (t = V.intl.string(V.t["8lAfuB"])));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("div", { className: ey.FL, children: [n, t] });
}
function eT(e) {
    let t, n;
    if (0 === e.length) return null;
    switch (e[0].value) {
        case eO.fO.DESKTOP:
            ((n = (0, s.jsx)(eh.ScreenIcon, {})), (t = V.intl.string(V.t.g6Dr44)));
            break;
        case eO.fO.CONSOLE:
            ((n = (0, s.jsx)(eE.GameControllerIcon, {})), (t = V.intl.string(V.t.iyNbj5)));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("span", { className: ey.FL, children: [n, t] });
}
function eQ(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: r,
        } = e,
        { launchInGameActivity: a } = (0, u.zW)(t),
        o = (0, ei.NA)({ quest: t, shortText: !0 });
    return (0, s.jsx)("div", {
        className: ey.qz,
        children: (0, s.jsxs)(em.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(eC.$, {
                    variant: "secondary",
                    icon: t.config.features.includes(eO.Li.CLOUD_GAMING_ACTIVITY)
                        ? ef.CloudIcon
                        : eE.GameControllerIcon,
                    text: o,
                    onClick: a,
                }),
                (0, s.jsx)(eN.A, {
                    quest: t,
                    surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: i,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: r,
                }),
            ],
        }),
    });
}
function eq(e) {
    let { quest: t, content: n, sourceQuestContent: l, fullWidth: r } = e,
        { externalLinkCta: a, handleOpenExternalLink: o } = (function (e) {
            let { quest: t, content: n, sourceQuestContent: s } = e,
                l = (0, ej.wW)();
            return {
                externalLinkCta: (0, eg.wr)(t),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, ev.pu)(t, {
                        content: n,
                        ctaContent: w.Cy.OPEN_GAME_LINK,
                        impressionId: l(),
                        sourceQuestContent: s,
                    });
                }, [t, n, s, l]),
            };
        })({ quest: t, content: n, sourceQuestContent: l });
    return (0, s.jsx)(eC.$, { variant: "secondary", text: a, onClick: o, fullWidth: r });
}
function e_(e) {
    let { quest: t, content: n, sourceQuestContent: i } = e;
    return (0, s.jsx)("div", {
        className: ey.qz,
        children: (0, s.jsx)(eq, { quest: t, content: n, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function eL(e) {
    let {
            quest: t,
            ctaQuestState: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        o = (function (e, t) {
            switch (e) {
                case eS.UA.EXPIRED_CLAIMABLE:
                case eS.UA.EXPIRED:
                case eS.UA.EXPIRED_CLAIMED:
                    return !0;
                case eS.UA.CLAIMED:
                case eS.UA.COMPLETED:
                    return (0, D.vv)(t) || (0, eA.vA)(t);
                case eS.UA.INCOMPLETE:
                case eS.UA.ENROLLED:
                    return (0, D.vv)(t) || (0, eA.vA)(t) || (0, D.I6)(t);
                case eS.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(n, t);
    return (0, s.jsx)("div", {
        className: ey.qz,
        children: (0, s.jsxs)(em.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, s.jsx)(eq, { quest: t, content: i, sourceQuestContent: l }),
                (0, s.jsx)(eN.A, {
                    quest: t,
                    surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: i,
                    analyticsCtxSourceQuestContent: l,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: a,
                }),
            ],
        }),
    });
}
function ew(e) {
    let { quest: t, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: i } = e;
    return (0, s.jsx)("div", {
        className: ey.qz,
        children: (0, s.jsxs)(em.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(eC.$, { variant: "secondary", disabled: !0, text: V.intl.string(V.t["8LKchl"]) }),
                (0, s.jsx)(eC.$, {
                    variant: "primary",
                    onClick: () => (0, z.m6)(t, n, i),
                    text: V.intl.string(V.t.vY9GgG),
                }),
            ],
        }),
    });
}
function eb(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        o = (0, u.fc)(t),
        d = (0, _.O)((e) => e.clearErrorHints),
        [x, m, C] = (0, u.Qo)(t, o),
        h = i.useCallback(
            (e) => {
                (C(e), e === eO.fO.DESKTOP && d(t.id));
            },
            [C, d, t.id],
        );
    return x === c.X0.SELECT
        ? (0, s.jsx)(ex.Pw, {
              className: ey.dd,
              isSelected: () => !1,
              options: eI,
              placeholder: V.intl.string(V.t.drVw4T),
              renderOptionLabel: ep,
              renderOptionValue: eT,
              select: h,
              serialize: (e) => {
                  switch (e) {
                      case eO.fO.DESKTOP:
                          return V.intl.string(V.t["QXc01+"]);
                      case eO.fO.CONSOLE:
                          return V.intl.string(V.t["8lAfuB"]);
                      default:
                          return V.intl.string(V.t.WLDKSb);
                  }
              },
              size: "sm",
              "data-migration-pending": !0,
          })
        : m.length > 1
          ? (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)("div", {
                        className: ey.qz,
                        children: (0, s.jsx)(eN.A, {
                            quest: t,
                            surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: n,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: r,
                            analyticsCtxQuestContentRowIndex: a,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: ey.qz,
                        children: (0, s.jsx)(ex.Pw, {
                            className: ey.xZ,
                            isSelected: (e) => {
                                switch (x) {
                                    case c.X0.DESKTOP:
                                        return e === eO.fO.DESKTOP;
                                    case c.X0.CONSOLE:
                                        return e === eO.fO.CONSOLE;
                                    default:
                                        return !1;
                                }
                            },
                            options: eI,
                            placeholder: V.intl.string(V.t.drVw4T),
                            renderOptionLabel: ep,
                            renderOptionValue: eT,
                            select: h,
                            serialize: (e) => {
                                switch (e) {
                                    case eO.fO.DESKTOP:
                                        return V.intl.string(V.t["QXc01+"]);
                                    case eO.fO.CONSOLE:
                                        return V.intl.string(V.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, s.jsx)(eL, {
                quest: t,
                ctaQuestState: eS.UA.ENROLLED,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: a,
            });
}
function eD(e) {
    let { quest: t, questContent: n, contentPosition: i, rowIndex: l, sourceQuestContent: r } = e,
        c = (0, eS.Pd)(t),
        { isQuestEnrollmentBlocked: u } = (0, a.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return c === eS.UA.UNENROLLED && u
        ? (0, s.jsx)("div", {
              className: ey.kL,
              children: (0, s.jsx)(ew, { quest: t, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: r }),
          })
        : c === eS.UA.ENROLLED && (0, D.g5)(t)
          ? (0, s.jsx)("div", {
                className: ey.kL,
                children: (0, s.jsx)(eb, {
                    quest: t,
                    analyticsCtxQuestContentPosition: i,
                    analyticsCtxQuestContentRowIndex: l,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: r,
                }),
            })
          : (c === eS.UA.ENROLLED || c === eS.UA.INCOMPLETE) && (0, D.no)(t)
            ? (0, s.jsx)("div", {
                  className: ey.kL,
                  children: (0, s.jsx)(e_, { quest: t, content: n, sourceQuestContent: r }),
              })
            : (c === eS.UA.COMPLETED || c === eS.UA.CLAIMED) && (0, eA.vA)(t)
              ? (0, s.jsx)("div", {
                    className: ey.kL,
                    children: (0, s.jsx)(eQ, {
                        quest: t,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                })
              : (0, s.jsx)("div", {
                    className: ey.kL,
                    children: (0, s.jsx)(eL, {
                        quest: t,
                        ctaQuestState: c,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                });
}
var eM = n(503666);
async function eP() {
    return await n.e(40119).then(n.t.bind(n, 718698, 19));
}
function eU(e) {
    let {
            quest: t,
            questContent: n,
            isHovering: l,
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: d,
            sourceQuestContent: x,
            questNameHeadingId: C,
        } = e,
        E = i.useRef(null),
        f = (0, el.z)(),
        j = (0, u.SD)(t, f),
        v = f === er.MA.NITRO && j,
        A = (0, a.bG)([en.default], () => en.default.getCurrentUser()),
        N = (0, ea.mq)(t.config, A),
        S = (0, ea.mH)(t.config, A),
        O = t.userStatus?.enrolledAt != null,
        { ref: y, scrollHeight: I } = (0, T.wR)(),
        p = null != I && I > 104,
        { onAssetLoadComplete: Q } = i.useContext(K.M),
        { expansionSpring: q } = (0, h.z)({ expansionSpring: +!!l, config: { ...B.N, clamp: !0 } }),
        _ = t.userStatus?.completedAt != null,
        L = t.userStatus?.claimedAt != null,
        w = (0, ea.ks)(t.config),
        M = t.userStatus?.orbQuantityClaimed ?? (0, ea._Z)(t.config),
        P = (0, ea.wo)(t.config, A),
        U = (0, D.I6)(t),
        { completedRatio: R, completedRatioDisplay: k } = (0, u.O9)(t, U),
        z = (0, ei.A9)(t, x, eO.rE.QUEST_HOME_DESKTOP, ee.GameProfileSources.QuestHome, E),
        G = (function (e, t) {
            let { variant: n } = es.Mk.useConfig({ location: t });
            return n === es.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? e.messages.gamePublisher
                : n === es.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? e.messages.questName
                  : V.intl.format(V.t.EAYZAr, { questName: e.messages.questName });
        })(t.config, eO.rE.QUEST_HOME_DESKTOP),
        X = i.useMemo(
            () =>
                L && w
                    ? (0, s.jsxs)(
                          eR,
                          {
                              questId: t.id,
                              children: [
                                  (0, s.jsx)(et.A, { shouldUseThemeColor: !0, className: eM.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: M ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : L
                      ? (0, s.jsx)(eR, { questId: t.id, children: N })
                      : w
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, s.jsxs)(
                                      eR,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, s.jsx)(et.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: eM.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: P ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, s.jsx)(eR, { questId: t.id, children: S }, t.id),
                          }),
            [N, L, S, t.id, P, M, w],
        ),
        W = i.useMemo(() => {
            if (null != z)
                return (0, s.jsx)(g.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: eM.h_,
                    children: z,
                });
        }, [z]),
        $ = (0, a.bG)([Z.Ay], () => Z.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: eM.kL,
        ref: E,
        children: [
            (0, s.jsx)(eo.A, { visible: v, glow: !0 }),
            (0, s.jsxs)(m.animated.div, {
                style: { maxHeight: q.to([0, 1], [104, (I ?? 0) + 12]) },
                className: eM.z,
                children: [
                    (0, s.jsx)("div", {
                        className: eM.c6,
                        children: (0, s.jsxs)(F.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !L && _ && (0, s.jsx)("div", { className: eM.Nz }),
                                O
                                    ? (0, s.jsxs)("div", {
                                          className: eM.Tr,
                                          children: [
                                              _ &&
                                                  (0, s.jsx)(Y.a, {
                                                      importData: eP,
                                                      className: eM.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !$,
                                                  }),
                                              (0, s.jsx)(ec.A, {
                                                  size: 76,
                                                  percentComplete: R,
                                                  overlayText: l && !(0, b.Ic)(t) ? k : void 0,
                                                  children: (0, s.jsx)(ed.A, {
                                                      quest: t,
                                                      location: eO.rE.QUEST_HOME_DESKTOP,
                                                      questContent: n,
                                                      autoplay: l,
                                                      onLoadComplete: Q,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: x,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(ed.A, {
                                          quest: t,
                                          location: eO.rE.QUEST_HOME_DESKTOP,
                                          autoplay: l,
                                          questContent: n,
                                          className: eM.eB,
                                          onLoadComplete: Q,
                                          lazyLoad: !0,
                                          sourceQuestContent: x,
                                      }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        ref: y,
                        className: r()(eM.FS, { [eM.wq]: !p }),
                        children: [
                            (0, s.jsx)(J.D, {
                                id: C,
                                variant: "body-sm/medium",
                                color: "text-brand",
                                className: eM.G$,
                                children: G,
                            }),
                            j
                                ? (0, s.jsxs)("div", {
                                      className: eM.xv,
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              variant: "body-md/semibold",
                                              color: "text-strong",
                                              className: eM.wx,
                                              children: X,
                                          }),
                                          (0, s.jsx)(eu.e, { questId: t.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, s.jsx)(g.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      className: eM.wx,
                                      children: X,
                                  }),
                            W,
                        ],
                    }),
                    p &&
                        (0, s.jsx)(m.animated.div, {
                            style: { opacity: (0, H.a)(q.to([0, 1], [1, 0])) },
                            className: eM.hS,
                        }),
                ],
            }),
            (0, s.jsx)(eD, { quest: t, questContent: n, contentPosition: o, rowIndex: c, sourceQuestContent: x }),
        ],
    });
}
let eR = i.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, s.jsx)(
        g.E,
        { variant: "body-md/semibold", color: "text-strong", tag: "span", className: eM.wx, children: n },
        `${t}_reward`,
    );
});
var ek = n(688755),
    eH = n(831368),
    ez = n(989673);
function eK(e, t) {
    return null == t ? `quest-tile-${e}` : `quest-tile-${e}-${t}`;
}
function eF(e) {
    let {
            quest: t,
            className: n,
            sectionIdentifier: l,
            isInFeaturedSection: a,
            questContent: o,
            contentPosition: c,
            rowIndex: d,
            eagerLoadAssets: m,
            impressionRef: C,
            sourceQuestContent: h,
        } = e,
        E = i.useId(),
        [f, j] = i.useState(!1),
        g = (0, u.aC)(t),
        {
            handleHoverStart: v,
            handleHoverEnd: A,
            isEventWithinParent: N,
        } = (0, ek.B)({ quest: t, questContent: o, contentPosition: c, rowIndex: d, sourceQuestContent: h }),
        S = i.useContext(x.X),
        { visibilityElementRef: O, almostVisibleInViewport: y } = (0, eH.I)(
            S?.current?.getScrollerNode() ?? null,
            m ?? !1,
        );
    return (0, s.jsxs)("article", {
        id: eK(t.id, l),
        ref: (e) => {
            ((C.current = e), (O.current = e));
        },
        "aria-labelledby": E,
        className: r()(ez.k, n),
        onMouseEnter: () => {
            (j(!0), v());
        },
        onMouseLeave: () => {
            (j(!1), A());
        },
        onFocus: (e) => {
            N(e) || (j(!0), v());
        },
        onBlur: (e) => {
            N(e) || (j(!1), A());
        },
        children: [
            (0, s.jsx)($, {
                quest: t,
                isInFeaturedSection: a,
                isHovering: f,
                warningHints: g,
                isVisibleInViewport: y,
                sourceQuestContent: h,
            }),
            (0, s.jsx)(eU, {
                quest: t,
                questContent: o,
                isHovering: f,
                contentPosition: c,
                rowIndex: d,
                isVisibleInViewport: y,
                sourceQuestContent: h,
                questNameHeadingId: E,
            }),
        ],
    });
}
let eB = i.memo(function (e) {
    let t = (0, a.bG)([o.A], () => (null != e.questId ? o.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, s.jsx)(d.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === c.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, s.jsx)(eF, { ...e, quest: n, impressionRef: t }),
          });
});
