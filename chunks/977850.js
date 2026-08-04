n.d(l, { A: () => r$ });
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
    x = n(738188),
    p = n(661531),
    h = n(231723),
    v = n(241524),
    A = n(770178),
    b = n(80682),
    j = n(793574),
    I = n(688810),
    C = n(480335),
    y = n(577390),
    N = n(372320),
    E = n(31956),
    P = n(744808),
    k = n(875741),
    T = n(915089),
    O = n(713517),
    S = n(645507),
    R = n(922590),
    _ = n(821269),
    M = n(93246),
    D = n(561794),
    L = n(71393),
    w = n(994500),
    G = n(351906),
    V = n(562153),
    F = n(474090),
    U = n(183555),
    B = n(47675),
    W = n(321191),
    z = n(591179),
    H = n(999291),
    K = n(702841),
    X = n(370480),
    Y = n(773669),
    q = n(652215),
    $ = n(101928),
    Z = n(837529),
    J = n(346713),
    Q = n(573648),
    ee = n(429913),
    el = n(321078),
    en = n(403362),
    et = n(484509),
    ei = n(579950),
    er = n(83931),
    ea = n(920601),
    es = n(903209),
    eo = n(919395),
    ed = n(101058),
    eu = n(696451),
    ec = n(287809),
    eg = n(836602),
    em = n(996988),
    ef = n(985253);
let ex = (0, d.FT)(ef.T[em.d.MODAL_V2].avatarSize),
    ep = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
async function eh(e, l) {
    let n = new Image();
    await new Promise((l, t) => {
        (n.onload = () => l()), (n.onerror = () => t(Error(`Failed to load image: ${e}`))), (n.src = e);
    });
    let t = null != l ? Math.min(1, l / Math.max(n.naturalWidth, n.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(n.naturalWidth * t)), (i.height = Math.round(n.naturalHeight * t));
    let r = i.getContext("2d");
    if (null == r) throw Error("Canvas 2d context unavailable");
    return r.drawImage(n, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
var ev = n(716804),
    eA = n(679492),
    eb = n(718019),
    ej = n(413492),
    eI = n(915614),
    eC = n(744753),
    ey = n(834730);
function eN(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(ey.E, { variant: "text-sm/normal", children: l });
}
var eE = n(361311),
    eP = n(931481),
    ek = n(439053),
    eT = n(743987),
    eO = n(312381),
    eS = n(501193),
    eR = n(383448),
    e_ = n(946356),
    eM = n(983495),
    eD = n(503026),
    eL = n(305385),
    ew = n(109112),
    eG = n(939249),
    eV = n(730134),
    eF = n(169869),
    eU = n(837057),
    eB = n(310419),
    eW = n(889227),
    ez = n(967198),
    eH = n(488995),
    eK = n(375708),
    eX = n(440016);
function eY(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eF.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eX.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eV.A, { user: new eW.A(l.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(ew._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eX.Hd,
                children: [
                    (0, t.jsxs)(eG.D, {
                        className: eX.OB,
                        onClick: function () {
                            i?.(),
                                (0, eU.transitionToGlobalDiscovery)({
                                    tab: eH.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eB.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(ey.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eX.nk,
                                children: eK.intl.format(eK.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eX.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eq(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, U.NJ)(),
        o = (0, s.bG)([Y.default], () => Y.default.locale),
        d = (0, s.bG)([ez.A], () => ez.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eX.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eX.FI,
                          children: (0, t.jsx)(eY, {
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
var e$ = n(240248),
    eZ = n(308244),
    eJ = n(81400),
    eQ = n(428262),
    e0 = n(84540),
    e1 = n(621466),
    e2 = n(231088),
    e7 = n(786826);
function e5(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function e3(e) {
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
            editButtonAriaLabel: x,
            label: p,
            maxLength: h,
            rows: v,
            emojiPickerIntention: A,
            error: b,
            warning: j,
            className: I,
        } = e,
        C =
            (null != h && (l ? i : n).length > h
                ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: h })
                : void 0) ?? b;
    return (0, t.jsx)(e2.ZL, {
        isEditing: l,
        preview: m,
        placeholder: f,
        editButtonRef: a,
        editButtonAriaLabel: x,
        onStartEditing: s,
        variant: "multiline",
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        previewErrorMessage: C,
        previewWarningMessage: j,
        input: (0, t.jsx)(e7.f, {
            editorRef: c,
            label: p,
            hideLabel: !0,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: h,
            error: C,
            helperText: j,
            placeholder: f,
            rows: v,
            emojiPickerIntention: A,
        }),
    });
}
let e9 = [
    { value: "HAIKU", label: () => eK.intl.string(eK.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eK.intl.string(eK.t.CXkR1L) },
    { value: "TELL_US", label: () => eK.intl.string(eK.t.eutr4P) },
    { value: "FUN_FACT", label: () => eK.intl.string(eK.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eK.intl.string(eK.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eK.intl.string(eK.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eK.intl.string(eK.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eK.intl.string(eK.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eK.intl.string(eK.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eK.intl.string(eK.t.u7WCGI) },
];
var e8 = n(307731);
function e4(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        m = eQ.Ay.canUsePremiumProfileCustomization(u),
        {
            value: f,
            previewValue: x,
            onCommit: p,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, e0.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        h = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = (0, e2.Ww)(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, l) {
                            if (l?.contains(e)) return !0;
                            let n = e5(l),
                                t = n?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, n.current),
                    [n],
                );
            i.useEffect(() => {
                if (!l) return;
                let e = n.current?.ownerDocument ?? document;
                function i(e) {
                    (0, e1.vq)(e.target) && !a(e.target) && t();
                }
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let i = e.relatedTarget;
                    !(0, e1.vq)(i) || a(i) || (null == e5(n.current) && t());
                },
                [l, a, t, n],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: f, onCommit: p }),
        v = !(0, e$.uJ)(x),
        A = (0, s.bG)([eg.A], () => eg.A.getErrors(g)),
        b = (0, eJ.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e9.length)), e9[e];
        }, []),
        y = c ? eK.intl.string(eK.t.yPJ9xr) : C.label();
    return !c || m
        ? (0, t.jsx)(e3, {
              ...h,
              preview: v ? (0, t.jsx)(eZ.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: y,
              editButtonAriaLabel: eK.intl.string(eK.t.lO3n7a),
              label: eK.intl.string(eK.t["YWo+Zd"]),
              emojiPickerIntention: e8.EmojiIntention.PROFILE,
              maxLength: q.NA2,
              error: j,
              warning: I,
          })
        : v
          ? (0, t.jsx)(eZ.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function e6(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, e$.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: eK.intl.string(eK.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e4, { displayProfile: l }) : (0, t.jsx)(eZ.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var le = n(982168),
    ll = n(722868),
    ln = n(822775),
    lt = n(982985),
    li = n(133385),
    lr = n(34188),
    la = n(839534),
    ls = n(993401);
function lo(e) {
    let { analyticsLocations: l, newestAnalyticsLocation: n } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, la.Cz)({ analyticsLocations: l, analyticsSource: n });
        }, [l, n]);
    return (0, t.jsx)(ls.q3, {
        action: "VISIT_SHOP",
        icon: lr.U,
        tooltipText: eK.intl.string(eK.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var ld = n(573355),
    lu = n(102951);
function lc(e) {
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
        u = (0, z.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, ll.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: x,
        } = (0, lu.J)({ userId: l.id }),
        p = m.length > 0 || f || x;
    return o === q.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lo, {}),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ln.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lo, {}),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === q.eA$.FRIEND || o === q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(ld.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === q.eA$.NONE && p
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(ld.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: x,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ld.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(lt.l, { userId: l.id, onClose: le.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lg = n(463156),
    lm = n(866665),
    lf = n(349288),
    lx = n(509434),
    lp = n(307301),
    lh = n(228366),
    lv = n(95561),
    lA = n(874490),
    lb = n(968309),
    lj = n(174459),
    lI = n(486020),
    lC = n(123917),
    ly = n(783419);
let lN = "User Profile Modal V2";
function lE(e) {
    let l = Q.A.get(e);
    (0, lb.A)({ platformType: l.type, location: lN }),
        lj.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lN,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lP() {
    lh.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lE, stackingBehavior: "stack" });
}
function lk(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, X.An)(r[ly.pK.CREATED_AT], n),
        s = Q.A.get((0, lA.ML)(l.type));
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(lm.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(ey.E, { variant: "text-sm/normal", className: eX.GW, children: l.name }),
                  })
                : (0, t.jsx)(lf.Anchor, {
                      href: e,
                      className: eX.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`
                              : `${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lv.zV)(q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lC.h)({ href: e, trusted: s?.type !== q.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eX.vi,
                          children: [
                              (0, t.jsx)(lm.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      className: eX.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lx.I, { size: "xs", color: "currentColor", className: eX.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return l.type === q.fg2.REDDIT
                ? (0, eF.xE)(r)
                : l.type === q.fg2.STEAM
                  ? (0, eF.dy)(r)
                  : l.type === q.fg2.BLUESKY || l.type === q.fg2.MASTODON || l.type === q.fg2.TWITTER
                    ? (0, eF.ED)(r)
                    : l.type === q.fg2.PAYPAL
                      ? (0, eF.gZ)(r)
                      : l.type === q.fg2.EBAY
                        ? (0, eF.ub)(r)
                        : l.type === q.fg2.TIKTOK
                          ? (0, eF.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lT(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lI.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            return (0, t.jsx)(lm.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(ey.E, {
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
function lO(e) {
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
            (0, t.jsx)(lm.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eX.k_,
                    children: (0, t.jsx)("img", {
                        alt: eK.intl.formatToPlainString(eK.t.rtm15P, { name: i }),
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
                                (0, t.jsx)(ey.E, {
                                    variant: "text-xs/normal",
                                    children: eK.intl.format(eK.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eX.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lS(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([Y.default], () => Y.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eX.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eX.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lk, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lT, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eG.D, {
                    className: eX.qG,
                    onClick: lP,
                    children: [
                        (0, t.jsx)(lp.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(ey.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eK.intl.string(eK.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lR = n(193885),
    l_ = n(408278),
    lM = n(461797);
let lD = i.createContext(null);
function lL(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a] = i.useState(lM.B$),
        s = i.useRef(a),
        o = i.useCallback(() => r(!0), []),
        d = i.useCallback(() => r(!1), []),
        u = i.useCallback(() => s.current, []),
        c = i.useCallback((e) => {
            s.current = e;
        }, []),
        g = i.useMemo(
            () => ({
                isPremiumTryItOutView: n,
                goToPremiumTryItOut: o,
                goBack: d,
                getCurrentPreset: u,
                cachePreset: c,
            }),
            [n, o, d, u, c],
        );
    return (0, t.jsx)(lD.Provider, { value: g, children: l });
}
function lw() {
    let e = i.useContext(lD);
    if (null == e)
        throw Error(
            "useUserProfileModalV2PremiumTryItOutContext must be used within UserProfileModalV2PremiumTryItOutContextProvider",
        );
    return e;
}
function lG() {
    let { isPremiumTryItOutView: e, goToPremiumTryItOut: l, goBack: n } = lw();
    return { isPremiumTryItOutView: e, goToPremiumTryItOut: l, goBack: n };
}
var lV = n(554146),
    lF = n(194261),
    lU = n(315629),
    lB = n(789645),
    lW = n(297264),
    lz = n(403581),
    lH = n(812993),
    lK = n(821609),
    lX = n(39623),
    lY = n(890377),
    lq = n(517461),
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
    l7 = (0, l1.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1 },
        variations: { 1: { enabled: !0, showPresetName: !0 }, 2: { enabled: !0, showPresetName: !1 } },
    });
function l5(e) {
    let { location: l } = e;
    return l7.useConfig({ location: l });
}
var l3 = n(487233),
    l9 = n(120386),
    l8 = n(317097),
    l4 = n(602853),
    l6 = n(922016),
    ne = n(508274),
    nl = n(654107),
    nn = n(930349);
function nt(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l4.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nl.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eg.A, W.A], () => ({
            pendingAccentColor: eg.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: W.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l8.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e0.p)({ accentColor: e }), []);
    return (0, t.jsx)(l6.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(ne.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(nn.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eK.intl.string(eK.t["/X3fkf"]),
                accessibleValue: (0, l8.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l8.Hl)(c) } }),
            }),
    });
}
var ni = n(450373),
    nr = n(796290);
function na(e, l) {
    let n = void 0 === e;
    return null === e || (n && null == l)
        ? eK.intl.string(eK.t["3Xph0/"])
        : n
          ? eK.intl.string(eK.t.keN7ib)
          : eK.intl.string(eK.t["l/iJSJ"]);
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
        r = (0, l4.r)(p.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l8.LX)(r),
        { hex: s } = (0, ni.A)(a),
        o = n ?? l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(no, { src: o }) : (0, t.jsx)(ns, { backgroundColor: s });
}
function nu(e) {
    let { displayProfile: l, bannerChange: n, ...i } = e;
    return (0, t.jsx)(nn.A, {
        ...i,
        accessibleLabel: eK.intl.string(eK.t.yiRnNO),
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
            let n = (0, H.Ay)(e, l),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, K.cf)(
                    [eg.A, ec.default, W.A],
                    () => ({
                        pendingBanner: eg.A.getPendingChanges(l ?? void 0).pendingBanner,
                        mainProfileBanner: ec.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != l ? W.A.getGuildMemberProfile(e, l)?.banner : W.A.getUserProfile(e)?.banner,
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
        f = (0, eo.Ac)(d, g)
            ? {
                  onClick: () => (0, l0.rM)(null, g, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eK.intl.string(m ? eK.t.jHlJNS : eK.t.tT9n7D),
              }
            : void 0,
        x = (0, nc.P)({ guildId: n, returnRef: s });
    return (0, t.jsx)(nu, {
        buttonRef: s,
        displayProfile: o,
        bannerChange: u,
        accessibleValue: c,
        variant: "square",
        affordance: f,
        onClick: x,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: a,
    });
}
var nm = n(259065),
    nf = n(913563),
    nx = n(898985),
    np = n(922301),
    nh = n(660184),
    nv = n(864386),
    nA = n(257551);
let nb = "heading-xl/semibold";
function nj(e) {
    if (null == e) return eK.intl.string(eK.t["3Xph0/"]);
    let l = eK.intl.string((0, nf.A)(e.fontId)),
        n = eK.intl.string(nx.J[e.effectId] ?? nv.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eK.intl.formatToPlainString(eK.t.A2XnI4, { fontName: l, effectName: n, colors: t });
}
function nI(e) {
    let { displayName: l, displayNameStyles: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nA.M,
        children:
            null != n
                ? (0, t.jsx)(ey.E, {
                      variant: nb,
                      children: (0, t.jsx)(nh.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? np.G.ANIMATED : np.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(ey.E, { variant: nb, className: nA.W, color: "text-muted", children: l }),
    });
}
function nC(e) {
    let { displayName: l, displayNameStyles: n, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(nn.A, {
        ...r,
        accessibleLabel: eK.intl.string(eK.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(nI, { displayNameStyles: n, displayName: l, shouldAnimate: i || e }),
    });
}
function ny(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != n,
        c = (0, s.bG)([eu.Ay], () => (null != n ? (eu.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        g = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null),
        m = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: x,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: h,
        } = (0, eo.B0)(l, n ?? void 0),
        v = u ? p : x,
        A = void 0 !== h,
        b = null === h,
        j = u && null != x,
        C = (0, eo.lw)({ pendingValue: h, userValue: x, guildValue: p, guildId: n ?? void 0 }),
        y = (0, eo.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? l.username,
        N = A ? null != h : null != v,
        E =
            null != C && N
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(j ? eK.t.en3ogK : eK.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            o?.(), (0, nm.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(nC, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: nj(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: y,
        displayNameStyles: C,
        disabled: r,
    });
}
var nN = n(324970);
function nE(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: nN.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nN.Pf,
                children: [
                    (0, t.jsx)(lW.D, {
                        className: nN.DV,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(lm.m, {
                            text: eK.intl.string(eK.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lz.t, {
                                className: nN.IX,
                                size: "xs",
                                color: i ? p.A.colors.ICON_MUTED : p.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                    null != a && (0, t.jsx)("span", { className: nN.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nP(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: nN.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(ey.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var nk = n(374654),
    nT = n(366010),
    nO = n(736653),
    nS = n(674658),
    nR = n(617061),
    n_ = n(203632),
    nM = n(536572);
let nD = new Set(),
    nL = 0;
var nw = n(993408),
    nG = n(841702),
    nV = n(515718),
    nF = n(195292);
function nU(e) {
    "" !== e.thumbnailPreviewSrc && (0, nV.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nB = n(580705),
    nW = n(462397);
let nz =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nH =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nK(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nO.Ay)(),
        u = (0, nT.M)(d) ? nz : nH,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nG.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nw.wo)(r, t), [r, t]),
                s = (0, nF.A)({ enabled: l, isInteracting: n, items: a, preload: nU });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nL += 1), nD.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nB.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nB.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nB.yY, { [nW.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: n_.HL.FromStart,
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
function nX(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
        c = (0, eo.N2)({ user: l }),
        g = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, eo.nZ)(n ?? void 0),
        f = void 0 !== m,
        x = null === m || (!f && null == g),
        p = d && null != c,
        h = (0, eo.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: v } = (0, nS.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(p ? eK.t["SQy/Po"] : eK.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nR.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(nn.A, {
        affordance: x && !p ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eK.intl.string(eK.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eK.intl.string(eK.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eK.intl.string(t ? eK.t["1M4m8w"] : eK.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, nM.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nK, { effect: h, shouldAnimate: e, isEmpty: x, hasMainProfileFallback: p, disabled: r }),
    });
}
var nY = n(515727),
    nq = n(746002);
function n$(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nq.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nq.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nV.NN)(n).catch(() => {});
        });
}
var nZ = n(443727);
function nJ(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nQ(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nO.Ay)(),
        u = (0, nT.M)(d) ? nz : nH,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nG.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nw.MG)(r, t), [r, t]);
            return (0, nF.A)({ enabled: l, isInteracting: n, items: a, preload: n$ });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: x, profileFrameClassName: p } =
            null != f ? (0, k.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(nZ.hm, p, { [nW.O]: m }),
                    style: x,
                    children: (0, t.jsx)(P.A, { frame: f, filterLayer: nJ }),
                }),
            (0, t.jsx)("div", {
                className: a()(nZ.ti, { [nZ.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nZ.QQ, draggable: !1 }),
            }),
        ],
    });
}
function n0(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
        u = (0, eo.Xf)({ user: l }),
        c = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, eo.Tu)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        x = o && null != u,
        p = (0, eo.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: h } = (0, nS.q)(p?.skuId),
        v = m ? null != g : null != c,
        A =
            null != p && v
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(x ? eK.t.j6hZyM : eK.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nY.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(nn.A, {
        affordance: f && !x ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eK.intl.string(eK.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eK.intl.string(eK.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eK.intl.string(t ? eK.t.yFeGB5 : eK.t["2kAxKM"]);
        })({ profileFramePreview: p, productName: (0, nM.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nQ, {
                profileFramePreview: p,
                isEmpty: f,
                hasMainProfileFallback: x,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var n1 = n(684732),
    n2 = n(498596),
    n7 = n(211003);
function n5(e) {
    let { primaryColor: l, secondaryColor: n, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, l8.Hl)(l)}, ${(0, l8.Hl)(n)})`;
    return (0, t.jsx)("div", { className: n7.D7, style: { background: r }, children: i });
}
function n3(e) {
    let { color: l } = e,
        n = (0, l8.Hl)(l),
        i = (0, l8.bJ)(l, 0xffffff) < n2.Tr.NonText;
    return (0, t.jsx)("div", {
        className: n7.OS,
        children: (0, t.jsx)("div", { className: a()(n7.Hy, { [n7.rY]: i }), style: { backgroundColor: n } }),
    });
}
function n9(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: a, onSelect: s, buttonRef: o } = e,
        d = i.useRef(null),
        u = o ?? d;
    return (0, t.jsx)(l6.Y, {
        targetElementRef: u,
        renderPopout: (e) => (0, t.jsx)(ne.VN, { ...e, value: l, onChange: s, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...i } = e;
            return (0, t.jsx)(eG.D, {
                ...i,
                innerRef: u,
                className: n7.Dh,
                onClick: r ? void 0 : n,
                "aria-label": a,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)(n3, { color: l }),
            });
        },
    });
}
function n8(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
            deleteButton: d,
            variant: u = "square",
        } = e,
        c = i.useRef(null),
        g = (0, l8.Hl)(l),
        m = (0, l8.Hl)(n),
        f = eK.intl.formatToPlainString(eK.t.FquTfm, { colorLabel: g }),
        x = eK.intl.formatToPlainString(eK.t.xOnm4z, { colorLabel: m }),
        p =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), c.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(nn.Y, {
        variant: u,
        disabled: o,
        deleteButton: p,
        children: (0, t.jsxs)(n5, {
            primaryColor: l,
            secondaryColor: n,
            children: [
                (0, t.jsx)(n9, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: c }),
                (0, t.jsx)(n9, { color: n, suggestedColors: s, ariaLabel: x, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function n4(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, H.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([eg.A, W.A], () => {
            let e = eg.A.getPendingChanges(n ?? void 0),
                t = W.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (W.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, ed.V7)({ userId: l.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, $.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        x = (0, l4.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        v = (0, nl.rh)(h, x, !1),
        A = i.useCallback(
            (e) => {
                (0, e0.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, n1.l)(d, o)
                ? {
                      onClick: () => (0, e0.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eK.intl.string(eK.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(n8, {
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
var n6 = n(134976);
function te(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(n6.k, { [n6.V]: n }), children: l }) });
}
var tl = n(534740),
    tn = n(689175),
    tt = n(672905);
function ti(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(tl.animated.div, { className: tt.iK, style: e, children: l }) : null));
}
function tr(e) {
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
        className: tt.u6,
        children: [
            (0, t.jsx)(tn.zC, {
                ref: r,
                className: a()(tt.XG, { [tt.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: tt.Qs, children: l }),
            }),
            s && (0, t.jsx)(ti, { isDismissed: o, children: n }),
        ],
    });
}
var ta = n(976860),
    ts = n(975732);
function to() {
    return i.useCallback(() => {
        (0, ta.pX)(q.BVt.NITRO_HOME), (0, ts.closeUserProfileModal)();
    }, []);
}
var td = n(724651),
    tu = n(410516),
    tc = n(202541);
function tg(e) {
    let l = (0, s.bG)([ec.default], () => eQ.Ay.isPremium(ec.default.getCurrentUser())),
        n = (0, td.O)();
    return l
        ? eK.intl.string(eK.t.AfRWI8)
        : (0, tu.U9)(n, tc.pe.TIER_2) && n?.discount.amount != null
          ? eK.intl.formatToPlainString(eK.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
function tm() {
    let e = tg(eK.intl.string(eK.t.pj0XBN)),
        l = to();
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eK.intl.format(eK.t.TmfgI2, { onClick: l }),
            }),
            (0, t.jsx)(lQ.A, { subscriptionTier: tc.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
var tf = n(55619),
    tx = n(37407);
function tp() {
    return (0, t.jsxs)("div", {
        className: tx.k,
        children: [
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eK.intl.string(eK.t.JFY17v),
            }),
            (0, t.jsx)(lK.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eK.intl.string(eK.t.R9GHya),
                onClick: function () {
                    return tf.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var th = n(342866);
function tv(e) {
    let { user: l, ...n } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([eg.A], () => ({
            pendingAvatar: eg.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eg.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(th.A, {
        ...n,
        variant: "full-height-bar",
        userId: l.id,
        avatarChange: a,
        accessibleValue: (0, th.$)(a, l.avatar),
        showTryItOutSpinAnimation: null == r,
    });
}
function tA(e) {
    let { userId: l, ...n } = e,
        i = (0, H.Ay)(l),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [eg.A, W.A],
            () => ({
                pendingBanner: eg.A.getPendingChanges().pendingBanner,
                tryItOutBanner: eg.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: W.A.getUserProfile(l)?.banner,
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
function tb(e) {
    let { user: l, ...n } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: a,
        } = (0, s.cf)([eg.A], () => ({
            pendingDisplayNameStyles: eg.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: eg.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: eg.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, s.cf)([ec.default], () => ({ globalName: ec.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, eo.lw)({ pendingValue: a, userValue: o }) ?? l.username;
    return (0, t.jsx)(nC, {
        ...n,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: nj(d),
        shouldAlwaysAnimate: null == r,
    });
}
function tj(e) {
    let l = (0, H.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: t,
            pendingAvatar: i,
        } = (0, s.cf)([eg.A], () => ({
            tryItOutThemeColors: eg.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: eg.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: eg.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, ed.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, $.A)({
            user: e,
            displayProfile: l,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function tI(e) {
    let { user: l, ...n } = e,
        { primaryColor: i, secondaryColor: r } = tj(l);
    if (null == i || null == r) return null;
    let a = (0, l8.Hl)(i),
        s = (0, l8.Hl)(r),
        o = eK.intl.formatToPlainString(eK.t.FquTfm, { colorLabel: a }),
        d = eK.intl.formatToPlainString(eK.t.xOnm4z, { colorLabel: s });
    return (0, t.jsx)(nn.A, {
        ...n,
        variant: "full-height-bar",
        accessibleLabel: eK.intl.string(eK.t.DMeO2X),
        accessibleValue: `${o}, ${d}`,
        renderPreview: () =>
            (0, t.jsxs)(n5, {
                primaryColor: i,
                secondaryColor: r,
                children: [(0, t.jsx)(n3, { color: i }), (0, t.jsx)(n3, { color: r })],
            }),
    });
}
var tC = n(207803);
function ty(e) {
    let { user: l } = e,
        { primaryColor: n, secondaryColor: r, pendingAvatarSrc: a, tryItOutThemeColors: s } = tj(l),
        o = (0, l4.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : l.getAvatarURL(void 0, 80),
        u = (0, nl.rh)(d, o, !1),
        c = i.useCallback((e) => {
            (0, tC.a)(e);
        }, []);
    return null == n || null == r
        ? null
        : (0, t.jsx)(n8, {
              variant: "full-height-bar",
              primaryColor: n,
              secondaryColor: r,
              onSelectPrimaryColor: (e) => {
                  (s?.[0] == null || e !== s[0]) && c([e, r]);
              },
              onSelectSecondaryColor: (e) => {
                  (s?.[1] == null || e !== s[1]) && c([n, e]);
              },
              suggestedColors: u,
          });
}
var tN = n(502096);
function tE(e) {
    let { user: l, mode: n } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        { goToPremiumTryItOut: s } = lG(),
        o = (function () {
            let { analyticsLocations: e } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, nm.L)({ analyticsLocations: e, isPremiumTryItOut: !0, stackingBehavior: "stack" });
            }, [e]);
        })(),
        d = (0, nc._)({ isPremiumTryItOut: !0, returnRef: r }),
        u = (0, nc.P)({ isPremiumTryItOut: !0, returnRef: a }),
        c = "edit" === n;
    return (0, t.jsxs)("div", {
        className: tN.T,
        children: [
            (0, t.jsx)(nE, {
                heading: eK.intl.string(eK.t.NEzEws),
                showNitroIcon: !0,
                children: (0, t.jsx)(tb, { user: l, onClick: c ? o : s, "aria-haspopup": c ? "dialog" : void 0 }),
            }),
            (0, t.jsx)(nE, {
                heading: eK.intl.string(eK.t.DMeO2X),
                showNitroIcon: !0,
                children: c ? (0, t.jsx)(ty, { user: l }) : (0, t.jsx)(tI, { user: l, onClick: s }),
            }),
            (0, t.jsx)(nE, {
                heading: eK.intl.string(eK.t.Vgdusv),
                showNitroIcon: !0,
                children: (0, t.jsx)(tA, {
                    userId: l.id,
                    buttonRef: a,
                    onClick: c ? u : s,
                    "aria-haspopup": c ? "dialog" : void 0,
                }),
            }),
            (0, t.jsx)(nE, {
                heading: eK.intl.string(eK.t.vtFfPX),
                showNitroIcon: !0,
                children: (0, t.jsx)(tv, {
                    user: l,
                    buttonRef: r,
                    onClick: c ? d : s,
                    "aria-haspopup": c ? "dialog" : void 0,
                }),
            }),
        ],
    });
}
var tP = n(847374),
    tk = n(111159),
    tT = n(548118),
    tO = n(711014),
    tS = n(540637),
    tR = n(801461),
    t_ = n(44482),
    tM = n(844222),
    tD = n(561392),
    tL = n(499957),
    tw = n(15626),
    tG = n(37712);
function tV(e) {
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
            children: x,
        } = e,
        {
            isOpen: p,
            setIsOpen: h,
            refs: v,
            floatingStyles: A,
            getReferenceProps: b,
            getFloatingProps: j,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(tM.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tD.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tL.DL)(o, {
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
        { setFloating: C } = v,
        y = i.useContext(tw._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [O, S] = i.useState(null),
        R = null != O ? (0, tR.ZN)(P, O) : void 0,
        _ = i.useRef(!1),
        M = i.useRef(!1),
        D = i.useMemo(() => l.filter((e) => (0, tR.fI)(e.value, [n])), [n, l]),
        L = i.useCallback(() => {
            u || h(!p);
        }, [u, h, p]),
        w = i.useCallback(
            (e) => {
                p && 0 === e.button && e.preventDefault();
            },
            [p],
        ),
        G = i.useCallback(() => {
            h(!1), k.current?.focus();
        }, [h]),
        V = i.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (M.current) {
                        M.current = !1;
                        return;
                    }
                    if (p && null != O) {
                        let e = l[O];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    p && h(!1);
                }
            },
            [p, O, l, r, h],
        ),
        F = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: U, handleKeyDown: B } = (0, tS.l)(!0, l),
        W = i.useRef(null);
    i.useEffect(() => {
        let e = U !== W.current;
        (W.current = U), null != U && e && (S(U), p || ((_.current = !0), h(!0)));
    }, [U, p, h]);
    let z = i.useCallback(
            (e) => {
                if (u) return;
                let n = l.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let l = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !p || e.altKey)) {
                            p || h(!0);
                            return;
                        }
                        S((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && p)) {
                            if (null != O) {
                                let e = l[O];
                                if (null != e && !0 !== e.disabled) {
                                    F([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!p) return void h(!0);
                        S((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !p)) return void h(!0);
                        if (null == O || O > n - 1) return;
                        {
                            let e = l[O];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        S(0), p || ((_.current = !0), h(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        S(n - 1), p || ((_.current = !0), h(!0));
                        break;
                    case "Tab":
                        if (p && null != O) {
                            let e = l[O];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (M.current = !0), h(!1);
                        break;
                    case "Escape":
                        p && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, p, l, O, F, G, r, h, B],
        ),
        H = Math.max(
            l.findIndex((e) => e.id === D[D.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !p || K.current
            ? p || ((K.current = !1), S(null), (_.current = !1))
            : ((K.current = !0), _.current || S(l.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, p, H, l.length]);
    let X = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": p ? P : void 0,
        "aria-expanded": p,
        "aria-activedescendant": R,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: L,
        onMouseDown: w,
        onKeyDown: z,
        onBlur: V,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (T.current = e), v.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: s }),
            x({ buttonRef: k, selectButtonProps: X }),
            !u &&
                p &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(tG.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tS.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: D,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: O,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(t_.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tF = n(643213);
let tU = "MAIN_PROFILE";
function tB(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tT.Ay, { className: tF.$f, guild: l, size: tT.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tW(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tF.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tF.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tF.qL,
                children: [
                    (0, t.jsx)(ey.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(ey.E, {
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
function tz(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eG.D, {
        innerRef: r,
        className: a()(tF.L5, { [tF.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(ey.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tF.v9,
                children: n,
            }),
            (0, t.jsx)(tP.a, {
                className: tF.u4,
                size: "sm",
                color: !0 === i ? p.A.colors.ICON_MUTED : p.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tH(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tO.Ay], () => tO.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([L.A], () => L.A.getGuilds()),
        c = (0, s.bG)([ez.A], () => {
            let e = ez.A.getGuildId();
            return null == e || eg._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eu.Ay, tO.Ay], () => {
            let e = {};
            for (let l of tO.Ay.getFlattenedGuildIds()) {
                let n = eu.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tU,
                    label: eK.intl.string(eK.t["2p07FR"]),
                    value: tU,
                    leading: (0, t.jsx)(tk.p, { size: "refresh_sm", color: p.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tB, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(en.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(tB, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? tU,
        x = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let n = e === tU ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tV, {
        className: tF.kL,
        label: eK.intl.string(eK.t.rki38K),
        listboxClassName: tF.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tW, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tz, { leading: x.value === tU ? null : x.leading, label: x.label, disabled: o, ...e }),
    });
}
var tK = n(765178),
    tX = n(775602);
function tY() {
    let e = (0, s.bG)([tX.Ay], () => tX.Ay.useReducedMotion),
        { preset: l, setPreset: n } = (function () {
            let { getCurrentPreset: e, cachePreset: l } = lw(),
                [n, t] = i.useState(e);
            return {
                preset: n,
                setPreset: i.useCallback(
                    (e) => {
                        l(e), t(e);
                    },
                    [l],
                ),
            };
        })(),
        t = i.useCallback(
            (l) => {
                let n = (0, lM.Wt)(l);
                (0, tC.w5)({
                    banner: n.getBannerSrc(e),
                    themeColors: n.themeColors,
                    displayNameStyles: n.displayNameStyles,
                });
            },
            [e],
        );
    i.useEffect(() => {
        eg.A.hasTryItOutChanges() || t(l);
    }, [t, l]);
    let r = i.useCallback(() => {
        let e = (0, lM.B$)(l),
            i = (0, lM.Wt)(e);
        lj.default.track(q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e }),
            n(e),
            t(e),
            tK.O.announce(eK.intl.formatToPlainString(eK.t.M2Hj9s, { presetName: i.getName() }));
    }, [l, n, t]);
    return { preset: l, onShuffle: r };
}
var tq = n(485745);
function t$(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(0, z.X)("useUnsavedProfileChangesGuard"),
        t = (0, tq.A)(n),
        r = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            r.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                l && t ? (0, tC.VQ)() : r.current(...n);
            },
            [l, t],
        )
    );
}
var tZ = n(49999),
    tJ = n(844939);
let tQ = "profile-editing-nameplate-error",
    t0 = "profile-editing-avatar-error",
    t1 = "profile-editing-avatar-decoration-error",
    t2 = "profile-editing-banner-error",
    t7 = "profile-editing-display-name-style-error";
function t5(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(tJ.D0, l),
        children: (0, t.jsx)("div", { className: tJ.ZN, children: (0, t.jsx)(lF.X, { size: "xs" }) }),
    });
}
function t3() {
    return (0, t.jsx)(lU.h, { color: "nitro-pink", className: tJ.Lu, children: (0, t.jsx)(tm, {}) });
}
function t9() {
    let [e, l] = (0, lq.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: tJ.X6,
              children: [
                  (0, t.jsx)(ey.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eK.intl.string(eK.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eG.D, {
                      "aria-label": eK.intl.string(eK.t.rSe9ra),
                      className: tJ.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lB.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function t8() {
    let e = to(),
        l = tg(eK.intl.string(eK.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: tJ.eW,
        children: [
            (0, t.jsxs)("div", {
                className: tJ.tm,
                children: [
                    (0, t.jsx)(lW.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eK.intl.string(eK.t.bO0TOe),
                    }),
                    (0, t.jsx)(ey.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eK.intl.format(eK.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(lQ.A, { subscriptionTier: tc.pe.TIER_2, buttonTextOverride: l, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(t5, { className: tJ.nd }),
        ],
    });
}
function t4() {
    return (0, t.jsx)(ey.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: tJ.BJ,
        "aria-hidden": !0,
        children: eK.intl.format(eK.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lz.t, { size: "xxs", color: "currentColor", className: tJ.qp }),
        }),
    });
}
function t6(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(eK.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nk.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? tQ : void 0 }),
            (0, t.jsx)(nP, { id: tQ, message: r }),
        ],
    });
}
function ie(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(eK.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l3.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t0 : void 0 }),
            (0, t.jsx)(l9.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? t1 : void 0 }),
            (0, t.jsx)(nP, { id: t0, message: (0, l0.d3)(r) }),
            (0, t.jsx)(nP, { id: t1, message: a }),
        ],
    });
}
function il(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lJ.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, lZ.kn)(a && !i ? [lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(eK.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lH.Lp, { text: eK.intl.string(eK.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(ny, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? t7 : void 0,
                onOpen: d ? () => o(tZ.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(nP, { id: t7, message: r }),
        ],
    });
}
function it(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(eK.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n4, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(ng, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? t2 : void 0 }),
            (0, t.jsx)(nP, { id: t2, message: (0, l0.d3)(a) }),
        ],
    });
}
function ii(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nE, {
        heading: eK.intl.string(eK.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(nt, { user: l, disabled: n }),
    });
}
function ir(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, l$.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(r ? eK.t["Vfbar/"] : eK.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nX, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(n0, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let ia = "premium-try-it-out-description";
function is(e) {
    let { user: l, buttonRef: n } = e,
        i = to(),
        { goToPremiumTryItOut: r } = lG();
    return (
        tY(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": ia,
            className: tJ.DX,
            children: [
                (0, t.jsx)(t5, { className: tJ.x$ }),
                (0, t.jsxs)("div", {
                    className: tJ.sb,
                    children: [
                        (0, t.jsx)(ey.E, {
                            id: ia,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eK.intl.format(eK.t.TmfgI2, { onClick: i }),
                        }),
                        (0, t.jsx)(lK.$, {
                            buttonRef: n,
                            variant: "overlay-primary",
                            size: "sm",
                            icon: lX.b,
                            text: eK.intl.string(eK.t.PxUx8e),
                            onClick: r,
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tE, { user: l, mode: "entrypoint" }),
            ],
        })
    );
}
function io(e) {
    let {
            user: l,
            panelId: n,
            selectedGuildId: i,
            originGuildId: r,
            isLoading: a,
            isEditingDisabled: o,
            collapseButtonRef: d,
            premiumTryItOutButtonRef: u,
            onClosePanel: c,
            onSelectGuildId: g,
        } = e,
        m = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { enabled: f } = l5({ location: "DefaultEditingPanelView" }),
        x = t$(g),
        p = null != i,
        h = eQ.Ay.canUsePremiumProfileCustomization(l),
        v = p && !h,
        A = !h && !p,
        b = A && f,
        j = p && !h && !m,
        I = a || o,
        C = (0, s.bG)([eg.A], () => eg.A.getErrors(i)),
        y = C.nameplate?.[0] ?? C.nameplate_sku_id?.[0],
        N = C.avatar?.[0],
        E = C.avatar_decoration_sku_id?.[0],
        P = C.banner?.[0],
        k = C.display_name_font_id?.[0] ?? C.display_name_effect_id?.[0] ?? C.display_name_colors?.[0],
        T = l2.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        O = h || p ? "inline" : b ? "hidden" : T ? "end" : "hidden",
        S = (0, t.jsx)(il, { user: l, guildId: i, disabled: I || v, errorMessage: k });
    return (0, t.jsxs)(te, {
        hasGradientBackground: j,
        children: [
            (0, t.jsxs)("div", {
                className: tJ.wx,
                children: [
                    (0, t.jsx)(lm.m, {
                        text: eK.intl.string(eK.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eG.D, {
                            innerRef: d,
                            className: tJ.cS,
                            "aria-label": eK.intl.string(eK.t["l/A351"]),
                            onClick: c,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lY.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tH, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: x,
                        loading: a,
                        disabled: m,
                    }),
                ],
            }),
            m
                ? (0, t.jsx)(tp, {})
                : (0, t.jsx)(tr, {
                      floatingFooter: A && !b ? (0, t.jsx)(t3, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              p && (h ? (0, t.jsx)(t9, {}) : (0, t.jsx)(t8, {})),
                              h && (0, t.jsx)(t4, {}),
                              (0, t.jsx)(t6, { user: l, guildId: i, disabled: I || v, errorMessage: y }),
                              (0, t.jsx)(ie, {
                                  user: l,
                                  guildId: i,
                                  disabled: I || v,
                                  avatarErrorMessage: N,
                                  avatarDecorationErrorMessage: E,
                              }),
                              "inline" === O && S,
                              h || p
                                  ? (0, t.jsx)(it, {
                                        user: l,
                                        guildId: i,
                                        disabled: I || v,
                                        canUsePremiumProfileFeatures: h,
                                        bannerErrorMessage: P,
                                    })
                                  : (0, t.jsx)(ii, { user: l, disabled: I || v }),
                              (0, t.jsx)(ir, { user: l, guildId: i, disabled: I || v }),
                              "end" === O && S,
                              b && (0, t.jsx)(is, { user: l, buttonRef: u }),
                          ],
                      }),
                  }),
        ],
    });
}
var id = n(508770),
    iu = n(477155),
    ic = n(732280),
    ig = n(811611),
    im = n(926321),
    ix = n(663417),
    ip = n(597563);
let ih = "shuffle-options-a11y-description";
function iv() {
    let { preset: e, onShuffle: l } = tY(),
        { showPresetName: n } = l5({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let l = (0, lM.Wt)(e);
            return { presetName: l.getName(), presetHeader: l.getPreviewThumbnailSrc() };
        }, [e]);
    return n
        ? (0, t.jsxs)("div", {
              className: ip.kL,
              children: [
                  (0, t.jsx)(lm.m, {
                      text: eK.intl.string(eK.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(l_.K, {
                          icon: ix.f,
                          "aria-label": eK.intl.string(eK.t.VzqqFC),
                          "aria-describedby": ih,
                          onClick: l,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: ih, children: eK.intl.string(eK.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: ip.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: ip.L_, src: a }),
                          (0, t.jsxs)(ey.E, {
                              className: ip._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eK.intl.formatToPlainString(eK.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: ip.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(lK.$, {
                      icon: im.j,
                      text: eK.intl.string(eK.t.VzqqFC),
                      onClick: l,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": ih,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: ih, children: eK.intl.string(eK.t.bBRdiB) }),
              ],
          });
}
var iA = n(451125);
function ib() {
    return (0, t.jsxs)("div", {
        className: iA.nH,
        children: [(0, t.jsx)("div", { className: iA.Ei }), (0, t.jsx)(tm, {})],
    });
}
function ij(e) {
    let { trialOffer: l } = e,
        n = to(),
        i = (0, eQ.FY)({
            intervalType: l.subscription_trial?.interval,
            intervalCount: l.subscription_trial?.interval_count,
        }),
        r = (0, ig.ux)(l.expires_at);
    return (0, t.jsxs)("div", {
        className: iA.nH,
        children: [
            (0, t.jsxs)("div", {
                className: iA.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eK.intl.string(eK.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(id.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eK.intl.format(eK.t["fF+cgd"], { onClick: n }),
            }),
            (0, t.jsx)(lQ.A, { subscriptionTier: tc.pe.TIER_2, buttonTextOverride: i, size: "md", fullWidth: !0 }),
            null != r &&
                (0, t.jsx)(ey.E, { variant: "text-xs/normal", color: "text-muted", className: iA.u8, children: r }),
        ],
    });
}
function iI(e) {
    let l,
        { user: n, onBack: r } = e,
        a = i.useRef(null),
        s = ((l = (0, ic.V)()), l?.subscription_trial?.sku_id === tc.pe.TIER_2 ? l : null);
    return (
        i.useEffect(() => {
            a.current?.focus();
        }, []),
        (0, t.jsxs)(te, {
            hasGradientBackground: !0,
            children: [
                (0, t.jsxs)("div", {
                    className: iA.wx,
                    children: [
                        (0, t.jsx)(eG.D, {
                            innerRef: a,
                            "aria-label": eK.intl.string(eK.t["4IYwrw"]),
                            onClick: r,
                            className: iA.Gv,
                            children: (0, t.jsx)(iu.r, { size: "md", color: "currentColor" }),
                        }),
                        (0, t.jsx)(lW.D, {
                            variant: "text-lg/normal",
                            color: "text-default",
                            className: iA.R_,
                            children: eK.intl.string(eK.t.PxUx8e),
                        }),
                        (0, t.jsx)(ey.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: iA.Ij,
                            children: eK.intl.string(eK.t.X0ir7L),
                        }),
                        (0, t.jsx)("div", { className: iA.ZZ, children: (0, t.jsx)(iv, {}) }),
                    ],
                }),
                (0, t.jsx)(tr, {
                    children: (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(tE, { user: n, mode: "edit" }),
                            null == s ? (0, t.jsx)(ib, {}) : (0, t.jsx)(ij, { trialOffer: s }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var iC = n(450579);
let iy = "user-profile-editing-panel",
    iN = "profile-modal-editing-panel-heading";
function iE(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(lm.m, {
        text: eK.intl.string(eK.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eG.D, {
            innerRef: i,
            "aria-label": eK.intl.string(eK.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iy,
            className: a()(iC.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lR.V, { size: "sm", color: p.A.colors.ICON_STRONG }),
        }),
    });
}
function iP(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(lm.m, {
            text: eK.intl.string(eK.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(l_.K, {
                buttonRef: i,
                "aria-label": eK.intl.string(eK.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iy,
                icon: lR.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function ik(e) {
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
        x = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()),
        { isPremiumTryItOutView: p, goBack: h } = lG(),
        v = i.useRef(null),
        A = i.useCallback(() => {
            h(), requestAnimationFrame(() => v.current?.focus());
        }, [h]);
    return null == x
        ? null
        : (0, t.jsx)("aside", {
              id: iy,
              "aria-labelledby": iN,
              className: a()(iC.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iC.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: iN, children: eK.intl.string(eK.t["L+ch00"]) }),
                      }),
                      p
                          ? (0, t.jsx)(iI, { user: x, onBack: A })
                          : (0, t.jsx)(io, {
                                panelId: iy,
                                user: x,
                                selectedGuildId: l,
                                originGuildId: n,
                                isLoading: o,
                                isEditingDisabled: d,
                                collapseButtonRef: g,
                                onClosePanel: u,
                                onSelectGuildId: r,
                                premiumTryItOutButtonRef: v,
                            }),
                  ],
              }),
          });
}
var iT = n(576260),
    iO = n(347805),
    iS = n(629403),
    iR = n(612630),
    i_ = n(372638),
    iM = n(674947);
function iD(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iR.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        x = c ?? u,
        p = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await iS.A.updateNote(l, e);
                    } catch {
                        f(eK.intl.string(eK.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        h = d && null == x,
        v = (0, e2.Ww)({ value: x ?? "", onCommit: p, disabled: h }),
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
        null != x && x.length > 0
            ? (0, t.jsx)(ey.E, { variant: "text-sm/normal", color: "text-default", className: iM.t, children: x })
            : null;
    return (0, t.jsx)(i_.f, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eK.intl.string(eK.t.PbMNh2),
        label: eK.intl.string(eK.t.PbMNh2),
        placeholder: h ? eK.intl.string(eK.t["WLKx/9"]) : eK.intl.string(eK.t.VBhOe2),
        maxLength: q.T7x,
        rows: 3,
        disabled: h,
        error: m,
    });
}
var iL = n(83013),
    iw = n(518477),
    iG = n(273781);
function iV(e) {
    let { userId: l } = e,
        n = (0, ev.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, z.X)("UserProfileModalV2NotesSection"),
        a = r ? iD : iO.A;
    return (0, t.jsx)(iL.A, {
        heading: eK.intl.string(eK.t["mQKv+v"]),
        scrollTargetId: iw.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? iG.N : iG.w,
            autoFocus: n === iw.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var iF = n(123292),
    iU = n(263293),
    iB = n(871645);
function iW(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: iU.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iB.oR, iU.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: iU.Kk, children: l }),
                    (0, t.jsx)(ey.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: iU.hP,
                            children: (0, t.jsx)(iF.Q, {
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
var iz = n(346055),
    iH = n(289873),
    iK = n(103964);
function iX(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tK.O.announce(eK.intl.string(eK.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iz.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(iK.f, l && iK.z),
                    children: n && (0, t.jsx)(iH.y, { type: iH.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var iY = n(568602),
    iq = n(625494),
    i$ = n(61881);
function iZ(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([i$.A, eg.A], () => i$.A.hasUnsavedChanges() || eg.A.hasUnsavedChanges());
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
                iq._.subscribe(q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    iq._.unsubscribe(q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(iY.b, { isShaking: n, intensity: a, children: l })
    );
}
n(46121);
var iJ = n(94160),
    iQ = n(933832),
    i0 = n(972213),
    i1 = n(97483),
    i2 = n(384377);
let i7 = {
        [iw.jM.WIDGET_ADDED]: {
            message: eK.intl.string(eK.t.fFP1Uy),
            icon: (0, t.jsx)(iQ.A, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [iw.jM.WIDGET_REMOVED]: {
            message: eK.intl.string(eK.t.zzsK7h),
            icon: (0, t.jsx)(iQ.A, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [iw.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eK.intl.string(eK.t["84MExs"]),
            icon: (0, t.jsx)(i0.d, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i1.Ck.FAILURE,
        },
        [iw.jM.SOMETHING_WENT_WRONG]: {
            message: eK.intl.string(eK.t.F8FvUy),
            icon: (0, t.jsx)(i0.d, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i1.Ck.FAILURE,
        },
    },
    i5 = (e) => {
        let { className: l } = e,
            n = (0, i2.fu)(),
            r = (0, s.bG)([tX.Ay], () => tX.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(i7[n]), tK.O.announce(i7[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, i2.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, i2.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(tl.animated.div, { className: l, style: e, children: (0, t.jsx)(iW, { ...d }) }),
                ),
            })
        );
    };
var i3 = n(297413),
    i9 = n(465829),
    i8 = n(826673),
    i4 = n(576705),
    i6 = n(761431),
    re = n(530895);
function rl(e) {
    return null == e || "" === e ? void 0 : e;
}
function rn(e) {
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
        { user: x, displayProfile: h } = e,
        { analyticsLocations: v } = (0, I.Ay)(),
        A = h?.guildId != null,
        b = h?.guildId ?? void 0,
        j = eQ.Ay.canUsePremiumProfileCustomization(x),
        C = (0, lJ.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: y, permissionsLoaded: N } = (0, s.cf)([i4.A, L.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = L.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: i4.A.can(q.xBc.CHANGE_NICKNAME, e) || i4.A.can(q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: E,
            previewValue: P,
            onCommit: k,
        } = ((n = null != (l = h?.guildId ?? null)),
        (r = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([eu.Ay], () => (null != l ? (eu.Ay.getMember(l, x.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (m = rl(c) ?? rl(r) ?? x.username),
        (f = rl(c) ?? x.username),
        {
            value: g,
            previewValue: n ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, e0.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, e0.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        T = (0, i6.TX)({ value: E, onCommit: k, disabled: !y }),
        { isEditing: O, handleCommit: S } = T,
        R = (0, s.bG)([eg.A], () => eg.A.getErrors(b ?? null)),
        _ = (0, eJ.EC)(b ?? null),
        M = A ? R.nick?.[0] : R.global_name?.[0],
        D = _?.nick?.[0],
        w = (function (e) {
            let { isPremiumTryItOutView: l } = lG();
            return (0, s.bG)(
                [eg.A],
                () =>
                    l
                        ? eg.A.getTryItOutChanges().tryItOutDisplayNameStyles
                        : eg.A.getPendingChanges(e).pendingDisplayNameStyles,
                [e, l],
            );
        })(b),
        G = eK.intl.string(A ? eK.t.mq6Cg9 : eK.t.XuZU7A),
        V = A ? eK.intl.string(eK.t.YcDKr8) : x.username,
        F = eK.intl.string(A ? eK.t["g7OSZ/"] : eK.t.kyfzzc),
        U = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    O && S(),
                    C &&
                        (0, i8.Dr)(lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: tZ.i.INDIRECT_ACTION,
                        }),
                    (0, nm.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [O, S, v, b, C],
        ),
        W = {
            icon: lR.V,
            tooltip: eK.intl.string(eK.t.lqKKI2),
            "aria-label": eK.intl.string(eK.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: U,
        },
        z =
            A && !y && N
                ? (0, t.jsx)(lm.m, {
                      text: eK.intl.string(eK.t.gzjxQi),
                      children: (0, t.jsx)(eG.D, {
                          tag: "span",
                          className: re.C,
                          children: (0, t.jsx)(lF.X, {
                              size: "refresh_sm",
                              color: p.A.colors.ICON_SUBTLE,
                              "aria-label": eK.intl.string(eK.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != P
                ? (0, t.jsx)(i9.c$, {
                      user: x,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: re.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(i6.yV, {
        ...T,
        preview: H,
        placeholder: V,
        editButtonAriaLabel: F,
        label: G,
        maxLength: q.zzC,
        trailing: y && j ? W : void 0,
        error: M,
        warning: D,
        disabled: !y,
    });
}
var rt = n(688960);
function ri(e) {
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
        (r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, e0.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = (0, i6.TX)({ value: c, onCommit: m }),
        { isEditing: x } = f,
        p = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eK.intl.string(p ? eK.t.AXiE0i : eK.t["76Aqhl"]);
    return (0, t.jsx)(i6.yV, {
        ...f,
        size: "compact",
        className: a()(rt.k, x && rt.J),
        preview: h ? (0, t.jsx)(i9.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eK.intl.string(eK.t.h6VAO7),
        label: eK.intl.string(eK.t["rniRE+"]),
        placeholder: v,
        maxLength: q.VE5,
    });
}
var rr = n(145497),
    ra = n(685073),
    rs = n(318785),
    ro = n(534400),
    rd = n(743981),
    ru = n(573109),
    rc = n(832344);
let rg = "no-server-tag";
function rm(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eG.D, {
        innerRef: l,
        className: a()(ru.L5, { [ru.wK]: o }),
        ...s,
        children: (0, t.jsxs)(ey.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: ru.W3,
            tag: "span",
            children: [
                o
                    ? eK.intl.string(eK.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  ro.Z9,
                                  {
                                      src: (0, ra.gC)(n, r, rd.Sl.SIZE_14),
                                      size: rd.Sl.SIZE_14,
                                      className: ru.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, ra.gC)(n, r, rd.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tP.a, { size: "xs", color: "currentColor", className: ru.u4 }),
            ],
        }),
    });
}
function rf() {
    let e = (0, rs.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ec.default], () => {
            let e = ec.default.getCurrentUser();
            return (0, ra.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === rg
                    ? (0, t.jsx)("div", {
                          className: rc.uN,
                          children: (0, t.jsx)(ey.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: ru.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(t_.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: rg, label: eK.intl.string(eK.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rr.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(ro.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, e0.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(tV, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eK.intl.string(eK.t.Pdd1nd),
              listboxClassName: ru.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(rm, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var rx = n(211180);
function rp(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(i9.Ay, {
            user: l,
            guildId: n?.guildId ?? void 0,
            displayName: i,
            displayNameSize: "lg",
            pronouns: n?.pronouns,
            trailing: r,
            onClose: s,
        });
    let d = l.isProvisional
        ? null
        : (0, t.jsx)(i3.A, {
              user: l,
              forceUsername: !0,
              className: rx.a1,
              usernameClass: rx.eb,
              discriminatorClass: rx.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(rn, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(rx.AK, rx.j6),
                children: [d, (0, t.jsx)(i9.Ce, {}), (0, t.jsx)(ri, { displayProfile: n }), (0, t.jsx)(rf, {}), r],
            }),
        ],
    });
}
n(321073);
var rh = n(97808),
    rv = n(980707),
    rA = n(477782),
    rb = n(22231),
    rj = n(601255),
    rI = n(562819),
    rC = n(19575),
    ry = n(339984),
    rN = n(145762),
    rE = n(935485);
let rP = rC.Ay.getEnableHardwareAcceleration() ? rh.Js : rh.eu;
function rk(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rv.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.YAgq3W),
        children: (0, t.jsx)(rA.rX, { children: n }),
    });
}
function rT(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eb.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != n,
                c = (0, s.bG)([eu.Ay], () => (null != n ? eu.Ay.getMember(n, l.id) : null)),
                g = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = u ? c?.avatar : l.avatar,
                f = (0, eo.z5)(g, m),
                x = u && null != l.avatar,
                p = eQ.Ay.canUsePremiumProfileCustomization(l),
                h = p || null == n,
                v = p || null == n,
                A = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
                b = (0, eo.a4)({ user: l }),
                j = (0, eo.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eo.CP)(n ?? void 0),
                y = void 0 !== C,
                N = null != (0, rj.A)(y ? C : j) && (y ? null != C : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        (0, l0.XD)({
                            uploadType: ry.HL.AVATAR,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        (0, rI.L)({
                            analyticsLocations: d,
                            guild: A ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    r(),
                        (0, l0.rM)(null, m, (e) => (0, e0.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eo.WU)(x ? "reset" : "remove");
                }, [r, n, m, x]),
                O = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rA.Dr,
                                { id: "change-avatar", label: eK.intl.string(eK.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rA.Dr,
                                { id: "change-decoration", label: eK.intl.string(eK.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            x
                                ? (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.twB3fz),
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
                                      rA.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["2u5yu0"]),
                                          action: O,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["9rx5GO"]),
                                          action: O,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [x, h, v, E, f, N, P, k, T, O]);
        })({ user: l, guildId: n, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, t.jsx)(eb.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rN.my, rN.vk, rE.kL, { [rE.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rP, { ...r, imageClassName: a()(rN.Lw, rE.HU) }),
                  (0, t.jsx)(l6.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l6.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rk, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rE.r9,
                              children: (0, t.jsx)(l_.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rb.R,
                                  "aria-label": eK.intl.string(eK.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rO = n(875262);
function rS(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rv.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.FzU73A),
        children: (0, t.jsx)(rA.rX, { children: n }),
    });
}
function rR(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
                c = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
                g = (0, eo.Xf)({ user: l, guildId: void 0 }),
                m = (0, l$.sk)("UserProfileModalV2EditableBanner"),
                f = eQ.Ay.canUsePremiumProfileCustomization(l),
                x = null == n,
                p = x || f,
                h = m && (x || f),
                v = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: b,
                    pendingProfileFrame: j,
                } = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0)),
                C = (0, s.bG)([W.A], () =>
                    null != n ? W.A.getGuildMemberProfile(l.id, n)?.banner : W.A.getUserProfile(l.id)?.banner,
                ),
                y = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner != null),
                E = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileEffect != null),
                P = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileFrame != null),
                k = (0, eo.Ac)(A, C),
                T = v && y,
                O = v && E,
                S = v && P,
                R = void 0 === b ? null != u : null != b,
                _ = void 0 === j ? null != c : null != j,
                M = (0, eo.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                D = (0, N.A)(M?.skuId, "UserProfileModalV2EditableBanner"),
                w = i.useCallback(() => {
                    r(),
                        (0, l0.XD)({
                            uploadType: ry.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                G = i.useCallback(() => {
                    r(),
                        (0, nR.W)({
                            analyticsLocations: d,
                            guild: null != n ? (L.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                V = i.useCallback(() => {
                    r(), (0, l0.rM)(null, C, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, C]),
                F = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nY.w)({
                            analyticsLocations: d,
                            guild: null != n ? (L.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, D, a]),
                B = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                rA.Dr,
                                { id: "change-banner", label: eK.intl.string(eK.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                rA.Dr,
                                { id: "change-effect", label: eK.intl.string(eK.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rA.Dr,
                                { id: "change-frame", label: eK.intl.string(eK.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    f &&
                        k &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.jHlJNS),
                                          action: V,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.tT9n7D),
                                          action: V,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            O
                                ? (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.Lb7lu9),
                                          action: F,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.zUOlT6),
                                          action: F,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        _ &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rA.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [T, f, p, h, O, S, k, R, _, w, G, U, V, F, B]);
        })({ user: l, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rO.kL, { [rO.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eI.A, { ...e, className: rO.Pr }),
                  (0, t.jsx)(l6.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l6.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rS, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rO.r9,
                              children: (0, t.jsx)(l_.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rb.R,
                                  "aria-label": eK.intl.string(eK.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var r_ = n(777480),
    rM = n(107563),
    rD = n(570287);
n(938796);
var rL = n(913453),
    rw = n(667049),
    rG = n(837531),
    rV = n(186272),
    rF = n(800609),
    rU = n(128604);
let rB = (e) => e * (2 - e),
    rW = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function rz(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function rH(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, Z.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                eh(n, 1024)
                    .then((l) => {
                        e || s(l);
                    })
                    .catch(() => {
                        e || s(n);
                    }),
                () => {
                    (e = !0), s(void 0);
                }
            );
        }, [r, n]),
        r)
    )
        return null;
    let o = null != n ? (a ?? null) : l?.getPreviewBanner(n, !1, 1024);
    return null == o
        ? null
        : (0, t.jsx)("div", { className: rF.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function rK(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nD.add(e), () => nD.delete(e)),
            () => nL,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function rX(e) {
    var l;
    let n,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: m,
            channelId: f,
            displayProfile: x,
            nickname: p,
            hasEntered: h,
            customStatusPrompt: v,
            onClose: b,
            avatarDecorationOverride: j,
            avatarOverride: I,
            bannerOverride: C,
            accentColorOverride: y,
            profileEffectOverride: N,
            profileFrame: E,
            fadeInProfileFrame: k,
            allowEditing: T,
            isLoading: D = !1,
        } = e,
        L = o.id === d.id,
        V = i.useRef(null),
        { isHoveringOrFocusing: U } = (0, O.A)(V),
        [B, W] = i.useState(),
        z = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? W("compact-xs") : l <= 380 ? W("compact-sm") : W(void 0);
        }, []);
    (0, A.g)(V, z, [], { fireOnMount: !0 });
    let H = null != B ? rW[B] : void 0,
        $ = i.useMemo(() => v ?? (0, S.A)(), [v]),
        { relationshipType: Z, originApplicationId: ei } = (0, s.cf)([w.A], () => ({
            relationshipType: w.A.getRelationshipType(o.id),
            originApplicationId: w.A.getOriginApplicationId(o.id),
        })),
        er =
            ((l = o.id),
            (n = (0, K.bG)([Y.default], () => Y.default.locale)),
            (r = (0, K.bG)([w.A], () => (w.A.getRelationshipType(l) === q.eA$.FRIEND ? w.A.getSince(l) : null), [l])),
            (0, X.An)(r, n)),
        ea = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        es = (0, _.q)({ userId: o.id }),
        eo = (0, R.fi)(o.id),
        { appIdentities: ed, connections: eu } = (function (e) {
            let { filteredAppIdentities: l } = (0, el.A)(e),
                n = (0, et.A)(e),
                t = i.useMemo(() => new Set(l?.map((e) => e.application_id) ?? []), [l]),
                r = (0, ee.A)([...t]).filter(en.Vq);
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
                            let l = Q.A.get(e.type);
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
        ec = (0, J.A)(o.id),
        eg = eu.length > 0 || ed.length > 0,
        ef = ec.length > 0,
        ex = T ? rR : eI.A,
        ep = T ? rT : eb.A,
        eh = x?.guildId ?? u,
        ev = i.useCallback(() => {
            (0, eL.A)({ user: o, guildId: eh, alt: p });
        }, [p, eh, o]);
    return (0, t.jsxs)("main", {
        className: a()(rF.profile, null != B && rF[B]),
        ref: V,
        "aria-busy": D,
        children: [
            (0, t.jsxs)("div", {
                className: rF.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: rF.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ex, {
                            user: o,
                            displayProfile: x,
                            guildId: u,
                            themeType: em.d.MODAL_V2,
                            specOverrides: H,
                            pendingBanner: C,
                            pendingAccentColor: y,
                        }),
                    }),
                    (0, t.jsx)(ep, {
                        user: o,
                        displayProfile: x,
                        guildId: u,
                        channelId: f,
                        themeType: em.d.MODAL_V2,
                        specOverrides: H,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                        onOpenAvatar: T ? void 0 : ev,
                    }),
                    (0, t.jsx)(eM.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: em.d.MODAL_V2,
                        hasEntered: h,
                        prompt: L ? $ : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: rF.profileBody,
                children: [
                    (0, t.jsx)(rp, {
                        user: o,
                        displayProfile: x,
                        nickname: p,
                        trailing: (0, t.jsx)(ej.A, { displayProfile: x, themeType: em.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: T,
                    }),
                    Z === q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rF.profileOverlay,
                            children: (0, t.jsx)(eP.A, {
                                user: o,
                                applicationId: ei,
                                guildId: x?.guildId ?? void 0,
                                channelId: f,
                                className: rF.profileBanner,
                            }),
                        }),
                    eo.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            e_.A.Overlay,
                            {
                                className: rF.profileOverlay,
                                children: (0, t.jsx)(eP.A, {
                                    user: o,
                                    guildId: x?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: rF.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rF.profileOverlay,
                            children: (0, t.jsx)(iL.A, {
                                heading: eK.intl.string(eK.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(g.E, { size: "xs", color: "currentColor" }),
                                className: rF.profileBanner,
                                children: (0, t.jsx)(M.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eR.A, { user: o, className: rF.profileBanner }),
                    x?.private &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rF.profileOverlay,
                            children: (0, t.jsx)(eS.A, { username: p }),
                        }),
                    (0, t.jsx)("div", {
                        className: rF.profileButtons,
                        children: (0, t.jsx)(lc, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: x,
                            relationshipType: Z,
                            onClose: b,
                        }),
                    }),
                    L && (0, t.jsx)(eC.A, { isPremiumUser: (0, F.ki)(d) }),
                    !ea && (0, t.jsx)(e6, { displayProfile: x, isEditable: T }),
                    es.length > 0 &&
                        (0, t.jsx)(iL.A, {
                            heading: eK.intl.string(eK.t["Uv/eTx"]),
                            children: (0, t.jsx)(eE.A, { applicationIds: es }),
                        }),
                    (0, t.jsx)(iL.A, {
                        heading: eK.intl.string(eK.t.a6XYD9),
                        children: (0, t.jsx)(eT.A, { userId: o.id, guildId: x?.guildId, tooltipDelay: iw.In }),
                    }),
                    null != er &&
                        (0, t.jsx)(iL.A, {
                            heading: eK.intl.string(eK.t.wlTO8v),
                            children: (0, t.jsx)(eN, { friendsSinceDate: er }),
                        }),
                    x?.guildId != null &&
                        (0, t.jsx)(eD.A, {
                            userId: o.id,
                            guildId: x.guildId,
                            className: rF.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ea &&
                        (T || eg) &&
                        (0, t.jsx)(iL.A, {
                            heading: eK.intl.string(eK.t["3fe7U5"]),
                            scrollTargetId: iw.bk.CONNECTIONS,
                            children: (0, t.jsx)(lS, {
                                applicationIdentities: ed,
                                connections: eu,
                                userId: o.id,
                                allowEditing: T,
                                className: rF.profileAppConnections,
                            }),
                        }),
                    !ea &&
                        ef &&
                        (0, t.jsx)(iL.A, {
                            heading: eK.intl.string(eK.t.PHjkRE),
                            scrollTargetId: iw.bk.APPS,
                            children: (0, t.jsx)(eq, {
                                applicationRoleConnections: ec,
                                onClose: b,
                                className: rF.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iV, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(rK, { displayProfile: x, profileEffectOverride: N, isHovering: U }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: rz, fadeIn: k }),
        ],
    });
}
function rY(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, isPremiumTryItOut: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, $.A)({ user: l, displayProfile: n, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, ea.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function rq(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: A,
            sessionId: C,
            initialTabSection: P,
            initialScrollTarget: O,
            transitionState: S,
            customStatusPrompt: R,
            openedAt: _,
            onClose: M,
            sourceAnalyticsLocations: F = [],
            themeContainerClassName: K,
        } = e,
        X = l.id === n.id,
        Y = t$(M, X),
        {
            guildId: q,
            pendingGuildId: $,
            isFetching: Z,
            handleSelectUserProfile: J,
            handleRetry: Q,
            hasError: ee,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, s.bG)([W.A], () => W.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
                f = i.useCallback(() => {
                    u("retrying"), g((e) => e + 1);
                }, []),
                x = i.useCallback((e) => {
                    u("loading"), r(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, es.A)(l, void 0, {
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
                    handleSelectUserProfile: x,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: l.id, initialGuildId: r }),
        el = i.useMemo(() => (null != q ? { [q]: [l.id] } : {}), [q, l.id]);
    (0, b.Eq)(el, "UserProfileModalV2");
    let en = (0, z.X)("UserProfileModalV2"),
        { isPremiumTryItOutView: et } = lG(),
        ea = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        ef = (0, ei.A)(l.id) && en,
        eh = (0, er.W)(l.id),
        eb = ee && !eh,
        ej = ef && !ea && !ee,
        {
            pendingThemeColors: eI,
            avatarDecorationOverride: eC,
            avatarOverride: ey,
            bannerOverride: eN,
            accentColorOverride: eE,
            profileEffectOverride: eP,
            profileFrameOverride: eT,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t, isPremiumTryItOut: i } = e;
            return (0, s.cf)([eg.A, ec.default, eu.Ay, W.A], () => {
                if (!t) return ep;
                let e = ec.default.getUser(l);
                if (null == e) return ep;
                let r = eg.A.getPendingChanges(n),
                    a = eg.A.getTryItOutChanges(),
                    s = null != n ? eu.Ay.getMember(n, l) : null,
                    o = W.A.getUserProfile(l),
                    d = null != n ? W.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i ? a.tryItOutThemeColors : r.pendingThemeColors,
                    avatarDecorationOverride: (0, eo.us)({
                        userValue: e.avatarDecoration,
                        guildValue: s?.avatarDecoration,
                        pendingValue: r.pendingAvatarDecoration,
                        guildId: n,
                    }),
                    avatarOverride: (0, ed.V7)({
                        userId: l,
                        image: i && void 0 !== a.tryItOutAvatar ? a.tryItOutAvatar : r.pendingAvatar,
                        size: ex,
                    }),
                    bannerOverride: i && void 0 !== a.tryItOutBanner ? a.tryItOutBanner : r.pendingBanner,
                    accentColorOverride: r.pendingAccentColor,
                    profileEffectOverride: (0, eo.us)({
                        userValue: o?.profileEffect,
                        guildValue: d?.profileEffect,
                        pendingValue: r.pendingProfileEffect,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, eo.us)({
                        userValue: o?.profileFrame,
                        guildValue: d?.profileFrame,
                        pendingValue: r.pendingProfileFrame,
                        guildId: n,
                    }),
                };
            }, [l, n, t, i]);
        })({ userId: l.id, allowEditingInModal: ej, guildId: q, isPremiumTryItOut: et }),
        {
            isExpanded: eS,
            isAnimating: eR,
            transition: eM,
            handleExpand: eD,
            handleCollapse: eL,
            refs: { expandIconButtonRef: ew, expandTabButtonRef: eG, collapseButtonRef: eV },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: rB },
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
        eF = ef && !eS,
        eU = ef && (!eS || eR),
        { defaultWishlistId: eB } = (0, s.cf)([W.A], () => ({ defaultWishlistId: W.A.getFirstWishlistId(l.id) }));
    (0, D.fw)({ wishlistId: eB, userId: l.id });
    let eW = (0, eA.fC)(),
        ez = eb && (!ef || !Z),
        eH = ef && ee,
        eX = $ !== q || eH || null != eW.interactionType,
        eY = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, rL.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([ec.default], () => ec.default.getCurrentUser())),
                    (n = (0, s.bG)([W.A], () => W.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, rw.A)(i.id),
                g = (0, rD.A)(i.id),
                m = [],
                f = i.id === r?.id,
                x = (0, ei.A)(i.id),
                p = W.A.getFirstWishlistId(i.id),
                h = null != p,
                v = h ? W.A.getWishlistSettings(i.id, p) : null,
                A = (h ? rM.A.getWishlistItems(p) : []).length > 0,
                b = c.length > 0;
            (x || b) && m.push({ text: eK.intl.string(eK.t.laViwx), section: iw.RP.WIDGETS }),
                m.push({ text: eK.intl.string(eK.t.chq59f), section: iw.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = w.A.isFriend(i.id),
                C = v?.visibility === r_.a.PUBLIC;
            return (
                (f || (!f && A && C && g && (!j || (j && I)))) &&
                    m.push({ text: eK.intl.string(eK.t["7lZ31J"]), section: iw.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, rG.A)(a), section: iw.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, rV.A)(d), section: iw.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eq } = (0, I.Ay)([...F, j.A.USER_PROFILE_MODAL_V2]),
        e$ = (0, U.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: q,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        eZ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eq, ...e$, action: iw.pt.SHOW_STYLES_PANEL }), eD();
        }, [eq, e$, eD]),
        eJ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eq, ...e$, action: iw.pt.HIDE_STYLES_PANEL }), eL();
        }, [eq, e$, eL]),
        eQ = (0, H.Ay)(l.id, q),
        e0 = void 0 !== eT ? eT?.skuId : eQ?.profileFrame?.skuId,
        e1 = (0, N.A)(e0, "UserProfileModalV2"),
        e2 = (0, y.A)(e0),
        { profileFrameStyle: e7, profileFrameClassName: e5 } = (0, k.A)(e1);
    (0, E.A)({ skuId: eQ?.profileFrame?.skuId, openedAt: _, context: e$, analyticsLocations: eq });
    let e3 = V.Ay.useName(eQ?.guildId, c, l),
        e9 = (0, T.GV)(),
        e8 = (0, s.bG)([L.A], () => (null != q ? L.A.getGuild(q) : null)),
        e4 = X
            ? null != e8
                ? eK.intl.formatToPlainString(eK.t.M7OhOF, { guildName: e8.name })
                : eK.intl.string(eK.t.egQPgM)
            : eK.intl.format(eK.t.KRe1Fk, { name: e3 });
    return (0, t.jsx)(I.f5, {
        value: eq,
        children: (0, t.jsx)(U.of, {
            value: e$,
            openedAt: _,
            fetchStartedAt: eQ?.fetchStartedAt,
            fetchEndedAt: eQ?.fetchEndedAt,
            isLoaded: eQ?.isLoaded,
            children: (0, t.jsx)(eA.Hl, {
                value: eW,
                children: (0, t.jsx)(ev.N, {
                    value: O,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(rU.zr, { [rU.QF]: eQ?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": e9,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(iZ, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(rF.layoutContainer, e5, {
                                        [rF.editingPanelEnabled]: ef,
                                        [rF.editingPanelExpanded]: ef && eS,
                                        [rF.isAnimating]: eR,
                                    }),
                                    style: e7,
                                    children: [
                                        (0, t.jsxs)(rY, {
                                            user: l,
                                            displayProfile: eQ,
                                            pendingThemeColors: eI,
                                            isPremiumTryItOut: et,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: rU.Oo,
                                                    children: [
                                                        (0, t.jsx)(lg.A, { onClose: Y }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: e9, children: e4 }),
                                                        }),
                                                        eU &&
                                                            (0, t.jsx)(iP, {
                                                                buttonRef: ew,
                                                                onClick: eZ,
                                                                className: rF.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eF &&
                                                    (0, t.jsx)("div", {
                                                        className: rF.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iE, {
                                                            innerRef: eG,
                                                            onClick: eZ,
                                                            className: rF.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                ef &&
                                                    eM((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(ik, {
                                                                  className: a()(rF.editingPanel, {
                                                                      [rF.isExpanded]: eS,
                                                                  }),
                                                                  selectedGuildId: $,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: J,
                                                                  onClose: eJ,
                                                                  collapseButtonRef: eV,
                                                                  isLoading: Z,
                                                                  isEditingDisabled: ee,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(e_.A, {
                                                    className: a()(K, rU.A7, rF.profileContentOuter),
                                                    innerClassName: rF.profileContentInner,
                                                    user: l,
                                                    displayProfile: eQ,
                                                    themeType: em.d.MODAL_V2,
                                                    pendingThemeColors: eI,
                                                    isPrivate: eQ?.private === !0,
                                                    forceShowPremium: et,
                                                    children: [
                                                        (0, t.jsx)(rH, { displayProfile: eQ, pendingBanner: eN }),
                                                        eQ?.private === !0 && (0, t.jsx)(eO.A, {}),
                                                        !eb && (0, t.jsx)(i5, { className: rF.noticeContainer }),
                                                        ez &&
                                                            (0, t.jsx)("div", {
                                                                className: rF.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iW, {
                                                                    icon: (0, t.jsx)(x.i, {
                                                                        size: "sm",
                                                                        color: p.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eK.intl.string(eK.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Q
                                                                            ? eK.intl.string(eK.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Q,
                                                                    actionDisabled: !ef && Z,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: rF.profileCardToastContainer,
                                                            children: (0, t.jsx)(ek.A, { userId: l.id, onClose: Y }),
                                                        }),
                                                        (0, t.jsxs)(iX, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Z,
                                                            className: rF.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(rX, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: q,
                                                                    channelId: c,
                                                                    displayProfile: eQ,
                                                                    nickname: e3,
                                                                    originGuildId: d,
                                                                    hasEntered: S === h.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: Y,
                                                                    avatarDecorationOverride: eC,
                                                                    avatarOverride: ey,
                                                                    bannerOverride: eN,
                                                                    accentColorOverride: eE,
                                                                    profileEffectOverride: eP,
                                                                    profileFrame: e1,
                                                                    fadeInProfileFrame: e2,
                                                                    allowEditing: ej,
                                                                    isLoading: Z,
                                                                }),
                                                                (0, t.jsx)(iJ.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eQ,
                                                                    guildId: q,
                                                                    channelId: c,
                                                                    items: eY,
                                                                    initialSection: P,
                                                                    onClose: Y,
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
                            (0, t.jsx)(iT.A, { userId: l.id, guildId: q, className: rF.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function r$(e) {
    return (0, t.jsx)(lL, { children: (0, t.jsx)(rq, { ...e }) });
}
