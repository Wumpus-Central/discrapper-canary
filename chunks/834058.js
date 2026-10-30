n.d(t, { ls: () => eH, z9: () => eV, w_: () => eB, Ay: () => eY, th: () => eW });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r);
if (588245 != n.j) var u = n(561028);
var c = n(562708);
if (588245 != n.j) var d = n(837381);
var A = n(612324),
    f = n(607399),
    m = n(17928);
if (588245 != n.j) var N = n(3026);
var v = n(97808);
if (588245 != n.j) var g = n(939249);
if (588245 != n.j) var p = n(866665);
if (588245 != n.j) var h = n(821609);
if (588245 != n.j) var j = n(366605);
if (588245 != n.j) var x = n(952270);
if (588245 != n.j) var C = n(428678);
var _ = n(661531),
    y = n(549254);
if (588245 != n.j) var I = n(445529);
if (588245 != n.j) var T = n(778712);
if (588245 != n.j) var S = n(192308);
if (588245 != n.j) var E = n(834730);
if (588245 != n.j) var R = n(789645);
var M = n(308528),
    D = n(442433),
    b = n(765671),
    G = n(736653),
    P = n(657043),
    k = n(960076),
    w = n(397244),
    O = n(714114),
    B = n(394871),
    U = n(709066),
    L = n(262295),
    z = n(620982),
    F = n(343328),
    H = n(963027),
    V = n(571694),
    W = n(47167);
if (588245 != n.j) var Y = n(858899);
var J = n(148494),
    K = n(976860),
    Q = n(330001),
    X = n(536637),
    Z = n.n(X),
    $ = n(74114),
    q = n(232835),
    ee = n(994500),
    et = n(58703),
    en = n(935208),
    ei = n(746080),
    el = n(652215),
    es = n(381941),
    ea = n(105292),
    er = n(449582),
    eo = n(351952),
    eu = n(88686),
    ec = n(214881);
if (588245 != n.j) var ed = n(559106);
var eA = n(351278);
let ef =
    588245 != n.j
        ? function (e) {
              let { className: t, focusProps: n, ref: l, ...s } = e;
              return (0, i.jsx)(ed.vN, { ...n, children: (0, i.jsx)("li", { className: a()(t, eA.k), ...s, ref: l }) });
          }
        : null;
var em = n(824994),
    eN = n(922301),
    ev = n(660184),
    eg = n(954376),
    ep = n(534400),
    eh = n(693879);
let ej = (0, n(945810).mj)({
    name: "2026-10-gdm-duration-timer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function ex(e) {
    let { callMessageId: t, className: n } = e,
        s = ej.useConfig({ location: "PrivateChannelCallDuration" }).enabled,
        a = l.useMemo(() => ({ start: en.default.extractTimestamp(t) }), [t]);
    return s
        ? (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(eh.z, { textColor: "text-feedback-positive", entry: a }),
          })
        : null;
}
var eC = n(114129),
    e_ = n(442325),
    ey = n(897898),
    eI = n(854627),
    eT = n(616356),
    eS = n(470710),
    eE = n(290863),
    eR = n(573163),
    eM = n(309010),
    eD = n(741961),
    eb = n(543465),
    eG = n(287809),
    eP = n(19575),
    ek = n(763097);
let ew = eP.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eO = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function eB(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, visibleElementRef: s, ...r } = e,
        o = (0, eo.K)(t),
        u = (0, P.BX)("SideButton");
    return (0, i.jsx)(g.D, {
        className: a()(ek.b, { [ek.DQ]: null != t, [ek.by]: l }),
        style: o,
        ...r,
        focusProps: u ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: s,
            className: a()(ek.b3, { [ek.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(ek.ut, { [ek.Uq]: null != t }),
            }),
        }),
    });
}
function eU(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: ek.KQ,
        children: (0, i.jsx)(p.m, {
            text: ea.intl.formatToPlainString(ea.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(h.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: ea.intl.string(ea.t.pVlP58),
            }),
        }),
    });
}
function eL() {
    return (0, i.jsx)(j.t, { size: "xs", color: "currentColor", className: ek.wB });
}
function ez() {
    return (0, i.jsx)(x.EyeSlashIcon, { size: "xs", color: "currentColor", className: ek.wB });
}
function eF() {
    return (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: ek.wB });
}
function eH(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: s,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
        } = e,
        u = l.useMemo(
            () =>
                null != a && null != r && null != o
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: r ?? _.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: _.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: _.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: _.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: _.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: _.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: _.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, r, o],
        );
    return (0, i.jsx)(y.U, { eventTargetRef: t, className: ek.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
function eV(e) {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: m,
            onClick: N,
            className: v,
            role: g,
            "aria-posinset": p,
            "aria-setsize": h,
            listItemRef: j,
            showHoverGradient: x = !1,
            nitroHoverGradient: C = !1,
            hoverGradientStart: _,
            hoverGradientMiddle: y,
            hoverGradientEnd: T,
            ...S
        } = e,
        { width: E, ref: R } = (0, b.Ay)(),
        M = l.useRef(null),
        D = l.useRef(null),
        G = (0, A.A)(j, M);
    return (0, i.jsx)(ef, {
        className: a()(ek.Ix, { [ek.Ij]: f.Fr }, v),
        onClick: N,
        role: g,
        focusProps: { ...eO, focusTarget: D, ringTarget: M },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: G,
        children: (0, i.jsxs)(I.H, {
            as: "div",
            selected: n,
            className: a()(o, ek.bG, ek.$J, { [ek.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(eH, {
                        eventTargetRef: M,
                        isNitro: C,
                        contentWidth: E,
                        hoverGradientStart: _,
                        hoverGradientMiddle: y,
                        hoverGradientEnd: T,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: m },
                    className: ek.nf,
                    innerRef: D,
                    ...S,
                    children: [
                        (0, i.jsx)(L.A, {
                            ref: x ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(ek.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ek.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function eW(e) {
    let {
            channel: t,
            selected: s = !1,
            user: r,
            activities: A,
            applicationStream: f,
            voiceChannel: v,
            isTyping: g,
            status: p,
            isMobile: h,
            isVR: j,
            nameplate: x,
            ref: C,
            "aria-posinset": _,
            "aria-setsize": y,
        } = e,
        [b, P] = l.useState(!1),
        [O, X] = l.useState(!1),
        [er, eo] = l.useState(!1),
        ed = l.useRef(null),
        eA = l.useRef(null),
        eh = C ?? eA,
        {
            avatarSrc: ej,
            avatarDecorationSrc: eT,
            eventHandlers: eE,
        } = (0, eI.A)({ userId: r?.id, size: T._3.SIZE_32, animateOnHover: !(s || b || O || er) }),
        eD = t.isMultiUserDM(),
        eG = t.isSystemDM(),
        eP = !eD && !eG && t.type === el.rbe.DM,
        eH = eP && r?.primaryGuild != null,
        eV = (0, m.bG)([eb.Ay], () => eb.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eW = (0, m.bG)([eb.Ay], () => eb.Ay.isMessagesFavorite(t.id)),
        { ignored: eY, blocked: eJ } = (0, m.cf)([ee.A], () => ({
            ignored: ee.A.isIgnored(t.getRecipientId()),
            blocked: ee.A.isBlocked(t.getRecipientId()),
        })),
        eK = eP && eY,
        eQ = eP && eJ,
        eX = (eV || eK || eQ) && !(s || b),
        eZ = (0, m.bG)([eR.Ay], () => eR.Ay.getMentionCount(t.id) > 0),
        e$ = (0, W.Ay)(t),
        eq = (0, m.bG)(
            [eS.A, eM.Ay],
            () => (eM.Ay.getVoiceChannelId() === t.id && eS.A.isCallActive(t.id) ? eS.A.getMessageId(t.id) : null),
            [t.id],
        ),
        e0 = l.useRef(null),
        e2 = null != x && (s || b || er),
        e8 = (0, G.Ay)();
    function e5() {
        P(!0);
    }
    function e1() {
        P(!1);
    }
    function e9() {
        X(!0);
    }
    function e3() {
        X(!1);
    }
    function e4(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, s, n));
    }
    function e6() {
        M.A.preload(el.ME, t.id);
    }
    function e7(e) {
        e.stopPropagation();
    }
    function te(e) {
        e.target === e.currentTarget && ed.current?.click();
    }
    function tt(e) {
        if (!e_.A.isEnabled()) return;
        let n = e_.A.getTabForChannel(t.id);
        null != n && (e.preventDefault(), (0, eC.ZD)(n.id));
    }
    function tn(e) {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        (eo(!0),
            t.isMultiUserDM()
                ? (0, D.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("926132"),
                              n.e("893190"),
                              n.e("393336"),
                              n.e("146652"),
                              n.e("391763"),
                              n.e("955557"),
                              n.e("638221"),
                              n.e("482861"),
                              n.e("591951"),
                              n.e("130674"),
                              n.e("947502"),
                              n.e("965789"),
                              n.e("979630"),
                              n.e("190889"),
                              n.e("61129"),
                              n.e("205941"),
                              n.e("198415"),
                              n.e("331203"),
                              n.e("255302"),
                              n.e("935483"),
                              n.e("275289"),
                              n.e("836150"),
                              n.e("566378"),
                              n.e("699011"),
                              n.e("17244"),
                              n.e("146149"),
                              n.e("996028"),
                              n.e("153416"),
                              n.e("760200"),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: s });
                      },
                      { impressionName: l, noBlurEvent: !0, onClose: () => eo(!1) },
                  )
                : (0, D.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("339715"),
                              n.e("790484"),
                              n.e("147119"),
                              n.e("403382"),
                              n.e("24312"),
                              n.e("622936"),
                              n.e("216947"),
                              n.e("463317"),
                              n.e("326692"),
                              n.e("926132"),
                              n.e("834552"),
                              n.e("993103"),
                              n.e("708757"),
                              n.e("893190"),
                              n.e("585968"),
                              n.e("393336"),
                              n.e("146652"),
                              n.e("776273"),
                              n.e("391763"),
                              n.e("28102"),
                              n.e("189673"),
                              n.e("234236"),
                              n.e("882073"),
                              n.e("797558"),
                              n.e("955557"),
                              n.e("638221"),
                              n.e("592028"),
                              n.e("571210"),
                              n.e("425906"),
                              n.e("123216"),
                              n.e("691994"),
                              n.e("229787"),
                              n.e("147786"),
                              n.e("936320"),
                              n.e("482861"),
                              n.e("576665"),
                              n.e("88342"),
                              n.e("311802"),
                              n.e("698965"),
                              n.e("591951"),
                              n.e("454625"),
                              n.e("235313"),
                              n.e("371133"),
                              n.e("41991"),
                              n.e("130674"),
                              n.e("959669"),
                              n.e("947502"),
                              n.e("715038"),
                              n.e("436564"),
                              n.e("245996"),
                              n.e("252229"),
                              n.e("680986"),
                              n.e("700792"),
                              n.e("965789"),
                              n.e("979630"),
                              n.e("592822"),
                              n.e("529422"),
                              n.e("823427"),
                              n.e("33611"),
                              n.e("190889"),
                              n.e("242204"),
                              n.e("856753"),
                              n.e("61129"),
                              n.e("307059"),
                              n.e("205941"),
                              n.e("309291"),
                              n.e("198415"),
                              n.e("331203"),
                              n.e("255302"),
                              n.e("349644"),
                              n.e("493014"),
                              n.e("838056"),
                              n.e("172883"),
                              n.e("935483"),
                              n.e("920628"),
                              n.e("508829"),
                              n.e("522261"),
                              n.e("873786"),
                              n.e("678195"),
                              n.e("287988"),
                              n.e("275289"),
                              n.e("774021"),
                              n.e("836150"),
                              n.e("699011"),
                              n.e("17244"),
                              n.e("298199"),
                              n.e("864464"),
                              n.e("324240"),
                              n.e("304866"),
                              n.e("439778"),
                              n.e("996028"),
                              n.e("960816"),
                          ]).then(n.bind(n, 385913));
                          return (n) => (0, i.jsx)(e, { ...n, user: r, channel: t, channelSelected: s });
                      },
                      { impressionName: l, onClose: () => eo(!1) },
                  ));
    }
    function ti(e) {
        (e.preventDefault(), e.stopPropagation());
        let l = ea.intl.formatToPlainString(ea.t.hJ5Ap4, { name: e$ }),
            s = ea.intl.format(ea.t.SSIVOu, { name: e$ });
        (t.isManaged() &&
            ((l = ea.intl.formatToPlainString(ea.t.hVGjEW, { name: e$ })),
            (s = ea.intl.format(ea.t.IK1Qvs, { name: e$ }))),
            (0, S.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("446215"), n.e("137803")]).then(n.bind(n, 925785));
                return (t) => (0, i.jsx)(e, { title: l, body: s, onSubmit: e4, ...t });
            }));
    }
    let tl = (0, i.jsx)(ev.A, {
            userName: e$,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: b || s || er ? eN.G.ANIMATED : eN.G.PLAIN,
            loop: b,
            boldFontOpacity: 0.9,
        }),
        ts = eH
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tl,
                      (0, i.jsx)(ep.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ek.fc, { [ek.Y_]: eX }),
                      }),
                  ],
              })
            : tl,
        ta = l.useRef(null),
        tr = (0, em.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: to, isOngoingCall: tu } = (0, z.A)(t.id),
        tc = [
            (0, H.Ay)({ channel: t, unread: eZ, isIncomingCall: to, isOngoingCall: tu, ignored: eK, blocked: eQ }),
            (0, H.r2)({ channel: t, muted: eV, userStatus: p, isFavorite: eW }),
        ]
            .filter(Boolean)
            .join(", "),
        td = (0, m.bG)([eR.Ay], () => eR.Ay.lastMessageId(t.id)),
        { waveShouldShow: tA, wavePressed: tf } = (function (e, t) {
            let n,
                i,
                s,
                a,
                r,
                o,
                u,
                c,
                d,
                A,
                [f, N] = l.useState(!1),
                v = l.useCallback(async () => {
                    if (!f) {
                        (N(!0),
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, K.pX)(el.BVt.CHANNEL(el.ME, e.id)));
                        try {
                            await J.A.sendStickers(e.id, ["749054660769218631"], "", { location: es.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok ||
                                429 !== e.status ||
                                (0, Y.P0)({ text: ea.intl.string(ea.t.Whhv4w), variant: "critical" });
                        }
                        N(!1);
                    }
                }, [e.id, f]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, m.bG)([ee.A], () => null != i && ee.A.isFriend(i))),
                    (a = (0, m.bG)([ee.A], () => null != i && ee.A.isIgnored(i))),
                    (r = (0, m.bG)([q.A], () => {
                        let t = q.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ei.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, m.bG)([q.A], () => q.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = en.default.extractTimestamp(e.id)),
                    (d = (0, et.v0)(Z()(), Z()(c), 18144e5)),
                    (A = (0, $.l)(e.id)),
                    n && s && !a && (o || null == t || r) && !u && d && null == A),
                wavePressed: v,
            };
        })(t, td);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsxs)(ef, {
                className: a()(ek.Ix, ek.dm),
                role: n,
                focusProps: { ...eO, focusTarget: ed, ringTarget: eh },
                ref: eh,
                onMouseEnter: e5,
                onMouseLeave: e1,
                onMouseDown: e6,
                onFocus: e9,
                onBlur: e3,
                onContextMenu: tn,
                "aria-setsize": y,
                "aria-posinset": _,
                children: [
                    eZ ? (0, i.jsx)("div", { className: a()(ek.dM, { [ek.SU]: eX }) }) : null,
                    (0, i.jsxs)(I.H, {
                        className: a()(ek.bG, { [ek.Q2]: s || er }),
                        as: "div",
                        onClick: te,
                        muted: eX,
                        selected: s,
                        children: [
                            (0, i.jsx)(ec.A, {
                                nameplate: e2 ? x : void 0,
                                selected: s,
                                hovered: b,
                                content: ta,
                                placement: eu.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: ed,
                                to: el.BVt.CHANNEL(el.ME, t.id),
                                className: a()(ek.nf, ek.Zi),
                                "aria-label": tc,
                                onClick: tt,
                                onAuxClick: (e) => (0, ey.A)(e, t),
                                ...l,
                                children: (0, i.jsx)(L.A, {
                                    ref: ta,
                                    avatar: (function () {
                                        let e = T._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(eg.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: g,
                                                    status: p,
                                                });
                                            else
                                                return (0, i.jsx)(ew, {
                                                    ...eE,
                                                    src: (0, V.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: g ? el.clD.ONLINE : p,
                                                    isTyping: g,
                                                });
                                        o()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            r.isSystemUser() || (n = (0, k.A)(A) ? el.clD.STREAMING : p),
                                            (0, i.jsx)(ew, {
                                                ...eE,
                                                size: T._3.SIZE_32,
                                                src: ej,
                                                avatarDecoration: eT,
                                                status: n,
                                                isMobile: h,
                                                isVR: j,
                                                isTyping: g,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eZ && !eX,
                                    muted: eX,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(E.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: ek.W$,
                                              children: (0, F.A)(t.id)
                                                  ? ea.intl.string(ea.t.FL5T01)
                                                  : ea.intl.string(ea.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(E.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: ek.W$,
                                                children: ea.intl.format(ea.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, w.A)({
                                                  activities: A,
                                                  status: p,
                                                  applicationStream: f,
                                                  voiceChannel: v,
                                              })
                                            ? (0, i.jsx)(B.A, {
                                                  user: r,
                                                  activities: A,
                                                  voiceChannel: v,
                                                  applicationStream: f,
                                                  animateEmoji: b || O || er,
                                                  textClassName: ek.XD,
                                                  iconClassName: eX ? ek.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: a()(ek.uN, { [ek.e8]: tr }), children: ts }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(U.A, { className: ek.G$, type: U.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: tr,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(ek._q, { [ek.EY]: e2 }),
                                children: [
                                    null != eq &&
                                        (0, i.jsx)(ex, {
                                            callMessageId: eq,
                                            className: a()(ek.R4, { [ek.jd]: e2, [ek.ht]: e2 && e8 === el.NJ8.LIGHT }),
                                        }),
                                    eQ ? (0, i.jsx)(eF, {}) : eK ? (0, i.jsx)(ez, {}) : eW ? (0, i.jsx)(eL, {}) : null,
                                    tA && null != e$
                                        ? (0, i.jsx)(eU, { channelName: e$, onClick: tf, showNameplate: e2 })
                                        : null,
                                    tA
                                        ? null
                                        : (0, i.jsx)(eB, {
                                              icon: R.P,
                                              "aria-label": eD
                                                  ? ea.intl.string(ea.t["26C4oi"])
                                                  : ea.intl.string(ea.t.jsvgc3),
                                              onClick: eD ? ti : e4,
                                              onMouseDown: e7,
                                              nameplate: x,
                                              visibleElementRef: e0,
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
let eY =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  s = (0, m.bG)([eG.default], () => eG.default.getUser(t.getRecipientId())),
                  a = s?.id,
                  r = (0, m.cf)(
                      [eE.A, eT.A],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              let n = eE.A.getState().statuses;
                              t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                          } else null != a && (e = eE.A.getStatus(a));
                          return {
                              status: e,
                              activities: null != a ? eE.A.getActivities(a) : null,
                              applicationStream: null != a ? eT.A.getAnyStreamForUser(a) : null,
                              isMobile: null != a && eE.A.isMobileOnline(a),
                              isVR: null != a && eE.A.isVROnline(a),
                          };
                      },
                      [t, a],
                  ),
                  { voiceChannel: o } = (0, O.Ay)({ userId: a }),
                  u = (0, er.r)({ user: s }),
                  c = (0, m.bG)(
                      [eG.default, eD.A],
                      () =>
                          t.isMultiUserDM()
                              ? en.default
                                    .keys(eD.A.getTypingUsers(t.id))
                                    .some((e) => e !== eG.default.getCurrentUser()?.id)
                              : null != s && eD.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eW, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eW, {
                        channel: t,
                        selected: n,
                        user: s,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...l,
                        ...r,
                    });
          }
        : null;
