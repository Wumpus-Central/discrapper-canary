t.d(n, { A: () => ll });
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
    _ = t(361628),
    I = t(744808),
    C = t(282389),
    N = t(915089),
    y = t(713517),
    E = t(645507),
    P = t(922590),
    R = t(821269),
    k = t(93246),
    S = t(594832),
    T = t(994500),
    O = t(351906),
    D = t(562153),
    L = t(474090),
    w = t(183555),
    M = t(841595),
    G = t(591179),
    B = t(999291),
    U = t(101928),
    F = t(837529),
    V = t(346713),
    z = t(573648),
    H = t(941314),
    W = t(429913),
    K = t(321078),
    Y = t(403362),
    q = t(484509),
    X = t(920601),
    $ = t(919395),
    J = t(101058),
    Z = t(836602),
    Q = t(996988),
    ee = t(985253);
let en = (0, o.FT)(ee.T[Q.d.MODAL_V2].avatarSize),
    et = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
var el = t(576622);
async function ei(e, n) {
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
var ea = t(716804),
    er = t(679492),
    es = t(718019),
    eo = t(694720),
    ed = t(915614),
    ec = t(308244),
    eu = t(744753),
    eg = t(559506),
    ep = t(361311),
    ef = t(886891),
    em = t(439053),
    ex = t(743987),
    eh = t(312381),
    eA = t(501193),
    ev = t(383448),
    eb = t(946356),
    ej = t(983495),
    e_ = t(280645),
    eI = t(109112),
    eC = t(939249),
    eN = t(834730),
    ey = t(730134),
    eE = t(169869),
    eP = t(837057),
    eR = t(310419),
    ek = t(773669),
    eS = t(889227),
    eT = t(967198),
    eO = t(488995),
    eD = t(985018),
    eL = t(985176);
function ew(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: a } = e,
        r = (0, eE.VW)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: eL.k_,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(ey.A, { user: new eS.A(n.application.bot), size: o._3.SIZE_16 })
                        : (0, l.jsx)(eI._, { color: "currentColor", size: "sm" }),
            }),
            (0, l.jsxs)("div", {
                className: eL.Hd,
                children: [
                    (0, l.jsxs)(eC.D, {
                        className: eL.OB,
                        onClick: () => {
                            i?.(),
                                (0, eP.transitionToGlobalDiscovery)({
                                    tab: eO.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eR.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: a,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, l.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, l.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, l.jsx)(eN.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eL.nk,
                                children: eD.intl.format(eD.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != r && r.length > 0 ? (0, l.jsx)("div", { className: eL.yu, children: r }) : null,
                ],
            }),
        ],
    });
}
function eM(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: a } = (0, w.NJ)(),
        o = (0, s.bG)([ek.default], () => ek.default.locale),
        d = (0, s.bG)([eT.A], () => eT.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: r()(eL.kL, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: eL.FI,
                          children: (0, l.jsx)(ew, {
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
var eG = t(982168),
    eB = t(722868),
    eU = t(822775),
    eF = t(597770),
    eV = t(751188),
    ez = t(746174),
    eH = t(993401),
    eW = t(518477),
    eK = t(652215);
function eY(e) {
    let { user: n, onClose: t } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        r = (0, ez.j)("UserProfileGiftButton"),
        { openGiftModal: s } = (0, eV.$)({
            giftRecipient: n,
            analyticsLocations: a,
            analyticsObject: {
                page: eK.liQ.USER_PROFILE,
                section: eK.JJy.USER_PROFILE,
                object: eK.ZSU.BUTTON_ICON,
                objectType: eK.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        o = i.useCallback(() => {
            s(), t?.();
        }, [s, t]);
    return r
        ? (0, l.jsx)(eH.q3, { action: eW.pt.GIFT, icon: eF.o, tooltipText: eD.intl.string(eD.t.PEjaCx), onClick: o })
        : null;
}
var eq = t(982985),
    eX = t(700174),
    e$ = t(34188),
    eJ = t(693477),
    eZ = t(207803),
    eQ = t(485745);
function e0(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        t = (0, eQ.A)(),
        l = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            l.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                n && t ? (0, eZ.VQ)() : l.current(...i);
            },
            [n, t],
        )
    );
}
function e1(e) {
    let { onClose: n, ...t } = e,
        { analyticsLocations: i, newestAnalyticsLocation: a } = (0, b.Ay)(),
        r = e0(() => {
            (0, eJ.Cz)({ analyticsLocations: i, analyticsSource: a }), n?.();
        });
    return (0, l.jsx)(eH.q3, {
        action: "VISIT_SHOP",
        icon: e$.U,
        tooltipText: eD.intl.string(eD.t.b2d0N0),
        onClick: r,
        ...t,
    });
}
var e9 = t(573355),
    e3 = t(102951);
function e8(e) {
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
        c = (0, G.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: u } = (0, b.Ay)(),
        g = (0, eB.A)({ user: n, guildId: a, channelId: r, displayProfile: s, onClose: d }),
        {
            gameFriends: p,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: m,
        } = (0, e3.J)({ userId: n.id }),
        x = p.length > 0 || f || m;
    return o === eK.eA$.BLOCKED
        ? null
        : n.id === t.id
          ? c
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eq.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, l.jsx)(e1, { onClose: d }),
                        (0, l.jsx)(eX.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eU.A, { user: n, guildId: i, onClose: d }),
                        (0, l.jsx)(e1, { onClose: d }),
                        (0, l.jsx)(eX.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eq.e, { userId: n.id, onClose: eG.A.popAll, autoFocus: !0 }),
                      (0, l.jsx)(eX.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === eK.eA$.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eq.e, { userId: n.id, onClose: eG.A.popAll, autoFocus: !0 }),
                        (0, l.jsx)(eY, { user: n }),
                        (0, l.jsx)(eX.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === eK.eA$.FRIEND || o === eK.eA$.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eq.e, { userId: n.id, onClose: eG.A.popAll, autoFocus: !0 }),
                          (0, l.jsx)(e9.Ef, { user: n, relationshipType: o, analyticsLocation: u }),
                          (0, l.jsx)(eY, { user: n }),
                          (0, l.jsx)(eX.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eK.eA$.NONE && x
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(eq.e, { userId: n.id, onClose: eG.A.popAll, autoFocus: !0 }),
                            (0, l.jsx)(e9.ES, {
                                user: n,
                                analyticsLocation: u,
                                gameFriends: p,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: m,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, l.jsx)(eY, { user: n }),
                            (0, l.jsx)(eX.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(e9.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: u,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(eq.l, { userId: n.id, onClose: eG.A.popAll, variant: "secondary" }),
                            (0, l.jsx)(eY, { user: n }),
                            (0, l.jsx)(eX.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var e7 = t(408278),
    e2 = t(789645);
function e5(e) {
    let { isCurrentUser: n, onClose: t } = e,
        i = e0(t, n);
    return (0, l.jsx)(e7.K, {
        "aria-label": eD.intl.string(eD.t.cpT0Cq),
        icon: e2.P,
        onClick: i,
        variant: "secondary",
        size: "sm",
    });
}
var e6 = t(990078),
    e4 = t(349288),
    ne = t(509434),
    nn = t(58149),
    nt = t(681819),
    nl = t(370480),
    ni = t(486020),
    na = t(76843),
    nr = t(783419);
function ns(e) {
    let { account: n, locale: t, userId: i } = e,
        a = n.metadata ?? {},
        r = (0, nl.An)(a[nr.pK.CREATED_AT], t),
        s = z.A.get((0, nt.ML)(n.type));
    return (0, l.jsx)(nd, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, l.jsx)(e6.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, l.jsx)(eN.E, { variant: "text-sm/normal", className: eL.GW, children: n.name }),
                  })
                : (0, l.jsx)(e4.Anchor, {
                      href: e,
                      className: eL.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${eD.intl.string(eD.t.q5jLJB)}`
                              : `${n.name}, ${eD.intl.string(eD.t.q5jLJB)}`,
                      onClick: (t) => {
                          (0, nn.zV)(eK.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, na.h)({ href: e, trusted: s?.type !== eK.fg2.DOMAIN }, t);
                      },
                      children: (0, l.jsxs)("div", {
                          className: eL.vi,
                          children: [
                              (0, l.jsx)(e6.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, l.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      className: eL.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, l.jsx)(ne.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            n.type === eK.fg2.REDDIT
                ? (0, eE.xE)(a)
                : n.type === eK.fg2.STEAM
                  ? (0, eE.dy)(a)
                  : n.type === eK.fg2.BLUESKY || n.type === eK.fg2.MASTODON || n.type === eK.fg2.TWITTER
                    ? (0, eE.ED)(a)
                    : n.type === eK.fg2.PAYPAL
                      ? (0, eE.gZ)(a)
                      : n.type === eK.fg2.EBAY
                        ? (0, eE.ub)(a)
                        : n.type === eK.fg2.TIKTOK
                          ? (0, eE.HU)(a)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: r,
    });
}
function no(e) {
    let { identityWithApplication: n } = e,
        { identity: t, application: i } = n;
    if (null == t.profile || null == t.profile.username || null == i) return null;
    let a = ni.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, l.jsx)(nd, {
        renderAccountName: () =>
            (0, l.jsx)(e6.m, {
                overflowOnly: !0,
                text: t.profile.username,
                children: (0, l.jsx)(eN.E, {
                    variant: "text-sm/normal",
                    className: eL.GW,
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
function nd(e) {
    let {
        renderAccountName: n,
        renderMetadata: t,
        platformName: i,
        platformIcon: a,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, l.jsxs)("li", {
        className: eL.FI,
        children: [
            (0, l.jsx)(e6.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, l.jsx)("div", {
                    className: eL.k_,
                    children: (0, l.jsx)("img", {
                        alt: eD.intl.formatToPlainString(eD.t.rtm15P, { name: i }),
                        className: r()(eL.tV, o ? eL.sN : null),
                        src: a,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: eL.Hd,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, l.jsx)(eN.E, {
                                    variant: "text-xs/normal",
                                    children: eD.intl.format(eD.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: eL.yu, children: t() }),
                ],
            }),
        ],
    });
}
function nc(e) {
    let { connections: n, applicationIdentities: t, userId: i, className: a } = e,
        o = (0, s.bG)([ek.default], () => ek.default.locale);
    return 0 === n.length && 0 === t.length
        ? null
        : (0, l.jsxs)("ul", {
              className: r()(eL.kL, a),
              children: [
                  n.map((e) => (0, l.jsx)(ns, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  t?.map((e) => (0, l.jsx)(no, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var nu = t(200219),
    ng = t(661531),
    np = t(320448),
    nf = t(534514),
    nm = t(927578),
    nx = t(487233),
    nh = t(230635),
    nA = t(317097),
    nv = t(602853),
    nb = t(922016),
    nj = t(508274),
    n_ = t(654107),
    nI = t(84540),
    nC = t(930349);
function nN(e) {
    let { user: n, disabled: t = !1 } = e,
        a = i.useRef(null),
        r = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, n_.rh)(n.getAvatarURL(null, 80), r, !1),
        { pendingAccentColor: d, savedAccentColor: c } = (0, s.cf)([Z.A, M.A], () => ({
            pendingAccentColor: Z.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: M.A.getUserProfile(n.id)?.accentColor,
        })),
        u = d ?? c ?? (0, nA.LX)(o[0] ?? r),
        g = i.useCallback((e) => (0, nI.p)({ accentColor: e }), []);
    return (0, l.jsx)(nb.Y, {
        targetElementRef: a,
        renderPopout: (e) => (0, l.jsx)(nj.VN, { ...e, value: u, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, l.jsx)(nC.NW, {
                ...e,
                variant: "bar",
                buttonRef: a,
                disabled: t,
                accessibleLabel: eD.intl.string(eD.t["/X3fkf"]),
                children: (0, l.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, nA.Hl)(u) },
                }),
            }),
    });
}
var ny = t(450373),
    nE = t(252732),
    nP = t(287809),
    nR = t(339984),
    nk = t(111242);
function nS(e) {
    let { backgroundColor: n } = e;
    return (0, l.jsx)("div", { className: nk.o, style: { backgroundColor: n } });
}
function nT(e) {
    let { src: n } = e;
    return (0, l.jsx)("img", { src: n, alt: "", className: nk._ });
}
function nO(e) {
    let { userId: n, guildId: t, disabled: i } = e,
        { newestAnalyticsLocation: a } = (0, b.Ay)(),
        r = null != t,
        o = (0, B.Ay)(n, t),
        d = (0, s.bG)([Z.A], () => Z.A.getPendingChanges(t ?? void 0).pendingBanner),
        c = (0, s.bG)([nP.default], () => nP.default.getCurrentUser()?.banner != null),
        u = (0, s.bG)([M.A], () =>
            null != t ? M.A.getGuildMemberProfile(n, t)?.banner : M.A.getUserProfile(n)?.banner,
        ),
        g = null === d,
        p = void 0 !== d,
        f = r && (o?.isUsingGuildMemberBanner() ?? !1),
        m = g && r ? c : (0, $.Ac)(d, o?.banner),
        x = r ? f : o?.banner != null,
        h = p ? null != d : x,
        A = o?.getPreviewBanner(g && r && !f ? void 0 : d, !1, 296) ?? void 0,
        v = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = o?.primaryColor ?? (0, nA.LX)(v),
        { hex: _ } = (0, ny.A)(j),
        I = () =>
            (0, nE.XD)({
                uploadType: nR.HL.BANNER,
                analyticsSource: a,
                guildId: t ?? void 0,
                stackingBehavior: "stack",
            }),
        C = null != A ? (0, l.jsx)(nT, { src: A }) : (0, l.jsx)(nS, { backgroundColor: _ });
    if (!m)
        return (0, l.jsx)(nC.kL, {
            variant: "square",
            onClick: I,
            accessibleLabel: eD.intl.string(eD.t.N0bC3P),
            disabled: i,
            children: C,
        });
    let N = r && c,
        y = h
            ? {
                  onClick: () => (0, nE.rM)(null, u, (e) => (0, nI.p)({ guildId: t ?? void 0, banner: e })),
                  type: N ? "reset" : "remove",
                  accessibleLabel: eD.intl.string(N ? eD.t.jHlJNS : eD.t.tT9n7D),
              }
            : void 0;
    return (0, l.jsx)(nC.NW, {
        variant: "square",
        onClick: I,
        accessibleLabel: eD.intl.string(eD.t.N0bC3P),
        deleteButtonConfig: y,
        disabled: i,
        children: C,
    });
}
var nD = t(473219),
    nL = t(33851),
    nw = t.n(nL),
    nM = t(298387);
function nG(e) {
    let { color: n, suggestedColors: t, disabled: a, ariaLabel: r, onSelect: s } = e,
        o = i.useRef(null),
        d = (0, nA.Hl)(n);
    return (0, l.jsx)(nb.Y, {
        targetElementRef: o,
        renderPopout: (e) => (0, l.jsx)(nj.VN, { ...e, value: n, onChange: s, suggestedColors: t, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...t } = e;
            return (0, l.jsx)(eC.D, {
                ...t,
                innerRef: o,
                className: nM.Dh,
                onClick: a ? void 0 : n,
                "aria-label": r,
                "aria-disabled": a,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: nM.Hy, style: { backgroundColor: d } }),
            });
        },
    });
}
function nB(e) {
    let {
            primaryColor: n,
            secondaryColor: t,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: a,
            suggestedColors: r,
            disabled: s = !1,
        } = e,
        o = (0, nA.Hl)(n),
        d = (0, nA.Hl)(t),
        c = `linear-gradient(to bottom, ${o}, ${d})`,
        u = eD.intl.formatToPlainString(eD.t.FquTfm, { colorLabel: o }),
        g = eD.intl.formatToPlainString(eD.t.xOnm4z, { colorLabel: d });
    return (0, l.jsx)(nC.Yt, {
        variant: "square",
        disabled: s,
        children: (0, l.jsxs)("div", {
            className: nM.D7,
            style: { background: c },
            children: [
                (0, l.jsx)(nG, { color: n, suggestedColors: r, ariaLabel: u, onSelect: i, disabled: s }),
                (0, l.jsx)(nG, { color: t, suggestedColors: r, ariaLabel: g, onSelect: a, disabled: s }),
            ],
        }),
    });
}
function nU(e) {
    let { user: n, guildId: t, disabled: a = !1 } = e,
        r = (0, B.Ay)(n.id, t),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([Z.A], () => {
            let e = Z.A.getPendingChanges(t ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        c = (0, J.V7)({ userId: n.id, image: d }),
        { primaryColor: u, secondaryColor: g } = (0, U.A)({
            user: n,
            displayProfile: r,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        p = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_530).hex(),
        f = null != c ? c : n.getAvatarURL(t ?? void 0, 80),
        m = (0, n_.rh)(f, p, !1),
        x = i.useCallback(
            (e) => {
                let n = nw()(e, r?.themeColors);
                (0, nI.p)({ guildId: t ?? void 0, themeColors: n ? void 0 : e });
            },
            [r?.themeColors, t],
        );
    return null == u || null == g
        ? null
        : (0, l.jsx)(nB, {
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
var nF = t(315629),
    nV = t(821609),
    nz = t(403581),
    nH = t(835071),
    nW = t(235684);
function nK() {
    let e = () => {
        (0, nH.K)({ stackingBehavior: "stack" });
    };
    return (0, l.jsxs)(nF.h, {
        color: "nitro-pink",
        className: nW.k,
        children: [
            (0, l.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eD.intl.format(eD.t.TmfgI2, { onClick: e }),
            }),
            (0, l.jsx)(nV.$, {
                variant: "expressive",
                size: "md",
                icon: nz.t,
                text: eD.intl.string(eD.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
t(667532);
var nY = t(111159),
    nq = t(783878),
    nX = t(548118),
    n$ = t(71393),
    nJ = t(711014),
    nZ = t(308696);
let nQ = "MAIN_PROFILE";
function n0(e) {
    let { selectedGuildId: n, onChange: t, loading: a } = e,
        r = (0, s.bG)([nJ.Ay], () => nJ.Ay.getFlattenedGuildIds()),
        o = (0, s.bG)([n$.A], () => n$.A.getGuilds()),
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
                              leading: (0, l.jsx)(nX.Ay, {
                                  className: nZ.$,
                                  guild: n,
                                  size: nX.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(Y.Vq);
            return (
                e.unshift({
                    id: nQ,
                    label: eD.intl.string(eD.t["2p07FR"]),
                    value: nQ,
                    leading: (0, l.jsx)(nY.p, { size: "sm", color: ng.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [r, o]),
        c = i.useCallback(
            (e) => {
                t(e === nQ ? null : e);
            },
            [t],
        );
    return (0, l.jsx)(nq.Z, {
        label: eD.intl.string(eD.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: c,
        value: n ?? nQ,
        options: d,
        loading: a,
    });
}
var n1 = t(809467);
let n9 = "profile-modal-editing-panel",
    n3 = "profile-modal-editing-panel-heading";
function n8(e) {
    let { onClick: n, className: t, innerRef: i } = e;
    return (0, l.jsx)(eC.D, {
        innerRef: i,
        "aria-label": eD.intl.string(eD.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": n9,
        className: r()(n1.eg, t),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, l.jsx)(nu.N, { size: "sm", color: ng.A.colors.ICON_STRONG }),
    });
}
function n7(e) {
    let { onClick: n, className: t, buttonRef: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(e7.K, {
            buttonRef: i,
            "aria-label": eD.intl.string(eD.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": n9,
            icon: nu.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function n2(e) {
    let { onClick: n, innerRef: t } = e;
    return (0, l.jsxs)(eC.D, {
        innerRef: t,
        className: n1.cS,
        "aria-label": eD.intl.string(eD.t.X6NklS),
        onClick: n,
        "aria-controls": n9,
        "aria-expanded": !0,
        children: [
            (0, l.jsx)(np._, { size: "md", color: "currentColor" }),
            (0, l.jsx)(np._, { size: "md", color: "currentColor" }),
        ],
    });
}
function n5(e) {
    let {
            user: n,
            selectedGuildId: t,
            onSelectGuildId: i,
            isLoading: a = !1,
            onClose: s,
            className: o,
            collapseButtonRef: d,
        } = e,
        u = e0(i),
        g = null != t,
        m = nm.Ay.canUsePremiumProfileCustomization(n);
    return (0, l.jsxs)("aside", {
        id: n9,
        "aria-labelledby": n3,
        className: r()(n1.nd, o),
        "aria-busy": a,
        children: [
            (0, l.jsx)(p.A, { children: (0, l.jsx)(f.H, { id: n3, children: eD.intl.string(eD.t["L+ch00"]) }) }),
            (0, l.jsxs)("div", {
                className: n1.wx,
                children: [
                    (0, l.jsx)(n2, { innerRef: d, onClick: s }),
                    (0, l.jsx)(n0, { selectedGuildId: t ?? null, onChange: u, loading: a }),
                ],
            }),
            (0, l.jsx)(f.F, {
                children: (0, l.jsxs)(c.Ip, {
                    className: n1.XG,
                    fade: !0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: n1.Os,
                            children: [
                                (0, l.jsx)(nf.D, {
                                    variant: "text-sm/medium",
                                    className: n1.AM,
                                    children: eD.intl.string(eD.t.x5CoXR),
                                }),
                                (0, l.jsx)(nD.A, { user: n, guildId: t, disabled: a || (g && !m) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: n1.Os,
                            children: [
                                (0, l.jsx)(nf.D, {
                                    variant: "text-sm/medium",
                                    className: n1.AM,
                                    children: eD.intl.string(eD.t["50Nwpc"]),
                                }),
                                (0, l.jsx)(nx.A, { user: n, guildId: t, disabled: a || (g && !m) }),
                                (0, l.jsx)(nh.A, { user: n, guildId: t, disabled: a || (g && !m) }),
                            ],
                        }),
                        m &&
                            (0, l.jsxs)("div", {
                                className: n1.Os,
                                children: [
                                    (0, l.jsx)(nf.D, {
                                        variant: "text-sm/medium",
                                        className: n1.AM,
                                        children: eD.intl.string(eD.t.Zenogr),
                                    }),
                                    (0, l.jsx)(nU, { user: n, guildId: t, disabled: a }),
                                    (0, l.jsx)(nO, { userId: n.id, guildId: t, disabled: a }),
                                ],
                            }),
                        !m &&
                            (0, l.jsxs)("div", {
                                className: n1.Os,
                                children: [
                                    (0, l.jsx)(nf.D, {
                                        variant: "text-sm/medium",
                                        className: n1.AM,
                                        children: eD.intl.string(eD.t["/X3fkf"]),
                                    }),
                                    (0, l.jsx)(nN, { user: n, disabled: a || g }),
                                ],
                            }),
                    ],
                }),
            }),
            !m && (0, l.jsx)(nK, {}),
        ],
    });
}
var n6 = t(982599),
    n4 = t(756634),
    te = t(83013),
    tn = t(77085);
function tt(e) {
    let { userId: n } = e,
        t = (0, ea.g)(),
        { trackUserProfileAction: i } = (0, w.NJ)();
    return (0, l.jsx)(te.A, {
        heading: eD.intl.string(eD.t["mQKv+v"]),
        scrollTargetId: eW.bk.NOTE,
        children: (0, l.jsx)(n4.A, {
            userId: n,
            className: tn.N,
            autoFocus: t === eW.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tl = t(289873),
    ti = t(778599);
function ta(e) {
    let { isVisible: n, showLoadingSpinner: t, className: i } = e;
    return (0, l.jsx)("div", {
        className: r()(ti.f, n && ti.z, i),
        children: t && (0, l.jsx)(tl.y, { type: tl.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var tr = t(568602),
    ts = t(625494);
function to(e) {
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
                ts._.subscribe(eK.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    ts._.unsubscribe(eK.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, l.jsx)(tr.b, { isShaking: t, intensity: 1.4, children: n })
    );
}
var td = t(515054),
    tc = t(487514),
    tu = t(933832),
    tg = t(972213),
    tp = t(97483),
    tf = t(765178),
    tm = t(775602),
    tx = t(606758),
    th = t(707238),
    tA = t(861173);
let tv = {
        [eW.jM.WIDGET_ADDED]: {
            message: eD.intl.string(eD.t.fFP1Uy),
            icon: (0, l.jsx)(tu.A, { size: "sm", color: ng.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eW.jM.WIDGET_REMOVED]: {
            message: eD.intl.string(eD.t.zzsK7h),
            icon: (0, l.jsx)(tu.A, { size: "sm", color: ng.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eW.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eD.intl.string(eD.t["84MExs"]),
            icon: (0, l.jsx)(tg.d, { size: "sm", color: ng.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: tp.Ck.FAILURE,
        },
        [eW.jM.SOMETHING_WENT_WRONG]: {
            message: eD.intl.string(eD.t.F8FvUy),
            icon: (0, l.jsx)(tg.d, { size: "sm", color: ng.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: tp.Ck.FAILURE,
        },
    },
    tb = (e) => {
        let { message: n, icon: t, type: i } = e;
        return (0, l.jsxs)("div", {
            className: r()(tA.oR, th.oR),
            "data-type": i,
            children: [
                (0, l.jsx)("div", { className: th.RC, children: t }),
                (0, l.jsx)(eN.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    tj = (e) => {
        let { className: n } = e,
            t = (0, tx.fu)(),
            a = (0, s.bG)([tm.A], () => tm.A.useReducedMotion),
            [o, c] = i.useState(!1),
            [u, g] = i.useState(null);
        i.useEffect(() => {
            null !== t ? (c(!0), g(tv[t]), tf.O.announce(tv[t].message)) : c(!1);
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
            i.useEffect(() => () => (0, tx.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, tx.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, l.jsx)(l.Fragment, {
                children: p(
                    (e, t) =>
                        t &&
                        null !== u &&
                        (0, l.jsx)(tc.animated.div, {
                            className: r()(n, th.Jt),
                            style: e,
                            children: (0, l.jsx)(tb, { ...u }),
                        }),
                ),
            })
        );
    };
var t_ = t(878555),
    tI = t(193885),
    tC = t(259065),
    tN = t(696451),
    ty = t(621466),
    tE = t(219869),
    tP = t(292666),
    tR = t(539396);
function tk(e) {
    let { text: n, htmlFor: t } = e;
    return (0, l.jsx)(p.A, { tag: "label", htmlFor: t, children: n });
}
function tS(e) {
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
            (0, l.jsx)(tk, { text: a, htmlFor: n }),
            (0, l.jsx)(tP.k, {
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
function tT(e) {
    let { tooltip: n, ...t } = e,
        i = (0, l.jsx)("div", {
            className: tR.L7,
            children: (0, l.jsx)(tE.T, { ...t, size: "sm", variant: "input-accessory" }),
        });
    return null == n ? i : (0, l.jsx)(e6.m, { text: n, ariaHidden: !0, children: i });
}
function tO(e) {
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
            className: tR.LL,
            onClick: c,
            children: [
                A
                    ? (0, l.jsx)(eN.E, {
                          id: h,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: tR.qf,
                          children: a,
                      })
                    : t,
                (0, l.jsx)(eC.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": A ? h : void 0,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), c();
                    },
                    focusProps: { ringTarget: x },
                }),
                null != u && (0, l.jsx)("div", { className: tR.lD, children: (0, l.jsx)(tT, { ...u }) }),
            ],
        });
    return (0, l.jsx)("div", {
        ref: p,
        className: r()(tR.kL, g),
        onBlur: f,
        onKeyDown: m,
        children: (0, l.jsx)(
            "div",
            { className: tR.qG, children: n ? s : (0, l.jsx)("div", { className: tR.VH, children: v }) },
            n ? "editing" : "preview",
        ),
    });
}
var tD = t(35783);
function tL(e) {
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
        A = nm.Ay.canUsePremiumProfileCustomization(p),
        {
            value: v,
            previewValue: j,
            onCommit: _,
        } = ((n = f?.guildId ?? null),
        (t = f?.guildId != null),
        (a = (0, s.bG)([nP.default], () => nP.default.getCurrentUser()?.globalName ?? null)),
        (r = (0, s.bG)([tN.Ay], () => (null != n ? (tN.Ay.getMember(n, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([Z.A], () => Z.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([Z.A], () => Z.A.getPendingChanges(n).pendingNickname)),
        (c = t ? (d ?? r ?? "") : (o ?? a ?? "")),
        (u = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : a),
        {
            value: c,
            previewValue: t ? (u(void 0 !== d ? d : r) ?? u(a)) : (u(g) ?? p.username),
            onCommit: i.useCallback(
                (e) => {
                    t
                        ? (0, nI.p)({ nickname: e.trim(), guildId: f?.guildId ?? void 0 })
                        : (0, nI.p)({ globalName: e.trim() });
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
                d = (0, s.bG)([tm.A], () => tm.A.useReducedMotion),
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
                            (null != g.current && (0, ty.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) ||
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
        E = (0, s.bG)([Z.A], () => Z.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        P = eD.intl.string(x ? eD.t.mq6Cg9 : eD.t.XuZU7A),
        R = x ? (p.globalName ?? p.username) : p.username,
        k = eD.intl.string(x ? eD.t["g7OSZ/"] : eD.t.kyfzzc),
        S = i.useRef(null),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    I && y(),
                    (0, tC.L)({ analyticsLocations: m, guildId: h, stackingBehavior: "stack", returnRef: S });
            },
            [I, y, m, h],
        ),
        O = {
            icon: tI.V,
            tooltip: eD.intl.string(eD.t.lqKKI2),
            "aria-label": eD.intl.string(eD.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: S,
        },
        D = A ? O : void 0,
        L =
            null != j
                ? (0, l.jsx)(t_.c$, {
                      user: p,
                      guildId: h,
                      displayName: j,
                      size: "lg",
                      pendingDisplayNameStyles: E,
                      className: tD.d,
                  })
                : null;
    return (0, l.jsx)(tO, {
        ...C,
        preview: L,
        placeholder: R,
        editButtonAriaLabel: k,
        trailing: D,
        input: (0, l.jsx)(tS, { ...N, label: P, maxLength: eK.zzC, placeholder: R, trailing: D }),
    });
}
function tw(e) {
    let { user: n, displayProfile: t, nickname: i, trailing: a, onClose: r, allowEditing: s } = e;
    return s
        ? (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(tL, { displayProfile: t, user: n }),
                  (0, l.jsx)(t_.M5, { user: n, pronouns: t?.pronouns, trailing: a, onClose: r }),
              ],
          })
        : (0, l.jsx)(t_.Ay, {
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
var tM = t(97808),
    tG = t(550079),
    tB = t(477782),
    tU = t(22231),
    tF = t(601255),
    tV = t(562819),
    tz = t(19575),
    tH = t(106106),
    tW = t(338165);
let tK = tz.Ay.getEnableHardwareAcceleration() ? tM.Js : tM.eu;
function tY(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(tG.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eD.intl.string(eD.t.YAgq3W),
        children: (0, l.jsx)(tB.rX, { children: t }),
    });
}
function tq(e) {
    let { user: n, guildId: t } = e,
        { avatarProps: a, eventHandlers: o } = (0, es.V)(e),
        [d, c] = i.useState(!1),
        u = i.useRef(null),
        g = i.useCallback(() => c(!1), []),
        p = (function (e) {
            let { user: n, guildId: t, onClose: a } = e,
                { newestAnalyticsLocation: r, analyticsLocations: o } = (0, b.Ay)(),
                d = null != t,
                c = (0, s.bG)([tN.Ay], () => (null != t ? tN.Ay.getMember(t, n.id) : null)),
                u = (0, s.bG)([Z.A], () => Z.A.getPendingChanges(t ?? void 0).pendingAvatar),
                g = d ? c?.avatar : n.avatar,
                p = (0, $.z5)(u, g),
                f = d && null != n.avatar,
                m = nm.Ay.canUsePremiumProfileCustomization(n),
                x = m || null == t,
                h = m || null == t,
                A = (0, s.bG)([n$.A], () => (null != t ? n$.A.getGuild(t) : null)),
                v = (0, $.a4)({ user: n }),
                j = (0, $.a4)({ user: n, guildId: t ?? void 0 }),
                { pendingAvatarDecoration: _ } = (0, $.CP)(t ?? void 0),
                I = void 0 !== _,
                C = null != (0, tF.A)(I ? _ : j) && (I ? null != _ : null != j),
                N = d && null != v,
                y = i.useCallback(() => {
                    a(),
                        (0, nE.XD)({
                            uploadType: nR.HL.AVATAR,
                            analyticsSource: r,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [a, r, t]),
                E = i.useCallback(() => {
                    a(), (0, tV.L)({ analyticsLocations: o, guild: A ?? void 0, stackingBehavior: "stack" });
                }, [a, o, A]),
                P = i.useCallback(() => {
                    a(),
                        (0, nE.rM)(null, g, (e) => (0, nI.p)({ guildId: t ?? void 0, avatar: e })),
                        (0, $.WU)(f ? "reset" : "remove");
                }, [a, t, g, f]),
                R = i.useCallback(() => {
                    a(), (0, nI.p)({ guildId: t ?? void 0, avatarDecoration: null });
                }, [a, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, l.jsx)(
                                tB.Dr,
                                { id: "change-avatar", label: eD.intl.string(eD.t["4OynCD"]), action: y },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, l.jsx)(
                                tB.Dr,
                                { id: "change-decoration", label: eD.intl.string(eD.t.BVcYCx), action: E },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        p &&
                        e.push(
                            f
                                ? (0, l.jsx)(
                                      tB.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.TDjKDm),
                                          action: P,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, l.jsx)(
                                      tB.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.twB3fz),
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
                                      tB.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.JvcEcq),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, l.jsx)(
                                      tB.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.OrokWm),
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
        ? (0, l.jsx)(es.A, { ...e })
        : (0, l.jsxs)("div", {
              ...o,
              className: r()(tH.my, tH.vk, tW.kL, { [tW.MO]: d }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || c(!0);
              },
              children: [
                  (0, l.jsx)(tK, { ...a, imageClassName: r()(tH.Lw, tW.HU) }),
                  (0, l.jsx)(nb.Y, {
                      targetElementRef: u,
                      shouldShow: d,
                      animation: nb.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, l.jsx)(tY, { ...e, items: p, onMenuClose: g }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: u,
                              className: tW.r9,
                              children: (0, l.jsx)(e7.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tU.R,
                                  "aria-label": eD.intl.string(eD.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), c((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var tX = t(617061),
    t$ = t(976726);
function tJ(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(tG.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eD.intl.string(eD.t.FzU73A),
        children: (0, l.jsx)(tB.rX, { children: t }),
    });
}
function tZ(e) {
    let { user: n, guildId: t } = e,
        [a, o] = i.useState(!1),
        d = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        u = (function (e) {
            let { user: n, guildId: t, onClose: a } = e,
                { newestAnalyticsLocation: r, analyticsLocations: o } = (0, b.Ay)(),
                d = (0, $.N2)({ user: n, guildId: t ?? void 0 }),
                c = nm.Ay.canUsePremiumProfileCustomization(n),
                u = c || null == t,
                g = null != t,
                { pendingBanner: p, pendingProfileEffect: f } = (0, s.bG)([Z.A], () =>
                    Z.A.getPendingChanges(t ?? void 0),
                ),
                m = (0, s.bG)([M.A], () =>
                    null != t ? M.A.getGuildMemberProfile(n.id, t)?.banner : M.A.getUserProfile(n.id)?.banner,
                ),
                x = (0, s.bG)([nP.default], () => nP.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([M.A], () => M.A.getUserProfile(n.id)?.profileEffect != null),
                A = (0, $.Ac)(p, m),
                v = g && x,
                j = g && h,
                _ = void 0 === f ? null != d : null != f,
                I = i.useCallback(() => {
                    a(),
                        (0, nE.XD)({
                            uploadType: nR.HL.BANNER,
                            analyticsSource: r,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [a, r, t]),
                C = i.useCallback(() => {
                    a(),
                        (0, tX.W)({
                            analyticsLocations: o,
                            guild: null != t ? (n$.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [a, o, t, d]),
                N = i.useCallback(() => {
                    a(), (0, nE.rM)(null, m, (e) => (0, nI.p)({ guildId: t ?? void 0, banner: e }));
                }, [a, t, m]),
                y = i.useCallback(() => {
                    a(), (0, nI.p)({ guildId: t ?? void 0, profileEffect: null });
                }, [a, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    c &&
                        e.push(
                            (0, l.jsx)(
                                tB.Dr,
                                { id: "change-banner", label: eD.intl.string(eD.t.N0bC3P), action: I },
                                "change-banner",
                            ),
                        ),
                    u &&
                        e.push(
                            (0, l.jsx)(
                                tB.Dr,
                                { id: "change-effect", label: eD.intl.string(eD.t["/dRfCf"]), action: C },
                                "change-effect",
                            ),
                        ),
                    c &&
                        A &&
                        e.push(
                            v
                                ? (0, l.jsx)(
                                      tB.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.jHlJNS),
                                          action: N,
                                      },
                                      "reset-banner",
                                  )
                                : (0, l.jsx)(
                                      tB.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.tT9n7D),
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
                                      tB.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eD.intl.string(eD.t["SQy/Po"]),
                                          action: y,
                                      },
                                      "reset-effect",
                                  )
                                : (0, l.jsx)(
                                      tB.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.uMuafO),
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
        ? (0, l.jsx)(ed.A, { ...e })
        : (0, l.jsxs)("div", {
              className: r()(t$.kL, { [t$.MO]: a }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, l.jsx)(ed.A, { ...e, className: t$.Pr }),
                  (0, l.jsx)(nb.Y, {
                      targetElementRef: d,
                      shouldShow: a,
                      animation: nb.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, l.jsx)(tJ, { ...e, items: u, onMenuClose: c }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: d,
                              className: t$.r9,
                              children: (0, l.jsx)(e7.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tU.R,
                                  "aria-label": eD.intl.string(eD.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var tQ = t(777480),
    t0 = t(107563),
    t1 = t(570287);
t(938796);
var t9 = t(913453),
    t3 = t(667049),
    t8 = t(837531),
    t7 = t(186272),
    t2 = t(645625);
let t5 = (e) => e * (2 - e),
    t6 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function t4(e) {
    let { displayProfile: n, pendingBanner: t } = e,
        a = (0, F.Nx)(),
        [r, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == t || a) return;
            let e = !1;
            return (
                ei(t, 1024)
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
        : (0, l.jsx)("div", { className: t2.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function le(e) {
    let { displayProfile: n, profileEffectOverride: t, isHovering: i } = e,
        a = void 0 !== t ? t : n?.profileEffect;
    return null == a ? null : (0, l.jsx)(j.A, { skuId: a.skuId, isHovering: i });
}
function ln(e) {
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
        { isHoveringOrFocusing: S } = (0, y.A)(N),
        [D, w] = i.useState(),
        M = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? w("compact-xs") : n <= 380 ? w("compact-sm") : w(void 0);
        }, []);
    (0, h.g)(N, M, [], { fireOnMount: !0 });
    let G = null != D ? t6[D] : void 0,
        B = i.useMemo(() => m ?? (0, E.A)(), [m]),
        { relationshipType: U, originApplicationId: F } = (0, s.cf)([T.A], () => ({
            relationshipType: T.A.getRelationshipType(n.id),
            originApplicationId: T.A.getOriginApplicationId(n.id),
        })),
        X = (0, s.bG)([O.A], () => O.A.hidePersonalInformation),
        $ = (0, R.q)({ userId: n.id }),
        J = (0, P.fi)(n.id),
        { appIdentities: Z, connections: ee } = (function (e) {
            let { filteredAppIdentities: n } = (0, K.A)(e),
                t = (0, q.A)(e),
                l = H.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
                a = i.useMemo(() => new Set(l.enabled ? (n?.map((e) => e.application_id) ?? []) : []), [n, l.enabled]),
                r = (0, W.A)([...a]).filter(Y.Vq);
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
                                  let n = z.A.get(e.type);
                                  return n?.replacedBy == null || !a.has(n.replacedBy);
                              })
                            : t,
                    [t, a, l.enabled],
                ),
            };
        })(n.id),
        en = (0, V.A)(n.id),
        et = _ ? tZ : ed.A,
        el = _ ? tq : es.A;
    return (0, l.jsxs)("main", {
        className: r()(t2.profile, null != D && t2[D]),
        ref: N,
        "aria-busy": I,
        children: [
            (0, l.jsxs)("div", {
                className: t2.profileHeader,
                children: [
                    (0, l.jsx)(et, {
                        user: n,
                        displayProfile: g,
                        guildId: a,
                        themeType: Q.d.MODAL_V2,
                        specOverrides: G,
                        pendingBanner: b,
                    }),
                    (0, l.jsx)(em.A, { userId: n.id, onClose: x, className: t2.interactionToast }),
                    (0, l.jsx)(el, {
                        user: n,
                        displayProfile: g,
                        guildId: a,
                        channelId: d,
                        themeType: Q.d.MODAL_V2,
                        specOverrides: G,
                        avatarDecorationOverride: A,
                        avatarOverride: v,
                    }),
                    (0, l.jsx)(ej.A, {
                        user: n,
                        guildId: a,
                        channelId: d,
                        themeType: Q.d.MODAL_V2,
                        hasEntered: f,
                        prompt: C ? B : null,
                    }),
                ],
            }),
            (0, l.jsxs)(c.Ip, {
                fade: !0,
                className: t2.profileBody,
                children: [
                    (0, l.jsx)(eg.A, { userId: n.id }),
                    (0, l.jsx)(tw, {
                        user: n,
                        displayProfile: g,
                        nickname: p,
                        trailing: (0, l.jsx)(eo.A, { displayProfile: g, themeType: Q.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: _,
                    }),
                    U === eK.eA$.PENDING_INCOMING &&
                        (0, l.jsx)(eb.A.Overlay, {
                            className: t2.profileOverlay,
                            children: (0, l.jsx)(ef.A, {
                                user: n,
                                applicationId: F,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: t2.profileBanner,
                            }),
                        }),
                    J.map((e) => {
                        let { applicationId: t } = e;
                        return (0, l.jsx)(
                            eb.A.Overlay,
                            {
                                className: t2.profileOverlay,
                                children: (0, l.jsx)(ef.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: t2.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    n.isProvisional &&
                        (0, l.jsx)(eb.A.Overlay, {
                            className: t2.profileOverlay,
                            children: (0, l.jsx)(te.A, {
                                heading: eD.intl.string(eD.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, l.jsx)(u.E, { size: "xs", color: "currentColor" }),
                                className: t2.profileBanner,
                                children: (0, l.jsx)(k.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, l.jsx)(ev.A, { user: n, className: t2.profileBanner }),
                    g?.private &&
                        (0, l.jsx)(eb.A.Overlay, {
                            className: t2.profileOverlay,
                            children: (0, l.jsx)(eA.A, { username: p }),
                        }),
                    (0, l.jsx)("div", {
                        className: t2.profileButtons,
                        children: (0, l.jsx)(e8, {
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
                    C && (0, l.jsx)(eu.A, { isPremiumUser: (0, L.ki)(t), onInteraction: x }),
                    !X && (0, l.jsx)(ec.E, { userBio: g?.bio, setLineClamp: !1 }),
                    $.length > 0 &&
                        (0, l.jsx)(te.A, {
                            heading: eD.intl.string(eD.t["Uv/eTx"]),
                            children: (0, l.jsx)(ep.A, { applicationIds: $ }),
                        }),
                    (0, l.jsx)(te.A, {
                        heading: eD.intl.string(eD.t.a6XYD9),
                        children: (0, l.jsx)(ex.A, { userId: n.id, guildId: g?.guildId, tooltipDelay: eW.In }),
                    }),
                    g?.guildId != null &&
                        (0, l.jsx)(e_.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: t2.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (ee.length > 0 || Z.length > 0) &&
                        (0, l.jsx)(te.A, {
                            heading: eD.intl.string(eD.t["3fe7U5"]),
                            scrollTargetId: eW.bk.CONNECTIONS,
                            children: (0, l.jsx)(nc, {
                                applicationIdentities: Z,
                                connections: ee,
                                userId: n.id,
                                className: t2.profileAppConnections,
                            }),
                        }),
                    en.length > 0 &&
                        (0, l.jsx)(te.A, {
                            heading: eD.intl.string(eD.t.PHjkRE),
                            scrollTargetId: eW.bk.APPS,
                            children: (0, l.jsx)(eM, {
                                applicationRoleConnections: en,
                                onClose: x,
                                className: t2.profileAppConnections,
                            }),
                        }),
                    (0, l.jsx)(tt, { userId: n.id }),
                ],
            }),
            (0, l.jsx)(le, { displayProfile: g, profileEffectOverride: j, isHovering: S }),
        ],
    });
}
function lt(e) {
    let { user: n, displayProfile: t, pendingThemeColors: i, children: a } = e,
        {
            theme: r,
            primaryColor: s,
            secondaryColor: o,
        } = (0, U.A)({ user: n, displayProfile: t, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, X.A)({
            theme: r,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, l.jsx)("div", { className: c, style: d, children: a });
}
function ll(e) {
    let {
            user: n,
            currentUser: t,
            guildId: a,
            originGuildId: o,
            channelId: c,
            messageId: u,
            roleId: h,
            sessionId: j,
            initialTabSection: y,
            initialScrollTarget: E,
            transitionState: P,
            customStatusPrompt: R,
            openedAt: k,
            onClose: O,
            sourceAnalyticsLocations: L = [],
            themeContainerClassName: U,
        } = e,
        F = n.id === t.id,
        {
            guildId: V,
            pendingGuildId: z,
            isLoading: H,
            selectUserProfile: W,
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
                        (0, el.A)(n, void 0, {
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
        K = i.useMemo(() => (null != V ? { [V]: [n.id] } : {}), [V, n.id]);
    (0, A.Eq)(K, "UserProfileModalV2");
    let Y = (0, B.Ay)(n.id, V),
        q = (0, _.A)(Y?.profileFrame?.skuId, "UserProfileModalV2"),
        X = (0, C.A)(Y?.profileFrame?.skuId),
        ee = (0, G.X)("UserProfileModalV2"),
        ei = F && ee,
        {
            pendingThemeColors: es,
            avatarDecorationOverride: eo,
            avatarOverride: ed,
            bannerOverride: ec,
            profileEffectOverride: eu,
        } = (function (e) {
            let { user: n, guildId: t, allowEditingInModal: l } = e;
            return (0, s.cf)([Z.A], () => {
                if (!l) return et;
                let {
                    pendingThemeColors: e,
                    pendingAvatarDecoration: i,
                    pendingAvatar: a,
                    pendingBanner: r,
                    pendingProfileEffect: s,
                } = Z.A.getPendingChanges(t);
                return {
                    pendingThemeColors: e,
                    avatarDecorationOverride:
                        void 0 === i
                            ? void 0
                            : (0, $.lw)({ userValue: n.avatarDecoration, pendingValue: i, guildId: t }),
                    avatarOverride: (0, J.V7)({ userId: n.id, image: a, size: en }),
                    bannerOverride: r,
                    profileEffectOverride: s,
                };
            }, [n, t, l]);
        })({ user: n, allowEditingInModal: ei, guildId: V }),
        {
            isExpanded: eg,
            isAnimating: ep,
            transition: ef,
            canShowExpand: em,
            handleExpand: ex,
            handleCollapse: eA,
            refs: { expandIconButtonRef: ev, expandTabButtonRef: ej, collapseButtonRef: e_ },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [t, l] = i.useState(!1),
                a = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: t5 },
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
        eI = ei && em,
        { defaultWishlistId: eC } = (0, s.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(n.id) }));
    (0, S.fw)({ wishlistId: eC, userId: n.id });
    let eN = (0, er.fC)(),
        ey = H || null != eN.interactionType,
        eE = (function (e) {
            let n,
                t,
                l,
                { user: i, currentUser: a } = e,
                { mutualFriendsCount: r, mutualGuilds: o } = (0, t9.A)(i),
                d = o?.length,
                c =
                    ((n = (0, s.bG)([nP.default], () => nP.default.getCurrentUser())),
                    (t = (0, s.bG)([M.A], () => M.A.getUserProfile(i.id))),
                    (l =
                        t?.bio === "" &&
                        t?.pronouns === "" &&
                        t?.banner === void 0 &&
                        t?.accentColor === void 0 &&
                        t?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (t?.badges == null || t?.badges?.length === 0)),
                    n?.id !== i.id && !l),
                u = (0, t3.A)(i.id),
                g = (0, t1.A)(i.id),
                p = [],
                f = i.id === a?.id,
                m = M.A.getFirstWishlistId(i.id),
                x = null != m,
                h = x ? M.A.getWishlistSettings(i.id, m) : null,
                A = (x ? t0.A.getWishlistItems(m) : []).length > 0,
                v = u.length > 0;
            (f || v) && p.push({ text: eD.intl.string(eD.t.laViwx), section: eW.RP.WIDGETS }),
                p.push({ text: eD.intl.string(eD.t.chq59f), section: eW.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = T.A.isFriend(i.id),
                _ = h?.visibility === tQ.a.PUBLIC;
            return (
                (f || (!f && A && _ && g && (!b || (b && j)))) &&
                    p.push({ text: eD.intl.string(eD.t["7lZ31J"]), section: eW.RP.WISHLIST }),
                i.id !== a?.id &&
                    c &&
                    (p.push({ text: (0, t8.A)(r), section: eW.RP.MUTUAL_FRIENDS }),
                    p.push({ text: (0, t7.A)(d), section: eW.RP.MUTUAL_GUILDS })),
                p
            );
        })({ user: n, currentUser: t }),
        { analyticsLocations: eP } = (0, b.Ay)([...L, v.A.USER_PROFILE_MODAL_V2]),
        eR = (0, w.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: j,
            guildId: V,
            channelId: c,
            messageId: u,
            roleId: h,
        }),
        ek = D.Ay.useName(Y?.guildId, c, n),
        eS = (0, N.GV)(),
        eT = eD.intl.format(eD.t.KRe1Fk, { name: ek });
    return (0, l.jsx)(b.f5, {
        value: eP,
        children: (0, l.jsx)(w.of, {
            value: eR,
            openedAt: k,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, l.jsx)(er.Hl, {
                value: eN,
                children: (0, l.jsx)(ea.N, {
                    value: E,
                    children: (0, l.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: t2.root,
                        transitionState: P,
                        "aria-labelledby": eS,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsx)(to, {
                                children: (0, l.jsxs)("div", {
                                    className: r()(t2.layoutContainer, X, {
                                        [t2.editingPanelEnabled]: ei,
                                        [t2.editingPanelExpanded]: ei && eg,
                                        [t2.isAnimating]: ep,
                                        [t2.hasPrivateBanner]: Y?.private === !0,
                                    }),
                                    children: [
                                        (0, l.jsxs)(lt, {
                                            user: n,
                                            displayProfile: Y,
                                            pendingThemeColors: es,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: t2.modalHeaderButtons,
                                                    children: [
                                                        (0, l.jsx)(e5, { isCurrentUser: F, onClose: O }),
                                                        (0, l.jsx)(p.A, {
                                                            children: (0, l.jsx)(f.H, { id: eS, children: eT }),
                                                        }),
                                                        ei &&
                                                            (!eg || ep) &&
                                                            (0, l.jsx)(n7, {
                                                                buttonRef: ev,
                                                                onClick: ex,
                                                                className: t2.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eI &&
                                                    (0, l.jsx)(n8, {
                                                        innerRef: ej,
                                                        onClick: ex,
                                                        className: t2.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsxs)(f.F, {
                                            children: [
                                                ei &&
                                                    ef((e, t) =>
                                                        t
                                                            ? (0, l.jsx)(n5, {
                                                                  className: r()(t2.editingPanel, {
                                                                      [t2.isExpanded]: eg,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: z,
                                                                  onSelectGuildId: W,
                                                                  onClose: eA,
                                                                  collapseButtonRef: e_,
                                                                  isLoading: H,
                                                              })
                                                            : null,
                                                    ),
                                                (0, l.jsxs)(eb.A, {
                                                    className: r()(U, t2.profileContentContainer),
                                                    user: n,
                                                    displayProfile: Y,
                                                    themeType: Q.d.MODAL_V2,
                                                    pendingThemeColors: es,
                                                    isPrivate: Y?.private === !0,
                                                    children: [
                                                        (0, l.jsx)(t4, { displayProfile: Y, pendingBanner: ec }),
                                                        Y?.private === !0 && (0, l.jsx)(eh.A, {}),
                                                        (0, l.jsx)(ta, { isVisible: ey, showLoadingSpinner: H }),
                                                        (0, l.jsx)(tj, { className: t2.toast }),
                                                        (0, l.jsxs)("div", {
                                                            className: t2.profileCard,
                                                            children: [
                                                                (0, l.jsx)(ln, {
                                                                    user: n,
                                                                    currentUser: t,
                                                                    guildId: V,
                                                                    channelId: c,
                                                                    displayProfile: Y,
                                                                    nickname: ek,
                                                                    originGuildId: o,
                                                                    hasEntered: P === m.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: O,
                                                                    avatarDecorationOverride: eo,
                                                                    avatarOverride: ed,
                                                                    bannerOverride: ec,
                                                                    profileEffectOverride: eu,
                                                                    allowEditing: ei,
                                                                    isLoading: H,
                                                                }),
                                                                null != q &&
                                                                    (0, l.jsx)(I.A, { frame: q, layout: "MODAL_V2" }),
                                                            ],
                                                        }),
                                                        (0, l.jsx)(td.A, {
                                                            user: n,
                                                            currentUser: t,
                                                            displayProfile: Y,
                                                            guildId: V,
                                                            channelId: c,
                                                            items: eE,
                                                            initialSection: y,
                                                            onClose: O,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)(n6.A, { userId: n.id, guildId: V, className: t2.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
