l.d(n, { A: () => at });
var t = l(477900),
    i = l(582128),
    r = l(503698),
    a = l.n(r),
    s = l(17928),
    o = l(935462),
    d = l(778712),
    u = l(866323),
    c = l(364522),
    g = l(695366),
    f = l(140735),
    m = l(707554),
    p = l(738188),
    x = l(661531),
    h = l(231723),
    v = l(241524),
    A = l(770178),
    b = l(80682),
    j = l(793574),
    I = l(688810),
    C = l(248284),
    y = l(480335),
    N = l(577390),
    E = l(372320),
    P = l(31956),
    k = l(744808),
    S = l(875741),
    T = l(915089),
    R = l(713517),
    O = l(645507),
    _ = l(922590),
    D = l(821269),
    L = l(397562),
    M = l(93246),
    w = l(594832),
    G = l(71393),
    F = l(994500),
    V = l(351906),
    U = l(287809),
    B = l(562153),
    z = l(474090),
    W = l(158045),
    H = l(183555),
    K = l(47675),
    q = l(321191),
    Y = l(591179),
    X = l(999291),
    $ = l(702841),
    Z = l(370480),
    J = l(773669),
    Q = l(652215),
    ee = l(101928),
    en = l(837529),
    el = l(346713),
    et = l(573648),
    ei = l(429913),
    er = l(321078),
    ea = l(403362),
    es = l(484509),
    eo = l(487409),
    ed = l(83931),
    eu = l(920601),
    ec = l(903209),
    eg = l(919395),
    ef = l(101058),
    em = l(696451),
    ep = l(836602),
    ex = l(996988),
    eh = l(207634);
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
var eb = l(716804),
    ej = l(679492),
    eI = l(554146),
    eC = l(43105),
    ey = l(844222),
    eN = l(947984),
    eE = l(992526),
    eP = l(643056),
    ek = l(327791),
    eS = l(262),
    eT = l(982240),
    eR = l(131607),
    eO = l(49999),
    e_ = l(375708);
function eD(e) {
    let n,
        l,
        r,
        a,
        { targetElementRef: o } = e,
        d = (0, eE.J)({ location: "BadgeCustomizationProfileCoachmark" }),
        u = (0, eP.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        c = (0, ek.A)(),
        g =
            ((n = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.id)),
            (l = (0, s.bG)(
                [eT.Ay],
                () => (null != n && eT.Ay.hasCatalogFor(n) ? eT.Ay.getBadges(n).some((e) => e.owned) : null),
                [n],
            )),
            (r = (0, X.Ay)(n)),
            (a = (0, eS.A)(r)),
            l ?? a.length > 0),
        { reducedMotion: f } = i.useContext(ey.C),
        [m, p] = (0, eR.kn)(g && d && u ? [eI.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return m !== eI.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, t.jsx)(eC.A, {
              targetElementRef: o,
              position: "right",
              caretConfig: { align: "start" },
              gradientColor: "blue",
              graphic: { type: "rive", rive: eN.U, props: { dataBinding: { on: !0, reducedMotion: f.enabled } } },
              title: e_.intl.string(e_.t["9JoKQb"]),
              body: e_.intl.string(c ? e_.t.p82vky : e_.t.IDh31t),
              onRequestClose: () => p(eO.i.USER_DISMISS),
              actions: [
                  {
                      text: e_.intl.string(e_.t["4P5I8V"]),
                      onClick: function () {
                          (p(eO.i.TAKE_ACTION), C.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eL = l(718019),
    eM = l(365607),
    ew = l(915614),
    eG = l(744753),
    eF = l(834730);
function eV(e) {
    let { friendsSinceDate: n } = e;
    return (0, t.jsx)(eF.E, { variant: "text-sm/normal", children: n });
}
var eU = l(361311),
    eB = l(931481),
    ez = l(439053),
    eW = l(743987),
    eH = l(312381),
    eK = l(501193),
    eq = l(383448),
    eY = l(946356),
    eX = l(394816),
    e$ = l(503026),
    eZ = l(305385),
    eJ = l(109112),
    eQ = l(939249),
    e0 = l(730134),
    e1 = l(169869),
    e2 = l(837057),
    e9 = l(310419),
    e3 = l(889227),
    e5 = l(967198),
    e7 = l(488995),
    e8 = l(576849);
function e4(e) {
    let { applicationRoleConnection: n, locale: l, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, e1.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: e8.k_,
                children:
                    null != n.application.bot
                        ? (0, t.jsx)(e0.A, { user: new e3.A(n.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(eJ._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: e8.Hd,
                children: [
                    (0, t.jsxs)(eQ.D, {
                        className: e8.OB,
                        onClick: function () {
                            (i?.(),
                                (0, e2.transitionToGlobalDiscovery)({
                                    tab: e7.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: e9.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != n.platform_name
                                ? (0, t.jsx)(eF.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, t.jsx)(eF.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eF.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: e8.nk,
                                children: e_.intl.format(e_.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: e8.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function e6(e) {
    let { applicationRoleConnections: n, className: l, onClose: i } = e,
        { trackUserProfileAction: r } = (0, H.NJ)(),
        o = (0, s.bG)([J.default], () => J.default.locale),
        d = (0, s.bG)([e5.A], () => e5.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(e8.kL, l),
              children: n.map((e, n) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: e8.FI,
                          children: (0, t.jsx)(e4, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  (r({ action: "PRESS_APP_CONNECTION" }), i());
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}
var ne = l(403581),
    nn = l(240248),
    nl = l(308244),
    nt = l(83013),
    ni = l(81400),
    nr = l(84540),
    na = l(290386),
    ns = l(621466);
l(321073);
var no = l(775602),
    nd = l(404760);
function nu(e) {
    let { id: n, message: l, type: i } = e,
        r = "error" === i,
        a = r ? g.E : p.WarningIcon;
    return (0, t.jsxs)(eF.E, {
        id: n,
        role: r ? "alert" : void 0,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: nd.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? nd.ik : nd.QW }), l],
    });
}
function nc(e) {
    let {
            isEditing: n,
            preview: l,
            placeholder: r,
            input: s,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: u,
            previewErrorMessage: c,
            previewWarningMessage: g,
            className: f,
            wrapperRef: m,
            onBlur: p,
            onKeyDown: x,
        } = e,
        h = i.useRef(null),
        v = i.useId(),
        A = i.useId(),
        b = null == l,
        j = null != c,
        I = null != g && !j,
        C = j ? "error" : I ? "warning" : null,
        y = j ? c : g,
        N = null != C && null != y,
        E = [];
    (b && E.push(v), N && E.push(A));
    let P = E.length > 0 ? E.join(" ") : void 0;
    function k() {
        let { activeElement: e } = h.current?.ownerDocument ?? document;
        ((0, ns.vq)(e, HTMLElement) && e.blur(), u());
    }
    let S = (0, t.jsxs)("div", {
        ref: h,
        className: a()(nd.LL, { [nd.JD]: j, [nd.xe]: I }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            b
                ? (0, t.jsx)(eF.E, {
                      id: v,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: nd.qf,
                      children: r,
                  })
                : l,
            (0, t.jsx)(eQ.D, {
                innerRef: o,
                "aria-label": d,
                "aria-describedby": P,
                "aria-expanded": !1,
                onClick: (e) => {
                    (e.stopPropagation(), k());
                },
                focusProps: { ringTarget: h },
            }),
        ],
    });
    return (0, t.jsx)("div", {
        ref: m,
        className: a()(nd.kL, f),
        onBlur: p,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            {
                children: n
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: nd.VH, children: S }),
                              N && (0, t.jsx)(nu, { id: A, message: y, type: C }),
                          ],
                      }),
            },
            n ? "editing" : "preview",
        ),
    });
}
var ng = l(786826);
function nf(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function nm(e) {
    var n;
    let {
            isEditing: l,
            committedValue: i,
            editedValue: r,
            setEditedValue: a,
            editButtonRef: s,
            handleStartEditing: o,
            wrapperRef: d,
            onBlur: u,
            onContainerKeyDown: c,
            inputRef: g,
            onInputFocus: f,
            onInputKeyDown: m,
            preview: p,
            placeholder: x,
            editButtonAriaLabel: h,
            label: v,
            maxLength: A,
            emojiPickerIntention: b,
            error: j,
            warning: I,
            className: C,
        } = e,
        y =
            ((n = l ? r : i),
            (null != A && n.length > A ? e_.intl.formatToPlainString(e_.t.ICT5S6, { maxLength: A }) : void 0) ?? j);
    return (0, t.jsx)(nc, {
        isEditing: l,
        preview: p,
        placeholder: x,
        editButtonRef: s,
        editButtonAriaLabel: h,
        onStartEditing: o,
        className: C,
        wrapperRef: d,
        onBlur: u,
        onKeyDown: c,
        previewErrorMessage: y,
        previewWarningMessage: I,
        input: (0, t.jsx)(ng.f, {
            editorRef: g,
            label: v,
            hideLabel: !0,
            value: l ? r : i,
            onChange: a,
            onFocus: f,
            onKeyDown: m,
            maxLength: A,
            error: y,
            helperText: I,
            placeholder: x,
            emojiPickerIntention: b,
        }),
    });
}
let np = [
    { value: "HAIKU", label: () => e_.intl.string(e_.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => e_.intl.string(e_.t.CXkR1L) },
    { value: "TELL_US", label: () => e_.intl.string(e_.t.eutr4P) },
    { value: "FUN_FACT", label: () => e_.intl.string(e_.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => e_.intl.string(e_.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => e_.intl.string(e_.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => e_.intl.string(e_.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => e_.intl.string(e_.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => e_.intl.string(e_.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => e_.intl.string(e_.t.u7WCGI) },
];
var nx = l(307731);
function nh(e) {
    let n,
        l,
        r,
        a,
        o,
        { displayProfile: d, className: u } = e,
        c = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        g = d?.guildId != null,
        f = d?.guildId ?? null,
        m = W.Ay.canUsePremiumProfileCustomization(c),
        p = (0, na.U)({ location: "user_profile_modal_edit" }),
        {
            value: x,
            previewValue: h,
            onCommit: v,
        } = ((n = d?.guildId ?? null),
        (l = d?.guildId != null),
        (r = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingBio)),
        (a = l ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, nr.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        A = (function (e) {
            let {
                    isEditing: n,
                    wrapperRef: l,
                    handleCommit: t,
                    ...r
                } = (function (e) {
                    let { value: n, onCommit: l, disabled: t = !1 } = e,
                        [r, a] = i.useState("idle"),
                        [o, d] = i.useState(n),
                        u = "editing" === r && !t,
                        c = (0, s.bG)([no.Ay], () => no.Ay.useReducedMotion),
                        g = i.useRef(null),
                        f = i.useRef(null),
                        m = i.useRef(null),
                        p = i.useRef(!1),
                        x = i.useRef(!0),
                        h = i.useRef(!1),
                        v = i.useCallback(() => {
                            ((x.current = !1), d(n), a("editing"));
                        }, [n]),
                        A = i.useRef(o);
                    i.useLayoutEffect(() => {
                        A.current = o;
                    });
                    let b = i.useCallback(() => {
                            x.current || ((x.current = !0), l(A.current), a("done"));
                        }, [l]),
                        j = i.useCallback(() => {
                            x.current || ((x.current = !0), a("done"));
                        }, []);
                    (i.useEffect(() => {
                        "done" === r && (p.current && g.current?.focus({ preventScroll: !0 }), (p.current = !1));
                    }, [r]),
                        i.useEffect(() => {
                            let e = h.current;
                            ((h.current = !1),
                                u &&
                                    (f.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                                    e || m.current?.focus({ preventScroll: !0 })));
                        }, [u, c]));
                    let I = i.useCallback(
                            (e) => {
                                u &&
                                    "Escape" === e.key &&
                                    (e.preventDefault(), e.stopPropagation(), (p.current = !0), j());
                            },
                            [u, j],
                        ),
                        C = i.useCallback(() => {
                            ((p.current = !0), b(), m.current?.blur());
                        }, [b]),
                        y = i.useCallback(() => {
                            ((p.current = !0), j(), m.current?.blur());
                        }, [j]),
                        N = i.useCallback(() => {
                            u || ((h.current = !0), v());
                        }, [u, v]);
                    return {
                        isEditing: u,
                        committedValue: n,
                        editedValue: o,
                        setEditedValue: d,
                        onCommit: l,
                        editButtonRef: g,
                        wrapperRef: f,
                        inputRef: m,
                        handleStartEditing: v,
                        handleCommit: b,
                        handleCancel: j,
                        onInputFocus: N,
                        onInputKeyDown: i.useCallback(
                            (e) => {
                                "Enter" !== e.key || e.shiftKey
                                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), y())
                                    : (e.preventDefault(), C());
                            },
                            [C, y],
                        ),
                        onContainerKeyDown: I,
                    };
                })(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, n) {
                            if (n?.contains(e)) return !0;
                            let l = nf(n),
                                t = l?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, l.current),
                    [l],
                );
            i.useEffect(() => {
                if (!n) return;
                let e = l.current?.ownerDocument ?? document;
                function i(e) {
                    (0, ns.vq)(e.target) && !a(e.target) && t();
                }
                return (e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i));
            }, [n, l, a, t]);
            let o = i.useCallback(
                (e) => {
                    if (!n) return;
                    let i = e.relatedTarget;
                    !(0, ns.vq)(i) || a(i) || (null == nf(l.current) && t());
                },
                [n, a, t, l],
            );
            return { isEditing: n, wrapperRef: l, handleCommit: t, ...r, onBlur: o };
        })({ value: x, onCommit: v }),
        b = !(0, nn.uJ)(h),
        j = (0, s.bG)([ep.A], () => ep.A.getErrors(f)),
        I = (0, ni.EC)(f),
        C = j.bio?.[0],
        y = I?.bio?.[0],
        N = i.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * np.length)), np[e]);
        }, []),
        E = g ? e_.intl.string(e_.t.yPJ9xr) : N.label();
    return !g || m
        ? (0, t.jsx)(nm, {
              ...A,
              className: u,
              preview: b ? (0, t.jsx)(nl.A, { userBio: h, setLineClamp: !1 }) : null,
              placeholder: E,
              editButtonAriaLabel: e_.intl.string(e_.t.lO3n7a),
              label: e_.intl.string(e_.t["YWo+Zd"]),
              emojiPickerIntention: nx.EmojiIntention.PROFILE,
              maxLength: p,
              error: C,
              warning: y,
          })
        : b
          ? (0, t.jsx)(nl.A, { userBio: h, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var nv = l(430626);
function nA(e) {
    let { currentUser: n, displayProfile: l, canEditInPlace: i } = e,
        r = l?.bio,
        a = !(0, nn.uJ)(r),
        s = l?.guildId != null,
        o = s && W.Ay.canUsePremiumProfileCustomization(n),
        d = o ? e_.intl.string(e_.t.jVai8N) : e_.intl.string(e_.t.ZzAR2Y),
        u = (0, W.TW)(n) ? e_.intl.string(e_.t["5AFxuK"]) : e_.intl.string(e_.t.N6ixy8),
        c = i && o ? { icon: ne.t, tooltip: u } : void 0;
    return (i || a) && (!i || !s || a || o)
        ? (0, t.jsx)(nt.A, {
              heading: d,
              hideHeading: !i,
              headingIcon: c,
              children: i
                  ? (0, t.jsx)(nh, { displayProfile: l, className: nv.u })
                  : (0, t.jsx)(nl.A, { userBio: r, setLineClamp: !1 }),
          })
        : null;
}
var nb = l(700058),
    nj = l(722868),
    nI = l(822775),
    nC = l(982985),
    ny = l(211031),
    nN = l(34188),
    nE = l(815996),
    nP = l(993401);
function nk(e) {
    let { analyticsLocations: n, newestAnalyticsLocation: l } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, nE.Cz)({ analyticsLocations: n, analyticsSource: l });
        }, [n, l]);
    return (0, t.jsx)(nP.q3, {
        action: "VISIT_SHOP",
        icon: nN.U,
        tooltipText: e_.intl.string(e_.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var nS = l(573355),
    nT = l(102951);
function nR(e) {
    let {
            user: n,
            currentUser: l,
            guildId: i,
            originGuildId: r,
            channelId: a,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, Y.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, nj.A)({ user: n, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, nT.J)({ userId: n.id }),
        x = f.length > 0 || m || p;
    return o === Q.eA$.BLOCKED
        ? null
        : n.id === l.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nC.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(nk, {}),
                        (0, t.jsx)(ny.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nI.A, { user: n, guildId: i, onClose: d }),
                        (0, t.jsx)(nk, {}),
                        (0, t.jsx)(ny.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(nC.e, { userId: n.id, onClose: nb.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(ny.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nC.e, { userId: n.id, onClose: nb.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(ny.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === Q.eA$.FRIEND || o === Q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(nC.e, { userId: n.id, onClose: nb.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(nS.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ny.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Q.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(nC.e, { userId: n.id, onClose: nb.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(nS.ES, {
                                user: n,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, t.jsx)(ny.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(nS.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(nC.l, { userId: n.id, onClose: nb.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(ny.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var nO = l(463156),
    n_ = l(866665),
    nD = l(28863),
    nL = l(509434),
    nM = l(307301),
    nw = l(228366),
    nG = l(95561),
    nF = l(874490),
    nV = l(968309),
    nU = l(174459),
    nB = l(486020),
    nz = l(123917),
    nW = l(783419);
let nH = "User Profile Modal V2";
function nK(e) {
    let n = et.A.get(e);
    ((0, nV.A)({ platformType: n.type, location: nH }),
        nU.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: nH,
            current_step: "desktop oauth",
            platform_type: n.type,
        }));
}
function nq() {
    nw.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: nK, stackingBehavior: "stack" });
}
function nY(e) {
    let { account: n, locale: l, userId: i } = e,
        r = n.metadata ?? {},
        a = (0, Z.An)(r[nW.pK.CREATED_AT], l),
        s = et.A.get((0, nF.ML)(n.type));
    return (0, t.jsx)(n$, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, t.jsx)(n_.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, t.jsx)(eF.E, { variant: "text-sm/normal", className: e8.GW, children: n.name }),
                  })
                : (0, t.jsx)(nD.Anchor, {
                      href: e,
                      className: e8.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${e_.intl.string(e_.t.q5jLJB)}`
                              : `${n.name}, ${e_.intl.string(e_.t.q5jLJB)}`,
                      onClick: (l) => {
                          ((0, nG.zV)(Q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, nz.h)({ href: e, trusted: s?.type !== Q.fg2.DOMAIN }, l));
                      },
                      children: (0, t.jsxs)("div", {
                          className: e8.vi,
                          children: [
                              (0, t.jsx)(n_.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, t.jsx)(eF.E, {
                                      variant: "text-sm/normal",
                                      className: e8.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, t.jsx)(nL.I, { size: "xs", color: "currentColor", className: e8.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return n.type === Q.fg2.REDDIT
                ? (0, e1.xE)(r)
                : n.type === Q.fg2.STEAM
                  ? (0, e1.dy)(r)
                  : n.type === Q.fg2.BLUESKY || n.type === Q.fg2.MASTODON || n.type === Q.fg2.TWITTER
                    ? (0, e1.ED)(r)
                    : n.type === Q.fg2.PAYPAL
                      ? (0, e1.gZ)(r)
                      : n.type === Q.fg2.EBAY
                        ? (0, e1.ub)(r)
                        : n.type === Q.fg2.TIKTOK
                          ? (0, e1.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function nX(e) {
    let { identityWithApplication: n } = e,
        { identity: l, application: i } = n;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let r = nB.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(n$, {
        renderAccountName: function () {
            return (0, t.jsx)(n_.m, {
                overflowOnly: !0,
                text: l.profile.username,
                children: (0, t.jsx)(eF.E, {
                    variant: "text-sm/normal",
                    className: e8.GW,
                    children: l.profile.username,
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
function n$(e) {
    let {
        renderAccountName: n,
        renderMetadata: l,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: e8.FI,
        children: [
            (0, t.jsx)(n_.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: e8.k_,
                    children: (0, t.jsx)("img", {
                        alt: e_.intl.formatToPlainString(e_.t.rtm15P, { name: i }),
                        className: a()(e8.tV, o ? e8.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: e8.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, t.jsx)(eF.E, {
                                    variant: "text-xs/normal",
                                    children: e_.intl.format(e_.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: e8.yu, children: l() }),
                ],
            }),
        ],
    });
}
function nZ(e) {
    let { connections: n, applicationIdentities: l, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([J.default], () => J.default.locale);
    if (!r && 0 === n.length && 0 === l.length) return null;
    let u = n.length > 0 || l.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(e8.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: e8.V,
                    children: [
                        n.map((e) => (0, t.jsx)(nY, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        l?.map((e) => (0, t.jsx)(nX, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eQ.D, {
                    className: e8.qG,
                    onClick: nq,
                    children: [
                        (0, t.jsx)(nM.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eF.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: e_.intl.string(e_.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var nJ = l(193885),
    nQ = l(408278),
    n0 = l(993165),
    n1 = l(194261),
    n2 = l(789645),
    n9 = l(297264),
    n3 = l(812993),
    n5 = l(821609),
    n7 = l(39623),
    n8 = l(890377),
    n4 = l(517461),
    n6 = l(248778),
    le = l(465794),
    ln = l(252732),
    ll = l(487233),
    lt = l(120386),
    li = l(317097),
    lr = l(602853),
    la = l(922016),
    ls = l(508274),
    lo = l(654107),
    ld = l(930349);
function lu(e) {
    let { user: n, disabled: l = !1 } = e,
        r = i.useRef(null),
        a = (0, lr.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lo.rh)(n.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ep.A, q.A], () => ({
            pendingAccentColor: ep.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: q.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, li.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, nr.p)({ accentColor: e }), []);
    return (0, t.jsx)(la.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(ls.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(ld.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: l,
                accessibleLabel: e_.intl.string(e_.t["/X3fkf"]),
                accessibleValue: (0, li.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, li.Hl)(c) } }),
            }),
    });
}
var lc = l(450373),
    lg = l(317139);
function lf(e, n) {
    let l = null === e,
        t = void 0 === e;
    return l || (t && null == n) ? e_.intl.string(e_.t["3Xph0/"]) : t ? e_.intl.string(e_.t.keN7ib) : e.description;
}
function lm(e) {
    let { backgroundColor: n } = e;
    return (0, t.jsx)("div", { className: lg.o, style: { backgroundColor: n } });
}
function lp(e) {
    let { src: n } = e;
    return (0, t.jsx)("img", { src: n, alt: "", className: lg._ });
}
function lx(e) {
    let { displayProfile: n, bannerChange: l, shouldAnimate: i } = e,
        r = (0, lr.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = n?.primaryColor ?? (0, li.LX)(r),
        { hex: s } = (0, lc.A)(a),
        o = n?.getPreviewBanner(l, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(lp, { src: o }) : (0, t.jsx)(lm, { backgroundColor: s });
}
function lh(e) {
    let { displayProfile: n, bannerChange: l, ...i } = e;
    return (0, t.jsx)(ld.A, {
        ...i,
        accessibleLabel: e_.intl.string(e_.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(lx, { displayProfile: n, bannerChange: l, shouldAnimate: e }),
    });
}
var lv = l(569059);
function lA(e) {
    let { userId: n, guildId: l, disabled: r, errorMessageId: a } = e,
        s = i.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: f,
        } = (function (e, n) {
            let l = (0, X.Ay)(e, n),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, $.cf)(
                    [ep.A, U.default, q.A],
                    () => ({
                        pendingBanner: ep.A.getPendingChanges(n ?? void 0).pendingBanner,
                        mainProfileBanner: U.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != n ? q.A.getGuildMemberProfile(e, n)?.banner : q.A.getUserProfile(e)?.banner,
                    }),
                    [n, e],
                ),
                a = null != n,
                s = a && (l?.isUsingGuildMemberBanner() ?? !1),
                o = null === t;
            return {
                displayProfile: l,
                pendingBanner: t,
                bannerChange: o && a && !s ? void 0 : t,
                accessibleValue: lf(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(n, l),
        m = (0, eg.Ac)(d, g)
            ? {
                  onClick: () => (0, ln.rM)(null, g, (e) => (0, nr.p)({ guildId: l ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: e_.intl.string(f ? e_.t.jHlJNS : e_.t.tT9n7D),
              }
            : void 0,
        p = (0, lv.P)({ guildId: l, returnRef: s });
    return (0, t.jsx)(lh, {
        buttonRef: s,
        displayProfile: o,
        bannerChange: u,
        accessibleValue: c,
        variant: "square",
        affordance: m,
        onClick: p,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: a,
    });
}
var lb = l(259065),
    lj = l(913563),
    lI = l(898985),
    lC = l(922301),
    ly = l(660184),
    lN = l(763052),
    lE = l(523312);
let lP = "heading-xl/semibold";
function lk(e) {
    if (null == e) return e_.intl.string(e_.t["3Xph0/"]);
    let n = e_.intl.string((0, lj.A)(e.fontId)),
        l = e_.intl.string(lI.J[e.effectId] ?? lN.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return e_.intl.formatToPlainString(e_.t.A2XnI4, { fontName: n, effectName: l, colors: t });
}
function lS(e) {
    let { displayName: n, displayNameStyles: l, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: a()(lE.MC, { [lE.Xn]: null != l }),
        children:
            null != l
                ? (0, t.jsx)(eF.E, {
                      variant: lP,
                      children: (0, t.jsx)(ly.A, {
                          userName: n,
                          displayNameStyles: l,
                          effectDisplayType: i ? lC.G.ANIMATED : lC.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eF.E, { variant: lP, className: lE.kr, children: n }),
    });
}
function lT(e) {
    let { displayName: n, displayNameStyles: l, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(ld.A, {
        ...r,
        accessibleLabel: e_.intl.string(e_.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(lS, { displayNameStyles: l, displayName: n, shouldAnimate: i || e }),
    });
}
function lR(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != l,
        c = (0, s.bG)([em.Ay], () => (null != l ? (em.Ay.getMember(l, n.id)?.nick ?? null) : null)),
        g = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.globalName ?? null),
        f = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName),
        m = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: h,
        } = (0, eg.B0)(n, l ?? void 0),
        v = u ? x : p,
        A = void 0 !== h,
        b = null === h,
        j = u && null != p,
        C = (0, eg.lw)({ pendingValue: h, userValue: p, guildValue: x, guildId: l ?? void 0 }),
        y = (0, eg.lw)({ pendingValue: u ? m : f, guildValue: c, userValue: g, guildId: l ?? void 0 }) ?? n.username,
        N = A ? null != h : null != v,
        E =
            null != C && N
                ? {
                      onClick: () => (0, nr.p)({ guildId: l ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: e_.intl.string(j ? e_.t.en3ogK : e_.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            (o?.(), (0, lb.L)({ analyticsLocations: d, guildId: l ?? void 0, stackingBehavior: "stack" }));
        }, [d, l, o]);
    return (0, t.jsx)(lT, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: lk(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: y,
        displayNameStyles: C,
        disabled: r,
    });
}
var lO = l(450232),
    l_ = l(89851);
function lD(e) {
    let { heading: n, children: l, disabled: i = !1, showNitroIcon: r = !1, badge: s } = e;
    return (0, t.jsxs)("div", {
        className: l_.Os,
        children: [
            (0, t.jsxs)("div", {
                className: a()(l_.Pf, { [l_.r9]: i }),
                children: [
                    (0, t.jsx)(n9.D, {
                        className: l_.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: n,
                    }),
                    r && (0, t.jsx)(lO.A, { className: l_.IX, size: "xs", color: "inherit", disabled: i }),
                    null != s && (0, t.jsx)("span", { className: l_.ot, children: s }),
                ],
            }),
            l,
        ],
    });
}
function lL(e) {
    let { id: n, message: l } = e;
    return null == l
        ? null
        : (0, t.jsxs)("div", {
              className: l_.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eF.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: n, children: l }),
              ],
          });
}
var lM = l(374654),
    lw = l(366010),
    lG = l(736653),
    lF = l(674658),
    lV = l(617061),
    lU = l(203632),
    lB = l(536572);
let lz = new Set(),
    lW = 0;
var lH = l(993408),
    lK = l(841702),
    lq = l(515718),
    lY = l(195292);
function lX(e) {
    "" !== e.thumbnailPreviewSrc && (0, lq.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var l$ = l(599752),
    lZ = l(249360);
let lJ =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    lQ =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function l0(e) {
    let { effect: n, shouldAnimate: l, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, lG.Ay)(),
        u = (0, lw.M)(d) ? lJ : lQ,
        c = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, lK.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, lH.wo)(r, t), [r, t]),
                s = (0, lY.A)({ enabled: n, isInteracting: l, items: a, preload: lX });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: l }),
        g = null != c,
        f = g ? c : n;
    return (
        i.useEffect(() => {
            l && ((lW += 1), lz.forEach((e) => e()));
        }, [l]),
        (0, t.jsxs)("div", {
            className: l$.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: l$.QQ }),
                f?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(l$.yY, { [lZ.O]: g }),
                        children: (0, t.jsx)(y.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: lU.HL.FromStart,
                            isHovering: l,
                            useOpacityOnHover: !1,
                            useThumbnail: !0,
                            delayIntro: !g,
                        }),
                    }),
            ],
        })
    );
}
function l1(e) {
    let { user: n, guildId: l, disabled: r, variant: a = "full-height-bar" } = e,
        o = i.useRef(null),
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != l,
        c = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
        g = (0, eg.N2)({ user: n }),
        f = (0, eg.N2)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileEffect: m } = (0, eg.nZ)(l ?? void 0),
        p = void 0 !== m,
        x = null === m || (!p && null == f),
        h = u && null != g,
        v = (0, eg.lw)({ pendingValue: m, userValue: g, guildValue: f, guildId: l ?? void 0 }),
        { product: A } = (0, lF.q)(v?.skuId),
        b = p ? null != m : null != f,
        j =
            null != v && b
                ? {
                      onClick: () => (0, nr.p)({ guildId: l ?? void 0, profileEffect: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: e_.intl.string(h ? e_.t["SQy/Po"] : e_.t.uMuafO),
                  }
                : void 0,
        C = i.useCallback(() => {
            (0, lV.W)({ analyticsLocations: d, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [d, c]);
    return (0, t.jsx)(ld.A, {
        buttonRef: o,
        affordance: x && !h ? "add" : j,
        variant: a,
        onClick: C,
        accessibleLabel: e_.intl.string(e_.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? e_.intl.string(e_.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : e_.intl.string(t ? e_.t["1M4m8w"] : e_.t["+Du7ua"]);
        })({ profileEffectPreview: v, productName: (0, lB.VG)(A), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(l0, { effect: v, shouldAnimate: e, isEmpty: x, hasMainProfileFallback: h, disabled: r }),
    });
}
var l2 = l(515727),
    l9 = l(746002);
function l3(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((n) => {
            let l = (0, l9.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: l9.CollectiblesItemAssetFormat.STATIC,
                assetId: n.id,
            });
            null != l && (0, lq.NN)(l).catch(() => {});
        });
}
var l5 = l(715196);
function l7(e) {
    let { responsive: n } = e;
    return !0 !== n;
}
function l8(e) {
    let { profileFramePreview: n, isEmpty: l, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, lG.Ay)(),
        u = (0, lw.M)(d) ? lJ : lQ,
        c = (0, E.A)(n?.skuId),
        g = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, lK.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, lH.MG)(r, t), [r, t]);
            return (0, lY.A)({ enabled: n, isInteracting: l, items: a, preload: l3 });
        })({ enabled: l && !r && !o, isInteracting: s }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != m ? (0, S.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != m &&
                (0, t.jsx)("div", {
                    className: a()(l5.hm, x, { [lZ.O]: f }),
                    style: p,
                    children: (0, t.jsx)(k.A, { frame: m, filterLayer: l7, isPreview: !0 }),
                }),
            (0, t.jsx)("div", {
                className: a()(l5.ti, { [l5.yT]: null == m }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: l5.QQ, draggable: !1 }),
            }),
        ],
    });
}
function l4(e) {
    let { user: n, guildId: l, disabled: r } = e,
        a = i.useRef(null),
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != l,
        u = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
        c = (0, eg.Xf)({ user: n }),
        g = (0, eg.Xf)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileFrame: f } = (0, eg.Tu)(l ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        h = (0, eg.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: l ?? void 0 }),
        { product: v } = (0, lF.q)(h?.skuId),
        A = m ? null != f : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, nr.p)({ guildId: l ?? void 0, profileFrame: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: e_.intl.string(x ? e_.t.j6hZyM : e_.t.nQBruk),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, l2.w)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack", returnRef: a });
        }, [o, u]);
    return (0, t.jsx)(ld.A, {
        buttonRef: a,
        affordance: p && !x ? "add" : b,
        variant: "square",
        onClick: j,
        accessibleLabel: e_.intl.string(e_.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? e_.intl.string(e_.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : e_.intl.string(t ? e_.t.yFeGB5 : e_.t["2kAxKM"]);
        })({ profileFramePreview: h, productName: (0, lB.VG)(v), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(l8, {
                profileFramePreview: h,
                isEmpty: p,
                hasMainProfileFallback: x,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var l6 = l(684732),
    te = l(498596),
    tn = l(871524);
function tl(e) {
    let { primaryColor: n, secondaryColor: l, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, li.Hl)(n)}, ${(0, li.Hl)(l)})`;
    return (0, t.jsx)("div", { className: tn.D7, style: { background: r }, children: i });
}
function tt(e) {
    let { color: n } = e,
        l = (0, li.Hl)(n),
        i = (0, li.bJ)(n, 0xffffff) < te.Tr.NonText;
    return (0, t.jsx)("div", {
        className: tn.OS,
        children: (0, t.jsx)("div", { className: a()(tn.Hy, { [tn.rY]: i }), style: { backgroundColor: l } }),
    });
}
function ti(e) {
    let { color: n, disabled: l, onClick: r, buttonRef: a, ...s } = e,
        o = i.useRef(null);
    return (0, t.jsx)(eQ.D, {
        ...s,
        innerRef: a ?? o,
        className: tn.Dh,
        onClick: l ? void 0 : r,
        "aria-disabled": l,
        tabIndex: l ? -1 : 0,
        children: (0, t.jsx)(tt, { color: n }),
    });
}
function tr(e) {
    let {
        color: n,
        ariaLabel: l,
        suggestedColors: i,
        disabled: r,
        isOpen: a,
        onRequestOpen: s,
        onRequestClose: o,
        onSelect: d,
        buttonRef: u,
    } = e;
    return (0, t.jsx)(la.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestOpen: s,
        onRequestClose: o,
        renderPopout: (e) => (0, t.jsx)(ls.VN, { ...e, value: n, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, t.jsx)(ti, { color: n, onClick: i, disabled: r, buttonRef: u, "aria-label": l, ...a });
        },
    });
}
function ta(e) {
    let {
            primaryColor: n,
            secondaryColor: l,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
            deleteButton: d,
            variant: u = "square",
            initialOpenPopout: c,
        } = e,
        [g, f] = i.useState(null),
        m = i.useRef(null),
        p = i.useRef(null),
        x = (0, li.Hl)(n),
        h = (0, li.Hl)(l),
        v = e_.intl.formatToPlainString(e_.t.FquTfm, { colorLabel: x }),
        A = e_.intl.formatToPlainString(e_.t.xOnm4z, { colorLabel: h });
    i.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? m : p;
            (e.current?.focus(), f(c));
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let b =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      (d.onClick(), m.current?.focus());
                  },
              }
            : void 0;
    return (0, t.jsx)(ld.Y, {
        variant: u,
        disabled: o,
        deleteButton: b,
        children: (0, t.jsxs)(tl, {
            primaryColor: n,
            secondaryColor: l,
            children: [
                (0, t.jsx)(tr, {
                    color: n,
                    ariaLabel: v,
                    suggestedColors: s,
                    onSelect: r,
                    disabled: o,
                    isOpen: "theme-primary" === g,
                    onRequestOpen: () => f("theme-primary"),
                    onRequestClose: () => f(null),
                    buttonRef: m,
                }),
                (0, t.jsx)(tr, {
                    color: l,
                    ariaLabel: A,
                    suggestedColors: s,
                    onSelect: a,
                    disabled: o,
                    isOpen: "theme-secondary" === g,
                    onRequestOpen: () => f("theme-secondary"),
                    onRequestClose: () => f(null),
                    buttonRef: p,
                }),
            ],
        }),
    });
}
function ts(e) {
    let { user: n, guildId: l, disabled: r = !1 } = e,
        a = (0, X.Ay)(n.id, l),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ep.A, q.A], () => {
            let e = ep.A.getPendingChanges(l ?? void 0),
                t = q.A.getUserProfile(n.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != l ? (q.A.getGuildMemberProfile(n.id, l)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, ef.V7)({ userId: n.id, image: u }),
        { primaryColor: f, secondaryColor: m } = (0, ee.A)({
            user: n,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, lr.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : n.getAvatarURL(l ?? void 0, 80),
        v = (0, lo.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, nr.p)({ guildId: l ?? void 0, themeColors: e });
            },
            [l],
        ),
        b =
            null != l && (0, l6.l)(d, o)
                ? {
                      onClick: () => (0, nr.p)({ guildId: l, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: e_.intl.string(e_.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(ta, {
              primaryColor: f,
              secondaryColor: m,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && A([e, m]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && A([f, e]);
              },
              suggestedColors: v,
              disabled: r,
              deleteButton: b,
          });
}
var to = l(629985);
function td(e) {
    let { children: n, hasGradientBackground: l = !1 } = e;
    return (0, t.jsx)(m.F, { children: (0, t.jsx)("div", { className: a()(to.k, { [to.V]: l }), children: n }) });
}
var tu = l(689175),
    tc = l(424290);
function tg(e) {
    let { children: n } = e;
    return (0, t.jsx)(tu.zC, { className: tc.X, children: (0, t.jsx)("div", { className: tc.Q, children: n }) });
}
var tf = l(508770),
    tm = l(732280),
    tp = l(811611),
    tx = l(976860),
    th = l(402860);
function tv() {
    return i.useCallback(() => {
        ((0, tx.pX)(Q.BVt.NITRO_HOME), (0, th.closeUserProfileModal)());
    }, []);
}
var tA = l(570002),
    tb = l(202541),
    tj = l(155053);
function tI() {
    let e = (0, tm.V)();
    return e?.subscriptionTrial?.skuId === tb.pe.TIER_2 ? e : null;
}
function tC() {
    let e = (0, tA.A)(e_.intl.string(e_.t.pj0XBN));
    return (0, t.jsx)(le.A, { subscriptionTier: tb.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function ty(e) {
    let { trialOffer: n, onSubscribeClick: l, onSubscribeSuccess: i, onSubscribeClose: r } = e,
        a = tv(),
        s = (0, W.FY)({
            intervalType: n.subscriptionTrial?.interval,
            intervalCount: n.subscriptionTrial?.intervalCount,
        }),
        o = (0, tp.ux)(n.expiresAt?.toISOString());
    return (0, t.jsxs)("div", {
        className: tj.nH,
        children: [
            (0, t.jsxs)("div", {
                className: tj.qf,
                children: [
                    (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { children: e_.intl.string(e_.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(tf.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(eF.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: e_.intl.format(e_.t["fF+cgd"], { onClick: a }),
            }),
            (0, t.jsx)(le.A, {
                subscriptionTier: tb.pe.TIER_2,
                buttonTextOverride: s,
                onClick: l,
                onSubscribeModalClose: (e) => {
                    (e && i?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, t.jsx)(eF.E, { variant: "text-xs/normal", color: "text-muted", className: tj.u8, children: o }),
        ],
    });
}
function tN() {
    let e = tI();
    return null == e ? (0, t.jsx)(tC, {}) : (0, t.jsx)(ty, { trialOffer: e });
}
var tE = l(55619),
    tP = l(848717);
function tk() {
    return (0, t.jsxs)("div", {
        className: tP.k,
        children: [
            (0, t.jsx)(eF.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: e_.intl.string(e_.t.JFY17v),
            }),
            (0, t.jsx)(n5.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: e_.intl.string(e_.t.R9GHya),
                onClick: function () {
                    return tE.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tS = l(342866),
    tT = l(968475);
function tR(e) {
    let { user: n, ...l } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([ep.A], () => ({
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tS.A, {
        ...l,
        variant: "full-height-bar",
        userId: n.id,
        avatarChange: a,
        accessibleValue: (0, tS.$)(a, n.avatar),
        imageInteractingClassName: null == r ? tT.$T : void 0,
    });
}
function tO(e) {
    let { userId: n, ...l } = e,
        i = (0, X.Ay)(n),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [ep.A, q.A],
            () => ({
                pendingBanner: ep.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ep.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: q.A.getUserProfile(n)?.banner,
            }),
            [n],
        ),
        d = void 0 !== a ? a : r;
    return (0, t.jsx)(lh, {
        ...l,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: lf(d, o),
    });
}
function t_(e) {
    let { user: n, ...l } = e,
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
        u = (0, eg.lw)({ pendingValue: a, userValue: o }) ?? n.username;
    return (0, t.jsx)(lT, {
        ...l,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: lk(d),
        shouldAlwaysAnimate: null == r,
    });
}
var tD = l(207803);
function tL(e) {
    let n = (0, X.Ay)(e.id),
        {
            tryItOutThemeColors: l,
            tryItOutAvatar: t,
            pendingAvatar: i,
        } = (0, s.cf)([ep.A], () => ({
            tryItOutThemeColors: ep.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, ef.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, ee.A)({
            user: e,
            displayProfile: n,
            pendingThemeColors: l,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: l };
}
function tM(e) {
    let { user: n, initialOpenPopout: l } = e,
        { primaryColor: r, secondaryColor: a, pendingAvatarSrc: s, tryItOutThemeColors: o } = tL(n),
        d = (0, lr.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != s ? s : n.getAvatarURL(void 0, 80),
        c = (0, lo.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, tD.a)(e);
        }, []);
    return null == r || null == a
        ? null
        : (0, t.jsx)(ta, {
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
              initialOpenPopout: l,
          });
}
function tw(e) {
    let { user: n, onClickPrimary: l, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: a } = tL(n);
    if (null == r || null == a) return null;
    let s = e_.intl.formatToPlainString(e_.t.FquTfm, { colorLabel: (0, li.Hl)(r) }),
        o = e_.intl.formatToPlainString(e_.t.xOnm4z, { colorLabel: (0, li.Hl)(a) });
    return (0, t.jsx)(ld.Y, {
        variant: "full-height-bar",
        children: (0, t.jsxs)(tl, {
            primaryColor: r,
            secondaryColor: a,
            children: [
                (0, t.jsx)(ti, { color: r, onClick: l, "aria-label": s }),
                (0, t.jsx)(ti, { color: a, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var tG = l(847081);
function tF(e) {
    let { user: n, mode: l } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, n0.pA)(),
        c = (function (e) {
            let { analyticsLocations: n } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, lb.L)({ analyticsLocations: n, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [n, e]);
        })(r),
        g = (0, lv._)({ isPremiumTryItOut: !0, returnRef: a }),
        f = (0, lv.P)({ isPremiumTryItOut: !0, returnRef: s }),
        m = "edit" === l;
    return (
        i.useEffect(() => {
            if (m && !o.current) {
                switch (d) {
                    case "display-name-styles":
                        c();
                        break;
                    case "banner":
                        f();
                        break;
                    case "avatar":
                        g();
                        break;
                    default:
                        return;
                }
                o.current = !0;
            }
        }, [d, m, c, g, f]),
        (0, t.jsxs)("div", {
            className: tG.T,
            children: [
                (0, t.jsx)(lD, {
                    heading: e_.intl.string(e_.t.NEzEws),
                    children: (0, t.jsx)(t_, {
                        user: n,
                        buttonRef: r,
                        onClick: m ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(lD, {
                    heading: e_.intl.string(e_.t.DMeO2X),
                    children: m
                        ? (0, t.jsx)(tM, {
                              user: n,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, t.jsx)(tw, {
                              user: n,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, t.jsx)(lD, {
                    heading: e_.intl.string(e_.t.Vgdusv),
                    children: (0, t.jsx)(tO, {
                        userId: n.id,
                        buttonRef: s,
                        onClick: m ? f : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(lD, {
                    heading: e_.intl.string(e_.t.Dt3ZUr),
                    children: (0, t.jsx)(tR, {
                        user: n,
                        buttonRef: a,
                        onClick: m ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var tV = l(847374),
    tU = l(111159),
    tB = l(548118),
    tz = l(711014),
    tW = l(649998),
    tH = l(561392),
    tK = l(499957),
    tq = l(15626),
    tY = l(715022),
    tX = l(44482),
    t$ = l(470791);
function tZ(e) {
    let {
            options: n,
            value: l,
            onSelectionChange: r,
            label: s,
            className: o,
            listboxClassName: d,
            disabled: u = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: m,
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
            let { reducedMotion: e } = i.useContext(ey.C),
                {
                    isOpen: n,
                    setIsOpen: l,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tH.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tK.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: n,
                setIsOpen: l,
                refs: t,
                floatingStyles: r,
                getReferenceProps: a,
                getFloatingProps: s,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: C } = v,
        y = i.useContext(tq._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        S = i.useRef(null),
        [T, R] = i.useState(null),
        O = null != T ? (0, tY.ZN)(P, T) : void 0,
        _ = i.useRef(!1),
        D = i.useRef(!1),
        L = i.useMemo(() => n.filter((e) => (0, tY.fI)(e.value, [l])), [l, n]),
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
            (h(!1), k.current?.focus());
        }, [h]),
        F = i.useCallback(
            (e) => {
                if (!S.current?.contains(e.relatedTarget)) {
                    if (D.current) {
                        D.current = !1;
                        return;
                    }
                    if (x && null != T) {
                        let e = n[T];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && h(!1);
                }
            },
            [x, T, n, r, h],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let n = e[0];
                null != n && (r(n.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: U, handleKeyDown: B } = (0, tW.l)(!0, n),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = U !== z.current;
        ((z.current = U), null != U && e && (R(U), x || ((_.current = !0), h(!0))));
    }, [U, x, h]);
    let W = i.useCallback(
            (e) => {
                if (u) return;
                let l = n.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === l) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || h(!0);
                            return;
                        }
                        R((e) => (null === e ? 0 : Math.min(e + n, l - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === l) return;
                        if ((e.preventDefault(), e.altKey && x)) {
                            if (null != T) {
                                let e = n[T];
                                if (null != e && !0 !== e.disabled) {
                                    V([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!x) return void h(!0);
                        R((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void h(!0);
                        if (null == T || T > l - 1) return;
                        {
                            let e = n[T];
                            if (null == e || !0 === e.disabled) return;
                            V([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === l)) return;
                        (R(0), x || ((_.current = !0), h(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === l)) return;
                        (R(l - 1), x || ((_.current = !0), h(!0)));
                        break;
                    case "Tab":
                        if (x && null != T) {
                            let e = n[T];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((D.current = !0), h(!1));
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, n, T, V, G, r, h, B],
        ),
        H = Math.max(
            n.findIndex((e) => e.id === L[L.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), R(null), (_.current = !1))
            : ((K.current = !0), _.current || R(n.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, n.length]);
    let q = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": O,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: M,
        onMouseDown: w,
        onKeyDown: W,
        onBlur: F,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            ((S.current = e), v.setReference(e));
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(f.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: q }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(t$.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tW.q, {
                        id: P,
                        tabIndex: -1,
                        items: n,
                        selectionMode: "single",
                        selectedItems: L,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: T,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(tX.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tJ = l(216384);
let tQ = "MAIN_PROFILE";
function t0(e) {
    let { guild: n } = e;
    return (0, t.jsx)(tB.Ay, { className: tJ.$f, guild: n, size: tB.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function t1(e) {
    let { leading: n, label: l, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tJ.XE,
        children: [
            null != n && (0, t.jsx)("div", { className: tJ.fZ, children: n }),
            (0, t.jsxs)("div", {
                className: tJ.qL,
                children: [
                    (0, t.jsx)(eF.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: l }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eF.E, {
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
function t2(e) {
    let { leading: n, label: l, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eQ.D, {
        innerRef: r,
        className: a()(tJ.L5, { [tJ.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            n,
            (0, t.jsx)(eF.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tJ.v9,
                children: l,
            }),
            (0, t.jsx)(tV.a, {
                className: tJ.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function t9(e) {
    let { selectedGuildId: n, originGuildId: l, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tz.Ay], () => tz.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([G.A], () => G.A.getGuilds()),
        c = (0, s.bG)([e5.A], () => {
            let e = e5.A.getGuildId();
            return null == e || ep._.has(e) ? null : e;
        }),
        g = (0, s.cf)([em.Ay, tz.Ay], () => {
            let e = {};
            for (let n of tz.Ay.getFlattenedGuildIds()) {
                let l = em.Ay.getSelfMember(n)?.nick;
                null != l && (e[n] = l);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: tQ,
                    label: e_.intl.string(e_.t["2p07FR"]),
                    value: tQ,
                    leading: (0, t.jsx)(tU.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
                },
                n = l ?? c,
                i = d
                    .map((e) => {
                        if (e === n) return null;
                        let l = u[e];
                        return null == l
                            ? null
                            : {
                                  id: l.id,
                                  label: l.name,
                                  value: l.id,
                                  leading: (0, t.jsx)(t0, { guild: l }),
                                  description: g[l.id] ?? void 0,
                              };
                    })
                    .filter(ea.Vq),
                r = null != n ? u[n] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(t0, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, l, c, g]),
        m = n ?? tQ,
        p = f.find((e) => e.value === m) ?? f[0],
        h = i.useCallback(
            (e) => {
                let l = e === tQ ? null : e;
                l !== n && r(l);
            },
            [r, n],
        );
    return (0, t.jsx)(tZ, {
        className: tJ.kL,
        label: e_.intl.string(e_.t.rki38K),
        listboxClassName: tJ.yt,
        options: f,
        value: m,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(t1, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(t2, { leading: p.value === tQ ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var t3 = l(462887),
    t5 = l(765178),
    t7 = l(461797),
    t8 = l(469054),
    t4 = l(601298);
function t6() {
    let { preset: e, setPreset: n } = (0, n0.RQ)(),
        l = (0, lG.Ay)(),
        t = (0, t3.q)(l),
        r = i.useCallback(
            (e) => {
                let n = (0, t7.Wt)(e);
                (0, tD.w5)({
                    banner: (0, t4.X)({
                        assetOrigin: t8.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: t ? n.themeColors.light : n.themeColors.dark,
                    displayNameStyles: n.displayNameStyles,
                });
            },
            [t],
        );
    return (
        i.useEffect(() => {
            ep.A.hasTryItOutChanges() || r(e);
        }, [r, e]),
        i.useCallback(() => {
            let l = (0, t7.B$)(e),
                t = (0, t7.Wt)(l);
            (nU.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: l }),
                n(l),
                r(l),
                t5.O.announce(e_.intl.formatToPlainString(e_.t.M2Hj9s, { presetName: t.getName() })));
        }, [e, n, r])
    );
}
var ie = l(23722),
    il = l(288490);
let it = "profile-editing-nameplate-error",
    ii = "profile-editing-avatar-error",
    ir = "profile-editing-avatar-decoration-error",
    ia = "profile-editing-banner-error",
    is = "profile-editing-display-name-style-error";
function io(e) {
    let { className: n } = e;
    return (0, t.jsx)("div", {
        className: a()(il.D0, n),
        children: (0, t.jsx)("div", { className: il.ZN, children: (0, t.jsx)(n1.LockIcon, { size: "xs" }) }),
    });
}
function id() {
    let [e, n] = (0, n4.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: il.X6,
              children: [
                  (0, t.jsx)(eF.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: e_.intl.string(e_.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eQ.D, {
                      "aria-label": e_.intl.string(e_.t.rSe9ra),
                      className: il.TD,
                      onClick: () => n(!0),
                      children: (0, t.jsx)(n2.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function iu() {
    let e = tv(),
        n = (0, tA.A)(e_.intl.string(e_.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: il.eW,
        children: [
            (0, t.jsxs)("div", {
                className: il.tm,
                children: [
                    (0, t.jsx)(n9.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: e_.intl.string(e_.t.bO0TOe),
                    }),
                    (0, t.jsx)(eF.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: e_.intl.format(e_.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(le.A, { subscriptionTier: tb.pe.TIER_2, buttonTextOverride: n, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(io, { className: il.nd }),
        ],
    });
}
function ic() {
    return (0, t.jsx)(eF.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: il.BJ,
        "aria-hidden": !0,
        children: e_.intl.format(e_.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(ne.t, { size: "xxs", color: "currentColor", className: il.qp }),
        }),
    });
}
function ig(e) {
    let { user: n, guildId: l, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(lD, {
        heading: e_.intl.string(e_.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(lM.A, { user: n, guildId: l, disabled: i, errorMessageId: null != r ? it : void 0 }),
            (0, t.jsx)(lL, { id: it, message: r }),
        ],
    });
}
function im(e) {
    let { user: n, guildId: l, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(lD, {
        heading: e_.intl.string(e_.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(ll.A, { user: n, guildId: l, disabled: i, errorMessageId: null != r ? ii : void 0 }),
            (0, t.jsx)(lt.A, { user: n, guildId: l, disabled: i, errorMessageId: null != a ? ir : void 0 }),
            (0, t.jsx)(lL, { id: ii, message: (0, ln.d3)(r) }),
            (0, t.jsx)(lL, { id: ir, message: a }),
        ],
    });
}
function ip(e) {
    let { user: n, guildId: l, disabled: i, errorMessage: r } = e,
        a = (0, n6.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, eR.kn)(a && !i ? [eI.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === eI.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(lD, {
        heading: e_.intl.string(e_.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(n3.Lp, { text: e_.intl.string(e_.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(lR, {
                user: n,
                guildId: l,
                disabled: i,
                errorMessageId: null != r ? is : void 0,
                onOpen: d ? () => o(eO.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(lL, { id: is, message: r }),
        ],
    });
}
function ix(e) {
    let { user: n, guildId: l, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(lD, {
        heading: e_.intl.string(e_.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(ts, { user: n, guildId: l, disabled: i || !r }),
            (0, t.jsx)(lA, { userId: n.id, guildId: l, disabled: i || !r, errorMessageId: null != a ? ia : void 0 }),
            (0, t.jsx)(lL, { id: ia, message: (0, ln.d3)(a) }),
        ],
    });
}
function ih(e) {
    let { user: n, disabled: l } = e;
    return (0, t.jsx)(lD, {
        heading: e_.intl.string(e_.t["/X3fkf"]),
        disabled: l,
        children: (0, t.jsx)(lu, { user: n, disabled: l }),
    });
}
function iv(e) {
    let { user: n, guildId: l, disabled: i } = e;
    return (0, t.jsxs)(lD, {
        heading: e_.intl.string(e_.t["Vfbar/"]),
        disabled: i,
        children: [
            (0, t.jsx)(l1, { user: n, guildId: l, disabled: i, variant: "square" }),
            (0, t.jsx)(l4, { user: n, guildId: l, disabled: i }),
        ],
    });
}
let iA = "premium-try-it-out-description";
function ib(e) {
    let { user: n } = e,
        l = tv(),
        { navigate: i } = (0, n0.pA)();
    return (
        t6(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": iA,
            className: il.DX,
            children: [
                (0, t.jsx)(io, { className: il.x$ }),
                (0, t.jsxs)("div", {
                    className: il.sb,
                    children: [
                        (0, t.jsx)(eF.E, {
                            id: iA,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: e_.intl.format(e_.t.TmfgI2, { onClick: l }),
                        }),
                        (0, t.jsx)(n5.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: n7.EyeIcon,
                            text: e_.intl.string(e_.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tF, { user: n, mode: "entrypoint" }),
            ],
        })
    );
}
function ij(e) {
    let {
            user: n,
            panelId: l,
            selectedGuildId: i,
            originGuildId: r,
            isLoading: a,
            isEditingDisabled: o,
            collapseButtonRef: d,
            onClosePanel: u,
            onSelectGuildId: c,
        } = e,
        g = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        f = (0, ie.A)(c),
        m = null != i,
        p = W.Ay.canUsePremiumProfileCustomization(n),
        x = m && !p,
        h = !p && !m,
        v = m && !p && !g,
        A = a || o,
        b = (0, s.bG)([ep.A], () => ep.A.getErrors(i)),
        j = b.nameplate?.[0] ?? b.nameplate_sku_id?.[0],
        I = b.avatar?.[0],
        C = b.avatar_decoration_sku_id?.[0],
        y = b.banner?.[0],
        N = b.display_name_font_id?.[0] ?? b.display_name_effect_id?.[0] ?? b.display_name_colors?.[0];
    return (0, t.jsxs)(td, {
        hasGradientBackground: v,
        children: [
            (0, t.jsxs)("div", {
                className: il.wx,
                children: [
                    (0, t.jsx)(n_.m, {
                        text: e_.intl.string(e_.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(nQ.K, {
                            buttonRef: d,
                            "aria-label": e_.intl.string(e_.t["l/A351"]),
                            icon: n8.V,
                            onClick: u,
                            "aria-controls": l,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, t.jsx)(t9, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: a,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, t.jsx)(tk, {})
                : (0, t.jsx)(tg, {
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              m && (p ? (0, t.jsx)(id, {}) : (0, t.jsx)(iu, {})),
                              p && (0, t.jsx)(ic, {}),
                              (0, t.jsx)(ig, { user: n, guildId: i, disabled: A || x, errorMessage: j }),
                              (0, t.jsx)(im, {
                                  user: n,
                                  guildId: i,
                                  disabled: A || x,
                                  avatarErrorMessage: I,
                                  avatarDecorationErrorMessage: C,
                              }),
                              p || m
                                  ? (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsx)(ip, { user: n, guildId: i, disabled: A || x, errorMessage: N }),
                                            (0, t.jsx)(ix, {
                                                user: n,
                                                guildId: i,
                                                disabled: A || x,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: y,
                                            }),
                                        ],
                                    })
                                  : (0, t.jsx)(ih, { user: n, disabled: A || x }),
                              (0, t.jsx)(iv, { user: n, guildId: i, disabled: A || x }),
                              h &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(ib, { user: n }), (0, t.jsx)(tN, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var iI = l(202091),
    iC = l(110654);
function iy(e) {
    return null;
}
function iN(e) {
    let { activeSlide: n, direction: l, onTransitionComplete: r, children: s } = e,
        o = new Map(s.map((e) => [e.props.id, e]));
    if (!o.has(n)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = i.useState(n),
        [g, f] = i.useState(!1),
        m = "forwards" === l ? 1 : -1,
        p = (0, u.p)(
            n,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => f(!0),
                onRest: (e, l) => {
                    let { item: t } = l;
                    e.finished && t === n && (f(!1), t !== d && (c(n), r()));
                },
            },
            "respect-motion-settings",
        ),
        x = g || n !== d;
    return (0, t.jsx)("div", {
        className: a()(iC.kL, x && iC.ez),
        children: (0, t.jsx)("div", {
            className: iC.u4,
            children: p((e, n, l) => {
                let { key: i } = l,
                    r = o.get(n);
                return null == r
                    ? null
                    : (0, t.jsx)(
                          iI.animated.div,
                          {
                              className: iC.M6,
                              style: x
                                  ? { transform: e.offset.to((e) => `translate3d(${e * m * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: x || n !== d,
                              "aria-hidden": x || n !== d,
                              children: r.props.children,
                          },
                          i,
                      );
            }),
        }),
    });
}
var iE = l(926321),
    iP = l(477155),
    ik = l(561243),
    iS = l(206697),
    iT = l(280406);
let iR = "shuffle-options-a11y-description";
function iO(e) {
    let { className: n, onShuffle: l } = e;
    return (0, t.jsxs)("div", {
        className: n,
        children: [
            (0, t.jsx)(n5.$, {
                icon: iE.DiceIcon,
                text: e_.intl.string(e_.t.VzqqFC),
                onClick: l,
                variant: "secondary",
                size: "sm",
                "aria-describedby": iR,
                fullWidth: !0,
            }),
            (0, t.jsx)(f.A, { id: iR, children: e_.intl.string(e_.t.bBRdiB) }),
        ],
    });
}
function i_(e) {
    let { user: n, onBack: l, backButtonRef: i } = e,
        r = t6(),
        a = tI();
    return (0, t.jsxs)(td, {
        children: [
            (0, t.jsxs)("div", {
                className: iT.wx,
                children: [
                    (0, t.jsx)("div", {
                        className: iT.FS,
                        children: (0, t.jsx)(n_.m, {
                            text: e_.intl.string(e_.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, t.jsx)(nQ.K, {
                                buttonRef: i,
                                "aria-label": e_.intl.string(e_.t["4IYwrw"]),
                                icon: iP.r,
                                onClick: l,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, t.jsx)(n9.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iT.R_,
                        children: e_.intl.string(e_.t.PxUx8e),
                    }),
                    (0, t.jsx)(eF.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iT.Ij,
                        children: e_.intl.string(e_.t.X0ir7L),
                    }),
                    (0, t.jsx)(iO, { className: iT.ZZ, onShuffle: r }),
                ],
            }),
            (0, t.jsx)(tg, {
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(tF, { user: n, mode: "edit" }),
                        null != a &&
                            (0, t.jsx)(ty, {
                                trialOffer: a,
                                onSubscribeClick: iS.t,
                                onSubscribeSuccess: iS.T,
                                onSubscribeClose: ik.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var iD = l(199016);
let iL = "user-profile-editing-panel",
    iM = "profile-modal-editing-panel-heading";
function iw(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(n_.m, {
        text: e_.intl.string(e_.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eQ.D, {
            innerRef: i,
            "aria-label": e_.intl.string(e_.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iL,
            className: a()(iD.eg, l),
            onClick: n,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(nJ.V, { size: "sm", color: "currentColor" }),
        }),
    });
}
function iG(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(n_.m, {
            text: e_.intl.string(e_.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(nQ.K, {
                buttonRef: i,
                "aria-label": e_.intl.string(e_.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iL,
                icon: nJ.V,
                onClick: n,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iF(e) {
    let {
            selectedGuildId: n,
            originGuildId: l,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: d = !1,
            onClose: u,
            className: c,
            collapseButtonRef: g,
        } = e,
        p = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        { selectedPanel: x, readyPanel: h, handlePanelTransitionComplete: v, goBack: A } = (0, n0.pA)(),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (null == h || "premiumTryItOut" !== h.id || null != h.initialTarget) return;
        let e = requestAnimationFrame(() => b.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [h]),
    null == p)
        ? null
        : (0, t.jsx)("aside", {
              id: iL,
              "aria-labelledby": iM,
              className: a()(iD.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iD.l$,
                  children: [
                      (0, t.jsx)(f.A, {
                          children: (0, t.jsx)(m.H, { id: iM, children: e_.intl.string(e_.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)(iN, {
                          activeSlide: x.id,
                          direction: "premiumTryItOut" === x.id ? "forwards" : "backwards",
                          onTransitionComplete: v,
                          children: [
                              (0, t.jsx)(iy, {
                                  id: "default",
                                  children: (0, t.jsx)(ij, {
                                      panelId: iL,
                                      user: p,
                                      selectedGuildId: n,
                                      originGuildId: l,
                                      isLoading: o,
                                      isEditingDisabled: d,
                                      collapseButtonRef: g,
                                      onClosePanel: u,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, t.jsx)(iy, {
                                  id: "premiumTryItOut",
                                  children: (0, t.jsx)(i_, { user: p, onBack: A, backButtonRef: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iV = l(669253),
    iU = l(347805),
    iB = l(34011),
    iz = l(629403),
    iW = l(612630),
    iH = l(61426);
function iK(e) {
    let { userId: n, className: l, autoFocus: r = !1, onUpdate: o } = e,
        d = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        { loading: u, note: c } = (0, iW.A)(n),
        [g, f] = i.useState(),
        [m, p] = i.useState(),
        x = g ?? c,
        h = i.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), f(e), o?.());
                    try {
                        await iz.A.updateNote(n, e);
                    } catch {
                        p(e_.intl.string(e_.t.F8FvUy));
                    }
                }
            },
            [n, c, o],
        ),
        v = u && null == x,
        A = i.useRef(null),
        b = i.useRef(!1);
    if (
        (i.useEffect(() => {
            !r || d || u || b.current || ((b.current = !0), A.current?.focus({ preventScroll: !0 }));
        }, [r, d, u]),
        d)
    )
        return null;
    let j =
        null != x && x.length > 0
            ? (0, t.jsx)(eF.E, { variant: "text-sm/normal", color: "text-default", className: iH.t, children: x })
            : null;
    return (0, t.jsx)("div", {
        className: a()(nd.kL, l),
        children: (0, t.jsx)(iB.w, {
            inputRef: A,
            value: x ?? "",
            onCommit: h,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: !0,
            paddingBlock: "md",
            scrollIntoViewOnFocus: !0,
            preview: j,
            label: e_.intl.string(e_.t.PbMNh2),
            placeholder: v ? e_.intl.string(e_.t["WLKx/9"]) : e_.intl.string(e_.t.VBhOe2),
            maxLength: Q.T7x,
            disabled: v,
            error: m,
        }),
    });
}
var iq = l(518477),
    iY = l(793222);
function iX(e) {
    let { userId: n } = e,
        l = (0, eb.g)(),
        { trackUserProfileAction: i } = (0, H.NJ)(),
        r = (0, Y.X)("UserProfileModalV2NotesSection"),
        a = r ? iK : iU.A;
    return (0, t.jsx)(nt.A, {
        heading: e_.intl.string(e_.t["mQKv+v"]),
        scrollTargetId: iq.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: n,
            className: r ? iY.N : iY.w,
            autoFocus: l === iq.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var i$ = l(123292),
    iZ = l(667242),
    iJ = l(655214);
function iQ(e) {
    let { icon: n, message: l, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: iZ.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iJ.oR, iZ.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: iZ.Kk, children: n }),
                    (0, t.jsx)(eF.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: iZ.hP,
                            children: (0, t.jsx)(i$.Q, {
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
var i0 = l(346055),
    i1 = l(289873),
    i2 = l(615019);
function i9(e) {
    let { showScrim: n, showLoadingSpinner: l, className: r, children: s } = e;
    i.useEffect(() => {
        l && t5.O.announce(e_.intl.string(e_.t["QR+vBP"]));
    }, [l]);
    let o = i.useRef(null);
    return (
        (0, i0.f)(o, n),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(i2.f, n && i2.z),
                    children: l && (0, t.jsx)(i1.y, { type: i1.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": n || void 0, className: r, children: s }),
            ],
        })
    );
}
var i3 = l(568602),
    i5 = l(625494),
    i7 = l(61881);
function i8(e) {
    let { children: n } = e,
        [l, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([i7.A, ep.A], () => i7.A.hasUnsavedChanges() || ep.A.hasUnsavedChanges());
    i.useEffect(() => {
        c || (u.current = 1.4);
    }, [c]);
    let g = i.useCallback(() => {
        (null != d.current && (clearTimeout(d.current), (d.current = null)), r(!1));
    }, []);
    return (
        i.useEffect(() => {
            function e() {
                (o(u.current),
                    (u.current = Math.min(u.current + 2, 15)),
                    r(!0),
                    null != d.current && clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                        (r(!1), (d.current = null));
                    }, 300)));
            }
            return (
                i5._.subscribe(Q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    i5._.unsubscribe(Q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(i3.b, { isShaking: l, intensity: a, children: n })
    );
}
l(46121);
var i4 = l(639784),
    i6 = l(933832),
    re = l(972213),
    rn = l(97483),
    rl = l(384377);
let rt = {
        [iq.jM.WIDGET_ADDED]: {
            message: e_.intl.string(e_.t.fFP1Uy),
            icon: (0, t.jsx)(i6.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iq.jM.WIDGET_REMOVED]: {
            message: e_.intl.string(e_.t.zzsK7h),
            icon: (0, t.jsx)(i6.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iq.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: e_.intl.string(e_.t["84MExs"]),
            icon: (0, t.jsx)(re.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: rn.Ck.FAILURE,
        },
        [iq.jM.SOMETHING_WENT_WRONG]: {
            message: e_.intl.string(e_.t.F8FvUy),
            icon: (0, t.jsx)(re.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: rn.Ck.FAILURE,
        },
    },
    ri = (e) => {
        let { className: n } = e,
            l = (0, rl.fu)(),
            r = (0, s.bG)([no.Ay], () => no.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (o(!0), c(rt[l]), t5.O.announce(rt[l].message)) : o(!1);
        }, [l]);
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
                    (e, l) =>
                        l &&
                        null !== d &&
                        (0, t.jsx)(iI.animated.div, { className: n, style: e, children: (0, t.jsx)(iQ, { ...d }) }),
                ),
            })
        );
    };
var rr = l(297413),
    ra = l(465829),
    rs = l(826673),
    ro = l(609425),
    rd = l(73392),
    ru = l(576705),
    rc = l(997394);
function rg(e) {
    return null == e || "" === e ? void 0 : e;
}
function rf(e) {
    let n,
        l,
        r,
        o,
        d,
        u,
        c,
        g,
        f,
        m,
        { user: p, displayProfile: h } = e,
        { analyticsLocations: v } = (0, I.Ay)(),
        A = h?.guildId != null,
        b = h?.guildId ?? void 0,
        j = W.Ay.canUsePremiumProfileCustomization(p),
        C = (0, n6.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: y, permissionsLoaded: N } = (0, s.cf)([ru.A, G.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = G.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: ru.A.can(Q.xBc.CHANGE_NICKNAME, e) || ru.A.can(Q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        E = A && !y && N,
        {
            value: P,
            previewValue: k,
            fallbackDisplayName: S,
            onCommit: T,
        } = ((l = null != (n = h?.guildId ?? null)),
        (r = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, s.bG)([em.Ay], () => (null != n ? (em.Ay.getMember(n, p.id)?.nick ?? null) : null))),
        (d = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName)),
        (u = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingNickname)),
        (f = (g = void 0 !== (c = l ? u : d) ? c : l ? o : r) ?? ""),
        (m = l ? (rg(r) ?? p.username) : p.username),
        {
            value: f,
            previewValue: rg(g) ?? m,
            fallbackDisplayName: m,
            onCommit: i.useCallback(
                (e) => {
                    l ? (0, nr.p)({ nickname: e.trim(), guildId: n ?? void 0 }) : (0, nr.p)({ globalName: e.trim() });
                },
                [l, n],
            ),
        }),
        R = (0, s.bG)([ep.A], () => ep.A.getErrors(b ?? null)),
        O = (0, ni.EC)(b ?? null),
        _ = A ? R.nick?.[0] : R.global_name?.[0],
        D = O?.nick?.[0],
        L = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(b).pendingDisplayNameStyles),
        M = (0, ro.A)({ userId: p.id, guildId: b, pendingDisplayNameStyles: L }),
        w = (0, rd.a)({ displayNameStyles: M, compensateForSafari: !1 }),
        F = e_.intl.string(A ? e_.t.mq6Cg9 : e_.t.XuZU7A),
        V = A ? e_.intl.string(e_.t.YcDKr8) : p.username,
        B = i.useRef(null),
        z = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    C &&
                        (0, rs.Dr)(eI.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: eO.i.INDIRECT_ACTION,
                        }),
                    (0, lb.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: B }));
            },
            [v, b, C],
        ),
        H = {
            icon: nJ.V,
            tooltip: e_.intl.string(e_.t.lqKKI2),
            "aria-label": e_.intl.string(e_.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: z,
            buttonRef: B,
        },
        K = E
            ? (0, t.jsx)("span", {
                  className: rc.Cs,
                  children: (0, t.jsx)(n1.LockIcon, { size: "refresh_sm", color: x.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, t.jsx)("div", {
        className: nd.kL,
        children: (0, t.jsx)(eF.E, {
            variant: ra.gU.lg,
            color: "none",
            className: w,
            children: (0, t.jsx)(iB.w, {
                value: P,
                onCommit: T,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, n) => {
                    let { focused: l } = n;
                    return (0, t.jsx)(ra.c$, {
                        user: p,
                        guildId: b,
                        displayName: l ? (rg(e) ?? S) : k,
                        size: "lg",
                        pendingDisplayNameStyles: L,
                        className: a()(rc.dt, { [rc.jW]: l && "" === e }),
                        displayNameTrailing: K,
                    });
                },
                placeholder: V,
                label: F,
                maxLength: Q.zzC,
                textVariant: "inherit",
                trailing: y && j ? H : void 0,
                error: _,
                helperText: E ? e_.intl.string(e_.t.gzjxQi) : D,
                disabled: !y,
            }),
        }),
    });
}
var rm = l(628072);
function rp(e) {
    let n,
        l,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: f,
        } = ((n = u?.guildId ?? null),
        (l = u?.guildId != null),
        (r = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingPronouns)),
        (o = l ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, nr.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        m = u?.guildId != null,
        p = null != g && g.length > 0,
        x = e_.intl.string(m ? e_.t.AXiE0i : e_.t["76Aqhl"]);
    return (0, t.jsx)("div", {
        className: a()(nd.kL, nd.oE, rm.k),
        children: (0, t.jsx)(iB.w, {
            value: c,
            onCommit: f,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            fullWidth: !1,
            paddingBlock: "md",
            paddingInline: "sm",
            size: "sm",
            scrollIntoViewOnFocus: !0,
            preview: p ? (0, t.jsx)(ra.n2, { pronouns: g }) : null,
            label: e_.intl.string(e_.t["rniRE+"]),
            placeholder: x,
            maxLength: Q.VE5,
            spellCheck: !1,
        }),
    });
}
var rx = l(145497),
    rh = l(685073),
    rv = l(318785),
    rA = l(534400),
    rb = l(436921),
    rj = l(743981),
    rI = l(295930),
    rC = l(594615);
let ry = "no-server-tag";
function rN(e) {
    let { buttonRef: n, guildId: l, guildTag: i, guildBadge: r, ...s } = e,
        o = (0, rb.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        d = null == i || null == l;
    return (0, t.jsx)(eQ.D, {
        innerRef: n,
        className: a()(o ? rI.qJ : rI.L5, { [rI.wK]: d }),
        ...s,
        children: (0, t.jsxs)(eF.E, {
            variant: o || d ? "text-xs/normal" : "text-xs/semibold",
            color: d ? "input-placeholder-text-default" : "text-default",
            className: rI.W3,
            tag: "span",
            children: [
                d
                    ? e_.intl.string(e_.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  rA.Z9,
                                  {
                                      src: (0, rh.gC)(l, r, rj.Sl.SIZE_14),
                                      size: rj.Sl.SIZE_14,
                                      className: rI.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rh.gC)(l, r, rj.Sl.SIZE_14) ?? l,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tV.a, { size: "xs", color: "currentColor", className: rI.u4 }),
            ],
        }),
    });
}
function rE() {
    let e = (0, rv.b)(),
        n = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        l = (0, s.cf)([U.default], () => {
            let e = U.default.getCurrentUser();
            return (0, rh.Zo)(e?.primaryGuild);
        }),
        r = l.guildId ?? null,
        a = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingPrimaryGuildId),
        o = void 0 !== a ? a : r,
        d = null != o ? (n.get(o) ?? null) : null,
        u = null == d && o === r,
        c = d?.profile?.tag ?? (u ? (l.tag ?? null) : null),
        g = d?.profile?.badge ?? (u ? l.badge : void 0),
        f = i.useCallback(
            (e) =>
                e.id === ry
                    ? (0, t.jsx)("div", {
                          className: rC.uN,
                          children: (0, t.jsx)(eF.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: rI.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tX.c, { ...e }),
            [],
        ),
        m = i.useMemo(
            () => [
                { id: ry, label: e_.intl.string(e_.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let n = e.profile?.tag;
                    if (null == n) return [];
                    let l = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rx.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(rA.o9, { guildId: e.id, guildTag: n, guildBadge: l }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        p = i.useCallback((e) => {
            (0, nr.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length && null == r
        ? null
        : (0, t.jsx)(tZ, {
              options: m,
              value: o,
              onSelectionChange: p,
              label: e_.intl.string(e_.t.Pdd1nd),
              listboxClassName: rI.yt,
              renderListItem: f,
              children: (e) => {
                  let { buttonRef: n, selectButtonProps: l } = e;
                  return (0, t.jsx)(rN, { buttonRef: n, guildId: o, guildTag: c, guildBadge: g, ...l });
              },
          });
}
var rP = l(956495);
function rk(e) {
    let { displayProfile: n, nickname: l, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(ra.Ay, {
        ...r,
        guildId: n?.guildId ?? void 0,
        displayName: l,
        displayNameSize: "lg",
        pronouns: n?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rS(e) {
    let n = (0, s.bG)([ep.A], () => ep.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(rk, { ...e, displayNameStylesOverride: n });
}
function rT(e) {
    let { user: n, displayProfile: l, trailing: i } = e,
        r = n.isProvisional
            ? null
            : (0, t.jsx)(rr.A, {
                  user: n,
                  forceUsername: !0,
                  className: rP.a1,
                  usernameClass: rP.eb,
                  discriminatorClass: rP.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(rf, { displayProfile: l, user: n }),
            (0, t.jsxs)("div", {
                className: a()(rP.AK, rP.j6),
                children: [r, (0, t.jsx)(ra.Ce, {}), (0, t.jsx)(rp, { displayProfile: l }), (0, t.jsx)(rE, {}), i],
            }),
        ],
    });
}
function rR(e) {
    let { editingMode: n, ...l } = e;
    switch (n) {
        case "read-only":
            return (0, t.jsx)(rk, { ...l });
        case "try-it-out":
            return (0, t.jsx)(rS, { ...l });
        case "edit":
            return (0, t.jsx)(rT, { ...l });
        default:
            return (0, ea.xb)(n);
    }
}
var rO = l(97808),
    r_ = l(980707),
    rD = l(477782),
    rL = l(22231),
    rM = l(601255),
    rw = l(562819),
    rG = l(19575),
    rF = l(339984),
    rV = l(329801),
    rU = l(884362);
let rB = rG.Ay.getEnableHardwareAcceleration() ? rO.Js : rO.eu;
function rz(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function rW(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(r_.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": e_.intl.string(e_.t.YAgq3W),
        children: (0, t.jsx)(rD.rX, { children: l }),
    });
}
function rH(e) {
    let { user: n, guildId: l } = e,
        { avatarProps: r, eventHandlers: o } = (0, eL.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        f = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: n, guildId: l, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != l,
                c = (0, s.bG)([em.Ay], () => (null != l ? em.Ay.getMember(l, n.id) : null)),
                g = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? void 0).pendingAvatar),
                f = u ? c?.avatar : n.avatar,
                m = (0, eg.z5)(g, f),
                p = u && null != n.avatar,
                x = W.Ay.canUsePremiumProfileCustomization(n),
                h = x || null == l,
                v = x || null == l,
                A = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
                b = (0, eg.a4)({ user: n }),
                j = (0, eg.a4)({ user: n, guildId: l ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eg.CP)(l ?? void 0),
                y = void 0 !== C,
                N = null != (0, rM.A)(y ? C : j) && (y ? null != C : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    (r(),
                        rz(() =>
                            (0, ln.XD)({
                                uploadType: rF.HL.AVATAR,
                                analyticsSource: o,
                                guildId: l ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        ));
                }, [r, o, l, a]),
                k = i.useCallback(() => {
                    (r(),
                        rz(() =>
                            (0, rw.L)({
                                analyticsLocations: d,
                                guild: A ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        ));
                }, [r, d, A, a]),
                S = i.useCallback(() => {
                    (r(),
                        (0, ln.rM)(null, f, (e) => (0, nr.p)({ guildId: l ?? void 0, avatar: e })),
                        (0, eg.WU)(p ? "reset" : "remove"));
                }, [r, l, f, p]),
                T = i.useCallback(() => {
                    (r(), (0, nr.p)({ guildId: l ?? void 0, avatarDecoration: null }));
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rD.Dr,
                                { id: "change-avatar", label: e_.intl.string(e_.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rD.Dr,
                                { id: "change-decoration", label: e_.intl.string(e_.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        m &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: e_.intl.string(e_.t.TDjKDm),
                                          action: S,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: e_.intl.string(e_.t.twB3fz),
                                          action: S,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        N &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: e_.intl.string(e_.t["2u5yu0"]),
                                          action: T,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: e_.intl.string(e_.t["9rx5GO"]),
                                          action: T,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, h, v, E, m, N, P, k, S, T]);
        })({ user: n, guildId: l, onClose: f, returnRef: g });
    return 0 === m.length
        ? (0, t.jsx)(eL.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rV.my, rV.vk, rU.kL, { [rU.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rB, { ...r, imageClassName: a()(rV.Lw, rU.HU) }),
                  (0, t.jsx)(la.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: la.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, t.jsx)(rW, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rU.r9,
                              children: (0, t.jsx)(nQ.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rL.PencilIcon,
                                  "aria-label": e_.intl.string(e_.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), u((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rK = l(514905);
function rq(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(r_.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": e_.intl.string(e_.t.FzU73A),
        children: (0, t.jsx)(rD.rX, { children: l }),
    });
}
function rY(e) {
    let { user: n, guildId: l } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: n, guildId: l, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = (0, eg.N2)({ user: n, guildId: l ?? void 0 }),
                c = (0, eg.Xf)({ user: n, guildId: l ?? void 0 }),
                g = (0, eg.Xf)({ user: n, guildId: void 0 }),
                f = W.Ay.canUsePremiumProfileCustomization(n),
                m = null == l,
                p = m || f,
                x = m || f,
                h = null != l,
                {
                    pendingBanner: v,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? void 0)),
                j = (0, s.bG)([q.A], () =>
                    null != l ? q.A.getGuildMemberProfile(n.id, l)?.banner : q.A.getUserProfile(n.id)?.banner,
                ),
                C = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([q.A], () => q.A.getUserProfile(n.id)?.profileEffect != null),
                N = (0, s.bG)([q.A], () => q.A.getUserProfile(n.id)?.profileFrame != null),
                P = (0, eg.Ac)(v, j),
                k = h && C,
                S = h && y,
                T = h && N,
                R = void 0 === A ? null != u : null != A,
                O = void 0 === b ? null != c : null != b,
                _ = (0, eg.lw)({
                    pendingValue: b,
                    userValue: g,
                    guildValue: null != l ? c : void 0,
                    guildId: l ?? void 0,
                }),
                D = (0, E.A)(_?.skuId),
                L = i.useCallback(() => {
                    (r(),
                        (0, ln.XD)({
                            uploadType: rF.HL.BANNER,
                            analyticsSource: o,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, o, l, a]),
                M = i.useCallback(() => {
                    (r(),
                        (0, lV.W)({
                            analyticsLocations: d,
                            guild: null != l ? (G.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, d, l, u, a]),
                w = i.useCallback(() => {
                    (r(), (0, ln.rM)(null, j, (e) => (0, nr.p)({ guildId: l ?? void 0, banner: e })));
                }, [r, l, j]),
                F = i.useCallback(() => {
                    (r(), (0, nr.p)({ guildId: l ?? void 0, profileEffect: null }));
                }, [r, l]),
                V = i.useCallback(() => {
                    (r(),
                        (0, l2.w)({
                            analyticsLocations: d,
                            guild: null != l ? (G.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, d, l, D, a]),
                B = i.useCallback(() => {
                    (r(), (0, nr.p)({ guildId: l ?? void 0, profileFrame: null }));
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                rD.Dr,
                                { id: "change-banner", label: e_.intl.string(e_.t.N0bC3P), action: L },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                rD.Dr,
                                { id: "change-effect", label: e_.intl.string(e_.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rD.Dr,
                                { id: "change-frame", label: e_.intl.string(e_.t["oTSa/q"]), action: V },
                                "change-frame",
                            ),
                        ),
                    f &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: e_.intl.string(e_.t.jHlJNS),
                                          action: w,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: e_.intl.string(e_.t.tT9n7D),
                                          action: w,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: e_.intl.string(e_.t.Lb7lu9),
                                          action: F,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: e_.intl.string(e_.t.zUOlT6),
                                          action: F,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    x &&
                        O &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: e_.intl.string(e_.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rD.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: e_.intl.string(e_.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, x, S, T, P, R, O, L, M, V, w, F, B]);
        })({ user: n, guildId: l, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(ew.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rK.kL, { [rK.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ew.A, { ...e, className: rK.Pr }),
                  (0, t.jsx)(la.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: la.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rq, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rK.r9,
                              children: (0, t.jsx)(nQ.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rL.PencilIcon,
                                  "aria-label": e_.intl.string(e_.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rX = l(415916),
    r$ = l(419341),
    rZ = l(732188),
    rJ = l(913453),
    rQ = l(667049),
    r0 = l(389667),
    r1 = l(116331),
    r2 = l(837531),
    r9 = l(186272),
    r3 = l(447538);
let r5 = (e) => e * (2 - e),
    r7 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function r8(e) {
    let { type: n, anchor: l } = e;
    return "staple" !== n || "bottom" !== l;
}
function r4(e) {
    let { displayProfile: n, pendingBanner: l } = e;
    if ((0, en.Nx)()) return null;
    let i = n?.getPreviewBanner(l, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: r3.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function r6(e) {
    let { displayProfile: n, profileEffectOverride: l, isHovering: r } = e,
        a = void 0 !== l ? l : n?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (lz.add(e), () => lz.delete(e)),
            () => lW,
        );
    return null == a ? null : (0, t.jsx)(y.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function ae(e) {
    var n;
    let l,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: f,
            channelId: m,
            displayProfile: p,
            nickname: x,
            hasEntered: h,
            customStatusPrompt: v,
            onClose: b,
            avatarDecorationOverride: j,
            avatarOverride: I,
            bannerOverride: y,
            accentColorOverride: N,
            profileEffectOverride: E,
            profileFrame: P,
            fadeInProfileFrame: S,
            editingMode: T,
            isLoading: L = !1,
        } = e,
        w = o.id === d.id,
        G = "edit" === T,
        U = i.useRef(null),
        B = i.useRef(null),
        W = i.useRef(null);
    i.useEffect(() => {
        if (w) return () => C.A.setState({ isOpen: !1 });
    }, [w]);
    let { isHoveringOrFocusing: H } = (0, R.A)(U),
        [K, q] = i.useState(),
        Y = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? q("compact-xs") : n <= 380 ? q("compact-sm") : q(void 0);
        }, []);
    (0, A.g)(U, Y, [], { fireOnMount: !0 });
    let X = null != K ? r7[K] : void 0,
        ee = i.useMemo(() => v ?? (0, O.A)(), [v]),
        { relationshipType: en, originApplicationId: eo } = (0, s.cf)([F.A], () => ({
            relationshipType: F.A.getRelationshipType(o.id),
            originApplicationId: F.A.getOriginApplicationId(o.id),
        })),
        ed =
            ((n = o.id),
            (l = (0, $.bG)([J.default], () => J.default.locale)),
            (r = (0, $.bG)([F.A], () => (F.A.getRelationshipType(n) === Q.eA$.FRIEND ? F.A.getSince(n) : null), [n])),
            (0, Z.An)(r, l)),
        eu = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        ec = (0, D.q)({ userId: o.id }),
        eg = (0, _.fi)(o.id),
        { appIdentities: ef, connections: em } = (function (e) {
            let { filteredAppIdentities: n } = (0, er.A)(e),
                l = (0, es.A)(e),
                t = i.useMemo(() => new Set(n?.map((e) => e.application_id) ?? []), [n]),
                r = (0, ei.A)([...t]).filter(ea.Vq);
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
                        l.filter((e) => {
                            let n = et.A.get(e.type);
                            return (
                                !n?.migrationData?.getMigrationExperimentEnabled(
                                    "useVisibleUserProfileConnectionsAndAppIdentities",
                                ) || !t.has(n.migrationData.replacedBy)
                            );
                        }),
                    [l, t],
                ),
            };
        })(o.id),
        ep = (0, el.A)(o.id),
        ev = em.length > 0 || ef.length > 0,
        eA = ep.length > 0,
        eb = G ? rY : ew.A,
        ej = p?.guildId ?? u,
        eI = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: m,
            avatarSize: X?.avatarSize ?? eh.T[ex.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: I,
        },
        eC = i.useCallback(() => {
            (0, eZ.A)({ user: o, guildId: ej, alt: x });
        }, [x, ej, o]);
    return (0, t.jsxs)("main", {
        className: a()(r3.profile, null != K && r3[K]),
        ref: U,
        "aria-busy": L,
        children: [
            (0, t.jsxs)("div", {
                className: r3.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: r3.profileHeaderBannerContainer,
                        children: (0, t.jsx)(eb, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ex.d.MODAL_V2,
                            specOverrides: X,
                            pendingBanner: y,
                            pendingAccentColor: N,
                        }),
                    }),
                    G
                        ? (0, t.jsx)(rH, { ...eI })
                        : (0, t.jsx)(eL.A, {
                              ...eI,
                              onOpenAvatar: "read-only" === T ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === T && null == I ? tT.$T : void 0,
                          }),
                    (0, t.jsx)(eX.A, {
                        user: o,
                        guildId: u,
                        channelId: m,
                        themeType: ex.d.MODAL_V2,
                        hasEntered: h,
                        prompt: w ? ee : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: r3.profileBody,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(rR, {
                                user: o,
                                displayProfile: p,
                                nickname: x,
                                trailing: (0, t.jsx)(eM.A, {
                                    displayProfile: p,
                                    themeType: ex.d.MODAL_V2,
                                    onClose: b,
                                    showPendingBadgeEdits: w,
                                    popoutAnchorRef: h ? B : void 0,
                                    containerRef: W,
                                }),
                                onClose: b,
                                editingMode: T,
                            }),
                            (0, t.jsx)("div", { ref: B }),
                            w && h && (0, t.jsx)(eD, { targetElementRef: W }),
                        ],
                    }),
                    en === Q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eY.A.Overlay, {
                            className: r3.profileOverlay,
                            children: (0, t.jsx)(eB.A, {
                                user: o,
                                applicationId: eo,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: r3.profileBanner,
                            }),
                        }),
                    eg.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eY.A.Overlay,
                            {
                                className: r3.profileOverlay,
                                children: (0, t.jsx)(eB.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: r3.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eY.A.Overlay, {
                            className: r3.profileOverlay,
                            children: (0, t.jsx)(nt.A, {
                                heading: e_.intl.string(e_.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: r3.profileBanner,
                                children: (0, t.jsx)(M.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eq.A, { user: o, className: r3.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eY.A.Overlay, {
                            className: r3.profileOverlay,
                            children: (0, t.jsx)(eK.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: r3.profileButtons,
                        children: (0, t.jsx)(nR, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: en,
                            onClose: b,
                        }),
                    }),
                    w && "try-it-out" !== T && (0, t.jsx)(eG.A, { isPremiumUser: (0, z.ki)(d) }),
                    !eu && (0, t.jsx)(nA, { currentUser: d, displayProfile: p, canEditInPlace: G }),
                    ec.length > 0 &&
                        (0, t.jsx)(nt.A, {
                            heading: e_.intl.string(e_.t["Uv/eTx"]),
                            children: (0, t.jsx)(eU.A, { applicationIds: ec }),
                        }),
                    (0, t.jsx)(nt.A, {
                        heading: e_.intl.string(e_.t.a6XYD9),
                        children: (0, t.jsx)(eW.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iq.In }),
                    }),
                    null != ed &&
                        (0, t.jsx)(nt.A, {
                            heading: e_.intl.string(e_.t.wlTO8v),
                            children: (0, t.jsx)(eV, { friendsSinceDate: ed }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(e$.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: r3.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !eu &&
                        (G || ev) &&
                        (0, t.jsx)(nt.A, {
                            heading: e_.intl.string(e_.t["3fe7U5"]),
                            scrollTargetId: iq.bk.CONNECTIONS,
                            children: (0, t.jsx)(nZ, {
                                applicationIdentities: ef,
                                connections: em,
                                userId: o.id,
                                allowEditing: G,
                                className: r3.profileAppConnections,
                            }),
                        }),
                    !eu &&
                        eA &&
                        (0, t.jsx)(nt.A, {
                            heading: e_.intl.string(e_.t.PHjkRE),
                            scrollTargetId: iq.bk.APPS,
                            children: (0, t.jsx)(e6, {
                                applicationRoleConnections: ep,
                                onClose: b,
                                className: r3.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iX, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(r6, { displayProfile: p, profileEffectOverride: E, isHovering: H }),
            null != P && (0, t.jsx)(k.A, { frame: P, filterLayer: r8, fadeIn: S }),
        ],
    });
}
function an(e) {
    let { user: n, displayProfile: l, pendingThemeColors: i, forceShowPremium: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, ee.A)({ user: n, displayProfile: l, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, eu.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function al(e) {
    let {
            user: n,
            currentUser: l,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: A,
            sessionId: C,
            initialTabSection: y,
            initialScrollTarget: k,
            transitionState: R,
            customStatusPrompt: O,
            openedAt: _,
            onClose: D,
            sourceAnalyticsLocations: M = [],
            themeContainerClassName: F,
        } = e,
        z = n.id === l.id,
        $ = i.useCallback(() => (0, rX.A)(z, D), [z, D]),
        {
            guildId: Z,
            pendingGuildId: J,
            isFetching: Q,
            handleSelectUserProfile: ee,
            handleRetry: en,
            hasError: el,
        } = (function (e) {
            let { userId: n, initialGuildId: l } = e,
                [t, r] = i.useState(l),
                [a, o] = i.useState(l),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                f = (0, s.bG)([q.A], () => q.A.getUserProfile(n)?.fetchError?.status ?? null, [n]),
                m = i.useCallback(() => {
                    (u("retrying"), g((e) => e + 1));
                }, []),
                p = i.useCallback((e) => {
                    (u("loading"), r(e ?? void 0));
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ec.A)(n, void 0, {
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
                }, [t, n, c]),
                {
                    guildId: a,
                    pendingGuildId: t,
                    isFetching: "idle" !== d,
                    hasError: "retrying" === d || (null != f && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== f && 429 !== f ? m : void 0,
                }
            );
        })({ userId: n.id, initialGuildId: r }),
        et = i.useMemo(() => (null != Z ? { [Z]: [n.id] } : {}), [Z, n.id]);
    (0, b.Eq)(et, "UserProfileModalV2");
    let ei = (0, Y.X)("UserProfileModalV2"),
        er = (0, n0.YW)(),
        ea = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        es = (0, eo.A)(n.id) && ei,
        eu = (0, ed.W)(n.id),
        eh = el && !eu,
        eI = es && !ea && !el && !er,
        eC = er ? "try-it-out" : eI ? "edit" : "read-only",
        {
            pendingThemeColors: ey,
            avatarDecorationOverride: eN,
            avatarOverride: eE,
            bannerOverride: eP,
            accentColorOverride: ek,
            profileEffectOverride: eS,
            profileFrameOverride: eT,
        } = (function (e) {
            let { userId: n, guildId: l, editingMode: t } = e;
            return (0, s.cf)(
                [ep.A, U.default, em.Ay, q.A],
                () => {
                    if ("read-only" === t) return eA;
                    let e = U.default.getUser(n);
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
                                : ep.A.getPendingChanges(l),
                        a = null != l ? em.Ay.getMember(l, n) : null,
                        s = q.A.getUserProfile(n),
                        o = null != l ? q.A.getGuildMemberProfile(n, l) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, eg.us)({
                            userValue: e.avatarDecoration,
                            guildValue: a?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: l,
                        }),
                        avatarOverride: (0, ef.V7)({ userId: n, image: r.pendingAvatar, size: ev }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, eg.us)({
                            userValue: s?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: l,
                        }),
                        profileFrameOverride: (0, eg.us)({
                            userValue: s?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: l,
                        }),
                    };
                },
                [n, l, t],
            );
        })({ userId: n.id, guildId: Z, editingMode: eC }),
        {
            isExpanded: eR,
            isAnimating: eO,
            transition: eD,
            handleExpand: eL,
            handleCollapse: eM,
            refs: { expandIconButtonRef: ew, expandTabButtonRef: eG, collapseButtonRef: eF },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [l, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: r5 },
                    onRest: () => t(!1),
                }),
                a = (0, v.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                d = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    ((c.current = "collapse"), t(!0), n(!0));
                }, []),
                f = i.useCallback(() => {
                    ((c.current = "expand"), t(!0), n(!1));
                }, []);
            return (
                i.useEffect(() => {
                    if (!l) {
                        if ("collapse" === c.current && e) ((c.current = null), d.current?.focus());
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, l, a]),
                {
                    isExpanded: e,
                    isAnimating: l,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: f,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eV = es && !eR,
        eU = es && (!eR || eO),
        { defaultWishlistId: eB } = (0, s.cf)([q.A], () => ({ defaultWishlistId: q.A.getFirstWishlistId(n.id) }));
    (0, w.fw)({ wishlistId: eB, userId: n.id });
    let eW = (0, ej.fC)(),
        eK = eh && (!es || !Q),
        eq = es && el,
        eX = J !== Z || eq || null != eW.interactionType,
        e$ = (function (e) {
            let { user: n, currentUser: l } = e,
                { mutualFriendsCount: t, mutualGuilds: i } = (0, rJ.A)(n),
                r = i?.length,
                a = (0, rZ.A)(n),
                s = (0, rQ.A)(n.id),
                o = (0, r$.A)(n),
                { hasNewWishlistItems: d } = (0, r1.A)(n),
                u = [],
                c = n.id === l?.id,
                g = (0, r0.A)(n.id),
                f = s.length > 0;
            return (
                (g || f) && u.push({ text: e_.intl.string(e_.t.laViwx), section: iq.RP.WIDGETS }),
                u.push({ text: e_.intl.string(e_.t.chq59f), section: iq.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    u.push({ text: e_.intl.string(e_.t["7lZ31J"]), section: iq.RP.WISHLIST, showNewContentDot: d }),
                n.id !== l?.id &&
                    a &&
                    (u.push({ text: (0, r2.A)(t), section: iq.RP.MUTUAL_FRIENDS }),
                    u.push({ text: (0, r9.A)(r), section: iq.RP.MUTUAL_GUILDS })),
                u
            );
        })({ user: n, currentUser: l }),
        { analyticsLocations: eZ } = (0, I.Ay)([...M, j.A.USER_PROFILE_MODAL_V2]),
        eJ = (0, H.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: C,
            guildId: Z,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        eQ = i.useCallback(() => {
            ((0, K.Wn)({ analyticsLocations: eZ, ...eJ, action: iq.pt.SHOW_STYLES_PANEL }), eL());
        }, [eZ, eJ, eL]),
        e0 = i.useCallback(() => {
            ((0, K.Wn)({ analyticsLocations: eZ, ...eJ, action: iq.pt.HIDE_STYLES_PANEL }), eM());
        }, [eZ, eJ, eM]),
        e1 = (0, X.Ay)(n.id, Z);
    (0, L.A)(eZ, e1, iq.R7.MODAL_V2);
    let e2 = void 0 !== eT ? eT?.skuId : e1?.profileFrame?.skuId,
        e9 = (0, E.A)(e2),
        e3 = (0, N.A)(e2),
        { profileFrameStyle: e5, profileFrameClassName: e7 } = (0, S.A)(e9);
    (0, P.A)({ skuId: e1?.profileFrame?.skuId, openedAt: _, context: eJ, analyticsLocations: eZ });
    let e8 = (0, s.bG)([U.default], () => W.Ay.canUsePremiumProfileCustomization(U.default.getCurrentUser())),
        e4 = er || (z && null != e1 && e8),
        e6 = B.Ay.useName(e1?.guildId, c, n),
        ne = (0, T.GV)(),
        nn = (0, s.bG)([G.A], () => (null != Z ? G.A.getGuild(Z) : null)),
        nl = z
            ? null != nn
                ? e_.intl.formatToPlainString(e_.t.M7OhOF, { guildName: nn.name })
                : e_.intl.string(e_.t.egQPgM)
            : e_.intl.format(e_.t.KRe1Fk, { name: e6 });
    return (0, t.jsx)(I.f5, {
        value: eZ,
        children: (0, t.jsx)(H.of, {
            value: eJ,
            openedAt: _,
            fetchStartedAt: e1?.fetchStartedAt,
            fetchEndedAt: e1?.fetchEndedAt,
            isLoaded: e1?.isLoaded,
            children: (0, t.jsx)(ej.Hl, {
                value: eW,
                children: (0, t.jsx)(eb.N, {
                    value: k,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tT.zr, { [tT.QF]: e1?.private === !0 }),
                        transitionState: R,
                        "aria-labelledby": ne,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(i8, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(r3.layoutContainer, e7, {
                                        [r3.editingPanelEnabled]: es,
                                        [r3.editingPanelExpanded]: es && eR,
                                        [r3.isAnimating]: eO,
                                    }),
                                    style: e5,
                                    children: [
                                        (0, t.jsxs)(an, {
                                            user: n,
                                            displayProfile: e1,
                                            pendingThemeColors: ey,
                                            forceShowPremium: e4,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tT.Oo,
                                                    children: [
                                                        (0, t.jsx)(nO.A, { onClose: $ }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: ne, children: nl }),
                                                        }),
                                                        eU &&
                                                            (0, t.jsx)(iG, {
                                                                buttonRef: ew,
                                                                onClick: eQ,
                                                                className: r3.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eV &&
                                                    (0, t.jsx)("div", {
                                                        className: r3.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iw, {
                                                            innerRef: eG,
                                                            onClick: eQ,
                                                            className: r3.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                es &&
                                                    eD((e, n) =>
                                                        n
                                                            ? (0, t.jsx)(iF, {
                                                                  className: a()(r3.editingPanel, {
                                                                      [r3.isExpanded]: eR,
                                                                  }),
                                                                  selectedGuildId: J,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: ee,
                                                                  onClose: e0,
                                                                  collapseButtonRef: eF,
                                                                  isLoading: Q,
                                                                  isEditingDisabled: el,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eY.A, {
                                                    className: a()(F, tT.A7, r3.profileContentOuter),
                                                    innerClassName: r3.profileContentInner,
                                                    user: n,
                                                    displayProfile: e1,
                                                    themeType: ex.d.MODAL_V2,
                                                    pendingThemeColors: ey,
                                                    isPrivate: e1?.private === !0,
                                                    forceShowPremium: e4,
                                                    children: [
                                                        (0, t.jsx)(r4, { displayProfile: e1, pendingBanner: eP }),
                                                        e1?.private === !0 && (0, t.jsx)(eH.A, {}),
                                                        !eh && (0, t.jsx)(ri, { className: r3.noticeContainer }),
                                                        eK &&
                                                            (0, t.jsx)("div", {
                                                                className: r3.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iQ, {
                                                                    icon: (0, t.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: e_.intl.string(e_.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != en
                                                                            ? e_.intl.string(e_.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: en,
                                                                    actionDisabled: !es && Q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: r3.profileCardToastContainer,
                                                            children: (0, t.jsx)(ez.A, { userId: n.id, onClose: $ }),
                                                        }),
                                                        (0, t.jsxs)(i9, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Q,
                                                            className: r3.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(ae, {
                                                                    user: n,
                                                                    currentUser: l,
                                                                    guildId: Z,
                                                                    channelId: c,
                                                                    displayProfile: e1,
                                                                    nickname: e6,
                                                                    originGuildId: d,
                                                                    hasEntered: R === h.ip.ENTERED,
                                                                    customStatusPrompt: O,
                                                                    onClose: $,
                                                                    avatarDecorationOverride: eN,
                                                                    avatarOverride: eE,
                                                                    bannerOverride: eP,
                                                                    accentColorOverride: ek,
                                                                    profileEffectOverride: eS,
                                                                    profileFrame: e9,
                                                                    fadeInProfileFrame: e3,
                                                                    editingMode: eC,
                                                                    isLoading: Q,
                                                                }),
                                                                (0, t.jsx)(i4.A, {
                                                                    user: n,
                                                                    currentUser: l,
                                                                    displayProfile: e1,
                                                                    guildId: Z,
                                                                    channelId: c,
                                                                    items: e$,
                                                                    initialSection: y,
                                                                    onClose: $,
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
                            (0, t.jsx)(iV.A, { userId: n.id, guildId: Z, className: r3.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function at(e) {
    return (0, t.jsx)(n0.tM, { children: (0, t.jsx)(al, { ...e }) });
}
