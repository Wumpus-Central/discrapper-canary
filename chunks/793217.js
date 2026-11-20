n.d(t, { Ay: () => e0, sT: () => eJ });
var s = n(477900),
    i = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(855986),
    o = n(122760),
    u = n(506988),
    c = n(61387),
    d = n(280905),
    x = n(321503);
(n(134528), n(947204));
var m = n(120692),
    E = n(462887),
    h = n(717421),
    C = n(695366),
    f = n(885574),
    g = n(646514),
    A = n(834730),
    v = n(123292),
    j = n(331322),
    I = n(805251),
    N = n(866665),
    S = n(939249),
    p = n(782134),
    O = n(365199),
    y = n(820081),
    T = n(765671),
    q = n(736653),
    w = n(152578),
    L = n(178540),
    D = n(561844),
    Q = n(590202),
    _ = n(977416),
    b = n(792620),
    R = n(988436),
    U = n(918338),
    P = n(270045),
    M = n(201805),
    k = n(57718),
    H = n(398025),
    F = n(321538),
    K = n(516226),
    z = n(720875),
    B = n(947079),
    G = n(742070),
    V = n(662940),
    X = n(535618),
    W = n(419367),
    Y = n(652215),
    $ = n(792996),
    J = n(322335);
function Z(e) {
    let { quest: t, warningHints: n, isDarkTheme: l, sourceQuestContent: r } = e,
        { shorterHeight: a } = i.useContext(B.f),
        o = !l && !a,
        u = (0, L.O)((e) => e.getErrorHints(t.id)),
        { ref: d, height: x = 0 } = (0, T.Ay)([u]),
        E = t.userStatus?.completedAt != null,
        j = (0, c.Vn)(t),
        { type: I, hints: N } = i.useMemo(
            () =>
                E || j
                    ? { type: 2, hints: [] }
                    : u.length > 0
                      ? { type: 0, hints: u.map((e) => e.message) }
                      : n.length > 0
                        ? { type: 1, hints: n }
                        : { type: 2, hints: [] },
            [u, E, j, n],
        ),
        S = 2 !== I,
        p = (0, h.z)({ opacity: +!!S, height: S ? x : 0, config: W.N }),
        O = 0 === I ? C.CircleErrorIcon : f.CircleInformationIcon,
        y = a ? g.A.colors.ICON_FEEDBACK_CRITICAL : g.A.unsafe_rawColors.RED_345.css,
        q = 0 === I ? y : o ? g.A.colors.WHITE : g.A.colors.TEXT_DEFAULT;
    return (0, s.jsx)(m.animated.div, {
        className: J.EV,
        style: { height: p.height, opacity: (0, H.a)(p.opacity) },
        children: (0, s.jsxs)("div", {
            ref: d,
            className: J.XZ,
            children: [
                (0, s.jsxs)("div", {
                    className: J.M5,
                    children: [
                        (0, s.jsx)(O, { size: "xs", color: q }),
                        (0, s.jsx)(A.E, {
                            variant: "body-xs/medium",
                            color: o ? "text-overlay-light" : "text-muted",
                            children: N.at(0),
                        }),
                    ],
                }),
                0 === I &&
                    (0, s.jsx)(v.Q, {
                        text: $.intl.string($.t["yKJi+/"]),
                        onClick: () => (0, R.i)({ quest: t, sourceQuestContent: r }),
                        variant: a ? "primary" : "always-white",
                        textVariant: "body-sm/semibold",
                    }),
            ],
        }),
    });
}
function ee(e) {
    let {
            quest: t,
            isHovering: n,
            isInFeaturedSection: l,
            warningHints: a,
            isVisibleInViewport: o,
            onCtxMenuClose: d,
            onCtxMenuOpen: x,
            onCtxMenuSelect: m,
            sourceQuestContent: h,
        } = e,
        { shorterHeight: C } = i.useContext(B.f),
        f = (0, b.IO)(t),
        v = (0, q.Ay)(),
        T = (0, E.M)(v) ? Y.NJ8.DARK : Y.NJ8.LIGHT,
        L = T === Y.NJ8.DARK,
        R = (0, c.LS)(t),
        H = t.userStatus?.claimedAt != null,
        W = (0, c.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        ee = t.userStatus?.enrolledAt != null,
        et = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: en } = i.useContext(K.M),
        es = L || C ? "text-muted" : "text-overlay-light",
        ei = (0, c.Hv)() && !et,
        el = i.useCallback(() => {
            if (f) {
                if (ei) {
                    ((0, D.Y5)({
                        questId: t.id,
                        questContent: u.uF.QUEST_HOME_DESKTOP,
                        questContentCTA: Q.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: h,
                    }),
                        (0, F.FS)());
                    return;
                }
                (0, F.d5)({
                    quest: t,
                    questContent: u.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: h,
                    sourceQuestContentCTA: Q.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
            }
        }, [f, t, h, ei]),
        er = (0, M.UX)(t.id),
        ea = !0 === l || er,
        eo = i.useRef(null),
        { showGameLogo: eu, badge: ec } = i.useContext(B.f),
        ed = (0, X.A)(t, ec.countdown),
        ex = ec.countdown && null != ed,
        em = ex ? ed : ec.new && !et && !R && !ee && (0, V.Bq)(t.config) ? $.intl.string($.t.X6ziWN) : null;
    return (0, s.jsxs)("div", {
        className: r()(J.kL, { [J.A8]: C }),
        children: [
            (0, s.jsx)("div", {
                className: J.IC,
                children: (0, s.jsx)(U.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !o,
                    imageSize: { width: 1320, height: 370 },
                    variant: "banner",
                }),
            }),
            (0, s.jsx)("div", { className: J.Lw }),
            (0, s.jsxs)("div", {
                className: J.nX,
                children: [
                    (0, s.jsxs)("div", {
                        className: J.PG,
                        children: [
                            (0, s.jsxs)("div", {
                                className: J.mY,
                                children: [
                                    (ea || t.preview || ec.new || ec.countdown || ec.duration) &&
                                        (0, s.jsxs)(j.B, {
                                            className: J.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ea &&
                                                    !(0, _.Ic)(t) &&
                                                    (0, s.jsx)(I.E, {
                                                        type: { text: $.intl.string($.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                t.preview &&
                                                    (0, s.jsx)(I.E, {
                                                        type: { text: $.intl.string($.t.SKNnqq) },
                                                        variant: "primary",
                                                    }),
                                                (null != em || ec.duration) &&
                                                    (0, s.jsx)(G.Q, {
                                                        quest: t,
                                                        content: { leadingText: em, showTask: ec.duration },
                                                    }),
                                            ],
                                        }),
                                    f &&
                                        (0, s.jsx)(N.m, {
                                            text: et
                                                ? $.intl.string($.t.YsCuyF)
                                                : ee
                                                  ? $.intl.string($.t["74KqrR"])
                                                  : (0, _.Ic)(t)
                                                    ? $.intl.string($.t.I6JG46)
                                                    : $.intl.string($.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, s.jsx)(S.D, {
                                                className: J.iI,
                                                "aria-label": $.intl.string($.t.RscU7I),
                                                onClick: el,
                                                children: (0, s.jsx)(p.PlayIcon, {
                                                    color: "currentColor",
                                                    className: J.A9,
                                                }),
                                            }),
                                        }),
                                    (0, s.jsx)(P.C, {
                                        onOpen: x,
                                        onClose: d,
                                        onSelect: m,
                                        questContent: u.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: h,
                                        returnRef: eo,
                                        children: (e) =>
                                            (0, s.jsx)(S.D, {
                                                ...e,
                                                innerRef: eo,
                                                className: J.iI,
                                                "aria-label": $.intl.string($.t.DEoVWZ),
                                                children: (0, s.jsx)(O.MoreHorizontalIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: J.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(z.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: r()(J.Iu, { [J.OM]: !eu }),
                                children: (0, s.jsx)(k.Ay, {
                                    className: r()(J.Iu, { [J.OM]: !eu }),
                                    logotypeClassName: J.ND,
                                    quest: t,
                                    theme: C ? T : Y.NJ8.DARK,
                                    separatorSpacing: k.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: en,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: J.E_,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: J.O,
                                        children: [
                                            (0, s.jsx)(A.E, {
                                                tag: "span",
                                                className: J.vT,
                                                variant: "body-sm/medium",
                                                color: es,
                                                children: $.intl.string($.t.VAbKhK),
                                            }),
                                            (0, s.jsx)(w.A, {
                                                className: J.w$,
                                                size: 16,
                                                color: g.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": $.intl.string($.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, s.jsx)(y.CheckmarkSmallBoldIcon, {
                                                    color: g.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, s.jsx)(A.E, {
                                                className: J.eA,
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: C ? "text-strong" : "text-overlay-light",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    R || H || ex
                                        ? null
                                        : (0, s.jsx)(A.E, {
                                              className: J.xK,
                                              variant: "body-sm/medium",
                                              color: es,
                                              children: $.intl.format($.t["7D8r4F"], { expiryDate: W }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(Z, { quest: t, warningHints: a, isDarkTheme: L, sourceQuestContent: h }),
                ],
            }),
        ],
    });
}
var et = n(604121),
    en = n(534514),
    es = n(770178),
    ei = n(775602),
    el = n(409626),
    er = n(106799),
    ea = n(287809),
    eo = n(914313),
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
    eI = n(414499),
    eN = n(408278),
    eS = n(743368),
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
            return $.intl.string($.t["QXc01+"]);
        },
    },
    {
        value: eL.fO.CONSOLE,
        get label() {
            return $.intl.string($.t["8lAfuB"]);
        },
    },
];
function e_(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case eL.fO.DESKTOP:
            ((n = (0, s.jsx)(eg.ScreenIcon, {})), (t = $.intl.string($.t["QXc01+"])));
            break;
        case eL.fO.CONSOLE:
            ((n = (0, s.jsx)(eA.GameControllerIcon, {})), (t = $.intl.string($.t["8lAfuB"])));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("div", { className: eD.FL, children: [n, t] });
}
function eb(e) {
    let t, n;
    if (0 === e.length) return null;
    switch (e[0].value) {
        case eL.fO.DESKTOP:
            ((n = (0, s.jsx)(eg.ScreenIcon, {})), (t = $.intl.string($.t.g6Dr44)));
            break;
        case eL.fO.CONSOLE:
            ((n = (0, s.jsx)(eA.GameControllerIcon, {})), (t = $.intl.string($.t.iyNbj5)));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("span", { className: eD.FL, children: [n, t] });
}
function eR(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: r,
        } = e,
        { launchInGameActivity: a } = (0, c.zW)(t),
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
                        ? eI.CloudIcon
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
function eU(e) {
    let { quest: t, content: n, sourceQuestContent: l, fullWidth: r } = e,
        { externalLinkCta: a, handleOpenExternalLink: o } = (function (e) {
            let { quest: t, content: n, sourceQuestContent: s } = e,
                l = (0, ep.wW)();
            return {
                externalLinkCta: (0, eO.wr)(t),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, ey.pu)(t, {
                        content: n,
                        ctaContent: Q.Cy.OPEN_GAME_LINK,
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
              children: (0, s.jsx)(eN.K, {
                  variant: "secondary",
                  icon: eS.LinkExternalMediumIcon,
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
        children: (0, s.jsx)(eU, { quest: t, content: n, sourceQuestContent: i, fullWidth: !0 }),
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
                o && (0, s.jsx)(eU, { quest: t, content: i, sourceQuestContent: l }),
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
                (0, s.jsx)(ej.$, { variant: "secondary", disabled: !0, text: $.intl.string($.t["8LKchl"]) }),
                (0, s.jsx)(ej.$, {
                    variant: "primary",
                    onClick: () => (0, F.m6)(t, n, i),
                    text: $.intl.string($.t.vY9GgG),
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
        o = (0, c.fc)(t),
        d = (0, L.O)((e) => e.clearErrorHints),
        [x, m, E] = (0, c.Qo)(t, o),
        h = i.useCallback(
            (e) => {
                (E(e), e === eL.fO.DESKTOP && d(t.id));
            },
            [E, d, t.id],
        );
    return x === u.X0.SELECT
        ? (0, s.jsx)(ef.Pw, {
              className: eD.dd,
              isSelected: () => !1,
              options: eQ,
              placeholder: $.intl.string($.t.drVw4T),
              renderOptionLabel: e_,
              renderOptionValue: eb,
              select: h,
              serialize: (e) => {
                  switch (e) {
                      case eL.fO.DESKTOP:
                          return $.intl.string($.t["QXc01+"]);
                      case eL.fO.CONSOLE:
                          return $.intl.string($.t["8lAfuB"]);
                      default:
                          return $.intl.string($.t.WLDKSb);
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
                            placeholder: $.intl.string($.t.drVw4T),
                            renderOptionLabel: e_,
                            renderOptionValue: eb,
                            select: h,
                            serialize: (e) => {
                                switch (e) {
                                    case eL.fO.DESKTOP:
                                        return $.intl.string($.t["QXc01+"]);
                                    case eL.fO.CONSOLE:
                                        return $.intl.string($.t["8lAfuB"]);
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
        { shorterHeight: d } = i.useContext(B.f),
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
                    children: (0, s.jsx)(eR, {
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
            isVisibleInViewport: d,
            sourceQuestContent: x,
            questNameHeadingId: E,
        } = e,
        {
            showQuestTitle: C,
            compactReward: f,
            gameIconReward: g,
            underlinedMultiplier: v,
            shorterHeight: j,
        } = i.useContext(B.f),
        I = j ? 58 : 80,
        N = I + 24,
        S = i.useRef(null),
        p = (0, ec.z)(),
        O = (0, c.SD)(t, p),
        y = v && O,
        q = p === ed.MA.NITRO && O,
        w = (0, a.bG)([ea.default], () => ea.default.getCurrentUser()),
        L = (0, ex.mq)(t.config, w),
        D = (0, ex.mH)(t.config, w),
        Q = t.userStatus?.enrolledAt != null,
        R = (0, eu.A9)(t, x, eL.rE.QUEST_HOME_DESKTOP, el.GameProfileSources.QuestHome, S),
        { ref: U, scrollHeight: P } = (0, T.wR)(),
        M = i.useRef(null),
        [k, F] = i.useState(0),
        G = k > 0,
        V = j ? N + k : (P ?? 0) + 12,
        X = null != P && P > N,
        { onAssetLoadComplete: Y } = i.useContext(K.M),
        J = l && (!j || (null != R && G)),
        { expansionSpring: Z } = (0, h.z)({ expansionSpring: +!!J, config: { ...W.N, clamp: !0 } }),
        ee = Z.to([0, 1], [N, V]),
        ef = t.userStatus?.completedAt != null,
        eg = t.userStatus?.claimedAt != null,
        eA = (0, ex.ks)(t.config),
        ev = t.userStatus?.orbQuantityClaimed ?? (0, ex._Z)(t.config),
        ej = (0, ex.wo)(t.config, w),
        eI = (0, b.I6)(t),
        { completedRatio: eN, completedRatioDisplay: eS } = (0, c.O9)(t, eI),
        ep = (function (e, t) {
            let { variant: n } = eo.Mk.useConfig({ location: t });
            return n === eo.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? e.messages.gamePublisher
                : n === eo.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? e.messages.questName
                  : $.intl.format($.t.EAYZAr, { questName: e.messages.questName });
        })(t.config, eL.rE.QUEST_HOME_DESKTOP),
        eO = eV(!C),
        ey = i.useMemo(
            () =>
                f && eA
                    ? (0, s.jsxs)(eX, {
                          questId: t.id,
                          large: !C,
                          children: [
                              (0, s.jsx)(er.A, { shouldUseThemeColor: !0, className: ez.Kq, customSize: 14 }),
                              $.intl.data.formatNumber((eg ? ev : ej) ?? 0),
                          ],
                      })
                    : eg && eA
                      ? (0, s.jsxs)(
                            eX,
                            {
                                questId: t.id,
                                large: !C,
                                children: [
                                    (0, s.jsx)(er.A, { shouldUseThemeColor: !0, className: ez.Kq, customSize: 14 }),
                                    $.intl.format($.t["nLXlh+"], { orbAmount: ev ?? 0 }),
                                ],
                            },
                            t.id,
                        )
                      : eg || f
                        ? (0, s.jsx)(eX, { questId: t.id, large: !C, children: L })
                        : eA
                          ? $.intl.format($.t["0IUT4Y"], {
                                rewardWithArticleHook: () =>
                                    (0, s.jsxs)(
                                        eX,
                                        {
                                            questId: t.id,
                                            large: !C,
                                            children: [
                                                (0, s.jsx)(er.A, {
                                                    shouldUseThemeColor: !0,
                                                    className: ez.Kq,
                                                    customSize: 14,
                                                }),
                                                $.intl.format($.t["nLXlh+"], { orbAmount: ej ?? 0 }),
                                            ],
                                        },
                                        t.id,
                                    ),
                            })
                          : $.intl.format($.t["0IUT4Y"], {
                                rewardWithArticleHook: () =>
                                    (0, s.jsx)(eX, { questId: t.id, large: !C, children: D }, t.id),
                            }),
            [L, eg, D, t.id, ej, ev, eA, f, C],
        ),
        eT = i.useMemo(() => {
            if (null != R)
                return (0, s.jsx)(A.E, {
                    ref: M,
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: ez.h_,
                    children: R,
                });
        }, [R]),
        eq = i.useCallback(() => {
            let e = M.current;
            j && !J && null != e && F(e.scrollHeight > e.clientHeight ? e.scrollHeight - e.clientHeight : 0);
        }, [j, J]);
    ((0, es.g)(M, eq, [R, ep, ey], { enabled: j, fireOnMount: !0, fireOnDepsChange: !0 }),
        i.useEffect(() => {
            if (j)
                return (
                    document.fonts.addEventListener("loadingdone", eq),
                    () => document.fonts.removeEventListener("loadingdone", eq)
                );
        }, [j, eq]));
    let ew = (0, a.bG)([ei.Ay], () => ei.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        "data-description-expanded": (!!j && !!J) || void 0,
        className: r()(ez.kL, { [ez.A8]: j, [ez.wF]: j && !G, [ez.Bt]: j && J }),
        ref: S,
        children: [
            (0, s.jsx)(em.A, { visible: q, glow: !0 }),
            (0, s.jsxs)(m.animated.div, {
                style: { maxHeight: ee, height: j ? ee : void 0 },
                className: ez.z,
                children: [
                    (0, s.jsx)("div", {
                        className: ez.c6,
                        children: (0, s.jsxs)(z.A, {
                            showPlaceholder: !d,
                            width: I,
                            height: I,
                            children: [
                                !eg && ef && (0, s.jsx)("div", { className: ez.Nz }),
                                Q
                                    ? (0, s.jsxs)("div", {
                                          className: ez.Tr,
                                          children: [
                                              ef &&
                                                  (0, s.jsx)(et.a, {
                                                      importData: eB,
                                                      className: ez.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ew,
                                                  }),
                                              (0, s.jsx)(eE.A, {
                                                  size: I - 4,
                                                  percentComplete: eN,
                                                  overlayText: l && !(0, _.Ic)(t) ? eS : void 0,
                                                  children: (0, s.jsx)(eC.A, {
                                                      quest: t,
                                                      useGameIcon: g && eA,
                                                      location: eL.rE.QUEST_HOME_DESKTOP,
                                                      questContent: n,
                                                      autoplay: l,
                                                      onLoadComplete: Y,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: x,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(eC.A, {
                                          quest: t,
                                          useGameIcon: g && eA,
                                          location: eL.rE.QUEST_HOME_DESKTOP,
                                          autoplay: l,
                                          questContent: n,
                                          className: ez.eB,
                                          onLoadComplete: Y,
                                          lazyLoad: !0,
                                          sourceQuestContent: x,
                                      }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        ref: U,
                        className: r()(ez.FS, { [ez.wq]: !X }),
                        children: [
                            C &&
                                (0, s.jsx)(en.D, {
                                    id: E,
                                    variant: "body-sm/medium",
                                    color: "text-brand",
                                    className: ez.G$,
                                    children: ep,
                                }),
                            O
                                ? (0, s.jsxs)("div", {
                                      className: ez.xv,
                                      children: [
                                          (0, s.jsx)(A.E, {
                                              variant: eO,
                                              color: "text-strong",
                                              className: ez.wx,
                                              children: ey,
                                          }),
                                          !y && (0, s.jsx)(eh.e, { questId: t.id, orbMultiplierEligibility: p }),
                                      ],
                                  })
                                : (0, s.jsx)(A.E, {
                                      variant: eO,
                                      color: "text-strong",
                                      className: ez.wx,
                                      children: ey,
                                  }),
                            eT,
                            y &&
                                (0, s.jsx)("div", {
                                    className: ez.i9,
                                    children: (0, s.jsx)(eK.f, { questId: t.id, orbMultiplierEligibility: p }),
                                }),
                        ],
                    }),
                    (j ? G : X) &&
                        (0, s.jsx)(m.animated.div, {
                            style: { opacity: (0, H.a)(Z.to([0, 1], [1, 0])) },
                            className: ez.hS,
                        }),
                ],
            }),
            (0, s.jsx)(eF, { quest: t, questContent: n, contentPosition: o, rowIndex: u, sourceQuestContent: x }),
        ],
    });
}
function eV(e) {
    return e ? "heading-md/semibold" : "body-md/semibold";
}
let eX = i.memo(function (e) {
    let { questId: t, children: n, large: i = !1 } = e;
    return (0, s.jsx)(
        A.E,
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
            rowIndex: d,
            eagerLoadAssets: m,
            impressionRef: E,
            sourceQuestContent: h,
        } = e,
        C = i.useId(),
        [f, g] = i.useState(!1),
        A = (0, c.aC)(t),
        {
            handleHoverStart: v,
            handleHoverEnd: j,
            isEventWithinParent: I,
        } = (0, eW.B)({ quest: t, questContent: o, contentPosition: u, rowIndex: d, sourceQuestContent: h }),
        N = i.useContext(x.X),
        { visibilityElementRef: S, almostVisibleInViewport: p } = (0, eY.I)(
            N?.current?.getScrollerNode() ?? null,
            m ?? !1,
        ),
        O = (0, B.V)();
    return (0, s.jsx)(B.f.Provider, {
        value: O,
        children: (0, s.jsxs)("article", {
            id: eJ(t.id, l),
            ref: (e) => {
                ((E.current = e), (S.current = e));
            },
            "aria-labelledby": O.showQuestTitle ? C : void 0,
            "aria-label": O.showQuestTitle ? void 0 : t.config.messages.questName,
            className: r()(e$.k, n, { [e$.A]: O.shorterHeight }),
            onMouseEnter: () => {
                (g(!0), v());
            },
            onMouseLeave: () => {
                (g(!1), j());
            },
            onFocus: (e) => {
                I(e) || (g(!0), v());
            },
            onBlur: (e) => {
                I(e) || (g(!1), j());
            },
            children: [
                (0, s.jsx)(ee, {
                    quest: t,
                    isInFeaturedSection: a,
                    isHovering: f,
                    warningHints: A,
                    isVisibleInViewport: p,
                    sourceQuestContent: h,
                }),
                (0, s.jsx)(eG, {
                    quest: t,
                    questContent: o,
                    isHovering: f,
                    contentPosition: u,
                    rowIndex: d,
                    isVisibleInViewport: p,
                    sourceQuestContent: h,
                    questNameHeadingId: C,
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
        : (0, s.jsx)(d.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === u.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, s.jsx)(eZ, { ...e, quest: n, impressionRef: t }),
          });
});
