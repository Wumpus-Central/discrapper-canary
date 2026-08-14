s.d(e, { sT: () => tK, Ay: () => tB });
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
    S = s(939249),
    p = s(782134),
    y = s(365199),
    I = s(820081),
    Q = s(765671),
    T = s(736653),
    q = s(814925),
    w = s(178540),
    L = s(561844),
    _ = s(590202),
    b = s(710969),
    D = s(792620),
    M = s(988436),
    U = s(918338),
    P = s(270045),
    R = s(201805),
    k = s(57718),
    H = s(398025),
    z = s(617986),
    K = s(516226),
    F = s(720875),
    B = s(419367),
    V = s(652215),
    W = s(375708),
    X = s(820526);
function G(t) {
    let { quest: e, warningHints: s, isDarkTheme: l, sourceQuestContent: a } = t,
        r = (0, w.O)((t) => t.getErrorHints(e.id)),
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
        S = 0 === C ? E.E : f.m,
        p = j.A.unsafe_rawColors.RED_345.css,
        y = 0 === C ? p : l ? j.A.colors.TEXT_DEFAULT : j.A.colors.WHITE;
    return (0, n.jsx)(m.animated.div, {
        style: { height: O.height, opacity: (0, H.a)(O.opacity) },
        children: (0, n.jsxs)("div", {
            ref: o,
            className: X.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: X.M5,
                    children: [
                        (0, n.jsx)(S, { size: "xs", color: y }),
                        (0, n.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "text-overlay-light",
                            children: v.at(0),
                        }),
                    ],
                }),
                0 === C &&
                    (0, n.jsx)(N.Q, {
                        text: W.intl.string(W.t["yKJi+/"]),
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
            isHovering: s,
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
        f = ((0, C.M)(E) ? V.NJ8.DARK : V.NJ8.LIGHT) === V.NJ8.DARK,
        N = (0, c.LS)(e),
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
    return (0, n.jsxs)("div", {
        className: X.kL,
        children: [
            (0, n.jsx)("div", {
                className: X.IC,
                children: (0, n.jsx)(U.A, {
                    quest: e,
                    isInteracting: s,
                    hideAssets: !r,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: X.l1,
                    imageClassName: X.c8,
                }),
            }),
            (0, n.jsx)("div", { className: X.Lw }),
            (0, n.jsxs)("div", {
                className: X.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: X.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: X.mY,
                                children: [
                                    (tt || e.preview) &&
                                        (0, n.jsxs)(v.B, {
                                            className: X.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                tt &&
                                                    !(0, b.Ic)(e) &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: W.intl.string(W.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                e.preview &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: W.intl.string(W.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    h &&
                                        (0, n.jsx)(O.m, {
                                            text: H
                                                ? W.intl.string(W.t.YsCuyF)
                                                : M
                                                  ? W.intl.string(W.t["74KqrR"])
                                                  : (0, b.Ic)(e)
                                                    ? W.intl.string(W.t.I6JG46)
                                                    : W.intl.string(W.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(S.D, {
                                                className: X.iI,
                                                "aria-label": W.intl.string(W.t.RscU7I),
                                                onClick: J,
                                                children: (0, n.jsx)(p.u, { color: "currentColor", className: X.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(P.C, {
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
                                            (0, n.jsx)(S.D, {
                                                ...t,
                                                innerRef: te,
                                                className: X.iI,
                                                "aria-label": W.intl.string(W.t.DEoVWZ),
                                                children: (0, n.jsx)(y.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: X.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(F.A, {
                                showPlaceholder: !r,
                                width: 100,
                                height: 30,
                                className: X.Iu,
                                children: (0, n.jsx)(k.Ay, {
                                    className: X.Iu,
                                    logotypeClassName: X.ND,
                                    quest: e,
                                    separatorSpacing: k.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: B,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: X.E_,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: X.O,
                                        children: [
                                            (0, n.jsx)(g.E, {
                                                tag: "span",
                                                className: X.vT,
                                                variant: "text-sm/medium",
                                                color: $,
                                                children: W.intl.string(W.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(q.A, {
                                                className: X.w$,
                                                size: 16,
                                                color: j.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": W.intl.string(W.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(I.B, {
                                                    color: j.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(g.E, {
                                                className: X.eA,
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
                                              className: X.xK,
                                              variant: "text-sm/medium",
                                              color: $,
                                              children: W.intl.format(W.t["7D8r4F"], { expiryDate: w }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(G, { quest: e, warningHints: a, isDarkTheme: f, sourceQuestContent: m }),
                ],
            }),
        ],
    });
}
var Y = s(604121),
    J = s(297264),
    Z = s(775602),
    tt = s(409626),
    te = s(106799),
    ts = s(287809),
    tn = s(192444),
    ti = s(3738),
    tl = s(646917),
    ta = s(576761),
    tr = s(801365),
    to = s(895253),
    tu = s(453384),
    tc = s(442734),
    td = s(646764),
    tx = s(843282),
    tm = s(825484),
    tC = s(821609),
    th = s(31300),
    tE = s(687966),
    tf = s(414499),
    tj = s(971649),
    tg = s(651892),
    tN = s(901406),
    tv = s(814793),
    tA = s(657113),
    tO = s(79545),
    tS = s(190107),
    tp = s(550032);
let ty = [
    {
        value: tS.fO.DESKTOP,
        get label() {
            return W.intl.string(W.t["QXc01+"]);
        },
    },
    {
        value: tS.fO.CONSOLE,
        get label() {
            return W.intl.string(W.t["8lAfuB"]);
        },
    },
];
function tI(t) {
    let e,
        s,
        { value: i } = t;
    switch (i) {
        case tS.fO.DESKTOP:
            (s = (0, n.jsx)(th.k, {})), (e = W.intl.string(W.t["QXc01+"]));
            break;
        case tS.fO.CONSOLE:
            (s = (0, n.jsx)(tE._, {})), (e = W.intl.string(W.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: tp.FL, children: [s, e] });
}
function tQ(t) {
    let e, s;
    if (0 === t.length) return null;
    switch (t[0].value) {
        case tS.fO.DESKTOP:
            (s = (0, n.jsx)(th.k, {})), (e = W.intl.string(W.t.g6Dr44));
            break;
        case tS.fO.CONSOLE:
            (s = (0, n.jsx)(tE._, {})), (e = W.intl.string(W.t.iyNbj5));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("span", { className: tp.FL, children: [s, e] });
}
function tT(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: a,
        } = t,
        { launchInGameActivity: r } = (0, c.zW)(e),
        o = (0, ti.NA)({ quest: e, shortText: !0 });
    return (0, n.jsx)("div", {
        className: tp.qz,
        children: (0, n.jsxs)(tm.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, n.jsx)(tC.$, {
                    variant: "secondary",
                    icon: e.config.features.includes(tS.Li.CLOUD_GAMING_ACTIVITY) ? tf.h : tE._,
                    text: o,
                    onClick: r,
                }),
                (0, n.jsx)(tA.A, {
                    quest: e,
                    surface: tO.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: s,
                    analyticsCtxSourceQuestContent: i,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: a,
                }),
            ],
        }),
    });
}
function tq(t) {
    let { quest: e, content: s, sourceQuestContent: l, fullWidth: a } = t,
        { externalLinkCta: r, handleOpenExternalLink: o } = (function (t) {
            let { quest: e, content: s, sourceQuestContent: n } = t,
                l = (0, tj.wW)();
            return {
                externalLinkCta: (0, tg.wr)(e),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, tN.pu)(e, {
                        content: s,
                        ctaContent: _.Cy.OPEN_GAME_LINK,
                        impressionId: l(),
                        sourceQuestContent: n,
                    });
                }, [e, s, n, l]),
            };
        })({ quest: e, content: s, sourceQuestContent: l });
    return (0, n.jsx)(tC.$, { variant: "secondary", text: r, onClick: o, fullWidth: a });
}
function tw(t) {
    let { quest: e, content: s, sourceQuestContent: i } = t;
    return (0, n.jsx)("div", {
        className: tp.qz,
        children: (0, n.jsx)(tq, { quest: e, content: s, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function tL(t) {
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
                case tO.UA.EXPIRED_CLAIMABLE:
                case tO.UA.EXPIRED:
                    return !0;
                case tO.UA.CLAIMED:
                case tO.UA.COMPLETED:
                    return (0, D.vv)(e) || (0, tv.vA)(e);
                case tO.UA.INCOMPLETE:
                case tO.UA.ENROLLED:
                    return (0, D.vv)(e) || (0, tv.vA)(e) || (0, D.I6)(e);
                case tO.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(s, e);
    return (0, n.jsx)("div", {
        className: tp.qz,
        children: (0, n.jsxs)(tm.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, n.jsx)(tq, { quest: e, content: i, sourceQuestContent: l }),
                (0, n.jsx)(tA.A, {
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
    let { quest: e, analyticsCtxQuestContent: s, analyticsCtxSourceQuestContent: i } = t;
    return (0, n.jsx)("div", {
        className: tp.qz,
        children: (0, n.jsxs)(tm.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, n.jsx)(tC.$, { variant: "secondary", disabled: !0, text: W.intl.string(W.t["8LKchl"]) }),
                (0, n.jsx)(tC.$, {
                    variant: "primary",
                    onClick: () => (0, z.m6)(e, s, i),
                    text: W.intl.string(W.t.vY9GgG),
                }),
            ],
        }),
    });
}
function tb(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: s,
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
        ? (0, n.jsx)(tx.Pw, {
              className: tp.dd,
              isSelected: () => !1,
              options: ty,
              placeholder: W.intl.string(W.t.drVw4T),
              renderOptionLabel: tI,
              renderOptionValue: tQ,
              select: h,
              serialize: (t) => {
                  switch (t) {
                      case tS.fO.DESKTOP:
                          return W.intl.string(W.t["QXc01+"]);
                      case tS.fO.CONSOLE:
                          return W.intl.string(W.t["8lAfuB"]);
                      default:
                          return W.intl.string(W.t.WLDKSb);
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
                        children: (0, n.jsx)(tA.A, {
                            quest: e,
                            surface: tO.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: s,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: a,
                            analyticsCtxQuestContentRowIndex: r,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: tp.qz,
                        children: (0, n.jsx)(tx.Pw, {
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
                            options: ty,
                            placeholder: W.intl.string(W.t.drVw4T),
                            renderOptionLabel: tI,
                            renderOptionValue: tQ,
                            select: h,
                            serialize: (t) => {
                                switch (t) {
                                    case tS.fO.DESKTOP:
                                        return W.intl.string(W.t["QXc01+"]);
                                    case tS.fO.CONSOLE:
                                        return W.intl.string(W.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, n.jsx)(tL, {
                quest: e,
                ctaQuestState: tO.UA.ENROLLED,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: r,
            });
}
function tD(t) {
    let { quest: e, questContent: s, contentPosition: i, rowIndex: l, sourceQuestContent: a } = t,
        u = (0, tO.Pd)(e),
        { isQuestEnrollmentBlocked: c } = (0, r.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return u === tO.UA.UNENROLLED && c
        ? (0, n.jsx)("div", {
              className: tp.kL,
              children: (0, n.jsx)(t_, { quest: e, analyticsCtxQuestContent: s, analyticsCtxSourceQuestContent: a }),
          })
        : u === tO.UA.ENROLLED && (0, D.g5)(e)
          ? (0, n.jsx)("div", {
                className: tp.kL,
                children: (0, n.jsx)(tb, {
                    quest: e,
                    analyticsCtxQuestContentPosition: i,
                    analyticsCtxQuestContentRowIndex: l,
                    analyticsCtxQuestContent: s,
                    analyticsCtxSourceQuestContent: a,
                }),
            })
          : (u === tO.UA.ENROLLED || u === tO.UA.INCOMPLETE) && (0, D.no)(e)
            ? (0, n.jsx)("div", {
                  className: tp.kL,
                  children: (0, n.jsx)(tw, { quest: e, content: s, sourceQuestContent: a }),
              })
            : (u === tO.UA.COMPLETED || u === tO.UA.CLAIMED) && (0, tv.vA)(e)
              ? (0, n.jsx)("div", {
                    className: tp.kL,
                    children: (0, n.jsx)(tT, {
                        quest: e,
                        analyticsCtxQuestContent: s,
                        analyticsCtxSourceQuestContent: a,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                })
              : (0, n.jsx)("div", {
                    className: tp.kL,
                    children: (0, n.jsx)(tL, {
                        quest: e,
                        ctaQuestState: u,
                        analyticsCtxQuestContent: s,
                        analyticsCtxSourceQuestContent: a,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                });
}
var tM = s(796995);
async function tU() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function tP(t) {
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
        f = (0, tl.z)(),
        j = (0, c.SD)(e, f),
        N = f === ta.MA.NITRO && j,
        v = (0, r.bG)([ts.default], () => ts.default.getCurrentUser()),
        A = (0, tr.mq)(e.config, v),
        O = (0, tr.mH)(e.config, v),
        S = e.userStatus?.enrolledAt != null,
        { ref: p, scrollHeight: y } = (0, Q.wR)(),
        I = null != y && y > 104,
        { onAssetLoadComplete: T } = i.useContext(K.M),
        { expansionSpring: q } = (0, h.z)({ expansionSpring: +!!l, config: { ...B.N, clamp: !0 } }),
        w = e.userStatus?.completedAt != null,
        L = e.userStatus?.claimedAt != null,
        _ = (0, tr.ks)(e.config),
        M = e.userStatus?.orbQuantityClaimed ?? (0, tr._Z)(e.config),
        U = (0, tr.wo)(e.config, v),
        P = (0, D.I6)(e),
        { completedRatio: R, completedRatioDisplay: k } = (0, c.O9)(e, P),
        z = (0, ti.A9)(e, x, tS.rE.QUEST_HOME_DESKTOP, tt.GameProfileSources.QuestHome, E),
        V = (function (t, e) {
            let { variant: s } = tn.Mk.useConfig({ location: e });
            return s === tn.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? t.messages.gamePublisher
                : s === tn.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? t.messages.questName
                  : W.intl.format(W.t.EAYZAr, { questName: t.messages.questName });
        })(e.config, tS.rE.QUEST_HOME_DESKTOP),
        X = i.useMemo(
            () =>
                L && _
                    ? (0, n.jsxs)(
                          tR,
                          {
                              questId: e.id,
                              children: [
                                  (0, n.jsx)(te.A, { shouldUseThemeColor: !0, className: tM.Kq, customSize: 14 }),
                                  W.intl.format(W.t["nLXlh+"], { orbAmount: M ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : L
                      ? (0, n.jsx)(tR, { questId: e.id, children: A })
                      : _
                        ? W.intl.format(W.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      tR,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, n.jsx)(te.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: tM.Kq,
                                                  customSize: 14,
                                              }),
                                              W.intl.format(W.t["nLXlh+"], { orbAmount: U ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : W.intl.format(W.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(tR, { questId: e.id, children: O }, e.id),
                          }),
            [A, L, O, e.id, U, M, _],
        ),
        G = i.useMemo(() => {
            if (null != z)
                return (0, n.jsx)(g.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: tM.h_,
                    children: z,
                });
        }, [z]),
        $ = (0, r.bG)([Z.Ay], () => Z.Ay.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: tM.kL,
        ref: E,
        children: [
            (0, n.jsx)(to.A, { visible: N, glow: !0 }),
            (0, n.jsxs)(m.animated.div, {
                style: { maxHeight: q.to([0, 1], [104, (y ?? 0) + 12]) },
                className: tM.z,
                children: [
                    (0, n.jsx)("div", {
                        className: tM.c6,
                        children: (0, n.jsxs)(F.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !L && w && (0, n.jsx)("div", { className: tM.Nz }),
                                S
                                    ? (0, n.jsxs)("div", {
                                          className: tM.Tr,
                                          children: [
                                              w &&
                                                  (0, n.jsx)(Y.a, {
                                                      importData: tU,
                                                      className: tM.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !$,
                                                  }),
                                              (0, n.jsx)(tu.A, {
                                                  size: 76,
                                                  percentComplete: R,
                                                  overlayText: l && !(0, b.Ic)(e) ? k : void 0,
                                                  children: (0, n.jsx)(td.A, {
                                                      quest: e,
                                                      questContent: s,
                                                      autoplay: l,
                                                      onLoadComplete: T,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: x,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(td.A, {
                                          quest: e,
                                          autoplay: l,
                                          questContent: s,
                                          className: tM.eB,
                                          onLoadComplete: T,
                                          lazyLoad: !0,
                                          sourceQuestContent: x,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: p,
                        className: a()(tM.FS, { [tM.wq]: !I }),
                        children: [
                            (0, n.jsx)(J.D, {
                                id: C,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: tM.G$,
                                children: V,
                            }),
                            j
                                ? (0, n.jsxs)("div", {
                                      className: tM.xv,
                                      children: [
                                          (0, n.jsx)(g.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: tM.wx,
                                              children: X,
                                          }),
                                          (0, n.jsx)(tc.e, { questId: e.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, n.jsx)(g.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: tM.wx,
                                      children: X,
                                  }),
                            G,
                        ],
                    }),
                    I &&
                        (0, n.jsx)(m.animated.div, {
                            style: { opacity: (0, H.a)(q.to([0, 1], [1, 0])) },
                            className: tM.hS,
                        }),
                ],
            }),
            (0, n.jsx)(tD, { quest: e, questContent: s, contentPosition: o, rowIndex: u, sourceQuestContent: x }),
        ],
    });
}
let tR = i.memo(function (t) {
    let { questId: e, children: s } = t;
    return (0, n.jsx)(
        g.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: tM.wx, children: s },
        `${e}_reward`,
    );
});
var tk = s(688755),
    tH = s(831368),
    tz = s(905292);
function tK(t, e) {
    return null == e ? `quest-tile-${t}` : `quest-tile-${t}-${e}`;
}
function tF(t) {
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
        } = (0, tk.B)({ quest: e, questContent: o, contentPosition: u, rowIndex: d, sourceQuestContent: h }),
        O = i.useContext(x.X),
        { visibilityElementRef: S, almostVisibleInViewport: p } = (0, tH.I)(
            O?.current?.getScrollerNode() ?? null,
            m ?? !1,
        );
    return (0, n.jsxs)("article", {
        id: tK(e.id, l),
        ref: (t) => {
            (C.current = t), (S.current = t);
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
            (0, n.jsx)($, {
                quest: e,
                isInFeaturedSection: r,
                isHovering: f,
                warningHints: g,
                isVisibleInViewport: p,
                sourceQuestContent: h,
            }),
            (0, n.jsx)(tP, {
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
              children: (e) => (0, n.jsx)(tF, { ...t, quest: s, impressionRef: e }),
          });
});
