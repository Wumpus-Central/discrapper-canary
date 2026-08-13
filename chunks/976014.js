s.d(e, { sT: () => tH, Ay: () => tB });
var n = s(477900),
    i = s(582128),
    l = s(503698),
    a = s.n(l),
    r = s(17928),
    o = s(859703),
    u = s(24001),
    c = s(309593),
    d = s(73473),
    x = s(321503);
s(134528), s(947204);
var m = s(53466),
    C = s(462887),
    h = s(717421),
    E = s(695366),
    f = s(885574),
    j = s(661531),
    g = s(834730),
    N = s(123292),
    v = s(331322),
    A = s(508770),
    O = s(866665),
    p = s(939249),
    y = s(782134),
    S = s(365199),
    I = s(820081),
    Q = s(765671),
    w = s(736653),
    L = s(814925),
    q = s(178540),
    T = s(590202),
    _ = s(710969),
    b = s(792620),
    D = s(988436),
    M = s(918338),
    R = s(270045),
    k = s(201805),
    P = s(57718),
    U = s(398025),
    z = s(617986),
    H = s(516226),
    K = s(720875),
    B = s(419367),
    F = s(652215),
    V = s(375708),
    W = s(820526);
function X(t) {
    let { quest: e, warningHints: s, isDarkTheme: l, sourceQuestContent: a } = t,
        r = (0, q.O)((t) => t.getErrorHints(e.id)),
        { ref: o, height: u = 0 } = (0, Q.Ay)([r]),
        d = e.userStatus?.completedAt != null,
        x = (0, c.Vn)(e),
        { type: C, hints: v } = i.useMemo(
            () =>
                d || x
                    ? { type: 2, hints: [] }
                    : r.length > 0
                      ? { type: 0, hints: r.map((t) => t.message) }
                      : s.length > 0
                        ? { type: 1, hints: s }
                        : { type: 2, hints: [] },
            [r, d, x, s],
        ),
        A = 2 !== C,
        O = (0, h.z)({ opacity: +!!A, height: A ? u : 0, config: B.N }),
        p = 0 === C ? E.E : f.m,
        y = j.A.unsafe_rawColors.RED_345.css,
        S = 0 === C ? y : l ? j.A.colors.TEXT_DEFAULT : j.A.colors.WHITE;
    return (0, n.jsx)(m.animated.div, {
        style: { height: O.height, opacity: (0, U.a)(O.opacity) },
        children: (0, n.jsxs)("div", {
            ref: o,
            className: W.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: W.M5,
                    children: [
                        (0, n.jsx)(p, { size: "xs", color: S }),
                        (0, n.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "text-overlay-light",
                            children: v.at(0),
                        }),
                    ],
                }),
                0 === C &&
                    (0, n.jsx)(N.Q, {
                        text: V.intl.string(V.t["yKJi+/"]),
                        onClick: () => (0, D.i)({ quest: e, sourceQuestContent: a }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function G(t) {
    let {
            quest: e,
            isHovering: s,
            isInFeaturedSection: l,
            warningHints: a,
            isVisibleInViewport: r,
            onCtxMenuClose: o,
            onCtxMenuOpen: d,
            onCtxMenuSelect: x,
            sourceQuestContent: m,
        } = t,
        h = (0, b.IO)(e),
        E = (0, w.Ay)(),
        f = ((0, C.M)(E) ? F.NJ8.DARK : F.NJ8.LIGHT) === F.NJ8.DARK,
        N = (0, c.LS)(e),
        Q = e.userStatus?.claimedAt != null,
        q = (0, c.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
        D = e.userStatus?.enrolledAt != null,
        U = e.userStatus?.completedAt != null,
        { onAssetLoadComplete: B } = i.useContext(H.M),
        G = f ? "text-muted" : "text-overlay-light",
        $ = i.useCallback(() => {
            h &&
                (0, z.d5)({
                    quest: e,
                    questContent: u.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: m,
                    sourceQuestContentCTA: T.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [h, e, m]),
        Y = (0, k.UX)(e.id),
        J = !0 === l || Y,
        Z = i.useRef(null);
    return (0, n.jsxs)("div", {
        className: W.kL,
        children: [
            (0, n.jsx)("div", {
                className: W.IC,
                children: (0, n.jsx)(M.A, {
                    quest: e,
                    isInteracting: s,
                    hideAssets: !r,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: W.l1,
                    imageClassName: W.c8,
                }),
            }),
            (0, n.jsx)("div", { className: W.Lw }),
            (0, n.jsxs)("div", {
                className: W.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: W.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: W.mY,
                                children: [
                                    (J || e.preview) &&
                                        (0, n.jsxs)(v.B, {
                                            className: W.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                J &&
                                                    !(0, _.Ic)(e) &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                e.preview &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    h &&
                                        (0, n.jsx)(O.m, {
                                            text: U
                                                ? V.intl.string(V.t.YsCuyF)
                                                : D
                                                  ? V.intl.string(V.t["74KqrR"])
                                                  : (0, _.Ic)(e)
                                                    ? V.intl.string(V.t.I6JG46)
                                                    : V.intl.string(V.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(p.D, {
                                                className: W.iI,
                                                "aria-label": V.intl.string(V.t.RscU7I),
                                                onClick: $,
                                                children: (0, n.jsx)(y.u, { color: "currentColor", className: W.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(R.C, {
                                        onOpen: d,
                                        onClose: o,
                                        onSelect: x,
                                        questContent: u.uF.QUEST_HOME_DESKTOP,
                                        quest: e,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: m,
                                        returnRef: Z,
                                        children: (t) =>
                                            (0, n.jsx)(p.D, {
                                                ...t,
                                                innerRef: Z,
                                                className: W.iI,
                                                "aria-label": V.intl.string(V.t.DEoVWZ),
                                                children: (0, n.jsx)(S.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: W.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(K.A, {
                                showPlaceholder: !r,
                                width: 100,
                                height: 30,
                                className: W.Iu,
                                children: (0, n.jsx)(P.Ay, {
                                    className: W.Iu,
                                    logotypeClassName: W.ND,
                                    quest: e,
                                    separatorSpacing: P.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: B,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: W.E_,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: W.O,
                                        children: [
                                            (0, n.jsx)(g.E, {
                                                tag: "span",
                                                className: W.vT,
                                                variant: "text-sm/medium",
                                                color: G,
                                                children: V.intl.string(V.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(L.A, {
                                                className: W.w$,
                                                size: 16,
                                                color: j.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": V.intl.string(V.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(I.B, {
                                                    color: j.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(g.E, {
                                                className: W.eA,
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-overlay-light",
                                                children:
                                                    e.config.cosponsorMetadata?.name ?? e.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    N || Q
                                        ? null
                                        : (0, n.jsx)(g.E, {
                                              className: W.xK,
                                              variant: "text-sm/medium",
                                              color: G,
                                              children: V.intl.format(V.t["7D8r4F"], { expiryDate: q }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(X, { quest: e, warningHints: a, isDarkTheme: f, sourceQuestContent: m }),
                ],
            }),
        ],
    });
}
var $ = s(604121),
    Y = s(297264),
    J = s(775602),
    Z = s(409626),
    tt = s(106799),
    te = s(287809),
    ts = s(192444),
    tn = s(3738),
    ti = s(646917),
    tl = s(576761),
    ta = s(801365),
    tr = s(895253),
    to = s(453384),
    tu = s(442734),
    tc = s(646764),
    td = s(843282),
    tx = s(825484),
    tm = s(821609),
    tC = s(31300),
    th = s(687966),
    tE = s(414499),
    tf = s(971649),
    tj = s(651892),
    tg = s(901406),
    tN = s(814793),
    tv = s(657113),
    tA = s(79545),
    tO = s(190107),
    tp = s(550032);
let ty = [
    {
        value: tO.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: tO.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function tS(t) {
    let e,
        s,
        { value: i } = t;
    switch (i) {
        case tO.fO.DESKTOP:
            (s = (0, n.jsx)(tC.k, {})), (e = V.intl.string(V.t["QXc01+"]));
            break;
        case tO.fO.CONSOLE:
            (s = (0, n.jsx)(th._, {})), (e = V.intl.string(V.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: tp.FL, children: [s, e] });
}
function tI(t) {
    let e, s;
    if (0 === t.length) return null;
    switch (t[0].value) {
        case tO.fO.DESKTOP:
            (s = (0, n.jsx)(tC.k, {})), (e = V.intl.string(V.t.g6Dr44));
            break;
        case tO.fO.CONSOLE:
            (s = (0, n.jsx)(th._, {})), (e = V.intl.string(V.t.iyNbj5));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("span", { className: tp.FL, children: [s, e] });
}
function tQ(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: a,
        } = t,
        { launchInGameActivity: r } = (0, c.zW)(e),
        o = (0, tn.NA)({ quest: e, shortText: !0 });
    return (0, n.jsx)("div", {
        className: tp.qz,
        children: (0, n.jsxs)(tx.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, n.jsx)(tm.$, {
                    variant: "secondary",
                    icon: e.config.features.includes(tO.Li.CLOUD_GAMING_ACTIVITY) ? tE.h : th._,
                    text: o,
                    onClick: r,
                }),
                (0, n.jsx)(tv.A, {
                    quest: e,
                    surface: tA.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: s,
                    analyticsCtxSourceQuestContent: i,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: a,
                }),
            ],
        }),
    });
}
function tw(t) {
    let { quest: e, content: s, sourceQuestContent: l, fullWidth: a } = t,
        { externalLinkCta: r, handleOpenExternalLink: o } = (function (t) {
            let { quest: e, content: s, sourceQuestContent: n } = t,
                l = (0, tf.wW)();
            return {
                externalLinkCta: (0, tj.wr)(e),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, tg.pu)(e, {
                        content: s,
                        ctaContent: T.Cy.OPEN_GAME_LINK,
                        impressionId: l(),
                        sourceQuestContent: n,
                    });
                }, [e, s, n, l]),
            };
        })({ quest: e, content: s, sourceQuestContent: l });
    return (0, n.jsx)(tm.$, { variant: "secondary", text: r, onClick: o, fullWidth: a });
}
function tL(t) {
    let { quest: e, content: s, sourceQuestContent: i } = t;
    return (0, n.jsx)("div", {
        className: tp.qz,
        children: (0, n.jsx)(tw, { quest: e, content: s, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function tq(t) {
    let {
            quest: e,
            ctaQuestState: s,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: r,
        } = t,
        o = (function (t, e) {
            switch (t) {
                case tA.UA.EXPIRED_CLAIMABLE:
                case tA.UA.EXPIRED:
                    return !0;
                case tA.UA.CLAIMED:
                case tA.UA.COMPLETED:
                    return (0, b.vv)(e) || (0, tN.vA)(e);
                case tA.UA.INCOMPLETE:
                case tA.UA.ENROLLED:
                    return (0, b.vv)(e) || (0, tN.vA)(e) || (0, b.I6)(e);
                case tA.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(s, e);
    return (0, n.jsx)("div", {
        className: tp.qz,
        children: (0, n.jsxs)(tx.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, n.jsx)(tw, { quest: e, content: i, sourceQuestContent: l }),
                (0, n.jsx)(tv.A, {
                    quest: e,
                    surface: tA.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: i,
                    analyticsCtxSourceQuestContent: l,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: r,
                }),
            ],
        }),
    });
}
function tT(t) {
    let { quest: e, analyticsCtxQuestContent: s, analyticsCtxSourceQuestContent: i } = t;
    return (0, n.jsx)("div", {
        className: tp.qz,
        children: (0, n.jsxs)(tx.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, n.jsx)(tm.$, { variant: "secondary", disabled: !0, text: V.intl.string(V.t["8LKchl"]) }),
                (0, n.jsx)(tm.$, {
                    variant: "primary",
                    onClick: () => (0, z.m6)(e, s, i),
                    text: V.intl.string(V.t.vY9GgG),
                }),
            ],
        }),
    });
}
function t_(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: r,
        } = t,
        o = (0, c.fc)(e),
        d = (0, q.O)((t) => t.clearErrorHints),
        [x, m, C] = (0, c.Qo)(e, o),
        h = i.useCallback(
            (t) => {
                C(t), t === tO.fO.DESKTOP && d(e.id);
            },
            [C, d, e.id],
        );
    return x === u.X0.SELECT
        ? (0, n.jsx)(td.Pw, {
              className: tp.dd,
              isSelected: () => !1,
              options: ty,
              placeholder: V.intl.string(V.t.drVw4T),
              renderOptionLabel: tS,
              renderOptionValue: tI,
              select: h,
              serialize: (t) => {
                  switch (t) {
                      case tO.fO.DESKTOP:
                          return V.intl.string(V.t["QXc01+"]);
                      case tO.fO.CONSOLE:
                          return V.intl.string(V.t["8lAfuB"]);
                      default:
                          return V.intl.string(V.t.WLDKSb);
                  }
              },
              size: "sm",
              "data-migration-pending": !0,
          })
        : m.length > 1
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("div", {
                        className: tp.qz,
                        children: (0, n.jsx)(tv.A, {
                            quest: e,
                            surface: tA.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: s,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: a,
                            analyticsCtxQuestContentRowIndex: r,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: tp.qz,
                        children: (0, n.jsx)(td.Pw, {
                            className: tp.xZ,
                            isSelected: (t) => {
                                switch (x) {
                                    case u.X0.DESKTOP:
                                        return t === tO.fO.DESKTOP;
                                    case u.X0.CONSOLE:
                                        return t === tO.fO.CONSOLE;
                                    default:
                                        return !1;
                                }
                            },
                            options: ty,
                            placeholder: V.intl.string(V.t.drVw4T),
                            renderOptionLabel: tS,
                            renderOptionValue: tI,
                            select: h,
                            serialize: (t) => {
                                switch (t) {
                                    case tO.fO.DESKTOP:
                                        return V.intl.string(V.t["QXc01+"]);
                                    case tO.fO.CONSOLE:
                                        return V.intl.string(V.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, n.jsx)(tq, {
                quest: e,
                ctaQuestState: tA.UA.ENROLLED,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: r,
            });
}
function tb(t) {
    let { quest: e, questContent: s, contentPosition: i, rowIndex: l, sourceQuestContent: a } = t,
        u = (0, tA.Pd)(e),
        { isQuestEnrollmentBlocked: c } = (0, r.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return u === tA.UA.UNENROLLED && c
        ? (0, n.jsx)("div", {
              className: tp.kL,
              children: (0, n.jsx)(tT, { quest: e, analyticsCtxQuestContent: s, analyticsCtxSourceQuestContent: a }),
          })
        : u === tA.UA.ENROLLED && (0, b.g5)(e)
          ? (0, n.jsx)("div", {
                className: tp.kL,
                children: (0, n.jsx)(t_, {
                    quest: e,
                    analyticsCtxQuestContentPosition: i,
                    analyticsCtxQuestContentRowIndex: l,
                    analyticsCtxQuestContent: s,
                    analyticsCtxSourceQuestContent: a,
                }),
            })
          : (u === tA.UA.ENROLLED || u === tA.UA.INCOMPLETE) && (0, b.no)(e)
            ? (0, n.jsx)("div", {
                  className: tp.kL,
                  children: (0, n.jsx)(tL, { quest: e, content: s, sourceQuestContent: a }),
              })
            : (u === tA.UA.COMPLETED || u === tA.UA.CLAIMED) && (0, tN.vA)(e)
              ? (0, n.jsx)("div", {
                    className: tp.kL,
                    children: (0, n.jsx)(tQ, {
                        quest: e,
                        analyticsCtxQuestContent: s,
                        analyticsCtxSourceQuestContent: a,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                })
              : (0, n.jsx)("div", {
                    className: tp.kL,
                    children: (0, n.jsx)(tq, {
                        quest: e,
                        ctaQuestState: u,
                        analyticsCtxQuestContent: s,
                        analyticsCtxSourceQuestContent: a,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                });
}
var tD = s(796995);
async function tM() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function tR(t) {
    let {
            quest: e,
            questContent: s,
            isHovering: l,
            contentPosition: o,
            rowIndex: u,
            isVisibleInViewport: d,
            sourceQuestContent: x,
            questNameHeadingId: C,
        } = t,
        E = i.useRef(null),
        f = (0, ti.z)(),
        j = (0, c.SD)(e, f),
        N = f === tl.MA.NITRO && j,
        v = (0, r.bG)([te.default], () => te.default.getCurrentUser()),
        A = (0, ta.mq)(e.config, v),
        O = (0, ta.mH)(e.config, v),
        p = e.userStatus?.enrolledAt != null,
        { ref: y, scrollHeight: S } = (0, Q.wR)(),
        I = null != S && S > 104,
        { onAssetLoadComplete: w } = i.useContext(H.M),
        { expansionSpring: L } = (0, h.z)({ expansionSpring: +!!l, config: { ...B.N, clamp: !0 } }),
        q = e.userStatus?.completedAt != null,
        T = e.userStatus?.claimedAt != null,
        D = (0, ta.ks)(e.config),
        M = e.userStatus?.orbQuantityClaimed ?? (0, ta._Z)(e.config),
        R = (0, ta.wo)(e.config, v),
        k = (0, b.I6)(e),
        { completedRatio: P, completedRatioDisplay: z } = (0, c.O9)(e, k),
        F = (0, tn.A9)(e, x, tO.rE.QUEST_HOME_DESKTOP, Z.GameProfileSources.QuestHome, E),
        W = (function (t, e) {
            let { variant: s } = ts.Mk.useConfig({ location: e });
            return s === ts.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? t.messages.gamePublisher
                : s === ts.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? t.messages.questName
                  : V.intl.format(V.t.EAYZAr, { questName: t.messages.questName });
        })(e.config, tO.rE.QUEST_HOME_DESKTOP),
        X = i.useMemo(
            () =>
                T && D
                    ? (0, n.jsxs)(
                          tk,
                          {
                              questId: e.id,
                              children: [
                                  (0, n.jsx)(tt.A, { shouldUseThemeColor: !0, className: tD.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: M ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : T
                      ? (0, n.jsx)(tk, { questId: e.id, children: A })
                      : D
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      tk,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, n.jsx)(tt.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: tD.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: R ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(tk, { questId: e.id, children: O }, e.id),
                          }),
            [A, T, O, e.id, R, M, D],
        ),
        G = i.useMemo(() => {
            if (null != F)
                return (0, n.jsx)(g.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: tD.h_,
                    children: F,
                });
        }, [F]),
        td = (0, r.bG)([J.Ay], () => J.Ay.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: tD.kL,
        ref: E,
        children: [
            (0, n.jsx)(tr.A, { visible: N, glow: !0 }),
            (0, n.jsxs)(m.animated.div, {
                style: { maxHeight: L.to([0, 1], [104, (S ?? 0) + 12]) },
                className: tD.z,
                children: [
                    (0, n.jsx)("div", {
                        className: tD.c6,
                        children: (0, n.jsxs)(K.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !T && q && (0, n.jsx)("div", { className: tD.Nz }),
                                p
                                    ? (0, n.jsxs)("div", {
                                          className: tD.Tr,
                                          children: [
                                              q &&
                                                  (0, n.jsx)($.a, {
                                                      importData: tM,
                                                      className: tD.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !td,
                                                  }),
                                              (0, n.jsx)(to.A, {
                                                  size: 76,
                                                  percentComplete: P,
                                                  overlayText: l && !(0, _.Ic)(e) ? z : void 0,
                                                  children: (0, n.jsx)(tc.A, {
                                                      quest: e,
                                                      questContent: s,
                                                      autoplay: l,
                                                      onLoadComplete: w,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: x,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(tc.A, {
                                          quest: e,
                                          autoplay: l,
                                          questContent: s,
                                          className: tD.eB,
                                          onLoadComplete: w,
                                          lazyLoad: !0,
                                          sourceQuestContent: x,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: y,
                        className: a()(tD.FS, { [tD.wq]: !I }),
                        children: [
                            (0, n.jsx)(Y.D, {
                                id: C,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: tD.G$,
                                children: W,
                            }),
                            j
                                ? (0, n.jsxs)("div", {
                                      className: tD.xv,
                                      children: [
                                          (0, n.jsx)(g.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: tD.wx,
                                              children: X,
                                          }),
                                          (0, n.jsx)(tu.e, { questId: e.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, n.jsx)(g.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: tD.wx,
                                      children: X,
                                  }),
                            G,
                        ],
                    }),
                    I &&
                        (0, n.jsx)(m.animated.div, {
                            style: { opacity: (0, U.a)(L.to([0, 1], [1, 0])) },
                            className: tD.hS,
                        }),
                ],
            }),
            (0, n.jsx)(tb, { quest: e, questContent: s, contentPosition: o, rowIndex: u, sourceQuestContent: x }),
        ],
    });
}
let tk = i.memo(function (t) {
    let { questId: e, children: s } = t;
    return (0, n.jsx)(
        g.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: tD.wx, children: s },
        `${e}_reward`,
    );
});
var tP = s(688755),
    tU = s(831368),
    tz = s(905292);
function tH(t, e) {
    return null == e ? `quest-tile-${t}` : `quest-tile-${t}-${e}`;
}
function tK(t) {
    let {
            quest: e,
            className: s,
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
            handleHoverStart: N,
            handleHoverEnd: v,
            isEventWithinParent: A,
        } = (0, tP.B)({ quest: e, questContent: o, contentPosition: u, rowIndex: d, sourceQuestContent: h }),
        O = i.useContext(x.X),
        { visibilityElementRef: p, almostVisibleInViewport: y } = (0, tU.I)(
            O?.current?.getScrollerNode() ?? null,
            m ?? !1,
        );
    return (0, n.jsxs)("article", {
        id: tH(e.id, l),
        ref: (t) => {
            (C.current = t), (p.current = t);
        },
        "aria-labelledby": E,
        className: a()(tz.k, s),
        onMouseEnter: () => {
            j(!0), N();
        },
        onMouseLeave: () => {
            j(!1), v();
        },
        onFocus: (t) => {
            A(t) || (j(!0), N());
        },
        onBlur: (t) => {
            A(t) || (j(!1), v());
        },
        children: [
            (0, n.jsx)(G, {
                quest: e,
                isInFeaturedSection: r,
                isHovering: f,
                warningHints: g,
                isVisibleInViewport: y,
                sourceQuestContent: h,
            }),
            (0, n.jsx)(tR, {
                quest: e,
                questContent: o,
                isHovering: f,
                contentPosition: u,
                rowIndex: d,
                isVisibleInViewport: y,
                sourceQuestContent: h,
                questNameHeadingId: E,
            }),
        ],
    });
}
let tB = i.memo(function (t) {
    let e = (0, r.bG)([o.A], () => (null != t.questId ? o.A.getQuest(t.questId) : void 0), [t.questId]),
        s = i.useMemo(() => (null != t.quest ? t.quest : e), [e, t.quest]);
    return null == s
        ? null
        : (0, n.jsx)(d.R, {
              questOrQuests: s,
              questContent: t.questContent,
              questContentPosition: t.contentPosition,
              questContentRowIndex: t.rowIndex,
              trackGuildAndChannelMetadata: t.questContent === u.uF.QUESTS_EMBED,
              sourceQuestContent: t.sourceQuestContent,
              children: (e) => (0, n.jsx)(tK, { ...t, quest: s, impressionRef: e }),
          });
});
