n.d(t, { ls: () => ez, z9: () => eH, w_: () => eO, Ay: () => eV, th: () => eF });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r);
if (588245 != n.j) var u = n(561028);
var c = n(562708);
if (588245 != n.j) var d = n(837381);
var A = n(612324),
    m = n(607399),
    f = n(17928);
if (588245 != n.j) var N = n(3026);
var v = n(97808);
if (588245 != n.j) var g = n(939249);
if (588245 != n.j) var p = n(866665);
if (588245 != n.j) var h = n(821609);
if (588245 != n.j) var j = n(366605);
if (588245 != n.j) var x = n(952270);
if (588245 != n.j) var _ = n(428678);
var y = n(661531),
    I = n(549254);
if (588245 != n.j) var C = n(445529);
if (588245 != n.j) var S = n(778712);
if (588245 != n.j) var T = n(192308);
if (588245 != n.j) var E = n(834730);
if (588245 != n.j) var R = n(789645);
var M = n(308528),
    D = n(442433),
    b = n(765671),
    G = n(736653),
    P = n(657043),
    w = n(960076),
    O = n(397244),
    k = n(714114),
    B = n(394871),
    U = n(709066),
    L = n(262295),
    z = n(620982),
    H = n(343328),
    F = n(963027),
    V = n(571694),
    W = n(47167);
if (588245 != n.j) var Y = n(858899);
var J = n(148494),
    K = n(976860),
    Q = n(330001),
    X = n(536637),
    $ = n.n(X),
    Z = n(74114),
    q = n(232835),
    ee = n(994500),
    et = n(58703),
    en = n(935208),
    ei = n(746080),
    es = n(652215),
    el = n(381941),
    ea = n(105292),
    er = n(449582),
    eo = n(351952),
    eu = n(88686),
    ec = n(214881);
if (588245 != n.j) var ed = n(559106);
var eA = n(351278);
let em =
    588245 != n.j
        ? function (e) {
              let { className: t, focusProps: n, ref: s, ...l } = e;
              return (0, i.jsx)(ed.vN, { ...n, children: (0, i.jsx)("li", { className: a()(t, eA.k), ...l, ref: s }) });
          }
        : null;
var ef = n(824994),
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
        l = ej.useConfig({ location: "PrivateChannelCallDuration" }).enabled,
        a = s.useMemo(() => ({ start: en.default.extractTimestamp(t) }), [t]);
    return l
        ? (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(eh.z, { textColor: "text-feedback-positive", entry: a }),
          })
        : null;
}
var e_ = n(897898),
    ey = n(854627),
    eI = n(616356),
    eC = n(470710),
    eS = n(290863),
    eT = n(573163),
    eE = n(309010),
    eR = n(741961),
    eM = n(543465),
    eD = n(287809),
    eb = n(19575),
    eG = n(763097);
let eP = eb.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    ew = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function eO(e) {
    let { nameplate: t, icon: n, forceShow: s = !1, visibleElementRef: l, ...r } = e,
        o = (0, eo.K)(t),
        u = (0, P.BX)("SideButton");
    return (0, i.jsx)(g.D, {
        className: a()(eG.b, { [eG.DQ]: null != t, [eG.by]: s }),
        style: o,
        ...r,
        focusProps: u ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: l,
            className: a()(eG.b3, { [eG.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(eG.ut, { [eG.Uq]: null != t }),
            }),
        }),
    });
}
function ek(e) {
    let { onClick: t, channelName: n, showNameplate: s } = e;
    return (0, i.jsx)("div", {
        className: eG.KQ,
        children: (0, i.jsx)(p.m, {
            text: ea.intl.formatToPlainString(ea.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(h.$, {
                size: "sm",
                variant: s ? "overlay-secondary" : "secondary",
                onClick: t,
                text: ea.intl.string(ea.t.pVlP58),
            }),
        }),
    });
}
function eB() {
    return (0, i.jsx)(j.t, { size: "xs", color: "currentColor", className: eG.wB });
}
function eU() {
    return (0, i.jsx)(x.EyeSlashIcon, { size: "xs", color: "currentColor", className: eG.wB });
}
function eL() {
    return (0, i.jsx)(_.K, { size: "xs", color: "currentColor", className: eG.wB });
}
function ez(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: l,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
        } = e,
        u = s.useMemo(
            () =>
                null != a && null != r && null != o
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: r ?? y.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: y.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: y.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: y.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: y.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: y.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: y.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, r, o],
        );
    return (0, i.jsx)(I.U, { eventTargetRef: t, className: eG.a1, dataBinding: { ...u, DimmerWidth: (l ?? 0) + 32 } });
}
function eH(e) {
    let {
            route: t,
            selected: n,
            icon: l,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: f,
            onClick: N,
            className: v,
            role: g,
            "aria-posinset": p,
            "aria-setsize": h,
            listItemRef: j,
            showHoverGradient: x = !1,
            nitroHoverGradient: _ = !1,
            hoverGradientStart: y,
            hoverGradientMiddle: I,
            hoverGradientEnd: S,
            ...T
        } = e,
        { width: E, ref: R } = (0, b.Ay)(),
        M = s.useRef(null),
        D = s.useRef(null),
        G = (0, A.A)(j, M);
    return (0, i.jsx)(em, {
        className: a()(eG.Ix, { [eG.Ij]: m.Fr }, v),
        onClick: N,
        role: g,
        focusProps: { ...ew, focusTarget: D, ringTarget: M },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: G,
        children: (0, i.jsxs)(C.H, {
            as: "div",
            selected: n,
            className: a()(o, eG.bG, eG.$J, { [eG.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(ez, {
                        eventTargetRef: M,
                        isNitro: _,
                        contentWidth: E,
                        hoverGradientStart: y,
                        hoverGradientMiddle: I,
                        hoverGradientEnd: S,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: f },
                    className: eG.nf,
                    innerRef: D,
                    ...T,
                    children: [
                        (0, i.jsx)(L.A, {
                            ref: x ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(l, {
                                size: "refresh_sm",
                                className: a()(eG.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eG.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function eF(e) {
    let {
            channel: t,
            selected: l = !1,
            user: r,
            activities: A,
            applicationStream: m,
            voiceChannel: v,
            isTyping: g,
            status: p,
            isMobile: h,
            isVR: j,
            nameplate: x,
            ref: _,
            "aria-posinset": y,
            "aria-setsize": I,
        } = e,
        [b, P] = s.useState(!1),
        [k, X] = s.useState(!1),
        [er, eo] = s.useState(!1),
        ed = s.useRef(null),
        eA = s.useRef(null),
        eh = _ ?? eA,
        {
            avatarSrc: ej,
            avatarDecorationSrc: eI,
            eventHandlers: eS,
        } = (0, ey.A)({ userId: r?.id, size: S._3.SIZE_32, animateOnHover: !(l || b || k || er) }),
        eR = t.isMultiUserDM(),
        eD = t.isSystemDM(),
        eb = !eR && !eD && t.type === es.rbe.DM,
        ez = eb && r?.primaryGuild != null,
        eH = (0, f.bG)([eM.Ay], () => eM.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eF = (0, f.bG)([eM.Ay], () => eM.Ay.isMessagesFavorite(t.id)),
        { ignored: eV, blocked: eW } = (0, f.cf)([ee.A], () => ({
            ignored: ee.A.isIgnored(t.getRecipientId()),
            blocked: ee.A.isBlocked(t.getRecipientId()),
        })),
        eY = eb && eV,
        eJ = eb && eW,
        eK = (eH || eY || eJ) && !(l || b),
        eQ = (0, f.bG)([eT.Ay], () => eT.Ay.getMentionCount(t.id) > 0),
        eX = (0, W.Ay)(t),
        e$ = (0, f.bG)(
            [eC.A, eE.Ay],
            () => (eE.Ay.getVoiceChannelId() === t.id && eC.A.isCallActive(t.id) ? eC.A.getMessageId(t.id) : null),
            [t.id],
        ),
        eZ = s.useRef(null),
        eq = null != x && (l || b || er),
        e0 = (0, G.Ay)();
    function e2() {
        P(!0);
    }
    function e8() {
        P(!1);
    }
    function e5() {
        X(!0);
    }
    function e1() {
        X(!1);
    }
    function e9(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, l, n));
    }
    function e3() {
        M.A.preload(es.ME, t.id);
    }
    function e4(e) {
        e.stopPropagation();
    }
    function e6(e) {
        e.target === e.currentTarget && ed.current?.click();
    }
    function e7(e) {
        let s =
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
                              n.e("368358"),
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
                              n.e("21106"),
                              n.e("836150"),
                              n.e("566378"),
                              n.e("699011"),
                              n.e("17244"),
                              n.e("146149"),
                              n.e("996028"),
                              n.e("153416"),
                              n.e("760200"),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: l });
                      },
                      { impressionName: s, noBlurEvent: !0, onClose: () => eo(!1) },
                  )
                : (0, D.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("339715"),
                              n.e("790484"),
                              n.e("147119"),
                              n.e("403382"),
                              n.e("451829"),
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
                              n.e("571210"),
                              n.e("691994"),
                              n.e("592028"),
                              n.e("229787"),
                              n.e("425906"),
                              n.e("123216"),
                              n.e("936320"),
                              n.e("576665"),
                              n.e("88342"),
                              n.e("147786"),
                              n.e("482861"),
                              n.e("311802"),
                              n.e("698965"),
                              n.e("368358"),
                              n.e("96588"),
                              n.e("454625"),
                              n.e("235313"),
                              n.e("843719"),
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
                              n.e("493014"),
                              n.e("838056"),
                              n.e("349644"),
                              n.e("172883"),
                              n.e("935483"),
                              n.e("920628"),
                              n.e("508829"),
                              n.e("522261"),
                              n.e("873786"),
                              n.e("678195"),
                              n.e("287988"),
                              n.e("21106"),
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
                          return (n) => (0, i.jsx)(e, { ...n, user: r, channel: t, channelSelected: l });
                      },
                      { impressionName: s, onClose: () => eo(!1) },
                  ));
    }
    function te(e) {
        (e.preventDefault(), e.stopPropagation());
        let s = ea.intl.formatToPlainString(ea.t.hJ5Ap4, { name: eX }),
            l = ea.intl.format(ea.t.SSIVOu, { name: eX });
        (t.isManaged() &&
            ((s = ea.intl.formatToPlainString(ea.t.hVGjEW, { name: eX })),
            (l = ea.intl.format(ea.t.IK1Qvs, { name: eX }))),
            (0, T.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("446215"), n.e("137803")]).then(n.bind(n, 925785));
                return (t) => (0, i.jsx)(e, { title: s, body: l, onSubmit: e9, ...t });
            }));
    }
    let tt = (0, i.jsx)(ev.A, {
            userName: eX,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: b || l || er ? eN.G.ANIMATED : eN.G.PLAIN,
            loop: b,
            boldFontOpacity: 0.9,
        }),
        tn = ez
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tt,
                      (0, i.jsx)(ep.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eG.fc, { [eG.Y_]: eK }),
                      }),
                  ],
              })
            : tt,
        ti = s.useRef(null),
        ts = (0, ef.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tl, isOngoingCall: ta } = (0, z.A)(t.id),
        tr = [
            (0, F.Ay)({ channel: t, unread: eQ, isIncomingCall: tl, isOngoingCall: ta, ignored: eY, blocked: eJ }),
            (0, F.r2)({ channel: t, muted: eH, userStatus: p, isFavorite: eF }),
        ]
            .filter(Boolean)
            .join(", "),
        to = (0, f.bG)([eT.Ay], () => eT.Ay.lastMessageId(t.id)),
        { waveShouldShow: tu, wavePressed: tc } = (function (e, t) {
            let n,
                i,
                l,
                a,
                r,
                o,
                u,
                c,
                d,
                A,
                [m, N] = s.useState(!1),
                v = s.useCallback(async () => {
                    if (!m) {
                        (N(!0),
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, K.pX)(es.BVt.CHANNEL(es.ME, e.id)));
                        try {
                            await J.A.sendStickers(e.id, ["749054660769218631"], "", { location: el.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok ||
                                429 !== e.status ||
                                (0, Y.P0)({ text: ea.intl.string(ea.t.Whhv4w), variant: "critical" });
                        }
                        N(!1);
                    }
                }, [e.id, m]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (l = (0, f.bG)([ee.A], () => null != i && ee.A.isFriend(i))),
                    (a = (0, f.bG)([ee.A], () => null != i && ee.A.isIgnored(i))),
                    (r = (0, f.bG)([q.A], () => {
                        let t = q.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === es.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ei.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, f.bG)([q.A], () => q.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = en.default.extractTimestamp(e.id)),
                    (d = (0, et.v0)($()(), $()(c), 18144e5)),
                    (A = (0, Z.l)(e.id)),
                    n && l && !a && (o || null == t || r) && !u && d && null == A),
                wavePressed: v,
            };
        })(t, to);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...s } = e;
            return (0, i.jsxs)(em, {
                className: a()(eG.Ix, eG.dm),
                role: n,
                focusProps: { ...ew, focusTarget: ed, ringTarget: eh },
                ref: eh,
                onMouseEnter: e2,
                onMouseLeave: e8,
                onMouseDown: e3,
                onFocus: e5,
                onBlur: e1,
                onContextMenu: e7,
                "aria-setsize": I,
                "aria-posinset": y,
                children: [
                    eQ ? (0, i.jsx)("div", { className: a()(eG.dM, { [eG.SU]: eK }) }) : null,
                    (0, i.jsxs)(C.H, {
                        className: a()(eG.bG, { [eG.Q2]: l || er }),
                        as: "div",
                        onClick: e6,
                        muted: eK,
                        selected: l,
                        children: [
                            (0, i.jsx)(ec.A, {
                                nameplate: eq ? x : void 0,
                                selected: l,
                                hovered: b,
                                content: ti,
                                placement: eu.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: ed,
                                to: es.BVt.CHANNEL(es.ME, t.id),
                                className: a()(eG.nf, eG.Zi),
                                "aria-label": tr,
                                onAuxClick: (e) => (0, e_.A)(e, t),
                                ...s,
                                children: (0, i.jsx)(L.A, {
                                    ref: ti,
                                    avatar: (function () {
                                        let e = S._3.SIZE_32;
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
                                                return (0, i.jsx)(eP, {
                                                    ...eS,
                                                    src: (0, V.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: g ? es.clD.ONLINE : p,
                                                    isTyping: g,
                                                });
                                        o()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            r.isSystemUser() || (n = (0, w.A)(A) ? es.clD.STREAMING : p),
                                            (0, i.jsx)(eP, {
                                                ...eS,
                                                size: S._3.SIZE_32,
                                                src: ej,
                                                avatarDecoration: eI,
                                                status: n,
                                                isMobile: h,
                                                isVR: j,
                                                isTyping: g,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eQ && !eK,
                                    muted: eK,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(E.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: eG.W$,
                                              children: (0, H.A)(t.id)
                                                  ? ea.intl.string(ea.t.FL5T01)
                                                  : ea.intl.string(ea.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(E.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: eG.W$,
                                                children: ea.intl.format(ea.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, O.A)({
                                                  activities: A,
                                                  status: p,
                                                  applicationStream: m,
                                                  voiceChannel: v,
                                              })
                                            ? (0, i.jsx)(B.A, {
                                                  user: r,
                                                  activities: A,
                                                  voiceChannel: v,
                                                  applicationStream: m,
                                                  animateEmoji: b || k || er,
                                                  textClassName: eG.XD,
                                                  iconClassName: eK ? eG.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: a()(eG.uN, { [eG.e8]: ts }), children: tn }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(U.A, { className: eG.G$, type: U.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: ts,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(eG._q, { [eG.EY]: eq }),
                                children: [
                                    null != e$ &&
                                        (0, i.jsx)(ex, {
                                            callMessageId: e$,
                                            className: a()(eG.R4, { [eG.jd]: eq, [eG.ht]: eq && e0 === es.NJ8.LIGHT }),
                                        }),
                                    eJ ? (0, i.jsx)(eL, {}) : eY ? (0, i.jsx)(eU, {}) : eF ? (0, i.jsx)(eB, {}) : null,
                                    tu && null != eX
                                        ? (0, i.jsx)(ek, { channelName: eX, onClick: tc, showNameplate: eq })
                                        : null,
                                    tu
                                        ? null
                                        : (0, i.jsx)(eO, {
                                              icon: R.P,
                                              "aria-label": eR
                                                  ? ea.intl.string(ea.t["26C4oi"])
                                                  : ea.intl.string(ea.t.jsvgc3),
                                              onClick: eR ? te : e9,
                                              onMouseDown: e4,
                                              nameplate: x,
                                              visibleElementRef: eZ,
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
let eV =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...s } = e,
                  l = (0, f.bG)([eD.default], () => eD.default.getUser(t.getRecipientId())),
                  a = l?.id,
                  r = (0, f.cf)(
                      [eS.A, eI.A],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              let n = eS.A.getState().statuses;
                              t.recipients.some((e) => n[e] === es.clD.ONLINE) && (e = es.clD.ONLINE);
                          } else null != a && (e = eS.A.getStatus(a));
                          return {
                              status: e,
                              activities: null != a ? eS.A.getActivities(a) : null,
                              applicationStream: null != a ? eI.A.getAnyStreamForUser(a) : null,
                              isMobile: null != a && eS.A.isMobileOnline(a),
                              isVR: null != a && eS.A.isVROnline(a),
                          };
                      },
                      [t, a],
                  ),
                  { voiceChannel: o } = (0, k.Ay)({ userId: a }),
                  u = (0, er.r)({ user: l }),
                  c = (0, f.bG)(
                      [eD.default, eR.A],
                      () =>
                          t.isMultiUserDM()
                              ? en.default
                                    .keys(eR.A.getTypingUsers(t.id))
                                    .some((e) => e !== eD.default.getCurrentUser()?.id)
                              : null != l && eR.A.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eF, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === es.clD.ONLINE ? es.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, i.jsx)(eF, {
                        channel: t,
                        selected: n,
                        user: l,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...s,
                        ...r,
                    });
          }
        : null;
