n.d(t, { A: () => dw });
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
    e9 = n(305385),
    e4 = n(109112),
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
                        : (0, i.jsx)(e4.UnknownGameIcon, { color: "currentColor", size: "sm" }),
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
    t_ = n(738676),
    tL = n(708645),
    tw = n(722868),
    tD = n(822775),
    tM = n(982985),
    tG = n(209965),
    tU = n(34188),
    tF = n(969935),
    tW = n(993401);
function tB(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, j.Ay)(),
        r = l.useCallback(() => {
            (0, tF.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(tW.q3, {
        action: "VISIT_SHOP",
        icon: tU.ShopIcon,
        tooltipText: eW.intl.string(eW.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tV = n(508882),
    tH = n(102951);
function tz(e) {
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
        g = (0, tw.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: u }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, tH.J)({ userId: t.id }),
        h = f.length > 0 || m || p;
    return o === T.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? d
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tM.e, { userId: t.id, variant: "primary", disabled: !0 }),
                        (0, i.jsx)(tB, {}),
                        (0, i.jsx)(tG.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tD.A, { user: t, guildId: l, onClose: u }),
                        (0, i.jsx)(tB, {}),
                        (0, i.jsx)(tG.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(tM.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(t_.kc, { user: t, guildId: l }),
                      (0, i.jsx)(tG.Zt, { user: t, guildId: l, viewProfileItem: g }),
                  ],
              })
            : o === T.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tM.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(t_.kc, { user: t, guildId: l }),
                        (0, i.jsx)(tG.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === T.eA$.FRIEND || o === T.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tM.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tV.Ef, { user: t, relationshipType: o, analyticsLocation: c }),
                          (0, i.jsx)(t_.kc, { user: t, guildId: l }),
                          (0, i.jsx)(tG.Zt, { user: t, guildId: l, viewProfileItem: g }),
                      ],
                  })
                : o === T.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tM.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tV.ES, {
                                user: t,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(t_.kc, { user: t, guildId: l }),
                            (0, i.jsx)(tG.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tV.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(tM.l, { userId: t.id, onClose: tO.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(t_.kc, { user: t, guildId: l }),
                            (0, i.jsx)(tG.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    });
}
function tY(e) {
    return e.user.id === e.currentUser.id || e.relationshipType === T.eA$.BLOCKED
        ? (0, i.jsx)(tz, { ...e })
        : (0, i.jsx)(tL.ZQ, {
              user: e.user,
              guildId: e.guildId,
              location: "FullProfileShopThisLook",
              children: (0, i.jsx)(t_.vy, { user: e.user, guildId: e.guildId, children: (0, i.jsx)(tz, { ...e }) }),
          });
}
var tK = n(463156),
    tq = n(866665),
    tX = n(28863),
    tZ = n(509434),
    tJ = n(307301),
    t$ = n(149468),
    tQ = n(643068),
    t0 = n(522978),
    t1 = n(129230),
    t2 = n(486020),
    t5 = n(889558),
    t8 = n(783419);
let t6 = "User Profile Modal V2";
function t3(e) {
    let t = eu.A.get(e);
    ((0, t0.A)({ platformType: t.type, location: t6 }),
        t1.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: t6,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function t9() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: t3, stackingBehavior: "stack" });
}
function t4(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, el.An)(r[t8.pK.CREATED_AT], n),
        a = eu.A.get((0, tQ.ML)(t.type));
    return (0, i.jsx)(ne, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tq.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eX.E, { variant: "body-sm/normal", className: ta.GW, children: t.name }),
                  })
                : (0, i.jsx)(tX.Anchor, {
                      href: e,
                      className: ta.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eW.intl.string(eW.t.q5jLJB)}`
                              : `${t.name}, ${eW.intl.string(eW.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, t$.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, t5.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: ta.vi,
                          children: [
                              (0, i.jsx)(tq.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eX.E, {
                                      variant: "body-sm/normal",
                                      className: ta.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tZ.LinkExternalSmallIcon, {
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
function t7(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = t2.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(ne, {
        renderAccountName: function () {
            return (0, i.jsx)(tq.m, {
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
function ne(e) {
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
            (0, i.jsx)(tq.m, {
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
function nt(e) {
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
                        t.map((e) => (0, i.jsx)(t4, { account: e, userId: l, locale: u }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(t7, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e7.D, {
                    className: ta.qG,
                    onClick: t9,
                    children: [
                        (0, i.jsx)(tJ.PlusSmallIcon, { size: "sm", color: "currentColor" }),
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
var nn = n(193885),
    ni = n(408278),
    nl = n(23722);
let nr = { id: "default" },
    ns = l.createContext(null),
    na = l.createContext(null);
function no(e) {
    let { children: t } = e,
        [n, r] = l.useState(nr),
        [s, o] = l.useState(null),
        u = (0, nl.A)((e) => {
            r(e);
        }),
        d = l.useCallback(() => {
            r(nr);
        }, []),
        c = (0, a.bG)([C.default], () => J.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        g = c ? nr : n,
        f = !c && s?.id === "premiumTryItOut",
        m = l.useCallback(() => {
            o(g);
        }, [g]),
        p = l.useMemo(
            () => ({ selectedPanel: g, readyPanel: s, handlePanelTransitionComplete: m, navigate: u, goBack: d }),
            [g, s, m, u, d],
        );
    return (0, i.jsx)(na.Provider, { value: f, children: (0, i.jsx)(ns.Provider, { value: p, children: t }) });
}
function nu() {
    let e = l.useContext(na);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function nd() {
    let {
        selectedPanel: e,
        readyPanel: t,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    } = (function () {
        let e = l.useContext(ns);
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
var nc = n(194261),
    ng = n(789645),
    nf = n(534514),
    nm = n(805251),
    np = n(821609),
    nh = n(39623),
    nx = n(890377),
    nA = n(517461),
    nI = n(609425),
    nv = n(145359),
    nb = n(804661),
    nj = n(465794),
    ny = n(468450),
    nC = n(462887),
    nE = n(765178),
    nS = n(736653),
    nN = n(461797),
    nk = n(469054),
    nT = n(601298),
    nP = n(207803);
function nR() {
    let e = (0, nS.Ay)(),
        t = (0, nC.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nN.Wt)(e);
                (0, nP.w5)({
                    banner: (0, nT.X)({
                        assetOrigin: nk.E.NEW_ASSET,
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
            eb.A.hasTryItOutChanges() || n((0, nN.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = eb.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nN.B$)(e),
                i = (0, nN.Wt)(t);
            (t1.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                nE.O.announce(eW.intl.formatToPlainString(eW.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nO = n(487233),
    n_ = n(999618),
    nL = n(317097),
    nw = n(602853),
    nD = n(265872),
    nM = n(508274),
    nG = n(654107),
    nU = n(930349);
function nF(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nw.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nG.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([eb.A, ee.A], () => ({
            pendingAccentColor: eb.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: ee.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, nL.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, tx.p)({ accentColor: e }), []);
    return (0, i.jsx)(nD.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nM.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nU.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eW.intl.string(eW.t["/X3fkf"]),
                editButtonA11yLabel: eW.intl.string(eW.t.kRMJ1v),
                currentValueA11yLabel: (0, nL.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nL.Hl)(c) } }),
            }),
    });
}
var nW = n(841183),
    nB = n(450373),
    nV = n(317139);
function nH(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nV.o, style: { backgroundColor: t } });
}
function nz(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: nV._ });
}
function nY(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, nw.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, nL.LX)(s),
        { hex: o } = (0, nB.A)(a),
        u = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != u ? (0, i.jsx)(nz, { src: u, imageDescription: r }) : (0, i.jsx)(nH, { backgroundColor: o });
}
function nK(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eW.intl.string(eW.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(nU.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eW.intl.string(eW.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nY, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
    });
}
var nq = n(569059);
function nX(e) {
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
                currentValueA11yLabel: (0, nW.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        m = (0, eA.Ac)(u, g)
            ? {
                  onClick: () => (0, ny.rM)(null, g, (e) => (0, tx.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eW.intl.string(f ? eW.t.jHlJNS : eW.t.tT9n7D),
              }
            : void 0,
        p = (0, nq.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nK, {
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
var nZ = n(259065),
    nJ = n(922301),
    n$ = n(16371),
    nQ = n(523312);
let n0 = "heading-xl/semibold";
function n1(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nQ.MC, { [nQ.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eX.E, {
                      variant: n0,
                      children: (0, i.jsx)(n$.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nJ.G.ANIMATED : nJ.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eX.E, { variant: n0, className: nQ.kr, children: t }),
    });
}
function n2(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eW.intl.string(eW.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(nU.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eW.intl.string(eW.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(n1, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
    });
}
function n5(e) {
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
            (o?.(), (0, nZ.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(n2, {
        affordance: (!v && (I || null != A)) || b ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nW.I9)(y),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: y,
        disabled: r,
    });
}
var n8 = n(450232),
    n6 = n(89851);
function n3(e) {
    let { heading: t, description: n, children: l, disabled: r = !1, showNitroIcon: a = !1, badge: o } = e;
    return (0, i.jsxs)("div", {
        className: n6.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(n6.Pf, { [n6.r9]: r }),
                children: [
                    (0, i.jsx)(nf.D, {
                        className: n6.DV,
                        variant: "body-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    a && (0, i.jsx)(n8.A, { className: n6.IX, size: "xs", color: "inherit", disabled: r }),
                    null != o && (0, i.jsx)("span", { className: n6.ot, children: o }),
                    null != n && (0, i.jsx)(eX.E, { variant: "body-xs/normal", color: "text-subtle", children: n }),
                ],
            }),
            l,
        ],
    });
}
function n9(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: n6.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.CircleErrorIcon, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eX.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var n4 = n(897661),
    n7 = n(332560),
    ie = n(659373),
    it = n(192308),
    ii = n(506988),
    il = n(211824);
function ir(e) {
    let { user: t, disabled: r, onOpen: s } = e;
    (0, n7.UF)(ii.uF.DISPLAY_NAME_STYLES_SETTINGS, n7.rl.NON_NITRO_CARD, !0);
    let a = (0, n4.b)(t),
        { isApplied: o, removeCampaignDisplayNameStyle: u } = (0, ie.K)(t),
        d = o ? il.AA : null,
        c = l.useCallback(() => {
            (s?.(),
                (0, it.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(249169),
                            n.e(578667),
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
                            n.e(284269),
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
                            n.e(920955),
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
                            n.e(433359),
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
                            n.e(196423),
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
    return (0, i.jsx)(n2, {
        affordance: o ? { onClick: u, type: "remove", accessibleLabel: eW.intl.string(eW.t["Wqmi/h"]) } : void 0,
        variant: "bar",
        onClick: c,
        currentValueA11yLabel: (0, nW.I9)(d),
        "aria-haspopup": "dialog",
        displayName: a,
        displayNameStyles: d,
        disabled: r,
    });
}
var is = n(887988),
    ia = n(366010),
    io = n(674658),
    iu = n(617061),
    id = n(203632),
    ic = n(536572);
let ig = new Set(),
    im = 0;
var ip = n(993408),
    ih = n(841702),
    ix = n(515718),
    iA = n(94039);
function iI(e) {
    "" !== e.thumbnailPreviewSrc && (0, ix.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var iv = n(599752),
    ib = n(249360);
let ij =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    iy =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function iC(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, nS.Ay)(),
        d = (0, ia.M)(u) ? ij : iy,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, ih.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ip.wo)(r, i), [r, i]),
                a = (0, iA.A)({ enabled: t, isInteracting: n, items: s, preload: iI });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((im += 1), ig.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: iv.ti,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: iv.QQ }),
                f?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(iv.yY, { [ib.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(O.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: id.HL.FromStart,
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
function iE(e) {
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
        { product: I } = (0, io.q)(A?.skuId),
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
            (0, iu.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(nU.A, {
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
        })({ profileEffectPreview: A, productName: (0, ic.VG)(I), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(iC, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var iS = n(163697),
    iN = n(515727),
    ik = n(746002);
function iT(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, ik.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: ik.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, ix.NN)(n).catch(() => {});
        });
}
var iP = n(715196);
function iR(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function iO(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, nS.Ay)(),
        d = (0, ia.M)(u) ? ij : iy,
        c = (0, L.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, ih.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ip.MG)(r, i), [r, i]);
            return (0, iA.A)({ enabled: t, isInteracting: n, items: s, preload: iT });
        })({ enabled: n && !r && !o, isInteracting: a }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != m ? (0, iS.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != m &&
                (0, i.jsx)("div", {
                    className: s()(iP.hm, h, { [ib.O]: f }),
                    style: p,
                    "aria-hidden": f,
                    children: (0, i.jsx)(D.A, { frame: m, filterLayer: iR, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(iP.ti, { [iP.yT]: null == m }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: iP.QQ, draggable: !1 }),
            }),
        ],
    });
}
function i_(e) {
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
        { product: A } = (0, io.q)(x?.skuId),
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
            (0, iN.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(nU.A, {
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
        })({ profileFramePreview: x, productName: (0, ic.VG)(A), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(iO, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var iL = n(684732),
    iw = n(498596),
    iD = n(871524);
function iM(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, nL.Hl)(t)}, ${(0, nL.Hl)(n)})`;
    return (0, i.jsx)("div", { className: iD.D7, style: { background: r }, children: l });
}
function iG(e) {
    let { color: t } = e,
        n = (0, nL.Hl)(t),
        l = (0, nL.bJ)(t, 0xffffff) < iw.Tr.NonText;
    return (0, i.jsx)("div", {
        className: iD.OS,
        children: (0, i.jsx)("div", { className: s()(iD.Hy, { [iD.rY]: l }), style: { backgroundColor: n } }),
    });
}
function iU(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e7.D, {
        ...a,
        innerRef: s ?? o,
        className: iD.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(iG, { color: t }),
    });
}
function iF(e) {
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
    return (0, i.jsx)(nD.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: u,
        renderPopout: (e) => (0, i.jsx)(nM.VN, { ...e, value: t, onChange: d, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(iU, {
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
function iW(e) {
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
        A = (0, nL.Hl)(n),
        I = (0, nL.Hl)(r),
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
    return (0, i.jsxs)(nU.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: u,
        deleteButton: j,
        children: [
            (0, i.jsx)(f.A, { id: v, children: eW.intl.formatToPlainString(eW.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(f.A, { id: b, children: eW.intl.formatToPlainString(eW.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(iM, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(iF, {
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
                    (0, i.jsx)(iF, {
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
function iB(e) {
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
        p = (0, nw.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nG.rh)(x, p, !1),
        I = l.useCallback(
            (e) => {
                (0, tx.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, iL.l)(u, o)
                ? {
                      onClick: () => (0, tx.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eW.intl.string(eW.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, i.jsx)(iW, {
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
var iV = n(629985);
function iH(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(m.F, { children: (0, i.jsx)("div", { className: s()(iV.k, { [iV.V]: n }), children: t }) });
}
var iz = n(516521),
    iY = n(424290);
function iK(e) {
    let { children: t } = e;
    return (0, i.jsx)(iz.zC, { className: iY.X, children: (0, i.jsx)("div", { className: iY.Q, children: t }) });
}
var iq = n(77528),
    iX = n(811611),
    iZ = n(976860),
    iJ = n(38145);
function i$() {
    return l.useCallback(() => {
        ((0, iZ.pX)(T.BVt.NITRO_HOME), (0, iJ.M)());
    }, []);
}
var iQ = n(423814),
    i0 = n(511484),
    i1 = n(682901);
function i2(e) {
    let t = (0, a.bG)([C.default], () => J.Ay.isPremium(C.default.getCurrentUser())),
        n = (0, iQ.O)();
    return t
        ? eW.intl.string(eW.t.AfRWI8)
        : (0, i0.U9)(n, i1.pe.TIER_2) && n?.discount.amount != null
          ? eW.intl.formatToPlainString(eW.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var i5 = n(155053);
function i8() {
    let e = (0, iq.V)();
    return e?.subscriptionTrial?.skuId === i1.pe.TIER_2 ? e : null;
}
function i6() {
    let e = i2(eW.intl.string(eW.t.pj0XBN));
    return (0, i.jsx)(nj.A, { subscriptionTier: i1.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function i3(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = i$(),
        a = (0, J.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, iX.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: i5.nH,
        children: [
            (0, i.jsxs)("div", {
                className: i5.qf,
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: eW.intl.string(eW.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(nm.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eX.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eW.intl.format(eW.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(nj.A, {
                subscriptionTier: i1.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eX.E, { variant: "body-xs/normal", color: "text-muted", className: i5.u8, children: o }),
        ],
    });
}
function i9() {
    let e = i8();
    return null == e ? (0, i.jsx)(i6, {}) : (0, i.jsx)(i3, { trialOffer: e });
}
var i4 = n(55619),
    i7 = n(848717);
function le() {
    return (0, i.jsxs)("div", {
        className: i7.k,
        children: [
            (0, i.jsx)(eX.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eW.intl.string(eW.t.JFY17v),
            }),
            (0, i.jsx)(np.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eW.intl.string(eW.t.R9GHya),
                onClick: function () {
                    return i4.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var lt = n(342866),
    ln = n(968475);
function li(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eb.A], () => ({
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(lt.A, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nW.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? ln.$T : void 0,
    });
}
function ll(e) {
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
                : (0, nW.ID)(u, o);
    return (0, i.jsx)(nK, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: d,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
    });
}
function lr(e) {
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
    return (0, i.jsx)(n2, {
        ...n,
        fieldA11yLabel: eW.intl.string(eW.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        currentValueA11yLabel: (0, nW.I9)(u),
        shouldAlwaysAnimate: null == r,
    });
}
function ls(e) {
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
function la(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = ls(t),
        u = (0, nw.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nG.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, nP.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iW, {
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
function lo(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = ls(t),
        o = l.useId(),
        u = l.useId();
    if (null == s || null == a) return null;
    let d = (0, nL.Hl)(s),
        c = (0, nL.Hl)(a);
    return (0, i.jsxs)(nU.Y, {
        fieldA11yLabel: eW.intl.string(eW.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(f.A, { id: o, children: eW.intl.formatToPlainString(eW.t.v4X2kc, { colorHex: d }) }),
            (0, i.jsx)(f.A, { id: u, children: eW.intl.formatToPlainString(eW.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(iM, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(iU, {
                        color: s,
                        onClick: n,
                        "aria-label": eW.intl.string(eW.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(iU, {
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
var lu = n(847081);
function ld(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = nd(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, j.Ay)();
            return l.useCallback(() => {
                (0, nZ.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nq._)({ isPremiumTryItOut: !0, returnRef: s }),
        f = (0, nq.P)({ isPremiumTryItOut: !0, returnRef: a }),
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
            className: lu.T,
            children: [
                (0, i.jsx)(n3, {
                    heading: eW.intl.string(eW.t.NEzEws),
                    children: (0, i.jsx)(lr, {
                        user: t,
                        buttonRef: r,
                        onClick: m ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n3, {
                    heading: eW.intl.string(eW.t.DMeO2X),
                    children: m
                        ? (0, i.jsx)(la, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(lo, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(n3, {
                    heading: eW.intl.string(eW.t.Vgdusv),
                    children: (0, i.jsx)(ll, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: m ? f : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n3, {
                    heading: eW.intl.string(eW.t.Dt3ZUr),
                    children: (0, i.jsx)(li, {
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
var lc = n(847374),
    lg = n(111159),
    lf = n(682163),
    lm = n(711014),
    lp = n(941030),
    lh = n(561392),
    lx = n(286615),
    lA = n(15626),
    lI = n(715022),
    lv = n(44482),
    lb = n(470791);
function lj(e) {
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
                } = (0, lh.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, lx.DL)(o, {
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
        C = l.useContext(lA._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        T = l.useRef(null),
        [P, R] = l.useState(null),
        O = null != P ? (0, lI.ZN)(N, P) : void 0,
        _ = l.useRef(!1),
        L = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, lI.fI)(e.value, [n])), [n, t]),
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
        { activeIndex: W, handleKeyDown: B } = (0, lp.l)(!0, t),
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
                    className: s()(lb.S_, u),
                    ...b(),
                    style: { ...I, ...j },
                    children: (0, i.jsx)(lp.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: P,
                        renderListItem: (e) => (null != m ? m(e) : (0, i.jsx)(lv.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var ly = n(216384);
let lC = "MAIN_PROFILE";
function lE(e) {
    let { guild: t } = e;
    return (0, i.jsx)(lf.Ay, { className: ly.$f, guild: t, size: lf.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function lS(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ly.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: ly.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: ly.qL,
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
function lN(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e7.D, {
        innerRef: r,
        className: s()(ly.L5, { [ly.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eX.E, {
                variant: "body-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: ly.v9,
                children: n,
            }),
            (0, i.jsx)(lc.ChevronSmallDownIcon, {
                className: ly.u4,
                size: "sm",
                color: !0 === l ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function lk(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([lm.Ay], () => lm.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([Y.A], () => Y.A.getGuilds()),
        c = (0, a.bG)([tr.A], () => {
            let e = tr.A.getGuildId();
            return null == e || eb._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ev.Ay, lm.Ay], () => {
            let e = {};
            for (let t of lm.Ay.getFlattenedGuildIds()) {
                let n = ev.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        f = l.useMemo(() => {
            let e = {
                    id: lC,
                    label: eW.intl.string(eW.t["2p07FR"]),
                    value: lC,
                    leading: (0, i.jsx)(lg.ClydeIcon, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, i.jsx)(lE, { guild: n }),
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
                          leading: (0, i.jsx)(lE, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        m = t ?? lC,
        p = f.find((e) => e.value === m) ?? f[0],
        x = l.useCallback(
            (e) => {
                let n = e === lC ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(lj, {
        className: ly.kL,
        label: eW.intl.string(eW.t.rki38K),
        listboxClassName: ly.yt,
        options: f,
        value: m,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(lS, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(lN, { leading: p.value === lC ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var lT = n(701256),
    lP = n(288490);
let lR = "profile-editing-nameplate-error",
    lO = "profile-editing-avatar-error",
    l_ = "profile-editing-avatar-decoration-error",
    lL = "profile-editing-banner-error",
    lw = "profile-editing-display-name-style-error";
function lD(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lP.D0, t),
        children: (0, i.jsx)("div", { className: lP.ZN, children: (0, i.jsx)(nc.LockIcon, { size: "xs" }) }),
    });
}
function lM() {
    let [e, t] = (0, nA.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lP.X6,
              children: [
                  (0, i.jsx)(eX.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      children: eW.intl.string(eW.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e7.D, {
                      "aria-label": eW.intl.string(eW.t.rSe9ra),
                      className: lP.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(ng.XSmallIcon, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lG() {
    let e = i$(),
        t = i2(eW.intl.string(eW.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lP.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lP.tm,
                children: [
                    (0, i.jsx)(nf.D, {
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
            (0, i.jsx)(nj.A, { subscriptionTier: i1.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lD, { className: lP.nd }),
        ],
    });
}
function lU() {
    return (0, i.jsx)(eX.E, {
        variant: "body-xs/normal",
        color: "text-subtle",
        className: lP.BJ,
        "aria-hidden": !0,
        children: eW.intl.format(eW.t.kYv9DM, {
            nitroIconHook: () =>
                (0, i.jsx)(td.NitroWheelIcon, { size: "xxs", color: "currentColor", className: lP.qp }),
        }),
    });
}
function lF(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(n3, {
        heading: eW.intl.string(eW.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(is.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lR : void 0 }),
            (0, i.jsx)(n9, { id: lR, message: r }),
        ],
    });
}
function lW(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(n3, {
        heading: eW.intl.string(eW.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nO.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lO : void 0 }),
            (0, i.jsx)(n_.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? l_ : void 0 }),
            (0, i.jsx)(n9, { id: lO, message: (0, ny.d3)(r) }),
            (0, i.jsx)(n9, { id: l_, message: s }),
        ],
    });
}
function lB(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eU.kn)(l ? [] : [ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        { pendingDisplayNameStyles: u } = (0, eA.B0)(t, n ?? void 0),
        d = (0, nI.A)({
            userId: t.id,
            guildId: n ?? void 0,
            pendingDisplayNameStyles: u,
            ignoreDisabledStylesSetting: !0,
        }),
        { showCampaignPromo: c, showCampaignNewBadge: g } = (0, nb.hh)({
            location: "UserProfileModalV2EditingPanel",
            displayNameStyles: d,
            disabled: l,
        });
    return (0, i.jsxs)(n3, {
        heading: eW.intl.string(eW.t.NEzEws),
        description: c ? eW.intl.string(lT.default.WyZOg3) : void 0,
        disabled: l,
        showNitroIcon: !0,
        badge:
            o || g
                ? (0, i.jsx)("div", {
                      className: lP.IO,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(nm.E, { type: "new", variant: "primary" }),
                  })
                : void 0,
        children: [
            (0, i.jsx)(n5, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lw : void 0,
                onOpen: o ? () => a(eF.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(n9, { id: lw, message: r }),
        ],
    });
}
function lV(e) {
    let { user: t, disabled: n } = e,
        { showCampaignFontBadge: l, dismissCampaignFontBadge: r } = (0, nb.wP)("UserProfileModalV2EditingPanel");
    return (0, i.jsx)(n3, {
        heading: eW.intl.string(eW.t.NEzEws),
        description: eW.intl.string(lT.default.WyZOg3),
        disabled: n,
        badge: l
            ? (0, i.jsx)("div", {
                  className: lP.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(nm.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: (0, i.jsx)(ir, { user: t, disabled: n, onOpen: l ? r : void 0 }),
    });
}
function lH(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(n3, {
        heading: eW.intl.string(eW.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iB, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nX, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lL : void 0 }),
            (0, i.jsx)(n9, { id: lL, message: (0, ny.d3)(s) }),
        ],
    });
}
function lz(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(n3, {
        heading: eW.intl.string(eW.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nF, { user: t, disabled: n }),
    });
}
function lY(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(n3, {
        heading: eW.intl.string(eW.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(iE, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(i_, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lK = "premium-try-it-out-description";
function lq(e) {
    let { user: t } = e,
        n = i$(),
        { navigate: l } = nd();
    return (
        nR(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lK,
            className: lP.DX,
            children: [
                (0, i.jsx)(lD, { className: lP.x$ }),
                (0, i.jsxs)("div", {
                    className: lP.sb,
                    children: [
                        (0, i.jsx)(eX.E, {
                            id: lK,
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eW.intl.format(eW.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(np.$, {
                            variant: "primary",
                            size: "sm",
                            icon: nh.EyeIcon,
                            text: eW.intl.string(eW.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(ld, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lX(e) {
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
        f = (0, nl.A)(c),
        m = null != l,
        p = J.Ay.canUsePremiumProfileCustomization(t),
        h = m && !p,
        x = !p && !m,
        A = (0, nv.Lz)(il.vB.DISPLAY_NAME_STYLE, "UserProfileModalV2EditingPanel"),
        I = x && A === il.S9.SELECTABLE,
        v = m && !p && !g,
        b = s || o,
        j = (0, a.bG)([eb.A], () => eb.A.getErrors(l)),
        y = j.nameplate?.[0] ?? j.nameplate_sku_id?.[0],
        C = j.avatar?.[0],
        E = j.avatar_decoration_sku_id?.[0],
        S = j.banner?.[0],
        N = j.display_name_font_id?.[0] ?? j.display_name_effect_id?.[0] ?? j.display_name_colors?.[0];
    return (0, i.jsxs)(iH, {
        hasGradientBackground: v,
        children: [
            (0, i.jsxs)("div", {
                className: lP.wx,
                children: [
                    (0, i.jsx)(tq.m, {
                        text: eW.intl.string(eW.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(ni.K, {
                            buttonRef: u,
                            "aria-label": eW.intl.string(eW.t["l/A351"]),
                            icon: nx.DoubleChevronSmallRightIcon,
                            onClick: d,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(lk, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(le, {})
                : (0, i.jsx)(iK, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              m && (p ? (0, i.jsx)(lM, {}) : (0, i.jsx)(lG, {})),
                              p && (0, i.jsx)(lU, {}),
                              (0, i.jsx)(lF, { user: t, guildId: l, disabled: b || h, errorMessage: y }),
                              (0, i.jsx)(lW, {
                                  user: t,
                                  guildId: l,
                                  disabled: b || h,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: E,
                              }),
                              p || m
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lB, { user: t, guildId: l, disabled: b || h, errorMessage: N }),
                                            (0, i.jsx)(lH, {
                                                user: t,
                                                guildId: l,
                                                disabled: b || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: S,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lz, { user: t, disabled: b || h }),
                              (0, i.jsx)(lY, { user: t, guildId: l, disabled: b || h }),
                              I && (0, i.jsx)(lV, { user: t, disabled: b }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lq, { user: t }), (0, i.jsx)(i9, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lZ = n(120692),
    lJ = n(110654);
function l$(e) {
    return null;
}
function lQ(e) {
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
        className: s()(lJ.kL, h && lJ.ez),
        children: (0, i.jsx)("div", {
            className: lJ.u4,
            children: p((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lZ.animated.div,
                          {
                              className: lJ.M6,
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
var l0 = n(926321),
    l1 = n(477155),
    l2 = n(561243),
    l5 = n(206697),
    l8 = n(280406);
let l6 = "shuffle-options-a11y-description";
function l3(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(np.$, {
                icon: l0.DiceIcon,
                text: eW.intl.string(eW.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": l6,
                fullWidth: !0,
            }),
            (0, i.jsx)(f.A, { id: l6, children: eW.intl.string(eW.t.bBRdiB) }),
        ],
    });
}
function l9(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = nR(),
        s = i8();
    return (0, i.jsxs)(iH, {
        children: [
            (0, i.jsxs)("div", {
                className: l8.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: l8.FS,
                        children: (0, i.jsx)(tq.m, {
                            text: eW.intl.string(eW.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(ni.K, {
                                buttonRef: l,
                                "aria-label": eW.intl.string(eW.t["4IYwrw"]),
                                icon: l1.ArrowSmallLeftIcon,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(nf.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: l8.R_,
                        children: eW.intl.string(eW.t.PxUx8e),
                    }),
                    (0, i.jsx)(eX.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: l8.Ij,
                        children: eW.intl.string(eW.t.X0ir7L),
                    }),
                    (0, i.jsx)(l3, { className: l8.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iK, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ld, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(i3, {
                                trialOffer: s,
                                onSubscribeClick: l5.t,
                                onSubscribeSuccess: l5.T,
                                onSubscribeClose: l2.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var l4 = n(199016);
let l7 = "user-profile-editing-panel",
    re = "profile-modal-editing-panel-heading";
function rt(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tq.m, {
        text: eW.intl.string(eW.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e7.D, {
            innerRef: l,
            "aria-label": eW.intl.string(eW.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": l7,
            className: s()(l4.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(nn.PaintbrushThinIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function rn(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tq.m, {
            text: eW.intl.string(eW.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(ni.K, {
                buttonRef: l,
                "aria-label": eW.intl.string(eW.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": l7,
                icon: nn.PaintbrushThinIcon,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function ri(e) {
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
        { selectedPanel: h, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = nd(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == p)
        ? null
        : (0, i.jsx)("aside", {
              id: l7,
              "aria-labelledby": re,
              className: s()(l4.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: l4.l$,
                  children: [
                      (0, i.jsx)(f.A, {
                          children: (0, i.jsx)(m.H, { id: re, children: eW.intl.string(eW.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lQ, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(l$, {
                                  id: "default",
                                  children: (0, i.jsx)(lX, {
                                      panelId: l7,
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
                              (0, i.jsx)(l$, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(l9, { user: p, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var rl = n(425763),
    rr = n(447453),
    rs = n(46653),
    ra = n(783420),
    ro = n(874402);
function ru() {
    let e = nu(),
        { goBack: t } = nd(),
        n = i2(eW.intl.string(eW.t.pj0XBN));
    return (0, i.jsx)(ra.A, {
        subscriptionTier: i1.pe.TIER_2,
        onClick: l5.t,
        onSubscribeModalClose: (e) => {
            (e && (0, l5.T)(), (0, l2.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(ro.$, {
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
var rd = n(803306),
    rc = n(631670),
    rg = n(682618),
    rf = n(856383),
    rm = n(234e3),
    rp = n(159001),
    rh = n(933725),
    rx = n(773527),
    rA = n(188567),
    rI = n(435911),
    rv = n(646976),
    rb = n(289173),
    rj = n(958805),
    ry = n(61881),
    rC = n(735321),
    rE = n(624826),
    rS = n(419490),
    rN = n(489496),
    rk = n(132319),
    rT = n(696016),
    rP = n(384377),
    rR = n(518477);
function rO(e) {
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
            let e = (0, a.yK)([ry.A], () => ry.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([ry.A], () => ry.A.getChangedWidgets()),
                n = (0, a.yK)([ry.A], () => ry.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([ry.A], () => ({
                    hasUnsavedWidgets: ry.A.hasUnsavedChanges(),
                    canSaveWidgets: ry.A.canSaveChanges(),
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
            hasBadgeChangesToSave: (0, rm.gz)(eb.A.getPendingChanges()),
        })),
        I = p && h,
        v = f || I || A,
        b = !(f && !m) && (!p || x),
        j = l.useCallback(() => {
            (rj.A.clearPendingWidgets(), p ? (0, nP.XQ)() : A && (0, rm.Jp)());
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
                            return (rf.A.captureException(e), !1);
                        }
                    })({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = C.default.getCurrentUser()?.id;
                    (null != e && (await (0, rd.eO)(e).catch(() => {})), await (0, rg.RS)(), (0, rm.Jp)());
                }
                e = n;
            }
            if (I)
                try {
                    if (null == t) {
                        let t = eb.A.getPendingChanges(),
                            n = (0, rI.Sk)(t),
                            i = (0, rI.yX)(t),
                            l =
                                (0, rx.Jy)(n.displayNameStyles) &&
                                !(0, rx.Jy)(C.default.getCurrentUser()?.displayNameStyles);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, rc._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, rE.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    l &&
                                        (0, n7.Cy)({
                                            perks: [il.vB.DISPLAY_NAME_STYLE],
                                            content: ii.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: n7.rl.USER_PROFILE,
                                        }),
                                    (0, rc.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, nP.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, nP.RE)());
                        }
                    } else {
                        let n = eb.A.getPendingChanges(t),
                            i = (0, rI.C5)(n),
                            l = (0, rI.yX)(n, t),
                            r = C.default.getCurrentUser()?.id,
                            s =
                                (0, rx.Jy)(i.displayNameStyles) &&
                                null != r &&
                                !(0, rx.Jy)(ev.Ay.getMember(t, r)?.displayNameStyles);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, rp.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, rE.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    s &&
                                        (0, n7.Cy)({
                                            perks: [il.vB.DISPLAY_NAME_STYLE],
                                            content: ii.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: n7.rl.GUILD_PROFILE,
                                        }),
                                    (0, rc.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, nP.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, nP.RE)());
                        }
                    }
                    let n = (0, rI.yg)(eb.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, rh.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, rc.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    let e = (0, rC.BF)();
                    for (let t of (await rj.A.savePendingWidgets(d), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, rb.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof rv.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof rv.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = rS.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, rk.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                !(async function (e, t) {
                                    try {
                                        await (0, rN.Yy)(e, { name: t });
                                    } catch (e) {
                                        rT.GU.warn(`Failed to sync profile clip title to the library: ${e}`);
                                    }
                                })(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, rc.x8)() : (0, rP.XA)(rR.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
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
                rA._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (rA._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(ro.$, {
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
var r_ = n(485745),
    rL = n(893757);
function rw() {
    let e = !(0, et.X)("useEditingFooterState"),
        t = (0, rl.VU)(),
        n = (0, r_.A)(e),
        i = nu();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function rD(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([rs.default], () => rs.default.getId() === t),
        u = rw(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rL.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(rr.S, { className: rL.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(ru, {})
                        : "save" === d
                          ? (0, i.jsx)(rO, { guildId: n })
                          : null,
          })
        : null;
}
var rM = n(347805),
    rG = n(34011),
    rU = n(629403),
    rF = n(612630),
    rW = n(61426);
function rB(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rF.A)(t),
        [g, f] = l.useState(),
        [m, p] = l.useState(),
        h = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), f(e), o?.());
                    try {
                        await rU.A.updateNote(t, e);
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
            ? (0, i.jsx)(eX.E, { variant: "body-sm/normal", color: "text-default", className: rW.t, children: h })
            : null;
    return (0, i.jsx)("div", {
        className: s()(tb.kL, n),
        children: (0, i.jsx)(rG.w, {
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
var rV = n(793222);
function rH(e) {
    let { userId: t } = e,
        n = (0, eS.g)(),
        { trackUserProfileAction: l } = (0, $.NJ)(),
        r = (0, et.X)("UserProfileModalV2NotesSection"),
        s = r ? rB : rM.A;
    return (0, i.jsx)(tp, {
        heading: eW.intl.string(eW.t["mQKv+v"]),
        scrollTargetId: rR.bk.NOTE,
        children: (0, i.jsx)(s, {
            userId: t,
            className: r ? rV.N : rV.w,
            autoFocus: n === rR.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rz = n(123292),
    rY = n(667242);
function rK(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: u } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            u && d.current?.focus();
        }, [u]),
        (0, i.jsx)("div", {
            className: rY.kL,
            children: (0, i.jsxs)("div", {
                className: rY.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rY.Kk, children: t }),
                    (0, i.jsx)(eX.E, { color: "text-strong", variant: "body-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rY.hP,
                            children: (0, i.jsx)(rz.Q, {
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
var rq = n(346055),
    rX = n(289873),
    rZ = n(615019);
function rJ(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && nE.O.announce(eW.intl.string(eW.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rq.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rZ.f, t && rZ.z),
                    children: n && (0, i.jsx)(rX.y, { type: rX.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var r$ = n(568602);
function rQ(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([ry.A, eb.A], () => ry.A.hasUnsavedChanges() || eb.A.hasUnsavedChanges());
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
                rA._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    rA._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(r$.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var r0 = n(761508),
    r1 = n(329921),
    r2 = n(945810),
    r5 = n(50258);
let r8 = { enabled: !1 },
    r6 = { 0: r8, 1: { enabled: !0 } },
    r3 = (0, r2.mj)({
        name: "2026-10-profile-default-tab-with-content",
        kind: "user",
        defaultConfig: r8,
        variations: r6,
    });
function r9(e) {
    let { location: t } = e;
    return (r3.useConfig({ location: t }), null);
}
var r4 = n(695904),
    r7 = n(573238),
    se = n(107563),
    st = n(517164),
    sn = n(290863),
    si = n(894768),
    sl = n(146655),
    sr = n(489379);
function ss(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, sl.A)(t.id),
        { voiceChannel: u, voiceActivity: d } = (0, sr.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([st.A], () => st.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        f = (0, a.bG)([si.A, sn.A], () => {
            let e = g ? si.A.getStatus() : sn.A.getStatus(t.id);
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
var sa = n(939496),
    so = n(114212),
    su = n(960549),
    sd = n(637865),
    sc = n(842241),
    sg = n(287746),
    sf = n(435558),
    sm = n(534890),
    sp = n(308528),
    sh = n(780964),
    sx = n(766075),
    sA = n(92795);
let sI = [
        () => eW.intl.string(eW.t.madJdE),
        () => eW.intl.string(eW.t.NYmfoP),
        () => eW.intl.string(eW.t.R2PaCg),
        () => eW.intl.string(eW.t.laSR8h),
        () => eW.intl.string(eW.t.DnsJE8),
    ],
    sv = [
        () => eW.intl.string(eW.t.nFSbeE),
        () => eW.intl.string(eW.t.gTcxOz),
        () => eW.intl.string(eW.t["8T0wYj"]),
        () => eW.intl.string(eW.t.BIHl1g),
        () => eW.intl.string(eW.t["jhBm0+"]),
    ],
    sb = [
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
    sj = [
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
function sy(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: sA.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: sA.FS,
                children: [
                    (0, i.jsx)(nf.D, { variant: "heading-sm/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eX.E, { variant: "body-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function sC() {
    let e = eW.intl.string(eW.t.RnD2yZ),
        [t] = l.useState(() => ((0, sf.sample)(sI) ?? sI[0])());
    return (0, i.jsx)(sy, { heading: e, bodyText: t });
}
function sE() {
    let e = eW.intl.string(eW.t.bFgqYJ),
        [t] = l.useState(() => ((0, sf.sample)(sv) ?? sv[0])());
    return (0, i.jsx)(sy, { heading: e, bodyText: t });
}
function sS(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = X.Ay.getName(n, r, t),
        o = eW.intl.formatToPlainString(eW.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, sf.sample)(sb) ?? sb[0])(a)),
        d = l.useCallback(() => {
            (sp.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(sy, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: sA.v0,
            children: (0, i.jsx)(tW.FD, { icon: sm.ChatIcon, text: eW.intl.string(eW.t["g33r/P"]), onClick: d }),
        }),
    });
}
function sN() {
    let e = (0, nS.Ay)();
    return (0, i.jsx)("div", {
        className: sA.HU,
        children: sj.map((t, n) => {
            let l = eu.A.get(t);
            if (null == l) return null;
            let r = (0, ia.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: sA.gj }, n);
        }),
    });
}
function sk(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, sx.openUserSettings)(sh.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, sx.openUserSettings)(sh.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(sy, {
        heading: eW.intl.string(eW.t.VB6LWY),
        bodyText: eW.intl.string(eW.t.KpjsU9),
        children: [
            (0, i.jsx)(sN, {}),
            (0, i.jsxs)("div", {
                className: sA.v0,
                children: [
                    (0, i.jsx)(tW.FD, { text: eW.intl.string(eW.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tW.FD, { text: eW.intl.string(eW.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var sT = n(131058);
function sP(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(sT.gN, n), fade: !0, ...r, children: t });
}
var sR = n(587763);
function sO(e) {
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
        } = ss({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return m || p || !g
        ? m || p || g
            ? (0, i.jsxs)(sP, {
                  className: sR.XG,
                  fade: !0,
                  children: [
                      m
                          ? (0, i.jsx)(tp, {
                                heading: eW.intl.string(eW.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sR.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(sc.A, {
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
                                                    children: (0, i.jsx)(su.A, {
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
                                                children: (0, i.jsx)(sg.A, {
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
                                                  tX.Anchor,
                                                  {
                                                      href: eV.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: rR.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sR.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(sd.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : f
              ? (0, i.jsx)(sk, { onClose: a })
              : (0, i.jsx)(sS, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sR.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sR.kr,
                          children: [
                              (0, i.jsx)(so.F, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(so.F, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var s_ = n(163126),
    sL = n(913453),
    sw = n(229187),
    sD = n(702476),
    sM = n(503062),
    sG = n(393213);
function sU(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, $.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, sL.A)(t),
        g = (0, s_.A)();
    return (
        l.useEffect(() => {
            (0, sw.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sP, {
            className: sG.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sG.D$,
                                  children: [
                                      (0, i.jsx)(so.F, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(so.F, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(sC, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                sM.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sD.openUserProfileModal)({
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
var sF = n(398590),
    sW = n(345942),
    sB = n(51943);
function sV(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, $.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sL.A)(t);
    return (0, i.jsx)(sP, {
        className: sG.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sG.Y7,
                              children: [
                                  (0, i.jsx)(so.F, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(so.F, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sB.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sW.u)(r.id), n(), (0, sF.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(sE, {}),
    });
}
var sH = n(885574),
    sz = n(669815),
    sY = n(331322),
    sK = n(591410),
    sq = n(881116),
    sX = n(506774),
    sZ = n(531913),
    sJ = n(503275),
    s$ = n(260498),
    sQ = n(387580);
let s0 = "conjureServerWidgetUpsellDismissals";
var s1 = n(763314),
    s2 = n(191850);
function s5(e) {
    let { widget: t, guildId: n, currentUser: r, onDismiss: s } = e,
        o = (function (e, t, n) {
            let { applicationId: i } = t,
                r = (0, a.bG)([Y.A], () => Y.A.getGuild(n)),
                s = (0, ed.h)(i),
                o = (0, a.bG)([s$.Ay], () => s$.Ay.findProjectByApplicationId(i)?.owner_user_id, [i]),
                u = (0, sJ.vm)(o),
                d = (0, sZ.A)(e, i),
                c = l.useMemo(() => ({ ...d, isLoading: !1, hasIdentity: !0 }), [d]);
            return null == r || null == s
                ? null
                : { guild: r, application: s, creator: null != o ? u : null, rendererProps: c };
        })(r.id, t, n);
    if (null == o) return null;
    let { guild: u, application: d, creator: c, rendererProps: g } = o;
    return (0, i.jsx)(sY.B, {
        children: (0, i.jsx)(sK.A, {
            user: r,
            widget: t,
            rendererProps: g,
            allowEditing: !1,
            subtle: !0,
            exclusiveCTA: !0,
            cta: (0, i.jsx)(sK.A.Cta, {
                icon: (0, i.jsx)(lf.Ay, { guild: u, size: lf.Ay.Sizes.MEDIUM, active: !0, "aria-hidden": !0 }),
                heading: eW.intl.formatToPlainString(s2.default["uIb8U+"], { guildName: u.name }),
                content: eW.intl.formatToPlainString(s2.default.ZZywee, { applicationName: d.name }),
                attribution:
                    null != c
                        ? (0, i.jsx)(sY.B, {
                              direction: "horizontal",
                              gap: 8,
                              align: "center",
                              children: (0, i.jsx)(sq.A, { creator: c, guildId: n, color: "text-subtle" }),
                          })
                        : null,
                buttons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(rz.Q, {
                            variant: "secondary",
                            textVariant: "body-sm/medium",
                            text: eW.intl.string(eW.t.WAI6xu),
                            onClick: s,
                        }),
                        (0, i.jsx)(np.$, {
                            variant: "primary",
                            size: "sm",
                            text: eW.intl.string(s2.default.j6ztO0),
                            onClick: () => (0, s1.A)(t.applicationId, s),
                        }),
                    ],
                }),
            }),
        }),
    });
}
function s8(e) {
    let { currentUser: t } = e,
        n = (function (e) {
            let t = (0, sQ.A)(),
                [n, i] = l.useState(() => sX.w.get(s0)?.[e] ?? []),
                r = t.find((e) => {
                    let { guildId: t } = e;
                    return !n.includes(t);
                }),
                s = r?.guildId,
                a = r?.widgets[0],
                o = l.useCallback(() => {
                    if (null != s) {
                        let t;
                        ((t = sX.w.get(s0) ?? {}),
                            sX.w.set(s0, { ...t, [e]: [...(t[e] ?? []), s] }),
                            i((e) => [...e, s]));
                    }
                }, [e, s]);
            return null != s && null != a ? { guildId: s, widget: a, dismiss: o } : null;
        })(t.id);
    return null == n
        ? null
        : (0, i.jsx)(s5, { widget: n.widget, guildId: n.guildId, currentUser: t, onDismiss: n.dismiss }, n.guildId);
}
function s6() {
    let e = (0, a.bG)([C.default], () => C.default.getCurrentUser());
    return null != e ? (0, i.jsx)(s8, { currentUser: e }, e.id) : null;
}
var s3 = n(840387),
    s9 = n(201718),
    s4 = n(615405),
    s7 = n(633075),
    ae = n(813832),
    at = n(600761),
    an = n(667049);
function ai(e) {
    let t = (0, em.A)(e),
        n = nu();
    return t && !n;
}
var al = n(540185),
    ar = n(210598),
    as = n(465318);
function aa() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = as.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, eU.kn)(e && t ? [ek.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === ek.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function ao(e) {
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
                          let e = (0, ar.g0)();
                          ((0, rC.Y5)(e),
                              r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, rP.XA)(rR.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var au = n(410453);
function ad(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: r } = e,
        { trackUserProfileEditAction: s } = (0, $.NJ)(),
        a = l.useCallback(() => {
            n && r(eF.i.TAKE_ACTION);
            let e = (0, ar.g0)();
            ((0, rC.Y5)(e),
                s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, rP.XA)(rR.jM.WIDGET_ADDED));
        }, [s, n, r]);
    return (0, i.jsx)(np.$, {
        icon: td.NitroWheelIcon,
        text: eW.intl.string(eW.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function ac(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, $.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, d] = aa(),
        c = (function () {
            let e = (0, ei.bG)([C.default], () => C.default.getCurrentUser()?.id),
                t = (0, an.A)(e),
                { enabled: n, showCreateEntrypoint: i } = as.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === al.x.PERSONAL);
            return n && i && !l;
        })(),
        g = l.useCallback(() => {
            (u && d(eF.i.TAKE_ACTION),
                r({ action: "PRESS_ADD_WIDGET" }),
                (0, it.mM)(
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
        className: s()(au.w, t),
        children: [
            (0, i.jsx)(eX.E, {
                className: au.D,
                variant: "body-sm/semibold",
                color: "text-subtle",
                children: eW.intl.string(eW.t.OYlggR),
            }),
            c ? (0, i.jsx)(ad, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: d }) : null,
            (0, i.jsx)(np.$, {
                icon: tJ.PlusSmallIcon,
                text: eW.intl.string(eW.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: g,
                buttonRef: a,
            }),
            (0, i.jsx)(ao, { targetElementRef: c ? o : a, isVisible: u, markAsDismissed: d }),
        ],
    });
}
var ag = n(192),
    af = n(704824),
    am = n(382483),
    ap = n(385113),
    ah = n(334074),
    ax = n(657718),
    aA = n(478016);
function aI(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, $.NJ)(),
        a = l.useMemo(() => new s7.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, rC.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, rP.XA)(rR.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sK.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sK.A.Cta, {
            showSuggestedForYou: !0,
            heading: eW.intl.format(eW.t.OIzLCy, { applicationName: n.name }),
            content: eW.intl.format(eW.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tq.m, {
                        text: eW.intl.string(eW.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(ax.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: ng.XSmallIcon,
                            "aria-label": eW.intl.string(eW.t.WAI6xu),
                            onClick: () => {
                                r(eF.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tq.m, {
                        text: eW.intl.string(eW.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(ax.S, {
                            variant: "primary",
                            size: "sm",
                            icon: aA.CheckmarkSmallIcon,
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
function av() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([ap.A], () => ap.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, am.Wq)();
        }, []);
        let t = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
            n = (0, ed.A)(e),
            { tokens: i, fetched: r } = (0, af.j)(e),
            s = (0, an.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof s7.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, ah.hj)({
                applications: u,
                dismissibleContent: ek.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: ah.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(aI, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var ab = n(675816),
    aj = n(575593),
    ay = n(44120),
    aC = n(778705),
    aE = n(87719),
    aS = n(317560),
    aN = n(306984),
    ak = n(661492);
let aT = { sentGifts: {} };
function aP(e, t) {
    return `${e}:${t}`;
}
class aR extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((aT = e), this.cleanupExpiredGifts());
    }
    getState() {
        return aT;
    }
    hasSentGift(e, t) {
        let n = aP(e, t),
            i = aT.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = aP(e, t),
            i = aT.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(aT.sentGifts)) new Date(n.expiresAt) < e && delete aT.sentGifts[t];
    }
}
let aO = new aR(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = aP(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        aT.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var a_ = n(146423),
    aL = n(590180),
    aw = n(301198),
    aD = n(349031),
    aM = n(124557),
    aG = n(471505),
    aU = n(376932);
function aF(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function aW(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([rs.default], () => rs.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aG.G)({ userId: o, sku: n, location: l, onError: r }),
        f = aK();
    return (0, i.jsx)("div", {
        className: aU.U,
        style: aF(t),
        children: (0, i.jsx)(aw._, {
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
function aB(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([rs.default], () => rs.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aM.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = aK();
    return (0, i.jsx)("div", {
        className: aU.U,
        style: aF(t),
        children: (0, i.jsx)(aw._, {
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
function aV(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([rs.default], () => rs.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aM.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = aK();
    return (0, i.jsx)("div", {
        className: aU.U,
        style: aF(t),
        children: (0, i.jsx)(aw._, {
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
function aH(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([rs.default], () => rs.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: f,
            isPurchased: m,
        } = (0, aD.z)({ userId: o, product: n, location: l, onError: r }),
        p = (0, ak.q)(f),
        h = m && !u,
        x = !p || h,
        A = aK(p && h ? eW.intl.string(eW.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: aU.U,
        style: aF(t),
        children: (0, i.jsx)(aw._, {
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
function az(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([aL.A], () => aL.A.getProduct(t.id));
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aW, { sku: t, isVisuallyHidden: !n, ...l });
        case T.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(aB, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(aH, { product: r, isVisuallyHidden: !n, ...l });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(aV, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function aY(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(az, { location: t, ...n });
}
function aK(e) {
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
var aq = n(460442),
    aX = n(662349),
    aZ = n(892109),
    aJ = n(200686),
    a$ = n(479026),
    aQ = n(636374),
    a0 = n(699976),
    a1 = n(181554),
    a2 = n(880465);
let a5 = a0.Z.SIZE_133;
function a8(e) {
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
        k = (0, aJ.Ay)(E ? r.shopUnpublishedAt : void 0),
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
                        action: rR.Mq.WISHLIST_ITEM_CLICKED,
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
                        action: rR.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, P, C]),
        _ = l.useCallback(() => {
            ((0, rP.XA)(rR.jM.SOMETHING_WENT_WRONG), nE.O.announce(eW.intl.string(eW.t.F8FvUy)));
        }, []),
        L = null != g ? (0, i.jsx)("div", { ref: S, className: a1.BU, children: g }) : null,
        {
            onBodyClick: w,
            onOverlayClick: D,
            showOverlayButton: M,
            routesToGift: G,
            label: U,
            icon: F,
        } = (0, aQ.P)({ wishlistOwner: a, isOwned: b, onDetailsClick: R, onPurchaseClick: O }),
        W = h && M;
    return (0, i.jsxs)("div", {
        className: a1.kL,
        children: [
            (0, i.jsxs)(a_.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: a5,
                cardStyle: s()(a1.Nr, d),
                skuPreviewStyle: s()(a1.ev, { [a1.go]: b && !h }, f, W ? m : void 0),
                skuAssetClassName: W ? p : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: w,
                "aria-label":
                    ((t = r.sku),
                    (n = G ? (0, ak.T)(t) : eW.intl.formatToPlainString(eW.t.ZBB4Ty, { productName: (0, ak.T)(t) })),
                    !0 === y ? eW.intl.formatToPlainString(eW.t.s9RZ1r, { label: n }) : n),
                "aria-describedby": null != k ? N : void 0,
                children: [
                    !0 === y && (0, i.jsx)(r1.N, { className: a1.Pf }),
                    null != k && (0, i.jsx)(aZ.A, { id: N, countdown: k, variant: "profile" }),
                    j,
                    M && (0, i.jsx)(aX.A, { spec: a5, onClick: D, isHoveringOrFocusing: h, label: U, icon: F }),
                    b && (0, i.jsx)(aq.gS, { isHoveringOrFocusing: h }),
                    a.id === u.id &&
                        null != v &&
                        (0, i.jsx)(aY, {
                            sku: r.sku,
                            isCardHovered: h,
                            spec: a5,
                            onError: _,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            L,
        ],
    });
}
function a6(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, aS.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: i1.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, aN.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: i1.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(a8, {
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
function a3(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, a$.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: i1.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, ay.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: i1.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        m = f === aj.R.AVATAR_DECORATION || f === aj.R.PROFILE_FRAME;
    return (0, i.jsx)(a8, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [a1.mn]: m }),
        analyticsLocations: a,
        ...d,
    });
}
function a9(e) {
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
            if (n) return void (0, aE.x)(iJ.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, aC.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: i1.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(a8, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: a2.MO,
        skuAssetHoverClassName: a2.iR,
        analyticsLocations: a,
        ...u,
    });
}
function a4(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, j.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        f = (0, a.bG)([aO], () => aO.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        m = l.useMemo(
            () => t.skuProductLine !== T.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(a6, {
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
            return (0, i.jsx)(a3, {
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
            return (0, i.jsx)(a9, {
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
var a7 = n(788593),
    oe = n(132085),
    ot = n(741934),
    on = n(720060),
    oi = n(998556);
function ol(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, ab.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        u = (0, rl.VU)(),
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
                                  className: oi.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(on.u, {
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
                                  children: (0, i.jsx)(a7.A, {
                                      className: oi.XJ,
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
                                  className: oi.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(oe.A, {
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
                                  className: oi.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(ot.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: oi.Xm,
                                  children: (0, i.jsx)(a4, {
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
    return (0, i.jsx)("div", { className: oi.kL, style: { transform: `translate3d(${p}px, ${h}px, 0)` }, children: d });
}
var or = n(151869);
function os(e) {
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
        let t = n.find((t) => (0, s7.E)(t, e));
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
        l && c(al.x.CLIPS_GALLERY),
        r && c(al.x.PERSONAL),
        c(al.x.FAVORITE_GAMES),
        c(al.x.PLAYED_GAMES),
        g("1346069614634864772"),
        c(al.x.CURRENT_GAMES),
        c(al.x.WANT_TO_PLAY_GAMES),
        g("1323482066758930452"),
        o.slice(0, s)
    );
}
n(839272);
let oa = (0, r2.mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var oo = n(116281),
    ou = n(661439),
    od = n(90165);
function oc(e) {
    let t = (0, a.bG)([ap.A], () => ap.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof s7.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, ed.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, af.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, ou.X)();
    }, [o]);
    let u = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        d = (0, a.yK)([od.A], () => u.map((e) => (null != e ? od.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([od.A], () => u.map((e) => (null != e ? od.A.getLastPlayedDateTime(e) : null)));
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
var og = n(224360),
    of = n(297520),
    om = n(843393);
function op(e) {
    return e.getUniqueKey();
}
function oh(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, oo.A)(),
        s = oc(r),
        o = (0, a.bG)([rS.Ay], () => rS.Ay.hasClips()),
        u = (0, a.bG)([C.default], () => J.Ay.isPremium(C.default.getCurrentUser(), i1.PremiumTypes.TIER_2)),
        d = l.useMemo(
            () =>
                os({
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
            c && (0, i.jsx)(ox, { suggestions: d, suggestionsLocation: "above" }),
            t,
            c && (0, i.jsx)(ox, { suggestions: d, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function ox(e) {
    let t = oa.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(oA, { ...e }) : null;
}
function oA(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, $.NJ)(),
        { focusAddedWidget: o } = (0, ag.r)(),
        [u, d] = (0, eU.kn)([ek.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(of.A, {
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
        : (0, i.jsx)(og.A, {
              className: s()(om.uW, "above" === n && om.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "body-xs/normal" : void 0,
              onDismiss: () => d(eF.i.USER_DISMISS),
              children: (0, i.jsx)(or.A, {
                  items: t,
                  getItemKey: op,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: om.Dk,
                  scrollerClassName: om.jv,
                  itemClassName: om.Vs,
                  actionsClassName: om.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eW.intl.string(eW.t["+EIBSA"]),
              }),
          });
}
let oI = (0, r2.mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var ov = n(269507);
function ob(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: ov.ZW,
        "aria-label": eW.intl.string(eW.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === al.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(of.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function oj(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, oo.A)();
    return (0, i.jsx)(ob, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function oy(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: r,
            trackUserProfileEditAction: s,
            personalWidgetOptionRef: o,
        } = e,
        u = (0, oo.A)(),
        d = oc(u),
        c = os({
            addableWidgets: u,
            applicationAffinityData: d,
            hasClips: (0, a.bG)([rS.Ay], () => rS.Ay.hasClips()),
            hasPremium: (0, a.bG)([C.default], () =>
                J.Ay.isPremium(C.default.getCurrentUser(), i1.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: r ? [al.x.PERSONAL] : [],
        }),
        g = l.useCallback(() => {
            (s({ action: "PRESS_ADD_WIDGET" }),
                (0, it.mM)(
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
            (0, i.jsx)(ob, { widgets: c, personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
            (0, i.jsx)(np.$, { text: eW.intl.string(eW.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: g }),
        ],
    });
}
function oC(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, $.NJ)(),
        s = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError != null, [t]),
        [d, c] = aa(!u),
        g = d || (0, ar.t0)(),
        { enabled: f, maxWidgetOptions: m } = (function (e) {
            let { location: t } = e;
            return oI.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            s.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: ov.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: ov.FS,
                    children: [
                        (0, i.jsx)(nf.D, {
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
                            (0, i.jsx)(s6, {}),
                            f
                                ? (0, i.jsx)(oy, {
                                      maxWidgetOptions: m,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: g,
                                      trackUserProfileEditAction: r,
                                  })
                                : (0, i.jsx)(oj, { personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
                            (0, i.jsx)(ao, { targetElementRef: o, isVisible: d, markAsDismissed: c }),
                        ],
                    }),
            ],
        })
    );
}
var oE = n(366209);
function oS() {
    return (0, i.jsxs)("div", {
        className: oE.mJ,
        children: [
            (0, i.jsx)(sH.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eX.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: eW.intl.string(eW.t["7blcz6"]),
            }),
        ],
    });
}
function oN(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, an.A)(t.id),
        u = ai(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([s4.A], () => [s4.A.ipCountryCode, s4.A.ipCountryCodeRequest]),
                n = (0, s3.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sz.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && u,
        g = l.useMemo(() => o.filter(rb.fu), [o]),
        f = l.useMemo(() => o.filter((e) => e instanceof s7.R), [o]);
    function m() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                on.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: u, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(ac, { className: oE.cG }),
                            d && (0, i.jsx)(oS, {}),
                            (0, i.jsx)(av, {}),
                            (0, i.jsx)(s6, {}),
                        ],
                    }),
                u ? (0, i.jsx)(oh, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, ae.Y)(u, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, ed.A)(n);
        let { data: i, refetch: r } = (0, s9.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, f),
    c)
        ? (0, i.jsx)(oC, { userId: t.id })
        : u
          ? (0, i.jsx)(ag.D, { children: m() })
          : m();
}
function ok(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, at.i)({ containerRef: d });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                d.current?.scrollTo({ top: 0, behavior: tv.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([rs.default], () => rs.default.getId() === t)), (r = rw()), n && null != r);
    return (0, i.jsxs)(sP, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(oE.XG, { [oE.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(ol, { scrollerRef: d }), (0, i.jsx)(oN, { user: o, onWidgetAddedFromBelow: c, ...u })],
    });
}
var oT = n(115560),
    oP = n(777480),
    oR = n(825484),
    oO = n(952270),
    o_ = n(444927),
    oL = n(895360),
    ow = n(267102),
    oD = n(521440),
    oM = n(721932),
    oG = n(832163),
    oU = n(501838),
    oF = n(44724),
    oW = n(808247),
    oB = n(673843),
    oV = n(855052),
    oH = n(342442),
    oz = n(658946),
    oY = n(535089),
    oK = n(840411),
    oq = n(387325),
    oX = n(666810),
    oZ = n(419731),
    oJ = n(451395),
    o$ = n(823016),
    oQ = n(100741);
function o0(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, o$.r)();
    return (0, i.jsx)(oJ.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eW.intl.formatToPlainString(eW.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: oQ.C,
        dropBeforeClassName: oQ.A,
        dropAfterClassName: oQ.Ze,
        draggingClassName: oQ.Id,
        children: (0, i.jsx)("div", { className: oQ.An, children: s }),
    });
}
let o1 = l.memo(function (e) {
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
        { registerDragHandleRef: m } = (0, o$.r)(),
        p = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        h = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(oJ.jV, {
                          buttonRef: m(String(t.skuId)),
                          className: oQ.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, m, t.skuId],
        ),
        x = l.useMemo(
            () =>
                (0, i.jsx)(a4, {
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
              children: (0, i.jsx)(o0, { item: t, index: n, wishlistId: o, onReorder: d, children: x }),
          })
        : (0, i.jsx)("li", { children: x });
});
function o2(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        u = C.default.getCurrentUser(),
        { labelsEnabled: d } = (0, oq.Zf)("UserProfileModalV2WishlistGrid"),
        c = l.useMemo(() => t.filter(aJ.Ge).map((e) => e.shopUnpublishedAt), [t]),
        g = (0, aJ.SJ)(c),
        { defaultWishlistId: f } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(n.id) })),
        { isDragging: m } = (0, ab.V)((e) => ({ isDragging: e.isDragging() })),
        [p, h] = l.useState([]),
        x = l.useCallback((e) => {
            h((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        A = l.useCallback(
            (e, n) => {
                if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = se.A.getWishlist(f);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, oK.Ap)(i, t, e, n);
                oW.A.reorderWishlistItem(f, l.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [f, t],
        );
    if (null == u || null == f) return null;
    let I = (0, i.jsxs)(i.Fragment, {
        children: [
            g && (0, i.jsx)(oq.m4, { location: "UserProfileModalV2WishlistGrid" }),
            (0, i.jsx)("ul", {
                className: oQ.Vg,
                children: t.map((e, t) =>
                    (0, i.jsx)(
                        o1,
                        {
                            item: e,
                            index: t,
                            profileOwner: n,
                            guildId: r,
                            showEditingControls: s,
                            wishlistId: f,
                            isDragging: m,
                            onReorder: A,
                            isNew: (0, oZ.f3)(e.addedAt, o) && !p.includes(e.skuId),
                            onClick: x,
                            showShopExpiryLabel: d,
                        },
                        e.skuId,
                    ),
                ),
            }),
        ],
    });
    return s ? (0, i.jsx)(o$.B, { emptyListFallbackRef: null, children: I }) : I;
}
function o5(e) {
    let t = C.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(oX.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(o2, { ...e }),
    });
}
var o8 = n(815021),
    o6 = n(299679),
    o3 = n(820847);
n(667532);
var o9 = n(802494),
    o4 = n(172218),
    o7 = n(858899),
    ue = n(2157),
    ut = n(95817),
    un = n(74135),
    ui = n(964164);
let ul = a0.Z.SIZE_90;
function ur(e) {
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
        p = (0, o6.Ar)(),
        h = (0, o_.A)(() => (0, oT.A)()),
        { handleVisibilityChange: x } = (0, ut.G)(h),
        A = (0, o4.K)(x, 0.5, p?.surface != null),
        I = l.useCallback(() => {
            (m({
                wishlistId: g,
                action: rR.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                p?.surface != null &&
                    t1.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
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
        children: (0, i.jsx)(a_.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: ul,
            cardStyle: s()(ui.Nr, a),
            skuPreviewStyle: s()(ui.ev, o),
            onHoverOrFocusChange: u,
            onClick: I,
            "aria-label": c,
            children: f,
        }),
    });
}
function us(e) {
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
                    (await oW.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: rR.RP.WISHLIST }));
                } catch (e) {
                    ((0, o7.P0)({ text: eW.intl.string(eW.t.F8FvUy), variant: "critical" }),
                        nE.O.announce(eW.intl.string(eW.t.F8FvUy)));
                } finally {
                    m(!1);
                }
            }
        }, [t, n, f, a, d]),
        h = l.useMemo(() => s()({ [ui.zW]: r || f }, o), [r, f, o]);
    return (0, i.jsxs)(ur, {
        "aria-label": eW.intl.formatToPlainString(eW.t.xRjJBe, { productName: (0, ak.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(aq.oU, { isHoveringOrFocusing: r, loading: f }), !r && !f && c],
    });
}
function ua(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, j.Ay)(...(n ?? []), b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, ue.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(us, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(un.s, { spec: ul, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function uo(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case aj.R.PROFILE_EFFECT:
                case aj.R.NAMEPLATE:
                case aj.R.BUNDLE:
                case aj.R.PROFILE_FRAME:
                    return;
                case aj.R.AVATAR_DECORATION:
                    return ui.ML;
                default:
                    return s()(ui.ML, ui.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(us, { sku: t, skuPreviewStyle: r, ...n });
}
function uu(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(us, { sku: t, skuPreviewStyle: a2.MO, ...n });
}
function ud(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ua, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(uo, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(uu, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var uc = n(609965);
function ug(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([C.default], () => C.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(uc.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                o6.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(ud, {
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
var uf = n(927813);
let um = 90 * uf.A.Millis.DAY,
    up = 90 * uf.A.Millis.DAY;
var uh = n(469364);
function ux(e) {
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
                    { showAfterTimestamp: u + up, cooldownDurationMs: um },
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
        ? (0, i.jsx)(uA, {
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
function uA(e) {
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
                { recommendations: a, status: o } = (0, o9.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(i1.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, oK.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: o3.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(uh.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: uh.wx,
                      children: [
                          (0, i.jsx)(eX.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: eW.intl.string(eW.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: uh.b,
                                  children: (0, i.jsx)(o8.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(o6.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(ug, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(uh.Vg, uh.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var uI = n(477782),
    uv = n(165862),
    ub = n(431194);
function uj(e) {
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
                        let t = t2.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eW.intl.formatToPlainString(eW.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft:
                                null != t ? () => (0, i.jsx)("img", { className: ub.I, src: t, alt: "" }) : tU.ShopIcon,
                            leadingAccessory:
                                null != t ? { type: "image", src: t } : { type: "icon", icon: tU.ShopIcon },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, ed.A)(o), handleOpenGameShop: s }),
        f = l.useMemo(
            () =>
                (0, i.jsxs)(uI.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(uI.Dr, {
                                id: "browse-collectibles-shop",
                                label: eW.intl.string(eW.t["5upuqx"]),
                                iconLeft: tU.ShopIcon,
                                leadingAccessory: { type: "icon", icon: tU.ShopIcon },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(uI.Dr, {
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
                                    uI.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nD.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(uv.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eW.intl.string(eW.t.GdNkvG),
                children: f,
            });
        },
        children: (e) =>
            (0, i.jsx)(np.$, {
                buttonRef: u,
                variant: n,
                size: "sm",
                icon: d ? ng.XSmallIcon : lc.ChevronSmallDownIcon,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var uy = n(365199);
let uC = eV.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function uE(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, j.Ay)(b.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(uI.rX, {
                          children: [
                              (0, i.jsx)(uI.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eW.intl.string(eW.t.b2nFyA),
                                  subtext: eW.intl.string(eW.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(uI.bX, {}),
                              (0, i.jsx)(uI.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eW.intl.string(eW.t.hvVgAZ),
                                  icon: tZ.LinkExternalSmallIcon,
                                  trailingIndicator: { type: "icon", icon: tZ.LinkExternalSmallIcon },
                                  action: () => window.open(uC),
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
              children: (0, i.jsx)(nD.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(uv.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eW.intl.string(eW.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(tW.q3, {
                          buttonRef: s,
                          icon: uy.MoreHorizontalIcon,
                          tooltipText: eW.intl.string(eW.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var uS = n(526725);
function uN(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(uj, {
              title: eW.intl.string(eW.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(np.$, {
              variant: "secondary",
              size: "sm",
              icon: tU.ShopIcon,
              text: eW.intl.string(eW.t["i/yzHs"]),
              onClick: n,
          });
}
function uk(e) {
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
        className: uS.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(uj, {
                          title: eW.intl.string(eW.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(np.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tJ.PlusSmallIcon,
                          text: eW.intl.string(eW.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(uE, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function uT(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(np.$, {
        variant: "primary",
        size: "sm",
        icon: tU.ShopIcon,
        text: eW.intl.formatToPlainString(eW.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function uP(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ow.Us)() === T.BRT.OVERLAY,
        u = (0, ed.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(uT, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(uj, {
                title: eW.intl.string(eW.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: uS.y7,
        children: [
            (0, i.jsxs)("div", {
                className: uS.q6,
                children: [
                    (0, i.jsx)(nf.D, {
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
                (0, i.jsxs)(oR.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(np.$, {
                                variant: "primary",
                                size: "sm",
                                icon: tU.ShopIcon,
                                text: eW.intl.string(eW.t.ZbS4QB),
                                onClick: r,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function uR(e) {
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
        f?.visibility != null && x(f.visibility === oP.a.PUBLIC);
    }, [f?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && m({ wishlistId: t, action: n, productLines: i });
            },
            [m],
        ),
        I = (0, oY.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, oV.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = h ? oP.a.PRIVATE : oP.a.PUBLIC;
            (x(!h),
                oW.A.updateWishlistVisibility(g, e),
                m({
                    wishlistId: g,
                    action: h ? rR.Mq.WISHLIST_TOGGLE_PRIVATE : rR.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, oV.y9)(s) : void 0,
                }));
        }, [g, h, m, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: uS.lm,
                    children: [
                        (0, i.jsx)(oO.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
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
                    className: uS.lm,
                    children: [
                        (0, i.jsx)(sH.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eX.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eW.intl.string(eW.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: uS.U1,
                children: [
                    (0, i.jsx)(eX.E, {
                        variant: "body-xs/semibold",
                        color: "text-subtle",
                        children: eW.intl.format(eW.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(uk, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(uN, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function uO(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, at.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: u } = (0, a.cf)([ee.A, C.default], () => ({
            wishlistId: ee.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, j.Ay)(),
        c = (function (e) {
            let { ownerId: t, wishlistId: n, isVisible: i = !0 } = e,
                r = (0, r4.bq)(),
                s = (0, a.bG)(
                    [ee.A],
                    () => (null != t ? ee.A.getProfileReadStateSectionAckedAt(t, oH.o.WISHLIST) : null),
                    [t],
                ),
                [o, u] = l.useState(void 0);
            (i || void 0 === o || u(void 0), i && null != t && null != r && void 0 === o && u(r.enabled ? s : null));
            let d = (0, a.bG)([se.A, ee.A], () => null != t && (0, oz.Y)(t, n), [t, n]),
                c = void 0 !== o;
            return (
                l.useEffect(() => {
                    i && c && d && null != t && (0, oz.U)(t);
                }, [i, c, d, t]),
                o
            );
        })({ ownerId: t.id, wishlistId: o }),
        g = ai(t.id),
        { wishlist: f, wasFetched: m, error: p } = (0, z.fw)({ wishlistId: o, userId: t.id }),
        [h, x] = l.useState(!1);
    (m && !h && x(!0), (0, oB.A)(f));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([oG.A], () => oG.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, oM.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, oU.w)({ userIds: s }),
                c = (0, oU.mn)({ userIds: s }),
                g = (0, oU.tR)(s),
                f = (0, oU.rY)(),
                m = (0, oU.qx)(),
                p = (0, oU.px)();
            return l.useMemo(
                () => (0, sf.uniq)([...u, ...d, ...c, ...g, ...(r ? [...f, ...m, ...p] : [])].filter(eg.Vq)),
                [u, d, c, g, f, m, p, r],
            );
        })({ wishlist: f, profileOwner: t, currentUser: u }),
        I = (0, o_.A)(() => (0, oT.A)()),
        v = l.useCallback(() => {
            (0, tF.Cz)({ analyticsLocations: d, analyticsSource: b.A.USER_PROFILE_WISHLIST });
        }, [d]),
        y = l.useCallback((e) => {
            (0, oF.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iJ.M)(), (0, oF.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, aM.c)({
            userId: u?.id,
            skuId: i1.pe.TIER_2,
            nuxGraphic: oD.g,
            onNuxShow: oL.D,
            location: b.A.USER_PROFILE_WISHLIST,
        });
    if (null == u || null != p) return null;
    let N = null == f || 0 === f.items.length;
    return (0, i.jsxs)(sP, {
        scrollerRef: r,
        className: s()({ [uS.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(uP, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ol, { scrollerRef: r }),
                          (0, i.jsx)(uR, {
                              isOwner: u?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: f,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, oV.C3)(f, i1.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(o5, {
                              items: f.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              ackedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(ux, {
                    user: t,
                    guildId: n,
                    wishlist: f,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: I,
                    className: N ? uS._E : uS.HZ,
                }),
        ],
    });
}
function u_(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rR.RP.ACTIVITY
        ? (0, i.jsx)(sO, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rR.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sU, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rR.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sV, { user: t, onClose: o })
            : l === rR.RP.WIDGETS
              ? (0, i.jsx)(ok, { user: t, guildId: s, channelId: a })
              : l === rR.RP.WISHLIST
                ? (0, i.jsx)(uO, { profileOwner: t, guildId: s })
                : null;
}
function uL(e) {
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
        { shouldLogExposure: h } = (0, r7.A)(t),
        { primaryColor: x } = (0, sa.E)(),
        A = null != x ? "neutral" : "primary",
        I = l.useRef(!1),
        v = u.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        v && !I.current && ((I.current = !0), p({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [v, p]);
    let [b, j] = l.useState(() => (u.find((e) => e.section === d) ?? u[0]).section),
        y = (0, a.bG)([rs.default, r5.A], () => {
            let e = r5.A.getAssignment("user", rs.default.getId(), r3.definition.name);
            return e?.variantId == null || e.useAsEligibility ? null : (r6[e.variantId] ?? r8);
        }),
        C = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: u,
                    hasRecentActivity: d,
                } = ss({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [ee.A, se.A],
                    () => {
                        if (null == ee.A.getUserProfile(t.id) || ee.A.isFetchingProfile(t.id, l)) return !0;
                        let e = ee.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = se.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = ee.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && se.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === rR.RP.WIDGETS) &&
                      r.some((e) => e.section === rR.RP.WISHLIST) &&
                      !u &&
                      !d)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: u }),
        [E, S] = l.useState(null);
    if (null == E && null != C && null != y) {
        let e = null == d && C;
        (S(e), e && y.enabled && j(rR.RP.WISHLIST));
    }
    let N = u.find((e) => e.section === b) ?? u[0];
    return (
        N.section !== b && j(N.section),
        (0, i.jsxs)("div", {
            className: sT.kL,
            children: [
                h && (0, i.jsx)(r4.kM, { location: "UserProfileModalV2Tabs" }),
                !0 === E && (0, i.jsx)(r9, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: sT.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(r0.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: N.section,
                        onItemSelect: function (e) {
                            ry.A.hasUnsavedChanges() && N.section === rR.RP.WIDGETS
                                ? (0, nP.VQ)()
                                : (p({ action: "PRESS_SECTION", section: e }), j(e), S((e) => e ?? !1));
                        },
                        children: u.map((e) =>
                            (0, i.jsxs)(
                                r0.V.Item,
                                {
                                    className: sT.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eW.intl.formatToPlainString(eW.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot &&
                                            (0, i.jsx)(r1.N, { variant: A, className: sT.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(r0.V.Panel, {
                    id: N.section,
                    "aria-label": N.text,
                    className: sT.NM,
                    children: (0, i.jsx)(m.F, {
                        component: (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: N.text }) }),
                        children: (0, i.jsx)(u_, {
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
var uw = n(933832),
    uD = n(972213);
let uM = {
        [rR.jM.WIDGET_ADDED]: {
            message: eW.intl.string(eW.t.fFP1Uy),
            icon: (0, i.jsx)(uw.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rR.jM.WIDGET_REMOVED]: {
            message: eW.intl.string(eW.t.zzsK7h),
            icon: (0, i.jsx)(uw.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rR.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eW.intl.string(eW.t["84MExs"]),
            icon: (0, i.jsx)(uD.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [rR.jM.SOMETHING_WENT_WRONG]: {
            message: eW.intl.string(eW.t.F8FvUy),
            icon: (0, i.jsx)(uD.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    uG = (e) => {
        let { className: t } = e,
            n = (0, rP.fu)(),
            r = (0, a.bG)([tv.Ay], () => tv.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(uM[n]), nE.O.announce(uM[n].message)) : o(!1);
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
            l.useEffect(() => () => (0, rP.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, rP.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(lZ.animated.div, { className: t, style: e, children: (0, i.jsx)(rK, { ...u }) }),
                ),
            })
        );
    };
var uU = n(297413),
    uF = n(465829),
    uW = n(826673),
    uB = n(73392),
    uV = n(576705),
    uH = n(997394);
function uz(e) {
    return null == e || "" === e ? void 0 : e;
}
function uY(e) {
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
        { canChangeDisplayName: y, permissionsLoaded: E } = (0, a.cf)([uV.A, Y.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = Y.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: uV.A.can(T.xBc.CHANGE_NICKNAME, e) || uV.A.can(T.xBc.MANAGE_NICKNAMES, e),
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
        (m = n ? (uz(r) ?? p.username) : p.username),
        {
            value: f,
            previewValue: uz(g) ?? m,
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
        M = (0, nI.A)({ userId: p.id, guildId: v, pendingDisplayNameStyles: D }),
        G = (0, uB.a)({ displayNameStyles: M, compensateForSafari: !1 }),
        U = eW.intl.string(I ? eW.t.mq6Cg9 : eW.t.XuZU7A),
        F = I ? eW.intl.string(eW.t.YcDKr8) : p.username,
        W = l.useRef(null),
        B = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, uW.Dr)(ek.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eF.i.INDIRECT_ACTION,
                    }),
                    (0, nZ.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: W }));
            },
            [A, v],
        ),
        V = {
            icon: nn.PaintbrushThinIcon,
            tooltip: eW.intl.string(eW.t.lqKKI2),
            "aria-label": eW.intl.string(eW.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: W,
        },
        H = S
            ? (0, i.jsx)("span", {
                  className: uH.Cs,
                  children: (0, i.jsx)(nc.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: tb.kL,
        children: (0, i.jsx)(eX.E, {
            variant: uF.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(rG.w, {
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
                    return (0, i.jsx)(uF.c$, {
                        user: p,
                        guildId: v,
                        displayName: n ? (uz(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: D,
                        className: s()(uH.dt, { [uH.jW]: n && "" === e }),
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
var uK = n(628072);
function uq(e) {
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
        className: s()(tb.kL, tb.oE, uK.k),
        children: (0, i.jsx)(rG.w, {
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
            preview: p ? (0, i.jsx)(uF.n2, { pronouns: g }) : null,
            label: eW.intl.string(eW.t["rniRE+"]),
            placeholder: h,
            maxLength: 40,
            spellCheck: !1,
        }),
    });
}
var uX = n(873200),
    uZ = n(305866),
    uJ = n(145497),
    u$ = n(685073),
    uQ = n(2967),
    u0 = n(318785),
    u1 = n(534400),
    u2 = n(152313),
    u5 = n(830543),
    u8 = n(415916),
    u6 = n(743981),
    u3 = n(295930),
    u9 = n(594615);
let u4 = "no-server-tag";
function u7(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e7.D, {
        innerRef: t,
        className: s()(u3.qJ, { [u3.wK]: o }),
        "aria-label": o ? eW.intl.string(eW.t.Pdd1nd) : eW.intl.formatToPlainString(eW.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eX.E, {
            variant: "body-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: u3.W3,
            tag: "span",
            children: [
                o
                    ? eW.intl.string(eW.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  u1.Z9,
                                  {
                                      src: (0, u$.gC)(n, r, u6.Sl.SIZE_14),
                                      size: u6.Sl.SIZE_14,
                                      className: u3.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, u$.gC)(n, r, u6.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(lc.ChevronSmallDownIcon, { size: "xs", color: "currentColor", className: u3.u4 }),
            ],
        }),
    });
}
function de() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, u0.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, uQ.Z)("UserProfileModalV2GuildTagSelect"),
        u = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        d = (0, a.cf)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (0, u$.Zo)(e?.primaryGuild);
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
                e.id === u4
                    ? (0, i.jsx)("div", {
                          className: u9.uN,
                          children: (0, i.jsx)(eX.E, {
                              variant: "body-md/normal",
                              color: "input-placeholder-text-default",
                              className: u3.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(lv.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: u4, label: eW.intl.string(eW.t.VxdWWH), value: u4 },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(uJ.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(u1.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
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
            (0, u8.A)(!0, () => {
                ((0, iJ.M)(), (0, u5.default)(), (0, u2.A)(r, b.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let y = (0, i.jsx)(uX.a3, {
        label: eW.intl.string(eW.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eW.intl.string(eW.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(nD.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(uZ.l, {
                className: s()(u3.yt, { [u3.R4]: o && !v, [u3.Lo]: v }),
                "aria-label": eW.intl.string(eW.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: u3.p$,
                          children: [
                              (0, i.jsx)(eX.E, {
                                  id: t,
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: eW.intl.string(eW.t["NV+MBV"]),
                              }),
                              (0, i.jsx)(np.$, {
                                  text: eW.intl.string(eW.t["65zBhE"]),
                                  variant: "secondary",
                                  onClick: () => j(n),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(uX.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, tx.p)({ primaryGuildId: e === u4 ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: u3.wx,
                                        children: [
                                            y,
                                            (0, i.jsx)(np.$, {
                                                text: eW.intl.string(eW.t.CumH4u),
                                                variant: "secondary",
                                                onClick: () => j(n),
                                            }),
                                        ],
                                    })
                                  : y,
                              (0, i.jsx)(uX.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(u7, { buttonRef: e, guildId: f, guildTag: h, guildBadge: x, ...t }),
    });
}
var dt = n(956495);
function dn(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(uF.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function di(e) {
    let t = (0, a.bG)([eb.A], () => eb.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(dn, { ...e, displayNameStylesOverride: t });
}
function dl(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(uU.A, {
                  user: t,
                  forceUsername: !0,
                  className: dt.a1,
                  usernameClass: dt.eb,
                  discriminatorClass: dt.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(uY, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(dt.AK, dt.j6),
                children: [r, (0, i.jsx)(uF.Ce, {}), (0, i.jsx)(uq, { displayProfile: n }), (0, i.jsx)(de, {}), l],
            }),
        ],
    });
}
function dr(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(dn, { ...n });
        case "try-it-out":
            return (0, i.jsx)(di, { ...n });
        case "edit":
            return (0, i.jsx)(dl, { ...n });
        default:
            return (0, eg.xb)(t);
    }
}
var ds = n(97808),
    da = n(22231),
    du = n(601255),
    dd = n(562819),
    dc = n(253400),
    dg = n(339984),
    df = n(329801),
    dm = n(884362);
let dp = dc.Ay.getEnableHardwareAcceleration() ? ds.Js : ds.eu;
function dh(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function dx(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(uv.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eW.intl.string(eW.t.YAgq3W),
        children: (0, i.jsx)(uI.rX, { children: n }),
    });
}
function dA(e) {
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
                E = null != (0, du.A)(C ? y : b) && (C ? null != y : null != b),
                S = d && null != v,
                N = l.useCallback(() => {
                    (r(),
                        dh(() =>
                            (0, ny.XD)({
                                uploadType: dg.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        dh(() =>
                            (0, dd.L)({
                                analyticsLocations: u,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, I, s]),
                T = l.useCallback(() => {
                    (r(),
                        (0, ny.rM)(null, f, (e) => (0, tx.p)({ guildId: n ?? void 0, avatar: e })),
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
                                uI.Dr,
                                { id: "change-avatar", label: eW.intl.string(eW.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                uI.Dr,
                                { id: "change-decoration", label: eW.intl.string(eW.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, i.jsx)(
                                      uI.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      uI.Dr,
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
                                      uI.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eW.intl.string(eW.t["2u5yu0"]),
                                          action: P,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      uI.Dr,
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
              className: s()(df.my, df.vk, dm.kL, { [dm.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(dp, { ...r, imageClassName: s()(df.Lw, dm.HU) }),
                  (0, i.jsx)(nD.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: nD.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, i.jsx)(dx, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: dm.r9,
                              children: (0, i.jsx)(ni.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: da.PencilIcon,
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
var dI = n(514905);
function dv(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(uv.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eW.intl.string(eW.t.FzU73A),
        children: (0, i.jsx)(uI.rX, { children: n }),
    });
}
function db(e) {
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
                        (0, ny.XD)({
                            uploadType: dg.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                M = l.useCallback(() => {
                    (r(),
                        (0, iu.W)({
                            analyticsLocations: u,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, ny.rM)(null, b, (e) => (0, tx.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, b]),
                U = l.useCallback(() => {
                    (r(), (0, tx.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, iN.w)({
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
                                uI.Dr,
                                { id: "change-banner", label: eW.intl.string(eW.t.N0bC3P), action: D },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                uI.Dr,
                                { id: "change-effect", label: eW.intl.string(eW.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                uI.Dr,
                                { id: "change-frame", label: eW.intl.string(eW.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    f &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      uI.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      uI.Dr,
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
                                      uI.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      uI.Dr,
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
                                      uI.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      uI.Dr,
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
              className: s()(dI.kL, { [dI.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eK.A, { ...e, className: dI.Pr }),
                  (0, i.jsx)(nD.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: nD.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(dv, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: dI.r9,
                              children: (0, i.jsx)(ni.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: da.PencilIcon,
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
var dj = n(419341),
    dy = n(776879),
    dC = n(837531),
    dE = n(186272),
    dS = n(447538);
let dN = (e) => e * (2 - e),
    dk = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function dT(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function dP(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, ea.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: dS.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function dR(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (ig.add(e), () => ig.delete(e)),
            () => im,
        );
    return null == s ? null : (0, i.jsx)(O.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function dO(e) {
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
    let J = null != z ? dk[z] : void 0,
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
        eI = L ? db : eK.A,
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
            (0, e9.A)({ user: o, guildId: ev, alt: h });
        }, [h, ev, o]);
    return (0, i.jsxs)("main", {
        className: s()(dS.profile, null != z && dS[z]),
        ref: w,
        "aria-busy": O,
        children: [
            (0, i.jsxs)("div", {
                className: dS.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: dS.profileHeaderBannerContainer,
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
                        ? (0, i.jsx)(dA, { ...eb })
                        : (0, i.jsx)(ez.A, {
                              ...eb,
                              onOpenAvatar: "read-only" === R ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === R && null == C ? ln.$T : void 0,
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
                className: dS.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(dr, {
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
                            className: dS.profileOverlay,
                            children: (0, i.jsx)(e$.A, {
                                user: o,
                                applicationId: ee,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: dS.profileBanner,
                            }),
                        }),
                    ea.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e8.A.Overlay,
                            {
                                className: dS.profileOverlay,
                                children: (0, i.jsx)(e$.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: dS.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e8.A.Overlay, {
                            className: dS.profileOverlay,
                            children: (0, i.jsx)(tp, {
                                heading: eW.intl.string(eW.t.Iyka0U),
                                headingVariant: "body-md/semibold",
                                headingIcon: { icon: g.CircleErrorIcon, size: "xs" },
                                className: dS.profileBanner,
                                children: (0, i.jsx)(H.T, { userId: o.id, variant: "body-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(e5.A, { user: o, className: dS.profileBanner }),
                    p?.private &&
                        (0, i.jsx)(e8.A.Overlay, {
                            className: dS.profileOverlay,
                            children: (0, i.jsx)(e2.A, { username: h }),
                        }),
                    (0, i.jsx)("div", {
                        className: dS.profileButtons,
                        children: (0, i.jsx)(tY, {
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
                            className: dS.profileRolesSection,
                            headingVariant: "body-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !en &&
                        (L || ex) &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t["3fe7U5"]),
                            scrollTargetId: rR.bk.CONNECTIONS,
                            children: (0, i.jsx)(nt, {
                                applicationIdentities: em,
                                connections: ep,
                                userId: o.id,
                                allowEditing: L,
                                className: dS.profileAppConnections,
                            }),
                        }),
                    !en &&
                        eA &&
                        (0, i.jsx)(tp, {
                            heading: eW.intl.string(eW.t.PHjkRE),
                            scrollTargetId: rR.bk.APPS,
                            children: (0, i.jsx)(tu, {
                                applicationRoleConnections: eh,
                                onClose: v,
                                className: dS.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rH, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(dR, { displayProfile: p, profileEffectOverride: N, isHovering: V }),
            null != k && (0, i.jsx)(D.A, { frame: k, filterLayer: dT, fadeIn: P }),
        ],
    });
}
function d_(e) {
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
function dL(e) {
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
        es = l.useCallback(() => (0, u8.A)(er, Z), [er, Z]),
        ea = l.useCallback(
            (e) =>
                (0, u8.A)(er, () => {
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
        ek = nu(),
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
                    config: { duration: 300, easing: dN },
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
        e9 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sL.A)(t),
                r = l?.length,
                s = (0, dy.A)(t),
                a = (0, an.A)(t.id),
                o = (0, dj.A)(t),
                { hasNewWishlistItems: u } = (0, r7.A)(t),
                d = [],
                c = t.id === n?.id,
                g = ai(t.id),
                f = a.length > 0;
            return (
                (g || f) && d.push({ text: eW.intl.string(eW.t.laViwx), section: rR.RP.WIDGETS }),
                d.push({ text: eW.intl.string(eW.t.chq59f), section: rR.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eW.intl.string(eW.t["7lZ31J"]), section: rR.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, dC.A)(i), section: rR.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, dE.A)(r), section: rR.RP.MUTUAL_GUILDS })),
                d
            );
        })({ user: u, currentUser: c }),
        { analyticsLocations: e4 } = (0, j.Ay)([...ei, b.A.USER_PROFILE_MODAL_V2]),
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
            ((0, Q.Wn)({ analyticsLocations: e4, ...e7, action: rR.pt.SHOW_STYLES_PANEL }), eY());
        }, [e4, e7, eY]),
        tt = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e4, ...e7, action: rR.pt.HIDE_STYLES_PANEL }), eK());
        }, [e4, e7, eK]),
        tn = (0, en.Ay)(u.id, eo);
    (0, V.A)(e4, tn, rR.R7.MODAL_V2);
    let ti = void 0 !== eB ? eB?.skuId : tn?.profileFrame?.skuId,
        tl = (0, L.A)(ti),
        tr = (0, _.A)(ti),
        { profileFrameStyle: ts, profileFrameClassName: ta } = (0, M.A)(tl);
    (0, w.A)({ skuId: tn?.profileFrame?.skuId, openedAt: K, context: e7, analyticsLocations: e4 });
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
        value: e4,
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
                        className: s()(ln.zr, { [ln.QF]: tn?.private === !0 }),
                        transitionState: B,
                        "aria-labelledby": tc,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rQ, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(dS.layoutContainer, ta, {
                                        [dS.editingPanelEnabled]: eP,
                                        [dS.editingPanelExpanded]: eP && eV,
                                        [dS.isAnimating]: eH,
                                    }),
                                    style: ts,
                                    children: [
                                        (0, i.jsxs)(d_, {
                                            user: u,
                                            displayProfile: tn,
                                            pendingThemeColors: ew,
                                            forceShowPremium: tu,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: ln.Oo,
                                                    children: [
                                                        (0, i.jsx)(tK.A, { onClose: es }),
                                                        (0, i.jsx)(f.A, {
                                                            children: (0, i.jsx)(m.H, { id: tc, children: tf }),
                                                        }),
                                                        e$ &&
                                                            (0, i.jsx)(rn, {
                                                                buttonRef: eq,
                                                                onClick: te,
                                                                className: dS.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eJ &&
                                                    (0, i.jsx)("div", {
                                                        className: dS.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(rt, {
                                                            innerRef: eX,
                                                            onClick: te,
                                                            className: dS.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(m.F, {
                                            children: [
                                                eP &&
                                                    ez((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(ri, {
                                                                  className: s()(dS.editingPanel, {
                                                                      [dS.isExpanded]: eV,
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
                                                    className: s()(el, ln.A7, dS.profileContentOuter),
                                                    innerClassName: dS.profileContentInner,
                                                    user: u,
                                                    displayProfile: tn,
                                                    themeType: ej.d.MODAL_V2,
                                                    pendingThemeColors: ew,
                                                    isPrivate: tn?.private === !0,
                                                    forceShowPremium: tu,
                                                    children: [
                                                        (0, i.jsx)(dP, { displayProfile: tn, pendingBanner: eG }),
                                                        tn?.private === !0 && (0, i.jsx)(e1.A, {}),
                                                        !eO && (0, i.jsx)(uG, { className: dS.noticeContainer }),
                                                        e5 &&
                                                            (0, i.jsx)("div", {
                                                                className: dS.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rK, {
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
                                                            className: dS.profileCardToastContainer,
                                                            children: (0, i.jsx)(eQ.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rJ, {
                                                            showScrim: e3,
                                                            showLoadingSpinner: ed,
                                                            className: dS.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(dO, {
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
                                                                (0, i.jsx)(uL, {
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
                            (0, i.jsx)(rD, { userId: u.id, guildId: eo, className: dS.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function dw(e) {
    return (0, i.jsx)(no, { children: (0, i.jsx)(dL, { ...e }) });
}
