n.d(t, { A: () => de });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(935462),
    u = n(778712),
    d = n(866323),
    c = n(95362),
    g = n(695366),
    f = n(140735),
    m = n(707554),
    p = n(738188),
    h = n(646514),
    x = n(231723),
    A = n(241524),
    I = n(770178),
    v = n(80682),
    b = n(793574),
    j = n(688810),
    y = n(248284),
    C = n(287809),
    E = n(620632),
    S = n(73153),
    N = n(627784),
    k = n(39418),
    P = n(652215),
    T = n(938595),
    R = n(859226),
    O = n(971217),
    L = n(577390),
    _ = n(287727),
    w = n(31956),
    D = n(744808),
    M = n(875741),
    G = n(915089),
    U = n(713517),
    F = n(645507),
    W = n(922590),
    B = n(821269),
    V = n(397562),
    H = n(433380),
    z = n(634110),
    Y = n(71393),
    K = n(994500),
    X = n(351906),
    q = n(562153),
    Z = n(474090),
    $ = n(722178),
    J = n(183555),
    Q = n(741534),
    ee = n(851767),
    et = n(591179),
    en = n(527212),
    ei = n(164636),
    el = n(370480),
    er = n(773669),
    es = n(101928),
    ea = n(837529),
    eo = n(346713),
    eu = n(573648),
    ed = n(429913),
    ec = n(321078),
    eg = n(403362),
    ef = n(484509),
    em = n(487409),
    ep = n(83931),
    eh = n(991988),
    ex = n(917445),
    eA = n(919395),
    eI = n(101058),
    ev = n(696451),
    eb = n(836602),
    ej = n(996988),
    ey = n(207634);
let eC = (0, u.FT)(ey.T[ej.d.MODAL_V2].avatarSize),
    eE = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eS = n(716804),
    eN = n(679492),
    ek = n(554146),
    eP = n(43105),
    eT = n(844222),
    eR = n(381791),
    eO = n(643056),
    eL = n(327791),
    e_ = n(262),
    ew = n(982240),
    eD = n(263775),
    eM = n(49999),
    eG = n(792996);
function eU(e) {
    let t,
        n,
        r,
        s,
        { targetElementRef: o } = e,
        u = (0, eO.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        d = (0, eL.A)(),
        c =
            ((t = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
            (n = (0, a.bG)(
                [ew.Ay],
                () => (null != t && ew.Ay.hasCatalogFor(t) ? ew.Ay.getBadges(t).some((e) => e.owned) : null),
                [t],
            )),
            (r = (0, en.Ay)(t)),
            (s = (0, e_.A)(r)),
            n ?? s.length > 0),
        { reducedMotion: g } = l.useContext(eT.C),
        [f, m] = (0, eD.kn)(c && u ? [ek.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return f !== ek.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, i.jsx)(eP.A, {
              targetElementRef: o,
              position: "right",
              caretConfig: { align: "start" },
              gradientColor: "blue",
              graphic: { type: "rive", rive: eR.U, props: { dataBinding: { on: !0, reducedMotion: g.enabled } } },
              title: eG.intl.string(eG.t["9JoKQb"]),
              body: eG.intl.string(d ? eG.t.p82vky : eG.t.IDh31t),
              onRequestClose: () => m(eM.i.USER_DISMISS),
              actions: [
                  {
                      text: eG.intl.string(eG.t["4P5I8V"]),
                      onClick: function () {
                          (m(eM.i.TAKE_ACTION), y.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eF = n(718019),
    eW = n(567556),
    eB = n(915614),
    eV = n(560296),
    eH = n(834730);
function ez(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(eH.E, { variant: "body-sm/normal", children: t });
}
var eY = n(361311),
    eK = n(477534),
    eX = n(439053),
    eq = n(743987),
    eZ = n(312381),
    e$ = n(501193),
    eJ = n(383448),
    eQ = n(946356),
    e0 = n(680581),
    e1 = n(503026),
    e2 = n(305385),
    e5 = n(109112),
    e6 = n(939249),
    e8 = n(730134),
    e9 = n(169869),
    e3 = n(837057),
    e7 = n(310419),
    e4 = n(619019),
    te = n(967198),
    tt = n(488995),
    tn = n(576849);
function ti(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, e9.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: tn.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(e8.A, { user: new e4.A(t.application.bot), size: u._3.SIZE_16 })
                        : (0, i.jsx)(e5.UnknownGameIcon, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: tn.Hd,
                children: [
                    (0, i.jsxs)(e6.D, {
                        className: tn.OB,
                        onClick: function () {
                            (l?.(),
                                (0, e3.transitionToGlobalDiscovery)({
                                    tab: tt.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: e7.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(eH.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(eH.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eH.E, {
                                variant: "footnote/normal",
                                color: "text-default",
                                className: tn.nk,
                                children: eG.intl.format(eG.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, i.jsx)("div", { className: tn.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function tl(e) {
    let { applicationRoleConnections: t, className: n, onClose: l } = e,
        { trackUserProfileAction: r } = (0, J.NJ)(),
        o = (0, a.bG)([er.default], () => er.default.locale),
        u = (0, a.bG)([te.A], () => te.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: s()(tn.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: tn.FI,
                          children: (0, i.jsx)(ti, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  (r({ action: "PRESS_APP_CONNECTION" }), l());
                              },
                              selectedGuildId: u ?? void 0,
                          }),
                      },
                      `${t}-${e.application.id}`,
                  ),
              ),
          });
}
var tr = n(403581),
    ts = n(240248),
    ta = n(501925),
    to = n(900179),
    tu = n(677295);
function td(e) {
    let { className: t, ...n } = e;
    return (0, i.jsx)(to.A, {
        className: s()(tu.u, t),
        headingVariant: "body-xs/medium",
        headingColor: "text-subtle",
        ...n,
    });
}
var tc = n(81400),
    tg = n(84540),
    tf = n(290386),
    tm = n(621466);
n(321073);
var tp = n(775602),
    th = n(404760);
function tx(e) {
    let { id: t, message: n, type: l } = e,
        r = "error" === l,
        s = r ? g.CircleErrorIcon : p.WarningIcon;
    return (0, i.jsxs)(eH.E, {
        id: t,
        role: r ? "alert" : void 0,
        variant: "body-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: th.VP,
        children: [(0, i.jsx)(s, { size: "xs", color: "currentColor", className: r ? th.ik : th.QW }), n],
    });
}
function tA(e) {
    let {
            isEditing: t,
            preview: n,
            placeholder: r,
            input: a,
            editButtonRef: o,
            editButtonAriaLabel: u,
            onStartEditing: d,
            previewErrorMessage: c,
            previewWarningMessage: g,
            className: f,
            wrapperRef: m,
            onBlur: p,
            onKeyDown: h,
        } = e,
        x = l.useRef(null),
        A = l.useId(),
        I = l.useId(),
        v = null == n,
        b = null != c,
        j = null != g && !b,
        y = b ? "error" : j ? "warning" : null,
        C = b ? c : g,
        E = null != y && null != C,
        S = [];
    (v && S.push(A), E && S.push(I));
    let N = S.length > 0 ? S.join(" ") : void 0;
    function k() {
        let { activeElement: e } = x.current?.ownerDocument ?? document;
        ((0, tm.vq)(e, HTMLElement) && e.blur(), d());
    }
    let P = (0, i.jsxs)("div", {
        ref: x,
        className: s()(th.LL, { [th.JD]: b, [th.xe]: j }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            v
                ? (0, i.jsx)(eH.E, {
                      id: A,
                      variant: "body-sm/normal",
                      color: "text-muted",
                      className: th.qf,
                      children: r,
                  })
                : n,
            (0, i.jsx)(e6.D, {
                innerRef: o,
                "aria-label": u,
                "aria-describedby": N,
                "aria-expanded": !1,
                onClick: (e) => {
                    (e.stopPropagation(), k());
                },
                focusProps: { ringTarget: x },
            }),
        ],
    });
    return (0, i.jsx)("div", {
        ref: m,
        className: s()(th.kL, f),
        onBlur: p,
        onKeyDown: h,
        children: (0, i.jsx)(
            "div",
            {
                children: t
                    ? a
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: th.VH, children: P }),
                              E && (0, i.jsx)(tx, { id: I, message: C, type: y }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
var tI = n(786826);
function tv(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function tb(e) {
    var t;
    let {
            isEditing: n,
            committedValue: l,
            editedValue: r,
            setEditedValue: s,
            editButtonRef: a,
            handleStartEditing: o,
            wrapperRef: u,
            onBlur: d,
            onContainerKeyDown: c,
            inputRef: g,
            onInputFocus: f,
            onInputKeyDown: m,
            preview: p,
            placeholder: h,
            editButtonAriaLabel: x,
            label: A,
            maxLength: I,
            emojiPickerIntention: v,
            error: b,
            warning: j,
            className: y,
        } = e,
        C =
            ((t = n ? r : l),
            (null != I && t.length > I ? eG.intl.formatToPlainString(eG.t.ICT5S6, { maxLength: I }) : void 0) ?? b);
    return (0, i.jsx)(tA, {
        isEditing: n,
        preview: p,
        placeholder: h,
        editButtonRef: a,
        editButtonAriaLabel: x,
        onStartEditing: o,
        className: y,
        wrapperRef: u,
        onBlur: d,
        onKeyDown: c,
        previewErrorMessage: C,
        previewWarningMessage: j,
        input: (0, i.jsx)(tI.f, {
            editorRef: g,
            label: A,
            hideLabel: !0,
            value: n ? r : l,
            onChange: s,
            onFocus: f,
            onKeyDown: m,
            maxLength: I,
            error: C,
            helperText: j,
            placeholder: h,
            emojiPickerIntention: v,
        }),
    });
}
let tj = [
    { value: "HAIKU", label: () => eG.intl.string(eG.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eG.intl.string(eG.t.CXkR1L) },
    { value: "TELL_US", label: () => eG.intl.string(eG.t.eutr4P) },
    { value: "FUN_FACT", label: () => eG.intl.string(eG.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eG.intl.string(eG.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eG.intl.string(eG.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eG.intl.string(eG.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eG.intl.string(eG.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eG.intl.string(eG.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eG.intl.string(eG.t.u7WCGI) },
];
var ty = n(307731);
function tC(e) {
    let t,
        n,
        r,
        s,
        o,
        { displayProfile: u, className: d } = e,
        c = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        g = u?.guildId != null,
        f = u?.guildId ?? null,
        m = $.Ay.canUsePremiumProfileCustomization(c),
        p = (0, tf.U)({ location: "user_profile_modal_edit" }),
        {
            value: h,
            previewValue: x,
            onCommit: A,
        } = ((t = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t).pendingBio)),
        (s = n ? u?._guildMemberProfile?.bio : u?.bio),
        (o = u?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? s ?? "",
            previewValue: o,
            onCommit: l.useCallback(
                (e) => {
                    (0, tg.p)({ bio: e.trim(), guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        I = (function (e) {
            let {
                    isEditing: t,
                    wrapperRef: n,
                    handleCommit: i,
                    ...r
                } = (function (e) {
                    let { value: t, onCommit: n, disabled: i = !1 } = e,
                        [r, s] = l.useState("idle"),
                        [o, u] = l.useState(t),
                        d = "editing" === r && !i,
                        c = (0, a.bG)([tp.Ay], () => tp.Ay.useReducedMotion),
                        g = l.useRef(null),
                        f = l.useRef(null),
                        m = l.useRef(null),
                        p = l.useRef(!1),
                        h = l.useRef(!0),
                        x = l.useRef(!1),
                        A = l.useCallback(() => {
                            ((h.current = !1), u(t), s("editing"));
                        }, [t]),
                        I = l.useRef(o);
                    l.useLayoutEffect(() => {
                        I.current = o;
                    });
                    let v = l.useCallback(() => {
                            h.current || ((h.current = !0), n(I.current), s("done"));
                        }, [n]),
                        b = l.useCallback(() => {
                            h.current || ((h.current = !0), s("done"));
                        }, []);
                    (l.useEffect(() => {
                        "done" === r && (p.current && g.current?.focus({ preventScroll: !0 }), (p.current = !1));
                    }, [r]),
                        l.useEffect(() => {
                            let e = x.current;
                            ((x.current = !1),
                                d &&
                                    (f.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                                    e || m.current?.focus({ preventScroll: !0 })));
                        }, [d, c]));
                    let j = l.useCallback(
                            (e) => {
                                d &&
                                    "Escape" === e.key &&
                                    (e.preventDefault(), e.stopPropagation(), (p.current = !0), b());
                            },
                            [d, b],
                        ),
                        y = l.useCallback(() => {
                            ((p.current = !0), v(), m.current?.blur());
                        }, [v]),
                        C = l.useCallback(() => {
                            ((p.current = !0), b(), m.current?.blur());
                        }, [b]),
                        E = l.useCallback(() => {
                            d || ((x.current = !0), A());
                        }, [d, A]);
                    return {
                        isEditing: d,
                        committedValue: t,
                        editedValue: o,
                        setEditedValue: u,
                        onCommit: n,
                        editButtonRef: g,
                        wrapperRef: f,
                        inputRef: m,
                        handleStartEditing: A,
                        handleCommit: v,
                        handleCancel: b,
                        onInputFocus: E,
                        onInputKeyDown: l.useCallback(
                            (e) => {
                                "Enter" !== e.key || e.shiftKey
                                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), C())
                                    : (e.preventDefault(), y());
                            },
                            [y, C],
                        ),
                        onContainerKeyDown: j,
                    };
                })(e),
                s = l.useCallback(
                    (e) =>
                        (function (e, t) {
                            if (t?.contains(e)) return !0;
                            let n = tv(t),
                                i = n?.getAttribute("aria-controls");
                            return null != i && null != e.closest(`#${i}`);
                        })(e, n.current),
                    [n],
                );
            l.useEffect(() => {
                if (!t) return;
                let e = n.current?.ownerDocument ?? document;
                function l(e) {
                    (0, tm.vq)(e.target) && !s(e.target) && i();
                }
                return (e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l));
            }, [t, n, s, i]);
            let o = l.useCallback(
                (e) => {
                    if (!t) return;
                    let l = e.relatedTarget;
                    !(0, tm.vq)(l) || s(l) || (null == tv(n.current) && i());
                },
                [t, s, i, n],
            );
            return { isEditing: t, wrapperRef: n, handleCommit: i, ...r, onBlur: o };
        })({ value: h, onCommit: A }),
        v = !(0, ts.uJ)(x),
        b = (0, a.bG)([eb.A], () => eb.A.getErrors(f)),
        j = (0, tc.EC)(f),
        y = b.bio?.[0],
        E = j?.bio?.[0],
        S = l.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * tj.length)), tj[e]);
        }, []),
        N = g ? eG.intl.string(eG.t.yPJ9xr) : S.label();
    return !g || m
        ? (0, i.jsx)(tb, {
              ...I,
              className: d,
              preview: v ? (0, i.jsx)(ta.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eG.intl.string(eG.t.lO3n7a),
              label: eG.intl.string(eG.t["YWo+Zd"]),
              emojiPickerIntention: ty.EmojiIntention.PROFILE,
              maxLength: p,
              error: y,
              warning: E,
          })
        : v
          ? (0, i.jsx)(ta.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var tE = n(430626);
function tS(e) {
    let { currentUser: t, displayProfile: n, canEditInPlace: l } = e,
        { context: r } = (0, J.NJ)(),
        s = n?.bio,
        a = !(0, ts.uJ)(s),
        o = n?.guildId != null,
        u = o && $.Ay.canUsePremiumProfileCustomization(t),
        d = u ? eG.intl.string(eG.t.jVai8N) : eG.intl.string(eG.t.ZzAR2Y),
        c = (0, $.TW)(t) ? eG.intl.string(eG.t["5AFxuK"]) : eG.intl.string(eG.t.N6ixy8),
        g = l && u ? { icon: tr.NitroWheelIcon, tooltip: c } : void 0;
    return (l || a) && (!l || !o || a || u)
        ? (0, i.jsx)(td, {
              heading: d,
              hideHeading: !l,
              headingIcon: g,
              children: l
                  ? (0, i.jsx)(tC, { displayProfile: n, className: tE.u })
                  : (0, i.jsx)(ta.A, { userBio: s, guildId: r?.guildId, setLineClamp: !1 }),
          })
        : null;
}
var tN = n(136969),
    tk = n(722868),
    tP = n(822775),
    tT = n(982985),
    tR = n(987307),
    tO = n(34188),
    tL = n(110676),
    t_ = n(993401);
function tw(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, j.Ay)(),
        r = l.useCallback(() => {
            (0, tL.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(t_.q3, {
        action: "VISIT_SHOP",
        icon: tO.ShopIcon,
        tooltipText: eG.intl.string(eG.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tD = n(508882),
    tM = n(102951);
function tG(e) {
    let {
            user: t,
            currentUser: n,
            guildId: l,
            originGuildId: r,
            channelId: s,
            displayProfile: a,
            relationshipType: o,
            onClose: u,
        } = e,
        d = (0, et.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, j.Ay)(),
        g = (0, tk.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: u }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, tM.J)({ userId: t.id }),
        h = f.length > 0 || m || p;
    return o === P.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? d
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tT.e, { userId: t.id, variant: "primary", disabled: !0 }),
                        (0, i.jsx)(tw, {}),
                        (0, i.jsx)(tR.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tP.A, { user: t, guildId: l, onClose: u }),
                        (0, i.jsx)(tw, {}),
                        (0, i.jsx)(tR.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(tT.e, { userId: t.id, onClose: tN.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(tR.Zt, { user: t, guildId: l, viewProfileItem: g }),
                  ],
              })
            : o === P.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tT.e, { userId: t.id, onClose: tN.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(tR.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === P.eA$.FRIEND || o === P.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tT.e, { userId: t.id, onClose: tN.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tD.Ef, { user: t, relationshipType: o, analyticsLocation: c }),
                          (0, i.jsx)(tR.Zt, { user: t, guildId: l, viewProfileItem: g }),
                      ],
                  })
                : o === P.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tT.e, { userId: t.id, onClose: tN.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tD.ES, {
                                user: t,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(tR.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tD.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(tT.l, { userId: t.id, onClose: tN.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(tR.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    });
}
var tU = n(463156),
    tF = n(866665),
    tW = n(28863),
    tB = n(509434),
    tV = n(307301),
    tH = n(149468),
    tz = n(643068),
    tY = n(522978),
    tK = n(129230),
    tX = n(486020),
    tq = n(889558),
    tZ = n(783419);
let t$ = "User Profile Modal V2";
function tJ(e) {
    let t = eu.A.get(e);
    ((0, tY.A)({ platformType: t.type, location: t$ }),
        tK.default.track(P.HAw.ACCOUNT_LINK_STEP, {
            previous_step: t$,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function tQ() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: tJ, stackingBehavior: "stack" });
}
function t0(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, el.An)(r[tZ.pK.CREATED_AT], n),
        a = eu.A.get((0, tz.ML)(t.type));
    return (0, i.jsx)(t2, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tF.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eH.E, { variant: "body-sm/normal", className: tn.GW, children: t.name }),
                  })
                : (0, i.jsx)(tW.Anchor, {
                      href: e,
                      className: tn.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eG.intl.string(eG.t.q5jLJB)}`
                              : `${t.name}, ${eG.intl.string(eG.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, tH.zV)(P.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, tq.h)({ href: e, trusted: a?.type !== P.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: tn.vi,
                          children: [
                              (0, i.jsx)(tF.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eH.E, {
                                      variant: "body-sm/normal",
                                      className: tn.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tB.LinkExternalSmallIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tn.wP,
                              }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return t.type === P.fg2.REDDIT
                ? (0, e9.xE)(r)
                : t.type === P.fg2.STEAM
                  ? (0, e9.dy)(r)
                  : t.type === P.fg2.LETTERBOXD
                    ? (0, e9.uq)(r)
                    : t.type === P.fg2.BLUESKY || t.type === P.fg2.MASTODON || t.type === P.fg2.TWITTER
                      ? (0, e9.ED)(r)
                      : t.type === P.fg2.PAYPAL
                        ? (0, e9.gZ)(r)
                        : t.type === P.fg2.EBAY
                          ? (0, e9.ub)(r)
                          : t.type === P.fg2.TIKTOK
                            ? (0, e9.HU)(r)
                            : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function t1(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = tX.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(t2, {
        renderAccountName: function () {
            return (0, i.jsx)(tF.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eH.E, {
                    variant: "body-sm/normal",
                    className: tn.GW,
                    children: n.profile.username,
                }),
            });
        },
        renderMetadata: function () {
            return null;
        },
        platformIcon: r,
        platformName: l.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function t2(e) {
    let {
        renderAccountName: t,
        renderMetadata: n,
        platformName: l,
        platformIcon: r,
        createdAtDate: a,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, i.jsxs)("li", {
        className: tn.FI,
        children: [
            (0, i.jsx)(tF.m, {
                __unsupportedReactNodeAsText: l,
                children: (0, i.jsx)("div", {
                    className: tn.k_,
                    children: (0, i.jsx)("img", {
                        alt: eG.intl.formatToPlainString(eG.t.rtm15P, { name: l }),
                        className: s()(tn.tV, o ? tn.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tn.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, i.jsx)(eH.E, {
                                    variant: "body-xs/normal",
                                    children: eG.intl.format(eG.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: tn.yu, children: n() }),
                ],
            }),
        ],
    });
}
function t5(e) {
    let { connections: t, applicationIdentities: n, userId: l, allowEditing: r, className: o } = e,
        u = (0, a.bG)([er.default], () => er.default.locale);
    if (!r && 0 === t.length && 0 === n.length) return null;
    let d = t.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: s()(tn.kL, o),
        children: [
            d &&
                (0, i.jsxs)("ul", {
                    className: tn.V,
                    children: [
                        t.map((e) => (0, i.jsx)(t0, { account: e, userId: l, locale: u }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(t1, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e6.D, {
                    className: tn.qG,
                    onClick: tQ,
                    children: [
                        (0, i.jsx)(tV.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(eH.E, {
                            variant: "body-xs/medium",
                            color: "none",
                            children: eG.intl.string(eG.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var t6 = n(193885),
    t8 = n(408278),
    t9 = n(23722);
let t3 = { id: "default" },
    t7 = l.createContext(null),
    t4 = l.createContext(null);
function ne(e) {
    let { children: t } = e,
        [n, r] = l.useState(t3),
        [s, o] = l.useState(null),
        u = (0, t9.A)((e) => {
            r(e);
        }),
        d = l.useCallback(() => {
            r(t3);
        }, []),
        c = (0, a.bG)([C.default], () => $.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        g = c ? t3 : n,
        f = !c && s?.id === "premiumTryItOut",
        m = l.useCallback(() => {
            o(g);
        }, [g]),
        p = l.useMemo(
            () => ({ selectedPanel: g, readyPanel: s, handlePanelTransitionComplete: m, navigate: u, goBack: d }),
            [g, s, m, u, d],
        );
    return (0, i.jsx)(t4.Provider, { value: f, children: (0, i.jsx)(t7.Provider, { value: p, children: t }) });
}
function nt() {
    let e = l.useContext(t4);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function nn() {
    let {
        selectedPanel: e,
        readyPanel: t,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    } = (function () {
        let e = l.useContext(t7);
        if (null == e)
            throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
        return e;
    })();
    return {
        selectedPanel: e,
        readyPanel: t,
        initialTarget: t?.initialTarget ?? null,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    };
}
var ni = n(194261),
    nl = n(789645),
    nr = n(534514),
    ns = n(805251),
    na = n(821609),
    no = n(39623),
    nu = n(890377),
    nd = n(517461),
    nc = n(465794),
    ng = n(468450),
    nf = n(462887),
    nm = n(765178),
    np = n(736653),
    nh = n(461797),
    nx = n(469054),
    nA = n(601298),
    nI = n(207803);
function nv() {
    let e = (0, np.Ay)(),
        t = (0, nf.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nh.Wt)(e);
                (0, nI.w5)({
                    banner: (0, nA.X)({
                        assetOrigin: nx.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: t ? n.themeColors.light : n.themeColors.dark,
                    displayNameStyles: n.displayNameStyles,
                    lastPreset: e,
                });
            },
            [t],
        );
    return (
        l.useEffect(() => {
            eb.A.hasTryItOutChanges() || n((0, nh.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = eb.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nh.B$)(e),
                i = (0, nh.Wt)(t);
            (tK.default.track(P.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                nm.O.announce(eG.intl.formatToPlainString(eG.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nb = n(487233),
    nj = n(999618),
    ny = n(317097),
    nC = n(602853),
    nE = n(265872),
    nS = n(508274),
    nN = n(654107),
    nk = n(930349);
function nP(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nC.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nN.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([eb.A, ee.A], () => ({
            pendingAccentColor: eb.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: ee.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, ny.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, tg.p)({ accentColor: e }), []);
    return (0, i.jsx)(nE.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nS.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nk.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eG.intl.string(eG.t["/X3fkf"]),
                editButtonA11yLabel: eG.intl.string(eG.t.kRMJ1v),
                currentValueA11yLabel: (0, ny.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, ny.Hl)(c) } }),
            }),
    });
}
var nT = n(841183),
    nR = n(450373),
    nO = n(317139);
function nL(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nO.o, style: { backgroundColor: t } });
}
function n_(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: nO._ });
}
function nw(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, nC.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, ny.LX)(s),
        { hex: o } = (0, nR.A)(a),
        u = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != u ? (0, i.jsx)(n_, { src: u, imageDescription: r }) : (0, i.jsx)(nL, { backgroundColor: o });
}
function nD(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eG.intl.string(eG.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(nk.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eG.intl.string(eG.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nw, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
    });
}
var nM = n(569059);
function nG(e) {
    let { userId: t, guildId: n, disabled: r, errorMessageId: s } = e,
        a = l.useRef(null),
        {
            displayProfile: o,
            pendingBanner: u,
            bannerChange: d,
            currentValueA11yLabel: c,
            currentProfileBanner: g,
            hasMainProfileFallback: f,
        } = (function (e, t) {
            let n = (0, en.Ay)(e, t),
                {
                    pendingBanner: i,
                    mainProfileBanner: l,
                    currentProfileBanner: r,
                } = (0, ei.cf)(
                    [eb.A, C.default, ee.A],
                    () => ({
                        pendingBanner: eb.A.getPendingChanges(t ?? void 0).pendingBanner,
                        mainProfileBanner: C.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != t ? ee.A.getGuildMemberProfile(e, t)?.banner : ee.A.getUserProfile(e)?.banner,
                    }),
                    [t, e],
                ),
                s = null != t,
                a = s && (n?.isUsingGuildMemberBanner() ?? !1),
                o = null === i;
            return {
                displayProfile: n,
                pendingBanner: i,
                bannerChange: o && s && !a ? void 0 : i,
                currentValueA11yLabel: (0, nT.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        m = (0, eA.Ac)(u, g)
            ? {
                  onClick: () => (0, ng.rM)(null, g, (e) => (0, tg.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eG.intl.string(f ? eG.t.jHlJNS : eG.t.tT9n7D),
              }
            : void 0,
        p = (0, nM.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nD, {
        buttonRef: a,
        displayProfile: o,
        bannerChange: d,
        currentValueA11yLabel: c,
        variant: "square",
        affordance: m,
        onClick: p,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: s,
    });
}
var nU = n(259065),
    nF = n(922301),
    nW = n(16371),
    nB = n(523312);
let nV = "heading-xl/semibold";
function nH(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nB.MC, { [nB.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eH.E, {
                      variant: nV,
                      children: (0, i.jsx)(nW.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nF.G.ANIMATED : nF.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eH.E, { variant: nV, className: nB.kr, children: t }),
    });
}
function nz(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eG.intl.string(eG.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(nk.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eG.intl.string(eG.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(nH, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
    });
}
function nY(e) {
    let { user: t, guildId: n, disabled: r, errorMessageId: s, onOpen: o } = e,
        { analyticsLocations: u } = (0, j.Ay)(),
        d = null != n,
        c = (0, a.bG)([ev.Ay], () => (null != n ? (ev.Ay.getMember(n, t.id)?.nick ?? null) : null)),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null),
        f = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingGlobalName),
        m = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: h,
            pendingDisplayNameStyles: x,
        } = (0, eA.B0)(t, n ?? void 0),
        A = d ? h : p,
        I = void 0 !== x,
        v = null === x,
        b = d && null != p,
        y = (0, eA.lw)({ pendingValue: x, userValue: p, guildValue: h, guildId: n ?? void 0 }),
        E = (0, eA.lw)({ pendingValue: d ? m : f, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? t.username,
        S = I ? null != x : null != A,
        N =
            null != y && S
                ? {
                      onClick: () => (0, tg.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: b ? "reset" : "remove",
                      accessibleLabel: eG.intl.string(b ? eG.t.en3ogK : eG.t["Wqmi/h"]),
                  }
                : void 0,
        k = l.useCallback(() => {
            (o?.(), (0, nU.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(nz, {
        affordance: (!v && (I || null != A)) || b ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nT.I9)(y),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: y,
        disabled: r,
    });
}
var nK = n(450232),
    nX = n(89851);
function nq(e) {
    let { heading: t, children: n, disabled: l = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, i.jsxs)("div", {
        className: nX.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(nX.Pf, { [nX.r9]: l }),
                children: [
                    (0, i.jsx)(nr.D, {
                        className: nX.DV,
                        variant: "body-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    r && (0, i.jsx)(nK.A, { className: nX.IX, size: "xs", color: "inherit", disabled: l }),
                    null != a && (0, i.jsx)("span", { className: nX.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nZ(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: nX.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.CircleErrorIcon, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eH.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var n$ = n(887988),
    nJ = n(366010),
    nQ = n(674658),
    n0 = n(617061),
    n1 = n(203632),
    n2 = n(536572);
let n5 = new Set(),
    n6 = 0;
var n8 = n(993408),
    n9 = n(841702),
    n3 = n(515718),
    n7 = n(94039);
function n4(e) {
    "" !== e.thumbnailPreviewSrc && (0, n3.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var ie = n(599752),
    it = n(249360);
let ii =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    il =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function ir(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, np.Ay)(),
        d = (0, nJ.M)(u) ? ii : il,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n9.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, n8.wo)(r, i), [r, i]),
                a = (0, n7.A)({ enabled: t, isInteracting: n, items: s, preload: n4 });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((n6 += 1), n5.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: ie.ti,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: ie.QQ }),
                f?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(ie.yY, { [it.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(O.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: n1.HL.FromStart,
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
function is(e) {
    let { user: t, guildId: n, disabled: r, variant: s = "full-height-bar" } = e,
        o = l.useRef(null),
        { analyticsLocations: u } = (0, j.Ay)(),
        d = null != n,
        c = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
        g = (0, eA.N2)({ user: t }),
        f = (0, eA.N2)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, eA.nZ)(n ?? void 0),
        p = void 0 !== m,
        h = null === m || (!p && null == f),
        x = d && null != g,
        A = (0, eA.lw)({ pendingValue: m, userValue: g, guildValue: f, guildId: n ?? void 0 }),
        { product: I } = (0, nQ.q)(A?.skuId),
        v = p ? null != m : null != f,
        b =
            null != A && v
                ? {
                      onClick: () => (0, tg.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eG.intl.string(x ? eG.t["SQy/Po"] : eG.t.uMuafO),
                  }
                : void 0,
        y = l.useCallback(() => {
            (0, n0.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(nk.A, {
        buttonRef: o,
        affordance: h && !x ? "add" : b,
        variant: s,
        onClick: y,
        fieldA11yLabel: eG.intl.string(eG.t.wR5wOo),
        editButtonA11yLabel: eG.intl.string(eG.t["/6nv6N"]),
        currentValueA11yLabel: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eG.intl.string(eG.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eG.intl.string(i ? eG.t["1M4m8w"] : eG.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, n2.VG)(I), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(ir, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var ia = n(163697),
    io = n(515727),
    iu = n(746002);
function id(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, iu.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: iu.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, n3.NN)(n).catch(() => {});
        });
}
var ic = n(715196);
function ig(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function im(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, np.Ay)(),
        d = (0, nJ.M)(u) ? ii : il,
        c = (0, _.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n9.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, n8.MG)(r, i), [r, i]);
            return (0, n7.A)({ enabled: t, isInteracting: n, items: s, preload: id });
        })({ enabled: n && !r && !o, isInteracting: a }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != m ? (0, ia.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != m &&
                (0, i.jsx)("div", {
                    className: s()(ic.hm, h, { [it.O]: f }),
                    style: p,
                    "aria-hidden": f,
                    children: (0, i.jsx)(D.A, { frame: m, filterLayer: ig, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(ic.ti, { [ic.yT]: null == m }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: ic.QQ, draggable: !1 }),
            }),
        ],
    });
}
function ip(e) {
    let { user: t, guildId: n, disabled: r } = e,
        s = l.useRef(null),
        { analyticsLocations: o } = (0, j.Ay)(),
        u = null != n,
        d = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
        c = (0, eA.Xf)({ user: t }),
        g = (0, eA.Xf)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileFrame: f } = (0, eA.Tu)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        h = u && null != c,
        x = (0, eA.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: A } = (0, nQ.q)(x?.skuId),
        I = m ? null != f : null != g,
        v =
            null != x && I
                ? {
                      onClick: () => (0, tg.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eG.intl.string(h ? eG.t.j6hZyM : eG.t.nQBruk),
                  }
                : void 0,
        b = l.useCallback(() => {
            (0, io.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(nk.A, {
        buttonRef: s,
        affordance: p && !h ? "add" : v,
        variant: "square",
        onClick: b,
        fieldA11yLabel: eG.intl.string(eG.t.GWrZOd),
        editButtonA11yLabel: eG.intl.string(eG.t["oTSa/q"]),
        currentValueA11yLabel: (function (e) {
            let { profileFramePreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eG.intl.string(eG.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eG.intl.string(i ? eG.t.yFeGB5 : eG.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, n2.VG)(A), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(im, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var ih = n(684732),
    ix = n(498596),
    iA = n(871524);
function iI(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, ny.Hl)(t)}, ${(0, ny.Hl)(n)})`;
    return (0, i.jsx)("div", { className: iA.D7, style: { background: r }, children: l });
}
function iv(e) {
    let { color: t } = e,
        n = (0, ny.Hl)(t),
        l = (0, ny.bJ)(t, 0xffffff) < ix.Tr.NonText;
    return (0, i.jsx)("div", {
        className: iA.OS,
        children: (0, i.jsx)("div", { className: s()(iA.Hy, { [iA.rY]: l }), style: { backgroundColor: n } }),
    });
}
function ib(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e6.D, {
        ...a,
        innerRef: s ?? o,
        className: iA.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(iv, { color: t }),
    });
}
function ij(e) {
    let {
        color: t,
        ariaLabel: n,
        ariaDescribedBy: l,
        suggestedColors: r,
        disabled: s,
        isOpen: a,
        onRequestOpen: o,
        onRequestClose: u,
        onSelect: d,
        buttonRef: c,
    } = e;
    return (0, i.jsx)(nE.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: u,
        renderPopout: (e) => (0, i.jsx)(nS.VN, { ...e, value: t, onChange: d, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(ib, {
                color: t,
                onClick: r,
                disabled: s,
                buttonRef: c,
                "aria-label": n,
                "aria-describedby": l,
                ...a,
            });
        },
    });
}
function iy(e) {
    let {
            fieldA11yLabel: t,
            primaryColor: n,
            secondaryColor: r,
            onSelectPrimaryColor: s,
            onSelectSecondaryColor: a,
            suggestedColors: o,
            disabled: u = !1,
            deleteButton: d,
            variant: c = "square",
            initialOpenPopout: g,
        } = e,
        [m, p] = l.useState(null),
        h = l.useRef(null),
        x = l.useRef(null),
        A = (0, ny.Hl)(n),
        I = (0, ny.Hl)(r),
        v = l.useId(),
        b = l.useId();
    l.useEffect(() => {
        if (null == g) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === g ? h : x;
            (e.current?.focus(), p(g));
        });
        return () => cancelAnimationFrame(e);
    }, [g]);
    let j =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      (d.onClick(), h.current?.focus());
                  },
              }
            : void 0;
    return (0, i.jsxs)(nk.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: u,
        deleteButton: j,
        children: [
            (0, i.jsx)(f.A, { id: v, children: eG.intl.formatToPlainString(eG.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(f.A, { id: b, children: eG.intl.formatToPlainString(eG.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(iI, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(ij, {
                        color: n,
                        ariaLabel: eG.intl.string(eG.t["1PvTpO"]),
                        ariaDescribedBy: v,
                        suggestedColors: o,
                        onSelect: s,
                        disabled: u,
                        isOpen: "theme-primary" === m,
                        onRequestOpen: () => p("theme-primary"),
                        onRequestClose: () => p(null),
                        buttonRef: h,
                    }),
                    (0, i.jsx)(ij, {
                        color: r,
                        ariaLabel: eG.intl.string(eG.t.stG76C),
                        ariaDescribedBy: b,
                        suggestedColors: o,
                        onSelect: a,
                        disabled: u,
                        isOpen: "theme-secondary" === m,
                        onRequestOpen: () => p("theme-secondary"),
                        onRequestClose: () => p(null),
                        buttonRef: x,
                    }),
                ],
            }),
        ],
    });
}
function iC(e) {
    let { user: t, guildId: n, disabled: r = !1 } = e,
        s = (0, en.Ay)(t.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: u,
            pendingAvatar: d,
        } = (0, a.cf)([eb.A, ee.A], () => {
            let e = eb.A.getPendingChanges(n ?? void 0),
                i = ee.A.getUserProfile(t.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (ee.A.getGuildMemberProfile(t.id, n)?.themeColors ?? null) : i,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== u ? u : o,
        g = (0, eI.V7)({ userId: t.id, image: d }),
        { primaryColor: f, secondaryColor: m } = (0, es.A)({
            user: t,
            displayProfile: s,
            pendingThemeColors: u,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, nC.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nN.rh)(x, p, !1),
        I = l.useCallback(
            (e) => {
                (0, tg.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, ih.l)(u, o)
                ? {
                      onClick: () => (0, tg.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eG.intl.string(eG.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, i.jsx)(iy, {
              fieldA11yLabel: eG.intl.string(eG.t.DMeO2X),
              primaryColor: f,
              secondaryColor: m,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && I([e, m]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && I([f, e]);
              },
              suggestedColors: A,
              disabled: r,
              deleteButton: v,
          });
}
var iE = n(629985);
function iS(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(m.F, { children: (0, i.jsx)("div", { className: s()(iE.k, { [iE.V]: n }), children: t }) });
}
var iN = n(516521),
    ik = n(424290);
function iP(e) {
    let { children: t } = e;
    return (0, i.jsx)(iN.zC, { className: ik.X, children: (0, i.jsx)("div", { className: ik.Q, children: t }) });
}
var iT = n(77528),
    iR = n(811611),
    iO = n(976860),
    iL = n(38145);
function i_() {
    return l.useCallback(() => {
        ((0, iO.pX)(P.BVt.NITRO_HOME), (0, iL.M)());
    }, []);
}
var iw = n(423814),
    iD = n(511484),
    iM = n(682901);
function iG(e) {
    let t = (0, a.bG)([C.default], () => $.Ay.isPremium(C.default.getCurrentUser())),
        n = (0, iw.O)();
    return t
        ? eG.intl.string(eG.t.AfRWI8)
        : (0, iD.U9)(n, iM.pe.TIER_2) && n?.discount.amount != null
          ? eG.intl.formatToPlainString(eG.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var iU = n(155053);
function iF() {
    let e = (0, iT.V)();
    return e?.subscriptionTrial?.skuId === iM.pe.TIER_2 ? e : null;
}
function iW() {
    let e = iG(eG.intl.string(eG.t.pj0XBN));
    return (0, i.jsx)(nc.A, { subscriptionTier: iM.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function iB(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = i_(),
        a = (0, $.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, iR.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: iU.nH,
        children: [
            (0, i.jsxs)("div", {
                className: iU.qf,
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: eG.intl.string(eG.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(ns.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eH.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eG.intl.format(eG.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(nc.A, {
                subscriptionTier: iM.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eH.E, { variant: "body-xs/normal", color: "text-muted", className: iU.u8, children: o }),
        ],
    });
}
function iV() {
    let e = iF();
    return null == e ? (0, i.jsx)(iW, {}) : (0, i.jsx)(iB, { trialOffer: e });
}
var iH = n(55619),
    iz = n(848717);
function iY() {
    return (0, i.jsxs)("div", {
        className: iz.k,
        children: [
            (0, i.jsx)(eH.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eG.intl.string(eG.t.JFY17v),
            }),
            (0, i.jsx)(na.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eG.intl.string(eG.t.R9GHya),
                onClick: function () {
                    return iH.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var iK = n(342866),
    iX = n(968475);
function iq(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eb.A], () => ({
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(iK.A, {
        ...n,
        fieldA11yLabel: eG.intl.string(eG.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nT.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? iX.$T : void 0,
    });
}
function iZ(e) {
    let { userId: t, ...n } = e,
        l = (0, en.Ay)(t),
        {
            pendingBanner: r,
            tryItOutBanner: s,
            currentProfileBanner: o,
        } = (0, a.cf)(
            [eb.A, ee.A],
            () => ({
                pendingBanner: eb.A.getPendingChanges().pendingBanner,
                tryItOutBanner: eb.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: ee.A.getUserProfile(t)?.banner,
            }),
            [t],
        ),
        u = void 0 !== s ? s : r,
        d = null != u ? u.description : void 0,
        c =
            null != d
                ? (function (e) {
                      if (e.length <= 25) return e;
                      let t = e.lastIndexOf(" ", 25),
                          n = t > 0 ? e.slice(0, t) : e.slice(0, 25);
                      return eG.intl.formatToPlainString(eG.t.OIhEjF, { truncatedText: n });
                  })(d)
                : (0, nT.ID)(u, o);
    return (0, i.jsx)(nD, {
        ...n,
        fieldA11yLabel: eG.intl.string(eG.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: d,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
    });
}
function i$(e) {
    let { user: t, ...n } = e,
        {
            pendingDisplayNameStyles: l,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: s,
        } = (0, a.cf)([eb.A], () => ({
            pendingDisplayNameStyles: eb.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: eb.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: eb.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, a.cf)([C.default], () => ({ globalName: C.default.getCurrentUser()?.globalName ?? null })).globalName,
        u = void 0 !== r ? r : l,
        d = (0, eA.lw)({ pendingValue: s, userValue: o }) ?? t.username;
    return (0, i.jsx)(nz, {
        ...n,
        fieldA11yLabel: eG.intl.string(eG.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        currentValueA11yLabel: (0, nT.I9)(u),
        shouldAlwaysAnimate: null == r,
    });
}
function iJ(e) {
    let t = (0, en.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: i,
            pendingAvatar: l,
        } = (0, a.cf)([eb.A], () => ({
            tryItOutThemeColors: eb.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, eI.V7)({ userId: e.id, image: void 0 !== i ? i : l }),
        { primaryColor: s, secondaryColor: o } = (0, es.A)({
            user: e,
            displayProfile: t,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function iQ(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = iJ(t),
        u = (0, nC.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nN.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, nI.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iy, {
              fieldA11yLabel: eG.intl.string(eG.t["/WsW/1"]),
              variant: "full-height-bar",
              primaryColor: r,
              secondaryColor: s,
              onSelectPrimaryColor: (e) => {
                  (o?.[0] == null || e !== o[0]) && g([e, s]);
              },
              onSelectSecondaryColor: (e) => {
                  (o?.[1] == null || e !== o[1]) && g([r, e]);
              },
              suggestedColors: c,
              initialOpenPopout: n,
          });
}
function i0(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = iJ(t),
        o = l.useId(),
        u = l.useId();
    if (null == s || null == a) return null;
    let d = (0, ny.Hl)(s),
        c = (0, ny.Hl)(a);
    return (0, i.jsxs)(nk.Y, {
        fieldA11yLabel: eG.intl.string(eG.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(f.A, { id: o, children: eG.intl.formatToPlainString(eG.t.v4X2kc, { colorHex: d }) }),
            (0, i.jsx)(f.A, { id: u, children: eG.intl.formatToPlainString(eG.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(iI, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(ib, {
                        color: s,
                        onClick: n,
                        "aria-label": eG.intl.string(eG.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(ib, {
                        color: a,
                        onClick: r,
                        "aria-label": eG.intl.string(eG.t.stG76C),
                        "aria-describedby": u,
                    }),
                ],
            }),
        ],
    });
}
var i1 = n(847081);
function i2(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = nn(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, j.Ay)();
            return l.useCallback(() => {
                (0, nU.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nM._)({ isPremiumTryItOut: !0, returnRef: s }),
        f = (0, nM.P)({ isPremiumTryItOut: !0, returnRef: a }),
        m = "edit" === n;
    return (
        l.useEffect(() => {
            if (m && !o.current) {
                switch (u) {
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
        }, [u, m, c, g, f]),
        (0, i.jsxs)("div", {
            className: i1.T,
            children: [
                (0, i.jsx)(nq, {
                    heading: eG.intl.string(eG.t.NEzEws),
                    children: (0, i.jsx)(i$, {
                        user: t,
                        buttonRef: r,
                        onClick: m ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nq, {
                    heading: eG.intl.string(eG.t.DMeO2X),
                    children: m
                        ? (0, i.jsx)(iQ, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(i0, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(nq, {
                    heading: eG.intl.string(eG.t.Vgdusv),
                    children: (0, i.jsx)(iZ, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: m ? f : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nq, {
                    heading: eG.intl.string(eG.t.Dt3ZUr),
                    children: (0, i.jsx)(iq, {
                        user: t,
                        buttonRef: s,
                        onClick: m ? g : () => d({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var i5 = n(847374),
    i6 = n(111159),
    i8 = n(682163),
    i9 = n(711014),
    i3 = n(941030),
    i7 = n(561392),
    i4 = n(286615),
    le = n(15626),
    lt = n(715022),
    ln = n(44482),
    li = n(470791);
function ll(e) {
    let {
            options: t,
            value: n,
            onSelectionChange: r,
            label: a,
            className: o,
            listboxClassName: u,
            disabled: d = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: m,
            children: p,
        } = e,
        {
            isOpen: h,
            setIsOpen: x,
            refs: A,
            floatingStyles: I,
            getReferenceProps: v,
            getFloatingProps: b,
            transitionStyles: j,
        } = (function () {
            let { reducedMotion: e } = l.useContext(eT.C),
                {
                    isOpen: t,
                    setIsOpen: n,
                    refs: i,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, i7.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, i4.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: t,
                setIsOpen: n,
                refs: i,
                floatingStyles: r,
                getReferenceProps: s,
                getFloatingProps: a,
                transitionStyles: e.enabled ? {} : u,
            };
        })(),
        { setFloating: y } = A,
        C = l.useContext(le._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        P = l.useRef(null),
        [T, R] = l.useState(null),
        O = null != T ? (0, lt.ZN)(N, T) : void 0,
        L = l.useRef(!1),
        _ = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, lt.fI)(e.value, [n])), [n, t]),
        D = l.useCallback(() => {
            d || x(!h);
        }, [d, x, h]),
        M = l.useCallback(
            (e) => {
                h && 0 === e.button && e.preventDefault();
            },
            [h],
        ),
        G = l.useCallback(() => {
            (x(!1), k.current?.focus());
        }, [x]),
        U = l.useCallback(
            (e) => {
                if (!P.current?.contains(e.relatedTarget)) {
                    if (_.current) {
                        _.current = !1;
                        return;
                    }
                    if (h && null != T) {
                        let e = t[T];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    h && x(!1);
                }
            },
            [h, T, t, r, x],
        ),
        F = l.useCallback(
            (e) => {
                if (d) return;
                let t = e[0];
                null != t && (r(t.value), G());
            },
            [d, r, G],
        ),
        { activeIndex: W, handleKeyDown: B } = (0, i3.l)(!0, t),
        V = l.useRef(null);
    l.useEffect(() => {
        let e = W !== V.current;
        ((V.current = W), null != W && e && (R(W), h || ((L.current = !0), x(!0))));
    }, [W, h, x]);
    let H = l.useCallback(
            (e) => {
                if (d) return;
                let n = t.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let t = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !h || e.altKey)) {
                            h || x(!0);
                            return;
                        }
                        R((e) => (null === e ? 0 : Math.min(e + t, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let i = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && h)) {
                            if (null != T) {
                                let e = t[T];
                                if (null != e && !0 !== e.disabled) {
                                    F([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!h) return void x(!0);
                        R((e) => (null === e ? 0 : Math.max(e - i, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !h)) return void x(!0);
                        if (null == T || T > n - 1) return;
                        {
                            let e = t[T];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        (R(0), h || ((L.current = !0), x(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        (R(n - 1), h || ((L.current = !0), x(!0)));
                        break;
                    case "Tab":
                        if (h && null != T) {
                            let e = t[T];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((_.current = !0), x(!1));
                        break;
                    case "Escape":
                        h && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [d, h, t, T, F, G, r, x, B],
        ),
        z = Math.max(
            t.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        Y = l.useRef(!1);
    l.useEffect(() => {
        c || !h || Y.current
            ? h || ((Y.current = !1), R(null), (L.current = !1))
            : ((Y.current = !0), L.current || R(t.length > 0 ? z : null), (L.current = !1), k.current?.focus());
    }, [c, h, z, t.length]);
    let K = {
        id: S,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": h ? N : void 0,
        "aria-expanded": h,
        "aria-activedescendant": O,
        "aria-disabled": !!d || void 0,
        "aria-labelledby": null != a ? `${E} ${S}` : void 0,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null || void 0,
        "aria-describedby": C?.describedById,
        onClick: D,
        onMouseDown: M,
        onKeyDown: H,
        onBlur: U,
    };
    return (0, i.jsxs)("div", {
        ref: (e) => {
            ((P.current = e), A.setReference(e));
        },
        className: o,
        ...v(),
        children: [
            null != a && (0, i.jsx)(f.A, { tag: "label", id: E, htmlFor: S, children: a }),
            p({ buttonRef: k, selectButtonProps: K }),
            !d &&
                h &&
                (0, i.jsx)("div", {
                    ref: y,
                    className: s()(li.S_, u),
                    ...b(),
                    style: { ...I, ...j },
                    children: (0, i.jsx)(i3.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: T,
                        renderListItem: (e) => (null != m ? m(e) : (0, i.jsx)(ln.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var lr = n(216384);
let ls = "MAIN_PROFILE";
function la(e) {
    let { guild: t } = e;
    return (0, i.jsx)(i8.Ay, { className: lr.$f, guild: t, size: i8.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function lo(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: lr.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: lr.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: lr.qL,
                children: [
                    (0, i.jsx)(eH.E, { variant: "body-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(eH.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
function lu(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e6.D, {
        innerRef: r,
        className: s()(lr.L5, { [lr.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eH.E, {
                variant: "body-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: lr.v9,
                children: n,
            }),
            (0, i.jsx)(i5.ChevronSmallDownIcon, {
                className: lr.u4,
                size: "sm",
                color: !0 === l ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function ld(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([i9.Ay], () => i9.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([Y.A], () => Y.A.getGuilds()),
        c = (0, a.bG)([te.A], () => {
            let e = te.A.getGuildId();
            return null == e || eb._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ev.Ay, i9.Ay], () => {
            let e = {};
            for (let t of i9.Ay.getFlattenedGuildIds()) {
                let n = ev.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        f = l.useMemo(() => {
            let e = {
                    id: ls,
                    label: eG.intl.string(eG.t["2p07FR"]),
                    value: ls,
                    leading: (0, i.jsx)(i6.ClydeIcon, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
                },
                t = n ?? c,
                l = u
                    .map((e) => {
                        if (e === t) return null;
                        let n = d[e];
                        return null == n
                            ? null
                            : {
                                  id: n.id,
                                  label: n.name,
                                  value: n.id,
                                  leading: (0, i.jsx)(la, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(eg.Vq),
                r = null != t ? d[t] : null;
            return null == r
                ? [e, ...l]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, i.jsx)(la, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        m = t ?? ls,
        p = f.find((e) => e.value === m) ?? f[0],
        x = l.useCallback(
            (e) => {
                let n = e === ls ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(ll, {
        className: lr.kL,
        label: eG.intl.string(eG.t.rki38K),
        listboxClassName: lr.yt,
        options: f,
        value: m,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(lo, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(lu, { leading: p.value === ls ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var lc = n(288490);
let lg = "profile-editing-nameplate-error",
    lf = "profile-editing-avatar-error",
    lm = "profile-editing-avatar-decoration-error",
    lp = "profile-editing-banner-error",
    lh = "profile-editing-display-name-style-error";
function lx(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lc.D0, t),
        children: (0, i.jsx)("div", { className: lc.ZN, children: (0, i.jsx)(ni.LockIcon, { size: "xs" }) }),
    });
}
function lA() {
    let [e, t] = (0, nd.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lc.X6,
              children: [
                  (0, i.jsx)(eH.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      children: eG.intl.string(eG.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e6.D, {
                      "aria-label": eG.intl.string(eG.t.rSe9ra),
                      className: lc.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(nl.XSmallIcon, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lI() {
    let e = i_(),
        t = iG(eG.intl.string(eG.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lc.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lc.tm,
                children: [
                    (0, i.jsx)(nr.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: eG.intl.string(eG.t.bO0TOe),
                    }),
                    (0, i.jsx)(eH.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: eG.intl.format(eG.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(nc.A, { subscriptionTier: iM.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lx, { className: lc.nd }),
        ],
    });
}
function lv() {
    return (0, i.jsx)(eH.E, {
        variant: "body-xs/normal",
        color: "text-subtle",
        className: lc.BJ,
        "aria-hidden": !0,
        children: eG.intl.format(eG.t.kYv9DM, {
            nitroIconHook: () =>
                (0, i.jsx)(tr.NitroWheelIcon, { size: "xxs", color: "currentColor", className: lc.qp }),
        }),
    });
}
function lb(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(nq, {
        heading: eG.intl.string(eG.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(n$.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lg : void 0 }),
            (0, i.jsx)(nZ, { id: lg, message: r }),
        ],
    });
}
function lj(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(nq, {
        heading: eG.intl.string(eG.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nb.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lf : void 0 }),
            (0, i.jsx)(nj.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lm : void 0 }),
            (0, i.jsx)(nZ, { id: lf, message: (0, ng.d3)(r) }),
            (0, i.jsx)(nZ, { id: lm, message: s }),
        ],
    });
}
function ly(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eD.kn)(l ? [] : [ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, i.jsxs)(nq, {
        heading: eG.intl.string(eG.t.NEzEws),
        disabled: l,
        showNitroIcon: !0,
        badge: o
            ? (0, i.jsx)("div", {
                  className: lc.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(ns.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: [
            (0, i.jsx)(nY, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lh : void 0,
                onOpen: o ? () => a(eM.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(nZ, { id: lh, message: r }),
        ],
    });
}
function lC(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(nq, {
        heading: eG.intl.string(eG.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iC, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nG, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lp : void 0 }),
            (0, i.jsx)(nZ, { id: lp, message: (0, ng.d3)(s) }),
        ],
    });
}
function lE(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(nq, {
        heading: eG.intl.string(eG.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nP, { user: t, disabled: n }),
    });
}
function lS(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(nq, {
        heading: eG.intl.string(eG.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(is, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(ip, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lN = "premium-try-it-out-description";
function lk(e) {
    let { user: t } = e,
        n = i_(),
        { navigate: l } = nn();
    return (
        nv(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lN,
            className: lc.DX,
            children: [
                (0, i.jsx)(lx, { className: lc.x$ }),
                (0, i.jsxs)("div", {
                    className: lc.sb,
                    children: [
                        (0, i.jsx)(eH.E, {
                            id: lN,
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eG.intl.format(eG.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(na.$, {
                            variant: "primary",
                            size: "sm",
                            icon: no.EyeIcon,
                            text: eG.intl.string(eG.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(i2, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lP(e) {
    let {
            user: t,
            panelId: n,
            selectedGuildId: l,
            originGuildId: r,
            isLoading: s,
            isEditingDisabled: o,
            collapseButtonRef: u,
            onClosePanel: d,
            onSelectGuildId: c,
        } = e,
        g = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        f = (0, t9.A)(c),
        m = null != l,
        p = $.Ay.canUsePremiumProfileCustomization(t),
        h = m && !p,
        x = !p && !m,
        A = m && !p && !g,
        I = s || o,
        v = (0, a.bG)([eb.A], () => eb.A.getErrors(l)),
        b = v.nameplate?.[0] ?? v.nameplate_sku_id?.[0],
        j = v.avatar?.[0],
        y = v.avatar_decoration_sku_id?.[0],
        C = v.banner?.[0],
        E = v.display_name_font_id?.[0] ?? v.display_name_effect_id?.[0] ?? v.display_name_colors?.[0];
    return (0, i.jsxs)(iS, {
        hasGradientBackground: A,
        children: [
            (0, i.jsxs)("div", {
                className: lc.wx,
                children: [
                    (0, i.jsx)(tF.m, {
                        text: eG.intl.string(eG.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t8.K, {
                            buttonRef: u,
                            "aria-label": eG.intl.string(eG.t["l/A351"]),
                            icon: nu.DoubleChevronSmallRightIcon,
                            onClick: d,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(ld, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(iY, {})
                : (0, i.jsx)(iP, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              m && (p ? (0, i.jsx)(lA, {}) : (0, i.jsx)(lI, {})),
                              p && (0, i.jsx)(lv, {}),
                              (0, i.jsx)(lb, { user: t, guildId: l, disabled: I || h, errorMessage: b }),
                              (0, i.jsx)(lj, {
                                  user: t,
                                  guildId: l,
                                  disabled: I || h,
                                  avatarErrorMessage: j,
                                  avatarDecorationErrorMessage: y,
                              }),
                              p || m
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(ly, { user: t, guildId: l, disabled: I || h, errorMessage: E }),
                                            (0, i.jsx)(lC, {
                                                user: t,
                                                guildId: l,
                                                disabled: I || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: C,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lE, { user: t, disabled: I || h }),
                              (0, i.jsx)(lS, { user: t, guildId: l, disabled: I || h }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lk, { user: t }), (0, i.jsx)(iV, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lT = n(120692),
    lR = n(110654);
function lO(e) {
    return null;
}
function lL(e) {
    let { activeSlide: t, direction: n, onTransitionComplete: r, children: a } = e,
        o = new Map(a.map((e) => [e.props.id, e]));
    if (!o.has(t)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [u, c] = l.useState(t),
        [g, f] = l.useState(!1),
        m = "forwards" === n ? 1 : -1,
        p = (0, d.p)(
            t,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => f(!0),
                onRest: (e, n) => {
                    let { item: i } = n;
                    e.finished && i === t && (f(!1), i !== u && (c(t), r()));
                },
            },
            "respect-motion-settings",
        ),
        h = g || t !== u;
    return (0, i.jsx)("div", {
        className: s()(lR.kL, h && lR.ez),
        children: (0, i.jsx)("div", {
            className: lR.u4,
            children: p((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lT.animated.div,
                          {
                              className: lR.M6,
                              style: h
                                  ? { transform: e.offset.to((e) => `translate3d(${e * m * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: h || t !== u,
                              "aria-hidden": h || t !== u,
                              children: r.props.children,
                          },
                          l,
                      );
            }),
        }),
    });
}
var l_ = n(926321),
    lw = n(477155),
    lD = n(561243),
    lM = n(206697),
    lG = n(280406);
let lU = "shuffle-options-a11y-description";
function lF(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(na.$, {
                icon: l_.DiceIcon,
                text: eG.intl.string(eG.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": lU,
                fullWidth: !0,
            }),
            (0, i.jsx)(f.A, { id: lU, children: eG.intl.string(eG.t.bBRdiB) }),
        ],
    });
}
function lW(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = nv(),
        s = iF();
    return (0, i.jsxs)(iS, {
        children: [
            (0, i.jsxs)("div", {
                className: lG.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: lG.FS,
                        children: (0, i.jsx)(tF.m, {
                            text: eG.intl.string(eG.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(t8.K, {
                                buttonRef: l,
                                "aria-label": eG.intl.string(eG.t["4IYwrw"]),
                                icon: lw.ArrowSmallLeftIcon,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(nr.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: lG.R_,
                        children: eG.intl.string(eG.t.PxUx8e),
                    }),
                    (0, i.jsx)(eH.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: lG.Ij,
                        children: eG.intl.string(eG.t.X0ir7L),
                    }),
                    (0, i.jsx)(lF, { className: lG.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iP, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i2, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(iB, {
                                trialOffer: s,
                                onSubscribeClick: lM.t,
                                onSubscribeSuccess: lM.T,
                                onSubscribeClose: lD.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var lB = n(199016);
let lV = "user-profile-editing-panel",
    lH = "profile-modal-editing-panel-heading";
function lz(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tF.m, {
        text: eG.intl.string(eG.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e6.D, {
            innerRef: l,
            "aria-label": eG.intl.string(eG.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": lV,
            className: s()(lB.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(t6.PaintbrushThinIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function lY(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tF.m, {
            text: eG.intl.string(eG.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(t8.K, {
                buttonRef: l,
                "aria-label": eG.intl.string(eG.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": lV,
                icon: t6.PaintbrushThinIcon,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function lK(e) {
    let {
            selectedGuildId: t,
            originGuildId: n,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: u = !1,
            onClose: d,
            className: c,
            collapseButtonRef: g,
        } = e,
        p = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        { selectedPanel: h, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = nn(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == p)
        ? null
        : (0, i.jsx)("aside", {
              id: lV,
              "aria-labelledby": lH,
              className: s()(lB.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: lB.l$,
                  children: [
                      (0, i.jsx)(f.A, {
                          children: (0, i.jsx)(m.H, { id: lH, children: eG.intl.string(eG.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lL, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lO, {
                                  id: "default",
                                  children: (0, i.jsx)(lP, {
                                      panelId: lV,
                                      user: p,
                                      selectedGuildId: t,
                                      originGuildId: n,
                                      isLoading: o,
                                      isEditingDisabled: u,
                                      collapseButtonRef: g,
                                      onClosePanel: d,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, i.jsx)(lO, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(lW, { user: p, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var lX = n(425763),
    lq = n(447453),
    lZ = n(46653),
    l$ = n(783420),
    lJ = n(874402);
function lQ() {
    let e = nt(),
        { goBack: t } = nn(),
        n = iG(eG.intl.string(eG.t.pj0XBN));
    return (0, i.jsx)(l$.A, {
        subscriptionTier: iM.pe.TIER_2,
        onClick: lM.t,
        onSubscribeModalClose: (e) => {
            (e && (0, lM.T)(), (0, lD.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(lJ.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: eG.intl.string(eG.t.X0ir7L),
                a11yAnnounceOnShow: eG.intl.string(eG.t.X0ir7L),
                a11yAnnounceOnHide: eG.intl.string(eG.t.ZcyFYa),
                secondaryAction: { text: eG.intl.string(eG.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: r, icon: tr.NitroWheelIcon, variant: "expressive" },
            });
        },
    });
}
var l0 = n(803306),
    l1 = n(631670),
    l2 = n(682618),
    l5 = n(856383),
    l6 = n(234e3),
    l8 = n(159001),
    l9 = n(933725),
    l3 = n(188567),
    l7 = n(435911),
    l4 = n(646976),
    re = n(289173),
    rt = n(958805),
    rn = n(61881),
    ri = n(735321),
    rl = n(624826),
    rr = n(419490),
    rs = n(489496),
    ra = n(132319),
    ro = n(696016),
    ru = n(384377),
    rd = n(518477);
function rc(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, J.NJ)(),
        [r, s] = l.useState(!1),
        [o, u] = l.useState(!1),
        {
            widgetsToSave: d,
            changedWidgets: c,
            removedWidgets: g,
            hasUnsavedWidgets: f,
            canSaveWidgets: m,
        } = (function () {
            let e = (0, a.yK)([rn.A], () => rn.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rn.A], () => rn.A.getChangedWidgets()),
                n = (0, a.yK)([rn.A], () => rn.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rn.A], () => ({
                    hasUnsavedWidgets: rn.A.hasUnsavedChanges(),
                    canSaveWidgets: rn.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        p = (0, et.X)("UserProfileModalV2SaveBar"),
        {
            hasUnsavedProfileChanges: h,
            canSubmitProfileChanges: x,
            hasBadgeChangesToSave: A,
        } = (0, a.cf)([eb.A], () => ({
            hasUnsavedProfileChanges: eb.A.hasUnsavedChanges(),
            canSubmitProfileChanges: eb.A.canSubmit(),
            hasBadgeChangesToSave: (0, l6.gz)(eb.A.getPendingChanges()),
        })),
        I = p && h,
        v = f || I || A,
        b = !(f && !m) && (!p || x),
        j = l.useCallback(() => {
            (rt.A.clearPendingWidgets(), p ? (0, nI.XQ)() : A && (0, l6.Jp)());
        }, [p, A]),
        y = l.useCallback(async () => {
            if (p && !eb.A.canSubmit()) return;
            u(!0);
            let e = !0;
            if (A) {
                let t = eb.A.getPendingChanges(),
                    n = await (async function (e) {
                        let { displayOrder: t, hiddenBadges: n } = e,
                            i = {
                                ...(null != t ? { display_order: t } : {}),
                                ...(null != n ? { hidden_badges: n } : {}),
                            };
                        if (0 === Object.keys(i).length) return !0;
                        try {
                            return (
                                await E.Bo.patch({ url: P.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0
                            );
                        } catch (e) {
                            return (l5.A.captureException(e), !1);
                        }
                    })({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = C.default.getCurrentUser()?.id;
                    (null != e && (await (0, l0.eO)(e).catch(() => {})), await (0, l2.RS)(), (0, l6.Jp)());
                }
                e = n;
            }
            if (I)
                try {
                    if (null == t) {
                        let t = eb.A.getPendingChanges(),
                            n = (0, l7.Sk)(t),
                            i = (0, l7.yX)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, l1._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, rl.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l1.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, nI.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, nI.RE)());
                        }
                    } else {
                        let n = eb.A.getPendingChanges(t),
                            i = (0, l7.C5)(n),
                            l = (0, l7.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, l8.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, rl.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l1.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, nI.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, nI.RE)());
                        }
                    }
                    let n = (0, l7.yg)(eb.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, l9.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, l1.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    let e = (0, ri.BF)();
                    for (let t of (await rt.A.savePendingWidgets(d), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, re.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof l4.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof l4.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = rr.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, ra.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                !(async function (e, t) {
                                    try {
                                        await (0, rs.Yy)(e, { name: t });
                                    } catch (e) {
                                        ro.GU.warn(`Failed to sync profile clip title to the library: ${e}`);
                                    }
                                })(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, l1.x8)() : (0, ru.XA)(rd.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
        }, [p, I, A, f, d, c, g, n, t]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                (null != e && clearTimeout(e),
                    s(!0),
                    (e = setTimeout(() => {
                        s(!1);
                    }, 2500)));
            }
            return (
                l3._.subscribe(P.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (l3._.unsubscribe(P.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(lJ.$, {
            preventsPopoutDismiss: !0,
            isVisible: v,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: eG.intl.string(eG.t["/lQiX/"]),
            isEmphasized: r,
            a11yAnnounceOnShow: eG.intl.string(eG.t["0Y/qkL"]),
            secondaryAction: { text: eG.intl.string(eG.t.yBZMsQ), onClick: j, disabled: !v || o },
            primaryAction: { text: eG.intl.string(eG.t["R3BPH+"]), onClick: y, loading: o, disabled: !b || !v },
        })
    );
}
var rg = n(485745),
    rf = n(893757);
function rm() {
    let e = !(0, et.X)("useEditingFooterState"),
        t = (0, lX.VU)(),
        n = (0, rg.A)(e),
        i = nt();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function rp(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([lZ.default], () => lZ.default.getId() === t),
        u = rm(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rf.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(lq.S, { className: rf.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(lQ, {})
                        : "save" === d
                          ? (0, i.jsx)(rc, { guildId: n })
                          : null,
          })
        : null;
}
var rh = n(347805),
    rx = n(34011),
    rA = n(629403),
    rI = n(612630),
    rv = n(61426);
function rb(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rI.A)(t),
        [g, f] = l.useState(),
        [m, p] = l.useState(),
        h = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), f(e), o?.());
                    try {
                        await rA.A.updateNote(t, e);
                    } catch {
                        p(eG.intl.string(eG.t.F8FvUy));
                    }
                }
            },
            [t, c, o],
        ),
        A = d && null == h,
        I = l.useRef(null),
        v = l.useRef(!1);
    if (
        (l.useEffect(() => {
            !r || u || d || v.current || ((v.current = !0), I.current?.focus({ preventScroll: !0 }));
        }, [r, u, d]),
        u)
    )
        return null;
    let b =
        null != h && h.length > 0
            ? (0, i.jsx)(eH.E, { variant: "body-sm/normal", color: "text-default", className: rv.t, children: h })
            : null;
    return (0, i.jsx)("div", {
        className: s()(th.kL, n),
        children: (0, i.jsx)(rx.w, {
            inputRef: I,
            value: h ?? "",
            onCommit: x,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: !0,
            paddingBlock: "md",
            scrollIntoViewOnFocus: !0,
            preview: b,
            label: eG.intl.string(eG.t.PbMNh2),
            placeholder: A ? eG.intl.string(eG.t["WLKx/9"]) : eG.intl.string(eG.t.VBhOe2),
            maxLength: 256,
            disabled: A,
            error: m,
        }),
    });
}
var rj = n(793222);
function ry(e) {
    let { userId: t } = e,
        n = (0, eS.g)(),
        { trackUserProfileAction: l } = (0, J.NJ)(),
        r = (0, et.X)("UserProfileModalV2NotesSection"),
        s = r ? rb : rh.A;
    return (0, i.jsx)(td, {
        heading: eG.intl.string(eG.t["mQKv+v"]),
        scrollTargetId: rd.bk.NOTE,
        children: (0, i.jsx)(s, {
            userId: t,
            className: r ? rj.N : rj.w,
            autoFocus: n === rd.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rC = n(123292),
    rE = n(667242);
function rS(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: u } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            u && d.current?.focus();
        }, [u]),
        (0, i.jsx)("div", {
            className: rE.kL,
            children: (0, i.jsxs)("div", {
                className: rE.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rE.Kk, children: t }),
                    (0, i.jsx)(eH.E, { color: "text-strong", variant: "body-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rE.hP,
                            children: (0, i.jsx)(rC.Q, {
                                buttonRef: d,
                                variant: "primary",
                                textVariant: "body-sm/semibold",
                                text: r,
                                onClick: s,
                                disabled: a,
                            }),
                        }),
                ],
            }),
        })
    );
}
var rN = n(346055),
    rk = n(289873),
    rP = n(615019);
function rT(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && nm.O.announce(eG.intl.string(eG.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rN.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rP.f, t && rP.z),
                    children: n && (0, i.jsx)(rk.y, { type: rk.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rR = n(568602);
function rO(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([rn.A, eb.A], () => rn.A.hasUnsavedChanges() || eb.A.hasUnsavedChanges());
    l.useEffect(() => {
        c || (d.current = 1.4);
    }, [c]);
    let g = l.useCallback(() => {
        (null != u.current && (clearTimeout(u.current), (u.current = null)), r(!1));
    }, []);
    return (
        l.useEffect(() => {
            function e() {
                (o(d.current),
                    (d.current = Math.min(d.current + 2, 15)),
                    r(!0),
                    null != u.current && clearTimeout(u.current),
                    (u.current = setTimeout(() => {
                        (r(!1), (u.current = null));
                    }, 300)));
            }
            return (
                l3._.subscribe(P.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    l3._.unsubscribe(P.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(rR.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var rL = n(761508),
    r_ = n(329921),
    rw = n(945810),
    rD = n(50258);
let rM = { enabled: !1 },
    rG = { 0: rM, 1: { enabled: !0 } },
    rU = (0, rw.mj)({
        name: "2026-10-profile-default-tab-with-content",
        kind: "user",
        defaultConfig: rM,
        variations: rG,
    });
function rF(e) {
    let { location: t } = e;
    return (rU.useConfig({ location: t }), null);
}
var rW = n(695904),
    rB = n(573238),
    rV = n(107563),
    rH = n(517164),
    rz = n(290863),
    rY = n(894768),
    rK = n(146655),
    rX = n(489379);
function rq(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, rK.A)(t.id),
        { voiceChannel: u, voiceActivity: d } = (0, rX.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([rH.A], () => rH.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        f = (0, a.bG)([rY.A, rz.A], () => {
            let e = g ? rY.A.getStatus() : rz.A.getStatus(t.id);
            return e === P.clD.OFFLINE || e === P.clD.INVISIBLE;
        }),
        m = r.length > 0 || null != o,
        p = i?.private !== !0 && null == o && null == d && null != u,
        h = s.length > 0;
    return {
        live: r,
        recent: s,
        stream: o,
        voiceActivityChannel: p ? u : null,
        isFetching: c,
        isCurrentUser: g,
        hasCurrentActivity: !f && (m || p),
        hasRecentActivity: h,
    };
}
var rZ = n(939496),
    r$ = n(114212),
    rJ = n(975571),
    rQ = n(960549),
    r0 = n(637865),
    r1 = n(842241),
    r2 = n(287746),
    r5 = n(435558),
    r6 = n(534890),
    r8 = n(308528),
    r9 = n(780964),
    r3 = n(766075),
    r7 = n(92795);
let r4 = [
        () => eG.intl.string(eG.t.madJdE),
        () => eG.intl.string(eG.t.NYmfoP),
        () => eG.intl.string(eG.t.R2PaCg),
        () => eG.intl.string(eG.t.laSR8h),
        () => eG.intl.string(eG.t.DnsJE8),
    ],
    se = [
        () => eG.intl.string(eG.t.nFSbeE),
        () => eG.intl.string(eG.t.gTcxOz),
        () => eG.intl.string(eG.t["8T0wYj"]),
        () => eG.intl.string(eG.t.BIHl1g),
        () => eG.intl.string(eG.t["jhBm0+"]),
    ],
    st = [
        () => eG.intl.string(eG.t.AyMGXA),
        () => eG.intl.string(eG.t.aAFW7V),
        (e) => eG.intl.formatToPlainString(eG.t.h2g0cM, { name: e }),
        () => eG.intl.string(eG.t.rrYh58),
        () => eG.intl.string(eG.t["HX3K+F"]),
        () => eG.intl.string(eG.t["/yW3aY"]),
        () => eG.intl.string(eG.t["PmL/v0"]),
        () => eG.intl.string(eG.t.IALa3h),
        () => eG.intl.string(eG.t.HRcTFL),
        () => eG.intl.string(eG.t.NuCqPt),
        () => eG.intl.string(eG.t["M1tw+4"]),
        () => eG.intl.string(eG.t.UBm1y2),
        () => eG.intl.string(eG.t.Cu95PQ),
        () => eG.intl.string(eG.t["R/wFuh"]),
        () => eG.intl.string(eG.t.HQPAVT),
        () => eG.intl.string(eG.t.YolGh4),
    ],
    sn = [
        P.fg2.STEAM,
        P.fg2.PLAYSTATION,
        P.fg2.XBOX,
        P.fg2.TWITCH,
        P.fg2.BATTLENET,
        P.fg2.LEAGUE_OF_LEGENDS,
        P.fg2.EPIC_GAMES,
        P.fg2.RIOT_GAMES,
        P.fg2.ROBLOX,
        P.fg2.SPOTIFY,
        P.fg2.YOUTUBE,
        P.fg2.CRUNCHYROLL,
        P.fg2.BUNGIE,
    ];
function si(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: r7.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: r7.FS,
                children: [
                    (0, i.jsx)(nr.D, { variant: "heading-sm/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eH.E, { variant: "body-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function sl() {
    let e = eG.intl.string(eG.t.RnD2yZ),
        [t] = l.useState(() => ((0, r5.sample)(r4) ?? r4[0])());
    return (0, i.jsx)(si, { heading: e, bodyText: t });
}
function sr() {
    let e = eG.intl.string(eG.t.bFgqYJ),
        [t] = l.useState(() => ((0, r5.sample)(se) ?? se[0])());
    return (0, i.jsx)(si, { heading: e, bodyText: t });
}
function ss(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = q.Ay.getName(n, r, t),
        o = eG.intl.formatToPlainString(eG.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, r5.sample)(st) ?? st[0])(a)),
        d = l.useCallback(() => {
            (r8.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(si, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: r7.v0,
            children: (0, i.jsx)(t_.FD, { icon: r6.ChatIcon, text: eG.intl.string(eG.t["g33r/P"]), onClick: d }),
        }),
    });
}
function sa() {
    let e = (0, np.Ay)();
    return (0, i.jsx)("div", {
        className: r7.HU,
        children: sn.map((t, n) => {
            let l = eu.A.get(t);
            if (null == l) return null;
            let r = (0, nJ.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: r7.gj }, n);
        }),
    });
}
function so(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, r3.openUserSettings)(r9.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, r3.openUserSettings)(r9.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(si, {
        heading: eG.intl.string(eG.t.VB6LWY),
        bodyText: eG.intl.string(eG.t.KpjsU9),
        children: [
            (0, i.jsx)(sa, {}),
            (0, i.jsxs)("div", {
                className: r7.v0,
                children: [
                    (0, i.jsx)(t_.FD, { text: eG.intl.string(eG.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(t_.FD, { text: eG.intl.string(eG.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var su = n(131058);
function sd(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(su.gN, n), fade: !0, ...r, children: t });
}
var sc = n(587763);
function sg(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: r, channelId: s, onClose: a } = e,
        {
            live: o,
            recent: u,
            stream: d,
            voiceActivityChannel: c,
            isFetching: g,
            isCurrentUser: f,
            hasCurrentActivity: m,
            hasRecentActivity: p,
        } = rq({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return m || p || !g
        ? m || p || g
            ? (0, i.jsxs)(sd, {
                  className: sc.XG,
                  fade: !0,
                  children: [
                      m
                          ? (0, i.jsx)(td, {
                                heading: eG.intl.string(eG.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sc.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(r1.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: d,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(rQ.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        null != c &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(r2.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: c,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      p
                          ? (0, i.jsx)(td, {
                                heading: eG.intl.string(eG.t.jzgEoL),
                                introText: f
                                    ? eG.intl.format(eG.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tW.Anchor,
                                                  {
                                                      href: rJ.A.getArticleURL(P.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: rd.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sc.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(r0.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : f
              ? (0, i.jsx)(so, { onClose: a })
              : (0, i.jsx)(ss, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sc.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sc.kr,
                          children: [
                              (0, i.jsx)(r$.F, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(r$.F, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sf = n(163126),
    sm = n(913453),
    sp = n(229187),
    sh = n(702476),
    sx = n(503062),
    sA = n(393213);
function sI(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, J.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, sm.A)(t),
        g = (0, sf.A)();
    return (
        l.useEffect(() => {
            (0, sp.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sd, {
            className: sA.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sA.D$,
                                  children: [
                                      (0, i.jsx)(r$.F, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(r$.F, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(sl, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                sx.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sh.openUserProfileModal)({
                                                ...o,
                                                userId: l.id,
                                                sourceAnalyticsLocations: a,
                                            }));
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var sv = n(398590),
    sb = n(345942),
    sj = n(51943);
function sy(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, J.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sm.A)(t);
    return (0, i.jsx)(sd, {
        className: sA.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sA.Y7,
                              children: [
                                  (0, i.jsx)(r$.F, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(r$.F, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sj.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sb.u)(r.id), n(), (0, sv.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(sr, {}),
    });
}
var sC = n(885574),
    sE = n(781300),
    sS = n(840387),
    sN = n(201718),
    sk = n(615405),
    sP = n(633075),
    sT = n(813832),
    sR = n(600761),
    sO = n(667049);
function sL(e) {
    let t = (0, em.A)(e),
        n = nt();
    return t && !n;
}
var s_ = n(540185),
    sw = n(192308),
    sD = n(210598),
    sM = n(465318);
function sG() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = sM.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, eD.kn)(e && t ? [ek.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === ek.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function sU(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: r } = (0, J.NJ)();
    return n
        ? (0, i.jsx)(eP.A, {
              targetElementRef: t,
              badge: "beta",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/6eb69edbb7097ad438eaec0f50efb2316dc02df984de7b7423253f599c3e23ce.svg",
              },
              position: "left",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              gradientColor: "nitro-pink",
              title: eG.intl.string(eG.t.KKGxNt),
              body: eG.intl.string(eG.t["IS+QTV"]),
              onRequestClose: () => l(eM.i.USER_DISMISS),
              actions: [
                  {
                      text: eG.intl.string(eG.t.RCy7Px),
                      icon: tr.NitroWheelIcon,
                      onClick: function () {
                          let e = (0, sD.g0)();
                          ((0, ri.Y5)(e),
                              r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, ru.XA)(rd.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var sF = n(410453);
function sW(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: r } = e,
        { trackUserProfileEditAction: s } = (0, J.NJ)(),
        a = l.useCallback(() => {
            n && r(eM.i.TAKE_ACTION);
            let e = (0, sD.g0)();
            ((0, ri.Y5)(e),
                s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, ru.XA)(rd.jM.WIDGET_ADDED));
        }, [s, n, r]);
    return (0, i.jsx)(na.$, {
        icon: tr.NitroWheelIcon,
        text: eG.intl.string(eG.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function sB(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, J.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, d] = sG(),
        c = (function () {
            let e = (0, ei.bG)([C.default], () => C.default.getCurrentUser()?.id),
                t = (0, sO.A)(e),
                { enabled: n, showCreateEntrypoint: i } = sM.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === s_.x.PERSONAL);
            return n && i && !l;
        })(),
        g = l.useCallback(() => {
            (u && d(eM.i.TAKE_ACTION),
                r({ action: "PRESS_ADD_WIDGET" }),
                (0, sw.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(546547),
                            n.e(487697),
                            n.e(752516),
                            n.e(360545),
                        ]).then(n.bind(n, 414904));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: r });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [r, u, d]);
    return (0, i.jsxs)("div", {
        className: s()(sF.w, t),
        children: [
            (0, i.jsx)(eH.E, {
                className: sF.D,
                variant: "body-sm/semibold",
                color: "text-subtle",
                children: eG.intl.string(eG.t.OYlggR),
            }),
            c ? (0, i.jsx)(sW, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: d }) : null,
            (0, i.jsx)(na.$, {
                icon: tV.PlusSmallIcon,
                text: eG.intl.string(eG.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: g,
                buttonRef: a,
            }),
            (0, i.jsx)(sU, { targetElementRef: c ? o : a, isVisible: u, markAsDismissed: d }),
        ],
    });
}
var sV = n(192),
    sH = n(704824),
    sz = n(382483),
    sY = n(385113),
    sK = n(334074),
    sX = n(657718),
    sq = n(478016),
    sZ = n(591410);
function s$(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, J.NJ)(),
        a = l.useMemo(() => new sP.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, ri.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, ru.XA)(rd.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sZ.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sZ.A.Cta, {
            showSuggestedForYou: !0,
            heading: eG.intl.format(eG.t.OIzLCy, { applicationName: n.name }),
            content: eG.intl.format(eG.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tF.m, {
                        text: eG.intl.string(eG.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(sX.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: nl.XSmallIcon,
                            "aria-label": eG.intl.string(eG.t.WAI6xu),
                            onClick: () => {
                                r(eM.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tF.m, {
                        text: eG.intl.string(eG.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(sX.S, {
                            variant: "primary",
                            size: "sm",
                            icon: sq.CheckmarkSmallIcon,
                            "aria-label": eG.intl.formatToPlainString(eG.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (r(eM.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function sJ() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([sY.A], () => sY.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, sz.Wq)();
        }, []);
        let t = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
            n = (0, ed.A)(e),
            { tokens: i, fetched: r } = (0, sH.j)(e),
            s = (0, sO.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof sP.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, sK.hj)({
                applications: u,
                dismissibleContent: ek.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: sK.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(s$, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var sQ = n(675816),
    s0 = n(575593),
    s1 = n(44120),
    s2 = n(778705),
    s5 = n(87719),
    s6 = n(317560),
    s8 = n(306984),
    s9 = n(661492);
let s3 = { sentGifts: {} };
function s7(e, t) {
    return `${e}:${t}`;
}
class s4 extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((s3 = e), this.cleanupExpiredGifts());
    }
    getState() {
        return s3;
    }
    hasSentGift(e, t) {
        let n = s7(e, t),
            i = s3.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = s7(e, t),
            i = s3.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(s3.sentGifts)) new Date(n.expiresAt) < e && delete s3.sentGifts[t];
    }
}
let ae = new s4(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = s7(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        s3.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var at = n(146423),
    an = n(590180),
    ai = n(301198),
    al = n(349031),
    ar = n(124557),
    as = n(471505),
    aa = n(376932);
function ao(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function au(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lZ.default], () => lZ.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, as.G)({ userId: o, sku: n, location: l, onError: r }),
        f = ap();
    return (0, i.jsx)("div", {
        className: aa.U,
        style: ao(t),
        children: (0, i.jsx)(ai._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: f,
            ...s,
        }),
    });
}
function ad(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lZ.default], () => lZ.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ar.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = ap();
    return (0, i.jsx)("div", {
        className: aa.U,
        style: ao(t),
        children: (0, i.jsx)(ai._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: f,
            ...s,
        }),
    });
}
function ac(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lZ.default], () => lZ.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ar.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = ap();
    return (0, i.jsx)("div", {
        className: aa.U,
        style: ao(t),
        children: (0, i.jsx)(ai._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: f,
            ...s,
        }),
    });
}
function ag(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lZ.default], () => lZ.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: f,
            isPurchased: m,
        } = (0, al.z)({ userId: o, product: n, location: l, onError: r }),
        p = (0, s9.q)(f),
        h = m && !u,
        x = !p || h,
        A = ap(p && h ? eG.intl.string(eG.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: aa.U,
        style: ao(t),
        children: (0, i.jsx)(ai._, {
            skuId: f.skuId,
            productName: f.name,
            size: t.wishlistButtonSize,
            disabled: x,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: A,
            ...s,
        }),
    });
}
function af(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([an.A], () => an.A.getProduct(t.id));
    switch (t.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(au, { sku: t, isVisuallyHidden: !n, ...l });
        case P.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(ad, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(ag, { product: r, isVisuallyHidden: !n, ...l });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(ac, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function am(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(af, { location: t, ...n });
}
function ap(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: eG.intl.string(eG.t["5B3F2W"]),
            add: eG.intl.string(eG.t.Hcgz2S),
            remove: eG.intl.string(eG.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var ah = n(460442),
    ax = n(662349),
    aA = n(479026),
    aI = n(636374),
    av = n(699976),
    ab = n(181554),
    aj = n(880465);
let ay = av.Z.SIZE_133;
function aC(e) {
    var t;
    let n,
        {
            item: r,
            wishlistOwner: a,
            guildId: o,
            currentUser: u,
            style: d,
            isDragging: c,
            dragHandle: g,
            skuPreviewStyle: f,
            skuPreviewHoverStyle: m,
            skuAssetHoverClassName: p,
            isHoveringOrFocusing: h,
            setIsHoveringOrFocusing: x,
            onDetailsClick: A,
            onPurchaseClick: I,
            wishlistId: v,
            isItemOwned: b,
            cardBackdrop: j,
            isNew: y,
            onClick: C,
        } = e,
        E = l.useRef(null),
        S = l.useRef(x);
    (l.useEffect(() => {
        S.current = x;
    }, [x]),
        l.useEffect(() => {
            let e = E.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                S.current(!1);
            }
        }, []));
    let { trackUserProfileWishlistAction: N } = (0, J.NJ)(),
        k = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (N({
                        wishlistId: v,
                        action: rd.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, v, N, C]),
        P = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (N({
                        wishlistId: v,
                        action: rd.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, N, C]),
        T = l.useCallback(() => {
            ((0, ru.XA)(rd.jM.SOMETHING_WENT_WRONG), nm.O.announce(eG.intl.string(eG.t.F8FvUy)));
        }, []),
        R = null != g ? (0, i.jsx)("div", { ref: E, className: ab.BU, children: g }) : null,
        {
            onBodyClick: O,
            onOverlayClick: L,
            showOverlayButton: _,
            routesToGift: w,
            label: D,
            icon: M,
        } = (0, aI.P)({ wishlistOwner: a, isOwned: b, onDetailsClick: k, onPurchaseClick: P }),
        G = h && _;
    return (0, i.jsxs)("div", {
        className: ab.kL,
        children: [
            (0, i.jsxs)(at.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: ay,
                cardStyle: s()(ab.Nr, d),
                skuPreviewStyle: s()(ab.ev, { [ab.go]: b && !h }, f, G ? m : void 0),
                skuAssetClassName: G ? p : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: O,
                "aria-label":
                    ((t = r.sku),
                    (n = w ? (0, s9.T)(t) : eG.intl.formatToPlainString(eG.t.ZBB4Ty, { productName: (0, s9.T)(t) })),
                    !0 === y ? eG.intl.formatToPlainString(eG.t.s9RZ1r, { label: n }) : n),
                children: [
                    !0 === y && (0, i.jsx)(r_.N, { className: ab.Pf }),
                    j,
                    _ && (0, i.jsx)(ax.A, { spec: ay, onClick: L, isHoveringOrFocusing: h, label: D, icon: M }),
                    b && (0, i.jsx)(ah.gS, { isHoveringOrFocusing: h }),
                    a.id === u.id &&
                        null != v &&
                        (0, i.jsx)(am, {
                            sku: r.sku,
                            isCardHovered: h,
                            spec: ay,
                            onError: T,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            R,
        ],
    });
}
function aE(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, s6.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: iM.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, s8.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: iM.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(aC, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        onDetailsClick: u,
        onPurchaseClick: d,
        analyticsLocations: a,
        currentUser: s,
        ...o,
    });
}
function aS(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, aA.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: iM.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, s1.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: iM.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        m = f === s0.R.AVATAR_DECORATION || f === s0.R.PROFILE_FRAME;
    return (0, i.jsx)(aC, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [ab.mn]: m }),
        analyticsLocations: a,
        ...d,
    });
}
function aN(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: r,
            currentUser: s,
            analyticsLocations: a,
            isHoveringOrFocusing: o,
            ...u
        } = e,
        d = l.useCallback(() => {
            if (n) return void (0, s5.x)(iL.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, s2.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: iM.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(aC, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aj.MO,
        skuAssetHoverClassName: aj.iR,
        analyticsLocations: a,
        ...u,
    });
}
function ak(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, j.Ay)(
            ...(s ?? []),
            t.sku?.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM ? b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        f = (0, a.bG)([ae], () => ae.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        m = l.useMemo(
            () => t.skuProductLine !== P.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aE, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: m,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(aS, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: m,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(aN, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: m,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        default:
            return null;
    }
}
var aP = n(788593),
    aT = n(132085),
    aR = n(741934),
    aO = n(720060),
    aL = n(998556);
function a_(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, sQ.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        u = (0, lX.VU)(),
        d = l.useMemo(
            () =>
                null == o || null == r
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: r } = e;
                          if ("WIDGET" === l && r?.widget != null) {
                              let { widget: e, getWidth: n } = r,
                                  l = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: aL.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(aO.u, {
                                      widget: e,
                                      user: t,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_COVER" === l && r?.gameName != null) {
                              let { imageSrc: e, iconSrc: l, gameName: s, getWidth: a } = r,
                                  o = a?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: o },
                                  children: (0, i.jsx)(aP.A, {
                                      className: aL.XJ,
                                      imageSrc: e,
                                      iconSrc: l,
                                      gameName: s,
                                      gameId: n,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && r?.game != null && r?.widgetType != null) {
                              let { game: e, widgetType: n, getWidth: l } = r,
                                  s = l?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: aL.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(aT.A, {
                                      user: t,
                                      widgetType: n,
                                      game: e,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WIDGET_CLIP" === l && r?.item != null) {
                              let { item: e, getWidth: t } = r,
                                  n = t?.() ?? 96;
                              return (0, i.jsx)("div", {
                                  className: aL.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(aR.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: aL.Xm,
                                  children: (0, i.jsx)(ak, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(r, o),
            [r, o],
        ),
        c = l.useRef(null),
        g = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            c.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!n) {
                c.current = null;
                return;
            }
            null == c.current && g();
        }, [n, g]),
        !0 !== n || null == s || null == d)
    )
        return null;
    null == c.current && g();
    let { x: f, y: m } = c.current ?? { x: 0, y: 0 },
        p = s.x - f - 60 * !!u,
        h = s.y - m;
    return (0, i.jsx)("div", { className: aL.kL, style: { transform: `translate3d(${p}px, ${h}px, 0)` }, children: d });
}
var aw = n(151869);
function aD(e) {
    let t,
        {
            addableWidgets: n,
            applicationAffinityData: i,
            hasClips: l,
            hasPremium: r,
            maxWidgetOptions: s,
            promotedWidgetTypes: a,
        } = e,
        o = [],
        u = new Set();
    function d(e) {
        u.has(e.getUniqueKey()) || (o.push(e), u.add(e.getUniqueKey()));
    }
    function c(e) {
        let t = n.find((t) => t.type === e);
        null != t && d(t);
    }
    function g(e) {
        let t = n.find((t) => (0, sP.E)(t, e));
        null != t && d(t);
    }
    return (
        a.forEach(c),
        ((t = Date.now()),
        i
            .filter((e) => {
                let { isConnected: n, lastPlayedAt: i } = e;
                return n || (null != i && t - i < 7776e6);
            })
            .toSorted((e, t) => {
                if (e.isConnected !== t.isConnected) return e.isConnected ? -1 : 1;
                let n = t.totalPlayDuration - e.totalPlayDuration;
                return 0 !== n ? n : (t.lastPlayedAt ?? 0) - (e.lastPlayedAt ?? 0);
            })
            .slice(0, 2)
            .map((e) => {
                let { applicationId: t } = e;
                return t;
            })).forEach(g),
        l && c(s_.x.CLIPS_GALLERY),
        r && c(s_.x.PERSONAL),
        c(s_.x.FAVORITE_GAMES),
        c(s_.x.PLAYED_GAMES),
        g("1346069614634864772"),
        c(s_.x.CURRENT_GAMES),
        c(s_.x.WANT_TO_PLAY_GAMES),
        g("1323482066758930452"),
        o.slice(0, s)
    );
}
n(839272);
let aM = (0, rw.mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var aG = n(116281),
    aU = n(661439),
    aF = n(90165);
function aW(e) {
    let t = (0, a.bG)([sY.A], () => sY.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof sP.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, ed.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, sH.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, aU.X)();
    }, [o]);
    let u = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        d = (0, a.yK)([aF.A], () => u.map((e) => (null != e ? aF.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([aF.A], () => u.map((e) => (null != e ? aF.A.getLastPlayedDateTime(e) : null)));
    return l.useMemo(() => {
        let e = new Set(s.map((e) => e.application.id)),
            t = [];
        for (let i = 0; i < n.length; i++)
            t.push({
                applicationId: n[i],
                isConnected: e.has(r[i]),
                totalPlayDuration: d[i] ?? 0,
                lastPlayedAt: c[i] ?? null,
            });
        return t;
    }, [n, r, c, s, d]);
}
var aB = n(224360),
    aV = n(297520),
    aH = n(843393);
function az(e) {
    return e.getUniqueKey();
}
function aY(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, aG.A)(),
        s = aW(r),
        o = (0, a.bG)([rr.Ay], () => rr.Ay.hasClips()),
        u = (0, a.bG)([C.default], () => $.Ay.isPremium(C.default.getCurrentUser(), iM.PremiumTypes.TIER_2)),
        d = l.useMemo(
            () =>
                aD({
                    addableWidgets: r,
                    applicationAffinityData: s,
                    hasClips: o,
                    hasPremium: u,
                    maxWidgetOptions: 6,
                    promotedWidgetTypes: [],
                }),
            [r, s, o, u],
        ),
        c = d.length >= 2;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c && (0, i.jsx)(aK, { suggestions: d, suggestionsLocation: "above" }),
            t,
            c && (0, i.jsx)(aK, { suggestions: d, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function aK(e) {
    let t = aM.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(aX, { ...e }) : null;
}
function aX(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, J.NJ)(),
        { focusAddedWidget: o } = (0, sV.r)(),
        [u, d] = (0, eD.kn)([ek.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(aV.A, {
                    widget: e,
                    size: "small",
                    compact: !0,
                    listItemProps: t,
                    onAddWidget: () => {
                        (o(e.getUniqueKey()), r?.());
                    },
                    trackUserProfileEditAction: a,
                }),
            [o, r, a],
        );
    return u !== ek.M.USER_PROFILE_WIDGET_SUGGESTIONS
        ? null
        : (0, i.jsx)(aB.A, {
              className: s()(aH.uW, "above" === n && aH.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "body-xs/normal" : void 0,
              onDismiss: () => d(eM.i.USER_DISMISS),
              children: (0, i.jsx)(aw.A, {
                  items: t,
                  getItemKey: az,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: aH.Dk,
                  scrollerClassName: aH.jv,
                  itemClassName: aH.Vs,
                  actionsClassName: aH.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eG.intl.string(eG.t["+EIBSA"]),
              }),
          });
}
let aq = (0, rw.mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var aZ = n(269507);
function a$(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: aZ.ZW,
        "aria-label": eG.intl.string(eG.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === s_.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(aV.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function aJ(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, aG.A)();
    return (0, i.jsx)(a$, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function aQ(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: r,
            trackUserProfileEditAction: s,
            personalWidgetOptionRef: o,
        } = e,
        u = (0, aG.A)(),
        d = aW(u),
        c = aD({
            addableWidgets: u,
            applicationAffinityData: d,
            hasClips: (0, a.bG)([rr.Ay], () => rr.Ay.hasClips()),
            hasPremium: (0, a.bG)([C.default], () =>
                $.Ay.isPremium(C.default.getCurrentUser(), iM.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: r ? [s_.x.PERSONAL] : [],
        }),
        g = l.useCallback(() => {
            (s({ action: "PRESS_ADD_WIDGET" }),
                (0, sw.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(546547),
                            n.e(487697),
                            n.e(752516),
                            n.e(360545),
                        ]).then(n.bind(n, 414904));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a$, { widgets: c, personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
            (0, i.jsx)(na.$, { text: eG.intl.string(eG.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: g }),
        ],
    });
}
function a0(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, J.NJ)(),
        s = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError != null, [t]),
        [d, c] = sG(!u),
        g = d || (0, sD.t0)(),
        { enabled: f, maxWidgetOptions: m } = (function (e) {
            let { location: t } = e;
            return aq.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            s.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: aZ.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: aZ.FS,
                    children: [
                        (0, i.jsx)(nr.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: eG.intl.string(eG.t["oqalC+"]),
                        }),
                        (0, i.jsx)(eH.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: u ? eG.intl.string(eG.t["+W59o5"]) : eG.intl.string(eG.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            f
                                ? (0, i.jsx)(aQ, {
                                      maxWidgetOptions: m,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: g,
                                      trackUserProfileEditAction: r,
                                  })
                                : (0, i.jsx)(aJ, { personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
                            (0, i.jsx)(sU, { targetElementRef: o, isVisible: d, markAsDismissed: c }),
                        ],
                    }),
            ],
        })
    );
}
var a1 = n(366209);
function a2() {
    return (0, i.jsxs)("div", {
        className: a1.mJ,
        children: [
            (0, i.jsx)(sC.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eH.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: eG.intl.string(eG.t["7blcz6"]),
            }),
        ],
    });
}
function a5(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, sO.A)(t.id),
        u = sL(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([sk.A], () => [sk.A.ipCountryCode, sk.A.ipCountryCodeRequest]),
                n = (0, sS.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sE.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && u,
        g = l.useMemo(() => o.filter(re.fu), [o]),
        f = l.useMemo(() => o.filter((e) => e instanceof sP.R), [o]);
    function m() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                aO.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: u, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(sB, { className: a1.cG }), d && (0, i.jsx)(a2, {}), (0, i.jsx)(sJ, {})],
                    }),
                u ? (0, i.jsx)(aY, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, sT.Y)(u, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, ed.A)(n);
        let { data: i, refetch: r } = (0, sN.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, f),
    c)
        ? (0, i.jsx)(a0, { userId: t.id })
        : u
          ? (0, i.jsx)(sV.D, { children: m() })
          : m();
}
function a6(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, sR.i)({ containerRef: d });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                d.current?.scrollTo({ top: 0, behavior: tp.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([lZ.default], () => lZ.default.getId() === t)), (r = rm()), n && null != r);
    return (0, i.jsxs)(sd, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(a1.XG, { [a1.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(a_, { scrollerRef: d }), (0, i.jsx)(a5, { user: o, onWidgetAddedFromBelow: c, ...u })],
    });
}
var a8 = n(115560),
    a9 = n(777480),
    a3 = n(825484),
    a7 = n(952270),
    a4 = n(444927),
    oe = n(895360),
    ot = n(267102),
    on = n(521440),
    oi = n(721932),
    ol = n(832163),
    or = n(501838),
    os = n(44724),
    oa = n(808247),
    oo = n(673843),
    ou = n(855052),
    od = n(342442),
    oc = n(658946),
    og = n(535089),
    of = n(840411),
    om = n(666810),
    op = n(419731),
    oh = n(451395),
    ox = n(823016),
    oA = n(100741);
function oI(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, ox.r)();
    return (0, i.jsx)(oh.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eG.intl.formatToPlainString(eG.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: oA.C,
        dropBeforeClassName: oA.A,
        dropAfterClassName: oA.Ze,
        draggingClassName: oA.Id,
        children: (0, i.jsx)("div", { className: oA.An, children: s }),
    });
}
let ov = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: r,
            guildId: s,
            showEditingControls: a,
            wishlistId: o,
            isDragging: u,
            onReorder: d,
            isNew: c,
            onClick: g,
        } = e,
        { registerDragHandleRef: f } = (0, ox.r)(),
        m = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(oh.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: oA.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        h = l.useMemo(
            () =>
                (0, i.jsx)(ak, {
                    item: t,
                    wishlistOwner: r,
                    guildId: s,
                    wishlistId: o,
                    isDragging: u,
                    dragHandle: p,
                    isNew: c,
                    onClick: m,
                }),
            [t, r, s, u, p, o, c, m],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(oI, { item: t, index: n, wishlistId: o, onReorder: d, children: h }),
          })
        : (0, i.jsx)("li", { children: h });
});
function ob(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        u = C.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(n.id) })),
        { isDragging: c } = (0, sQ.V)((e) => ({ isDragging: e.isDragging() })),
        [g, f] = l.useState([]),
        m = l.useCallback((e) => {
            f((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        p = l.useCallback(
            (e, n) => {
                if (e === n || null == d || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = rV.A.getWishlist(d);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, of.Ap)(i, t, e, n);
                oa.A.reorderWishlistItem(d, l.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [d, t],
        );
    if (null == u || null == d) return null;
    let h = (0, i.jsx)("ul", {
        className: oA.Vg,
        children: t.map((e, t) =>
            (0, i.jsx)(
                ov,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    guildId: r,
                    showEditingControls: s,
                    wishlistId: d,
                    isDragging: c,
                    onReorder: p,
                    isNew: (0, op.f3)(e.addedAt, o) && !g.includes(e.skuId),
                    onClick: m,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, i.jsx)(ox.B, { emptyListFallbackRef: null, children: h }) : h;
}
function oj(e) {
    let t = C.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(om.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(ob, { ...e }),
    });
}
var oy = n(815021),
    oC = n(299679),
    oE = n(820847);
n(667532);
var oS = n(802494),
    oN = n(172218),
    ok = n(858899),
    oP = n(2157),
    oT = n(95817),
    oR = n(74135),
    oO = n(964164);
let oL = av.Z.SIZE_90;
function o_(e) {
    let {
            sku: t,
            wishlistOwner: n,
            guildId: r,
            style: a,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: u,
            onClick: d,
            "aria-label": c,
            wishlistId: g,
            children: f,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, J.NJ)(),
        p = (0, oC.Ar)(),
        h = (0, a4.A)(() => (0, a8.A)()),
        { handleVisibilityChange: x } = (0, oT.G)(h),
        A = (0, oN.K)(x, 0.5, p?.surface != null),
        I = l.useCallback(() => {
            (m({
                wishlistId: g,
                action: rd.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                p?.surface != null &&
                    tK.default.track(P.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: g,
                        wishlist_owner_id: p.wishlistOwnerId,
                        surface: p.surface,
                        position_in_section: p.positionInSection,
                        item_source: p.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: h,
                        impression_session_id: p.impressionSessionId,
                        location_stack: p.analyticsLocations,
                    }),
                d());
        }, [d, t.id, t.productLine, m, g, p, h]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(at.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: oL,
            cardStyle: s()(oO.Nr, a),
            skuPreviewStyle: s()(oO.ev, o),
            onHoverOrFocusChange: u,
            onClick: I,
            "aria-label": c,
            children: f,
        }),
    });
}
function ow(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: r,
            handleOpenUserProfileModal: a,
            skuPreviewStyle: o,
            wishlistOwner: u,
            onAddSuccess: d,
            promotion: c,
            ...g
        } = e,
        [f, m] = l.useState(!1),
        p = l.useCallback(async () => {
            if (!f) {
                m(!0);
                try {
                    (await oa.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: rd.RP.WISHLIST }));
                } catch (e) {
                    ((0, ok.P0)({ text: eG.intl.string(eG.t.F8FvUy), variant: "critical" }),
                        nm.O.announce(eG.intl.string(eG.t.F8FvUy)));
                } finally {
                    m(!1);
                }
            }
        }, [t, n, f, a, d]),
        h = l.useMemo(() => s()({ [oO.zW]: r || f }, o), [r, f, o]);
    return (0, i.jsxs)(o_, {
        "aria-label": eG.intl.formatToPlainString(eG.t.xRjJBe, { productName: (0, s9.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(ah.oU, { isHoveringOrFocusing: r, loading: f }), !r && !f && c],
    });
}
function oD(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, j.Ay)(...(n ?? []), b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, oP.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(ow, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(oR.s, { spec: oL, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function oM(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case s0.R.PROFILE_EFFECT:
                case s0.R.NAMEPLATE:
                case s0.R.BUNDLE:
                case s0.R.PROFILE_FRAME:
                    return;
                case s0.R.AVATAR_DECORATION:
                    return oO.ML;
                default:
                    return s()(oO.ML, oO.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(ow, { sku: t, skuPreviewStyle: r, ...n });
}
function oG(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(ow, { sku: t, skuPreviewStyle: aj.MO, ...n });
}
function oU(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(oD, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(oM, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(oG, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var oF = n(609965);
function oW(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([C.default], () => C.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(oF.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                oC.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(oU, {
                        sku: a,
                        wishlistId: t?.id,
                        wishlistOwner: d,
                        guildId: n,
                        handleOpenUserProfileModal: l,
                        analyticsLocations: r,
                    }),
                },
                a.id,
            );
        }),
    });
}
var oB = n(927813);
let oV = 90 * oB.A.Millis.DAY,
    oH = 90 * oB.A.Millis.DAY;
var oz = n(469364);
function oY(e) {
    let {
            user: t,
            guildId: n,
            wishlist: r,
            hasFetchedWishlist: s = !1,
            analyticsLocations: o,
            impressionSessionId: u,
            className: d,
        } = e,
        {
            isVisible: c,
            isDismissible: g,
            markAsDismissed: f,
        } = (function (e) {
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                r = (n?.items.length ?? 0) >= 3,
                [s, o] = l.useState(!1);
            !i || r || s || o(!0);
            let u = (0, a.bG)(
                    [ee.A],
                    () => (null != n ? new Date(ee.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [d, c] = (0, eD.Wl)(
                    ek.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: u + oH, cooldownDurationMs: oV },
                    void 0,
                    !0,
                ),
                g = d === ek.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eM.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(oK, {
              user: t,
              guildId: n,
              wishlist: r,
              analyticsLocations: o,
              impressionSessionId: u,
              className: d,
              isDismissible: g,
              markAsDismissed: f,
          })
        : null;
}
function oK(e) {
    let {
            user: t,
            guildId: n,
            wishlist: r,
            analyticsLocations: a,
            impressionSessionId: o,
            className: u,
            isDismissible: d,
            markAsDismissed: c,
        } = e,
        { items: g } = (function (e) {
            let {
                    userId: t,
                    wishlist: n,
                    numWishlistItemsToRecommend: i,
                    maxWishlistItemsToShow: r = i,
                    source: s,
                } = e,
                { recommendations: a, status: o } = (0, oS.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(iM.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, of.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oE.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(oz.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: oz.wx,
                      children: [
                          (0, i.jsx)(eH.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: eG.intl.string(eG.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: oz.b,
                                  children: (0, i.jsx)(oy.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(oC.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(oW, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(oz.Vg, oz.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var oX = n(477782),
    oq = n(165862),
    oZ = n(431194);
function o$(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: r,
            handleOpenGameShop: s,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        u = l.useRef(null),
        [d, c] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(eg.Vq).map((e) => {
                        let t = tX.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eG.intl.formatToPlainString(eG.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft:
                                null != t ? () => (0, i.jsx)("img", { className: oZ.I, src: t, alt: "" }) : tO.ShopIcon,
                            leadingAccessory:
                                null != t ? { type: "image", src: t } : { type: "icon", icon: tO.ShopIcon },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, ed.A)(o), handleOpenGameShop: s }),
        f = l.useMemo(
            () =>
                (0, i.jsxs)(oX.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(oX.Dr, {
                                id: "browse-collectibles-shop",
                                label: eG.intl.string(eG.t["5upuqx"]),
                                iconLeft: tO.ShopIcon,
                                leadingAccessory: { type: "icon", icon: tO.ShopIcon },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(oX.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eG.intl.string(eG.t.lG6a5x),
                                iconLeft: tr.NitroWheelIcon,
                                leadingAccessory: { type: "icon", icon: tr.NitroWheelIcon },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s } = e;
                                return (0, i.jsx)(
                                    oX.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nE.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(oq.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eG.intl.string(eG.t.GdNkvG),
                children: f,
            });
        },
        children: (e) =>
            (0, i.jsx)(na.$, {
                buttonRef: u,
                variant: n,
                size: "sm",
                icon: d ? nl.XSmallIcon : i5.ChevronSmallDownIcon,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var oJ = n(365199);
let oQ = rJ.A.getArticleURL(P.MVz.CUSTOM_PROFILES_WISHLIST);
function o0(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, j.Ay)(b.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(oX.rX, {
                          children: [
                              (0, i.jsx)(oX.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eG.intl.string(eG.t.b2nFyA),
                                  subtext: eG.intl.string(eG.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(oX.bX, {}),
                              (0, i.jsx)(oX.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eG.intl.string(eG.t.hvVgAZ),
                                  icon: tB.LinkExternalSmallIcon,
                                  trailingIndicator: { type: "icon", icon: tB.LinkExternalSmallIcon },
                                  action: () => window.open(oQ),
                              }),
                          ],
                      })
                    : null,
            [t, n, r],
        );
    return null == o
        ? null
        : (0, i.jsx)(j.f5, {
              value: a,
              children: (0, i.jsx)(nE.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(oq.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eG.intl.string(eG.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(t_.q3, {
                          buttonRef: s,
                          icon: oJ.MoreHorizontalIcon,
                          tooltipText: eG.intl.string(eG.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var o1 = n(526725);
function o2(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(o$, {
              title: eG.intl.string(eG.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(na.$, {
              variant: "secondary",
              size: "sm",
              icon: tO.ShopIcon,
              text: eG.intl.string(eG.t["i/yzHs"]),
              onClick: n,
          });
}
function o5(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: n,
        isWishlistPublic: l,
        handleOpenShop: r,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: o1.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(o$, {
                          title: eG.intl.string(eG.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(na.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tV.PlusSmallIcon,
                          text: eG.intl.string(eG.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(o0, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function o6(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(na.$, {
        variant: "primary",
        size: "sm",
        icon: tO.ShopIcon,
        text: eG.intl.formatToPlainString(eG.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function o8(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ot.Us)() === P.BRT.OVERLAY,
        u = (0, ed.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(o6, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(o$, {
                title: eG.intl.string(eG.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: o1.y7,
        children: [
            (0, i.jsxs)("div", {
                className: o1.q6,
                children: [
                    (0, i.jsx)(nr.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: eG.intl.string(eG.t.HGnLLT),
                    }),
                    (0, i.jsx)(eH.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: eG.intl.string(eG.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(a3.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(na.$, {
                                variant: "primary",
                                size: "sm",
                                icon: tO.ShopIcon,
                                text: eG.intl.string(eG.t.ZbS4QB),
                                onClick: r,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function o9(e) {
    let {
            isOwner: t,
            showEditingControls: n,
            profileOwner: r,
            wishlist: s,
            socialLayerStorefrontApplicationIds: o,
            handleOpenShop: u,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: c,
        } = e,
        g = s.id,
        f = (0, a.bG)([ee.A], () => ee.A.getWishlistSettings(r.id, g)),
        { trackUserProfileWishlistAction: m } = (0, J.NJ)(),
        p = !1 === r.nsfwAllowed,
        [h, x] = l.useState(!0);
    l.useEffect(() => {
        f?.visibility != null && x(f.visibility === a9.a.PUBLIC);
    }, [f?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && m({ wishlistId: t, action: n, productLines: i });
            },
            [m],
        ),
        I = (0, og.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, ou.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = h ? a9.a.PRIVATE : a9.a.PUBLIC;
            (x(!h),
                oa.A.updateWishlistVisibility(g, e),
                m({
                    wishlistId: g,
                    action: h ? rd.Mq.WISHLIST_TOGGLE_PRIVATE : rd.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, ou.y9)(s) : void 0,
                }));
        }, [g, h, m, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: o1.lm,
                    children: [
                        (0, i.jsx)(a7.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eH.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eG.intl.string(eG.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                p &&
                (0, i.jsxs)("div", {
                    className: o1.lm,
                    children: [
                        (0, i.jsx)(sC.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eH.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eG.intl.string(eG.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: o1.U1,
                children: [
                    (0, i.jsx)(eH.E, {
                        variant: "body-xs/semibold",
                        color: "text-subtle",
                        children: eG.intl.format(eG.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(o5, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(o2, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function o3(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, sR.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: u } = (0, a.cf)([ee.A, C.default], () => ({
            wishlistId: ee.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, j.Ay)(),
        c = (function (e) {
            let { ownerId: t, wishlistId: n, isVisible: i = !0 } = e,
                r = (0, rW.bq)(),
                s = (0, a.bG)(
                    [ee.A],
                    () => (null != t ? ee.A.getProfileReadStateSectionAckedAt(t, od.o.WISHLIST) : null),
                    [t],
                ),
                [o, u] = l.useState(void 0);
            (i || void 0 === o || u(void 0), i && null != t && null != r && void 0 === o && u(r.enabled ? s : null));
            let d = (0, a.bG)([rV.A, ee.A], () => null != t && (0, oc.Y)(t, n), [t, n]),
                c = void 0 !== o;
            return (
                l.useEffect(() => {
                    i && c && d && null != t && (0, oc.U)(t);
                }, [i, c, d, t]),
                o
            );
        })({ ownerId: t.id, wishlistId: o }),
        g = sL(t.id),
        { wishlist: f, wasFetched: m, error: p } = (0, z.fw)({ wishlistId: o, userId: t.id }),
        [h, x] = l.useState(!1);
    (m && !h && x(!0), (0, oo.A)(f));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([ol.A], () => ol.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, oi.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, or.w)({ userIds: s }),
                c = (0, or.mn)({ userIds: s }),
                g = (0, or.tR)(s),
                f = (0, or.rY)(),
                m = (0, or.qx)(),
                p = (0, or.px)();
            return l.useMemo(
                () => (0, r5.uniq)([...u, ...d, ...c, ...g, ...(r ? [...f, ...m, ...p] : [])].filter(eg.Vq)),
                [u, d, c, g, f, m, p, r],
            );
        })({ wishlist: f, profileOwner: t, currentUser: u }),
        I = (0, a4.A)(() => (0, a8.A)()),
        v = l.useCallback(() => {
            (0, tL.Cz)({ analyticsLocations: d, analyticsSource: b.A.USER_PROFILE_WISHLIST });
        }, [d]),
        y = l.useCallback((e) => {
            (0, os.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iL.M)(), (0, os.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, ar.c)({
            userId: u?.id,
            skuId: iM.pe.TIER_2,
            nuxGraphic: on.g,
            onNuxShow: oe.D,
            location: b.A.USER_PROFILE_WISHLIST,
        });
    if (null == u || null != p) return null;
    let N = null == f || 0 === f.items.length;
    return (0, i.jsxs)(sd, {
        scrollerRef: r,
        className: s()({ [o1.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(o8, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(a_, { scrollerRef: r }),
                          (0, i.jsx)(o9, {
                              isOwner: u?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: f,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, ou.C3)(f, iM.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(oj, {
                              items: f.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              ackedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(oY, {
                    user: t,
                    guildId: n,
                    wishlist: f,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: I,
                    className: N ? o1._E : o1.HZ,
                }),
        ],
    });
}
function o7(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rd.RP.ACTIVITY
        ? (0, i.jsx)(sg, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rd.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sI, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rd.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sy, { user: t, onClose: o })
            : l === rd.RP.WIDGETS
              ? (0, i.jsx)(a6, { user: t, guildId: s, channelId: a })
              : l === rd.RP.WISHLIST
                ? (0, i.jsx)(o3, { profileOwner: t, guildId: s })
                : null;
}
function o4(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: r,
            guildId: s,
            channelId: o,
            items: u,
            initialSection: d,
            onClose: g,
        } = e,
        { trackUserProfileAction: p } = (0, J.NJ)(),
        { shouldLogExposure: h } = (0, rB.A)(t),
        { primaryColor: x } = (0, rZ.E)(),
        A = null != x ? "neutral" : "primary",
        I = l.useRef(!1),
        v = u.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        v && !I.current && ((I.current = !0), p({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [v, p]);
    let [b, j] = l.useState(() => (u.find((e) => e.section === d) ?? u[0]).section),
        y = (0, a.bG)([lZ.default, rD.A], () => {
            let e = rD.A.getAssignment("user", lZ.default.getId(), rU.definition.name);
            return e?.variantId == null || e.useAsEligibility ? null : (rG[e.variantId] ?? rM);
        }),
        C = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: u,
                    hasRecentActivity: d,
                } = rq({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [ee.A, rV.A],
                    () => {
                        if (null == ee.A.getUserProfile(t.id) || ee.A.isFetchingProfile(t.id, l)) return !0;
                        let e = ee.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = rV.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = ee.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && rV.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === rd.RP.WIDGETS) &&
                      r.some((e) => e.section === rd.RP.WISHLIST) &&
                      !u &&
                      !d)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: u }),
        [E, S] = l.useState(null);
    if (null == E && null != C && null != y) {
        let e = null == d && C;
        (S(e), e && y.enabled && j(rd.RP.WISHLIST));
    }
    let N = u.find((e) => e.section === b) ?? u[0];
    return (
        N.section !== b && j(N.section),
        (0, i.jsxs)("div", {
            className: su.kL,
            children: [
                h && (0, i.jsx)(rW.kM, { location: "UserProfileModalV2Tabs" }),
                !0 === E && (0, i.jsx)(rF, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: su.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(rL.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: N.section,
                        onItemSelect: function (e) {
                            rn.A.hasUnsavedChanges() && N.section === rd.RP.WIDGETS
                                ? (0, nI.VQ)()
                                : (p({ action: "PRESS_SECTION", section: e }), j(e), S((e) => e ?? !1));
                        },
                        children: u.map((e) =>
                            (0, i.jsxs)(
                                rL.V.Item,
                                {
                                    className: su.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eG.intl.formatToPlainString(eG.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot &&
                                            (0, i.jsx)(r_.N, { variant: A, className: su.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(rL.V.Panel, {
                    id: N.section,
                    "aria-label": N.text,
                    className: su.NM,
                    children: (0, i.jsx)(m.F, {
                        component: (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: N.text }) }),
                        children: (0, i.jsx)(o7, {
                            user: t,
                            currentUser: n,
                            displayProfile: r,
                            guildId: s,
                            channelId: o,
                            section: N.section,
                            onClose: g,
                        }),
                    }),
                }),
            ],
        })
    );
}
var ue = n(933832),
    ut = n(972213);
let un = {
        [rd.jM.WIDGET_ADDED]: {
            message: eG.intl.string(eG.t.fFP1Uy),
            icon: (0, i.jsx)(ue.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rd.jM.WIDGET_REMOVED]: {
            message: eG.intl.string(eG.t.zzsK7h),
            icon: (0, i.jsx)(ue.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rd.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eG.intl.string(eG.t["84MExs"]),
            icon: (0, i.jsx)(ut.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [rd.jM.SOMETHING_WENT_WRONG]: {
            message: eG.intl.string(eG.t.F8FvUy),
            icon: (0, i.jsx)(ut.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    ui = (e) => {
        let { className: t } = e,
            n = (0, ru.fu)(),
            r = (0, a.bG)([tp.Ay], () => tp.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(un[n]), nm.O.announce(un[n].message)) : o(!1);
        }, [n]);
        let g = (0, d.p)(
            s,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            l.useEffect(() => () => (0, ru.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, ru.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(lT.animated.div, { className: t, style: e, children: (0, i.jsx)(rS, { ...u }) }),
                ),
            })
        );
    };
var ul = n(297413),
    ur = n(465829),
    us = n(826673),
    ua = n(609425),
    uo = n(73392),
    uu = n(576705),
    ud = n(997394);
function uc(e) {
    return null == e || "" === e ? void 0 : e;
}
function ug(e) {
    let t,
        n,
        r,
        o,
        u,
        d,
        c,
        g,
        f,
        m,
        { user: p, displayProfile: x } = e,
        { analyticsLocations: A } = (0, j.Ay)(),
        I = x?.guildId != null,
        v = x?.guildId ?? void 0,
        b = $.Ay.canUsePremiumProfileCustomization(p),
        { canChangeDisplayName: y, permissionsLoaded: E } = (0, a.cf)([uu.A, Y.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = Y.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: uu.A.can(P.xBc.CHANGE_NICKNAME, e) || uu.A.can(P.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        S = I && !y && E,
        {
            value: N,
            previewValue: k,
            fallbackDisplayName: T,
            onCommit: R,
        } = ((n = null != (t = x?.guildId ?? null)),
        (r = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([ev.Ay], () => (null != t ? (ev.Ay.getMember(t, p.id)?.nick ?? null) : null))),
        (u = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t).pendingNickname)),
        (f = (g = void 0 !== (c = n ? d : u) ? c : n ? o : r) ?? ""),
        (m = n ? (uc(r) ?? p.username) : p.username),
        {
            value: f,
            previewValue: uc(g) ?? m,
            fallbackDisplayName: m,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, tg.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, tg.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        O = (0, a.bG)([eb.A], () => eb.A.getErrors(v ?? null)),
        L = (0, tc.EC)(v ?? null),
        _ = I ? O.nick?.[0] : O.global_name?.[0],
        w = L?.nick?.[0],
        D = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(v).pendingDisplayNameStyles),
        M = (0, ua.A)({ userId: p.id, guildId: v, pendingDisplayNameStyles: D }),
        G = (0, uo.a)({ displayNameStyles: M, compensateForSafari: !1 }),
        U = eG.intl.string(I ? eG.t.mq6Cg9 : eG.t.XuZU7A),
        F = I ? eG.intl.string(eG.t.YcDKr8) : p.username,
        W = l.useRef(null),
        B = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, us.Dr)(ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eM.i.INDIRECT_ACTION,
                    }),
                    (0, nU.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: W }));
            },
            [A, v],
        ),
        V = {
            icon: t6.PaintbrushThinIcon,
            tooltip: eG.intl.string(eG.t.lqKKI2),
            "aria-label": eG.intl.string(eG.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: W,
        },
        H = S
            ? (0, i.jsx)("span", {
                  className: ud.Cs,
                  children: (0, i.jsx)(ni.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: th.kL,
        children: (0, i.jsx)(eH.E, {
            variant: ur.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(rx.w, {
                value: N,
                onCommit: R,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, t) => {
                    let { focused: n } = t;
                    return (0, i.jsx)(ur.c$, {
                        user: p,
                        guildId: v,
                        displayName: n ? (uc(e) ?? T) : k,
                        size: "lg",
                        pendingDisplayNameStyles: D,
                        className: s()(ud.dt, { [ud.jW]: n && "" === e }),
                        displayNameTrailing: H,
                    });
                },
                placeholder: F,
                label: U,
                maxLength: 32,
                textVariant: "inherit",
                trailing: y && b ? V : void 0,
                error: _,
                helperText: S ? eG.intl.string(eG.t.gzjxQi) : w,
                disabled: !y,
            }),
        }),
    });
}
var uf = n(628072);
function um(e) {
    let t,
        n,
        r,
        o,
        u,
        { displayProfile: d } = e,
        {
            value: c,
            previewValue: g,
            onCommit: f,
        } = ((t = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t).pendingPronouns)),
        (o = n ? d?._guildMemberProfile?.pronouns : d?.pronouns),
        (u = d?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: u,
            onCommit: l.useCallback(
                (e) => {
                    (0, tg.p)({ pronouns: e, guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        m = d?.guildId != null,
        p = null != g && g.length > 0,
        h = eG.intl.string(m ? eG.t.AXiE0i : eG.t["76Aqhl"]);
    return (0, i.jsx)("div", {
        className: s()(th.kL, th.oE, uf.k),
        children: (0, i.jsx)(rx.w, {
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
            preview: p ? (0, i.jsx)(ur.n2, { pronouns: g }) : null,
            label: eG.intl.string(eG.t["rniRE+"]),
            placeholder: h,
            maxLength: 40,
            spellCheck: !1,
        }),
    });
}
var up = n(873200),
    uh = n(305866),
    ux = n(145497),
    uA = n(685073),
    uI = n(2967),
    uv = n(318785),
    ub = n(534400),
    uj = n(152313),
    uy = n(830543),
    uC = n(415916),
    uE = n(743981),
    uS = n(295930),
    uN = n(594615);
let uk = "no-server-tag";
function uP(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e6.D, {
        innerRef: t,
        className: s()(uS.qJ, { [uS.wK]: o }),
        "aria-label": o ? eG.intl.string(eG.t.Pdd1nd) : eG.intl.formatToPlainString(eG.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eH.E, {
            variant: "body-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: uS.W3,
            tag: "span",
            children: [
                o
                    ? eG.intl.string(eG.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  ub.Z9,
                                  {
                                      src: (0, uA.gC)(n, r, uE.Sl.SIZE_14),
                                      size: uE.Sl.SIZE_14,
                                      className: uS.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, uA.gC)(n, r, uE.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(i5.ChevronSmallDownIcon, { size: "xs", color: "currentColor", className: uS.u4 }),
            ],
        }),
    });
}
function uT() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, uv.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, uI.Z)("UserProfileModalV2GuildTagSelect"),
        u = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        d = (0, a.cf)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (0, uA.Zo)(e?.primaryGuild);
        }),
        c = d.guildId ?? null,
        g = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingPrimaryGuildId),
        f = void 0 !== g ? g : c,
        m = null != f ? (u.get(f) ?? null) : null,
        p = null == m && f === c,
        h = m?.profile?.tag ?? (p ? (d.tag ?? null) : null),
        x = m?.profile?.badge ?? (p ? d.badge : void 0),
        A = l.useCallback(
            (e) =>
                e.id === uk
                    ? (0, i.jsx)("div", {
                          className: uN.uN,
                          children: (0, i.jsx)(eH.E, {
                              variant: "body-md/normal",
                              color: "input-placeholder-text-default",
                              className: uS.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(ln.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: uk, label: eG.intl.string(eG.t.VxdWWH), value: uk },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(ux.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(ub.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [n],
        ),
        v = 0 === n.length && null == c;
    if (v && !o) return null;
    function j(e) {
        (e(),
            (0, uC.A)(!0, () => {
                ((0, iL.M)(), (0, uy.default)(), (0, uj.A)(r, b.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let y = (0, i.jsx)(up.a3, {
        label: eG.intl.string(eG.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eG.intl.string(eG.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(nE.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(uh.l, {
                className: s()(uS.yt, { [uS.R4]: o && !v, [uS.Lo]: v }),
                "aria-label": eG.intl.string(eG.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: uS.p$,
                          children: [
                              (0, i.jsx)(eH.E, {
                                  id: t,
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: eG.intl.string(eG.t["NV+MBV"]),
                              }),
                              (0, i.jsx)(na.$, {
                                  text: eG.intl.string(eG.t["65zBhE"]),
                                  variant: "secondary",
                                  onClick: () => j(n),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(up.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, tg.p)({ primaryGuildId: e === uk ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: uS.wx,
                                        children: [
                                            y,
                                            (0, i.jsx)(na.$, {
                                                text: eG.intl.string(eG.t.CumH4u),
                                                variant: "secondary",
                                                onClick: () => j(n),
                                            }),
                                        ],
                                    })
                                  : y,
                              (0, i.jsx)(up.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(uP, { buttonRef: e, guildId: f, guildTag: h, guildBadge: x, ...t }),
    });
}
var uR = n(956495);
function uO(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(ur.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function uL(e) {
    let t = (0, a.bG)([eb.A], () => eb.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(uO, { ...e, displayNameStylesOverride: t });
}
function u_(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(ul.A, {
                  user: t,
                  forceUsername: !0,
                  className: uR.a1,
                  usernameClass: uR.eb,
                  discriminatorClass: uR.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(ug, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(uR.AK, uR.j6),
                children: [r, (0, i.jsx)(ur.Ce, {}), (0, i.jsx)(um, { displayProfile: n }), (0, i.jsx)(uT, {}), l],
            }),
        ],
    });
}
function uw(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(uO, { ...n });
        case "try-it-out":
            return (0, i.jsx)(uL, { ...n });
        case "edit":
            return (0, i.jsx)(u_, { ...n });
        default:
            return (0, eg.xb)(t);
    }
}
var uD = n(97808),
    uM = n(22231),
    uG = n(601255),
    uU = n(562819),
    uF = n(253400),
    uW = n(339984),
    uB = n(329801),
    uV = n(884362);
let uH = uF.Ay.getEnableHardwareAcceleration() ? uD.Js : uD.eu;
function uz(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function uY(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(oq.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eG.intl.string(eG.t.YAgq3W),
        children: (0, i.jsx)(oX.rX, { children: n }),
    });
}
function uK(e) {
    let { user: t, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eF.V)(e),
        [u, d] = l.useState(!1),
        c = l.useRef(null),
        g = l.useRef(null),
        f = l.useCallback(() => d(!1), []),
        m = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, j.Ay)(),
                d = null != n,
                c = (0, a.bG)([ev.Ay], () => (null != n ? ev.Ay.getMember(n, t.id) : null)),
                g = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n ?? void 0).pendingAvatar),
                f = d ? c?.avatar : t.avatar,
                m = (0, eA.z5)(g, f),
                p = d && null != t.avatar,
                h = $.Ay.canUsePremiumProfileCustomization(t),
                x = h || null == n,
                A = h || null == n,
                I = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
                v = (0, eA.a4)({ user: t }),
                b = (0, eA.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, eA.CP)(n ?? void 0),
                C = void 0 !== y,
                E = null != (0, uG.A)(C ? y : b) && (C ? null != y : null != b),
                S = d && null != v,
                N = l.useCallback(() => {
                    (r(),
                        uz(() =>
                            (0, ng.XD)({
                                uploadType: uW.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        uz(() =>
                            (0, uU.L)({
                                analyticsLocations: u,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, I, s]),
                P = l.useCallback(() => {
                    (r(),
                        (0, ng.rM)(null, f, (e) => (0, tg.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eA.WU)(p ? "reset" : "remove"));
                }, [r, n, f, p]),
                T = l.useCallback(() => {
                    (r(), (0, tg.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                oX.Dr,
                                { id: "change-avatar", label: eG.intl.string(eG.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                oX.Dr,
                                { id: "change-decoration", label: eG.intl.string(eG.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.TDjKDm),
                                          action: P,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.twB3fz),
                                          action: P,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        E &&
                        e.push(
                            S
                                ? (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eG.intl.string(eG.t["2u5yu0"]),
                                          action: T,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eG.intl.string(eG.t["9rx5GO"]),
                                          action: T,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, x, A, S, m, E, N, k, P, T]);
        })({ user: t, guildId: n, onClose: f, returnRef: g });
    return 0 === m.length
        ? (0, i.jsx)(eF.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(uB.my, uB.vk, uV.kL, { [uV.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(uH, { ...r, imageClassName: s()(uB.Lw, uV.HU) }),
                  (0, i.jsx)(nE.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: nE.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, i.jsx)(uY, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: uV.r9,
                              children: (0, i.jsx)(t8.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: uM.PencilIcon,
                                  "aria-label": eG.intl.string(eG.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), d((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var uX = n(514905);
function uq(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(oq.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eG.intl.string(eG.t.FzU73A),
        children: (0, i.jsx)(oX.rX, { children: n }),
    });
}
function uZ(e) {
    let { user: t, guildId: n } = e,
        [r, o] = l.useState(!1),
        u = l.useRef(null),
        d = l.useRef(null),
        c = l.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, j.Ay)(),
                d = (0, eA.N2)({ user: t, guildId: n ?? void 0 }),
                c = (0, eA.Xf)({ user: t, guildId: n ?? void 0 }),
                g = (0, eA.Xf)({ user: t, guildId: void 0 }),
                f = $.Ay.canUsePremiumProfileCustomization(t),
                m = null == n,
                p = m || f,
                h = m || f,
                x = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: I,
                    pendingProfileFrame: v,
                } = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n ?? void 0)),
                b = (0, a.bG)([ee.A], () =>
                    null != n ? ee.A.getGuildMemberProfile(t.id, n)?.banner : ee.A.getUserProfile(t.id)?.banner,
                ),
                y = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.banner != null),
                E = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t.id)?.profileEffect != null),
                S = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t.id)?.profileFrame != null),
                N = (0, eA.Ac)(A, b),
                k = x && y,
                P = x && E,
                T = x && S,
                R = void 0 === I ? null != d : null != I,
                O = void 0 === v ? null != c : null != v,
                L = (0, eA.lw)({
                    pendingValue: v,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                w = (0, _.A)(L?.skuId),
                D = l.useCallback(() => {
                    (r(),
                        (0, ng.XD)({
                            uploadType: uW.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                M = l.useCallback(() => {
                    (r(),
                        (0, n0.W)({
                            analyticsLocations: u,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, ng.rM)(null, b, (e) => (0, tg.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, b]),
                U = l.useCallback(() => {
                    (r(), (0, tg.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, io.w)({
                            analyticsLocations: u,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: w,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, w, s]),
                W = l.useCallback(() => {
                    (r(), (0, tg.p)({ guildId: n ?? void 0, profileFrame: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, i.jsx)(
                                oX.Dr,
                                { id: "change-banner", label: eG.intl.string(eG.t.N0bC3P), action: D },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                oX.Dr,
                                { id: "change-effect", label: eG.intl.string(eG.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                oX.Dr,
                                { id: "change-frame", label: eG.intl.string(eG.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    f &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            P
                                ? (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            T
                                ? (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      oX.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eG.intl.string(eG.t["8DfADq"]),
                                          action: W,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, h, P, T, N, R, O, D, M, F, G, U, W]);
        })({ user: t, guildId: n, onClose: c, returnRef: d });
    return 0 === g.length
        ? (0, i.jsx)(eB.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(uX.kL, { [uX.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eB.A, { ...e, className: uX.Pr }),
                  (0, i.jsx)(nE.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: nE.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(uq, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: uX.r9,
                              children: (0, i.jsx)(t8.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: uM.PencilIcon,
                                  "aria-label": eG.intl.string(eG.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var u$ = n(419341),
    uJ = n(776879),
    uQ = n(837531),
    u0 = n(186272),
    u1 = n(447538);
let u2 = (e) => e * (2 - e),
    u5 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function u6(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function u8(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, ea.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: u1.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function u9(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (n5.add(e), () => n5.delete(e)),
            () => n6,
        );
    return null == s ? null : (0, i.jsx)(O.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function u3(e) {
    var t;
    let n,
        r,
        {
            user: o,
            currentUser: u,
            guildId: d,
            originGuildId: f,
            channelId: m,
            displayProfile: p,
            nickname: h,
            hasEntered: x,
            customStatusPrompt: A,
            onClose: v,
            onCreateTag: b,
            avatarDecorationOverride: j,
            avatarOverride: C,
            bannerOverride: E,
            accentColorOverride: S,
            profileEffectOverride: N,
            profileFrame: k,
            fadeInProfileFrame: T,
            editingMode: R,
            isLoading: O = !1,
        } = e,
        L = o.id === u.id,
        _ = "edit" === R,
        w = l.useRef(null),
        M = l.useRef(null),
        G = l.useRef(null);
    l.useEffect(() => {
        if (L) return () => y.A.setState({ isOpen: !1 });
    }, [L]);
    let { isHoveringOrFocusing: V } = (0, U.A)(w),
        [z, Y] = l.useState(),
        q = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? Y("compact-xs") : t <= 380 ? Y("compact-sm") : Y(void 0);
        }, []);
    (0, I.g)(w, q, [], { fireOnMount: !0 });
    let $ = null != z ? u5[z] : void 0,
        J = l.useMemo(() => A ?? (0, F.A)(), [A]),
        { relationshipType: Q, originApplicationId: ee } = (0, a.cf)([K.A], () => ({
            relationshipType: K.A.getRelationshipType(o.id),
            originApplicationId: K.A.getOriginApplicationId(o.id),
        })),
        et =
            ((t = o.id),
            (n = (0, ei.bG)([er.default], () => er.default.locale)),
            (r = (0, ei.bG)([K.A], () => (K.A.getRelationshipType(t) === P.eA$.FRIEND ? K.A.getSince(t) : null), [t])),
            (0, el.An)(r, n)),
        en = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        es = (0, B.q)({ userId: o.id }),
        ea = (0, W.fi)(o.id),
        { appIdentities: em, connections: ep } = (function (e) {
            let { filteredAppIdentities: t } = (0, ec.A)(e),
                n = (0, ef.A)(e),
                i = l.useMemo(() => new Set(t?.map((e) => e.application_id) ?? []), [t]),
                r = (0, ed.A)([...i]).filter(eg.Vq);
            return {
                appIdentities: l.useMemo(
                    () =>
                        t
                            .map((e) => ({ identity: e, application: r.find((t) => t.id === e.application_id) }))
                            .filter((e) => {
                                let { application: t } = e;
                                return null != t;
                            }),
                    [t, r],
                ),
                connections: l.useMemo(
                    () =>
                        n.filter((e) => {
                            let t = eu.A.get(e.type);
                            return t?.migrationData == null || !i.has(t.migrationData.replacedBy);
                        }),
                    [n, i],
                ),
            };
        })(o.id),
        eh = (0, eo.A)(o.id),
        ex = ep.length > 0 || em.length > 0,
        eA = eh.length > 0,
        eI = _ ? uZ : eB.A,
        ev = p?.guildId ?? d,
        eb = {
            user: o,
            displayProfile: p,
            guildId: d,
            channelId: m,
            avatarSize: $?.avatarSize ?? ey.T[ej.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: C,
        },
        eC = l.useCallback(() => {
            (0, e2.A)({ user: o, guildId: ev, alt: h });
        }, [h, ev, o]);
    return (0, i.jsxs)("main", {
        className: s()(u1.profile, null != z && u1[z]),
        ref: w,
        "aria-busy": O,
        children: [
            (0, i.jsxs)("div", {
                className: u1.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: u1.profileHeaderBannerContainer,
                        children: (0, i.jsx)(eI, {
                            user: o,
                            displayProfile: p,
                            guildId: d,
                            themeType: ej.d.MODAL_V2,
                            specOverrides: $,
                            pendingBanner: E,
                            pendingAccentColor: S,
                        }),
                    }),
                    _
                        ? (0, i.jsx)(uK, { ...eb })
                        : (0, i.jsx)(eF.A, {
                              ...eb,
                              onOpenAvatar: "read-only" === R ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === R && null == C ? iX.$T : void 0,
                          }),
                    (0, i.jsx)(e0.A, {
                        user: o,
                        guildId: d,
                        channelId: m,
                        themeType: ej.d.MODAL_V2,
                        hasEntered: x,
                        prompt: L ? J : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: u1.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(uw, {
                                user: o,
                                displayProfile: p,
                                nickname: h,
                                trailing: (0, i.jsx)(eW.A, {
                                    displayProfile: p,
                                    themeType: ej.d.MODAL_V2,
                                    onClose: v,
                                    showPendingBadgeEdits: L,
                                    popoutAnchorRef: x ? M : void 0,
                                    containerRef: G,
                                }),
                                onClose: v,
                                onCreateTag: b,
                                editingMode: R,
                            }),
                            (0, i.jsx)("div", { ref: M }),
                            L && x && (0, i.jsx)(eU, { targetElementRef: G }),
                        ],
                    }),
                    Q === P.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(eQ.A.Overlay, {
                            className: u1.profileOverlay,
                            children: (0, i.jsx)(eK.A, {
                                user: o,
                                applicationId: ee,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: u1.profileBanner,
                            }),
                        }),
                    ea.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            eQ.A.Overlay,
                            {
                                className: u1.profileOverlay,
                                children: (0, i.jsx)(eK.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: u1.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(eQ.A.Overlay, {
                            className: u1.profileOverlay,
                            children: (0, i.jsx)(td, {
                                heading: eG.intl.string(eG.t.Iyka0U),
                                headingVariant: "body-md/semibold",
                                headingIcon: { icon: g.CircleErrorIcon, size: "xs" },
                                className: u1.profileBanner,
                                children: (0, i.jsx)(H.T, { userId: o.id, variant: "body-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(eJ.A, { user: o, className: u1.profileBanner }),
                    p?.private &&
                        (0, i.jsx)(eQ.A.Overlay, {
                            className: u1.profileOverlay,
                            children: (0, i.jsx)(e$.A, { username: h }),
                        }),
                    (0, i.jsx)("div", {
                        className: u1.profileButtons,
                        children: (0, i.jsx)(tG, {
                            user: o,
                            currentUser: u,
                            guildId: d,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: Q,
                            onClose: v,
                        }),
                    }),
                    L && "try-it-out" !== R && (0, i.jsx)(eV.A, { isPremiumUser: (0, Z.ki)(u) }),
                    !en && (0, i.jsx)(tS, { currentUser: u, displayProfile: p, canEditInPlace: _ }),
                    es.length > 0 &&
                        (0, i.jsx)(td, {
                            heading: eG.intl.string(eG.t["Uv/eTx"]),
                            children: (0, i.jsx)(eY.A, { applicationIds: es }),
                        }),
                    (0, i.jsx)(td, {
                        heading: eG.intl.string(eG.t.a6XYD9),
                        children: (0, i.jsx)(eq.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: 300 }),
                    }),
                    null != et &&
                        (0, i.jsx)(td, {
                            heading: eG.intl.string(eG.t.wlTO8v),
                            children: (0, i.jsx)(ez, { friendsSinceDate: et }),
                        }),
                    p?.guildId != null &&
                        (0, i.jsx)(e1.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: u1.profileRolesSection,
                            headingVariant: "body-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !en &&
                        (_ || ex) &&
                        (0, i.jsx)(td, {
                            heading: eG.intl.string(eG.t["3fe7U5"]),
                            scrollTargetId: rd.bk.CONNECTIONS,
                            children: (0, i.jsx)(t5, {
                                applicationIdentities: em,
                                connections: ep,
                                userId: o.id,
                                allowEditing: _,
                                className: u1.profileAppConnections,
                            }),
                        }),
                    !en &&
                        eA &&
                        (0, i.jsx)(td, {
                            heading: eG.intl.string(eG.t.PHjkRE),
                            scrollTargetId: rd.bk.APPS,
                            children: (0, i.jsx)(tl, {
                                applicationRoleConnections: eh,
                                onClose: v,
                                className: u1.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(ry, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(u9, { displayProfile: p, profileEffectOverride: N, isHovering: V }),
            null != k && (0, i.jsx)(D.A, { frame: k, filterLayer: u6, fadeIn: T }),
        ],
    });
}
function u7(e) {
    let { user: t, displayProfile: n, pendingThemeColors: l, forceShowPremium: r, children: s } = e,
        {
            theme: a,
            primaryColor: o,
            secondaryColor: u,
        } = (0, es.A)({ user: t, displayProfile: n, pendingThemeColors: l, isPreview: r }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, eh.A)({
            theme: a,
            themeType: null,
            primaryColor: o,
            secondaryColor: u,
        });
    return (0, i.jsx)("div", { className: c, style: d, children: s });
}
function u4(e) {
    let t,
        n,
        r,
        {
            user: u,
            currentUser: c,
            guildId: g,
            originGuildId: I,
            channelId: y,
            messageId: O,
            roleId: D,
            sessionId: U,
            initialTabSection: F,
            initialScrollTarget: W,
            transitionState: B,
            customStatusPrompt: H,
            openedAt: K,
            onClose: Z,
            sourceAnalyticsLocations: ei = [],
            themeContainerClassName: el,
        } = e,
        er = u.id === c.id,
        es = l.useCallback(() => (0, uC.A)(er, Z), [er, Z]),
        ea = l.useCallback(
            (e) =>
                (0, uC.A)(er, () => {
                    (Z(), e());
                }),
            [er, Z],
        ),
        {
            guildId: eo,
            pendingGuildId: eu,
            isFetching: ed,
            handleSelectUserProfile: ec,
            handleRetry: eg,
            hasError: ef,
        } = (function (e) {
            let { userId: t, initialGuildId: n } = e,
                [i, r] = l.useState(n),
                [s, o] = l.useState(n),
                [u, d] = l.useState("idle"),
                [c, g] = l.useState(0),
                f = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError?.status ?? null, [t]),
                m = l.useCallback(() => {
                    (d("retrying"), g((e) => e + 1));
                }, []),
                p = l.useCallback((e) => {
                    (d("loading"), r(e ?? void 0));
                }, []);
            return (
                l.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ex.A)(t, void 0, {
                            type: "modal",
                            guildId: i,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (o(i), d("idle"));
                            },
                            () => {
                                e || (o(i), d("idle"));
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [i, t, c]),
                {
                    guildId: s,
                    pendingGuildId: i,
                    isFetching: "idle" !== u,
                    hasError: "retrying" === u || (null != f && "loading" !== u),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== f && 429 !== f ? m : void 0,
                }
            );
        })({ userId: u.id, initialGuildId: g }),
        eh = l.useMemo(() => (null != eo ? { [eo]: [u.id] } : {}), [eo, u.id]);
    (0, v.Eq)(eh, "UserProfileModalV2");
    let ey = (0, et.X)("UserProfileModalV2"),
        ek = nt(),
        eP = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        eT = (0, em.A)(u.id) && ey,
        eR = (0, ep.W)(u.id),
        eO = ef && !eR,
        eL = eT && !eP && !ef && !ek,
        e_ = ek ? "try-it-out" : eL ? "edit" : "read-only",
        {
            pendingThemeColors: ew,
            avatarDecorationOverride: eD,
            avatarOverride: eM,
            bannerOverride: eU,
            accentColorOverride: eF,
            profileEffectOverride: eW,
            profileFrameOverride: eB,
        } = (function (e) {
            let { userId: t, guildId: n, editingMode: i } = e;
            return (0, a.cf)(
                [eb.A, C.default, ev.Ay, ee.A],
                () => {
                    if ("read-only" === i) return eE;
                    let e = C.default.getUser(t);
                    if (null == e) return eE;
                    let l = eb.A.getTryItOutChanges(),
                        r =
                            "try-it-out" === i
                                ? {
                                      pendingThemeColors: l.tryItOutThemeColors,
                                      pendingAvatar: l.tryItOutAvatar,
                                      pendingBanner: l.tryItOutBanner,
                                      pendingAvatarDecoration: void 0,
                                      pendingProfileEffect: void 0,
                                      pendingAccentColor: void 0,
                                      pendingProfileFrame: void 0,
                                  }
                                : eb.A.getPendingChanges(n),
                        s = null != n ? ev.Ay.getMember(n, t) : null,
                        a = ee.A.getUserProfile(t),
                        o = null != n ? ee.A.getGuildMemberProfile(t, n) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, eA.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: n,
                        }),
                        avatarOverride: (0, eI.V7)({ userId: t, image: r.pendingAvatar, size: eC }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, eA.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: n,
                        }),
                        profileFrameOverride: (0, eA.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: n,
                        }),
                    };
                },
                [t, n, i],
            );
        })({ userId: u.id, guildId: eo, editingMode: e_ }),
        {
            isExpanded: eV,
            isAnimating: eH,
            transition: ez,
            handleExpand: eY,
            handleCollapse: eK,
            refs: { expandIconButtonRef: eq, expandTabButtonRef: e$, collapseButtonRef: eJ },
        } = (function () {
            let [e, t] = l.useState(() => window.innerWidth > 928),
                [n, i] = l.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: u2 },
                    onRest: () => i(!1),
                }),
                s = (0, A.A)("(min-width: 929px) and (min-height: 550px)"),
                a = l.useRef(null),
                o = l.useRef(null),
                u = l.useRef(null),
                c = l.useRef(null),
                g = l.useCallback(() => {
                    ((c.current = "collapse"), i(!0), t(!0));
                }, []),
                f = l.useCallback(() => {
                    ((c.current = "expand"), i(!0), t(!1));
                }, []);
            return (
                l.useEffect(() => {
                    if (!n) {
                        if ("collapse" === c.current && e) ((c.current = null), u.current?.focus());
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = s ? o.current : a.current;
                            e?.focus();
                        }
                    }
                }, [e, n, s]),
                {
                    isExpanded: e,
                    isAnimating: n,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: f,
                    refs: { expandIconButtonRef: a, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        e0 = eT && !eV,
        e1 = eT && (!eV || eH),
        { defaultWishlistId: e2 } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(u.id) }));
    ((0, z.fw)({ wishlistId: e2, userId: u.id }),
        (t = (0, R.D)("edit_profile_preload")),
        (n = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
        (r = (0, a.bG)([T.A], () => T.A.shouldFetch())),
        (0, l.useEffect)(() => {
            t &&
                null != n &&
                r &&
                (async function () {
                    S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
                    try {
                        let e = await E.Bo.get({
                            url: "/storefront/recommended-items",
                            query: { application_ids: [P.FYj], limit: 100 },
                            rejectWithError: !0,
                        });
                        S.h.dispatch({
                            type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS",
                            recommendation: {
                                skuIds: e.body.recommended_items.map((e) => {
                                    let { sku_id: t } = e;
                                    return t;
                                }),
                            },
                        });
                    } catch (t) {
                        let e = new N.LG(t);
                        ((0, k.o)(e), S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE" }));
                    }
                })();
        }, [t, n, r]));
    let e5 = (0, eN.fC)(),
        e6 = eO && (!eT || !ed),
        e8 = eT && ef,
        e9 = eu !== eo || e8 || null != e5.interactionType,
        e3 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sm.A)(t),
                r = l?.length,
                s = (0, uJ.A)(t),
                a = (0, sO.A)(t.id),
                o = (0, u$.A)(t),
                { hasNewWishlistItems: u } = (0, rB.A)(t),
                d = [],
                c = t.id === n?.id,
                g = sL(t.id),
                f = a.length > 0;
            return (
                (g || f) && d.push({ text: eG.intl.string(eG.t.laViwx), section: rd.RP.WIDGETS }),
                d.push({ text: eG.intl.string(eG.t.chq59f), section: rd.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eG.intl.string(eG.t["7lZ31J"]), section: rd.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, uQ.A)(i), section: rd.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, u0.A)(r), section: rd.RP.MUTUAL_GUILDS })),
                d
            );
        })({ user: u, currentUser: c }),
        { analyticsLocations: e7 } = (0, j.Ay)([...ei, b.A.USER_PROFILE_MODAL_V2]),
        e4 = (0, J.pb)({
            layout: "MODAL_V2",
            userId: u.id,
            sourceSessionId: U,
            guildId: eo,
            channelId: y,
            messageId: O,
            roleId: D,
        }),
        te = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e7, ...e4, action: rd.pt.SHOW_STYLES_PANEL }), eY());
        }, [e7, e4, eY]),
        tt = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e7, ...e4, action: rd.pt.HIDE_STYLES_PANEL }), eK());
        }, [e7, e4, eK]),
        tn = (0, en.Ay)(u.id, eo);
    (0, V.A)(e7, tn, rd.R7.MODAL_V2);
    let ti = void 0 !== eB ? eB?.skuId : tn?.profileFrame?.skuId,
        tl = (0, _.A)(ti),
        tr = (0, L.A)(ti),
        { profileFrameStyle: ts, profileFrameClassName: ta } = (0, M.A)(tl);
    (0, w.A)({ skuId: tn?.profileFrame?.skuId, openedAt: K, context: e4, analyticsLocations: e7 });
    let to = (0, a.bG)([C.default], () => $.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        tu = ek || (er && null != tn && to),
        td = q.Ay.useName(tn?.guildId, y, u),
        tc = (0, G.GV)(),
        tg = (0, a.bG)([Y.A], () => (null != eo ? Y.A.getGuild(eo) : null)),
        tf = er
            ? null != tg
                ? eG.intl.formatToPlainString(eG.t.M7OhOF, { guildName: tg.name })
                : eG.intl.string(eG.t.egQPgM)
            : eG.intl.format(eG.t.KRe1Fk, { name: td });
    return (0, i.jsx)(j.f5, {
        value: e7,
        children: (0, i.jsx)(J.of, {
            value: e4,
            openedAt: K,
            fetchStartedAt: tn?.fetchStartedAt,
            fetchEndedAt: tn?.fetchEndedAt,
            isLoaded: tn?.isLoaded,
            children: (0, i.jsx)(eN.Hl, {
                value: e5,
                children: (0, i.jsx)(eS.N, {
                    value: W,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(iX.zr, { [iX.QF]: tn?.private === !0 }),
                        transitionState: B,
                        "aria-labelledby": tc,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rO, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(u1.layoutContainer, ta, {
                                        [u1.editingPanelEnabled]: eT,
                                        [u1.editingPanelExpanded]: eT && eV,
                                        [u1.isAnimating]: eH,
                                    }),
                                    style: ts,
                                    children: [
                                        (0, i.jsxs)(u7, {
                                            user: u,
                                            displayProfile: tn,
                                            pendingThemeColors: ew,
                                            forceShowPremium: tu,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: iX.Oo,
                                                    children: [
                                                        (0, i.jsx)(tU.A, { onClose: es }),
                                                        (0, i.jsx)(f.A, {
                                                            children: (0, i.jsx)(m.H, { id: tc, children: tf }),
                                                        }),
                                                        e1 &&
                                                            (0, i.jsx)(lY, {
                                                                buttonRef: eq,
                                                                onClick: te,
                                                                className: u1.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                e0 &&
                                                    (0, i.jsx)("div", {
                                                        className: u1.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(lz, {
                                                            innerRef: e$,
                                                            onClick: te,
                                                            className: u1.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(m.F, {
                                            children: [
                                                eT &&
                                                    ez((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(lK, {
                                                                  className: s()(u1.editingPanel, {
                                                                      [u1.isExpanded]: eV,
                                                                  }),
                                                                  selectedGuildId: eu,
                                                                  originGuildId: I,
                                                                  onSelectGuildId: ec,
                                                                  onClose: tt,
                                                                  collapseButtonRef: eJ,
                                                                  isLoading: ed,
                                                                  isEditingDisabled: ef,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(eQ.A, {
                                                    className: s()(el, iX.A7, u1.profileContentOuter),
                                                    innerClassName: u1.profileContentInner,
                                                    user: u,
                                                    displayProfile: tn,
                                                    themeType: ej.d.MODAL_V2,
                                                    pendingThemeColors: ew,
                                                    isPrivate: tn?.private === !0,
                                                    forceShowPremium: tu,
                                                    children: [
                                                        (0, i.jsx)(u8, { displayProfile: tn, pendingBanner: eU }),
                                                        tn?.private === !0 && (0, i.jsx)(eZ.A, {}),
                                                        !eO && (0, i.jsx)(ui, { className: u1.noticeContainer }),
                                                        e6 &&
                                                            (0, i.jsx)("div", {
                                                                className: u1.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rS, {
                                                                    icon: (0, i.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: h.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eG.intl.string(eG.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != eg
                                                                            ? eG.intl.string(eG.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: eg,
                                                                    actionDisabled: !eT && ed,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: u1.profileCardToastContainer,
                                                            children: (0, i.jsx)(eX.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rT, {
                                                            showScrim: e9,
                                                            showLoadingSpinner: ed,
                                                            className: u1.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(u3, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    guildId: eo,
                                                                    channelId: y,
                                                                    displayProfile: tn,
                                                                    nickname: td,
                                                                    originGuildId: I,
                                                                    hasEntered: B === x.ip.ENTERED,
                                                                    customStatusPrompt: H,
                                                                    onClose: es,
                                                                    onCreateTag: ea,
                                                                    avatarDecorationOverride: eD,
                                                                    avatarOverride: eM,
                                                                    bannerOverride: eU,
                                                                    accentColorOverride: eF,
                                                                    profileEffectOverride: eW,
                                                                    profileFrame: tl,
                                                                    fadeInProfileFrame: tr,
                                                                    editingMode: e_,
                                                                    isLoading: ed,
                                                                }),
                                                                (0, i.jsx)(o4, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    displayProfile: tn,
                                                                    guildId: eo,
                                                                    channelId: y,
                                                                    items: e3,
                                                                    initialSection: F,
                                                                    onClose: es,
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
                            (0, i.jsx)(rp, { userId: u.id, guildId: eo, className: u1.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function de(e) {
    return (0, i.jsx)(ne, { children: (0, i.jsx)(u4, { ...e }) });
}
