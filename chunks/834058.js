n.d(t, { ls: () => ez, z9: () => eL, w_: () => ew, Ay: () => eH, th: () => eF });
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
    C = n(549254);
if (588245 != n.j) var I = n(445529);
if (588245 != n.j) var S = n(778712);
if (588245 != n.j) var T = n(192308);
if (588245 != n.j) var E = n(834730);
if (588245 != n.j) var R = n(789645);
var M = n(308528),
    D = n(442433),
    b = n(765671),
    G = n(657043),
    P = n(960076),
    w = n(397244),
    O = n(714114),
    k = n(394871),
    B = n(709066),
    U = n(262295),
    z = n(620982),
    L = n(343328),
    F = n(963027),
    H = n(571694),
    V = n(47167);
if (588245 != n.j) var W = n(858899);
var Y = n(148494),
    K = n(976860),
    Q = n(330001),
    X = n(536637),
    J = n.n(X),
    $ = n(74114),
    Z = n(232835),
    q = n(994500),
    ee = n(58703),
    et = n(935208),
    en = n(746080),
    ei = n(652215),
    es = n(381941),
    el = n(105292),
    ea = n(449582),
    er = n(351952),
    eo = n(88686),
    eu = n(214881);
if (588245 != n.j) var ec = n(559106);
var ed = n(351278);
let eA =
    588245 != n.j
        ? function (e) {
              let { className: t, focusProps: n, ref: s, ...l } = e;
              return (0, i.jsx)(ec.vN, { ...n, children: (0, i.jsx)("li", { className: a()(t, ed.k), ...l, ref: s }) });
          }
        : null;
var em = n(824994),
    ef = n(922301),
    eN = n(660184),
    ev = n(954376),
    eg = n(534400),
    ep = n(693879);
let eh = (0, n(945810).mj)({
    name: "2026-10-gdm-duration-timer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function ej(e) {
    let { callMessageId: t, className: n } = e,
        l = eh.useConfig({ location: "PrivateChannelCallDuration" }).enabled,
        a = s.useMemo(() => ({ start: et.default.extractTimestamp(t) }), [t]);
    return l
        ? (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(ep.z, { textColor: "text-feedback-positive", entry: a }),
          })
        : null;
}
var ex = n(897898),
    e_ = n(854627),
    ey = n(616356),
    eC = n(470710),
    eI = n(290863),
    eS = n(573163),
    eT = n(309010),
    eE = n(741961),
    eR = n(543465),
    eM = n(287809),
    eD = n(19575),
    eb = n(763097);
let eG = eD.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eP = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function ew(e) {
    let { nameplate: t, icon: n, forceShow: s = !1, visibleElementRef: l, ...r } = e,
        o = (0, er.K)(t),
        u = (0, G.BX)("SideButton");
    return (0, i.jsx)(g.D, {
        className: a()(eb.b, { [eb.DQ]: null != t, [eb.by]: s }),
        style: o,
        ...r,
        focusProps: u ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: l,
            className: a()(eb.b3, { [eb.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(eb.ut, { [eb.Uq]: null != t }),
            }),
        }),
    });
}
function eO(e) {
    let { onClick: t, channelName: n, showNameplate: s } = e;
    return (0, i.jsx)("div", {
        className: eb.KQ,
        children: (0, i.jsx)(p.m, {
            text: el.intl.formatToPlainString(el.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(h.$, {
                size: "sm",
                variant: s ? "overlay-secondary" : "secondary",
                onClick: t,
                text: el.intl.string(el.t.pVlP58),
            }),
        }),
    });
}
function ek() {
    return (0, i.jsx)(j.t, { size: "xs", color: "currentColor", className: eb.wB });
}
function eB() {
    return (0, i.jsx)(x.EyeSlashIcon, { size: "xs", color: "currentColor", className: eb.wB });
}
function eU() {
    return (0, i.jsx)(_.K, { size: "xs", color: "currentColor", className: eb.wB });
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
    return (0, i.jsx)(C.U, { eventTargetRef: t, className: eb.a1, dataBinding: { ...u, DimmerWidth: (l ?? 0) + 32 } });
}
function eL(e) {
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
            hoverGradientMiddle: C,
            hoverGradientEnd: S,
            ...T
        } = e,
        { width: E, ref: R } = (0, b.Ay)(),
        M = s.useRef(null),
        D = s.useRef(null),
        G = (0, A.A)(j, M);
    return (0, i.jsx)(eA, {
        className: a()(eb.Ix, { [eb.Ij]: m.Fr }, v),
        onClick: N,
        role: g,
        focusProps: { ...eP, focusTarget: D, ringTarget: M },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: G,
        children: (0, i.jsxs)(I.H, {
            as: "div",
            selected: n,
            className: a()(o, eb.bG, eb.$J, { [eb.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(ez, {
                        eventTargetRef: M,
                        isNitro: _,
                        contentWidth: E,
                        hoverGradientStart: y,
                        hoverGradientMiddle: C,
                        hoverGradientEnd: S,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: f },
                    className: eb.nf,
                    innerRef: D,
                    ...T,
                    children: [
                        (0, i.jsx)(U.A, {
                            ref: x ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(l, {
                                size: "refresh_sm",
                                className: a()(eb.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eb.xx,
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
            "aria-setsize": C,
        } = e,
        [b, G] = s.useState(!1),
        [O, X] = s.useState(!1),
        [ea, er] = s.useState(!1),
        ec = s.useRef(null),
        ed = s.useRef(null),
        ep = _ ?? ed,
        {
            avatarSrc: eh,
            avatarDecorationSrc: ey,
            eventHandlers: eI,
        } = (0, e_.A)({ userId: r?.id, size: S._3.SIZE_32, animateOnHover: !(l || b || O || ea) }),
        eE = t.isMultiUserDM(),
        eM = t.isSystemDM(),
        eD = !eE && !eM && t.type === ei.rbe.DM,
        ez = eD && r?.primaryGuild != null,
        eL = (0, f.bG)([eR.Ay], () => eR.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eF = (0, f.bG)([eR.Ay], () => eR.Ay.isMessagesFavorite(t.id)),
        { ignored: eH, blocked: eV } = (0, f.cf)([q.A], () => ({
            ignored: q.A.isIgnored(t.getRecipientId()),
            blocked: q.A.isBlocked(t.getRecipientId()),
        })),
        eW = eD && eH,
        eY = eD && eV,
        eK = (eL || eW || eY) && !(l || b),
        eQ = (0, f.bG)([eS.Ay], () => eS.Ay.getMentionCount(t.id) > 0),
        eX = (0, V.Ay)(t),
        eJ = (0, f.bG)(
            [eC.A, eT.Ay],
            () => (eT.Ay.getVoiceChannelId() === t.id && eC.A.isCallActive(t.id) ? eC.A.getMessageId(t.id) : null),
            [t.id],
        ),
        e$ = s.useRef(null),
        eZ = null != x && (l || b || ea);
    function eq() {
        G(!0);
    }
    function e0() {
        G(!1);
    }
    function e2() {
        X(!0);
    }
    function e8() {
        X(!1);
    }
    function e5(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, l, n));
    }
    function e1() {
        M.A.preload(ei.ME, t.id);
    }
    function e9(e) {
        e.stopPropagation();
    }
    function e4(e) {
        e.target === e.currentTarget && ec.current?.click();
    }
    function e3(e) {
        let s =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        (er(!0),
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
                              n.e("400744"),
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
                      { impressionName: s, noBlurEvent: !0, onClose: () => er(!1) },
                  )
                : (0, D.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("339715"),
                              n.e("205035"),
                              n.e("790484"),
                              n.e("147119"),
                              n.e("403382"),
                              n.e("335883"),
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
                              n.e("400744"),
                              n.e("682337"),
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
                      { impressionName: s, onClose: () => er(!1) },
                  ));
    }
    function e6(e) {
        (e.preventDefault(), e.stopPropagation());
        let s = el.intl.formatToPlainString(el.t.hJ5Ap4, { name: eX }),
            l = el.intl.format(el.t.SSIVOu, { name: eX });
        (t.isManaged() &&
            ((s = el.intl.formatToPlainString(el.t.hVGjEW, { name: eX })),
            (l = el.intl.format(el.t.IK1Qvs, { name: eX }))),
            (0, T.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("446215"), n.e("137803")]).then(n.bind(n, 925785));
                return (t) => (0, i.jsx)(e, { title: s, body: l, onSubmit: e5, ...t });
            }));
    }
    let e7 = (0, i.jsx)(eN.A, {
            userName: eX,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: b || l || ea ? ef.G.ANIMATED : ef.G.PLAIN,
            loop: b,
            boldFontOpacity: 0.9,
        }),
        te = ez
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      e7,
                      (0, i.jsx)(eg.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eb.fc, { [eb.Y_]: eK }),
                      }),
                  ],
              })
            : e7,
        tt = s.useRef(null),
        tn = (0, em.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: ti, isOngoingCall: ts } = (0, z.A)(t.id),
        tl = [
            (0, F.Ay)({ channel: t, unread: eQ, isIncomingCall: ti, isOngoingCall: ts, ignored: eW, blocked: eY }),
            (0, F.r2)({ channel: t, muted: eL, userStatus: p, isFavorite: eF }),
        ]
            .filter(Boolean)
            .join(", "),
        ta = (0, f.bG)([eS.Ay], () => eS.Ay.lastMessageId(t.id)),
        { waveShouldShow: tr, wavePressed: to } = (function (e, t) {
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
                            (0, K.pX)(ei.BVt.CHANNEL(ei.ME, e.id)));
                        try {
                            await Y.A.sendStickers(e.id, ["749054660769218631"], "", { location: es.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok ||
                                429 !== e.status ||
                                (0, W.P0)({ text: el.intl.string(el.t.Whhv4w), variant: "critical" });
                        }
                        N(!1);
                    }
                }, [e.id, m]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (l = (0, f.bG)([q.A], () => null != i && q.A.isFriend(i))),
                    (a = (0, f.bG)([q.A], () => null != i && q.A.isIgnored(i))),
                    (r = (0, f.bG)([Z.A], () => {
                        let t = Z.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === ei.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(en.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, f.bG)([Z.A], () => Z.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = et.default.extractTimestamp(e.id)),
                    (d = (0, ee.v0)(J()(), J()(c), 18144e5)),
                    (A = (0, $.l)(e.id)),
                    n && l && !a && (o || null == t || r) && !u && d && null == A),
                wavePressed: v,
            };
        })(t, ta);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...s } = e;
            return (0, i.jsxs)(eA, {
                className: a()(eb.Ix, eb.dm),
                role: n,
                focusProps: { ...eP, focusTarget: ec, ringTarget: ep },
                ref: ep,
                onMouseEnter: eq,
                onMouseLeave: e0,
                onMouseDown: e1,
                onFocus: e2,
                onBlur: e8,
                onContextMenu: e3,
                "aria-setsize": C,
                "aria-posinset": y,
                children: [
                    eQ ? (0, i.jsx)("div", { className: a()(eb.dM, { [eb.SU]: eK }) }) : null,
                    (0, i.jsxs)(I.H, {
                        className: a()(eb.bG, { [eb.Q2]: l || ea }),
                        as: "div",
                        onClick: e4,
                        muted: eK,
                        selected: l,
                        children: [
                            (0, i.jsx)(eu.A, {
                                nameplate: eZ ? x : void 0,
                                selected: l,
                                hovered: b,
                                content: tt,
                                placement: eo.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: ec,
                                to: ei.BVt.CHANNEL(ei.ME, t.id),
                                className: a()(eb.nf, eb.Zi),
                                "aria-label": tl,
                                onAuxClick: (e) => (0, ex.A)(e, t),
                                ...s,
                                children: (0, i.jsx)(U.A, {
                                    ref: tt,
                                    avatar: (function () {
                                        let e = S._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(ev.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: g,
                                                    status: p,
                                                });
                                            else
                                                return (0, i.jsx)(eG, {
                                                    ...eI,
                                                    src: (0, H.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: g ? ei.clD.ONLINE : p,
                                                    isTyping: g,
                                                });
                                        o()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            r.isSystemUser() || (n = (0, P.A)(A) ? ei.clD.STREAMING : p),
                                            (0, i.jsx)(eG, {
                                                ...eI,
                                                size: S._3.SIZE_32,
                                                src: eh,
                                                avatarDecoration: ey,
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
                                              className: eb.W$,
                                              children: (0, L.A)(t.id)
                                                  ? el.intl.string(el.t.FL5T01)
                                                  : el.intl.string(el.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(E.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: eb.W$,
                                                children: el.intl.format(el.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, w.A)({
                                                  activities: A,
                                                  status: p,
                                                  applicationStream: m,
                                                  voiceChannel: v,
                                              })
                                            ? (0, i.jsx)(k.A, {
                                                  user: r,
                                                  activities: A,
                                                  voiceChannel: v,
                                                  applicationStream: m,
                                                  animateEmoji: b || O || ea,
                                                  textClassName: eb.XD,
                                                  iconClassName: eK ? eb.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: a()(eb.uN, { [eb.e8]: tn }), children: te }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(B.A, { className: eb.G$, type: B.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: tn,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(eb._q, { [eb.EY]: eZ }),
                                children: [
                                    null != eJ && (0, i.jsx)(ej, { callMessageId: eJ, className: eb.R4 }),
                                    eY ? (0, i.jsx)(eU, {}) : eW ? (0, i.jsx)(eB, {}) : eF ? (0, i.jsx)(ek, {}) : null,
                                    tr && null != eX
                                        ? (0, i.jsx)(eO, { channelName: eX, onClick: to, showNameplate: eZ })
                                        : null,
                                    tr
                                        ? null
                                        : (0, i.jsx)(ew, {
                                              icon: R.P,
                                              "aria-label": eE
                                                  ? el.intl.string(el.t["26C4oi"])
                                                  : el.intl.string(el.t.jsvgc3),
                                              onClick: eE ? e6 : e5,
                                              onMouseDown: e9,
                                              nameplate: x,
                                              visibleElementRef: e$,
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
let eH =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...s } = e,
                  l = (0, f.bG)([eM.default], () => eM.default.getUser(t.getRecipientId())),
                  a = l?.id,
                  r = (0, f.cf)(
                      [eI.A, ey.A],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              let n = eI.A.getState().statuses;
                              t.recipients.some((e) => n[e] === ei.clD.ONLINE) && (e = ei.clD.ONLINE);
                          } else null != a && (e = eI.A.getStatus(a));
                          return {
                              status: e,
                              activities: null != a ? eI.A.getActivities(a) : null,
                              applicationStream: null != a ? ey.A.getAnyStreamForUser(a) : null,
                              isMobile: null != a && eI.A.isMobileOnline(a),
                              isVR: null != a && eI.A.isVROnline(a),
                          };
                      },
                      [t, a],
                  ),
                  { voiceChannel: o } = (0, O.Ay)({ userId: a }),
                  u = (0, ea.r)({ user: l }),
                  c = (0, f.bG)(
                      [eM.default, eE.A],
                      () =>
                          t.isMultiUserDM()
                              ? et.default
                                    .keys(eE.A.getTypingUsers(t.id))
                                    .some((e) => e !== eM.default.getCurrentUser()?.id)
                              : null != l && eE.A.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eF, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === ei.clD.ONLINE ? ei.clD.ONLINE : void 0,
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
