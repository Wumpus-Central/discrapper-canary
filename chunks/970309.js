n.r(t), n.d(t, { default: () => tI });
var s = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(837381),
    c = n(731738),
    o = n(17928),
    d = n(554146),
    u = n(43105),
    h = n(691540),
    m = n(857250),
    A = n(97483),
    g = n(834730),
    E = n(123292),
    S = n(475825),
    x = n(192308),
    f = n(43990),
    j = n(849516),
    p = n(761508),
    C = n(944791),
    b = n(456412),
    I = n(964486),
    _ = n(260762),
    v = n(812771),
    R = n(789645),
    N = n(821609),
    M = n(355622),
    T = n(58736),
    G = n(353428),
    k = n(380335),
    y = n(157550),
    P = n(923457),
    U = n(36149),
    Q = n(207560);
let w = (0, n(945810).mj)({
    name: "2026-06-non-friend-messages-requests-in-uk",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function z(e) {
    let t = (0, U.Dn)(),
        n = (0, Q.yv)(P.p.MESSAGE_REQUEST_RESTRICTIONS),
        { enabled: s } = w.useConfig({ location: e });
    return !t && n && s;
}
var W = n(336590),
    F = n(92650),
    H = n(959698),
    L = n(977347),
    O = n(378570),
    q = n(138298),
    V = n(761640),
    D = n(47167),
    K = n(928078),
    B = n(375708),
    Z = n(906462),
    X = n(669747);
function J(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, D.Ay)(t),
        a = (0, W.k)(),
        r = (0, W.r)(),
        c = (0, o.bG)([k.A], () => k.A.isMessageRequest(t.id)),
        d = (0, o.bG)([y.A], () => y.A.isSpam(t.id)),
        u = z("ViewMessageRequestSidebar") && c && !d,
        E = (0, L.D)(t.id, t.getRecipientId()),
        S = l.useCallback(() => {
            q.A.closeChannelSidebar(V.fe), c && a && (0, O.iN)(t.id), d && r && (0, O.iN)(t.id);
        }, [t.id, d, r, c, a]),
        x = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t.pIQ3h4), A.Ck.FAILURE));
        }, []),
        { markAsNotSpam: f } = (0, F.t)({ onAcceptSuccess: S, onError: x });
    if (null == t || !t.isDM()) return null;
    let j = [
        (0, s.jsx)(
            T.Ay.Icon,
            { icon: R.P, tooltip: B.intl.string(B.t.cpT0Cq), onClick: () => q.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.Ay, {
                toolbar: j,
                "aria-label": B.intl.string(B.t.BIYAqa),
                children: (0, G.zF)({ channel: t, channelName: i, inSidebar: !0 }),
            }),
            d &&
                (0, s.jsxs)("div", {
                    className: X.F,
                    children: [
                        (0, s.jsx)(g.E, { variant: "text-sm/normal", children: B.intl.string(B.t.XVOKgj) }),
                        (0, s.jsx)("div", {
                            className: X.$,
                            children: (0, s.jsx)(N.$, {
                                size: "sm",
                                onClick: () => f(t, E),
                                text: B.intl.string(B.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, s.jsx)("div", {
                className: Z.T,
                children: (0, s.jsx)(H.A.Provider, {
                    value: u,
                    children: (0, s.jsx)(K.A, { channel: t, guild: null, chatInputType: M.oU.SIDEBAR }, t.id),
                }),
            }),
        ],
    });
}
var Y = n(485947),
    $ = n(726249),
    ee = n(367727),
    et = n(379848),
    en = n(742589),
    es = n(807393),
    el = n(940382),
    ei = n(210714),
    ea = n(363195),
    er = n(780964),
    ec = n(766075),
    eo = n(734057),
    ed = n(186111),
    eu = n(174459),
    eh = n(232835),
    em = n(287809),
    eA = n(321404),
    eg = n(572009);
function eE() {
    return (0, o.bG)([em.default], () => (0, eg.I9)(em.default.getCurrentUser()));
}
var eS = n(166643),
    ex = n(957283),
    ef = n(411976),
    ej = n(935208);
function ep(e) {
    return e.sort((e, t) => ej.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var eC = n(790499),
    eb = n(396478),
    eI = n(687599),
    e_ = n(867853),
    ev = n(317017),
    eR = n(826223);
function eN(e) {
    let { section: t } = e,
        n = (0, o.bG)([ea.A], () => ea.A.theme);
    return (0, s.jsxs)(eb.pp, {
        theme: n,
        className: e_.y,
        children: [
            (0, s.jsx)(eb.G8, { width: 415, height: 200, lightSrc: eR, darkSrc: ev }),
            (0, s.jsx)(eb.SG, { note: t === eI.zz.SPAM ? B.intl.string(B.t.hasFPQ) : B.intl.string(B.t.SXrqTf) }),
        ],
    });
}
var eM = n(625494),
    eT = n(615300),
    eG = n(187322),
    ek = n(442433),
    ey = n(249611);
let eP = function (e) {
    let {
            index: t,
            children: i,
            user: c,
            channel: o,
            onClick: d,
            isFocused: u,
            isActive: h,
            onOtherHover: m,
            className: A,
        } = e,
        [g, E] = l.useState(!1),
        [S, x] = l.useState(!1);
    function f() {
        E(!0), !u || h || S || m?.();
    }
    function j() {
        E(!1);
    }
    return (0, s.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, s.jsx)(eG.vN, {
                offset: { left: -8, right: -8 },
                children: (0, s.jsx)(eT.A.div, {
                    className: a()(ey.Cf, A, { [ey.vu]: h || S, [ey.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (x(!0),
                            (0, ek.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("71406"),
                                        n.e("94881"),
                                        n.e("26132"),
                                        n.e("46652"),
                                        n.e("93190"),
                                        n.e("8757"),
                                        n.e("85968"),
                                        n.e("89673"),
                                        n.e("29787"),
                                        n.e("82073"),
                                        n.e("97558"),
                                        n.e("91994"),
                                        n.e("76665"),
                                        n.e("76273"),
                                        n.e("24198"),
                                        n.e("32418"),
                                    ]).then(n.bind(n, 668569));
                                    return (t) => (0, s.jsx)(e, { ...t, user: c });
                                },
                                {
                                    onClose: () => {
                                        x(!1);
                                    },
                                },
                            ));
                    },
                    onMouseEnter: f,
                    onMouseLeave: j,
                    onClick: d ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: i(g || h || S),
                }),
            }),
    });
};
var eU = n(692617),
    eQ = n(97808),
    ew = n(778712),
    ez = n(297413),
    eW = n(775602),
    eF = n(29160),
    eH = n(854378),
    eL = n(571694),
    eO = n(562819),
    eq = n(963977),
    eV = n(994500),
    eD = n(427262),
    eK = n(19575);
n(989349);
var eB = n(707539),
    eZ = n(568548),
    eX = n(978914),
    eJ = n(228366),
    eY = n(321191),
    e$ = n(903209),
    e0 = n(346055),
    e7 = n(863439),
    e9 = n(521981),
    e6 = n(805964),
    e8 = n(302031),
    e3 = n(885386),
    e4 = n(576705),
    e2 = n(652215),
    e1 = n(838541),
    e5 = n(571882),
    te = n(992595);
let tt = l.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: i, message: r } = (0, eX.I)(t),
        { isBlocked: c, isIgnored: d } = (0, o.cf)(
            [eV.A],
            () => ({
                isBlocked: null != r && eV.A.isBlockedForMessage(r),
                isIgnored: null != r && eV.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, o.bG)([e4.A], () => e4.A.can(e2.xBc.MANAGE_MESSAGES, t)),
        h = e3.gs.useSetting(),
        { content: m } = l.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, e9.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        A = null;
    if (i)
        A = (0, s.jsx)(g.E, {
            className: e5.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: B.intl.string(B.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            A = (0, s.jsx)(g.E, {
                className: e5.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t["WPe+xL"]),
            });
        else if (null != r && d)
            A = (0, s.jsx)(g.E, {
                className: e5.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, e6.o)(r, m, c, d, a()(e5.BK, te.tZ), {
                leadingIconClass: e5.AF,
                trailingIconClass: e5.AF,
                iconSize: e1.eJ,
            });
            A =
                null != t
                    ? (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: e5.BK, children: t })
                    : (0, s.jsx)(g.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e5.G4,
                          children: e,
                      });
        } else
            A = (0, s.jsx)(g.E, {
                className: e5.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t["0KfDxM"]),
            });
    else A = null;
    return (0, s.jsx)(e8.Bs.Provider, {
        value: (0, e7.A)(h, u),
        children: (0, s.jsx)(e0.M, { className: e5.JY, children: A }),
    });
});
var tn = n(746345);
function ts(e) {
    let t,
        n,
        { userId: i } = e,
        a =
            ((t = (0, o.bG)([em.default], () => em.default.getUser(i))),
            (n = (0, o.yK)([eY.A], () => eY.A.getMutualGuilds(i)?.map((e) => e.guild) ?? [])),
            l.useEffect(() => {
                0 === n.length &&
                    null != t &&
                    null == eY.A.getMutualGuilds(i) &&
                    eJ.h.wait(() => (0, e$.A)(i, void 0, { withMutualGuilds: !0 }));
            }, [n, t, i]),
            n);
    return null == a || 0 === a.length
        ? (0, s.jsx)(g.E, {
              className: tn.tE,
              variant: "text-sm/normal",
              color: "text-muted",
              children: B.intl.string(B.t.jpY0X5),
          })
        : (0, s.jsxs)("div", {
              className: tn.I9,
              children: [
                  (0, s.jsx)(eU.A, { guilds: a, maxGuilds: 3, size: eH.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                  (0, s.jsx)(g.E, {
                      className: tn.tE,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: B.intl.format(B.t.eE3oep, { count: a.length }),
                  }),
              ],
          });
}
let tl = eK.Ay.getEnableHardwareAcceleration() ? eQ.Js : eQ.eu;
function ti(e) {
    let t,
        n,
        { channel: l, otherUser: i, active: a, isRestricted: r = !1 } = e,
        c = (0, o.bG)([eW.Ay], () => eW.Ay.useReducedMotion),
        d = (0, o.bG)([eV.A], () => (null == i ? null : eV.A.getNickname(i.id))),
        u = !c && a,
        h =
            ((t = (0, eX.I)(l)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: s } = e;
                return s && null != n
                    ? ej.default.extractTimestamp(n.id)
                    : null != t
                      ? ej.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eZ.Ay], () => eZ.Ay.lastMessageId(l.id)), ...t }))
                ? ""
                : (0, eB.aK)(n)),
        { avatarDecorationSrc: m } = (0, eq.A)({
            user: i,
            size: (0, eO.Te)(ew._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tl, {
                className: tn.my,
                src: (0, eL.Y)(l, 40, u),
                avatarDecoration: m,
                size: ew._3.SIZE_40,
                "aria-label": i?.username ?? B.intl.string(B.t["30mdIx"]),
            }),
            (0, s.jsxs)("div", {
                className: tn.yt,
                children: [
                    (0, s.jsxs)("div", {
                        className: tn.rU,
                        children: [
                            (0, s.jsx)(ez.A, {
                                nick: d,
                                user: i,
                                showAccountIdentifier: !0,
                                className: tn.I8,
                                usernameClass: tn.Xh,
                                discriminatorClass: null != eD.Ay.getGlobalName(i) ? tn.vl : tn.D2,
                            }),
                            (0, s.jsx)(g.E, {
                                className: tn.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                        ],
                    }),
                    (0, s.jsx)(eF.A, {
                        hoverText: r
                            ? (0, s.jsx)(g.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: B.intl.string(B.t.fnduP5),
                              })
                            : (0, s.jsx)(tt, { channel: l }),
                        forceHover: a,
                        children: (0, s.jsx)(ts, { userId: i.id }),
                    }),
                ],
            }),
        ],
    });
}
var ta = n(610602);
function tr(e) {
    let { active: t, user: n, channel: i, isRestricted: a = !1 } = e,
        r = (0, W.k)(),
        c = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        o = l.useCallback(() => {
            q.A.closeChannelSidebar(V.fe);
        }, []),
        d = l.useCallback(() => {
            q.A.closeChannelSidebar(V.fe), r && (0, O.iN)(i.id);
        }, [i.id, r]),
        {
            acceptMessageRequest: u,
            rejectMessageRequest: g,
            isAcceptLoading: E,
            isRejectLoading: S,
            isUserProfileLoading: x,
            isOptimisticAccepted: f,
            isOptimisticRejected: j,
        } = (0, F.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: c }),
        p = E || S || x || f || j;
    return (0, s.jsxs)("div", {
        className: ta.kL,
        children: [
            (0, s.jsx)(ti, { channel: i, otherUser: n, active: t, isRestricted: a }),
            (0, s.jsxs)("div", {
                className: ta.o1,
                children: [
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ta.x6,
                        children: (0, s.jsx)(N.$, {
                            variant: "secondary",
                            size: "sm",
                            text: B.intl.string(a ? B.t.BVN4pL : B.t.B2nygW),
                            onClick: function (e) {
                                e.stopPropagation(), g(i.id);
                            },
                            disabled: p,
                            loading: S || j,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ta.x6,
                        children: (0, s.jsx)(N.$, {
                            variant: "primary",
                            size: "sm",
                            text: B.intl.string(B.t.Kz8Pwr),
                            onClick: function (e) {
                                e.stopPropagation(), u(i.id);
                            },
                            disabled: p,
                            loading: E || x || f,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tc(e) {
    let { index: t, className: n, channel: l, user: i, hasSingleMessageRequest: a, isRestricted: r = !1 } = e,
        { channelId: c } = (0, ex.N)();
    return (0, s.jsx)(eP, {
        index: t,
        className: n,
        isFocused: c === l.id,
        channel: l,
        user: i,
        onClick: function (e) {
            e.stopPropagation(),
                q.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: V.fe, hasSingleMessageRequest: a }),
                eu.default.track(e2.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: l.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    eM._.dispatch(e2.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(tr, { active: e, user: i, channel: l, isRestricted: r }),
    });
}
var to = n(308528),
    td = n(928658);
function tu(e) {
    let { channel: t, onReportClick: n, onReportSubmit: l, onMouseEnter: i, onMouseLeave: a } = e,
        { error: r, loaded: c, message: o } = (0, eX.I)(t);
    if (null == o && (c || r)) return null;
    function d() {
        l?.(), to.A.closePrivateChannel(t.id);
    }
    return (0, s.jsx)(N.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: function (e) {
            e.stopPropagation(), n?.(), null != o && (0, td.b8)(o, d);
        },
        onMouseEnter: i,
        onMouseLeave: a,
        text: B.intl.string(B.t.HHZmDn),
    });
}
var th = n(303835);
function tm(e) {
    let { active: t, user: n, channel: i } = e,
        a = (0, W.r)(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t.pIQ3h4), A.Ck.FAILURE)),
                es.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        o = l.useCallback(() => {
            q.A.closeChannelSidebar(V.fe);
        }, []),
        d = l.useCallback(() => {
            q.A.closeChannelSidebar(V.fe), a && (0, O.iN)(i.id);
        }, [i.id, a]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: g,
            isUserProfileLoading: E,
            isOptimisticAccepted: S,
        } = (0, F.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: r }),
        x = g || E,
        f = x || S;
    return (0, s.jsxs)("div", {
        className: th.kL,
        children: [
            (0, s.jsx)(ti, { otherUser: n, channel: i, active: t }),
            (0, s.jsxs)("div", {
                className: th.o1,
                children: [
                    (0, s.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string(B.t.vicfl6),
                        onClick: function (e) {
                            u(i.id), e.stopPropagation();
                        },
                        disabled: f,
                        loading: x,
                    }),
                    (0, s.jsx)(tu, { channel: i }),
                ],
            }),
        ],
    });
}
function tA(e) {
    let { index: t, className: n, channel: l, user: i, hasSingleMessageRequest: a } = e;
    return (0, s.jsx)(eP, {
        index: t,
        className: n,
        isFocused: !1,
        channel: l,
        user: i,
        onClick: function (e) {
            e.stopPropagation(),
                q.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: V.fe, hasSingleMessageRequest: a }),
                eu.default.track(e2.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: l.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    eM._.dispatch(e2.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(tm, { active: e, user: i, channel: l }),
    });
}
var tg = n(900425);
function tE() {
    let e,
        t,
        n,
        i = l.useRef(null),
        d =
            ((e = (0, o.bG)([eo.A], () => eo.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)([eo.A, y.A], () => {
                let e = eo.A.getMutablePrivateChannels();
                return ep(
                    Array.from(y.A.getSpamChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, o.cf)([em.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = em.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            l.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        u = (0, eC.I)(),
        x = (0, W.r)(),
        f = eE(),
        j = (0, _.A)("message-requests-spam-list"),
        { channelId: p } = (0, ex.N)(),
        C = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: b } = (0, F.t)({ onError: C }),
        v = l.useCallback(() => {
            b(d.map((e) => e.channel.id));
        }, [d, b]);
    (0, I.Ay)(() => {
        eu.default.track(e2.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            es.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let R = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    l = d[t + 1]?.channel?.id,
                    i = n.channel.id;
                return (0, s.jsx)(
                    tA,
                    {
                        index: t,
                        className: a()({ [tg.wH]: null != p && p === i, [tg.wZ]: null != p && p === l }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: x,
                    },
                    i,
                );
            },
            [d, x, p],
        ),
        N = l.useCallback(
            () =>
                (0, s.jsxs)(
                    Y.A,
                    {
                        className: tg.Gf,
                        children: [
                            B.intl.format(B.t.C79Edh, { count: u }),
                            f && u > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: tg.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, s.jsx)(E.Q, {
                                              textVariant: "text-sm/normal",
                                              text: B.intl.string(B.t.p6t7RC),
                                              onClick: v,
                                              "aria-label": B.intl.string(B.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [u, v, f],
        );
    return 0 === d.length
        ? (0, s.jsx)(eN, { section: eI.zz.SPAM })
        : (0, s.jsx)(r.hD, {
              navigator: j,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...l } = e;
                      return (0, s.jsx)(
                          S.OZ,
                          {
                              className: tg.p_,
                              innerRole: n,
                              innerAriaLabel: B.intl.string(B.t.e7GWjQ),
                              ref: (e) => {
                                  (i.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: N,
                              renderRow: R,
                              sections: [d.length],
                              chunkSize: 30,
                              fade: !0,
                              ...l,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
var tS = n(49999),
    tx = n(267899),
    tf = n(964623);
function tj() {
    let e,
        t,
        n,
        i = l.useRef(null),
        d = (0, ef.W)(),
        u =
            ((e = (0, o.bG)([eo.A], () => eo.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)([eo.A, k.A], () => {
                let e = eo.A.getMutablePrivateChannels();
                return ep(
                    Array.from(k.A.getMessageRequestChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, o.cf)([em.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = em.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            l.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        x = (0, W.k)(),
        f = eE(),
        j = z("MessageRequestPage"),
        p = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: C } = (0, F.t)({ onError: p }),
        b = (0, _.A)("message-requests-list"),
        { channelId: I } = (0, ex.N)(),
        v = l.useCallback(() => {
            C(u.map((e) => e.channel.id));
        }, [u, C]),
        R = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    l = u[t + 1]?.channel?.id,
                    i = n.channel.id,
                    r = a()({ [tx.wH]: null != I && I === i, [tx.wZ]: null != I && I === l });
                return (0, s.jsx)(
                    tc,
                    {
                        index: t,
                        className: r,
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: x,
                        isRestricted: j,
                    },
                    i,
                );
            },
            [x, j, u, I],
        ),
        N = l.useCallback(
            () =>
                (0, s.jsxs)(
                    Y.A,
                    {
                        className: tx.Gf,
                        children: [
                            d > 0 ? B.intl.formatToPlainString(B.t.rA4iWY, { count: d }) : B.intl.string(B.t.flPU6g),
                            f && d > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: tx.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, s.jsx)(E.Q, {
                                              onClick: v,
                                              textVariant: "text-sm/normal",
                                              text: B.intl.string(B.t.p6t7RC),
                                              "aria-label": B.intl.string(B.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [d, v, f],
        );
    return (u.length !== d && es.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, s.jsx)(eN, { section: eI.zz.REQUESTS })
        : (0, s.jsx)(r.hD, {
              navigator: b,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...l } = e;
                      return (0, s.jsx)(
                          S.OZ,
                          {
                              className: tx.p_,
                              innerRole: n,
                              innerAriaLabel: B.intl.string(B.t.e7GWjQ),
                              ref: (e) => {
                                  (i.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: N,
                              renderRow: R,
                              sections: [u.length],
                              chunkSize: 30,
                              fade: !0,
                              ...l,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function tp(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        l = (0, o.bG)([V.Ay], () => V.Ay.getSidebarState(V.fe)),
        i = (0, o.bG)([eo.A], () => eo.A.getChannel(l?.channelId));
    if (null == l || l.type !== el.PE.VIEW_MESSAGE_REQUEST || null == i || !i.isPrivate()) return null;
    let a = t - e2.ItT;
    return (0, s.jsx)(v.A, {
        sidebarType: v.X.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, s.jsx)(J, { channel: i, baseChannelId: V.fe }),
    });
}
function tC(e) {
    let t = (0, eS.A)();
    return (l.useEffect(() => {
        (0, ee.Vh)(d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || ed.A.hasLayers() || (0, x.hasAnyModalOpen)())
        ? e.children
        : (0, s.jsx)(et.Ay, {
              contentTypes: [d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: l, markAsDismissed: i } = n,
                      a = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => i(tS.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return l === d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, s.jsx)(u.A, {
                                          ...a,
                                          title: B.intl.string(B.t.hRT8tc),
                                          body: B.intl.string(B.t.apPgJG),
                                          actions: [
                                              { text: B.intl.string(B.t.LNoAQW), onClick: () => i(tS.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, s.jsx)(u.A, {
                                          ...a,
                                          title: B.intl.string(B.t.hRT8tc),
                                          body: B.intl.string(B.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: B.intl.string(B.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          (0, ec.openUserSettings)(
                                                              er.X
                                                                  .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          i(tS.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: B.intl.string(B.t.LNoAQW),
                                                  onClick: () => i(tS.i.USER_DISMISS),
                                                  variant: "secondary",
                                              },
                                          ],
                                      }),
                            ],
                        })
                      : e.children;
              },
          });
}
function tb(e) {
    let { section: t } = e;
    return t === eI.zz.SPAM ? (0, s.jsx)(tE, {}) : (0, s.jsx)(tj, {});
}
let tI = (0, b.A)(function (e) {
    let { width: t } = e,
        n = (0, ef.W)();
    (0, I.Ay)(() => {
        C.I(e2.BVt.MESSAGE_REQUESTS),
            (0, ei.d0)("message-requests"),
            eu.default.track(e2.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            es.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW });
    });
    let i = (0, o.bG)([ea.A], () => ea.A.theme),
        r = (0, eC.I)(),
        [d, u] = l.useState(!1),
        h = (0, o.bG)([V.Ay], () => {
            let e = V.Ay.getSidebarState(V.fe);
            return null != e && e.type === el.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        A = null != h,
        g = (0, eA.c)(m),
        E = (0, o.bG)([eh.A, em.default], () => {
            if (null == m) return !1;
            let e = em.default.getCurrentUser();
            return null != eh.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        S = l.useRef(null);
    l.useEffect(() => {
        null != m && !g && E && A && ((0, O.iN)(m), q.A.closeChannelSidebar(V.fe));
    }, [m, E, A, g]);
    let [x, b] = l.useState(eI.zz.REQUESTS);
    function _(e) {
        b(e);
    }
    return (
        (0, $.HU)({ location: B.intl.string(B.t.e7GWjQ) }),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: a()(tf.TE, tx.kL, { [tf.js]: A, [tf.jl]: A && d }),
                    children: [
                        (0, s.jsx)(f.N, {
                            theme: i,
                            children: (e) =>
                                (0, s.jsxs)(en.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, s.jsx)(en.A.Icon, { icon: j.u, "aria-hidden": !0 }),
                                        (0, s.jsx)(tC, {
                                            targetElementRef: S,
                                            children: (0, s.jsx)(en.A.Title, {
                                                ref: S,
                                                children: B.intl.string(B.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, s.jsx)(en.A.Divider, {}),
                                        (0, s.jsxs)(p.V, {
                                            "aria-label": B.intl.string(B.t.e7GWjQ),
                                            selectedItem: x,
                                            type: "top-pill",
                                            onItemSelect: _,
                                            children: [
                                                (0, s.jsx)(p.V.Item, {
                                                    id: eI.zz.REQUESTS,
                                                    className: tx.AS,
                                                    children: B.intl.string(B.t["7RFcXZ"]),
                                                }),
                                                (0, s.jsx)(p.V.Item, {
                                                    id: eI.zz.SPAM,
                                                    className: tx.AS,
                                                    children:
                                                        0 === r
                                                            ? B.intl.string(B.t.ulKXHp)
                                                            : B.intl.formatToPlainString(B.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, s.jsx)("div", { className: tf.Qs, children: (0, s.jsx)(tb, { section: x }) }),
                    ],
                }),
                A &&
                    (0, s.jsx)(tp, {
                        pageWidth: t,
                        onSidebarResize: function (e, t) {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
