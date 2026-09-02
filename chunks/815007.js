n.d(l, { A: () => ae });
var t = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(935462),
    d = n(778712),
    u = n(866323),
    c = n(364522),
    g = n(695366),
    m = n(140735),
    f = n(707554),
    p = n(738188),
    x = n(661531),
    h = n(231723),
    v = n(241524),
    A = n(770178),
    b = n(80682),
    j = n(793574),
    I = n(688810),
    y = n(248284),
    C = n(480335),
    N = n(577390),
    E = n(372320),
    P = n(31956),
    k = n(744808),
    T = n(875741),
    S = n(915089),
    O = n(713517),
    R = n(645507),
    _ = n(922590),
    L = n(821269),
    D = n(397562),
    M = n(93246),
    w = n(594832),
    G = n(71393),
    F = n(994500),
    V = n(351906),
    U = n(287809),
    B = n(562153),
    z = n(474090),
    W = n(158045),
    H = n(183555),
    q = n(47675),
    K = n(321191),
    Y = n(591179),
    X = n(999291),
    $ = n(702841),
    Z = n(370480),
    J = n(773669),
    Q = n(652215),
    ee = n(101928),
    el = n(837529),
    en = n(346713),
    et = n(573648),
    ei = n(429913),
    er = n(321078),
    ea = n(403362),
    es = n(484509),
    eo = n(487409),
    ed = n(83931),
    eu = n(920601),
    ec = n(903209),
    eg = n(919395),
    em = n(101058),
    ef = n(696451),
    ep = n(836602),
    ex = n(996988),
    eh = n(207634);
let ev = (0, d.FT)(eh.T[ex.d.MODAL_V2].avatarSize),
    eA = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eb = n(716804),
    ej = n(679492),
    eI = n(718019),
    ey = n(988895),
    eC = n(915614),
    eN = n(744753),
    eE = n(834730);
function eP(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(eE.E, { variant: "text-sm/normal", children: l });
}
var ek = n(361311),
    eT = n(931481),
    eS = n(439053),
    eO = n(743987),
    eR = n(312381),
    e_ = n(501193),
    eL = n(383448),
    eD = n(946356),
    eM = n(983495),
    ew = n(503026),
    eG = n(305385),
    eF = n(109112),
    eV = n(939249),
    eU = n(730134),
    eB = n(169869),
    ez = n(837057),
    eW = n(310419),
    eH = n(889227),
    eq = n(967198),
    eK = n(488995),
    eY = n(375708),
    eX = n(576849);
function e$(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eB.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eX.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eU.A, { user: new eH.A(l.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(eF._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eX.Hd,
                children: [
                    (0, t.jsxs)(eV.D, {
                        className: eX.OB,
                        onClick: function () {
                            i?.(),
                                (0, ez.transitionToGlobalDiscovery)({
                                    tab: eK.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eW.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eE.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eX.nk,
                                children: eY.intl.format(eY.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eX.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eZ(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, H.NJ)(),
        o = (0, s.bG)([J.default], () => J.default.locale),
        d = (0, s.bG)([eq.A], () => eq.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eX.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eX.FI,
                          children: (0, t.jsx)(e$, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  r({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${l}-${e.application.id}`,
                  ),
              ),
          });
}
var eJ = n(403581),
    eQ = n(240248),
    e0 = n(308244),
    e1 = n(83013),
    e2 = n(81400),
    e3 = n(84540),
    e5 = n(290386),
    e7 = n(621466),
    e8 = n(231088),
    e9 = n(786826);
function e6(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function e4(e) {
    let {
            isEditing: l,
            committedValue: n,
            editedValue: i,
            setEditedValue: r,
            editButtonRef: a,
            handleStartEditing: s,
            wrapperRef: o,
            onBlur: d,
            onContainerKeyDown: u,
            inputRef: c,
            onInputKeyDown: g,
            preview: m,
            placeholder: f,
            editButtonAriaLabel: p,
            label: x,
            maxLength: h,
            rows: v,
            emojiPickerIntention: A,
            error: b,
            warning: j,
            className: I,
        } = e,
        y =
            (null != h && (l ? i : n).length > h
                ? eY.intl.formatToPlainString(eY.t.ICT5S6, { maxLength: h })
                : void 0) ?? b;
    return (0, t.jsx)(e8.ZL, {
        isEditing: l,
        preview: m,
        placeholder: f,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        variant: "multiline",
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        previewErrorMessage: y,
        previewWarningMessage: j,
        input: (0, t.jsx)(e9.f, {
            editorRef: c,
            label: x,
            hideLabel: !0,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: h,
            error: y,
            helperText: j,
            placeholder: f,
            rows: v,
            emojiPickerIntention: A,
        }),
    });
}
let le = [
    { value: "HAIKU", label: () => eY.intl.string(eY.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eY.intl.string(eY.t.CXkR1L) },
    { value: "TELL_US", label: () => eY.intl.string(eY.t.eutr4P) },
    { value: "FUN_FACT", label: () => eY.intl.string(eY.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eY.intl.string(eY.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eY.intl.string(eY.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eY.intl.string(eY.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eY.intl.string(eY.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eY.intl.string(eY.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eY.intl.string(eY.t.u7WCGI) },
];
var ll = n(307731);
function ln(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d, className: u } = e,
        c = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        g = d?.guildId != null,
        m = d?.guildId ?? null,
        f = W.Ay.canUsePremiumProfileCustomization(c),
        p = (0, e5.U)({ location: "user_profile_modal_edit" }),
        {
            value: x,
            previewValue: h,
            onCommit: v,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, e3.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        A = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = (0, e8.Ww)(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, l) {
                            if (l?.contains(e)) return !0;
                            let n = e6(l),
                                t = n?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, n.current),
                    [n],
                );
            i.useEffect(() => {
                if (!l) return;
                let e = n.current?.ownerDocument ?? document;
                function i(e) {
                    (0, e7.vq)(e.target) && !a(e.target) && t();
                }
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let i = e.relatedTarget;
                    !(0, e7.vq)(i) || a(i) || (null == e6(n.current) && t());
                },
                [l, a, t, n],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: x, onCommit: v }),
        b = !(0, eQ.uJ)(h),
        j = (0, s.bG)([ep.A], () => ep.A.getErrors(m)),
        I = (0, e2.EC)(m),
        y = j.bio?.[0],
        C = I?.bio?.[0],
        N = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * le.length)), le[e];
        }, []),
        E = g ? eY.intl.string(eY.t.yPJ9xr) : N.label();
    return !g || f
        ? (0, t.jsx)(e4, {
              ...A,
              className: u,
              preview: b ? (0, t.jsx)(e0.A, { userBio: h, setLineClamp: !1 }) : null,
              placeholder: E,
              editButtonAriaLabel: eY.intl.string(eY.t.lO3n7a),
              label: eY.intl.string(eY.t["YWo+Zd"]),
              emojiPickerIntention: ll.EmojiIntention.PROFILE,
              maxLength: p,
              error: y,
              warning: C,
          })
        : b
          ? (0, t.jsx)(e0.A, { userBio: h, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var lt = n(430626);
function li(e) {
    let { currentUser: l, displayProfile: n, canEditInPlace: i } = e,
        r = n?.bio,
        a = !(0, eQ.uJ)(r),
        s = n?.guildId != null,
        o = s && W.Ay.canUsePremiumProfileCustomization(l),
        d = o ? eY.intl.string(eY.t.jVai8N) : eY.intl.string(eY.t.ZzAR2Y),
        u = (0, W.TW)(l) ? eY.intl.string(eY.t["5AFxuK"]) : eY.intl.string(eY.t.N6ixy8),
        c = i && o ? { icon: eJ.t, tooltip: u } : void 0;
    return (i || a) && (!i || !s || a || o)
        ? (0, t.jsx)(e1.A, {
              heading: d,
              hideHeading: !i,
              headingIcon: c,
              children: i
                  ? (0, t.jsx)(ln, { displayProfile: n, className: lt.u })
                  : (0, t.jsx)(e0.A, { userBio: r, setLineClamp: !1 }),
          })
        : null;
}
var lr = n(982168),
    la = n(722868),
    ls = n(822775),
    lo = n(982985),
    ld = n(133385),
    lu = n(34188),
    lc = n(839534),
    lg = n(993401);
function lm(e) {
    let { analyticsLocations: l, newestAnalyticsLocation: n } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, lc.Cz)({ analyticsLocations: l, analyticsSource: n });
        }, [l, n]);
    return (0, t.jsx)(lg.q3, {
        action: "VISIT_SHOP",
        icon: lu.U,
        tooltipText: eY.intl.string(eY.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var lf = n(573355),
    lp = n(102951);
function lx(e) {
    let {
            user: l,
            currentUser: n,
            guildId: i,
            originGuildId: r,
            channelId: a,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, Y.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, la.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lp.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === Q.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lo.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lm, {}),
                        (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ls.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lm, {}),
                        (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(lo.e, { userId: l.id, onClose: lr.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lo.e, { userId: l.id, onClose: lr.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(ld.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === Q.eA$.FRIEND || o === Q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(lo.e, { userId: l.id, onClose: lr.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lf.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Q.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lo.e, { userId: l.id, onClose: lr.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lf.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lf.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(lo.l, { userId: l.id, onClose: lr.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lh = n(463156),
    lv = n(866665),
    lA = n(28863),
    lb = n(509434),
    lj = n(307301),
    lI = n(228366),
    ly = n(95561),
    lC = n(874490),
    lN = n(968309),
    lE = n(174459),
    lP = n(486020),
    lk = n(123917),
    lT = n(783419);
let lS = "User Profile Modal V2";
function lO(e) {
    let l = et.A.get(e);
    (0, lN.A)({ platformType: l.type, location: lS }),
        lE.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lS,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lR() {
    lI.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lO, stackingBehavior: "stack" });
}
function l_(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, Z.An)(r[lT.pK.CREATED_AT], n),
        s = et.A.get((0, lC.ML)(l.type));
    return (0, t.jsx)(lD, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(lv.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eE.E, { variant: "text-sm/normal", className: eX.GW, children: l.name }),
                  })
                : (0, t.jsx)(lA.Anchor, {
                      href: e,
                      className: eX.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eY.intl.string(eY.t.q5jLJB)}`
                              : `${l.name}, ${eY.intl.string(eY.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, ly.zV)(Q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lk.h)({ href: e, trusted: s?.type !== Q.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eX.vi,
                          children: [
                              (0, t.jsx)(lv.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      className: eX.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lb.I, { size: "xs", color: "currentColor", className: eX.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return l.type === Q.fg2.REDDIT
                ? (0, eB.xE)(r)
                : l.type === Q.fg2.STEAM
                  ? (0, eB.dy)(r)
                  : l.type === Q.fg2.BLUESKY || l.type === Q.fg2.MASTODON || l.type === Q.fg2.TWITTER
                    ? (0, eB.ED)(r)
                    : l.type === Q.fg2.PAYPAL
                      ? (0, eB.gZ)(r)
                      : l.type === Q.fg2.EBAY
                        ? (0, eB.ub)(r)
                        : l.type === Q.fg2.TIKTOK
                          ? (0, eB.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lL(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lP.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lD, {
        renderAccountName: function () {
            return (0, t.jsx)(lv.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eE.E, {
                    variant: "text-sm/normal",
                    className: eX.GW,
                    children: n.profile.username,
                }),
            });
        },
        renderMetadata: function () {
            return null;
        },
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function lD(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eX.FI,
        children: [
            (0, t.jsx)(lv.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eX.k_,
                    children: (0, t.jsx)("img", {
                        alt: eY.intl.formatToPlainString(eY.t.rtm15P, { name: i }),
                        className: a()(eX.tV, o ? eX.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eX.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eE.E, {
                                    variant: "text-xs/normal",
                                    children: eY.intl.format(eY.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eX.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lM(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([J.default], () => J.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eX.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eX.V,
                    children: [
                        l.map((e) => (0, t.jsx)(l_, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lL, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eV.D, {
                    className: eX.qG,
                    onClick: lR,
                    children: [
                        (0, t.jsx)(lj.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eE.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eY.intl.string(eY.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lw = n(193885),
    lG = n(408278),
    lF = n(993165),
    lV = n(554146),
    lU = n(194261),
    lB = n(315629),
    lz = n(789645),
    lW = n(297264),
    lH = n(812993),
    lq = n(821609),
    lK = n(39623),
    lY = n(890377),
    lX = n(517461),
    l$ = n(13875),
    lZ = n(131607),
    lJ = n(248778),
    lQ = n(465794),
    l0 = n(252732),
    l1 = n(945810);
let l2 = (0, l1.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l3 = (0, l1.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1, clientThemeAdaptedColorsEnabled: !1 },
        variations: {
            1: { enabled: !0, showPresetName: !0, clientThemeAdaptedColorsEnabled: !1 },
            2: { enabled: !0, showPresetName: !1, clientThemeAdaptedColorsEnabled: !0 },
        },
    });
function l5(e) {
    let { location: l } = e;
    return l3.useConfig({ location: l });
}
var l7 = n(487233),
    l8 = n(120386),
    l9 = n(317097),
    l6 = n(602853),
    l4 = n(922016),
    ne = n(508274),
    nl = n(654107),
    nn = n(930349);
function nt(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l6.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nl.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ep.A, K.A], () => ({
            pendingAccentColor: ep.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: K.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l9.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e3.p)({ accentColor: e }), []);
    return (0, t.jsx)(l4.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(ne.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(nn.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eY.intl.string(eY.t["/X3fkf"]),
                accessibleValue: (0, l9.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l9.Hl)(c) } }),
            }),
    });
}
var ni = n(450373),
    nr = n(317139);
function na(e, l) {
    let n = null === e,
        t = void 0 === e;
    return n || (t && null == l) ? eY.intl.string(eY.t["3Xph0/"]) : t ? eY.intl.string(eY.t.keN7ib) : e.description;
}
function ns(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: nr.o, style: { backgroundColor: l } });
}
function no(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: nr._ });
}
function nd(e) {
    let { displayProfile: l, bannerChange: n, shouldAnimate: i } = e,
        r = (0, l6.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l9.LX)(r),
        { hex: s } = (0, ni.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(no, { src: o }) : (0, t.jsx)(ns, { backgroundColor: s });
}
function nu(e) {
    let { displayProfile: l, bannerChange: n, ...i } = e;
    return (0, t.jsx)(nn.A, {
        ...i,
        accessibleLabel: eY.intl.string(eY.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(nd, { displayProfile: l, bannerChange: n, shouldAnimate: e }),
    });
}
var nc = n(569059);
function ng(e) {
    let { userId: l, guildId: n, disabled: r, errorMessageId: a } = e,
        s = i.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, l) {
            let n = (0, X.Ay)(e, l),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, $.cf)(
                    [ep.A, U.default, K.A],
                    () => ({
                        pendingBanner: ep.A.getPendingChanges(l ?? void 0).pendingBanner,
                        mainProfileBanner: U.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != l ? K.A.getGuildMemberProfile(e, l)?.banner : K.A.getUserProfile(e)?.banner,
                    }),
                    [l, e],
                ),
                a = null != l,
                s = a && (n?.isUsingGuildMemberBanner() ?? !1),
                o = null === t;
            return {
                displayProfile: n,
                pendingBanner: t,
                bannerChange: o && a && !s ? void 0 : t,
                accessibleValue: na(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(l, n),
        f = (0, eg.Ac)(d, g)
            ? {
                  onClick: () => (0, l0.rM)(null, g, (e) => (0, e3.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eY.intl.string(m ? eY.t.jHlJNS : eY.t.tT9n7D),
              }
            : void 0,
        p = (0, nc.P)({ guildId: n, returnRef: s });
    return (0, t.jsx)(nu, {
        buttonRef: s,
        displayProfile: o,
        bannerChange: u,
        accessibleValue: c,
        variant: "square",
        affordance: f,
        onClick: p,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: a,
    });
}
var nm = n(259065),
    nf = n(913563),
    np = n(898985),
    nx = n(922301),
    nh = n(660184),
    nv = n(701974),
    nA = n(523312);
let nb = "heading-xl/semibold";
function nj(e) {
    if (null == e) return eY.intl.string(eY.t["3Xph0/"]);
    let l = eY.intl.string((0, nf.A)(e.fontId)),
        n = eY.intl.string(np.J[e.effectId] ?? nv.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eY.intl.formatToPlainString(eY.t.A2XnI4, { fontName: l, effectName: n, colors: t });
}
function nI(e) {
    let { displayName: l, displayNameStyles: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: a()(nA.MC, { [nA.Xn]: null != n }),
        children:
            null != n
                ? (0, t.jsx)(eE.E, {
                      variant: nb,
                      children: (0, t.jsx)(nh.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nx.G.ANIMATED : nx.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eE.E, { variant: nb, className: nA.kr, children: l }),
    });
}
function ny(e) {
    let { displayName: l, displayNameStyles: n, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(nn.A, {
        ...r,
        accessibleLabel: eY.intl.string(eY.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(nI, { displayNameStyles: n, displayName: l, shouldAnimate: i || e }),
    });
}
function nC(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != n,
        c = (0, s.bG)([ef.Ay], () => (null != n ? (ef.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        g = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.globalName ?? null),
        m = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: h,
        } = (0, eg.B0)(l, n ?? void 0),
        v = u ? x : p,
        A = void 0 !== h,
        b = null === h,
        j = u && null != p,
        y = (0, eg.lw)({ pendingValue: h, userValue: p, guildValue: x, guildId: n ?? void 0 }),
        C = (0, eg.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? l.username,
        N = A ? null != h : null != v,
        E =
            null != y && N
                ? {
                      onClick: () => (0, e3.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(j ? eY.t.en3ogK : eY.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            o?.(), (0, nm.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(ny, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: nj(y),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: C,
        displayNameStyles: y,
        disabled: r,
    });
}
var nN = n(450232),
    nE = n(89851);
function nP(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: s } = e;
    return (0, t.jsxs)("div", {
        className: nE.Os,
        children: [
            (0, t.jsxs)("div", {
                className: a()(nE.Pf, { [nE.r9]: i }),
                children: [
                    (0, t.jsx)(lW.D, {
                        className: nE.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: l,
                    }),
                    r && (0, t.jsx)(nN.A, { className: nE.IX, size: "xs", color: "inherit", disabled: i }),
                    null != s && (0, t.jsx)("span", { className: nE.ot, children: s }),
                ],
            }),
            n,
        ],
    });
}
function nk(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: nE.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eE.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var nT = n(374654),
    nS = n(366010),
    nO = n(736653),
    nR = n(674658),
    n_ = n(617061),
    nL = n(203632),
    nD = n(536572);
let nM = new Set(),
    nw = 0;
var nG = n(993408),
    nF = n(841702),
    nV = n(515718),
    nU = n(195292);
function nB(e) {
    "" !== e.thumbnailPreviewSrc && (0, nV.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nz = n(599752),
    nW = n(249360);
let nH =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nq =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nK(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nO.Ay)(),
        u = (0, nS.M)(d) ? nH : nq,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nF.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nG.wo)(r, t), [r, t]),
                s = (0, nU.A)({ enabled: l, isInteracting: n, items: a, preload: nB });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nw += 1), nM.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nz.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nz.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nz.yY, { [nW.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nL.HL.FromStart,
                            isHovering: n,
                            useOpacityOnHover: !1,
                            useThumbnail: !0,
                            delayIntro: !g,
                        }),
                    }),
            ],
        })
    );
}
function nY(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([G.A], () => (null != n ? G.A.getGuild(n) : null)),
        c = (0, eg.N2)({ user: l }),
        g = (0, eg.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, eg.nZ)(n ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        h = (0, eg.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: v } = (0, nR.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, e3.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(x ? eY.t["SQy/Po"] : eY.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, n_.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(nn.A, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eY.intl.string(eY.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eY.intl.string(eY.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eY.intl.string(t ? eY.t["1M4m8w"] : eY.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, nD.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nK, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nX = n(515727),
    n$ = n(746002);
function nZ(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, n$.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: n$.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nV.NN)(n).catch(() => {});
        });
}
var nJ = n(715196);
function nQ(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function n0(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nO.Ay)(),
        u = (0, nS.M)(d) ? nH : nq,
        c = (0, E.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nF.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nG.MG)(r, t), [r, t]);
            return (0, nU.A)({ enabled: l, isInteracting: n, items: a, preload: nZ });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, T.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(nJ.hm, x, { [nW.O]: m }),
                    style: p,
                    children: (0, t.jsx)(k.A, { frame: f, filterLayer: nQ }),
                }),
            (0, t.jsx)("div", {
                className: a()(nJ.ti, { [nJ.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nJ.QQ, draggable: !1 }),
            }),
        ],
    });
}
function n1(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([G.A], () => (null != n ? G.A.getGuild(n) : null)),
        u = (0, eg.Xf)({ user: l }),
        c = (0, eg.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, eg.Tu)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, eg.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: h } = (0, nR.q)(x?.skuId),
        v = m ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, e3.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(p ? eY.t.j6hZyM : eY.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nX.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(nn.A, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eY.intl.string(eY.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eY.intl.string(eY.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eY.intl.string(t ? eY.t.yFeGB5 : eY.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nD.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(n0, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var n2 = n(684732),
    n3 = n(498596),
    n5 = n(871524);
function n7(e) {
    let { primaryColor: l, secondaryColor: n, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, l9.Hl)(l)}, ${(0, l9.Hl)(n)})`;
    return (0, t.jsx)("div", { className: n5.D7, style: { background: r }, children: i });
}
function n8(e) {
    let { color: l } = e,
        n = (0, l9.Hl)(l),
        i = (0, l9.bJ)(l, 0xffffff) < n3.Tr.NonText;
    return (0, t.jsx)("div", {
        className: n5.OS,
        children: (0, t.jsx)("div", { className: a()(n5.Hy, { [n5.rY]: i }), style: { backgroundColor: n } }),
    });
}
function n9(e) {
    let { color: l, disabled: n, onClick: r, buttonRef: a, ...s } = e,
        o = i.useRef(null);
    return (0, t.jsx)(eV.D, {
        ...s,
        innerRef: a ?? o,
        className: n5.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, t.jsx)(n8, { color: l }),
    });
}
function n6(e) {
    let {
        color: l,
        ariaLabel: n,
        suggestedColors: i,
        disabled: r,
        isOpen: a,
        onRequestOpen: s,
        onRequestClose: o,
        onSelect: d,
        buttonRef: u,
    } = e;
    return (0, t.jsx)(l4.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestOpen: s,
        onRequestClose: o,
        renderPopout: (e) => (0, t.jsx)(ne.VN, { ...e, value: l, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, t.jsx)(n9, { color: l, onClick: i, disabled: r, buttonRef: u, "aria-label": n, ...a });
        },
    });
}
function n4(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
            deleteButton: d,
            variant: u = "square",
            initialOpenPopout: c,
        } = e,
        [g, m] = i.useState(null),
        f = i.useRef(null),
        p = i.useRef(null),
        x = (0, l9.Hl)(l),
        h = (0, l9.Hl)(n),
        v = eY.intl.formatToPlainString(eY.t.FquTfm, { colorLabel: x }),
        A = eY.intl.formatToPlainString(eY.t.xOnm4z, { colorLabel: h });
    i.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? f : p;
            e.current?.focus(), m(c);
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let b =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      d.onClick(), f.current?.focus();
                  },
              }
            : void 0;
    return (0, t.jsx)(nn.Y, {
        variant: u,
        disabled: o,
        deleteButton: b,
        children: (0, t.jsxs)(n7, {
            primaryColor: l,
            secondaryColor: n,
            children: [
                (0, t.jsx)(n6, {
                    color: l,
                    ariaLabel: v,
                    suggestedColors: s,
                    onSelect: r,
                    disabled: o,
                    isOpen: "theme-primary" === g,
                    onRequestOpen: () => m("theme-primary"),
                    onRequestClose: () => m(null),
                    buttonRef: f,
                }),
                (0, t.jsx)(n6, {
                    color: n,
                    ariaLabel: A,
                    suggestedColors: s,
                    onSelect: a,
                    disabled: o,
                    isOpen: "theme-secondary" === g,
                    onRequestOpen: () => m("theme-secondary"),
                    onRequestClose: () => m(null),
                    buttonRef: p,
                }),
            ],
        }),
    });
}
function te(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, X.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ep.A, K.A], () => {
            let e = ep.A.getPendingChanges(n ?? void 0),
                t = K.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (K.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, em.V7)({ userId: l.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, ee.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l6.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        v = (0, nl.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e3.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, n2.l)(d, o)
                ? {
                      onClick: () => (0, e3.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eY.intl.string(eY.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(n4, {
              primaryColor: m,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && A([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && A([m, e]);
              },
              suggestedColors: v,
              disabled: r,
              deleteButton: b,
          });
}
var tl = n(629985);
function tn(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(tl.k, { [tl.V]: n }), children: l }) });
}
var tt = n(221877),
    ti = n(689175),
    tr = n(424290);
function ta(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(tt.animated.div, { className: tr.iK, style: e, children: l }) : null));
}
function ts(e) {
    let { children: l, floatingFooter: n } = e,
        r = i.useRef(null),
        s = null != n,
        [o, d] = i.useState(!1),
        [u, c] = i.useState("pending-measurement");
    i.useLayoutEffect(() => {
        if (!s) return void c("pending-measurement");
        let e = r.current?.getScrollerNode();
        null == e || (d(!1), c(e.scrollHeight - e.clientHeight >= 86 ? "dismiss-on-scroll" : "safe-padding"));
    }, [s]);
    let g = i.useCallback(
            (e) => {
                if ("dismiss-on-scroll" !== u) return;
                let { scrollTop: l } = e.currentTarget;
                !o && l >= 86 ? d(!0) : o && l <= 43 && d(!1);
            },
            [u, o],
        ),
        m = s && "safe-padding" === u;
    return (0, t.jsxs)("div", {
        className: tr.u6,
        children: [
            (0, t.jsx)(ti.zC, {
                ref: r,
                className: a()(tr.XG, { [tr.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: tr.Qs, children: l }),
            }),
            s && (0, t.jsx)(ta, { isDismissed: o, children: n }),
        ],
    });
}
var to = n(508770),
    td = n(732280),
    tu = n(811611),
    tc = n(976860),
    tg = n(402860);
function tm() {
    return i.useCallback(() => {
        (0, tc.pX)(Q.BVt.NITRO_HOME), (0, tg.closeUserProfileModal)();
    }, []);
}
var tf = n(570002),
    tp = n(202541),
    tx = n(155053);
function th() {
    let e = (0, td.V)();
    return e?.subscriptionTrial?.skuId === tp.pe.TIER_2 ? e : null;
}
function tv() {
    let e = (0, tf.A)(eY.intl.string(eY.t.pj0XBN));
    return (0, t.jsx)(lQ.A, { subscriptionTier: tp.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function tA(e) {
    let { trialOffer: l, onSubscribeSuccess: n } = e,
        i = tm(),
        r = (0, W.FY)({
            intervalType: l.subscriptionTrial?.interval,
            intervalCount: l.subscriptionTrial?.intervalCount,
        }),
        a = (0, tu.ux)(l.expiresAt?.toISOString());
    return (0, t.jsxs)("div", {
        className: tx.nH,
        children: [
            (0, t.jsxs)("div", {
                className: tx.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eY.intl.string(eY.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(to.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eY.intl.format(eY.t["fF+cgd"], { onClick: i }),
            }),
            (0, t.jsx)(lQ.A, {
                subscriptionTier: tp.pe.TIER_2,
                buttonTextOverride: r,
                onSubscribeModalClose: (e) => {
                    e && n?.();
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != a &&
                (0, t.jsx)(eE.E, { variant: "text-xs/normal", color: "text-muted", className: tx.u8, children: a }),
        ],
    });
}
function tb() {
    let e = th();
    return null == e ? (0, t.jsx)(tv, {}) : (0, t.jsx)(tA, { trialOffer: e });
}
var tj = n(55619),
    tI = n(848717);
function ty() {
    return (0, t.jsxs)("div", {
        className: tI.k,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eY.intl.string(eY.t.JFY17v),
            }),
            (0, t.jsx)(lq.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eY.intl.string(eY.t.R9GHya),
                onClick: function () {
                    return tj.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tC = n(342866),
    tN = n(968475);
function tE(e) {
    let { user: l, ...n } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([ep.A], () => ({
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tC.A, {
        ...n,
        variant: "full-height-bar",
        userId: l.id,
        avatarChange: a,
        accessibleValue: (0, tC.$)(a, l.avatar),
        imageInteractingClassName: null == r ? tN.$T : void 0,
    });
}
function tP(e) {
    let { userId: l, ...n } = e,
        i = (0, X.Ay)(l),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [ep.A, K.A],
            () => ({
                pendingBanner: ep.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ep.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: K.A.getUserProfile(l)?.banner,
            }),
            [l],
        ),
        d = void 0 !== a ? a : r;
    return (0, t.jsx)(nu, {
        ...n,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: na(d, o),
    });
}
function tk(e) {
    let { user: l, ...n } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: a,
        } = (0, s.cf)([ep.A], () => ({
            pendingDisplayNameStyles: ep.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: ep.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: ep.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, s.cf)([U.default], () => ({ globalName: U.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, eg.lw)({ pendingValue: a, userValue: o }) ?? l.username;
    return (0, t.jsx)(ny, {
        ...n,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: nj(d),
        shouldAlwaysAnimate: null == r,
    });
}
var tT = n(207803);
function tS(e) {
    let l = (0, X.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: t,
            pendingAvatar: i,
        } = (0, s.cf)([ep.A], () => ({
            tryItOutThemeColors: ep.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, em.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, ee.A)({
            user: e,
            displayProfile: l,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function tO(e) {
    let { user: l, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: a, pendingAvatarSrc: s, tryItOutThemeColors: o } = tS(l),
        d = (0, l6.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != s ? s : l.getAvatarURL(void 0, 80),
        c = (0, nl.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, tT.a)(e);
        }, []);
    return null == r || null == a
        ? null
        : (0, t.jsx)(n4, {
              variant: "full-height-bar",
              primaryColor: r,
              secondaryColor: a,
              onSelectPrimaryColor: (e) => {
                  (o?.[0] == null || e !== o[0]) && g([e, a]);
              },
              onSelectSecondaryColor: (e) => {
                  (o?.[1] == null || e !== o[1]) && g([r, e]);
              },
              suggestedColors: c,
              initialOpenPopout: n,
          });
}
function tR(e) {
    let { user: l, onClickPrimary: n, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: a } = tS(l);
    if (null == r || null == a) return null;
    let s = eY.intl.formatToPlainString(eY.t.FquTfm, { colorLabel: (0, l9.Hl)(r) }),
        o = eY.intl.formatToPlainString(eY.t.xOnm4z, { colorLabel: (0, l9.Hl)(a) });
    return (0, t.jsx)(nn.Y, {
        variant: "full-height-bar",
        children: (0, t.jsxs)(n7, {
            primaryColor: r,
            secondaryColor: a,
            children: [
                (0, t.jsx)(n9, { color: r, onClick: n, "aria-label": s }),
                (0, t.jsx)(n9, { color: a, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var t_ = n(847081);
function tL(e) {
    let { user: l, mode: n } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, lF.pA)(),
        c = (function (e) {
            let { analyticsLocations: l } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, nm.L)({ analyticsLocations: l, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [l, e]);
        })(r),
        g = (0, nc._)({ isPremiumTryItOut: !0, returnRef: a }),
        m = (0, nc.P)({ isPremiumTryItOut: !0, returnRef: s }),
        f = "edit" === n;
    return (
        i.useEffect(() => {
            if (f && !o.current) {
                switch (d) {
                    case "display-name-styles":
                        c();
                        break;
                    case "banner":
                        m();
                        break;
                    case "avatar":
                        g();
                        break;
                    default:
                        return;
                }
                o.current = !0;
            }
        }, [d, f, c, g, m]),
        (0, t.jsxs)("div", {
            className: t_.T,
            children: [
                (0, t.jsx)(nP, {
                    heading: eY.intl.string(eY.t.NEzEws),
                    children: (0, t.jsx)(tk, {
                        user: l,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(nP, {
                    heading: eY.intl.string(eY.t.DMeO2X),
                    children: f
                        ? (0, t.jsx)(tO, {
                              user: l,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, t.jsx)(tR, {
                              user: l,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, t.jsx)(nP, {
                    heading: eY.intl.string(eY.t.Vgdusv),
                    children: (0, t.jsx)(tP, {
                        userId: l.id,
                        buttonRef: s,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(nP, {
                    heading: eY.intl.string(eY.t.Dt3ZUr),
                    children: (0, t.jsx)(tE, {
                        user: l,
                        buttonRef: a,
                        onClick: f ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var tD = n(847374),
    tM = n(111159),
    tw = n(548118),
    tG = n(711014),
    tF = n(540637),
    tV = n(801461),
    tU = n(44482),
    tB = n(844222),
    tz = n(561392),
    tW = n(499957),
    tH = n(15626),
    tq = n(470791);
function tK(e) {
    let {
            options: l,
            value: n,
            onSelectionChange: r,
            label: s,
            className: o,
            listboxClassName: d,
            disabled: u = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: f,
            children: p,
        } = e,
        {
            isOpen: x,
            setIsOpen: h,
            refs: v,
            floatingStyles: A,
            getReferenceProps: b,
            getFloatingProps: j,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(tB.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tz.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tW.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: l,
                setIsOpen: n,
                refs: t,
                floatingStyles: r,
                getReferenceProps: a,
                getFloatingProps: s,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: y } = v,
        C = i.useContext(tH._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [S, O] = i.useState(null),
        R = null != S ? (0, tV.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        L = i.useRef(!1),
        D = i.useMemo(() => l.filter((e) => (0, tV.fI)(e.value, [n])), [n, l]),
        M = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        w = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        G = i.useCallback(() => {
            h(!1), k.current?.focus();
        }, [h]),
        F = i.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (x && null != S) {
                        let e = l[S];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && h(!1);
                }
            },
            [x, S, l, r, h],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: U, handleKeyDown: B } = (0, tF.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = U !== z.current;
        (z.current = U), null != U && e && (O(U), x || ((_.current = !0), h(!0)));
    }, [U, x, h]);
    let W = i.useCallback(
            (e) => {
                if (u) return;
                let n = l.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let l = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || h(!0);
                            return;
                        }
                        O((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && x)) {
                            if (null != S) {
                                let e = l[S];
                                if (null != e && !0 !== e.disabled) {
                                    V([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!x) return void h(!0);
                        O((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void h(!0);
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            V([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        O(0), x || ((_.current = !0), h(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        O(n - 1), x || ((_.current = !0), h(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (L.current = !0), h(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, S, V, G, r, h, B],
        ),
        H = Math.max(
            l.findIndex((e) => e.id === D[D.length - 1]?.id),
            0,
        ),
        q = i.useRef(!1);
    i.useEffect(() => {
        c || !x || q.current
            ? x || ((q.current = !1), O(null), (_.current = !1))
            : ((q.current = !0), _.current || O(l.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, l.length]);
    let K = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": R,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null || void 0,
        "aria-describedby": C?.describedById,
        onClick: M,
        onMouseDown: w,
        onKeyDown: W,
        onBlur: F,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (T.current = e), v.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: K }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: y,
                    className: a()(tq.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tF.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: D,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(tU.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tY = n(216384);
let tX = "MAIN_PROFILE";
function t$(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tw.Ay, { className: tY.$f, guild: l, size: tw.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tZ(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tY.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tY.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tY.qL,
                children: [
                    (0, t.jsx)(eE.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eE.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: i,
                        }),
                ],
            }),
        ],
    });
}
function tJ(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eV.D, {
        innerRef: r,
        className: a()(tY.L5, { [tY.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eE.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tY.v9,
                children: n,
            }),
            (0, t.jsx)(tD.a, {
                className: tY.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tQ(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tG.Ay], () => tG.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([G.A], () => G.A.getGuilds()),
        c = (0, s.bG)([eq.A], () => {
            let e = eq.A.getGuildId();
            return null == e || ep._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ef.Ay, tG.Ay], () => {
            let e = {};
            for (let l of tG.Ay.getFlattenedGuildIds()) {
                let n = ef.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tX,
                    label: eY.intl.string(eY.t["2p07FR"]),
                    value: tX,
                    leading: (0, t.jsx)(tM.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
                },
                l = n ?? c,
                i = d
                    .map((e) => {
                        if (e === l) return null;
                        let n = u[e];
                        return null == n
                            ? null
                            : {
                                  id: n.id,
                                  label: n.name,
                                  value: n.id,
                                  leading: (0, t.jsx)(t$, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(ea.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(t$, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? tX,
        p = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let n = e === tX ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tK, {
        className: tY.kL,
        label: eY.intl.string(eY.t.rki38K),
        listboxClassName: tY.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tZ, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tJ, { leading: p.value === tX ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var t0 = n(462887),
    t1 = n(765178),
    t2 = n(461797),
    t3 = n(469054),
    t5 = n(601298);
function t7() {
    let { preset: e, setPreset: l } = (0, lF.RQ)(),
        { clientThemeAdaptedColorsEnabled: n } = l5({ location: "useRandomPremiumTryItOutPreset" }),
        t = (0, nO.Ay)(),
        r = (0, t0.q)(t),
        a = i.useCallback(
            (e) => {
                let l = (0, t2.Wt)(e);
                (0, tT.w5)({
                    banner: (0, t5.X)({
                        assetOrigin: t3.E.NEW_ASSET,
                        imageUri: l.getBannerSrc(!1),
                        staticImageUri: l.getBannerSrc(!0),
                        description: l.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: n ? (r ? l.themeColors.light : l.themeColors.dark) : l.themeColorsLegacy,
                    displayNameStyles: l.displayNameStyles,
                });
            },
            [n, r],
        );
    i.useEffect(() => {
        ep.A.hasTryItOutChanges() || a(e);
    }, [a, e]);
    let s = i.useCallback(() => {
        let n = (0, t2.B$)(e),
            t = (0, t2.Wt)(n);
        lE.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }),
            l(n),
            a(n),
            t1.O.announce(eY.intl.formatToPlainString(eY.t.M2Hj9s, { presetName: t.getName() }));
    }, [e, l, a]);
    return { preset: e, onShuffle: s };
}
var t8 = n(23722),
    t9 = n(49999),
    t6 = n(288490);
let t4 = "profile-editing-nameplate-error",
    ie = "profile-editing-avatar-error",
    il = "profile-editing-avatar-decoration-error",
    it = "profile-editing-banner-error",
    ii = "profile-editing-display-name-style-error";
function ir(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(t6.D0, l),
        children: (0, t.jsx)("div", { className: t6.ZN, children: (0, t.jsx)(lU.LockIcon, { size: "xs" }) }),
    });
}
function ia() {
    let e = (0, tf.A)(eY.intl.string(eY.t.pj0XBN)),
        l = tm();
    return (0, t.jsxs)(lB.h, {
        color: "nitro-pink",
        className: t6.Lu,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eY.intl.format(eY.t.TmfgI2, { onClick: l }),
            }),
            (0, t.jsx)(lQ.A, { subscriptionTier: tp.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
function is() {
    let [e, l] = (0, lX.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: t6.X6,
              children: [
                  (0, t.jsx)(eE.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eY.intl.string(eY.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eV.D, {
                      "aria-label": eY.intl.string(eY.t.rSe9ra),
                      className: t6.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lz.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function io() {
    let e = tm(),
        l = (0, tf.A)(eY.intl.string(eY.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: t6.eW,
        children: [
            (0, t.jsxs)("div", {
                className: t6.tm,
                children: [
                    (0, t.jsx)(lW.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eY.intl.string(eY.t.bO0TOe),
                    }),
                    (0, t.jsx)(eE.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eY.intl.format(eY.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(lQ.A, { subscriptionTier: tp.pe.TIER_2, buttonTextOverride: l, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(ir, { className: t6.nd }),
        ],
    });
}
function id() {
    return (0, t.jsx)(eE.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: t6.BJ,
        "aria-hidden": !0,
        children: eY.intl.format(eY.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(eJ.t, { size: "xxs", color: "currentColor", className: t6.qp }),
        }),
    });
}
function iu(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nP, {
        heading: eY.intl.string(eY.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nT.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t4 : void 0 }),
            (0, t.jsx)(nk, { id: t4, message: r }),
        ],
    });
}
function ic(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nP, {
        heading: eY.intl.string(eY.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l7.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? ie : void 0 }),
            (0, t.jsx)(l8.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? il : void 0 }),
            (0, t.jsx)(nk, { id: ie, message: (0, l0.d3)(r) }),
            (0, t.jsx)(nk, { id: il, message: a }),
        ],
    });
}
function ig(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lJ.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, lZ.kn)(a && !i ? [lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nP, {
        heading: eY.intl.string(eY.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lH.Lp, { text: eY.intl.string(eY.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nC, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? ii : void 0,
                onOpen: d ? () => o(t9.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(nk, { id: ii, message: r }),
        ],
    });
}
function im(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nP, {
        heading: eY.intl.string(eY.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(te, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(ng, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? it : void 0 }),
            (0, t.jsx)(nk, { id: it, message: (0, l0.d3)(a) }),
        ],
    });
}
function ip(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nP, {
        heading: eY.intl.string(eY.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(nt, { user: l, disabled: n }),
    });
}
function ix(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, l$.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nP, {
        heading: eY.intl.string(r ? eY.t["Vfbar/"] : eY.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nY, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(n1, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let ih = "premium-try-it-out-description";
function iv(e) {
    let { user: l } = e,
        n = tm(),
        { navigate: i } = (0, lF.pA)();
    return (
        t7(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": ih,
            className: t6.DX,
            children: [
                (0, t.jsx)(ir, { className: t6.x$ }),
                (0, t.jsxs)("div", {
                    className: t6.sb,
                    children: [
                        (0, t.jsx)(eE.E, {
                            id: ih,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eY.intl.format(eY.t.TmfgI2, { onClick: n }),
                        }),
                        (0, t.jsx)(lq.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: lK.EyeIcon,
                            text: eY.intl.string(eY.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tL, { user: l, mode: "entrypoint" }),
            ],
        })
    );
}
function iA(e) {
    let {
            user: l,
            panelId: n,
            selectedGuildId: i,
            originGuildId: r,
            isLoading: a,
            isEditingDisabled: o,
            collapseButtonRef: d,
            onClosePanel: u,
            onSelectGuildId: c,
        } = e,
        g = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        { enabled: m } = l5({ location: "DefaultEditingPanelView" }),
        f = (0, t8.A)(c),
        p = null != i,
        x = W.Ay.canUsePremiumProfileCustomization(l),
        h = p && !x,
        v = !x && !p,
        A = v && m,
        b = p && !x && !g,
        j = a || o,
        I = (0, s.bG)([ep.A], () => ep.A.getErrors(i)),
        y = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        C = I.avatar?.[0],
        N = I.avatar_decoration_sku_id?.[0],
        E = I.banner?.[0],
        P = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0],
        k = l2.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = x || p ? "inline" : A ? "hidden" : k ? "end" : "hidden",
        S = (0, t.jsx)(ig, { user: l, guildId: i, disabled: j || h, errorMessage: P });
    return (0, t.jsxs)(tn, {
        hasGradientBackground: b,
        children: [
            (0, t.jsxs)("div", {
                className: t6.wx,
                children: [
                    (0, t.jsx)(lv.m, {
                        text: eY.intl.string(eY.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eV.D, {
                            innerRef: d,
                            className: t6.cS,
                            "aria-label": eY.intl.string(eY.t["l/A351"]),
                            onClick: u,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lY.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tQ, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: a,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, t.jsx)(ty, {})
                : (0, t.jsx)(ts, {
                      floatingFooter: v && !A ? (0, t.jsx)(ia, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              p && (x ? (0, t.jsx)(is, {}) : (0, t.jsx)(io, {})),
                              x && (0, t.jsx)(id, {}),
                              (0, t.jsx)(iu, { user: l, guildId: i, disabled: j || h, errorMessage: y }),
                              (0, t.jsx)(ic, {
                                  user: l,
                                  guildId: i,
                                  disabled: j || h,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: N,
                              }),
                              "inline" === T && S,
                              x || p
                                  ? (0, t.jsx)(im, {
                                        user: l,
                                        guildId: i,
                                        disabled: j || h,
                                        canUsePremiumProfileFeatures: x,
                                        bannerErrorMessage: E,
                                    })
                                  : (0, t.jsx)(ip, { user: l, disabled: j || h }),
                              (0, t.jsx)(ix, { user: l, guildId: i, disabled: j || h }),
                              "end" === T && S,
                              A &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(iv, { user: l }), (0, t.jsx)(tb, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var ib = n(110654);
function ij(e) {
    return null;
}
function iI(e) {
    let { activeSlide: l, direction: n, onTransitionComplete: r, children: s } = e,
        o = new Map(s.map((e) => [e.props.id, e]));
    if (!o.has(l)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = i.useState(l),
        [g, m] = i.useState(!1),
        f = "forwards" === n ? 1 : -1,
        p = (0, u.p)(
            l,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, n) => {
                    let { item: t } = n;
                    e.finished && t === l && (m(!1), t !== d && (c(l), r()));
                },
            },
            "respect-motion-settings",
        ),
        x = g || l !== d;
    return (0, t.jsx)("div", {
        className: a()(ib.kL, x && ib.ez),
        children: (0, t.jsx)("div", {
            className: ib.u4,
            children: p((e, l, n) => {
                let { key: i } = n,
                    r = o.get(l);
                return null == r
                    ? null
                    : (0, t.jsx)(
                          tt.animated.div,
                          {
                              className: ib.M6,
                              style: x
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: x || l !== d,
                              "aria-hidden": x || l !== d,
                              children: r.props.children,
                          },
                          i,
                      );
            }),
        }),
    });
}
var iy = n(477155),
    iC = n(206697),
    iN = n(926321),
    iE = n(663417),
    iP = n(145934);
let ik = "shuffle-options-a11y-description";
function iT() {
    let { preset: e, onShuffle: l } = t7(),
        { showPresetName: n } = l5({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let l = (0, t2.Wt)(e);
            return { presetName: l.getName(), presetHeader: l.getPreviewThumbnailSrc() };
        }, [e]);
    return n
        ? (0, t.jsxs)("div", {
              className: iP.kL,
              children: [
                  (0, t.jsx)(lv.m, {
                      text: eY.intl.string(eY.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(lG.K, {
                          icon: iE.RefreshIcon,
                          "aria-label": eY.intl.string(eY.t.VzqqFC),
                          "aria-describedby": ik,
                          onClick: l,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: ik, children: eY.intl.string(eY.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: iP.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: iP.L_, src: a }),
                          (0, t.jsxs)(eE.E, {
                              className: iP._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eY.intl.formatToPlainString(eY.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: iP.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(lq.$, {
                      icon: iN.DiceIcon,
                      text: eY.intl.string(eY.t.VzqqFC),
                      onClick: l,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": ik,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: ik, children: eY.intl.string(eY.t.bBRdiB) }),
              ],
          });
}
var iS = n(280406);
function iO(e) {
    let { user: l, onBack: n, backButtonRef: i } = e,
        r = th();
    return (0, t.jsxs)(tn, {
        children: [
            (0, t.jsxs)("div", {
                className: iS.wx,
                children: [
                    (0, t.jsx)(eV.D, {
                        innerRef: i,
                        "aria-label": eY.intl.string(eY.t["4IYwrw"]),
                        onClick: n,
                        className: iS.Gv,
                        children: (0, t.jsx)(iy.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(lW.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iS.R_,
                        children: eY.intl.string(eY.t.PxUx8e),
                    }),
                    (0, t.jsx)(eE.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iS.Ij,
                        children: eY.intl.string(eY.t.X0ir7L),
                    }),
                    (0, t.jsx)("div", { className: iS.ZZ, children: (0, t.jsx)(iT, {}) }),
                ],
            }),
            (0, t.jsx)(ts, {
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(tL, { user: l, mode: "edit" }),
                        null != r && (0, t.jsx)(tA, { trialOffer: r, onSubscribeSuccess: iC.T }),
                    ],
                }),
            }),
        ],
    });
}
var iR = n(199016);
let i_ = "user-profile-editing-panel",
    iL = "profile-modal-editing-panel-heading";
function iD(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(lv.m, {
        text: eY.intl.string(eY.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eV.D, {
            innerRef: i,
            "aria-label": eY.intl.string(eY.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": i_,
            className: a()(iR.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lw.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function iM(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(lv.m, {
            text: eY.intl.string(eY.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lG.K, {
                buttonRef: i,
                "aria-label": eY.intl.string(eY.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": i_,
                icon: lw.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iw(e) {
    let {
            selectedGuildId: l,
            originGuildId: n,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: d = !1,
            onClose: u,
            className: c,
            collapseButtonRef: g,
        } = e,
        p = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        { selectedPanel: x, readyPanel: h, handlePanelTransitionComplete: v, goBack: A } = (0, lF.pA)(),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (null == h || "premiumTryItOut" !== h.id || null != h.initialTarget) return;
        let e = requestAnimationFrame(() => b.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [h]),
    null == p)
        ? null
        : (0, t.jsx)("aside", {
              id: i_,
              "aria-labelledby": iL,
              className: a()(iR.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iR.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: iL, children: eY.intl.string(eY.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)(iI, {
                          activeSlide: x.id,
                          direction: "premiumTryItOut" === x.id ? "forwards" : "backwards",
                          onTransitionComplete: v,
                          children: [
                              (0, t.jsx)(ij, {
                                  id: "default",
                                  children: (0, t.jsx)(iA, {
                                      panelId: i_,
                                      user: p,
                                      selectedGuildId: l,
                                      originGuildId: n,
                                      isLoading: o,
                                      isEditingDisabled: d,
                                      collapseButtonRef: g,
                                      onClosePanel: u,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, t.jsx)(ij, {
                                  id: "premiumTryItOut",
                                  children: (0, t.jsx)(iO, { user: p, onBack: A, backButtonRef: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iG = n(669253),
    iF = n(347805),
    iV = n(629403),
    iU = n(612630),
    iB = n(372638),
    iz = n(61426);
function iW(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iU.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await iV.A.updateNote(l, e);
                    } catch {
                        f(eY.intl.string(eY.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        h = d && null == p,
        v = (0, e8.Ww)({ value: p ?? "", onCommit: x, disabled: h }),
        { handleStartEditing: A } = v,
        b = i.useRef(!1);
    if (
        (i.useEffect(() => {
            !r || o || d || b.current || ((b.current = !0), A());
        }, [r, o, d, A]),
        o)
    )
        return null;
    let j =
        null != p && p.length > 0
            ? (0, t.jsx)(eE.E, { variant: "text-sm/normal", color: "text-default", className: iz.t, children: p })
            : null;
    return (0, t.jsx)(iB.f, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eY.intl.string(eY.t.PbMNh2),
        label: eY.intl.string(eY.t.PbMNh2),
        placeholder: h ? eY.intl.string(eY.t["WLKx/9"]) : eY.intl.string(eY.t.VBhOe2),
        maxLength: Q.T7x,
        rows: 3,
        disabled: h,
        error: m,
    });
}
var iH = n(518477),
    iq = n(793222);
function iK(e) {
    let { userId: l } = e,
        n = (0, eb.g)(),
        { trackUserProfileAction: i } = (0, H.NJ)(),
        r = (0, Y.X)("UserProfileModalV2NotesSection"),
        a = r ? iW : iF.A;
    return (0, t.jsx)(e1.A, {
        heading: eY.intl.string(eY.t["mQKv+v"]),
        scrollTargetId: iH.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? iq.N : iq.w,
            autoFocus: n === iH.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var iY = n(123292),
    iX = n(667242),
    i$ = n(655214);
function iZ(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: iX.kL,
            children: (0, t.jsxs)("div", {
                className: a()(i$.oR, iX.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: iX.Kk, children: l }),
                    (0, t.jsx)(eE.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: iX.hP,
                            children: (0, t.jsx)(iY.Q, {
                                buttonRef: c,
                                variant: "primary",
                                textVariant: "text-sm/semibold",
                                text: r,
                                onClick: s,
                                disabled: o,
                            }),
                        }),
                ],
            }),
        })
    );
}
var iJ = n(346055),
    iQ = n(289873),
    i0 = n(615019);
function i1(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && t1.O.announce(eY.intl.string(eY.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iJ.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(i0.f, l && i0.z),
                    children: n && (0, t.jsx)(iQ.y, { type: iQ.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var i2 = n(568602),
    i3 = n(625494),
    i5 = n(61881);
function i7(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([i5.A, ep.A], () => i5.A.hasUnsavedChanges() || ep.A.hasUnsavedChanges());
    i.useEffect(() => {
        c || (u.current = 1.4);
    }, [c]);
    let g = i.useCallback(() => {
        null != d.current && (clearTimeout(d.current), (d.current = null)), r(!1);
    }, []);
    return (
        i.useEffect(() => {
            function e() {
                o(u.current),
                    (u.current = Math.min(u.current + 2, 15)),
                    r(!0),
                    null != d.current && clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                        r(!1), (d.current = null);
                    }, 300));
            }
            return (
                i3._.subscribe(Q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    i3._.unsubscribe(Q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(i2.b, { isShaking: n, intensity: a, children: l })
    );
}
n(46121);
var i8 = n(94160),
    i9 = n(933832),
    i6 = n(972213),
    i4 = n(97483),
    re = n(775602),
    rl = n(384377);
let rn = {
        [iH.jM.WIDGET_ADDED]: {
            message: eY.intl.string(eY.t.fFP1Uy),
            icon: (0, t.jsx)(i9.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iH.jM.WIDGET_REMOVED]: {
            message: eY.intl.string(eY.t.zzsK7h),
            icon: (0, t.jsx)(i9.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iH.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eY.intl.string(eY.t["84MExs"]),
            icon: (0, t.jsx)(i6.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i4.Ck.FAILURE,
        },
        [iH.jM.SOMETHING_WENT_WRONG]: {
            message: eY.intl.string(eY.t.F8FvUy),
            icon: (0, t.jsx)(i6.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i4.Ck.FAILURE,
        },
    },
    rt = (e) => {
        let { className: l } = e,
            n = (0, rl.fu)(),
            r = (0, s.bG)([re.Ay], () => re.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(rn[n]), t1.O.announce(rn[n].message)) : o(!1);
        }, [n]);
        let g = (0, u.p)(
            a,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, rl.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, rl.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(tt.animated.div, { className: l, style: e, children: (0, t.jsx)(iZ, { ...d }) }),
                ),
            })
        );
    };
var ri = n(297413),
    rr = n(465829),
    ra = n(826673),
    rs = n(576705),
    ro = n(761431),
    rd = n(997394);
function ru(e) {
    return null == e || "" === e ? void 0 : e;
}
function rc(e) {
    let l,
        n,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        m,
        f,
        { user: p, displayProfile: h } = e,
        { analyticsLocations: v } = (0, I.Ay)(),
        A = h?.guildId != null,
        b = h?.guildId ?? void 0,
        j = W.Ay.canUsePremiumProfileCustomization(p),
        y = (0, lJ.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: C, permissionsLoaded: N } = (0, s.cf)([rs.A, G.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = G.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: rs.A.can(Q.xBc.CHANGE_NICKNAME, e) || rs.A.can(Q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: E,
            previewValue: P,
            onCommit: k,
        } = ((n = null != (l = h?.guildId ?? null)),
        (r = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([ef.Ay], () => (null != l ? (ef.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (m = ru(c) ?? ru(r) ?? p.username),
        (f = ru(c) ?? p.username),
        {
            value: g,
            previewValue: n ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, e3.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, e3.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        T = (0, ro.TX)({ value: E, onCommit: k, disabled: !C }),
        { isEditing: S, handleCommit: O } = T,
        R = (0, s.bG)([ep.A], () => ep.A.getErrors(b ?? null)),
        _ = (0, e2.EC)(b ?? null),
        L = A ? R.nick?.[0] : R.global_name?.[0],
        D = _?.nick?.[0],
        M = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(b).pendingDisplayNameStyles),
        w = eY.intl.string(A ? eY.t.mq6Cg9 : eY.t.XuZU7A),
        F = A ? eY.intl.string(eY.t.YcDKr8) : p.username,
        V = eY.intl.string(A ? eY.t["g7OSZ/"] : eY.t.kyfzzc),
        B = i.useRef(null),
        z = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && O(),
                    y &&
                        (0, ra.Dr)(lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: t9.i.INDIRECT_ACTION,
                        }),
                    (0, nm.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: B });
            },
            [S, O, v, b, y],
        ),
        H = {
            icon: lw.V,
            tooltip: eY.intl.string(eY.t.lqKKI2),
            "aria-label": eY.intl.string(eY.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: z,
            buttonRef: B,
        },
        q =
            A && !C && N
                ? (0, t.jsx)(lv.m, {
                      text: eY.intl.string(eY.t.gzjxQi),
                      children: (0, t.jsx)(eV.D, {
                          tag: "span",
                          className: rd.C,
                          children: (0, t.jsx)(lU.LockIcon, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eY.intl.string(eY.t.VPu695),
                          }),
                      }),
                  })
                : null,
        K =
            null != P
                ? (0, t.jsx)(rr.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: M,
                      className: rd.d,
                      displayNameTrailing: q,
                  })
                : null;
    return (0, t.jsx)(ro.yV, {
        ...T,
        preview: K,
        placeholder: F,
        editButtonAriaLabel: V,
        label: w,
        maxLength: Q.zzC,
        trailing: C && j ? H : void 0,
        error: L,
        warning: D,
        disabled: !C,
    });
}
var rg = n(628072);
function rm(e) {
    let l,
        n,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((l = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, e3.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = (0, ro.TX)({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eY.intl.string(x ? eY.t.AXiE0i : eY.t["76Aqhl"]);
    return (0, t.jsx)(ro.yV, {
        ...f,
        size: "compact",
        className: a()(rg.k, p && rg.J),
        preview: h ? (0, t.jsx)(rr.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eY.intl.string(eY.t.h6VAO7),
        label: eY.intl.string(eY.t["rniRE+"]),
        placeholder: v,
        maxLength: Q.VE5,
        spellCheck: !1,
    });
}
var rf = n(145497),
    rp = n(685073),
    rx = n(318785),
    rh = n(534400),
    rv = n(436921),
    rA = n(743981),
    rb = n(295930),
    rj = n(594615);
let rI = "no-server-tag";
function ry(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = (0, rv.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        d = null == i || null == n;
    return (0, t.jsx)(eV.D, {
        innerRef: l,
        className: a()(o ? rb.qJ : rb.L5, { [rb.wK]: d }),
        ...s,
        children: (0, t.jsxs)(eE.E, {
            variant: o || d ? "text-xs/normal" : "text-xs/semibold",
            color: d ? "input-placeholder-text-default" : "text-default",
            className: rb.W3,
            tag: "span",
            children: [
                d
                    ? eY.intl.string(eY.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  rh.Z9,
                                  {
                                      src: (0, rp.gC)(n, r, rA.Sl.SIZE_14),
                                      size: rA.Sl.SIZE_14,
                                      className: rb.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rp.gC)(n, r, rA.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tD.a, { size: "xs", color: "currentColor", className: rb.u4 }),
            ],
        }),
    });
}
function rC() {
    let e = (0, rx.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.cf)([U.default], () => {
            let e = U.default.getCurrentUser();
            return (0, rp.Zo)(e?.primaryGuild);
        }),
        r = n.guildId ?? null,
        a = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingPrimaryGuildId),
        o = void 0 !== a ? a : r,
        d = null != o ? (l.get(o) ?? null) : null,
        u = null == d && o === r,
        c = d?.profile?.tag ?? (u ? (n.tag ?? null) : null),
        g = d?.profile?.badge ?? (u ? n.badge : void 0),
        m = i.useCallback(
            (e) =>
                e.id === rI
                    ? (0, t.jsx)("div", {
                          className: rj.uN,
                          children: (0, t.jsx)(eE.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: rb.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tU.c, { ...e }),
            [],
        ),
        f = i.useMemo(
            () => [
                { id: rI, label: eY.intl.string(eY.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rf.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(rh.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        p = i.useCallback((e) => {
            (0, e3.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length && null == r
        ? null
        : (0, t.jsx)(tK, {
              options: f,
              value: o,
              onSelectionChange: p,
              label: eY.intl.string(eY.t.Pdd1nd),
              listboxClassName: rb.yt,
              renderListItem: m,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(ry, { buttonRef: l, guildId: o, guildTag: c, guildBadge: g, ...n });
              },
          });
}
var rN = n(956495);
function rE(e) {
    let { displayProfile: l, nickname: n, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(rr.Ay, {
        ...r,
        guildId: l?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: l?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rP(e) {
    let l = (0, s.bG)([ep.A], () => ep.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(rE, { ...e, displayNameStylesOverride: l });
}
function rk(e) {
    let { user: l, displayProfile: n, trailing: i } = e,
        r = l.isProvisional
            ? null
            : (0, t.jsx)(ri.A, {
                  user: l,
                  forceUsername: !0,
                  className: rN.a1,
                  usernameClass: rN.eb,
                  discriminatorClass: rN.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(rc, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(rN.AK, rN.j6),
                children: [r, (0, t.jsx)(rr.Ce, {}), (0, t.jsx)(rm, { displayProfile: n }), (0, t.jsx)(rC, {}), i],
            }),
        ],
    });
}
function rT(e) {
    let { editingMode: l, ...n } = e;
    switch (l) {
        case "read-only":
            return (0, t.jsx)(rE, { ...n });
        case "try-it-out":
            return (0, t.jsx)(rP, { ...n });
        case "edit":
            return (0, t.jsx)(rk, { ...n });
        default:
            return (0, ea.xb)(l);
    }
}
n(321073);
var rS = n(97808),
    rO = n(980707),
    rR = n(477782),
    r_ = n(22231),
    rL = n(601255),
    rD = n(562819),
    rM = n(19575),
    rw = n(339984),
    rG = n(329801),
    rF = n(884362);
let rV = rM.Ay.getEnableHardwareAcceleration() ? rS.Js : rS.eu;
function rU(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function rB(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rO.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eY.intl.string(eY.t.YAgq3W),
        children: (0, t.jsx)(rR.rX, { children: n }),
    });
}
function rz(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eI.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != n,
                c = (0, s.bG)([ef.Ay], () => (null != n ? ef.Ay.getMember(n, l.id) : null)),
                g = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = u ? c?.avatar : l.avatar,
                f = (0, eg.z5)(g, m),
                p = u && null != l.avatar,
                x = W.Ay.canUsePremiumProfileCustomization(l),
                h = x || null == n,
                v = x || null == n,
                A = (0, s.bG)([G.A], () => (null != n ? G.A.getGuild(n) : null)),
                b = (0, eg.a4)({ user: l }),
                j = (0, eg.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, eg.CP)(n ?? void 0),
                C = void 0 !== y,
                N = null != (0, rL.A)(C ? y : j) && (C ? null != y : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        rU(() =>
                            (0, l0.XD)({
                                uploadType: rw.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        );
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        rU(() =>
                            (0, rD.L)({
                                analyticsLocations: d,
                                guild: A ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        );
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    r(),
                        (0, l0.rM)(null, m, (e) => (0, e3.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eg.WU)(p ? "reset" : "remove");
                }, [r, n, m, p]),
                S = i.useCallback(() => {
                    r(), (0, e3.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rR.Dr,
                                { id: "change-avatar", label: eY.intl.string(eY.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rR.Dr,
                                { id: "change-decoration", label: eY.intl.string(eY.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.twB3fz),
                                          action: T,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        N &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["9rx5GO"]),
                                          action: S,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, h, v, E, f, N, P, k, T, S]);
        })({ user: l, guildId: n, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rG.my, rG.vk, rF.kL, { [rF.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rV, { ...r, imageClassName: a()(rG.Lw, rF.HU) }),
                  (0, t.jsx)(l4.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l4.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rB, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rF.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: r_.PencilIcon,
                                  "aria-label": eY.intl.string(eY.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rW = n(514905);
function rH(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rO.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eY.intl.string(eY.t.FzU73A),
        children: (0, t.jsx)(rR.rX, { children: n }),
    });
}
function rq(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = (0, eg.N2)({ user: l, guildId: n ?? void 0 }),
                c = (0, eg.Xf)({ user: l, guildId: n ?? void 0 }),
                g = (0, eg.Xf)({ user: l, guildId: void 0 }),
                m = (0, l$.sk)("UserProfileModalV2EditableBanner"),
                f = W.Ay.canUsePremiumProfileCustomization(l),
                p = null == n,
                x = p || f,
                h = m && (p || f),
                v = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: b,
                    pendingProfileFrame: j,
                } = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n ?? void 0)),
                y = (0, s.bG)([K.A], () =>
                    null != n ? K.A.getGuildMemberProfile(l.id, n)?.banner : K.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.banner != null),
                N = (0, s.bG)([K.A], () => K.A.getUserProfile(l.id)?.profileEffect != null),
                P = (0, s.bG)([K.A], () => K.A.getUserProfile(l.id)?.profileFrame != null),
                k = (0, eg.Ac)(A, y),
                T = v && C,
                S = v && N,
                O = v && P,
                R = void 0 === b ? null != u : null != b,
                _ = void 0 === j ? null != c : null != j,
                L = (0, eg.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                D = (0, E.A)(L?.skuId, "UserProfileModalV2EditableBanner"),
                M = i.useCallback(() => {
                    r(),
                        (0, l0.XD)({
                            uploadType: rw.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                w = i.useCallback(() => {
                    r(),
                        (0, n_.W)({
                            analyticsLocations: d,
                            guild: null != n ? (G.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                F = i.useCallback(() => {
                    r(), (0, l0.rM)(null, y, (e) => (0, e3.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, y]),
                V = i.useCallback(() => {
                    r(), (0, e3.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                B = i.useCallback(() => {
                    r(),
                        (0, nX.w)({
                            analyticsLocations: d,
                            guild: null != n ? (G.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, D, a]),
                z = i.useCallback(() => {
                    r(), (0, e3.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                rR.Dr,
                                { id: "change-banner", label: eY.intl.string(eY.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rR.Dr,
                                { id: "change-effect", label: eY.intl.string(eY.t["/6nv6N"]), action: w },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rR.Dr,
                                { id: "change-frame", label: eY.intl.string(eY.t["oTSa/q"]), action: B },
                                "change-frame",
                            ),
                        ),
                    f &&
                        k &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.jHlJNS),
                                          action: F,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.tT9n7D),
                                          action: F,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    x &&
                        R &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.zUOlT6),
                                          action: V,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        _ &&
                        e.push(
                            O
                                ? (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.A0pzWn),
                                          action: z,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rR.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["8DfADq"]),
                                          action: z,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [T, f, x, h, S, O, k, R, _, M, w, B, F, V, z]);
        })({ user: l, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eC.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rW.kL, { [rW.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eC.A, { ...e, className: rW.Pr }),
                  (0, t.jsx)(l4.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l4.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rH, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rW.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: r_.PencilIcon,
                                  "aria-label": eY.intl.string(eY.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rK = n(777480),
    rY = n(107563),
    rX = n(570287);
n(938796);
var r$ = n(913453),
    rZ = n(667049),
    rJ = n(389667),
    rQ = n(837531),
    r0 = n(186272),
    r1 = n(447538);
let r2 = (e) => e * (2 - e),
    r3 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function r5(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function r7(e) {
    let { displayProfile: l, pendingBanner: n } = e;
    if ((0, el.Nx)()) return null;
    let i = l?.getPreviewBanner(n, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: r1.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function r8(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nM.add(e), () => nM.delete(e)),
            () => nw,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function r9(e) {
    var l;
    let n,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: m,
            channelId: f,
            displayProfile: p,
            nickname: x,
            hasEntered: h,
            customStatusPrompt: v,
            onClose: b,
            avatarDecorationOverride: j,
            avatarOverride: I,
            bannerOverride: C,
            accentColorOverride: N,
            profileEffectOverride: E,
            profileFrame: P,
            fadeInProfileFrame: T,
            editingMode: S,
            isLoading: D = !1,
        } = e,
        w = o.id === d.id,
        G = "edit" === S,
        U = i.useRef(null),
        B = i.useRef(null);
    i.useEffect(() => {
        if (w) return () => y.A.setState({ isOpen: !1 });
    }, [w]);
    let { isHoveringOrFocusing: W } = (0, O.A)(U),
        [H, q] = i.useState(),
        K = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? q("compact-xs") : l <= 380 ? q("compact-sm") : q(void 0);
        }, []);
    (0, A.g)(U, K, [], { fireOnMount: !0 });
    let Y = null != H ? r3[H] : void 0,
        X = i.useMemo(() => v ?? (0, R.A)(), [v]),
        { relationshipType: ee, originApplicationId: el } = (0, s.cf)([F.A], () => ({
            relationshipType: F.A.getRelationshipType(o.id),
            originApplicationId: F.A.getOriginApplicationId(o.id),
        })),
        eo =
            ((l = o.id),
            (n = (0, $.bG)([J.default], () => J.default.locale)),
            (r = (0, $.bG)([F.A], () => (F.A.getRelationshipType(l) === Q.eA$.FRIEND ? F.A.getSince(l) : null), [l])),
            (0, Z.An)(r, n)),
        ed = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        eu = (0, L.q)({ userId: o.id }),
        ec = (0, _.fi)(o.id),
        { appIdentities: eg, connections: em } = (function (e) {
            let { filteredAppIdentities: l } = (0, er.A)(e),
                n = (0, es.A)(e),
                t = i.useMemo(() => new Set(l?.map((e) => e.application_id) ?? []), [l]),
                r = (0, ei.A)([...t]).filter(ea.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        l
                            .map((e) => ({ identity: e, application: r.find((l) => l.id === e.application_id) }))
                            .filter((e) => {
                                let { application: l } = e;
                                return null != l;
                            }),
                    [l, r],
                ),
                connections: i.useMemo(
                    () =>
                        n.filter((e) => {
                            let l = et.A.get(e.type);
                            return (
                                !l?.migrationData?.getMigrationExperimentEnabled(
                                    "useVisibleUserProfileConnectionsAndAppIdentities",
                                ) || !t.has(l.migrationData.replacedBy)
                            );
                        }),
                    [n, t],
                ),
            };
        })(o.id),
        ef = (0, en.A)(o.id),
        ep = em.length > 0 || eg.length > 0,
        ev = ef.length > 0,
        eA = G ? rq : eC.A,
        eb = p?.guildId ?? u,
        ej = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: Y?.avatarSize ?? eh.T[ex.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: I,
        },
        eE = i.useCallback(() => {
            (0, eG.A)({ user: o, guildId: eb, alt: x });
        }, [x, eb, o]);
    return (0, t.jsxs)("main", {
        className: a()(r1.profile, null != H && r1[H]),
        ref: U,
        "aria-busy": D,
        children: [
            (0, t.jsxs)("div", {
                className: r1.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: r1.profileHeaderBannerContainer,
                        children: (0, t.jsx)(eA, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ex.d.MODAL_V2,
                            specOverrides: Y,
                            pendingBanner: C,
                            pendingAccentColor: N,
                        }),
                    }),
                    G
                        ? (0, t.jsx)(rz, { ...ej })
                        : (0, t.jsx)(eI.A, {
                              ...ej,
                              onOpenAvatar: "read-only" === S ? eE : void 0,
                              imageAnimatingClassName: "try-it-out" === S && null == I ? tN.$T : void 0,
                          }),
                    (0, t.jsx)(eM.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: ex.d.MODAL_V2,
                        hasEntered: h,
                        prompt: w ? X : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: r1.profileBody,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(rT, {
                                user: o,
                                displayProfile: p,
                                nickname: x,
                                trailing: (0, t.jsx)(ey.A, {
                                    displayProfile: p,
                                    themeType: ex.d.MODAL_V2,
                                    onClose: b,
                                    showPendingBadgeEdits: w,
                                    popoutAnchorRef: h ? B : void 0,
                                }),
                                onClose: b,
                                editingMode: S,
                            }),
                            (0, t.jsx)("div", { ref: B }),
                        ],
                    }),
                    ee === Q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: r1.profileOverlay,
                            children: (0, t.jsx)(eT.A, {
                                user: o,
                                applicationId: el,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: r1.profileBanner,
                            }),
                        }),
                    ec.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eD.A.Overlay,
                            {
                                className: r1.profileOverlay,
                                children: (0, t.jsx)(eT.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: r1.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: r1.profileOverlay,
                            children: (0, t.jsx)(e1.A, {
                                heading: eY.intl.string(eY.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: r1.profileBanner,
                                children: (0, t.jsx)(M.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eL.A, { user: o, className: r1.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: r1.profileOverlay,
                            children: (0, t.jsx)(e_.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: r1.profileButtons,
                        children: (0, t.jsx)(lx, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: ee,
                            onClose: b,
                        }),
                    }),
                    w && "try-it-out" !== S && (0, t.jsx)(eN.A, { isPremiumUser: (0, z.ki)(d) }),
                    !ed && (0, t.jsx)(li, { currentUser: d, displayProfile: p, canEditInPlace: G }),
                    eu.length > 0 &&
                        (0, t.jsx)(e1.A, {
                            heading: eY.intl.string(eY.t["Uv/eTx"]),
                            children: (0, t.jsx)(ek.A, { applicationIds: eu }),
                        }),
                    (0, t.jsx)(e1.A, {
                        heading: eY.intl.string(eY.t.a6XYD9),
                        children: (0, t.jsx)(eO.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iH.In }),
                    }),
                    null != eo &&
                        (0, t.jsx)(e1.A, {
                            heading: eY.intl.string(eY.t.wlTO8v),
                            children: (0, t.jsx)(eP, { friendsSinceDate: eo }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(ew.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: r1.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ed &&
                        (G || ep) &&
                        (0, t.jsx)(e1.A, {
                            heading: eY.intl.string(eY.t["3fe7U5"]),
                            scrollTargetId: iH.bk.CONNECTIONS,
                            children: (0, t.jsx)(lM, {
                                applicationIdentities: eg,
                                connections: em,
                                userId: o.id,
                                allowEditing: G,
                                className: r1.profileAppConnections,
                            }),
                        }),
                    !ed &&
                        ev &&
                        (0, t.jsx)(e1.A, {
                            heading: eY.intl.string(eY.t.PHjkRE),
                            scrollTargetId: iH.bk.APPS,
                            children: (0, t.jsx)(eZ, {
                                applicationRoleConnections: ef,
                                onClose: b,
                                className: r1.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iK, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(r8, { displayProfile: p, profileEffectOverride: E, isHovering: W }),
            null != P && (0, t.jsx)(k.A, { frame: P, filterLayer: r5, fadeIn: T }),
        ],
    });
}
function r6(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, forceShowPremium: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, ee.A)({ user: l, displayProfile: n, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, eu.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function r4(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: A,
            sessionId: y,
            initialTabSection: C,
            initialScrollTarget: k,
            transitionState: O,
            customStatusPrompt: R,
            openedAt: _,
            onClose: L,
            sourceAnalyticsLocations: M = [],
            themeContainerClassName: z,
        } = e,
        $ = l.id === n.id,
        Z = (0, t8.A)(L, $),
        {
            guildId: J,
            pendingGuildId: Q,
            isFetching: ee,
            handleSelectUserProfile: el,
            handleRetry: en,
            hasError: et,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, s.bG)([K.A], () => K.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
                f = i.useCallback(() => {
                    u("retrying"), g((e) => e + 1);
                }, []),
                p = i.useCallback((e) => {
                    u("loading"), r(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ec.A)(l, void 0, {
                            type: "modal",
                            guildId: t,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (o(t), u("idle"));
                            },
                            () => {
                                e || (o(t), u("idle"));
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, l, c]),
                {
                    guildId: a,
                    pendingGuildId: t,
                    isFetching: "idle" !== d,
                    hasError: "retrying" === d || (null != m && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: l.id, initialGuildId: r }),
        ei = i.useMemo(() => (null != J ? { [J]: [l.id] } : {}), [J, l.id]);
    (0, b.Eq)(ei, "UserProfileModalV2");
    let er = (0, Y.X)("UserProfileModalV2"),
        ea = (0, lF.YW)(),
        es = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        eu = (0, eo.A)(l.id) && er,
        eh = (0, ed.W)(l.id),
        eI = et && !eh,
        ey = eu && !es && !et && !ea,
        eC = ea ? "try-it-out" : ey ? "edit" : "read-only",
        {
            pendingThemeColors: eN,
            avatarDecorationOverride: eE,
            avatarOverride: eP,
            bannerOverride: ek,
            accentColorOverride: eT,
            profileEffectOverride: eO,
            profileFrameOverride: e_,
        } = (function (e) {
            let { userId: l, guildId: n, editingMode: t } = e;
            return (0, s.cf)([ep.A, U.default, ef.Ay, K.A], () => {
                if ("read-only" === t) return eA;
                let e = U.default.getUser(l);
                if (null == e) return eA;
                let i = ep.A.getTryItOutChanges(),
                    r =
                        "try-it-out" === t
                            ? {
                                  pendingThemeColors: i.tryItOutThemeColors,
                                  pendingAvatar: i.tryItOutAvatar,
                                  pendingBanner: i.tryItOutBanner,
                                  pendingAvatarDecoration: void 0,
                                  pendingProfileEffect: void 0,
                                  pendingAccentColor: void 0,
                                  pendingProfileFrame: void 0,
                              }
                            : ep.A.getPendingChanges(n),
                    a = null != n ? ef.Ay.getMember(n, l) : null,
                    s = K.A.getUserProfile(l),
                    o = null != n ? K.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: r.pendingThemeColors,
                    avatarDecorationOverride: (0, eg.us)({
                        userValue: e.avatarDecoration,
                        guildValue: a?.avatarDecoration,
                        pendingValue: r.pendingAvatarDecoration,
                        guildId: n,
                    }),
                    avatarOverride: (0, em.V7)({ userId: l, image: r.pendingAvatar, size: ev }),
                    bannerOverride: r.pendingBanner,
                    accentColorOverride: r.pendingAccentColor,
                    profileEffectOverride: (0, eg.us)({
                        userValue: s?.profileEffect,
                        guildValue: o?.profileEffect,
                        pendingValue: r.pendingProfileEffect,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, eg.us)({
                        userValue: s?.profileFrame,
                        guildValue: o?.profileFrame,
                        pendingValue: r.pendingProfileFrame,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, guildId: J, editingMode: eC }),
        {
            isExpanded: eL,
            isAnimating: eM,
            transition: ew,
            handleExpand: eG,
            handleCollapse: eF,
            refs: { expandIconButtonRef: eV, expandTabButtonRef: eU, collapseButtonRef: eB },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: r2 },
                    onRest: () => t(!1),
                }),
                a = (0, v.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                d = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    (c.current = "collapse"), t(!0), l(!0);
                }, []),
                m = i.useCallback(() => {
                    (c.current = "expand"), t(!0), l(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!n) {
                        if ("collapse" === c.current && e) (c.current = null), d.current?.focus();
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, n, a]),
                {
                    isExpanded: e,
                    isAnimating: n,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        ez = eu && !eL,
        eW = eu && (!eL || eM),
        { defaultWishlistId: eH } = (0, s.cf)([K.A], () => ({ defaultWishlistId: K.A.getFirstWishlistId(l.id) }));
    (0, w.fw)({ wishlistId: eH, userId: l.id });
    let eq = (0, ej.fC)(),
        eK = eI && (!eu || !ee),
        eX = eu && et,
        e$ = Q !== J || eX || null != eq.interactionType,
        eZ = (function (e) {
            let l,
                n,
                t,
                i,
                { user: r, currentUser: a } = e,
                { mutualFriendsCount: o, mutualGuilds: d } = (0, r$.A)(r),
                u = d?.length,
                c =
                    ((l = (0, s.bG)([U.default], () => U.default.getCurrentUser())),
                    (n = (0, s.bG)([K.A], () => K.A.getUserProfile(r.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        r.flags === r.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== r.id && !t),
                g = (0, rZ.A)(r.id),
                m =
                    ((i = (0, rX.A)(r.id)),
                    (0, s.bG)([K.A, rY.A, F.A], () => {
                        let e = K.A.getFirstWishlistId(r.id);
                        if (null == e) return !1;
                        let l = K.A.getWishlistSettings(r.id, e),
                            n = l?.visibility === rK.a.PUBLIC,
                            t = rY.A.getWishlistItems(e).length > 0,
                            a = !1 === r.nsfwAllowed,
                            s = a && F.A.isFriend(r.id);
                        return t && n && i && (!a || s);
                    }, [r, i])),
                f = [],
                p = r.id === a?.id,
                x = (0, rJ.A)(r.id),
                h = g.length > 0;
            return (
                (x || h) && f.push({ text: eY.intl.string(eY.t.laViwx), section: iH.RP.WIDGETS }),
                f.push({ text: eY.intl.string(eY.t.chq59f), section: iH.RP.ACTIVITY }),
                (p || (!p && m)) && f.push({ text: eY.intl.string(eY.t["7lZ31J"]), section: iH.RP.WISHLIST }),
                r.id !== a?.id &&
                    c &&
                    (f.push({ text: (0, rQ.A)(o), section: iH.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, r0.A)(u), section: iH.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eJ } = (0, I.Ay)([...M, j.A.USER_PROFILE_MODAL_V2]),
        eQ = (0, H.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: y,
            guildId: J,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        e0 = i.useCallback(() => {
            (0, q.Wn)({ analyticsLocations: eJ, ...eQ, action: iH.pt.SHOW_STYLES_PANEL }), eG();
        }, [eJ, eQ, eG]),
        e1 = i.useCallback(() => {
            (0, q.Wn)({ analyticsLocations: eJ, ...eQ, action: iH.pt.HIDE_STYLES_PANEL }), eF();
        }, [eJ, eQ, eF]),
        e2 = (0, X.Ay)(l.id, J);
    (0, D.A)(eJ, e2, iH.R7.MODAL_V2);
    let e3 = void 0 !== e_ ? e_?.skuId : e2?.profileFrame?.skuId,
        e5 = (0, E.A)(e3, "UserProfileModalV2"),
        e7 = (0, N.A)(e3),
        { profileFrameStyle: e8, profileFrameClassName: e9 } = (0, T.A)(e5);
    (0, P.A)({ skuId: e2?.profileFrame?.skuId, openedAt: _, context: eQ, analyticsLocations: eJ });
    let e6 = (0, s.bG)([U.default], () => W.Ay.canUsePremiumProfileCustomization(U.default.getCurrentUser())),
        e4 = ea || ($ && null != e2 && e6),
        le = B.Ay.useName(e2?.guildId, c, l),
        ll = (0, S.GV)(),
        ln = (0, s.bG)([G.A], () => (null != J ? G.A.getGuild(J) : null)),
        lt = $
            ? null != ln
                ? eY.intl.formatToPlainString(eY.t.M7OhOF, { guildName: ln.name })
                : eY.intl.string(eY.t.egQPgM)
            : eY.intl.format(eY.t.KRe1Fk, { name: le });
    return (0, t.jsx)(I.f5, {
        value: eJ,
        children: (0, t.jsx)(H.of, {
            value: eQ,
            openedAt: _,
            fetchStartedAt: e2?.fetchStartedAt,
            fetchEndedAt: e2?.fetchEndedAt,
            isLoaded: e2?.isLoaded,
            children: (0, t.jsx)(ej.Hl, {
                value: eq,
                children: (0, t.jsx)(eb.N, {
                    value: k,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tN.zr, { [tN.QF]: e2?.private === !0 }),
                        transitionState: O,
                        "aria-labelledby": ll,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(i7, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(r1.layoutContainer, e9, {
                                        [r1.editingPanelEnabled]: eu,
                                        [r1.editingPanelExpanded]: eu && eL,
                                        [r1.isAnimating]: eM,
                                    }),
                                    style: e8,
                                    children: [
                                        (0, t.jsxs)(r6, {
                                            user: l,
                                            displayProfile: e2,
                                            pendingThemeColors: eN,
                                            forceShowPremium: e4,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tN.Oo,
                                                    children: [
                                                        (0, t.jsx)(lh.A, { onClose: Z }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: ll, children: lt }),
                                                        }),
                                                        eW &&
                                                            (0, t.jsx)(iM, {
                                                                buttonRef: eV,
                                                                onClick: e0,
                                                                className: r1.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                ez &&
                                                    (0, t.jsx)("div", {
                                                        className: r1.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iD, {
                                                            innerRef: eU,
                                                            onClick: e0,
                                                            className: r1.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                eu &&
                                                    ew((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(iw, {
                                                                  className: a()(r1.editingPanel, {
                                                                      [r1.isExpanded]: eL,
                                                                  }),
                                                                  selectedGuildId: Q,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: el,
                                                                  onClose: e1,
                                                                  collapseButtonRef: eB,
                                                                  isLoading: ee,
                                                                  isEditingDisabled: et,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eD.A, {
                                                    className: a()(z, tN.A7, r1.profileContentOuter),
                                                    innerClassName: r1.profileContentInner,
                                                    user: l,
                                                    displayProfile: e2,
                                                    themeType: ex.d.MODAL_V2,
                                                    pendingThemeColors: eN,
                                                    isPrivate: e2?.private === !0,
                                                    forceShowPremium: e4,
                                                    children: [
                                                        (0, t.jsx)(r7, { displayProfile: e2, pendingBanner: ek }),
                                                        e2?.private === !0 && (0, t.jsx)(eR.A, {}),
                                                        !eI && (0, t.jsx)(rt, { className: r1.noticeContainer }),
                                                        eK &&
                                                            (0, t.jsx)("div", {
                                                                className: r1.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iZ, {
                                                                    icon: (0, t.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eY.intl.string(eY.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != en
                                                                            ? eY.intl.string(eY.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: en,
                                                                    actionDisabled: !eu && ee,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: r1.profileCardToastContainer,
                                                            children: (0, t.jsx)(eS.A, { userId: l.id, onClose: Z }),
                                                        }),
                                                        (0, t.jsxs)(i1, {
                                                            showScrim: e$,
                                                            showLoadingSpinner: ee,
                                                            className: r1.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(r9, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: J,
                                                                    channelId: c,
                                                                    displayProfile: e2,
                                                                    nickname: le,
                                                                    originGuildId: d,
                                                                    hasEntered: O === h.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: Z,
                                                                    avatarDecorationOverride: eE,
                                                                    avatarOverride: eP,
                                                                    bannerOverride: ek,
                                                                    accentColorOverride: eT,
                                                                    profileEffectOverride: eO,
                                                                    profileFrame: e5,
                                                                    fadeInProfileFrame: e7,
                                                                    editingMode: eC,
                                                                    isLoading: ee,
                                                                }),
                                                                (0, t.jsx)(i8.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: e2,
                                                                    guildId: J,
                                                                    channelId: c,
                                                                    items: eZ,
                                                                    initialSection: C,
                                                                    onClose: Z,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(iG.A, { userId: l.id, guildId: J, className: r1.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function ae(e) {
    return (0, t.jsx)(lF.tM, { children: (0, t.jsx)(r4, { ...e }) });
}
