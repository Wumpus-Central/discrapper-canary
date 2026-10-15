(n.r(t), n.d(t, { default: () => tj }));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(837381),
    c = n(731738),
    o = n(17928),
    d = n(554146),
    u = n(43105),
    h = n(858899),
    m = n(834730),
    A = n(123292),
    g = n(475825),
    x = n(192308),
    E = n(43990),
    S = n(849516),
    f = n(761508),
    j = n(944791),
    p = n(456412),
    v = n(964486),
    C = n(260762),
    b = n(812771),
    _ = n(789645),
    I = n(821609),
    N = n(355622),
    R = n(58736),
    M = n(353428),
    T = n(380335),
    G = n(157550),
    k = n(923457),
    y = n(36149),
    P = n(207560);
function U() {
    let e = (0, y.uE)(),
        t = (0, P.yv)(k.p.MESSAGE_REQUEST_RESTRICTIONS);
    return !e && t;
}
var Q = n(336590),
    z = n(92650),
    W = n(959698),
    w = n(977347),
    H = n(378570),
    O = n(138298),
    V = n(761640),
    q = n(47167),
    D = n(688438),
    F = n(105292),
    K = n(172039),
    L = n(612960);
function B(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, q.Ay)(t),
        a = (0, Q.k)(),
        r = (0, Q.r)(),
        c = (0, o.bG)([T.A], () => T.A.isMessageRequest(t.id)),
        d = (0, o.bG)([G.A], () => G.A.isSpam(t.id)),
        u = U() && c && !d,
        A = (0, w.D)(t.id, t.getRecipientId()),
        g = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), c && a && (0, H.iN)(t.id), d && r && (0, H.iN)(t.id));
        }, [t.id, d, r, c, a]),
        x = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t.pIQ3h4), variant: "critical" });
        }, []),
        { markAsNotSpam: E } = (0, z.t)({ onAcceptSuccess: g, onError: x });
    if (null == t || !t.isDM()) return null;
    let S = [
        (0, l.jsx)(
            R.Ay.Icon,
            { icon: _.P, tooltip: F.intl.string(F.t.cpT0Cq), onClick: () => O.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.Ay, {
                toolbar: S,
                "aria-label": F.intl.string(F.t.BIYAqa),
                children: (0, M.zF)({ channel: t, channelName: i, inSidebar: !0 }),
            }),
            d &&
                (0, l.jsxs)("div", {
                    className: L.F,
                    children: [
                        (0, l.jsx)(m.E, { variant: "text-sm/normal", children: F.intl.string(F.t.XVOKgj) }),
                        (0, l.jsx)("div", {
                            className: L.$,
                            children: (0, l.jsx)(I.$, {
                                size: "sm",
                                onClick: () => E(t, A),
                                text: F.intl.string(F.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: K.T,
                children: (0, l.jsx)(W.A.Provider, {
                    value: u,
                    children: (0, l.jsx)(D.A, { channel: t, guild: null, chatInputType: N.oU.SIDEBAR }, t.id),
                }),
            }),
        ],
    });
}
var Z = n(485947),
    X = n(726249),
    J = n(501419),
    Y = n(379848),
    $ = n(742589),
    ee = n(807393),
    et = n(940382),
    en = n(210714),
    el = n(363195),
    es = n(780964),
    ei = n(766075),
    ea = n(734057),
    er = n(186111),
    ec = n(174459),
    eo = n(232835),
    ed = n(287809),
    eu = n(321404),
    eh = n(572009);
function em() {
    return (0, o.bG)([ed.default], () => (0, eh.I9)(ed.default.getCurrentUser()));
}
var eA = n(166643),
    eg = n(957283),
    ex = n(411976),
    eE = n(935208);
function eS(e) {
    return e.sort((e, t) => eE.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var ef = n(790499),
    ej = n(396478),
    ep = n(687599),
    ev = n(477694),
    eC = n(317017),
    eb = n(826223);
function e_(e) {
    let { section: t } = e,
        n = (0, o.bG)([el.A], () => el.A.theme);
    return (0, l.jsxs)(ej.pp, {
        theme: n,
        className: ev.y,
        children: [
            (0, l.jsx)(ej.G8, { width: 415, height: 200, lightSrc: eb, darkSrc: eC }),
            (0, l.jsx)(ej.SG, { note: t === ep.zz.SPAM ? F.intl.string(F.t.hasFPQ) : F.intl.string(F.t.SXrqTf) }),
        ],
    });
}
var eI = n(625494),
    eN = n(615300),
    eR = n(559106),
    eM = n(442433),
    eT = n(201030);
let eG = function (e) {
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
        [g, x] = s.useState(!1),
        [E, S] = s.useState(!1);
    function f() {
        (x(!0), !u || h || E || m?.());
    }
    function j() {
        x(!1);
    }
    return (0, l.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, l.jsx)(eR.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(eN.A.div, {
                    className: a()(eT.Cf, A, { [eT.vu]: h || E, [eT.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, eM.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("463317"),
                                        n.e("893190"),
                                        n.e("189673"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("691994"),
                                        n.e("229787"),
                                        n.e("576665"),
                                        n.e("624198"),
                                        n.e("532418"),
                                    ]).then(n.bind(n, 668569));
                                    return (t) => (0, l.jsx)(e, { ...t, user: c });
                                },
                                {
                                    onClose: () => {
                                        S(!1);
                                    },
                                },
                            ));
                    },
                    onMouseEnter: f,
                    onMouseLeave: j,
                    onClick: d ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: i(g || h || E),
                }),
            }),
    });
};
var ek = n(692617),
    ey = n(97808),
    eP = n(778712),
    eU = n(297413),
    eQ = n(775602),
    ez = n(29160),
    eW = n(854378),
    ew = n(571694),
    eH = n(562819),
    eO = n(215689),
    eV = n(994500),
    eq = n(427262),
    eD = n(19575);
n(536637);
var eF = n(707539),
    eK = n(573163),
    eL = n(978914),
    eB = n(321191),
    eZ = n(903209),
    eX = n(346055),
    eJ = n(863439),
    eY = n(521981),
    e$ = n(448368),
    e0 = n(302031),
    e7 = n(885386),
    e9 = n(576705),
    e8 = n(652215),
    e1 = n(838541),
    e3 = n(282573),
    e6 = n(165648);
let e4 = s.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: i, message: r } = (0, eL.I)(t),
        { isBlocked: c, isIgnored: d } = (0, o.cf)(
            [eV.A],
            () => ({
                isBlocked: null != r && eV.A.isBlockedForMessage(r),
                isIgnored: null != r && eV.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, o.bG)([e9.A], () => e9.A.can(e8.xBc.MANAGE_MESSAGES, t)),
        h = e7.gs.useSetting(),
        { content: A } = s.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, eY.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        g = null;
    if (i)
        g = (0, l.jsx)(m.E, {
            className: e3.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: F.intl.string(F.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            g = (0, l.jsx)(m.E, {
                className: e3.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.intl.string(F.t["WPe+xL"]),
            });
        else if (null != r && d)
            g = (0, l.jsx)(m.E, {
                className: e3.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.intl.string(F.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, e$.o)(r, A, c, d, a()(e3.BK, e6.tZ), {
                leadingIconClass: e3.AF,
                trailingIconClass: e3.AF,
                iconSize: e1.eJ,
            });
            g =
                null != t
                    ? (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", className: e3.BK, children: t })
                    : (0, l.jsx)(m.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e3.G4,
                          children: e,
                      });
        } else
            g = (0, l.jsx)(m.E, {
                className: e3.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.intl.string(F.t["0KfDxM"]),
            });
    else g = null;
    return (0, l.jsx)(e0.Bs.Provider, {
        value: (0, eJ.A)(h, u),
        children: (0, l.jsx)(eX.M, { className: e3.JY, children: g }),
    });
});
var e2 = n(599036);
function e5(e) {
    let t,
        n,
        { userId: i } = e,
        a =
            ((t = (0, o.bG)([ed.default], () => ed.default.getUser(i))),
            (n = (0, o.yK)([eB.A], () => eB.A.getMutualGuilds(i)?.map((e) => e.guild) ?? [])),
            s.useEffect(() => {
                0 === n.length &&
                    null != t &&
                    null == eB.A.getMutualGuilds(i) &&
                    (0, eZ.A)(i, void 0, { withMutualGuilds: !0 });
            }, [n, t, i]),
            n);
    return null == a || 0 === a.length
        ? (0, l.jsx)(m.E, {
              className: e2.tE,
              variant: "text-sm/normal",
              color: "text-muted",
              children: F.intl.string(F.t.jpY0X5),
          })
        : (0, l.jsxs)("div", {
              className: e2.I9,
              children: [
                  (0, l.jsx)(ek.A, { guilds: a, maxGuilds: 3, size: eW.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                  (0, l.jsx)(m.E, {
                      className: e2.tE,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: F.intl.format(F.t.eE3oep, { count: a.length }),
                  }),
              ],
          });
}
let te = eD.Ay.getEnableHardwareAcceleration() ? ey.Js : ey.eu;
function tt(e) {
    let t,
        n,
        { channel: s, otherUser: i, active: a, isRestricted: r = !1 } = e,
        c = (0, o.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        d = (0, o.bG)([eV.A], () => (null == i ? null : eV.A.getNickname(i.id))),
        u = !c && a,
        h =
            ((t = (0, eL.I)(s)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: l } = e;
                return l && null != n
                    ? eE.default.extractTimestamp(n.id)
                    : null != t
                      ? eE.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eK.Ay], () => eK.Ay.lastMessageId(s.id)), ...t }))
                ? ""
                : (0, eF.aK)(n)),
        { avatarDecorationSrc: A } = (0, eO.A)({
            user: i,
            size: (0, eH.Te)(eP._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(te, {
                className: e2.my,
                src: (0, ew.Y)(s, 40, u),
                avatarDecoration: A,
                size: eP._3.SIZE_40,
                "aria-label": i?.username ?? F.intl.string(F.t["30mdIx"]),
            }),
            (0, l.jsxs)("div", {
                className: e2.yt,
                children: [
                    (0, l.jsxs)("div", {
                        className: e2.rU,
                        children: [
                            (0, l.jsx)(eU.A, {
                                nick: d,
                                user: i,
                                showAccountIdentifier: !0,
                                className: e2.I8,
                                usernameClass: e2.Xh,
                                discriminatorClass: null != eq.Ay.getGlobalName(i) ? e2.vl : e2.D2,
                            }),
                            (0, l.jsx)(m.E, {
                                className: e2.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                        ],
                    }),
                    (0, l.jsx)(ez.A, {
                        hoverText: r
                            ? (0, l.jsx)(m.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: F.intl.string(F.t.fnduP5),
                              })
                            : (0, l.jsx)(e4, { channel: s }),
                        forceHover: a,
                        children: (0, l.jsx)(e5, { userId: i.id }),
                    }),
                ],
            }),
        ],
    });
}
var tn = n(885207);
function tl(e) {
    let { active: t, user: n, channel: i, isRestricted: a = !1 } = e,
        r = (0, Q.k)(),
        c = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        o = s.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        d = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), r && (0, H.iN)(i.id));
        }, [i.id, r]),
        {
            acceptMessageRequest: u,
            rejectMessageRequest: m,
            isAcceptLoading: A,
            isRejectLoading: g,
            isUserProfileLoading: x,
            isOptimisticAccepted: E,
            isOptimisticRejected: S,
        } = (0, z.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: c }),
        f = A || g || x || E || S;
    return (0, l.jsxs)("div", {
        className: tn.kL,
        children: [
            (0, l.jsx)(tt, { channel: i, otherUser: n, active: t, isRestricted: a }),
            (0, l.jsxs)("div", {
                className: tn.o1,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tn.x6,
                        children: (0, l.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: F.intl.string(a ? F.t.BVN4pL : F.t.B2nygW),
                            onClick: function (e) {
                                (e.stopPropagation(), m(i.id));
                            },
                            disabled: f,
                            loading: g || S,
                        }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tn.x6,
                        children: (0, l.jsx)(I.$, {
                            variant: "primary",
                            size: "sm",
                            text: F.intl.string(F.t.Kz8Pwr),
                            onClick: function (e) {
                                (e.stopPropagation(), u(i.id));
                            },
                            disabled: f,
                            loading: A || x || E,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ts(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a, isRestricted: r = !1 } = e,
        { channelId: c } = (0, eg.N)();
    return (0, l.jsx)(eG, {
        index: t,
        className: n,
        isFocused: c === s.id,
        channel: s,
        user: i,
        onClick: function (e) {
            (e.stopPropagation(),
                O.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: V.fe, hasSingleMessageRequest: a }),
                ec.default.track(e8.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: s.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    eI._.dispatch(e8.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0));
        },
        children: (e) => (0, l.jsx)(tl, { active: e, user: i, channel: s, isRestricted: r }),
    });
}
var ti = n(308528),
    ta = n(928658);
function tr(e) {
    let { channel: t, onReportClick: n, onReportSubmit: s, onMouseEnter: i, onMouseLeave: a } = e,
        { error: r, loaded: c, message: o } = (0, eL.I)(t);
    if (null == o && (c || r)) return null;
    function d() {
        (s?.(), ti.A.closePrivateChannel(t.id));
    }
    return (0, l.jsx)(I.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: function (e) {
            (e.stopPropagation(), n?.(), null != o && (0, ta.b8)(o, d));
        },
        onMouseEnter: i,
        onMouseLeave: a,
        text: F.intl.string(F.t.HHZmDn),
    });
}
var tc = n(489768);
function to(e) {
    let { active: t, user: n, channel: i } = e,
        a = (0, Q.r)(),
        r = s.useCallback(() => {
            ((0, h.P0)({ text: F.intl.string(F.t.pIQ3h4), variant: "critical" }),
                ee.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW }));
        }, []),
        o = s.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        d = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), a && (0, H.iN)(i.id));
        }, [i.id, a]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: m,
            isUserProfileLoading: A,
            isOptimisticAccepted: g,
        } = (0, z.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: r }),
        x = m || A,
        E = x || g;
    return (0, l.jsxs)("div", {
        className: tc.kL,
        children: [
            (0, l.jsx)(tt, { otherUser: n, channel: i, active: t }),
            (0, l.jsxs)("div", {
                className: tc.o1,
                children: [
                    (0, l.jsx)(I.$, {
                        variant: "secondary",
                        size: "sm",
                        text: F.intl.string(F.t.vicfl6),
                        onClick: function (e) {
                            (u(i.id), e.stopPropagation());
                        },
                        disabled: E,
                        loading: x,
                    }),
                    (0, l.jsx)(tr, { channel: i }),
                ],
            }),
        ],
    });
}
function td(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a } = e;
    return (0, l.jsx)(eG, {
        index: t,
        className: n,
        isFocused: !1,
        channel: s,
        user: i,
        onClick: function (e) {
            (e.stopPropagation(),
                O.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: V.fe, hasSingleMessageRequest: a }),
                ec.default.track(e8.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: s.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    eI._.dispatch(e8.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0));
        },
        children: (e) => (0, l.jsx)(to, { active: e, user: i, channel: s }),
    });
}
var tu = n(324098);
function th() {
    let e,
        t,
        n,
        i = s.useRef(null),
        d =
            ((e = (0, o.bG)([ea.A], () => ea.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)(
                [ea.A, G.A],
                () => {
                    let e = ea.A.getMutablePrivateChannels();
                    return eS(
                        Array.from(G.A.getSpamChannelIds())
                            .map((t) => e[t])
                            .filter((e) => null != e),
                    );
                },
                [e],
            )),
            (n = (0, o.cf)(
                [ed.default],
                () => {
                    let e = {};
                    return (
                        t.forEach((t) => {
                            let n = ed.default.getUser(t.recipients[0]);
                            null != n && (e[t.id] = n);
                        }),
                        e
                    );
                },
                [t],
            )),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        u = (0, ef.I)(),
        x = (0, Q.r)(),
        E = em(),
        S = (0, C.A)("message-requests-spam-list"),
        { channelId: f } = (0, eg.N)(),
        j = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        { rejectAll: p } = (0, z.t)({ onError: j }),
        b = s.useCallback(() => {
            p(d.map((e) => e.channel.id));
        }, [d, p]);
    (0, v.Ay)(() => {
        (ec.default.track(e8.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            ee.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW }));
    });
    let _ = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    s = d[t + 1]?.channel?.id,
                    i = n.channel.id;
                return (0, l.jsx)(
                    td,
                    {
                        index: t,
                        className: a()({ [tu.wH]: null != f && f === i, [tu.wZ]: null != f && f === s }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: x,
                    },
                    i,
                );
            },
            [d, x, f],
        ),
        I = s.useCallback(
            () =>
                (0, l.jsxs)(
                    Z.A,
                    {
                        className: tu.Gf,
                        children: [
                            F.intl.format(F.t.C79Edh, { count: u }),
                            E && u > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              className: tu.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(A.Q, {
                                              textVariant: "text-sm/normal",
                                              text: F.intl.string(F.t.p6t7RC),
                                              onClick: b,
                                              "aria-label": F.intl.string(F.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [u, b, E],
        );
    return 0 === d.length
        ? (0, l.jsx)(e_, { section: ep.zz.SPAM })
        : (0, l.jsx)(r.hD, {
              navigator: S,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          g.OZ,
                          {
                              className: tu.p_,
                              innerRole: n,
                              innerAriaLabel: F.intl.string(F.t.e7GWjQ),
                              ref: (e) => {
                                  ((i.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: I,
                              renderRow: _,
                              sections: [d.length],
                              chunkSize: 30,
                              fade: !0,
                              ...s,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
var tm = n(49999),
    tA = n(771338),
    tg = n(999900);
function tx() {
    let e,
        t,
        n,
        i = s.useRef(null),
        d = (0, ex.W)(),
        u =
            ((e = (0, o.bG)([ea.A], () => ea.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)(
                [ea.A, T.A],
                () => {
                    let e = ea.A.getMutablePrivateChannels();
                    return eS(
                        Array.from(T.A.getMessageRequestChannelIds())
                            .map((t) => e[t])
                            .filter((e) => null != e),
                    );
                },
                [e],
            )),
            (n = (0, o.cf)(
                [ed.default],
                () => {
                    let e = {};
                    return (
                        t.forEach((t) => {
                            let n = ed.default.getUser(t.recipients[0]);
                            null != n && (e[t.id] = n);
                        }),
                        e
                    );
                },
                [t],
            )),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        x = (0, Q.k)(),
        E = em(),
        S = U(),
        f = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        { rejectAll: j } = (0, z.t)({ onError: f }),
        p = (0, C.A)("message-requests-list"),
        { channelId: v } = (0, eg.N)(),
        b = s.useCallback(() => {
            j(u.map((e) => e.channel.id));
        }, [u, j]),
        _ = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    s = u[t + 1]?.channel?.id,
                    i = n.channel.id,
                    r = a()({ [tA.wH]: null != v && v === i, [tA.wZ]: null != v && v === s });
                return (0, l.jsx)(
                    ts,
                    {
                        index: t,
                        className: r,
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: x,
                        isRestricted: S,
                    },
                    i,
                );
            },
            [x, S, u, v],
        ),
        I = s.useCallback(
            () =>
                (0, l.jsxs)(
                    Z.A,
                    {
                        className: tA.Gf,
                        children: [
                            d > 0 ? F.intl.formatToPlainString(F.t.rA4iWY, { count: d }) : F.intl.string(F.t.flPU6g),
                            E && d > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              className: tA.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(A.Q, {
                                              onClick: b,
                                              textVariant: "text-sm/normal",
                                              text: F.intl.string(F.t.p6t7RC),
                                              "aria-label": F.intl.string(F.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [d, b, E],
        );
    return (u.length !== d && ee.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, l.jsx)(e_, { section: ep.zz.REQUESTS })
        : (0, l.jsx)(r.hD, {
              navigator: p,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          g.OZ,
                          {
                              className: tA.p_,
                              innerRole: n,
                              innerAriaLabel: F.intl.string(F.t.e7GWjQ),
                              ref: (e) => {
                                  ((i.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: I,
                              renderRow: _,
                              sections: [u.length],
                              chunkSize: 30,
                              fade: !0,
                              ...s,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function tE(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        s = (0, o.bG)([V.Ay], () => V.Ay.getSidebarState(V.fe)),
        i = (0, o.bG)([ea.A], () => ea.A.getChannel(s?.channelId));
    if (null == s || s.type !== et.PE.VIEW_MESSAGE_REQUEST || null == i || !i.isPrivate()) return null;
    let a = t - e8.ItT;
    return (0, l.jsx)(b.A, {
        sidebarType: b.X.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, l.jsx)(B, { channel: i, baseChannelId: V.fe }),
    });
}
function tS(e) {
    let t = (0, eA.A)();
    return (s.useEffect(() => {
        (0, J.Vh)(d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || er.A.hasLayers() || (0, x.hasAnyModalOpen)())
        ? e.children
        : (0, l.jsx)(Y.Ay, {
              contentTypes: [d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: s, markAsDismissed: i } = n,
                      a = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => i(tm.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return s === d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, l.jsx)(u.A, {
                                          ...a,
                                          title: F.intl.string(F.t.hRT8tc),
                                          body: F.intl.string(F.t.apPgJG),
                                          actions: [
                                              { text: F.intl.string(F.t.LNoAQW), onClick: () => i(tm.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, l.jsx)(u.A, {
                                          ...a,
                                          title: F.intl.string(F.t.hRT8tc),
                                          body: F.intl.string(F.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: F.intl.string(F.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      (e.stopPropagation(),
                                                          (0, ei.openUserSettings)(
                                                              es.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          i(tm.i.TAKE_ACTION));
                                                  },
                                              },
                                              {
                                                  text: F.intl.string(F.t.LNoAQW),
                                                  onClick: () => i(tm.i.USER_DISMISS),
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
function tf(e) {
    let { section: t } = e;
    return t === ep.zz.SPAM ? (0, l.jsx)(th, {}) : (0, l.jsx)(tx, {});
}
let tj = (0, p.A)(function (e) {
    let { width: t } = e,
        n = (0, ex.W)();
    (0, v.Ay)(() => {
        (j.I(e8.BVt.MESSAGE_REQUESTS),
            (0, en.d0)("message-requests"),
            ec.default.track(e8.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            ee.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW }));
    });
    let i = (0, o.bG)([el.A], () => el.A.theme),
        r = (0, ef.I)(),
        [d, u] = s.useState(!1),
        h = (0, o.bG)([V.Ay], () => {
            let e = V.Ay.getSidebarState(V.fe);
            return null != e && e.type === et.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        A = null != h,
        g = (0, eu.c)(m),
        x = (0, o.bG)([eo.A, ed.default], () => {
            if (null == m) return !1;
            let e = ed.default.getCurrentUser();
            return null != eo.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        p = s.useRef(null);
    s.useEffect(() => {
        null != m && !g && x && A && ((0, H.iN)(m), O.A.closeChannelSidebar(V.fe));
    }, [m, x, A, g]);
    let [C, b] = s.useState(ep.zz.REQUESTS);
    function _(e) {
        b(e);
    }
    return (
        (0, X.HU)({ location: F.intl.string(F.t.e7GWjQ) }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(tg.TE, tA.kL, { [tg.js]: A, [tg.jl]: A && d }),
                    children: [
                        (0, l.jsx)(E.N, {
                            theme: i,
                            children: (e) =>
                                (0, l.jsxs)($.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, l.jsx)($.A.Icon, { icon: S.u, "aria-hidden": !0 }),
                                        (0, l.jsx)(tS, {
                                            targetElementRef: p,
                                            children: (0, l.jsx)($.A.Title, {
                                                ref: p,
                                                children: F.intl.string(F.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, l.jsx)($.A.Divider, {}),
                                        (0, l.jsxs)(f.V, {
                                            "aria-label": F.intl.string(F.t.e7GWjQ),
                                            selectedItem: C,
                                            type: "top-pill",
                                            onItemSelect: _,
                                            children: [
                                                (0, l.jsx)(f.V.Item, {
                                                    id: ep.zz.REQUESTS,
                                                    className: tA.AS,
                                                    children: F.intl.string(F.t["7RFcXZ"]),
                                                }),
                                                (0, l.jsx)(f.V.Item, {
                                                    id: ep.zz.SPAM,
                                                    className: tA.AS,
                                                    children:
                                                        0 === r
                                                            ? F.intl.string(F.t.ulKXHp)
                                                            : F.intl.formatToPlainString(F.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, l.jsx)("div", { className: tg.Qs, children: (0, l.jsx)(tf, { section: C }) }),
                    ],
                }),
                A &&
                    (0, l.jsx)(tE, {
                        pageWidth: t,
                        onSidebarResize: function (e, t) {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
