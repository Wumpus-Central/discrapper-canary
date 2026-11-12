n.d(t, { A: () => dO });
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
    T = n(652215),
    P = n(938595),
    R = n(859226),
    O = n(971217),
    _ = n(577390),
    L = n(287727),
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
    q = n(351906),
    X = n(562153),
    Z = n(474090),
    J = n(448645),
    $ = n(183555),
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
    eT = n(43105),
    eP = n(844222),
    eR = n(381791),
    eO = n(643056),
    e_ = n(139523),
    eL = n(327791),
    ew = n(70283),
    eD = n(982240);
function eM() {
    return (0, a.bG)([C.default, eD.Ay], () => {
        let e = C.default.getCurrentUser()?.id;
        return null != e && (eD.Ay.getBadgeById(ew.$.PREMIUM_TENURE, e)?.auto_unhidden ?? !1);
    });
}
var eG = n(262),
    eU = n(263775),
    eF = n(49999),
    eW = n(792996);
function eB(e) {
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
                [eD.Ay],
                () => (null != t && eD.Ay.hasCatalogFor(t) ? eD.Ay.getBadges(t).some((e) => e.owned) : null),
                [t],
            )),
            (r = (0, en.Ay)(t)),
            (s = (0, eG.A)(r)),
            n ?? s.length > 0),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id),
        f = (0, e_.V)({ currentUserId: g, enabled: u }),
        m = eM(),
        { reducedMotion: p } = l.useContext(eP.C),
        [h, x] = (0, eU.kn)(c && u && !f.isPending && !m ? [ek.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return h !== ek.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, i.jsx)(eT.A, {
              targetElementRef: o,
              position: "right",
              gradientColor: "blue",
              graphic: { type: "rive", rive: eR.U, props: { dataBinding: { on: !0, reducedMotion: p.enabled } } },
              title: eW.intl.string(eW.t["9JoKQb"]),
              body: eW.intl.string(d ? eW.t.p82vky : eW.t.IDh31t),
              onRequestClose: () => x(eF.i.USER_DISMISS),
              actions: [
                  {
                      text: eW.intl.string(eW.t["4P5I8V"]),
                      onClick: function () {
                          (x(eF.i.TAKE_ACTION), y.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eV = n(975571);
function eH(e) {
    let { targetElementRef: t } = e,
        n = eM(),
        [l, r] = (0, eU.kn)(n ? [ek.M.NITRO_BADGE_UNHIDDEN_NOTICE] : [], { bypassAutoDismiss: !0 });
    return l !== ek.M.NITRO_BADGE_UNHIDDEN_NOTICE
        ? null
        : (0, i.jsx)(eT.A, {
              targetElementRef: t,
              position: "right",
              title: eW.intl.string(eW.t.ZRLAIy),
              body: eW.intl.string(eW.t.sEGQaJ),
              onRequestClose: () => r(eF.i.USER_DISMISS),
              actions: [
                  {
                      text: eW.intl.string(eW.t.hvVgAZ),
                      onClick: function () {
                          (r(eF.i.TAKE_ACTION),
                              window.open(
                                  eV.A.getArticleURL(T.MVz.PROFILE_BADGES_MANAGEMENT),
                                  "_blank",
                                  "noopener,noreferrer",
                              ));
                      },
                  },
              ],
          });
}
var ez = n(718019),
    eY = n(567556),
    eK = n(915614),
    eq = n(689233),
    eX = n(834730);
function eZ(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(eX.E, { variant: "body-sm/normal", children: t });
}
var eJ = n(361311),
    e$ = n(477534),
    eQ = n(439053),
    e0 = n(743987),
    e1 = n(312381),
    e2 = n(501193),
    e5 = n(383448),
    e8 = n(946356),
    e6 = n(680581),
    e3 = n(503026),
    e4 = n(305385),
    e9 = n(109112),
    e7 = n(939249),
    te = n(730134),
    tt = n(169869),
    tn = n(837057),
    ti = n(310419),
    tl = n(619019),
    tr = n(967198),
    ts = n(488995),
    ta = n(576849);
function to(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, tt.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ta.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(te.A, { user: new tl.A(t.application.bot), size: u._3.SIZE_16 })
                        : (0, i.jsx)(e9.UnknownGameIcon, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: ta.Hd,
                children: [
                    (0, i.jsxs)(e7.D, {
                        className: ta.OB,
                        onClick: function () {
                            (l?.(),
                                (0, tn.transitionToGlobalDiscovery)({
                                    tab: ts.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: ti.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(eX.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(eX.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eX.E, {
                                variant: "footnote/normal",
                                color: "text-default",
                                className: ta.nk,
                                children: eW.intl.format(eW.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, i.jsx)("div", { className: ta.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function tu(e) {
    let { applicationRoleConnections: t, className: n, onClose: l } = e,
        { trackUserProfileAction: r } = (0, $.NJ)(),
        o = (0, a.bG)([er.default], () => er.default.locale),
        u = (0, a.bG)([tr.A], () => tr.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: s()(ta.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: ta.FI,
                          children: (0, i.jsx)(to, {
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
var td = n(403581),
    tc = n(240248),
    tg = n(501925),
    tf = n(900179),
    tm = n(677295);
function tp(e) {
    let { className: t, ...n } = e;
    return (0, i.jsx)(tf.A, {
        className: s()(tm.u, t),
        headingVariant: "body-xs/medium",
        headingColor: "text-subtle",
        ...n,
    });
}
var th = n(81400),
    tx = n(84540),
    tA = n(290386),
    tI = n(621466);
n(321073);
var tv = n(775602),
    tb = n(404760);
function tj(e) {
    let { id: t, message: n, type: l } = e,
        r = "error" === l,
        s = r ? g.CircleErrorIcon : p.WarningIcon;
    return (0, i.jsxs)(eX.E, {
        id: t,
        role: r ? "alert" : void 0,
        variant: "body-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: tb.VP,
        children: [(0, i.jsx)(s, { size: "xs", color: "currentColor", className: r ? tb.ik : tb.QW }), n],
    });
}
function ty(e) {
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
        ((0, tI.vq)(e, HTMLElement) && e.blur(), d());
    }
    let T = (0, i.jsxs)("div", {
        ref: x,
        className: s()(tb.LL, { [tb.JD]: b, [tb.xe]: j }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            v
                ? (0, i.jsx)(eX.E, {
                      id: A,
                      variant: "body-sm/normal",
                      color: "text-muted",
                      className: tb.qf,
                      children: r,
                  })
                : n,
            (0, i.jsx)(e7.D, {
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
        className: s()(tb.kL, f),
        onBlur: p,
        onKeyDown: h,
        children: (0, i.jsx)(
            "div",
            {
                children: t
                    ? a
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: tb.VH, children: T }),
                              E && (0, i.jsx)(tj, { id: I, message: C, type: y }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
var tC = n(786826);
function tE(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function tS(e) {
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
            (null != I && t.length > I ? eW.intl.formatToPlainString(eW.t.ICT5S6, { maxLength: I }) : void 0) ?? b);
    return (0, i.jsx)(ty, {
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
        input: (0, i.jsx)(tC.f, {
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
let tN = [
    { value: "HAIKU", label: () => eW.intl.string(eW.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eW.intl.string(eW.t.CXkR1L) },
    { value: "TELL_US", label: () => eW.intl.string(eW.t.eutr4P) },
    { value: "FUN_FACT", label: () => eW.intl.string(eW.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eW.intl.string(eW.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eW.intl.string(eW.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eW.intl.string(eW.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eW.intl.string(eW.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eW.intl.string(eW.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eW.intl.string(eW.t.u7WCGI) },
];
var tk = n(307731);
function tT(e) {
    let t,
        n,
        r,
        s,
        o,
        { displayProfile: u, className: d } = e,
        c = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        g = u?.guildId != null,
        f = u?.guildId ?? null,
        m = J.Ay.canUsePremiumProfileCustomization(c),
        p = (0, tA.U)({ location: "user_profile_modal_edit" }),
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
                    (0, tx.p)({ bio: e.trim(), guildId: u?.guildId ?? void 0 });
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
                        c = (0, a.bG)([tv.Ay], () => tv.Ay.useReducedMotion),
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
                            let n = tE(t),
                                i = n?.getAttribute("aria-controls");
                            return null != i && null != e.closest(`#${i}`);
                        })(e, n.current),
                    [n],
                );
            l.useEffect(() => {
                if (!t) return;
                let e = n.current?.ownerDocument ?? document;
                function l(e) {
                    (0, tI.vq)(e.target) && !s(e.target) && i();
                }
                return (e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l));
            }, [t, n, s, i]);
            let o = l.useCallback(
                (e) => {
                    if (!t) return;
                    let l = e.relatedTarget;
                    !(0, tI.vq)(l) || s(l) || (null == tE(n.current) && i());
                },
                [t, s, i, n],
            );
            return { isEditing: t, wrapperRef: n, handleCommit: i, ...r, onBlur: o };
        })({ value: h, onCommit: A }),
        v = !(0, tc.uJ)(x),
        b = (0, a.bG)([eb.A], () => eb.A.getErrors(f)),
        j = (0, th.EC)(f),
        y = b.bio?.[0],
        E = j?.bio?.[0],
        S = l.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * tN.length)), tN[e]);
        }, []),
        N = g ? eW.intl.string(eW.t.yPJ9xr) : S.label();
    return !g || m
        ? (0, i.jsx)(tS, {
              ...I,
              className: d,
              preview: v ? (0, i.jsx)(tg.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eW.intl.string(eW.t.lO3n7a),
              label: eW.intl.string(eW.t["YWo+Zd"]),
              emojiPickerIntention: tk.EmojiIntention.PROFILE,
              maxLength: p,
              error: y,
              warning: E,
          })
        : v
          ? (0, i.jsx)(tg.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var tP = n(430626);
function tR(e) {
    let { currentUser: t, displayProfile: n, canEditInPlace: l } = e,
        { context: r } = (0, $.NJ)(),
        s = n?.bio,
        a = !(0, tc.uJ)(s),
        o = n?.guildId != null,
        u = o && J.Ay.canUsePremiumProfileCustomization(t),
        d = u ? eW.intl.string(eW.t.jVai8N) : eW.intl.string(eW.t.ZzAR2Y),
        c = (0, J.TW)(t) ? eW.intl.string(eW.t["5AFxuK"]) : eW.intl.string(eW.t.N6ixy8),
        g = l && u ? { icon: td.NitroWheelIcon, tooltip: c } : void 0;
    return (l || a) && (!l || !o || a || u)
        ? (0, i.jsx)(tp, {
              heading: d,
              hideHeading: !l,
              headingIcon: g,
              children: l
                  ? (0, i.jsx)(tT, { displayProfile: n, className: tP.u })
                  : (0, i.jsx)(tg.A, { userBio: s, guildId: r?.guildId, setLineClamp: !1 }),
          })
        : null;
}
var tO = n(136969),
    t_ = n(722868),
    tL = n(822775),
    tw = n(982985),
    tD = n(418269),
    tM = n(34188),
    tG = n(969935),
    tU = n(993401);
function tF(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, j.Ay)(),
        r = l.useCallback(() => {
            (0, tG.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(tU.q3, {
        action: "VISIT_SHOP",
        icon: tM.ShopIcon,
        tooltipText: eW.intl.string(eW.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tW = n(508882),
    tB = n(102951);
function tV(e) {
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
        g = (0, t_.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: u }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, tB.J)({ userId: t.id }),
        h = f.length > 0 || m || p;
    return o === T.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? d
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tw.e, { userId: t.id, variant: "primary", disabled: !0 }),
                        (0, i.jsx)(tF, {}),
                        (0, i.jsx)(tD.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tL.A, { user: t, guildId: l, onClose: u }),
                        (0, i.jsx)(tF, {}),
                        (0, i.jsx)(tD.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(tw.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(tD.Zt, { user: t, guildId: l, viewProfileItem: g }),
                  ],
              })
            : o === T.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tw.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(tD.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === T.eA$.FRIEND || o === T.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tw.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tW.Ef, { user: t, relationshipType: o, analyticsLocation: c }),
                          (0, i.jsx)(tD.Zt, { user: t, guildId: l, viewProfileItem: g }),
                      ],
                  })
                : o === T.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tw.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tW.ES, {
                                user: t,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(tD.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tW.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(tw.l, { userId: t.id, onClose: tO.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(tD.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    });
}
var tH = n(463156),
    tz = n(866665),
    tY = n(28863),
    tK = n(509434),
    tq = n(307301),
    tX = n(149468),
    tZ = n(643068),
    tJ = n(522978),
    t$ = n(129230),
    tQ = n(486020),
    t0 = n(889558),
    t1 = n(783419);
let t2 = "User Profile Modal V2";
function t5(e) {
    let t = eu.A.get(e);
    ((0, tJ.A)({ platformType: t.type, location: t2 }),
        t$.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: t2,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function t8() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: t5, stackingBehavior: "stack" });
}
function t6(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, el.An)(r[t1.pK.CREATED_AT], n),
        a = eu.A.get((0, tZ.ML)(t.type));
    return (0, i.jsx)(t4, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tz.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eX.E, { variant: "body-sm/normal", className: ta.GW, children: t.name }),
                  })
                : (0, i.jsx)(tY.Anchor, {
                      href: e,
                      className: ta.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eW.intl.string(eW.t.q5jLJB)}`
                              : `${t.name}, ${eW.intl.string(eW.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, tX.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, t0.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: ta.vi,
                          children: [
                              (0, i.jsx)(tz.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eX.E, {
                                      variant: "body-sm/normal",
                                      className: ta.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tK.LinkExternalSmallIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: ta.wP,
                              }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return t.type === T.fg2.REDDIT
                ? (0, tt.xE)(r)
                : t.type === T.fg2.STEAM
                  ? (0, tt.dy)(r)
                  : t.type === T.fg2.LETTERBOXD
                    ? (0, tt.uq)(r)
                    : t.type === T.fg2.BLUESKY || t.type === T.fg2.MASTODON || t.type === T.fg2.TWITTER
                      ? (0, tt.ED)(r)
                      : t.type === T.fg2.PAYPAL
                        ? (0, tt.gZ)(r)
                        : t.type === T.fg2.EBAY
                          ? (0, tt.ub)(r)
                          : t.type === T.fg2.TIKTOK
                            ? (0, tt.HU)(r)
                            : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function t3(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = tQ.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(t4, {
        renderAccountName: function () {
            return (0, i.jsx)(tz.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eX.E, {
                    variant: "body-sm/normal",
                    className: ta.GW,
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
function t4(e) {
    let {
        renderAccountName: t,
        renderMetadata: n,
        platformName: l,
        platformIcon: r,
        createdAtDate: a,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, i.jsxs)("li", {
        className: ta.FI,
        children: [
            (0, i.jsx)(tz.m, {
                __unsupportedReactNodeAsText: l,
                children: (0, i.jsx)("div", {
                    className: ta.k_,
                    children: (0, i.jsx)("img", {
                        alt: eW.intl.formatToPlainString(eW.t.rtm15P, { name: l }),
                        className: s()(ta.tV, o ? ta.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ta.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, i.jsx)(eX.E, {
                                    variant: "body-xs/normal",
                                    children: eW.intl.format(eW.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ta.yu, children: n() }),
                ],
            }),
        ],
    });
}
function t9(e) {
    let { connections: t, applicationIdentities: n, userId: l, allowEditing: r, className: o } = e,
        u = (0, a.bG)([er.default], () => er.default.locale);
    if (!r && 0 === t.length && 0 === n.length) return null;
    let d = t.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: s()(ta.kL, o),
        children: [
            d &&
                (0, i.jsxs)("ul", {
                    className: ta.V,
                    children: [
                        t.map((e) => (0, i.jsx)(t6, { account: e, userId: l, locale: u }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(t3, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e7.D, {
                    className: ta.qG,
                    onClick: t8,
                    children: [
                        (0, i.jsx)(tq.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(eX.E, {
                            variant: "body-xs/medium",
                            color: "none",
                            children: eW.intl.string(eW.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var t7 = n(193885),
    ne = n(408278),
    nt = n(23722);
let nn = { id: "default" },
    ni = l.createContext(null),
    nl = l.createContext(null);
function nr(e) {
    let { children: t } = e,
        [n, r] = l.useState(nn),
        [s, o] = l.useState(null),
        u = (0, nt.A)((e) => {
            r(e);
        }),
        d = l.useCallback(() => {
            r(nn);
        }, []),
        c = (0, a.bG)([C.default], () => J.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        g = c ? nn : n,
        f = !c && s?.id === "premiumTryItOut",
        m = l.useCallback(() => {
            o(g);
        }, [g]),
        p = l.useMemo(
            () => ({ selectedPanel: g, readyPanel: s, handlePanelTransitionComplete: m, navigate: u, goBack: d }),
            [g, s, m, u, d],
        );
    return (0, i.jsx)(nl.Provider, { value: f, children: (0, i.jsx)(ni.Provider, { value: p, children: t }) });
}
function ns() {
    let e = l.useContext(nl);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function na() {
    let {
        selectedPanel: e,
        readyPanel: t,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    } = (function () {
        let e = l.useContext(ni);
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
var no = n(194261),
    nu = n(789645),
    nd = n(534514),
    nc = n(805251),
    ng = n(821609),
    nf = n(39623),
    nm = n(890377),
    np = n(517461),
    nh = n(609425),
    nx = n(145359),
    nA = n(804661),
    nI = n(465794),
    nv = n(468450),
    nb = n(462887),
    nj = n(765178),
    ny = n(736653),
    nC = n(461797),
    nE = n(469054),
    nS = n(601298),
    nN = n(207803);
function nk() {
    let e = (0, ny.Ay)(),
        t = (0, nb.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nC.Wt)(e);
                (0, nN.w5)({
                    banner: (0, nS.X)({
                        assetOrigin: nE.E.NEW_ASSET,
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
            eb.A.hasTryItOutChanges() || n((0, nC.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = eb.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nC.B$)(e),
                i = (0, nC.Wt)(t);
            (t$.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                nj.O.announce(eW.intl.formatToPlainString(eW.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nT = n(487233),
    nP = n(999618),
    nR = n(317097),
    nO = n(602853),
    n_ = n(265872),
    nL = n(508274),
    nw = n(654107),
    nD = n(930349);
function nM(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nO.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nw.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([eb.A, ee.A], () => ({
            pendingAccentColor: eb.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: ee.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, nR.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, tx.p)({ accentColor: e }), []);
    return (0, i.jsx)(n_.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nL.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nD.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eW.intl.string(eW.t["/X3fkf"]),
                editButtonA11yLabel: eW.intl.string(eW.t.kRMJ1v),
                currentValueA11yLabel: (0, nR.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nR.Hl)(c) } }),
            }),
    });
}
var nG = n(841183),
    nU = n(450373),
    nF = n(317139);
function nW(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nF.o, style: { backgroundColor: t } });
}
function nB(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: nF._ });
}
function nV(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, nO.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, nR.LX)(s),
        { hex: o } = (0, nU.A)(a),
        u = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != u ? (0, i.jsx)(nB, { src: u, imageDescription: r }) : (0, i.jsx)(nW, { backgroundColor: o });
}
function nH(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eW.intl.string(eW.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(nD.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eW.intl.string(eW.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nV, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
    });
}
var nz = n(569059);
function nY(e) {
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
                currentValueA11yLabel: (0, nG.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        m = (0, eA.Ac)(u, g)
            ? {
                  onClick: () => (0, nv.rM)(null, g, (e) => (0, tx.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eW.intl.string(f ? eW.t.jHlJNS : eW.t.tT9n7D),
              }
            : void 0,
        p = (0, nz.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nH, {
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
var nK = n(259065),
    nq = n(922301),
    nX = n(16371),
    nZ = n(523312);
let nJ = "heading-xl/semibold";
function n$(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nZ.MC, { [nZ.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eX.E, {
                      variant: nJ,
                      children: (0, i.jsx)(nX.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nq.G.ANIMATED : nq.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eX.E, { variant: nJ, className: nZ.kr, children: t }),
    });
}
function nQ(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eW.intl.string(eW.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(nD.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eW.intl.string(eW.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(n$, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
    });
}
function n0(e) {
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
                      onClick: () => (0, tx.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: b ? "reset" : "remove",
                      accessibleLabel: eW.intl.string(b ? eW.t.en3ogK : eW.t["Wqmi/h"]),
                  }
                : void 0,
        k = l.useCallback(() => {
            (o?.(), (0, nK.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(nQ, {
        affordance: (!v && (I || null != A)) || b ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nG.I9)(y),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: y,
        disabled: r,
    });
}
var n1 = n(450232),
    n2 = n(89851);
function n5(e) {
    let { heading: t, description: n, children: l, disabled: r = !1, showNitroIcon: a = !1, badge: o } = e;
    return (0, i.jsxs)("div", {
        className: n2.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(n2.Pf, { [n2.r9]: r }),
                children: [
                    (0, i.jsx)(nd.D, {
                        className: n2.DV,
                        variant: "body-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    a && (0, i.jsx)(n1.A, { className: n2.IX, size: "xs", color: "inherit", disabled: r }),
                    null != o && (0, i.jsx)("span", { className: n2.ot, children: o }),
                    null != n && (0, i.jsx)(eX.E, { variant: "body-xs/normal", color: "text-subtle", children: n }),
                ],
            }),
            l,
        ],
    });
}
function n8(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: n2.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.CircleErrorIcon, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eX.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var n6 = n(897661),
    n3 = n(332560),
    n4 = n(659373),
    n9 = n(192308),
    n7 = n(506988),
    ie = n(211824);
function it(e) {
    let { user: t, disabled: r, onOpen: s } = e;
    (0, n3.UF)(n7.uF.DISPLAY_NAME_STYLES_SETTINGS, n3.rl.NON_NITRO_CARD, !0);
    let a = (0, n6.b)(t),
        { isApplied: o, removeCampaignDisplayNameStyle: u } = (0, n4.K)(t),
        d = o ? ie.AA : null,
        c = l.useCallback(() => {
            (s?.(),
                (0, n9.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(249169),
                            n.e(317446),
                            n.e(71866),
                            n.e(587882),
                            n.e(891473),
                            n.e(411938),
                            n.e(198496),
                            n.e(77413),
                            n.e(267526),
                            n.e(669174),
                            n.e(967062),
                            n.e(653383),
                            n.e(217991),
                            n.e(9796),
                            n.e(952068),
                            n.e(768289),
                            n.e(772565),
                            n.e(195707),
                            n.e(533781),
                            n.e(328276),
                            n.e(592e3),
                            n.e(524434),
                            n.e(882304),
                            n.e(984),
                            n.e(226229),
                            n.e(118994),
                            n.e(516497),
                            n.e(24774),
                            n.e(326794),
                            n.e(670870),
                            n.e(684231),
                            n.e(570690),
                            n.e(886631),
                            n.e(435860),
                            n.e(426782),
                            n.e(406322),
                            n.e(942571),
                            n.e(464759),
                            n.e(763343),
                            n.e(775417),
                            n.e(194704),
                            n.e(231541),
                            n.e(274461),
                            n.e(830560),
                            n.e(384054),
                            n.e(847131),
                            n.e(572430),
                            n.e(40799),
                            n.e(335930),
                            n.e(816348),
                            n.e(109383),
                            n.e(818291),
                            n.e(243794),
                            n.e(519435),
                            n.e(634225),
                            n.e(10985),
                            n.e(171206),
                            n.e(828178),
                            n.e(45036),
                            n.e(974119),
                            n.e(206988),
                            n.e(434683),
                            n.e(572388),
                            n.e(505928),
                            n.e(752657),
                            n.e(747973),
                            n.e(314001),
                            n.e(885251),
                            n.e(857871),
                            n.e(529366),
                            n.e(390430),
                            n.e(990185),
                            n.e(752924),
                            n.e(849162),
                            n.e(660201),
                            n.e(770925),
                            n.e(179301),
                            n.e(918347),
                            n.e(102247),
                            n.e(689521),
                            n.e(237403),
                            n.e(10886),
                            n.e(84993),
                            n.e(592268),
                            n.e(374962),
                            n.e(553627),
                            n.e(887141),
                            n.e(736919),
                            n.e(631323),
                            n.e(464452),
                            n.e(243852),
                            n.e(714144),
                            n.e(458855),
                            n.e(305161),
                            n.e(845486),
                            n.e(401425),
                            n.e(120561),
                            n.e(880186),
                            n.e(58353),
                            n.e(17256),
                            n.e(377016),
                            n.e(60268),
                            n.e(598761),
                            n.e(60955),
                            n.e(887093),
                            n.e(393336),
                            n.e(126437),
                            n.e(481647),
                            n.e(749248),
                            n.e(704434),
                            n.e(900361),
                            n.e(21921),
                            n.e(811310),
                            n.e(258398),
                            n.e(676418),
                            n.e(70833),
                            n.e(897073),
                            n.e(161275),
                            n.e(761253),
                            n.e(401518),
                            n.e(166495),
                            n.e(362274),
                            n.e(49782),
                            n.e(570849),
                            n.e(45072),
                            n.e(942724),
                            n.e(139970),
                            n.e(173764),
                            n.e(940258),
                            n.e(830221),
                            n.e(858164),
                            n.e(357688),
                            n.e(308555),
                            n.e(857467),
                            n.e(977547),
                            n.e(508371),
                            n.e(885434),
                            n.e(586127),
                            n.e(41250),
                            n.e(179049),
                            n.e(132737),
                            n.e(344502),
                            n.e(146070),
                            n.e(836863),
                            n.e(538733),
                            n.e(658216),
                            n.e(854622),
                            n.e(629482),
                            n.e(590365),
                            n.e(989088),
                            n.e(37977),
                            n.e(136149),
                            n.e(470068),
                            n.e(817989),
                            n.e(720590),
                            n.e(147626),
                            n.e(613867),
                            n.e(689393),
                            n.e(727779),
                            n.e(412743),
                            n.e(585503),
                            n.e(891585),
                            n.e(203589),
                            n.e(382465),
                            n.e(294857),
                            n.e(15481),
                            n.e(179745),
                            n.e(668802),
                            n.e(631358),
                            n.e(459414),
                            n.e(335395),
                            n.e(882777),
                            n.e(860315),
                            n.e(945413),
                            n.e(402026),
                            n.e(163235),
                            n.e(632756),
                            n.e(564850),
                            n.e(941040),
                            n.e(124791),
                            n.e(35771),
                            n.e(648344),
                            n.e(170104),
                            n.e(491793),
                            n.e(256769),
                            n.e(902564),
                            n.e(30441),
                            n.e(704727),
                            n.e(374916),
                            n.e(214285),
                            n.e(248330),
                            n.e(373004),
                            n.e(803332),
                            n.e(938149),
                            n.e(408362),
                            n.e(741678),
                            n.e(852617),
                            n.e(102698),
                            n.e(125964),
                            n.e(415266),
                            n.e(787139),
                            n.e(737021),
                            n.e(775951),
                            n.e(731751),
                            n.e(254506),
                            n.e(874342),
                            n.e(138830),
                            n.e(258033),
                            n.e(757901),
                            n.e(976516),
                            n.e(400501),
                            n.e(985794),
                            n.e(695358),
                            n.e(767837),
                            n.e(473384),
                            n.e(432209),
                            n.e(996868),
                            n.e(368062),
                            n.e(859991),
                            n.e(667092),
                            n.e(225575),
                            n.e(709371),
                            n.e(466718),
                            n.e(330724),
                            n.e(599719),
                            n.e(987478),
                            n.e(858337),
                            n.e(260218),
                            n.e(97210),
                            n.e(493014),
                            n.e(935948),
                            n.e(215920),
                            n.e(698547),
                            n.e(355949),
                            n.e(24922),
                            n.e(24889),
                            n.e(522261),
                            n.e(213924),
                            n.e(932606),
                            n.e(338601),
                            n.e(593020),
                            n.e(643104),
                            n.e(702813),
                            n.e(39038),
                            n.e(847158),
                            n.e(657003),
                            n.e(557940),
                            n.e(9205),
                            n.e(68532),
                            n.e(428367),
                            n.e(144989),
                            n.e(901922),
                            n.e(763096),
                            n.e(431714),
                            n.e(225612),
                            n.e(678050),
                            n.e(108634),
                            n.e(273165),
                            n.e(836150),
                            n.e(365074),
                            n.e(472789),
                            n.e(137937),
                            n.e(497746),
                            n.e(803191),
                            n.e(111346),
                            n.e(940248),
                            n.e(271217),
                            n.e(396325),
                            n.e(141049),
                            n.e(864137),
                            n.e(288688),
                            n.e(512162),
                            n.e(866008),
                            n.e(238742),
                            n.e(531158),
                            n.e(482511),
                            n.e(504199),
                            n.e(150200),
                            n.e(285350),
                            n.e(829961),
                            n.e(769369),
                            n.e(311471),
                            n.e(122266),
                            n.e(795365),
                            n.e(70008),
                            n.e(655602),
                            n.e(486155),
                            n.e(584732),
                            n.e(244645),
                            n.e(718792),
                            n.e(561622),
                            n.e(44761),
                            n.e(100126),
                            n.e(398254),
                            n.e(985440),
                            n.e(143302),
                            n.e(475289),
                            n.e(886492),
                            n.e(172158),
                            n.e(574252),
                            n.e(298748),
                            n.e(893513),
                        ]).then(n.bind(n, 596016));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s]);
    return (0, i.jsx)(nQ, {
        affordance: o ? { onClick: u, type: "remove", accessibleLabel: eW.intl.string(eW.t["Wqmi/h"]) } : void 0,
        variant: "bar",
        onClick: c,
        currentValueA11yLabel: (0, nG.I9)(d),
        "aria-haspopup": "dialog",
        displayName: a,
        displayNameStyles: d,
        disabled: r,
    });
}
var ii = n(887988),
    il = n(366010),
    ir = n(674658),
    is = n(617061),
    ia = n(203632),
    io = n(536572);
let iu = new Set(),
    id = 0;
var ic = n(993408),
    ig = n(841702),
    im = n(515718),
    ip = n(94039);
function ih(e) {
    "" !== e.thumbnailPreviewSrc && (0, im.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var ix = n(599752),
    iA = n(249360);
let iI =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    iv =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function ib(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, ny.Ay)(),
        d = (0, il.M)(u) ? iI : iv,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, ig.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ic.wo)(r, i), [r, i]),
                a = (0, ip.A)({ enabled: t, isInteracting: n, items: s, preload: ih });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((id += 1), iu.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: ix.ti,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: ix.QQ }),
                f?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(ix.yY, { [iA.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(O.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: ia.HL.FromStart,
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
function ij(e) {
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
        { product: I } = (0, ir.q)(A?.skuId),
        v = p ? null != m : null != f,
        b =
            null != A && v
                ? {
                      onClick: () => (0, tx.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eW.intl.string(x ? eW.t["SQy/Po"] : eW.t.uMuafO),
                  }
                : void 0,
        y = l.useCallback(() => {
            (0, is.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(nD.A, {
        buttonRef: o,
        affordance: h && !x ? "add" : b,
        variant: s,
        onClick: y,
        fieldA11yLabel: eW.intl.string(eW.t.wR5wOo),
        editButtonA11yLabel: eW.intl.string(eW.t["/6nv6N"]),
        currentValueA11yLabel: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eW.intl.string(eW.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eW.intl.string(i ? eW.t["1M4m8w"] : eW.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, io.VG)(I), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(ib, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var iy = n(163697),
    iC = n(515727),
    iE = n(746002);
function iS(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, iE.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: iE.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, im.NN)(n).catch(() => {});
        });
}
var iN = n(715196);
function ik(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function iT(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, ny.Ay)(),
        d = (0, il.M)(u) ? iI : iv,
        c = (0, L.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, ig.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ic.MG)(r, i), [r, i]);
            return (0, ip.A)({ enabled: t, isInteracting: n, items: s, preload: iS });
        })({ enabled: n && !r && !o, isInteracting: a }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != m ? (0, iy.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != m &&
                (0, i.jsx)("div", {
                    className: s()(iN.hm, h, { [iA.O]: f }),
                    style: p,
                    "aria-hidden": f,
                    children: (0, i.jsx)(D.A, { frame: m, filterLayer: ik, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(iN.ti, { [iN.yT]: null == m }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: iN.QQ, draggable: !1 }),
            }),
        ],
    });
}
function iP(e) {
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
        { product: A } = (0, ir.q)(x?.skuId),
        I = m ? null != f : null != g,
        v =
            null != x && I
                ? {
                      onClick: () => (0, tx.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eW.intl.string(h ? eW.t.j6hZyM : eW.t.nQBruk),
                  }
                : void 0,
        b = l.useCallback(() => {
            (0, iC.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(nD.A, {
        buttonRef: s,
        affordance: p && !h ? "add" : v,
        variant: "square",
        onClick: b,
        fieldA11yLabel: eW.intl.string(eW.t.GWrZOd),
        editButtonA11yLabel: eW.intl.string(eW.t["oTSa/q"]),
        currentValueA11yLabel: (function (e) {
            let { profileFramePreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eW.intl.string(eW.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eW.intl.string(i ? eW.t.yFeGB5 : eW.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, io.VG)(A), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(iT, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var iR = n(684732),
    iO = n(498596),
    i_ = n(871524);
function iL(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, nR.Hl)(t)}, ${(0, nR.Hl)(n)})`;
    return (0, i.jsx)("div", { className: i_.D7, style: { background: r }, children: l });
}
function iw(e) {
    let { color: t } = e,
        n = (0, nR.Hl)(t),
        l = (0, nR.bJ)(t, 0xffffff) < iO.Tr.NonText;
    return (0, i.jsx)("div", {
        className: i_.OS,
        children: (0, i.jsx)("div", { className: s()(i_.Hy, { [i_.rY]: l }), style: { backgroundColor: n } }),
    });
}
function iD(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e7.D, {
        ...a,
        innerRef: s ?? o,
        className: i_.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(iw, { color: t }),
    });
}
function iM(e) {
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
    return (0, i.jsx)(n_.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: u,
        renderPopout: (e) => (0, i.jsx)(nL.VN, { ...e, value: t, onChange: d, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(iD, {
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
function iG(e) {
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
        A = (0, nR.Hl)(n),
        I = (0, nR.Hl)(r),
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
    return (0, i.jsxs)(nD.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: u,
        deleteButton: j,
        children: [
            (0, i.jsx)(f.A, { id: v, children: eW.intl.formatToPlainString(eW.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(f.A, { id: b, children: eW.intl.formatToPlainString(eW.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(iL, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(iM, {
                        color: n,
                        ariaLabel: eW.intl.string(eW.t["1PvTpO"]),
                        ariaDescribedBy: v,
                        suggestedColors: o,
                        onSelect: s,
                        disabled: u,
                        isOpen: "theme-primary" === m,
                        onRequestOpen: () => p("theme-primary"),
                        onRequestClose: () => p(null),
                        buttonRef: h,
                    }),
                    (0, i.jsx)(iM, {
                        color: r,
                        ariaLabel: eW.intl.string(eW.t.stG76C),
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
function iU(e) {
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
        p = (0, nO.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nw.rh)(x, p, !1),
        I = l.useCallback(
            (e) => {
                (0, tx.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, iR.l)(u, o)
                ? {
                      onClick: () => (0, tx.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eW.intl.string(eW.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, i.jsx)(iG, {
              fieldA11yLabel: eW.intl.string(eW.t.DMeO2X),
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
var iF = n(629985);
function iW(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(m.F, { children: (0, i.jsx)("div", { className: s()(iF.k, { [iF.V]: n }), children: t }) });
}
var iB = n(516521),
    iV = n(424290);
function iH(e) {
    let { children: t } = e;
    return (0, i.jsx)(iB.zC, { className: iV.X, children: (0, i.jsx)("div", { className: iV.Q, children: t }) });
}
var iz = n(77528),
    iY = n(811611),
    iK = n(976860),
    iq = n(38145);
function iX() {
    return l.useCallback(() => {
        ((0, iK.pX)(T.BVt.NITRO_HOME), (0, iq.M)());
    }, []);
}
var iZ = n(423814),
    iJ = n(511484),
    i$ = n(682901);
function iQ(e) {
    let t = (0, a.bG)([C.default], () => J.Ay.isPremium(C.default.getCurrentUser())),
        n = (0, iZ.O)();
    return t
        ? eW.intl.string(eW.t.AfRWI8)
        : (0, iJ.U9)(n, i$.pe.TIER_2) && n?.discount.amount != null
          ? eW.intl.formatToPlainString(eW.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var i0 = n(155053);
function i1() {
    let e = (0, iz.V)();
    return e?.subscriptionTrial?.skuId === i$.pe.TIER_2 ? e : null;
}
function i2() {
    let e = iQ(eW.intl.string(eW.t.pj0XBN));
    return (0, i.jsx)(nI.A, { subscriptionTier: i$.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function i5(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iX(),
        a = (0, J.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, iY.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: i0.nH,
        children: [
            (0, i.jsxs)("div", {
                className: i0.qf,
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: eW.intl.string(eW.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(nc.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eX.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eW.intl.format(eW.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(nI.A, {
                subscriptionTier: i$.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eX.E, { variant: "body-xs/normal", color: "text-muted", className: i0.u8, children: o }),
        ],
    });
}
function i8() {
    let e = i1();
    return null == e ? (0, i.jsx)(i2, {}) : (0, i.jsx)(i5, { trialOffer: e });
}
var i6 = n(55619),
    i3 = n(848717);
function i4() {
    return (0, i.jsxs)("div", {
        className: i3.k,
        children: [
            (0, i.jsx)(eX.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eW.intl.string(eW.t.JFY17v),
            }),
            (0, i.jsx)(ng.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eW.intl.string(eW.t.R9GHya),
                onClick: function () {
                    return i6.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var i9 = n(342866),
    i7 = n(968475);
function le(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eb.A], () => ({
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(i9.A, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nG.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? i7.$T : void 0,
    });
}
function lt(e) {
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
                      return eW.intl.formatToPlainString(eW.t.OIhEjF, { truncatedText: n });
                  })(d)
                : (0, nG.ID)(u, o);
    return (0, i.jsx)(nH, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: d,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
    });
}
function ln(e) {
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
    return (0, i.jsx)(nQ, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        currentValueA11yLabel: (0, nG.I9)(u),
        shouldAlwaysAnimate: null == r,
    });
}
function li(e) {
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
function ll(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = li(t),
        u = (0, nO.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nw.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, nN.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iG, {
              fieldA11yLabel: eW.intl.string(eW.t["/WsW/1"]),
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
function lr(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = li(t),
        o = l.useId(),
        u = l.useId();
    if (null == s || null == a) return null;
    let d = (0, nR.Hl)(s),
        c = (0, nR.Hl)(a);
    return (0, i.jsxs)(nD.Y, {
        fieldA11yLabel: eW.intl.string(eW.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(f.A, { id: o, children: eW.intl.formatToPlainString(eW.t.v4X2kc, { colorHex: d }) }),
            (0, i.jsx)(f.A, { id: u, children: eW.intl.formatToPlainString(eW.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(iL, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(iD, {
                        color: s,
                        onClick: n,
                        "aria-label": eW.intl.string(eW.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(iD, {
                        color: a,
                        onClick: r,
                        "aria-label": eW.intl.string(eW.t.stG76C),
                        "aria-describedby": u,
                    }),
                ],
            }),
        ],
    });
}
var ls = n(847081);
function la(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = na(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, j.Ay)();
            return l.useCallback(() => {
                (0, nK.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nz._)({ isPremiumTryItOut: !0, returnRef: s }),
        f = (0, nz.P)({ isPremiumTryItOut: !0, returnRef: a }),
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
            className: ls.T,
            children: [
                (0, i.jsx)(n5, {
                    heading: eW.intl.string(eW.t.NEzEws),
                    children: (0, i.jsx)(ln, {
                        user: t,
                        buttonRef: r,
                        onClick: m ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n5, {
                    heading: eW.intl.string(eW.t.DMeO2X),
                    children: m
                        ? (0, i.jsx)(ll, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(lr, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(n5, {
                    heading: eW.intl.string(eW.t.Vgdusv),
                    children: (0, i.jsx)(lt, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: m ? f : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n5, {
                    heading: eW.intl.string(eW.t.Dt3ZUr),
                    children: (0, i.jsx)(le, {
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
var lo = n(847374),
    lu = n(111159),
    ld = n(682163),
    lc = n(711014),
    lg = n(941030),
    lf = n(561392),
    lm = n(286615),
    lp = n(15626),
    lh = n(715022),
    lx = n(44482),
    lA = n(470791);
function lI(e) {
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
            let { reducedMotion: e } = l.useContext(eP.C),
                {
                    isOpen: t,
                    setIsOpen: n,
                    refs: i,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, lf.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, lm.DL)(o, {
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
        C = l.useContext(lp._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        T = l.useRef(null),
        [P, R] = l.useState(null),
        O = null != P ? (0, lh.ZN)(N, P) : void 0,
        _ = l.useRef(!1),
        L = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, lh.fI)(e.value, [n])), [n, t]),
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
                if (!T.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (h && null != P) {
                        let e = t[P];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    h && x(!1);
                }
            },
            [h, P, t, r, x],
        ),
        F = l.useCallback(
            (e) => {
                if (d) return;
                let t = e[0];
                null != t && (r(t.value), G());
            },
            [d, r, G],
        ),
        { activeIndex: W, handleKeyDown: B } = (0, lg.l)(!0, t),
        V = l.useRef(null);
    l.useEffect(() => {
        let e = W !== V.current;
        ((V.current = W), null != W && e && (R(W), h || ((_.current = !0), x(!0))));
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
                            if (null != P) {
                                let e = t[P];
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
                        if (null == P || P > n - 1) return;
                        {
                            let e = t[P];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        (R(0), h || ((_.current = !0), x(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        (R(n - 1), h || ((_.current = !0), x(!0)));
                        break;
                    case "Tab":
                        if (h && null != P) {
                            let e = t[P];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((L.current = !0), x(!1));
                        break;
                    case "Escape":
                        h && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [d, h, t, P, F, G, r, x, B],
        ),
        z = Math.max(
            t.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        Y = l.useRef(!1);
    l.useEffect(() => {
        c || !h || Y.current
            ? h || ((Y.current = !1), R(null), (_.current = !1))
            : ((Y.current = !0), _.current || R(t.length > 0 ? z : null), (_.current = !1), k.current?.focus());
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
            ((T.current = e), A.setReference(e));
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
                    className: s()(lA.S_, u),
                    ...b(),
                    style: { ...I, ...j },
                    children: (0, i.jsx)(lg.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: P,
                        renderListItem: (e) => (null != m ? m(e) : (0, i.jsx)(lx.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var lv = n(216384);
let lb = "MAIN_PROFILE";
function lj(e) {
    let { guild: t } = e;
    return (0, i.jsx)(ld.Ay, { className: lv.$f, guild: t, size: ld.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function ly(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: lv.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: lv.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: lv.qL,
                children: [
                    (0, i.jsx)(eX.E, { variant: "body-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(eX.E, {
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
function lC(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e7.D, {
        innerRef: r,
        className: s()(lv.L5, { [lv.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eX.E, {
                variant: "body-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: lv.v9,
                children: n,
            }),
            (0, i.jsx)(lo.ChevronSmallDownIcon, {
                className: lv.u4,
                size: "sm",
                color: !0 === l ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function lE(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([lc.Ay], () => lc.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([Y.A], () => Y.A.getGuilds()),
        c = (0, a.bG)([tr.A], () => {
            let e = tr.A.getGuildId();
            return null == e || eb._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ev.Ay, lc.Ay], () => {
            let e = {};
            for (let t of lc.Ay.getFlattenedGuildIds()) {
                let n = ev.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        f = l.useMemo(() => {
            let e = {
                    id: lb,
                    label: eW.intl.string(eW.t["2p07FR"]),
                    value: lb,
                    leading: (0, i.jsx)(lu.ClydeIcon, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, i.jsx)(lj, { guild: n }),
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
                          leading: (0, i.jsx)(lj, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        m = t ?? lb,
        p = f.find((e) => e.value === m) ?? f[0],
        x = l.useCallback(
            (e) => {
                let n = e === lb ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(lI, {
        className: lv.kL,
        label: eW.intl.string(eW.t.rki38K),
        listboxClassName: lv.yt,
        options: f,
        value: m,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(ly, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(lC, { leading: p.value === lb ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var lS = n(701256),
    lN = n(288490);
let lk = "profile-editing-nameplate-error",
    lT = "profile-editing-avatar-error",
    lP = "profile-editing-avatar-decoration-error",
    lR = "profile-editing-banner-error",
    lO = "profile-editing-display-name-style-error";
function l_(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lN.D0, t),
        children: (0, i.jsx)("div", { className: lN.ZN, children: (0, i.jsx)(no.LockIcon, { size: "xs" }) }),
    });
}
function lL() {
    let [e, t] = (0, np.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lN.X6,
              children: [
                  (0, i.jsx)(eX.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      children: eW.intl.string(eW.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e7.D, {
                      "aria-label": eW.intl.string(eW.t.rSe9ra),
                      className: lN.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(nu.XSmallIcon, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lw() {
    let e = iX(),
        t = iQ(eW.intl.string(eW.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lN.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lN.tm,
                children: [
                    (0, i.jsx)(nd.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: eW.intl.string(eW.t.bO0TOe),
                    }),
                    (0, i.jsx)(eX.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: eW.intl.format(eW.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(nI.A, { subscriptionTier: i$.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(l_, { className: lN.nd }),
        ],
    });
}
function lD() {
    return (0, i.jsx)(eX.E, {
        variant: "body-xs/normal",
        color: "text-subtle",
        className: lN.BJ,
        "aria-hidden": !0,
        children: eW.intl.format(eW.t.kYv9DM, {
            nitroIconHook: () =>
                (0, i.jsx)(td.NitroWheelIcon, { size: "xxs", color: "currentColor", className: lN.qp }),
        }),
    });
}
function lM(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(n5, {
        heading: eW.intl.string(eW.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(ii.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lk : void 0 }),
            (0, i.jsx)(n8, { id: lk, message: r }),
        ],
    });
}
function lG(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(n5, {
        heading: eW.intl.string(eW.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nT.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lT : void 0 }),
            (0, i.jsx)(nP.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lP : void 0 }),
            (0, i.jsx)(n8, { id: lT, message: (0, nv.d3)(r) }),
            (0, i.jsx)(n8, { id: lP, message: s }),
        ],
    });
}
function lU(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eU.kn)(l ? [] : [ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        { pendingDisplayNameStyles: u } = (0, eA.B0)(t, n ?? void 0),
        d = (0, nh.A)({
            userId: t.id,
            guildId: n ?? void 0,
            pendingDisplayNameStyles: u,
            ignoreDisabledStylesSetting: !0,
        }),
        { showCampaignPromo: c, showCampaignNewBadge: g } = (0, nA.hh)({
            location: "UserProfileModalV2EditingPanel",
            displayNameStyles: d,
            disabled: l,
        });
    return (0, i.jsxs)(n5, {
        heading: eW.intl.string(eW.t.NEzEws),
        description: c ? eW.intl.string(lS.default.WyZOg3) : void 0,
        disabled: l,
        showNitroIcon: !0,
        badge:
            o || g
                ? (0, i.jsx)("div", {
                      className: lN.IO,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(nc.E, { type: "new", variant: "primary" }),
                  })
                : void 0,
        children: [
            (0, i.jsx)(n0, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lO : void 0,
                onOpen: o ? () => a(eF.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(n8, { id: lO, message: r }),
        ],
    });
}
function lF(e) {
    let { user: t, disabled: n } = e,
        { showCampaignFontBadge: l, dismissCampaignFontBadge: r } = (0, nA.wP)("UserProfileModalV2EditingPanel");
    return (0, i.jsx)(n5, {
        heading: eW.intl.string(eW.t.NEzEws),
        description: eW.intl.string(lS.default.WyZOg3),
        disabled: n,
        badge: l
            ? (0, i.jsx)("div", {
                  className: lN.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(nc.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: (0, i.jsx)(it, { user: t, disabled: n, onOpen: l ? r : void 0 }),
    });
}
function lW(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(n5, {
        heading: eW.intl.string(eW.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iU, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nY, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lR : void 0 }),
            (0, i.jsx)(n8, { id: lR, message: (0, nv.d3)(s) }),
        ],
    });
}
function lB(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(n5, {
        heading: eW.intl.string(eW.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nM, { user: t, disabled: n }),
    });
}
function lV(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(n5, {
        heading: eW.intl.string(eW.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(ij, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(iP, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lH = "premium-try-it-out-description";
function lz(e) {
    let { user: t } = e,
        n = iX(),
        { navigate: l } = na();
    return (
        nk(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lH,
            className: lN.DX,
            children: [
                (0, i.jsx)(l_, { className: lN.x$ }),
                (0, i.jsxs)("div", {
                    className: lN.sb,
                    children: [
                        (0, i.jsx)(eX.E, {
                            id: lH,
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eW.intl.format(eW.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(ng.$, {
                            variant: "primary",
                            size: "sm",
                            icon: nf.EyeIcon,
                            text: eW.intl.string(eW.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(la, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lY(e) {
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
        g = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        f = (0, nt.A)(c),
        m = null != l,
        p = J.Ay.canUsePremiumProfileCustomization(t),
        h = m && !p,
        x = !p && !m,
        A = (0, nx.Lz)(ie.vB.DISPLAY_NAME_STYLE, "UserProfileModalV2EditingPanel"),
        I = x && A === ie.S9.SELECTABLE,
        v = m && !p && !g,
        b = s || o,
        j = (0, a.bG)([eb.A], () => eb.A.getErrors(l)),
        y = j.nameplate?.[0] ?? j.nameplate_sku_id?.[0],
        C = j.avatar?.[0],
        E = j.avatar_decoration_sku_id?.[0],
        S = j.banner?.[0],
        N = j.display_name_font_id?.[0] ?? j.display_name_effect_id?.[0] ?? j.display_name_colors?.[0];
    return (0, i.jsxs)(iW, {
        hasGradientBackground: v,
        children: [
            (0, i.jsxs)("div", {
                className: lN.wx,
                children: [
                    (0, i.jsx)(tz.m, {
                        text: eW.intl.string(eW.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(ne.K, {
                            buttonRef: u,
                            "aria-label": eW.intl.string(eW.t["l/A351"]),
                            icon: nm.DoubleChevronSmallRightIcon,
                            onClick: d,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(lE, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(i4, {})
                : (0, i.jsx)(iH, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              m && (p ? (0, i.jsx)(lL, {}) : (0, i.jsx)(lw, {})),
                              p && (0, i.jsx)(lD, {}),
                              (0, i.jsx)(lM, { user: t, guildId: l, disabled: b || h, errorMessage: y }),
                              (0, i.jsx)(lG, {
                                  user: t,
                                  guildId: l,
                                  disabled: b || h,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: E,
                              }),
                              p || m
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lU, { user: t, guildId: l, disabled: b || h, errorMessage: N }),
                                            (0, i.jsx)(lW, {
                                                user: t,
                                                guildId: l,
                                                disabled: b || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: S,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lB, { user: t, disabled: b || h }),
                              (0, i.jsx)(lV, { user: t, guildId: l, disabled: b || h }),
                              I && (0, i.jsx)(lF, { user: t, disabled: b }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lz, { user: t }), (0, i.jsx)(i8, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lK = n(120692),
    lq = n(110654);
function lX(e) {
    return null;
}
function lZ(e) {
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
        className: s()(lq.kL, h && lq.ez),
        children: (0, i.jsx)("div", {
            className: lq.u4,
            children: p((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lK.animated.div,
                          {
                              className: lq.M6,
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
var lJ = n(926321),
    l$ = n(477155),
    lQ = n(561243),
    l0 = n(206697),
    l1 = n(280406);
let l2 = "shuffle-options-a11y-description";
function l5(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(ng.$, {
                icon: lJ.DiceIcon,
                text: eW.intl.string(eW.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": l2,
                fullWidth: !0,
            }),
            (0, i.jsx)(f.A, { id: l2, children: eW.intl.string(eW.t.bBRdiB) }),
        ],
    });
}
function l8(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = nk(),
        s = i1();
    return (0, i.jsxs)(iW, {
        children: [
            (0, i.jsxs)("div", {
                className: l1.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: l1.FS,
                        children: (0, i.jsx)(tz.m, {
                            text: eW.intl.string(eW.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(ne.K, {
                                buttonRef: l,
                                "aria-label": eW.intl.string(eW.t["4IYwrw"]),
                                icon: l$.ArrowSmallLeftIcon,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(nd.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: l1.R_,
                        children: eW.intl.string(eW.t.PxUx8e),
                    }),
                    (0, i.jsx)(eX.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: l1.Ij,
                        children: eW.intl.string(eW.t.X0ir7L),
                    }),
                    (0, i.jsx)(l5, { className: l1.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iH, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(la, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(i5, {
                                trialOffer: s,
                                onSubscribeClick: l0.t,
                                onSubscribeSuccess: l0.T,
                                onSubscribeClose: lQ.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var l6 = n(199016);
let l3 = "user-profile-editing-panel",
    l4 = "profile-modal-editing-panel-heading";
function l9(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tz.m, {
        text: eW.intl.string(eW.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e7.D, {
            innerRef: l,
            "aria-label": eW.intl.string(eW.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": l3,
            className: s()(l6.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(t7.PaintbrushThinIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function l7(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tz.m, {
            text: eW.intl.string(eW.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(ne.K, {
                buttonRef: l,
                "aria-label": eW.intl.string(eW.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": l3,
                icon: t7.PaintbrushThinIcon,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function re(e) {
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
        { selectedPanel: h, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = na(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == p)
        ? null
        : (0, i.jsx)("aside", {
              id: l3,
              "aria-labelledby": l4,
              className: s()(l6.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: l6.l$,
                  children: [
                      (0, i.jsx)(f.A, {
                          children: (0, i.jsx)(m.H, { id: l4, children: eW.intl.string(eW.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lZ, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lX, {
                                  id: "default",
                                  children: (0, i.jsx)(lY, {
                                      panelId: l3,
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
                              (0, i.jsx)(lX, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(l8, { user: p, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var rt = n(425763),
    rn = n(447453),
    ri = n(46653),
    rl = n(783420),
    rr = n(874402);
function rs() {
    let e = ns(),
        { goBack: t } = na(),
        n = iQ(eW.intl.string(eW.t.pj0XBN));
    return (0, i.jsx)(rl.A, {
        subscriptionTier: i$.pe.TIER_2,
        onClick: l0.t,
        onSubscribeModalClose: (e) => {
            (e && (0, l0.T)(), (0, lQ.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(rr.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: eW.intl.string(eW.t.X0ir7L),
                a11yAnnounceOnShow: eW.intl.string(eW.t.X0ir7L),
                a11yAnnounceOnHide: eW.intl.string(eW.t.ZcyFYa),
                secondaryAction: { text: eW.intl.string(eW.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: r, icon: td.NitroWheelIcon, variant: "expressive" },
            });
        },
    });
}
var ra = n(803306),
    ro = n(631670),
    ru = n(682618),
    rd = n(856383),
    rc = n(234e3),
    rg = n(159001),
    rf = n(933725),
    rm = n(773527),
    rp = n(188567),
    rh = n(435911),
    rx = n(646976),
    rA = n(289173),
    rI = n(958805),
    rv = n(61881),
    rb = n(735321),
    rj = n(624826),
    ry = n(419490),
    rC = n(489496),
    rE = n(132319),
    rS = n(696016),
    rN = n(384377),
    rk = n(518477);
function rT(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, $.NJ)(),
        [r, s] = l.useState(!1),
        [o, u] = l.useState(!1),
        {
            widgetsToSave: d,
            changedWidgets: c,
            removedWidgets: g,
            hasUnsavedWidgets: f,
            canSaveWidgets: m,
        } = (function () {
            let e = (0, a.yK)([rv.A], () => rv.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rv.A], () => rv.A.getChangedWidgets()),
                n = (0, a.yK)([rv.A], () => rv.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rv.A], () => ({
                    hasUnsavedWidgets: rv.A.hasUnsavedChanges(),
                    canSaveWidgets: rv.A.canSaveChanges(),
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
            hasBadgeChangesToSave: (0, rc.gz)(eb.A.getPendingChanges()),
        })),
        I = p && h,
        v = f || I || A,
        b = !(f && !m) && (!p || x),
        j = l.useCallback(() => {
            (rI.A.clearPendingWidgets(), p ? (0, nN.XQ)() : A && (0, rc.Jp)());
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
                                await E.Bo.patch({ url: T.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0
                            );
                        } catch (e) {
                            return (rd.A.captureException(e), !1);
                        }
                    })({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = C.default.getCurrentUser()?.id;
                    (null != e && (await (0, ra.eO)(e).catch(() => {})), await (0, ru.RS)(), (0, rc.Jp)());
                }
                e = n;
            }
            if (I)
                try {
                    if (null == t) {
                        let t = eb.A.getPendingChanges(),
                            n = (0, rh.Sk)(t),
                            i = (0, rh.yX)(t),
                            l =
                                (0, rm.Jy)(n.displayNameStyles) &&
                                !(0, rm.Jy)(C.default.getCurrentUser()?.displayNameStyles);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, ro._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, rj.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    l &&
                                        (0, n3.Cy)({
                                            perks: [ie.vB.DISPLAY_NAME_STYLE],
                                            content: n7.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: n3.rl.USER_PROFILE,
                                        }),
                                    (0, ro.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, nN.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, nN.RE)());
                        }
                    } else {
                        let n = eb.A.getPendingChanges(t),
                            i = (0, rh.C5)(n),
                            l = (0, rh.yX)(n, t),
                            r = C.default.getCurrentUser()?.id,
                            s =
                                (0, rm.Jy)(i.displayNameStyles) &&
                                null != r &&
                                !(0, rm.Jy)(ev.Ay.getMember(t, r)?.displayNameStyles);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, rg.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, rj.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    s &&
                                        (0, n3.Cy)({
                                            perks: [ie.vB.DISPLAY_NAME_STYLE],
                                            content: n7.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: n3.rl.GUILD_PROFILE,
                                        }),
                                    (0, ro.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, nN.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, nN.RE)());
                        }
                    }
                    let n = (0, rh.yg)(eb.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, rf.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, ro.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    let e = (0, rb.BF)();
                    for (let t of (await rI.A.savePendingWidgets(d), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, rA.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof rx.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof rx.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = ry.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, rE.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                !(async function (e, t) {
                                    try {
                                        await (0, rC.Yy)(e, { name: t });
                                    } catch (e) {
                                        rS.GU.warn(`Failed to sync profile clip title to the library: ${e}`);
                                    }
                                })(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, ro.x8)() : (0, rN.XA)(rk.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
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
                rp._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (rp._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(rr.$, {
            preventsPopoutDismiss: !0,
            isVisible: v,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: eW.intl.string(eW.t["/lQiX/"]),
            isEmphasized: r,
            a11yAnnounceOnShow: eW.intl.string(eW.t["0Y/qkL"]),
            secondaryAction: { text: eW.intl.string(eW.t.yBZMsQ), onClick: j, disabled: !v || o },
            primaryAction: { text: eW.intl.string(eW.t["R3BPH+"]), onClick: y, loading: o, disabled: !b || !v },
        })
    );
}
var rP = n(485745),
    rR = n(893757);
function rO() {
    let e = !(0, et.X)("useEditingFooterState"),
        t = (0, rt.VU)(),
        n = (0, rP.A)(e),
        i = ns();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function r_(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId() === t),
        u = rO(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rR.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(rn.S, { className: rR.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(rs, {})
                        : "save" === d
                          ? (0, i.jsx)(rT, { guildId: n })
                          : null,
          })
        : null;
}
var rL = n(347805),
    rw = n(34011),
    rD = n(629403),
    rM = n(612630),
    rG = n(61426);
function rU(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rM.A)(t),
        [g, f] = l.useState(),
        [m, p] = l.useState(),
        h = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), f(e), o?.());
                    try {
                        await rD.A.updateNote(t, e);
                    } catch {
                        p(eW.intl.string(eW.t.F8FvUy));
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
            ? (0, i.jsx)(eX.E, { variant: "body-sm/normal", color: "text-default", className: rG.t, children: h })
            : null;
    return (0, i.jsx)("div", {
        className: s()(tb.kL, n),
        children: (0, i.jsx)(rw.w, {
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
            label: eW.intl.string(eW.t.PbMNh2),
            placeholder: A ? eW.intl.string(eW.t["WLKx/9"]) : eW.intl.string(eW.t.VBhOe2),
            maxLength: 256,
            disabled: A,
            error: m,
        }),
    });
}
var rF = n(793222);
function rW(e) {
    let { userId: t } = e,
        n = (0, eS.g)(),
        { trackUserProfileAction: l } = (0, $.NJ)(),
        r = (0, et.X)("UserProfileModalV2NotesSection"),
        s = r ? rU : rL.A;
    return (0, i.jsx)(tp, {
        heading: eW.intl.string(eW.t["mQKv+v"]),
        scrollTargetId: rk.bk.NOTE,
        children: (0, i.jsx)(s, {
            userId: t,
            className: r ? rF.N : rF.w,
            autoFocus: n === rk.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rB = n(123292),
    rV = n(667242);
function rH(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: u } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            u && d.current?.focus();
        }, [u]),
        (0, i.jsx)("div", {
            className: rV.kL,
            children: (0, i.jsxs)("div", {
                className: rV.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rV.Kk, children: t }),
                    (0, i.jsx)(eX.E, { color: "text-strong", variant: "body-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rV.hP,
                            children: (0, i.jsx)(rB.Q, {
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
var rz = n(346055),
    rY = n(289873),
    rK = n(615019);
function rq(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && nj.O.announce(eW.intl.string(eW.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rz.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rK.f, t && rK.z),
                    children: n && (0, i.jsx)(rY.y, { type: rY.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rX = n(568602);
function rZ(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([rv.A, eb.A], () => rv.A.hasUnsavedChanges() || eb.A.hasUnsavedChanges());
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
                rp._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    rp._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(rX.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var rJ = n(761508),
    r$ = n(329921),
    rQ = n(945810),
    r0 = n(50258);
let r1 = { enabled: !1 },
    r2 = { 0: r1, 1: { enabled: !0 } },
    r5 = (0, rQ.mj)({
        name: "2026-10-profile-default-tab-with-content",
        kind: "user",
        defaultConfig: r1,
        variations: r2,
    });
function r8(e) {
    let { location: t } = e;
    return (r5.useConfig({ location: t }), null);
}
var r6 = n(695904),
    r3 = n(573238),
    r4 = n(107563),
    r9 = n(517164),
    r7 = n(290863),
    se = n(894768),
    st = n(146655),
    sn = n(489379);
function si(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, st.A)(t.id),
        { voiceChannel: u, voiceActivity: d } = (0, sn.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([r9.A], () => r9.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        f = (0, a.bG)([se.A, r7.A], () => {
            let e = g ? se.A.getStatus() : r7.A.getStatus(t.id);
            return e === T.clD.OFFLINE || e === T.clD.INVISIBLE;
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
var sl = n(939496),
    sr = n(114212),
    ss = n(960549),
    sa = n(637865),
    so = n(842241),
    su = n(287746),
    sd = n(435558),
    sc = n(534890),
    sg = n(308528),
    sf = n(780964),
    sm = n(766075),
    sp = n(92795);
let sh = [
        () => eW.intl.string(eW.t.madJdE),
        () => eW.intl.string(eW.t.NYmfoP),
        () => eW.intl.string(eW.t.R2PaCg),
        () => eW.intl.string(eW.t.laSR8h),
        () => eW.intl.string(eW.t.DnsJE8),
    ],
    sx = [
        () => eW.intl.string(eW.t.nFSbeE),
        () => eW.intl.string(eW.t.gTcxOz),
        () => eW.intl.string(eW.t["8T0wYj"]),
        () => eW.intl.string(eW.t.BIHl1g),
        () => eW.intl.string(eW.t["jhBm0+"]),
    ],
    sA = [
        () => eW.intl.string(eW.t.AyMGXA),
        () => eW.intl.string(eW.t.aAFW7V),
        (e) => eW.intl.formatToPlainString(eW.t.h2g0cM, { name: e }),
        () => eW.intl.string(eW.t.rrYh58),
        () => eW.intl.string(eW.t["HX3K+F"]),
        () => eW.intl.string(eW.t["/yW3aY"]),
        () => eW.intl.string(eW.t["PmL/v0"]),
        () => eW.intl.string(eW.t.IALa3h),
        () => eW.intl.string(eW.t.HRcTFL),
        () => eW.intl.string(eW.t.NuCqPt),
        () => eW.intl.string(eW.t["M1tw+4"]),
        () => eW.intl.string(eW.t.UBm1y2),
        () => eW.intl.string(eW.t.Cu95PQ),
        () => eW.intl.string(eW.t["R/wFuh"]),
        () => eW.intl.string(eW.t.HQPAVT),
        () => eW.intl.string(eW.t.YolGh4),
    ],
    sI = [
        T.fg2.STEAM,
        T.fg2.PLAYSTATION,
        T.fg2.XBOX,
        T.fg2.TWITCH,
        T.fg2.BATTLENET,
        T.fg2.LEAGUE_OF_LEGENDS,
        T.fg2.EPIC_GAMES,
        T.fg2.RIOT_GAMES,
        T.fg2.ROBLOX,
        T.fg2.SPOTIFY,
        T.fg2.YOUTUBE,
        T.fg2.CRUNCHYROLL,
        T.fg2.BUNGIE,
    ];
function sv(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: sp.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: sp.FS,
                children: [
                    (0, i.jsx)(nd.D, { variant: "heading-sm/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eX.E, { variant: "body-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function sb() {
    let e = eW.intl.string(eW.t.RnD2yZ),
        [t] = l.useState(() => ((0, sd.sample)(sh) ?? sh[0])());
    return (0, i.jsx)(sv, { heading: e, bodyText: t });
}
function sj() {
    let e = eW.intl.string(eW.t.bFgqYJ),
        [t] = l.useState(() => ((0, sd.sample)(sx) ?? sx[0])());
    return (0, i.jsx)(sv, { heading: e, bodyText: t });
}
function sy(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = X.Ay.getName(n, r, t),
        o = eW.intl.formatToPlainString(eW.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, sd.sample)(sA) ?? sA[0])(a)),
        d = l.useCallback(() => {
            (sg.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(sv, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: sp.v0,
            children: (0, i.jsx)(tU.FD, { icon: sc.ChatIcon, text: eW.intl.string(eW.t["g33r/P"]), onClick: d }),
        }),
    });
}
function sC() {
    let e = (0, ny.Ay)();
    return (0, i.jsx)("div", {
        className: sp.HU,
        children: sI.map((t, n) => {
            let l = eu.A.get(t);
            if (null == l) return null;
            let r = (0, il.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: sp.gj }, n);
        }),
    });
}
function sE(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, sm.openUserSettings)(sf.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, sm.openUserSettings)(sf.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(sv, {
        heading: eW.intl.string(eW.t.VB6LWY),
        bodyText: eW.intl.string(eW.t.KpjsU9),
        children: [
            (0, i.jsx)(sC, {}),
            (0, i.jsxs)("div", {
                className: sp.v0,
                children: [
                    (0, i.jsx)(tU.FD, { text: eW.intl.string(eW.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tU.FD, { text: eW.intl.string(eW.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var sS = n(131058);
function sN(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(sS.gN, n), fade: !0, ...r, children: t });
}
var sk = n(587763);
function sT(e) {
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
        } = si({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return m || p || !g
        ? m || p || g
            ? (0, i.jsxs)(sN, {
                  className: sk.XG,
                  fade: !0,
                  children: [
                      m
                          ? (0, i.jsx)(tp, {
                                heading: eW.intl.string(eW.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sk.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(so.A, {
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
                                                    children: (0, i.jsx)(ss.A, {
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
                                                children: (0, i.jsx)(su.A, {
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
                          ? (0, i.jsx)(tp, {
                                heading: eW.intl.string(eW.t.jzgEoL),
                                introText: f
                                    ? eW.intl.format(eW.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tY.Anchor,
                                                  {
                                                      href: eV.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: rk.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sk.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(sa.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : f
              ? (0, i.jsx)(sE, { onClose: a })
              : (0, i.jsx)(sy, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sk.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sk.kr,
                          children: [
                              (0, i.jsx)(sr.F, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(sr.F, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sP = n(163126),
    sR = n(913453),
    sO = n(229187),
    s_ = n(702476),
    sL = n(503062),
    sw = n(393213);
function sD(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, $.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, sR.A)(t),
        g = (0, sP.A)();
    return (
        l.useEffect(() => {
            (0, sO.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sN, {
            className: sw.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sw.D$,
                                  children: [
                                      (0, i.jsx)(sr.F, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(sr.F, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(sb, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                sL.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, s_.openUserProfileModal)({
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
var sM = n(398590),
    sG = n(345942),
    sU = n(51943);
function sF(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, $.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sR.A)(t);
    return (0, i.jsx)(sN, {
        className: sw.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sw.Y7,
                              children: [
                                  (0, i.jsx)(sr.F, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(sr.F, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sU.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sG.u)(r.id), n(), (0, sM.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(sj, {}),
    });
}
var sW = n(885574),
    sB = n(669815),
    sV = n(331322),
    sH = n(591410),
    sz = n(881116),
    sY = n(506774),
    sK = n(531913),
    sq = n(503275),
    sX = n(260498),
    sZ = n(387580);
let sJ = "conjureServerWidgetUpsellDismissals";
var s$ = n(763314),
    sQ = n(191850);
function s0(e) {
    let { widget: t, guildId: n, currentUser: r, onDismiss: s } = e,
        o = (function (e, t, n) {
            let { applicationId: i } = t,
                r = (0, a.bG)([Y.A], () => Y.A.getGuild(n)),
                s = (0, ed.h)(i),
                o = (0, a.bG)([sX.Ay], () => sX.Ay.findProjectByApplicationId(i)?.owner_user_id, [i]),
                u = (0, sq.vm)(o),
                d = (0, sK.A)(e, i),
                c = l.useMemo(() => ({ ...d, isLoading: !1, hasIdentity: !0 }), [d]);
            return null == r || null == s
                ? null
                : { guild: r, application: s, creator: null != o ? u : null, rendererProps: c };
        })(r.id, t, n);
    if (null == o) return null;
    let { guild: u, application: d, creator: c, rendererProps: g } = o;
    return (0, i.jsx)(sV.B, {
        children: (0, i.jsx)(sH.A, {
            user: r,
            widget: t,
            rendererProps: g,
            allowEditing: !1,
            subtle: !0,
            exclusiveCTA: !0,
            cta: (0, i.jsx)(sH.A.Cta, {
                icon: (0, i.jsx)(ld.Ay, { guild: u, size: ld.Ay.Sizes.MEDIUM, active: !0, "aria-hidden": !0 }),
                heading: eW.intl.formatToPlainString(sQ.default["uIb8U+"], { guildName: u.name }),
                content: eW.intl.formatToPlainString(sQ.default.ZZywee, { applicationName: d.name }),
                attribution:
                    null != c
                        ? (0, i.jsx)(sV.B, {
                              direction: "horizontal",
                              gap: 8,
                              align: "center",
                              children: (0, i.jsx)(sz.A, { creator: c, guildId: n, color: "text-subtle" }),
                          })
                        : null,
                buttons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(rB.Q, {
                            variant: "secondary",
                            textVariant: "body-sm/medium",
                            text: eW.intl.string(eW.t.WAI6xu),
                            onClick: s,
                        }),
                        (0, i.jsx)(ng.$, {
                            variant: "primary",
                            size: "sm",
                            text: eW.intl.string(sQ.default.j6ztO0),
                            onClick: () => (0, s$.A)(t.applicationId, s),
                        }),
                    ],
                }),
            }),
        }),
    });
}
function s1(e) {
    let { currentUser: t } = e,
        n = (function (e) {
            let t = (0, sZ.A)(),
                [n, i] = l.useState(() => sY.w.get(sJ)?.[e] ?? []),
                r = t.find((e) => {
                    let { guildId: t } = e;
                    return !n.includes(t);
                }),
                s = r?.guildId,
                a = r?.widgets[0],
                o = l.useCallback(() => {
                    if (null != s) {
                        let t;
                        ((t = sY.w.get(sJ) ?? {}),
                            sY.w.set(sJ, { ...t, [e]: [...(t[e] ?? []), s] }),
                            i((e) => [...e, s]));
                    }
                }, [e, s]);
            return null != s && null != a ? { guildId: s, widget: a, dismiss: o } : null;
        })(t.id);
    return null == n
        ? null
        : (0, i.jsx)(s0, { widget: n.widget, guildId: n.guildId, currentUser: t, onDismiss: n.dismiss }, n.guildId);
}
function s2() {
    let e = (0, a.bG)([C.default], () => C.default.getCurrentUser());
    return null != e ? (0, i.jsx)(s1, { currentUser: e }, e.id) : null;
}
var s5 = n(840387),
    s8 = n(201718),
    s6 = n(615405),
    s3 = n(633075),
    s4 = n(813832),
    s9 = n(600761),
    s7 = n(667049);
function ae(e) {
    let t = (0, em.A)(e),
        n = ns();
    return t && !n;
}
var at = n(540185),
    an = n(210598),
    ai = n(465318);
function al() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = ai.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, eU.kn)(e && t ? [ek.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === ek.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function ar(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: r } = (0, $.NJ)();
    return n
        ? (0, i.jsx)(eT.A, {
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
              title: eW.intl.string(eW.t.KKGxNt),
              body: eW.intl.string(eW.t["IS+QTV"]),
              onRequestClose: () => l(eF.i.USER_DISMISS),
              actions: [
                  {
                      text: eW.intl.string(eW.t.RCy7Px),
                      icon: td.NitroWheelIcon,
                      onClick: function () {
                          let e = (0, an.g0)();
                          ((0, rb.Y5)(e),
                              r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, rN.XA)(rk.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var as = n(410453);
function aa(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: r } = e,
        { trackUserProfileEditAction: s } = (0, $.NJ)(),
        a = l.useCallback(() => {
            n && r(eF.i.TAKE_ACTION);
            let e = (0, an.g0)();
            ((0, rb.Y5)(e),
                s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, rN.XA)(rk.jM.WIDGET_ADDED));
        }, [s, n, r]);
    return (0, i.jsx)(ng.$, {
        icon: td.NitroWheelIcon,
        text: eW.intl.string(eW.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function ao(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, $.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, d] = al(),
        c = (function () {
            let e = (0, ei.bG)([C.default], () => C.default.getCurrentUser()?.id),
                t = (0, s7.A)(e),
                { enabled: n, showCreateEntrypoint: i } = ai.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === at.x.PERSONAL);
            return n && i && !l;
        })(),
        g = l.useCallback(() => {
            (u && d(eF.i.TAKE_ACTION),
                r({ action: "PRESS_ADD_WIDGET" }),
                (0, n9.mM)(
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
        className: s()(as.w, t),
        children: [
            (0, i.jsx)(eX.E, {
                className: as.D,
                variant: "body-sm/semibold",
                color: "text-subtle",
                children: eW.intl.string(eW.t.OYlggR),
            }),
            c ? (0, i.jsx)(aa, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: d }) : null,
            (0, i.jsx)(ng.$, {
                icon: tq.PlusSmallIcon,
                text: eW.intl.string(eW.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: g,
                buttonRef: a,
            }),
            (0, i.jsx)(ar, { targetElementRef: c ? o : a, isVisible: u, markAsDismissed: d }),
        ],
    });
}
var au = n(192),
    ad = n(704824),
    ac = n(382483),
    ag = n(385113),
    af = n(334074),
    am = n(657718),
    ap = n(478016);
function ah(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, $.NJ)(),
        a = l.useMemo(() => new s3.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, rb.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, rN.XA)(rk.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sH.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sH.A.Cta, {
            showSuggestedForYou: !0,
            heading: eW.intl.format(eW.t.OIzLCy, { applicationName: n.name }),
            content: eW.intl.format(eW.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tz.m, {
                        text: eW.intl.string(eW.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(am.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: nu.XSmallIcon,
                            "aria-label": eW.intl.string(eW.t.WAI6xu),
                            onClick: () => {
                                r(eF.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tz.m, {
                        text: eW.intl.string(eW.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(am.S, {
                            variant: "primary",
                            size: "sm",
                            icon: ap.CheckmarkSmallIcon,
                            "aria-label": eW.intl.formatToPlainString(eW.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (r(eF.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function ax() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([ag.A], () => ag.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, ac.Wq)();
        }, []);
        let t = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
            n = (0, ed.A)(e),
            { tokens: i, fetched: r } = (0, ad.j)(e),
            s = (0, s7.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof s3.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, af.hj)({
                applications: u,
                dismissibleContent: ek.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: af.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(ah, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var aA = n(675816),
    aI = n(575593),
    av = n(44120),
    ab = n(778705),
    aj = n(87719),
    ay = n(317560),
    aC = n(306984),
    aE = n(661492);
let aS = { sentGifts: {} };
function aN(e, t) {
    return `${e}:${t}`;
}
class ak extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((aS = e), this.cleanupExpiredGifts());
    }
    getState() {
        return aS;
    }
    hasSentGift(e, t) {
        let n = aN(e, t),
            i = aS.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = aN(e, t),
            i = aS.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(aS.sentGifts)) new Date(n.expiresAt) < e && delete aS.sentGifts[t];
    }
}
let aT = new ak(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = aN(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        aS.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var aP = n(146423),
    aR = n(590180),
    aO = n(301198),
    a_ = n(349031),
    aL = n(124557),
    aw = n(471505),
    aD = n(376932);
function aM(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function aG(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aw.G)({ userId: o, sku: n, location: l, onError: r }),
        f = aH();
    return (0, i.jsx)("div", {
        className: aD.U,
        style: aM(t),
        children: (0, i.jsx)(aO._, {
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
function aU(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aL.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = aH();
    return (0, i.jsx)("div", {
        className: aD.U,
        style: aM(t),
        children: (0, i.jsx)(aO._, {
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
function aF(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aL.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = aH();
    return (0, i.jsx)("div", {
        className: aD.U,
        style: aM(t),
        children: (0, i.jsx)(aO._, {
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
function aW(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: f,
            isPurchased: m,
        } = (0, a_.z)({ userId: o, product: n, location: l, onError: r }),
        p = (0, aE.q)(f),
        h = m && !u,
        x = !p || h,
        A = aH(p && h ? eW.intl.string(eW.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: aD.U,
        style: aM(t),
        children: (0, i.jsx)(aO._, {
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
function aB(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([aR.A], () => aR.A.getProduct(t.id));
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aG, { sku: t, isVisuallyHidden: !n, ...l });
        case T.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(aU, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(aW, { product: r, isVisuallyHidden: !n, ...l });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(aF, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function aV(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(aB, { location: t, ...n });
}
function aH(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: eW.intl.string(eW.t["5B3F2W"]),
            add: eW.intl.string(eW.t.Hcgz2S),
            remove: eW.intl.string(eW.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var az = n(460442),
    aY = n(662349),
    aK = n(892109),
    aq = n(200686),
    aX = n(479026),
    aZ = n(636374),
    aJ = n(699976),
    a$ = n(181554),
    aQ = n(880465);
let a0 = aJ.Z.SIZE_133;
function a1(e) {
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
            showShopExpiryLabel: E,
        } = e,
        S = l.useRef(null),
        N = l.useId(),
        k = (0, aq.Ay)(E ? r.shopUnpublishedAt : void 0),
        T = l.useRef(x);
    (l.useEffect(() => {
        T.current = x;
    }, [x]),
        l.useEffect(() => {
            let e = S.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                T.current(!1);
            }
        }, []));
    let { trackUserProfileWishlistAction: P } = (0, $.NJ)(),
        R = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: rk.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, v, P, C]),
        O = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: rk.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, P, C]),
        _ = l.useCallback(() => {
            ((0, rN.XA)(rk.jM.SOMETHING_WENT_WRONG), nj.O.announce(eW.intl.string(eW.t.F8FvUy)));
        }, []),
        L = null != g ? (0, i.jsx)("div", { ref: S, className: a$.BU, children: g }) : null,
        {
            onBodyClick: w,
            onOverlayClick: D,
            showOverlayButton: M,
            routesToGift: G,
            label: U,
            icon: F,
        } = (0, aZ.P)({ wishlistOwner: a, isOwned: b, onDetailsClick: R, onPurchaseClick: O }),
        W = h && M;
    return (0, i.jsxs)("div", {
        className: a$.kL,
        children: [
            (0, i.jsxs)(aP.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: a0,
                cardStyle: s()(a$.Nr, d),
                skuPreviewStyle: s()(a$.ev, { [a$.go]: b && !h }, f, W ? m : void 0),
                skuAssetClassName: W ? p : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: w,
                "aria-label":
                    ((t = r.sku),
                    (n = G ? (0, aE.T)(t) : eW.intl.formatToPlainString(eW.t.ZBB4Ty, { productName: (0, aE.T)(t) })),
                    !0 === y ? eW.intl.formatToPlainString(eW.t.s9RZ1r, { label: n }) : n),
                "aria-describedby": null != k ? N : void 0,
                children: [
                    !0 === y && (0, i.jsx)(r$.N, { className: a$.Pf }),
                    null != k && (0, i.jsx)(aK.A, { id: N, countdown: k, variant: "profile" }),
                    j,
                    M && (0, i.jsx)(aY.A, { spec: a0, onClick: D, isHoveringOrFocusing: h, label: U, icon: F }),
                    b && (0, i.jsx)(az.gS, { isHoveringOrFocusing: h }),
                    a.id === u.id &&
                        null != v &&
                        (0, i.jsx)(aV, {
                            sku: r.sku,
                            isCardHovered: h,
                            spec: a0,
                            onError: _,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            L,
        ],
    });
}
function a2(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, ay.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: i$.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, aC.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: i$.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(a1, {
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
function a5(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, aX.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: i$.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, av.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: i$.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        m = f === aI.R.AVATAR_DECORATION || f === aI.R.PROFILE_FRAME;
    return (0, i.jsx)(a1, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [a$.mn]: m }),
        analyticsLocations: a,
        ...d,
    });
}
function a8(e) {
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
            if (n) return void (0, aj.x)(iq.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, ab.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: i$.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(a1, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aQ.MO,
        skuAssetHoverClassName: aQ.iR,
        analyticsLocations: a,
        ...u,
    });
}
function a6(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, j.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        f = (0, a.bG)([aT], () => aT.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        m = l.useMemo(
            () => t.skuProductLine !== T.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(a2, {
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
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(a5, {
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
        case T.EZt.PREMIUM:
            return (0, i.jsx)(a8, {
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
var a3 = n(788593),
    a4 = n(132085),
    a9 = n(741934),
    a7 = n(720060),
    oe = n(998556);
function ot(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, aA.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        u = (0, rt.VU)(),
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
                                  className: oe.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(a7.u, {
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
                                  children: (0, i.jsx)(a3.A, {
                                      className: oe.XJ,
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
                                  className: oe.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(a4.A, {
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
                                  className: oe.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(a9.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: oe.Xm,
                                  children: (0, i.jsx)(a6, {
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
    return (0, i.jsx)("div", { className: oe.kL, style: { transform: `translate3d(${p}px, ${h}px, 0)` }, children: d });
}
var on = n(151869);
function oi(e) {
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
        let t = n.find((t) => (0, s3.E)(t, e));
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
        l && c(at.x.CLIPS_GALLERY),
        r && c(at.x.PERSONAL),
        c(at.x.FAVORITE_GAMES),
        c(at.x.PLAYED_GAMES),
        g("1346069614634864772"),
        c(at.x.CURRENT_GAMES),
        c(at.x.WANT_TO_PLAY_GAMES),
        g("1323482066758930452"),
        o.slice(0, s)
    );
}
n(839272);
let ol = (0, rQ.mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var or = n(116281),
    os = n(661439),
    oa = n(90165);
function oo(e) {
    let t = (0, a.bG)([ag.A], () => ag.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof s3.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, ed.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, ad.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, os.X)();
    }, [o]);
    let u = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        d = (0, a.yK)([oa.A], () => u.map((e) => (null != e ? oa.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([oa.A], () => u.map((e) => (null != e ? oa.A.getLastPlayedDateTime(e) : null)));
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
var ou = n(224360),
    od = n(297520),
    oc = n(843393);
function og(e) {
    return e.getUniqueKey();
}
function of(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, or.A)(),
        s = oo(r),
        o = (0, a.bG)([ry.Ay], () => ry.Ay.hasClips()),
        u = (0, a.bG)([C.default], () => J.Ay.isPremium(C.default.getCurrentUser(), i$.PremiumTypes.TIER_2)),
        d = l.useMemo(
            () =>
                oi({
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
            c && (0, i.jsx)(om, { suggestions: d, suggestionsLocation: "above" }),
            t,
            c && (0, i.jsx)(om, { suggestions: d, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function om(e) {
    let t = ol.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(op, { ...e }) : null;
}
function op(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, $.NJ)(),
        { focusAddedWidget: o } = (0, au.r)(),
        [u, d] = (0, eU.kn)([ek.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(od.A, {
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
        : (0, i.jsx)(ou.A, {
              className: s()(oc.uW, "above" === n && oc.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "body-xs/normal" : void 0,
              onDismiss: () => d(eF.i.USER_DISMISS),
              children: (0, i.jsx)(on.A, {
                  items: t,
                  getItemKey: og,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: oc.Dk,
                  scrollerClassName: oc.jv,
                  itemClassName: oc.Vs,
                  actionsClassName: oc.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eW.intl.string(eW.t["+EIBSA"]),
              }),
          });
}
let oh = (0, rQ.mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var ox = n(269507);
function oA(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: ox.ZW,
        "aria-label": eW.intl.string(eW.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === at.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(od.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function oI(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, or.A)();
    return (0, i.jsx)(oA, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function ov(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: r,
            trackUserProfileEditAction: s,
            personalWidgetOptionRef: o,
        } = e,
        u = (0, or.A)(),
        d = oo(u),
        c = oi({
            addableWidgets: u,
            applicationAffinityData: d,
            hasClips: (0, a.bG)([ry.Ay], () => ry.Ay.hasClips()),
            hasPremium: (0, a.bG)([C.default], () =>
                J.Ay.isPremium(C.default.getCurrentUser(), i$.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: r ? [at.x.PERSONAL] : [],
        }),
        g = l.useCallback(() => {
            (s({ action: "PRESS_ADD_WIDGET" }),
                (0, n9.mM)(
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
            (0, i.jsx)(oA, { widgets: c, personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
            (0, i.jsx)(ng.$, { text: eW.intl.string(eW.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: g }),
        ],
    });
}
function ob(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, $.NJ)(),
        s = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError != null, [t]),
        [d, c] = al(!u),
        g = d || (0, an.t0)(),
        { enabled: f, maxWidgetOptions: m } = (function (e) {
            let { location: t } = e;
            return oh.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            s.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: ox.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: ox.FS,
                    children: [
                        (0, i.jsx)(nd.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: eW.intl.string(eW.t["oqalC+"]),
                        }),
                        (0, i.jsx)(eX.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: u ? eW.intl.string(eW.t["+W59o5"]) : eW.intl.string(eW.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s2, {}),
                            f
                                ? (0, i.jsx)(ov, {
                                      maxWidgetOptions: m,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: g,
                                      trackUserProfileEditAction: r,
                                  })
                                : (0, i.jsx)(oI, { personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
                            (0, i.jsx)(ar, { targetElementRef: o, isVisible: d, markAsDismissed: c }),
                        ],
                    }),
            ],
        })
    );
}
var oj = n(366209);
function oy() {
    return (0, i.jsxs)("div", {
        className: oj.mJ,
        children: [
            (0, i.jsx)(sW.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eX.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: eW.intl.string(eW.t["7blcz6"]),
            }),
        ],
    });
}
function oC(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, s7.A)(t.id),
        u = ae(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([s6.A], () => [s6.A.ipCountryCode, s6.A.ipCountryCodeRequest]),
                n = (0, s5.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sB.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && u,
        g = l.useMemo(() => o.filter(rA.fu), [o]),
        f = l.useMemo(() => o.filter((e) => e instanceof s3.R), [o]);
    function m() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                a7.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: u, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(ao, { className: oj.cG }),
                            d && (0, i.jsx)(oy, {}),
                            (0, i.jsx)(ax, {}),
                            (0, i.jsx)(s2, {}),
                        ],
                    }),
                u ? (0, i.jsx)(of, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, s4.Y)(u, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, ed.A)(n);
        let { data: i, refetch: r } = (0, s8.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, f),
    c)
        ? (0, i.jsx)(ob, { userId: t.id })
        : u
          ? (0, i.jsx)(au.D, { children: m() })
          : m();
}
function oE(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, s9.i)({ containerRef: d });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                d.current?.scrollTo({ top: 0, behavior: tv.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([ri.default], () => ri.default.getId() === t)), (r = rO()), n && null != r);
    return (0, i.jsxs)(sN, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(oj.XG, { [oj.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(ot, { scrollerRef: d }), (0, i.jsx)(oC, { user: o, onWidgetAddedFromBelow: c, ...u })],
    });
}
var oS = n(115560),
    oN = n(777480),
    ok = n(825484),
    oT = n(952270),
    oP = n(444927),
    oR = n(895360),
    oO = n(267102),
    o_ = n(521440),
    oL = n(721932),
    ow = n(832163),
    oD = n(501838),
    oM = n(44724),
    oG = n(808247),
    oU = n(673843),
    oF = n(855052),
    oW = n(342442),
    oB = n(658946),
    oV = n(535089),
    oH = n(840411),
    oz = n(387325),
    oY = n(666810),
    oK = n(419731),
    oq = n(451395),
    oX = n(823016),
    oZ = n(100741);
function oJ(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, oX.r)();
    return (0, i.jsx)(oq.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eW.intl.formatToPlainString(eW.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: oZ.C,
        dropBeforeClassName: oZ.A,
        dropAfterClassName: oZ.Ze,
        draggingClassName: oZ.Id,
        children: (0, i.jsx)("div", { className: oZ.An, children: s }),
    });
}
let o$ = l.memo(function (e) {
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
            showShopExpiryLabel: f,
        } = e,
        { registerDragHandleRef: m } = (0, oX.r)(),
        p = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        h = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(oq.jV, {
                          buttonRef: m(String(t.skuId)),
                          className: oZ.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, m, t.skuId],
        ),
        x = l.useMemo(
            () =>
                (0, i.jsx)(a6, {
                    item: t,
                    wishlistOwner: r,
                    guildId: s,
                    wishlistId: o,
                    isDragging: u,
                    dragHandle: h,
                    isNew: c,
                    onClick: p,
                    showShopExpiryLabel: f,
                }),
            [t, r, s, u, h, o, c, p, f],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(oJ, { item: t, index: n, wishlistId: o, onReorder: d, children: x }),
          })
        : (0, i.jsx)("li", { children: x });
});
function oQ(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        u = C.default.getCurrentUser(),
        { labelsEnabled: d } = (0, oz.Zf)("UserProfileModalV2WishlistGrid"),
        c = l.useMemo(() => t.filter(aq.Ge).map((e) => e.shopUnpublishedAt), [t]),
        g = (0, aq.SJ)(c),
        { defaultWishlistId: f } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(n.id) })),
        { isDragging: m } = (0, aA.V)((e) => ({ isDragging: e.isDragging() })),
        [p, h] = l.useState([]),
        x = l.useCallback((e) => {
            h((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        A = l.useCallback(
            (e, n) => {
                if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = r4.A.getWishlist(f);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, oH.Ap)(i, t, e, n);
                oG.A.reorderWishlistItem(f, l.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [f, t],
        );
    if (null == u || null == f) return null;
    let I = (0, i.jsxs)(i.Fragment, {
        children: [
            g && (0, i.jsx)(oz.m4, { location: "UserProfileModalV2WishlistGrid" }),
            (0, i.jsx)("ul", {
                className: oZ.Vg,
                children: t.map((e, t) =>
                    (0, i.jsx)(
                        o$,
                        {
                            item: e,
                            index: t,
                            profileOwner: n,
                            guildId: r,
                            showEditingControls: s,
                            wishlistId: f,
                            isDragging: m,
                            onReorder: A,
                            isNew: (0, oK.f3)(e.addedAt, o) && !p.includes(e.skuId),
                            onClick: x,
                            showShopExpiryLabel: d,
                        },
                        e.skuId,
                    ),
                ),
            }),
        ],
    });
    return s ? (0, i.jsx)(oX.B, { emptyListFallbackRef: null, children: I }) : I;
}
function o0(e) {
    let t = C.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(oY.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(oQ, { ...e }),
    });
}
var o1 = n(815021),
    o2 = n(299679),
    o5 = n(820847);
n(667532);
var o8 = n(802494),
    o6 = n(172218),
    o3 = n(858899),
    o4 = n(2157),
    o9 = n(95817),
    o7 = n(74135),
    ue = n(964164);
let ut = aJ.Z.SIZE_90;
function un(e) {
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
        { trackUserProfileWishlistAction: m } = (0, $.NJ)(),
        p = (0, o2.Ar)(),
        h = (0, oP.A)(() => (0, oS.A)()),
        { handleVisibilityChange: x } = (0, o9.G)(h),
        A = (0, o6.K)(x, 0.5, p?.surface != null),
        I = l.useCallback(() => {
            (m({
                wishlistId: g,
                action: rk.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                p?.surface != null &&
                    t$.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
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
        children: (0, i.jsx)(aP.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: ut,
            cardStyle: s()(ue.Nr, a),
            skuPreviewStyle: s()(ue.ev, o),
            onHoverOrFocusChange: u,
            onClick: I,
            "aria-label": c,
            children: f,
        }),
    });
}
function ui(e) {
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
                    (await oG.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: rk.RP.WISHLIST }));
                } catch (e) {
                    ((0, o3.P0)({ text: eW.intl.string(eW.t.F8FvUy), variant: "critical" }),
                        nj.O.announce(eW.intl.string(eW.t.F8FvUy)));
                } finally {
                    m(!1);
                }
            }
        }, [t, n, f, a, d]),
        h = l.useMemo(() => s()({ [ue.zW]: r || f }, o), [r, f, o]);
    return (0, i.jsxs)(un, {
        "aria-label": eW.intl.formatToPlainString(eW.t.xRjJBe, { productName: (0, aE.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(az.oU, { isHoveringOrFocusing: r, loading: f }), !r && !f && c],
    });
}
function ul(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, j.Ay)(...(n ?? []), b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, o4.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(ui, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(o7.s, { spec: ut, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function ur(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case aI.R.PROFILE_EFFECT:
                case aI.R.NAMEPLATE:
                case aI.R.BUNDLE:
                case aI.R.PROFILE_FRAME:
                    return;
                case aI.R.AVATAR_DECORATION:
                    return ue.ML;
                default:
                    return s()(ue.ML, ue.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(ui, { sku: t, skuPreviewStyle: r, ...n });
}
function us(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(ui, { sku: t, skuPreviewStyle: aQ.MO, ...n });
}
function ua(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ul, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(ur, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(us, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var uo = n(609965);
function uu(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([C.default], () => C.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(uo.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                o2.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(ua, {
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
var ud = n(927813);
let uc = 90 * ud.A.Millis.DAY,
    ug = 90 * ud.A.Millis.DAY;
var uf = n(469364);
function um(e) {
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
                [d, c] = (0, eU.Wl)(
                    ek.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: u + ug, cooldownDurationMs: uc },
                    void 0,
                    !0,
                ),
                g = d === ek.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eF.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(up, {
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
function up(e) {
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
                { recommendations: a, status: o } = (0, o8.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(i$.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, oH.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: o5.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(uf.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: uf.wx,
                      children: [
                          (0, i.jsx)(eX.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: eW.intl.string(eW.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: uf.b,
                                  children: (0, i.jsx)(o1.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(o2.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(uu, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(uf.Vg, uf.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var uh = n(477782),
    ux = n(165862),
    uA = n(431194);
function uI(e) {
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
                        let t = tQ.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eW.intl.formatToPlainString(eW.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft:
                                null != t ? () => (0, i.jsx)("img", { className: uA.I, src: t, alt: "" }) : tM.ShopIcon,
                            leadingAccessory:
                                null != t ? { type: "image", src: t } : { type: "icon", icon: tM.ShopIcon },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, ed.A)(o), handleOpenGameShop: s }),
        f = l.useMemo(
            () =>
                (0, i.jsxs)(uh.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(uh.Dr, {
                                id: "browse-collectibles-shop",
                                label: eW.intl.string(eW.t["5upuqx"]),
                                iconLeft: tM.ShopIcon,
                                leadingAccessory: { type: "icon", icon: tM.ShopIcon },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(uh.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eW.intl.string(eW.t.lG6a5x),
                                iconLeft: td.NitroWheelIcon,
                                leadingAccessory: { type: "icon", icon: td.NitroWheelIcon },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s } = e;
                                return (0, i.jsx)(
                                    uh.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(n_.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ux.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eW.intl.string(eW.t.GdNkvG),
                children: f,
            });
        },
        children: (e) =>
            (0, i.jsx)(ng.$, {
                buttonRef: u,
                variant: n,
                size: "sm",
                icon: d ? nu.XSmallIcon : lo.ChevronSmallDownIcon,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var uv = n(365199);
let ub = eV.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function uj(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, j.Ay)(b.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(uh.rX, {
                          children: [
                              (0, i.jsx)(uh.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eW.intl.string(eW.t.b2nFyA),
                                  subtext: eW.intl.string(eW.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(uh.bX, {}),
                              (0, i.jsx)(uh.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eW.intl.string(eW.t.hvVgAZ),
                                  icon: tK.LinkExternalSmallIcon,
                                  trailingIndicator: { type: "icon", icon: tK.LinkExternalSmallIcon },
                                  action: () => window.open(ub),
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
              children: (0, i.jsx)(n_.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(ux.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eW.intl.string(eW.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(tU.q3, {
                          buttonRef: s,
                          icon: uv.MoreHorizontalIcon,
                          tooltipText: eW.intl.string(eW.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var uy = n(526725);
function uC(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(uI, {
              title: eW.intl.string(eW.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(ng.$, {
              variant: "secondary",
              size: "sm",
              icon: tM.ShopIcon,
              text: eW.intl.string(eW.t["i/yzHs"]),
              onClick: n,
          });
}
function uE(e) {
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
        className: uy.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(uI, {
                          title: eW.intl.string(eW.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(ng.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tq.PlusSmallIcon,
                          text: eW.intl.string(eW.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(uj, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function uS(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(ng.$, {
        variant: "primary",
        size: "sm",
        icon: tM.ShopIcon,
        text: eW.intl.formatToPlainString(eW.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function uN(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, oO.Us)() === T.BRT.OVERLAY,
        u = (0, ed.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(uS, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(uI, {
                title: eW.intl.string(eW.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: uy.y7,
        children: [
            (0, i.jsxs)("div", {
                className: uy.q6,
                children: [
                    (0, i.jsx)(nd.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: eW.intl.string(eW.t.HGnLLT),
                    }),
                    (0, i.jsx)(eX.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: eW.intl.string(eW.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(ok.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(ng.$, {
                                variant: "primary",
                                size: "sm",
                                icon: tM.ShopIcon,
                                text: eW.intl.string(eW.t.ZbS4QB),
                                onClick: r,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function uk(e) {
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
        { trackUserProfileWishlistAction: m } = (0, $.NJ)(),
        p = !1 === r.nsfwAllowed,
        [h, x] = l.useState(!0);
    l.useEffect(() => {
        f?.visibility != null && x(f.visibility === oN.a.PUBLIC);
    }, [f?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && m({ wishlistId: t, action: n, productLines: i });
            },
            [m],
        ),
        I = (0, oV.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, oF.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = h ? oN.a.PRIVATE : oN.a.PUBLIC;
            (x(!h),
                oG.A.updateWishlistVisibility(g, e),
                m({
                    wishlistId: g,
                    action: h ? rk.Mq.WISHLIST_TOGGLE_PRIVATE : rk.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, oF.y9)(s) : void 0,
                }));
        }, [g, h, m, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: uy.lm,
                    children: [
                        (0, i.jsx)(oT.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eX.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eW.intl.string(eW.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                p &&
                (0, i.jsxs)("div", {
                    className: uy.lm,
                    children: [
                        (0, i.jsx)(sW.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eX.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eW.intl.string(eW.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: uy.U1,
                children: [
                    (0, i.jsx)(eX.E, {
                        variant: "body-xs/semibold",
                        color: "text-subtle",
                        children: eW.intl.format(eW.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(uE, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(uC, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function uT(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, s9.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: u } = (0, a.cf)([ee.A, C.default], () => ({
            wishlistId: ee.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, j.Ay)(),
        c = (function (e) {
            let { ownerId: t, wishlistId: n, isVisible: i = !0 } = e,
                r = (0, r6.bq)(),
                s = (0, a.bG)(
                    [ee.A],
                    () => (null != t ? ee.A.getProfileReadStateSectionAckedAt(t, oW.o.WISHLIST) : null),
                    [t],
                ),
                [o, u] = l.useState(void 0);
            (i || void 0 === o || u(void 0), i && null != t && null != r && void 0 === o && u(r.enabled ? s : null));
            let d = (0, a.bG)([r4.A, ee.A], () => null != t && (0, oB.Y)(t, n), [t, n]),
                c = void 0 !== o;
            return (
                l.useEffect(() => {
                    i && c && d && null != t && (0, oB.U)(t);
                }, [i, c, d, t]),
                o
            );
        })({ ownerId: t.id, wishlistId: o }),
        g = ae(t.id),
        { wishlist: f, wasFetched: m, error: p } = (0, z.fw)({ wishlistId: o, userId: t.id }),
        [h, x] = l.useState(!1);
    (m && !h && x(!0), (0, oU.A)(f));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([ow.A], () => ow.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, oL.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, oD.w)({ userIds: s }),
                c = (0, oD.mn)({ userIds: s }),
                g = (0, oD.tR)(s),
                f = (0, oD.rY)(),
                m = (0, oD.qx)(),
                p = (0, oD.px)();
            return l.useMemo(
                () => (0, sd.uniq)([...u, ...d, ...c, ...g, ...(r ? [...f, ...m, ...p] : [])].filter(eg.Vq)),
                [u, d, c, g, f, m, p, r],
            );
        })({ wishlist: f, profileOwner: t, currentUser: u }),
        I = (0, oP.A)(() => (0, oS.A)()),
        v = l.useCallback(() => {
            (0, tG.Cz)({ analyticsLocations: d, analyticsSource: b.A.USER_PROFILE_WISHLIST });
        }, [d]),
        y = l.useCallback((e) => {
            (0, oM.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iq.M)(), (0, oM.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, aL.c)({
            userId: u?.id,
            skuId: i$.pe.TIER_2,
            nuxGraphic: o_.g,
            onNuxShow: oR.D,
            location: b.A.USER_PROFILE_WISHLIST,
        });
    if (null == u || null != p) return null;
    let N = null == f || 0 === f.items.length;
    return (0, i.jsxs)(sN, {
        scrollerRef: r,
        className: s()({ [uy.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(uN, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ot, { scrollerRef: r }),
                          (0, i.jsx)(uk, {
                              isOwner: u?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: f,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, oF.C3)(f, i$.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(o0, {
                              items: f.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              ackedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(um, {
                    user: t,
                    guildId: n,
                    wishlist: f,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: I,
                    className: N ? uy._E : uy.HZ,
                }),
        ],
    });
}
function uP(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rk.RP.ACTIVITY
        ? (0, i.jsx)(sT, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rk.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sD, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rk.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sF, { user: t, onClose: o })
            : l === rk.RP.WIDGETS
              ? (0, i.jsx)(oE, { user: t, guildId: s, channelId: a })
              : l === rk.RP.WISHLIST
                ? (0, i.jsx)(uT, { profileOwner: t, guildId: s })
                : null;
}
function uR(e) {
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
        { trackUserProfileAction: p } = (0, $.NJ)(),
        { shouldLogExposure: h } = (0, r3.A)(t),
        { primaryColor: x } = (0, sl.E)(),
        A = null != x ? "neutral" : "primary",
        I = l.useRef(!1),
        v = u.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        v && !I.current && ((I.current = !0), p({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [v, p]);
    let [b, j] = l.useState(() => (u.find((e) => e.section === d) ?? u[0]).section),
        y = (0, a.bG)([ri.default, r0.A], () => {
            let e = r0.A.getAssignment("user", ri.default.getId(), r5.definition.name);
            return e?.variantId == null || e.useAsEligibility ? null : (r2[e.variantId] ?? r1);
        }),
        C = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: u,
                    hasRecentActivity: d,
                } = si({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [ee.A, r4.A],
                    () => {
                        if (null == ee.A.getUserProfile(t.id) || ee.A.isFetchingProfile(t.id, l)) return !0;
                        let e = ee.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = r4.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = ee.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && r4.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === rk.RP.WIDGETS) &&
                      r.some((e) => e.section === rk.RP.WISHLIST) &&
                      !u &&
                      !d)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: u }),
        [E, S] = l.useState(null);
    if (null == E && null != C && null != y) {
        let e = null == d && C;
        (S(e), e && y.enabled && j(rk.RP.WISHLIST));
    }
    let N = u.find((e) => e.section === b) ?? u[0];
    return (
        N.section !== b && j(N.section),
        (0, i.jsxs)("div", {
            className: sS.kL,
            children: [
                h && (0, i.jsx)(r6.kM, { location: "UserProfileModalV2Tabs" }),
                !0 === E && (0, i.jsx)(r8, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: sS.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(rJ.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: N.section,
                        onItemSelect: function (e) {
                            rv.A.hasUnsavedChanges() && N.section === rk.RP.WIDGETS
                                ? (0, nN.VQ)()
                                : (p({ action: "PRESS_SECTION", section: e }), j(e), S((e) => e ?? !1));
                        },
                        children: u.map((e) =>
                            (0, i.jsxs)(
                                rJ.V.Item,
                                {
                                    className: sS.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eW.intl.formatToPlainString(eW.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot &&
                                            (0, i.jsx)(r$.N, { variant: A, className: sS.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(rJ.V.Panel, {
                    id: N.section,
                    "aria-label": N.text,
                    className: sS.NM,
                    children: (0, i.jsx)(m.F, {
                        component: (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: N.text }) }),
                        children: (0, i.jsx)(uP, {
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
var uO = n(933832),
    u_ = n(972213);
let uL = {
        [rk.jM.WIDGET_ADDED]: {
            message: eW.intl.string(eW.t.fFP1Uy),
            icon: (0, i.jsx)(uO.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rk.jM.WIDGET_REMOVED]: {
            message: eW.intl.string(eW.t.zzsK7h),
            icon: (0, i.jsx)(uO.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rk.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eW.intl.string(eW.t["84MExs"]),
            icon: (0, i.jsx)(u_.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [rk.jM.SOMETHING_WENT_WRONG]: {
            message: eW.intl.string(eW.t.F8FvUy),
            icon: (0, i.jsx)(u_.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    uw = (e) => {
        let { className: t } = e,
            n = (0, rN.fu)(),
            r = (0, a.bG)([tv.Ay], () => tv.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(uL[n]), nj.O.announce(uL[n].message)) : o(!1);
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
            l.useEffect(() => () => (0, rN.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, rN.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(lK.animated.div, { className: t, style: e, children: (0, i.jsx)(rH, { ...u }) }),
                ),
            })
        );
    };
var uD = n(297413),
    uM = n(465829),
    uG = n(826673),
    uU = n(73392),
    uF = n(576705),
    uW = n(997394);
function uB(e) {
    return null == e || "" === e ? void 0 : e;
}
function uV(e) {
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
        b = J.Ay.canUsePremiumProfileCustomization(p),
        { canChangeDisplayName: y, permissionsLoaded: E } = (0, a.cf)([uF.A, Y.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = Y.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: uF.A.can(T.xBc.CHANGE_NICKNAME, e) || uF.A.can(T.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        S = I && !y && E,
        {
            value: N,
            previewValue: k,
            fallbackDisplayName: P,
            onCommit: R,
        } = ((n = null != (t = x?.guildId ?? null)),
        (r = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([ev.Ay], () => (null != t ? (ev.Ay.getMember(t, p.id)?.nick ?? null) : null))),
        (u = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t).pendingNickname)),
        (f = (g = void 0 !== (c = n ? d : u) ? c : n ? o : r) ?? ""),
        (m = n ? (uB(r) ?? p.username) : p.username),
        {
            value: f,
            previewValue: uB(g) ?? m,
            fallbackDisplayName: m,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, tx.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, tx.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        O = (0, a.bG)([eb.A], () => eb.A.getErrors(v ?? null)),
        _ = (0, th.EC)(v ?? null),
        L = I ? O.nick?.[0] : O.global_name?.[0],
        w = _?.nick?.[0],
        D = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(v).pendingDisplayNameStyles),
        M = (0, nh.A)({ userId: p.id, guildId: v, pendingDisplayNameStyles: D }),
        G = (0, uU.a)({ displayNameStyles: M, compensateForSafari: !1 }),
        U = eW.intl.string(I ? eW.t.mq6Cg9 : eW.t.XuZU7A),
        F = I ? eW.intl.string(eW.t.YcDKr8) : p.username,
        W = l.useRef(null),
        B = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, uG.Dr)(ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eF.i.INDIRECT_ACTION,
                    }),
                    (0, nK.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: W }));
            },
            [A, v],
        ),
        V = {
            icon: t7.PaintbrushThinIcon,
            tooltip: eW.intl.string(eW.t.lqKKI2),
            "aria-label": eW.intl.string(eW.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: W,
        },
        H = S
            ? (0, i.jsx)("span", {
                  className: uW.Cs,
                  children: (0, i.jsx)(no.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: tb.kL,
        children: (0, i.jsx)(eX.E, {
            variant: uM.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(rw.w, {
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
                    return (0, i.jsx)(uM.c$, {
                        user: p,
                        guildId: v,
                        displayName: n ? (uB(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: D,
                        className: s()(uW.dt, { [uW.jW]: n && "" === e }),
                        displayNameTrailing: H,
                    });
                },
                placeholder: F,
                label: U,
                maxLength: 32,
                textVariant: "inherit",
                trailing: y && b ? V : void 0,
                error: L,
                helperText: S ? eW.intl.string(eW.t.gzjxQi) : w,
                disabled: !y,
            }),
        }),
    });
}
var uH = n(628072);
function uz(e) {
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
                    (0, tx.p)({ pronouns: e, guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        m = d?.guildId != null,
        p = null != g && g.length > 0,
        h = eW.intl.string(m ? eW.t.AXiE0i : eW.t["76Aqhl"]);
    return (0, i.jsx)("div", {
        className: s()(tb.kL, tb.oE, uH.k),
        children: (0, i.jsx)(rw.w, {
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
            preview: p ? (0, i.jsx)(uM.n2, { pronouns: g }) : null,
            label: eW.intl.string(eW.t["rniRE+"]),
            placeholder: h,
            maxLength: 40,
            spellCheck: !1,
        }),
    });
}
var uY = n(873200),
    uK = n(305866),
    uq = n(145497),
    uX = n(685073),
    uZ = n(2967),
    uJ = n(318785),
    u$ = n(534400),
    uQ = n(152313),
    u0 = n(830543),
    u1 = n(415916),
    u2 = n(743981),
    u5 = n(295930),
    u8 = n(594615);
let u6 = "no-server-tag";
function u3(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e7.D, {
        innerRef: t,
        className: s()(u5.qJ, { [u5.wK]: o }),
        "aria-label": o ? eW.intl.string(eW.t.Pdd1nd) : eW.intl.formatToPlainString(eW.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eX.E, {
            variant: "body-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: u5.W3,
            tag: "span",
            children: [
                o
                    ? eW.intl.string(eW.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  u$.Z9,
                                  {
                                      src: (0, uX.gC)(n, r, u2.Sl.SIZE_14),
                                      size: u2.Sl.SIZE_14,
                                      className: u5.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, uX.gC)(n, r, u2.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(lo.ChevronSmallDownIcon, { size: "xs", color: "currentColor", className: u5.u4 }),
            ],
        }),
    });
}
function u4() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, uJ.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, uZ.Z)("UserProfileModalV2GuildTagSelect"),
        u = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        d = (0, a.cf)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (0, uX.Zo)(e?.primaryGuild);
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
                e.id === u6
                    ? (0, i.jsx)("div", {
                          className: u8.uN,
                          children: (0, i.jsx)(eX.E, {
                              variant: "body-md/normal",
                              color: "input-placeholder-text-default",
                              className: u5.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(lx.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: u6, label: eW.intl.string(eW.t.VxdWWH), value: u6 },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(uq.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(u$.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
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
            (0, u1.A)(!0, () => {
                ((0, iq.M)(), (0, u0.default)(), (0, uQ.A)(r, b.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let y = (0, i.jsx)(uY.a3, {
        label: eW.intl.string(eW.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eW.intl.string(eW.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(n_.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(uK.l, {
                className: s()(u5.yt, { [u5.R4]: o && !v, [u5.Lo]: v }),
                "aria-label": eW.intl.string(eW.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: u5.p$,
                          children: [
                              (0, i.jsx)(eX.E, {
                                  id: t,
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: eW.intl.string(eW.t["NV+MBV"]),
                              }),
                              (0, i.jsx)(ng.$, {
                                  text: eW.intl.string(eW.t["65zBhE"]),
                                  variant: "secondary",
                                  onClick: () => j(n),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(uY.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, tx.p)({ primaryGuildId: e === u6 ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: u5.wx,
                                        children: [
                                            y,
                                            (0, i.jsx)(ng.$, {
                                                text: eW.intl.string(eW.t.CumH4u),
                                                variant: "secondary",
                                                onClick: () => j(n),
                                            }),
                                        ],
                                    })
                                  : y,
                              (0, i.jsx)(uY.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(u3, { buttonRef: e, guildId: f, guildTag: h, guildBadge: x, ...t }),
    });
}
var u9 = n(956495);
function u7(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(uM.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function de(e) {
    let t = (0, a.bG)([eb.A], () => eb.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(u7, { ...e, displayNameStylesOverride: t });
}
function dt(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(uD.A, {
                  user: t,
                  forceUsername: !0,
                  className: u9.a1,
                  usernameClass: u9.eb,
                  discriminatorClass: u9.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(uV, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(u9.AK, u9.j6),
                children: [r, (0, i.jsx)(uM.Ce, {}), (0, i.jsx)(uz, { displayProfile: n }), (0, i.jsx)(u4, {}), l],
            }),
        ],
    });
}
function dn(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(u7, { ...n });
        case "try-it-out":
            return (0, i.jsx)(de, { ...n });
        case "edit":
            return (0, i.jsx)(dt, { ...n });
        default:
            return (0, eg.xb)(t);
    }
}
var di = n(97808),
    dl = n(22231),
    dr = n(601255),
    ds = n(562819),
    da = n(253400),
    du = n(339984),
    dd = n(329801),
    dc = n(884362);
let dg = da.Ay.getEnableHardwareAcceleration() ? di.Js : di.eu;
function df(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function dm(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(ux.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eW.intl.string(eW.t.YAgq3W),
        children: (0, i.jsx)(uh.rX, { children: n }),
    });
}
function dp(e) {
    let { user: t, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, ez.V)(e),
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
                h = J.Ay.canUsePremiumProfileCustomization(t),
                x = h || null == n,
                A = h || null == n,
                I = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
                v = (0, eA.a4)({ user: t }),
                b = (0, eA.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, eA.CP)(n ?? void 0),
                C = void 0 !== y,
                E = null != (0, dr.A)(C ? y : b) && (C ? null != y : null != b),
                S = d && null != v,
                N = l.useCallback(() => {
                    (r(),
                        df(() =>
                            (0, nv.XD)({
                                uploadType: du.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        df(() =>
                            (0, ds.L)({
                                analyticsLocations: u,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, I, s]),
                T = l.useCallback(() => {
                    (r(),
                        (0, nv.rM)(null, f, (e) => (0, tx.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eA.WU)(p ? "reset" : "remove"));
                }, [r, n, f, p]),
                P = l.useCallback(() => {
                    (r(), (0, tx.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                uh.Dr,
                                { id: "change-avatar", label: eW.intl.string(eW.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                uh.Dr,
                                { id: "change-decoration", label: eW.intl.string(eW.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.twB3fz),
                                          action: T,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        E &&
                        e.push(
                            S
                                ? (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eW.intl.string(eW.t["2u5yu0"]),
                                          action: P,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eW.intl.string(eW.t["9rx5GO"]),
                                          action: P,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, x, A, S, m, E, N, k, T, P]);
        })({ user: t, guildId: n, onClose: f, returnRef: g });
    return 0 === m.length
        ? (0, i.jsx)(ez.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(dd.my, dd.vk, dc.kL, { [dc.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(dg, { ...r, imageClassName: s()(dd.Lw, dc.HU) }),
                  (0, i.jsx)(n_.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: n_.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, i.jsx)(dm, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: dc.r9,
                              children: (0, i.jsx)(ne.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: dl.PencilIcon,
                                  "aria-label": eW.intl.string(eW.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), d((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var dh = n(514905);
function dx(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(ux.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eW.intl.string(eW.t.FzU73A),
        children: (0, i.jsx)(uh.rX, { children: n }),
    });
}
function dA(e) {
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
                f = J.Ay.canUsePremiumProfileCustomization(t),
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
                T = x && E,
                P = x && S,
                R = void 0 === I ? null != d : null != I,
                O = void 0 === v ? null != c : null != v,
                _ = (0, eA.lw)({
                    pendingValue: v,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                w = (0, L.A)(_?.skuId),
                D = l.useCallback(() => {
                    (r(),
                        (0, nv.XD)({
                            uploadType: du.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                M = l.useCallback(() => {
                    (r(),
                        (0, is.W)({
                            analyticsLocations: u,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, nv.rM)(null, b, (e) => (0, tx.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, b]),
                U = l.useCallback(() => {
                    (r(), (0, tx.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, iC.w)({
                            analyticsLocations: u,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: w,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, w, s]),
                W = l.useCallback(() => {
                    (r(), (0, tx.p)({ guildId: n ?? void 0, profileFrame: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, i.jsx)(
                                uh.Dr,
                                { id: "change-banner", label: eW.intl.string(eW.t.N0bC3P), action: D },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                uh.Dr,
                                { id: "change-effect", label: eW.intl.string(eW.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                uh.Dr,
                                { id: "change-frame", label: eW.intl.string(eW.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    f &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            T
                                ? (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            P
                                ? (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      uh.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eW.intl.string(eW.t["8DfADq"]),
                                          action: W,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, h, T, P, N, R, O, D, M, F, G, U, W]);
        })({ user: t, guildId: n, onClose: c, returnRef: d });
    return 0 === g.length
        ? (0, i.jsx)(eK.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(dh.kL, { [dh.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eK.A, { ...e, className: dh.Pr }),
                  (0, i.jsx)(n_.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: n_.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(dx, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: dh.r9,
                              children: (0, i.jsx)(ne.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: dl.PencilIcon,
                                  "aria-label": eW.intl.string(eW.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var dI = n(419341),
    dv = n(776879),
    db = n(837531),
    dj = n(186272),
    dy = n(447538);
let dC = (e) => e * (2 - e),
    dE = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function dS(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function dN(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, ea.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: dy.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function dk(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (iu.add(e), () => iu.delete(e)),
            () => id,
        );
    return null == s ? null : (0, i.jsx)(O.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function dT(e) {
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
            fadeInProfileFrame: P,
            editingMode: R,
            isLoading: O = !1,
        } = e,
        _ = o.id === u.id,
        L = "edit" === R,
        w = l.useRef(null),
        M = l.useRef(null),
        G = l.useRef(null);
    l.useEffect(() => {
        if (_) return () => y.A.setState({ isOpen: !1 });
    }, [_]);
    let { isHoveringOrFocusing: V } = (0, U.A)(w),
        [z, Y] = l.useState(),
        X = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? Y("compact-xs") : t <= 380 ? Y("compact-sm") : Y(void 0);
        }, []);
    (0, I.g)(w, X, [], { fireOnMount: !0 });
    let J = null != z ? dE[z] : void 0,
        $ = l.useMemo(() => A ?? (0, F.A)(), [A]),
        { relationshipType: Q, originApplicationId: ee } = (0, a.cf)([K.A], () => ({
            relationshipType: K.A.getRelationshipType(o.id),
            originApplicationId: K.A.getOriginApplicationId(o.id),
        })),
        et =
            ((t = o.id),
            (n = (0, ei.bG)([er.default], () => er.default.locale)),
            (r = (0, ei.bG)([K.A], () => (K.A.getRelationshipType(t) === T.eA$.FRIEND ? K.A.getSince(t) : null), [t])),
            (0, el.An)(r, n)),
        en = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
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
        eI = L ? dA : eK.A,
        ev = p?.guildId ?? d,
        eb = {
            user: o,
            displayProfile: p,
            guildId: d,
            channelId: m,
            avatarSize: J?.avatarSize ?? ey.T[ej.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: C,
        },
        eC = l.useCallback(() => {
            (0, e4.A)({ user: o, guildId: ev, alt: h });
        }, [h, ev, o]);
    return (0, i.jsxs)("main", {
        className: s()(dy.profile, null != z && dy[z]),
        ref: w,
        "aria-busy": O,
        children: [
            (0, i.jsxs)("div", {
                className: dy.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: dy.profileHeaderBannerContainer,
                        children: (0, i.jsx)(eI, {
                            user: o,
                            displayProfile: p,
                            guildId: d,
                            themeType: ej.d.MODAL_V2,
                            specOverrides: J,
                            pendingBanner: E,
                            pendingAccentColor: S,
                        }),
                    }),
                    L
                        ? (0, i.jsx)(dp, { ...eb })
                        : (0, i.jsx)(ez.A, {
                              ...eb,
                              onOpenAvatar: "read-only" === R ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === R && null == C ? i7.$T : void 0,
                          }),
                    (0, i.jsx)(e6.A, {
                        user: o,
                        guildId: d,
                        channelId: m,
                        themeType: ej.d.MODAL_V2,
                        hasEntered: x,
                        prompt: _ ? $ : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: dy.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(dn, {
                                user: o,
                                displayProfile: p,
                                nickname: h,
                                trailing: (0, i.jsx)(eY.A, {
                                    displayProfile: p,
                                    themeType: ej.d.MODAL_V2,
                                    onClose: v,
                                    showPendingBadgeEdits: _,
                                    popoutAnchorRef: x ? M : void 0,
                                    containerRef: G,
                                }),
                                onClose: v,
                                onCreateTag: b,
                                editingMode: R,
                            }),
                            (0, i.jsx)("div", { ref: M }),
                            _ &&
                                x &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(eH, { targetElementRef: G }),
                                        (0, i.jsx)(eB, { targetElementRef: G }),
                                    ],
                                }),
                        ],
                    }),
                    Q === T.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(e8.A.Overlay, {
                            className: dy.profileOverlay,
                            children: (0, i.jsx)(e$.A, {
                                user: o,
                                applicationId: ee,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: dy.profileBanner,
                            }),
                        }),
                    ea.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e8.A.Overlay,
                            {
                                className: dy.profileOverlay,
                                children: (0, i.jsx)(e$.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: dy.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e8.A.Overlay, {
                            className: dy.profileOverlay,
                            children: (0, i.jsx)(tp, {
                                heading: eW.intl.string(eW.t.Iyka0U),
                                headingVariant: "body-md/semibold",
                                headingIcon: { icon: g.CircleErrorIcon, size: "xs" },
                                className: dy.profileBanner,
                                children: (0, i.jsx)(H.T, { userId: o.id, variant: "body-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(e5.A, { user: o, className: dy.profileBanner }),
                    p?.private &&
                        (0, i.jsx)(e8.A.Overlay, {
                            className: dy.profileOverlay,
                            children: (0, i.jsx)(e2.A, { username: h }),
                        }),
                    (0, i.jsx)("div", {
                        className: dy.profileButtons,
                        children: (0, i.jsx)(tV, {
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
                    _ && "try-it-out" !== R && (0, i.jsx)(eq.A, { isPremiumUser: (0, Z.ki)(u) }),
                    !en && (0, i.jsx)(tR, { currentUser: u, displayProfile: p, canEditInPlace: L }),
                    es.length > 0 &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t["Uv/eTx"]),
                            children: (0, i.jsx)(eJ.A, { applicationIds: es }),
                        }),
                    (0, i.jsx)(tp, {
                        heading: eW.intl.string(eW.t.a6XYD9),
                        children: (0, i.jsx)(e0.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: 300 }),
                    }),
                    null != et &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t.wlTO8v),
                            children: (0, i.jsx)(eZ, { friendsSinceDate: et }),
                        }),
                    p?.guildId != null &&
                        (0, i.jsx)(e3.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: dy.profileRolesSection,
                            headingVariant: "body-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !en &&
                        (L || ex) &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t["3fe7U5"]),
                            scrollTargetId: rk.bk.CONNECTIONS,
                            children: (0, i.jsx)(t9, {
                                applicationIdentities: em,
                                connections: ep,
                                userId: o.id,
                                allowEditing: L,
                                className: dy.profileAppConnections,
                            }),
                        }),
                    !en &&
                        eA &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t.PHjkRE),
                            scrollTargetId: rk.bk.APPS,
                            children: (0, i.jsx)(tu, {
                                applicationRoleConnections: eh,
                                onClose: v,
                                className: dy.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rW, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(dk, { displayProfile: p, profileEffectOverride: N, isHovering: V }),
            null != k && (0, i.jsx)(D.A, { frame: k, filterLayer: dS, fadeIn: P }),
        ],
    });
}
function dP(e) {
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
function dR(e) {
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
        es = l.useCallback(() => (0, u1.A)(er, Z), [er, Z]),
        ea = l.useCallback(
            (e) =>
                (0, u1.A)(er, () => {
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
        ek = ns(),
        eT = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        eP = (0, em.A)(u.id) && ey,
        eR = (0, ep.W)(u.id),
        eO = ef && !eR,
        e_ = eP && !eT && !ef && !ek,
        eL = ek ? "try-it-out" : e_ ? "edit" : "read-only",
        {
            pendingThemeColors: ew,
            avatarDecorationOverride: eD,
            avatarOverride: eM,
            bannerOverride: eG,
            accentColorOverride: eU,
            profileEffectOverride: eF,
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
        })({ userId: u.id, guildId: eo, editingMode: eL }),
        {
            isExpanded: eV,
            isAnimating: eH,
            transition: ez,
            handleExpand: eY,
            handleCollapse: eK,
            refs: { expandIconButtonRef: eq, expandTabButtonRef: eX, collapseButtonRef: eZ },
        } = (function () {
            let [e, t] = l.useState(() => window.innerWidth > 928),
                [n, i] = l.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: dC },
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
        eJ = eP && !eV,
        e$ = eP && (!eV || eH),
        { defaultWishlistId: e0 } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(u.id) }));
    ((0, z.fw)({ wishlistId: e0, userId: u.id }),
        (t = (0, R.D)("edit_profile_preload")),
        (n = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
        (r = (0, a.bG)([P.A], () => P.A.shouldFetch())),
        (0, l.useEffect)(() => {
            t &&
                null != n &&
                r &&
                (async function () {
                    S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
                    try {
                        let e = await E.Bo.get({
                            url: "/storefront/recommended-items",
                            query: { application_ids: [T.FYj], limit: 100 },
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
    let e2 = (0, eN.fC)(),
        e5 = eO && (!eP || !ed),
        e6 = eP && ef,
        e3 = eu !== eo || e6 || null != e2.interactionType,
        e4 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sR.A)(t),
                r = l?.length,
                s = (0, dv.A)(t),
                a = (0, s7.A)(t.id),
                o = (0, dI.A)(t),
                { hasNewWishlistItems: u } = (0, r3.A)(t),
                d = [],
                c = t.id === n?.id,
                g = ae(t.id),
                f = a.length > 0;
            return (
                (g || f) && d.push({ text: eW.intl.string(eW.t.laViwx), section: rk.RP.WIDGETS }),
                d.push({ text: eW.intl.string(eW.t.chq59f), section: rk.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eW.intl.string(eW.t["7lZ31J"]), section: rk.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, db.A)(i), section: rk.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, dj.A)(r), section: rk.RP.MUTUAL_GUILDS })),
                d
            );
        })({ user: u, currentUser: c }),
        { analyticsLocations: e9 } = (0, j.Ay)([...ei, b.A.USER_PROFILE_MODAL_V2]),
        e7 = (0, $.pb)({
            layout: "MODAL_V2",
            userId: u.id,
            sourceSessionId: U,
            guildId: eo,
            channelId: y,
            messageId: O,
            roleId: D,
        }),
        te = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e9, ...e7, action: rk.pt.SHOW_STYLES_PANEL }), eY());
        }, [e9, e7, eY]),
        tt = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e9, ...e7, action: rk.pt.HIDE_STYLES_PANEL }), eK());
        }, [e9, e7, eK]),
        tn = (0, en.Ay)(u.id, eo);
    (0, V.A)(e9, tn, rk.R7.MODAL_V2);
    let ti = void 0 !== eB ? eB?.skuId : tn?.profileFrame?.skuId,
        tl = (0, L.A)(ti),
        tr = (0, _.A)(ti),
        { profileFrameStyle: ts, profileFrameClassName: ta } = (0, M.A)(tl);
    (0, w.A)({ skuId: tn?.profileFrame?.skuId, openedAt: K, context: e7, analyticsLocations: e9 });
    let to = (0, a.bG)([C.default], () => J.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        tu = ek || (er && null != tn && to),
        td = X.Ay.useName(tn?.guildId, y, u),
        tc = (0, G.GV)(),
        tg = (0, a.bG)([Y.A], () => (null != eo ? Y.A.getGuild(eo) : null)),
        tf = er
            ? null != tg
                ? eW.intl.formatToPlainString(eW.t.M7OhOF, { guildName: tg.name })
                : eW.intl.string(eW.t.egQPgM)
            : eW.intl.format(eW.t.KRe1Fk, { name: td });
    return (0, i.jsx)(j.f5, {
        value: e9,
        children: (0, i.jsx)($.of, {
            value: e7,
            openedAt: K,
            fetchStartedAt: tn?.fetchStartedAt,
            fetchEndedAt: tn?.fetchEndedAt,
            isLoaded: tn?.isLoaded,
            children: (0, i.jsx)(eN.Hl, {
                value: e2,
                children: (0, i.jsx)(eS.N, {
                    value: W,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(i7.zr, { [i7.QF]: tn?.private === !0 }),
                        transitionState: B,
                        "aria-labelledby": tc,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rZ, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(dy.layoutContainer, ta, {
                                        [dy.editingPanelEnabled]: eP,
                                        [dy.editingPanelExpanded]: eP && eV,
                                        [dy.isAnimating]: eH,
                                    }),
                                    style: ts,
                                    children: [
                                        (0, i.jsxs)(dP, {
                                            user: u,
                                            displayProfile: tn,
                                            pendingThemeColors: ew,
                                            forceShowPremium: tu,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: i7.Oo,
                                                    children: [
                                                        (0, i.jsx)(tH.A, { onClose: es }),
                                                        (0, i.jsx)(f.A, {
                                                            children: (0, i.jsx)(m.H, { id: tc, children: tf }),
                                                        }),
                                                        e$ &&
                                                            (0, i.jsx)(l7, {
                                                                buttonRef: eq,
                                                                onClick: te,
                                                                className: dy.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eJ &&
                                                    (0, i.jsx)("div", {
                                                        className: dy.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(l9, {
                                                            innerRef: eX,
                                                            onClick: te,
                                                            className: dy.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(m.F, {
                                            children: [
                                                eP &&
                                                    ez((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(re, {
                                                                  className: s()(dy.editingPanel, {
                                                                      [dy.isExpanded]: eV,
                                                                  }),
                                                                  selectedGuildId: eu,
                                                                  originGuildId: I,
                                                                  onSelectGuildId: ec,
                                                                  onClose: tt,
                                                                  collapseButtonRef: eZ,
                                                                  isLoading: ed,
                                                                  isEditingDisabled: ef,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(e8.A, {
                                                    className: s()(el, i7.A7, dy.profileContentOuter),
                                                    innerClassName: dy.profileContentInner,
                                                    user: u,
                                                    displayProfile: tn,
                                                    themeType: ej.d.MODAL_V2,
                                                    pendingThemeColors: ew,
                                                    isPrivate: tn?.private === !0,
                                                    forceShowPremium: tu,
                                                    children: [
                                                        (0, i.jsx)(dN, { displayProfile: tn, pendingBanner: eG }),
                                                        tn?.private === !0 && (0, i.jsx)(e1.A, {}),
                                                        !eO && (0, i.jsx)(uw, { className: dy.noticeContainer }),
                                                        e5 &&
                                                            (0, i.jsx)("div", {
                                                                className: dy.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rH, {
                                                                    icon: (0, i.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: h.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eW.intl.string(eW.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != eg
                                                                            ? eW.intl.string(eW.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: eg,
                                                                    actionDisabled: !eP && ed,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: dy.profileCardToastContainer,
                                                            children: (0, i.jsx)(eQ.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rq, {
                                                            showScrim: e3,
                                                            showLoadingSpinner: ed,
                                                            className: dy.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(dT, {
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
                                                                    bannerOverride: eG,
                                                                    accentColorOverride: eU,
                                                                    profileEffectOverride: eF,
                                                                    profileFrame: tl,
                                                                    fadeInProfileFrame: tr,
                                                                    editingMode: eL,
                                                                    isLoading: ed,
                                                                }),
                                                                (0, i.jsx)(uR, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    displayProfile: tn,
                                                                    guildId: eo,
                                                                    channelId: y,
                                                                    items: e4,
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
                            (0, i.jsx)(r_, { userId: u.id, guildId: eo, className: dy.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function dO(e) {
    return (0, i.jsx)(nr, { children: (0, i.jsx)(dR, { ...e }) });
}
