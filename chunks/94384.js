n.d(t, { A: () => dA });
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
    eX = n(560296),
    eq = n(834730);
function eZ(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(eq.E, { variant: "body-sm/normal", children: t });
}
var e$ = n(361311),
    eJ = n(477534),
    eQ = n(439053),
    e0 = n(743987),
    e1 = n(312381),
    e2 = n(501193),
    e5 = n(383448),
    e6 = n(946356),
    e8 = n(680581),
    e3 = n(503026),
    e9 = n(305385),
    e7 = n(109112),
    e4 = n(939249),
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
                        : (0, i.jsx)(e7.UnknownGameIcon, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: ta.Hd,
                children: [
                    (0, i.jsxs)(e4.D, {
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
                                ? (0, i.jsx)(eq.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(eq.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eq.E, {
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
        { trackUserProfileAction: r } = (0, J.NJ)(),
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
    return (0, i.jsxs)(eq.E, {
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
                ? (0, i.jsx)(eq.E, {
                      id: A,
                      variant: "body-sm/normal",
                      color: "text-muted",
                      className: tb.qf,
                      children: r,
                  })
                : n,
            (0, i.jsx)(e4.D, {
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
        m = $.Ay.canUsePremiumProfileCustomization(c),
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
        { context: r } = (0, J.NJ)(),
        s = n?.bio,
        a = !(0, tc.uJ)(s),
        o = n?.guildId != null,
        u = o && $.Ay.canUsePremiumProfileCustomization(t),
        d = u ? eW.intl.string(eW.t.jVai8N) : eW.intl.string(eW.t.ZzAR2Y),
        c = (0, $.TW)(t) ? eW.intl.string(eW.t["5AFxuK"]) : eW.intl.string(eW.t.N6ixy8),
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
    tD = n(987307),
    tM = n(34188),
    tG = n(110676),
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
    tX = n(307301),
    tq = n(149468),
    tZ = n(643068),
    t$ = n(522978),
    tJ = n(129230),
    tQ = n(486020),
    t0 = n(889558),
    t1 = n(783419);
let t2 = "User Profile Modal V2";
function t5(e) {
    let t = eu.A.get(e);
    ((0, t$.A)({ platformType: t.type, location: t2 }),
        tJ.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: t2,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function t6() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: t5, stackingBehavior: "stack" });
}
function t8(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, el.An)(r[t1.pK.CREATED_AT], n),
        a = eu.A.get((0, tZ.ML)(t.type));
    return (0, i.jsx)(t9, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tz.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eq.E, { variant: "body-sm/normal", className: ta.GW, children: t.name }),
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
                          ((0, tq.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, t0.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: ta.vi,
                          children: [
                              (0, i.jsx)(tz.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eq.E, {
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
    return (0, i.jsx)(t9, {
        renderAccountName: function () {
            return (0, i.jsx)(tz.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eq.E, {
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
function t9(e) {
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
                                (0, i.jsx)(eq.E, {
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
function t7(e) {
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
                        t.map((e) => (0, i.jsx)(t8, { account: e, userId: l, locale: u }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(t3, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e4.D, {
                    className: ta.qG,
                    onClick: t6,
                    children: [
                        (0, i.jsx)(tX.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/medium",
                            color: "none",
                            children: eW.intl.string(eW.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var t4 = n(193885),
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
        c = (0, a.bG)([C.default], () => $.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
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
    nh = n(465794),
    nx = n(468450),
    nA = n(462887),
    nI = n(765178),
    nv = n(736653),
    nb = n(461797),
    nj = n(469054),
    ny = n(601298),
    nC = n(207803);
function nE() {
    let e = (0, nv.Ay)(),
        t = (0, nA.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nb.Wt)(e);
                (0, nC.w5)({
                    banner: (0, ny.X)({
                        assetOrigin: nj.E.NEW_ASSET,
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
            eb.A.hasTryItOutChanges() || n((0, nb.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = eb.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nb.B$)(e),
                i = (0, nb.Wt)(t);
            (tJ.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                nI.O.announce(eW.intl.formatToPlainString(eW.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nS = n(487233),
    nN = n(999618),
    nk = n(317097),
    nT = n(602853),
    nP = n(265872),
    nR = n(508274),
    nO = n(654107),
    n_ = n(930349);
function nL(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nT.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nO.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([eb.A, ee.A], () => ({
            pendingAccentColor: eb.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: ee.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, nk.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, tx.p)({ accentColor: e }), []);
    return (0, i.jsx)(nP.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nR.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(n_.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eW.intl.string(eW.t["/X3fkf"]),
                editButtonA11yLabel: eW.intl.string(eW.t.kRMJ1v),
                currentValueA11yLabel: (0, nk.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nk.Hl)(c) } }),
            }),
    });
}
var nw = n(841183),
    nD = n(450373),
    nM = n(317139);
function nG(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nM.o, style: { backgroundColor: t } });
}
function nU(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: nM._ });
}
function nF(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, nT.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, nk.LX)(s),
        { hex: o } = (0, nD.A)(a),
        u = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != u ? (0, i.jsx)(nU, { src: u, imageDescription: r }) : (0, i.jsx)(nG, { backgroundColor: o });
}
function nW(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eW.intl.string(eW.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(n_.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eW.intl.string(eW.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nF, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
    });
}
var nB = n(569059);
function nV(e) {
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
                currentValueA11yLabel: (0, nw.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        m = (0, eA.Ac)(u, g)
            ? {
                  onClick: () => (0, nx.rM)(null, g, (e) => (0, tx.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eW.intl.string(f ? eW.t.jHlJNS : eW.t.tT9n7D),
              }
            : void 0,
        p = (0, nB.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nW, {
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
var nH = n(259065),
    nz = n(922301),
    nY = n(16371),
    nK = n(523312);
let nX = "heading-xl/semibold";
function nq(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nK.MC, { [nK.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eq.E, {
                      variant: nX,
                      children: (0, i.jsx)(nY.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nz.G.ANIMATED : nz.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eq.E, { variant: nX, className: nK.kr, children: t }),
    });
}
function nZ(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eW.intl.string(eW.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(n_.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eW.intl.string(eW.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(nq, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
    });
}
function n$(e) {
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
            (o?.(), (0, nH.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(nZ, {
        affordance: (!v && (I || null != A)) || b ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nw.I9)(y),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: y,
        disabled: r,
    });
}
var nJ = n(450232),
    nQ = n(89851);
function n0(e) {
    let { heading: t, children: n, disabled: l = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, i.jsxs)("div", {
        className: nQ.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(nQ.Pf, { [nQ.r9]: l }),
                children: [
                    (0, i.jsx)(nd.D, {
                        className: nQ.DV,
                        variant: "body-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    r && (0, i.jsx)(nJ.A, { className: nQ.IX, size: "xs", color: "inherit", disabled: l }),
                    null != a && (0, i.jsx)("span", { className: nQ.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function n1(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: nQ.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.CircleErrorIcon, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eq.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var n2 = n(887988),
    n5 = n(366010),
    n6 = n(674658),
    n8 = n(617061),
    n3 = n(203632),
    n9 = n(536572);
let n7 = new Set(),
    n4 = 0;
var ie = n(993408),
    it = n(841702),
    ii = n(515718),
    il = n(94039);
function ir(e) {
    "" !== e.thumbnailPreviewSrc && (0, ii.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var is = n(599752),
    ia = n(249360);
let io =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    iu =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function id(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, nv.Ay)(),
        d = (0, n5.M)(u) ? io : iu,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, it.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ie.wo)(r, i), [r, i]),
                a = (0, il.A)({ enabled: t, isInteracting: n, items: s, preload: ir });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((n4 += 1), n7.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: is.ti,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: is.QQ }),
                f?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(is.yY, { [ia.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(O.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: n3.HL.FromStart,
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
function ic(e) {
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
        { product: I } = (0, n6.q)(A?.skuId),
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
            (0, n8.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(n_.A, {
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
        })({ profileEffectPreview: A, productName: (0, n9.VG)(I), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(id, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var ig = n(163697),
    im = n(515727),
    ip = n(746002);
function ih(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, ip.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: ip.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, ii.NN)(n).catch(() => {});
        });
}
var ix = n(715196);
function iA(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function iI(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, nv.Ay)(),
        d = (0, n5.M)(u) ? io : iu,
        c = (0, L.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, it.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ie.MG)(r, i), [r, i]);
            return (0, il.A)({ enabled: t, isInteracting: n, items: s, preload: ih });
        })({ enabled: n && !r && !o, isInteracting: a }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != m ? (0, ig.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != m &&
                (0, i.jsx)("div", {
                    className: s()(ix.hm, h, { [ia.O]: f }),
                    style: p,
                    "aria-hidden": f,
                    children: (0, i.jsx)(D.A, { frame: m, filterLayer: iA, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(ix.ti, { [ix.yT]: null == m }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: ix.QQ, draggable: !1 }),
            }),
        ],
    });
}
function iv(e) {
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
        { product: A } = (0, n6.q)(x?.skuId),
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
            (0, im.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(n_.A, {
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
        })({ profileFramePreview: x, productName: (0, n9.VG)(A), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(iI, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var ib = n(684732),
    ij = n(498596),
    iy = n(871524);
function iC(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, nk.Hl)(t)}, ${(0, nk.Hl)(n)})`;
    return (0, i.jsx)("div", { className: iy.D7, style: { background: r }, children: l });
}
function iE(e) {
    let { color: t } = e,
        n = (0, nk.Hl)(t),
        l = (0, nk.bJ)(t, 0xffffff) < ij.Tr.NonText;
    return (0, i.jsx)("div", {
        className: iy.OS,
        children: (0, i.jsx)("div", { className: s()(iy.Hy, { [iy.rY]: l }), style: { backgroundColor: n } }),
    });
}
function iS(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e4.D, {
        ...a,
        innerRef: s ?? o,
        className: iy.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(iE, { color: t }),
    });
}
function iN(e) {
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
    return (0, i.jsx)(nP.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: u,
        renderPopout: (e) => (0, i.jsx)(nR.VN, { ...e, value: t, onChange: d, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(iS, {
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
function ik(e) {
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
        A = (0, nk.Hl)(n),
        I = (0, nk.Hl)(r),
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
    return (0, i.jsxs)(n_.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: u,
        deleteButton: j,
        children: [
            (0, i.jsx)(f.A, { id: v, children: eW.intl.formatToPlainString(eW.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(f.A, { id: b, children: eW.intl.formatToPlainString(eW.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(iC, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(iN, {
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
                    (0, i.jsx)(iN, {
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
function iT(e) {
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
        p = (0, nT.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nO.rh)(x, p, !1),
        I = l.useCallback(
            (e) => {
                (0, tx.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, ib.l)(u, o)
                ? {
                      onClick: () => (0, tx.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eW.intl.string(eW.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, i.jsx)(ik, {
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
var iP = n(629985);
function iR(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(m.F, { children: (0, i.jsx)("div", { className: s()(iP.k, { [iP.V]: n }), children: t }) });
}
var iO = n(516521),
    i_ = n(424290);
function iL(e) {
    let { children: t } = e;
    return (0, i.jsx)(iO.zC, { className: i_.X, children: (0, i.jsx)("div", { className: i_.Q, children: t }) });
}
var iw = n(77528),
    iD = n(811611),
    iM = n(976860),
    iG = n(38145);
function iU() {
    return l.useCallback(() => {
        ((0, iM.pX)(T.BVt.NITRO_HOME), (0, iG.M)());
    }, []);
}
var iF = n(423814),
    iW = n(511484),
    iB = n(682901);
function iV(e) {
    let t = (0, a.bG)([C.default], () => $.Ay.isPremium(C.default.getCurrentUser())),
        n = (0, iF.O)();
    return t
        ? eW.intl.string(eW.t.AfRWI8)
        : (0, iW.U9)(n, iB.pe.TIER_2) && n?.discount.amount != null
          ? eW.intl.formatToPlainString(eW.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var iH = n(155053);
function iz() {
    let e = (0, iw.V)();
    return e?.subscriptionTrial?.skuId === iB.pe.TIER_2 ? e : null;
}
function iY() {
    let e = iV(eW.intl.string(eW.t.pj0XBN));
    return (0, i.jsx)(nh.A, { subscriptionTier: iB.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function iK(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iU(),
        a = (0, $.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, iD.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: iH.nH,
        children: [
            (0, i.jsxs)("div", {
                className: iH.qf,
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: eW.intl.string(eW.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(nc.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eq.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eW.intl.format(eW.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(nh.A, {
                subscriptionTier: iB.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eq.E, { variant: "body-xs/normal", color: "text-muted", className: iH.u8, children: o }),
        ],
    });
}
function iX() {
    let e = iz();
    return null == e ? (0, i.jsx)(iY, {}) : (0, i.jsx)(iK, { trialOffer: e });
}
var iq = n(55619),
    iZ = n(848717);
function i$() {
    return (0, i.jsxs)("div", {
        className: iZ.k,
        children: [
            (0, i.jsx)(eq.E, {
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
                    return iq.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var iJ = n(342866),
    iQ = n(968475);
function i0(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eb.A], () => ({
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(iJ.A, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nw.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? iQ.$T : void 0,
    });
}
function i1(e) {
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
                : (0, nw.ID)(u, o);
    return (0, i.jsx)(nW, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: d,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
    });
}
function i2(e) {
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
    return (0, i.jsx)(nZ, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        currentValueA11yLabel: (0, nw.I9)(u),
        shouldAlwaysAnimate: null == r,
    });
}
function i5(e) {
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
function i6(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = i5(t),
        u = (0, nT.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nO.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, nC.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(ik, {
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
function i8(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = i5(t),
        o = l.useId(),
        u = l.useId();
    if (null == s || null == a) return null;
    let d = (0, nk.Hl)(s),
        c = (0, nk.Hl)(a);
    return (0, i.jsxs)(n_.Y, {
        fieldA11yLabel: eW.intl.string(eW.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(f.A, { id: o, children: eW.intl.formatToPlainString(eW.t.v4X2kc, { colorHex: d }) }),
            (0, i.jsx)(f.A, { id: u, children: eW.intl.formatToPlainString(eW.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(iC, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(iS, {
                        color: s,
                        onClick: n,
                        "aria-label": eW.intl.string(eW.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(iS, {
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
var i3 = n(847081);
function i9(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = na(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, j.Ay)();
            return l.useCallback(() => {
                (0, nH.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nB._)({ isPremiumTryItOut: !0, returnRef: s }),
        f = (0, nB.P)({ isPremiumTryItOut: !0, returnRef: a }),
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
            className: i3.T,
            children: [
                (0, i.jsx)(n0, {
                    heading: eW.intl.string(eW.t.NEzEws),
                    children: (0, i.jsx)(i2, {
                        user: t,
                        buttonRef: r,
                        onClick: m ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n0, {
                    heading: eW.intl.string(eW.t.DMeO2X),
                    children: m
                        ? (0, i.jsx)(i6, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(i8, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(n0, {
                    heading: eW.intl.string(eW.t.Vgdusv),
                    children: (0, i.jsx)(i1, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: m ? f : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n0, {
                    heading: eW.intl.string(eW.t.Dt3ZUr),
                    children: (0, i.jsx)(i0, {
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
var i7 = n(847374),
    i4 = n(111159),
    le = n(682163),
    lt = n(711014),
    ln = n(941030),
    li = n(561392),
    ll = n(286615),
    lr = n(15626),
    ls = n(715022),
    la = n(44482),
    lo = n(470791);
function lu(e) {
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
                } = (0, li.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, ll.DL)(o, {
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
        C = l.useContext(lr._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        T = l.useRef(null),
        [P, R] = l.useState(null),
        O = null != P ? (0, ls.ZN)(N, P) : void 0,
        _ = l.useRef(!1),
        L = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, ls.fI)(e.value, [n])), [n, t]),
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
        { activeIndex: W, handleKeyDown: B } = (0, ln.l)(!0, t),
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
                    className: s()(lo.S_, u),
                    ...b(),
                    style: { ...I, ...j },
                    children: (0, i.jsx)(ln.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: P,
                        renderListItem: (e) => (null != m ? m(e) : (0, i.jsx)(la.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var ld = n(216384);
let lc = "MAIN_PROFILE";
function lg(e) {
    let { guild: t } = e;
    return (0, i.jsx)(le.Ay, { className: ld.$f, guild: t, size: le.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function lf(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ld.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: ld.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: ld.qL,
                children: [
                    (0, i.jsx)(eq.E, { variant: "body-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(eq.E, {
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
function lm(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e4.D, {
        innerRef: r,
        className: s()(ld.L5, { [ld.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eq.E, {
                variant: "body-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: ld.v9,
                children: n,
            }),
            (0, i.jsx)(i7.ChevronSmallDownIcon, {
                className: ld.u4,
                size: "sm",
                color: !0 === l ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function lp(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([lt.Ay], () => lt.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([Y.A], () => Y.A.getGuilds()),
        c = (0, a.bG)([tr.A], () => {
            let e = tr.A.getGuildId();
            return null == e || eb._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ev.Ay, lt.Ay], () => {
            let e = {};
            for (let t of lt.Ay.getFlattenedGuildIds()) {
                let n = ev.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        f = l.useMemo(() => {
            let e = {
                    id: lc,
                    label: eW.intl.string(eW.t["2p07FR"]),
                    value: lc,
                    leading: (0, i.jsx)(i4.ClydeIcon, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, i.jsx)(lg, { guild: n }),
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
                          leading: (0, i.jsx)(lg, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        m = t ?? lc,
        p = f.find((e) => e.value === m) ?? f[0],
        x = l.useCallback(
            (e) => {
                let n = e === lc ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(lu, {
        className: ld.kL,
        label: eW.intl.string(eW.t.rki38K),
        listboxClassName: ld.yt,
        options: f,
        value: m,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(lf, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(lm, { leading: p.value === lc ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var lh = n(288490);
let lx = "profile-editing-nameplate-error",
    lA = "profile-editing-avatar-error",
    lI = "profile-editing-avatar-decoration-error",
    lv = "profile-editing-banner-error",
    lb = "profile-editing-display-name-style-error";
function lj(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lh.D0, t),
        children: (0, i.jsx)("div", { className: lh.ZN, children: (0, i.jsx)(no.LockIcon, { size: "xs" }) }),
    });
}
function ly() {
    let [e, t] = (0, np.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lh.X6,
              children: [
                  (0, i.jsx)(eq.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      children: eW.intl.string(eW.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e4.D, {
                      "aria-label": eW.intl.string(eW.t.rSe9ra),
                      className: lh.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(nu.XSmallIcon, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lC() {
    let e = iU(),
        t = iV(eW.intl.string(eW.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lh.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lh.tm,
                children: [
                    (0, i.jsx)(nd.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: eW.intl.string(eW.t.bO0TOe),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: eW.intl.format(eW.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(nh.A, { subscriptionTier: iB.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lj, { className: lh.nd }),
        ],
    });
}
function lE() {
    return (0, i.jsx)(eq.E, {
        variant: "body-xs/normal",
        color: "text-subtle",
        className: lh.BJ,
        "aria-hidden": !0,
        children: eW.intl.format(eW.t.kYv9DM, {
            nitroIconHook: () =>
                (0, i.jsx)(td.NitroWheelIcon, { size: "xxs", color: "currentColor", className: lh.qp }),
        }),
    });
}
function lS(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(n0, {
        heading: eW.intl.string(eW.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(n2.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lx : void 0 }),
            (0, i.jsx)(n1, { id: lx, message: r }),
        ],
    });
}
function lN(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(n0, {
        heading: eW.intl.string(eW.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nS.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lA : void 0 }),
            (0, i.jsx)(nN.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lI : void 0 }),
            (0, i.jsx)(n1, { id: lA, message: (0, nx.d3)(r) }),
            (0, i.jsx)(n1, { id: lI, message: s }),
        ],
    });
}
function lk(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eU.kn)(l ? [] : [ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, i.jsxs)(n0, {
        heading: eW.intl.string(eW.t.NEzEws),
        disabled: l,
        showNitroIcon: !0,
        badge: o
            ? (0, i.jsx)("div", {
                  className: lh.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(nc.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: [
            (0, i.jsx)(n$, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lb : void 0,
                onOpen: o ? () => a(eF.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(n1, { id: lb, message: r }),
        ],
    });
}
function lT(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(n0, {
        heading: eW.intl.string(eW.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iT, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nV, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lv : void 0 }),
            (0, i.jsx)(n1, { id: lv, message: (0, nx.d3)(s) }),
        ],
    });
}
function lP(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(n0, {
        heading: eW.intl.string(eW.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nL, { user: t, disabled: n }),
    });
}
function lR(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(n0, {
        heading: eW.intl.string(eW.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(ic, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(iv, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lO = "premium-try-it-out-description";
function l_(e) {
    let { user: t } = e,
        n = iU(),
        { navigate: l } = na();
    return (
        nE(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lO,
            className: lh.DX,
            children: [
                (0, i.jsx)(lj, { className: lh.x$ }),
                (0, i.jsxs)("div", {
                    className: lh.sb,
                    children: [
                        (0, i.jsx)(eq.E, {
                            id: lO,
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
                (0, i.jsx)(i9, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lL(e) {
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
        f = (0, nt.A)(c),
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
    return (0, i.jsxs)(iR, {
        hasGradientBackground: A,
        children: [
            (0, i.jsxs)("div", {
                className: lh.wx,
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
                    (0, i.jsx)(lp, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(i$, {})
                : (0, i.jsx)(iL, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              m && (p ? (0, i.jsx)(ly, {}) : (0, i.jsx)(lC, {})),
                              p && (0, i.jsx)(lE, {}),
                              (0, i.jsx)(lS, { user: t, guildId: l, disabled: I || h, errorMessage: b }),
                              (0, i.jsx)(lN, {
                                  user: t,
                                  guildId: l,
                                  disabled: I || h,
                                  avatarErrorMessage: j,
                                  avatarDecorationErrorMessage: y,
                              }),
                              p || m
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lk, { user: t, guildId: l, disabled: I || h, errorMessage: E }),
                                            (0, i.jsx)(lT, {
                                                user: t,
                                                guildId: l,
                                                disabled: I || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: C,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lP, { user: t, disabled: I || h }),
                              (0, i.jsx)(lR, { user: t, guildId: l, disabled: I || h }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(l_, { user: t }), (0, i.jsx)(iX, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lw = n(120692),
    lD = n(110654);
function lM(e) {
    return null;
}
function lG(e) {
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
        className: s()(lD.kL, h && lD.ez),
        children: (0, i.jsx)("div", {
            className: lD.u4,
            children: p((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lw.animated.div,
                          {
                              className: lD.M6,
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
var lU = n(926321),
    lF = n(477155),
    lW = n(561243),
    lB = n(206697),
    lV = n(280406);
let lH = "shuffle-options-a11y-description";
function lz(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(ng.$, {
                icon: lU.DiceIcon,
                text: eW.intl.string(eW.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": lH,
                fullWidth: !0,
            }),
            (0, i.jsx)(f.A, { id: lH, children: eW.intl.string(eW.t.bBRdiB) }),
        ],
    });
}
function lY(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = nE(),
        s = iz();
    return (0, i.jsxs)(iR, {
        children: [
            (0, i.jsxs)("div", {
                className: lV.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: lV.FS,
                        children: (0, i.jsx)(tz.m, {
                            text: eW.intl.string(eW.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(ne.K, {
                                buttonRef: l,
                                "aria-label": eW.intl.string(eW.t["4IYwrw"]),
                                icon: lF.ArrowSmallLeftIcon,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(nd.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: lV.R_,
                        children: eW.intl.string(eW.t.PxUx8e),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: lV.Ij,
                        children: eW.intl.string(eW.t.X0ir7L),
                    }),
                    (0, i.jsx)(lz, { className: lV.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iL, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i9, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(iK, {
                                trialOffer: s,
                                onSubscribeClick: lB.t,
                                onSubscribeSuccess: lB.T,
                                onSubscribeClose: lW.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var lK = n(199016);
let lX = "user-profile-editing-panel",
    lq = "profile-modal-editing-panel-heading";
function lZ(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tz.m, {
        text: eW.intl.string(eW.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e4.D, {
            innerRef: l,
            "aria-label": eW.intl.string(eW.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": lX,
            className: s()(lK.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(t4.PaintbrushThinIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function l$(e) {
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
                "aria-controls": lX,
                icon: t4.PaintbrushThinIcon,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function lJ(e) {
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
              id: lX,
              "aria-labelledby": lq,
              className: s()(lK.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: lK.l$,
                  children: [
                      (0, i.jsx)(f.A, {
                          children: (0, i.jsx)(m.H, { id: lq, children: eW.intl.string(eW.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lG, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lM, {
                                  id: "default",
                                  children: (0, i.jsx)(lL, {
                                      panelId: lX,
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
                              (0, i.jsx)(lM, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(lY, { user: p, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var lQ = n(425763),
    l0 = n(447453),
    l1 = n(46653),
    l2 = n(783420),
    l5 = n(874402);
function l6() {
    let e = ns(),
        { goBack: t } = na(),
        n = iV(eW.intl.string(eW.t.pj0XBN));
    return (0, i.jsx)(l2.A, {
        subscriptionTier: iB.pe.TIER_2,
        onClick: lB.t,
        onSubscribeModalClose: (e) => {
            (e && (0, lB.T)(), (0, lW.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(l5.$, {
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
var l8 = n(803306),
    l3 = n(631670),
    l9 = n(682618),
    l7 = n(856383),
    l4 = n(234e3),
    re = n(159001),
    rt = n(933725),
    rn = n(188567),
    ri = n(435911),
    rl = n(646976),
    rr = n(289173),
    rs = n(958805),
    ra = n(61881),
    ro = n(735321),
    ru = n(624826),
    rd = n(419490),
    rc = n(489496),
    rg = n(132319),
    rf = n(696016),
    rm = n(384377),
    rp = n(518477);
function rh(e) {
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
            let e = (0, a.yK)([ra.A], () => ra.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([ra.A], () => ra.A.getChangedWidgets()),
                n = (0, a.yK)([ra.A], () => ra.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([ra.A], () => ({
                    hasUnsavedWidgets: ra.A.hasUnsavedChanges(),
                    canSaveWidgets: ra.A.canSaveChanges(),
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
            hasBadgeChangesToSave: (0, l4.gz)(eb.A.getPendingChanges()),
        })),
        I = p && h,
        v = f || I || A,
        b = !(f && !m) && (!p || x),
        j = l.useCallback(() => {
            (rs.A.clearPendingWidgets(), p ? (0, nC.XQ)() : A && (0, l4.Jp)());
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
                            return (l7.A.captureException(e), !1);
                        }
                    })({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = C.default.getCurrentUser()?.id;
                    (null != e && (await (0, l8.eO)(e).catch(() => {})), await (0, l9.RS)(), (0, l4.Jp)());
                }
                e = n;
            }
            if (I)
                try {
                    if (null == t) {
                        let t = eb.A.getPendingChanges(),
                            n = (0, ri.Sk)(t),
                            i = (0, ri.yX)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, l3._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, ru.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l3.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, nC.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, nC.RE)());
                        }
                    } else {
                        let n = eb.A.getPendingChanges(t),
                            i = (0, ri.C5)(n),
                            l = (0, ri.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, re.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, ru.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l3.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, nC.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, nC.RE)());
                        }
                    }
                    let n = (0, ri.yg)(eb.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, rt.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, l3.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    let e = (0, ro.BF)();
                    for (let t of (await rs.A.savePendingWidgets(d), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, rr.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof rl.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof rl.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = rd.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, rg.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                !(async function (e, t) {
                                    try {
                                        await (0, rc.Yy)(e, { name: t });
                                    } catch (e) {
                                        rf.GU.warn(`Failed to sync profile clip title to the library: ${e}`);
                                    }
                                })(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, l3.x8)() : (0, rm.XA)(rp.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
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
                rn._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (rn._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(l5.$, {
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
var rx = n(485745),
    rA = n(893757);
function rI() {
    let e = !(0, et.X)("useEditingFooterState"),
        t = (0, lQ.VU)(),
        n = (0, rx.A)(e),
        i = ns();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function rv(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([l1.default], () => l1.default.getId() === t),
        u = rI(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rA.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(l0.S, { className: rA.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(l6, {})
                        : "save" === d
                          ? (0, i.jsx)(rh, { guildId: n })
                          : null,
          })
        : null;
}
var rb = n(347805),
    rj = n(34011),
    ry = n(629403),
    rC = n(612630),
    rE = n(61426);
function rS(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rC.A)(t),
        [g, f] = l.useState(),
        [m, p] = l.useState(),
        h = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), f(e), o?.());
                    try {
                        await ry.A.updateNote(t, e);
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
            ? (0, i.jsx)(eq.E, { variant: "body-sm/normal", color: "text-default", className: rE.t, children: h })
            : null;
    return (0, i.jsx)("div", {
        className: s()(tb.kL, n),
        children: (0, i.jsx)(rj.w, {
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
var rN = n(793222);
function rk(e) {
    let { userId: t } = e,
        n = (0, eS.g)(),
        { trackUserProfileAction: l } = (0, J.NJ)(),
        r = (0, et.X)("UserProfileModalV2NotesSection"),
        s = r ? rS : rb.A;
    return (0, i.jsx)(tp, {
        heading: eW.intl.string(eW.t["mQKv+v"]),
        scrollTargetId: rp.bk.NOTE,
        children: (0, i.jsx)(s, {
            userId: t,
            className: r ? rN.N : rN.w,
            autoFocus: n === rp.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rT = n(123292),
    rP = n(667242);
function rR(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: u } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            u && d.current?.focus();
        }, [u]),
        (0, i.jsx)("div", {
            className: rP.kL,
            children: (0, i.jsxs)("div", {
                className: rP.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rP.Kk, children: t }),
                    (0, i.jsx)(eq.E, { color: "text-strong", variant: "body-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rP.hP,
                            children: (0, i.jsx)(rT.Q, {
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
var rO = n(346055),
    r_ = n(289873),
    rL = n(615019);
function rw(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && nI.O.announce(eW.intl.string(eW.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rO.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rL.f, t && rL.z),
                    children: n && (0, i.jsx)(r_.y, { type: r_.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rD = n(568602);
function rM(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([ra.A, eb.A], () => ra.A.hasUnsavedChanges() || eb.A.hasUnsavedChanges());
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
                rn._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    rn._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(rD.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var rG = n(761508),
    rU = n(329921),
    rF = n(945810),
    rW = n(50258);
let rB = { enabled: !1 },
    rV = { 0: rB, 1: { enabled: !0 } },
    rH = (0, rF.mj)({
        name: "2026-10-profile-default-tab-with-content",
        kind: "user",
        defaultConfig: rB,
        variations: rV,
    });
function rz(e) {
    let { location: t } = e;
    return (rH.useConfig({ location: t }), null);
}
var rY = n(695904),
    rK = n(573238),
    rX = n(107563),
    rq = n(517164),
    rZ = n(290863),
    r$ = n(894768),
    rJ = n(146655),
    rQ = n(489379);
function r0(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, rJ.A)(t.id),
        { voiceChannel: u, voiceActivity: d } = (0, rQ.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([rq.A], () => rq.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        f = (0, a.bG)([r$.A, rZ.A], () => {
            let e = g ? r$.A.getStatus() : rZ.A.getStatus(t.id);
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
var r1 = n(939496),
    r2 = n(114212),
    r5 = n(960549),
    r6 = n(637865),
    r8 = n(842241),
    r3 = n(287746),
    r9 = n(435558),
    r7 = n(534890),
    r4 = n(308528),
    se = n(780964),
    st = n(766075),
    sn = n(92795);
let si = [
        () => eW.intl.string(eW.t.madJdE),
        () => eW.intl.string(eW.t.NYmfoP),
        () => eW.intl.string(eW.t.R2PaCg),
        () => eW.intl.string(eW.t.laSR8h),
        () => eW.intl.string(eW.t.DnsJE8),
    ],
    sl = [
        () => eW.intl.string(eW.t.nFSbeE),
        () => eW.intl.string(eW.t.gTcxOz),
        () => eW.intl.string(eW.t["8T0wYj"]),
        () => eW.intl.string(eW.t.BIHl1g),
        () => eW.intl.string(eW.t["jhBm0+"]),
    ],
    sr = [
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
    ss = [
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
function sa(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: sn.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: sn.FS,
                children: [
                    (0, i.jsx)(nd.D, { variant: "heading-sm/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eq.E, { variant: "body-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function so() {
    let e = eW.intl.string(eW.t.RnD2yZ),
        [t] = l.useState(() => ((0, r9.sample)(si) ?? si[0])());
    return (0, i.jsx)(sa, { heading: e, bodyText: t });
}
function su() {
    let e = eW.intl.string(eW.t.bFgqYJ),
        [t] = l.useState(() => ((0, r9.sample)(sl) ?? sl[0])());
    return (0, i.jsx)(sa, { heading: e, bodyText: t });
}
function sd(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = q.Ay.getName(n, r, t),
        o = eW.intl.formatToPlainString(eW.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, r9.sample)(sr) ?? sr[0])(a)),
        d = l.useCallback(() => {
            (r4.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(sa, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: sn.v0,
            children: (0, i.jsx)(tU.FD, { icon: r7.ChatIcon, text: eW.intl.string(eW.t["g33r/P"]), onClick: d }),
        }),
    });
}
function sc() {
    let e = (0, nv.Ay)();
    return (0, i.jsx)("div", {
        className: sn.HU,
        children: ss.map((t, n) => {
            let l = eu.A.get(t);
            if (null == l) return null;
            let r = (0, n5.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: sn.gj }, n);
        }),
    });
}
function sg(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, st.openUserSettings)(se.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, st.openUserSettings)(se.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(sa, {
        heading: eW.intl.string(eW.t.VB6LWY),
        bodyText: eW.intl.string(eW.t.KpjsU9),
        children: [
            (0, i.jsx)(sc, {}),
            (0, i.jsxs)("div", {
                className: sn.v0,
                children: [
                    (0, i.jsx)(tU.FD, { text: eW.intl.string(eW.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tU.FD, { text: eW.intl.string(eW.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var sf = n(131058);
function sm(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(sf.gN, n), fade: !0, ...r, children: t });
}
var sp = n(587763);
function sh(e) {
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
        } = r0({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return m || p || !g
        ? m || p || g
            ? (0, i.jsxs)(sm, {
                  className: sp.XG,
                  fade: !0,
                  children: [
                      m
                          ? (0, i.jsx)(tp, {
                                heading: eW.intl.string(eW.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sp.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(r8.A, {
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
                                                    children: (0, i.jsx)(r5.A, {
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
                                                children: (0, i.jsx)(r3.A, {
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
                                scrollTargetId: rp.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sp.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(r6.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : f
              ? (0, i.jsx)(sg, { onClose: a })
              : (0, i.jsx)(sd, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sp.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sp.kr,
                          children: [
                              (0, i.jsx)(r2.F, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(r2.F, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sx = n(163126),
    sA = n(913453),
    sI = n(229187),
    sv = n(702476),
    sb = n(503062),
    sj = n(393213);
function sy(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, J.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, sA.A)(t),
        g = (0, sx.A)();
    return (
        l.useEffect(() => {
            (0, sI.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sm, {
            className: sj.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sj.D$,
                                  children: [
                                      (0, i.jsx)(r2.F, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(r2.F, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(so, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                sb.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sv.openUserProfileModal)({
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
var sC = n(398590),
    sE = n(345942),
    sS = n(51943);
function sN(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, J.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sA.A)(t);
    return (0, i.jsx)(sm, {
        className: sj.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sj.Y7,
                              children: [
                                  (0, i.jsx)(r2.F, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(r2.F, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sS.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sE.u)(r.id), n(), (0, sC.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(su, {}),
    });
}
var sk = n(885574),
    sT = n(781300),
    sP = n(331322),
    sR = n(591410),
    sO = n(881116),
    s_ = n(506774),
    sL = n(531913),
    sw = n(503275),
    sD = n(260498),
    sM = n(387580);
let sG = "conjureServerWidgetUpsellDismissals";
var sU = n(763314),
    sF = n(191850);
function sW(e) {
    let { widget: t, guildId: n, currentUser: r, onDismiss: s } = e,
        o = (function (e, t, n) {
            let { applicationId: i } = t,
                r = (0, a.bG)([Y.A], () => Y.A.getGuild(n)),
                s = (0, ed.h)(i),
                o = (0, a.bG)([sD.Ay], () => sD.Ay.findProjectByApplicationId(i)?.owner_user_id, [i]),
                u = (0, sw.vm)(o),
                d = (0, sL.A)(e, i),
                c = l.useMemo(() => ({ ...d, isLoading: !1, hasIdentity: !0 }), [d]);
            return null == r || null == s
                ? null
                : { guild: r, application: s, creator: null != o ? u : null, rendererProps: c };
        })(r.id, t, n);
    if (null == o) return null;
    let { guild: u, application: d, creator: c, rendererProps: g } = o;
    return (0, i.jsx)(sP.B, {
        children: (0, i.jsx)(sR.A, {
            user: r,
            widget: t,
            rendererProps: g,
            allowEditing: !1,
            subtle: !0,
            exclusiveCTA: !0,
            cta: (0, i.jsx)(sR.A.Cta, {
                icon: (0, i.jsx)(le.Ay, { guild: u, size: le.Ay.Sizes.MEDIUM, active: !0, "aria-hidden": !0 }),
                heading: eW.intl.formatToPlainString(sF.default["uIb8U+"], { guildName: u.name }),
                content: eW.intl.formatToPlainString(sF.default.ZZywee, { applicationName: d.name }),
                attribution:
                    null != c
                        ? (0, i.jsx)(sP.B, {
                              direction: "horizontal",
                              gap: 8,
                              align: "center",
                              children: (0, i.jsx)(sO.A, { creator: c, guildId: n, color: "text-subtle" }),
                          })
                        : null,
                buttons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(rT.Q, {
                            variant: "secondary",
                            textVariant: "body-sm/medium",
                            text: eW.intl.string(eW.t.WAI6xu),
                            onClick: s,
                        }),
                        (0, i.jsx)(ng.$, {
                            variant: "primary",
                            size: "sm",
                            text: eW.intl.string(sF.default.j6ztO0),
                            onClick: () => (0, sU.A)(t.applicationId, s),
                        }),
                    ],
                }),
            }),
        }),
    });
}
function sB(e) {
    let { currentUser: t } = e,
        n = (function (e) {
            let t = (0, sM.A)(),
                [n, i] = l.useState(() => s_.w.get(sG)?.[e] ?? []),
                r = t.find((e) => {
                    let { guildId: t } = e;
                    return !n.includes(t);
                }),
                s = r?.guildId,
                a = r?.widgets[0],
                o = l.useCallback(() => {
                    if (null != s) {
                        let t;
                        ((t = s_.w.get(sG) ?? {}),
                            s_.w.set(sG, { ...t, [e]: [...(t[e] ?? []), s] }),
                            i((e) => [...e, s]));
                    }
                }, [e, s]);
            return null != s && null != a ? { guildId: s, widget: a, dismiss: o } : null;
        })(t.id);
    return null == n
        ? null
        : (0, i.jsx)(sW, { widget: n.widget, guildId: n.guildId, currentUser: t, onDismiss: n.dismiss }, n.guildId);
}
function sV() {
    let e = (0, a.bG)([C.default], () => C.default.getCurrentUser());
    return null != e ? (0, i.jsx)(sB, { currentUser: e }, e.id) : null;
}
var sH = n(840387),
    sz = n(201718),
    sY = n(615405),
    sK = n(633075),
    sX = n(813832),
    sq = n(600761),
    sZ = n(667049);
function s$(e) {
    let t = (0, em.A)(e),
        n = ns();
    return t && !n;
}
var sJ = n(540185),
    sQ = n(192308),
    s0 = n(210598),
    s1 = n(465318);
function s2() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = s1.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, eU.kn)(e && t ? [ek.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === ek.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function s5(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: r } = (0, J.NJ)();
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
                          let e = (0, s0.g0)();
                          ((0, ro.Y5)(e),
                              r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, rm.XA)(rp.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var s6 = n(410453);
function s8(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: r } = e,
        { trackUserProfileEditAction: s } = (0, J.NJ)(),
        a = l.useCallback(() => {
            n && r(eF.i.TAKE_ACTION);
            let e = (0, s0.g0)();
            ((0, ro.Y5)(e),
                s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, rm.XA)(rp.jM.WIDGET_ADDED));
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
function s3(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, J.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, d] = s2(),
        c = (function () {
            let e = (0, ei.bG)([C.default], () => C.default.getCurrentUser()?.id),
                t = (0, sZ.A)(e),
                { enabled: n, showCreateEntrypoint: i } = s1.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === sJ.x.PERSONAL);
            return n && i && !l;
        })(),
        g = l.useCallback(() => {
            (u && d(eF.i.TAKE_ACTION),
                r({ action: "PRESS_ADD_WIDGET" }),
                (0, sQ.mM)(
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
        className: s()(s6.w, t),
        children: [
            (0, i.jsx)(eq.E, {
                className: s6.D,
                variant: "body-sm/semibold",
                color: "text-subtle",
                children: eW.intl.string(eW.t.OYlggR),
            }),
            c ? (0, i.jsx)(s8, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: d }) : null,
            (0, i.jsx)(ng.$, {
                icon: tX.PlusSmallIcon,
                text: eW.intl.string(eW.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: g,
                buttonRef: a,
            }),
            (0, i.jsx)(s5, { targetElementRef: c ? o : a, isVisible: u, markAsDismissed: d }),
        ],
    });
}
var s9 = n(192),
    s7 = n(704824),
    s4 = n(382483),
    ae = n(385113),
    at = n(334074),
    an = n(657718),
    ai = n(478016);
function al(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, J.NJ)(),
        a = l.useMemo(() => new sK.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, ro.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, rm.XA)(rp.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sR.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sR.A.Cta, {
            showSuggestedForYou: !0,
            heading: eW.intl.format(eW.t.OIzLCy, { applicationName: n.name }),
            content: eW.intl.format(eW.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tz.m, {
                        text: eW.intl.string(eW.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(an.S, {
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
                        children: (0, i.jsx)(an.S, {
                            variant: "primary",
                            size: "sm",
                            icon: ai.CheckmarkSmallIcon,
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
function ar() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([ae.A], () => ae.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, s4.Wq)();
        }, []);
        let t = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
            n = (0, ed.A)(e),
            { tokens: i, fetched: r } = (0, s7.j)(e),
            s = (0, sZ.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof sK.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, at.hj)({
                applications: u,
                dismissibleContent: ek.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: at.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(al, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var as = n(675816),
    aa = n(575593),
    ao = n(44120),
    au = n(778705),
    ad = n(87719),
    ac = n(317560),
    ag = n(306984),
    af = n(661492);
let am = { sentGifts: {} };
function ap(e, t) {
    return `${e}:${t}`;
}
class ah extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((am = e), this.cleanupExpiredGifts());
    }
    getState() {
        return am;
    }
    hasSentGift(e, t) {
        let n = ap(e, t),
            i = am.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = ap(e, t),
            i = am.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(am.sentGifts)) new Date(n.expiresAt) < e && delete am.sentGifts[t];
    }
}
let ax = new ah(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = ap(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        am.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var aA = n(146423),
    aI = n(590180),
    av = n(301198),
    ab = n(349031),
    aj = n(124557),
    ay = n(471505),
    aC = n(376932);
function aE(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function aS(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l1.default], () => l1.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ay.G)({ userId: o, sku: n, location: l, onError: r }),
        f = aO();
    return (0, i.jsx)("div", {
        className: aC.U,
        style: aE(t),
        children: (0, i.jsx)(av._, {
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
function aN(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l1.default], () => l1.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aj.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = aO();
    return (0, i.jsx)("div", {
        className: aC.U,
        style: aE(t),
        children: (0, i.jsx)(av._, {
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
function ak(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l1.default], () => l1.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aj.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = aO();
    return (0, i.jsx)("div", {
        className: aC.U,
        style: aE(t),
        children: (0, i.jsx)(av._, {
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
function aT(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l1.default], () => l1.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: f,
            isPurchased: m,
        } = (0, ab.z)({ userId: o, product: n, location: l, onError: r }),
        p = (0, af.q)(f),
        h = m && !u,
        x = !p || h,
        A = aO(p && h ? eW.intl.string(eW.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: aC.U,
        style: aE(t),
        children: (0, i.jsx)(av._, {
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
function aP(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([aI.A], () => aI.A.getProduct(t.id));
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aS, { sku: t, isVisuallyHidden: !n, ...l });
        case T.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(aN, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(aT, { product: r, isVisuallyHidden: !n, ...l });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(ak, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function aR(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(aP, { location: t, ...n });
}
function aO(e) {
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
var a_ = n(460442),
    aL = n(662349),
    aw = n(479026),
    aD = n(636374),
    aM = n(699976),
    aG = n(181554),
    aU = n(880465);
let aF = aM.Z.SIZE_133;
function aW(e) {
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
                        action: rp.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, v, N, C]),
        T = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (N({
                        wishlistId: v,
                        action: rp.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, N, C]),
        P = l.useCallback(() => {
            ((0, rm.XA)(rp.jM.SOMETHING_WENT_WRONG), nI.O.announce(eW.intl.string(eW.t.F8FvUy)));
        }, []),
        R = null != g ? (0, i.jsx)("div", { ref: E, className: aG.BU, children: g }) : null,
        {
            onBodyClick: O,
            onOverlayClick: _,
            showOverlayButton: L,
            routesToGift: w,
            label: D,
            icon: M,
        } = (0, aD.P)({ wishlistOwner: a, isOwned: b, onDetailsClick: k, onPurchaseClick: T }),
        G = h && L;
    return (0, i.jsxs)("div", {
        className: aG.kL,
        children: [
            (0, i.jsxs)(aA.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: aF,
                cardStyle: s()(aG.Nr, d),
                skuPreviewStyle: s()(aG.ev, { [aG.go]: b && !h }, f, G ? m : void 0),
                skuAssetClassName: G ? p : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: O,
                "aria-label":
                    ((t = r.sku),
                    (n = w ? (0, af.T)(t) : eW.intl.formatToPlainString(eW.t.ZBB4Ty, { productName: (0, af.T)(t) })),
                    !0 === y ? eW.intl.formatToPlainString(eW.t.s9RZ1r, { label: n }) : n),
                children: [
                    !0 === y && (0, i.jsx)(rU.N, { className: aG.Pf }),
                    j,
                    L && (0, i.jsx)(aL.A, { spec: aF, onClick: _, isHoveringOrFocusing: h, label: D, icon: M }),
                    b && (0, i.jsx)(a_.gS, { isHoveringOrFocusing: h }),
                    a.id === u.id &&
                        null != v &&
                        (0, i.jsx)(aR, {
                            sku: r.sku,
                            isCardHovered: h,
                            spec: aF,
                            onError: P,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            R,
        ],
    });
}
function aB(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, ac.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: iB.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, ag.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: iB.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(aW, {
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
function aV(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, aw.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: iB.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, ao.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: iB.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        m = f === aa.R.AVATAR_DECORATION || f === aa.R.PROFILE_FRAME;
    return (0, i.jsx)(aW, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [aG.mn]: m }),
        analyticsLocations: a,
        ...d,
    });
}
function aH(e) {
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
            if (n) return void (0, ad.x)(iG.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, au.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: iB.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(aW, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aU.MO,
        skuAssetHoverClassName: aU.iR,
        analyticsLocations: a,
        ...u,
    });
}
function az(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, j.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        f = (0, a.bG)([ax], () => ax.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        m = l.useMemo(
            () => t.skuProductLine !== T.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aB, {
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
            return (0, i.jsx)(aV, {
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
            return (0, i.jsx)(aH, {
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
var aY = n(788593),
    aK = n(132085),
    aX = n(741934),
    aq = n(720060),
    aZ = n(998556);
function a$(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, as.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        u = (0, lQ.VU)(),
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
                                  className: aZ.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(aq.u, {
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
                                  children: (0, i.jsx)(aY.A, {
                                      className: aZ.XJ,
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
                                  className: aZ.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(aK.A, {
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
                                  className: aZ.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(aX.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: aZ.Xm,
                                  children: (0, i.jsx)(az, {
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
    return (0, i.jsx)("div", { className: aZ.kL, style: { transform: `translate3d(${p}px, ${h}px, 0)` }, children: d });
}
var aJ = n(151869);
function aQ(e) {
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
        let t = n.find((t) => (0, sK.E)(t, e));
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
        l && c(sJ.x.CLIPS_GALLERY),
        r && c(sJ.x.PERSONAL),
        c(sJ.x.FAVORITE_GAMES),
        c(sJ.x.PLAYED_GAMES),
        g("1346069614634864772"),
        c(sJ.x.CURRENT_GAMES),
        c(sJ.x.WANT_TO_PLAY_GAMES),
        g("1323482066758930452"),
        o.slice(0, s)
    );
}
n(839272);
let a0 = (0, rF.mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var a1 = n(116281),
    a2 = n(661439),
    a5 = n(90165);
function a6(e) {
    let t = (0, a.bG)([ae.A], () => ae.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof sK.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, ed.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, s7.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, a2.X)();
    }, [o]);
    let u = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        d = (0, a.yK)([a5.A], () => u.map((e) => (null != e ? a5.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([a5.A], () => u.map((e) => (null != e ? a5.A.getLastPlayedDateTime(e) : null)));
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
var a8 = n(224360),
    a3 = n(297520),
    a9 = n(843393);
function a7(e) {
    return e.getUniqueKey();
}
function a4(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, a1.A)(),
        s = a6(r),
        o = (0, a.bG)([rd.Ay], () => rd.Ay.hasClips()),
        u = (0, a.bG)([C.default], () => $.Ay.isPremium(C.default.getCurrentUser(), iB.PremiumTypes.TIER_2)),
        d = l.useMemo(
            () =>
                aQ({
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
            c && (0, i.jsx)(oe, { suggestions: d, suggestionsLocation: "above" }),
            t,
            c && (0, i.jsx)(oe, { suggestions: d, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function oe(e) {
    let t = a0.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(ot, { ...e }) : null;
}
function ot(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, J.NJ)(),
        { focusAddedWidget: o } = (0, s9.r)(),
        [u, d] = (0, eU.kn)([ek.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(a3.A, {
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
        : (0, i.jsx)(a8.A, {
              className: s()(a9.uW, "above" === n && a9.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "body-xs/normal" : void 0,
              onDismiss: () => d(eF.i.USER_DISMISS),
              children: (0, i.jsx)(aJ.A, {
                  items: t,
                  getItemKey: a7,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: a9.Dk,
                  scrollerClassName: a9.jv,
                  itemClassName: a9.Vs,
                  actionsClassName: a9.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eW.intl.string(eW.t["+EIBSA"]),
              }),
          });
}
let on = (0, rF.mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var oi = n(269507);
function ol(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: oi.ZW,
        "aria-label": eW.intl.string(eW.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === sJ.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(a3.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function or(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, a1.A)();
    return (0, i.jsx)(ol, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function os(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: r,
            trackUserProfileEditAction: s,
            personalWidgetOptionRef: o,
        } = e,
        u = (0, a1.A)(),
        d = a6(u),
        c = aQ({
            addableWidgets: u,
            applicationAffinityData: d,
            hasClips: (0, a.bG)([rd.Ay], () => rd.Ay.hasClips()),
            hasPremium: (0, a.bG)([C.default], () =>
                $.Ay.isPremium(C.default.getCurrentUser(), iB.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: r ? [sJ.x.PERSONAL] : [],
        }),
        g = l.useCallback(() => {
            (s({ action: "PRESS_ADD_WIDGET" }),
                (0, sQ.mM)(
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
            (0, i.jsx)(ol, { widgets: c, personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
            (0, i.jsx)(ng.$, { text: eW.intl.string(eW.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: g }),
        ],
    });
}
function oa(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, J.NJ)(),
        s = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError != null, [t]),
        [d, c] = s2(!u),
        g = d || (0, s0.t0)(),
        { enabled: f, maxWidgetOptions: m } = (function (e) {
            let { location: t } = e;
            return on.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            s.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: oi.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: oi.FS,
                    children: [
                        (0, i.jsx)(nd.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: eW.intl.string(eW.t["oqalC+"]),
                        }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: u ? eW.intl.string(eW.t["+W59o5"]) : eW.intl.string(eW.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(sV, {}),
                            f
                                ? (0, i.jsx)(os, {
                                      maxWidgetOptions: m,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: g,
                                      trackUserProfileEditAction: r,
                                  })
                                : (0, i.jsx)(or, { personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
                            (0, i.jsx)(s5, { targetElementRef: o, isVisible: d, markAsDismissed: c }),
                        ],
                    }),
            ],
        })
    );
}
var oo = n(366209);
function ou() {
    return (0, i.jsxs)("div", {
        className: oo.mJ,
        children: [
            (0, i.jsx)(sk.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eq.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: eW.intl.string(eW.t["7blcz6"]),
            }),
        ],
    });
}
function od(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, sZ.A)(t.id),
        u = s$(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([sY.A], () => [sY.A.ipCountryCode, sY.A.ipCountryCodeRequest]),
                n = (0, sH.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sT.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && u,
        g = l.useMemo(() => o.filter(rr.fu), [o]),
        f = l.useMemo(() => o.filter((e) => e instanceof sK.R), [o]);
    function m() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                aq.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: u, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s3, { className: oo.cG }),
                            d && (0, i.jsx)(ou, {}),
                            (0, i.jsx)(ar, {}),
                            (0, i.jsx)(sV, {}),
                        ],
                    }),
                u ? (0, i.jsx)(a4, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, sX.Y)(u, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, ed.A)(n);
        let { data: i, refetch: r } = (0, sz.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, f),
    c)
        ? (0, i.jsx)(oa, { userId: t.id })
        : u
          ? (0, i.jsx)(s9.D, { children: m() })
          : m();
}
function oc(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, sq.i)({ containerRef: d });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                d.current?.scrollTo({ top: 0, behavior: tv.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([l1.default], () => l1.default.getId() === t)), (r = rI()), n && null != r);
    return (0, i.jsxs)(sm, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(oo.XG, { [oo.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(a$, { scrollerRef: d }), (0, i.jsx)(od, { user: o, onWidgetAddedFromBelow: c, ...u })],
    });
}
var og = n(115560),
    of = n(777480),
    om = n(825484),
    op = n(952270),
    oh = n(444927),
    ox = n(895360),
    oA = n(267102),
    oI = n(521440),
    ov = n(721932),
    ob = n(832163),
    oj = n(501838),
    oy = n(44724),
    oC = n(808247),
    oE = n(673843),
    oS = n(855052),
    oN = n(342442),
    ok = n(658946),
    oT = n(535089),
    oP = n(840411),
    oR = n(666810),
    oO = n(419731),
    o_ = n(451395),
    oL = n(823016),
    ow = n(100741);
function oD(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, oL.r)();
    return (0, i.jsx)(o_.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eW.intl.formatToPlainString(eW.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: ow.C,
        dropBeforeClassName: ow.A,
        dropAfterClassName: ow.Ze,
        draggingClassName: ow.Id,
        children: (0, i.jsx)("div", { className: ow.An, children: s }),
    });
}
let oM = l.memo(function (e) {
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
        { registerDragHandleRef: f } = (0, oL.r)(),
        m = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(o_.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: ow.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        h = l.useMemo(
            () =>
                (0, i.jsx)(az, {
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
              children: (0, i.jsx)(oD, { item: t, index: n, wishlistId: o, onReorder: d, children: h }),
          })
        : (0, i.jsx)("li", { children: h });
});
function oG(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        u = C.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(n.id) })),
        { isDragging: c } = (0, as.V)((e) => ({ isDragging: e.isDragging() })),
        [g, f] = l.useState([]),
        m = l.useCallback((e) => {
            f((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        p = l.useCallback(
            (e, n) => {
                if (e === n || null == d || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = rX.A.getWishlist(d);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, oP.Ap)(i, t, e, n);
                oC.A.reorderWishlistItem(d, l.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [d, t],
        );
    if (null == u || null == d) return null;
    let h = (0, i.jsx)("ul", {
        className: ow.Vg,
        children: t.map((e, t) =>
            (0, i.jsx)(
                oM,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    guildId: r,
                    showEditingControls: s,
                    wishlistId: d,
                    isDragging: c,
                    onReorder: p,
                    isNew: (0, oO.f3)(e.addedAt, o) && !g.includes(e.skuId),
                    onClick: m,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, i.jsx)(oL.B, { emptyListFallbackRef: null, children: h }) : h;
}
function oU(e) {
    let t = C.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(oR.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(oG, { ...e }),
    });
}
var oF = n(815021),
    oW = n(299679),
    oB = n(820847);
n(667532);
var oV = n(802494),
    oH = n(172218),
    oz = n(858899),
    oY = n(2157),
    oK = n(95817),
    oX = n(74135),
    oq = n(964164);
let oZ = aM.Z.SIZE_90;
function o$(e) {
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
        p = (0, oW.Ar)(),
        h = (0, oh.A)(() => (0, og.A)()),
        { handleVisibilityChange: x } = (0, oK.G)(h),
        A = (0, oH.K)(x, 0.5, p?.surface != null),
        I = l.useCallback(() => {
            (m({
                wishlistId: g,
                action: rp.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                p?.surface != null &&
                    tJ.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
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
        children: (0, i.jsx)(aA.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: oZ,
            cardStyle: s()(oq.Nr, a),
            skuPreviewStyle: s()(oq.ev, o),
            onHoverOrFocusChange: u,
            onClick: I,
            "aria-label": c,
            children: f,
        }),
    });
}
function oJ(e) {
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
                    (await oC.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: rp.RP.WISHLIST }));
                } catch (e) {
                    ((0, oz.P0)({ text: eW.intl.string(eW.t.F8FvUy), variant: "critical" }),
                        nI.O.announce(eW.intl.string(eW.t.F8FvUy)));
                } finally {
                    m(!1);
                }
            }
        }, [t, n, f, a, d]),
        h = l.useMemo(() => s()({ [oq.zW]: r || f }, o), [r, f, o]);
    return (0, i.jsxs)(o$, {
        "aria-label": eW.intl.formatToPlainString(eW.t.xRjJBe, { productName: (0, af.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(a_.oU, { isHoveringOrFocusing: r, loading: f }), !r && !f && c],
    });
}
function oQ(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, j.Ay)(...(n ?? []), b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, oY.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(oJ, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(oX.s, { spec: oZ, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function o0(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case aa.R.PROFILE_EFFECT:
                case aa.R.NAMEPLATE:
                case aa.R.BUNDLE:
                case aa.R.PROFILE_FRAME:
                    return;
                case aa.R.AVATAR_DECORATION:
                    return oq.ML;
                default:
                    return s()(oq.ML, oq.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(oJ, { sku: t, skuPreviewStyle: r, ...n });
}
function o1(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(oJ, { sku: t, skuPreviewStyle: aU.MO, ...n });
}
function o2(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(oQ, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(o0, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(o1, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var o5 = n(609965);
function o6(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([C.default], () => C.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(o5.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                oW.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(o2, {
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
var o8 = n(927813);
let o3 = 90 * o8.A.Millis.DAY,
    o9 = 90 * o8.A.Millis.DAY;
var o7 = n(469364);
function o4(e) {
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
                    { showAfterTimestamp: u + o9, cooldownDurationMs: o3 },
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
        ? (0, i.jsx)(ue, {
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
function ue(e) {
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
                { recommendations: a, status: o } = (0, oV.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(iB.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, oP.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oB.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(o7.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: o7.wx,
                      children: [
                          (0, i.jsx)(eq.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: eW.intl.string(eW.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: o7.b,
                                  children: (0, i.jsx)(oF.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(oW.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(o6, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(o7.Vg, o7.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var ut = n(477782),
    un = n(165862),
    ui = n(431194);
function ul(e) {
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
                                null != t ? () => (0, i.jsx)("img", { className: ui.I, src: t, alt: "" }) : tM.ShopIcon,
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
                (0, i.jsxs)(ut.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(ut.Dr, {
                                id: "browse-collectibles-shop",
                                label: eW.intl.string(eW.t["5upuqx"]),
                                iconLeft: tM.ShopIcon,
                                leadingAccessory: { type: "icon", icon: tM.ShopIcon },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(ut.Dr, {
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
                                    ut.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nP.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(un.W, {
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
                icon: d ? nu.XSmallIcon : i7.ChevronSmallDownIcon,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var ur = n(365199);
let us = eV.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function ua(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, j.Ay)(b.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(ut.rX, {
                          children: [
                              (0, i.jsx)(ut.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eW.intl.string(eW.t.b2nFyA),
                                  subtext: eW.intl.string(eW.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(ut.bX, {}),
                              (0, i.jsx)(ut.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eW.intl.string(eW.t.hvVgAZ),
                                  icon: tK.LinkExternalSmallIcon,
                                  trailingIndicator: { type: "icon", icon: tK.LinkExternalSmallIcon },
                                  action: () => window.open(us),
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
              children: (0, i.jsx)(nP.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(un.W, {
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
                          icon: ur.MoreHorizontalIcon,
                          tooltipText: eW.intl.string(eW.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var uo = n(526725);
function uu(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(ul, {
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
function ud(e) {
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
        className: uo.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(ul, {
                          title: eW.intl.string(eW.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(ng.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tX.PlusSmallIcon,
                          text: eW.intl.string(eW.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(ua, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function uc(e) {
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
function ug(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, oA.Us)() === T.BRT.OVERLAY,
        u = (0, ed.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(uc, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(ul, {
                title: eW.intl.string(eW.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: uo.y7,
        children: [
            (0, i.jsxs)("div", {
                className: uo.q6,
                children: [
                    (0, i.jsx)(nd.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: eW.intl.string(eW.t.HGnLLT),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: eW.intl.string(eW.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(om.e, {
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
function uf(e) {
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
        f?.visibility != null && x(f.visibility === of.a.PUBLIC);
    }, [f?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && m({ wishlistId: t, action: n, productLines: i });
            },
            [m],
        ),
        I = (0, oT.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, oS.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = h ? of.a.PRIVATE : of.a.PUBLIC;
            (x(!h),
                oC.A.updateWishlistVisibility(g, e),
                m({
                    wishlistId: g,
                    action: h ? rp.Mq.WISHLIST_TOGGLE_PRIVATE : rp.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, oS.y9)(s) : void 0,
                }));
        }, [g, h, m, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: uo.lm,
                    children: [
                        (0, i.jsx)(op.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eW.intl.string(eW.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                p &&
                (0, i.jsxs)("div", {
                    className: uo.lm,
                    children: [
                        (0, i.jsx)(sk.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eW.intl.string(eW.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: uo.U1,
                children: [
                    (0, i.jsx)(eq.E, {
                        variant: "body-xs/semibold",
                        color: "text-subtle",
                        children: eW.intl.format(eW.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(ud, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(uu, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function um(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, sq.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: u } = (0, a.cf)([ee.A, C.default], () => ({
            wishlistId: ee.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, j.Ay)(),
        c = (function (e) {
            let { ownerId: t, wishlistId: n, isVisible: i = !0 } = e,
                r = (0, rY.bq)(),
                s = (0, a.bG)(
                    [ee.A],
                    () => (null != t ? ee.A.getProfileReadStateSectionAckedAt(t, oN.o.WISHLIST) : null),
                    [t],
                ),
                [o, u] = l.useState(void 0);
            (i || void 0 === o || u(void 0), i && null != t && null != r && void 0 === o && u(r.enabled ? s : null));
            let d = (0, a.bG)([rX.A, ee.A], () => null != t && (0, ok.Y)(t, n), [t, n]),
                c = void 0 !== o;
            return (
                l.useEffect(() => {
                    i && c && d && null != t && (0, ok.U)(t);
                }, [i, c, d, t]),
                o
            );
        })({ ownerId: t.id, wishlistId: o }),
        g = s$(t.id),
        { wishlist: f, wasFetched: m, error: p } = (0, z.fw)({ wishlistId: o, userId: t.id }),
        [h, x] = l.useState(!1);
    (m && !h && x(!0), (0, oE.A)(f));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([ob.A], () => ob.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, ov.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, oj.w)({ userIds: s }),
                c = (0, oj.mn)({ userIds: s }),
                g = (0, oj.tR)(s),
                f = (0, oj.rY)(),
                m = (0, oj.qx)(),
                p = (0, oj.px)();
            return l.useMemo(
                () => (0, r9.uniq)([...u, ...d, ...c, ...g, ...(r ? [...f, ...m, ...p] : [])].filter(eg.Vq)),
                [u, d, c, g, f, m, p, r],
            );
        })({ wishlist: f, profileOwner: t, currentUser: u }),
        I = (0, oh.A)(() => (0, og.A)()),
        v = l.useCallback(() => {
            (0, tG.Cz)({ analyticsLocations: d, analyticsSource: b.A.USER_PROFILE_WISHLIST });
        }, [d]),
        y = l.useCallback((e) => {
            (0, oy.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iG.M)(), (0, oy.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, aj.c)({
            userId: u?.id,
            skuId: iB.pe.TIER_2,
            nuxGraphic: oI.g,
            onNuxShow: ox.D,
            location: b.A.USER_PROFILE_WISHLIST,
        });
    if (null == u || null != p) return null;
    let N = null == f || 0 === f.items.length;
    return (0, i.jsxs)(sm, {
        scrollerRef: r,
        className: s()({ [uo.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(ug, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(a$, { scrollerRef: r }),
                          (0, i.jsx)(uf, {
                              isOwner: u?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: f,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, oS.C3)(f, iB.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(oU, {
                              items: f.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              ackedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(o4, {
                    user: t,
                    guildId: n,
                    wishlist: f,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: I,
                    className: N ? uo._E : uo.HZ,
                }),
        ],
    });
}
function up(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rp.RP.ACTIVITY
        ? (0, i.jsx)(sh, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rp.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sy, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rp.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sN, { user: t, onClose: o })
            : l === rp.RP.WIDGETS
              ? (0, i.jsx)(oc, { user: t, guildId: s, channelId: a })
              : l === rp.RP.WISHLIST
                ? (0, i.jsx)(um, { profileOwner: t, guildId: s })
                : null;
}
function uh(e) {
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
        { shouldLogExposure: h } = (0, rK.A)(t),
        { primaryColor: x } = (0, r1.E)(),
        A = null != x ? "neutral" : "primary",
        I = l.useRef(!1),
        v = u.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        v && !I.current && ((I.current = !0), p({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [v, p]);
    let [b, j] = l.useState(() => (u.find((e) => e.section === d) ?? u[0]).section),
        y = (0, a.bG)([l1.default, rW.A], () => {
            let e = rW.A.getAssignment("user", l1.default.getId(), rH.definition.name);
            return e?.variantId == null || e.useAsEligibility ? null : (rV[e.variantId] ?? rB);
        }),
        C = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: u,
                    hasRecentActivity: d,
                } = r0({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [ee.A, rX.A],
                    () => {
                        if (null == ee.A.getUserProfile(t.id) || ee.A.isFetchingProfile(t.id, l)) return !0;
                        let e = ee.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = rX.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = ee.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && rX.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === rp.RP.WIDGETS) &&
                      r.some((e) => e.section === rp.RP.WISHLIST) &&
                      !u &&
                      !d)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: u }),
        [E, S] = l.useState(null);
    if (null == E && null != C && null != y) {
        let e = null == d && C;
        (S(e), e && y.enabled && j(rp.RP.WISHLIST));
    }
    let N = u.find((e) => e.section === b) ?? u[0];
    return (
        N.section !== b && j(N.section),
        (0, i.jsxs)("div", {
            className: sf.kL,
            children: [
                h && (0, i.jsx)(rY.kM, { location: "UserProfileModalV2Tabs" }),
                !0 === E && (0, i.jsx)(rz, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: sf.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(rG.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: N.section,
                        onItemSelect: function (e) {
                            ra.A.hasUnsavedChanges() && N.section === rp.RP.WIDGETS
                                ? (0, nC.VQ)()
                                : (p({ action: "PRESS_SECTION", section: e }), j(e), S((e) => e ?? !1));
                        },
                        children: u.map((e) =>
                            (0, i.jsxs)(
                                rG.V.Item,
                                {
                                    className: sf.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eW.intl.formatToPlainString(eW.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot &&
                                            (0, i.jsx)(rU.N, { variant: A, className: sf.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(rG.V.Panel, {
                    id: N.section,
                    "aria-label": N.text,
                    className: sf.NM,
                    children: (0, i.jsx)(m.F, {
                        component: (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: N.text }) }),
                        children: (0, i.jsx)(up, {
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
var ux = n(933832),
    uA = n(972213);
let uI = {
        [rp.jM.WIDGET_ADDED]: {
            message: eW.intl.string(eW.t.fFP1Uy),
            icon: (0, i.jsx)(ux.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rp.jM.WIDGET_REMOVED]: {
            message: eW.intl.string(eW.t.zzsK7h),
            icon: (0, i.jsx)(ux.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rp.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eW.intl.string(eW.t["84MExs"]),
            icon: (0, i.jsx)(uA.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [rp.jM.SOMETHING_WENT_WRONG]: {
            message: eW.intl.string(eW.t.F8FvUy),
            icon: (0, i.jsx)(uA.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    uv = (e) => {
        let { className: t } = e,
            n = (0, rm.fu)(),
            r = (0, a.bG)([tv.Ay], () => tv.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(uI[n]), nI.O.announce(uI[n].message)) : o(!1);
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
            l.useEffect(() => () => (0, rm.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, rm.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(lw.animated.div, { className: t, style: e, children: (0, i.jsx)(rR, { ...u }) }),
                ),
            })
        );
    };
var ub = n(297413),
    uj = n(465829),
    uy = n(826673),
    uC = n(609425),
    uE = n(73392),
    uS = n(576705),
    uN = n(997394);
function uk(e) {
    return null == e || "" === e ? void 0 : e;
}
function uT(e) {
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
        { canChangeDisplayName: y, permissionsLoaded: E } = (0, a.cf)([uS.A, Y.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = Y.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: uS.A.can(T.xBc.CHANGE_NICKNAME, e) || uS.A.can(T.xBc.MANAGE_NICKNAMES, e),
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
        (m = n ? (uk(r) ?? p.username) : p.username),
        {
            value: f,
            previewValue: uk(g) ?? m,
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
        M = (0, uC.A)({ userId: p.id, guildId: v, pendingDisplayNameStyles: D }),
        G = (0, uE.a)({ displayNameStyles: M, compensateForSafari: !1 }),
        U = eW.intl.string(I ? eW.t.mq6Cg9 : eW.t.XuZU7A),
        F = I ? eW.intl.string(eW.t.YcDKr8) : p.username,
        W = l.useRef(null),
        B = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, uy.Dr)(ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eF.i.INDIRECT_ACTION,
                    }),
                    (0, nH.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: W }));
            },
            [A, v],
        ),
        V = {
            icon: t4.PaintbrushThinIcon,
            tooltip: eW.intl.string(eW.t.lqKKI2),
            "aria-label": eW.intl.string(eW.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: W,
        },
        H = S
            ? (0, i.jsx)("span", {
                  className: uN.Cs,
                  children: (0, i.jsx)(no.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: tb.kL,
        children: (0, i.jsx)(eq.E, {
            variant: uj.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(rj.w, {
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
                    return (0, i.jsx)(uj.c$, {
                        user: p,
                        guildId: v,
                        displayName: n ? (uk(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: D,
                        className: s()(uN.dt, { [uN.jW]: n && "" === e }),
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
var uP = n(628072);
function uR(e) {
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
        className: s()(tb.kL, tb.oE, uP.k),
        children: (0, i.jsx)(rj.w, {
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
            preview: p ? (0, i.jsx)(uj.n2, { pronouns: g }) : null,
            label: eW.intl.string(eW.t["rniRE+"]),
            placeholder: h,
            maxLength: 40,
            spellCheck: !1,
        }),
    });
}
var uO = n(873200),
    u_ = n(305866),
    uL = n(145497),
    uw = n(685073),
    uD = n(2967),
    uM = n(318785),
    uG = n(534400),
    uU = n(152313),
    uF = n(830543),
    uW = n(415916),
    uB = n(743981),
    uV = n(295930),
    uH = n(594615);
let uz = "no-server-tag";
function uY(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e4.D, {
        innerRef: t,
        className: s()(uV.qJ, { [uV.wK]: o }),
        "aria-label": o ? eW.intl.string(eW.t.Pdd1nd) : eW.intl.formatToPlainString(eW.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eq.E, {
            variant: "body-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: uV.W3,
            tag: "span",
            children: [
                o
                    ? eW.intl.string(eW.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  uG.Z9,
                                  {
                                      src: (0, uw.gC)(n, r, uB.Sl.SIZE_14),
                                      size: uB.Sl.SIZE_14,
                                      className: uV.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, uw.gC)(n, r, uB.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(i7.ChevronSmallDownIcon, { size: "xs", color: "currentColor", className: uV.u4 }),
            ],
        }),
    });
}
function uK() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, uM.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, uD.Z)("UserProfileModalV2GuildTagSelect"),
        u = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        d = (0, a.cf)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (0, uw.Zo)(e?.primaryGuild);
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
                e.id === uz
                    ? (0, i.jsx)("div", {
                          className: uH.uN,
                          children: (0, i.jsx)(eq.E, {
                              variant: "body-md/normal",
                              color: "input-placeholder-text-default",
                              className: uV.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(la.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: uz, label: eW.intl.string(eW.t.VxdWWH), value: uz },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(uL.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(uG.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
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
            (0, uW.A)(!0, () => {
                ((0, iG.M)(), (0, uF.default)(), (0, uU.A)(r, b.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let y = (0, i.jsx)(uO.a3, {
        label: eW.intl.string(eW.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eW.intl.string(eW.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(nP.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(u_.l, {
                className: s()(uV.yt, { [uV.R4]: o && !v, [uV.Lo]: v }),
                "aria-label": eW.intl.string(eW.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: uV.p$,
                          children: [
                              (0, i.jsx)(eq.E, {
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
                    : (0, i.jsxs)(uO.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, tx.p)({ primaryGuildId: e === uz ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: uV.wx,
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
                              (0, i.jsx)(uO.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(uY, { buttonRef: e, guildId: f, guildTag: h, guildBadge: x, ...t }),
    });
}
var uX = n(956495);
function uq(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(uj.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function uZ(e) {
    let t = (0, a.bG)([eb.A], () => eb.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(uq, { ...e, displayNameStylesOverride: t });
}
function u$(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(ub.A, {
                  user: t,
                  forceUsername: !0,
                  className: uX.a1,
                  usernameClass: uX.eb,
                  discriminatorClass: uX.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(uT, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(uX.AK, uX.j6),
                children: [r, (0, i.jsx)(uj.Ce, {}), (0, i.jsx)(uR, { displayProfile: n }), (0, i.jsx)(uK, {}), l],
            }),
        ],
    });
}
function uJ(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(uq, { ...n });
        case "try-it-out":
            return (0, i.jsx)(uZ, { ...n });
        case "edit":
            return (0, i.jsx)(u$, { ...n });
        default:
            return (0, eg.xb)(t);
    }
}
var uQ = n(97808),
    u0 = n(22231),
    u1 = n(601255),
    u2 = n(562819),
    u5 = n(253400),
    u6 = n(339984),
    u8 = n(329801),
    u3 = n(884362);
let u9 = u5.Ay.getEnableHardwareAcceleration() ? uQ.Js : uQ.eu;
function u7(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function u4(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(un.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eW.intl.string(eW.t.YAgq3W),
        children: (0, i.jsx)(ut.rX, { children: n }),
    });
}
function de(e) {
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
                h = $.Ay.canUsePremiumProfileCustomization(t),
                x = h || null == n,
                A = h || null == n,
                I = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
                v = (0, eA.a4)({ user: t }),
                b = (0, eA.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, eA.CP)(n ?? void 0),
                C = void 0 !== y,
                E = null != (0, u1.A)(C ? y : b) && (C ? null != y : null != b),
                S = d && null != v,
                N = l.useCallback(() => {
                    (r(),
                        u7(() =>
                            (0, nx.XD)({
                                uploadType: u6.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        u7(() =>
                            (0, u2.L)({
                                analyticsLocations: u,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, I, s]),
                T = l.useCallback(() => {
                    (r(),
                        (0, nx.rM)(null, f, (e) => (0, tx.p)({ guildId: n ?? void 0, avatar: e })),
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
                                ut.Dr,
                                { id: "change-avatar", label: eW.intl.string(eW.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                ut.Dr,
                                { id: "change-decoration", label: eW.intl.string(eW.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, i.jsx)(
                                      ut.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      ut.Dr,
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
                                      ut.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eW.intl.string(eW.t["2u5yu0"]),
                                          action: P,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      ut.Dr,
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
              className: s()(u8.my, u8.vk, u3.kL, { [u3.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(u9, { ...r, imageClassName: s()(u8.Lw, u3.HU) }),
                  (0, i.jsx)(nP.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: nP.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, i.jsx)(u4, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: u3.r9,
                              children: (0, i.jsx)(ne.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: u0.PencilIcon,
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
var dt = n(514905);
function dn(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(un.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eW.intl.string(eW.t.FzU73A),
        children: (0, i.jsx)(ut.rX, { children: n }),
    });
}
function di(e) {
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
                        (0, nx.XD)({
                            uploadType: u6.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                M = l.useCallback(() => {
                    (r(),
                        (0, n8.W)({
                            analyticsLocations: u,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, nx.rM)(null, b, (e) => (0, tx.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, b]),
                U = l.useCallback(() => {
                    (r(), (0, tx.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, im.w)({
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
                                ut.Dr,
                                { id: "change-banner", label: eW.intl.string(eW.t.N0bC3P), action: D },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                ut.Dr,
                                { id: "change-effect", label: eW.intl.string(eW.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                ut.Dr,
                                { id: "change-frame", label: eW.intl.string(eW.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    f &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      ut.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      ut.Dr,
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
                                      ut.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      ut.Dr,
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
                                      ut.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      ut.Dr,
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
              className: s()(dt.kL, { [dt.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eK.A, { ...e, className: dt.Pr }),
                  (0, i.jsx)(nP.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: nP.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(dn, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: dt.r9,
                              children: (0, i.jsx)(ne.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: u0.PencilIcon,
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
var dl = n(419341),
    dr = n(776879),
    ds = n(837531),
    da = n(186272),
    du = n(447538);
let dd = (e) => e * (2 - e),
    dc = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function dg(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function df(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, ea.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: du.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function dm(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (n7.add(e), () => n7.delete(e)),
            () => n4,
        );
    return null == s ? null : (0, i.jsx)(O.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function dp(e) {
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
        q = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? Y("compact-xs") : t <= 380 ? Y("compact-sm") : Y(void 0);
        }, []);
    (0, I.g)(w, q, [], { fireOnMount: !0 });
    let $ = null != z ? dc[z] : void 0,
        J = l.useMemo(() => A ?? (0, F.A)(), [A]),
        { relationshipType: Q, originApplicationId: ee } = (0, a.cf)([K.A], () => ({
            relationshipType: K.A.getRelationshipType(o.id),
            originApplicationId: K.A.getOriginApplicationId(o.id),
        })),
        et =
            ((t = o.id),
            (n = (0, ei.bG)([er.default], () => er.default.locale)),
            (r = (0, ei.bG)([K.A], () => (K.A.getRelationshipType(t) === T.eA$.FRIEND ? K.A.getSince(t) : null), [t])),
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
        eI = L ? di : eK.A,
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
            (0, e9.A)({ user: o, guildId: ev, alt: h });
        }, [h, ev, o]);
    return (0, i.jsxs)("main", {
        className: s()(du.profile, null != z && du[z]),
        ref: w,
        "aria-busy": O,
        children: [
            (0, i.jsxs)("div", {
                className: du.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: du.profileHeaderBannerContainer,
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
                    L
                        ? (0, i.jsx)(de, { ...eb })
                        : (0, i.jsx)(ez.A, {
                              ...eb,
                              onOpenAvatar: "read-only" === R ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === R && null == C ? iQ.$T : void 0,
                          }),
                    (0, i.jsx)(e8.A, {
                        user: o,
                        guildId: d,
                        channelId: m,
                        themeType: ej.d.MODAL_V2,
                        hasEntered: x,
                        prompt: _ ? J : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: du.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(uJ, {
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
                        (0, i.jsx)(e6.A.Overlay, {
                            className: du.profileOverlay,
                            children: (0, i.jsx)(eJ.A, {
                                user: o,
                                applicationId: ee,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: du.profileBanner,
                            }),
                        }),
                    ea.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e6.A.Overlay,
                            {
                                className: du.profileOverlay,
                                children: (0, i.jsx)(eJ.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: du.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e6.A.Overlay, {
                            className: du.profileOverlay,
                            children: (0, i.jsx)(tp, {
                                heading: eW.intl.string(eW.t.Iyka0U),
                                headingVariant: "body-md/semibold",
                                headingIcon: { icon: g.CircleErrorIcon, size: "xs" },
                                className: du.profileBanner,
                                children: (0, i.jsx)(H.T, { userId: o.id, variant: "body-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(e5.A, { user: o, className: du.profileBanner }),
                    p?.private &&
                        (0, i.jsx)(e6.A.Overlay, {
                            className: du.profileOverlay,
                            children: (0, i.jsx)(e2.A, { username: h }),
                        }),
                    (0, i.jsx)("div", {
                        className: du.profileButtons,
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
                    _ && "try-it-out" !== R && (0, i.jsx)(eX.A, { isPremiumUser: (0, Z.ki)(u) }),
                    !en && (0, i.jsx)(tR, { currentUser: u, displayProfile: p, canEditInPlace: L }),
                    es.length > 0 &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t["Uv/eTx"]),
                            children: (0, i.jsx)(e$.A, { applicationIds: es }),
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
                            className: du.profileRolesSection,
                            headingVariant: "body-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !en &&
                        (L || ex) &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t["3fe7U5"]),
                            scrollTargetId: rp.bk.CONNECTIONS,
                            children: (0, i.jsx)(t7, {
                                applicationIdentities: em,
                                connections: ep,
                                userId: o.id,
                                allowEditing: L,
                                className: du.profileAppConnections,
                            }),
                        }),
                    !en &&
                        eA &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t.PHjkRE),
                            scrollTargetId: rp.bk.APPS,
                            children: (0, i.jsx)(tu, {
                                applicationRoleConnections: eh,
                                onClose: v,
                                className: du.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rk, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(dm, { displayProfile: p, profileEffectOverride: N, isHovering: V }),
            null != k && (0, i.jsx)(D.A, { frame: k, filterLayer: dg, fadeIn: P }),
        ],
    });
}
function dh(e) {
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
function dx(e) {
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
        es = l.useCallback(() => (0, uW.A)(er, Z), [er, Z]),
        ea = l.useCallback(
            (e) =>
                (0, uW.A)(er, () => {
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
        eT = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
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
            refs: { expandIconButtonRef: eX, expandTabButtonRef: eq, collapseButtonRef: eZ },
        } = (function () {
            let [e, t] = l.useState(() => window.innerWidth > 928),
                [n, i] = l.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: dd },
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
        e$ = eP && !eV,
        eJ = eP && (!eV || eH),
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
        e8 = eP && ef,
        e3 = eu !== eo || e8 || null != e2.interactionType,
        e9 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sA.A)(t),
                r = l?.length,
                s = (0, dr.A)(t),
                a = (0, sZ.A)(t.id),
                o = (0, dl.A)(t),
                { hasNewWishlistItems: u } = (0, rK.A)(t),
                d = [],
                c = t.id === n?.id,
                g = s$(t.id),
                f = a.length > 0;
            return (
                (g || f) && d.push({ text: eW.intl.string(eW.t.laViwx), section: rp.RP.WIDGETS }),
                d.push({ text: eW.intl.string(eW.t.chq59f), section: rp.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eW.intl.string(eW.t["7lZ31J"]), section: rp.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, ds.A)(i), section: rp.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, da.A)(r), section: rp.RP.MUTUAL_GUILDS })),
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
            ((0, Q.Wn)({ analyticsLocations: e7, ...e4, action: rp.pt.SHOW_STYLES_PANEL }), eY());
        }, [e7, e4, eY]),
        tt = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e7, ...e4, action: rp.pt.HIDE_STYLES_PANEL }), eK());
        }, [e7, e4, eK]),
        tn = (0, en.Ay)(u.id, eo);
    (0, V.A)(e7, tn, rp.R7.MODAL_V2);
    let ti = void 0 !== eB ? eB?.skuId : tn?.profileFrame?.skuId,
        tl = (0, L.A)(ti),
        tr = (0, _.A)(ti),
        { profileFrameStyle: ts, profileFrameClassName: ta } = (0, M.A)(tl);
    (0, w.A)({ skuId: tn?.profileFrame?.skuId, openedAt: K, context: e4, analyticsLocations: e7 });
    let to = (0, a.bG)([C.default], () => $.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        tu = ek || (er && null != tn && to),
        td = q.Ay.useName(tn?.guildId, y, u),
        tc = (0, G.GV)(),
        tg = (0, a.bG)([Y.A], () => (null != eo ? Y.A.getGuild(eo) : null)),
        tf = er
            ? null != tg
                ? eW.intl.formatToPlainString(eW.t.M7OhOF, { guildName: tg.name })
                : eW.intl.string(eW.t.egQPgM)
            : eW.intl.format(eW.t.KRe1Fk, { name: td });
    return (0, i.jsx)(j.f5, {
        value: e7,
        children: (0, i.jsx)(J.of, {
            value: e4,
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
                        className: s()(iQ.zr, { [iQ.QF]: tn?.private === !0 }),
                        transitionState: B,
                        "aria-labelledby": tc,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rM, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(du.layoutContainer, ta, {
                                        [du.editingPanelEnabled]: eP,
                                        [du.editingPanelExpanded]: eP && eV,
                                        [du.isAnimating]: eH,
                                    }),
                                    style: ts,
                                    children: [
                                        (0, i.jsxs)(dh, {
                                            user: u,
                                            displayProfile: tn,
                                            pendingThemeColors: ew,
                                            forceShowPremium: tu,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: iQ.Oo,
                                                    children: [
                                                        (0, i.jsx)(tH.A, { onClose: es }),
                                                        (0, i.jsx)(f.A, {
                                                            children: (0, i.jsx)(m.H, { id: tc, children: tf }),
                                                        }),
                                                        eJ &&
                                                            (0, i.jsx)(l$, {
                                                                buttonRef: eX,
                                                                onClick: te,
                                                                className: du.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                e$ &&
                                                    (0, i.jsx)("div", {
                                                        className: du.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(lZ, {
                                                            innerRef: eq,
                                                            onClick: te,
                                                            className: du.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(m.F, {
                                            children: [
                                                eP &&
                                                    ez((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(lJ, {
                                                                  className: s()(du.editingPanel, {
                                                                      [du.isExpanded]: eV,
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
                                                (0, i.jsxs)(e6.A, {
                                                    className: s()(el, iQ.A7, du.profileContentOuter),
                                                    innerClassName: du.profileContentInner,
                                                    user: u,
                                                    displayProfile: tn,
                                                    themeType: ej.d.MODAL_V2,
                                                    pendingThemeColors: ew,
                                                    isPrivate: tn?.private === !0,
                                                    forceShowPremium: tu,
                                                    children: [
                                                        (0, i.jsx)(df, { displayProfile: tn, pendingBanner: eG }),
                                                        tn?.private === !0 && (0, i.jsx)(e1.A, {}),
                                                        !eO && (0, i.jsx)(uv, { className: du.noticeContainer }),
                                                        e5 &&
                                                            (0, i.jsx)("div", {
                                                                className: du.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rR, {
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
                                                            className: du.profileCardToastContainer,
                                                            children: (0, i.jsx)(eQ.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rw, {
                                                            showScrim: e3,
                                                            showLoadingSpinner: ed,
                                                            className: du.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(dp, {
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
                                                                (0, i.jsx)(uh, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    displayProfile: tn,
                                                                    guildId: eo,
                                                                    channelId: y,
                                                                    items: e9,
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
                            (0, i.jsx)(rv, { userId: u.id, guildId: eo, className: du.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function dA(e) {
    return (0, i.jsx)(nr, { children: (0, i.jsx)(dx, { ...e }) });
}
