"use strict";
n.d(t, { z9: () => eF, w_: () => eP, Ay: () => eB, th: () => eV });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(936504),
    c = n(562708),
    d = n(837381),
    _ = n(172218),
    h = n(612324),
    f = n(535185),
    p = n(148839),
    E = n(607399),
    m = n(17928),
    g = n(780645),
    A = n(990078),
    I = n(97808),
    T = n(939249),
    S = n(821609),
    y = n(952270),
    N = n(428678),
    v = n(661531),
    C = n(549254),
    R = n(574553);
function O(e) {
    let { as: t, muted: n = !1, selected: r = !1, className: s, ...o } = e,
        l = t ?? T.D;
    return (0, i.jsx)(l, { ...o, className: a()(R.bG, s, { [R.SU]: n, [R.wH]: r }) });
}
var b = n(778712),
    D = n(192308),
    L = n(789645),
    w = n(308528),
    M = n(442433),
    P = n(765671),
    x = n(960076),
    k = n(397244),
    U = n(714114),
    G = n(394871),
    F = n(709066),
    V = n(262295),
    B = n(620982),
    H = n(343328);
let j = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-channel-wave-button",
    defaultConfig: { enabled: !1, showClose: !0 },
    variations: { 1: { enabled: !0, showClose: !1 }, 2: { enabled: !0, showClose: !0 } },
});
var Y = n(963027),
    W = n(571694),
    K = n(47167),
    $ = n(989349),
    z = n.n($),
    q = n(691540),
    X = n(857250),
    Z = n(97483),
    Q = n(720149),
    J = n(976860),
    ee = n(74114),
    et = n(232835),
    en = n(994500),
    ei = n(58703),
    er = n(935208),
    es = n(330001),
    ea = n(652215),
    eo = n(381941),
    el = n(375708),
    eu = n(449582),
    ec = n(351952),
    ed = n(88686),
    e_ = n(174755),
    eh = n(187322),
    ef = n(586893);
let ep = r.forwardRef(function (e, t) {
    let { className: n, focusProps: r, ...s } = e;
    return (0, i.jsx)(eh.vN, { ...r, children: (0, i.jsx)("li", { className: a()(n, ef.k), ...s, ref: t }) });
});
var eE = n(824994),
    em = n(922301),
    eg = n(368919),
    eA = n(414808),
    eI = n(302005),
    eT = n(954376),
    eS = n(534400),
    ey = n(854627),
    eN = n(616356),
    ev = n(290863),
    eC = n(222823),
    eR = n(741961),
    eO = n(543465),
    eb = n(287809),
    eD = n(19575),
    eL = n(330076);
let ew = eD.Ay.getEnableHardwareAcceleration() ? I.Js : I.eu,
    eM = { offset: { top: 2, bottom: 2, right: 4 } },
    eP = (e) => {
        let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: o, ...l } = e,
            u = (0, ec.K)(t);
        return (0, i.jsx)(T.D, {
            className: a()(eL.b, { [eL.DQ]: null != t, [eL.by]: r, [eL.wY]: s }),
            style: u,
            ...l,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, i.jsx)("div", {
                ref: o,
                className: a()({ [eL.PJ]: null != t }),
                children: (0, i.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(eL.ut, { [eL.Uq]: null != t }),
                }),
            }),
        });
    },
    ex = (e) => {
        let { onClick: t, channelName: n, showNameplate: r } = e,
            { enabled: s } = j.useConfig({ location: "Wave CTA" });
        return s
            ? (0, i.jsx)("div", {
                  className: eL.KQ,
                  children: (0, i.jsx)(A.m, {
                      text: el.intl.formatToPlainString(el.t.m0zYbV, { username: n }),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: r ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: el.intl.string(el.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    ek = () => (0, i.jsx)(y.G, { size: "xs", color: "currentColor", className: eL.wB }),
    eU = () => (0, i.jsx)(N.K, { size: "xs", color: "currentColor", className: eL.wB });
function eG(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: s,
            hoverGradientStart: a,
            hoverGradientMiddle: o,
            hoverGradientEnd: l,
        } = e,
        u = r.useMemo(
            () =>
                null != a && null != o && null != l
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: o ?? v.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? o,
                          Color_OuterRing: l,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: v.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: v.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: v.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: v.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: v.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: v.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, o, l],
        );
    return (0, i.jsx)(C.U, { eventTargetRef: t, className: eL.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
let eF = (e) => {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: o,
            interactiveClassName: l,
            text: c,
            children: d,
            locationState: _,
            onClick: h,
            className: f,
            role: p,
            "aria-posinset": m,
            "aria-setsize": g,
            listItemRef: A,
            showHoverGradient: I = !1,
            nitroHoverGradient: T = !1,
            hoverGradientStart: S,
            hoverGradientMiddle: y,
            hoverGradientEnd: N,
            ...v
        } = e,
        { width: C, ref: R } = (0, P.Ay)(),
        b = r.useRef(null),
        D = A ?? b;
    return (0, i.jsx)(ep, {
        className: a()(eL.Ix, { [eL.Ij]: E.Fr }, f),
        onClick: h,
        role: p,
        focusProps: { within: !0, ...eM },
        "aria-posinset": m,
        "aria-setsize": g,
        ref: D,
        children: (0, i.jsxs)(O, {
            as: "div",
            selected: n,
            className: a()(l, eL.bG, eL.$J, { [eL.Q2]: n }),
            children: [
                I &&
                    (0, i.jsx)(eG, {
                        eventTargetRef: D,
                        isNitro: T,
                        contentWidth: C,
                        hoverGradientStart: S,
                        hoverGradientMiddle: y,
                        hoverGradientEnd: N,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: _ },
                    className: eL.nf,
                    ...v,
                    children: [
                        (0, i.jsx)(V.A, {
                            ref: I ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(eL.e_, o),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eL.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
};
function eV(e) {
    let {
            channel: t,
            selected: s = !1,
            user: o,
            activities: E,
            applicationStream: A,
            voiceChannel: I,
            isTyping: T,
            status: S,
            isMobile: y,
            isVR: N,
            nameplate: v,
            ref: C,
            "aria-posinset": R,
            "aria-setsize": P,
        } = e,
        [U, $] = r.useState(!1),
        [eu, ec] = r.useState(!1),
        [eh, ef] = r.useState(!1),
        eN = r.useRef(null),
        [ev, eR] = r.useState(!1),
        eb = (0, _.K)(
            r.useCallback((e) => {
                eR(e);
            }, []),
        ),
        eD = r.useRef(null),
        eG = C ?? eD,
        eF = (0, h.A)(eG, eb),
        { showMenuItemPopover: eV, markMenuItemPopoverAsDismissed: eB } = (0, eI.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: ev,
            channelType: t.type,
        }),
        {
            avatarSrc: eH,
            avatarDecorationSrc: ej,
            eventHandlers: eY,
        } = (0, ey.A)({ userId: o?.id, size: b._3.SIZE_32, animateOnHover: !(s || U || eu || eh) }),
        [eW, eK] = r.useState({ maskImage: "none" }),
        e$ = r.useRef(null),
        ez = t.isMultiUserDM(),
        eq = t.isSystemDM(),
        eX = !ez && !eq && t.type === ea.rbe.DM,
        eZ = eX && o?.primaryGuild != null,
        eQ = (0, m.bG)([eO.Ay], () => eO.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eJ, blocked: e0 } = (0, m.cf)([en.A], () => ({
            ignored: en.A.isIgnored(t.getRecipientId()),
            blocked: en.A.isBlocked(t.getRecipientId()),
        })),
        e1 = eX && eJ,
        e2 = eX && e0,
        e3 = (eQ || e1 || e2) && !(s || U),
        e6 = (0, m.bG)([eC.Ay], () => eC.Ay.getMentionCount(t.id) > 0),
        e4 = (0, K.Ay)(t),
        e5 = r.useRef(null),
        e7 = null != v && (s || U || eh),
        e8 = () => {
            $(!0);
        },
        e9 = () => {
            $(!1);
        },
        te = () => {
            ec(!0);
        },
        tt = () => {
            ec(!1);
        },
        tn = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), w.A.closePrivateChannel(t.id, s, n);
        },
        ti = () => {
            w.A.preload(ea.ME, t.id);
        },
        tr = (e) => {
            e.stopPropagation();
        },
        ts = (e) => {
            e.target === e.currentTarget && eN.current?.click();
        },
        ta = (e) => {
            let r =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ef(!0),
                t.isMultiUserDM()
                    ? (0, M.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("26132"),
                                  n.e("46652"),
                                  n.e("93190"),
                                  n.e("91763"),
                                  n.e("38730"),
                                  n.e("34971"),
                                  n.e("42339"),
                                  n.e("12520"),
                                  n.e("46149"),
                                  n.e("53416"),
                                  n.e("60200"),
                              ]).then(n.bind(n, 4027));
                              return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: s });
                          },
                          { impressionName: r, noBlurEvent: !0, onClose: () => ef(!1) },
                      )
                    : (0, M.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("16012"),
                                  n.e("39713"),
                                  n.e("30402"),
                                  n.e("67942"),
                                  n.e("94881"),
                                  n.e("26132"),
                                  n.e("46652"),
                                  n.e("93190"),
                                  n.e("34552"),
                                  n.e("93103"),
                                  n.e("8757"),
                                  n.e("91763"),
                                  n.e("89673"),
                                  n.e("85968"),
                                  n.e("68403"),
                                  n.e("29787"),
                                  n.e("71210"),
                                  n.e("82073"),
                                  n.e("97558"),
                                  n.e("88342"),
                                  n.e("91994"),
                                  n.e("38730"),
                                  n.e("42451"),
                                  n.e("76665"),
                                  n.e("98965"),
                                  n.e("35313"),
                                  n.e("76273"),
                                  n.e("36564"),
                                  n.e("34971"),
                                  n.e("45996"),
                                  n.e("52229"),
                                  n.e("792"),
                                  n.e("92822"),
                                  n.e("23427"),
                                  n.e("29422"),
                                  n.e("9291"),
                                  n.e("38056"),
                                  n.e("7059"),
                                  n.e("8829"),
                                  n.e("42339"),
                                  n.e("98199"),
                                  n.e("41175"),
                                  n.e("60816"),
                                  n.e("39778"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, i.jsx)(e, { ...n, user: o, channel: t, channelSelected: s });
                          },
                          { impressionName: r, onClose: () => ef(!1) },
                      );
        },
        to = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = el.intl.formatToPlainString(el.t.hJ5Ap4, { name: e4 }),
                s = el.intl.format(el.t.SSIVOu, { name: e4 });
            t.isManaged() &&
                ((r = el.intl.formatToPlainString(el.t.hVGjEW, { name: e4 })),
                (s = el.intl.format(el.t.IK1Qvs, { name: e4 }))),
                (0, D.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                    return (t) => (0, i.jsx)(e, { title: r, body: s, onSubmit: tn, ...t });
                });
        },
        tl = (0, i.jsx)(eg.A, {
            userName: e4,
            displayNameStyles: o?.displayNameStyles,
            effectDisplayType: U || s || eh ? em.G.ANIMATED : em.G.PLAIN,
            loop: U,
            boldFontOpacity: 0.9,
        }),
        tu = eZ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tl,
                      (0, i.jsx)(eS.Ay, {
                          primaryGuild: o?.primaryGuild,
                          userId: o?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eL.fc, { [eL.Y_]: e3 }),
                      }),
                  ],
              })
            : tl,
        tc = r.useRef(null),
        td = (0, eE.W)({ location: "PrivateChannel" }) && o?.displayNameStyles != null,
        { isIncomingCall: t_, isOngoingCall: th } = (0, B.A)(t.id),
        tf = [
            (0, Y.Ay)({ channel: t, unread: e6, isIncomingCall: t_, isOngoingCall: th }),
            (0, Y.r2)({ channel: t, muted: eQ, userStatus: S }),
        ]
            .filter(Boolean)
            .join(", "),
        tp = (0, m.bG)([eC.Ay], () => eC.Ay.lastMessageId(t.id)),
        { waveShouldShow: tE, wavePressed: tm } = (function (e, t) {
            let [n, i] = r.useState(!1),
                s = r.useCallback(async () => {
                    if (!n) {
                        i(!0),
                            (0, es.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, J.pX)(ea.BVt.CHANNEL(ea.ME, e.id));
                        try {
                            await Q.A.sendStickers(e.id, ["749054660769218631"], "", { location: eo.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, q.P0)((0, X.o)(el.intl.string(el.t.Whhv4w), Z.Ck.FAILURE));
                        }
                        i(!1);
                    }
                }, [e.id, n]),
                a = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
                o = a ? e.getRecipientId() : null,
                l = (0, m.bG)([en.A], () => null != o && en.A.isFriend(o)),
                u = (0, m.bG)([en.A], () => null != o && en.A.isIgnored(o)),
                c = (0, m.bG)([et.A], () => {
                    let t = et.A.getMessages(e.id);
                    return 1 === t.length && t.first()?.type === ea.lAJ.FRIEND_REQUEST_ACCEPTED;
                }),
                d = er.default.extractTimestamp(e.id),
                _ = (0, ei.v0)(z()(), z()(d), 18144e5),
                h = (0, ee.l)(e.id);
            return { waveShouldShow: a && l && !u && (null == t || c) && _ && null == h, wavePressed: s };
        })(t, tp),
        { showClose: tg } = j.useConfig({ location: "PrivateChannel" }),
        tA = (0, p.A)(() => {
            let e = e$.current?.getBoundingClientRect() ?? null,
                t = tc.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eK({ maskImage: "none" });
            let n = t.width - 16;
            eK({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        r.useLayoutEffect(tA, [U, s, tA]),
        (0, f.g)(eG, tA),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...r } = e;
                return (0, i.jsxs)(ep, {
                    className: a()(eL.Ix, eL.dm),
                    role: n,
                    focusProps: { ...eM, focusTarget: eN, ringTarget: eG },
                    ref: eF,
                    onMouseEnter: e8,
                    onMouseLeave: e9,
                    onMouseDown: ti,
                    onFocus: te,
                    onBlur: tt,
                    onContextMenu: ta,
                    "aria-setsize": P,
                    "aria-posinset": R,
                    children: [
                        e6 ? (0, i.jsx)("div", { className: a()(eL.dM, { [eL.SU]: e3 }) }) : null,
                        (0, i.jsxs)(O, {
                            className: a()(eL.bG, { [eL.Q2]: s || eh }),
                            as: "div",
                            onClick: ts,
                            muted: e3,
                            selected: s,
                            children: [
                                (0, i.jsx)(e_.A, {
                                    nameplate: e7 ? v : void 0,
                                    selected: s,
                                    hovered: U,
                                    content: tc,
                                    placement: ed.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eL.lU, ref: e$, children: tu }),
                                (0, i.jsx)(u.N_, {
                                    style: eW,
                                    innerRef: eN,
                                    to: ea.BVt.CHANNEL(ea.ME, t.id),
                                    className: eL.nf,
                                    "aria-label": tf,
                                    ...r,
                                    children: (0, i.jsx)(V.A, {
                                        ref: tc,
                                        avatar: (() => {
                                            let e = b._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(eT.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: T,
                                                        status: S,
                                                    });
                                                else
                                                    return (0, i.jsx)(ew, {
                                                        ...eY,
                                                        src: (0, W.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: T ? ea.clD.ONLINE : S,
                                                        isTyping: T,
                                                    });
                                            l()(
                                                null != o,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                o.isSystemUser() || (n = (0, x.A)(E) ? ea.clD.STREAMING : S),
                                                (0, i.jsx)(ew, {
                                                    ...eY,
                                                    size: b._3.SIZE_32,
                                                    src: eH,
                                                    avatarDecoration: ej,
                                                    status: n,
                                                    isMobile: y,
                                                    isVR: N,
                                                    isTyping: T,
                                                    "aria-label": o.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e6 && !e3,
                                        muted: e3,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: eL.W$,
                                                  children: (0, H.A)(t.id)
                                                      ? el.intl.string(el.t.FL5T01)
                                                      : el.intl.string(el.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: eL.W$,
                                                    children: el.intl.format(el.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, k.A)({
                                                      activities: E,
                                                      status: S,
                                                      applicationStream: A,
                                                      voiceChannel: I,
                                                  })
                                                ? (0, i.jsx)(G.A, {
                                                      user: o,
                                                      activities: E,
                                                      voiceChannel: I,
                                                      applicationStream: A,
                                                      animateEmoji: U || eu || eh,
                                                      textClassName: eL.XD,
                                                      iconClassName: e3 ? eL.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(g.A, { className: a()(eL.uN, { [eL.e8]: td }), children: tu }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(F.A, {
                                                  className: eL.G$,
                                                  type: F.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: td,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(eL._q, { [eL.EY]: e7 }),
                                    children: [
                                        e1 ? (0, i.jsx)(ek, {}) : null,
                                        e2 ? (0, i.jsx)(eU, {}) : null,
                                        tE && null != e4
                                            ? (0, i.jsx)(ex, { channelName: e4, onClick: tm, showNameplate: e7 })
                                            : null,
                                        tg || !tE
                                            ? (0, i.jsx)(eP, {
                                                  icon: L.P,
                                                  "aria-label": ez
                                                      ? el.intl.string(el.t["26C4oi"])
                                                      : el.intl.string(el.t.jsvgc3),
                                                  onClick: ez ? to : tn,
                                                  onMouseDown: tr,
                                                  nameplate: v,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e5,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eV && (0, i.jsx)(eA.A, { targetElementRef: eG, markMenuItemPopoverAsDismissed: eB }),
                    ],
                });
            },
        })
    );
}
let eB = (e) => {
    let { channel: t, selected: n, ...r } = e,
        s = (0, m.bG)([eb.default], () => eb.default.getUser(t.getRecipientId())),
        a = s?.id,
        o = (0, m.cf)([ev.A, eN.A], () => {
            let e;
            if (t.isMultiUserDM()) {
                let n = ev.A.getState().statuses;
                t.recipients.some((e) => n[e] === ea.clD.ONLINE) && (e = ea.clD.ONLINE);
            } else null != a && (e = ev.A.getStatus(a));
            return {
                status: e,
                activities: null != a ? ev.A.getActivities(a) : null,
                applicationStream: null != a ? eN.A.getAnyStreamForUser(a) : null,
                isMobile: null != a && ev.A.isMobileOnline(a),
                isVR: null != a && ev.A.isVROnline(a),
            };
        }, [t, a]),
        { voiceChannel: l } = (0, U.A)({ userId: a }),
        u = (0, eu.r)({ user: s }),
        c = (0, m.bG)(
            [eb.default, eR.A],
            () =>
                t.isMultiUserDM()
                    ? er.default.keys(eR.A.getTypingUsers(t.id)).some((e) => e !== eb.default.getCurrentUser()?.id)
                    : null != s && eR.A.isTyping(t.id, t.getRecipientId()),
            [t, s],
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(eV, {
              channel: t,
              selected: n,
              isTyping: c,
              status: o.status === ea.clD.ONLINE ? ea.clD.ONLINE : void 0,
              ...r,
          })
        : (0, i.jsx)(eV, { channel: t, selected: n, user: s, voiceChannel: l, isTyping: c, nameplate: u, ...r, ...o });
};
