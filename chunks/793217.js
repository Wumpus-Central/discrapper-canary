n.d(t, { Ay: () => e0, sT: () => eJ });
var s = n(477900),
    i = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(855986),
    o = n(122760),
    u = n(506988),
    c = n(914313),
    d = n(61387),
    x = n(280905),
    m = n(321503);
(n(134528), n(947204));
var E = n(120692),
    h = n(462887),
    C = n(717421),
    f = n(695366),
    g = n(885574),
    A = n(646514),
    v = n(834730),
    j = n(123292),
    S = n(331322),
    I = n(805251),
    N = n(866665),
    p = n(939249),
    O = n(782134),
    y = n(365199),
    T = n(820081),
    q = n(765671),
    w = n(736653),
    L = n(152578),
    D = n(178540),
    Q = n(561844),
    _ = n(590202),
    U = n(977416),
    b = n(792620),
    R = n(988436),
    P = n(918338),
    M = n(270045),
    k = n(201805),
    H = n(57718),
    F = n(398025),
    K = n(321538),
    z = n(516226),
    B = n(720875),
    G = n(947079),
    V = n(742070),
    X = n(662940),
    W = n(535618),
    Y = n(419367),
    $ = n(652215),
    J = n(792996),
    Z = n(322335);
function ee(e) {
    let { quest: t, warningHints: n, isDarkTheme: l, sourceQuestContent: r } = e,
        { shorterHeight: a } = i.useContext(G.f),
        o = !l && !a,
        u = (0, D.O)((e) => e.getErrorHints(t.id)),
        { ref: c, height: x = 0 } = (0, q.Ay)([u]),
        m = t.userStatus?.completedAt != null,
        h = (0, d.Vn)(t),
        { type: S, hints: I } = i.useMemo(
            () =>
                m || h
                    ? { type: 2, hints: [] }
                    : u.length > 0
                      ? { type: 0, hints: u.map((e) => e.message) }
                      : n.length > 0
                        ? { type: 1, hints: n }
                        : { type: 2, hints: [] },
            [u, m, h, n],
        ),
        N = 2 !== S,
        p = (0, C.z)({ opacity: +!!N, height: N ? x : 0, config: Y.N }),
        O = 0 === S ? f.CircleErrorIcon : g.CircleInformationIcon,
        y = A.A.unsafe_rawColors.RED_345.css,
        T = 0 === S ? y : o ? A.A.colors.WHITE : A.A.colors.TEXT_DEFAULT;
    return (0, s.jsx)(E.animated.div, {
        style: { height: p.height, opacity: (0, F.a)(p.opacity) },
        children: (0, s.jsxs)("div", {
            ref: c,
            className: Z.XZ,
            children: [
                (0, s.jsxs)("div", {
                    className: Z.M5,
                    children: [
                        (0, s.jsx)(O, { size: "xs", color: T }),
                        (0, s.jsx)(v.E, {
                            variant: "body-xs/medium",
                            color: o ? "text-overlay-light" : "text-muted",
                            children: I.at(0),
                        }),
                    ],
                }),
                0 === S &&
                    (0, s.jsx)(j.Q, {
                        text: J.intl.string(J.t["yKJi+/"]),
                        onClick: () => (0, R.i)({ quest: t, sourceQuestContent: r }),
                        variant: a ? "primary" : "always-white",
                        textVariant: "body-sm/semibold",
                    }),
            ],
        }),
    });
}
function et(e) {
    let {
            quest: t,
            isHovering: n,
            isInFeaturedSection: l,
            warningHints: a,
            isVisibleInViewport: o,
            onCtxMenuClose: c,
            onCtxMenuOpen: x,
            onCtxMenuSelect: m,
            sourceQuestContent: E,
        } = e,
        { shorterHeight: C } = i.useContext(G.f),
        f = (0, b.IO)(t),
        g = (0, w.Ay)(),
        j = (0, h.M)(g) ? $.NJ8.DARK : $.NJ8.LIGHT,
        q = j === $.NJ8.DARK,
        D = (0, d.LS)(t),
        R = t.userStatus?.claimedAt != null,
        F = (0, d.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        Y = t.userStatus?.enrolledAt != null,
        et = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: en } = i.useContext(z.M),
        es = q || C ? "text-muted" : "text-overlay-light",
        ei = (0, d.Hv)() && !et,
        el = i.useCallback(() => {
            if (f) {
                if (ei) {
                    ((0, Q.Y5)({
                        questId: t.id,
                        questContent: u.uF.QUEST_HOME_DESKTOP,
                        questContentCTA: _.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: E,
                    }),
                        (0, K.FS)());
                    return;
                }
                (0, K.d5)({
                    quest: t,
                    questContent: u.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: E,
                    sourceQuestContentCTA: _.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
            }
        }, [f, t, E, ei]),
        er = (0, k.UX)(t.id),
        ea = !0 === l || er,
        eo = i.useRef(null),
        { showGameLogo: eu, badge: ec } = i.useContext(G.f),
        ed = (0, W.A)(t, ec.countdown),
        ex = ec.countdown && null != ed,
        em = ex ? ed : ec.new && !et && !D && !Y && (0, X.Bq)(t.config) ? J.intl.string(J.t.X6ziWN) : null;
    return (0, s.jsxs)("div", {
        className: r()(Z.kL, { [Z.A8]: C }),
        children: [
            (0, s.jsx)("div", {
                className: Z.IC,
                children: (0, s.jsx)(P.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !o,
                    imageSize: { width: 1320, height: 370 },
                    variant: "banner",
                }),
            }),
            (0, s.jsx)("div", { className: Z.Lw }),
            (0, s.jsxs)("div", {
                className: Z.nX,
                children: [
                    (0, s.jsxs)("div", {
                        className: Z.PG,
                        children: [
                            (0, s.jsxs)("div", {
                                className: Z.mY,
                                children: [
                                    (ea || t.preview || ec.new || ec.countdown || ec.duration) &&
                                        (0, s.jsxs)(S.B, {
                                            className: Z.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ea &&
                                                    !(0, U.Ic)(t) &&
                                                    (0, s.jsx)(I.E, {
                                                        type: { text: J.intl.string(J.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                t.preview &&
                                                    (0, s.jsx)(I.E, {
                                                        type: { text: J.intl.string(J.t.SKNnqq) },
                                                        variant: "primary",
                                                    }),
                                                (null != em || ec.duration) &&
                                                    (0, s.jsx)(V.Q, {
                                                        quest: t,
                                                        content: { leadingText: em, showTask: ec.duration },
                                                    }),
                                            ],
                                        }),
                                    f &&
                                        (0, s.jsx)(N.m, {
                                            text: et
                                                ? J.intl.string(J.t.YsCuyF)
                                                : Y
                                                  ? J.intl.string(J.t["74KqrR"])
                                                  : (0, U.Ic)(t)
                                                    ? J.intl.string(J.t.I6JG46)
                                                    : J.intl.string(J.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, s.jsx)(p.D, {
                                                className: Z.iI,
                                                "aria-label": J.intl.string(J.t.RscU7I),
                                                onClick: el,
                                                children: (0, s.jsx)(O.PlayIcon, {
                                                    color: "currentColor",
                                                    className: Z.A9,
                                                }),
                                            }),
                                        }),
                                    (0, s.jsx)(M.C, {
                                        onOpen: x,
                                        onClose: c,
                                        onSelect: m,
                                        questContent: u.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: E,
                                        returnRef: eo,
                                        children: (e) =>
                                            (0, s.jsx)(p.D, {
                                                ...e,
                                                innerRef: eo,
                                                className: Z.iI,
                                                "aria-label": J.intl.string(J.t.DEoVWZ),
                                                children: (0, s.jsx)(y.MoreHorizontalIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: Z.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(B.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: r()(Z.Iu, { [Z.OM]: !eu }),
                                children: (0, s.jsx)(H.Ay, {
                                    className: r()(Z.Iu, { [Z.OM]: !eu }),
                                    logotypeClassName: Z.ND,
                                    quest: t,
                                    theme: C ? j : $.NJ8.DARK,
                                    separatorSpacing: H.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: en,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: Z.E_,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: Z.O,
                                        children: [
                                            (0, s.jsx)(v.E, {
                                                tag: "span",
                                                className: Z.vT,
                                                variant: "body-sm/medium",
                                                color: es,
                                                children: J.intl.string(J.t.VAbKhK),
                                            }),
                                            (0, s.jsx)(L.A, {
                                                className: Z.w$,
                                                size: 16,
                                                color: A.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": J.intl.string(J.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, s.jsx)(T.CheckmarkSmallBoldIcon, {
                                                    color: A.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, s.jsx)(v.E, {
                                                className: Z.eA,
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: C ? "text-strong" : "text-overlay-light",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    D || R || ex
                                        ? null
                                        : (0, s.jsx)(v.E, {
                                              className: Z.xK,
                                              variant: "body-sm/medium",
                                              color: es,
                                              children: J.intl.format(J.t["7D8r4F"], { expiryDate: F }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(ee, { quest: t, warningHints: a, isDarkTheme: q, sourceQuestContent: E }),
                ],
            }),
        ],
    });
}
var en = n(604121),
    es = n(534514),
    ei = n(770178),
    el = n(775602),
    er = n(409626),
    ea = n(106799),
    eo = n(287809),
    eu = n(870273),
    ec = n(646917),
    ed = n(576761),
    ex = n(417404),
    em = n(117634),
    eE = n(453384),
    eh = n(442734),
    eC = n(639701),
    ef = n(843282),
    eg = n(31300),
    eA = n(687966),
    ev = n(825484),
    ej = n(821609),
    eS = n(414499),
    eI = n(408278),
    eN = n(743368),
    ep = n(971649),
    eO = n(651892),
    ey = n(574112),
    eT = n(814793),
    eq = n(452411),
    ew = n(79545),
    eL = n(221596),
    eD = n(336779);
let eQ = [
    {
        value: eL.fO.DESKTOP,
        get label() {
            return J.intl.string(J.t["QXc01+"]);
        },
    },
    {
        value: eL.fO.CONSOLE,
        get label() {
            return J.intl.string(J.t["8lAfuB"]);
        },
    },
];
function e_(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case eL.fO.DESKTOP:
            ((n = (0, s.jsx)(eg.ScreenIcon, {})), (t = J.intl.string(J.t["QXc01+"])));
            break;
        case eL.fO.CONSOLE:
            ((n = (0, s.jsx)(eA.GameControllerIcon, {})), (t = J.intl.string(J.t["8lAfuB"])));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("div", { className: eD.FL, children: [n, t] });
}
function eU(e) {
    let t, n;
    if (0 === e.length) return null;
    switch (e[0].value) {
        case eL.fO.DESKTOP:
            ((n = (0, s.jsx)(eg.ScreenIcon, {})), (t = J.intl.string(J.t.g6Dr44)));
            break;
        case eL.fO.CONSOLE:
            ((n = (0, s.jsx)(eA.GameControllerIcon, {})), (t = J.intl.string(J.t.iyNbj5)));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("span", { className: eD.FL, children: [n, t] });
}
function eb(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: r,
        } = e,
        { launchInGameActivity: a } = (0, d.zW)(t),
        o = (0, eu.NA)({ quest: t, shortText: !0 });
    return (0, s.jsx)("div", {
        className: eD.qz,
        children: (0, s.jsxs)(ev.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(ej.$, {
                    variant: "secondary",
                    icon: t.config.features.includes(eL.Li.CLOUD_GAMING_ACTIVITY)
                        ? eS.CloudIcon
                        : eA.GameControllerIcon,
                    text: o,
                    onClick: a,
                }),
                (0, s.jsx)(eq.A, {
                    quest: t,
                    surface: ew.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: i,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: r,
                }),
            ],
        }),
    });
}
function eR(e) {
    let { quest: t, content: n, sourceQuestContent: l, fullWidth: r } = e,
        { externalLinkCta: a, handleOpenExternalLink: o } = (function (e) {
            let { quest: t, content: n, sourceQuestContent: s } = e,
                l = (0, ep.wW)();
            return {
                externalLinkCta: (0, eO.wr)(t),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, ey.pu)(t, {
                        content: n,
                        ctaContent: _.Cy.OPEN_GAME_LINK,
                        impressionId: l(),
                        sourceQuestContent: s,
                    });
                }, [t, n, s, l]),
            };
        })({ quest: t, content: n, sourceQuestContent: l }),
        { iconOnlyCTA: u } = i.useContext(G.f);
    return u && !r
        ? (0, s.jsx)(N.m, {
              text: a,
              ariaHidden: !0,
              children: (0, s.jsx)(eI.K, {
                  variant: "secondary",
                  icon: eN.LinkExternalMediumIcon,
                  "aria-label": a,
                  onClick: o,
              }),
          })
        : (0, s.jsx)(ej.$, { variant: "secondary", text: a, onClick: o, fullWidth: r });
}
function eP(e) {
    let { quest: t, content: n, sourceQuestContent: i } = e;
    return (0, s.jsx)("div", {
        className: eD.qz,
        children: (0, s.jsx)(eR, { quest: t, content: n, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function eM(e) {
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
                case ew.UA.EXPIRED_CLAIMABLE:
                case ew.UA.EXPIRED:
                case ew.UA.EXPIRED_CLAIMED:
                    return !0;
                case ew.UA.CLAIMED:
                case ew.UA.COMPLETED:
                    return (0, b.vv)(t) || (0, eT.vA)(t);
                case ew.UA.INCOMPLETE:
                case ew.UA.ENROLLED:
                    return (0, b.vv)(t) || (0, eT.vA)(t) || (0, b.I6)(t);
                case ew.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(n, t);
    return (0, s.jsx)("div", {
        className: eD.qz,
        children: (0, s.jsxs)(ev.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, s.jsx)(eR, { quest: t, content: i, sourceQuestContent: l }),
                (0, s.jsx)(eq.A, {
                    quest: t,
                    surface: ew.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: i,
                    analyticsCtxSourceQuestContent: l,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: a,
                }),
            ],
        }),
    });
}
function ek(e) {
    let { quest: t, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: i } = e;
    return (0, s.jsx)("div", {
        className: eD.qz,
        children: (0, s.jsxs)(ev.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(ej.$, { variant: "secondary", disabled: !0, text: J.intl.string(J.t["8LKchl"]) }),
                (0, s.jsx)(ej.$, {
                    variant: "primary",
                    onClick: () => (0, K.m6)(t, n, i),
                    text: J.intl.string(J.t.vY9GgG),
                }),
            ],
        }),
    });
}
function eH(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        o = (0, d.fc)(t),
        c = (0, D.O)((e) => e.clearErrorHints),
        [x, m, E] = (0, d.Qo)(t, o),
        h = i.useCallback(
            (e) => {
                (E(e), e === eL.fO.DESKTOP && c(t.id));
            },
            [E, c, t.id],
        );
    return x === u.X0.SELECT
        ? (0, s.jsx)(ef.Pw, {
              className: eD.dd,
              isSelected: () => !1,
              options: eQ,
              placeholder: J.intl.string(J.t.drVw4T),
              renderOptionLabel: e_,
              renderOptionValue: eU,
              select: h,
              serialize: (e) => {
                  switch (e) {
                      case eL.fO.DESKTOP:
                          return J.intl.string(J.t["QXc01+"]);
                      case eL.fO.CONSOLE:
                          return J.intl.string(J.t["8lAfuB"]);
                      default:
                          return J.intl.string(J.t.WLDKSb);
                  }
              },
              size: "sm",
              "data-migration-pending": !0,
          })
        : m.length > 1
          ? (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)("div", {
                        className: eD.qz,
                        children: (0, s.jsx)(eq.A, {
                            quest: t,
                            surface: ew.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: n,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: r,
                            analyticsCtxQuestContentRowIndex: a,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: eD.qz,
                        children: (0, s.jsx)(ef.Pw, {
                            className: eD.xZ,
                            isSelected: (e) => {
                                switch (x) {
                                    case u.X0.DESKTOP:
                                        return e === eL.fO.DESKTOP;
                                    case u.X0.CONSOLE:
                                        return e === eL.fO.CONSOLE;
                                    default:
                                        return !1;
                                }
                            },
                            options: eQ,
                            placeholder: J.intl.string(J.t.drVw4T),
                            renderOptionLabel: e_,
                            renderOptionValue: eU,
                            select: h,
                            serialize: (e) => {
                                switch (e) {
                                    case eL.fO.DESKTOP:
                                        return J.intl.string(J.t["QXc01+"]);
                                    case eL.fO.CONSOLE:
                                        return J.intl.string(J.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, s.jsx)(eM, {
                quest: t,
                ctaQuestState: ew.UA.ENROLLED,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: a,
            });
}
function eF(e) {
    let { quest: t, questContent: n, contentPosition: l, rowIndex: u, sourceQuestContent: c } = e,
        { shorterHeight: d } = i.useContext(G.f),
        x = (0, ew.Pd)(t),
        { isQuestEnrollmentBlocked: m } = (0, a.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return x === ew.UA.UNENROLLED && m
        ? (0, s.jsx)("div", {
              className: r()(eD.kL, { [eD.bc]: d }),
              children: (0, s.jsx)(ek, { quest: t, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: c }),
          })
        : x === ew.UA.ENROLLED && (0, b.g5)(t)
          ? (0, s.jsx)("div", {
                className: r()(eD.kL, { [eD.bc]: d }),
                children: (0, s.jsx)(eH, {
                    quest: t,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: u,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: c,
                }),
            })
          : (x === ew.UA.ENROLLED || x === ew.UA.INCOMPLETE) && (0, b.no)(t)
            ? (0, s.jsx)("div", {
                  className: r()(eD.kL, { [eD.bc]: d }),
                  children: (0, s.jsx)(eP, { quest: t, content: n, sourceQuestContent: c }),
              })
            : (x === ew.UA.COMPLETED || x === ew.UA.CLAIMED) && (0, eT.vA)(t)
              ? (0, s.jsx)("div", {
                    className: r()(eD.kL, { [eD.bc]: d }),
                    children: (0, s.jsx)(eb, {
                        quest: t,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: c,
                        analyticsCtxQuestContentPosition: l,
                        analyticsCtxQuestContentRowIndex: u,
                    }),
                })
              : (0, s.jsx)("div", {
                    className: r()(eD.kL, { [eD.bc]: d }),
                    children: (0, s.jsx)(eM, {
                        quest: t,
                        ctaQuestState: x,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: c,
                        analyticsCtxQuestContentPosition: l,
                        analyticsCtxQuestContentRowIndex: u,
                    }),
                });
}
var eK = n(443541),
    ez = n(503666);
async function eB() {
    return await n.e(40119).then(n.t.bind(n, 718698, 19));
}
function eG(e) {
    let {
            quest: t,
            questContent: n,
            isHovering: l,
            contentPosition: o,
            rowIndex: u,
            isVisibleInViewport: x,
            sourceQuestContent: m,
            questNameHeadingId: h,
        } = e,
        {
            showQuestTitle: f,
            compactReward: g,
            gameIconReward: A,
            underlinedMultiplier: j,
            shorterHeight: S,
        } = i.useContext(G.f),
        I = S ? 58 : 80,
        N = I + 24,
        p = i.useRef(null),
        O = (0, ec.z)(),
        y = (0, d.SD)(t, O),
        T = j && y,
        w = O === ed.MA.NITRO && y,
        L = (0, a.bG)([eo.default], () => eo.default.getCurrentUser()),
        D = (0, ex.mq)(t.config, L),
        Q = (0, ex.mH)(t.config, L),
        _ = t.userStatus?.enrolledAt != null,
        R = (0, eu.A9)(t, m, eL.rE.QUEST_HOME_DESKTOP, er.GameProfileSources.QuestHome, p),
        { ref: P, scrollHeight: M } = (0, q.wR)(),
        k = i.useRef(null),
        [H, K] = i.useState(0),
        V = H > 0,
        X = S ? N + H : (M ?? 0) + 12,
        W = null != M && M > N,
        { onAssetLoadComplete: $ } = i.useContext(z.M),
        Z = l && (!S || (null != R && V)),
        { expansionSpring: ee } = (0, C.z)({ expansionSpring: +!!Z, config: { ...Y.N, clamp: !0 } }),
        et = ee.to([0, 1], [N, X]),
        ef = t.userStatus?.completedAt != null,
        eg = t.userStatus?.claimedAt != null,
        eA = (0, ex.ks)(t.config),
        ev = t.userStatus?.orbQuantityClaimed ?? (0, ex._Z)(t.config),
        ej = (0, ex.wo)(t.config, L),
        eS = (0, b.I6)(t),
        { completedRatio: eI, completedRatioDisplay: eN } = (0, d.O9)(t, eS),
        ep = (function (e, t) {
            let { variant: n } = c.Mk.useConfig({ location: t });
            return n === c.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? e.messages.gamePublisher
                : n === c.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? e.messages.questName
                  : J.intl.format(J.t.EAYZAr, { questName: e.messages.questName });
        })(t.config, eL.rE.QUEST_HOME_DESKTOP),
        eO = eV(!f),
        ey = i.useMemo(
            () =>
                g && eA
                    ? (0, s.jsxs)(eX, {
                          questId: t.id,
                          large: !f,
                          children: [
                              (0, s.jsx)(ea.A, { shouldUseThemeColor: !0, className: ez.Kq, customSize: 14 }),
                              J.intl.data.formatNumber((eg ? ev : ej) ?? 0),
                          ],
                      })
                    : eg && eA
                      ? (0, s.jsxs)(
                            eX,
                            {
                                questId: t.id,
                                large: !f,
                                children: [
                                    (0, s.jsx)(ea.A, { shouldUseThemeColor: !0, className: ez.Kq, customSize: 14 }),
                                    J.intl.format(J.t["nLXlh+"], { orbAmount: ev ?? 0 }),
                                ],
                            },
                            t.id,
                        )
                      : eg || g
                        ? (0, s.jsx)(eX, { questId: t.id, large: !f, children: D })
                        : eA
                          ? J.intl.format(J.t["0IUT4Y"], {
                                rewardWithArticleHook: () =>
                                    (0, s.jsxs)(
                                        eX,
                                        {
                                            questId: t.id,
                                            large: !f,
                                            children: [
                                                (0, s.jsx)(ea.A, {
                                                    shouldUseThemeColor: !0,
                                                    className: ez.Kq,
                                                    customSize: 14,
                                                }),
                                                J.intl.format(J.t["nLXlh+"], { orbAmount: ej ?? 0 }),
                                            ],
                                        },
                                        t.id,
                                    ),
                            })
                          : J.intl.format(J.t["0IUT4Y"], {
                                rewardWithArticleHook: () =>
                                    (0, s.jsx)(eX, { questId: t.id, large: !f, children: Q }, t.id),
                            }),
            [D, eg, Q, t.id, ej, ev, eA, g, f],
        ),
        eT = i.useMemo(() => {
            if (null != R)
                return (0, s.jsx)(v.E, {
                    ref: k,
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: ez.h_,
                    children: R,
                });
        }, [R]),
        eq = i.useCallback(() => {
            let e = k.current;
            S && !Z && null != e && K(e.scrollHeight > e.clientHeight ? e.scrollHeight - e.clientHeight : 0);
        }, [S, Z]);
    ((0, ei.g)(k, eq, [R, ep, ey], { enabled: S, fireOnMount: !0, fireOnDepsChange: !0 }),
        i.useEffect(() => {
            if (S)
                return (
                    document.fonts.addEventListener("loadingdone", eq),
                    () => document.fonts.removeEventListener("loadingdone", eq)
                );
        }, [S, eq]));
    let ew = (0, a.bG)([el.Ay], () => el.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: r()(ez.kL, { [ez.A8]: S, [ez.wF]: S && !V, [ez.Bt]: S && Z }),
        ref: p,
        children: [
            (0, s.jsx)(em.A, { visible: w, glow: !0 }),
            (0, s.jsxs)(E.animated.div, {
                style: { maxHeight: et, height: S ? et : void 0 },
                className: ez.z,
                children: [
                    (0, s.jsx)("div", {
                        className: ez.c6,
                        children: (0, s.jsxs)(B.A, {
                            showPlaceholder: !x,
                            width: I,
                            height: I,
                            children: [
                                !eg && ef && (0, s.jsx)("div", { className: ez.Nz }),
                                _
                                    ? (0, s.jsxs)("div", {
                                          className: ez.Tr,
                                          children: [
                                              ef &&
                                                  (0, s.jsx)(en.a, {
                                                      importData: eB,
                                                      className: ez.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ew,
                                                  }),
                                              (0, s.jsx)(eE.A, {
                                                  size: I - 4,
                                                  percentComplete: eI,
                                                  overlayText: l && !(0, U.Ic)(t) ? eN : void 0,
                                                  children: (0, s.jsx)(eC.A, {
                                                      quest: t,
                                                      useGameIcon: A && eA,
                                                      location: eL.rE.QUEST_HOME_DESKTOP,
                                                      questContent: n,
                                                      autoplay: l,
                                                      onLoadComplete: $,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: m,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(eC.A, {
                                          quest: t,
                                          useGameIcon: A && eA,
                                          location: eL.rE.QUEST_HOME_DESKTOP,
                                          autoplay: l,
                                          questContent: n,
                                          className: ez.eB,
                                          onLoadComplete: $,
                                          lazyLoad: !0,
                                          sourceQuestContent: m,
                                      }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        ref: P,
                        className: r()(ez.FS, { [ez.wq]: !W }),
                        children: [
                            f &&
                                (0, s.jsx)(es.D, {
                                    id: h,
                                    variant: "body-sm/medium",
                                    color: "text-brand",
                                    className: ez.G$,
                                    children: ep,
                                }),
                            y
                                ? (0, s.jsxs)("div", {
                                      className: ez.xv,
                                      children: [
                                          (0, s.jsx)(v.E, {
                                              variant: eO,
                                              color: "text-strong",
                                              className: ez.wx,
                                              children: ey,
                                          }),
                                          !T && (0, s.jsx)(eh.e, { questId: t.id, orbMultiplierEligibility: O }),
                                      ],
                                  })
                                : (0, s.jsx)(v.E, {
                                      variant: eO,
                                      color: "text-strong",
                                      className: ez.wx,
                                      children: ey,
                                  }),
                            eT,
                            T &&
                                (0, s.jsx)("div", {
                                    className: ez.i9,
                                    children: (0, s.jsx)(eK.f, { questId: t.id, orbMultiplierEligibility: O }),
                                }),
                        ],
                    }),
                    (S ? V : W) &&
                        (0, s.jsx)(E.animated.div, {
                            style: { opacity: (0, F.a)(ee.to([0, 1], [1, 0])) },
                            className: ez.hS,
                        }),
                ],
            }),
            (0, s.jsx)(eF, { quest: t, questContent: n, contentPosition: o, rowIndex: u, sourceQuestContent: m }),
        ],
    });
}
function eV(e) {
    return e ? "heading-md/semibold" : "body-md/semibold";
}
let eX = i.memo(function (e) {
    let { questId: t, children: n, large: i = !1 } = e;
    return (0, s.jsx)(
        v.E,
        { variant: eV(i), color: "text-strong", tag: "span", className: ez.wx, children: n },
        `${t}_reward`,
    );
});
var eW = n(688755),
    eY = n(831368),
    e$ = n(989673);
function eJ(e, t) {
    return null == t ? `quest-tile-${e}` : `quest-tile-${e}-${t}`;
}
function eZ(e) {
    let {
            quest: t,
            className: n,
            sectionIdentifier: l,
            isInFeaturedSection: a,
            questContent: o,
            contentPosition: u,
            rowIndex: x,
            eagerLoadAssets: E,
            impressionRef: h,
            sourceQuestContent: C,
        } = e,
        f = i.useId(),
        [g, A] = i.useState(!1),
        v = (0, d.aC)(t),
        {
            handleHoverStart: j,
            handleHoverEnd: S,
            isEventWithinParent: I,
        } = (0, eW.B)({ quest: t, questContent: o, contentPosition: u, rowIndex: x, sourceQuestContent: C }),
        N = i.useContext(m.X),
        { visibilityElementRef: p, almostVisibleInViewport: O } = (0, eY.I)(
            N?.current?.getScrollerNode() ?? null,
            E ?? !1,
        ),
        y = c.s9.useConfig({ location: eL.rE.QUEST_HOME_DESKTOP });
    return (0, s.jsx)(G.f.Provider, {
        value: y,
        children: (0, s.jsxs)("article", {
            id: eJ(t.id, l),
            ref: (e) => {
                ((h.current = e), (p.current = e));
            },
            "aria-labelledby": y.showQuestTitle ? f : void 0,
            "aria-label": y.showQuestTitle ? void 0 : t.config.messages.questName,
            className: r()(e$.k, n, { [e$.A]: y.shorterHeight }),
            onMouseEnter: () => {
                (A(!0), j());
            },
            onMouseLeave: () => {
                (A(!1), S());
            },
            onFocus: (e) => {
                I(e) || (A(!0), j());
            },
            onBlur: (e) => {
                I(e) || (A(!1), S());
            },
            children: [
                (0, s.jsx)(et, {
                    quest: t,
                    isInFeaturedSection: a,
                    isHovering: g,
                    warningHints: v,
                    isVisibleInViewport: O,
                    sourceQuestContent: C,
                }),
                (0, s.jsx)(eG, {
                    quest: t,
                    questContent: o,
                    isHovering: g,
                    contentPosition: u,
                    rowIndex: x,
                    isVisibleInViewport: O,
                    sourceQuestContent: C,
                    questNameHeadingId: f,
                }),
            ],
        }),
    });
}
let e0 = i.memo(function (e) {
    let t = (0, a.bG)([o.A], () => (null != e.questId ? o.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, s.jsx)(x.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === u.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, s.jsx)(eZ, { ...e, quest: n, impressionRef: t }),
          });
});
