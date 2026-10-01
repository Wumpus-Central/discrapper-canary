(n.r(t), n.d(t, { default: () => tI }));
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
    m = n(857250),
    A = n(97483),
    E = n(834730),
    g = n(123292),
    x = n(475825),
    S = n(192308),
    f = n(43990),
    j = n(849516),
    p = n(761508),
    C = n(944791),
    I = n(456412),
    v = n(964486),
    b = n(260762),
    _ = n(812771),
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
function z() {
    let e = (0, U.Dn)(),
        t = (0, Q.yv)(P.p.MESSAGE_REQUEST_RESTRICTIONS);
    return !e && t;
}
var w = n(336590),
    W = n(92650),
    F = n(959698),
    H = n(977347),
    L = n(378570),
    O = n(138298),
    V = n(761640),
    D = n(47167),
    q = n(688438),
    K = n(375708),
    B = n(172039),
    Z = n(612960);
function X(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, D.Ay)(t),
        a = (0, w.k)(),
        r = (0, w.r)(),
        c = (0, o.bG)([k.A], () => k.A.isMessageRequest(t.id)),
        d = (0, o.bG)([y.A], () => y.A.isSpam(t.id)),
        u = z() && c && !d,
        g = (0, H.D)(t.id, t.getRecipientId()),
        x = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), c && a && (0, L.iN)(t.id), d && r && (0, L.iN)(t.id));
        }, [t.id, d, r, c, a]),
        S = s.useCallback(() => {
            (0, h.P)((0, m.o)(K.intl.string(K.t.pIQ3h4), A.Ck.FAILURE));
        }, []),
        { markAsNotSpam: f } = (0, W.t)({ onAcceptSuccess: x, onError: S });
    if (null == t || !t.isDM()) return null;
    let j = [
        (0, l.jsx)(
            T.Ay.Icon,
            { icon: R.P, tooltip: K.intl.string(K.t.cpT0Cq), onClick: () => O.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(T.Ay, {
                toolbar: j,
                "aria-label": K.intl.string(K.t.BIYAqa),
                children: (0, G.zF)({ channel: t, channelName: i, inSidebar: !0 }),
            }),
            d &&
                (0, l.jsxs)("div", {
                    className: Z.F,
                    children: [
                        (0, l.jsx)(E.E, { variant: "text-sm/normal", children: K.intl.string(K.t.XVOKgj) }),
                        (0, l.jsx)("div", {
                            className: Z.$,
                            children: (0, l.jsx)(N.$, {
                                size: "sm",
                                onClick: () => f(t, g),
                                text: K.intl.string(K.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: B.T,
                children: (0, l.jsx)(F.A.Provider, {
                    value: u,
                    children: (0, l.jsx)(q.A, { channel: t, guild: null, chatInputType: M.oU.SIDEBAR }, t.id),
                }),
            }),
        ],
    });
}
var J = n(485947),
    Y = n(726249),
    $ = n(367727),
    ee = n(379848),
    et = n(742589),
    en = n(807393),
    el = n(940382),
    es = n(210714),
    ei = n(363195),
    ea = n(780964),
    er = n(766075),
    ec = n(734057),
    eo = n(186111),
    ed = n(174459),
    eu = n(232835),
    eh = n(287809),
    em = n(321404),
    eA = n(572009);
function eE() {
    return (0, o.bG)([eh.default], () => (0, eA.I9)(eh.default.getCurrentUser()));
}
var eg = n(166643),
    ex = n(957283),
    eS = n(411976),
    ef = n(935208);
function ej(e) {
    return e.sort((e, t) => ef.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var ep = n(790499),
    eC = n(396478),
    eI = n(687599),
    ev = n(477694),
    eb = n(317017),
    e_ = n(826223);
function eR(e) {
    let { section: t } = e,
        n = (0, o.bG)([ei.A], () => ei.A.theme);
    return (0, l.jsxs)(eC.pp, {
        theme: n,
        className: ev.y,
        children: [
            (0, l.jsx)(eC.G8, { width: 415, height: 200, lightSrc: e_, darkSrc: eb }),
            (0, l.jsx)(eC.SG, { note: t === eI.zz.SPAM ? K.intl.string(K.t.hasFPQ) : K.intl.string(K.t.SXrqTf) }),
        ],
    });
}
var eN = n(625494),
    eM = n(615300),
    eT = n(559106),
    eG = n(442433),
    ek = n(201030);
let ey = function (e) {
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
            (0, l.jsx)(eT.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(eM.A.div, {
                    className: a()(ek.Cf, A, { [ek.vu]: h || x, [ek.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, eG.L3)(
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
                                        n.e("229787"),
                                        n.e("691994"),
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
var eP = n(692617),
    eU = n(97808),
    eQ = n(778712),
    ez = n(297413),
    ew = n(775602),
    eW = n(29160),
    eF = n(854378),
    eH = n(571694),
    eL = n(562819),
    eO = n(215689),
    eV = n(994500),
    eD = n(427262),
    eq = n(19575);
n(536637);
var eK = n(707539),
    eB = n(573163),
    eZ = n(978914),
    eX = n(228366),
    eJ = n(321191),
    eY = n(903209),
    e$ = n(346055),
    e0 = n(863439),
    e7 = n(521981),
    e3 = n(448368),
    e8 = n(302031),
    e6 = n(885386),
    e9 = n(576705),
    e1 = n(652215),
    e2 = n(838541),
    e4 = n(282573),
    e5 = n(165648);
let te = s.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: i, message: r } = (0, eZ.I)(t),
        { isBlocked: c, isIgnored: d } = (0, o.cf)(
            [eV.A],
            () => ({
                isBlocked: null != r && eV.A.isBlockedForMessage(r),
                isIgnored: null != r && eV.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, o.bG)([e9.A], () => e9.A.can(e1.xBc.MANAGE_MESSAGES, t)),
        h = e6.gs.useSetting(),
        { content: m } = s.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, e7.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        A = null;
    if (i)
        A = (0, l.jsx)(E.E, {
            className: e4.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: K.intl.string(K.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            A = (0, l.jsx)(E.E, {
                className: e4.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: K.intl.string(K.t["WPe+xL"]),
            });
        else if (null != r && d)
            A = (0, l.jsx)(E.E, {
                className: e4.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: K.intl.string(K.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, e3.o)(r, m, c, d, a()(e4.BK, e5.tZ), {
                leadingIconClass: e4.AF,
                trailingIconClass: e4.AF,
                iconSize: e2.eJ,
            });
            A =
                null != t
                    ? (0, l.jsx)(E.E, { variant: "text-sm/normal", color: "text-muted", className: e4.BK, children: t })
                    : (0, l.jsx)(E.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e4.G4,
                          children: e,
                      });
        } else
            A = (0, l.jsx)(E.E, {
                className: e4.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: K.intl.string(K.t["0KfDxM"]),
            });
    else A = null;
    return (0, l.jsx)(e8.Bs.Provider, {
        value: (0, e0.A)(h, u),
        children: (0, l.jsx)(e$.M, { className: e4.JY, children: A }),
    });
});
var tt = n(599036);
function tn(e) {
    let t,
        n,
        { userId: i } = e,
        a =
            ((t = (0, o.bG)([eh.default], () => eh.default.getUser(i))),
            (n = (0, o.yK)([eJ.A], () => eJ.A.getMutualGuilds(i)?.map((e) => e.guild) ?? [])),
            s.useEffect(() => {
                0 === n.length &&
                    null != t &&
                    null == eJ.A.getMutualGuilds(i) &&
                    eX.h.wait(() => (0, eY.A)(i, void 0, { withMutualGuilds: !0 }));
            }, [n, t, i]),
            n);
    return null == a || 0 === a.length
        ? (0, l.jsx)(E.E, {
              className: tt.tE,
              variant: "text-sm/normal",
              color: "text-muted",
              children: K.intl.string(K.t.jpY0X5),
          })
        : (0, l.jsxs)("div", {
              className: tt.I9,
              children: [
                  (0, l.jsx)(eP.A, { guilds: a, maxGuilds: 3, size: eF.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                  (0, l.jsx)(E.E, {
                      className: tt.tE,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: K.intl.format(K.t.eE3oep, { count: a.length }),
                  }),
              ],
          });
}
let tl = eq.Ay.getEnableHardwareAcceleration() ? eU.Js : eU.eu;
function ts(e) {
    let t,
        n,
        { channel: s, otherUser: i, active: a, isRestricted: r = !1 } = e,
        c = (0, o.bG)([ew.Ay], () => ew.Ay.useReducedMotion),
        d = (0, o.bG)([eV.A], () => (null == i ? null : eV.A.getNickname(i.id))),
        u = !c && a,
        h =
            ((t = (0, eZ.I)(s)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: l } = e;
                return l && null != n
                    ? ef.default.extractTimestamp(n.id)
                    : null != t
                      ? ef.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eB.Ay], () => eB.Ay.lastMessageId(s.id)), ...t }))
                ? ""
                : (0, eK.aK)(n)),
        { avatarDecorationSrc: m } = (0, eO.A)({
            user: i,
            size: (0, eL.Te)(eQ._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tl, {
                className: tt.my,
                src: (0, eH.Y)(s, 40, u),
                avatarDecoration: m,
                size: eQ._3.SIZE_40,
                "aria-label": i?.username ?? K.intl.string(K.t["30mdIx"]),
            }),
            (0, l.jsxs)("div", {
                className: tt.yt,
                children: [
                    (0, l.jsxs)("div", {
                        className: tt.rU,
                        children: [
                            (0, l.jsx)(ez.A, {
                                nick: d,
                                user: i,
                                showAccountIdentifier: !0,
                                className: tt.I8,
                                usernameClass: tt.Xh,
                                discriminatorClass: null != eD.Ay.getGlobalName(i) ? tt.vl : tt.D2,
                            }),
                            (0, l.jsx)(E.E, {
                                className: tt.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                        ],
                    }),
                    (0, l.jsx)(eW.A, {
                        hoverText: r
                            ? (0, l.jsx)(E.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: K.intl.string(K.t.fnduP5),
                              })
                            : (0, l.jsx)(te, { channel: s }),
                        forceHover: a,
                        children: (0, l.jsx)(tn, { userId: i.id }),
                    }),
                ],
            }),
        ],
    });
}
var ti = n(885207);
function ta(e) {
    let { active: t, user: n, channel: i, isRestricted: a = !1 } = e,
        r = (0, w.k)(),
        c = s.useCallback(() => {
            (0, h.P)((0, m.o)(K.intl.string(K.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        o = s.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        d = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), r && (0, L.iN)(i.id));
        }, [i.id, r]),
        {
            acceptMessageRequest: u,
            rejectMessageRequest: E,
            isAcceptLoading: g,
            isRejectLoading: x,
            isUserProfileLoading: S,
            isOptimisticAccepted: f,
            isOptimisticRejected: j,
        } = (0, W.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: c }),
        p = g || x || S || f || j;
    return (0, l.jsxs)("div", {
        className: ti.kL,
        children: [
            (0, l.jsx)(ts, { channel: i, otherUser: n, active: t, isRestricted: a }),
            (0, l.jsxs)("div", {
                className: ti.o1,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ti.x6,
                        children: (0, l.jsx)(N.$, {
                            variant: "secondary",
                            size: "sm",
                            text: K.intl.string(a ? K.t.BVN4pL : K.t.B2nygW),
                            onClick: function (e) {
                                (e.stopPropagation(), E(i.id));
                            },
                            disabled: p,
                            loading: x || j,
                        }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ti.x6,
                        children: (0, l.jsx)(N.$, {
                            variant: "primary",
                            size: "sm",
                            text: K.intl.string(K.t.Kz8Pwr),
                            onClick: function (e) {
                                (e.stopPropagation(), u(i.id));
                            },
                            disabled: p,
                            loading: g || S || f,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tr(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a, isRestricted: r = !1 } = e,
        { channelId: c } = (0, ex.N)();
    return (0, l.jsx)(ey, {
        index: t,
        className: n,
        isFocused: c === s.id,
        channel: s,
        user: i,
        onClick: function (e) {
            (e.stopPropagation(),
                O.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: V.fe, hasSingleMessageRequest: a }),
                ed.default.track(e1.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: s.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    eN._.dispatch(e1.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0));
        },
        children: (e) => (0, l.jsx)(ta, { active: e, user: i, channel: s, isRestricted: r }),
    });
}
var tc = n(308528),
    to = n(928658);
function td(e) {
    let { channel: t, onReportClick: n, onReportSubmit: s, onMouseEnter: i, onMouseLeave: a } = e,
        { error: r, loaded: c, message: o } = (0, eZ.I)(t);
    if (null == o && (c || r)) return null;
    function d() {
        (s?.(), tc.A.closePrivateChannel(t.id));
    }
    return (0, l.jsx)(N.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: function (e) {
            (e.stopPropagation(), n?.(), null != o && (0, to.b8)(o, d));
        },
        onMouseEnter: i,
        onMouseLeave: a,
        text: K.intl.string(K.t.HHZmDn),
    });
}
var tu = n(489768);
function th(e) {
    let { active: t, user: n, channel: i } = e,
        a = (0, w.r)(),
        r = s.useCallback(() => {
            ((0, h.P)((0, m.o)(K.intl.string(K.t.pIQ3h4), A.Ck.FAILURE)),
                en.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW }));
        }, []),
        o = s.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        d = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), a && (0, L.iN)(i.id));
        }, [i.id, a]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: E,
            isUserProfileLoading: g,
            isOptimisticAccepted: x,
        } = (0, W.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: r }),
        S = E || g,
        f = S || x;
    return (0, l.jsxs)("div", {
        className: tu.kL,
        children: [
            (0, l.jsx)(ts, { otherUser: n, channel: i, active: t }),
            (0, l.jsxs)("div", {
                className: tu.o1,
                children: [
                    (0, l.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        text: K.intl.string(K.t.vicfl6),
                        onClick: function (e) {
                            (u(i.id), e.stopPropagation());
                        },
                        disabled: f,
                        loading: S,
                    }),
                    (0, l.jsx)(td, { channel: i }),
                ],
            }),
        ],
    });
}
function tm(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a } = e;
    return (0, l.jsx)(ey, {
        index: t,
        className: n,
        isFocused: !1,
        channel: s,
        user: i,
        onClick: function (e) {
            (e.stopPropagation(),
                O.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: V.fe, hasSingleMessageRequest: a }),
                ed.default.track(e1.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: s.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    eN._.dispatch(e1.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0));
        },
        children: (e) => (0, l.jsx)(th, { active: e, user: i, channel: s }),
    });
}
var tA = n(324098);
function tE() {
    let e,
        t,
        n,
        i = s.useRef(null),
        d =
            ((e = (0, o.bG)([ec.A], () => ec.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)(
                [ec.A, y.A],
                () => {
                    let e = ec.A.getMutablePrivateChannels();
                    return ej(
                        Array.from(y.A.getSpamChannelIds())
                            .map((t) => e[t])
                            .filter((e) => null != e),
                    );
                },
                [e],
            )),
            (n = (0, o.cf)(
                [eh.default],
                () => {
                    let e = {};
                    return (
                        t.forEach((t) => {
                            let n = eh.default.getUser(t.recipients[0]);
                            null != n && (e[t.id] = n);
                        }),
                        e
                    );
                },
                [t],
            )),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        u = (0, ep.I)(),
        S = (0, w.r)(),
        f = eE(),
        j = (0, b.A)("message-requests-spam-list"),
        { channelId: p } = (0, ex.N)(),
        C = s.useCallback(() => {
            (0, h.P)((0, m.o)(K.intl.string(K.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: I } = (0, W.t)({ onError: C }),
        _ = s.useCallback(() => {
            I(d.map((e) => e.channel.id));
        }, [d, I]);
    (0, v.Ay)(() => {
        (ed.default.track(e1.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            en.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW }));
    });
    let R = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    s = d[t + 1]?.channel?.id,
                    i = n.channel.id;
                return (0, l.jsx)(
                    tm,
                    {
                        index: t,
                        className: a()({ [tA.wH]: null != p && p === i, [tA.wZ]: null != p && p === s }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: S,
                    },
                    i,
                );
            },
            [d, S, p],
        ),
        N = s.useCallback(
            () =>
                (0, l.jsxs)(
                    J.A,
                    {
                        className: tA.Gf,
                        children: [
                            K.intl.format(K.t.C79Edh, { count: u }),
                            f && u > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(E.E, {
                                              className: tA.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(g.Q, {
                                              textVariant: "text-sm/normal",
                                              text: K.intl.string(K.t.p6t7RC),
                                              onClick: _,
                                              "aria-label": K.intl.string(K.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [u, _, f],
        );
    return 0 === d.length
        ? (0, l.jsx)(eR, { section: eI.zz.SPAM })
        : (0, l.jsx)(r.hD, {
              navigator: j,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          x.OZ,
                          {
                              className: tA.p_,
                              innerRole: n,
                              innerAriaLabel: K.intl.string(K.t.e7GWjQ),
                              ref: (e) => {
                                  ((i.current = e), (t.current = e?.getScrollerNode() ?? null));
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
                              ...s,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
var tg = n(49999),
    tx = n(771338),
    tS = n(999900);
function tf() {
    let e,
        t,
        n,
        i = s.useRef(null),
        d = (0, eS.W)(),
        u =
            ((e = (0, o.bG)([ec.A], () => ec.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)(
                [ec.A, k.A],
                () => {
                    let e = ec.A.getMutablePrivateChannels();
                    return ej(
                        Array.from(k.A.getMessageRequestChannelIds())
                            .map((t) => e[t])
                            .filter((e) => null != e),
                    );
                },
                [e],
            )),
            (n = (0, o.cf)(
                [eh.default],
                () => {
                    let e = {};
                    return (
                        t.forEach((t) => {
                            let n = eh.default.getUser(t.recipients[0]);
                            null != n && (e[t.id] = n);
                        }),
                        e
                    );
                },
                [t],
            )),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        S = (0, w.k)(),
        f = eE(),
        j = z(),
        p = s.useCallback(() => {
            (0, h.P)((0, m.o)(K.intl.string(K.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: C } = (0, W.t)({ onError: p }),
        I = (0, b.A)("message-requests-list"),
        { channelId: v } = (0, ex.N)(),
        _ = s.useCallback(() => {
            C(u.map((e) => e.channel.id));
        }, [u, C]),
        R = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    s = u[t + 1]?.channel?.id,
                    i = n.channel.id,
                    r = a()({ [tx.wH]: null != v && v === i, [tx.wZ]: null != v && v === s });
                return (0, l.jsx)(
                    tr,
                    {
                        index: t,
                        className: r,
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: S,
                        isRestricted: j,
                    },
                    i,
                );
            },
            [S, j, u, v],
        ),
        N = s.useCallback(
            () =>
                (0, l.jsxs)(
                    J.A,
                    {
                        className: tx.Gf,
                        children: [
                            d > 0 ? K.intl.formatToPlainString(K.t.rA4iWY, { count: d }) : K.intl.string(K.t.flPU6g),
                            f && d > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(E.E, {
                                              className: tx.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(g.Q, {
                                              onClick: _,
                                              textVariant: "text-sm/normal",
                                              text: K.intl.string(K.t.p6t7RC),
                                              "aria-label": K.intl.string(K.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [d, _, f],
        );
    return (u.length !== d && en.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, l.jsx)(eR, { section: eI.zz.REQUESTS })
        : (0, l.jsx)(r.hD, {
              navigator: I,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          x.OZ,
                          {
                              className: tx.p_,
                              innerRole: n,
                              innerAriaLabel: K.intl.string(K.t.e7GWjQ),
                              ref: (e) => {
                                  ((i.current = e), (t.current = e?.getScrollerNode() ?? null));
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
                              ...s,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function tj(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        s = (0, o.bG)([V.Ay], () => V.Ay.getSidebarState(V.fe)),
        i = (0, o.bG)([ec.A], () => ec.A.getChannel(s?.channelId));
    if (null == s || s.type !== el.PE.VIEW_MESSAGE_REQUEST || null == i || !i.isPrivate()) return null;
    let a = t - e1.ItT;
    return (0, l.jsx)(_.A, {
        sidebarType: _.X.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, l.jsx)(X, { channel: i, baseChannelId: V.fe }),
    });
}
function tp(e) {
    let t = (0, eg.A)();
    return (s.useEffect(() => {
        (0, $.Vh)(d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || eo.A.hasLayers() || (0, S.hasAnyModalOpen)())
        ? e.children
        : (0, l.jsx)(ee.Ay, {
              contentTypes: [d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: s, markAsDismissed: i } = n,
                      a = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => i(tg.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return s === d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, l.jsx)(u.A, {
                                          ...a,
                                          title: K.intl.string(K.t.hRT8tc),
                                          body: K.intl.string(K.t.apPgJG),
                                          actions: [
                                              { text: K.intl.string(K.t.LNoAQW), onClick: () => i(tg.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, l.jsx)(u.A, {
                                          ...a,
                                          title: K.intl.string(K.t.hRT8tc),
                                          body: K.intl.string(K.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: K.intl.string(K.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      (e.stopPropagation(),
                                                          (0, er.openUserSettings)(
                                                              ea.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          i(tg.i.TAKE_ACTION));
                                                  },
                                              },
                                              {
                                                  text: K.intl.string(K.t.LNoAQW),
                                                  onClick: () => i(tg.i.USER_DISMISS),
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
function tC(e) {
    let { section: t } = e;
    return t === eI.zz.SPAM ? (0, l.jsx)(tE, {}) : (0, l.jsx)(tf, {});
}
let tI = (0, I.A)(function (e) {
    let { width: t } = e,
        n = (0, eS.W)();
    (0, v.Ay)(() => {
        (C.I(e1.BVt.MESSAGE_REQUESTS),
            (0, es.d0)("message-requests"),
            ed.default.track(e1.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            en.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW }));
    });
    let i = (0, o.bG)([ei.A], () => ei.A.theme),
        r = (0, ep.I)(),
        [d, u] = s.useState(!1),
        h = (0, o.bG)([V.Ay], () => {
            let e = V.Ay.getSidebarState(V.fe);
            return null != e && e.type === el.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        A = null != h,
        E = (0, em.c)(m),
        g = (0, o.bG)([eu.A, eh.default], () => {
            if (null == m) return !1;
            let e = eh.default.getCurrentUser();
            return null != eu.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        x = s.useRef(null);
    s.useEffect(() => {
        null != m && !E && g && A && ((0, L.iN)(m), O.A.closeChannelSidebar(V.fe));
    }, [m, g, A, E]);
    let [S, I] = s.useState(eI.zz.REQUESTS);
    function b(e) {
        I(e);
    }
    return (
        (0, Y.HU)({ location: K.intl.string(K.t.e7GWjQ) }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(tS.TE, tx.kL, { [tS.js]: A, [tS.jl]: A && d }),
                    children: [
                        (0, l.jsx)(f.N, {
                            theme: i,
                            children: (e) =>
                                (0, l.jsxs)(et.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, l.jsx)(et.A.Icon, { icon: j.u, "aria-hidden": !0 }),
                                        (0, l.jsx)(tp, {
                                            targetElementRef: x,
                                            children: (0, l.jsx)(et.A.Title, {
                                                ref: x,
                                                children: K.intl.string(K.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, l.jsx)(et.A.Divider, {}),
                                        (0, l.jsxs)(p.V, {
                                            "aria-label": K.intl.string(K.t.e7GWjQ),
                                            selectedItem: S,
                                            type: "top-pill",
                                            onItemSelect: b,
                                            children: [
                                                (0, l.jsx)(p.V.Item, {
                                                    id: eI.zz.REQUESTS,
                                                    className: tx.AS,
                                                    children: K.intl.string(K.t["7RFcXZ"]),
                                                }),
                                                (0, l.jsx)(p.V.Item, {
                                                    id: eI.zz.SPAM,
                                                    className: tx.AS,
                                                    children:
                                                        0 === r
                                                            ? K.intl.string(K.t.ulKXHp)
                                                            : K.intl.formatToPlainString(K.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, l.jsx)("div", { className: tS.Qs, children: (0, l.jsx)(tC, { section: S }) }),
                    ],
                }),
                A &&
                    (0, l.jsx)(tj, {
                        pageWidth: t,
                        onSidebarResize: function (e, t) {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
