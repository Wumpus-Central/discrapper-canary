l.d(n, { A: () => ag });
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
    m = l(140735),
    f = l(707554),
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
    T = l(875741),
    S = l(915089),
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
    B = l(287809),
    U = l(562153),
    z = l(474090),
    W = l(158045),
    H = l(183555),
    q = l(47675),
    K = l(321191),
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
    em = l(101058),
    ef = l(696451),
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
    eI = l(947984),
    eC = l(554146),
    ey = l(43105),
    eN = l(992526),
    eE = l(643056),
    eP = l(327791),
    ek = l(262),
    eT = l(982240),
    eS = l(131607),
    eR = l(49999),
    eO = l(375708);
function e_(e) {
    let n,
        l,
        i,
        r,
        { targetElementRef: a } = e,
        o = (0, eN.J)({ location: "BadgeCustomizationProfileCoachmark" }),
        d = (0, eE.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        u = (0, eP.A)(),
        c =
            ((n = (0, s.bG)([B.default], () => B.default.getCurrentUser()?.id)),
            (l = (0, s.bG)(
                [eT.Ay],
                () => (null != n && eT.Ay.hasCatalogFor(n) ? eT.Ay.getBadges(n).some((e) => e.owned) : null),
                [n],
            )),
            (i = (0, X.Ay)(n)),
            (r = (0, ek.A)(i)),
            l ?? r.length > 0),
        [g, m] = (0, eS.kn)(c && o && d ? [eC.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return g !== eC.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, t.jsx)(ey.A, {
              targetElementRef: a,
              position: "right",
              caretConfig: { align: "start" },
              gradientColor: "blue",
              graphic: { type: "rive", rive: eI.U, props: { dataBinding: { on: !0 } } },
              title: eO.intl.string(eO.t["9JoKQb"]),
              body: eO.intl.string(u ? eO.t.p82vky : eO.t.IDh31t),
              onRequestClose: () => m(eR.i.USER_DISMISS),
              actions: [
                  {
                      text: eO.intl.string(eO.t["4P5I8V"]),
                      onClick: function () {
                          (m(eR.i.TAKE_ACTION), C.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eD = l(718019),
    eL = l(365607),
    eM = l(915614),
    ew = l(744753),
    eG = l(834730);
function eF(e) {
    let { friendsSinceDate: n } = e;
    return (0, t.jsx)(eG.E, { variant: "text-sm/normal", children: n });
}
var eV = l(361311),
    eB = l(931481),
    eU = l(439053),
    ez = l(743987),
    eW = l(312381),
    eH = l(501193),
    eq = l(383448),
    eK = l(946356),
    eY = l(983495),
    eX = l(503026),
    e$ = l(305385),
    eZ = l(109112),
    eJ = l(939249),
    eQ = l(730134),
    e0 = l(169869),
    e1 = l(837057),
    e2 = l(310419),
    e3 = l(889227),
    e9 = l(967198),
    e5 = l(488995),
    e8 = l(576849);
function e7(e) {
    let { applicationRoleConnection: n, locale: l, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, e0.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: e8.k_,
                children:
                    null != n.application.bot
                        ? (0, t.jsx)(eQ.A, { user: new e3.A(n.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(eZ._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: e8.Hd,
                children: [
                    (0, t.jsxs)(eJ.D, {
                        className: e8.OB,
                        onClick: function () {
                            (i?.(),
                                (0, e1.transitionToGlobalDiscovery)({
                                    tab: e5.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: e2.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != n.platform_name
                                ? (0, t.jsx)(eG.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, t.jsx)(eG.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eG.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: e8.nk,
                                children: eO.intl.format(eO.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: e8.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function e4(e) {
    let { applicationRoleConnections: n, className: l, onClose: i } = e,
        { trackUserProfileAction: r } = (0, H.NJ)(),
        o = (0, s.bG)([J.default], () => J.default.locale),
        d = (0, s.bG)([e9.A], () => e9.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(e8.kL, l),
              children: n.map((e, n) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: e8.FI,
                          children: (0, t.jsx)(e7, {
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
var e6 = l(403581),
    ne = l(240248),
    nn = l(308244),
    nl = l(83013),
    nt = l(81400),
    ni = l(84540),
    nr = l(290386),
    na = l(621466);
l(321073);
var ns = l(775602),
    no = l(404760);
function nd(e) {
    let { id: n, message: l, type: i } = e,
        r = "error" === i,
        a = r ? g.E : p.WarningIcon;
    return (0, t.jsxs)(eG.E, {
        id: n,
        role: r ? "alert" : void 0,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: no.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? no.ik : no.QW }), l],
    });
}
function nu(e) {
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
            className: m,
            wrapperRef: f,
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
        ((0, na.vq)(e, HTMLElement) && e.blur(), u());
    }
    let T = (0, t.jsxs)("div", {
        ref: h,
        className: a()(no.LL, { [no.JD]: j, [no.xe]: I }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            b
                ? (0, t.jsx)(eG.E, {
                      id: v,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: no.qf,
                      children: r,
                  })
                : l,
            (0, t.jsx)(eJ.D, {
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
        ref: f,
        className: a()(no.kL, m),
        onBlur: p,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            {
                children: n
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: no.VH, children: T }),
                              N && (0, t.jsx)(nd, { id: A, message: y, type: C }),
                          ],
                      }),
            },
            n ? "editing" : "preview",
        ),
    });
}
var nc = l(786826);
function ng(e) {
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
            onInputFocus: m,
            onInputKeyDown: f,
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
            (null != A && n.length > A ? eO.intl.formatToPlainString(eO.t.ICT5S6, { maxLength: A }) : void 0) ?? j);
    return (0, t.jsx)(nu, {
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
        input: (0, t.jsx)(nc.f, {
            editorRef: g,
            label: v,
            hideLabel: !0,
            value: l ? r : i,
            onChange: a,
            onFocus: m,
            onKeyDown: f,
            maxLength: A,
            error: y,
            helperText: I,
            placeholder: x,
            emojiPickerIntention: b,
        }),
    });
}
let nf = [
    { value: "HAIKU", label: () => eO.intl.string(eO.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eO.intl.string(eO.t.CXkR1L) },
    { value: "TELL_US", label: () => eO.intl.string(eO.t.eutr4P) },
    { value: "FUN_FACT", label: () => eO.intl.string(eO.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eO.intl.string(eO.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eO.intl.string(eO.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eO.intl.string(eO.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eO.intl.string(eO.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eO.intl.string(eO.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eO.intl.string(eO.t.u7WCGI) },
];
var np = l(307731);
function nx(e) {
    let n,
        l,
        r,
        a,
        o,
        { displayProfile: d, className: u } = e,
        c = (0, s.bG)([B.default], () => B.default.getCurrentUser()),
        g = d?.guildId != null,
        m = d?.guildId ?? null,
        f = W.Ay.canUsePremiumProfileCustomization(c),
        p = (0, nr.U)({ location: "user_profile_modal_edit" }),
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
                    (0, ni.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
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
                        c = (0, s.bG)([ns.Ay], () => ns.Ay.useReducedMotion),
                        g = i.useRef(null),
                        m = i.useRef(null),
                        f = i.useRef(null),
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
                                    (m.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                                    e || f.current?.focus({ preventScroll: !0 })));
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
                            ((p.current = !0), b(), f.current?.blur());
                        }, [b]),
                        y = i.useCallback(() => {
                            ((p.current = !0), j(), f.current?.blur());
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
                        wrapperRef: m,
                        inputRef: f,
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
                            let l = ng(n),
                                t = l?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, l.current),
                    [l],
                );
            i.useEffect(() => {
                if (!n) return;
                let e = l.current?.ownerDocument ?? document;
                function i(e) {
                    (0, na.vq)(e.target) && !a(e.target) && t();
                }
                return (e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i));
            }, [n, l, a, t]);
            let o = i.useCallback(
                (e) => {
                    if (!n) return;
                    let i = e.relatedTarget;
                    !(0, na.vq)(i) || a(i) || (null == ng(l.current) && t());
                },
                [n, a, t, l],
            );
            return { isEditing: n, wrapperRef: l, handleCommit: t, ...r, onBlur: o };
        })({ value: x, onCommit: v }),
        b = !(0, ne.uJ)(h),
        j = (0, s.bG)([ep.A], () => ep.A.getErrors(m)),
        I = (0, nt.EC)(m),
        C = j.bio?.[0],
        y = I?.bio?.[0],
        N = i.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * nf.length)), nf[e]);
        }, []),
        E = g ? eO.intl.string(eO.t.yPJ9xr) : N.label();
    return !g || f
        ? (0, t.jsx)(nm, {
              ...A,
              className: u,
              preview: b ? (0, t.jsx)(nn.A, { userBio: h, setLineClamp: !1 }) : null,
              placeholder: E,
              editButtonAriaLabel: eO.intl.string(eO.t.lO3n7a),
              label: eO.intl.string(eO.t["YWo+Zd"]),
              emojiPickerIntention: np.EmojiIntention.PROFILE,
              maxLength: p,
              error: C,
              warning: y,
          })
        : b
          ? (0, t.jsx)(nn.A, { userBio: h, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var nh = l(430626);
function nv(e) {
    let { currentUser: n, displayProfile: l, canEditInPlace: i } = e,
        r = l?.bio,
        a = !(0, ne.uJ)(r),
        s = l?.guildId != null,
        o = s && W.Ay.canUsePremiumProfileCustomization(n),
        d = o ? eO.intl.string(eO.t.jVai8N) : eO.intl.string(eO.t.ZzAR2Y),
        u = (0, W.TW)(n) ? eO.intl.string(eO.t["5AFxuK"]) : eO.intl.string(eO.t.N6ixy8),
        c = i && o ? { icon: e6.t, tooltip: u } : void 0;
    return (i || a) && (!i || !s || a || o)
        ? (0, t.jsx)(nl.A, {
              heading: d,
              hideHeading: !i,
              headingIcon: c,
              children: i
                  ? (0, t.jsx)(nx, { displayProfile: l, className: nh.u })
                  : (0, t.jsx)(nn.A, { userBio: r, setLineClamp: !1 }),
          })
        : null;
}
var nA = l(700058),
    nb = l(722868),
    nj = l(822775),
    nI = l(982985),
    nC = l(133385),
    ny = l(34188),
    nN = l(839534),
    nE = l(993401);
function nP(e) {
    let { analyticsLocations: n, newestAnalyticsLocation: l } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, nN.Cz)({ analyticsLocations: n, analyticsSource: l });
        }, [n, l]);
    return (0, t.jsx)(nE.q3, {
        action: "VISIT_SHOP",
        icon: ny.U,
        tooltipText: eO.intl.string(eO.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var nk = l(573355),
    nT = l(102951);
function nS(e) {
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
        g = (0, nb.A)({ user: n, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, nT.J)({ userId: n.id }),
        x = m.length > 0 || f || p;
    return o === Q.eA$.BLOCKED
        ? null
        : n.id === l.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nI.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(nP, {}),
                        (0, t.jsx)(nC.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nj.A, { user: n, guildId: i, onClose: d }),
                        (0, t.jsx)(nP, {}),
                        (0, t.jsx)(nC.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(nI.e, { userId: n.id, onClose: nA.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(nC.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nI.e, { userId: n.id, onClose: nA.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(nC.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === Q.eA$.FRIEND || o === Q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(nI.e, { userId: n.id, onClose: nA.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(nk.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(nC.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Q.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(nI.e, { userId: n.id, onClose: nA.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(nk.ES, {
                                user: n,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(nC.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(nk.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(nI.l, { userId: n.id, onClose: nA.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(nC.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var nR = l(463156),
    nO = l(866665),
    n_ = l(28863),
    nD = l(509434),
    nL = l(307301),
    nM = l(228366),
    nw = l(95561),
    nG = l(874490),
    nF = l(968309),
    nV = l(174459),
    nB = l(486020),
    nU = l(123917),
    nz = l(783419);
let nW = "User Profile Modal V2";
function nH(e) {
    let n = et.A.get(e);
    ((0, nF.A)({ platformType: n.type, location: nW }),
        nV.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: nW,
            current_step: "desktop oauth",
            platform_type: n.type,
        }));
}
function nq() {
    nM.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: nH, stackingBehavior: "stack" });
}
function nK(e) {
    let { account: n, locale: l, userId: i } = e,
        r = n.metadata ?? {},
        a = (0, Z.An)(r[nz.pK.CREATED_AT], l),
        s = et.A.get((0, nG.ML)(n.type));
    return (0, t.jsx)(nX, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, t.jsx)(nO.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, t.jsx)(eG.E, { variant: "text-sm/normal", className: e8.GW, children: n.name }),
                  })
                : (0, t.jsx)(n_.Anchor, {
                      href: e,
                      className: e8.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${eO.intl.string(eO.t.q5jLJB)}`
                              : `${n.name}, ${eO.intl.string(eO.t.q5jLJB)}`,
                      onClick: (l) => {
                          ((0, nw.zV)(Q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, nU.h)({ href: e, trusted: s?.type !== Q.fg2.DOMAIN }, l));
                      },
                      children: (0, t.jsxs)("div", {
                          className: e8.vi,
                          children: [
                              (0, t.jsx)(nO.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, t.jsx)(eG.E, {
                                      variant: "text-sm/normal",
                                      className: e8.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, t.jsx)(nD.I, { size: "xs", color: "currentColor", className: e8.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return n.type === Q.fg2.REDDIT
                ? (0, e0.xE)(r)
                : n.type === Q.fg2.STEAM
                  ? (0, e0.dy)(r)
                  : n.type === Q.fg2.BLUESKY || n.type === Q.fg2.MASTODON || n.type === Q.fg2.TWITTER
                    ? (0, e0.ED)(r)
                    : n.type === Q.fg2.PAYPAL
                      ? (0, e0.gZ)(r)
                      : n.type === Q.fg2.EBAY
                        ? (0, e0.ub)(r)
                        : n.type === Q.fg2.TIKTOK
                          ? (0, e0.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function nY(e) {
    let { identityWithApplication: n } = e,
        { identity: l, application: i } = n;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let r = nB.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(nX, {
        renderAccountName: function () {
            return (0, t.jsx)(nO.m, {
                overflowOnly: !0,
                text: l.profile.username,
                children: (0, t.jsx)(eG.E, {
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
function nX(e) {
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
            (0, t.jsx)(nO.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: e8.k_,
                    children: (0, t.jsx)("img", {
                        alt: eO.intl.formatToPlainString(eO.t.rtm15P, { name: i }),
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
                                (0, t.jsx)(eG.E, {
                                    variant: "text-xs/normal",
                                    children: eO.intl.format(eO.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: e8.yu, children: l() }),
                ],
            }),
        ],
    });
}
function n$(e) {
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
                        n.map((e) => (0, t.jsx)(nK, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        l?.map((e) => (0, t.jsx)(nY, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eJ.D, {
                    className: e8.qG,
                    onClick: nq,
                    children: [
                        (0, t.jsx)(nL.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eG.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eO.intl.string(eO.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var nZ = l(193885),
    nJ = l(408278),
    nQ = l(993165),
    n0 = l(194261),
    n1 = l(315629),
    n2 = l(789645),
    n3 = l(297264),
    n9 = l(812993),
    n5 = l(821609),
    n8 = l(39623),
    n7 = l(890377),
    n4 = l(517461),
    n6 = l(248778),
    le = l(465794),
    ln = l(252732),
    ll = l(945810);
let lt = (0, ll.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    li = (0, ll.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1, clientThemeAdaptedColorsEnabled: !1 },
        variations: {
            1: { enabled: !0, showPresetName: !0, clientThemeAdaptedColorsEnabled: !1 },
            2: { enabled: !0, showPresetName: !1, clientThemeAdaptedColorsEnabled: !0 },
        },
    });
function lr(e) {
    let { location: n } = e;
    return li.useConfig({ location: n });
}
var la = l(487233),
    ls = l(120386),
    lo = l(317097),
    ld = l(602853),
    lu = l(922016),
    lc = l(508274),
    lg = l(654107),
    lm = l(930349);
function lf(e) {
    let { user: n, disabled: l = !1 } = e,
        r = i.useRef(null),
        a = (0, ld.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lg.rh)(n.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ep.A, K.A], () => ({
            pendingAccentColor: ep.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: K.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lo.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, ni.p)({ accentColor: e }), []);
    return (0, t.jsx)(lu.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lc.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lm.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: l,
                accessibleLabel: eO.intl.string(eO.t["/X3fkf"]),
                accessibleValue: (0, lo.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lo.Hl)(c) } }),
            }),
    });
}
var lp = l(450373),
    lx = l(317139);
function lh(e, n) {
    let l = null === e,
        t = void 0 === e;
    return l || (t && null == n) ? eO.intl.string(eO.t["3Xph0/"]) : t ? eO.intl.string(eO.t.keN7ib) : e.description;
}
function lv(e) {
    let { backgroundColor: n } = e;
    return (0, t.jsx)("div", { className: lx.o, style: { backgroundColor: n } });
}
function lA(e) {
    let { src: n } = e;
    return (0, t.jsx)("img", { src: n, alt: "", className: lx._ });
}
function lb(e) {
    let { displayProfile: n, bannerChange: l, shouldAnimate: i } = e,
        r = (0, ld.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = n?.primaryColor ?? (0, lo.LX)(r),
        { hex: s } = (0, lp.A)(a),
        o = n?.getPreviewBanner(l, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(lA, { src: o }) : (0, t.jsx)(lv, { backgroundColor: s });
}
function lj(e) {
    let { displayProfile: n, bannerChange: l, ...i } = e;
    return (0, t.jsx)(lm.A, {
        ...i,
        accessibleLabel: eO.intl.string(eO.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(lb, { displayProfile: n, bannerChange: l, shouldAnimate: e }),
    });
}
var lI = l(569059);
function lC(e) {
    let { userId: n, guildId: l, disabled: r, errorMessageId: a } = e,
        s = i.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, n) {
            let l = (0, X.Ay)(e, n),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, $.cf)(
                    [ep.A, B.default, K.A],
                    () => ({
                        pendingBanner: ep.A.getPendingChanges(n ?? void 0).pendingBanner,
                        mainProfileBanner: B.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != n ? K.A.getGuildMemberProfile(e, n)?.banner : K.A.getUserProfile(e)?.banner,
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
                accessibleValue: lh(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(n, l),
        f = (0, eg.Ac)(d, g)
            ? {
                  onClick: () => (0, ln.rM)(null, g, (e) => (0, ni.p)({ guildId: l ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eO.intl.string(m ? eO.t.jHlJNS : eO.t.tT9n7D),
              }
            : void 0,
        p = (0, lI.P)({ guildId: l, returnRef: s });
    return (0, t.jsx)(lj, {
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
var ly = l(259065),
    lN = l(913563),
    lE = l(898985),
    lP = l(922301),
    lk = l(660184),
    lT = l(701974),
    lS = l(523312);
let lR = "heading-xl/semibold";
function lO(e) {
    if (null == e) return eO.intl.string(eO.t["3Xph0/"]);
    let n = eO.intl.string((0, lN.A)(e.fontId)),
        l = eO.intl.string(lE.J[e.effectId] ?? lT.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eO.intl.formatToPlainString(eO.t.A2XnI4, { fontName: n, effectName: l, colors: t });
}
function l_(e) {
    let { displayName: n, displayNameStyles: l, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: a()(lS.MC, { [lS.Xn]: null != l }),
        children:
            null != l
                ? (0, t.jsx)(eG.E, {
                      variant: lR,
                      children: (0, t.jsx)(lk.A, {
                          userName: n,
                          displayNameStyles: l,
                          effectDisplayType: i ? lP.G.ANIMATED : lP.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eG.E, { variant: lR, className: lS.kr, children: n }),
    });
}
function lD(e) {
    let { displayName: n, displayNameStyles: l, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(lm.A, {
        ...r,
        accessibleLabel: eO.intl.string(eO.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(l_, { displayNameStyles: l, displayName: n, shouldAnimate: i || e }),
    });
}
function lL(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != l,
        c = (0, s.bG)([ef.Ay], () => (null != l ? (ef.Ay.getMember(l, n.id)?.nick ?? null) : null)),
        g = (0, s.bG)([B.default], () => B.default.getCurrentUser()?.globalName ?? null),
        m = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? null).pendingNickname),
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
        y = (0, eg.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: l ?? void 0 }) ?? n.username,
        N = A ? null != h : null != v,
        E =
            null != C && N
                ? {
                      onClick: () => (0, ni.p)({ guildId: l ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eO.intl.string(j ? eO.t.en3ogK : eO.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            (o?.(), (0, ly.L)({ analyticsLocations: d, guildId: l ?? void 0, stackingBehavior: "stack" }));
        }, [d, l, o]);
    return (0, t.jsx)(lD, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: lO(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: y,
        displayNameStyles: C,
        disabled: r,
    });
}
var lM = l(450232),
    lw = l(89851);
function lG(e) {
    let { heading: n, children: l, disabled: i = !1, showNitroIcon: r = !1, badge: s } = e;
    return (0, t.jsxs)("div", {
        className: lw.Os,
        children: [
            (0, t.jsxs)("div", {
                className: a()(lw.Pf, { [lw.r9]: i }),
                children: [
                    (0, t.jsx)(n3.D, {
                        className: lw.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: n,
                    }),
                    r && (0, t.jsx)(lM.A, { className: lw.IX, size: "xs", color: "inherit", disabled: i }),
                    null != s && (0, t.jsx)("span", { className: lw.ot, children: s }),
                ],
            }),
            l,
        ],
    });
}
function lF(e) {
    let { id: n, message: l } = e;
    return null == l
        ? null
        : (0, t.jsxs)("div", {
              className: lw.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eG.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: n, children: l }),
              ],
          });
}
var lV = l(374654),
    lB = l(366010),
    lU = l(736653),
    lz = l(674658),
    lW = l(617061),
    lH = l(203632),
    lq = l(536572);
let lK = new Set(),
    lY = 0;
var lX = l(993408),
    l$ = l(841702),
    lZ = l(515718),
    lJ = l(195292);
function lQ(e) {
    "" !== e.thumbnailPreviewSrc && (0, lZ.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var l0 = l(599752),
    l1 = l(249360);
let l2 =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    l3 =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function l9(e) {
    let { effect: n, shouldAnimate: l, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, lU.Ay)(),
        u = (0, lB.M)(d) ? l2 : l3,
        c = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, l$.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, lX.wo)(r, t), [r, t]),
                s = (0, lJ.A)({ enabled: n, isInteracting: l, items: a, preload: lQ });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: l }),
        g = null != c,
        m = g ? c : n;
    return (
        i.useEffect(() => {
            l && ((lY += 1), lK.forEach((e) => e()));
        }, [l]),
        (0, t.jsxs)("div", {
            className: l0.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: l0.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(l0.yY, { [l1.O]: g }),
                        children: (0, t.jsx)(y.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: lH.HL.FromStart,
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
function l5(e) {
    let { user: n, guildId: l, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != l,
        u = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
        c = (0, eg.N2)({ user: n }),
        g = (0, eg.N2)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileEffect: m } = (0, eg.nZ)(l ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        h = (0, eg.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: l ?? void 0 }),
        { product: v } = (0, lz.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, ni.p)({ guildId: l ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eO.intl.string(x ? eO.t["SQy/Po"] : eO.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, lW.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(lm.A, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eO.intl.string(eO.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? eO.intl.string(eO.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : eO.intl.string(t ? eO.t["1M4m8w"] : eO.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, lq.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(l9, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var l8 = l(515727),
    l7 = l(746002);
function l4(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((n) => {
            let l = (0, l7.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: l7.CollectiblesItemAssetFormat.STATIC,
                assetId: n.id,
            });
            null != l && (0, lZ.NN)(l).catch(() => {});
        });
}
var l6 = l(715196);
function te(e) {
    let { responsive: n } = e;
    return !0 !== n;
}
function tn(e) {
    let { profileFramePreview: n, isEmpty: l, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, lU.Ay)(),
        u = (0, lB.M)(d) ? l2 : l3,
        c = (0, E.A)(n?.skuId),
        g = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, l$.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, lX.MG)(r, t), [r, t]);
            return (0, lJ.A)({ enabled: n, isInteracting: l, items: a, preload: l4 });
        })({ enabled: l && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, T.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(l6.hm, x, { [l1.O]: m }),
                    style: p,
                    children: (0, t.jsx)(k.A, { frame: f, filterLayer: te, isPreview: !0 }),
                }),
            (0, t.jsx)("div", {
                className: a()(l6.ti, { [l6.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: l6.QQ, draggable: !1 }),
            }),
        ],
    });
}
function tl(e) {
    let { user: n, guildId: l, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != l,
        d = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
        u = (0, eg.Xf)({ user: n }),
        c = (0, eg.Xf)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileFrame: g } = (0, eg.Tu)(l ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, eg.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: l ?? void 0 }),
        { product: h } = (0, lz.q)(x?.skuId),
        v = m ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, ni.p)({ guildId: l ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eO.intl.string(p ? eO.t.j6hZyM : eO.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, l8.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(lm.A, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eO.intl.string(eO.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? eO.intl.string(eO.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : eO.intl.string(t ? eO.t.yFeGB5 : eO.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, lq.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(tn, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var tt = l(684732),
    ti = l(498596),
    tr = l(871524);
function ta(e) {
    let { primaryColor: n, secondaryColor: l, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, lo.Hl)(n)}, ${(0, lo.Hl)(l)})`;
    return (0, t.jsx)("div", { className: tr.D7, style: { background: r }, children: i });
}
function ts(e) {
    let { color: n } = e,
        l = (0, lo.Hl)(n),
        i = (0, lo.bJ)(n, 0xffffff) < ti.Tr.NonText;
    return (0, t.jsx)("div", {
        className: tr.OS,
        children: (0, t.jsx)("div", { className: a()(tr.Hy, { [tr.rY]: i }), style: { backgroundColor: l } }),
    });
}
function to(e) {
    let { color: n, disabled: l, onClick: r, buttonRef: a, ...s } = e,
        o = i.useRef(null);
    return (0, t.jsx)(eJ.D, {
        ...s,
        innerRef: a ?? o,
        className: tr.Dh,
        onClick: l ? void 0 : r,
        "aria-disabled": l,
        tabIndex: l ? -1 : 0,
        children: (0, t.jsx)(ts, { color: n }),
    });
}
function td(e) {
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
    return (0, t.jsx)(lu.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestOpen: s,
        onRequestClose: o,
        renderPopout: (e) => (0, t.jsx)(lc.VN, { ...e, value: n, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, t.jsx)(to, { color: n, onClick: i, disabled: r, buttonRef: u, "aria-label": l, ...a });
        },
    });
}
function tu(e) {
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
        [g, m] = i.useState(null),
        f = i.useRef(null),
        p = i.useRef(null),
        x = (0, lo.Hl)(n),
        h = (0, lo.Hl)(l),
        v = eO.intl.formatToPlainString(eO.t.FquTfm, { colorLabel: x }),
        A = eO.intl.formatToPlainString(eO.t.xOnm4z, { colorLabel: h });
    i.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? f : p;
            (e.current?.focus(), m(c));
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let b =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      (d.onClick(), f.current?.focus());
                  },
              }
            : void 0;
    return (0, t.jsx)(lm.Y, {
        variant: u,
        disabled: o,
        deleteButton: b,
        children: (0, t.jsxs)(ta, {
            primaryColor: n,
            secondaryColor: l,
            children: [
                (0, t.jsx)(td, {
                    color: n,
                    ariaLabel: v,
                    suggestedColors: s,
                    onSelect: r,
                    disabled: o,
                    isOpen: "theme-primary" === g,
                    onRequestOpen: () => m("theme-primary"),
                    onRequestClose: () => m(null),
                    buttonRef: f,
                }),
                (0, t.jsx)(td, {
                    color: l,
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
function tc(e) {
    let { user: n, guildId: l, disabled: r = !1 } = e,
        a = (0, X.Ay)(n.id, l),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ep.A, K.A], () => {
            let e = ep.A.getPendingChanges(l ?? void 0),
                t = K.A.getUserProfile(n.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != l ? (K.A.getGuildMemberProfile(n.id, l)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, em.V7)({ userId: n.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, ee.A)({
            user: n,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, ld.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : n.getAvatarURL(l ?? void 0, 80),
        v = (0, lg.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, ni.p)({ guildId: l ?? void 0, themeColors: e });
            },
            [l],
        ),
        b =
            null != l && (0, tt.l)(d, o)
                ? {
                      onClick: () => (0, ni.p)({ guildId: l, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eO.intl.string(eO.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(tu, {
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
var tg = l(629985);
function tm(e) {
    let { children: n, hasGradientBackground: l = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(tg.k, { [tg.V]: l }), children: n }) });
}
var tf = l(202091),
    tp = l(689175),
    tx = l(424290);
function th(e) {
    let { children: n, isDismissed: l } = e;
    return (0, u.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) => (l ? (0, t.jsx)(tf.animated.div, { className: tx.iK, style: e, children: n }) : null));
}
function tv(e) {
    let { children: n, floatingFooter: l } = e,
        r = i.useRef(null),
        s = null != l,
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
                let { scrollTop: n } = e.currentTarget;
                !o && n >= 86 ? d(!0) : o && n <= 43 && d(!1);
            },
            [u, o],
        ),
        m = s && "safe-padding" === u;
    return (0, t.jsxs)("div", {
        className: tx.u6,
        children: [
            (0, t.jsx)(tp.zC, {
                ref: r,
                className: a()(tx.XG, { [tx.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: tx.Qs, children: n }),
            }),
            s && (0, t.jsx)(th, { isDismissed: o, children: l }),
        ],
    });
}
var tA = l(508770),
    tb = l(732280),
    tj = l(811611),
    tI = l(976860),
    tC = l(402860);
function ty() {
    return i.useCallback(() => {
        ((0, tI.pX)(Q.BVt.NITRO_HOME), (0, tC.closeUserProfileModal)());
    }, []);
}
var tN = l(570002),
    tE = l(202541),
    tP = l(155053);
function tk() {
    let e = (0, tb.V)();
    return e?.subscriptionTrial?.skuId === tE.pe.TIER_2 ? e : null;
}
function tT() {
    let e = (0, tN.A)(eO.intl.string(eO.t.pj0XBN));
    return (0, t.jsx)(le.A, { subscriptionTier: tE.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function tS(e) {
    let { trialOffer: n, onSubscribeClick: l, onSubscribeSuccess: i, onSubscribeClose: r } = e,
        a = ty(),
        s = (0, W.FY)({
            intervalType: n.subscriptionTrial?.interval,
            intervalCount: n.subscriptionTrial?.intervalCount,
        }),
        o = (0, tj.ux)(n.expiresAt?.toISOString());
    return (0, t.jsxs)("div", {
        className: tP.nH,
        children: [
            (0, t.jsxs)("div", {
                className: tP.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eO.intl.string(eO.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(tA.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(eG.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eO.intl.format(eO.t["fF+cgd"], { onClick: a }),
            }),
            (0, t.jsx)(le.A, {
                subscriptionTier: tE.pe.TIER_2,
                buttonTextOverride: s,
                onClick: l,
                onSubscribeModalClose: (e) => {
                    (e && i?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, t.jsx)(eG.E, { variant: "text-xs/normal", color: "text-muted", className: tP.u8, children: o }),
        ],
    });
}
function tR() {
    let e = tk();
    return null == e ? (0, t.jsx)(tT, {}) : (0, t.jsx)(tS, { trialOffer: e });
}
var tO = l(55619),
    t_ = l(848717);
function tD() {
    return (0, t.jsxs)("div", {
        className: t_.k,
        children: [
            (0, t.jsx)(eG.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eO.intl.string(eO.t.JFY17v),
            }),
            (0, t.jsx)(n5.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eO.intl.string(eO.t.R9GHya),
                onClick: function () {
                    return tO.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tL = l(342866),
    tM = l(968475);
function tw(e) {
    let { user: n, ...l } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([ep.A], () => ({
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tL.A, {
        ...l,
        variant: "full-height-bar",
        userId: n.id,
        avatarChange: a,
        accessibleValue: (0, tL.$)(a, n.avatar),
        imageInteractingClassName: null == r ? tM.$T : void 0,
    });
}
function tG(e) {
    let { userId: n, ...l } = e,
        i = (0, X.Ay)(n),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [ep.A, K.A],
            () => ({
                pendingBanner: ep.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ep.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: K.A.getUserProfile(n)?.banner,
            }),
            [n],
        ),
        d = void 0 !== a ? a : r;
    return (0, t.jsx)(lj, {
        ...l,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: lh(d, o),
    });
}
function tF(e) {
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
        o = (0, s.cf)([B.default], () => ({ globalName: B.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, eg.lw)({ pendingValue: a, userValue: o }) ?? n.username;
    return (0, t.jsx)(lD, {
        ...l,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: lO(d),
        shouldAlwaysAnimate: null == r,
    });
}
var tV = l(207803);
function tB(e) {
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
        r = (0, em.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, ee.A)({
            user: e,
            displayProfile: n,
            pendingThemeColors: l,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: l };
}
function tU(e) {
    let { user: n, initialOpenPopout: l } = e,
        { primaryColor: r, secondaryColor: a, pendingAvatarSrc: s, tryItOutThemeColors: o } = tB(n),
        d = (0, ld.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != s ? s : n.getAvatarURL(void 0, 80),
        c = (0, lg.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, tV.a)(e);
        }, []);
    return null == r || null == a
        ? null
        : (0, t.jsx)(tu, {
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
function tz(e) {
    let { user: n, onClickPrimary: l, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: a } = tB(n);
    if (null == r || null == a) return null;
    let s = eO.intl.formatToPlainString(eO.t.FquTfm, { colorLabel: (0, lo.Hl)(r) }),
        o = eO.intl.formatToPlainString(eO.t.xOnm4z, { colorLabel: (0, lo.Hl)(a) });
    return (0, t.jsx)(lm.Y, {
        variant: "full-height-bar",
        children: (0, t.jsxs)(ta, {
            primaryColor: r,
            secondaryColor: a,
            children: [
                (0, t.jsx)(to, { color: r, onClick: l, "aria-label": s }),
                (0, t.jsx)(to, { color: a, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var tW = l(847081);
function tH(e) {
    let { user: n, mode: l } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, nQ.pA)(),
        c = (function (e) {
            let { analyticsLocations: n } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, ly.L)({ analyticsLocations: n, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [n, e]);
        })(r),
        g = (0, lI._)({ isPremiumTryItOut: !0, returnRef: a }),
        m = (0, lI.P)({ isPremiumTryItOut: !0, returnRef: s }),
        f = "edit" === l;
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
            className: tW.T,
            children: [
                (0, t.jsx)(lG, {
                    heading: eO.intl.string(eO.t.NEzEws),
                    children: (0, t.jsx)(tF, {
                        user: n,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(lG, {
                    heading: eO.intl.string(eO.t.DMeO2X),
                    children: f
                        ? (0, t.jsx)(tU, {
                              user: n,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, t.jsx)(tz, {
                              user: n,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, t.jsx)(lG, {
                    heading: eO.intl.string(eO.t.Vgdusv),
                    children: (0, t.jsx)(tG, {
                        userId: n.id,
                        buttonRef: s,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(lG, {
                    heading: eO.intl.string(eO.t.Dt3ZUr),
                    children: (0, t.jsx)(tw, {
                        user: n,
                        buttonRef: a,
                        onClick: f ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var tq = l(847374),
    tK = l(111159),
    tY = l(548118),
    tX = l(711014),
    t$ = l(540637),
    tZ = l(801461),
    tJ = l(44482),
    tQ = l(844222),
    t0 = l(561392),
    t1 = l(499957),
    t2 = l(15626),
    t3 = l(470791);
function t9(e) {
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
            let { reducedMotion: e } = i.useContext(tQ.C),
                {
                    isOpen: n,
                    setIsOpen: l,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, t0.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, t1.DL)(o, {
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
        y = i.useContext(t2._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [S, R] = i.useState(null),
        O = null != S ? (0, tZ.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        D = i.useRef(!1),
        L = i.useMemo(() => n.filter((e) => (0, tZ.fI)(e.value, [l])), [l, n]),
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
                if (!T.current?.contains(e.relatedTarget)) {
                    if (D.current) {
                        D.current = !1;
                        return;
                    }
                    if (x && null != S) {
                        let e = n[S];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && h(!1);
                }
            },
            [x, S, n, r, h],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let n = e[0];
                null != n && (r(n.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: B, handleKeyDown: U } = (0, t$.l)(!0, n),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = B !== z.current;
        ((z.current = B), null != B && e && (R(B), x || ((_.current = !0), h(!0))));
    }, [B, x, h]);
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
                            if (null != S) {
                                let e = n[S];
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
                        if (null == S || S > l - 1) return;
                        {
                            let e = n[S];
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
                        if (x && null != S) {
                            let e = n[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((D.current = !0), h(!1));
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        U(e);
                }
            },
            [u, x, n, S, V, G, r, h, U],
        ),
        H = Math.max(
            n.findIndex((e) => e.id === L[L.length - 1]?.id),
            0,
        ),
        q = i.useRef(!1);
    i.useEffect(() => {
        c || !x || q.current
            ? x || ((q.current = !1), R(null), (_.current = !1))
            : ((q.current = !0), _.current || R(n.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, n.length]);
    let K = {
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
            ((T.current = e), v.setReference(e));
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: K }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(t3.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(t$.q, {
                        id: P,
                        tabIndex: -1,
                        items: n,
                        selectionMode: "single",
                        selectedItems: L,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(tJ.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var t5 = l(216384);
let t8 = "MAIN_PROFILE";
function t7(e) {
    let { guild: n } = e;
    return (0, t.jsx)(tY.Ay, { className: t5.$f, guild: n, size: tY.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function t4(e) {
    let { leading: n, label: l, description: i } = e;
    return (0, t.jsxs)("div", {
        className: t5.XE,
        children: [
            null != n && (0, t.jsx)("div", { className: t5.fZ, children: n }),
            (0, t.jsxs)("div", {
                className: t5.qL,
                children: [
                    (0, t.jsx)(eG.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: l }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eG.E, {
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
function t6(e) {
    let { leading: n, label: l, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eJ.D, {
        innerRef: r,
        className: a()(t5.L5, { [t5.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            n,
            (0, t.jsx)(eG.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: t5.v9,
                children: l,
            }),
            (0, t.jsx)(tq.a, {
                className: t5.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function ie(e) {
    let { selectedGuildId: n, originGuildId: l, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tX.Ay], () => tX.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([G.A], () => G.A.getGuilds()),
        c = (0, s.bG)([e9.A], () => {
            let e = e9.A.getGuildId();
            return null == e || ep._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ef.Ay, tX.Ay], () => {
            let e = {};
            for (let n of tX.Ay.getFlattenedGuildIds()) {
                let l = ef.Ay.getSelfMember(n)?.nick;
                null != l && (e[n] = l);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: t8,
                    label: eO.intl.string(eO.t["2p07FR"]),
                    value: t8,
                    leading: (0, t.jsx)(tK.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(t7, { guild: l }),
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
                          leading: (0, t.jsx)(t7, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, l, c, g]),
        f = n ?? t8,
        p = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let l = e === t8 ? null : e;
                l !== n && r(l);
            },
            [r, n],
        );
    return (0, t.jsx)(t9, {
        className: t5.kL,
        label: eO.intl.string(eO.t.rki38K),
        listboxClassName: t5.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(t4, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(t6, { leading: p.value === t8 ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var il = l(462887),
    it = l(765178),
    ii = l(461797),
    ir = l(469054),
    ia = l(601298);
function is() {
    let { preset: e, setPreset: n } = (0, nQ.RQ)(),
        { clientThemeAdaptedColorsEnabled: l } = lr({ location: "useRandomPremiumTryItOutPreset" }),
        t = (0, lU.Ay)(),
        r = (0, il.q)(t),
        a = i.useCallback(
            (e) => {
                let n = (0, ii.Wt)(e);
                (0, tV.w5)({
                    banner: (0, ia.X)({
                        assetOrigin: ir.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: l ? (r ? n.themeColors.light : n.themeColors.dark) : n.themeColorsLegacy,
                    displayNameStyles: n.displayNameStyles,
                });
            },
            [l, r],
        );
    i.useEffect(() => {
        ep.A.hasTryItOutChanges() || a(e);
    }, [a, e]);
    let s = i.useCallback(() => {
        let l = (0, ii.B$)(e),
            t = (0, ii.Wt)(l);
        (nV.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: l }),
            n(l),
            a(l),
            it.O.announce(eO.intl.formatToPlainString(eO.t.M2Hj9s, { presetName: t.getName() })));
    }, [e, n, a]);
    return { preset: e, onShuffle: s };
}
var io = l(23722),
    id = l(288490);
let iu = "profile-editing-nameplate-error",
    ic = "profile-editing-avatar-error",
    ig = "profile-editing-avatar-decoration-error",
    im = "profile-editing-banner-error",
    ip = "profile-editing-display-name-style-error";
function ix(e) {
    let { className: n } = e;
    return (0, t.jsx)("div", {
        className: a()(id.D0, n),
        children: (0, t.jsx)("div", { className: id.ZN, children: (0, t.jsx)(n0.LockIcon, { size: "xs" }) }),
    });
}
function ih() {
    let e = (0, tN.A)(eO.intl.string(eO.t.pj0XBN)),
        n = ty();
    return (0, t.jsxs)(n1.h, {
        color: "nitro-pink",
        className: id.Lu,
        children: [
            (0, t.jsx)(eG.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eO.intl.format(eO.t.TmfgI2, { onClick: n }),
            }),
            (0, t.jsx)(le.A, { subscriptionTier: tE.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
function iv() {
    let [e, n] = (0, n4.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: id.X6,
              children: [
                  (0, t.jsx)(eG.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eO.intl.string(eO.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eJ.D, {
                      "aria-label": eO.intl.string(eO.t.rSe9ra),
                      className: id.TD,
                      onClick: () => n(!0),
                      children: (0, t.jsx)(n2.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function iA() {
    let e = ty(),
        n = (0, tN.A)(eO.intl.string(eO.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: id.eW,
        children: [
            (0, t.jsxs)("div", {
                className: id.tm,
                children: [
                    (0, t.jsx)(n3.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eO.intl.string(eO.t.bO0TOe),
                    }),
                    (0, t.jsx)(eG.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eO.intl.format(eO.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(le.A, { subscriptionTier: tE.pe.TIER_2, buttonTextOverride: n, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(ix, { className: id.nd }),
        ],
    });
}
function ib() {
    return (0, t.jsx)(eG.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: id.BJ,
        "aria-hidden": !0,
        children: eO.intl.format(eO.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(e6.t, { size: "xxs", color: "currentColor", className: id.qp }),
        }),
    });
}
function ij(e) {
    let { user: n, guildId: l, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(lG, {
        heading: eO.intl.string(eO.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(lV.A, { user: n, guildId: l, disabled: i, errorMessageId: null != r ? iu : void 0 }),
            (0, t.jsx)(lF, { id: iu, message: r }),
        ],
    });
}
function iI(e) {
    let { user: n, guildId: l, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(lG, {
        heading: eO.intl.string(eO.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(la.A, { user: n, guildId: l, disabled: i, errorMessageId: null != r ? ic : void 0 }),
            (0, t.jsx)(ls.A, { user: n, guildId: l, disabled: i, errorMessageId: null != a ? ig : void 0 }),
            (0, t.jsx)(lF, { id: ic, message: (0, ln.d3)(r) }),
            (0, t.jsx)(lF, { id: ig, message: a }),
        ],
    });
}
function iC(e) {
    let { user: n, guildId: l, disabled: i, errorMessage: r } = e,
        a = (0, n6.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, eS.kn)(a && !i ? [eC.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === eC.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(lG, {
        heading: eO.intl.string(eO.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(n9.Lp, { text: eO.intl.string(eO.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(lL, {
                user: n,
                guildId: l,
                disabled: i,
                errorMessageId: null != r ? ip : void 0,
                onOpen: d ? () => o(eR.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(lF, { id: ip, message: r }),
        ],
    });
}
function iy(e) {
    let { user: n, guildId: l, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(lG, {
        heading: eO.intl.string(eO.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(tc, { user: n, guildId: l, disabled: i || !r }),
            (0, t.jsx)(lC, { userId: n.id, guildId: l, disabled: i || !r, errorMessageId: null != a ? im : void 0 }),
            (0, t.jsx)(lF, { id: im, message: (0, ln.d3)(a) }),
        ],
    });
}
function iN(e) {
    let { user: n, disabled: l } = e;
    return (0, t.jsx)(lG, {
        heading: eO.intl.string(eO.t["/X3fkf"]),
        disabled: l,
        children: (0, t.jsx)(lf, { user: n, disabled: l }),
    });
}
function iE(e) {
    let { user: n, guildId: l, disabled: i } = e;
    return (0, t.jsxs)(lG, {
        heading: eO.intl.string(eO.t["Vfbar/"]),
        disabled: i,
        children: [
            (0, t.jsx)(l5, { user: n, guildId: l, disabled: i, variant: "square" }),
            (0, t.jsx)(tl, { user: n, guildId: l, disabled: i }),
        ],
    });
}
let iP = "premium-try-it-out-description";
function ik(e) {
    let { user: n } = e,
        l = ty(),
        { navigate: i } = (0, nQ.pA)();
    return (
        is(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": iP,
            className: id.DX,
            children: [
                (0, t.jsx)(ix, { className: id.x$ }),
                (0, t.jsxs)("div", {
                    className: id.sb,
                    children: [
                        (0, t.jsx)(eG.E, {
                            id: iP,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eO.intl.format(eO.t.TmfgI2, { onClick: l }),
                        }),
                        (0, t.jsx)(n5.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: n8.EyeIcon,
                            text: eO.intl.string(eO.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tH, { user: n, mode: "entrypoint" }),
            ],
        })
    );
}
function iT(e) {
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
        { enabled: m } = lr({ location: "DefaultEditingPanelView" }),
        f = (0, io.A)(c),
        p = null != i,
        x = W.Ay.canUsePremiumProfileCustomization(n),
        h = p && !x,
        v = !x && !p,
        A = v && m,
        b = p && !x && !g,
        j = a || o,
        I = (0, s.bG)([ep.A], () => ep.A.getErrors(i)),
        C = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        y = I.avatar?.[0],
        N = I.avatar_decoration_sku_id?.[0],
        E = I.banner?.[0],
        P = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0],
        k = lt.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = x || p ? "inline" : A ? "hidden" : k ? "end" : "hidden",
        S = (0, t.jsx)(iC, { user: n, guildId: i, disabled: j || h, errorMessage: P });
    return (0, t.jsxs)(tm, {
        hasGradientBackground: b,
        children: [
            (0, t.jsxs)("div", {
                className: id.wx,
                children: [
                    (0, t.jsx)(nO.m, {
                        text: eO.intl.string(eO.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eJ.D, {
                            innerRef: d,
                            className: id.cS,
                            "aria-label": eO.intl.string(eO.t["l/A351"]),
                            onClick: u,
                            "aria-controls": l,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(n7.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(ie, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: a,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, t.jsx)(tD, {})
                : (0, t.jsx)(tv, {
                      floatingFooter: v && !A ? (0, t.jsx)(ih, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              p && (x ? (0, t.jsx)(iv, {}) : (0, t.jsx)(iA, {})),
                              x && (0, t.jsx)(ib, {}),
                              (0, t.jsx)(ij, { user: n, guildId: i, disabled: j || h, errorMessage: C }),
                              (0, t.jsx)(iI, {
                                  user: n,
                                  guildId: i,
                                  disabled: j || h,
                                  avatarErrorMessage: y,
                                  avatarDecorationErrorMessage: N,
                              }),
                              "inline" === T && S,
                              x || p
                                  ? (0, t.jsx)(iy, {
                                        user: n,
                                        guildId: i,
                                        disabled: j || h,
                                        canUsePremiumProfileFeatures: x,
                                        bannerErrorMessage: E,
                                    })
                                  : (0, t.jsx)(iN, { user: n, disabled: j || h }),
                              (0, t.jsx)(iE, { user: n, guildId: i, disabled: j || h }),
                              "end" === T && S,
                              A &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(ik, { user: n }), (0, t.jsx)(tR, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var iS = l(110654);
function iR(e) {
    return null;
}
function iO(e) {
    let { activeSlide: n, direction: l, onTransitionComplete: r, children: s } = e,
        o = new Map(s.map((e) => [e.props.id, e]));
    if (!o.has(n)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = i.useState(n),
        [g, m] = i.useState(!1),
        f = "forwards" === l ? 1 : -1,
        p = (0, u.p)(
            n,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, l) => {
                    let { item: t } = l;
                    e.finished && t === n && (m(!1), t !== d && (c(n), r()));
                },
            },
            "respect-motion-settings",
        ),
        x = g || n !== d;
    return (0, t.jsx)("div", {
        className: a()(iS.kL, x && iS.ez),
        children: (0, t.jsx)("div", {
            className: iS.u4,
            children: p((e, n, l) => {
                let { key: i } = l,
                    r = o.get(n);
                return null == r
                    ? null
                    : (0, t.jsx)(
                          tf.animated.div,
                          {
                              className: iS.M6,
                              style: x
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
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
var i_ = l(477155),
    iD = l(561243),
    iL = l(206697),
    iM = l(926321),
    iw = l(663417),
    iG = l(145934);
let iF = "shuffle-options-a11y-description";
function iV() {
    let { preset: e, onShuffle: n } = is(),
        { showPresetName: l } = lr({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let n = (0, ii.Wt)(e);
            return { presetName: n.getName(), presetHeader: n.getPreviewThumbnailSrc() };
        }, [e]);
    return l
        ? (0, t.jsxs)("div", {
              className: iG.kL,
              children: [
                  (0, t.jsx)(nO.m, {
                      text: eO.intl.string(eO.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(nJ.K, {
                          icon: iw.RefreshIcon,
                          "aria-label": eO.intl.string(eO.t.VzqqFC),
                          "aria-describedby": iF,
                          onClick: n,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: iF, children: eO.intl.string(eO.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: iG.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: iG.L_, src: a }),
                          (0, t.jsxs)(eG.E, {
                              className: iG._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eO.intl.formatToPlainString(eO.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: iG.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(n5.$, {
                      icon: iM.DiceIcon,
                      text: eO.intl.string(eO.t.VzqqFC),
                      onClick: n,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": iF,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: iF, children: eO.intl.string(eO.t.bBRdiB) }),
              ],
          });
}
var iB = l(280406);
function iU(e) {
    let { user: n, onBack: l, backButtonRef: i } = e,
        r = tk();
    return (0, t.jsxs)(tm, {
        children: [
            (0, t.jsxs)("div", {
                className: iB.wx,
                children: [
                    (0, t.jsx)(eJ.D, {
                        innerRef: i,
                        "aria-label": eO.intl.string(eO.t["4IYwrw"]),
                        onClick: l,
                        className: iB.Gv,
                        children: (0, t.jsx)(i_.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(n3.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iB.R_,
                        children: eO.intl.string(eO.t.PxUx8e),
                    }),
                    (0, t.jsx)(eG.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iB.Ij,
                        children: eO.intl.string(eO.t.X0ir7L),
                    }),
                    (0, t.jsx)("div", { className: iB.ZZ, children: (0, t.jsx)(iV, {}) }),
                ],
            }),
            (0, t.jsx)(tv, {
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(tH, { user: n, mode: "edit" }),
                        null != r &&
                            (0, t.jsx)(tS, {
                                trialOffer: r,
                                onSubscribeClick: iL.t,
                                onSubscribeSuccess: iL.T,
                                onSubscribeClose: iD.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var iz = l(199016);
let iW = "user-profile-editing-panel",
    iH = "profile-modal-editing-panel-heading";
function iq(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(nO.m, {
        text: eO.intl.string(eO.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eJ.D, {
            innerRef: i,
            "aria-label": eO.intl.string(eO.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iW,
            className: a()(iz.eg, l),
            onClick: n,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(nZ.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function iK(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(nO.m, {
            text: eO.intl.string(eO.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(nJ.K, {
                buttonRef: i,
                "aria-label": eO.intl.string(eO.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iW,
                icon: nZ.V,
                onClick: n,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iY(e) {
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
        p = (0, s.bG)([B.default], () => B.default.getCurrentUser()),
        { selectedPanel: x, readyPanel: h, handlePanelTransitionComplete: v, goBack: A } = (0, nQ.pA)(),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (null == h || "premiumTryItOut" !== h.id || null != h.initialTarget) return;
        let e = requestAnimationFrame(() => b.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [h]),
    null == p)
        ? null
        : (0, t.jsx)("aside", {
              id: iW,
              "aria-labelledby": iH,
              className: a()(iz.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iz.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: iH, children: eO.intl.string(eO.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)(iO, {
                          activeSlide: x.id,
                          direction: "premiumTryItOut" === x.id ? "forwards" : "backwards",
                          onTransitionComplete: v,
                          children: [
                              (0, t.jsx)(iR, {
                                  id: "default",
                                  children: (0, t.jsx)(iT, {
                                      panelId: iW,
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
                              (0, t.jsx)(iR, {
                                  id: "premiumTryItOut",
                                  children: (0, t.jsx)(iU, { user: p, onBack: A, backButtonRef: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iX = l(669253),
    i$ = l(347805),
    iZ = l(34011),
    iJ = l(629403),
    iQ = l(612630),
    i0 = l(61426);
function i1(e) {
    let { userId: n, className: l, autoFocus: r = !1, onUpdate: o } = e,
        d = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        { loading: u, note: c } = (0, iQ.A)(n),
        [g, m] = i.useState(),
        [f, p] = i.useState(),
        x = g ?? c,
        h = i.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), m(e), o?.());
                    try {
                        await iJ.A.updateNote(n, e);
                    } catch {
                        p(eO.intl.string(eO.t.F8FvUy));
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
            ? (0, t.jsx)(eG.E, { variant: "text-sm/normal", color: "text-default", className: i0.t, children: x })
            : null;
    return (0, t.jsx)("div", {
        className: a()(no.kL, l),
        children: (0, t.jsx)(iZ.w, {
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
            label: eO.intl.string(eO.t.PbMNh2),
            placeholder: v ? eO.intl.string(eO.t["WLKx/9"]) : eO.intl.string(eO.t.VBhOe2),
            maxLength: Q.T7x,
            disabled: v,
            error: f,
        }),
    });
}
var i2 = l(518477),
    i3 = l(793222);
function i9(e) {
    let { userId: n } = e,
        l = (0, eb.g)(),
        { trackUserProfileAction: i } = (0, H.NJ)(),
        r = (0, Y.X)("UserProfileModalV2NotesSection"),
        a = r ? i1 : i$.A;
    return (0, t.jsx)(nl.A, {
        heading: eO.intl.string(eO.t["mQKv+v"]),
        scrollTargetId: i2.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: n,
            className: r ? i3.N : i3.w,
            autoFocus: l === i2.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var i5 = l(123292),
    i8 = l(667242),
    i7 = l(655214);
function i4(e) {
    let { icon: n, message: l, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: i8.kL,
            children: (0, t.jsxs)("div", {
                className: a()(i7.oR, i8.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: i8.Kk, children: n }),
                    (0, t.jsx)(eG.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: i8.hP,
                            children: (0, t.jsx)(i5.Q, {
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
var i6 = l(346055),
    re = l(289873),
    rn = l(615019);
function rl(e) {
    let { showScrim: n, showLoadingSpinner: l, className: r, children: s } = e;
    i.useEffect(() => {
        l && it.O.announce(eO.intl.string(eO.t["QR+vBP"]));
    }, [l]);
    let o = i.useRef(null);
    return (
        (0, i6.f)(o, n),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(rn.f, n && rn.z),
                    children: l && (0, t.jsx)(re.y, { type: re.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": n || void 0, className: r, children: s }),
            ],
        })
    );
}
var rt = l(568602),
    ri = l(625494),
    rr = l(61881);
function ra(e) {
    let { children: n } = e,
        [l, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([rr.A, ep.A], () => rr.A.hasUnsavedChanges() || ep.A.hasUnsavedChanges());
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
                ri._.subscribe(Q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    ri._.unsubscribe(Q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(rt.b, { isShaking: l, intensity: a, children: n })
    );
}
l(46121);
var rs = l(639784),
    ro = l(933832),
    rd = l(972213),
    ru = l(97483),
    rc = l(384377);
let rg = {
        [i2.jM.WIDGET_ADDED]: {
            message: eO.intl.string(eO.t.fFP1Uy),
            icon: (0, t.jsx)(ro.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [i2.jM.WIDGET_REMOVED]: {
            message: eO.intl.string(eO.t.zzsK7h),
            icon: (0, t.jsx)(ro.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [i2.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eO.intl.string(eO.t["84MExs"]),
            icon: (0, t.jsx)(rd.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: ru.Ck.FAILURE,
        },
        [i2.jM.SOMETHING_WENT_WRONG]: {
            message: eO.intl.string(eO.t.F8FvUy),
            icon: (0, t.jsx)(rd.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: ru.Ck.FAILURE,
        },
    },
    rm = (e) => {
        let { className: n } = e,
            l = (0, rc.fu)(),
            r = (0, s.bG)([ns.Ay], () => ns.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (o(!0), c(rg[l]), it.O.announce(rg[l].message)) : o(!1);
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
            i.useEffect(() => () => (0, rc.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, rc.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, l) =>
                        l &&
                        null !== d &&
                        (0, t.jsx)(tf.animated.div, { className: n, style: e, children: (0, t.jsx)(i4, { ...d }) }),
                ),
            })
        );
    };
var rf = l(297413),
    rp = l(465829),
    rx = l(826673),
    rh = l(609425),
    rv = l(73392),
    rA = l(576705),
    rb = l(997394);
function rj(e) {
    return null == e || "" === e ? void 0 : e;
}
function rI(e) {
    let n,
        l,
        r,
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
        C = (0, n6.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: y, permissionsLoaded: N } = (0, s.cf)([rA.A, G.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = G.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: rA.A.can(Q.xBc.CHANGE_NICKNAME, e) || rA.A.can(Q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        E = A && !y && N,
        {
            value: P,
            previewValue: k,
            fallbackDisplayName: T,
            onCommit: S,
        } = ((l = null != (n = h?.guildId ?? null)),
        (r = (0, s.bG)([B.default], () => B.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, s.bG)([ef.Ay], () => (null != n ? (ef.Ay.getMember(n, p.id)?.nick ?? null) : null))),
        (d = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName)),
        (u = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingNickname)),
        (m = (g = void 0 !== (c = l ? u : d) ? c : l ? o : r) ?? ""),
        (f = l ? (rj(r) ?? p.username) : p.username),
        {
            value: m,
            previewValue: rj(g) ?? f,
            fallbackDisplayName: f,
            onCommit: i.useCallback(
                (e) => {
                    l ? (0, ni.p)({ nickname: e.trim(), guildId: n ?? void 0 }) : (0, ni.p)({ globalName: e.trim() });
                },
                [l, n],
            ),
        }),
        R = (0, s.bG)([ep.A], () => ep.A.getErrors(b ?? null)),
        O = (0, nt.EC)(b ?? null),
        _ = A ? R.nick?.[0] : R.global_name?.[0],
        D = O?.nick?.[0],
        L = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(b).pendingDisplayNameStyles),
        M = (0, rh.A)({ userId: p.id, guildId: b, pendingDisplayNameStyles: L }),
        w = (0, rv.a)({ displayNameStyles: M, compensateForSafari: !1 }),
        F = eO.intl.string(A ? eO.t.mq6Cg9 : eO.t.XuZU7A),
        V = A ? eO.intl.string(eO.t.YcDKr8) : p.username,
        U = i.useRef(null),
        z = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    C &&
                        (0, rx.Dr)(eC.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: eR.i.INDIRECT_ACTION,
                        }),
                    (0, ly.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: U }));
            },
            [v, b, C],
        ),
        H = {
            icon: nZ.V,
            tooltip: eO.intl.string(eO.t.lqKKI2),
            "aria-label": eO.intl.string(eO.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: z,
            buttonRef: U,
        },
        q = E
            ? (0, t.jsx)("span", {
                  className: rb.Cs,
                  children: (0, t.jsx)(n0.LockIcon, { size: "refresh_sm", color: x.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, t.jsx)("div", {
        className: no.kL,
        children: (0, t.jsx)(eG.E, {
            variant: rp.gU.lg,
            color: "none",
            className: w,
            children: (0, t.jsx)(iZ.w, {
                value: P,
                onCommit: S,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, n) => {
                    let { focused: l } = n;
                    return (0, t.jsx)(rp.c$, {
                        user: p,
                        guildId: b,
                        displayName: l ? (rj(e) ?? T) : k,
                        size: "lg",
                        pendingDisplayNameStyles: L,
                        className: a()(rb.dt, { [rb.jW]: l && "" === e }),
                        displayNameTrailing: q,
                    });
                },
                placeholder: V,
                label: F,
                maxLength: Q.zzC,
                textVariant: "inherit",
                trailing: y && j ? H : void 0,
                error: _,
                helperText: E ? eO.intl.string(eO.t.gzjxQi) : D,
                disabled: !y,
            }),
        }),
    });
}
var rC = l(628072);
function ry(e) {
    let n,
        l,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
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
                    (0, ni.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = u?.guildId != null,
        p = null != g && g.length > 0,
        x = eO.intl.string(f ? eO.t.AXiE0i : eO.t["76Aqhl"]);
    return (0, t.jsx)("div", {
        className: a()(no.kL, no.oE, rC.k),
        children: (0, t.jsx)(iZ.w, {
            value: c,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            fullWidth: !1,
            paddingBlock: "md",
            paddingInline: "sm",
            size: "sm",
            scrollIntoViewOnFocus: !0,
            preview: p ? (0, t.jsx)(rp.n2, { pronouns: g }) : null,
            label: eO.intl.string(eO.t["rniRE+"]),
            placeholder: x,
            maxLength: Q.VE5,
            spellCheck: !1,
        }),
    });
}
var rN = l(145497),
    rE = l(685073),
    rP = l(318785),
    rk = l(534400),
    rT = l(436921),
    rS = l(743981),
    rR = l(295930),
    rO = l(594615);
let r_ = "no-server-tag";
function rD(e) {
    let { buttonRef: n, guildId: l, guildTag: i, guildBadge: r, ...s } = e,
        o = (0, rT.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        d = null == i || null == l;
    return (0, t.jsx)(eJ.D, {
        innerRef: n,
        className: a()(o ? rR.qJ : rR.L5, { [rR.wK]: d }),
        ...s,
        children: (0, t.jsxs)(eG.E, {
            variant: o || d ? "text-xs/normal" : "text-xs/semibold",
            color: d ? "input-placeholder-text-default" : "text-default",
            className: rR.W3,
            tag: "span",
            children: [
                d
                    ? eO.intl.string(eO.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  rk.Z9,
                                  {
                                      src: (0, rE.gC)(l, r, rS.Sl.SIZE_14),
                                      size: rS.Sl.SIZE_14,
                                      className: rR.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rE.gC)(l, r, rS.Sl.SIZE_14) ?? l,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tq.a, { size: "xs", color: "currentColor", className: rR.u4 }),
            ],
        }),
    });
}
function rL() {
    let e = (0, rP.b)(),
        n = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        l = (0, s.cf)([B.default], () => {
            let e = B.default.getCurrentUser();
            return (0, rE.Zo)(e?.primaryGuild);
        }),
        r = l.guildId ?? null,
        a = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingPrimaryGuildId),
        o = void 0 !== a ? a : r,
        d = null != o ? (n.get(o) ?? null) : null,
        u = null == d && o === r,
        c = d?.profile?.tag ?? (u ? (l.tag ?? null) : null),
        g = d?.profile?.badge ?? (u ? l.badge : void 0),
        m = i.useCallback(
            (e) =>
                e.id === r_
                    ? (0, t.jsx)("div", {
                          className: rO.uN,
                          children: (0, t.jsx)(eG.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: rR.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tJ.c, { ...e }),
            [],
        ),
        f = i.useMemo(
            () => [
                { id: r_, label: eO.intl.string(eO.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let n = e.profile?.tag;
                    if (null == n) return [];
                    let l = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rN.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(rk.o9, { guildId: e.id, guildTag: n, guildBadge: l }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        p = i.useCallback((e) => {
            (0, ni.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length && null == r
        ? null
        : (0, t.jsx)(t9, {
              options: f,
              value: o,
              onSelectionChange: p,
              label: eO.intl.string(eO.t.Pdd1nd),
              listboxClassName: rR.yt,
              renderListItem: m,
              children: (e) => {
                  let { buttonRef: n, selectButtonProps: l } = e;
                  return (0, t.jsx)(rD, { buttonRef: n, guildId: o, guildTag: c, guildBadge: g, ...l });
              },
          });
}
var rM = l(956495);
function rw(e) {
    let { displayProfile: n, nickname: l, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(rp.Ay, {
        ...r,
        guildId: n?.guildId ?? void 0,
        displayName: l,
        displayNameSize: "lg",
        pronouns: n?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rG(e) {
    let n = (0, s.bG)([ep.A], () => ep.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(rw, { ...e, displayNameStylesOverride: n });
}
function rF(e) {
    let { user: n, displayProfile: l, trailing: i } = e,
        r = n.isProvisional
            ? null
            : (0, t.jsx)(rf.A, {
                  user: n,
                  forceUsername: !0,
                  className: rM.a1,
                  usernameClass: rM.eb,
                  discriminatorClass: rM.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(rI, { displayProfile: l, user: n }),
            (0, t.jsxs)("div", {
                className: a()(rM.AK, rM.j6),
                children: [r, (0, t.jsx)(rp.Ce, {}), (0, t.jsx)(ry, { displayProfile: l }), (0, t.jsx)(rL, {}), i],
            }),
        ],
    });
}
function rV(e) {
    let { editingMode: n, ...l } = e;
    switch (n) {
        case "read-only":
            return (0, t.jsx)(rw, { ...l });
        case "try-it-out":
            return (0, t.jsx)(rG, { ...l });
        case "edit":
            return (0, t.jsx)(rF, { ...l });
        default:
            return (0, ea.xb)(n);
    }
}
var rB = l(97808),
    rU = l(980707),
    rz = l(477782),
    rW = l(22231),
    rH = l(601255),
    rq = l(562819),
    rK = l(19575),
    rY = l(339984),
    rX = l(329801),
    r$ = l(884362);
let rZ = rK.Ay.getEnableHardwareAcceleration() ? rB.Js : rB.eu;
function rJ(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function rQ(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(rU.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eO.intl.string(eO.t.YAgq3W),
        children: (0, t.jsx)(rz.rX, { children: l }),
    });
}
function r0(e) {
    let { user: n, guildId: l } = e,
        { avatarProps: r, eventHandlers: o } = (0, eD.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: n, guildId: l, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != l,
                c = (0, s.bG)([ef.Ay], () => (null != l ? ef.Ay.getMember(l, n.id) : null)),
                g = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? void 0).pendingAvatar),
                m = u ? c?.avatar : n.avatar,
                f = (0, eg.z5)(g, m),
                p = u && null != n.avatar,
                x = W.Ay.canUsePremiumProfileCustomization(n),
                h = x || null == l,
                v = x || null == l,
                A = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
                b = (0, eg.a4)({ user: n }),
                j = (0, eg.a4)({ user: n, guildId: l ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eg.CP)(l ?? void 0),
                y = void 0 !== C,
                N = null != (0, rH.A)(y ? C : j) && (y ? null != C : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    (r(),
                        rJ(() =>
                            (0, ln.XD)({
                                uploadType: rY.HL.AVATAR,
                                analyticsSource: o,
                                guildId: l ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        ));
                }, [r, o, l, a]),
                k = i.useCallback(() => {
                    (r(),
                        rJ(() =>
                            (0, rq.L)({
                                analyticsLocations: d,
                                guild: A ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        ));
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    (r(),
                        (0, ln.rM)(null, m, (e) => (0, ni.p)({ guildId: l ?? void 0, avatar: e })),
                        (0, eg.WU)(p ? "reset" : "remove"));
                }, [r, l, m, p]),
                S = i.useCallback(() => {
                    (r(), (0, ni.p)({ guildId: l ?? void 0, avatarDecoration: null }));
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rz.Dr,
                                { id: "change-avatar", label: eO.intl.string(eO.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rz.Dr,
                                { id: "change-decoration", label: eO.intl.string(eO.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eO.intl.string(eO.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eO.intl.string(eO.t.twB3fz),
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
                                      rz.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eO.intl.string(eO.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eO.intl.string(eO.t["9rx5GO"]),
                                          action: S,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, h, v, E, f, N, P, k, T, S]);
        })({ user: n, guildId: l, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, t.jsx)(eD.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rX.my, rX.vk, r$.kL, { [r$.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rZ, { ...r, imageClassName: a()(rX.Lw, r$.HU) }),
                  (0, t.jsx)(lu.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lu.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rQ, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: r$.r9,
                              children: (0, t.jsx)(nJ.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rW.PencilIcon,
                                  "aria-label": eO.intl.string(eO.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), u((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var r1 = l(514905);
function r2(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(rU.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eO.intl.string(eO.t.FzU73A),
        children: (0, t.jsx)(rz.rX, { children: l }),
    });
}
function r3(e) {
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
                m = W.Ay.canUsePremiumProfileCustomization(n),
                f = null == l,
                p = f || m,
                x = f || m,
                h = null != l,
                {
                    pendingBanner: v,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? void 0)),
                j = (0, s.bG)([K.A], () =>
                    null != l ? K.A.getGuildMemberProfile(n.id, l)?.banner : K.A.getUserProfile(n.id)?.banner,
                ),
                C = (0, s.bG)([B.default], () => B.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([K.A], () => K.A.getUserProfile(n.id)?.profileEffect != null),
                N = (0, s.bG)([K.A], () => K.A.getUserProfile(n.id)?.profileFrame != null),
                P = (0, eg.Ac)(v, j),
                k = h && C,
                T = h && y,
                S = h && N,
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
                            uploadType: rY.HL.BANNER,
                            analyticsSource: o,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, o, l, a]),
                M = i.useCallback(() => {
                    (r(),
                        (0, lW.W)({
                            analyticsLocations: d,
                            guild: null != l ? (G.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, d, l, u, a]),
                w = i.useCallback(() => {
                    (r(), (0, ln.rM)(null, j, (e) => (0, ni.p)({ guildId: l ?? void 0, banner: e })));
                }, [r, l, j]),
                F = i.useCallback(() => {
                    (r(), (0, ni.p)({ guildId: l ?? void 0, profileEffect: null }));
                }, [r, l]),
                V = i.useCallback(() => {
                    (r(),
                        (0, l8.w)({
                            analyticsLocations: d,
                            guild: null != l ? (G.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, d, l, D, a]),
                U = i.useCallback(() => {
                    (r(), (0, ni.p)({ guildId: l ?? void 0, profileFrame: null }));
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                rz.Dr,
                                { id: "change-banner", label: eO.intl.string(eO.t.N0bC3P), action: L },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                rz.Dr,
                                { id: "change-effect", label: eO.intl.string(eO.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rz.Dr,
                                { id: "change-frame", label: eO.intl.string(eO.t["oTSa/q"]), action: V },
                                "change-frame",
                            ),
                        ),
                    m &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eO.intl.string(eO.t.jHlJNS),
                                          action: w,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eO.intl.string(eO.t.tT9n7D),
                                          action: w,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eO.intl.string(eO.t.Lb7lu9),
                                          action: F,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eO.intl.string(eO.t.zUOlT6),
                                          action: F,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    x &&
                        O &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eO.intl.string(eO.t.A0pzWn),
                                          action: U,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rz.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eO.intl.string(eO.t["8DfADq"]),
                                          action: U,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, m, p, x, T, S, P, R, O, L, M, V, w, F, U]);
        })({ user: n, guildId: l, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eM.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(r1.kL, { [r1.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eM.A, { ...e, className: r1.Pr }),
                  (0, t.jsx)(lu.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lu.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(r2, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: r1.r9,
                              children: (0, t.jsx)(nJ.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rW.PencilIcon,
                                  "aria-label": eO.intl.string(eO.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var r9 = l(415916),
    r5 = l(419341),
    r8 = l(732188),
    r7 = l(913453),
    r4 = l(667049),
    r6 = l(389667),
    ae = l(116331),
    an = l(837531),
    al = l(186272),
    at = l(447538);
let ai = (e) => e * (2 - e),
    ar = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function aa(e) {
    let { type: n, anchor: l } = e;
    return "staple" !== n || "bottom" !== l;
}
function as(e) {
    let { displayProfile: n, pendingBanner: l } = e;
    if ((0, en.Nx)()) return null;
    let i = n?.getPreviewBanner(l, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: at.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function ao(e) {
    let { displayProfile: n, profileEffectOverride: l, isHovering: r } = e,
        a = void 0 !== l ? l : n?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (lK.add(e), () => lK.delete(e)),
            () => lY,
        );
    return null == a ? null : (0, t.jsx)(y.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function ad(e) {
    var n;
    let l,
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
            bannerOverride: y,
            accentColorOverride: N,
            profileEffectOverride: E,
            profileFrame: P,
            fadeInProfileFrame: T,
            editingMode: S,
            isLoading: L = !1,
        } = e,
        w = o.id === d.id,
        G = "edit" === S,
        B = i.useRef(null),
        U = i.useRef(null),
        W = i.useRef(null);
    i.useEffect(() => {
        if (w) return () => C.A.setState({ isOpen: !1 });
    }, [w]);
    let { isHoveringOrFocusing: H } = (0, R.A)(B),
        [q, K] = i.useState(),
        Y = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? K("compact-xs") : n <= 380 ? K("compact-sm") : K(void 0);
        }, []);
    (0, A.g)(B, Y, [], { fireOnMount: !0 });
    let X = null != q ? ar[q] : void 0,
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
        { appIdentities: em, connections: ef } = (function (e) {
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
        ev = ef.length > 0 || em.length > 0,
        eA = ep.length > 0,
        eb = G ? r3 : eM.A,
        ej = p?.guildId ?? u,
        eI = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: X?.avatarSize ?? eh.T[ex.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: I,
        },
        eC = i.useCallback(() => {
            (0, e$.A)({ user: o, guildId: ej, alt: x });
        }, [x, ej, o]);
    return (0, t.jsxs)("main", {
        className: a()(at.profile, null != q && at[q]),
        ref: B,
        "aria-busy": L,
        children: [
            (0, t.jsxs)("div", {
                className: at.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: at.profileHeaderBannerContainer,
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
                        ? (0, t.jsx)(r0, { ...eI })
                        : (0, t.jsx)(eD.A, {
                              ...eI,
                              onOpenAvatar: "read-only" === S ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === S && null == I ? tM.$T : void 0,
                          }),
                    (0, t.jsx)(eY.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: ex.d.MODAL_V2,
                        hasEntered: h,
                        prompt: w ? ee : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: at.profileBody,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(rV, {
                                user: o,
                                displayProfile: p,
                                nickname: x,
                                trailing: (0, t.jsx)(eL.A, {
                                    displayProfile: p,
                                    themeType: ex.d.MODAL_V2,
                                    onClose: b,
                                    showPendingBadgeEdits: w,
                                    popoutAnchorRef: h ? U : void 0,
                                    containerRef: W,
                                }),
                                onClose: b,
                                editingMode: S,
                            }),
                            (0, t.jsx)("div", { ref: U }),
                            w && h && (0, t.jsx)(e_, { targetElementRef: W }),
                        ],
                    }),
                    en === Q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eK.A.Overlay, {
                            className: at.profileOverlay,
                            children: (0, t.jsx)(eB.A, {
                                user: o,
                                applicationId: eo,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: at.profileBanner,
                            }),
                        }),
                    eg.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eK.A.Overlay,
                            {
                                className: at.profileOverlay,
                                children: (0, t.jsx)(eB.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: at.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eK.A.Overlay, {
                            className: at.profileOverlay,
                            children: (0, t.jsx)(nl.A, {
                                heading: eO.intl.string(eO.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: at.profileBanner,
                                children: (0, t.jsx)(M.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eq.A, { user: o, className: at.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eK.A.Overlay, {
                            className: at.profileOverlay,
                            children: (0, t.jsx)(eH.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: at.profileButtons,
                        children: (0, t.jsx)(nS, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: en,
                            onClose: b,
                        }),
                    }),
                    w && "try-it-out" !== S && (0, t.jsx)(ew.A, { isPremiumUser: (0, z.ki)(d) }),
                    !eu && (0, t.jsx)(nv, { currentUser: d, displayProfile: p, canEditInPlace: G }),
                    ec.length > 0 &&
                        (0, t.jsx)(nl.A, {
                            heading: eO.intl.string(eO.t["Uv/eTx"]),
                            children: (0, t.jsx)(eV.A, { applicationIds: ec }),
                        }),
                    (0, t.jsx)(nl.A, {
                        heading: eO.intl.string(eO.t.a6XYD9),
                        children: (0, t.jsx)(ez.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: i2.In }),
                    }),
                    null != ed &&
                        (0, t.jsx)(nl.A, {
                            heading: eO.intl.string(eO.t.wlTO8v),
                            children: (0, t.jsx)(eF, { friendsSinceDate: ed }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eX.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: at.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !eu &&
                        (G || ev) &&
                        (0, t.jsx)(nl.A, {
                            heading: eO.intl.string(eO.t["3fe7U5"]),
                            scrollTargetId: i2.bk.CONNECTIONS,
                            children: (0, t.jsx)(n$, {
                                applicationIdentities: em,
                                connections: ef,
                                userId: o.id,
                                allowEditing: G,
                                className: at.profileAppConnections,
                            }),
                        }),
                    !eu &&
                        eA &&
                        (0, t.jsx)(nl.A, {
                            heading: eO.intl.string(eO.t.PHjkRE),
                            scrollTargetId: i2.bk.APPS,
                            children: (0, t.jsx)(e4, {
                                applicationRoleConnections: ep,
                                onClose: b,
                                className: at.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(i9, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(ao, { displayProfile: p, profileEffectOverride: E, isHovering: H }),
            null != P && (0, t.jsx)(k.A, { frame: P, filterLayer: aa, fadeIn: T }),
        ],
    });
}
function au(e) {
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
function ac(e) {
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
        $ = i.useCallback(() => (0, r9.A)(z, D), [z, D]),
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
                m = (0, s.bG)([K.A], () => K.A.getUserProfile(n)?.fetchError?.status ?? null, [n]),
                f = i.useCallback(() => {
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
                    hasError: "retrying" === d || (null != m && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: n.id, initialGuildId: r }),
        et = i.useMemo(() => (null != Z ? { [Z]: [n.id] } : {}), [Z, n.id]);
    (0, b.Eq)(et, "UserProfileModalV2");
    let ei = (0, Y.X)("UserProfileModalV2"),
        er = (0, nQ.YW)(),
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
            profileEffectOverride: eT,
            profileFrameOverride: eS,
        } = (function (e) {
            let { userId: n, guildId: l, editingMode: t } = e;
            return (0, s.cf)(
                [ep.A, B.default, ef.Ay, K.A],
                () => {
                    if ("read-only" === t) return eA;
                    let e = B.default.getUser(n);
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
                        a = null != l ? ef.Ay.getMember(l, n) : null,
                        s = K.A.getUserProfile(n),
                        o = null != l ? K.A.getGuildMemberProfile(n, l) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, eg.us)({
                            userValue: e.avatarDecoration,
                            guildValue: a?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: l,
                        }),
                        avatarOverride: (0, em.V7)({ userId: n, image: r.pendingAvatar, size: ev }),
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
            isAnimating: e_,
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
                    config: { duration: 300, easing: ai },
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
                m = i.useCallback(() => {
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
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eV = es && !eR,
        eB = es && (!eR || e_),
        { defaultWishlistId: ez } = (0, s.cf)([K.A], () => ({ defaultWishlistId: K.A.getFirstWishlistId(n.id) }));
    (0, w.fw)({ wishlistId: ez, userId: n.id });
    let eH = (0, ej.fC)(),
        eq = eh && (!es || !Q),
        eY = es && el,
        eX = J !== Z || eY || null != eH.interactionType,
        e$ = (function (e) {
            let { user: n, currentUser: l } = e,
                { mutualFriendsCount: t, mutualGuilds: i } = (0, r7.A)(n),
                r = i?.length,
                a = (0, r8.A)(n),
                s = (0, r4.A)(n.id),
                o = (0, r5.A)(n),
                { hasNewWishlistItems: d } = (0, ae.A)(n),
                u = [],
                c = n.id === l?.id,
                g = (0, r6.A)(n.id),
                m = s.length > 0;
            return (
                (g || m) && u.push({ text: eO.intl.string(eO.t.laViwx), section: i2.RP.WIDGETS }),
                u.push({ text: eO.intl.string(eO.t.chq59f), section: i2.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    u.push({ text: eO.intl.string(eO.t["7lZ31J"]), section: i2.RP.WISHLIST, showNewContentDot: d }),
                n.id !== l?.id &&
                    a &&
                    (u.push({ text: (0, an.A)(t), section: i2.RP.MUTUAL_FRIENDS }),
                    u.push({ text: (0, al.A)(r), section: i2.RP.MUTUAL_GUILDS })),
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
            ((0, q.Wn)({ analyticsLocations: eZ, ...eJ, action: i2.pt.SHOW_STYLES_PANEL }), eL());
        }, [eZ, eJ, eL]),
        e0 = i.useCallback(() => {
            ((0, q.Wn)({ analyticsLocations: eZ, ...eJ, action: i2.pt.HIDE_STYLES_PANEL }), eM());
        }, [eZ, eJ, eM]),
        e1 = (0, X.Ay)(n.id, Z);
    (0, L.A)(eZ, e1, i2.R7.MODAL_V2);
    let e2 = void 0 !== eS ? eS?.skuId : e1?.profileFrame?.skuId,
        e3 = (0, E.A)(e2),
        e9 = (0, N.A)(e2),
        { profileFrameStyle: e5, profileFrameClassName: e8 } = (0, T.A)(e3);
    (0, P.A)({ skuId: e1?.profileFrame?.skuId, openedAt: _, context: eJ, analyticsLocations: eZ });
    let e7 = (0, s.bG)([B.default], () => W.Ay.canUsePremiumProfileCustomization(B.default.getCurrentUser())),
        e4 = er || (z && null != e1 && e7),
        e6 = U.Ay.useName(e1?.guildId, c, n),
        ne = (0, S.GV)(),
        nn = (0, s.bG)([G.A], () => (null != Z ? G.A.getGuild(Z) : null)),
        nl = z
            ? null != nn
                ? eO.intl.formatToPlainString(eO.t.M7OhOF, { guildName: nn.name })
                : eO.intl.string(eO.t.egQPgM)
            : eO.intl.format(eO.t.KRe1Fk, { name: e6 });
    return (0, t.jsx)(I.f5, {
        value: eZ,
        children: (0, t.jsx)(H.of, {
            value: eJ,
            openedAt: _,
            fetchStartedAt: e1?.fetchStartedAt,
            fetchEndedAt: e1?.fetchEndedAt,
            isLoaded: e1?.isLoaded,
            children: (0, t.jsx)(ej.Hl, {
                value: eH,
                children: (0, t.jsx)(eb.N, {
                    value: k,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tM.zr, { [tM.QF]: e1?.private === !0 }),
                        transitionState: R,
                        "aria-labelledby": ne,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(ra, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(at.layoutContainer, e8, {
                                        [at.editingPanelEnabled]: es,
                                        [at.editingPanelExpanded]: es && eR,
                                        [at.isAnimating]: e_,
                                    }),
                                    style: e5,
                                    children: [
                                        (0, t.jsxs)(au, {
                                            user: n,
                                            displayProfile: e1,
                                            pendingThemeColors: ey,
                                            forceShowPremium: e4,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tM.Oo,
                                                    children: [
                                                        (0, t.jsx)(nR.A, { onClose: $ }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: ne, children: nl }),
                                                        }),
                                                        eB &&
                                                            (0, t.jsx)(iK, {
                                                                buttonRef: ew,
                                                                onClick: eQ,
                                                                className: at.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eV &&
                                                    (0, t.jsx)("div", {
                                                        className: at.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iq, {
                                                            innerRef: eG,
                                                            onClick: eQ,
                                                            className: at.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                es &&
                                                    eD((e, n) =>
                                                        n
                                                            ? (0, t.jsx)(iY, {
                                                                  className: a()(at.editingPanel, {
                                                                      [at.isExpanded]: eR,
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
                                                (0, t.jsxs)(eK.A, {
                                                    className: a()(F, tM.A7, at.profileContentOuter),
                                                    innerClassName: at.profileContentInner,
                                                    user: n,
                                                    displayProfile: e1,
                                                    themeType: ex.d.MODAL_V2,
                                                    pendingThemeColors: ey,
                                                    isPrivate: e1?.private === !0,
                                                    forceShowPremium: e4,
                                                    children: [
                                                        (0, t.jsx)(as, { displayProfile: e1, pendingBanner: eP }),
                                                        e1?.private === !0 && (0, t.jsx)(eW.A, {}),
                                                        !eh && (0, t.jsx)(rm, { className: at.noticeContainer }),
                                                        eq &&
                                                            (0, t.jsx)("div", {
                                                                className: at.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(i4, {
                                                                    icon: (0, t.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eO.intl.string(eO.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != en
                                                                            ? eO.intl.string(eO.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: en,
                                                                    actionDisabled: !es && Q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: at.profileCardToastContainer,
                                                            children: (0, t.jsx)(eU.A, { userId: n.id, onClose: $ }),
                                                        }),
                                                        (0, t.jsxs)(rl, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Q,
                                                            className: at.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(ad, {
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
                                                                    profileEffectOverride: eT,
                                                                    profileFrame: e3,
                                                                    fadeInProfileFrame: e9,
                                                                    editingMode: eC,
                                                                    isLoading: Q,
                                                                }),
                                                                (0, t.jsx)(rs.A, {
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
                            (0, t.jsx)(iX.A, { userId: n.id, guildId: Z, className: at.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function ag(e) {
    return (0, t.jsx)(nQ.tM, { children: (0, t.jsx)(ac, { ...e }) });
}
