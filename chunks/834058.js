n.d(t, { ls: () => eF, z9: () => eH, w_: () => eL, Ay: () => eW, th: () => eV });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a);
if (588245 != n.j) var u = n(561028);
var c = n(562708);
if (588245 != n.j) var d = n(837381);
var f = n(172218),
    m = n(612324),
    A = n(607399),
    g = n(17928);
if (588245 != n.j) var N = n(3026);
var v = n(97808);
if (588245 != n.j) var p = n(939249);
if (588245 != n.j) var h = n(866665);
if (588245 != n.j) var j = n(821609);
if (588245 != n.j) var x = n(366605);
if (588245 != n.j) var C = n(952270);
if (588245 != n.j) var y = n(428678);
var _ = n(661531),
    I = n(549254);
if (588245 != n.j) var E = n(445529);
if (588245 != n.j) var R = n(778712);
if (588245 != n.j) var S = n(192308);
if (588245 != n.j) var T = n(834730);
if (588245 != n.j) var D = n(789645);
var M = n(308528),
    b = n(442433),
    G = n(765671),
    w = n(657043),
    U = n(960076),
    O = n(397244),
    L = n(714114),
    P = n(394871),
    k = n(709066),
    B = n(262295),
    z = n(620982),
    F = n(343328),
    H = n(963027),
    V = n(571694),
    W = n(47167);
if (588245 != n.j) var Y = n(858899);
var K = n(148494),
    X = n(976860),
    Q = n(330001),
    J = n(536637),
    $ = n.n(J),
    q = n(74114),
    Z = n(232835),
    ee = n(994500),
    et = n(58703),
    en = n(935208),
    ei = n(746080),
    el = n(652215),
    er = n(381941),
    es = n(105292),
    ea = n(449582),
    eo = n(351952),
    eu = n(88686),
    ec = n(214881);
if (588245 != n.j) var ed = n(559106);
var ef = n(351278);
let em =
    588245 != n.j
        ? function (e) {
              let { className: t, focusProps: n, ref: l, ...r } = e;
              return (0, i.jsx)(ed.vN, { ...n, children: (0, i.jsx)("li", { className: s()(t, ef.k), ...r, ref: l }) });
          }
        : null;
var eA = n(824994),
    eg = n(922301),
    eN = n(660184),
    ev = n(3322),
    ep = n(954376),
    eh = n(534400),
    ej = n(693879);
let ex = (0, n(945810).mj)({
    name: "2026-10-gdm-duration-timer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function eC(e) {
    let { callMessageId: t, className: n } = e,
        r = ex.useConfig({ location: "PrivateChannelCallDuration" }).enabled,
        s = l.useMemo(() => ({ start: en.default.extractTimestamp(t) }), [t]);
    return r
        ? (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(ej.z, { textColor: "text-feedback-positive", entry: s }),
          })
        : null;
}
var ey = n(897898),
    e_ = n(854627),
    eI = n(616356),
    eE = n(470710),
    eR = n(290863),
    eS = n(573163),
    eT = n(309010),
    eD = n(741961),
    eM = n(543465),
    eb = n(287809),
    eG = n(19575),
    ew = n(763097);
let eU = eG.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eO = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function eL(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, visibleElementRef: r, ...a } = e,
        o = (0, eo.K)(t),
        u = (0, w.BX)("SideButton");
    return (0, i.jsx)(p.D, {
        className: s()(ew.b, { [ew.DQ]: null != t, [ew.by]: l }),
        style: o,
        ...a,
        focusProps: u ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: r,
            className: s()(ew.b3, { [ew.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: s()(ew.ut, { [ew.Uq]: null != t }),
            }),
        }),
    });
}
function eP(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: ew.KQ,
        children: (0, i.jsx)(h.m, {
            text: es.intl.formatToPlainString(es.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(j.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: es.intl.string(es.t.pVlP58),
            }),
        }),
    });
}
function ek() {
    return (0, i.jsx)(x.t, { size: "xs", color: "currentColor", className: ew.wB });
}
function eB() {
    return (0, i.jsx)(C.EyeSlashIcon, { size: "xs", color: "currentColor", className: ew.wB });
}
function ez() {
    return (0, i.jsx)(y.K, { size: "xs", color: "currentColor", className: ew.wB });
}
function eF(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: r,
            hoverGradientStart: s,
            hoverGradientMiddle: a,
            hoverGradientEnd: o,
        } = e,
        u = l.useMemo(
            () =>
                null != s && null != a && null != o
                    ? {
                          Color_GradientCenter: s,
                          Color_InnerRing: a ?? _.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
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
            [n, s, a, o],
        );
    return (0, i.jsx)(I.U, { eventTargetRef: t, className: ew.a1, dataBinding: { ...u, DimmerWidth: (r ?? 0) + 32 } });
}
function eH(e) {
    let {
            route: t,
            selected: n,
            icon: r,
            iconClassName: a,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: f,
            onClick: g,
            className: N,
            role: v,
            "aria-posinset": p,
            "aria-setsize": h,
            listItemRef: j,
            showHoverGradient: x = !1,
            nitroHoverGradient: C = !1,
            hoverGradientStart: y,
            hoverGradientMiddle: _,
            hoverGradientEnd: I,
            ...R
        } = e,
        { width: S, ref: T } = (0, G.Ay)(),
        D = l.useRef(null),
        M = l.useRef(null),
        b = (0, m.A)(j, D);
    return (0, i.jsx)(em, {
        className: s()(ew.Ix, { [ew.Ij]: A.Fr }, N),
        onClick: g,
        role: v,
        focusProps: { ...eO, focusTarget: M, ringTarget: D },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: b,
        children: (0, i.jsxs)(E.H, {
            as: "div",
            selected: n,
            className: s()(o, ew.bG, ew.$J, { [ew.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(eF, {
                        eventTargetRef: D,
                        isNitro: C,
                        contentWidth: S,
                        hoverGradientStart: y,
                        hoverGradientMiddle: _,
                        hoverGradientEnd: I,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: f },
                    className: ew.nf,
                    innerRef: M,
                    ...R,
                    children: [
                        (0, i.jsx)(B.A, {
                            ref: x ? T : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(r, {
                                size: "refresh_sm",
                                className: s()(ew.e_, a),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ew.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function eV(e) {
    let {
            channel: t,
            selected: r = !1,
            user: a,
            activities: A,
            applicationStream: v,
            voiceChannel: p,
            isTyping: h,
            status: j,
            isMobile: x,
            isVR: C,
            nameplate: y,
            ref: _,
            "aria-posinset": I,
            "aria-setsize": G,
        } = e,
        [w, L] = l.useState(!1),
        [J, ea] = l.useState(!1),
        [eo, ed] = l.useState(!1),
        ef = l.useRef(null),
        [ej, ex] = l.useState(!1),
        eI = (0, f.K)(
            l.useCallback((e) => {
                ex(e);
            }, []),
        ),
        eR = l.useRef(null),
        eD = _ ?? eR,
        eb = (0, m.A)(eD, eI),
        {
            avatarSrc: eG,
            avatarDecorationSrc: eF,
            eventHandlers: eH,
        } = (0, e_.A)({ userId: a?.id, size: R._3.SIZE_32, animateOnHover: !(r || w || J || eo) }),
        eV = t.isMultiUserDM(),
        eW = t.isSystemDM(),
        eY = !eV && !eW && t.type === el.rbe.DM,
        eK = eY && a?.primaryGuild != null,
        eX = (0, g.bG)([eM.Ay], () => eM.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eQ = (0, g.bG)([eM.Ay], () => eM.Ay.isMessagesFavorite(t.id)),
        { ignored: eJ, blocked: e$ } = (0, g.cf)([ee.A], () => ({
            ignored: ee.A.isIgnored(t.getRecipientId()),
            blocked: ee.A.isBlocked(t.getRecipientId()),
        })),
        eq = eY && eJ,
        eZ = eY && e$,
        e0 = (eX || eq || eZ) && !(r || w),
        e2 = (0, g.bG)([eS.Ay], () => eS.Ay.getMentionCount(t.id) > 0),
        e8 = (0, W.Ay)(t),
        e1 = (0, g.bG)(
            [eE.A, eT.Ay],
            () => (eT.Ay.getVoiceChannelId() === t.id && eE.A.isCallActive(t.id) ? eE.A.getMessageId(t.id) : null),
            [t.id],
        ),
        e5 = l.useRef(null),
        e9 = null != y && (r || w || eo);
    function e3() {
        L(!0);
    }
    function e4() {
        L(!1);
    }
    function e6() {
        ea(!0);
    }
    function e7() {
        ea(!1);
    }
    function te(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, r, n));
    }
    function tt() {
        M.A.preload(el.ME, t.id);
    }
    function tn(e) {
        e.stopPropagation();
    }
    function ti(e) {
        e.target === e.currentTarget && ef.current?.click();
    }
    function tl(e) {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        (ed(!0),
            t.isMultiUserDM()
                ? (0, b.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("926132"),
                              n.e("893190"),
                              n.e("393336"),
                              n.e("146652"),
                              n.e("391763"),
                              n.e("638221"),
                              n.e("955557"),
                              n.e("482861"),
                              n.e("130674"),
                              n.e("947502"),
                              n.e("979630"),
                              n.e("965789"),
                              n.e("190889"),
                              n.e("61129"),
                              n.e("983525"),
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
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: r });
                      },
                      { impressionName: l, noBlurEvent: !0, onClose: () => ed(!1) },
                  )
                : (0, b.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("339715"),
                              n.e("205035"),
                              n.e("790484"),
                              n.e("147119"),
                              n.e("403382"),
                              n.e("819113"),
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
                              n.e("638221"),
                              n.e("571210"),
                              n.e("955557"),
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
                              n.e("682337"),
                              n.e("454625"),
                              n.e("235313"),
                              n.e("843719"),
                              n.e("371133"),
                              n.e("41991"),
                              n.e("130674"),
                              n.e("959669"),
                              n.e("715038"),
                              n.e("947502"),
                              n.e("436564"),
                              n.e("245996"),
                              n.e("252229"),
                              n.e("680986"),
                              n.e("700792"),
                              n.e("979630"),
                              n.e("592822"),
                              n.e("529422"),
                              n.e("823427"),
                              n.e("965789"),
                              n.e("190889"),
                              n.e("242204"),
                              n.e("856753"),
                              n.e("61129"),
                              n.e("983525"),
                              n.e("307059"),
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
                          return (n) => (0, i.jsx)(e, { ...n, user: a, channel: t, channelSelected: r });
                      },
                      { impressionName: l, onClose: () => ed(!1) },
                  ));
    }
    function tr(e) {
        (e.preventDefault(), e.stopPropagation());
        let l = es.intl.formatToPlainString(es.t.hJ5Ap4, { name: e8 }),
            r = es.intl.format(es.t.SSIVOu, { name: e8 });
        (t.isManaged() &&
            ((l = es.intl.formatToPlainString(es.t.hVGjEW, { name: e8 })),
            (r = es.intl.format(es.t.IK1Qvs, { name: e8 }))),
            (0, S.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("446215"), n.e("137803")]).then(n.bind(n, 925785));
                return (t) => (0, i.jsx)(e, { title: l, body: r, onSubmit: te, ...t });
            }));
    }
    let ts = (0, i.jsx)(eN.A, {
            userName: e8,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: w || r || eo ? eg.G.ANIMATED : eg.G.PLAIN,
            loop: w,
            boldFontOpacity: 0.9,
        }),
        ta = eK
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ts,
                      (0, i.jsx)(eh.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(ew.fc, { [ew.Y_]: e0 }),
                      }),
                  ],
              })
            : ts,
        to = l.useRef(null),
        tu = (0, eA.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: tc, isOngoingCall: td } = (0, z.A)(t.id),
        tf = [
            (0, H.Ay)({ channel: t, unread: e2, isIncomingCall: tc, isOngoingCall: td, ignored: eq, blocked: eZ }),
            (0, H.r2)({ channel: t, muted: eX, userStatus: j, isFavorite: eQ }),
        ]
            .filter(Boolean)
            .join(", "),
        tm = (0, g.bG)([eS.Ay], () => eS.Ay.lastMessageId(t.id)),
        { waveShouldShow: tA, wavePressed: tg } = (function (e, t) {
            let n,
                i,
                r,
                s,
                a,
                o,
                u,
                c,
                d,
                f,
                [m, A] = l.useState(!1),
                N = l.useCallback(async () => {
                    if (!m) {
                        (A(!0),
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, X.pX)(el.BVt.CHANNEL(el.ME, e.id)));
                        try {
                            await K.A.sendStickers(e.id, ["749054660769218631"], "", { location: er.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok ||
                                429 !== e.status ||
                                (0, Y.P0)({ text: es.intl.string(es.t.Whhv4w), variant: "critical" });
                        }
                        A(!1);
                    }
                }, [e.id, m]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (r = (0, g.bG)([ee.A], () => null != i && ee.A.isFriend(i))),
                    (s = (0, g.bG)([ee.A], () => null != i && ee.A.isIgnored(i))),
                    (a = (0, g.bG)([Z.A], () => {
                        let t = Z.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ei.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, g.bG)([Z.A], () => Z.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = en.default.extractTimestamp(e.id)),
                    (d = (0, et.v0)($()(), $()(c), 18144e5)),
                    (f = (0, q.l)(e.id)),
                    n && r && !s && (o || null == t || a) && !u && d && null == f),
                wavePressed: N,
            };
        })(t, tm);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsxs)(em, {
                className: s()(ew.Ix, ew.dm),
                role: n,
                focusProps: { ...eO, focusTarget: ef, ringTarget: eD },
                ref: eb,
                onMouseEnter: e3,
                onMouseLeave: e4,
                onMouseDown: tt,
                onFocus: e6,
                onBlur: e7,
                onContextMenu: tl,
                "aria-setsize": G,
                "aria-posinset": I,
                children: [
                    e2 ? (0, i.jsx)("div", { className: s()(ew.dM, { [ew.SU]: e0 }) }) : null,
                    (0, i.jsxs)(E.H, {
                        className: s()(ew.bG, { [ew.Q2]: r || eo }),
                        as: "div",
                        onClick: ti,
                        muted: e0,
                        selected: r,
                        children: [
                            (0, i.jsx)(ec.A, {
                                nameplate: e9 ? y : void 0,
                                selected: r,
                                hovered: w,
                                content: to,
                                placement: eu.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: ef,
                                to: el.BVt.CHANNEL(el.ME, t.id),
                                className: s()(ew.nf, ew.Zi),
                                "aria-label": tf,
                                onAuxClick: (e) => (0, ey.A)(e, t),
                                ...l,
                                children: (0, i.jsx)(B.A, {
                                    ref: to,
                                    avatar: (function () {
                                        let e = R._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(ep.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: h,
                                                    status: j,
                                                });
                                            else
                                                return (0, i.jsx)(eU, {
                                                    ...eH,
                                                    src: (0, V.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: h ? el.clD.ONLINE : j,
                                                    isTyping: h,
                                                });
                                        o()(
                                            null != a,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            a.isSystemUser() || (n = (0, U.A)(A) ? el.clD.STREAMING : j),
                                            (0, i.jsx)(eU, {
                                                ...eH,
                                                size: R._3.SIZE_32,
                                                src: eG,
                                                avatarDecoration: eF,
                                                status: n,
                                                isMobile: x,
                                                isVR: C,
                                                isTyping: h,
                                                "aria-label": a.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: e2 && !e0,
                                    muted: e0,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(T.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: ew.W$,
                                              children: (0, F.A)(t.id)
                                                  ? es.intl.string(es.t.FL5T01)
                                                  : es.intl.string(es.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(T.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: ew.W$,
                                                children: es.intl.format(es.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, O.A)({
                                                  activities: A,
                                                  status: j,
                                                  applicationStream: v,
                                                  voiceChannel: p,
                                              })
                                            ? (0, i.jsx)(P.A, {
                                                  user: a,
                                                  activities: A,
                                                  voiceChannel: p,
                                                  applicationStream: v,
                                                  animateEmoji: w || J || eo,
                                                  textClassName: ew.XD,
                                                  iconClassName: e0 ? ew.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: s()(ew.uN, { [ew.e8]: tu }), children: ta }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(k.A, { className: ew.G$, type: k.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: tu,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(ew._q, { [ew.EY]: e9 }),
                                children: [
                                    eZ ? (0, i.jsx)(ez, {}) : eq ? (0, i.jsx)(eB, {}) : eQ ? (0, i.jsx)(ek, {}) : null,
                                    null != e1 && (0, i.jsx)(eC, { callMessageId: e1, className: ew.R4 }),
                                    tA && null != e8
                                        ? (0, i.jsx)(eP, { channelName: e8, onClick: tg, showNameplate: e9 })
                                        : null,
                                    tA
                                        ? null
                                        : (0, i.jsx)(eL, {
                                              icon: D.P,
                                              "aria-label": eV
                                                  ? es.intl.string(es.t["26C4oi"])
                                                  : es.intl.string(es.t.jsvgc3),
                                              onClick: eV ? tr : te,
                                              onMouseDown: tn,
                                              nameplate: y,
                                              visibleElementRef: e5,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    r && (0, i.jsx)(ev.A, { targetElementRef: eD, channelType: t.type, isTargetInViewport: ej }),
                ],
            });
        },
    });
}
let eW =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  r = (0, g.bG)([eb.default], () => eb.default.getUser(t.getRecipientId())),
                  s = r?.id,
                  a = (0, g.cf)(
                      [eR.A, eI.A],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              let n = eR.A.getState().statuses;
                              t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                          } else null != s && (e = eR.A.getStatus(s));
                          return {
                              status: e,
                              activities: null != s ? eR.A.getActivities(s) : null,
                              applicationStream: null != s ? eI.A.getAnyStreamForUser(s) : null,
                              isMobile: null != s && eR.A.isMobileOnline(s),
                              isVR: null != s && eR.A.isVROnline(s),
                          };
                      },
                      [t, s],
                  ),
                  { voiceChannel: o } = (0, L.Ay)({ userId: s }),
                  u = (0, ea.r)({ user: r }),
                  c = (0, g.bG)(
                      [eb.default, eD.A],
                      () =>
                          t.isMultiUserDM()
                              ? en.default
                                    .keys(eD.A.getTypingUsers(t.id))
                                    .some((e) => e !== eb.default.getCurrentUser()?.id)
                              : null != r && eD.A.isTyping(t.id, t.getRecipientId()),
                      [t, r],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eV, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eV, {
                        channel: t,
                        selected: n,
                        user: r,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...l,
                        ...a,
                    });
          }
        : null;
