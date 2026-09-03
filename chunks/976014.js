n.d(e, { sT: () => tK, Ay: () => tB });
var s = n(477900),
    i = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(17928),
    o = n(859703),
    u = n(738822),
    c = n(309593),
    d = n(73473),
    x = n(321503);
n(134528), n(947204);
var m = n(221877),
    C = n(462887),
    h = n(717421),
    E = n(695366),
    f = n(885574),
    j = n(661531),
    g = n(834730),
    v = n(123292),
    N = n(331322),
    A = n(508770),
    O = n(866665),
    S = n(939249),
    p = n(782134),
    I = n(365199),
    y = n(820081),
    Q = n(765671),
    T = n(736653),
    q = n(814925),
    w = n(178540),
    L = n(561844),
    _ = n(590202),
    b = n(710969),
    D = n(792620),
    M = n(988436),
    P = n(918338),
    U = n(270045),
    R = n(130490),
    k = n(57718),
    H = n(398025),
    z = n(617986),
    K = n(516226),
    F = n(720875),
    B = n(419367),
    G = n(652215),
    V = n(375708),
    W = n(322335);
function X(t) {
    let { quest: e, warningHints: n, isDarkTheme: l, sourceQuestContent: a } = t,
        r = (0, w.O)((t) => t.getErrorHints(e.id)),
        { ref: o, height: u = 0 } = (0, Q.Ay)([r]),
        d = e.userStatus?.completedAt != null,
        x = (0, c.Vn)(e),
        { type: C, hints: N } = i.useMemo(
            () =>
                d || x
                    ? { type: 2, hints: [] }
                    : r.length > 0
                      ? { type: 0, hints: r.map((t) => t.message) }
                      : n.length > 0
                        ? { type: 1, hints: n }
                        : { type: 2, hints: [] },
            [r, d, x, n],
        ),
        A = 2 !== C,
        O = (0, h.z)({ opacity: +!!A, height: A ? u : 0, config: B.N }),
        S = 0 === C ? E.E : f.CircleInformationIcon,
        p = j.A.unsafe_rawColors.RED_345.css,
        I = 0 === C ? p : l ? j.A.colors.TEXT_DEFAULT : j.A.colors.WHITE;
    return (0, s.jsx)(m.animated.div, {
        style: { height: O.height, opacity: (0, H.a)(O.opacity) },
        children: (0, s.jsxs)("div", {
            ref: o,
            className: W.XZ,
            children: [
                (0, s.jsxs)("div", {
                    className: W.M5,
                    children: [
                        (0, s.jsx)(S, { size: "xs", color: I }),
                        (0, s.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "text-overlay-light",
                            children: N.at(0),
                        }),
                    ],
                }),
                0 === C &&
                    (0, s.jsx)(v.Q, {
                        text: V.intl.string(V.t["yKJi+/"]),
                        onClick: () => (0, M.i)({ quest: e, sourceQuestContent: a }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function $(t) {
    let {
            quest: e,
            isHovering: n,
            isInFeaturedSection: l,
            warningHints: a,
            isVisibleInViewport: r,
            onCtxMenuClose: o,
            onCtxMenuOpen: d,
            onCtxMenuSelect: x,
            sourceQuestContent: m,
        } = t,
        h = (0, D.IO)(e),
        E = (0, T.Ay)(),
        f = ((0, C.M)(E) ? G.NJ8.DARK : G.NJ8.LIGHT) === G.NJ8.DARK,
        v = (0, c.LS)(e),
        Q = e.userStatus?.claimedAt != null,
        w = (0, c.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
        M = e.userStatus?.enrolledAt != null,
        H = e.userStatus?.completedAt != null,
        { onAssetLoadComplete: B } = i.useContext(K.M),
        $ = f ? "text-muted" : "text-overlay-light",
        Y = (0, c.Hv)() && !H,
        J = i.useCallback(() => {
            if (h) {
                if (Y) {
                    (0, L.Y5)({
                        questId: e.id,
                        questContent: u.uF.QUEST_HOME_DESKTOP,
                        questContentCTA: _.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: m,
                    }),
                        (0, z.FS)();
                    return;
                }
                (0, z.d5)({
                    quest: e,
                    questContent: u.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: m,
                    sourceQuestContentCTA: _.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
            }
        }, [h, e, m, Y]),
        Z = (0, R.UX)(e.id),
        tt = !0 === l || Z,
        te = i.useRef(null);
    return (0, s.jsxs)("div", {
        className: W.kL,
        children: [
            (0, s.jsx)("div", {
                className: W.IC,
                children: (0, s.jsx)(P.A, {
                    quest: e,
                    isInteracting: n,
                    hideAssets: !r,
                    imageSize: { width: 1320, height: 370 },
                    variant: "banner",
                }),
            }),
            (0, s.jsx)("div", { className: W.Lw }),
            (0, s.jsxs)("div", {
                className: W.nX,
                children: [
                    (0, s.jsxs)("div", {
                        className: W.PG,
                        children: [
                            (0, s.jsxs)("div", {
                                className: W.mY,
                                children: [
                                    (tt || e.preview) &&
                                        (0, s.jsxs)(N.B, {
                                            className: W.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                tt &&
                                                    !(0, b.Ic)(e) &&
                                                    (0, s.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                e.preview &&
                                                    (0, s.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    h &&
                                        (0, s.jsx)(O.m, {
                                            text: H
                                                ? V.intl.string(V.t.YsCuyF)
                                                : M
                                                  ? V.intl.string(V.t["74KqrR"])
                                                  : (0, b.Ic)(e)
                                                    ? V.intl.string(V.t.I6JG46)
                                                    : V.intl.string(V.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, s.jsx)(S.D, {
                                                className: W.iI,
                                                "aria-label": V.intl.string(V.t.RscU7I),
                                                onClick: J,
                                                children: (0, s.jsx)(p.PlayIcon, {
                                                    color: "currentColor",
                                                    className: W.A9,
                                                }),
                                            }),
                                        }),
                                    (0, s.jsx)(U.C, {
                                        onOpen: d,
                                        onClose: o,
                                        onSelect: x,
                                        questContent: u.uF.QUEST_HOME_DESKTOP,
                                        quest: e,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: m,
                                        returnRef: te,
                                        children: (t) =>
                                            (0, s.jsx)(S.D, {
                                                ...t,
                                                innerRef: te,
                                                className: W.iI,
                                                "aria-label": V.intl.string(V.t.DEoVWZ),
                                                children: (0, s.jsx)(I.MoreHorizontalIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: W.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(F.A, {
                                showPlaceholder: !r,
                                width: 100,
                                height: 30,
                                className: W.Iu,
                                children: (0, s.jsx)(k.Ay, {
                                    className: W.Iu,
                                    logotypeClassName: W.ND,
                                    quest: e,
                                    separatorSpacing: k.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: B,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: W.E_,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: W.O,
                                        children: [
                                            (0, s.jsx)(g.E, {
                                                tag: "span",
                                                className: W.vT,
                                                variant: "text-sm/medium",
                                                color: $,
                                                children: V.intl.string(V.t.VAbKhK),
                                            }),
                                            (0, s.jsx)(q.A, {
                                                className: W.w$,
                                                size: 16,
                                                color: j.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": V.intl.string(V.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, s.jsx)(y.B, {
                                                    color: j.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, s.jsx)(g.E, {
                                                className: W.eA,
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-overlay-light",
                                                children:
                                                    e.config.cosponsorMetadata?.name ?? e.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    v || Q
                                        ? null
                                        : (0, s.jsx)(g.E, {
                                              className: W.xK,
                                              variant: "text-sm/medium",
                                              color: $,
                                              children: V.intl.format(V.t["7D8r4F"], { expiryDate: w }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(X, { quest: e, warningHints: a, isDarkTheme: f, sourceQuestContent: m }),
                ],
            }),
        ],
    });
}
var Y = n(604121),
    J = n(297264),
    Z = n(775602),
    tt = n(409626),
    te = n(106799),
    tn = n(287809),
    ts = n(192444),
    ti = n(3738),
    tl = n(646917),
    ta = n(576761),
    tr = n(801365),
    to = n(895253),
    tu = n(453384),
    tc = n(442734),
    td = n(646764),
    tx = n(843282),
    tm = n(825484),
    tC = n(821609),
    th = n(31300),
    tE = n(687966),
    tf = n(414499),
    tj = n(971649),
    tg = n(651892),
    tv = n(901406),
    tN = n(814793),
    tA = n(657113),
    tO = n(79545),
    tS = n(190107),
    tp = n(336779);
let tI = [
    {
        value: tS.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: tS.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function ty(t) {
    let e,
        n,
        { value: i } = t;
    switch (i) {
        case tS.fO.DESKTOP:
            (n = (0, s.jsx)(th.k, {})), (e = V.intl.string(V.t["QXc01+"]));
            break;
        case tS.fO.CONSOLE:
            (n = (0, s.jsx)(tE.GameControllerIcon, {})), (e = V.intl.string(V.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("div", { className: tp.FL, children: [n, e] });
}
function tQ(t) {
    let e, n;
    if (0 === t.length) return null;
    switch (t[0].value) {
        case tS.fO.DESKTOP:
            (n = (0, s.jsx)(th.k, {})), (e = V.intl.string(V.t.g6Dr44));
            break;
        case tS.fO.CONSOLE:
            (n = (0, s.jsx)(tE.GameControllerIcon, {})), (e = V.intl.string(V.t.iyNbj5));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("span", { className: tp.FL, children: [n, e] });
}
function tT(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: a,
        } = t,
        { launchInGameActivity: r } = (0, c.zW)(e),
        o = (0, ti.NA)({ quest: e, shortText: !0 });
    return (0, s.jsx)("div", {
        className: tp.qz,
        children: (0, s.jsxs)(tm.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(tC.$, {
                    variant: "secondary",
                    icon: e.config.features.includes(tS.Li.CLOUD_GAMING_ACTIVITY) ? tf.h : tE.GameControllerIcon,
                    text: o,
                    onClick: r,
                }),
                (0, s.jsx)(tA.A, {
                    quest: e,
                    surface: tO.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: i,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: a,
                }),
            ],
        }),
    });
}
function tq(t) {
    let { quest: e, content: n, sourceQuestContent: l, fullWidth: a } = t,
        { externalLinkCta: r, handleOpenExternalLink: o } = (function (t) {
            let { quest: e, content: n, sourceQuestContent: s } = t,
                l = (0, tj.wW)();
            return {
                externalLinkCta: (0, tg.wr)(e),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, tv.pu)(e, {
                        content: n,
                        ctaContent: _.Cy.OPEN_GAME_LINK,
                        impressionId: l(),
                        sourceQuestContent: s,
                    });
                }, [e, n, s, l]),
            };
        })({ quest: e, content: n, sourceQuestContent: l });
    return (0, s.jsx)(tC.$, { variant: "secondary", text: r, onClick: o, fullWidth: a });
}
function tw(t) {
    let { quest: e, content: n, sourceQuestContent: i } = t;
    return (0, s.jsx)("div", {
        className: tp.qz,
        children: (0, s.jsx)(tq, { quest: e, content: n, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function tL(t) {
    let {
            quest: e,
            ctaQuestState: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: r,
        } = t,
        o = (function (t, e) {
            switch (t) {
                case tO.UA.EXPIRED_CLAIMABLE:
                case tO.UA.EXPIRED:
                    return !0;
                case tO.UA.CLAIMED:
                case tO.UA.COMPLETED:
                    return (0, D.vv)(e) || (0, tN.vA)(e);
                case tO.UA.INCOMPLETE:
                case tO.UA.ENROLLED:
                    return (0, D.vv)(e) || (0, tN.vA)(e) || (0, D.I6)(e);
                case tO.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(n, e);
    return (0, s.jsx)("div", {
        className: tp.qz,
        children: (0, s.jsxs)(tm.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, s.jsx)(tq, { quest: e, content: i, sourceQuestContent: l }),
                (0, s.jsx)(tA.A, {
                    quest: e,
                    surface: tO.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: i,
                    analyticsCtxSourceQuestContent: l,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: r,
                }),
            ],
        }),
    });
}
function t_(t) {
    let { quest: e, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: i } = t;
    return (0, s.jsx)("div", {
        className: tp.qz,
        children: (0, s.jsxs)(tm.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(tC.$, { variant: "secondary", disabled: !0, text: V.intl.string(V.t["8LKchl"]) }),
                (0, s.jsx)(tC.$, {
                    variant: "primary",
                    onClick: () => (0, z.m6)(e, n, i),
                    text: V.intl.string(V.t.vY9GgG),
                }),
            ],
        }),
    });
}
function tb(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: r,
        } = t,
        o = (0, c.fc)(e),
        d = (0, w.O)((t) => t.clearErrorHints),
        [x, m, C] = (0, c.Qo)(e, o),
        h = i.useCallback(
            (t) => {
                C(t), t === tS.fO.DESKTOP && d(e.id);
            },
            [C, d, e.id],
        );
    return x === u.X0.SELECT
        ? (0, s.jsx)(tx.Pw, {
              className: tp.dd,
              isSelected: () => !1,
              options: tI,
              placeholder: V.intl.string(V.t.drVw4T),
              renderOptionLabel: ty,
              renderOptionValue: tQ,
              select: h,
              serialize: (t) => {
                  switch (t) {
                      case tS.fO.DESKTOP:
                          return V.intl.string(V.t["QXc01+"]);
                      case tS.fO.CONSOLE:
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
                        className: tp.qz,
                        children: (0, s.jsx)(tA.A, {
                            quest: e,
                            surface: tO.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: n,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: a,
                            analyticsCtxQuestContentRowIndex: r,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: tp.qz,
                        children: (0, s.jsx)(tx.Pw, {
                            className: tp.xZ,
                            isSelected: (t) => {
                                switch (x) {
                                    case u.X0.DESKTOP:
                                        return t === tS.fO.DESKTOP;
                                    case u.X0.CONSOLE:
                                        return t === tS.fO.CONSOLE;
                                    default:
                                        return !1;
                                }
                            },
                            options: tI,
                            placeholder: V.intl.string(V.t.drVw4T),
                            renderOptionLabel: ty,
                            renderOptionValue: tQ,
                            select: h,
                            serialize: (t) => {
                                switch (t) {
                                    case tS.fO.DESKTOP:
                                        return V.intl.string(V.t["QXc01+"]);
                                    case tS.fO.CONSOLE:
                                        return V.intl.string(V.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, s.jsx)(tL, {
                quest: e,
                ctaQuestState: tO.UA.ENROLLED,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: r,
            });
}
function tD(t) {
    let { quest: e, questContent: n, contentPosition: i, rowIndex: l, sourceQuestContent: a } = t,
        u = (0, tO.Pd)(e),
        { isQuestEnrollmentBlocked: c } = (0, r.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return u === tO.UA.UNENROLLED && c
        ? (0, s.jsx)("div", {
              className: tp.kL,
              children: (0, s.jsx)(t_, { quest: e, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: a }),
          })
        : u === tO.UA.ENROLLED && (0, D.g5)(e)
          ? (0, s.jsx)("div", {
                className: tp.kL,
                children: (0, s.jsx)(tb, {
                    quest: e,
                    analyticsCtxQuestContentPosition: i,
                    analyticsCtxQuestContentRowIndex: l,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: a,
                }),
            })
          : (u === tO.UA.ENROLLED || u === tO.UA.INCOMPLETE) && (0, D.no)(e)
            ? (0, s.jsx)("div", {
                  className: tp.kL,
                  children: (0, s.jsx)(tw, { quest: e, content: n, sourceQuestContent: a }),
              })
            : (u === tO.UA.COMPLETED || u === tO.UA.CLAIMED) && (0, tN.vA)(e)
              ? (0, s.jsx)("div", {
                    className: tp.kL,
                    children: (0, s.jsx)(tT, {
                        quest: e,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: a,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                })
              : (0, s.jsx)("div", {
                    className: tp.kL,
                    children: (0, s.jsx)(tL, {
                        quest: e,
                        ctaQuestState: u,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: a,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                });
}
var tM = n(503666);
async function tP() {
    return await n.e("40119").then(n.t.bind(n, 718698, 19));
}
function tU(t) {
    let {
            quest: e,
            questContent: n,
            isHovering: l,
            contentPosition: o,
            rowIndex: u,
            isVisibleInViewport: d,
            sourceQuestContent: x,
            questNameHeadingId: C,
        } = t,
        E = i.useRef(null),
        f = (0, tl.z)(),
        j = (0, c.SD)(e, f),
        v = f === ta.MA.NITRO && j,
        N = (0, r.bG)([tn.default], () => tn.default.getCurrentUser()),
        A = (0, tr.mq)(e.config, N),
        O = (0, tr.mH)(e.config, N),
        S = e.userStatus?.enrolledAt != null,
        { ref: p, scrollHeight: I } = (0, Q.wR)(),
        y = null != I && I > 104,
        { onAssetLoadComplete: T } = i.useContext(K.M),
        { expansionSpring: q } = (0, h.z)({ expansionSpring: +!!l, config: { ...B.N, clamp: !0 } }),
        w = e.userStatus?.completedAt != null,
        L = e.userStatus?.claimedAt != null,
        _ = (0, tr.ks)(e.config),
        M = e.userStatus?.orbQuantityClaimed ?? (0, tr._Z)(e.config),
        P = (0, tr.wo)(e.config, N),
        U = (0, D.I6)(e),
        { completedRatio: R, completedRatioDisplay: k } = (0, c.O9)(e, U),
        z = (0, ti.A9)(e, x, tS.rE.QUEST_HOME_DESKTOP, tt.GameProfileSources.QuestHome, E),
        G = (function (t, e) {
            let { variant: n } = ts.Mk.useConfig({ location: e });
            return n === ts.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? t.messages.gamePublisher
                : n === ts.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? t.messages.questName
                  : V.intl.format(V.t.EAYZAr, { questName: t.messages.questName });
        })(e.config, tS.rE.QUEST_HOME_DESKTOP),
        W = i.useMemo(
            () =>
                L && _
                    ? (0, s.jsxs)(
                          tR,
                          {
                              questId: e.id,
                              children: [
                                  (0, s.jsx)(te.A, { shouldUseThemeColor: !0, className: tM.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: M ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : L
                      ? (0, s.jsx)(tR, { questId: e.id, children: A })
                      : _
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, s.jsxs)(
                                      tR,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, s.jsx)(te.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: tM.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: P ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, s.jsx)(tR, { questId: e.id, children: O }, e.id),
                          }),
            [A, L, O, e.id, P, M, _],
        ),
        X = i.useMemo(() => {
            if (null != z)
                return (0, s.jsx)(g.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: tM.h_,
                    children: z,
                });
        }, [z]),
        $ = (0, r.bG)([Z.Ay], () => Z.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: tM.kL,
        ref: E,
        children: [
            (0, s.jsx)(to.A, { visible: v, glow: !0 }),
            (0, s.jsxs)(m.animated.div, {
                style: { maxHeight: q.to([0, 1], [104, (I ?? 0) + 12]) },
                className: tM.z,
                children: [
                    (0, s.jsx)("div", {
                        className: tM.c6,
                        children: (0, s.jsxs)(F.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !L && w && (0, s.jsx)("div", { className: tM.Nz }),
                                S
                                    ? (0, s.jsxs)("div", {
                                          className: tM.Tr,
                                          children: [
                                              w &&
                                                  (0, s.jsx)(Y.a, {
                                                      importData: tP,
                                                      className: tM.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !$,
                                                  }),
                                              (0, s.jsx)(tu.A, {
                                                  size: 76,
                                                  percentComplete: R,
                                                  overlayText: l && !(0, b.Ic)(e) ? k : void 0,
                                                  children: (0, s.jsx)(td.A, {
                                                      quest: e,
                                                      questContent: n,
                                                      autoplay: l,
                                                      onLoadComplete: T,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: x,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(td.A, {
                                          quest: e,
                                          autoplay: l,
                                          questContent: n,
                                          className: tM.eB,
                                          onLoadComplete: T,
                                          lazyLoad: !0,
                                          sourceQuestContent: x,
                                      }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        ref: p,
                        className: a()(tM.FS, { [tM.wq]: !y }),
                        children: [
                            (0, s.jsx)(J.D, {
                                id: C,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: tM.G$,
                                children: G,
                            }),
                            j
                                ? (0, s.jsxs)("div", {
                                      className: tM.xv,
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: tM.wx,
                                              children: W,
                                          }),
                                          (0, s.jsx)(tc.e, { questId: e.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, s.jsx)(g.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: tM.wx,
                                      children: W,
                                  }),
                            X,
                        ],
                    }),
                    y &&
                        (0, s.jsx)(m.animated.div, {
                            style: { opacity: (0, H.a)(q.to([0, 1], [1, 0])) },
                            className: tM.hS,
                        }),
                ],
            }),
            (0, s.jsx)(tD, { quest: e, questContent: n, contentPosition: o, rowIndex: u, sourceQuestContent: x }),
        ],
    });
}
let tR = i.memo(function (t) {
    let { questId: e, children: n } = t;
    return (0, s.jsx)(
        g.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: tM.wx, children: n },
        `${e}_reward`,
    );
});
var tk = n(688755),
    tH = n(831368),
    tz = n(989673);
function tK(t, e) {
    return null == e ? `quest-tile-${t}` : `quest-tile-${t}-${e}`;
}
function tF(t) {
    let {
            quest: e,
            className: n,
            sectionIdentifier: l,
            isInFeaturedSection: r,
            questContent: o,
            contentPosition: u,
            rowIndex: d,
            eagerLoadAssets: m,
            impressionRef: C,
            sourceQuestContent: h,
        } = t,
        E = i.useId(),
        [f, j] = i.useState(!1),
        g = (0, c.aC)(e),
        {
            handleHoverStart: v,
            handleHoverEnd: N,
            isEventWithinParent: A,
        } = (0, tk.B)({ quest: e, questContent: o, contentPosition: u, rowIndex: d, sourceQuestContent: h }),
        O = i.useContext(x.X),
        { visibilityElementRef: S, almostVisibleInViewport: p } = (0, tH.I)(
            O?.current?.getScrollerNode() ?? null,
            m ?? !1,
        );
    return (0, s.jsxs)("article", {
        id: tK(e.id, l),
        ref: (t) => {
            (C.current = t), (S.current = t);
        },
        "aria-labelledby": E,
        className: a()(tz.k, n),
        onMouseEnter: () => {
            j(!0), v();
        },
        onMouseLeave: () => {
            j(!1), N();
        },
        onFocus: (t) => {
            A(t) || (j(!0), v());
        },
        onBlur: (t) => {
            A(t) || (j(!1), N());
        },
        children: [
            (0, s.jsx)($, {
                quest: e,
                isInFeaturedSection: r,
                isHovering: f,
                warningHints: g,
                isVisibleInViewport: p,
                sourceQuestContent: h,
            }),
            (0, s.jsx)(tU, {
                quest: e,
                questContent: o,
                isHovering: f,
                contentPosition: u,
                rowIndex: d,
                isVisibleInViewport: p,
                sourceQuestContent: h,
                questNameHeadingId: E,
            }),
        ],
    });
}
let tB = i.memo(function (t) {
    let e = (0, r.bG)([o.A], () => (null != t.questId ? o.A.getQuest(t.questId) : void 0), [t.questId]),
        n = i.useMemo(() => (null != t.quest ? t.quest : e), [e, t.quest]);
    return null == n
        ? null
        : (0, s.jsx)(d.R, {
              questOrQuests: n,
              questContent: t.questContent,
              questContentPosition: t.contentPosition,
              questContentRowIndex: t.rowIndex,
              trackGuildAndChannelMetadata: t.questContent === u.uF.QUESTS_EMBED,
              sourceQuestContent: t.sourceQuestContent,
              children: (e) => (0, s.jsx)(tF, { ...t, quest: n, impressionRef: e }),
          });
});
