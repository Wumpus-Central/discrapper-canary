t.d(n, { A: () => li });
var l = t(627968),
    i = t(64700),
    a = t(503698),
    r = t.n(a),
    s = t(17928),
    o = t(778712),
    d = t(866323),
    c = t(364522),
    u = t(695366),
    g = t(935462),
    p = t(140735),
    f = t(707554),
    m = t(231723),
    x = t(241524),
    h = t(770178),
    A = t(80682),
    v = t(793574),
    b = t(688810),
    j = t(480335),
    _ = t(31956),
    I = t(361628),
    C = t(744808),
    N = t(282389),
    y = t(915089),
    E = t(713517),
    P = t(645507),
    R = t(922590),
    k = t(821269),
    S = t(93246),
    T = t(594832),
    O = t(994500),
    D = t(351906),
    L = t(562153),
    w = t(474090),
    M = t(183555),
    G = t(841595),
    B = t(591179),
    U = t(999291),
    F = t(101928),
    V = t(837529),
    z = t(346713),
    H = t(573648),
    W = t(941314),
    K = t(429913),
    Y = t(321078),
    q = t(403362),
    X = t(484509),
    $ = t(920601),
    J = t(919395),
    Z = t(101058),
    Q = t(836602),
    ee = t(996988),
    en = t(985253);
let et = (0, o.FT)(en.T[ee.d.MODAL_V2].avatarSize),
    el = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
var ei = t(576622);
async function ea(e, n) {
    let t = new Image();
    await new Promise((n, l) => {
        (t.onload = () => n()), (t.onerror = () => l(Error(`Failed to load image: ${e}`))), (t.src = e);
    });
    let l = null != n ? Math.min(1, n / Math.max(t.naturalWidth, t.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(t.naturalWidth * l)), (i.height = Math.round(t.naturalHeight * l));
    let a = i.getContext("2d");
    if (null == a) throw Error("Canvas 2d context unavailable");
    return a.drawImage(t, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
var er = t(716804),
    es = t(679492),
    eo = t(718019),
    ed = t(694720),
    ec = t(915614),
    eu = t(308244),
    eg = t(744753),
    ep = t(559506),
    ef = t(361311),
    em = t(886891),
    ex = t(439053),
    eh = t(743987),
    eA = t(312381),
    ev = t(501193),
    eb = t(383448),
    ej = t(946356),
    e_ = t(983495),
    eI = t(280645),
    eC = t(109112),
    eN = t(939249),
    ey = t(834730),
    eE = t(730134),
    eP = t(169869),
    eR = t(837057),
    ek = t(310419),
    eS = t(773669),
    eT = t(889227),
    eO = t(967198),
    eD = t(488995),
    eL = t(985018),
    ew = t(985176);
function eM(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: a } = e,
        r = (0, eP.VW)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: ew.k_,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(eE.A, { user: new eT.A(n.application.bot), size: o._3.SIZE_16 })
                        : (0, l.jsx)(eC._, { color: "currentColor", size: "sm" }),
            }),
            (0, l.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, l.jsxs)(eN.D, {
                        className: ew.OB,
                        onClick: () => {
                            i?.(),
                                (0, eR.transitionToGlobalDiscovery)({
                                    tab: eD.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: ek.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: a,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, l.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, l.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, l.jsx)(ey.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: ew.nk,
                                children: eL.intl.format(eL.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != r && r.length > 0 ? (0, l.jsx)("div", { className: ew.yu, children: r }) : null,
                ],
            }),
        ],
    });
}
function eG(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: a } = (0, M.NJ)(),
        o = (0, s.bG)([eS.default], () => eS.default.locale),
        d = (0, s.bG)([eO.A], () => eO.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: r()(ew.kL, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: ew.FI,
                          children: (0, l.jsx)(eM, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  a({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}
var eB = t(982168),
    eU = t(722868),
    eF = t(822775),
    eV = t(597770),
    ez = t(751188),
    eH = t(746174),
    eW = t(993401),
    eK = t(518477),
    eY = t(652215);
function eq(e) {
    let { user: n, onClose: t } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        r = (0, eH.j)("UserProfileGiftButton"),
        { openGiftModal: s } = (0, ez.$)({
            giftRecipient: n,
            analyticsLocations: a,
            analyticsObject: {
                page: eY.liQ.USER_PROFILE,
                section: eY.JJy.USER_PROFILE,
                object: eY.ZSU.BUTTON_ICON,
                objectType: eY.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        o = i.useCallback(() => {
            s(), t?.();
        }, [s, t]);
    return r
        ? (0, l.jsx)(eW.q3, { action: eK.pt.GIFT, icon: eV.o, tooltipText: eL.intl.string(eL.t.PEjaCx), onClick: o })
        : null;
}
var eX = t(982985),
    e$ = t(700174),
    eJ = t(34188),
    eZ = t(693477),
    eQ = t(207803),
    e0 = t(485745);
function e1(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        t = (0, e0.A)(),
        l = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            l.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                n && t ? (0, eQ.VQ)() : l.current(...i);
            },
            [n, t],
        )
    );
}
function e9(e) {
    let { onClose: n, ...t } = e,
        { analyticsLocations: i, newestAnalyticsLocation: a } = (0, b.Ay)(),
        r = e1(() => {
            (0, eZ.Cz)({ analyticsLocations: i, analyticsSource: a }), n?.();
        });
    return (0, l.jsx)(eW.q3, {
        action: "VISIT_SHOP",
        icon: eJ.U,
        tooltipText: eL.intl.string(eL.t.b2d0N0),
        onClick: r,
        ...t,
    });
}
var e3 = t(573355),
    e8 = t(102951);
function e7(e) {
    let {
            user: n,
            currentUser: t,
            guildId: i,
            originGuildId: a,
            channelId: r,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        c = (0, B.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: u } = (0, b.Ay)(),
        g = (0, eU.A)({ user: n, guildId: a, channelId: r, displayProfile: s, onClose: d }),
        {
            gameFriends: p,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: m,
        } = (0, e8.J)({ userId: n.id }),
        x = p.length > 0 || f || m;
    return o === eY.eA$.BLOCKED
        ? null
        : n.id === t.id
          ? c
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eX.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, l.jsx)(e9, { onClose: d }),
                        (0, l.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eF.A, { user: n, guildId: i, onClose: d }),
                        (0, l.jsx)(e9, { onClose: d }),
                        (0, l.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eX.e, { userId: n.id, onClose: eB.A.popAll, autoFocus: !0 }),
                      (0, l.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === eY.eA$.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eX.e, { userId: n.id, onClose: eB.A.popAll, autoFocus: !0 }),
                        (0, l.jsx)(eq, { user: n }),
                        (0, l.jsx)(e$.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === eY.eA$.FRIEND || o === eY.eA$.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eX.e, { userId: n.id, onClose: eB.A.popAll, autoFocus: !0 }),
                          (0, l.jsx)(e3.Ef, { user: n, relationshipType: o, analyticsLocation: u }),
                          (0, l.jsx)(eq, { user: n }),
                          (0, l.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eY.eA$.NONE && x
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(eX.e, { userId: n.id, onClose: eB.A.popAll, autoFocus: !0 }),
                            (0, l.jsx)(e3.ES, {
                                user: n,
                                analyticsLocation: u,
                                gameFriends: p,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: m,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, l.jsx)(eq, { user: n }),
                            (0, l.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(e3.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: u,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(eX.l, { userId: n.id, onClose: eB.A.popAll, variant: "secondary" }),
                            (0, l.jsx)(eq, { user: n }),
                            (0, l.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var e2 = t(408278),
    e5 = t(789645);
function e6(e) {
    let { isCurrentUser: n, onClose: t } = e,
        i = e1(t, n);
    return (0, l.jsx)(e2.K, {
        "aria-label": eL.intl.string(eL.t.cpT0Cq),
        icon: e5.P,
        onClick: i,
        variant: "secondary",
        size: "sm",
    });
}
var e4 = t(990078),
    ne = t(349288),
    nn = t(509434),
    nt = t(58149),
    nl = t(681819),
    ni = t(370480),
    na = t(486020),
    nr = t(76843),
    ns = t(783419);
function no(e) {
    let { account: n, locale: t, userId: i } = e,
        a = n.metadata ?? {},
        r = (0, ni.An)(a[ns.pK.CREATED_AT], t),
        s = H.A.get((0, nl.ML)(n.type));
    return (0, l.jsx)(nc, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, l.jsx)(e4.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, l.jsx)(ey.E, { variant: "text-sm/normal", className: ew.GW, children: n.name }),
                  })
                : (0, l.jsx)(ne.Anchor, {
                      href: e,
                      className: ew.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${n.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (t) => {
                          (0, nt.zV)(eY.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, nr.h)({ href: e, trusted: s?.type !== eY.fg2.DOMAIN }, t);
                      },
                      children: (0, l.jsxs)("div", {
                          className: ew.vi,
                          children: [
                              (0, l.jsx)(e4.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, l.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      className: ew.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, l.jsx)(nn.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            n.type === eY.fg2.REDDIT
                ? (0, eP.xE)(a)
                : n.type === eY.fg2.STEAM
                  ? (0, eP.dy)(a)
                  : n.type === eY.fg2.BLUESKY || n.type === eY.fg2.MASTODON || n.type === eY.fg2.TWITTER
                    ? (0, eP.ED)(a)
                    : n.type === eY.fg2.PAYPAL
                      ? (0, eP.gZ)(a)
                      : n.type === eY.fg2.EBAY
                        ? (0, eP.ub)(a)
                        : n.type === eY.fg2.TIKTOK
                          ? (0, eP.HU)(a)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: r,
    });
}
function nd(e) {
    let { identityWithApplication: n } = e,
        { identity: t, application: i } = n;
    if (null == t.profile || null == t.profile.username || null == i) return null;
    let a = na.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, l.jsx)(nc, {
        renderAccountName: () =>
            (0, l.jsx)(e4.m, {
                overflowOnly: !0,
                text: t.profile.username,
                children: (0, l.jsx)(ey.E, {
                    variant: "text-sm/normal",
                    className: ew.GW,
                    children: t.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: a,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function nc(e) {
    let {
        renderAccountName: n,
        renderMetadata: t,
        platformName: i,
        platformIcon: a,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, l.jsxs)("li", {
        className: ew.FI,
        children: [
            (0, l.jsx)(e4.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, l.jsx)("div", {
                    className: ew.k_,
                    children: (0, l.jsx)("img", {
                        alt: eL.intl.formatToPlainString(eL.t.rtm15P, { name: i }),
                        className: r()(ew.tV, o ? ew.sN : null),
                        src: a,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, l.jsx)(ey.E, {
                                    variant: "text-xs/normal",
                                    children: eL.intl.format(eL.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: ew.yu, children: t() }),
                ],
            }),
        ],
    });
}
function nu(e) {
    let { connections: n, applicationIdentities: t, userId: i, className: a } = e,
        o = (0, s.bG)([eS.default], () => eS.default.locale);
    return 0 === n.length && 0 === t.length
        ? null
        : (0, l.jsxs)("ul", {
              className: r()(ew.kL, a),
              children: [
                  n.map((e) => (0, l.jsx)(no, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  t?.map((e) => (0, l.jsx)(nd, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var ng = t(200219),
    np = t(661531),
    nf = t(320448),
    nm = t(534514),
    nx = t(927578),
    nh = t(487233),
    nA = t(230635),
    nv = t(317097),
    nb = t(602853),
    nj = t(922016),
    n_ = t(508274),
    nI = t(654107),
    nC = t(84540),
    nN = t(930349);
function ny(e) {
    let { user: n, disabled: t = !1 } = e,
        a = i.useRef(null),
        r = (0, nb.r)(np.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nI.rh)(n.getAvatarURL(null, 80), r, !1),
        { pendingAccentColor: d, savedAccentColor: c } = (0, s.cf)([Q.A, G.A], () => ({
            pendingAccentColor: Q.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: G.A.getUserProfile(n.id)?.accentColor,
        })),
        u = d ?? c ?? (0, nv.LX)(o[0] ?? r),
        g = i.useCallback((e) => (0, nC.p)({ accentColor: e }), []);
    return (0, l.jsx)(nj.Y, {
        targetElementRef: a,
        renderPopout: (e) => (0, l.jsx)(n_.VN, { ...e, value: u, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, l.jsx)(nN.NW, {
                ...e,
                variant: "bar",
                buttonRef: a,
                disabled: t,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                children: (0, l.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, nv.Hl)(u) },
                }),
            }),
    });
}
var nE = t(450373),
    nP = t(252732),
    nR = t(287809),
    nk = t(339984),
    nS = t(111242);
function nT(e) {
    let { backgroundColor: n } = e;
    return (0, l.jsx)("div", { className: nS.o, style: { backgroundColor: n } });
}
function nO(e) {
    let { src: n } = e;
    return (0, l.jsx)("img", { src: n, alt: "", className: nS._ });
}
function nD(e) {
    let { userId: n, guildId: t, disabled: i } = e,
        { newestAnalyticsLocation: a } = (0, b.Ay)(),
        r = null != t,
        o = (0, U.Ay)(n, t),
        d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(t ?? void 0).pendingBanner),
        c = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.banner != null),
        u = (0, s.bG)([G.A], () =>
            null != t ? G.A.getGuildMemberProfile(n, t)?.banner : G.A.getUserProfile(n)?.banner,
        ),
        g = null === d,
        p = void 0 !== d,
        f = r && (o?.isUsingGuildMemberBanner() ?? !1),
        m = g && r ? c : (0, J.Ac)(d, o?.banner),
        x = r ? f : o?.banner != null,
        h = p ? null != d : x,
        A = o?.getPreviewBanner(g && r && !f ? void 0 : d, !1, 296) ?? void 0,
        v = (0, nb.r)(np.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = o?.primaryColor ?? (0, nv.LX)(v),
        { hex: _ } = (0, nE.A)(j),
        I = () =>
            (0, nP.XD)({
                uploadType: nk.HL.BANNER,
                analyticsSource: a,
                guildId: t ?? void 0,
                stackingBehavior: "stack",
            }),
        C = null != A ? (0, l.jsx)(nO, { src: A }) : (0, l.jsx)(nT, { backgroundColor: _ });
    if (!m)
        return (0, l.jsx)(nN.kL, {
            variant: "square",
            onClick: I,
            accessibleLabel: eL.intl.string(eL.t.N0bC3P),
            disabled: i,
            children: C,
        });
    let N = r && c,
        y = h
            ? {
                  onClick: () => (0, nP.rM)(null, u, (e) => (0, nC.p)({ guildId: t ?? void 0, banner: e })),
                  type: N ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(N ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0;
    return (0, l.jsx)(nN.NW, {
        variant: "square",
        onClick: I,
        accessibleLabel: eL.intl.string(eL.t.N0bC3P),
        deleteButtonConfig: y,
        disabled: i,
        children: C,
    });
}
var nL = t(473219),
    nw = t(33851),
    nM = t.n(nw),
    nG = t(298387);
function nB(e) {
    let { color: n, suggestedColors: t, disabled: a, ariaLabel: r, onSelect: s } = e,
        o = i.useRef(null),
        d = (0, nv.Hl)(n);
    return (0, l.jsx)(nj.Y, {
        targetElementRef: o,
        renderPopout: (e) => (0, l.jsx)(n_.VN, { ...e, value: n, onChange: s, suggestedColors: t, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...t } = e;
            return (0, l.jsx)(eN.D, {
                ...t,
                innerRef: o,
                className: nG.Dh,
                onClick: a ? void 0 : n,
                "aria-label": r,
                "aria-disabled": a,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: nG.Hy, style: { backgroundColor: d } }),
            });
        },
    });
}
function nU(e) {
    let {
            primaryColor: n,
            secondaryColor: t,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: a,
            suggestedColors: r,
            disabled: s = !1,
        } = e,
        o = (0, nv.Hl)(n),
        d = (0, nv.Hl)(t),
        c = `linear-gradient(to bottom, ${o}, ${d})`,
        u = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: o }),
        g = eL.intl.formatToPlainString(eL.t.xOnm4z, { colorLabel: d });
    return (0, l.jsx)(nN.Yt, {
        variant: "square",
        disabled: s,
        children: (0, l.jsxs)("div", {
            className: nG.D7,
            style: { background: c },
            children: [
                (0, l.jsx)(nB, { color: n, suggestedColors: r, ariaLabel: u, onSelect: i, disabled: s }),
                (0, l.jsx)(nB, { color: t, suggestedColors: r, ariaLabel: g, onSelect: a, disabled: s }),
            ],
        }),
    });
}
function nF(e) {
    let { user: n, guildId: t, disabled: a = !1 } = e,
        r = (0, U.Ay)(n.id, t),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([Q.A], () => {
            let e = Q.A.getPendingChanges(t ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        c = (0, Z.V7)({ userId: n.id, image: d }),
        { primaryColor: u, secondaryColor: g } = (0, F.A)({
            user: n,
            displayProfile: r,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        p = (0, nb.r)(np.A.unsafe_rawColors.PRIMARY_530).hex(),
        f = null != c ? c : n.getAvatarURL(t ?? void 0, 80),
        m = (0, nI.rh)(f, p, !1),
        x = i.useCallback(
            (e) => {
                let n = nM()(e, r?.themeColors);
                (0, nC.p)({ guildId: t ?? void 0, themeColors: n ? void 0 : e });
            },
            [r?.themeColors, t],
        );
    return null == u || null == g
        ? null
        : (0, l.jsx)(nU, {
              primaryColor: u,
              secondaryColor: g,
              onSelectPrimaryColor: (e) => {
                  e !== u && x([e, g]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== g && x([u, e]);
              },
              suggestedColors: m,
              disabled: a,
          });
}
var nV = t(315629),
    nz = t(821609),
    nH = t(403581),
    nW = t(835071),
    nK = t(235684);
function nY() {
    let e = () => {
        (0, nW.K)({ stackingBehavior: "stack" });
    };
    return (0, l.jsxs)(nV.h, {
        color: "nitro-pink",
        className: nK.k,
        children: [
            (0, l.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eL.intl.format(eL.t.TmfgI2, { onClick: e }),
            }),
            (0, l.jsx)(nz.$, {
                variant: "expressive",
                size: "md",
                icon: nH.t,
                text: eL.intl.string(eL.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
t(667532);
var nq = t(111159),
    nX = t(783878),
    n$ = t(548118),
    nJ = t(71393),
    nZ = t(711014),
    nQ = t(308696);
let n0 = "MAIN_PROFILE";
function n1(e) {
    let { selectedGuildId: n, onChange: t, loading: a } = e,
        r = (0, s.bG)([nZ.Ay], () => nZ.Ay.getFlattenedGuildIds()),
        o = (0, s.bG)([nJ.A], () => nJ.A.getGuilds()),
        d = i.useMemo(() => {
            let e = r
                .map((e) => {
                    let n = o[e];
                    return null == n
                        ? null
                        : {
                              id: n.id,
                              label: n.name,
                              value: n.id,
                              leading: (0, l.jsx)(n$.Ay, {
                                  className: nQ.$,
                                  guild: n,
                                  size: n$.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(q.Vq);
            return (
                e.unshift({
                    id: n0,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: n0,
                    leading: (0, l.jsx)(nq.p, { size: "sm", color: np.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [r, o]),
        c = i.useCallback(
            (e) => {
                t(e === n0 ? null : e);
            },
            [t],
        );
    return (0, l.jsx)(nX.Z, {
        label: eL.intl.string(eL.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: c,
        value: n ?? n0,
        options: d,
        loading: a,
    });
}
var n9 = t(809467);
let n3 = "profile-modal-editing-panel",
    n8 = "profile-modal-editing-panel-heading";
function n7(e) {
    let { onClick: n, className: t, innerRef: i } = e;
    return (0, l.jsx)(eN.D, {
        innerRef: i,
        "aria-label": eL.intl.string(eL.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": n3,
        className: r()(n9.eg, t),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, l.jsx)(ng.N, { size: "sm", color: np.A.colors.ICON_STRONG }),
    });
}
function n2(e) {
    let { onClick: n, className: t, buttonRef: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(e2.K, {
            buttonRef: i,
            "aria-label": eL.intl.string(eL.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": n3,
            icon: ng.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function n5(e) {
    let { onClick: n, innerRef: t } = e;
    return (0, l.jsxs)(eN.D, {
        innerRef: t,
        className: n9.cS,
        "aria-label": eL.intl.string(eL.t.X6NklS),
        onClick: n,
        "aria-controls": n3,
        "aria-expanded": !0,
        children: [
            (0, l.jsx)(nf._, { size: "md", color: "currentColor" }),
            (0, l.jsx)(nf._, { size: "md", color: "currentColor" }),
        ],
    });
}
function n6(e) {
    let {
            user: n,
            selectedGuildId: t,
            onSelectGuildId: i,
            isLoading: a = !1,
            onClose: s,
            className: o,
            collapseButtonRef: d,
        } = e,
        u = e1(i),
        g = null != t,
        m = nx.Ay.canUsePremiumProfileCustomization(n);
    return (0, l.jsxs)("aside", {
        id: n3,
        "aria-labelledby": n8,
        className: r()(n9.nd, o),
        "aria-busy": a,
        children: [
            (0, l.jsx)(p.A, { children: (0, l.jsx)(f.H, { id: n8, children: eL.intl.string(eL.t["L+ch00"]) }) }),
            (0, l.jsxs)("div", {
                className: n9.wx,
                children: [
                    (0, l.jsx)(n5, { innerRef: d, onClick: s }),
                    (0, l.jsx)(n1, { selectedGuildId: t ?? null, onChange: u, loading: a }),
                ],
            }),
            (0, l.jsx)(f.F, {
                children: (0, l.jsxs)(c.Ip, {
                    className: n9.XG,
                    fade: !0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: n9.Os,
                            children: [
                                (0, l.jsx)(nm.D, {
                                    variant: "text-sm/medium",
                                    className: n9.AM,
                                    children: eL.intl.string(eL.t.x5CoXR),
                                }),
                                (0, l.jsx)(nL.A, { user: n, guildId: t, disabled: a || (g && !m) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: n9.Os,
                            children: [
                                (0, l.jsx)(nm.D, {
                                    variant: "text-sm/medium",
                                    className: n9.AM,
                                    children: eL.intl.string(eL.t["50Nwpc"]),
                                }),
                                (0, l.jsx)(nh.A, { user: n, guildId: t, disabled: a || (g && !m) }),
                                (0, l.jsx)(nA.A, { user: n, guildId: t, disabled: a || (g && !m) }),
                            ],
                        }),
                        m &&
                            (0, l.jsxs)("div", {
                                className: n9.Os,
                                children: [
                                    (0, l.jsx)(nm.D, {
                                        variant: "text-sm/medium",
                                        className: n9.AM,
                                        children: eL.intl.string(eL.t.Zenogr),
                                    }),
                                    (0, l.jsx)(nF, { user: n, guildId: t, disabled: a }),
                                    (0, l.jsx)(nD, { userId: n.id, guildId: t, disabled: a }),
                                ],
                            }),
                        !m &&
                            (0, l.jsxs)("div", {
                                className: n9.Os,
                                children: [
                                    (0, l.jsx)(nm.D, {
                                        variant: "text-sm/medium",
                                        className: n9.AM,
                                        children: eL.intl.string(eL.t["/X3fkf"]),
                                    }),
                                    (0, l.jsx)(ny, { user: n, disabled: a || g }),
                                ],
                            }),
                    ],
                }),
            }),
            !m && (0, l.jsx)(nY, {}),
        ],
    });
}
var n4 = t(982599),
    te = t(756634),
    tn = t(83013),
    tt = t(77085);
function tl(e) {
    let { userId: n } = e,
        t = (0, er.g)(),
        { trackUserProfileAction: i } = (0, M.NJ)();
    return (0, l.jsx)(tn.A, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: eK.bk.NOTE,
        children: (0, l.jsx)(te.A, {
            userId: n,
            className: tt.N,
            autoFocus: t === eK.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ti = t(289873),
    ta = t(778599);
function tr(e) {
    let { isVisible: n, showLoadingSpinner: t, className: i } = e;
    return (0, l.jsx)("div", {
        className: r()(ta.f, n && ta.z, i),
        children: t && (0, l.jsx)(ti.y, { type: ti.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var ts = t(568602),
    to = t(625494);
function td(e) {
    let { children: n } = e,
        [t, a] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                a(!0),
                    setTimeout(() => {
                        a(!1);
                    }, 300);
            };
            return (
                to._.subscribe(eY.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    to._.unsubscribe(eY.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, l.jsx)(ts.b, { isShaking: t, intensity: 1.4, children: n })
    );
}
var tc = t(515054),
    tu = t(487514),
    tg = t(933832),
    tp = t(972213),
    tf = t(97483),
    tm = t(765178),
    tx = t(775602),
    th = t(606758),
    tA = t(707238),
    tv = t(861173);
let tb = {
        [eK.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, l.jsx)(tg.A, { size: "sm", color: np.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eK.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, l.jsx)(tg.A, { size: "sm", color: np.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eK.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, l.jsx)(tp.d, { size: "sm", color: np.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: tf.Ck.FAILURE,
        },
        [eK.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, l.jsx)(tp.d, { size: "sm", color: np.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: tf.Ck.FAILURE,
        },
    },
    tj = (e) => {
        let { message: n, icon: t, type: i } = e;
        return (0, l.jsxs)("div", {
            className: r()(tv.oR, tA.oR),
            "data-type": i,
            children: [
                (0, l.jsx)("div", { className: tA.RC, children: t }),
                (0, l.jsx)(ey.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    t_ = (e) => {
        let { className: n } = e,
            t = (0, th.fu)(),
            a = (0, s.bG)([tx.A], () => tx.A.useReducedMotion),
            [o, c] = i.useState(!1),
            [u, g] = i.useState(null);
        i.useEffect(() => {
            null !== t ? (c(!0), g(tb[t]), tm.O.announce(tb[t].message)) : c(!1);
        }, [t]);
        let p = (0, d.p)(
            o,
            {
                from: { transform: a ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: a ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, th.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, th.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, l.jsx)(l.Fragment, {
                children: p(
                    (e, t) =>
                        t &&
                        null !== u &&
                        (0, l.jsx)(tu.animated.div, {
                            className: r()(n, tA.Jt),
                            style: e,
                            children: (0, l.jsx)(tj, { ...u }),
                        }),
                ),
            })
        );
    };
var tI = t(878555),
    tC = t(193885),
    tN = t(259065),
    ty = t(696451),
    tE = t(621466),
    tP = t(219869),
    tR = t(292666),
    tk = t(539396);
function tS(e) {
    let { text: n, htmlFor: t } = e;
    return (0, l.jsx)(p.A, { tag: "label", htmlFor: t, children: n });
}
function tT(e) {
    let {
            inputId: n,
            inputRef: t,
            label: a,
            value: r,
            onChange: s,
            onCommit: o,
            onCancel: d,
            onBlur: c,
            maxLength: u,
            placeholder: g,
            trailing: p,
        } = e,
        f = i.useCallback(
            (e) => {
                "Enter" === e.key
                    ? (e.preventDefault(), o())
                    : "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), d());
            },
            [o, d],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tS, { text: a, htmlFor: n }),
            (0, l.jsx)(tR.k, {
                id: n,
                inputRef: t,
                value: r,
                onChange: s,
                onBlur: c,
                onKeyDown: f,
                maxLength: u,
                placeholder: g,
                trailing: p,
            }),
        ],
    });
}
function tO(e) {
    let { tooltip: n, ...t } = e,
        i = (0, l.jsx)("div", {
            className: tk.L7,
            children: (0, l.jsx)(tP.T, { ...t, size: "sm", variant: "input-accessory" }),
        });
    return null == n ? i : (0, l.jsx)(e4.m, { text: n, ariaHidden: !0, children: i });
}
function tD(e) {
    let {
            isEditing: n,
            preview: t,
            placeholder: a,
            input: s,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: c,
            trailing: u,
            className: g,
            wrapperRef: p,
            onBlur: f,
            onKeyDown: m,
        } = e,
        x = i.useRef(null),
        h = i.useId(),
        A = null == t,
        v = (0, l.jsxs)("div", {
            ref: x,
            className: tk.LL,
            onClick: c,
            children: [
                A
                    ? (0, l.jsx)(ey.E, {
                          id: h,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: tk.qf,
                          children: a,
                      })
                    : t,
                (0, l.jsx)(eN.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": A ? h : void 0,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), c();
                    },
                    focusProps: { ringTarget: x },
                }),
                null != u && (0, l.jsx)("div", { className: tk.lD, children: (0, l.jsx)(tO, { ...u }) }),
            ],
        });
    return (0, l.jsx)("div", {
        ref: p,
        className: r()(tk.kL, g),
        onBlur: f,
        onKeyDown: m,
        children: (0, l.jsx)(
            "div",
            { className: tk.qG, children: n ? s : (0, l.jsx)("div", { className: tk.VH, children: v }) },
            n ? "editing" : "preview",
        ),
    });
}
var tL = t(35783);
function tw(e) {
    let n,
        t,
        a,
        r,
        o,
        d,
        c,
        u,
        g,
        { user: p, displayProfile: f } = e,
        { analyticsLocations: m } = (0, b.Ay)(),
        x = f?.guildId != null,
        h = f?.guildId ?? void 0,
        A = nx.Ay.canUsePremiumProfileCustomization(p),
        {
            value: v,
            previewValue: j,
            onCommit: _,
        } = ((n = f?.guildId ?? null),
        (t = f?.guildId != null),
        (a = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.globalName ?? null)),
        (r = (0, s.bG)([ty.Ay], () => (null != n ? (ty.Ay.getMember(n, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n).pendingNickname)),
        (c = t ? (d ?? r ?? "") : (o ?? a ?? "")),
        (u = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : a),
        {
            value: c,
            previewValue: t ? (u(void 0 !== d ? d : r) ?? u(a)) : (u(g) ?? p.username),
            onCommit: i.useCallback(
                (e) => {
                    t
                        ? (0, nC.p)({ nickname: e.trim(), guildId: f?.guildId ?? void 0 })
                        : (0, nC.p)({ globalName: e.trim() });
                },
                [t, f?.guildId],
            ),
        }),
        {
            isEditing: I,
            previewProps: C,
            inputProps: N,
            handleCommit: y,
        } = (function (e, n) {
            let [t, l] = i.useState("idle"),
                [a, r] = i.useState(e),
                o = "editing" === t,
                d = (0, s.bG)([tx.A], () => tx.A.useReducedMotion),
                c = i.useRef(null),
                u = i.useRef(null),
                g = i.useRef(null),
                p = i.useRef(!1),
                f = i.useId(),
                m = i.useCallback(() => {
                    r(e), l("editing");
                }, [e]),
                x = i.useCallback(() => {
                    n(a), l("done");
                }, [a, n]),
                h = i.useCallback(() => {
                    l("done");
                }, []);
            i.useEffect(() => {
                "done" === t && (p.current && c.current?.focus({ preventScroll: !0 }), (p.current = !1));
            }, [t]),
                i.useEffect(() => {
                    o &&
                        null != u.current &&
                        (g.current?.scrollIntoView({ block: "nearest", behavior: d ? "auto" : "smooth" }),
                        u.current.focus({ preventScroll: !0 }),
                        u.current.setSelectionRange(u.current.value.length, u.current.value.length));
                }, [o, d]);
            let A = i.useCallback(
                    (e) => {
                        !o ||
                            (null != g.current && (0, tE.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) ||
                            x();
                    },
                    [o, x],
                ),
                v = i.useCallback(
                    (e) => {
                        o && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (p.current = !0), h());
                    },
                    [o, h],
                );
            return {
                isEditing: o,
                editedValue: a,
                setEditedValue: r,
                editButtonRef: c,
                inputRef: u,
                inputId: f,
                handleStartEditing: m,
                handleCommit: x,
                handleCancel: h,
                previewProps: {
                    isEditing: o,
                    editButtonRef: c,
                    onStartEditing: m,
                    wrapperRef: g,
                    onBlur: A,
                    onKeyDown: v,
                },
                inputProps: {
                    inputId: f,
                    inputRef: u,
                    value: a,
                    onChange: r,
                    onCommit: () => {
                        (p.current = !0), x();
                    },
                    onCancel: () => {
                        (p.current = !0), h();
                    },
                },
            };
        })(v, _),
        E = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        P = eL.intl.string(x ? eL.t.mq6Cg9 : eL.t.XuZU7A),
        R = x ? (p.globalName ?? p.username) : p.username,
        k = eL.intl.string(x ? eL.t["g7OSZ/"] : eL.t.kyfzzc),
        S = i.useRef(null),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    I && y(),
                    (0, tN.L)({ analyticsLocations: m, guildId: h, stackingBehavior: "stack", returnRef: S });
            },
            [I, y, m, h],
        ),
        O = {
            icon: tC.V,
            tooltip: eL.intl.string(eL.t.lqKKI2),
            "aria-label": eL.intl.string(eL.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: S,
        },
        D = A ? O : void 0,
        L =
            null != j
                ? (0, l.jsx)(tI.c$, {
                      user: p,
                      guildId: h,
                      displayName: j,
                      size: "lg",
                      pendingDisplayNameStyles: E,
                      className: tL.d,
                  })
                : null;
    return (0, l.jsx)(tD, {
        ...C,
        preview: L,
        placeholder: R,
        editButtonAriaLabel: k,
        trailing: D,
        input: (0, l.jsx)(tT, { ...N, label: P, maxLength: eY.zzC, placeholder: R, trailing: D }),
    });
}
function tM(e) {
    let { user: n, displayProfile: t, nickname: i, trailing: a, onClose: r, allowEditing: s } = e;
    return s
        ? (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(tw, { displayProfile: t, user: n }),
                  (0, l.jsx)(tI.M5, { user: n, pronouns: t?.pronouns, trailing: a, onClose: r }),
              ],
          })
        : (0, l.jsx)(tI.Ay, {
              user: n,
              guildId: t?.guildId ?? void 0,
              displayName: i,
              displayNameSize: "lg",
              pronouns: t?.pronouns,
              trailing: a,
              onClose: r,
          });
}
t(321073);
var tG = t(97808),
    tB = t(550079),
    tU = t(477782),
    tF = t(22231),
    tV = t(601255),
    tz = t(562819),
    tH = t(19575),
    tW = t(106106),
    tK = t(338165);
let tY = tH.Ay.getEnableHardwareAcceleration() ? tG.Js : tG.eu;
function tq(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(tB.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, l.jsx)(tU.rX, { children: t }),
    });
}
function tX(e) {
    let { user: n, guildId: t } = e,
        { avatarProps: a, eventHandlers: o } = (0, eo.V)(e),
        [d, c] = i.useState(!1),
        u = i.useRef(null),
        g = i.useCallback(() => c(!1), []),
        p = (function (e) {
            let { user: n, guildId: t, onClose: a } = e,
                { newestAnalyticsLocation: r, analyticsLocations: o } = (0, b.Ay)(),
                d = null != t,
                c = (0, s.bG)([ty.Ay], () => (null != t ? ty.Ay.getMember(t, n.id) : null)),
                u = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(t ?? void 0).pendingAvatar),
                g = d ? c?.avatar : n.avatar,
                p = (0, J.z5)(u, g),
                f = d && null != n.avatar,
                m = nx.Ay.canUsePremiumProfileCustomization(n),
                x = m || null == t,
                h = m || null == t,
                A = (0, s.bG)([nJ.A], () => (null != t ? nJ.A.getGuild(t) : null)),
                v = (0, J.a4)({ user: n }),
                j = (0, J.a4)({ user: n, guildId: t ?? void 0 }),
                { pendingAvatarDecoration: _ } = (0, J.CP)(t ?? void 0),
                I = void 0 !== _,
                C = null != (0, tV.A)(I ? _ : j) && (I ? null != _ : null != j),
                N = d && null != v,
                y = i.useCallback(() => {
                    a(),
                        (0, nP.XD)({
                            uploadType: nk.HL.AVATAR,
                            analyticsSource: r,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [a, r, t]),
                E = i.useCallback(() => {
                    a(), (0, tz.L)({ analyticsLocations: o, guild: A ?? void 0, stackingBehavior: "stack" });
                }, [a, o, A]),
                P = i.useCallback(() => {
                    a(),
                        (0, nP.rM)(null, g, (e) => (0, nC.p)({ guildId: t ?? void 0, avatar: e })),
                        (0, J.WU)(f ? "reset" : "remove");
                }, [a, t, g, f]),
                R = i.useCallback(() => {
                    a(), (0, nC.p)({ guildId: t ?? void 0, avatarDecoration: null });
                }, [a, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, l.jsx)(
                                tU.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: y },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, l.jsx)(
                                tU.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.BVcYCx), action: E },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        p &&
                        e.push(
                            f
                                ? (0, l.jsx)(
                                      tU.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: P,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, l.jsx)(
                                      tU.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.twB3fz),
                                          action: P,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    h &&
                        C &&
                        e.push(
                            N
                                ? (0, l.jsx)(
                                      tU.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.JvcEcq),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, l.jsx)(
                                      tU.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.OrokWm),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [f, x, h, N, p, C, y, E, P, R]);
        })({ user: n, guildId: t, onClose: g });
    return 0 === p.length
        ? (0, l.jsx)(eo.A, { ...e })
        : (0, l.jsxs)("div", {
              ...o,
              className: r()(tW.my, tW.vk, tK.kL, { [tK.MO]: d }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || c(!0);
              },
              children: [
                  (0, l.jsx)(tY, { ...a, imageClassName: r()(tW.Lw, tK.HU) }),
                  (0, l.jsx)(nj.Y, {
                      targetElementRef: u,
                      shouldShow: d,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, l.jsx)(tq, { ...e, items: p, onMenuClose: g }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: u,
                              className: tK.r9,
                              children: (0, l.jsx)(e2.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tF.R,
                                  "aria-label": eL.intl.string(eL.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), c((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var t$ = t(617061),
    tJ = t(976726);
function tZ(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(tB.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, l.jsx)(tU.rX, { children: t }),
    });
}
function tQ(e) {
    let { user: n, guildId: t } = e,
        [a, o] = i.useState(!1),
        d = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        u = (function (e) {
            let { user: n, guildId: t, onClose: a } = e,
                { newestAnalyticsLocation: r, analyticsLocations: o } = (0, b.Ay)(),
                d = (0, J.N2)({ user: n, guildId: t ?? void 0 }),
                c = nx.Ay.canUsePremiumProfileCustomization(n),
                u = c || null == t,
                g = null != t,
                { pendingBanner: p, pendingProfileEffect: f } = (0, s.bG)([Q.A], () =>
                    Q.A.getPendingChanges(t ?? void 0),
                ),
                m = (0, s.bG)([G.A], () =>
                    null != t ? G.A.getGuildMemberProfile(n.id, t)?.banner : G.A.getUserProfile(n.id)?.banner,
                ),
                x = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([G.A], () => G.A.getUserProfile(n.id)?.profileEffect != null),
                A = (0, J.Ac)(p, m),
                v = g && x,
                j = g && h,
                _ = void 0 === f ? null != d : null != f,
                I = i.useCallback(() => {
                    a(),
                        (0, nP.XD)({
                            uploadType: nk.HL.BANNER,
                            analyticsSource: r,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [a, r, t]),
                C = i.useCallback(() => {
                    a(),
                        (0, t$.W)({
                            analyticsLocations: o,
                            guild: null != t ? (nJ.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [a, o, t, d]),
                N = i.useCallback(() => {
                    a(), (0, nP.rM)(null, m, (e) => (0, nC.p)({ guildId: t ?? void 0, banner: e }));
                }, [a, t, m]),
                y = i.useCallback(() => {
                    a(), (0, nC.p)({ guildId: t ?? void 0, profileEffect: null });
                }, [a, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    c &&
                        e.push(
                            (0, l.jsx)(
                                tU.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: I },
                                "change-banner",
                            ),
                        ),
                    u &&
                        e.push(
                            (0, l.jsx)(
                                tU.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/dRfCf"]), action: C },
                                "change-effect",
                            ),
                        ),
                    c &&
                        A &&
                        e.push(
                            v
                                ? (0, l.jsx)(
                                      tU.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: N,
                                      },
                                      "reset-banner",
                                  )
                                : (0, l.jsx)(
                                      tU.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.tT9n7D),
                                          action: N,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    u &&
                        _ &&
                        e.push(
                            j
                                ? (0, l.jsx)(
                                      tU.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["SQy/Po"]),
                                          action: y,
                                      },
                                      "reset-effect",
                                  )
                                : (0, l.jsx)(
                                      tU.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.uMuafO),
                                          action: y,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    e
                );
            }, [v, c, u, j, A, _, I, C, N, y]);
        })({ user: n, guildId: t, onClose: c });
    return 0 === u.length
        ? (0, l.jsx)(ec.A, { ...e })
        : (0, l.jsxs)("div", {
              className: r()(tJ.kL, { [tJ.MO]: a }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, l.jsx)(ec.A, { ...e, className: tJ.Pr }),
                  (0, l.jsx)(nj.Y, {
                      targetElementRef: d,
                      shouldShow: a,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, l.jsx)(tZ, { ...e, items: u, onMenuClose: c }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: d,
                              className: tJ.r9,
                              children: (0, l.jsx)(e2.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tF.R,
                                  "aria-label": eL.intl.string(eL.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var t0 = t(777480),
    t1 = t(107563),
    t9 = t(570287);
t(938796);
var t3 = t(913453),
    t8 = t(667049),
    t7 = t(837531),
    t2 = t(186272),
    t5 = t(645625);
let t6 = (e) => e * (2 - e),
    t4 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function le(e) {
    let { displayProfile: n, pendingBanner: t } = e,
        a = (0, V.Nx)(),
        [r, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == t || a) return;
            let e = !1;
            return (
                ea(t, 1024)
                    .then((n) => {
                        e || s(n);
                    })
                    .catch(() => {
                        e || s(t);
                    }),
                () => {
                    (e = !0), s(void 0);
                }
            );
        }, [a, t]),
        a)
    )
        return null;
    let o = null != t ? (r ?? null) : n?.getPreviewBanner(t, !1, 1024);
    return null == o
        ? null
        : (0, l.jsx)("div", { className: t5.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function ln(e) {
    let { displayProfile: n, profileEffectOverride: t, isHovering: i } = e,
        a = void 0 !== t ? t : n?.profileEffect;
    return null == a ? null : (0, l.jsx)(j.A, { skuId: a.skuId, isHovering: i });
}
function lt(e) {
    let {
            user: n,
            currentUser: t,
            guildId: a,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: p,
            hasEntered: f,
            customStatusPrompt: m,
            onClose: x,
            avatarDecorationOverride: A,
            avatarOverride: v,
            bannerOverride: b,
            profileEffectOverride: j,
            allowEditing: _ = !1,
            isLoading: I = !1,
        } = e,
        C = n.id === t.id,
        N = i.useRef(null),
        { isHoveringOrFocusing: y } = (0, E.A)(N),
        [T, L] = i.useState(),
        M = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? L("compact-xs") : n <= 380 ? L("compact-sm") : L(void 0);
        }, []);
    (0, h.g)(N, M, [], { fireOnMount: !0 });
    let G = null != T ? t4[T] : void 0,
        B = i.useMemo(() => m ?? (0, P.A)(), [m]),
        { relationshipType: U, originApplicationId: F } = (0, s.cf)([O.A], () => ({
            relationshipType: O.A.getRelationshipType(n.id),
            originApplicationId: O.A.getOriginApplicationId(n.id),
        })),
        V = (0, s.bG)([D.A], () => D.A.hidePersonalInformation),
        $ = (0, k.q)({ userId: n.id }),
        J = (0, R.fi)(n.id),
        { appIdentities: Z, connections: Q } = (function (e) {
            let { filteredAppIdentities: n } = (0, Y.A)(e),
                t = (0, X.A)(e),
                l = W.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
                a = i.useMemo(() => new Set(l.enabled ? (n?.map((e) => e.application_id) ?? []) : []), [n, l.enabled]),
                r = (0, K.A)([...a]).filter(q.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        n
                            .map((e) => ({ identity: e, application: r.find((n) => n.id === e.application_id) }))
                            .filter((e) => {
                                let { application: n } = e;
                                return null != n;
                            }),
                    [n, r],
                ),
                connections: i.useMemo(
                    () =>
                        l.enabled
                            ? t.filter((e) => {
                                  let n = H.A.get(e.type);
                                  return n?.replacedBy == null || !a.has(n.replacedBy);
                              })
                            : t,
                    [t, a, l.enabled],
                ),
            };
        })(n.id),
        en = (0, z.A)(n.id),
        et = _ ? tQ : ec.A,
        el = _ ? tX : eo.A;
    return (0, l.jsxs)("main", {
        className: r()(t5.profile, null != T && t5[T]),
        ref: N,
        "aria-busy": I,
        children: [
            (0, l.jsxs)("div", {
                className: t5.profileHeader,
                children: [
                    (0, l.jsx)(et, {
                        user: n,
                        displayProfile: g,
                        guildId: a,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: G,
                        pendingBanner: b,
                    }),
                    (0, l.jsx)(ex.A, { userId: n.id, onClose: x, className: t5.interactionToast }),
                    (0, l.jsx)(el, {
                        user: n,
                        displayProfile: g,
                        guildId: a,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: G,
                        avatarDecorationOverride: A,
                        avatarOverride: v,
                    }),
                    (0, l.jsx)(e_.A, {
                        user: n,
                        guildId: a,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        hasEntered: f,
                        prompt: C ? B : null,
                    }),
                ],
            }),
            (0, l.jsxs)(c.Ip, {
                fade: !0,
                className: t5.profileBody,
                children: [
                    (0, l.jsx)(ep.A, { userId: n.id }),
                    (0, l.jsx)(tM, {
                        user: n,
                        displayProfile: g,
                        nickname: p,
                        trailing: (0, l.jsx)(ed.A, { displayProfile: g, themeType: ee.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: _,
                    }),
                    U === eY.eA$.PENDING_INCOMING &&
                        (0, l.jsx)(ej.A.Overlay, {
                            className: t5.profileOverlay,
                            children: (0, l.jsx)(em.A, {
                                user: n,
                                applicationId: F,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: t5.profileBanner,
                            }),
                        }),
                    J.map((e) => {
                        let { applicationId: t } = e;
                        return (0, l.jsx)(
                            ej.A.Overlay,
                            {
                                className: t5.profileOverlay,
                                children: (0, l.jsx)(em.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: t5.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    n.isProvisional &&
                        (0, l.jsx)(ej.A.Overlay, {
                            className: t5.profileOverlay,
                            children: (0, l.jsx)(tn.A, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, l.jsx)(u.E, { size: "xs", color: "currentColor" }),
                                className: t5.profileBanner,
                                children: (0, l.jsx)(S.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, l.jsx)(eb.A, { user: n, className: t5.profileBanner }),
                    g?.private &&
                        (0, l.jsx)(ej.A.Overlay, {
                            className: t5.profileOverlay,
                            children: (0, l.jsx)(ev.A, { username: p }),
                        }),
                    (0, l.jsx)("div", {
                        className: t5.profileButtons,
                        children: (0, l.jsx)(e7, {
                            user: n,
                            currentUser: t,
                            guildId: a,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: U,
                            onClose: x,
                        }),
                    }),
                    C && (0, l.jsx)(eg.A, { isPremiumUser: (0, w.ki)(t), onInteraction: x }),
                    !V && (0, l.jsx)(eu.E, { userBio: g?.bio, setLineClamp: !1 }),
                    $.length > 0 &&
                        (0, l.jsx)(tn.A, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, l.jsx)(ef.A, { applicationIds: $ }),
                        }),
                    (0, l.jsx)(tn.A, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, l.jsx)(eh.A, { userId: n.id, guildId: g?.guildId, tooltipDelay: eK.In }),
                    }),
                    g?.guildId != null &&
                        (0, l.jsx)(eI.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: t5.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (Q.length > 0 || Z.length > 0) &&
                        (0, l.jsx)(tn.A, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: eK.bk.CONNECTIONS,
                            children: (0, l.jsx)(nu, {
                                applicationIdentities: Z,
                                connections: Q,
                                userId: n.id,
                                className: t5.profileAppConnections,
                            }),
                        }),
                    en.length > 0 &&
                        (0, l.jsx)(tn.A, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: eK.bk.APPS,
                            children: (0, l.jsx)(eG, {
                                applicationRoleConnections: en,
                                onClose: x,
                                className: t5.profileAppConnections,
                            }),
                        }),
                    (0, l.jsx)(tl, { userId: n.id }),
                ],
            }),
            (0, l.jsx)(ln, { displayProfile: g, profileEffectOverride: j, isHovering: y }),
        ],
    });
}
function ll(e) {
    let { user: n, displayProfile: t, pendingThemeColors: i, children: a } = e,
        {
            theme: r,
            primaryColor: s,
            secondaryColor: o,
        } = (0, F.A)({ user: n, displayProfile: t, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, $.A)({
            theme: r,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, l.jsx)("div", { className: c, style: d, children: a });
}
function li(e) {
    let {
            user: n,
            currentUser: t,
            guildId: a,
            originGuildId: o,
            channelId: c,
            messageId: u,
            roleId: h,
            sessionId: j,
            initialTabSection: E,
            initialScrollTarget: P,
            transitionState: R,
            customStatusPrompt: k,
            openedAt: S,
            onClose: D,
            sourceAnalyticsLocations: w = [],
            themeContainerClassName: F,
        } = e,
        V = n.id === t.id,
        {
            guildId: z,
            pendingGuildId: H,
            isLoading: W,
            selectUserProfile: K,
        } = (function (e) {
            let { userId: n, initialGuildId: t } = e,
                [l, a] = i.useState(t),
                [r, s] = i.useState(t),
                o = i.useRef(r),
                d = i.useCallback((e) => {
                    a(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ei.A)(n, void 0, {
                            type: "modal",
                            guildId: l,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (s(l), (o.current = l));
                            },
                            () => {
                                e || a(o.current);
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [l, n]),
                { guildId: r, pendingGuildId: l, isLoading: l !== r, selectUserProfile: d }
            );
        })({ userId: n.id, initialGuildId: a }),
        Y = i.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
    (0, A.Eq)(Y, "UserProfileModalV2");
    let q = (0, B.X)("UserProfileModalV2"),
        X = V && q,
        {
            pendingThemeColors: $,
            avatarDecorationOverride: en,
            avatarOverride: ea,
            bannerOverride: eo,
            profileEffectOverride: ed,
        } = (function (e) {
            let { user: n, guildId: t, allowEditingInModal: l } = e;
            return (0, s.cf)([Q.A], () => {
                if (!l) return el;
                let {
                    pendingThemeColors: e,
                    pendingAvatarDecoration: i,
                    pendingAvatar: a,
                    pendingBanner: r,
                    pendingProfileEffect: s,
                } = Q.A.getPendingChanges(t);
                return {
                    pendingThemeColors: e,
                    avatarDecorationOverride:
                        void 0 === i
                            ? void 0
                            : (0, J.lw)({ userValue: n.avatarDecoration, pendingValue: i, guildId: t }),
                    avatarOverride: (0, Z.V7)({ userId: n.id, image: a, size: et }),
                    bannerOverride: r,
                    profileEffectOverride: s,
                };
            }, [n, t, l]);
        })({ user: n, allowEditingInModal: X, guildId: z }),
        {
            isExpanded: ec,
            isAnimating: eu,
            transition: eg,
            canShowExpand: ep,
            handleExpand: ef,
            handleCollapse: em,
            refs: { expandIconButtonRef: ex, expandTabButtonRef: eh, collapseButtonRef: ev },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [t, l] = i.useState(!1),
                a = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: t6 },
                    onRest: () => l(!1),
                }),
                r = (0, x.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                c = i.useRef(null),
                u = i.useRef(null),
                g = i.useCallback(() => {
                    (u.current = "collapse"), l(!0), n(!0);
                }, []),
                p = i.useCallback(() => {
                    (u.current = "expand"), l(!0), n(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!t) {
                        if ("collapse" === u.current && e) (u.current = null), c.current?.focus();
                        else if ("expand" === u.current && !e) {
                            u.current = null;
                            let e = r ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, t, r]),
                {
                    isExpanded: e,
                    isAnimating: t,
                    transition: a,
                    canShowExpand: !e && !t,
                    handleExpand: g,
                    handleCollapse: p,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: c },
                }
            );
        })(),
        eb = X && ep,
        { defaultWishlistId: e_ } = (0, s.cf)([G.A], () => ({ defaultWishlistId: G.A.getFirstWishlistId(n.id) }));
    (0, T.fw)({ wishlistId: e_, userId: n.id });
    let eI = (0, es.fC)(),
        eC = W || null != eI.interactionType,
        eN = (function (e) {
            let n,
                t,
                l,
                { user: i, currentUser: a } = e,
                { mutualFriendsCount: r, mutualGuilds: o } = (0, t3.A)(i),
                d = o?.length,
                c =
                    ((n = (0, s.bG)([nR.default], () => nR.default.getCurrentUser())),
                    (t = (0, s.bG)([G.A], () => G.A.getUserProfile(i.id))),
                    (l =
                        t?.bio === "" &&
                        t?.pronouns === "" &&
                        t?.banner === void 0 &&
                        t?.accentColor === void 0 &&
                        t?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (t?.badges == null || t?.badges?.length === 0)),
                    n?.id !== i.id && !l),
                u = (0, t8.A)(i.id),
                g = (0, t9.A)(i.id),
                p = [],
                f = i.id === a?.id,
                m = G.A.getFirstWishlistId(i.id),
                x = null != m,
                h = x ? G.A.getWishlistSettings(i.id, m) : null,
                A = (x ? t1.A.getWishlistItems(m) : []).length > 0,
                v = u.length > 0;
            (f || v) && p.push({ text: eL.intl.string(eL.t.laViwx), section: eK.RP.WIDGETS }),
                p.push({ text: eL.intl.string(eL.t.chq59f), section: eK.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = O.A.isFriend(i.id),
                _ = h?.visibility === t0.a.PUBLIC;
            return (
                (f || (!f && A && _ && g && (!b || (b && j)))) &&
                    p.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: eK.RP.WISHLIST }),
                i.id !== a?.id &&
                    c &&
                    (p.push({ text: (0, t7.A)(r), section: eK.RP.MUTUAL_FRIENDS }),
                    p.push({ text: (0, t2.A)(d), section: eK.RP.MUTUAL_GUILDS })),
                p
            );
        })({ user: n, currentUser: t }),
        { analyticsLocations: ey } = (0, b.Ay)([...w, v.A.USER_PROFILE_MODAL_V2]),
        eE = (0, M.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: j,
            guildId: z,
            channelId: c,
            messageId: u,
            roleId: h,
        }),
        eP = (0, U.Ay)(n.id, z),
        eR = (0, I.A)(eP?.profileFrame?.skuId, "UserProfileModalV2"),
        ek = (0, N.A)(eP?.profileFrame?.skuId);
    (0, _.A)({ skuId: eP?.profileFrame?.skuId, openedAt: S, context: eE, analyticsLocations: ey });
    let eS = L.Ay.useName(eP?.guildId, c, n),
        eT = (0, y.GV)(),
        eO = eL.intl.format(eL.t.KRe1Fk, { name: eS });
    return (0, l.jsx)(b.f5, {
        value: ey,
        children: (0, l.jsx)(M.of, {
            value: eE,
            openedAt: S,
            fetchStartedAt: eP?.fetchStartedAt,
            fetchEndedAt: eP?.fetchEndedAt,
            isLoaded: eP?.isLoaded,
            children: (0, l.jsx)(es.Hl, {
                value: eI,
                children: (0, l.jsx)(er.N, {
                    value: P,
                    children: (0, l.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: t5.root,
                        transitionState: R,
                        "aria-labelledby": eT,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsx)(td, {
                                children: (0, l.jsxs)("div", {
                                    className: r()(t5.layoutContainer, ek, {
                                        [t5.editingPanelEnabled]: X,
                                        [t5.editingPanelExpanded]: X && ec,
                                        [t5.isAnimating]: eu,
                                        [t5.hasPrivateBanner]: eP?.private === !0,
                                    }),
                                    children: [
                                        (0, l.jsxs)(ll, {
                                            user: n,
                                            displayProfile: eP,
                                            pendingThemeColors: $,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: t5.modalHeaderButtons,
                                                    children: [
                                                        (0, l.jsx)(e6, { isCurrentUser: V, onClose: D }),
                                                        (0, l.jsx)(p.A, {
                                                            children: (0, l.jsx)(f.H, { id: eT, children: eO }),
                                                        }),
                                                        X &&
                                                            (!ec || eu) &&
                                                            (0, l.jsx)(n2, {
                                                                buttonRef: ex,
                                                                onClick: ef,
                                                                className: t5.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eb &&
                                                    (0, l.jsx)(n7, {
                                                        innerRef: eh,
                                                        onClick: ef,
                                                        className: t5.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsxs)(f.F, {
                                            children: [
                                                X &&
                                                    eg((e, t) =>
                                                        t
                                                            ? (0, l.jsx)(n6, {
                                                                  className: r()(t5.editingPanel, {
                                                                      [t5.isExpanded]: ec,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: H,
                                                                  onSelectGuildId: K,
                                                                  onClose: em,
                                                                  collapseButtonRef: ev,
                                                                  isLoading: W,
                                                              })
                                                            : null,
                                                    ),
                                                (0, l.jsxs)(ej.A, {
                                                    className: r()(F, t5.profileContentContainer),
                                                    user: n,
                                                    displayProfile: eP,
                                                    themeType: ee.d.MODAL_V2,
                                                    pendingThemeColors: $,
                                                    isPrivate: eP?.private === !0,
                                                    children: [
                                                        (0, l.jsx)(le, { displayProfile: eP, pendingBanner: eo }),
                                                        eP?.private === !0 && (0, l.jsx)(eA.A, {}),
                                                        (0, l.jsx)(tr, { isVisible: eC, showLoadingSpinner: W }),
                                                        (0, l.jsx)(t_, { className: t5.toast }),
                                                        (0, l.jsxs)("div", {
                                                            className: t5.profileCard,
                                                            children: [
                                                                (0, l.jsx)(lt, {
                                                                    user: n,
                                                                    currentUser: t,
                                                                    guildId: z,
                                                                    channelId: c,
                                                                    displayProfile: eP,
                                                                    nickname: eS,
                                                                    originGuildId: o,
                                                                    hasEntered: R === m.ip.ENTERED,
                                                                    customStatusPrompt: k,
                                                                    onClose: D,
                                                                    avatarDecorationOverride: en,
                                                                    avatarOverride: ea,
                                                                    bannerOverride: eo,
                                                                    profileEffectOverride: ed,
                                                                    allowEditing: X,
                                                                    isLoading: W,
                                                                }),
                                                                null != eR &&
                                                                    (0, l.jsx)(C.A, { frame: eR, layout: "MODAL_V2" }),
                                                            ],
                                                        }),
                                                        (0, l.jsx)(tc.A, {
                                                            user: n,
                                                            currentUser: t,
                                                            displayProfile: eP,
                                                            guildId: z,
                                                            channelId: c,
                                                            items: eN,
                                                            initialSection: E,
                                                            onClose: D,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)(n4.A, { userId: n.id, guildId: z, className: t5.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
