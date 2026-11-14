n.d(t, { Ay: () => eZ, sT: () => e$ });
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
    j = n(834730),
    S = n(123292),
    v = n(331322),
    I = n(805251),
    N = n(866665),
    p = n(939249),
    O = n(782134),
    y = n(365199),
    T = n(820081),
    q = n(765671),
    w = n(736653),
    Q = n(152578),
    L = n(178540),
    D = n(561844),
    _ = n(590202),
    U = n(977416),
    R = n(792620),
    P = n(988436),
    b = n(918338),
    M = n(270045),
    k = n(201805),
    H = n(57718),
    z = n(398025),
    F = n(321538),
    K = n(516226),
    G = n(720875),
    B = n(947079),
    V = n(742070),
    X = n(662940),
    W = n(535618),
    Y = n(419367),
    $ = n(652215),
    J = n(792996),
    Z = n(322335);
function ee(e) {
    let { quest: t, warningHints: n, isDarkTheme: l, sourceQuestContent: r } = e,
        a = (0, L.O)((e) => e.getErrorHints(t.id)),
        { ref: o, height: u = 0 } = (0, q.Ay)([a]),
        c = t.userStatus?.completedAt != null,
        x = (0, d.Vn)(t),
        { type: m, hints: h } = i.useMemo(
            () =>
                c || x
                    ? { type: 2, hints: [] }
                    : a.length > 0
                      ? { type: 0, hints: a.map((e) => e.message) }
                      : n.length > 0
                        ? { type: 1, hints: n }
                        : { type: 2, hints: [] },
            [a, c, x, n],
        ),
        v = 2 !== m,
        I = (0, C.z)({ opacity: +!!v, height: v ? u : 0, config: Y.N }),
        N = 0 === m ? f.CircleErrorIcon : g.CircleInformationIcon,
        p = A.A.unsafe_rawColors.RED_345.css,
        O = 0 === m ? p : l ? A.A.colors.TEXT_DEFAULT : A.A.colors.WHITE;
    return (0, s.jsx)(E.animated.div, {
        style: { height: I.height, opacity: (0, z.a)(I.opacity) },
        children: (0, s.jsxs)("div", {
            ref: o,
            className: Z.XZ,
            children: [
                (0, s.jsxs)("div", {
                    className: Z.M5,
                    children: [
                        (0, s.jsx)(N, { size: "xs", color: O }),
                        (0, s.jsx)(j.E, {
                            variant: "body-xs/medium",
                            color: l ? "text-muted" : "text-overlay-light",
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === m &&
                    (0, s.jsx)(S.Q, {
                        text: J.intl.string(J.t["yKJi+/"]),
                        onClick: () => (0, P.i)({ quest: t, sourceQuestContent: r }),
                        variant: "always-white",
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
        C = (0, R.IO)(t),
        f = (0, w.Ay)(),
        g = ((0, h.M)(f) ? $.NJ8.DARK : $.NJ8.LIGHT) === $.NJ8.DARK,
        S = (0, d.LS)(t),
        q = t.userStatus?.claimedAt != null,
        L = (0, d.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        P = t.userStatus?.enrolledAt != null,
        z = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: Y } = i.useContext(K.M),
        et = g ? "text-muted" : "text-overlay-light",
        en = (0, d.Hv)() && !z,
        es = i.useCallback(() => {
            if (C) {
                if (en) {
                    ((0, D.Y5)({
                        questId: t.id,
                        questContent: u.uF.QUEST_HOME_DESKTOP,
                        questContentCTA: _.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: E,
                    }),
                        (0, F.FS)());
                    return;
                }
                (0, F.d5)({
                    quest: t,
                    questContent: u.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: E,
                    sourceQuestContentCTA: _.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
            }
        }, [C, t, E, en]),
        ei = (0, k.UX)(t.id),
        el = !0 === l || ei,
        er = i.useRef(null),
        { showGameLogo: ea, badge: eo } = i.useContext(B.f),
        eu = (0, W.A)(t, eo.countdown),
        ec = eo.countdown && null != eu,
        ed = ec ? eu : eo.new && !z && !S && !P && (0, X.Bq)(t.config) ? J.intl.string(J.t.X6ziWN) : null;
    return (0, s.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, s.jsx)("div", {
                className: Z.IC,
                children: (0, s.jsx)(b.A, {
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
                                    (el || t.preview || eo.new || eo.countdown || eo.duration) &&
                                        (0, s.jsxs)(v.B, {
                                            className: Z.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                el &&
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
                                                (null != ed || eo.duration) &&
                                                    (0, s.jsx)(V.Q, {
                                                        quest: t,
                                                        content: { leadingText: ed, showTask: eo.duration },
                                                    }),
                                            ],
                                        }),
                                    C &&
                                        (0, s.jsx)(N.m, {
                                            text: z
                                                ? J.intl.string(J.t.YsCuyF)
                                                : P
                                                  ? J.intl.string(J.t["74KqrR"])
                                                  : (0, U.Ic)(t)
                                                    ? J.intl.string(J.t.I6JG46)
                                                    : J.intl.string(J.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, s.jsx)(p.D, {
                                                className: Z.iI,
                                                "aria-label": J.intl.string(J.t.RscU7I),
                                                onClick: es,
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
                                        returnRef: er,
                                        children: (e) =>
                                            (0, s.jsx)(p.D, {
                                                ...e,
                                                innerRef: er,
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
                            (0, s.jsx)(G.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: r()(Z.Iu, { [Z.OM]: !ea }),
                                children: (0, s.jsx)(H.Ay, {
                                    className: r()(Z.Iu, { [Z.OM]: !ea }),
                                    logotypeClassName: Z.ND,
                                    quest: t,
                                    separatorSpacing: H.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Y,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: Z.E_,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: Z.O,
                                        children: [
                                            (0, s.jsx)(j.E, {
                                                tag: "span",
                                                className: Z.vT,
                                                variant: "body-sm/medium",
                                                color: et,
                                                children: J.intl.string(J.t.VAbKhK),
                                            }),
                                            (0, s.jsx)(Q.A, {
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
                                            (0, s.jsx)(j.E, {
                                                className: Z.eA,
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: "text-overlay-light",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    S || q || ec
                                        ? null
                                        : (0, s.jsx)(j.E, {
                                              className: Z.xK,
                                              variant: "body-sm/medium",
                                              color: et,
                                              children: J.intl.format(J.t["7D8r4F"], { expiryDate: L }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(ee, { quest: t, warningHints: a, isDarkTheme: g, sourceQuestContent: E }),
                ],
            }),
        ],
    });
}
var en = n(604121),
    es = n(534514),
    ei = n(775602),
    el = n(409626),
    er = n(106799),
    ea = n(287809),
    eo = n(870273),
    eu = n(646917),
    ec = n(576761),
    ed = n(417404),
    ex = n(117634),
    em = n(453384),
    eE = n(442734),
    eh = n(639701),
    eC = n(843282),
    ef = n(31300),
    eg = n(687966),
    eA = n(825484),
    ej = n(821609),
    eS = n(414499),
    ev = n(408278),
    eI = n(743368),
    eN = n(971649),
    ep = n(651892),
    eO = n(574112),
    ey = n(814793),
    eT = n(452411),
    eq = n(79545),
    ew = n(221596),
    eQ = n(336779);
let eL = [
    {
        value: ew.fO.DESKTOP,
        get label() {
            return J.intl.string(J.t["QXc01+"]);
        },
    },
    {
        value: ew.fO.CONSOLE,
        get label() {
            return J.intl.string(J.t["8lAfuB"]);
        },
    },
];
function eD(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case ew.fO.DESKTOP:
            ((n = (0, s.jsx)(ef.ScreenIcon, {})), (t = J.intl.string(J.t["QXc01+"])));
            break;
        case ew.fO.CONSOLE:
            ((n = (0, s.jsx)(eg.GameControllerIcon, {})), (t = J.intl.string(J.t["8lAfuB"])));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("div", { className: eQ.FL, children: [n, t] });
}
function e_(e) {
    let t, n;
    if (0 === e.length) return null;
    switch (e[0].value) {
        case ew.fO.DESKTOP:
            ((n = (0, s.jsx)(ef.ScreenIcon, {})), (t = J.intl.string(J.t.g6Dr44)));
            break;
        case ew.fO.CONSOLE:
            ((n = (0, s.jsx)(eg.GameControllerIcon, {})), (t = J.intl.string(J.t.iyNbj5)));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("span", { className: eQ.FL, children: [n, t] });
}
function eU(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: r,
        } = e,
        { launchInGameActivity: a } = (0, d.zW)(t),
        o = (0, eo.NA)({ quest: t, shortText: !0 });
    return (0, s.jsx)("div", {
        className: eQ.qz,
        children: (0, s.jsxs)(eA.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(ej.$, {
                    variant: "secondary",
                    icon: t.config.features.includes(ew.Li.CLOUD_GAMING_ACTIVITY)
                        ? eS.CloudIcon
                        : eg.GameControllerIcon,
                    text: o,
                    onClick: a,
                }),
                (0, s.jsx)(eT.A, {
                    quest: t,
                    surface: eq.V3.QUEST_HOME_TILE_FOOTER,
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
                l = (0, eN.wW)();
            return {
                externalLinkCta: (0, ep.wr)(t),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, eO.pu)(t, {
                        content: n,
                        ctaContent: _.Cy.OPEN_GAME_LINK,
                        impressionId: l(),
                        sourceQuestContent: s,
                    });
                }, [t, n, s, l]),
            };
        })({ quest: t, content: n, sourceQuestContent: l }),
        { iconOnlyCTA: u } = i.useContext(B.f);
    return u && !r
        ? (0, s.jsx)(N.m, {
              text: a,
              ariaHidden: !0,
              children: (0, s.jsx)(ev.K, {
                  variant: "secondary",
                  icon: eI.LinkExternalMediumIcon,
                  "aria-label": a,
                  onClick: o,
              }),
          })
        : (0, s.jsx)(ej.$, { variant: "secondary", text: a, onClick: o, fullWidth: r });
}
function eP(e) {
    let { quest: t, content: n, sourceQuestContent: i } = e;
    return (0, s.jsx)("div", {
        className: eQ.qz,
        children: (0, s.jsx)(eR, { quest: t, content: n, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function eb(e) {
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
                case eq.UA.EXPIRED_CLAIMABLE:
                case eq.UA.EXPIRED:
                case eq.UA.EXPIRED_CLAIMED:
                    return !0;
                case eq.UA.CLAIMED:
                case eq.UA.COMPLETED:
                    return (0, R.vv)(t) || (0, ey.vA)(t);
                case eq.UA.INCOMPLETE:
                case eq.UA.ENROLLED:
                    return (0, R.vv)(t) || (0, ey.vA)(t) || (0, R.I6)(t);
                case eq.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(n, t);
    return (0, s.jsx)("div", {
        className: eQ.qz,
        children: (0, s.jsxs)(eA.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, s.jsx)(eR, { quest: t, content: i, sourceQuestContent: l }),
                (0, s.jsx)(eT.A, {
                    quest: t,
                    surface: eq.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: i,
                    analyticsCtxSourceQuestContent: l,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: a,
                }),
            ],
        }),
    });
}
function eM(e) {
    let { quest: t, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: i } = e;
    return (0, s.jsx)("div", {
        className: eQ.qz,
        children: (0, s.jsxs)(eA.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(ej.$, { variant: "secondary", disabled: !0, text: J.intl.string(J.t["8LKchl"]) }),
                (0, s.jsx)(ej.$, {
                    variant: "primary",
                    onClick: () => (0, F.m6)(t, n, i),
                    text: J.intl.string(J.t.vY9GgG),
                }),
            ],
        }),
    });
}
function ek(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        o = (0, d.fc)(t),
        c = (0, L.O)((e) => e.clearErrorHints),
        [x, m, E] = (0, d.Qo)(t, o),
        h = i.useCallback(
            (e) => {
                (E(e), e === ew.fO.DESKTOP && c(t.id));
            },
            [E, c, t.id],
        );
    return x === u.X0.SELECT
        ? (0, s.jsx)(eC.Pw, {
              className: eQ.dd,
              isSelected: () => !1,
              options: eL,
              placeholder: J.intl.string(J.t.drVw4T),
              renderOptionLabel: eD,
              renderOptionValue: e_,
              select: h,
              serialize: (e) => {
                  switch (e) {
                      case ew.fO.DESKTOP:
                          return J.intl.string(J.t["QXc01+"]);
                      case ew.fO.CONSOLE:
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
                        className: eQ.qz,
                        children: (0, s.jsx)(eT.A, {
                            quest: t,
                            surface: eq.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: n,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: r,
                            analyticsCtxQuestContentRowIndex: a,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: eQ.qz,
                        children: (0, s.jsx)(eC.Pw, {
                            className: eQ.xZ,
                            isSelected: (e) => {
                                switch (x) {
                                    case u.X0.DESKTOP:
                                        return e === ew.fO.DESKTOP;
                                    case u.X0.CONSOLE:
                                        return e === ew.fO.CONSOLE;
                                    default:
                                        return !1;
                                }
                            },
                            options: eL,
                            placeholder: J.intl.string(J.t.drVw4T),
                            renderOptionLabel: eD,
                            renderOptionValue: e_,
                            select: h,
                            serialize: (e) => {
                                switch (e) {
                                    case ew.fO.DESKTOP:
                                        return J.intl.string(J.t["QXc01+"]);
                                    case ew.fO.CONSOLE:
                                        return J.intl.string(J.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, s.jsx)(eb, {
                quest: t,
                ctaQuestState: eq.UA.ENROLLED,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: a,
            });
}
function eH(e) {
    let { quest: t, questContent: n, contentPosition: i, rowIndex: l, sourceQuestContent: r } = e,
        u = (0, eq.Pd)(t),
        { isQuestEnrollmentBlocked: c } = (0, a.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return u === eq.UA.UNENROLLED && c
        ? (0, s.jsx)("div", {
              className: eQ.kL,
              children: (0, s.jsx)(eM, { quest: t, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: r }),
          })
        : u === eq.UA.ENROLLED && (0, R.g5)(t)
          ? (0, s.jsx)("div", {
                className: eQ.kL,
                children: (0, s.jsx)(ek, {
                    quest: t,
                    analyticsCtxQuestContentPosition: i,
                    analyticsCtxQuestContentRowIndex: l,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: r,
                }),
            })
          : (u === eq.UA.ENROLLED || u === eq.UA.INCOMPLETE) && (0, R.no)(t)
            ? (0, s.jsx)("div", {
                  className: eQ.kL,
                  children: (0, s.jsx)(eP, { quest: t, content: n, sourceQuestContent: r }),
              })
            : (u === eq.UA.COMPLETED || u === eq.UA.CLAIMED) && (0, ey.vA)(t)
              ? (0, s.jsx)("div", {
                    className: eQ.kL,
                    children: (0, s.jsx)(eU, {
                        quest: t,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                })
              : (0, s.jsx)("div", {
                    className: eQ.kL,
                    children: (0, s.jsx)(eb, {
                        quest: t,
                        ctaQuestState: u,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                });
}
var ez = n(443541),
    eF = n(503666);
async function eK() {
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
        { showQuestTitle: f, compactReward: g, gameIconReward: A, underlinedMultiplier: S } = i.useContext(B.f),
        v = i.useRef(null),
        I = (0, eu.z)(),
        N = (0, d.SD)(t, I),
        p = S && N,
        O = I === ec.MA.NITRO && N,
        y = (0, a.bG)([ea.default], () => ea.default.getCurrentUser()),
        T = (0, ed.mq)(t.config, y),
        w = (0, ed.mH)(t.config, y),
        Q = t.userStatus?.enrolledAt != null,
        { ref: L, scrollHeight: D } = (0, q.wR)(),
        _ = null != D && D > 104,
        { onAssetLoadComplete: P } = i.useContext(K.M),
        { expansionSpring: b } = (0, C.z)({ expansionSpring: +!!l, config: { ...Y.N, clamp: !0 } }),
        M = t.userStatus?.completedAt != null,
        k = t.userStatus?.claimedAt != null,
        H = (0, ed.ks)(t.config),
        F = t.userStatus?.orbQuantityClaimed ?? (0, ed._Z)(t.config),
        V = (0, ed.wo)(t.config, y),
        X = (0, R.I6)(t),
        { completedRatio: W, completedRatioDisplay: $ } = (0, d.O9)(t, X),
        Z = (0, eo.A9)(t, m, ew.rE.QUEST_HOME_DESKTOP, el.GameProfileSources.QuestHome, v),
        ee = (function (e, t) {
            let { variant: n } = c.Mk.useConfig({ location: t });
            return n === c.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? e.messages.gamePublisher
                : n === c.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? e.messages.questName
                  : J.intl.format(J.t.EAYZAr, { questName: e.messages.questName });
        })(t.config, ew.rE.QUEST_HOME_DESKTOP),
        et = eB(!f),
        eC = i.useMemo(
            () =>
                g && H
                    ? (0, s.jsxs)(eV, {
                          questId: t.id,
                          large: !f,
                          children: [
                              (0, s.jsx)(er.A, { shouldUseThemeColor: !0, className: eF.Kq, customSize: 14 }),
                              J.intl.data.formatNumber((k ? F : V) ?? 0),
                          ],
                      })
                    : k && H
                      ? (0, s.jsxs)(
                            eV,
                            {
                                questId: t.id,
                                large: !f,
                                children: [
                                    (0, s.jsx)(er.A, { shouldUseThemeColor: !0, className: eF.Kq, customSize: 14 }),
                                    J.intl.format(J.t["nLXlh+"], { orbAmount: F ?? 0 }),
                                ],
                            },
                            t.id,
                        )
                      : k || g
                        ? (0, s.jsx)(eV, { questId: t.id, large: !f, children: T })
                        : H
                          ? J.intl.format(J.t["0IUT4Y"], {
                                rewardWithArticleHook: () =>
                                    (0, s.jsxs)(
                                        eV,
                                        {
                                            questId: t.id,
                                            large: !f,
                                            children: [
                                                (0, s.jsx)(er.A, {
                                                    shouldUseThemeColor: !0,
                                                    className: eF.Kq,
                                                    customSize: 14,
                                                }),
                                                J.intl.format(J.t["nLXlh+"], { orbAmount: V ?? 0 }),
                                            ],
                                        },
                                        t.id,
                                    ),
                            })
                          : J.intl.format(J.t["0IUT4Y"], {
                                rewardWithArticleHook: () =>
                                    (0, s.jsx)(eV, { questId: t.id, large: !f, children: w }, t.id),
                            }),
            [T, k, w, t.id, V, F, H, g, f],
        ),
        ef = i.useMemo(() => {
            if (null != Z)
                return (0, s.jsx)(j.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: eF.h_,
                    children: Z,
                });
        }, [Z]),
        eg = (0, a.bG)([ei.Ay], () => ei.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: eF.kL,
        ref: v,
        children: [
            (0, s.jsx)(ex.A, { visible: O, glow: !0 }),
            (0, s.jsxs)(E.animated.div, {
                style: { maxHeight: b.to([0, 1], [104, (D ?? 0) + 12]) },
                className: eF.z,
                children: [
                    (0, s.jsx)("div", {
                        className: eF.c6,
                        children: (0, s.jsxs)(G.A, {
                            showPlaceholder: !x,
                            width: 80,
                            height: 80,
                            children: [
                                !k && M && (0, s.jsx)("div", { className: eF.Nz }),
                                Q
                                    ? (0, s.jsxs)("div", {
                                          className: eF.Tr,
                                          children: [
                                              M &&
                                                  (0, s.jsx)(en.a, {
                                                      importData: eK,
                                                      className: eF.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !eg,
                                                  }),
                                              (0, s.jsx)(em.A, {
                                                  size: 76,
                                                  percentComplete: W,
                                                  overlayText: l && !(0, U.Ic)(t) ? $ : void 0,
                                                  children: (0, s.jsx)(eh.A, {
                                                      quest: t,
                                                      useGameIcon: A && H,
                                                      location: ew.rE.QUEST_HOME_DESKTOP,
                                                      questContent: n,
                                                      autoplay: l,
                                                      onLoadComplete: P,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: m,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(eh.A, {
                                          quest: t,
                                          useGameIcon: A && H,
                                          location: ew.rE.QUEST_HOME_DESKTOP,
                                          autoplay: l,
                                          questContent: n,
                                          className: eF.eB,
                                          onLoadComplete: P,
                                          lazyLoad: !0,
                                          sourceQuestContent: m,
                                      }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        ref: L,
                        className: r()(eF.FS, { [eF.wq]: !_ }),
                        children: [
                            f &&
                                (0, s.jsx)(es.D, {
                                    id: h,
                                    variant: "body-sm/medium",
                                    color: "text-brand",
                                    className: eF.G$,
                                    children: ee,
                                }),
                            N
                                ? (0, s.jsxs)("div", {
                                      className: eF.xv,
                                      children: [
                                          (0, s.jsx)(j.E, {
                                              variant: et,
                                              color: "text-strong",
                                              className: eF.wx,
                                              children: eC,
                                          }),
                                          !p && (0, s.jsx)(eE.e, { questId: t.id, orbMultiplierEligibility: I }),
                                      ],
                                  })
                                : (0, s.jsx)(j.E, {
                                      variant: et,
                                      color: "text-strong",
                                      className: eF.wx,
                                      children: eC,
                                  }),
                            ef,
                            p &&
                                (0, s.jsx)("div", {
                                    className: eF.i9,
                                    children: (0, s.jsx)(ez.f, { questId: t.id, orbMultiplierEligibility: I }),
                                }),
                        ],
                    }),
                    _ &&
                        (0, s.jsx)(E.animated.div, {
                            style: { opacity: (0, z.a)(b.to([0, 1], [1, 0])) },
                            className: eF.hS,
                        }),
                ],
            }),
            (0, s.jsx)(eH, { quest: t, questContent: n, contentPosition: o, rowIndex: u, sourceQuestContent: m }),
        ],
    });
}
function eB(e) {
    return e ? "heading-md/semibold" : "body-md/semibold";
}
let eV = i.memo(function (e) {
    let { questId: t, children: n, large: i = !1 } = e;
    return (0, s.jsx)(
        j.E,
        { variant: eB(i), color: "text-strong", tag: "span", className: eF.wx, children: n },
        `${t}_reward`,
    );
});
var eX = n(688755),
    eW = n(831368),
    eY = n(989673);
function e$(e, t) {
    return null == t ? `quest-tile-${e}` : `quest-tile-${e}-${t}`;
}
function eJ(e) {
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
        j = (0, d.aC)(t),
        {
            handleHoverStart: S,
            handleHoverEnd: v,
            isEventWithinParent: I,
        } = (0, eX.B)({ quest: t, questContent: o, contentPosition: u, rowIndex: x, sourceQuestContent: C }),
        N = i.useContext(m.X),
        { visibilityElementRef: p, almostVisibleInViewport: O } = (0, eW.I)(
            N?.current?.getScrollerNode() ?? null,
            E ?? !1,
        ),
        y = c.s9.useConfig({ location: ew.rE.QUEST_HOME_DESKTOP });
    return (0, s.jsx)(B.f.Provider, {
        value: y,
        children: (0, s.jsxs)("article", {
            id: e$(t.id, l),
            ref: (e) => {
                ((h.current = e), (p.current = e));
            },
            "aria-labelledby": y.showQuestTitle ? f : void 0,
            "aria-label": y.showQuestTitle ? void 0 : t.config.messages.questName,
            className: r()(eY.k, n),
            onMouseEnter: () => {
                (A(!0), S());
            },
            onMouseLeave: () => {
                (A(!1), v());
            },
            onFocus: (e) => {
                I(e) || (A(!0), S());
            },
            onBlur: (e) => {
                I(e) || (A(!1), v());
            },
            children: [
                (0, s.jsx)(et, {
                    quest: t,
                    isInFeaturedSection: a,
                    isHovering: g,
                    warningHints: j,
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
let eZ = i.memo(function (e) {
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
              children: (t) => (0, s.jsx)(eJ, { ...e, quest: n, impressionRef: t }),
          });
});
