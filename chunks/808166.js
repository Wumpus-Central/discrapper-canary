"use strict";
n.d(t, { z9: () => eG, w_: () => eM, Ay: () => eV, th: () => eF });
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
    et = n(994500),
    en = n(58703),
    ei = n(935208),
    er = n(330001),
    es = n(652215),
    ea = n(381941),
    eo = n(375708),
    el = n(449582),
    eu = n(351952),
    ec = n(88686),
    ed = n(174755),
    e_ = n(187322),
    eh = n(586893);
let ef = r.forwardRef(function (e, t) {
    let { className: n, focusProps: r, ...s } = e;
    return (0, i.jsx)(e_.vN, { ...r, children: (0, i.jsx)("li", { className: a()(n, eh.k), ...s, ref: t }) });
});
var ep = n(824994),
    eE = n(922301),
    em = n(368919),
    eg = n(414808),
    eA = n(302005),
    eI = n(954376),
    eT = n(534400),
    eS = n(854627),
    ey = n(616356),
    eN = n(290863),
    ev = n(222823),
    eC = n(741961),
    eR = n(543465),
    eO = n(287809),
    eb = n(19575),
    eD = n(330076);
let eL = eb.Ay.getEnableHardwareAcceleration() ? I.Js : I.eu,
    ew = { offset: { top: 2, bottom: 2, right: 4 } },
    eM = (e) => {
        let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: o, ...l } = e,
            u = (0, eu.K)(t);
        return (0, i.jsx)(T.D, {
            className: a()(eD.b, { [eD.DQ]: null != t, [eD.by]: r, [eD.wY]: s }),
            style: u,
            ...l,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, i.jsx)("div", {
                ref: o,
                className: a()({ [eD.PJ]: null != t }),
                children: (0, i.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(eD.ut, { [eD.Uq]: null != t }),
                }),
            }),
        });
    },
    eP = (e) => {
        let { onClick: t, channelName: n, showNameplate: r } = e,
            { enabled: s } = j.useConfig({ location: "Wave CTA" });
        return s
            ? (0, i.jsx)("div", {
                  className: eD.KQ,
                  children: (0, i.jsx)(A.m, {
                      text: eo.intl.formatToPlainString(eo.t.m0zYbV, { username: n }),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: r ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: eo.intl.string(eo.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    ex = () => (0, i.jsx)(y.G, { size: "xs", color: "currentColor", className: eD.wB }),
    ek = () => (0, i.jsx)(N.K, { size: "xs", color: "currentColor", className: eD.wB });
function eU(e) {
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
    return (0, i.jsx)(C.U, { eventTargetRef: t, className: eD.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
let eG = (e) => {
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
    return (0, i.jsx)(ef, {
        className: a()(eD.Ix, { [eD.Ij]: E.Fr }, f),
        onClick: h,
        role: p,
        focusProps: { within: !0, ...ew },
        "aria-posinset": m,
        "aria-setsize": g,
        ref: D,
        children: (0, i.jsxs)(O, {
            as: "div",
            selected: n,
            className: a()(l, eD.bG, eD.$J, { [eD.Q2]: n }),
            children: [
                I &&
                    (0, i.jsx)(eU, {
                        eventTargetRef: D,
                        isNitro: T,
                        contentWidth: C,
                        hoverGradientStart: S,
                        hoverGradientMiddle: y,
                        hoverGradientEnd: N,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: _ },
                    className: eD.nf,
                    ...v,
                    children: [
                        (0, i.jsx)(V.A, {
                            ref: I ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(eD.e_, o),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eD.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
};
function eF(e) {
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
        [el, eu] = r.useState(!1),
        [e_, eh] = r.useState(!1),
        ey = r.useRef(null),
        [eN, eC] = r.useState(!1),
        eO = (0, _.K)(
            r.useCallback((e) => {
                eC(e);
            }, []),
        ),
        eb = r.useRef(null),
        eU = C ?? eb,
        eG = (0, h.A)(eU, eO),
        { showMenuItemPopover: eF, markMenuItemPopoverAsDismissed: eV } = (0, eA.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: eN,
            channelType: t.type,
        }),
        {
            avatarSrc: eB,
            avatarDecorationSrc: eH,
            eventHandlers: ej,
        } = (0, eS.A)({ userId: o?.id, size: b._3.SIZE_32, animateOnHover: !(s || U || el || e_) }),
        [eY, eW] = r.useState({ maskImage: "none" }),
        eK = r.useRef(null),
        e$ = t.isMultiUserDM(),
        ez = t.isSystemDM(),
        eq = !e$ && !ez && t.type === es.rbe.DM,
        eX = eq && o?.primaryGuild != null,
        eZ = (0, m.bG)([eR.Ay], () => eR.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eQ, blocked: eJ } = (0, m.cf)([et.A], () => ({
            ignored: et.A.isIgnored(t.getRecipientId()),
            blocked: et.A.isBlocked(t.getRecipientId()),
        })),
        e0 = eq && eQ,
        e1 = eq && eJ,
        e2 = (eZ || e0 || e1) && !(s || U),
        e3 = (0, m.bG)([ev.Ay], () => ev.Ay.getMentionCount(t.id) > 0),
        e6 = (0, K.Ay)(t),
        e4 = r.useRef(null),
        e5 = null != v && (s || U || e_),
        e7 = () => {
            $(!0);
        },
        e8 = () => {
            $(!1);
        },
        e9 = () => {
            eu(!0);
        },
        te = () => {
            eu(!1);
        },
        tt = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), w.A.closePrivateChannel(t.id, s, n);
        },
        tn = () => {
            w.A.preload(es.ME, t.id);
        },
        ti = (e) => {
            e.stopPropagation();
        },
        tr = (e) => {
            e.target === e.currentTarget && ey.current?.click();
        },
        ts = (e) => {
            let r =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eh(!0),
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
                          { impressionName: r, noBlurEvent: !0, onClose: () => eh(!1) },
                      )
                    : (0, M.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("954"),
                                  n.e("56377"),
                                  n.e("7578"),
                                  n.e("16639"),
                                  n.e("88667"),
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
                          { impressionName: r, onClose: () => eh(!1) },
                      );
        },
        ta = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = eo.intl.formatToPlainString(eo.t.hJ5Ap4, { name: e6 }),
                s = eo.intl.format(eo.t.SSIVOu, { name: e6 });
            t.isManaged() &&
                ((r = eo.intl.formatToPlainString(eo.t.hVGjEW, { name: e6 })),
                (s = eo.intl.format(eo.t.IK1Qvs, { name: e6 }))),
                (0, D.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                    return (t) => (0, i.jsx)(e, { title: r, body: s, onSubmit: tt, ...t });
                });
        },
        to = (0, i.jsx)(em.A, {
            userName: e6,
            displayNameStyles: o?.displayNameStyles,
            effectDisplayType: U || s || e_ ? eE.G.ANIMATED : eE.G.PLAIN,
            loop: U,
            boldFontOpacity: 0.9,
        }),
        tl = eX
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      to,
                      (0, i.jsx)(eT.Ay, {
                          primaryGuild: o?.primaryGuild,
                          userId: o?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eD.fc, { [eD.Y_]: e2 }),
                      }),
                  ],
              })
            : to,
        tu = r.useRef(null),
        tc = (0, ep.W)({ location: "PrivateChannel" }) && o?.displayNameStyles != null,
        { isIncomingCall: td, isOngoingCall: t_ } = (0, B.A)(t.id),
        th = [
            (0, Y.Ay)({ channel: t, unread: e3, isIncomingCall: td, isOngoingCall: t_ }),
            (0, Y.r2)({ channel: t, muted: eZ, userStatus: S }),
        ]
            .filter(Boolean)
            .join(", "),
        tf = (0, m.bG)([ev.Ay], () => ev.Ay.lastMessageId(t.id)),
        { waveShouldShow: tp, wavePressed: tE } = (function (e, t) {
            let [n, i] = r.useState(!1),
                s = r.useCallback(async () => {
                    if (!n) {
                        i(!0),
                            (0, er.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, J.pX)(es.BVt.CHANNEL(es.ME, e.id));
                        try {
                            await Q.A.sendStickers(e.id, ["749054660769218631"], "", { location: ea.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, q.P0)((0, X.o)(eo.intl.string(eo.t.Whhv4w), Z.Ck.FAILURE));
                        }
                        i(!1);
                    }
                }, [e.id, n]),
                a = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
                o = a ? e.getRecipientId() : null,
                l = (0, m.bG)([et.A], () => null != o && et.A.isFriend(o)),
                u = (0, m.bG)([et.A], () => null != o && et.A.isIgnored(o)),
                c = ei.default.extractTimestamp(e.id),
                d = (0, en.v0)(z()(), z()(c), 18144e5),
                _ = (0, ee.l)(e.id);
            return { waveShouldShow: a && l && !u && null == t && d && null == _, wavePressed: s };
        })(t, tf),
        { showClose: tm } = j.useConfig({ location: "PrivateChannel" }),
        tg = (0, p.A)(() => {
            let e = eK.current?.getBoundingClientRect() ?? null,
                t = tu.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eW({ maskImage: "none" });
            let n = t.width - 16;
            eW({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        r.useLayoutEffect(tg, [U, s, tg]),
        (0, f.g)(eU, tg),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...r } = e;
                return (0, i.jsxs)(ef, {
                    className: a()(eD.Ix, eD.dm),
                    role: n,
                    focusProps: { ...ew, focusTarget: ey, ringTarget: eU },
                    ref: eG,
                    onMouseEnter: e7,
                    onMouseLeave: e8,
                    onMouseDown: tn,
                    onFocus: e9,
                    onBlur: te,
                    onContextMenu: ts,
                    "aria-setsize": P,
                    "aria-posinset": R,
                    children: [
                        e3 ? (0, i.jsx)("div", { className: a()(eD.dM, { [eD.SU]: e2 }) }) : null,
                        (0, i.jsxs)(O, {
                            className: a()(eD.bG, { [eD.Q2]: s || e_ }),
                            as: "div",
                            onClick: tr,
                            muted: e2,
                            selected: s,
                            children: [
                                (0, i.jsx)(ed.A, {
                                    nameplate: e5 ? v : void 0,
                                    selected: s,
                                    hovered: U,
                                    content: tu,
                                    placement: ec.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eD.lU, ref: eK, children: tl }),
                                (0, i.jsx)(u.N_, {
                                    style: eY,
                                    innerRef: ey,
                                    to: es.BVt.CHANNEL(es.ME, t.id),
                                    className: eD.nf,
                                    "aria-label": th,
                                    ...r,
                                    children: (0, i.jsx)(V.A, {
                                        ref: tu,
                                        avatar: (() => {
                                            let e = b._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(eI.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: T,
                                                        status: S,
                                                    });
                                                else
                                                    return (0, i.jsx)(eL, {
                                                        ...ej,
                                                        src: (0, W.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: T ? es.clD.ONLINE : S,
                                                        isTyping: T,
                                                    });
                                            l()(
                                                null != o,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                o.isSystemUser() || (n = (0, x.A)(E) ? es.clD.STREAMING : S),
                                                (0, i.jsx)(eL, {
                                                    ...ej,
                                                    size: b._3.SIZE_32,
                                                    src: eB,
                                                    avatarDecoration: eH,
                                                    status: n,
                                                    isMobile: y,
                                                    isVR: N,
                                                    isTyping: T,
                                                    "aria-label": o.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e3 && !e2,
                                        muted: e2,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: eD.W$,
                                                  children: (0, H.A)(t.id)
                                                      ? eo.intl.string(eo.t.FL5T01)
                                                      : eo.intl.string(eo.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: eD.W$,
                                                    children: eo.intl.format(eo.t.CxSA5N, {
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
                                                      animateEmoji: U || el || e_,
                                                      textClassName: eD.XD,
                                                      iconClassName: e2 ? eD.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(g.A, { className: a()(eD.uN, { [eD.e8]: tc }), children: tl }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(F.A, {
                                                  className: eD.G$,
                                                  type: F.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tc,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(eD._q, { [eD.EY]: e5 }),
                                    children: [
                                        e0 ? (0, i.jsx)(ex, {}) : null,
                                        e1 ? (0, i.jsx)(ek, {}) : null,
                                        tp && null != e6
                                            ? (0, i.jsx)(eP, { channelName: e6, onClick: tE, showNameplate: e5 })
                                            : null,
                                        tm || !tp
                                            ? (0, i.jsx)(eM, {
                                                  icon: L.P,
                                                  "aria-label": e$
                                                      ? eo.intl.string(eo.t["26C4oi"])
                                                      : eo.intl.string(eo.t.jsvgc3),
                                                  onClick: e$ ? ta : tt,
                                                  onMouseDown: ti,
                                                  nameplate: v,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e4,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eF && (0, i.jsx)(eg.A, { targetElementRef: eU, markMenuItemPopoverAsDismissed: eV }),
                    ],
                });
            },
        })
    );
}
let eV = (e) => {
    let { channel: t, selected: n, ...r } = e,
        s = (0, m.bG)([eO.default], () => eO.default.getUser(t.getRecipientId())),
        a = s?.id,
        o = (0, m.cf)([eN.A, ey.A], () => {
            let e;
            if (t.isMultiUserDM()) {
                let n = eN.A.getState().statuses;
                t.recipients.some((e) => n[e] === es.clD.ONLINE) && (e = es.clD.ONLINE);
            } else null != a && (e = eN.A.getStatus(a));
            return {
                status: e,
                activities: null != a ? eN.A.getActivities(a) : null,
                applicationStream: null != a ? ey.A.getAnyStreamForUser(a) : null,
                isMobile: null != a && eN.A.isMobileOnline(a),
                isVR: null != a && eN.A.isVROnline(a),
            };
        }, [t, a]),
        { voiceChannel: l } = (0, U.A)({ userId: a }),
        u = (0, el.r)({ user: s }),
        c = (0, m.bG)(
            [eO.default, eC.A],
            () =>
                t.isMultiUserDM()
                    ? ei.default.keys(eC.A.getTypingUsers(t.id)).some((e) => e !== eO.default.getCurrentUser()?.id)
                    : null != s && eC.A.isTyping(t.id, t.getRecipientId()),
            [t, s],
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(eF, {
              channel: t,
              selected: n,
              isTyping: c,
              status: o.status === es.clD.ONLINE ? es.clD.ONLINE : void 0,
              ...r,
          })
        : (0, i.jsx)(eF, { channel: t, selected: n, user: s, voiceChannel: l, isTyping: c, nameplate: u, ...r, ...o });
};
