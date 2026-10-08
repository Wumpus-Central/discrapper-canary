(n.r(t), n.d(t, { default: () => tp }));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(837381),
    c = n(731738),
    o = n(17928),
    d = n(554146),
    u = n(43105),
    h = n(376357),
    m = n(834730),
    A = n(123292),
    E = n(475825),
    g = n(192308),
    x = n(43990),
    S = n(849516),
    f = n(761508),
    j = n(944791),
    p = n(456412),
    C = n(964486),
    I = n(260762),
    v = n(812771),
    b = n(789645),
    _ = n(821609),
    R = n(355622),
    N = n(58736),
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
    w = n(959698),
    W = n(977347),
    F = n(378570),
    H = n(138298),
    L = n(761640),
    O = n(47167),
    V = n(688438),
    q = n(660183),
    D = n(172039),
    K = n(612960);
function B(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, O.Ay)(t),
        a = (0, Q.k)(),
        r = (0, Q.r)(),
        c = (0, o.bG)([T.A], () => T.A.isMessageRequest(t.id)),
        d = (0, o.bG)([G.A], () => G.A.isSpam(t.id)),
        u = U() && c && !d,
        A = (0, W.D)(t.id, t.getRecipientId()),
        E = s.useCallback(() => {
            (H.A.closeChannelSidebar(L.fe), c && a && (0, F.iN)(t.id), d && r && (0, F.iN)(t.id));
        }, [t.id, d, r, c, a]),
        g = s.useCallback(() => {
            (0, h.P0)((0, h.ox)(q.intl.string(q.t.pIQ3h4), h.Ck.FAILURE));
        }, []),
        { markAsNotSpam: x } = (0, z.t)({ onAcceptSuccess: E, onError: g });
    if (null == t || !t.isDM()) return null;
    let S = [
        (0, l.jsx)(
            N.Ay.Icon,
            { icon: b.P, tooltip: q.intl.string(q.t.cpT0Cq), onClick: () => H.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.Ay, {
                toolbar: S,
                "aria-label": q.intl.string(q.t.BIYAqa),
                children: (0, M.zF)({ channel: t, channelName: i, inSidebar: !0 }),
            }),
            d &&
                (0, l.jsxs)("div", {
                    className: K.F,
                    children: [
                        (0, l.jsx)(m.E, { variant: "text-sm/normal", children: q.intl.string(q.t.XVOKgj) }),
                        (0, l.jsx)("div", {
                            className: K.$,
                            children: (0, l.jsx)(_.$, {
                                size: "sm",
                                onClick: () => x(t, A),
                                text: q.intl.string(q.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: D.T,
                children: (0, l.jsx)(w.A.Provider, {
                    value: u,
                    children: (0, l.jsx)(V.A, { channel: t, guild: null, chatInputType: R.oU.SIDEBAR }, t.id),
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
    eE = n(957283),
    eg = n(411976),
    ex = n(935208);
function eS(e) {
    return e.sort((e, t) => ex.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var ef = n(790499),
    ej = n(396478),
    ep = n(687599),
    eC = n(477694),
    eI = n(317017),
    ev = n(826223);
function eb(e) {
    let { section: t } = e,
        n = (0, o.bG)([el.A], () => el.A.theme);
    return (0, l.jsxs)(ej.pp, {
        theme: n,
        className: eC.y,
        children: [
            (0, l.jsx)(ej.G8, { width: 415, height: 200, lightSrc: ev, darkSrc: eI }),
            (0, l.jsx)(ej.SG, { note: t === ep.zz.SPAM ? q.intl.string(q.t.hasFPQ) : q.intl.string(q.t.SXrqTf) }),
        ],
    });
}
var e_ = n(625494),
    eR = n(615300),
    eN = n(559106),
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
        [E, g] = s.useState(!1),
        [x, S] = s.useState(!1);
    function f() {
        (g(!0), !u || h || x || m?.());
    }
    function j() {
        g(!1);
    }
    return (0, l.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, l.jsx)(eN.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(eR.A.div, {
                    className: a()(eT.Cf, A, { [eT.vu]: h || x, [eT.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, eM.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("463317"),
                                        n.e("926132"),
                                        n.e("146652"),
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
                    children: i(E || h || x),
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
    ew = n(854378),
    eW = n(571694),
    eF = n(562819),
    eH = n(215689),
    eL = n(994500),
    eO = n(427262),
    eV = n(19575);
n(536637);
var eq = n(707539),
    eD = n(573163),
    eK = n(978914),
    eB = n(73153),
    eZ = n(321191),
    eX = n(903209),
    eJ = n(346055),
    eY = n(863439),
    e$ = n(521981),
    e0 = n(448368),
    e7 = n(302031),
    e3 = n(885386),
    e1 = n(576705),
    e9 = n(652215),
    e6 = n(838541),
    e8 = n(282573),
    e4 = n(165648);
let e2 = s.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: i, message: r } = (0, eK.I)(t),
        { isBlocked: c, isIgnored: d } = (0, o.cf)(
            [eL.A],
            () => ({
                isBlocked: null != r && eL.A.isBlockedForMessage(r),
                isIgnored: null != r && eL.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, o.bG)([e1.A], () => e1.A.can(e9.xBc.MANAGE_MESSAGES, t)),
        h = e3.gs.useSetting(),
        { content: A } = s.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, e$.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        E = null;
    if (i)
        E = (0, l.jsx)(m.E, {
            className: e8.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: q.intl.string(q.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            E = (0, l.jsx)(m.E, {
                className: e8.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: q.intl.string(q.t["WPe+xL"]),
            });
        else if (null != r && d)
            E = (0, l.jsx)(m.E, {
                className: e8.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: q.intl.string(q.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, e0.o)(r, A, c, d, a()(e8.BK, e4.tZ), {
                leadingIconClass: e8.AF,
                trailingIconClass: e8.AF,
                iconSize: e6.eJ,
            });
            E =
                null != t
                    ? (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", className: e8.BK, children: t })
                    : (0, l.jsx)(m.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e8.G4,
                          children: e,
                      });
        } else
            E = (0, l.jsx)(m.E, {
                className: e8.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: q.intl.string(q.t["0KfDxM"]),
            });
    else E = null;
    return (0, l.jsx)(e7.Bs.Provider, {
        value: (0, eY.A)(h, u),
        children: (0, l.jsx)(eJ.M, { className: e8.JY, children: E }),
    });
});
var e5 = n(599036);
function te(e) {
    let t,
        n,
        { userId: i } = e,
        a =
            ((t = (0, o.bG)([ed.default], () => ed.default.getUser(i))),
            (n = (0, o.yK)([eZ.A], () => eZ.A.getMutualGuilds(i)?.map((e) => e.guild) ?? [])),
            s.useEffect(() => {
                0 === n.length &&
                    null != t &&
                    null == eZ.A.getMutualGuilds(i) &&
                    eB.h.wait(() => (0, eX.A)(i, void 0, { withMutualGuilds: !0 }));
            }, [n, t, i]),
            n);
    return null == a || 0 === a.length
        ? (0, l.jsx)(m.E, {
              className: e5.tE,
              variant: "text-sm/normal",
              color: "text-muted",
              children: q.intl.string(q.t.jpY0X5),
          })
        : (0, l.jsxs)("div", {
              className: e5.I9,
              children: [
                  (0, l.jsx)(ek.A, { guilds: a, maxGuilds: 3, size: ew.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                  (0, l.jsx)(m.E, {
                      className: e5.tE,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: q.intl.format(q.t.eE3oep, { count: a.length }),
                  }),
              ],
          });
}
let tt = eV.Ay.getEnableHardwareAcceleration() ? ey.Js : ey.eu;
function tn(e) {
    let t,
        n,
        { channel: s, otherUser: i, active: a, isRestricted: r = !1 } = e,
        c = (0, o.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        d = (0, o.bG)([eL.A], () => (null == i ? null : eL.A.getNickname(i.id))),
        u = !c && a,
        h =
            ((t = (0, eK.I)(s)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: l } = e;
                return l && null != n
                    ? ex.default.extractTimestamp(n.id)
                    : null != t
                      ? ex.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eD.Ay], () => eD.Ay.lastMessageId(s.id)), ...t }))
                ? ""
                : (0, eq.aK)(n)),
        { avatarDecorationSrc: A } = (0, eH.A)({
            user: i,
            size: (0, eF.Te)(eP._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tt, {
                className: e5.my,
                src: (0, eW.Y)(s, 40, u),
                avatarDecoration: A,
                size: eP._3.SIZE_40,
                "aria-label": i?.username ?? q.intl.string(q.t["30mdIx"]),
            }),
            (0, l.jsxs)("div", {
                className: e5.yt,
                children: [
                    (0, l.jsxs)("div", {
                        className: e5.rU,
                        children: [
                            (0, l.jsx)(eU.A, {
                                nick: d,
                                user: i,
                                showAccountIdentifier: !0,
                                className: e5.I8,
                                usernameClass: e5.Xh,
                                discriminatorClass: null != eO.Ay.getGlobalName(i) ? e5.vl : e5.D2,
                            }),
                            (0, l.jsx)(m.E, {
                                className: e5.L7,
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
                                  children: q.intl.string(q.t.fnduP5),
                              })
                            : (0, l.jsx)(e2, { channel: s }),
                        forceHover: a,
                        children: (0, l.jsx)(te, { userId: i.id }),
                    }),
                ],
            }),
        ],
    });
}
var tl = n(885207);
function ts(e) {
    let { active: t, user: n, channel: i, isRestricted: a = !1 } = e,
        r = (0, Q.k)(),
        c = s.useCallback(() => {
            (0, h.P0)((0, h.ox)(q.intl.string(q.t["EDYbS+"]), h.Ck.FAILURE));
        }, []),
        o = s.useCallback(() => {
            H.A.closeChannelSidebar(L.fe);
        }, []),
        d = s.useCallback(() => {
            (H.A.closeChannelSidebar(L.fe), r && (0, F.iN)(i.id));
        }, [i.id, r]),
        {
            acceptMessageRequest: u,
            rejectMessageRequest: m,
            isAcceptLoading: A,
            isRejectLoading: E,
            isUserProfileLoading: g,
            isOptimisticAccepted: x,
            isOptimisticRejected: S,
        } = (0, z.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: c }),
        f = A || E || g || x || S;
    return (0, l.jsxs)("div", {
        className: tl.kL,
        children: [
            (0, l.jsx)(tn, { channel: i, otherUser: n, active: t, isRestricted: a }),
            (0, l.jsxs)("div", {
                className: tl.o1,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tl.x6,
                        children: (0, l.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: q.intl.string(a ? q.t.BVN4pL : q.t.B2nygW),
                            onClick: function (e) {
                                (e.stopPropagation(), m(i.id));
                            },
                            disabled: f,
                            loading: E || S,
                        }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tl.x6,
                        children: (0, l.jsx)(_.$, {
                            variant: "primary",
                            size: "sm",
                            text: q.intl.string(q.t.Kz8Pwr),
                            onClick: function (e) {
                                (e.stopPropagation(), u(i.id));
                            },
                            disabled: f,
                            loading: A || g || x,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ti(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a, isRestricted: r = !1 } = e,
        { channelId: c } = (0, eE.N)();
    return (0, l.jsx)(eG, {
        index: t,
        className: n,
        isFocused: c === s.id,
        channel: s,
        user: i,
        onClick: function (e) {
            (e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: L.fe, hasSingleMessageRequest: a }),
                ec.default.track(e9.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: s.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    e_._.dispatch(e9.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0));
        },
        children: (e) => (0, l.jsx)(ts, { active: e, user: i, channel: s, isRestricted: r }),
    });
}
var ta = n(308528),
    tr = n(928658);
function tc(e) {
    let { channel: t, onReportClick: n, onReportSubmit: s, onMouseEnter: i, onMouseLeave: a } = e,
        { error: r, loaded: c, message: o } = (0, eK.I)(t);
    if (null == o && (c || r)) return null;
    function d() {
        (s?.(), ta.A.closePrivateChannel(t.id));
    }
    return (0, l.jsx)(_.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: function (e) {
            (e.stopPropagation(), n?.(), null != o && (0, tr.b8)(o, d));
        },
        onMouseEnter: i,
        onMouseLeave: a,
        text: q.intl.string(q.t.HHZmDn),
    });
}
var to = n(489768);
function td(e) {
    let { active: t, user: n, channel: i } = e,
        a = (0, Q.r)(),
        r = s.useCallback(() => {
            ((0, h.P0)((0, h.ox)(q.intl.string(q.t.pIQ3h4), h.Ck.FAILURE)),
                ee.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW }));
        }, []),
        o = s.useCallback(() => {
            H.A.closeChannelSidebar(L.fe);
        }, []),
        d = s.useCallback(() => {
            (H.A.closeChannelSidebar(L.fe), a && (0, F.iN)(i.id));
        }, [i.id, a]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: m,
            isUserProfileLoading: A,
            isOptimisticAccepted: E,
        } = (0, z.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: r }),
        g = m || A,
        x = g || E;
    return (0, l.jsxs)("div", {
        className: to.kL,
        children: [
            (0, l.jsx)(tn, { otherUser: n, channel: i, active: t }),
            (0, l.jsxs)("div", {
                className: to.o1,
                children: [
                    (0, l.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: q.intl.string(q.t.vicfl6),
                        onClick: function (e) {
                            (u(i.id), e.stopPropagation());
                        },
                        disabled: x,
                        loading: g,
                    }),
                    (0, l.jsx)(tc, { channel: i }),
                ],
            }),
        ],
    });
}
function tu(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a } = e;
    return (0, l.jsx)(eG, {
        index: t,
        className: n,
        isFocused: !1,
        channel: s,
        user: i,
        onClick: function (e) {
            (e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: L.fe, hasSingleMessageRequest: a }),
                ec.default.track(e9.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: s.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    e_._.dispatch(e9.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0));
        },
        children: (e) => (0, l.jsx)(td, { active: e, user: i, channel: s }),
    });
}
var th = n(324098);
function tm() {
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
        g = (0, Q.r)(),
        x = em(),
        S = (0, I.A)("message-requests-spam-list"),
        { channelId: f } = (0, eE.N)(),
        j = s.useCallback(() => {
            (0, h.P0)((0, h.ox)(q.intl.string(q.t["EDYbS+"]), h.Ck.FAILURE));
        }, []),
        { rejectAll: p } = (0, z.t)({ onError: j }),
        v = s.useCallback(() => {
            p(d.map((e) => e.channel.id));
        }, [d, p]);
    (0, C.Ay)(() => {
        (ec.default.track(e9.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            ee.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW }));
    });
    let b = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    s = d[t + 1]?.channel?.id,
                    i = n.channel.id;
                return (0, l.jsx)(
                    tu,
                    {
                        index: t,
                        className: a()({ [th.wH]: null != f && f === i, [th.wZ]: null != f && f === s }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: g,
                    },
                    i,
                );
            },
            [d, g, f],
        ),
        _ = s.useCallback(
            () =>
                (0, l.jsxs)(
                    Z.A,
                    {
                        className: th.Gf,
                        children: [
                            q.intl.format(q.t.C79Edh, { count: u }),
                            x && u > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              className: th.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(A.Q, {
                                              textVariant: "text-sm/normal",
                                              text: q.intl.string(q.t.p6t7RC),
                                              onClick: v,
                                              "aria-label": q.intl.string(q.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [u, v, x],
        );
    return 0 === d.length
        ? (0, l.jsx)(eb, { section: ep.zz.SPAM })
        : (0, l.jsx)(r.hD, {
              navigator: S,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          E.OZ,
                          {
                              className: th.p_,
                              innerRole: n,
                              innerAriaLabel: q.intl.string(q.t.e7GWjQ),
                              ref: (e) => {
                                  ((i.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: _,
                              renderRow: b,
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
var tA = n(49999),
    tE = n(771338),
    tg = n(999900);
function tx() {
    let e,
        t,
        n,
        i = s.useRef(null),
        d = (0, eg.W)(),
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
        g = (0, Q.k)(),
        x = em(),
        S = U(),
        f = s.useCallback(() => {
            (0, h.P0)((0, h.ox)(q.intl.string(q.t["EDYbS+"]), h.Ck.FAILURE));
        }, []),
        { rejectAll: j } = (0, z.t)({ onError: f }),
        p = (0, I.A)("message-requests-list"),
        { channelId: C } = (0, eE.N)(),
        v = s.useCallback(() => {
            j(u.map((e) => e.channel.id));
        }, [u, j]),
        b = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    s = u[t + 1]?.channel?.id,
                    i = n.channel.id,
                    r = a()({ [tE.wH]: null != C && C === i, [tE.wZ]: null != C && C === s });
                return (0, l.jsx)(
                    ti,
                    {
                        index: t,
                        className: r,
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: g,
                        isRestricted: S,
                    },
                    i,
                );
            },
            [g, S, u, C],
        ),
        _ = s.useCallback(
            () =>
                (0, l.jsxs)(
                    Z.A,
                    {
                        className: tE.Gf,
                        children: [
                            d > 0 ? q.intl.formatToPlainString(q.t.rA4iWY, { count: d }) : q.intl.string(q.t.flPU6g),
                            x && d > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              className: tE.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(A.Q, {
                                              onClick: v,
                                              textVariant: "text-sm/normal",
                                              text: q.intl.string(q.t.p6t7RC),
                                              "aria-label": q.intl.string(q.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [d, v, x],
        );
    return (u.length !== d && ee.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, l.jsx)(eb, { section: ep.zz.REQUESTS })
        : (0, l.jsx)(r.hD, {
              navigator: p,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          E.OZ,
                          {
                              className: tE.p_,
                              innerRole: n,
                              innerAriaLabel: q.intl.string(q.t.e7GWjQ),
                              ref: (e) => {
                                  ((i.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: _,
                              renderRow: b,
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
function tS(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        s = (0, o.bG)([L.Ay], () => L.Ay.getSidebarState(L.fe)),
        i = (0, o.bG)([ea.A], () => ea.A.getChannel(s?.channelId));
    if (null == s || s.type !== et.PE.VIEW_MESSAGE_REQUEST || null == i || !i.isPrivate()) return null;
    let a = t - e9.ItT;
    return (0, l.jsx)(v.A, {
        sidebarType: v.X.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, l.jsx)(B, { channel: i, baseChannelId: L.fe }),
    });
}
function tf(e) {
    let t = (0, eA.A)();
    return (s.useEffect(() => {
        (0, J.Vh)(d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || er.A.hasLayers() || (0, g.hasAnyModalOpen)())
        ? e.children
        : (0, l.jsx)(Y.Ay, {
              contentTypes: [d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: s, markAsDismissed: i } = n,
                      a = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => i(tA.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return s === d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, l.jsx)(u.A, {
                                          ...a,
                                          title: q.intl.string(q.t.hRT8tc),
                                          body: q.intl.string(q.t.apPgJG),
                                          actions: [
                                              { text: q.intl.string(q.t.LNoAQW), onClick: () => i(tA.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, l.jsx)(u.A, {
                                          ...a,
                                          title: q.intl.string(q.t.hRT8tc),
                                          body: q.intl.string(q.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: q.intl.string(q.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      (e.stopPropagation(),
                                                          (0, ei.openUserSettings)(
                                                              es.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          i(tA.i.TAKE_ACTION));
                                                  },
                                              },
                                              {
                                                  text: q.intl.string(q.t.LNoAQW),
                                                  onClick: () => i(tA.i.USER_DISMISS),
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
function tj(e) {
    let { section: t } = e;
    return t === ep.zz.SPAM ? (0, l.jsx)(tm, {}) : (0, l.jsx)(tx, {});
}
let tp = (0, p.A)(function (e) {
    let { width: t } = e,
        n = (0, eg.W)();
    (0, C.Ay)(() => {
        (j.I(e9.BVt.MESSAGE_REQUESTS),
            (0, en.d0)("message-requests"),
            ec.default.track(e9.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            ee.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW }));
    });
    let i = (0, o.bG)([el.A], () => el.A.theme),
        r = (0, ef.I)(),
        [d, u] = s.useState(!1),
        h = (0, o.bG)([L.Ay], () => {
            let e = L.Ay.getSidebarState(L.fe);
            return null != e && e.type === et.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        A = null != h,
        E = (0, eu.c)(m),
        g = (0, o.bG)([eo.A, ed.default], () => {
            if (null == m) return !1;
            let e = ed.default.getCurrentUser();
            return null != eo.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        p = s.useRef(null);
    s.useEffect(() => {
        null != m && !E && g && A && ((0, F.iN)(m), H.A.closeChannelSidebar(L.fe));
    }, [m, g, A, E]);
    let [I, v] = s.useState(ep.zz.REQUESTS);
    function b(e) {
        v(e);
    }
    return (
        (0, X.HU)({ location: q.intl.string(q.t.e7GWjQ) }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(tg.TE, tE.kL, { [tg.js]: A, [tg.jl]: A && d }),
                    children: [
                        (0, l.jsx)(x.N, {
                            theme: i,
                            children: (e) =>
                                (0, l.jsxs)($.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, l.jsx)($.A.Icon, { icon: S.u, "aria-hidden": !0 }),
                                        (0, l.jsx)(tf, {
                                            targetElementRef: p,
                                            children: (0, l.jsx)($.A.Title, {
                                                ref: p,
                                                children: q.intl.string(q.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, l.jsx)($.A.Divider, {}),
                                        (0, l.jsxs)(f.V, {
                                            "aria-label": q.intl.string(q.t.e7GWjQ),
                                            selectedItem: I,
                                            type: "top-pill",
                                            onItemSelect: b,
                                            children: [
                                                (0, l.jsx)(f.V.Item, {
                                                    id: ep.zz.REQUESTS,
                                                    className: tE.AS,
                                                    children: q.intl.string(q.t["7RFcXZ"]),
                                                }),
                                                (0, l.jsx)(f.V.Item, {
                                                    id: ep.zz.SPAM,
                                                    className: tE.AS,
                                                    children:
                                                        0 === r
                                                            ? q.intl.string(q.t.ulKXHp)
                                                            : q.intl.formatToPlainString(q.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, l.jsx)("div", { className: tg.Qs, children: (0, l.jsx)(tj, { section: I }) }),
                    ],
                }),
                A &&
                    (0, l.jsx)(tS, {
                        pageWidth: t,
                        onSidebarResize: function (e, t) {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
